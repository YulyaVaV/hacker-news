(function(e){function t(t){for(var n,o,s=t[0],A=t[1],i=t[2],u=0,g=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n]);f&&f(t);while(g.length)g.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,s=1;s<r.length;s++){var A=r[s];0!==a[A]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/hacker-news/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],A=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var f=A;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"page"},c={class:"story__footer"};function o(e,t,r,o,s,A){var i=Object(n["v"])("Header"),f=Object(n["v"])("Story"),u=Object(n["v"])("Pagination");return Object(n["p"])(),Object(n["d"])("div",a,[Object(n["f"])(i),Object(n["f"])(f,{stories:s.stories,start:s.start},null,8,["stories","start"]),Object(n["e"])("footer",c,[Object(n["f"])(u,{prevPage:A.prevPage,nextPage:A.nextPage},null,8,["prevPage","nextPage"])])])}r("fb6a"),r("d3b7"),r("159b");var s=r("bc3a"),A=r.n(s),i=(r("e089"),{id:"arrayPagination"}),f={class:"story__buttons"};function u(e,t,r,a,c,o){return Object(n["p"])(),Object(n["d"])("div",i,[Object(n["e"])("p",f,[Object(n["e"])("button",{class:"story__btn",onClick:t[0]||(t[0]=function(e){return r.prevPage(e.target)})},"prev"),Object(n["e"])("button",{class:"story__btn",onClick:t[1]||(t[1]=function(e){return r.nextPage(e.target)})},"more...")])])}r("d81d"),r("cb29");var g=r("f947"),d={props:["prevPage","nextPage"],setup:function(){var e=new Array(1e3).fill(0).map((function(e,t){return t})),t=Object(g["a"])(e,{}),r=t.next,n=t.prev;return{next:r,prev:n}}},p=r("6b0d"),l=r.n(p);const O=l()(d,[["render",u]]);var h=O,C=r("f8a2"),E=r.n(C),b={class:"header"},v=Object(n["e"])("img",{src:E.a,alt:"hacker news",class:"header__icon"},null,-1),Q=Object(n["e"])("a",{href:"/",class:"header__title"},"Hacker News",-1),I=[v,Q];function B(e,t,r,a,c,o){return Object(n["p"])(),Object(n["d"])("header",b,I)}r("a5a3");var w={name:"Header"};const j=l()(w,[["render",B]]);var y=j,D={class:"story__index"},P={class:"story__content"},q={class:"story__header"},R=["href"],m=["href"],J={class:"story__wrapp"},U={class:"story__points"},V={href:"/",class:"story__by"},F={href:"/",class:"story__hours"},K={href:"/",class:"story__comments"};function H(e,t,r,a,c,o){var s=this;return Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(r.stories,(function(e,t){return Object(n["p"])(),Object(n["d"])("div",{key:e,class:"story"},[Object(n["e"])("p",D,Object(n["w"])(t+s.start+1)+".",1),Object(n["e"])("div",P,[Object(n["e"])("div",q,[Object(n["e"])("a",{href:e.data.title,class:"story__title"},Object(n["w"])(o.capitalizeFirstLetter(e.data.title)),9,R),Object(n["e"])("a",{href:e.data.url,class:"story__url"},Object(n["w"])(o.isEmpty(e.data.url)),9,m)]),Object(n["e"])("div",J,[Object(n["e"])("p",U,Object(n["w"])(e.data.score)+" points by",1),Object(n["e"])("a",V,Object(n["w"])(e.data.by),1),Object(n["e"])("a",F,Object(n["w"])(o.renderTime(e.data.time))+" hours ago",1),Object(n["e"])("a",K,Object(n["w"])(e.data.descendants)+" comments",1)])])])})),128)}r("9ded");var G={name:"Story",props:["stories","start"],methods:{renderTime:function(e){var t=new Date(1e3*e);return t.getHours()},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},isEmpty:function(e){return e&&0!==e.length?"(".concat(e,")"):""}}};const k=l()(G,[["render",H]]);var T=k,X={name:"App",components:{Pagination:h,Header:y,Story:T},data:function(){return{stories:[],err:"",start:0,end:20}},methods:{getData:function(){var e=this;A.a.get("https://hacker-news.firebaseio.com/v0/topstories.json").then((function(t){var r=t.data.slice(e.start,e.end);r.forEach((function(t){A.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json")).then((function(t){e.stories.push(t)})).catch((function(t){e.err=t}))}))})).catch((function(t){e.err=t}))},prevPage:function(){0!==this.start&&(this.stories=[],this.start-=20,this.end-=20,this.getData())},nextPage:function(){this.stories=[],this.start+=20,this.end+=20,this.getData()}},created:function(){this.getData()}};const M=l()(X,[["render",o]]);var _=M;Object(n["c"])(_).mount("#app")},"9ded":function(e,t,r){},a5a3:function(e,t,r){},e089:function(e,t,r){},f8a2:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.c8322282.js.map