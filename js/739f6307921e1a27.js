(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{245:function(t,n,e){},246:function(t,n,e){var o=e(31),c=e(40).f,a=Function.prototype,i=a.toString,u=/^\s*function ([^ (]*)/;!o||"name"in a||c(a,"name",{configurable:!0,get:function(){try{return i.call(this).match(u)[1]}catch(t){return""}}})},247:function(t,n,e){"use strict";var o=e(245);e.n(o).a},248:function(t,n,e){"use strict";e.r(n);e(246),e(79),e(80);var o=e(1).a.component("Page",{props:{lang:{type:String,default:"swe"}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t,n=this;this.content=null,this.$logger.debug("Loading page: %s",this.$route.name),fetch("content/".concat(null!==(t=this.$route.name)&&void 0!==t?t:"home","/index.swe.md")).then((function(t){return t.text()})).then((function(t){n.content=t}))}},data:function(){return{content:null}}}),c=(e(247),e(8)),a=Object(c.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this.content?n("VueShowdown",{staticClass:"content",attrs:{markdown:this.content}}):n("div",[this._v("\n        Loading...\n    ")])],1)}),[],!1,null,"30898dd5",null);n.default=a.exports}}]);