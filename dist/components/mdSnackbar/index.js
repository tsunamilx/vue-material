/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.VueMaterial=t(require("vue")):e.VueMaterial=t(e.Vue)})(this,(function(e){return (function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=433)})({0:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var u=a.computed||(a.computed={});Object.keys(o).forEach((function(e){var t=o[e];u[e]=function(){return t}}))}return{esModule:r,exports:i,options:a}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},116:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-snackbar",s.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(321),s=o(i),a=n(261),u=o(a);e.exports=t.default},129:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(409),i=o(r),s=new i.default({data:function(){return{current:null}}});t.default=s,e.exports=t.default},179:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(48),i=o(r),s=n(39),a=o(s),u=n(1),c=o(u),d=n(129),l=o(d);t.default={props:{id:[String,Number],mdPosition:{type:String,default:"bottom center"},mdDuration:{type:[String,Number],default:4e3}},mixins:[c.default],data:function(){return{snackbarId:this.id||"snackbar-"+(0,i.default)(),active:!1,rootElement:{},snackbarElement:{},directionClass:null,closeTimeout:null}},computed:{classes:function(){var e={"md-active":this.active};return this.directionClass=this.mdPosition.replace(/ /g,"-"),e["md-position-"+this.directionClass]=!0,e}},watch:{active:function(e){var t="md-has-toast-"+this.directionClass,n="md-has-toast";e?(document.body.classList.add(t),document.body.classList.add(n)):(document.body.classList.remove(t),document.body.classList.remove(n))}},methods:{removeElement:function(){if(document.body.contains(this.snackbarElement)){var e=this.snackbarElement.querySelector(".md-ripple.md-active");e&&e.classList.remove("md-active"),document.body.removeChild(this.snackbarElement)}},open:function(){l.default.current&&l.default.current.close(),l.default.current=this,document.body.appendChild(this.snackbarElement),window.getComputedStyle(this.$refs.container).backgroundColor,this.active=!0,this.$emit("open"),this.closeTimeout=window.setTimeout(this.close,this.mdDuration),this.timeoutStartedAt=Date.now()},close:function(){var e=this;this.$refs.container&&!(function(){var t=function t(){e.$refs.container.removeEventListener(a.default,t),e.removeElement()};l.default.current=null,e.active=!1,e.$emit("close"),e.$refs.container.removeEventListener(a.default,t),e.$refs.container.addEventListener(a.default,t),window.clearTimeout(e.closeTimeout),e.pendingDuration=e.mdDuration})()},pauseTimeout:function(){this.pendingDuration=this.pendingDuration-(Date.now()-this.timeoutStartedAt),this.timeoutStartedAt=0,window.clearTimeout(this.closeTimeout)},resumeTimeout:function(){this.timeoutStartedAt=Date.now(),this.closeTimeout=window.setTimeout(this.close,this.pendingDuration)}},mounted:function(){var e=this;this.$nextTick((function(){e.snackbarElement=e.$el,e.snackbarElement.parentNode.removeChild(e.snackbarElement),e.timeoutStartedAt=0,e.pendingDuration=e.mdDuration}))},beforeDestroy:function(){window.clearTimeout(this.closeTimeout),this.removeElement()}},e.exports=t.default},239:function(e,t){},261:function(e,t){e.exports=".THEME_NAME .md-snackbar .md-ink-ripple,.THEME_NAME.md-snackbar .md-ink-ripple{color:#fff}\n"},321:function(e,t,n){n(239);var o=n(0)(n(179),n(404),null,null);e.exports=o.exports},39:function(e,t,n){"use strict";function o(){var e=document.createElement("span"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o(),e.exports=t.default},404:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-snackbar",class:[e.themeClass,e.classes],attrs:{id:e.snackbarId},on:{mouseenter:e.pauseTimeout,mouseleave:e.resumeTimeout}},[n("div",{ref:"container",staticClass:"md-snackbar-container"},[n("div",{staticClass:"md-snackbar-content"},[e._t("default")],2)])])},staticRenderFns:[]}},409:function(t,n){t.exports=e},433:function(e,t,n){e.exports=n(116)},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return Math.random().toString(36).slice(4)};t.default=o,e.exports=t.default}})}));