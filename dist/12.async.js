(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"3KZ8":function(e,t,a){e.exports={"progress-bar":"antd-pro\\components\\progress-bar\\style-progress-bar","loading-anim":"antd-pro\\components\\progress-bar\\style-loading-anim","progress-img":"antd-pro\\components\\progress-bar\\style-progress-img"}},"4Ao3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={listLocationUsingGet:{method:"get",url:"/api/v1/location/list-location"},listParentUsingGet:{method:"get",url:"/api/v1/location/list-parent"},itemDetailUsingGet:{method:"get",url:"/api/v1/items/item-detail"},listSizeUsingGet:{method:"get",url:"/api/v1/items/list-size"},listTypeUsingGet:{method:"get",url:"/api/v1/items/list-type"},queryItemDetailUsingGet:{method:"get",url:"/api/v1/items/query-detail"},itemTypeDetailUsingGet:{method:"get",url:"/api/v1/items/type-detail"},outUsingGet_1:{method:"get",url:"/api/v1/stock-data/test"},inUsingPost:{method:"post",url:"/api/v1/stocks/in"},outUsingPost:{method:"post",url:"/api/v1/stocks/out"},queryStockUsingGet:{method:"get",url:"/api/v1/stocks/query"},getStoreStockUsingPost:{method:"post",url:"/api/v1/stocks/store"},addStoreUsingPost:{method:"post",url:"/api/v1/store/add-store"},delStoreUsingGet:{method:"get",url:"/api/v1/store/del-store"},listStoresUsingPost:{method:"post",url:"/api/v1/store/list-stores"},listStoresByAreaUsingPost:{method:"post",url:"/api/v1/store/list-stores-by-area"},listStoresByCityUsingPost:{method:"post",url:"/api/v1/store/list-stores-by-city"},listStoresByDistUsingPost:{method:"post",url:"/api/v1/store/list-stores-by-district"},listStoresByProvUsingPost:{method:"post",url:"/api/v1/store/list-stores-by-prov"},searchStoresUsingPost:{method:"post",url:"/api/v1/store/search-stores"},updStoreUsingPost:{method:"post",url:"/api/v1/store/update-store"},outUsingGet:{method:"get",url:"/api/v1/sale-data/test"},returnGoodUsingPost:{method:"post",url:"/api/v1/sales/return"},saleUsingPost:{method:"post",url:"/api/v1/sales/sale"}};t.default=r},"7Qib":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var r=a("LhCv"),n=(0,r.createBrowserHistory)();t.history=n},"9VA1":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.authBeforeRes=i,t.authAfterRes=s,t.reqHeader=void 0,a("miYZ");var n=r(a("tsqr")),l=a("7Qib");n.default.config({maxCount:1});var o={Accept:"*/*",mode:"cors","Content-Type":"application/json"};function i(e){switch(e.status){case 200:return e;case 302:return n.default.info("\u767b\u5f55\u8d85\u65f6, \u8bf7\u91cd\u65b0\u767b\u5f55\uff01"),0;case 401:return n.default.config({maxCount:1}),l.history.push("/login"),e;default:return e}}function s(e){switch(e.result_code){case 1:return e;case 0:return Promise.reject(e);default:return e.message&&n.default.error(e.message,5),e}}t.reqHeader=o},"A/zZ":function(e,t,a){"use strict";var r=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/zsF");var l=r(a("PArb"));a("5Dmo");var o=r(a("3S7+"));a("IzEo");var i=r(a("bx4M"));a("g9YV");var s=r(a("wCAj")),u=r(a("2Taf")),d=r(a("vZ4D")),c=r(a("l4Ni")),f=r(a("ujKo")),m=r(a("MhPg")),p=r(a("SQvw"));a("Q9mQ");var h=r(a("diRs"));a("Awhp");var v=r(a("KrTs"));a("14J3");var g=r(a("BMrR"));a("jCWc");var y=r(a("kPKH"));a("qVdP");var E=r(a("jsC+"));a("Pwec");var b=r(a("CtXQ"));a("lUTK");var k=r(a("BvKs"));a("+L6B");var w=r(a("2/Rp"));a("FJo9");var x,S,D,P,U,C,N=r(a("L41K")),T=n(a("q1tI")),A=r(a("fqkP")),j=r(a("UjoV")),O=a("MuoO"),q=r(a("TSYQ")),B=r(a("+kNj")),z=r(a("zHco")),L=r(a("oV6e")),M=a("Nlzp");function F(e){return function(){var t,a=(0,f.default)(e);if(R()){var r=(0,f.default)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return(0,c.default)(this,t)}}function R(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var _=N.default.Step,G=B.default.Description,I=w.default.Group,H=function(){return window.innerWidth||document.documentElement.clientWidth},J=T.default.createElement(k.default,null,T.default.createElement(k.default.Item,{key:"1"},"\u9009\u9879\u4e00"),T.default.createElement(k.default.Item,{key:"2"},"\u9009\u9879\u4e8c"),T.default.createElement(k.default.Item,{key:"3"},"\u9009\u9879\u4e09")),V=T.default.createElement(T.Fragment,null,T.default.createElement(I,null,T.default.createElement(w.default,null,"\u64cd\u4f5c"),T.default.createElement(w.default,null,"\u64cd\u4f5c"),T.default.createElement(E.default,{overlay:J,placement:"bottomRight"},T.default.createElement(w.default,null,T.default.createElement(b.default,{type:"ellipsis"})))),T.default.createElement(w.default,{type:"primary"},"\u4e3b\u64cd\u4f5c")),K=T.default.createElement(g.default,null,T.default.createElement(y.default,{xs:24,sm:12},T.default.createElement("div",{className:L.default.textSecondary},"\u72b6\u6001"),T.default.createElement("div",{className:L.default.heading},"\u5f85\u5ba1\u6279")),T.default.createElement(y.default,{xs:24,sm:12},T.default.createElement("div",{className:L.default.textSecondary},"\u8ba2\u5355\u91d1\u989d"),T.default.createElement("div",{className:L.default.heading},"\xa5 568.08"))),Q=T.default.createElement(B.default,{className:L.default.headerList,size:"small",col:"2"},T.default.createElement(G,{term:"\u521b\u5efa\u4eba"},"\u66f2\u4e3d\u4e3d"),T.default.createElement(G,{term:"\u8ba2\u8d2d\u4ea7\u54c1"},"XX \u670d\u52a1"),T.default.createElement(G,{term:"\u521b\u5efa\u65f6\u95f4"},"2017-07-07"),T.default.createElement(G,{term:"\u5173\u8054\u5355\u636e"},T.default.createElement("a",{href:""},"12421")),T.default.createElement(G,{term:"\u751f\u6548\u65e5\u671f"},"2017-07-07 ~ 2017-08-08"),T.default.createElement(G,{term:"\u5907\u6ce8"},"\u8bf7\u4e8e\u4e24\u4e2a\u5de5\u4f5c\u65e5\u5185\u786e\u8ba4")),Z=[{key:"detail",tab:"\u8be6\u60c5"},{key:"rule",tab:"\u89c4\u5219"}],Y=T.default.createElement("div",{className:(0,q.default)(L.default.textSecondary,L.default.stepDescription)},T.default.createElement(T.Fragment,null,"\u66f2\u4e3d\u4e3d",T.default.createElement(b.default,{type:"dingding-o",style:{marginLeft:8}})),T.default.createElement("div",null,"2016-12-12 12:32")),X=T.default.createElement("div",{className:L.default.stepDescription},T.default.createElement(T.Fragment,null,"\u5468\u6bdb\u6bdb",T.default.createElement(b.default,{type:"dingding-o",style:{color:"#00A0E9",marginLeft:8}})),T.default.createElement("div",null,T.default.createElement("a",{href:""},"\u50ac\u4e00\u4e0b"))),W=T.default.createElement("div",{style:{width:160}},"\u5434\u52a0\u53f7",T.default.createElement("span",{className:L.default.textSecondary,style:{float:"right"}},T.default.createElement(v.default,{status:"default",text:T.default.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},"\u672a\u54cd\u5e94")})),T.default.createElement("div",{className:L.default.textSecondary,style:{marginTop:4}},"\u8017\u65f6\uff1a2\u5c0f\u65f625\u5206\u949f")),$=function(e,t){var a=t.status;return"process"===a?T.default.createElement(h.default,{placement:"topLeft",arrowPointAtCenter:!0,content:W},e):e},ee=[{key:"tab1",tab:"\u64cd\u4f5c\u65e5\u5fd7\u4e00"},{key:"tab2",tab:"\u64cd\u4f5c\u65e5\u5fd7\u4e8c"},{key:"tab3",tab:"\u64cd\u4f5c\u65e5\u5fd7\u4e09"}],te=[{title:"\u64cd\u4f5c\u7c7b\u578b",dataIndex:"type",key:"type"},{title:"\u64cd\u4f5c\u4eba",dataIndex:"name",key:"name"},{title:"\u6267\u884c\u7ed3\u679c",dataIndex:"status",key:"status",render:function(e){return"agree"===e?T.default.createElement(v.default,{status:"success",text:"\u6210\u529f"}):T.default.createElement(v.default,{status:"error",text:"\u9a73\u56de"})}},{title:"\u64cd\u4f5c\u65f6\u95f4",dataIndex:"updatedAt",key:"updatedAt"},{title:"\u5907\u6ce8",dataIndex:"memo",key:"memo"}],ae=(x=(0,O.connect)(function(e){var t=e.profile,a=e.loading;return{profile:t,loading:a.effects["profile/fetchAdvanced"]}}),S=(0,j.default)(),D=(0,A.default)(200),x((C=function(e){(0,m.default)(a,e);var t=F(a);function a(){var e;(0,u.default)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n)),e.state={operationkey:"tab1",stepDirection:"horizontal"},e.onOperationTabChange=function(t){e.setState({operationkey:t})},e}return(0,d.default)(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"profile/fetchAdvanced"}),this.setStepDirection(),M.API.listLocationUsingGet({locationClass:1}).then(function(e){console.log("res\u6210\u529f",e)}),window.addEventListener("resize",this.setStepDirection,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setStepDirection),this.setStepDirection.cancel()}},{key:"setStepDirection",value:function(){var e=this.state.stepDirection,t=H();"vertical"!==e&&t<=576?this.setState({stepDirection:"vertical"}):"horizontal"!==e&&t>576&&this.setState({stepDirection:"horizontal"})}},{key:"render",value:function(){var e=this.state,t=e.stepDirection,a=e.operationkey,r=this.props,n=r.profile,u=r.loading,d=n.advancedOperation1,c=n.advancedOperation2,f=n.advancedOperation3,m={tab1:T.default.createElement(s.default,{pagination:!1,loading:u,dataSource:d,columns:te}),tab2:T.default.createElement(s.default,{pagination:!1,loading:u,dataSource:c,columns:te}),tab3:T.default.createElement(s.default,{pagination:!1,loading:u,dataSource:f,columns:te})};return T.default.createElement(z.default,{title:"\u5355\u53f7\uff1a234231029431",logo:T.default.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"}),action:V,content:Q,extraContent:K,tabList:Z},T.default.createElement(i.default,{title:"\u6d41\u7a0b\u8fdb\u5ea6",style:{marginBottom:24},bordered:!1},T.default.createElement(N.default,{direction:t,progressDot:$,current:1},T.default.createElement(_,{title:"\u521b\u5efa\u9879\u76ee",description:Y}),T.default.createElement(_,{title:"\u90e8\u95e8\u521d\u5ba1",description:X}),T.default.createElement(_,{title:"\u8d22\u52a1\u590d\u6838"}),T.default.createElement(_,{title:"\u5b8c\u6210"}))),T.default.createElement(i.default,{title:"\u7528\u6237\u4fe1\u606f",style:{marginBottom:24},bordered:!1},T.default.createElement(B.default,{style:{marginBottom:24}},T.default.createElement(G,{term:"\u7528\u6237\u59d3\u540d"},"\u4ed8\u5c0f\u5c0f"),T.default.createElement(G,{term:"\u4f1a\u5458\u5361\u53f7"},"32943898021309809423"),T.default.createElement(G,{term:"\u8eab\u4efd\u8bc1"},"3321944288191034921"),T.default.createElement(G,{term:"\u8054\u7cfb\u65b9\u5f0f"},"18112345678"),T.default.createElement(G,{term:"\u8054\u7cfb\u5730\u5740"},"\u66f2\u4e3d\u4e3d 18100000000 \u6d59\u6c5f\u7701\u676d\u5dde\u5e02\u897f\u6e56\u533a\u9ec4\u59d1\u5c71\u8def\u5de5\u4e13\u8def\u4ea4\u53c9\u8def\u53e3")),T.default.createElement(B.default,{style:{marginBottom:24},title:"\u4fe1\u606f\u7ec4"},T.default.createElement(G,{term:"\u67d0\u67d0\u6570\u636e"},"725"),T.default.createElement(G,{term:"\u8be5\u6570\u636e\u66f4\u65b0\u65f6\u95f4"},"2017-08-08"),T.default.createElement(G,null,"\xa0"),T.default.createElement(G,{term:T.default.createElement("span",null,"\u67d0\u67d0\u6570\u636e",T.default.createElement(o.default,{title:"\u6570\u636e\u8bf4\u660e"},T.default.createElement(b.default,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4},type:"info-circle-o"})))},"725"),T.default.createElement(G,{term:"\u8be5\u6570\u636e\u66f4\u65b0\u65f6\u95f4"},"2017-08-08")),T.default.createElement("h4",{style:{marginBottom:16}},"\u4fe1\u606f\u7ec4"),T.default.createElement(i.default,{type:"inner",title:"\u591a\u5c42\u7ea7\u4fe1\u606f\u7ec4"},T.default.createElement(B.default,{size:"small",style:{marginBottom:16},title:"\u7ec4\u540d\u79f0"},T.default.createElement(G,{term:"\u8d1f\u8d23\u4eba"},"\u6797\u4e1c\u4e1c"),T.default.createElement(G,{term:"\u89d2\u8272\u7801"},"1234567"),T.default.createElement(G,{term:"\u6240\u5c5e\u90e8\u95e8"},"XX\u516c\u53f8 - YY\u90e8"),T.default.createElement(G,{term:"\u8fc7\u671f\u65f6\u95f4"},"2017-08-08"),T.default.createElement(G,{term:"\u63cf\u8ff0"},"\u8fd9\u6bb5\u63cf\u8ff0\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f...")),T.default.createElement(l.default,{style:{margin:"16px 0"}}),T.default.createElement(B.default,{size:"small",style:{marginBottom:16},title:"\u7ec4\u540d\u79f0",col:"1"},T.default.createElement(G,{term:"\u5b66\u540d"},"Citrullus lanatus (Thunb.) Matsum. et Nakai\u4e00\u5e74\u751f\u8513\u751f\u85e4\u672c\uff1b\u830e\u3001\u679d\u7c97\u58ee\uff0c\u5177\u660e\u663e\u7684\u68f1\u3002\u5377\u987b\u8f83\u7c97..")),T.default.createElement(l.default,{style:{margin:"16px 0"}}),T.default.createElement(B.default,{size:"small",title:"\u7ec4\u540d\u79f0"},T.default.createElement(G,{term:"\u8d1f\u8d23\u4eba"},"\u4ed8\u5c0f\u5c0f"),T.default.createElement(G,{term:"\u89d2\u8272\u7801"},"1234568")))),T.default.createElement(i.default,{title:"\u7528\u6237\u8fd1\u534a\u5e74\u6765\u7535\u8bb0\u5f55",style:{marginBottom:24},bordered:!1},T.default.createElement("div",{className:L.default.noData},T.default.createElement(b.default,{type:"frown-o"}),"\u6682\u65e0\u6570\u636e")),T.default.createElement(i.default,{className:L.default.tabsCard,bordered:!1,tabList:ee,onTabChange:this.onOperationTabChange},m[a]))}}]),a}(T.Component),U=C,(0,p.default)(U.prototype,"setStepDirection",[S,D],Object.getOwnPropertyDescriptor(U.prototype,"setStepDirection"),U.prototype),P=U))||P),re=ae;t.default=re},Nlzp:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.API=void 0;var n=r(a("d6i3")),l=r(a("1l/V")),o=r(a("dRp0")),i=r(a("4Ao3")),s=Object.keys;function u(e){var t={};return s(e).forEach(function(a){console.log(a);var r=e[a];console.log("url",r),t[a]=function(){var e=(0,l.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.default[r.method](r.url,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),t}var d=u(Object.assign({},i.default));t.API=d},dRp0:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("2Taf")),l=r(a("vZ4D"));a("bZMm");var o=a("9VA1"),i=r(a("qBYk")),s=a("7Qib"),u=function(){function e(){(0,n.default)(this,e)}return(0,l.default)(e,[{key:"get",value:function(e,t){var a={method:"GET"},r=t?this.buildUrl(e,t):e;return this.request(r,a)}},{key:"post",value:function(e,t){var a={method:"POST",headers:{"content-type":"application/json;charset=UTF-8"},body:{}};return t&&(a.body=JSON.stringify(t)),this.request(e,a)}},{key:"delete",value:function(e,t){var a={method:"DELETE"},r=t?this.buildUrl(e,t):e;return this.request(r,a)}},{key:"put",value:function(e,t){var a={method:"PUT",body:{}};return t&&(a.body=JSON.stringify(t)),this.request(e,a)}},{key:"postForDownload",value:function(e,t){var a={method:"POST",headers:{"content-type":"application/json;charset=UTF-8"},body:{}};return t&&(a.body=JSON.stringify(t)),this.requestForDownload(e,a)}},{key:"requestForDownload",value:function(e,t){var a=this;t.headers=t.headers||o.reqHeader,t.credentials="same-origin",i.default.show();var r="http://39.97.242.132:8080"+e;return fetch(r,t).then(o.authBeforeRes).then(function(e){return i.default.hide(),e.blob()}).catch(function(e){a.handleExcept(e)})}},{key:"postForm",value:function(e,t,a){var r={method:"POST",headers:{enctype:"multipart/form-data"},body:{}};return t&&(r.body=a?this.buildFormData(t):new FormData(t)),this.request(e,r)}},{key:"head",value:function(e){var t={method:"Head"};return this.request(e,t)}},{key:"buildUrl",value:function(e,t){var a=[];if(t)for(var r in t)r&&a.push(r+"="+encodeURIComponent(t[r]));return console.log("final url",e+"?"+a.join("&")),e+"?"+a.join("&")}},{key:"buildFormData",value:function(e){if(e){var t=new FormData;for(var a in e)a&&t.append(a,e[a]);return t}}},{key:"request",value:function(e,t){var a=this;t.headers=t.headers||o.reqHeader,t.credentials="same-origin",i.default.show();var r="http://39.97.242.132:8080"+e;return console.log("url\u5bf9\u6bd4",e),console.log("newUrl\u5bf9\u6bd4",r),console.log("options1",t),fetch(r,t).then(o.authBeforeRes).then(function(e){return console.log("response",e),console.log("response",t),e.json()}).catch(function(e){a.handleExcept(e)})}},{key:"handleExcept",value:function(e){var t=e.name;401!==t?403!==t?t<=504&&t>=500?s.history.push("/login"):t>=404&&t<422&&s.history.push("/login"):s.history.push("/login"):window.location.href="/login"}}]),e}(),d=new u;t.default=d},oV6e:function(e,t,a){e.exports={headerList:"antd-pro\\pages\\-profile\\-advanced-profile-headerList",tabsCard:"antd-pro\\pages\\-profile\\-advanced-profile-tabsCard",noData:"antd-pro\\pages\\-profile\\-advanced-profile-noData",heading:"antd-pro\\pages\\-profile\\-advanced-profile-heading",stepDescription:"antd-pro\\pages\\-profile\\-advanced-profile-stepDescription",textSecondary:"antd-pro\\pages\\-profile\\-advanced-profile-textSecondary"}},qBYk:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("2Taf")),l=r(a("vZ4D"));a("3KZ8");var o=function(){function e(){(0,n.default)(this,e),this.className="progress-bar",this.hodor=document.createElement("div"),this.hodor.className=this.className,this.img=document.createElement("div"),this.img.className="progress-img",this.img.innerHTML='<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                         width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n                        <path fill="#18a689" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">\n                        <animateTransform attributeType="xml"\n                          attributeName="transform"\n                          type="rotate"\n                          from="0 25 25"\n                          to="360 25 25"\n                          dur="0.6s"\n                          repeatCount="indefinite"/>\n                        </path>\n                      </svg>'}return(0,l.default)(e,[{key:"show",value:function(){document.body.appendChild(this.hodor),document.body.appendChild(this.img)}},{key:"hide",value:function(){this.hasAdded()&&(document.body.removeChild(this.hodor),document.body.removeChild(this.img))}},{key:"hasAdded",value:function(){return document.getElementsByClassName(this.className).length>0}}]),e}(),i=new o;t.default=i}}]);