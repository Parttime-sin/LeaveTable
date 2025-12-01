(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function iT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sy={exports:{}},jl={},Ay={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),oT=Symbol.for("react.portal"),aT=Symbol.for("react.fragment"),lT=Symbol.for("react.strict_mode"),uT=Symbol.for("react.profiler"),cT=Symbol.for("react.provider"),hT=Symbol.for("react.context"),dT=Symbol.for("react.forward_ref"),fT=Symbol.for("react.suspense"),pT=Symbol.for("react.memo"),mT=Symbol.for("react.lazy"),jp=Symbol.iterator;function gT(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ky=Object.assign,Ry={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=Ry,this.updater=n||xy}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cy(){}Cy.prototype=Ws.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=Ry,this.updater=n||xy}var Yh=Gh.prototype=new Cy;Yh.constructor=Gh;ky(Yh,Ws.prototype);Yh.isPureReactComponent=!0;var Fp=Array.isArray,Py=Object.prototype.hasOwnProperty,Xh={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function by(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Py.call(e,r)&&!Ny.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Eo,type:t,key:i,ref:o,props:s,_owner:Xh.current}}function yT(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function vT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Up=/\/+/g;function zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vT(""+t.key):e.toString(36)}function xa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case oT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+zu(o,0):r,Fp(s)?(n="",t!=null&&(n=t.replace(Up,"$&/")+"/"),xa(s,e,n,"",function(h){return h})):s!=null&&(Jh(s)&&(s=yT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Up,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Fp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+zu(i,l);o+=xa(i,e,n,u,s)}else if(u=gT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+zu(i,l++),o+=xa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var r=[],s=0;return xa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function _T(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},ka={transition:null},wT={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:ka,ReactCurrentOwner:Xh};function Dy(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Ws;se.Fragment=aT;se.Profiler=uT;se.PureComponent=Gh;se.StrictMode=lT;se.Suspense=fT;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wT;se.act=Dy;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ky({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Xh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Py.call(e,u)&&!Ny.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Eo,type:t.type,key:s,ref:i,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:hT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cT,_context:t},t.Consumer=t};se.createElement=by;se.createFactory=function(t){var e=by.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:dT,render:t}};se.isValidElement=Jh;se.lazy=function(t){return{$$typeof:mT,_payload:{_status:-1,_result:t},_init:_T}};se.memo=function(t,e){return{$$typeof:pT,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};se.unstable_act=Dy;se.useCallback=function(t,e){return dt.current.useCallback(t,e)};se.useContext=function(t){return dt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};se.useEffect=function(t,e){return dt.current.useEffect(t,e)};se.useId=function(){return dt.current.useId()};se.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return dt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};se.useRef=function(t){return dt.current.useRef(t)};se.useState=function(t){return dt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return dt.current.useTransition()};se.version="18.3.1";Ay.exports=se;var te=Ay.exports;const ET=iT(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT=te,IT=Symbol.for("react.element"),ST=Symbol.for("react.fragment"),AT=Object.prototype.hasOwnProperty,xT=TT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kT={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AT.call(e,r)&&!kT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:IT,type:t,key:i,ref:o,props:s,_owner:xT.current}}jl.Fragment=ST;jl.jsx=Oy;jl.jsxs=Oy;Sy.exports=jl;var m=Sy.exports,Nc={},Vy={exports:{}},Pt={},My={exports:{}},Ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,q){var Y=U.length;U.push(q);e:for(;0<Y;){var z=Y-1>>>1,H=U[z];if(0<s(H,q))U[z]=q,U[Y]=H,Y=z;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],Y=U.pop();if(Y!==q){U[0]=Y;e:for(var z=0,H=U.length,K=H>>>1;z<K;){var ne=2*(z+1)-1,he=U[ne],mt=ne+1,at=U[mt];if(0>s(he,Y))mt<H&&0>s(at,he)?(U[z]=at,U[mt]=Y,z=mt):(U[z]=he,U[ne]=Y,z=ne);else if(mt<H&&0>s(at,Y))U[z]=at,U[mt]=Y,z=mt;else break e}}return q}function s(U,q){var Y=U.sortIndex-q.sortIndex;return Y!==0?Y:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,y=null,w=3,k=!1,P=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(U){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=U)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function D(U){if(N=!1,A(U),!P)if(n(u)!==null)P=!0,pt(F);else{var q=n(h);q!==null&&de(D,q.startTime-U)}}function F(U,q){P=!1,N&&(N=!1,S(g),g=-1),k=!0;var Y=w;try{for(A(q),y=n(u);y!==null&&(!(y.expirationTime>q)||U&&!x());){var z=y.callback;if(typeof z=="function"){y.callback=null,w=y.priorityLevel;var H=z(y.expirationTime<=q);q=t.unstable_now(),typeof H=="function"?y.callback=H:y===n(u)&&r(u),A(q)}else r(u);y=n(u)}if(y!==null)var K=!0;else{var ne=n(h);ne!==null&&de(D,ne.startTime-q),K=!1}return K}finally{y=null,w=Y,k=!1}}var j=!1,T=null,g=-1,_=5,v=-1;function x(){return!(t.unstable_now()-v<_)}function R(){if(T!==null){var U=t.unstable_now();v=U;var q=!0;try{q=T(!0,U)}finally{q?I():(j=!1,T=null)}}else j=!1}var I;if(typeof E=="function")I=function(){E(R)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,re=Oe.port2;Oe.port1.onmessage=R,I=function(){re.postMessage(null)}}else I=function(){O(R,0)};function pt(U){T=U,j||(j=!0,I())}function de(U,q){g=O(function(){U(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,pt(F))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(w){case 1:case 2:case 3:var q=3;break;default:q=w}var Y=w;w=q;try{return U()}finally{w=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Y=w;w=U;try{return q()}finally{w=Y}},t.unstable_scheduleCallback=function(U,q,Y){var z=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?z+Y:z):Y=z,U){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=Y+H,U={id:f++,callback:q,priorityLevel:U,startTime:Y,expirationTime:H,sortIndex:-1},Y>z?(U.sortIndex=Y,e(h,U),n(u)===null&&U===n(h)&&(N?(S(g),g=-1):N=!0,de(D,Y-z))):(U.sortIndex=H,e(u,U),P||k||(P=!0,pt(F))),U},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(U){var q=w;return function(){var Y=w;w=q;try{return U.apply(this,arguments)}finally{w=Y}}}})(Ly);My.exports=Ly;var RT=My.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CT=te,Ct=RT;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jy=new Set,qi={};function Wr(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(qi[t]=e,t=0;t<e.length;t++)jy.add(e[t])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=Object.prototype.hasOwnProperty,PT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bp={},zp={};function NT(t){return bc.call(zp,t)?!0:bc.call(Bp,t)?!1:PT.test(t)?zp[t]=!0:(Bp[t]=!0,!1)}function bT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DT(t,e,n,r){if(e===null||typeof e>"u"||bT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zh=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zh,ed);Qe[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zh,ed);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zh,ed);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,n,r){var s=Qe.hasOwnProperty(e)?Qe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DT(e,n,s,r)&&(n=null),r||s===null?NT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=CT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),By=Symbol.for("react.offscreen"),$p=Symbol.iterator;function fi(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,$u;function Ii(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Wu=!1;function Hu(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ii(t):""}function OT(t){switch(t.tag){case 5:return Ii(t.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function Mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case Dc:return"Profiler";case nd:return"StrictMode";case Oc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uy:return(t.displayName||"Context")+".Consumer";case Fy:return(t._context.displayName||"Context")+".Provider";case rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sd:return e=t.displayName||null,e!==null?e:Mc(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return Mc(t(e))}catch{}}return null}function VT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mc(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MT(t){var e=zy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=MT(t))}function $y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lc(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wy(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function jc(t,e){Wy(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fc(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fc(t,e,n){(e!=="number"||Ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Si=Array.isArray;function vs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Si(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Hy(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sa,Ky=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LT=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(t){LT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ni[e]=Ni[t]})});function Qy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ni.hasOwnProperty(t)&&Ni[t]?(""+e).trim():e+"px"}function Gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Qy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var jT=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(jT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function $c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hc=null,_s=null,ws=null;function Qp(t){if(t=So(t)){if(typeof Hc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=$l(e),Hc(t.stateNode,t.type,e))}}function Yy(t){_s?ws?ws.push(t):ws=[t]:_s=t}function Xy(){if(_s){var t=_s,e=ws;if(ws=_s=null,Qp(t),e)for(t=0;t<e.length;t++)Qp(e[t])}}function Jy(t,e){return t(e)}function Zy(){}var qu=!1;function ev(t,e,n){if(qu)return t(e,n);qu=!0;try{return Jy(t,e,n)}finally{qu=!1,(_s!==null||ws!==null)&&(Zy(),Xy())}}function Qi(t,e){var n=t.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var qc=!1;if(xn)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){qc=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{qc=!1}function FT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var bi=!1,Qa=null,Ga=!1,Kc=null,UT={onError:function(t){bi=!0,Qa=t}};function BT(t,e,n,r,s,i,o,l,u){bi=!1,Qa=null,FT.apply(UT,arguments)}function zT(t,e,n,r,s,i,o,l,u){if(BT.apply(this,arguments),bi){if(bi){var h=Qa;bi=!1,Qa=null}else throw Error(L(198));Ga||(Ga=!0,Kc=h)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(Hr(t)!==t)throw Error(L(188))}function $T(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Gp(s),t;if(i===r)return Gp(s),e;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function nv(t){return t=$T(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var sv=Ct.unstable_scheduleCallback,Yp=Ct.unstable_cancelCallback,WT=Ct.unstable_shouldYield,HT=Ct.unstable_requestPaint,Ne=Ct.unstable_now,qT=Ct.unstable_getCurrentPriorityLevel,od=Ct.unstable_ImmediatePriority,iv=Ct.unstable_UserBlockingPriority,Ya=Ct.unstable_NormalPriority,KT=Ct.unstable_LowPriority,ov=Ct.unstable_IdlePriority,Fl=null,rn=null;function QT(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:XT,GT=Math.log,YT=Math.LN2;function XT(t){return t>>>=0,t===0?32:31-(GT(t)/YT|0)|0}var ia=64,oa=4194304;function Ai(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ai(l):(i&=o,i!==0&&(r=Ai(i)))}else o=n&~s,o!==0?r=Ai(o):i!==0&&(r=Ai(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),s=1<<n,r|=t[n],e&=~s;return r}function JT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Kt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=JT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Qc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function av(){var t=ia;return ia<<=1,!(ia&4194240)&&(ia=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function To(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function eI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Kt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var fe=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,ld,cv,hv,dv,Gc=!1,aa=[],Yn=null,Xn=null,Jn=null,Gi=new Map,Yi=new Map,zn=[],tI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Gi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(e.pointerId)}}function mi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=So(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function nI(t,e,n,r,s){switch(e){case"focusin":return Yn=mi(Yn,t,e,n,r,s),!0;case"dragenter":return Xn=mi(Xn,t,e,n,r,s),!0;case"mouseover":return Jn=mi(Jn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Gi.set(i,mi(Gi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Yi.set(i,mi(Yi.get(i)||null,t,e,n,r,s)),!0}return!1}function fv(t){var e=Tr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,dv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wc=r,n.target.dispatchEvent(r),Wc=null}else return e=So(n),e!==null&&ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Jp(t,e,n){Ra(t)&&n.delete(e)}function rI(){Gc=!1,Yn!==null&&Ra(Yn)&&(Yn=null),Xn!==null&&Ra(Xn)&&(Xn=null),Jn!==null&&Ra(Jn)&&(Jn=null),Gi.forEach(Jp),Yi.forEach(Jp)}function gi(t,e){t.blockedOn===e&&(t.blockedOn=null,Gc||(Gc=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,rI)))}function Xi(t){function e(s){return gi(s,t)}if(0<aa.length){gi(aa[0],t);for(var n=1;n<aa.length;n++){var r=aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&gi(Yn,t),Xn!==null&&gi(Xn,t),Jn!==null&&gi(Jn,t),Gi.forEach(e),Yi.forEach(e),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)fv(n),n.blockedOn===null&&zn.shift()}var Es=On.ReactCurrentBatchConfig,Ja=!0;function sI(t,e,n,r){var s=fe,i=Es.transition;Es.transition=null;try{fe=1,ud(t,e,n,r)}finally{fe=s,Es.transition=i}}function iI(t,e,n,r){var s=fe,i=Es.transition;Es.transition=null;try{fe=4,ud(t,e,n,r)}finally{fe=s,Es.transition=i}}function ud(t,e,n,r){if(Ja){var s=Yc(t,e,n,r);if(s===null)rc(t,e,r,Za,n),Xp(t,r);else if(nI(s,t,e,n,r))r.stopPropagation();else if(Xp(t,r),e&4&&-1<tI.indexOf(t)){for(;s!==null;){var i=So(s);if(i!==null&&uv(i),i=Yc(t,e,n,r),i===null&&rc(t,e,r,Za,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else rc(t,e,r,null,n)}}var Za=null;function Yc(t,e,n,r){if(Za=null,t=id(r),t=Tr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Za=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qT()){case od:return 1;case iv:return 4;case Ya:case KT:return 16;case ov:return 536870912;default:return 16}default:return 16}}var Kn=null,cd=null,Ca=null;function mv(){if(Ca)return Ca;var t,e=cd,n=e.length,r,s="value"in Kn?Kn.value:Kn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ca=s.slice(t,1<r?1-r:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function Zp(){return!1}function Nt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?la:Zp,this.isPropagationStopped=Zp,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=Nt(Hs),Io=Ie({},Hs,{view:0,detail:0}),oI=Nt(Io),Qu,Gu,yi,Ul=Ie({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yi&&(yi&&t.type==="mousemove"?(Qu=t.screenX-yi.screenX,Gu=t.screenY-yi.screenY):Gu=Qu=0,yi=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),em=Nt(Ul),aI=Ie({},Ul,{dataTransfer:0}),lI=Nt(aI),uI=Ie({},Io,{relatedTarget:0}),Yu=Nt(uI),cI=Ie({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),hI=Nt(cI),dI=Ie({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fI=Nt(dI),pI=Ie({},Hs,{data:0}),tm=Nt(pI),mI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yI[t])?!!e[t]:!1}function dd(){return vI}var _I=Ie({},Io,{key:function(t){if(t.key){var e=mI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wI=Nt(_I),EI=Ie({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=Nt(EI),TI=Ie({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),II=Nt(TI),SI=Ie({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),AI=Nt(SI),xI=Ie({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kI=Nt(xI),RI=[9,13,27,32],fd=xn&&"CompositionEvent"in window,Di=null;xn&&"documentMode"in document&&(Di=document.documentMode);var CI=xn&&"TextEvent"in window&&!Di,gv=xn&&(!fd||Di&&8<Di&&11>=Di),rm=" ",sm=!1;function yv(t,e){switch(t){case"keyup":return RI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function PI(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(sm=!0,rm);case"textInput":return t=e.data,t===rm&&sm?null:t;default:return null}}function NI(t,e){if(ls)return t==="compositionend"||!fd&&yv(t,e)?(t=mv(),Ca=cd=Kn=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gv&&e.locale!=="ko"?null:e.data;default:return null}}var bI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bI[t.type]:e==="textarea"}function _v(t,e,n,r){Yy(r),e=el(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Oi=null,Ji=null;function DI(t){Pv(t,0)}function Bl(t){var e=hs(t);if($y(e))return t}function OI(t,e){if(t==="change")return e}var wv=!1;if(xn){var Xu;if(xn){var Ju="oninput"in document;if(!Ju){var om=document.createElement("div");om.setAttribute("oninput","return;"),Ju=typeof om.oninput=="function"}Xu=Ju}else Xu=!1;wv=Xu&&(!document.documentMode||9<document.documentMode)}function am(){Oi&&(Oi.detachEvent("onpropertychange",Ev),Ji=Oi=null)}function Ev(t){if(t.propertyName==="value"&&Bl(Ji)){var e=[];_v(e,Ji,t,id(t)),ev(DI,e)}}function VI(t,e,n){t==="focusin"?(am(),Oi=e,Ji=n,Oi.attachEvent("onpropertychange",Ev)):t==="focusout"&&am()}function MI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Ji)}function LI(t,e){if(t==="click")return Bl(e)}function jI(t,e){if(t==="input"||t==="change")return Bl(e)}function FI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:FI;function Zi(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!bc.call(e,s)||!Yt(t[s],e[s]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function um(t,e){var n=lm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lm(n)}}function Tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iv(){for(var t=window,e=Ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ka(t.document)}return e}function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UI(t){var e=Iv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(r!==null&&pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=um(n,i);var o=um(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BI=xn&&"documentMode"in document&&11>=document.documentMode,us=null,Xc=null,Vi=null,Jc=!1;function cm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||us==null||us!==Ka(r)||(r=us,"selectionStart"in r&&pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vi&&Zi(Vi,r)||(Vi=r,r=el(Xc,"onSelect"),0<r.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=us)))}function ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Zu={},Sv={};xn&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function zl(t){if(Zu[t])return Zu[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sv)return Zu[t]=e[n];return t}var Av=zl("animationend"),xv=zl("animationiteration"),kv=zl("animationstart"),Rv=zl("transitionend"),Cv=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){Cv.set(t,e),Wr(e,[t])}for(var ec=0;ec<hm.length;ec++){var tc=hm[ec],zI=tc.toLowerCase(),$I=tc[0].toUpperCase()+tc.slice(1);dr(zI,"on"+$I)}dr(Av,"onAnimationEnd");dr(xv,"onAnimationIteration");dr(kv,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(Rv,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WI=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function dm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zT(r,e,void 0,t),t.currentTarget=null}function Pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;dm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;dm(s,l,h),i=u}}}if(Ga)throw t=Kc,Ga=!1,Kc=null,t}function ve(t,e){var n=e[rh];n===void 0&&(n=e[rh]=new Set);var r=t+"__bubble";n.has(r)||(Nv(e,t,2,!1),n.add(r))}function nc(t,e,n){var r=0;e&&(r|=4),Nv(n,t,r,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[ca]){t[ca]=!0,jy.forEach(function(n){n!=="selectionchange"&&(WI.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,nc("selectionchange",!1,e))}}function Nv(t,e,n,r){switch(pv(e)){case 1:var s=sI;break;case 4:s=iI;break;default:s=ud}n=s.bind(null,e,n,t),s=void 0,!qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function rc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Tr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}ev(function(){var h=i,f=id(n),y=[];e:{var w=Cv.get(t);if(w!==void 0){var k=hd,P=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":k=wI;break;case"focusin":P="focus",k=Yu;break;case"focusout":P="blur",k=Yu;break;case"beforeblur":case"afterblur":k=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=lI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=II;break;case Av:case xv:case kv:k=hI;break;case Rv:k=AI;break;case"scroll":k=oI;break;case"wheel":k=kI;break;case"copy":case"cut":case"paste":k=fI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=nm}var N=(e&4)!==0,O=!N&&t==="scroll",S=N?w!==null?w+"Capture":null:w;N=[];for(var E=h,A;E!==null;){A=E;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,S!==null&&(D=Qi(E,S),D!=null&&N.push(to(E,D,A)))),O)break;E=E.return}0<N.length&&(w=new k(w,P,null,n,f),y.push({event:w,listeners:N}))}}if(!(e&7)){e:{if(w=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",w&&n!==Wc&&(P=n.relatedTarget||n.fromElement)&&(Tr(P)||P[kn]))break e;if((k||w)&&(w=f.window===f?f:(w=f.ownerDocument)?w.defaultView||w.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?Tr(P):null,P!==null&&(O=Hr(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(N=em,D="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=nm,D="onPointerLeave",S="onPointerEnter",E="pointer"),O=k==null?w:hs(k),A=P==null?w:hs(P),w=new N(D,E+"leave",k,n,f),w.target=O,w.relatedTarget=A,D=null,Tr(f)===h&&(N=new N(S,E+"enter",P,n,f),N.target=A,N.relatedTarget=O,D=N),O=D,k&&P)t:{for(N=k,S=P,E=0,A=N;A;A=ts(A))E++;for(A=0,D=S;D;D=ts(D))A++;for(;0<E-A;)N=ts(N),E--;for(;0<A-E;)S=ts(S),A--;for(;E--;){if(N===S||S!==null&&N===S.alternate)break t;N=ts(N),S=ts(S)}N=null}else N=null;k!==null&&fm(y,w,k,N,!1),P!==null&&O!==null&&fm(y,O,P,N,!0)}}e:{if(w=h?hs(h):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var F=OI;else if(im(w))if(wv)F=jI;else{F=MI;var j=VI}else(k=w.nodeName)&&k.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(F=LI);if(F&&(F=F(t,h))){_v(y,F,n,f);break e}j&&j(t,w,h),t==="focusout"&&(j=w._wrapperState)&&j.controlled&&w.type==="number"&&Fc(w,"number",w.value)}switch(j=h?hs(h):window,t){case"focusin":(im(j)||j.contentEditable==="true")&&(us=j,Xc=h,Vi=null);break;case"focusout":Vi=Xc=us=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,cm(y,n,f);break;case"selectionchange":if(BI)break;case"keydown":case"keyup":cm(y,n,f)}var T;if(fd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ls?yv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(gv&&n.locale!=="ko"&&(ls||g!=="onCompositionStart"?g==="onCompositionEnd"&&ls&&(T=mv()):(Kn=f,cd="value"in Kn?Kn.value:Kn.textContent,ls=!0)),j=el(h,g),0<j.length&&(g=new tm(g,t,null,n,f),y.push({event:g,listeners:j}),T?g.data=T:(T=vv(n),T!==null&&(g.data=T)))),(T=CI?PI(t,n):NI(t,n))&&(h=el(h,"onBeforeInput"),0<h.length&&(f=new tm("onBeforeInput","beforeinput",null,n,f),y.push({event:f,listeners:h}),f.data=T))}Pv(y,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function el(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Qi(t,n),i!=null&&r.unshift(to(t,i,s)),i=Qi(t,e),i!=null&&r.push(to(t,i,s))),t=t.return}return r}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Qi(n,i),u!=null&&o.unshift(to(n,u,l))):s||(u=Qi(n,i),u!=null&&o.push(to(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HI=/\r\n?/g,qI=/\u0000|\uFFFD/g;function pm(t){return(typeof t=="string"?t:""+t).replace(HI,`
`).replace(qI,"")}function ha(t,e,n){if(e=pm(e),pm(t)!==e&&n)throw Error(L(425))}function tl(){}var Zc=null,eh=null;function th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,KI=typeof clearTimeout=="function"?clearTimeout:void 0,mm=typeof Promise=="function"?Promise:void 0,QI=typeof queueMicrotask=="function"?queueMicrotask:typeof mm<"u"?function(t){return mm.resolve(null).then(t).catch(GI)}:nh;function GI(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Xi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Xi(e)}function Zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),tn="__reactFiber$"+qs,no="__reactProps$"+qs,kn="__reactContainer$"+qs,rh="__reactEvents$"+qs,YI="__reactListeners$"+qs,XI="__reactHandles$"+qs;function Tr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gm(t);t!==null;){if(n=t[tn])return n;t=gm(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[tn]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function $l(t){return t[no]||null}var sh=[],ds=-1;function fr(t){return{current:t}}function _e(t){0>ds||(t.current=sh[ds],sh[ds]=null,ds--)}function ge(t,e){ds++,sh[ds]=t.current,t.current=e}var lr={},it=fr(lr),vt=fr(!1),br=lr;function Ps(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function _t(t){return t=t.childContextTypes,t!=null}function nl(){_e(vt),_e(it)}function ym(t,e,n){if(it.current!==lr)throw Error(L(168));ge(it,e),ge(vt,n)}function bv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(L(108,VT(t)||"Unknown",s));return Ie({},n,r)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,br=it.current,ge(it,t),ge(vt,vt.current),!0}function vm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=bv(t,e,br),r.__reactInternalMemoizedMergedChildContext=t,_e(vt),_e(it),ge(it,t)):_e(vt),ge(vt,n)}var yn=null,Wl=!1,ic=!1;function Dv(t){yn===null?yn=[t]:yn.push(t)}function JI(t){Wl=!0,Dv(t)}function pr(){if(!ic&&yn!==null){ic=!0;var t=0,e=fe;try{var n=yn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,Wl=!1}catch(s){throw yn!==null&&(yn=yn.slice(t+1)),sv(od,pr),s}finally{fe=e,ic=!1}}return null}var fs=[],ps=0,sl=null,il=0,bt=[],Dt=0,Dr=null,_n=1,wn="";function _r(t,e){fs[ps++]=il,fs[ps++]=sl,sl=t,il=e}function Ov(t,e,n){bt[Dt++]=_n,bt[Dt++]=wn,bt[Dt++]=Dr,Dr=t;var r=_n;t=wn;var s=32-Kt(r)-1;r&=~(1<<s),n+=1;var i=32-Kt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,_n=1<<32-Kt(e)+s|n<<s|r,wn=i+t}else _n=1<<i|n<<s|r,wn=t}function md(t){t.return!==null&&(_r(t,1),Ov(t,1,0))}function gd(t){for(;t===sl;)sl=fs[--ps],fs[ps]=null,il=fs[--ps],fs[ps]=null;for(;t===Dr;)Dr=bt[--Dt],bt[Dt]=null,wn=bt[--Dt],bt[Dt]=null,_n=bt[--Dt],bt[Dt]=null}var kt=null,xt=null,we=!1,Ht=null;function Vv(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,xt=Zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:_n,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,xt=null,!0):!1;default:return!1}}function ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oh(t){if(we){var e=xt;if(e){var n=e;if(!_m(t,e)){if(ih(t))throw Error(L(418));e=Zn(n.nextSibling);var r=kt;e&&_m(t,e)?Vv(r,n):(t.flags=t.flags&-4097|2,we=!1,kt=t)}}else{if(ih(t))throw Error(L(418));t.flags=t.flags&-4097|2,we=!1,kt=t}}}function wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function da(t){if(t!==kt)return!1;if(!we)return wm(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!th(t.type,t.memoizedProps)),e&&(e=xt)){if(ih(t))throw Mv(),Error(L(418));for(;e;)Vv(t,e),e=Zn(e.nextSibling)}if(wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=Zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=kt?Zn(t.stateNode.nextSibling):null;return!0}function Mv(){for(var t=xt;t;)t=Zn(t.nextSibling)}function Ns(){xt=kt=null,we=!1}function yd(t){Ht===null?Ht=[t]:Ht.push(t)}var ZI=On.ReactCurrentBatchConfig;function vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Em(t){var e=t._init;return e(t._payload)}function Lv(t){function e(S,E){if(t){var A=S.deletions;A===null?(S.deletions=[E],S.flags|=16):A.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function s(S,E){return S=rr(S,E),S.index=0,S.sibling=null,S}function i(S,E,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<E?(S.flags|=2,E):A):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,A,D){return E===null||E.tag!==6?(E=dc(A,S.mode,D),E.return=S,E):(E=s(E,A),E.return=S,E)}function u(S,E,A,D){var F=A.type;return F===as?f(S,E,A.props.children,D,A.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Un&&Em(F)===E.type)?(D=s(E,A.props),D.ref=vi(S,E,A),D.return=S,D):(D=La(A.type,A.key,A.props,null,S.mode,D),D.ref=vi(S,E,A),D.return=S,D)}function h(S,E,A,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=fc(A,S.mode,D),E.return=S,E):(E=s(E,A.children||[]),E.return=S,E)}function f(S,E,A,D,F){return E===null||E.tag!==7?(E=Cr(A,S.mode,D,F),E.return=S,E):(E=s(E,A),E.return=S,E)}function y(S,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=dc(""+E,S.mode,A),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case na:return A=La(E.type,E.key,E.props,null,S.mode,A),A.ref=vi(S,null,E),A.return=S,A;case os:return E=fc(E,S.mode,A),E.return=S,E;case Un:var D=E._init;return y(S,D(E._payload),A)}if(Si(E)||fi(E))return E=Cr(E,S.mode,A,null),E.return=S,E;fa(S,E)}return null}function w(S,E,A,D){var F=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:l(S,E,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case na:return A.key===F?u(S,E,A,D):null;case os:return A.key===F?h(S,E,A,D):null;case Un:return F=A._init,w(S,E,F(A._payload),D)}if(Si(A)||fi(A))return F!==null?null:f(S,E,A,D,null);fa(S,A)}return null}function k(S,E,A,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(A)||null,l(E,S,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case na:return S=S.get(D.key===null?A:D.key)||null,u(E,S,D,F);case os:return S=S.get(D.key===null?A:D.key)||null,h(E,S,D,F);case Un:var j=D._init;return k(S,E,A,j(D._payload),F)}if(Si(D)||fi(D))return S=S.get(A)||null,f(E,S,D,F,null);fa(E,D)}return null}function P(S,E,A,D){for(var F=null,j=null,T=E,g=E=0,_=null;T!==null&&g<A.length;g++){T.index>g?(_=T,T=null):_=T.sibling;var v=w(S,T,A[g],D);if(v===null){T===null&&(T=_);break}t&&T&&v.alternate===null&&e(S,T),E=i(v,E,g),j===null?F=v:j.sibling=v,j=v,T=_}if(g===A.length)return n(S,T),we&&_r(S,g),F;if(T===null){for(;g<A.length;g++)T=y(S,A[g],D),T!==null&&(E=i(T,E,g),j===null?F=T:j.sibling=T,j=T);return we&&_r(S,g),F}for(T=r(S,T);g<A.length;g++)_=k(T,S,g,A[g],D),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?g:_.key),E=i(_,E,g),j===null?F=_:j.sibling=_,j=_);return t&&T.forEach(function(x){return e(S,x)}),we&&_r(S,g),F}function N(S,E,A,D){var F=fi(A);if(typeof F!="function")throw Error(L(150));if(A=F.call(A),A==null)throw Error(L(151));for(var j=F=null,T=E,g=E=0,_=null,v=A.next();T!==null&&!v.done;g++,v=A.next()){T.index>g?(_=T,T=null):_=T.sibling;var x=w(S,T,v.value,D);if(x===null){T===null&&(T=_);break}t&&T&&x.alternate===null&&e(S,T),E=i(x,E,g),j===null?F=x:j.sibling=x,j=x,T=_}if(v.done)return n(S,T),we&&_r(S,g),F;if(T===null){for(;!v.done;g++,v=A.next())v=y(S,v.value,D),v!==null&&(E=i(v,E,g),j===null?F=v:j.sibling=v,j=v);return we&&_r(S,g),F}for(T=r(S,T);!v.done;g++,v=A.next())v=k(T,S,g,v.value,D),v!==null&&(t&&v.alternate!==null&&T.delete(v.key===null?g:v.key),E=i(v,E,g),j===null?F=v:j.sibling=v,j=v);return t&&T.forEach(function(R){return e(S,R)}),we&&_r(S,g),F}function O(S,E,A,D){if(typeof A=="object"&&A!==null&&A.type===as&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case na:e:{for(var F=A.key,j=E;j!==null;){if(j.key===F){if(F=A.type,F===as){if(j.tag===7){n(S,j.sibling),E=s(j,A.props.children),E.return=S,S=E;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Un&&Em(F)===j.type){n(S,j.sibling),E=s(j,A.props),E.ref=vi(S,j,A),E.return=S,S=E;break e}n(S,j);break}else e(S,j);j=j.sibling}A.type===as?(E=Cr(A.props.children,S.mode,D,A.key),E.return=S,S=E):(D=La(A.type,A.key,A.props,null,S.mode,D),D.ref=vi(S,E,A),D.return=S,S=D)}return o(S);case os:e:{for(j=A.key;E!==null;){if(E.key===j)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(S,E.sibling),E=s(E,A.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=fc(A,S.mode,D),E.return=S,S=E}return o(S);case Un:return j=A._init,O(S,E,j(A._payload),D)}if(Si(A))return P(S,E,A,D);if(fi(A))return N(S,E,A,D);fa(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(S,E.sibling),E=s(E,A),E.return=S,S=E):(n(S,E),E=dc(A,S.mode,D),E.return=S,S=E),o(S)):n(S,E)}return O}var bs=Lv(!0),jv=Lv(!1),ol=fr(null),al=null,ms=null,vd=null;function _d(){vd=ms=al=null}function wd(t){var e=ol.current;_e(ol),t._currentValue=e}function ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){al=t,vd=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(al===null)throw Error(L(308));ms=t,al.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var Ir=null;function Ed(t){Ir===null?Ir=[t]:Ir.push(t)}function Fv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ed(e)):(n.next=s.next,s.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Rn(t,n)}return s=r.interleaved,s===null?(e.next=e,Ed(r)):(e.next=s.next,s.next=e),r.interleaved=e,Rn(t,n)}function Na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}function Tm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ll(t,e,n,r){var s=t.updateQueue;Bn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var y=s.baseState;o=0,f=h=u=null,l=i;do{var w=l.lane,k=l.eventTime;if((r&w)===w){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(w=e,k=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){y=P.call(k,y,w);break e}y=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,w=typeof P=="function"?P.call(k,y,w):P,w==null)break e;y=Ie({},y,w);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,w=s.effects,w===null?s.effects=[l]:w.push(l))}else k={eventTime:k,lane:w,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=y):f=f.next=k,o|=w;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;w=l,l=w.next,w.next=null,s.lastBaseUpdate=w,s.shared.pending=null}}while(!0);if(f===null&&(u=y),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=y}}function Im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(L(191,s));s.call(r)}}}var Ao={},sn=fr(Ao),ro=fr(Ao),so=fr(Ao);function Sr(t){if(t===Ao)throw Error(L(174));return t}function Id(t,e){switch(ge(so,e),ge(ro,t),ge(sn,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bc(e,t)}_e(sn),ge(sn,e)}function Ds(){_e(sn),_e(ro),_e(so)}function Bv(t){Sr(so.current);var e=Sr(sn.current),n=Bc(e,t.type);e!==n&&(ge(ro,t),ge(sn,n))}function Sd(t){ro.current===t&&(_e(sn),_e(ro))}var Ee=fr(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function Ad(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var ba=On.ReactCurrentDispatcher,ac=On.ReactCurrentBatchConfig,Or=0,Te=null,Ve=null,Ue=null,cl=!1,Mi=!1,io=0,e1=0;function Ze(){throw Error(L(321))}function xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function kd(t,e,n,r,s,i){if(Or=i,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?s1:i1,t=n(r,s),Mi){i=0;do{if(Mi=!1,io=0,25<=i)throw Error(L(301));i+=1,Ue=Ve=null,e.updateQueue=null,ba.current=o1,t=n(r,s)}while(Mi)}if(ba.current=hl,e=Ve!==null&&Ve.next!==null,Or=0,Ue=Ve=Te=null,cl=!1,e)throw Error(L(300));return t}function Rd(){var t=io!==0;return io=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Te.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ut(){if(Ve===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Ue===null?Te.memoizedState:Ue.next;if(e!==null)Ue=e,Ve=t;else{if(t===null)throw Error(L(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ue===null?Te.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function oo(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ve,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Or&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Te.lanes|=f,Vr|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Te.lanes|=i,Vr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Yt(i,e.memoizedState)||(yt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function zv(){}function $v(t,e){var n=Te,r=Ut(),s=e(),i=!Yt(r.memoizedState,s);if(i&&(r.memoizedState=s,yt=!0),r=r.queue,Cd(qv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,ao(9,Hv.bind(null,n,r,s,e),void 0,null),Be===null)throw Error(L(349));Or&30||Wv(n,e,s)}return s}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hv(t,e,n,r){e.value=n,e.getSnapshot=r,Kv(e)&&Qv(t)}function qv(t,e,n){return n(function(){Kv(e)&&Qv(t)})}function Kv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function Qv(t){var e=Rn(t,1);e!==null&&Qt(e,t,1,-1)}function Sm(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=r1.bind(null,Te,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gv(){return Ut().memoizedState}function Da(t,e,n,r){var s=en();Te.flags|=t,s.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function Hl(t,e,n,r){var s=Ut();r=r===void 0?null:r;var i=void 0;if(Ve!==null){var o=Ve.memoizedState;if(i=o.destroy,r!==null&&xd(r,o.deps)){s.memoizedState=ao(e,n,i,r);return}}Te.flags|=t,s.memoizedState=ao(1|e,n,i,r)}function Am(t,e){return Da(8390656,8,t,e)}function Cd(t,e){return Hl(2048,8,t,e)}function Yv(t,e){return Hl(4,2,t,e)}function Xv(t,e){return Hl(4,4,t,e)}function Jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,Jv.bind(null,e,t),n)}function Pd(){}function e_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n_(t,e,n){return Or&21?(Yt(n,e)||(n=av(),Te.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function t1(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=ac.transition;ac.transition={};try{t(!1),e()}finally{fe=n,ac.transition=r}}function r_(){return Ut().memoizedState}function n1(t,e,n){var r=nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},s_(t))i_(e,n);else if(n=Fv(t,e,n,r),n!==null){var s=ht();Qt(n,t,r,s),o_(n,e,r)}}function r1(t,e,n){var r=nr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(t))i_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(s.next=s,Ed(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Fv(t,e,s,r),n!==null&&(s=ht(),Qt(n,t,r,s),o_(n,e,r))}}function s_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function i_(t,e){Mi=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}var hl={readContext:Ft,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},s1={readContext:Ft,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Da(4194308,4,Jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Da(4194308,4,t,e)},useInsertionEffect:function(t,e){return Da(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=n1.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Sm,useDebugValue:Pd,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Sm(!1),e=t[0];return t=t1.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,s=en();if(we){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Be===null)throw Error(L(349));Or&30||Wv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Am(qv.bind(null,r,i,t),[t]),r.flags|=2048,ao(9,Hv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=en(),e=Be.identifierPrefix;if(we){var n=wn,r=_n;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},i1={readContext:Ft,useCallback:e_,useContext:Ft,useEffect:Cd,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:Xv,useMemo:t_,useReducer:lc,useRef:Gv,useState:function(){return lc(oo)},useDebugValue:Pd,useDeferredValue:function(t){var e=Ut();return n_(e,Ve.memoizedState,t)},useTransition:function(){var t=lc(oo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:$v,useId:r_,unstable_isNewReconciler:!1},o1={readContext:Ft,useCallback:e_,useContext:Ft,useEffect:Cd,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:Xv,useMemo:t_,useReducer:uc,useRef:Gv,useState:function(){return uc(oo)},useDebugValue:Pd,useDeferredValue:function(t){var e=Ut();return Ve===null?e.memoizedState=t:n_(e,Ve.memoizedState,t)},useTransition:function(){var t=uc(oo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:$v,useId:r_,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),s=nr(t),i=Sn(r,s);i.payload=e,n!=null&&(i.callback=n),e=er(t,i,s),e!==null&&(Qt(e,t,s,r),Na(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),s=nr(t),i=Sn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=er(t,i,s),e!==null&&(Qt(e,t,s,r),Na(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=nr(t),s=Sn(n,r);s.tag=2,e!=null&&(s.callback=e),e=er(t,s,r),e!==null&&(Qt(e,t,r,n),Na(e,t,r))}};function xm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Zi(n,r)||!Zi(s,i):!0}function a_(t,e,n){var r=!1,s=lr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ft(i):(s=_t(e)?br:it.current,r=e.contextTypes,i=(r=r!=null)?Ps(t,s):lr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function uh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Td(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ft(i):(i=_t(e)?br:it.current,s.context=Ps(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(lh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ql.enqueueReplaceState(s,s.state,null),ll(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",r=e;do n+=OT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a1=typeof WeakMap=="function"?WeakMap:Map;function l_(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fl||(fl=!0,wh=r),ch(t,e)},n}function u_(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ch(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ch(t,e),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new a1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=E1.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var l1=On.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?jv(e,null,n,r):bs(e,t.child,n,r)}function Nm(t,e,n,r,s){n=n.render;var i=e.ref;return Ts(e,s),r=kd(t,e,n,r,i,s),n=Rd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Cn(t,e,s)):(we&&n&&md(e),e.flags|=1,ct(t,e,r,s),e.child)}function bm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!jd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,c_(t,e,i,r,s)):(t=La(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zi,n(o,r)&&t.ref===e.ref)return Cn(t,e,s)}return e.flags|=1,t=rr(i,r),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Zi(i,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Cn(t,e,s)}return hh(t,e,n,r,s)}function h_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ys,At),At|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ys,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(ys,At),At|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(ys,At),At|=r;return ct(t,e,s,n),e.child}function d_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hh(t,e,n,r,s){var i=_t(n)?br:it.current;return i=Ps(e,i),Ts(e,s),n=kd(t,e,n,r,i,s),r=Rd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Cn(t,e,s)):(we&&r&&md(e),e.flags|=1,ct(t,e,n,s),e.child)}function Dm(t,e,n,r,s){if(_t(n)){var i=!0;rl(e)}else i=!1;if(Ts(e,s),e.stateNode===null)Oa(t,e),a_(e,n,r),uh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ft(h):(h=_t(n)?br:it.current,h=Ps(e,h));var f=n.getDerivedStateFromProps,y=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&km(e,o,r,h),Bn=!1;var w=e.memoizedState;o.state=w,ll(e,r,o,s),u=e.memoizedState,l!==r||w!==u||vt.current||Bn?(typeof f=="function"&&(lh(e,n,f,r),u=e.memoizedState),(l=Bn||xm(e,n,l,r,w,u,h))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Uv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:$t(e.type,l),o.props=h,y=e.pendingProps,w=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=_t(n)?br:it.current,u=Ps(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||w!==u)&&km(e,o,r,u),Bn=!1,w=e.memoizedState,o.state=w,ll(e,r,o,s);var P=e.memoizedState;l!==y||w!==P||vt.current||Bn?(typeof k=="function"&&(lh(e,n,k,r),P=e.memoizedState),(h=Bn||xm(e,n,h,r,w,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return dh(t,e,n,r,i,s)}function dh(t,e,n,r,s,i){d_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&vm(e,n,!1),Cn(t,e,i);r=e.stateNode,l1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,i),e.child=bs(e,null,l,i)):ct(t,e,l,i),e.memoizedState=r.state,s&&vm(e,n,!0),e.child}function f_(t){var e=t.stateNode;e.pendingContext?ym(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ym(t,e.context,!1),Id(t,e.containerInfo)}function Om(t,e,n,r,s){return Ns(),yd(s),e.flags|=256,ct(t,e,n,r),e.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function p_(t,e,n){var r=e.pendingProps,s=Ee.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(Ee,s&1),t===null)return oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gl(o,r,0,null),t=Cr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ph(n),e.memoizedState=fh,t):Nd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return u1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=rr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=rr(l,i):(i=Cr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=fh,r}return i=t.child,t=i.sibling,r=rr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nd(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pa(t,e,n,r){return r!==null&&yd(r),bs(e,t.child,null,n),t=Nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=cc(Error(L(422))),pa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Gl({mode:"visible",children:r.children},s,0,null),i=Cr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=ph(o),e.memoizedState=fh,i);if(!(e.mode&1))return pa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=cc(i,r,void 0),pa(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=Be,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Rn(t,s),Qt(r,t,s,-1))}return Ld(),r=cc(Error(L(421))),pa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=T1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,xt=Zn(s.nextSibling),kt=e,we=!0,Ht=null,t!==null&&(bt[Dt++]=_n,bt[Dt++]=wn,bt[Dt++]=Dr,_n=t.id,wn=t.overflow,Dr=e),e=Nd(e,r.children),e.flags|=4096,e)}function Vm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ah(t.return,e,n)}function hc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function m_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ct(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,n,e);else if(t.tag===19)Vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),hc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ul(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}hc(e,!0,n,null,i);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c1(t,e,n){switch(e.tag){case 3:f_(e),Ns();break;case 5:Bv(e);break;case 1:_t(e.type)&&rl(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(ol,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?p_(t,e,n):(ge(Ee,Ee.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);ge(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return Cn(t,e,n)}var g_,mh,y_,v_;g_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mh=function(){};y_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Sr(sn.current);var i=null;switch(n){case"input":s=Lc(t,s),r=Lc(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=Uc(t,s),r=Uc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tl)}zc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(qi.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(qi.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};v_=function(t,e,n,r){n!==r&&(e.flags|=4)};function _i(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function h1(t,e,n){var r=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return _t(e.type)&&nl(),et(e),null;case 3:return r=e.stateNode,Ds(),_e(vt),_e(it),Ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Ih(Ht),Ht=null))),mh(t,e),et(e),null;case 5:Sd(e);var s=Sr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return et(e),null}if(t=Sr(sn.current),da(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[tn]=e,r[no]=i,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(s=0;s<xi.length;s++)ve(xi[s],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Wp(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":qp(r,i),ve("invalid",r)}zc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ha(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ha(r.textContent,l,t),s=["children",""+l]):qi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":ra(r),Hp(r,i,!0);break;case"textarea":ra(r),Kp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[no]=r,g_(t,e,!1,!1),e.stateNode=t;e:{switch(o=$c(n,r),n){case"dialog":ve("cancel",t),ve("close",t),s=r;break;case"iframe":case"object":case"embed":ve("load",t),s=r;break;case"video":case"audio":for(s=0;s<xi.length;s++)ve(xi[s],t);s=r;break;case"source":ve("error",t),s=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),s=r;break;case"details":ve("toggle",t),s=r;break;case"input":Wp(t,r),s=Lc(t,r),ve("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),ve("invalid",t);break;case"textarea":qp(t,r),s=Uc(t,r),ve("invalid",t);break;default:s=r}zc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Gy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ky(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ki(t,u):typeof u=="number"&&Ki(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ve("scroll",t):u!=null&&td(t,i,u,o))}switch(n){case"input":ra(t),Hp(t,r,!1);break;case"textarea":ra(t),Kp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?vs(t,!!r.multiple,i,!1):r.defaultValue!=null&&vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)v_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Sr(so.current),Sr(sn.current),da(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(i=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:ha(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return et(e),null;case 13:if(_e(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&xt!==null&&e.mode&1&&!(e.flags&128))Mv(),Ns(),e.flags|=98560,i=!1;else if(i=da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[tn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),i=!1}else Ht!==null&&(Ih(Ht),Ht=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Le===0&&(Le=3):Ld())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Ds(),mh(t,e),t===null&&eo(e.stateNode.containerInfo),et(e),null;case 10:return wd(e.type._context),et(e),null;case 17:return _t(e.type)&&nl(),et(e),null;case 19:if(_e(Ee),i=e.memoizedState,i===null)return et(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)_i(i,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ul(t),o!==null){for(e.flags|=128,_i(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ee,Ee.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ne()>Vs&&(e.flags|=128,r=!0,_i(i,!1),e.lanes=4194304)}else{if(!r)if(t=ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_i(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!we)return et(e),null}else 2*Ne()-i.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,r=!0,_i(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ne(),e.sibling=null,n=Ee.current,ge(Ee,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function d1(t,e){switch(gd(e),e.tag){case 1:return _t(e.type)&&nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),_e(vt),_e(it),Ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sd(e),null;case 13:if(_e(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ee),null;case 4:return Ds(),null;case 10:return wd(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var ma=!1,rt=!1,f1=typeof WeakSet=="function"?WeakSet:Set,$=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function gh(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Mm=!1;function p1(t,e){if(Zc=Ja,t=Iv(),pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,y=t,w=null;t:for(;;){for(var k;y!==n||s!==0&&y.nodeType!==3||(l=o+s),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(k=y.firstChild)!==null;)w=y,y=k;for(;;){if(y===t)break t;if(w===n&&++h===s&&(l=o),w===i&&++f===r&&(u=o),(k=y.nextSibling)!==null)break;y=w,w=y.parentNode}y=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},Ja=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,O=P.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:$t(e.type,N),O);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){xe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=Mm,Mm=!1,P}function Li(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&gh(e,n,i)}s=s.next}while(s!==r)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function __(t){var e=t.alternate;e!==null&&(t.alternate=null,__(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[no],delete e[rh],delete e[YI],delete e[XI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w_(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tl));else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}var $e=null,Wt=!1;function jn(t,e,n){for(n=n.child;n!==null;)E_(t,e,n),n=n.sibling}function E_(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:rt||gs(n,e);case 6:var r=$e,s=Wt;$e=null,jn(t,e,n),$e=r,Wt=s,$e!==null&&(Wt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Wt?(t=$e,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),Xi(t)):sc($e,n.stateNode));break;case 4:r=$e,s=Wt,$e=n.stateNode.containerInfo,Wt=!0,jn(t,e,n),$e=r,Wt=s;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&gh(n,e,o),s=s.next}while(s!==r)}jn(t,e,n);break;case 1:if(!rt&&(gs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,jn(t,e,n),rt=r):jn(t,e,n);break;default:jn(t,e,n)}}function jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f1),e.forEach(function(r){var s=I1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,Wt=!1;break e;case 3:$e=l.stateNode.containerInfo,Wt=!0;break e;case 4:$e=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if($e===null)throw Error(L(160));E_(i,o,s),$e=null,Wt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){xe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T_(e,t),e=e.sibling}function T_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Zt(t),r&4){try{Li(3,t,t.return),Kl(3,t)}catch(N){xe(t,t.return,N)}try{Li(5,t,t.return)}catch(N){xe(t,t.return,N)}}break;case 1:zt(e,t),Zt(t),r&512&&n!==null&&gs(n,n.return);break;case 5:if(zt(e,t),Zt(t),r&512&&n!==null&&gs(n,n.return),t.flags&32){var s=t.stateNode;try{Ki(s,"")}catch(N){xe(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Wy(s,i),$c(l,o);var h=$c(l,i);for(o=0;o<u.length;o+=2){var f=u[o],y=u[o+1];f==="style"?Gy(s,y):f==="dangerouslySetInnerHTML"?Ky(s,y):f==="children"?Ki(s,y):td(s,f,y,h)}switch(l){case"input":jc(s,i);break;case"textarea":Hy(s,i);break;case"select":var w=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?vs(s,!!i.multiple,k,!1):w!==!!i.multiple&&(i.defaultValue!=null?vs(s,!!i.multiple,i.defaultValue,!0):vs(s,!!i.multiple,i.multiple?[]:"",!1))}s[no]=i}catch(N){xe(t,t.return,N)}}break;case 6:if(zt(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(L(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){xe(t,t.return,N)}}break;case 3:if(zt(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xi(e.containerInfo)}catch(N){xe(t,t.return,N)}break;case 4:zt(e,t),Zt(t);break;case 13:zt(e,t),Zt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Od=Ne())),r&4&&jm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(h=rt)||f,zt(e,t),rt=h):zt(e,t),Zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(y=$=f;$!==null;){switch(w=$,k=w.child,w.tag){case 0:case 11:case 14:case 15:Li(4,w,w.return);break;case 1:gs(w,w.return);var P=w.stateNode;if(typeof P.componentWillUnmount=="function"){r=w,n=w.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){xe(r,n,N)}}break;case 5:gs(w,w.return);break;case 22:if(w.memoizedState!==null){Um(y);continue}}k!==null?(k.return=w,$=k):Um(y)}f=f.sibling}e:for(f=null,y=t;;){if(y.tag===5){if(f===null){f=y;try{s=y.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Qy("display",o))}catch(N){xe(t,t.return,N)}}}else if(y.tag===6){if(f===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(N){xe(t,t.return,N)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;f===y&&(f=null),y=y.return}f===y&&(f=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:zt(e,t),Zt(t),r&4&&jm(t);break;case 21:break;default:zt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w_(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ki(s,""),r.flags&=-33);var i=Lm(t);_h(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Lm(t);vh(t,l,o);break;default:throw Error(L(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m1(t,e,n){$=t,I_(t)}function I_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ma;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||rt;l=ma;var h=rt;if(ma=o,(rt=u)&&!h)for($=s;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Bm(s):u!==null?(u.return=o,$=u):Bm(s);for(;i!==null;)$=i,I_(i),i=i.sibling;$=s,ma=l,rt=h}Fm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):Fm(t)}}function Fm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Kl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Im(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Im(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var y=f.dehydrated;y!==null&&Xi(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}rt||e.flags&512&&yh(e)}catch(w){xe(e,e.return,w)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Um(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Bm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){xe(e,s,u)}}var i=e.return;try{yh(e)}catch(u){xe(e,i,u)}break;case 5:var o=e.return;try{yh(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var g1=Math.ceil,dl=On.ReactCurrentDispatcher,bd=On.ReactCurrentOwner,Mt=On.ReactCurrentBatchConfig,le=0,Be=null,De=null,qe=0,At=0,ys=fr(0),Le=0,lo=null,Vr=0,Ql=0,Dd=0,ji=null,gt=null,Od=0,Vs=1/0,gn=null,fl=!1,wh=null,tr=null,ga=!1,Qn=null,pl=0,Fi=0,Eh=null,Va=-1,Ma=0;function ht(){return le&6?Ne():Va!==-1?Va:Va=Ne()}function nr(t){return t.mode&1?le&2&&qe!==0?qe&-qe:ZI.transition!==null?(Ma===0&&(Ma=av()),Ma):(t=fe,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function Qt(t,e,n,r){if(50<Fi)throw Fi=0,Eh=null,Error(L(185));To(t,n,r),(!(le&2)||t!==Be)&&(t===Be&&(!(le&2)&&(Ql|=n),Le===4&&$n(t,qe)),wt(t,r),n===1&&le===0&&!(e.mode&1)&&(Vs=Ne()+500,Wl&&pr()))}function wt(t,e){var n=t.callbackNode;ZT(t,e);var r=Xa(t,t===Be?qe:0);if(r===0)n!==null&&Yp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yp(n),e===1)t.tag===0?JI(zm.bind(null,t)):Dv(zm.bind(null,t)),QI(function(){!(le&6)&&pr()}),n=null;else{switch(lv(r)){case 1:n=od;break;case 4:n=iv;break;case 16:n=Ya;break;case 536870912:n=ov;break;default:n=Ya}n=N_(n,S_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S_(t,e){if(Va=-1,Ma=0,le&6)throw Error(L(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var r=Xa(t,t===Be?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ml(t,r);else{e=r;var s=le;le|=2;var i=x_();(Be!==t||qe!==e)&&(gn=null,Vs=Ne()+500,Rr(t,e));do try{_1();break}catch(l){A_(t,l)}while(!0);_d(),dl.current=i,le=s,De!==null?e=0:(Be=null,qe=0,e=Le)}if(e!==0){if(e===2&&(s=Qc(t),s!==0&&(r=s,e=Th(t,s))),e===1)throw n=lo,Rr(t,0),$n(t,r),wt(t,Ne()),n;if(e===6)$n(t,r);else{if(s=t.current.alternate,!(r&30)&&!y1(s)&&(e=ml(t,r),e===2&&(i=Qc(t),i!==0&&(r=i,e=Th(t,i))),e===1))throw n=lo,Rr(t,0),$n(t,r),wt(t,Ne()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:wr(t,gt,gn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=Od+500-Ne(),10<e)){if(Xa(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=nh(wr.bind(null,t,gt,gn),e);break}wr(t,gt,gn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Kt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g1(r/1960))-r,10<r){t.timeoutHandle=nh(wr.bind(null,t,gt,gn),r);break}wr(t,gt,gn);break;case 5:wr(t,gt,gn);break;default:throw Error(L(329))}}}return wt(t,Ne()),t.callbackNode===n?S_.bind(null,t):null}function Th(t,e){var n=ji;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=ml(t,e),t!==2&&(e=gt,gt=n,e!==null&&Ih(e)),t}function Ih(t){gt===null?gt=t:gt.push.apply(gt,t)}function y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Yt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~Dd,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function zm(t){if(le&6)throw Error(L(327));Is();var e=Xa(t,0);if(!(e&1))return wt(t,Ne()),null;var n=ml(t,e);if(t.tag!==0&&n===2){var r=Qc(t);r!==0&&(e=r,n=Th(t,r))}if(n===1)throw n=lo,Rr(t,0),$n(t,e),wt(t,Ne()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,gt,gn),wt(t,Ne()),null}function Vd(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Vs=Ne()+500,Wl&&pr())}}function Mr(t){Qn!==null&&Qn.tag===0&&!(le&6)&&Is();var e=le;le|=1;var n=Mt.transition,r=fe;try{if(Mt.transition=null,fe=1,t)return t()}finally{fe=r,Mt.transition=n,le=e,!(le&6)&&pr()}}function Md(){At=ys.current,_e(ys)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KI(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:Ds(),_e(vt),_e(it),Ad();break;case 5:Sd(r);break;case 4:Ds();break;case 13:_e(Ee);break;case 19:_e(Ee);break;case 10:wd(r.type._context);break;case 22:case 23:Md()}n=n.return}if(Be=t,De=t=rr(t.current,null),qe=At=e,Le=0,lo=null,Dd=Ql=Vr=0,gt=ji=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ir=null}return t}function A_(t,e){do{var n=De;try{if(_d(),ba.current=hl,cl){for(var r=Te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}cl=!1}if(Or=0,Ue=Ve=Te=null,Mi=!1,io=0,bd.current=null,n===null||n.return===null){Le=1,lo=e,De=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,y=f.tag;if(!(f.mode&1)&&(y===0||y===11||y===15)){var w=f.alternate;w?(f.updateQueue=w.updateQueue,f.memoizedState=w.memoizedState,f.lanes=w.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Cm(o);if(k!==null){k.flags&=-257,Pm(k,o,l,i,e),k.mode&1&&Rm(i,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Rm(i,h,e),Ld();break e}u=Error(L(426))}}else if(we&&l.mode&1){var O=Cm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Pm(O,o,l,i,e),yd(Os(u,l));break e}}i=u=Os(u,l),Le!==4&&(Le=2),ji===null?ji=[i]:ji.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=l_(i,u,e);Tm(i,S);break e;case 1:l=u;var E=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(tr===null||!tr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=u_(i,l,e);Tm(i,D);break e}}i=i.return}while(i!==null)}R_(n)}catch(F){e=F,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function x_(){var t=dl.current;return dl.current=hl,t===null?hl:t}function Ld(){(Le===0||Le===3||Le===2)&&(Le=4),Be===null||!(Vr&268435455)&&!(Ql&268435455)||$n(Be,qe)}function ml(t,e){var n=le;le|=2;var r=x_();(Be!==t||qe!==e)&&(gn=null,Rr(t,e));do try{v1();break}catch(s){A_(t,s)}while(!0);if(_d(),le=n,dl.current=r,De!==null)throw Error(L(261));return Be=null,qe=0,Le}function v1(){for(;De!==null;)k_(De)}function _1(){for(;De!==null&&!WT();)k_(De)}function k_(t){var e=P_(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?R_(t):De=e,bd.current=null}function R_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d1(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,De=null;return}}else if(n=h1(n,e,At),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Le===0&&(Le=5)}function wr(t,e,n){var r=fe,s=Mt.transition;try{Mt.transition=null,fe=1,w1(t,e,n,r)}finally{Mt.transition=s,fe=r}return null}function w1(t,e,n,r){do Is();while(Qn!==null);if(le&6)throw Error(L(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(eI(t,i),t===Be&&(De=Be=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,N_(Ya,function(){return Is(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Mt.transition,Mt.transition=null;var o=fe;fe=1;var l=le;le|=4,bd.current=null,p1(t,n),T_(n,t),UI(eh),Ja=!!Zc,eh=Zc=null,t.current=n,m1(n),HT(),le=l,fe=o,Mt.transition=i}else t.current=n;if(ga&&(ga=!1,Qn=t,pl=s),i=t.pendingLanes,i===0&&(tr=null),QT(n.stateNode),wt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fl)throw fl=!1,t=wh,wh=null,t;return pl&1&&t.tag!==0&&Is(),i=t.pendingLanes,i&1?t===Eh?Fi++:(Fi=0,Eh=t):Fi=0,pr(),null}function Is(){if(Qn!==null){var t=lv(pl),e=Mt.transition,n=fe;try{if(Mt.transition=null,fe=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,pl=0,le&6)throw Error(L(331));var s=le;for(le|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Li(8,f,i)}var y=f.child;if(y!==null)y.return=f,$=y;else for(;$!==null;){f=$;var w=f.sibling,k=f.return;if(__(f),f===h){$=null;break}if(w!==null){w.return=k,$=w;break}$=k}}}var P=i.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Li(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,$=S;break e}$=i.return}}var E=t.current;for($=E;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=E;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Kl(9,l)}}catch(F){xe(l,l.return,F)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(le=s,pr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Fl,t)}catch{}r=!0}return r}finally{fe=n,Mt.transition=e}}return!1}function $m(t,e,n){e=Os(n,e),e=l_(t,e,1),t=er(t,e,1),e=ht(),t!==null&&(To(t,1,e),wt(t,e))}function xe(t,e,n){if(t.tag===3)$m(t,t,n);else for(;e!==null;){if(e.tag===3){$m(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){t=Os(n,t),t=u_(e,t,1),e=er(e,t,1),t=ht(),e!==null&&(To(e,1,t),wt(e,t));break}}e=e.return}}function E1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Ne()-Od?Rr(t,0):Dd|=n),wt(t,e)}function C_(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=ht();t=Rn(t,e),t!==null&&(To(t,e,n),wt(t,n))}function T1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C_(t,n)}function I1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),C_(t,n)}var P_;P_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,c1(t,e,n);yt=!!(t.flags&131072)}else yt=!1,we&&e.flags&1048576&&Ov(e,il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Oa(t,e),t=e.pendingProps;var s=Ps(e,it.current);Ts(e,n),s=kd(null,e,r,t,s,n);var i=Rd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(i=!0,rl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Td(e),s.updater=ql,e.stateNode=s,s._reactInternals=e,uh(e,r,t,n),e=dh(null,e,r,!0,i,n)):(e.tag=0,we&&i&&md(e),ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Oa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=A1(r),t=$t(r,t),s){case 0:e=hh(null,e,r,t,n);break e;case 1:e=Dm(null,e,r,t,n);break e;case 11:e=Nm(null,e,r,t,n);break e;case 14:e=bm(null,e,r,$t(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),hh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Dm(t,e,r,s,n);case 3:e:{if(f_(e),t===null)throw Error(L(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Uv(t,e),ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Os(Error(L(423)),e),e=Om(t,e,r,n,s);break e}else if(r!==s){s=Os(Error(L(424)),e),e=Om(t,e,r,n,s);break e}else for(xt=Zn(e.stateNode.containerInfo.firstChild),kt=e,we=!0,Ht=null,n=jv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),r===s){e=Cn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return Bv(e),t===null&&oh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,th(r,s)?o=null:i!==null&&th(r,i)&&(e.flags|=32),d_(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&oh(e),null;case 13:return p_(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Nm(t,e,r,s,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(ol,r._currentValue),r._currentValue=o,i!==null)if(Yt(i.value,o)){if(i.children===s.children&&!vt.current){e=Cn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ah(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ah(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ts(e,n),s=Ft(s),r=r(s),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,s=$t(r,e.pendingProps),s=$t(r.type,s),bm(t,e,r,s,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Oa(t,e),e.tag=1,_t(r)?(t=!0,rl(e)):t=!1,Ts(e,n),a_(e,r,s),uh(e,r,s,n),dh(null,e,r,!0,t,n);case 19:return m_(t,e,n);case 22:return h_(t,e,n)}throw Error(L(156,e.tag))};function N_(t,e){return sv(t,e)}function S1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new S1(t,e,n,r)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function A1(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rd)return 11;if(t===sd)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Cr(n.children,s,i,e);case nd:o=8,s|=8;break;case Dc:return t=Vt(12,n,e,s|2),t.elementType=Dc,t.lanes=i,t;case Oc:return t=Vt(13,n,e,s),t.elementType=Oc,t.lanes=i,t;case Vc:return t=Vt(19,n,e,s),t.elementType=Vc,t.lanes=i,t;case By:return Gl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fy:o=10;break e;case Uy:o=9;break e;case rd:o=11;break e;case sd:o=14;break e;case Un:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Cr(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function Gl(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=By,t.lanes=n,t.stateNode={isHidden:!1},t}function dc(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,r,s,i,o,l,u){return t=new x1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Vt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(i),t}function k1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b_(t){if(!t)return lr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(_t(n))return bv(t,n,e)}return e}function D_(t,e,n,r,s,i,o,l,u){return t=Fd(n,r,!0,t,s,i,o,l,u),t.context=b_(null),n=t.current,r=ht(),s=nr(n),i=Sn(r,s),i.callback=e??null,er(n,i,s),t.current.lanes=s,To(t,s,r),wt(t,r),t}function Yl(t,e,n,r){var s=e.current,i=ht(),o=nr(s);return n=b_(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=er(s,e,o),t!==null&&(Qt(t,s,o,i),Na(t,s,o)),o}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){Wm(t,e),(t=t.alternate)&&Wm(t,e)}function R1(){return null}var O_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}Xl.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Yl(t,e,null,null)};Xl.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Yl(null,t,null,null)}),e[kn]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&fv(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function C1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=gl(o);i.call(h)}}var o=D_(e,r,t,0,null,!1,!1,"",Hm);return t._reactRootContainer=o,t[kn]=o.current,eo(t.nodeType===8?t.parentNode:t),Mr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=gl(u);l.call(h)}}var u=Fd(t,0,!1,null,null,!1,!1,"",Hm);return t._reactRootContainer=u,t[kn]=u.current,eo(t.nodeType===8?t.parentNode:t),Mr(function(){Yl(e,u,n,r)}),u}function Zl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=gl(o);l.call(u)}}Yl(e,o,t,s)}else o=C1(n,e,t,s,r);return gl(o)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ai(e.pendingLanes);n!==0&&(ad(e,n|1),wt(e,Ne()),!(le&6)&&(Vs=Ne()+500,pr()))}break;case 13:Mr(function(){var r=Rn(t,1);if(r!==null){var s=ht();Qt(r,t,1,s)}}),Ud(t,1)}};ld=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=ht();Qt(e,t,134217728,n)}Ud(t,134217728)}};cv=function(t){if(t.tag===13){var e=nr(t),n=Rn(t,e);if(n!==null){var r=ht();Qt(n,t,e,r)}Ud(t,e)}};hv=function(){return fe};dv=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Hc=function(t,e,n){switch(e){case"input":if(jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=$l(r);if(!s)throw Error(L(90));$y(r),jc(r,s)}}}break;case"textarea":Hy(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};Jy=Vd;Zy=Mr;var P1={usingClientEntryPoint:!1,Events:[So,hs,$l,Yy,Xy,Vd]},wi={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N1={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||R1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Fl=ya.inject(N1),rn=ya}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(L(200));return k1(t,e,null,n)};Pt.createRoot=function(t,e){if(!zd(t))throw Error(L(299));var n=!1,r="",s=O_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,r,s),t[kn]=e.current,eo(t.nodeType===8?t.parentNode:t),new Bd(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Mr(t)};Pt.hydrate=function(t,e,n){if(!Jl(e))throw Error(L(200));return Zl(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=O_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=D_(e,null,t,1,n??null,s,!1,i,o),t[kn]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Xl(e)};Pt.render=function(t,e,n){if(!Jl(e))throw Error(L(200));return Zl(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(L(40));return t._reactRootContainer?(Mr(function(){Zl(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Vd;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Zl(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(t){console.error(t)}}V_(),Vy.exports=Pt;var b1=Vy.exports,qm=b1;Nc.createRoot=qm.createRoot,Nc.hydrateRoot=qm.hydrateRoot;/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Km=t=>{const e=O1(t);return e.charAt(0).toUpperCase()+e.slice(1)},M_=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),V1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>te.createElement("svg",{ref:u,...M1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:M_("lucide",s),...!i&&!V1(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>te.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(t,e)=>{const n=te.forwardRef(({className:r,...s},i)=>te.createElement(L1,{ref:i,iconNode:e,className:M_(`lucide-${D1(Km(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Km(t),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],F1=Ce("arrow-left",j1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],B1=Ce("arrow-right",U1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],L_=Ce("bug",z1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Sh=Ce("calendar",$1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Qm=Ce("circle-alert",W1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gm=Ce("circle-check",H1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],K1=Ce("eraser",q1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],G1=Ce("external-link",Q1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Ym=Ce("log-out",Y1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],J1=Ce("menu",X1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],j_=Ce("plus",Z1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],tS=Ce("refresh-cw",eS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],F_=Ce("save",nS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Xm=Ce("settings",rS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],iS=Ce("share-2",sS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],U_=Ce("shield-check",oS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],lS=Ce("sliders-vertical",aS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],B_=Ce("trash-2",uS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],z_=Ce("triangle-alert",cS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Jm=Ce("user",hS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],fS=Ce("users",dS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$d=Ce("x",pS),mS=({currentPage:t,onNavigate:e,isFirebaseConnected:n,user:r,onLogout:s,currentGroup:i,onGroupChange:o})=>{const[l,u]=te.useState(!1);return m.jsxs("nav",{className:"bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50",children:[m.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:m.jsxs("div",{className:"flex justify-between h-16",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsxs("div",{className:"flex-shrink-0 flex items-center text-primary cursor-pointer",onClick:()=>e("filling"),children:[m.jsx(U_,{className:"h-8 w-8 mr-2"}),m.jsx("span",{className:"font-bold text-lg hidden sm:block tracking-tight text-slate-800",children:"龍岡分隊假表管理"}),m.jsx("span",{className:"font-bold text-lg sm:hidden text-slate-800",children:"龍岡分隊"})]}),m.jsxs("div",{className:"hidden sm:ml-8 sm:flex sm:space-x-4",children:[m.jsxs("button",{onClick:()=>e("settings"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="settings"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[m.jsx(Xm,{className:"w-4 h-4 mr-2"}),"配額設定"]}),m.jsxs("button",{onClick:()=>e("filling"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="filling"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[m.jsx(Sh,{className:"w-4 h-4 mr-2"}),"假表填寫"]})]})]}),m.jsxs("div",{className:"flex items-center space-x-2 mx-4",children:[m.jsx("button",{onClick:()=>o("A"),className:`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${i==="A"?"bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm":"bg-white border-transparent text-gray-500 hover:bg-gray-50"}`,children:"A班"}),m.jsx("button",{onClick:()=>o("B"),className:`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${i==="B"?"bg-teal-50 border-teal-500 text-teal-700 shadow-sm":"bg-white border-transparent text-gray-500 hover:bg-gray-50"}`,children:"B班"})]}),m.jsx("div",{className:"hidden sm:flex items-center space-x-4",children:n&&r?m.jsxs("div",{className:"flex items-center pl-4 border-l border-slate-200",children:[m.jsxs("div",{className:"flex flex-col items-end mr-3",children:[m.jsx("span",{className:"text-sm font-semibold text-slate-700 max-w-[120px] truncate",children:r.displayName||"使用者"}),m.jsx("span",{className:"text-[10px] text-slate-400 max-w-[120px] truncate",children:r.email})]}),r.photoURL?m.jsx("img",{className:"h-9 w-9 rounded-full border-2 border-slate-100 shadow-sm",src:r.photoURL,alt:""}):m.jsx("div",{className:"h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200",children:m.jsx(Jm,{className:"h-5 w-5 text-slate-400"})}),m.jsx("button",{onClick:s,className:"ml-4 p-2 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors",title:"登出",children:m.jsx(Ym,{className:"w-5 h-5"})})]}):m.jsx("div",{className:"flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200",children:"本機模式"})}),m.jsx("div",{className:"flex items-center sm:hidden",children:m.jsx("button",{onClick:()=>u(!l),className:"inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none",children:l?m.jsx($d,{className:"block h-6 w-6"}):m.jsx(J1,{className:"block h-6 w-6"})})})]})}),l&&m.jsxs("div",{className:"sm:hidden border-t border-slate-100 bg-white",children:[m.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[m.jsxs("button",{onClick:()=>{e("settings"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="settings"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[m.jsx(Xm,{className:"w-5 h-5 mr-3"}),"配額設定"]}),m.jsxs("button",{onClick:()=>{e("filling"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="filling"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[m.jsx(Sh,{className:"w-5 h-5 mr-3"}),"假表填寫"]})]}),m.jsx("div",{className:"pt-4 pb-4 border-t border-slate-200 bg-slate-50",children:n&&r?m.jsxs("div",{className:"flex items-center px-4",children:[m.jsx("div",{className:"flex-shrink-0",children:r.photoURL?m.jsx("img",{className:"h-10 w-10 rounded-full border border-slate-200",src:r.photoURL,alt:""}):m.jsx("div",{className:"h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center",children:m.jsx(Jm,{className:"h-6 w-6 text-slate-400"})})}),m.jsxs("div",{className:"ml-3",children:[m.jsx("div",{className:"text-base font-medium text-slate-800",children:r.displayName||"使用者"}),m.jsx("div",{className:"text-sm font-medium text-slate-500",children:r.email})]}),m.jsx("button",{onClick:s,className:"ml-auto flex-shrink-0 p-2 rounded-full bg-white text-slate-400 hover:text-red-600 shadow-sm border border-slate-200",children:m.jsx(Ym,{className:"w-5 h-5"})})]}):m.jsx("div",{className:"px-4 py-2",children:m.jsx("div",{className:"text-center text-sm text-amber-700 bg-amber-100 py-1 rounded",children:"目前為本機離線模式"})})})]})]})},Zm=t=>new Date(t.getFullYear(),t.getMonth(),1),gS=t=>new Date(t.getFullYear(),t.getMonth()+1,0),yS=({start:t,end:e})=>{const n=[],r=new Date(t);for(;r<=e;)n.push(new Date(r)),r.setDate(r.getDate()+1);return n},va=(t,e)=>{if(e==="yyyy-MM-dd"){const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${s}`}return e==="d"?String(t.getDate()):""},vS=t=>t.getDay(),_S=t=>{const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)},wS=(t,e)=>{const n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((n-r)/(1e3*60*60*24))},$_=(t,e)=>{const n=new Date(t);return n.setMonth(n.getMonth()+e),n},ES=(t,e)=>$_(t,-1),TS=(t,e)=>{const n=new Date(t);return n.setDate(n.getDate()+e),n},IS=({settings:t,onSaveSettings:e,currentGroup:n})=>{const[r,s]=te.useState(t),[i,o]=te.useState(""),[l,u]=te.useState("2"),[h,f]=te.useState(null),[y,w]=te.useState(""),k=()=>n==="A"?r.membersA:r.membersB,P=()=>n==="A"?r.firstWorkDayA:r.firstWorkDayB,N=()=>n==="A"?r.dailyQuotasA:r.dailyQuotasB;te.useEffect(()=>{s(t)},[t]),te.useEffect(()=>{o(""),u("2")},[n]);const O=z=>{const H=new Date(r.year,r.month),K=z>0?$_(H,1):ES(H),ne={...r,year:K.getFullYear(),month:K.getMonth(),dailyQuotasA:{},dailyQuotasB:{}};s(ne),e(ne)},S=()=>{const z=k();if(i.trim()&&!z.includes(i.trim())){const H=[...z,i.trim()],K={...r};n==="A"?K.membersA=H:K.membersB=H,s(K),e(K),o("")}},E=z=>{const K=k().filter(he=>he!==z),ne={...r};n==="A"?ne.membersA=K:ne.membersB=K,s(ne),e(ne)},A=z=>{const H=Zm(new Date(r.year,r.month)),K=z===1?H:TS(H,1),ne=va(K,"yyyy-MM-dd"),he={...r};n==="A"?(he.firstWorkDayA=ne,he.dailyQuotasA={}):(he.firstWorkDayB=ne,he.dailyQuotasB={}),s(he),e(he)},D=z=>{const H=P();if(!H)return!0;const K=_S(H);return wS(z,K)%2===0},F=Zm(new Date(r.year,r.month)),j=gS(F),T=yS({start:F,end:j}),g=z=>{if(!P())return;const H={...N()};T.forEach(ne=>{if(D(ne)){const he=va(ne,"yyyy-MM-dd");z===0?delete H[he]:H[he]=z}});const K={...r};n==="A"?K.dailyQuotasA=H:K.dailyQuotasB=H,s(K),e(K)},_=()=>{const z=parseFloat(l);!isNaN(z)&&z>=0&&g(z)},v=(z,H)=>{f(z),w(H>0?H.toString():"")},x=()=>{if(!h)return;const z=parseFloat(y),H={...N()};isNaN(z)||z===0?delete H[h]:H[h]=z;const K={...r};n==="A"?K.dailyQuotasA=H:K.dailyQuotasB=H,s(K),e(K),f(null),w("")},R=P(),Oe=!!R?D(F)?1:2:null,re=k(),pt=N(),de=n==="A"?"text-indigo-600":"text-teal-600",U=n==="A"?"bg-indigo-50 border-indigo-200":"bg-teal-50 border-teal-200",q=n==="A"?"bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-600":"bg-teal-600 hover:bg-teal-700 focus:ring-teal-600",Y=n==="A"?"focus:border-indigo-600 focus:ring-indigo-600":"focus:border-teal-600 focus:ring-teal-600";return m.jsxs("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8",children:[m.jsxs("div",{className:"flex items-center mb-6",children:[m.jsx("h1",{className:"text-2xl font-bold text-gray-900 mr-3",children:"設定頁面"}),m.jsxs("span",{className:`px-3 py-1 rounded-full text-sm font-bold border ${U} ${de}`,children:["目前設定：",n,"班"]})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"bg-white shadow rounded-lg p-6 relative overflow-hidden",children:[m.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${n==="A"?"bg-indigo-500":"bg-teal-500"}`}),m.jsxs("h2",{className:"text-lg font-bold text-gray-900 mb-4 flex items-center",children:[m.jsx(Sh,{className:`w-5 h-5 mr-2 ${de}`}),"基本設定 (",n,"班)"]}),m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between bg-slate-50 p-3 rounded-md",children:[m.jsx("button",{onClick:()=>O(-1),className:"p-1 hover:bg-slate-200 rounded",children:m.jsx(F1,{className:"w-5 h-5 text-slate-600"})}),m.jsxs("span",{className:"text-lg font-semibold text-slate-800",children:[r.year,"年 ",r.month+1,"月"]}),m.jsx("button",{onClick:()=>O(1),className:"p-1 hover:bg-slate-200 rounded",children:m.jsx(B1,{className:"w-5 h-5 text-slate-600"})})]}),m.jsxs("div",{children:[m.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["當月首日上班日 (",n,"班)"]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[m.jsxs("button",{onClick:()=>A(1),className:`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${Oe===1?`bg-blue-50 border-current ${de}`:"bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[m.jsx("span",{className:"text-xl font-bold",children:"1號"}),m.jsx("span",{className:"text-xs mt-1 opacity-80",children:"基數日上班"}),Oe===1&&m.jsx("div",{className:`absolute top-2 right-2 ${de}`,children:m.jsx(Gm,{className:"w-4 h-4"})})]}),m.jsxs("button",{onClick:()=>A(2),className:`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${Oe===2?`bg-blue-50 border-current ${de}`:"bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[m.jsx("span",{className:"text-xl font-bold",children:"2號"}),m.jsx("span",{className:"text-xs mt-1 opacity-80",children:"偶數日上班"}),Oe===2&&m.jsx("div",{className:`absolute top-2 right-2 ${de}`,children:m.jsx(Gm,{className:"w-4 h-4"})})]})]})]})]})]}),m.jsxs("div",{className:"bg-white shadow rounded-lg p-6 relative overflow-hidden",children:[m.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${n==="A"?"bg-indigo-500":"bg-teal-500"}`}),m.jsx("div",{className:"flex items-center justify-between mb-4",children:m.jsxs("h2",{className:"text-lg font-bold text-gray-900 flex items-center",children:[m.jsx(fS,{className:`w-5 h-5 mr-2 ${de}`}),n,"班人員 (",re.length,")"]})}),m.jsxs("div",{className:"flex space-x-2 mb-4",children:[m.jsx("input",{type:"text",placeholder:"輸入姓名",value:i,onChange:z=>o(z.target.value),onKeyDown:z=>z.key==="Enter"&&S(),className:`flex-1 rounded-md border-gray-300 shadow-sm focus:ring-opacity-50 border p-2 text-sm focus:ring ${Y}`}),m.jsx("button",{onClick:S,disabled:!i.trim(),className:`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white focus:outline-none disabled:opacity-50 transition-colors ${q}`,children:m.jsx(j_,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:"max-h-[300px] overflow-y-auto space-y-2",children:[re.length===0&&m.jsxs("p",{className:"text-sm text-gray-400 text-center py-4",children:["暫無 ",n," 班人員資料"]}),re.map(z=>m.jsxs("div",{className:"flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100",children:[m.jsx("span",{className:"text-gray-800 font-medium",children:z}),m.jsx("button",{onClick:()=>E(z),className:"text-gray-400 hover:text-red-500 transition-colors",children:m.jsx(B_,{className:"w-4 h-4"})})]},z))]})]})]}),m.jsx("div",{className:"lg:col-span-2",children:m.jsxs("div",{className:"bg-white shadow rounded-lg p-6 h-full flex flex-col relative overflow-hidden",children:[m.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${n==="A"?"bg-indigo-500":"bg-teal-500"}`}),m.jsx("div",{className:"flex justify-between items-center mb-4",children:m.jsxs("h2",{className:"text-lg font-bold text-gray-900",children:[n,"班 - 可休人數配額設定"]})}),R?m.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4",children:[m.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-3 flex items-center",children:[m.jsx(lS,{className:`w-4 h-4 mr-2 ${de}`}),"批量配額設定"]}),m.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-end sm:items-center",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"每日可休人數"}),m.jsx("input",{type:"number",min:"0",step:"0.5",value:l,onChange:z=>u(z.target.value),className:`block w-full w-32 rounded-md border-gray-300 shadow-sm text-sm p-2 border focus:ring focus:ring-opacity-50 ${Y}`,placeholder:"例如: 2"})]}),m.jsxs("div",{className:"flex gap-2 w-full sm:w-auto",children:[m.jsx("button",{onClick:_,className:`flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition-colors ${q}`,children:"套用至本月上班日"}),m.jsxs("button",{onClick:()=>g(0),className:"flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none transition-colors",children:[m.jsx(K1,{className:"w-4 h-4 mr-1"}),"清除"]})]})]})]}):m.jsx("div",{className:"bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded-md",children:m.jsxs("div",{className:"flex",children:[m.jsx("div",{className:"flex-shrink-0",children:m.jsx(z_,{className:"h-5 w-5 text-amber-400","aria-hidden":"true"})}),m.jsx("div",{className:"ml-3",children:m.jsxs("p",{className:"text-sm text-amber-700",children:["請先在左側設定「",n,"班當月首日上班日」以啟用配額設定功能。"]})})]})}),m.jsx("div",{className:"flex-1 min-h-[500px]",children:m.jsxs("div",{className:"grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden h-full",children:[["日","一","二","三","四","五","六"].map(z=>m.jsx("div",{className:"bg-gray-100 py-2 text-center text-sm font-semibold text-gray-700",children:z},z)),T.map((z,H)=>{const K=va(z,"yyyy-MM-dd"),ne=D(z),he=pt[K],mt=he&&!Number.isInteger(he);let at="bg-white",Mo="";ne?(Mo="cursor-pointer transition-colors",mt?at="bg-yellow-50 hover:bg-yellow-100":he&&he>0?at="bg-green-50 hover:bg-green-100":at="bg-white hover:bg-gray-50"):at="bg-slate-100 cursor-not-allowed";const Lo=vS(z),Yr=H===0?{gridColumnStart:Lo===0?7:Lo+1}:{};return m.jsxs("div",{style:Yr,onClick:()=>R&&ne&&v(K,he||0),className:`${at} ${Mo} p-2 relative flex flex-col justify-between select-none min-h-[80px]`,children:[m.jsx("span",{className:`text-sm ${ne?"text-gray-900 font-medium":"text-gray-400"}`,children:va(z,"d")}),ne?m.jsx("div",{className:"flex-1 flex flex-col items-center justify-center",children:he?m.jsx("span",{className:`text-xl font-bold ${mt?"text-yellow-600":"text-green-600"}`,children:he}):m.jsx("span",{className:"text-xs text-gray-300",children:"設定配額"})}):m.jsx("div",{className:"flex-1 flex items-center justify-center",children:m.jsx("span",{className:"text-4xl font-black text-slate-300 opacity-50",children:"休"})})]},K)})]})})]})})]}),h&&m.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:m.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[m.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>f(null)}),m.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),m.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full",children:[m.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:m.jsx("div",{className:"sm:flex sm:items-start",children:m.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:text-left w-full",children:[m.jsxs("h3",{className:"text-lg leading-6 font-medium text-gray-900 mb-4",id:"modal-title",children:["設定配額 (",n,"班) - ",h]}),m.jsx("div",{className:"space-y-4",children:m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"可休人數"}),m.jsx("input",{type:"number",step:"0.5",min:"0",autoFocus:!0,value:y,onChange:z=>w(z.target.value),onKeyDown:z=>z.key==="Enter"&&x(),className:`shadow-sm block w-full sm:text-lg border-gray-300 rounded-md p-3 border focus:ring focus:ring-opacity-50 ${Y}`,placeholder:"請輸入數字"}),m.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["* 輸入 0 或留空代表清除配額。",m.jsx("br",{}),"* 整數：可排所有假別。",m.jsx("br",{}),"* 非整數(如0.5)：通常用於表示特殊假別，例如外宿配額。"]})]})})]})})}),m.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[m.jsxs("button",{type:"button",onClick:x,className:`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors ${q}`,children:[m.jsx(F_,{className:"w-4 h-4 mr-2"}),"儲存"]}),m.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors",onClick:()=>f(null),children:"取消"})]})]})]})})]})};var St=(t=>(t.Special1="特1",t.Special2="特2",t.Special3="特3",t.Comp1="補1",t.Comp2="補2",t.Comp3="補3",t.Comp4="補4",t.Rest1="休1",t.Rest2="休2",t.Rest3="休3",t.Rest4="休4",t.Overnight="外宿",t))(St||{});const W_=[St.Special1,St.Special2,St.Special3,St.Comp1,St.Comp2,St.Comp3,St.Comp4,St.Rest1,St.Rest2,St.Rest3,St.Rest4],SS=[St.Overnight],AS=[...W_,...SS],xS=["日","一","二","三","四","五","六"],Ei="shift_scheduler_v1",kS=t=>new Date(t.getFullYear(),t.getMonth(),1),RS=t=>new Date(t.getFullYear(),t.getMonth()+1,0),CS=({start:t,end:e})=>{const n=[],r=new Date(t);for(;r<=e;)n.push(new Date(r)),r.setDate(r.getDate()+1);return n},eg=(t,e)=>{if(e==="yyyy-MM-dd"){const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${s}`}return e==="d"?String(t.getDate()):""},PS=t=>t.getDay(),tg=t=>{const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)},NS=(t,e)=>{const n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((n-r)/(1e3*60*60*24))},bS=({settings:t,savedLeaves:e,onSaveLeaves:n,currentGroup:r})=>{const[s,i]=te.useState(e),[o,l]=te.useState(""),[u,h]=te.useState(null),[f,y]=te.useState(""),[w,k]=te.useState(!1),P=r==="A"?t.membersA:t.membersB,N=r==="A"?t.firstWorkDayA:t.firstWorkDayB,O=r==="A"?t.dailyQuotasA:t.dailyQuotasB,S=N&&P.length>0,E=r==="A"?"bg-indigo-600 hover:bg-indigo-700":"bg-teal-600 hover:bg-teal-700";te.useEffect(()=>{i(e)},[e]),te.useEffect(()=>{l("")},[r]);const A=()=>{n(s),k(!0),setTimeout(()=>k(!1),3e3)},D=()=>{navigator.clipboard.writeText(window.location.href),alert("連結已複製！")},F=re=>{if(!N)return!1;const pt=tg(re),de=tg(N);return NS(pt,de)%2===0},j=re=>O[re]||0,T=()=>{if(!u||!o||!f)return;const re={id:Math.random().toString(36).substr(2,9),date:u,memberName:o,type:f,timestamp:Date.now()},de=[...s.filter(U=>!(U.date===u&&U.memberName===o)),re];i(de),y(""),h(null)},g=re=>{i(pt=>pt.filter(de=>de.id!==re))},_=kS(new Date(t.year,t.month)),v=RS(_),x=CS({start:_,end:v}),R=u?j(u):0,I=Number.isInteger(R),Oe=u?I?W_:AS:[];return S?m.jsxs("div",{className:"max-w-7xl mx-auto py-2 sm:py-8 px-2 sm:px-6 lg:px-8",children:[m.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4",children:[m.jsxs("div",{children:[m.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 flex items-center",children:[m.jsxs("span",{className:`mr-2 px-2 py-0.5 rounded text-white text-base ${r==="A"?"bg-indigo-500":"bg-teal-500"}`,children:[r,"班"]}),t.year,"年 ",t.month+1,"月 假表填寫"]}),m.jsx("p",{className:"text-base sm:text-sm text-gray-500 mt-1",children:"請選擇您的姓名，點擊上班日期進行填寫。"})]}),m.jsxs("div",{className:"flex flex-wrap items-center gap-2 w-full md:w-auto",children:[m.jsxs("button",{onClick:D,className:"flex-1 md:flex-none justify-center inline-flex items-center px-3 py-3 sm:py-2 border border-gray-300 rounded-md shadow-sm text-sm sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",children:[m.jsx(iS,{className:"w-4 h-4 mr-2"}),"分享"]}),m.jsxs("button",{onClick:A,className:`flex-1 md:flex-none justify-center inline-flex items-center px-3 py-3 sm:py-2 border border-transparent rounded-md shadow-sm text-sm sm:text-sm font-medium text-white transition-colors ${E}`,children:[m.jsx(F_,{className:"w-4 h-4 mr-2"}),"儲存"]})]})]}),w&&m.jsx("div",{className:"fixed top-20 right-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50 animate-bounce",children:"儲存成功！"}),m.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-lg shadow mb-4 flex items-center space-x-2 sm:space-x-4 sticky top-16 z-40 border-b border-gray-100",children:[m.jsx("label",{className:"text-base sm:text-sm font-bold text-gray-700 whitespace-nowrap",children:"我是："}),m.jsxs("select",{value:o,onChange:re=>l(re.target.value),className:`block w-full max-w-xs rounded-md border-gray-300 border p-2 sm:p-2 text-base sm:text-sm shadow-sm focus:ring focus:ring-opacity-50 ${r==="A"?"focus:border-indigo-500 focus:ring-indigo-500":"focus:border-teal-500 focus:ring-teal-500"}`,children:[m.jsx("option",{value:"",children:"-- 請選擇姓名 --"}),P.map(re=>m.jsx("option",{value:re,children:re},re))]}),!o&&m.jsx("span",{className:"text-sm sm:text-sm text-red-500 animate-pulse font-medium",children:"請先選擇姓名"})]}),m.jsx("div",{className:"bg-white shadow rounded-lg overflow-hidden flex flex-col",children:m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("div",{className:"min-w-[500px] md:min-w-[800px]",children:[m.jsx("div",{className:"grid grid-cols-7 gap-px bg-gray-200 border-b border-gray-200",children:xS.map(re=>m.jsx("div",{className:"bg-gray-50 py-2 sm:py-3 text-center text-sm sm:text-sm font-bold text-gray-700",children:re},re))}),m.jsx("div",{className:"grid grid-cols-7 gap-px bg-gray-200",children:x.map((re,pt)=>{const de=eg(re,"yyyy-MM-dd"),U=F(de),q=j(de),Y=s.filter(ne=>ne.date===de&&P.includes(ne.memberName)),z=Y.length,H=q>0&&z>q,K=pt===0?{gridColumnStart:PS(re)+1}:{};return m.jsxs("div",{style:K,className:`min-h-[50px] sm:min-h-[60px] md:min-h-[120px] bg-white relative flex flex-col ${U?"":"bg-slate-50"}`,children:[m.jsxs("div",{className:"flex justify-between items-start p-1 sm:p-2",children:[m.jsx("span",{className:`text-base sm:text-sm font-medium ${U?"text-gray-900":"text-gray-400"}`,children:eg(re,"d")}),U&&q>0&&m.jsxs("div",{className:`flex items-center text-xs sm:text-xs px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full ${H?"bg-red-100 text-red-700 font-bold":"bg-green-100 text-green-700"}`,children:[z,"/",q,H&&m.jsx(Qm,{className:"w-3 h-3 ml-0.5"})]})]}),U?m.jsxs("div",{className:"flex-1 px-0.5 pb-0.5 sm:px-2 sm:pb-2 flex flex-col gap-1 sm:gap-1",children:[Y.map(ne=>{const he=o===ne.memberName;return m.jsxs("div",{className:`
                                flex justify-between items-center px-1 py-0.5 sm:px-2 sm:py-1.5 rounded border group
                                ${he?"bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-300 z-10":"bg-blue-50 text-blue-700 border-blue-100"}
                              `,children:[m.jsxs("div",{className:"flex-1 flex justify-between items-center overflow-hidden mr-1",children:[m.jsx("span",{className:"font-bold truncate text-xs sm:text-xs leading-tight",children:ne.memberName}),m.jsx("span",{className:"font-bold whitespace-nowrap text-xs sm:text-xs leading-tight ml-1",children:ne.type})]}),o===ne.memberName&&m.jsx("button",{onClick:mt=>{mt.stopPropagation(),g(ne.id)},className:"text-gray-400 hover:text-red-600 ml-1",children:m.jsx($d,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})})]},ne.id)}),o&&q>0&&m.jsx("button",{onClick:()=>{h(de),y("")},className:`mt-auto w-full flex justify-center items-center py-1 sm:py-1 border-2 border-dashed border-gray-200 rounded text-gray-400 transition-colors text-xs sm:text-xs h-6 sm:h-auto ${r==="A"?"hover:border-indigo-500 hover:text-indigo-500":"hover:border-teal-500 hover:text-teal-500"}`,children:m.jsx(j_,{className:"w-3 h-3 sm:w-3 sm:h-3"})})]}):m.jsx("div",{className:"flex-1 flex items-center justify-center",children:m.jsx("span",{className:"text-4xl sm:text-2xl md:text-5xl font-black text-slate-200 select-none",children:"O"})})]},de)})})]})})}),u&&m.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:m.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[m.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>h(null)}),m.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),m.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[m.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:m.jsx("div",{className:"sm:flex sm:items-start",children:m.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",children:[m.jsxs("h3",{className:"text-xl leading-6 font-medium text-gray-900 mb-4",id:"modal-title",children:["新增假單 - ",u," (",r,"班)"]}),m.jsxs("div",{className:"mb-4 text-base text-gray-500",children:[m.jsxs("p",{children:["填寫人：",m.jsx("span",{className:"font-bold text-gray-900",children:o})]}),m.jsxs("p",{children:["當日配額：",j(u)," (",I?"可選一般假別":"可選一般假別 + 外宿",")"]})]}),m.jsx("div",{className:"grid grid-cols-4 gap-2",children:Oe.map(re=>m.jsx("button",{onClick:()=>y(re),className:`p-3 text-base rounded border ${f===re?`${E} text-white border-transparent`:"bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`,children:re},re))})]})})}),m.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2 sm:gap-0",children:[m.jsx("button",{type:"button",disabled:!f,className:`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 text-base font-medium text-white focus:outline-none disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm transition-colors ${E}`,onClick:T,children:"確定新增"}),m.jsx("button",{type:"button",className:"mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>h(null),children:"取消"})]})]})]})})]}):m.jsxs("div",{className:"flex flex-col items-center justify-center h-[60vh] text-center px-4",children:[m.jsx(Qm,{className:"w-16 h-16 text-warning mb-4"}),m.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:[r,"班 設定尚未完成"]}),m.jsxs("p",{className:"text-gray-600 max-w-md",children:["請先返回「配額設定」頁面，設定「",r,"班當月首日上班日」並新增「團隊人員」，才能開始填寫假表。"]})]})},DS=({onLogin:t,loading:e,onShowDebug:n})=>{const[r,s]=te.useState(!1),[i,o]=te.useState(!1);te.useEffect(()=>{const u=navigator.userAgent||navigator.vendor||window.opera;s(/FBAN|FBAV|Line\/|Instagram|MicroMessenger/i.test(u)),o(/Line\//i.test(u))},[]);const l=()=>{if(window.location.search.includes("openExternalBrowser=1"))return;const u=new URL(window.location.href);u.searchParams.set("openExternalBrowser","1"),window.location.href=u.toString()};return m.jsx("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative",children:m.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200",children:[m.jsxs("div",{className:"bg-primary p-8 text-center relative overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 bg-blue-600 opacity-20 pattern-dots"}),m.jsxs("div",{className:"relative z-10",children:[m.jsx("div",{className:"mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner",children:m.jsx(U_,{className:"w-10 h-10 text-white"})}),m.jsx("h1",{className:"text-2xl font-bold text-white tracking-wide shadow-black drop-shadow-sm",children:"龍岡分隊假表管理"}),m.jsx("p",{className:"text-blue-100 mt-2 text-sm font-medium",children:"請登入以存取編輯權限"})]})]}),m.jsxs("div",{className:"p-8",children:[m.jsxs("div",{className:"text-center mb-8",children:[m.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-2",children:"歡迎回來"}),m.jsxs("p",{className:"text-slate-500 text-sm leading-relaxed",children:["為了確保資料安全與編輯歷程，",m.jsx("br",{}),"本系統採用 Google 帳號進行身分驗證。"]})]}),r&&m.jsx("div",{className:"mb-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded shadow-sm text-left",children:m.jsxs("div",{className:"flex",children:[m.jsx("div",{className:"flex-shrink-0",children:m.jsx(z_,{className:"h-5 w-5 text-amber-400"})}),m.jsxs("div",{className:"ml-3",children:[m.jsx("h3",{className:"text-sm font-bold text-amber-800",children:"偵測到應用程式內瀏覽器"}),m.jsxs("div",{className:"mt-2 text-sm text-amber-700",children:[m.jsx("p",{className:"mb-2",children:"Google 安全性政策不允許在 Line、Facebook 等應用程式內建瀏覽器登入 (錯誤 403)。"}),m.jsx("p",{className:"font-bold mb-1",children:"解決方法："}),i&&m.jsxs("button",{onClick:l,className:"mb-2 w-full text-center px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center",children:[m.jsx(G1,{className:"w-3 h-3 mr-1"}),"點此嘗試自動切換至瀏覽器"]}),m.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-1 text-xs sm:text-sm",children:[m.jsxs("li",{children:["點擊畫面角落的選單圖示 (通常是 ",m.jsx("span",{className:"font-bold",children:"⋮"})," 或 ",m.jsx("span",{className:"font-bold",children:"⋯"}),")"]}),m.jsxs("li",{children:["選擇 ",m.jsx("span",{className:"font-bold",children:"「在預設瀏覽器中開啟」"})," 或 ",m.jsx("span",{className:"font-bold",children:"「以 Safari/Chrome 開啟」"})]})]})]})]})]})}),m.jsx("button",{onClick:t,disabled:e||r,className:"w-full group relative flex items-center justify-center px-4 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100",children:e?m.jsxs("span",{className:"flex items-center",children:[m.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[m.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),m.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"登入中..."]}):m.jsxs("span",{className:"flex items-center",children:[m.jsx("svg",{className:"w-5 h-5 mr-3",viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:m.jsxs("g",{transform:"matrix(1, 0, 0, 1, 27.009001, -39.23856)",children:[m.jsx("path",{fill:"#4285F4",d:"M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"}),m.jsx("path",{fill:"#34A853",d:"M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.424 63.239 -14.754 63.239 Z"}),m.jsx("path",{fill:"#FBBC05",d:"M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"}),m.jsx("path",{fill:"#EA4335",d:"M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.424 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"})]})}),r?"請先切換至瀏覽器":"使用 Google 帳號登入"]})})]}),m.jsxs("div",{className:"bg-gray-50 p-4 text-center border-t border-gray-100 flex flex-col items-center w-full",children:[m.jsx("p",{className:"text-xs text-slate-400 mb-2",children:"© 龍岡分隊假表管理 | Secure Access"}),n&&m.jsxs("button",{onClick:n,className:"mt-1 text-[10px] text-slate-300 hover:text-slate-500 flex items-center",children:[m.jsx(L_,{className:"w-3 h-3 mr-1"})," Debug Info"]})]})]})})},yl="app_debug_logs",ke=(t,e="info")=>{try{const n=new Date,r=`${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}:${n.getSeconds().toString().padStart(2,"0")}.${n.getMilliseconds().toString().padStart(3,"0")}`,s={timestamp:r,message:t,type:e},i=localStorage.getItem(yl),o=i?JSON.parse(i):[],l=[s,...o].slice(0,50);localStorage.setItem(yl,JSON.stringify(l)),console.log(`[${r}] ${t}`)}catch(n){console.error("Logger error",n)}},OS=()=>{try{const t=localStorage.getItem(yl);return t?JSON.parse(t):[]}catch{return[]}},VS=()=>{localStorage.removeItem(yl)},pc=({isVisible:t,onClose:e})=>{const[n,r]=te.useState([]),s=()=>{r(OS())};return te.useEffect(()=>{if(t){s();const i=setInterval(s,1e3);return()=>clearInterval(i)}},[t]),t?m.jsxs("div",{className:"fixed inset-x-0 bottom-0 h-[50vh] bg-black/90 text-green-400 z-[10000] flex flex-col font-mono text-xs border-t-2 border-green-600 shadow-2xl",children:[m.jsxs("div",{className:"flex justify-between items-center p-2 bg-gray-900 border-b border-gray-700",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(L_,{className:"w-4 h-4"}),m.jsx("span",{className:"font-bold",children:"System Logs"})]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:s,className:"p-1 hover:bg-gray-700 rounded text-blue-400",children:m.jsx(tS,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>{VS(),s()},className:"p-1 hover:bg-gray-700 rounded text-red-400",children:m.jsx(B_,{className:"w-4 h-4"})}),m.jsx("button",{onClick:e,className:"p-1 hover:bg-gray-700 rounded text-gray-400",children:m.jsx($d,{className:"w-4 h-4"})})]})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-2 space-y-1",children:[n.length===0&&m.jsx("div",{className:"text-gray-500 italic",children:"No logs recorded."}),n.map((i,o)=>m.jsxs("div",{className:"border-b border-gray-800 pb-1 break-words",children:[m.jsxs("span",{className:"text-gray-500 mr-2",children:["[",i.timestamp,"]"]}),m.jsx("span",{className:i.type==="error"?"text-red-400 font-bold":i.type==="success"?"text-green-300 font-bold":i.type==="warn"?"text-yellow-400":"text-gray-300",children:i.message})]},o))]})]}):null};var ng={};/**
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
 */const H_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},MS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,y=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(w=64)),r.push(n[f],n[y],n[w],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||y==null)throw new LS;const w=i<<2|l>>4;if(r.push(w),h!==64){const k=l<<4&240|h>>2;if(r.push(k),y!==64){const P=h<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jS=function(t){const e=H_(t);return q_.encodeByteArray(e,!0)},vl=function(t){return jS(t).replace(/\./g,"")},K_=function(t){try{return q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const US=()=>FS().__FIREBASE_DEFAULTS__,BS=()=>{if(typeof process>"u"||typeof ng>"u")return;const t=ng.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&K_(t[1]);return e&&JSON.parse(e)},eu=()=>{try{return US()||BS()||zS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q_=t=>{var e,n;return(n=(e=eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$S=t=>{const e=Q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},G_=()=>{var t;return(t=eu())===null||t===void 0?void 0:t.config},Y_=t=>{var e;return(e=eu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class WS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function HS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function KS(){var t;const e=(t=eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function X_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YS(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XS(){return!KS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function J_(){try{return typeof indexedDB=="object"}catch{return!1}}function Z_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function JS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ZS="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZS,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Jt(s,l,r)}}function eA(t,e){return t.replace(tA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tA=/\{\$([^}]+)}/g;function nA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rg(i)&&rg(o)){if(!uo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rg(t){return t!==null&&typeof t=="object"}/**
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
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rA(t,e){const n=new sA(t,e);return n.subscribe.bind(n)}class sA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mc),s.error===void 0&&(s.error=mc),s.complete===void 0&&(s.complete=mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mc(){}/**
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
 */const oA=1e3,aA=2,lA=4*60*60*1e3,uA=.5;function sg(t,e=oA,n=aA){const r=e*Math.pow(n,t),s=Math.round(uA*r*(Math.random()-.5)*2);return Math.min(lA,r+s)}/**
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
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Er="[DEFAULT]";/**
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
 */class cA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dA(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hA(t){return t===Er?void 0:t}function dA(t){return t.instantiationMode==="EAGER"}/**
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
 */class fA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const pA={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},mA=oe.INFO,gA={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},yA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tu{constructor(e){this.name=e,this._logLevel=mA,this._logHandler=yA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const vA=(t,e)=>e.some(n=>t instanceof n);let ig,og;function _A(){return ig||(ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wA(){return og||(og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e0=new WeakMap,Ah=new WeakMap,t0=new WeakMap,gc=new WeakMap,Wd=new WeakMap;function EA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&e0.set(n,t)}).catch(()=>{}),Wd.set(e,t),e}function TA(t){if(Ah.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ah.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IA(t){xh=t(xh)}function SA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yc(this),e,...n);return t0.set(r,e.sort?e.sort():[e]),sr(r)}:wA().includes(t)?function(...e){return t.apply(yc(this),e),sr(e0.get(this))}:function(...e){return sr(t.apply(yc(this),e))}}function AA(t){return typeof t=="function"?SA(t):(t instanceof IDBTransaction&&TA(t),vA(t,_A())?new Proxy(t,xh):t)}function sr(t){if(t instanceof IDBRequest)return EA(t);if(gc.has(t))return gc.get(t);const e=AA(t);return e!==t&&(gc.set(t,e),Wd.set(e,t)),e}const yc=t=>Wd.get(t);function n0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(sr(o.result),u.oldVersion,u.newVersion,sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const xA=["get","getKey","getAll","getAllKeys","count"],kA=["put","add","delete","clear"],vc=new Map;function ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return vc.set(e,i),i}IA(t=>({...t,get:(e,n,r)=>ag(e,n)||t.get(e,n,r),has:(e,n)=>!!ag(e,n)||t.has(e,n)}));/**
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
 */class RA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kh="@firebase/app",lg="0.10.13";/**
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
 */const Pn=new tu("@firebase/app"),PA="@firebase/app-compat",NA="@firebase/analytics-compat",bA="@firebase/analytics",DA="@firebase/app-check-compat",OA="@firebase/app-check",VA="@firebase/auth",MA="@firebase/auth-compat",LA="@firebase/database",jA="@firebase/data-connect",FA="@firebase/database-compat",UA="@firebase/functions",BA="@firebase/functions-compat",zA="@firebase/installations",$A="@firebase/installations-compat",WA="@firebase/messaging",HA="@firebase/messaging-compat",qA="@firebase/performance",KA="@firebase/performance-compat",QA="@firebase/remote-config",GA="@firebase/remote-config-compat",YA="@firebase/storage",XA="@firebase/storage-compat",JA="@firebase/firestore",ZA="@firebase/vertexai-preview",ex="@firebase/firestore-compat",tx="firebase",nx="10.14.1";/**
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
 */const Rh="[DEFAULT]",rx={[kh]:"fire-core",[PA]:"fire-core-compat",[bA]:"fire-analytics",[NA]:"fire-analytics-compat",[OA]:"fire-app-check",[DA]:"fire-app-check-compat",[VA]:"fire-auth",[MA]:"fire-auth-compat",[LA]:"fire-rtdb",[jA]:"fire-data-connect",[FA]:"fire-rtdb-compat",[UA]:"fire-fn",[BA]:"fire-fn-compat",[zA]:"fire-iid",[$A]:"fire-iid-compat",[WA]:"fire-fcm",[HA]:"fire-fcm-compat",[qA]:"fire-perf",[KA]:"fire-perf-compat",[QA]:"fire-rc",[GA]:"fire-rc-compat",[YA]:"fire-gcs",[XA]:"fire-gcs-compat",[JA]:"fire-fst",[ex]:"fire-fst-compat",[ZA]:"fire-vertex","fire-js":"fire-js",[tx]:"fire-js-all"};/**
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
 */const _l=new Map,sx=new Map,Ch=new Map;function ug(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(Ch.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Ch.set(e,t);for(const n of _l.values())ug(n,t);for(const n of sx.values())ug(n,t);return!0}function Kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
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
 */const ix={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new qr("app","Firebase",ix);/**
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
 */class ox{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=nx;function r0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=G_()),!n)throw ir.create("no-options");const i=_l.get(s);if(i){if(uo(n,i.options)&&uo(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new fA(s);for(const u of Ch.values())o.addComponent(u);const l=new ox(n,r,o);return _l.set(s,l),l}function Hd(t=Rh){const e=_l.get(t);if(!e&&t===Rh&&G_())return r0();if(!e)throw ir.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let s=(r=rx[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(l.join(" "));return}cn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ax="firebase-heartbeat-database",lx=1,co="firebase-heartbeat-store";let _c=null;function s0(){return _c||(_c=n0(ax,lx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(co)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),_c}async function ux(t){try{const n=(await s0()).transaction(co),r=await n.objectStore(co).get(i0(t));return await n.done,r}catch(e){if(e instanceof Jt)Pn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function cg(t,e){try{const r=(await s0()).transaction(co,"readwrite");await r.objectStore(co).put(e,i0(t)),await r.done}catch(n){if(n instanceof Jt)Pn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function i0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cx=1024,hx=30*24*60*60*1e3;class dx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new px(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hg(),{heartbeatsToSend:r,unsentEntries:s}=fx(this._heartbeatsCache.heartbeats),i=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function hg(){return new Date().toISOString().substring(0,10)}function fx(t,e=cx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class px{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J_()?Z_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ux(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dg(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mx(t){cn(new Xt("platform-logger",e=>new RA(e),"PRIVATE")),cn(new Xt("heartbeat",e=>new dx(e),"PRIVATE")),Lt(kh,lg,t),Lt(kh,lg,"esm2017"),Lt("fire-js","")}mx("");var gx="firebase",yx="10.14.1";/**
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
 */Lt(gx,yx,"app");var fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,o0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function _(){}_.prototype=g.prototype,T.D=g.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(v,x,R){for(var I=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)I[Oe-2]=arguments[Oe];return g.prototype[x].apply(v,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,_){_||(_=0);var v=Array(16);if(typeof g=="string")for(var x=0;16>x;++x)v[x]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(x=0;16>x;++x)v[x]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=T.g[0],_=T.g[1],x=T.g[2];var R=T.g[3],I=g+(R^_&(x^R))+v[0]+3614090360&4294967295;g=_+(I<<7&4294967295|I>>>25),I=R+(x^g&(_^x))+v[1]+3905402710&4294967295,R=g+(I<<12&4294967295|I>>>20),I=x+(_^R&(g^_))+v[2]+606105819&4294967295,x=R+(I<<17&4294967295|I>>>15),I=_+(g^x&(R^g))+v[3]+3250441966&4294967295,_=x+(I<<22&4294967295|I>>>10),I=g+(R^_&(x^R))+v[4]+4118548399&4294967295,g=_+(I<<7&4294967295|I>>>25),I=R+(x^g&(_^x))+v[5]+1200080426&4294967295,R=g+(I<<12&4294967295|I>>>20),I=x+(_^R&(g^_))+v[6]+2821735955&4294967295,x=R+(I<<17&4294967295|I>>>15),I=_+(g^x&(R^g))+v[7]+4249261313&4294967295,_=x+(I<<22&4294967295|I>>>10),I=g+(R^_&(x^R))+v[8]+1770035416&4294967295,g=_+(I<<7&4294967295|I>>>25),I=R+(x^g&(_^x))+v[9]+2336552879&4294967295,R=g+(I<<12&4294967295|I>>>20),I=x+(_^R&(g^_))+v[10]+4294925233&4294967295,x=R+(I<<17&4294967295|I>>>15),I=_+(g^x&(R^g))+v[11]+2304563134&4294967295,_=x+(I<<22&4294967295|I>>>10),I=g+(R^_&(x^R))+v[12]+1804603682&4294967295,g=_+(I<<7&4294967295|I>>>25),I=R+(x^g&(_^x))+v[13]+4254626195&4294967295,R=g+(I<<12&4294967295|I>>>20),I=x+(_^R&(g^_))+v[14]+2792965006&4294967295,x=R+(I<<17&4294967295|I>>>15),I=_+(g^x&(R^g))+v[15]+1236535329&4294967295,_=x+(I<<22&4294967295|I>>>10),I=g+(x^R&(_^x))+v[1]+4129170786&4294967295,g=_+(I<<5&4294967295|I>>>27),I=R+(_^x&(g^_))+v[6]+3225465664&4294967295,R=g+(I<<9&4294967295|I>>>23),I=x+(g^_&(R^g))+v[11]+643717713&4294967295,x=R+(I<<14&4294967295|I>>>18),I=_+(R^g&(x^R))+v[0]+3921069994&4294967295,_=x+(I<<20&4294967295|I>>>12),I=g+(x^R&(_^x))+v[5]+3593408605&4294967295,g=_+(I<<5&4294967295|I>>>27),I=R+(_^x&(g^_))+v[10]+38016083&4294967295,R=g+(I<<9&4294967295|I>>>23),I=x+(g^_&(R^g))+v[15]+3634488961&4294967295,x=R+(I<<14&4294967295|I>>>18),I=_+(R^g&(x^R))+v[4]+3889429448&4294967295,_=x+(I<<20&4294967295|I>>>12),I=g+(x^R&(_^x))+v[9]+568446438&4294967295,g=_+(I<<5&4294967295|I>>>27),I=R+(_^x&(g^_))+v[14]+3275163606&4294967295,R=g+(I<<9&4294967295|I>>>23),I=x+(g^_&(R^g))+v[3]+4107603335&4294967295,x=R+(I<<14&4294967295|I>>>18),I=_+(R^g&(x^R))+v[8]+1163531501&4294967295,_=x+(I<<20&4294967295|I>>>12),I=g+(x^R&(_^x))+v[13]+2850285829&4294967295,g=_+(I<<5&4294967295|I>>>27),I=R+(_^x&(g^_))+v[2]+4243563512&4294967295,R=g+(I<<9&4294967295|I>>>23),I=x+(g^_&(R^g))+v[7]+1735328473&4294967295,x=R+(I<<14&4294967295|I>>>18),I=_+(R^g&(x^R))+v[12]+2368359562&4294967295,_=x+(I<<20&4294967295|I>>>12),I=g+(_^x^R)+v[5]+4294588738&4294967295,g=_+(I<<4&4294967295|I>>>28),I=R+(g^_^x)+v[8]+2272392833&4294967295,R=g+(I<<11&4294967295|I>>>21),I=x+(R^g^_)+v[11]+1839030562&4294967295,x=R+(I<<16&4294967295|I>>>16),I=_+(x^R^g)+v[14]+4259657740&4294967295,_=x+(I<<23&4294967295|I>>>9),I=g+(_^x^R)+v[1]+2763975236&4294967295,g=_+(I<<4&4294967295|I>>>28),I=R+(g^_^x)+v[4]+1272893353&4294967295,R=g+(I<<11&4294967295|I>>>21),I=x+(R^g^_)+v[7]+4139469664&4294967295,x=R+(I<<16&4294967295|I>>>16),I=_+(x^R^g)+v[10]+3200236656&4294967295,_=x+(I<<23&4294967295|I>>>9),I=g+(_^x^R)+v[13]+681279174&4294967295,g=_+(I<<4&4294967295|I>>>28),I=R+(g^_^x)+v[0]+3936430074&4294967295,R=g+(I<<11&4294967295|I>>>21),I=x+(R^g^_)+v[3]+3572445317&4294967295,x=R+(I<<16&4294967295|I>>>16),I=_+(x^R^g)+v[6]+76029189&4294967295,_=x+(I<<23&4294967295|I>>>9),I=g+(_^x^R)+v[9]+3654602809&4294967295,g=_+(I<<4&4294967295|I>>>28),I=R+(g^_^x)+v[12]+3873151461&4294967295,R=g+(I<<11&4294967295|I>>>21),I=x+(R^g^_)+v[15]+530742520&4294967295,x=R+(I<<16&4294967295|I>>>16),I=_+(x^R^g)+v[2]+3299628645&4294967295,_=x+(I<<23&4294967295|I>>>9),I=g+(x^(_|~R))+v[0]+4096336452&4294967295,g=_+(I<<6&4294967295|I>>>26),I=R+(_^(g|~x))+v[7]+1126891415&4294967295,R=g+(I<<10&4294967295|I>>>22),I=x+(g^(R|~_))+v[14]+2878612391&4294967295,x=R+(I<<15&4294967295|I>>>17),I=_+(R^(x|~g))+v[5]+4237533241&4294967295,_=x+(I<<21&4294967295|I>>>11),I=g+(x^(_|~R))+v[12]+1700485571&4294967295,g=_+(I<<6&4294967295|I>>>26),I=R+(_^(g|~x))+v[3]+2399980690&4294967295,R=g+(I<<10&4294967295|I>>>22),I=x+(g^(R|~_))+v[10]+4293915773&4294967295,x=R+(I<<15&4294967295|I>>>17),I=_+(R^(x|~g))+v[1]+2240044497&4294967295,_=x+(I<<21&4294967295|I>>>11),I=g+(x^(_|~R))+v[8]+1873313359&4294967295,g=_+(I<<6&4294967295|I>>>26),I=R+(_^(g|~x))+v[15]+4264355552&4294967295,R=g+(I<<10&4294967295|I>>>22),I=x+(g^(R|~_))+v[6]+2734768916&4294967295,x=R+(I<<15&4294967295|I>>>17),I=_+(R^(x|~g))+v[13]+1309151649&4294967295,_=x+(I<<21&4294967295|I>>>11),I=g+(x^(_|~R))+v[4]+4149444226&4294967295,g=_+(I<<6&4294967295|I>>>26),I=R+(_^(g|~x))+v[11]+3174756917&4294967295,R=g+(I<<10&4294967295|I>>>22),I=x+(g^(R|~_))+v[2]+718787259&4294967295,x=R+(I<<15&4294967295|I>>>17),I=_+(R^(x|~g))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(x+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var _=g-this.blockSize,v=this.B,x=this.h,R=0;R<g;){if(x==0)for(;R<=_;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<g;)if(v[x++]=T.charCodeAt(R++),x==this.blockSize){s(this,v),x=0;break}}else for(;R<g;)if(v[x++]=T[R++],x==this.blockSize){s(this,v),x=0;break}}this.h=x,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var _=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=_&255,_/=256;for(this.u(T),T=Array(16),g=_=0;4>g;++g)for(var v=0;32>v;v+=8)T[_++]=this.g[g]>>>v&255;return T};function i(T,g){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=g(T)}function o(T,g){this.h=g;for(var _=[],v=!0,x=T.length-1;0<=x;x--){var R=T[x]|0;v&&R==g||(_[x]=R,v=!1)}this.g=_}var l={};function u(T){return-128<=T&&128>T?i(T,function(g){return new o([g|0],0>g?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return O(h(-T));for(var g=[],_=1,v=0;T>=_;v++)g[v]=T/_|0,_*=4294967296;return new o(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return O(f(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),v=y,x=0;x<T.length;x+=8){var R=Math.min(8,T.length-x),I=parseInt(T.substring(x,x+R),g);8>R?(R=h(Math.pow(g,R)),v=v.j(R).add(h(I))):(v=v.j(_),v=v.add(h(I)))}return v}var y=u(0),w=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var T=0,g=1,_=0;_<this.g.length;_++){var v=this.i(_);T+=(0<=v?v:4294967296+v)*g,g*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(N(this))return"-"+O(this).toString(T);for(var g=h(Math.pow(T,6)),_=this,v="";;){var x=D(_,g).g;_=S(_,x.j(g));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=x,P(_))return R+v;for(;6>R.length;)R="0"+R;v=R+v}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=S(this,T),N(T)?-1:P(T)?0:1};function O(T){for(var g=T.g.length,_=[],v=0;v<g;v++)_[v]=~T.g[v];return new o(_,~T.h).add(w)}t.abs=function(){return N(this)?O(this):this},t.add=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],v=0,x=0;x<=g;x++){var R=v+(this.i(x)&65535)+(T.i(x)&65535),I=(R>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);v=I>>>16,R&=65535,I&=65535,_[x]=I<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(T,g){return T.add(O(g))}t.j=function(T){if(P(this)||P(T))return y;if(N(this))return N(T)?O(this).j(O(T)):O(O(this).j(T));if(N(T))return O(this.j(O(T)));if(0>this.l(k)&&0>T.l(k))return h(this.m()*T.m());for(var g=this.g.length+T.g.length,_=[],v=0;v<2*g;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var x=0;x<T.g.length;x++){var R=this.i(v)>>>16,I=this.i(v)&65535,Oe=T.i(x)>>>16,re=T.i(x)&65535;_[2*v+2*x]+=I*re,E(_,2*v+2*x),_[2*v+2*x+1]+=R*re,E(_,2*v+2*x+1),_[2*v+2*x+1]+=I*Oe,E(_,2*v+2*x+1),_[2*v+2*x+2]+=R*Oe,E(_,2*v+2*x+2)}for(v=0;v<g;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=g;v<2*g;v++)_[v]=0;return new o(_,0)};function E(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function A(T,g){this.g=T,this.h=g}function D(T,g){if(P(g))throw Error("division by zero");if(P(T))return new A(y,y);if(N(T))return g=D(O(T),g),new A(O(g.g),O(g.h));if(N(g))return g=D(T,O(g)),new A(O(g.g),g.h);if(30<T.g.length){if(N(T)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var _=w,v=g;0>=v.l(T);)_=F(_),v=F(v);var x=j(_,1),R=j(v,1);for(v=j(v,2),_=j(_,2);!P(v);){var I=R.add(v);0>=I.l(T)&&(x=x.add(_),R=I),v=j(v,1),_=j(_,1)}return g=S(T,x.j(g)),new A(x,g)}for(x=y;0<=T.l(g);){for(_=Math.max(1,Math.floor(T.m()/g.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),R=h(_),I=R.j(g);N(I)||0<I.l(T);)_-=v,R=h(_),I=R.j(g);P(R)&&(R=w),x=x.add(R),T=S(T,I)}return new A(x,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)&T.i(v);return new o(_,this.h&T.h)},t.or=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)|T.i(v);return new o(_,this.h|T.h)},t.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],v=0;v<g;v++)_[v]=this.i(v)^T.i(v);return new o(_,this.h^T.h)};function F(T){for(var g=T.g.length+1,_=[],v=0;v<g;v++)_[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(_,T.h)}function j(T,g){var _=g>>5;g%=32;for(var v=T.g.length-_,x=[],R=0;R<v;R++)x[R]=0<g?T.i(R+_)>>>g|T.i(R+_+1)<<32-g:T.i(R+_);return new o(x,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Pr=o}).apply(typeof fg<"u"?fg:typeof self<"u"?self:typeof window<"u"?window:{});var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var a0,ki,l0,ja,Ph,u0,c0,h0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _a=="object"&&_a];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var C=a[p];if(!(C in d))break e;d=d[C]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,p=!1,C={next:function(){if(!p&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function y(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function w(a,c,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,w.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,C,b){for(var B=Array(arguments.length-2),me=2;me<arguments.length;me++)B[me-2]=arguments[me];return c.prototype[C].apply(p,B)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const C=a.length||0,b=p.length||0;a.length=C+b;for(let B=0;B<b;B++)a[C+B]=p[B]}else a.push(p)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function j(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function T(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,c){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)a[d]=p[d];for(let b=0;b<_.length;b++)d=_[b],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function x(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Oe{constructor(){this.h=this.g=null}add(c,d){const p=re.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var re=new S(()=>new pt,a=>a.reset());class pt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let de,U=!1,q=new Oe,Y=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(z)}};var z=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){R(d)}var c=re;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}U=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var ne=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function he(a,c){if(K.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{D(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:mt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&he.aa.h.call(this)}}P(he,K);var mt={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var at="closure_listenable_"+(1e6*Math.random()|0),Mo=0;function Lo(a,c,d,p,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=C,this.key=++Mo,this.da=this.fa=!1}function Yr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function jo(a){this.src=a,this.g={},this.h=0}jo.prototype.add=function(a,c,d,p,C){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var B=wu(a,c,p,C);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new Lo(c,this.src,b,!!p,C),c.fa=d,a.push(c)),c};function _u(a,c){var d=c.type;if(d in a.g){var p=a.g[d],C=Array.prototype.indexOf.call(p,c,void 0),b;(b=0<=C)&&Array.prototype.splice.call(p,C,1),b&&(Yr(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wu(a,c,d,p){for(var C=0;C<a.length;++C){var b=a[C];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==p)return C}return-1}var Eu="closure_lm_"+(1e6*Math.random()|0),Tu={};function Ff(a,c,d,p,C){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Ff(a,c[b],d,p,C);return null}return d=zf(d),a&&a[at]?a.K(c,d,h(p)?!!p.capture:!1,C):PE(a,c,d,!1,p,C)}function PE(a,c,d,p,C,b){if(!c)throw Error("Invalid event type");var B=h(C)?!!C.capture:!!C,me=Su(a);if(me||(a[Eu]=me=new jo(a)),d=me.add(c,d,p,B,b),d.proxy)return d;if(p=NE(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)ne||(C=B),C===void 0&&(C=!1),a.addEventListener(c.toString(),p,C);else if(a.attachEvent)a.attachEvent(Bf(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function NE(){function a(d){return c.call(a.src,a.listener,d)}const c=bE;return a}function Uf(a,c,d,p,C){if(Array.isArray(c))for(var b=0;b<c.length;b++)Uf(a,c[b],d,p,C);else p=h(p)?!!p.capture:!!p,d=zf(d),a&&a[at]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=wu(b,d,p,C),-1<d&&(Yr(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Su(a))&&(c=a.g[c.toString()],a=-1,c&&(a=wu(c,d,p,C)),(d=-1<a?c[a]:null)&&Iu(d))}function Iu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[at])_u(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Bf(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Su(c))?(_u(d,a),d.h==0&&(d.src=null,c[Eu]=null)):Yr(a)}}}function Bf(a){return a in Tu?Tu[a]:Tu[a]="on"+a}function bE(a,c){if(a.da)a=!0;else{c=new he(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&Iu(a),a=d.call(p,c)}return a}function Su(a){return a=a[Eu],a instanceof jo?a:null}var Au="__closure_events_fn_"+(1e9*Math.random()>>>0);function zf(a){return typeof a=="function"?a:(a[Au]||(a[Au]=function(c){return a.handleEvent(c)}),a[Au])}function Ye(){H.call(this),this.i=new jo(this),this.M=this,this.F=null}P(Ye,H),Ye.prototype[at]=!0,Ye.prototype.removeEventListener=function(a,c,d,p){Uf(this,a,c,d,p)};function lt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new K(c,a);else if(c instanceof K)c.target=c.target||a;else{var C=c;c=new K(p,a),v(c,C)}if(C=!0,d)for(var b=d.length-1;0<=b;b--){var B=c.g=d[b];C=Fo(B,p,!0,c)&&C}if(B=c.g=a,C=Fo(B,p,!0,c)&&C,C=Fo(B,p,!1,c)&&C,d)for(b=0;b<d.length;b++)B=c.g=d[b],C=Fo(B,p,!1,c)&&C}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Yr(d[p]);delete a.g[c],a.h--}}this.F=null},Ye.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Ye.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Fo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,b=0;b<c.length;++b){var B=c[b];if(B&&!B.da&&B.capture==d){var me=B.listener,ze=B.ha||B.src;B.fa&&_u(a.i,B),C=me.call(ze,p)!==!1&&C}}return C&&!p.defaultPrevented}function $f(a,c,d){if(typeof a=="function")d&&(a=w(a,d));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Wf(a){a.g=$f(()=>{a.g=null,a.i&&(a.i=!1,Wf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class DE extends H{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Wf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(a){H.call(this),this.h=a,this.g={}}P(ei,H);var Hf=[];function qf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&Iu(c)},a),a.g={}}ei.prototype.N=function(){ei.aa.N.call(this),qf(this)},ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xu=l.JSON.stringify,OE=l.JSON.parse,VE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ku(){}ku.prototype.h=null;function Kf(a){return a.h||(a.h=a.i())}function Qf(){}var ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ru(){K.call(this,"d")}P(Ru,K);function Cu(){K.call(this,"c")}P(Cu,K);var mr={},Gf=null;function Uo(){return Gf=Gf||new Ye}mr.La="serverreachability";function Yf(a){K.call(this,mr.La,a)}P(Yf,K);function ni(a){const c=Uo();lt(c,new Yf(c))}mr.STAT_EVENT="statevent";function Xf(a,c){K.call(this,mr.STAT_EVENT,a),this.stat=c}P(Xf,K);function ut(a){const c=Uo();lt(c,new Xf(c,a))}mr.Ma="timingevent";function Jf(a,c){K.call(this,mr.Ma,a),this.size=c}P(Jf,K);function ri(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function si(){this.g=!0}si.prototype.xa=function(){this.g=!1};function ME(a,c,d,p,C,b){a.info(function(){if(a.g)if(b)for(var B="",me=b.split("&"),ze=0;ze<me.length;ze++){var ue=me[ze].split("=");if(1<ue.length){var Xe=ue[0];ue=ue[1];var Je=Xe.split("_");B=2<=Je.length&&Je[1]=="type"?B+(Xe+"="+ue+"&"):B+(Xe+"=redacted&")}}else B=null;else B=b;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+d+`
`+B})}function LE(a,c,d,p,C,b,B){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+d+`
`+b+" "+B})}function Xr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+FE(a,d)+(p?" "+p:"")})}function jE(a,c){a.info(function(){return"TIMEOUT: "+c})}si.prototype.info=function(){};function FE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var b=C[0];if(b!="noop"&&b!="stop"&&b!="close")for(var B=1;B<C.length;B++)C[B]=""}}}}return xu(d)}catch{return c}}var Bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pu;function zo(){}P(zo,ku),zo.prototype.g=function(){return new XMLHttpRequest},zo.prototype.i=function(){return{}},Pu=new zo;function Vn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new ei(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ep}function ep(){this.i=null,this.g="",this.h=!1}var tp={},Nu={};function bu(a,c,d){a.L=1,a.v=qo(pn(c)),a.m=d,a.P=!0,np(a,null)}function np(a,c){a.F=Date.now(),$o(a),a.A=pn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),gp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new ep,a.g=Op(a.j,d?c:null,!a.m),0<a.O&&(a.M=new DE(w(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Hf[0]=C.toString()),C=Hf);for(var b=0;b<C.length;b++){var B=Ff(d,C[b],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ni(),ME(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const c=this.M;c&&mn(a)==3?c.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=mn(this.g);var c=this.g.Ba();const es=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Ip(this.g)))){this.J||Je!=4||c==7||(c==8||0>=es?ni(3):ni(2)),Du(this);var d=this.g.Z();this.X=d;t:if(rp(this)){var p=Ip(this.g);a="";var C=p.length,b=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),ii(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(b&&c==C-1)});p.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,LE(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var me,ze=this.g;if((me=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(me)){var ue=me;break t}}ue=null}if(d=ue)Xr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ou(this,d);else{this.o=!1,this.s=3,ut(12),gr(this),ii(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<B.length;)if(Bt=UE(this,B),Bt==Nu){Je==4&&(this.s=4,ut(14),d=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==tp){this.s=4,ut(15),Xr(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Xr(this.i,this.l,Bt,null),Ou(this,Bt);if(rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||B.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)Xr(this.i,this.l,B,"[Invalid Chunked Response]"),gr(this),ii(this);else if(0<B.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Uu(Xe),Xe.M=!0,ut(11))}}else Xr(this.i,this.l,B,null),Ou(this,B);Je==4&&gr(this),this.o&&!this.J&&(Je==4?Pp(this.j,this):(this.o=!1,$o(this)))}else rT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),gr(this),ii(this)}}}catch{}finally{}};function rp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function UE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Nu:(d=Number(c.substring(d,p)),isNaN(d)?tp:(p+=1,p+d>c.length?Nu:(c=c.slice(p,p+d),a.C=p+d,c)))}Vn.prototype.cancel=function(){this.J=!0,gr(this)};function $o(a){a.S=Date.now()+a.I,sp(a,a.I)}function sp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ri(w(a.ba,a),c)}function Du(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jE(this.i,this.A),this.L!=2&&(ni(),ut(17)),gr(this),this.s=2,ii(this)):sp(this,this.S-a)};function ii(a){a.j.G==0||a.J||Pp(a.j,a)}function gr(a){Du(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,qf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ou(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Vu(d.h,a))){if(!a.K&&Vu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Jo(d),Yo(d);else break e;Fu(d),ut(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ri(w(d.Za,d),6e3));if(1>=ap(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vr(d,11)}else if((a.K||d.g==a)&&Jo(d),!E(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ue=C[c];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const Xe=ue[3];Xe!=null&&(d.la=Xe,d.j.info("VER="+d.la));const Je=ue[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const es=ue[5];es!=null&&typeof es=="number"&&0<es&&(p=1.5*es,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Bt=a.g;if(Bt){const ea=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ea){var b=p.h;b.g||ea.indexOf("spdy")==-1&&ea.indexOf("quic")==-1&&ea.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Mu(b,b.h),b.h=null))}if(p.D){const Bu=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Bu&&(p.ya=Bu,ye(p.I,p.D,Bu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var B=a;if(p.qa=Dp(p,p.J?p.ia:null,p.W),B.K){lp(p.h,B);var me=B,ze=p.L;ze&&(me.I=ze),me.B&&(Du(me),$o(me)),p.g=B}else Rp(p);0<d.i.length&&Xo(d)}else ue[0]!="stop"&&ue[0]!="close"||vr(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?vr(d,7):ju(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}ni(4)}catch{}}var BE=class{constructor(a,c){this.g=a,this.map=c}};function ip(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function op(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ap(a){return a.h?1:a.g?a.g.size:0}function Vu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Mu(a,c){a.g?a.g.add(c):a.h=c}function lp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}ip.prototype.cancel=function(){if(this.i=up(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function up(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function zE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function $E(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function cp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=$E(a),p=zE(a),C=p.length,b=0;b<C;b++)c.call(void 0,p[b],d&&d[b],a)}var hp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),C=null;if(0<=p){var b=a[d].substring(0,p);C=a[d].substring(p+1)}else b=a[d];c(b,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function yr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof yr){this.h=a.h,Wo(this,a.j),this.o=a.o,this.g=a.g,Ho(this,a.s),this.l=a.l;var c=a.i,d=new li;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),dp(this,d),this.m=a.m}else a&&(c=String(a).match(hp))?(this.h=!1,Wo(this,c[1]||"",!0),this.o=oi(c[2]||""),this.g=oi(c[3]||"",!0),Ho(this,c[4]),this.l=oi(c[5]||"",!0),dp(this,c[6]||"",!0),this.m=oi(c[7]||"")):(this.h=!1,this.i=new li(null,this.h))}yr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ai(c,fp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ai(c,fp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ai(d,d.charAt(0)=="/"?KE:qE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ai(d,GE)),a.join("")};function pn(a){return new yr(a)}function Wo(a,c,d){a.j=d?oi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ho(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function dp(a,c,d){c instanceof li?(a.i=c,YE(a.i,a.h)):(d||(c=ai(c,QE)),a.i=new li(c,a.h))}function ye(a,c,d){a.i.set(c,d)}function qo(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ai(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,HE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fp=/[#\/\?@]/g,qE=/[#\?:]/g,KE=/[#\?]/g,QE=/[#\?@]/g,GE=/#/g;function li(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&WE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=li.prototype,t.add=function(a,c){Mn(this),this.i=null,a=Jr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function pp(a,c){Mn(a),c=Jr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function mp(a,c){return Mn(a),c=Jr(a,c),a.g.has(c)}t.forEach=function(a,c){Mn(this),this.g.forEach(function(d,p){d.forEach(function(C){a.call(c,C,p,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const C=a[p];for(let b=0;b<C.length;b++)d.push(c[p])}return d},t.V=function(a){Mn(this);let c=[];if(typeof a=="string")mp(this,a)&&(c=c.concat(this.g.get(Jr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Mn(this),this.i=null,a=Jr(this,a),mp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function gp(a,c,d){pp(a,c),0<d.length&&(a.i=null,a.g.set(Jr(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const b=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var C=b;B[p]!==""&&(C+="="+encodeURIComponent(String(B[p]))),a.push(C)}}return this.i=a.join("&")};function Jr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function YE(a,c){c&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(pp(this,p),gp(this,C,d))},a)),a.j=c}function XE(a,c){const d=new si;if(l.Image){const p=new Image;p.onload=k(Ln,d,"TestLoadImage: loaded",!0,c,p),p.onerror=k(Ln,d,"TestLoadImage: error",!1,c,p),p.onabort=k(Ln,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=k(Ln,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function JE(a,c){const d=new si,p=new AbortController,C=setTimeout(()=>{p.abort(),Ln(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(b=>{clearTimeout(C),b.ok?Ln(d,"TestPingServer: ok",!0,c):Ln(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Ln(d,"TestPingServer: error",!1,c)})}function Ln(a,c,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function ZE(){this.g=new VE}function eT(a,c,d){const p=d||"";try{cp(a,function(C,b){let B=C;h(C)&&(B=xu(C)),c.push(p+b+"="+encodeURIComponent(B))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function Ko(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ko,ku),Ko.prototype.g=function(){return new Qo(this.l,this.j)},Ko.prototype.i=function(a){return function(){return a}}({});function Qo(a,c){Ye.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Qo,Ye),t=Qo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ci(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function yp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ui(this):ci(this),this.readyState==3&&yp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ui(this))},t.Qa=function(a){this.g&&(this.response=a,ui(this))},t.ga=function(){this.g&&ui(this)};function ui(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ci(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ci(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vp(a){let c="";return j(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Lu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=vp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ye(a,c,d))}function Ae(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ae,Ye);var tT=/^https?$/i,nT=["POST","PUT"];t=Ae.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pu.g(),this.v=this.o?Kf(this.o):Kf(Pu),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){_p(this,b);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())d.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(nT,c,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,B]of d)this.g.setRequestHeader(b,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){_p(this,b)}};function _p(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,wp(a),Go(a)}function wp(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),Go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ep(this):this.bb())},t.bb=function(){Ep(this)};function Ep(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)$f(a.Ea,0,a);else if(lt(a,"readystatechange"),mn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=B===0){var C=String(a.D).match(hp)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!tT.test(C?C.toLowerCase():"")}d=p}if(d)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var b=2<mn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",wp(a)}}finally{Go(a)}}}}function Go(a,c){if(a.g){Tp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||lt(a,"ready");try{d.onreadystatechange=p}catch{}}}function Tp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),OE(c)}};function Ip(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function rT(a){const c={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=x(a[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[C]||[];c[C]=b,b.push(d)}T(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Sp(a){this.Aa=0,this.i=[],this.j=new si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hi("baseRetryDelayMs",5e3,a),this.cb=hi("retryDelaySeedMs",1e4,a),this.Wa=hi("forwardChannelMaxRetries",2,a),this.wa=hi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ip(a&&a.concurrentRequestLimit),this.Da=new ZE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){ut(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Dp(this,null,this.W),Xo(this)};function ju(a){if(Ap(a),a.G==3){var c=a.U++,d=pn(a.I);if(ye(d,"SID",a.K),ye(d,"RID",c),ye(d,"TYPE","terminate"),di(a,d),c=new Vn(a,a.j,c),c.L=2,c.v=qo(pn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Op(c.j,null),c.g.ea(c.v)),c.F=Date.now(),$o(c)}bp(a)}function Yo(a){a.g&&(Uu(a),a.g.cancel(),a.g=null)}function Ap(a){Yo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Jo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Xo(a){if(!op(a.h)&&!a.s){a.s=!0;var c=a.Ga;de||Y(),U||(de(),U=!0),q.add(c,a),a.B=0}}function sT(a,c){return ap(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ri(w(a.Ga,a,c),Np(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Vn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=g(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(C.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=kp(this,C,c),d=pn(this.I),ye(d,"RID",a),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),di(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(vp(b)))+"&"+c:this.m&&Lu(d,this.m,b)),Mu(this.h,C),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",c),ye(d,"SID","null"),C.T=!0,bu(C,d,null)):bu(C,d,c),this.G=2}}else this.G==3&&(a?xp(this,a):this.i.length==0||op(this.h)||xp(this))};function xp(a,c){var d;c?d=c.l:d=a.U++;const p=pn(a.I);ye(p,"SID",a.K),ye(p,"RID",d),ye(p,"AID",a.T),di(a,p),a.m&&a.o&&Lu(p,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=kp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mu(a.h,d),bu(d,p,c)}function di(a,c){a.H&&j(a.H,function(d,p){ye(c,p,d)}),a.l&&cp({},function(d,p){ye(c,p,d)})}function kp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?w(a.l.Na,a.l,a):null;e:{var C=a.i;let b=-1;for(;;){const B=["count="+d];b==-1?0<d?(b=C[0].g,B.push("ofs="+b)):b=0:B.push("ofs="+b);let me=!0;for(let ze=0;ze<d;ze++){let ue=C[ze].g;const Xe=C[ze].map;if(ue-=b,0>ue)b=Math.max(0,C[ze].g-100),me=!1;else try{eT(Xe,B,"req"+ue+"_")}catch{p&&p(Xe)}}if(me){p=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function Rp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;de||Y(),U||(de(),U=!0),q.add(c,a),a.v=0}}function Fu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ri(w(a.Fa,a),Np(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ri(w(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Yo(this),Cp(this))};function Uu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cp(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=pn(a.qa);ye(c,"RID","rpc"),ye(c,"SID",a.K),ye(c,"AID",a.T),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(c,"TO",a.ja),ye(c,"TYPE","xmlhttp"),di(a,c),a.m&&a.o&&Lu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=qo(pn(c)),d.m=null,d.P=!0,np(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Yo(this),Fu(this),ut(19))};function Jo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Pp(a,c){var d=null;if(a.g==c){Jo(a),Uu(a),a.g=null;var p=2}else if(Vu(a.h,c))d=c.D,lp(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;p=Uo(),lt(p,new Jf(p,d)),Xo(a)}else Rp(a);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&sT(a,c)||p==2&&Fu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function Np(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function vr(a,c){if(a.j.info("Error code "+c),c==2){var d=w(a.fb,a),p=a.Xa;const C=!p;p=new yr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wo(p,"https"),qo(p),C?XE(p.toString(),d):JE(p.toString(),d)}else ut(2);a.G=0,a.l&&a.l.sa(c),bp(a),Ap(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function bp(a){if(a.G=0,a.ka=[],a.l){const c=up(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Dp(a,c,d){var p=d instanceof yr?pn(d):new yr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Ho(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var b=new yr(null);p&&Wo(b,p),c&&(b.g=c),C&&Ho(b,C),d&&(b.l=d),p=b}return d=a.D,c=a.ya,d&&c&&ye(p,d,c),ye(p,"VER",a.la),di(a,p),p}function Op(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ae(new Ko({eb:d})):new Ae(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vp(){}t=Vp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zo(){}Zo.prototype.g=function(a,c){return new It(a,c)};function It(a,c){Ye.call(this),this.g=new Sp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Zr(this)}P(It,Ye),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){ju(this.g)},It.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=xu(a),a=d);c.i.push(new BE(c.Ya++,a)),c.G==3&&Xo(c)},It.prototype.N=function(){this.g.l=null,delete this.j,ju(this.g),delete this.g,It.aa.N.call(this)};function Mp(a){Ru.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Mp,Ru);function Lp(){Cu.call(this),this.status=1}P(Lp,Cu);function Zr(a){this.g=a}P(Zr,Vp),Zr.prototype.ua=function(){lt(this.g,"a")},Zr.prototype.ta=function(a){lt(this.g,new Mp(a))},Zr.prototype.sa=function(a){lt(this.g,new Lp)},Zr.prototype.ra=function(){lt(this.g,"b")},Zo.prototype.createWebChannel=Zo.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,h0=function(){return new Zo},c0=function(){return Uo()},u0=mr,Ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bo.NO_ERROR=0,Bo.TIMEOUT=8,Bo.HTTP_ERROR=6,ja=Bo,Zf.COMPLETE="complete",l0=Zf,Qf.EventType=ti,ti.OPEN="a",ti.CLOSE="b",ti.ERROR="c",ti.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,ki=Qf,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,a0=Ae}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});const pg="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let Qs="10.14.0";/**
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
 */const Lr=new tu("@firebase/firestore");function Ti(){return Lr.logLevel}function W(t,...e){if(Lr.logLevel<=oe.DEBUG){const n=e.map(qd);Lr.debug(`Firestore (${Qs}): ${t}`,...n)}}function Nn(t,...e){if(Lr.logLevel<=oe.ERROR){const n=e.map(qd);Lr.error(`Firestore (${Qs}): ${t}`,...n)}}function Ms(t,...e){if(Lr.logLevel<=oe.WARN){const n=e.map(qd);Lr.warn(`Firestore (${Qs}): ${t}`,...n)}}function qd(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Qs}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function pe(t,e){t||J()}function ee(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class d0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class _x{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wx{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new d0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new nt(e)}}class Ex{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Tx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ex(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ix{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pe(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.R=n.token,new Ix(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ax(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class f0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ax(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Ls(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new je(0,0))}static max(){return new Z(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ho{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ho?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends ho{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const xx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ho{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return xx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Re.fromString(e))}static fromName(e){return new G(Re.fromString(e).popFirst(5))}static empty(){return new G(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Re(e.slice()))}}function kx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new ur(s,G.empty(),e)}function Rx(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(Z.min(),G.empty(),-1)}static max(){return new ur(Z.max(),G.empty(),-1)}}function Cx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const Px="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ko(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Px)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function bx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ro(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Kd.oe=-1;function nu(t){return t==null}function wl(t){return t===0&&1/t==-1/0}function Dx(t){return typeof t=="number"&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function p0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gg(this.data.getIterator())}getIteratorFrom(e){return new gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new qt([])}unionWith(e){let n=new Ke(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class m0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new m0("Invalid base64 string: "+i):i}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Ox=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(pe(!!t),typeof t=="string"){let e=0;const n=Ox.exec(t);if(pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function Qd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gd(t){const e=t.mapValue.fields.__previous_value__;return Qd(e)?Gd(e):e}function fo(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class Vx{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ea={mapValue:{}};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qd(t)?4:Lx(t)?9007199254740991:Mx(t)?10:11:J()}function hn(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cr(s.timestampValue),l=cr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pe(s.doubleValue),l=Pe(i.doubleValue);return o===l?wl(o)===wl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ls(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(mg(o)!==mg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!hn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function mo(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Pe(i.integerValue||i.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return yg(t.timestampValue,e.timestampValue);case 4:return yg(fo(t),fo(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=jr(i),u=jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ce(l[h],u[h]);if(f!==0)return f}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ce(Pe(i.latitude),Pe(o.latitude));return l!==0?l:ce(Pe(i.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,f;const y=i.fields||{},w=o.fields||{},k=(l=y.value)===null||l===void 0?void 0:l.arrayValue,P=(u=w.value)===null||u===void 0?void 0:u.arrayValue,N=ce(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:vg(k,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ea.mapValue&&o===Ea.mapValue)return 0;if(i===Ea.mapValue)return 1;if(o===Ea.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const w=ce(u[y],f[y]);if(w!==0)return w;const k=js(l[u[y]],h[f[y]]);if(k!==0)return k}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function yg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=cr(t),r=cr(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function vg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=js(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function Fs(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nh(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function bh(t){return!!t&&"integerValue"in t}function Yd(t){return!!t&&"arrayValue"in t}function _g(t){return!!t&&"nullValue"in t}function wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fa(t){return!!t&&"mapValue"in t}function Mx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ui(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=He.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ui(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Fa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Fa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(Ui(this.value))}}function g0(t){const e=[];return Gs(t.fields,(n,r)=>{const s=new He([n]);if(Fa(r)){const i=g0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
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
 */class st{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,Z.min(),Z.min(),Z.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,Z.min(),Z.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Z.min(),Z.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class El{constructor(e,n){this.position=e,this.inclusive=n}}function Eg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=js(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function jx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class y0{}class Me extends y0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ux(e,n,r):n==="array-contains"?new $x(e,r):n==="in"?new Wx(e,r):n==="not-in"?new Hx(e,r):n==="array-contains-any"?new qx(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Bx(e,r):new zx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(js(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends y0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return v0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function v0(t){return t.op==="and"}function _0(t){return Fx(t)&&v0(t)}function Fx(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Dh(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Fs(t.value);if(_0(t))return t.filters.map(e=>Dh(e)).join(",");{const e=t.filters.map(n=>Dh(n)).join(",");return`${t.op}(${e})`}}function w0(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&w0(o,s.filters[l]),!0):!1}(t,e):void J()}function E0(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Fs(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(E0).join(" ,")+"}"}(t):"Filter"}class Ux extends Me{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class Bx extends Me{constructor(e,n){super(e,"in",n),this.keys=T0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zx extends Me{constructor(e,n){super(e,"not-in",n),this.keys=T0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class $x extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yd(n)&&mo(n.arrayValue,this.value)}}class Wx extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mo(this.value.arrayValue,n)}}class Hx extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mo(this.value.arrayValue,n)}}class qx extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mo(this.value.arrayValue,r))}}/**
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
 */class Kx{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ig(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Kx(t,e,n,r,s,i,o)}function Xd(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),nu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fs(r)).join(",")),e.ue=n}return e.ue}function Jd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!w0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tg(t.startAt,e.startAt)&&Tg(t.endAt,e.endAt)}function Oh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ru{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qx(t,e,n,r,s,i,o,l){return new ru(t,e,n,r,s,i,o,l)}function Zd(t){return new ru(t)}function Sg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Gx(t){return t.collectionGroup!==null}function Bi(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Tl(i,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new Tl(He.keyField(),r))}return e.ce}function on(t){const e=ee(t);return e.le||(e.le=Yx(e,Bi(t))),e.le}function Yx(t,e){if(t.limitType==="F")return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Tl(s.field,i)});const n=t.endAt?new El(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new El(t.startAt.position,t.startAt.inclusive):null;return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vh(t,e,n){return new ru(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function su(t,e){return Jd(on(t),on(e))&&t.limitType===e.limitType}function I0(t){return`${Xd(on(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>E0(s)).join(", ")}]`),nu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Fs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Fs(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function iu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Bi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Bi(r),s)||r.endAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Bi(r),s))}(t,e)}function Xx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S0(t){return(e,n)=>{let r=!1;for(const s of Bi(t)){const i=Jx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Jx(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?js(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return p0(this.inner)}size(){return this.innerSize}}/**
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
 */const Zx=new Se(G.comparator);function bn(){return Zx}const A0=new Se(G.comparator);function Ri(...t){let e=A0;for(const n of t)e=e.insert(n.key,n);return e}function x0(t){let e=A0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return zi()}function k0(){return zi()}function zi(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const ek=new Se(G.comparator),tk=new Ke(G.comparator);function ie(...t){let e=tk;for(const n of t)e=e.add(n);return e}const nk=new Ke(ce);function rk(){return nk}/**
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
 */function ef(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function R0(t){return{integerValue:""+t}}function sk(t,e){return Dx(e)?R0(e):ef(t,e)}/**
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
 */class ou{constructor(){this._=void 0}}function ik(t,e,n){return t instanceof Il?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qd(i)&&(i=Gd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof go?P0(t,e):t instanceof yo?N0(t,e):function(s,i){const o=C0(s,i),l=Ag(o)+Ag(s.Pe);return bh(o)&&bh(s.Pe)?R0(l):ef(s.serializer,l)}(t,e)}function ok(t,e,n){return t instanceof go?P0(t,e):t instanceof yo?N0(t,e):n}function C0(t,e){return t instanceof Sl?function(r){return bh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Il extends ou{}class go extends ou{constructor(e){super(),this.elements=e}}function P0(t,e){const n=b0(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class yo extends ou{constructor(e){super(),this.elements=e}}function N0(t,e){let n=b0(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class Sl extends ou{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ag(t){return Pe(t.integerValue||t.doubleValue)}function b0(t){return Yd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ak(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof go&&s instanceof go||r instanceof yo&&s instanceof yo?Ls(r.elements,s.elements,hn):r instanceof Sl&&s instanceof Sl?hn(r.Pe,s.Pe):r instanceof Il&&s instanceof Il}(t.transform,e.transform)}class lk{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class au{}function D0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new V0(t.key,An.none()):new Co(t.key,t.data,An.none());{const n=t.data,r=Ot.empty();let s=new Ke(He.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qr(t.key,r,new qt(s.toArray()),An.none())}}function uk(t,e,n){t instanceof Co?function(s,i,o){const l=s.value.clone(),u=kg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(s,i,o){if(!Ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=kg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(O0(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $i(t,e,n,r){return t instanceof Co?function(i,o,l,u){if(!Ua(i.precondition,o))return l;const h=i.value.clone(),f=Rg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(i,o,l,u){if(!Ua(i.precondition,o))return l;const h=Rg(i.fieldTransforms,u,o),f=o.data;return f.setAll(O0(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return Ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ck(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=C0(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ls(r,s,(i,o)=>ak(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends au{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qr extends au{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function O0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kg(t,e,n){const r=new Map;pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,ok(o,l,n[s]))}return r}function Rg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ik(i,o,e))}return r}class V0 extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hk extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=k0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=D0(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(n,r)=>xg(n,r))&&Ls(this.baseMutations,e.baseMutations,(n,r)=>xg(n,r))}}class tf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){pe(e.mutations.length===r.length);let s=function(){return ek}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new tf(e,n,r,s)}}/**
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
 */class fk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var be,ae;function mk(t){switch(t){default:return J();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function M0(t){if(t===void 0)return Nn("GRPC error has no .code"),M.UNKNOWN;switch(t){case be.OK:return M.OK;case be.CANCELLED:return M.CANCELLED;case be.UNKNOWN:return M.UNKNOWN;case be.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case be.INTERNAL:return M.INTERNAL;case be.UNAVAILABLE:return M.UNAVAILABLE;case be.UNAUTHENTICATED:return M.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case be.NOT_FOUND:return M.NOT_FOUND;case be.ALREADY_EXISTS:return M.ALREADY_EXISTS;case be.PERMISSION_DENIED:return M.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case be.ABORTED:return M.ABORTED;case be.OUT_OF_RANGE:return M.OUT_OF_RANGE;case be.UNIMPLEMENTED:return M.UNIMPLEMENTED;case be.DATA_LOSS:return M.DATA_LOSS;default:return J()}}(ae=be||(be={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gk(){return new TextEncoder}/**
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
 */const yk=new Pr([4294967295,4294967295],0);function Cg(t){const e=gk().encode(t),n=new o0;return n.update(e),new Uint8Array(n.digest())}function Pg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([s,i],0)]}class nf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ci(`Invalid padding: ${n}`);if(r<0)throw new Ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Pr.fromNumber(r)));return s.compare(yk)===1&&(s=new Pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Cg(e),[r,s]=Pg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Cg(e),[r,s]=Pg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lu(Z.min(),s,new Se(ce),bn(),ie())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,ie(),ie(),ie())}}/**
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
 */class Ba{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class L0{constructor(e,n){this.targetId=e,this.me=n}}class j0{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ng{constructor(){this.fe=0,this.ge=Dg(),this.pe=Ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new Po(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Dg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vk{constructor(e){this.Le=e,this.Be=new Map,this.ke=bn(),this.qe=bg(),this.Qe=new Se(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Oh(i))if(r===0){const o=new G(i.path);this.Ue(n,o,st.newNoDocument(o,Z.min()))}else pe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(u){if(u instanceof m0)return Ms("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new nf(o,s,i)}catch(u){return Ms(u instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Oh(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,st.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ie();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new lu(e,n,this.Qe,this.ke,r);return this.ke=bn(),this.qe=bg(),this.Qe=new Se(ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ng,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ke(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ng),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function bg(){return new Se(G.comparator)}function Dg(){return new Se(G.comparator)}const _k={asc:"ASCENDING",desc:"DESCENDING"},wk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ek={and:"AND",or:"OR"};class Tk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mh(t,e){return t.useProto3Json||nu(e)?e:{value:e}}function Al(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ik(t,e){return Al(t,e.toTimestamp())}function an(t){return pe(!!t),Z.fromTimestamp(function(n){const r=cr(n);return new je(r.seconds,r.nanos)}(t))}function rf(t,e){return Lh(t,e).canonicalString()}function Lh(t,e){const n=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function U0(t){const e=Re.fromString(t);return pe(H0(e)),e}function jh(t,e){return rf(t.databaseId,e.path)}function wc(t,e){const n=U0(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(z0(n))}function B0(t,e){return rf(t.databaseId,e)}function Sk(t){const e=U0(t);return e.length===4?Re.emptyPath():z0(e)}function Fh(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z0(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Og(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function Ak(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(pe(f===void 0||typeof f=="string"),Ge.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ge.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:M0(h.code);return new Q(f,h.message||"")}(o);n=new j0(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wc(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):Z.min(),l=new Ot({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ba(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wc(t,r.document),i=r.readTime?an(r.readTime):Z.min(),o=st.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wc(t,r.document),i=r.removedTargetIds||[];n=new Ba([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pk(s,i),l=r.targetId;n=new L0(l,o)}}return n}function xk(t,e){let n;if(e instanceof Co)n={update:Og(t,e.key,e.value)};else if(e instanceof V0)n={delete:jh(t,e.key)};else if(e instanceof Qr)n={update:Og(t,e.key,e.data),updateMask:Vk(e.fieldMask)};else{if(!(e instanceof hk))return J();n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Il)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ik(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function kk(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(Z.min())&&(o=an(i)),new lk(o,s.transformResults||[])}(n,e))):[]}function Rk(t,e){return{documents:[B0(t,e.path)]}}function Ck(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=B0(t,s);const i=function(h){if(h.length!==0)return W0(dn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(w){return{field:ss(w.field),direction:bk(w.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function Pk(t){let e=Sk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){pe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(y){const w=$0(y);return w instanceof dn&&_0(w)?w.getFilters():[w]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(w=>function(P){return new Tl(is(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(n.orderBy));let l=null;n.limit&&(l=function(y){let w;return w=typeof y=="object"?y.value:y,nu(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(y){const w=!!y.before,k=y.values||[];return new El(k,w)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const w=!y.before,k=y.values||[];return new El(k,w)}(n.endAt)),Qx(e,s,o,i,l,"F",u,h)}function Nk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>$0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function bk(t){return _k[t]}function Dk(t){return wk[t]}function Ok(t){return Ek[t]}function ss(t){return{fieldPath:t.canonicalString()}}function is(t){return He.fromServerFormat(t.fieldPath)}function W0(t){return t instanceof Me?function(n){if(n.op==="=="){if(wg(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(_g(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wg(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(_g(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:Dk(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>W0(s));return r.length===1?r[0]:{compositeFilter:{op:Ok(n.op),filters:r}}}(t):J()}function Vk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function H0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Gn{constructor(e,n,r,s,i=Z.min(),o=Z.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Mk{constructor(e){this.ct=e}}function Lk(t){const e=Pk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vh(e,e.limit,"L"):e}/**
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
 */class jk{constructor(){this.un=new Fk}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(ur.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Fk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Re.comparator)).toArray()}}/**
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
 */class Us{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Us(0)}static kn(){return new Us(-1)}}/**
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
 */class Uk{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$i(r.mutation,s,qt.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=Ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ri();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=bn();const o=zi(),l=function(){return zi()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Qr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),$i(f.mutation,h,f.mutation.getFieldMask(),je.now())):o.set(h.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var y;return l.set(h,new Bk(f,(y=o.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=zi();let s=new Se((o,l)=>o-l),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||qt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const y=(s.get(l.batchId)||ie()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,y=k0();f.forEach(w=>{if(!i.has(w)){const k=D0(n.get(w),r.get(w));k!==null&&y.set(w,k),i=i.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(Ar());let l=-1,u=i;return o.next(h=>V.forEach(h,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:x0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=Ri();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ri();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const h=function(y,w){return new ru(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((y,w)=>{o=o.insert(y,w)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let l=Ri();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&$i(f.mutation,h,qt.empty(),je.now()),iu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class $k{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Lk(s.bundledQuery),readTime:an(s.readTime)}}(n)),V.resolve()}}/**
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
 */class Wk{constructor(){this.overlays=new Se(G.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Ar(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ar(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return V.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fk(n,r));let i=this.Ir.get(n);i===void 0&&(i=ie(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class Hk{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class sf{constructor(){this.Tr=new Ke(Fe.Er),this.dr=new Ke(Fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Fe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=ie();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class qk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ke(Fe.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Fe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ce);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new G(i),0);let l=new Ke(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Fe(n,0),s=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kk{constructor(e){this.Mr=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Cx(Rx(f),r)<=0||(s.has(f.key)||iu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qk(this)}getSize(e){return V.resolve(this.size)}}class Qk extends Uk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Gk{constructor(e){this.persistence=e,this.Nr=new Ys(n=>Xd(n),Jd),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new sf,this.targetCount=0,this.kr=Us.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Us(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
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
 */class Yk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Kd(0),this.Kr=!1,this.Kr=!0,this.$r=new Hk,this.referenceDelegate=e(this),this.Ur=new Gk(this),this.indexManager=new jk,this.remoteDocumentCache=function(s){return new Kk(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Mk(n),this.Gr=new $k(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new qk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new Xk(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Xk extends Nx{constructor(e){super(),this.currentSequenceNumber=e}}class of{constructor(e){this.persistence=e,this.Jr=new sf,this.Yr=null}static Zr(e){return new of(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=G.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class af{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new af(e,n.fromCache,r,s)}}/**
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
 */class Jk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Zk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return XS()?8:bx(ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Jk;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ti()<=oe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Ti()<=oe.DEBUG&&W("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ti()<=oe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):V.resolve())}Yi(e,n){if(Sg(n))return V.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vh(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Vh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return Sg(n)||s.isEqual(Z.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?V.resolve(null):(Ti()<=oe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(n)),this.rs(e,o,n,kx(s,-1)).next(l=>l))})}ts(e,n){let r=new Ke(S0(e));return n.forEach((s,i)=>{iu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ti()<=oe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",rs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class eR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Se(ce),this._s=new Ys(i=>Xd(i),Jd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function tR(t,e,n,r){return new eR(t,e,n,r)}async function q0(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ie();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function nR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const y=h.batch,w=y.keys();let k=V.resolve();return w.forEach(P=>{k=k.next(()=>f.getEntry(u,P)).next(N=>{const O=h.docVersions.get(P);pe(O!==null),N.version.compareTo(O)<0&&(y.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function K0(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function rR(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,y)=>{const w=s.get(y);if(!w)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,y)));let k=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(Ge.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(y,k),function(N,O,S){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(w,k,f)&&l.push(n.Ur.updateTargetData(i,k))});let u=bn(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(sR(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Z.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(y=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function sR(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=bn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function iR(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oR(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Uh(t,e,n){const r=ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ro(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Vg(t,e,n){const r=ee(t);let s=Z.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const y=ee(u),w=y._s.get(f);return w!==void 0?V.resolve(y.os.get(w)):y.Ur.getTargetData(h,f)}(r,o,on(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:ie())).next(l=>(aR(r,Xx(e),l),{documents:l,Ts:i})))}function aR(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Mg{constructor(){this.activeTargetIds=rk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lR{constructor(){this.so=new Mg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Mg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uR{_o(e){}shutdown(){}}/**
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
 */class Lg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ta=null;function Ec(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
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
 */const cR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const tt="WebChannelConnection";class dR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Ec(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ms("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=cR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ec();return new Promise((o,l)=>{const u=new a0;u.setWithCredentials(!0),u.listenOnce(l0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ja.NO_ERROR:const f=u.getResponseJson();W(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case ja.TIMEOUT:W(tt,`RPC '${e}' ${i} timed out`),l(new Q(M.DEADLINE_EXCEEDED,"Request time out"));break;case ja.HTTP_ERROR:const y=u.getStatus();if(W(tt,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const P=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(k.status);l(new Q(P,k.message))}else l(new Q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Q(M.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{W(tt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);W(tt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Ec(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=h0(),l=c0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");W(tt,`Creating RPC '${e}' stream ${s}: ${f}`,u);const y=o.createWebChannel(f,u);let w=!1,k=!1;const P=new hR({Io:O=>{k?W(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(w||(W(tt,`Opening RPC '${e}' stream ${s} transport.`),y.open(),w=!0),W(tt,`RPC '${e}' stream ${s} sending:`,O),y.send(O))},To:()=>y.close()}),N=(O,S,E)=>{O.listen(S,A=>{try{E(A)}catch(D){setTimeout(()=>{throw D},0)}})};return N(y,ki.EventType.OPEN,()=>{k||(W(tt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),N(y,ki.EventType.CLOSE,()=>{k||(k=!0,W(tt,`RPC '${e}' stream ${s} transport closed`),P.So())}),N(y,ki.EventType.ERROR,O=>{k||(k=!0,Ms(tt,`RPC '${e}' stream ${s} transport errored:`,O),P.So(new Q(M.UNAVAILABLE,"The operation could not be completed")))}),N(y,ki.EventType.MESSAGE,O=>{var S;if(!k){const E=O.data[0];pe(!!E);const A=E,D=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(D){W(tt,`RPC '${e}' stream ${s} received error:`,D);const F=D.status;let j=function(_){const v=be[_];if(v!==void 0)return M0(v)}(F),T=D.message;j===void 0&&(j=M.INTERNAL,T="Unknown error status: "+F+" with message "+D.message),k=!0,P.So(new Q(j,T)),y.close()}else W(tt,`RPC '${e}' stream ${s} received:`,E),P.bo(E)}}),N(l,u0.STAT_EVENT,O=>{O.stat===Ph.PROXY?W(tt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Ph.NOPROXY&&W(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Tc(){return typeof document<"u"?document:null}/**
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
 */function uu(t){return new Tk(t,!0)}/**
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
 */class Q0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class G0{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Q0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fR extends G0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Ak(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?an(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Fh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Oh(u)?{documents:Rk(i,u)}:{query:Ck(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=F0(i,o.resumeToken);const h=Mh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=Al(i,o.snapshotVersion.toTimestamp());const h=Mh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Nk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Fh(this.serializer),n.removeTarget=e,this.a_(n)}}class pR extends G0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return pe(!!e.streamToken),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kk(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Fh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xk(this.serializer,r))};this.a_(n)}}/**
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
 */class mR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Lh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Lh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class yR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.L_.add(4),await No(h),h.q_.set("Unknown"),h.L_.delete(4),await cu(h)}(this))})}),this.q_=new gR(r,s)}}async function cu(t){if(Gr(t))for(const e of t.B_)await e(!0)}async function No(t){for(const e of t.B_)await e(!1)}function Y0(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),hf(n)?cf(n):Xs(n).r_()&&uf(n,e))}function lf(t,e){const n=ee(t),r=Xs(n);n.N_.delete(e),r.r_()&&X0(n,e),n.N_.size===0&&(r.r_()?r.o_():Gr(n)&&n.q_.set("Unknown"))}function uf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xs(t).A_(e)}function X0(t,e){t.Q_.xe(e),Xs(t).R_(e)}function cf(t){t.Q_=new vk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Xs(t).start(),t.q_.v_()}function hf(t){return Gr(t)&&!Xs(t).n_()&&t.N_.size>0}function Gr(t){return ee(t).L_.size===0}function J0(t){t.Q_=void 0}async function vR(t){t.q_.set("Online")}async function _R(t){t.N_.forEach((e,n)=>{uf(t,e)})}async function wR(t,e){J0(t),hf(t)?(t.q_.M_(e),cf(t)):t.q_.set("Unknown")}async function ER(t,e,n){if(t.q_.set("Online"),e instanceof j0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xl(t,r)}else if(e instanceof Ba?t.Q_.Ke(e):e instanceof L0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await K0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(Ge.EMPTY_BYTE_STRING,f.snapshotVersion)),X0(i,u);const y=new Gn(f.target,u,h,f.sequenceNumber);uf(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await xl(t,r)}}async function xl(t,e,n){if(!Ro(e))throw e;t.L_.add(1),await No(t),t.q_.set("Offline"),n||(n=()=>K0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await cu(t)})}function Z0(t,e){return e().catch(n=>xl(t,n,e))}async function hu(t){const e=ee(t),n=hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;TR(e);)try{const s=await iR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,IR(e,s)}catch(s){await xl(e,s)}ew(e)&&tw(e)}function TR(t){return Gr(t)&&t.O_.length<10}function IR(t,e){t.O_.push(e);const n=hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ew(t){return Gr(t)&&!hr(t).n_()&&t.O_.length>0}function tw(t){hr(t).start()}async function SR(t){hr(t).p_()}async function AR(t){const e=hr(t);for(const n of t.O_)e.m_(n.mutations)}async function xR(t,e,n){const r=t.O_.shift(),s=tf.from(r,e,n);await Z0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hu(t)}async function kR(t,e){e&&hr(t).V_&&await async function(r,s){if(function(o){return mk(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();hr(r).s_(),await Z0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hu(r)}}(t,e),ew(t)&&tw(t)}async function jg(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.L_.add(3),await No(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await cu(n)}async function RR(t,e){const n=ee(t);e?(n.L_.delete(2),await cu(n)):e||(n.L_.add(2),await No(n),n.q_.set("Unknown"))}function Xs(t){return t.K_||(t.K_=function(n,r,s){const i=ee(n);return i.w_(),new fR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:vR.bind(null,t),Ro:_R.bind(null,t),mo:wR.bind(null,t),d_:ER.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),hf(t)?cf(t):t.q_.set("Unknown")):(await t.K_.stop(),J0(t))})),t.K_}function hr(t){return t.U_||(t.U_=function(n,r,s){const i=ee(n);return i.w_(),new pR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:SR.bind(null,t),mo:kR.bind(null,t),f_:AR.bind(null,t),g_:xR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await hu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class df{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new df(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ff(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Ro(t))return new Q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Ri(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fg{constructor(){this.W_=new Se(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bs{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Bs(e,n,Ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class CR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PR{constructor(){this.queries=Ug(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ee(n),i=s.queries;s.queries=Ug(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new Q(M.ABORTED,"Firestore shutting down"))}}function Ug(){return new Ys(t=>I0(t),su)}async function NR(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new CR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=ff(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&pf(n)}async function bR(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DR(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&pf(n)}function OR(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function pf(t){t.Y_.forEach(e=>{e.next()})}var Bh,Bg;(Bg=Bh||(Bh={})).ea="default",Bg.Cache="cache";class VR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Bh.Cache}}/**
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
 */class nw{constructor(e){this.key=e}}class rw{constructor(e){this.key=e}}class MR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=S0(e),this.Ra=new Ss(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Fg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,y)=>{const w=s.get(f),k=iu(this.query,y)?y:null,P=!!w&&this.mutatedKeys.has(w.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;w&&k?w.data.isEqual(k.data)?P!==N&&(r.track({type:3,doc:k}),O=!0):this.ga(w,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Aa(k,u)>0||h&&this.Aa(k,h)<0)&&(l=!0)):!w&&k?(r.track({type:0,doc:k}),O=!0):w&&!k&&(r.track({type:1,doc:w}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,y)=>function(k,P){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return N(k)-N(P)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Bs(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new rw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new nw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Bs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jR{constructor(e){this.key=e,this.va=!1}}class FR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ys(l=>I0(l),su),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(G.comparator),this.Na=new Map,this.La=new sf,this.Ba={},this.ka=new Map,this.qa=Us.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UR(t,e,n=!0){const r=uw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await sw(r,e,n,!0),s}async function BR(t,e){const n=uw(t);await sw(n,e,!0,!1)}async function sw(t,e,n,r){const s=await oR(t.localStore,on(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await zR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Y0(t.remoteStore,s),l}async function zR(t,e,n,r,s){t.Ka=(y,w,k)=>async function(N,O,S,E){let A=O.view.ma(S);A.ns&&(A=await Vg(N.localStore,O.query,!1).then(({documents:T})=>O.view.ma(T,A)));const D=E&&E.targetChanges.get(O.targetId),F=E&&E.targetMismatches.get(O.targetId)!=null,j=O.view.applyChanges(A,N.isPrimaryClient,D,F);return $g(N,O.targetId,j.wa),j.snapshot}(t,y,w,k);const i=await Vg(t.localStore,e,!0),o=new MR(e,i.Ts),l=o.ma(i.documents),u=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);$g(t,n,h.wa);const f=new LR(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function $R(t,e,n){const r=ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!su(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Uh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&lf(r.remoteStore,s.targetId),zh(r,s.targetId)}).catch(ko)):(zh(r,s.targetId),await Uh(r.localStore,s.targetId,!0))}async function WR(t,e){const n=ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lf(n.remoteStore,r.targetId))}async function HR(t,e,n){const r=JR(t);try{const s=await function(o,l){const u=ee(o),h=je.now(),f=l.reduce((k,P)=>k.add(P.key),ie());let y,w;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=bn(),N=ie();return u.cs.getEntries(k,f).next(O=>{P=O,P.forEach((S,E)=>{E.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(O=>{y=O;const S=[];for(const E of l){const A=ck(E,y.get(E.key).overlayedDocument);A!=null&&S.push(new Qr(E.key,A,g0(A.value.mapValue),An.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,S,l)}).next(O=>{w=O;const S=O.applyToLocalDocumentSet(y,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,S)})}).then(()=>({batchId:w.batchId,changes:x0(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Se(ce)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await bo(r,s.changes),await hu(r.remoteStore)}catch(s){const i=ff(s,"Failed to persist write");n.reject(i)}}async function iw(t,e){const n=ee(t);try{const r=await rR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?pe(o.va):s.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await bo(n,r,e)}catch(r){await ko(r)}}function zg(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((f,y)=>{for(const w of y.j_)w.Z_(l)&&(h=!0)}),h&&pf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qR(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Se(G.comparator);o=o.insert(i,st.newNoDocument(i,Z.min()));const l=ie().add(i),u=new lu(Z.min(),new Map,new Se(ce),o,l);await iw(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),mf(r)}else await Uh(r.localStore,e,!1).then(()=>zh(r,e,n)).catch(ko)}async function KR(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await nR(n.localStore,e);aw(n,r,null),ow(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,s)}catch(s){await ko(s)}}async function QR(t,e,n){const r=ee(t);try{const s=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(pe(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);aw(r,e,n),ow(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,s)}catch(s){await ko(s)}}function ow(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function aw(t,e,n){const r=ee(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||lw(t,r)})}function lw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(lf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),mf(t))}function $g(t,e,n){for(const r of n)r instanceof nw?(t.La.addReference(r.key,e),GR(t,r)):r instanceof rw?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||lw(t,r.key)):J()}function GR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),mf(t))}function mf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new jR(n)),t.Oa=t.Oa.insert(n,r),Y0(t.remoteStore,new Gn(on(Zd(n.path)),r,"TargetPurposeLimboResolution",Kd.oe))}}async function bo(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const y=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=af.Wi(u.targetId,h);i.push(y)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>V.forEach(h,w=>V.forEach(w.$i,k=>f.persistence.referenceDelegate.addReference(y,w.targetId,k)).next(()=>V.forEach(w.Ui,k=>f.persistence.referenceDelegate.removeReference(y,w.targetId,k)))))}catch(y){if(!Ro(y))throw y;W("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const w=y.targetId;if(!y.fromCache){const k=f.os.get(w),P=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(w,N)}}}(r.localStore,i))}async function YR(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await q0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new Q(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.hs)}}function XR(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let s=ie();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function uw(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qR.bind(null,e),e.Ca.d_=DR.bind(null,e.eventManager),e.Ca.$a=OR.bind(null,e.eventManager),e}function JR(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QR.bind(null,e),e}class kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return tR(this.persistence,new Zk,e.initialUser,this.serializer)}Ga(e){return new Yk(of.Zr,this.serializer)}Wa(e){return new lR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kl.provider={build:()=>new kl};class $h{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YR.bind(null,this.syncEngine),await RR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PR}()}createDatastore(e){const n=uu(e.databaseInfo.databaseId),r=function(i){return new dR(i)}(e.databaseInfo);return function(i,o,l,u){return new mR(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new yR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>zg(this.syncEngine,n,0),function(){return Lg.D()?new Lg:new uR}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const y=new FR(s,i,o,l,u,h);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ee(s);W("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await No(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$h.provider={build:()=>new $h};/**
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
 */class ZR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class eC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=f0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ff(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ic(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await q0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tC(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>jg(e.remoteStore,s)),t._onlineComponents=e}async function tC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ms("Error using user provided cache. Falling back to memory cache: "+n),await Ic(t,new kl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Ic(t,new kl);return t._offlineComponents}async function cw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Wg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Wg(t,new $h))),t._onlineComponents}function nC(t){return cw(t).then(e=>e.syncEngine)}async function Hg(t){const e=await cw(t),n=e.eventManager;return n.onListen=UR.bind(null,e.syncEngine),n.onUnlisten=$R.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WR.bind(null,e.syncEngine),n}/**
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
 */function hw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qg=new Map;/**
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
 */function rC(t,e,n){if(!n)throw new Q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sC(t,e,n,r){if(e===!0&&r===!0)throw new Q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kg(t){if(!G.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function As(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gf(t);throw new Q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Qg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vx;switch(r.type){case"firstParty":return new Tx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qg.get(n);r&&(W("ComponentProvider","Removing Datastore"),qg.delete(n),r.terminate())}(this),Promise.resolve()}}function iC(t,e,n,r={}){var s;const i=(t=As(t,yf))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nt.MOCK_USER;else{l=HS(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(h)}t._authCredentials=new _x(new d0(l,u))}}/**
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
 */class du{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new du(this.firestore,e,this._query)}}class jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class vo extends du{constructor(e,n,r){super(e,n,Zd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new G(e))}withConverter(e){return new vo(this.firestore,e,this._path)}}function dw(t,e,...n){if(t=Tt(t),arguments.length===1&&(e=f0.newId()),rC("doc","path",e),t instanceof yf){const r=Re.fromString(e,...n);return Kg(r),new jt(t,null,new G(r))}{if(!(t instanceof jt||t instanceof vo))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Kg(r),new jt(t.firestore,t instanceof vo?t.converter:null,new G(r))}}/**
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
 */class Gg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Q0(this,"async_queue_retry"),this.Vu=()=>{const r=Tc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Nr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ro(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=df.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Yg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Rl extends yf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gg(e),this._firestoreClient=void 0,await e}}}function oC(t,e){const n=typeof t=="object"?t:Hd(),r=typeof t=="string"?t:"(default)",s=Kr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$S("firestore");i&&iC(s,...i)}return s}function fw(t){if(t._terminated)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aC(t),t._firestoreClient}function aC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,f){return new Vx(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,hw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new eC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(Ge.fromBase64String(e))}catch(n){throw new Q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pw{constructor(e){this._methodName=e}}/**
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
 */class _f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class wf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const lC=/^__.*__$/;class uC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}function mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Ef{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Cl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(mw(this.Cu)&&lC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class cC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uu(e)}Qu(e,n,r,s=!1){return new Ef({Cu:e,methodName:n,qu:r,path:He.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hC(t){const e=t._freezeSettings(),n=uu(t._databaseId);return new cC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dC(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);_w("Data must be an object, but it was:",o,r);const l=yw(r,o);let u,h;if(i.merge)u=new qt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const y of i.mergeFields){const w=fC(e,y,n);if(!o.contains(w))throw new Q(M.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);mC(f,w)||f.push(w)}u=new qt(f),h=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=o.fieldTransforms;return new uC(new Ot(l),u,h)}function gw(t,e){if(vw(t=Tt(t)))return _w("Unsupported field value:",e,t),yw(t,e);if(t instanceof pw)return function(r,s){if(!mw(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=gw(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:Al(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Al(s.serializer,i)}}if(r instanceof _f)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zs)return{bytesValue:F0(s.serializer,r._byteString)};if(r instanceof jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof wf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ef(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${gf(r)}`)}(t,e)}function yw(t,e){const n={};return p0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,s)=>{const i=gw(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof _f||t instanceof zs||t instanceof jt||t instanceof pw||t instanceof wf)}function _w(t,e,n){if(!vw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=gf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function fC(t,e,n){if((e=Tt(e))instanceof vf)return e._internalPath;if(typeof e=="string")return ww(t,e);throw Cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const pC=new RegExp("[~\\*/\\[\\]]");function ww(t,e,n){if(e.search(pC)>=0)throw Cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vf(...e.split("."))._internalPath}catch{throw Cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Q(M.INVALID_ARGUMENT,l+t+u)}function mC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ew{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gC extends Ew{data(){return super.data()}}function Tw(t,e){return typeof e=="string"?ww(t,e):e instanceof vf?e._internalPath:e._delegate._internalPath}/**
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
 */function yC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vC{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Pe(o.doubleValue));return new wf(i)}convertGeoPoint(e){return new _f(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=cr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);pe(H0(r));const s=new po(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function _C(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Iw extends Ew{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class za extends Iw{data(e={}){return super.data(e)}}class wC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new za(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new za(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new za(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:EC(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class Sw extends vC{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function TC(t,e,n){t=As(t,jt);const r=As(t.firestore,Rl),s=_C(t.converter,e);return SC(r,[dC(hC(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,An.none())])}function IC(t,...e){var n,r,s;t=Tt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yg(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Yg(e[o])){const y=e[o];e[o]=(n=y.next)===null||n===void 0?void 0:n.bind(y),e[o+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[o+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let u,h,f;if(t instanceof jt)h=As(t.firestore,Rl),f=Zd(t._key.path),u={next:y=>{e[o]&&e[o](AC(h,t,y))},error:e[o+1],complete:e[o+2]};else{const y=As(t,du);h=As(y.firestore,Rl),f=y._query;const w=new Sw(h);u={next:k=>{e[o]&&e[o](new wC(h,w,y,k))},error:e[o+1],complete:e[o+2]},yC(t._query)}return function(w,k,P,N){const O=new ZR(N),S=new VR(k,O,P);return w.asyncQueue.enqueueAndForget(async()=>NR(await Hg(w),S)),()=>{O.Za(),w.asyncQueue.enqueueAndForget(async()=>bR(await Hg(w),S))}}(fw(h),f,l,u)}function SC(t,e){return function(r,s){const i=new Nr;return r.asyncQueue.enqueueAndForget(async()=>HR(await nC(r),s,i)),i.promise}(fw(t),e)}function AC(t,e,n){const r=n.docs.get(e._key),s=new Sw(t);return new Iw(t,s,e._key,r,new Pi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Qs=s})(Ks),cn(new Xt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Rl(new wx(r.getProvider("auth-internal")),new Sx(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Lt(pg,"4.7.3",e),Lt(pg,"4.7.3","esm2017")})();function Tf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xC=Aw,xw=new qr("auth","Firebase",Aw());/**
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
 */const Pl=new tu("@firebase/auth");function kC(t,...e){Pl.logLevel<=oe.WARN&&Pl.warn(`Auth (${Ks}): ${t}`,...e)}function $a(t,...e){Pl.logLevel<=oe.ERROR&&Pl.error(`Auth (${Ks}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw Sf(t,...e)}function Gt(t,...e){return Sf(t,...e)}function If(t,e,n){const r=Object.assign(Object.assign({},xC()),{[e]:n});return new qr("auth","Firebase",r).create(e,{appName:t.name})}function or(t){return If(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fn(t,"argument-error"),If(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xw.create(t,...e)}function X(t,e,...n){if(!t)throw Sf(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function Dn(t,e){t||En(e)}/**
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
 */function Wh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RC(){return Xg()==="http:"||Xg()==="https:"}function Xg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RC()||X_()||"connection"in navigator)?navigator.onLine:!0}function PC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Do{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=qS()||GS()}get(){return CC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Af(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bC=new Do(3e4,6e4);function xf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Js(t,e,n,r,s={}){return Cw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return QS()||(h.referrerPolicy="no-referrer"),Rw.fetch()(Pw(t,t.config.apiHost,n,l),h)})}async function Cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NC),e);try{const s=new OC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ia(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw If(t,f,h);fn(t,f)}}catch(s){if(s instanceof Jt)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function DC(t,e,n,r,s={}){const i=await Js(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Af(t.config,s):`${t.config.apiScheme}://${s}`}class OC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),bC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function VC(t,e){return Js(t,"POST","/v1/accounts:delete",e)}async function Nw(t,e){return Js(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MC(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),s=kf(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wi(Sc(s.auth_time)),issuedAtTime:Wi(Sc(s.iat)),expirationTime:Wi(Sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function kf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const s=K_(n);return s?JSON.parse(s):($a("Failed to decode base64 JWT payload"),null)}catch(s){return $a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jg(t){const e=kf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&LC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _o(t,Nw(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bw(i.providerUserInfo):[],l=UC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Hh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,y)}async function FC(t){const e=Tt(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bw(t){return t.map(e=>{var{providerId:n}=e,r=Tf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function BC(t,e){const n=await Cw(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Pw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Rw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zC(t,e){return Js(t,"POST","/v2/accounts:revokeToken",xf(t,e))}/**
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
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Jg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await BC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function Fn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Tf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MC(this,e)}reload(){return FC(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await _o(this,VC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,f;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(s=n.email)!==null&&s!==void 0?s:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:D,isAnonymous:F,providerData:j,stsTokenManager:T}=n;X(A&&T,e,"internal-error");const g=xs.fromJSON(this.name,T);X(typeof A=="string",e,"internal-error"),Fn(y,e.name),Fn(w,e.name),X(typeof D=="boolean",e,"internal-error"),X(typeof F=="boolean",e,"internal-error"),Fn(k,e.name),Fn(P,e.name),Fn(N,e.name),Fn(O,e.name),Fn(S,e.name),Fn(E,e.name);const _=new Tn({uid:A,auth:e,email:w,emailVerified:D,displayName:y,isAnonymous:F,photoURL:P,phoneNumber:k,tenantId:N,stsTokenManager:g,createdAt:S,lastLoginAt:E});return j&&Array.isArray(j)&&(_.providerData=j.map(v=>Object.assign({},v))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new Tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new xs;l.updateFromIdToken(r);const u=new Tn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Zg=new Map;function In(t){Dn(t instanceof Function,"Expected a class definition");let e=Zg.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zg.set(t,e),e)}/**
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
 */class Dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dw.type="NONE";const ey=Dw;/**
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
 */function Wa(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(In(ey),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||In(ey);const o=Wa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const y=Tn._fromJSON(e,f);h!==i&&(l=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ks(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ks(i,e,r))}}/**
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
 */function ty(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ow(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fw(e))return"Blackberry";if(Uw(e))return"Webos";if(Vw(e))return"Safari";if((e.includes("chrome/")||Mw(e))&&!e.includes("edge/"))return"Chrome";if(jw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ow(t=ot()){return/firefox\//i.test(t)}function Vw(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mw(t=ot()){return/crios\//i.test(t)}function Lw(t=ot()){return/iemobile/i.test(t)}function jw(t=ot()){return/android/i.test(t)}function Fw(t=ot()){return/blackberry/i.test(t)}function Uw(t=ot()){return/webos/i.test(t)}function Rf(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $C(t=ot()){var e;return Rf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WC(){return YS()&&document.documentMode===10}function Bw(t=ot()){return Rf(t)||jw(t)||Uw(t)||Fw(t)||/windows phone/i.test(t)||Lw(t)}/**
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
 */function zw(t,e=[]){let n;switch(t){case"Browser":n=ty(ot());break;case"Worker":n=`${ty(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
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
 */class HC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qC(t,e={}){return Js(t,"GET","/v2/passwordPolicy",xf(t,e))}/**
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
 */const KC=6;class QC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ny(this),this.idTokenSubscription=new ny(this),this.beforeStateQueue=new HC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nw(this,{idToken:e}),r=await Tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(or(this));const n=e?Tt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qC(this),n=new QC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zs(t){return Tt(t)}class ny{constructor(e){this.auth=e,this.observer=null,this.addObserver=rA(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Cf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YC(t){Cf=t}function XC(t){return Cf.loadJS(t)}function JC(){return Cf.gapiScript}function ZC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function eP(t,e){const n=Kr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(uo(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function tP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nP(t,e,n){const r=Zs(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$w(e),{host:o,port:l}=rP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),sP()}function $w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rP(t){const e=$w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ry(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ry(o)}}}function ry(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ww{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}/**
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
 */async function Rs(t,e){return DC(t,"POST","/v1/accounts:signInWithIdp",xf(t,e))}/**
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
 */const iP="http://localhost";class Ur extends Ww{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Tf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ur(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:iP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
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
 */class fu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oo extends fu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wn extends Oo{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ur._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Hn extends Oo{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class qn extends Oo{constructor(){super("twitter.com")}static credential(e,n){return Ur._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tn._fromIdTokenResponse(e,r,s),o=sy(r);return new $s({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sy(r);return new $s({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bl extends Jt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bl(e,n,r,s)}}function Hw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,i,e,r):i})}async function oP(t,e,n=!1){const r=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",r)}/**
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
 */async function aP(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(or(r));const s="reauthenticate";try{const i=await _o(t,Hw(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=kf(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),$s._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
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
 */async function lP(t,e,n=!1){if(nn(t.app))return Promise.reject(or(t));const r="signIn",s=await Hw(t,r,e),i=await $s._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function uP(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function cP(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}function hP(t){return Tt(t).signOut()}const Dl="__sak";/**
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
 */class qw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dP=1e3,fP=10;class Kw extends qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);WC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kw.type="LOCAL";const pP=Kw;/**
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
 */class Qw extends qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qw.type="SESSION";const Gw=Qw;/**
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
 */function mP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await mP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pu.receivers=[];/**
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
 */function Pf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Pf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function yP(t){ln().location.href=t}/**
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
 */function Yw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function vP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _P(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wP(){return Yw()?self:null}/**
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
 */const Xw="firebaseLocalStorageDb",EP=1,Ol="firebaseLocalStorage",Jw="fbase_key";class Vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mu(t,e){return t.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function TP(){const t=indexedDB.deleteDatabase(Xw);return new Vo(t).toPromise()}function qh(){const t=indexedDB.open(Xw,EP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ol,{keyPath:Jw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ol)?e(r):(r.close(),await TP(),e(await qh()))})})}async function iy(t,e,n){const r=mu(t,!0).put({[Jw]:e,value:n});return new Vo(r).toPromise()}async function IP(t,e){const n=mu(t,!1).get(e),r=await new Vo(n).toPromise();return r===void 0?null:r.value}function oy(t,e){const n=mu(t,!0).delete(e);return new Vo(n).toPromise()}const SP=800,AP=3;class Zw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pu._getInstance(wP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vP(),!this.activeServiceWorker)return;this.sender=new gP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_P()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qh();return await iy(e,Dl,"1"),await oy(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>iy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mu(s,!1).getAll();return new Vo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zw.type="LOCAL";const xP=Zw;new Do(3e4,6e4);/**
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
 */function Nf(t,e){return e?In(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bf extends Ww{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kP(t){return lP(t.auth,new bf(t),t.bypassAuthState)}function RP(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),aP(n,new bf(t),t.bypassAuthState)}async function CP(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),oP(n,new bf(t),t.bypassAuthState)}/**
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
 */class eE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kP;case"linkViaPopup":case"linkViaRedirect":return CP;case"reauthViaPopup":case"reauthViaRedirect":return RP;default:fn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PP=new Do(2e3,1e4);async function NP(t,e,n){if(nn(t.app))return Promise.reject(Gt(t,"operation-not-supported-in-this-environment"));const r=Zs(t);kw(t,e,fu);const s=Nf(r,n);return new xr(r,"signInViaPopup",e,s).executeNotNull()}class xr extends eE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PP.get())};e()}}xr.currentPopupAction=null;/**
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
 */const bP="pendingRedirect",Ha=new Map;class DP extends eE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ha.get(this.auth._key());if(!e){try{const r=await OP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ha.set(this.auth._key(),e)}return this.bypassAuthState||Ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OP(t,e){const n=nE(e),r=tE(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function VP(t,e){return tE(t)._set(nE(e),"true")}function MP(t,e){Ha.set(t._key(),e)}function tE(t){return In(t._redirectPersistence)}function nE(t){return Wa(bP,t.config.apiKey,t.name)}/**
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
 */function LP(t,e,n){return jP(t,e,n)}async function jP(t,e,n){if(nn(t.app))return Promise.reject(or(t));const r=Zs(t);kw(t,e,fu),await r._initializationPromise;const s=Nf(r,n);return await VP(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function FP(t,e){return await Zs(t)._initializationPromise,rE(t,e,!1)}async function rE(t,e,n=!1){if(nn(t.app))return Promise.reject(or(t));const r=Zs(t),s=Nf(r,e),o=await new DP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const UP=10*60*1e3;class BP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ay(e))}saveEventToCache(e){this.cachedEventUids.add(ay(e)),this.lastProcessedEventTime=Date.now()}}function ay(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sE(t);default:return!1}}/**
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
 */async function $P(t,e={}){return Js(t,"GET","/v1/projects",e)}/**
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
 */const WP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HP=/^https?/;async function qP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $P(t);for(const n of e)try{if(KP(n))return}catch{}fn(t,"unauthorized-domain")}function KP(t){const e=Wh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HP.test(n))return!1;if(WP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const QP=new Do(3e4,6e4);function ly(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GP(t){return new Promise((e,n)=>{var r,s,i;function o(){ly(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ly(),n(Gt(t,"network-request-failed"))},timeout:QP.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const l=ZC("iframefcb");return ln()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},XC(`${JC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw qa=null,e})}let qa=null;function YP(t){return qa=qa||GP(t),qa}/**
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
 */const XP=new Do(5e3,15e3),JP="__/auth/iframe",ZP="emulator/auth/iframe",e2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n2(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Af(e,ZP):`https://${t.config.authDomain}/${JP}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},s=t2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xo(r).slice(1)}`}async function r2(t){const e=await YP(t),n=ln().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:n2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=ln().setTimeout(()=>{i(o)},XP.get());function u(){ln().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const s2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i2=500,o2=600,a2="_blank",l2="http://localhost";class uy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u2(t,e,n,r=i2,s=o2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},s2),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ot().toLowerCase();n&&(l=Mw(h)?a2:n),Ow(h)&&(e=e||l2,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[k,P])=>`${w}${k}=${P},`,"");if($C(h)&&l!=="_self")return c2(e||"",l),new uy(null);const y=window.open(e||"",l,f);X(y,t,"popup-blocked");try{y.focus()}catch{}return new uy(y)}function c2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const h2="__/auth/handler",d2="emulator/auth/handler",f2=encodeURIComponent("fac");async function cy(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:s};if(e instanceof fu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))o[f]=y}if(e instanceof Oo){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${f2}=${encodeURIComponent(u)}`:"";return`${p2(t)}?${xo(l).slice(1)}${h}`}function p2({config:t}){return t.emulator?Af(t,d2):`https://${t.authDomain}/${h2}`}/**
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
 */const Ac="webStorageSupport";class m2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gw,this._completeRedirectFn=rE,this._overrideRedirectResult=MP}async _openPopup(e,n,r,s){var i;Dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cy(e,n,r,Wh(),s);return u2(e,o,Pf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cy(e,n,r,Wh(),s);return yP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await r2(e),r=new BP(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ac];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bw()||Vw()||Rf()}}const g2=m2;var hy="@firebase/auth",dy="1.7.9";/**
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
 */class y2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function v2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _2(t){cn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zw(t)},h=new GC(r,s,i,u);return tP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Xt("auth-internal",e=>{const n=Zs(e.getProvider("auth").getImmediate());return(r=>new y2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(hy,dy,v2(t)),Lt(hy,dy,"esm2017")}/**
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
 */const w2=5*60,E2=Y_("authIdTokenMaxAge")||w2;let fy=null;const T2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>E2)return;const s=n==null?void 0:n.token;fy!==s&&(fy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function I2(t=Hd()){const e=Kr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eP(t,{popupRedirectResolver:g2,persistence:[xP,pP,Gw]}),r=Y_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=T2(i.toString());cP(n,o,()=>o(n.currentUser)),uP(n,l=>o(l))}}const s=Q_("auth");return s&&nP(n,`http://${s}`),n}function S2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",S2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_2("Browser");const iE="@firebase/installations",Df="0.6.9";/**
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
 */const oE=1e4,aE=`w:${Df}`,lE="FIS_v2",A2="https://firebaseinstallations.googleapis.com/v1",x2=60*60*1e3,k2="installations",R2="Installations";/**
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
 */const C2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Br=new qr(k2,R2,C2);function uE(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
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
 */function cE({projectId:t}){return`${A2}/projects/${t}/installations`}function hE(t){return{token:t.token,requestStatus:2,expiresIn:N2(t.expiresIn),creationTime:Date.now()}}async function dE(t,e){const r=(await e.json()).error;return Br.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function P2(t,{refreshToken:e}){const n=fE(t);return n.append("Authorization",b2(e)),n}async function pE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function N2(t){return Number(t.replace("s","000"))}function b2(t){return`${lE} ${t}`}/**
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
 */async function D2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=cE(t),s=fE(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:lE,appId:t.appId,sdkVersion:aE},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await pE(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:hE(h.authToken)}}else throw await dE("Create Installation",u)}/**
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
 */function mE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function O2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const V2=/^[cdef][\w-]{21}$/,Kh="";function M2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=L2(t);return V2.test(n)?n:Kh}catch{return Kh}}function L2(t){return O2(t).substr(0,22)}/**
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
 */function gu(t){return`${t.appName}!${t.appId}`}/**
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
 */const gE=new Map;function yE(t,e){const n=gu(t);vE(n,e),j2(n,e)}function vE(t,e){const n=gE.get(t);if(n)for(const r of n)r(e)}function j2(t,e){const n=F2();n&&n.postMessage({key:t,fid:e}),U2()}let kr=null;function F2(){return!kr&&"BroadcastChannel"in self&&(kr=new BroadcastChannel("[Firebase] FID Change"),kr.onmessage=t=>{vE(t.data.key,t.data.fid)}),kr}function U2(){gE.size===0&&kr&&(kr.close(),kr=null)}/**
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
 */const B2="firebase-installations-database",z2=1,zr="firebase-installations-store";let xc=null;function Of(){return xc||(xc=n0(B2,z2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zr)}}})),xc}async function Vl(t,e){const n=gu(t),s=(await Of()).transaction(zr,"readwrite"),i=s.objectStore(zr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&yE(t,e.fid),e}async function _E(t){const e=gu(t),r=(await Of()).transaction(zr,"readwrite");await r.objectStore(zr).delete(e),await r.done}async function yu(t,e){const n=gu(t),s=(await Of()).transaction(zr,"readwrite"),i=s.objectStore(zr),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&yE(t,l.fid),l}/**
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
 */async function Vf(t){let e;const n=await yu(t.appConfig,r=>{const s=$2(r),i=W2(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Kh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $2(t){const e=t||{fid:M2(),registrationStatus:0};return wE(e)}function W2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Br.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=H2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:q2(t)}:{installationEntry:e}}async function H2(t,e){try{const n=await D2(t,e);return Vl(t.appConfig,n)}catch(n){throw uE(n)&&n.customData.serverCode===409?await _E(t.appConfig):await Vl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function q2(t){let e=await py(t.appConfig);for(;e.registrationStatus===1;)await mE(100),e=await py(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vf(t);return r||n}return e}function py(t){return yu(t,e=>{if(!e)throw Br.create("installation-not-found");return wE(e)})}function wE(t){return K2(t)?{fid:t.fid,registrationStatus:0}:t}function K2(t){return t.registrationStatus===1&&t.registrationTime+oE<Date.now()}/**
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
 */async function Q2({appConfig:t,heartbeatServiceProvider:e},n){const r=G2(t,n),s=P2(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:aE,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await pE(()=>fetch(r,l));if(u.ok){const h=await u.json();return hE(h)}else throw await dE("Generate Auth Token",u)}function G2(t,{fid:e}){return`${cE(t)}/${e}/authTokens:generate`}/**
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
 */async function Mf(t,e=!1){let n;const r=await yu(t.appConfig,i=>{if(!EE(i))throw Br.create("not-registered");const o=i.authToken;if(!e&&J2(o))return i;if(o.requestStatus===1)return n=Y2(t,e),i;{if(!navigator.onLine)throw Br.create("app-offline");const l=eN(i);return n=X2(t,l),l}});return n?await n:r.authToken}async function Y2(t,e){let n=await my(t.appConfig);for(;n.authToken.requestStatus===1;)await mE(100),n=await my(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mf(t,e):r}function my(t){return yu(t,e=>{if(!EE(e))throw Br.create("not-registered");const n=e.authToken;return tN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function X2(t,e){try{const n=await Q2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Vl(t.appConfig,r),n}catch(n){if(uE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _E(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vl(t.appConfig,r)}throw n}}function EE(t){return t!==void 0&&t.registrationStatus===2}function J2(t){return t.requestStatus===2&&!Z2(t)}function Z2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+x2}function eN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tN(t){return t.requestStatus===1&&t.requestTime+oE<Date.now()}/**
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
 */async function nN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vf(e);return r?r.catch(console.error):Mf(e).catch(console.error),n.fid}/**
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
 */async function rN(t,e=!1){const n=t;return await sN(n),(await Mf(n,e)).token}async function sN(t){const{registrationPromise:e}=await Vf(t);e&&await e}/**
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
 */function iN(t){if(!t||!t.options)throw kc("App Configuration");if(!t.name)throw kc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kc(t){return Br.create("missing-app-config-values",{valueName:t})}/**
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
 */const TE="installations",oN="installations-internal",aN=t=>{const e=t.getProvider("app").getImmediate(),n=iN(e),r=Kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lN=t=>{const e=t.getProvider("app").getImmediate(),n=Kr(e,TE).getImmediate();return{getId:()=>nN(n),getToken:s=>rN(n,s)}};function uN(){cn(new Xt(TE,aN,"PUBLIC")),cn(new Xt(oN,lN,"PRIVATE"))}uN();Lt(iE,Df);Lt(iE,Df,"esm2017");/**
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
 */const Ml="analytics",cN="firebase_id",hN="origin",dN=60*1e3,fN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new tu("@firebase/analytics");/**
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
 */const pN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new qr("analytics","Analytics",pN);/**
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
 */function mN(t){if(!t.startsWith(Lf)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function IE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function yN(t,e){const n=gN("firebase-js-sdk-policy",{createScriptURL:mN}),r=document.createElement("script"),s=`${Lf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function vN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _N(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await IE(n)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(l){Et.error(l)}t("config",s,i)}async function wN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await IE(n);for(const u of o){const h=l.find(y=>y.measurementId===u),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Et.error(i)}}function EN(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await wN(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await _N(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Et.error(l)}}return s}function TN(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=EN(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function IN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lf)&&n.src.includes(t))return n;return null}/**
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
 */const SN=30,AN=1e3;class xN{constructor(e={},n=AN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const SE=new xN;function kN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function RN(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:kN(r)},i=fN.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function CN(t,e=SE,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Rt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new bN;return setTimeout(async()=>{l.abort()},dN),AE({appId:r,apiKey:s,measurementId:i},o,l,e)}async function AE(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=SE){var i;const{appId:o,measurementId:l}=t;try{await PN(r,e)}catch(u){if(l)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await RN(t);return s.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!NN(h)){if(s.deleteThrottleMetadata(o),l)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw u}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?sg(n,s.intervalMillis,SN):sg(n,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,y),Et.debug(`Calling attemptFetch again in ${f} millis`),AE(t,y,r,s)}}function PN(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function NN(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DN(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function ON(){if(J_())try{await Z_()}catch(t){return Et.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function VN(t,e,n,r,s,i,o){var l;const u=CN(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>Et.error(k)),e.push(u);const h=ON().then(k=>{if(k)return r.getId()}),[f,y]=await Promise.all([u,h]);IN(i)||yN(i,f.measurementId),s("js",new Date);const w=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return w[hN]="firebase",w.update=!0,y!=null&&(w[cN]=y),s("config",f.measurementId,w),f.measurementId}/**
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
 */class MN{constructor(e){this.app=e}_delete(){return delete Hi[this.app.options.appId],Promise.resolve()}}let Hi={},gy=[];const yy={};let Rc="dataLayer",LN="gtag",vy,xE,_y=!1;function jN(){const t=[];if(X_()&&t.push("This is a browser extension environment."),JS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function FN(t,e,n){jN();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(Hi[r]!=null)throw Rt.create("already-exists",{id:r});if(!_y){vN(Rc);const{wrappedGtag:i,gtagCore:o}=TN(Hi,gy,yy,Rc,LN);xE=i,vy=o,_y=!0}return Hi[r]=VN(t,gy,yy,e,vy,Rc,n),new MN(t)}function UN(t=Hd()){t=Tt(t);const e=Kr(t,Ml);return e.isInitialized()?e.getImmediate():BN(t)}function BN(t,e={}){const n=Kr(t,Ml);if(n.isInitialized()){const s=n.getImmediate();if(uo(e,n.getOptions()))return s;throw Rt.create("already-initialized")}return n.initialize({options:e})}function zN(t,e,n,r){t=Tt(t),DN(xE,Hi[t.app.options.appId],e,n,r).catch(s=>Et.error(s))}const wy="@firebase/analytics",Ey="0.10.8";function $N(){cn(new Xt(Ml,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return FN(r,s,n)},"PUBLIC")),cn(new Xt("analytics-internal",t,"PRIVATE")),Lt(wy,Ey),Lt(wy,Ey,"esm2017");function t(e){try{const n=e.getProvider(Ml).getImmediate();return{logEvent:(r,s,i)=>zN(n,r,s,i)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}$N();const WN={VITE_FIREBASE_API_KEY:"AIzaSyDT7WprmgPSa_rONLEUkr9LWSZeHClpTFM",VITE_FIREBASE_APP_ID:"1:844876295872:web:4b3cd98e646846f0868725",VITE_FIREBASE_AUTH_DOMAIN:"leavetable-fd826.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"844876295872",VITE_FIREBASE_PROJECT_ID:"leavetable-fd826",VITE_FIREBASE_STORAGE_BUCKET:"leavetable-fd826.firebasestorage.app"},ns=WN,Cc={apiKey:ns.VITE_FIREBASE_API_KEY,authDomain:ns.VITE_FIREBASE_AUTH_DOMAIN,projectId:ns.VITE_FIREBASE_PROJECT_ID,storageBucket:ns.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:ns.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:ns.VITE_FIREBASE_APP_ID};let Sa,wo=null,un=null,vu=!1;if(Cc.apiKey&&Cc.projectId)try{Sa=r0(Cc);try{UN(Sa)}catch{}wo=oC(Sa),un=I2(Sa),vu=!0,console.log("Firebase initialized successfully"),ke("Firebase SDK initialized","success")}catch(t){console.error("Firebase initialization failed:",t),ke(`Firebase init failed: ${t.message}`,"error")}else console.warn("Firebase configuration missing."),ke("Firebase config missing","warn");const Aa=()=>vu,Ty=new vn,Ll="auth_redirect_pending",jf="auth_redirect_timestamp",HN=10*60*1e3,qN=()=>{const t=navigator.userAgent||navigator.vendor||window.opera||"";return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Line|FBAN|FBAV|Instagram|MicroMessenger/i.test(t)},KN=()=>{ke("[Auth] Setting redirect flag...","info"),localStorage.setItem(Ll,"true"),localStorage.setItem(jf,Date.now().toString())},$r=()=>{localStorage.getItem(Ll)&&(ke("[Auth] Clearing redirect flag.","info"),localStorage.removeItem(Ll),localStorage.removeItem(jf))},Qh=()=>{const t=localStorage.getItem(Ll)==="true",e=localStorage.getItem(jf);if(!t)return!1;if(e){const n=parseInt(e,10),r=Date.now();if(isNaN(n)||r-n>HN)return ke("[Auth] Redirect flag expired or invalid. Clearing.","warn"),$r(),!1}else return $r(),!1;return!0},QN=async(t=!1)=>{if(!un)throw new Error("Firebase Auth not initialized");const e=qN();if(ke(`[Login] Start. Mobile: ${e}. Strategy: Popup Only`),t){ke("[Login] Forcing Redirect...","info"),KN(),await LP(un,Ty);return}try{const n=await NP(un,Ty);return ke(`[Login] Popup Success: ${n.user.email}`,"success"),n.user}catch(n){throw console.warn("Popup failed:",n),ke(`[Login] Popup failed: ${n.code||n.message}`,"error"),n}},GN=async()=>{if(!un||!Qh())return null;ke("[Auth] Detected pending redirect. Checking result...","info");try{const t=await FP(un);return $r(),t?(ke(`[Auth] Redirect Success: ${t.user.email}`,"success"),t.user):(ke("[Auth] Redirect returned null (User cancelled or Session lost).","warn"),null)}catch(t){return $r(),console.error("Check Redirect Error:",t),ke(`[Auth] Check Redirect Error: ${t.message}`,"error"),null}},YN=async()=>{if(un)try{await hP(un),$r(),ke("User logged out","info")}catch(t){console.error("Logout failed",t),ke(`Logout error: ${t.message}`,"error")}},kE="shift_scheduler",RE="v1_data",XN=(t,e)=>{if(!vu||!wo)return()=>{};const n=dw(wo,kE,RE);return IC(n,r=>t(r.exists()?r.data():null),r=>{console.error("Sync error:",r),e(r)})},Pc=async t=>{if(!vu||!wo)return;const e=dw(wo,kE,RE);await TC(e,t)},Iy={year:new Date().getFullYear(),month:new Date().getMonth(),firstWorkDayA:"",membersA:[],dailyQuotasA:{},firstWorkDayB:"",membersB:[],dailyQuotasB:{}},JN=()=>{const[t,e]=te.useState("filling"),[n,r]=te.useState("A"),[s,i]=te.useState({settings:Iy,leaves:[]}),[o,l]=te.useState(null),[u,h]=te.useState(!0),[f,y]=te.useState(!1),[w,k]=te.useState(!0),[P,N]=te.useState(!1),[O,S]=te.useState(!1),E=te.useRef(!1);te.useEffect(()=>{N(Aa()),ke("App Mounted. Firebase Enabled: "+Aa())},[]);const A=_=>{console.error("Auth Error:",_);let v="登入失敗，請重試。";_.code==="auth/popup-closed-by-user"?v="登入視窗已被關閉。":_.code==="auth/unauthorized-domain"?v=`網域未授權 (${window.location.hostname})。`:_.message&&(v=_.message),alert(v)};te.useEffect(()=>{let _=!0,v;if(!Aa()||!un){h(!1);return}v=setTimeout(()=>{_&&u&&(ke("Safety Timer Triggered (8s). Clearing loading state.","error"),h(!1),$r())},8e3);const x=async()=>{if(Qh())try{await GN()||(ke("initAuth: Redirect checked but no user found. Stopping loading.","warn"),_&&h(!1))}catch{ke("initAuth: Redirect check error.","error"),_&&h(!1)}},R=un.onAuthStateChanged(I=>{_&&(I?(ke(`Auth User: ${I.email}`,"success"),l(I),h(!1),clearTimeout(v),$r()):(ke("Auth: No user session found."),l(null),Qh()||h(!1)))});return x(),()=>{_=!1,clearTimeout(v),R()}},[]);const D=_=>{const v={...Iy,..._.settings};return v.members&&v.members.length>0&&v.membersA.length===0&&(v.membersA=[...v.members],delete v.members),v.firstWorkDay&&!v.firstWorkDayA&&(v.firstWorkDayA=v.firstWorkDay,delete v.firstWorkDay),v.dailyQuotas&&Object.keys(v.dailyQuotas).length>0&&Object.keys(v.dailyQuotasA).length===0&&(v.dailyQuotasA={...v.dailyQuotas},delete v.dailyQuotas),{settings:v,leaves:_.leaves||[]}};te.useEffect(()=>{if(Aa()&&o){const _=XN(v=>{if(v)E.current=!0,i(D(v)),localStorage.setItem(Ei,JSON.stringify(v)),setTimeout(()=>{E.current=!1},100);else{const x=localStorage.getItem(Ei);if(x)try{const R=JSON.parse(x),I=D(R);i(I),Pc(I)}catch(R){console.error(R)}}k(!1)},v=>k(!1));return()=>_()}else{const _=localStorage.getItem(Ei);if(_)try{const v=JSON.parse(_);i(D(v))}catch(v){console.error(v)}k(!1)}},[o]);const F=async()=>{y(!0);try{await QN()}catch(_){y(!1),A(_)}},j=async()=>{window.confirm("確定要登出嗎？")&&(await YN(),k(!0))},T=_=>{const v={...s,settings:_};i(v),localStorage.setItem(Ei,JSON.stringify(v)),P&&!E.current&&o&&Pc(v).catch(x=>alert("同步失敗"))},g=_=>{const v={...s,leaves:_};i(v),localStorage.setItem(Ei,JSON.stringify(v)),P&&!E.current&&o&&Pc(v).catch(x=>alert("同步失敗"))};return u?m.jsxs("div",{className:"flex items-center justify-center h-screen bg-slate-50 flex-col gap-4 fixed inset-0 z-[9999]",children:[m.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-primary"}),m.jsx("div",{className:"text-slate-600 font-medium text-sm animate-pulse",children:"系統載入中..."}),m.jsx("div",{className:"fixed bottom-0 left-0 w-full h-10 opacity-0 z-50",onClick:()=>S(_=>!_)}),m.jsx(pc,{isVisible:O,onClose:()=>S(!1)})]}):P&&!o?m.jsxs(m.Fragment,{children:[m.jsx(DS,{onLogin:F,loading:f,onShowDebug:()=>S(!0)}),m.jsx(pc,{isVisible:O,onClose:()=>S(!1)})]}):m.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans",children:[m.jsx(mS,{currentPage:t,onNavigate:e,isFirebaseConnected:P,user:o,onLogout:j,currentGroup:n,onGroupChange:r}),m.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8",children:[!P&&m.jsx("div",{className:"mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r shadow-sm",children:m.jsxs("p",{className:"text-sm text-yellow-700",children:["目前使用 ",m.jsx("strong",{children:"本機模式"}),"。"]})}),w?m.jsx("div",{className:"flex justify-center py-10",children:m.jsx("div",{className:"animate-spin h-8 w-8 border-b-2 border-primary rounded-full"})}):m.jsxs(m.Fragment,{children:[t==="settings"&&m.jsx(IS,{settings:s.settings,onSaveSettings:T,currentGroup:n}),t==="filling"&&m.jsx(bS,{settings:s.settings,savedLeaves:s.leaves,onSaveLeaves:g,currentGroup:n})]})]}),m.jsx(pc,{isVisible:O,onClose:()=>S(!1)})]})},CE=document.getElementById("root");if(!CE)throw new Error("Could not find root element to mount to");const ZN=Nc.createRoot(CE);ZN.render(m.jsx(ET.StrictMode,{children:m.jsx(JN,{})}));
