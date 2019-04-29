webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},c,!1,function(e){n("o8nZ")},null,null).exports,r=n("/ocq"),o=n("bOdI"),l=n.n(o),s=n("mtWM"),_=n.n(s),v=l()({name:"Home",data:function(){return{coins:[],coinData:{},isSelectAll:!1}},created:function(){this.getCoinData()},methods:{getCoinData:function(){var e=this;console.log("Getting Coin Data"),_.a.get("https://min-api.cryptocompare.com/data/all/coinlist").then(function(t){console.log("got Data"),e.coinData=t.data.Data,e.getCoins()}).catch(function(t){e.getCoins(),console.log("Error",t.message)})},getCoins:function(){var e=this;_.a.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").then(function(t){return e.coins=t.data}).catch(function(e){return console.log(e)})},getCoinImage:function(e){try{return"https://www.cryptocompare.com"+this.coinData[e].ImageUrl}catch(e){return"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}},getColor:function(e){return e>0?"color:green;":"color:red;"}}},"created",function(){this.getCoinData(),this.getCoins()}),u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"example"},[e._v("\n    Veuillez sélectionner les crytpomonnaies à afficher\n    "),n("form",[n("div",{staticClass:"form-group"},[e._v("\n        Select All"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.isSelectAll,expression:"isSelectAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isSelectAll)?e._i(e.isSelectAll,null)>-1:e.isSelectAll},on:{click:function(t){return e.selectAll()},change:function(t){var n=e.isSelectAll,a=t.target,c=!!a.checked;if(Array.isArray(n)){var i=e._i(n,null);a.checked?i<0&&(e.isSelectAll=n.concat([null])):i>-1&&(e.isSelectAll=n.slice(0,i).concat(n.slice(i+1)))}else e.isSelectAll=c}}}),e._v(" "),n("ul",e._l(e.coins,function(t){return n("li",[e._v("\n            "+e._s(t.name)+"\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.active,expression:"coin.active"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.active)?e._i(t.active,null)>-1:t.active},on:{change:[function(n){var a=t.active,c=n.target,i=!!c.checked;if(Array.isArray(a)){var r=e._i(a,null);c.checked?r<0&&e.$set(t,"active",a.concat([null])):r>-1&&e.$set(t,"active",a.slice(0,r).concat(a.slice(r+1)))}else e.$set(t,"active",i)},function(t){return e.updateSelectall()}]}})])}),0)])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"example"},[n("table",{staticClass:"table table-hover"},[e._m(0),e._v(" "),n("tbody",e._l(e.coins,function(t){return n("tr",[!0===e.coinactive?n("div",[n("td",[e._v(e._s(t.rank))]),e._v(" "),n("td",[n("img",{attrs:{src:e.getCoinImage(t.symbol)}}),e._v(" "+e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.symbol))]),e._v(" "),n("td",[e._v(e._s(e._f("currency")(t.price_usd)))]),e._v(" "),n("td",{style:e.getColor(t.percent_change_1h)},[t.percent_change_1h>0?n("span",[e._v("+")]):e._e(),e._v(e._s(t.percent_change_1h)+"%\n                ")]),e._v(" "),n("td",{style:e.getColor(t.percent_change_24h)},[t.percent_change_24h>0?n("span",[e._v("+")]):e._e(),e._v(e._s(t.percent_change_24h)+"%\n                ")]),e._v(" "),n("td",{style:e.getColor(t.percent_change_7d)},[t.percent_change_7d>0?n("span",[e._v("+")]):e._e(),e._v(e._s(t.percent_change_7d)+"%\n                ")]),e._v(" "),n("td",[e._v(e._s(e._f("currency")(t.market_cap_usd)))])]):e._e()])}),0)])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("td",[e._v("Rank")]),e._v(" "),n("td",[e._v("Name")]),e._v(" "),n("td",[e._v("Symbol")]),e._v(" "),n("td",[e._v("Price (USD)")]),e._v(" "),n("td",[e._v("1H")]),e._v(" "),n("td",[e._v("1D")]),e._v(" "),n("td",[e._v("1W")]),e._v(" "),n("td",[e._v("Market Cap (USD)")])])])}]},d=n("VU/8")(v,u,!1,null,null,null).exports;a.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"Home",component:d}]}),m=n("OjAt"),h=n.n(m);a.a.config.productionTip=!1,a.a.use(h.a),new a.a({el:"#app",router:p,components:{App:i},template:"<App/>"})},o8nZ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1851813d578f92b991b2.js.map