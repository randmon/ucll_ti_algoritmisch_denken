/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=104)}([function(e,t,n){"use strict";e.exports=n(105)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.descriptionKey="__predicateDescription",t.setDescription=function(e,n){return Object.defineProperty(e,t.descriptionKey,{value:n,enumerable:!1}),e},t.getDescription=function(e){var n=e[t.descriptionKey];return"string"==typeof n?n:'satisfies custom predicate "'+(e.name||"anonymous")+'"'}},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"ServerStyleSheet",(function(){return ze})),n.d(t,"StyleSheetConsumer",(function(){return J})),n.d(t,"StyleSheetContext",(function(){return Y})),n.d(t,"StyleSheetManager",(function(){return ie})),n.d(t,"ThemeConsumer",(function(){return je})),n.d(t,"ThemeContext",(function(){return Pe})),n.d(t,"ThemeProvider",(function(){return Ae})),n.d(t,"__PRIVATE__",(function(){return Ve})),n.d(t,"createGlobalStyle",(function(){return Ie})),n.d(t,"css",(function(){return pe})),n.d(t,"isStyledComponent",(function(){return b})),n.d(t,"keyframes",(function(){return Fe})),n.d(t,"useTheme",(function(){return Be})),n.d(t,"version",(function(){return x})),n.d(t,"withTheme",(function(){return We}));var r=n(38),i=n(0),o=n.n(i),a=n(101),s=n.n(a),u=n(102),l=n(103),c=n(56),f=n(55),d=n.n(f);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},_=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!Object(r.typeOf)(e)},m=Object.freeze([]),g=Object.freeze({});function v(e){return"function"==typeof e}function y(e){return e.displayName||e.name||"Component"}function b(e){return e&&"string"==typeof e.styledComponentId}var w=void 0!==e&&(e.env.REACT_APP_SC_ATTR||e.env.SC_ATTR)||"data-styled",x="5.2.0",k="undefined"!=typeof window&&"HTMLElement"in window,C="boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY||void 0!==e&&(e.env.REACT_APP_SC_DISABLE_SPEEDY||e.env.SC_DISABLE_SPEEDY)||!1,S={},E=function(){return n.nc};function T(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var O=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(w))return r}}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(w,"active"),r.setAttribute("data-styled-version","5.2.0");var a=E();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},M=function(){function e(e){var t=this.element=O(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}T(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),P=function(){function e(e){var t=this.element=O(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),j=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),A=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&T(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=0,u=t.length;s<u;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),N=new Map,D=new Map,L=1,R=function(e){if(N.has(e))return N.get(e);var t=L++;return N.set(e,t),D.set(t,e),t},I=function(e){return D.get(e)},F=function(e,t){t>=L&&(L=t+1),N.set(e,t),D.set(t,e)},z="style["+w+'][data-styled-version="5.2.0"]',W=new RegExp("^"+w+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),B=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},V=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(W);if(s){var u=0|parseInt(s[1],10),l=s[2];0!==u&&(F(l,u),B(e,l,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},U=k,H={isServer:!k,useCSSOMInjection:!C},$=function(){function e(e,t,n){void 0===e&&(e=H),void 0===t&&(t={}),this.options=p({},H,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&k&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(z),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(w)&&(V(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return R(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(p({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new j(i):r?new M(i):new P(i),new A(e)));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(R(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(R(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(R(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var o=I(i);if(void 0!==o){var a=e.names.get(o),s=t.getGroup(i);if(void 0!==a&&0!==s.length){var u=w+".g"+i+'[id="'+o+'"]',l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+=e+",")})),r+=""+s+u+'{content:"'+l+'"}/*!sc*/\n'}}}return r}(this)},e}(),q=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},K=function(e){return q(5381,e)},G=/^\s*\/\/.*$/gm,X=[":","[",".","#"];function Q(e){var t,n,r,i,o=void 0===e?g:e,a=o.options,s=void 0===a?g:a,l=o.plugins,c=void 0===l?m:l,f=new u.a(s),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,o,a,s,u,l,c,f){switch(n){case 1:if(0===c&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===l)return r+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+r),"";default:return r+(0===f?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),h=function(e,r,o){return 0===r&&X.includes(o[n.length])||o.match(i)?e:"."+t};function _(e,o,a,s){void 0===s&&(s="&");var u=e.replace(G,""),l=o&&a?a+" "+o+" { "+u+" }":u;return t=s,n=o,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(a||!o?"":o,l)}return f.use([].concat(c,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,h))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),_.hash=c.length?c.reduce((function(e,t){return t.name||T(15),q(e,t.name)}),5381).toString():"",_}var Y=o.a.createContext(),J=Y.Consumer,Z=o.a.createContext(),ee=(Z.Consumer,new $),te=Q();function ne(){return Object(i.useContext)(Y)||ee}function re(){return Object(i.useContext)(Z)||te}function ie(e){var t=Object(i.useState)(e.stylisPlugins),n=t[0],r=t[1],a=ne(),u=Object(i.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(i.useMemo)((function(){return Q({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(i.useEffect)((function(){s()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]),o.a.createElement(Y.Provider,{value:u},o.a.createElement(Z.Provider,{value:l},e.children))}var oe=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=te);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return T(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=te),this.name+e.hash},e}(),ae=/([A-Z])/,se=new RegExp(ae,"g"),ue=/^ms-/,le=function(e){return"-"+e.toLowerCase()};function ce(e){return ae.test(e)?e.replace(se,le).replace(ue,"-ms-"):e}var fe=function(e){return null==e||!1===e||""===e};function de(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)""!==(i=de(e[a],t,n,r))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}return fe(e)?"":b(e)?"."+e.styledComponentId:v(e)?"function"!=typeof(u=e)||u.prototype&&u.prototype.isReactComponent||!t?e:de(e(t),t,n,r):e instanceof oe?n?(e.inject(n,r),e.getName(r)):e:_(e)?function e(t,n){var r,i,o=[];for(var a in t)t.hasOwnProperty(a)&&!fe(t[a])&&(_(t[a])?o.push.apply(o,e(t[a],a)):v(t[a])?o.push(ce(a)+":",t[a],";"):o.push(ce(a)+": "+(r=a,(null==(i=t[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in l.a?String(i).trim():i+"px")+";")));return n?[n+" {"].concat(o,["}"]):o}(e):e.toString();var u}function pe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return v(e)||_(e)?de(h(m,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:de(h(e,n))}var he=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},_e=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function me(e,t,n){var r=e[n];he(t)&&he(r)?ge(r,t):e[n]=t}function ge(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(he(a))for(var s in a)_e(s)&&me(e,a[s],s)}return e}var ve=/(a)(d)/gi,ye=function(e){return String.fromCharCode(e+(e>25?39:97))};function be(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ye(t%52)+n;return(ye(t%52)+n).replace(ve,"$1-$2")}function we(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(v(n)&&!b(n))return!1}return!0}var xe=K("5.2.0"),ke=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&we(e),this.componentId=t,this.baseHash=q(xe,t),this.baseStyle=n,$.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var o=de(this.rules,e,t,n).join(""),a=be(q(this.baseHash,o.length)>>>0);if(!t.hasNameForId(r,a)){var s=n(o,"."+a,void 0,r);t.insertRules(r,a,s)}i.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,l=q(this.baseHash,n.hash),c="",f=0;f<u;f++){var d=this.rules[f];if("string"==typeof d)c+=d;else if(d){var p=de(d,e,t,n),h=Array.isArray(p)?p.join(""):p;l=q(l,h+f),c+=h}}if(c){var _=be(l>>>0);if(!t.hasNameForId(r,_)){var m=n(c,"."+_,void 0,r);t.insertRules(r,_,m)}i.push(_)}}return i.join(" ")},e}(),Ce=(new Set,function(e,t,n){return void 0===n&&(n=g),e.theme!==n.theme&&e.theme||t||n.theme}),Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ee=/(^-|-$)/g;function Te(e){return e.replace(Se,"-").replace(Ee,"")}function Oe(e){return"string"==typeof e&&!0}var Me=function(e){return be(K(e)>>>0)},Pe=o.a.createContext(),je=Pe.Consumer;function Ae(e){var t=Object(i.useContext)(Pe),n=Object(i.useMemo)((function(){return function(e,t){return e?v(e)?e(t):Array.isArray(e)||"object"!=typeof e?T(8):t?p({},t,{},e):e:T(14)}(e.theme,t)}),[e.theme,t]);return e.children?o.a.createElement(Pe.Provider,{value:n},e.children):null}var Ne={};function De(e,t,n){var r=b(e),a=!Oe(e),s=t.displayName,u=void 0===s?function(e){return Oe(e)?"styled."+e:"Styled("+y(e)+")"}(e):s,l=t.componentId,f=void 0===l?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ne[n]=(Ne[n]||0)+1;var r=n+"-"+Me("5.2.0"+n+Ne[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):l,h=t.attrs,_=void 0===h?m:h,w=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||f,x=r&&e.attrs?Array.prototype.concat(e.attrs,_).filter(Boolean):_,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=k?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var C,S=new ke(n,w,r?e.componentStyle:void 0),E=function(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,u=e.shouldForwardProp,l=e.styledComponentId,f=e.target,d=function(e,t,n){void 0===e&&(e=g);var r=p({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,o,a=e;for(t in v(a)&&(a=a(r)),a)r[t]=i[t]="className"===t?(n=i[t],o=a[t],n&&o?n+" "+o:n||o):a[t]})),[r,i]}(Ce(t,Object(i.useContext)(Pe),a)||g,t,r),h=d[0],_=d[1],m=function(e,t,n,r){var i=ne(),o=re();return e.isStatic&&!t?e.generateAndInjectStyles(g,i,o):e.generateAndInjectStyles(n,i,o)}(o,r.length>0,h),y=n,b=_.$as||t.$as||_.as||t.as||f,w=Oe(b),x=_!==t?p({},t,{},_):t,k=u||w&&c.a,C={};for(var S in x)"$"!==S[0]&&"as"!==S&&("forwardedAs"===S?C.as=x[S]:k&&!k(S,c.a)||(C[S]=x[S]));return t.style&&_.style!==t.style&&(C.style=p({},t.style,{},_.style)),C.className=Array.prototype.concat(s,l,m!==l?m:null,t.className,_.className).filter(Boolean).join(" "),C.ref=y,Object(i.createElement)(b,C)}(C,e,t)};return E.displayName=u,(C=o.a.forwardRef(E)).attrs=x,C.componentStyle=S,C.displayName=u,C.shouldForwardProp=k,C.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):m,C.styledComponentId=w,C.target=r?e.target:e,C.withComponent=function(e){var r=t.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(t,["componentId"]),o=r&&r+"-"+(Oe(e)?e:Te(y(e)));return De(e,p({},i,{attrs:x,componentId:o}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?ge({},e.defaultProps,t):t}}),C.toString=function(){return"."+C.styledComponentId},a&&d()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,self:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var Le=function(e){return function e(t,n,i){if(void 0===i&&(i=g),!Object(r.isValidElementType)(n))return T(1,String(n));var o=function(){return t(n,i,pe.apply(void 0,arguments))};return o.withConfig=function(r){return e(t,n,p({},i,{},r))},o.attrs=function(r){return e(t,n,p({},i,{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},o}(De,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Le[e]=Le(e)}));var Re=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=we(e),$.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(de(this.rules,t,n,r).join(""),""),o=this.componentId+e;n.insertRules(o,o,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&$.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ie(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=pe.apply(void 0,[e].concat(n)),s="sc-global-"+Me(JSON.stringify(a)),u=new Re(a,s);function l(e){var t=ne(),n=re(),r=Object(i.useContext)(Pe),o=Object(i.useRef)(t.allocateGSInstance(s)).current;return Object(i.useLayoutEffect)((function(){return c(o,e,t,r,n),function(){return u.removeStyles(o,t)}}),[o,e,t,r,n]),null}function c(e,t,n,r,i){if(u.isStatic)u.renderStyles(e,S,n,i);else{var o=p({},t,{theme:Ce(t,r,l.defaultProps)});u.renderStyles(e,o,n,i)}}return o.a.memo(l)}function Fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=pe.apply(void 0,[e].concat(n)).join(""),o=Me(i);return new oe(o,i)}var ze=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=E();return"<style "+[n&&'nonce="'+n+'"',w+'="true"','data-styled-version="5.2.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?T(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return T(2);var n=((t={})[w]="",t["data-styled-version"]="5.2.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=E();return r&&(n.nonce=r),[o.a.createElement("style",p({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new $({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?T(2):o.a.createElement(ie,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return T(3)},e}(),We=function(e){var t=o.a.forwardRef((function(t,n){var r=Object(i.useContext)(Pe),a=e.defaultProps,s=Ce(t,r,a);return o.a.createElement(e,p({},t,{theme:s,ref:n}))}));return d()(t,e),t.displayName="WithTheme("+y(e)+")",t},Be=function(){return Object(i.useContext)(Pe)},Ve={StyleSheet:$,masterSheet:ee};t.default=Le}.call(this,n(119))},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],u=t.base?o[0]+t.base:o[0],l=n[u]||0,c="".concat(u," ").concat(l);n[u]=l+1;var f=s(c),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:c,updater:m(d,t),references:1}),r.push(c)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,f=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,_=0;function m(e,t){var n,r,i;if(t.singleton){var o=_++;n=h||(h=l(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=l(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=u(e,t),l=0;l<n.length;l++){var c=s(n[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return n=void 0===n?1:n,e.length>n?t.apply(this,Array.prototype.slice.call(e,n)):t}},function(module,exports){!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.ts")}({"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, "__esModule", { value: true });\r\n__export(__webpack_require__(/*! ./maybe */ "./src/maybe.ts"));\r\n\n\n//# sourceURL=webpack:///./src/index.ts?')},"./src/maybe.ts":
/*!**********************!*\
  !*** ./src/maybe.ts ***!
  \**********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Maybe = /** @class */ (function () {\r\n    function Maybe() {\r\n    }\r\n    Maybe.just = function (x) {\r\n        return new Just(x);\r\n    };\r\n    Maybe.nothing = function () {\r\n        return new Nothing();\r\n    };\r\n    return Maybe;\r\n}());\r\nexports.Maybe = Maybe;\r\nfunction absorbUndefined(x) {\r\n    return x.bind(function (y) { return typeof y === 'undefined' ? Maybe.nothing() : Maybe.just(y); });\r\n}\r\nexports.absorbUndefined = absorbUndefined;\r\nfunction getProperty(obj, key) {\r\n    if (key in obj) {\r\n        var value = obj[key];\r\n        return Maybe.just(value);\r\n    }\r\n    else {\r\n        return Maybe.nothing();\r\n    }\r\n}\r\nexports.getProperty = getProperty;\r\nfunction maybePartial(obj) {\r\n    return new Proxy(obj, {\r\n        get: function (obj, property) {\r\n            if (property in obj) {\r\n                return Maybe.just(obj[property]);\r\n            }\r\n            else {\r\n                return Maybe.nothing();\r\n            }\r\n        }\r\n    });\r\n}\r\nexports.maybePartial = maybePartial;\r\nvar Just = /** @class */ (function (_super) {\r\n    __extends(Just, _super);\r\n    function Just(value) {\r\n        var _this = _super.call(this) || this;\r\n        _this.value = value;\r\n        return _this;\r\n    }\r\n    Just.prototype.bind = function (f) {\r\n        return f(this.value);\r\n    };\r\n    Just.prototype.lift = function (f) {\r\n        return Maybe.just(f(this.value));\r\n    };\r\n    Just.prototype.caseOf = function (cases) {\r\n        return cases.just(this.value);\r\n    };\r\n    Just.prototype.isJust = function () {\r\n        return true;\r\n    };\r\n    Just.prototype.useDefault = function (_) {\r\n        return this;\r\n    };\r\n    return Just;\r\n}(Maybe));\r\nexports.Just = Just;\r\nvar Nothing = /** @class */ (function (_super) {\r\n    __extends(Nothing, _super);\r\n    function Nothing() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Nothing.prototype.bind = function (_) {\r\n        return Maybe.nothing();\r\n    };\r\n    Nothing.prototype.lift = function (_) {\r\n        return Maybe.nothing();\r\n    };\r\n    Nothing.prototype.caseOf = function (cases) {\r\n        return cases.nothing();\r\n    };\r\n    Nothing.prototype.isJust = function () {\r\n        return false;\r\n    };\r\n    Nothing.prototype.useDefault = function (t) {\r\n        return Maybe.just(t);\r\n    };\r\n    return Nothing;\r\n}(Maybe));\r\nexports.Nothing = Nothing;\r\n/**\r\n * Takes an object with Maybe properties. If every property is Just,\r\n * an object with Maybes replaced by their values is returned.\r\n * If one property is Nothing, undefined is returned.\r\n * Non-maybe properties are simply copied.\r\n *\r\n * @param obj Object to unpartialize.\r\n */\r\nfunction raiseMaybe(obj) {\r\n    var result = {};\r\n    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {\r\n        var key = _a[_i];\r\n        var typedKey = key;\r\n        var propertyValue = obj[typedKey];\r\n        if (propertyValue.isJust()) {\r\n            // It's a Just: retrieve value and put it in result\r\n            result[typedKey] = propertyValue.value;\r\n        }\r\n        else {\r\n            // We found a Nothing, abort operation\r\n            return Maybe.nothing();\r\n        }\r\n    }\r\n    return Maybe.just(result);\r\n}\r\nexports.raiseMaybe = raiseMaybe;\r\n\n\n//# sourceURL=webpack:///./src/maybe.ts?")}}))},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";function r(e){return"string"==typeof e||"[object String]"===Object.prototype.toString.call(e)}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"a string"),t.default=r},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.asTable=t.asVerticalTable=t.asHorizontalTable=t.dice=t.blackAndWhiteBitmap=t.rgbBitmap=t.grayscaleBitmap=t.code=t.simple=t.jsxify=void 0;const s=a(n(0)),u=o(n(33)),l=n(11),c=n(75),f=n(61),d=n(64),p=n(13),h=n(63),_=n(42),m=n(11),g=n(6);function v(e){return s.default.createElement(d.Invalid,{message:e,value:e})}function y(e){return u.array(u.any).hasType(e)?m.all(e,e=>u.array(u.any).hasType(e))?l.allEqual(e.map(e=>e.length))?g.Maybe.nothing():g.Maybe.just("All rows should have the same length"):g.Maybe.just("All elements should be arrays"):g.Maybe.just("Should be an array")}t.jsxify=function(e){return u.string.hasType(e)?s.default.createElement(s.default.Fragment,null,e):e},t.simple=function(e){return s.default.createElement("span",null,p.convertToString(e))},t.code=function(e){return s.default.createElement(_.InlineCode,{content:e})},t.grayscaleBitmap=function(e,t){return y(e).caseOf({just:e=>v(e),nothing:()=>{if(m.all(e,e=>m.all(e,e=>function(e){return u.number.hasType(e)&&0<=e&&e<=255&&Math.floor(e)===e}(e)))){const n=c.Bitmap.fromGrayscale(e);return s.default.createElement(f.BitmapViewer,{bitmap:n,resize:t})}return v("All values should be integers between 0 and 255")}})},t.rgbBitmap=function(e,t){return y(e).caseOf({just:e=>v(e),nothing:()=>{if(m.all(e,e=>m.all(e,e=>function(e){return u.object.hasType(e)&&u.number.hasType(e.r)&&u.number.hasType(e.g)&&u.number.hasType(e.b)}(e)))){const n=c.Bitmap.fromColors(e);return s.default.createElement(f.BitmapViewer,{bitmap:n,resize:t})}return v("All values should be color objects")}})},t.blackAndWhiteBitmap=function(e,t){return y(e).caseOf({just:e=>v(e),nothing:()=>{if(m.all(e,e=>m.all(e,e=>function(e){return u.boolean.hasType(e)}(e)))){const n=c.Bitmap.fromBlackAndWhite(e);return s.default.createElement(f.BitmapViewer,{bitmap:n,resize:t})}return v("All values should be booleans")}})},t.dice=function(e){return s.default.createElement(h.DiceViewer,{dice:e})},t.asHorizontalTable=function(e,t,n){const r=e.map((e,n)=>s.default.createElement("td",{key:n},t(e)));return s.default.createElement("table",{className:n},s.default.createElement("tbody",null,s.default.createElement("tr",null,r)))},t.asVerticalTable=function(e,t,n){const r=e.map((e,n)=>s.default.createElement("tr",{key:n},s.default.createElement("td",null,t(e))));return s.default.createElement("table",{className:n},s.default.createElement("tbody",null,r))},t.asTable=function(e,t,n){const r=e.map((e,n)=>{const r=e.map((e,n)=>s.default.createElement("td",{key:n},t(e)));return s.default.createElement("tr",{key:n},r)});return s.default.createElement("table",{className:n},s.default.createElement("tbody",null,r))}},function(e,t,n){"use strict";function r(e){return e instanceof Object||"object"==typeof e&&null!==e}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"an object"),t.default=r},function(module,exports){!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.ts")}({"./node_modules/maybe/dist/index.js":
/*!******************************************!*\
  !*** ./node_modules/maybe/dist/index.js ***!
  \******************************************/
/*! no static exports found */function(module,exports){eval('(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap\r\n/******/ \t// The module cache\r\n/******/ \tvar installedModules = {};\r\n/******/\r\n/******/ \t// The require function\r\n/******/ \tfunction __webpack_require__(moduleId) {\r\n/******/\r\n/******/ \t\t// Check if module is in cache\r\n/******/ \t\tif(installedModules[moduleId]) {\r\n/******/ \t\t\treturn installedModules[moduleId].exports;\r\n/******/ \t\t}\r\n/******/ \t\t// Create a new module (and put it into the cache)\r\n/******/ \t\tvar module = installedModules[moduleId] = {\r\n/******/ \t\t\ti: moduleId,\r\n/******/ \t\t\tl: false,\r\n/******/ \t\t\texports: {}\r\n/******/ \t\t};\r\n/******/\r\n/******/ \t\t// Execute the module function\r\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\r\n/******/\r\n/******/ \t\t// Flag the module as loaded\r\n/******/ \t\tmodule.l = true;\r\n/******/\r\n/******/ \t\t// Return the exports of the module\r\n/******/ \t\treturn module.exports;\r\n/******/ \t}\r\n/******/\r\n/******/\r\n/******/ \t// expose the modules object (__webpack_modules__)\r\n/******/ \t__webpack_require__.m = modules;\r\n/******/\r\n/******/ \t// expose the module cache\r\n/******/ \t__webpack_require__.c = installedModules;\r\n/******/\r\n/******/ \t// define getter function for harmony exports\r\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\r\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\r\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\r\n/******/ \t\t}\r\n/******/ \t};\r\n/******/\r\n/******/ \t// define __esModule on exports\r\n/******/ \t__webpack_require__.r = function(exports) {\r\n/******/ \t\tif(typeof Symbol !== \'undefined\' && Symbol.toStringTag) {\r\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: \'Module\' });\r\n/******/ \t\t}\r\n/******/ \t\tObject.defineProperty(exports, \'__esModule\', { value: true });\r\n/******/ \t};\r\n/******/\r\n/******/ \t// create a fake namespace object\r\n/******/ \t// mode & 1: value is a module id, require it\r\n/******/ \t// mode & 2: merge all properties of value into the ns\r\n/******/ \t// mode & 4: return value when already ns object\r\n/******/ \t// mode & 8|1: behave like require\r\n/******/ \t__webpack_require__.t = function(value, mode) {\r\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\r\n/******/ \t\tif(mode & 8) return value;\r\n/******/ \t\tif((mode & 4) && typeof value === \'object\' && value && value.__esModule) return value;\r\n/******/ \t\tvar ns = Object.create(null);\r\n/******/ \t\t__webpack_require__.r(ns);\r\n/******/ \t\tObject.defineProperty(ns, \'default\', { enumerable: true, value: value });\r\n/******/ \t\tif(mode & 2 && typeof value != \'string\') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\r\n/******/ \t\treturn ns;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\r\n/******/ \t__webpack_require__.n = function(module) {\r\n/******/ \t\tvar getter = module && module.__esModule ?\r\n/******/ \t\t\tfunction getDefault() { return module[\'default\']; } :\r\n/******/ \t\t\tfunction getModuleExports() { return module; };\r\n/******/ \t\t__webpack_require__.d(getter, \'a\', getter);\r\n/******/ \t\treturn getter;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// Object.prototype.hasOwnProperty.call\r\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\r\n/******/\r\n/******/ \t// __webpack_public_path__\r\n/******/ \t__webpack_require__.p = "";\r\n/******/\r\n/******/\r\n/******/ \t// Load entry module and return exports\r\n/******/ \treturn __webpack_require__(__webpack_require__.s = "./src/index.ts");\r\n/******/ })\r\n/************************************************************************/\r\n/******/ ({\r\n\r\n/***/ "./src/index.ts":\r\n/*!**********************!*\\\r\n  !*** ./src/index.ts ***!\r\n  \\**********************/\r\n/*! no static exports found */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\neval("\\r\\nfunction __export(m) {\\r\\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\\r\\n}\\r\\nObject.defineProperty(exports, \\"__esModule\\", { value: true });\\r\\n__export(__webpack_require__(/*! ./maybe */ \\"./src/maybe.ts\\"));\\r\\n\\n\\n//# sourceURL=webpack:///./src/index.ts?");\r\n\r\n/***/ }),\r\n\r\n/***/ "./src/maybe.ts":\r\n/*!**********************!*\\\r\n  !*** ./src/maybe.ts ***!\r\n  \\**********************/\r\n/*! no static exports found */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n"use strict";\r\neval("\\r\\nvar __extends = (this && this.__extends) || (function () {\\r\\n    var extendStatics = Object.setPrototypeOf ||\\r\\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\\r\\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\\r\\n    return function (d, b) {\\r\\n        extendStatics(d, b);\\r\\n        function __() { this.constructor = d; }\\r\\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\\r\\n    };\\r\\n})();\\r\\nObject.defineProperty(exports, \\"__esModule\\", { value: true });\\r\\nvar Maybe = /** @class */ (function () {\\r\\n    function Maybe() {\\r\\n    }\\r\\n    Maybe.just = function (x) {\\r\\n        return new Just(x);\\r\\n    };\\r\\n    Maybe.nothing = function () {\\r\\n        return new Nothing();\\r\\n    };\\r\\n    return Maybe;\\r\\n}());\\r\\nexports.Maybe = Maybe;\\r\\nvar Just = /** @class */ (function (_super) {\\r\\n    __extends(Just, _super);\\r\\n    function Just(value) {\\r\\n        var _this = _super.call(this) || this;\\r\\n        _this.value = value;\\r\\n        return _this;\\r\\n    }\\r\\n    Just.prototype.bind = function (f) {\\r\\n        return f(this.value);\\r\\n    };\\r\\n    Just.prototype.lift = function (f) {\\r\\n        return Maybe.just(f(this.value));\\r\\n    };\\r\\n    Just.prototype.caseOf = function (cases) {\\r\\n        return cases.just(this.value);\\r\\n    };\\r\\n    Just.prototype.isJust = function () {\\r\\n        return true;\\r\\n    };\\r\\n    Just.prototype.useDefault = function (_) {\\r\\n        return this;\\r\\n    };\\r\\n    return Just;\\r\\n}(Maybe));\\r\\nexports.Just = Just;\\r\\nvar Nothing = /** @class */ (function (_super) {\\r\\n    __extends(Nothing, _super);\\r\\n    function Nothing() {\\r\\n        return _super !== null && _super.apply(this, arguments) || this;\\r\\n    }\\r\\n    Nothing.prototype.bind = function (_) {\\r\\n        return Maybe.nothing();\\r\\n    };\\r\\n    Nothing.prototype.lift = function (_) {\\r\\n        return Maybe.nothing();\\r\\n    };\\r\\n    Nothing.prototype.caseOf = function (cases) {\\r\\n        return cases.nothing();\\r\\n    };\\r\\n    Nothing.prototype.isJust = function () {\\r\\n        return false;\\r\\n    };\\r\\n    Nothing.prototype.useDefault = function (t) {\\r\\n        return Maybe.just(t);\\r\\n    };\\r\\n    return Nothing;\\r\\n}(Maybe));\\r\\nexports.Nothing = Nothing;\\r\\n\\n\\n//# sourceURL=webpack:///./src/maybe.ts?");\r\n\r\n/***/ })\r\n\r\n/******/ })));\n\n//# sourceURL=webpack:///./node_modules/maybe/dist/index.js?')},"./src/algorithms.ts":
/*!***************************!*\
  !*** ./src/algorithms.ts ***!
  \***************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\r\nObject.defineProperty(exports, "__esModule", { value: true });\r\nconst maybe_1 = __webpack_require__(/*! maybe */ "./node_modules/maybe/dist/index.js");\r\nfunction count(xs, predicate) {\r\n    let result = 0;\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            result++;\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.count = count;\r\nfunction range(from, to) {\r\n    if (from >= to) {\r\n        return new Array(0);\r\n    }\r\n    else {\r\n        const result = new Array(to - from);\r\n        for (let i = 0; i !== result.length; ++i) {\r\n            result[i] = from + i;\r\n        }\r\n        return result;\r\n    }\r\n}\r\nexports.range = range;\r\nfunction* generateRange(from, to) {\r\n    for (let i = from; i < to; ++i) {\r\n        yield i;\r\n    }\r\n}\r\nexports.generateRange = generateRange;\r\nfunction allEqual(xs, equality) {\r\n    const eq = equality || defaultEquality;\r\n    for (let i = 1; i < xs.length; ++i) {\r\n        if (!eq(xs[0], xs[i])) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.allEqual = allEqual;\r\nfunction filter(xs, predicate) {\r\n    const result = [];\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            result.push(x);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.filter = filter;\r\nfunction all(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (!predicate(x)) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.all = all;\r\nfunction any(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\nexports.any = any;\r\nfunction find(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.find = find;\r\nfunction minimumBy(xs, f) {\r\n    let bestScore = Number.POSITIVE_INFINITY;\r\n    let best = maybe_1.Maybe.nothing();\r\n    for (let x of xs) {\r\n        const score = f(x);\r\n        if (score < bestScore) {\r\n            bestScore = score;\r\n            best = maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return best;\r\n}\r\nexports.minimumBy = minimumBy;\r\nfunction maximumBy(xs, f) {\r\n    let bestScore = Number.NEGATIVE_INFINITY;\r\n    let best = maybe_1.Maybe.nothing();\r\n    for (let x of xs) {\r\n        const score = f(x);\r\n        if (score > bestScore) {\r\n            bestScore = score;\r\n            best = maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return best;\r\n}\r\nexports.maximumBy = maximumBy;\r\nfunction createArray(length, initializer) {\r\n    const result = new Array(length);\r\n    for (let i = 0; i !== length; ++i) {\r\n        result[i] = initializer(i);\r\n    }\r\n    return result;\r\n}\r\nexports.createArray = createArray;\r\nfunction repeat(n, x) {\r\n    return createArray(n, _ => x);\r\n}\r\nexports.repeat = repeat;\r\nfunction indices(xs) {\r\n    return range(0, xs.length);\r\n}\r\nexports.indices = indices;\r\nfunction isPermutation(xs, ys, equality) {\r\n    const eq = equality || defaultEquality;\r\n    if (xs.length !== ys.length) {\r\n        return false;\r\n    }\r\n    else {\r\n        const used = repeat(xs.length, false);\r\n        for (const x of xs) {\r\n            let found = false;\r\n            let i = 0;\r\n            while (!found && i < ys.length) {\r\n                if (!used[i] && eq(x, ys[i])) {\r\n                    used[i] = true;\r\n                    found = true;\r\n                }\r\n                ++i;\r\n            }\r\n            if (!found) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}\r\nexports.isPermutation = isPermutation;\r\nfunction defaultEquality(x, y) {\r\n    return x === y;\r\n}\r\nfunction sum(ns) {\r\n    let total = 0;\r\n    for (let n of ns) {\r\n        total += n;\r\n    }\r\n    return total;\r\n}\r\nexports.sum = sum;\r\nfunction map(xs, f) {\r\n    return createArray(xs.length, i => f(xs[i]));\r\n}\r\nexports.map = map;\r\nfunction contains(xs, y) {\r\n    return any(xs, x => x === y);\r\n}\r\nexports.contains = contains;\r\nfunction firstIndexOf(xs, predicate) {\r\n    for (let i = 0; i !== xs.length; ++i) {\r\n        const x = xs[i];\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(i);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.firstIndexOf = firstIndexOf;\r\nfunction lastIndexOf(xs, predicate) {\r\n    for (let i = xs.length - 1; i >= 0; --i) {\r\n        const x = xs[i];\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(i);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.lastIndexOf = lastIndexOf;\r\n\n\n//# sourceURL=webpack:///./src/algorithms.ts?')},"./src/direction.ts":
/*!**************************!*\
  !*** ./src/direction.ts ***!
  \**************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\r\nObject.defineProperty(exports, "__esModule", { value: true });\r\nclass Direction {\r\n    constructor(dx, dy) {\r\n        this.dx = dx;\r\n        this.dy = dy;\r\n    }\r\n    rotateCW() {\r\n        return new Direction(this.dy, -this.dx);\r\n    }\r\n    rotateCCW() {\r\n        return new Direction(-this.dy, this.dx);\r\n    }\r\n    get angleInDegrees() {\r\n        return Math.atan2(this.dy, this.dx) * 180 / Math.PI;\r\n    }\r\n}\r\nexports.Direction = Direction;\r\n\n\n//# sourceURL=webpack:///./src/direction.ts?')},"./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\r\nObject.defineProperty(exports, "__esModule", { value: true });\r\nconst position_1 = __webpack_require__(/*! ./position */ "./src/position.ts");\r\nconst algorithms_1 = __webpack_require__(/*! ./algorithms */ "./src/algorithms.ts");\r\nconst direction_1 = __webpack_require__(/*! ./direction */ "./src/direction.ts");\r\nclass Grid {\r\n    row(rowIndex) {\r\n        if (rowIndex >= this.height) {\r\n            throw new Error(`rowIndex out of range`);\r\n        }\r\n        else {\r\n            return algorithms_1.range(0, this.width).map(columnIndex => this.at(new position_1.Position(columnIndex, rowIndex)));\r\n        }\r\n    }\r\n    column(columnIndex) {\r\n        if (columnIndex >= this.width) {\r\n            throw new Error(`columnIndex out of range`);\r\n        }\r\n        else {\r\n            return algorithms_1.range(0, this.height).map(rowIndex => this.at(new position_1.Position(columnIndex, rowIndex)));\r\n        }\r\n    }\r\n    *generatePositions() {\r\n        for (let y = 0; y !== this.height; ++y) {\r\n            for (let x = 0; x !== this.width; ++x) {\r\n                const position = new position_1.Position(x, y);\r\n                yield position;\r\n            }\r\n        }\r\n    }\r\n    get positions() {\r\n        return this.generatePositions();\r\n    }\r\n    isInside(position) {\r\n        return 0 <= position.x && position.x < this.width && 0 <= position.y && position.y < this.height;\r\n    }\r\n    toColumnArray() {\r\n        return algorithms_1.range(0, this.width).map(x => this.column(x));\r\n    }\r\n    toRowArray() {\r\n        return algorithms_1.range(0, this.height).map(y => this.row(y));\r\n    }\r\n    findPositions(predicate) {\r\n        return algorithms_1.filter(this.positions, (p) => predicate(this.at(p)));\r\n    }\r\n    map(f) {\r\n        return new ConcreteGrid(this.width, this.height, p => f(this.at(p)));\r\n    }\r\n    vmap(f) {\r\n        return new VirtualGrid(this.width, this.height, p => f(this.at(p)));\r\n    }\r\n    equal(grid, comparer) {\r\n        if (this.width !== grid.width || this.height !== grid.height) {\r\n            return false;\r\n        }\r\n        else {\r\n            return algorithms_1.all(this.positions, p => comparer(this.at(p), grid.at(p)));\r\n        }\r\n    }\r\n    around4(position) {\r\n        return algorithms_1.filter(position.around4, p => this.isInside(p));\r\n    }\r\n    around8(position) {\r\n        return algorithms_1.filter(position.around8, p => this.isInside(p));\r\n    }\r\n    iterator(position, direction) {\r\n        return new GridIterator(this, position, direction);\r\n    }\r\n    rowIterator(rowIndex) {\r\n        return this.iterator(new position_1.Position(0, rowIndex), new direction_1.Direction(1, 0));\r\n    }\r\n    columnIterator(columnIndex) {\r\n        return this.iterator(new position_1.Position(columnIndex, 0), new direction_1.Direction(0, 1));\r\n    }\r\n}\r\nexports.Grid = Grid;\r\nclass ConcreteGrid extends Grid {\r\n    constructor(width, height, initializer) {\r\n        super();\r\n        this.width = width;\r\n        this.height = height;\r\n        this.items = new Array(height);\r\n        for (let y = 0; y !== height; ++y) {\r\n            this.items[y] = new Array(width);\r\n            for (let x = 0; x !== width; ++x) {\r\n                const position = new position_1.Position(x, y);\r\n                this.items[y][x] = initializer(position);\r\n            }\r\n        }\r\n    }\r\n    at(position) {\r\n        if (!this.isInside(position)) {\r\n            throw new Error(`Invalid position ${position.toString()}`);\r\n        }\r\n        else {\r\n            return this.items[position.y][position.x];\r\n        }\r\n    }\r\n}\r\nclass VirtualGrid extends Grid {\r\n    constructor(width, height, fetch) {\r\n        super();\r\n        this.width = width;\r\n        this.height = height;\r\n        this.fetch = fetch;\r\n    }\r\n    at(position) {\r\n        if (!this.isInside(position)) {\r\n            throw new Error(`Invalid position ${position.toString()}`);\r\n        }\r\n        else {\r\n            return this.fetch(position);\r\n        }\r\n    }\r\n}\r\nclass GridIterator {\r\n    constructor(grid, _position, direction) {\r\n        this.grid = grid;\r\n        this._position = _position;\r\n        this.direction = direction;\r\n    }\r\n    get endReached() {\r\n        return this.grid.isInside(this._position);\r\n    }\r\n    get pointee() {\r\n        return this.grid.at(this._position);\r\n    }\r\n    next() {\r\n        this._position = this._position.add(this.direction);\r\n    }\r\n    get position() {\r\n        return this._position;\r\n    }\r\n}\r\nfunction createGrid(width, height, initializer) {\r\n    return new ConcreteGrid(width, height, initializer);\r\n}\r\nexports.createGrid = createGrid;\r\n\n\n//# sourceURL=webpack:///./src/grid.ts?')},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, "__esModule", { value: true });\r\n__export(__webpack_require__(/*! ./algorithms */ "./src/algorithms.ts"));\r\n__export(__webpack_require__(/*! ./direction */ "./src/direction.ts"));\r\n__export(__webpack_require__(/*! ./position */ "./src/position.ts"));\r\n__export(__webpack_require__(/*! ./grid */ "./src/grid.ts"));\r\n\n\n//# sourceURL=webpack:///./src/index.ts?')},"./src/position.ts":
/*!*************************!*\
  !*** ./src/position.ts ***!
  \*************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\r\nObject.defineProperty(exports, "__esModule", { value: true });\r\nclass Position {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    add(direction) {\r\n        return new Position(this.x + direction.dx, this.y + direction.dy);\r\n    }\r\n    get around4() {\r\n        const result = new Array(4);\r\n        result[0] = new Position(this.x - 1, this.y);\r\n        result[1] = new Position(this.x + 1, this.y);\r\n        result[2] = new Position(this.x, this.y - 1);\r\n        result[3] = new Position(this.x, this.y + 1);\r\n        return result;\r\n    }\r\n    get around8() {\r\n        const result = new Array(8);\r\n        result[0] = new Position(this.x + 1, this.y);\r\n        result[1] = new Position(this.x + 1, this.y + 1);\r\n        result[2] = new Position(this.x, this.y + 1);\r\n        result[3] = new Position(this.x - 1, this.y + 1);\r\n        result[4] = new Position(this.x - 1, this.y);\r\n        result[5] = new Position(this.x - 1, this.y - 1);\r\n        result[6] = new Position(this.x, this.y - 1);\r\n        result[7] = new Position(this.x + 1, this.y - 1);\r\n        return result;\r\n    }\r\n    touches4(p) {\r\n        const dx = Math.abs(this.x - p.x);\r\n        const dy = Math.abs(this.y - p.y);\r\n        return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);\r\n    }\r\n    touches8(p) {\r\n        const dx = Math.abs(this.x - p.x);\r\n        const dy = Math.abs(this.y - p.y);\r\n        return (dx === 0 || dx === 1) && (dy === 0 || dy === 1) && (dx !== 0 || dy !== 0);\r\n    }\r\n}\r\nexports.Position = Position;\r\n\n\n//# sourceURL=webpack:///./src/position.ts?')}}))},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.outcomeToHtmlClass=t.combineAssertionOutcomes=t.Outcome=void 0,function(e){e[e.Pass=0]="Pass",e[e.Fail=1]="Fail",e[e.Skip=2]="Skip"}(r=t.Outcome||(t.Outcome={})),t.combineAssertionOutcomes=function(e){const t=[r.Pass,r.Skip,r.Fail];return n=Math.max(0,...e.map(e=>function(e){for(let n=0;n!==t.length;++n)if(t[n]===e)return n;throw new Error("Invalid outcome")}(e))),t[n];var n},t.outcomeToHtmlClass=function(e){if(e===r.Pass)return"pass";if(e===r.Fail)return"fail";if(e===r.Skip)return"skip";throw new Error("Invalid AssertionResult")}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.convertToString=void 0;const a=o(n(33)),s=n(11);t.convertToString=function e(t){if(a.array(a.any).hasType(t))return n=t,`[${s.map(n,t=>e(t)).join(", ")}]`;if(a.string.hasType(t))return function(e){return`"${e.replace(/ /g,"␣").replace(/\n/g,"↵")}"`}(t);if(a.undef.hasType(t))return"undefined";if(null===t)return"null";if(a.number.hasType(t))return Number.isInteger(t)?t.toString():t.toFixed(2).toString();if(a.boolean.hasType(t))return t.toString();if(a.func.hasType(t))return t.toString();if(a.object.hasType(t))return function(t){return`{${Object.keys(t).map(n=>`${n}: ${e(t[n])}`).join(", ")}}`}(t);throw new Error("Could not determine type of "+t);var n}},function(e,t,n){"use strict";function r(e){return"function"==typeof e}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"a function"),t.default=r},function(e,t,n){"use strict";function r(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"a number"),t.default=r},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.callIfDefined=t.namedCallFunction=t.nameResults=t.monadicCallFunction=t.typedCallFunction=t.callFunction=t.TypedFunctionCallResults=t.FunctionCallResults=t.parseFunction=t.TypedFunctionInformation=t.FunctionInformation=void 0;const i=r(n(208)),o=n(6),a=n(22),s=n(11);class u{constructor(e,t){this.functionName=e,this.parameterNames=t}get signature(){const e=this.parameterNames.join(", ");return`${this.functionName}(${e})`}get parameterCount(){return this.parameterNames.length}parameterWithNameExists(e){return s.contains(this.parameterNames,e)}specifyTypes(e,t){return new l(this.functionName,this.parameterNames,e,t)}verifyCall(e,t=[]){const n=p(e.func,...e.argumentsBeforeCall);return!!a.deepEqual(e.returnValue,n.returnValue)&&this.parameterNames.every((r,i)=>!!s.contains(t,r)||a.deepEqual(e.argumentsAfterCall[i],n.argumentsAfterCall[i]))}}t.FunctionInformation=u;class l extends u{constructor(e,t,n,r){if(super(e,t),this.parameterTypes=n,this.returnType=r,t.length!==n.length)throw new Error("Parameter count mismatch")}}function c(e){let t=/function (\w+)\((.*?)\)/.exec(e.toString());if(null!=t){const e=t[1],n=t[2].trim(),r=[];if(""!=n)for(const e of n.split(","))r.push(e.trim());return new u(e,r)}throw console.error("Failed to parse\n"+e.toString()),new Error("Could not parse function source")}t.TypedFunctionInformation=l,t.parseFunction=c;class f{constructor(e,t,n,r){this.func=e,this.argumentsBeforeCall=t,this.argumentsAfterCall=n,this.returnValue=r}sameAs(e){return a.deepEqual(this.argumentsAfterCall,this.argumentsAfterCall)&&a.deepEqual(this.returnValue,e.returnValue)}get namedArgumentsBeforeCall(){return this.nameParameters(this.argumentsBeforeCall)}get namedArgumentsAfterCall(){return this.nameParameters(this.argumentsAfterCall)}nameParameters(e){const t=c(this.func).parameterNames;if(t.length!==e.length)throw new Error("Inconsistent number of parameters");{const n={};for(let r=0;r!==t.length;++r){const i=t[r],o=e[r];n[i]=o}return n}}}t.FunctionCallResults=f;class d{constructor(e,t,n,r){this.func=e,this.argumentsBeforeCall=t,this.argumentsAfterCall=n,this.returnValue=r}sameAs(e){return a.deepEqual(this.argumentsAfterCall,this.argumentsAfterCall)&&a.deepEqual(this.returnValue,e.returnValue)}get namedArgumentsBeforeCall(){return this.nameParameters(this.argumentsBeforeCall)}get namedArgumentsAfterCall(){return this.nameParameters(this.argumentsAfterCall)}nameParameters(e){const t=c(this.func).parameterNames;if(t.length!==e.length)throw new Error("Inconsistent number of parameters");{const n={};for(let r=0;r!==t.length;++r){const i=t[r],o=e[r];n[i]=o}return n}}}function p(e,...t){const n=i.default(t),r=e(...n);return new f(e,t,n,r)}function h(e,t){return{argumentsBeforeCall:n(e.argumentsBeforeCall,t.parameterNames),argumentsAfterCall:n(e.argumentsAfterCall,t.parameterNames),returnValue:e.returnValue};function n(e,t){if(e.length!==t.length)throw new Error("Mismatch");{const n={};for(let r=0;r!==e.length;++r){const i=t[r],o=e[r];n[i]=o}return n}}}t.TypedFunctionCallResults=d,t.callFunction=p,t.typedCallFunction=function(e,...t){const n=i.default(t),r=e(...n);return new d(e,t,n,r)},t.monadicCallFunction=function(e,...t){return e.bind(e=>o.Maybe.just(p(e,...t)))},t.nameResults=h,t.namedCallFunction=function(e,...t){return h(p(e,...t),c(e))},t.callIfDefined=function(e,...t){return e?e(...t):void 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Lazy=void 0;t.Lazy=class{constructor(e){this.fetch=e,this.forced=!1}get value(){return this.force(),this.__value}force(){this.forced||(this.__value=this.fetch(),this.forced=!0)}}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Forms=void 0;var a=n(61);Object.defineProperty(t,"BitmapViewer",{enumerable:!0,get:function(){return a.BitmapViewer}});var s=n(62);Object.defineProperty(t,"DieViewer",{enumerable:!0,get:function(){return s.DieViewer}});var u=n(63);Object.defineProperty(t,"DiceViewer",{enumerable:!0,get:function(){return u.DiceViewer}});var l=n(58);Object.defineProperty(t,"DifficultyViewer",{enumerable:!0,get:function(){return l.DifficultyViewer}});var c=n(124);Object.defineProperty(t,"HintViewer",{enumerable:!0,get:function(){return c.HintViewer}});var f=n(64);Object.defineProperty(t,"Invalid",{enumerable:!0,get:function(){return f.Invalid}});var d=n(178);Object.defineProperty(t,"MultiView",{enumerable:!0,get:function(){return d.MultiView}});var p=n(59);Object.defineProperty(t,"ScoreViewer",{enumerable:!0,get:function(){return p.ScoreViewer}});var h=n(77);Object.defineProperty(t,"SolutionViewer",{enumerable:!0,get:function(){return h.SolutionViewer}});var _=n(193);Object.defineProperty(t,"MultiSolutionViewer",{enumerable:!0,get:function(){return _.MultiSolutionViewer}});var m=n(43);Object.defineProperty(t,"SourceCodeViewer",{enumerable:!0,get:function(){return m.SourceCodeViewer}});var g=n(48);Object.defineProperty(t,"ValidatedInput",{enumerable:!0,get:function(){return g.ValidatedInput}});var v=n(198);Object.defineProperty(t,"ArrayViewer",{enumerable:!0,get:function(){return v.ArrayViewer}});var y=n(201);Object.defineProperty(t,"ObjectViewer",{enumerable:!0,get:function(){return y.ObjectViewer}});var b=n(79);Object.defineProperty(t,"DescriptionBox",{enumerable:!0,get:function(){return b.DescriptionBox}});var w=n(47);Object.defineProperty(t,"TabbedSourceCodeViewer",{enumerable:!0,get:function(){return w.TabbedSourceCodeViewer}});var x=n(80);Object.defineProperty(t,"LanguageComparison",{enumerable:!0,get:function(){return x.LanguageComparison}});var k=n(202);Object.defineProperty(t,"ExistingImplementations",{enumerable:!0,get:function(){return k.ExistingImplementations}});var C=n(42);Object.defineProperty(t,"InlineCode",{enumerable:!0,get:function(){return C.InlineCode}});var S=n(78);Object.defineProperty(t,"TabControl",{enumerable:!0,get:function(){return S.TabControl}}),Object.defineProperty(t,"Tab",{enumerable:!0,get:function(){return S.Tab}});var E=n(203);Object.defineProperty(t,"SvgColorGrid",{enumerable:!0,get:function(){return E.SvgColorGrid}});const T=o(n(204));t.Forms=T;var O=n(32);Object.defineProperty(t,"SectionOverview",{enumerable:!0,get:function(){return O.SectionOverview}}),Object.defineProperty(t,"ExerciseEntry",{enumerable:!0,get:function(){return O.ExerciseEntry}}),Object.defineProperty(t,"ExplanationEntry",{enumerable:!0,get:function(){return O.ExplanationEntry}});var M=n(210);Object.defineProperty(t,"Important",{enumerable:!0,get:function(){return M.Important}});var P=n(211);Object.defineProperty(t,"HeaderBox",{enumerable:!0,get:function(){return P.HeaderBox}});var j=n(212);Object.defineProperty(t,"FunctionSummary",{enumerable:!0,get:function(){return j.FunctionSummary}}),Object.defineProperty(t,"Parameter",{enumerable:!0,get:function(){return j.Parameter}}),Object.defineProperty(t,"ReturnValue",{enumerable:!0,get:function(){return j.ReturnValue}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(28),o=n(15),a=n(34),s=n(68),u=n(69),l=n(40),c=n(10),f=n(14),d=n(70),p=n(21),h=n(128),_=[[String,r.default],[Boolean,i.default],[Number,o.default],[RegExp,l.default],[Object,c.default],[Function,f.default],[Date,d.default],[Array,p.default]];"undefined"!=typeof Symbol&&_.push([Symbol,a.default]),"undefined"!=typeof WeakMap&&_.push([WeakMap,s.default]),"undefined"!=typeof WeakSet&&_.push([WeakSet,u.default]),t.getPredicateForType=function(e){var t=h(_,(function(t){return t[0]===e}));if(t)return t[1]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Score=void 0;class r{constructor(e,t){this.grade=e,this.maximum=t}add(e){const t=this.grade+e.grade,n=this.maximum+e.maximum;return new r(t,n)}scale(e){if(0===this.maximum)throw new Error("Cannot scale score whose maximum === 0");if(0===e)throw new Error("Cannot scale score to new maximum === 0");{const t=this.grade/this.maximum*e;return new r(t,e)}}get isPerfect(){return this.grade===this.maximum}static summate(...e){let t=new r(0,0);for(let n of e)t=t.add(n);return t}}t.Score=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1).setDescription(Array.isArray,"an array");t.default=r},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.approximately=t.deepEqual=void 0;const i=r(n(209));t.deepEqual=function(e,t){return i.default(e,t)},t.approximately=function(e,t,n=1e-4){return Math.abs(e-t)<n}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(225),t),i(n(86),t),i(n(87),t),i(n(231),t),i(n(232),t),i(n(235),t),i(n(238),t),i(n(241),t),i(n(244),t),i(n(90),t),i(n(245),t),i(n(246),t),i(n(247),t)},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ExerciseSection=void 0;const i=r(n(0)),o=r(n(30)),a=n(18),s=n(32),u=r(n(2)),l=u.default(a.DifficultyViewer)`
    width: 4em;
`,c=u.default.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;t.ExerciseSection=class{get content(){return i.default.createElement("section",{className:o.default(this.htmlClasses)},i.default.createElement(c,null,this.renderDifficultyViewer()," ",this.header),i.default.createElement("div",{className:"content"},this.exerciseContent))}get tocEntry(){return i.default.createElement(s.ExerciseEntry,{difficulty:this.difficulty,score:this.score,caption:this.caption})}isScored(){return!0}hasDifficulty(){return!0}get htmlClasses(){return["exercise"]}renderDifficultyViewer(){return this.hasDifficulty()?i.default.createElement(l,{difficulty:this.difficulty}):i.default.createElement(i.default.Fragment,null)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Animation=void 0;t.Animation=class{get endValue(){return this.at(this.duration)}}},function(e,t,n){var r=n(113);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=u(o),s=u(n(39));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeout=void 0,n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.scrollHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.scrollHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){this.props.triggerDisabled||this.state.inTransition||(e.preventDefault(),this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening(),this.props.onTriggerOpening()):(this.closeCollapsible(),this.props.onClosing(),this.props.onTriggerClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?a.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?a.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(e){e.target===this.innerRef&&(this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen()))}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",i=this.props.triggerDisabled?"is-disabled":"",o=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,s=this.props.contentContainerTagName,u=this.props.triggerTagName,l=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,c=this.props.classParentString+"__trigger "+n+" "+i+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),f=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),d=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,p=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return a.default.createElement(s,r({className:f.trim()},this.props.containerElementProps),a.default.createElement(u,r({className:c.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),o),this.renderNonClickableTriggerElement(),a.default.createElement("div",{className:d.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},a.default.createElement("div",{className:p.trim()},l)))}}]),t}(o.Component);l.propTypes={transitionTime:s.default.number,transitionCloseTime:s.default.number,triggerTagName:s.default.string,easing:s.default.string,open:s.default.bool,containerElementProps:s.default.object,triggerElementProps:s.default.object,classParentString:s.default.string,openedClassName:s.default.string,triggerStyle:s.default.object,triggerClassName:s.default.string,triggerOpenedClassName:s.default.string,contentOuterClassName:s.default.string,contentInnerClassName:s.default.string,accordionPosition:s.default.oneOfType([s.default.string,s.default.number]),handleTriggerClick:s.default.func,onOpen:s.default.func,onClose:s.default.func,onOpening:s.default.func,onClosing:s.default.func,onTriggerOpening:s.default.func,onTriggerClosing:s.default.func,trigger:s.default.oneOfType([s.default.string,s.default.element]),triggerWhenOpen:s.default.oneOfType([s.default.string,s.default.element]),triggerDisabled:s.default.bool,lazyRender:s.default.bool,overflowWhenOpen:s.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:s.default.bool,triggerSibling:s.default.oneOfType([s.default.element,s.default.func]),tabIndex:s.default.number,contentContainerTagName:s.default.string},l.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);function i(e){return"boolean"==typeof e||"[object Boolean]"===Object.prototype.toString.call(e)}t.default=i,r.setDescription(i,"a boolean")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceCode=t.Language=void 0;const r=n(189),i=n(11);var o;!function(e){e[e.JavaScript=0]="JavaScript",e[e.Java=1]="Java",e[e.Python=2]="Python",e[e.CSharp=3]="CSharp",e[e.CPP=4]="CPP",e[e.CommonLisp=5]="CommonLisp",e[e.Factor=6]="Factor",e[e.Pseudocode=7]="Pseudocode",e[e.Ruby=8]="Ruby"}(o=t.Language||(t.Language={}));class a{constructor(e,t){this.language=e,this.sourceCode=t}beautify(){if(this.language===o.JavaScript)return new a(o.JavaScript,r.js_beautify(this.sourceCode,{brace_style:"collapse",keep_array_indentation:!0}));{const e=this.sourceCode.split("\n").map(e=>e.trimRight()),t=Math.min(...e.map((function(e){for(let t=0;t!==e.length;++t)if(" "!==e[t])return t;return 1/0}))),n=e.map(e=>e.substr(t)),r=i.firstIndexOf(e,e=>e.length>0).useDefault(0).value,o=i.lastIndexOf(e,e=>e.length>0).useDefault(e.length-1).value;return new a(this.language,n.slice(r,o+1).join("\n"))}}join(e,t="\n\n"){if(this.language!==e.language)throw new Error("Cannot append source code written in different languages");return new a(this.language,this.sourceCode+t+e.sourceCode)}}t.SourceCode=a},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertSolutionsToSourceCodeMap=t.retrieveSolutions=t.isSolutionPack=t.packSingleSolution=t.packSolutions=t.Solution=void 0;const r=n(29),i=Symbol("implementations");class o{get dependencies(){return[]}get sourceCode(){const e=this.implementation.toString()+this.dependencies.map(e=>e.toString()).join("\n");return/exports\./.exec(e)&&(console.error("Error: exports. detected in solution\n"+e),alert("Bug found! Please inform a lecturer.")),new r.SourceCode(r.Language.JavaScript,e).beautify()}}function a(...e){const t=e[0].implementation;return t[i]=e,t}function s(e){return e[i]}t.Solution=o,t.packSolutions=a,t.packSingleSolution=function(e,t,n){return a(new class extends o{constructor(){super(...arguments),this.label=n||"solution",this.implementation=e}get dependencies(){return t||[]}})},t.isSolutionPack=s,t.retrieveSolutions=function(e){return s(e)?e[i]:[new class extends o{constructor(){super(...arguments),this.label="",this.implementation=e}}]},t.convertSolutionsToSourceCodeMap=function(e){const t={};for(let n of e)t[n.label]=n.sourceCode;return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(117);Object.defineProperty(t,"SectionOverview",{enumerable:!0,get:function(){return r.SectionOverview}});var i=n(121);Object.defineProperty(t,"ExerciseEntry",{enumerable:!0,get:function(){return i.ExerciseEntry}});var o=n(60);Object.defineProperty(t,"ExplanationEntry",{enumerable:!0,get:function(){return o.ExplanationEntry}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.object=t.func=t.array=t.empty=t.any=t.undef=t.boolean=t.number=t.string=void 0;const a=o(n(65));t.string=new class{hasType(e){return a.string(e)}get isMutable(){return!1}},t.number=new class{hasType(e){return a.number(e)}get isMutable(){return!1}},t.boolean=new class{hasType(e){return a.boolean(e)}get isMutable(){return!1}},t.undef=new class{hasType(e){return a.undefined(e)}get isMutable(){return!1}},t.any=new class{hasType(e){return!0}get isMutable(){return!0}},t.empty=new class{hasType(e){return!1}get isMutable(){return!1}},t.array=function(e){return new class{hasType(t){return a.array(t)&&t.every(t=>e.hasType(t))}get isMutable(){return!0}}},t.func=new class{hasType(e){return a.function(e)}get isMutable(){return!1}},t.object=new class{hasType(e){return a.object(e)}get isMutable(){return!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);function i(e){return"symbol"==typeof e}t.default=i,r.setDescription(i,"a Symbol")},function(e,t,n){"use strict";function r(e){return void 0===e}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"undefined"),t.default=r},function(e,t,n){e.exports=function(){"use strict";var e=navigator.userAgent,t=navigator.platform,n=/gecko\/\d/i.test(e),r=/MSIE \d/.test(e),i=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),o=/Edge\/(\d+)/.exec(e),a=r||i||o,s=a&&(r?document.documentMode||6:+(o||i)[1]),u=!o&&/WebKit\//.test(e),l=u&&/Qt\/\d+\.\d+/.test(e),c=!o&&/Chrome\//.test(e),f=/Opera\//.test(e),d=/Apple Computer/.test(navigator.vendor),p=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),h=/PhantomJS/.test(e),_=!o&&/AppleWebKit/.test(e)&&/Mobile\/\w+/.test(e),m=/Android/.test(e),g=_||m||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),v=_||/Mac/.test(t),y=/\bCrOS\b/.test(e),b=/win/i.test(t),w=f&&e.match(/Version\/(\d*\.\d*)/);w&&(w=Number(w[1])),w&&w>=15&&(f=!1,u=!0);var x=v&&(l||f&&(null==w||w<12.11)),k=n||a&&s>=9;function C(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var S,E=function(e,t){var n=e.className,r=C(t).exec(n);if(r){var i=n.slice(r.index+r[0].length);e.className=n.slice(0,r.index)+(i?r[1]+i:"")}};function T(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild);return e}function O(e,t){return T(e).appendChild(t)}function M(e,t,n,r){var i=document.createElement(e);if(n&&(i.className=n),r&&(i.style.cssText=r),"string"==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i}function P(e,t,n,r){var i=M(e,t,n,r);return i.setAttribute("role","presentation"),i}function j(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function A(){var e;try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}function N(e,t){var n=e.className;C(t).test(n)||(e.className+=(n?" ":"")+t)}function D(e,t){for(var n=e.split(" "),r=0;r<n.length;r++)n[r]&&!C(n[r]).test(t)&&(t+=" "+n[r]);return t}S=document.createRange?function(e,t,n,r){var i=document.createRange();return i.setEnd(r||e,n),i.setStart(e,t),i}:function(e,t,n){var r=document.body.createTextRange();try{r.moveToElementText(e.parentNode)}catch(e){return r}return r.collapse(!0),r.moveEnd("character",n),r.moveStart("character",t),r};var L=function(e){e.select()};function R(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function I(e,t,n){for(var r in t||(t={}),e)!e.hasOwnProperty(r)||!1===n&&t.hasOwnProperty(r)||(t[r]=e[r]);return t}function F(e,t,n,r,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length);for(var o=r||0,a=i||0;;){var s=e.indexOf("\t",o);if(s<0||s>=t)return a+(t-o);a+=s-o,a+=n-a%n,o=s+1}}_?L=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:a&&(L=function(e){try{e.select()}catch(e){}});var z=function(){this.id=null,this.f=null,this.time=0,this.handler=R(this.onTimeout,this)};function W(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return n;return-1}z.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},z.prototype.set=function(e,t){this.f=t;var n=+new Date+e;(!this.id||n<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=n)};var B={toString:function(){return"CodeMirror.Pass"}},V={scroll:!1},U={origin:"*mouse"},H={origin:"+move"};function $(e,t,n){for(var r=0,i=0;;){var o=e.indexOf("\t",r);-1==o&&(o=e.length);var a=o-r;if(o==e.length||i+a>=t)return r+Math.min(a,t-i);if(i+=o-r,r=o+1,(i+=n-i%n)>=t)return r}}var q=[""];function K(e){for(;q.length<=e;)q.push(G(q)+" ");return q[e]}function G(e){return e[e.length-1]}function X(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r);return n}function Q(){}function Y(e,t){var n;return Object.create?n=Object.create(e):(Q.prototype=e,n=new Q),t&&I(t,n),n}var J=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Z(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||J.test(e))}function ee(e,t){return t?!!(t.source.indexOf("\\w")>-1&&Z(e))||t.test(e):Z(e)}function te(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0}var ne=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function re(e){return e.charCodeAt(0)>=768&&ne.test(e)}function ie(e,t,n){for(;(n<0?t>0:t<e.length)&&re(e.charAt(t));)t+=n;return t}function oe(e,t,n){for(var r=t>n?-1:1;;){if(t==n)return t;var i=(t+n)/2,o=r<0?Math.ceil(i):Math.floor(i);if(o==t)return e(o)?t:n;e(o)?n=o:t=o+r}}var ae=null;function se(e,t,n){var r;ae=null;for(var i=0;i<e.length;++i){var o=e[i];if(o.from<t&&o.to>t)return i;o.to==t&&(o.from!=o.to&&"before"==n?r=i:ae=i),o.from==t&&(o.from!=o.to&&"before"!=n?r=i:ae=i)}return null!=r?r:ae}var ue=function(){var e=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,t=/[stwN]/,n=/[LRr]/,r=/[Lb1n]/,i=/[1n]/;function o(e,t,n){this.level=e,this.from=t,this.to=n}return function(a,s){var u="ltr"==s?"L":"R";if(0==a.length||"ltr"==s&&!e.test(a))return!1;for(var l,c=a.length,f=[],d=0;d<c;++d)f.push((l=a.charCodeAt(d))<=247?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(l):1424<=l&&l<=1524?"R":1536<=l&&l<=1785?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(l-1536):1774<=l&&l<=2220?"r":8192<=l&&l<=8203?"w":8204==l?"b":"L");for(var p=0,h=u;p<c;++p){var _=f[p];"m"==_?f[p]=h:h=_}for(var m=0,g=u;m<c;++m){var v=f[m];"1"==v&&"r"==g?f[m]="n":n.test(v)&&(g=v,"r"==v&&(f[m]="R"))}for(var y=1,b=f[0];y<c-1;++y){var w=f[y];"+"==w&&"1"==b&&"1"==f[y+1]?f[y]="1":","!=w||b!=f[y+1]||"1"!=b&&"n"!=b||(f[y]=b),b=w}for(var x=0;x<c;++x){var k=f[x];if(","==k)f[x]="N";else if("%"==k){var C=void 0;for(C=x+1;C<c&&"%"==f[C];++C);for(var S=x&&"!"==f[x-1]||C<c&&"1"==f[C]?"1":"N",E=x;E<C;++E)f[E]=S;x=C-1}}for(var T=0,O=u;T<c;++T){var M=f[T];"L"==O&&"1"==M?f[T]="L":n.test(M)&&(O=M)}for(var P=0;P<c;++P)if(t.test(f[P])){var j=void 0;for(j=P+1;j<c&&t.test(f[j]);++j);for(var A="L"==(P?f[P-1]:u),N=A==("L"==(j<c?f[j]:u))?A?"L":"R":u,D=P;D<j;++D)f[D]=N;P=j-1}for(var L,R=[],I=0;I<c;)if(r.test(f[I])){var F=I;for(++I;I<c&&r.test(f[I]);++I);R.push(new o(0,F,I))}else{var z=I,W=R.length,B="rtl"==s?1:0;for(++I;I<c&&"L"!=f[I];++I);for(var V=z;V<I;)if(i.test(f[V])){z<V&&(R.splice(W,0,new o(1,z,V)),W+=B);var U=V;for(++V;V<I&&i.test(f[V]);++V);R.splice(W,0,new o(2,U,V)),W+=B,z=V}else++V;z<I&&R.splice(W,0,new o(1,z,I))}return"ltr"==s&&(1==R[0].level&&(L=a.match(/^\s+/))&&(R[0].from=L[0].length,R.unshift(new o(0,0,L[0].length))),1==G(R).level&&(L=a.match(/\s+$/))&&(G(R).to-=L[0].length,R.push(new o(0,c-L[0].length,c)))),"rtl"==s?R.reverse():R}}();function le(e,t){var n=e.order;return null==n&&(n=e.order=ue(e.text,t)),n}var ce=[],fe=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1);else if(e.attachEvent)e.attachEvent("on"+t,n);else{var r=e._handlers||(e._handlers={});r[t]=(r[t]||ce).concat(n)}};function de(e,t){return e._handlers&&e._handlers[t]||ce}function pe(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n,!1);else if(e.detachEvent)e.detachEvent("on"+t,n);else{var r=e._handlers,i=r&&r[t];if(i){var o=W(i,n);o>-1&&(r[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function he(e,t){var n=de(e,t);if(n.length)for(var r=Array.prototype.slice.call(arguments,2),i=0;i<n.length;++i)n[i].apply(null,r)}function _e(e,t,n){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),he(e,n||t.type,e,t),we(t)||t.codemirrorIgnore}function me(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var n=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),r=0;r<t.length;++r)-1==W(n,t[r])&&n.push(t[r])}function ge(e,t){return de(e,t).length>0}function ve(e){e.prototype.on=function(e,t){fe(this,e,t)},e.prototype.off=function(e,t){pe(this,e,t)}}function ye(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function be(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function we(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function xe(e){ye(e),be(e)}function ke(e){return e.target||e.srcElement}function Ce(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),v&&e.ctrlKey&&1==t&&(t=3),t}var Se,Ee,Te=function(){if(a&&s<9)return!1;var e=M("div");return"draggable"in e||"dragDrop"in e}();function Oe(e){if(null==Se){var t=M("span","​");O(e,M("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Se=t.offsetWidth<=1&&t.offsetHeight>2&&!(a&&s<8))}var n=Se?M("span","​"):M("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return n.setAttribute("cm-text",""),n}function Me(e){if(null!=Ee)return Ee;var t=O(e,document.createTextNode("AخA")),n=S(t,0,1).getBoundingClientRect(),r=S(t,1,2).getBoundingClientRect();return T(e),!(!n||n.left==n.right)&&(Ee=r.right-n.right<3)}var Pe,je=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,n=[],r=e.length;t<=r;){var i=e.indexOf("\n",t);-1==i&&(i=e.length);var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(n.push(o.slice(0,a)),t+=a+1):(n.push(o),t=i+1)}return n}:function(e){return e.split(/\r\n?|\n/)},Ae=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Ne="oncopy"in(Pe=M("div"))||(Pe.setAttribute("oncopy","return;"),"function"==typeof Pe.oncopy),De=null,Le={},Re={};function Ie(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Le[e]=t}function Fe(e){if("string"==typeof e&&Re.hasOwnProperty(e))e=Re[e];else if(e&&"string"==typeof e.name&&Re.hasOwnProperty(e.name)){var t=Re[e.name];"string"==typeof t&&(t={name:t}),(e=Y(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Fe("application/xml");if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Fe("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function ze(e,t){t=Fe(t);var n=Le[t.name];if(!n)return ze(e,"text/plain");var r=n(e,t);if(We.hasOwnProperty(t.name)){var i=We[t.name];for(var o in i)i.hasOwnProperty(o)&&(r.hasOwnProperty(o)&&(r["_"+o]=r[o]),r[o]=i[o])}if(r.name=t.name,t.helperType&&(r.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)r[a]=t.modeProps[a];return r}var We={};function Be(e,t){I(t,We.hasOwnProperty(e)?We[e]:We[e]={})}function Ve(e,t){if(!0===t)return t;if(e.copyState)return e.copyState(t);var n={};for(var r in t){var i=t[r];i instanceof Array&&(i=i.concat([])),n[r]=i}return n}function Ue(e,t){for(var n;e.innerMode&&(n=e.innerMode(t))&&n.mode!=e;)t=n.state,e=n.mode;return n||{mode:e,state:t}}function He(e,t,n){return!e.startState||e.startState(t,n)}var $e=function(e,t,n){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=n};function qe(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.");for(var n=e;!n.lines;)for(var r=0;;++r){var i=n.children[r],o=i.chunkSize();if(t<o){n=i;break}t-=o}return n.lines[t]}function Ke(e,t,n){var r=[],i=t.line;return e.iter(t.line,n.line+1,(function(e){var o=e.text;i==n.line&&(o=o.slice(0,n.ch)),i==t.line&&(o=o.slice(t.ch)),r.push(o),++i})),r}function Ge(e,t,n){var r=[];return e.iter(t,n,(function(e){r.push(e.text)})),r}function Xe(e,t){var n=t-e.height;if(n)for(var r=e;r;r=r.parent)r.height+=n}function Qe(e){if(null==e.parent)return null;for(var t=e.parent,n=W(t.lines,e),r=t.parent;r;t=r,r=r.parent)for(var i=0;r.children[i]!=t;++i)n+=r.children[i].chunkSize();return n+t.first}function Ye(e,t){var n=e.first;e:do{for(var r=0;r<e.children.length;++r){var i=e.children[r],o=i.height;if(t<o){e=i;continue e}t-=o,n+=i.chunkSize()}return n}while(!e.lines);for(var a=0;a<e.lines.length;++a){var s=e.lines[a].height;if(t<s)break;t-=s}return n+a}function Je(e,t){return t>=e.first&&t<e.first+e.size}function Ze(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function et(e,t,n){if(void 0===n&&(n=null),!(this instanceof et))return new et(e,t,n);this.line=e,this.ch=t,this.sticky=n}function tt(e,t){return e.line-t.line||e.ch-t.ch}function nt(e,t){return e.sticky==t.sticky&&0==tt(e,t)}function rt(e){return et(e.line,e.ch)}function it(e,t){return tt(e,t)<0?t:e}function ot(e,t){return tt(e,t)<0?e:t}function at(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function st(e,t){if(t.line<e.first)return et(e.first,0);var n=e.first+e.size-1;return t.line>n?et(n,qe(e,n).text.length):function(e,t){var n=e.ch;return null==n||n>t?et(e.line,t):n<0?et(e.line,0):e}(t,qe(e,t.line).text.length)}function ut(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=st(e,t[r]);return n}$e.prototype.eol=function(){return this.pos>=this.string.length},$e.prototype.sol=function(){return this.pos==this.lineStart},$e.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},$e.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},$e.prototype.eat=function(e){var t=this.string.charAt(this.pos);if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},$e.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},$e.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},$e.prototype.skipToEnd=function(){this.pos=this.string.length},$e.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0},$e.prototype.backUp=function(e){this.pos-=e},$e.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=F(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?F(this.string,this.lineStart,this.tabSize):0)},$e.prototype.indentation=function(){return F(this.string,null,this.tabSize)-(this.lineStart?F(this.string,this.lineStart,this.tabSize):0)},$e.prototype.match=function(e,t,n){if("string"!=typeof e){var r=this.string.slice(this.pos).match(e);return r&&r.index>0?null:(r&&!1!==t&&(this.pos+=r[0].length),r)}var i=function(e){return n?e.toLowerCase():e};if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},$e.prototype.current=function(){return this.string.slice(this.start,this.pos)},$e.prototype.hideFirstChars=function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e}},$e.prototype.lookAhead=function(e){var t=this.lineOracle;return t&&t.lookAhead(e)},$e.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};var lt=function(e,t){this.state=e,this.lookAhead=t},ct=function(e,t,n,r){this.state=t,this.doc=e,this.line=n,this.maxLookAhead=r||0,this.baseTokens=null,this.baseTokenPos=1};function ft(e,t,n,r){var i=[e.state.modeGen],o={};bt(e,t.text,e.doc.mode,n,(function(e,t){return i.push(e,t)}),o,r);for(var a=n.state,s=function(r){n.baseTokens=i;var s=e.state.overlays[r],u=1,l=0;n.state=!0,bt(e,t.text,s.mode,n,(function(e,t){for(var n=u;l<e;){var r=i[u];r>e&&i.splice(u,1,e,i[u+1],r),u+=2,l=Math.min(e,r)}if(t)if(s.opaque)i.splice(n,u-n,e,"overlay "+t),u=n+2;else for(;n<u;n+=2){var o=i[n+1];i[n+1]=(o?o+" ":"")+"overlay "+t}}),o),n.state=a,n.baseTokens=null,n.baseTokenPos=1},u=0;u<e.state.overlays.length;++u)s(u);return{styles:i,classes:o.bgClass||o.textClass?o:null}}function dt(e,t,n){if(!t.styles||t.styles[0]!=e.state.modeGen){var r=pt(e,Qe(t)),i=t.text.length>e.options.maxHighlightLength&&Ve(e.doc.mode,r.state),o=ft(e,t,r);i&&(r.state=i),t.stateAfter=r.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),n===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function pt(e,t,n){var r=e.doc,i=e.display;if(!r.mode.startState)return new ct(r,!0,t);var o=function(e,t,n){for(var r,i,o=e.doc,a=n?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>a;--s){if(s<=o.first)return o.first;var u=qe(o,s-1),l=u.stateAfter;if(l&&(!n||s+(l instanceof lt?l.lookAhead:0)<=o.modeFrontier))return s;var c=F(u.text,null,e.options.tabSize);(null==i||r>c)&&(i=s-1,r=c)}return i}(e,t,n),a=o>r.first&&qe(r,o-1).stateAfter,s=a?ct.fromSaved(r,a,o):new ct(r,He(r.mode),o);return r.iter(o,t,(function(n){ht(e,n.text,s);var r=s.line;n.stateAfter=r==t-1||r%5==0||r>=i.viewFrom&&r<i.viewTo?s.save():null,s.nextLine()})),n&&(r.modeFrontier=s.line),s}function ht(e,t,n,r){var i=e.doc.mode,o=new $e(t,e.options.tabSize,n);for(o.start=o.pos=r||0,""==t&&_t(i,n.state);!o.eol();)mt(i,o,n.state),o.start=o.pos}function _t(e,t){if(e.blankLine)return e.blankLine(t);if(e.innerMode){var n=Ue(e,t);return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function mt(e,t,n,r){for(var i=0;i<10;i++){r&&(r[0]=Ue(e,n).mode);var o=e.token(t,n);if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}ct.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e);return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},ct.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var t=this.baseTokens[this.baseTokenPos+1];return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},ct.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},ct.fromSaved=function(e,t,n){return t instanceof lt?new ct(e,Ve(e.mode,t.state),n,t.lookAhead):new ct(e,Ve(e.mode,t),n)},ct.prototype.save=function(e){var t=!1!==e?Ve(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new lt(t,this.maxLookAhead):t};var gt=function(e,t,n){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=n};function vt(e,t,n,r){var i,o,a=e.doc,s=a.mode,u=qe(a,(t=st(a,t)).line),l=pt(e,t.line,n),c=new $e(u.text,e.options.tabSize,l);for(r&&(o=[]);(r||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=mt(s,c,l.state),r&&o.push(new gt(c,i,Ve(a.mode,l.state)));return r?o:new gt(c,i,l.state)}function yt(e,t){if(e)for(;;){var n=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!n)break;e=e.slice(0,n.index)+e.slice(n.index+n[0].length);var r=n[1]?"bgClass":"textClass";null==t[r]?t[r]=n[2]:new RegExp("(?:^|\\s)"+n[2]+"(?:$|\\s)").test(t[r])||(t[r]+=" "+n[2])}return e}function bt(e,t,n,r,i,o,a){var s=n.flattenSpans;null==s&&(s=e.options.flattenSpans);var u,l=0,c=null,f=new $e(t,e.options.tabSize,r),d=e.options.addModeClass&&[null];for(""==t&&yt(_t(n,r.state),o);!f.eol();){if(f.pos>e.options.maxHighlightLength?(s=!1,a&&ht(e,t,r,f.pos),f.pos=t.length,u=null):u=yt(mt(n,f,r.state,d),o),d){var p=d[0].name;p&&(u="m-"+(u?p+" "+u:p))}if(!s||c!=u){for(;l<f.start;)i(l=Math.min(f.start,l+5e3),c);c=u}f.start=f.pos}for(;l<f.pos;){var h=Math.min(f.pos,l+5e3);i(h,c),l=h}}var wt=!1,xt=!1;function kt(e,t,n){this.marker=e,this.from=t,this.to=n}function Ct(e,t){if(e)for(var n=0;n<e.length;++n){var r=e[n];if(r.marker==t)return r}}function St(e,t){for(var n,r=0;r<e.length;++r)e[r]!=t&&(n||(n=[])).push(e[r]);return n}function Et(e,t){if(t.full)return null;var n=Je(e,t.from.line)&&qe(e,t.from.line).markedSpans,r=Je(e,t.to.line)&&qe(e,t.to.line).markedSpans;if(!n&&!r)return null;var i=t.from.ch,o=t.to.ch,a=0==tt(t.from,t.to),s=function(e,t,n){var r;if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker;if(null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==a.type&&(!n||!o.marker.insertLeft)){var s=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(r||(r=[])).push(new kt(a,o.from,s?null:o.to))}}return r}(n,i,a),u=function(e,t,n){var r;if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker;if(null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==a.type&&(!n||o.marker.insertLeft)){var s=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(r||(r=[])).push(new kt(a,s?null:o.from-t,null==o.to?null:o.to-t))}}return r}(r,o,a),l=1==t.text.length,c=G(t.text).length+(l?i:0);if(s)for(var f=0;f<s.length;++f){var d=s[f];if(null==d.to){var p=Ct(u,d.marker);p?l&&(d.to=null==p.to?null:p.to+c):d.to=i}}if(u)for(var h=0;h<u.length;++h){var _=u[h];null!=_.to&&(_.to+=c),null==_.from?Ct(s,_.marker)||(_.from=c,l&&(s||(s=[])).push(_)):(_.from+=c,l&&(s||(s=[])).push(_))}s&&(s=Tt(s)),u&&u!=s&&(u=Tt(u));var m=[s];if(!l){var g,v=t.text.length-2;if(v>0&&s)for(var y=0;y<s.length;++y)null==s[y].to&&(g||(g=[])).push(new kt(s[y].marker,null,null));for(var b=0;b<v;++b)m.push(g);m.push(u)}return m}function Tt(e){for(var t=0;t<e.length;++t){var n=e[t];null!=n.from&&n.from==n.to&&!1!==n.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Ot(e){var t=e.markedSpans;if(t){for(var n=0;n<t.length;++n)t[n].marker.detachLine(e);e.markedSpans=null}}function Mt(e,t){if(t){for(var n=0;n<t.length;++n)t[n].marker.attachLine(e);e.markedSpans=t}}function Pt(e){return e.inclusiveLeft?-1:0}function jt(e){return e.inclusiveRight?1:0}function At(e,t){var n=e.lines.length-t.lines.length;if(0!=n)return n;var r=e.find(),i=t.find(),o=tt(r.from,i.from)||Pt(e)-Pt(t);if(o)return-o;var a=tt(r.to,i.to)||jt(e)-jt(t);return a||t.id-e.id}function Nt(e,t){var n,r=xt&&e.markedSpans;if(r)for(var i=void 0,o=0;o<r.length;++o)(i=r[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!n||At(n,i.marker)<0)&&(n=i.marker);return n}function Dt(e){return Nt(e,!0)}function Lt(e){return Nt(e,!1)}function Rt(e,t){var n,r=xt&&e.markedSpans;if(r)for(var i=0;i<r.length;++i){var o=r[i];o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!n||At(n,o.marker)<0)&&(n=o.marker)}return n}function It(e,t,n,r,i){var o=qe(e,t),a=xt&&o.markedSpans;if(a)for(var s=0;s<a.length;++s){var u=a[s];if(u.marker.collapsed){var l=u.marker.find(0),c=tt(l.from,n)||Pt(u.marker)-Pt(i),f=tt(l.to,r)||jt(u.marker)-jt(i);if(!(c>=0&&f<=0||c<=0&&f>=0)&&(c<=0&&(u.marker.inclusiveRight&&i.inclusiveLeft?tt(l.to,n)>=0:tt(l.to,n)>0)||c>=0&&(u.marker.inclusiveRight&&i.inclusiveLeft?tt(l.from,r)<=0:tt(l.from,r)<0)))return!0}}}function Ft(e){for(var t;t=Dt(e);)e=t.find(-1,!0).line;return e}function zt(e,t){var n=qe(e,t),r=Ft(n);return n==r?t:Qe(r)}function Wt(e,t){if(t>e.lastLine())return t;var n,r=qe(e,t);if(!Bt(e,r))return t;for(;n=Lt(r);)r=n.find(1,!0).line;return Qe(r)+1}function Bt(e,t){var n=xt&&t.markedSpans;if(n)for(var r=void 0,i=0;i<n.length;++i)if((r=n[i]).marker.collapsed){if(null==r.from)return!0;if(!r.marker.widgetNode&&0==r.from&&r.marker.inclusiveLeft&&Vt(e,t,r))return!0}}function Vt(e,t,n){if(null==n.to){var r=n.marker.find(1,!0);return Vt(e,r.line,Ct(r.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==t.text.length)return!0;for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==n.to&&(null==i.to||i.to!=n.from)&&(i.marker.inclusiveLeft||n.marker.inclusiveRight)&&Vt(e,t,i))return!0}function Ut(e){for(var t=0,n=(e=Ft(e)).parent,r=0;r<n.lines.length;++r){var i=n.lines[r];if(i==e)break;t+=i.height}for(var o=n.parent;o;o=(n=o).parent)for(var a=0;a<o.children.length;++a){var s=o.children[a];if(s==n)break;t+=s.height}return t}function Ht(e){if(0==e.height)return 0;for(var t,n=e.text.length,r=e;t=Dt(r);){var i=t.find(0,!0);r=i.from.line,n+=i.from.ch-i.to.ch}for(r=e;t=Lt(r);){var o=t.find(0,!0);n-=r.text.length-o.from.ch,n+=(r=o.to.line).text.length-o.to.ch}return n}function $t(e){var t=e.display,n=e.doc;t.maxLine=qe(n,n.first),t.maxLineLength=Ht(t.maxLine),t.maxLineChanged=!0,n.iter((function(e){var n=Ht(e);n>t.maxLineLength&&(t.maxLineLength=n,t.maxLine=e)}))}var qt=function(e,t,n){this.text=e,Mt(this,t),this.height=n?n(this):1};function Kt(e){e.parent=null,Ot(e)}qt.prototype.lineNo=function(){return Qe(this)},ve(qt);var Gt={},Xt={};function Qt(e,t){if(!e||/^\s*$/.test(e))return null;var n=t.addModeClass?Xt:Gt;return n[e]||(n[e]=e.replace(/\S+/g,"cm-$&"))}function Yt(e,t){var n=P("span",null,null,u?"padding-right: .1px":null),r={pre:P("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};t.measure={};for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,a=void 0;r.pos=0,r.addToken=Zt,Me(e.display.measure)&&(a=le(o,e.doc.direction))&&(r.addToken=en(r.addToken,a)),r.map=[],nn(o,r,dt(e,o,t!=e.display.externalMeasured&&Qe(o))),o.styleClasses&&(o.styleClasses.bgClass&&(r.bgClass=D(o.styleClasses.bgClass,r.bgClass||"")),o.styleClasses.textClass&&(r.textClass=D(o.styleClasses.textClass,r.textClass||""))),0==r.map.length&&r.map.push(0,0,r.content.appendChild(Oe(e.display.measure))),0==i?(t.measure.map=r.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(r.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(u){var s=r.content.lastChild;(/\bcm-tab\b/.test(s.className)||s.querySelector&&s.querySelector(".cm-tab"))&&(r.content.className="cm-tab-wrap-hack")}return he(e,"renderLine",e,t.line,r.pre),r.pre.className&&(r.textClass=D(r.pre.className,r.textClass||"")),r}function Jt(e){var t=M("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function Zt(e,t,n,r,i,o,u){if(t){var l,c=e.splitSpaces?function(e,t){if(e.length>1&&!/  /.test(e))return e;for(var n=t,r="",i=0;i<e.length;i++){var o=e.charAt(i);" "!=o||!n||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),r+=o,n=" "==o}return r}(t,e.trailingSpace):t,f=e.cm.state.specialChars,d=!1;if(f.test(t)){l=document.createDocumentFragment();for(var p=0;;){f.lastIndex=p;var h=f.exec(t),_=h?h.index-p:t.length-p;if(_){var m=document.createTextNode(c.slice(p,p+_));a&&s<9?l.appendChild(M("span",[m])):l.appendChild(m),e.map.push(e.pos,e.pos+_,m),e.col+=_,e.pos+=_}if(!h)break;p+=_+1;var g=void 0;if("\t"==h[0]){var v=e.cm.options.tabSize,y=v-e.col%v;(g=l.appendChild(M("span",K(y),"cm-tab"))).setAttribute("role","presentation"),g.setAttribute("cm-text","\t"),e.col+=y}else"\r"==h[0]||"\n"==h[0]?((g=l.appendChild(M("span","\r"==h[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",h[0]),e.col+=1):((g=e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text",h[0]),a&&s<9?l.appendChild(M("span",[g])):l.appendChild(g),e.col+=1);e.map.push(e.pos,e.pos+1,g),e.pos++}}else e.col+=t.length,l=document.createTextNode(c),e.map.push(e.pos,e.pos+t.length,l),a&&s<9&&(d=!0),e.pos+=t.length;if(e.trailingSpace=32==c.charCodeAt(t.length-1),n||r||i||d||o||u){var b=n||"";r&&(b+=r),i&&(b+=i);var w=M("span",[l],b,o);if(u)for(var x in u)u.hasOwnProperty(x)&&"style"!=x&&"class"!=x&&w.setAttribute(x,u[x]);return e.content.appendChild(w)}e.content.appendChild(l)}}function en(e,t){return function(n,r,i,o,a,s,u){i=i?i+" cm-force-border":"cm-force-border";for(var l=n.pos,c=l+r.length;;){for(var f=void 0,d=0;d<t.length&&!((f=t[d]).to>l&&f.from<=l);d++);if(f.to>=c)return e(n,r,i,o,a,s,u);e(n,r.slice(0,f.to-l),i,o,null,s,u),o=null,r=r.slice(f.to-l),l=f.to}}}function tn(e,t,n,r){var i=!r&&n.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!r&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",n.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function nn(e,t,n){var r=e.markedSpans,i=e.text,o=0;if(r)for(var a,s,u,l,c,f,d,p=i.length,h=0,_=1,m="",g=0;;){if(g==h){u=l=c=s="",d=null,f=null,g=1/0;for(var v=[],y=void 0,b=0;b<r.length;++b){var w=r[b],x=w.marker;if("bookmark"==x.type&&w.from==h&&x.widgetNode)v.push(x);else if(w.from<=h&&(null==w.to||w.to>h||x.collapsed&&w.to==h&&w.from==h)){if(null!=w.to&&w.to!=h&&g>w.to&&(g=w.to,l=""),x.className&&(u+=" "+x.className),x.css&&(s=(s?s+";":"")+x.css),x.startStyle&&w.from==h&&(c+=" "+x.startStyle),x.endStyle&&w.to==g&&(y||(y=[])).push(x.endStyle,w.to),x.title&&((d||(d={})).title=x.title),x.attributes)for(var k in x.attributes)(d||(d={}))[k]=x.attributes[k];x.collapsed&&(!f||At(f.marker,x)<0)&&(f=w)}else w.from>h&&g>w.from&&(g=w.from)}if(y)for(var C=0;C<y.length;C+=2)y[C+1]==g&&(l+=" "+y[C]);if(!f||f.from==h)for(var S=0;S<v.length;++S)tn(t,0,v[S]);if(f&&(f.from||0)==h){if(tn(t,(null==f.to?p+1:f.to)-h,f.marker,null==f.from),null==f.to)return;f.to==h&&(f=!1)}}if(h>=p)break;for(var E=Math.min(p,g);;){if(m){var T=h+m.length;if(!f){var O=T>E?m.slice(0,E-h):m;t.addToken(t,O,a?a+u:u,c,h+O.length==g?l:"",s,d)}if(T>=E){m=m.slice(E-h),h=E;break}h=T,c=""}m=i.slice(o,o=n[_++]),a=Qt(n[_++],t.cm.options)}}else for(var M=1;M<n.length;M+=2)t.addToken(t,i.slice(o,o=n[M]),Qt(n[M+1],t.cm.options))}function rn(e,t,n){this.line=t,this.rest=function(e){for(var t,n;t=Lt(e);)e=t.find(1,!0).line,(n||(n=[])).push(e);return n}(t),this.size=this.rest?Qe(G(this.rest))-n+1:1,this.node=this.text=null,this.hidden=Bt(e,t)}function on(e,t,n){for(var r,i=[],o=t;o<n;o=r){var a=new rn(e.doc,qe(e.doc,o),o);r=o+a.size,i.push(a)}return i}var an=null,sn=null;function un(e,t){var n=de(e,t);if(n.length){var r,i=Array.prototype.slice.call(arguments,2);an?r=an.delayedCallbacks:sn?r=sn:(r=sn=[],setTimeout(ln,0));for(var o=function(e){r.push((function(){return n[e].apply(null,i)}))},a=0;a<n.length;++a)o(a)}}function ln(){var e=sn;sn=null;for(var t=0;t<e.length;++t)e[t]()}function cn(e,t,n,r){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];"text"==o?pn(e,t):"gutter"==o?_n(e,t,n,r):"class"==o?hn(e,t):"widget"==o&&mn(e,t,r)}t.changes=null}function fn(e){return e.node==e.text&&(e.node=M("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),a&&s<8&&(e.node.style.zIndex=2)),e.node}function dn(e,t){var n=e.display.externalMeasured;return n&&n.line==t.line?(e.display.externalMeasured=null,t.measure=n.measure,n.built):Yt(e,t)}function pn(e,t){var n=t.text.className,r=dn(e,t);t.text==t.node&&(t.node=r.pre),t.text.parentNode.replaceChild(r.pre,t.text),t.text=r.pre,r.bgClass!=t.bgClass||r.textClass!=t.textClass?(t.bgClass=r.bgClass,t.textClass=r.textClass,hn(e,t)):n&&(t.text.className=n)}function hn(e,t){!function(e,t){var n=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass;if(n&&(n+=" CodeMirror-linebackground"),t.background)n?t.background.className=n:(t.background.parentNode.removeChild(t.background),t.background=null);else if(n){var r=fn(t);t.background=r.insertBefore(M("div",null,n),r.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?fn(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="");var n=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass;t.text.className=n||""}function _n(e,t,n,r){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=fn(t);t.gutterBackground=M("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px; width: "+r.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var a=fn(t),s=t.gutter=M("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px");if(e.display.input.setUneditable(s),a.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(M("div",Ze(e.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+r.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var u=0;u<e.display.gutterSpecs.length;++u){var l=e.display.gutterSpecs[u].className,c=o.hasOwnProperty(l)&&o[l];c&&s.appendChild(M("div",[c],"CodeMirror-gutter-elt","left: "+r.gutterLeft[l]+"px; width: "+r.gutterWidth[l]+"px"))}}}function mn(e,t,n){t.alignable&&(t.alignable=null);for(var r=C("CodeMirror-linewidget"),i=t.node.firstChild,o=void 0;i;i=o)o=i.nextSibling,r.test(i.className)&&t.node.removeChild(i);vn(e,t,n)}function gn(e,t,n,r){var i=dn(e,t);return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),hn(e,t),_n(e,t,n,r),vn(e,t,r),t.node}function vn(e,t,n){if(yn(e,t.line,t,n,!0),t.rest)for(var r=0;r<t.rest.length;r++)yn(e,t.rest[r],t,n,!1)}function yn(e,t,n,r,i){if(t.widgets)for(var o=fn(n),a=0,s=t.widgets;a<s.length;++a){var u=s[a],l=M("div",[u.node],"CodeMirror-linewidget"+(u.className?" "+u.className:""));u.handleMouseEvents||l.setAttribute("cm-ignore-events","true"),bn(u,l,n,r),e.display.input.setUneditable(l),i&&u.above?o.insertBefore(l,n.gutter||n.text):o.appendChild(l),un(u,"redraw")}}function bn(e,t,n,r){if(e.noHScroll){(n.alignable||(n.alignable=[])).push(t);var i=r.wrapperWidth;t.style.left=r.fixedPos+"px",e.coverGutter||(i-=r.gutterTotalWidth,t.style.paddingLeft=r.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-r.gutterTotalWidth+"px"))}function wn(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!j(document.body,e.node)){var n="position: relative;";e.coverGutter&&(n+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(n+="width: "+t.display.wrapper.clientWidth+"px;"),O(t.display.measure,M("div",[e.node],null,n))}return e.height=e.node.parentNode.offsetHeight}function xn(e,t){for(var n=ke(t);n!=e.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==e.sizer&&n!=e.mover)return!0}function kn(e){return e.lineSpace.offsetTop}function Cn(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Sn(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=O(e.measure,M("pre","x","CodeMirror-line-like")),n=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,r={left:parseInt(n.paddingLeft),right:parseInt(n.paddingRight)};return isNaN(r.left)||isNaN(r.right)||(e.cachedPaddingH=r),r}function En(e){return 50-e.display.nativeBarWidth}function Tn(e){return e.display.scroller.clientWidth-En(e)-e.display.barWidth}function On(e){return e.display.scroller.clientHeight-En(e)-e.display.barHeight}function Mn(e,t,n){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache};for(var r=0;r<e.rest.length;r++)if(e.rest[r]==t)return{map:e.measure.maps[r],cache:e.measure.caches[r]};for(var i=0;i<e.rest.length;i++)if(Qe(e.rest[i])>n)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function Pn(e,t,n,r){return Nn(e,An(e,t),n,r)}function jn(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[cr(e,t)];var n=e.display.externalMeasured;return n&&t>=n.lineN&&t<n.lineN+n.size?n:void 0}function An(e,t){var n=Qe(t),r=jn(e,n);r&&!r.text?r=null:r&&r.changes&&(cn(e,r,n,or(e)),e.curOp.forceUpdate=!0),r||(r=function(e,t){var n=Qe(t=Ft(t)),r=e.display.externalMeasured=new rn(e.doc,t,n);r.lineN=n;var i=r.built=Yt(e,r);return r.text=i.pre,O(e.display.lineMeasure,i.pre),r}(e,t));var i=Mn(r,t,n);return{line:t,view:r,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Nn(e,t,n,r,i){t.before&&(n=-1);var o,u=n+(r||"");return t.cache.hasOwnProperty(u)?o=t.cache[u]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,n){var r=e.options.lineWrapping,i=r&&Tn(e);if(!t.measure.heights||r&&t.measure.width!=i){var o=t.measure.heights=[];if(r){t.measure.width=i;for(var a=t.text.firstChild.getClientRects(),s=0;s<a.length-1;s++){var u=a[s],l=a[s+1];Math.abs(u.bottom-l.bottom)>2&&o.push((u.bottom+l.top)/2-n.top)}}o.push(n.bottom-n.top)}}(e,t.view,t.rect),t.hasHeights=!0),(o=function(e,t,n,r){var i,o=Rn(t.map,n,r),u=o.node,l=o.start,c=o.end,f=o.collapse;if(3==u.nodeType){for(var d=0;d<4;d++){for(;l&&re(t.line.text.charAt(o.coverStart+l));)--l;for(;o.coverStart+c<o.coverEnd&&re(t.line.text.charAt(o.coverStart+c));)++c;if((i=a&&s<9&&0==l&&c==o.coverEnd-o.coverStart?u.parentNode.getBoundingClientRect():In(S(u,l,c).getClientRects(),r)).left||i.right||0==l)break;c=l,l-=1,f="right"}a&&s<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=De)return De;var t=O(e,M("span","x")),n=t.getBoundingClientRect(),r=S(t,0,1).getBoundingClientRect();return De=Math.abs(n.left-r.left)>1}(e))return t;var n=screen.logicalXDPI/screen.deviceXDPI,r=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*n,right:t.right*n,top:t.top*r,bottom:t.bottom*r}}(e.display.measure,i))}else{var p;l>0&&(f=r="right"),i=e.options.lineWrapping&&(p=u.getClientRects()).length>1?p["right"==r?p.length-1:0]:u.getBoundingClientRect()}if(a&&s<9&&!l&&(!i||!i.left&&!i.right)){var h=u.parentNode.getClientRects()[0];i=h?{left:h.left,right:h.left+ir(e.display),top:h.top,bottom:h.bottom}:Ln}for(var _=i.top-t.rect.top,m=i.bottom-t.rect.top,g=(_+m)/2,v=t.view.measure.heights,y=0;y<v.length-1&&!(g<v[y]);y++);var b=y?v[y-1]:0,w=v[y],x={left:("right"==f?i.right:i.left)-t.rect.left,right:("left"==f?i.left:i.right)-t.rect.left,top:b,bottom:w};return i.left||i.right||(x.bogus=!0),e.options.singleCursorHeightPerLine||(x.rtop=_,x.rbottom=m),x}(e,t,n,r)).bogus||(t.cache[u]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var Dn,Ln={left:0,right:0,top:0,bottom:0};function Rn(e,t,n){for(var r,i,o,a,s,u,l=0;l<e.length;l+=3)if(s=e[l],u=e[l+1],t<s?(i=0,o=1,a="left"):t<u?o=1+(i=t-s):(l==e.length-3||t==u&&e[l+3]>t)&&(i=(o=u-s)-1,t>=u&&(a="right")),null!=i){if(r=e[l+2],s==u&&n==(r.insertLeft?"left":"right")&&(a=n),"left"==n&&0==i)for(;l&&e[l-2]==e[l-3]&&e[l-1].insertLeft;)r=e[2+(l-=3)],a="left";if("right"==n&&i==u-s)for(;l<e.length-3&&e[l+3]==e[l+4]&&!e[l+5].insertLeft;)r=e[(l+=3)+2],a="right";break}return{node:r,start:i,end:o,collapse:a,coverStart:s,coverEnd:u}}function In(e,t){var n=Ln;if("left"==t)for(var r=0;r<e.length&&(n=e[r]).left==n.right;r++);else for(var i=e.length-1;i>=0&&(n=e[i]).left==n.right;i--);return n}function Fn(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function zn(e){e.display.externalMeasure=null,T(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)Fn(e.display.view[t])}function Wn(e){zn(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Bn(){return c&&m?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Vn(){return c&&m?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function Un(e){var t=0;if(e.widgets)for(var n=0;n<e.widgets.length;++n)e.widgets[n].above&&(t+=wn(e.widgets[n]));return t}function Hn(e,t,n,r,i){if(!i){var o=Un(t);n.top+=o,n.bottom+=o}if("line"==r)return n;r||(r="local");var a=Ut(t);if("local"==r?a+=kn(e.display):a-=e.display.viewOffset,"page"==r||"window"==r){var s=e.display.lineSpace.getBoundingClientRect();a+=s.top+("window"==r?0:Vn());var u=s.left+("window"==r?0:Bn());n.left+=u,n.right+=u}return n.top+=a,n.bottom+=a,n}function $n(e,t,n){if("div"==n)return t;var r=t.left,i=t.top;if("page"==n)r-=Bn(),i-=Vn();else if("local"==n||!n){var o=e.display.sizer.getBoundingClientRect();r+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect();return{left:r-a.left,top:i-a.top}}function qn(e,t,n,r,i){return r||(r=qe(e.doc,t.line)),Hn(e,r,Pn(e,r,t.ch,i),n)}function Kn(e,t,n,r,i,o){function a(t,a){var s=Nn(e,i,t,a?"right":"left",o);return a?s.left=s.right:s.right=s.left,Hn(e,r,s,n)}r=r||qe(e.doc,t.line),i||(i=An(e,r));var s=le(r,e.doc.direction),u=t.ch,l=t.sticky;if(u>=r.text.length?(u=r.text.length,l="before"):u<=0&&(u=0,l="after"),!s)return a("before"==l?u-1:u,"before"==l);function c(e,t,n){return a(n?e-1:e,1==s[t].level!=n)}var f=se(s,u,l),d=ae,p=c(u,f,"before"==l);return null!=d&&(p.other=c(u,d,"before"!=l)),p}function Gn(e,t){var n=0;t=st(e.doc,t),e.options.lineWrapping||(n=ir(e.display)*t.ch);var r=qe(e.doc,t.line),i=Ut(r)+kn(e.display);return{left:n,right:n,top:i,bottom:i+r.height}}function Xn(e,t,n,r,i){var o=et(e,t,n);return o.xRel=i,r&&(o.outside=r),o}function Qn(e,t,n){var r=e.doc;if((n+=e.display.viewOffset)<0)return Xn(r.first,0,null,-1,-1);var i=Ye(r,n),o=r.first+r.size-1;if(i>o)return Xn(r.first+r.size-1,qe(r,o).text.length,null,1,1);t<0&&(t=0);for(var a=qe(r,i);;){var s=er(e,a,i,t,n),u=Rt(a,s.ch+(s.xRel>0||s.outside>0?1:0));if(!u)return s;var l=u.find(1);if(l.line==i)return l;a=qe(r,i=l.line)}}function Yn(e,t,n,r){r-=Un(t);var i=t.text.length,o=oe((function(t){return Nn(e,n,t-1).bottom<=r}),i,0);return{begin:o,end:i=oe((function(t){return Nn(e,n,t).top>r}),o,i)}}function Jn(e,t,n,r){return n||(n=An(e,t)),Yn(e,t,n,Hn(e,t,Nn(e,n,r),"line").top)}function Zn(e,t,n,r){return!(e.bottom<=n)&&(e.top>n||(r?e.left:e.right)>t)}function er(e,t,n,r,i){i-=Ut(t);var o=An(e,t),a=Un(t),s=0,u=t.text.length,l=!0,c=le(t,e.doc.direction);if(c){var f=(e.options.lineWrapping?nr:tr)(e,t,n,o,c,r,i);s=(l=1!=f.level)?f.from:f.to-1,u=l?f.to:f.from-1}var d,p,h=null,_=null,m=oe((function(t){var n=Nn(e,o,t);return n.top+=a,n.bottom+=a,!!Zn(n,r,i,!1)&&(n.top<=i&&n.left<=r&&(h=t,_=n),!0)}),s,u),g=!1;if(_){var v=r-_.left<_.right-r,y=v==l;m=h+(y?0:1),p=y?"after":"before",d=v?_.left:_.right}else{l||m!=u&&m!=s||m++,p=0==m?"after":m==t.text.length?"before":Nn(e,o,m-(l?1:0)).bottom+a<=i==l?"after":"before";var b=Kn(e,et(n,m,p),"line",t,o);d=b.left,g=i<b.top?-1:i>=b.bottom?1:0}return Xn(n,m=ie(t.text,m,1),p,g,r-d)}function tr(e,t,n,r,i,o,a){var s=oe((function(s){var u=i[s],l=1!=u.level;return Zn(Kn(e,et(n,l?u.to:u.from,l?"before":"after"),"line",t,r),o,a,!0)}),0,i.length-1),u=i[s];if(s>0){var l=1!=u.level,c=Kn(e,et(n,l?u.from:u.to,l?"after":"before"),"line",t,r);Zn(c,o,a,!0)&&c.top>a&&(u=i[s-1])}return u}function nr(e,t,n,r,i,o,a){var s=Yn(e,t,r,a),u=s.begin,l=s.end;/\s/.test(t.text.charAt(l-1))&&l--;for(var c=null,f=null,d=0;d<i.length;d++){var p=i[d];if(!(p.from>=l||p.to<=u)){var h=Nn(e,r,1!=p.level?Math.min(l,p.to)-1:Math.max(u,p.from)).right,_=h<o?o-h+1e9:h-o;(!c||f>_)&&(c=p,f=_)}}return c||(c=i[i.length-1]),c.from<u&&(c={from:u,to:c.to,level:c.level}),c.to>l&&(c={from:c.from,to:l,level:c.level}),c}function rr(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==Dn){Dn=M("pre",null,"CodeMirror-line-like");for(var t=0;t<49;++t)Dn.appendChild(document.createTextNode("x")),Dn.appendChild(M("br"));Dn.appendChild(document.createTextNode("x"))}O(e.measure,Dn);var n=Dn.offsetHeight/50;return n>3&&(e.cachedTextHeight=n),T(e.measure),n||1}function ir(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=M("span","xxxxxxxxxx"),n=M("pre",[t],"CodeMirror-line-like");O(e.measure,n);var r=t.getBoundingClientRect(),i=(r.right-r.left)/10;return i>2&&(e.cachedCharWidth=i),i||10}function or(e){for(var t=e.display,n={},r={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var s=e.display.gutterSpecs[a].className;n[s]=o.offsetLeft+o.clientLeft+i,r[s]=o.clientWidth}return{fixedPos:ar(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:n,gutterWidth:r,wrapperWidth:t.wrapper.clientWidth}}function ar(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function sr(e){var t=rr(e.display),n=e.options.lineWrapping,r=n&&Math.max(5,e.display.scroller.clientWidth/ir(e.display)-3);return function(i){if(Bt(e.doc,i))return 0;var o=0;if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height);return n?o+(Math.ceil(i.text.length/r)||1)*t:o+t}}function ur(e){var t=e.doc,n=sr(e);t.iter((function(e){var t=n(e);t!=e.height&&Xe(e,t)}))}function lr(e,t,n,r){var i=e.display;if(!n&&"true"==ke(t).getAttribute("cm-not-content"))return null;var o,a,s=i.lineSpace.getBoundingClientRect();try{o=t.clientX-s.left,a=t.clientY-s.top}catch(e){return null}var u,l=Qn(e,o,a);if(r&&l.xRel>0&&(u=qe(e.doc,l.line).text).length==l.ch){var c=F(u,u.length,e.options.tabSize)-u.length;l=et(l.line,Math.max(0,Math.round((o-Sn(e.display).left)/ir(e.display))-c))}return l}function cr(e,t){if(t>=e.display.viewTo)return null;if((t-=e.display.viewFrom)<0)return null;for(var n=e.display.view,r=0;r<n.length;r++)if((t-=n[r].size)<0)return r}function fr(e,t,n,r){null==t&&(t=e.doc.first),null==n&&(n=e.doc.first+e.doc.size),r||(r=0);var i=e.display;if(r&&n<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)xt&&zt(e.doc,t)<i.viewTo&&pr(e);else if(n<=i.viewFrom)xt&&Wt(e.doc,n+r)>i.viewFrom?pr(e):(i.viewFrom+=r,i.viewTo+=r);else if(t<=i.viewFrom&&n>=i.viewTo)pr(e);else if(t<=i.viewFrom){var o=hr(e,n,n+r,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=r):pr(e)}else if(n>=i.viewTo){var a=hr(e,t,t,-1);a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):pr(e)}else{var s=hr(e,t,t,-1),u=hr(e,n,n+r,1);s&&u?(i.view=i.view.slice(0,s.index).concat(on(e,s.lineN,u.lineN)).concat(i.view.slice(u.index)),i.viewTo+=r):pr(e)}var l=i.externalMeasured;l&&(n<l.lineN?l.lineN+=r:t<l.lineN+l.size&&(i.externalMeasured=null))}function dr(e,t,n){e.curOp.viewChanged=!0;var r=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(r.externalMeasured=null),!(t<r.viewFrom||t>=r.viewTo)){var o=r.view[cr(e,t)];if(null!=o.node){var a=o.changes||(o.changes=[]);-1==W(a,n)&&a.push(n)}}}function pr(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function hr(e,t,n,r){var i,o=cr(e,t),a=e.display.view;if(!xt||n==e.doc.first+e.doc.size)return{index:o,lineN:n};for(var s=e.display.viewFrom,u=0;u<o;u++)s+=a[u].size;if(s!=t){if(r>0){if(o==a.length-1)return null;i=s+a[o].size-t,o++}else i=s-t;t+=i,n+=i}for(;zt(e.doc,n)!=n;){if(o==(r<0?0:a.length-1))return null;n+=r*a[o-(r<0?1:0)].size,o+=r}return{index:o,lineN:n}}function _r(e){for(var t=e.display.view,n=0,r=0;r<t.length;r++){var i=t[r];i.hidden||i.node&&!i.changes||++n}return n}function mr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function gr(e,t){void 0===t&&(t=!0);for(var n=e.doc,r={},i=r.cursors=document.createDocumentFragment(),o=r.selection=document.createDocumentFragment(),a=0;a<n.sel.ranges.length;a++)if(t||a!=n.sel.primIndex){var s=n.sel.ranges[a];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var u=s.empty();(u||e.options.showCursorWhenSelecting)&&vr(e,s.head,i),u||br(e,s,o)}}return r}function vr(e,t,n){var r=Kn(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=n.appendChild(M("div"," ","CodeMirror-cursor"));if(i.style.left=r.left+"px",i.style.top=r.top+"px",i.style.height=Math.max(0,r.bottom-r.top)*e.options.cursorHeight+"px",r.other){var o=n.appendChild(M("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));o.style.display="",o.style.left=r.other.left+"px",o.style.top=r.other.top+"px",o.style.height=.85*(r.other.bottom-r.other.top)+"px"}}function yr(e,t){return e.top-t.top||e.left-t.left}function br(e,t,n){var r=e.display,i=e.doc,o=document.createDocumentFragment(),a=Sn(e.display),s=a.left,u=Math.max(r.sizerWidth,Tn(e)-r.sizer.offsetLeft)-a.right,l="ltr"==i.direction;function c(e,t,n,r){t<0&&(t=0),t=Math.round(t),r=Math.round(r),o.appendChild(M("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==n?u-e:n)+"px;\n                             height: "+(r-t)+"px"))}function f(t,n,r){var o,a,f=qe(i,t),d=f.text.length;function p(n,r){return qn(e,et(t,n),"div",f,r)}function h(t,n,r){var i=Jn(e,f,null,t),o="ltr"==n==("after"==r)?"left":"right";return p("after"==r?i.begin:i.end-(/\s/.test(f.text.charAt(i.end-1))?2:1),o)[o]}var _=le(f,i.direction);return function(e,t,n,r){if(!e)return r(t,n,"ltr",0);for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<n&&a.to>t||t==n&&a.to==t)&&(r(Math.max(a.from,t),Math.min(a.to,n),1==a.level?"rtl":"ltr",o),i=!0)}i||r(t,n,"ltr")}(_,n||0,null==r?d:r,(function(e,t,i,f){var m="ltr"==i,g=p(e,m?"left":"right"),v=p(t-1,m?"right":"left"),y=null==n&&0==e,b=null==r&&t==d,w=0==f,x=!_||f==_.length-1;if(v.top-g.top<=3){var k=(l?b:y)&&x,C=(l?y:b)&&w?s:(m?g:v).left,S=k?u:(m?v:g).right;c(C,g.top,S-C,g.bottom)}else{var E,T,O,M;m?(E=l&&y&&w?s:g.left,T=l?u:h(e,i,"before"),O=l?s:h(t,i,"after"),M=l&&b&&x?u:v.right):(E=l?h(e,i,"before"):s,T=!l&&y&&w?u:g.right,O=!l&&b&&x?s:v.left,M=l?h(t,i,"after"):u),c(E,g.top,T-E,g.bottom),g.bottom<v.top&&c(s,g.bottom,null,v.top),c(O,v.top,M-O,v.bottom)}(!o||yr(g,o)<0)&&(o=g),yr(v,o)<0&&(o=v),(!a||yr(g,a)<0)&&(a=g),yr(v,a)<0&&(a=v)})),{start:o,end:a}}var d=t.from(),p=t.to();if(d.line==p.line)f(d.line,d.ch,p.ch);else{var h=qe(i,d.line),_=qe(i,p.line),m=Ft(h)==Ft(_),g=f(d.line,d.ch,m?h.text.length+1:null).end,v=f(p.line,m?0:null,p.ch).start;m&&(g.top<v.top-2?(c(g.right,g.top,null,g.bottom),c(s,v.top,v.left,v.bottom)):c(g.right,g.top,v.left-g.right,g.bottom)),g.bottom<v.top&&c(s,g.bottom,null,v.top)}n.appendChild(o)}function wr(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var n=!0;t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval((function(){e.hasFocus()||Sr(e),t.cursorDiv.style.visibility=(n=!n)?"":"hidden"}),e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function xr(e){e.state.focused||(e.display.input.focus(),Cr(e))}function kr(e){e.state.delayingBlurEvent=!0,setTimeout((function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Sr(e))}),100)}function Cr(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(he(e,"focus",e,t),e.state.focused=!0,N(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),u&&setTimeout((function(){return e.display.input.reset(!0)}),20)),e.display.input.receivedFocus()),wr(e))}function Sr(e,t){e.state.delayingBlurEvent||(e.state.focused&&(he(e,"blur",e,t),e.state.focused=!1,E(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout((function(){e.state.focused||(e.display.shift=!1)}),150))}function Er(e){for(var t=e.display,n=t.lineDiv.offsetTop,r=0;r<t.view.length;r++){var i=t.view[r],o=e.options.lineWrapping,u=void 0,l=0;if(!i.hidden){if(a&&s<8){var c=i.node.offsetTop+i.node.offsetHeight;u=c-n,n=c}else{var f=i.node.getBoundingClientRect();u=f.bottom-f.top,!o&&i.text.firstChild&&(l=i.text.firstChild.getBoundingClientRect().right-f.left-1)}var d=i.line.height-u;if((d>.005||d<-.005)&&(Xe(i.line,u),Tr(i.line),i.rest))for(var p=0;p<i.rest.length;p++)Tr(i.rest[p]);if(l>e.display.sizerWidth){var h=Math.ceil(l/ir(e.display));h>e.display.maxLineLength&&(e.display.maxLineLength=h,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function Tr(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var n=e.widgets[t],r=n.node.parentNode;r&&(n.height=r.offsetHeight)}}function Or(e,t,n){var r=n&&null!=n.top?Math.max(0,n.top):e.scroller.scrollTop;r=Math.floor(r-kn(e));var i=n&&null!=n.bottom?n.bottom:r+e.wrapper.clientHeight,o=Ye(t,r),a=Ye(t,i);if(n&&n.ensure){var s=n.ensure.from.line,u=n.ensure.to.line;s<o?(o=s,a=Ye(t,Ut(qe(t,s))+e.wrapper.clientHeight)):Math.min(u,t.lastLine())>=a&&(o=Ye(t,Ut(qe(t,u))-e.wrapper.clientHeight),a=u)}return{from:o,to:Math.max(a,o+1)}}function Mr(e,t){var n=e.display,r=rr(e.display);t.top<0&&(t.top=0);var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:n.scroller.scrollTop,o=On(e),a={};t.bottom-t.top>o&&(t.bottom=t.top+o);var s=e.doc.height+Cn(n),u=t.top<r,l=t.bottom>s-r;if(t.top<i)a.scrollTop=u?0:t.top;else if(t.bottom>i+o){var c=Math.min(t.top,(l?s:t.bottom)-o);c!=i&&(a.scrollTop=c)}var f=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:n.scroller.scrollLeft,d=Tn(e)-(e.options.fixedGutter?n.gutters.offsetWidth:0),p=t.right-t.left>d;return p&&(t.right=t.left+d),t.left<10?a.scrollLeft=0:t.left<f?a.scrollLeft=Math.max(0,t.left-(p?0:10)):t.right>d+f-3&&(a.scrollLeft=t.right+(p?0:10)-d),a}function Pr(e,t){null!=t&&(Nr(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function jr(e){Nr(e);var t=e.getCursor();e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Ar(e,t,n){null==t&&null==n||Nr(e),null!=t&&(e.curOp.scrollLeft=t),null!=n&&(e.curOp.scrollTop=n)}function Nr(e){var t=e.curOp.scrollToPos;t&&(e.curOp.scrollToPos=null,Dr(e,Gn(e,t.from),Gn(e,t.to),t.margin))}function Dr(e,t,n,r){var i=Mr(e,{left:Math.min(t.left,n.left),top:Math.min(t.top,n.top)-r,right:Math.max(t.right,n.right),bottom:Math.max(t.bottom,n.bottom)+r});Ar(e,i.scrollLeft,i.scrollTop)}function Lr(e,t){Math.abs(e.doc.scrollTop-t)<2||(n||ui(e,{top:t}),Rr(e,t,!0),n&&ui(e),ri(e,100))}function Rr(e,t,n){t=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t)),(e.display.scroller.scrollTop!=t||n)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Ir(e,t,n,r){t=Math.max(0,Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),(n?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!r||(e.doc.scrollLeft=t,fi(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Fr(e){var t=e.display,n=t.gutters.offsetWidth,r=Math.round(e.doc.height+Cn(e.display));return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?n:0,docHeight:r,scrollHeight:r+En(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:n}}var zr=function(e,t,n){this.cm=n;var r=this.vert=M("div",[M("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=M("div",[M("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");r.tabIndex=i.tabIndex=-1,e(r),e(i),fe(r,"scroll",(function(){r.clientHeight&&t(r.scrollTop,"vertical")})),fe(i,"scroll",(function(){i.clientWidth&&t(i.scrollLeft,"horizontal")})),this.checkedZeroWidth=!1,a&&s<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};zr.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,n=e.scrollHeight>e.clientHeight+1,r=e.nativeBarWidth;if(n){this.vert.style.display="block",this.vert.style.bottom=t?r+"px":"0";var i=e.viewHeight-(t?r:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=n?r+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(n?r:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(0==r&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?r:0,bottom:t?r:0}},zr.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},zr.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},zr.prototype.zeroWidthHack=function(){var e=v&&!p?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new z,this.disableVert=new z},zr.prototype.enableZeroWidthBar=function(e,t,n){e.style.pointerEvents="auto",t.set(1e3,(function r(){var i=e.getBoundingClientRect();("vert"==n?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.pointerEvents="none":t.set(1e3,r)}))},zr.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Wr=function(){};function Br(e,t){t||(t=Fr(e));var n=e.display.barWidth,r=e.display.barHeight;Vr(e,t);for(var i=0;i<4&&n!=e.display.barWidth||r!=e.display.barHeight;i++)n!=e.display.barWidth&&e.options.lineWrapping&&Er(e),Vr(e,Fr(e)),n=e.display.barWidth,r=e.display.barHeight}function Vr(e,t){var n=e.display,r=n.scrollbars.update(t);n.sizer.style.paddingRight=(n.barWidth=r.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=r.bottom)+"px",n.heightForcer.style.borderBottom=r.bottom+"px solid transparent",r.right&&r.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=r.bottom+"px",n.scrollbarFiller.style.width=r.right+"px"):n.scrollbarFiller.style.display="",r.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=r.bottom+"px",n.gutterFiller.style.width=t.gutterWidth+"px"):n.gutterFiller.style.display=""}Wr.prototype.update=function(){return{bottom:0,right:0}},Wr.prototype.setScrollLeft=function(){},Wr.prototype.setScrollTop=function(){},Wr.prototype.clear=function(){};var Ur={native:zr,null:Wr};function Hr(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&E(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ur[e.options.scrollbarStyle]((function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),fe(t,"mousedown",(function(){e.state.focused&&setTimeout((function(){return e.display.input.focus()}),0)})),t.setAttribute("cm-not-content","true")}),(function(t,n){"horizontal"==n?Ir(e,t):Lr(e,t)}),e),e.display.scrollbars.addClass&&N(e.display.wrapper,e.display.scrollbars.addClass)}var $r=0;function qr(e){var t;e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++$r},t=e.curOp,an?an.ops.push(t):t.ownsGroup=an={ops:[t],delayedCallbacks:[]}}function Kr(e){var t=e.curOp;t&&function(e,t){var n=e.ownsGroup;if(n)try{!function(e){var t=e.delayedCallbacks,n=0;do{for(;n<t.length;n++)t[n].call(null);for(var r=0;r<e.ops.length;r++){var i=e.ops[r];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(n<t.length)}(n)}finally{an=null,t(n)}}(t,(function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;!function(e){for(var t=e.ops,n=0;n<t.length;n++)Gr(t[n]);for(var r=0;r<t.length;r++)Xr(t[r]);for(var i=0;i<t.length;i++)Qr(t[i]);for(var o=0;o<t.length;o++)Yr(t[o]);for(var a=0;a<t.length;a++)Jr(t[a])}(e)}))}function Gr(e){var t=e.cm,n=t.display;!function(e){var t=e.display;!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=En(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=En(e)+"px",t.scrollbarsClipped=!0)}(t),e.updateMaxLine&&$t(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<n.viewFrom||e.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new oi(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Xr(e){e.updatedDisplay=e.mustUpdate&&ai(e.cm,e.update)}function Qr(e){var t=e.cm,n=t.display;e.updatedDisplay&&Er(t),e.barMeasure=Fr(t),n.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Pn(t,n.maxLine,n.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+e.adjustWidthTo+En(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+e.adjustWidthTo-Tn(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=n.input.prepareSelection())}function Yr(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Ir(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var n=e.focus&&e.focus==A();e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,n),(e.updatedDisplay||e.startHeight!=t.doc.height)&&Br(t,e.barMeasure),e.updatedDisplay&&ci(t,e.barMeasure),e.selectionChanged&&wr(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),n&&xr(e.cm)}function Jr(e){var t=e.cm,n=t.display,r=t.doc;e.updatedDisplay&&si(t,e.update),null==n.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null!=e.scrollTop&&Rr(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Ir(t,e.scrollLeft,!0,!0),e.scrollToPos&&function(e,t){if(!_e(e,"scrollCursorIntoView")){var n=e.display,r=n.sizer.getBoundingClientRect(),i=null;if(t.top+r.top<0?i=!0:t.bottom+r.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!h){var o=M("div","​",null,"position: absolute;\n                         top: "+(t.top-n.viewOffset-kn(e.display))+"px;\n                         height: "+(t.bottom-t.top+En(e)+n.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;");e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}(t,function(e,t,n,r){var i;null==r&&(r=0),e.options.lineWrapping||t!=n||(n="before"==(t=t.ch?et(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?et(t.line,t.ch+1,"before"):t);for(var o=0;o<5;o++){var a=!1,s=Kn(e,t),u=n&&n!=t?Kn(e,n):s,l=Mr(e,i={left:Math.min(s.left,u.left),top:Math.min(s.top,u.top)-r,right:Math.max(s.left,u.left),bottom:Math.max(s.bottom,u.bottom)+r}),c=e.doc.scrollTop,f=e.doc.scrollLeft;if(null!=l.scrollTop&&(Lr(e,l.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(a=!0)),null!=l.scrollLeft&&(Ir(e,l.scrollLeft),Math.abs(e.doc.scrollLeft-f)>1&&(a=!0)),!a)break}return i}(t,st(r,e.scrollToPos.from),st(r,e.scrollToPos.to),e.scrollToPos.margin));var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers;if(i)for(var a=0;a<i.length;++a)i[a].lines.length||he(i[a],"hide");if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&he(o[s],"unhide");n.wrapper.offsetHeight&&(r.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&he(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function Zr(e,t){if(e.curOp)return t();qr(e);try{return t()}finally{Kr(e)}}function ei(e,t){return function(){if(e.curOp)return t.apply(e,arguments);qr(e);try{return t.apply(e,arguments)}finally{Kr(e)}}}function ti(e){return function(){if(this.curOp)return e.apply(this,arguments);qr(this);try{return e.apply(this,arguments)}finally{Kr(this)}}}function ni(e){return function(){var t=this.cm;if(!t||t.curOp)return e.apply(this,arguments);qr(t);try{return e.apply(this,arguments)}finally{Kr(t)}}}function ri(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,R(ii,e))}function ii(e){var t=e.doc;if(!(t.highlightFrontier>=e.display.viewTo)){var n=+new Date+e.options.workTime,r=pt(e,t.highlightFrontier),i=[];t.iter(r.line,Math.min(t.first+t.size,e.display.viewTo+500),(function(o){if(r.line>=e.display.viewFrom){var a=o.styles,s=o.text.length>e.options.maxHighlightLength?Ve(t.mode,r.state):null,u=ft(e,o,r,!0);s&&(r.state=s),o.styles=u.styles;var l=o.styleClasses,c=u.classes;c?o.styleClasses=c:l&&(o.styleClasses=null);for(var f=!a||a.length!=o.styles.length||l!=c&&(!l||!c||l.bgClass!=c.bgClass||l.textClass!=c.textClass),d=0;!f&&d<a.length;++d)f=a[d]!=o.styles[d];f&&i.push(r.line),o.stateAfter=r.save(),r.nextLine()}else o.text.length<=e.options.maxHighlightLength&&ht(e,o.text,r),o.stateAfter=r.line%5==0?r.save():null,r.nextLine();if(+new Date>n)return ri(e,e.options.workDelay),!0})),t.highlightFrontier=r.line,t.modeFrontier=Math.max(t.modeFrontier,r.line),i.length&&Zr(e,(function(){for(var t=0;t<i.length;t++)dr(e,i[t],"text")}))}}var oi=function(e,t,n){var r=e.display;this.viewport=t,this.visible=Or(r,e.doc,t),this.editorIsHidden=!r.wrapper.offsetWidth,this.wrapperHeight=r.wrapper.clientHeight,this.wrapperWidth=r.wrapper.clientWidth,this.oldDisplayWidth=Tn(e),this.force=n,this.dims=or(e),this.events=[]};function ai(e,t){var n=e.display,r=e.doc;if(t.editorIsHidden)return pr(e),!1;if(!t.force&&t.visible.from>=n.viewFrom&&t.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==_r(e))return!1;di(e)&&(pr(e),t.dims=or(e));var i=r.first+r.size,o=Math.max(t.visible.from-e.options.viewportMargin,r.first),a=Math.min(i,t.visible.to+e.options.viewportMargin);n.viewFrom<o&&o-n.viewFrom<20&&(o=Math.max(r.first,n.viewFrom)),n.viewTo>a&&n.viewTo-a<20&&(a=Math.min(i,n.viewTo)),xt&&(o=zt(e.doc,o),a=Wt(e.doc,a));var s=o!=n.viewFrom||a!=n.viewTo||n.lastWrapHeight!=t.wrapperHeight||n.lastWrapWidth!=t.wrapperWidth;!function(e,t,n){var r=e.display;0==r.view.length||t>=r.viewTo||n<=r.viewFrom?(r.view=on(e,t,n),r.viewFrom=t):(r.viewFrom>t?r.view=on(e,t,r.viewFrom).concat(r.view):r.viewFrom<t&&(r.view=r.view.slice(cr(e,t))),r.viewFrom=t,r.viewTo<n?r.view=r.view.concat(on(e,r.viewTo,n)):r.viewTo>n&&(r.view=r.view.slice(0,cr(e,n)))),r.viewTo=n}(e,o,a),n.viewOffset=Ut(qe(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px";var l=_r(e);if(!s&&0==l&&!t.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1;var c=function(e){if(e.hasFocus())return null;var t=A();if(!t||!j(e.display.lineDiv,t))return null;var n={activeElt:t};if(window.getSelection){var r=window.getSelection();r.anchorNode&&r.extend&&j(e.display.lineDiv,r.anchorNode)&&(n.anchorNode=r.anchorNode,n.anchorOffset=r.anchorOffset,n.focusNode=r.focusNode,n.focusOffset=r.focusOffset)}return n}(e);return l>4&&(n.lineDiv.style.display="none"),function(e,t,n){var r=e.display,i=e.options.lineNumbers,o=r.lineDiv,a=o.firstChild;function s(t){var n=t.nextSibling;return u&&v&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),n}for(var l=r.view,c=r.viewFrom,f=0;f<l.length;f++){var d=l[f];if(d.hidden);else if(d.node&&d.node.parentNode==o){for(;a!=d.node;)a=s(a);var p=i&&null!=t&&t<=c&&d.lineNumber;d.changes&&(W(d.changes,"gutter")>-1&&(p=!1),cn(e,d,c,n)),p&&(T(d.lineNumber),d.lineNumber.appendChild(document.createTextNode(Ze(e.options,c)))),a=d.node.nextSibling}else{var h=gn(e,d,c,n);o.insertBefore(h,a)}c+=d.size}for(;a;)a=s(a)}(e,n.updateLineNumbers,t.dims),l>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,function(e){if(e&&e.activeElt&&e.activeElt!=A()&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&j(document.body,e.anchorNode)&&j(document.body,e.focusNode))){var t=window.getSelection(),n=document.createRange();n.setEnd(e.anchorNode,e.anchorOffset),n.collapse(!1),t.removeAllRanges(),t.addRange(n),t.extend(e.focusNode,e.focusOffset)}}(c),T(n.cursorDiv),T(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,s&&(n.lastWrapHeight=t.wrapperHeight,n.lastWrapWidth=t.wrapperWidth,ri(e,400)),n.updateLineNumbers=null,!0}function si(e,t){for(var n=t.viewport,r=!0;;r=!1){if(r&&e.options.lineWrapping&&t.oldDisplayWidth!=Tn(e))r&&(t.visible=Or(e.display,e.doc,n));else if(n&&null!=n.top&&(n={top:Math.min(e.doc.height+Cn(e.display)-On(e),n.top)}),t.visible=Or(e.display,e.doc,n),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break;if(!ai(e,t))break;Er(e);var i=Fr(e);mr(e),Br(e,i),ci(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function ui(e,t){var n=new oi(e,t);if(ai(e,n)){Er(e),si(e,n);var r=Fr(e);mr(e),Br(e,r),ci(e,r),n.finish()}}function li(e){var t=e.gutters.offsetWidth;e.sizer.style.marginLeft=t+"px"}function ci(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+En(e)+"px"}function fi(e){var t=e.display,n=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var r=ar(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=r+"px",a=0;a<n.length;a++)if(!n[a].hidden){e.options.fixedGutter&&(n[a].gutter&&(n[a].gutter.style.left=o),n[a].gutterBackground&&(n[a].gutterBackground.style.left=o));var s=n[a].alignable;if(s)for(var u=0;u<s.length;u++)s[u].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=r+i+"px")}}function di(e){if(!e.options.lineNumbers)return!1;var t=e.doc,n=Ze(e.options,t.first+t.size-1),r=e.display;if(n.length!=r.lineNumChars){var i=r.measure.appendChild(M("div",[M("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,a=i.offsetWidth-o;return r.lineGutter.style.width="",r.lineNumInnerWidth=Math.max(o,r.lineGutter.offsetWidth-a)+1,r.lineNumWidth=r.lineNumInnerWidth+a,r.lineNumChars=r.lineNumInnerWidth?n.length:-1,r.lineGutter.style.width=r.lineNumWidth+"px",li(e.display),!0}return!1}function pi(e,t){for(var n=[],r=!1,i=0;i<e.length;i++){var o=e[i],a=null;if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue;r=!0}n.push({className:o,style:a})}return t&&!r&&n.push({className:"CodeMirror-linenumbers",style:null}),n}function hi(e){var t=e.gutters,n=e.gutterSpecs;T(t),e.lineGutter=null;for(var r=0;r<n.length;++r){var i=n[r],o=i.className,a=i.style,s=t.appendChild(M("div",null,"CodeMirror-gutter "+o));a&&(s.style.cssText=a),"CodeMirror-linenumbers"==o&&(e.lineGutter=s,s.style.width=(e.lineNumWidth||1)+"px")}t.style.display=n.length?"":"none",li(e)}function _i(e){hi(e.display),fr(e),fi(e)}function mi(e,t,r,i){var o=this;this.input=r,o.scrollbarFiller=M("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=M("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=P("div",null,"CodeMirror-code"),o.selectionDiv=M("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=M("div",null,"CodeMirror-cursors"),o.measure=M("div",null,"CodeMirror-measure"),o.lineMeasure=M("div",null,"CodeMirror-measure"),o.lineSpace=P("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var l=P("div",[o.lineSpace],"CodeMirror-lines");o.mover=M("div",[l],null,"position: relative"),o.sizer=M("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=M("div",null,null,"position: absolute; height: 50px; width: 1px;"),o.gutters=M("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=M("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=M("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),a&&s<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),u||n&&g||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=pi(i.gutters,i.lineNumbers),hi(o),r.init(o)}oi.prototype.signal=function(e,t){ge(e,t)&&this.events.push(arguments)},oi.prototype.finish=function(){for(var e=0;e<this.events.length;e++)he.apply(null,this.events[e])};var gi=0,vi=null;function yi(e){var t=e.wheelDeltaX,n=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==n&&e.detail&&e.axis==e.VERTICAL_AXIS?n=e.detail:null==n&&(n=e.wheelDelta),{x:t,y:n}}function bi(e){var t=yi(e);return t.x*=vi,t.y*=vi,t}function wi(e,t){var r=yi(t),i=r.x,o=r.y,a=e.display,s=a.scroller,l=s.scrollWidth>s.clientWidth,c=s.scrollHeight>s.clientHeight;if(i&&l||o&&c){if(o&&v&&u)e:for(var d=t.target,p=a.view;d!=s;d=d.parentNode)for(var h=0;h<p.length;h++)if(p[h].node==d){e.display.currentWheelTarget=d;break e}if(i&&!n&&!f&&null!=vi)return o&&c&&Lr(e,Math.max(0,s.scrollTop+o*vi)),Ir(e,Math.max(0,s.scrollLeft+i*vi)),(!o||o&&c)&&ye(t),void(a.wheelStartX=null);if(o&&null!=vi){var _=o*vi,m=e.doc.scrollTop,g=m+a.wrapper.clientHeight;_<0?m=Math.max(0,m+_-50):g=Math.min(e.doc.height,g+_+50),ui(e,{top:m,bottom:g})}gi<20&&(null==a.wheelStartX?(a.wheelStartX=s.scrollLeft,a.wheelStartY=s.scrollTop,a.wheelDX=i,a.wheelDY=o,setTimeout((function(){if(null!=a.wheelStartX){var e=s.scrollLeft-a.wheelStartX,t=s.scrollTop-a.wheelStartY,n=t&&a.wheelDY&&t/a.wheelDY||e&&a.wheelDX&&e/a.wheelDX;a.wheelStartX=a.wheelStartY=null,n&&(vi=(vi*gi+n)/(gi+1),++gi)}}),200)):(a.wheelDX+=i,a.wheelDY+=o))}}a?vi=-.53:n?vi=15:c?vi=-.7:d&&(vi=-1/3);var xi=function(e,t){this.ranges=e,this.primIndex=t};xi.prototype.primary=function(){return this.ranges[this.primIndex]},xi.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var t=0;t<this.ranges.length;t++){var n=this.ranges[t],r=e.ranges[t];if(!nt(n.anchor,r.anchor)||!nt(n.head,r.head))return!1}return!0},xi.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new ki(rt(this.ranges[t].anchor),rt(this.ranges[t].head));return new xi(e,this.primIndex)},xi.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},xi.prototype.contains=function(e,t){t||(t=e);for(var n=0;n<this.ranges.length;n++){var r=this.ranges[n];if(tt(t,r.from())>=0&&tt(e,r.to())<=0)return n}return-1};var ki=function(e,t){this.anchor=e,this.head=t};function Ci(e,t,n){var r=e&&e.options.selectionsMayTouch,i=t[n];t.sort((function(e,t){return tt(e.from(),t.from())})),n=W(t,i);for(var o=1;o<t.length;o++){var a=t[o],s=t[o-1],u=tt(s.to(),a.from());if(r&&!a.empty()?u>0:u>=0){var l=ot(s.from(),a.from()),c=it(s.to(),a.to()),f=s.empty()?a.from()==a.head:s.from()==s.head;o<=n&&--n,t.splice(--o,2,new ki(f?c:l,f?l:c))}}return new xi(t,n)}function Si(e,t){return new xi([new ki(e,t||e)],0)}function Ei(e){return e.text?et(e.from.line+e.text.length-1,G(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Ti(e,t){if(tt(e,t.from)<0)return e;if(tt(e,t.to)<=0)return Ei(t);var n=e.line+t.text.length-(t.to.line-t.from.line)-1,r=e.ch;return e.line==t.to.line&&(r+=Ei(t).ch-t.to.ch),et(n,r)}function Oi(e,t){for(var n=[],r=0;r<e.sel.ranges.length;r++){var i=e.sel.ranges[r];n.push(new ki(Ti(i.anchor,t),Ti(i.head,t)))}return Ci(e.cm,n,e.sel.primIndex)}function Mi(e,t,n){return e.line==t.line?et(n.line,e.ch-t.ch+n.ch):et(n.line+(e.line-t.line),e.ch)}function Pi(e){e.doc.mode=ze(e.options,e.doc.modeOption),ji(e)}function ji(e){e.doc.iter((function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)})),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,ri(e,100),e.state.modeGen++,e.curOp&&fr(e)}function Ai(e,t){return 0==t.from.ch&&0==t.to.ch&&""==G(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Ni(e,t,n,r){function i(e){return n?n[e]:null}function o(e,n,i){!function(e,t,n,r){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Ot(e),Mt(e,n);var i=r?r(e):1;i!=e.height&&Xe(e,i)}(e,n,i,r),un(e,"change",e,t)}function a(e,t){for(var n=[],o=e;o<t;++o)n.push(new qt(l[o],i(o),r));return n}var s=t.from,u=t.to,l=t.text,c=qe(e,s.line),f=qe(e,u.line),d=G(l),p=i(l.length-1),h=u.line-s.line;if(t.full)e.insert(0,a(0,l.length)),e.remove(l.length,e.size-l.length);else if(Ai(e,t)){var _=a(0,l.length-1);o(f,f.text,p),h&&e.remove(s.line,h),_.length&&e.insert(s.line,_)}else if(c==f)if(1==l.length)o(c,c.text.slice(0,s.ch)+d+c.text.slice(u.ch),p);else{var m=a(1,l.length-1);m.push(new qt(d+c.text.slice(u.ch),p,r)),o(c,c.text.slice(0,s.ch)+l[0],i(0)),e.insert(s.line+1,m)}else if(1==l.length)o(c,c.text.slice(0,s.ch)+l[0]+f.text.slice(u.ch),i(0)),e.remove(s.line+1,h);else{o(c,c.text.slice(0,s.ch)+l[0],i(0)),o(f,d+f.text.slice(u.ch),p);var g=a(1,l.length-1);h>1&&e.remove(s.line+1,h-1),e.insert(s.line+1,g)}un(e,"change",e,t)}function Di(e,t,n){!function e(r,i,o){if(r.linked)for(var a=0;a<r.linked.length;++a){var s=r.linked[a];if(s.doc!=i){var u=o&&s.sharedHist;n&&!u||(t(s.doc,u),e(s.doc,r,u))}}}(e,null,!0)}function Li(e,t){if(t.cm)throw new Error("This document is already in use.");e.doc=t,t.cm=e,ur(e),Pi(e),Ri(e),e.options.lineWrapping||$t(e),e.options.mode=t.modeOption,fr(e)}function Ri(e){("rtl"==e.doc.direction?N:E)(e.display.lineDiv,"CodeMirror-rtl")}function Ii(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Fi(e,t){var n={from:rt(t.from),to:Ei(t),text:Ke(e,t.from,t.to)};return Ui(e,n,t.from.line,t.to.line+1),Di(e,(function(e){return Ui(e,n,t.from.line,t.to.line+1)}),!0),n}function zi(e){for(;e.length&&G(e).ranges;)e.pop()}function Wi(e,t,n,r){var i=e.history;i.undone.length=0;var o,a,s=+new Date;if((i.lastOp==r||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>s-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=function(e,t){return t?(zi(e.done),G(e.done)):e.done.length&&!G(e.done).ranges?G(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),G(e.done)):void 0}(i,i.lastOp==r)))a=G(o.changes),0==tt(t.from,t.to)&&0==tt(t.from,a.to)?a.to=Ei(t):o.changes.push(Fi(e,t));else{var u=G(i.done);for(u&&u.ranges||Vi(e.sel,i.done),o={changes:[Fi(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(n),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=r,i.lastOrigin=i.lastSelOrigin=t.origin,a||he(e,"historyAdded")}function Bi(e,t,n,r){var i=e.history,o=r&&r.origin;n==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(e,t,n,r){var i=t.charAt(0);return"*"==i||"+"==i&&n.ranges.length==r.ranges.length&&n.somethingSelected()==r.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,G(i.done),t))?i.done[i.done.length-1]=t:Vi(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=n,r&&!1!==r.clearRedo&&zi(i.undone)}function Vi(e,t){var n=G(t);n&&n.ranges&&n.equals(e)||t.push(e)}function Ui(e,t,n,r){var i=t["spans_"+e.id],o=0;e.iter(Math.max(e.first,n),Math.min(e.first+e.size,r),(function(n){n.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=n.markedSpans),++o}))}function Hi(e){if(!e)return null;for(var t,n=0;n<e.length;++n)e[n].marker.explicitlyCleared?t||(t=e.slice(0,n)):t&&t.push(e[n]);return t?t.length?t:null:e}function $i(e,t){var n=function(e,t){var n=t["spans_"+e.id];if(!n)return null;for(var r=[],i=0;i<t.text.length;++i)r.push(Hi(n[i]));return r}(e,t),r=Et(e,t);if(!n)return r;if(!r)return n;for(var i=0;i<n.length;++i){var o=n[i],a=r[i];if(o&&a)e:for(var s=0;s<a.length;++s){for(var u=a[s],l=0;l<o.length;++l)if(o[l].marker==u.marker)continue e;o.push(u)}else a&&(n[i]=a)}return n}function qi(e,t,n){for(var r=[],i=0;i<e.length;++i){var o=e[i];if(o.ranges)r.push(n?xi.prototype.deepCopy.call(o):o);else{var a=o.changes,s=[];r.push({changes:s});for(var u=0;u<a.length;++u){var l=a[u],c=void 0;if(s.push({from:l.from,to:l.to,text:l.text}),t)for(var f in l)(c=f.match(/^spans_(\d+)$/))&&W(t,Number(c[1]))>-1&&(G(s)[f]=l[f],delete l[f])}}}return r}function Ki(e,t,n,r){if(r){var i=e.anchor;if(n){var o=tt(t,i)<0;o!=tt(n,i)<0?(i=t,t=n):o!=tt(t,n)<0&&(t=n)}return new ki(i,t)}return new ki(n||t,t)}function Gi(e,t,n,r,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),Zi(e,new xi([Ki(e.sel.primary(),t,n,i)],0),r)}function Xi(e,t,n){for(var r=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)r[o]=Ki(e.sel.ranges[o],t[o],null,i);Zi(e,Ci(e.cm,r,e.sel.primIndex),n)}function Qi(e,t,n,r){var i=e.sel.ranges.slice(0);i[t]=n,Zi(e,Ci(e.cm,i,e.sel.primIndex),r)}function Yi(e,t,n,r){Zi(e,Si(t,n),r)}function Ji(e,t,n){var r=e.history.done,i=G(r);i&&i.ranges?(r[r.length-1]=t,eo(e,t,n)):Zi(e,t,n)}function Zi(e,t,n){eo(e,t,n),Bi(e,e.sel,e.cm?e.cm.curOp.id:NaN,n)}function eo(e,t,n){(ge(e,"beforeSelectionChange")||e.cm&&ge(e.cm,"beforeSelectionChange"))&&(t=function(e,t,n){var r={ranges:t.ranges,update:function(t){this.ranges=[];for(var n=0;n<t.length;n++)this.ranges[n]=new ki(st(e,t[n].anchor),st(e,t[n].head))},origin:n&&n.origin};return he(e,"beforeSelectionChange",e,r),e.cm&&he(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?Ci(e.cm,r.ranges,r.ranges.length-1):t}(e,t,n));var r=n&&n.bias||(tt(t.primary().head,e.sel.primary().head)<0?-1:1);to(e,ro(e,t,r,!0)),n&&!1===n.scroll||!e.cm||jr(e.cm)}function to(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,me(e.cm)),un(e,"cursorActivity",e))}function no(e){to(e,ro(e,e.sel,null,!1))}function ro(e,t,n,r){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],u=oo(e,a.anchor,s&&s.anchor,n,r),l=oo(e,a.head,s&&s.head,n,r);(i||u!=a.anchor||l!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new ki(u,l))}return i?Ci(e.cm,i,t.primIndex):t}function io(e,t,n,r,i){var o=qe(e,t.line);if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var s=o.markedSpans[a],u=s.marker,l="selectLeft"in u?!u.selectLeft:u.inclusiveLeft,c="selectRight"in u?!u.selectRight:u.inclusiveRight;if((null==s.from||(l?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(c?s.to>=t.ch:s.to>t.ch))){if(i&&(he(u,"beforeCursorEnter"),u.explicitlyCleared)){if(o.markedSpans){--a;continue}break}if(!u.atomic)continue;if(n){var f=u.find(r<0?1:-1),d=void 0;if((r<0?c:l)&&(f=ao(e,f,-r,f&&f.line==t.line?o:null)),f&&f.line==t.line&&(d=tt(f,n))&&(r<0?d<0:d>0))return io(e,f,t,r,i)}var p=u.find(r<0?-1:1);return(r<0?l:c)&&(p=ao(e,p,r,p.line==t.line?o:null)),p?io(e,p,t,r,i):null}}return t}function oo(e,t,n,r,i){var o=r||1,a=io(e,t,n,o,i)||!i&&io(e,t,n,o,!0)||io(e,t,n,-o,i)||!i&&io(e,t,n,-o,!0);return a||(e.cantEdit=!0,et(e.first,0))}function ao(e,t,n,r){return n<0&&0==t.ch?t.line>e.first?st(e,et(t.line-1)):null:n>0&&t.ch==(r||qe(e,t.line)).text.length?t.line<e.first+e.size-1?et(t.line+1,0):null:new et(t.line,t.ch+n)}function so(e){e.setSelection(et(e.firstLine(),0),et(e.lastLine()),V)}function uo(e,t,n){var r={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return r.canceled=!0}};return n&&(r.update=function(t,n,i,o){t&&(r.from=st(e,t)),n&&(r.to=st(e,n)),i&&(r.text=i),void 0!==o&&(r.origin=o)}),he(e,"beforeChange",e,r),e.cm&&he(e.cm,"beforeChange",e.cm,r),r.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:r.from,to:r.to,text:r.text,origin:r.origin}}function lo(e,t,n){if(e.cm){if(!e.cm.curOp)return ei(e.cm,lo)(e,t,n);if(e.cm.state.suppressEdits)return}if(!(ge(e,"beforeChange")||e.cm&&ge(e.cm,"beforeChange"))||(t=uo(e,t,!0))){var r=wt&&!n&&function(e,t,n){var r=null;if(e.iter(t.line,n.line+1,(function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var n=e.markedSpans[t].marker;!n.readOnly||r&&-1!=W(r,n)||(r||(r=[])).push(n)}})),!r)return null;for(var i=[{from:t,to:n}],o=0;o<r.length;++o)for(var a=r[o],s=a.find(0),u=0;u<i.length;++u){var l=i[u];if(!(tt(l.to,s.from)<0||tt(l.from,s.to)>0)){var c=[u,1],f=tt(l.from,s.from),d=tt(l.to,s.to);(f<0||!a.inclusiveLeft&&!f)&&c.push({from:l.from,to:s.from}),(d>0||!a.inclusiveRight&&!d)&&c.push({from:s.to,to:l.to}),i.splice.apply(i,c),u+=c.length-3}}return i}(e,t.from,t.to);if(r)for(var i=r.length-1;i>=0;--i)co(e,{from:r[i].from,to:r[i].to,text:i?[""]:t.text,origin:t.origin});else co(e,t)}}function co(e,t){if(1!=t.text.length||""!=t.text[0]||0!=tt(t.from,t.to)){var n=Oi(e,t);Wi(e,t,n,e.cm?e.cm.curOp.id:NaN),ho(e,t,n,Et(e,t));var r=[];Di(e,(function(e,n){n||-1!=W(r,e.history)||(vo(e.history,t),r.push(e.history)),ho(e,t,null,Et(e,t))}))}}function fo(e,t,n){var r=e.cm&&e.cm.state.suppressEdits;if(!r||n){for(var i,o=e.history,a=e.sel,s="undo"==t?o.done:o.undone,u="undo"==t?o.undone:o.done,l=0;l<s.length&&(i=s[l],n?!i.ranges||i.equals(e.sel):i.ranges);l++);if(l!=s.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(!(i=s.pop()).ranges){if(r)return void s.push(i);break}if(Vi(i,u),n&&!i.equals(e.sel))return void Zi(e,i,{clearRedo:!1});a=i}var c=[];Vi(a,u),u.push({changes:c,generation:o.generation}),o.generation=i.generation||++o.maxGeneration;for(var f=ge(e,"beforeChange")||e.cm&&ge(e.cm,"beforeChange"),d=function(n){var r=i.changes[n];if(r.origin=t,f&&!uo(e,r,!1))return s.length=0,{};c.push(Fi(e,r));var o=n?Oi(e,r):G(s);ho(e,r,o,$i(e,r)),!n&&e.cm&&e.cm.scrollIntoView({from:r.from,to:Ei(r)});var a=[];Di(e,(function(e,t){t||-1!=W(a,e.history)||(vo(e.history,r),a.push(e.history)),ho(e,r,null,$i(e,r))}))},p=i.changes.length-1;p>=0;--p){var h=d(p);if(h)return h.v}}}}function po(e,t){if(0!=t&&(e.first+=t,e.sel=new xi(X(e.sel.ranges,(function(e){return new ki(et(e.anchor.line+t,e.anchor.ch),et(e.head.line+t,e.head.ch))})),e.sel.primIndex),e.cm)){fr(e.cm,e.first,e.first-t,t);for(var n=e.cm.display,r=n.viewFrom;r<n.viewTo;r++)dr(e.cm,r,"gutter")}}function ho(e,t,n,r){if(e.cm&&!e.cm.curOp)return ei(e.cm,ho)(e,t,n,r);if(t.to.line<e.first)po(e,t.text.length-1-(t.to.line-t.from.line));else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);po(e,i),t={from:et(e.first,0),to:et(t.to.line+i,t.to.ch),text:[G(t.text)],origin:t.origin}}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:et(o,qe(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Ke(e,t.from,t.to),n||(n=Oi(e,t)),e.cm?function(e,t,n){var r=e.doc,i=e.display,o=t.from,a=t.to,s=!1,u=o.line;e.options.lineWrapping||(u=Qe(Ft(qe(r,o.line))),r.iter(u,a.line+1,(function(e){if(e==i.maxLine)return s=!0,!0}))),r.sel.contains(t.from,t.to)>-1&&me(e),Ni(r,t,n,sr(e)),e.options.lineWrapping||(r.iter(u,o.line+t.text.length,(function(e){var t=Ht(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)})),s&&(e.curOp.updateMaxLine=!0)),function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var n=e.first,r=t-1;r>n;r--){var i=qe(e,r).stateAfter;if(i&&(!(i instanceof lt)||r+i.lookAhead<t)){n=r+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,n)}}(r,o.line),ri(e,400);var l=t.text.length-(a.line-o.line)-1;t.full?fr(e):o.line!=a.line||1!=t.text.length||Ai(e.doc,t)?fr(e,o.line,a.line+1,l):dr(e,o.line,"text");var c=ge(e,"changes"),f=ge(e,"change");if(f||c){var d={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin};f&&un(e,"change",e,d),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(d)}e.display.selForContextMenu=null}(e.cm,t,r):Ni(e,t,r),eo(e,n,V),e.cantEdit&&oo(e,et(e.firstLine(),0))&&(e.cantEdit=!1)}}function _o(e,t,n,r,i){var o;r||(r=n),tt(r,n)<0&&(n=(o=[r,n])[0],r=o[1]),"string"==typeof t&&(t=e.splitLines(t)),lo(e,{from:n,to:r,text:t,origin:i})}function mo(e,t,n,r){n<e.line?e.line+=r:t<e.line&&(e.line=t,e.ch=0)}function go(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i],a=!0;if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0);for(var s=0;s<o.ranges.length;s++)mo(o.ranges[s].anchor,t,n,r),mo(o.ranges[s].head,t,n,r)}else{for(var u=0;u<o.changes.length;++u){var l=o.changes[u];if(n<l.from.line)l.from=et(l.from.line+r,l.from.ch),l.to=et(l.to.line+r,l.to.ch);else if(t<=l.to.line){a=!1;break}}a||(e.splice(0,i+1),i=0)}}}function vo(e,t){var n=t.from.line,r=t.to.line,i=t.text.length-(r-n)-1;go(e.done,n,r,i),go(e.undone,n,r,i)}function yo(e,t,n,r){var i=t,o=t;return"number"==typeof t?o=qe(e,at(e,t)):i=Qe(t),null==i?null:(r(o,i)&&e.cm&&dr(e.cm,i,n),o)}function bo(e){this.lines=e,this.parent=null;for(var t=0,n=0;n<e.length;++n)e[n].parent=this,t+=e[n].height;this.height=t}function wo(e){this.children=e;for(var t=0,n=0,r=0;r<e.length;++r){var i=e[r];t+=i.chunkSize(),n+=i.height,i.parent=this}this.size=t,this.height=n,this.parent=null}ki.prototype.from=function(){return ot(this.anchor,this.head)},ki.prototype.to=function(){return it(this.anchor,this.head)},ki.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},bo.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var n=e,r=e+t;n<r;++n){var i=this.lines[n];this.height-=i.height,Kt(i),un(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,n){this.height+=n,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var r=0;r<t.length;++r)t[r].parent=this},iterN:function(e,t,n){for(var r=e+t;e<r;++e)if(n(this.lines[e]))return!0}},wo.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t;for(var n=0;n<this.children.length;++n){var r=this.children[n],i=r.chunkSize();if(e<i){var o=Math.min(t,i-e),a=r.height;if(r.removeInner(e,o),this.height-=a-r.height,i==o&&(this.children.splice(n--,1),r.parent=null),0==(t-=o))break;e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof bo))){var s=[];this.collapse(s),this.children=[new bo(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,n){this.size+=t.length,this.height+=n;for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize();if(e<=o){if(i.insertInner(e,t,n),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,s=a;s<i.lines.length;){var u=new bo(i.lines.slice(s,s+=25));i.height-=u.height,this.children.splice(++r,0,u),u.parent=this}i.lines=i.lines.slice(0,a),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=new wo(e.children.splice(e.children.length-5,5));if(e.parent){e.size-=t.size,e.height-=t.height;var n=W(e.parent.children,e);e.parent.children.splice(n+1,0,t)}else{var r=new wo(e.children);r.parent=e,e.children=[r,t],e=r}t.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,t,n){for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize();if(e<o){var a=Math.min(t,o-e);if(i.iterN(e,a,n))return!0;if(0==(t-=a))break;e=0}else e-=o}}};var xo=function(e,t,n){if(n)for(var r in n)n.hasOwnProperty(r)&&(this[r]=n[r]);this.doc=e,this.node=t};function ko(e,t,n){Ut(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Pr(e,n)}xo.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,n=this.line,r=Qe(n);if(null!=r&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1);t.length||(n.widgets=null);var o=wn(this);Xe(n,Math.max(0,n.height-o)),e&&(Zr(e,(function(){ko(e,n,-o),dr(e,r,"widget")})),un(e,"lineWidgetCleared",e,this,r))}},xo.prototype.changed=function(){var e=this,t=this.height,n=this.doc.cm,r=this.line;this.height=null;var i=wn(this)-t;i&&(Bt(this.doc,r)||Xe(r,r.height+i),n&&Zr(n,(function(){n.curOp.forceUpdate=!0,ko(n,r,i),un(n,"lineWidgetChanged",n,e,Qe(r))})))},ve(xo);var Co=0,So=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Co};function Eo(e,t,n,r,i){if(r&&r.shared)return function(e,t,n,r,i){(r=I(r)).shared=!1;var o=[Eo(e,t,n,r,i)],a=o[0],s=r.widgetNode;return Di(e,(function(e){s&&(r.widgetNode=s.cloneNode(!0)),o.push(Eo(e,st(e,t),st(e,n),r,i));for(var u=0;u<e.linked.length;++u)if(e.linked[u].isParent)return;a=G(o)})),new To(o,a)}(e,t,n,r,i);if(e.cm&&!e.cm.curOp)return ei(e.cm,Eo)(e,t,n,r,i);var o=new So(e,i),a=tt(t,n);if(r&&I(r,o,!1),a>0||0==a&&!1!==o.clearWhenEmpty)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=P("span",[o.replacedWith],"CodeMirror-widget"),r.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),r.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(It(e,t.line,t,n,o)||t.line!=n.line&&It(e,n.line,t,n,o))throw new Error("Inserting collapsed marker partially overlapping an existing one");xt=!0}o.addToHistory&&Wi(e,{from:t,to:n,origin:"markText"},e.sel,NaN);var s,u=t.line,l=e.cm;if(e.iter(u,n.line+1,(function(e){l&&o.collapsed&&!l.options.lineWrapping&&Ft(e)==l.display.maxLine&&(s=!0),o.collapsed&&u!=t.line&&Xe(e,0),function(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}(e,new kt(o,u==t.line?t.ch:null,u==n.line?n.ch:null)),++u})),o.collapsed&&e.iter(t.line,n.line+1,(function(t){Bt(e,t)&&Xe(t,0)})),o.clearOnEnter&&fe(o,"beforeCursorEnter",(function(){return o.clear()})),o.readOnly&&(wt=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++Co,o.atomic=!0),l){if(s&&(l.curOp.updateMaxLine=!0),o.collapsed)fr(l,t.line,n.line+1);else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var c=t.line;c<=n.line;c++)dr(l,c,"text");o.atomic&&no(l.doc),un(l,"markerAdded",l,o)}return o}So.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp;if(t&&qr(e),ge(this,"clear")){var n=this.find();n&&un(this,"clear",n.from,n.to)}for(var r=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],s=Ct(a.markedSpans,this);e&&!this.collapsed?dr(e,Qe(a),"text"):e&&(null!=s.to&&(i=Qe(a)),null!=s.from&&(r=Qe(a))),a.markedSpans=St(a.markedSpans,s),null==s.from&&this.collapsed&&!Bt(this.doc,a)&&e&&Xe(a,rr(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var u=0;u<this.lines.length;++u){var l=Ft(this.lines[u]),c=Ht(l);c>e.display.maxLineLength&&(e.display.maxLine=l,e.display.maxLineLength=c,e.display.maxLineChanged=!0)}null!=r&&e&&this.collapsed&&fr(e,r,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&no(e.doc)),e&&un(e,"markerCleared",e,this,r,i),t&&Kr(e),this.parent&&this.parent.clear()}},So.prototype.find=function(e,t){var n,r;null==e&&"bookmark"==this.type&&(e=1);for(var i=0;i<this.lines.length;++i){var o=this.lines[i],a=Ct(o.markedSpans,this);if(null!=a.from&&(n=et(t?o:Qe(o),a.from),-1==e))return n;if(null!=a.to&&(r=et(t?o:Qe(o),a.to),1==e))return r}return n&&{from:n,to:r}},So.prototype.changed=function(){var e=this,t=this.find(-1,!0),n=this,r=this.doc.cm;t&&r&&Zr(r,(function(){var i=t.line,o=Qe(t.line),a=jn(r,o);if(a&&(Fn(a),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!Bt(n.doc,i)&&null!=n.height){var s=n.height;n.height=null;var u=wn(n)-s;u&&Xe(i,i.height+u)}un(r,"markerChanged",r,e)}))},So.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=W(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},So.prototype.detachLine=function(e){if(this.lines.splice(W(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},ve(So);var To=function(e,t){this.markers=e,this.primary=t;for(var n=0;n<e.length;++n)e[n].parent=this};function Oo(e){return e.findMarks(et(e.first,0),e.clipPos(et(e.lastLine())),(function(e){return e.parent}))}function Mo(e){for(var t=function(t){var n=e[t],r=[n.primary.doc];Di(n.primary.doc,(function(e){return r.push(e)}));for(var i=0;i<n.markers.length;i++){var o=n.markers[i];-1==W(r,o.doc)&&(o.parent=null,n.markers.splice(i--,1))}},n=0;n<e.length;n++)t(n)}To.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();un(this,"clear")}},To.prototype.find=function(e,t){return this.primary.find(e,t)},ve(To);var Po=0,jo=function(e,t,n,r,i){if(!(this instanceof jo))return new jo(e,t,n,r,i);null==n&&(n=0),wo.call(this,[new bo([new qt("",null)])]),this.first=n,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=n;var o=et(n,0);this.sel=Si(o),this.history=new Ii(null),this.id=++Po,this.modeOption=t,this.lineSep=r,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Ni(this,{from:o,to:o,text:e}),Zi(this,Si(o),V)};jo.prototype=Y(wo.prototype,{constructor:jo,iter:function(e,t,n){n?this.iterN(e-this.first,t-e,n):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var n=0,r=0;r<t.length;++r)n+=t[r].height;this.insertInner(e-this.first,t,n)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=Ge(this,this.first,this.first+this.size);return!1===e?t:t.join(e||this.lineSeparator())},setValue:ni((function(e){var t=et(this.first,0),n=this.first+this.size-1;lo(this,{from:t,to:et(n,qe(this,n).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Ar(this.cm,0,0),Zi(this,Si(t),V)})),replaceRange:function(e,t,n,r){_o(this,e,t=st(this,t),n=n?st(this,n):t,r)},getRange:function(e,t,n){var r=Ke(this,st(this,e),st(this,t));return!1===n?r:r.join(n||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){if(Je(this,e))return qe(this,e)},getLineNumber:function(e){return Qe(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=qe(this,e)),Ft(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return st(this,e)},getCursor:function(e){var t=this.sel.primary();return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ni((function(e,t,n){Yi(this,st(this,"number"==typeof e?et(e,t||0):e),null,n)})),setSelection:ni((function(e,t,n){Yi(this,st(this,e),st(this,t||e),n)})),extendSelection:ni((function(e,t,n){Gi(this,st(this,e),t&&st(this,t),n)})),extendSelections:ni((function(e,t){Xi(this,ut(this,e),t)})),extendSelectionsBy:ni((function(e,t){Xi(this,ut(this,X(this.sel.ranges,e)),t)})),setSelections:ni((function(e,t,n){if(e.length){for(var r=[],i=0;i<e.length;i++)r[i]=new ki(st(this,e[i].anchor),st(this,e[i].head));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),Zi(this,Ci(this.cm,r,t),n)}})),addSelection:ni((function(e,t,n){var r=this.sel.ranges.slice(0);r.push(new ki(st(this,e),st(this,t||e))),Zi(this,Ci(this.cm,r,r.length-1),n)})),getSelection:function(e){for(var t,n=this.sel.ranges,r=0;r<n.length;r++){var i=Ke(this,n[r].from(),n[r].to());t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],n=this.sel.ranges,r=0;r<n.length;r++){var i=Ke(this,n[r].from(),n[r].to());!1!==e&&(i=i.join(e||this.lineSeparator())),t[r]=i}return t},replaceSelection:function(e,t,n){for(var r=[],i=0;i<this.sel.ranges.length;i++)r[i]=e;this.replaceSelections(r,t,n||"+input")},replaceSelections:ni((function(e,t,n){for(var r=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o];r[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:n}}for(var s=t&&"end"!=t&&function(e,t,n){for(var r=[],i=et(e.first,0),o=i,a=0;a<t.length;a++){var s=t[a],u=Mi(s.from,i,o),l=Mi(Ei(s),i,o);if(i=s.to,o=l,"around"==n){var c=e.sel.ranges[a],f=tt(c.head,c.anchor)<0;r[a]=new ki(f?l:u,f?u:l)}else r[a]=new ki(u,u)}return new xi(r,e.sel.primIndex)}(this,r,t),u=r.length-1;u>=0;u--)lo(this,r[u]);s?Ji(this,s):this.cm&&jr(this.cm)})),undo:ni((function(){fo(this,"undo")})),redo:ni((function(){fo(this,"redo")})),undoSelection:ni((function(){fo(this,"undo",!0)})),redoSelection:ni((function(){fo(this,"redo",!0)})),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,n=0,r=0;r<e.done.length;r++)e.done[r].ranges||++t;for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++n;return{undo:t,redo:n}},clearHistory:function(){var e=this;this.history=new Ii(this.history.maxGeneration),Di(this,(function(t){return t.history=e.history}),!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:qi(this.history.done),undone:qi(this.history.undone)}},setHistory:function(e){var t=this.history=new Ii(this.history.maxGeneration);t.done=qi(e.done.slice(0),null,!0),t.undone=qi(e.undone.slice(0),null,!0)},setGutterMarker:ni((function(e,t,n){return yo(this,e,"gutter",(function(e){var r=e.gutterMarkers||(e.gutterMarkers={});return r[t]=n,!n&&te(r)&&(e.gutterMarkers=null),!0}))})),clearGutter:ni((function(e){var t=this;this.iter((function(n){n.gutterMarkers&&n.gutterMarkers[e]&&yo(t,n,"gutter",(function(){return n.gutterMarkers[e]=null,te(n.gutterMarkers)&&(n.gutterMarkers=null),!0}))}))})),lineInfo:function(e){var t;if("number"==typeof e){if(!Je(this,e))return null;if(t=e,!(e=qe(this,e)))return null}else if(null==(t=Qe(e)))return null;return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:ni((function(e,t,n){return yo(this,e,"gutter"==t?"gutter":"class",(function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass";if(e[r]){if(C(n).test(e[r]))return!1;e[r]+=" "+n}else e[r]=n;return!0}))})),removeLineClass:ni((function(e,t,n){return yo(this,e,"gutter"==t?"gutter":"class",(function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[r];if(!i)return!1;if(null==n)e[r]=null;else{var o=i.match(C(n));if(!o)return!1;var a=o.index+o[0].length;e[r]=i.slice(0,o.index)+(o.index&&a!=i.length?" ":"")+i.slice(a)||null}return!0}))})),addLineWidget:ni((function(e,t,n){return function(e,t,n,r){var i=new xo(e,n,r),o=e.cm;return o&&i.noHScroll&&(o.display.alignWidgets=!0),yo(e,t,"widget",(function(t){var n=t.widgets||(t.widgets=[]);if(null==i.insertAt?n.push(i):n.splice(Math.min(n.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!Bt(e,t)){var r=Ut(t)<e.scrollTop;Xe(t,t.height+wn(i)),r&&Pr(o,i.height),o.curOp.forceUpdate=!0}return!0})),o&&un(o,"lineWidgetAdded",o,i,"number"==typeof t?t:Qe(t)),i}(this,e,t,n)})),removeLineWidget:function(e){e.clear()},markText:function(e,t,n){return Eo(this,st(this,e),st(this,t),n,n&&n.type||"range")},setBookmark:function(e,t){var n={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return Eo(this,e=st(this,e),e,n,"bookmark")},findMarksAt:function(e){var t=[],n=qe(this,(e=st(this,e)).line).markedSpans;if(n)for(var r=0;r<n.length;++r){var i=n[r];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,n){e=st(this,e),t=st(this,t);var r=[],i=e.line;return this.iter(e.line,t.line+1,(function(o){var a=o.markedSpans;if(a)for(var s=0;s<a.length;s++){var u=a[s];null!=u.to&&i==e.line&&e.ch>=u.to||null==u.from&&i!=e.line||null!=u.from&&i==t.line&&u.from>=t.ch||n&&!n(u.marker)||r.push(u.marker.parent||u.marker)}++i})),r},getAllMarks:function(){var e=[];return this.iter((function(t){var n=t.markedSpans;if(n)for(var r=0;r<n.length;++r)null!=n[r].from&&e.push(n[r].marker)})),e},posFromIndex:function(e){var t,n=this.first,r=this.lineSeparator().length;return this.iter((function(i){var o=i.text.length+r;if(o>e)return t=e,!0;e-=o,++n})),st(this,et(n,t))},indexFromPos:function(e){var t=(e=st(this,e)).ch;if(e.line<this.first||e.ch<0)return 0;var n=this.lineSeparator().length;return this.iter(this.first,e.line,(function(e){t+=e.text.length+n})),t},copy:function(e){var t=new jo(Ge(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={});var t=this.first,n=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<n&&(n=e.to);var r=new jo(Ge(this,t,n),e.mode||this.modeOption,t,this.lineSep,this.direction);return e.sharedHist&&(r.history=this.history),(this.linked||(this.linked=[])).push({doc:r,sharedHist:e.sharedHist}),r.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r.find(),o=e.clipPos(i.from),a=e.clipPos(i.to);if(tt(o,a)){var s=Eo(e,o,a,r.primary,r.primary.type);r.markers.push(s),s.parent=r}}}(r,Oo(this)),r},unlinkDoc:function(e){if(e instanceof Ta&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t)if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),Mo(Oo(this));break}if(e.history==this.history){var n=[e.id];Di(e,(function(e){return n.push(e.id)}),!0),e.history=new Ii(null),e.history.done=qi(this.history.done,n),e.history.undone=qi(this.history.undone,n)}},iterLinkedDocs:function(e){Di(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):je(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:ni((function(e){var t;"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter((function(e){return e.order=null})),this.cm&&Zr(t=this.cm,(function(){Ri(t),fr(t)})))}))}),jo.prototype.eachLine=jo.prototype.iter;var Ao=0;function No(e){var t=this;if(Do(t),!_e(t,e)&&!xn(t.display,e)){ye(e),a&&(Ao=+new Date);var n=lr(t,e,!0),r=e.dataTransfer.files;if(n&&!t.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),s=0,u=function(){++s==i&&ei(t,(function(){var e={from:n=st(t.doc,n),to:n,text:t.doc.splitLines(o.filter((function(e){return null!=e})).join(t.doc.lineSeparator())),origin:"paste"};lo(t.doc,e),Ji(t.doc,Si(st(t.doc,n),st(t.doc,Ei(e))))}))()},l=function(e,n){if(t.options.allowDropFileTypes&&-1==W(t.options.allowDropFileTypes,e.type))u();else{var r=new FileReader;r.onerror=function(){return u()},r.onload=function(){var e=r.result;/[\x00-\x08\x0e-\x1f]{2}/.test(e)||(o[n]=e),u()},r.readAsText(e)}},c=0;c<r.length;c++)l(r[c],c);else{if(t.state.draggingText&&t.doc.sel.contains(n)>-1)return t.state.draggingText(e),void setTimeout((function(){return t.display.input.focus()}),20);try{var f=e.dataTransfer.getData("Text");if(f){var d;if(t.state.draggingText&&!t.state.draggingText.copy&&(d=t.listSelections()),eo(t.doc,Si(n,n)),d)for(var p=0;p<d.length;++p)_o(t.doc,"",d[p].anchor,d[p].head,"drag");t.replaceSelection(f,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Do(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Lo(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),n=[],r=0;r<t.length;r++){var i=t[r].CodeMirror;i&&n.push(i)}n.length&&n[0].operation((function(){for(var t=0;t<n.length;t++)e(n[t])}))}}var Ro=!1;function Io(){var e;Ro||(fe(window,"resize",(function(){null==e&&(e=setTimeout((function(){e=null,Lo(Fo)}),100))})),fe(window,"blur",(function(){return Lo(Sr)})),Ro=!0)}function Fo(e){var t=e.display;t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var zo={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Wo=0;Wo<10;Wo++)zo[Wo+48]=zo[Wo+96]=String(Wo);for(var Bo=65;Bo<=90;Bo++)zo[Bo]=String.fromCharCode(Bo);for(var Vo=1;Vo<=12;Vo++)zo[Vo+111]=zo[Vo+63235]="F"+Vo;var Uo={};function Ho(e){var t,n,r,i,o=e.split(/-(?!$)/);e=o[o.length-1];for(var a=0;a<o.length-1;a++){var s=o[a];if(/^(cmd|meta|m)$/i.test(s))i=!0;else if(/^a(lt)?$/i.test(s))t=!0;else if(/^(c|ctrl|control)$/i.test(s))n=!0;else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s);r=!0}}return t&&(e="Alt-"+e),n&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),r&&(e="Shift-"+e),e}function $o(e){var t={};for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue;if("..."==r){delete e[n];continue}for(var i=X(n.split(" "),Ho),o=0;o<i.length;o++){var a=void 0,s=void 0;o==i.length-1?(s=i.join(" "),a=r):(s=i.slice(0,o+1).join(" "),a="...");var u=t[s];if(u){if(u!=a)throw new Error("Inconsistent bindings for "+s)}else t[s]=a}delete e[n]}for(var l in t)e[l]=t[l];return e}function qo(e,t,n,r){var i=(t=Qo(t)).call?t.call(e,r):t[e];if(!1===i)return"nothing";if("..."===i)return"multi";if(null!=i&&n(i))return"handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return qo(e,t.fallthrough,n,r);for(var o=0;o<t.fallthrough.length;o++){var a=qo(e,t.fallthrough[o],n,r);if(a)return a}}}function Ko(e){var t="string"==typeof e?e:zo[e.keyCode];return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Go(e,t,n){var r=e;return t.altKey&&"Alt"!=r&&(e="Alt-"+e),(x?t.metaKey:t.ctrlKey)&&"Ctrl"!=r&&(e="Ctrl-"+e),(x?t.ctrlKey:t.metaKey)&&"Mod"!=r&&(e="Cmd-"+e),!n&&t.shiftKey&&"Shift"!=r&&(e="Shift-"+e),e}function Xo(e,t){if(f&&34==e.keyCode&&e.char)return!1;var n=zo[e.keyCode];return null!=n&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(n=e.code),Go(n,e,t))}function Qo(e){return"string"==typeof e?Uo[e]:e}function Yo(e,t){for(var n=e.doc.sel.ranges,r=[],i=0;i<n.length;i++){for(var o=t(n[i]);r.length&&tt(o.from,G(r).to)<=0;){var a=r.pop();if(tt(a.from,o.from)<0){o.from=a.from;break}}r.push(o)}Zr(e,(function(){for(var t=r.length-1;t>=0;t--)_o(e.doc,"",r[t].from,r[t].to,"+delete");jr(e)}))}function Jo(e,t,n){var r=ie(e.text,t+n,n);return r<0||r>e.text.length?null:r}function Zo(e,t,n){var r=Jo(e,t.ch,n);return null==r?null:new et(t.line,r,n<0?"after":"before")}function ea(e,t,n,r,i){if(e){"rtl"==t.doc.direction&&(i=-i);var o=le(n,t.doc.direction);if(o){var a,s=i<0?G(o):o[0],u=i<0==(1==s.level)?"after":"before";if(s.level>0||"rtl"==t.doc.direction){var l=An(t,n);a=i<0?n.text.length-1:0;var c=Nn(t,l,a).top;a=oe((function(e){return Nn(t,l,e).top==c}),i<0==(1==s.level)?s.from:s.to-1,a),"before"==u&&(a=Jo(n,a,1))}else a=i<0?s.to:s.from;return new et(r,a,u)}}return new et(r,i<0?n.text.length:0,i<0?"before":"after")}Uo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Uo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Uo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Uo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Uo.default=v?Uo.macDefault:Uo.pcDefault;var ta={selectAll:so,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),V)},killLine:function(e){return Yo(e,(function(t){if(t.empty()){var n=qe(e.doc,t.head.line).text.length;return t.head.ch==n&&t.head.line<e.lastLine()?{from:t.head,to:et(t.head.line+1,0)}:{from:t.head,to:et(t.head.line,n)}}return{from:t.from(),to:t.to()}}))},deleteLine:function(e){return Yo(e,(function(t){return{from:et(t.from().line,0),to:st(e.doc,et(t.to().line+1,0))}}))},delLineLeft:function(e){return Yo(e,(function(e){return{from:et(e.from().line,0),to:e.from()}}))},delWrappedLineLeft:function(e){return Yo(e,(function(t){var n=e.charCoords(t.head,"div").top+5;return{from:e.coordsChar({left:0,top:n},"div"),to:t.from()}}))},delWrappedLineRight:function(e){return Yo(e,(function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div");return{from:t.from(),to:r}}))},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(et(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(et(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy((function(t){return na(e,t.head.line)}),{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy((function(t){return ra(e,t.head)}),{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy((function(t){return function(e,t){var n=qe(e.doc,t),r=function(e){for(var t;t=Lt(e);)e=t.find(1,!0).line;return e}(n);return r!=n&&(t=Qe(r)),ea(!0,e,n,t,-1)}(e,t.head.line)}),{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")}),H)},goLineLeft:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:0,top:n},"div")}),H)},goLineLeftSmart:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div");return r.ch<e.getLine(r.line).search(/\S/)?ra(e,t.head):r}),H)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],n=e.listSelections(),r=e.options.tabSize,i=0;i<n.length;i++){var o=n[i].from(),a=F(e.getLine(o.line),o.ch,r);t.push(K(r-a%r))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Zr(e,(function(){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++)if(t[r].empty()){var i=t[r].head,o=qe(e.doc,i.line).text;if(o)if(i.ch==o.length&&(i=new et(i.line,i.ch-1)),i.ch>0)i=new et(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),et(i.line,i.ch-2),i,"+transpose");else if(i.line>e.doc.first){var a=qe(e.doc,i.line-1).text;a&&(i=new et(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),et(i.line-1,a.length-1),i,"+transpose"))}n.push(new ki(i,i))}e.setSelections(n)}))},newlineAndIndent:function(e){return Zr(e,(function(){for(var t=e.listSelections(),n=t.length-1;n>=0;n--)e.replaceRange(e.doc.lineSeparator(),t[n].anchor,t[n].head,"+input");t=e.listSelections();for(var r=0;r<t.length;r++)e.indentLine(t[r].from().line,null,!0);jr(e)}))},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function na(e,t){var n=qe(e.doc,t),r=Ft(n);return r!=n&&(t=Qe(r)),ea(!0,e,r,t,1)}function ra(e,t){var n=na(e,t.line),r=qe(e.doc,n.line),i=le(r,e.doc.direction);if(!i||0==i[0].level){var o=Math.max(n.ch,r.text.search(/\S/)),a=t.line==n.line&&t.ch<=o&&t.ch;return et(n.line,a?0:o,n.sticky)}return n}function ia(e,t,n){if("string"==typeof t&&!(t=ta[t]))return!1;e.display.input.ensurePolled();var r=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),n&&(e.display.shift=!1),i=t(e)!=B}finally{e.display.shift=r,e.state.suppressEdits=!1}return i}var oa=new z;function aa(e,t,n,r){var i=e.state.keySeq;if(i){if(Ko(t))return"handled";if(/\'$/.test(t)?e.state.keySeq=null:oa.set(50,(function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())})),sa(e,i+" "+t,n,r))return!0}return sa(e,t,n,r)}function sa(e,t,n,r){var i=function(e,t,n){for(var r=0;r<e.state.keyMaps.length;r++){var i=qo(t,e.state.keyMaps[r],n,e);if(i)return i}return e.options.extraKeys&&qo(t,e.options.extraKeys,n,e)||qo(t,e.options.keyMap,n,e)}(e,t,r);return"multi"==i&&(e.state.keySeq=t),"handled"==i&&un(e,"keyHandled",e,t,n),"handled"!=i&&"multi"!=i||(ye(n),wr(e)),!!i}function ua(e,t){var n=Xo(t,!0);return!!n&&(t.shiftKey&&!e.state.keySeq?aa(e,"Shift-"+n,t,(function(t){return ia(e,t,!0)}))||aa(e,n,t,(function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return ia(e,t)})):aa(e,n,t,(function(t){return ia(e,t)})))}var la=null;function ca(e){var t=this;if(!(e.target&&e.target!=t.display.input.getField()||(t.curOp.focus=A(),_e(t,e)))){a&&s<11&&27==e.keyCode&&(e.returnValue=!1);var r=e.keyCode;t.display.shift=16==r||e.shiftKey;var i=ua(t,e);f&&(la=i?r:null,i||88!=r||Ne||!(v?e.metaKey:e.ctrlKey)||t.replaceSelection("",null,"cut")),n&&!v&&!i&&46==r&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv;function n(e){18!=e.keyCode&&e.altKey||(E(t,"CodeMirror-crosshair"),pe(document,"keyup",n),pe(document,"mouseover",n))}N(t,"CodeMirror-crosshair"),fe(document,"keyup",n),fe(document,"mouseover",n)}(t)}}function fa(e){16==e.keyCode&&(this.doc.sel.shift=!1),_e(this,e)}function da(e){var t=this;if(!(e.target&&e.target!=t.display.input.getField()||xn(t.display,e)||_e(t,e)||e.ctrlKey&&!e.altKey||v&&e.metaKey)){var n=e.keyCode,r=e.charCode;if(f&&n==la)return la=null,void ye(e);if(!f||e.which&&!(e.which<10)||!ua(t,e)){var i=String.fromCharCode(null==r?n:r);"\b"!=i&&(function(e,t,n){return aa(e,"'"+n+"'",t,(function(t){return ia(e,t,!0)}))}(t,e,i)||t.display.input.onKeyPress(e))}}}var pa,ha,_a=function(e,t,n){this.time=e,this.pos=t,this.button=n};function ma(e){var t=this,n=t.display;if(!(_e(t,e)||n.activeTouch&&n.input.supportsTouch()))if(n.input.ensurePolled(),n.shift=e.shiftKey,xn(n,e))u||(n.scroller.draggable=!1,setTimeout((function(){return n.scroller.draggable=!0}),100));else if(!ya(t,e)){var r=lr(t,e),i=Ce(e),o=r?function(e,t){var n=+new Date;return ha&&ha.compare(n,e,t)?(pa=ha=null,"triple"):pa&&pa.compare(n,e,t)?(ha=new _a(n,e,t),pa=null,"double"):(pa=new _a(n,e,t),ha=null,"single")}(r,i):"single";window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),r&&function(e,t,n,r,i){var o="Click";return"double"==r?o="Double"+o:"triple"==r&&(o="Triple"+o),aa(e,Go(o=(1==t?"Left":2==t?"Middle":"Right")+o,i),i,(function(t){if("string"==typeof t&&(t=ta[t]),!t)return!1;var r=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),r=t(e,n)!=B}finally{e.state.suppressEdits=!1}return r}))}(t,i,r,o,e)||(1==i?r?function(e,t,n,r){a?setTimeout(R(xr,e),0):e.curOp.focus=A();var i,o=function(e,t,n){var r=e.getOption("configureMouse"),i=r?r(e,t,n):{};if(null==i.unit){var o=y?n.shiftKey&&n.metaKey:n.altKey;i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||n.shiftKey),null==i.addNew&&(i.addNew=v?n.metaKey:n.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(v?n.altKey:n.ctrlKey)),i}(e,n,r),l=e.doc.sel;e.options.dragDrop&&Te&&!e.isReadOnly()&&"single"==n&&(i=l.contains(t))>-1&&(tt((i=l.ranges[i]).from(),t)<0||t.xRel>0)&&(tt(i.to(),t)>0||t.xRel<0)?function(e,t,n,r){var i=e.display,o=!1,l=ei(e,(function(t){u&&(i.scroller.draggable=!1),e.state.draggingText=!1,pe(i.wrapper.ownerDocument,"mouseup",l),pe(i.wrapper.ownerDocument,"mousemove",c),pe(i.scroller,"dragstart",f),pe(i.scroller,"drop",l),o||(ye(t),r.addNew||Gi(e.doc,n,null,null,r.extend),u&&!d||a&&9==s?setTimeout((function(){i.wrapper.ownerDocument.body.focus({preventScroll:!0}),i.input.focus()}),20):i.input.focus())})),c=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},f=function(){return o=!0};u&&(i.scroller.draggable=!0),e.state.draggingText=l,l.copy=!r.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),fe(i.wrapper.ownerDocument,"mouseup",l),fe(i.wrapper.ownerDocument,"mousemove",c),fe(i.scroller,"dragstart",f),fe(i.scroller,"drop",l),kr(e),setTimeout((function(){return i.input.focus()}),20)}(e,r,t,o):function(e,t,n,r){var i=e.display,o=e.doc;ye(t);var a,s,u=o.sel,l=u.ranges;if(r.addNew&&!r.extend?(s=o.sel.contains(n),a=s>-1?l[s]:new ki(n,n)):(a=o.sel.primary(),s=o.sel.primIndex),"rectangle"==r.unit)r.addNew||(a=new ki(n,n)),n=lr(e,t,!0,!0),s=-1;else{var c=ga(e,n,r.unit);a=r.extend?Ki(a,c.anchor,c.head,r.extend):c}r.addNew?-1==s?(s=l.length,Zi(o,Ci(e,l.concat([a]),s),{scroll:!1,origin:"*mouse"})):l.length>1&&l[s].empty()&&"char"==r.unit&&!r.extend?(Zi(o,Ci(e,l.slice(0,s).concat(l.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),u=o.sel):Qi(o,s,a,U):(s=0,Zi(o,new xi([a],0),U),u=o.sel);var f=n;function d(t){if(0!=tt(f,t))if(f=t,"rectangle"==r.unit){for(var i=[],l=e.options.tabSize,c=F(qe(o,n.line).text,n.ch,l),d=F(qe(o,t.line).text,t.ch,l),p=Math.min(c,d),h=Math.max(c,d),_=Math.min(n.line,t.line),m=Math.min(e.lastLine(),Math.max(n.line,t.line));_<=m;_++){var g=qe(o,_).text,v=$(g,p,l);p==h?i.push(new ki(et(_,v),et(_,v))):g.length>v&&i.push(new ki(et(_,v),et(_,$(g,h,l))))}i.length||i.push(new ki(n,n)),Zi(o,Ci(e,u.ranges.slice(0,s).concat(i),s),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var y,b=a,w=ga(e,t,r.unit),x=b.anchor;tt(w.anchor,x)>0?(y=w.head,x=ot(b.from(),w.anchor)):(y=w.anchor,x=it(b.to(),w.head));var k=u.ranges.slice(0);k[s]=function(e,t){var n=t.anchor,r=t.head,i=qe(e.doc,n.line);if(0==tt(n,r)&&n.sticky==r.sticky)return t;var o=le(i);if(!o)return t;var a=se(o,n.ch,n.sticky),s=o[a];if(s.from!=n.ch&&s.to!=n.ch)return t;var u,l=a+(s.from==n.ch==(1!=s.level)?0:1);if(0==l||l==o.length)return t;if(r.line!=n.line)u=(r.line-n.line)*("ltr"==e.doc.direction?1:-1)>0;else{var c=se(o,r.ch,r.sticky),f=c-a||(r.ch-n.ch)*(1==s.level?-1:1);u=c==l-1||c==l?f<0:f>0}var d=o[l+(u?-1:0)],p=u==(1==d.level),h=p?d.from:d.to,_=p?"after":"before";return n.ch==h&&n.sticky==_?t:new ki(new et(n.line,h,_),r)}(e,new ki(st(o,x),y)),Zi(o,Ci(e,k,s),U)}}var p=i.wrapper.getBoundingClientRect(),h=0;function _(t){e.state.selectingText=!1,h=1/0,t&&(ye(t),i.input.focus()),pe(i.wrapper.ownerDocument,"mousemove",m),pe(i.wrapper.ownerDocument,"mouseup",g),o.history.lastSelOrigin=null}var m=ei(e,(function(t){0!==t.buttons&&Ce(t)?function t(n){var a=++h,s=lr(e,n,!0,"rectangle"==r.unit);if(s)if(0!=tt(s,f)){e.curOp.focus=A(),d(s);var u=Or(i,o);(s.line>=u.to||s.line<u.from)&&setTimeout(ei(e,(function(){h==a&&t(n)})),150)}else{var l=n.clientY<p.top?-20:n.clientY>p.bottom?20:0;l&&setTimeout(ei(e,(function(){h==a&&(i.scroller.scrollTop+=l,t(n))})),50)}}(t):_(t)})),g=ei(e,_);e.state.selectingText=g,fe(i.wrapper.ownerDocument,"mousemove",m),fe(i.wrapper.ownerDocument,"mouseup",g)}(e,r,t,o)}(t,r,o,e):ke(e)==n.scroller&&ye(e):2==i?(r&&Gi(t.doc,r),setTimeout((function(){return n.input.focus()}),20)):3==i&&(k?t.display.input.onContextMenu(e):kr(t)))}}function ga(e,t,n){if("char"==n)return new ki(t,t);if("word"==n)return e.findWordAt(t);if("line"==n)return new ki(et(t.line,0),st(e.doc,et(t.line+1,0)));var r=n(e,t);return new ki(r.from,r.to)}function va(e,t,n,r){var i,o;if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY;else try{i=t.clientX,o=t.clientY}catch(e){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;r&&ye(t);var a=e.display,s=a.lineDiv.getBoundingClientRect();if(o>s.bottom||!ge(e,n))return we(t);o-=s.top-a.viewOffset;for(var u=0;u<e.display.gutterSpecs.length;++u){var l=a.gutters.childNodes[u];if(l&&l.getBoundingClientRect().right>=i)return he(e,n,e,Ye(e.doc,o),e.display.gutterSpecs[u].className,t),we(t)}}function ya(e,t){return va(e,t,"gutterClick",!0)}function ba(e,t){xn(e.display,t)||function(e,t){return!!ge(e,"gutterContextMenu")&&va(e,t,"gutterContextMenu",!1)}(e,t)||_e(e,t,"contextmenu")||k||e.display.input.onContextMenu(t)}function wa(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Wn(e)}_a.prototype.compare=function(e,t,n){return this.time+400>e&&0==tt(t,this.pos)&&n==this.button};var xa={toString:function(){return"CodeMirror.Init"}},ka={},Ca={};function Sa(e,t,n){if(!t!=!(n&&n!=xa)){var r=e.display.dragFunctions,i=t?fe:pe;i(e.display.scroller,"dragstart",r.start),i(e.display.scroller,"dragenter",r.enter),i(e.display.scroller,"dragover",r.over),i(e.display.scroller,"dragleave",r.leave),i(e.display.scroller,"drop",r.drop)}}function Ea(e){e.options.lineWrapping?(N(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(E(e.display.wrapper,"CodeMirror-wrap"),$t(e)),ur(e),fr(e),Wn(e),setTimeout((function(){return Br(e)}),100)}function Ta(e,t){var n=this;if(!(this instanceof Ta))return new Ta(e,t);this.options=t=t?I(t):{},I(ka,t,!1);var r=t.value;"string"==typeof r?r=new jo(r,t.mode,null,t.lineSeparator,t.direction):t.mode&&(r.modeOption=t.mode),this.doc=r;var i=new Ta.inputStyles[t.inputStyle](this),o=this.display=new mi(e,r,i,t);for(var l in o.wrapper.CodeMirror=this,wa(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Hr(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new z,keySeq:null,specialChars:null},t.autofocus&&!g&&o.input.focus(),a&&s<11&&setTimeout((function(){return n.display.input.reset(!0)}),20),function(e){var t=e.display;fe(t.scroller,"mousedown",ei(e,ma)),fe(t.scroller,"dblclick",a&&s<11?ei(e,(function(t){if(!_e(e,t)){var n=lr(e,t);if(n&&!ya(e,t)&&!xn(e.display,t)){ye(t);var r=e.findWordAt(n);Gi(e.doc,r.anchor,r.head)}}})):function(t){return _e(e,t)||ye(t)}),fe(t.scroller,"contextmenu",(function(t){return ba(e,t)})),fe(t.input.getField(),"contextmenu",(function(n){t.scroller.contains(n.target)||ba(e,n)}));var n,r={end:0};function i(){t.activeTouch&&(n=setTimeout((function(){return t.activeTouch=null}),1e3),(r=t.activeTouch).end=+new Date)}function o(e,t){if(null==t.left)return!0;var n=t.left-e.left,r=t.top-e.top;return n*n+r*r>400}fe(t.scroller,"touchstart",(function(i){if(!_e(e,i)&&!function(e){if(1!=e.touches.length)return!1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}(i)&&!ya(e,i)){t.input.ensurePolled(),clearTimeout(n);var o=+new Date;t.activeTouch={start:o,moved:!1,prev:o-r.end<=300?r:null},1==i.touches.length&&(t.activeTouch.left=i.touches[0].pageX,t.activeTouch.top=i.touches[0].pageY)}})),fe(t.scroller,"touchmove",(function(){t.activeTouch&&(t.activeTouch.moved=!0)})),fe(t.scroller,"touchend",(function(n){var r=t.activeTouch;if(r&&!xn(t,n)&&null!=r.left&&!r.moved&&new Date-r.start<300){var a,s=e.coordsChar(t.activeTouch,"page");a=!r.prev||o(r,r.prev)?new ki(s,s):!r.prev.prev||o(r,r.prev.prev)?e.findWordAt(s):new ki(et(s.line,0),st(e.doc,et(s.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),ye(n)}i()})),fe(t.scroller,"touchcancel",i),fe(t.scroller,"scroll",(function(){t.scroller.clientHeight&&(Lr(e,t.scroller.scrollTop),Ir(e,t.scroller.scrollLeft,!0),he(e,"scroll",e))})),fe(t.scroller,"mousewheel",(function(t){return wi(e,t)})),fe(t.scroller,"DOMMouseScroll",(function(t){return wi(e,t)})),fe(t.wrapper,"scroll",(function(){return t.wrapper.scrollTop=t.wrapper.scrollLeft=0})),t.dragFunctions={enter:function(t){_e(e,t)||xe(t)},over:function(t){_e(e,t)||(function(e,t){var n=lr(e,t);if(n){var r=document.createDocumentFragment();vr(e,n,r),e.display.dragCursor||(e.display.dragCursor=M("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),O(e.display.dragCursor,r)}}(e,t),xe(t))},start:function(t){return function(e,t){if(a&&(!e.state.draggingText||+new Date-Ao<100))xe(t);else if(!_e(e,t)&&!xn(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!d)){var n=M("img",null,null,"position: fixed; left: 0; top: 0;");n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",f&&(n.width=n.height=1,e.display.wrapper.appendChild(n),n._top=n.offsetTop),t.dataTransfer.setDragImage(n,0,0),f&&n.parentNode.removeChild(n)}}(e,t)},drop:ei(e,No),leave:function(t){_e(e,t)||Do(e)}};var u=t.input.getField();fe(u,"keyup",(function(t){return fa.call(e,t)})),fe(u,"keydown",ei(e,ca)),fe(u,"keypress",ei(e,da)),fe(u,"focus",(function(t){return Cr(e,t)})),fe(u,"blur",(function(t){return Sr(e,t)}))}(this),Io(),qr(this),this.curOp.forceUpdate=!0,Li(this,r),t.autofocus&&!g||this.hasFocus()?setTimeout((function(){n.hasFocus()&&!n.state.focused&&Cr(n)}),20):Sr(this),Ca)Ca.hasOwnProperty(l)&&Ca[l](this,t[l],xa);di(this),t.finishInit&&t.finishInit(this);for(var c=0;c<Oa.length;++c)Oa[c](this);Kr(this),u&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}Ta.defaults=ka,Ta.optionHandlers=Ca;var Oa=[];function Ma(e,t,n,r){var i,o=e.doc;null==n&&(n="add"),"smart"==n&&(o.mode.indent?i=pt(e,t).state:n="prev");var a=e.options.tabSize,s=qe(o,t),u=F(s.text,null,a);s.stateAfter&&(s.stateAfter=null);var l,c=s.text.match(/^\s*/)[0];if(r||/\S/.test(s.text)){if("smart"==n&&((l=o.mode.indent(i,s.text.slice(c.length),s.text))==B||l>150)){if(!r)return;n="prev"}}else l=0,n="not";"prev"==n?l=t>o.first?F(qe(o,t-1).text,null,a):0:"add"==n?l=u+e.options.indentUnit:"subtract"==n?l=u-e.options.indentUnit:"number"==typeof n&&(l=u+n),l=Math.max(0,l);var f="",d=0;if(e.options.indentWithTabs)for(var p=Math.floor(l/a);p;--p)d+=a,f+="\t";if(d<l&&(f+=K(l-d)),f!=c)return _o(o,f,et(t,0),et(t,c.length),"+input"),s.stateAfter=null,!0;for(var h=0;h<o.sel.ranges.length;h++){var _=o.sel.ranges[h];if(_.head.line==t&&_.head.ch<c.length){var m=et(t,c.length);Qi(o,h,new ki(m,m));break}}}Ta.defineInitHook=function(e){return Oa.push(e)};var Pa=null;function ja(e){Pa=e}function Aa(e,t,n,r,i){var o=e.doc;e.display.shift=!1,r||(r=o.sel);var a=+new Date-200,s="paste"==i||e.state.pasteIncoming>a,u=je(t),l=null;if(s&&r.ranges.length>1)if(Pa&&Pa.text.join("\n")==t){if(r.ranges.length%Pa.text.length==0){l=[];for(var c=0;c<Pa.text.length;c++)l.push(o.splitLines(Pa.text[c]))}}else u.length==r.ranges.length&&e.options.pasteLinesPerSelection&&(l=X(u,(function(e){return[e]})));for(var f=e.curOp.updateInput,d=r.ranges.length-1;d>=0;d--){var p=r.ranges[d],h=p.from(),_=p.to();p.empty()&&(n&&n>0?h=et(h.line,h.ch-n):e.state.overwrite&&!s?_=et(_.line,Math.min(qe(o,_.line).text.length,_.ch+G(u).length)):s&&Pa&&Pa.lineWise&&Pa.text.join("\n")==u.join("\n")&&(h=_=et(h.line,0)));var m={from:h,to:_,text:l?l[d%l.length]:u,origin:i||(s?"paste":e.state.cutIncoming>a?"cut":"+input")};lo(e.doc,m),un(e,"inputRead",e,m)}t&&!s&&Da(e,t),jr(e),e.curOp.updateInput<2&&(e.curOp.updateInput=f),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Na(e,t){var n=e.clipboardData&&e.clipboardData.getData("Text");if(n)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||Zr(t,(function(){return Aa(t,n,0,null,"paste")})),!0}function Da(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var n=e.doc.sel,r=n.ranges.length-1;r>=0;r--){var i=n.ranges[r];if(!(i.head.ch>100||r&&n.ranges[r-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1;if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){a=Ma(e,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(qe(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=Ma(e,i.head.line,"smart"));a&&un(e,"electricInput",e,i.head.line)}}}function La(e){for(var t=[],n=[],r=0;r<e.doc.sel.ranges.length;r++){var i=e.doc.sel.ranges[r].head.line,o={anchor:et(i,0),head:et(i+1,0)};n.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:n}}function Ra(e,t,n,r){e.setAttribute("autocorrect",n?"":"off"),e.setAttribute("autocapitalize",r?"":"off"),e.setAttribute("spellcheck",!!t)}function Ia(){var e=M("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=M("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return u?e.style.width="1000px":e.setAttribute("wrap","off"),_&&(e.style.border="1px solid black"),Ra(e),t}function Fa(e,t,n,r,i){var o=t,a=n,s=qe(e,t.line),u=i&&"rtl"==e.direction?-n:n;function l(o){var a,l;if("codepoint"==r){var c=s.text.charCodeAt(t.ch+(r>0?0:-1));a=isNaN(c)?null:new et(t.line,Math.max(0,Math.min(s.text.length,t.ch+n*(c>=55296&&c<56320?2:1))),-n)}else a=i?function(e,t,n,r){var i=le(t,e.doc.direction);if(!i)return Zo(t,n,r);n.ch>=t.text.length?(n.ch=t.text.length,n.sticky="before"):n.ch<=0&&(n.ch=0,n.sticky="after");var o=se(i,n.ch,n.sticky),a=i[o];if("ltr"==e.doc.direction&&a.level%2==0&&(r>0?a.to>n.ch:a.from<n.ch))return Zo(t,n,r);var s,u=function(e,n){return Jo(t,e instanceof et?e.ch:e,n)},l=function(n){return e.options.lineWrapping?(s=s||An(e,t),Jn(e,t,s,n)):{begin:0,end:t.text.length}},c=l("before"==n.sticky?u(n,-1):n.ch);if("rtl"==e.doc.direction||1==a.level){var f=1==a.level==r<0,d=u(n,f?1:-1);if(null!=d&&(f?d<=a.to&&d<=c.end:d>=a.from&&d>=c.begin)){var p=f?"before":"after";return new et(n.line,d,p)}}var h=function(e,t,r){for(var o=function(e,t){return t?new et(n.line,u(e,1),"before"):new et(n.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],s=t>0==(1!=a.level),l=s?r.begin:u(r.end,-1);if(a.from<=l&&l<a.to)return o(l,s);if(l=s?a.from:u(a.to,-1),r.begin<=l&&l<r.end)return o(l,s)}},_=h(o+r,r,c);if(_)return _;var m=r>0?c.end:u(c.begin,-1);return null==m||r>0&&m==t.text.length||!(_=h(r>0?0:i.length-1,r,l(m)))?null:_}(e.cm,s,t,n):Zo(s,t,n);if(null==a){if(o||(l=t.line+u)<e.first||l>=e.first+e.size||(t=new et(l,t.ch,t.sticky),!(s=qe(e,l))))return!1;t=ea(i,e.cm,s,t.line,u)}else t=a;return!0}if("char"==r||"codepoint"==r)l();else if("column"==r)l(!0);else if("word"==r||"group"==r)for(var c=null,f="group"==r,d=e.cm&&e.cm.getHelper(t,"wordChars"),p=!0;!(n<0)||l(!p);p=!1){var h=s.text.charAt(t.ch)||"\n",_=ee(h,d)?"w":f&&"\n"==h?"n":!f||/\s/.test(h)?null:"p";if(!f||p||_||(_="s"),c&&c!=_){n<0&&(n=1,l(),t.sticky="after");break}if(_&&(c=_),n>0&&!l(!p))break}var m=oo(e,t,o,a,!0);return nt(o,m)&&(m.hitSide=!0),m}function za(e,t,n,r){var i,o,a=e.doc,s=t.left;if("page"==r){var u=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),l=Math.max(u-.5*rr(e.display),3);i=(n>0?t.bottom:t.top)+n*l}else"line"==r&&(i=n>0?t.bottom+3:t.top-3);for(;(o=Qn(e,s,i)).outside;){if(n<0?i<=0:i>=a.height){o.hitSide=!0;break}i+=5*n}return o}var Wa=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new z,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};function Ba(e,t){var n=jn(e,t.line);if(!n||n.hidden)return null;var r=qe(e.doc,t.line),i=Mn(n,r,t.line),o=le(r,e.doc.direction),a="left";o&&(a=se(o,t.ch)%2?"right":"left");var s=Rn(i.map,t.ch,a);return s.offset="right"==s.collapse?s.end:s.start,s}function Va(e,t){return t&&(e.bad=!0),e}function Ua(e,t,n){var r;if(t==e.display.lineDiv){if(!(r=e.display.lineDiv.childNodes[n]))return Va(e.clipPos(et(e.display.viewTo-1)),!0);t=null,n=0}else for(r=t;;r=r.parentNode){if(!r||r==e.display.lineDiv)return null;if(r.parentNode&&r.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==r)return Ha(o,t,n)}}function Ha(e,t,n){var r=e.text.firstChild,i=!1;if(!t||!j(r,t))return Va(et(Qe(e.line),0),!0);if(t==r&&(i=!0,t=r.childNodes[n],n=0,!t)){var o=e.rest?G(e.rest):e.line;return Va(et(Qe(o),o.text.length),i)}var a=3==t.nodeType?t:null,s=t;for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,n&&(n=a.nodeValue.length));s.parentNode!=r;)s=s.parentNode;var u=e.measure,l=u.maps;function c(t,n,r){for(var i=-1;i<(l?l.length:0);i++)for(var o=i<0?u.map:l[i],a=0;a<o.length;a+=3){var s=o[a+2];if(s==t||s==n){var c=Qe(i<0?e.line:e.rest[i]),f=o[a]+r;return(r<0||s!=t)&&(f=o[a+(r?1:0)]),et(c,f)}}}var f=c(a,s,n);if(f)return Va(f,i);for(var d=s.nextSibling,p=a?a.nodeValue.length-n:0;d;d=d.nextSibling){if(f=c(d,d.firstChild,0))return Va(et(f.line,f.ch-p),i);p+=d.textContent.length}for(var h=s.previousSibling,_=n;h;h=h.previousSibling){if(f=c(h,h.firstChild,-1))return Va(et(f.line,f.ch+_),i);_+=h.textContent.length}}Wa.prototype.init=function(e){var t=this,n=this,r=n.cm,i=n.div=e.lineDiv;function o(e){for(var t=e.target;t;t=t.parentNode){if(t==i)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(t.className))break}return!1}function a(e){if(o(e)&&!_e(r,e)){if(r.somethingSelected())ja({lineWise:!1,text:r.getSelections()}),"cut"==e.type&&r.replaceSelection("",null,"cut");else{if(!r.options.lineWiseCopyCut)return;var t=La(r);ja({lineWise:!0,text:t.text}),"cut"==e.type&&r.operation((function(){r.setSelections(t.ranges,0,V),r.replaceSelection("",null,"cut")}))}if(e.clipboardData){e.clipboardData.clearData();var a=Pa.text.join("\n");if(e.clipboardData.setData("Text",a),e.clipboardData.getData("Text")==a)return void e.preventDefault()}var s=Ia(),u=s.firstChild;r.display.lineSpace.insertBefore(s,r.display.lineSpace.firstChild),u.value=Pa.text.join("\n");var l=document.activeElement;L(u),setTimeout((function(){r.display.lineSpace.removeChild(s),l.focus(),l==i&&n.showPrimarySelection()}),50)}}Ra(i,r.options.spellcheck,r.options.autocorrect,r.options.autocapitalize),fe(i,"paste",(function(e){!o(e)||_e(r,e)||Na(e,r)||s<=11&&setTimeout(ei(r,(function(){return t.updateFromDOM()})),20)})),fe(i,"compositionstart",(function(e){t.composing={data:e.data,done:!1}})),fe(i,"compositionupdate",(function(e){t.composing||(t.composing={data:e.data,done:!1})})),fe(i,"compositionend",(function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)})),fe(i,"touchstart",(function(){return n.forceCompositionEnd()})),fe(i,"input",(function(){t.composing||t.readFromDOMSoon()})),fe(i,"copy",a),fe(i,"cut",a)},Wa.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Wa.prototype.prepareSelection=function(){var e=gr(this.cm,!1);return e.focus=document.activeElement==this.div,e},Wa.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Wa.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Wa.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,r=t.doc.sel.primary(),i=r.from(),o=r.to();if(t.display.viewTo==t.display.viewFrom||i.line>=t.display.viewTo||o.line<t.display.viewFrom)e.removeAllRanges();else{var a=Ua(t,e.anchorNode,e.anchorOffset),s=Ua(t,e.focusNode,e.focusOffset);if(!a||a.bad||!s||s.bad||0!=tt(ot(a,s),i)||0!=tt(it(a,s),o)){var u=t.display.view,l=i.line>=t.display.viewFrom&&Ba(t,i)||{node:u[0].measure.map[2],offset:0},c=o.line<t.display.viewTo&&Ba(t,o);if(!c){var f=u[u.length-1].measure,d=f.maps?f.maps[f.maps.length-1]:f.map;c={node:d[d.length-1],offset:d[d.length-2]-d[d.length-3]}}if(l&&c){var p,h=e.rangeCount&&e.getRangeAt(0);try{p=S(l.node,l.offset,c.offset,c.node)}catch(e){}p&&(!n&&t.state.focused?(e.collapse(l.node,l.offset),p.collapsed||(e.removeAllRanges(),e.addRange(p))):(e.removeAllRanges(),e.addRange(p)),h&&null==e.anchorNode?e.addRange(h):n&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Wa.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout((function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation((function(){return e.cm.curOp.selectionChanged=!0}))}),20)},Wa.prototype.showMultipleSelections=function(e){O(this.cm.display.cursorDiv,e.cursors),O(this.cm.display.selectionDiv,e.selection)},Wa.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Wa.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var t=e.getRangeAt(0).commonAncestorContainer;return j(this.div,t)},Wa.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&document.activeElement==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Wa.prototype.blur=function(){this.div.blur()},Wa.prototype.getField=function(){return this.div},Wa.prototype.supportsTouch=function(){return!0},Wa.prototype.receivedFocus=function(){var e=this;this.selectionInEditor()?this.pollSelection():Zr(this.cm,(function(){return e.cm.curOp.selectionChanged=!0})),this.polling.set(this.cm.options.pollInterval,(function t(){e.cm.state.focused&&(e.pollSelection(),e.polling.set(e.cm.options.pollInterval,t))}))},Wa.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Wa.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm;if(m&&c&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0;return!1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var n=Ua(t,e.anchorNode,e.anchorOffset),r=Ua(t,e.focusNode,e.focusOffset);n&&r&&Zr(t,(function(){Zi(t.doc,Si(n,r),V),(n.bad||r.bad)&&(t.curOp.selectionChanged=!0)}))}}},Wa.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e,t,n,r=this.cm,i=r.display,o=r.doc.sel.primary(),a=o.from(),s=o.to();if(0==a.ch&&a.line>r.firstLine()&&(a=et(a.line-1,qe(r.doc,a.line-1).length)),s.ch==qe(r.doc,s.line).text.length&&s.line<r.lastLine()&&(s=et(s.line+1,0)),a.line<i.viewFrom||s.line>i.viewTo-1)return!1;a.line==i.viewFrom||0==(e=cr(r,a.line))?(t=Qe(i.view[0].line),n=i.view[0].node):(t=Qe(i.view[e].line),n=i.view[e-1].node.nextSibling);var u,l,c=cr(r,s.line);if(c==i.view.length-1?(u=i.viewTo-1,l=i.lineDiv.lastChild):(u=Qe(i.view[c+1].line)-1,l=i.view[c+1].node.previousSibling),!n)return!1;for(var f=r.doc.splitLines(function(e,t,n,r,i){var o="",a=!1,s=e.doc.lineSeparator(),u=!1;function l(){a&&(o+=s,u&&(o+=s),a=u=!1)}function c(e){e&&(l(),o+=e)}function f(t){if(1==t.nodeType){var n=t.getAttribute("cm-text");if(n)return void c(n);var o,d=t.getAttribute("cm-marker");if(d){var p=e.findMarks(et(r,0),et(i+1,0),(m=+d,function(e){return e.id==m}));return void(p.length&&(o=p[0].find(0))&&c(Ke(e.doc,o.from,o.to).join(s)))}if("false"==t.getAttribute("contenteditable"))return;var h=/^(pre|div|p|li|table|br)$/i.test(t.nodeName);if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return;h&&l();for(var _=0;_<t.childNodes.length;_++)f(t.childNodes[_]);/^(pre|p)$/i.test(t.nodeName)&&(u=!0),h&&(a=!0)}else 3==t.nodeType&&c(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "));var m}for(;f(t),t!=n;)t=t.nextSibling,u=!1;return o}(r,n,l,t,u)),d=Ke(r.doc,et(t,0),et(u,qe(r.doc,u).text.length));f.length>1&&d.length>1;)if(G(f)==G(d))f.pop(),d.pop(),u--;else{if(f[0]!=d[0])break;f.shift(),d.shift(),t++}for(var p=0,h=0,_=f[0],m=d[0],g=Math.min(_.length,m.length);p<g&&_.charCodeAt(p)==m.charCodeAt(p);)++p;for(var v=G(f),y=G(d),b=Math.min(v.length-(1==f.length?p:0),y.length-(1==d.length?p:0));h<b&&v.charCodeAt(v.length-h-1)==y.charCodeAt(y.length-h-1);)++h;if(1==f.length&&1==d.length&&t==a.line)for(;p&&p>a.ch&&v.charCodeAt(v.length-h-1)==y.charCodeAt(y.length-h-1);)p--,h++;f[f.length-1]=v.slice(0,v.length-h).replace(/^\u200b+/,""),f[0]=f[0].slice(p).replace(/\u200b+$/,"");var w=et(t,p),x=et(u,d.length?G(d).length-h:0);return f.length>1||f[0]||tt(w,x)?(_o(r.doc,f,w,x,"+input"),!0):void 0},Wa.prototype.ensurePolled=function(){this.forceCompositionEnd()},Wa.prototype.reset=function(){this.forceCompositionEnd()},Wa.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Wa.prototype.readFromDOMSoon=function(){var e=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout((function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return;e.composing=null}e.updateFromDOM()}),80))},Wa.prototype.updateFromDOM=function(){var e=this;!this.cm.isReadOnly()&&this.pollContent()||Zr(this.cm,(function(){return fr(e.cm)}))},Wa.prototype.setUneditable=function(e){e.contentEditable="false"},Wa.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||ei(this.cm,Aa)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Wa.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Wa.prototype.onContextMenu=function(){},Wa.prototype.resetPosition=function(){},Wa.prototype.needsContentAttribute=!0;var $a=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new z,this.hasSelection=!1,this.composing=null};$a.prototype.init=function(e){var t=this,n=this,r=this.cm;this.createField(e);var i=this.textarea;function o(e){if(!_e(r,e)){if(r.somethingSelected())ja({lineWise:!1,text:r.getSelections()});else{if(!r.options.lineWiseCopyCut)return;var t=La(r);ja({lineWise:!0,text:t.text}),"cut"==e.type?r.setSelections(t.ranges,null,V):(n.prevInput="",i.value=t.text.join("\n"),L(i))}"cut"==e.type&&(r.state.cutIncoming=+new Date)}}e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),_&&(i.style.width="0px"),fe(i,"input",(function(){a&&s>=9&&t.hasSelection&&(t.hasSelection=null),n.poll()})),fe(i,"paste",(function(e){_e(r,e)||Na(e,r)||(r.state.pasteIncoming=+new Date,n.fastPoll())})),fe(i,"cut",o),fe(i,"copy",o),fe(e.scroller,"paste",(function(t){if(!xn(e,t)&&!_e(r,t)){if(!i.dispatchEvent)return r.state.pasteIncoming=+new Date,void n.focus();var o=new Event("paste");o.clipboardData=t.clipboardData,i.dispatchEvent(o)}})),fe(e.lineSpace,"selectstart",(function(t){xn(e,t)||ye(t)})),fe(i,"compositionstart",(function(){var e=r.getCursor("from");n.composing&&n.composing.range.clear(),n.composing={start:e,range:r.markText(e,r.getCursor("to"),{className:"CodeMirror-composing"})}})),fe(i,"compositionend",(function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)}))},$a.prototype.createField=function(e){this.wrapper=Ia(),this.textarea=this.wrapper.firstChild},$a.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},$a.prototype.prepareSelection=function(){var e=this.cm,t=e.display,n=e.doc,r=gr(e);if(e.options.moveInputWithCursor){var i=Kn(e,n.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect();r.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),r.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return r},$a.prototype.showSelection=function(e){var t=this.cm.display;O(t.cursorDiv,e.cursors),O(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},$a.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm;if(t.somethingSelected()){this.prevInput="";var n=t.getSelection();this.textarea.value=n,t.state.focused&&L(this.textarea),a&&s>=9&&(this.hasSelection=n)}else e||(this.prevInput=this.textarea.value="",a&&s>=9&&(this.hasSelection=null))}},$a.prototype.getField=function(){return this.textarea},$a.prototype.supportsTouch=function(){return!1},$a.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!g||A()!=this.textarea))try{this.textarea.focus()}catch(e){}},$a.prototype.blur=function(){this.textarea.blur()},$a.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},$a.prototype.receivedFocus=function(){this.slowPoll()},$a.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,(function(){e.poll(),e.cm.state.focused&&e.slowPoll()}))},$a.prototype.fastPoll=function(){var e=!1,t=this;t.pollingFast=!0,t.polling.set(20,(function n(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,n))}))},$a.prototype.poll=function(){var e=this,t=this.cm,n=this.textarea,r=this.prevInput;if(this.contextMenuPending||!t.state.focused||Ae(n)&&!r&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1;var i=n.value;if(i==r&&!t.somethingSelected())return!1;if(a&&s>=9&&this.hasSelection===i||v&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1;if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0);if(8203!=o||r||(r="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var u=0,l=Math.min(r.length,i.length);u<l&&r.charCodeAt(u)==i.charCodeAt(u);)++u;return Zr(t,(function(){Aa(t,i.slice(u),r.length-u,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?n.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))})),!0},$a.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},$a.prototype.onKeyPress=function(){a&&s>=9&&(this.hasSelection=null),this.fastPoll()},$a.prototype.onContextMenu=function(e){var t=this,n=t.cm,r=n.display,i=t.textarea;t.contextMenuPending&&t.contextMenuPending();var o=lr(n,e),l=r.scroller.scrollTop;if(o&&!f){n.options.resetSelectionOnContextMenu&&-1==n.doc.sel.contains(o)&&ei(n,Zi)(n.doc,Si(o),V);var c,d=i.style.cssText,p=t.wrapper.style.cssText,h=t.wrapper.offsetParent.getBoundingClientRect();if(t.wrapper.style.cssText="position: static",i.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-h.top-5)+"px; left: "+(e.clientX-h.left-5)+"px;\n      z-index: 1000; background: "+(a?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",u&&(c=window.scrollY),r.input.focus(),u&&window.scrollTo(null,c),r.input.reset(),n.somethingSelected()||(i.value=t.prevInput=" "),t.contextMenuPending=g,r.selForContextMenu=n.doc.sel,clearTimeout(r.detectingSelectAll),a&&s>=9&&m(),k){xe(e);var _=function(){pe(window,"mouseup",_),setTimeout(g,20)};fe(window,"mouseup",_)}else setTimeout(g,50)}function m(){if(null!=i.selectionStart){var e=n.somethingSelected(),o="​"+(e?i.value:"");i.value="⇚",i.value=o,t.prevInput=e?"":"​",i.selectionStart=1,i.selectionEnd=o.length,r.selForContextMenu=n.doc.sel}}function g(){if(t.contextMenuPending==g&&(t.contextMenuPending=!1,t.wrapper.style.cssText=p,i.style.cssText=d,a&&s<9&&r.scrollbars.setScrollTop(r.scroller.scrollTop=l),null!=i.selectionStart)){(!a||a&&s<9)&&m();var e=0,o=function(){r.selForContextMenu==n.doc.sel&&0==i.selectionStart&&i.selectionEnd>0&&"​"==t.prevInput?ei(n,so)(n):e++<10?r.detectingSelectAll=setTimeout(o,500):(r.selForContextMenu=null,r.input.reset())};r.detectingSelectAll=setTimeout(o,200)}}},$a.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e,this.textarea.readOnly=!!e},$a.prototype.setUneditable=function(){},$a.prototype.needsContentAttribute=!1,function(e){var t=e.optionHandlers;function n(n,r,i,o){e.defaults[n]=r,i&&(t[n]=o?function(e,t,n){n!=xa&&i(e,t,n)}:i)}e.defineOption=n,e.Init=xa,n("value","",(function(e,t){return e.setValue(t)}),!0),n("mode",null,(function(e,t){e.doc.modeOption=t,Pi(e)}),!0),n("indentUnit",2,Pi,!0),n("indentWithTabs",!1),n("smartIndent",!0),n("tabSize",4,(function(e){ji(e),Wn(e),fr(e)}),!0),n("lineSeparator",null,(function(e,t){if(e.doc.lineSep=t,t){var n=[],r=e.doc.first;e.doc.iter((function(e){for(var i=0;;){var o=e.text.indexOf(t,i);if(-1==o)break;i=o+t.length,n.push(et(r,o))}r++}));for(var i=n.length-1;i>=0;i--)_o(e.doc,t,n[i],et(n[i].line,n[i].ch+t.length))}})),n("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,(function(e,t,n){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),n!=xa&&e.refresh()})),n("specialCharPlaceholder",Jt,(function(e){return e.refresh()}),!0),n("electricChars",!0),n("inputStyle",g?"contenteditable":"textarea",(function(){throw new Error("inputStyle can not (yet) be changed in a running editor")}),!0),n("spellcheck",!1,(function(e,t){return e.getInputField().spellcheck=t}),!0),n("autocorrect",!1,(function(e,t){return e.getInputField().autocorrect=t}),!0),n("autocapitalize",!1,(function(e,t){return e.getInputField().autocapitalize=t}),!0),n("rtlMoveVisually",!b),n("wholeLineUpdateBefore",!0),n("theme","default",(function(e){wa(e),_i(e)}),!0),n("keyMap","default",(function(e,t,n){var r=Qo(t),i=n!=xa&&Qo(n);i&&i.detach&&i.detach(e,r),r.attach&&r.attach(e,i||null)})),n("extraKeys",null),n("configureMouse",null),n("lineWrapping",!1,Ea,!0),n("gutters",[],(function(e,t){e.display.gutterSpecs=pi(t,e.options.lineNumbers),_i(e)}),!0),n("fixedGutter",!0,(function(e,t){e.display.gutters.style.left=t?ar(e.display)+"px":"0",e.refresh()}),!0),n("coverGutterNextToScrollbar",!1,(function(e){return Br(e)}),!0),n("scrollbarStyle","native",(function(e){Hr(e),Br(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)}),!0),n("lineNumbers",!1,(function(e,t){e.display.gutterSpecs=pi(e.options.gutters,t),_i(e)}),!0),n("firstLineNumber",1,_i,!0),n("lineNumberFormatter",(function(e){return e}),_i,!0),n("showCursorWhenSelecting",!1,mr,!0),n("resetSelectionOnContextMenu",!0),n("lineWiseCopyCut",!0),n("pasteLinesPerSelection",!0),n("selectionsMayTouch",!1),n("readOnly",!1,(function(e,t){"nocursor"==t&&(Sr(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)})),n("screenReaderLabel",null,(function(e,t){t=""===t?null:t,e.display.input.screenReaderLabelChanged(t)})),n("disableInput",!1,(function(e,t){t||e.display.input.reset()}),!0),n("dragDrop",!0,Sa),n("allowDropFileTypes",null),n("cursorBlinkRate",530),n("cursorScrollMargin",0),n("cursorHeight",1,mr,!0),n("singleCursorHeightPerLine",!0,mr,!0),n("workTime",100),n("workDelay",100),n("flattenSpans",!0,ji,!0),n("addModeClass",!1,ji,!0),n("pollInterval",100),n("undoDepth",200,(function(e,t){return e.doc.history.undoDepth=t})),n("historyEventDelay",1250),n("viewportMargin",10,(function(e){return e.refresh()}),!0),n("maxHighlightLength",1e4,ji,!0),n("moveInputWithCursor",!0,(function(e,t){t||e.display.input.resetPosition()})),n("tabindex",null,(function(e,t){return e.display.input.getField().tabIndex=t||""})),n("autofocus",null),n("direction","ltr",(function(e,t){return e.doc.setDirection(t)}),!0),n("phrases",null)}(Ta),function(e){var t=e.optionHandlers,n=e.helpers={};e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,n){var r=this.options,i=r[e];r[e]==n&&"mode"!=e||(r[e]=n,t.hasOwnProperty(e)&&ei(this,t[e])(this,n,i),he(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Qo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,n=0;n<t.length;++n)if(t[n]==e||t[n].name==e)return t.splice(n,1),!0},addOverlay:ti((function(t,n){var r=t.token?t:e.getMode(this.options,t);if(r.startState)throw new Error("Overlays may not be stateful.");!function(e,t,n){for(var r=0,i=n(t);r<e.length&&n(e[r])<=i;)r++;e.splice(r,0,t)}(this.state.overlays,{mode:r,modeSpec:t,opaque:n&&n.opaque,priority:n&&n.priority||0},(function(e){return e.priority})),this.state.modeGen++,fr(this)})),removeOverlay:ti((function(e){for(var t=this.state.overlays,n=0;n<t.length;++n){var r=t[n].modeSpec;if(r==e||"string"==typeof e&&r.name==e)return t.splice(n,1),this.state.modeGen++,void fr(this)}})),indentLine:ti((function(e,t,n){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),Je(this.doc,e)&&Ma(this,e,t,n)})),indentSelection:ti((function(e){for(var t=this.doc.sel.ranges,n=-1,r=0;r<t.length;r++){var i=t[r];if(i.empty())i.head.line>n&&(Ma(this,i.head.line,e,!0),n=i.head.line,r==this.doc.sel.primIndex&&jr(this));else{var o=i.from(),a=i.to(),s=Math.max(n,o.line);n=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1;for(var u=s;u<n;++u)Ma(this,u,e);var l=this.doc.sel.ranges;0==o.ch&&t.length==l.length&&l[r].from().ch>0&&Qi(this.doc,r,new ki(o,l[r].to()),V)}}})),getTokenAt:function(e,t){return vt(this,e,t)},getLineTokens:function(e,t){return vt(this,et(e),t,!0)},getTokenTypeAt:function(e){e=st(this.doc,e);var t,n=dt(this,qe(this.doc,e.line)),r=0,i=(n.length-1)/2,o=e.ch;if(0==o)t=n[2];else for(;;){var a=r+i>>1;if((a?n[2*a-1]:0)>=o)i=a;else{if(!(n[2*a+1]<o)){t=n[2*a+2];break}r=a+1}}var s=t?t.indexOf("overlay "):-1;return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var n=this.doc.mode;return n.innerMode?e.innerMode(n,this.getTokenAt(t).state).mode:n},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[];if(!n.hasOwnProperty(t))return r;var i=n[t],o=this.getModeAt(e);if("string"==typeof o[t])i[o[t]]&&r.push(i[o[t]]);else if(o[t])for(var a=0;a<o[t].length;a++){var s=i[o[t][a]];s&&r.push(s)}else o.helperType&&i[o.helperType]?r.push(i[o.helperType]):i[o.name]&&r.push(i[o.name]);for(var u=0;u<i._global.length;u++){var l=i._global[u];l.pred(o,this)&&-1==W(r,l.val)&&r.push(l.val)}return r},getStateAfter:function(e,t){var n=this.doc;return pt(this,(e=at(n,null==e?n.first+n.size-1:e))+1,t).state},cursorCoords:function(e,t){var n=this.doc.sel.primary();return Kn(this,null==e?n.head:"object"==typeof e?st(this.doc,e):e?n.from():n.to(),t||"page")},charCoords:function(e,t){return qn(this,st(this.doc,e),t||"page")},coordsChar:function(e,t){return Qn(this,(e=$n(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=$n(this,{top:e,left:0},t||"page").top,Ye(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,n){var r,i=!1;if("number"==typeof e){var o=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),r=qe(this.doc,e)}else r=e;return Hn(this,r,{top:0,left:0},t||"page",n||i).top+(i?this.doc.height-Ut(r):0)},defaultTextHeight:function(){return rr(this.display)},defaultCharWidth:function(){return ir(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,n,r,i){var o,a,s,u=this.display,l=(e=Kn(this,st(this.doc,e))).bottom,c=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),u.sizer.appendChild(t),"over"==r)l=e.top;else if("above"==r||"near"==r){var f=Math.max(u.wrapper.clientHeight,this.doc.height),d=Math.max(u.sizer.clientWidth,u.lineSpace.clientWidth);("above"==r||e.bottom+t.offsetHeight>f)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=f&&(l=e.bottom),c+t.offsetWidth>d&&(c=d-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(c=u.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?c=0:"middle"==i&&(c=(u.sizer.clientWidth-t.offsetWidth)/2),t.style.left=c+"px"),n&&(o=this,a={left:c,top:l,right:c+t.offsetWidth,bottom:l+t.offsetHeight},null!=(s=Mr(o,a)).scrollTop&&Lr(o,s.scrollTop),null!=s.scrollLeft&&Ir(o,s.scrollLeft))},triggerOnKeyDown:ti(ca),triggerOnKeyPress:ti(da),triggerOnKeyUp:fa,triggerOnMouseDown:ti(ma),execCommand:function(e){if(ta.hasOwnProperty(e))return ta[e].call(null,this)},triggerElectric:ti((function(e){Da(this,e)})),findPosH:function(e,t,n,r){var i=1;t<0&&(i=-1,t=-t);for(var o=st(this.doc,e),a=0;a<t&&!(o=Fa(this.doc,o,i,n,r)).hitSide;++a);return o},moveH:ti((function(e,t){var n=this;this.extendSelectionsBy((function(r){return n.display.shift||n.doc.extend||r.empty()?Fa(n.doc,r.head,e,t,n.options.rtlMoveVisually):e<0?r.from():r.to()}),H)})),deleteH:ti((function(e,t){var n=this.doc.sel,r=this.doc;n.somethingSelected()?r.replaceSelection("",null,"+delete"):Yo(this,(function(n){var i=Fa(r,n.head,e,t,!1);return e<0?{from:i,to:n.head}:{from:n.head,to:i}}))})),findPosV:function(e,t,n,r){var i=1,o=r;t<0&&(i=-1,t=-t);for(var a=st(this.doc,e),s=0;s<t;++s){var u=Kn(this,a,"div");if(null==o?o=u.left:u.left=o,(a=za(this,u,i,n)).hitSide)break}return a},moveV:ti((function(e,t){var n=this,r=this.doc,i=[],o=!this.display.shift&&!r.extend&&r.sel.somethingSelected();if(r.extendSelectionsBy((function(a){if(o)return e<0?a.from():a.to();var s=Kn(n,a.head,"div");null!=a.goalColumn&&(s.left=a.goalColumn),i.push(s.left);var u=za(n,s,e,t);return"page"==t&&a==r.sel.primary()&&Pr(n,qn(n,u,"div").top-s.top),u}),H),i.length)for(var a=0;a<r.sel.ranges.length;a++)r.sel.ranges[a].goalColumn=i[a]})),findWordAt:function(e){var t=qe(this.doc,e.line).text,n=e.ch,r=e.ch;if(t){var i=this.getHelper(e,"wordChars");"before"!=e.sticky&&r!=t.length||!n?++r:--n;for(var o=t.charAt(n),a=ee(o,i)?function(e){return ee(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!ee(e)};n>0&&a(t.charAt(n-1));)--n;for(;r<t.length&&a(t.charAt(r));)++r}return new ki(et(e.line,n),et(e.line,r))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?N(this.display.cursorDiv,"CodeMirror-overwrite"):E(this.display.cursorDiv,"CodeMirror-overwrite"),he(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==A()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ti((function(e,t){Ar(this,e,t)})),getScrollInfo:function(){var e=this.display.scroller;return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-En(this)-this.display.barHeight,width:e.scrollWidth-En(this)-this.display.barWidth,clientHeight:On(this),clientWidth:Tn(this)}},scrollIntoView:ti((function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:et(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?function(e,t){Nr(e),e.curOp.scrollToPos=t}(this,e):Dr(this,e.from,e.to,e.margin)})),setSize:ti((function(e,t){var n=this,r=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e};null!=e&&(this.display.wrapper.style.width=r(e)),null!=t&&(this.display.wrapper.style.height=r(t)),this.options.lineWrapping&&zn(this);var i=this.display.viewFrom;this.doc.iter(i,this.display.viewTo,(function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){dr(n,i,"widget");break}++i})),this.curOp.forceUpdate=!0,he(this,"refresh",this)})),operation:function(e){return Zr(this,e)},startOperation:function(){return qr(this)},endOperation:function(){return Kr(this)},refresh:ti((function(){var e=this.display.cachedTextHeight;fr(this),this.curOp.forceUpdate=!0,Wn(this),Ar(this,this.doc.scrollLeft,this.doc.scrollTop),li(this.display),(null==e||Math.abs(e-rr(this.display))>.5||this.options.lineWrapping)&&ur(this),he(this,"refresh",this)})),swapDoc:ti((function(e){var t=this.doc;return t.cm=null,this.state.selectingText&&this.state.selectingText(),Li(this,e),Wn(this),this.display.input.reset(),Ar(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,un(this,"swapDoc",this,t),t})),phrase:function(e){var t=this.options.phrases;return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},ve(e),e.registerHelper=function(t,r,i){n.hasOwnProperty(t)||(n[t]=e[t]={_global:[]}),n[t][r]=i},e.registerGlobalHelper=function(t,r,i,o){e.registerHelper(t,r,o),n[t]._global.push({pred:i,val:o})}}(Ta);var qa="iter insert remove copy getEditor constructor".split(" ");for(var Ka in jo.prototype)jo.prototype.hasOwnProperty(Ka)&&W(qa,Ka)<0&&(Ta.prototype[Ka]=function(e){return function(){return e.apply(this.doc,arguments)}}(jo.prototype[Ka]));return ve(jo),Ta.inputStyles={textarea:$a,contenteditable:Wa},Ta.defineMode=function(e){Ta.defaults.mode||"null"==e||(Ta.defaults.mode=e),Ie.apply(this,arguments)},Ta.defineMIME=function(e,t){Re[e]=t},Ta.defineMode("null",(function(){return{token:function(e){return e.skipToEnd()}}})),Ta.defineMIME("text/plain","null"),Ta.defineExtension=function(e,t){Ta.prototype[e]=t},Ta.defineDocExtension=function(e,t){jo.prototype[e]=t},Ta.fromTextArea=function(e,t){if((t=t?I(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=A();t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}function r(){e.value=s.getValue()}var i;if(e.form&&(fe(e.form,"submit",r),!t.leaveSubmitMethodAlone)){var o=e.form;i=o.submit;try{var a=o.submit=function(){r(),o.submit=i,o.submit(),o.submit=a}}catch(e){}}t.finishInit=function(n){n.save=r,n.getTextArea=function(){return e},n.toTextArea=function(){n.toTextArea=isNaN,r(),e.parentNode.removeChild(n.getWrapperElement()),e.style.display="",e.form&&(pe(e.form,"submit",r),t.leaveSubmitMethodAlone||"function"!=typeof e.form.submit||(e.form.submit=i))}},e.style.display="none";var s=Ta((function(t){return e.parentNode.insertBefore(t,e.nextSibling)}),t);return s},function(e){e.off=pe,e.on=fe,e.wheelEventPixels=bi,e.Doc=jo,e.splitLines=je,e.countColumn=F,e.findColumn=$,e.isWordChar=Z,e.Pass=B,e.signal=he,e.Line=qt,e.changeEnd=Ei,e.scrollbarModel=Ur,e.Pos=et,e.cmpPos=tt,e.modes=Le,e.mimeModes=Re,e.resolveMode=Fe,e.getMode=ze,e.modeExtensions=We,e.extendMode=Be,e.copyState=Ve,e.startState=He,e.innerMode=Ue,e.commands=ta,e.keyMap=Uo,e.keyName=Xo,e.isModifierKey=Ko,e.lookupKey=qo,e.normalizeKeyMap=$o,e.StringStream=$e,e.SharedTextMarker=To,e.TextMarker=So,e.LineWidget=xo,e.e_preventDefault=ye,e.e_stopPropagation=be,e.e_stop=xe,e.addClass=N,e.contains=j,e.rmClass=E,e.keyNames=zo}(Ta),Ta.version="5.58.1",Ta}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ComparisonAssertion=void 0;const r=n(9);n(226);const i=n(228);class o extends i.TabularAssertion{renderValue(e){return r.simple(e)}get htmlClasses(){return[...super.htmlClasses,"comparison"]}*generateRows(e,t){this.original.isJust()&&(yield{header:"original",htmlClasses:["original"],content:this.renderOriginalRow(this.original.value)}),this.expected.isJust()&&(yield{header:"expected",htmlClasses:["expected"],content:this.renderOriginalRow(this.expected.value)}),e.isJust()&&(yield{header:"actual",htmlClasses:["actual"],content:this.renderOriginalRow(e.value)})}renderOriginalRow(e){return this.renderValue(e)}renderExpectedRow(e){return this.renderValue(e)}renderActualRow(e){return this.renderValue(e)}}t.ComparisonAssertion=o},function(e,t,n){"use strict";e.exports=n(120)},function(e,t,n){e.exports=n(114)()},function(e,t,n){"use strict";function r(e){return"[object RegExp]"===Object.prototype.toString.call(e)}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"a RegExp"),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),i=n(1);var o="isFinite"in Number?Number.isFinite:function(e){return r.default(e)&&e!==1/0&&e!==-1/0&&!isNaN(e)};i.setDescription(o,"a finite number"),t.default=o},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InlineCode=void 0;const i=r(n(0)),o=r(n(2)).default.span`
    font-family: 'Courier New', Courier, monospace;
`;class a extends i.default.Component{render(){return i.default.createElement(o,{className:"inline-code"},this.props.content)}}t.InlineCode=a},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SourceCodeViewer=void 0;const i=r(n(0)),o=n(179);n(180),n(182),n(183),n(184),n(185),n(187);const a=n(29);class s extends i.default.Component{render(){const e=this;return i.default.createElement(o.Controlled,{value:this.props.sourceCode.sourceCode,onBeforeChange:()=>{},options:{mode:t(),theme:"neat",readOnly:!0,lineNumbers:!0},className:"source-code-viewer"});function t(){switch(e.props.sourceCode.language){case a.Language.Java:return"text/x-java";case a.Language.JavaScript:return"text/javascript";case a.Language.Python:return"text/x-python";case a.Language.CSharp:return"text/x-csharp";case a.Language.CPP:return"text/x-c++src";case a.Language.CommonLisp:case a.Language.Factor:case a.Language.Pseudocode:return"text/plain";case a.Language.Ruby:return"text/x-ruby";default:throw new Error("Unknown language")}}}}t.SourceCodeViewer=s},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r,i;i=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=n(1).Beautifier,i=n(5).Options;e.exports=function(e,t){return new r(e,t).beautify()},e.exports.defaultOptions=function(){return new i}},function(e,t,n){"use strict";var r=n(2).Output,i=n(3).Token,o=n(4),a=n(5).Options,s=n(7).Tokenizer,u=n(7).line_starters,l=n(7).positionable_operators,c=n(7).TOKEN;function f(e,t){return-1!==t.indexOf(e)}function d(e,t){return e&&e.type===c.RESERVED&&e.text===t}function p(e,t){return e&&e.type===c.RESERVED&&f(e.text,t)}var h=["case","return","do","if","throw","else","await","break","continue","async"],_=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].replace(/-/g,"_")]=e[n];return t}(["before-newline","after-newline","preserve-newline"]),m=[_.before_newline,_.preserve_newline],g="BlockStatement",v="Statement",y="ObjectLiteral",b="ArrayLiteral",w="ForInitializer",x="Conditional",k="Expression";function C(e,t){t.multiline_frame||t.mode===w||t.mode===x||e.remove_indent(t.start_line_index)}function S(e){return e===b}function E(e){return f(e,[k,w,x])}function T(e,t){t=t||{},this._source_text=e||"",this._output=null,this._tokens=null,this._last_last_text=null,this._flags=null,this._previous_flags=null,this._flag_store=null,this._options=new a(t)}T.prototype.create_flags=function(e,t){var n=0;return e&&(n=e.indentation_level,!this._output.just_added_newline()&&e.line_indent_level>n&&(n=e.line_indent_level)),{mode:t,parent:e,last_token:e?e.last_token:new i(c.START_BLOCK,""),last_word:e?e.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,inline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,import_block:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:n,alignment:0,line_indent_level:e?e.line_indent_level:n,start_line_index:this._output.get_line_number(),ternary_depth:0}},T.prototype._reset=function(e){var t=e.match(/^[\t ]*/)[0];this._last_last_text="",this._output=new r(this._options,t),this._output.raw=this._options.test_output_raw,this._flag_store=[],this.set_mode(g);var n=new s(e,this._options);return this._tokens=n.tokenize(),e},T.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var e=this._reset(this._source_text),t=this._options.eol;"auto"===this._options.eol&&(t="\n",e&&o.lineBreak.test(e||"")&&(t=e.match(o.lineBreak)[0]));for(var n=this._tokens.next();n;)this.handle_token(n),this._last_last_text=this._flags.last_token.text,this._flags.last_token=n,n=this._tokens.next();return this._output.get_code(t)},T.prototype.handle_token=function(e,t){e.type===c.START_EXPR?this.handle_start_expr(e):e.type===c.END_EXPR?this.handle_end_expr(e):e.type===c.START_BLOCK?this.handle_start_block(e):e.type===c.END_BLOCK?this.handle_end_block(e):e.type===c.WORD||e.type===c.RESERVED?this.handle_word(e):e.type===c.SEMICOLON?this.handle_semicolon(e):e.type===c.STRING?this.handle_string(e):e.type===c.EQUALS?this.handle_equals(e):e.type===c.OPERATOR?this.handle_operator(e):e.type===c.COMMA?this.handle_comma(e):e.type===c.BLOCK_COMMENT?this.handle_block_comment(e,t):e.type===c.COMMENT?this.handle_comment(e,t):e.type===c.DOT?this.handle_dot(e):e.type===c.EOF?this.handle_eof(e):(e.type,c.UNKNOWN,this.handle_unknown(e,t))},T.prototype.handle_whitespace_and_comments=function(e,t){var n=e.newlines,r=this._options.keep_array_indentation&&S(this._flags.mode);if(e.comments_before)for(var i=e.comments_before.next();i;)this.handle_whitespace_and_comments(i,t),this.handle_token(i,t),i=e.comments_before.next();if(r)for(var o=0;o<n;o+=1)this.print_newline(o>0,t);else if(this._options.max_preserve_newlines&&n>this._options.max_preserve_newlines&&(n=this._options.max_preserve_newlines),this._options.preserve_newlines&&n>1){this.print_newline(!1,t);for(var a=1;a<n;a+=1)this.print_newline(!0,t)}};var O=["async","break","continue","return","throw","yield"];T.prototype.allow_wrap_or_preserved_newline=function(e,t){if(t=void 0!==t&&t,!this._output.just_added_newline()){var n=this._options.preserve_newlines&&e.newlines||t;if(f(this._flags.last_token.text,l)||f(e.text,l)){var r=f(this._flags.last_token.text,l)&&f(this._options.operator_position,m)||f(e.text,l);n=n&&r}if(n)this.print_newline(!1,!0);else if(this._options.wrap_line_length){if(p(this._flags.last_token,O))return;this._output.set_wrap_point()}}},T.prototype.print_newline=function(e,t){if(!t&&";"!==this._flags.last_token.text&&","!==this._flags.last_token.text&&"="!==this._flags.last_token.text&&(this._flags.last_token.type!==c.OPERATOR||"--"===this._flags.last_token.text||"++"===this._flags.last_token.text))for(var n=this._tokens.peek();!(this._flags.mode!==v||this._flags.if_block&&d(n,"else")||this._flags.do_block);)this.restore_mode();this._output.add_new_line(e)&&(this._flags.multiline_frame=!0)},T.prototype.print_token_line_indentation=function(e){this._output.just_added_newline()&&(this._options.keep_array_indentation&&e.newlines&&("["===e.text||S(this._flags.mode))?(this._output.current_line.set_indent(-1),this._output.current_line.push(e.whitespace_before),this._output.space_before_token=!1):this._output.set_indent(this._flags.indentation_level,this._flags.alignment)&&(this._flags.line_indent_level=this._flags.indentation_level))},T.prototype.print_token=function(e){if(this._output.raw)this._output.add_raw_token(e);else{if(this._options.comma_first&&e.previous&&e.previous.type===c.COMMA&&this._output.just_added_newline()&&","===this._output.previous_line.last()){var t=this._output.previous_line.pop();this._output.previous_line.is_empty()&&(this._output.previous_line.push(t),this._output.trim(!0),this._output.current_line.pop(),this._output.trim()),this.print_token_line_indentation(e),this._output.add_token(","),this._output.space_before_token=!0}this.print_token_line_indentation(e),this._output.non_breaking_space=!0,this._output.add_token(e.text),this._output.previous_token_wrapped&&(this._flags.multiline_frame=!0)}},T.prototype.indent=function(){this._flags.indentation_level+=1,this._output.set_indent(this._flags.indentation_level,this._flags.alignment)},T.prototype.deindent=function(){this._flags.indentation_level>0&&(!this._flags.parent||this._flags.indentation_level>this._flags.parent.indentation_level)&&(this._flags.indentation_level-=1,this._output.set_indent(this._flags.indentation_level,this._flags.alignment))},T.prototype.set_mode=function(e){this._flags?(this._flag_store.push(this._flags),this._previous_flags=this._flags):this._previous_flags=this.create_flags(null,e),this._flags=this.create_flags(this._previous_flags,e),this._output.set_indent(this._flags.indentation_level,this._flags.alignment)},T.prototype.restore_mode=function(){this._flag_store.length>0&&(this._previous_flags=this._flags,this._flags=this._flag_store.pop(),this._previous_flags.mode===v&&C(this._output,this._previous_flags),this._output.set_indent(this._flags.indentation_level,this._flags.alignment))},T.prototype.start_of_object_property=function(){return this._flags.parent.mode===y&&this._flags.mode===v&&(":"===this._flags.last_token.text&&0===this._flags.ternary_depth||p(this._flags.last_token,["get","set"]))},T.prototype.start_of_statement=function(e){var t=!1;return!!(t=(t=(t=(t=(t=(t=(t=t||p(this._flags.last_token,["var","let","const"])&&e.type===c.WORD)||d(this._flags.last_token,"do"))||!(this._flags.parent.mode===y&&this._flags.mode===v)&&p(this._flags.last_token,O)&&!e.newlines)||d(this._flags.last_token,"else")&&!(d(e,"if")&&!e.comments_before))||this._flags.last_token.type===c.END_EXPR&&(this._previous_flags.mode===w||this._previous_flags.mode===x))||this._flags.last_token.type===c.WORD&&this._flags.mode===g&&!this._flags.in_case&&!("--"===e.text||"++"===e.text)&&"function"!==this._last_last_text&&e.type!==c.WORD&&e.type!==c.RESERVED)||this._flags.mode===y&&(":"===this._flags.last_token.text&&0===this._flags.ternary_depth||p(this._flags.last_token,["get","set"])))&&(this.set_mode(v),this.indent(),this.handle_whitespace_and_comments(e,!0),this.start_of_object_property()||this.allow_wrap_or_preserved_newline(e,p(e,["do","for","if","while"])),!0)},T.prototype.handle_start_expr=function(e){this.start_of_statement(e)||this.handle_whitespace_and_comments(e);var t=k;if("["===e.text){if(this._flags.last_token.type===c.WORD||")"===this._flags.last_token.text)return p(this._flags.last_token,u)&&(this._output.space_before_token=!0),this.print_token(e),this.set_mode(t),this.indent(),void(this._options.space_in_paren&&(this._output.space_before_token=!0));t=b,S(this._flags.mode)&&("["!==this._flags.last_token.text&&(","!==this._flags.last_token.text||"]"!==this._last_last_text&&"}"!==this._last_last_text)||this._options.keep_array_indentation||this.print_newline()),f(this._flags.last_token.type,[c.START_EXPR,c.END_EXPR,c.WORD,c.OPERATOR])||(this._output.space_before_token=!0)}else{if(this._flags.last_token.type===c.RESERVED)"for"===this._flags.last_token.text?(this._output.space_before_token=this._options.space_before_conditional,t=w):f(this._flags.last_token.text,["if","while"])?(this._output.space_before_token=this._options.space_before_conditional,t=x):f(this._flags.last_word,["await","async"])?this._output.space_before_token=!0:"import"===this._flags.last_token.text&&""===e.whitespace_before?this._output.space_before_token=!1:(f(this._flags.last_token.text,u)||"catch"===this._flags.last_token.text)&&(this._output.space_before_token=!0);else if(this._flags.last_token.type===c.EQUALS||this._flags.last_token.type===c.OPERATOR)this.start_of_object_property()||this.allow_wrap_or_preserved_newline(e);else if(this._flags.last_token.type===c.WORD){this._output.space_before_token=!1;var n=this._tokens.peek(-3);if(this._options.space_after_named_function&&n){var r=this._tokens.peek(-4);p(n,["async","function"])||"*"===n.text&&p(r,["async","function"])?this._output.space_before_token=!0:this._flags.mode===y&&("{"!==n.text&&","!==n.text&&("*"!==n.text||"{"!==r.text&&","!==r.text)||(this._output.space_before_token=!0))}}else this.allow_wrap_or_preserved_newline(e);(this._flags.last_token.type===c.RESERVED&&("function"===this._flags.last_word||"typeof"===this._flags.last_word)||"*"===this._flags.last_token.text&&(f(this._last_last_text,["function","yield"])||this._flags.mode===y&&f(this._last_last_text,["{",","])))&&(this._output.space_before_token=this._options.space_after_anon_function)}";"===this._flags.last_token.text||this._flags.last_token.type===c.START_BLOCK?this.print_newline():this._flags.last_token.type!==c.END_EXPR&&this._flags.last_token.type!==c.START_EXPR&&this._flags.last_token.type!==c.END_BLOCK&&"."!==this._flags.last_token.text&&this._flags.last_token.type!==c.COMMA||this.allow_wrap_or_preserved_newline(e,e.newlines),this.print_token(e),this.set_mode(t),this._options.space_in_paren&&(this._output.space_before_token=!0),this.indent()},T.prototype.handle_end_expr=function(e){for(;this._flags.mode===v;)this.restore_mode();this.handle_whitespace_and_comments(e),this._flags.multiline_frame&&this.allow_wrap_or_preserved_newline(e,"]"===e.text&&S(this._flags.mode)&&!this._options.keep_array_indentation),this._options.space_in_paren&&(this._flags.last_token.type!==c.START_EXPR||this._options.space_in_empty_paren?this._output.space_before_token=!0:(this._output.trim(),this._output.space_before_token=!1)),this.deindent(),this.print_token(e),this.restore_mode(),C(this._output,this._previous_flags),this._flags.do_while&&this._previous_flags.mode===x&&(this._previous_flags.mode=k,this._flags.do_block=!1,this._flags.do_while=!1)},T.prototype.handle_start_block=function(e){this.handle_whitespace_and_comments(e);var t=this._tokens.peek(),n=this._tokens.peek(1);"switch"===this._flags.last_word&&this._flags.last_token.type===c.END_EXPR?(this.set_mode(g),this._flags.in_case_statement=!0):this._flags.case_body?this.set_mode(g):n&&(f(n.text,[":",","])&&f(t.type,[c.STRING,c.WORD,c.RESERVED])||f(t.text,["get","set","..."])&&f(n.type,[c.WORD,c.RESERVED]))?f(this._last_last_text,["class","interface"])?this.set_mode(g):this.set_mode(y):this._flags.last_token.type===c.OPERATOR&&"=>"===this._flags.last_token.text?this.set_mode(g):f(this._flags.last_token.type,[c.EQUALS,c.START_EXPR,c.COMMA,c.OPERATOR])||p(this._flags.last_token,["return","throw","import","default"])?this.set_mode(y):this.set_mode(g);var r=!t.comments_before&&"}"===t.text,i=r&&"function"===this._flags.last_word&&this._flags.last_token.type===c.END_EXPR;if(this._options.brace_preserve_inline){var o=0,a=null;this._flags.inline_frame=!0;do{if(o+=1,(a=this._tokens.peek(o-1)).newlines){this._flags.inline_frame=!1;break}}while(a.type!==c.EOF&&(a.type!==c.END_BLOCK||a.opened!==e))}("expand"===this._options.brace_style||"none"===this._options.brace_style&&e.newlines)&&!this._flags.inline_frame?this._flags.last_token.type!==c.OPERATOR&&(i||this._flags.last_token.type===c.EQUALS||p(this._flags.last_token,h)&&"else"!==this._flags.last_token.text)?this._output.space_before_token=!0:this.print_newline(!1,!0):(!S(this._previous_flags.mode)||this._flags.last_token.type!==c.START_EXPR&&this._flags.last_token.type!==c.COMMA||((this._flags.last_token.type===c.COMMA||this._options.space_in_paren)&&(this._output.space_before_token=!0),(this._flags.last_token.type===c.COMMA||this._flags.last_token.type===c.START_EXPR&&this._flags.inline_frame)&&(this.allow_wrap_or_preserved_newline(e),this._previous_flags.multiline_frame=this._previous_flags.multiline_frame||this._flags.multiline_frame,this._flags.multiline_frame=!1)),this._flags.last_token.type!==c.OPERATOR&&this._flags.last_token.type!==c.START_EXPR&&(this._flags.last_token.type!==c.START_BLOCK||this._flags.inline_frame?this._output.space_before_token=!0:this.print_newline())),this.print_token(e),this.indent(),r||this._options.brace_preserve_inline&&this._flags.inline_frame||this.print_newline()},T.prototype.handle_end_block=function(e){for(this.handle_whitespace_and_comments(e);this._flags.mode===v;)this.restore_mode();var t=this._flags.last_token.type===c.START_BLOCK;this._flags.inline_frame&&!t?this._output.space_before_token=!0:"expand"===this._options.brace_style?t||this.print_newline():t||(S(this._flags.mode)&&this._options.keep_array_indentation?(this._options.keep_array_indentation=!1,this.print_newline(),this._options.keep_array_indentation=!0):this.print_newline()),this.restore_mode(),this.print_token(e)},T.prototype.handle_word=function(e){if(e.type===c.RESERVED&&(f(e.text,["set","get"])&&this._flags.mode!==y||"import"===e.text&&"("===this._tokens.peek().text||f(e.text,["as","from"])&&!this._flags.import_block||this._flags.mode===y&&":"===this._tokens.peek().text)&&(e.type=c.WORD),this.start_of_statement(e)?p(this._flags.last_token,["var","let","const"])&&e.type===c.WORD&&(this._flags.declaration_statement=!0):!e.newlines||E(this._flags.mode)||this._flags.last_token.type===c.OPERATOR&&"--"!==this._flags.last_token.text&&"++"!==this._flags.last_token.text||this._flags.last_token.type===c.EQUALS||!this._options.preserve_newlines&&p(this._flags.last_token,["var","let","const","set","get"])?this.handle_whitespace_and_comments(e):(this.handle_whitespace_and_comments(e),this.print_newline()),this._flags.do_block&&!this._flags.do_while){if(d(e,"while"))return this._output.space_before_token=!0,this.print_token(e),this._output.space_before_token=!0,void(this._flags.do_while=!0);this.print_newline(),this._flags.do_block=!1}if(this._flags.if_block)if(!this._flags.else_block&&d(e,"else"))this._flags.else_block=!0;else{for(;this._flags.mode===v;)this.restore_mode();this._flags.if_block=!1,this._flags.else_block=!1}if(this._flags.in_case_statement&&p(e,["case","default"]))return this.print_newline(),this._flags.last_token.type!==c.END_BLOCK&&(this._flags.case_body||this._options.jslint_happy)&&this.deindent(),this._flags.case_body=!1,this.print_token(e),void(this._flags.in_case=!0);if(this._flags.last_token.type!==c.COMMA&&this._flags.last_token.type!==c.START_EXPR&&this._flags.last_token.type!==c.EQUALS&&this._flags.last_token.type!==c.OPERATOR||this.start_of_object_property()||this.allow_wrap_or_preserved_newline(e),d(e,"function"))return(f(this._flags.last_token.text,["}",";"])||this._output.just_added_newline()&&!f(this._flags.last_token.text,["(","[","{",":","=",","])&&this._flags.last_token.type!==c.OPERATOR)&&(this._output.just_added_blankline()||e.comments_before||(this.print_newline(),this.print_newline(!0))),this._flags.last_token.type===c.RESERVED||this._flags.last_token.type===c.WORD?p(this._flags.last_token,["get","set","new","export"])||p(this._flags.last_token,O)||d(this._flags.last_token,"default")&&"export"===this._last_last_text||"declare"===this._flags.last_token.text?this._output.space_before_token=!0:this.print_newline():this._flags.last_token.type===c.OPERATOR||"="===this._flags.last_token.text?this._output.space_before_token=!0:(this._flags.multiline_frame||!E(this._flags.mode)&&!S(this._flags.mode))&&this.print_newline(),this.print_token(e),void(this._flags.last_word=e.text);var t="NONE";this._flags.last_token.type===c.END_BLOCK?this._previous_flags.inline_frame?t="SPACE":p(e,["else","catch","finally","from"])?"expand"===this._options.brace_style||"end-expand"===this._options.brace_style||"none"===this._options.brace_style&&e.newlines?t="NEWLINE":(t="SPACE",this._output.space_before_token=!0):t="NEWLINE":this._flags.last_token.type===c.SEMICOLON&&this._flags.mode===g?t="NEWLINE":this._flags.last_token.type===c.SEMICOLON&&E(this._flags.mode)?t="SPACE":this._flags.last_token.type===c.STRING?t="NEWLINE":this._flags.last_token.type===c.RESERVED||this._flags.last_token.type===c.WORD||"*"===this._flags.last_token.text&&(f(this._last_last_text,["function","yield"])||this._flags.mode===y&&f(this._last_last_text,["{",","]))?t="SPACE":this._flags.last_token.type===c.START_BLOCK?t=this._flags.inline_frame?"SPACE":"NEWLINE":this._flags.last_token.type===c.END_EXPR&&(this._output.space_before_token=!0,t="NEWLINE"),p(e,u)&&")"!==this._flags.last_token.text&&(t=this._flags.inline_frame||"else"===this._flags.last_token.text||"export"===this._flags.last_token.text?"SPACE":"NEWLINE"),p(e,["else","catch","finally"])?(this._flags.last_token.type!==c.END_BLOCK||this._previous_flags.mode!==g||"expand"===this._options.brace_style||"end-expand"===this._options.brace_style||"none"===this._options.brace_style&&e.newlines)&&!this._flags.inline_frame?this.print_newline():(this._output.trim(!0),"}"!==this._output.current_line.last()&&this.print_newline(),this._output.space_before_token=!0):"NEWLINE"===t?p(this._flags.last_token,h)||"declare"===this._flags.last_token.text&&p(e,["var","let","const"])?this._output.space_before_token=!0:this._flags.last_token.type!==c.END_EXPR?this._flags.last_token.type===c.START_EXPR&&p(e,["var","let","const"])||":"===this._flags.last_token.text||(d(e,"if")&&d(e.previous,"else")?this._output.space_before_token=!0:this.print_newline()):p(e,u)&&")"!==this._flags.last_token.text&&this.print_newline():this._flags.multiline_frame&&S(this._flags.mode)&&","===this._flags.last_token.text&&"}"===this._last_last_text?this.print_newline():"SPACE"===t&&(this._output.space_before_token=!0),!e.previous||e.previous.type!==c.WORD&&e.previous.type!==c.RESERVED||(this._output.space_before_token=!0),this.print_token(e),this._flags.last_word=e.text,e.type===c.RESERVED&&("do"===e.text?this._flags.do_block=!0:"if"===e.text?this._flags.if_block=!0:"import"===e.text?this._flags.import_block=!0:this._flags.import_block&&d(e,"from")&&(this._flags.import_block=!1))},T.prototype.handle_semicolon=function(e){this.start_of_statement(e)?this._output.space_before_token=!1:this.handle_whitespace_and_comments(e);for(var t=this._tokens.peek();!(this._flags.mode!==v||this._flags.if_block&&d(t,"else")||this._flags.do_block);)this.restore_mode();this._flags.import_block&&(this._flags.import_block=!1),this.print_token(e)},T.prototype.handle_string=function(e){this.start_of_statement(e)?this._output.space_before_token=!0:(this.handle_whitespace_and_comments(e),this._flags.last_token.type===c.RESERVED||this._flags.last_token.type===c.WORD||this._flags.inline_frame?this._output.space_before_token=!0:this._flags.last_token.type===c.COMMA||this._flags.last_token.type===c.START_EXPR||this._flags.last_token.type===c.EQUALS||this._flags.last_token.type===c.OPERATOR?this.start_of_object_property()||this.allow_wrap_or_preserved_newline(e):this.print_newline()),this.print_token(e)},T.prototype.handle_equals=function(e){this.start_of_statement(e)||this.handle_whitespace_and_comments(e),this._flags.declaration_statement&&(this._flags.declaration_assignment=!0),this._output.space_before_token=!0,this.print_token(e),this._output.space_before_token=!0},T.prototype.handle_comma=function(e){this.handle_whitespace_and_comments(e,!0),this.print_token(e),this._output.space_before_token=!0,this._flags.declaration_statement?(E(this._flags.parent.mode)&&(this._flags.declaration_assignment=!1),this._flags.declaration_assignment?(this._flags.declaration_assignment=!1,this.print_newline(!1,!0)):this._options.comma_first&&this.allow_wrap_or_preserved_newline(e)):this._flags.mode===y||this._flags.mode===v&&this._flags.parent.mode===y?(this._flags.mode===v&&this.restore_mode(),this._flags.inline_frame||this.print_newline()):this._options.comma_first&&this.allow_wrap_or_preserved_newline(e)},T.prototype.handle_operator=function(e){var t="*"===e.text&&(p(this._flags.last_token,["function","yield"])||f(this._flags.last_token.type,[c.START_BLOCK,c.COMMA,c.END_BLOCK,c.SEMICOLON])),n=f(e.text,["-","+"])&&(f(this._flags.last_token.type,[c.START_BLOCK,c.START_EXPR,c.EQUALS,c.OPERATOR])||f(this._flags.last_token.text,u)||","===this._flags.last_token.text);if(this.start_of_statement(e));else{var r=!t;this.handle_whitespace_and_comments(e,r)}if(p(this._flags.last_token,h))return this._output.space_before_token=!0,void this.print_token(e);if("*"!==e.text||this._flags.last_token.type!==c.DOT)if("::"!==e.text){if(this._flags.last_token.type===c.OPERATOR&&f(this._options.operator_position,m)&&this.allow_wrap_or_preserved_newline(e),":"===e.text&&this._flags.in_case)return this.print_token(e),this._flags.in_case=!1,this._flags.case_body=!0,void(this._tokens.peek().type!==c.START_BLOCK?(this.indent(),this.print_newline()):this._output.space_before_token=!0);var i=!0,o=!0,a=!1;if(":"===e.text?0===this._flags.ternary_depth?i=!1:(this._flags.ternary_depth-=1,a=!0):"?"===e.text&&(this._flags.ternary_depth+=1),!n&&!t&&this._options.preserve_newlines&&f(e.text,l)){var s=":"===e.text,d=s&&a,y=s&&!a;switch(this._options.operator_position){case _.before_newline:return this._output.space_before_token=!y,this.print_token(e),s&&!d||this.allow_wrap_or_preserved_newline(e),void(this._output.space_before_token=!0);case _.after_newline:return this._output.space_before_token=!0,!s||d?this._tokens.peek().newlines?this.print_newline(!1,!0):this.allow_wrap_or_preserved_newline(e):this._output.space_before_token=!1,this.print_token(e),void(this._output.space_before_token=!0);case _.preserve_newline:return y||this.allow_wrap_or_preserved_newline(e),i=!(this._output.just_added_newline()||y),this._output.space_before_token=i,this.print_token(e),void(this._output.space_before_token=!0)}}if(t){this.allow_wrap_or_preserved_newline(e),i=!1;var b=this._tokens.peek();o=b&&f(b.type,[c.WORD,c.RESERVED])}else"..."===e.text?(this.allow_wrap_or_preserved_newline(e),i=this._flags.last_token.type===c.START_BLOCK,o=!1):(f(e.text,["--","++","!","~"])||n)&&(this._flags.last_token.type!==c.COMMA&&this._flags.last_token.type!==c.START_EXPR||this.allow_wrap_or_preserved_newline(e),i=!1,o=!1,!e.newlines||"--"!==e.text&&"++"!==e.text||this.print_newline(!1,!0),";"===this._flags.last_token.text&&E(this._flags.mode)&&(i=!0),this._flags.last_token.type===c.RESERVED?i=!0:this._flags.last_token.type===c.END_EXPR?i=!("]"===this._flags.last_token.text&&("--"===e.text||"++"===e.text)):this._flags.last_token.type===c.OPERATOR&&(i=f(e.text,["--","-","++","+"])&&f(this._flags.last_token.text,["--","-","++","+"]),f(e.text,["+","-"])&&f(this._flags.last_token.text,["--","++"])&&(o=!0)),(this._flags.mode!==g||this._flags.inline_frame)&&this._flags.mode!==v||"{"!==this._flags.last_token.text&&";"!==this._flags.last_token.text||this.print_newline());this._output.space_before_token=this._output.space_before_token||i,this.print_token(e),this._output.space_before_token=o}else this.print_token(e);else this.print_token(e)},T.prototype.handle_block_comment=function(e,t){return this._output.raw?(this._output.add_raw_token(e),void(e.directives&&"end"===e.directives.preserve&&(this._output.raw=this._options.test_output_raw))):e.directives?(this.print_newline(!1,t),this.print_token(e),"start"===e.directives.preserve&&(this._output.raw=!0),void this.print_newline(!1,!0)):o.newline.test(e.text)||e.newlines?void this.print_block_commment(e,t):(this._output.space_before_token=!0,this.print_token(e),void(this._output.space_before_token=!0))},T.prototype.print_block_commment=function(e,t){var n,r=function(e){for(var t=[],n=(e=e.replace(o.allLineBreaks,"\n")).indexOf("\n");-1!==n;)t.push(e.substring(0,n)),n=(e=e.substring(n+1)).indexOf("\n");return e.length&&t.push(e),t}(e.text),i=!1,a=!1,s=e.whitespace_before,u=s.length;if(this.print_newline(!1,t),this.print_token_line_indentation(e),this._output.add_token(r[0]),this.print_newline(!1,t),r.length>1){for(i=function(e,t){for(var n=0;n<e.length;n++)if(e[n].trim().charAt(0)!==t)return!1;return!0}(r=r.slice(1),"*"),a=function(e,t){for(var n,r=0,i=e.length;r<i;r++)if((n=e[r])&&0!==n.indexOf(t))return!1;return!0}(r,s),i&&(this._flags.alignment=1),n=0;n<r.length;n++)i?(this.print_token_line_indentation(e),this._output.add_token(r[n].replace(/^\s+/g,""))):a&&r[n]?(this.print_token_line_indentation(e),this._output.add_token(r[n].substring(u))):(this._output.current_line.set_indent(-1),this._output.add_token(r[n])),this.print_newline(!1,t);this._flags.alignment=0}},T.prototype.handle_comment=function(e,t){e.newlines?this.print_newline(!1,t):this._output.trim(!0),this._output.space_before_token=!0,this.print_token(e),this.print_newline(!1,t)},T.prototype.handle_dot=function(e){this.start_of_statement(e)||this.handle_whitespace_and_comments(e,!0),p(this._flags.last_token,h)?this._output.space_before_token=!1:this.allow_wrap_or_preserved_newline(e,")"===this._flags.last_token.text&&this._options.break_chained_methods),this._options.unindent_chained_methods&&this._output.just_added_newline()&&this.deindent(),this.print_token(e)},T.prototype.handle_unknown=function(e,t){this.print_token(e),"\n"===e.text[e.text.length-1]&&this.print_newline(!1,t)},T.prototype.handle_eof=function(e){for(;this._flags.mode===v;)this.restore_mode();this.handle_whitespace_and_comments(e)},e.exports.Beautifier=T},function(e,t,n){"use strict";function r(e){this.__parent=e,this.__character_count=0,this.__indent_count=-1,this.__alignment_count=0,this.__wrap_point_index=0,this.__wrap_point_character_count=0,this.__wrap_point_indent_count=-1,this.__wrap_point_alignment_count=0,this.__items=[]}function i(e,t){this.__cache=[""],this.__indent_size=e.indent_size,this.__indent_string=e.indent_char,e.indent_with_tabs||(this.__indent_string=new Array(e.indent_size+1).join(e.indent_char)),t=t||"",e.indent_level>0&&(t=new Array(e.indent_level+1).join(this.__indent_string)),this.__base_string=t,this.__base_string_length=t.length}function o(e,t){this.__indent_cache=new i(e,t),this.raw=!1,this._end_with_newline=e.end_with_newline,this.indent_size=e.indent_size,this.wrap_line_length=e.wrap_line_length,this.indent_empty_lines=e.indent_empty_lines,this.__lines=[],this.previous_line=null,this.current_line=null,this.next_line=new r(this),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1,this.__add_outputline()}r.prototype.clone_empty=function(){var e=new r(this.__parent);return e.set_indent(this.__indent_count,this.__alignment_count),e},r.prototype.item=function(e){return e<0?this.__items[this.__items.length+e]:this.__items[e]},r.prototype.has_match=function(e){for(var t=this.__items.length-1;t>=0;t--)if(this.__items[t].match(e))return!0;return!1},r.prototype.set_indent=function(e,t){this.is_empty()&&(this.__indent_count=e||0,this.__alignment_count=t||0,this.__character_count=this.__parent.get_indent_size(this.__indent_count,this.__alignment_count))},r.prototype._set_wrap_point=function(){this.__parent.wrap_line_length&&(this.__wrap_point_index=this.__items.length,this.__wrap_point_character_count=this.__character_count,this.__wrap_point_indent_count=this.__parent.next_line.__indent_count,this.__wrap_point_alignment_count=this.__parent.next_line.__alignment_count)},r.prototype._should_wrap=function(){return this.__wrap_point_index&&this.__character_count>this.__parent.wrap_line_length&&this.__wrap_point_character_count>this.__parent.next_line.__character_count},r.prototype._allow_wrap=function(){if(this._should_wrap()){this.__parent.add_new_line();var e=this.__parent.current_line;return e.set_indent(this.__wrap_point_indent_count,this.__wrap_point_alignment_count),e.__items=this.__items.slice(this.__wrap_point_index),this.__items=this.__items.slice(0,this.__wrap_point_index),e.__character_count+=this.__character_count-this.__wrap_point_character_count,this.__character_count=this.__wrap_point_character_count," "===e.__items[0]&&(e.__items.splice(0,1),e.__character_count-=1),!0}return!1},r.prototype.is_empty=function(){return 0===this.__items.length},r.prototype.last=function(){return this.is_empty()?null:this.__items[this.__items.length-1]},r.prototype.push=function(e){this.__items.push(e);var t=e.lastIndexOf("\n");-1!==t?this.__character_count=e.length-t:this.__character_count+=e.length},r.prototype.pop=function(){var e=null;return this.is_empty()||(e=this.__items.pop(),this.__character_count-=e.length),e},r.prototype._remove_indent=function(){this.__indent_count>0&&(this.__indent_count-=1,this.__character_count-=this.__parent.indent_size)},r.prototype._remove_wrap_indent=function(){this.__wrap_point_indent_count>0&&(this.__wrap_point_indent_count-=1)},r.prototype.trim=function(){for(;" "===this.last();)this.__items.pop(),this.__character_count-=1},r.prototype.toString=function(){var e="";return this.is_empty()?this.__parent.indent_empty_lines&&(e=this.__parent.get_indent_string(this.__indent_count)):(e=this.__parent.get_indent_string(this.__indent_count,this.__alignment_count),e+=this.__items.join("")),e},i.prototype.get_indent_size=function(e,t){var n=this.__base_string_length;return t=t||0,e<0&&(n=0),n+=e*this.__indent_size,n+=t},i.prototype.get_indent_string=function(e,t){var n=this.__base_string;return t=t||0,e<0&&(e=0,n=""),t+=e*this.__indent_size,this.__ensure_cache(t),n+=this.__cache[t]},i.prototype.__ensure_cache=function(e){for(;e>=this.__cache.length;)this.__add_column()},i.prototype.__add_column=function(){var e=this.__cache.length,t=0,n="";this.__indent_size&&e>=this.__indent_size&&(e-=(t=Math.floor(e/this.__indent_size))*this.__indent_size,n=new Array(t+1).join(this.__indent_string)),e&&(n+=new Array(e+1).join(" ")),this.__cache.push(n)},o.prototype.__add_outputline=function(){this.previous_line=this.current_line,this.current_line=this.next_line.clone_empty(),this.__lines.push(this.current_line)},o.prototype.get_line_number=function(){return this.__lines.length},o.prototype.get_indent_string=function(e,t){return this.__indent_cache.get_indent_string(e,t)},o.prototype.get_indent_size=function(e,t){return this.__indent_cache.get_indent_size(e,t)},o.prototype.is_empty=function(){return!this.previous_line&&this.current_line.is_empty()},o.prototype.add_new_line=function(e){return!(this.is_empty()||!e&&this.just_added_newline()||(this.raw||this.__add_outputline(),0))},o.prototype.get_code=function(e){this.trim(!0);var t=this.current_line.pop();t&&("\n"===t[t.length-1]&&(t=t.replace(/\n+$/g,"")),this.current_line.push(t)),this._end_with_newline&&this.__add_outputline();var n=this.__lines.join("\n");return"\n"!==e&&(n=n.replace(/[\n]/g,e)),n},o.prototype.set_wrap_point=function(){this.current_line._set_wrap_point()},o.prototype.set_indent=function(e,t){return e=e||0,t=t||0,this.next_line.set_indent(e,t),this.__lines.length>1?(this.current_line.set_indent(e,t),!0):(this.current_line.set_indent(),!1)},o.prototype.add_raw_token=function(e){for(var t=0;t<e.newlines;t++)this.__add_outputline();this.current_line.set_indent(-1),this.current_line.push(e.whitespace_before),this.current_line.push(e.text),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1},o.prototype.add_token=function(e){this.__add_space_before_token(),this.current_line.push(e),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=this.current_line._allow_wrap()},o.prototype.__add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&(this.non_breaking_space||this.set_wrap_point(),this.current_line.push(" "))},o.prototype.remove_indent=function(e){for(var t=this.__lines.length;e<t;)this.__lines[e]._remove_indent(),e++;this.current_line._remove_wrap_indent()},o.prototype.trim=function(e){for(e=void 0!==e&&e,this.current_line.trim();e&&this.__lines.length>1&&this.current_line.is_empty();)this.__lines.pop(),this.current_line=this.__lines[this.__lines.length-1],this.current_line.trim();this.previous_line=this.__lines.length>1?this.__lines[this.__lines.length-2]:null},o.prototype.just_added_newline=function(){return this.current_line.is_empty()},o.prototype.just_added_blankline=function(){return this.is_empty()||this.current_line.is_empty()&&this.previous_line.is_empty()},o.prototype.ensure_empty_line_above=function(e,t){for(var n=this.__lines.length-2;n>=0;){var i=this.__lines[n];if(i.is_empty())break;if(0!==i.item(0).indexOf(e)&&i.item(-1)!==t){this.__lines.splice(n+1,0,new r(this)),this.previous_line=this.__lines[this.__lines.length-2];break}n--}},e.exports.Output=o},function(e,t,n){"use strict";e.exports.Token=function(e,t,n,r){this.type=e,this.text=t,this.comments_before=null,this.newlines=n||0,this.whitespace_before=r||"",this.parent=null,this.next=null,this.previous=null,this.opened=null,this.closed=null,this.directives=null}},function(e,t,n){"use strict";var r="\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc",i="\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f",o="(?:\\\\u[0-9a-fA-F]{4}|[\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a"+r+"])";t.identifier=new RegExp(o+"(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f])*","g"),t.identifierStart=new RegExp(o),t.identifierMatch=new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a"+r+i+"])+"),t.newline=/[\n\r\u2028\u2029]/,t.lineBreak=new RegExp("\r\n|"+t.newline.source),t.allLineBreaks=new RegExp(t.lineBreak.source,"g")},function(e,t,n){"use strict";var r=n(6).Options,i=["before-newline","after-newline","preserve-newline"];function o(e){r.call(this,e,"js");var t=this.raw_options.brace_style||null;"expand-strict"===t?this.raw_options.brace_style="expand":"collapse-preserve-inline"===t?this.raw_options.brace_style="collapse,preserve-inline":void 0!==this.raw_options.braces_on_own_line&&(this.raw_options.brace_style=this.raw_options.braces_on_own_line?"expand":"collapse");var n=this._get_selection_list("brace_style",["collapse","expand","end-expand","none","preserve-inline"]);this.brace_preserve_inline=!1,this.brace_style="collapse";for(var o=0;o<n.length;o++)"preserve-inline"===n[o]?this.brace_preserve_inline=!0:this.brace_style=n[o];this.unindent_chained_methods=this._get_boolean("unindent_chained_methods"),this.break_chained_methods=this._get_boolean("break_chained_methods"),this.space_in_paren=this._get_boolean("space_in_paren"),this.space_in_empty_paren=this._get_boolean("space_in_empty_paren"),this.jslint_happy=this._get_boolean("jslint_happy"),this.space_after_anon_function=this._get_boolean("space_after_anon_function"),this.space_after_named_function=this._get_boolean("space_after_named_function"),this.keep_array_indentation=this._get_boolean("keep_array_indentation"),this.space_before_conditional=this._get_boolean("space_before_conditional",!0),this.unescape_strings=this._get_boolean("unescape_strings"),this.e4x=this._get_boolean("e4x"),this.comma_first=this._get_boolean("comma_first"),this.operator_position=this._get_selection("operator_position",i),this.test_output_raw=this._get_boolean("test_output_raw"),this.jslint_happy&&(this.space_after_anon_function=!0)}o.prototype=new r,e.exports.Options=o},function(e,t,n){"use strict";function r(e,t){this.raw_options=i(e,t),this.disabled=this._get_boolean("disabled"),this.eol=this._get_characters("eol","auto"),this.end_with_newline=this._get_boolean("end_with_newline"),this.indent_size=this._get_number("indent_size",4),this.indent_char=this._get_characters("indent_char"," "),this.indent_level=this._get_number("indent_level"),this.preserve_newlines=this._get_boolean("preserve_newlines",!0),this.max_preserve_newlines=this._get_number("max_preserve_newlines",32786),this.preserve_newlines||(this.max_preserve_newlines=0),this.indent_with_tabs=this._get_boolean("indent_with_tabs","\t"===this.indent_char),this.indent_with_tabs&&(this.indent_char="\t",1===this.indent_size&&(this.indent_size=4)),this.wrap_line_length=this._get_number("wrap_line_length",this._get_number("max_char")),this.indent_empty_lines=this._get_boolean("indent_empty_lines"),this.templating=this._get_selection_list("templating",["auto","none","django","erb","handlebars","php"],["auto"])}function i(e,t){var n,r={};for(n in e=o(e))n!==t&&(r[n]=e[n]);if(t&&e[t])for(n in e[t])r[n]=e[t][n];return r}function o(e){var t,n={};for(t in e)n[t.replace(/-/g,"_")]=e[t];return n}r.prototype._get_array=function(e,t){var n=this.raw_options[e],r=t||[];return"object"==typeof n?null!==n&&"function"==typeof n.concat&&(r=n.concat()):"string"==typeof n&&(r=n.split(/[^a-zA-Z0-9_\/\-]+/)),r},r.prototype._get_boolean=function(e,t){var n=this.raw_options[e];return void 0===n?!!t:!!n},r.prototype._get_characters=function(e,t){var n=this.raw_options[e],r=t||"";return"string"==typeof n&&(r=n.replace(/\\r/,"\r").replace(/\\n/,"\n").replace(/\\t/,"\t")),r},r.prototype._get_number=function(e,t){var n=this.raw_options[e];t=parseInt(t,10),isNaN(t)&&(t=0);var r=parseInt(n,10);return isNaN(r)&&(r=t),r},r.prototype._get_selection=function(e,t,n){var r=this._get_selection_list(e,t,n);if(1!==r.length)throw new Error("Invalid Option Value: The option '"+e+"' can only be one of the following values:\n"+t+"\nYou passed in: '"+this.raw_options[e]+"'");return r[0]},r.prototype._get_selection_list=function(e,t,n){if(!t||0===t.length)throw new Error("Selection list cannot be empty.");if(n=n||[t[0]],!this._is_valid_selection(n,t))throw new Error("Invalid Default Value!");var r=this._get_array(e,n);if(!this._is_valid_selection(r,t))throw new Error("Invalid Option Value: The option '"+e+"' can contain only the following values:\n"+t+"\nYou passed in: '"+this.raw_options[e]+"'");return r},r.prototype._is_valid_selection=function(e,t){return e.length&&t.length&&!e.some((function(e){return-1===t.indexOf(e)}))},e.exports.Options=r,e.exports.normalizeOpts=o,e.exports.mergeOpts=i},function(e,t,n){"use strict";var r=n(8).InputScanner,i=n(9).Tokenizer,o=n(9).TOKEN,a=n(13).Directives,s=n(4),u=n(12).Pattern,l=n(14).TemplatablePattern;function c(e,t){return-1!==t.indexOf(e)}var f={START_EXPR:"TK_START_EXPR",END_EXPR:"TK_END_EXPR",START_BLOCK:"TK_START_BLOCK",END_BLOCK:"TK_END_BLOCK",WORD:"TK_WORD",RESERVED:"TK_RESERVED",SEMICOLON:"TK_SEMICOLON",STRING:"TK_STRING",EQUALS:"TK_EQUALS",OPERATOR:"TK_OPERATOR",COMMA:"TK_COMMA",BLOCK_COMMENT:"TK_BLOCK_COMMENT",COMMENT:"TK_COMMENT",DOT:"TK_DOT",UNKNOWN:"TK_UNKNOWN",START:o.START,RAW:o.RAW,EOF:o.EOF},d=new a(/\/\*/,/\*\//),p=/0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/,h=/[0-9]/,_=/[^\d\.]/,m=">>> === !== << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "),g=">>>= ... >>= <<= === >>> !== **= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";g=(g="\\?\\.(?!\\d) "+(g=g.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"))).replace(/ /g,"|");var v,y=new RegExp(g),b="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","),w=b.concat(["do","in","of","else","get","set","new","catch","finally","typeof","yield","async","await","from","as"]),x=new RegExp("^(?:"+w.join("|")+")$"),k=function(e,t){i.call(this,e,t),this._patterns.whitespace=this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,/\u2028\u2029/.source);var n=new u(this._input),r=new l(this._input).read_options(this._options);this.__patterns={template:r,identifier:r.starting_with(s.identifier).matching(s.identifierMatch),number:n.matching(p),punct:n.matching(y),comment:n.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),block_comment:n.starting_with(/\/\*/).until_after(/\*\//),html_comment_start:n.matching(/<!--/),html_comment_end:n.matching(/-->/),include:n.starting_with(/#include/).until_after(s.lineBreak),shebang:n.starting_with(/#!/).until_after(s.lineBreak),xml:n.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),single_quote:r.until(/['\\\n\r\u2028\u2029]/),double_quote:r.until(/["\\\n\r\u2028\u2029]/),template_text:r.until(/[`\\$]/),template_expression:r.until(/[`}\\]/)}};(k.prototype=new i)._is_comment=function(e){return e.type===f.COMMENT||e.type===f.BLOCK_COMMENT||e.type===f.UNKNOWN},k.prototype._is_opening=function(e){return e.type===f.START_BLOCK||e.type===f.START_EXPR},k.prototype._is_closing=function(e,t){return(e.type===f.END_BLOCK||e.type===f.END_EXPR)&&t&&("]"===e.text&&"["===t.text||")"===e.text&&"("===t.text||"}"===e.text&&"{"===t.text)},k.prototype._reset=function(){v=!1},k.prototype._get_next_token=function(e,t){var n=null;this._readWhitespace();var r=this._input.peek();return null===r?this._create_token(f.EOF,""):n=(n=(n=(n=(n=(n=(n=(n=(n=n||this._read_non_javascript(r))||this._read_string(r))||this._read_word(e))||this._read_singles(r))||this._read_comment(r))||this._read_regexp(r,e))||this._read_xml(r,e))||this._read_punctuation())||this._create_token(f.UNKNOWN,this._input.next())},k.prototype._read_word=function(e){var t;return""!==(t=this.__patterns.identifier.read())?(t=t.replace(s.allLineBreaks,"\n"),e.type!==f.DOT&&(e.type!==f.RESERVED||"set"!==e.text&&"get"!==e.text)&&x.test(t)?"in"===t||"of"===t?this._create_token(f.OPERATOR,t):this._create_token(f.RESERVED,t):this._create_token(f.WORD,t)):""!==(t=this.__patterns.number.read())?this._create_token(f.WORD,t):void 0},k.prototype._read_singles=function(e){var t=null;return"("===e||"["===e?t=this._create_token(f.START_EXPR,e):")"===e||"]"===e?t=this._create_token(f.END_EXPR,e):"{"===e?t=this._create_token(f.START_BLOCK,e):"}"===e?t=this._create_token(f.END_BLOCK,e):";"===e?t=this._create_token(f.SEMICOLON,e):"."===e&&_.test(this._input.peek(1))?t=this._create_token(f.DOT,e):","===e&&(t=this._create_token(f.COMMA,e)),t&&this._input.next(),t},k.prototype._read_punctuation=function(){var e=this.__patterns.punct.read();if(""!==e)return"="===e?this._create_token(f.EQUALS,e):"?."===e?this._create_token(f.DOT,e):this._create_token(f.OPERATOR,e)},k.prototype._read_non_javascript=function(e){var t="";if("#"===e){if(this._is_first_token()&&(t=this.__patterns.shebang.read()))return this._create_token(f.UNKNOWN,t.trim()+"\n");if(t=this.__patterns.include.read())return this._create_token(f.UNKNOWN,t.trim()+"\n");e=this._input.next();var n="#";if(this._input.hasNext()&&this._input.testChar(h)){do{n+=e=this._input.next()}while(this._input.hasNext()&&"#"!==e&&"="!==e);return"#"===e||("["===this._input.peek()&&"]"===this._input.peek(1)?(n+="[]",this._input.next(),this._input.next()):"{"===this._input.peek()&&"}"===this._input.peek(1)&&(n+="{}",this._input.next(),this._input.next())),this._create_token(f.WORD,n)}this._input.back()}else if("<"===e&&this._is_first_token()){if(t=this.__patterns.html_comment_start.read()){for(;this._input.hasNext()&&!this._input.testChar(s.newline);)t+=this._input.next();return v=!0,this._create_token(f.COMMENT,t)}}else if(v&&"-"===e&&(t=this.__patterns.html_comment_end.read()))return v=!1,this._create_token(f.COMMENT,t);return null},k.prototype._read_comment=function(e){var t=null;if("/"===e){var n="";if("*"===this._input.peek(1)){n=this.__patterns.block_comment.read();var r=d.get_directives(n);r&&"start"===r.ignore&&(n+=d.readIgnored(this._input)),n=n.replace(s.allLineBreaks,"\n"),(t=this._create_token(f.BLOCK_COMMENT,n)).directives=r}else"/"===this._input.peek(1)&&(n=this.__patterns.comment.read(),t=this._create_token(f.COMMENT,n))}return t},k.prototype._read_string=function(e){if("`"===e||"'"===e||'"'===e){var t=this._input.next();return this.has_char_escapes=!1,t+="`"===e?this._read_string_recursive("`",!0,"${"):this._read_string_recursive(e),this.has_char_escapes&&this._options.unescape_strings&&(t=function(e){for(var t="",n=0,i=new r(e),o=null;i.hasNext();)if((o=i.match(/([\s]|[^\\]|\\\\)+/g))&&(t+=o[0]),"\\"===i.peek()){if(i.next(),"x"===i.peek())o=i.match(/x([0-9A-Fa-f]{2})/g);else{if("u"!==i.peek()){t+="\\",i.hasNext()&&(t+=i.next());continue}o=i.match(/u([0-9A-Fa-f]{4})/g)}if(!o)return e;if((n=parseInt(o[1],16))>126&&n<=255&&0===o[0].indexOf("x"))return e;if(n>=0&&n<32){t+="\\"+o[0];continue}t+=34===n||39===n||92===n?"\\"+String.fromCharCode(n):String.fromCharCode(n)}return t}(t)),this._input.peek()===e&&(t+=this._input.next()),t=t.replace(s.allLineBreaks,"\n"),this._create_token(f.STRING,t)}return null},k.prototype._allow_regexp_or_xml=function(e){return e.type===f.RESERVED&&c(e.text,["return","case","throw","else","do","typeof","yield"])||e.type===f.END_EXPR&&")"===e.text&&e.opened.previous.type===f.RESERVED&&c(e.opened.previous.text,["if","while","for"])||c(e.type,[f.COMMENT,f.START_EXPR,f.START_BLOCK,f.START,f.END_BLOCK,f.OPERATOR,f.EQUALS,f.EOF,f.SEMICOLON,f.COMMA])},k.prototype._read_regexp=function(e,t){if("/"===e&&this._allow_regexp_or_xml(t)){for(var n=this._input.next(),r=!1,i=!1;this._input.hasNext()&&(r||i||this._input.peek()!==e)&&!this._input.testChar(s.newline);)n+=this._input.peek(),r?r=!1:(r="\\"===this._input.peek(),"["===this._input.peek()?i=!0:"]"===this._input.peek()&&(i=!1)),this._input.next();return this._input.peek()===e&&(n+=this._input.next(),n+=this._input.read(s.identifier)),this._create_token(f.STRING,n)}return null},k.prototype._read_xml=function(e,t){if(this._options.e4x&&"<"===e&&this._allow_regexp_or_xml(t)){var n="",r=this.__patterns.xml.read_match();if(r){for(var i=r[2].replace(/^{\s+/,"{").replace(/\s+}$/,"}"),o=0===i.indexOf("{"),a=0;r;){var u=!!r[1],l=r[2];if(!(r[r.length-1]||"![CDATA["===l.slice(0,8))&&(l===i||o&&l.replace(/^{\s+/,"{").replace(/\s+}$/,"}"))&&(u?--a:++a),n+=r[0],a<=0)break;r=this.__patterns.xml.read_match()}return r||(n+=this._input.match(/[\s\S]*/g)[0]),n=n.replace(s.allLineBreaks,"\n"),this._create_token(f.STRING,n)}}return null},k.prototype._read_string_recursive=function(e,t,n){var r,i;"'"===e?i=this.__patterns.single_quote:'"'===e?i=this.__patterns.double_quote:"`"===e?i=this.__patterns.template_text:"}"===e&&(i=this.__patterns.template_expression);for(var o=i.read(),a="";this._input.hasNext();){if((a=this._input.next())===e||!t&&s.newline.test(a)){this._input.back();break}"\\"===a&&this._input.hasNext()?("x"===(r=this._input.peek())||"u"===r?this.has_char_escapes=!0:"\r"===r&&"\n"===this._input.peek(1)&&this._input.next(),a+=this._input.next()):n&&("${"===n&&"$"===a&&"{"===this._input.peek()&&(a+=this._input.next()),n===a&&(a+="`"===e?this._read_string_recursive("}",t,"`"):this._read_string_recursive("`",t,"${"),this._input.hasNext()&&(a+=this._input.next()))),o+=a+=i.read()}return o},e.exports.Tokenizer=k,e.exports.TOKEN=f,e.exports.positionable_operators=m.slice(),e.exports.line_starters=b.slice()},function(e,t,n){"use strict";var r=RegExp.prototype.hasOwnProperty("sticky");function i(e){this.__input=e||"",this.__input_length=this.__input.length,this.__position=0}i.prototype.restart=function(){this.__position=0},i.prototype.back=function(){this.__position>0&&(this.__position-=1)},i.prototype.hasNext=function(){return this.__position<this.__input_length},i.prototype.next=function(){var e=null;return this.hasNext()&&(e=this.__input.charAt(this.__position),this.__position+=1),e},i.prototype.peek=function(e){var t=null;return e=e||0,(e+=this.__position)>=0&&e<this.__input_length&&(t=this.__input.charAt(e)),t},i.prototype.__match=function(e,t){e.lastIndex=t;var n=e.exec(this.__input);return!n||r&&e.sticky||n.index!==t&&(n=null),n},i.prototype.test=function(e,t){return t=t||0,(t+=this.__position)>=0&&t<this.__input_length&&!!this.__match(e,t)},i.prototype.testChar=function(e,t){var n=this.peek(t);return e.lastIndex=0,null!==n&&e.test(n)},i.prototype.match=function(e){var t=this.__match(e,this.__position);return t?this.__position+=t[0].length:t=null,t},i.prototype.read=function(e,t,n){var r,i="";return e&&(r=this.match(e))&&(i+=r[0]),!t||!r&&e||(i+=this.readUntil(t,n)),i},i.prototype.readUntil=function(e,t){var n,r=this.__position;e.lastIndex=this.__position;var i=e.exec(this.__input);return i?(r=i.index,t&&(r+=i[0].length)):r=this.__input_length,n=this.__input.substring(this.__position,r),this.__position=r,n},i.prototype.readUntilAfter=function(e){return this.readUntil(e,!0)},i.prototype.get_regexp=function(e,t){var n=null,i="g";return t&&r&&(i="y"),"string"==typeof e&&""!==e?n=new RegExp(e,i):e&&(n=new RegExp(e.source,i)),n},i.prototype.get_literal_regexp=function(e){return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))},i.prototype.peekUntilAfter=function(e){var t=this.__position,n=this.readUntilAfter(e);return this.__position=t,n},i.prototype.lookBack=function(e){var t=this.__position-1;return t>=e.length&&this.__input.substring(t-e.length,t).toLowerCase()===e},e.exports.InputScanner=i},function(e,t,n){"use strict";var r=n(8).InputScanner,i=n(3).Token,o=n(10).TokenStream,a=n(11).WhitespacePattern,s={START:"TK_START",RAW:"TK_RAW",EOF:"TK_EOF"},u=function(e,t){this._input=new r(e),this._options=t||{},this.__tokens=null,this._patterns={},this._patterns.whitespace=new a(this._input)};u.prototype.tokenize=function(){var e;this._input.restart(),this.__tokens=new o,this._reset();for(var t=new i(s.START,""),n=null,r=[],a=new o;t.type!==s.EOF;){for(e=this._get_next_token(t,n);this._is_comment(e);)a.add(e),e=this._get_next_token(t,n);a.isEmpty()||(e.comments_before=a,a=new o),e.parent=n,this._is_opening(e)?(r.push(n),n=e):n&&this._is_closing(e,n)&&(e.opened=n,n.closed=e,n=r.pop(),e.parent=n),e.previous=t,t.next=e,this.__tokens.add(e),t=e}return this.__tokens},u.prototype._is_first_token=function(){return this.__tokens.isEmpty()},u.prototype._reset=function(){},u.prototype._get_next_token=function(e,t){this._readWhitespace();var n=this._input.read(/.+/g);return n?this._create_token(s.RAW,n):this._create_token(s.EOF,"")},u.prototype._is_comment=function(e){return!1},u.prototype._is_opening=function(e){return!1},u.prototype._is_closing=function(e,t){return!1},u.prototype._create_token=function(e,t){return new i(e,t,this._patterns.whitespace.newline_count,this._patterns.whitespace.whitespace_before_token)},u.prototype._readWhitespace=function(){return this._patterns.whitespace.read()},e.exports.Tokenizer=u,e.exports.TOKEN=s},function(e,t,n){"use strict";function r(e){this.__tokens=[],this.__tokens_length=this.__tokens.length,this.__position=0,this.__parent_token=e}r.prototype.restart=function(){this.__position=0},r.prototype.isEmpty=function(){return 0===this.__tokens_length},r.prototype.hasNext=function(){return this.__position<this.__tokens_length},r.prototype.next=function(){var e=null;return this.hasNext()&&(e=this.__tokens[this.__position],this.__position+=1),e},r.prototype.peek=function(e){var t=null;return e=e||0,(e+=this.__position)>=0&&e<this.__tokens_length&&(t=this.__tokens[e]),t},r.prototype.add=function(e){this.__parent_token&&(e.parent=this.__parent_token),this.__tokens.push(e),this.__tokens_length+=1},e.exports.TokenStream=r},function(e,t,n){"use strict";var r=n(12).Pattern;function i(e,t){r.call(this,e,t),t?this._line_regexp=this._input.get_regexp(t._line_regexp):this.__set_whitespace_patterns("",""),this.newline_count=0,this.whitespace_before_token=""}i.prototype=new r,i.prototype.__set_whitespace_patterns=function(e,t){e+="\\t ",t+="\\n\\r",this._match_pattern=this._input.get_regexp("["+e+t+"]+",!0),this._newline_regexp=this._input.get_regexp("\\r\\n|["+t+"]")},i.prototype.read=function(){this.newline_count=0,this.whitespace_before_token="";var e=this._input.read(this._match_pattern);if(" "===e)this.whitespace_before_token=" ";else if(e){var t=this.__split(this._newline_regexp,e);this.newline_count=t.length-1,this.whitespace_before_token=t[this.newline_count]}return e},i.prototype.matching=function(e,t){var n=this._create();return n.__set_whitespace_patterns(e,t),n._update(),n},i.prototype._create=function(){return new i(this._input,this)},i.prototype.__split=function(e,t){e.lastIndex=0;for(var n=0,r=[],i=e.exec(t);i;)r.push(t.substring(n,i.index)),n=i.index+i[0].length,i=e.exec(t);return n<t.length?r.push(t.substring(n,t.length)):r.push(""),r},e.exports.WhitespacePattern=i},function(e,t,n){"use strict";function r(e,t){this._input=e,this._starting_pattern=null,this._match_pattern=null,this._until_pattern=null,this._until_after=!1,t&&(this._starting_pattern=this._input.get_regexp(t._starting_pattern,!0),this._match_pattern=this._input.get_regexp(t._match_pattern,!0),this._until_pattern=this._input.get_regexp(t._until_pattern),this._until_after=t._until_after)}r.prototype.read=function(){var e=this._input.read(this._starting_pattern);return this._starting_pattern&&!e||(e+=this._input.read(this._match_pattern,this._until_pattern,this._until_after)),e},r.prototype.read_match=function(){return this._input.match(this._match_pattern)},r.prototype.until_after=function(e){var t=this._create();return t._until_after=!0,t._until_pattern=this._input.get_regexp(e),t._update(),t},r.prototype.until=function(e){var t=this._create();return t._until_after=!1,t._until_pattern=this._input.get_regexp(e),t._update(),t},r.prototype.starting_with=function(e){var t=this._create();return t._starting_pattern=this._input.get_regexp(e,!0),t._update(),t},r.prototype.matching=function(e){var t=this._create();return t._match_pattern=this._input.get_regexp(e,!0),t._update(),t},r.prototype._create=function(){return new r(this._input,this)},r.prototype._update=function(){},e.exports.Pattern=r},function(e,t,n){"use strict";function r(e,t){e="string"==typeof e?e:e.source,t="string"==typeof t?t:t.source,this.__directives_block_pattern=new RegExp(e+/ beautify( \w+[:]\w+)+ /.source+t,"g"),this.__directive_pattern=/ (\w+)[:](\w+)/g,this.__directives_end_ignore_pattern=new RegExp(e+/\sbeautify\signore:end\s/.source+t,"g")}r.prototype.get_directives=function(e){if(!e.match(this.__directives_block_pattern))return null;var t={};this.__directive_pattern.lastIndex=0;for(var n=this.__directive_pattern.exec(e);n;)t[n[1]]=n[2],n=this.__directive_pattern.exec(e);return t},r.prototype.readIgnored=function(e){return e.readUntilAfter(this.__directives_end_ignore_pattern)},e.exports.Directives=r},function(e,t,n){"use strict";var r=n(12).Pattern,i={django:!1,erb:!1,handlebars:!1,php:!1};function o(e,t){r.call(this,e,t),this.__template_pattern=null,this._disabled=Object.assign({},i),this._excluded=Object.assign({},i),t&&(this.__template_pattern=this._input.get_regexp(t.__template_pattern),this._excluded=Object.assign(this._excluded,t._excluded),this._disabled=Object.assign(this._disabled,t._disabled));var n=new r(e);this.__patterns={handlebars_comment:n.starting_with(/{{!--/).until_after(/--}}/),handlebars_unescaped:n.starting_with(/{{{/).until_after(/}}}/),handlebars:n.starting_with(/{{/).until_after(/}}/),php:n.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),erb:n.starting_with(/<%[^%]/).until_after(/[^%]%>/),django:n.starting_with(/{%/).until_after(/%}/),django_value:n.starting_with(/{{/).until_after(/}}/),django_comment:n.starting_with(/{#/).until_after(/#}/)}}o.prototype=new r,o.prototype._create=function(){return new o(this._input,this)},o.prototype._update=function(){this.__set_templated_pattern()},o.prototype.disable=function(e){var t=this._create();return t._disabled[e]=!0,t._update(),t},o.prototype.read_options=function(e){var t=this._create();for(var n in i)t._disabled[n]=-1===e.templating.indexOf(n);return t._update(),t},o.prototype.exclude=function(e){var t=this._create();return t._excluded[e]=!0,t._update(),t},o.prototype.read=function(){var e="";e=this._match_pattern?this._input.read(this._starting_pattern):this._input.read(this._starting_pattern,this.__template_pattern);for(var t=this._read_template();t;)this._match_pattern?t+=this._input.read(this._match_pattern):t+=this._input.readUntil(this.__template_pattern),e+=t,t=this._read_template();return this._until_after&&(e+=this._input.readUntilAfter(this._until_pattern)),e},o.prototype.__set_templated_pattern=function(){var e=[];this._disabled.php||e.push(this.__patterns.php._starting_pattern.source),this._disabled.handlebars||e.push(this.__patterns.handlebars._starting_pattern.source),this._disabled.erb||e.push(this.__patterns.erb._starting_pattern.source),this._disabled.django||(e.push(this.__patterns.django._starting_pattern.source),e.push(this.__patterns.django_value._starting_pattern.source),e.push(this.__patterns.django_comment._starting_pattern.source)),this._until_pattern&&e.push(this._until_pattern.source),this.__template_pattern=this._input.get_regexp("(?:"+e.join("|")+")")},o.prototype._read_template=function(){var e="",t=this._input.peek();if("<"===t){var n=this._input.peek(1);this._disabled.php||this._excluded.php||"?"!==n||(e=e||this.__patterns.php.read()),this._disabled.erb||this._excluded.erb||"%"!==n||(e=e||this.__patterns.erb.read())}else"{"===t&&(this._disabled.handlebars||this._excluded.handlebars||(e=(e=(e=e||this.__patterns.handlebars_comment.read())||this.__patterns.handlebars_unescaped.read())||this.__patterns.handlebars.read()),this._disabled.django||(this._excluded.django||this._excluded.handlebars||(e=e||this.__patterns.django_value.read()),this._excluded.django||(e=(e=e||this.__patterns.django_comment.read())||this.__patterns.django.read())));return e},e.exports.TemplatablePattern=o}]),void 0===(r=function(){return{js_beautify:i}}.apply(t,[]))||(e.exports=r)},function(e,t,n){var r,i;i=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([,,function(e,t,n){"use strict";function r(e){this.__parent=e,this.__character_count=0,this.__indent_count=-1,this.__alignment_count=0,this.__wrap_point_index=0,this.__wrap_point_character_count=0,this.__wrap_point_indent_count=-1,this.__wrap_point_alignment_count=0,this.__items=[]}function i(e,t){this.__cache=[""],this.__indent_size=e.indent_size,this.__indent_string=e.indent_char,e.indent_with_tabs||(this.__indent_string=new Array(e.indent_size+1).join(e.indent_char)),t=t||"",e.indent_level>0&&(t=new Array(e.indent_level+1).join(this.__indent_string)),this.__base_string=t,this.__base_string_length=t.length}function o(e,t){this.__indent_cache=new i(e,t),this.raw=!1,this._end_with_newline=e.end_with_newline,this.indent_size=e.indent_size,this.wrap_line_length=e.wrap_line_length,this.indent_empty_lines=e.indent_empty_lines,this.__lines=[],this.previous_line=null,this.current_line=null,this.next_line=new r(this),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1,this.__add_outputline()}r.prototype.clone_empty=function(){var e=new r(this.__parent);return e.set_indent(this.__indent_count,this.__alignment_count),e},r.prototype.item=function(e){return e<0?this.__items[this.__items.length+e]:this.__items[e]},r.prototype.has_match=function(e){for(var t=this.__items.length-1;t>=0;t--)if(this.__items[t].match(e))return!0;return!1},r.prototype.set_indent=function(e,t){this.is_empty()&&(this.__indent_count=e||0,this.__alignment_count=t||0,this.__character_count=this.__parent.get_indent_size(this.__indent_count,this.__alignment_count))},r.prototype._set_wrap_point=function(){this.__parent.wrap_line_length&&(this.__wrap_point_index=this.__items.length,this.__wrap_point_character_count=this.__character_count,this.__wrap_point_indent_count=this.__parent.next_line.__indent_count,this.__wrap_point_alignment_count=this.__parent.next_line.__alignment_count)},r.prototype._should_wrap=function(){return this.__wrap_point_index&&this.__character_count>this.__parent.wrap_line_length&&this.__wrap_point_character_count>this.__parent.next_line.__character_count},r.prototype._allow_wrap=function(){if(this._should_wrap()){this.__parent.add_new_line();var e=this.__parent.current_line;return e.set_indent(this.__wrap_point_indent_count,this.__wrap_point_alignment_count),e.__items=this.__items.slice(this.__wrap_point_index),this.__items=this.__items.slice(0,this.__wrap_point_index),e.__character_count+=this.__character_count-this.__wrap_point_character_count,this.__character_count=this.__wrap_point_character_count," "===e.__items[0]&&(e.__items.splice(0,1),e.__character_count-=1),!0}return!1},r.prototype.is_empty=function(){return 0===this.__items.length},r.prototype.last=function(){return this.is_empty()?null:this.__items[this.__items.length-1]},r.prototype.push=function(e){this.__items.push(e);var t=e.lastIndexOf("\n");-1!==t?this.__character_count=e.length-t:this.__character_count+=e.length},r.prototype.pop=function(){var e=null;return this.is_empty()||(e=this.__items.pop(),this.__character_count-=e.length),e},r.prototype._remove_indent=function(){this.__indent_count>0&&(this.__indent_count-=1,this.__character_count-=this.__parent.indent_size)},r.prototype._remove_wrap_indent=function(){this.__wrap_point_indent_count>0&&(this.__wrap_point_indent_count-=1)},r.prototype.trim=function(){for(;" "===this.last();)this.__items.pop(),this.__character_count-=1},r.prototype.toString=function(){var e="";return this.is_empty()?this.__parent.indent_empty_lines&&(e=this.__parent.get_indent_string(this.__indent_count)):(e=this.__parent.get_indent_string(this.__indent_count,this.__alignment_count),e+=this.__items.join("")),e},i.prototype.get_indent_size=function(e,t){var n=this.__base_string_length;return t=t||0,e<0&&(n=0),n+=e*this.__indent_size,n+=t},i.prototype.get_indent_string=function(e,t){var n=this.__base_string;return t=t||0,e<0&&(e=0,n=""),t+=e*this.__indent_size,this.__ensure_cache(t),n+=this.__cache[t]},i.prototype.__ensure_cache=function(e){for(;e>=this.__cache.length;)this.__add_column()},i.prototype.__add_column=function(){var e=this.__cache.length,t=0,n="";this.__indent_size&&e>=this.__indent_size&&(e-=(t=Math.floor(e/this.__indent_size))*this.__indent_size,n=new Array(t+1).join(this.__indent_string)),e&&(n+=new Array(e+1).join(" ")),this.__cache.push(n)},o.prototype.__add_outputline=function(){this.previous_line=this.current_line,this.current_line=this.next_line.clone_empty(),this.__lines.push(this.current_line)},o.prototype.get_line_number=function(){return this.__lines.length},o.prototype.get_indent_string=function(e,t){return this.__indent_cache.get_indent_string(e,t)},o.prototype.get_indent_size=function(e,t){return this.__indent_cache.get_indent_size(e,t)},o.prototype.is_empty=function(){return!this.previous_line&&this.current_line.is_empty()},o.prototype.add_new_line=function(e){return!(this.is_empty()||!e&&this.just_added_newline()||(this.raw||this.__add_outputline(),0))},o.prototype.get_code=function(e){this.trim(!0);var t=this.current_line.pop();t&&("\n"===t[t.length-1]&&(t=t.replace(/\n+$/g,"")),this.current_line.push(t)),this._end_with_newline&&this.__add_outputline();var n=this.__lines.join("\n");return"\n"!==e&&(n=n.replace(/[\n]/g,e)),n},o.prototype.set_wrap_point=function(){this.current_line._set_wrap_point()},o.prototype.set_indent=function(e,t){return e=e||0,t=t||0,this.next_line.set_indent(e,t),this.__lines.length>1?(this.current_line.set_indent(e,t),!0):(this.current_line.set_indent(),!1)},o.prototype.add_raw_token=function(e){for(var t=0;t<e.newlines;t++)this.__add_outputline();this.current_line.set_indent(-1),this.current_line.push(e.whitespace_before),this.current_line.push(e.text),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1},o.prototype.add_token=function(e){this.__add_space_before_token(),this.current_line.push(e),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=this.current_line._allow_wrap()},o.prototype.__add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&(this.non_breaking_space||this.set_wrap_point(),this.current_line.push(" "))},o.prototype.remove_indent=function(e){for(var t=this.__lines.length;e<t;)this.__lines[e]._remove_indent(),e++;this.current_line._remove_wrap_indent()},o.prototype.trim=function(e){for(e=void 0!==e&&e,this.current_line.trim();e&&this.__lines.length>1&&this.current_line.is_empty();)this.__lines.pop(),this.current_line=this.__lines[this.__lines.length-1],this.current_line.trim();this.previous_line=this.__lines.length>1?this.__lines[this.__lines.length-2]:null},o.prototype.just_added_newline=function(){return this.current_line.is_empty()},o.prototype.just_added_blankline=function(){return this.is_empty()||this.current_line.is_empty()&&this.previous_line.is_empty()},o.prototype.ensure_empty_line_above=function(e,t){for(var n=this.__lines.length-2;n>=0;){var i=this.__lines[n];if(i.is_empty())break;if(0!==i.item(0).indexOf(e)&&i.item(-1)!==t){this.__lines.splice(n+1,0,new r(this)),this.previous_line=this.__lines[this.__lines.length-2];break}n--}},e.exports.Output=o},,,,function(e,t,n){"use strict";function r(e,t){this.raw_options=i(e,t),this.disabled=this._get_boolean("disabled"),this.eol=this._get_characters("eol","auto"),this.end_with_newline=this._get_boolean("end_with_newline"),this.indent_size=this._get_number("indent_size",4),this.indent_char=this._get_characters("indent_char"," "),this.indent_level=this._get_number("indent_level"),this.preserve_newlines=this._get_boolean("preserve_newlines",!0),this.max_preserve_newlines=this._get_number("max_preserve_newlines",32786),this.preserve_newlines||(this.max_preserve_newlines=0),this.indent_with_tabs=this._get_boolean("indent_with_tabs","\t"===this.indent_char),this.indent_with_tabs&&(this.indent_char="\t",1===this.indent_size&&(this.indent_size=4)),this.wrap_line_length=this._get_number("wrap_line_length",this._get_number("max_char")),this.indent_empty_lines=this._get_boolean("indent_empty_lines"),this.templating=this._get_selection_list("templating",["auto","none","django","erb","handlebars","php"],["auto"])}function i(e,t){var n,r={};for(n in e=o(e))n!==t&&(r[n]=e[n]);if(t&&e[t])for(n in e[t])r[n]=e[t][n];return r}function o(e){var t,n={};for(t in e)n[t.replace(/-/g,"_")]=e[t];return n}r.prototype._get_array=function(e,t){var n=this.raw_options[e],r=t||[];return"object"==typeof n?null!==n&&"function"==typeof n.concat&&(r=n.concat()):"string"==typeof n&&(r=n.split(/[^a-zA-Z0-9_\/\-]+/)),r},r.prototype._get_boolean=function(e,t){var n=this.raw_options[e];return void 0===n?!!t:!!n},r.prototype._get_characters=function(e,t){var n=this.raw_options[e],r=t||"";return"string"==typeof n&&(r=n.replace(/\\r/,"\r").replace(/\\n/,"\n").replace(/\\t/,"\t")),r},r.prototype._get_number=function(e,t){var n=this.raw_options[e];t=parseInt(t,10),isNaN(t)&&(t=0);var r=parseInt(n,10);return isNaN(r)&&(r=t),r},r.prototype._get_selection=function(e,t,n){var r=this._get_selection_list(e,t,n);if(1!==r.length)throw new Error("Invalid Option Value: The option '"+e+"' can only be one of the following values:\n"+t+"\nYou passed in: '"+this.raw_options[e]+"'");return r[0]},r.prototype._get_selection_list=function(e,t,n){if(!t||0===t.length)throw new Error("Selection list cannot be empty.");if(n=n||[t[0]],!this._is_valid_selection(n,t))throw new Error("Invalid Default Value!");var r=this._get_array(e,n);if(!this._is_valid_selection(r,t))throw new Error("Invalid Option Value: The option '"+e+"' can contain only the following values:\n"+t+"\nYou passed in: '"+this.raw_options[e]+"'");return r},r.prototype._is_valid_selection=function(e,t){return e.length&&t.length&&!e.some((function(e){return-1===t.indexOf(e)}))},e.exports.Options=r,e.exports.normalizeOpts=o,e.exports.mergeOpts=i},,function(e,t,n){"use strict";var r=RegExp.prototype.hasOwnProperty("sticky");function i(e){this.__input=e||"",this.__input_length=this.__input.length,this.__position=0}i.prototype.restart=function(){this.__position=0},i.prototype.back=function(){this.__position>0&&(this.__position-=1)},i.prototype.hasNext=function(){return this.__position<this.__input_length},i.prototype.next=function(){var e=null;return this.hasNext()&&(e=this.__input.charAt(this.__position),this.__position+=1),e},i.prototype.peek=function(e){var t=null;return e=e||0,(e+=this.__position)>=0&&e<this.__input_length&&(t=this.__input.charAt(e)),t},i.prototype.__match=function(e,t){e.lastIndex=t;var n=e.exec(this.__input);return!n||r&&e.sticky||n.index!==t&&(n=null),n},i.prototype.test=function(e,t){return t=t||0,(t+=this.__position)>=0&&t<this.__input_length&&!!this.__match(e,t)},i.prototype.testChar=function(e,t){var n=this.peek(t);return e.lastIndex=0,null!==n&&e.test(n)},i.prototype.match=function(e){var t=this.__match(e,this.__position);return t?this.__position+=t[0].length:t=null,t},i.prototype.read=function(e,t,n){var r,i="";return e&&(r=this.match(e))&&(i+=r[0]),!t||!r&&e||(i+=this.readUntil(t,n)),i},i.prototype.readUntil=function(e,t){var n,r=this.__position;e.lastIndex=this.__position;var i=e.exec(this.__input);return i?(r=i.index,t&&(r+=i[0].length)):r=this.__input_length,n=this.__input.substring(this.__position,r),this.__position=r,n},i.prototype.readUntilAfter=function(e){return this.readUntil(e,!0)},i.prototype.get_regexp=function(e,t){var n=null,i="g";return t&&r&&(i="y"),"string"==typeof e&&""!==e?n=new RegExp(e,i):e&&(n=new RegExp(e.source,i)),n},i.prototype.get_literal_regexp=function(e){return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))},i.prototype.peekUntilAfter=function(e){var t=this.__position,n=this.readUntilAfter(e);return this.__position=t,n},i.prototype.lookBack=function(e){var t=this.__position-1;return t>=e.length&&this.__input.substring(t-e.length,t).toLowerCase()===e},e.exports.InputScanner=i},,,,,function(e,t,n){"use strict";function r(e,t){e="string"==typeof e?e:e.source,t="string"==typeof t?t:t.source,this.__directives_block_pattern=new RegExp(e+/ beautify( \w+[:]\w+)+ /.source+t,"g"),this.__directive_pattern=/ (\w+)[:](\w+)/g,this.__directives_end_ignore_pattern=new RegExp(e+/\sbeautify\signore:end\s/.source+t,"g")}r.prototype.get_directives=function(e){if(!e.match(this.__directives_block_pattern))return null;var t={};this.__directive_pattern.lastIndex=0;for(var n=this.__directive_pattern.exec(e);n;)t[n[1]]=n[2],n=this.__directive_pattern.exec(e);return t},r.prototype.readIgnored=function(e){return e.readUntilAfter(this.__directives_end_ignore_pattern)},e.exports.Directives=r},,function(e,t,n){"use strict";var r=n(16).Beautifier,i=n(17).Options;e.exports=function(e,t){return new r(e,t).beautify()},e.exports.defaultOptions=function(){return new i}},function(e,t,n){"use strict";var r=n(17).Options,i=n(2).Output,o=n(8).InputScanner,a=new(0,n(13).Directives)(/\/\*/,/\*\//),s=/\r\n|[\r\n]/,u=/\r\n|[\r\n]/g,l=/\s/,c=/(?:\s|\n)+/g,f=/\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,d=/\/\/(?:[^\n\r\u2028\u2029]*)/g;function p(e,t){this._source_text=e||"",this._options=new r(t),this._ch=null,this._input=null,this.NESTED_AT_RULE={"@page":!0,"@font-face":!0,"@keyframes":!0,"@media":!0,"@supports":!0,"@document":!0},this.CONDITIONAL_GROUP_RULE={"@media":!0,"@supports":!0,"@document":!0}}p.prototype.eatString=function(e){var t="";for(this._ch=this._input.next();this._ch;){if(t+=this._ch,"\\"===this._ch)t+=this._input.next();else if(-1!==e.indexOf(this._ch)||"\n"===this._ch)break;this._ch=this._input.next()}return t},p.prototype.eatWhitespace=function(e){for(var t=l.test(this._input.peek()),n=!0;l.test(this._input.peek());)this._ch=this._input.next(),e&&"\n"===this._ch&&(this._options.preserve_newlines||n)&&(n=!1,this._output.add_new_line(!0));return t},p.prototype.foundNestedPseudoClass=function(){for(var e=0,t=1,n=this._input.peek(t);n;){if("{"===n)return!0;if("("===n)e+=1;else if(")"===n){if(0===e)return!1;e-=1}else if(";"===n||"}"===n)return!1;t++,n=this._input.peek(t)}return!1},p.prototype.print_string=function(e){this._output.set_indent(this._indentLevel),this._output.non_breaking_space=!0,this._output.add_token(e)},p.prototype.preserveSingleSpace=function(e){e&&(this._output.space_before_token=!0)},p.prototype.indent=function(){this._indentLevel++},p.prototype.outdent=function(){this._indentLevel>0&&this._indentLevel--},p.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var e=this._source_text,t=this._options.eol;"auto"===t&&(t="\n",e&&s.test(e||"")&&(t=e.match(s)[0]));var n=(e=e.replace(u,"\n")).match(/^[\t ]*/)[0];this._output=new i(this._options,n),this._input=new o(e),this._indentLevel=0,this._nestedLevel=0,this._ch=null;for(var r,p,h=0,_=!1,m=!1,g=!1,v=!1,y=!1,b=this._ch;r=""!==this._input.read(c),p=b,this._ch=this._input.next(),"\\"===this._ch&&this._input.hasNext()&&(this._ch+=this._input.next()),b=this._ch,this._ch;)if("/"===this._ch&&"*"===this._input.peek()){this._output.add_new_line(),this._input.back();var w=this._input.read(f),x=a.get_directives(w);x&&"start"===x.ignore&&(w+=a.readIgnored(this._input)),this.print_string(w),this.eatWhitespace(!0),this._output.add_new_line()}else if("/"===this._ch&&"/"===this._input.peek())this._output.space_before_token=!0,this._input.back(),this.print_string(this._input.read(d)),this.eatWhitespace(!0);else if("@"===this._ch)if(this.preserveSingleSpace(r),"{"===this._input.peek())this.print_string(this._ch+this.eatString("}"));else{this.print_string(this._ch);var k=this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);k.match(/[ :]$/)&&(k=this.eatString(": ").replace(/\s$/,""),this.print_string(k),this._output.space_before_token=!0),"extend"===(k=k.replace(/\s$/,""))?v=!0:"import"===k&&(y=!0),k in this.NESTED_AT_RULE?(this._nestedLevel+=1,k in this.CONDITIONAL_GROUP_RULE&&(g=!0)):_||0!==h||-1===k.indexOf(":")||(m=!0,this.indent())}else"#"===this._ch&&"{"===this._input.peek()?(this.preserveSingleSpace(r),this.print_string(this._ch+this.eatString("}"))):"{"===this._ch?(m&&(m=!1,this.outdent()),g?(g=!1,_=this._indentLevel>=this._nestedLevel):_=this._indentLevel>=this._nestedLevel-1,this._options.newline_between_rules&&_&&this._output.previous_line&&"{"!==this._output.previous_line.item(-1)&&this._output.ensure_empty_line_above("/",","),this._output.space_before_token=!0,"expand"===this._options.brace_style?(this._output.add_new_line(),this.print_string(this._ch),this.indent(),this._output.set_indent(this._indentLevel)):(this.indent(),this.print_string(this._ch)),this.eatWhitespace(!0),this._output.add_new_line()):"}"===this._ch?(this.outdent(),this._output.add_new_line(),"{"===p&&this._output.trim(!0),y=!1,v=!1,m&&(this.outdent(),m=!1),this.print_string(this._ch),_=!1,this._nestedLevel&&this._nestedLevel--,this.eatWhitespace(!0),this._output.add_new_line(),this._options.newline_between_rules&&!this._output.just_added_blankline()&&"}"!==this._input.peek()&&this._output.add_new_line(!0)):":"===this._ch?!_&&!g||this._input.lookBack("&")||this.foundNestedPseudoClass()||this._input.lookBack("(")||v||0!==h?(this._input.lookBack(" ")&&(this._output.space_before_token=!0),":"===this._input.peek()?(this._ch=this._input.next(),this.print_string("::")):this.print_string(":")):(this.print_string(":"),m||(m=!0,this._output.space_before_token=!0,this.eatWhitespace(!0),this.indent())):'"'===this._ch||"'"===this._ch?(this.preserveSingleSpace(r),this.print_string(this._ch+this.eatString(this._ch)),this.eatWhitespace(!0)):";"===this._ch?0===h?(m&&(this.outdent(),m=!1),v=!1,y=!1,this.print_string(this._ch),this.eatWhitespace(!0),"/"!==this._input.peek()&&this._output.add_new_line()):(this.print_string(this._ch),this.eatWhitespace(!0),this._output.space_before_token=!0):"("===this._ch?this._input.lookBack("url")?(this.print_string(this._ch),this.eatWhitespace(),h++,this.indent(),this._ch=this._input.next(),")"===this._ch||'"'===this._ch||"'"===this._ch?this._input.back():this._ch&&(this.print_string(this._ch+this.eatString(")")),h&&(h--,this.outdent()))):(this.preserveSingleSpace(r),this.print_string(this._ch),this.eatWhitespace(),h++,this.indent()):")"===this._ch?(h&&(h--,this.outdent()),this.print_string(this._ch)):","===this._ch?(this.print_string(this._ch),this.eatWhitespace(!0),!this._options.selector_separator_newline||m||0!==h||y?this._output.space_before_token=!0:this._output.add_new_line()):">"!==this._ch&&"+"!==this._ch&&"~"!==this._ch||m||0!==h?"]"===this._ch?this.print_string(this._ch):"["===this._ch?(this.preserveSingleSpace(r),this.print_string(this._ch)):"="===this._ch?(this.eatWhitespace(),this.print_string("="),l.test(this._ch)&&(this._ch="")):"!"!==this._ch||this._input.lookBack("\\")?(this.preserveSingleSpace(r),this.print_string(this._ch)):(this.print_string(" "),this.print_string(this._ch)):this._options.space_around_combinator?(this._output.space_before_token=!0,this.print_string(this._ch),this._output.space_before_token=!0):(this.print_string(this._ch),this.eatWhitespace(),this._ch&&l.test(this._ch)&&(this._ch=""));return this._output.get_code(t)},e.exports.Beautifier=p},function(e,t,n){"use strict";var r=n(6).Options;function i(e){r.call(this,e,"css"),this.selector_separator_newline=this._get_boolean("selector_separator_newline",!0),this.newline_between_rules=this._get_boolean("newline_between_rules",!0);var t=this._get_boolean("space_around_selector_separator");this.space_around_combinator=this._get_boolean("space_around_combinator")||t;var n=this._get_selection_list("brace_style",["collapse","expand","end-expand","none","preserve-inline"]);this.brace_style="collapse";for(var i=0;i<n.length;i++)"expand"!==n[i]?this.brace_style="collapse":this.brace_style=n[i]}i.prototype=new r,e.exports.Options=i}]),void 0===(r=function(){return{css_beautify:i}}.apply(t,[]))||(e.exports=r)},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TabbedSourceCodeViewer=void 0;const i=r(n(0)),o=n(43),a=n(78);class s extends i.default.Component{constructor(e){super(e)}render(){const e=this;return i.default.createElement(a.TabControl,null,e.props.children.map(e=>i.default.createElement(a.Tab,{key:e.label,label:e.label},i.default.createElement(o.SourceCodeViewer,{sourceCode:e.sourceCode}))))}}t.TabbedSourceCodeViewer=s},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ValidatedInput=void 0;const i=r(n(0)),o=r(n(39));n(196);class a extends i.default.Component{constructor(e){super(e),this.state={input:""}}render(){const e=this;return i.default.createElement("input",{type:"text",value:this.state.input,onChange:function(t){const n=t.target.value;e.setState({input:n})},className:function(){const t=["validated-input"];0!==e.state.input.length&&(e.isCorrect()?t.push("correct"):t.push("incorrect"));return t.join(" ")}()})}isCorrect(){return this.props.validator(this.state.input)}}t.ValidatedInput=a,a.propTypes={validator:o.default.func.isRequired}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Form=void 0;const i=r(n(0));n(205);class o extends i.default.Component{constructor(e){super(e)}render(){const e=this;return i.default.createElement("table",{className:this.props.className||"form"},i.default.createElement("tbody",null,function(){const t=e.props.headers.map((e,t)=>i.default.createElement("th",{key:"header-"+t},e));return i.default.createElement("tr",null,t)}(),e.props.rows.map((e,t)=>i.default.createElement("tr",{key:"row-"+t},function(e){return e.map((e,t)=>i.default.createElement("td",{key:"elt-"+t},e))}(e)))))}}t.Form=o},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Form=void 0;const i=r(n(0)),o=n(49),a=n(48),s=n(11);class u extends i.default.Component{constructor(e){super(e)}render(){return i.default.createElement(o.Form,{className:this.props.className,headers:this.headers,rows:this.rows})}get headers(){return this.props.columns.map(e=>e.header)}get rows(){return Array.from(this.renderRows())}*renderRows(){for(let e of this.props.rows)yield this.renderRow(e)}renderRow(e){return this.props.columns.map(t=>this.renderCell(e,t))}renderCell(e,t){return s.contains(e.blankColumns,t.name)?this.renderBlankCell(e,t):this.renderVisibleCell(e,t)}renderBlankCell(e,t){return i.default.createElement(a.ValidatedInput,{validator:n=>t.validate(e.data,n)})}renderVisibleCell(e,t){return t.render(e.data)}}t.Form=u},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsibleTestCase=void 0;const i=r(n(0)),o=r(n(27));t.CollapsibleTestCase=class{render(){return i.default.createElement(o.default,{trigger:this.header,transitionTime:100},this.content)}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Exercise=void 0;const i=r(n(0)),o=n(85),a=n(16),s=n(6),u=n(9),l=n(29),c=n(12),f=n(53),d=n(31),p=n(32);class h extends o.Exercise{get solutions(){if(0===this.referenceImplementations.length)throw new Error("Need at least one reference implementation");{const e="solution",t=this.referenceImplementations[0];return[new class extends d.Solution{constructor(){super(...arguments),this.label=e,this.implementation=t}}]}}get htmlClasses(){return[...super.htmlClasses,"reference-based"]}*generateTestCases(){if(0===this.referenceImplementations.length)throw new Error("Need at least one reference implementation");{const e=this.referenceImplementations[0];for(let t of this.generateTestCaseInputs()){this.checkThatSolutionsYieldSameResults(t);const n=a.callFunction(e,...t.args),r=this.testedImplementation.lift(e=>a.callFunction(e,...t.args));yield this.createTestCaseFromInputs(n,r,t.meta)}}}get id(){return this.referenceInformation.functionName}get header(){return u.code(this.referenceInformation.signature)}get tocEntry(){return i.default.createElement(i.default.Fragment,null,i.default.createElement(p.ExerciseEntry,{caption:this.referenceInformation.functionName,difficulty:this.difficulty,score:this.score}))}get referenceInformation(){if(0===this.referenceImplementations.length)throw new Error("Need at least one reference implementation");{const e=this.referenceImplementations[0];return this.__referenceInformation=this.__referenceInformation||a.parseFunction(e)}}checkThatSolutionsYieldSameResults(e){if(f.configuration.verifySolutions){const t=this.referenceImplementations[0],n=a.callFunction(t,...e.args);for(let r=1;r<this.referenceImplementations.length;++r){const i=this.referenceImplementations[r],o=a.callFunction(i,...e.args);if(this.createTestCaseFromInputs(n,s.Maybe.just(o),e.meta).outcome!==c.Outcome.Pass){const e=new l.SourceCode(l.Language.JavaScript,t.toString()).beautify(),n=new l.SourceCode(l.Language.JavaScript,i.toString()).beautify();throw console.log(`${e.sourceCode}\ndisagrees with\n${n.sourceCode}`),new Error("Solutions don't agree!")}}}}}t.Exercise=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configure=t.configuration=void 0,t.configuration={verifySolutions:!0},t.configure=function(e){t.configuration={...t.configuration,...e}}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceImplementationBasedCodingExercise=void 0;const a=n(94),s=n(16),u=n(93),l=o(n(23)),c=n(11);class f extends a.TestCaseBasedCodingExercise{createTestCaseFromInputs(e,t,n){const r=this.createAssertion(e,n).check(t),i=this.renderTestCaseHeader(e,n),{outcome:o,content:a}=r;if(a){const e=a;return new class extends u.CollapsibleTestCase{get header(){return i}get content(){return e}get outcome(){return o}}}throw new Error("Assertion has no content")}createAssertion(e,t){const n=l.typedReturnValue(this.createReturnValueAssertion(e.returnValue,t)),r=c.range(0,e.argumentsBeforeCall.length).map(n=>{const r=s.parseFunction(this.referenceImplementation).parameterNames[n],i=e.argumentsBeforeCall[n],o=e.argumentsAfterCall[n],a=this.createParameterAssertion(n,r,i,o,t);return l.typedParameter(n,r,a)});return l.sequence([n,...r])}*generateTestCases(){for(let e of this.generateTestCaseInputs()){const t=s.typedCallFunction(this.referenceImplementation,...e.parameterValues),n=this.testedImplementation.lift(t=>s.typedCallFunction(t,...e.parameterValues));yield this.createTestCaseFromInputs(t,n,e.metadata)}}}t.ReferenceImplementationBasedCodingExercise=f},function(e,t,n){"use strict";var r=n(38),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function u(e){return r.isMemo(e)?a:s[e.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=a;var l=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var i=p(n);i&&i!==h&&e(t,i,r)}var a=c(n);f&&(a=a.concat(f(n)));for(var s=u(t),_=u(n),m=0;m<a.length;++m){var g=a[m];if(!(o[g]||r&&r[g]||_&&_[g]||s&&s[g])){var v=d(n,g);try{l(t,g,v)}catch(e){}}}}return t}},function(e,t,n){"use strict";var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.a=i},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,u=a(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))i.call(n,c)&&(u[c]=n[c]);if(r){s=r(n);for(var f=0;f<s.length;f++)o.call(n,s[f])&&(u[s[f]]=n[s[f]])}}return u}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DifficultyViewer=void 0;const i=r(n(0));const o=r(n(2)).default.span`
    background: black;
    text-align: center;
    color: ${e=>["#AFA","#0F0","#FF0","#F80","#F00"][e.difficulty-1]};
    padding-top: 0.1em;
    font-size: 170%;
    font-weight: normal;
    user-select: none;
    cursor: default;
    padding: 0.1em;
`;class a extends i.default.Component{constructor(e){super(e)}render(){const e=this.props.difficulty;return i.default.createElement(o,{difficulty:e},this.difficultySymbol)}get difficultySymbol(){return"❶❷❸❹❺".charAt(this.props.difficulty-1)}}t.DifficultyViewer=a},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ScoreViewer=t.UnstyledScoreViewer=void 0;const i=r(n(0)),o=r(n(2));class a extends i.default.Component{constructor(e){super(e)}render(){return i.default.createElement("table",{className:this.props.className},i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{className:"grade"},this.props.score.grade),i.default.createElement("td",{className:"maximum"},this.props.score.maximum))))}}t.UnstyledScoreViewer=a,t.ScoreViewer=o.default(a)`
    background: ${e=>e.score.isPerfect?"#AFA":"#FAA"};
    border-collapse: collapse;

    td {
        text-align: center;
        font-weight: bold;
        border: 1px solid #888;
        user-select: none;
        cursor: default;
        width: 50%;
    }
`},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ExplanationEntry=void 0;const i=r(n(0)),o=r(n(2)),a=o.default.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
`,s=o.default.div`
    width: 100%;
    text-align: center;
    font-variant: small-caps;
    color: black;
    padding: 2px 0.5em;
    cursor: pointer;
    user-select: none;
    margin: 1px;
    background: #CCF;

    &:hover {
        background: #88F;
    }
`;class u extends i.default.Component{constructor(e){super(e)}render(){const e=this;return i.default.createElement(a,{className:this.props.className},i.default.createElement(s,null,e.props.caption))}}t.ExplanationEntry=u},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.BitmapViewer=void 0;const a=o(n(0));class s extends a.Component{constructor(e){super(e),this.canvas=a.createRef()}componentDidMount(){this.forceUpdate()}render(){return this.props.resize?a.createElement("img",{src:this.props.bitmap.toDataURL(),width:this.props.resize.width,height:this.props.resize.height,style:{imageRendering:"pixelated"}}):a.createElement("img",{src:this.props.bitmap.toDataURL()})}}t.BitmapViewer=s},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DieViewer=void 0;const i=r(n(0)),o=r(n(2));class a extends i.default.PureComponent{constructor(e){super(e)}render(){return i.default.createElement("span",{className:this.props.className},String.fromCharCode(9855+this.props.die))}}t.DieViewer=o.default(a)`
    font-size: 1.5em;
`},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DiceViewer=void 0;const i=r(n(0)),o=n(62);class a extends i.default.Component{constructor(e){super(e)}render(){const e=this;return i.default.createElement("span",{className:this.props.className},e.props.dice.map(t));function t(e,t){return i.default.createElement(o.DieViewer,{die:e,key:"die-viewer-"+t})}}}t.DiceViewer=a},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Invalid=void 0;const i=r(n(0)),o=n(13),a=n(9);n(176);class s extends i.default.Component{constructor(e){super(e)}render(){return i.default.createElement("div",{className:"invalid"},i.default.createElement("div",{className:"message"},this.props.message),i.default.createElement("div",{className:"value"},a.code(o.convertToString(this.props.value))))}}t.Invalid=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(127);t.all=r.default,t.and=r.default;var i=n(129);t.any=i.default,t.or=i.default;var o=n(21);t.array=o.default,t.arr=o.default;var a=n(130);t.asyncFunction=a.default,t.asyncFn=a.default;var s=n(71);t.arrayLike=s.default,t.arrLike=s.default;var u=n(67);t.arrayOf=u.default,t.arrOf=u.default;var l=n(132);t.blank=l.default;var c=n(28);t.boolean=c.default,t.bool=c.default;var f=n(70);t.date=f.default;var d=n(133);t.defined=d.default;var p=n(134);t.divisible=p.default,t.divisibleBy=p.default,t.divBy=p.default;var h=n(72);t.divisibleWithRemainder=h.default,t.divisibleByWithRemainder=h.default,t.divByWithRemainder=h.default;var _=n(135);t.empty=_.default;var m=n(136);t.emptyArray=m.default,t.emptyArr=m.default;var g=n(137);t.endsWith=g.default;var v=n(138);t.equal=v.default,t.equalTo=v.default,t.eq=v.default;var y=n(139);t.false=y.default;var b=n(140);t.falsy=b.default,t.falsey=b.default;var w=n(41);t.finite=w.default;var x=n(14);t.function=x.default,t.fn=x.default,t.func=x.default;var k=n(141);t.generator=k.default;var C=n(143);t.greaterThan=C.default,t.greater=C.default,t.gt=C.default;var S=n(144);t.greaterThanOrEqual=S.default,t.greaterOrEqual=S.default,t.greaterEq=S.default,t.gtEq=S.default;var E=n(145);t.hasOwnProperty=E.default,t.hasOwn=E.default;var T=n(146);t.hasProperty=T.default,t.has=T.default;var O=n(147);t.in=O.default;var M=n(148);t.instanceOf=M.default,t.instance=M.default;var P=n(149);t.integer=P.default,t.int=P.default;var j=n(152);t.lessThan=j.default,t.less=j.default,t.lt=j.default;var A=n(153);t.lessThanOrEqual=A.default,t.lessOrEqual=A.default,t.lessEq=A.default,t.ltEq=A.default;var N=n(154);t.matches=N.default,t.match=N.default;var D=n(155);t.map=D.default;var L=n(156);t.notANumber=L.default,t.nan=L.default,t.NaN=L.default;var R=n(157);t.negative=R.default;var I=n(158);t.negate=I.default,t.not=I.default;var F=n(159);t.notBlank=F.default;var z=n(160);t.notEmptyArray=z.default,t.notEmptyArr=z.default;var W=n(73);t.null=W.default;var B=n(15);t.number=B.default,t.num=B.default;var V=n(10);t.object=V.default,t.obj=V.default;var U=n(74);t.objectOf=U.default,t.objOf=U.default;var H=n(161);t.oneOf=H.default;var $=n(162);t.plainObject=$.default;var q=n(163);t.positive=q.default;var K=n(164);t.primitive=K.default;var G=n(165);t.property=G.default,t.prop=G.default;var X=n(40);t.regexp=X.default,t.regExp=X.default;var Q=n(166);t.startsWith=Q.default;var Y=n(167);t.set=Y.default;var J=n(168);t.strictEqual=J.default,t.strictEqualTo=J.default;var Z=n(8);t.string=Z.default,t.str=Z.default;var ee=n(169);t.structure=ee.default,t.struct=ee.default;var te=n(34);t.symbol=te.default;var ne=n(170);t.true=ne.default;var re=n(171);t.truthy=re.default;var ie=n(172);t.thenable=ie.default,t.promiseLike=ie.default;var oe=n(35);t.undefined=oe.default;var ae=n(173);t.undefinedOr=ae.default;var se=n(68);t.weakMap=se.default;var ue=n(69);t.weakSet=ue.default;var le=n(1);t.setDescription=le.setDescription,t.getDescription=le.getDescription;var ce=n(174);t.assert=ce.assert},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=n(67);t.default=function(e){if(!i.default(r.default,e))throw new TypeError("Every predicate must be a function");if(e.length<2)throw new Error("You need to provide at least two predicates")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),i=n(14),o=n(5),a=n(1),s=n(19);t.default=function(e,t){for(var n=[],u=2;u<arguments.length;u++)n[u-2]=arguments[u];if(!i.default(e))throw new TypeError("Predicate must be a function");return e=s.getPredicateForType(e)||e,o.default.call(this,arguments,a.setDescription((function(t){var i=this;return r.default(t)&&t.every((function(t){return e.apply(i,[t].concat(n))}))}),"an array of elements of type: "+a.getDescription(e)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);function i(e){return"undefined"!=typeof WeakMap&&e instanceof WeakMap}t.default=i,r.setDescription(i,"a WeakMap")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);function i(e){return"undefined"!=typeof WeakSet&&e instanceof WeakSet}t.default=i,r.setDescription(i,"a WeakSet")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);function i(e){return"[object Date]"===Object.prototype.toString.call(e)}t.default=i,r.setDescription(i,"a Date")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=n(15),o=n(1);function a(e){return r.default(e)&&i.default(e.length)&&e.length>=0}t.default=a,o.setDescription(a,"an array like object")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(41),o=n(15),a=n(1);t.default=function(e,t,n){if(arguments.length<2)throw new Error("Missing remainder");if(!i.default(e))throw new TypeError("Divisor is not a finite number");if(0===e)throw new Error("Divisor cannot be 0");if(!i.default(t))throw new TypeError("Remainder is not a finite number");if(t>=e)throw new Error("Remainder cannot be greater than divisor");return r.default.call(this,arguments,a.setDescription((function(n){return o.default(n)&&n%e===t}),"a number divisible by "+e+" with remainder "+t),2)}},function(e,t,n){"use strict";function r(e){return null===e}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"null"),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=n(14),o=n(5),a=n(1),s=n(19);t.default=function(e,t){for(var n=[],u=2;u<arguments.length;u++)n[u-2]=arguments[u];if(!i.default(e))throw new TypeError("Predicate must be a function");return e=s.getPredicateForType(e)||e,o.default.call(this,arguments,a.setDescription((function(t){for(var n=this,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return r.default(t)&&Object.keys(t).every((function(r){return e.apply(n,[t[r]].concat(i))}))}),"an object of elements of type: "+a.getDescription(e)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(76);Object.defineProperty(t,"Colors",{enumerable:!0,get:function(){return r.Colors}});var i=n(175);Object.defineProperty(t,"Bitmap",{enumerable:!0,get:function(){return i.Bitmap}}),Object.defineProperty(t,"loadImage",{enumerable:!0,get:function(){return i.loadImage}})},function(e,t,n){"use strict";function r(e,t,n){return{r:e,g:t,b:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.Colors=t.color=void 0,t.color=r,t.Colors={black:r(0,0,0),red:r(255,0,0),green:r(0,255,0),blue:r(0,0,255),yellow:r(255,255,0),magenta:r(255,0,255),cyan:r(0,255,255),white:r(255,255,255)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SolutionViewer=void 0;const i=r(n(0)),o=r(n(27)),a=n(43);n(191);class s extends i.default.Component{constructor(e){super(e)}render(){const e=this.props.sourceCode;return i.default.createElement("div",{className:"solution-viewer"},i.default.createElement(o.default,{trigger:i.default.createElement(i.default.Fragment,null,"solution"),transitionTime:100},i.default.createElement(a.SourceCodeViewer,{sourceCode:e})))}}t.SolutionViewer=s},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TabControl=t.Tab=void 0;const i=r(n(0));n(194);class o extends i.default.Component{render(){return this.props.children}}t.Tab=o;class a extends i.default.Component{constructor(e){super(e),this.state={selectedTab:0}}render(){const e=i.default.Children.toArray(this.props.children),t=e.map((e,t)=>{const n=e.props.label,r="tab-label"+(t===this.state.selectedTab?" selected":"");return i.default.createElement("div",{className:r,key:n,onClick:()=>this.onTabClicked(t)},n)});return i.default.createElement("div",{className:"tab-control"},i.default.createElement("div",{className:"tab-labels"},t),i.default.createElement("div",{className:"container"},e[this.state.selectedTab]))}onTabClicked(e){this.setState({selectedTab:e})}}t.TabControl=a},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DescriptionBox=void 0;const i=r(n(0)),o=r(n(2)).default.section`
    margin: 1em auto;
    width: 80%;
    background: #DDD;
    box-shadow: 0px 0px 20px 2px gray;
    padding: 0.5em 1em;

    h1 {
        padding: 0.5em;
        background: #333;
        color: white;
        text-align: center;
    }
`;class a extends i.default.Component{constructor(e){super(e)}render(){const e=this;return i.default.createElement(o,{className:this.props.className},e.props.header?i.default.createElement("h1",null,e.props.header):i.default.createElement(i.default.Fragment,null),this.props.children)}}t.DescriptionBox=a},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LanguageComparison=void 0;const i=r(n(0)),o=n(29),a=n(47);class s extends i.default.Component{render(){const e=this.props.children.map(e=>({sourceCode:e,label:this.stringOfLanguage(e.language)}));return i.default.createElement(a.TabbedSourceCodeViewer,null,e)}stringOfLanguage(e){switch(e){case o.Language.Python:return"Python";case o.Language.CommonLisp:return"Common Lisp";case o.Language.CPP:return"C++";case o.Language.CSharp:return"C#";case o.Language.Java:return"Java";case o.Language.Factor:return"Factor";case o.Language.JavaScript:return"JavaScript";case o.Language.Pseudocode:return"Pseudocode";case o.Language.Ruby:return"Ruby";default:throw new Error("Unknown language")}}}t.LanguageComparison=s},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.evalm=void 0;const maybe_1=__webpack_require__(6);function evalm(input){try{return maybe_1.Maybe.just(eval(input))}catch(e){return maybe_1.Maybe.nothing()}}exports.evalm=evalm},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Box=void 0;const i=r(n(0)),o=r(n(2)),a=o.default.div`
    margin: 1px;
`,s=o.default.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #88F;
    padding: 2px;
`,u=o.default.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-variant: small-caps;
    font-weight: bold;
    background: #77F;
    width: 7em;
    user-select: none;
    pointer:
`,l=o.default.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 1em;
    font-family: 'Courier New', Courier, monospace;
`,c=o.default.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #222;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    min-width: 8em;
    padding: 0.2em 1em;
    user-select: none;
`,f=o.default.div`
    background: #AAF;
    padding: 0.5em;
`,d=o.default.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;class p extends i.default.Component{render(){const e=this.props.name?i.default.createElement(l,null,this.props.name):i.default.createElement(i.default.Fragment,null);return i.default.createElement(a,{className:this.props.className},i.default.createElement(s,null,i.default.createElement(d,null,i.default.createElement(u,null,this.props.category),e),i.default.createElement(c,null,this.props.type)),i.default.createElement(f,null,this.props.children))}}t.Box=p},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Exercise=void 0;const i=r(n(0)),o=r(n(30)),a=n(18);n(218);const s=r(n(2)),u=s.default(a.DifficultyViewer)`
    width: 4em;
`,l=s.default(u)`
    visibility: hidden;
`,c=s.default.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;t.Exercise=class{get content(){return i.default.createElement("section",{className:o.default(this.htmlClasses)},i.default.createElement(c,null,this.renderDifficultyViewer()," ",this.header),i.default.createElement("div",{className:"content"},this.exerciseContent))}renderDifficultyViewer(){return this.hasDifficulty()?i.default.createElement(u,{difficulty:this.difficulty}):i.default.createElement(l,{difficulty:1})}get htmlClasses(){return["exercise"]}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Exercise=void 0;const i=r(n(0)),o=r(n(30)),a=n(84),s=n(20),u=n(12),l=n(18),c=n(17);class f extends a.Exercise{constructor(){super(),this._score=new c.Lazy(()=>this.computeScore())}get hint(){return null}hasDifficulty(){return!0}isScored(){return!0}get maximumScore(){return 1}get score(){return this._score.value}computeScore(){const e=Array.from(this.generateTestCases()).map(e=>e.outcome);return u.combineAssertionOutcomes(e)===u.Outcome.Pass?new s.Score(this.maximumScore,this.maximumScore):new s.Score(0,this.maximumScore)}get exerciseContent(){return i.default.createElement(i.default.Fragment,null,this.renderDescription(),this.renderTestCases(),this.renderHint(),this.renderSolution())}renderDescription(){return i.default.createElement(l.DescriptionBox,null,this.description)}renderTestCases(){const e=Array.from(this.generateTestCases()).map((e,t)=>i.default.createElement(i.default.Fragment,{key:"test-case-"+t},this.renderTestCase(e)));return i.default.createElement("div",{className:"test-cases"},e)}renderTestCase(e){const t=o.default("test-case",u.outcomeToHtmlClass(e.outcome));return i.default.createElement("div",{className:t},e.render())}renderHint(){return this.hint?i.default.createElement(l.HintViewer,null,this.hint):i.default.createElement(i.default.Fragment,null)}renderSolution(){return i.default.createElement(l.MultiSolutionViewer,{solutions:this.solutions})}get htmlClasses(){return[...super.htmlClasses,"coding"]}}t.Exercise=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Assertion=void 0;const r=n(12);t.Assertion=class{check(e){const t=this.determineOutcome(e);return{outcome:t,content:this.shouldBeShown(e,t)?this.renderContent(e,t):null}}determineOutcome(e){return e.caseOf({just:e=>this.isCorrect(e)?r.Outcome.Pass:r.Outcome.Fail,nothing:()=>r.Outcome.Skip})}shouldBeShown(e,t){return!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.equality=t.EqualityAssertion=void 0;const r=n(22),i=n(37),o=n(6);class a extends i.ComparisonAssertion{isCorrect(e){if(this.expected.isJust())return r.deepEqual(this.expected.value,e);throw new Error("Bug detected in testing framework")}}t.EqualityAssertion=a,t.equality=function(e,t){return new class extends a{get original(){return t}get expected(){return o.Maybe.just(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lift=void 0;class r{constructor(e,t){this.func=e,this.assertion=t}check(e){const t=e.lift(e=>this.func(e));return this.assertion.check(t)}}t.lift=function(e,t){return new r(e,t)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.box=void 0;const i=r(n(0)),o=n(90);n(242),t.box=function(e,t){return o.decorate((function(t,n){return i.default.createElement("div",{className:"assertion-box"},i.default.createElement("header",null,e),i.default.createElement("div",{className:"assertion-box-contents"},n))}),t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decorate=void 0;class r{constructor(e,t){this.decoratorFunction=e,this.assertion=t}check(e){const t=this.assertion.check(e),n=t.outcome;return{outcome:n,content:t.content?this.decoratorFunction(n,t.content):null}}}t.decorate=function(e,t){return new r(e,t)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Explanations=void 0;const i=r(n(0));n(249);const o=n(60);t.Explanations=class{get tocEntry(){return i.default.createElement(o.ExplanationEntry,{caption:this.caption})}isScored(){return!1}hasDifficulty(){return!1}get content(){return i.default.createElement("section",{className:"explanations"},i.default.createElement("header",null,this.header),this.explanations)}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FinishLineSection=void 0;const i=r(n(0)),o=n(79),a=n(251);t.FinishLineSection=class{constructor(){this.id="finish",this.header=i.default.createElement(i.default.Fragment,null,"Finish")}get tocEntry(){return i.default.createElement(a.FinishLineEntry,null)}isScored(){return!1}hasDifficulty(){return!1}get content(){return i.default.createElement(i.default.Fragment,null,i.default.createElement(o.DescriptionBox,null,"Je hebt de belangrijkste oefeningen van dit labo opgelost. De overige oefeningen zijn louter bedoeld als extra oefenmateriaal."))}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsibleTestCase=void 0;const i=r(n(0)),o=r(n(27));t.CollapsibleTestCase=class{render(){return i.default.createElement(o.default,{trigger:this.header,transitionTime:100},this.content)}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TestCaseBasedCodingExercise=void 0;const i=r(n(0)),o=n(20),a=n(12),s=n(17),u=r(n(30));n(254);t.TestCaseBasedCodingExercise=class{constructor(){this.cachedScore=new s.Lazy(()=>this.computeScore())}get maximumScore(){return 1}get score(){return this.cachedScore.value}computeScore(){const e=Array.from(this.generateTestCases()).map(e=>e.outcome);return a.combineAssertionOutcomes(e)===a.Outcome.Pass?new o.Score(this.maximumScore,this.maximumScore):new o.Score(0,this.maximumScore)}render(){const e=Array.from(this.generateTestCases()).map((e,t)=>i.default.createElement(i.default.Fragment,{key:"test-case-"+t},this.renderTestCase(e)));return i.default.createElement("div",{className:"test-cases"},e)}renderTestCase(e){const t=u.default("test-case",a.outcomeToHtmlClass(e.outcome));return i.default.createElement("div",{className:t},e.render())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.verifySolutions=void 0;const r=n(31),i=n(53);t.verifySolutions=function(e,t){if(i.configuration.verifySolutions)for(const n of r.retrieveSolutions(t)){const t=n.implementation;if(!e(t).score.isPerfect)throw new Error("Invalid solution found!\n"+t.toString())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExerciseGroup=void 0;const r=n(17),i=n(20);t.ExerciseGroup=class{constructor(){this.cachedExercises=new r.Lazy(()=>this.createExercises())}get score(){const e=Object.keys(this.cachedExercises.value);return i.Score.summate(...e.map(e=>this.exercise(e).score))}exercise(e){return this.cachedExercises.value[e]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constant=void 0;const r=n(25);class i extends r.Animation{constructor(e,t){super(),this.value=e,this.duration=t}at(e){if(e<0||e>this.duration)throw new Error("Invalid t = "+e);return this.value}get endValue(){return this.value}}t.constant=function(e,t){return new i(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linear=void 0;const r=n(25);class i extends r.Animation{constructor(e,t,n){super(),this.from=e,this.to=t,this.duration=n}at(e){if(e<0||e>this.duration)throw new Error("Invalid t = "+e);return this.from+(this.to-this.from)*e/this.duration}}t.linear=function(e,t,n){return new i(e,t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sequence=void 0;const r=n(25),i=n(11);class o extends r.Animation{constructor(e){super(),this.children=e,this.duration=i.sum(e.map(e=>e.duration))}get endValue(){return this.children[this.children.length-1].endValue}at(e){if(e<0||e>this.duration)throw new Error("Invalid t = "+e);{let t=0;for(;t<this.children.length&&e>this.children[t].duration;)e-=this.children[t].duration,++t;if(t===this.children.length){if(e>1e-5)throw new Error("Bug, should not happen");{const e=this.children[this.children.length-1];return e.at(e.duration)}}return this.children[t].at(e)}}}t.sequence=function(...e){return new o(e)}},function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},function(e,t){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var l=o[u];if(!s(l))return!1;var c=e[l],f=t[l];if(!1===(i=n?n.call(r,c,f,l):void 0)||void 0===i&&c!==f)return!1}return!0}},function(e,t,n){"use strict";t.a=function(e){function t(e,t,r){var i=t.trim().split(h);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<o;++s)t[s]=n(e,t[s],r).trim();break;default:var u=s=0;for(t=[];s<o;++s)for(var l=0;l<a;++l)t[u++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(_,"$1"+e.trim());case 58:return e.trim()+t.replace(_,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(_,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function r(e,t,n,o){var a=e+";",s=2*t+3*n+4*o;if(944===s){e=a.indexOf(":",9)+1;var u=a.substring(e,a.length-1).trim();return u=a.substring(0,e).trim()+u+";",1===M||2===M&&i(u,1)?"-webkit-"+u+u:u}if(0===M||2===M&&!i(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(S,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(u=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+u+a;case 1005:return d.test(a)?a.replace(f,":-webkit-")+a.replace(f,":-moz-")+a:a;case 1e3:switch(t=(u=a.substring(13).trim()).indexOf("-")+1,u.charCodeAt(0)+u.charCodeAt(t)){case 226:u=a.replace(y,"tb");break;case 232:u=a.replace(y,"tb-rl");break;case 220:u=a.replace(y,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+u+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(u=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|u.charCodeAt(7))){case 203:if(111>u.charCodeAt(8))break;case 115:a=a.replace(u,"-webkit-"+u)+";"+a;break;case 207:case 102:a=a.replace(u,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(u,"-webkit-"+u)+";"+a.replace(u,"-ms-"+u+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return u=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+u+"-ms-flex-"+u+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(x,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(x,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(u=e.substring(e.indexOf(":")+1)).charCodeAt(0)?r(e.replace("stretch","fill-available"),t,n,o).replace(":fill-available",":stretch"):a.replace(u,"-webkit-"+u)+a.replace(u,"-moz-"+u.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===n+o&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+a}return a}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),N(2!==t?r:r.replace(k,"$1"),n,t)}function o(e,t){var n=r(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(w," or ($1)").substring(4):"("+t+")"}function a(e,t,n,r,i,o,a,s,l,c){for(var f,d=0,p=t;d<A;++d)switch(f=j[d].call(u,e,p,n,r,i,o,a,s,l,c)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(N=null,e?"function"!=typeof e?M=1:(M=2,N=e):M=0),s}function u(e,n){var s=e;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<A){var u=a(-1,n,s,s,T,E,0,0,0,0);void 0!==u&&"string"==typeof u&&(n=u)}var f=function e(n,s,u,f,d){for(var p,h,_,y,w,x=0,k=0,C=0,S=0,j=0,N=0,L=_=p=0,R=0,I=0,F=0,z=0,W=u.length,B=W-1,V="",U="",H="",$="";R<W;){if(h=u.charCodeAt(R),R===B&&0!==k+S+C+x&&(0!==k&&(h=47===k?10:47),S=C=x=0,W++,B++),0===k+S+C+x){if(R===B&&(0<I&&(V=V.replace(c,"")),0<V.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:V+=u.charAt(R)}h=59}switch(h){case 123:for(p=(V=V.trim()).charCodeAt(0),_=1,z=++R;R<W;){switch(h=u.charCodeAt(R)){case 123:_++;break;case 125:_--;break;case 47:switch(h=u.charCodeAt(R+1)){case 42:case 47:e:{for(L=R+1;L<B;++L)switch(u.charCodeAt(L)){case 47:if(42===h&&42===u.charCodeAt(L-1)&&R+2!==L){R=L+1;break e}break;case 10:if(47===h){R=L+1;break e}}R=L}}break;case 91:h++;case 40:h++;case 34:case 39:for(;R++<B&&u.charCodeAt(R)!==h;);}if(0===_)break;R++}switch(_=u.substring(z,R),0===p&&(p=(V=V.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<I&&(V=V.replace(c,"")),h=V.charCodeAt(1)){case 100:case 109:case 115:case 45:I=s;break;default:I=P}if(z=(_=e(s,I,_,h,d+1)).length,0<A&&(w=a(3,_,I=t(P,V,F),s,T,E,z,h,d,f),V=I.join(""),void 0!==w&&0===(z=(_=w.trim()).length)&&(h=0,_="")),0<z)switch(h){case 115:V=V.replace(b,o);case 100:case 109:case 45:_=V+"{"+_+"}";break;case 107:_=(V=V.replace(m,"$1 $2"))+"{"+_+"}",_=1===M||2===M&&i("@"+_,3)?"@-webkit-"+_+"@"+_:"@"+_;break;default:_=V+_,112===f&&(U+=_,_="")}else _="";break;default:_=e(s,t(s,V,F),_,f,d+1)}H+=_,_=F=I=L=p=0,V="",h=u.charCodeAt(++R);break;case 125:case 59:if(1<(z=(V=(0<I?V.replace(c,""):V).trim()).length))switch(0===L&&(p=V.charCodeAt(0),45===p||96<p&&123>p)&&(z=(V=V.replace(" ",":")).length),0<A&&void 0!==(w=a(1,V,s,n,T,E,U.length,f,d,f))&&0===(z=(V=w.trim()).length)&&(V="\0\0"),p=V.charCodeAt(0),h=V.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){$+=V+u.charAt(R);break}default:58!==V.charCodeAt(z-1)&&(U+=r(V,p,h,V.charCodeAt(2)))}F=I=L=p=0,V="",h=u.charCodeAt(++R)}}switch(h){case 13:case 10:47===k?k=0:0===1+p&&107!==f&&0<V.length&&(I=1,V+="\0"),0<A*D&&a(0,V,s,n,T,E,U.length,f,d,f),E=1,T++;break;case 59:case 125:if(0===k+S+C+x){E++;break}default:switch(E++,y=u.charAt(R),h){case 9:case 32:if(0===S+x+k)switch(j){case 44:case 58:case 9:case 32:y="";break;default:32!==h&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===S+k+x&&(I=F=1,y="\f"+y);break;case 108:if(0===S+k+x+O&&0<L)switch(R-L){case 2:112===j&&58===u.charCodeAt(R-3)&&(O=j);case 8:111===N&&(O=N)}break;case 58:0===S+k+x&&(L=R);break;case 44:0===k+C+S+x&&(I=1,y+="\r");break;case 34:case 39:0===k&&(S=S===h?0:0===S?h:S);break;case 91:0===S+k+C&&x++;break;case 93:0===S+k+C&&x--;break;case 41:0===S+k+x&&C--;break;case 40:if(0===S+k+x){if(0===p)switch(2*j+3*N){case 533:break;default:p=1}C++}break;case 64:0===k+C+S+x+L+_&&(_=1);break;case 42:case 47:if(!(0<S+x+C))switch(k){case 0:switch(2*h+3*u.charCodeAt(R+1)){case 235:k=47;break;case 220:z=R,k=42}break;case 42:47===h&&42===j&&z+2!==R&&(33===u.charCodeAt(z+2)&&(U+=u.substring(z,R+1)),y="",k=0)}}0===k&&(V+=y)}N=j,j=h,R++}if(0<(z=U.length)){if(I=s,0<A&&(void 0!==(w=a(2,U,I,n,T,E,z,f,d,f))&&0===(U=w).length))return $+U+H;if(U=I.join(",")+"{"+U+"}",0!=M*O){switch(2!==M||i(U,2)||(O=0),O){case 111:U=U.replace(v,":-moz-$1")+U;break;case 112:U=U.replace(g,"::-webkit-input-$1")+U.replace(g,"::-moz-$1")+U.replace(g,":-ms-input-$1")+U}O=0}}return $+U+H}(P,s,n,0,0);return 0<A&&(void 0!==(u=a(-2,f,s,s,T,E,f.length,0,0,0))&&(f=u)),"",O=0,E=T=1,f}var l=/^\0+/g,c=/[\0\r\f]/g,f=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,_=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,v=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,x=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,S=/([^-])(image-set\()/,E=1,T=1,O=0,M=1,P=[],j=[],A=0,N=null,D=0;return u.use=function e(t){switch(t){case void 0:case null:A=j.length=0;break;default:if("function"==typeof t)j[A++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else D=0|!!t}return e},u.set=s,void 0!==e&&s(e),u}},function(e,t,n){"use strict";t.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Type=t.Animation=t.styled=t.Sections=t.Exercise=t.initialize=t.Components=t.Imaging=t.Assertions=t.Functional=t.Formatters=t.Exercises=void 0;const u=s(n(0)),l=s(n(106)),c=n(110),f=n(111);var d=n(216);Object.defineProperty(t,"createFunctionRepositoryFromWindow",{enumerable:!0,get:function(){return d.fromWindow}});var p=n(12);Object.defineProperty(t,"Outcome",{enumerable:!0,get:function(){return p.Outcome}});const h=o(n(217));t.Exercises=h;var _=n(91);Object.defineProperty(t,"Explanations",{enumerable:!0,get:function(){return _.Explanations}});var m=n(92);Object.defineProperty(t,"FinishLineSection",{enumerable:!0,get:function(){return m.FinishLineSection}});const g=o(n(9)),v=o(n(13));t.Formatters={Jsx:g,String:v};const y=o(n(16));t.Functional=y;const b=o(n(23));t.Assertions=b;const w=o(n(75));t.Imaging=w;const x=o(n(18));t.Components=x;var k=n(20);Object.defineProperty(t,"Score",{enumerable:!0,get:function(){return k.Score}});const C=n(53);var S=n(17);Object.defineProperty(t,"Lazy",{enumerable:!0,get:function(){return S.Lazy}}),a(n(29),t),a(n(31),t),t.initialize=async function(e,t){const n=document.getElementsByTagName("head")[0].getAttribute("data-version");n?(document.title=e.title,window.shell=c.createShell(e),t&&C.configure(t),l.default.render(u.default.createElement(f.App,{chapter:e,version:n}),document.getElementById("app"))):console.error("Missing version! Please add data-version attribute to the html's head element.")};const E=o(n(252));t.Exercise=E;const T=o(n(261));t.Sections=T;const O=s(n(2));t.styled=O.default;const M=o(n(267));t.Animation=M;const P=o(n(33));t.Type=P},function(e,t,n){"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(57),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,a=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,u=i?Symbol.for("react.strict_mode"):60108,l=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.forward_ref"):60112,p=i?Symbol.for("react.suspense"):60113,h=i?Symbol.for("react.memo"):60115,_=i?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||v}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||v}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var k=x.prototype=new w;k.constructor=x,r(k,b.prototype),k.isPureReactComponent=!0;var C={current:null},S=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&!E.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===i[r]&&(i[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:C.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var M=/\/+/g,P=[];function j(e,t,n,r){if(P.length){var i=P.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function N(e,t,n){return null==e?0:function e(t,n,r,i){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var u=!1;if(null===t)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case a:u=!0}}if(u)return r(i,t,""===n?"."+D(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var c=n+D(s=t[l],l);u+=e(s,c,r,i)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=m&&t[m]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),l=0;!(s=t.next()).done;)u+=e(s=s.value,c=n+D(s,l++),r,i);else if("object"===s)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(O(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,i){var o="";null!=n&&(o=(""+n).replace(M,"$&/")+"/"),N(e,R,t=j(t,o,r,i)),A(t)}var F={current:null};function z(){var e=F.current;if(null===e)throw Error(g(321));return e}var W={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;N(e,L,t=j(null,null,t,n)),A(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!O(e))throw Error(g(143));return e}},t.Component=b,t.Fragment=s,t.Profiler=l,t.PureComponent=x,t.StrictMode=u,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var i=r({},e.props),a=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=C.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)S.call(t,c)&&!E.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:_,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return z().useCallback(e,t)},t.useContext=function(e,t){return z().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return z().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return z().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return z().useLayoutEffect(e,t)},t.useMemo=function(e,t){return z().useMemo(e,t)},t.useReducer=function(e,t,n){return z().useReducer(e,t,n)},t.useRef=function(e){return z().useRef(e)},t.useState=function(e){return z().useState(e)},t.version="16.14.0"},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(107)},function(e,t,n){"use strict";
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),i=n(57),o=n(108);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(a(227));function s(e,t,n,r,i,o,a,s,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var u=!1,l=null,c=!1,f=null,d={onError:function(e){u=!0,l=e}};function p(e,t,n,r,i,o,a,c,f){u=!1,l=null,s.apply(d,arguments)}var h=null,_=null,m=null;function g(e,t,n){var r=e.type||"unknown-event";e.currentTarget=m(n),function(e,t,n,r,i,o,s,d,h){if(p.apply(this,arguments),u){if(!u)throw Error(a(198));var _=l;u=!1,l=null,c||(c=!0,f=_)}}(r,t,void 0,e),e.currentTarget=null}var v=null,y={};function b(){if(v)for(var e in y){var t=y[e],n=v.indexOf(e);if(!(-1<n))throw Error(a(96,e));if(!x[n]){if(!t.extractEvents)throw Error(a(97,e));for(var r in x[n]=t,n=t.eventTypes){var i=void 0,o=n[r],s=t,u=r;if(k.hasOwnProperty(u))throw Error(a(99,u));k[u]=o;var l=o.phasedRegistrationNames;if(l){for(i in l)l.hasOwnProperty(i)&&w(l[i],s,u);i=!0}else o.registrationName?(w(o.registrationName,s,u),i=!0):i=!1;if(!i)throw Error(a(98,r,e))}}}}function w(e,t,n){if(C[e])throw Error(a(100,e));C[e]=t,S[e]=t.eventTypes[n].dependencies}var x=[],k={},C={},S={};function E(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];if(!y.hasOwnProperty(t)||y[t]!==r){if(y[t])throw Error(a(102,t));y[t]=r,n=!0}}n&&b()}var T=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),O=null,M=null,P=null;function j(e){if(e=_(e)){if("function"!=typeof O)throw Error(a(280));var t=e.stateNode;t&&(t=h(t),O(e.stateNode,e.type,t))}}function A(e){M?P?P.push(e):P=[e]:M=e}function N(){if(M){var e=M,t=P;if(P=M=null,j(e),t)for(e=0;e<t.length;e++)j(t[e])}}function D(e,t){return e(t)}function L(e,t,n,r,i){return e(t,n,r,i)}function R(){}var I=D,F=!1,z=!1;function W(){null===M&&null===P||(R(),N())}function B(e,t,n){if(z)return e(t,n);z=!0;try{return I(e,t,n)}finally{z=!1,W()}}var V=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U=Object.prototype.hasOwnProperty,H={},$={};function q(e,t,n,r,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){K[e]=new q(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];K[t]=new q(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){K[e]=new q(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){K[e]=new q(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){K[e]=new q(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){K[e]=new q(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){K[e]=new q(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){K[e]=new q(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){K[e]=new q(e,5,!1,e.toLowerCase(),null,!1)}));var G=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(G,X);K[t]=new q(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(G,X);K[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(G,X);K[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){K[e]=new q(e,1,!1,e.toLowerCase(),null,!1)})),K.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){K[e]=new q(e,1,!1,e.toLowerCase(),null,!0)}));var Q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Y(e,t,n,r){var i=K.hasOwnProperty(t)?K[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!U.call($,e)||!U.call(H,e)&&(V.test(e)?$[e]=!0:(H[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}Q.hasOwnProperty("ReactCurrentDispatcher")||(Q.ReactCurrentDispatcher={current:null}),Q.hasOwnProperty("ReactCurrentBatchConfig")||(Q.ReactCurrentBatchConfig={suspense:null});var J=/^(.*)[\\\/]/,Z="function"==typeof Symbol&&Symbol.for,ee=Z?Symbol.for("react.element"):60103,te=Z?Symbol.for("react.portal"):60106,ne=Z?Symbol.for("react.fragment"):60107,re=Z?Symbol.for("react.strict_mode"):60108,ie=Z?Symbol.for("react.profiler"):60114,oe=Z?Symbol.for("react.provider"):60109,ae=Z?Symbol.for("react.context"):60110,se=Z?Symbol.for("react.concurrent_mode"):60111,ue=Z?Symbol.for("react.forward_ref"):60112,le=Z?Symbol.for("react.suspense"):60113,ce=Z?Symbol.for("react.suspense_list"):60120,fe=Z?Symbol.for("react.memo"):60115,de=Z?Symbol.for("react.lazy"):60116,pe=Z?Symbol.for("react.block"):60121,he="function"==typeof Symbol&&Symbol.iterator;function _e(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=he&&e[he]||e["@@iterator"])?e:null}function me(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ne:return"Fragment";case te:return"Portal";case ie:return"Profiler";case re:return"StrictMode";case le:return"Suspense";case ce:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case ae:return"Context.Consumer";case oe:return"Context.Provider";case ue:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case fe:return me(e.type);case pe:return me(e.render);case de:if(e=1===e._status?e._result:null)return me(e)}return null}function ge(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,o=me(e.type);n=null,r&&(n=me(r.type)),r=o,o="",i?o=" (at "+i.fileName.replace(J,"")+":"+i.lineNumber+")":n&&(o=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+o}t+=n,e=e.return}while(e);return t}function ve(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function be(e){e._valueTracker||(e._valueTracker=function(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function xe(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ke(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ve(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Ce(e,t){null!=(t=t.checked)&&Y(e,"checked",t,!1)}function Se(e,t){Ce(e,t);var n=ve(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Te(e,t.type,n):t.hasOwnProperty("defaultValue")&&Te(e,t.type,ve(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ee(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Te(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Oe(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ve(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Pe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function je(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ve(n)}}function Ae(e,t){var n=ve(t.value),r=ve(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Ne(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var De="http://www.w3.org/1999/xhtml",Le="http://www.w3.org/2000/svg";function Re(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Re(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Fe,ze=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==Le||"innerHTML"in e)e.innerHTML=t;else{for((Fe=Fe||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function We(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function Be(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ve={animationend:Be("Animation","AnimationEnd"),animationiteration:Be("Animation","AnimationIteration"),animationstart:Be("Animation","AnimationStart"),transitionend:Be("Transition","TransitionEnd")},Ue={},He={};function $e(e){if(Ue[e])return Ue[e];if(!Ve[e])return e;var t,n=Ve[e];for(t in n)if(n.hasOwnProperty(t)&&t in He)return Ue[e]=n[t];return e}T&&(He=document.createElement("div").style,"AnimationEvent"in window||(delete Ve.animationend.animation,delete Ve.animationiteration.animation,delete Ve.animationstart.animation),"TransitionEvent"in window||delete Ve.transitionend.transition);var qe=$e("animationend"),Ke=$e("animationiteration"),Ge=$e("animationstart"),Xe=$e("transitionend"),Qe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new("function"==typeof WeakMap?WeakMap:Map);function Je(e){var t=Ye.get(e);return void 0===t&&(t=new Map,Ye.set(e,t)),t}function Ze(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function et(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function tt(e){if(Ze(e)!==e)throw Error(a(188))}function nt(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ze(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return tt(i),e;if(o===r)return tt(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,u=i.child;u;){if(u===n){s=!0,n=i,r=o;break}if(u===r){s=!0,r=i,n=o;break}u=u.sibling}if(!s){for(u=o.child;u;){if(u===n){s=!0,n=o,r=i;break}if(u===r){s=!0,r=o,n=i;break}u=u.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function rt(e,t){if(null==t)throw Error(a(30));return null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function it(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var ot=null;function at(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)g(e,t[r],n[r]);else t&&g(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function st(e){if(null!==e&&(ot=rt(ot,e)),e=ot,ot=null,e){if(it(e,at),ot)throw Error(a(95));if(c)throw e=f,c=!1,f=null,e}}function ut(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function lt(e){if(!T)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}var ct=[];function ft(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ct.length&&ct.push(e)}function dt(e,t,n,r){if(ct.length){var i=ct.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function pt(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(t=n.tag)&&6!==t||e.ancestors.push(n),n=Tn(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=ut(e.nativeEvent);r=e.topLevelType;var o=e.nativeEvent,a=e.eventSystemFlags;0===n&&(a|=64);for(var s=null,u=0;u<x.length;u++){var l=x[u];l&&(l=l.extractEvents(r,t,o,i,a))&&(s=rt(s,l))}st(s)}}function ht(e,t,n){if(!n.has(e)){switch(e){case"scroll":Gt(t,"scroll",!0);break;case"focus":case"blur":Gt(t,"focus",!0),Gt(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":lt(e)&&Gt(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:-1===Qe.indexOf(e)&&Kt(e,t)}n.set(e,null)}}var _t,mt,gt,vt=!1,yt=[],bt=null,wt=null,xt=null,kt=new Map,Ct=new Map,St=[],Et="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Tt="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Ot(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:32|n,nativeEvent:i,container:r}}function Mt(e,t){switch(e){case"focus":case"blur":bt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":kt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(t.pointerId)}}function Pt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e=Ot(t,n,r,i,o),null!==t&&(null!==(t=On(t))&&mt(t)),e):(e.eventSystemFlags|=r,e)}function jt(e){var t=Tn(e.target);if(null!==t){var n=Ze(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=et(n)))return e.blockedOn=t,void o.unstable_runWithPriority(e.priority,(function(){gt(n)}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function At(e){if(null!==e.blockedOn)return!1;var t=Jt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(null!==t){var n=On(t);return null!==n&&mt(n),e.blockedOn=t,!1}return!0}function Nt(e,t,n){At(e)&&n.delete(t)}function Dt(){for(vt=!1;0<yt.length;){var e=yt[0];if(null!==e.blockedOn){null!==(e=On(e.blockedOn))&&_t(e);break}var t=Jt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);null!==t?e.blockedOn=t:yt.shift()}null!==bt&&At(bt)&&(bt=null),null!==wt&&At(wt)&&(wt=null),null!==xt&&At(xt)&&(xt=null),kt.forEach(Nt),Ct.forEach(Nt)}function Lt(e,t){e.blockedOn===t&&(e.blockedOn=null,vt||(vt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Dt)))}function Rt(e){function t(t){return Lt(t,e)}if(0<yt.length){Lt(yt[0],e);for(var n=1;n<yt.length;n++){var r=yt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==bt&&Lt(bt,e),null!==wt&&Lt(wt,e),null!==xt&&Lt(xt,e),kt.forEach(t),Ct.forEach(t),n=0;n<St.length;n++)(r=St[n]).blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&null===(n=St[0]).blockedOn;)jt(n),null===n.blockedOn&&St.shift()}var It={},Ft=new Map,zt=new Map,Wt=["abort","abort",qe,"animationEnd",Ke,"animationIteration",Ge,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Xe,"transitionEnd","waiting","waiting"];function Bt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],o="on"+(i[0].toUpperCase()+i.slice(1));o={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[r],eventPriority:t},zt.set(r,t),Ft.set(r,o),It[i]=o}}Bt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Bt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Bt(Wt,2);for(var Vt="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ut=0;Ut<Vt.length;Ut++)zt.set(Vt[Ut],0);var Ht=o.unstable_UserBlockingPriority,$t=o.unstable_runWithPriority,qt=!0;function Kt(e,t){Gt(t,e,!1)}function Gt(e,t,n){var r=zt.get(t);switch(void 0===r?2:r){case 0:r=Xt.bind(null,t,1,e);break;case 1:r=Qt.bind(null,t,1,e);break;default:r=Yt.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Xt(e,t,n,r){F||R();var i=Yt,o=F;F=!0;try{L(i,e,t,n,r)}finally{(F=o)||W()}}function Qt(e,t,n,r){$t(Ht,Yt.bind(null,e,t,n,r))}function Yt(e,t,n,r){if(qt)if(0<yt.length&&-1<Et.indexOf(e))e=Ot(null,e,t,n,r),yt.push(e);else{var i=Jt(e,t,n,r);if(null===i)Mt(e,r);else if(-1<Et.indexOf(e))e=Ot(i,e,t,n,r),yt.push(e);else if(!function(e,t,n,r,i){switch(t){case"focus":return bt=Pt(bt,e,t,n,r,i),!0;case"dragenter":return wt=Pt(wt,e,t,n,r,i),!0;case"mouseover":return xt=Pt(xt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return kt.set(o,Pt(kt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ct.set(o,Pt(Ct.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r)){Mt(e,r),e=dt(e,r,null,t);try{B(pt,e)}finally{ft(e)}}}}function Jt(e,t,n,r){if(null!==(n=Tn(n=ut(r)))){var i=Ze(n);if(null===i)n=null;else{var o=i.tag;if(13===o){if(null!==(n=et(i)))return n;n=null}else if(3===o){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=dt(e,r,n,t);try{B(pt,e)}finally{ft(e)}return null}var Zt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},en=["Webkit","ms","Moz","O"];function tn(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Zt.hasOwnProperty(e)&&Zt[e]?(""+t).trim():t+"px"}function nn(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=tn(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Zt).forEach((function(e){en.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zt[t]=Zt[e]}))}));var rn=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function on(e,t){if(t){if(rn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e,""));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(a(62,""))}}function an(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sn=De;function un(e,t){var n=Je(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=S[t];for(var r=0;r<t.length;r++)ht(t[r],e,n)}function ln(){}function cn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function fn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dn(e,t){var n,r=fn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fn(r)}}function pn(){for(var e=window,t=cn();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=cn((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var _n=null,mn=null;function gn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function vn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var yn="function"==typeof setTimeout?setTimeout:void 0,bn="function"==typeof clearTimeout?clearTimeout:void 0;function wn(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function xn(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Cn="__reactInternalInstance$"+kn,Sn="__reactEventHandlers$"+kn,En="__reactContainere$"+kn;function Tn(e){var t=e[Cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[En]||n[Cn]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=xn(e);null!==e;){if(n=e[Cn])return n;e=xn(e)}return t}n=(e=n).parentNode}return null}function On(e){return!(e=e[Cn]||e[En])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Mn(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function Pn(e){return e[Sn]||null}function jn(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function An(e,t){var n=e.stateNode;if(!n)return null;var r=h(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(a(231,t,typeof n));return n}function Nn(e,t,n){(t=An(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Dn(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=jn(t);for(t=n.length;0<t--;)Nn(n[t],"captured",e);for(t=0;t<n.length;t++)Nn(n[t],"bubbled",e)}}function Ln(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=An(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Rn(e){e&&e.dispatchConfig.registrationName&&Ln(e._targetInst,null,e)}function In(e){it(e,Dn)}var Fn=null,zn=null,Wn=null;function Bn(){if(Wn)return Wn;var e,t,n=zn,r=n.length,i="value"in Fn?Fn.value:Fn.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Wn=i.slice(e,1<t?1-t:void 0)}function Vn(){return!0}function Un(){return!1}function Hn(e,t,n,r){for(var i in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):"target"===i?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?Vn:Un,this.isPropagationStopped=Un,this}function $n(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}function qn(e){if(!(e instanceof this))throw Error(a(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Kn(e){e.eventPool=[],e.getPooled=$n,e.release=qn}i(Hn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){this.isPersistent=Vn},isPersistent:Un,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Un,this._dispatchInstances=this._dispatchListeners=null}}),Hn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Hn.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return i(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=i({},r.Interface,e),n.extend=r.extend,Kn(n),n},Kn(Hn);var Gn=Hn.extend({data:null}),Xn=Hn.extend({data:null}),Qn=[9,13,27,32],Yn=T&&"CompositionEvent"in window,Jn=null;T&&"documentMode"in document&&(Jn=document.documentMode);var Zn=T&&"TextEvent"in window&&!Jn,er=T&&(!Yn||Jn&&8<Jn&&11>=Jn),tr=String.fromCharCode(32),nr={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},rr=!1;function ir(e,t){switch(e){case"keyup":return-1!==Qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function or(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var ar=!1;var sr={eventTypes:nr,extractEvents:function(e,t,n,r){var i;if(Yn)e:{switch(e){case"compositionstart":var o=nr.compositionStart;break e;case"compositionend":o=nr.compositionEnd;break e;case"compositionupdate":o=nr.compositionUpdate;break e}o=void 0}else ar?ir(e,n)&&(o=nr.compositionEnd):"keydown"===e&&229===n.keyCode&&(o=nr.compositionStart);return o?(er&&"ko"!==n.locale&&(ar||o!==nr.compositionStart?o===nr.compositionEnd&&ar&&(i=Bn()):(zn="value"in(Fn=r)?Fn.value:Fn.textContent,ar=!0)),o=Gn.getPooled(o,t,n,r),i?o.data=i:null!==(i=or(n))&&(o.data=i),In(o),i=o):i=null,(e=Zn?function(e,t){switch(e){case"compositionend":return or(t);case"keypress":return 32!==t.which?null:(rr=!0,tr);case"textInput":return(e=t.data)===tr&&rr?null:e;default:return null}}(e,n):function(e,t){if(ar)return"compositionend"===e||!Yn&&ir(e,t)?(e=Bn(),Wn=zn=Fn=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return er&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=Xn.getPooled(nr.beforeInput,t,n,r)).data=e,In(t)):t=null,null===i?t:null===t?i:[i,t]}},ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!ur[e.type]:"textarea"===t}var cr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function fr(e,t,n){return(e=Hn.getPooled(cr.change,e,t,n)).type="change",A(n),In(e),e}var dr=null,pr=null;function hr(e){st(e)}function _r(e){if(we(Mn(e)))return e}function mr(e,t){if("change"===e)return t}var gr=!1;function vr(){dr&&(dr.detachEvent("onpropertychange",yr),pr=dr=null)}function yr(e){if("value"===e.propertyName&&_r(pr))if(e=fr(pr,e,ut(e)),F)st(e);else{F=!0;try{D(hr,e)}finally{F=!1,W()}}}function br(e,t,n){"focus"===e?(vr(),pr=n,(dr=t).attachEvent("onpropertychange",yr)):"blur"===e&&vr()}function wr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return _r(pr)}function xr(e,t){if("click"===e)return _r(t)}function kr(e,t){if("input"===e||"change"===e)return _r(t)}T&&(gr=lt("input")&&(!document.documentMode||9<document.documentMode));var Cr={eventTypes:cr,_isInputEventSupported:gr,extractEvents:function(e,t,n,r){var i=t?Mn(t):window,o=i.nodeName&&i.nodeName.toLowerCase();if("select"===o||"input"===o&&"file"===i.type)var a=mr;else if(lr(i))if(gr)a=kr;else{a=wr;var s=br}else(o=i.nodeName)&&"input"===o.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(a=xr);if(a&&(a=a(e,t)))return fr(a,n,r);s&&s(e,i,t),"blur"===e&&(e=i._wrapperState)&&e.controlled&&"number"===i.type&&Te(i,"number",i.value)}},Sr=Hn.extend({view:null,detail:null}),Er={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Er[e])&&!!t[e]}function Or(){return Tr}var Mr=0,Pr=0,jr=!1,Ar=!1,Nr=Sr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Or,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Mr;return Mr=e.screenX,jr?"mousemove"===e.type?e.screenX-t:0:(jr=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Pr;return Pr=e.screenY,Ar?"mousemove"===e.type?e.screenY-t:0:(Ar=!0,0)}}),Dr=Nr.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Lr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Rr={eventTypes:Lr,extractEvents:function(e,t,n,r,i){var o="mouseover"===e||"pointerover"===e,a="mouseout"===e||"pointerout"===e;if(o&&0==(32&i)&&(n.relatedTarget||n.fromElement)||!a&&!o)return null;(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,a)?(a=t,null!==(t=(t=n.relatedTarget||n.toElement)?Tn(t):null)&&(t!==Ze(t)||5!==t.tag&&6!==t.tag)&&(t=null)):a=null;if(a===t)return null;if("mouseout"===e||"mouseover"===e)var s=Nr,u=Lr.mouseLeave,l=Lr.mouseEnter,c="mouse";else"pointerout"!==e&&"pointerover"!==e||(s=Dr,u=Lr.pointerLeave,l=Lr.pointerEnter,c="pointer");if(e=null==a?o:Mn(a),o=null==t?o:Mn(t),(u=s.getPooled(u,a,n,r)).type=c+"leave",u.target=e,u.relatedTarget=o,(n=s.getPooled(l,t,n,r)).type=c+"enter",n.target=o,n.relatedTarget=e,c=t,(r=a)&&c)e:{for(l=c,a=0,e=s=r;e;e=jn(e))a++;for(e=0,t=l;t;t=jn(t))e++;for(;0<a-e;)s=jn(s),a--;for(;0<e-a;)l=jn(l),e--;for(;a--;){if(s===l||s===l.alternate)break e;s=jn(s),l=jn(l)}s=null}else s=null;for(l=s,s=[];r&&r!==l&&(null===(a=r.alternate)||a!==l);)s.push(r),r=jn(r);for(r=[];c&&c!==l&&(null===(a=c.alternate)||a!==l);)r.push(c),c=jn(c);for(c=0;c<s.length;c++)Ln(s[c],"bubbled",u);for(c=r.length;0<c--;)Ln(r[c],"captured",n);return 0==(64&i)?[u]:[u,n]}};var Ir="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Fr=Object.prototype.hasOwnProperty;function zr(e,t){if(Ir(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Fr.call(t,n[r])||!Ir(e[n[r]],t[n[r]]))return!1;return!0}var Wr=T&&"documentMode"in document&&11>=document.documentMode,Br={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Vr=null,Ur=null,Hr=null,$r=!1;function qr(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return $r||null==Vr||Vr!==cn(n)?null:("selectionStart"in(n=Vr)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Hr&&zr(Hr,n)?null:(Hr=n,(e=Hn.getPooled(Br.select,Ur,e,t)).type="select",e.target=Vr,In(e),e))}var Kr={eventTypes:Br,extractEvents:function(e,t,n,r,i,o){if(!(o=!(i=o||(r.window===r?r.document:9===r.nodeType?r:r.ownerDocument)))){e:{i=Je(i),o=S.onSelect;for(var a=0;a<o.length;a++)if(!i.has(o[a])){i=!1;break e}i=!0}o=!i}if(o)return null;switch(i=t?Mn(t):window,e){case"focus":(lr(i)||"true"===i.contentEditable)&&(Vr=i,Ur=t,Hr=null);break;case"blur":Hr=Ur=Vr=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":return $r=!1,qr(n,r);case"selectionchange":if(Wr)break;case"keydown":case"keyup":return qr(n,r)}return null}},Gr=Hn.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Xr=Hn.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qr=Sr.extend({relatedTarget:null});function Yr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var Jr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ei=Sr.extend({key:function(e){if(e.key){var t=Jr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Yr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Zr[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Or,charCode:function(e){return"keypress"===e.type?Yr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Yr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ti=Nr.extend({dataTransfer:null}),ni=Sr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Or}),ri=Hn.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),ii=Nr.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),oi={eventTypes:It,extractEvents:function(e,t,n,r){var i=Ft.get(e);if(!i)return null;switch(e){case"keypress":if(0===Yr(n))return null;case"keydown":case"keyup":e=ei;break;case"blur":case"focus":e=Qr;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Nr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=ti;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=ni;break;case qe:case Ke:case Ge:e=Gr;break;case Xe:e=ri;break;case"scroll":e=Sr;break;case"wheel":e=ii;break;case"copy":case"cut":case"paste":e=Xr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Dr;break;default:e=Hn}return In(t=e.getPooled(i,t,n,r)),t}};if(v)throw Error(a(101));v=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),b(),h=Pn,_=On,m=Mn,E({SimpleEventPlugin:oi,EnterLeaveEventPlugin:Rr,ChangeEventPlugin:Cr,SelectEventPlugin:Kr,BeforeInputEventPlugin:sr});var ai=[],si=-1;function ui(e){0>si||(e.current=ai[si],ai[si]=null,si--)}function li(e,t){si++,ai[si]=e.current,e.current=t}var ci={},fi={current:ci},di={current:!1},pi=ci;function hi(e,t){var n=e.type.contextTypes;if(!n)return ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _i(e){return null!=(e=e.childContextTypes)}function mi(){ui(di),ui(fi)}function gi(e,t,n){if(fi.current!==ci)throw Error(a(168));li(fi,t),li(di,n)}function vi(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in e))throw Error(a(108,me(t)||"Unknown",o));return i({},n,{},r)}function yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,pi=fi.current,li(fi,e),li(di,di.current),!0}function bi(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=vi(e,t,pi),r.__reactInternalMemoizedMergedChildContext=e,ui(di),ui(fi),li(fi,e)):ui(di),li(di,n)}var wi=o.unstable_runWithPriority,xi=o.unstable_scheduleCallback,ki=o.unstable_cancelCallback,Ci=o.unstable_requestPaint,Si=o.unstable_now,Ei=o.unstable_getCurrentPriorityLevel,Ti=o.unstable_ImmediatePriority,Oi=o.unstable_UserBlockingPriority,Mi=o.unstable_NormalPriority,Pi=o.unstable_LowPriority,ji=o.unstable_IdlePriority,Ai={},Ni=o.unstable_shouldYield,Di=void 0!==Ci?Ci:function(){},Li=null,Ri=null,Ii=!1,Fi=Si(),zi=1e4>Fi?Si:function(){return Si()-Fi};function Wi(){switch(Ei()){case Ti:return 99;case Oi:return 98;case Mi:return 97;case Pi:return 96;case ji:return 95;default:throw Error(a(332))}}function Bi(e){switch(e){case 99:return Ti;case 98:return Oi;case 97:return Mi;case 96:return Pi;case 95:return ji;default:throw Error(a(332))}}function Vi(e,t){return e=Bi(e),wi(e,t)}function Ui(e,t,n){return e=Bi(e),xi(e,t,n)}function Hi(e){return null===Li?(Li=[e],Ri=xi(Ti,qi)):Li.push(e),Ai}function $i(){if(null!==Ri){var e=Ri;Ri=null,ki(e)}qi()}function qi(){if(!Ii&&null!==Li){Ii=!0;var e=0;try{var t=Li;Vi(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Li=null}catch(t){throw null!==Li&&(Li=Li.slice(e+1)),xi(Ti,$i),t}finally{Ii=!1}}}function Ki(e,t,n){return 1073741821-(1+((1073741821-e+t/10)/(n/=10)|0))*n}function Gi(e,t){if(e&&e.defaultProps)for(var n in t=i({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var Xi={current:null},Qi=null,Yi=null,Ji=null;function Zi(){Ji=Yi=Qi=null}function eo(e){var t=Xi.current;ui(Xi),e.type._context._currentValue=t}function to(e,t){for(;null!==e;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t);else{if(!(null!==n&&n.childExpirationTime<t))break;n.childExpirationTime=t}e=e.return}}function no(e,t){Qi=e,Ji=Yi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=t&&(Pa=!0),e.firstContext=null)}function ro(e,t){if(Ji!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Ji=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Yi){if(null===Qi)throw Error(a(308));Yi=t,Qi.dependencies={expirationTime:0,firstContext:t,responders:null}}else Yi=Yi.next=t;return e._currentValue}var io=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function so(e,t){return(e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null}).next=e}function uo(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function lo(e,t){var n=e.alternate;null!==n&&ao(n,e),null===(n=(e=e.updateQueue).baseQueue)?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function co(e,t,n,r){var o=e.updateQueue;io=!1;var a=o.baseQueue,s=o.shared.pending;if(null!==s){if(null!==a){var u=a.next;a.next=s.next,s.next=u}a=s,o.shared.pending=null,null!==(u=e.alternate)&&(null!==(u=u.updateQueue)&&(u.baseQueue=s))}if(null!==a){u=a.next;var l=o.baseState,c=0,f=null,d=null,p=null;if(null!==u)for(var h=u;;){if((s=h.expirationTime)<r){var _={expirationTime:h.expirationTime,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null};null===p?(d=p=_,f=l):p=p.next=_,s>c&&(c=s)}else{null!==p&&(p=p.next={expirationTime:1073741823,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null}),ou(s,h.suspenseConfig);e:{var m=e,g=h;switch(s=t,_=n,g.tag){case 1:if("function"==typeof(m=g.payload)){l=m.call(_,l,s);break e}l=m;break e;case 3:m.effectTag=-4097&m.effectTag|64;case 0:if(null==(s="function"==typeof(m=g.payload)?m.call(_,l,s):m))break e;l=i({},l,s);break e;case 2:io=!0}}null!==h.callback&&(e.effectTag|=32,null===(s=o.effects)?o.effects=[h]:s.push(h))}if(null===(h=h.next)||h===u){if(null===(s=o.shared.pending))break;h=a.next=s.next,s.next=u,o.baseQueue=a=s,o.shared.pending=null}}null===p?f=l:p.next=d,o.baseState=f,o.baseQueue=p,au(c),e.expirationTime=c,e.memoizedState=l}}function fo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=i,i=n,"function"!=typeof r)throw Error(a(191,r));r.call(i)}}}var po=Q.ReactCurrentBatchConfig,ho=(new r.Component).refs;function _o(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:i({},t,n),e.memoizedState=n,0===e.expirationTime&&(e.updateQueue.baseState=n)}var mo={isMounted:function(e){return!!(e=e._reactInternalFiber)&&Ze(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=qs(),i=po.suspense;(i=so(r=Ks(r,e,i),i)).payload=t,null!=n&&(i.callback=n),uo(e,i),Gs(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=qs(),i=po.suspense;(i=so(r=Ks(r,e,i),i)).tag=1,i.payload=t,null!=n&&(i.callback=n),uo(e,i),Gs(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=qs(),r=po.suspense;(r=so(n=Ks(n,e,r),r)).tag=2,null!=t&&(r.callback=t),uo(e,r),Gs(e,n)}};function go(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!zr(n,r)||!zr(i,o))}function vo(e,t,n){var r=!1,i=ci,o=t.contextType;return"object"==typeof o&&null!==o?o=ro(o):(i=_i(t)?pi:fi.current,o=(r=null!=(r=t.contextTypes))?hi(e,i):ci),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=mo,e.stateNode=t,t._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function bo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ho,oo(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=ro(o):(o=_i(t)?pi:fi.current,i.context=hi(e,o)),co(e,n,i,r),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(_o(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&mo.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.effectTag|=4)}var wo=Array.isArray;function xo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===ho&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ko(e,t){if("textarea"!==e.type)throw Error(a(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Co(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Eu(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function s(t){return e&&null===t.alternate&&(t.effectTag=2),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=Mu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=xo(e,t,n),r.return=e,r):((r=Tu(n.type,n.key,n.props,null,e.mode,r)).ref=xo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Pu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?((t=Ou(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Mu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ee:return(n=Tu(t.type,t.key,t.props,null,e.mode,n)).ref=xo(e,null,t),n.return=e,n;case te:return(t=Pu(t,e.mode,n)).return=e,t}if(wo(t)||_e(t))return(t=Ou(t,e.mode,n,null)).return=e,t;ko(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ee:return n.key===i?n.type===ne?f(e,t,n.props.children,r,i):l(e,t,n,r):null;case te:return n.key===i?c(e,t,n,r):null}if(wo(n)||_e(n))return null!==i?null:f(e,t,n,r,null);ko(e,n)}return null}function h(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return u(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ee:return e=e.get(null===r.key?n:r.key)||null,r.type===ne?f(t,e,r.props.children,i,r.key):l(t,e,r,i);case te:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(wo(r)||_e(r))return f(t,e=e.get(n)||null,r,i,null);ko(t,r)}return null}function _(i,a,s,u){for(var l=null,c=null,f=a,_=a=0,m=null;null!==f&&_<s.length;_++){f.index>_?(m=f,f=null):m=f.sibling;var g=p(i,f,s[_],u);if(null===g){null===f&&(f=m);break}e&&f&&null===g.alternate&&t(i,f),a=o(g,a,_),null===c?l=g:c.sibling=g,c=g,f=m}if(_===s.length)return n(i,f),l;if(null===f){for(;_<s.length;_++)null!==(f=d(i,s[_],u))&&(a=o(f,a,_),null===c?l=f:c.sibling=f,c=f);return l}for(f=r(i,f);_<s.length;_++)null!==(m=h(f,i,_,s[_],u))&&(e&&null!==m.alternate&&f.delete(null===m.key?_:m.key),a=o(m,a,_),null===c?l=m:c.sibling=m,c=m);return e&&f.forEach((function(e){return t(i,e)})),l}function m(i,s,u,l){var c=_e(u);if("function"!=typeof c)throw Error(a(150));if(null==(u=c.call(u)))throw Error(a(151));for(var f=c=null,_=s,m=s=0,g=null,v=u.next();null!==_&&!v.done;m++,v=u.next()){_.index>m?(g=_,_=null):g=_.sibling;var y=p(i,_,v.value,l);if(null===y){null===_&&(_=g);break}e&&_&&null===y.alternate&&t(i,_),s=o(y,s,m),null===f?c=y:f.sibling=y,f=y,_=g}if(v.done)return n(i,_),c;if(null===_){for(;!v.done;m++,v=u.next())null!==(v=d(i,v.value,l))&&(s=o(v,s,m),null===f?c=v:f.sibling=v,f=v);return c}for(_=r(i,_);!v.done;m++,v=u.next())null!==(v=h(_,i,m,v.value,l))&&(e&&null!==v.alternate&&_.delete(null===v.key?m:v.key),s=o(v,s,m),null===f?c=v:f.sibling=v,f=v);return e&&_.forEach((function(e){return t(i,e)})),c}return function(e,r,o,u){var l="object"==typeof o&&null!==o&&o.type===ne&&null===o.key;l&&(o=o.props.children);var c="object"==typeof o&&null!==o;if(c)switch(o.$$typeof){case ee:e:{for(c=o.key,l=r;null!==l;){if(l.key===c){switch(l.tag){case 7:if(o.type===ne){n(e,l.sibling),(r=i(l,o.props.children)).return=e,e=r;break e}break;default:if(l.elementType===o.type){n(e,l.sibling),(r=i(l,o.props)).ref=xo(e,l,o),r.return=e,e=r;break e}}n(e,l);break}t(e,l),l=l.sibling}o.type===ne?((r=Ou(o.props.children,e.mode,u,o.key)).return=e,e=r):((u=Tu(o.type,o.key,o.props,null,e.mode,u)).ref=xo(e,r,o),u.return=e,e=u)}return s(e);case te:e:{for(l=o.key;null!==r;){if(r.key===l){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),(r=i(r,o.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Pu(o,e.mode,u)).return=e,e=r}return s(e)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&6===r.tag?(n(e,r.sibling),(r=i(r,o)).return=e,e=r):(n(e,r),(r=Mu(o,e.mode,u)).return=e,e=r),s(e);if(wo(o))return _(e,r,o,u);if(_e(o))return m(e,r,o,u);if(c&&ko(e,o),void 0===o&&!l)switch(e.tag){case 1:case 0:throw e=e.type,Error(a(152,e.displayName||e.name||"Component"))}return n(e,r)}}var So=Co(!0),Eo=Co(!1),To={},Oo={current:To},Mo={current:To},Po={current:To};function jo(e){if(e===To)throw Error(a(174));return e}function Ao(e,t){switch(li(Po,t),li(Mo,e),li(Oo,To),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ie(null,"");break;default:t=Ie(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ui(Oo),li(Oo,t)}function No(){ui(Oo),ui(Mo),ui(Po)}function Do(e){jo(Po.current);var t=jo(Oo.current),n=Ie(t,e.type);t!==n&&(li(Mo,e),li(Oo,n))}function Lo(e){Mo.current===e&&(ui(Oo),ui(Mo))}var Ro={current:0};function Io(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.effectTag))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Fo(e,t){return{responder:e,props:t}}var zo=Q.ReactCurrentDispatcher,Wo=Q.ReactCurrentBatchConfig,Bo=0,Vo=null,Uo=null,Ho=null,$o=!1;function qo(){throw Error(a(321))}function Ko(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ir(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,o){if(Bo=o,Vo=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,zo.current=null===e||null===e.memoizedState?ga:va,e=n(r,i),t.expirationTime===Bo){o=0;do{if(t.expirationTime=0,!(25>o))throw Error(a(301));o+=1,Ho=Uo=null,t.updateQueue=null,zo.current=ya,e=n(r,i)}while(t.expirationTime===Bo)}if(zo.current=ma,t=null!==Uo&&null!==Uo.next,Bo=0,Ho=Uo=Vo=null,$o=!1,t)throw Error(a(300));return e}function Xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ho?Vo.memoizedState=Ho=e:Ho=Ho.next=e,Ho}function Qo(){if(null===Uo){var e=Vo.alternate;e=null!==e?e.memoizedState:null}else e=Uo.next;var t=null===Ho?Vo.memoizedState:Ho.next;if(null!==t)Ho=t,Uo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(Uo=e).memoizedState,baseState:Uo.baseState,baseQueue:Uo.baseQueue,queue:Uo.queue,next:null},null===Ho?Vo.memoizedState=Ho=e:Ho=Ho.next=e}return Ho}function Yo(e,t){return"function"==typeof t?t(e):t}function Jo(e){var t=Qo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=Uo,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var u=s=o=null,l=i;do{var c=l.expirationTime;if(c<Bo){var f={expirationTime:l.expirationTime,suspenseConfig:l.suspenseConfig,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};null===u?(s=u=f,o=r):u=u.next=f,c>Vo.expirationTime&&(Vo.expirationTime=c,au(c))}else null!==u&&(u=u.next={expirationTime:1073741823,suspenseConfig:l.suspenseConfig,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),ou(c,l.suspenseConfig),r=l.eagerReducer===e?l.eagerState:e(r,l.action);l=l.next}while(null!==l&&l!==i);null===u?o=r:u.next=s,Ir(r,t.memoizedState)||(Pa=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Zo(e){var t=Qo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);Ir(o,t.memoizedState)||(Pa=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ea(e){var t=Xo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:e}).dispatch=_a.bind(null,Vo,e),[t.memoizedState,e]}function ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Vo.updateQueue)?(t={lastEffect:null},Vo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function na(){return Qo().memoizedState}function ra(e,t,n,r){var i=Xo();Vo.effectTag|=e,i.memoizedState=ta(1|t,n,void 0,void 0===r?null:r)}function ia(e,t,n,r){var i=Qo();r=void 0===r?null:r;var o=void 0;if(null!==Uo){var a=Uo.memoizedState;if(o=a.destroy,null!==r&&Ko(r,a.deps))return void ta(t,n,o,r)}Vo.effectTag|=e,i.memoizedState=ta(1|t,n,o,r)}function oa(e,t){return ra(516,4,e,t)}function aa(e,t){return ia(516,4,e,t)}function sa(e,t){return ia(4,2,e,t)}function ua(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function la(e,t,n){return n=null!=n?n.concat([e]):null,ia(4,2,ua.bind(null,t,e),n)}function ca(){}function fa(e,t){return Xo().memoizedState=[e,void 0===t?null:t],e}function da(e,t){var n=Qo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pa(e,t){var n=Qo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ha(e,t,n){var r=Wi();Vi(98>r?98:r,(function(){e(!0)})),Vi(97<r?97:r,(function(){var r=Wo.suspense;Wo.suspense=void 0===t?null:t;try{e(!1),n()}finally{Wo.suspense=r}}))}function _a(e,t,n){var r=qs(),i=po.suspense;i={expirationTime:r=Ks(r,e,i),suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var o=t.pending;if(null===o?i.next=i:(i.next=o.next,o.next=i),t.pending=i,o=e.alternate,e===Vo||null!==o&&o===Vo)$o=!0,i.expirationTime=Bo,Vo.expirationTime=Bo;else{if(0===e.expirationTime&&(null===o||0===o.expirationTime)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.eagerReducer=o,i.eagerState=s,Ir(s,a))return}catch(e){}Gs(e,r)}}var ma={readContext:ro,useCallback:qo,useContext:qo,useEffect:qo,useImperativeHandle:qo,useLayoutEffect:qo,useMemo:qo,useReducer:qo,useRef:qo,useState:qo,useDebugValue:qo,useResponder:qo,useDeferredValue:qo,useTransition:qo},ga={readContext:ro,useCallback:fa,useContext:ro,useEffect:oa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ra(4,2,ua.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=Xo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=_a.bind(null,Vo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Xo().memoizedState=e},useState:ea,useDebugValue:ca,useResponder:Fo,useDeferredValue:function(e,t){var n=ea(e),r=n[0],i=n[1];return oa((function(){var n=Wo.suspense;Wo.suspense=void 0===t?null:t;try{i(e)}finally{Wo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=ea(!1),n=t[0];return t=t[1],[fa(ha.bind(null,t,e),[t,e]),n]}},va={readContext:ro,useCallback:da,useContext:ro,useEffect:aa,useImperativeHandle:la,useLayoutEffect:sa,useMemo:pa,useReducer:Jo,useRef:na,useState:function(){return Jo(Yo)},useDebugValue:ca,useResponder:Fo,useDeferredValue:function(e,t){var n=Jo(Yo),r=n[0],i=n[1];return aa((function(){var n=Wo.suspense;Wo.suspense=void 0===t?null:t;try{i(e)}finally{Wo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Jo(Yo),n=t[0];return t=t[1],[da(ha.bind(null,t,e),[t,e]),n]}},ya={readContext:ro,useCallback:da,useContext:ro,useEffect:aa,useImperativeHandle:la,useLayoutEffect:sa,useMemo:pa,useReducer:Zo,useRef:na,useState:function(){return Zo(Yo)},useDebugValue:ca,useResponder:Fo,useDeferredValue:function(e,t){var n=Zo(Yo),r=n[0],i=n[1];return aa((function(){var n=Wo.suspense;Wo.suspense=void 0===t?null:t;try{i(e)}finally{Wo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Zo(Yo),n=t[0];return t=t[1],[da(ha.bind(null,t,e),[t,e]),n]}},ba=null,wa=null,xa=!1;function ka(e,t){var n=Cu(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ca(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Sa(e){if(xa){var t=wa;if(t){var n=t;if(!Ca(e,t)){if(!(t=wn(n.nextSibling))||!Ca(e,t))return e.effectTag=-1025&e.effectTag|2,xa=!1,void(ba=e);ka(ba,n)}ba=e,wa=wn(t.firstChild)}else e.effectTag=-1025&e.effectTag|2,xa=!1,ba=e}}function Ea(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ba=e}function Ta(e){if(e!==ba)return!1;if(!xa)return Ea(e),xa=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!vn(t,e.memoizedProps))for(t=wa;t;)ka(e,t),t=wn(t.nextSibling);if(Ea(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){wa=wn(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}wa=null}}else wa=ba?wn(e.stateNode.nextSibling):null;return!0}function Oa(){wa=ba=null,xa=!1}var Ma=Q.ReactCurrentOwner,Pa=!1;function ja(e,t,n,r){t.child=null===e?Eo(t,null,n,r):So(t,e.child,n,r)}function Aa(e,t,n,r,i){n=n.render;var o=t.ref;return no(t,i),r=Go(e,t,n,r,o,i),null===e||Pa?(t.effectTag|=1,ja(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Ga(e,t,i))}function Na(e,t,n,r,i,o){if(null===e){var a=n.type;return"function"!=typeof a||Su(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Tu(n.type,null,r,null,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Da(e,t,a,r,i,o))}return a=e.child,i<o&&(i=a.memoizedProps,(n=null!==(n=n.compare)?n:zr)(i,r)&&e.ref===t.ref)?Ga(e,t,o):(t.effectTag|=1,(e=Eu(a,r)).ref=t.ref,e.return=t,t.child=e)}function Da(e,t,n,r,i,o){return null!==e&&zr(e.memoizedProps,r)&&e.ref===t.ref&&(Pa=!1,i<o)?(t.expirationTime=e.expirationTime,Ga(e,t,o)):Ra(e,t,n,r,o)}function La(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Ra(e,t,n,r,i){var o=_i(n)?pi:fi.current;return o=hi(t,o),no(t,i),n=Go(e,t,n,r,o,i),null===e||Pa?(t.effectTag|=1,ja(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Ga(e,t,i))}function Ia(e,t,n,r,i){if(_i(n)){var o=!0;yi(t)}else o=!1;if(no(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),vo(t,n,r),bo(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,l=n.contextType;"object"==typeof l&&null!==l?l=ro(l):l=hi(t,l=_i(n)?pi:fi.current);var c=n.getDerivedStateFromProps,f="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;f||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||u!==l)&&yo(t,a,r,l),io=!1;var d=t.memoizedState;a.state=d,co(t,r,a,i),u=t.memoizedState,s!==r||d!==u||di.current||io?("function"==typeof c&&(_o(t,n,c,r),u=t.memoizedState),(s=io||go(t,n,s,r,d,u,l))?(f||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.effectTag|=4)):("function"==typeof a.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=l,r=s):("function"==typeof a.componentDidMount&&(t.effectTag|=4),r=!1)}else a=t.stateNode,ao(e,t),s=t.memoizedProps,a.props=t.type===t.elementType?s:Gi(t.type,s),u=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=ro(l):l=hi(t,l=_i(n)?pi:fi.current),(f="function"==typeof(c=n.getDerivedStateFromProps)||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||u!==l)&&yo(t,a,r,l),io=!1,u=t.memoizedState,a.state=u,co(t,r,a,i),d=t.memoizedState,s!==r||u!==d||di.current||io?("function"==typeof c&&(_o(t,n,c,r),d=t.memoizedState),(c=io||go(t,n,s,r,u,d,l))?(f||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,d,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,d,l)),"function"==typeof a.componentDidUpdate&&(t.effectTag|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=l,r=c):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),r=!1);return Fa(e,t,n,r,o,i)}function Fa(e,t,n,r,i,o){La(e,t);var a=0!=(64&t.effectTag);if(!r&&!a)return i&&bi(t,n,!1),Ga(e,t,o);r=t.stateNode,Ma.current=t;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&a?(t.child=So(t,e.child,null,o),t.child=So(t,null,s,o)):ja(e,t,s,o),t.memoizedState=r.state,i&&bi(t,n,!0),t.child}function za(e){var t=e.stateNode;t.pendingContext?gi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&gi(0,t.context,!1),Ao(e,t.containerInfo)}var Wa,Ba,Va,Ua={dehydrated:null,retryTime:0};function Ha(e,t,n){var r,i=t.mode,o=t.pendingProps,a=Ro.current,s=!1;if((r=0!=(64&t.effectTag))||(r=0!=(2&a)&&(null===e||null!==e.memoizedState)),r?(s=!0,t.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(a|=1),li(Ro,1&a),null===e){if(void 0!==o.fallback&&Sa(t),s){if(s=o.fallback,(o=Ou(null,i,0,null)).return=t,0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Ou(s,i,n,null)).return=t,o.sibling=n,t.memoizedState=Ua,t.child=o,n}return i=o.children,t.memoizedState=null,t.child=Eo(t,null,i,n)}if(null!==e.memoizedState){if(i=(e=e.child).sibling,s){if(o=o.fallback,(n=Eu(e,e.pendingProps)).return=t,0==(2&t.mode)&&(s=null!==t.memoizedState?t.child.child:t.child)!==e.child)for(n.child=s;null!==s;)s.return=n,s=s.sibling;return(i=Eu(i,o)).return=t,n.sibling=i,n.childExpirationTime=0,t.memoizedState=Ua,t.child=n,i}return n=So(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,s){if(s=o.fallback,(o=Ou(null,i,0,null)).return=t,o.child=e,null!==e&&(e.return=o),0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Ou(s,i,n,null)).return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=Ua,t.child=o,n}return t.memoizedState=null,t.child=So(t,e,o.children,n)}function $a(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),to(e.return,t)}function qa(e,t,n,r,i,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=i,a.lastEffect=o)}function Ka(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ja(e,t,r.children,n),0!=(2&(r=Ro.current)))r=1&r|2,t.effectTag|=64;else{if(null!==e&&0!=(64&e.effectTag))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$a(e,n);else if(19===e.tag)$a(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(li(Ro,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Io(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qa(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Io(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qa(t,!0,n,null,o,t.lastEffect);break;case"together":qa(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ga(e,t,n){null!==e&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(0!==r&&au(r),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Eu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Eu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xa(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qa(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return _i(t.type)&&mi(),null;case 3:return No(),ui(di),ui(fi),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||!Ta(t)||(t.effectTag|=4),null;case 5:Lo(t),n=jo(Po.current);var o=t.type;if(null!==e&&null!=t.stateNode)Ba(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(null===t.stateNode)throw Error(a(166));return null}if(e=jo(Oo.current),Ta(t)){r=t.stateNode,o=t.type;var s=t.memoizedProps;switch(r[Cn]=t,r[Sn]=s,o){case"iframe":case"object":case"embed":Kt("load",r);break;case"video":case"audio":for(e=0;e<Qe.length;e++)Kt(Qe[e],r);break;case"source":Kt("error",r);break;case"img":case"image":case"link":Kt("error",r),Kt("load",r);break;case"form":Kt("reset",r),Kt("submit",r);break;case"details":Kt("toggle",r);break;case"input":ke(r,s),Kt("invalid",r),un(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Kt("invalid",r),un(n,"onChange");break;case"textarea":je(r,s),Kt("invalid",r),un(n,"onChange")}for(var u in on(o,s),e=null,s)if(s.hasOwnProperty(u)){var l=s[u];"children"===u?"string"==typeof l?r.textContent!==l&&(e=["children",l]):"number"==typeof l&&r.textContent!==""+l&&(e=["children",""+l]):C.hasOwnProperty(u)&&null!=l&&un(n,u)}switch(o){case"input":be(r),Ee(r,s,!0);break;case"textarea":be(r),Ne(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=ln)}n=e,t.updateQueue=n,null!==n&&(t.effectTag|=4)}else{switch(u=9===n.nodeType?n:n.ownerDocument,e===sn&&(e=Re(o)),e===sn?"script"===o?((e=u.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=u.createElement(o,{is:r.is}):(e=u.createElement(o),"select"===o&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,o),e[Cn]=t,e[Sn]=r,Wa(e,t),t.stateNode=e,u=an(o,r),o){case"iframe":case"object":case"embed":Kt("load",e),l=r;break;case"video":case"audio":for(l=0;l<Qe.length;l++)Kt(Qe[l],e);l=r;break;case"source":Kt("error",e),l=r;break;case"img":case"image":case"link":Kt("error",e),Kt("load",e),l=r;break;case"form":Kt("reset",e),Kt("submit",e),l=r;break;case"details":Kt("toggle",e),l=r;break;case"input":ke(e,r),l=xe(e,r),Kt("invalid",e),un(n,"onChange");break;case"option":l=Oe(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=i({},r,{value:void 0}),Kt("invalid",e),un(n,"onChange");break;case"textarea":je(e,r),l=Pe(e,r),Kt("invalid",e),un(n,"onChange");break;default:l=r}on(o,l);var c=l;for(s in c)if(c.hasOwnProperty(s)){var f=c[s];"style"===s?nn(e,f):"dangerouslySetInnerHTML"===s?null!=(f=f?f.__html:void 0)&&ze(e,f):"children"===s?"string"==typeof f?("textarea"!==o||""!==f)&&We(e,f):"number"==typeof f&&We(e,""+f):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(C.hasOwnProperty(s)?null!=f&&un(n,s):null!=f&&Y(e,s,f,u))}switch(o){case"input":be(e),Ee(e,r,!1);break;case"textarea":be(e),Ne(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ve(r.value));break;case"select":e.multiple=!!r.multiple,null!=(n=r.value)?Me(e,!!r.multiple,n,!1):null!=r.defaultValue&&Me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=ln)}gn(o,r)&&(t.effectTag|=4)}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)Va(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(a(166));n=jo(Po.current),jo(Oo.current),Ta(t)?(n=t.stateNode,r=t.memoizedProps,n[Cn]=t,n.nodeValue!==r&&(t.effectTag|=4)):((n=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Cn]=t,t.stateNode=n)}return null;case 13:return ui(Ro),r=t.memoizedState,0!=(64&t.effectTag)?(t.expirationTime=n,t):(n=null!==r,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Ta(t):(r=null!==(o=e.memoizedState),n||null===o||null!==(o=e.child.sibling)&&(null!==(s=t.firstEffect)?(t.firstEffect=o,o.nextEffect=s):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8)),n&&!r&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&Ro.current)?Ts===bs&&(Ts=ws):(Ts!==bs&&Ts!==ws||(Ts=xs),0!==As&&null!==Cs&&(Nu(Cs,Es),Du(Cs,As)))),(n||r)&&(t.effectTag|=4),null);case 4:return No(),null;case 10:return eo(t),null;case 17:return _i(t.type)&&mi(),null;case 19:if(ui(Ro),null===(r=t.memoizedState))return null;if(o=0!=(64&t.effectTag),null===(s=r.rendering)){if(o)Xa(r,!1);else if(Ts!==bs||null!==e&&0!=(64&e.effectTag))for(s=t.child;null!==s;){if(null!==(e=Io(s))){for(t.effectTag|=64,Xa(r,!1),null!==(o=e.updateQueue)&&(t.updateQueue=o,t.effectTag|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;null!==r;)s=n,(o=r).effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,null===(e=o.alternate)?(o.childExpirationTime=0,o.expirationTime=s,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=null===s?null:{expirationTime:s.expirationTime,firstContext:s.firstContext,responders:s.responders}),r=r.sibling;return li(Ro,1&Ro.current|2),t.child}s=s.sibling}}else{if(!o)if(null!==(e=Io(s))){if(t.effectTag|=64,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.effectTag|=4),Xa(r,!0),null===r.tail&&"hidden"===r.tailMode&&!s.alternate)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*zi()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,Xa(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=r.last)?n.sibling=s:t.child=s,r.last=s)}return null!==r.tail?(0===r.tailExpiration&&(r.tailExpiration=zi()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=zi(),n.sibling=null,t=Ro.current,li(Ro,o?1&t|2:1&t),n):null}throw Error(a(156,t.tag))}function Ya(e){switch(e.tag){case 1:_i(e.type)&&mi();var t=e.effectTag;return 4096&t?(e.effectTag=-4097&t|64,e):null;case 3:if(No(),ui(di),ui(fi),0!=(64&(t=e.effectTag)))throw Error(a(285));return e.effectTag=-4097&t|64,e;case 5:return Lo(e),null;case 13:return ui(Ro),4096&(t=e.effectTag)?(e.effectTag=-4097&t|64,e):null;case 19:return ui(Ro),null;case 4:return No(),null;case 10:return eo(e),null;default:return null}}function Ja(e,t){return{value:e,source:t,stack:ge(t)}}Wa=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ba=function(e,t,n,r,o){var a=e.memoizedProps;if(a!==r){var s,u,l=t.stateNode;switch(jo(Oo.current),e=null,n){case"input":a=xe(l,a),r=xe(l,r),e=[];break;case"option":a=Oe(l,a),r=Oe(l,r),e=[];break;case"select":a=i({},a,{value:void 0}),r=i({},r,{value:void 0}),e=[];break;case"textarea":a=Pe(l,a),r=Pe(l,r),e=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(l.onclick=ln)}for(s in on(n,r),n=null,a)if(!r.hasOwnProperty(s)&&a.hasOwnProperty(s)&&null!=a[s])if("style"===s)for(u in l=a[s])l.hasOwnProperty(u)&&(n||(n={}),n[u]="");else"dangerouslySetInnerHTML"!==s&&"children"!==s&&"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(C.hasOwnProperty(s)?e||(e=[]):(e=e||[]).push(s,null));for(s in r){var c=r[s];if(l=null!=a?a[s]:void 0,r.hasOwnProperty(s)&&c!==l&&(null!=c||null!=l))if("style"===s)if(l){for(u in l)!l.hasOwnProperty(u)||c&&c.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in c)c.hasOwnProperty(u)&&l[u]!==c[u]&&(n||(n={}),n[u]=c[u])}else n||(e||(e=[]),e.push(s,n)),n=c;else"dangerouslySetInnerHTML"===s?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(e=e||[]).push(s,c)):"children"===s?l===c||"string"!=typeof c&&"number"!=typeof c||(e=e||[]).push(s,""+c):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&(C.hasOwnProperty(s)?(null!=c&&un(o,s),e||l===c||(e=[])):(e=e||[]).push(s,c))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}},Va=function(e,t,n,r){n!==r&&(t.effectTag|=4)};var Za="function"==typeof WeakSet?WeakSet:Set;function es(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=ge(n)),null!==n&&me(n.type),t=t.value,null!==e&&1===e.tag&&me(e.type);try{console.error(t)}catch(e){setTimeout((function(){throw e}))}}function ts(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){vu(e,t)}else t.current=null}function ns(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Gi(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(a(163))}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}n=n.next}while(n!==t)}}function is(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:return void is(3,n);case 1:if(e=n.stateNode,4&n.effectTag)if(null===t)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Gi(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}return void(null!==(t=n.updateQueue)&&fo(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}fo(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.effectTag&&gn(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Rt(n)))));case 19:case 17:case 20:case 21:return}throw Error(a(163))}function as(e,t,n){switch("function"==typeof xu&&xu(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Vi(97<n?97:n,(function(){var e=r;do{var n=e.destroy;if(void 0!==n){var i=t;try{n()}catch(e){vu(i,e)}}e=e.next}while(e!==r)}))}break;case 1:ts(t),"function"==typeof(n=t.stateNode).componentWillUnmount&&function(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){vu(e,t)}}(t,n);break;case 5:ts(t);break;case 4:cs(e,t,n)}}function ss(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,null!==t&&ss(t)}function us(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:{for(var t=e.return;null!==t;){if(us(t)){var n=t;break e}t=t.return}throw Error(a(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(a(161))}16&n.effectTag&&(We(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||us(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}r?function e(t,n,r){var i=t.tag,o=5===i||6===i;if(o)t=o?t.stateNode:t.stateNode.instance,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!==(r=r._reactRootContainer)&&void 0!==r||null!==n.onclick||(n.onclick=ln));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t):function e(t,n,r){var i=t.tag,o=5===i||6===i;if(o)t=o?t.stateNode:t.stateNode.instance,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t)}function cs(e,t,n){for(var r,i,o=t,s=!1;;){if(!s){s=o.return;e:for(;;){if(null===s)throw Error(a(160));switch(r=s.stateNode,s.tag){case 5:i=!1;break e;case 3:case 4:r=r.containerInfo,i=!0;break e}s=s.return}s=!0}if(5===o.tag||6===o.tag){e:for(var u=e,l=o,c=n,f=l;;)if(as(u,f,c),null!==f.child&&4!==f.tag)f.child.return=f,f=f.child;else{if(f===l)break e;for(;null===f.sibling;){if(null===f.return||f.return===l)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i?(u=r,l=o.stateNode,8===u.nodeType?u.parentNode.removeChild(l):u.removeChild(l)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,i=!0,o.child.return=o,o=o.child;continue}}else if(as(e,o,n),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(s=!1)}o.sibling.return=o.return,o=o.sibling}}function fs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:return void rs(3,t);case 1:return;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,i=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[Sn]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Ce(n,r),an(e,i),t=an(e,r),i=0;i<o.length;i+=2){var s=o[i],u=o[i+1];"style"===s?nn(n,u):"dangerouslySetInnerHTML"===s?ze(n,u):"children"===s?We(n,u):Y(n,s,u,t)}switch(e){case"input":Se(n,r);break;case"textarea":Ae(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?Me(n,!!r.multiple,e,!1):t!==!!r.multiple&&(null!=r.defaultValue?Me(n,!!r.multiple,r.defaultValue,!0):Me(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(a(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((t=t.stateNode).hydrate&&(t.hydrate=!1,Rt(t.containerInfo)));case 12:return;case 13:if(n=t,null===t.memoizedState?r=!1:(r=!0,n=t.child,Ds=zi()),null!==n)e:for(e=n;;){if(5===e.tag)o=e.stateNode,r?"function"==typeof(o=o.style).setProperty?o.setProperty("display","none","important"):o.display="none":(o=e.stateNode,i=null!=(i=e.memoizedProps.style)&&i.hasOwnProperty("display")?i.display:null,o.style.display=tn("display",i));else if(6===e.tag)e.stateNode.nodeValue=r?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(o=e.child.sibling).return=e,e=o;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===n)break;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}return void ds(t);case 19:return void ds(t);case 17:return}throw Error(a(163))}function ds(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Za),t.forEach((function(t){var r=bu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}var ps="function"==typeof WeakMap?WeakMap:Map;function hs(e,t,n){(n=so(n,null)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rs||(Rs=!0,Is=r),es(e,t)},n}function _s(e,t,n){(n=so(n,null)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return es(e,t),r(i)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Fs?Fs=new Set([this]):Fs.add(this),es(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}var ms,gs=Math.ceil,vs=Q.ReactCurrentDispatcher,ys=Q.ReactCurrentOwner,bs=0,ws=3,xs=4,ks=0,Cs=null,Ss=null,Es=0,Ts=bs,Os=null,Ms=1073741823,Ps=1073741823,js=null,As=0,Ns=!1,Ds=0,Ls=null,Rs=!1,Is=null,Fs=null,zs=!1,Ws=null,Bs=90,Vs=null,Us=0,Hs=null,$s=0;function qs(){return 0!=(48&ks)?1073741821-(zi()/10|0):0!==$s?$s:$s=1073741821-(zi()/10|0)}function Ks(e,t,n){if(0==(2&(t=t.mode)))return 1073741823;var r=Wi();if(0==(4&t))return 99===r?1073741823:1073741822;if(0!=(16&ks))return Es;if(null!==n)e=Ki(e,0|n.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Ki(e,150,100);break;case 97:case 96:e=Ki(e,5e3,250);break;case 95:e=2;break;default:throw Error(a(326))}return null!==Cs&&e===Es&&--e,e}function Gs(e,t){if(50<Us)throw Us=0,Hs=null,Error(a(185));if(null!==(e=Xs(e,t))){var n=Wi();1073741823===t?0!=(8&ks)&&0==(48&ks)?Zs(e):(Ys(e),0===ks&&$i()):Ys(e),0==(4&ks)||98!==n&&99!==n||(null===Vs?Vs=new Map([[e,t]]):(void 0===(n=Vs.get(e))||n>t)&&Vs.set(e,t))}}function Xs(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(null===r&&3===e.tag)i=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){i=r.stateNode;break}r=r.return}return null!==i&&(Cs===i&&(au(t),Ts===xs&&Nu(i,Es)),Du(i,t)),i}function Qs(e){var t=e.lastExpiredTime;if(0!==t)return t;if(!Au(e,t=e.firstPendingTime))return t;var n=e.lastPingedTime;return 2>=(e=n>(e=e.nextKnownPendingLevel)?n:e)&&t!==e?0:e}function Ys(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Hi(Zs.bind(null,e));else{var t=Qs(e),n=e.callbackNode;if(0===t)null!==n&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=qs();if(1073741823===t?r=99:1===t||2===t?r=95:r=0>=(r=10*(1073741821-t)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==n){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==Ai&&ki(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=1073741823===t?Hi(Zs.bind(null,e)):Ui(r,Js.bind(null,e),{timeout:10*(1073741821-t)-zi()}),e.callbackNode=t}}}function Js(e,t){if($s=0,t)return Lu(e,t=qs()),Ys(e),null;var n=Qs(e);if(0!==n){if(t=e.callbackNode,0!=(48&ks))throw Error(a(327));if(_u(),e===Cs&&n===Es||nu(e,n),null!==Ss){var r=ks;ks|=16;for(var i=iu();;)try{uu();break}catch(t){ru(e,t)}if(Zi(),ks=r,vs.current=i,1===Ts)throw t=Os,nu(e,n),Nu(e,n),Ys(e),t;if(null===Ss)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Ts,Cs=null,r){case bs:case 1:throw Error(a(345));case 2:Lu(e,2<n?2:n);break;case ws:if(Nu(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=fu(i)),1073741823===Ms&&10<(i=Ds+500-zi())){if(Ns){var o=e.lastPingedTime;if(0===o||o>=n){e.lastPingedTime=n,nu(e,n);break}}if(0!==(o=Qs(e))&&o!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=yn(du.bind(null,e),i);break}du(e);break;case xs:if(Nu(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=fu(i)),Ns&&(0===(i=e.lastPingedTime)||i>=n)){e.lastPingedTime=n,nu(e,n);break}if(0!==(i=Qs(e))&&i!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}if(1073741823!==Ps?r=10*(1073741821-Ps)-zi():1073741823===Ms?r=0:(r=10*(1073741821-Ms)-5e3,0>(r=(i=zi())-r)&&(r=0),(n=10*(1073741821-n)-i)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gs(r/1960))-r)&&(r=n)),10<r){e.timeoutHandle=yn(du.bind(null,e),r);break}du(e);break;case 5:if(1073741823!==Ms&&null!==js){o=Ms;var s=js;if(0>=(r=0|s.busyMinDurationMs)?r=0:(i=0|s.busyDelayMs,r=(o=zi()-(10*(1073741821-o)-(0|s.timeoutMs||5e3)))<=i?0:i+r-o),10<r){Nu(e,n),e.timeoutHandle=yn(du.bind(null,e),r);break}}du(e);break;default:throw Error(a(329))}if(Ys(e),e.callbackNode===t)return Js.bind(null,e)}}return null}function Zs(e){var t=e.lastExpiredTime;if(t=0!==t?t:1073741823,0!=(48&ks))throw Error(a(327));if(_u(),e===Cs&&t===Es||nu(e,t),null!==Ss){var n=ks;ks|=16;for(var r=iu();;)try{su();break}catch(t){ru(e,t)}if(Zi(),ks=n,vs.current=r,1===Ts)throw n=Os,nu(e,t),Nu(e,t),Ys(e),n;if(null!==Ss)throw Error(a(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Cs=null,du(e),Ys(e)}return null}function eu(e,t){var n=ks;ks|=1;try{return e(t)}finally{0===(ks=n)&&$i()}}function tu(e,t){var n=ks;ks&=-2,ks|=8;try{return e(t)}finally{0===(ks=n)&&$i()}}function nu(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,bn(n)),null!==Ss)for(n=Ss.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&mi();break;case 3:No(),ui(di),ui(fi);break;case 5:Lo(r);break;case 4:No();break;case 13:case 19:ui(Ro);break;case 10:eo(r)}n=n.return}Cs=e,Ss=Eu(e.current,null),Es=t,Ts=bs,Os=null,Ps=Ms=1073741823,js=null,As=0,Ns=!1}function ru(e,t){for(;;){try{if(Zi(),zo.current=ma,$o)for(var n=Vo.memoizedState;null!==n;){var r=n.queue;null!==r&&(r.pending=null),n=n.next}if(Bo=0,Ho=Uo=Vo=null,$o=!1,null===Ss||null===Ss.return)return Ts=1,Os=t,Ss=null;e:{var i=e,o=Ss.return,a=Ss,s=t;if(t=Es,a.effectTag|=2048,a.firstEffect=a.lastEffect=null,null!==s&&"object"==typeof s&&"function"==typeof s.then){var u=s;if(0==(2&a.mode)){var l=a.alternate;l?(a.updateQueue=l.updateQueue,a.memoizedState=l.memoizedState,a.expirationTime=l.expirationTime):(a.updateQueue=null,a.memoizedState=null)}var c=0!=(1&Ro.current),f=o;do{var d;if(d=13===f.tag){var p=f.memoizedState;if(null!==p)d=null!==p.dehydrated;else{var h=f.memoizedProps;d=void 0!==h.fallback&&(!0!==h.unstable_avoidThisFallback||!c)}}if(d){var _=f.updateQueue;if(null===_){var m=new Set;m.add(u),f.updateQueue=m}else _.add(u);if(0==(2&f.mode)){if(f.effectTag|=64,a.effectTag&=-2981,1===a.tag)if(null===a.alternate)a.tag=17;else{var g=so(1073741823,null);g.tag=2,uo(a,g)}a.expirationTime=1073741823;break e}s=void 0,a=t;var v=i.pingCache;if(null===v?(v=i.pingCache=new ps,s=new Set,v.set(u,s)):void 0===(s=v.get(u))&&(s=new Set,v.set(u,s)),!s.has(a)){s.add(a);var y=yu.bind(null,i,u,a);u.then(y,y)}f.effectTag|=4096,f.expirationTime=t;break e}f=f.return}while(null!==f);s=Error((me(a.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ge(a))}5!==Ts&&(Ts=2),s=Ja(s,a),f=o;do{switch(f.tag){case 3:u=s,f.effectTag|=4096,f.expirationTime=t,lo(f,hs(f,u,t));break e;case 1:u=s;var b=f.type,w=f.stateNode;if(0==(64&f.effectTag)&&("function"==typeof b.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===Fs||!Fs.has(w)))){f.effectTag|=4096,f.expirationTime=t,lo(f,_s(f,u,t));break e}}f=f.return}while(null!==f)}Ss=cu(Ss)}catch(e){t=e;continue}break}}function iu(){var e=vs.current;return vs.current=ma,null===e?ma:e}function ou(e,t){e<Ms&&2<e&&(Ms=e),null!==t&&e<Ps&&2<e&&(Ps=e,js=t)}function au(e){e>As&&(As=e)}function su(){for(;null!==Ss;)Ss=lu(Ss)}function uu(){for(;null!==Ss&&!Ni();)Ss=lu(Ss)}function lu(e){var t=ms(e.alternate,e,Es);return e.memoizedProps=e.pendingProps,null===t&&(t=cu(e)),ys.current=null,t}function cu(e){Ss=e;do{var t=Ss.alternate;if(e=Ss.return,0==(2048&Ss.effectTag)){if(t=Qa(t,Ss,Es),1===Es||1!==Ss.childExpirationTime){for(var n=0,r=Ss.child;null!==r;){var i=r.expirationTime,o=r.childExpirationTime;i>n&&(n=i),o>n&&(n=o),r=r.sibling}Ss.childExpirationTime=n}if(null!==t)return t;null!==e&&0==(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=Ss.firstEffect),null!==Ss.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=Ss.firstEffect),e.lastEffect=Ss.lastEffect),1<Ss.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=Ss:e.firstEffect=Ss,e.lastEffect=Ss))}else{if(null!==(t=Ya(Ss)))return t.effectTag&=2047,t;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(t=Ss.sibling))return t;Ss=e}while(null!==Ss);return Ts===bs&&(Ts=5),null}function fu(e){var t=e.expirationTime;return t>(e=e.childExpirationTime)?t:e}function du(e){var t=Wi();return Vi(99,pu.bind(null,e,t)),null}function pu(e,t){do{_u()}while(null!==Ws);if(0!=(48&ks))throw Error(a(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(null===n)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=fu(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Cs&&(Ss=Cs=null,Es=0),1<n.effectTag?null!==n.lastEffect?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,null!==i){var o=ks;ks|=32,ys.current=null,_n=qt;var s=pn();if(hn(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{var l=(u=(u=s.ownerDocument)&&u.defaultView||window).getSelection&&u.getSelection();if(l&&0!==l.rangeCount){u=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{u.nodeType,f.nodeType}catch(e){u=null;break e}var d=0,p=-1,h=-1,_=0,m=0,g=s,v=null;t:for(;;){for(var y;g!==u||0!==c&&3!==g.nodeType||(p=d+c),g!==f||0!==l&&3!==g.nodeType||(h=d+l),3===g.nodeType&&(d+=g.nodeValue.length),null!==(y=g.firstChild);)v=g,g=y;for(;;){if(g===s)break t;if(v===u&&++_===c&&(p=d),v===f&&++m===l&&(h=d),null!==(y=g.nextSibling))break;v=(g=v).parentNode}g=y}u=-1===p||-1===h?null:{start:p,end:h}}else u=null}u=u||{start:0,end:0}}else u=null;mn={activeElementDetached:null,focusedElem:s,selectionRange:u},qt=!1,Ls=i;do{try{hu()}catch(e){if(null===Ls)throw Error(a(330));vu(Ls,e),Ls=Ls.nextEffect}}while(null!==Ls);Ls=i;do{try{for(s=e,u=t;null!==Ls;){var b=Ls.effectTag;if(16&b&&We(Ls.stateNode,""),128&b){var w=Ls.alternate;if(null!==w){var x=w.ref;null!==x&&("function"==typeof x?x(null):x.current=null)}}switch(1038&b){case 2:ls(Ls),Ls.effectTag&=-3;break;case 6:ls(Ls),Ls.effectTag&=-3,fs(Ls.alternate,Ls);break;case 1024:Ls.effectTag&=-1025;break;case 1028:Ls.effectTag&=-1025,fs(Ls.alternate,Ls);break;case 4:fs(Ls.alternate,Ls);break;case 8:cs(s,c=Ls,u),ss(c)}Ls=Ls.nextEffect}}catch(e){if(null===Ls)throw Error(a(330));vu(Ls,e),Ls=Ls.nextEffect}}while(null!==Ls);if(x=mn,w=pn(),b=x.focusedElem,u=x.selectionRange,w!==b&&b&&b.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(b.ownerDocument.documentElement,b)){null!==u&&hn(b)&&(w=u.start,void 0===(x=u.end)&&(x=w),"selectionStart"in b?(b.selectionStart=w,b.selectionEnd=Math.min(x,b.value.length)):(x=(w=b.ownerDocument||document)&&w.defaultView||window).getSelection&&(x=x.getSelection(),c=b.textContent.length,s=Math.min(u.start,c),u=void 0===u.end?s:Math.min(u.end,c),!x.extend&&s>u&&(c=u,u=s,s=c),c=dn(b,s),f=dn(b,u),c&&f&&(1!==x.rangeCount||x.anchorNode!==c.node||x.anchorOffset!==c.offset||x.focusNode!==f.node||x.focusOffset!==f.offset)&&((w=w.createRange()).setStart(c.node,c.offset),x.removeAllRanges(),s>u?(x.addRange(w),x.extend(f.node,f.offset)):(w.setEnd(f.node,f.offset),x.addRange(w))))),w=[];for(x=b;x=x.parentNode;)1===x.nodeType&&w.push({element:x,left:x.scrollLeft,top:x.scrollTop});for("function"==typeof b.focus&&b.focus(),b=0;b<w.length;b++)(x=w[b]).element.scrollLeft=x.left,x.element.scrollTop=x.top}qt=!!_n,mn=_n=null,e.current=n,Ls=i;do{try{for(b=e;null!==Ls;){var k=Ls.effectTag;if(36&k&&os(b,Ls.alternate,Ls),128&k){w=void 0;var C=Ls.ref;if(null!==C){var S=Ls.stateNode;switch(Ls.tag){case 5:w=S;break;default:w=S}"function"==typeof C?C(w):C.current=w}}Ls=Ls.nextEffect}}catch(e){if(null===Ls)throw Error(a(330));vu(Ls,e),Ls=Ls.nextEffect}}while(null!==Ls);Ls=null,Di(),ks=o}else e.current=n;if(zs)zs=!1,Ws=e,Bs=t;else for(Ls=i;null!==Ls;)t=Ls.nextEffect,Ls.nextEffect=null,Ls=t;if(0===(t=e.firstPendingTime)&&(Fs=null),1073741823===t?e===Hs?Us++:(Us=0,Hs=e):Us=0,"function"==typeof wu&&wu(n.stateNode,r),Ys(e),Rs)throw Rs=!1,e=Is,Is=null,e;return 0!=(8&ks)||$i(),null}function hu(){for(;null!==Ls;){var e=Ls.effectTag;0!=(256&e)&&ns(Ls.alternate,Ls),0==(512&e)||zs||(zs=!0,Ui(97,(function(){return _u(),null}))),Ls=Ls.nextEffect}}function _u(){if(90!==Bs){var e=97<Bs?97:Bs;return Bs=90,Vi(e,mu)}}function mu(){if(null===Ws)return!1;var e=Ws;if(Ws=null,0!=(48&ks))throw Error(a(331));var t=ks;for(ks|=32,e=e.current.firstEffect;null!==e;){try{var n=e;if(0!=(512&n.effectTag))switch(n.tag){case 0:case 11:case 15:case 22:rs(5,n),is(5,n)}}catch(t){if(null===e)throw Error(a(330));vu(e,t)}n=e.nextEffect,e.nextEffect=null,e=n}return ks=t,$i(),!0}function gu(e,t,n){uo(e,t=hs(e,t=Ja(n,t),1073741823)),null!==(e=Xs(e,1073741823))&&Ys(e)}function vu(e,t){if(3===e.tag)gu(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){gu(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Fs||!Fs.has(r))){uo(n,e=_s(n,e=Ja(t,e),1073741823)),null!==(n=Xs(n,1073741823))&&Ys(n);break}}n=n.return}}function yu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),Cs===e&&Es===n?Ts===xs||Ts===ws&&1073741823===Ms&&zi()-Ds<500?nu(e,Es):Ns=!0:Au(e,n)&&(0!==(t=e.lastPingedTime)&&t<n||(e.lastPingedTime=n,Ys(e)))}function bu(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(t=Ks(t=qs(),e,null)),null!==(e=Xs(e,t))&&Ys(e)}ms=function(e,t,n){var r=t.expirationTime;if(null!==e){var i=t.pendingProps;if(e.memoizedProps!==i||di.current)Pa=!0;else{if(r<n){switch(Pa=!1,t.tag){case 3:za(t),Oa();break;case 5:if(Do(t),4&t.mode&&1!==n&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:_i(t.type)&&yi(t);break;case 4:Ao(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,li(Xi,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?Ha(e,t,n):(li(Ro,1&Ro.current),null!==(t=Ga(e,t,n))?t.sibling:null);li(Ro,1&Ro.current);break;case 19:if(r=t.childExpirationTime>=n,0!=(64&e.effectTag)){if(r)return Ka(e,t,n);t.effectTag|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null),li(Ro,Ro.current),!r)return null}return Ga(e,t,n)}Pa=!1}}else Pa=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=hi(t,fi.current),no(t,n),i=Go(null,t,r,e,i,n),t.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,_i(r)){var o=!0;yi(t)}else o=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,oo(t);var s=r.getDerivedStateFromProps;"function"==typeof s&&_o(t,r,s,e),i.updater=mo,t.stateNode=i,i._reactInternalFiber=t,bo(t,r,e,n),t=Fa(null,t,r,!0,o,n)}else t.tag=0,ja(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(i),1!==i._status)throw i._result;switch(i=i._result,t.type=i,o=t.tag=function(e){if("function"==typeof e)return Su(e)?1:0;if(null!=e){if((e=e.$$typeof)===ue)return 11;if(e===fe)return 14}return 2}(i),e=Gi(i,e),o){case 0:t=Ra(null,t,i,e,n);break e;case 1:t=Ia(null,t,i,e,n);break e;case 11:t=Aa(null,t,i,e,n);break e;case 14:t=Na(null,t,i,Gi(i.type,e),r,n);break e}throw Error(a(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ra(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ia(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 3:if(za(t),r=t.updateQueue,null===e||null===r)throw Error(a(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,ao(e,t),co(t,r,null,n),(r=t.memoizedState.element)===i)Oa(),t=Ga(e,t,n);else{if((i=t.stateNode.hydrate)&&(wa=wn(t.stateNode.containerInfo.firstChild),ba=t,i=xa=!0),i)for(n=Eo(t,null,r,n),t.child=n;n;)n.effectTag=-3&n.effectTag|1024,n=n.sibling;else ja(e,t,r,n),Oa();t=t.child}return t;case 5:return Do(t),null===e&&Sa(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,vn(r,i)?s=null:null!==o&&vn(r,o)&&(t.effectTag|=16),La(e,t),4&t.mode&&1!==n&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(ja(e,t,s,n),t=t.child),t;case 6:return null===e&&Sa(t),null;case 13:return Ha(e,t,n);case 4:return Ao(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=So(t,null,r,n):ja(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Aa(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 7:return ja(e,t,t.pendingProps,n),t.child;case 8:case 12:return ja(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var u=t.type._context;if(li(Xi,u._currentValue),u._currentValue=o,null!==s)if(u=s.value,0===(o=Ir(u,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(u,o):1073741823))){if(s.children===i.children&&!di.current){t=Ga(e,t,n);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var l=u.dependencies;if(null!==l){s=u.child;for(var c=l.firstContext;null!==c;){if(c.context===r&&0!=(c.observedBits&o)){1===u.tag&&((c=so(n,null)).tag=2,uo(u,c)),u.expirationTime<n&&(u.expirationTime=n),null!==(c=u.alternate)&&c.expirationTime<n&&(c.expirationTime=n),to(u.return,n),l.expirationTime<n&&(l.expirationTime=n);break}c=c.next}}else s=10===u.tag&&u.type===t.type?null:u.child;if(null!==s)s.return=u;else for(s=u;null!==s;){if(s===t){s=null;break}if(null!==(u=s.sibling)){u.return=s.return,s=u;break}s=s.return}u=s}ja(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(o=t.pendingProps).children,no(t,n),r=r(i=ro(i,o.unstable_observedBits)),t.effectTag|=1,ja(e,t,r,n),t.child;case 14:return o=Gi(i=t.type,t.pendingProps),Na(e,t,i,o=Gi(i.type,o),r,n);case 15:return Da(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gi(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,_i(r)?(e=!0,yi(t)):e=!1,no(t,n),vo(t,r,i),bo(t,r,i,n),Fa(null,t,r,!0,e,n);case 19:return Ka(e,t,n)}throw Error(a(156,t.tag))};var wu=null,xu=null;function ku(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Cu(e,t,n,r){return new ku(e,t,n,r)}function Su(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Eu(e,t){var n=e.alternate;return null===n?((n=Cu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tu(e,t,n,r,i,o){var s=2;if(r=e,"function"==typeof e)Su(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case ne:return Ou(n.children,i,o,t);case se:s=8,i|=7;break;case re:s=8,i|=1;break;case ie:return(e=Cu(12,n,t,8|i)).elementType=ie,e.type=ie,e.expirationTime=o,e;case le:return(e=Cu(13,n,t,i)).type=le,e.elementType=le,e.expirationTime=o,e;case ce:return(e=Cu(19,n,t,i)).elementType=ce,e.expirationTime=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case oe:s=10;break e;case ae:s=9;break e;case ue:s=11;break e;case fe:s=14;break e;case de:s=16,r=null;break e;case pe:s=22;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Cu(s,n,t,i)).elementType=e,t.type=r,t.expirationTime=o,t}function Ou(e,t,n,r){return(e=Cu(7,e,r,t)).expirationTime=n,e}function Mu(e,t,n){return(e=Cu(6,e,null,t)).expirationTime=n,e}function Pu(e,t,n){return(t=Cu(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ju(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Au(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==n&&n>=t&&e<=t}function Nu(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||0===n)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function Du(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;0!==n&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Lu(e,t){var n=e.lastExpiredTime;(0===n||n>t)&&(e.lastExpiredTime=t)}function Ru(e,t,n,r){var i=t.current,o=qs(),s=po.suspense;o=Ks(o,i,s);e:if(n){t:{if(Ze(n=n._reactInternalFiber)!==n||1!==n.tag)throw Error(a(170));var u=n;do{switch(u.tag){case 3:u=u.stateNode.context;break t;case 1:if(_i(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break t}}u=u.return}while(null!==u);throw Error(a(171))}if(1===n.tag){var l=n.type;if(_i(l)){n=vi(n,l,u);break e}}n=u}else n=ci;return null===t.context?t.context=n:t.pendingContext=n,(t=so(o,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),uo(i,t),Gs(i,o),o}function Iu(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Fu(e,t){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<t&&(e.retryTime=t)}function zu(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function Wu(e,t,n){var r=new ju(e,t,n=null!=n&&!0===n.hydrate),i=Cu(3,null,null,2===t?7:1===t?3:0);r.current=i,i.stateNode=r,oo(i),e[En]=r.current,n&&0!==t&&function(e,t){var n=Je(t);Et.forEach((function(e){ht(e,t,n)})),Tt.forEach((function(e){ht(e,t,n)}))}(0,9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function Bu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Vu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o._internalRoot;if("function"==typeof i){var s=i;i=function(){var e=Iu(a);s.call(e)}}Ru(t,a,e,i)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Wu(e,0,t?{hydrate:!0}:void 0)}(n,r),a=o._internalRoot,"function"==typeof i){var u=i;i=function(){var e=Iu(a);u.call(e)}}tu((function(){Ru(t,a,e,i)}))}return Iu(a)}function Uu(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:te,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Hu(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Bu(t))throw Error(a(200));return Uu(e,t,null,n)}Wu.prototype.render=function(e){Ru(e,this._internalRoot,null,null)},Wu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Ru(null,e,null,(function(){t[En]=null}))},_t=function(e){if(13===e.tag){var t=Ki(qs(),150,100);Gs(e,t),zu(e,t)}},mt=function(e){13===e.tag&&(Gs(e,3),zu(e,3))},gt=function(e){if(13===e.tag){var t=qs();Gs(e,t=Ks(t,e,null)),zu(e,t)}},O=function(e,t,n){switch(t){case"input":if(Se(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pn(r);if(!i)throw Error(a(90));we(r),Se(r,i)}}}break;case"textarea":Ae(e,n);break;case"select":null!=(t=n.value)&&Me(e,!!n.multiple,t,!1)}},D=eu,L=function(e,t,n,r,i){var o=ks;ks|=4;try{return Vi(98,e.bind(null,t,n,r,i))}finally{0===(ks=o)&&$i()}},R=function(){0==(49&ks)&&(function(){if(null!==Vs){var e=Vs;Vs=null,e.forEach((function(e,t){Lu(t,e),Ys(t)})),$i()}}(),_u())},I=function(e,t){var n=ks;ks|=2;try{return e(t)}finally{0===(ks=n)&&$i()}};var $u,qu,Ku={Events:[On,Mn,Pn,E,k,In,function(e){it(e,Rn)},A,N,Yt,st,_u,{current:!1}]};qu=($u={findFiberByHostInstance:Tn,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);wu=function(e){try{t.onCommitFiberRoot(n,e,void 0,64==(64&e.current.effectTag))}catch(e){}},xu=function(e){try{t.onCommitFiberUnmount(n,e)}catch(e){}}}catch(e){}}(i({},$u,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=nt(e))?null:e.stateNode},findFiberByHostInstance:function(e){return qu?qu(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ku,t.createPortal=Hu,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(void 0===t){if("function"==typeof e.render)throw Error(a(188));throw Error(a(268,Object.keys(e)))}return e=null===(e=nt(t))?null:e.stateNode},t.flushSync=function(e,t){if(0!=(48&ks))throw Error(a(187));var n=ks;ks|=1;try{return Vi(99,e.bind(null,t))}finally{ks=n,$i()}},t.hydrate=function(e,t,n){if(!Bu(t))throw Error(a(200));return Vu(null,e,t,!0,n)},t.render=function(e,t,n){if(!Bu(t))throw Error(a(200));return Vu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Bu(e))throw Error(a(40));return!!e._reactRootContainer&&(tu((function(){Vu(null,null,e,!1,(function(){e._reactRootContainer=null,e[En]=null}))})),!0)},t.unstable_batchedUpdates=eu,t.unstable_createPortal=function(e,t){return Hu(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bu(n))throw Error(a(200));if(null==e||void 0===e._reactInternalFiber)throw Error(a(38));return Vu(e,t,n,!1,r)},t.version="16.14.0"},function(e,t,n){"use strict";e.exports=n(109)},function(e,t,n){"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,i,o,a,s;if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,l=null,c=function(){if(null!==u)try{var e=t.unstable_now();u(!0,e),u=null}catch(e){throw setTimeout(c,0),e}},f=Date.now();t.unstable_now=function(){return Date.now()-f},r=function(e){null!==u?setTimeout(r,0,e):(u=e,setTimeout(c,0))},i=function(e,t){l=setTimeout(e,t)},o=function(){clearTimeout(l)},a=function(){return!1},s=t.unstable_forceFrameRate=function(){}}else{var d=window.performance,p=window.Date,h=window.setTimeout,_=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof d&&"function"==typeof d.now)t.unstable_now=function(){return d.now()};else{var g=p.now();t.unstable_now=function(){return p.now()-g}}var v=!1,y=null,b=-1,w=5,x=0;a=function(){return t.unstable_now()>=x},s=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):w=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,C=k.port2;k.port1.onmessage=function(){if(null!==y){var e=t.unstable_now();x=e+w;try{y(!0,e)?C.postMessage(null):(v=!1,y=null)}catch(e){throw C.postMessage(null),e}}else v=!1},r=function(e){y=e,v||(v=!0,C.postMessage(null))},i=function(e,n){b=h((function(){e(t.unstable_now())}),n)},o=function(){_(b),b=-1}}function S(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<O(i,t)))break e;e[r]=t,e[n]=i,n=r}}function E(e){return void 0===(e=e[0])?null:e}function T(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var o=2*(r+1)-1,a=e[o],s=o+1,u=e[s];if(void 0!==a&&0>O(a,n))void 0!==u&&0>O(u,a)?(e[r]=u,e[s]=n,r=s):(e[r]=a,e[o]=n,r=o);else{if(!(void 0!==u&&0>O(u,n)))break e;e[r]=u,e[s]=n,r=s}}}return t}return null}function O(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var M=[],P=[],j=1,A=null,N=3,D=!1,L=!1,R=!1;function I(e){for(var t=E(P);null!==t;){if(null===t.callback)T(P);else{if(!(t.startTime<=e))break;T(P),t.sortIndex=t.expirationTime,S(M,t)}t=E(P)}}function F(e){if(R=!1,I(e),!L)if(null!==E(M))L=!0,r(z);else{var t=E(P);null!==t&&i(F,t.startTime-e)}}function z(e,n){L=!1,R&&(R=!1,o()),D=!0;var r=N;try{for(I(n),A=E(M);null!==A&&(!(A.expirationTime>n)||e&&!a());){var s=A.callback;if(null!==s){A.callback=null,N=A.priorityLevel;var u=s(A.expirationTime<=n);n=t.unstable_now(),"function"==typeof u?A.callback=u:A===E(M)&&T(M),I(n)}else T(M);A=E(M)}if(null!==A)var l=!0;else{var c=E(P);null!==c&&i(F,c.startTime-n),l=!1}return l}finally{A=null,N=r,D=!1}}function W(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var B=s;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){L||D||(L=!0,r(z))},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return E(M)},t.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var n=N;N=t;try{return e()}finally{N=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=B,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=N;N=e;try{return t()}finally{N=n}},t.unstable_scheduleCallback=function(e,n,a){var s=t.unstable_now();if("object"==typeof a&&null!==a){var u=a.delay;u="number"==typeof u&&0<u?s+u:s,a="number"==typeof a.timeout?a.timeout:W(e)}else a=W(e),u=s;return e={id:j++,callback:n,priorityLevel:e,startTime:u,expirationTime:a=u+a,sortIndex:-1},u>s?(e.sortIndex=u,S(P,e),null===E(M)&&e===E(P)&&(R?o():R=!0,i(F,u-s))):(e.sortIndex=a,S(M,e),L||D||(L=!0,r(z))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();I(e);var n=E(M);return n!==A&&null!==A&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<A.expirationTime||a()},t.unstable_wrapCallback=function(e){var t=N;return function(){var n=N;N=t;try{return e.apply(this,arguments)}finally{N=n}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createShell=t.Shell=void 0;class r{constructor(e){this.chapter=e}runTests(){const e={};for(let t of this.chapter.sections)t.isScored()&&(e[t.id]={grade:t.score.grade,maximum:t.score.maximum});return{chapter:this.chapter.title,results:e}}}t.Shell=r,t.createShell=function(e){return new r(e)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=r(n(0)),o=r(n(112)),a=n(116),s=n(32),u=r(n(2)),l=n(18),c=n(20),f=u.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    background: black;
    color: white;
    text-align: center;
    text-transform: uppercase;
    height: 5em;
    margin: 0px;
    z-index: 1;
    user-select: none;
    cursor: pointer;
`,d=u.default.span`
    font-size: 5vmin;
`,p=u.default.span`
    font-size: 2vmin;
`,h=u.default.div`
    position: fixed;
    top: 5em;
    left: 0px;
    bottom: 0px;
    width: 100%;
`,_=u.default.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1em;
    outline: none;
`,m=u.default.div`
    position: relative;
    height: calc(100% - 50px);
    overflow-y: scroll;
`,g=u.default.div`
    padding: 5px;
`,v=u.default(l.ScoreViewer)`
    height: 100%;
    width: 100%;
    font-size: 150%;
`;class y extends i.default.Component{constructor(e){if(super(e),0===e.chapter.sections.length)throw new Error("No sections defined");this.state={selectedSectionIndex:0,sidebarOpen:!0}}render(){const e=this;return i.default.createElement(i.default.Fragment,null,i.default.createElement(f,null,i.default.createElement(d,null,this.props.chapter.title),i.default.createElement(p,null,this.props.version)),i.default.createElement(h,{onKeyDown:t=>function(t){" "===t.key&&t.ctrlKey&&e.setState({sidebarOpen:!e.state.sidebarOpen})}(t),tabIndex:0},i.default.createElement(o.default,{sidebar:function(){const t=a.selectScoredSections(e.props.chapter.sections).map(e=>e.score),n=c.Score.summate(...t);return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,null,i.default.createElement(s.SectionOverview,{sections:e.props.chapter.sections,onSectionSelected:(t,n)=>e.onSectionSelected(t,n),selectedSectionIndex:e.state.selectedSectionIndex})),i.default.createElement(g,null,i.default.createElement(v,{score:n})))}(),docked:this.state.sidebarOpen},i.default.createElement(_,{key:"section-"+this.state.selectedSectionIndex,tabIndex:0},this.props.chapter.sections[this.state.selectedSectionIndex].content))))}onSectionSelected(e,t){this.setState({selectedSectionIndex:e})}}t.App=y},function(e,t,n){"use strict";n.r(t);var r=n(26),i=n.n(r),o=n(100),a=n.n(o),s=n(7),u=n.n(s),l=n(0),c=n.n(l),f=(n(39),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),d={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},p={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},h={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},_={zIndex:1,position:"fixed",top:0,bottom:0},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},n.overlayClicked=n.overlayClicked.bind(u()(u()(n))),n.onTouchStart=n.onTouchStart.bind(u()(u()(n))),n.onTouchMove=n.onTouchMove.bind(u()(u()(n))),n.onTouchEnd=n.onTouchEnd.bind(u()(u()(n))),n.onScroll=n.onScroll.bind(u()(u()(n))),n.saveSidebarRef=n.saveSidebarRef.bind(u()(u()(n))),n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"==typeof window&&"ontouchstart"in window&&!e}),this.saveSidebarWidth()},n.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},n.onTouchStart=function(e){if(!this.isTouching()){var t=e.targetTouches[0];this.setState({touchIdentifier:t.identifier,touchStartX:t.clientX,touchCurrentX:t.clientX})}},n.onTouchMove=function(e){if(this.isTouching())for(var t=0;t<e.targetTouches.length;t++)if(e.targetTouches[t].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:e.targetTouches[t].clientX});break}},n.onTouchEnd=function(){if(this.isTouching()){var e=this.touchSidebarWidth();(this.props.open&&e<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&e>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},n.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},n.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},n.isTouching=function(){return null!==this.state.touchIdentifier},n.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},n.saveSidebarWidth=function(){var e=this.sidebar.offsetWidth;e!==this.state.sidebarWidth&&this.setState({sidebarWidth:e})},n.saveSidebarRef=function(e){this.sidebar=e},n.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},n.render=function(){var e,t=i()({},d,this.props.styles.sidebar),n=i()({},p,this.props.styles.content),r=i()({},h,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,a=this.isTouching(),s={className:this.props.rootClassName,style:i()({},f,this.props.styles.root),role:"navigation",id:this.props.rootId},u=this.props.shadow&&(a||this.props.open||this.props.docked);if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",u&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",u&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),a){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),r.opacity=l,r.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?n.right=this.state.sidebarWidth+"px":n.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",r.opacity=1,r.visibility="visible");if(!a&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",n.transition="none",r.transition="none"),o)if(this.props.open)s.onTouchStart=this.onTouchStart,s.onTouchMove=this.onTouchMove,s.onTouchEnd=this.onTouchEnd,s.onTouchCancel=this.onTouchEnd,s.onScroll=this.onScroll;else{var m=i()({},_,this.props.styles.dragHandle);m.width=this.props.touchHandleWidth,this.props.pullRight?m.right=0:m.left=0,e=c.a.createElement("div",{style:m,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return c.a.createElement("div",s,c.a.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),c.a.createElement("div",{className:this.props.overlayClassName,style:r,onClick:this.overlayClicked,id:this.props.overlayId}),c.a.createElement("div",{className:this.props.contentClassName,style:n,id:this.props.contentId},e,this.props.children))},t}(l.Component);m.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},t.default=m},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";var r=n(115);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectScoredSections=void 0,t.selectScoredSections=function(e){const t=[];for(let n of e)n.isScored()&&t.push(n);return t}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SectionOverview=void 0;const i=r(n(0)),o=n(118);class a extends i.default.Component{constructor(e){super(e)}render(){const e=this;return i.default.createElement(o.TableOfContents,{entries:this.props.sections,onEntrySelected:function(t,n){e.props.onSectionSelected(n,t)},selectedIndex:this.props.selectedSectionIndex,renderEntry:e=>e.tocEntry})}}t.SectionOverview=a},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TableOfContents=void 0;const i=r(n(0)),o=r(n(2)),a=o.default.div`
    display: flex;
    flex-direction: column;
    justify-contents: flex-start;
    align-items: stretch;
`,s=o.default.div`
    background: ${e=>e.isSelected?"#77F":"white"};
    padding: 2px 4px;
`;class u extends i.default.Component{constructor(e){super(e)}render(){const e=this;return i.default.createElement(a,{className:this.props.className},this.props.entries.map((function(t,n){return i.default.createElement(s,{key:n,onClick:function(){e.props.onEntrySelected(t,n)},isSelected:e.props.selectedIndex===n},e.props.renderEntry(t))})))}}t.TableOfContents=u},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,l=[],c=!1,f=-1;function d(){c&&u&&(c=!1,u.length?l=u.concat(l):f=-1,l.length&&p())}function p(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function _(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=_,i.addListener=_,i.once=_,i.off=_,i.removeListener=_,i.removeAllListeners=_,i.emit=_,i.prependListener=_,i.prependOnceListener=_,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";
/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,_=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,y=r?Symbol.for("react.responder"):60118;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case f:case d:case a:case u:case s:case h:return e;default:switch(e=e&&e.$$typeof){case c:case p:case l:return e;default:return t}}case g:case m:case o:return t}}}function w(e){return b(e)===d}t.typeOf=b,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=l,t.Element=i,t.ForwardRef=p,t.Fragment=a,t.Lazy=g,t.Memo=m,t.Portal=o,t.Profiler=u,t.StrictMode=s,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===u||e===s||e===h||e===_||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===v||e.$$typeof===y)},t.isAsyncMode=function(e){return w(e)||b(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return b(e)===c},t.isContextProvider=function(e){return b(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return b(e)===p},t.isFragment=function(e){return b(e)===a},t.isLazy=function(e){return b(e)===g},t.isMemo=function(e){return b(e)===m},t.isPortal=function(e){return b(e)===o},t.isProfiler=function(e){return b(e)===u},t.isStrictMode=function(e){return b(e)===s},t.isSuspense=function(e){return b(e)===h}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ExerciseEntry=void 0;const i=r(n(0)),o=r(n(2)),a=n(122),s=n(123),u=o.default.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: black;
    padding: 2px;
    margin: 2px;
`,l=o.default.div`
    display: flex;
    flex-orientation: column;
    align-items: center;
    justify-content: center;
    min-width: 10em;
    text-align: center;
    font-variant: small-caps;
    color: white;
    padding: 2px 0.5em;
    cursor: pointer;
    user-select: none;
    margin: 1px;
    background: black;

    &:hover {
        background: #444;
    }
`;class c extends i.default.Component{constructor(e){super(e)}render(){const e=this;return i.default.createElement(u,{className:this.props.className},i.default.createElement(a.DifficultyViewer,{difficulty:e.props.difficulty}),i.default.createElement(l,null,e.props.caption),i.default.createElement(s.ScoreViewer,{score:e.props.score}))}}t.ExerciseEntry=c},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InvisibleDifficultyViewer=t.DifficultyViewer=void 0;const i=n(58),o=r(n(2));t.DifficultyViewer=o.default(i.DifficultyViewer)`
    width: 4em;
    background: black;
    color: white;
    margin: 1px;
`,t.InvisibleDifficultyViewer=o.default(t.DifficultyViewer)`
    visibility: hidden;
`},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InvisibleScoreViewer=t.ScoreViewer=void 0;const i=n(59),o=r(n(2));t.ScoreViewer=o.default(i.ScoreViewer)`
    width: 5em;
    margin: 1px;
`,t.InvisibleScoreViewer=o.default(t.ScoreViewer)`
    visibility: hidden;
`},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HintViewer=void 0;const i=r(n(0)),o=r(n(27));n(125);class a extends i.default.Component{constructor(e){super(e)}render(){return i.default.createElement("div",{className:"hint-viewer"},i.default.createElement(o.default,{trigger:i.default.createElement(i.default.Fragment,null,"hint"),transitionTime:100},this.props.children))}}t.HintViewer=a},function(e,t,n){var r=n(3),i=n(126);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".hint-viewer{width:75%;margin:1em auto;background:#CCF;box-shadow:5px 5px #DDF}.hint-viewer .Collapsible .Collapsible__trigger{display:block;background:#AAF;text-align:center;font-size:2em;padding:0.2em;font-variant:small-caps;font-weight:bold;user-select:none;cursor:pointer}.hint-viewer .Collapsible .Collapsible__trigger:hover{background:#88F}.hint-viewer .Collapsible .Collapsible__contentInner{padding:1em}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(66),i=n(1),o=n(19);t.default=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.map((function(e){return o.getPredicateForType(e)||e}));return r.default(n),i.setDescription((function(){var e=this,t=arguments;return n.every((function(n){return n.apply(e,t)}))}),"a value that satisfies all predicates: "+n.map(i.getDescription).join(", "))}},function(e,t,n){"use strict";e.exports=function(e,t,n){if("function"==typeof Array.prototype.find)return e.find(t,n);n=n||this;var r,i=e.length;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(r=0;r<i;r++)if(t.call(n,e[r],r,e))return e[r]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(66),i=n(1),o=n(19);t.default=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.map((function(e){return o.getPredicateForType(e)||e}));return r.default(n),i.setDescription((function(){var e=this,t=arguments;return n.some((function(n){return n.apply(e,t)}))}),"a value that satisfies any of predicates: "+n.map(i.getDescription).join(", "))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(131),i=n(1);function o(e){return!!r.asyncFunctionConstructor&&e instanceof r.asyncFunctionConstructor}t.default=o,i.setDescription(o,"an async function")},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var evalCode="(() => async function() {})().constructor";try{exports.asyncFunctionConstructor=eval(evalCode)}catch(e){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(1),o=/^\s*$/;function a(e){return r.default(e)&&(""===e||o.test(e))}t.default=a,i.setDescription(a,"a blank string")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(35),i=n(1);function o(e){return!r.default(e)}t.default=o,i.setDescription(o,"defined")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(72);t.default=function(e,t){var n=Array.prototype.slice.call(arguments);return n.splice(1,0,0),r.default.apply(this,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=n(8),o=n(71);function a(e){return o.default(e)?0===e.length:r.default(e)?0===Object.keys(e).length:i.default(e)?""==e:void 0===e}n(1).setDescription(a,"an empty value"),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),i=n(1);function o(e){return r.default(e)&&0===e.length}t.default=o,i.setDescription(o,"an empty array")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(5),o=n(1);t.default=function(e,t){if(!r.default(e))throw new TypeError("Suffix must be a string");if(""===e)throw new Error("Suffix cannot be empty");return i.default.call(this,arguments,o.setDescription((function(t){return r.default(t)&&t.indexOf(e)===t.length-e.length}),'a string that ends with "'+e+'"'))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(1);t.default=function(e,t){return r.default.call(this,arguments,i.setDescription((function(t){return e==t}),"equal to "+JSON.stringify(e)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28);function i(e){return!1===e||r.default(e)&&!1===e.valueOf()}n(1).setDescription(i,"false"),t.default=i},function(e,t,n){"use strict";function r(e){return!e}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"falsy"),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(142),i=n(1);function o(e){return!!r.generatorFunctionConstructor&&e instanceof r.generatorFunctionConstructor}t.default=o,i.setDescription(o,"a generator")},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var evalCode="(() => function*(){})().constructor";try{exports.generatorFunctionConstructor=eval(evalCode)}catch(e){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(1);t.default=function(e,t){return r.default.call(this,arguments,i.setDescription((function(t){return t>e}),"greater than "+e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(1);t.default=function(e,t){return r.default.call(this,arguments,i.setDescription((function(t){return t>=e}),"greater than or equal "+e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=n(8),o=n(5),a=n(1),s=n(34);t.default=function(e,t){if(!i.default(e)&&!s.default(e))throw new TypeError("Property name must be a string");return o.default.call(this,arguments,a.setDescription((function(t){return r.default(t)&&Object.prototype.hasOwnProperty.call(t,e)}),"an object with own "+(s.default(e)?e.toString():'"'+e+'"')+" property"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(10),o=n(5),a=n(1);t.default=function(e,t){if(!r.default(e))throw new TypeError("Property name must be a string");return o.default.call(this,arguments,a.setDescription((function(t){return i.default(t)&&e in t}),'an object with "'+e+'" property'))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),i=n(5),o=n(1);t.default=function(e,t){if(!r.default(e))throw new TypeError("Collection must be an array");if(0===e.length)throw new Error("Collection cannot be empty");return i.default.call(this,arguments,o.setDescription((function(t){return-1!==e.indexOf(t)}),"one of values: "+e.join(", ")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(14),o=n(1);t.default=function(e,t){if(!i.default(e))throw new TypeError("Class must be a function");return r.default.call(this,arguments,o.setDescription((function(t){return t instanceof e}),"an instance of "+e.name))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(150),i=n(151),o=n(1),a=r.default||i.default;o.setDescription(a,"an integer"),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Number.isInteger},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(41);t.default=function(e){return r.default(e)&&e>-9007199254740992&&e<9007199254740992&&Math.floor(e)===e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(1);t.default=function(e,t){return r.default.call(this,arguments,i.setDescription((function(t){return t<e}),"less than "+e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(1);t.default=function(e,t){return r.default.call(this,arguments,i.setDescription((function(t){return t<=e}),"less than or equal "+e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(40),o=n(1),a=n(8);t.default=function(e,t){if(!i.default(e))throw new TypeError("Regexp must be a RegExp object");return r.default.call(this,arguments,o.setDescription((function(t){return a.default(t)&&e.test(t)}),"a string that matches regexp "+e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);function i(e){return"undefined"!=typeof Map&&e instanceof Map}t.default=i,r.setDescription(i,"a Map")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15);function i(e){return r.default(e)&&isNaN(e)}n(1).setDescription(i,"not a number"),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15);function i(e){return r.default(e)&&e<0}n(1).setDescription(i,"a negative number"),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=n(5),o=n(1);t.default=function(e){if(!r.default(e))throw new TypeError("Predicate must be a function");return i.default.call(this,arguments,o.setDescription((function(){return!e.apply(this,arguments)}),"not "+o.getDescription(e)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(1),o=/\S/;function a(e){return r.default(e)&&o.test(e)}i.setDescription(a,"not blank string"),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),i=n(1);function o(e){return r.default(e)&&e.length>0}t.default=o,i.setDescription(o,"not an empty array")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length<2)throw new Error("At least 2 allowed values are required");return r.setDescription((function(t){return-1!==e.indexOf(t)}),"one of values: "+e.join(", "))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);function i(e){if(!r.default(e))return!1;var t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}n(1).setDescription(i,"a plain object"),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15);function i(e){return r.default(e)&&e>0}n(1).setDescription(i,"a positive number"),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(15),o=n(28),a=n(35),s=n(73),u=n(10);function l(e){return!u.default(e)&&(r.default(e)||i.default(e)||o.default(e)||a.default(e)||s.default(e))}n(1).setDescription(l,"a primitive"),t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(10),o=n(14),a=n(1),s=n(19),u=n(34),l=n(8);t.default=function(e,t,n){if(!u.default(e)&&!l.default(e))throw new TypeError("Property must be a string or a symbol");if(arguments.length<2)throw new Error("Too few arguments - 2 required");if(!o.default(t))throw new TypeError("Predicate is not a function");return t=s.getPredicateForType(t)||t,r.default.call(this,arguments,a.setDescription((function(n){var r=Array.prototype.slice.call(arguments);return r.splice(0,1,i.default(n)?n[e]:void 0),i.default(n)&&t.apply(this,r)}),"an object with property "+(u.default(e)?e.toString():'"'+e+'"')+" of type: "+a.getDescription(t)),2)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(5),o=n(1);t.default=function(e,t){if(!r.default(e))throw new TypeError("Prefix must be a string");if(""===e)throw new Error("Prefix cannot be empty");return i.default.call(this,arguments,o.setDescription((function(t){return r.default(t)&&0===t.indexOf(e)}),'a string that starts with "'+e+'"'))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);function i(e){return"undefined"!=typeof Set&&e instanceof Set}t.default=i,r.setDescription(i,"a Set")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(1);t.default=function(e,t){return r.default.call(this,arguments,i.setDescription((function(t){return e===t}),"strictly equal to "+JSON.stringify(e)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=n(5),o=n(74),a=n(14),s=n(1),u=n(19),l=o.default(a.default);t.default=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];if(!r.default(e))throw new TypeError("Structure must be an object");var a=Object.keys(e);if(0===a.length)throw new Error("Structure object cannot be empty. No enumerable properties found");if(!l(e))throw new TypeError("Structure object must consist of predicates");a.forEach((function(t){e[t]=u.getPredicateForType(e[t])||e[t]}));var c=a.reduce((function(t,n){return t.push('"'+n+'" - '+s.getDescription(e[n])),t}),[]).join(", ");return i.default.call(this,arguments,s.setDescription((function(t){var i=this;return r.default(t)&&a.every((function(r){return e[r].apply(i,[t[r]].concat(n))}))}),"an object with properties: "+c))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28);function i(e){return!0===e||r.default(e)&&1==e}n(1).setDescription(i,"true"),t.default=i},function(e,t,n){"use strict";function r(e){return!!e}Object.defineProperty(t,"__esModule",{value:!0}),n(1).setDescription(r,"truthy"),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);function i(e){return!!e&&"function"==typeof e.then}t.default=i,r.setDescription(i,"a thenable object")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(35),o=n(14),a=n(1),s=n(19);t.default=function(e,t){if(!o.default(e))throw new TypeError("Predicate must be a function");return e=s.getPredicateForType(e)||e,r.default.call(this,arguments,a.setDescription((function(t){return i.default(t)||e.apply(this,arguments)}),"undefined or "+a.getDescription(e)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(19);t.assert=function(e,t,n){return void 0===n&&(n=Error),e=i.getPredicateForType(e)||e,function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];if(!e.apply(void 0,[i].concat(o)))throw new n(t||"Assertion failed. Must be "+r.getDescription(e))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadImage=t.Bitmap=void 0;const r=n(76);class i{constructor(e,t,n){this.width=e,this.height=t,this.pixelData=n}writeTo(e){const t=this.width*this.height*4;for(let n=0;n!==t;++n)e[n]=this.pixelData[n]}toDataURL(){const e=document.createElement("canvas");e.width=this.width,e.height=this.height;const t=e.getContext("2d");if(t){const n=t.createImageData(this.width,this.height),r=n.data;return this.writeTo(r),t.putImageData(n,0,0),e.toDataURL()}throw new Error("Failing to get context")}toColor(){return this.toMatrix((e,t,n,i)=>r.color(e,t,n))}toGrayscale(){return this.toMatrix((e,t,n,r)=>(e+t+n)/255)}toBlackAndWhite(){return this.toMatrix((e,t,n,r)=>(e+t+n)/255<128)}toMatrix(e){const t=new Array(this.height);let n=0;for(let r=0;r!==this.height;++r){t[r]=new Array(this.width);for(let i=0;i!==this.width;++i){const o=this.pixelData[n++],a=this.pixelData[n++],s=this.pixelData[n++],u=this.pixelData[n++];t[r][i]=e(o,a,s,u)}}return t}static fromBlackAndWhite(e){return this.fromMatrix(e,e=>e?r.color(255,255,255):r.color(0,0,0))}static fromGrayscale(e){return this.fromMatrix(e,e=>r.color(e,e,e))}static fromColors(e){return this.fromMatrix(e,e=>e)}static fromMatrix(e,t){const n=e[0].length,r=e.length,o=new Uint8ClampedArray(n*r*4);let a=0;for(let i=0;i!==r;++i)for(let r=0;r!==n;++r){const n=t(e[i][r]);o[a++]=n.r,o[a++]=n.g,o[a++]=n.b,o[a++]=255}return new i(n,r,o)}}t.Bitmap=i,t.loadImage=function(e){const t=new Image;return t.src=e,t.crossOrigin="Anonymous",new Promise((e,n)=>{t.onload=()=>{const r=document.createElement("canvas");r.width=t.width,r.height=t.height;const o=r.getContext("2d");if(o){o.drawImage(t,0,0);const n=o.getImageData(0,0,t.width,t.height),r=new i(n.width,n.height,n.data);e(r)}else n("Failed to get canvas context")}})}},function(e,t,n){var r=n(3),i=n(177);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".invalid{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;background:#FAA;border:1px solid red}.invalid .message{font-weight:bold;background:#F88}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MultiView=void 0;const s=a(n(0)),u=o(n(65));class l extends s.default.Component{constructor(e){super(e),this.state={selectedTabIndex:0}}render(){const e=this.props.children;return s.default.createElement("div",{className:"multiview",onClick:()=>this.onClick()},e[this.state.selectedTabIndex])}onClick(){const e=this.props.children,t=(this.state.selectedTabIndex+1)%e.length;this.setState({selectedTabIndex:t})}}t.MultiView=l,l.propTypes={dice:function(e,t,n){const r=e[t];return u.array(r)?void 0:new Error(t+" should be assigned an array of components")}}},function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.UnControlled=t.Controlled=void 0;var s,u=n(0),l="undefined"==typeof navigator||!0===e.PREVENT_CODEMIRROR_RENDER;l||(s=n(36));var c=function(){function e(){}return e.equals=function(e,t){var n=this,r=Object.keys,o=i(e),a=i(t);return e&&t&&"object"===o&&o===a?r(e).length===r(t).length&&r(e).every((function(r){return n.equals(e[r],t[r])})):e===t},e}(),f=function(){function e(e,t){this.editor=e,this.props=t}return e.prototype.delegateCursor=function(e,t,n){var r=this.editor.getDoc();n&&this.editor.focus(),t?r.setCursor(e):r.setCursor(e,null,{scroll:!1})},e.prototype.delegateScroll=function(e){this.editor.scrollTo(e.x,e.y)},e.prototype.delegateSelection=function(e,t){this.editor.getDoc().setSelections(e),t&&this.editor.focus()},e.prototype.apply=function(e){e&&e.selection&&e.selection.ranges&&this.delegateSelection(e.selection.ranges,e.selection.focus||!1),e&&e.cursor&&this.delegateCursor(e.cursor,e.autoScroll||!1,this.editor.getOption("autofocus")||!1),e&&e.scroll&&this.delegateScroll(e.scroll)},e.prototype.applyNext=function(e,t,n){e&&e.selection&&e.selection.ranges&&t&&t.selection&&t.selection.ranges&&!c.equals(e.selection.ranges,t.selection.ranges)&&this.delegateSelection(t.selection.ranges,t.selection.focus||!1),e&&e.cursor&&t&&t.cursor&&!c.equals(e.cursor,t.cursor)&&this.delegateCursor(n.cursor||t.cursor,t.autoScroll||!1,t.autoCursor||!1),e&&e.scroll&&t&&t.scroll&&!c.equals(e.scroll,t.scroll)&&this.delegateScroll(t.scroll)},e.prototype.applyUserDefined=function(e,t){t&&t.cursor&&this.delegateCursor(t.cursor,e.autoScroll||!1,this.editor.getOption("autofocus")||!1)},e.prototype.wire=function(e){var t=this;Object.keys(e||{}).filter((function(e){return/^on/.test(e)})).forEach((function(e){switch(e){case"onBlur":t.editor.on("blur",(function(e,n){t.props.onBlur(t.editor,n)}));break;case"onContextMenu":t.editor.on("contextmenu",(function(e,n){t.props.onContextMenu(t.editor,n)}));break;case"onCopy":t.editor.on("copy",(function(e,n){t.props.onCopy(t.editor,n)}));break;case"onCursor":t.editor.on("cursorActivity",(function(e){t.props.onCursor(t.editor,t.editor.getDoc().getCursor())}));break;case"onCursorActivity":t.editor.on("cursorActivity",(function(e){t.props.onCursorActivity(t.editor)}));break;case"onCut":t.editor.on("cut",(function(e,n){t.props.onCut(t.editor,n)}));break;case"onDblClick":t.editor.on("dblclick",(function(e,n){t.props.onDblClick(t.editor,n)}));break;case"onDragEnter":t.editor.on("dragenter",(function(e,n){t.props.onDragEnter(t.editor,n)}));break;case"onDragLeave":t.editor.on("dragleave",(function(e,n){t.props.onDragLeave(t.editor,n)}));break;case"onDragOver":t.editor.on("dragover",(function(e,n){t.props.onDragOver(t.editor,n)}));break;case"onDragStart":t.editor.on("dragstart",(function(e,n){t.props.onDragStart(t.editor,n)}));break;case"onDrop":t.editor.on("drop",(function(e,n){t.props.onDrop(t.editor,n)}));break;case"onFocus":t.editor.on("focus",(function(e,n){t.props.onFocus(t.editor,n)}));break;case"onGutterClick":t.editor.on("gutterClick",(function(e,n,r,i){t.props.onGutterClick(t.editor,n,r,i)}));break;case"onInputRead":t.editor.on("inputRead",(function(e,n){t.props.onInputRead(t.editor,n)}));break;case"onKeyDown":t.editor.on("keydown",(function(e,n){t.props.onKeyDown(t.editor,n)}));break;case"onKeyHandled":t.editor.on("keyHandled",(function(e,n,r){t.props.onKeyHandled(t.editor,n,r)}));break;case"onKeyPress":t.editor.on("keypress",(function(e,n){t.props.onKeyPress(t.editor,n)}));break;case"onKeyUp":t.editor.on("keyup",(function(e,n){t.props.onKeyUp(t.editor,n)}));break;case"onMouseDown":t.editor.on("mousedown",(function(e,n){t.props.onMouseDown(t.editor,n)}));break;case"onPaste":t.editor.on("paste",(function(e,n){t.props.onPaste(t.editor,n)}));break;case"onRenderLine":t.editor.on("renderLine",(function(e,n,r){t.props.onRenderLine(t.editor,n,r)}));break;case"onScroll":t.editor.on("scroll",(function(e){t.props.onScroll(t.editor,t.editor.getScrollInfo())}));break;case"onSelection":t.editor.on("beforeSelectionChange",(function(e,n){t.props.onSelection(t.editor,n)}));break;case"onTouchStart":t.editor.on("touchstart",(function(e,n){t.props.onTouchStart(t.editor,n)}));break;case"onUpdate":t.editor.on("update",(function(e){t.props.onUpdate(t.editor)}));break;case"onViewportChange":t.editor.on("viewportChange",(function(e,n,r){t.props.onViewportChange(t.editor,n,r)}))}}))},e}(),d=function(e){function t(t){var n=e.call(this,t)||this;return l||(n.applied=!1,n.appliedNext=!1,n.appliedUserDefined=!1,n.deferred=null,n.emulating=!1,n.hydrated=!1,n.initCb=function(){n.props.editorDidConfigure&&n.props.editorDidConfigure(n.editor)},n.mounted=!1),n}return a(t,e),t.prototype.hydrate=function(e){var t=this,n=e&&e.options?e.options:{},i=r({},s.defaults,this.editor.options,n);Object.keys(i).some((function(e){return t.editor.getOption(e)!==i[e]}))&&Object.keys(i).forEach((function(e){n.hasOwnProperty(e)&&t.editor.getOption(e)!==i[e]&&(t.editor.setOption(e,i[e]),t.mirror.setOption(e,i[e]))})),this.hydrated||(this.deferred?this.resolveChange(e.value):this.initChange(e.value||"")),this.hydrated=!0},t.prototype.initChange=function(e){this.emulating=!0;var t=this.editor.getDoc(),n=t.lastLine(),r=t.getLine(t.lastLine()).length;t.replaceRange(e||"",{line:0,ch:0},{line:n,ch:r}),this.mirror.setValue(e),t.clearHistory(),this.mirror.clearHistory(),this.emulating=!1},t.prototype.resolveChange=function(e){this.emulating=!0;var t=this.editor.getDoc();if("undo"===this.deferred.origin?t.undo():"redo"===this.deferred.origin?t.redo():t.replaceRange(this.deferred.text,this.deferred.from,this.deferred.to,this.deferred.origin),e&&e!==t.getValue()){var n=t.getCursor();t.setValue(e),t.setCursor(n)}this.emulating=!1,this.deferred=null},t.prototype.mirrorChange=function(e){var t=this.editor.getDoc();return"undo"===e.origin?(t.setHistory(this.mirror.getHistory()),this.mirror.undo()):"redo"===e.origin?(t.setHistory(this.mirror.getHistory()),this.mirror.redo()):this.mirror.replaceRange(e.text,e.from,e.to,e.origin),this.mirror.getValue()},t.prototype.componentDidMount=function(){var e=this;l||(this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&s.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=s(this.ref,this.props.options),this.shared=new f(this.editor,this.props),this.mirror=s((function(){}),this.props.options),this.editor.on("electricInput",(function(){e.mirror.setHistory(e.editor.getDoc().getHistory())})),this.editor.on("cursorActivity",(function(){e.mirror.setCursor(e.editor.getDoc().getCursor())})),this.editor.on("beforeChange",(function(t,n){if(!e.emulating){n.cancel(),e.deferred=n;var r=e.mirrorChange(e.deferred);e.props.onBeforeChange&&e.props.onBeforeChange(e.editor,e.deferred,r)}})),this.editor.on("change",(function(t,n){e.mounted&&e.props.onChange&&e.props.onChange(e.editor,n,e.editor.getValue())})),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getOption("autofocus")&&this.editor.focus(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},t.prototype.componentDidUpdate=function(e){if(!l){var t={cursor:null};this.props.value!==e.value&&(this.hydrated=!1),this.props.autoCursor||void 0===this.props.autoCursor||(t.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.appliedNext||(this.shared.applyNext(e,this.props,t),this.appliedNext=!0),this.shared.applyUserDefined(e,t),this.appliedUserDefined=!0}},t.prototype.componentWillUnmount=function(){l||this.props.editorWillUnmount&&this.props.editorWillUnmount(s)},t.prototype.shouldComponentUpdate=function(e,t){return!l},t.prototype.render=function(){var e=this;if(l)return null;var t=this.props.className?"react-codemirror2 "+this.props.className:"react-codemirror2";return u.createElement("div",{className:t,ref:function(t){return e.ref=t}})},t}(u.Component);t.Controlled=d;var p=function(e){function t(t){var n=e.call(this,t)||this;return l||(n.applied=!1,n.appliedUserDefined=!1,n.continueChange=!1,n.detached=!1,n.hydrated=!1,n.initCb=function(){n.props.editorDidConfigure&&n.props.editorDidConfigure(n.editor)},n.mounted=!1,n.onBeforeChangeCb=function(){n.continueChange=!0}),n}return a(t,e),t.prototype.hydrate=function(e){var t=this,n=e&&e.options?e.options:{},i=r({},s.defaults,this.editor.options,n);if(Object.keys(i).some((function(e){return t.editor.getOption(e)!==i[e]}))&&Object.keys(i).forEach((function(e){n.hasOwnProperty(e)&&t.editor.getOption(e)!==i[e]&&t.editor.setOption(e,i[e])})),!this.hydrated){var o=this.editor.getDoc(),a=o.lastLine(),u=o.getLine(o.lastLine()).length;o.replaceRange(e.value||"",{line:0,ch:0},{line:a,ch:u})}this.hydrated=!0},t.prototype.componentDidMount=function(){var e=this;l||(this.detached=!0===this.props.detach,this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&s.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=s(this.ref,this.props.options),this.shared=new f(this.editor,this.props),this.editor.on("beforeChange",(function(t,n){e.props.onBeforeChange&&e.props.onBeforeChange(e.editor,n,e.editor.getValue(),e.onBeforeChangeCb)})),this.editor.on("change",(function(t,n){e.mounted&&e.props.onChange&&(e.props.onBeforeChange?e.continueChange&&e.props.onChange(e.editor,n,e.editor.getValue()):e.props.onChange(e.editor,n,e.editor.getValue()))})),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getDoc().clearHistory(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},t.prototype.componentDidUpdate=function(e){if(this.detached&&!1===this.props.detach&&(this.detached=!1,e.editorDidAttach&&e.editorDidAttach(this.editor)),this.detached||!0!==this.props.detach||(this.detached=!0,e.editorDidDetach&&e.editorDidDetach(this.editor)),!l&&!this.detached){var t={cursor:null};this.props.value!==e.value&&(this.hydrated=!1,this.applied=!1,this.appliedUserDefined=!1),e.autoCursor||void 0===e.autoCursor||(t.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.applied||(this.shared.apply(e),this.applied=!0),this.appliedUserDefined||(this.shared.applyUserDefined(e,t),this.appliedUserDefined=!0)}},t.prototype.componentWillUnmount=function(){l||this.props.editorWillUnmount&&this.props.editorWillUnmount(s)},t.prototype.shouldComponentUpdate=function(e,t){var n=!0;return l&&(n=!1),this.detached&&e.detach&&(n=!1),n},t.prototype.render=function(){var e=this;if(l)return null;var t=this.props.className?"react-codemirror2 "+this.props.className:"react-codemirror2";return u.createElement("div",{className:t,ref:function(t){return e.ref=t}})},t}(u.Component);t.UnControlled=p}).call(this,n(44))},function(e,t,n){var r=n(3),i=n(181);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,"/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",""]),e.exports=t},function(e,t,n){!function(e){"use strict";e.defineMode("javascript",(function(t,n){var r,i,o=t.indentUnit,a=n.statementIndent,s=n.jsonld,u=n.json||s,l=n.typescript,c=n.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),i=e("keyword d"),o=e("operator"),a={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:n,do:n,try:n,finally:n,return:i,break:i,continue:i,new:e("new"),delete:r,void:r,throw:r,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:o,typeof:o,instanceof:o,true:a,false:a,null:a,undefined:a,NaN:a,Infinity:a,this:e("this"),class:e("class"),super:e("atom"),yield:r,export:e("export"),import:e("import"),extends:r,await:r}}(),d=/[+\-*&%=<>!?|~^@]/,p=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function h(e,t,n){return r=e,i=n,t}function _(e,t){var n,r=e.next();if('"'==r||"'"==r)return t.tokenize=(n=r,function(e,t){var r,i=!1;if(s&&"@"==e.peek()&&e.match(p))return t.tokenize=_,h("jsonld-keyword","meta");for(;null!=(r=e.next())&&(r!=n||i);)i=!i&&"\\"==r;return i||(t.tokenize=_),h("string","string")}),t.tokenize(e,t);if("."==r&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return h("number","number");if("."==r&&e.match(".."))return h("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return h(r);if("="==r&&e.eat(">"))return h("=>","operator");if("0"==r&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return h("number","number");if(/\d/.test(r))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),h("number","number");if("/"==r)return e.eat("*")?(t.tokenize=m,m(e,t)):e.eat("/")?(e.skipToEnd(),h("comment","comment")):Ke(e,t,1)?(function(e){for(var t,n=!1,r=!1;null!=(t=e.next());){if(!n){if("/"==t&&!r)return;"["==t?r=!0:r&&"]"==t&&(r=!1)}n=!n&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),h("regexp","string-2")):(e.eat("="),h("operator","operator",e.current()));if("`"==r)return t.tokenize=g,g(e,t);if("#"==r&&"!"==e.peek())return e.skipToEnd(),h("meta","meta");if("#"==r&&e.eatWhile(c))return h("variable","property");if("<"==r&&e.match("!--")||"-"==r&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),h("comment","comment");if(d.test(r))return">"==r&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=r&&"="!=r||e.eat("="):/[<>*+\-|&?]/.test(r)&&(e.eat(r),">"==r&&e.eat(r))),"?"==r&&e.eat(".")?h("."):h("operator","operator",e.current());if(c.test(r)){e.eatWhile(c);var i=e.current();if("."!=t.lastType){if(f.propertyIsEnumerable(i)){var o=f[i];return h(o.type,o.style,i)}if("async"==i&&e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return h("async","keyword",i)}return h("variable","variable",i)}}function m(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=_;break}r="*"==n}return h("comment","comment")}function g(e,t){for(var n,r=!1;null!=(n=e.next());){if(!r&&("`"==n||"$"==n&&e.eat("{"))){t.tokenize=_;break}r=!r&&"\\"==n}return h("quasi","string-2",e.current())}function v(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var n=e.string.indexOf("=>",e.start);if(!(n<0)){if(l){var r=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,n));r&&(n=r.index)}for(var i=0,o=!1,a=n-1;a>=0;--a){var s=e.string.charAt(a),u="([{}])".indexOf(s);if(u>=0&&u<3){if(!i){++a;break}if(0==--i){"("==s&&(o=!0);break}}else if(u>=3&&u<6)++i;else if(c.test(s))o=!0;else if(/["'\/`]/.test(s))for(;;--a){if(0==a)return;if(e.string.charAt(a-1)==s&&"\\"!=e.string.charAt(a-2)){a--;break}}else if(o&&!i){++a;break}}o&&!i&&(t.fatArrowAt=a)}}var y={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function b(e,t,n,r,i,o){this.indented=e,this.column=t,this.type=n,this.prev=i,this.info=o,null!=r&&(this.align=r)}function w(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0;for(var r=e.context;r;r=r.prev)for(n=r.vars;n;n=n.next)if(n.name==t)return!0}var x={state:null,column:null,marked:null,cc:null};function k(){for(var e=arguments.length-1;e>=0;e--)x.cc.push(arguments[e])}function C(){return k.apply(null,arguments),!0}function S(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0;return!1}function E(e){var t=x.state;if(x.marked="def",t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var r=function e(t,n){if(n){if(n.block){var r=e(t,n.prev);return r?r==n.prev?n:new O(r,n.vars,!0):null}return S(t,n.vars)?n:new O(n.prev,new M(t,n.vars),!1)}return null}(e,t.context);if(null!=r)return void(t.context=r)}else if(!S(e,t.localVars))return void(t.localVars=new M(e,t.localVars));n.globalVars&&!S(e,t.globalVars)&&(t.globalVars=new M(e,t.globalVars))}function T(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function O(e,t,n){this.prev=e,this.vars=t,this.block=n}function M(e,t){this.name=e,this.next=t}var P=new M("this",new M("arguments",null));function j(){x.state.context=new O(x.state.context,x.state.localVars,!1),x.state.localVars=P}function A(){x.state.context=new O(x.state.context,x.state.localVars,!0),x.state.localVars=null}function N(){x.state.localVars=x.state.context.vars,x.state.context=x.state.context.prev}function D(e,t){var n=function(){var n=x.state,r=n.indented;if("stat"==n.lexical.type)r=n.lexical.indented;else for(var i=n.lexical;i&&")"==i.type&&i.align;i=i.prev)r=i.indented;n.lexical=new b(r,x.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function L(){var e=x.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function R(e){return function t(n){return n==e?C():";"==e||"}"==n||")"==n||"]"==n?k():C(t)}}function I(e,t){return"var"==e?C(D("vardef",t),ve,R(";"),L):"keyword a"==e?C(D("form"),B,I,L):"keyword b"==e?C(D("form"),I,L):"keyword d"==e?x.stream.match(/^\s*$/,!1)?C():C(D("stat"),U,R(";"),L):"debugger"==e?C(R(";")):"{"==e?C(D("}"),A,oe,L,N):";"==e?C():"if"==e?("else"==x.state.lexical.info&&x.state.cc[x.state.cc.length-1]==L&&x.state.cc.pop()(),C(D("form"),B,I,L,Ce)):"function"==e?C(Oe):"for"==e?C(D("form"),Se,I,L):"class"==e||l&&"interface"==t?(x.marked="keyword",C(D("form","class"==e?e:t),Ne,L)):"variable"==e?l&&"declare"==t?(x.marked="keyword",C(I)):l&&("module"==t||"enum"==t||"type"==t)&&x.stream.match(/^\s*\w/,!1)?(x.marked="keyword","enum"==t?C($e):"type"==t?C(Pe,R("operator"),ce,R(";")):C(D("form"),ye,R("{"),D("}"),oe,L,L)):l&&"namespace"==t?(x.marked="keyword",C(D("form"),z,I,L)):l&&"abstract"==t?(x.marked="keyword",C(I)):C(D("stat"),J):"switch"==e?C(D("form"),B,R("{"),D("}","switch"),A,oe,L,L,N):"case"==e?C(z,R(":")):"default"==e?C(R(":")):"catch"==e?C(D("form"),j,F,I,L,N):"export"==e?C(D("stat"),Ie,L):"import"==e?C(D("stat"),ze,L):"async"==e?C(I):"@"==t?C(z,I):k(D("stat"),z,R(";"),L)}function F(e){if("("==e)return C(je,R(")"))}function z(e,t){return V(e,t,!1)}function W(e,t){return V(e,t,!0)}function B(e){return"("!=e?k():C(D(")"),U,R(")"),L)}function V(e,t,n){if(x.state.fatArrowAt==x.stream.start){var r=n?X:G;if("("==e)return C(j,D(")"),re(je,")"),L,R("=>"),r,N);if("variable"==e)return k(j,ye,R("=>"),r,N)}var i=n?$:H;return y.hasOwnProperty(e)?C(i):"function"==e?C(Oe,i):"class"==e||l&&"interface"==t?(x.marked="keyword",C(D("form"),Ae,L)):"keyword c"==e||"async"==e?C(n?W:z):"("==e?C(D(")"),U,R(")"),L,i):"operator"==e||"spread"==e?C(n?W:z):"["==e?C(D("]"),He,L,i):"{"==e?ie(ee,"}",null,i):"quasi"==e?k(q,i):"new"==e?C(function(e){return function(t){return"."==t?C(e?Y:Q):"variable"==t&&l?C(_e,e?$:H):k(e?W:z)}}(n)):"import"==e?C(z):C()}function U(e){return e.match(/[;\}\)\],]/)?k():k(z)}function H(e,t){return","==e?C(U):$(e,t,!1)}function $(e,t,n){var r=0==n?H:$,i=0==n?z:W;return"=>"==e?C(j,n?X:G,N):"operator"==e?/\+\+|--/.test(t)||l&&"!"==t?C(r):l&&"<"==t&&x.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?C(D(">"),re(ce,">"),L,r):"?"==t?C(z,R(":"),i):C(i):"quasi"==e?k(q,r):";"!=e?"("==e?ie(W,")","call",r):"."==e?C(Z,r):"["==e?C(D("]"),U,R("]"),L,r):l&&"as"==t?(x.marked="keyword",C(ce,r)):"regexp"==e?(x.state.lastType=x.marked="operator",x.stream.backUp(x.stream.pos-x.stream.start-1),C(i)):void 0:void 0}function q(e,t){return"quasi"!=e?k():"${"!=t.slice(t.length-2)?C(q):C(z,K)}function K(e){if("}"==e)return x.marked="string-2",x.state.tokenize=g,C(q)}function G(e){return v(x.stream,x.state),k("{"==e?I:z)}function X(e){return v(x.stream,x.state),k("{"==e?I:W)}function Q(e,t){if("target"==t)return x.marked="keyword",C(H)}function Y(e,t){if("target"==t)return x.marked="keyword",C($)}function J(e){return":"==e?C(L,I):k(H,R(";"),L)}function Z(e){if("variable"==e)return x.marked="property",C()}function ee(e,t){return"async"==e?(x.marked="property",C(ee)):"variable"==e||"keyword"==x.style?(x.marked="property","get"==t||"set"==t?C(te):(l&&x.state.fatArrowAt==x.stream.start&&(n=x.stream.match(/^\s*:\s*/,!1))&&(x.state.fatArrowAt=x.stream.pos+n[0].length),C(ne))):"number"==e||"string"==e?(x.marked=s?"property":x.style+" property",C(ne)):"jsonld-keyword"==e?C(ne):l&&T(t)?(x.marked="keyword",C(ee)):"["==e?C(z,ae,R("]"),ne):"spread"==e?C(W,ne):"*"==t?(x.marked="keyword",C(ee)):":"==e?k(ne):void 0;var n}function te(e){return"variable"!=e?k(ne):(x.marked="property",C(Oe))}function ne(e){return":"==e?C(W):"("==e?k(Oe):void 0}function re(e,t,n){function r(i,o){if(n?n.indexOf(i)>-1:","==i){var a=x.state.lexical;return"call"==a.info&&(a.pos=(a.pos||0)+1),C((function(n,r){return n==t||r==t?k():k(e)}),r)}return i==t||o==t?C():n&&n.indexOf(";")>-1?k(e):C(R(t))}return function(n,i){return n==t||i==t?C():k(e,r)}}function ie(e,t,n){for(var r=3;r<arguments.length;r++)x.cc.push(arguments[r]);return C(D(t,n),re(e,t),L)}function oe(e){return"}"==e?C():k(I,oe)}function ae(e,t){if(l){if(":"==e)return C(ce);if("?"==t)return C(ae)}}function se(e,t){if(l&&(":"==e||"in"==t))return C(ce)}function ue(e){if(l&&":"==e)return x.stream.match(/^\s*\w+\s+is\b/,!1)?C(z,le,ce):C(ce)}function le(e,t){if("is"==t)return x.marked="keyword",C()}function ce(e,t){return"keyof"==t||"typeof"==t||"infer"==t?(x.marked="keyword",C("typeof"==t?W:ce)):"variable"==e||"void"==t?(x.marked="type",C(he)):"|"==t||"&"==t?C(ce):"string"==e||"number"==e||"atom"==e?C(he):"["==e?C(D("]"),re(ce,"]",","),L,he):"{"==e?C(D("}"),re(de,"}",",;"),L,he):"("==e?C(re(pe,")"),fe,he):"<"==e?C(re(ce,">"),ce):void 0}function fe(e){if("=>"==e)return C(ce)}function de(e,t){return"variable"==e||"keyword"==x.style?(x.marked="property",C(de)):"?"==t||"number"==e||"string"==e?C(de):":"==e?C(ce):"["==e?C(R("variable"),se,R("]"),de):"("==e?k(Me,de):void 0}function pe(e,t){return"variable"==e&&x.stream.match(/^\s*[?:]/,!1)||"?"==t?C(pe):":"==e?C(ce):"spread"==e?C(pe):k(ce)}function he(e,t){return"<"==t?C(D(">"),re(ce,">"),L,he):"|"==t||"."==e||"&"==t?C(ce):"["==e?C(ce,R("]"),he):"extends"==t||"implements"==t?(x.marked="keyword",C(ce)):"?"==t?C(ce,R(":"),ce):void 0}function _e(e,t){if("<"==t)return C(D(">"),re(ce,">"),L,he)}function me(){return k(ce,ge)}function ge(e,t){if("="==t)return C(ce)}function ve(e,t){return"enum"==t?(x.marked="keyword",C($e)):k(ye,ae,xe,ke)}function ye(e,t){return l&&T(t)?(x.marked="keyword",C(ye)):"variable"==e?(E(t),C()):"spread"==e?C(ye):"["==e?ie(we,"]"):"{"==e?ie(be,"}"):void 0}function be(e,t){return"variable"!=e||x.stream.match(/^\s*:/,!1)?("variable"==e&&(x.marked="property"),"spread"==e?C(ye):"}"==e?k():"["==e?C(z,R("]"),R(":"),be):C(R(":"),ye,xe)):(E(t),C(xe))}function we(){return k(ye,xe)}function xe(e,t){if("="==t)return C(W)}function ke(e){if(","==e)return C(ve)}function Ce(e,t){if("keyword b"==e&&"else"==t)return C(D("form","else"),I,L)}function Se(e,t){return"await"==t?C(Se):"("==e?C(D(")"),Ee,L):void 0}function Ee(e){return"var"==e?C(ve,Te):"variable"==e?C(Te):k(Te)}function Te(e,t){return")"==e?C():";"==e?C(Te):"in"==t||"of"==t?(x.marked="keyword",C(z,Te)):k(z,Te)}function Oe(e,t){return"*"==t?(x.marked="keyword",C(Oe)):"variable"==e?(E(t),C(Oe)):"("==e?C(j,D(")"),re(je,")"),L,ue,I,N):l&&"<"==t?C(D(">"),re(me,">"),L,Oe):void 0}function Me(e,t){return"*"==t?(x.marked="keyword",C(Me)):"variable"==e?(E(t),C(Me)):"("==e?C(j,D(")"),re(je,")"),L,ue,N):l&&"<"==t?C(D(">"),re(me,">"),L,Me):void 0}function Pe(e,t){return"keyword"==e||"variable"==e?(x.marked="type",C(Pe)):"<"==t?C(D(">"),re(me,">"),L):void 0}function je(e,t){return"@"==t&&C(z,je),"spread"==e?C(je):l&&T(t)?(x.marked="keyword",C(je)):l&&"this"==e?C(ae,xe):k(ye,ae,xe)}function Ae(e,t){return"variable"==e?Ne(e,t):De(e,t)}function Ne(e,t){if("variable"==e)return E(t),C(De)}function De(e,t){return"<"==t?C(D(">"),re(me,">"),L,De):"extends"==t||"implements"==t||l&&","==e?("implements"==t&&(x.marked="keyword"),C(l?ce:z,De)):"{"==e?C(D("}"),Le,L):void 0}function Le(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||l&&T(t))&&x.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(x.marked="keyword",C(Le)):"variable"==e||"keyword"==x.style?(x.marked="property",C(Re,Le)):"number"==e||"string"==e?C(Re,Le):"["==e?C(z,ae,R("]"),Re,Le):"*"==t?(x.marked="keyword",C(Le)):l&&"("==e?k(Me,Le):";"==e||","==e?C(Le):"}"==e?C():"@"==t?C(z,Le):void 0}function Re(e,t){if("?"==t)return C(Re);if(":"==e)return C(ce,xe);if("="==t)return C(W);var n=x.state.lexical.prev;return k(n&&"interface"==n.info?Me:Oe)}function Ie(e,t){return"*"==t?(x.marked="keyword",C(Ue,R(";"))):"default"==t?(x.marked="keyword",C(z,R(";"))):"{"==e?C(re(Fe,"}"),Ue,R(";")):k(I)}function Fe(e,t){return"as"==t?(x.marked="keyword",C(R("variable"))):"variable"==e?k(W,Fe):void 0}function ze(e){return"string"==e?C():"("==e?k(z):k(We,Be,Ue)}function We(e,t){return"{"==e?ie(We,"}"):("variable"==e&&E(t),"*"==t&&(x.marked="keyword"),C(Ve))}function Be(e){if(","==e)return C(We,Be)}function Ve(e,t){if("as"==t)return x.marked="keyword",C(We)}function Ue(e,t){if("from"==t)return x.marked="keyword",C(z)}function He(e){return"]"==e?C():k(re(W,"]"))}function $e(){return k(D("form"),ye,R("{"),D("}"),re(qe,"}"),L,L)}function qe(){return k(ye,xe)}function Ke(e,t,n){return t.tokenize==_&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(n||0)))}return N.lex=!0,L.lex=!0,{startState:function(e){var t={tokenize:_,lastType:"sof",cc:[],lexical:new b((e||0)-o,0,"block",!1),localVars:n.localVars,context:n.localVars&&new O(null,null,!1),indented:e||0};return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),v(e,t)),t.tokenize!=m&&e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"==r?n:(t.lastType="operator"!=r||"++"!=i&&"--"!=i?r:"incdec",function(e,t,n,r,i){var o=e.cc;for(x.state=e,x.stream=i,x.marked=null,x.cc=o,x.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():u?z:I)(n,r)){for(;o.length&&o[o.length-1].lex;)o.pop()();return x.marked?x.marked:"variable"==n&&w(e,r)?"variable-2":t}}(t,n,r,i,e))},indent:function(t,r){if(t.tokenize==m)return e.Pass;if(t.tokenize!=_)return 0;var i,s=r&&r.charAt(0),u=t.lexical;if(!/^\s*else\b/.test(r))for(var l=t.cc.length-1;l>=0;--l){var c=t.cc[l];if(c==L)u=u.prev;else if(c!=Ce)break}for(;("stat"==u.type||"form"==u.type)&&("}"==s||(i=t.cc[t.cc.length-1])&&(i==H||i==$)&&!/^[,\.=+\-*:?[\(]/.test(r));)u=u.prev;a&&")"==u.type&&"stat"==u.prev.type&&(u=u.prev);var f=u.type,p=s==f;return"vardef"==f?u.indented+("operator"==t.lastType||","==t.lastType?u.info.length+1:0):"form"==f&&"{"==s?u.indented:"form"==f?u.indented+o:"stat"==f?u.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||d.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,r)?a||o:0):"switch"!=u.info||p||0==n.doubleIndentSwitch?u.align?u.column+(p?0:1):u.indented+(p?0:o):u.indented+(/^(?:case|default)\b/.test(r)?o:2*o)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:u?null:"/*",blockCommentEnd:u?null:"*/",blockCommentContinue:u?null:" * ",lineComment:u?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:u?"json":"javascript",jsonldMode:s,jsonMode:u,expressionAllowed:Ke,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=z&&t!=W||e.cc.pop()}}})),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}(n(36))},function(e,t,n){!function(e){"use strict";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n,r=t(["and","or","not","is"]),i=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],o=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function a(e){return e.scopes[e.scopes.length-1]}e.registerHelper("hintWords","python",i.concat(o)),e.defineMode("python",(function(n,s){for(var u=s.delimiters||s.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,l=[s.singleOperators,s.doubleOperators,s.doubleDelimiters,s.tripleDelimiters,s.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],c=0;c<l.length;c++)l[c]||l.splice(c--,1);var f=s.hangingIndent||n.indentUnit,d=i,p=o;null!=s.extra_keywords&&(d=d.concat(s.extra_keywords)),null!=s.extra_builtins&&(p=p.concat(s.extra_builtins));var h=!(s.version&&Number(s.version)<3);if(h){var _=s.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;d=d.concat(["nonlocal","False","True","None","async","await"]),p=p.concat(["ascii","bytes","exec","print"]);var m=new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))","i")}else _=s.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/,d=d.concat(["exec","print"]),p=p.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]),m=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i");var g=t(d),v=t(p);function y(e,t){var n=e.sol()&&"\\"!=t.lastToken;if(n&&(t.indent=e.indentation()),n&&"py"==a(t).type){var r=a(t).offset;if(e.eatSpace()){var i=e.indentation();return i>r?w(t):i<r&&x(e,t)&&"#"!=e.peek()&&(t.errorToken=!0),null}var o=b(e,t);return r>0&&x(e,t)&&(o+=" error"),o}return b(e,t)}function b(e,t,n){if(e.eatSpace())return null;if(!n&&e.match(/^#.*/))return"comment";if(e.match(/^[0-9\.]/,!1)){var i=!1;if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(i=!0),e.match(/^[\d_]+\.\d*/)&&(i=!0),e.match(/^\.\d+/)&&(i=!0),i)return e.eat(/J/i),"number";var o=!1;if(e.match(/^0x[0-9a-f_]+/i)&&(o=!0),e.match(/^0b[01_]+/i)&&(o=!0),e.match(/^0o[0-7_]+/i)&&(o=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),o=!0),e.match(/^0(?![\dx])/i)&&(o=!0),o)return e.eat(/L/i),"number"}if(e.match(m))return-1!==e.current().toLowerCase().indexOf("f")?(t.tokenize=function(e,t){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var n=1==e.length;function r(e){return function(t,n){var o=b(t,n,!0);return"punctuation"==o&&("{"==t.current()?n.tokenize=r(e+1):"}"==t.current()&&(n.tokenize=e>1?r(e-1):i)),o}}function i(i,o){for(;!i.eol();)if(i.eatWhile(/[^'"\{\}\\]/),i.eat("\\")){if(i.next(),n&&i.eol())return"string"}else{if(i.match(e))return o.tokenize=t,"string";if(i.match("{{"))return"string";if(i.match("{",!1))return o.tokenize=r(0),i.current()?"string":o.tokenize(i,o);if(i.match("}}"))return"string";if(i.match("}"))return"error";i.eat(/['"]/)}if(n){if(s.singleLineStringErrors)return"error";o.tokenize=t}return"string"}return i.isString=!0,i}(e.current(),t.tokenize),t.tokenize(e,t)):(t.tokenize=function(e,t){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var n=1==e.length;function r(r,i){for(;!r.eol();)if(r.eatWhile(/[^'"\\]/),r.eat("\\")){if(r.next(),n&&r.eol())return"string"}else{if(r.match(e))return i.tokenize=t,"string";r.eat(/['"]/)}if(n){if(s.singleLineStringErrors)return"error";i.tokenize=t}return"string"}return r.isString=!0,r}(e.current(),t.tokenize),t.tokenize(e,t));for(var a=0;a<l.length;a++)if(e.match(l[a]))return"operator";return e.match(u)?"punctuation":"."==t.lastToken&&e.match(_)?"property":e.match(g)||e.match(r)?"keyword":e.match(v)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(_)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),n?null:"error")}function w(e){for(;"py"!=a(e).type;)e.scopes.pop();e.scopes.push({offset:a(e).offset+n.indentUnit,type:"py",align:null})}function x(e,t){for(var n=e.indentation();t.scopes.length>1&&a(t).offset>n;){if("py"!=a(t).type)return!0;t.scopes.pop()}return a(t).offset!=n}function k(e,t){e.sol()&&(t.beginningOfLine=!0);var n=t.tokenize(e,t),r=e.current();if(t.beginningOfLine&&"@"==r)return e.match(_,!1)?"meta":h?"operator":"error";if(/\S/.test(r)&&(t.beginningOfLine=!1),"variable"!=n&&"builtin"!=n||"meta"!=t.lastToken||(n="meta"),"pass"!=r&&"return"!=r||(t.dedent+=1),"lambda"==r&&(t.lambda=!0),":"!=r||t.lambda||"py"!=a(t).type||w(t),1==r.length&&!/string|comment/.test(n)){var i="[({".indexOf(r);if(-1!=i&&function(e,t,n){var r=e.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+f,type:n,align:r})}(e,t,"])}".slice(i,i+1)),-1!=(i="])}".indexOf(r))){if(a(t).type!=r)return"error";t.indent=t.scopes.pop().offset-f}}return t.dedent>0&&e.eol()&&"py"==a(t).type&&(t.scopes.length>1&&t.scopes.pop(),t.dedent-=1),n}return{startState:function(e){return{tokenize:y,scopes:[{offset:e||0,type:"py",align:null}],indent:e||0,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.errorToken;n&&(t.errorToken=!1);var r=k(e,t);return r&&"comment"!=r&&(t.lastToken="keyword"==r||"punctuation"==r?e.current():r),"punctuation"==r&&(r=null),e.eol()&&t.lambda&&(t.lambda=!1),n?r+" error":r},indent:function(t,n){if(t.tokenize!=y)return t.tokenize.isString?e.Pass:0;var r=a(t),i=r.type==n.charAt(0);return null!=r.align?r.align-(i?1:0):r.offset-(i?f:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"}})),e.defineMIME("text/x-python","python"),e.defineMIME("text/x-cython",{name:"python",extra_keywords:(n="by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE",n.split(" "))})}(n(36))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r,i,o){this.indented=e,this.column=t,this.type=n,this.info=r,this.align=i,this.prev=o}function n(e,n,r,i){var o=e.indented;return e.context&&"statement"==e.context.type&&"statement"!=r&&(o=e.context.indented),e.context=new t(o,n,r,i,null,e.context)}function r(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function i(e,t,n){return"variable"==t.prevToken||"type"==t.prevToken||!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0,n))||!(!t.typeAtEndOfLine||e.column()!=e.indentation())||void 0}function o(e){for(;;){if(!e||"top"==e.type)return!0;if("}"==e.type&&"namespace"!=e.prev.info)return!1;e=e.prev}}function a(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}function s(e,t){return"function"==typeof e?e(t):e.propertyIsEnumerable(t)}e.defineMode("clike",(function(a,u){var l,c,f=a.indentUnit,d=u.statementIndentUnit||f,p=u.dontAlignCalls,h=u.keywords||{},_=u.types||{},m=u.builtin||{},g=u.blockKeywords||{},v=u.defKeywords||{},y=u.atoms||{},b=u.hooks||{},w=u.multiLineStrings,x=!1!==u.indentStatements,k=!1!==u.indentSwitch,C=u.namespaceSeparator,S=u.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,E=u.numberStart||/[\d\.]/,T=u.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,O=u.isOperatorChar||/[+\-*&%=<>!?|\/]/,M=u.isIdentifierChar||/[\w\$_\xa1-\uffff]/,P=u.isReservedIdentifier||!1;function j(e,t){var n,r=e.next();if(b[r]){var i=b[r](e,t);if(!1!==i)return i}if('"'==r||"'"==r)return t.tokenize=(n=r,function(e,t){for(var r,i=!1,o=!1;null!=(r=e.next());){if(r==n&&!i){o=!0;break}i=!i&&"\\"==r}return(o||!i&&!w)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(S.test(r))return l=r,null;if(E.test(r)){if(e.backUp(1),e.match(T))return"number";e.next()}if("/"==r){if(e.eat("*"))return t.tokenize=A,A(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(O.test(r)){for(;!e.match(/^\/[\/*]/,!1)&&e.eat(O););return"operator"}if(e.eatWhile(M),C)for(;e.match(C);)e.eatWhile(M);var o=e.current();return s(h,o)?(s(g,o)&&(l="newstatement"),s(v,o)&&(c=!0),"keyword"):s(_,o)?"type":s(m,o)||P&&P(o)?(s(g,o)&&(l="newstatement"),"builtin"):s(y,o)?"atom":"variable"}function A(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null;break}r="*"==n}return"comment"}function N(e,t){u.typeFirstDefinitions&&e.eol()&&o(t.context)&&(t.typeAtEndOfLine=i(e,t,e.pos))}return{startState:function(e){return{tokenize:null,context:new t((e||0)-f,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(e,t){var a=t.context;if(e.sol()&&(null==a.align&&(a.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return N(e,t),null;l=c=null;var s=(t.tokenize||j)(e,t);if("comment"==s||"meta"==s)return s;if(null==a.align&&(a.align=!0),";"==l||":"==l||","==l&&e.match(/^\s*(?:\/\/.*)?$/,!1))for(;"statement"==t.context.type;)r(t);else if("{"==l)n(t,e.column(),"}");else if("["==l)n(t,e.column(),"]");else if("("==l)n(t,e.column(),")");else if("}"==l){for(;"statement"==a.type;)a=r(t);for("}"==a.type&&(a=r(t));"statement"==a.type;)a=r(t)}else l==a.type?r(t):x&&(("}"==a.type||"top"==a.type)&&";"!=l||"statement"==a.type&&"newstatement"==l)&&n(t,e.column(),"statement",e.current());if("variable"==s&&("def"==t.prevToken||u.typeFirstDefinitions&&i(e,t,e.start)&&o(t.context)&&e.match(/^\s*\(/,!1))&&(s="def"),b.token){var f=b.token(e,t,s);void 0!==f&&(s=f)}return"def"==s&&!1===u.styleDefs&&(s="variable"),t.startOfLine=!1,t.prevToken=c?"def":s||l,N(e,t),s},indent:function(t,n){if(t.tokenize!=j&&null!=t.tokenize||t.typeAtEndOfLine)return e.Pass;var r=t.context,i=n&&n.charAt(0),o=i==r.type;if("statement"==r.type&&"}"==i&&(r=r.prev),u.dontIndentStatements)for(;"statement"==r.type&&u.dontIndentStatements.test(r.info);)r=r.prev;if(b.indent){var a=b.indent(t,r,n,f);if("number"==typeof a)return a}var s=r.prev&&"switch"==r.prev.info;if(u.allmanIndentation&&/[{(]/.test(i)){for(;"top"!=r.type&&"}"!=r.type;)r=r.prev;return r.indented}return"statement"==r.type?r.indented+("{"==i?0:d):!r.align||p&&")"==r.type?")"!=r.type||o?r.indented+(o?0:f)+(o||!s||/^(?:case|default)\b/.test(n)?0:f):r.indented+d:r.column+(o?0:1)},electricInput:k?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}}));var u="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",l="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",c="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",f="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",d=a("int long char short double float unsigned signed void bool"),p=a("SEL instancetype id Class Protocol BOOL");function h(e){return s(d,e)||/.+_t$/.test(e)}function _(e){return h(e)||s(p,e)}var m="case do else for if switch while struct enum union";function g(e,t){if(!t.startOfLine)return!1;for(var n,r=null;n=e.peek();){if("\\"==n&&e.match(/^.$/)){r=g;break}if("/"==n&&e.match(/^\/[\/\*]/,!1))break;e.next()}return t.tokenize=r,"meta"}function v(e,t){return"type"==t.prevToken&&"type"}function y(e){return!(!e||e.length<2||"_"!=e[0]||"_"!=e[1]&&e[1]===e[1].toLowerCase())}function b(e){return e.eatWhile(/[\w\.']/),"number"}function w(e,t){if(e.backUp(1),e.match(/(R|u8R|uR|UR|LR)/)){var n=e.match(/"([^\s\\()]{0,16})\(/);return!!n&&(t.cpp11RawStringDelim=n[1],t.tokenize=C,C(e,t))}return e.match(/(u8|u|U|L)/)?!!e.match(/["']/,!1)&&"string":(e.next(),!1)}function x(e){var t=/(\w+)::~?(\w+)$/.exec(e);return t&&t[1]==t[2]}function k(e,t){for(var n;null!=(n=e.next());)if('"'==n&&!e.eat('"')){t.tokenize=null;break}return"string"}function C(e,t){var n=t.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&");return e.match(new RegExp(".*?\\)"+n+'"'))?t.tokenize=null:e.skipToEnd(),"string"}function S(t,n){"string"==typeof t&&(t=[t]);var r=[];function i(e){if(e)for(var t in e)e.hasOwnProperty(t)&&r.push(t)}i(n.keywords),i(n.types),i(n.builtin),i(n.atoms),r.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],r));for(var o=0;o<t.length;++o)e.defineMIME(t[o],n)}function E(e,t){for(var n=!1;!e.eol();){if(!n&&e.match('"""')){t.tokenize=null;break}n="\\"==e.next()&&!n}return"string"}function T(e){return function(t,n){for(var r;r=t.next();){if("*"==r&&t.eat("/")){if(1==e){n.tokenize=null;break}return n.tokenize=T(e-1),n.tokenize(t,n)}if("/"==r&&t.eat("*"))return n.tokenize=T(e+1),n.tokenize(t,n)}return"comment"}}S(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:a(u),types:h,blockKeywords:a(m),defKeywords:a("struct enum union"),typeFirstDefinitions:!0,atoms:a("NULL true false"),isReservedIdentifier:y,hooks:{"#":g,"*":v},modeProps:{fold:["brace","include"]}}),S(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:a(u+" "+l),types:h,blockKeywords:a(m+" class try catch"),defKeywords:a("struct enum union class namespace"),typeFirstDefinitions:!0,atoms:a("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:y,hooks:{"#":g,"*":v,u:w,U:w,L:w,R:w,0:b,1:b,2:b,3:b,4:b,5:b,6:b,7:b,8:b,9:b,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&x(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),S("text/x-java",{name:"clike",keywords:a("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:a("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:a("catch class do else finally for if switch try while"),defKeywords:a("class interface enum @interface"),typeFirstDefinitions:!0,atoms:a("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(e){return!e.match("interface",!1)&&(e.eatWhile(/[\w\$_]/),"meta")}},modeProps:{fold:["brace","import"]}}),S("text/x-csharp",{name:"clike",keywords:a("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:a("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:a("catch class do else finally for foreach if struct switch try while"),defKeywords:a("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:a("true false null"),hooks:{"@":function(e,t){return e.eat('"')?(t.tokenize=k,k(e,t)):(e.eatWhile(/[\w\$_]/),"meta")}}}),S("text/x-scala",{name:"clike",keywords:a("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:a("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:a("catch class enum do else finally for forSome if match switch try while"),defKeywords:a("class enum def object package trait type val var"),atoms:a("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return!!e.match('""')&&(t.tokenize=E,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},"=":function(e,n){var r=n.context;return!("}"!=r.type||!r.align||!e.eat(">"))&&(n.context=new t(r.indented,r.column,r.type,r.info,null,r.prev),"operator")},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=T(1),t.tokenize(e,t))}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}}),S("text/x-kotlin",{name:"clike",keywords:a("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),types:a("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),intendSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:a("catch class do else finally for if where try while enum"),defKeywords:a("class val var object interface fun"),atoms:a("true false null this"),hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},"*":function(e,t){return"."==t.prevToken?"variable":"operator"},'"':function(e,t){var n;return t.tokenize=(n=e.match('""'),function(e,t){for(var r,i=!1,o=!1;!e.eol();){if(!n&&!i&&e.match('"')){o=!0;break}if(n&&e.match('"""')){o=!0;break}r=e.next(),!i&&"$"==r&&e.match("{")&&e.skipTo("}"),i=!i&&"\\"==r&&!n}return!o&&n||(t.tokenize=null),"string"}),t.tokenize(e,t)},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=T(1),t.tokenize(e,t))},indent:function(e,t,n,r){var i=n&&n.charAt(0);return"}"!=e.prevToken&&")"!=e.prevToken||""!=n?"operator"==e.prevToken&&"}"!=n&&"}"!=e.context.type||"variable"==e.prevToken&&"."==i||("}"==e.prevToken||")"==e.prevToken)&&"."==i?2*r+t.indented:t.align&&"}"==t.type?t.indented+(e.context.type==(n||"").charAt(0)?0:r):void 0:e.indented}},modeProps:{closeBrackets:{triples:'"'}}}),S(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:a("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:a("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:a("for while do if else struct"),builtin:a("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:a("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":g},modeProps:{fold:["brace","include"]}}),S("text/x-nesc",{name:"clike",keywords:a(u+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:h,blockKeywords:a(m),atoms:a("null true false"),hooks:{"#":g},modeProps:{fold:["brace","include"]}}),S("text/x-objectivec",{name:"clike",keywords:a(u+" "+c),types:_,builtin:a(f),blockKeywords:a(m+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:a("struct enum union @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:a("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:y,hooks:{"#":g,"*":v},modeProps:{fold:["brace","include"]}}),S("text/x-objectivec++",{name:"clike",keywords:a(u+" "+c+" "+l),types:_,builtin:a(f),blockKeywords:a(m+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:a("struct enum union @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:a("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:y,hooks:{"#":g,"*":v,u:w,U:w,L:w,R:w,0:b,1:b,2:b,3:b,4:b,5:b,6:b,7:b,8:b,9:b,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&x(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),S("text/x-squirrel",{name:"clike",keywords:a("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:h,blockKeywords:a("case catch class else for foreach if switch try while"),defKeywords:a("function local class"),typeFirstDefinitions:!0,atoms:a("true false null"),hooks:{"#":g},modeProps:{fold:["brace","include"]}});var O=null;S("text/x-ceylon",{name:"clike",keywords:a("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(e){var t=e.charAt(0);return t===t.toUpperCase()&&t!==t.toLowerCase()},blockKeywords:a("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:a("class dynamic function interface module object package value"),builtin:a("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:a("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return t.tokenize=function e(t){return function(n,r){for(var i,o=!1,a=!1;!n.eol();){if(!o&&n.match('"')&&("single"==t||n.match('""'))){a=!0;break}if(!o&&n.match("``")){O=e(t),a=!0;break}i=n.next(),o="single"==t&&!o&&"\\"==i}return a&&(r.tokenize=null),"string"}}(e.match('""')?"triple":"single"),t.tokenize(e,t)},"`":function(e,t){return!(!O||!e.match("`"))&&(t.tokenize=O,O=null,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(e,t,n){if(("variable"==n||"type"==n)&&"."==t.prevToken)return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})}(n(36))},function(e,t,n){var r=n(3),i=n(186);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n",""]),e.exports=t},function(e,t,n){var r=n(3),i=n(188);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".CodeMirror{height:auto !important}\n",""]),e.exports=t},function(e,t,n){"use strict";var r,i;r=[n(45),n(46),n(190)],void 0===(i=function(e,t,n){return function(e,t,n){var r=function(t,n){return e.js_beautify(t,n)};return r.js=e.js_beautify,r.css=t.css_beautify,r.html=n.html_beautify,r.js_beautify=e.js_beautify,r.css_beautify=t.css_beautify,r.html_beautify=n.html_beautify,r}(e,t,n)}.apply(t,r))||(e.exports=i)},function(e,t,n){var r,i,o;o=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([,,function(e,t,n){"use strict";function r(e){this.__parent=e,this.__character_count=0,this.__indent_count=-1,this.__alignment_count=0,this.__wrap_point_index=0,this.__wrap_point_character_count=0,this.__wrap_point_indent_count=-1,this.__wrap_point_alignment_count=0,this.__items=[]}function i(e,t){this.__cache=[""],this.__indent_size=e.indent_size,this.__indent_string=e.indent_char,e.indent_with_tabs||(this.__indent_string=new Array(e.indent_size+1).join(e.indent_char)),t=t||"",e.indent_level>0&&(t=new Array(e.indent_level+1).join(this.__indent_string)),this.__base_string=t,this.__base_string_length=t.length}function o(e,t){this.__indent_cache=new i(e,t),this.raw=!1,this._end_with_newline=e.end_with_newline,this.indent_size=e.indent_size,this.wrap_line_length=e.wrap_line_length,this.indent_empty_lines=e.indent_empty_lines,this.__lines=[],this.previous_line=null,this.current_line=null,this.next_line=new r(this),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1,this.__add_outputline()}r.prototype.clone_empty=function(){var e=new r(this.__parent);return e.set_indent(this.__indent_count,this.__alignment_count),e},r.prototype.item=function(e){return e<0?this.__items[this.__items.length+e]:this.__items[e]},r.prototype.has_match=function(e){for(var t=this.__items.length-1;t>=0;t--)if(this.__items[t].match(e))return!0;return!1},r.prototype.set_indent=function(e,t){this.is_empty()&&(this.__indent_count=e||0,this.__alignment_count=t||0,this.__character_count=this.__parent.get_indent_size(this.__indent_count,this.__alignment_count))},r.prototype._set_wrap_point=function(){this.__parent.wrap_line_length&&(this.__wrap_point_index=this.__items.length,this.__wrap_point_character_count=this.__character_count,this.__wrap_point_indent_count=this.__parent.next_line.__indent_count,this.__wrap_point_alignment_count=this.__parent.next_line.__alignment_count)},r.prototype._should_wrap=function(){return this.__wrap_point_index&&this.__character_count>this.__parent.wrap_line_length&&this.__wrap_point_character_count>this.__parent.next_line.__character_count},r.prototype._allow_wrap=function(){if(this._should_wrap()){this.__parent.add_new_line();var e=this.__parent.current_line;return e.set_indent(this.__wrap_point_indent_count,this.__wrap_point_alignment_count),e.__items=this.__items.slice(this.__wrap_point_index),this.__items=this.__items.slice(0,this.__wrap_point_index),e.__character_count+=this.__character_count-this.__wrap_point_character_count,this.__character_count=this.__wrap_point_character_count," "===e.__items[0]&&(e.__items.splice(0,1),e.__character_count-=1),!0}return!1},r.prototype.is_empty=function(){return 0===this.__items.length},r.prototype.last=function(){return this.is_empty()?null:this.__items[this.__items.length-1]},r.prototype.push=function(e){this.__items.push(e);var t=e.lastIndexOf("\n");-1!==t?this.__character_count=e.length-t:this.__character_count+=e.length},r.prototype.pop=function(){var e=null;return this.is_empty()||(e=this.__items.pop(),this.__character_count-=e.length),e},r.prototype._remove_indent=function(){this.__indent_count>0&&(this.__indent_count-=1,this.__character_count-=this.__parent.indent_size)},r.prototype._remove_wrap_indent=function(){this.__wrap_point_indent_count>0&&(this.__wrap_point_indent_count-=1)},r.prototype.trim=function(){for(;" "===this.last();)this.__items.pop(),this.__character_count-=1},r.prototype.toString=function(){var e="";return this.is_empty()?this.__parent.indent_empty_lines&&(e=this.__parent.get_indent_string(this.__indent_count)):(e=this.__parent.get_indent_string(this.__indent_count,this.__alignment_count),e+=this.__items.join("")),e},i.prototype.get_indent_size=function(e,t){var n=this.__base_string_length;return t=t||0,e<0&&(n=0),n+=e*this.__indent_size,n+=t},i.prototype.get_indent_string=function(e,t){var n=this.__base_string;return t=t||0,e<0&&(e=0,n=""),t+=e*this.__indent_size,this.__ensure_cache(t),n+=this.__cache[t]},i.prototype.__ensure_cache=function(e){for(;e>=this.__cache.length;)this.__add_column()},i.prototype.__add_column=function(){var e=this.__cache.length,t=0,n="";this.__indent_size&&e>=this.__indent_size&&(e-=(t=Math.floor(e/this.__indent_size))*this.__indent_size,n=new Array(t+1).join(this.__indent_string)),e&&(n+=new Array(e+1).join(" ")),this.__cache.push(n)},o.prototype.__add_outputline=function(){this.previous_line=this.current_line,this.current_line=this.next_line.clone_empty(),this.__lines.push(this.current_line)},o.prototype.get_line_number=function(){return this.__lines.length},o.prototype.get_indent_string=function(e,t){return this.__indent_cache.get_indent_string(e,t)},o.prototype.get_indent_size=function(e,t){return this.__indent_cache.get_indent_size(e,t)},o.prototype.is_empty=function(){return!this.previous_line&&this.current_line.is_empty()},o.prototype.add_new_line=function(e){return!(this.is_empty()||!e&&this.just_added_newline()||(this.raw||this.__add_outputline(),0))},o.prototype.get_code=function(e){this.trim(!0);var t=this.current_line.pop();t&&("\n"===t[t.length-1]&&(t=t.replace(/\n+$/g,"")),this.current_line.push(t)),this._end_with_newline&&this.__add_outputline();var n=this.__lines.join("\n");return"\n"!==e&&(n=n.replace(/[\n]/g,e)),n},o.prototype.set_wrap_point=function(){this.current_line._set_wrap_point()},o.prototype.set_indent=function(e,t){return e=e||0,t=t||0,this.next_line.set_indent(e,t),this.__lines.length>1?(this.current_line.set_indent(e,t),!0):(this.current_line.set_indent(),!1)},o.prototype.add_raw_token=function(e){for(var t=0;t<e.newlines;t++)this.__add_outputline();this.current_line.set_indent(-1),this.current_line.push(e.whitespace_before),this.current_line.push(e.text),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=!1},o.prototype.add_token=function(e){this.__add_space_before_token(),this.current_line.push(e),this.space_before_token=!1,this.non_breaking_space=!1,this.previous_token_wrapped=this.current_line._allow_wrap()},o.prototype.__add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&(this.non_breaking_space||this.set_wrap_point(),this.current_line.push(" "))},o.prototype.remove_indent=function(e){for(var t=this.__lines.length;e<t;)this.__lines[e]._remove_indent(),e++;this.current_line._remove_wrap_indent()},o.prototype.trim=function(e){for(e=void 0!==e&&e,this.current_line.trim();e&&this.__lines.length>1&&this.current_line.is_empty();)this.__lines.pop(),this.current_line=this.__lines[this.__lines.length-1],this.current_line.trim();this.previous_line=this.__lines.length>1?this.__lines[this.__lines.length-2]:null},o.prototype.just_added_newline=function(){return this.current_line.is_empty()},o.prototype.just_added_blankline=function(){return this.is_empty()||this.current_line.is_empty()&&this.previous_line.is_empty()},o.prototype.ensure_empty_line_above=function(e,t){for(var n=this.__lines.length-2;n>=0;){var i=this.__lines[n];if(i.is_empty())break;if(0!==i.item(0).indexOf(e)&&i.item(-1)!==t){this.__lines.splice(n+1,0,new r(this)),this.previous_line=this.__lines[this.__lines.length-2];break}n--}},e.exports.Output=o},function(e,t,n){"use strict";e.exports.Token=function(e,t,n,r){this.type=e,this.text=t,this.comments_before=null,this.newlines=n||0,this.whitespace_before=r||"",this.parent=null,this.next=null,this.previous=null,this.opened=null,this.closed=null,this.directives=null}},,,function(e,t,n){"use strict";function r(e,t){this.raw_options=i(e,t),this.disabled=this._get_boolean("disabled"),this.eol=this._get_characters("eol","auto"),this.end_with_newline=this._get_boolean("end_with_newline"),this.indent_size=this._get_number("indent_size",4),this.indent_char=this._get_characters("indent_char"," "),this.indent_level=this._get_number("indent_level"),this.preserve_newlines=this._get_boolean("preserve_newlines",!0),this.max_preserve_newlines=this._get_number("max_preserve_newlines",32786),this.preserve_newlines||(this.max_preserve_newlines=0),this.indent_with_tabs=this._get_boolean("indent_with_tabs","\t"===this.indent_char),this.indent_with_tabs&&(this.indent_char="\t",1===this.indent_size&&(this.indent_size=4)),this.wrap_line_length=this._get_number("wrap_line_length",this._get_number("max_char")),this.indent_empty_lines=this._get_boolean("indent_empty_lines"),this.templating=this._get_selection_list("templating",["auto","none","django","erb","handlebars","php"],["auto"])}function i(e,t){var n,r={};for(n in e=o(e))n!==t&&(r[n]=e[n]);if(t&&e[t])for(n in e[t])r[n]=e[t][n];return r}function o(e){var t,n={};for(t in e)n[t.replace(/-/g,"_")]=e[t];return n}r.prototype._get_array=function(e,t){var n=this.raw_options[e],r=t||[];return"object"==typeof n?null!==n&&"function"==typeof n.concat&&(r=n.concat()):"string"==typeof n&&(r=n.split(/[^a-zA-Z0-9_\/\-]+/)),r},r.prototype._get_boolean=function(e,t){var n=this.raw_options[e];return void 0===n?!!t:!!n},r.prototype._get_characters=function(e,t){var n=this.raw_options[e],r=t||"";return"string"==typeof n&&(r=n.replace(/\\r/,"\r").replace(/\\n/,"\n").replace(/\\t/,"\t")),r},r.prototype._get_number=function(e,t){var n=this.raw_options[e];t=parseInt(t,10),isNaN(t)&&(t=0);var r=parseInt(n,10);return isNaN(r)&&(r=t),r},r.prototype._get_selection=function(e,t,n){var r=this._get_selection_list(e,t,n);if(1!==r.length)throw new Error("Invalid Option Value: The option '"+e+"' can only be one of the following values:\n"+t+"\nYou passed in: '"+this.raw_options[e]+"'");return r[0]},r.prototype._get_selection_list=function(e,t,n){if(!t||0===t.length)throw new Error("Selection list cannot be empty.");if(n=n||[t[0]],!this._is_valid_selection(n,t))throw new Error("Invalid Default Value!");var r=this._get_array(e,n);if(!this._is_valid_selection(r,t))throw new Error("Invalid Option Value: The option '"+e+"' can contain only the following values:\n"+t+"\nYou passed in: '"+this.raw_options[e]+"'");return r},r.prototype._is_valid_selection=function(e,t){return e.length&&t.length&&!e.some((function(e){return-1===t.indexOf(e)}))},e.exports.Options=r,e.exports.normalizeOpts=o,e.exports.mergeOpts=i},,function(e,t,n){"use strict";var r=RegExp.prototype.hasOwnProperty("sticky");function i(e){this.__input=e||"",this.__input_length=this.__input.length,this.__position=0}i.prototype.restart=function(){this.__position=0},i.prototype.back=function(){this.__position>0&&(this.__position-=1)},i.prototype.hasNext=function(){return this.__position<this.__input_length},i.prototype.next=function(){var e=null;return this.hasNext()&&(e=this.__input.charAt(this.__position),this.__position+=1),e},i.prototype.peek=function(e){var t=null;return e=e||0,(e+=this.__position)>=0&&e<this.__input_length&&(t=this.__input.charAt(e)),t},i.prototype.__match=function(e,t){e.lastIndex=t;var n=e.exec(this.__input);return!n||r&&e.sticky||n.index!==t&&(n=null),n},i.prototype.test=function(e,t){return t=t||0,(t+=this.__position)>=0&&t<this.__input_length&&!!this.__match(e,t)},i.prototype.testChar=function(e,t){var n=this.peek(t);return e.lastIndex=0,null!==n&&e.test(n)},i.prototype.match=function(e){var t=this.__match(e,this.__position);return t?this.__position+=t[0].length:t=null,t},i.prototype.read=function(e,t,n){var r,i="";return e&&(r=this.match(e))&&(i+=r[0]),!t||!r&&e||(i+=this.readUntil(t,n)),i},i.prototype.readUntil=function(e,t){var n,r=this.__position;e.lastIndex=this.__position;var i=e.exec(this.__input);return i?(r=i.index,t&&(r+=i[0].length)):r=this.__input_length,n=this.__input.substring(this.__position,r),this.__position=r,n},i.prototype.readUntilAfter=function(e){return this.readUntil(e,!0)},i.prototype.get_regexp=function(e,t){var n=null,i="g";return t&&r&&(i="y"),"string"==typeof e&&""!==e?n=new RegExp(e,i):e&&(n=new RegExp(e.source,i)),n},i.prototype.get_literal_regexp=function(e){return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))},i.prototype.peekUntilAfter=function(e){var t=this.__position,n=this.readUntilAfter(e);return this.__position=t,n},i.prototype.lookBack=function(e){var t=this.__position-1;return t>=e.length&&this.__input.substring(t-e.length,t).toLowerCase()===e},e.exports.InputScanner=i},function(e,t,n){"use strict";var r=n(8).InputScanner,i=n(3).Token,o=n(10).TokenStream,a=n(11).WhitespacePattern,s={START:"TK_START",RAW:"TK_RAW",EOF:"TK_EOF"},u=function(e,t){this._input=new r(e),this._options=t||{},this.__tokens=null,this._patterns={},this._patterns.whitespace=new a(this._input)};u.prototype.tokenize=function(){var e;this._input.restart(),this.__tokens=new o,this._reset();for(var t=new i(s.START,""),n=null,r=[],a=new o;t.type!==s.EOF;){for(e=this._get_next_token(t,n);this._is_comment(e);)a.add(e),e=this._get_next_token(t,n);a.isEmpty()||(e.comments_before=a,a=new o),e.parent=n,this._is_opening(e)?(r.push(n),n=e):n&&this._is_closing(e,n)&&(e.opened=n,n.closed=e,n=r.pop(),e.parent=n),e.previous=t,t.next=e,this.__tokens.add(e),t=e}return this.__tokens},u.prototype._is_first_token=function(){return this.__tokens.isEmpty()},u.prototype._reset=function(){},u.prototype._get_next_token=function(e,t){this._readWhitespace();var n=this._input.read(/.+/g);return n?this._create_token(s.RAW,n):this._create_token(s.EOF,"")},u.prototype._is_comment=function(e){return!1},u.prototype._is_opening=function(e){return!1},u.prototype._is_closing=function(e,t){return!1},u.prototype._create_token=function(e,t){return new i(e,t,this._patterns.whitespace.newline_count,this._patterns.whitespace.whitespace_before_token)},u.prototype._readWhitespace=function(){return this._patterns.whitespace.read()},e.exports.Tokenizer=u,e.exports.TOKEN=s},function(e,t,n){"use strict";function r(e){this.__tokens=[],this.__tokens_length=this.__tokens.length,this.__position=0,this.__parent_token=e}r.prototype.restart=function(){this.__position=0},r.prototype.isEmpty=function(){return 0===this.__tokens_length},r.prototype.hasNext=function(){return this.__position<this.__tokens_length},r.prototype.next=function(){var e=null;return this.hasNext()&&(e=this.__tokens[this.__position],this.__position+=1),e},r.prototype.peek=function(e){var t=null;return e=e||0,(e+=this.__position)>=0&&e<this.__tokens_length&&(t=this.__tokens[e]),t},r.prototype.add=function(e){this.__parent_token&&(e.parent=this.__parent_token),this.__tokens.push(e),this.__tokens_length+=1},e.exports.TokenStream=r},function(e,t,n){"use strict";var r=n(12).Pattern;function i(e,t){r.call(this,e,t),t?this._line_regexp=this._input.get_regexp(t._line_regexp):this.__set_whitespace_patterns("",""),this.newline_count=0,this.whitespace_before_token=""}i.prototype=new r,i.prototype.__set_whitespace_patterns=function(e,t){e+="\\t ",t+="\\n\\r",this._match_pattern=this._input.get_regexp("["+e+t+"]+",!0),this._newline_regexp=this._input.get_regexp("\\r\\n|["+t+"]")},i.prototype.read=function(){this.newline_count=0,this.whitespace_before_token="";var e=this._input.read(this._match_pattern);if(" "===e)this.whitespace_before_token=" ";else if(e){var t=this.__split(this._newline_regexp,e);this.newline_count=t.length-1,this.whitespace_before_token=t[this.newline_count]}return e},i.prototype.matching=function(e,t){var n=this._create();return n.__set_whitespace_patterns(e,t),n._update(),n},i.prototype._create=function(){return new i(this._input,this)},i.prototype.__split=function(e,t){e.lastIndex=0;for(var n=0,r=[],i=e.exec(t);i;)r.push(t.substring(n,i.index)),n=i.index+i[0].length,i=e.exec(t);return n<t.length?r.push(t.substring(n,t.length)):r.push(""),r},e.exports.WhitespacePattern=i},function(e,t,n){"use strict";function r(e,t){this._input=e,this._starting_pattern=null,this._match_pattern=null,this._until_pattern=null,this._until_after=!1,t&&(this._starting_pattern=this._input.get_regexp(t._starting_pattern,!0),this._match_pattern=this._input.get_regexp(t._match_pattern,!0),this._until_pattern=this._input.get_regexp(t._until_pattern),this._until_after=t._until_after)}r.prototype.read=function(){var e=this._input.read(this._starting_pattern);return this._starting_pattern&&!e||(e+=this._input.read(this._match_pattern,this._until_pattern,this._until_after)),e},r.prototype.read_match=function(){return this._input.match(this._match_pattern)},r.prototype.until_after=function(e){var t=this._create();return t._until_after=!0,t._until_pattern=this._input.get_regexp(e),t._update(),t},r.prototype.until=function(e){var t=this._create();return t._until_after=!1,t._until_pattern=this._input.get_regexp(e),t._update(),t},r.prototype.starting_with=function(e){var t=this._create();return t._starting_pattern=this._input.get_regexp(e,!0),t._update(),t},r.prototype.matching=function(e){var t=this._create();return t._match_pattern=this._input.get_regexp(e,!0),t._update(),t},r.prototype._create=function(){return new r(this._input,this)},r.prototype._update=function(){},e.exports.Pattern=r},function(e,t,n){"use strict";function r(e,t){e="string"==typeof e?e:e.source,t="string"==typeof t?t:t.source,this.__directives_block_pattern=new RegExp(e+/ beautify( \w+[:]\w+)+ /.source+t,"g"),this.__directive_pattern=/ (\w+)[:](\w+)/g,this.__directives_end_ignore_pattern=new RegExp(e+/\sbeautify\signore:end\s/.source+t,"g")}r.prototype.get_directives=function(e){if(!e.match(this.__directives_block_pattern))return null;var t={};this.__directive_pattern.lastIndex=0;for(var n=this.__directive_pattern.exec(e);n;)t[n[1]]=n[2],n=this.__directive_pattern.exec(e);return t},r.prototype.readIgnored=function(e){return e.readUntilAfter(this.__directives_end_ignore_pattern)},e.exports.Directives=r},function(e,t,n){"use strict";var r=n(12).Pattern,i={django:!1,erb:!1,handlebars:!1,php:!1};function o(e,t){r.call(this,e,t),this.__template_pattern=null,this._disabled=Object.assign({},i),this._excluded=Object.assign({},i),t&&(this.__template_pattern=this._input.get_regexp(t.__template_pattern),this._excluded=Object.assign(this._excluded,t._excluded),this._disabled=Object.assign(this._disabled,t._disabled));var n=new r(e);this.__patterns={handlebars_comment:n.starting_with(/{{!--/).until_after(/--}}/),handlebars_unescaped:n.starting_with(/{{{/).until_after(/}}}/),handlebars:n.starting_with(/{{/).until_after(/}}/),php:n.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),erb:n.starting_with(/<%[^%]/).until_after(/[^%]%>/),django:n.starting_with(/{%/).until_after(/%}/),django_value:n.starting_with(/{{/).until_after(/}}/),django_comment:n.starting_with(/{#/).until_after(/#}/)}}o.prototype=new r,o.prototype._create=function(){return new o(this._input,this)},o.prototype._update=function(){this.__set_templated_pattern()},o.prototype.disable=function(e){var t=this._create();return t._disabled[e]=!0,t._update(),t},o.prototype.read_options=function(e){var t=this._create();for(var n in i)t._disabled[n]=-1===e.templating.indexOf(n);return t._update(),t},o.prototype.exclude=function(e){var t=this._create();return t._excluded[e]=!0,t._update(),t},o.prototype.read=function(){var e="";e=this._match_pattern?this._input.read(this._starting_pattern):this._input.read(this._starting_pattern,this.__template_pattern);for(var t=this._read_template();t;)this._match_pattern?t+=this._input.read(this._match_pattern):t+=this._input.readUntil(this.__template_pattern),e+=t,t=this._read_template();return this._until_after&&(e+=this._input.readUntilAfter(this._until_pattern)),e},o.prototype.__set_templated_pattern=function(){var e=[];this._disabled.php||e.push(this.__patterns.php._starting_pattern.source),this._disabled.handlebars||e.push(this.__patterns.handlebars._starting_pattern.source),this._disabled.erb||e.push(this.__patterns.erb._starting_pattern.source),this._disabled.django||(e.push(this.__patterns.django._starting_pattern.source),e.push(this.__patterns.django_value._starting_pattern.source),e.push(this.__patterns.django_comment._starting_pattern.source)),this._until_pattern&&e.push(this._until_pattern.source),this.__template_pattern=this._input.get_regexp("(?:"+e.join("|")+")")},o.prototype._read_template=function(){var e="",t=this._input.peek();if("<"===t){var n=this._input.peek(1);this._disabled.php||this._excluded.php||"?"!==n||(e=e||this.__patterns.php.read()),this._disabled.erb||this._excluded.erb||"%"!==n||(e=e||this.__patterns.erb.read())}else"{"===t&&(this._disabled.handlebars||this._excluded.handlebars||(e=(e=(e=e||this.__patterns.handlebars_comment.read())||this.__patterns.handlebars_unescaped.read())||this.__patterns.handlebars.read()),this._disabled.django||(this._excluded.django||this._excluded.handlebars||(e=e||this.__patterns.django_value.read()),this._excluded.django||(e=(e=e||this.__patterns.django_comment.read())||this.__patterns.django.read())));return e},e.exports.TemplatablePattern=o},,,,function(e,t,n){"use strict";var r=n(19).Beautifier,i=n(20).Options;e.exports=function(e,t,n,i){return new r(e,t,n,i).beautify()},e.exports.defaultOptions=function(){return new i}},function(e,t,n){"use strict";var r=n(20).Options,i=n(2).Output,o=n(21).Tokenizer,a=n(21).TOKEN,s=/\r\n|[\r\n]/,u=/\r\n|[\r\n]/g,l=function(e,t){this.indent_level=0,this.alignment_size=0,this.max_preserve_newlines=e.max_preserve_newlines,this.preserve_newlines=e.preserve_newlines,this._output=new i(e,t)};l.prototype.current_line_has_match=function(e){return this._output.current_line.has_match(e)},l.prototype.set_space_before_token=function(e,t){this._output.space_before_token=e,this._output.non_breaking_space=t},l.prototype.set_wrap_point=function(){this._output.set_indent(this.indent_level,this.alignment_size),this._output.set_wrap_point()},l.prototype.add_raw_token=function(e){this._output.add_raw_token(e)},l.prototype.print_preserved_newlines=function(e){var t=0;e.type!==a.TEXT&&e.previous.type!==a.TEXT&&(t=e.newlines?1:0),this.preserve_newlines&&(t=e.newlines<this.max_preserve_newlines+1?e.newlines:this.max_preserve_newlines+1);for(var n=0;n<t;n++)this.print_newline(n>0);return 0!==t},l.prototype.traverse_whitespace=function(e){return!(!e.whitespace_before&&!e.newlines||(this.print_preserved_newlines(e)||(this._output.space_before_token=!0),0))},l.prototype.previous_token_wrapped=function(){return this._output.previous_token_wrapped},l.prototype.print_newline=function(e){this._output.add_new_line(e)},l.prototype.print_token=function(e){e.text&&(this._output.set_indent(this.indent_level,this.alignment_size),this._output.add_token(e.text))},l.prototype.indent=function(){this.indent_level++},l.prototype.get_full_indent=function(e){return(e=this.indent_level+(e||0))<1?"":this._output.get_indent_string(e)};var c=function(e,t){var n=null,r=null;return t.closed?("script"===e?n="text/javascript":"style"===e&&(n="text/css"),(n=function(e){for(var t=null,n=e.next;n.type!==a.EOF&&e.closed!==n;){if(n.type===a.ATTRIBUTE&&"type"===n.text){n.next&&n.next.type===a.EQUALS&&n.next.next&&n.next.next.type===a.VALUE&&(t=n.next.next.text);break}n=n.next}return t}(t)||n).search("text/css")>-1?r="css":n.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/)>-1?r="javascript":n.search(/(text|application|dojo)\/(x-)?(html)/)>-1?r="html":n.search(/test\/null/)>-1&&(r="null"),r):null};function f(e,t){return-1!==t.indexOf(e)}function d(e,t,n){this.parent=e||null,this.tag=t?t.tag_name:"",this.indent_level=n||0,this.parser_token=t||null}function p(e){this._printer=e,this._current_frame=null}function h(e,t,n,i){this._source_text=e||"",t=t||{},this._js_beautify=n,this._css_beautify=i,this._tag_stack=null;var o=new r(t,"html");this._options=o,this._is_wrap_attributes_force="force"===this._options.wrap_attributes.substr(0,"force".length),this._is_wrap_attributes_force_expand_multiline="force-expand-multiline"===this._options.wrap_attributes,this._is_wrap_attributes_force_aligned="force-aligned"===this._options.wrap_attributes,this._is_wrap_attributes_aligned_multiple="aligned-multiple"===this._options.wrap_attributes,this._is_wrap_attributes_preserve="preserve"===this._options.wrap_attributes.substr(0,"preserve".length),this._is_wrap_attributes_preserve_aligned="preserve-aligned"===this._options.wrap_attributes}p.prototype.get_parser_token=function(){return this._current_frame?this._current_frame.parser_token:null},p.prototype.record_tag=function(e){var t=new d(this._current_frame,e,this._printer.indent_level);this._current_frame=t},p.prototype._try_pop_frame=function(e){var t=null;return e&&(t=e.parser_token,this._printer.indent_level=e.indent_level,this._current_frame=e.parent),t},p.prototype._get_frame=function(e,t){for(var n=this._current_frame;n&&-1===e.indexOf(n.tag);){if(t&&-1!==t.indexOf(n.tag)){n=null;break}n=n.parent}return n},p.prototype.try_pop=function(e,t){var n=this._get_frame([e],t);return this._try_pop_frame(n)},p.prototype.indent_to_tag=function(e){var t=this._get_frame(e);t&&(this._printer.indent_level=t.indent_level)},h.prototype.beautify=function(){if(this._options.disabled)return this._source_text;var e=this._source_text,t=this._options.eol;"auto"===this._options.eol&&(t="\n",e&&s.test(e)&&(t=e.match(s)[0]));var n=(e=e.replace(u,"\n")).match(/^[\t ]*/)[0],r={text:"",type:""},i=new _,c=new l(this._options,n),f=new o(e,this._options).tokenize();this._tag_stack=new p(c);for(var d=null,h=f.next();h.type!==a.EOF;)h.type===a.TAG_OPEN||h.type===a.COMMENT?i=d=this._handle_tag_open(c,h,i,r):h.type===a.ATTRIBUTE||h.type===a.EQUALS||h.type===a.VALUE||h.type===a.TEXT&&!i.tag_complete?d=this._handle_inside_tag(c,h,i,f):h.type===a.TAG_CLOSE?d=this._handle_tag_close(c,h,i):h.type===a.TEXT?d=this._handle_text(c,h,i):c.add_raw_token(h),r=d,h=f.next();return c._output.get_code(t)},h.prototype._handle_tag_close=function(e,t,n){var r={text:t.text,type:t.type};return e.alignment_size=0,n.tag_complete=!0,e.set_space_before_token(t.newlines||""!==t.whitespace_before,!0),n.is_unformatted?e.add_raw_token(t):("<"===n.tag_start_char&&(e.set_space_before_token("/"===t.text[0],!0),this._is_wrap_attributes_force_expand_multiline&&n.has_wrapped_attrs&&e.print_newline(!1)),e.print_token(t)),!n.indent_content||n.is_unformatted||n.is_content_unformatted||(e.indent(),n.indent_content=!1),n.is_inline_element||n.is_unformatted||n.is_content_unformatted||e.set_wrap_point(),r},h.prototype._handle_inside_tag=function(e,t,n,r){var i=n.has_wrapped_attrs,o={text:t.text,type:t.type};if(e.set_space_before_token(t.newlines||""!==t.whitespace_before,!0),n.is_unformatted)e.add_raw_token(t);else if("{"===n.tag_start_char&&t.type===a.TEXT)e.print_preserved_newlines(t)?(t.newlines=0,e.add_raw_token(t)):e.print_token(t);else{if(t.type===a.ATTRIBUTE?(e.set_space_before_token(!0),n.attr_count+=1):(t.type===a.EQUALS||t.type===a.VALUE&&t.previous.type===a.EQUALS)&&e.set_space_before_token(!1),t.type===a.ATTRIBUTE&&"<"===n.tag_start_char&&((this._is_wrap_attributes_preserve||this._is_wrap_attributes_preserve_aligned)&&(e.traverse_whitespace(t),i=i||0!==t.newlines),this._is_wrap_attributes_force)){var s=n.attr_count>1;if(this._is_wrap_attributes_force_expand_multiline&&1===n.attr_count){var u,l=!0,c=0;do{if((u=r.peek(c)).type===a.ATTRIBUTE){l=!1;break}c+=1}while(c<4&&u.type!==a.EOF&&u.type!==a.TAG_CLOSE);s=!l}s&&(e.print_newline(!1),i=!0)}e.print_token(t),i=i||e.previous_token_wrapped(),n.has_wrapped_attrs=i}return o},h.prototype._handle_text=function(e,t,n){var r={text:t.text,type:"TK_CONTENT"};return n.custom_beautifier_name?this._print_custom_beatifier_text(e,t,n):n.is_unformatted||n.is_content_unformatted?e.add_raw_token(t):(e.traverse_whitespace(t),e.print_token(t)),r},h.prototype._print_custom_beatifier_text=function(e,t,n){var r=this;if(""!==t.text){var i,o=t.text,a=1,s="",u="";"javascript"===n.custom_beautifier_name&&"function"==typeof this._js_beautify?i=this._js_beautify:"css"===n.custom_beautifier_name&&"function"==typeof this._css_beautify?i=this._css_beautify:"html"===n.custom_beautifier_name&&(i=function(e,t){return new h(e,t,r._js_beautify,r._css_beautify).beautify()}),"keep"===this._options.indent_scripts?a=0:"separate"===this._options.indent_scripts&&(a=-e.indent_level);var l=e.get_full_indent(a);if(o=o.replace(/\n[ \t]*$/,""),"html"!==n.custom_beautifier_name&&"<"===o[0]&&o.match(/^(<!--|<!\[CDATA\[)/)){var c=/^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(o);if(!c)return void e.add_raw_token(t);s=l+c[1]+"\n",o=c[4],c[5]&&(u=l+c[5]),o=o.replace(/\n[ \t]*$/,""),(c[2]||-1!==c[3].indexOf("\n"))&&(c=c[3].match(/[ \t]+$/))&&(t.whitespace_before=c[0])}if(o)if(i){var f=function(){this.eol="\n"};f.prototype=this._options.raw_options,o=i(l+o,new f)}else{var d=t.whitespace_before;d&&(o=o.replace(new RegExp("\n("+d+")?","g"),"\n")),o=l+o.replace(/\n/g,"\n"+l)}s&&(o=o?s+o+"\n"+u:s+u),e.print_newline(!1),o&&(t.text=o,t.whitespace_before="",t.newlines=0,e.add_raw_token(t),e.print_newline(!0))}},h.prototype._handle_tag_open=function(e,t,n,r){var i=this._get_tag_open_token(t);return!n.is_unformatted&&!n.is_content_unformatted||n.is_empty_element||t.type!==a.TAG_OPEN||0!==t.text.indexOf("</")?(e.traverse_whitespace(t),this._set_tag_position(e,t,i,n,r),i.is_inline_element||e.set_wrap_point(),e.print_token(t)):(e.add_raw_token(t),i.start_tag_token=this._tag_stack.try_pop(i.tag_name)),(this._is_wrap_attributes_force_aligned||this._is_wrap_attributes_aligned_multiple||this._is_wrap_attributes_preserve_aligned)&&(i.alignment_size=t.text.length+1),i.tag_complete||i.is_unformatted||(e.alignment_size=i.alignment_size),i};var _=function(e,t){var n;this.parent=e||null,this.text="",this.type="TK_TAG_OPEN",this.tag_name="",this.is_inline_element=!1,this.is_unformatted=!1,this.is_content_unformatted=!1,this.is_empty_element=!1,this.is_start_tag=!1,this.is_end_tag=!1,this.indent_content=!1,this.multiline_content=!1,this.custom_beautifier_name=null,this.start_tag_token=null,this.attr_count=0,this.has_wrapped_attrs=!1,this.alignment_size=0,this.tag_complete=!1,this.tag_start_char="",this.tag_check="",t?(this.tag_start_char=t.text[0],this.text=t.text,"<"===this.tag_start_char?(n=t.text.match(/^<([^\s>]*)/),this.tag_check=n?n[1]:""):(n=t.text.match(/^{{(?:[\^]|#\*?)?([^\s}]+)/),this.tag_check=n?n[1]:"","{{#>"===t.text&&">"===this.tag_check&&null!==t.next&&(this.tag_check=t.next.text)),this.tag_check=this.tag_check.toLowerCase(),t.type===a.COMMENT&&(this.tag_complete=!0),this.is_start_tag="/"!==this.tag_check.charAt(0),this.tag_name=this.is_start_tag?this.tag_check:this.tag_check.substr(1),this.is_end_tag=!this.is_start_tag||t.closed&&"/>"===t.closed.text,this.is_end_tag=this.is_end_tag||"{"===this.tag_start_char&&(this.text.length<3||/[^#\^]/.test(this.text.charAt(2)))):this.tag_complete=!0};h.prototype._get_tag_open_token=function(e){var t=new _(this._tag_stack.get_parser_token(),e);return t.alignment_size=this._options.wrap_attributes_indent_size,t.is_end_tag=t.is_end_tag||f(t.tag_check,this._options.void_elements),t.is_empty_element=t.tag_complete||t.is_start_tag&&t.is_end_tag,t.is_unformatted=!t.tag_complete&&f(t.tag_check,this._options.unformatted),t.is_content_unformatted=!t.is_empty_element&&f(t.tag_check,this._options.content_unformatted),t.is_inline_element=f(t.tag_name,this._options.inline)||"{"===t.tag_start_char,t},h.prototype._set_tag_position=function(e,t,n,r,i){if(n.is_empty_element||(n.is_end_tag?n.start_tag_token=this._tag_stack.try_pop(n.tag_name):(this._do_optional_end_element(n)&&(n.is_inline_element||e.print_newline(!1)),this._tag_stack.record_tag(n),"script"!==n.tag_name&&"style"!==n.tag_name||n.is_unformatted||n.is_content_unformatted||(n.custom_beautifier_name=c(n.tag_check,t)))),f(n.tag_check,this._options.extra_liners)&&(e.print_newline(!1),e._output.just_added_blankline()||e.print_newline(!0)),n.is_empty_element)"{"===n.tag_start_char&&"else"===n.tag_check&&(this._tag_stack.indent_to_tag(["if","unless","each"]),n.indent_content=!0,e.current_line_has_match(/{{#if/)||e.print_newline(!1)),"!--"===n.tag_name&&i.type===a.TAG_CLOSE&&r.is_end_tag&&-1===n.text.indexOf("\n")||(n.is_inline_element||n.is_unformatted||e.print_newline(!1),this._calcluate_parent_multiline(e,n));else if(n.is_end_tag){var o=!1;o=(o=n.start_tag_token&&n.start_tag_token.multiline_content)||!n.is_inline_element&&!(r.is_inline_element||r.is_unformatted)&&!(i.type===a.TAG_CLOSE&&n.start_tag_token===r)&&"TK_CONTENT"!==i.type,(n.is_content_unformatted||n.is_unformatted)&&(o=!1),o&&e.print_newline(!1)}else n.indent_content=!n.custom_beautifier_name,"<"===n.tag_start_char&&("html"===n.tag_name?n.indent_content=this._options.indent_inner_html:"head"===n.tag_name?n.indent_content=this._options.indent_head_inner_html:"body"===n.tag_name&&(n.indent_content=this._options.indent_body_inner_html)),n.is_inline_element||n.is_unformatted||"TK_CONTENT"===i.type&&!n.is_content_unformatted||e.print_newline(!1),this._calcluate_parent_multiline(e,n)},h.prototype._calcluate_parent_multiline=function(e,t){!t.parent||!e._output.just_added_newline()||(t.is_inline_element||t.is_unformatted)&&t.parent.is_inline_element||(t.parent.multiline_content=!0)};var m=["address","article","aside","blockquote","details","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","main","nav","ol","p","pre","section","table","ul"],g=["a","audio","del","ins","map","noscript","video"];h.prototype._do_optional_end_element=function(e){var t=null;if(!e.is_empty_element&&e.is_start_tag&&e.parent){if("body"===e.tag_name)t=t||this._tag_stack.try_pop("head");else if("li"===e.tag_name)t=t||this._tag_stack.try_pop("li",["ol","ul"]);else if("dd"===e.tag_name||"dt"===e.tag_name)t=(t=t||this._tag_stack.try_pop("dt",["dl"]))||this._tag_stack.try_pop("dd",["dl"]);else if("p"===e.parent.tag_name&&-1!==m.indexOf(e.tag_name)){var n=e.parent.parent;n&&-1!==g.indexOf(n.tag_name)||(t=t||this._tag_stack.try_pop("p"))}else"rp"===e.tag_name||"rt"===e.tag_name?t=(t=t||this._tag_stack.try_pop("rt",["ruby","rtc"]))||this._tag_stack.try_pop("rp",["ruby","rtc"]):"optgroup"===e.tag_name?t=t||this._tag_stack.try_pop("optgroup",["select"]):"option"===e.tag_name?t=t||this._tag_stack.try_pop("option",["select","datalist","optgroup"]):"colgroup"===e.tag_name?t=t||this._tag_stack.try_pop("caption",["table"]):"thead"===e.tag_name?t=(t=t||this._tag_stack.try_pop("caption",["table"]))||this._tag_stack.try_pop("colgroup",["table"]):"tbody"===e.tag_name||"tfoot"===e.tag_name?t=(t=(t=(t=t||this._tag_stack.try_pop("caption",["table"]))||this._tag_stack.try_pop("colgroup",["table"]))||this._tag_stack.try_pop("thead",["table"]))||this._tag_stack.try_pop("tbody",["table"]):"tr"===e.tag_name?t=(t=(t=t||this._tag_stack.try_pop("caption",["table"]))||this._tag_stack.try_pop("colgroup",["table"]))||this._tag_stack.try_pop("tr",["table","thead","tbody","tfoot"]):"th"!==e.tag_name&&"td"!==e.tag_name||(t=(t=t||this._tag_stack.try_pop("td",["table","thead","tbody","tfoot","tr"]))||this._tag_stack.try_pop("th",["table","thead","tbody","tfoot","tr"]));return e.parent=this._tag_stack.get_parser_token(),t}},e.exports.Beautifier=h},function(e,t,n){"use strict";var r=n(6).Options;function i(e){r.call(this,e,"html"),1===this.templating.length&&"auto"===this.templating[0]&&(this.templating=["django","erb","handlebars","php"]),this.indent_inner_html=this._get_boolean("indent_inner_html"),this.indent_body_inner_html=this._get_boolean("indent_body_inner_html",!0),this.indent_head_inner_html=this._get_boolean("indent_head_inner_html",!0),this.indent_handlebars=this._get_boolean("indent_handlebars",!0),this.wrap_attributes=this._get_selection("wrap_attributes",["auto","force","force-aligned","force-expand-multiline","aligned-multiple","preserve","preserve-aligned"]),this.wrap_attributes_indent_size=this._get_number("wrap_attributes_indent_size",this.indent_size),this.extra_liners=this._get_array("extra_liners",["head","body","/html"]),this.inline=this._get_array("inline",["a","abbr","area","audio","b","bdi","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","keygen","label","map","mark","math","meter","noscript","object","output","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","template","textarea","time","u","var","video","wbr","text","acronym","big","strike","tt"]),this.void_elements=this._get_array("void_elements",["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr","!doctype","?xml","basefont","isindex"]),this.unformatted=this._get_array("unformatted",[]),this.content_unformatted=this._get_array("content_unformatted",["pre","textarea"]),this.unformatted_content_delimiter=this._get_characters("unformatted_content_delimiter"),this.indent_scripts=this._get_selection("indent_scripts",["normal","keep","separate"])}i.prototype=new r,e.exports.Options=i},function(e,t,n){"use strict";var r=n(9).Tokenizer,i=n(9).TOKEN,o=n(13).Directives,a=n(14).TemplatablePattern,s=n(12).Pattern,u={TAG_OPEN:"TK_TAG_OPEN",TAG_CLOSE:"TK_TAG_CLOSE",ATTRIBUTE:"TK_ATTRIBUTE",EQUALS:"TK_EQUALS",VALUE:"TK_VALUE",COMMENT:"TK_COMMENT",TEXT:"TK_TEXT",UNKNOWN:"TK_UNKNOWN",START:i.START,RAW:i.RAW,EOF:i.EOF},l=new o(/<\!--/,/-->/),c=function(e,t){r.call(this,e,t),this._current_tag_name="";var n=new a(this._input).read_options(this._options),i=new s(this._input);if(this.__patterns={word:n.until(/[\n\r\t <]/),single_quote:n.until_after(/'/),double_quote:n.until_after(/"/),attribute:n.until(/[\n\r\t =>]|\/>/),element_name:n.until(/[\n\r\t >\/]/),handlebars_comment:i.starting_with(/{{!--/).until_after(/--}}/),handlebars:i.starting_with(/{{/).until_after(/}}/),handlebars_open:i.until(/[\n\r\t }]/),handlebars_raw_close:i.until(/}}/),comment:i.starting_with(/<!--/).until_after(/-->/),cdata:i.starting_with(/<!\[CDATA\[/).until_after(/]]>/),conditional_comment:i.starting_with(/<!\[/).until_after(/]>/),processing:i.starting_with(/<\?/).until_after(/\?>/)},this._options.indent_handlebars&&(this.__patterns.word=this.__patterns.word.exclude("handlebars")),this._unformatted_content_delimiter=null,this._options.unformatted_content_delimiter){var o=this._input.get_literal_regexp(this._options.unformatted_content_delimiter);this.__patterns.unformatted_content_delimiter=i.matching(o).until_after(o)}};(c.prototype=new r)._is_comment=function(e){return!1},c.prototype._is_opening=function(e){return e.type===u.TAG_OPEN},c.prototype._is_closing=function(e,t){return e.type===u.TAG_CLOSE&&t&&((">"===e.text||"/>"===e.text)&&"<"===t.text[0]||"}}"===e.text&&"{"===t.text[0]&&"{"===t.text[1])},c.prototype._reset=function(){this._current_tag_name=""},c.prototype._get_next_token=function(e,t){var n=null;this._readWhitespace();var r=this._input.peek();return null===r?this._create_token(u.EOF,""):n=(n=(n=(n=(n=(n=(n=(n=(n=n||this._read_open_handlebars(r,t))||this._read_attribute(r,e,t))||this._read_close(r,t))||this._read_raw_content(r,e,t))||this._read_content_word(r))||this._read_comment_or_cdata(r))||this._read_processing(r))||this._read_open(r,t))||this._create_token(u.UNKNOWN,this._input.next())},c.prototype._read_comment_or_cdata=function(e){var t=null,n=null,r=null;return"<"===e&&("!"===this._input.peek(1)&&((n=this.__patterns.comment.read())?(r=l.get_directives(n))&&"start"===r.ignore&&(n+=l.readIgnored(this._input)):n=this.__patterns.cdata.read()),n&&((t=this._create_token(u.COMMENT,n)).directives=r)),t},c.prototype._read_processing=function(e){var t=null,n=null;if("<"===e){var r=this._input.peek(1);"!"!==r&&"?"!==r||(n=(n=this.__patterns.conditional_comment.read())||this.__patterns.processing.read()),n&&((t=this._create_token(u.COMMENT,n)).directives=null)}return t},c.prototype._read_open=function(e,t){var n=null,r=null;return t||"<"===e&&(n=this._input.next(),"/"===this._input.peek()&&(n+=this._input.next()),n+=this.__patterns.element_name.read(),r=this._create_token(u.TAG_OPEN,n)),r},c.prototype._read_open_handlebars=function(e,t){var n=null,r=null;return t||this._options.indent_handlebars&&"{"===e&&"{"===this._input.peek(1)&&("!"===this._input.peek(2)?(n=(n=this.__patterns.handlebars_comment.read())||this.__patterns.handlebars.read(),r=this._create_token(u.COMMENT,n)):(n=this.__patterns.handlebars_open.read(),r=this._create_token(u.TAG_OPEN,n))),r},c.prototype._read_close=function(e,t){var n=null,r=null;return t&&("<"===t.text[0]&&(">"===e||"/"===e&&">"===this._input.peek(1))?(n=this._input.next(),"/"===e&&(n+=this._input.next()),r=this._create_token(u.TAG_CLOSE,n)):"{"===t.text[0]&&"}"===e&&"}"===this._input.peek(1)&&(this._input.next(),this._input.next(),r=this._create_token(u.TAG_CLOSE,"}}"))),r},c.prototype._read_attribute=function(e,t,n){var r=null,i="";if(n&&"<"===n.text[0])if("="===e)r=this._create_token(u.EQUALS,this._input.next());else if('"'===e||"'"===e){var o=this._input.next();o+='"'===e?this.__patterns.double_quote.read():this.__patterns.single_quote.read(),r=this._create_token(u.VALUE,o)}else(i=this.__patterns.attribute.read())&&(r=t.type===u.EQUALS?this._create_token(u.VALUE,i):this._create_token(u.ATTRIBUTE,i));return r},c.prototype._is_content_unformatted=function(e){return-1===this._options.void_elements.indexOf(e)&&(-1!==this._options.content_unformatted.indexOf(e)||-1!==this._options.unformatted.indexOf(e))},c.prototype._read_raw_content=function(e,t,n){var r="";if(n&&"{"===n.text[0])r=this.__patterns.handlebars_raw_close.read();else if(t.type===u.TAG_CLOSE&&"<"===t.opened.text[0]&&"/"!==t.text[0]){var i=t.opened.text.substr(1).toLowerCase();if("script"===i||"style"===i){var o=this._read_comment_or_cdata(e);if(o)return o.type=u.TEXT,o;r=this._input.readUntil(new RegExp("</"+i+"[\\n\\r\\t ]*?>","ig"))}else this._is_content_unformatted(i)&&(r=this._input.readUntil(new RegExp("</"+i+"[\\n\\r\\t ]*?>","ig")))}return r?this._create_token(u.TEXT,r):null},c.prototype._read_content_word=function(e){var t="";if(this._options.unformatted_content_delimiter&&e===this._options.unformatted_content_delimiter[0]&&(t=this.__patterns.unformatted_content_delimiter.read()),t||(t=this.__patterns.word.read()),t)return this._create_token(u.TEXT,t)},e.exports.Tokenizer=c,e.exports.TOKEN=u}]),r=[n,n(45),n(46)],void 0===(i=function(e){var t=n(45),r=n(46);return{html_beautify:function(e,n){return o(e,n,t.js_beautify,r.css_beautify)}}}.apply(t,r))||(e.exports=i)},function(e,t,n){var r=n(3),i=n(192);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".solution-viewer{width:75%;margin:1em auto;background:#CCF;box-shadow:5px 5px #DDF}.solution-viewer .Collapsible .Collapsible__trigger{display:block;background:#AAF;text-align:center;font-size:2em;padding:0.2em;font-variant:small-caps;font-weight:bold;user-select:none;cursor:pointer}.solution-viewer .Collapsible .Collapsible__trigger:hover{background:#88F}.solution-viewer .Collapsible .Collapsible__contentInner{padding:1em}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MultiSolutionViewer=void 0;const i=r(n(0)),o=n(47),a=r(n(27)),s=n(77);class u extends i.default.Component{constructor(e){super(e)}render(){const e=this.props.solutions;if(e.length>1){const t=e.map(e=>({sourceCode:e.sourceCode,label:e.label}));return i.default.createElement("div",{className:"solution-viewer"},i.default.createElement(a.default,{trigger:i.default.createElement(i.default.Fragment,null,"solution"),transitionTime:100},i.default.createElement(o.TabbedSourceCodeViewer,null,t)))}if(1==e.length){const t=e[0].sourceCode;return i.default.createElement(s.SolutionViewer,{sourceCode:t})}return null}}t.MultiSolutionViewer=u},function(e,t,n){var r=n(3),i=n(195);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".tab-control>.tab-labels{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-end;margin-left:5px}.tab-control>.tab-labels>.tab-label{background:#AAA;padding:5px 1em;margin:0em -0.2em;cursor:default;user-select:none;font-variant:small-caps}.tab-control>.tab-labels>.tab-label:hover{background:#CCC}.tab-control>.tab-labels>.tab-label.selected{padding-bottom:8px;z-index:1;color:white;background:#AAF}.tab-control>.container{border-top:1px solid black;background:#AAA;padding:0.5em}\n",""]),e.exports=t},function(e,t,n){var r=n(3),i=n(197);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".validated-input{text-align:center;font-family:'Courier New', Courier, monospace}.validated-input.correct{background:#AFA}.validated-input.incorrect{background:#FAA}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ArrayViewer=void 0;const i=r(n(0)),o=n(13);n(199);class a extends i.default.Component{constructor(e){super(e)}render(){const e=this.props.object,t=Object.keys(e);return 0===t.length?this.renderEmptyObject():this.renderNonEmptyObject(t)}get htmlClasses(){return["array-viewer",...this.props.classNames||[]]}renderEmptyObject(){return i.default.createElement("table",{className:this.htmlClasses.join(" ")},i.default.createElement("tr",null,i.default.createElement("td",{className:"empty"},"Empty")))}renderNonEmptyObject(e){return i.default.createElement("table",{className:this.htmlClasses.join(" ")},this.renderRows(e))}renderRows(e){return e.map((e,t)=>{const n=this.props.object[e];return i.default.createElement("tr",{key:"row-"+t},this.renderRow(e,n))})}renderRow(e,t){return i.default.createElement(i.default.Fragment,null,i.default.createElement("td",{className:"key"},this.renderKey(e)),i.default.createElement("td",{className:"value"},this.renderValue(e,t)))}renderKey(e){return i.default.createElement(i.default.Fragment,null,e)}renderValue(e,t){const n=this.props.renderer||function(e,t){return i.default.createElement(i.default.Fragment,null,o.convertToString(t))};return i.default.createElement(i.default.Fragment,null,n(e,t))}}t.ArrayViewer=a},function(e,t,n){var r=n(3),i=n(200);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".array-viewer{font-size:0.75em;border-collapse:collapse;border:#AAA 2px solid;fill-opacity:0.8}.array-viewer>tr>td{background:#BBB;border:#AAA 1px solid;padding:0.2em 0.5em;min-width:2em}.array-viewer>tr>.key{font-variant:small-caps;text-align:center}.array-viewer>tr>.value{text-align:center;font-family:'Courier New', Courier, monospace}.array-viewer>tr>.empty{text-align:center;font-style:italic}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectViewer=void 0;const i=r(n(0)),o=n(13),a=r(n(2)),s=a.default.table`
    border-collapse: collapse;
    border: #888 1px solid;
`,u=a.default.td`
    border: #888 1px solid;
    padding: 0.2em 0.5em;

    &:first-child {
        background: #AAA;
    }
`,l=a.default(u)`
    font-variant: small-caps;
    text-align: right;
`,c=a.default(u)`
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
`,f=a.default(u)`
    text-align: center;
    font-style: italic;
`;class d extends i.default.Component{constructor(e){super(e)}render(){const e=this.props.object,t=Object.keys(e);return 0===t.length?this.renderEmptyObject():this.renderNonEmptyObject(t)}renderEmptyObject(){return i.default.createElement(s,{className:this.props.className},i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement(f,null,"Empty"))))}renderNonEmptyObject(e){return i.default.createElement(s,{className:this.props.className},i.default.createElement("tbody",null,this.renderRows(e)))}renderRows(e){return e.map((e,t)=>{const n=this.props.object[e];return i.default.createElement("tr",{key:"row-"+t},this.renderRow(e,n))})}renderRow(e,t){return i.default.createElement(i.default.Fragment,null,i.default.createElement(l,null,this.renderKey(e)),i.default.createElement(c,null,this.renderValue(e,t)))}renderKey(e){return i.default.createElement(i.default.Fragment,null,e)}renderValue(e,t){const n=this.props.renderer||function(e,t){return i.default.createElement(i.default.Fragment,null,o.convertToString(t))};return i.default.createElement(i.default.Fragment,null,n(e,t))}}t.ObjectViewer=d},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ExistingImplementations=void 0;const i=r(n(0)),o=r(n(2)),a=n(80),s=o.default.div`
    width: 80%;
    margin: 1em auto;
`;class u extends i.default.Component{render(){return i.default.createElement(s,{className:this.props.className},i.default.createElement(a.LanguageComparison,null,this.props.children))}}t.ExistingImplementations=u},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SvgColorGrid=void 0;const i=r(n(0));class o extends i.default.Component{constructor(e){super(e)}render(){const{gridWidth:e,gridHeight:t,blockSize:n,colorAt:r}=this.props,o=this.props.padding||2,a=[];for(let s=0;s!==t;++s)for(let t=0;t!==e;++t){const e=r(t,s);if(e){const r=`r${t}-${s}`,u=t*(n+o)+o,l=s*(n+o)+o,c=n,f=n,d=i.default.createElement("rect",{key:r,x:u,y:l,width:c,height:f,fill:e});a.push(d)}}const s=e*(n+o)+o,u=t*(n+o)+o;return i.default.createElement("svg",{width:s,height:u,className:this.props.className},a)}}t.SvgColorGrid=o},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.FunctionBased=t.RowBased=t.ColumnBased=void 0;var a=n(49);Object.defineProperty(t,"Form",{enumerable:!0,get:function(){return a.Form}});const s=o(n(50));t.ColumnBased=s;const u=o(n(50));t.RowBased=u;const l=o(n(207));t.FunctionBased=l},function(e,t,n){var r=n(3),i=n(206);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".form{margin:1em auto;border-collapse:collapse;border:1px solid black;box-shadow:5px 5px gray;background:#CCC}.form>tbody>tr>th{border-bottom:1px solid black;background:#AAA;padding:0em 1em;user-select:none;cursor:default}.form>tbody>tr>td{padding:0.25em 1em;text-align:center}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FormBuilder=t.Form=t.ReturnValue=t.Parameter=t.InputCase=void 0;const i=r(n(0)),o=n(50),a=n(42),s=n(9),u=n(13),l=n(16),c=n(82),f=n(22),d=n(11);class p{}t.InputCase=p;t.Parameter=class{render(e,t){return s.code(u.convertToString(e))}};t.ReturnValue=class{render(e,t){return s.code(u.convertToString(e))}};class h extends i.default.Component{constructor(e){super(e),this.functionInformation=l.parseFunction(e.func)}render(){return i.default.createElement(o.Form,{className:this.props.className,columns:this.columns,rows:this.rows})}get rows(){return this.props.inputCases.map(e=>this.createRow(e))}createRow(e){const t=l.callFunction(this.props.func,...e.args);return new class{get data(){return{fcr:t,meta:e.meta}}get blankColumns(){return e.blankColumns}}}get columns(){return[...Array.from(this.generateInputColumns()),...Array.from(this.generateReturnValueColumn()),...Array.from(this.generateOutputColumns())]}*generateInputColumns(){for(let e of d.range(0,this.functionInformation.parameterCount))yield this.createInputColumn(e)}createInputColumn(e){if(e<0||e>=this.functionInformation.parameterCount)throw new Error(`Invalid parameter index ${e}; should be between 0 and ${this.functionInformation.parameterCount}`);{const t=this,n=this.functionInformation.parameterNames[e],r=this.props.parameters[n];if(r)return new class{get name(){return h.nameInputParameter(n)}get header(){return i.default.createElement(i.default.Fragment,null,n)}validate(n,r){return c.evalm(r).caseOf({just:function(r){const i=n.fcr.argumentsBeforeCall.slice();i.splice(e,1,r);const o=new l.FunctionCallResults(t.props.func,i,n.fcr.argumentsAfterCall,n.fcr.returnValue),a=t.functionInformation.parameterNames.filter((n,r)=>{const i=t.props.parameters[n];return r===e&&!i.canBeModifiedByFunction});return t.functionInformation.verifyCall(o,a)},nothing:()=>!1})}render(t){return r.render(t.fcr.argumentsBeforeCall[e],t.meta)}};throw new Error("Missing information about parameter "+n)}}*generateReturnValueColumn(){if(this.props.returnValue){const e=this;yield new class{get name(){return h.nameReturnValue}get header(){return i.default.createElement(i.default.Fragment,null,"return value")}validate(e,t){const n=e.fcr.returnValue;return c.evalm(t).caseOf({just:e=>f.deepEqual(e,n),nothing:()=>!1})}render(t){return e.props.returnValue?e.props.returnValue.render(t.fcr.returnValue,t.meta):i.default.createElement(a.InlineCode,{content:u.convertToString(t.fcr.returnValue)})}}}}*generateOutputColumns(){for(let e of d.range(0,this.functionInformation.parameterCount)){const t=this.functionInformation.parameterNames[e],n=this.props.parameters[t];if(!n)throw new Error("Missing information about parameter "+t);n.canBeModifiedByFunction&&(yield this.createOutputColumn(e))}}createOutputColumn(e){if(e<0||e>=this.functionInformation.parameterCount)throw new Error(`Invalid parameter index ${e}; should be between 0 and ${this.functionInformation.parameterCount}`);{const t=this,n=t.functionInformation.parameterNames[e],r=t.props.parameters[n];if(r)return new class{get name(){return h.nameOutputParameter(n)}get header(){return i.default.createElement(i.default.Fragment,null,n)}validate(t,n){const r=t.fcr.argumentsAfterCall[e];return c.evalm(n).caseOf({just:e=>f.deepEqual(e,r),nothing:()=>!1})}render(t){return r.render(t.fcr.argumentsAfterCall[e],t.meta)}};throw new Error("Missing information about parameter "+n)}}static nameInputParameter(e){return`in<${e}>`}static nameOutputParameter(e){return`out<${e}>`}static get nameReturnValue(){return"return value"}}t.Form=h;t.FormBuilder=class{get className(){return"form"}get functionInformation(){return l.parseFunction(this.func)}forwardInputCase(e,t){const n=this;return new class extends p{get args(){return e}get meta(){return t}get blankColumns(){const e=[];n.returnValue&&e.push(h.nameReturnValue);for(let t of n.functionInformation.parameterNames){const r=n.parameters[t];if(!r)throw new Error("Missing information about parameter "+t);r.canBeModifiedByFunction&&e.push(h.nameOutputParameter(t))}return e}}}backwardInputCase(e,t,n){if(this.functionInformation.parameterWithNameExists(n)){return new class extends p{get args(){return e}get meta(){return t}get blankColumns(){return[h.nameInputParameter(n)]}}}throw new Error("Unknown parameter "+n)}build(){const e=this.func,t=this.parameters,n=this.returnValue,r=Array.from(this.generateCases());return i.default.createElement(h,Object.assign({className:this.className},{func:e,parameters:t,returnValue:n,inputCases:r}))}}},function(e,t,n){(function(e,n){var r="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",a="[object Map]",s="[object Set]",u=/\w*$/,l=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,f={};f[r]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object DataView]"]=f["[object Boolean]"]=f["[object Date]"]=f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f[a]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f[s]=f["[object String]"]=f["[object Symbol]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Error]"]=f[i]=f["[object WeakMap]"]=!1;var d="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,h=d||p||Function("return this")(),_=t&&!t.nodeType&&t,m=_&&"object"==typeof n&&n&&!n.nodeType&&n,g=m&&m.exports===_;function v(e,t){return e.set(t[0],t[1]),e}function y(e,t){return e.add(t),e}function b(e,t,n,r){var i=-1,o=e?e.length:0;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function w(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function x(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function k(e,t){return function(n){return e(t(n))}}function C(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}var S,E=Array.prototype,T=Function.prototype,O=Object.prototype,M=h["__core-js_shared__"],P=(S=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",j=T.toString,A=O.hasOwnProperty,N=O.toString,D=RegExp("^"+j.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),L=g?h.Buffer:void 0,R=h.Symbol,I=h.Uint8Array,F=k(Object.getPrototypeOf,Object),z=Object.create,W=O.propertyIsEnumerable,B=E.splice,V=Object.getOwnPropertySymbols,U=L?L.isBuffer:void 0,H=k(Object.keys,Object),$=me(h,"DataView"),q=me(h,"Map"),K=me(h,"Promise"),G=me(h,"Set"),X=me(h,"WeakMap"),Q=me(Object,"create"),Y=we($),J=we(q),Z=we(K),ee=we(G),te=we(X),ne=R?R.prototype:void 0,re=ne?ne.valueOf:void 0;function ie(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function oe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ae(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function se(e){this.__data__=new oe(e)}function ue(e,t){var n=ke(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ce(e)}(e)&&A.call(e,"callee")&&(!W.call(e,"callee")||N.call(e)==r)}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],i=n.length,o=!!i;for(var a in e)!t&&!A.call(e,a)||o&&("length"==a||ye(a,i))||n.push(a);return n}function le(e,t,n){var r=e[t];A.call(e,t)&&xe(r,n)&&(void 0!==n||t in e)||(e[t]=n)}function ce(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1}function fe(e,t,n,l,c,d,p){var h;if(l&&(h=d?l(e,c,d,p):l(e)),void 0!==h)return h;if(!Te(e))return e;var _=ke(e);if(_){if(h=function(e){var t=e.length,n=e.constructor(t);t&&"string"==typeof e[0]&&A.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!t)return function(e,t){var n=-1,r=e.length;t||(t=Array(r));for(;++n<r;)t[n]=e[n];return t}(e,h)}else{var m=ve(e),g=m==i||m==o;if(Se(e))return function(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}(e,t);if("[object Object]"==m||m==r||g&&!d){if(w(e))return d?e:{};if(h=function(e){return"function"!=typeof e.constructor||be(e)?{}:(t=F(e),Te(t)?z(t):{});var t}(g?{}:e),!t)return function(e,t){return he(e,ge(e),t)}(e,function(e,t){return e&&he(t,Oe(t),e)}(h,e))}else{if(!f[m])return d?e:{};h=function(e,t,n,r){var i=e.constructor;switch(t){case"[object ArrayBuffer]":return pe(e);case"[object Boolean]":case"[object Date]":return new i(+e);case"[object DataView]":return function(e,t){var n=t?pe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var n=t?pe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}(e,r);case a:return function(e,t,n){return b(t?n(x(e),!0):x(e),v,new e.constructor)}(e,r,n);case"[object Number]":case"[object String]":return new i(e);case"[object RegExp]":return function(e){var t=new e.constructor(e.source,u.exec(e));return t.lastIndex=e.lastIndex,t}(e);case s:return function(e,t,n){return b(t?n(C(e),!0):C(e),y,new e.constructor)}(e,r,n);case"[object Symbol]":return o=e,re?Object(re.call(o)):{}}var o}(e,m,fe,t)}}p||(p=new se);var k=p.get(e);if(k)return k;if(p.set(e,h),!_)var S=n?function(e){return function(e,t,n){var r=t(e);return ke(e)?r:function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}(r,n(e))}(e,Oe,ge)}(e):Oe(e);return function(e,t){for(var n=-1,r=e?e.length:0;++n<r&&!1!==t(e[n],n,e););}(S||e,(function(r,i){S&&(r=e[i=r]),le(h,i,fe(r,t,n,l,i,e,p))})),h}function de(e){return!(!Te(e)||(t=e,P&&P in t))&&(Ee(e)||w(e)?D:l).test(we(e));var t}function pe(e){var t=new e.constructor(e.byteLength);return new I(t).set(new I(e)),t}function he(e,t,n,r){n||(n={});for(var i=-1,o=t.length;++i<o;){var a=t[i],s=r?r(n[a],e[a],a,n,e):void 0;le(n,a,void 0===s?e[a]:s)}return n}function _e(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function me(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return de(n)?n:void 0}ie.prototype.clear=function(){this.__data__=Q?Q(null):{}},ie.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},ie.prototype.get=function(e){var t=this.__data__;if(Q){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return A.call(t,e)?t[e]:void 0},ie.prototype.has=function(e){var t=this.__data__;return Q?void 0!==t[e]:A.call(t,e)},ie.prototype.set=function(e,t){return this.__data__[e]=Q&&void 0===t?"__lodash_hash_undefined__":t,this},oe.prototype.clear=function(){this.__data__=[]},oe.prototype.delete=function(e){var t=this.__data__,n=ce(t,e);return!(n<0)&&(n==t.length-1?t.pop():B.call(t,n,1),!0)},oe.prototype.get=function(e){var t=this.__data__,n=ce(t,e);return n<0?void 0:t[n][1]},oe.prototype.has=function(e){return ce(this.__data__,e)>-1},oe.prototype.set=function(e,t){var n=this.__data__,r=ce(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},ae.prototype.clear=function(){this.__data__={hash:new ie,map:new(q||oe),string:new ie}},ae.prototype.delete=function(e){return _e(this,e).delete(e)},ae.prototype.get=function(e){return _e(this,e).get(e)},ae.prototype.has=function(e){return _e(this,e).has(e)},ae.prototype.set=function(e,t){return _e(this,e).set(e,t),this},se.prototype.clear=function(){this.__data__=new oe},se.prototype.delete=function(e){return this.__data__.delete(e)},se.prototype.get=function(e){return this.__data__.get(e)},se.prototype.has=function(e){return this.__data__.has(e)},se.prototype.set=function(e,t){var n=this.__data__;if(n instanceof oe){var r=n.__data__;if(!q||r.length<199)return r.push([e,t]),this;n=this.__data__=new ae(r)}return n.set(e,t),this};var ge=V?k(V,Object):function(){return[]},ve=function(e){return N.call(e)};function ye(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||c.test(e))&&e>-1&&e%1==0&&e<t}function be(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||O)}function we(e){if(null!=e){try{return j.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function xe(e,t){return e===t||e!=e&&t!=t}($&&"[object DataView]"!=ve(new $(new ArrayBuffer(1)))||q&&ve(new q)!=a||K&&"[object Promise]"!=ve(K.resolve())||G&&ve(new G)!=s||X&&"[object WeakMap]"!=ve(new X))&&(ve=function(e){var t=N.call(e),n="[object Object]"==t?e.constructor:void 0,r=n?we(n):void 0;if(r)switch(r){case Y:return"[object DataView]";case J:return a;case Z:return"[object Promise]";case ee:return s;case te:return"[object WeakMap]"}return t});var ke=Array.isArray;function Ce(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!Ee(e)}var Se=U||function(){return!1};function Ee(e){var t=Te(e)?N.call(e):"";return t==i||t==o}function Te(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Oe(e){return Ce(e)?ue(e):function(e){if(!be(e))return H(e);var t=[];for(var n in Object(e))A.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}n.exports=function(e){return fe(e,!0,!0)}}).call(this,n(44),n(81)(e))},function(e,t,n){(function(e,n){var r="[object Arguments]",i="[object Map]",o="[object Object]",a="[object Set]",s=/^\[object .+?Constructor\]$/,u=/^(?:0|[1-9]\d*)$/,l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l["[object Function]"]=l[i]=l["[object Number]"]=l[o]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object WeakMap]"]=!1;var c="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,d=c||f||Function("return this")(),p=t&&!t.nodeType&&t,h=p&&"object"==typeof n&&n&&!n.nodeType&&n,_=h&&h.exports===p,m=_&&c.process,g=function(){try{return m&&m.binding&&m.binding("util")}catch(e){}}(),v=g&&g.isTypedArray;function y(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function w(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}var x,k,C,S=Array.prototype,E=Function.prototype,T=Object.prototype,O=d["__core-js_shared__"],M=E.toString,P=T.hasOwnProperty,j=(x=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",A=T.toString,N=RegExp("^"+M.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=_?d.Buffer:void 0,L=d.Symbol,R=d.Uint8Array,I=T.propertyIsEnumerable,F=S.splice,z=L?L.toStringTag:void 0,W=Object.getOwnPropertySymbols,B=D?D.isBuffer:void 0,V=(k=Object.keys,C=Object,function(e){return k(C(e))}),U=ge(d,"DataView"),H=ge(d,"Map"),$=ge(d,"Promise"),q=ge(d,"Set"),K=ge(d,"WeakMap"),G=ge(Object,"create"),X=we(U),Q=we(H),Y=we($),J=we(q),Z=we(K),ee=L?L.prototype:void 0,te=ee?ee.valueOf:void 0;function ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function oe(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ie;++t<n;)this.add(e[t])}function ae(e){var t=this.__data__=new re(e);this.size=t.size}function se(e,t){var n=Ce(e),r=!n&&ke(e),i=!n&&!r&&Se(e),o=!n&&!r&&!i&&Pe(e),a=n||r||i||o,s=a?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],u=s.length;for(var l in e)!t&&!P.call(e,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||be(l,u))||s.push(l);return s}function ue(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1}function le(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?function(e){var t=P.call(e,z),n=e[z];try{e[z]=void 0;var r=!0}catch(e){}var i=A.call(e);r&&(t?e[z]=n:delete e[z]);return i}(e):function(e){return A.call(e)}(e)}function ce(e){return Me(e)&&le(e)==r}function fe(e,t,n,s,u){return e===t||(null==e||null==t||!Me(e)&&!Me(t)?e!=e&&t!=t:function(e,t,n,s,u,l){var c=Ce(e),f=Ce(t),d=c?"[object Array]":ye(e),p=f?"[object Array]":ye(t),h=(d=d==r?o:d)==o,_=(p=p==r?o:p)==o,m=d==p;if(m&&Se(e)){if(!Se(t))return!1;c=!0,h=!1}if(m&&!h)return l||(l=new ae),c||Pe(e)?he(e,t,n,s,u,l):function(e,t,n,r,o,s,u){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!s(new R(e),new R(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return xe(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case i:var l=b;case a:var c=1&r;if(l||(l=w),e.size!=t.size&&!c)return!1;var f=u.get(e);if(f)return f==t;r|=2,u.set(e,t);var d=he(l(e),l(t),r,o,s,u);return u.delete(e),d;case"[object Symbol]":if(te)return te.call(e)==te.call(t)}return!1}(e,t,d,n,s,u,l);if(!(1&n)){var g=h&&P.call(e,"__wrapped__"),v=_&&P.call(t,"__wrapped__");if(g||v){var y=g?e.value():e,x=v?t.value():t;return l||(l=new ae),u(y,x,n,s,l)}}if(!m)return!1;return l||(l=new ae),function(e,t,n,r,i,o){var a=1&n,s=_e(e),u=s.length,l=_e(t).length;if(u!=l&&!a)return!1;var c=u;for(;c--;){var f=s[c];if(!(a?f in t:P.call(t,f)))return!1}var d=o.get(e);if(d&&o.get(t))return d==t;var p=!0;o.set(e,t),o.set(t,e);var h=a;for(;++c<u;){f=s[c];var _=e[f],m=t[f];if(r)var g=a?r(m,_,f,t,e,o):r(_,m,f,e,t,o);if(!(void 0===g?_===m||i(_,m,n,r,o):g)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(p=!1)}return o.delete(e),o.delete(t),p}(e,t,n,s,u,l)}(e,t,n,s,fe,u))}function de(e){return!(!Oe(e)||function(e){return!!j&&j in e}(e))&&(Ee(e)?N:s).test(we(e))}function pe(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||T,t!==r)return V(e);var t,n,r,i=[];for(var o in Object(e))P.call(e,o)&&"constructor"!=o&&i.push(o);return i}function he(e,t,n,r,i,o){var a=1&n,s=e.length,u=t.length;if(s!=u&&!(a&&u>s))return!1;var l=o.get(e);if(l&&o.get(t))return l==t;var c=-1,f=!0,d=2&n?new oe:void 0;for(o.set(e,t),o.set(t,e);++c<s;){var p=e[c],h=t[c];if(r)var _=a?r(h,p,c,t,e,o):r(p,h,c,e,t,o);if(void 0!==_){if(_)continue;f=!1;break}if(d){if(!y(t,(function(e,t){if(a=t,!d.has(a)&&(p===e||i(p,e,n,r,o)))return d.push(t);var a}))){f=!1;break}}else if(p!==h&&!i(p,h,n,r,o)){f=!1;break}}return o.delete(e),o.delete(t),f}function _e(e){return function(e,t,n){var r=t(e);return Ce(e)?r:function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}(r,n(e))}(e,je,ve)}function me(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function ge(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return de(n)?n:void 0}ne.prototype.clear=function(){this.__data__=G?G(null):{},this.size=0},ne.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ne.prototype.get=function(e){var t=this.__data__;if(G){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return P.call(t,e)?t[e]:void 0},ne.prototype.has=function(e){var t=this.__data__;return G?void 0!==t[e]:P.call(t,e)},ne.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=G&&void 0===t?"__lodash_hash_undefined__":t,this},re.prototype.clear=function(){this.__data__=[],this.size=0},re.prototype.delete=function(e){var t=this.__data__,n=ue(t,e);return!(n<0)&&(n==t.length-1?t.pop():F.call(t,n,1),--this.size,!0)},re.prototype.get=function(e){var t=this.__data__,n=ue(t,e);return n<0?void 0:t[n][1]},re.prototype.has=function(e){return ue(this.__data__,e)>-1},re.prototype.set=function(e,t){var n=this.__data__,r=ue(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},ie.prototype.clear=function(){this.size=0,this.__data__={hash:new ne,map:new(H||re),string:new ne}},ie.prototype.delete=function(e){var t=me(this,e).delete(e);return this.size-=t?1:0,t},ie.prototype.get=function(e){return me(this,e).get(e)},ie.prototype.has=function(e){return me(this,e).has(e)},ie.prototype.set=function(e,t){var n=me(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},oe.prototype.add=oe.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},oe.prototype.has=function(e){return this.__data__.has(e)},ae.prototype.clear=function(){this.__data__=new re,this.size=0},ae.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},ae.prototype.get=function(e){return this.__data__.get(e)},ae.prototype.has=function(e){return this.__data__.has(e)},ae.prototype.set=function(e,t){var n=this.__data__;if(n instanceof re){var r=n.__data__;if(!H||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ie(r)}return n.set(e,t),this.size=n.size,this};var ve=W?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}(W(e),(function(t){return I.call(e,t)})))}:function(){return[]},ye=le;function be(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||u.test(e))&&e>-1&&e%1==0&&e<t}function we(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function xe(e,t){return e===t||e!=e&&t!=t}(U&&"[object DataView]"!=ye(new U(new ArrayBuffer(1)))||H&&ye(new H)!=i||$&&"[object Promise]"!=ye($.resolve())||q&&ye(new q)!=a||K&&"[object WeakMap]"!=ye(new K))&&(ye=function(e){var t=le(e),n=t==o?e.constructor:void 0,r=n?we(n):"";if(r)switch(r){case X:return"[object DataView]";case Q:return i;case Y:return"[object Promise]";case J:return a;case Z:return"[object WeakMap]"}return t});var ke=ce(function(){return arguments}())?ce:function(e){return Me(e)&&P.call(e,"callee")&&!I.call(e,"callee")},Ce=Array.isArray;var Se=B||function(){return!1};function Ee(e){if(!Oe(e))return!1;var t=le(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Te(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function Oe(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Me(e){return null!=e&&"object"==typeof e}var Pe=v?function(e){return function(t){return e(t)}}(v):function(e){return Me(e)&&Te(e.length)&&!!l[le(e)]};function je(e){return null!=(t=e)&&Te(t.length)&&!Ee(t)?se(e):pe(e);var t}n.exports=function(e,t){return fe(e,t)}}).call(this,n(44),n(81)(e))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Important=void 0;const i=r(n(0)),o=r(n(2)),a=o.default.section`
    margin: 1em auto;
    width: 80%;
`,s=o.default.table`
    border-collapse: collapse;
    border: 2px solid #A00;
    background: #FCC;

    td {
        padding: 1em;
    }

    td.side {
        width: 10%;
        background: #FAA;
        text-align: center;
        font-size: 200%;
        font-weight: bold;
        padding: 0.5em;
    }
`;class u extends i.default.Component{constructor(e){super(e)}render(){return i.default.createElement(a,{className:this.props.className},i.default.createElement(s,null,i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{className:"side"},"⚠"),i.default.createElement("td",null,this.props.children),i.default.createElement("td",{className:"side"},"⚠")))))}}t.Important=u},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderBox=void 0;const i=r(n(0)),o=r(n(2)),a=o.default.section`
    margin: 1em auto;
    width: 90%;
    background: #DDD;
    box-shadow: 0px 0px 20px 2px gray;

    h1 {
        margin: 0;
        padding: 0.5em;
        background: black;
        color: white;
        text-align: center;
    }
`,s=o.default.div`
    padding: 0.5em;
`;class u extends i.default.Component{constructor(e){super(e)}render(){return i.default.createElement(a,{className:this.props.className},i.default.createElement("h1",null,this.props.header),i.default.createElement(s,null,this.props.children))}}t.HeaderBox=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(213);Object.defineProperty(t,"FunctionSummary",{enumerable:!0,get:function(){return r.FunctionSummary}});var i=n(214);Object.defineProperty(t,"Parameter",{enumerable:!0,get:function(){return i.Parameter}});var o=n(215);Object.defineProperty(t,"ReturnValue",{enumerable:!0,get:function(){return o.ReturnValue}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FunctionSummary=void 0;const i=r(n(0)),o=r(n(2)),a=o.default.div`
    width: 80%;
    margin: 1em auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    border: 5px solid #44F;
    border-radius: 5px;
    box-shadow: #BBF 5px 5px;
`,s=o.default.div`
    font-family: 'Courier New', Courier, monospace;
    font-size: 125%;
    background: #44F;
    color: white;
    padding: 0.2em;
`;class u extends i.default.Component{render(){return i.default.createElement(a,{className:this.props.className},i.default.createElement(s,null,this.props.signature),this.props.children)}}t.FunctionSummary=u},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Parameter=void 0;const i=r(n(0)),o=n(83);class a extends i.default.Component{render(){return i.default.createElement(o.Box,{className:this.props.className,category:"parameter",name:this.props.name,type:this.props.type},this.props.children)}}t.Parameter=a},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReturnValue=void 0;const i=r(n(0)),o=r(n(2)),a=n(83),s=o.default(a.Box)`
    margin-top: 5px;
`;class u extends i.default.Component{render(){return i.default.createElement(s,{className:this.props.className,category:"return value",type:this.props.type},this.props.children)}}t.ReturnValue=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromWindow=void 0;const r=n(6);class i{constructor(e){this.obj=e}fetch(e){return this.obj[e]?r.Maybe.just(this.obj[e]):r.Maybe.nothing()}typedFetch(e){return this.obj[e]?r.Maybe.just(this.obj[e]):r.Maybe.nothing()}typedFetchObject(e){return r.maybePartial(this.typedFetch(e).lift(e=>e()).useDefault({}).value)}}t.fromWindow=function(){return new i(window)}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Coding=void 0;var a=n(84);Object.defineProperty(t,"Exercise",{enumerable:!0,get:function(){return a.Exercise}});const s=o(n(220));t.Coding=s},function(e,t,n){var r=n(3),i=n(219);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".exercise{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:80%;border:black solid 1px;box-shadow:5px 5px #AAA}.exercise>header{padding:0.2em;background:black;color:white;font-size:2em;font-weight:bold;user-select:none;cursor:default}.exercise>header .difficulty-viewer{width:4em}.exercise>.content{padding:1em}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceBased=void 0,n(221);var a=n(51);Object.defineProperty(t,"CollapsibleTestCase",{enumerable:!0,get:function(){return a.CollapsibleTestCase}});var s=n(85);Object.defineProperty(t,"Exercise",{enumerable:!0,get:function(){return s.Exercise}});const u=o(n(223));t.ReferenceBased=u},function(e,t,n){var r=n(3),i=n(222);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".coding.exercise .test-cases{width:80%;margin:1em auto 0em;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch}.coding.exercise .test-cases .test-case{border-top:1px solid black;border-bottom:1px solid black;margin:0.2em}.coding.exercise .test-cases .test-case .Collapsible__trigger{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap;font-size:1.25em;font-weight:bold;padding:0.2em;user-select:none;cursor:pointer}.coding.exercise .test-cases .test-case.pass{border-left:green 0.5em solid}.coding.exercise .test-cases .test-case.pass .Collapsible__trigger{background:linear-gradient(to right, #80c080, #b3d9b3)}.coding.exercise .test-cases .test-case.pass .Collapsible__trigger:hover{background:#66b366}.coding.exercise .test-cases .test-case.pass .Collapsible__contentInner{background:#EEE}.coding.exercise .test-cases .test-case.fail{border-left:red 0.5em solid}.coding.exercise .test-cases .test-case.fail .Collapsible__trigger{background:linear-gradient(to right, #ff8080, #ffb3b3)}.coding.exercise .test-cases .test-case.fail .Collapsible__trigger:hover{background:#f66}.coding.exercise .test-cases .test-case.fail .Collapsible__contentInner{background:#EEE}.coding.exercise .test-cases .test-case.skip{border-left:gray 0.5em solid}.coding.exercise .test-cases .test-case.skip .Collapsible__trigger{background:linear-gradient(to right, silver, #d9d9d9)}.coding.exercise .test-cases .test-case.skip .Collapsible__trigger:hover{background:#b3b3b3}.coding.exercise .test-cases .test-case.skip .Collapsible__contentInner{background:#EEE}.coding.exercise .test-cases .test-case .Collapsible__contentInner{padding:0.25em}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(52);Object.defineProperty(t,"Exercise",{enumerable:!0,get:function(){return r.Exercise}});var i=n(224);Object.defineProperty(t,"ReturnValue",{enumerable:!0,get:function(){return i.ReturnValue}});var o=n(248);Object.defineProperty(t,"Parameters",{enumerable:!0,get:function(){return o.Parameters}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReturnValue=void 0;const s=a(n(0)),u=n(51),l=n(52),c=o(n(23)),f=n(9),d=n(13),p=n(6),h=n(11);class _ extends l.Exercise{createAssertion(e,t){const n=c.returnValue(this.createReturnValueAssertion(e.returnValue,t)),r=h.range(0,e.argumentsBeforeCall.length).map(t=>{const n=this.referenceInformation.parameterNames[t],r=e.argumentsBeforeCall[t];return c.parameter(t,n,this.createParameterAssertion(t,n,r))});return c.sequence([n,...r])}createReturnValueAssertion(e,t){return c.equality(e,p.Maybe.nothing())}createParameterAssertion(e,t,n){return c.unmodified(n)}renderTestCaseHeader(e,t){const n=e.argumentsBeforeCall.map(d.convertToString).join(", "),r=f.code(d.convertToString(e.returnValue)),i=f.code(`${this.referenceInformation.functionName}(${n})`);return s.default.createElement(s.default.Fragment,null,i," should return ",r,".")}createTestCaseFromInputs(e,t,n){const r=this.createAssertion(e,n).check(t),i=this.renderTestCaseHeader(e,n),{outcome:o,content:a}=r;if(a){const e=a;return new class extends u.CollapsibleTestCase{get header(){return i}get content(){return e}get outcome(){return o}}}throw new Error("Assertion has no content")}}t.ReturnValue=_},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){var r=n(3),i=n(227);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".comparison.assertion.pass .actual{background:#AFA}.comparison.assertion.fail .actual{background:#FAA}.comparison.assertion.skip .actual{background:#AAA}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TabularAssertion=void 0;const i=r(n(0)),o=n(12),a=r(n(30)),s=n(86);n(229);class u extends s.Assertion{get htmlClasses(){return["tabular","assertion"]}get explanations(){return i.default.createElement(i.default.Fragment,null)}renderContent(e,t){return i.default.createElement(i.default.Fragment,null,this.explanations,this.renderTable(e,t))}renderTable(e,t){const n=Array.from(this.generateRows(e,t));return i.default.createElement("table",{className:a.default(this.htmlClasses,o.outcomeToHtmlClass(t))},i.default.createElement("tbody",null,n.map((e,t)=>this.renderRow(e,t))))}renderRow(e,t){return i.default.createElement("tr",{key:"tabular-row-"+t},i.default.createElement("th",null,e.header),i.default.createElement("td",{className:a.default(e.htmlClasses)},e.content))}}t.TabularAssertion=u},function(e,t,n){var r=n(3),i=n(230);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".tabular.assertion{margin:0.5em auto;width:60%}.tabular.assertion tr th{text-align:right;min-width:8em;font-variant:small-caps;text-transform:lowercase;background:#AAF;padding:0.1em 0.2em}.tabular.assertion tr td{text-align:center;width:100%;border:#AAA solid 1px}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.approximately=t.ApproximatelyAssertion=void 0;const r=n(37),i=n(6);class o extends r.ComparisonAssertion{isCorrect(e){if(this.expected.isJust())return Math.abs(e-this.expected.value)<this.epsilon;throw new Error("Bug detected in testing framework")}}t.ApproximatelyAssertion=o,t.approximately=function(e,t=1e-4){return new class extends o{get epsilon(){return t}get original(){return i.Maybe.nothing()}get expected(){return i.Maybe.just(e)}}}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.noReturn=void 0;const s=a(n(0)),u=o(n(33)),l=n(37),c=n(6),f=n(12);n(233);class d extends l.ComparisonAssertion{get original(){return c.Maybe.nothing()}get expected(){return c.Maybe.nothing()}isCorrect(e){return u.undef.hasType(e)}get explanations(){return s.default.createElement(s.default.Fragment,null,"The function should not return a value.")}shouldBeShown(e,t){return t===f.Outcome.Fail}}t.noReturn=function(){return new d}},function(e,t,n){var r=n(3),i=n(234);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".no-return-assertion{margin:0.5em auto;width:60%}.no-return-assertion th{text-align:right;min-width:8em;font-variant:small-caps;text-transform:lowercase;background:#AAF;padding:0.1em 0.2em}.no-return-assertion td{text-align:center;width:100%;border:#AAA solid 1px}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.permutation=t.PermutationAssertion=void 0;const i=r(n(0)),o=n(12),a=n(9),s=n(11);n(236);const u=n(22),l=r(n(21));class c{constructor(e,t){this.expected=e,this.formatter=t}check(e){return new f(this.expected,e,this.formatter,(e,t)=>this.areEqual(e,t))}areEqual(e,t){return u.deepEqual(e,t)}}t.PermutationAssertion=c;class f{constructor(e,t,n,r){this.expected=e,this.actual=t,this.formatter=n,this.equality=r}get outcome(){return this.actual.caseOf({just:e=>l.default(e)&&s.isPermutation(this.expected,e,this.equality)?o.Outcome.Pass:o.Outcome.Fail,nothing:()=>o.Outcome.Skip})}get content(){return this.createTable()}createDescription(){return i.default.createElement("p",null,"Your result should be a permutation of the expected array, i.e., it should contain the same elements, but not necessarily in the same order.")}createExpectedRow(){return i.default.createElement("tr",{key:"expected"},i.default.createElement("th",null,"Expected"),i.default.createElement("td",null,this.formatter(this.expected)))}createActualRow(){return this.actual.caseOf({just:e=>i.default.createElement("tr",{key:"actual"},i.default.createElement("th",null,"Actual"),i.default.createElement("td",null,this.formatter(e))),nothing:()=>i.default.createElement(i.default.Fragment,null)})}createTable(){return i.default.createElement(i.default.Fragment,null,this.createDescription(),i.default.createElement("table",{className:"permutation-assertion"},i.default.createElement("tbody",null,this.createExpectedRow(),this.createActualRow())))}}t.permutation=function(e,t){return new c(e,t||a.simple)}},function(e,t,n){var r=n(3),i=n(237);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".permutation-assertion{margin:0.5em auto;width:60%}.permutation-assertion th{text-align:right;min-width:8em;font-variant:small-caps;text-transform:lowercase;background:#AAF;padding:0.1em 0.2em}.permutation-assertion td{text-align:center;width:100%;border:#AAA solid 1px}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.unmodified=t.UnmodifiedAssertion=void 0;const i=r(n(0)),o=n(22),a=n(37),s=n(12),u=n(6);n(239);class l extends a.ComparisonAssertion{get expected(){return u.Maybe.nothing()}isCorrect(e){if(this.original.isJust())return o.deepEqual(this.original.value,e);throw new Error("Bug in testing framework")}shouldBeShown(e,t){return t===s.Outcome.Fail}get explanations(){return i.default.createElement(i.default.Fragment,null,"Value should remain unmodified.")}}t.UnmodifiedAssertion=l,t.unmodified=function(e){return new class extends l{get original(){return u.Maybe.just(e)}}}},function(e,t,n){var r=n(3),i=n(240);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".unmodified-assertion{margin:0.5em auto;width:60%}.unmodified-assertion th{text-align:right;min-width:8em;font-variant:small-caps;text-transform:lowercase;background:#AAF;padding:0.1em 0.2em}.unmodified-assertion td{text-align:center;width:100%;border:#AAA solid 1px}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.typedReturnValue=t.returnValue=void 0;const i=r(n(0)),o=n(88),a=n(89);t.returnValue=function(e){const t=i.default.createElement(i.default.Fragment,null,"Return value");return a.box(t,o.lift((function(e){return e.returnValue}),e))},t.typedReturnValue=function(e){const t=i.default.createElement(i.default.Fragment,null,"Return value");return a.box(t,o.lift((function(e){return e.returnValue}),e))}},function(e,t,n){var r=n(3),i=n(243);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".assertion-box{width:80%;margin:0.2em auto;border:1px solid black}.assertion-box>header{padding:0.2em;color:white;background:black;font-weight:bold;font-size:1em;user-select:none;text-transform:lowercase;font-variant:small-caps}.assertion-box .assertion-box-contents{padding:0.5em}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.typedParameter=t.parameter=void 0;const i=r(n(0)),o=n(88),a=n(89);t.parameter=function(e,t,n){const r=i.default.createElement(i.default.Fragment,null,"Parameter ",t);return a.box(r,o.lift((function(t){if(0<=e&&e<t.argumentsAfterCall.length)return t.argumentsAfterCall[e];throw new Error(`Invalid parameter index ${e}; should be between 0 and ${t.argumentsAfterCall.length}`)}),n))},t.typedParameter=function(e,t,n){const r=i.default.createElement(i.default.Fragment,null,"Parameter ",t);return a.box(r,o.lift((function(t){if(0<=e&&e<t.argumentsAfterCall.length)return t.argumentsAfterCall[e];throw new Error(`Invalid parameter index ${e}; should be between 0 and ${t.argumentsAfterCall.length}`)}),n))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sequence=void 0;const i=r(n(0)),o=n(12);class a{constructor(e,t){this.children=e,this.stopAfterFailure=t}check(e){let t=o.Outcome.Pass,n=i.default.createElement(i.default.Fragment,null);for(let r of this.children){const a=r.check(e);if(t=o.combineAssertionOutcomes([t,a.outcome]),n=i.default.createElement(i.default.Fragment,null,n,a.content),this.stopAfterFailure&&t!==o.Outcome.Pass)return{outcome:t,content:n}}return{outcome:t,content:n}}}t.sequence=function(e,t=!1){return new a(e,t)}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ColorBitmap=t.GrayscaleBitmap=t.BlackAndWhiteBitmap=void 0;const a=o(n(9)),s=n(87),u=n(6);class l extends s.EqualityAssertion{constructor(e){super(),this.expected=u.Maybe.just(e)}renderValue(e){return a.blackAndWhiteBitmap(e)}get original(){return u.Maybe.nothing()}}t.BlackAndWhiteBitmap=l;class c extends s.EqualityAssertion{constructor(e){super(),this.expected=u.Maybe.just(e)}renderValue(e){return a.grayscaleBitmap(e)}get original(){return u.Maybe.nothing()}}t.GrayscaleBitmap=c;class f extends s.EqualityAssertion{constructor(e){super(),this.expected=u.Maybe.just(e)}renderValue(e){return a.rgbBitmap(e)}get original(){return u.Maybe.nothing()}}t.ColorBitmap=f},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotSameAssertion=void 0;const i=r(n(0)),o=n(12);t.NotSameAssertion=class{check(e){const t=this,n=e.caseOf({just:e=>this.findFirstValue(e)!==this.findSecondValue(e)?o.Outcome.Pass:o.Outcome.Fail,nothing:()=>o.Outcome.Skip});return new class{constructor(){this.outcome=n}get content(){return n!==o.Outcome.Pass?t.message:i.default.createElement(i.default.Fragment,null)}}}}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Parameters=void 0;const s=a(n(0)),u=n(51),l=n(52),c=o(n(23)),f=n(13),d=n(9);class p extends l.Exercise{createAssertion(e,t){const n=c.returnValue(this.createReturnValueAssertion()),r=this.referenceInformation.parameterNames.map((n,r)=>{const i=this.parameterCheckers[n],o=e.argumentsBeforeCall[r];if(i){const a=i(o,e.argumentsAfterCall[r],t);return c.parameter(r,n,a)}return c.parameter(r,n,c.unmodified(o))});return c.sequence([n,...r])}createReturnValueAssertion(){return c.noReturn()}renderTestCaseHeader(e,t){const n=e.argumentsBeforeCall.map(f.convertToString).join(", "),r=d.code(`${this.referenceInformation.functionName}(${n})`);return s.default.createElement(s.default.Fragment,null,r)}createTestCaseFromInputs(e,t,n){const r=this.createAssertion(e,n).check(t),i=this.renderTestCaseHeader(e,n),{outcome:o,content:a}=r;if(a){const e=a;return new class extends u.CollapsibleTestCase{get header(){return i}get content(){return e}get outcome(){return o}}}throw new Error("Assertion has no content")}}t.Parameters=p},function(e,t,n){var r=n(3),i=n(250);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".explanations{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:80%;border:black solid 1px;box-shadow:5px 5px #AAA}.explanations>header{padding:0.2em;background:black;color:white;font-size:2em;font-weight:bold;user-select:none;cursor:default}.explanations>header .difficulty-viewer{width:4em}.explanations>.content{padding:1em}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FinishLineEntry=void 0;const i=r(n(0)),o=r(n(2)).default.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-image: linear-gradient(45deg, black 25%, transparent 25%), linear-gradient(-45deg, black 25%, transparent 25%), linear-gradient(45deg, transparent 75%, black 75%), linear-gradient(-45deg, transparent 75%, black 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    height: 20px;
`;class a extends i.default.Component{constructor(e){super(e)}render(){return i.default.createElement(o,{className:this.props.className})}}t.FinishLineEntry=a},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.Interpretation=t.Coding=void 0,i(n(253),t);const o=n(93),a=n(94),s=n(54),u=n(256),l=n(257),c=n(258),f=n(260);var d=n(95);Object.defineProperty(t,"verifySolutions",{enumerable:!0,get:function(){return d.verifySolutions}});const p=n(96);!function(e){let t;e.Exercise=a.TestCaseBasedCodingExercise,e.TrivialExercise=f.TrivialExercise,function(e){let t;e.CollapsibleTestCase=o.CollapsibleTestCase,e.Exercise=a.TestCaseBasedCodingExercise,function(e){let t,n;e.Exercise=s.ReferenceImplementationBasedCodingExercise,e.ExerciseGroup=p.ExerciseGroup,function(e){e.Exercise=u.ReturnValueCodingExercise}(t=e.ReturnValue||(e.ReturnValue={})),function(e){e.Exercise=l.ParameterCodingExercise}(n=e.Parameters||(e.Parameters={}))}(t=e.ReferenceBased||(e.ReferenceBased={}))}(t=e.TestCaseBased||(e.TestCaseBased={}))}(t.Coding||(t.Coding={})),function(e){let t;!function(e){e.Exercise=c.ReturnValueInterpretationExercise}(t=e.ReturnValue||(e.ReturnValue={}))}(t.Interpretation||(t.Interpretation={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){var r=n(3),i=n(255);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".test-cases{width:80%;margin:1em auto 0em;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch}.test-cases .test-case{border-top:1px solid black;border-bottom:1px solid black;margin:0.2em}.test-cases .test-case .Collapsible__trigger{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap;font-size:1.25em;font-weight:bold;padding:0.2em;user-select:none;cursor:pointer}.test-cases .test-case.pass{border-left:green 0.5em solid}.test-cases .test-case.pass .Collapsible__trigger{background:linear-gradient(to right, #80c080, #b3d9b3)}.test-cases .test-case.pass .Collapsible__trigger:hover{background:#66b366}.test-cases .test-case.pass .Collapsible__contentInner{background:#EEE}.test-cases .test-case.fail{border-left:red 0.5em solid}.test-cases .test-case.fail .Collapsible__trigger{background:linear-gradient(to right, #ff8080, #ffb3b3)}.test-cases .test-case.fail .Collapsible__trigger:hover{background:#f66}.test-cases .test-case.fail .Collapsible__contentInner{background:#EEE}.test-cases .test-case.skip{border-left:gray 0.5em solid}.test-cases .test-case.skip .Collapsible__trigger{background:linear-gradient(to right, silver, #d9d9d9)}.test-cases .test-case.skip .Collapsible__trigger:hover{background:#b3b3b3}.test-cases .test-case.skip .Collapsible__contentInner{background:#EEE}.test-cases .test-case .Collapsible__contentInner{padding:0.25em}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReturnValueCodingExercise=void 0;const s=a(n(0)),u=n(6),l=n(16),c=o(n(23)),f=n(54),d=n(13),p=n(9);class h extends f.ReferenceImplementationBasedCodingExercise{createReturnValueAssertion(e,t){return c.equality(e,u.Maybe.nothing())}createParameterAssertion(e,t,n,r,i){return c.unmodified(n)}renderTestCaseHeader(e,t){const n=e.argumentsBeforeCall.map(d.convertToString).join(", "),r=p.code(d.convertToString(e.returnValue)),i=p.code(`${l.parseFunction(this.referenceImplementation).functionName}(${n})`);return s.default.createElement(s.default.Fragment,null,i," should return ",r,".")}}t.ReturnValueCodingExercise=h},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ParameterCodingExercise=void 0;const s=a(n(0)),u=n(16),l=o(n(23)),c=n(54),f=n(13),d=n(9);class p extends c.ReferenceImplementationBasedCodingExercise{createReturnValueAssertion(e,t){return l.noReturn()}createParameterAssertion(e,t,n,r,i){const o=this.parameterCheckers[t];return o?o(n,r,i):l.unmodified(n)}renderTestCaseHeader(e,t){const n=e.argumentsBeforeCall.map(f.convertToString).join(", "),r=d.code(`${u.parseFunction(this.referenceImplementation).functionName}(${n})`);return s.default.createElement(s.default.Fragment,null,r)}}t.ParameterCodingExercise=p},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReturnValueInterpretationExercise=void 0;const i=r(n(0)),o=n(16),a=n(48),s=n(259),u=n(22),l=n(82),c=n(9);class f{}class d extends f{renderCell(e){return c.code(e.namedArgumentsBeforeCall[this.parameterName])}}class p extends f{renderCell(e){return i.default.createElement(a.ValidatedInput,{validator:t=>this.equality(t,e.returnValue)})}}class h{constructor(e){this.fcr=e}render(e){return e.renderCell(this.fcr)}}t.ReturnValueInterpretationExercise=class{get rows(){return Array.from(this.generateInputs()).map(e=>this.createRow(e))}createRow(e){const t=o.typedCallFunction(this.function,...e);return new h(t)}get columns(){return[...this.createParameterColumns(),this.createReturnValueColumn()]}createParameterColumns(){return o.parseFunction(this.function).parameterNames.map(e=>this.createParameterColumn(e))}createParameterColumn(e){const t=this;return new class extends d{constructor(){super(...arguments),this.parameterName=e}get header(){return t.createParameterColumnHeader(e)}}}createParameterColumnHeader(e){return i.default.createElement(i.default.Fragment,null,e)}createReturnValueColumnHeader(){return i.default.createElement(i.default.Fragment,null,"return value")}createReturnValueColumn(){const e=this;return new class extends p{get header(){return e.createReturnValueColumnHeader()}equality(t,n){return l.evalm(t).caseOf({just:t=>e.equality(t,n),nothing:()=>!1})}}}render(){return i.default.createElement(s.Form,{rows:this.rows,columns:this.columns})}equality(e,t){return u.deepEqual(e,t)}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Form=void 0;const i=r(n(0)),o=n(49);class a extends i.default.Component{constructor(e){super(e)}render(){return i.default.createElement(o.Form,{className:this.props.className,headers:this.headers,rows:this.rows})}get headers(){return this.props.columns.map(e=>e.header)}get rows(){return this.props.rows.map(e=>this.props.columns.map(t=>e.render(t)))}}t.Form=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TrivialExercise=void 0;const r=n(20);t.TrivialExercise=class{get score(){return this.testedImplementation.caseOf({just:e=>new r.Score(1,1),nothing:()=>new r.Score(0,1)})}render(){throw new Error("Trivial exercise should not be rendered")}}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(92),t),i(n(91),t),i(n(262),t),i(n(24),t),i(n(263),t),i(n(264),t),i(n(265),t),i(n(266),t)},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceBasedCodingExerciseSection=void 0;const i=r(n(0)),o=n(18),a=n(16),s=n(17),u=n(31),l=n(24);class c extends l.ExerciseSection{constructor(){super(),this.cachedExercise=new s.Lazy(()=>this.createExercise())}get exercise(){return this.cachedExercise.value}get id(){return a.parseFunction(this.cachedExercise.value.referenceImplementation).functionName}isScored(){return!0}hasDifficulty(){return!0}get score(){return this.exercise.score}get caption(){return this.id}get exerciseContent(){return i.default.createElement(i.default.Fragment,null,this.renderDescription(),this.exercise.render(),this.renderHint(),this.renderSolution())}renderDescription(){return i.default.createElement("div",{className:"description"},this.description)}renderHint(){return this.hint?i.default.createElement(o.HintViewer,null,this.hint):i.default.createElement(i.default.Fragment,null)}renderSolution(){const e=this.solutions;return i.default.createElement(o.MultiSolutionViewer,{solutions:e})}get htmlClasses(){return[...super.htmlClasses,"coding"]}get hint(){return null}get solutions(){const e=this.exercise.referenceImplementation;return u.retrieveSolutions(e)}get header(){return i.default.createElement(i.default.Fragment,null,a.parseFunction(this.exercise.referenceImplementation).signature)}}t.ReferenceBasedCodingExerciseSection=c},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CodingExerciseSection=void 0;const i=r(n(0)),o=n(6),a=n(24),s=n(31),u=n(17),l=n(95),c=n(16),f=n(18);class d extends a.ExerciseSection{constructor(){super(),this.cachedExercise=new u.Lazy(()=>(s.isSolutionPack(this.solutionPack)&&l.verifySolutions(e=>this.createExercise(o.Maybe.just(e)),this.solutionPack),this.createExercise(this.testedImplementation))),this.cachedReferenceImplementationInformation=new u.Lazy(()=>c.parseFunction(this.solutionPack))}get referenceImplementationInformation(){return this.cachedReferenceImplementationInformation.value}get id(){return this.referenceImplementationInformation.functionName}get caption(){return this.referenceImplementationInformation.functionName}get hint(){return null}get header(){return i.default.createElement(i.default.Fragment,null,this.referenceImplementationInformation.signature)}get score(){return this.exercise.score}get exerciseContent(){return i.default.createElement(i.default.Fragment,null,i.default.createElement(f.DescriptionBox,null,this.description),this.exercise.render(),this.renderHint(),this.solutions)}renderHint(){return this.hint?i.default.createElement(f.HintViewer,null,this.hint):i.default.createElement(i.default.Fragment,null)}get exercise(){return this.cachedExercise.value}get solutions(){const e=this.solutionPack;let t=this.solutionPack;return s.isSolutionPack(t)||(t=s.packSolutions(new class extends s.Solution{constructor(){super(...arguments),this.implementation=e,this.label=""}})),i.default.createElement(f.MultiSolutionViewer,{solutions:s.retrieveSolutions(this.solutionPack)})}}t.CodingExerciseSection=d},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MultiCodingExerciseSection=void 0;const i=r(n(0)),o=n(24),a=n(17),s=n(20);class u extends o.ExerciseSection{constructor(){super(),this.cachedExercises=new a.Lazy(()=>this.createExercises())}get id(){return this.caption}get header(){return i.default.createElement(i.default.Fragment,null,this.caption)}get score(){return s.Score.summate(...this.exerciseIds.map(e=>this.exercise(e).score))}exercise(e){return this.cachedExercises.value[e]}get exerciseIds(){return Object.keys(this.cachedExercises.value)}}t.MultiCodingExerciseSection=u},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MvcCodingExerciseSection=void 0;const i=r(n(0)),o=n(6),a=n(24),s=n(17),u=n(20),l=n(96);class c extends a.ExerciseSection{constructor(){super();const e=this.createExercises();this.cachedModelExerciseGroup=new s.Lazy(()=>new class extends l.ExerciseGroup{createExercises(){return e.model}}),this.cachedViewExerciseGroup=new s.Lazy(()=>new class extends l.ExerciseGroup{createExercises(){return e.view}}),this.cachedControllerExerciseGroup=new s.Lazy(()=>new class extends l.ExerciseGroup{createExercises(){return e.controller}})}get modelExerciseGroup(){return this.cachedModelExerciseGroup.value}get viewExerciseGroup(){return this.cachedViewExerciseGroup.value}get controllerExerciseGroup(){return this.cachedControllerExerciseGroup.value}static repackTestedImplementations(e,t){return t.caseOf({nothing:()=>({model:n(e.model,{}),view:n(e.view,{}),controller:n(e.controller,{})}),just:t=>({model:n(e.model,t.model||{}),view:n(e.view,t.view||{}),controller:n(e.controller,t.controller||{})})});function n(e,t){const n={};for(const r of Object.keys(e)){const e=r,i=t[e];n[e]=i?o.Maybe.just(i):o.Maybe.nothing()}return n}}get id(){return this.caption}get header(){return i.default.createElement(i.default.Fragment,null,this.caption)}get score(){const e=this.cachedModelExerciseGroup.value.score,t=this.cachedViewExerciseGroup.value.score,n=this.cachedControllerExerciseGroup.value.score;return u.Score.summate(e,t,n)}}t.MvcCodingExerciseSection=c},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BasicCodingExerciseSection=void 0;const i=r(n(0)),o=n(18),a=n(17),s=n(24);class u extends s.ExerciseSection{constructor(){super(),this.cachedExercise=new a.Lazy(()=>this.createExercise())}get id(){return this.prototypeFunctionInformation.functionName}get caption(){return this.prototypeFunctionInformation.functionName}get header(){return i.default.createElement(i.default.Fragment,null,this.prototypeFunctionInformation.signature)}get score(){return this.exercise.score}get exerciseContent(){return i.default.createElement(i.default.Fragment,null,i.default.createElement(o.DescriptionBox,null,this.description),this.exercise.render())}get exercise(){return this.cachedExercise.value}}t.BasicCodingExerciseSection=u},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(25),t),i(n(97),t),i(n(98),t),i(n(268),t),i(n(99),t),i(n(269),t),i(n(270),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0;const r=n(25);class i extends r.Animation{constructor(e,t){super(),this.delayed=e,this.delay=t,this.duration=e.duration+t}at(e){if(e<0||e>this.duration)throw new Error("Invalid t = "+e);return this.delayed.at(e-this.delay)}}t.delay=function(e,t){return new i(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.map=void 0;const r=n(25);class i extends r.Animation{constructor(e,t){super(),this.f=e,this.animations=t;for(let e=1;e<t.length;++e)if(t[e].duration!==t[0].duration)throw new Error("Animations should have same duration");this.duration=t[0].duration}get endValue(){return this.f(...this.animations.map(e=>e.endValue))}at(e){if(e<0||e>this.duration)throw new Error("Invalid t = "+e);return this.f(...this.animations.map(t=>t.at(e)))}}t.map=function(e,...t){return new i(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NumberAnimationBuilder=void 0;const r=n(97),i=n(99),o=n(98);t.NumberAnimationBuilder=class{constructor(e){this.animation=r.constant(e,0)}relativeTo(e,t){this.absoluteTo(this.animation.at(this.animation.duration)+e,t)}absoluteTo(e,t){this.animation=function(e,t,n){const r=e.endValue,a=o.linear(r,t,n);return i.sequence(e,a)}(this.animation,e,t)}constant(e){this.animation=function(e,t){const n=e.endValue,o=r.constant(n,t);return i.sequence(e,o)}(this.animation,e)}jump(e){this.animation=function(e,t){const n=r.constant(t,0);return i.sequence(e,n)}(this.animation,e)}build(){return this.animation}}}]));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(4);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(11);
module.exports = __webpack_require__(12);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(1));
const ATF = __importStar(__webpack_require__(0));
const Solutions = __importStar(__webpack_require__(6));
const js_algorithms_1 = __webpack_require__(7);
const maybe_1 = __webpack_require__(8);
const algo_testing_framework_1 = __webpack_require__(0);
const exercise_section_1 = __webpack_require__(9);
const parameter_viewer_1 = __webpack_require__(10);
const code = ATF.Formatters.Jsx.code;
const str = ATF.Formatters.String.convertToString;
const Interpretation = ATF.Components.Forms.FunctionBased;
const ExistingImplementations = ATF.Components.ExistingImplementations;
class ReturnValueExercise extends ATF.Exercise.Coding.TestCaseBased.ReferenceBased.ReturnValue.Exercise {
}
class ParameterExercise extends ATF.Exercise.Coding.TestCaseBased.ReferenceBased.Parameters.Exercise {
}
async function createChapter(student) {
    const title = 'Arrays';
    const sections = await Promise.all([
        lengthExplanation(),
        indexingExplanation(),
        first(),
        last(),
        sum(),
        contains(),
        all(),
        any(),
        updatingExplanation(),
        repeat(),
        rangeExercise(),
        passByReferenceExplanation(),
        incrementEach(),
        clamp(),
        methodsExplanation(),
        trimZeros(),
        cut(),
        spreadExplanation(),
        repeat2(),
        forEachExplanation(),
        count(),
        minimum(),
        allEqual(),
        allDifferent(),
        missingNumber(),
        restaurant(),
        finishLine(),
        indexOf(),
        lastIndexOf(),
        maximum(),
        smallJumps(),
        reverse(),
        reverseInPlace(),
        isPalindrome(),
        equalArrays(),
        isPermutation(),
        removeRuns(),
        removeRunsInPlace(),
        mostFrequent(),
        mostFrequent2(),
        isIncreasing(),
        isDecreasing(),
        missingNumber2(),
        longestIncreasingSubsequence(),
        uniq(),
        uniqInPlace(),
        mastermind(),
        isSubsequenceOf(),
        countTurns(),
        removeLastOfEach(),
        common(),
    ]);
    return { title, sections };
    async function lengthExplanation() {
        function foo(xs) {
            return xs.length;
        }
        return new class extends ATF.Explanations {
            constructor() {
                super(...arguments);
                this.id = 'length';
                this.caption = "Arrays";
                this.header = react_1.default.createElement(react_1.default.Fragment, null, "Arrays");
            }
            get explanations() {
                function sum2(x, y) {
                    return x + y;
                }
                function sum3(x, y, z) {
                    return x + y + z;
                }
                function sum4(a, b, c, d) {
                    return a + b + c + d;
                }
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ATF.Components.DescriptionBox, null,
                        react_1.default.createElement("p", null, "De som uitrekenen van een reeks getallen is een vaak voorkomende bewerking, bv. het berekenen van de totale kost van een bestelling. Hoe je de som berekent is afhankelijk van het aantal op te tellen getallen. Je kan natuurlijk gespecialiseerde functies defini\u00EBren:"),
                        renderSourceCode(sum2, sum3, sum4),
                        react_1.default.createElement("p", null,
                            "Deze aanpak is vrij problematisch gezien men telkens keer weer code moet neerschrijven. Ook moet men nog code schrijven die telkens de correcte variant oproept. We verkiezen een functie ",
                            code(`sum`),
                            " die kan inwerken op een willekeurig aantal getallen."),
                        react_1.default.createElement("p", null, "Arrays vormen een oplossing voor dit probleem. Een array stelt een lijst voor. In deze lijst kan men een willekeurig aantal elementen bewaren: dit kunnen getallen zijn, booleans, andere arrays, \u2026"),
                        react_1.default.createElement("p", null, "Bekijk onderstaande code en probeer af te leiden wat het doet."),
                        renderSourceCode(foo),
                        this.renderForm())));
            }
            renderForm() {
                class FormBuilder extends Interpretation.FormBuilder {
                    constructor() {
                        super(...arguments);
                        this.func = foo;
                    }
                    get parameters() {
                        return {
                            'xs': new class extends Interpretation.Parameter {
                                constructor() {
                                    super(...arguments);
                                    this.canBeModifiedByFunction = false;
                                }
                            }
                        };
                    }
                    get returnValue() {
                        return new Interpretation.ReturnValue();
                    }
                    *generateCases() {
                        yield this.forwardInputCase([[1]], {});
                        yield this.forwardInputCase([[1, 2]], {});
                        yield this.forwardInputCase([[1, 2, 3]], {});
                        yield this.forwardInputCase([[1, 2, 3, 4, 5]], {});
                        yield this.forwardInputCase([[1, 1, 1, 1, 1]], {});
                    }
                }
                return new FormBuilder().build();
            }
        };
    }
    async function indexingExplanation() {
        function foo(i) {
            const xs = [4, true, [1, 2, 3], 7];
            return xs[i];
        }
        return new class extends ATF.Explanations {
            constructor() {
                super(...arguments);
                this.id = 'indexing';
                this.caption = "Indexing";
                this.header = react_1.default.createElement(react_1.default.Fragment, null, "Indexering");
            }
            get explanations() {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ATF.Components.DescriptionBox, null,
                        react_1.default.createElement("p", null, "We hebben in de vorige oefening gezien hoe je het aantal elementen in een array opvraagt. Nu moeten we natuurlijk ook nog weten hoe we de elementen zelf kunnen opvragen."),
                        react_1.default.createElement("p", null,
                            "Een array kent elk element een index toe, beginnende te tellen vanaf 0. Om uit de array ",
                            code(`xs`),
                            " het element met index ",
                            code(`i`),
                            " op te vragen, schrijf je ",
                            code(`xs[i]`),
                            "."),
                        renderSourceCode(foo),
                        this.renderForm())));
            }
            renderForm() {
                class FormBuilder extends Interpretation.FormBuilder {
                    constructor() {
                        super(...arguments);
                        this.func = foo;
                    }
                    get parameters() {
                        return {
                            'i': new class extends Interpretation.Parameter {
                                constructor() {
                                    super(...arguments);
                                    this.canBeModifiedByFunction = false;
                                }
                            }
                        };
                    }
                    get returnValue() {
                        return new Interpretation.ReturnValue();
                    }
                    *generateCases() {
                        yield this.forwardInputCase([1], {});
                        yield this.forwardInputCase([2], {});
                    }
                }
                return new FormBuilder().build();
            }
        };
    }
    async function updatingExplanation() {
        function foo(n) {
            let result = new Array(n);
            for (let i = 0; i !== n; ++i) {
                result[i] = 0;
            }
            return result;
        }
        return new class extends ATF.Explanations {
            constructor() {
                super(...arguments);
                this.id = 'updating';
                this.caption = "Updating";
                this.header = react_1.default.createElement(react_1.default.Fragment, null, "Arrays Wijzigen");
            }
            get explanations() {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ATF.Components.DescriptionBox, null,
                        react_1.default.createElement("p", null, "Je kan zelf een array aanmaken, bijvoorbeeld van lengte 5:"),
                        renderStringSourceCode(`let xs = new Array(5)`),
                        react_1.default.createElement("p", null, "Je kan de elementen van een array ook altijd wijzigen:"),
                        renderStringSourceCode(`xs[i] = y`),
                        react_1.default.createElement("p", null,
                            "Als je op voorhand al weet welke elementen er in de array moeten steken, kan je ook gebruik maken van een ",
                            react_1.default.createElement("em", null, "array literal"),
                            ": ",
                            code(`let ns = [1, 2, 3]`),
                            " is hetzelfde als"),
                        renderStringSourceCode(`
                            let ns = new Array(3);

                            ns[0] = 1;
                            ns[1] = 2;
                            ns[2] = 3;
                            `),
                        react_1.default.createElement("p", null, "Je kan nu afleiden wat onderstaande functie doet."),
                        renderSourceCode(foo),
                        this.renderForm())));
            }
            renderForm() {
                return (new class extends ATF.Exercise.Interpretation.ReturnValue.Exercise {
                    constructor() {
                        super(...arguments);
                        this.function = foo;
                    }
                    *generateInputs() {
                        yield [0];
                        yield [1];
                        yield [2];
                        yield [5];
                    }
                }).render();
            }
        };
    }
    async function passByReferenceExplanation() {
        function foo(n) {
            n++;
        }
        function bar(ns) {
            ns[0]++;
        }
        function baz() {
            let xs = [1];
            let ys = xs;
            xs = [2];
            return ys[0];
        }
        return new class extends ATF.Explanations {
            constructor() {
                super(...arguments);
                this.id = 'pass-by-reference';
                this.caption = "References";
                this.header = react_1.default.createElement(react_1.default.Fragment, null, "Arrays Doorgeven");
            }
            get explanations() {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ATF.Components.DescriptionBox, null,
                        react_1.default.createElement("p", null, "Tijd voor een experimentje. Neem de tijd om deze uitleg grondig te lezen en te begrijpen, gezien dit ook van toepassing is op de meeste andere talen (Java, C#, Python, \u2026)."),
                        react_1.default.createElement("p", null, "Beschouw de volgende code:"),
                        renderStringSourceCode(`
                                let x = 4;
                                let y = x;
                                x++;
                            `),
                        react_1.default.createElement("p", null,
                            "Wat zijn nu de waardes van ",
                            code(`x`),
                            " en ",
                            code(`y`),
                            "? Er zijn hier minstens twee mogelijke interpretaties:"),
                        react_1.default.createElement("ul", null,
                            react_1.default.createElement("li", null,
                                code(`x`),
                                " en ",
                                code(`y`),
                                " zijn gescheiden variabelen. Elk heeft zijn eigen plekje in het geheugen. De ene wijzigen heeft geen enkel effect op de andere. Volgens deze interpretatie verwacht men dat ",
                                code(`x === 5`),
                                " en ",
                                code(`y === 4`),
                                "."),
                            react_1.default.createElement("li", null,
                                code(`y = x`),
                                " drukt uit dat ",
                                code(`x`),
                                " en ",
                                code(`y`),
                                " \"gelinkt\" zijn met elkaar en ze te allen tijde gelijk zijn. ",
                                code(`y`),
                                " is in feite niets meer dan een andere naam voor ",
                                code(`x`),
                                ". Indien dit correct is, zouden ",
                                code(`x`),
                                " en ",
                                code(`y`),
                                " beide moeten gelijk zijn aan ",
                                code(`5`),
                                ".")),
                        react_1.default.createElement("p", null, "Om te weten te komen welke van deze twee modellen het juiste is, zal je het zelf moeten uittesten. Voer deze code uit op de console en bekijk de resultaten."),
                        react_1.default.createElement("p", null, "Laten we nu hetzelfde proberen, maar met arrays i.p.v. getallen."),
                        renderStringSourceCode(`
                                x = [1];
                                y = x;
                                x[0]++;
                            `),
                        react_1.default.createElement("p", null, "Voer dit uit in de console en bekijk de resultaten."),
                        react_1.default.createElement("p", null, "Je merkt dat er een verschil lijkt te zijn in hoe getallen en arrays worden behandeld. Maakt JavaScript echt een verschil tussen beide, of is er eenzelfde regel van toepassing die we nog niet goed doorhebben?"),
                        react_1.default.createElement("p", null,
                            "Je kan een variabele zien als een doos waar de waarde in wordt gestoken. Als je een getal of een boolean in die doos steekt (bv. ",
                            code(`x = 10`),
                            "), dan bevat die doos echt ook bits die die waarde ",
                            code(`10`),
                            " voorstellen. Met een array zit dit anders: de doos bevat ",
                            react_1.default.createElement("em", null, "niet"),
                            " de hele array, maar enkel het (geheugen)adres van waar de array zich bevindt. Als je ",
                            code(`y = x`),
                            " schrijft, kopieer je dus niet de array, maar enkel het adres, met als gevolg dat ",
                            code(`x`),
                            " en ",
                            code(`y`),
                            " naar dezelfde array verwijzen. Vandaar zullen ",
                            code(`x[0] = 5`),
                            " en ",
                            code(`y[0] = 5`),
                            " exact hetzelfde betekenen."),
                        react_1.default.createElement("p", null, "Je zou nu moeten kunnen voorspellen wat onderstaande code als effect heeft."),
                        renderSourceCode(baz),
                        this.renderForm())));
            }
            renderForm() {
                class FormBuilder extends Interpretation.FormBuilder {
                    constructor() {
                        super(...arguments);
                        this.func = baz;
                    }
                    get parameters() {
                        return {};
                    }
                    get returnValue() {
                        return new Interpretation.ReturnValue();
                    }
                    *generateCases() {
                        yield this.forwardInputCase([], {});
                    }
                }
                return new FormBuilder().build();
            }
        };
    }
    async function methodsExplanation() {
        return new class extends ATF.Explanations {
            constructor() {
                super(...arguments);
                this.id = 'methods';
                this.caption = "Methods";
                this.header = react_1.default.createElement(react_1.default.Fragment, null, "Array Methodes");
            }
            get explanations() {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ATF.Components.DescriptionBox, null,
                        react_1.default.createElement("p", null,
                            "Zoals eerder uitgelegd kan je de elementen van een array wijzigen m.b.v. ",
                            code(`xs[i] = y`),
                            ". Zo kan je bestaande elementen wijzigen, maar kan je ook elementen toevoegen of verwijderen?"),
                        react_1.default.createElement("p", null,
                            "Stel dat een array 4 lang is, m.a.w. de elementen hebben indices ",
                            code(`0`),
                            " t.e.m. ",
                            code(`3`),
                            ". JavaScript laat toe nieuwe elementen toe te voegen door ze simpelweg aan een nieuwe index toe te kennen: ",
                            code(`xs[4] = 5`),
                            " voegt een nieuw element toe aan het einde van de array."),
                        react_1.default.createElement("p", null, "Binnen dit vak laten we deze manier van werken echter niet toe. Deze aanpak is immers specifiek voor JavaScript, maar zal niet werken in de meeste andere talen. Binnen dit vak willen we je algoritmes leren schrijven die bruikbaar zijn in alle talen, niet enkel JavaScript."),
                        react_1.default.createElement("p", null,
                            "Hoe moet je het dan wel doen? JavaScript arrays bieden een reeks methodes aan. Gebruik de console om te experimenteren. Ga voor de oefening hieronder ervan uit dat ",
                            code(`xs`),
                            " telkens gelijkgesteld werd aan ",
                            code(`[1, 2, 3]`),
                            " en vul de nieuwe waarde van ",
                            code(`xs`),
                            " in."),
                        this.renderForm(),
                        react_1.default.createElement("p", null,
                            "Merk op dat JavaScript hier sterk verschilt van Java: in Java bieden arrays slechts minimale functionaliteit en worden ze doorgaans vermeden. Qua functionaliteit komen JavaScript arrays eerder met Java's ",
                            code('ArrayList'),
                            "s overeen."))));
            }
            renderForm() {
                function foo(expr) {
                    const xs = [1, 2, 3];
                    eval(expr);
                    return xs;
                }
                return (new class extends ATF.Exercise.Interpretation.ReturnValue.Exercise {
                    constructor() {
                        super(...arguments);
                        this.function = foo;
                    }
                    *generateInputs() {
                        yield ['xs.push(8)'];
                        yield ['xs.pop()'];
                        yield ['xs.unshift(5)'];
                        yield ['xs.shift()'];
                        yield ['xs.push( xs.shift() )'];
                        yield ['xs.unshift( xs.pop() )'];
                        yield ['xs.push( xs.pop() )'];
                    }
                    createParameterColumnHeader(parameterName) {
                        return (react_1.default.createElement(react_1.default.Fragment, null, "expression"));
                    }
                    createReturnValueColumnHeader() {
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            code(`xs`),
                            "'s new value"));
                    }
                }).render();
            }
        };
    }
    async function first() {
        const referenceFunction = Solutions.first;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " het eerste element ervan teruggeeft. Je mag ervan uitgaan dat de array minstens \u00E9\u00E9n element bevat.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1]);
                        yield testCaseInput([true, false]);
                        yield testCaseInput(['x', 'y', 'z']);
                        yield testCaseInput([5, 4, 3, 2, 1]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function last() {
        const referenceFunction = Solutions.last;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " het laatste element ervan teruggeeft. Je mag ervan uitgaan dat de array minstens \u00E9\u00E9n element bevat.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 2, 3]);
                        yield testCaseInput([1, 2, 3, 4]);
                        yield testCaseInput([1, 2, 3, 4, 5]);
                        yield testCaseInput([1, 1, 1, 1, 1]);
                        yield testCaseInput(['a', 'b', 'c', 'd']);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function repeat() {
        const referenceFunction = Solutions.repeat;
        const { functionName, signature, parameterNames: [n, x] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een positief geheel getal ",
                        code(n),
                        " en een waarde ",
                        code(x),
                        " een array teruggeeft bestaande uit ",
                        code(n),
                        " voorkomens van ",
                        code(x),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput(0, 'a');
                        yield testCaseInput(1, 'a');
                        yield testCaseInput(2, 'a');
                        yield testCaseInput(5, 'x');
                        yield testCaseInput(4, 0);
                        yield testCaseInput(8, true);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function sum() {
        const referenceFunction = Solutions.sum;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array getallen ",
                        code(ns),
                        " de som van deze getallen uitrekent.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 1, 1]);
                        yield testCaseInput([4, 7, 1, 2]);
                        yield testCaseInput([5, 7, 3, 1, 2, 6, 8]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
            get hint() {
                const firstAttempt = `
                let acc = 0;

                acc += ${ns}[0];
                acc += ${ns}[1];
                acc += ${ns}[2];
                acc += ${ns}[3];
                ...

                return acc;
                `;
                const abstractLoop = `
                let acc = 0;

                /* i gaat alle indices van ${ns} af */
                {
                    acc += ${ns}[i];
                }

                return acc;
                `;
                const forLoop = `
                let acc = 0;

                for ( let i = 0; i !== ${ns}.length; i++ )
                {
                    acc += ${ns}[i];
                }

                return acc;
                `;
                const size = 60;
                const padding = 4;
                const arrayVisualization = js_algorithms_1.range(0, 5).map(i => {
                    const x = i * (size + padding);
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("rect", { key: `rect${i}`, x: x, y: 0, width: size, height: size, style: { stroke: 'black', fill: 'white' } }),
                        react_1.default.createElement("rect", { key: `rect${i}`, x: x, y: 0, width: size, height: size, style: { stroke: 'black', fill: 'white' } }),
                        react_1.default.createElement("text", { key: `label${i}`, x: x + 5, y: size - 5, textAnchor: 'start' }, i)));
                });
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null, "Conceptueel ga je een hulpvariabele aanmaken waar je alle getallen van de array bij optelt. Een eerste poging zou zijn:"),
                    renderStringSourceCode(firstAttempt),
                    react_1.default.createElement("p", null,
                        "Je weet echter niet op voorhand hoeveel elementen ",
                        code(ns),
                        " bevat. In dat geval zal je beroep moeten doen op een lus. Je ziet dat we alle indices moeten afgaan: ",
                        `${code(ns)}[0]`,
                        ", ",
                        `${code(ns)}[1]`,
                        ", ",
                        `${code(ns)}[2]`,
                        ", \u2026 We voeren een variabele ",
                        code(`i`),
                        " waarvan we willen dat deze alle indices afgaat."),
                    renderStringSourceCode(abstractLoop),
                    react_1.default.createElement("p", null,
                        "Welke waarden moet ",
                        code(`i`),
                        " afgaan? We moeten bij index ",
                        code(`0`),
                        " starten. Eindigen doen we op index ",
                        code(`${ns}.length - 1`),
                        ". Indien de reden achter de ",
                        code(`-1`),
                        " niet duidelijk is, beschouw onderstaande visualisering van een array van 5 elementen: indien men ze handmatig nummert, ziet men dat het laatste element index ",
                        code(`4`),
                        " heeft."),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("svg", { width: ((size + padding) * 5 - padding), height: 60, style: { margin: '1em auto', display: 'block' } }, arrayVisualization)),
                    react_1.default.createElement("p", null,
                        code(`i`),
                        " moet dus van ",
                        code(`0`),
                        " tot en met ",
                        code(`${ns}.length - 1`),
                        " gaan. Dit is duidelijk werk voor een ",
                        code(`for`),
                        "-lus:"),
                    renderStringSourceCode(forLoop)));
            }
        };
    }
    async function minimum() {
        const referenceFunction = Solutions.minimum;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array getallen ",
                        code(ns),
                        " de kleinste waarde ervan zoekt. Je mag ervan uitgaan dat de array minstens \u00E9\u00E9n element bevat.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([2, 1]);
                        yield testCaseInput([6, 4, 7, 3]);
                        yield testCaseInput([4, 4, 4]);
                        yield testCaseInput([44, 7, 50]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function maximum() {
        const referenceFunction = Solutions.maximum;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array getallen ",
                        code(ns),
                        " de grootste waarde ervan zoekt. Je mag ervan uitgaan dat de array minstens \u00E9\u00E9n element bevat.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([2, 1]);
                        yield testCaseInput([6, 4, 7, 3]);
                        yield testCaseInput([4, 4, 4]);
                        yield testCaseInput([44, 7, 50]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function all() {
        const referenceFunction = Solutions.all;
        const { functionName, signature, parameterNames: [bs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array booleans ",
                        code(bs),
                        " nagaat of alle elementen ",
                        code(`true`),
                        " zijn.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([true]);
                        yield testCaseInput([false]);
                        yield testCaseInput([true, true, true]);
                        yield testCaseInput([false, false, false]);
                        yield testCaseInput([true, false, false]);
                        yield testCaseInput([false, true, false]);
                        yield testCaseInput([false, false, true]);
                        yield testCaseInput([false, true, false, true]);
                        yield testCaseInput([true, true, true, false, true]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function any() {
        const referenceFunction = Solutions.any;
        const { functionName, signature, parameterNames: [bs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array booleans ",
                        code(bs),
                        " nagaat of er minstens \u00E9\u00E9n element ",
                        code(`true`),
                        " is.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([true]);
                        yield testCaseInput([false]);
                        yield testCaseInput([true, true, true]);
                        yield testCaseInput([false, false, false]);
                        yield testCaseInput([true, false, false]);
                        yield testCaseInput([false, true, false]);
                        yield testCaseInput([false, false, true]);
                        yield testCaseInput([false, true, false, true]);
                        yield testCaseInput([true, true, true, false, true]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function contains() {
        const referenceFunction = Solutions.contains;
        const { functionName, signature, parameterNames: [value, xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een waarde ",
                        code(value),
                        " en een array ",
                        code(xs),
                        " nagaat of ",
                        code(value),
                        " voorkomt in ",
                        code(xs),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput(0, []);
                        yield testCaseInput(1, [1]);
                        yield testCaseInput(2, [1]);
                        yield testCaseInput('a', [1, 2, 3]);
                        yield testCaseInput('a', ['a', 'b', 'c']);
                        yield testCaseInput('b', ['a', 'b', 'c']);
                        yield testCaseInput('c', ['a', 'b', 'c']);
                        yield testCaseInput('d', ['a', 'b', 'c']);
                        yield testCaseInput(0, [false]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
            get hint() {
                const forLoop = `
                for ( let i = 0; i !== ${xs}.length; i++ )
                {
                    // ???
                }
                `;
                const forLoop2 = `
                for ( let i = 0; i !== ${xs}.length; i++ )
                {
                    const currentElement = ${xs}[i];
                    // ???
                }
                `;
                const forLoop3 = `
                for ( let i = 0; i !== ${xs}.length; i++ )
                {
                    const currentElement = ${xs}[i];

                    if ( currentElement === ${value} )
                    {
                        return true;
                    }
                }
                `;
                const forLoop4 = `
                for ( let i = 0; i !== ${xs}.length; i++ )
                {
                    const currentElement = ${xs}[i];

                    if ( currentElement === ${value} )
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                `;
                const forLoop5 = `
                for ( let i = 0; i !== ${xs}.length; i++ )
                {
                    const currentElement = ${xs}[i];

                    if ( currentElement === ${value} )
                    {
                        return true;
                    }
                }

                return false;
                `;
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Om te weten of een bepaald element in een array steekt, moet je potentieel de hele array af gaan. We gaan dus weer een ",
                        code(`for`),
                        "-lus nodig hebben die een variabele ",
                        code(`i`),
                        " van ",
                        code(`0`),
                        " tot ",
                        code(`${xs}.length - 1`),
                        " doet lopen. Je kan dus meteen al de volgende code schrijven:"),
                    renderStringSourceCode(forLoop),
                    react_1.default.createElement("p", null, "We focussen nu op de body van de lus. Op zich interesseert de index ons niet; het is het element op die positie dat we willen. We halen dit element op en steken dit in een aparte variabele:"),
                    renderStringSourceCode(forLoop2),
                    react_1.default.createElement("p", null,
                        code(`currentElement`),
                        " zal nu gelijkgesteld worden aan elk element in de array. Ons doel is om te weten of ",
                        code(`currentElement`),
                        " ooit gelijk wordt aan ",
                        code(value),
                        ". Is dat het geval, moet de functie ",
                        code(`true`),
                        " teruggeven."),
                    renderStringSourceCode(forLoop3),
                    react_1.default.createElement("p", null,
                        "Momenteel bevat deze code enkel een ",
                        code(`return true`),
                        ". Ergens moet er ook nog een ",
                        code(`return false`),
                        " komen, namelijk op de plek waar we weten dat geen van de elementen uit de array gelijk is aan ",
                        code(value),
                        "."),
                    react_1.default.createElement("p", null, "Vaak schrijven studenten het volgende:"),
                    renderStringSourceCode(forLoop4),
                    react_1.default.createElement("p", null, "Dit is echter fout:"),
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", null,
                            "De variabele ",
                            code(`i`),
                            " wordt ge\u00EFnitialiseerd op ",
                            code(`0`),
                            "."),
                        react_1.default.createElement("li", null,
                            "Het eerste element wordt opgehaald. ",
                            code(`currentElement`),
                            " is nu gelijk aan ",
                            code(`${xs}[0]`),
                            "."),
                        react_1.default.createElement("li", null,
                            "De variabele ",
                            code(`currentElement`),
                            " wordt vergeleken met ",
                            code(value),
                            ". Zijn ze gelijk aan elkaar, dan wordt ",
                            code(`true`),
                            " teruggegeven. Deze ",
                            code(`return`),
                            " onderbreekt de functie: de resterende elementen worden dus niet meer bekeken. Dit gedrag is correct."),
                        react_1.default.createElement("li", null,
                            "Is ",
                            code(`currentElement`),
                            " echter niet gelijk aan ",
                            code(value),
                            ", dan wordt er meteen ",
                            code(`false`),
                            " teruggegeven. Weeral onderbreekt de ",
                            code(`return`),
                            " de functie. Dit betekent dat de overige elementen van de array nooit bekeken worden.")),
                    react_1.default.createElement("p", null,
                        "De functie mag enkel ",
                        code(`false`),
                        " teruggeven nadat ",
                        react_1.default.createElement("em", null, "alle"),
                        " elementen bekeken werden. We moeten de code dus herschrijven als"),
                    renderStringSourceCode(forLoop5),
                    react_1.default.createElement("p", null,
                        "Bij elke lusiteratie wordt gekeken of ",
                        code(`currentElement`),
                        " gelijk is aan ",
                        code(value),
                        ". Indien dit het geval is, stopt de functie en keert het meteen ",
                        code(`true`),
                        " terug. De lus blijft zo voortploeteren tot het ofwel een element vindt gelijk aan ",
                        code(value),
                        ", of tot het einde van de array bereikt wordt. Pas als ",
                        react_1.default.createElement("em", null, "alle"),
                        " elementen gecheckt werden, kan men ",
                        code(`false`),
                        " teruggeven.")));
            }
        };
    }
    async function count() {
        const referenceFunction = Solutions.count;
        const { functionName, signature, parameterNames: [value, xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een waarde ",
                        code(value),
                        " en een array ",
                        code(xs),
                        " telt hoe vaak ",
                        code(value),
                        " voorkomt in ",
                        code(xs),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput(0, []);
                        yield testCaseInput(1, [1]);
                        yield testCaseInput(1, [1, 1]);
                        yield testCaseInput(1, [1, 1, 1]);
                        yield testCaseInput(2, [1]);
                        yield testCaseInput(1, [1, 1, 2, 2, 3, 3, 1, 1]);
                        yield testCaseInput('a', [1, 2, 3]);
                        yield testCaseInput('a', ['a', 'b', 'c']);
                        yield testCaseInput('b', ['a', 'b', 'c', 'b']);
                        yield testCaseInput('c', ['a', 'b', 'c']);
                        yield testCaseInput('d', ['a', 'b', 'c']);
                        yield testCaseInput(0, [false, '', '0', 0]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function allEqual() {
        const referenceFunction = Solutions.allEqual;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " nagaat of alle elementen in deze array gelijk zijn aan elkaar.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 1, 1, 1, 1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([2, 2, 2, 2, 2, 2]);
                        yield testCaseInput([2, 2, 2, 2, 2, 1]);
                        yield testCaseInput([4, 4, 4, 3, 4, 4, 4]);
                        yield testCaseInput(['0', 0]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function allDifferent() {
        const referenceFunction = Solutions.allDifferent;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " nagaat of alle elementen in deze array verschillend zijn van elkaar.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([2, 1]);
                        yield testCaseInput([1, 1, 1, 1]);
                        yield testCaseInput([1, 2, 3, 4]);
                        yield testCaseInput(['a', 'b', 'c', 'd', 'e']);
                        yield testCaseInput(['a', 'b', 'c', 'd', 'e', 'c']);
                        yield testCaseInput([0, 1, 2, 3, 0, 4, 5, 6]);
                        yield testCaseInput(['0', 0]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function reverse() {
        const referenceFunction = Solutions.reverse;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " een nieuwe array teruggeeft die dezelfde elementen bevat als ",
                        code(xs),
                        ", maar in omgekeerde volgorde. De gegeven array ",
                        code(xs),
                        " moet ongewijzigd blijven.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 2, 3]);
                        yield testCaseInput([1, 2, 3, 4]);
                        yield testCaseInput(['a', 'b', 'c', 'd', 'e']);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function reverseInPlace() {
        const referenceFunction = Solutions.reverseInPlace;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " de elementen van deze array omkeert. De functie moet met andere woorden de gegeven array wijzigen."),
                    react_1.default.createElement("p", null, "Hoewel deze functionaliteit reeds bestaat is het de bedoeling van deze oefening dat je deze toch zelf implementeert."),
                    react_1.default.createElement(ExistingImplementations, null, [
                        new algo_testing_framework_1.SourceCode(algo_testing_framework_1.Language.JavaScript, `${xs}.reverse()`),
                    ])));
            }
            createExercise(testedImplementation) {
                return new class extends ParameterExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    get parameterCheckers() {
                        return {
                            [xs]: (original, expected, _meta) => ATF.Assertions.equality(expected, maybe_1.Maybe.just(original)),
                        };
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 2, 3]);
                        yield testCaseInput([1, 2, 3, 4]);
                        yield testCaseInput(['a', 'b', 'c', 'd', 'e']);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                    renderTestCaseHeader(expected, _metadata) {
                        const before = str(expected.argumentsBeforeCall[0]);
                        const after = str(expected.argumentsAfterCall[0]);
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            code(functionName),
                            "(",
                            code(before),
                            ") should change the array to ",
                            code(after),
                            "."));
                    }
                };
            }
        };
    }
    async function isPalindrome() {
        const referenceFunction = Solutions.isPalindrome;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " nagaat of deze array een palindroom is.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 2, 1]);
                        yield testCaseInput([1, 2, 3, 2, 1]);
                        yield testCaseInput([1, 2, 3, 3, 2, 1]);
                        yield testCaseInput([1, 2, 3, 3, 1]);
                        yield testCaseInput([1, 2, 3, 2, 3, 1]);
                        yield testCaseInput([1, 2, 3, 4, 2, 1]);
                        yield testCaseInput([1, '1']);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function equalArrays() {
        const referenceFunction = Solutions.equalArrays;
        const { functionName, signature, parameterNames: [xs, ys] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven arrays ",
                        code(xs),
                        " en ",
                        code(ys),
                        " nagaat of ze dezelfde elementen in dezelfde volgorde bevatten.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], []);
                        yield testCaseInput([1], []);
                        yield testCaseInput([], [1]);
                        yield testCaseInput([1], [1]);
                        yield testCaseInput([1, 2, 3], [1, 2, 3]);
                        yield testCaseInput([1, 2, 3], [3, 2, 1]);
                        yield testCaseInput([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
                        yield testCaseInput([1, 2, 3, 4, 5], [1, 2, 2, 4, 5]);
                        yield testCaseInput([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);
                        yield testCaseInput([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]);
                        yield testCaseInput(['0'], [0]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function isPermutation() {
        const referenceFunction = Solutions.isPermutation;
        const { functionName, signature, parameterNames: [xs, ys] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 4;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven arrays ",
                        code(xs),
                        " en ",
                        code(ys),
                        " nagaat of ze dezelfde elementen bevatten. Deze hoeven niet in dezelfde volgorde voor te komen.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], []);
                        yield testCaseInput([1], []);
                        yield testCaseInput([], [1]);
                        yield testCaseInput([1], [1]);
                        yield testCaseInput([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
                        yield testCaseInput([1, 2, 3, 4, 5], [1, 3, 2, 4, 5]);
                        yield testCaseInput([1, 2, 3, 4, 5], [1, 3, 2, 5, 4]);
                        yield testCaseInput([1, 2, 3, 4, 5], [1, 2, 3, 5, 4]);
                        yield testCaseInput([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
                        yield testCaseInput([1, 1, 1], [1, 1, 1]);
                        yield testCaseInput([1, 1, 1, 2], [2, 1, 1, 1]);
                        yield testCaseInput([1, 1, 2, 2, 3, 3], [1, 2, 3, 1, 2, 3]);
                        yield testCaseInput([1, 1], [2]);
                        yield testCaseInput([false], [0]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function mostFrequent() {
        const referenceFunction = Solutions.mostFrequent;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 3;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " het element teruggeeft dat het vaakst terugkomt. Je mag ervan uitgaan dat ",
                        code(xs),
                        " minstens \u00E9\u00E9n element bevat. Indien er twee meest vaak voorkomende elementen zijn, moet je dat element teruggeven dat het eerst in de array voorkomt.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 1, 2]);
                        yield testCaseInput([1, 1, 2, 2]);
                        yield testCaseInput([2, 1, 2, 1]);
                        yield testCaseInput([1, 2, 1, 2, 1]);
                        yield testCaseInput(['c', 'a', 'b', 'a']);
                        yield testCaseInput(['c', 'b', 'a', 'b', 'a']);
                        yield testCaseInput([2, 1, 5, 4, 5, 3, 4, 5, 3, 2, 4, 5, 3, 4, 5]);
                        yield testCaseInput([0, false, '', 'x', 'x']);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function mostFrequent2() {
        const referenceFunction = Solutions.mostFrequent2;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 4;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " op zoek gaat naar de meest voorkomende elementen en deze teruggeeft in een array. Bijvoorbeeld, in ",
                        code(str([1, 2, 2, 3, 4, 4])),
                        " zijn ",
                        code(str(2)),
                        " en ",
                        code(str(4)),
                        " de meest voorkomende elementen. In de resulterende array moeten de elementen in dezelfde volgorde voorkomen als waarin ze in ",
                        code(xs),
                        " voorkomen.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 1, 2]);
                        yield testCaseInput([1, 1, 2, 2]);
                        yield testCaseInput([2, 1, 2, 1]);
                        yield testCaseInput([1, 2, 1, 2, 1]);
                        yield testCaseInput(['c', 'a', 'b', 'a']);
                        yield testCaseInput(['c', 'b', 'a', 'b', 'a']);
                        yield testCaseInput([2, 1, 5, 4, 5, 3, 4, 5, 3, 2, 4, 5, 3, 4, 5]);
                        yield testCaseInput([0, false, '', 'x', 'x']);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function isIncreasing() {
        const referenceFunction = Solutions.isIncreasing;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die, gegeven een array ",
                        code(ns),
                        " die enkel getallen bevat, nagaat of alle elementen in stijgende volgorde voorkomen. Het is toegelaten dat eenzelfde getal meermaals voorkomt, m.a.w. ",
                        code(str([1, 2, 2, 3, 3, 3])),
                        " telt mee als stijgende rij.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([2, 1]);
                        yield testCaseInput([1, 2, 3]);
                        yield testCaseInput([1, 2, 2, 3, 3, 3]);
                        yield testCaseInput([1, 2, 2, 3, 3, 3, 2]);
                        yield testCaseInput([1, 3, 6, 7]);
                        yield testCaseInput([1, 3, 6, 4, 7, 9]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function isDecreasing() {
        const referenceFunction = Solutions.isDecreasing;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die, gegeven een array ",
                        code(ns),
                        " die enkel getallen bevat, nagaat of alle elementen in dalende volgorde voorkomen. Het is toegelaten dat eenzelfde getal meermaals voorkomt, m.a.w. ",
                        code(str([8, 6, 6, 4, 2])),
                        " telt mee als dalende rij.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([3, 1]);
                        yield testCaseInput([4, 5]);
                        yield testCaseInput([6, 6]);
                        yield testCaseInput([6, 2]);
                        yield testCaseInput([6, 4, 4, 2]);
                        yield testCaseInput([6, 4, 4, 1, 2]);
                        yield testCaseInput([6, 5, 4, 3, 2, 1]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function rangeExercise() {
        const referenceFunction = Solutions.range;
        const { functionName, signature, parameterNames: [from, to] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die, gegeven twee getallen ",
                        code(from),
                        " en ",
                        code(to),
                        ", een array teruggeeft die alle getallen bevat van ",
                        code(from),
                        " tot en met ",
                        code(to),
                        " in stijgende volgorde."),
                    react_1.default.createElement("p", null,
                        "Merk op dat ",
                        code(from),
                        " ook groter kan zijn dan ",
                        code(to),
                        ". In dit geval moet een lege array teruggegeven worden.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput(1, 1);
                        yield testCaseInput(1, 2);
                        yield testCaseInput(4, 7);
                        yield testCaseInput(0, 10);
                        yield testCaseInput(5, 1);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function missingNumber() {
        const referenceFunction = Solutions.missingNumber;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "De functie ",
                        code(signature),
                        " krijgt een array getallen ",
                        code(ns),
                        " binnen. Deze array bevat een stijgende reeks op elkaar volgende getallen, waarvan er mogelijk \u00E9\u00E9n ontbreekt, zoals bijvoorbeeld ",
                        code(`4`),
                        " ontbreekt in ",
                        code(str([1, 2, 3, 5, 6])),
                        ". Zoek het ontbrekende getal. Het is gegarandeerd dat de gegeven array minstens twee getallen bevat en dat er maximaal \u00E9\u00E9n getal ontbreekt. Geef ",
                        code(`0`),
                        " terug indien er geen getal ontbreekt.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1, 3]);
                        yield testCaseInput([1, 2, 3]);
                        yield testCaseInput([1, 2, 3, 5, 6]);
                        yield testCaseInput([5, 6, 8, 9, 10]);
                        yield testCaseInput([3, 5, 6, 7]);
                        yield testCaseInput([9, 10, 11, 12, 14]);
                        yield testCaseInput([9, 10, 11, 12, 13, 14]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function restaurant() {
        const referenceFunction = Solutions.restaurant;
        const { functionName, signature, parameterNames: [entrees, mainCourses, desserts, budget] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Je gaat op restaurant en je hebt \u20AC",
                        code(budget),
                        " op zak, waarvan je zoveel mogelijk wil uitgeven. Je wenst een voorgerecht, een hoofdgerecht en een dessert. De parameter ",
                        code(entrees),
                        " is een array met de prijzen van alle aangeboden voorgerechten, analoog voor ",
                        code(mainCourses),
                        " en ",
                        code(desserts),
                        ". Schrijf een functie ",
                        code(signature),
                        " die zoekt naar de combinatie voorgerecht-hoofdgerecht-dessert waarvan de prijs het hoogst is maar toch ",
                        code(budget),
                        " niet overschrijdt. De functie moet als resultaat een array van drie getallen teruggeven die de prijzen van het geselecteerde voorgerecht, hoofdgerecht en dessert voorstellen. Als er geen selectie mogelijk is die voldoet aan bovenstaande voorwaarden, moet de functie ",
                        code(`[0, 0, 0]`),
                        " teruggeven.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1], [1], [1], 10);
                        yield testCaseInput([], [1], [1], 10);
                        yield testCaseInput([1], [1, 2], [1], 10);
                        yield testCaseInput([1, 2, 3], [1, 2, 3], [1, 2, 3], 10);
                        yield testCaseInput([7, 15, 25], [35, 47], [9], 50);
                        yield testCaseInput([7, 15, 25], [35, 47], [9], 60);
                        yield testCaseInput([7, 15, 25], [35, 47], [9], 70);
                        yield testCaseInput([7, 15, 25], [35, 47], [9], 80);
                        yield testCaseInput([7, 15, 25], [35, 47], [9], 90);
                        yield testCaseInput([10, 12, 16], [40, 50, 60], [13, 35, 77], 100);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                    renderTestCaseHeader(expected) {
                        const before = expected.namedArgumentsBeforeCall;
                        const after = expected.returnValue;
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(parameter_viewer_1.ParameterViewer, { parameters: before }),
                            "\u00A0\u2192\u00A0",
                            code(str(after))));
                    }
                };
            }
        };
    }
    async function missingNumber2() {
        const referenceFunction = Solutions.missingNumber2;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 3;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "De functie ",
                        code(signature),
                        " krijgt een array ",
                        code(ns),
                        " binnen. Deze array bevat een reeks op elkaar volgende getallen maar deze staan in willekeurige volgorde geordend. Er ontbreekt echter \u00E9\u00E9n getal. Zo ontbreekt ",
                        code(str(3)),
                        " in de array ",
                        code(str([5, 2, 4, 1])),
                        ". Zoek dit ontbrekende getal. Het is gegarandeerd dat de gegeven array minstens twee getallen bevat en dat er exact \u00E9\u00E9n getal ontbreekt.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([1, 3]);
                        yield testCaseInput([3, 1]);
                        yield testCaseInput([1, 2, 4, 5]);
                        yield testCaseInput([4, 5, 3, 7]);
                        yield testCaseInput([6, 4, 5, 9, 7]);
                        yield testCaseInput([1004, 1002, 1005]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function longestIncreasingSubsequence() {
        const referenceFunction = Solutions.longestIncreasingSubsequence;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 3;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die, gegeven een array getallen ",
                        code(ns),
                        ", zoekt naar de langste stijgende deelrij. Een deelrij van ",
                        code(ns),
                        " defini\u00EBren als een reeks opeenvolgende elementen uit ",
                        code(ns),
                        ". Zo is ",
                        code(str([2, 3, 4])),
                        " een deelrij van ",
                        code(str([1, 2, 3, 4, 5, 6])),
                        ", maar ",
                        code(str([1, 3, 5])),
                        " er geen deelrij van.")));
            }
            get caption() { return 'l.i.s.'; }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1, 2, 3, 4]);
                        yield testCaseInput([1, 1, 2, 3]);
                        yield testCaseInput([1, 2, 1]);
                        yield testCaseInput([1, 2, 1, 2, 3, 1, 2]);
                        yield testCaseInput([4, 5, 1, 4, 6, 8, 9, 4, 6, 7]);
                        yield testCaseInput([3, 5, 1, 3, 5, 2, 3, 6, 7, 8]);
                        yield testCaseInput([3, 5, 1, 3, 5, 2, 3, 6, 7, 8]);
                        yield testCaseInput([2, 5, 5, 7, 1, 3, 7, 5, 7, 9]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function uniq() {
        const referenceFunction = Solutions.uniq;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 3;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " een nieuwe array teruggeeft die dezelfde elementen bevat als ",
                        code(xs),
                        ", maar waaruit duplicaten verwijderd werden. Bijvoorbeeld, ",
                        code(str([1, 2, 2, 3, 3, 3])),
                        " moet als resultaat",
                        code(str([1, 2, 3])),
                        " opleveren."),
                    react_1.default.createElement("p", null,
                        "De elementen in de resulterende array moeten in dezelfde volgorde staan als ze in ",
                        code(xs),
                        " voorkomen.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 1, 2, 2]);
                        yield testCaseInput([1, 2, 2, 3, 3, 3]);
                        yield testCaseInput(['a', 'b', 'c', 'a', 'b', 'c']);
                        yield testCaseInput([5, 5, 5, 5, 5]);
                        yield testCaseInput([4, 7, 5, 1, 2, 6, 4]);
                        yield testCaseInput([false, '', 0]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function uniqInPlace() {
        const referenceFunction = Solutions.uniqInPlace;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 3;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " de duplicaten uit deze array verwijdert. Telkens moet het eerst voorkomende element overblijven. Zo wordt ",
                        code(str([1, 2, 1])),
                        " omgevormd tot ",
                        code(str([1, 2])),
                        ", niet ",
                        code(str([2, 1])),
                        "."),
                    react_1.default.createElement("p", null,
                        "Voor deze oefening zal je elementen moeten verwijderen die aan het begin noch aan het einde van de array staan. Je kan hiervoor beroep doen op ",
                        react_1.default.createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" }, "deze arraymethode"),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ParameterExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 2, 1]);
                        yield testCaseInput([1, 2, 1, 2]);
                        yield testCaseInput([1, 3, 2, 4, 3, 2, 1, 4]);
                        yield testCaseInput([4, 7, 5, 7, 5, 4]);
                        yield testCaseInput([-1, false, 0]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                    get parameterCheckers() {
                        return {
                            [xs]: (original, expected) => ATF.Assertions.equality(expected, maybe_1.Maybe.just(original)),
                        };
                    }
                    renderTestCaseHeader(expected) {
                        const before = str(expected.argumentsBeforeCall[0]);
                        const after = str(expected.argumentsAfterCall[0]);
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            code(functionName),
                            "(",
                            code(before),
                            ") should change the array to ",
                            code(after),
                            "."));
                    }
                };
            }
        };
    }
    async function mastermind() {
        const referenceFunction = Solutions.mastermind;
        const { functionName, signature, parameterNames: [xs, ys] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 4;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Mastermind bestaat erin dat je een geheime code moet weten te vinden. Deze code bestaat uit N cijfers. Je mag hiervoor zelf meermaals gokken. Voor elke gok krijg je feedback in de vorm van twee getallen:",
                        react_1.default.createElement("ul", null,
                            react_1.default.createElement("li", null, "Het eerste getal geeft aan hoeveel cijfers je correct gegokt hebt."),
                            react_1.default.createElement("li", null, "Het tweede getal is het aantal cijfers die wel voorkomen in de code, maar op een andere plaats."))),
                    react_1.default.createElement("p", null,
                        "Stel dat de code ",
                        code('1 2 3 4'),
                        " is en je gokt ",
                        code('1 5 3 2'),
                        ". De feedback die je hierop krijgt is ",
                        code('1 2'),
                        ":",
                        react_1.default.createElement("ul", null,
                            react_1.default.createElement("li", null, "Het eerste cijfer 1 is juist en staat op de juiste positie."),
                            react_1.default.createElement("li", null, "De cijfers 2 en 3 komen in de code voor, maar in je gok staan ze op de vierde en derde plaats, respectievelijk, terwijl ze op de tweede en derde plaats horen."))),
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die, gegeven twee arrays getallen",
                        code(xs),
                        " en ",
                        code(ys),
                        ", de feedback teruggeeft als een array van twee getallen.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], []);
                        yield testCaseInput([1], [1]);
                        yield testCaseInput([1], [2]);
                        yield testCaseInput([1, 2], [2, 1]);
                        yield testCaseInput([1, 2], [1, 1]);
                        yield testCaseInput([1, 2], [1, 2]);
                        yield testCaseInput([1, 2, 1], [2, 1, 2]);
                        yield testCaseInput([1, 1, 1], [1, 1, 1]);
                        yield testCaseInput([1, 1, 1], [1, 1, 2]);
                        yield testCaseInput([1, 2, 3, 4], [1, 3, 2, 4]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function removeRuns() {
        const referenceFunction = Solutions.removeRuns;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " alle \"runs\" samenvoegt tot een enkel element. Het resultaat moet teruggegeven worden als een nieuwe array."),
                    react_1.default.createElement("p", null,
                        "Een \"run\" defini\u00EBren we als een reeks op elkaar volgende gelijke elementen. Zo bevat",
                        code(`[1, 1, 1, 2, 2, 3]`),
                        " twee runs (",
                        code(`1, 1, 1`),
                        " en ",
                        code(`2, 2`),
                        ") en moet deze ",
                        code(`functionName`),
                        " als resultaat ",
                        code(`[1, 2, 3]`),
                        " opleveren.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 1, 1]);
                        yield testCaseInput([1, 2, 1]);
                        yield testCaseInput([1, 1, 2, 2, 1, 1]);
                        yield testCaseInput([1, 2, 2, 3, 3, 3]);
                        yield testCaseInput([1, 1, 1, 2, 2, 3]);
                        yield testCaseInput(['a', 'a', 'b', 'b', 'c', 'c']);
                        yield testCaseInput([0, false, '']);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function removeRunsInPlace() {
        const referenceFunction = Solutions.removeRunsInPlace;
        const { functionName, signature, parameterNames: [xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(xs),
                        " de duplicaten uit deze array zelf verwijdert. Met andere woorden, ",
                        code(functionName),
                        " moet zijn argument ",
                        code(xs),
                        " wijzigen."),
                    react_1.default.createElement("p", null,
                        "Voor deze oefening zal je elementen moeten verwijderen die aan het begin noch aan het einde van de array staan. Je kan hiervoor beroep doen op ",
                        react_1.default.createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" }, "deze arraymethode"),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ParameterExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    get parameterCheckers() {
                        return {
                            [xs]: (original, expected) => ATF.Assertions.equality(expected, maybe_1.Maybe.just(original)),
                        };
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 1]);
                        yield testCaseInput([1, 1, 1]);
                        yield testCaseInput([1, 2, 1]);
                        yield testCaseInput([1, 1, 2, 2, 1, 1]);
                        yield testCaseInput([1, 2, 2, 3, 3, 3]);
                        yield testCaseInput([1, 1, 1, 2, 2, 3]);
                        yield testCaseInput(['a', 'a', 'b', 'b', 'c', 'c']);
                        yield testCaseInput([0, false, '']);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                    renderTestCaseHeader(expected) {
                        const before = str(expected.argumentsBeforeCall[0]);
                        const after = str(expected.argumentsAfterCall[0]);
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            code(functionName),
                            "(",
                            code(before),
                            ") should change the array to ",
                            code(after),
                            "."));
                    }
                };
            }
        };
    }
    async function isSubsequenceOf() {
        const referenceFunction = Solutions.isSubsequenceOf;
        const { functionName, signature, parameterNames: [xs, ys] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 3;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een twee arrays ",
                        code(xs),
                        " en ",
                        code(ys),
                        " nagaat of elk element uit ",
                        code(xs),
                        " voorkomt in ",
                        code(ys),
                        ". Hierbij moet de volgorde behouden worden."),
                    react_1.default.createElement("p", null,
                        "Bijvoorbeeld, ",
                        code(`[2, 4, 6]`),
                        " is een subsequence van ",
                        code(`[1, 2, 3, 4, 5, 6]`),
                        ", maar niet van ",
                        code(`[6, 5, 4, 3, 2, 1]`),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], []);
                        yield testCaseInput([], [1]);
                        yield testCaseInput([1], []);
                        yield testCaseInput([1, 2, 3], [1, 2, 3]);
                        yield testCaseInput([1, 2, 3], [1, 2, 3, 4]);
                        yield testCaseInput([1, 2, 3, 4], [1, 2, 3]);
                        yield testCaseInput([2, 4, 6, 8], [1, 2, 3, 4, 5, 6, 7, 8]);
                        yield testCaseInput([2, 2, 2], [1, 2, 3, 4, 3, 2, 1]);
                        yield testCaseInput([2, 2, 2], [1, 2, 3, 4, 3, 2, 1, 2, 3, 4]);
                        yield testCaseInput([5], [5, 5, 5]);
                        yield testCaseInput([5, 6], [5, 5, 6, 6]);
                        yield testCaseInput([5, 6], [6, 6, 5, 5]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function incrementEach() {
        const referenceFunction = Solutions.incrementEach;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een array ",
                        code(ns),
                        " elk element van de array met 1 verhoogt. Het is de bedoeling dat je de gegeven array ",
                        code(ns),
                        " wijzigt."),
                    react_1.default.createElement("p", null,
                        "Let op: de functie mag niets ",
                        code(`return`),
                        "en!")));
            }
            createExercise(testedImplementation) {
                return new class extends ParameterExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    get parameterCheckers() {
                        return {
                            [ns]: (original, expected, _meta) => ATF.Assertions.equality(expected, maybe_1.Maybe.just(original)),
                        };
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([0]);
                        yield testCaseInput([1]);
                        yield testCaseInput([0, 1]);
                        yield testCaseInput([1, 2, 3, 4, 5]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                    renderTestCaseHeader(expected, _metadata) {
                        const before = str(expected.argumentsBeforeCall[0]);
                        const after = str(expected.argumentsAfterCall[0]);
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            code(functionName),
                            "(",
                            code(before),
                            ") should change the array to\u00A0",
                            code(after),
                            "."));
                    }
                };
            }
        };
    }
    async function countTurns() {
        const referenceFunction = Solutions.countTurns;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 4;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Een getallenrij kan stijgen: ",
                        code(`[1, 2, 4, 6, 8`),
                        ". Ook kan ze dalen:",
                        code(`[7, 5, 4, 1]`),
                        ". En nu komt de twist: een rij kan ook zowel stijgen als dalen! Dit noemen we een wispelturige rij. Bijvoorbeeld, ",
                        code(`[1, 4, 6, 5, 3, 5, 8, 9, 7, 4, 1`),
                        " stijgt eerst, dan daalt ze, dan stijgt ze weer om dan finaal weer te dalen. Ze verandert dus 3\u00D7 van mening."),
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die telt hoeveel wisselingen er voorkomen in de gegeven rij ",
                        code(ns),
                        ". Als een rij ter plekke blijft trappelen, dan telt dit niet mee als wissel. Bijvoorbeeld, $",
                        code(`1, 4, 4, 6, 8`),
                        " telt 0 wisselingen.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 2, 1]);
                        yield testCaseInput([1, 2, 5, 7, 5, 3, 1]);
                        yield testCaseInput([1, 2, 1, 2, 1, 2]);
                        yield testCaseInput([5, 7, 9, 7, 4, 2, 6, 8, 5]);
                        yield testCaseInput([1, 2, 2, 3]);
                        yield testCaseInput([1, 2, 2, 3, 2, 2, 1]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function clamp() {
        const referenceFunction = Solutions.clamp;
        const { functionName, signature, parameterNames: [ns, min, max] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die alle elementen van ",
                        code(ns),
                        " terugbrengt tussen ",
                        code(min),
                        " en ",
                        code(max),
                        ". Dit gebeurt door elk element dat kleiner is dan ",
                        code(min),
                        " gelijk te stellen aan ",
                        code(min),
                        " en elk element groter dan ",
                        code(max),
                        " gelijk te stellen aan ",
                        code(max),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ParameterExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    get parameterCheckers() {
                        return {
                            [ns]: (original, expected, _meta) => ATF.Assertions.equality(expected, maybe_1.Maybe.just(original)),
                        };
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], 0, 10);
                        yield testCaseInput([1], 0, 10);
                        yield testCaseInput([-4], 0, 10);
                        yield testCaseInput([12], 0, 10);
                        yield testCaseInput([3, 6, 9, 14, 21], 5, 20);
                        yield testCaseInput([3, 6, 9, 14, 21], 10, 15);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                    renderTestCaseHeader(expected, _metadata) {
                        const before = str(expected.argumentsBeforeCall[0]);
                        const min = expected.argumentsBeforeCall[1];
                        const max = expected.argumentsBeforeCall[2];
                        const after = str(expected.argumentsAfterCall[0]);
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            code(`${functionName}(${before}, ${min}, ${max})`),
                            " should change the array to\u00A0",
                            code(after),
                            "."));
                    }
                };
            }
        };
    }
    async function trimZeros() {
        const referenceFunction = Solutions.trimZeros;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die de nullen aan het begin en einde van de gegeven array verwijdert.")));
            }
            createExercise(testedImplementation) {
                return new class extends ParameterExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    get parameterCheckers() {
                        return {
                            [ns]: (original, expected) => ATF.Assertions.equality(expected, maybe_1.Maybe.just(original)),
                        };
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([0]);
                        yield testCaseInput([6]);
                        yield testCaseInput([0, 5]);
                        yield testCaseInput([2, 0]);
                        yield testCaseInput([0, 8, 0]);
                        yield testCaseInput([0, 0, 4, 0, 0]);
                        yield testCaseInput([0, 0, 3, 0, 2, 0, 0]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                    renderTestCaseHeader(expected) {
                        const before = str(expected.argumentsBeforeCall[0]);
                        const after = str(expected.argumentsAfterCall[0]);
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            code(`${functionName}(${before})`),
                            " should change the array to\u00A0",
                            code(after),
                            "."));
                    }
                };
            }
        };
    }
    async function cut() {
        const referenceFunction = Solutions.cut;
        const { functionName, signature, parameterNames: [xs, size] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die alle elementen vanaf dat met index ",
                        code(size),
                        " verwijdert. Met andere woorden, enkel de eerste ",
                        code(size),
                        " elementen mogen overblijven.")));
            }
            createExercise(testedImplementation) {
                return new class extends ParameterExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    get parameterCheckers() {
                        return {
                            [xs]: (original, expected, _meta) => ATF.Assertions.equality(expected, maybe_1.Maybe.just(original)),
                        };
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], 0);
                        yield testCaseInput([1, 2, 3], 0);
                        yield testCaseInput([], 4);
                        yield testCaseInput([1, 2, 3, 4, 5], 2);
                        yield testCaseInput([0, 0, 0, 0, 0, 0], 4);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                    renderTestCaseHeader(expected, _metadata) {
                        const [before, n] = expected.argumentsBeforeCall;
                        const after = str(expected.argumentsAfterCall[0]);
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            code(`${functionName}(${str(before)}, ${n})`),
                            " should change the array to\u00A0",
                            code(after),
                            "."));
                    }
                };
            }
        };
    }
    async function spreadExplanation() {
        return new class extends ATF.Explanations {
            constructor() {
                super(...arguments);
                this.id = 'spread';
                this.caption = "Spread";
                this.header = react_1.default.createElement(react_1.default.Fragment, null, "Spread Syntax");
            }
            get explanations() {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ATF.Components.DescriptionBox, null,
                        react_1.default.createElement("p", null,
                            "De spread syntax kan tevens van pas komen voor het opbouwen van arrays. Experimenteer om te begrijpen wat het doet. In de onderstaande oefening zijn ",
                            code(`xs = [1, 2]`),
                            " en ",
                            code(`ys = [3, 4]`),
                            "."),
                        this.renderForm())));
            }
            renderForm() {
                function foo(expr) {
                    let xs = [1, 2];
                    let ys = [3, 4];
                    return eval(expr);
                }
                class FormBuilder extends Interpretation.FormBuilder {
                    constructor() {
                        super(...arguments);
                        this.func = foo;
                    }
                    get parameters() {
                        return {
                            'expr': new class extends Interpretation.Parameter {
                                constructor() {
                                    super(...arguments);
                                    this.canBeModifiedByFunction = false;
                                }
                                render(value) {
                                    return (react_1.default.createElement(ATF.Components.InlineCode, { content: value }));
                                }
                            },
                        };
                    }
                    get returnValue() {
                        return new Interpretation.ReturnValue();
                    }
                    *generateCases() {
                        yield this.forwardInputCase(['[xs]'], {});
                        yield this.forwardInputCase(['[xs, ys]'], {});
                        yield this.forwardInputCase(['[...xs]'], {});
                        yield this.forwardInputCase(['[0, ...xs]'], {});
                        yield this.forwardInputCase(['[0, ...xs, ...ys]'], {});
                        yield this.forwardInputCase(['[...xs, ...ys, ...xs]'], {});
                        yield this.forwardInputCase(['[xs, ...xs]'], {});
                    }
                }
                return new FormBuilder().build();
            }
        };
    }
    async function forEachExplanation() {
        return new class extends ATF.Explanations {
            constructor() {
                super(...arguments);
                this.id = 'for-of';
                this.caption = "for of";
                this.header = react_1.default.createElement(react_1.default.Fragment, null, "De For-Of Lus");
            }
            get explanations() {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ATF.Components.DescriptionBox, null,
                        react_1.default.createElement("p", null, "In de praktijk komt onderstaande lus enorm vaak voor:"),
                        renderStringSourceCode(`
                                for ( let i = 0; i !== xs.length; i++ )
                                {
                                    const x = xs[i];

                                    // ...
                                }
                            `),
                        react_1.default.createElement("p", null,
                            "Onze intentie is om elk element om beurt te behandelen, maar eigenlijk is deze lus vrij omslachtig. In een kookboek staat immers ook eerder \"voeg vijf eieren toe\" en niet \"nummer de eieren van 0 tot 4, schrijf 0 op een papiertje, kijk of het getal op het papiertje kleiner is dan 5, \u2026\" Om deze reden werd de ",
                            code(`for-of`),
                            " lus toegevoegd aan JavaScript. Bovenstaande code kan dan herschreven worden als"),
                        renderStringSourceCode(`
                                for ( let x of xs )
                                {
                                    // ...
                                }
                            `),
                        react_1.default.createElement("p", null, "Probeer telkens gebruik te maken van de meest geschikte lus, namelijk de lus die het best je intentie weerspiegelt."))));
            }
        };
    }
    async function repeat2() {
        const referenceFunction = Solutions.repeat2;
        const { functionName, signature, parameterNames: [n, xs] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die gegeven een positief geheel getal ",
                        code(n),
                        " en een array ",
                        code(xs),
                        " een nieuwe array teruggeeft gelijk aan de samenvoeging van ",
                        code(n),
                        " keer ",
                        code(xs),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput(0, []);
                        yield testCaseInput(0, [1]);
                        yield testCaseInput(1, []);
                        yield testCaseInput(1, [1]);
                        yield testCaseInput(2, [1]);
                        yield testCaseInput(5, [1]);
                        yield testCaseInput(2, [1, 2, 3]);
                        yield testCaseInput(3, [8, 1]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function indexOf() {
        const referenceFunction = Solutions.indexOf;
        const { functionName, signature, parameterNames: [xs, x] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die de index teruggeeft van ",
                        code(x),
                        " in ",
                        code(xs),
                        ". Indien ",
                        code(x),
                        " niet voorkomt in ",
                        code(xs),
                        ", moet de functie ",
                        code(`-1`),
                        " teruggeven.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], 0);
                        yield testCaseInput([0], 0);
                        yield testCaseInput([1, 2, 3], 1);
                        yield testCaseInput([1, 2, 3], 2);
                        yield testCaseInput([1, 2, 3], 3);
                        yield testCaseInput([1, 2, 3], 4);
                        yield testCaseInput([false], 0);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function lastIndexOf() {
        const referenceFunction = Solutions.lastIndexOf;
        const { functionName, signature, parameterNames: [xs, x] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 1;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die de index teruggeeft van het laatste voorkomen van ",
                        code(x),
                        " in ",
                        code(xs),
                        ". Indien ",
                        code(x),
                        " niet voorkomt in ",
                        code(xs),
                        ", moet de functie ",
                        code(`-1`),
                        " teruggeven."),
                    react_1.default.createElement("p", null, "Hoewel deze functionaliteit reeds bestaat is het de bedoeling van deze oefening dat je deze toch zelf implementeert."),
                    react_1.default.createElement(ExistingImplementations, null, [
                        new algo_testing_framework_1.SourceCode(algo_testing_framework_1.Language.JavaScript, `${xs}.lastIndexOf(${x})`),
                    ])));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], 0);
                        yield testCaseInput([0], 0);
                        yield testCaseInput([0, 0], 0);
                        yield testCaseInput([1, 2, 3], 1);
                        yield testCaseInput([1, 2, 3, 3, 2, 1], 1);
                        yield testCaseInput([1, 2, 3, 3, 2, 1], 2);
                        yield testCaseInput([1, 2, 3, 3, 2, 1], 3);
                        yield testCaseInput([1, 2, 3, 3, 2, 1], 4);
                        yield testCaseInput([false], 0);
                        yield testCaseInput([true], true);
                        yield testCaseInput([true, false, true], true);
                        yield testCaseInput([true, false, true], false);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function smallJumps() {
        const referenceFunction = Solutions.smallJumps;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die nagaat of opeenvolgende elementen van ",
                        code(ns),
                        " maximum 1 van elkaar verschillen.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 2, 1]);
                        yield testCaseInput([1, 2, 2, 2, 3]);
                        yield testCaseInput([1, 3]);
                        yield testCaseInput([4, 5, 6, 5, 4]);
                        yield testCaseInput([4, 5, 6, 4]);
                        yield testCaseInput([4, 5, 6, 5, 6, 6, 5, 4, 4, 3]);
                        yield testCaseInput([4, 5, 6, 5, 6, 4, 4, 3]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function removeLastOfEach() {
        const referenceFunction = Solutions.removeLastOfEach;
        const { functionName, signature, parameterNames: [ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 3;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die, gegeven een array getallen, het laatste voorkomen van elk element verwijdert uit de array. De oorspronkelijke array dient onveranderd te blijven. Geef het resultaat terug als een nieuwe array.")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([]);
                        yield testCaseInput([1]);
                        yield testCaseInput([1, 2]);
                        yield testCaseInput([1, 2, 1]);
                        yield testCaseInput([1, 2, 2, 2, 3, 3]);
                        yield testCaseInput([1, 2, 3, 2, 1, 3]);
                        yield testCaseInput([4, 5, 6, 6, 5, 4]);
                        yield testCaseInput([4, 5, 6, 4]);
                        yield testCaseInput([4, 5, 6, 5, 6, 6, 5, 4, 4, 3]);
                        yield testCaseInput([4, 5, 6, 5, 6, 4, 4, 3]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function common() {
        const referenceFunction = Solutions.common;
        const { functionName, signature, parameterNames: [ks, ns] } = ATF.Functional.parseFunction(referenceFunction);
        return new class extends exercise_section_1.ExerciseSection {
            constructor() {
                super(...arguments);
                this.solutionPack = referenceFunction;
                this.testedImplementation = student.fetch(functionName);
                this.difficulty = 2;
                this.description = (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", null,
                        "Schrijf een functie ",
                        code(signature),
                        " die, gegeven twee arrays getallen ",
                        code(ks),
                        " en ",
                        code(ns),
                        ", de gemeenschappelijke elementen teruggeeft als een array. Indien een waarde meermaals voorkomt in beide arrays, moet deze even vaak voorkomen in het resultaat. De waarden in de resultaatarray moeten in dezelfde volgorde voorkomen als in ",
                        code(ks),
                        ".")));
            }
            createExercise(testedImplementation) {
                return new class extends ReturnValueExercise {
                    constructor() {
                        super(...arguments);
                        this.referenceImplementation = referenceFunction;
                        this.testedImplementation = testedImplementation;
                    }
                    *generateTestCaseInputs() {
                        yield testCaseInput([], []);
                        yield testCaseInput([1], []);
                        yield testCaseInput([], [1]);
                        yield testCaseInput([1], [1]);
                        yield testCaseInput([1, 2], [1]);
                        yield testCaseInput([1, 2], [1, 2]);
                        yield testCaseInput([1, 2], [1, 2, 3]);
                        yield testCaseInput([1, 2, 3], [1, 2]);
                        yield testCaseInput([1, 1], [1, 1]);
                        yield testCaseInput([1, 1, 1], [1, 1]);
                        yield testCaseInput([1, 1], [1, 1, 1]);
                        yield testCaseInput([1, 2, 3, 4, 5], [1, 3, 5]);
                        yield testCaseInput([1, 1, 2, 2, 3, 4, 5], [1, 3, 5]);
                        yield testCaseInput([1, 1, 2, 2, 3, 4, 5], [1, 3, 3, 5, 5]);
                        yield testCaseInput([1, 2, 1, 2, 1], [1, 2, 3, 2, 1]);
                        function testCaseInput(...parameterValues) {
                            return { parameterValues, metadata: {} };
                        }
                    }
                };
            }
        };
    }
    async function finishLine() {
        return new ATF.FinishLineSection();
    }
}
function renderSourceCode(...fs) {
    const sc = new ATF.SourceCode(ATF.Language.JavaScript, fs.map(f => f.toString()).join("\n")).beautify();
    return (react_1.default.createElement("div", { style: { width: '80%', margin: '1em auto' } },
        react_1.default.createElement(ATF.Components.SourceCodeViewer, { sourceCode: sc })));
}
function renderStringSourceCode(sourceCode) {
    const sc = new ATF.SourceCode(ATF.Language.JavaScript, sourceCode).beautify();
    return (react_1.default.createElement("div", { style: { width: '80%', margin: '1em auto' } },
        react_1.default.createElement(ATF.Components.SourceCodeViewer, { sourceCode: sc })));
}
async function start() {
    const functionRepository = ATF.createFunctionRepositoryFromWindow();
    ATF.initialize(await createChapter(functionRepository), { verifySolutions: true });
}
start();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(5),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.common = exports.dropNth = exports.removeLastOfEach = exports.restaurant = exports.smallJumps = exports.repeat2 = exports.cut = exports.trimZeros = exports.clamp = exports.countTurns = exports.deltas = exports.incrementEach = exports.isSubsequenceOf = exports.removeRunsInPlace = exports.removeRuns = exports.mastermind = exports.uniqInPlace = exports.uniq = exports.longestIncreasingSubsequence = exports.missingNumber2 = exports.missingNumber = exports.isDecreasing = exports.isIncreasing = exports.mostFrequent2 = exports.mostFrequent = exports.isPermutation = exports.equalArrays = exports.isPalindrome = exports.reverseInPlace = exports.reverse = exports.allDifferent = exports.allEqual = exports.count = exports.contains = exports.any = exports.all = exports.range = exports.last = exports.first = exports.repeat = exports.maximum = exports.minimum = exports.lastIndexOf = exports.indexOf = exports.sum = void 0;
const algo_testing_framework_1 = __webpack_require__(0);
var aux;
(function (aux) {
    function repeat(n, x) {
        const result = new Array(n);
        for (let i = 0; i !== n; ++i) {
            result[i] = x;
        }
        return result;
    }
    aux.repeat = repeat;
    function count(value, xs) {
        let result = 0;
        for (const x of xs) {
            if (x === value) {
                result++;
            }
        }
        return result;
    }
    aux.count = count;
})(aux || (aux = {}));
var functional;
(function (functional) {
    function count(value, xs) {
        return xs.filter(x => x === value).length;
    }
    functional.count = count;
    function uniq(xs) {
        if (xs.length === 0) {
            return [];
        }
        else {
            const [x, ...rest] = xs;
            const filteredRest = rest.filter(y => x !== y);
            return [x, ...uniq(filteredRest)];
        }
    }
    functional.uniq = uniq;
})(functional || (functional = {}));
exports.sum = (() => {
    const withFor = function sum(ns) {
        let total = 0;
        for (let i = 0; i !== ns.length; ++i) {
            total += ns[i];
        }
        return total;
    };
    const withForOf = function sum(ns) {
        let total = 0;
        for (let n of ns) {
            total += n;
        }
        return total;
    };
    const referenceImplementation = withFor;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "for";
            this.implementation = withFor;
        }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "for of";
            this.implementation = withForOf;
        }
    });
})();
exports.indexOf = (() => {
    const withFor = function indexOf(xs, x) {
        for (let i = 0; i !== xs.length; ++i) {
            if (xs[i] === x) {
                return i;
            }
        }
        return -1;
    };
    const referenceImplementation = withFor;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "for";
            this.implementation = withFor;
        }
    });
})();
exports.lastIndexOf = (() => {
    const withFor = function lastIndexOf(xs, x) {
        for (let i = xs.length - 1; i >= 0; --i) {
            if (xs[i] === x) {
                return i;
            }
        }
        return -1;
    };
    const referenceImplementation = withFor;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "for";
            this.implementation = withFor;
        }
    });
})();
exports.minimum = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = function minimum(ns) {
                let result = Number.POSITIVE_INFINITY;
                for (let n of ns) {
                    if (result > n) {
                        result = n;
                    }
                }
                return result;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function minimum(ns) {
                let result = Number.POSITIVE_INFINITY;
                for (let i = 0; i !== ns.length; i++) {
                    if (result > ns[i]) {
                        result = ns[i];
                    }
                }
                return result;
            };
        }
    });
})();
exports.maximum = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = function maximum(ns) {
                let result = Number.NEGATIVE_INFINITY;
                for (let n of ns) {
                    if (result < n) {
                        result = n;
                    }
                }
                return result;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function maximum(ns) {
                let result = Number.NEGATIVE_INFINITY;
                for (let i = 0; i !== ns.length; i++) {
                    if (result < ns[i]) {
                        result = ns[i];
                    }
                }
                return result;
            };
        }
    });
})();
exports.repeat = ((repeat) => {
    const withFor = repeat;
    const referenceImplementation = withFor;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "for";
            this.implementation = withFor;
        }
    });
})(aux.repeat);
exports.first = (() => {
    const standard = function first(xs) {
        return xs[0];
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
    });
})();
exports.last = (() => {
    const standard = function last(xs) {
        return xs[xs.length - 1];
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
    });
})();
exports.range = (() => {
    const standard = function range(from, to) {
        if (to < from) {
            return [];
        }
        else {
            const length = to - from + 1;
            const result = new Array(length);
            for (let i = 0; i !== length; ++i) {
                result[i] = from + i;
            }
            return result;
        }
    };
    const withPush = function range(from, to) {
        const result = [];
        for (let i = from; i <= to; ++i) {
            result.push(i);
        }
        return result;
    };
    const withUnshift = function range(from, to) {
        const result = [];
        for (let i = to; i >= from; --i) {
            result.unshift(i);
        }
        return result;
    };
    const refimpl = withPush;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = 'standaard';
            this.implementation = standard;
        }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = 'push';
            this.implementation = withPush;
        }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = 'unshift';
            this.implementation = withUnshift;
        }
    });
})();
exports.all = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function all(bs) {
                for (let i = 0; i !== bs.length; i++) {
                    if (!bs[i]) {
                        return false;
                    }
                }
                return true;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = function all(bs) {
                for (let b of bs) {
                    if (!b) {
                        return false;
                    }
                }
                return true;
            };
        }
    });
})();
exports.any = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function any(bs) {
                for (let i = 0; i !== bs.length; i++) {
                    if (bs[i]) {
                        return true;
                    }
                }
                return false;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = function any(bs) {
                for (let b of bs) {
                    if (b) {
                        return true;
                    }
                }
                return false;
            };
        }
    });
})();
exports.contains = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function contains(value, xs) {
                for (let i = 0; i !== xs.length; i++) {
                    if (xs[i] === value) {
                        return true;
                    }
                }
                return false;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = function contains(value, xs) {
                for (let x of xs) {
                    if (x === value) {
                        return true;
                    }
                }
                return false;
            };
        }
    });
})();
exports.count = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function count(value, xs) {
                let result = 0;
                for (let i = 0; i !== xs.length; ++i) {
                    if (xs[i] === value) {
                        result++;
                    }
                }
                return result;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = aux.count;
        }
    });
})();
exports.allEqual = (() => {
    const standard = function allEqual(xs) {
        for (let i = 1; i < xs.length; ++i) {
            if (xs[i] !== xs[0]) {
                return false;
            }
        }
        return true;
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
    });
})();
exports.allDifferent = (() => {
    const standard = function allDifferent(xs) {
        for (let i = 0; i !== xs.length; ++i) {
            for (let j = i + 1; j < xs.length; ++j) {
                if (xs[i] === xs[j]) {
                    return false;
                }
            }
        }
        return true;
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
    });
})();
exports.reverse = (() => {
    const withTwoIndices = function reverse(xs) {
        const result = new Array(xs.length);
        let from = 0;
        let to = xs.length - 1;
        while (from < xs.length) {
            result[to] = xs[from];
            ++from;
            --to;
        }
        return result;
    };
    const withUnshift = function reverse(xs) {
        const result = [];
        for (const x of xs) {
            result.unshift(x);
        }
        return result;
    };
    const referenceImplementation = withTwoIndices;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "unshift";
            this.implementation = withUnshift;
        }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "2 indices";
            this.implementation = withTwoIndices;
        }
    });
})();
exports.reverseInPlace = (() => {
    const standard = function reverseInPlace(xs) {
        for (let i = 0; i < xs.length / 2; ++i) {
            const j = xs.length - i - 1;
            const temp = xs[i];
            xs[i] = xs[j];
            xs[j] = temp;
        }
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
    });
})();
exports.isPalindrome = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function isPalindrome(xs) {
                for (let i = 0; i < xs.length / 2; ++i) {
                    const j = xs.length - 1 - i;
                    if (xs[i] !== xs[j]) {
                        return false;
                    }
                }
                return true;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'while';
            this.implementation = function isPalindrome(xs) {
                let i = 0;
                let j = xs.length - 1;
                while (i < j) {
                    if (xs[i] !== xs[j]) {
                        return false;
                    }
                    i++;
                    j--;
                }
                return true;
            };
        }
    });
})();
exports.equalArrays = (() => {
    const standard = function equalArrays(xs, ys) {
        if (xs.length !== ys.length) {
            return false;
        }
        else {
            for (let i = 0; i !== xs.length; ++i) {
                if (xs[i] !== ys[i]) {
                    return false;
                }
            }
            return true;
        }
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
    });
})();
exports.isPermutation = ((repeat) => {
    const standard = function isPermutation(xs, ys) {
        if (xs.length !== ys.length) {
            return false;
        }
        else {
            const used = repeat(xs.length, false);
            for (let i = 0; i !== xs.length; ++i) {
                let found = false;
                let j = 0;
                while (!found && j !== ys.length) {
                    if (!used[j] && xs[i] === ys[j]) {
                        used[j] = true;
                        found = true;
                    }
                    else {
                        ++j;
                    }
                }
                if (!found) {
                    return false;
                }
            }
            return true;
        }
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
        get dependencies() { return [repeat]; }
    });
})(aux.repeat);
exports.mostFrequent = ((repeat) => {
    const monolithic = function mostFrequent(xs) {
        const used = repeat(xs.length, false);
        let mostFrequent = undefined;
        ;
        let mostFrequentCount = 0;
        for (let i = 0; i !== xs.length; ++i) {
            if (!used[i]) {
                let count = 1;
                for (let j = i + 1; j < xs.length; ++j) {
                    if (xs[i] === xs[j]) {
                        ++count;
                        used[j] = true;
                    }
                }
                if (count > mostFrequentCount) {
                    mostFrequent = xs[i];
                    mostFrequentCount = count;
                }
            }
        }
        return mostFrequent;
    };
    const counts = ((count) => function counts(xs) {
        const result = [];
        for (const x of xs) {
            const xCount = count(x, xs);
            result.push(xCount);
        }
        return result;
    })(aux.count);
    const findWithCount = ((count) => function findWithCount(xs, targetCount) {
        for (const x of xs) {
            if (count(x, xs) === targetCount) {
                return x;
            }
        }
        return undefined;
    })(aux.count);
    const withHelperFunctions = function mostFrequent(xs) {
        const cs = counts(xs);
        const maxCount = Math.max(...cs);
        return findWithCount(xs, maxCount);
    };
    const withLambdas = ((count) => function mostFrequent(xs) {
        const counts = xs.map(x => count(x, xs));
        const maxCount = Math.max(...counts);
        return xs.find(x => count(x, xs) === maxCount);
    })(functional.count);
    const referenceImplementation = monolithic;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "met hulpfuncties";
            this.implementation = withHelperFunctions;
        }
        get dependencies() { return [aux.count, counts, findWithCount]; }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "lambda's";
            this.implementation = withLambdas;
        }
        get dependencies() { return [functional.count]; }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "monolotisch";
            this.implementation = monolithic;
        }
        get dependencies() { return [repeat]; }
    });
})(aux.repeat);
exports.mostFrequent2 = (() => {
    const monolithic = ((repeat) => function mostFrequent2(xs) {
        const used = repeat(xs.length, false);
        let mostFrequent = [];
        let mostFrequentCount = 0;
        for (let i = 0; i !== xs.length; ++i) {
            if (!used[i]) {
                let count = 1;
                for (let j = i + 1; j < xs.length; ++j) {
                    if (xs[i] === xs[j]) {
                        ++count;
                        used[j] = true;
                    }
                }
                if (count > mostFrequentCount) {
                    mostFrequent = [xs[i]];
                    mostFrequentCount = count;
                }
                else if (count === mostFrequentCount) {
                    mostFrequent.push(xs[i]);
                }
            }
        }
        return mostFrequent;
    })(aux.repeat);
    const withLambdas = ((count, uniq) => function mostFrequent2(xs) {
        const uniqueXs = uniq(xs);
        const counts = uniqueXs.map(x => count(x, xs));
        const maxCount = Math.max(...counts);
        return uniqueXs.filter(x => count(x, xs) === maxCount);
    })(functional.count, functional.uniq);
    const counts = ((count) => function counts(xs) {
        const result = [];
        for (const x of xs) {
            const xCount = count(x, xs);
            result.push(xCount);
        }
        return result;
    })(aux.count);
    const findWithCount = ((count) => function findWithCount(xs, targetCount) {
        const result = [];
        for (const x of xs) {
            if (!result.includes(x) && count(x, xs) === targetCount) {
                result.push(x);
            }
        }
        return result;
    })(aux.count);
    const withHelperFunctions = function mostFrequent2(xs) {
        const cs = counts(xs);
        const maxCount = Math.max(...cs);
        return findWithCount(xs, maxCount);
    };
    const referenceImplementation = monolithic;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "met hulpfuncties";
            this.implementation = withHelperFunctions;
        }
        get dependencies() { return [counts, findWithCount, aux.count]; }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "lambda's";
            this.implementation = withLambdas;
        }
        get dependencies() { return [functional.count, functional.uniq]; }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "monolotisch";
            this.implementation = monolithic;
        }
        get dependencies() { return [aux.repeat]; }
    });
})();
exports.isIncreasing = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function isIncreasing(ns) {
                for (let i = 1; i < ns.length; ++i) {
                    if (ns[i - 1] > ns[i]) {
                        return false;
                    }
                }
                return true;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = function isIncreasing(ns) {
                let last = Number.NEGATIVE_INFINITY;
                for (let n of ns) {
                    if (n < last) {
                        return false;
                    }
                    last = n;
                }
                return true;
            };
        }
    });
})();
exports.isDecreasing = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function isDecreasing(ns) {
                for (let i = 1; i < ns.length; ++i) {
                    if (ns[i - 1] < ns[i]) {
                        return false;
                    }
                }
                return true;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = function isDecreasing(ns) {
                let last = Number.POSITIVE_INFINITY;
                for (let n of ns) {
                    if (n > last) {
                        return false;
                    }
                    last = n;
                }
                return true;
            };
        }
    });
})();
exports.missingNumber = algo_testing_framework_1.packSingleSolution(function missingNumber(ns) {
    for (let i = 0; i < ns.length - 1; i++) {
        if (ns[i] + 1 !== ns[i + 1]) {
            return ns[i] + 1;
        }
    }
    return 0;
});
exports.missingNumber2 = ((minimum, maximum, sum, range) => {
    const ref = function missingNumber2(ns) {
        const first = minimum(ns);
        const last = maximum(ns);
        let expectedTotal = sum(range(first, last));
        let actualTotal = sum(ns);
        return expectedTotal - actualTotal;
    };
    const referenceImplementation = ref;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "for";
            this.implementation = ref;
        }
        get dependencies() { return [minimum, maximum, sum, range]; }
    });
})(exports.minimum, exports.maximum, exports.sum, exports.range);
exports.longestIncreasingSubsequence = (() => {
    const standard = function longestIncreasingSubsequence(ns) {
        if (ns.length === 0) {
            return [];
        }
        else {
            let current = [ns[0]];
            let longest = current;
            for (let i = 1; i < ns.length; ++i) {
                const n = ns[i];
                if (last(current) <= n) {
                    current.push(n);
                    if (current.length > longest.length) {
                        longest = current;
                    }
                }
                else {
                    current = [n];
                }
            }
            return longest;
        }
    };
    function last(xs) {
        return xs[xs.length - 1];
    }
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
        get dependencies() { return [last]; }
    });
})();
exports.uniq = ((repeat) => {
    const recursive = functional.uniq;
    const standard = function uniq(xs) {
        const result = [];
        const used = repeat(xs.length, false);
        for (let i = 0; i !== xs.length; ++i) {
            if (!used[i]) {
                result.push(xs[i]);
                used[i] = true;
                for (let j = i + 1; j < xs.length; ++j) {
                    if (xs[j] === xs[i]) {
                        used[j] = true;
                    }
                }
            }
        }
        return result;
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "lussen";
            this.implementation = standard;
        }
        get dependencies() { return [repeat]; }
    }, new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "recursief";
            this.implementation = recursive;
        }
    });
})(aux.repeat);
function uniqInPlace(xs) {
    for (let i = 0; i < xs.length; ++i) {
        for (let j = xs.length - 1; j > i; --j) {
            if (xs[j] === xs[i]) {
                xs.splice(j, 1);
            }
        }
    }
}
exports.uniqInPlace = uniqInPlace;
exports.mastermind = ((repeat) => {
    const standard = function mastermind(xs, ys) {
        const usedXs = repeat(xs.length, false);
        const usedYs = repeat(xs.length, false);
        let placedCorrectly = 0;
        let placedIncorrectly = 0;
        for (let i = 0; i !== xs.length; ++i) {
            if (xs[i] === ys[i]) {
                ++placedCorrectly;
                usedXs[i] = true;
                usedYs[i] = true;
            }
        }
        for (let i = 0; i !== xs.length; ++i) {
            if (!usedXs[i]) {
                let found = false;
                let j = 0;
                while (j !== ys.length && !found) {
                    if (!usedYs[j] && xs[i] === ys[j]) {
                        placedIncorrectly++;
                        usedXs[i] = true;
                        usedYs[j] = true;
                        found = true;
                    }
                    ++j;
                }
            }
        }
        return [placedCorrectly, placedIncorrectly];
    };
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
        get dependencies() { return [repeat]; }
    });
})(aux.repeat);
function removeRuns(xs) {
    if (xs.length === 0) {
        return [];
    }
    else {
        const result = [xs[0]];
        for (let i = 1; i < xs.length; ++i) {
            if (xs[i - 1] !== xs[i]) {
                result.push(xs[i]);
            }
        }
        return result;
    }
}
exports.removeRuns = removeRuns;
function removeRunsInPlace(xs) {
    let i = 0;
    while (i < xs.length) {
        let j = i + 1;
        while (xs[i] === xs[j] && j < xs.length) {
            ++j;
        }
        xs.splice(i, j - i, xs[i]);
        ++i;
    }
}
exports.removeRunsInPlace = removeRunsInPlace;
function isSubsequenceOf(xs, ys) {
    let i = 0;
    let j = 0;
    while (i < xs.length && j < ys.length) {
        if (xs[i] === ys[j]) {
            ++i;
        }
        ++j;
    }
    return i == xs.length;
}
exports.isSubsequenceOf = isSubsequenceOf;
function incrementEach(ns) {
    for (let i = 0; i !== ns.length; ++i) {
        ns[i]++;
    }
}
exports.incrementEach = incrementEach;
function deltas(ns) {
    const result = new Array(ns.length - 1);
    for (let i = 1; i !== ns.length; ++i) {
        result[i - 1] = ns[i] - ns[i - 1];
    }
    return result;
}
exports.deltas = deltas;
exports.countTurns = algo_testing_framework_1.packSingleSolution(function countTurns(ns) {
    if (ns.length < 3) {
        return 0;
    }
    else {
        const ds = deltas(ns);
        let lastSign = Math.sign(ds[0]);
        let count = 0;
        for (let i = 1; i < ds.length; ++i) {
            const sign = Math.sign(ds[i]);
            if (sign !== 0 && sign !== lastSign) {
                count++;
                lastSign = sign;
            }
        }
        return count;
    }
}, [deltas]);
function clamp(ns, min, max) {
    for (let i = 0; i !== ns.length; ++i) {
        if (ns[i] < min) {
            ns[i] = min;
        }
        else if (ns[i] > max) {
            ns[i] = max;
        }
    }
}
exports.clamp = clamp;
exports.trimZeros = (() => {
    const standard = function trimZeros(ns) {
        while (ns.length > 0 && ns[0] === 0) {
            ns.shift();
        }
        while (ns.length > 0 && last(ns) === 0) {
            ns.pop();
        }
    };
    function last(xs) {
        return xs[xs.length - 1];
    }
    const referenceImplementation = standard;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "";
            this.implementation = standard;
        }
        get dependencies() { return [last]; }
    });
})();
function cut(xs, size) {
    while (xs.length > size) {
        xs.pop();
    }
}
exports.cut = cut;
function repeat2(n, xs) {
    let result = [];
    for (let i = 0; i !== n; i++) {
        result = [...result, ...xs];
    }
    return result;
}
exports.repeat2 = repeat2;
exports.smallJumps = (() => {
    class S extends algo_testing_framework_1.Solution {
    }
    ;
    return algo_testing_framework_1.packSolutions(new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for';
            this.implementation = function smallJumps(ns) {
                for (let i = 1; i < ns.length; ++i) {
                    if (Math.abs(ns[i] - ns[i - 1]) > 1) {
                        return false;
                    }
                }
                return true;
            };
        }
    }, new class extends S {
        constructor() {
            super(...arguments);
            this.label = 'for-of';
            this.implementation = function smallJumps(ns) {
                if (ns.length === 0) {
                    return true;
                }
                else {
                    let last = ns[0];
                    for (let n of ns.slice(1)) {
                        if (Math.abs(n - last) > 1) {
                            return false;
                        }
                        last = n;
                    }
                    return true;
                }
            };
        }
    });
})();
function restaurant(entrees, mainCourses, desserts, budget) {
    let selection = [0, 0, 0];
    let selectionSum = 0;
    for (const entree of entrees) {
        for (const mainCourse of mainCourses) {
            for (const dessert of desserts) {
                const sum = entree + mainCourse + dessert;
                if (selectionSum < sum && sum <= budget) {
                    selection = [entree, mainCourse, dessert];
                    selectionSum = sum;
                }
            }
        }
    }
    return selection;
}
exports.restaurant = restaurant;
function removeLastOfEach(ns) {
    const result = [];
    for (let i = 0; i !== ns.length; ++i) {
        if (ns.slice(i + 1).includes(ns[i])) {
            result.push(ns[i]);
        }
    }
    return result;
}
exports.removeLastOfEach = removeLastOfEach;
function dropNth(xs, index) {
    return [...xs.slice(0, index), ...xs.slice(index + 1)];
}
exports.dropNth = dropNth;
exports.common = ((indexOf, dropNth) => {
    const withLoop = function common(ks, ns) {
        const result = [];
        ns = [...ns];
        for (const k of ks) {
            const index = indexOf(ns, k);
            if (index !== -1) {
                result.push(k);
                ns = dropNth(ns, index);
            }
        }
        return result;
    };
    const referenceImplementation = withLoop;
    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {
        constructor() {
            super(...arguments);
            this.label = "for";
            this.implementation = withLoop;
        }
        get dependencies() { return [indexOf, dropNth]; }
    });
})(exports.indexOf, dropNth);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/maybe/dist/index.js":
/*!******************************************!*\
  !*** ./node_modules/maybe/dist/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap\r\n/******/ \t// The module cache\r\n/******/ \tvar installedModules = {};\r\n/******/\r\n/******/ \t// The require function\r\n/******/ \tfunction __webpack_require__(moduleId) {\r\n/******/\r\n/******/ \t\t// Check if module is in cache\r\n/******/ \t\tif(installedModules[moduleId]) {\r\n/******/ \t\t\treturn installedModules[moduleId].exports;\r\n/******/ \t\t}\r\n/******/ \t\t// Create a new module (and put it into the cache)\r\n/******/ \t\tvar module = installedModules[moduleId] = {\r\n/******/ \t\t\ti: moduleId,\r\n/******/ \t\t\tl: false,\r\n/******/ \t\t\texports: {}\r\n/******/ \t\t};\r\n/******/\r\n/******/ \t\t// Execute the module function\r\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\r\n/******/\r\n/******/ \t\t// Flag the module as loaded\r\n/******/ \t\tmodule.l = true;\r\n/******/\r\n/******/ \t\t// Return the exports of the module\r\n/******/ \t\treturn module.exports;\r\n/******/ \t}\r\n/******/\r\n/******/\r\n/******/ \t// expose the modules object (__webpack_modules__)\r\n/******/ \t__webpack_require__.m = modules;\r\n/******/\r\n/******/ \t// expose the module cache\r\n/******/ \t__webpack_require__.c = installedModules;\r\n/******/\r\n/******/ \t// define getter function for harmony exports\r\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\r\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\r\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\r\n/******/ \t\t}\r\n/******/ \t};\r\n/******/\r\n/******/ \t// define __esModule on exports\r\n/******/ \t__webpack_require__.r = function(exports) {\r\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\r\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\r\n/******/ \t\t}\r\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\r\n/******/ \t};\r\n/******/\r\n/******/ \t// create a fake namespace object\r\n/******/ \t// mode & 1: value is a module id, require it\r\n/******/ \t// mode & 2: merge all properties of value into the ns\r\n/******/ \t// mode & 4: return value when already ns object\r\n/******/ \t// mode & 8|1: behave like require\r\n/******/ \t__webpack_require__.t = function(value, mode) {\r\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\r\n/******/ \t\tif(mode & 8) return value;\r\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\r\n/******/ \t\tvar ns = Object.create(null);\r\n/******/ \t\t__webpack_require__.r(ns);\r\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\r\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\r\n/******/ \t\treturn ns;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\r\n/******/ \t__webpack_require__.n = function(module) {\r\n/******/ \t\tvar getter = module && module.__esModule ?\r\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\r\n/******/ \t\t\tfunction getModuleExports() { return module; };\r\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\r\n/******/ \t\treturn getter;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// Object.prototype.hasOwnProperty.call\r\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\r\n/******/\r\n/******/ \t// __webpack_public_path__\r\n/******/ \t__webpack_require__.p = \"\";\r\n/******/\r\n/******/\r\n/******/ \t// Load entry module and return exports\r\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.ts\");\r\n/******/ })\r\n/************************************************************************/\r\n/******/ ({\r\n\r\n/***/ \"./src/index.ts\":\r\n/*!**********************!*\\\r\n  !*** ./src/index.ts ***!\r\n  \\**********************/\r\n/*! no static exports found */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"\\r\\nfunction __export(m) {\\r\\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\\r\\n}\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\n__export(__webpack_require__(/*! ./maybe */ \\\"./src/maybe.ts\\\"));\\r\\n\\n\\n//# sourceURL=webpack:///./src/index.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/maybe.ts\":\r\n/*!**********************!*\\\r\n  !*** ./src/maybe.ts ***!\r\n  \\**********************/\r\n/*! no static exports found */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"\\r\\nvar __extends = (this && this.__extends) || (function () {\\r\\n    var extendStatics = Object.setPrototypeOf ||\\r\\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\\r\\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\\r\\n    return function (d, b) {\\r\\n        extendStatics(d, b);\\r\\n        function __() { this.constructor = d; }\\r\\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\\r\\n    };\\r\\n})();\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nvar Maybe = /** @class */ (function () {\\r\\n    function Maybe() {\\r\\n    }\\r\\n    Maybe.just = function (x) {\\r\\n        return new Just(x);\\r\\n    };\\r\\n    Maybe.nothing = function () {\\r\\n        return new Nothing();\\r\\n    };\\r\\n    return Maybe;\\r\\n}());\\r\\nexports.Maybe = Maybe;\\r\\nvar Just = /** @class */ (function (_super) {\\r\\n    __extends(Just, _super);\\r\\n    function Just(value) {\\r\\n        var _this = _super.call(this) || this;\\r\\n        _this.value = value;\\r\\n        return _this;\\r\\n    }\\r\\n    Just.prototype.bind = function (f) {\\r\\n        return f(this.value);\\r\\n    };\\r\\n    Just.prototype.lift = function (f) {\\r\\n        return Maybe.just(f(this.value));\\r\\n    };\\r\\n    Just.prototype.caseOf = function (cases) {\\r\\n        return cases.just(this.value);\\r\\n    };\\r\\n    Just.prototype.isJust = function () {\\r\\n        return true;\\r\\n    };\\r\\n    Just.prototype.useDefault = function (_) {\\r\\n        return this;\\r\\n    };\\r\\n    return Just;\\r\\n}(Maybe));\\r\\nexports.Just = Just;\\r\\nvar Nothing = /** @class */ (function (_super) {\\r\\n    __extends(Nothing, _super);\\r\\n    function Nothing() {\\r\\n        return _super !== null && _super.apply(this, arguments) || this;\\r\\n    }\\r\\n    Nothing.prototype.bind = function (_) {\\r\\n        return Maybe.nothing();\\r\\n    };\\r\\n    Nothing.prototype.lift = function (_) {\\r\\n        return Maybe.nothing();\\r\\n    };\\r\\n    Nothing.prototype.caseOf = function (cases) {\\r\\n        return cases.nothing();\\r\\n    };\\r\\n    Nothing.prototype.isJust = function () {\\r\\n        return false;\\r\\n    };\\r\\n    Nothing.prototype.useDefault = function (t) {\\r\\n        return Maybe.just(t);\\r\\n    };\\r\\n    return Nothing;\\r\\n}(Maybe));\\r\\nexports.Nothing = Nothing;\\r\\n\\n\\n//# sourceURL=webpack:///./src/maybe.ts?\");\r\n\r\n/***/ })\r\n\r\n/******/ })));\n\n//# sourceURL=webpack:///./node_modules/maybe/dist/index.js?");

/***/ }),

/***/ "./src/algorithms.ts":
/*!***************************!*\
  !*** ./src/algorithms.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst maybe_1 = __webpack_require__(/*! maybe */ \"./node_modules/maybe/dist/index.js\");\r\nfunction count(xs, predicate) {\r\n    let result = 0;\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            result++;\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.count = count;\r\nfunction range(from, to) {\r\n    if (from >= to) {\r\n        return new Array(0);\r\n    }\r\n    else {\r\n        const result = new Array(to - from);\r\n        for (let i = 0; i !== result.length; ++i) {\r\n            result[i] = from + i;\r\n        }\r\n        return result;\r\n    }\r\n}\r\nexports.range = range;\r\nfunction* generateRange(from, to) {\r\n    for (let i = from; i < to; ++i) {\r\n        yield i;\r\n    }\r\n}\r\nexports.generateRange = generateRange;\r\nfunction allEqual(xs, equality) {\r\n    const eq = equality || defaultEquality;\r\n    for (let i = 1; i < xs.length; ++i) {\r\n        if (!eq(xs[0], xs[i])) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.allEqual = allEqual;\r\nfunction filter(xs, predicate) {\r\n    const result = [];\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            result.push(x);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.filter = filter;\r\nfunction all(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (!predicate(x)) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.all = all;\r\nfunction any(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\nexports.any = any;\r\nfunction find(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.find = find;\r\nfunction minimumBy(xs, f) {\r\n    let bestScore = Number.POSITIVE_INFINITY;\r\n    let best = maybe_1.Maybe.nothing();\r\n    for (let x of xs) {\r\n        const score = f(x);\r\n        if (score < bestScore) {\r\n            bestScore = score;\r\n            best = maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return best;\r\n}\r\nexports.minimumBy = minimumBy;\r\nfunction maximumBy(xs, f) {\r\n    let bestScore = Number.NEGATIVE_INFINITY;\r\n    let best = maybe_1.Maybe.nothing();\r\n    for (let x of xs) {\r\n        const score = f(x);\r\n        if (score > bestScore) {\r\n            bestScore = score;\r\n            best = maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return best;\r\n}\r\nexports.maximumBy = maximumBy;\r\nfunction createArray(length, initializer) {\r\n    const result = new Array(length);\r\n    for (let i = 0; i !== length; ++i) {\r\n        result[i] = initializer(i);\r\n    }\r\n    return result;\r\n}\r\nexports.createArray = createArray;\r\nfunction repeat(n, x) {\r\n    return createArray(n, _ => x);\r\n}\r\nexports.repeat = repeat;\r\nfunction indices(xs) {\r\n    return range(0, xs.length);\r\n}\r\nexports.indices = indices;\r\nfunction isPermutation(xs, ys, equality) {\r\n    const eq = equality || defaultEquality;\r\n    if (xs.length !== ys.length) {\r\n        return false;\r\n    }\r\n    else {\r\n        const used = repeat(xs.length, false);\r\n        for (const x of xs) {\r\n            let found = false;\r\n            let i = 0;\r\n            while (!found && i < ys.length) {\r\n                if (!used[i] && eq(x, ys[i])) {\r\n                    used[i] = true;\r\n                    found = true;\r\n                }\r\n                ++i;\r\n            }\r\n            if (!found) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}\r\nexports.isPermutation = isPermutation;\r\nfunction defaultEquality(x, y) {\r\n    return x === y;\r\n}\r\nfunction sum(ns) {\r\n    let total = 0;\r\n    for (let n of ns) {\r\n        total += n;\r\n    }\r\n    return total;\r\n}\r\nexports.sum = sum;\r\nfunction map(xs, f) {\r\n    return createArray(xs.length, i => f(xs[i]));\r\n}\r\nexports.map = map;\r\nfunction contains(xs, y) {\r\n    return any(xs, x => x === y);\r\n}\r\nexports.contains = contains;\r\nfunction firstIndexOf(xs, predicate) {\r\n    for (let i = 0; i !== xs.length; ++i) {\r\n        const x = xs[i];\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(i);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.firstIndexOf = firstIndexOf;\r\nfunction lastIndexOf(xs, predicate) {\r\n    for (let i = xs.length - 1; i >= 0; --i) {\r\n        const x = xs[i];\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(i);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.lastIndexOf = lastIndexOf;\r\n\n\n//# sourceURL=webpack:///./src/algorithms.ts?");

/***/ }),

/***/ "./src/direction.ts":
/*!**************************!*\
  !*** ./src/direction.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Direction {\r\n    constructor(dx, dy) {\r\n        this.dx = dx;\r\n        this.dy = dy;\r\n    }\r\n    rotateCW() {\r\n        return new Direction(this.dy, -this.dx);\r\n    }\r\n    rotateCCW() {\r\n        return new Direction(-this.dy, this.dx);\r\n    }\r\n    get angleInDegrees() {\r\n        return Math.atan2(this.dy, this.dx) * 180 / Math.PI;\r\n    }\r\n}\r\nexports.Direction = Direction;\r\n\n\n//# sourceURL=webpack:///./src/direction.ts?");

/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst position_1 = __webpack_require__(/*! ./position */ \"./src/position.ts\");\r\nconst algorithms_1 = __webpack_require__(/*! ./algorithms */ \"./src/algorithms.ts\");\r\nconst direction_1 = __webpack_require__(/*! ./direction */ \"./src/direction.ts\");\r\nclass Grid {\r\n    row(rowIndex) {\r\n        if (rowIndex >= this.height) {\r\n            throw new Error(`rowIndex out of range`);\r\n        }\r\n        else {\r\n            return algorithms_1.range(0, this.width).map(columnIndex => this.at(new position_1.Position(columnIndex, rowIndex)));\r\n        }\r\n    }\r\n    column(columnIndex) {\r\n        if (columnIndex >= this.width) {\r\n            throw new Error(`columnIndex out of range`);\r\n        }\r\n        else {\r\n            return algorithms_1.range(0, this.height).map(rowIndex => this.at(new position_1.Position(columnIndex, rowIndex)));\r\n        }\r\n    }\r\n    *generatePositions() {\r\n        for (let y = 0; y !== this.height; ++y) {\r\n            for (let x = 0; x !== this.width; ++x) {\r\n                const position = new position_1.Position(x, y);\r\n                yield position;\r\n            }\r\n        }\r\n    }\r\n    get positions() {\r\n        return this.generatePositions();\r\n    }\r\n    isInside(position) {\r\n        return 0 <= position.x && position.x < this.width && 0 <= position.y && position.y < this.height;\r\n    }\r\n    toColumnArray() {\r\n        return algorithms_1.range(0, this.width).map(x => this.column(x));\r\n    }\r\n    toRowArray() {\r\n        return algorithms_1.range(0, this.height).map(y => this.row(y));\r\n    }\r\n    findPositions(predicate) {\r\n        return algorithms_1.filter(this.positions, (p) => predicate(this.at(p)));\r\n    }\r\n    map(f) {\r\n        return new ConcreteGrid(this.width, this.height, p => f(this.at(p)));\r\n    }\r\n    vmap(f) {\r\n        return new VirtualGrid(this.width, this.height, p => f(this.at(p)));\r\n    }\r\n    equal(grid, comparer) {\r\n        if (this.width !== grid.width || this.height !== grid.height) {\r\n            return false;\r\n        }\r\n        else {\r\n            return algorithms_1.all(this.positions, p => comparer(this.at(p), grid.at(p)));\r\n        }\r\n    }\r\n    around4(position) {\r\n        return algorithms_1.filter(position.around4, p => this.isInside(p));\r\n    }\r\n    around8(position) {\r\n        return algorithms_1.filter(position.around8, p => this.isInside(p));\r\n    }\r\n    iterator(position, direction) {\r\n        return new GridIterator(this, position, direction);\r\n    }\r\n    rowIterator(rowIndex) {\r\n        return this.iterator(new position_1.Position(0, rowIndex), new direction_1.Direction(1, 0));\r\n    }\r\n    columnIterator(columnIndex) {\r\n        return this.iterator(new position_1.Position(columnIndex, 0), new direction_1.Direction(0, 1));\r\n    }\r\n}\r\nexports.Grid = Grid;\r\nclass ConcreteGrid extends Grid {\r\n    constructor(width, height, initializer) {\r\n        super();\r\n        this.width = width;\r\n        this.height = height;\r\n        this.items = new Array(height);\r\n        for (let y = 0; y !== height; ++y) {\r\n            this.items[y] = new Array(width);\r\n            for (let x = 0; x !== width; ++x) {\r\n                const position = new position_1.Position(x, y);\r\n                this.items[y][x] = initializer(position);\r\n            }\r\n        }\r\n    }\r\n    at(position) {\r\n        if (!this.isInside(position)) {\r\n            throw new Error(`Invalid position ${position.toString()}`);\r\n        }\r\n        else {\r\n            return this.items[position.y][position.x];\r\n        }\r\n    }\r\n}\r\nclass VirtualGrid extends Grid {\r\n    constructor(width, height, fetch) {\r\n        super();\r\n        this.width = width;\r\n        this.height = height;\r\n        this.fetch = fetch;\r\n    }\r\n    at(position) {\r\n        if (!this.isInside(position)) {\r\n            throw new Error(`Invalid position ${position.toString()}`);\r\n        }\r\n        else {\r\n            return this.fetch(position);\r\n        }\r\n    }\r\n}\r\nclass GridIterator {\r\n    constructor(grid, _position, direction) {\r\n        this.grid = grid;\r\n        this._position = _position;\r\n        this.direction = direction;\r\n    }\r\n    get endReached() {\r\n        return this.grid.isInside(this._position);\r\n    }\r\n    get pointee() {\r\n        return this.grid.at(this._position);\r\n    }\r\n    next() {\r\n        this._position = this._position.add(this.direction);\r\n    }\r\n    get position() {\r\n        return this._position;\r\n    }\r\n}\r\nfunction createGrid(width, height, initializer) {\r\n    return new ConcreteGrid(width, height, initializer);\r\n}\r\nexports.createGrid = createGrid;\r\n\n\n//# sourceURL=webpack:///./src/grid.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./algorithms */ \"./src/algorithms.ts\"));\r\n__export(__webpack_require__(/*! ./direction */ \"./src/direction.ts\"));\r\n__export(__webpack_require__(/*! ./position */ \"./src/position.ts\"));\r\n__export(__webpack_require__(/*! ./grid */ \"./src/grid.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/position.ts":
/*!*************************!*\
  !*** ./src/position.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Position {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    add(direction) {\r\n        return new Position(this.x + direction.dx, this.y + direction.dy);\r\n    }\r\n    get around4() {\r\n        const result = new Array(4);\r\n        result[0] = new Position(this.x - 1, this.y);\r\n        result[1] = new Position(this.x + 1, this.y);\r\n        result[2] = new Position(this.x, this.y - 1);\r\n        result[3] = new Position(this.x, this.y + 1);\r\n        return result;\r\n    }\r\n    get around8() {\r\n        const result = new Array(8);\r\n        result[0] = new Position(this.x + 1, this.y);\r\n        result[1] = new Position(this.x + 1, this.y + 1);\r\n        result[2] = new Position(this.x, this.y + 1);\r\n        result[3] = new Position(this.x - 1, this.y + 1);\r\n        result[4] = new Position(this.x - 1, this.y);\r\n        result[5] = new Position(this.x - 1, this.y - 1);\r\n        result[6] = new Position(this.x, this.y - 1);\r\n        result[7] = new Position(this.x + 1, this.y - 1);\r\n        return result;\r\n    }\r\n    touches4(p) {\r\n        const dx = Math.abs(this.x - p.x);\r\n        const dy = Math.abs(this.y - p.y);\r\n        return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);\r\n    }\r\n    touches8(p) {\r\n        const dx = Math.abs(this.x - p.x);\r\n        const dy = Math.abs(this.y - p.y);\r\n        return (dx === 0 || dx === 1) && (dy === 0 || dy === 1) && (dx !== 0 || dy !== 0);\r\n    }\r\n}\r\nexports.Position = Position;\r\n\n\n//# sourceURL=webpack:///./src/position.ts?");

/***/ })

/******/ })));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./maybe */ \"./src/maybe.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/maybe.ts":
/*!**********************!*\
  !*** ./src/maybe.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Maybe = /** @class */ (function () {\r\n    function Maybe() {\r\n    }\r\n    Maybe.just = function (x) {\r\n        return new Just(x);\r\n    };\r\n    Maybe.nothing = function () {\r\n        return new Nothing();\r\n    };\r\n    return Maybe;\r\n}());\r\nexports.Maybe = Maybe;\r\nfunction absorbUndefined(x) {\r\n    return x.bind(function (y) { return typeof y === 'undefined' ? Maybe.nothing() : Maybe.just(y); });\r\n}\r\nexports.absorbUndefined = absorbUndefined;\r\nfunction getProperty(obj, key) {\r\n    if (key in obj) {\r\n        var value = obj[key];\r\n        return Maybe.just(value);\r\n    }\r\n    else {\r\n        return Maybe.nothing();\r\n    }\r\n}\r\nexports.getProperty = getProperty;\r\nfunction maybePartial(obj) {\r\n    return new Proxy(obj, {\r\n        get: function (obj, property) {\r\n            if (property in obj) {\r\n                return Maybe.just(obj[property]);\r\n            }\r\n            else {\r\n                return Maybe.nothing();\r\n            }\r\n        }\r\n    });\r\n}\r\nexports.maybePartial = maybePartial;\r\nvar Just = /** @class */ (function (_super) {\r\n    __extends(Just, _super);\r\n    function Just(value) {\r\n        var _this = _super.call(this) || this;\r\n        _this.value = value;\r\n        return _this;\r\n    }\r\n    Just.prototype.bind = function (f) {\r\n        return f(this.value);\r\n    };\r\n    Just.prototype.lift = function (f) {\r\n        return Maybe.just(f(this.value));\r\n    };\r\n    Just.prototype.caseOf = function (cases) {\r\n        return cases.just(this.value);\r\n    };\r\n    Just.prototype.isJust = function () {\r\n        return true;\r\n    };\r\n    Just.prototype.useDefault = function (_) {\r\n        return this;\r\n    };\r\n    return Just;\r\n}(Maybe));\r\nexports.Just = Just;\r\nvar Nothing = /** @class */ (function (_super) {\r\n    __extends(Nothing, _super);\r\n    function Nothing() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Nothing.prototype.bind = function (_) {\r\n        return Maybe.nothing();\r\n    };\r\n    Nothing.prototype.lift = function (_) {\r\n        return Maybe.nothing();\r\n    };\r\n    Nothing.prototype.caseOf = function (cases) {\r\n        return cases.nothing();\r\n    };\r\n    Nothing.prototype.isJust = function () {\r\n        return false;\r\n    };\r\n    Nothing.prototype.useDefault = function (t) {\r\n        return Maybe.just(t);\r\n    };\r\n    return Nothing;\r\n}(Maybe));\r\nexports.Nothing = Nothing;\r\n/**\r\n * Takes an object with Maybe properties. If every property is Just,\r\n * an object with Maybes replaced by their values is returned.\r\n * If one property is Nothing, undefined is returned.\r\n * Non-maybe properties are simply copied.\r\n *\r\n * @param obj Object to unpartialize.\r\n */\r\nfunction raiseMaybe(obj) {\r\n    var result = {};\r\n    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {\r\n        var key = _a[_i];\r\n        var typedKey = key;\r\n        var propertyValue = obj[typedKey];\r\n        if (propertyValue.isJust()) {\r\n            // It's a Just: retrieve value and put it in result\r\n            result[typedKey] = propertyValue.value;\r\n        }\r\n        else {\r\n            // We found a Nothing, abort operation\r\n            return Maybe.nothing();\r\n        }\r\n    }\r\n    return Maybe.just(result);\r\n}\r\nexports.raiseMaybe = raiseMaybe;\r\n\n\n//# sourceURL=webpack:///./src/maybe.ts?");

/***/ })

/******/ })));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseSection = void 0;
const ATF = __importStar(__webpack_require__(0));
class ExerciseSection extends ATF.Sections.CodingExerciseSection {
    constructor() {
        super(...arguments);
        this.verifySolutions = true;
    }
}
exports.ExerciseSection = ExerciseSection;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterViewer = void 0;
const react_1 = __importDefault(__webpack_require__(1));
const ATF = __importStar(__webpack_require__(0));
const algo_testing_framework_1 = __webpack_require__(0);
const str = ATF.Formatters.String.convertToString;
const Table = algo_testing_framework_1.styled.table `
    border-collapse: collapse;
    border: #888 1px solid;

    td {
        border: #888 1px solid;
        padding: 0.2em 0.5em;

        &:first-child {
            background: #AAA;
        }
    }

    .key {
        font-variant: small-caps;
        text-align: right;
    }

    .value {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
    }

    .empty {
        text-align: center;
        font-style: italic;
    }
`;
class ParameterViewer extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const object = this.props.parameters;
        const keys = Object.keys(object);
        if (keys.length === 0) {
            return this.renderEmptyObject();
        }
        else {
            return this.renderNonEmptyObject(keys);
        }
    }
    renderEmptyObject() {
        return (react_1.default.createElement(Table, { className: this.props.className },
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", { className: "empty" }, "Empty")))));
    }
    renderNonEmptyObject(keys) {
        return (react_1.default.createElement(Table, { className: this.props.className },
            react_1.default.createElement("tbody", null, this.renderRows(keys))));
    }
    renderRows(keys) {
        return keys.map((key, index) => {
            const value = this.props.parameters[key];
            return (react_1.default.createElement("tr", { key: `row-${index}` }, this.renderRow(key, value)));
        });
    }
    renderRow(key, value) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("td", { className: "key" }, this.renderKey(key)),
            react_1.default.createElement("td", { className: "value" }, this.renderValue(key, value))));
    }
    renderKey(key) {
        return (react_1.default.createElement(react_1.default.Fragment, null, key));
    }
    renderValue(key, value) {
        const renderer = this.props.renderer || defaultRenderer;
        return (react_1.default.createElement(react_1.default.Fragment, null, renderer(key, value)));
        function defaultRenderer(key, x) {
            return (react_1.default.createElement(react_1.default.Fragment, null, str(x)));
        }
    }
}
exports.ParameterViewer = ParameterViewer;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "tests.html");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "student.js");

/***/ })
/******/ ]);