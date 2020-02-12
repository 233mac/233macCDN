(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(t,e,n){"use strict";var r={props:{error:{type:Number,required:!0},message:{type:String,default:""}}},l=n(2),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[404===this.error.statusCode?e("h2",[this._v("\n    404页面不存在\n  ")]):e("h2",[this._v("\n    500服务器错误\n  ")]),this._v(" "),e("nuxt-link",{attrs:{to:"/"}},[this._v("\n    返回首页\n  ")])],1)}),[],!1,null,"76e8fbde",null);e.a=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";var r={name:"Hero",props:{title:{type:String,required:!0},icon:{type:String,required:!0},meta:{type:Array,required:!0}},data:()=>({backgroundImage:{}}),created(){this.backgroundImage={"background-image":'url("https://picsum.photos/1230/500?blur=2")'}}},l=(n(135),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-medium is-primary is-bold is-relative background",style:t.backgroundImage},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container is-flex app-info"},[n("img",{staticClass:"image is-128x128",attrs:{src:t.icon,alt:t.title}}),t._v(" "),n("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"subtitle breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[n("ul",t._l(t.meta,(function(e,r){return n("li",{key:r},[n("span",{staticClass:"app-meta"},[e.icon?n("b-icon",{attrs:{size:"is-small",icon:e.icon}}):t._e(),t._v("\n              "+t._s(e.display)+"\n            ")],1)])})),0)])])])])}),[],!1,null,"26a9babd",null);e.a=component.exports},,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r={name:"TagItem",props:{to:{type:String,required:!0},icon:{type:String,required:!0},isActive:{type:Boolean,default:!1}}},l=(n(132),n(2)),o={name:"TagList",components:{TagItem:Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{attrs:{to:this.to}},[e("b-tag",{staticClass:"tag-margin",class:{active:this.isActive},attrs:{size:"is-medium",rounded:""}},[e("b-icon",{staticClass:"icon-padding",attrs:{icon:this.icon,size:"is-small"}}),this._v(" "),e("span",[this._t("default")],2)],1)],1)}),[],!1,null,"0daf4002",null).exports},props:{tagBaseUrl:{type:String,required:!0},tagList:{type:Array,required:!0}}},c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tagList.length>0?n("b-taglist",t._l(t.tagList,(function(e){return n("tag-item",{key:e.id,attrs:{icon:e.icon||"tag",to:t.tagBaseUrl+e.id,"is-active":e.isActive}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1):n("div")}),[],!1,null,"57f436ea",null);e.a=c.exports},function(t,e,n){"use strict";var r=n(21),l=n(4),o={name:"AppItem",components:{VClamp:r.a},props:{name:{type:String,required:!0},title:{type:String,required:!0},icon:{type:String,required:!0},category:{type:Array,default:()=>{}},downloadCount:{type:Number,required:!0},updatedTs:{type:Number,required:!0},summary:{type:String,required:!0}},data:()=>({}),computed:{displayUpdateTime(){return l.a.getDisplayUpdateTime(this.updatedTs)},displayDownloadCount(){return l.a.formatDownloadCount(this.downloadCount)}}},c=(n(128),n(129),n(2)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"/app/"+t.name}},[n("div",{staticClass:"box item-animate"},[n("div",{staticClass:"is-flex app-icon-animate app-icon"},[n("figure",{staticClass:"image is-128x128"},[n("img",{attrs:{src:t.icon,alt:t.title}})])]),t._v(" "),n("div",{staticClass:"level has-text-grey is-size-7"},[n("div",{staticClass:"level-left"},[n("b-icon",{staticClass:"icon-padding",attrs:{icon:"fire",size:"is-small"}}),t._v("\n        "+t._s(t.displayDownloadCount)+"\n      ")],1),t._v(" "),n("div",{staticClass:"level-right"},[n("b-icon",{staticClass:"icon-padding",attrs:{icon:"timetable",size:"is-small"}}),t._v("\n        "+t._s(t.displayUpdateTime)+"\n      ")],1)]),t._v(" "),n("div",{staticClass:"media-content"},[n("div",{staticClass:"title is-4 title-height"},[n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n          "+t._s(t.title)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"subtitle is-6 has-text-grey summary-height"},[n("v-clamp",{attrs:{autoresize:"","max-lines":3}},[t._v("\n          "+t._s(t.summary)+"\n        ")])],1),t._v(" "),n("b-taglist",t._l(t.category,(function(e,r){return n("b-tag",{key:r,attrs:{type:"is-info"}},[t._v("\n          "+t._s(e)+"\n        ")])})),1)],1)])])}),[],!1,null,"6d30786c",null);e.a=component.exports},function(t,e,n){"use strict";var r=n(21),l=n(4),o={name:"AppItemHorizontal",components:{VClamp:r.a},props:{name:{type:String,required:!0},title:{type:String,required:!0},icon:{type:String,required:!0},category:{type:Array,default:()=>{}},downloadCount:{type:Number,required:!0},updatedTs:{type:Number,required:!0},summary:{type:String,required:!0}},data:()=>({}),computed:{displayUpdateTime(){return l.a.getDisplayUpdateTime(this.updatedTs)},displayDownloadCount(){return l.a.formatDownloadCount(this.downloadCount)}}},c=(n(130),n(2)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"/app/"+t.name}},[n("div",{staticClass:"media has-text-grey is-size-7 item-margin item-animate"},[n("figure",{staticClass:"media-left app-icon-animate"},[n("p",{staticClass:"image is-64x64"},[n("img",{attrs:{src:t.icon,alt:t.title}})])]),t._v(" "),n("div",{staticClass:"media-content content-gap"},[n("v-clamp",{staticClass:"is-size-6 has-text-black-bis",attrs:{autoresize:"","max-lines":1}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n        "+t._s(t.summary)+"\n      ")]),t._v(" "),n("div",{staticClass:"level is-mobile has-text-grey is-size-7"},[n("div",{staticClass:"level-left"},[n("b-icon",{staticClass:"icon-padding",attrs:{icon:"fire",size:"is-small"}}),t._v("\n          "+t._s(t.displayDownloadCount)+"\n        ")],1),t._v(" "),n("div",{staticClass:"level-right"},[n("b-icon",{staticClass:"icon-padding",attrs:{icon:"timetable",size:"is-small"}}),t._v("\n          "+t._s(t.displayUpdateTime)+"\n        ")],1)])],1)])])}),[],!1,null,"c051ede0",null);e.a=component.exports},function(t,e,n){"use strict";var r={name:"ArticleComp",props:{summary:{type:String,required:!0},htmlContent:{type:String,required:!0},title:{type:String,required:!0},currentPageUrl:{type:String,required:!0},websiteUrl:{type:String,required:!0}}},l=(n(131),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"has-text-grey summary-content"},[t._v("\n    "+t._s(t.summary)+"\n  ")]),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.htmlContent)}}),t._v(" "),n("div",{staticClass:"copyright"},[n("p",[t._v("©软件著作权归作者所有;本站所有软件均来源于网络，仅供学习使用，请支持正版！")]),t._v(" "),n("p",[t._v("\n      转载请注明出处："),n("a",{attrs:{href:t.websiteUrl,target:"_blank"}},[t._v("233mac.com 精品MAC应用分享")]),t._v(" »\n      "),n("a",{attrs:{href:t.currentPageUrl,target:"_blank"}},[t._v(t._s(t.title))])])])])}),[],!1,null,"c6c11ba8",null);e.a=component.exports},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r={name:"Header",props:{},data:()=>({name:""}),computed:{path(){var path=this.$route.path;return"/"===path?path:"/"===this.$route.path.slice(-1)?this.$route.path.slice(0,-1):this.$route.path},category:()=>[{name:"首页",url:"/",exact:!0},{name:"应用",url:"/app"},{name:"文章",url:"/article"},{name:"心愿单",url:"/wishlist"},{name:"留言",url:"/feedback"}],filteredDataArray:()=>[1,2,3]},created(){}},l=n(2),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{"fixed-top":"",shadow:"",transparent:""}},[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("img",{attrs:{src:n(83)}}),t._v("\n      233mac.com\n    ")])],1),t._v(" "),r("template",{slot:"start"},t._l(t.category,(function(e,n){return r("b-navbar-item",{key:n,attrs:{tag:"nuxt-link",to:e.url,exact:e.exact}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1),t._v(" "),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("b-autocomplete",{attrs:{rounded:"",data:t.filteredDataArray,placeholder:"输入关键字搜索",icon:"magnify"},on:{select:function(option){return t.selected=option}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[r("template",{slot:"empty"},[t._v("\n          No results found\n        ")])],2)],1)],1)],2)}),[],!1,null,"3a8d7231",null).exports,c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-offset-1 is-one-fifth is-size-7"},[e("div",{staticClass:"gap"},[e("img",{staticClass:"footer-img",attrs:{src:n(83)}})]),this._v(" "),e("div",{staticClass:"gap"},[this._v("\n        本站(233mac.com)并不以盈利为目的，所有软件均来源于网络，旨在推广苹果电脑在国内的应用，并为大家带来更好的下载体验。如本站的内容对您的权利造成了影响，请发邮件至service#233mac.com,我们会在第一时间将涉及版权的内容进行删除。\n      ")]),this._v(" "),e("div",[this._v("Copyright © 2020 精品 MAC 应用分享. All rights reserved.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-offset-one-quarter"},[e("div",{staticClass:"gap"},[e("div",{staticClass:"has-text-white"},[this._v("\n          友情链接\n        ")])]),this._v(" "),e("div",{staticClass:"gap"},[e("div",{staticClass:"gap has-text-white"},[this._v("\n          帮助\n        ")]),this._v(" "),e("div",{staticClass:"is-size-7"},[this._v("\n          新手帮助\n        ")])])])}],d={name:"Footer"},m=(n(127),{components:{mHeader:o,mFooter:Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer has-background-black-bis"},[n("div",{staticClass:"columns has-text-grey-lighter"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"gap has-text-white"},[t._v("\n        QQ 群\n      ")]),t._v(" "),n("div",{staticClass:"gap is-size-7"},[t._v("\n        1 群: 123456789\n      ")]),t._v(" "),n("div",[n("b-icon",{staticClass:"icon-margin",attrs:{icon:"sina-weibo",size:"is-medium"}}),t._v(" "),n("b-icon",{attrs:{icon:"rss",size:"is-medium"}})],1)])])])}),c,!1,null,"679b4d0d",null).exports}}),v=Object(l.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("m-header"),this._v(" "),e("nuxt"),this._v(" "),e("m-footer")],1)}),[],!1,null,null,null);e.a=v.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(41);n.n(r).a},function(t,e,n){"use strict";var r=n(42);n.n(r).a},function(t,e,n){"use strict";var r=n(43);n.n(r).a},function(t,e,n){"use strict";var r=n(44);n.n(r).a},function(t,e,n){"use strict";var r=n(45);n.n(r).a},function(t,e,n){"use strict";var r=n(46);n.n(r).a},function(t,e,n){"use strict";var r=n(47);n.n(r).a},function(t,e,n){"use strict";var r=n(48);n.n(r).a},function(t,e,n){"use strict";var r=n(49);n.n(r).a},function(t,e,n){"use strict";var r=n(50);n.n(r).a},function(t,e,n){"use strict";var r=n(51);n.n(r).a},,function(t,e,n){"use strict";n.r(e);var r=n(3),l={name:"AppList",components:{},props:{page:{type:Array,required:!0},pageId:{type:Number,required:!0},totalPage:{type:Number,required:!0},total:{type:Number,required:!0},pageSize:{type:Number,required:!0}},computed:{appListUrlPrefix:()=>"/app?page="}},o=n(2),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns is-multiline"},t._l(t.page,(function(t){return n("div",{key:t.id,staticClass:"column is-one-quarter"},[n("app-item",{attrs:{name:t.name,title:t.title,icon:t.icon,category:t.category.category,"download-count":t.download_count,"updated-ts":t.updated_ts,summary:t.summary}})],1)})),0),t._v(" "),n("b-pagination",{attrs:{total:t.total,current:t.pageId,"per-page":t.pageSize,"icon-prev":"chevron-left","icon-next":"chevron-right",order:"is-centered","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){t.pageId=e}},scopedSlots:t._u([{key:"default",fn:function(e){return n("b-pagination-button",{attrs:{id:"page"+e.page.number,page:e.page,tag:"nuxt-link",to:""+t.appListUrlPrefix+e.page.number}},[t._v("\n      "+t._s(e.page.number)+"\n    ")])}},{key:"previous",fn:function(e){return n("b-pagination-button",{attrs:{page:e.page,tag:"nuxt-link",to:""+t.appListUrlPrefix+e.page.number}},[t._v("\n      前一页\n    ")])}},{key:"next",fn:function(e){return n("b-pagination-button",{attrs:{page:e.page,tag:"nuxt-link",to:""+t.appListUrlPrefix+e.page.number}},[t._v("\n      后一页\n    ")])}}])})],1)}),[],!1,null,"f2fa4502",null).exports,d=n(4),m=n(5),v={components:{AppList:c},validate(t){var{query:e}=t;return!e.page||d.a.isValidId(e.page)},watchQuery:["page"],asyncData(t){var{params:e,error:n,payload:l,$http:o,redirect:c,query:d}=t;return Object(r.a)((function*(){var t=Number.parseInt(d.page)||1,e=m.a.FE_API_V1+m.a.APP+"/list/"+t,n=yield o.$get(e);if(200===n.code){var{tags:r,pageSize:l,total:c,page:v,totalPage:_}=n.res;return{tags:r,page:v,pageId:t,totalPage:_,total:c,pageSize:l}}}))()}},_=(n(133),Object(o.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container app-margin"},[e("tag-list",{attrs:{"tag-base-url":"/app?tag=","tag-list":this.tags}}),this._v(" "),e("app-list",{attrs:{page:this.page,"page-id":this.pageId,"total-page":this.totalPage,total:this.total,"page-size":this.pageSize}})],1)}),[],!1,null,"71761cc3",null));e.default=_.exports},function(t,e,n){"use strict";n.r(e);var r=n(3),l=n(21),o=n(4),c={name:"ArticleItem",components:{VClamp:l.a},props:{id:{type:Number,required:!0},cover:{type:String,required:!0},title:{type:String,required:!0},summary:{type:String,required:!0},pageView:{type:Number,required:!0},updatedTs:{type:Number,required:!0},tags:{type:Array,default:()=>[]},tagBaseUrl:{type:String,required:!0}},computed:{displayUpdateTime(){return o.a.getDisplayUpdateTime(this.updatedTs)}}},d=n(2),m=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media"},[n("figure",{staticClass:"media-left"},[n("p",{staticClass:"image is-128x128"},[n("img",{attrs:{src:t.cover,alt:""}})])]),t._v(" "),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title is-size-5"},[n("nuxt-link",{attrs:{to:"/article/"+t.id}},[n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n            "+t._s(t.title)+"\n          ")])],1)],1),t._v(" "),n("div",{staticClass:"subtitle is-size-6 has-text-grey"},[n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n          "+t._s(t.summary)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"has-text-grey"},[n("span",[t._v(t._s(t.displayUpdateTime))]),t._v(" "),n("span",t._l(t.tags,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:t.tagBaseUrl+e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)])])])])}),[],!1,null,"2ea3fc74",null).exports,v=n(5),_={components:{ArticleItem:m},validate(t){var{query:e}=t;return!e.page&&!e.tag||o.a.isValidId(e.page)||o.a.isValidId(e.tag)},watchQuery:(t,e)=>t.page!==e.page||t.tag!==e.tag,asyncData(t){var{params:e,error:n,payload:l,$http:c,redirect:d,query:m,route:_}=t;return Object(r.a)((function*(){var t=Number.parseInt(m.page)||1,e=Number.parseInt(m.tag),n={};t&&(n.page=t),e&&(n.tag=e);var r=yield c.$get(v.a.FE_API_V1+v.a.ARTICLE+"/list",{searchParams:n});if(200===r.code){var{tags:l,pageSize:d,total:h,page:f,totalPage:y}=r.res;if(o.a.isValidId(_.query.tag)){var C=Number.parseInt(_.query.tag);l.forEach(t=>{t.id===C&&(t.isActive=!0)})}return{tags:l,page:f,pageId:t,totalPage:y,total:h,pageSize:d}}}))()},computed:{articleListUrlPrefix(){var t="";return this.$route.query.tag&&(t="tag="+this.$route.query.tag+"&"),"/article?".concat(t,"page=")}}},h=(n(134),Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container app-margin"},[n("tag-list",{attrs:{"tag-base-url":"/article?tag=","tag-list":t.tags}}),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("div",{staticClass:"article-margin"},t._l(t.page,(function(t){return n("article-item",{key:t.id,attrs:{id:t.id,cover:t.cover,title:t.title,summary:t.summary,"page-view":t.page_view,"updated-ts":t.updated_ts,tags:t.tags,"tag-base-url":"/article?tag="}})})),1),t._v(" "),t.totalPage>1?n("b-pagination",{attrs:{total:t.total,current:t.pageId,"per-page":t.pageSize,"icon-prev":"chevron-left","icon-next":"chevron-right",order:"is-centered","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){t.pageId=e}},scopedSlots:t._u([{key:"default",fn:function(e){return n("b-pagination-button",{attrs:{id:"page"+e.page.number,page:e.page,tag:"nuxt-link",to:""+t.articleListUrlPrefix+e.page.number}},[t._v("\n          "+t._s(e.page.number)+"\n        ")])}},{key:"previous",fn:function(e){return n("b-pagination-button",{attrs:{page:e.page,tag:"nuxt-link",to:""+t.articleListUrlPrefix+e.page.number}},[t._v("\n          前一页\n        ")])}},{key:"next",fn:function(e){return n("b-pagination-button",{attrs:{page:e.page,tag:"nuxt-link",to:""+t.articleListUrlPrefix+e.page.number}},[t._v("\n          后一页\n        ")])}}],null,!1,2018854771)}):t._e()],1),t._v(" "),t._m(0)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("div",{staticClass:"box has-text-centered box-height"},[e("div",{staticClass:"title is-size-5 has-text-weight-bold has-text-black-bis"},[this._v("\n          热门文章\n        ")])])])}],!1,null,"762f3792",null));e.default=h.exports},function(t,e,n){"use strict";n.r(e);var r=n(3),l={name:"Section"},o=(n(137),n(2)),c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",{staticClass:"card-header-title section-header"},[this._t("header")],2),this._v(" "),this._t("default",[this._v("居然什么都没有找到～")])],2)}),[],!1,null,"7d61a56c",null).exports,d=n(5),m={components:{mSection:c},asyncData(t){var{params:e,error:n,payload:l,$http:o,redirect:c}=t;return Object(r.a)((function*(){var t=d.a.FE_API_V1+d.a.APP+"/list/hot",e=yield o.$get(t);if(200===e.code)return{tags:e.res.tags,hotApps:e.res.page}}))()},data:()=>({carousels:[{text:"Slide 1",color:"primary"},{text:"Slide 2",color:"info"},{text:"Slide 3",color:"success"},{text:"Slide 4",color:"warning"},{text:"Slide 5",color:"danger"}]}),computed:{}},v=Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{attrs:{"indicator-mode":"hover","pause-info":!1,"indicator-style":"is-lines"}},t._l(t.carousels,(function(e,i){return n("b-carousel-item",{key:i},[n("section",{class:"hero is-medium is-"+e.color},[n("div",{staticClass:"hero-body has-text-centered"},[n("h1",{staticClass:"title"},[t._v("\n            "+t._s(e.text)+"\n          ")])])])])})),1),t._v(" "),n("main",{staticClass:"section"},[n("m-section",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        软件分类\n      ")]},proxy:!0}])},[t._v(" "),[n("tag-list",{attrs:{"tag-base-url":"/app?tag=","tag-list":t.tags}})]],2),t._v(" "),n("m-section",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        热门应用\n      ")]},proxy:!0}])},[t._v(" "),[n("div",{staticClass:"columns is-multiline"},t._l(t.hotApps,(function(t){return n("div",{key:t.id,staticClass:"column is-one-quarter"},[n("app-item",{attrs:{name:t.name,title:t.title,icon:t.icon,category:t.category.category,"download-count":t.download_count,"updated-ts":t.updated_ts,summary:t.summary}})],1)})),0)]],2)],1)],1)}),[],!1,null,null,null);e.default=v.exports},function(t,e,n){"use strict";n.r(e);var r={components:{}},l=n(2),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  feed\n")])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r={components:{}},l=n(2),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  wishlist\n")])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r=n(3),l=n(52),o=n(5),c=n(65),d=n(4),m={components:{Hero:l.a},asyncData(t){var{params:e,error:n,payload:l,$http:c,redirect:d,route:m,env:v}=t;return Object(r.a)((function*(){var t=o.a.FE_API_V1+o.a.APP+"/"+e.appName,r=yield c.$get(t);if(200===r.code){var l=r.res;return{websiteUrl:v.baseUrl,currentPageUrl:v.baseUrl+m.path,icon:l.icon,title:l.title,name:l.name,updatedTs:l.updated_ts,category:l.category.category,downloadCount:l.download_count,historyVersion:l.history_version,htmlContent:l.html_content,summary:l.summary}}n({statusCode:404})}))()},data:()=>({backgroundImage:{}}),computed:{displayUpdateTime(){return d.a.getDisplayUpdateTime(this.updatedTs)},meta(){return[{display:this.displayUpdateTime},{display:this.category.join(", ")},{display:this.downloadCount,icon:"cloud-download-outline"}]}},created(){this.backgroundImage={"background-image":'url("https://picsum.photos/1230/500?blur=2")'}},methods:{getImgUrl:t=>"https://picsum.photos/id/43".concat(t,"/1230/500"),onClickBaidu(t,e){this.copyPassword(e),window.open(t,"_blank")},copyPassword(content){var input=document.createElement("input");document.body.appendChild(input),input.setAttribute("value",content),input.select(),document.execCommand("copy")?(document.execCommand("copy"),this.$buefy.toast.open("已复制")):this.$buefy.toast.open({message:"复制失败",type:"is-danger"}),document.body.removeChild(input)}},head(){return{title:this.title+" - "+c.a.DESCRIPTION}}},v=(n(136),n(2)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero",{attrs:{title:t.title,icon:t.icon,meta:t.meta}}),t._v(" "),n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("div",{staticClass:"box box-height"},[n("b-carousel",{attrs:{"indicator-inside":!1,"indicator-mode":"hover","pause-info":!1},scopedSlots:t._u([{key:"indicators",fn:function(e){return[n("span",{staticClass:"al image"},[n("img",{attrs:{src:t.getImgUrl(e.i),title:e.i}})])]}}])},t._l(6,(function(e,r){return n("b-carousel-item",{key:r},[n("span",{staticClass:"image"},[n("img",{attrs:{src:t.getImgUrl(r)}})])])})),1)],1)]),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"box has-text-centered box-height"},[n("div",{staticClass:"is-size-7 has-text-grey-light"},[t._v("\n              热度\n            ")]),t._v(" "),n("div",{staticClass:"is-size-3 has-text-weight-bold has-text-black-bis"},[t._v("\n              "+t._s(t.downloadCount)+"\n            ")]),t._v(" "),n("div",{staticClass:"button-group"},[n("b-button",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3,offset:-50},expression:"{ duration: 1000, offset: -50 }"}],attrs:{tag:"a",href:"#history-version",type:"is-info","icon-left":"cloud-download-outline",expanded:""}},[t._v("\n                下载应用\n              ")]),t._v(" "),n("b-button",{attrs:{type:"is-warning","icon-left":"pencil-outline",expanded:""}},[t._v("\n                报告错误\n              ")])],1),t._v(" "),n("div",{staticClass:"title is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n              基本信息\n            ")]),t._v(" "),n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[t._v("\n                最新版本\n              ")]),t._v(" "),n("div",{staticClass:"level-right"},[t._v("\n                "+t._s(t.historyVersion.length>1?t.historyVersion[0].version:"暂无可用下载")+"\n              ")])]),t._v(" "),n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[t._v("\n                类别\n              ")]),t._v(" "),n("div",{staticClass:"level-right"},[t._v("\n                "+t._s(t.category.join(", "))+"\n              ")])]),t._v(" "),n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[t._v("\n                更新时间\n              ")]),t._v(" "),n("div",{staticClass:"level-right"},[t._v("\n                "+t._s(t.displayUpdateTime)+"\n              ")])])])])]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("article-comp",{attrs:{summary:t.summary,"html-content":t.htmlContent,title:t.title,"current-page-url":t.currentPageUrl,"website-url":t.websiteUrl}})],1),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"box has-text-centered box-height"},[n("div",{staticClass:"title is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n              相似推荐\n            ")]),t._v(" "),n("app-item-horizontal",{attrs:{name:t.name,title:t.title,icon:t.icon,category:t.category,"download-count":t.downloadCount,"updated-ts":t.updatedTs,summary:t.summary}})],1)])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"box",attrs:{id:"history-version"}},[n("div",{staticClass:"title has-text-centered is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n          历史版本\n        ")]),t._v(" "),n("b-table",{staticClass:"has-text-weight-medium is-family-monospace history-version-table",attrs:{data:t.historyVersion},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"version",label:"版本号",width:"200"}},[t._v("\n              "+t._s(e.row.version)+"\n            ")]),t._v(" "),n("b-table-column",{attrs:{field:"lang",label:"语言",width:"150",centered:""}},[t._v("\n              "+t._s(e.row.lang)+"\n            ")]),t._v(" "),n("b-table-column",{attrs:{field:"updated_date_str",label:"更新时间",width:"200",centered:""}},[t._v("\n              "+t._s(e.row.updated_date_str)+"\n            ")]),t._v(" "),n("b-table-column",{attrs:{field:"file_size",label:"文件大小",width:"100",centered:""}},[t._v("\n              "+t._s(e.row.file_size)+"\n            ")]),t._v(" "),n("b-table-column",{attrs:{label:"下载",numeric:""}},[e.row.local_baidu?n("b-tooltip",{attrs:{label:"点击复制密码 "+e.row.local_baidu_password+" 并打开百度云链接"}},[n("b-button",{attrs:{"icon-left":"weather-cloudy-alert",type:"is-primary",size:"is-small"},on:{click:function(n){return t.onClickBaidu(e.row.local_baidu,e.row.local_baidu_password)}}},[t._v("\n                  百度云 "+t._s(e.row.local_baidu_password)+"\n                ")])],1):t._e(),t._v(" "),e.row.local_ct?n("b-button",{attrs:{"icon-left":"weather-cloudy-alert",type:"is-primary",size:"is-small"}},[t._v("\n                城通\n              ")]):t._e(),t._v(" "),e.row.local_magnet?n("b-button",{attrs:{"icon-left":"magnet",type:"is-primary",size:"is-small"}},[t._v("\n                磁力链\n              ")]):t._e(),t._v(" "),e.row.readme_link?n("b-button",{attrs:{"icon-left":"file-document-box-check-outline",type:"is-primary",size:"is-small"}},[t._v("\n                说明\n              ")]):t._e()],1),t._v(" "),n("b-table-column",{attrs:{label:"报告错误",width:"50",centered:""}},[n("b-button",{attrs:{"icon-left":"guy-fawkes-mask",type:"is-warning",size:"is-small"}},[t._v("\n                报告\n              ")])],1)]}}])},[t._v(" "),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[n("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),n("p",[t._v("Nothing here.")])])])])],2)],1)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"title has-text-centered is-size-5 has-text-weight-bold has-text-black-bis"},[t._v("\n          常见问题\n        ")]),t._v(" "),n("p",[t._v("1. 如遇：「xxx.app已损坏，打不开。你应该将它移到废纸篓」，并非你安装的软件已损坏，而是Mac系统的安全设置问题。详见：MAC应用无法打开或文件损坏的处理方法")]),t._v(" "),n("p",[t._v("\n          2. 激活工具在新系统10.12中打不开。参照 让Special-K系列Patch工具运行在macOS sierra 10.12上 与 让CORE Keygen系列注册机成功运行在macOS sierra\n          10.12上的方法\n        ")]),t._v(" "),n("p",[t._v("3. 本站DMG、zip统一打开密码：233mac.com")]),t._v(" "),n("p",[t._v("4. 关于激活方法，大部分文章都对不同版本做了不同的激活说明。不过，最终还是以dmg包中的实际情况为准，如果里面只有单独的 .app或者.pkg文件，说明不需要做任何激活操作。")])])}],!1,null,"032de0f0",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r=n(3),l=n(52),o=n(4),c=n(5),d=n(65),m={name:"ArticlePage",components:{Hero:l.a},validate(t){var{params:e}=t;return o.a.isValidId(e.articleId)},asyncData(t){var{params:e,error:n,payload:l,$http:o,redirect:d,route:m,env:v}=t;return Object(r.a)((function*(){var t=c.a.FE_API_V1+c.a.ARTICLE+"/"+e.articleId,r=yield o.$get(t);if(200===r.code){var l=r.res;return{websiteUrl:v.baseUrl,currentPageUrl:v.baseUrl+m.path,title:l.title,cover:l.cover,updatedTs:l.updated_ts,pageView:l.page_view,htmlContent:l.html_content,summary:l.summary}}n({statusCode:404})}))()},computed:{displayUpdateTime(){return o.a.getDisplayUpdateTime(this.updatedTs)},meta(){return[{display:this.displayUpdateTime},{display:this.pageView,icon:"eye"}]}},head(){return{title:this.title+" - "+d.a.DESCRIPTION}}},v=n(2),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero",{attrs:{title:t.title,icon:t.cover,meta:t.meta}}),t._v(" "),n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("article-comp",{attrs:{summary:t.summary,"html-content":t.htmlContent,title:t.title,"current-page-url":t.currentPageUrl,"website-url":t.websiteUrl}})],1),t._v(" "),t._m(0)])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("div",{staticClass:"box has-text-centered box-height"},[e("div",{staticClass:"title is-size-5 has-text-weight-bold has-text-black-bis"},[this._v("\n              热门文章\n            ")])])])}],!1,null,"417453e8",null);e.default=component.exports}]]);