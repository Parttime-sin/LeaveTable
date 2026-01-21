(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function iT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ky={exports:{}},ql={},Cy={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),oT=Symbol.for("react.portal"),aT=Symbol.for("react.fragment"),lT=Symbol.for("react.strict_mode"),uT=Symbol.for("react.profiler"),cT=Symbol.for("react.provider"),hT=Symbol.for("react.context"),dT=Symbol.for("react.forward_ref"),fT=Symbol.for("react.suspense"),pT=Symbol.for("react.memo"),mT=Symbol.for("react.lazy"),zp=Symbol.iterator;function gT(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var Ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Py=Object.assign,Ny={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=Ny,this.updater=n||Ry}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function by(){}by.prototype=Zs.prototype;function td(t,e,n){this.props=t,this.context=e,this.refs=Ny,this.updater=n||Ry}var nd=td.prototype=new by;nd.constructor=td;Py(nd,Zs.prototype);nd.isPureReactComponent=!0;var $p=Array.isArray,Dy=Object.prototype.hasOwnProperty,rd={current:null},Oy={key:!0,ref:!0,__self:!0,__source:!0};function Vy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Dy.call(e,r)&&!Oy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:No,type:t,key:i,ref:o,props:s,_owner:rd.current}}function yT(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function vT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wp=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vT(""+t.key):e.toString(36)}function Oa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case No:case oT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+qu(o,0):r,$p(s)?(n="",t!=null&&(n=t.replace(Wp,"$&/")+"/"),Oa(s,e,n,"",function(h){return h})):s!=null&&(sd(s)&&(s=yT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Wp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",$p(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+qu(i,l);o+=Oa(i,e,n,u,s)}else if(u=gT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+qu(i,l++),o+=Oa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var r=[],s=0;return Oa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function _T(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Va={transition:null},wT={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Va,ReactCurrentOwner:rd};function My(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Zs;ee.Fragment=aT;ee.Profiler=uT;ee.PureComponent=td;ee.StrictMode=lT;ee.Suspense=fT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wT;ee.act=My;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Py({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=rd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Dy.call(e,u)&&!Oy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:No,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:hT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cT,_context:t},t.Consumer=t};ee.createElement=Vy;ee.createFactory=function(t){var e=Vy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:dT,render:t}};ee.isValidElement=sd;ee.lazy=function(t){return{$$typeof:mT,_payload:{_status:-1,_result:t},_init:_T}};ee.memo=function(t,e){return{$$typeof:pT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Va.transition;Va.transition={};try{t()}finally{Va.transition=e}};ee.unstable_act=My;ee.useCallback=function(t,e){return yt.current.useCallback(t,e)};ee.useContext=function(t){return yt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return yt.current.useEffect(t,e)};ee.useId=function(){return yt.current.useId()};ee.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return yt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};ee.useRef=function(t){return yt.current.useRef(t)};ee.useState=function(t){return yt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return yt.current.useTransition()};ee.version="18.3.1";Cy.exports=ee;var X=Cy.exports;const ET=iT(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT=X,IT=Symbol.for("react.element"),ST=Symbol.for("react.fragment"),xT=Object.prototype.hasOwnProperty,AT=TT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kT={key:!0,ref:!0,__self:!0,__source:!0};function Ly(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xT.call(e,r)&&!kT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:IT,type:t,key:i,ref:o,props:s,_owner:AT.current}}ql.Fragment=ST;ql.jsx=Ly;ql.jsxs=Ly;ky.exports=ql;var p=ky.exports,Mc={},jy={exports:{}},Vt={},Fy={exports:{}},Uy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var q=U.length;U.push(H);e:for(;0<q;){var ge=q-1>>>1,ae=U[ge];if(0<s(ae,H))U[ge]=H,U[q]=ae,q=ge;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var H=U[0],q=U.pop();if(q!==H){U[0]=q;e:for(var ge=0,ae=U.length,pe=ae>>>1;ge<pe;){var At=2*(ge+1)-1,ve=U[At],kt=At+1,ht=U[kt];if(0>s(ve,q))kt<ae&&0>s(ht,ve)?(U[ge]=ht,U[kt]=q,ge=kt):(U[ge]=ve,U[At]=q,ge=At);else if(kt<ae&&0>s(ht,q))U[ge]=ht,U[kt]=q,ge=kt;else break e}}return H}function s(U,H){var q=U.sortIndex-H.sortIndex;return q!==0?q:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,w=3,k=!1,P=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=U)r(h),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(h)}}function D(U){if(N=!1,x(U),!P)if(n(u)!==null)P=!0,te(F);else{var H=n(h);H!==null&&Be(D,H.startTime-U)}}function F(U,H){P=!1,N&&(N=!1,S(y),y=-1),k=!0;var q=w;try{for(x(H),g=n(u);g!==null&&(!(g.expirationTime>H)||U&&!A());){var ge=g.callback;if(typeof ge=="function"){g.callback=null,w=g.priorityLevel;var ae=ge(g.expirationTime<=H);H=t.unstable_now(),typeof ae=="function"?g.callback=ae:g===n(u)&&r(u),x(H)}else r(u);g=n(u)}if(g!==null)var pe=!0;else{var At=n(h);At!==null&&Be(D,At.startTime-H),pe=!1}return pe}finally{g=null,w=q,k=!1}}var j=!1,E=null,y=-1,_=5,v=-1;function A(){return!(t.unstable_now()-v<_)}function C(){if(E!==null){var U=t.unstable_now();v=U;var H=!0;try{H=E(!0,U)}finally{H?I():(j=!1,E=null)}}else j=!1}var I;if(typeof T=="function")I=function(){T(C)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Lt=He.port2;He.port1.onmessage=C,I=function(){Lt.postMessage(null)}}else I=function(){O(C,0)};function te(U){E=U,j||(j=!0,I())}function Be(U,H){y=O(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,te(F))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var q=w;w=H;try{return U()}finally{w=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=w;w=U;try{return H()}finally{w=q}},t.unstable_scheduleCallback=function(U,H,q){var ge=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ge+q:ge):q=ge,U){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=q+ae,U={id:f++,callback:H,priorityLevel:U,startTime:q,expirationTime:ae,sortIndex:-1},q>ge?(U.sortIndex=q,e(h,U),n(u)===null&&U===n(h)&&(N?(S(y),y=-1):N=!0,Be(D,q-ge))):(U.sortIndex=ae,e(u,U),P||k||(P=!0,te(F))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var H=w;return function(){var q=w;w=H;try{return U.apply(this,arguments)}finally{w=q}}}})(Uy);Fy.exports=Uy;var CT=Fy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT=X,Ot=CT;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var By=new Set,no={};function Jr(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(no[t]=e,t=0;t<e.length;t++)By.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=Object.prototype.hasOwnProperty,PT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hp={},qp={};function NT(t){return Lc.call(qp,t)?!0:Lc.call(Hp,t)?!1:PT.test(t)?qp[t]=!0:(Hp[t]=!0,!1)}function bT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DT(t,e,n,r){if(e===null||typeof e>"u"||bT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(id,od);Je[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(id,od);Je[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(id,od);Je[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ad(t,e,n,r){var s=Je.hasOwnProperty(e)?Je[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DT(e,n,s,r)&&(n=null),r||s===null?NT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=RT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),zy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),Fc=Symbol.for("react.suspense"),Uc=Symbol.for("react.suspense_list"),cd=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),Wy=Symbol.for("react.offscreen"),Kp=Symbol.iterator;function Ii(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Ku;function Di(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var Qu=!1;function Gu(t,e){if(!t||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Di(t):""}function OT(t){switch(t.tag){case 5:return Di(t.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function Bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case jc:return"Profiler";case ld:return"StrictMode";case Fc:return"Suspense";case Uc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $y:return(t.displayName||"Context")+".Consumer";case zy:return(t._context.displayName||"Context")+".Provider";case ud:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cd:return e=t.displayName||null,e!==null?e:Bc(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return Bc(t(e))}catch{}}return null}function VT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bc(e);case 8:return e===ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MT(t){var e=Hy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function da(t){t._valueTracker||(t._valueTracker=MT(t))}function qy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zc(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ky(t,e){e=e.checked,e!=null&&ad(t,"checked",e,!1)}function $c(t,e){Ky(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wc(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wc(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oi=Array.isArray;function ks(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Hc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Oi(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function Qy(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,Yy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LT=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(t){LT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bi[e]=Bi[t]})});function Xy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bi.hasOwnProperty(t)&&Bi[t]?(""+e).trim():e+"px"}function Jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Xy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var jT=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(jT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gc=null;function hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yc=null,Cs=null,Rs=null;function Jp(t){if(t=Oo(t)){if(typeof Yc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Xl(e),Yc(t.stateNode,t.type,e))}}function Zy(t){Cs?Rs?Rs.push(t):Rs=[t]:Cs=t}function ev(){if(Cs){var t=Cs,e=Rs;if(Rs=Cs=null,Jp(t),e)for(t=0;t<e.length;t++)Jp(e[t])}}function tv(t,e){return t(e)}function nv(){}var Yu=!1;function rv(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return tv(t,e,n)}finally{Yu=!1,(Cs!==null||Rs!==null)&&(nv(),ev())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Xc=!1;if(Dn)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{Xc=!1}function FT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var zi=!1,nl=null,rl=!1,Jc=null,UT={onError:function(t){zi=!0,nl=t}};function BT(t,e,n,r,s,i,o,l,u){zi=!1,nl=null,FT.apply(UT,arguments)}function zT(t,e,n,r,s,i,o,l,u){if(BT.apply(this,arguments),zi){if(zi){var h=nl;zi=!1,nl=null}else throw Error(L(198));rl||(rl=!0,Jc=h)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zp(t){if(Zr(t)!==t)throw Error(L(188))}function $T(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Zp(s),t;if(i===r)return Zp(s),e;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function iv(t){return t=$T(t),t!==null?ov(t):null}function ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ov(t);if(e!==null)return e;t=t.sibling}return null}var av=Ot.unstable_scheduleCallback,em=Ot.unstable_cancelCallback,WT=Ot.unstable_shouldYield,HT=Ot.unstable_requestPaint,Oe=Ot.unstable_now,qT=Ot.unstable_getCurrentPriorityLevel,dd=Ot.unstable_ImmediatePriority,lv=Ot.unstable_UserBlockingPriority,sl=Ot.unstable_NormalPriority,KT=Ot.unstable_LowPriority,uv=Ot.unstable_IdlePriority,Kl=null,hn=null;function QT(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:XT,GT=Math.log,YT=Math.LN2;function XT(t){return t>>>=0,t===0?32:31-(GT(t)/YT|0)|0}var pa=64,ma=4194304;function Vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Vi(l):(i&=o,i!==0&&(r=Vi(i)))}else o=n&~s,o!==0?r=Vi(o):i!==0&&(r=Vi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),s=1<<n,r|=t[n],e&=~s;return r}function JT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-en(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=JT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cv(){var t=pa;return pa<<=1,!(pa&4194240)&&(pa=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function eI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-en(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dv,pd,fv,pv,mv,eh=!1,ga=[],sr=null,ir=null,or=null,io=new Map,oo=new Map,Yn=[],tI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function xi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Oo(e),e!==null&&pd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function nI(t,e,n,r,s){switch(e){case"focusin":return sr=xi(sr,t,e,n,r,s),!0;case"dragenter":return ir=xi(ir,t,e,n,r,s),!0;case"mouseover":return or=xi(or,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return io.set(i,xi(io.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,oo.set(i,xi(oo.get(i)||null,t,e,n,r,s)),!0}return!1}function gv(t){var e=Pr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=sv(n),e!==null){t.blockedOn=e,mv(t.priority,function(){fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gc=r,n.target.dispatchEvent(r),Gc=null}else return e=Oo(n),e!==null&&pd(e),t.blockedOn=n,!1;e.shift()}return!0}function nm(t,e,n){Ma(t)&&n.delete(e)}function rI(){eh=!1,sr!==null&&Ma(sr)&&(sr=null),ir!==null&&Ma(ir)&&(ir=null),or!==null&&Ma(or)&&(or=null),io.forEach(nm),oo.forEach(nm)}function Ai(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,rI)))}function ao(t){function e(s){return Ai(s,t)}if(0<ga.length){Ai(ga[0],t);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&Ai(sr,t),ir!==null&&Ai(ir,t),or!==null&&Ai(or,t),io.forEach(e),oo.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&Yn.shift()}var Ps=Bn.ReactCurrentBatchConfig,ol=!0;function sI(t,e,n,r){var s=de,i=Ps.transition;Ps.transition=null;try{de=1,md(t,e,n,r)}finally{de=s,Ps.transition=i}}function iI(t,e,n,r){var s=de,i=Ps.transition;Ps.transition=null;try{de=4,md(t,e,n,r)}finally{de=s,Ps.transition=i}}function md(t,e,n,r){if(ol){var s=th(t,e,n,r);if(s===null)ac(t,e,r,al,n),tm(t,r);else if(nI(s,t,e,n,r))r.stopPropagation();else if(tm(t,r),e&4&&-1<tI.indexOf(t)){for(;s!==null;){var i=Oo(s);if(i!==null&&dv(i),i=th(t,e,n,r),i===null&&ac(t,e,r,al,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ac(t,e,r,null,n)}}var al=null;function th(t,e,n,r){if(al=null,t=hd(r),t=Pr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qT()){case dd:return 1;case lv:return 4;case sl:case KT:return 16;case uv:return 536870912;default:return 16}default:return 16}}var tr=null,gd=null,La=null;function vv(){if(La)return La;var t,e=gd,n=e.length,r,s="value"in tr?tr.value:tr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return La=s.slice(t,1<r?1-r:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function rm(){return!1}function Mt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ya:rm,this.isPropagationStopped=rm,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=Mt(ei),Do=ke({},ei,{view:0,detail:0}),oI=Mt(Do),Ju,Zu,ki,Ql=ke({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(Ju=t.screenX-ki.screenX,Zu=t.screenY-ki.screenY):Zu=Ju=0,ki=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),sm=Mt(Ql),aI=ke({},Ql,{dataTransfer:0}),lI=Mt(aI),uI=ke({},Do,{relatedTarget:0}),ec=Mt(uI),cI=ke({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),hI=Mt(cI),dI=ke({},ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fI=Mt(dI),pI=ke({},ei,{data:0}),im=Mt(pI),mI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yI[t])?!!e[t]:!1}function vd(){return vI}var _I=ke({},Do,{key:function(t){if(t.key){var e=mI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wI=Mt(_I),EI=ke({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Mt(EI),TI=ke({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),II=Mt(TI),SI=ke({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),xI=Mt(SI),AI=ke({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kI=Mt(AI),CI=[9,13,27,32],_d=Dn&&"CompositionEvent"in window,$i=null;Dn&&"documentMode"in document&&($i=document.documentMode);var RI=Dn&&"TextEvent"in window&&!$i,_v=Dn&&(!_d||$i&&8<$i&&11>=$i),am=" ",lm=!1;function wv(t,e){switch(t){case"keyup":return CI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function PI(t,e){switch(t){case"compositionend":return Ev(e);case"keypress":return e.which!==32?null:(lm=!0,am);case"textInput":return t=e.data,t===am&&lm?null:t;default:return null}}function NI(t,e){if(ys)return t==="compositionend"||!_d&&wv(t,e)?(t=vv(),La=gd=tr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var bI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bI[t.type]:e==="textarea"}function Tv(t,e,n,r){Zy(r),e=ll(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wi=null,lo=null;function DI(t){Dv(t,0)}function Gl(t){var e=ws(t);if(qy(e))return t}function OI(t,e){if(t==="change")return e}var Iv=!1;if(Dn){var tc;if(Dn){var nc="oninput"in document;if(!nc){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),nc=typeof cm.oninput=="function"}tc=nc}else tc=!1;Iv=tc&&(!document.documentMode||9<document.documentMode)}function hm(){Wi&&(Wi.detachEvent("onpropertychange",Sv),lo=Wi=null)}function Sv(t){if(t.propertyName==="value"&&Gl(lo)){var e=[];Tv(e,lo,t,hd(t)),rv(DI,e)}}function VI(t,e,n){t==="focusin"?(hm(),Wi=e,lo=n,Wi.attachEvent("onpropertychange",Sv)):t==="focusout"&&hm()}function MI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(lo)}function LI(t,e){if(t==="click")return Gl(e)}function jI(t,e){if(t==="input"||t==="change")return Gl(e)}function FI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:FI;function uo(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Lc.call(e,s)||!rn(t[s],e[s]))return!1}return!0}function dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fm(t,e){var n=dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dm(n)}}function xv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Av(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UI(t){var e=Av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xv(n.ownerDocument.documentElement,n)){if(r!==null&&wd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=fm(n,i);var o=fm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BI=Dn&&"documentMode"in document&&11>=document.documentMode,vs=null,nh=null,Hi=null,rh=!1;function pm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||vs==null||vs!==tl(r)||(r=vs,"selectionStart"in r&&wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&uo(Hi,r)||(Hi=r,r=ll(nh,"onSelect"),0<r.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},rc={},kv={};Dn&&(kv=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Yl(t){if(rc[t])return rc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kv)return rc[t]=e[n];return t}var Cv=Yl("animationend"),Rv=Yl("animationiteration"),Pv=Yl("animationstart"),Nv=Yl("transitionend"),bv=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){bv.set(t,e),Jr(e,[t])}for(var sc=0;sc<mm.length;sc++){var ic=mm[sc],zI=ic.toLowerCase(),$I=ic[0].toUpperCase()+ic.slice(1);wr(zI,"on"+$I)}wr(Cv,"onAnimationEnd");wr(Rv,"onAnimationIteration");wr(Pv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(Nv,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function gm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zT(r,e,void 0,t),t.currentTarget=null}function Dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;gm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;gm(s,l,h),i=u}}}if(rl)throw t=Jc,rl=!1,Jc=null,t}function Ee(t,e){var n=e[lh];n===void 0&&(n=e[lh]=new Set);var r=t+"__bubble";n.has(r)||(Ov(e,t,2,!1),n.add(r))}function oc(t,e,n){var r=0;e&&(r|=4),Ov(n,t,r,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[_a]){t[_a]=!0,By.forEach(function(n){n!=="selectionchange"&&(WI.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,oc("selectionchange",!1,e))}}function Ov(t,e,n,r){switch(yv(e)){case 1:var s=sI;break;case 4:s=iI;break;default:s=md}n=s.bind(null,e,n,t),s=void 0,!Xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function ac(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Pr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}rv(function(){var h=i,f=hd(n),g=[];e:{var w=bv.get(t);if(w!==void 0){var k=yd,P=t;switch(t){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":k=wI;break;case"focusin":P="focus",k=ec;break;case"focusout":P="blur",k=ec;break;case"beforeblur":case"afterblur":k=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=lI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=II;break;case Cv:case Rv:case Pv:k=hI;break;case Nv:k=xI;break;case"scroll":k=oI;break;case"wheel":k=kI;break;case"copy":case"cut":case"paste":k=fI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=om}var N=(e&4)!==0,O=!N&&t==="scroll",S=N?w!==null?w+"Capture":null:w;N=[];for(var T=h,x;T!==null;){x=T;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,S!==null&&(D=so(T,S),D!=null&&N.push(ho(T,D,x)))),O)break;T=T.return}0<N.length&&(w=new k(w,P,null,n,f),g.push({event:w,listeners:N}))}}if(!(e&7)){e:{if(w=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",w&&n!==Gc&&(P=n.relatedTarget||n.fromElement)&&(Pr(P)||P[On]))break e;if((k||w)&&(w=f.window===f?f:(w=f.ownerDocument)?w.defaultView||w.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?Pr(P):null,P!==null&&(O=Zr(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(N=sm,D="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(N=om,D="onPointerLeave",S="onPointerEnter",T="pointer"),O=k==null?w:ws(k),x=P==null?w:ws(P),w=new N(D,T+"leave",k,n,f),w.target=O,w.relatedTarget=x,D=null,Pr(f)===h&&(N=new N(S,T+"enter",P,n,f),N.target=x,N.relatedTarget=O,D=N),O=D,k&&P)t:{for(N=k,S=P,T=0,x=N;x;x=us(x))T++;for(x=0,D=S;D;D=us(D))x++;for(;0<T-x;)N=us(N),T--;for(;0<x-T;)S=us(S),x--;for(;T--;){if(N===S||S!==null&&N===S.alternate)break t;N=us(N),S=us(S)}N=null}else N=null;k!==null&&ym(g,w,k,N,!1),P!==null&&O!==null&&ym(g,O,P,N,!0)}}e:{if(w=h?ws(h):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var F=OI;else if(um(w))if(Iv)F=jI;else{F=MI;var j=VI}else(k=w.nodeName)&&k.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(F=LI);if(F&&(F=F(t,h))){Tv(g,F,n,f);break e}j&&j(t,w,h),t==="focusout"&&(j=w._wrapperState)&&j.controlled&&w.type==="number"&&Wc(w,"number",w.value)}switch(j=h?ws(h):window,t){case"focusin":(um(j)||j.contentEditable==="true")&&(vs=j,nh=h,Hi=null);break;case"focusout":Hi=nh=vs=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,pm(g,n,f);break;case"selectionchange":if(BI)break;case"keydown":case"keyup":pm(g,n,f)}var E;if(_d)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ys?wv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(_v&&n.locale!=="ko"&&(ys||y!=="onCompositionStart"?y==="onCompositionEnd"&&ys&&(E=vv()):(tr=f,gd="value"in tr?tr.value:tr.textContent,ys=!0)),j=ll(h,y),0<j.length&&(y=new im(y,t,null,n,f),g.push({event:y,listeners:j}),E?y.data=E:(E=Ev(n),E!==null&&(y.data=E)))),(E=RI?PI(t,n):NI(t,n))&&(h=ll(h,"onBeforeInput"),0<h.length&&(f=new im("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=E))}Dv(g,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=so(t,n),i!=null&&r.unshift(ho(t,i,s)),i=so(t,e),i!=null&&r.push(ho(t,i,s))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ym(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=so(n,i),u!=null&&o.unshift(ho(n,u,l))):s||(u=so(n,i),u!=null&&o.push(ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HI=/\r\n?/g,qI=/\u0000|\uFFFD/g;function vm(t){return(typeof t=="string"?t:""+t).replace(HI,`
`).replace(qI,"")}function wa(t,e,n){if(e=vm(e),vm(t)!==e&&n)throw Error(L(425))}function ul(){}var sh=null,ih=null;function oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,KI=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,QI=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(t){return _m.resolve(null).then(t).catch(GI)}:ah;function GI(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ao(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ti=Math.random().toString(36).slice(2),un="__reactFiber$"+ti,fo="__reactProps$"+ti,On="__reactContainer$"+ti,lh="__reactEvents$"+ti,YI="__reactListeners$"+ti,XI="__reactHandles$"+ti;function Pr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wm(t);t!==null;){if(n=t[un])return n;t=wm(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[un]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Xl(t){return t[fo]||null}var uh=[],Es=-1;function Er(t){return{current:t}}function Te(t){0>Es||(t.current=uh[Es],uh[Es]=null,Es--)}function _e(t,e){Es++,uh[Es]=t.current,t.current=e}var gr={},ut=Er(gr),Et=Er(!1),Ur=gr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Tt(t){return t=t.childContextTypes,t!=null}function cl(){Te(Et),Te(ut)}function Em(t,e,n){if(ut.current!==gr)throw Error(L(168));_e(ut,e),_e(Et,n)}function Vv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(L(108,VT(t)||"Unknown",s));return ke({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Ur=ut.current,_e(ut,t),_e(Et,Et.current),!0}function Tm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Vv(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,Te(Et),Te(ut),_e(ut,t)):Te(Et),_e(Et,n)}var Sn=null,Jl=!1,uc=!1;function Mv(t){Sn===null?Sn=[t]:Sn.push(t)}function JI(t){Jl=!0,Mv(t)}function Tr(){if(!uc&&Sn!==null){uc=!0;var t=0,e=de;try{var n=Sn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Jl=!1}catch(s){throw Sn!==null&&(Sn=Sn.slice(t+1)),av(dd,Tr),s}finally{de=e,uc=!1}}return null}var Ts=[],Is=0,dl=null,fl=0,Ft=[],Ut=0,Br=null,An=1,kn="";function kr(t,e){Ts[Is++]=fl,Ts[Is++]=dl,dl=t,fl=e}function Lv(t,e,n){Ft[Ut++]=An,Ft[Ut++]=kn,Ft[Ut++]=Br,Br=t;var r=An;t=kn;var s=32-en(r)-1;r&=~(1<<s),n+=1;var i=32-en(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,An=1<<32-en(e)+s|n<<s|r,kn=i+t}else An=1<<i|n<<s|r,kn=t}function Ed(t){t.return!==null&&(kr(t,1),Lv(t,1,0))}function Td(t){for(;t===dl;)dl=Ts[--Is],Ts[Is]=null,fl=Ts[--Is],Ts[Is]=null;for(;t===Br;)Br=Ft[--Ut],Ft[Ut]=null,kn=Ft[--Ut],Ft[Ut]=null,An=Ft[--Ut],Ft[Ut]=null}var bt=null,Nt=null,Ie=!1,Jt=null;function jv(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Nt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:An,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Nt=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(Ie){var e=Nt;if(e){var n=e;if(!Im(t,e)){if(ch(t))throw Error(L(418));e=ar(n.nextSibling);var r=bt;e&&Im(t,e)?jv(r,n):(t.flags=t.flags&-4097|2,Ie=!1,bt=t)}}else{if(ch(t))throw Error(L(418));t.flags=t.flags&-4097|2,Ie=!1,bt=t}}}function Sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function Ea(t){if(t!==bt)return!1;if(!Ie)return Sm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oh(t.type,t.memoizedProps)),e&&(e=Nt)){if(ch(t))throw Fv(),Error(L(418));for(;e;)jv(t,e),e=ar(e.nextSibling)}if(Sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=bt?ar(t.stateNode.nextSibling):null;return!0}function Fv(){for(var t=Nt;t;)t=ar(t.nextSibling)}function Us(){Nt=bt=null,Ie=!1}function Id(t){Jt===null?Jt=[t]:Jt.push(t)}var ZI=Bn.ReactCurrentBatchConfig;function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Ta(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xm(t){var e=t._init;return e(t._payload)}function Uv(t){function e(S,T){if(t){var x=S.deletions;x===null?(S.deletions=[T],S.flags|=16):x.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function s(S,T){return S=hr(S,T),S.index=0,S.sibling=null,S}function i(S,T,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<T?(S.flags|=2,T):x):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,T,x,D){return T===null||T.tag!==6?(T=gc(x,S.mode,D),T.return=S,T):(T=s(T,x),T.return=S,T)}function u(S,T,x,D){var F=x.type;return F===gs?f(S,T,x.props.children,D,x.key):T!==null&&(T.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Qn&&xm(F)===T.type)?(D=s(T,x.props),D.ref=Ci(S,T,x),D.return=S,D):(D=Ha(x.type,x.key,x.props,null,S.mode,D),D.ref=Ci(S,T,x),D.return=S,D)}function h(S,T,x,D){return T===null||T.tag!==4||T.stateNode.containerInfo!==x.containerInfo||T.stateNode.implementation!==x.implementation?(T=yc(x,S.mode,D),T.return=S,T):(T=s(T,x.children||[]),T.return=S,T)}function f(S,T,x,D,F){return T===null||T.tag!==7?(T=Lr(x,S.mode,D,F),T.return=S,T):(T=s(T,x),T.return=S,T)}function g(S,T,x){if(typeof T=="string"&&T!==""||typeof T=="number")return T=gc(""+T,S.mode,x),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ha:return x=Ha(T.type,T.key,T.props,null,S.mode,x),x.ref=Ci(S,null,T),x.return=S,x;case ms:return T=yc(T,S.mode,x),T.return=S,T;case Qn:var D=T._init;return g(S,D(T._payload),x)}if(Oi(T)||Ii(T))return T=Lr(T,S.mode,x,null),T.return=S,T;Ta(S,T)}return null}function w(S,T,x,D){var F=T!==null?T.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:l(S,T,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ha:return x.key===F?u(S,T,x,D):null;case ms:return x.key===F?h(S,T,x,D):null;case Qn:return F=x._init,w(S,T,F(x._payload),D)}if(Oi(x)||Ii(x))return F!==null?null:f(S,T,x,D,null);Ta(S,x)}return null}function k(S,T,x,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(x)||null,l(T,S,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ha:return S=S.get(D.key===null?x:D.key)||null,u(T,S,D,F);case ms:return S=S.get(D.key===null?x:D.key)||null,h(T,S,D,F);case Qn:var j=D._init;return k(S,T,x,j(D._payload),F)}if(Oi(D)||Ii(D))return S=S.get(x)||null,f(T,S,D,F,null);Ta(T,D)}return null}function P(S,T,x,D){for(var F=null,j=null,E=T,y=T=0,_=null;E!==null&&y<x.length;y++){E.index>y?(_=E,E=null):_=E.sibling;var v=w(S,E,x[y],D);if(v===null){E===null&&(E=_);break}t&&E&&v.alternate===null&&e(S,E),T=i(v,T,y),j===null?F=v:j.sibling=v,j=v,E=_}if(y===x.length)return n(S,E),Ie&&kr(S,y),F;if(E===null){for(;y<x.length;y++)E=g(S,x[y],D),E!==null&&(T=i(E,T,y),j===null?F=E:j.sibling=E,j=E);return Ie&&kr(S,y),F}for(E=r(S,E);y<x.length;y++)_=k(E,S,y,x[y],D),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?y:_.key),T=i(_,T,y),j===null?F=_:j.sibling=_,j=_);return t&&E.forEach(function(A){return e(S,A)}),Ie&&kr(S,y),F}function N(S,T,x,D){var F=Ii(x);if(typeof F!="function")throw Error(L(150));if(x=F.call(x),x==null)throw Error(L(151));for(var j=F=null,E=T,y=T=0,_=null,v=x.next();E!==null&&!v.done;y++,v=x.next()){E.index>y?(_=E,E=null):_=E.sibling;var A=w(S,E,v.value,D);if(A===null){E===null&&(E=_);break}t&&E&&A.alternate===null&&e(S,E),T=i(A,T,y),j===null?F=A:j.sibling=A,j=A,E=_}if(v.done)return n(S,E),Ie&&kr(S,y),F;if(E===null){for(;!v.done;y++,v=x.next())v=g(S,v.value,D),v!==null&&(T=i(v,T,y),j===null?F=v:j.sibling=v,j=v);return Ie&&kr(S,y),F}for(E=r(S,E);!v.done;y++,v=x.next())v=k(E,S,y,v.value,D),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),T=i(v,T,y),j===null?F=v:j.sibling=v,j=v);return t&&E.forEach(function(C){return e(S,C)}),Ie&&kr(S,y),F}function O(S,T,x,D){if(typeof x=="object"&&x!==null&&x.type===gs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ha:e:{for(var F=x.key,j=T;j!==null;){if(j.key===F){if(F=x.type,F===gs){if(j.tag===7){n(S,j.sibling),T=s(j,x.props.children),T.return=S,S=T;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Qn&&xm(F)===j.type){n(S,j.sibling),T=s(j,x.props),T.ref=Ci(S,j,x),T.return=S,S=T;break e}n(S,j);break}else e(S,j);j=j.sibling}x.type===gs?(T=Lr(x.props.children,S.mode,D,x.key),T.return=S,S=T):(D=Ha(x.type,x.key,x.props,null,S.mode,D),D.ref=Ci(S,T,x),D.return=S,S=D)}return o(S);case ms:e:{for(j=x.key;T!==null;){if(T.key===j)if(T.tag===4&&T.stateNode.containerInfo===x.containerInfo&&T.stateNode.implementation===x.implementation){n(S,T.sibling),T=s(T,x.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=yc(x,S.mode,D),T.return=S,S=T}return o(S);case Qn:return j=x._init,O(S,T,j(x._payload),D)}if(Oi(x))return P(S,T,x,D);if(Ii(x))return N(S,T,x,D);Ta(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,T!==null&&T.tag===6?(n(S,T.sibling),T=s(T,x),T.return=S,S=T):(n(S,T),T=gc(x,S.mode,D),T.return=S,S=T),o(S)):n(S,T)}return O}var Bs=Uv(!0),Bv=Uv(!1),pl=Er(null),ml=null,Ss=null,Sd=null;function xd(){Sd=Ss=ml=null}function Ad(t){var e=pl.current;Te(pl),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){ml=t,Sd=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(Sd!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(ml===null)throw Error(L(308));Ss=t,ml.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Nr=null;function kd(t){Nr===null?Nr=[t]:Nr.push(t)}function zv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,kd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function Cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Vn(t,n)}return s=r.interleaved,s===null?(e.next=e,kd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Vn(t,n)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fd(t,n)}}function Am(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,r){var s=t.updateQueue;Gn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,f=h=u=null,l=i;do{var w=l.lane,k=l.eventTime;if((r&w)===w){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(w=e,k=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){g=P.call(k,g,w);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,w=typeof P=="function"?P.call(k,g,w):P,w==null)break e;g=ke({},g,w);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,w=s.effects,w===null?s.effects=[l]:w.push(l))}else k={eventTime:k,lane:w,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=g):f=f.next=k,o|=w;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;w=l,l=w.next,w.next=null,s.lastBaseUpdate=w,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=g}}function km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(L(191,s));s.call(r)}}}var Vo={},dn=Er(Vo),po=Er(Vo),mo=Er(Vo);function br(t){if(t===Vo)throw Error(L(174));return t}function Rd(t,e){switch(_e(mo,e),_e(po,t),_e(dn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qc(e,t)}Te(dn),_e(dn,e)}function zs(){Te(dn),Te(po),Te(mo)}function Wv(t){br(mo.current);var e=br(dn.current),n=qc(e,t.type);e!==n&&(_e(po,t),_e(dn,n))}function Pd(t){po.current===t&&(Te(dn),Te(po))}var xe=Er(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Nd(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var Ua=Bn.ReactCurrentDispatcher,hc=Bn.ReactCurrentBatchConfig,zr=0,Ae=null,Le=null,$e=null,vl=!1,qi=!1,go=0,e1=0;function rt(){throw Error(L(321))}function bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Dd(t,e,n,r,s,i){if(zr=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=t===null||t.memoizedState===null?s1:i1,t=n(r,s),qi){i=0;do{if(qi=!1,go=0,25<=i)throw Error(L(301));i+=1,$e=Le=null,e.updateQueue=null,Ua.current=o1,t=n(r,s)}while(qi)}if(Ua.current=_l,e=Le!==null&&Le.next!==null,zr=0,$e=Le=Ae=null,vl=!1,e)throw Error(L(300));return t}function Od(){var t=go!==0;return go=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ae.memoizedState=$e=t:$e=$e.next=t,$e}function Kt(){if(Le===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=$e===null?Ae.memoizedState:$e.next;if(e!==null)$e=e,Le=t;else{if(t===null)throw Error(L(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?Ae.memoizedState=$e=t:$e=$e.next=t}return $e}function yo(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((zr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ae.lanes|=f,$r|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,rn(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ae.lanes|=i,$r|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);rn(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Hv(){}function qv(t,e){var n=Ae,r=Kt(),s=e(),i=!rn(r.memoizedState,s);if(i&&(r.memoizedState=s,wt=!0),r=r.queue,Vd(Gv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,vo(9,Qv.bind(null,n,r,s,e),void 0,null),We===null)throw Error(L(349));zr&30||Kv(n,e,s)}return s}function Kv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qv(t,e,n,r){e.value=n,e.getSnapshot=r,Yv(e)&&Xv(t)}function Gv(t,e,n){return n(function(){Yv(e)&&Xv(t)})}function Yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function Xv(t){var e=Vn(t,1);e!==null&&tn(e,t,1,-1)}function Cm(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=r1.bind(null,Ae,t),[e.memoizedState,t]}function vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jv(){return Kt().memoizedState}function Ba(t,e,n,r){var s=ln();Ae.flags|=t,s.memoizedState=vo(1|e,n,void 0,r===void 0?null:r)}function Zl(t,e,n,r){var s=Kt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&bd(r,o.deps)){s.memoizedState=vo(e,n,i,r);return}}Ae.flags|=t,s.memoizedState=vo(1|e,n,i,r)}function Rm(t,e){return Ba(8390656,8,t,e)}function Vd(t,e){return Zl(2048,8,t,e)}function Zv(t,e){return Zl(4,2,t,e)}function e_(t,e){return Zl(4,4,t,e)}function t_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n_(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,t_.bind(null,e,t),n)}function Md(){}function r_(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return zr&21?(rn(n,e)||(n=cv(),Ae.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function t1(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=hc.transition;hc.transition={};try{t(!1),e()}finally{de=n,hc.transition=r}}function o_(){return Kt().memoizedState}function n1(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a_(t))l_(e,n);else if(n=zv(t,e,n,r),n!==null){var s=gt();tn(n,t,r,s),u_(n,e,r)}}function r1(t,e,n){var r=cr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(t))l_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,rn(l,o)){var u=e.interleaved;u===null?(s.next=s,kd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=zv(t,e,s,r),n!==null&&(s=gt(),tn(n,t,r,s),u_(n,e,r))}}function a_(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function l_(t,e){qi=vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fd(t,n)}}var _l={readContext:qt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},s1={readContext:qt,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:Rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4194308,4,t_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ba(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=n1.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:Cm,useDebugValue:Md,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=Cm(!1),e=t[0];return t=t1.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,s=ln();if(Ie){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),We===null)throw Error(L(349));zr&30||Kv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Rm(Gv.bind(null,r,i,t),[t]),r.flags|=2048,vo(9,Qv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=ln(),e=We.identifierPrefix;if(Ie){var n=kn,r=An;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},i1={readContext:qt,useCallback:r_,useContext:qt,useEffect:Vd,useImperativeHandle:n_,useInsertionEffect:Zv,useLayoutEffect:e_,useMemo:s_,useReducer:dc,useRef:Jv,useState:function(){return dc(yo)},useDebugValue:Md,useDeferredValue:function(t){var e=Kt();return i_(e,Le.memoizedState,t)},useTransition:function(){var t=dc(yo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:qv,useId:o_,unstable_isNewReconciler:!1},o1={readContext:qt,useCallback:r_,useContext:qt,useEffect:Vd,useImperativeHandle:n_,useInsertionEffect:Zv,useLayoutEffect:e_,useMemo:s_,useReducer:fc,useRef:Jv,useState:function(){return fc(yo)},useDebugValue:Md,useDeferredValue:function(t){var e=Kt();return Le===null?e.memoizedState=t:i_(e,Le.memoizedState,t)},useTransition:function(){var t=fc(yo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:qv,useId:o_,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),s=cr(t),i=Nn(r,s);i.payload=e,n!=null&&(i.callback=n),e=lr(t,i,s),e!==null&&(tn(e,t,s,r),Fa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),s=cr(t),i=Nn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=lr(t,i,s),e!==null&&(tn(e,t,s,r),Fa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=cr(t),s=Nn(n,r);s.tag=2,e!=null&&(s.callback=e),e=lr(t,s,r),e!==null&&(tn(e,t,r,n),Fa(e,t,r))}};function Pm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,r)||!uo(s,i):!0}function c_(t,e,n){var r=!1,s=gr,i=e.contextType;return typeof i=="object"&&i!==null?i=qt(i):(s=Tt(e)?Ur:ut.current,r=e.contextTypes,i=(r=r!=null)?Fs(t,s):gr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Nm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Cd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=qt(i):(i=Tt(e)?Ur:ut.current,s.context=Fs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&eu.enqueueReplaceState(s,s.state,null),gl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",r=e;do n+=OT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a1=typeof WeakMap=="function"?WeakMap:Map;function h_(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){El||(El=!0,xh=r),mh(t,e)},n}function d_(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){mh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mh(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new a1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=E1.bind(null,t,e,n),e.then(t,t))}function Dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Om(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var l1=Bn.ReactCurrentOwner,wt=!1;function mt(t,e,n,r){e.child=t===null?Bv(e,null,n,r):Bs(e,t.child,n,r)}function Vm(t,e,n,r,s){n=n.render;var i=e.ref;return Ns(e,s),r=Dd(t,e,n,r,i,s),n=Od(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Mn(t,e,s)):(Ie&&n&&Ed(e),e.flags|=1,mt(t,e,r,s),e.child)}function Mm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Wd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,f_(t,e,i,r,s)):(t=Ha(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,r)&&t.ref===e.ref)return Mn(t,e,s)}return e.flags|=1,t=hr(i,r),t.ref=e.ref,t.return=e,e.child=t}function f_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(uo(i,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Mn(t,e,s)}return gh(t,e,n,r,s)}function p_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(As,Pt),Pt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(As,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,_e(As,Pt),Pt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,_e(As,Pt),Pt|=r;return mt(t,e,s,n),e.child}function m_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gh(t,e,n,r,s){var i=Tt(n)?Ur:ut.current;return i=Fs(e,i),Ns(e,s),n=Dd(t,e,n,r,i,s),r=Od(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Mn(t,e,s)):(Ie&&r&&Ed(e),e.flags|=1,mt(t,e,n,s),e.child)}function Lm(t,e,n,r,s){if(Tt(n)){var i=!0;hl(e)}else i=!1;if(Ns(e,s),e.stateNode===null)za(t,e),c_(e,n,r),ph(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=qt(h):(h=Tt(n)?Ur:ut.current,h=Fs(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Nm(e,o,r,h),Gn=!1;var w=e.memoizedState;o.state=w,gl(e,r,o,s),u=e.memoizedState,l!==r||w!==u||Et.current||Gn?(typeof f=="function"&&(fh(e,n,f,r),u=e.memoizedState),(l=Gn||Pm(e,n,l,r,w,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$v(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Yt(e.type,l),o.props=h,g=e.pendingProps,w=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=Tt(n)?Ur:ut.current,u=Fs(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||w!==u)&&Nm(e,o,r,u),Gn=!1,w=e.memoizedState,o.state=w,gl(e,r,o,s);var P=e.memoizedState;l!==g||w!==P||Et.current||Gn?(typeof k=="function"&&(fh(e,n,k,r),P=e.memoizedState),(h=Gn||Pm(e,n,h,r,w,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return yh(t,e,n,r,i,s)}function yh(t,e,n,r,s,i){m_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Tm(e,n,!1),Mn(t,e,i);r=e.stateNode,l1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,i),e.child=Bs(e,null,l,i)):mt(t,e,l,i),e.memoizedState=r.state,s&&Tm(e,n,!0),e.child}function g_(t){var e=t.stateNode;e.pendingContext?Em(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Em(t,e.context,!1),Rd(t,e.containerInfo)}function jm(t,e,n,r,s){return Us(),Id(s),e.flags|=256,mt(t,e,n,r),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function _h(t){return{baseLanes:t,cachePool:null,transitions:null}}function y_(t,e,n){var r=e.pendingProps,s=xe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),_e(xe,s&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ru(o,r,0,null),t=Lr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=_h(n),e.memoizedState=vh,t):Ld(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return u1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=hr(l,i):(i=Lr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?_h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=vh,r}return i=t.child,t=i.sibling,r=hr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ld(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,r){return r!==null&&Id(r),Bs(e,t.child,null,n),t=Ld(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=pc(Error(L(422))),Ia(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ru({mode:"visible",children:r.children},s,0,null),i=Lr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=_h(o),e.memoizedState=vh,i);if(!(e.mode&1))return Ia(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=pc(i,r,void 0),Ia(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=We,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Vn(t,s),tn(r,t,s,-1))}return $d(),r=pc(Error(L(421))),Ia(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=T1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Nt=ar(s.nextSibling),bt=e,Ie=!0,Jt=null,t!==null&&(Ft[Ut++]=An,Ft[Ut++]=kn,Ft[Ut++]=Br,An=t.id,kn=t.overflow,Br=e),e=Ld(e,r.children),e.flags|=4096,e)}function Fm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dh(t.return,e,n)}function mc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function v_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(mt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,n,e);else if(t.tag===19)Fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(xe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),mc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&yl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}mc(e,!0,n,null,i);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c1(t,e,n){switch(e.tag){case 3:g_(e),Us();break;case 5:Wv(e);break;case 1:Tt(e.type)&&hl(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;_e(pl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?y_(t,e,n):(_e(xe,xe.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);_e(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return v_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,p_(t,e,n)}return Mn(t,e,n)}var __,wh,w_,E_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wh=function(){};w_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,br(dn.current);var i=null;switch(n){case"input":s=zc(t,s),r=zc(t,r),i=[];break;case"select":s=ke({},s,{value:void 0}),r=ke({},r,{value:void 0}),i=[];break;case"textarea":s=Hc(t,s),r=Hc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ul)}Kc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(no.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(no.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ee("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};E_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ri(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function h1(t,e,n){var r=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Tt(e.type)&&cl(),st(e),null;case 3:return r=e.stateNode,zs(),Te(Et),Te(ut),Nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(Ch(Jt),Jt=null))),wh(t,e),st(e),null;case 5:Pd(e);var s=br(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)w_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return st(e),null}if(t=br(dn.current),Ea(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[un]=e,r[fo]=i,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(s=0;s<Mi.length;s++)Ee(Mi[s],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Qp(r,i),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ee("invalid",r);break;case"textarea":Yp(r,i),Ee("invalid",r)}Kc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&wa(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&wa(r.textContent,l,t),s=["children",""+l]):no.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":da(r),Gp(r,i,!0);break;case"textarea":da(r),Xp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ul)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[fo]=r,__(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),s=r;break;case"iframe":case"object":case"embed":Ee("load",t),s=r;break;case"video":case"audio":for(s=0;s<Mi.length;s++)Ee(Mi[s],t);s=r;break;case"source":Ee("error",t),s=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),s=r;break;case"details":Ee("toggle",t),s=r;break;case"input":Qp(t,r),s=zc(t,r),Ee("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ke({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Yp(t,r),s=Hc(t,r),Ee("invalid",t);break;default:s=r}Kc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Jy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ro(t,u):typeof u=="number"&&ro(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(no.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ee("scroll",t):u!=null&&ad(t,i,u,o))}switch(n){case"input":da(t),Gp(t,r,!1);break;case"textarea":da(t),Xp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ks(t,!!r.multiple,i,!1):r.defaultValue!=null&&ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)E_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=br(mo.current),br(dn.current),Ea(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(i=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:wa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return st(e),null;case 13:if(Te(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Nt!==null&&e.mode&1&&!(e.flags&128))Fv(),Us(),e.flags|=98560,i=!1;else if(i=Ea(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[un]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),i=!1}else Jt!==null&&(Ch(Jt),Jt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Fe===0&&(Fe=3):$d())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return zs(),wh(t,e),t===null&&co(e.stateNode.containerInfo),st(e),null;case 10:return Ad(e.type._context),st(e),null;case 17:return Tt(e.type)&&cl(),st(e),null;case 19:if(Te(xe),i=e.memoizedState,i===null)return st(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ri(i,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yl(t),o!==null){for(e.flags|=128,Ri(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(xe,xe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Oe()>Ws&&(e.flags|=128,r=!0,Ri(i,!1),e.lanes=4194304)}else{if(!r)if(t=yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return st(e),null}else 2*Oe()-i.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,Ri(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Oe(),e.sibling=null,n=xe.current,_e(xe,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return zd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function d1(t,e){switch(Td(e),e.tag){case 1:return Tt(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),Te(Et),Te(ut),Nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pd(e),null;case 13:if(Te(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(xe),null;case 4:return zs(),null;case 10:return Ad(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var Sa=!1,at=!1,f1=typeof WeakSet=="function"?WeakSet:Set,z=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Eh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Um=!1;function p1(t,e){if(sh=ol,t=Av(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,w=null;t:for(;;){for(var k;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)w=g,g=k;for(;;){if(g===t)break t;if(w===n&&++h===s&&(l=o),w===i&&++f===r&&(u=o),(k=g.nextSibling)!==null)break;g=w,w=g.parentNode}g=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},ol=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,O=P.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Yt(e.type,N),O);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){Pe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return P=Um,Um=!1,P}function Ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Eh(e,n,i)}s=s.next}while(s!==r)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function T_(t){var e=t.alternate;e!==null&&(t.alternate=null,T_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[fo],delete e[lh],delete e[YI],delete e[XI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function Bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}var Ke=null,Xt=!1;function qn(t,e,n){for(n=n.child;n!==null;)S_(t,e,n),n=n.sibling}function S_(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:at||xs(n,e);case 6:var r=Ke,s=Xt;Ke=null,qn(t,e,n),Ke=r,Xt=s,Ke!==null&&(Xt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Xt?(t=Ke,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),ao(t)):lc(Ke,n.stateNode));break;case 4:r=Ke,s=Xt,Ke=n.stateNode.containerInfo,Xt=!0,qn(t,e,n),Ke=r,Xt=s;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Eh(n,e,o),s=s.next}while(s!==r)}qn(t,e,n);break;case 1:if(!at&&(xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,qn(t,e,n),at=r):qn(t,e,n);break;default:qn(t,e,n)}}function zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f1),e.forEach(function(r){var s=I1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Xt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Xt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(Ke===null)throw Error(L(160));S_(i,o,s),Ke=null,Xt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Pe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x_(e,t),e=e.sibling}function x_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),an(t),r&4){try{Ki(3,t,t.return),tu(3,t)}catch(N){Pe(t,t.return,N)}try{Ki(5,t,t.return)}catch(N){Pe(t,t.return,N)}}break;case 1:Gt(e,t),an(t),r&512&&n!==null&&xs(n,n.return);break;case 5:if(Gt(e,t),an(t),r&512&&n!==null&&xs(n,n.return),t.flags&32){var s=t.stateNode;try{ro(s,"")}catch(N){Pe(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ky(s,i),Qc(l,o);var h=Qc(l,i);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?Jy(s,g):f==="dangerouslySetInnerHTML"?Yy(s,g):f==="children"?ro(s,g):ad(s,f,g,h)}switch(l){case"input":$c(s,i);break;case"textarea":Qy(s,i);break;case"select":var w=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?ks(s,!!i.multiple,k,!1):w!==!!i.multiple&&(i.defaultValue!=null?ks(s,!!i.multiple,i.defaultValue,!0):ks(s,!!i.multiple,i.multiple?[]:"",!1))}s[fo]=i}catch(N){Pe(t,t.return,N)}}break;case 6:if(Gt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(L(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Pe(t,t.return,N)}}break;case 3:if(Gt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(N){Pe(t,t.return,N)}break;case 4:Gt(e,t),an(t);break;case 13:Gt(e,t),an(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Ud=Oe())),r&4&&zm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(h=at)||f,Gt(e,t),at=h):Gt(e,t),an(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(g=z=f;z!==null;){switch(w=z,k=w.child,w.tag){case 0:case 11:case 14:case 15:Ki(4,w,w.return);break;case 1:xs(w,w.return);var P=w.stateNode;if(typeof P.componentWillUnmount=="function"){r=w,n=w.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Pe(r,n,N)}}break;case 5:xs(w,w.return);break;case 22:if(w.memoizedState!==null){Wm(g);continue}}k!==null?(k.return=w,z=k):Wm(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xy("display",o))}catch(N){Pe(t,t.return,N)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(N){Pe(t,t.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Gt(e,t),an(t),r&4&&zm(t);break;case 21:break;default:Gt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I_(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ro(s,""),r.flags&=-33);var i=Bm(t);Sh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Bm(t);Ih(t,l,o);break;default:throw Error(L(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m1(t,e,n){z=t,A_(t)}function A_(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var s=z,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Sa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||at;l=Sa;var h=at;if(Sa=o,(at=u)&&!h)for(z=s;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?Hm(s):u!==null?(u.return=o,z=u):Hm(s);for(;i!==null;)z=i,A_(i),i=i.sibling;z=s,Sa=l,at=h}$m(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,z=i):$m(t)}}function $m(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&km(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}km(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&ao(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}at||e.flags&512&&Th(e)}catch(w){Pe(e,e.return,w)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Wm(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Hm(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Pe(e,s,u)}}var i=e.return;try{Th(e)}catch(u){Pe(e,i,u)}break;case 5:var o=e.return;try{Th(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var g1=Math.ceil,wl=Bn.ReactCurrentDispatcher,jd=Bn.ReactCurrentOwner,$t=Bn.ReactCurrentBatchConfig,le=0,We=null,Me=null,Ye=0,Pt=0,As=Er(0),Fe=0,_o=null,$r=0,nu=0,Fd=0,Qi=null,_t=null,Ud=0,Ws=1/0,In=null,El=!1,xh=null,ur=null,xa=!1,nr=null,Tl=0,Gi=0,Ah=null,$a=-1,Wa=0;function gt(){return le&6?Oe():$a!==-1?$a:$a=Oe()}function cr(t){return t.mode&1?le&2&&Ye!==0?Ye&-Ye:ZI.transition!==null?(Wa===0&&(Wa=cv()),Wa):(t=de,t!==0||(t=window.event,t=t===void 0?16:yv(t.type)),t):1}function tn(t,e,n,r){if(50<Gi)throw Gi=0,Ah=null,Error(L(185));bo(t,n,r),(!(le&2)||t!==We)&&(t===We&&(!(le&2)&&(nu|=n),Fe===4&&Xn(t,Ye)),It(t,r),n===1&&le===0&&!(e.mode&1)&&(Ws=Oe()+500,Jl&&Tr()))}function It(t,e){var n=t.callbackNode;ZT(t,e);var r=il(t,t===We?Ye:0);if(r===0)n!==null&&em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&em(n),e===1)t.tag===0?JI(qm.bind(null,t)):Mv(qm.bind(null,t)),QI(function(){!(le&6)&&Tr()}),n=null;else{switch(hv(r)){case 1:n=dd;break;case 4:n=lv;break;case 16:n=sl;break;case 536870912:n=uv;break;default:n=sl}n=O_(n,k_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k_(t,e){if($a=-1,Wa=0,le&6)throw Error(L(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var r=il(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Il(t,r);else{e=r;var s=le;le|=2;var i=R_();(We!==t||Ye!==e)&&(In=null,Ws=Oe()+500,Mr(t,e));do try{_1();break}catch(l){C_(t,l)}while(!0);xd(),wl.current=i,le=s,Me!==null?e=0:(We=null,Ye=0,e=Fe)}if(e!==0){if(e===2&&(s=Zc(t),s!==0&&(r=s,e=kh(t,s))),e===1)throw n=_o,Mr(t,0),Xn(t,r),It(t,Oe()),n;if(e===6)Xn(t,r);else{if(s=t.current.alternate,!(r&30)&&!y1(s)&&(e=Il(t,r),e===2&&(i=Zc(t),i!==0&&(r=i,e=kh(t,i))),e===1))throw n=_o,Mr(t,0),Xn(t,r),It(t,Oe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Cr(t,_t,In);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=Ud+500-Oe(),10<e)){if(il(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ah(Cr.bind(null,t,_t,In),e);break}Cr(t,_t,In);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-en(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g1(r/1960))-r,10<r){t.timeoutHandle=ah(Cr.bind(null,t,_t,In),r);break}Cr(t,_t,In);break;case 5:Cr(t,_t,In);break;default:throw Error(L(329))}}}return It(t,Oe()),t.callbackNode===n?k_.bind(null,t):null}function kh(t,e){var n=Qi;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=_t,_t=n,e!==null&&Ch(e)),t}function Ch(t){_t===null?_t=t:_t.push.apply(_t,t)}function y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!rn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~Fd,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function qm(t){if(le&6)throw Error(L(327));bs();var e=il(t,0);if(!(e&1))return It(t,Oe()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var r=Zc(t);r!==0&&(e=r,n=kh(t,r))}if(n===1)throw n=_o,Mr(t,0),Xn(t,e),It(t,Oe()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,_t,In),It(t,Oe()),null}function Bd(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Ws=Oe()+500,Jl&&Tr())}}function Wr(t){nr!==null&&nr.tag===0&&!(le&6)&&bs();var e=le;le|=1;var n=$t.transition,r=de;try{if($t.transition=null,de=1,t)return t()}finally{de=r,$t.transition=n,le=e,!(le&6)&&Tr()}}function zd(){Pt=As.current,Te(As)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KI(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:zs(),Te(Et),Te(ut),Nd();break;case 5:Pd(r);break;case 4:zs();break;case 13:Te(xe);break;case 19:Te(xe);break;case 10:Ad(r.type._context);break;case 22:case 23:zd()}n=n.return}if(We=t,Me=t=hr(t.current,null),Ye=Pt=e,Fe=0,_o=null,Fd=nu=$r=0,_t=Qi=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Nr=null}return t}function C_(t,e){do{var n=Me;try{if(xd(),Ua.current=_l,vl){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}vl=!1}if(zr=0,$e=Le=Ae=null,qi=!1,go=0,jd.current=null,n===null||n.return===null){Fe=1,_o=e,Me=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var w=f.alternate;w?(f.updateQueue=w.updateQueue,f.memoizedState=w.memoizedState,f.lanes=w.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Dm(o);if(k!==null){k.flags&=-257,Om(k,o,l,i,e),k.mode&1&&bm(i,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){bm(i,h,e),$d();break e}u=Error(L(426))}}else if(Ie&&l.mode&1){var O=Dm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Om(O,o,l,i,e),Id($s(u,l));break e}}i=u=$s(u,l),Fe!==4&&(Fe=2),Qi===null?Qi=[i]:Qi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=h_(i,u,e);Am(i,S);break e;case 1:l=u;var T=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ur===null||!ur.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=d_(i,l,e);Am(i,D);break e}}i=i.return}while(i!==null)}N_(n)}catch(F){e=F,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function R_(){var t=wl.current;return wl.current=_l,t===null?_l:t}function $d(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||!($r&268435455)&&!(nu&268435455)||Xn(We,Ye)}function Il(t,e){var n=le;le|=2;var r=R_();(We!==t||Ye!==e)&&(In=null,Mr(t,e));do try{v1();break}catch(s){C_(t,s)}while(!0);if(xd(),le=n,wl.current=r,Me!==null)throw Error(L(261));return We=null,Ye=0,Fe}function v1(){for(;Me!==null;)P_(Me)}function _1(){for(;Me!==null&&!WT();)P_(Me)}function P_(t){var e=D_(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?N_(t):Me=e,jd.current=null}function N_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d1(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Me=null;return}}else if(n=h1(n,e,Pt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Fe===0&&(Fe=5)}function Cr(t,e,n){var r=de,s=$t.transition;try{$t.transition=null,de=1,w1(t,e,n,r)}finally{$t.transition=s,de=r}return null}function w1(t,e,n,r){do bs();while(nr!==null);if(le&6)throw Error(L(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(eI(t,i),t===We&&(Me=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xa||(xa=!0,O_(sl,function(){return bs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=$t.transition,$t.transition=null;var o=de;de=1;var l=le;le|=4,jd.current=null,p1(t,n),x_(n,t),UI(ih),ol=!!sh,ih=sh=null,t.current=n,m1(n),HT(),le=l,de=o,$t.transition=i}else t.current=n;if(xa&&(xa=!1,nr=t,Tl=s),i=t.pendingLanes,i===0&&(ur=null),QT(n.stateNode),It(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(El)throw El=!1,t=xh,xh=null,t;return Tl&1&&t.tag!==0&&bs(),i=t.pendingLanes,i&1?t===Ah?Gi++:(Gi=0,Ah=t):Gi=0,Tr(),null}function bs(){if(nr!==null){var t=hv(Tl),e=$t.transition,n=de;try{if($t.transition=null,de=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Tl=0,le&6)throw Error(L(331));var s=le;for(le|=4,z=t.current;z!==null;){var i=z,o=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Ki(8,f,i)}var g=f.child;if(g!==null)g.return=f,z=g;else for(;z!==null;){f=z;var w=f.sibling,k=f.return;if(T_(f),f===h){z=null;break}if(w!==null){w.return=k,z=w;break}z=k}}}var P=i.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}z=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,z=o;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ki(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,z=S;break e}z=i.return}}var T=t.current;for(z=T;z!==null;){o=z;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,z=x;else e:for(o=T;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tu(9,l)}}catch(F){Pe(l,l.return,F)}if(l===o){z=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,z=D;break e}z=l.return}}if(le=s,Tr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Kl,t)}catch{}r=!0}return r}finally{de=n,$t.transition=e}}return!1}function Km(t,e,n){e=$s(n,e),e=h_(t,e,1),t=lr(t,e,1),e=gt(),t!==null&&(bo(t,1,e),It(t,e))}function Pe(t,e,n){if(t.tag===3)Km(t,t,n);else for(;e!==null;){if(e.tag===3){Km(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=$s(n,t),t=d_(e,t,1),e=lr(e,t,1),t=gt(),e!==null&&(bo(e,1,t),It(e,t));break}}e=e.return}}function E1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(Fe===4||Fe===3&&(Ye&130023424)===Ye&&500>Oe()-Ud?Mr(t,0):Fd|=n),It(t,e)}function b_(t,e){e===0&&(t.mode&1?(e=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):e=1);var n=gt();t=Vn(t,e),t!==null&&(bo(t,e,n),It(t,n))}function T1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b_(t,n)}function I1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),b_(t,n)}var D_;D_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,c1(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Ie&&e.flags&1048576&&Lv(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;za(t,e),t=e.pendingProps;var s=Fs(e,ut.current);Ns(e,n),s=Dd(null,e,r,t,s,n);var i=Od();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(i=!0,hl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Cd(e),s.updater=eu,e.stateNode=s,s._reactInternals=e,ph(e,r,t,n),e=yh(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&Ed(e),mt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(za(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=x1(r),t=Yt(r,t),s){case 0:e=gh(null,e,r,t,n);break e;case 1:e=Lm(null,e,r,t,n);break e;case 11:e=Vm(null,e,r,t,n);break e;case 14:e=Mm(null,e,r,Yt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),gh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),Lm(t,e,r,s,n);case 3:e:{if(g_(e),t===null)throw Error(L(387));r=e.pendingProps,i=e.memoizedState,s=i.element,$v(t,e),gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=$s(Error(L(423)),e),e=jm(t,e,r,n,s);break e}else if(r!==s){s=$s(Error(L(424)),e),e=jm(t,e,r,n,s);break e}else for(Nt=ar(e.stateNode.containerInfo.firstChild),bt=e,Ie=!0,Jt=null,n=Bv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===s){e=Mn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return Wv(e),t===null&&hh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,oh(r,s)?o=null:i!==null&&oh(r,i)&&(e.flags|=32),m_(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&hh(e),null;case 13:return y_(t,e,n);case 4:return Rd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),Vm(t,e,r,s,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,_e(pl,r._currentValue),r._currentValue=o,i!==null)if(rn(i.value,o)){if(i.children===s.children&&!Et.current){e=Mn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Nn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),dh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}mt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ns(e,n),s=qt(s),r=r(s),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,s=Yt(r,e.pendingProps),s=Yt(r.type,s),Mm(t,e,r,s,n);case 15:return f_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),za(t,e),e.tag=1,Tt(r)?(t=!0,hl(e)):t=!1,Ns(e,n),c_(e,r,s),ph(e,r,s,n),yh(null,e,r,!0,t,n);case 19:return v_(t,e,n);case 22:return p_(t,e,n)}throw Error(L(156,e.tag))};function O_(t,e){return av(t,e)}function S1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new S1(t,e,n,r)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function x1(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ud)return 11;if(t===cd)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return Lr(n.children,s,i,e);case ld:o=8,s|=8;break;case jc:return t=zt(12,n,e,s|2),t.elementType=jc,t.lanes=i,t;case Fc:return t=zt(13,n,e,s),t.elementType=Fc,t.lanes=i,t;case Uc:return t=zt(19,n,e,s),t.elementType=Uc,t.lanes=i,t;case Wy:return ru(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zy:o=10;break e;case $y:o=9;break e;case ud:o=11;break e;case cd:o=14;break e;case Qn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=zt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Lr(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function ru(t,e,n,r){return t=zt(22,t,r,e),t.elementType=Wy,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function yc(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Hd(t,e,n,r,s,i,o,l,u){return t=new A1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=zt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(i),t}function k1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function V_(t){if(!t)return gr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(Tt(n))return Vv(t,n,e)}return e}function M_(t,e,n,r,s,i,o,l,u){return t=Hd(n,r,!0,t,s,i,o,l,u),t.context=V_(null),n=t.current,r=gt(),s=cr(n),i=Nn(r,s),i.callback=e??null,lr(n,i,s),t.current.lanes=s,bo(t,s,r),It(t,r),t}function su(t,e,n,r){var s=e.current,i=gt(),o=cr(s);return n=V_(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(s,e,o),t!==null&&(tn(t,s,o,i),Fa(t,s,o)),o}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){Qm(t,e),(t=t.alternate)&&Qm(t,e)}function C1(){return null}var L_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}iu.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));su(t,e,null,null)};iu.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){su(null,t,null,null)}),e[On]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&gv(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function R1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Sl(o);i.call(h)}}var o=M_(e,r,t,0,null,!1,!1,"",Gm);return t._reactRootContainer=o,t[On]=o.current,co(t.nodeType===8?t.parentNode:t),Wr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=Sl(u);l.call(h)}}var u=Hd(t,0,!1,null,null,!1,!1,"",Gm);return t._reactRootContainer=u,t[On]=u.current,co(t.nodeType===8?t.parentNode:t),Wr(function(){su(e,u,n,r)}),u}function au(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Sl(o);l.call(u)}}su(e,o,t,s)}else o=R1(n,e,t,s,r);return Sl(o)}dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vi(e.pendingLanes);n!==0&&(fd(e,n|1),It(e,Oe()),!(le&6)&&(Ws=Oe()+500,Tr()))}break;case 13:Wr(function(){var r=Vn(t,1);if(r!==null){var s=gt();tn(r,t,1,s)}}),qd(t,1)}};pd=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=gt();tn(e,t,134217728,n)}qd(t,134217728)}};fv=function(t){if(t.tag===13){var e=cr(t),n=Vn(t,e);if(n!==null){var r=gt();tn(n,t,e,r)}qd(t,e)}};pv=function(){return de};mv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Yc=function(t,e,n){switch(e){case"input":if($c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Xl(r);if(!s)throw Error(L(90));qy(r),$c(r,s)}}}break;case"textarea":Qy(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};tv=Bd;nv=Wr;var P1={usingClientEntryPoint:!1,Events:[Oo,ws,Xl,Zy,ev,Bd]},Pi={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N1={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{Kl=Aa.inject(N1),hn=Aa}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(L(200));return k1(t,e,null,n)};Vt.createRoot=function(t,e){if(!Qd(t))throw Error(L(299));var n=!1,r="",s=L_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Hd(t,1,!1,null,null,n,!1,r,s),t[On]=e.current,co(t.nodeType===8?t.parentNode:t),new Kd(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return Wr(t)};Vt.hydrate=function(t,e,n){if(!ou(e))throw Error(L(200));return au(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=L_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,s,!1,i,o),t[On]=e.current,co(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new iu(e)};Vt.render=function(t,e,n){if(!ou(e))throw Error(L(200));return au(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!ou(t))throw Error(L(40));return t._reactRootContainer?(Wr(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};Vt.unstable_batchedUpdates=Bd;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ou(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return au(t,e,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function j_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j_)}catch(t){console.error(t)}}j_(),jy.exports=Vt;var b1=jy.exports,Ym=b1;Mc.createRoot=Ym.createRoot,Mc.hydrateRoot=Ym.hydrateRoot;/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Xm=t=>{const e=O1(t);return e.charAt(0).toUpperCase()+e.slice(1)},F_=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),V1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=X.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>X.createElement("svg",{ref:u,...M1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:F_("lucide",s),...!i&&!V1(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>X.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(t,e)=>{const n=X.forwardRef(({className:r,...s},i)=>X.createElement(L1,{ref:i,iconNode:e,className:F_(`lucide-${D1(Xm(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Xm(t),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],F1=Se("arrow-left",j1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],B1=Se("arrow-right",U1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],U_=Se("bug",z1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]],W1=Se("calendar-range",$1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Rh=Se("calendar",H1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Jm=Se("circle-alert",q1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],Q1=Se("eraser",K1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Y1=Se("external-link",G1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],J1=Se("lock",X1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Zm=Se("log-out",Z1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],tS=Se("menu",eS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],B_=Se("plus",nS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],sS=Se("refresh-cw",rS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ph=Se("save",iS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],eg=Se("settings",oS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],lS=Se("share-2",aS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],z_=Se("shield-check",uS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],hS=Se("sliders-vertical",cS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],fS=Se("square-pen",dS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],$_=Se("trash-2",pS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],W_=Se("triangle-alert",mS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],yS=Se("user",gS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_S=Se("users",vS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gd=Se("x",wS),ES=({currentPage:t,onNavigate:e,isFirebaseConnected:n,user:r,onLogout:s,currentGroup:i,onGroupChange:o})=>{const[l,u]=X.useState(!1);return p.jsxs("nav",{className:"bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50",children:[p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"flex justify-between h-16",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsxs("div",{className:"flex-shrink-0 flex items-center text-primary cursor-pointer",onClick:()=>e("filling"),children:[p.jsx(z_,{className:"h-8 w-8 mr-2"}),p.jsx("span",{className:"font-bold text-lg hidden sm:block tracking-tight text-slate-800",children:"龍岡分隊假表管理"}),p.jsx("span",{className:"font-bold text-lg sm:hidden text-slate-800",children:"龍岡分隊"})]}),p.jsxs("div",{className:"hidden sm:ml-8 sm:flex sm:space-x-4",children:[p.jsxs("button",{onClick:()=>e("settings"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="settings"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[p.jsx(eg,{className:"w-4 h-4 mr-2"}),"配額設定"]}),p.jsxs("button",{onClick:()=>e("filling"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="filling"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[p.jsx(Rh,{className:"w-4 h-4 mr-2"}),"假表填寫"]})]})]}),p.jsxs("div",{className:"flex items-center space-x-2 mx-4",children:[p.jsx("button",{onClick:()=>o("A"),className:`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${i==="A"?"bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm":"bg-white border-transparent text-gray-500 hover:bg-gray-50"}`,children:"A班"}),p.jsx("button",{onClick:()=>o("B"),className:`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${i==="B"?"bg-teal-50 border-teal-500 text-teal-700 shadow-sm":"bg-white border-transparent text-gray-500 hover:bg-gray-50"}`,children:"B班"})]}),p.jsx("div",{className:"hidden sm:flex items-center space-x-4",children:n&&r?p.jsxs("div",{className:"flex items-center pl-4 border-l border-slate-200",children:[p.jsxs("div",{className:"flex flex-col items-end mr-3",children:[p.jsx("span",{className:"text-sm font-semibold text-slate-700 max-w-[120px] truncate",children:r.displayName||"使用者"}),p.jsx("span",{className:"text-[10px] text-slate-400 max-w-[120px] truncate",children:r.email})]}),r.photoURL?p.jsx("img",{className:"h-9 w-9 rounded-full border-2 border-slate-100 shadow-sm",src:r.photoURL,alt:""}):p.jsx("div",{className:"h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200",children:p.jsx(yS,{className:"h-5 w-5 text-slate-400"})}),p.jsx("button",{onClick:s,className:"ml-4 p-2 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors",title:"登出",children:p.jsx(Zm,{className:"w-5 h-5"})})]}):p.jsx("div",{className:"flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200",children:"本機模式"})}),p.jsx("div",{className:"flex items-center sm:hidden",children:p.jsx("button",{onClick:()=>u(!l),className:"inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none",children:l?p.jsx(Gd,{className:"block h-6 w-6"}):p.jsx(tS,{className:"block h-6 w-6"})})})]})}),l&&p.jsxs("div",{className:"sm:hidden border-t border-slate-100 bg-white",children:[p.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[p.jsxs("button",{onClick:()=>{e("settings"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="settings"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[p.jsx(eg,{className:"w-5 h-5 mr-3"}),"配額設定"]}),p.jsxs("button",{onClick:()=>{e("filling"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="filling"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[p.jsx(Rh,{className:"w-5 h-5 mr-3"}),"假表填寫"]})]}),p.jsx("div",{className:"pt-4 pb-4 border-t border-slate-200 bg-slate-50",children:n&&r?p.jsx("div",{className:"flex justify-end px-4",children:p.jsxs("button",{onClick:s,className:"flex items-center px-4 py-2 rounded-md bg-white text-slate-600 hover:text-red-600 shadow-sm border border-slate-200 transition-colors",title:"登出",children:[p.jsx("span",{className:"mr-2 font-medium",children:"登出"}),p.jsx(Zm,{className:"w-5 h-5"})]})}):p.jsx("div",{className:"px-4 py-2",children:p.jsx("div",{className:"text-center text-sm text-amber-700 bg-amber-100 py-1 rounded",children:"目前為本機離線模式"})})})]})]})},tg=t=>new Date(t.getFullYear(),t.getMonth(),1),TS=t=>new Date(t.getFullYear(),t.getMonth()+1,0),ng=({start:t,end:e})=>{const n=[],r=new Date(t);for(;r<=e;)n.push(new Date(r)),r.setDate(r.getDate()+1);return n},cs=(t,e)=>{if(e==="yyyy-MM-dd"){const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${s}`}return e==="d"?String(t.getDate()):""},IS=t=>t.getDay(),vc=t=>{const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)},SS=(t,e)=>{const n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((n-r)/(1e3*60*60*24))},H_=(t,e)=>{const n=new Date(t);return n.setMonth(n.getMonth()+e),n},xS=(t,e)=>H_(t,-1),AS=(t,e)=>{const n=new Date(t);return n.setDate(n.getDate()+e),n},kS=({settings:t,onSaveSettings:e,currentGroup:n})=>{const[r,s]=X.useState(t),[i,o]=X.useState(""),[l,u]=X.useState(!1),[h,f]=X.useState(""),[g,w]=X.useState(""),[k,P]=X.useState("2"),[N,O]=X.useState(null),[S,T]=X.useState(""),x=()=>n==="A"?r.membersA:r.membersB,D=()=>n==="A"?r.firstWorkDayA:r.firstWorkDayB,F=()=>n==="A"?r.dailyQuotasA:r.dailyQuotasB,j=()=>n==="A"?r.shiftExceptionsA||{}:r.shiftExceptionsB||{};X.useEffect(()=>{s(t)},[t]),X.useEffect(()=>{o(""),P("2"),u(!1)},[n]);const E=W=>{const se=new Date(r.year,r.month),ne=W>0?H_(se,1):xS(se),he={...r,year:ne.getFullYear(),month:ne.getMonth(),dailyQuotasA:{},dailyQuotasB:{}};s(he),e(he)},y=()=>{if(!l)return;const W=x();if(i.trim()&&!W.includes(i.trim())){const se=[...W,i.trim()],ne={...r};n==="A"?ne.membersA=se:ne.membersB=se,s(ne),e(ne),o("")}},_=W=>{if(!l)return;const ne=x().filter(me=>me!==W),he={...r};n==="A"?he.membersA=ne:he.membersB=ne,s(he),e(he)},v=W=>{if(!l)return;const se=tg(new Date(r.year,r.month)),ne=W===1?se:AS(se,1),he=cs(ne,"yyyy-MM-dd"),me={...r};n==="A"?(me.firstWorkDayA=he,me.dailyQuotasA={}):(me.firstWorkDayB=he,me.dailyQuotasB={}),s(me),e(me)},A=W=>{if(!l||!h||!g)return;const se=vc(h),ne=vc(g);if(se>ne){alert("起始日期不能晚於結束日期");return}const he={...j()};ng({start:se,end:ne}).forEach(jt=>{const zn=cs(jt,"yyyy-MM-dd");W==="clear"?delete he[zn]:he[zn]=W==="work"});const Ct={...r};n==="A"?Ct.shiftExceptionsA=he:Ct.shiftExceptionsB=he,s(Ct),e(Ct),alert("排班範圍設定已更新")},C=W=>{const se=cs(W,"yyyy-MM-dd"),ne=j();if(ne[se]!==void 0)return ne[se];const he=D();if(!he)return!0;const me=vc(he);return SS(W,me)%2===0},I=tg(new Date(r.year,r.month)),He=TS(I),Lt=ng({start:I,end:He}),te=W=>{if(!l||!D())return;const se={...F()};Lt.forEach(he=>{if(C(he)){const me=cs(he,"yyyy-MM-dd");W===0?delete se[me]:se[me]=W}});const ne={...r};n==="A"?ne.dailyQuotasA=se:ne.dailyQuotasB=se,s(ne),e(ne)},Be=()=>{if(!l)return;const W=parseFloat(k);!isNaN(W)&&W>=0&&te(W)},U=(W,se)=>{l&&(O(W),T(se>0?se.toString():""))},H=()=>{if(!N)return;const W=parseFloat(S),se={...F()};isNaN(W)||W===0?delete se[N]:se[N]=W;const ne={...r};n==="A"?ne.dailyQuotasA=se:ne.dailyQuotasB=se,s(ne),e(ne),O(null),T("")},q=D(),ae=!!q?C(I)?1:2:null,pe=x(),At=F(),ve=n==="A"?"text-indigo-600":"text-teal-600",kt=n==="A"?"bg-indigo-50 border-indigo-200":"bg-teal-50 border-teal-200",ht=n==="A"?"bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-600":"bg-teal-600 hover:bg-teal-700 focus:ring-teal-600",ui=n==="A"?"focus:border-indigo-600 focus:ring-indigo-600":"focus:border-teal-600 focus:ring-teal-600",ss=l?"opacity-100":"opacity-60 cursor-not-allowed";return p.jsxs("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx("h1",{className:"text-2xl font-bold text-gray-900 mr-3",children:"設定頁面"}),p.jsxs("span",{className:`px-3 py-1 rounded-full text-sm font-bold border ${kt} ${ve}`,children:["目前設定：",n,"班"]})]}),p.jsx("button",{onClick:()=>u(!l),className:`flex items-center px-4 py-2 rounded-md font-bold shadow-sm transition-all ${l?"bg-red-50 text-red-600 border border-red-200 hover:bg-red-100":"bg-blue-600 text-white hover:bg-blue-700"}`,children:l?p.jsxs(p.Fragment,{children:[p.jsx(Ph,{className:"w-5 h-5 mr-2"}),"儲存並鎖定"]}):p.jsxs(p.Fragment,{children:[p.jsx(fS,{className:"w-5 h-5 mr-2"}),"啟用編輯模式"]})})]}),!l&&p.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 rounded-r shadow-sm flex items-start",children:[p.jsx(J1,{className:"w-5 h-5 text-yellow-500 mr-2 mt-0.5"}),p.jsxs("p",{className:"text-sm text-yellow-700",children:["目前為",p.jsx("strong",{children:"鎖定閱覽模式"}),"。如需修改配額、人員或非常規排班，請點擊右上角「啟用編輯模式」。"]})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"bg-white shadow rounded-lg p-6 relative overflow-hidden",children:[p.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${n==="A"?"bg-indigo-500":"bg-teal-500"}`}),p.jsxs("h2",{className:"text-lg font-bold text-gray-900 mb-4 flex items-center",children:[p.jsx(Rh,{className:`w-5 h-5 mr-2 ${ve}`}),"基本設定 (",n,"班)"]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between bg-slate-50 p-3 rounded-md",children:[p.jsx("button",{onClick:()=>E(-1),className:"p-1 hover:bg-slate-200 rounded",children:p.jsx(F1,{className:"w-5 h-5 text-slate-600"})}),p.jsxs("span",{className:"text-lg font-semibold text-slate-800",children:[r.year,"年 ",r.month+1,"月"]}),p.jsx("button",{onClick:()=>E(1),className:"p-1 hover:bg-slate-200 rounded",children:p.jsx(B1,{className:"w-5 h-5 text-slate-600"})})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"設定當月首日上班日"}),p.jsxs("div",{className:`grid grid-cols-2 gap-3 mb-4 ${ss}`,children:[p.jsxs("button",{onClick:()=>v(1),disabled:!l,className:`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${ae===1?`bg-blue-50 border-current ${ve}`:"bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[p.jsx("span",{className:"text-xl font-bold",children:"1號"}),p.jsx("span",{className:"text-xs mt-1 opacity-80",children:"基數日上班"})]}),p.jsxs("button",{onClick:()=>v(2),disabled:!l,className:`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${ae===2?`bg-blue-50 border-current ${ve}`:"bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[p.jsx("span",{className:"text-xl font-bold",children:"2號"}),p.jsx("span",{className:"text-xs mt-1 opacity-80",children:"偶數日上班"})]})]}),p.jsxs("div",{className:`pt-4 border-t border-gray-100 ${ss}`,children:[p.jsxs("h3",{className:"text-sm font-bold text-gray-700 mb-2 flex items-center",children:[p.jsx(W1,{className:"w-4 h-4 mr-1 text-orange-500"}),"非常規排班 (範圍設定)"]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-500",children:"起始日期"}),p.jsx("input",{type:"date",value:h,disabled:!l,onChange:W=>f(W.target.value),className:"block w-full text-xs rounded border-gray-300 p-1 border"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-500",children:"結束日期"}),p.jsx("input",{type:"date",value:g,disabled:!l,onChange:W=>w(W.target.value),className:"block w-full text-xs rounded border-gray-300 p-1 border"})]})]}),p.jsxs("div",{className:"flex gap-1",children:[p.jsx("button",{onClick:()=>A("work"),disabled:!l,className:"flex-1 bg-green-50 text-green-700 text-xs py-1 px-2 rounded border border-green-200 hover:bg-green-100",children:"設為上班"}),p.jsx("button",{onClick:()=>A("rest"),disabled:!l,className:"flex-1 bg-slate-50 text-slate-700 text-xs py-1 px-2 rounded border border-slate-200 hover:bg-slate-100",children:"設為輪休"}),p.jsx("button",{onClick:()=>A("clear"),disabled:!l,className:"flex-1 bg-white text-red-500 text-xs py-1 px-2 rounded border border-red-200 hover:bg-red-50",children:"清除設定"})]}),p.jsx("p",{className:"text-[10px] text-gray-400 mt-2",children:"* 選取日期範圍，強制設定該區間為上班或輪休。此設定優先權高於上方常規循環。"})]})]})]})]}),p.jsxs("div",{className:"bg-white shadow rounded-lg p-6 relative overflow-hidden",children:[p.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${n==="A"?"bg-indigo-500":"bg-teal-500"}`}),p.jsx("div",{className:"flex items-center justify-between mb-4",children:p.jsxs("h2",{className:"text-lg font-bold text-gray-900 flex items-center",children:[p.jsx(_S,{className:`w-5 h-5 mr-2 ${ve}`}),n,"班人員 (",pe.length,")"]})}),p.jsxs("div",{className:`flex space-x-2 mb-4 ${ss}`,children:[p.jsx("input",{type:"text",placeholder:"輸入姓名",value:i,disabled:!l,onChange:W=>o(W.target.value),onKeyDown:W=>W.key==="Enter"&&y(),className:`flex-1 rounded-md border-gray-300 shadow-sm focus:ring-opacity-50 border p-2 text-sm focus:ring ${ui}`}),p.jsx("button",{onClick:y,disabled:!i.trim()||!l,className:`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white focus:outline-none disabled:opacity-50 transition-colors ${ht}`,children:p.jsx(B_,{className:"w-4 h-4"})})]}),p.jsxs("div",{className:"max-h-[300px] overflow-y-auto space-y-2",children:[pe.length===0&&p.jsxs("p",{className:"text-sm text-gray-400 text-center py-4",children:["暫無 ",n," 班人員資料"]}),pe.map(W=>p.jsxs("div",{className:"flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100",children:[p.jsx("span",{className:"text-gray-800 font-medium",children:W}),p.jsx("button",{onClick:()=>_(W),disabled:!l,className:`text-gray-400 hover:text-red-500 transition-colors ${l?"":"invisible"}`,children:p.jsx($_,{className:"w-4 h-4"})})]},W))]})]})]}),p.jsx("div",{className:"lg:col-span-2",children:p.jsxs("div",{className:"bg-white shadow rounded-lg p-6 h-full flex flex-col relative overflow-hidden",children:[p.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${n==="A"?"bg-indigo-500":"bg-teal-500"}`}),p.jsxs("div",{className:"flex justify-between items-center mb-4",children:[p.jsxs("h2",{className:"text-lg font-bold text-gray-900",children:[n,"班 - 可休人數配額設定"]}),l&&p.jsx("span",{className:"text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded border border-red-100 animate-pulse",children:"編輯中"})]}),q?p.jsxs("div",{className:`bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 ${ss}`,children:[p.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-3 flex items-center",children:[p.jsx(hS,{className:`w-4 h-4 mr-2 ${ve}`}),"批量配額設定"]}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-end sm:items-center",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"每日可休人數"}),p.jsx("input",{type:"number",min:"0",step:"0.5",disabled:!l,value:k,onChange:W=>P(W.target.value),className:`block w-full w-32 rounded-md border-gray-300 shadow-sm text-sm p-2 border focus:ring focus:ring-opacity-50 ${ui}`,placeholder:"例如: 2"})]}),p.jsxs("div",{className:"flex gap-2 w-full sm:w-auto",children:[p.jsx("button",{onClick:Be,disabled:!l,className:`flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition-colors ${ht}`,children:"套用至本月上班日"}),p.jsxs("button",{onClick:()=>te(0),disabled:!l,className:"flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none transition-colors",children:[p.jsx(Q1,{className:"w-4 h-4 mr-1"}),"清除"]})]})]})]}):p.jsx("div",{className:"bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded-md",children:p.jsxs("div",{className:"flex",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx(W_,{className:"h-5 w-5 text-amber-400","aria-hidden":"true"})}),p.jsx("div",{className:"ml-3",children:p.jsxs("p",{className:"text-sm text-amber-700",children:["請先在左側設定「",n,"班當月首日上班日」以啟用配額設定功能。"]})})]})}),p.jsx("div",{className:"flex-1 min-h-[500px]",children:p.jsxs("div",{className:"grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden h-full",children:[["日","一","二","三","四","五","六"].map(W=>p.jsx("div",{className:"bg-gray-100 py-2 text-center text-sm font-semibold text-gray-700",children:W},W)),Lt.map((W,se)=>{const ne=cs(W,"yyyy-MM-dd"),he=C(W),me=At[ne],Ct=me&&!Number.isInteger(me);let jt="bg-white",zn="";he?l?(zn="cursor-pointer transition-colors",Ct?jt="bg-yellow-50 hover:bg-yellow-100":me&&me>0?jt="bg-green-50 hover:bg-green-100":jt="bg-white hover:bg-gray-50"):(zn="cursor-not-allowed",Ct?jt="bg-yellow-50":me&&me>0&&(jt="bg-green-50")):jt="bg-slate-100 cursor-not-allowed";const qo=IS(W),Ko=se===0?{gridColumnStart:qo===0?7:qo+1}:{};return p.jsxs("div",{style:Ko,onClick:()=>{l&&q&&he&&U(ne,me||0)},className:`${jt} ${zn} p-2 relative flex flex-col justify-between select-none min-h-[80px]`,children:[p.jsx("span",{className:`text-sm ${he?"text-gray-900 font-medium":"text-gray-400"}`,children:cs(W,"d")}),he?p.jsx("div",{className:"flex-1 flex flex-col items-center justify-center",children:me?p.jsx("span",{className:`text-xl font-bold ${Ct?"text-yellow-600":"text-green-600"}`,children:me}):p.jsx("span",{className:"text-xs text-gray-300",children:l?"設定":"未設定"})}):p.jsx("div",{className:"flex-1 flex items-center justify-center",children:p.jsx("span",{className:"text-4xl font-black text-slate-300 opacity-50",children:"休"})})]},ne)})]})})]})})]}),N&&p.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:p.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[p.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>O(null)}),p.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),p.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full",children:[p.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:p.jsx("div",{className:"sm:flex sm:items-start",children:p.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:text-left w-full",children:[p.jsxs("h3",{className:"text-lg leading-6 font-medium text-gray-900 mb-4",id:"modal-title",children:["設定配額 (",n,"班) - ",N]}),p.jsx("div",{className:"space-y-4",children:p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"可休人數"}),p.jsx("input",{type:"number",step:"0.5",min:"0",autoFocus:!0,value:S,onChange:W=>T(W.target.value),onKeyDown:W=>W.key==="Enter"&&H(),className:`shadow-sm block w-full sm:text-lg border-gray-300 rounded-md p-3 border focus:ring focus:ring-opacity-50 ${ui}`,placeholder:"請輸入數字"}),p.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["* 輸入 0 或留空代表清除配額。",p.jsx("br",{}),"* 整數：可排所有假別。",p.jsx("br",{}),"* 非整數(如0.5)：通常用於表示特殊假別，例如外宿配額。"]})]})})]})})}),p.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[p.jsxs("button",{type:"button",onClick:H,className:`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors ${ht}`,children:[p.jsx(Ph,{className:"w-4 h-4 mr-2"}),"儲存"]}),p.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors",onClick:()=>O(null),children:"取消"})]})]})]})})]})};var pt=(t=>(t.Special1="特1",t.Special2="特2",t.Special3="特3",t.Comp1="補1",t.Comp2="補2",t.Comp3="補3",t.Comp4="補4",t.Rest1="休1",t.Rest2="休2",t.Rest3="休3",t.Rest4="休4",t.Personal1="身1",t.Personal2="身2",t.Overnight="外宿",t))(pt||{});const q_=[pt.Special1,pt.Special2,pt.Special3,pt.Comp1,pt.Comp2,pt.Comp3,pt.Comp4,pt.Rest1,pt.Rest2,pt.Rest3,pt.Rest4,pt.Personal1,pt.Personal2],CS=[pt.Overnight],RS=[...q_,...CS],PS=["日","一","二","三","四","五","六"],Ni="shift_scheduler_v1",NS=t=>new Date(t.getFullYear(),t.getMonth(),1),bS=t=>new Date(t.getFullYear(),t.getMonth()+1,0),DS=({start:t,end:e})=>{const n=[],r=new Date(t);for(;r<=e;)n.push(new Date(r)),r.setDate(r.getDate()+1);return n},rg=(t,e)=>{if(e==="yyyy-MM-dd"){const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${s}`}return e==="d"?String(t.getDate()):""},OS=t=>t.getDay(),sg=t=>{const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)},VS=(t,e)=>{const n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((n-r)/(1e3*60*60*24))},MS=({settings:t,savedLeaves:e,onSaveLeaves:n,currentGroup:r})=>{const[s,i]=X.useState(e),[o,l]=X.useState(""),[u,h]=X.useState(null),[f,g]=X.useState(""),[w,k]=X.useState(!1),P=r==="A"?t.membersA:t.membersB,N=r==="A"?t.firstWorkDayA:t.firstWorkDayB,O=r==="A"?t.dailyQuotasA:t.dailyQuotasB,S=r==="A"?t.shiftExceptionsA||{}:t.shiftExceptionsB||{},T=N&&P.length>0,x=r==="A"?"bg-indigo-600 hover:bg-indigo-700":"bg-teal-600 hover:bg-teal-700";X.useEffect(()=>{i(e)},[e]),X.useEffect(()=>{l("")},[r]);const D=()=>{n(s),k(!0),setTimeout(()=>k(!1),3e3)},F=()=>{navigator.clipboard.writeText(window.location.href),alert("連結已複製！")},j=te=>{if(S[te]!==void 0)return S[te];if(!N)return!1;const Be=sg(te),U=sg(N);return VS(Be,U)%2===0},E=te=>O[te]||0,y=()=>{if(!u||!o||!f)return;const te={id:Math.random().toString(36).substr(2,9),date:u,memberName:o,type:f,timestamp:Date.now()},U=[...s.filter(H=>!(H.date===u&&H.memberName===o)),te];i(U),g(""),h(null)},_=te=>{i(Be=>Be.filter(U=>U.id!==te))},v=NS(new Date(t.year,t.month)),A=bS(v),C=DS({start:v,end:A}),I=u?E(u):0,He=Number.isInteger(I),Lt=u?He?q_:RS:[];return T?p.jsxs("div",{className:"max-w-7xl mx-auto py-2 sm:py-8 px-2 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4",children:[p.jsxs("div",{children:[p.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 flex items-center",children:[p.jsxs("span",{className:`mr-2 px-2 py-0.5 rounded text-white text-base ${r==="A"?"bg-indigo-500":"bg-teal-500"}`,children:[r,"班"]}),t.year,"年 ",t.month+1,"月 假表填寫"]}),p.jsx("p",{className:"text-base sm:text-sm text-gray-500 mt-1",children:"請選擇您的姓名，點擊上班日期進行填寫。"})]}),p.jsxs("div",{className:"flex flex-wrap items-center gap-2 w-full md:w-auto",children:[p.jsxs("button",{onClick:F,className:"flex-1 md:flex-none justify-center inline-flex items-center px-3 py-3 sm:py-2 border border-gray-300 rounded-md shadow-sm text-sm sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",children:[p.jsx(lS,{className:"w-4 h-4 mr-2"}),"分享"]}),p.jsxs("button",{onClick:D,className:`flex-1 md:flex-none justify-center inline-flex items-center px-3 py-3 sm:py-2 border border-transparent rounded-md shadow-sm text-sm sm:text-sm font-medium text-white transition-colors ${x}`,children:[p.jsx(Ph,{className:"w-4 h-4 mr-2"}),"儲存"]})]})]}),w&&p.jsx("div",{className:"fixed top-20 right-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50 animate-bounce",children:"儲存成功！"}),p.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-lg shadow mb-4 flex items-center space-x-2 sm:space-x-4 sticky top-16 z-40 border-b border-gray-100",children:[p.jsx("label",{className:"text-base sm:text-sm font-bold text-gray-700 whitespace-nowrap",children:"我是："}),p.jsxs("select",{value:o,onChange:te=>l(te.target.value),className:`block w-full max-w-xs rounded-md border-gray-300 border p-2 sm:p-2 text-base sm:text-sm shadow-sm focus:ring focus:ring-opacity-50 ${r==="A"?"focus:border-indigo-500 focus:ring-indigo-500":"focus:border-teal-500 focus:ring-teal-500"}`,children:[p.jsx("option",{value:"",children:"-- 請選擇姓名 --"}),P.map(te=>p.jsx("option",{value:te,children:te},te))]}),!o&&p.jsx("span",{className:"text-sm sm:text-sm text-red-500 animate-pulse font-medium",children:"請先選擇姓名"})]}),p.jsx("div",{className:"bg-white shadow rounded-lg overflow-hidden flex flex-col",children:p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("div",{className:"min-w-[900px]",children:[p.jsx("div",{className:"grid grid-cols-7 gap-px bg-gray-200 border-b border-gray-200",children:PS.map(te=>p.jsx("div",{className:"bg-gray-50 py-2 sm:py-3 text-center text-sm sm:text-sm font-bold text-gray-700",children:te},te))}),p.jsx("div",{className:"grid grid-cols-7 gap-px bg-gray-200",children:C.map((te,Be)=>{const U=rg(te,"yyyy-MM-dd"),H=j(U),q=E(U),ge=s.filter(ve=>ve.date===U&&P.includes(ve.memberName)),ae=ge.length,pe=q>0&&ae>q,At=Be===0?{gridColumnStart:OS(te)+1}:{};return p.jsxs("div",{style:At,className:`min-h-[50px] sm:min-h-[60px] md:min-h-[120px] bg-white relative flex flex-col ${H?"":"bg-slate-50"}`,children:[p.jsxs("div",{className:"flex justify-between items-start p-1 sm:p-2",children:[p.jsx("span",{className:`text-base sm:text-sm font-medium ${H?"text-gray-900":"text-gray-400"}`,children:rg(te,"d")}),H&&q>0&&p.jsxs("div",{className:`flex items-center text-xs sm:text-xs px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full ${pe?"bg-red-100 text-red-700 font-bold":"bg-green-100 text-green-700"}`,children:[ae,"/",q,pe&&p.jsx(Jm,{className:"w-3 h-3 ml-0.5"})]})]}),H?p.jsxs("div",{className:"flex-1 px-0.5 pb-0.5 sm:px-2 sm:pb-2 flex flex-col gap-1 sm:gap-1",children:[ge.map(ve=>{const kt=o===ve.memberName;return p.jsxs("div",{className:`
                                flex justify-between items-center px-1 py-0.5 sm:px-2 sm:py-1.5 rounded border group
                                ${kt?"bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-300 z-10":"bg-blue-50 text-blue-700 border-blue-100"}
                              `,children:[p.jsxs("div",{className:"flex-1 flex justify-between items-center overflow-hidden mr-1",children:[p.jsx("span",{className:"font-bold truncate text-xs sm:text-xs leading-tight",children:ve.memberName}),p.jsx("span",{className:"font-bold whitespace-nowrap text-xs sm:text-xs leading-tight ml-1",children:ve.type})]}),o===ve.memberName&&p.jsx("button",{onClick:ht=>{ht.stopPropagation(),_(ve.id)},className:"text-gray-400 hover:text-red-600 ml-1",children:p.jsx(Gd,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})})]},ve.id)}),o&&q>0&&p.jsx("button",{onClick:()=>{h(U),g("")},className:`mt-auto w-full flex justify-center items-center py-1 sm:py-1 border-2 border-dashed border-gray-200 rounded text-gray-400 transition-colors text-xs sm:text-xs h-6 sm:h-auto ${r==="A"?"hover:border-indigo-500 hover:text-indigo-500":"hover:border-teal-500 hover:text-teal-500"}`,children:p.jsx(B_,{className:"w-3 h-3 sm:w-3 sm:h-3"})})]}):p.jsx("div",{className:"flex-1 flex items-center justify-center",children:p.jsx("span",{className:"text-4xl sm:text-2xl md:text-5xl font-black text-slate-200 select-none",children:"O"})})]},U)})})]})})}),u&&p.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:p.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[p.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>h(null)}),p.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),p.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[p.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:p.jsx("div",{className:"sm:flex sm:items-start",children:p.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",children:[p.jsxs("h3",{className:"text-xl leading-6 font-medium text-gray-900 mb-4",id:"modal-title",children:["新增假單 - ",u," (",r,"班)"]}),p.jsxs("div",{className:"mb-4 text-base text-gray-500",children:[p.jsxs("p",{children:["填寫人：",p.jsx("span",{className:"font-bold text-gray-900",children:o})]}),p.jsxs("p",{children:["當日配額：",E(u)," (",He?"可選一般假別":"可選一般假別 + 外宿",")"]})]}),p.jsx("div",{className:"grid grid-cols-4 gap-2",children:Lt.map(te=>p.jsx("button",{onClick:()=>g(te),className:`p-3 text-base rounded border ${f===te?`${x} text-white border-transparent`:"bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`,children:te},te))})]})})}),p.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2 sm:gap-0",children:[p.jsx("button",{type:"button",disabled:!f,className:`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 text-base font-medium text-white focus:outline-none disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm transition-colors ${x}`,onClick:y,children:"確定新增"}),p.jsx("button",{type:"button",className:"mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>h(null),children:"取消"})]})]})]})})]}):p.jsxs("div",{className:"flex flex-col items-center justify-center h-[60vh] text-center px-4",children:[p.jsx(Jm,{className:"w-16 h-16 text-warning mb-4"}),p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:[r,"班 設定尚未完成"]}),p.jsxs("p",{className:"text-gray-600 max-w-md",children:["請先返回「配額設定」頁面，設定「",r,"班當月首日上班日」並新增「團隊人員」，才能開始填寫假表。"]})]})},LS=({onLogin:t,loading:e,onShowDebug:n})=>{const[r,s]=X.useState(!1),[i,o]=X.useState(!1);X.useEffect(()=>{const u=navigator.userAgent||navigator.vendor||window.opera;s(/FBAN|FBAV|Line\/|Instagram|MicroMessenger/i.test(u)),o(/Line\//i.test(u))},[]);const l=()=>{if(window.location.search.includes("openExternalBrowser=1"))return;const u=new URL(window.location.href);u.searchParams.set("openExternalBrowser","1"),window.location.href=u.toString()};return p.jsx("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative",children:p.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200",children:[p.jsxs("div",{className:"bg-primary p-8 text-center relative overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-blue-600 opacity-20 pattern-dots"}),p.jsxs("div",{className:"relative z-10",children:[p.jsx("div",{className:"mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner",children:p.jsx(z_,{className:"w-10 h-10 text-white"})}),p.jsx("h1",{className:"text-2xl font-bold text-white tracking-wide shadow-black drop-shadow-sm",children:"龍岡分隊假表管理"}),p.jsx("p",{className:"text-blue-100 mt-2 text-sm font-medium",children:"請登入以存取編輯權限"})]})]}),p.jsxs("div",{className:"p-8",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-2",children:"歡迎回來"}),p.jsxs("p",{className:"text-slate-500 text-sm leading-relaxed",children:["為了確保資料安全與編輯歷程，",p.jsx("br",{}),"本系統採用 Google 帳號進行身分驗證。"]})]}),r&&p.jsx("div",{className:"mb-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded shadow-sm text-left",children:p.jsxs("div",{className:"flex",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx(W_,{className:"h-5 w-5 text-amber-400"})}),p.jsxs("div",{className:"ml-3",children:[p.jsx("h3",{className:"text-sm font-bold text-amber-800",children:"偵測到應用程式內瀏覽器"}),p.jsxs("div",{className:"mt-2 text-sm text-amber-700",children:[p.jsx("p",{className:"mb-2",children:"Google 安全性政策不允許在 Line、Facebook 等應用程式內建瀏覽器登入 (錯誤 403)。"}),p.jsx("p",{className:"font-bold mb-1",children:"解決方法："}),i&&p.jsxs("button",{onClick:l,className:"mb-2 w-full text-center px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center",children:[p.jsx(Y1,{className:"w-3 h-3 mr-1"}),"點此嘗試自動切換至瀏覽器"]}),p.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-1 text-xs sm:text-sm",children:[p.jsxs("li",{children:["點擊畫面角落的選單圖示 (通常是 ",p.jsx("span",{className:"font-bold",children:"⋮"})," 或 ",p.jsx("span",{className:"font-bold",children:"⋯"}),")"]}),p.jsxs("li",{children:["選擇 ",p.jsx("span",{className:"font-bold",children:"「在預設瀏覽器中開啟」"})," 或 ",p.jsx("span",{className:"font-bold",children:"「以 Safari/Chrome 開啟」"})]})]})]})]})]})}),p.jsx("button",{onClick:t,disabled:e||r,className:"w-full group relative flex items-center justify-center px-4 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100",children:e?p.jsxs("span",{className:"flex items-center",children:[p.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"登入中..."]}):p.jsxs("span",{className:"flex items-center",children:[p.jsx("svg",{className:"w-5 h-5 mr-3",viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:p.jsxs("g",{transform:"matrix(1, 0, 0, 1, 27.009001, -39.23856)",children:[p.jsx("path",{fill:"#4285F4",d:"M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"}),p.jsx("path",{fill:"#34A853",d:"M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.424 63.239 -14.754 63.239 Z"}),p.jsx("path",{fill:"#FBBC05",d:"M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"}),p.jsx("path",{fill:"#EA4335",d:"M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.424 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"})]})}),r?"請先切換至瀏覽器":"使用 Google 帳號登入"]})})]}),p.jsxs("div",{className:"bg-gray-50 p-4 text-center border-t border-gray-100 flex flex-col items-center w-full",children:[p.jsx("p",{className:"text-xs text-slate-400 mb-2",children:"© 龍岡分隊假表管理 | Secure Access"}),n&&p.jsxs("button",{onClick:n,className:"mt-1 text-[10px] text-slate-300 hover:text-slate-500 flex items-center",children:[p.jsx(U_,{className:"w-3 h-3 mr-1"})," Debug Info"]})]})]})})},xl="app_debug_logs",Ne=(t,e="info")=>{try{const n=new Date,r=`${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}:${n.getSeconds().toString().padStart(2,"0")}.${n.getMilliseconds().toString().padStart(3,"0")}`,s={timestamp:r,message:t,type:e},i=localStorage.getItem(xl),o=i?JSON.parse(i):[],l=[s,...o].slice(0,50);localStorage.setItem(xl,JSON.stringify(l)),console.log(`[${r}] ${t}`)}catch(n){console.error("Logger error",n)}},jS=()=>{try{const t=localStorage.getItem(xl);return t?JSON.parse(t):[]}catch{return[]}},FS=()=>{localStorage.removeItem(xl)},_c=({isVisible:t,onClose:e})=>{const[n,r]=X.useState([]),s=()=>{r(jS())};return X.useEffect(()=>{if(t){s();const i=setInterval(s,1e3);return()=>clearInterval(i)}},[t]),t?p.jsxs("div",{className:"fixed inset-x-0 bottom-0 h-[50vh] bg-black/90 text-green-400 z-[10000] flex flex-col font-mono text-xs border-t-2 border-green-600 shadow-2xl",children:[p.jsxs("div",{className:"flex justify-between items-center p-2 bg-gray-900 border-b border-gray-700",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(U_,{className:"w-4 h-4"}),p.jsx("span",{className:"font-bold",children:"System Logs"})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:s,className:"p-1 hover:bg-gray-700 rounded text-blue-400",children:p.jsx(sS,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>{FS(),s()},className:"p-1 hover:bg-gray-700 rounded text-red-400",children:p.jsx($_,{className:"w-4 h-4"})}),p.jsx("button",{onClick:e,className:"p-1 hover:bg-gray-700 rounded text-gray-400",children:p.jsx(Gd,{className:"w-4 h-4"})})]})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-2 space-y-1",children:[n.length===0&&p.jsx("div",{className:"text-gray-500 italic",children:"No logs recorded."}),n.map((i,o)=>p.jsxs("div",{className:"border-b border-gray-800 pb-1 break-words",children:[p.jsxs("span",{className:"text-gray-500 mr-2",children:["[",i.timestamp,"]"]}),p.jsx("span",{className:i.type==="error"?"text-red-400 font-bold":i.type==="success"?"text-green-300 font-bold":i.type==="warn"?"text-yellow-400":"text-gray-300",children:i.message})]},o))]})]}):null};var ig={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},US=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(w=64)),r.push(n[f],n[g],n[w],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):US(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new BS;const w=i<<2|l>>4;if(r.push(w),h!==64){const k=l<<4&240|h>>2;if(r.push(k),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zS=function(t){const e=K_(t);return Q_.encodeByteArray(e,!0)},Al=function(t){return zS(t).replace(/\./g,"")},G_=function(t){try{return Q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=()=>$S().__FIREBASE_DEFAULTS__,HS=()=>{if(typeof process>"u"||typeof ig>"u")return;const t=ig.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&G_(t[1]);return e&&JSON.parse(e)},lu=()=>{try{return WS()||HS()||qS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y_=t=>{var e,n;return(n=(e=lu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},KS=t=>{const e=Y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},X_=()=>{var t;return(t=lu())===null||t===void 0?void 0:t.config},J_=t=>{var e;return(e=lu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Al(JSON.stringify(n)),Al(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function XS(){var t;const e=(t=lu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ex(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tx(){return!XS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function e0(){try{return typeof indexedDB=="object"}catch{return!1}}function t0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function nx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rx,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sx(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new on(s,l,r)}}function sx(t,e){return t.replace(ix,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ix=/\{\$([^}]+)}/g;function ox(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(og(i)&&og(o)){if(!wo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function og(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ax(t,e){const n=new lx(t,e);return n.subscribe.bind(n)}class lx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ux(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wc),s.error===void 0&&(s.error=wc),s.complete===void 0&&(s.complete=wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ux(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=1e3,hx=2,dx=4*60*60*1e3,fx=.5;function ag(t,e=cx,n=hx){const r=e*Math.pow(n,t),s=Math.round(fx*r*(Math.random()-.5)*2);return Math.min(dx,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gx(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mx(t){return t===Rr?void 0:t}function gx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new px(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const vx={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},_x=ie.INFO,wx={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Ex=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=_x,this._logHandler=Ex,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Tx=(t,e)=>e.some(n=>t instanceof n);let lg,ug;function Ix(){return lg||(lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sx(){return ug||(ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n0=new WeakMap,Nh=new WeakMap,r0=new WeakMap,Ec=new WeakMap,Yd=new WeakMap;function xx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n0.set(n,t)}).catch(()=>{}),Yd.set(e,t),e}function Ax(t){if(Nh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nh.set(t,e)}let bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kx(t){bh=t(bh)}function Cx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return r0.set(r,e.sort?e.sort():[e]),dr(r)}:Sx().includes(t)?function(...e){return t.apply(Tc(this),e),dr(n0.get(this))}:function(...e){return dr(t.apply(Tc(this),e))}}function Rx(t){return typeof t=="function"?Cx(t):(t instanceof IDBTransaction&&Ax(t),Tx(t,Ix())?new Proxy(t,bh):t)}function dr(t){if(t instanceof IDBRequest)return xx(t);if(Ec.has(t))return Ec.get(t);const e=Rx(t);return e!==t&&(Ec.set(t,e),Yd.set(e,t)),e}const Tc=t=>Yd.get(t);function s0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Px=["get","getKey","getAll","getAllKeys","count"],Nx=["put","add","delete","clear"],Ic=new Map;function cg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Px.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Ic.set(e,i),i}kx(t=>({...t,get:(e,n,r)=>cg(e,n)||t.get(e,n,r),has:(e,n)=>!!cg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dh="@firebase/app",hg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new uu("@firebase/app"),Ox="@firebase/app-compat",Vx="@firebase/analytics-compat",Mx="@firebase/analytics",Lx="@firebase/app-check-compat",jx="@firebase/app-check",Fx="@firebase/auth",Ux="@firebase/auth-compat",Bx="@firebase/database",zx="@firebase/data-connect",$x="@firebase/database-compat",Wx="@firebase/functions",Hx="@firebase/functions-compat",qx="@firebase/installations",Kx="@firebase/installations-compat",Qx="@firebase/messaging",Gx="@firebase/messaging-compat",Yx="@firebase/performance",Xx="@firebase/performance-compat",Jx="@firebase/remote-config",Zx="@firebase/remote-config-compat",eA="@firebase/storage",tA="@firebase/storage-compat",nA="@firebase/firestore",rA="@firebase/vertexai-preview",sA="@firebase/firestore-compat",iA="firebase",oA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="[DEFAULT]",aA={[Dh]:"fire-core",[Ox]:"fire-core-compat",[Mx]:"fire-analytics",[Vx]:"fire-analytics-compat",[jx]:"fire-app-check",[Lx]:"fire-app-check-compat",[Fx]:"fire-auth",[Ux]:"fire-auth-compat",[Bx]:"fire-rtdb",[zx]:"fire-data-connect",[$x]:"fire-rtdb-compat",[Wx]:"fire-fn",[Hx]:"fire-fn-compat",[qx]:"fire-iid",[Kx]:"fire-iid-compat",[Qx]:"fire-fcm",[Gx]:"fire-fcm-compat",[Yx]:"fire-perf",[Xx]:"fire-perf-compat",[Jx]:"fire-rc",[Zx]:"fire-rc-compat",[eA]:"fire-gcs",[tA]:"fire-gcs-compat",[nA]:"fire-fst",[sA]:"fire-fst-compat",[rA]:"fire-vertex","fire-js":"fire-js",[iA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Map,lA=new Map,Vh=new Map;function dg(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(Vh.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of kl.values())dg(n,t);for(const n of lA.values())dg(n,t);return!0}function ts(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new es("app","Firebase",uA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=oA;function i0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=X_()),!n)throw fr.create("no-options");const i=kl.get(s);if(i){if(wo(n,i.options)&&wo(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new yx(s);for(const u of Vh.values())o.addComponent(u);const l=new cA(n,r,o);return kl.set(s,l),l}function Xd(t=Oh){const e=kl.get(t);if(!e&&t===Oh&&X_())return i0();if(!e)throw fr.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let s=(r=aA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}yn(new sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="firebase-heartbeat-database",dA=1,Eo="firebase-heartbeat-store";let Sc=null;function o0(){return Sc||(Sc=s0(hA,dA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Sc}async function fA(t){try{const n=(await o0()).transaction(Eo),r=await n.objectStore(Eo).get(a0(t));return await n.done,r}catch(e){if(e instanceof on)Ln.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function fg(t,e){try{const r=(await o0()).transaction(Eo,"readwrite");await r.objectStore(Eo).put(e,a0(t)),await r.done}catch(n){if(n instanceof on)Ln.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function a0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=1024,mA=30*24*60*60*1e3;class gA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=mA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pg(),{heartbeatsToSend:r,unsentEntries:s}=yA(this._heartbeatsCache.heartbeats),i=Al(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ln.warn(n),""}}}function pg(){return new Date().toISOString().substring(0,10)}function yA(t,e=pA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return e0()?t0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mg(t){return Al(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){yn(new sn("platform-logger",e=>new bx(e),"PRIVATE")),yn(new sn("heartbeat",e=>new gA(e),"PRIVATE")),Wt(Dh,hg,t),Wt(Dh,hg,"esm2017"),Wt("fire-js","")}_A("");var wA="firebase",EA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(wA,EA,"app");var gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,l0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function _(){}_.prototype=y.prototype,E.D=y.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(v,A,C){for(var I=Array(arguments.length-2),He=2;He<arguments.length;He++)I[He-2]=arguments[He];return y.prototype[A].apply(v,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,_){_||(_=0);var v=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)v[A]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(A=0;16>A;++A)v[A]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=E.g[0],_=E.g[1],A=E.g[2];var C=E.g[3],I=y+(C^_&(A^C))+v[0]+3614090360&4294967295;y=_+(I<<7&4294967295|I>>>25),I=C+(A^y&(_^A))+v[1]+3905402710&4294967295,C=y+(I<<12&4294967295|I>>>20),I=A+(_^C&(y^_))+v[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(y^A&(C^y))+v[3]+3250441966&4294967295,_=A+(I<<22&4294967295|I>>>10),I=y+(C^_&(A^C))+v[4]+4118548399&4294967295,y=_+(I<<7&4294967295|I>>>25),I=C+(A^y&(_^A))+v[5]+1200080426&4294967295,C=y+(I<<12&4294967295|I>>>20),I=A+(_^C&(y^_))+v[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(y^A&(C^y))+v[7]+4249261313&4294967295,_=A+(I<<22&4294967295|I>>>10),I=y+(C^_&(A^C))+v[8]+1770035416&4294967295,y=_+(I<<7&4294967295|I>>>25),I=C+(A^y&(_^A))+v[9]+2336552879&4294967295,C=y+(I<<12&4294967295|I>>>20),I=A+(_^C&(y^_))+v[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(y^A&(C^y))+v[11]+2304563134&4294967295,_=A+(I<<22&4294967295|I>>>10),I=y+(C^_&(A^C))+v[12]+1804603682&4294967295,y=_+(I<<7&4294967295|I>>>25),I=C+(A^y&(_^A))+v[13]+4254626195&4294967295,C=y+(I<<12&4294967295|I>>>20),I=A+(_^C&(y^_))+v[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(y^A&(C^y))+v[15]+1236535329&4294967295,_=A+(I<<22&4294967295|I>>>10),I=y+(A^C&(_^A))+v[1]+4129170786&4294967295,y=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(y^_))+v[6]+3225465664&4294967295,C=y+(I<<9&4294967295|I>>>23),I=A+(y^_&(C^y))+v[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^y&(A^C))+v[0]+3921069994&4294967295,_=A+(I<<20&4294967295|I>>>12),I=y+(A^C&(_^A))+v[5]+3593408605&4294967295,y=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(y^_))+v[10]+38016083&4294967295,C=y+(I<<9&4294967295|I>>>23),I=A+(y^_&(C^y))+v[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^y&(A^C))+v[4]+3889429448&4294967295,_=A+(I<<20&4294967295|I>>>12),I=y+(A^C&(_^A))+v[9]+568446438&4294967295,y=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(y^_))+v[14]+3275163606&4294967295,C=y+(I<<9&4294967295|I>>>23),I=A+(y^_&(C^y))+v[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^y&(A^C))+v[8]+1163531501&4294967295,_=A+(I<<20&4294967295|I>>>12),I=y+(A^C&(_^A))+v[13]+2850285829&4294967295,y=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(y^_))+v[2]+4243563512&4294967295,C=y+(I<<9&4294967295|I>>>23),I=A+(y^_&(C^y))+v[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^y&(A^C))+v[12]+2368359562&4294967295,_=A+(I<<20&4294967295|I>>>12),I=y+(_^A^C)+v[5]+4294588738&4294967295,y=_+(I<<4&4294967295|I>>>28),I=C+(y^_^A)+v[8]+2272392833&4294967295,C=y+(I<<11&4294967295|I>>>21),I=A+(C^y^_)+v[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^y)+v[14]+4259657740&4294967295,_=A+(I<<23&4294967295|I>>>9),I=y+(_^A^C)+v[1]+2763975236&4294967295,y=_+(I<<4&4294967295|I>>>28),I=C+(y^_^A)+v[4]+1272893353&4294967295,C=y+(I<<11&4294967295|I>>>21),I=A+(C^y^_)+v[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^y)+v[10]+3200236656&4294967295,_=A+(I<<23&4294967295|I>>>9),I=y+(_^A^C)+v[13]+681279174&4294967295,y=_+(I<<4&4294967295|I>>>28),I=C+(y^_^A)+v[0]+3936430074&4294967295,C=y+(I<<11&4294967295|I>>>21),I=A+(C^y^_)+v[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^y)+v[6]+76029189&4294967295,_=A+(I<<23&4294967295|I>>>9),I=y+(_^A^C)+v[9]+3654602809&4294967295,y=_+(I<<4&4294967295|I>>>28),I=C+(y^_^A)+v[12]+3873151461&4294967295,C=y+(I<<11&4294967295|I>>>21),I=A+(C^y^_)+v[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^y)+v[2]+3299628645&4294967295,_=A+(I<<23&4294967295|I>>>9),I=y+(A^(_|~C))+v[0]+4096336452&4294967295,y=_+(I<<6&4294967295|I>>>26),I=C+(_^(y|~A))+v[7]+1126891415&4294967295,C=y+(I<<10&4294967295|I>>>22),I=A+(y^(C|~_))+v[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~y))+v[5]+4237533241&4294967295,_=A+(I<<21&4294967295|I>>>11),I=y+(A^(_|~C))+v[12]+1700485571&4294967295,y=_+(I<<6&4294967295|I>>>26),I=C+(_^(y|~A))+v[3]+2399980690&4294967295,C=y+(I<<10&4294967295|I>>>22),I=A+(y^(C|~_))+v[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~y))+v[1]+2240044497&4294967295,_=A+(I<<21&4294967295|I>>>11),I=y+(A^(_|~C))+v[8]+1873313359&4294967295,y=_+(I<<6&4294967295|I>>>26),I=C+(_^(y|~A))+v[15]+4264355552&4294967295,C=y+(I<<10&4294967295|I>>>22),I=A+(y^(C|~_))+v[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~y))+v[13]+1309151649&4294967295,_=A+(I<<21&4294967295|I>>>11),I=y+(A^(_|~C))+v[4]+4149444226&4294967295,y=_+(I<<6&4294967295|I>>>26),I=C+(_^(y|~A))+v[11]+3174756917&4294967295,C=y+(I<<10&4294967295|I>>>22),I=A+(y^(C|~_))+v[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~y))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var _=y-this.blockSize,v=this.B,A=this.h,C=0;C<y;){if(A==0)for(;C<=_;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<y;)if(v[A++]=E.charCodeAt(C++),A==this.blockSize){s(this,v),A=0;break}}else for(;C<y;)if(v[A++]=E[C++],A==this.blockSize){s(this,v),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var _=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=_&255,_/=256;for(this.u(E),E=Array(16),y=_=0;4>y;++y)for(var v=0;32>v;v+=8)E[_++]=this.g[y]>>>v&255;return E};function i(E,y){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=y(E)}function o(E,y){this.h=y;for(var _=[],v=!0,A=E.length-1;0<=A;A--){var C=E[A]|0;v&&C==y||(_[A]=C,v=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?i(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return O(h(-E));for(var y=[],_=1,v=0;E>=_;v++)y[v]=E/_|0,_*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),v=g,A=0;A<E.length;A+=8){var C=Math.min(8,E.length-A),I=parseInt(E.substring(A,A+C),y);8>C?(C=h(Math.pow(y,C)),v=v.j(C).add(h(I))):(v=v.j(_),v=v.add(h(I)))}return v}var g=u(0),w=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var E=0,y=1,_=0;_<this.g.length;_++){var v=this.i(_);E+=(0<=v?v:4294967296+v)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+O(this).toString(E);for(var y=h(Math.pow(E,6)),_=this,v="";;){var A=D(_,y).g;_=S(_,A.j(y));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=A,P(_))return C+v;for(;6>C.length;)C="0"+C;v=C+v}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=S(this,E),N(E)?-1:P(E)?0:1};function O(E){for(var y=E.g.length,_=[],v=0;v<y;v++)_[v]=~E.g[v];return new o(_,~E.h).add(w)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],v=0,A=0;A<=y;A++){var C=v+(this.i(A)&65535)+(E.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);v=I>>>16,C&=65535,I&=65535,_[A]=I<<16|C}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(E,y){return E.add(O(y))}t.j=function(E){if(P(this)||P(E))return g;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(0>this.l(k)&&0>E.l(k))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,_=[],v=0;v<2*y;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var A=0;A<E.g.length;A++){var C=this.i(v)>>>16,I=this.i(v)&65535,He=E.i(A)>>>16,Lt=E.i(A)&65535;_[2*v+2*A]+=I*Lt,T(_,2*v+2*A),_[2*v+2*A+1]+=C*Lt,T(_,2*v+2*A+1),_[2*v+2*A+1]+=I*He,T(_,2*v+2*A+1),_[2*v+2*A+2]+=C*He,T(_,2*v+2*A+2)}for(v=0;v<y;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=y;v<2*y;v++)_[v]=0;return new o(_,0)};function T(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function x(E,y){this.g=E,this.h=y}function D(E,y){if(P(y))throw Error("division by zero");if(P(E))return new x(g,g);if(N(E))return y=D(O(E),y),new x(O(y.g),O(y.h));if(N(y))return y=D(E,O(y)),new x(O(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=w,v=y;0>=v.l(E);)_=F(_),v=F(v);var A=j(_,1),C=j(v,1);for(v=j(v,2),_=j(_,2);!P(v);){var I=C.add(v);0>=I.l(E)&&(A=A.add(_),C=I),v=j(v,1),_=j(_,1)}return y=S(E,A.j(y)),new x(A,y)}for(A=g;0<=E.l(y);){for(_=Math.max(1,Math.floor(E.m()/y.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),C=h(_),I=C.j(y);N(I)||0<I.l(E);)_-=v,C=h(_),I=C.j(y);P(C)&&(C=w),A=A.add(C),E=S(E,I)}return new x(A,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)&E.i(v);return new o(_,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)|E.i(v);return new o(_,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],v=0;v<y;v++)_[v]=this.i(v)^E.i(v);return new o(_,this.h^E.h)};function F(E){for(var y=E.g.length+1,_=[],v=0;v<y;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new o(_,E.h)}function j(E,y){var _=y>>5;y%=32;for(var v=E.g.length-_,A=[],C=0;C<v;C++)A[C]=0<y?E.i(C+_)>>>y|E.i(C+_+1)<<32-y:E.i(C+_);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,jr=o}).apply(typeof gg<"u"?gg:typeof self<"u"?self:typeof window<"u"?window:{});var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u0,Li,c0,qa,Mh,h0,d0,f0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ka=="object"&&ka];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,m=!1,R={next:function(){if(!m&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),a.apply(c,R)}}return function(){return a.apply(c,arguments)}}function w(a,c,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,w.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,R,b){for(var B=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)B[ye-2]=arguments[ye];return c.prototype[R].apply(m,B)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const R=a.length||0,b=m.length||0;a.length=R+b;for(let B=0;B<b;B++)a[R+B]=m[B]}else a.push(m)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function T(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function j(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,c){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let b=0;b<_.length;b++)d=_[b],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=H;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class He{constructor(){this.h=this.g=null}add(c,d){const m=Lt.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Lt=new S(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,U=!1,H=new He,q=()=>{const a=l.Promise.resolve(void 0);Be=()=>{a.then(ge)}};var ge=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){C(d)}var c=Lt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}U=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var At=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function ve(a,c){if(pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{D(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:kt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ve.aa.h.call(this)}}P(ve,pe);var kt={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),ui=0;function ss(a,c,d,m,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=R,this.key=++ui,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function se(a){this.src=a,this.g={},this.h=0}se.prototype.add=function(a,c,d,m,R){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var B=he(a,c,m,R);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new ss(c,this.src,b,!!m,R),c.fa=d,a.push(c)),c};function ne(a,c){var d=c.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,c,void 0),b;(b=0<=R)&&Array.prototype.splice.call(m,R,1),b&&(W(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function he(a,c,d,m){for(var R=0;R<a.length;++R){var b=a[R];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==m)return R}return-1}var me="closure_lm_"+(1e6*Math.random()|0),Ct={};function jt(a,c,d,m,R){if(Array.isArray(c)){for(var b=0;b<c.length;b++)jt(a,c[b],d,m,R);return null}return d=qf(d),a&&a[ht]?a.K(c,d,h(m)?!!m.capture:!1,R):zn(a,c,d,!1,m,R)}function zn(a,c,d,m,R,b){if(!c)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,ye=Cu(a);if(ye||(a[me]=ye=new se(a)),d=ye.add(c,d,m,B,b),d.proxy)return d;if(m=qo(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)At||(R=B),R===void 0&&(R=!1),a.addEventListener(c.toString(),m,R);else if(a.attachEvent)a.attachEvent(Hf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function qo(){function a(d){return c.call(a.src,a.listener,d)}const c=bE;return a}function Ko(a,c,d,m,R){if(Array.isArray(c))for(var b=0;b<c.length;b++)Ko(a,c[b],d,m,R);else m=h(m)?!!m.capture:!!m,d=qf(d),a&&a[ht]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=he(b,d,m,R),-1<d&&(W(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Cu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=he(c,d,m,R)),(d=-1<a?c[a]:null)&&ku(d))}function ku(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[ht])ne(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Hf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Cu(c))?(ne(d,a),d.h==0&&(d.src=null,c[me]=null)):W(a)}}}function Hf(a){return a in Ct?Ct[a]:Ct[a]="on"+a}function bE(a,c){if(a.da)a=!0;else{c=new ve(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&ku(a),a=d.call(m,c)}return a}function Cu(a){return a=a[me],a instanceof se?a:null}var Ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function qf(a){return typeof a=="function"?a:(a[Ru]||(a[Ru]=function(c){return a.handleEvent(c)}),a[Ru])}function et(){ae.call(this),this.i=new se(this),this.M=this,this.F=null}P(et,ae),et.prototype[ht]=!0,et.prototype.removeEventListener=function(a,c,d,m){Ko(this,a,c,d,m)};function dt(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new pe(c,a);else if(c instanceof pe)c.target=c.target||a;else{var R=c;c=new pe(m,a),v(c,R)}if(R=!0,d)for(var b=d.length-1;0<=b;b--){var B=c.g=d[b];R=Qo(B,m,!0,c)&&R}if(B=c.g=a,R=Qo(B,m,!0,c)&&R,R=Qo(B,m,!1,c)&&R,d)for(b=0;b<d.length;b++)B=c.g=d[b],R=Qo(B,m,!1,c)&&R}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)W(d[m]);delete a.g[c],a.h--}}this.F=null},et.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},et.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Qo(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,b=0;b<c.length;++b){var B=c[b];if(B&&!B.da&&B.capture==d){var ye=B.listener,qe=B.ha||B.src;B.fa&&ne(a.i,B),R=ye.call(qe,m)!==!1&&R}}return R&&!m.defaultPrevented}function Kf(a,c,d){if(typeof a=="function")d&&(a=w(a,d));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Qf(a){a.g=Kf(()=>{a.g=null,a.i&&(a.i=!1,Qf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class DE extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Qf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(a){ae.call(this),this.h=a,this.g={}}P(ci,ae);var Gf=[];function Yf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&ku(c)},a),a.g={}}ci.prototype.N=function(){ci.aa.N.call(this),Yf(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pu=l.JSON.stringify,OE=l.JSON.parse,VE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Nu(){}Nu.prototype.h=null;function Xf(a){return a.h||(a.h=a.i())}function Jf(){}var hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bu(){pe.call(this,"d")}P(bu,pe);function Du(){pe.call(this,"c")}P(Du,pe);var Ir={},Zf=null;function Go(){return Zf=Zf||new et}Ir.La="serverreachability";function ep(a){pe.call(this,Ir.La,a)}P(ep,pe);function di(a){const c=Go();dt(c,new ep(c))}Ir.STAT_EVENT="statevent";function tp(a,c){pe.call(this,Ir.STAT_EVENT,a),this.stat=c}P(tp,pe);function ft(a){const c=Go();dt(c,new tp(c,a))}Ir.Ma="timingevent";function np(a,c){pe.call(this,Ir.Ma,a),this.size=c}P(np,pe);function fi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function pi(){this.g=!0}pi.prototype.xa=function(){this.g=!1};function ME(a,c,d,m,R,b){a.info(function(){if(a.g)if(b)for(var B="",ye=b.split("&"),qe=0;qe<ye.length;qe++){var ue=ye[qe].split("=");if(1<ue.length){var tt=ue[0];ue=ue[1];var nt=tt.split("_");B=2<=nt.length&&nt[1]=="type"?B+(tt+"="+ue+"&"):B+(tt+"=redacted&")}}else B=null;else B=b;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+d+`
`+B})}function LE(a,c,d,m,R,b,B){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+d+`
`+b+" "+B})}function is(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+FE(a,d)+(m?" "+m:"")})}function jE(a,c){a.info(function(){return"TIMEOUT: "+c})}pi.prototype.info=function(){};function FE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var b=R[0];if(b!="noop"&&b!="stop"&&b!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Pu(d)}catch{return c}}var Yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ou;function Xo(){}P(Xo,Nu),Xo.prototype.g=function(){return new XMLHttpRequest},Xo.prototype.i=function(){return{}},Ou=new Xo;function $n(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sp}function sp(){this.i=null,this.g="",this.h=!1}var ip={},Vu={};function Mu(a,c,d){a.L=1,a.v=ta(En(c)),a.m=d,a.P=!0,op(a,null)}function op(a,c){a.F=Date.now(),Jo(a),a.A=En(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),wp(d.i,"t",m),a.C=0,d=a.j.J,a.h=new sp,a.g=jp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new DE(w(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Gf[0]=R.toString()),R=Gf);for(var b=0;b<R.length;b++){var B=jt(d,R[b],m||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),di(),ME(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const c=this.M;c&&Tn(a)==3?c.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const nt=Tn(this.g);var c=this.g.Ba();const ls=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||kp(this.g)))){this.J||nt!=4||c==7||(c==8||0>=ls?di(3):di(2)),Lu(this);var d=this.g.Z();this.X=d;t:if(ap(this)){var m=kp(this.g);a="";var R=m.length,b=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),mi(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(b&&c==R-1)});m.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,LE(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,qe=this.g;if((ye=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(ye)){var ue=ye;break t}}ue=null}if(d=ue)is(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ju(this,d);else{this.o=!1,this.s=3,ft(12),Sr(this),mi(this);break e}}if(this.P){d=!0;let Qt;for(;!this.J&&this.C<B.length;)if(Qt=UE(this,B),Qt==Vu){nt==4&&(this.s=4,ft(14),d=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==ip){this.s=4,ft(15),is(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else is(this.i,this.l,Qt,null),ju(this,Qt);if(ap(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||B.length!=0||this.h.h||(this.s=1,ft(16),d=!1),this.o=this.o&&d,!d)is(this.i,this.l,B,"[Invalid Chunked Response]"),Sr(this),mi(this);else if(0<B.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Wu(tt),tt.M=!0,ft(11))}}else is(this.i,this.l,B,null),ju(this,B);nt==4&&Sr(this),this.o&&!this.J&&(nt==4?Op(this.j,this):(this.o=!1,Jo(this)))}else rT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Sr(this),mi(this)}}}catch{}finally{}};function ap(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function UE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Vu:(d=Number(c.substring(d,m)),isNaN(d)?ip:(m+=1,m+d>c.length?Vu:(c=c.slice(m,m+d),a.C=m+d,c)))}$n.prototype.cancel=function(){this.J=!0,Sr(this)};function Jo(a){a.S=Date.now()+a.I,lp(a,a.I)}function lp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fi(w(a.ba,a),c)}function Lu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jE(this.i,this.A),this.L!=2&&(di(),ft(17)),Sr(this),this.s=2,mi(this)):lp(this,this.S-a)};function mi(a){a.j.G==0||a.J||Op(a.j,a)}function Sr(a){Lu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Yf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ju(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Fu(d.h,a))){if(!a.K&&Fu(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)aa(d),ia(d);else break e;$u(d),ft(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=fi(w(d.Za,d),6e3));if(1>=hp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ar(d,11)}else if((a.K||d.g==a)&&aa(d),!T(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let ue=R[c];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const tt=ue[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=ue[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const ls=ue[5];ls!=null&&typeof ls=="number"&&0<ls&&(m=1.5*ls,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Qt=a.g;if(Qt){const ua=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ua){var b=m.h;b.g||ua.indexOf("spdy")==-1&&ua.indexOf("quic")==-1&&ua.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Uu(b,b.h),b.h=null))}if(m.D){const Hu=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Hu&&(m.ya=Hu,we(m.I,m.D,Hu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var B=a;if(m.qa=Lp(m,m.J?m.ia:null,m.W),B.K){dp(m.h,B);var ye=B,qe=m.L;qe&&(ye.I=qe),ye.B&&(Lu(ye),Jo(ye)),m.g=B}else bp(m);0<d.i.length&&oa(d)}else ue[0]!="stop"&&ue[0]!="close"||Ar(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Ar(d,7):zu(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}di(4)}catch{}}var BE=class{constructor(a,c){this.g=a,this.map=c}};function up(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hp(a){return a.h?1:a.g?a.g.size:0}function Fu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Uu(a,c){a.g?a.g.add(c):a.h=c}function dp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}up.prototype.cancel=function(){if(this.i=fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function zE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function $E(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function pp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=$E(a),m=zE(a),R=m.length,b=0;b<R;b++)c.call(void 0,m[b],d&&d[b],a)}var mp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),R=null;if(0<=m){var b=a[d].substring(0,m);R=a[d].substring(m+1)}else b=a[d];c(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,Zo(this,a.j),this.o=a.o,this.g=a.g,ea(this,a.s),this.l=a.l;var c=a.i,d=new vi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),gp(this,d),this.m=a.m}else a&&(c=String(a).match(mp))?(this.h=!1,Zo(this,c[1]||"",!0),this.o=gi(c[2]||""),this.g=gi(c[3]||"",!0),ea(this,c[4]),this.l=gi(c[5]||"",!0),gp(this,c[6]||"",!0),this.m=gi(c[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}xr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(yi(c,yp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(yi(c,yp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(yi(d,d.charAt(0)=="/"?KE:qE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",yi(d,GE)),a.join("")};function En(a){return new xr(a)}function Zo(a,c,d){a.j=d?gi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ea(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function gp(a,c,d){c instanceof vi?(a.i=c,YE(a.i,a.h)):(d||(c=yi(c,QE)),a.i=new vi(c,a.h))}function we(a,c,d){a.i.set(c,d)}function ta(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,HE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yp=/[#\/\?@]/g,qE=/[#\?:]/g,KE=/[#\?]/g,QE=/[#\?@]/g,GE=/#/g;function vi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&WE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=vi.prototype,t.add=function(a,c){Wn(this),this.i=null,a=os(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function vp(a,c){Wn(a),c=os(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function _p(a,c){return Wn(a),c=os(a,c),a.g.has(c)}t.forEach=function(a,c){Wn(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(c,R,m,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const R=a[m];for(let b=0;b<R.length;b++)d.push(c[m])}return d},t.V=function(a){Wn(this);let c=[];if(typeof a=="string")_p(this,a)&&(c=c.concat(this.g.get(os(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Wn(this),this.i=null,a=os(this,a),_p(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function wp(a,c,d){vp(a,c),0<d.length&&(a.i=null,a.g.set(os(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const b=encodeURIComponent(String(m)),B=this.V(m);for(m=0;m<B.length;m++){var R=b;B[m]!==""&&(R+="="+encodeURIComponent(String(B[m]))),a.push(R)}}return this.i=a.join("&")};function os(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function YE(a,c){c&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(d,m){var R=m.toLowerCase();m!=R&&(vp(this,m),wp(this,R,d))},a)),a.j=c}function XE(a,c){const d=new pi;if(l.Image){const m=new Image;m.onload=k(Hn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=k(Hn,d,"TestLoadImage: error",!1,c,m),m.onabort=k(Hn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=k(Hn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function JE(a,c){const d=new pi,m=new AbortController,R=setTimeout(()=>{m.abort(),Hn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(b=>{clearTimeout(R),b.ok?Hn(d,"TestPingServer: ok",!0,c):Hn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Hn(d,"TestPingServer: error",!1,c)})}function Hn(a,c,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function ZE(){this.g=new VE}function eT(a,c,d){const m=d||"";try{pp(a,function(R,b){let B=R;h(R)&&(B=Pu(R)),c.push(m+b+"="+encodeURIComponent(B))})}catch(R){throw c.push(m+"type="+encodeURIComponent("_badmap")),R}}function na(a){this.l=a.Ub||null,this.j=a.eb||!1}P(na,Nu),na.prototype.g=function(){return new ra(this.l,this.j)},na.prototype.i=function(a){return function(){return a}}({});function ra(a,c){et.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ra,et),t=ra.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,wi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ep(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ep(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?_i(this):wi(this),this.readyState==3&&Ep(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,_i(this))},t.Qa=function(a){this.g&&(this.response=a,_i(this))},t.ga=function(){this.g&&_i(this)};function _i(a){a.readyState=4,a.l=null,a.j=null,a.v=null,wi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tp(a){let c="";return j(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Bu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Tp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):we(a,c,d))}function Re(a){et.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Re,et);var tT=/^https?$/i,nT=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ou.g(),this.v=this.o?Xf(this.o):Xf(Ou),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Ip(this,b);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())d.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(nT,c,void 0))||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,B]of d)this.g.setRequestHeader(b,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ap(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Ip(this,b)}};function Ip(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Sp(a),sa(a)}function Sp(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,dt(this,"complete"),dt(this,"abort"),sa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sa(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xp(this):this.bb())},t.bb=function(){xp(this)};function xp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)Kf(a.Ea,0,a);else if(dt(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=B===0){var R=String(a.D).match(mp)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),m=!tT.test(R?R.toLowerCase():"")}d=m}if(d)dt(a,"complete"),dt(a,"success");else{a.m=6;try{var b=2<Tn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",Sp(a)}}finally{sa(a)}}}}function sa(a,c){if(a.g){Ap(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||dt(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ap(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),OE(c)}};function kp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function rT(a){const c={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=A(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[R]||[];c[R]=b,b.push(d)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Cp(a){this.Aa=0,this.i=[],this.j=new pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,a),this.cb=Ei("retryDelaySeedMs",1e4,a),this.Wa=Ei("forwardChannelMaxRetries",2,a),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new up(a&&a.concurrentRequestLimit),this.Da=new ZE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){ft(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Lp(this,null,this.W),oa(this)};function zu(a){if(Rp(a),a.G==3){var c=a.U++,d=En(a.I);if(we(d,"SID",a.K),we(d,"RID",c),we(d,"TYPE","terminate"),Ti(a,d),c=new $n(a,a.j,c),c.L=2,c.v=ta(En(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=jp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jo(c)}Mp(a)}function ia(a){a.g&&(Wu(a),a.g.cancel(),a.g=null)}function Rp(a){ia(a),a.u&&(l.clearTimeout(a.u),a.u=null),aa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function oa(a){if(!cp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Be||q(),U||(Be(),U=!0),H.add(c,a),a.B=0}}function sT(a,c){return hp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fi(w(a.Ga,a,c),Vp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new $n(this,this.j,a);let b=this.o;if(this.S&&(b?(b=y(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(R.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Np(this,R,c),d=En(this.I),we(d,"RID",a),we(d,"CVER",22),this.D&&we(d,"X-HTTP-Session-Id",this.D),Ti(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(Tp(b)))+"&"+c:this.m&&Bu(d,this.m,b)),Uu(this.h,R),this.Ua&&we(d,"TYPE","init"),this.P?(we(d,"$req",c),we(d,"SID","null"),R.T=!0,Mu(R,d,null)):Mu(R,d,c),this.G=2}}else this.G==3&&(a?Pp(this,a):this.i.length==0||cp(this.h)||Pp(this))};function Pp(a,c){var d;c?d=c.l:d=a.U++;const m=En(a.I);we(m,"SID",a.K),we(m,"RID",d),we(m,"AID",a.T),Ti(a,m),a.m&&a.o&&Bu(m,a.m,a.o),d=new $n(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Np(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Uu(a.h,d),Mu(d,m,c)}function Ti(a,c){a.H&&j(a.H,function(d,m){we(c,m,d)}),a.l&&pp({},function(d,m){we(c,m,d)})}function Np(a,c,d){d=Math.min(a.i.length,d);var m=a.l?w(a.l.Na,a.l,a):null;e:{var R=a.i;let b=-1;for(;;){const B=["count="+d];b==-1?0<d?(b=R[0].g,B.push("ofs="+b)):b=0:B.push("ofs="+b);let ye=!0;for(let qe=0;qe<d;qe++){let ue=R[qe].g;const tt=R[qe].map;if(ue-=b,0>ue)b=Math.max(0,R[qe].g-100),ye=!1;else try{eT(tt,B,"req"+ue+"_")}catch{m&&m(tt)}}if(ye){m=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function bp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Be||q(),U||(Be(),U=!0),H.add(c,a),a.v=0}}function $u(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fi(w(a.Fa,a),Vp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Dp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fi(w(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),ia(this),Dp(this))};function Wu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Dp(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=En(a.qa);we(c,"RID","rpc"),we(c,"SID",a.K),we(c,"AID",a.T),we(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(c,"TO",a.ja),we(c,"TYPE","xmlhttp"),Ti(a,c),a.m&&a.o&&Bu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ta(En(c)),d.m=null,d.P=!0,op(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ia(this),$u(this),ft(19))};function aa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Op(a,c){var d=null;if(a.g==c){aa(a),Wu(a),a.g=null;var m=2}else if(Fu(a.h,c))d=c.D,dp(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=a.B;m=Go(),dt(m,new np(m,d)),oa(a)}else bp(a);else if(R=c.s,R==3||R==0&&0<c.X||!(m==1&&sT(a,c)||m==2&&$u(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Ar(a,5);break;case 4:Ar(a,10);break;case 3:Ar(a,6);break;default:Ar(a,2)}}}function Vp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Ar(a,c){if(a.j.info("Error code "+c),c==2){var d=w(a.fb,a),m=a.Xa;const R=!m;m=new xr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zo(m,"https"),ta(m),R?XE(m.toString(),d):JE(m.toString(),d)}else ft(2);a.G=0,a.l&&a.l.sa(c),Mp(a),Rp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Mp(a){if(a.G=0,a.ka=[],a.l){const c=fp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Lp(a,c,d){var m=d instanceof xr?En(d):new xr(d);if(m.g!="")c&&(m.g=c+"."+m.g),ea(m,m.s);else{var R=l.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var b=new xr(null);m&&Zo(b,m),c&&(b.g=c),R&&ea(b,R),d&&(b.l=d),m=b}return d=a.D,c=a.ya,d&&c&&we(m,d,c),we(m,"VER",a.la),Ti(a,m),m}function jp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Re(new na({eb:d})):new Re(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fp(){}t=Fp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function la(){}la.prototype.g=function(a,c){return new Rt(a,c)};function Rt(a,c){et.call(this),this.g=new Cp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!T(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new as(this)}P(Rt,et),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){zu(this.g)},Rt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Pu(a),a=d);c.i.push(new BE(c.Ya++,a)),c.G==3&&oa(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,zu(this.g),delete this.g,Rt.aa.N.call(this)};function Up(a){bu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Up,bu);function Bp(){Du.call(this),this.status=1}P(Bp,Du);function as(a){this.g=a}P(as,Fp),as.prototype.ua=function(){dt(this.g,"a")},as.prototype.ta=function(a){dt(this.g,new Up(a))},as.prototype.sa=function(a){dt(this.g,new Bp)},as.prototype.ra=function(){dt(this.g,"b")},la.prototype.createWebChannel=la.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,f0=function(){return new la},d0=function(){return Go()},h0=Ir,Mh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,qa=Yo,rp.COMPLETE="complete",c0=rp,Jf.EventType=hi,hi.OPEN="a",hi.CLOSE="b",hi.ERROR="c",hi.MESSAGE="d",et.prototype.listen=et.prototype.K,Li=Jf,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,u0=Re}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});const yg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new uu("@firebase/firestore");function bi(){return Hr.logLevel}function $(t,...e){if(Hr.logLevel<=ie.DEBUG){const n=e.map(Jd);Hr.debug(`Firestore (${ri}): ${t}`,...n)}}function jn(t,...e){if(Hr.logLevel<=ie.ERROR){const n=e.map(Jd);Hr.error(`Firestore (${ri}): ${t}`,...n)}}function Hs(t,...e){if(Hr.logLevel<=ie.WARN){const n=e.map(Jd);Hr.warn(`Firestore (${ri}): ${t}`,...n)}}function Jd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function fe(t,e){t||Y()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class IA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new p0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ot(e)}}class xA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new kA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=RA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ue(0,0))}static max(){return new J(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return To.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof To?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends To{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const PA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends To{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return PA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(be.fromString(e))}static fromName(e){return new Q(be.fromString(e).popFirst(5))}static empty(){return new Q(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new be(e.slice()))}}function NA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new yr(s,Q.empty(),e)}function bA(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(J.min(),Q.empty(),-1)}static max(){return new yr(J.max(),Q.empty(),-1)}}function DA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==OA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function MA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zd.oe=-1;function cu(t){return t==null}function Cl(t){return t===0&&1/t==-1/0}function LA(t){return typeof t=="number"&&Number.isInteger(t)&&!Cl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function g0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _g(this.data.getIterator())}getIteratorFrom(e){return new _g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class _g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new Xe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new y0("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const jA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=jA.exec(t);if(fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tf(t){const e=t.mapValue.fields.__previous_value__;return ef(e)?tf(e):e}function Io(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class So{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new So("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={mapValue:{}};function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ef(t)?4:BA(t)?9007199254740991:UA(t)?10:11:Y()}function vn(t,e){if(t===e)return!0;const n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vr(s.timestampValue),l=vr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return qr(s.bytesValue).isEqual(qr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),l=De(i.doubleValue);return o===l?Cl(o)===Cl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(vg(o)!==vg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!vn(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function xo(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=Kr(t),r=Kr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=De(i.integerValue||i.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return wg(t.timestampValue,e.timestampValue);case 4:return wg(Io(t),Io(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=qr(i),u=qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ce(l[h],u[h]);if(f!==0)return f}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ce(De(i.latitude),De(o.latitude));return l!==0?l:ce(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Eg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,f;const g=i.fields||{},w=o.fields||{},k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(u=w.value)===null||u===void 0?void 0:u.arrayValue,N=ce(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Eg(k,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ra.mapValue&&o===Ra.mapValue)return 0;if(i===Ra.mapValue)return 1;if(o===Ra.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const w=ce(u[g],f[g]);if(w!==0)return w;const k=Ks(l[u[g]],h[f[g]]);if(k!==0)return k}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y()}}function wg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=vr(t),r=vr(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Eg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ks(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function Qs(t){return Lh(t)}function Lh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Lh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Lh(n.fields[o])}`;return s+"}"}(t.mapValue):Y()}function jh(t){return!!t&&"integerValue"in t}function nf(t){return!!t&&"arrayValue"in t}function Tg(t){return!!t&&"nullValue"in t}function Ig(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function UA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Yi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ka(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){si(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Bt(Yi(this.value))}}function v0(t){const e=[];return si(t.fields,(n,r)=>{const s=new Ge([n]);if(Ka(r)){const i=v0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,J.min(),J.min(),J.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,J.min(),J.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,J.min(),J.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.position=e,this.inclusive=n}}function Sg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Ks(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function zA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{}class je extends _0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WA(e,n,r):n==="array-contains"?new KA(e,r):n==="in"?new QA(e,r):n==="not-in"?new GA(e,r):n==="array-contains-any"?new YA(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HA(e,r):new qA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ks(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends _0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new _n(e,n)}matches(e){return w0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function w0(t){return t.op==="and"}function E0(t){return $A(t)&&w0(t)}function $A(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function Fh(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(E0(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function T0(t,e){return t instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof _n?function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&T0(o,s.filters[l]),!0):!1}(t,e):void Y()}function I0(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(I0).join(" ,")+"}"}(t):"Filter"}class WA extends je{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class HA extends je{constructor(e,n){super(e,"in",n),this.keys=S0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qA extends je{constructor(e,n){super(e,"not-in",n),this.keys=S0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function S0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class KA extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nf(n)&&xo(n.arrayValue,this.value)}}class QA extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xo(this.value.arrayValue,n)}}class GA extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xo(this.value.arrayValue,n)}}class YA extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ag(t,e=null,n=[],r=[],s=null,i=null,o=null){return new XA(t,e,n,r,s,i,o)}function rf(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.ue=n}return e.ue}function sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!T0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xg(t.startAt,e.startAt)&&xg(t.endAt,e.endAt)}function Uh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function JA(t,e,n,r,s,i,o,l){return new hu(t,e,n,r,s,i,o,l)}function of(t){return new hu(t)}function kg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ZA(t){return t.collectionGroup!==null}function Xi(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xe(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Pl(i,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Pl(Ge.keyField(),r))}return e.ce}function fn(t){const e=Z(t);return e.le||(e.le=ek(e,Xi(t))),e.le}function ek(t,e){if(t.limitType==="F")return Ag(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pl(s.field,i)});const n=t.endAt?new Rl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rl(t.startAt.position,t.startAt.inclusive):null;return Ag(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bh(t,e,n){return new hu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function du(t,e){return sf(fn(t),fn(e))&&t.limitType===e.limitType}function x0(t){return`${rf(fn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>I0(s)).join(", ")}]`),cu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function fu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Sg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Xi(r),s)||r.endAt&&!function(o,l,u){const h=Sg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Xi(r),s))}(t,e)}function tk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function A0(t){return(e,n)=>{let r=!1;for(const s of Xi(t)){const i=nk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nk(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Ks(u,h):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return g0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new Ce(Q.comparator);function Fn(){return rk}const k0=new Ce(Q.comparator);function ji(...t){let e=k0;for(const n of t)e=e.insert(n.key,n);return e}function C0(t){let e=k0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Ji()}function R0(){return Ji()}function Ji(){return new ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const sk=new Ce(Q.comparator),ik=new Xe(Q.comparator);function re(...t){let e=ik;for(const n of t)e=e.add(n);return e}const ok=new Xe(ce);function ak(){return ok}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cl(e)?"-0":e}}function P0(t){return{integerValue:""+t}}function lk(t,e){return LA(e)?P0(e):af(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this._=void 0}}function uk(t,e,n){return t instanceof Nl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ef(i)&&(i=tf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ao?b0(t,e):t instanceof ko?D0(t,e):function(s,i){const o=N0(s,i),l=Cg(o)+Cg(s.Pe);return jh(o)&&jh(s.Pe)?P0(l):af(s.serializer,l)}(t,e)}function ck(t,e,n){return t instanceof Ao?b0(t,e):t instanceof ko?D0(t,e):n}function N0(t,e){return t instanceof bl?function(r){return jh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Nl extends pu{}class Ao extends pu{constructor(e){super(),this.elements=e}}function b0(t,e){const n=O0(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends pu{constructor(e){super(),this.elements=e}}function D0(t,e){let n=O0(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class bl extends pu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Cg(t){return De(t.integerValue||t.doubleValue)}function O0(t){return nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ao&&s instanceof Ao||r instanceof ko&&s instanceof ko?qs(r.elements,s.elements,vn):r instanceof bl&&s instanceof bl?vn(r.Pe,s.Pe):r instanceof Nl&&s instanceof Nl}(t.transform,e.transform)}class dk{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mu{}function V0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new L0(t.key,bn.none()):new Fo(t.key,t.data,bn.none());{const n=t.data,r=Bt.empty();let s=new Xe(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ns(t.key,r,new Zt(s.toArray()),bn.none())}}function fk(t,e,n){t instanceof Fo?function(s,i,o){const l=s.value.clone(),u=Pg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ns?function(s,i,o){if(!Qa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Pg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(M0(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,r){return t instanceof Fo?function(i,o,l,u){if(!Qa(i.precondition,o))return l;const h=i.value.clone(),f=Ng(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ns?function(i,o,l,u){if(!Qa(i.precondition,o))return l;const h=Ng(i.fieldTransforms,u,o),f=o.data;return f.setAll(M0(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return Qa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function pk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=N0(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function Rg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,(i,o)=>hk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends mu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ns extends mu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function M0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pg(t,e,n){const r=new Map;fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,ck(o,l,n[s]))}return r}function Ng(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,uk(i,o,e))}return r}class L0 extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mk extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=R0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=V0(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>Rg(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>Rg(n,r))}}class lf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length);let s=function(){return sk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,oe;function _k(t){switch(t){default:return Y();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function j0(t){if(t===void 0)return jn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ve.OK:return M.OK;case Ve.CANCELLED:return M.CANCELLED;case Ve.UNKNOWN:return M.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return M.INTERNAL;case Ve.UNAVAILABLE:return M.UNAVAILABLE;case Ve.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ve.NOT_FOUND:return M.NOT_FOUND;case Ve.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ve.ABORTED:return M.ABORTED;case Ve.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ve.DATA_LOSS:return M.DATA_LOSS;default:return Y()}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new jr([4294967295,4294967295],0);function bg(t){const e=wk().encode(t),n=new l0;return n.update(e),new Uint8Array(n.digest())}function Dg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class uf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fi(`Invalid padding: ${n}`);if(r<0)throw new Fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=jr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(Ek)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=bg(e),[r,s]=Dg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new uf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=bg(e),[r,s]=Dg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gu(J.min(),s,new Ce(ce),Fn(),re())}}class Uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class F0{constructor(e,n){this.targetId=e,this.me=n}}class U0{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Og{constructor(){this.fe=0,this.ge=Mg(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new Uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Tk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=Vg(),this.Qe=new Ce(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Uh(i))if(r===0){const o=new Q(i.path);this.Ue(n,o,lt.newNoDocument(o,J.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=qr(r).toUint8Array()}catch(u){if(u instanceof y0)return Hs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new uf(o,s,i)}catch(u){return Hs(u instanceof Fi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Uh(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,lt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=re();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new gu(e,n,this.Qe,this.ke,r);return this.ke=Fn(),this.qe=Vg(),this.Qe=new Ce(ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Og,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Og),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Vg(){return new Ce(Q.comparator)}function Mg(){return new Ce(Q.comparator)}const Ik={asc:"ASCENDING",desc:"DESCENDING"},Sk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xk={and:"AND",or:"OR"};class Ak{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zh(t,e){return t.useProto3Json||cu(e)?e:{value:e}}function Dl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function B0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kk(t,e){return Dl(t,e.toTimestamp())}function pn(t){return fe(!!t),J.fromTimestamp(function(n){const r=vr(n);return new Ue(r.seconds,r.nanos)}(t))}function cf(t,e){return $h(t,e).canonicalString()}function $h(t,e){const n=function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function z0(t){const e=be.fromString(t);return fe(K0(e)),e}function Wh(t,e){return cf(t.databaseId,e.path)}function xc(t,e){const n=z0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(W0(n))}function $0(t,e){return cf(t.databaseId,e)}function Ck(t){const e=z0(t);return e.length===4?be.emptyPath():W0(e)}function Hh(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function W0(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lg(t,e,n){return{name:Wh(t,e),fields:n.value.mapValue.fields}}function Rk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:j0(h.code);return new K(f,h.message||"")}(o);n=new U0(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xc(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):J.min(),l=new Bt({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ga(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xc(t,r.document),i=r.readTime?pn(r.readTime):J.min(),o=lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ga([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xc(t,r.document),i=r.removedTargetIds||[];n=new Ga([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new vk(s,i),l=r.targetId;n=new F0(l,o)}}return n}function Pk(t,e){let n;if(e instanceof Fo)n={update:Lg(t,e.key,e.value)};else if(e instanceof L0)n={delete:Wh(t,e.key)};else if(e instanceof ns)n={update:Lg(t,e.key,e.data),updateMask:Fk(e.fieldMask)};else{if(!(e instanceof mk))return Y();n={verify:Wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function Nk(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(J.min())&&(o=pn(i)),new dk(o,s.transformResults||[])}(n,e))):[]}function bk(t,e){return{documents:[$0(t,e.path)]}}function Dk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$0(t,s);const i=function(h){if(h.length!==0)return q0(_n.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(w){return{field:fs(w.field),direction:Mk(w.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=zh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function Ok(t){let e=Ck(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const w=H0(g);return w instanceof _n&&E0(w)?w.getFilters():[w]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(w=>function(P){return new Pl(ps(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(n.orderBy));let l=null;n.limit&&(l=function(g){let w;return w=typeof g=="object"?g.value:g,cu(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(g){const w=!!g.before,k=g.values||[];return new Rl(k,w)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const w=!g.before,k=g.values||[];return new Rl(k,w)}(n.endAt)),JA(e,s,o,i,l,"F",u,h)}function Vk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function H0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return je.create(ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>H0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function Mk(t){return Ik[t]}function Lk(t){return Sk[t]}function jk(t){return xk[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return Ge.fromServerFormat(t.fieldPath)}function q0(t){return t instanceof je?function(n){if(n.op==="=="){if(Ig(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(Tg(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ig(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(Tg(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:Lk(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(s=>q0(s));return r.length===1?r[0]:{compositeFilter:{op:jk(n.op),filters:r}}}(t):Y()}function Fk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function K0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.ct=e}}function Bk(t){const e=Ok({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.un=new $k}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(yr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class $k{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gs(0)}static kn(){return new Gs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.changes=new ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zi(r.mutation,s,Zt.empty(),Ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=Dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ji();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Fn();const o=Ji(),l=function(){return Ji()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ns)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Zi(f.mutation,h,f.mutation.getFieldMask(),Ue.now())):o.set(h.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new Hk(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ji();let s=new Ce((o,l)=>o-l),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Zt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(s.get(l.batchId)||re()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=R0();f.forEach(w=>{if(!i.has(w)){const k=V0(n.get(w),r.get(w));k!==null&&g.set(w,k),i=i.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ZA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(Dr());let l=-1,u=i;return o.next(h=>V.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:C0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=ji();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ji();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const h=function(g,w){return new hu(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,w)=>{o=o.insert(g,w)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))});let l=ji();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Zi(f.mutation,h,Zt.empty(),Ue.now()),fu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Bk(s.bundledQuery),readTime:pn(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.overlays=new Ce(Q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=Dr(),i=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Dr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Dr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return V.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yk(n,r));let i=this.Ir.get(n);i===void 0&&(i=re(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.Tr=new Xe(ze.Er),this.dr=new Xe(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new be([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new be([])),r=new ze(n,e),s=new ze(n,e+1);let i=re();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(ze.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(ce);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Q(i),0);let l=new Xe(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.Mr=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||DA(bA(f),r)<=0||(s.has(f.key)||fu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jk(this)}getSize(e){return V.resolve(this.size)}}class Jk extends Wk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.persistence=e,this.Nr=new ii(n=>rf(n),sf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hf,this.targetCount=0,this.kr=Gs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Zd(0),this.Kr=!1,this.Kr=!0,this.$r=new Gk,this.referenceDelegate=e(this),this.Ur=new Zk(this),this.indexManager=new zk,this.remoteDocumentCache=function(s){return new Xk(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Uk(n),this.Gr=new Kk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Yk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new tC(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class tC extends VA{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Jr=new hf,this.Yr=null}static Zr(e){return new df(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=Q.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ff(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tx()?8:MA(ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new nC;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(bi()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(bi()<=ie.DEBUG&&$("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(bi()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):V.resolve())}Yi(e,n){if(kg(n))return V.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bh(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Bh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return kg(n)||s.isEqual(J.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?V.resolve(null):(bi()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.rs(e,o,n,NA(s,-1)).next(l=>l))})}ts(e,n){let r=new Xe(A0(e));return n.forEach((s,i)=>{fu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return bi()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ds(n)),this.Ji.getDocumentsMatchingQuery(e,n,yr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ce(ce),this._s=new ii(i=>rf(i),sf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function iC(t,e,n,r){return new sC(t,e,n,r)}async function Q0(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=re();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function oC(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,w=g.keys();let k=V.resolve();return w.forEach(P=>{k=k.next(()=>f.getEntry(u,P)).next(N=>{const O=h.docVersions.get(P);fe(O!==null),N.version.compareTo(O)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function G0(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function aC(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const w=s.get(g);if(!w)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,g)));let k=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Ze.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(g,k),function(N,O,S){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(w,k,f)&&l.push(n.Ur.updateTargetData(i,k))});let u=Fn(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(lC(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function lC(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Fn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function uC(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cC(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function qh(t,e,n){const r=Z(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!jo(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function jg(t,e,n){const r=Z(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=Z(u),w=g._s.get(f);return w!==void 0?V.resolve(g.os.get(w)):g.Ur.getTargetData(h,f)}(r,o,fn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(l=>(hC(r,tk(e),l),{documents:l,Ts:i})))}function hC(t,e,n){let r=t.us.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Fg{constructor(){this.activeTargetIds=ak()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dC{constructor(){this.so=new Fg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa=null;function Ac(){return Pa===null?Pa=function(){return 268435456+Math.round(2147483648*Math.random())}():Pa++,"0x"+Pa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class gC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Ac(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>($("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Hs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ri}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=pC[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ac();return new Promise((o,l)=>{const u=new u0;u.setWithCredentials(!0),u.listenOnce(c0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case qa.NO_ERROR:const f=u.getResponseJson();$(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case qa.TIMEOUT:$(it,`RPC '${e}' ${i} timed out`),l(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const g=u.getStatus();if($(it,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const P=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(k.status);l(new K(P,k.message))}else l(new K(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(M.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);$(it,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Ac(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=f0(),l=d0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");$(it,`Creating RPC '${e}' stream ${s}: ${f}`,u);const g=o.createWebChannel(f,u);let w=!1,k=!1;const P=new mC({Io:O=>{k?$(it,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(w||($(it,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),$(it,`RPC '${e}' stream ${s} sending:`,O),g.send(O))},To:()=>g.close()}),N=(O,S,T)=>{O.listen(S,x=>{try{T(x)}catch(D){setTimeout(()=>{throw D},0)}})};return N(g,Li.EventType.OPEN,()=>{k||($(it,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),N(g,Li.EventType.CLOSE,()=>{k||(k=!0,$(it,`RPC '${e}' stream ${s} transport closed`),P.So())}),N(g,Li.EventType.ERROR,O=>{k||(k=!0,Hs(it,`RPC '${e}' stream ${s} transport errored:`,O),P.So(new K(M.UNAVAILABLE,"The operation could not be completed")))}),N(g,Li.EventType.MESSAGE,O=>{var S;if(!k){const T=O.data[0];fe(!!T);const x=T,D=x.error||((S=x[0])===null||S===void 0?void 0:S.error);if(D){$(it,`RPC '${e}' stream ${s} received error:`,D);const F=D.status;let j=function(_){const v=Ve[_];if(v!==void 0)return j0(v)}(F),E=D.message;j===void 0&&(j=M.INTERNAL,E="Unknown error status: "+F+" with message "+D.message),k=!0,P.So(new K(j,E)),g.close()}else $(it,`RPC '${e}' stream ${s} received:`,T),P.bo(T)}}),N(l,h0.STAT_EVENT,O=>{O.stat===Mh.PROXY?$(it,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Mh.NOPROXY&&$(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t){return new Ak(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Y0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new K(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yC extends X0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Rk(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?pn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Hh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Uh(u)?{documents:bk(i,u)}:{query:Dk(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=B0(i,o.resumeToken);const h=zh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Dl(i,o.snapshotVersion.toTimestamp());const h=zh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Vk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Hh(this.serializer),n.removeTarget=e,this.a_(n)}}class vC extends X0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Nk(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Hh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Pk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,$h(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,$h(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class wC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jn(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{rs(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await Bo(h),h.q_.set("Unknown"),h.L_.delete(4),await vu(h)}(this))})}),this.q_=new wC(r,s)}}async function vu(t){if(rs(t))for(const e of t.B_)await e(!0)}async function Bo(t){for(const e of t.B_)await e(!1)}function J0(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),yf(n)?gf(n):oi(n).r_()&&mf(n,e))}function pf(t,e){const n=Z(t),r=oi(n);n.N_.delete(e),r.r_()&&Z0(n,e),n.N_.size===0&&(r.r_()?r.o_():rs(n)&&n.q_.set("Unknown"))}function mf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oi(t).A_(e)}function Z0(t,e){t.Q_.xe(e),oi(t).R_(e)}function gf(t){t.Q_=new Tk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),oi(t).start(),t.q_.v_()}function yf(t){return rs(t)&&!oi(t).n_()&&t.N_.size>0}function rs(t){return Z(t).L_.size===0}function ew(t){t.Q_=void 0}async function TC(t){t.q_.set("Online")}async function IC(t){t.N_.forEach((e,n)=>{mf(t,e)})}async function SC(t,e){ew(t),yf(t)?(t.q_.M_(e),gf(t)):t.q_.set("Unknown")}async function xC(t,e,n){if(t.q_.set("Online"),e instanceof U0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ol(t,r)}else if(e instanceof Ga?t.Q_.Ke(e):e instanceof F0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await G0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),Z0(i,u);const g=new rr(f.target,u,h,f.sequenceNumber);mf(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Ol(t,r)}}async function Ol(t,e,n){if(!jo(e))throw e;t.L_.add(1),await Bo(t),t.q_.set("Offline"),n||(n=()=>G0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vu(t)})}function tw(t,e){return e().catch(n=>Ol(t,n,e))}async function _u(t){const e=Z(t),n=_r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;AC(e);)try{const s=await uC(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,kC(e,s)}catch(s){await Ol(e,s)}nw(e)&&rw(e)}function AC(t){return rs(t)&&t.O_.length<10}function kC(t,e){t.O_.push(e);const n=_r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function nw(t){return rs(t)&&!_r(t).n_()&&t.O_.length>0}function rw(t){_r(t).start()}async function CC(t){_r(t).p_()}async function RC(t){const e=_r(t);for(const n of t.O_)e.m_(n.mutations)}async function PC(t,e,n){const r=t.O_.shift(),s=lf.from(r,e,n);await tw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _u(t)}async function NC(t,e){e&&_r(t).V_&&await async function(r,s){if(function(o){return _k(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();_r(r).s_(),await tw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _u(r)}}(t,e),nw(t)&&rw(t)}async function Bg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=rs(n);n.L_.add(3),await Bo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vu(n)}async function bC(t,e){const n=Z(t);e?(n.L_.delete(2),await vu(n)):e||(n.L_.add(2),await Bo(n),n.q_.set("Unknown"))}function oi(t){return t.K_||(t.K_=function(n,r,s){const i=Z(n);return i.w_(),new yC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:TC.bind(null,t),Ro:IC.bind(null,t),mo:SC.bind(null,t),d_:xC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),yf(t)?gf(t):t.q_.set("Unknown")):(await t.K_.stop(),ew(t))})),t.K_}function _r(t){return t.U_||(t.U_=function(n,r,s){const i=Z(n);return i.w_(),new vC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:CC.bind(null,t),mo:NC.bind(null,t),f_:RC.bind(null,t),g_:PC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await _u(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new vf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(t,e){if(jn("AsyncQueue",`${e}: ${t}`),jo(t))return new K(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ji(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.W_=new Ce(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ys(e,n,Ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class OC{constructor(){this.queries=$g(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=$g(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(M.ABORTED,"Firestore shutting down"))}}function $g(){return new ii(t=>x0(t),du)}async function VC(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new DC,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=_f(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&wf(n)}async function MC(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LC(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&wf(n)}function jC(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function wf(t){t.Y_.forEach(e=>{e.next()})}var Kh,Wg;(Wg=Kh||(Kh={})).ea="default",Wg.Cache="cache";class FC{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Kh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.key=e}}class iw{constructor(e){this.key=e}}class UC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=A0(e),this.Ra=new Ds(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new zg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const w=s.get(f),k=fu(this.query,g)?g:null,P=!!w&&this.mutatedKeys.has(w.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;w&&k?w.data.isEqual(k.data)?P!==N&&(r.track({type:3,doc:k}),O=!0):this.ga(w,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Aa(k,u)>0||h&&this.Aa(k,h)<0)&&(l=!0)):!w&&k?(r.track({type:0,doc:k}),O=!0):w&&!k&&(r.track({type:1,doc:w}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(k,P){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return N(k)-N(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Ys(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new zg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new iw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sw(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ys.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class BC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zC{constructor(e){this.key=e,this.va=!1}}class $C{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ii(l=>x0(l),du),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(Q.comparator),this.Na=new Map,this.La=new hf,this.Ba={},this.ka=new Map,this.qa=Gs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WC(t,e,n=!0){const r=hw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ow(r,e,n,!0),s}async function HC(t,e){const n=hw(t);await ow(n,e,!0,!1)}async function ow(t,e,n,r){const s=await cC(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await qC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&J0(t.remoteStore,s),l}async function qC(t,e,n,r,s){t.Ka=(g,w,k)=>async function(N,O,S,T){let x=O.view.ma(S);x.ns&&(x=await jg(N.localStore,O.query,!1).then(({documents:E})=>O.view.ma(E,x)));const D=T&&T.targetChanges.get(O.targetId),F=T&&T.targetMismatches.get(O.targetId)!=null,j=O.view.applyChanges(x,N.isPrimaryClient,D,F);return qg(N,O.targetId,j.wa),j.snapshot}(t,g,w,k);const i=await jg(t.localStore,e,!0),o=new UC(e,i.Ts),l=o.ma(i.documents),u=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);qg(t,n,h.wa);const f=new BC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function KC(t,e,n){const r=Z(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!du(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pf(r.remoteStore,s.targetId),Qh(r,s.targetId)}).catch(Lo)):(Qh(r,s.targetId),await qh(r.localStore,s.targetId,!0))}async function QC(t,e){const n=Z(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pf(n.remoteStore,r.targetId))}async function GC(t,e,n){const r=nR(t);try{const s=await function(o,l){const u=Z(o),h=Ue.now(),f=l.reduce((k,P)=>k.add(P.key),re());let g,w;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=Fn(),N=re();return u.cs.getEntries(k,f).next(O=>{P=O,P.forEach((S,T)=>{T.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(O=>{g=O;const S=[];for(const T of l){const x=pk(T,g.get(T.key).overlayedDocument);x!=null&&S.push(new ns(T.key,x,v0(x.value.mapValue),bn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,S,l)}).next(O=>{w=O;const S=O.applyToLocalDocumentSet(g,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,S)})}).then(()=>({batchId:w.batchId,changes:C0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ce(ce)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await zo(r,s.changes),await _u(r.remoteStore)}catch(s){const i=_f(s,"Failed to persist write");n.reject(i)}}async function aw(t,e){const n=Z(t);try{const r=await aC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?fe(o.va):s.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await zo(n,r,e)}catch(r){await Lo(r)}}function Hg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const w of g.j_)w.Z_(l)&&(h=!0)}),h&&wf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YC(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ce(Q.comparator);o=o.insert(i,lt.newNoDocument(i,J.min()));const l=re().add(i),u=new gu(J.min(),new Map,new Ce(ce),o,l);await aw(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ef(r)}else await qh(r.localStore,e,!1).then(()=>Qh(r,e,n)).catch(Lo)}async function XC(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await oC(n.localStore,e);uw(n,r,null),lw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,s)}catch(s){await Lo(s)}}async function JC(t,e,n){const r=Z(t);try{const s=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(fe(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);uw(r,e,n),lw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,s)}catch(s){await Lo(s)}}function lw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function uw(t,e,n){const r=Z(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||cw(t,r)})}function cw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(pf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ef(t))}function qg(t,e,n){for(const r of n)r instanceof sw?(t.La.addReference(r.key,e),ZC(t,r)):r instanceof iw?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||cw(t,r.key)):Y()}function ZC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ef(t))}function Ef(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(be.fromString(e)),r=t.qa.next();t.Na.set(r,new zC(n)),t.Oa=t.Oa.insert(n,r),J0(t.remoteStore,new rr(fn(of(n.path)),r,"TargetPurposeLimboResolution",Zd.oe))}}async function zo(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=ff.Wi(u.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(h,w=>V.forEach(w.$i,k=>f.persistence.referenceDelegate.addReference(g,w.targetId,k)).next(()=>V.forEach(w.Ui,k=>f.persistence.referenceDelegate.removeReference(g,w.targetId,k)))))}catch(g){if(!jo(g))throw g;$("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const k=f.os.get(w),P=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(w,N)}}}(r.localStore,i))}async function eR(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Q0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.hs)}}function tR(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let s=re();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function hw(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.Ca.d_=LC.bind(null,e.eventManager),e.Ca.$a=jC.bind(null,e.eventManager),e}function nR(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JC.bind(null,e),e}class Vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return iC(this.persistence,new rC,e.initialUser,this.serializer)}Ga(e){return new eC(df.Zr,this.serializer)}Wa(e){return new dC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vl.provider={build:()=>new Vl};class Gh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eR.bind(null,this.syncEngine),await bC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OC}()}createDatastore(e){const n=yu(e.databaseInfo.databaseId),r=function(i){return new gC(i)}(e.databaseInfo);return function(i,o,l,u){return new _C(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new EC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Hg(this.syncEngine,n,0),function(){return Ug.D()?new Ug:new fC}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const g=new $C(s,i,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);$("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Bo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gh.provider={build:()=>new Gh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=m0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Q0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iR(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bg(e.remoteStore,s)),t._onlineComponents=e}async function iR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hs("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new Vl)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Cc(t,new Vl);return t._offlineComponents}async function dw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Kg(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Kg(t,new Gh))),t._onlineComponents}function oR(t){return dw(t).then(e=>e.syncEngine)}async function Qg(t){const e=await dw(t),n=e.eventManager;return n.onListen=WC.bind(null,e.syncEngine),n.onUnlisten=KC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QC.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t,e,n){if(!n)throw new K(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lR(t,e,n,r){if(e===!0&&r===!0)throw new K(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yg(t){if(!Q.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Os(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(t);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class If{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TA;switch(r.type){case"firstParty":return new AA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gg.get(n);r&&($("ComponentProvider","Removing Datastore"),Gg.delete(n),r.terminate())}(this),Promise.resolve()}}function uR(t,e,n,r={}){var s;const i=(t=Os(t,If))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ot.MOCK_USER;else{l=GS(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(h)}t._authCredentials=new IA(new p0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wu(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Co(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class Co extends wu{constructor(e,n,r){super(e,n,of(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new Q(e))}withConverter(e){return new Co(this.firestore,e,this._path)}}function pw(t,e,...n){if(t=xt(t),arguments.length===1&&(e=m0.newId()),aR("doc","path",e),t instanceof If){const r=be.fromString(e,...n);return Yg(r),new Ht(t,null,new Q(r))}{if(!(t instanceof Ht||t instanceof Co))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Yg(r),new Ht(t.firestore,t instanceof Co?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Y0(this,"async_queue_retry"),this.Vu=()=>{const r=kc();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Fr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!jo(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=vf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Zg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ml extends If{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Jg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jg(e),this._firestoreClient=void 0,await e}}}function cR(t,e){const n=typeof t=="object"?t:Xd(),r=typeof t=="string"?t:"(default)",s=ts(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=KS("firestore");i&&uR(s,...i)}return s}function mw(t){if(t._terminated)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hR(t),t._firestoreClient}function hR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,f){return new FA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,fw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new sR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(Ze.fromBase64String(e))}catch(n){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=/^__.*__$/;class fR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}function yw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class kf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new kf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ll(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(yw(this.Cu)&&dR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class pR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yu(e)}Qu(e,n,r,s=!1){return new kf({Cu:e,methodName:n,qu:r,path:Ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mR(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new pR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gR(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Ew("Data must be an object, but it was:",o,r);const l=_w(r,o);let u,h;if(i.merge)u=new Zt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const w=yR(e,g,n);if(!o.contains(w))throw new K(M.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);_R(f,w)||f.push(w)}u=new Zt(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new fR(new Bt(l),u,h)}function vw(t,e){if(ww(t=xt(t)))return Ew("Unsupported field value:",e,t),_w(t,e);if(t instanceof gw)return function(r,s){if(!yw(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=vw(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Dl(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dl(s.serializer,i)}}if(r instanceof xf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xs)return{bytesValue:B0(s.serializer,r._byteString)};if(r instanceof Ht){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Af)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return af(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Tf(r)}`)}(t,e)}function _w(t,e){const n={};return g0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,s)=>{const i=vw(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ww(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof xf||t instanceof Xs||t instanceof Ht||t instanceof gw||t instanceof Af)}function Ew(t,e,n){if(!ww(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Tf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function yR(t,e,n){if((e=xt(e))instanceof Sf)return e._internalPath;if(typeof e=="string")return Tw(t,e);throw Ll("Field path arguments must be of type string or ",t,!1,void 0,n)}const vR=new RegExp("[~\\*/\\[\\]]");function Tw(t,e,n){if(e.search(vR)>=0)throw Ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sf(...e.split("."))._internalPath}catch{throw Ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ll(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(M.INVALID_ARGUMENT,l+t+u)}function _R(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wR extends Iw{data(){return super.data()}}function Sw(t,e){return typeof e=="string"?Tw(t,e):e instanceof Sf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TR{convertValue(e,n="none"){switch(Kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return si(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>De(o.doubleValue));return new Af(i)}convertGeoPoint(e){return new xf(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const n=vr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);fe(K0(r));const s=new So(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xw extends Iw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ya extends xw{data(e={}){return super.data(e)}}class SR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ui(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ya(this._firestore,this._userDataWriter,r.key,r,new Ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ya(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ui(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ya(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ui(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:xR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class Aw extends TR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function AR(t,e,n){t=Os(t,Ht);const r=Os(t.firestore,Ml),s=IR(t.converter,e);return CR(r,[gR(mR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,bn.none())])}function kR(t,...e){var n,r,s;t=xt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Zg(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Zg(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,h,f;if(t instanceof Ht)h=Os(t.firestore,Ml),f=of(t._key.path),u={next:g=>{e[o]&&e[o](RR(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=Os(t,wu);h=Os(g.firestore,Ml),f=g._query;const w=new Aw(h);u={next:k=>{e[o]&&e[o](new SR(h,w,g,k))},error:e[o+1],complete:e[o+2]},ER(t._query)}return function(w,k,P,N){const O=new rR(N),S=new FC(k,O,P);return w.asyncQueue.enqueueAndForget(async()=>VC(await Qg(w),S)),()=>{O.Za(),w.asyncQueue.enqueueAndForget(async()=>MC(await Qg(w),S))}}(mw(h),f,l,u)}function CR(t,e){return function(r,s){const i=new Fr;return r.asyncQueue.enqueueAndForget(async()=>GC(await oR(r),s,i)),i.promise}(mw(t),e)}function RR(t,e,n){const r=n.docs.get(e._key),s=new Aw(t);return new xw(t,s,e._key,r,new Ui(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ri=s})(ni),yn(new sn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ml(new SA(r.getProvider("auth-internal")),new CA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Wt(yg,"4.7.3",e),Wt(yg,"4.7.3","esm2017")})();function Cf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PR=kw,Cw=new es("auth","Firebase",kw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new uu("@firebase/auth");function NR(t,...e){jl.logLevel<=ie.WARN&&jl.warn(`Auth (${ni}): ${t}`,...e)}function Xa(t,...e){jl.logLevel<=ie.ERROR&&jl.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw Pf(t,...e)}function nn(t,...e){return Pf(t,...e)}function Rf(t,e,n){const r=Object.assign(Object.assign({},PR()),{[e]:n});return new es("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return Rf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),Rf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cw.create(t,...e)}function G(t,e,...n){if(!t)throw Pf(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xa(e),new Error(e)}function Un(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bR(){return ey()==="http:"||ey()==="https:"}function ey(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bR()||Z_()||"connection"in navigator)?navigator.onLine:!0}function OR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=YS()||ZS()}get(){return DR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new $o(3e4,6e4);function bf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ai(t,e,n,r,s={}){return Nw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Mo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return JS()||(h.referrerPolicy="no-referrer"),Pw.fetch()(bw(t,t.config.apiHost,n,l),h)})}async function Nw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VR),e);try{const s=new jR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Na(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Rf(t,f,h);wn(t,f)}}catch(s){if(s instanceof on)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function LR(t,e,n,r,s={}){const i=await ai(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Nf(t.config,s):`${t.config.apiScheme}://${s}`}class jR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),MR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e){return ai(t,"POST","/v1/accounts:delete",e)}async function Dw(t,e){return ai(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UR(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=Df(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:eo(Rc(s.auth_time)),issuedAtTime:eo(Rc(s.iat)),expirationTime:eo(Rc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Rc(t){return Number(t)*1e3}function Df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const s=G_(n);return s?JSON.parse(s):(Xa("Failed to decode base64 JWT payload"),null)}catch(s){return Xa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ty(t){const e=Df(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&BR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ro(t,Dw(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ow(i.providerUserInfo):[],l=WR(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Xh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function $R(t){const e=xt(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ow(t){return t.map(e=>{var{providerId:n}=e,r=Cf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t,e){const n=await Nw(t,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Pw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qR(t,e){return ai(t,"POST","/v2/accounts:revokeToken",bf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=ty(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await HR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vs;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UR(this,e)}reload(){return $R(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Ro(this,FR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(s=n.email)!==null&&s!==void 0?s:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,T=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:D,isAnonymous:F,providerData:j,stsTokenManager:E}=n;G(x&&E,e,"internal-error");const y=Vs.fromJSON(this.name,E);G(typeof x=="string",e,"internal-error"),Kn(g,e.name),Kn(w,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof F=="boolean",e,"internal-error"),Kn(k,e.name),Kn(P,e.name),Kn(N,e.name),Kn(O,e.name),Kn(S,e.name),Kn(T,e.name);const _=new Rn({uid:x,auth:e,email:w,emailVerified:D,displayName:g,isAnonymous:F,photoURL:P,phoneNumber:k,tenantId:N,stsTokenManager:y,createdAt:S,lastLoginAt:T});return j&&Array.isArray(j)&&(_.providerData=j.map(v=>Object.assign({},v))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vs;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ow(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Vs;l.updateFromIdToken(r);const u=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Map;function Pn(t){Un(t instanceof Function,"Expected a class definition");let e=ny.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ny.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vw.type="NONE";const ry=Vw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ja(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ja("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(Pn(ry),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pn(ry);const o=Ja(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=Rn._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ms(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Ms(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bw(e))return"Blackberry";if(zw(e))return"Webos";if(Lw(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(Uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mw(t=ct()){return/firefox\//i.test(t)}function Lw(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(t=ct()){return/crios\//i.test(t)}function Fw(t=ct()){return/iemobile/i.test(t)}function Uw(t=ct()){return/android/i.test(t)}function Bw(t=ct()){return/blackberry/i.test(t)}function zw(t=ct()){return/webos/i.test(t)}function Of(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KR(t=ct()){var e;return Of(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QR(){return ex()&&document.documentMode===10}function $w(t=ct()){return Of(t)||Uw(t)||zw(t)||Bw(t)||/windows phone/i.test(t)||Fw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=sy(ct());break;case"Worker":n=`${sy(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e={}){return ai(t,"GET","/v2/passwordPolicy",bf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=6;class JR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iy(this),this.idTokenSubscription=new iy(this),this.beforeStateQueue=new GR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dw(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(pr(this));const n=e?xt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YR(this),n=new JR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new es("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function li(t){return xt(t)}class iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=ax(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eP(t){Vf=t}function tP(t){return Vf.loadJS(t)}function nP(){return Vf.gapiScript}function rP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t,e){const n=ts(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wo(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function iP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oP(t,e,n){const r=li(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hw(e),{host:o,port:l}=aP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),lP()}function Hw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aP(t){const e=Hw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oy(o)}}}function oy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e){return LR(t,"POST","/v1/accounts:signInWithIdp",bf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="http://localhost";class Qr extends qw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Cf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:uP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends Eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Wo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Wo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Wo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=ay(r);return new Js({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ay(r);return new Js({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends on{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ul.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ul(e,n,r,s)}}function Kw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ul._fromErrorAndOperation(t,i,e,r):i})}async function cP(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Js._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await Ro(t,Kw(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=Df(i.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Js._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e,n=!1){if(cn(t.app))return Promise.reject(pr(t));const r="signIn",s=await Kw(t,r,e),i=await Js._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function fP(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function pP(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function mP(t){return xt(t).signOut()}const Bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=1e3,yP=10;class Gw extends Qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$w(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);QR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gw.type="LOCAL";const vP=Gw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw extends Qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yw.type="SESSION";const Xw=Yw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await _P(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Mf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function EP(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function TP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SP(){return Jw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="firebaseLocalStorageDb",xP=1,zl="firebaseLocalStorage",eE="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([zl],e?"readwrite":"readonly").objectStore(zl)}function AP(){const t=indexedDB.deleteDatabase(Zw);return new Ho(t).toPromise()}function Jh(){const t=indexedDB.open(Zw,xP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zl,{keyPath:eE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zl)?e(r):(r.close(),await AP(),e(await Jh()))})})}async function ly(t,e,n){const r=Iu(t,!0).put({[eE]:e,value:n});return new Ho(r).toPromise()}async function kP(t,e){const n=Iu(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function uy(t,e){const n=Iu(t,!0).delete(e);return new Ho(n).toPromise()}const CP=800,RP=3;class tE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(SP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TP(),!this.activeServiceWorker)return;this.sender=new wP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jh();return await ly(e,Bl,"1"),await uy(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ly(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Iu(s,!1).getAll();return new Ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tE.type="LOCAL";const PP=tE;new $o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t,e){return e?Pn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends qw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NP(t){return dP(t.auth,new jf(t),t.bypassAuthState)}function bP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),hP(n,new jf(t),t.bypassAuthState)}async function DP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),cP(n,new jf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NP;case"linkViaPopup":case"linkViaRedirect":return DP;case"reauthViaPopup":case"reauthViaRedirect":return bP;default:wn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=new $o(2e3,1e4);async function VP(t,e,n){if(cn(t.app))return Promise.reject(nn(t,"operation-not-supported-in-this-environment"));const r=li(t);Rw(t,e,Eu);const s=Lf(r,n);return new Or(r,"signInViaPopup",e,s).executeNotNull()}class Or extends nE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OP.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="pendingRedirect",Za=new Map;class LP extends nE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const r=await jP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jP(t,e){const n=sE(e),r=rE(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function FP(t,e){return rE(t)._set(sE(e),"true")}function UP(t,e){Za.set(t._key(),e)}function rE(t){return Pn(t._redirectPersistence)}function sE(t){return Ja(MP,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t,e,n){return zP(t,e,n)}async function zP(t,e,n){if(cn(t.app))return Promise.reject(pr(t));const r=li(t);Rw(t,e,Eu),await r._initializationPromise;const s=Lf(r,n);return await FP(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function $P(t,e){return await li(t)._initializationPromise,iE(t,e,!1)}async function iE(t,e,n=!1){if(cn(t.app))return Promise.reject(pr(t));const r=li(t),s=Lf(r,e),o=await new LP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=10*60*1e3;class HP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WP&&this.cachedEventUids.clear(),this.cachedEventUids.has(cy(e))}saveEventToCache(e){this.cachedEventUids.add(cy(e)),this.lastProcessedEventTime=Date.now()}}function cy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(t,e={}){return ai(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GP=/^https?/;async function YP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KP(t);for(const n of e)try{if(XP(n))return}catch{}wn(t,"unauthorized-domain")}function XP(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GP.test(n))return!1;if(QP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new $o(3e4,6e4);function hy(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZP(t){return new Promise((e,n)=>{var r,s,i;function o(){hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hy(),n(nn(t,"network-request-failed"))},timeout:JP.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const l=rP("iframefcb");return mn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},tP(`${nP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw el=null,e})}let el=null;function e2(t){return el=el||ZP(t),el}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=new $o(5e3,15e3),n2="__/auth/iframe",r2="emulator/auth/iframe",s2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o2(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nf(e,r2):`https://${t.config.authDomain}/${n2}`,r={apiKey:e.apiKey,appName:t.name,v:ni},s=i2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mo(r).slice(1)}`}async function a2(t){const e=await e2(t),n=mn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:o2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},t2.get());function u(){mn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u2=500,c2=600,h2="_blank",d2="http://localhost";class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f2(t,e,n,r=u2,s=c2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},l2),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ct().toLowerCase();n&&(l=jw(h)?h2:n),Mw(h)&&(e=e||d2,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[k,P])=>`${w}${k}=${P},`,"");if(KR(h)&&l!=="_self")return p2(e||"",l),new dy(null);const g=window.open(e||"",l,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new dy(g)}function p2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2="__/auth/handler",g2="emulator/auth/handler",y2=encodeURIComponent("fac");async function fy(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:s};if(e instanceof Eu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ox(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Wo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${y2}=${encodeURIComponent(u)}`:"";return`${v2(t)}?${Mo(l).slice(1)}${h}`}function v2({config:t}){return t.emulator?Nf(t,g2):`https://${t.authDomain}/${m2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class _2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xw,this._completeRedirectFn=iE,this._overrideRedirectResult=UP}async _openPopup(e,n,r,s){var i;Un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fy(e,n,r,Yh(),s);return f2(e,o,Mf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fy(e,n,r,Yh(),s);return EP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await a2(e),r=new HP(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pc,{type:Pc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pc];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $w()||Lw()||Of()}}const w2=_2;var py="@firebase/auth",my="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function I2(t){yn(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},h=new ZR(r,s,i,u);return iP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yn(new sn("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new E2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(py,my,T2(t)),Wt(py,my,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=5*60,x2=J_("authIdTokenMaxAge")||S2;let gy=null;const A2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>x2)return;const s=n==null?void 0:n.token;gy!==s&&(gy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function k2(t=Xd()){const e=ts(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sP(t,{popupRedirectResolver:w2,persistence:[PP,vP,Xw]}),r=J_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=A2(i.toString());pP(n,o,()=>o(n.currentUser)),fP(n,l=>o(l))}}const s=Y_("auth");return s&&oP(n,`http://${s}`),n}function C2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",C2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});I2("Browser");const aE="@firebase/installations",Ff="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=1e4,uE=`w:${Ff}`,cE="FIS_v2",R2="https://firebaseinstallations.googleapis.com/v1",P2=60*60*1e3,N2="installations",b2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Gr=new es(N2,b2,D2);function hE(t){return t instanceof on&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE({projectId:t}){return`${R2}/projects/${t}/installations`}function fE(t){return{token:t.token,requestStatus:2,expiresIn:V2(t.expiresIn),creationTime:Date.now()}}async function pE(t,e){const r=(await e.json()).error;return Gr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function O2(t,{refreshToken:e}){const n=mE(t);return n.append("Authorization",M2(e)),n}async function gE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function V2(t){return Number(t.replace("s","000"))}function M2(t){return`${cE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dE(t),s=mE(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:cE,appId:t.appId,sdkVersion:uE},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await gE(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:fE(h.authToken)}}else throw await pE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=/^[cdef][\w-]{21}$/,Zh="";function U2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=B2(t);return F2.test(n)?n:Zh}catch{return Zh}}function B2(t){return j2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new Map;function _E(t,e){const n=Su(t);wE(n,e),z2(n,e)}function wE(t,e){const n=vE.get(t);if(n)for(const r of n)r(e)}function z2(t,e){const n=$2();n&&n.postMessage({key:t,fid:e}),W2()}let Vr=null;function $2(){return!Vr&&"BroadcastChannel"in self&&(Vr=new BroadcastChannel("[Firebase] FID Change"),Vr.onmessage=t=>{wE(t.data.key,t.data.fid)}),Vr}function W2(){vE.size===0&&Vr&&(Vr.close(),Vr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="firebase-installations-database",q2=1,Yr="firebase-installations-store";let Nc=null;function Uf(){return Nc||(Nc=s0(H2,q2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yr)}}})),Nc}async function $l(t,e){const n=Su(t),s=(await Uf()).transaction(Yr,"readwrite"),i=s.objectStore(Yr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&_E(t,e.fid),e}async function EE(t){const e=Su(t),r=(await Uf()).transaction(Yr,"readwrite");await r.objectStore(Yr).delete(e),await r.done}async function xu(t,e){const n=Su(t),s=(await Uf()).transaction(Yr,"readwrite"),i=s.objectStore(Yr),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&_E(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(t){let e;const n=await xu(t.appConfig,r=>{const s=K2(r),i=Q2(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Zh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function K2(t){const e=t||{fid:U2(),registrationStatus:0};return TE(e)}function Q2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Gr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=G2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Y2(t)}:{installationEntry:e}}async function G2(t,e){try{const n=await L2(t,e);return $l(t.appConfig,n)}catch(n){throw hE(n)&&n.customData.serverCode===409?await EE(t.appConfig):await $l(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Y2(t){let e=await yy(t.appConfig);for(;e.registrationStatus===1;)await yE(100),e=await yy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Bf(t);return r||n}return e}function yy(t){return xu(t,e=>{if(!e)throw Gr.create("installation-not-found");return TE(e)})}function TE(t){return X2(t)?{fid:t.fid,registrationStatus:0}:t}function X2(t){return t.registrationStatus===1&&t.registrationTime+lE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2({appConfig:t,heartbeatServiceProvider:e},n){const r=Z2(t,n),s=O2(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:uE,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await gE(()=>fetch(r,l));if(u.ok){const h=await u.json();return fE(h)}else throw await pE("Generate Auth Token",u)}function Z2(t,{fid:e}){return`${dE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(t,e=!1){let n;const r=await xu(t.appConfig,i=>{if(!IE(i))throw Gr.create("not-registered");const o=i.authToken;if(!e&&nN(o))return i;if(o.requestStatus===1)return n=eN(t,e),i;{if(!navigator.onLine)throw Gr.create("app-offline");const l=sN(i);return n=tN(t,l),l}});return n?await n:r.authToken}async function eN(t,e){let n=await vy(t.appConfig);for(;n.authToken.requestStatus===1;)await yE(100),n=await vy(t.appConfig);const r=n.authToken;return r.requestStatus===0?zf(t,e):r}function vy(t){return xu(t,e=>{if(!IE(e))throw Gr.create("not-registered");const n=e.authToken;return iN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tN(t,e){try{const n=await J2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $l(t.appConfig,r),n}catch(n){if(hE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await EE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $l(t.appConfig,r)}throw n}}function IE(t){return t!==void 0&&t.registrationStatus===2}function nN(t){return t.requestStatus===2&&!rN(t)}function rN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+P2}function sN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function iN(t){return t.requestStatus===1&&t.requestTime+lE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Bf(e);return r?r.catch(console.error):zf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e=!1){const n=t;return await lN(n),(await zf(n,e)).token}async function lN(t){const{registrationPromise:e}=await Bf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){if(!t||!t.options)throw bc("App Configuration");if(!t.name)throw bc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bc(t){return Gr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="installations",cN="installations-internal",hN=t=>{const e=t.getProvider("app").getImmediate(),n=uN(e),r=ts(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dN=t=>{const e=t.getProvider("app").getImmediate(),n=ts(e,SE).getImmediate();return{getId:()=>oN(n),getToken:s=>aN(n,s)}};function fN(){yn(new sn(SE,hN,"PUBLIC")),yn(new sn(cN,dN,"PRIVATE"))}fN();Wt(aE,Ff);Wt(aE,Ff,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="analytics",pN="firebase_id",mN="origin",gN=60*1e3,yN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$f="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new uu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dt=new es("analytics","Analytics",vN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){if(!t.startsWith($f)){const e=Dt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function xE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function wN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function EN(t,e){const n=wN("firebase-js-sdk-policy",{createScriptURL:_N}),r=document.createElement("script"),s=`${$f}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function TN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function IN(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await xE(n)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(l){St.error(l)}t("config",s,i)}async function SN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await xE(n);for(const u of o){const h=l.find(g=>g.measurementId===u),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){St.error(i)}}function xN(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await SN(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await IN(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){St.error(l)}}return s}function AN(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=xN(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function kN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($f)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=30,RN=1e3;class PN{constructor(e={},n=RN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const AE=new PN;function NN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function bN(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:NN(r)},i=yN.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function DN(t,e=AE,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Dt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Dt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new MN;return setTimeout(async()=>{l.abort()},gN),kE({appId:r,apiKey:s,measurementId:i},o,l,e)}async function kE(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=AE){var i;const{appId:o,measurementId:l}=t;try{await ON(r,e)}catch(u){if(l)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await bN(t);return s.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!VN(h)){if(s.deleteThrottleMetadata(o),l)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw u}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?ag(n,s.intervalMillis,CN):ag(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,g),St.debug(`Calling attemptFetch again in ${f} millis`),kE(t,g,r,s)}}function ON(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function VN(t){if(!(t instanceof on)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class MN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function LN(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(){if(e0())try{await t0()}catch(t){return St.warn(Dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FN(t,e,n,r,s,i,o){var l;const u=DN(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>St.error(k)),e.push(u);const h=jN().then(k=>{if(k)return r.getId()}),[f,g]=await Promise.all([u,h]);kN(i)||EN(i,f.measurementId),s("js",new Date);const w=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return w[mN]="firebase",w.update=!0,g!=null&&(w[pN]=g),s("config",f.measurementId,w),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.app=e}_delete(){return delete to[this.app.options.appId],Promise.resolve()}}let to={},_y=[];const wy={};let Dc="dataLayer",BN="gtag",Ey,CE,Ty=!1;function zN(){const t=[];if(Z_()&&t.push("This is a browser extension environment."),nx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Dt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function $N(t,e,n){zN();const r=t.options.appId;if(!r)throw Dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dt.create("no-api-key");if(to[r]!=null)throw Dt.create("already-exists",{id:r});if(!Ty){TN(Dc);const{wrappedGtag:i,gtagCore:o}=AN(to,_y,wy,Dc,BN);CE=i,Ey=o,Ty=!0}return to[r]=FN(t,_y,wy,e,Ey,Dc,n),new UN(t)}function WN(t=Xd()){t=xt(t);const e=ts(t,Wl);return e.isInitialized()?e.getImmediate():HN(t)}function HN(t,e={}){const n=ts(t,Wl);if(n.isInitialized()){const s=n.getImmediate();if(wo(e,n.getOptions()))return s;throw Dt.create("already-initialized")}return n.initialize({options:e})}function qN(t,e,n,r){t=xt(t),LN(CE,to[t.app.options.appId],e,n,r).catch(s=>St.error(s))}const Iy="@firebase/analytics",Sy="0.10.8";function KN(){yn(new sn(Wl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return $N(r,s,n)},"PUBLIC")),yn(new sn("analytics-internal",t,"PRIVATE")),Wt(Iy,Sy),Wt(Iy,Sy,"esm2017");function t(e){try{const n=e.getProvider(Wl).getImmediate();return{logEvent:(r,s,i)=>qN(n,r,s,i)}}catch(n){throw Dt.create("interop-component-reg-failed",{reason:n})}}}KN();const QN={},hs=QN,Oc={apiKey:hs.VITE_FIREBASE_API_KEY,authDomain:hs.VITE_FIREBASE_AUTH_DOMAIN,projectId:hs.VITE_FIREBASE_PROJECT_ID,storageBucket:hs.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:hs.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:hs.VITE_FIREBASE_APP_ID};let ba,Po=null,gn=null,Au=!1;if(Oc.apiKey&&Oc.projectId)try{ba=i0(Oc);try{WN(ba)}catch{}Po=cR(ba),gn=k2(ba),Au=!0,console.log("Firebase initialized successfully"),Ne("Firebase SDK initialized","success")}catch(t){console.error("Firebase initialization failed:",t),Ne(`Firebase init failed: ${t.message}`,"error")}else console.warn("Firebase configuration missing."),Ne("Firebase config missing","warn");const Da=()=>Au,xy=new xn,Hl="auth_redirect_pending",Wf="auth_redirect_timestamp",GN=10*60*1e3,YN=()=>{const t=navigator.userAgent||navigator.vendor||window.opera||"";return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Line|FBAN|FBAV|Instagram|MicroMessenger/i.test(t)},XN=()=>{Ne("[Auth] Setting redirect flag...","info"),localStorage.setItem(Hl,"true"),localStorage.setItem(Wf,Date.now().toString())},Xr=()=>{localStorage.getItem(Hl)&&(Ne("[Auth] Clearing redirect flag.","info"),localStorage.removeItem(Hl),localStorage.removeItem(Wf))},ed=()=>{const t=localStorage.getItem(Hl)==="true",e=localStorage.getItem(Wf);if(!t)return!1;if(e){const n=parseInt(e,10),r=Date.now();if(isNaN(n)||r-n>GN)return Ne("[Auth] Redirect flag expired or invalid. Clearing.","warn"),Xr(),!1}else return Xr(),!1;return!0},JN=async(t=!1)=>{if(!gn)throw new Error("Firebase Auth not initialized");const e=YN();if(Ne(`[Login] Start. Mobile: ${e}. Strategy: Popup Only`),t){Ne("[Login] Forcing Redirect...","info"),XN(),await BP(gn,xy);return}try{const n=await VP(gn,xy);return Ne(`[Login] Popup Success: ${n.user.email}`,"success"),n.user}catch(n){throw console.warn("Popup failed:",n),Ne(`[Login] Popup failed: ${n.code||n.message}`,"error"),n}},ZN=async()=>{if(!gn||!ed())return null;Ne("[Auth] Detected pending redirect. Checking result...","info");try{const t=await $P(gn);return Xr(),t?(Ne(`[Auth] Redirect Success: ${t.user.email}`,"success"),t.user):(Ne("[Auth] Redirect returned null (User cancelled or Session lost).","warn"),null)}catch(t){return Xr(),console.error("Check Redirect Error:",t),Ne(`[Auth] Check Redirect Error: ${t.message}`,"error"),null}},eb=async()=>{if(gn)try{await mP(gn),Xr(),Ne("User logged out","info")}catch(t){console.error("Logout failed",t),Ne(`Logout error: ${t.message}`,"error")}},RE="shift_scheduler",PE="v1_data",tb=(t,e)=>{if(!Au||!Po)return()=>{};const n=pw(Po,RE,PE);return kR(n,r=>t(r.exists()?r.data():null),r=>{console.error("Sync error:",r),e(r)})},Vc=async t=>{if(!Au||!Po)return;const e=pw(Po,RE,PE);await AR(e,t)},Ay={year:new Date().getFullYear(),month:new Date().getMonth(),firstWorkDayA:"",membersA:[],dailyQuotasA:{},firstWorkDayB:"",membersB:[],dailyQuotasB:{}},nb=()=>{const[t,e]=X.useState("filling"),[n,r]=X.useState("A"),[s,i]=X.useState({settings:Ay,leaves:[]}),[o,l]=X.useState(null),[u,h]=X.useState(!0),[f,g]=X.useState(!1),[w,k]=X.useState(!0),[P,N]=X.useState(!1),[O,S]=X.useState(!1),T=X.useRef(!1);X.useEffect(()=>{N(Da()),Ne("App Mounted. Firebase Enabled: "+Da())},[]);const x=_=>{console.error("Auth Error:",_);let v="登入失敗，請重試。";_.code==="auth/popup-closed-by-user"?v="登入視窗已被關閉。":_.code==="auth/unauthorized-domain"?v=`網域未授權 (${window.location.hostname})。`:_.message&&(v=_.message),alert(v)};X.useEffect(()=>{let _=!0,v;if(!Da()||!gn){h(!1);return}v=setTimeout(()=>{_&&u&&(Ne("Safety Timer Triggered (8s). Clearing loading state.","error"),h(!1),Xr())},8e3);const A=async()=>{if(ed())try{await ZN()||(Ne("initAuth: Redirect checked but no user found. Stopping loading.","warn"),_&&h(!1))}catch{Ne("initAuth: Redirect check error.","error"),_&&h(!1)}},C=gn.onAuthStateChanged(I=>{_&&(I?(Ne(`Auth User: ${I.email}`,"success"),l(I),h(!1),clearTimeout(v),Xr()):(Ne("Auth: No user session found."),l(null),ed()||h(!1)))});return A(),()=>{_=!1,clearTimeout(v),C()}},[]);const D=_=>{const v={...Ay,..._.settings};return v.members&&v.members.length>0&&v.membersA.length===0&&(v.membersA=[...v.members],delete v.members),v.firstWorkDay&&!v.firstWorkDayA&&(v.firstWorkDayA=v.firstWorkDay,delete v.firstWorkDay),v.dailyQuotas&&Object.keys(v.dailyQuotas).length>0&&Object.keys(v.dailyQuotasA).length===0&&(v.dailyQuotasA={...v.dailyQuotas},delete v.dailyQuotas),{settings:v,leaves:_.leaves||[]}};X.useEffect(()=>{if(Da()&&o){const _=tb(v=>{if(v)T.current=!0,i(D(v)),localStorage.setItem(Ni,JSON.stringify(v)),setTimeout(()=>{T.current=!1},100);else{const A=localStorage.getItem(Ni);if(A)try{const C=JSON.parse(A),I=D(C);i(I),Vc(I)}catch(C){console.error(C)}}k(!1)},v=>k(!1));return()=>_()}else{const _=localStorage.getItem(Ni);if(_)try{const v=JSON.parse(_);i(D(v))}catch(v){console.error(v)}k(!1)}},[o]);const F=async()=>{g(!0);try{await JN()}catch(_){g(!1),x(_)}},j=async()=>{window.confirm("確定要登出嗎？")&&(await eb(),k(!0))},E=_=>{const v={...s,settings:_};i(v),localStorage.setItem(Ni,JSON.stringify(v)),P&&!T.current&&o&&Vc(v).catch(A=>alert("同步失敗"))},y=_=>{const v={...s,leaves:_};i(v),localStorage.setItem(Ni,JSON.stringify(v)),P&&!T.current&&o&&Vc(v).catch(A=>alert("同步失敗"))};return u?p.jsxs("div",{className:"flex items-center justify-center h-screen bg-slate-50 flex-col gap-4 fixed inset-0 z-[9999]",children:[p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-primary"}),p.jsx("div",{className:"text-slate-600 font-medium text-sm animate-pulse",children:"系統載入中..."}),p.jsx("div",{className:"fixed bottom-0 left-0 w-full h-10 opacity-0 z-50",onClick:()=>S(_=>!_)}),p.jsx(_c,{isVisible:O,onClose:()=>S(!1)})]}):P&&!o?p.jsxs(p.Fragment,{children:[p.jsx(LS,{onLogin:F,loading:f,onShowDebug:()=>S(!0)}),p.jsx(_c,{isVisible:O,onClose:()=>S(!1)})]}):p.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans",children:[p.jsx(ES,{currentPage:t,onNavigate:e,isFirebaseConnected:P,user:o,onLogout:j,currentGroup:n,onGroupChange:r}),p.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8",children:[!P&&p.jsx("div",{className:"mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r shadow-sm",children:p.jsxs("p",{className:"text-sm text-yellow-700",children:["目前使用 ",p.jsx("strong",{children:"本機模式"}),"。"]})}),w?p.jsx("div",{className:"flex justify-center py-10",children:p.jsx("div",{className:"animate-spin h-8 w-8 border-b-2 border-primary rounded-full"})}):p.jsxs(p.Fragment,{children:[t==="settings"&&p.jsx(kS,{settings:s.settings,onSaveSettings:E,currentGroup:n}),t==="filling"&&p.jsx(MS,{settings:s.settings,savedLeaves:s.leaves,onSaveLeaves:y,currentGroup:n})]})]}),p.jsx(_c,{isVisible:O,onClose:()=>S(!1)})]})},NE=document.getElementById("root");if(!NE)throw new Error("Could not find root element to mount to");const rb=Mc.createRoot(NE);rb.render(p.jsx(ET.StrictMode,{children:p.jsx(nb,{})}));
