(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"0evu":function(e,t,n){e.exports={main:"antd-pro\\pages\\-account\\-settings\\-info-main",leftmenu:"antd-pro\\pages\\-account\\-settings\\-info-leftmenu",right:"antd-pro\\pages\\-account\\-settings\\-info-right",title:"antd-pro\\pages\\-account\\-settings\\-info-title"}},"N01/":function(e,t,n){"use strict";var a=n("g09b"),i=n("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("2Taf")),s=a(n("vZ4D")),u=a(n("l4Ni")),c=a(n("ujKo")),o=a(n("MhPg"));n("lUTK");var l,f,d,m=a(n("BvKs")),p=i(n("q1tI")),g=n("MuoO"),h=a(n("3a4m")),v=n("LLXN"),y=a(n("v99g")),M=a(n("0evu"));function w(e){return function(){var t,n=(0,c.default)(e);if(E()){var a=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return(0,u.default)(this,t)}}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var K=m.default.Item,b=(l=(0,g.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}}),l((d=function(e){(0,o.default)(n,e);var t=w(n);function n(e){var a;(0,r.default)(this,n),a=t.call(this,e),a.getmenu=function(){var e=a.state.menuMap;return Object.keys(e).map(function(t){return p.default.createElement(K,{key:t},e[t])})},a.getRightTitle=function(){var e=a.state,t=e.selectKey,n=e.menuMap;return n[t]},a.selectKey=function(e){var t=e.key;h.default.push("/account/settings/".concat(t)),a.setState({selectKey:t})},a.resize=function(){a.main&&requestAnimationFrame(function(){var e="inline",t=a.main.offsetWidth;a.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),a.setState({mode:e})})};var i=e.match,s=e.location,u={base:p.default.createElement(v.FormattedMessage,{id:"app.settings.menuMap.basic",defaultMessage:"Basic Settings"}),security:p.default.createElement(v.FormattedMessage,{id:"app.settings.menuMap.security",defaultMessage:"Security Settings"}),binding:p.default.createElement(v.FormattedMessage,{id:"app.settings.menuMap.binding",defaultMessage:"Account Binding"}),notification:p.default.createElement(v.FormattedMessage,{id:"app.settings.menuMap.notification",defaultMessage:"New Message Notification"})},c=s.pathname.replace("".concat(i.path,"/"),"");return a.state={mode:"inline",menuMap:u,selectKey:u[c]?c:"base"},a}return(0,s.default)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.currentUser;if(!a.userid)return"";var i=this.state,r=i.mode,s=i.selectKey;return p.default.createElement(y.default,null,p.default.createElement("div",{className:M.default.main,ref:function(t){e.main=t}},p.default.createElement("div",{className:M.default.leftmenu},p.default.createElement(m.default,{mode:r,selectedKeys:[s],onClick:this.selectKey},this.getmenu())),p.default.createElement("div",{className:M.default.right},p.default.createElement("div",{className:M.default.title},this.getRightTitle()),n)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.match,a=e.location,i=a.pathname.replace("".concat(n.path,"/"),"");return i=t.menuMap[i]?i:"base",i!==t.selectKey?{selectKey:i}:null}}]),n}(p.Component),f=d))||f),k=b;t.default=k}}]);