!function(e){function t(t){for(var r,a,s=t[0],u=t[1],l=t[2],c=0,h=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(f&&f(t);h.length;)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={1:0},o={1:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[];a[e]?t.push(a[e]):0!==a[e]&&{0:1}[e]&&t.push(a[e]=new Promise((function(t,n){for(var r=e+".style.css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=(f=i[u]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return t()}var c=document.getElementsByTagName("style");for(u=0;u<c.length;u++){var f;if((l=(f=c[u]).getAttribute("data-href"))===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),n(i)},h.href=o,document.getElementsByTagName("head")[0].appendChild(h)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=function(e){return s.p+"js/"+{0:"739f6307921e1a27"}[e]+".js"}(e);var l=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=this.webpackJsonp=this.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=l;i.push([244,2]),n()}({199:function(e,t,n){"use strict";var r=n(51);n.n(r).a},200:function(e,t,n){"use strict";var r=n(52);n.n(r).a},201:function(e,t,n){"use strict";var r=n(53);n.n(r).a},202:function(e,t,n){"use strict";var r=n(54);n.n(r).a},203:function(e,t,n){"use strict";var r=n(55);n.n(r).a},204:function(e,t,n){"use strict";var r=n(56);n.n(r).a},244:function(e,t,n){"use strict";n.r(t);n(79),n(80);var r=n(39),a=n.n(r),o=n(123),i=n(38),s=n.n(i),u=n(1),l=n(78),c=n(124),f=u.a.component("header-menu",{}),h=(n(199),n(8)),p=(Object(h.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("router-link",{attrs:{to:"/"}},[this._v("Hem")])],1),this._v(" "),t("li",[t("router-link",{attrs:{to:{name:"about",lang:"swe"}}},[this._v("Om sidan")])],1),this._v(" "),t("li",[t("router-link",{attrs:{to:{name:"social-safety",lang:"swe"}}},[this._v("Social Säkerhet")])],1),this._v(" "),t("li",[t("router-link",{attrs:{to:{name:"it-security",lang:"swe"}}},[this._v("IT-Säkerhet")])],1)])}),[],!1,null,"632edcc0",null).exports,u.a.component("page-header",{})),v=(n(200),Object(h.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v("Säker Online")]),this._v(" "),t("header-menu")],1)}),[],!1,null,"c4541422",null).exports,u.a.component("page-footer",{})),d=(n(201),Object(h.a)(v,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("a",{attrs:{href:"https://github.com/jitesoft/saeker-online/blob/master/LICENSE",target:"_blank"}},[this._v("Copyright © 2019")]),this._v(" "),t("a",{attrs:{href:"https://jitesoft.com",target:"_blank"}},[this._v("Jitesoft")])])}],!1,null,"55b93e96",null).exports,u.a.component("ForkMe",{})),m=(n(202),Object(h.a)(d,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://github.com/jitesoft/saeker-online"}},[t("img",{attrs:{id:"fork-me",src:"https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png?resize=149%2C149",alt:"Fork me on GitHub"}})])}],!1,null,"dae56eda",null).exports,u.a.component("default-layout",{})),y=(n(203),Object(h.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"page-container"}},[t("page-header"),this._v(" "),t("div",{staticClass:"content-wrapper"},[this._t("default")],2),this._v(" "),t("page-footer")],1),this._v(" "),t("fork-me")],1)}),[],!1,null,"03ed1b05",null).exports,u.a.component("App",{computed:{layout:function(){return"default-layout"}}})),g=(n(204),Object(h.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t(this.layout,{tag:"component"},[t("div",{staticClass:"inner-content"},[t("router-view")],1)])}),[],!1,null,null,null).exports),b=n(125),w=n.n(b),_=n(2),k=n.n(_),x=(n(121),n(11)),j=n.n(x),O=n(126),E=n.n(O),A=n(127),S=n.n(A),C=n(128),P=n.n(C),$=n(16),T=n.n($),L=n(129),N=n.n(L),M=function(){function e(){S()(this,e),B.set(this,{writable:!0,value:null})}return P()(e,[{key:"install",value:function(e,t){var n;N()(this,B,new i.Yolog(j()(n=[new i.ConsolePlugin]).call(n,E()((null==t?void 0:t.plugins)||[])))),e.prototype.$logger=this}},{key:"custom",value:function(e,t){var n,r,a,o,i,s=arguments;return k.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:for(a=s.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=s[i];return u.next=3,k.a.awrap((n=T()(this,B)).custom.apply(n,j()(r=[e,t]).call(r,o)));case 3:case"end":return u.stop()}}),null,this)}},{key:"debug",value:function(e){var t,n,r,a,o,i=arguments;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:for(r=i.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=i[o];return s.next=3,k.a.awrap((t=T()(this,B)).debug.apply(t,j()(n=[e]).call(n,a)));case 3:case"end":return s.stop()}}),null,this)}},{key:"info",value:function(e){var t,n,r,a,o,i=arguments;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:for(r=i.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=i[o];return s.next=3,k.a.awrap((t=T()(this,B)).info.apply(t,j()(n=[e]).call(n,a)));case 3:case"end":return s.stop()}}),null,this)}},{key:"warning",value:function(e){var t,n,r,a,o,i=arguments;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:for(r=i.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=i[o];return s.next=3,k.a.awrap((t=T()(this,B)).warning.apply(t,j()(n=[e]).call(n,a)));case 3:case"end":return s.stop()}}),null,this)}},{key:"error",value:function(e){var t,n,r,a,o,i=arguments;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:for(r=i.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=i[o];return s.next=3,k.a.awrap((t=T()(this,B)).error.apply(t,j()(n=[e]).call(n,a)));case 3:case"end":return s.stop()}}),null,this)}},{key:"critical",value:function(e){var t,n,r,a,o,i=arguments;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:for(r=i.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=i[o];return s.next=3,k.a.awrap((t=T()(this,B)).critical.apply(t,j()(n=[e]).call(n,a)));case 3:case"end":return s.stop()}}),null,this)}},{key:"alert",value:function(e){var t,n,r,a,o,i=arguments;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:for(r=i.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=i[o];return s.next=3,k.a.awrap((t=T()(this,B)).alert.apply(t,j()(n=[e]).call(n,a)));case 3:case"end":return s.stop()}}),null,this)}},{key:"emergency",value:function(e){var t,n,r,a,o,i=arguments;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:for(r=i.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=i[o];return s.next=3,k.a.awrap((t=T()(this,B)).emergency.apply(t,j()(n=[e]).call(n,a)));case 3:case"end":return s.stop()}}),null,this)}}]),e}(),B=new w.a,F=new M;u.a.use(l.a),u.a.use(F),u.a.use(c.a,{flavor:"github",options:{headerLevelStart:3,metadata:!0}}),o.a.then((function(){var e=new l.a({mode:"history",routes:[{path:"/",component:function(){return a.a.resolve(n.e(0).then(n.bind(null,248)))}},{path:"/om-sidan",name:"about",component:function(){return a.a.resolve(n.e(0).then(n.bind(null,248)))}},{path:"/social-säkerhet",name:"social-safety",component:function(){return a.a.resolve(n.e(0).then(n.bind(null,248)))}},{path:"/it-säkerhet",name:"it-security",component:function(){return a.a.resolve(n.e(0).then(n.bind(null,248)))}}]});new u.a({render:function(e){return e(g)},router:e}).$mount("#root")})).catch((function(e){return s.a.error(e.message)}))},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){}});