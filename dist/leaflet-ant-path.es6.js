!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("leaflet")):"function"==typeof define&&define.amd?define(["leaflet"],e):"object"==typeof exports?exports["leaflet-ant-path"]=e(require("leaflet")):t["leaflet-ant-path"]=e(t.L)}(this,function(t){return function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=22)}({11:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),u=function t(e,n,a){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,a)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(a)},l=n(12),f={main:Symbol("main"),pulse:Symbol("pulse")},p=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o._map=null,o._path=null,o._animatedPathId=null,o._animatedPathClass="leaflet-ant-path",o._defaultOptions={paused:!1,delay:400,dashArray:[10,20],weight:5,opacity:.5,color:"#0000FF",pulseColor:"#FFFFFF"},o[f.main]=null,o[f.pulse]=null,l.Util.setOptions(o,i({},o._defaultOptions,n)),o._path=t,o._animatedPathId="ant-path-"+(new Date).getTime(),o._mount(),o}return o(e,t),s(e,[{key:"map",value:function(t){var e=this.constructor[Symbol.species];return new e(this._path.map(t),i({},this.options))}},{key:Symbol.iterator,value:regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(this._path,"t0",1);case 1:case"end":return t.stop()}},t,this)})},{key:"onAdd",value:function(t){return this._map=t,this._map.on("zoomend",this._calculateAnimationSpeed,this),this._mount(),this._calculateAnimationSpeed(),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"onAdd",this).call(this,t)}},{key:"onRemove",value:function(t){return this._map.off("zoomend",this._calculateAnimationSpeed,this),this._map=null,u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"onRemove",this).call(this,t)}},{key:"pause",value:function(){var t=this.options.paused;if(!t){var e=document.getElementsByClassName(this._animatedPathId);this.options.paused=!0;var n=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var s=o.value;s.removeAttribute("style"),s.setAttribute("data-animated","true")}}catch(t){a=!0,r=t}finally{try{!n&&i.return&&i.return()}finally{if(a)throw r}}return!0}return!1}},{key:"resume",value:function(){var t=this.options;return!!t.paused&&(t.paused=!1,this._calculateAnimationSpeed(),!0)}},{key:"_processOptions",value:function(){var t=this.options,e=this._animatedPathClass,n=this._animatedPathId,a=i({},t),r=i({},t);return r.color=r.pulseColor||t.pulseColor,r.className=e+" "+n,delete a.dashArray,Array.isArray(r.dashArray)&&(r.dashArray=String(r.dashArray)),{pathOpts:a,pulseOpts:r}}},{key:"_mount",value:function(){var t=this._processOptions(),e=t.pathOpts,n=t.pulseOpts;this.addLayer(this[f.main]=new l.Polyline(this._path,e)),this.addLayer(this[f.pulse]=new l.Polyline(this._path,n))}},{key:"_calculateAnimationSpeed",value:function(){var t=this.options,e=this._map,n=this._animatedPathId;if(!t.paused&&e){var a=e.getZoom(),r=document.getElementsByClassName(n),o=1+t.delay/3/a+"s",i=["-webkit-","-moz-","-ms-","-o-",""].map(function(t){return t+"animation-duration: "+o}).join(";");Array.from(r,function(t){t.style.cssText=i,t.setAttribute("data-animated","true")})}}},{key:"bringToFront",value:function(){return this[f.main].bringToFront(),this[f.pulse].bringToFront(),this}},{key:"bringToBack",value:function(){return this[f.pulse].bringToBack(),this[f.main].bringToBack(),this}},{key:"setStyle",value:function(t){var e=t.paused,n=t.delay;e?this.pause():this.resume(),n!==this.options.delay&&(this.options.delay=n,this._calculateAnimationSpeed()),this.options=i({},this.options,t);var a=this._processOptions(),r=a.pathOpts,o=a.pulseOpts;return this[f.main].setStyle(r),this[f.pulse].setStyle(o),this}},{key:"redraw",value:function(){return this[f.main].redraw(),this[f.pulse].redraw(),this}},{key:"addLatLng",value:function(){var t,e;return(t=this[f.main]).addLatLng.apply(t,arguments),(e=this[f.pulse]).addLatLng.apply(e,arguments),this}},{key:"setLatLngs",value:function(){var t,e;return(t=this[f.main]).setLatLngs.apply(t,arguments),(e=this[f.pulse]).setLatLngs.apply(e,arguments),this}},{key:"getLatLngs",value:function(){return this[f.main].getLatLngs()}},{key:"spliceLatLngs",value:function(){var t,e,n=(t=this[f.main]).spliceLatLngs.apply(t,arguments);return(e=this[f.pulse]).spliceLatLngs.apply(e,arguments),n}},{key:"getBounds",value:function(){return this[f.main].getBounds()}},{key:"toGeoJSON",value:function(){return this[f.main].toGeoJSON()}},{key:Symbol.toStringTag,get:function(){return"L.Polyline.AntPath"}}],[{key:Symbol.species,get:function(){return this}}]),e}(l.FeatureGroup);e.default=p,t.exports=e.default},12:function(e,n){e.exports=t},20:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=a(r);e.default=function(t,e){return Reflect.construct(o.default,[t,e])},t.exports=e.default},21:function(t,e,n){var a=n(33);"string"==typeof a&&(a=[[t.i,a,""]]);n(35)(a,{});a.locals&&(t.exports=a.locals)},22:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.antPath=e.AntPath=void 0;var r=n(12),o=n(11),i=a(o),s=n(20),u=a(s);n(21),r.Polyline.AntPath=i.default,r.polyline.antPath=u.default,t.exports={AntPath:i.default,antPath:u.default},e.AntPath=i.default,e.antPath=u.default},33:function(t,e,n){e=t.exports=n(34)(),e.push([t.i,"@-webkit-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\n@-moz-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\n@-ms-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\n@-o-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\n@keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\npath.leaflet-ant-path {\n  fill: none;\n  -webkit-animation: linear infinite leaflet-ant-path-animation;\n  -moz-animation: linear infinite leaflet-ant-path-animation;\n  -ms-animation: linear infinite leaflet-ant-path-animation;\n  -o-animation: linear infinite leaflet-ant-path-animation;\n  animation: linear infinite leaflet-ant-path-animation; }\n",""])},34:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},35:function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var a=t[n],r=c[a.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](a.parts[o]);for(;o<a.parts.length;o++)r.parts.push(u(a.parts[o],e))}else{for(var i=[],o=0;o<a.parts.length;o++)i.push(u(a.parts[o],e));c[a.id]={id:a.id,refs:1,parts:i}}}}function a(t){for(var e=[],n={},a=0;a<t.length;a++){var r=t[a],o=r[0],i=r[1],s=r[2],u=r[3],l={css:i,media:s,sourceMap:u};n[o]?n[o].parts.push(l):e.push(n[o]={id:o,parts:[l]})}return e}function r(t,e){var n=m(),a=b[b.length-1];if("top"===t.insertAt)a?a.nextSibling?n.insertBefore(e,a.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function i(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function s(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function u(t,e){var n,a,r;if(e.singleton){var u=v++;n=y||(y=i(e)),a=l.bind(null,n,u,!1),r=l.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(e),a=p.bind(null,n),r=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(e),a=f.bind(null,n),r=function(){o(n)});return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else r()}}function l(t,e,n,a){var r=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function f(t,e){var n=e.css,a=e.media;if(a&&t.setAttribute("media",a),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e){var n=e.css,a=e.sourceMap;a&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var c={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,b=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=a(t);return n(r,e),function(t){for(var o=[],i=0;i<r.length;i++){var s=r[i],u=c[s.id];u.refs--,o.push(u)}if(t){var l=a(t);n(l,e)}for(var i=0;i<o.length;i++){var u=o[i];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete c[u.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}})});
//# sourceMappingURL=leaflet-ant-path.es6.js.map