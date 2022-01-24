(function(e){function t(t){for(var r,A,o=t[0],s=t[1],i=t[2],f=0,u=[];f<o.length;f++)A=o[f],Object.prototype.hasOwnProperty.call(a,A)&&a[A]&&u.push(a[A][0]),a[A]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);g&&g(t);while(u.length)u.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=A(A.s=n[0]))}return e}var r={},a={app:0},c=[];function A(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,A),n.l=!0,n.exports}A.m=e,A.c=r,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/hacker-news/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var g=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("f8a2"),c=n.n(a),A={class:"page"},o=Object(r["e"])("header",{class:"header"},[Object(r["e"])("img",{src:c.a,alt:"hacker news",class:"header__icon"}),Object(r["e"])("a",{href:"/",class:"header__title"},"Hacker News")],-1),s={class:"story__index"},i={class:"story__content"},g={class:"story__header"},f=["href"],u=["href"],p={class:"story__wrapp"},h={class:"story__points"},l={href:"/",class:"story__by"},O={href:"/",class:"story__hours"},d={href:"/",class:"story__comments"},C={class:"story__footer"};function E(e,t,n,a,c,E){var b=this,Q=Object(r["v"])("Pagination");return Object(r["p"])(),Object(r["d"])("div",A,[o,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(c.stories,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{key:e,class:"story"},[Object(r["e"])("p",s,Object(r["w"])(t+b.start+1)+".",1),Object(r["e"])("div",i,[Object(r["e"])("div",g,[Object(r["e"])("a",{href:e.data.title,class:"story__title"},Object(r["w"])(E.capitalizeFirstLetter(e.data.title)),9,f),Object(r["e"])("a",{href:e.data.url,class:"story__url"},Object(r["w"])(E.isEmpty(e.data.url)),9,u)]),Object(r["e"])("div",p,[Object(r["e"])("p",h,Object(r["w"])(e.data.score)+" points by",1),Object(r["e"])("a",l,Object(r["w"])(e.data.by),1),Object(r["e"])("a",O,Object(r["w"])(E.renderTime(e.data.time))+" hours ago",1),Object(r["e"])("a",d,Object(r["w"])(e.data.descendants)+" comments",1)])])])})),128)),Object(r["e"])("footer",C,[Object(r["f"])(Q,{prevPage:E.prevPage,nextPage:E.nextPage},null,8,["prevPage","nextPage"])])])}n("fb6a"),n("d3b7"),n("159b");var b=n("bc3a"),Q=n.n(b),I=(n("e089"),{id:"arrayPagination"}),B={class:"story__buttons"};function v(e,t,n,a,c,A){return Object(r["p"])(),Object(r["d"])("div",I,[Object(r["e"])("p",B,[Object(r["e"])("button",{class:"story__btn",onClick:t[0]||(t[0]=function(e){return n.prevPage(e.target)})},Object(r["w"])("prev")),Object(r["e"])("button",{class:"story__btn",onClick:t[1]||(t[1]=function(e){return n.nextPage(e.target)})},"more...")])])}n("d81d"),n("cb29");var w=n("f947"),j={props:["prevPage","nextPage"],setup:function(){var e=new Array(1e3).fill(0).map((function(e,t){return t})),t=Object(w["a"])(e,{}),n=t.next,r=t.prev;return{next:n,prev:r}}},y=n("6b0d"),D=n.n(y);const P=D()(j,[["render",v]]);var q=P,R={name:"App",components:{Pagination:q},data:function(){return{stories:[],err:"",start:0,end:20}},methods:{getData:function(){var e=this;Q.a.get("https://hacker-news.firebaseio.com/v0/topstories.json").then((function(t){var n=t.data.slice(e.start,e.end);n.forEach((function(t){Q.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json")).then((function(t){e.stories.push(t)})).catch((function(t){e.err=t}))}))})).catch((function(t){e.err=t}))},renderTime:function(e){var t=new Date(1e3*e);return t.getHours()},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},isEmpty:function(e){return e&&0!==e.length?"(".concat(e,")"):""},prevPage:function(){0!==this.start&&(this.stories=[],this.start-=20,this.end-=20,this.getData())},nextPage:function(){this.stories=[],this.start+=20,this.end+=20,this.getData()}},created:function(){this.getData()}};const J=D()(R,[["render",E]]);var U=J;Object(r["c"])(U).mount("#app")},e089:function(e,t,n){},f8a2:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.ca3e52a4.js.map