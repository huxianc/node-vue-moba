(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1845fabf"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var o=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",o.name="ChunkLoadError",o.type=a,o.request=n,s[1](o)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1399:function(t,e,s){"use strict";var a=s("ef4a"),i=s.n(a);i.a},"21bb":function(t,e,s){"use strict";var a=s("2dad"),i=s.n(a);i.a},"29cd":function(t,e,s){"use strict";var a=s("abb1"),i=s.n(a);i.a},"2dad":function(t,e,s){},"49c5":function(t,e,s){},"508a":function(t,e,s){t.exports=s.p+"img/25bef405982eda3414029e8859d7ffc8.25bef405.jpeg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=s("2877"),c={},l=Object(r["a"])(c,i,n,!1,null,null,null),o=l.exports,u=(s("be35"),s("78a7"),s("d3b7"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav nav-inverse jc-around pb-1"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("9d64"),alt:"",height:"30"}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],f={name:"Main",components:{}},v=f,m=(s("6e89"),Object(r["a"])(v,d,p,!1,null,"b9b219ca",null)),_=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("508a"),alt:"",srcset:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("7ebd"),alt:"",srcset:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("a806"),alt:"",srcset:""}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-dark-1"},[a("div",{staticClass:"d-flex flex-wrap"},t._l(12,(function(e){return a("div",{key:e,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite sprite-news"}),a("div",{staticClass:"py-2"},[t._v("爆料站")])])})),0),t._m(0)]),a("m-list-card",{attrs:{title:"新闻资讯",icon:"cc-menu-circle",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 d-flex fs-lg",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),a("m-list-card",{attrs:{title:"英雄列表",icon:"bg_hero",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heros/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:"",srcset:""}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])}),a("m-card",{attrs:{icon:"bg_hero",title:"英雄列表"}}),a("m-card",{attrs:{icon:"bg_hero",title:"精彩视频"}}),a("m-card",{attrs:{icon:"bg_hero",title:"图文攻略"}})],1)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light py-2 fs-sm"},[s("i",{staticClass:"sprite sprite-arrow mr-1"}),s("span",[t._v("收起")])])}],g=(s("96cf"),s("89ba")),C=s("5a0c"),x=s.n(C),y={name:"home",components:{},filters:{date:function(t){return x()(t).format("MM/DD")}},data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},newsCats:[],heroCats:[]}},created:function(){this.fetchNewsCats(),this.fetchHeroCats()},methods:{fetchNewsCats:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("news/list");case 2:e=t.sent,this.newsCats=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchHeroCats:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heros/list");case 2:e=t.sent,this.heroCats=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},w=y,k=(s("21bb"),Object(r["a"])(w,b,h,!1,null,"b487ffa4",null)),j=k.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[s("div",{staticClass:"iconfont icon-back text-blue"}),s("strong",{staticClass:"flex-1 text-ellipsis text-blue px-2"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v("2019-11-08")])]),t._v(" "+t._s(t.model.ces)+" "),s("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.model.body)}}),s("div",{staticClass:"px-3 border-top py-2 "},[t._m(0),s("div",t._l(t.model.related,(function(e){return s("router-link",{key:e._id,staticClass:"text-ellipsis mt-2",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(t._s(e.title))])})),1)])]):t._e()},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex ai-center mb-2"},[s("i",{staticClass:"iconfont icon-menu"}),s("strong",{staticClass:"text-blue fs-g ml-2"},[t._v("相关资讯")])])}],$={props:{id:{required:!0}},data:function(){return{model:null}},watch:{id:"fetch"},created:function(){this.fetch()},methods:{fetch:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("articles/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},E=$,P=(s("1399"),Object(r["a"])(E,O,S,!1,null,null,null)),R=P.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:s("9d64"),alt:"",height:"30"}}),t._m(0),a("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top text-white",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info p-3 h-100 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{tag:"span",to:"/"}},[t._v("皮肤:2 >")])],1)])]),a("div",{},[t._m(1),a("swiper",[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 border-bottom bg-white"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn flex-1 btn-lg",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu"}),t._v("英雄介绍视频 ")]),a("router-link",{staticClass:"btn flex-1 ml-2 btn-lg",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu"}),t._v("英雄介绍视频 ")])],1),a("div",{staticClass:"skills mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(e,s){return a("img",{key:s,staticClass:"icon",class:{active:s===t.currentSkillIndex},attrs:{src:e.icon},on:{click:function(e){t.currentSkillIndex=s}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex pt-4 pb-3"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 ml-4"},[t._v("（冷却值："+t._s(t.currentSkill.delay)+" 消耗："+t._s(t.currentSkill.cost)+"）")])]),a("p",[t._v(t._s(t.currentSkill.description))]),a("div",{staticClass:"border-bottom"}),a("p",{staticClass:"text-grey"},[t._v("小提示："+t._s(t.currentSkill.tips))])]):t._e()])]),a("m-card",{staticClass:"hero-items",attrs:{icon:"menu",title:"出装推荐"}},[a("div",{staticClass:"fs-xl py-3"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center"},t._l(t.model.items1,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("p",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"border-bottom my-2"}),a("div",{staticClass:"fs-xl py-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center"},t._l(t.model.items2,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("p",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0)]),a("m-card",{attrs:{plain:"",icon:"menu",title:"使用技巧"}},[a("p",[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"menu",title:"对抗技巧"}},[a("p",[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu",title:"团战思路"}},[a("p",[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu",title:"英雄关系"}},[a("div",{staticClass:"fs-xl my-3"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 pl-3"},[t._v(t._s(e.description))])])})),a("div",{staticClass:"border-bottom mt-3"})],2)],1)])],1)],1)]):t._e()},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("span",[t._v("王者荣耀")]),s("span",{staticClass:"ml-2"},[t._v("攻略站")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-3 bg-white"},[s("div",{staticClass:"nav d-flex jc-around pt-3 pb-2 border-bottom"},[s("div",{staticClass:"nav-item active"},[s("div",{staticClass:"nav-link"},[t._v("英雄初始")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],L={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},created:function(){this.fetch()},methods:{fetch:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heros/".concat(this.id));case 2:e=t.sent,console.log(e.data),this.model=e.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},M=L,A=(s("6e94"),Object(r["a"])(M,T,q,!1,null,null,null)),I=A.exports;a["a"].use(u["a"]);var N=[{path:"/",component:_,children:[{path:"/",name:"home",component:j},{path:"/articles/:id",name:"article",component:R,props:!0}]},{path:"/heros/:id",name:"hero",component:I,props:!0},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],H=new u["a"]({routes:N}),U=H,D=s("7212"),B=s.n(D),J=(s("dfa4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-white p-3 mt-3"},[s("div",{staticClass:"d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 ml-2"},[s("strong",[t._v(t._s(t.title))])]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu"})]),s("div",{staticClass:"card-body"},[t._t("default")],2)])}),V=[],z={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}},data:function(){return{}}},F=z,G=(s("29cd"),Object(r["a"])(F,J,V,!1,null,null,null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{title:t.title,icon:t.icon}},[s("div",{staticClass:"nav jc-between pt-3"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("swiper",{ref:"list",staticClass:"mt-3",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)},W=[],X={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},Y=X,Z=Object(r["a"])(Y,Q,W,!1,null,null,null),tt=Z.exports,et=s("bc3a"),st=s.n(et);a["a"].config.productionTip=!1,a["a"].use(B.a),a["a"].component("m-card",K),a["a"].component("m-list-card",tt),a["a"].prototype.$http=st.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new a["a"]({router:U,render:function(t){return t(o)}}).$mount("#app")},"6e89":function(t,e,s){"use strict";var a=s("db1e"),i=s.n(a);i.a},"6e94":function(t,e,s){"use strict";var a=s("49c5"),i=s.n(a);i.a},"78a7":function(t,e,s){},"7ebd":function(t,e,s){t.exports=s.p+"img/9dac5ac96d27c55b6b322a02eacf1813.9dac5ac9.jpeg"},"9d64":function(t,e,s){t.exports=s.p+"img/logo.76a8ece3.png"},a806:function(t,e,s){t.exports=s.p+"img/8f3dc9afda3109063a49f07365d17867.8f3dc9af.jpeg"},abb1:function(t,e,s){},be35:function(t,e,s){},db1e:function(t,e,s){},ef4a:function(t,e,s){}});
//# sourceMappingURL=app.523c32c7.js.map