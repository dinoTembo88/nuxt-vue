webpackJsonp([3],{"+lWG":function(t,e,a){"use strict";var n=a("NYxO");e.a={props:{page:{type:Object},mode:{type:String,validator:function(t){return["excerpt","full"].includes(t)}}},computed:Object(n.mapState)(["authors"])}},K9VE:function(t,e,a){var n=a("mvAK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4c756a75",n,!1,{sourceMap:!1})},MEbp:function(t,e,a){var n=a("w5JY");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("76f0507a",n,!1,{sourceMap:!1})},MnjA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("zhDQ"),s=a("TOF9"),r=!1;var i=function(t){r||a("K9VE")},o=a("VU/8")(n.a,s.a,!1,i,"data-v-79796cb2",null);o.options.__file="pages\\pages\\_slug\\index.vue",e.default=o.exports},PdEb:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"card"},[a("h2",{staticClass:"post-subtitle"},["excerpt"===t.mode?a("nuxt-link",{attrs:{to:"/pages/"+t.page.slug}},[t._v(t._s(t.page.title.rendered))]):a("span",[t._v(t._s(t.page.title.rendered))])],1),"full"===t.mode?a("div",{staticClass:"post-meta"},[a("p",[t._v("by "+t._s(t.authors[t.page.author].name))])]):t._e(),"excerpt"===t.mode?a("div",{staticClass:"post-body",domProps:{innerHTML:t._s(t.page.excerpt.rendered)}}):a("div",{staticClass:"post-body",domProps:{innerHTML:t._s(t.page.content.rendered)}})])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},TOF9:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"single-post-container main-contents"},[e("PageContents",{attrs:{page:this.current_page,mode:"full"}})],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},mvAK:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".single-post-container[data-v-79796cb2]{margin:-56px auto 0;margin:-3.5rem auto 0;width:90%;max-width:780px}",""])},nmHI:function(t,e,a){"use strict";var n=a("+lWG"),s=a("PdEb"),r=!1;var i=function(t){r||a("MEbp")},o=a("VU/8")(n.a,s.a,!1,i,"data-v-48bc2869",null);o.options.__file="components\\pages\\PageContents.vue",e.a=o.exports},w5JY:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".post-subtitle[data-v-48bc2869]{font-weight:300;font-size:36px;font-size:2.25rem;line-height:1.25;margin-bottom:16px;margin-bottom:1rem}.post-subtitle a[data-v-48bc2869]{color:#000}.post-subtitle a[data-v-48bc2869]:hover{text-decoration:none}.post-meta[data-v-48bc2869]{margin:-16px 0 16px;margin:-1rem 0 1rem;color:#999;font-size:12px;font-size:.75rem;line-height:1}.post-meta p[data-v-48bc2869]{margin:0}.post-body[data-v-48bc2869]{font-weight:300;font-size:16px;font-size:1rem;line-height:1.5;margin-bottom:16px;margin-bottom:1rem}",""])},zhDQ:function(t,e,a){"use strict";var n=a("NYxO"),s=a("nmHI"),r=a("q6gG"),i=a("vdRI");e.a={fetch:function(t){var e=t.store,a=t.params,n=e.state.page_list.filter(function(t){return t.slug===a.slug});if(!(n.length>0))return r.a.pages({slug:a.slug}).then(function(t){e.commit(i.types.CURRENT_PAGE_UPDATE,t.pages[0])});e.commit(i.types.CURRENT_PAGE_UPDATE,n[0])},computed:Object(n.mapState)(["site_data","current_page"]),components:{PageContents:s.a},head:function(){return{title:this.site_data.name+" | "+this.current_page.title.rendered}}}}});