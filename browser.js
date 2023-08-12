// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,i=r.__lookupGetter__,l=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,f){var a,c,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(i.call(t,e)||l.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=f.value,t.__proto__=a):t[e]=f.value),p="get"in f,y="set"in f,c&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,f.get),y&&u&&u.call(t,e,f.set),t};function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(t){var e,r,n,o,u;if(null==t)return b.call(t);r=t[_],u=_,e=null!=(o=t)&&s.call(o,u);try{t[_]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[_]=r:delete t[_],n}:function(t){return b.call(t)},g=String.prototype.valueOf,v=y();function m(t){return"object"==typeof t&&(t instanceof String||(v?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function S(t){return c(t)||m(t)}function j(t,e,r){return t.replace(e,r)}a(S,"isPrimitive",c),a(S,"isObject",m);var h=void 0!==String.prototype.trim,w=String.prototype.trim,O=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,T=h&&""===w.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===w.call("᠎")?function(t){return w.call(t)}:function(t){return j(t,O,"$1")},P=/\s+/g,E=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,$=/([a-z0-9])([A-Z])/g;return function(t){if(!c(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("1gn3F,Ex",t));return function(t){return t=j(t,E," "),t=j(t,$,"$1 $2"),function(t){return t.toLowerCase()}(t=j(t=T(t),P,"."))}(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dotcase=e();
//# sourceMappingURL=browser.js.map
