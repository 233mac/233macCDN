(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,e,n){"use strict";var r={name:"TagItem",props:{to:{type:String,required:!0},icon:{type:String,required:!0},isActive:{type:Boolean,default:!1}}},o=(n(204),n(2)),l={name:"TagList",components:{TagItem:Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{attrs:{to:this.to}},[e("b-tag",{staticClass:"tag-margin",class:{active:this.isActive},attrs:{size:"is-medium",rounded:""}},[e("b-icon",{staticClass:"icon-padding",attrs:{icon:this.icon,size:"is-small"}}),this._v(" "),e("span",[this._t("default")],2)],1)],1)}),[],!1,null,"0daf4002",null).exports},props:{tagBaseUrl:{type:String,required:!0},tagList:{type:Array,required:!0}}},c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tagList.length>0?n("b-taglist",t._l(t.tagList,(function(e){return n("tag-item",{key:e.id,attrs:{icon:e.icon||"tag",to:t.tagBaseUrl+e.id,"is-active":e.isActive}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1):n("div")}),[],!1,null,"57f436ea",null);e.a=c.exports},109:function(t,e,n){"use strict";n(38);var r=n(44),o=n(12),l={name:"AppItem",components:{VClamp:r.a},props:{name:{type:String,required:!0},title:{type:String,required:!0},icon:{type:String,required:!0},tags:{type:Array,default:function(){}},downloadCount:{type:Number,required:!0},updatedTs:{type:Number,required:!0},summary:{type:String,required:!0}},data:function(){return{}},computed:{displayUpdateTime:function(){return o.a.getDisplayUpdateTime(this.updatedTs)},displayDownloadCount:function(){return o.a.formatDownloadCount(this.downloadCount)}}},c=(n(200),n(201),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"/app/"+t.name}},[n("div",{staticClass:"box item-animate"},[n("div",{staticClass:"is-flex app-icon-animate app-icon"},[n("figure",{staticClass:"image is-128x128"},[n("img",{attrs:{src:t.icon,alt:t.title}})])]),t._v(" "),n("div",{staticClass:"level has-text-grey is-size-7"},[n("div",{staticClass:"level-left"},[n("b-icon",{staticClass:"icon-padding",attrs:{icon:"fire",size:"is-small"}}),t._v("\n        "+t._s(t.displayDownloadCount)+"\n      ")],1),t._v(" "),n("div",{staticClass:"level-right"},[n("b-icon",{staticClass:"icon-padding",attrs:{icon:"timetable",size:"is-small"}}),t._v("\n        "+t._s(t.displayUpdateTime)+"\n      ")],1)]),t._v(" "),n("div",{staticClass:"media-content"},[n("div",{staticClass:"title is-4 title-height"},[n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n          "+t._s(t.title)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"subtitle is-6 has-text-grey summary-height"},[n("v-clamp",{attrs:{autoresize:"","max-lines":3}},[t._v("\n          "+t._s(t.summary)+"\n        ")])],1),t._v(" "),n("b-taglist",t._l(t.tags,(function(e,r){return n("b-tag",{key:r,attrs:{type:"is-info"}},[t._v("\n          "+t._s(e)+"\n        ")])})),1)],1)])])}),[],!1,null,"ffb239d8",null);e.a=component.exports},110:function(t,e,n){"use strict";n(38);var r=n(44),o=n(12),l={name:"AppItemHorizontal",components:{VClamp:r.a},props:{baseUrl:{type:String,required:!0},name:{type:String,required:!0},title:{type:String,required:!0},icon:{type:String,required:!0},downloadCount:{type:Number,required:!0},updatedTs:{type:Number,required:!0},summary:{type:String,required:!0}},data:function(){return{}},computed:{displayUpdateTime:function(){return o.a.getDisplayUpdateTime(this.updatedTs)},displayDownloadCount:function(){return o.a.formatDownloadCount(this.downloadCount)}}},c=(n(202),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:t.baseUrl+t.name}},[n("div",{staticClass:"media has-text-grey is-size-7 item-margin item-animate"},[n("figure",{staticClass:"media-left app-icon-animate"},[n("p",{staticClass:"image is-64x64"},[n("img",{attrs:{src:t.icon,alt:t.title}})])]),t._v(" "),n("div",{staticClass:"media-content content-gap"},[n("v-clamp",{staticClass:"is-size-6 has-text-black-bis",attrs:{autoresize:"","max-lines":1}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n        "+t._s(t.summary)+"\n      ")]),t._v(" "),n("div",{staticClass:"level is-mobile has-text-grey is-size-7"},[n("div",{staticClass:"level-left"},[n("b-icon",{staticClass:"icon-padding",attrs:{icon:"fire",size:"is-small"}}),t._v("\n          "+t._s(t.displayDownloadCount)+"\n        ")],1),t._v(" "),n("div",{staticClass:"level-right"},[n("b-icon",{staticClass:"icon-padding",attrs:{icon:"timetable",size:"is-small"}}),t._v("\n          "+t._s(t.displayUpdateTime)+"\n        ")],1)])],1)])])}),[],!1,null,"7a320926",null);e.a=component.exports},111:function(t,e,n){"use strict";var r={name:"ArticleComp",props:{summary:{type:String,required:!0},htmlContent:{type:String,required:!0},title:{type:String,required:!0},currentPageUrl:{type:String,required:!0},websiteUrl:{type:String,required:!0}}},o=(n(203),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"box"},[n("div",{staticClass:"has-text-grey summary-content"},[t._v("\n    "+t._s(t.summary)+"\n  ")]),t._v(" "),n("div",{staticClass:"content break-word",domProps:{innerHTML:t._s(t.htmlContent)}}),t._v(" "),n("div",{staticClass:"copyright"},[n("p",[t._v("©软件著作权归作者所有;本站所有软件均来源于网络，仅供学习使用，请支持正版！")]),t._v(" "),n("p",[t._v("\n      转载请注明出处："),n("a",{attrs:{href:t.websiteUrl,target:"_blank"}},[t._v("233mac.com 精品MAC应用分享")]),t._v(" »\n      "),n("a",{attrs:{href:t.currentPageUrl,target:"_blank"}},[t._v(t._s(t.title))])])])])}),[],!1,null,"0907dfdc",null);e.a=component.exports},145:function(t,e,n){"use strict";var r={name:"Header",props:{},data:function(){return{name:"",keyword:""}},computed:{path:function(){var path=this.$route.path;return"/"===path?path:"/"===this.$route.path.slice(-1)?this.$route.path.slice(0,-1):this.$route.path},category:function(){return[{name:"首页",url:"/",exact:!0},{name:"应用",url:"/app"},{name:"文章",url:"/article"},{name:"心愿单",url:"/wishlist"},{name:"留言",url:"/feedback"}]}},methods:{}},o=n(2),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{"fixed-top":"",shadow:"",transparent:""}},[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("img",{attrs:{src:n(137)}}),t._v("\n      233mac.com\n    ")])],1),t._v(" "),r("template",{slot:"start"},t._l(t.category,(function(e,n){return r("b-navbar-item",{key:n,attrs:{tag:"nuxt-link",to:e.url,exact:e.exact}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1)],2)}),[],!1,null,"0fca8820",null).exports,c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-offset-1 is-one-fifth is-size-7"},[e("div",{staticClass:"gap"},[e("img",{staticClass:"footer-img",attrs:{src:n(137)}})]),this._v(" "),e("div",{staticClass:"gap"},[this._v("\n        本站(233mac.com)并不以盈利为目的，所有软件均来源于网络，旨在推广苹果电脑在国内的应用，并为大家带来更好的下载体验。如本站的内容对您的权利造成了影响，请发邮件至service#233mac.com,我们会在第一时间将涉及版权的内容进行删除。\n      ")]),this._v(" "),e("div",[this._v("Copyright © 2020 精品 MAC 应用分享. All rights reserved.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-offset-one-quarter"},[e("div",{staticClass:"gap"},[e("div",{staticClass:"has-text-white"},[this._v("\n          友情链接\n        ")])]),this._v(" "),e("div",{staticClass:"gap"},[e("div",{staticClass:"gap has-text-white"},[this._v("\n          帮助\n        ")]),this._v(" "),e("div",{staticClass:"is-size-7"},[this._v("\n          新手帮助\n        ")])])])}],d={name:"Footer"},m=(n(186),{components:{mHeader:l,mFooter:Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer has-background-black-bis"},[n("div",{staticClass:"columns has-text-grey-lighter"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"gap has-text-white"},[t._v("\n        QQ 群\n      ")]),t._v(" "),n("div",{staticClass:"gap is-size-7"},[t._v("\n        1 群: 123456789\n      ")]),t._v(" "),n("div",[n("b-icon",{staticClass:"icon-margin",attrs:{icon:"sina-weibo",size:"is-medium"}}),t._v(" "),n("b-icon",{attrs:{icon:"rss",size:"is-medium"}})],1)])])])}),c,!1,null,"679b4d0d",null).exports}}),v=(n(187),Object(o.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("m-header"),this._v(" "),e("nuxt",{staticClass:"main-content"}),this._v(" "),e("m-footer")],1)}),[],!1,null,"f284a342",null));e.a=v.exports},146:function(t,e,n){"use strict";var r={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:0,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},o=(n(184),n(2)),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports},17:function(t,e,n){"use strict";n(38);var r={props:{error:{type:Number,required:!0},message:{type:String,default:""}}},o=(n(183),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"background-page"},[404===this.error.statusCode?e("div",{staticClass:"text-magic is-size-1-desktop",attrs:{"data-word":"404"}},[this._v("\n    404\n    "),e("div",{staticClass:"white"})]):e("div",{staticClass:"text-magic is-size-1-desktop"},[this._v("\n    500服务器错误\n  ")]),this._v(" "),e("div",[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n      返回首页\n    ")])],1)])}),[],!1,null,"156379f1",null);e.a=component.exports},183:function(t,e,n){"use strict";var r=n(68);n.n(r).a},184:function(t,e,n){"use strict";var r=n(69);n.n(r).a},186:function(t,e,n){"use strict";var r=n(70);n.n(r).a},187:function(t,e,n){"use strict";var r=n(71);n.n(r).a},200:function(t,e,n){"use strict";var r=n(72);n.n(r).a},201:function(t,e,n){"use strict";var r=n(73);n.n(r).a},202:function(t,e,n){"use strict";var r=n(74);n.n(r).a},203:function(t,e,n){"use strict";var r=n(75);n.n(r).a},204:function(t,e,n){"use strict";var r=n(76);n.n(r).a},205:function(t,e,n){"use strict";var r=n(77);n.n(r).a},206:function(t,e,n){"use strict";var r=n(78);n.n(r).a},207:function(t,e,n){"use strict";var r=n(79);n.n(r).a},208:function(t,e,n){"use strict";var r=n(80);n.n(r).a},209:function(t,e,n){"use strict";var r=n(81);n.n(r).a},210:function(t,e,n){"use strict";var r=n(82);n.n(r).a},211:function(t,e,n){"use strict";var r=n(83);n.n(r).a},213:function(t,e,n){"use strict";n.r(e);n(38);var r={name:"AppList",components:{},props:{page:{type:Array,required:!0},pageId:{type:Number,required:!0},totalPage:{type:Number,required:!0},total:{type:Number,required:!0},pageSize:{type:Number,required:!0},appListUrlPrefix:{type:String,required:!0}}},o=n(2),l={components:{AppList:Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns is-multiline"},t._l(t.page,(function(t){return n("div",{key:t.id,staticClass:"column is-one-quarter"},[n("app-item",{attrs:{name:t.name,title:t.title,icon:t.icon,tags:t.tags.map((function(t){return t.name})),"download-count":t.download_count,"updated-ts":t.updated_ts,summary:t.summary}})],1)})),0),t._v(" "),n("b-pagination",{attrs:{total:t.total,current:t.pageId,"per-page":t.pageSize,"icon-prev":"chevron-left","icon-next":"chevron-right",order:"is-centered","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){t.pageId=e}},scopedSlots:t._u([{key:"default",fn:function(e){return n("b-pagination-button",{attrs:{id:"page"+e.page.number,page:e.page,tag:"nuxt-link",to:""+t.appListUrlPrefix+e.page.number}},[t._v("\n      "+t._s(e.page.number)+"\n    ")])}},{key:"previous",fn:function(e){return n("b-pagination-button",{attrs:{page:e.page,tag:"nuxt-link",to:""+t.appListUrlPrefix+e.page.number}},[t._v("\n      前一页\n    ")])}},{key:"next",fn:function(e){return n("b-pagination-button",{attrs:{page:e.page,tag:"nuxt-link",to:""+t.appListUrlPrefix+e.page.number}},[t._v("\n      后一页\n    ")])}}])})],1)}),[],!1,null,"cb104d60",null).exports},mixins:[n(103).a]},c=(n(205),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container app-margin"},[n("tag-list",{attrs:{"tag-base-url":t.tagBaseUrl,"tag-list":t.tags}}),t._v(" "),n("app-list",{attrs:{page:t.page,"page-id":t.pageId,"total-page":t.totalPage,total:t.total,"page-size":t.pageSize,"app-list-url-prefix":t.listUrlPrefix}})],1)}),[],!1,null,"4e8f6cb6",null));e.default=c.exports},214:function(t,e,n){"use strict";n.r(e);n(38);var r=n(44),o=n(12),l={name:"ArticleItem",components:{VClamp:r.a},props:{id:{type:Number,required:!0},cover:{type:String,required:!0},title:{type:String,required:!0},summary:{type:String,required:!0},pageView:{type:Number,required:!0},updatedTs:{type:Number,required:!0},tags:{type:Array,default:function(){return[]}},tagBaseUrl:{type:String,required:!0}},computed:{displayUpdateTime:function(){return o.a.getDisplayUpdateTime(this.updatedTs)}}},c=n(2),d={components:{ArticleItem:Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media"},[n("figure",{staticClass:"media-left"},[n("p",{staticClass:"image is-128x128"},[n("img",{attrs:{src:t.cover,alt:""}})])]),t._v(" "),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title is-size-5"},[n("nuxt-link",{attrs:{to:"/article/"+t.id}},[n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n            "+t._s(t.title)+"\n          ")])],1)],1),t._v(" "),n("div",{staticClass:"subtitle is-size-6 has-text-grey"},[n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n          "+t._s(t.summary)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"has-text-grey"},[n("span",[t._v(t._s(t.displayUpdateTime))]),t._v(" "),n("span",t._l(t.tags,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:t.tagBaseUrl+e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)])])])])}),[],!1,null,"2ea3fc74",null).exports},mixins:[n(103).a]},m=(n(206),Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container app-margin"},[n("tag-list",{attrs:{"tag-base-url":t.tagBaseUrl,"tag-list":t.tags}}),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("div",{staticClass:"article-margin"},t._l(t.page,(function(e){return n("article-item",{key:e.id,attrs:{id:e.id,cover:e.cover,title:e.title,summary:e.summary,"page-view":e.page_view,"updated-ts":e.updated_ts,tags:e.tags,"tag-base-url":t.tagBaseUrl}})})),1),t._v(" "),t.totalPage>1?n("b-pagination",{attrs:{total:t.total,current:t.pageId,"per-page":t.pageSize,"icon-prev":"chevron-left","icon-next":"chevron-right",order:"is-centered","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){t.pageId=e}},scopedSlots:t._u([{key:"default",fn:function(e){return n("b-pagination-button",{attrs:{id:"page"+e.page.number,page:e.page,tag:"nuxt-link",to:""+t.listUrlPrefix+e.page.number}},[t._v("\n          "+t._s(e.page.number)+"\n        ")])}},{key:"previous",fn:function(e){return n("b-pagination-button",{attrs:{page:e.page,tag:"nuxt-link",to:""+t.listUrlPrefix+e.page.number}},[t._v("\n          前一页\n        ")])}},{key:"next",fn:function(e){return n("b-pagination-button",{attrs:{page:e.page,tag:"nuxt-link",to:""+t.listUrlPrefix+e.page.number}},[t._v("\n          后一页\n        ")])}}],null,!1,1251337431)}):t._e()],1),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"box has-text-centered box-height"},[n("div",{staticClass:"title is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n          热门文章\n        ")]),t._v(" "),t._l(t.hotList,(function(article){return n("app-item-horizontal",{key:article.id,attrs:{"base-url":"/article/",name:article.id.toString(),title:article.title,icon:article.cover,"download-count":article.page_view,"updated-ts":article.updated_ts,summary:article.summary}})}))],2)])])],1)}),[],!1,null,"3c99b9c6",null));e.default=m.exports},215:function(t,e,n){"use strict";n.r(e);n(18);var r=n(3),o={name:"Section"},l=(n(211),n(2)),c=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",{staticClass:"card-header-title section-header"},[this._t("header")],2),this._v(" "),this._t("default",[this._v("居然什么都没有找到～")])],2)}),[],!1,null,"7d61a56c",null).exports,d=n(24),m={components:{mSection:c},asyncData:function(t){t.params,t.error,t.payload;var e=t.$http;t.redirect;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.a.FE_API_V1+d.a.APP+"/list/hot",t.next=3,e.$get(n,{searchParams:{top:24}});case 3:if(200!==(r=t.sent).code){t.next=7;break}return o=r.res,t.abrupt("return",{tags:o.tags,hotApps:o.page});case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{carousels:[{text:"Slide 1",color:"primary"},{text:"Slide 2",color:"info"},{text:"Slide 3",color:"success"},{text:"Slide 4",color:"warning"},{text:"Slide 5",color:"danger"}]}}},v=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{attrs:{"indicator-mode":"hover","pause-info":!1,"indicator-style":"is-lines"}},t._l(t.carousels,(function(e,i){return n("b-carousel-item",{key:i},[n("section",{class:"hero is-medium is-"+e.color},[n("div",{staticClass:"hero-body has-text-centered"},[n("h1",{staticClass:"title"},[t._v("\n            "+t._s(e.text)+"\n          ")])])])])})),1),t._v(" "),n("main",{staticClass:"section"},[n("m-section",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        软件分类\n      ")]},proxy:!0}])},[t._v(" "),[n("tag-list",{attrs:{"tag-base-url":"/app?tag=","tag-list":t.tags}})]],2),t._v(" "),n("m-section",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        热门应用\n      ")]},proxy:!0}])},[t._v(" "),[n("div",{staticClass:"columns is-multiline"},t._l(t.hotApps,(function(t){return n("div",{key:t.id,staticClass:"column is-one-quarter"},[n("app-item",{attrs:{name:t.name,title:t.title,icon:t.icon,tags:t.tags.map((function(t){return t.name})),"download-count":t.download_count,"updated-ts":t.updated_ts,summary:t.summary}})],1)})),0)]],2)],1)],1)}),[],!1,null,null,null);e.default=v.exports},216:function(t,e,n){"use strict";n.r(e);var r={components:{}},o=(n(207),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container app-margin"},[n("div",{staticClass:"content"},[n("p",[t._v("本页面不再接受 "),n("code",[t._v("求软件")]),t._v(" 需求，如有需要请前往："),n("a",{attrs:{href:"http://www.233mac.com/wishlist"}},[t._v("心愿单")])]),t._v(" "),n("p",[t._v("有任何建议或者意见都可以留言告诉我们哦～")]),t._v(" "),n("p",[n("strong",[t._v("投稿功能现已开启！")])]),t._v(" "),n("p",[t._v("如果您手上有本站还未收录的精品APP，或者mac使用技巧"),n("br"),t._v("\n      您可以通过邮件给我们发送APP的详细资料，及百度网盘下载链接。"),n("br"),t._v("\n      我们在审核过后，会重新打包并上架至网站，并在APP详情页面添加您的"),n("code",[t._v("署名")]),t._v("。")])]),t._v(" "),n("div")])}],!1,null,"2b7ec83e",null);e.default=component.exports},217:function(t,e,n){"use strict";n.r(e);var r={components:{}},o=(n(208),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container app-margin"},[n("div",{staticClass:"content"},[n("p",[t._v("如果本站没有你想要找的软件，可以在本页提交您想要的资源，如果找到，我们会第一时间发布出来。"),n("br"),t._v("\n      您可以通过网站右下角"),n("code",[t._v("订阅本站")]),t._v("或"),n("code",[t._v("关注微博")]),t._v("获得及时的更新动态，感谢各位的支持！O(∩_∩)O~~")]),t._v(" "),n("p",[t._v("希望大家和谐求资源，提前通过下方的"),n("code",[t._v("查询心愿单")]),t._v("以及"),n("code",[t._v("查看心愿单列表")]),t._v("提前了解自己想要的软件是否已经有其他人求过了，如果求过了就不要重复提交了，这样只会影响我们的效率，感谢理解～～")]),t._v(" "),n("h2",[n("code",[t._v("再强调一下，不要在心愿单里催更新，一律不理")])])]),t._v(" "),n("div")])}],!1,null,"a72131a8",null);e.default=component.exports},218:function(t,e,n){"use strict";n.r(e);n(37),n(18);var r=n(3),o=n(85),l=n(24),c=n(104),d=n(12),m={components:{Hero:o.a},asyncData:function(t){var e=t.params,n=t.error,o=(t.payload,t.$http),c=(t.redirect,t.route),d=t.env;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.a.FE_API_V1+l.a.APP+"/"+e.appName,t.next=3,o.$get(r);case 3:if(200!==(m=t.sent).code){t.next=9;break}return v=m.res,t.abrupt("return",{websiteUrl:d.baseUrl,currentPageUrl:d.baseUrl+c.path,icon:v.icon,title:v.title,name:v.name,updatedTs:v.updated_ts,tags:v.tags,downloadCount:v.download_count,historyVersion:v.history_version,htmlContent:v.html_content,summary:v.summary,screenshot:v.screenshot,hotList:v.hot});case 9:n({statusCode:404});case 10:case"end":return t.stop()}}),t)})))()},data:function(){return{backgroundImage:{}}},computed:{displayUpdateTime:function(){return d.a.getDisplayUpdateTime(this.updatedTs)},displayTags:function(){return this.tags.map((function(t){return t.name})).join(", ")},meta:function(){return[{display:this.displayUpdateTime,icon:"timetable"},{display:this.displayTags,icon:"tag"},{display:this.downloadCount,icon:"cloud-download-outline"}]}},created:function(){this.backgroundImage={"background-image":'url("https://picsum.photos/1230/500?blur=2")'}},methods:{carouselMainImage:function(t){return{"background-image":"url(".concat(this.screenshot[t],")")}},onClickBaidu:function(t,e){this.copyPassword(e),window.open(t,"_blank")},copyPassword:function(content){var input=document.createElement("input");document.body.appendChild(input),input.setAttribute("value",content),input.select(),document.execCommand("copy")?(document.execCommand("copy"),this.$buefy.toast.open("已复制")):this.$buefy.toast.open({message:"复制失败",type:"is-danger"}),document.body.removeChild(input)}},head:function(){var t="description",e="keywords";return{title:this.title+" - "+c.a.DESCRIPTION,meta:[{hid:t,name:t,itemprop:t,content:this.summary},{hid:e,name:e,itemprop:e,content:this.displayTags}]}}},v=(n(210),n(2)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero",{attrs:{title:t.title,icon:t.icon,meta:t.meta}}),t._v(" "),n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("div",{staticClass:"box"},[n("b-carousel",{attrs:{"indicator-inside":!1,"indicator-mode":"hover","pause-info":!1},scopedSlots:t._u([{key:"indicators",fn:function(e){return[n("span",{staticClass:"al image carouselBackground carousel-indicator-size",style:t.carouselMainImage(e.i)})]}}])},t._l(t.screenshot,(function(e,r){return n("b-carousel-item",{key:r},[n("span",{staticClass:"image carouselBackground carousel-main-size",style:t.carouselMainImage(r)})])})),1)],1)]),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"box has-text-centered box-height"},[n("div",{staticClass:"is-size-7 has-text-grey-light"},[t._v("\n              热度\n            ")]),t._v(" "),n("div",{staticClass:"is-size-3 has-text-weight-bold has-text-black-bis"},[t._v("\n              "+t._s(t.downloadCount)+"\n            ")]),t._v(" "),n("div",{staticClass:"button-group"},[n("b-button",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3,offset:-50},expression:"{ duration: 1000, offset: -50 }"}],attrs:{tag:"a",href:"#history-version",type:"is-info","icon-left":"cloud-download-outline",expanded:""}},[t._v("\n                下载应用\n              ")]),t._v(" "),n("b-button",{attrs:{type:"is-warning","icon-left":"pencil-outline",expanded:""}},[t._v("\n                报告错误\n              ")])],1),t._v(" "),n("div",{staticClass:"title is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n              基本信息\n            ")]),t._v(" "),n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[t._v("\n                最新版本\n              ")]),t._v(" "),n("div",{staticClass:"level-right"},[t._v("\n                "+t._s(t.historyVersion.length>0?t.historyVersion[0].version:"暂无可用下载")+"\n              ")])]),t._v(" "),n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[t._v("\n                类别\n              ")]),t._v(" "),n("div",{staticClass:"level-right"},[t._v("\n                "+t._s(t.displayTags)+"\n              ")])]),t._v(" "),n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[t._v("\n                更新时间\n              ")]),t._v(" "),n("div",{staticClass:"level-right"},[t._v("\n                "+t._s(t.displayUpdateTime)+"\n              ")])])])])]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("article-comp",{attrs:{summary:t.summary,"html-content":t.htmlContent,title:t.title,"current-page-url":t.currentPageUrl,"website-url":t.websiteUrl}})],1),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"box has-text-centered box-height"},[n("div",{staticClass:"title is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n              相似推荐\n            ")]),t._v(" "),t._l(t.hotList,(function(t){return n("app-item-horizontal",{key:t.id,attrs:{"base-url":"/app/",name:t.name,title:t.title,icon:t.icon,"download-count":t.download_count,"updated-ts":t.updated_ts,summary:t.summary}})}))],2)])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"box",attrs:{id:"history-version"}},[n("div",{staticClass:"title has-text-centered is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n          历史版本\n        ")]),t._v(" "),n("b-table",{staticClass:"has-text-weight-medium is-family-monospace history-version-table",attrs:{data:t.historyVersion},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"version",label:"版本号",width:"200"}},[t._v("\n              "+t._s(e.row.version)+"\n            ")]),t._v(" "),n("b-table-column",{attrs:{field:"lang",label:"语言",width:"150",centered:""}},[t._v("\n              "+t._s(e.row.lang)+"\n            ")]),t._v(" "),n("b-table-column",{attrs:{field:"updated_date_str",label:"更新时间",width:"200",centered:""}},[t._v("\n              "+t._s(e.row.updated_date_str)+"\n            ")]),t._v(" "),n("b-table-column",{attrs:{field:"file_size",label:"文件大小",width:"100",centered:""}},[t._v("\n              "+t._s(e.row.file_size)+"\n            ")]),t._v(" "),n("b-table-column",{attrs:{label:"下载",numeric:""}},[e.row.local_baidu?n("b-tooltip",{attrs:{label:"点击复制密码 "+e.row.local_baidu_password+" 并打开百度云链接"}},[n("b-button",{attrs:{"icon-left":"cloud-download",type:"is-primary",size:"is-small"},on:{click:function(n){return t.onClickBaidu(e.row.local_baidu,e.row.local_baidu_password)}}},[t._v("\n                  百度云 "+t._s(e.row.local_baidu_password)+"\n                ")])],1):t._e(),t._v(" "),e.row.local_ct?n("b-button",{attrs:{"icon-left":"cloud-download",type:"is-primary",size:"is-small",tag:"a",target:"_blank",href:e.row.local_ct}},[t._v("\n                城通\n              ")]):t._e(),t._v(" "),e.row.local_magnet?n("b-button",{attrs:{"icon-left":"magnet",type:"is-primary",size:"is-small"}},[t._v("\n                磁力链\n              ")]):t._e(),t._v(" "),e.row.readme_link?n("b-button",{attrs:{"icon-left":"file-document-box-check-outline",type:"is-primary",size:"is-small"}},[t._v("\n                说明\n              ")]):t._e()],1),t._v(" "),n("b-table-column",{attrs:{label:"报告错误",width:"50",centered:""}},[n("b-button",{attrs:{"icon-left":"guy-fawkes-mask",type:"is-warning",size:"is-small"}},[t._v("\n                报告\n              ")])],1)]}}])},[t._v(" "),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[n("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),n("p",[t._v("Nothing here.")])])])])],2)],1)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"title has-text-centered is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n          常见问题\n        ")]),t._v(" "),n("p",[t._v("1. 如遇：「xxx.app已损坏，打不开。你应该将它移到废纸篓」，并非你安装的软件已损坏，而是Mac系统的安全设置问题。详见：MAC应用无法打开或文件损坏的处理方法")]),t._v(" "),n("p",[t._v("\n          2. 激活工具在新系统10.12中打不开。参照 让Special-K系列Patch工具运行在macOS sierra 10.12上 与 让CORE Keygen系列注册机成功运行在macOS sierra\n          10.12上的方法\n        ")]),t._v(" "),n("p",[t._v("3. 本站DMG、zip统一打开密码：233mac.com")]),t._v(" "),n("p",[t._v("4. 关于激活方法，大部分文章都对不同版本做了不同的激活说明。不过，最终还是以dmg包中的实际情况为准，如果里面只有单独的 .app或者.pkg文件，说明不需要做任何激活操作。")])])}],!1,null,"01fb383a",null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);n(37),n(18);var r=n(3),o=n(85),l=n(12),c=n(24),d=n(104),m={name:"ArticlePage",components:{Hero:o.a},validate:function(t){var e=t.params;return l.a.isValidId(e.articleId)},asyncData:function(t){var e=t.params,n=t.error,o=(t.payload,t.$http),l=(t.redirect,t.route),d=t.env;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,m,v,h,_,summary,f,y,title,C,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.a.FE_API_V1+c.a.ARTICLE+"/"+e.articleId,t.next=3,o.$get(r);case 3:if(200!==(m=t.sent).code){t.next=9;break}return v=m.res,h=v.cover,_=v.page_view,summary=v.summary,f=v.html_content,y=v.hot,title=v.title,C=v.updated_ts,x=v.tags,t.abrupt("return",{websiteUrl:d.baseUrl,currentPageUrl:d.baseUrl+l.path,title:title,cover:h,updatedTs:C,pageView:_,htmlContent:f,summary:summary,tags:x,hotList:y});case 9:n({statusCode:404});case 10:case"end":return t.stop()}}),t)})))()},computed:{displayUpdateTime:function(){return l.a.getDisplayUpdateTime(this.updatedTs)},displayTags:function(){return this.tags.map((function(t){return t.name})).join(", ")},meta:function(){return[{display:this.displayUpdateTime,icon:"timetable"},{display:this.displayTags,icon:"tag"},{display:this.pageView,icon:"eye"}]}},head:function(){var t="description",e="keywords";return{title:this.title+" - "+d.a.DESCRIPTION,meta:[{hid:t,name:t,itemprop:t,content:this.summary},{hid:e,name:e,itemprop:e,content:this.displayTags}]}}},v=n(2),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero",{attrs:{title:t.title,icon:t.cover,meta:t.meta}}),t._v(" "),n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("article-comp",{attrs:{summary:t.summary,"html-content":t.htmlContent,title:t.title,"current-page-url":t.currentPageUrl,"website-url":t.websiteUrl}})],1),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"box has-text-centered box-height"},[n("div",{staticClass:"title is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n              热门文章\n            ")]),t._v(" "),t._l(t.hotList,(function(article){return n("app-item-horizontal",{key:article.id,attrs:{"base-url":"/article/",name:article.id.toString(),title:article.title,icon:article.cover,"download-count":article.page_view,"updated-ts":article.updated_ts,summary:article.summary}})}))],2)])])])])],1)}),[],!1,null,"023830f8",null);e.default=component.exports},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){},83:function(t,e,n){},85:function(t,e,n){"use strict";var r={name:"Hero",props:{title:{type:String,required:!0},icon:{type:String,required:!0},meta:{type:Array,required:!0}},data:function(){return{backgroundImage:{}}},created:function(){this.backgroundImage={"background-image":'url("https://picsum.photos/1230/500?blur=2")'}}},o=(n(209),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-medium is-primary is-bold is-relative background",style:t.backgroundImage},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container is-flex app-info"},[n("img",{staticClass:"image is-128x128",attrs:{src:t.icon,alt:t.title}}),t._v(" "),n("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"subtitle breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[n("ul",t._l(t.meta,(function(e,r){return n("li",{key:r},[n("span",{staticClass:"app-meta"},[e.icon?n("b-icon",{attrs:{size:"is-small",icon:e.icon}}):t._e(),t._v("\n              "+t._s(e.display)+"\n            ")],1)])})),0)])])])])}),[],!1,null,"26a9babd",null);e.a=component.exports}}]);