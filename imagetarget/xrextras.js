!function(e){var n={};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=3)}([function(e,n,r){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=function(e,n){var r=e[1]||"",t=e[3];if(!t)return r;if(n&&"function"==typeof btoa){var i=(a=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=t.sources.map(function(e){return"/*# sourceURL="+t.sourceRoot+e+" */"});return[r].concat(o).concat([i]).join("\n")}var a;return[r].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(t[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&t[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),n.push(a))}},n}},function(e,n,r){var t,i,o={},a=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=t.apply(this,arguments)),i}),s=function(e){var n={};return function(e,r){if("function"==typeof e)return e();if(void 0===n[e]){var t=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}}(),l=null,d=0,c=[],m=r(8);function u(e,n){for(var r=0;r<e.length;r++){var t=e[r],i=o[t.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](t.parts[a]);for(;a<t.parts.length;a++)i.parts.push(w(t.parts[a],n))}else{var s=[];for(a=0;a<t.parts.length;a++)s.push(w(t.parts[a],n));o[t.id]={id:t.id,refs:1,parts:s}}}}function p(e,n){for(var r=[],t={},i=0;i<e.length;i++){var o=e[i],a=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};t[a]?t[a].parts.push(s):r.push(t[a]={id:a,parts:[s]})}return r}function h(e,n){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=c[c.length-1];if("top"===e.insertAt)t?t.nextSibling?r.insertBefore(n,t.nextSibling):r.appendChild(n):r.insertBefore(n,r.firstChild),c.push(n);else if("bottom"===e.insertAt)r.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,r);r.insertBefore(n,i)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=c.indexOf(e);n>=0&&c.splice(n,1)}function g(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var t=function(){0;return r.nc}();t&&(e.attrs.nonce=t)}return v(n,e.attrs),h(e,n),n}function v(e,n){Object.keys(n).forEach(function(r){e.setAttribute(r,n[r])})}function w(e,n){var r,t,i,o;if(n.transform&&e.css){if(!(o="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=o}if(n.singleton){var a=d++;r=l||(l=g(n)),t=y.bind(null,r,a,!1),i=y.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(n,e.attrs),h(e,n),n}(n),t=function(e,n,r){var t=r.css,i=r.sourceMap,o=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||o)&&(t=m(t));i&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([t],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,n),i=function(){f(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(n),t=function(e,n){var r=n.css,t=n.media;t&&e.setAttribute("media",t);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),i=function(){f(r)});return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var r=p(e,n);return u(r,n),function(e){for(var t=[],i=0;i<r.length;i++){var a=r[i];(s=o[a.id]).refs--,t.push(s)}e&&u(p(e,n),n);for(i=0;i<t.length;i++){var s;if(0===(s=t[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var b,x=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function y(e,n,r,t){var i=r?"":t.css;if(e.styleSheet)e.styleSheet.cssText=x(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}},function(e,n,r){var t=r(7);"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(1)(t,i);t.locals&&(e.exports=t.locals)},function(e,n,r){const t=r(4),i=()=>{setTimeout(()=>{window.dispatchEvent(new CustomEvent("xrandextrasloaded"))},1)};window.XR&&"function"==typeof window.XR&&(window.nativeXR=window.XR,window.XR=void 0),window.XRExtras=t.XRExtras,setTimeout(()=>{window.dispatchEvent(new CustomEvent("xrextrasloaded"))},1),window.XR?i():window.addEventListener("xrloaded",i)},function(e,n,r){const{AFrameFactory:t}=r(5),{AlmostThereFactory:i}=r(6),{DebugWebViewsFactory:o}=r(12),{FullWindowCanvasFactory:a}=r(13),{LoadingFactory:s}=r(14),{RuntimeErrorFactory:l}=r(20);e.exports={XRExtras:{AFrame:t(),AlmostThere:i(),DebugWebViews:o(),FullWindowCanvas:a(),Loading:s(),RuntimeError:l()}}},function(e,n){let r=null;const t=()=>{XR.addCameraPipelineModule(XRExtras.Loading.pipelineModule())};const i=()=>{const e=document.getElementsByTagName("a-scene")[0];if(!e)return;const n=e.attributes;Object.keys(n).forEach(e=>{const r=n.item(e).name;if("xrextras-almost-there"==r){const r=new RegExp("url:([^;]*)").exec(n.item(e).value);r&&window.XRExtras.AlmostThere.configure({url:r[1]}),window.XR?window.XRExtras.AlmostThere.checkCompatibility():window.addEventListener("xrloaded",window.XRExtras.AlmostThere.checkCompatibility)}"xrextras-loading"==r&&window.XRExtras.Loading.showLoading({onxrloaded:t})})},o=window.onload;window.onload=()=>{o&&o(),window.XRExtras?i():window.addEventListener("xrextrasloaded",i)},e.exports={AFrameFactory:()=>(r||(r=function(){let e=!1;const n=()=>{!e&&window.AFRAME&&(e=!0,AFRAME.registerComponent("xrextras-almost-there",{schema:{url:{default:""}},init:function(){const e=()=>{this.data.url&&XRExtras.AlmostThere.configure({url:this.data.url}),XR.addCameraPipelineModule(XRExtras.AlmostThere.pipelineModule())};window.XRExtras&&window.XR?e():window.addEventListener("xrandextrasloaded",e)}}),AFRAME.registerComponent("xrextras-loading",{init:function(){let e=!1;this.el.addEventListener("loaded",()=>{e=!0});const n=()=>e,r=()=>{XRExtras.Loading.setAppLoadedProvider(n),XRExtras.Loading.showLoading({onxrloaded:t})};window.XRExtras?r():window.addEventListener("xrextrasloaded",r)}}),AFRAME.registerComponent("xrextras-runtime-error",{init:function(){const e=()=>{XR.addCameraPipelineModule(XRExtras.RuntimeError.pipelineModule())};window.XRExtras&&window.XR?e():window.addEventListener("xrandextrasloaded",e)}}),AFRAME.registerComponent("xrextras-tap-recenter",{init:function(){const e=this.el.sceneEl;e.addEventListener("click",()=>{e.emit("recenter",{})})}}),AFRAME.registerComponent("xrextras-generate-image-targets",{schema:{primitive:{type:"string"}},init:function(){const e={},n=n=>{const r=e[n.detail.name];r&&r.emit(n.type,n.detail,!1)};this.el.sceneEl.addEventListener("xrimageloading",({detail:n})=>{n.imageTargets.forEach(({name:n,metadata:r,properties:t})=>{const i=document.createElement(this.data.primitive);i.setAttribute("id",`xrextras-imagetargets-${n}`),i.setAttribute("name",n),i.setAttribute("rotated",t.isRotated?"true":"false"),i.setAttribute("metadata","string"==typeof r?r:JSON.stringify(r)),document.querySelector("a-scene").appendChild(i),e[n]=i})}),this.el.sceneEl.addEventListener("xrimagefound",n),this.el.sceneEl.addEventListener("xrimageupdated",n),this.el.sceneEl.addEventListener("xrimagelost",n)}}),AFRAME.registerComponent("xrextras-named-image-target",{schema:{name:{type:"string"}},init:function(){const e=this.el.object3D,n=this.data.name;e.visible=!1;const r=({detail:r})=>{n==r.name&&(e.position.copy(r.position),e.quaternion.copy(r.rotation),e.scale.set(r.scale,r.scale,r.scale),e.visible=!0)};this.el.sceneEl.addEventListener("xrimagefound",r),this.el.sceneEl.addEventListener("xrimageupdated",r),this.el.sceneEl.addEventListener("xrimagelost",({detail:r})=>{n==r.name&&(e.visible=!1)})}}),AFRAME.registerComponent("xrextras-gesture-detector",{schema:{element:{default:""}},init:function(){this.targetElement=this.data.element&&document.querySelector(this.data.element),this.targetElement||(this.targetElement=this.el),this.internalState={previousState:null},this.emitGestureEvent=this.emitGestureEvent.bind(this),this.targetElement.addEventListener("touchstart",this.emitGestureEvent),this.targetElement.addEventListener("touchend",this.emitGestureEvent),this.targetElement.addEventListener("touchmove",this.emitGestureEvent)},remove:function(){this.targetElement.removeEventListener("touchstart",this.emitGestureEvent),this.targetElement.removeEventListener("touchend",this.emitGestureEvent),this.targetElement.removeEventListener("touchmove",this.emitGestureEvent)},emitGestureEvent(e){const n=this.getTouchState(e),r=this.internalState.previousState,t=r&&n&&n.touchCount==r.touchCount,i=r&&!t,o=n&&!t;if(i){const e=this.getEventPrefix(r.touchCount)+"fingerend";this.el.emit(e,r),this.internalState.previousState=null}if(o){n.startTime=performance.now(),n.startPosition=n.position,n.startSpread=n.spread;const e=this.getEventPrefix(n.touchCount)+"fingerstart";this.el.emit(e,n),this.internalState.previousState=n}if(t){const e={positionChange:{x:n.position.x-r.position.x,y:n.position.y-r.position.y}};n.spread&&(e.spreadChange=n.spread-r.spread),Object.assign(r,n),Object.assign(e,r);const t=this.getEventPrefix(n.touchCount)+"fingermove";this.el.emit(t,e)}},getTouchState:function(e){if(0==e.touches.length)return null;const n=[];for(let r=0;r<e.touches.length;r++)n.push(e.touches[r]);const r={touchCount:n.length},t=n.reduce((e,n)=>e+n.clientX,0)/n.length,i=n.reduce((e,n)=>e+n.clientY,0)/n.length;r.positionRaw={x:t,y:i};const o=2/(window.innerWidth+window.innerHeight);if(r.position={x:t*o,y:i*o},n.length>=2){const e=n.reduce((e,n)=>e+Math.sqrt(Math.pow(t-n.clientX,2)+Math.pow(i-n.clientY,2)),0)/n.length;r.spread=e*o}return r},getEventPrefix:e=>["one","two","three","many"][Math.min(e,4)-1]}),AFRAME.registerComponent("xrextras-one-finger-rotate",{init:function(){this.handleEvent=this.handleEvent.bind(this),this.el.sceneEl.addEventListener("onefingermove",this.handleEvent),this.el.setAttribute("class","cantap")},remove:function(){this.el.sceneEl.removeEventListener("onefingermove",this.handleEvent)},handleEvent:function(e){this.el.object3D.rotation.y+=6*e.detail.positionChange.x}}),AFRAME.registerComponent("xrextras-play-video",{schema:{video:{type:"string"},thumb:{type:"string"},canstop:{type:"bool"}},init:function(){const e=document.querySelector(this.data.video),n=this.data.thumb&&document.querySelector(this.data.thumb),r=this.el;r.setAttribute("material","src",n||e),r.setAttribute("class","cantap");let t=!1;r.addEventListener("click",()=>{t?this.data.canstop&&(r.setAttribute("material","src",n||e),e.pause(),t=!1):(r.setAttribute("material","src",e),e.play(),t=!0)})}}),AFRAME.registerComponent("xrextras-log-to-screen",{init:function(){XRExtras.DebugWebViews.enableLogToScreen()}}))};return n(),{registerXrExtrasComponents:n}}()),r)}},function(e,n,r){r(2),r(9);const t=r(11);let i=null;e.exports={AlmostThereFactory:()=>(i||(i=function(){let e,n=!1;const r=e=>{document.getElementById(e).classList.remove("hidden")},i=()=>!(n||!XR.XrDevice.isDeviceBrowserCompatible()&&((()=>{const n=document.createElement("template");n.innerHTML=t.trim();const i=n.content.firstChild;document.getElementsByTagName("body")[0].appendChild(i);const o=e||window.location.href,a=i.querySelectorAll(".desktop-home-link");for(let e=0;e<a.length;e++)a[e].textContent=o;const s=XR.XrDevice.incompatibleReasons(),l=XR.XrDevice.incompatibleReasonDetails(),d=XR.XrDevice.deviceEstimate();for(let e of s)switch(e){case XR.XrDevice.IncompatibilityReasons.UNSUPPORTED_BROWSER:if("iOS"==d.os){if("Safari"==l.inAppBrowserType)return r("error_msg_open_in_safari"),void r("apple_open_safari_hint");if("Ellipsis"==l.inAppBrowserType)return r("error_msg_open_in_safari"),void r("apple_tap_to_open_safari_hint")}case XR.XrDevice.IncompatibilityReasons.MISSING_WEB_ASSEMBLY:if("iOS"==d.os)return void r("error_msg_web_assembly_ios");if("Android"==d.os)return void r("error_msg_web_assembly_android")}if("iOS"==d.os)return void r("error_msg_apple_almost_there");if("Android"==d.os)return void r("error_msg_android_almost_there");r("error_msg_device");const c=document.createElement("script");c.type="text/javascript",c.src="https://cdn.8thwall.com/web/share/qrcode8.js",c.onload=()=>{document.getElementById("qrcode").innerHTML=qrcode8.generateQRHtml(o)},document.getElementById("almostthereContainer").appendChild(c)})(),n=!0,XR.pause(),XR.stop(),1));return{pipelineModule:()=>({name:"almostthere",onCameraStatusChange:()=>{if(!i())throw Error("Device or browser incompatible with XR.")},onException:()=>{i()}}),checkCompatibility:i,configure:({url:n})=>{void 0!==n&&(e=n)}}}()),i)}},function(e,n,r){(e.exports=r(0)(!1)).push([e.i,"@font-face {\r\n  font-family: 'Raleway-Regular';\r\n  src: url('//cdn.8thwall.com/web/fonts/raleway-regular.woff') format('woff'), /* Modern Browsers */\r\n       url('//cdn.8thwall.com/web/fonts/raleway-regular.ttf')  format('truetype') /* Safari, Android, iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Raleway-Bold';\r\n  src: url('//cdn.8thwall.com/web/fonts/raleway-bold.woff') format('woff'), /* Modern Browsers */\r\n       url('//cdn.8thwall.com/web/fonts/raleway-bold.ttf')  format('truetype') /* Safari, Android, iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Varela-Round';\r\n  src: url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.woff') format('woff'), /* Modern Browsers */\r\n       url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.ttf')  format('truetype') /* Safari, Android, iOS */\r\n}\r\n",""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=n.protocol+"//"+n.host,t=r+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:t+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,r){var t=r(10);"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(1)(t,i);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!1)).push([e.i,"* {\r\n  font-family: inherit;\r\n  box-sizing: inherit;\r\n}\r\n\r\n#almostthereContainer {\r\n  z-index: 820;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.absolute-fill {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.apple-safari-hint {\r\n  position: fixed;\r\n  bottom: 3%;\r\n  right: 8%;\r\n  height: 72px;\r\n}\r\n\r\n.desktop-home-link {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  background-color:rgba(173, 80, 255, 0.2);\r\n  -webkit-user-select: all;  /* Chrome 49+ */\r\n  -moz-user-select: all;     /* Firefox 43+ */\r\n  -ms-user-select: all;      /* No support yet */\r\n  user-select: all;\r\n  pointer-events: auto;\r\n}\r\n\r\n.error-text-outer-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.error-margin-top-5 {\r\n  margin-top: 5vh;\r\n}\r\n\r\n.error-margin-top-20 {\r\n  margin-top: 20vh;\r\n}\r\n\r\n.error-text-container {\r\n  flex: 0 0 auto;\r\n  text-align: center;\r\n  width: 90%;\r\n}\r\n\r\n.error-text-header {\r\n  font-family: 'Varela-Round', sans-serif;\r\n  font-size: 18pt;\r\n  color: #323232;\r\n  letter-spacing: .37;\r\n  line-height: 23pt;\r\n}\r\n\r\n.error-text-detail {\r\n  font-family: 'Varela-Round', sans-serif;\r\n  font-size: 14pt;\r\n  color: #323232;\r\n  letter-spacing: .37;\r\n  line-height: 23pt;\r\n}\r\n\r\n.error-text-hint {\r\n  font-family: 'Raleway-Regular', sans-serif;\r\n  font-size: 14pt;\r\n  color: #A8A8BA;\r\n  letter-spacing: .37;\r\n}\r\n",""])},function(e,n){e.exports='<div id="almostthereContainer" class="absolute-fill">\r\n  \x3c!--Not on mobile --\x3e\r\n  <div id="error_msg_device" class="hidden">\r\n    <div class="error-text-outer-container">\r\n      <div class="error-text-container error-margin-top-20">\r\n        <div id="qrcode"></div>\r\n        <br/>\r\n        <div class="error-text-header">\r\n          <span style="font-size:24pt;line-height:20pt;">\r\n            Hey! Looks like you\'re on a desktop.\r\n          </span>\r\n        </div>\r\n        <div class="error-text-hint">\r\n          <span style="font-size:15pt;line-height:50pt;letter-spacing:-.21;color:#323232">\r\n            For the augmented reality experience, scan this code\r\n          </span>\r\n        </div>\r\n        <div class="error-text-hint">\r\n          <span style="font-size:15pt;line-height:20pt;letter-spacing:-.21;color:#323232">\r\n            or visit <span class="desktop-home-link"></span>\r\n            on a smartphone or tablet.\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \x3c!--iOS webview, reachable from button press --\x3e\r\n  <div id="error_msg_open_in_safari" class="hidden">\r\n    <div class="error-text-outer-container">\r\n      <div class="error-text-container error-margin-top-5">\r\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/safari-icon.png"></p>\r\n        <div class="error-text-header">You\'re almost there!</div>\r\n        <div class="error-text-detail">\r\n          To view this experience on your iPhone, please open in Safari.\r\n        </div>\r\n        <br/>\r\n        <img id="apple_open_safari_hint"\r\n          src="//cdn.8thwall.com/web/img/almostthere/v1/open-in-safari.png"\r\n          class="apple-safari-hint hidden"/>\r\n        <img id="apple_tap_to_open_safari_hint"\r\n          src="//cdn.8thwall.com/web/img/almostthere/v1/tap-to-open-in-safari.png"\r\n          class="apple-safari-hint hidden"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \x3c!--iOS webview, requires copy/paste of link --\x3e\r\n  <div id="error_msg_apple_almost_there" class="hidden">\r\n    <div class="error-text-outer-container">\r\n      <div class="error-text-container error-margin-top-5">\r\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/safari-icon.png"></p>\r\n        <div class="error-text-header">You\'re almost there!</div>\r\n        <div class="error-text-detail">\r\n          To view this experience on your iPhone, please open in Safari.\r\n        </div>\r\n        <br/>\r\n        <p><span class="desktop-home-link"></span></p>\r\n        <div id="apple_copy_hint" class="error-text-hint">\r\n          Open your Safari browser and paste.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \x3c!--Missing Web Assembly, or iOS 11.2 (which has a WebAssembly regression)--\x3e\r\n  <div id="error_msg_web_assembly_ios" class="hidden">\r\n    <div class="error-text-outer-container">\r\n      <div class="error-text-container error-margin-top-5">\r\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/safari-icon.png"></p>\r\n        <div class="error-text-header">You\'re almost there!</div>\r\n        <div class="error-text-detail">\r\n          To view this experience on your iPhone, please update to a newer version of iOS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id="error_msg_web_assembly_android" class="hidden">\r\n    <div class="error-text-outer-container">\r\n      <div class="error-text-container error-margin-top-5">\r\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\r\n        <div class="error-text-header">You\'re almost there!</div>\r\n        <div class="error-text-detail">\r\n          Browser doesn\'t support WebAssembly. Please update your browser.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \x3c!--Android unsupported browser --\x3e\r\n  <div id="error_msg_android_almost_there" class="hidden">\r\n    <div class="error-text-outer-container">\r\n      <div class="error-text-container error-margin-top-5">\r\n        <p><img height="100px" src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\r\n        <div class="error-text-header">You\'re almost there!</div>\r\n        <div class="error-text-detail">\r\n          To view this experience on your Android device, please open in Google Chrome or your\r\n          native browser.\r\n        </div>\r\n        <br/>\r\n        <p><span class="desktop-home-link"></span></p>\r\n        <div id="android_copy_hint" class="error-text-hint">Open your browser and paste.</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},function(e,n){let r=null;e.exports={DebugWebViewsFactory:()=>(r||(r=function(){let e="";const n=window.console.log;return{enableLogToScreen:()=>{const r=r=>{n(r),e=e+"* "+r+"<br>";let t=document.getElementById("logdiv");if(!t){const e=document.getElementsByTagName("body")[0];if(!e)return;t=document.createElement("div"),e.appendChild(t),t.style.zIndex=850,t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.backgroundColor="#FFFFFF",t.id="logdiv"}t.innerHTML="<pre>"+e+"</pre>"};window.console.log=r,window.console.error=e=>{r(`<font color=red>${e}</font>`)},window.console.warn=e=>{r(`<font color=orange>${e}</font>`)}}}}()),r)}},function(e,n){let r=null;e.exports={FullWindowCanvasFactory:()=>(null==r&&(r=function(){let e=null;const n=({orientation:r})=>{const t=window.innerWidth,i=window.innerHeight;(0==r||180==r)&&t>i||(90==r||-90==r)&&i>t?window.requestAnimationFrame(()=>n({orientation:r})):(e.width=t,e.height=i)},r=({canvas:r,orientation:t})=>{e=r;const i=document.getElementsByTagName("body")[0];i.style.margin="0px",i.style.width="100%",i.style.height="100%",i.appendChild(e),n({orientation:t})},t=({orientation:e})=>{n({orientation:e})};return{pipelineModule:()=>({name:"fullwindowcanvas",onStart:r,onDeviceOrientationChange:t})}}()),r)}},function(e,n,r){r(2),r(15);const t=r(17);let i=null;e.exports={LoadingFactory:()=>(i||(i=function(){let e,n,r,i,o,a,s,l=null,d=()=>!0,c=0,m=!1,u=!1;const p=navigator.userAgent;let h=!1;const f=()=>{h=!0,window.removeEventListener("devicemotion",f)};window.addEventListener("devicemotion",f);const g=e=>{(e.data.deviceOrientation8w||e.data.deviceMotion8w)&&(h=!0,window.removeEventListener("message",g))};window.addEventListener("message",g);const v=(n=!0)=>{e.classList.add("hidden"),n&&l.parentNode&&l.parentNode.removeChild(l)},w=(r=!0)=>{n.classList.add("fade-out"),setTimeout(()=>{e.classList.add("fade-out"),e.style.pointerEvents="none",setTimeout(()=>v(r),400)},400)},b=()=>{r.classList.add("fade-out"),e.classList.remove("hidden")},x=()=>{if(d()&&!m)return u&&(document.cookie="previouslyGotCameraPermission=true;max-age=31536000"),void w();requestAnimationFrame(()=>{x()})},y=p.includes("Linux");u=y&&!document.cookie.includes("previouslyGotCameraPermission=true");const E=y&&!u,R=d=>{if(l)return;const c=document.createElement("template");c.innerHTML=t.trim();const u=c.content.firstChild;document.getElementsByTagName("body")[0].appendChild(u),(t=>{e=(l=t).querySelector("#loadBackground"),n=l.querySelector("#loadImageContainer"),r=document.getElementById("requestingCameraPermissions"),i=document.getElementById("cameraPermissionsErrorAndroid"),o=document.getElementById("cameraPermissionsErrorApple"),a=document.getElementById("cameraPermissionsErrorSamsung"),s=document.getElementById("deviceMotionErrorApple")})(u),m=!0,d&&d.onxrloaded&&(window.XR?d.onxrloaded():window.addEventListener("xrloaded",d.onxrloaded))};return{pipelineModule:()=>({name:"loading",onStart:()=>{!0!==h&&(()=>{if(window.removeEventListener("devicemotion",f),window.removeEventListener("message",g),"iOS"===XR.XrDevice.deviceEstimate().os){if(XR.XrPermissions){const e=XR.XrPermissions.permissions(),n=XR.requiredPermissions();if(!n.has(e.DEVICE_MOTION)&&!n.has(e.DEVICE_ORIENTATION))return}s.classList.remove("hidden"),w(!1),XR.pause(),XR.stop()}})()},onUpdate:()=>{m&&(c<5?++c:(m=!1,x()))},onCameraStatusChange:({status:e})=>{XR.XrDevice.isDeviceBrowserCompatible()&&("requesting"==e?(R(),E||(v(!1),r.classList.remove("hidden"))):"hasStream"==e?E||b():"hasVideo"==e||"failed"==e&&(()=>{if(r.classList.add("hidden"),p.includes("Linux")){let e;const n=l.querySelectorAll(".domain-view");for(let e=0;e<n.length;e++)n[e].textContent=window.location.hostname;e=navigator.userAgent.includes("SamsungBrowser")?l.querySelectorAll(".samsung-instruction"):l.querySelectorAll(".chrome-instruction"),i.classList.remove("hidden");for(let n=0;n<e.length;n++)e[n].classList.remove("hidden")}else o.classList.remove("hidden");w(!1),XR.pause(),XR.stop()})())},onException:()=>{l&&(b(),v())}}),showLoading:R,setAppLoadedProvider:e=>{d=e}}}()),i)}},function(e,n,r){var t=r(16);"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(1)(t,i);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!1)).push([e.i,"#loadingContainer * {\r\n  font-family: inherit;\r\n  box-sizing: inherit;\r\n}\r\n\r\n#loadingContainer {\r\n  z-index: 800;\r\n  font-family: 'Varela-Round', sans-serif;\r\n}\r\n\r\n.absolute-fill {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n#loadBackground {\r\n  z-index: 10;\r\n  background-color: white;\r\n  pointer-events: auto;\r\n}\r\n\r\n#requestingCameraPermissions {\r\n  z-index: 11;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  text-align: center;\r\n  color: #0C2443;\r\n  font-size: 3.7vh;\r\n  /* background-color: #0D673A; */\r\n  padding: 3vh 0;\r\n}\r\n\r\n#requestingCameraIcon {\r\n  display: block;\r\n  margin: 0 auto;\r\n  margin-bottom: 5vh;\r\n  height: 7vh;\r\n}\r\n\r\n#loadImage {\r\n  position: absolute;\r\n  margin-top: -2.5em;\r\n  margin-left: -2.5em;\r\n  top: 50%;\r\n  left: 50%;\r\n  height: 5em;\r\n  width: 5em;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n#cameraPermissionsErrorApple {\r\n  padding: 20vh 5vw;\r\n  font-size: 6.5vmin;\r\n  text-align: center;\r\n  background-color: white;\r\n}\r\n\r\n#cameraPermissionsErrorAppleArrow {\r\n  position: absolute;\r\n  right: 5vmin;\r\n  top: 15vmin;\r\n  width: 20vmin;\r\n  transform: rotate(130deg);\r\n}\r\n\r\n#cameraPermissionsErrorAppleReloadCamera {\r\n  display: block;\r\n  margin: 0 auto;\r\n  margin-top: 10vh;\r\n  max-width: 30vw;\r\n}\r\n\r\n#cameraPermissionsErrorAndroid {\r\n  padding: 2vh 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  pointer-events: auto;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  background-color: white;\r\n}\r\n\r\n#deviceMotionErrorApple {\r\n  padding: 3vh 2vh;\r\n  color: #2D2E43;\r\n  display: flex;\r\n  flex-direction: column;\r\n  pointer-events: auto;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  background-color: white;\r\n}\r\n\r\n#cameraPermissionsCameraIcon{\r\n  overflow: hidden;\r\n  flex: 0 0 auto;\r\n  margin-bottom: 2vh;\r\n}\r\n\r\n#cameraPermissionsCameraIcon img {\r\n  display: block;\r\n  margin: 0 auto;\r\n  height: 5vh;\r\n}\r\n\r\n.loading-error-header {\r\n  font-size: 3.5vh;\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.loading-error-footer {\r\n  font-size: 3vh;\r\n  line-height: 5.5vh;\r\n  flex: 0 0 auto;\r\n  text-align: center;\r\n  width: 80vmin\r\n}\r\n\r\n.loading-error-footer img {\r\n  display: block;\r\n  height: 5vh;\r\n  margin: 0 auto;\r\n  margin-bottom: 2vh;\r\n}\r\n\r\n.loading-error-instructions {\r\n  font-family: 'Raleway-Regular', sans-serif;\r\n  color: #2D2E43;\r\n  font-size: 2.5vh;\r\n  list-style: none;\r\n  margin-left: 1em;\r\n  counter-reset: line;\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.loading-error-instructions > li {\r\n  position: relative;\r\n  margin-bottom: 5vh;\r\n}\r\n\r\n.loading-error-instructions > li > img {\r\n  max-height: 3vh;\r\n  vertical-align: middle;\r\n  margin: 0 .5vh;\r\n}\r\n\r\n.loading-error-instructions > li:before {\r\n  font-family: 'Varela-Round', sans-serif;\r\n  position: absolute;\r\n  width: 6vh;\r\n  height: 6vh;\r\n  border-radius: 3vh;\r\n  color: #fff;\r\n  background-color: rgba(218, 209, 228, 128);\r\n  text-align:center;\r\n  left: -8vh;\r\n  top: -1vh;\r\n  font-size: 2.5vh;\r\n  line-height: 6.5vh;\r\n  counter-increment: line;\r\n  content: counter(line);\r\n}\r\n\r\n.highlight {\r\n  color: #7611B7;\r\n  font-family: 'Raleway-Bold', sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n.camera-instruction-block {\r\n  display: inline-block;\r\n  background-color: #EBEBEB;\r\n  padding: 1vh;\r\n}\r\n\r\n.camera-instruction-button {\r\n  display: inline-block;\r\n  background-color: #EBEBEB;\r\n  padding: 1vh;\r\n  background-color: #359AFF;\r\n  color: white;\r\n  font-size: 2vh;\r\n  box-shadow: 0 .125vh .25vh rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.rotate-center {animation: rotate-center 1.1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite both;}\r\n@keyframes rotate-center {\r\n  0% {transform: rotate(0);}\r\n  100% {transform: rotate(360deg);}\r\n}\r\n\r\n.fade-out { animation: fade-out 0.3s linear forwards; }\r\n@keyframes fade-out {\r\n  0% {opacity: 1;}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.loader {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.loader__box {\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 100%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.loader__img {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  min-width: 250px;\r\n  min-height: 250px;\r\n}\r\n\r\n.loader__img img {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n}",""])},function(e,n,r){e.exports='<div id="loadingContainer" class="absolute-fill">\r\n  \x3c!--Loading screen--\x3e\r\n  <div id="loadBackground" class="absolute-fill">\r\n    <div id="loadImageContainer" class="absolute-fill">\r\n      <div class="loader">\r\n        <div id="loadImageContainer" class="loader__box">\r\n          <div class="loader__img">\r\n            <img src="'+r(18)+'" alt="bottle"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \x3c!--Camera Permissions--\x3e\r\n  <div id="requestingCameraPermissions" class="hidden" />\r\n    <img id="requestingCameraIcon" src="'+r(19)+'" alt="camera" />\r\n    Tap "Allow" so we can<br>augment your reality.\r\n  </div>\r\n\r\n  \x3c!--Permission error, iOS--\x3e\r\n  <div id="cameraPermissionsErrorApple" class="absolute-fill hidden" />\r\n    Refresh the page to enable<br>your camera for AR\r\n    <img id="cameraPermissionsErrorAppleArrow" src="//cdn.8thwall.com/web/img/loading/v1/arrow.png" />\r\n    <img id="cameraPermissionsErrorAppleReloadCamera" src="//cdn.8thwall.com/web/img/loading/v1/reload-camera.png" />\r\n  </div>\r\n\r\n  \x3c!--Permission error, Android--\x3e\r\n  <div id="cameraPermissionsErrorAndroid" class="absolute-fill hidden">\r\n    <div id="cameraPermissionsCameraIcon">\r\n      <img src="//cdn.8thwall.com/web/img/loading/v1/camera-purple.png" />\r\n    </div>\r\n    <div class="loading-error-header">Let\'s enable your camera</div>\r\n    <ol class="loading-error-instructions">\r\n      <li>Tap the <img src="//cdn.8thwall.com/web/img/loading/v1/ellipsis.png"> in the top right</li>\r\n      <li>Tap <span class="highlight">Settings</li>\r\n      <li class="chrome-instruction hidden">\r\n        <span class="highlight">Site settings</span>\r\n      </li>\r\n      <li class="chrome-instruction hidden">\r\n        <span class="highlight">Camera</span>\r\n      </li>\r\n      <li class="chrome-instruction hidden">\r\n        <span class="highlight">Blocked</span>\r\n        <br>\r\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\r\n      </li>\r\n      <li class="chrome-instruction hidden">\r\n        <span class="camera-instruction-button">CLEAR & RESET</span>\r\n      </li>\r\n      <li class="samsung-instruction hidden">\r\n        <span class="highlight">Advanced</span>\r\n      </li>\r\n      <li class="samsung-instruction hidden">\r\n        <span class="highlight">Manage website data</span>\r\n      </li>\r\n      <li class="samsung-instruction hidden">\r\n        Press and hold<br>\r\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\r\n      </li>\r\n      <li class="samsung-instruction hidden">\r\n        <span class="highlight" style="color: #1500ba">DELETE</span>\r\n      </li>\r\n    </ol>\r\n    <div class="loading-error-footer">\r\n      <img src="//cdn.8thwall.com/web/img/loading/v1/reload.png" />\r\n      Then, reload the page to experience some AR magic!\r\n    </div>\r\n  </div>\r\n\r\n    \x3c!--iOS devicemotion sensor is disabled --\x3e\r\n  <div id="deviceMotionErrorApple" class="absolute-fill hidden">\r\n    <div class="loading-error-header">Let\'s enable your motion sensors</div>\r\n    <ol class="loading-error-instructions">\r\n      <li>Open <img src="https://cdn.8thwall.com/web/img/loading/v1/settings-icon-ios.png" style="max-height: 4vh"><b>Settings</b></li>\r\n      <li>Select <img src="https://cdn.8thwall.com/web/img/loading/v1/safari-icon.png" style="max-height: 4vh"><b>Safari</b></li>\r\n      <li>Enable <span class="highlight">Motion&nbsp;&amp;&nbsp;Orientation Access</span></li>\r\n      <li>Reload the page <img src="//cdn.8thwall.com/web/img/loading/v1/reload.png"></li>\r\n    </ol>\r\n    \x3c!-- Empty footer to take up space --\x3e\r\n    <div class="loading-error-footer"></div>\r\n  </div>\r\n</div>\r\n'},function(e,n,r){e.exports=r.p+"a6cfcefc41296fec45ab877f8fb4869c.gif"},function(e,n,r){e.exports=r.p+"f92d8ee6a7363eca9e2588d7a38abc9b.svg"},function(e,n,r){r(2),r(21);const t=r(23);let i=null;const o=()=>{let e=!1;return{pipelineModule:()=>({name:"error",onStart:()=>{e=!0},onException:n=>{if(!e)return;if(document.getElementById("error_msg_unknown"))return;console.log("[RuntimeError] XR caught an error; stopping:"),console.log(n);const r=document.createElement("template");r.innerHTML=t.trim(),document.getElementsByTagName("body")[0].appendChild(r.content.firstChild),document.getElementById("error_msg_unknown").classList.remove("hidden"),XR.pause(),XR.stop()}})}};e.exports={RuntimeErrorFactory:()=>(i||(i=o()),i)}},function(e,n,r){var t=r(22);"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(1)(t,i);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!1)).push([e.i,"* {\r\n  font-family: inherit;\r\n  box-sizing: inherit;\r\n}\r\n\r\n#runtimeErrorContainer {\r\n  z-index: 800;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.absolute-fill {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.error-text-outer-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.error-margin-top-5 {\r\n  margin-top: 5vh;\r\n}\r\n\r\n.error-text-container {\r\n  flex: 0 0 auto;\r\n  text-align: center;\r\n  width: 90%;\r\n}\r\n\r\n.error-text-header {\r\n  font-family: 'Varela-Round', sans-serif;\r\n  font-size: 18pt;\r\n  color: #323232;\r\n  letter-spacing: .37;\r\n  line-height: 23pt;\r\n}\r\n\r\n.error-text-hint {\r\n  font-family: 'Raleway-Regular', sans-serif;\r\n  font-size: 14pt;\r\n  color: #A8A8BA;\r\n  letter-spacing: .37;\r\n}\r\n\r\n.floater {\r\n  -webkit-filter: drop-shadow(5px 5px 5px #222);\r\n}\r\n",""])},function(e,n){e.exports='<div id="runtimeErrorContainer" class="absolute-fill">\r\n  <div id="error_msg_unknown" class="hidden">\r\n    <div class="error-text-outer-container">\r\n      <div class="error-text-container error-margin-top-5">\r\n        <p><img height="75px" src="//cdn.8thwall.com/web/img/runtimeerror/v1/computer-voxel.png" class="floater"></p>\r\n        <div class="error-text-header">Oops, something went wrong!</div>\r\n        <div class="error-text-hint">\r\n          <p id="error_unknown_detail" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'}]);