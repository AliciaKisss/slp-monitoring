import React, { useState, useEffect, useContext, } from 'react'
import { cloneDeep, filter, findIndex, get, } from 'lodash'
import axios from 'axios'
import moment from 'moment'

import { Button, message, Tabs, Modal, } from 'antd'
import { RedoOutlined, PlusOutlined, } from '@ant-design/icons'

import UserInput from './UserInput'
import PlayerMonitoringTable from './PlayerMonitoringTable'
import EarningsView from './EarningsView';
import { PlayersContext } from '../contexts/PlayersContext'
import DonationView from './DonationView'

const { TabPane } = Tabs

function Main() {
  const {
		players,
    setPlayers,
    playersData,
    setPlayersData,
    selectedPlayer,
    setSelectedPlayer,
    setSlpRatePeso,
    slpRatePeso,
    setSlpRateLoading,
	} = useContext(PlayersContext)
  const slpRatePesoStorage = window.localStorage.getItem('slpRatePeso') || 1
  const [ tableLoading, setTableLoading ] = useState(true)
  const [ isFormVisible, setIsFormVisible ] = useState(false)

  useEffect(() => {
    loadPlayerData()
    loadSlpRate()
  }, [])

  const loadSlpRate = () => {
    setSlpRateLoading(true)
    async function fetchData() {
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php')
        if (res.data) {
          const coingeckoValue = get(res.data, 'smooth-love-potion.php', slpRatePeso)
          setSlpRatePeso(coingeckoValue)
        }
        setSlpRateLoading(false)
      } catch (err) {
        setSlpRatePeso(slpRatePesoStorage)
        setSlpRateLoading(false)
      }
    }
    fetchData()
  }

  const loadPlayerData = () => {
    let newPlayersData = []

    async function fetchData(player) {
      try {
        const res = await axios(`https://lunacia.skymavis.com/game-api/clients/${player.address}/items/1`)
        if (res.data) {
          const {
            client_id,
            total,
            claimable_total,
            last_claimed_item_at,
          } = res.data
          const locked = total - claimable_total
          newPlayersData.push({
            id: client_id,
            total: total || 0,
            claimable: claimable_total || 0,
            lockedSlp: locked,
            lastClaimedAt: last_claimed_item_at,
            dailyAvg: getDailyAvg(last_claimed_item_at, locked),
            nextClaimDate: getNextClaimDate(last_claimed_item_at)
          })
        }
      } catch (err) {
        newPlayersData.push({
          id: `invalid-user-${player.address}`,
          total: 0,
          claimable: 0,
          lockedSlp: 0,
          lastClaimedAt: moment(),
          dailyAvg: 0,
          nextClaimDate: moment()
        })
      }
      setPlayersData(newPlayersData)
      if (newPlayersData.length === players.value.length) {
        setTableLoading(false)
      }
    }

    if (players.value.length < 1) {
      setTableLoading(false)
      return
    }
    players.value.forEach((player) => {
      fetchData(player)
    })
  }

  const getDailyAvg = (lastClaimedAt, total) => {
    const lastClaimDate = moment(new Date(lastClaimedAt * 1000))
    const dateNow = moment()
    const dateDiff = dateNow.diff(lastClaimDate, 'days')
    if (dateDiff < 1) {
      return total
    }

    return total/dateDiff
  }

  const getNextClaimDate = (lastClaimedAt) => {
    const lastClaimDate = moment(new Date(lastClaimedAt * 1000))
    return lastClaimDate.add(14, 'days').format('LLL')
  }

  const handleDeletePlayer = (player) => {
    const newPlayers = filter(players.value, (p) => p.key !== player.key) 
    const newPlayersData = filter(playersData, p => p.id !== player.address)
    setPlayers({value: newPlayers})
    setPlayersData(newPlayersData)
    window.localStorage.setItem('players', JSON.stringify({value: newPlayers}))
    message.success(`Successfully deleted ${player.name}`)
  }

  const handleEditPlayer = (player) => {
    setIsFormVisible(true)
    setSelectedPlayer(player)
  }

  const handleSubmit = (player) => {
    setTableLoading(true)
    const newPlayersData = cloneDeep(playersData)
    const newPlayers = cloneDeep(players)

    axios(`https://lunacia.skymavis.com/game-api/clients/${player.address}/items/1`)
      .then(res => {
        if (res.data) {
          const {
            client_id,
            total,
            claimable_total,
            last_claimed_item_at,
          } = res.data
          const locked = total - claimable_total
          const playerData = {
            id: client_id,
            total: total || 0,
            claimable: claimable_total || 0,
            lockedSlp: locked,
            lastClaimedAt: last_claimed_item_at,
            dailyAvg: getDailyAvg(last_claimed_item_at, locked),
            nextClaimDate: getNextClaimDate(last_claimed_item_at)
          }

          if (selectedPlayer.name) {
            let pdIndex = findIndex(newPlayersData, player => {
              return player.id.toLowerCase() === selectedPlayer.address.toLowerCase()
            })
            let pIndex = findIndex(newPlayers.value, player => {
              return player.address.toLowerCase() === selectedPlayer.address.toLowerCase()
            })
            if (pdIndex !== -1 && pIndex !== -1) {
              newPlayersData.splice(pdIndex, 1, playerData)
              newPlayers.value.splice(pIndex, 1, player)
            }
          } else {
            newPlayersData.push(playerData)
            newPlayers.value.push(player)
          }
        }
        setTableLoading(false)
        setPlayersData(newPlayersData)
        window.localStorage.setItem('players', JSON.stringify(newPlayers))
        setPlayers(newPlayers)
      })
      .catch(err => {
        message.error('You entered an invalid etherium address')
        setTableLoading(false)
      })
      setIsFormVisible(false)
  }

  const handleOpenForm = () => {
    setIsFormVisible(true)
    setSelectedPlayer({})
  }

  const handleCancelForm = () => {
    setIsFormVisible(false)
  }

  const handleReload = () => {
    const newPlayersData = []
    setTableLoading(true)
    setPlayersData(newPlayersData)
    loadPlayerData()
    loadSlpRate()
  }

  const handleDonate = () => {
    Modal.info({
      title: 'Donation channels',
      content: (
        <DonationView />
      ),
      onOk() {},
    });
  }

  return (
    <div 
      className="SLP_Monitoring_App"
      style={{
        padding: '15px 25px',
        margin: 'auto'
      }}
    >
      <div
        style={{
          fontSize: '1.5em',
          fontWeight: 'bold',
          marginBottom: '10px',
          display: 'flex'
        }}
      >
        <div style={{ flexGrow: '3' }}>
          <span>SLP Tracker</span>
          <Button             
            type="link" 
            onClick={ handleDonate }
          >
            Donate
          </Button>
        </div>
        <Button 
          size="large" 
          shape="circle" 
          icon={<RedoOutlined />} 
          style={{ marginRight: '20px' }}
          onClick={ handleReload }
        />
        <Button 
          size="large" 
          type="primary" 
          shape="round" 
          icon={<PlusOutlined />} 
          onClick={ handleOpenForm }
        >
          Player
        </Button>
      </div>
      { isFormVisible &&
        <UserInput 
          onSubmit={ handleSubmit } 
          visible={ true }
          onCancel={ handleCancelForm }
          selectedPlayer={ selectedPlayer }
        />
      }
      <Tabs defaultActiveKey="1">
        <TabPane tab="Monitoring" key="1">
          <PlayerMonitoringTable 
            loading={ tableLoading }
            onDelete={ handleDeletePlayer }
            onEdit={ handleEditPlayer }
          />
        </TabPane>
        <TabPane tab="Estimate Earnings" key="2">
          <EarningsView />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Main;
