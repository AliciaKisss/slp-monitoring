(this["webpackJsonpslp-monitoring"]=this["webpackJsonpslp-monitoring"]||[]).push([[0],{177:function(e,t,a){},178:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),i=a.n(s),c=(a(177),a(178),a(179),a(95)),l=a.n(c),o=a(133),d=a(42),u=a(26),j=a(127),b=a.n(j),p=a(54),h=a.n(p),f=a(278),m=a(165),O=a(283),x=a(34),v=a(287),g=a(169),y=a(90),k=a(277),w=a(282),P=a(117),S=a(280),C=a(7),I=Object(n.createContext)(),L=function(e){var t=JSON.parse(window.localStorage.getItem("players"))||{value:[]},a=Object(n.useState)(t),r=Object(d.a)(a,2),s=r[0],i=r[1],c=Object(n.useState)([]),l=Object(d.a)(c,2),o=l[0],u=l[1],j=Object(n.useState)({}),b=Object(d.a)(j,2),p=b[0],h=b[1],f=Object(n.useState)(),m=Object(d.a)(f,2),O=m[0],x=m[1],v=Object(n.useState)("peso"),g=Object(d.a)(v,2),y=g[0],k=g[1],w=Object(n.useState)(!1),P=Object(d.a)(w,2),S=P[0],L=P[1];return Object(C.jsx)(I.Provider,{value:{players:s,setPlayers:i,playersData:o,setPlayersData:u,selectedPlayer:p,setSelectedPlayer:h,slpRatePeso:O,setSlpRatePeso:x,earningsUnit:y,setEarningsUnit:k,slpRateLoading:S,setSlpRateLoading:L},children:e.children})},_=function(e){var t,a=e.onSubmit,r=e.onCancel,s=e.visible,i=Object(n.useContext)(I).selectedPlayer,c=parseInt(Object(u.get)(i,"isko_share",0)),l=Object(n.useState)(100-c),o=Object(d.a)(l,2),j=o[0],b=o[1],p=Object(n.useState)("Isko"===Object(u.get)(i,"type","Manager")),h=Object(d.a)(p,2),f=h[0],x=h[1],v=k.a.useForm(),g=Object(d.a)(v,1)[0],L=function(e){var t=window.localStorage.getItem("players"),n=JSON.parse(t)||{value:[]},r=e.name,s=e.address,c=e.type,l=e.isko_share,o=e.account_name;if(!i.name&&Object(u.filter)(n.value,(function(t){return t.address===e.address})).length>0)return void m.b.warning("The address you entered is already in the list");var d=""===l?0:parseInt(l);a({key:Date.now(),name:r||"",address:s||"",type:c,account_name:o,isko_share:d}),g.resetFields()};return Object(C.jsx)(O.a,{title:i.name?"Edit Player":"Add a Player",visible:s,onOk:function(){L(g.getFieldsValue())},onCancel:function(){r()},closable:!1,children:Object(C.jsxs)(k.a,{onFinish:L,name:"axie-user-form",form:g,onFieldsChange:function(){var e=g.getFieldValue(),t=e.isko_share,a=e.type;x("Isko"===a);var n=""===t?0:parseInt(t),r=100-n;b(n>100?0:r)},children:[Object(C.jsx)(k.a.Item,{name:"name",rules:[{required:!0,message:"Please input nickname"}],initialValue:i.name,children:Object(C.jsx)(w.a,{placeholder:"Nickname *"})}),Object(C.jsx)(k.a.Item,{name:"account_name",initialValue:i.account_name,children:Object(C.jsx)(w.a,{placeholder:"Account Name (optional)"})}),Object(C.jsx)(k.a.Item,{name:"address",rules:[{required:!0,message:"Please input player address"}],initialValue:i.address,children:Object(C.jsx)(w.a,{placeholder:"Etherium address *"})}),Object(C.jsx)(k.a.Item,{label:"Type",name:"type",initialValue:Object(u.get)(i,"type","Manager"),children:Object(C.jsxs)(P.a.Group,{buttonStyle:"solid",children:[Object(C.jsx)(P.a.Button,{value:"Isko",children:"Isko"}),Object(C.jsx)(P.a.Button,{value:"Manager",children:"Manager"})]})}),f&&Object(C.jsx)(k.a.Item,(t={label:"Isko's share",name:"isko_share",rules:[{required:!0,message:"Please input isko's share"}],initialValue:Object(u.get)(i,"isko_share",60),help:"Manager's share is ".concat(j,"%")},Object(y.a)(t,"rules",[{required:f,message:"Isko's share is required"}]),Object(y.a)(t,"children",Object(C.jsx)(S.a,{placeholder:"Isko's share",min:0,max:100,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")},disabled:!f})),t))]})})},D=a(35),R=a.n(D),E=a(279),A=a(284),F=a(285),M=a(276),T=a(170),N=a(286),V=a(171),B=a(157),J=E.a.Title,U=DataView=function(e){var t=e.value,a=e.title,n=e.style,r=void 0===n?{}:n,s=e.level,i=void 0===s?4:s,c=e.small;return Object(C.jsxs)("div",{style:Object(B.a)({},r),children:[Object(C.jsx)("div",{style:{marginRight:"30px",color:"gray"},children:a}),c?Object(C.jsx)("div",{children:t}):Object(C.jsx)(J,{level:i,children:t})]})},q=E.a.Paragraph,z=function(e){var t=e.loading,a=e.onDelete,r=e.onEdit,s=Object(n.useContext)(I),i=s.players,c=s.playersData,l=function(e,t,a){var n=Object(u.filter)(c,(function(t){return t.id.toLowerCase()===e.toLowerCase()}));if(n.length>0){var r=n[0][t];switch(a){case"number":return R()(r).format("0,0");case"date":return h()(new Date(1e3*r)).format("LLL");case"decimal":return R()(r).format("0,0.0");default:return r}}return"-"},o=function(e){var t=e.substring(0,7),a=e.substring(e.length-5,e.length);return Object(C.jsx)(q,{copyable:{text:e.toLowerCase()},children:"".concat(t,"...").concat(a)})},d=function(e){r(e)},j=function(e){a(e)},b=[{title:"",render:function(e,t){return Object(C.jsxs)("div",{children:[Object(C.jsx)(F.a,{title:"Are you sure you want to delete ".concat(t.name,"?"),icon:Object(C.jsx)(T.a,{style:{color:"red"}}),onConfirm:function(){return j(t)},children:Object(C.jsx)(x.a,{type:"link",danger:!0,icon:Object(C.jsx)(N.a,{})})}),Object(C.jsx)(x.a,{type:"link",icon:Object(C.jsx)(V.a,{}),onClick:function(){return d(t)}})]})},width:5},{title:"Name",dataIndex:"name",key:"name",width:90,render:function(e,t){var a=t.type,r=t.isko_share,s=t.account_name,i=t.address,c=a||"Manager",l="Manager"===c?"gold":"cyan";return!isNaN(r)&&r||(r=0),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{style:{fontWeight:"bold"},children:e}),s&&Object(C.jsxs)("span",{children:["\xa0|\xa0",s]})]}),Object(C.jsx)("div",{children:o(i)}),Object(C.jsxs)("div",{children:[0!==r&&Object(C.jsxs)(n.Fragment,{children:[Object(C.jsx)("span",{children:"".concat(r," / ").concat(100-r)}),Object(C.jsx)("span",{style:{marginRight:"10px"}})]}),Object(C.jsx)(A.a,{color:l,children:c})]})]})}},{title:"Claimed SLP",dataIndex:"address",key:"address",width:50,render:function(e,t){return Object(C.jsx)("span",{children:l(t.address,"claimable","number")})}},{title:"Locked SLP",dataIndex:"address",key:"address",width:50,render:function(e,t){return Object(C.jsx)("span",{children:l(t.address,"lockedSlp","number")})}},{title:"Total SLP",dataIndex:"address",key:"address",width:50,render:function(e,t){return Object(C.jsx)("span",{children:l(t.address,"total","number")})}},{title:"Daily Avg",dataIndex:"address",key:"address",width:50,render:function(e,t){return Object(C.jsx)("span",{children:l(t.address,"dailyAvg","decimal")})}},{title:"Last Claim Date",dataIndex:"address",key:"address",width:150,render:function(e,t){return Object(C.jsx)("span",{children:l(t.address,"lastClaimedAt","date")})}},{title:"Next Claim Date",dataIndex:"address",key:"address",width:150,render:function(e,t){return Object(C.jsx)("span",{children:l(t.address,"nextClaimDate","none")})}}];return Object(C.jsx)(M.a,{loading:t,dataSource:i.value,columns:b,scroll:{x:1300}})},G=function(){var e=Object(n.useContext)(I),t=e.players,a=e.playersData,r=e.slpRatePeso,s=e.earningsUnit;return Object(C.jsx)(n.Fragment,{children:Object(C.jsxs)("div",{style:{display:"flex",marginBottom:"15px",flexWrap:"wrap"},children:[Object(C.jsx)(U,{title:"Manager's Total Earnings",value:function(){var e=0;return t.value.forEach((function(t){var n=t.address,r=t.type,s=t.isko_share,i=Object(u.filter)(a,(function(e){return e.id.toLowerCase()===n.toLowerCase()}));if(i.length>0)if("Isko"===r){var c=100-s;e+=i[0].total*(c/100)}else e+=i[0].total})),"peso"===s?"PHP ".concat(R()(e*parseFloat(r)).format("0,0.00")):R()(e).format("0,0.0")}(),style:{marginRight:"20px"}}),Object(C.jsx)(U,{title:"Iskos' Total Earnings",value:function(){var e=0;return Object(u.filter)(t.value,{type:"Isko"}).forEach((function(t){var n=t.isko_share,r=t.address,s=Object(u.filter)(a,(function(e){return e.id.toLowerCase()===r.toLowerCase()}));if(s.length>0){var i=s[0].total*(n/100);e+=i}})),"peso"===s?"PHP ".concat(R()(e*r).format("0,0.00")):R()(e).format("0,0.0")}()})]})})},H=(E.a.Paragraph,function(){var e=Object(n.useContext)(I),t=e.players,a=e.playersData,r=e.slpRatePeso,s=function(e,t,n){var r=Object(u.filter)(a,(function(t){return t.id.toLowerCase()===e.toLowerCase()}));if(r.length>0){var s=r[0][t];switch(n){case"number":return R()(s).format("0,0");case"date":return h()(new Date(1e3*s)).format("LLL");case"decimal":return R()(s).format("0.0");default:return s}}return"-"},i=function(e,t){var n="",s="";if("Manager"===e.type)return"-";if(a){var i=Object(u.filter)(a,(function(t){return t.id.toLowerCase()===e.address.toLowerCase()}))[0];if(i&&e){var c=e.isko_share||0,l=0;0!==c&&(l=(s=i.total*(c/100))*r),n="PHP ".concat(R()(l).format("0,0.00"))}}return"slp"===t?R()(s).format("0,0.0"):n},c=function(e,t){var n="-",s="-";if(a){var i=Object(u.filter)(a,(function(t){return t.id.toLowerCase()===e.address.toLowerCase()}))[0];if(i&&e){var c=e.isko_share||0,l=100-c,o=i.total*r;s=i.total,0!==c&&(o=(s=i.total*(l/100))*r),n="PHP ".concat(R()(o).format("0,0.00"))}}return"slp"===t?R()(s).format("0,0.0"):n},l=[{title:"Name",dataIndex:"name",key:"name",width:10,render:function(e,t){var a=t.type,n=t.isko_share,r=a||"Manager",s="Manager"===r?"gold":"cyan";return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{style:{fontWeight:"bold",marginRight:"10px"},children:e}),Object(C.jsx)(A.a,{color:s,children:r})]}),"Isko"===r&&"".concat(n," / ").concat(100-n)]})}},{title:"SLP Earned",dataIndex:"name",key:"name",width:10,render:function(e,t){return Object(C.jsx)("span",{children:s(t.address,"total","number")})}},{title:"Isko's Share",children:[{title:"SLP",dataIndex:"name",key:"name",width:10,render:function(e,t){return Object(C.jsx)("span",{children:i(t,"slp")})}},{title:"Peso",dataIndex:"name",key:"name",width:10,render:function(e,t){return Object(C.jsx)("span",{children:i(t,"peso")})}}]},{title:"Manager's Share",children:[{title:"SLP",dataIndex:"name",key:"name",width:10,render:function(e,t){return Object(C.jsx)("span",{children:c(t,"slp")})}},{title:"Peso",dataIndex:"name",key:"name",width:10,render:function(e,t){return Object(C.jsx)("span",{children:c(t,"peso")})}}]}];return Object(C.jsx)(M.a,{scroll:{x:700},dataSource:t.value,columns:l})}),W=a(281),K=E.a.Paragraph,Y=E.a.Title,Q=function(){var e=Object(n.useContext)(I),t=e.slpRatePeso,a=e.setSlpRatePeso,r=e.earningsUnit,s=e.setEarningsUnit,i=e.slpRateLoading;return Object(C.jsxs)("div",{style:{marginBottom:"10px",display:"flex"},children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{style:{marginRight:"50px",color:"gray"},children:"SLP Rate in Peso"}),i?Object(C.jsx)(W.a.Input,{style:{width:40},active:!0,size:"small"}):Object(C.jsx)("div",{children:Object(C.jsx)(Y,{level:4,children:Object(C.jsx)(K,{editable:{onChange:function(e){""!==e&&(a(parseFloat(e)),window.localStorage.setItem("slpRatePeso",parseFloat(e)))}},children:R()(t).format("0,0.00")})})})]}),Object(C.jsx)("div",{children:Object(C.jsx)(U,{title:"Earnings Unit",value:Object(C.jsx)(P.a.Group,{options:[{label:"Peso",value:"peso"},{label:"SLP",value:"slp"}],onChange:function(e){s(e.target.value)},value:r,optionType:"button",buttonStyle:"solid"})})})]})},X=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(Q,{}),Object(C.jsx)(G,{}),Object(C.jsx)(H,{})]})},Z=a.p+"static/media/gcash.d3dcbc45.jpg",$=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(U,{title:"Ronin Address [apple-bit]",value:"ronin:786521e1ef005f71b9b454e6e4be48bdc645a3c6",level:5,style:{marginTop:"20px"}}),Object(C.jsx)(U,{title:"GCash",style:{marginTop:"20px"},value:Object(C.jsx)("img",{src:Z,style:{width:"50%"}}),level:5}),Object(C.jsx)(U,{title:"Developer",style:{marginTop:"20px"},value:"Apple Ramos",small:!0})]})},ee=f.a.TabPane;var te=function(){var e=Object(n.useContext)(I),t=e.players,a=e.setPlayers,r=e.playersData,s=e.setPlayersData,i=e.selectedPlayer,c=e.setSelectedPlayer,j=e.setSlpRatePeso,p=e.slpRatePeso,y=e.setSlpRateLoading,k=window.localStorage.getItem("slpRatePeso")||1,w=Object(n.useState)(!0),P=Object(d.a)(w,2),S=P[0],L=P[1],D=Object(n.useState)(!1),R=Object(d.a)(D,2),E=R[0],A=R[1];Object(n.useEffect)((function(){M(),F()}),[]);var F=function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php");case 3:(t=e.sent).data&&(a=Object(u.get)(t.data,"smooth-love-potion.php",p),j(a)),y(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),j(k),y(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}y(!0),function(){e.apply(this,arguments)}()},M=function(){var e=[];function a(){return(a=Object(o.a)(l.a.mark((function a(n){var r,i,c,o,d,u;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b()("https://lunacia.skymavis.com/game-api/clients/".concat(n.address,"/items/1"));case 3:(r=a.sent).data&&(i=r.data,c=i.client_id,o=i.total,d=i.claimable_total,u=i.last_claimed_item_at,e.push({id:c,total:o||0,claimable:d||0,lockedSlp:o-d,lastClaimedAt:u,dailyAvg:T(u,o),nextClaimDate:N(u)})),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),e.push({id:"invalid-user-".concat(n.address),total:0,claimable:0,lockedSlp:0,lastClaimedAt:h()(),dailyAvg:0,nextClaimDate:h()()});case 10:s(e),e.length===t.value.length&&L(!1);case 12:case"end":return a.stop()}}),a,null,[[0,7]])})))).apply(this,arguments)}t.value.length<1?L(!1):t.value.forEach((function(e){!function(e){a.apply(this,arguments)}(e)}))},T=function(e,t){var a=h()(new Date(1e3*e)),n=h()().diff(a,"days");return n<1?t:t/n},N=function(e){return h()(new Date(1e3*e)).add(14,"days").format("LLL")};return Object(C.jsxs)("div",{className:"SLP_Monitoring_App",style:{padding:"15px 25px",margin:"auto"},children:[Object(C.jsxs)("div",{style:{fontSize:"1.5em",fontWeight:"bold",marginBottom:"10px",display:"flex"},children:[Object(C.jsxs)("div",{style:{flexGrow:"3"},children:[Object(C.jsx)("span",{children:"SLP Tracker"}),Object(C.jsx)(x.a,{type:"link",onClick:function(){O.a.info({title:"Donation channels",content:Object(C.jsx)($,{}),onOk:function(){}})},children:"Donate"})]}),Object(C.jsx)(x.a,{size:"large",shape:"circle",icon:Object(C.jsx)(v.a,{}),style:{marginRight:"20px"},onClick:function(){L(!0),s([]),M(),F()}}),Object(C.jsx)(x.a,{size:"large",type:"primary",shape:"round",icon:Object(C.jsx)(g.a,{}),onClick:function(){A(!0),c({})},children:"Player"})]}),E&&Object(C.jsx)(_,{onSubmit:function(e){L(!0);var n=Object(u.cloneDeep)(r),c=Object(u.cloneDeep)(t);b()("https://lunacia.skymavis.com/game-api/clients/".concat(e.address,"/items/1")).then((function(t){if(t.data){var r=t.data,l=r.client_id,o=r.total,d=r.claimable_total,j=r.last_claimed_item_at,b={id:l,total:o||0,claimable:d||0,lockedSlp:o-d,lastClaimedAt:j,dailyAvg:T(j,o),nextClaimDate:N(j)};if(i.name){var p=Object(u.findIndex)(n,(function(e){return e.id.toLowerCase()===i.address.toLowerCase()})),h=Object(u.findIndex)(c.value,(function(e){return e.address.toLowerCase()===i.address.toLowerCase()}));-1!==p&&-1!==h&&(n.splice(p,1,b),c.value.splice(h,1,e))}else n.push(b),c.value.push(e)}L(!1),s(n),window.localStorage.setItem("players",JSON.stringify(c)),a(c)})).catch((function(e){m.b.error("You entered an invalid etherium address"),L(!1)})),A(!1)},visible:!0,onCancel:function(){A(!1)},selectedPlayer:i}),Object(C.jsxs)(f.a,{defaultActiveKey:"1",children:[Object(C.jsx)(ee,{tab:"Monitoring",children:Object(C.jsx)(z,{loading:S,onDelete:function(e){var n=Object(u.filter)(t.value,(function(t){return t.key!==e.key})),i=Object(u.filter)(r,(function(t){return t.id!==e.address}));a({value:n}),s(i),window.localStorage.setItem("players",JSON.stringify({value:n})),m.b.success("Successfully deleted ".concat(e.name))},onEdit:function(e){A(!0),c(e)}})},"1"),Object(C.jsx)(ee,{tab:"Estimate Earnings",children:Object(C.jsx)(X,{})},"2")]})]})};var ae=function(){return Object(C.jsx)(L,{children:Object(C.jsx)(te,{})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,288)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[274,1,2]]]);
//# sourceMappingURL=main.e8b0bbde.chunk.js.map