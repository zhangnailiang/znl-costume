(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{GsTM:function(t,e,r){"use strict";var n=r("g09b"),a=r("tAuX");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("IzEo");var u=n(r("bx4M"));r("T2oS");var o=n(r("W9HT"));r("+L6B");var i,l,c,f=n(r("2/Rp")),d=n(r("2Taf")),s=n(r("vZ4D")),p=n(r("l4Ni")),g=n(r("ujKo")),y=n(r("MhPg")),v=a(r("q1tI")),h=r("MuoO"),E=n(r("uUKN"));function m(t){return function(){var e,r=(0,g.default)(t);if(w()){var n=(0,g.default)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,p.default)(this,e)}}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}var k=(i=(0,h.connect)(function(t){return{isloading:t.error.isloading}}),i((c=function(t){(0,y.default)(r,t);var e=m(r);function r(){var t;(0,d.default)(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return t=e.call.apply(e,[this].concat(a)),t.state={isloading:!1},t.triggerError=function(e){t.setState({isloading:!0});var r=t.props.dispatch;r({type:"error/query",payload:{code:e}})},t}return(0,s.default)(r,[{key:"render",value:function(){var t=this,e=this.state.isloading;return v.default.createElement(u.default,null,v.default.createElement(o.default,{spinning:e,wrapperClassName:E.default.trigger},v.default.createElement(f.default,{type:"danger",onClick:function(){return t.triggerError(401)}},"\u89e6\u53d1401"),v.default.createElement(f.default,{type:"danger",onClick:function(){return t.triggerError(403)}},"\u89e6\u53d1403"),v.default.createElement(f.default,{type:"danger",onClick:function(){return t.triggerError(500)}},"\u89e6\u53d1500"),v.default.createElement(f.default,{type:"danger",onClick:function(){return t.triggerError(404)}},"\u89e6\u53d1404")))}}]),r}(v.PureComponent),l=c))||l),C=k;e.default=C},uUKN:function(t,e,r){t.exports={trigger:"antd-pro\\pages\\-exception\\style-trigger"}}}]);