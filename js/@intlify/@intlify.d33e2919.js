var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}
/*!
  * @intlify/shared v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const r="undefined"!=typeof window;let o,a;{const e=r&&window.performance;e&&e.mark&&e.measure&&e.clearMarks&&e.clearMeasures&&(o=t=>e.mark(t),a=(t,n,r)=>{e.measure(t,n,r),e.clearMarks(n),e.clearMarks(r)})}const s=/\{([0-9a-zA-Z]+)\}/g;function c(e,...t){return 1===t.length&&x(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(s,((e,n)=>t.hasOwnProperty(n)?t[n]:""))}const l="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,i=(e,t,n)=>u({l:e,k:t,s:n}),u=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),f=e=>"number"==typeof e&&isFinite(e),m=e=>"[object Date]"===O(e),p=e=>"[object RegExp]"===O(e),d=e=>S(e)&&0===Object.keys(e).length;function g(e,t){}const k=Object.assign;let h;const y=()=>h||(h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function b(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const _=Object.prototype.hasOwnProperty;const v=Array.isArray,w=e=>"function"==typeof e,T=e=>"string"==typeof e,L=e=>"boolean"==typeof e,x=e=>null!==e&&"object"==typeof e,C=Object.prototype.toString,O=e=>C.call(e),S=e=>"[object Object]"===O(e),P=e=>null==e?"":v(e)||S(e)&&e.toString===C?JSON.stringify(e,null,2):String(e);function $(e,t=0,n=e.length){const r=e.split(/\r?\n/);let o=0;const a=[];for(let s=0;s<r.length;s++)if(o+=r[s].length+1,o>=t){for(let e=s-2;e<=s+2||n>o;e++){if(e<0||e>=r.length)continue;const c=e+1;a.push(`${c}${" ".repeat(3-String(c).length)}|  ${r[e]}`);const l=r[e].length;if(e===s){const e=t-(o-l)+1,r=Math.max(1,n>o?l-e:n-t);a.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(e>s){if(n>o){const e=Math.max(Math.min(n-o,l),1);a.push("   |  "+"^".repeat(e))}o+=l+1}}break}return a.join("\n")}var F=n(Object.freeze(Object.defineProperty({__proto__:null,assign:k,createEmitter:function(){const e=new Map;return{events:e,on(t,n){const r=e.get(t);r&&r.push(n)||e.set(t,[n])},off(t,n){const r=e.get(t);r&&r.splice(r.indexOf(n)>>>0,1)},emit(t,n){(e.get(t)||[]).slice().map((e=>e(n))),(e.get("*")||[]).slice().map((e=>e(t,n)))}}},escapeHtml:b,format:c,friendlyJSONstringify:u,generateCodeFrame:$,generateFormatCacheKey:i,getGlobalThis:y,hasOwn:function(e,t){return _.call(e,t)},inBrowser:r,isArray:v,isBoolean:L,isDate:m,isEmptyObject:d,isFunction:w,isNumber:f,isObject:x,isPlainObject:S,isPromise:e=>x(e)&&w(e.then)&&w(e.catch),isRegExp:p,isString:T,isSymbol:e=>"symbol"==typeof e,makeSymbol:e=>l?Symbol(e):e,get mark(){return o},get measure(){return a},objectToString:C,toDisplayString:P,toTypeString:O,warn:g},Symbol.toStringTag,{value:"Module"})));
/*!
  * @intlify/message-resolver v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const I=Object.prototype.hasOwnProperty;function M(e,t){return I.call(e,t)}const N=e=>null!==e&&"object"==typeof e,W=[];W[0]={w:[0],i:[3,0],"[":[4],o:[7]},W[1]={w:[1],".":[2],"[":[4],o:[7]},W[2]={w:[2],i:[3,0],0:[3,0]},W[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},W[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},W[5]={"'":[4,0],o:8,l:[5,0]},W[6]={'"':[4,0],o:8,l:[6,0]};const E=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function j(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function A(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,E.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}function D(e){const t=[];let n,r,o,a,s,c,l,i=-1,u=0,f=0;const m=[];function p(){const t=e[i+1];if(5===u&&"'"===t||6===u&&'"'===t)return i++,o="\\"+t,m[0](),!0}for(m[0]=()=>{void 0===r?r=o:r+=o},m[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},m[2]=()=>{m[0](),f++},m[3]=()=>{if(f>0)f--,u=4,m[0]();else{if(f=0,void 0===r)return!1;if(r=A(r),!1===r)return!1;m[1]()}};null!==u;)if(i++,n=e[i],"\\"!==n||!p()){if(a=j(n),l=W[u],s=l[a]||l.l||8,8===s)return;if(u=s[0],void 0!==s[1]&&(c=m[s[1]],c&&(o=n,!1===c())))return;if(7===u)return t}}const R=new Map;function U(e,t){if(!N(e))return null;let n=R.get(t);if(n||(n=D(t),n&&R.set(t,n)),!n)return null;const r=n.length;let o=e,a=0;for(;a<r;){const e=o[n[a]];if(void 0===e)return null;o=e,a++}return o}
/*!
  * @intlify/runtime v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const H=e=>e,z=e=>"",J=e=>0===e.length?"":e.join(""),V=P;function q(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function G(e={}){const t=e.locale,n=function(e){const t=f(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(f(e.named.count)||f(e.named.n))?f(e.named.count)?e.named.count:f(e.named.n)?e.named.n:t:t}(e),r=x(e.pluralRules)&&T(t)&&w(e.pluralRules[t])?e.pluralRules[t]:q,o=x(e.pluralRules)&&T(t)&&w(e.pluralRules[t])?q:void 0,a=e.list||[],s=e.named||{};f(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,s);function c(t){const n=w(e.messages)?e.messages(t):!!x(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):z)}const l=S(e.processor)&&w(e.processor.normalize)?e.processor.normalize:J,i=S(e.processor)&&w(e.processor.interpolate)?e.processor.interpolate:V,u={list:e=>a[e],named:e=>s[e],plural:e=>e[r(n,e.length,o)],linked:(t,n)=>{const r=c(t)(u);return T(n)?(o=n,e.modifiers?e.modifiers[o]:H)(r):r;var o},message:c,type:S(e.processor)&&T(e.processor.type)?e.processor.type:"text",interpolate:i,normalize:l};return u}
/*!
  * @intlify/message-compiler v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const K={0:"Expected token: '{0}'",1:"Invalid token in placeholder: '{0}'",2:"Unterminated single quote in placeholder",3:"Unknown escape sequence: \\{0}",4:"Invalid unicode escape sequence: {0}",5:"Unbalanced closing brace",6:"Unterminated closing brace",7:"Empty placeholder",8:"Not allowed nest placeholder",9:"Invalid linked format",10:"Plural must have messages",11:"Unexpected empty linked modifier",12:"Unexpected empty linked key",13:"Unexpected lexical analysis in token: '{0}'"};function Y(e,t,n={}){const{domain:r,messages:o,args:a}=n,s=c((o||K)[e]||"",...a||[]),l=new SyntaxError(String(s));return l.code=e,t&&(l.location=t),l.domain=r,l}function B(e){throw e}function X(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const Z=String.fromCharCode(8232),Q=String.fromCharCode(8233);function ee(e){const t=e;let n=0,r=1,o=1,a=0;const s=e=>"\r"===t[e]&&"\n"===t[e+1],c=e=>t[e]===Q,l=e=>t[e]===Z,i=e=>s(e)||(e=>"\n"===t[e])(e)||c(e)||l(e),u=e=>s(e)||c(e)||l(e)?"\n":t[e];function f(){return a=0,i(n)&&(r++,o=0),s(n)&&n++,n++,o++,t[n]}return{index:()=>n,line:()=>r,column:()=>o,peekOffset:()=>a,charAt:u,currentChar:()=>u(n),currentPeek:()=>u(n+a),next:f,peek:function(){return s(n+a)&&a++,a++,t[n+a]},reset:function(){n=0,r=1,o=1,a=0},resetPeek:function(e=0){a=e},skipToPeek:function(){const e=n+a;for(;e!==n;)f();a=0}}}const te=void 0;function ne(e,t={}){const n=!1!==t.location,r=ee(e),o=()=>r.index(),a=()=>{return e=r.line(),t=r.column(),n=r.index(),{line:e,column:t,offset:n};var e,t,n},s=a(),c=o(),l={currentType:14,offset:c,startLoc:s,endLoc:s,lastType:14,lastOffset:c,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},i=()=>l,{onError:u}=t;function f(e,t,n,...r){const o=i();if(t.column+=n,t.offset+=n,u){const n=Y(e,X(o.startLoc,t),{domain:"tokenizer",args:r});u(n)}}function m(e,t,r){e.endLoc=a(),e.currentType=t;const o={type:t};return n&&(o.loc=X(e.startLoc,e.endLoc)),null!=r&&(o.value=r),o}const p=e=>m(e,14);function d(e,t){return e.currentChar()===t?(e.next(),t):(f(0,a(),0,t),"")}function g(e){let t="";for(;" "===e.currentPeek()||"\n"===e.currentPeek();)t+=e.currentPeek(),e.peek();return t}function k(e){const t=g(e);return e.skipToPeek(),t}function h(e){if(e===te)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function y(e,t){const{currentType:n}=t;if(2!==n)return!1;g(e);const r=function(e){if(e===te)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}("-"===e.currentPeek()?e.peek():e.currentPeek());return e.resetPeek(),r}function b(e){g(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function _(e,t=!0){const n=(t=!1,r="",o=!1)=>{const a=e.currentPeek();return"{"===a?"%"!==r&&t:"@"!==a&&a?"%"===a?(e.peek(),n(t,"%",!0)):"|"===a?!("%"!==r&&!o)||!(" "===r||"\n"===r):" "===a?(e.peek(),n(!0," ",o)):"\n"!==a||(e.peek(),n(!0,"\n",o)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function v(e,t){const n=e.currentChar();return n===te?te:t(n)?(e.next(),n):null}function w(e){return v(e,(e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t}))}function T(e){return v(e,(e=>{const t=e.charCodeAt(0);return t>=48&&t<=57}))}function L(e){return v(e,(e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}))}function x(e){let t="",n="";for(;t=T(e);)n+=t;return n}function C(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return O(e,t,4);case"U":return O(e,t,6);default:return f(3,a(),0,t),""}}function O(e,t,n){d(e,t);let r="";for(let o=0;o<n;o++){const n=L(e);if(!n){f(4,a(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function S(e){k(e);const t=d(e,"|");return k(e),t}function P(e,t){let n=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&f(8,a(),0),e.next(),n=m(t,2,"{"),k(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&f(7,a(),0),e.next(),n=m(t,3,"}"),t.braceNest--,t.braceNest>0&&k(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&f(6,a(),0),n=$(e,t)||p(t),t.braceNest=0,n;default:let r=!0,o=!0,s=!0;if(b(e))return t.braceNest>0&&f(6,a(),0),n=m(t,1,S(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return f(6,a(),0),t.braceNest=0,F(e,t);if(r=function(e,t){const{currentType:n}=t;if(2!==n)return!1;g(e);const r=h(e.currentPeek());return e.resetPeek(),r}(e,t))return n=m(t,5,function(e){k(e);let t="",n="";for(;t=w(e);)n+=t;return e.currentChar()===te&&f(6,a(),0),n}(e)),k(e),n;if(o=y(e,t))return n=m(t,6,function(e){k(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${x(e)}`):t+=x(e),e.currentChar()===te&&f(6,a(),0),t}(e)),k(e),n;if(s=function(e,t){const{currentType:n}=t;if(2!==n)return!1;g(e);const r="'"===e.currentPeek();return e.resetPeek(),r}(e,t))return n=m(t,7,function(e){k(e),d(e,"'");let t="",n="";const r=e=>"'"!==e&&"\n"!==e;for(;t=v(e,r);)n+="\\"===t?C(e):t;const o=e.currentChar();return"\n"===o||o===te?(f(2,a(),0),"\n"===o&&(e.next(),d(e,"'")),n):(d(e,"'"),n)}(e)),k(e),n;if(!r&&!o&&!s)return n=m(t,13,function(e){k(e);let t="",n="";const r=e=>"{"!==e&&"}"!==e&&" "!==e&&"\n"!==e;for(;t=v(e,r);)n+=t;return n}(e)),f(1,a(),0,n.value),k(e),n}return n}function $(e,t){const{currentType:n}=t;let r=null;const o=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||"\n"!==o&&" "!==o||f(9,a(),0),o){case"@":return e.next(),r=m(t,8,"@"),t.inLinked=!0,r;case".":return k(e),e.next(),m(t,9,".");case":":return k(e),e.next(),m(t,10,":");default:return b(e)?(r=m(t,1,S(e)),t.braceNest=0,t.inLinked=!1,r):function(e,t){const{currentType:n}=t;if(8!==n)return!1;g(e);const r="."===e.currentPeek();return e.resetPeek(),r}(e,t)||function(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;g(e);const r=":"===e.currentPeek();return e.resetPeek(),r}(e,t)?(k(e),$(e,t)):function(e,t){const{currentType:n}=t;if(9!==n)return!1;g(e);const r=h(e.currentPeek());return e.resetPeek(),r}(e,t)?(k(e),m(t,12,function(e){let t="",n="";for(;t=w(e);)n+=t;return n}(e))):function(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?h(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||" "===t||!t)&&("\n"===t?(e.peek(),r()):h(t))},o=r();return e.resetPeek(),o}(e,t)?(k(e),"{"===o?P(e,t)||r:m(t,11,function(e){const t=(n=!1,r)=>{const o=e.currentChar();return"{"!==o&&"%"!==o&&"@"!==o&&"|"!==o&&o?" "===o?r:"\n"===o?(r+=o,e.next(),t(n,r)):(r+=o,e.next(),t(!0,r)):r};return t(!1,"")}(e))):(8===n&&f(9,a(),0),t.braceNest=0,t.inLinked=!1,F(e,t))}}function F(e,t){let n={type:14};if(t.braceNest>0)return P(e,t)||p(t);if(t.inLinked)return $(e,t)||p(t);const r=e.currentChar();switch(r){case"{":return P(e,t)||p(t);case"}":return f(5,a(),0),e.next(),m(t,3,"}");case"@":return $(e,t)||p(t);default:if(b(e))return n=m(t,1,S(e)),t.braceNest=0,t.inLinked=!1,n;if(_(e))return m(t,0,function(e){let t="";for(;;){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!_(e))break;t+=n,e.next()}else if(" "===n||"\n"===n)if(_(e))t+=n,e.next();else{if(b(e))break;t+=n,e.next()}else t+=n,e.next()}return t}(e));if("%"===r)return e.next(),m(t,4,"%")}return n}return{nextToken:function(){const{currentType:e,offset:t,startLoc:n,endLoc:s}=l;return l.lastType=e,l.lastOffset=t,l.lastStartLoc=n,l.lastEndLoc=s,l.offset=o(),l.startLoc=a(),r.currentChar()===te?m(l,14):F(r,l)},currentOffset:o,currentPosition:a,context:i}}const re=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function oe(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function ae(e={}){const t=!1!==e.location,{onError:n}=e;function r(e,t,r,o,...a){const s=e.currentPosition();if(s.offset+=o,s.column+=o,n){const e=Y(t,X(r,s),{domain:"parser",args:a});n(e)}}function o(e,n,r){const o={type:e,start:n,end:n};return t&&(o.loc={start:r,end:r}),o}function a(e,n,r,o){e.end=n,o&&(e.type=o),t&&e.loc&&(e.loc.end=r)}function s(e,t){const n=e.context(),r=o(3,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}function c(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,c=o(5,r,s);return c.index=parseInt(t,10),e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function l(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,c=o(4,r,s);return c.key=t,e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function i(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,c=o(9,r,s);return c.value=t.replace(re,oe),e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function u(e){const t=e.context(),n=o(6,t.offset,t.startLoc);let s=e.nextToken();if(9===s.type){const t=function(e){const t=e.nextToken(),n=e.context(),{lastOffset:s,lastStartLoc:c}=n,l=o(8,s,c);return 12!==t.type?(r(e,11,n.lastStartLoc,0),l.value="",a(l,s,c),{nextConsumeToken:t,node:l}):(null==t.value&&r(e,13,n.lastStartLoc,0,se(t)),l.value=t.value||"",a(l,e.currentOffset(),e.currentPosition()),{node:l})}(e);n.modifier=t.node,s=t.nextConsumeToken||e.nextToken()}switch(10!==s.type&&r(e,13,t.lastStartLoc,0,se(s)),s=e.nextToken(),2===s.type&&(s=e.nextToken()),s.type){case 11:null==s.value&&r(e,13,t.lastStartLoc,0,se(s)),n.key=function(e,t){const n=e.context(),r=o(7,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}(e,s.value||"");break;case 5:null==s.value&&r(e,13,t.lastStartLoc,0,se(s)),n.key=l(e,s.value||"");break;case 6:null==s.value&&r(e,13,t.lastStartLoc,0,se(s)),n.key=c(e,s.value||"");break;case 7:null==s.value&&r(e,13,t.lastStartLoc,0,se(s)),n.key=i(e,s.value||"");break;default:r(e,12,t.lastStartLoc,0);const u=e.context(),f=o(7,u.offset,u.startLoc);return f.value="",a(f,u.offset,u.startLoc),n.key=f,a(n,u.offset,u.startLoc),{nextConsumeToken:s,node:n}}return a(n,e.currentOffset(),e.currentPosition()),{node:n}}function f(e){const t=e.context(),n=o(2,1===t.currentType?e.currentOffset():t.offset,1===t.currentType?t.endLoc:t.startLoc);n.items=[];let f=null;do{const o=f||e.nextToken();switch(f=null,o.type){case 0:null==o.value&&r(e,13,t.lastStartLoc,0,se(o)),n.items.push(s(e,o.value||""));break;case 6:null==o.value&&r(e,13,t.lastStartLoc,0,se(o)),n.items.push(c(e,o.value||""));break;case 5:null==o.value&&r(e,13,t.lastStartLoc,0,se(o)),n.items.push(l(e,o.value||""));break;case 7:null==o.value&&r(e,13,t.lastStartLoc,0,se(o)),n.items.push(i(e,o.value||""));break;case 8:const a=u(e);n.items.push(a.node),f=a.nextConsumeToken||null}}while(14!==t.currentType&&1!==t.currentType);return a(n,1===t.currentType?t.lastOffset:e.currentOffset(),1===t.currentType?t.lastEndLoc:e.currentPosition()),n}function m(e){const t=e.context(),{offset:n,startLoc:s}=t,c=f(e);return 14===t.currentType?c:function(e,t,n,s){const c=e.context();let l=0===s.items.length;const i=o(1,t,n);i.cases=[],i.cases.push(s);do{const t=f(e);l||(l=0===t.items.length),i.cases.push(t)}while(14!==c.currentType);return l&&r(e,10,n,0),a(i,e.currentOffset(),e.currentPosition()),i}(e,n,s,c)}return{parse:function(n){const s=ne(n,k({},e)),c=s.context(),l=o(0,c.offset,c.startLoc);return t&&l.loc&&(l.loc.source=n),l.body=m(s),14!==c.currentType&&r(s,13,c.lastStartLoc,0,n[c.offset]||""),a(l,s.currentOffset(),s.currentPosition()),l}}}function se(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function ce(e,t){for(let n=0;n<e.length;n++)le(e[n],t)}function le(e,t){switch(e.type){case 1:ce(e.cases,t),t.helper("plural");break;case 2:ce(e.items,t);break;case 6:le(e.key,t),t.helper("linked");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named")}}function ie(e,t={}){const n=function(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:e=>(n.helpers.add(e),e)}}(e);n.helper("normalize"),e.body&&le(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function ue(e,t){const{helper:n}=e;switch(t.type){case 0:!function(e,t){t.body?ue(e,t.body):e.push("null")}(e,t);break;case 1:!function(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const o=t.cases.length;for(let n=0;n<o&&(ue(e,t.cases[n]),n!==o-1);n++)e.push(", ");e.deindent(r()),e.push("])")}}(e,t);break;case 2:!function(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const o=t.items.length;for(let a=0;a<o&&(ue(e,t.items[a]),a!==o-1);a++)e.push(", ");e.deindent(r()),e.push("])")}(e,t);break;case 6:!function(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),ue(e,t.key),t.modifier&&(e.push(", "),ue(e,t.modifier)),e.push(")")}(e,t);break;case 8:case 7:case 9:case 3:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;default:throw new Error(`unhandled codegen node type: ${t.type}`)}}function fe(e,t={}){const n=k({},t),r=ae(n).parse(e);return ie(r,n),((e,t={})=>{const n=T(t.mode)?t.mode:"normal",r=T(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,a=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",s=t.needIndent?t.needIndent:"arrow"!==n,c=e.helpers||[],l=function(e,t){const{sourceMap:n,filename:r,breakLineCode:o,needIndent:a}=t,s={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:a,indentLevel:0};function c(e,t){s.code+=e}function l(e,t=!0){const n=t?o:"";c(a?n+"  ".repeat(e):n)}return{context:()=>s,push:c,indent:function(e=!0){const t=++s.indentLevel;e&&l(t)},deindent:function(e=!0){const t=--s.indentLevel;e&&l(t)},newline:function(){l(s.indentLevel)},helper:e=>`_${e}`,needIndent:()=>s.needIndent}}(e,{mode:n,filename:r,sourceMap:o,breakLineCode:a,needIndent:s});l.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(s),c.length>0&&(l.push(`const { ${c.map((e=>`${e}: _${e}`)).join(", ")} } = ctx`),l.newline()),l.push("return "),ue(l,e),l.deindent(s),l.push("}");const{code:i,map:u}=l.context();return{ast:e,code:i,map:u?u.toJSON():void 0}})(r,n)}
/*!
  * @intlify/devtools-if v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const me="i18n:init";
/*!
  * @intlify/core-base v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */let pe=null;function de(e,t,n){pe&&pe.emit(me,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const ge=ke("function:translate");function ke(e){return t=>pe&&pe.emit(e,t)}const he={0:"Not found '{key}' key in '{locale}' locale messages.",1:"Fall back to translate '{key}' key with '{target}' locale.",2:"Cannot format a number value due to not supported Intl.NumberFormat.",3:"Fall back to number format '{key}' key with '{target}' locale.",4:"Cannot format a date value due to not supported Intl.DateTimeFormat.",5:"Fall back to datetime format '{key}' key with '{target}' locale."};function ye(e,...t){return c(he[e],...t)}let be;let _e=null;const ve=()=>_e;let we=0;function Te(e,t){return e instanceof RegExp?e.test(t):e}function Le(e,t){return e instanceof RegExp?e.test(t):e}function xe(e,t,n,r,o){const{missing:a,onWarn:s}=e;{const r=e.__v_emitter;r&&r.emit("missing",{locale:n,key:t,type:o,groupId:`${o}:${t}`})}if(null!==a){const r=a(e,n,t,o);return T(r)?r:t}return Le(r,t)&&s(ye(0,{key:t,locale:n})),t}function Ce(e,t,n){const r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let o=r.__localeChainCache.get(n);if(!o){o=[];let e=[n];for(;v(e);)e=Oe(o,e,t);const a=v(t)?t:S(t)?t.default?t.default:null:t;e=T(a)?[a]:a,v(e)&&Oe(o,e,!1),r.__localeChainCache.set(n,o)}return o}function Oe(e,t,n){let r=!0;for(let o=0;o<t.length&&L(r);o++){const a=t[o];T(a)&&(r=Se(e,t[o],n))}return r}function Se(e,t,n){let r;const o=t.split("-");do{r=Pe(e,o.join("-"),n),o.splice(-1,1)}while(o.length&&!0===r);return r}function Pe(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const o=t.replace(/!/g,"");e.push(o),(v(n)||S(n))&&n[o]&&(r=n[o])}return r}const $e=/<\/?[\w\s="/.':;#-\/]+>/;const Fe=e=>e;let Ie=Object.create(null);function Me(e){return Y(e,null,{messages:Ne})}const Ne={14:"Invalid arguments",15:"The date provided is an invalid Date object.Make sure your Date represents a valid date.",16:"The argument provided is not a valid ISO date string"},We=()=>"",Ee=e=>w(e);function je(e,t,n,s,c,l){const{messageCompiler:u,warnHtmlMessage:f}=e;if(Ee(s)){const e=s;return e.locale=e.locale||n,e.key=e.key||t,e}let m,p,d=null;r&&(d=window.performance.now(),m="intlify-message-compilation-start",p="intlify-message-compilation-end",o&&o(m));const g=u(s,function(e,t,n,r,o,a){return{warnHtmlMessage:o,onError:t=>{a&&a(t);{t.message,t.location&&$(r,t.location.start.offset,t.location.end.offset);const o=e.__v_emitter;o&&o.emit("compile-error",{message:r,error:t.message,start:t.location&&t.location.start.offset,end:t.location&&t.location.end.offset,groupId:`translate:${n}`})}},onCacheKey:e=>i(t,n,e)}}(e,n,c,s,f,l));if(r){const n=window.performance.now(),r=e.__v_emitter;r&&d&&r.emit("message-compilation",{type:"message-compilation",message:s,time:n-d,groupId:`translate:${t}`}),m&&p&&o&&a&&(o(p),a("intlify message compilation",m,p))}return g.locale=n,g.key=t,g.source=s,g}function Ae(...e){const[t,n,r]=e,o={};if(!T(t)&&!f(t)&&!Ee(t))throw Me(14);const a=f(t)?String(t):(Ee(t),t);return f(n)?o.plural=n:T(n)?o.default=n:S(n)&&!d(n)?o.named=n:v(n)&&(o.list=n),f(r)?o.plural=r:T(r)?o.default=r:S(r)&&k(o,r),[a,o]}const De="undefined"!=typeof Intl,Re=De&&void 0!==Intl.DateTimeFormat,Ue=De&&void 0!==Intl.NumberFormat;function He(...e){const[t,n,r,o]=e;let a,s={},c={};if(T(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw Me(16);a=new Date(t);try{a.toISOString()}catch(l){throw Me(16)}}else if(m(t)){if(isNaN(t.getTime()))throw Me(15);a=t}else{if(!f(t))throw Me(14);a=t}return T(n)?s.key=n:S(n)&&(s=n),T(r)?s.locale=r:S(r)&&(c=r),S(o)&&(c=o),[s.key||"",a,s,c]}function ze(...e){const[t,n,r,o]=e;let a={},s={};if(!f(t))throw Me(14);const c=t;return T(n)?a.key=n:S(n)&&(a=n),T(r)?a.locale=r:S(r)&&(s=r),S(o)&&(s=o),[a.key||"",c,a,s]}"boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(y().__INTLIFY_PROD_DEVTOOLS__=!1);var Je=Object.freeze(Object.defineProperty({__proto__:null,MISSING_RESOLVE_VALUE:"",NOT_REOSLVED:-1,VERSION:"9.1.9",clearCompileCache:function(){Ie=Object.create(null)},clearDateTimeFormat:function(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}},clearNumberFormat:function(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}},compileToFunction:function(e,t={}){{!function(e,t){(!L(t.warnHtmlMessage)||t.warnHtmlMessage)&&$e.test(e)&&c("Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.",{source:e})}(e,t);const n=(t.onCacheKey||Fe)(e),r=Ie[n];if(r)return r;let o=!1;const a=t.onError||B;t.onError=e=>{o=!0,a(e)};const{code:s}=fe(e,t),l=new Function(`return ${s}`)();return o?l:Ie[n]=l}},createCoreContext:function(e={}){const t=T(e.version)?e.version:"9.1.9",n=T(e.locale)?e.locale:"en-US",r=v(e.fallbackLocale)||S(e.fallbackLocale)||T(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,o=S(e.messages)?e.messages:{[n]:{}},a=S(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},s=S(e.numberFormats)?e.numberFormats:{[n]:{}},c=k({},e.modifiers||{},{upper:e=>T(e)?e.toUpperCase():e,lower:e=>T(e)?e.toLowerCase():e,capitalize:e=>T(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}),l=e.pluralRules||{},i=w(e.missing)?e.missing:null,u=!L(e.missingWarn)&&!p(e.missingWarn)||e.missingWarn,f=!L(e.fallbackWarn)&&!p(e.fallbackWarn)||e.fallbackWarn,m=!!e.fallbackFormat,d=!!e.unresolving,h=w(e.postTranslation)?e.postTranslation:null,y=S(e.processor)?e.processor:null,b=!L(e.warnHtmlMessage)||e.warnHtmlMessage,_=!!e.escapeParameter,C=w(e.messageCompiler)?e.messageCompiler:be,O=w(e.onWarn)?e.onWarn:g,P=e,$=x(P.__datetimeFormatters)?P.__datetimeFormatters:new Map,F=x(P.__numberFormatters)?P.__numberFormatters:new Map,I=x(P.__meta)?P.__meta:{};we++;const M={version:t,cid:we,locale:n,fallbackLocale:r,messages:o,datetimeFormats:a,numberFormats:s,modifiers:c,pluralRules:l,missing:i,missingWarn:u,fallbackWarn:f,fallbackFormat:m,unresolving:d,postTranslation:h,processor:y,warnHtmlMessage:b,escapeParameter:_,messageCompiler:C,onWarn:O,__datetimeFormatters:$,__numberFormatters:F,__meta:I};return M.__v_emitter=null!=P.__v_emitter?P.__v_emitter:void 0,de(M,t,I),M},createCoreError:Me,datetime:function(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:o,onWarn:a}=e,{__datetimeFormatters:s}=e;if(!Re)return a(ye(4)),"";const[c,l,i,u]=He(...t),f=L(i.missingWarn)?i.missingWarn:e.missingWarn,m=L(i.fallbackWarn)?i.fallbackWarn:e.fallbackWarn,p=!!i.part,g=T(i.locale)?i.locale:e.locale,h=Ce(e,o,g);if(!T(c)||""===c)return new Intl.DateTimeFormat(g).format(l);let y,b={},_=null,v=g,w=null;const x="datetime format";for(let d=0;d<h.length;d++){if(y=w=h[d],g!==y&&Te(m,c)&&a(ye(5,{key:c,target:y})),g!==y){const t=e.__v_emitter;t&&t.emit("fallback",{type:x,key:c,from:v,to:w,groupId:`${x}:${c}`})}if(b=n[y]||{},_=b[c],S(_))break;xe(e,c,y,f,x),v=w}if(!S(_)||!T(y))return r?-1:c;let C=`${y}__${c}`;d(u)||(C=`${C}__${JSON.stringify(u)}`);let O=s.get(C);return O||(O=new Intl.DateTimeFormat(y,k({},_,u)),s.set(C,O)),p?O.formatToParts(l):O.format(l)},getAdditionalMeta:ve,getDevToolsHook:function(){return pe},getLocaleChain:Ce,getWarnMessage:ye,handleMissing:xe,initI18nDevTools:de,isMessageFunction:Ee,isTranslateFallbackWarn:Te,isTranslateMissingWarn:Le,number:function(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:o,onWarn:a}=e,{__numberFormatters:s}=e;if(!Ue)return a(ye(2)),"";const[c,l,i,u]=ze(...t),f=L(i.missingWarn)?i.missingWarn:e.missingWarn,m=L(i.fallbackWarn)?i.fallbackWarn:e.fallbackWarn,p=!!i.part,g=T(i.locale)?i.locale:e.locale,h=Ce(e,o,g);if(!T(c)||""===c)return new Intl.NumberFormat(g).format(l);let y,b={},_=null,v=g,w=null;const x="number format";for(let d=0;d<h.length;d++){if(y=w=h[d],g!==y&&Te(m,c)&&a(ye(3,{key:c,target:y})),g!==y){const t=e.__v_emitter;t&&t.emit("fallback",{type:x,key:c,from:v,to:w,groupId:`${x}:${c}`})}if(b=n[y]||{},_=b[c],S(_))break;xe(e,c,y,f,x),v=w}if(!S(_)||!T(y))return r?-1:c;let C=`${y}__${c}`;d(u)||(C=`${C}__${JSON.stringify(u)}`);let O=s.get(C);return O||(O=new Intl.NumberFormat(y,k({},_,u)),s.set(C,O)),p?O.formatToParts(l):O.format(l)},parseDateTimeArgs:He,parseNumberArgs:ze,parseTranslateArgs:Ae,registerMessageCompiler:function(e){be=e},setAdditionalMeta:e=>{_e=e},setDevToolsHook:function(e){pe=e},translate:function(e,...t){const{fallbackFormat:n,postTranslation:s,unresolving:c,fallbackLocale:l,messages:i}=e,[u,m]=Ae(...t),p=L(m.missingWarn)?m.missingWarn:e.missingWarn,d=L(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn,g=L(m.escapeParameter)?m.escapeParameter:e.escapeParameter,h=!!m.resolvedMessage,y=T(m.default)||L(m.default)?L(m.default)?u:m.default:n?u:"",_=n||""!==y,C=T(m.locale)?m.locale:e.locale;g&&function(e){v(e.list)?e.list=e.list.map((e=>T(e)?b(e):e)):x(e.named)&&Object.keys(e.named).forEach((t=>{T(e.named[t])&&(e.named[t]=b(e.named[t]))}))}(m);let[O,S,P]=h?[u,C,i[C]||{}]:function(e,t,n,s,c,l){const{messages:i,onWarn:u}=e,f=Ce(e,s,n);let m,p={},d=null,g=n,k=null;const h="translate";for(let y=0;y<f.length;y++){if(m=k=f[y],n!==m&&Te(c,t)&&u(ye(1,{key:t,target:m})),n!==m){const n=e.__v_emitter;n&&n.emit("fallback",{type:h,key:t,from:g,to:k,groupId:`${h}:${t}`})}p=i[m]||{};let s,b,_=null;if(r&&(_=window.performance.now(),s="intlify-message-resolve-start",b="intlify-message-resolve-end",o&&o(s)),null===(d=U(p,t))&&(d=p[t]),r){const n=window.performance.now(),r=e.__v_emitter;r&&_&&d&&r.emit("message-resolve",{type:"message-resolve",key:t,message:d,time:n-_,groupId:`${h}:${t}`}),s&&b&&o&&a&&(o(b),a("intlify message resolve",s,b))}if(T(d)||w(d))break;const v=xe(e,t,m,l,h);v!==t&&(d=v),g=k}return[d,m,p]}(e,u,C,l,d,p),$=u;if(h||T(O)||Ee(O)||_&&(O=y,$=O),!(h||(T(O)||Ee(O))&&T(S)))return c?-1:u;if(T(O)&&null==e.messageCompiler)return u;let F=!1;const I=Ee(O)?O:je(e,u,S,O,$,(()=>{F=!0}));if(F)return O;const M=function(e,t,n,r){const{modifiers:o,pluralRules:a}=e,s=r=>{const o=U(n,r);if(T(o)){let n=!1;const a=je(e,r,t,o,r,(()=>{n=!0}));return n?We:a}return Ee(o)?o:We},c={locale:t,modifiers:o,pluralRules:a,messages:s};e.processor&&(c.processor=e.processor);r.list&&(c.list=r.list);r.named&&(c.named=r.named);f(r.plural)&&(c.pluralIndex=r.plural);return c}(e,S,P,m),N=function(e,t,n){let s,c,l=null;r&&(l=window.performance.now(),s="intlify-message-evaluation-start",c="intlify-message-evaluation-end",o&&o(s));const i=t(n);if(r){const n=window.performance.now(),r=e.__v_emitter;r&&l&&r.emit("message-evaluation",{type:"message-evaluation",value:i,time:n-l,groupId:`translate:${t.key}`}),s&&c&&o&&a&&(o(c),a("intlify message evaluation",s,c))}return i}(e,I,G(M)),W=s?s(N):N;{const t={timestamp:Date.now(),key:T(u)?u:Ee(O)?O.key:"",locale:S||(Ee(O)?O.locale:""),format:T(O)?O:Ee(O)?O.source:"",message:W};t.meta=k({},e.__meta,ve()||{}),ge(t)}return W},translateDevTools:ge,updateFallbackLocale:function(e,t,n){e.__localeChainCache=new Map,Ce(e,n,t)},createCompileError:Y,handleFlatJson:function e(t){if(!N(t))return t;for(const n in t)if(M(t,n))if(n.includes(".")){const r=n.split("."),o=r.length-1;let a=t;for(let e=0;e<o;e++)r[e]in a||(a[r[e]]={}),a=a[r[e]];a[r[o]]=t[n],delete t[n],N(a[r[o]])&&e(a[r[o]])}else N(t[n])&&e(t[n]);return t},parse:D,resolveValue:U,DEFAULT_MESSAGE_DATA_TYPE:"text",createMessageContext:G},Symbol.toStringTag,{value:"Module"})),Ve=n(Je);export{n as a,Ve as b,e as c,t as g,F as r};
