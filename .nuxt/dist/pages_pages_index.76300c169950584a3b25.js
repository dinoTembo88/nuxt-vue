webpackJsonp([1],{"+lWG":function(t,e,a){"use strict";var s=a("NYxO");e.a={props:{page:{type:Object},mode:{type:String,validator:function(t){return["excerpt","full"].includes(t)}}},computed:Object(s.mapState)(["authors"])}},"6c+6":function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"post-list"},this._l(this.pages,function(t){return e("li",{key:t.id},[e("PageContents",{attrs:{page:t,mode:"excerpt"}})],1)}))};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},GA3h:function(t,e,a){"use strict";var s=a("nmHI");e.a={props:{pages:{type:Array}},components:{PageContents:s.a}}},GygE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("jYGi"),n=a("Z7Lq"),i=a("VU/8")(s.a,n.a,!1,null,null,null);i.options.__file="pages\\pages\\index.vue",e.default=i.exports},MEbp:function(t,e,a){var s=a("w5JY");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("76f0507a",s,!1,{sourceMap:!1})},PdEb:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"card"},[a("h2",{staticClass:"post-subtitle"},["excerpt"===t.mode?a("nuxt-link",{attrs:{to:"/pages/"+t.page.slug}},[t._v(t._s(t.page.title.rendered))]):a("span",[t._v(t._s(t.page.title.rendered))])],1),"full"===t.mode?a("div",{staticClass:"post-meta"},[a("p",[t._v("by "+t._s(t.authors[t.page.author].name))])]):t._e(),"excerpt"===t.mode?a("div",{staticClass:"post-body",domProps:{innerHTML:t._s(t.page.excerpt.rendered)}}):a("div",{staticClass:"post-body",domProps:{innerHTML:t._s(t.page.content.rendered)}})])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},YddI:function(t,e,a){"use strict";var s=a("GA3h"),n=a("6c+6"),i=!1;var r=function(t){i||a("rSor")},o=a("VU/8")(s.a,n.a,!1,r,"data-v-a9d0e126",null);o.options.__file="components\\pages\\PageList.vue",e.a=o.exports},Z7Lq:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"container main-contents"},[e("div",[e("PageList",{attrs:{pages:this.page_list}})],1)])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},jYGi:function(t,e,a){"use strict";var s=a("NYxO"),n=a("YddI"),i=a("q6gG"),r=a("vdRI");e.a={fetch:function(t){var e=t.store;t.params;return i.a.pages().then(function(t){e.commit(r.types.PAGE_LIST_UPDATE,t.pages)})},head:function(){return{title:""+this.site_data.name}},computed:Object(s.mapState)(["page_list","site_data"]),components:{PageList:n.a}}},kqgq:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".post-list[data-v-a9d0e126]{padding:0;display:grid;grid-gap:1.5rem;grid-template-columns:repeat(3,1fr)}.post-list li[data-v-a9d0e126]{list-style:none}",""])},nmHI:function(t,e,a){"use strict";var s=a("+lWG"),n=a("PdEb"),i=!1;var r=function(t){i||a("MEbp")},o=a("VU/8")(s.a,n.a,!1,r,"data-v-48bc2869",null);o.options.__file="components\\pages\\PageContents.vue",e.a=o.exports},rSor:function(t,e,a){var s=a("kqgq");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("20a11db0",s,!1,{sourceMap:!1})},w5JY:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".post-subtitle[data-v-48bc2869]{font-weight:300;font-size:36px;font-size:2.25rem;line-height:1.25;margin-bottom:16px;margin-bottom:1rem}.post-subtitle a[data-v-48bc2869]{color:#000}.post-subtitle a[data-v-48bc2869]:hover{text-decoration:none}.post-meta[data-v-48bc2869]{margin:-16px 0 16px;margin:-1rem 0 1rem;color:#999;font-size:12px;font-size:.75rem;line-height:1}.post-meta p[data-v-48bc2869]{margin:0}.post-body[data-v-48bc2869]{font-weight:300;font-size:16px;font-size:1rem;line-height:1.5;margin-bottom:16px;margin-bottom:1rem}",""])}});