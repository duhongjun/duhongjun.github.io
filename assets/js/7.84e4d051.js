(window.webpackJsonp=window.webpackJsonp||[]).push([[7,22],{273:function(t,e,a){},281:function(t,e,a){},284:function(t,e,a){"use strict";a.r(e);a(61),a(265);var n=a(264);function i(t,e,a,n){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},a)}function s(t,e,a,r,o){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||u>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(n.e)(r,a+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,a+"#"+e.slug,e.title,l),s(t,e.children,a,r,o,u+1)])})))}var r={functional:!0,props:["item"],render:function(t,e){var a=e.parent,r=a.$page,o=a.$site,u=a.$route,l=e.props.item,c=Object(n.e)(u,l.path),p="auto"===l.type?c||l.children.some((function(t){return Object(n.e)(u,l.basePath+"#"+t.slug)})):c,d=i(t,l.path,l.title||l.path,p),h=null!=r.frontmatter.sidebarDepth?r.frontmatter.sidebarDepth:o.themeConfig.sidebarDepth,f=null==h?1:h,v=!!o.themeConfig.displayAllHeaders;return"auto"===l.type?[d,s(t,l.children,l.basePath,u,f)]:(p||v)&&l.headers&&!n.d.test(l.path)?[d,s(t,Object(n.c)(l.headers),l.path,u,f)]:d}},o=(a(291),a(44)),u=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=u.exports},286:function(t,e,a){},290:function(t,e,a){},291:function(t,e,a){"use strict";var n=a(273);a.n(n).a},292:function(t,e,a){},293:function(t,e,a){},299:function(t,e,a){"use strict";var n=a(281);a.n(n).a},302:function(t,e,a){"use strict";a.r(e);var n=a(284),i=a(278),s={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:n.default,DropdownTransition:i.default}},r=(a(299),a(44)),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[a("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),a("DropdownTransition",[t.open||!t.collapsable?a("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return a("li",[a("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null);e.default=o.exports},304:function(t,e,a){"use strict";var n=a(286);a.n(n).a},310:function(t,e,a){"use strict";var n=a(290);a.n(n).a},311:function(t,e,a){"use strict";var n=a(292);a.n(n).a},312:function(t,e,a){"use strict";var n=a(293);a.n(n).a},314:function(t,e,a){},318:function(t,e,a){"use strict";a.r(e);var n={components:{NavLink:a(274).default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(304),a(44)),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("p",{staticClass:"description"},[t._v(t._s(t.data.subDescription||t.$description||"Welcome to your VuePress site"))]),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[],!1,null,null,null);e.default=s.exports},320:function(t,e,a){"use strict";a.r(e);a(104),a(309),a(62),a(103),a(105);var n=a(46),i=a(264);function s(t,e,a){var i=[];e.forEach((function(t){"group"===t.type?i.push.apply(i,Object(n.a)(t.children||[])):i.push(t)}));for(var s=0;s<i.length;s++){var r=i[s];if("page"===r.type&&r.path===t.path)return i[s+a]}}var r={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$page.frontmatter.prev;return!1===a?void 0:a?Object(i.l)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,s(t,e,-1))},next:function(){var t,e,a=this.$page.frontmatter.next;return!1===a?void 0:a?Object(i.l)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,s(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,a=t.editLinks,n=t.docsDir,s=void 0===n?"":n,r=t.docsBranch,o=void 0===r?"master":r,u=t.docsRepo,l=void 0===u?e:u,c=Object(i.i)(this.$page.path);return i.a.test(c)?c+="README.md":c+=".md",l&&a?this.createEditLink(e,l,s,o,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,a,n,s){return/bitbucket.org/.test(t)?(i.j.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(n)+(a?"/"+a.replace(i.a,""):"")+s+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default"):(i.j.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit/".concat(n)+(a?"/"+a.replace(i.a,""):"")+s}}},o=(a(310),a(44)),u=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[t._t("top"),t._v(" "),a("Content",{attrs:{custom:!1}}),t._v(" "),a("div",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=u.exports},321:function(t,e,a){"use strict";a.r(e);a(265);var n=a(302),i=a(284),s=a(300),r=a(264);var o={components:{SidebarGroup:n.default,SidebarLink:i.default,NavLinks:s.default},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var a=0;a<e.length;a++){var n=e[a];if("group"===n.type&&n.children.some((function(e){return Object(r.e)(t,e.path)})))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.path)}}},u=(a(311),a(44)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?a("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,n){return a("li",{key:n},["group"===e.type?a("SidebarGroup",{attrs:{item:e,first:0===n,open:n===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(n)}}}):a("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=l.exports},322:function(t,e,a){"use strict";a.r(e);var n=a(52),i={props:{updateEvent:{type:Object,default:null}},computed:{popupConfig:function(){for(var t=0,e=[this.$themeLocaleConfig,this.$site.themeConfig];t<e.length;t++){var a=e[t].serviceWorker;if(a&&a.updatePopup)return"object"===Object(n.a)(a.updatePopup)?a.updatePopup:{}}return null},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||"New content is available."},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||"Refresh"}},methods:{reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){window.location.reload(!0)})),this.updateEvent=null)}}},s=(a(312),a(44)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"sw-update-popup"}},[t.enabled?a("div",{staticClass:"sw-update-popup"},[t._v("\n    "+t._s(t.message)),a("br"),t._v(" "),a("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()])}),[],!1,null,null,null);e.default=r.exports},328:function(t,e,a){"use strict";var n=a(314);a.n(n).a},360:function(t,e,a){"use strict";a.r(e);a(110);var n=a(0),i=a(325),s=a.n(i),r=a(318),o=a(356),u=a(320),l=a(321),c=a(322),p=a(264),d={components:{Home:r.default,Page:u.default,Sidebar:l.default,Navbar:o.default,SWUpdatePopup:c.default},data:function(){return{isSidebarOpen:!1,swUpdateEvent:null}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(p.m)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),s.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,a){t.path===e.path||n.default.component(t.name)||s.a.start(),a()})),this.$router.afterEach((function(){s.a.done(),t.isSidebarOpen=!1})),this.$on("sw-updated",this.onSWUpdated)},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onSWUpdated:function(t){this.swUpdateEvent=t}}},h=(a(327),a(328),a(44)),f=Object(h.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.layout?a("div",{staticClass:"custom-layout"},[a(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),a("SWUpdatePopup",{attrs:{updateEvent:t.swUpdateEvent}})],1)}),[],!1,null,null,null);e.default=f.exports}}]);