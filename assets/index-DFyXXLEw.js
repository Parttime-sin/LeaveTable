var JI=Object.defineProperty;var ZI=(t,e,n)=>e in t?JI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ga=(t,e,n)=>ZI(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function eT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g_={exports:{}},tu={},y_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),tT=Symbol.for("react.portal"),nT=Symbol.for("react.fragment"),rT=Symbol.for("react.strict_mode"),sT=Symbol.for("react.profiler"),iT=Symbol.for("react.provider"),oT=Symbol.for("react.context"),aT=Symbol.for("react.forward_ref"),lT=Symbol.for("react.suspense"),uT=Symbol.for("react.memo"),cT=Symbol.for("react.lazy"),Nm=Symbol.iterator;function hT(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var __={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v_=Object.assign,w_={};function ai(t,e,n){this.props=t,this.context=e,this.refs=w_,this.updater=n||__}ai.prototype.isReactComponent={};ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E_(){}E_.prototype=ai.prototype;function Td(t,e,n){this.props=t,this.context=e,this.refs=w_,this.updater=n||__}var xd=Td.prototype=new E_;xd.constructor=Td;v_(xd,ai.prototype);xd.isPureReactComponent=!0;var Pm=Array.isArray,I_=Object.prototype.hasOwnProperty,Sd={current:null},T_={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)I_.call(e,r)&&!T_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Oo,type:t,key:i,ref:o,props:s,_owner:Sd.current}}function dT(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function fT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bm=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fT(""+t.key):e.toString(36)}function $a(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case tT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+cc(o,0):r,Pm(s)?(n="",t!=null&&(n=t.replace(bm,"$&/")+"/"),$a(s,e,n,"",function(h){return h})):s!=null&&(Ad(s)&&(s=dT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(bm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Pm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+cc(i,l);o+=$a(i,e,n,u,s)}else if(u=hT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+cc(i,l++),o+=$a(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var r=[],s=0;return $a(t,r,"","",function(i){return e.call(n,i,s++)}),r}function pT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Ba={transition:null},mT={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:Sd};function S_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=ai;ie.Fragment=nT;ie.Profiler=sT;ie.PureComponent=Td;ie.StrictMode=rT;ie.Suspense=lT;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mT;ie.act=S_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=v_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Sd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)I_.call(e,u)&&!T_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Oo,type:t.type,key:s,ref:i,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:oT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iT,_context:t},t.Consumer=t};ie.createElement=x_;ie.createFactory=function(t){var e=x_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:aT,render:t}};ie.isValidElement=Ad;ie.lazy=function(t){return{$$typeof:cT,_payload:{_status:-1,_result:t},_init:pT}};ie.memo=function(t,e){return{$$typeof:uT,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};ie.unstable_act=S_;ie.useCallback=function(t,e){return vt.current.useCallback(t,e)};ie.useContext=function(t){return vt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return vt.current.useEffect(t,e)};ie.useId=function(){return vt.current.useId()};ie.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return vt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};ie.useRef=function(t){return vt.current.useRef(t)};ie.useState=function(t){return vt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return vt.current.useTransition()};ie.version="18.3.1";y_.exports=ie;var X=y_.exports;const A_=eT(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gT=X,yT=Symbol.for("react.element"),_T=Symbol.for("react.fragment"),vT=Object.prototype.hasOwnProperty,wT=gT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ET={key:!0,ref:!0,__self:!0,__source:!0};function k_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vT.call(e,r)&&!ET.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:yT,type:t,key:i,ref:o,props:s,_owner:wT.current}}tu.Fragment=_T;tu.jsx=k_;tu.jsxs=k_;g_.exports=tu;var p=g_.exports,th={},R_={exports:{}},Ft={},C_={exports:{}},N_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,q){var H=F.length;F.push(q);e:for(;0<H;){var re=H-1>>>1,Q=F[re];if(0<s(Q,q))F[re]=q,F[H]=Q,H=re;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var q=F[0],H=F.pop();if(H!==q){F[0]=H;e:for(var re=0,Q=F.length,fe=Q>>>1;re<fe;){var Be=2*(re+1)-1,Gt=F[Be],Ct=Be+1,Nt=F[Ct];if(0>s(Gt,H))Ct<Q&&0>s(Nt,Gt)?(F[re]=Nt,F[Ct]=H,re=Ct):(F[re]=Gt,F[Be]=H,re=Be);else if(Ct<Q&&0>s(Nt,H))F[re]=Nt,F[Ct]=H,re=Ct;else break e}}return q}function s(F,q){var H=F.sortIndex-q.sortIndex;return H!==0?H:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,x=!1,N=!1,P=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(F){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=F)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function D(F){if(P=!1,A(F),!N)if(n(u)!==null)N=!0,W(V);else{var q=n(h);q!==null&&ee(D,q.startTime-F)}}function V(F,q){N=!1,P&&(P=!1,S(_),_=-1),x=!0;var H=g;try{for(A(q),m=n(u);m!==null&&(!(m.expirationTime>q)||F&&!k());){var re=m.callback;if(typeof re=="function"){m.callback=null,g=m.priorityLevel;var Q=re(m.expirationTime<=q);q=t.unstable_now(),typeof Q=="function"?m.callback=Q:m===n(u)&&r(u),A(q)}else r(u);m=n(u)}if(m!==null)var fe=!0;else{var Be=n(h);Be!==null&&ee(D,Be.startTime-q),fe=!1}return fe}finally{m=null,g=H,x=!1}}var L=!1,v=null,_=-1,E=5,T=-1;function k(){return!(t.unstable_now()-T<E)}function R(){if(v!==null){var F=t.unstable_now();T=F;var q=!0;try{q=v(!0,F)}finally{q?w():(L=!1,v=null)}}else L=!1}var w;if(typeof I=="function")w=function(){I(R)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ge=de.port2;de.port1.onmessage=R,w=function(){ge.postMessage(null)}}else w=function(){O(R,0)};function W(F){v=F,L||(L=!0,w())}function ee(F,q){_=O(function(){F(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){N||x||(N=!0,W(V))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var H=g;g=q;try{return F()}finally{g=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=g;g=F;try{return q()}finally{g=H}},t.unstable_scheduleCallback=function(F,q,H){var re=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?re+H:re):H=re,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=H+Q,F={id:f++,callback:q,priorityLevel:F,startTime:H,expirationTime:Q,sortIndex:-1},H>re?(F.sortIndex=H,e(h,F),n(u)===null&&F===n(h)&&(P?(S(_),_=-1):P=!0,ee(D,H-re))):(F.sortIndex=Q,e(u,F),N||x||(N=!0,W(V))),F},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(F){var q=g;return function(){var H=g;g=q;try{return F.apply(this,arguments)}finally{g=H}}}})(N_);C_.exports=N_;var IT=C_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT=X,jt=IT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P_=new Set,lo={};function as(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(lo[t]=e,t=0;t<e.length;t++)P_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=Object.prototype.hasOwnProperty,xT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Vm={};function ST(t){return nh.call(Vm,t)?!0:nh.call(Dm,t)?!1:xT.test(t)?Vm[t]=!0:(Dm[t]=!0,!1)}function AT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kT(t,e,n,r){if(e===null||typeof e>"u"||AT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var kd=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kd,Rd);Je[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kd,Rd);Je[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kd,Rd);Je[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cd(t,e,n,r){var s=Je.hasOwnProperty(e)?Je[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kT(e,n,s,r)&&(n=null),r||s===null?ST(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=TT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),ih=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),V_=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function Ni(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,hc;function Fi(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fi(t):""}function RT(t){switch(t.tag){case 5:return Fi(t.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case xs:return"Portal";case rh:return"Profiler";case Nd:return"StrictMode";case sh:return"Suspense";case ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D_:return(t.displayName||"Context")+".Consumer";case b_:return(t._context.displayName||"Context")+".Provider";case Pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:oh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return oh(t(e))}catch{}}return null}function CT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oh(e);case 8:return e===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NT(t){var e=M_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=NT(t))}function O_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=M_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ah(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L_(t,e){e=e.checked,e!=null&&Cd(t,"checked",e,!1)}function lh(t,e){L_(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ui=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ui(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function j_(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,U_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PT=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(t){PT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ki[e]=Ki[t]})});function $_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ki.hasOwnProperty(t)&&Ki[t]?(""+e).trim():e+"px"}function B_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=$_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var bT=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dh(t,e){if(e){if(bT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function Dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mh=null,Ls=null,js=null;function Um(t){if(t=Fo(t)){if(typeof mh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ou(e),mh(t.stateNode,t.type,e))}}function z_(t){Ls?js?js.push(t):js=[t]:Ls=t}function q_(){if(Ls){var t=Ls,e=js;if(js=Ls=null,Um(t),e)for(t=0;t<e.length;t++)Um(e[t])}}function W_(t,e){return t(e)}function H_(){}var pc=!1;function K_(t,e,n){if(pc)return t(e,n);pc=!0;try{return W_(t,e,n)}finally{pc=!1,(Ls!==null||js!==null)&&(H_(),q_())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var gh=!1;if(On)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){gh=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{gh=!1}function DT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Gi=!1,cl=null,hl=!1,yh=null,VT={onError:function(t){Gi=!0,cl=t}};function MT(t,e,n,r,s,i,o,l,u){Gi=!1,cl=null,DT.apply(VT,arguments)}function OT(t,e,n,r,s,i,o,l,u){if(MT.apply(this,arguments),Gi){if(Gi){var h=cl;Gi=!1,cl=null}else throw Error(U(198));hl||(hl=!0,yh=h)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function G_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $m(t){if(ls(t)!==t)throw Error(U(188))}function LT(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return $m(s),t;if(i===r)return $m(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Q_(t){return t=LT(t),t!==null?Y_(t):null}function Y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Y_(t);if(e!==null)return e;t=t.sibling}return null}var X_=jt.unstable_scheduleCallback,Bm=jt.unstable_cancelCallback,jT=jt.unstable_shouldYield,FT=jt.unstable_requestPaint,Ve=jt.unstable_now,UT=jt.unstable_getCurrentPriorityLevel,Vd=jt.unstable_ImmediatePriority,J_=jt.unstable_UserBlockingPriority,dl=jt.unstable_NormalPriority,$T=jt.unstable_LowPriority,Z_=jt.unstable_IdlePriority,nu=null,mn=null;function BT(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:WT,zT=Math.log,qT=Math.LN2;function WT(t){return t>>>=0,t===0?32:31-(zT(t)/qT|0)|0}var Ea=64,Ia=4194304;function $i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=$i(l):(i&=o,i!==0&&(r=$i(i)))}else o=n&~s,o!==0?r=$i(o):i!==0&&(r=$i(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),s=1<<n,r|=t[n],e&=~s;return r}function HT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-tn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=HT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function _h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ev(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function GT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-tn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var pe=0;function tv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nv,Od,rv,sv,iv,vh=!1,Ta=[],ur=null,cr=null,hr=null,ho=new Map,fo=new Map,tr=[],QT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zm(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function bi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Fo(e),e!==null&&Od(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function YT(t,e,n,r,s){switch(e){case"focusin":return ur=bi(ur,t,e,n,r,s),!0;case"dragenter":return cr=bi(cr,t,e,n,r,s),!0;case"mouseover":return hr=bi(hr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ho.set(i,bi(ho.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,fo.set(i,bi(fo.get(i)||null,t,e,n,r,s)),!0}return!1}function ov(t){var e=Fr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=G_(n),e!==null){t.blockedOn=e,iv(t.priority,function(){rv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ph=r,n.target.dispatchEvent(r),ph=null}else return e=Fo(n),e!==null&&Od(e),t.blockedOn=n,!1;e.shift()}return!0}function qm(t,e,n){za(t)&&n.delete(e)}function XT(){vh=!1,ur!==null&&za(ur)&&(ur=null),cr!==null&&za(cr)&&(cr=null),hr!==null&&za(hr)&&(hr=null),ho.forEach(qm),fo.forEach(qm)}function Di(t,e){t.blockedOn===e&&(t.blockedOn=null,vh||(vh=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,XT)))}function po(t){function e(s){return Di(s,t)}if(0<Ta.length){Di(Ta[0],t);for(var n=1;n<Ta.length;n++){var r=Ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&Di(ur,t),cr!==null&&Di(cr,t),hr!==null&&Di(hr,t),ho.forEach(e),fo.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)ov(n),n.blockedOn===null&&tr.shift()}var Fs=Wn.ReactCurrentBatchConfig,pl=!0;function JT(t,e,n,r){var s=pe,i=Fs.transition;Fs.transition=null;try{pe=1,Ld(t,e,n,r)}finally{pe=s,Fs.transition=i}}function ZT(t,e,n,r){var s=pe,i=Fs.transition;Fs.transition=null;try{pe=4,Ld(t,e,n,r)}finally{pe=s,Fs.transition=i}}function Ld(t,e,n,r){if(pl){var s=wh(t,e,n,r);if(s===null)Sc(t,e,r,ml,n),zm(t,r);else if(YT(s,t,e,n,r))r.stopPropagation();else if(zm(t,r),e&4&&-1<QT.indexOf(t)){for(;s!==null;){var i=Fo(s);if(i!==null&&nv(i),i=wh(t,e,n,r),i===null&&Sc(t,e,r,ml,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Sc(t,e,r,null,n)}}var ml=null;function wh(t,e,n,r){if(ml=null,t=Dd(r),t=Fr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=G_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UT()){case Vd:return 1;case J_:return 4;case dl:case $T:return 16;case Z_:return 536870912;default:return 16}default:return 16}}var or=null,jd=null,qa=null;function lv(){if(qa)return qa;var t,e=jd,n=e.length,r,s="value"in or?or.value:or.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return qa=s.slice(t,1<r?1-r:void 0)}function Wa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function Wm(){return!1}function Ut(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xa:Wm,this.isPropagationStopped=Wm,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Ut(li),jo=Ce({},li,{view:0,detail:0}),ex=Ut(jo),gc,yc,Vi,ru=Ce({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(gc=t.screenX-Vi.screenX,yc=t.screenY-Vi.screenY):yc=gc=0,Vi=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Hm=Ut(ru),tx=Ce({},ru,{dataTransfer:0}),nx=Ut(tx),rx=Ce({},jo,{relatedTarget:0}),_c=Ut(rx),sx=Ce({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=Ut(sx),ox=Ce({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ax=Ut(ox),lx=Ce({},li,{data:0}),Km=Ut(lx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hx[t])?!!e[t]:!1}function Ud(){return dx}var fx=Ce({},jo,{key:function(t){if(t.key){var e=ux[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?Wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),px=Ut(fx),mx=Ce({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=Ut(mx),gx=Ce({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),yx=Ut(gx),_x=Ce({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=Ut(_x),wx=Ce({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=Ut(wx),Ix=[9,13,27,32],$d=On&&"CompositionEvent"in window,Qi=null;On&&"documentMode"in document&&(Qi=document.documentMode);var Tx=On&&"TextEvent"in window&&!Qi,uv=On&&(!$d||Qi&&8<Qi&&11>=Qi),Qm=" ",Ym=!1;function cv(t,e){switch(t){case"keyup":return Ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function xx(t,e){switch(t){case"compositionend":return hv(e);case"keypress":return e.which!==32?null:(Ym=!0,Qm);case"textInput":return t=e.data,t===Qm&&Ym?null:t;default:return null}}function Sx(t,e){if(As)return t==="compositionend"||!$d&&cv(t,e)?(t=lv(),qa=jd=or=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uv&&e.locale!=="ko"?null:e.data;default:return null}}var Ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ax[t.type]:e==="textarea"}function dv(t,e,n,r){z_(r),e=gl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,mo=null;function kx(t){Tv(t,0)}function su(t){var e=Cs(t);if(O_(e))return t}function Rx(t,e){if(t==="change")return e}var fv=!1;if(On){var vc;if(On){var wc="oninput"in document;if(!wc){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),wc=typeof Jm.oninput=="function"}vc=wc}else vc=!1;fv=vc&&(!document.documentMode||9<document.documentMode)}function Zm(){Yi&&(Yi.detachEvent("onpropertychange",pv),mo=Yi=null)}function pv(t){if(t.propertyName==="value"&&su(mo)){var e=[];dv(e,mo,t,Dd(t)),K_(kx,e)}}function Cx(t,e,n){t==="focusin"?(Zm(),Yi=e,mo=n,Yi.attachEvent("onpropertychange",pv)):t==="focusout"&&Zm()}function Nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(mo)}function Px(t,e){if(t==="click")return su(e)}function bx(t,e){if(t==="input"||t==="change")return su(e)}function Dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:Dx;function go(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!nh.call(e,s)||!on(t[s],e[s]))return!1}return!0}function eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tg(t,e){var n=eg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eg(n)}}function mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gv(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ul(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Vx(t){var e=gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mv(n.ownerDocument.documentElement,n)){if(r!==null&&Bd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=tg(n,i);var o=tg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mx=On&&"documentMode"in document&&11>=document.documentMode,ks=null,Eh=null,Xi=null,Ih=!1;function ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||ks==null||ks!==ul(r)||(r=ks,"selectionStart"in r&&Bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&go(Xi,r)||(Xi=r,r=gl(Eh,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ks)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ec={},yv={};On&&(yv=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function iu(t){if(Ec[t])return Ec[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yv)return Ec[t]=e[n];return t}var _v=iu("animationend"),vv=iu("animationiteration"),wv=iu("animationstart"),Ev=iu("transitionend"),Iv=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){Iv.set(t,e),as(e,[t])}for(var Ic=0;Ic<rg.length;Ic++){var Tc=rg[Ic],Ox=Tc.toLowerCase(),Lx=Tc[0].toUpperCase()+Tc.slice(1);kr(Ox,"on"+Lx)}kr(_v,"onAnimationEnd");kr(vv,"onAnimationIteration");kr(wv,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Ev,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OT(r,e,void 0,t),t.currentTarget=null}function Tv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;sg(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;sg(s,l,h),i=u}}}if(hl)throw t=yh,hl=!1,yh=null,t}function Ie(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var r=t+"__bubble";n.has(r)||(xv(e,t,2,!1),n.add(r))}function xc(t,e,n){var r=0;e&&(r|=4),xv(n,t,r,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Aa]){t[Aa]=!0,P_.forEach(function(n){n!=="selectionchange"&&(jx.has(n)||xc(n,!1,t),xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,xc("selectionchange",!1,e))}}function xv(t,e,n,r){switch(av(e)){case 1:var s=JT;break;case 4:s=ZT;break;default:s=Ld}n=s.bind(null,e,n,t),s=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Sc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}K_(function(){var h=i,f=Dd(n),m=[];e:{var g=Iv.get(t);if(g!==void 0){var x=Fd,N=t;switch(t){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":x=px;break;case"focusin":N="focus",x=_c;break;case"focusout":N="blur",x=_c;break;case"beforeblur":case"afterblur":x=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=yx;break;case _v:case vv:case wv:x=ix;break;case Ev:x=vx;break;case"scroll":x=ex;break;case"wheel":x=Ex;break;case"copy":case"cut":case"paste":x=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Gm}var P=(e&4)!==0,O=!P&&t==="scroll",S=P?g!==null?g+"Capture":null:g;P=[];for(var I=h,A;I!==null;){A=I;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,S!==null&&(D=co(I,S),D!=null&&P.push(_o(I,D,A)))),O)break;I=I.return}0<P.length&&(g=new x(g,N,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",g&&n!==ph&&(N=n.relatedTarget||n.fromElement)&&(Fr(N)||N[Ln]))break e;if((x||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,x?(N=n.relatedTarget||n.toElement,x=h,N=N?Fr(N):null,N!==null&&(O=ls(N),N!==O||N.tag!==5&&N.tag!==6)&&(N=null)):(x=null,N=h),x!==N)){if(P=Hm,D="onMouseLeave",S="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(P=Gm,D="onPointerLeave",S="onPointerEnter",I="pointer"),O=x==null?g:Cs(x),A=N==null?g:Cs(N),g=new P(D,I+"leave",x,n,f),g.target=O,g.relatedTarget=A,D=null,Fr(f)===h&&(P=new P(S,I+"enter",N,n,f),P.target=A,P.relatedTarget=O,D=P),O=D,x&&N)t:{for(P=x,S=N,I=0,A=P;A;A=vs(A))I++;for(A=0,D=S;D;D=vs(D))A++;for(;0<I-A;)P=vs(P),I--;for(;0<A-I;)S=vs(S),A--;for(;I--;){if(P===S||S!==null&&P===S.alternate)break t;P=vs(P),S=vs(S)}P=null}else P=null;x!==null&&ig(m,g,x,P,!1),N!==null&&O!==null&&ig(m,O,N,P,!0)}}e:{if(g=h?Cs(h):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var V=Rx;else if(Xm(g))if(fv)V=bx;else{V=Nx;var L=Cx}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=Px);if(V&&(V=V(t,h))){dv(m,V,n,f);break e}L&&L(t,g,h),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&uh(g,"number",g.value)}switch(L=h?Cs(h):window,t){case"focusin":(Xm(L)||L.contentEditable==="true")&&(ks=L,Eh=h,Xi=null);break;case"focusout":Xi=Eh=ks=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,ng(m,n,f);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":ng(m,n,f)}var v;if($d)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else As?cv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(uv&&n.locale!=="ko"&&(As||_!=="onCompositionStart"?_==="onCompositionEnd"&&As&&(v=lv()):(or=f,jd="value"in or?or.value:or.textContent,As=!0)),L=gl(h,_),0<L.length&&(_=new Km(_,t,null,n,f),m.push({event:_,listeners:L}),v?_.data=v:(v=hv(n),v!==null&&(_.data=v)))),(v=Tx?xx(t,n):Sx(t,n))&&(h=gl(h,"onBeforeInput"),0<h.length&&(f=new Km("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}Tv(m,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=co(t,n),i!=null&&r.unshift(_o(t,i,s)),i=co(t,e),i!=null&&r.push(_o(t,i,s))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ig(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=co(n,i),u!=null&&o.unshift(_o(n,u,l))):s||(u=co(n,i),u!=null&&o.push(_o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fx=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(Fx,`
`).replace(Ux,"")}function ka(t,e,n){if(e=og(e),og(t)!==e&&n)throw Error(U(425))}function yl(){}var Th=null,xh=null;function Sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(zx)}:Ah;function zx(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);po(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),fn="__reactFiber$"+ui,vo="__reactProps$"+ui,Ln="__reactContainer$"+ui,kh="__reactEvents$"+ui,qx="__reactListeners$"+ui,Wx="__reactHandles$"+ui;function Fr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lg(t);t!==null;){if(n=t[fn])return n;t=lg(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[fn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ou(t){return t[vo]||null}var Rh=[],Ns=-1;function Rr(t){return{current:t}}function xe(t){0>Ns||(t.current=Rh[Ns],Rh[Ns]=null,Ns--)}function we(t,e){Ns++,Rh[Ns]=t.current,t.current=e}var Tr={},ct=Rr(Tr),xt=Rr(!1),Qr=Tr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function _l(){xe(xt),xe(ct)}function ug(t,e,n){if(ct.current!==Tr)throw Error(U(168));we(ct,e),we(xt,n)}function Sv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,CT(t)||"Unknown",s));return Ce({},n,r)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Qr=ct.current,we(ct,t),we(xt,xt.current),!0}function cg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Sv(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,xe(xt),xe(ct),we(ct,t)):xe(xt),we(xt,n)}var kn=null,au=!1,kc=!1;function Av(t){kn===null?kn=[t]:kn.push(t)}function Hx(t){au=!0,Av(t)}function Cr(){if(!kc&&kn!==null){kc=!0;var t=0,e=pe;try{var n=kn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,au=!1}catch(s){throw kn!==null&&(kn=kn.slice(t+1)),X_(Vd,Cr),s}finally{pe=e,kc=!1}}return null}var Ps=[],bs=0,wl=null,El=0,$t=[],Bt=0,Yr=null,Cn=1,Nn="";function Or(t,e){Ps[bs++]=El,Ps[bs++]=wl,wl=t,El=e}function kv(t,e,n){$t[Bt++]=Cn,$t[Bt++]=Nn,$t[Bt++]=Yr,Yr=t;var r=Cn;t=Nn;var s=32-tn(r)-1;r&=~(1<<s),n+=1;var i=32-tn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Cn=1<<32-tn(e)+s|n<<s|r,Nn=i+t}else Cn=1<<i|n<<s|r,Nn=t}function zd(t){t.return!==null&&(Or(t,1),kv(t,1,0))}function qd(t){for(;t===wl;)wl=Ps[--bs],Ps[bs]=null,El=Ps[--bs],Ps[bs]=null;for(;t===Yr;)Yr=$t[--Bt],$t[Bt]=null,Nn=$t[--Bt],$t[Bt]=null,Cn=$t[--Bt],$t[Bt]=null}var Mt=null,Dt=null,Se=!1,en=null;function Rv(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Dt=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Cn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Dt=null,!0):!1;default:return!1}}function Ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nh(t){if(Se){var e=Dt;if(e){var n=e;if(!hg(t,e)){if(Ch(t))throw Error(U(418));e=dr(n.nextSibling);var r=Mt;e&&hg(t,e)?Rv(r,n):(t.flags=t.flags&-4097|2,Se=!1,Mt=t)}}else{if(Ch(t))throw Error(U(418));t.flags=t.flags&-4097|2,Se=!1,Mt=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Ra(t){if(t!==Mt)return!1;if(!Se)return dg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sh(t.type,t.memoizedProps)),e&&(e=Dt)){if(Ch(t))throw Cv(),Error(U(418));for(;e;)Rv(t,e),e=dr(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Mt?dr(t.stateNode.nextSibling):null;return!0}function Cv(){for(var t=Dt;t;)t=dr(t.nextSibling)}function Gs(){Dt=Mt=null,Se=!1}function Wd(t){en===null?en=[t]:en.push(t)}var Kx=Wn.ReactCurrentBatchConfig;function Mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ca(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fg(t){var e=t._init;return e(t._payload)}function Nv(t){function e(S,I){if(t){var A=S.deletions;A===null?(S.deletions=[I],S.flags|=16):A.push(I)}}function n(S,I){if(!t)return null;for(;I!==null;)e(S,I),I=I.sibling;return null}function r(S,I){for(S=new Map;I!==null;)I.key!==null?S.set(I.key,I):S.set(I.index,I),I=I.sibling;return S}function s(S,I){return S=gr(S,I),S.index=0,S.sibling=null,S}function i(S,I,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<I?(S.flags|=2,I):A):(S.flags|=2,I)):(S.flags|=1048576,I)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,I,A,D){return I===null||I.tag!==6?(I=Vc(A,S.mode,D),I.return=S,I):(I=s(I,A),I.return=S,I)}function u(S,I,A,D){var V=A.type;return V===Ss?f(S,I,A.props.children,D,A.key):I!==null&&(I.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Jn&&fg(V)===I.type)?(D=s(I,A.props),D.ref=Mi(S,I,A),D.return=S,D):(D=Ja(A.type,A.key,A.props,null,S.mode,D),D.ref=Mi(S,I,A),D.return=S,D)}function h(S,I,A,D){return I===null||I.tag!==4||I.stateNode.containerInfo!==A.containerInfo||I.stateNode.implementation!==A.implementation?(I=Mc(A,S.mode,D),I.return=S,I):(I=s(I,A.children||[]),I.return=S,I)}function f(S,I,A,D,V){return I===null||I.tag!==7?(I=Kr(A,S.mode,D,V),I.return=S,I):(I=s(I,A),I.return=S,I)}function m(S,I,A){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Vc(""+I,S.mode,A),I.return=S,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case _a:return A=Ja(I.type,I.key,I.props,null,S.mode,A),A.ref=Mi(S,null,I),A.return=S,A;case xs:return I=Mc(I,S.mode,A),I.return=S,I;case Jn:var D=I._init;return m(S,D(I._payload),A)}if(Ui(I)||Ni(I))return I=Kr(I,S.mode,A,null),I.return=S,I;Ca(S,I)}return null}function g(S,I,A,D){var V=I!==null?I.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return V!==null?null:l(S,I,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case _a:return A.key===V?u(S,I,A,D):null;case xs:return A.key===V?h(S,I,A,D):null;case Jn:return V=A._init,g(S,I,V(A._payload),D)}if(Ui(A)||Ni(A))return V!==null?null:f(S,I,A,D,null);Ca(S,A)}return null}function x(S,I,A,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(A)||null,l(I,S,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case _a:return S=S.get(D.key===null?A:D.key)||null,u(I,S,D,V);case xs:return S=S.get(D.key===null?A:D.key)||null,h(I,S,D,V);case Jn:var L=D._init;return x(S,I,A,L(D._payload),V)}if(Ui(D)||Ni(D))return S=S.get(A)||null,f(I,S,D,V,null);Ca(I,D)}return null}function N(S,I,A,D){for(var V=null,L=null,v=I,_=I=0,E=null;v!==null&&_<A.length;_++){v.index>_?(E=v,v=null):E=v.sibling;var T=g(S,v,A[_],D);if(T===null){v===null&&(v=E);break}t&&v&&T.alternate===null&&e(S,v),I=i(T,I,_),L===null?V=T:L.sibling=T,L=T,v=E}if(_===A.length)return n(S,v),Se&&Or(S,_),V;if(v===null){for(;_<A.length;_++)v=m(S,A[_],D),v!==null&&(I=i(v,I,_),L===null?V=v:L.sibling=v,L=v);return Se&&Or(S,_),V}for(v=r(S,v);_<A.length;_++)E=x(v,S,_,A[_],D),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?_:E.key),I=i(E,I,_),L===null?V=E:L.sibling=E,L=E);return t&&v.forEach(function(k){return e(S,k)}),Se&&Or(S,_),V}function P(S,I,A,D){var V=Ni(A);if(typeof V!="function")throw Error(U(150));if(A=V.call(A),A==null)throw Error(U(151));for(var L=V=null,v=I,_=I=0,E=null,T=A.next();v!==null&&!T.done;_++,T=A.next()){v.index>_?(E=v,v=null):E=v.sibling;var k=g(S,v,T.value,D);if(k===null){v===null&&(v=E);break}t&&v&&k.alternate===null&&e(S,v),I=i(k,I,_),L===null?V=k:L.sibling=k,L=k,v=E}if(T.done)return n(S,v),Se&&Or(S,_),V;if(v===null){for(;!T.done;_++,T=A.next())T=m(S,T.value,D),T!==null&&(I=i(T,I,_),L===null?V=T:L.sibling=T,L=T);return Se&&Or(S,_),V}for(v=r(S,v);!T.done;_++,T=A.next())T=x(v,S,_,T.value,D),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?_:T.key),I=i(T,I,_),L===null?V=T:L.sibling=T,L=T);return t&&v.forEach(function(R){return e(S,R)}),Se&&Or(S,_),V}function O(S,I,A,D){if(typeof A=="object"&&A!==null&&A.type===Ss&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case _a:e:{for(var V=A.key,L=I;L!==null;){if(L.key===V){if(V=A.type,V===Ss){if(L.tag===7){n(S,L.sibling),I=s(L,A.props.children),I.return=S,S=I;break e}}else if(L.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Jn&&fg(V)===L.type){n(S,L.sibling),I=s(L,A.props),I.ref=Mi(S,L,A),I.return=S,S=I;break e}n(S,L);break}else e(S,L);L=L.sibling}A.type===Ss?(I=Kr(A.props.children,S.mode,D,A.key),I.return=S,S=I):(D=Ja(A.type,A.key,A.props,null,S.mode,D),D.ref=Mi(S,I,A),D.return=S,S=D)}return o(S);case xs:e:{for(L=A.key;I!==null;){if(I.key===L)if(I.tag===4&&I.stateNode.containerInfo===A.containerInfo&&I.stateNode.implementation===A.implementation){n(S,I.sibling),I=s(I,A.children||[]),I.return=S,S=I;break e}else{n(S,I);break}else e(S,I);I=I.sibling}I=Mc(A,S.mode,D),I.return=S,S=I}return o(S);case Jn:return L=A._init,O(S,I,L(A._payload),D)}if(Ui(A))return N(S,I,A,D);if(Ni(A))return P(S,I,A,D);Ca(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,I!==null&&I.tag===6?(n(S,I.sibling),I=s(I,A),I.return=S,S=I):(n(S,I),I=Vc(A,S.mode,D),I.return=S,S=I),o(S)):n(S,I)}return O}var Qs=Nv(!0),Pv=Nv(!1),Il=Rr(null),Tl=null,Ds=null,Hd=null;function Kd(){Hd=Ds=Tl=null}function Gd(t){var e=Il.current;xe(Il),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){Tl=t,Hd=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(Tl===null)throw Error(U(308));Ds=t,Tl.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Ur=null;function Qd(t){Ur===null?Ur=[t]:Ur.push(t)}function bv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Qd(e)):(n.next=s.next,s.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,jn(t,n)}return s=r.interleaved,s===null?(e.next=e,Qd(r)):(e.next=s.next,s.next=e),r.interleaved=e,jn(t,n)}function Ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Md(t,n)}}function pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var s=t.updateQueue;Zn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=h=u=null,l=i;do{var g=l.lane,x=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,P=l;switch(g=e,x=n,P.tag){case 1:if(N=P.payload,typeof N=="function"){m=N.call(x,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,g=typeof N=="function"?N.call(x,m,g):N,g==null)break e;m=Ce({},m,g);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=x,u=m):f=f.next=x,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=m}}function mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Uo={},gn=Rr(Uo),wo=Rr(Uo),Eo=Rr(Uo);function $r(t){if(t===Uo)throw Error(U(174));return t}function Xd(t,e){switch(we(Eo,e),we(wo,t),we(gn,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hh(e,t)}xe(gn),we(gn,e)}function Ys(){xe(gn),xe(wo),xe(Eo)}function Vv(t){$r(Eo.current);var e=$r(gn.current),n=hh(e,t.type);e!==n&&(we(wo,t),we(gn,n))}function Jd(t){wo.current===t&&(xe(gn),xe(wo))}var Ae=Rr(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function Zd(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var Ka=Wn.ReactCurrentDispatcher,Cc=Wn.ReactCurrentBatchConfig,Xr=0,Re=null,Ue=null,qe=null,Al=!1,Ji=!1,Io=0,Gx=0;function st(){throw Error(U(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,s,i){if(Xr=i,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?Jx:Zx,t=n(r,s),Ji){i=0;do{if(Ji=!1,Io=0,25<=i)throw Error(U(301));i+=1,qe=Ue=null,e.updateQueue=null,Ka.current=e1,t=n(r,s)}while(Ji)}if(Ka.current=kl,e=Ue!==null&&Ue.next!==null,Xr=0,qe=Ue=Re=null,Al=!1,e)throw Error(U(300));return t}function nf(){var t=Io!==0;return Io=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Re.memoizedState=qe=t:qe=qe.next=t,qe}function Kt(){if(Ue===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=qe===null?Re.memoizedState:qe.next;if(e!==null)qe=e,Ue=t;else{if(t===null)throw Error(U(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},qe===null?Re.memoizedState=qe=t:qe=qe.next=t}return qe}function To(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Xr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Re.lanes|=f,Jr|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,on(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Re.lanes|=i,Jr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);on(i,e.memoizedState)||(Tt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Mv(){}function Ov(t,e){var n=Re,r=Kt(),s=e(),i=!on(r.memoizedState,s);if(i&&(r.memoizedState=s,Tt=!0),r=r.queue,rf(Fv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,xo(9,jv.bind(null,n,r,s,e),void 0,null),We===null)throw Error(U(349));Xr&30||Lv(n,e,s)}return s}function Lv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jv(t,e,n,r){e.value=n,e.getSnapshot=r,Uv(e)&&$v(t)}function Fv(t,e,n){return n(function(){Uv(e)&&$v(t)})}function Uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function $v(t){var e=jn(t,1);e!==null&&nn(e,t,1,-1)}function gg(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=Xx.bind(null,Re,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Bv(){return Kt().memoizedState}function Ga(t,e,n,r){var s=dn();Re.flags|=t,s.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function lu(t,e,n,r){var s=Kt();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&ef(r,o.deps)){s.memoizedState=xo(e,n,i,r);return}}Re.flags|=t,s.memoizedState=xo(1|e,n,i,r)}function yg(t,e){return Ga(8390656,8,t,e)}function rf(t,e){return lu(2048,8,t,e)}function zv(t,e){return lu(4,2,t,e)}function qv(t,e){return lu(4,4,t,e)}function Wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,Wv.bind(null,e,t),n)}function sf(){}function Kv(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gv(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Qv(t,e,n){return Xr&21?(on(n,e)||(n=ev(),Re.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function Qx(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Cc.transition;Cc.transition={};try{t(!1),e()}finally{pe=n,Cc.transition=r}}function Yv(){return Kt().memoizedState}function Yx(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xv(t))Jv(e,n);else if(n=bv(t,e,n,r),n!==null){var s=yt();nn(n,t,r,s),Zv(n,e,r)}}function Xx(t,e,n){var r=mr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xv(t))Jv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,on(l,o)){var u=e.interleaved;u===null?(s.next=s,Qd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=bv(t,e,s,r),n!==null&&(s=yt(),nn(n,t,r,s),Zv(n,e,r))}}function Xv(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function Jv(t,e){Ji=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Md(t,n)}}var kl={readContext:Ht,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Jx={readContext:Ht,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ga(4194308,4,Wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ga(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ga(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Yx.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:gg,useDebugValue:sf,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=gg(!1),e=t[0];return t=Qx.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,s=dn();if(Se){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),We===null)throw Error(U(349));Xr&30||Lv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,yg(Fv.bind(null,r,i,t),[t]),r.flags|=2048,xo(9,jv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=dn(),e=We.identifierPrefix;if(Se){var n=Nn,r=Cn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zx={readContext:Ht,useCallback:Kv,useContext:Ht,useEffect:rf,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:qv,useMemo:Gv,useReducer:Nc,useRef:Bv,useState:function(){return Nc(To)},useDebugValue:sf,useDeferredValue:function(t){var e=Kt();return Qv(e,Ue.memoizedState,t)},useTransition:function(){var t=Nc(To)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Mv,useSyncExternalStore:Ov,useId:Yv,unstable_isNewReconciler:!1},e1={readContext:Ht,useCallback:Kv,useContext:Ht,useEffect:rf,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:qv,useMemo:Gv,useReducer:Pc,useRef:Bv,useState:function(){return Pc(To)},useDebugValue:sf,useDeferredValue:function(t){var e=Kt();return Ue===null?e.memoizedState=t:Qv(e,Ue.memoizedState,t)},useTransition:function(){var t=Pc(To)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Mv,useSyncExternalStore:Ov,useId:Yv,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),s=mr(t),i=Vn(r,s);i.payload=e,n!=null&&(i.callback=n),e=fr(t,i,s),e!==null&&(nn(e,t,s,r),Ha(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),s=mr(t),i=Vn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=fr(t,i,s),e!==null&&(nn(e,t,s,r),Ha(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=mr(t),s=Vn(n,r);s.tag=2,e!=null&&(s.callback=e),e=fr(t,s,r),e!==null&&(nn(e,t,r,n),Ha(e,t,r))}};function _g(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(s,i):!0}function e0(t,e,n){var r=!1,s=Tr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ht(i):(s=St(e)?Qr:ct.current,r=e.contextTypes,i=(r=r!=null)?Ks(t,s):Tr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function vg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Yd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ht(i):(i=St(e)?Qr:ct.current,s.context=Ks(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(bh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&uu.enqueueReplaceState(s,s.state,null),xl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=RT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var t1=typeof WeakMap=="function"?WeakMap:Map;function t0(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cl||(Cl=!0,qh=r),Vh(t,e)},n}function n0(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Vh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vh(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new t1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=m1.bind(null,t,e,n),e.then(t,t))}function Eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ig(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var n1=Wn.ReactCurrentOwner,Tt=!1;function gt(t,e,n,r){e.child=t===null?Pv(e,null,n,r):Qs(e,t.child,n,r)}function Tg(t,e,n,r,s){n=n.render;var i=e.ref;return Us(e,s),r=tf(t,e,n,r,i,s),n=nf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Fn(t,e,s)):(Se&&n&&zd(e),e.flags|=1,gt(t,e,r,s),e.child)}function xg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!ff(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,r0(t,e,i,r,s)):(t=Ja(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Fn(t,e,s)}return e.flags|=1,t=gr(i,r),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(go(i,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Fn(t,e,s)}return Mh(t,e,n,r,s)}function s0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ms,bt),bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Ms,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,we(Ms,bt),bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,we(Ms,bt),bt|=r;return gt(t,e,s,n),e.child}function i0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,r,s){var i=St(n)?Qr:ct.current;return i=Ks(e,i),Us(e,s),n=tf(t,e,n,r,i,s),r=nf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Fn(t,e,s)):(Se&&r&&zd(e),e.flags|=1,gt(t,e,n,s),e.child)}function Sg(t,e,n,r,s){if(St(n)){var i=!0;vl(e)}else i=!1;if(Us(e,s),e.stateNode===null)Qa(t,e),e0(e,n,r),Dh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ht(h):(h=St(n)?Qr:ct.current,h=Ks(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&vg(e,o,r,h),Zn=!1;var g=e.memoizedState;o.state=g,xl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||xt.current||Zn?(typeof f=="function"&&(bh(e,n,f,r),u=e.memoizedState),(l=Zn||_g(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Dv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Jt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=St(n)?Qr:ct.current,u=Ks(e,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&vg(e,o,r,u),Zn=!1,g=e.memoizedState,o.state=g,xl(e,r,o,s);var N=e.memoizedState;l!==m||g!==N||xt.current||Zn?(typeof x=="function"&&(bh(e,n,x,r),N=e.memoizedState),(h=Zn||_g(e,n,h,r,g,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Oh(t,e,n,r,i,s)}function Oh(t,e,n,r,s,i){i0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&cg(e,n,!1),Fn(t,e,i);r=e.stateNode,n1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,i),e.child=Qs(e,null,l,i)):gt(t,e,l,i),e.memoizedState=r.state,s&&cg(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ug(t,e.context,!1),Xd(t,e.containerInfo)}function Ag(t,e,n,r,s){return Gs(),Wd(s),e.flags|=256,gt(t,e,n,r),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function a0(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),we(Ae,s&1),t===null)return Nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=du(o,r,0,null),t=Kr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=jh(n),e.memoizedState=Lh,t):of(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return r1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=gr(l,i):(i=Kr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Lh,r}return i=t.child,t=i.sibling,r=gr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&Wd(r),Qs(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function r1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=bc(Error(U(422))),Na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=du({mode:"visible",children:r.children},s,0,null),i=Kr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=jh(o),e.memoizedState=Lh,i);if(!(e.mode&1))return Na(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=bc(i,r,void 0),Na(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=We,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,jn(t,s),nn(r,t,s,-1))}return df(),r=bc(Error(U(421))),Na(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=g1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Dt=dr(s.nextSibling),Mt=e,Se=!0,en=null,t!==null&&($t[Bt++]=Cn,$t[Bt++]=Nn,$t[Bt++]=Yr,Cn=t.id,Nn=t.overflow,Yr=e),e=of(e,r.children),e.flags|=4096,e)}function kg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function Dc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function l0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(gt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,n,e);else if(t.tag===19)kg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Sl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dc(e,!0,n,null,i);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function s1(t,e,n){switch(e.tag){case 3:o0(e),Gs();break;case 5:Vv(e);break;case 1:St(e.type)&&vl(e);break;case 4:Xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;we(Il,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?a0(t,e,n):(we(Ae,Ae.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);we(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return l0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return Fn(t,e,n)}var u0,Fh,c0,h0;u0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fh=function(){};c0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,$r(gn.current);var i=null;switch(n){case"input":s=ah(t,s),r=ah(t,r),i=[];break;case"select":s=Ce({},s,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":s=ch(t,s),r=ch(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=yl)}dh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(lo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(lo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ie("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};h0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Oi(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function i1(t,e,n){var r=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return St(e.type)&&_l(),it(e),null;case 3:return r=e.stateNode,Ys(),xe(xt),xe(ct),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Kh(en),en=null))),Fh(t,e),it(e),null;case 5:Jd(e);var s=$r(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)c0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return it(e),null}if(t=$r(gn.current),Ra(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[fn]=e,r[vo]=i,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(s=0;s<Bi.length;s++)Ie(Bi[s],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Om(r,i),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ie("invalid",r);break;case"textarea":jm(r,i),Ie("invalid",r)}dh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ka(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ka(r.textContent,l,t),s=["children",""+l]):lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":va(r),Lm(r,i,!0);break;case"textarea":va(r),Fm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=yl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[vo]=r,u0(t,e,!1,!1),e.stateNode=t;e:{switch(o=fh(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),s=r;break;case"iframe":case"object":case"embed":Ie("load",t),s=r;break;case"video":case"audio":for(s=0;s<Bi.length;s++)Ie(Bi[s],t);s=r;break;case"source":Ie("error",t),s=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),s=r;break;case"details":Ie("toggle",t),s=r;break;case"input":Om(t,r),s=ah(t,r),Ie("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ce({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":jm(t,r),s=ch(t,r),Ie("invalid",t);break;default:s=r}dh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?B_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&U_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&uo(t,u):typeof u=="number"&&uo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ie("scroll",t):u!=null&&Cd(t,i,u,o))}switch(n){case"input":va(t),Lm(t,r,!1);break;case"textarea":va(t),Fm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Os(t,!!r.multiple,i,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)h0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=$r(Eo.current),$r(gn.current),Ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(i=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:ka(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return it(e),null;case 13:if(xe(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Dt!==null&&e.mode&1&&!(e.flags&128))Cv(),Gs(),e.flags|=98560,i=!1;else if(i=Ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[fn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),i=!1}else en!==null&&(Kh(en),en=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?$e===0&&($e=3):df())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return Ys(),Fh(t,e),t===null&&yo(e.stateNode.containerInfo),it(e),null;case 10:return Gd(e.type._context),it(e),null;case 17:return St(e.type)&&_l(),it(e),null;case 19:if(xe(Ae),i=e.memoizedState,i===null)return it(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Oi(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,Oi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ve()>Js&&(e.flags|=128,r=!0,Oi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Se)return it(e),null}else 2*Ve()-i.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,Oi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,we(Ae,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function o1(t,e){switch(qd(e),e.tag){case 1:return St(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),xe(xt),xe(ct),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(xe(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ae),null;case 4:return Ys(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Pa=!1,lt=!1,a1=typeof WeakSet=="function"?WeakSet:Set,z=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Uh(t,e,n){try{n()}catch(r){be(t,e,r)}}var Rg=!1;function l1(t,e){if(Th=pl,t=gv(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var x;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++f===r&&(u=o),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},pl=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var P=N.memoizedProps,O=N.memoizedState,S=e.stateNode,I=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Jt(e.type,P),O);S.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){be(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return N=Rg,Rg=!1,N}function Zi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Uh(e,n,i)}s=s.next}while(s!==r)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function d0(t){var e=t.alternate;e!==null&&(t.alternate=null,d0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[vo],delete e[kh],delete e[qx],delete e[Wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function f0(t){return t.tag===5||t.tag===3||t.tag===4}function Cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}var Ke=null,Zt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)p0(t,e,n),n=n.sibling}function p0(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:lt||Vs(n,e);case 6:var r=Ke,s=Zt;Ke=null,Yn(t,e,n),Ke=r,Zt=s,Ke!==null&&(Zt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Zt?(t=Ke,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),po(t)):Ac(Ke,n.stateNode));break;case 4:r=Ke,s=Zt,Ke=n.stateNode.containerInfo,Zt=!0,Yn(t,e,n),Ke=r,Zt=s;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Uh(n,e,o),s=s.next}while(s!==r)}Yn(t,e,n);break;case 1:if(!lt&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Yn(t,e,n),lt=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Ng(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new a1),e.forEach(function(r){var s=y1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Zt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Zt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(Ke===null)throw Error(U(160));p0(i,o,s),Ke=null,Zt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){be(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m0(e,t),e=e.sibling}function m0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),hn(t),r&4){try{Zi(3,t,t.return),cu(3,t)}catch(P){be(t,t.return,P)}try{Zi(5,t,t.return)}catch(P){be(t,t.return,P)}}break;case 1:Xt(e,t),hn(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(Xt(e,t),hn(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var s=t.stateNode;try{uo(s,"")}catch(P){be(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&L_(s,i),fh(l,o);var h=fh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?B_(s,m):f==="dangerouslySetInnerHTML"?U_(s,m):f==="children"?uo(s,m):Cd(s,f,m,h)}switch(l){case"input":lh(s,i);break;case"textarea":j_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Os(s,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Os(s,!!i.multiple,i.defaultValue,!0):Os(s,!!i.multiple,i.multiple?[]:"",!1))}s[vo]=i}catch(P){be(t,t.return,P)}}break;case 6:if(Xt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){be(t,t.return,P)}}break;case 3:if(Xt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(P){be(t,t.return,P)}break;case 4:Xt(e,t),hn(t);break;case 13:Xt(e,t),hn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(uf=Ve())),r&4&&Ng(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(h=lt)||f,Xt(e,t),lt=h):Xt(e,t),hn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(m=z=f;z!==null;){switch(g=z,x=g.child,g.tag){case 0:case 11:case 14:case 15:Zi(4,g,g.return);break;case 1:Vs(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(P){be(r,n,P)}}break;case 5:Vs(g,g.return);break;case 22:if(g.memoizedState!==null){bg(m);continue}}x!==null?(x.return=g,z=x):bg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=$_("display",o))}catch(P){be(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){be(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xt(e,t),hn(t),r&4&&Ng(t);break;case 21:break;default:Xt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(f0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(uo(s,""),r.flags&=-33);var i=Cg(t);zh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Cg(t);Bh(t,l,o);break;default:throw Error(U(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function u1(t,e,n){z=t,g0(t)}function g0(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var s=z,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Pa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||lt;l=Pa;var h=lt;if(Pa=o,(lt=u)&&!h)for(z=s;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?Dg(s):u!==null?(u.return=o,z=u):Dg(s);for(;i!==null;)z=i,g0(i),i=i.sibling;z=s,Pa=l,lt=h}Pg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,z=i):Pg(t)}}function Pg(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&mg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&po(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}lt||e.flags&512&&$h(e)}catch(g){be(e,e.return,g)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function bg(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Dg(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){be(e,s,u)}}var i=e.return;try{$h(e)}catch(u){be(e,i,u)}break;case 5:var o=e.return;try{$h(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var c1=Math.ceil,Rl=Wn.ReactCurrentDispatcher,af=Wn.ReactCurrentOwner,qt=Wn.ReactCurrentBatchConfig,ue=0,We=null,Oe=null,Ye=0,bt=0,Ms=Rr(0),$e=0,So=null,Jr=0,hu=0,lf=0,eo=null,Et=null,uf=0,Js=1/0,An=null,Cl=!1,qh=null,pr=null,ba=!1,ar=null,Nl=0,to=0,Wh=null,Ya=-1,Xa=0;function yt(){return ue&6?Ve():Ya!==-1?Ya:Ya=Ve()}function mr(t){return t.mode&1?ue&2&&Ye!==0?Ye&-Ye:Kx.transition!==null?(Xa===0&&(Xa=ev()),Xa):(t=pe,t!==0||(t=window.event,t=t===void 0?16:av(t.type)),t):1}function nn(t,e,n,r){if(50<to)throw to=0,Wh=null,Error(U(185));Lo(t,n,r),(!(ue&2)||t!==We)&&(t===We&&(!(ue&2)&&(hu|=n),$e===4&&nr(t,Ye)),At(t,r),n===1&&ue===0&&!(e.mode&1)&&(Js=Ve()+500,au&&Cr()))}function At(t,e){var n=t.callbackNode;KT(t,e);var r=fl(t,t===We?Ye:0);if(r===0)n!==null&&Bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bm(n),e===1)t.tag===0?Hx(Vg.bind(null,t)):Av(Vg.bind(null,t)),Bx(function(){!(ue&6)&&Cr()}),n=null;else{switch(tv(r)){case 1:n=Vd;break;case 4:n=J_;break;case 16:n=dl;break;case 536870912:n=Z_;break;default:n=dl}n=x0(n,y0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y0(t,e){if(Ya=-1,Xa=0,ue&6)throw Error(U(327));var n=t.callbackNode;if($s()&&t.callbackNode!==n)return null;var r=fl(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Pl(t,r);else{e=r;var s=ue;ue|=2;var i=v0();(We!==t||Ye!==e)&&(An=null,Js=Ve()+500,Hr(t,e));do try{f1();break}catch(l){_0(t,l)}while(!0);Kd(),Rl.current=i,ue=s,Oe!==null?e=0:(We=null,Ye=0,e=$e)}if(e!==0){if(e===2&&(s=_h(t),s!==0&&(r=s,e=Hh(t,s))),e===1)throw n=So,Hr(t,0),nr(t,r),At(t,Ve()),n;if(e===6)nr(t,r);else{if(s=t.current.alternate,!(r&30)&&!h1(s)&&(e=Pl(t,r),e===2&&(i=_h(t),i!==0&&(r=i,e=Hh(t,i))),e===1))throw n=So,Hr(t,0),nr(t,r),At(t,Ve()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Lr(t,Et,An);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=uf+500-Ve(),10<e)){if(fl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ah(Lr.bind(null,t,Et,An),e);break}Lr(t,Et,An);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-tn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c1(r/1960))-r,10<r){t.timeoutHandle=Ah(Lr.bind(null,t,Et,An),r);break}Lr(t,Et,An);break;case 5:Lr(t,Et,An);break;default:throw Error(U(329))}}}return At(t,Ve()),t.callbackNode===n?y0.bind(null,t):null}function Hh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=Et,Et=n,e!==null&&Kh(e)),t}function Kh(t){Et===null?Et=t:Et.push.apply(Et,t)}function h1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!on(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~lf,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Vg(t){if(ue&6)throw Error(U(327));$s();var e=fl(t,0);if(!(e&1))return At(t,Ve()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var r=_h(t);r!==0&&(e=r,n=Hh(t,r))}if(n===1)throw n=So,Hr(t,0),nr(t,e),At(t,Ve()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,Et,An),At(t,Ve()),null}function cf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Js=Ve()+500,au&&Cr())}}function Zr(t){ar!==null&&ar.tag===0&&!(ue&6)&&$s();var e=ue;ue|=1;var n=qt.transition,r=pe;try{if(qt.transition=null,pe=1,t)return t()}finally{pe=r,qt.transition=n,ue=e,!(ue&6)&&Cr()}}function hf(){bt=Ms.current,xe(Ms)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$x(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_l();break;case 3:Ys(),xe(xt),xe(ct),Zd();break;case 5:Jd(r);break;case 4:Ys();break;case 13:xe(Ae);break;case 19:xe(Ae);break;case 10:Gd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(We=t,Oe=t=gr(t.current,null),Ye=bt=e,$e=0,So=null,lf=hu=Jr=0,Et=eo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ur=null}return t}function _0(t,e){do{var n=Oe;try{if(Kd(),Ka.current=kl,Al){for(var r=Re.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Al=!1}if(Xr=0,qe=Ue=Re=null,Ji=!1,Io=0,af.current=null,n===null||n.return===null){$e=1,So=e,Oe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Eg(o);if(x!==null){x.flags&=-257,Ig(x,o,l,i,e),x.mode&1&&wg(i,h,e),e=x,u=h;var N=e.updateQueue;if(N===null){var P=new Set;P.add(u),e.updateQueue=P}else N.add(u);break e}else{if(!(e&1)){wg(i,h,e),df();break e}u=Error(U(426))}}else if(Se&&l.mode&1){var O=Eg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Ig(O,o,l,i,e),Wd(Xs(u,l));break e}}i=u=Xs(u,l),$e!==4&&($e=2),eo===null?eo=[i]:eo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=t0(i,u,e);pg(i,S);break e;case 1:l=u;var I=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof I.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(pr===null||!pr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=n0(i,l,e);pg(i,D);break e}}i=i.return}while(i!==null)}E0(n)}catch(V){e=V,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function v0(){var t=Rl.current;return Rl.current=kl,t===null?kl:t}function df(){($e===0||$e===3||$e===2)&&($e=4),We===null||!(Jr&268435455)&&!(hu&268435455)||nr(We,Ye)}function Pl(t,e){var n=ue;ue|=2;var r=v0();(We!==t||Ye!==e)&&(An=null,Hr(t,e));do try{d1();break}catch(s){_0(t,s)}while(!0);if(Kd(),ue=n,Rl.current=r,Oe!==null)throw Error(U(261));return We=null,Ye=0,$e}function d1(){for(;Oe!==null;)w0(Oe)}function f1(){for(;Oe!==null&&!jT();)w0(Oe)}function w0(t){var e=T0(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?E0(t):Oe=e,af.current=null}function E0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=o1(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Oe=null;return}}else if(n=i1(n,e,bt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);$e===0&&($e=5)}function Lr(t,e,n){var r=pe,s=qt.transition;try{qt.transition=null,pe=1,p1(t,e,n,r)}finally{qt.transition=s,pe=r}return null}function p1(t,e,n,r){do $s();while(ar!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(GT(t,i),t===We&&(Oe=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,x0(dl,function(){return $s(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qt.transition,qt.transition=null;var o=pe;pe=1;var l=ue;ue|=4,af.current=null,l1(t,n),m0(n,t),Vx(xh),pl=!!Th,xh=Th=null,t.current=n,u1(n),FT(),ue=l,pe=o,qt.transition=i}else t.current=n;if(ba&&(ba=!1,ar=t,Nl=s),i=t.pendingLanes,i===0&&(pr=null),BT(n.stateNode),At(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Cl)throw Cl=!1,t=qh,qh=null,t;return Nl&1&&t.tag!==0&&$s(),i=t.pendingLanes,i&1?t===Wh?to++:(to=0,Wh=t):to=0,Cr(),null}function $s(){if(ar!==null){var t=tv(Nl),e=qt.transition,n=pe;try{if(qt.transition=null,pe=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,Nl=0,ue&6)throw Error(U(331));var s=ue;for(ue|=4,z=t.current;z!==null;){var i=z,o=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Zi(8,f,i)}var m=f.child;if(m!==null)m.return=f,z=m;else for(;z!==null;){f=z;var g=f.sibling,x=f.return;if(d0(f),f===h){z=null;break}if(g!==null){g.return=x,z=g;break}z=x}}}var N=i.alternate;if(N!==null){var P=N.child;if(P!==null){N.child=null;do{var O=P.sibling;P.sibling=null,P=O}while(P!==null)}}z=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,z=o;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zi(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,z=S;break e}z=i.return}}var I=t.current;for(z=I;z!==null;){o=z;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,z=A;else e:for(o=I;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cu(9,l)}}catch(V){be(l,l.return,V)}if(l===o){z=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,z=D;break e}z=l.return}}if(ue=s,Cr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(nu,t)}catch{}r=!0}return r}finally{pe=n,qt.transition=e}}return!1}function Mg(t,e,n){e=Xs(n,e),e=t0(t,e,1),t=fr(t,e,1),e=yt(),t!==null&&(Lo(t,1,e),At(t,e))}function be(t,e,n){if(t.tag===3)Mg(t,t,n);else for(;e!==null;){if(e.tag===3){Mg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=Xs(n,t),t=n0(e,t,1),e=fr(e,t,1),t=yt(),e!==null&&(Lo(e,1,t),At(e,t));break}}e=e.return}}function m1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&($e===4||$e===3&&(Ye&130023424)===Ye&&500>Ve()-uf?Hr(t,0):lf|=n),At(t,e)}function I0(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=yt();t=jn(t,e),t!==null&&(Lo(t,e,n),At(t,n))}function g1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I0(t,n)}function y1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),I0(t,n)}var T0;T0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,s1(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,Se&&e.flags&1048576&&kv(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qa(t,e),t=e.pendingProps;var s=Ks(e,ct.current);Us(e,n),s=tf(null,e,r,t,s,n);var i=nf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,vl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yd(e),s.updater=uu,e.stateNode=s,s._reactInternals=e,Dh(e,r,t,n),e=Oh(null,e,r,!0,i,n)):(e.tag=0,Se&&i&&zd(e),gt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=v1(r),t=Jt(r,t),s){case 0:e=Mh(null,e,r,t,n);break e;case 1:e=Sg(null,e,r,t,n);break e;case 11:e=Tg(null,e,r,t,n);break e;case 14:e=xg(null,e,r,Jt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Jt(r,s),Mh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Jt(r,s),Sg(t,e,r,s,n);case 3:e:{if(o0(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Dv(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Xs(Error(U(423)),e),e=Ag(t,e,r,n,s);break e}else if(r!==s){s=Xs(Error(U(424)),e),e=Ag(t,e,r,n,s);break e}else for(Dt=dr(e.stateNode.containerInfo.firstChild),Mt=e,Se=!0,en=null,n=Pv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===s){e=Fn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return Vv(e),t===null&&Nh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Sh(r,s)?o=null:i!==null&&Sh(r,i)&&(e.flags|=32),i0(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Nh(e),null;case 13:return a0(t,e,n);case 4:return Xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Jt(r,s),Tg(t,e,r,s,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,we(Il,r._currentValue),r._currentValue=o,i!==null)if(on(i.value,o)){if(i.children===s.children&&!xt.current){e=Fn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Vn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ph(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ph(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}gt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Us(e,n),s=Ht(s),r=r(s),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,s=Jt(r,e.pendingProps),s=Jt(r.type,s),xg(t,e,r,s,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Jt(r,s),Qa(t,e),e.tag=1,St(r)?(t=!0,vl(e)):t=!1,Us(e,n),e0(e,r,s),Dh(e,r,s,n),Oh(null,e,r,!0,t,n);case 19:return l0(t,e,n);case 22:return s0(t,e,n)}throw Error(U(156,e.tag))};function x0(t,e){return X_(t,e)}function _1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new _1(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v1(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pd)return 11;if(t===bd)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ja(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Kr(n.children,s,i,e);case Nd:o=8,s|=8;break;case rh:return t=zt(12,n,e,s|2),t.elementType=rh,t.lanes=i,t;case sh:return t=zt(13,n,e,s),t.elementType=sh,t.lanes=i,t;case ih:return t=zt(19,n,e,s),t.elementType=ih,t.lanes=i,t;case V_:return du(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b_:o=10;break e;case D_:o=9;break e;case Pd:o=11;break e;case bd:o=14;break e;case Jn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=zt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Kr(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function du(t,e,n,r){return t=zt(22,t,r,e),t.elementType=V_,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function Mc(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,s,i,o,l,u){return t=new w1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=zt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(i),t}function E1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return Tr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(St(n))return Sv(t,n,e)}return e}function A0(t,e,n,r,s,i,o,l,u){return t=pf(n,r,!0,t,s,i,o,l,u),t.context=S0(null),n=t.current,r=yt(),s=mr(n),i=Vn(r,s),i.callback=e??null,fr(n,i,s),t.current.lanes=s,Lo(t,s,r),At(t,r),t}function fu(t,e,n,r){var s=e.current,i=yt(),o=mr(s);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(s,e,o),t!==null&&(nn(t,s,o,i),Ha(t,s,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){Og(t,e),(t=t.alternate)&&Og(t,e)}function I1(){return null}var k0=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}pu.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));fu(t,e,null,null)};pu.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){fu(null,t,null,null)}),e[Ln]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=sv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&ov(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function T1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=bl(o);i.call(h)}}var o=A0(e,r,t,0,null,!1,!1,"",Lg);return t._reactRootContainer=o,t[Ln]=o.current,yo(t.nodeType===8?t.parentNode:t),Zr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=bl(u);l.call(h)}}var u=pf(t,0,!1,null,null,!1,!1,"",Lg);return t._reactRootContainer=u,t[Ln]=u.current,yo(t.nodeType===8?t.parentNode:t),Zr(function(){fu(e,u,n,r)}),u}function gu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=bl(o);l.call(u)}}fu(e,o,t,s)}else o=T1(n,e,t,s,r);return bl(o)}nv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$i(e.pendingLanes);n!==0&&(Md(e,n|1),At(e,Ve()),!(ue&6)&&(Js=Ve()+500,Cr()))}break;case 13:Zr(function(){var r=jn(t,1);if(r!==null){var s=yt();nn(r,t,1,s)}}),mf(t,1)}};Od=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=yt();nn(e,t,134217728,n)}mf(t,134217728)}};rv=function(t){if(t.tag===13){var e=mr(t),n=jn(t,e);if(n!==null){var r=yt();nn(n,t,e,r)}mf(t,e)}};sv=function(){return pe};iv=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};mh=function(t,e,n){switch(e){case"input":if(lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ou(r);if(!s)throw Error(U(90));O_(r),lh(r,s)}}}break;case"textarea":j_(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};W_=cf;H_=Zr;var x1={usingClientEntryPoint:!1,Events:[Fo,Cs,ou,z_,q_,cf]},Li={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S1={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Q_(t),t===null?null:t.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||I1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{nu=Da.inject(S1),mn=Da}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x1;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(U(200));return E1(t,e,null,n)};Ft.createRoot=function(t,e){if(!yf(t))throw Error(U(299));var n=!1,r="",s=k0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,s),t[Ln]=e.current,yo(t.nodeType===8?t.parentNode:t),new gf(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Q_(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return Zr(t)};Ft.hydrate=function(t,e,n){if(!mu(e))throw Error(U(200));return gu(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=k0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A0(e,null,t,1,n??null,s,!1,i,o),t[Ln]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new pu(e)};Ft.render=function(t,e,n){if(!mu(e))throw Error(U(200));return gu(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!mu(t))throw Error(U(40));return t._reactRootContainer?(Zr(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Ft.unstable_batchedUpdates=cf;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return gu(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function R0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0)}catch(t){console.error(t)}}R0(),R_.exports=Ft;var A1=R_.exports,jg=A1;th.createRoot=jg.createRoot,th.hydrateRoot=jg.hydrateRoot;/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Fg=t=>{const e=R1(t);return e.charAt(0).toUpperCase()+e.slice(1)},C0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),C1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=X.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>X.createElement("svg",{ref:u,...N1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:C0("lucide",s),...!i&&!C1(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>X.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(t,e)=>{const n=X.forwardRef(({className:r,...s},i)=>X.createElement(P1,{ref:i,iconNode:e,className:C0(`lucide-${k1(Fg(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Fg(t),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],D1=_e("arrow-left",b1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],M1=_e("arrow-right",V1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],N0=_e("bug",O1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]],j1=_e("calendar-range",L1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Gh=_e("calendar",F1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$1=_e("chevron-down",U1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],z1=_e("chevron-right",B1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ug=_e("circle-alert",q1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],H1=_e("download",W1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],G1=_e("eraser",K1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Y1=_e("external-link",Q1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Qh=_e("history",X1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Z1=_e("lock",J1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],$g=_e("log-out",eS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],nS=_e("menu",tS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],P0=_e("plus",rS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],_f=_e("refresh-cw",sS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Bg=_e("save",iS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zg=_e("settings",oS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],lS=_e("share-2",aS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],b0=_e("shield-check",uS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],hS=_e("sliders-vertical",cS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],fS=_e("square-pen",dS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],D0=_e("trash-2",pS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],vf=_e("triangle-alert",mS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],yS=_e("user",gS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vS=_e("users",_S);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wf=_e("x",wS),ES=({currentPage:t,onNavigate:e,isFirebaseConnected:n,user:r,onLogout:s,currentGroup:i,onGroupChange:o})=>{const[l,u]=X.useState(!1);return p.jsxs("nav",{className:"bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50",children:[p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"flex justify-between h-16",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsxs("div",{className:"flex-shrink-0 flex items-center text-primary cursor-pointer",onClick:()=>e("filling"),children:[p.jsx(b0,{className:"h-8 w-8 mr-2"}),p.jsx("span",{className:"font-bold text-lg hidden sm:block tracking-tight text-slate-800",children:"龍岡分隊假表管理"}),p.jsx("span",{className:"font-bold text-lg sm:hidden text-slate-800",children:"龍岡分隊"})]}),p.jsxs("div",{className:"hidden sm:ml-8 sm:flex sm:space-x-4",children:[p.jsxs("button",{onClick:()=>e("settings"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="settings"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[p.jsx(zg,{className:"w-4 h-4 mr-2"}),"配額設定"]}),p.jsxs("button",{onClick:()=>e("filling"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="filling"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[p.jsx(Gh,{className:"w-4 h-4 mr-2"}),"假表填寫"]}),p.jsxs("button",{onClick:()=>e("history"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="history"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[p.jsx(Qh,{className:"w-4 h-4 mr-2"}),"歷史紀錄"]})]})]}),p.jsxs("div",{className:"flex items-center space-x-2 mx-4",children:[p.jsx("button",{onClick:()=>o("A"),className:`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${i==="A"?"bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm":"bg-white border-transparent text-gray-500 hover:bg-gray-50"}`,children:"A班"}),p.jsx("button",{onClick:()=>o("B"),className:`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${i==="B"?"bg-teal-50 border-teal-500 text-teal-700 shadow-sm":"bg-white border-transparent text-gray-500 hover:bg-gray-50"}`,children:"B班"})]}),p.jsx("div",{className:"hidden sm:flex items-center space-x-4",children:n&&r?p.jsxs("div",{className:"flex items-center pl-4 border-l border-slate-200",children:[p.jsxs("div",{className:"flex flex-col items-end mr-3",children:[p.jsx("span",{className:"text-sm font-semibold text-slate-700 max-w-[120px] truncate",children:r.displayName||"使用者"}),p.jsx("span",{className:"text-[10px] text-slate-400 max-w-[120px] truncate",children:r.email})]}),r.photoURL?p.jsx("img",{className:"h-9 w-9 rounded-full border-2 border-slate-100 shadow-sm",src:r.photoURL,alt:""}):p.jsx("div",{className:"h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200",children:p.jsx(yS,{className:"h-5 w-5 text-slate-400"})}),p.jsx("button",{onClick:s,className:"ml-4 p-2 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors",title:"登出",children:p.jsx($g,{className:"w-5 h-5"})})]}):p.jsx("div",{className:"flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200",children:"本機模式"})}),p.jsx("div",{className:"flex items-center sm:hidden",children:p.jsx("button",{onClick:()=>u(!l),className:"inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none",children:l?p.jsx(wf,{className:"block h-6 w-6"}):p.jsx(nS,{className:"block h-6 w-6"})})})]})}),l&&p.jsxs("div",{className:"sm:hidden border-t border-slate-100 bg-white",children:[p.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[p.jsxs("button",{onClick:()=>{e("settings"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="settings"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[p.jsx(zg,{className:"w-5 h-5 mr-3"}),"配額設定"]}),p.jsxs("button",{onClick:()=>{e("filling"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="filling"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[p.jsx(Gh,{className:"w-5 h-5 mr-3"}),"假表填寫"]}),p.jsxs("button",{onClick:()=>{e("history"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="history"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[p.jsx(Qh,{className:"w-5 h-5 mr-3"}),"歷史紀錄"]})]}),p.jsx("div",{className:"pt-4 pb-4 border-t border-slate-200 bg-slate-50",children:n&&r?p.jsx("div",{className:"flex justify-end px-4",children:p.jsxs("button",{onClick:s,className:"flex items-center px-4 py-2 rounded-md bg-white text-slate-600 hover:text-red-600 shadow-sm border border-slate-200 transition-colors",title:"登出",children:[p.jsx("span",{className:"mr-2 font-medium",children:"登出"}),p.jsx($g,{className:"w-5 h-5"})]})}):p.jsx("div",{className:"px-4 py-2",children:p.jsx("div",{className:"text-center text-sm text-amber-700 bg-amber-100 py-1 rounded",children:"目前為本機離線模式"})})})]})]})},V0=["日","一","二","三","四","五","六"],Yh=t=>new Date(t.getFullYear(),t.getMonth(),1),M0=t=>new Date(t.getFullYear(),t.getMonth()+1,0),Xh=({start:t,end:e})=>{const n=[],r=new Date(t);for(;r<=e;)n.push(new Date(r)),r.setDate(r.getDate()+1);return n},er=(t,e)=>{if(e==="yyyy-MM-dd"){const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${s}`}return e==="d"?String(t.getDate()):e==="EEE"?V0[t.getDay()]:""},O0=t=>t.getDay(),Dl=t=>{const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)},IS=(t,e)=>{const n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((n-r)/(1e3*60*60*24))},TS=(t,e)=>{const n=new Date(t);return n.setDate(n.getDate()+e),n},L0=(t,e,n={})=>n[t]!==void 0?n[t]:e?IS(Dl(t),Dl(e))%2===0:!1,rn="shift_scheduler",Ef=(t,e)=>{const n=String(t).padStart(4,"0"),r=String(e+1).padStart(2,"0");return`${n}-${r}`},If=(t,e)=>`settings_${t}_${e}`,Tf=(t,e)=>`${t}_${e}`,Za=(t,e,n)=>`${t}_${e}_${n}`,xS=t=>{const[e,n]=t.split("-").map(Number),r=new Date(e,(n||1)-1,1);return r.setMonth(r.getMonth()-1),Ef(r.getFullYear(),r.getMonth())};var qg={};/**
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
 */const j0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},SS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},F0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,x=h&63;u||(x=64,o||(g=64)),r.push(n[f],n[m],n[g],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(j0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new AS;const g=i<<2|l>>4;if(r.push(g),h!==64){const x=l<<4&240|h>>2;if(r.push(x),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kS=function(t){const e=j0(t);return F0.encodeByteArray(e,!0)},Vl=function(t){return kS(t).replace(/\./g,"")},U0=function(t){try{return F0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CS=()=>RS().__FIREBASE_DEFAULTS__,NS=()=>{if(typeof process>"u"||typeof qg>"u")return;const t=qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U0(t[1]);return e&&JSON.parse(e)},yu=()=>{try{return CS()||NS()||PS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$0=t=>{var e,n;return(n=(e=yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bS=t=>{const e=$0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},B0=()=>{var t;return(t=yu())===null||t===void 0?void 0:t.config},z0=t=>{var e;return(e=yu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class DS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function VS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function OS(){var t;const e=(t=yu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function q0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FS(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function US(){return!OS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W0(){try{return typeof indexedDB=="object"}catch{return!1}}function H0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function $S(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const BS="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BS,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new un(s,l,r)}}function zS(t,e){return t.replace(qS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qS=/\{\$([^}]+)}/g;function WS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ao(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wg(i)&&Wg(o)){if(!Ao(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wg(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function HS(t,e){const n=new KS(t,e);return n.subscribe.bind(n)}class KS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Oc),s.error===void 0&&(s.error=Oc),s.complete===void 0&&(s.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oc(){}/**
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
 */const QS=1e3,YS=2,XS=4*60*60*1e3,JS=.5;function Hg(t,e=QS,n=YS){const r=e*Math.pow(n,t),s=Math.round(JS*r*(Math.random()-.5)*2);return Math.min(XS,r+s)}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class ZS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tA(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eA(t){return t===jr?void 0:t}function tA(t){return t.instantiationMode==="EAGER"}/**
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
 */class nA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const rA={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},sA=ae.INFO,iA={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},oA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=iA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=sA,this._logHandler=oA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const aA=(t,e)=>e.some(n=>t instanceof n);let Kg,Gg;function lA(){return Kg||(Kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uA(){return Gg||(Gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K0=new WeakMap,Jh=new WeakMap,G0=new WeakMap,Lc=new WeakMap,xf=new WeakMap;function cA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&K0.set(n,t)}).catch(()=>{}),xf.set(e,t),e}function hA(t){if(Jh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Jh.set(t,e)}let Zh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||G0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dA(t){Zh=t(Zh)}function fA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return G0.set(r,e.sort?e.sort():[e]),yr(r)}:uA().includes(t)?function(...e){return t.apply(jc(this),e),yr(K0.get(this))}:function(...e){return yr(t.apply(jc(this),e))}}function pA(t){return typeof t=="function"?fA(t):(t instanceof IDBTransaction&&hA(t),aA(t,lA())?new Proxy(t,Zh):t)}function yr(t){if(t instanceof IDBRequest)return cA(t);if(Lc.has(t))return Lc.get(t);const e=pA(t);return e!==t&&(Lc.set(t,e),xf.set(e,t)),e}const jc=t=>xf.get(t);function Q0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yr(o.result),u.oldVersion,u.newVersion,yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const mA=["get","getKey","getAll","getAllKeys","count"],gA=["put","add","delete","clear"],Fc=new Map;function Qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=gA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Fc.set(e,i),i}dA(t=>({...t,get:(e,n,r)=>Qg(e,n)||t.get(e,n,r),has:(e,n)=>!!Qg(e,n)||t.has(e,n)}));/**
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
 */class yA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_A(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _A(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ed="@firebase/app",Yg="0.10.13";/**
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
 */const Un=new _u("@firebase/app"),vA="@firebase/app-compat",wA="@firebase/analytics-compat",EA="@firebase/analytics",IA="@firebase/app-check-compat",TA="@firebase/app-check",xA="@firebase/auth",SA="@firebase/auth-compat",AA="@firebase/database",kA="@firebase/data-connect",RA="@firebase/database-compat",CA="@firebase/functions",NA="@firebase/functions-compat",PA="@firebase/installations",bA="@firebase/installations-compat",DA="@firebase/messaging",VA="@firebase/messaging-compat",MA="@firebase/performance",OA="@firebase/performance-compat",LA="@firebase/remote-config",jA="@firebase/remote-config-compat",FA="@firebase/storage",UA="@firebase/storage-compat",$A="@firebase/firestore",BA="@firebase/vertexai-preview",zA="@firebase/firestore-compat",qA="firebase",WA="10.14.1";/**
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
 */const td="[DEFAULT]",HA={[ed]:"fire-core",[vA]:"fire-core-compat",[EA]:"fire-analytics",[wA]:"fire-analytics-compat",[TA]:"fire-app-check",[IA]:"fire-app-check-compat",[xA]:"fire-auth",[SA]:"fire-auth-compat",[AA]:"fire-rtdb",[kA]:"fire-data-connect",[RA]:"fire-rtdb-compat",[CA]:"fire-fn",[NA]:"fire-fn-compat",[PA]:"fire-iid",[bA]:"fire-iid-compat",[DA]:"fire-fcm",[VA]:"fire-fcm-compat",[MA]:"fire-perf",[OA]:"fire-perf-compat",[LA]:"fire-rc",[jA]:"fire-rc-compat",[FA]:"fire-gcs",[UA]:"fire-gcs-compat",[$A]:"fire-fst",[zA]:"fire-fst-compat",[BA]:"fire-vertex","fire-js":"fire-js",[qA]:"fire-js-all"};/**
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
 */const Ml=new Map,KA=new Map,nd=new Map;function Xg(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(nd.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;nd.set(e,t);for(const n of Ml.values())Xg(n,t);for(const n of KA.values())Xg(n,t);return!0}function cs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
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
 */const GA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new us("app","Firebase",GA);/**
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
 */class QA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=WA;function Y0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:td,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _r.create("bad-app-name",{appName:String(s)});if(n||(n=B0()),!n)throw _r.create("no-options");const i=Ml.get(s);if(i){if(Ao(n,i.options)&&Ao(r,i.config))return i;throw _r.create("duplicate-app",{appName:s})}const o=new nA(s);for(const u of nd.values())o.addComponent(u);const l=new QA(n,r,o);return Ml.set(s,l),l}function Sf(t=td){const e=Ml.get(t);if(!e&&t===td&&B0())return Y0();if(!e)throw _r.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let s=(r=HA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}En(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const YA="firebase-heartbeat-database",XA=1,ko="firebase-heartbeat-store";let Uc=null;function X0(){return Uc||(Uc=Q0(YA,XA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function JA(t){try{const n=(await X0()).transaction(ko),r=await n.objectStore(ko).get(J0(t));return await n.done,r}catch(e){if(e instanceof un)Un.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function Jg(t,e){try{const r=(await X0()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,J0(t)),await r.done}catch(n){if(n instanceof un)Un.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function J0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZA=1024,ek=30*24*60*60*1e3;class tk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ek}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zg(),{heartbeatsToSend:r,unsentEntries:s}=nk(this._heartbeatsCache.heartbeats),i=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Un.warn(n),""}}}function Zg(){return new Date().toISOString().substring(0,10)}function nk(t,e=ZA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ey(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W0()?H0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ey(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sk(t){En(new an("platform-logger",e=>new yA(e),"PRIVATE")),En(new an("heartbeat",e=>new tk(e),"PRIVATE")),Wt(ed,Yg,t),Wt(ed,Yg,"esm2017"),Wt("fire-js","")}sk("");var ik="firebase",ok="10.14.1";/**
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
 */Wt(ik,ok,"app");var ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,Z0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function E(){}E.prototype=_.prototype,v.D=_.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(T,k,R){for(var w=Array(arguments.length-2),de=2;de<arguments.length;de++)w[de-2]=arguments[de];return _.prototype[k].apply(T,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)T[k]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(k=0;16>k;++k)T[k]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=v.g[0],E=v.g[1],k=v.g[2];var R=v.g[3],w=_+(R^E&(k^R))+T[0]+3614090360&4294967295;_=E+(w<<7&4294967295|w>>>25),w=R+(k^_&(E^k))+T[1]+3905402710&4294967295,R=_+(w<<12&4294967295|w>>>20),w=k+(E^R&(_^E))+T[2]+606105819&4294967295,k=R+(w<<17&4294967295|w>>>15),w=E+(_^k&(R^_))+T[3]+3250441966&4294967295,E=k+(w<<22&4294967295|w>>>10),w=_+(R^E&(k^R))+T[4]+4118548399&4294967295,_=E+(w<<7&4294967295|w>>>25),w=R+(k^_&(E^k))+T[5]+1200080426&4294967295,R=_+(w<<12&4294967295|w>>>20),w=k+(E^R&(_^E))+T[6]+2821735955&4294967295,k=R+(w<<17&4294967295|w>>>15),w=E+(_^k&(R^_))+T[7]+4249261313&4294967295,E=k+(w<<22&4294967295|w>>>10),w=_+(R^E&(k^R))+T[8]+1770035416&4294967295,_=E+(w<<7&4294967295|w>>>25),w=R+(k^_&(E^k))+T[9]+2336552879&4294967295,R=_+(w<<12&4294967295|w>>>20),w=k+(E^R&(_^E))+T[10]+4294925233&4294967295,k=R+(w<<17&4294967295|w>>>15),w=E+(_^k&(R^_))+T[11]+2304563134&4294967295,E=k+(w<<22&4294967295|w>>>10),w=_+(R^E&(k^R))+T[12]+1804603682&4294967295,_=E+(w<<7&4294967295|w>>>25),w=R+(k^_&(E^k))+T[13]+4254626195&4294967295,R=_+(w<<12&4294967295|w>>>20),w=k+(E^R&(_^E))+T[14]+2792965006&4294967295,k=R+(w<<17&4294967295|w>>>15),w=E+(_^k&(R^_))+T[15]+1236535329&4294967295,E=k+(w<<22&4294967295|w>>>10),w=_+(k^R&(E^k))+T[1]+4129170786&4294967295,_=E+(w<<5&4294967295|w>>>27),w=R+(E^k&(_^E))+T[6]+3225465664&4294967295,R=_+(w<<9&4294967295|w>>>23),w=k+(_^E&(R^_))+T[11]+643717713&4294967295,k=R+(w<<14&4294967295|w>>>18),w=E+(R^_&(k^R))+T[0]+3921069994&4294967295,E=k+(w<<20&4294967295|w>>>12),w=_+(k^R&(E^k))+T[5]+3593408605&4294967295,_=E+(w<<5&4294967295|w>>>27),w=R+(E^k&(_^E))+T[10]+38016083&4294967295,R=_+(w<<9&4294967295|w>>>23),w=k+(_^E&(R^_))+T[15]+3634488961&4294967295,k=R+(w<<14&4294967295|w>>>18),w=E+(R^_&(k^R))+T[4]+3889429448&4294967295,E=k+(w<<20&4294967295|w>>>12),w=_+(k^R&(E^k))+T[9]+568446438&4294967295,_=E+(w<<5&4294967295|w>>>27),w=R+(E^k&(_^E))+T[14]+3275163606&4294967295,R=_+(w<<9&4294967295|w>>>23),w=k+(_^E&(R^_))+T[3]+4107603335&4294967295,k=R+(w<<14&4294967295|w>>>18),w=E+(R^_&(k^R))+T[8]+1163531501&4294967295,E=k+(w<<20&4294967295|w>>>12),w=_+(k^R&(E^k))+T[13]+2850285829&4294967295,_=E+(w<<5&4294967295|w>>>27),w=R+(E^k&(_^E))+T[2]+4243563512&4294967295,R=_+(w<<9&4294967295|w>>>23),w=k+(_^E&(R^_))+T[7]+1735328473&4294967295,k=R+(w<<14&4294967295|w>>>18),w=E+(R^_&(k^R))+T[12]+2368359562&4294967295,E=k+(w<<20&4294967295|w>>>12),w=_+(E^k^R)+T[5]+4294588738&4294967295,_=E+(w<<4&4294967295|w>>>28),w=R+(_^E^k)+T[8]+2272392833&4294967295,R=_+(w<<11&4294967295|w>>>21),w=k+(R^_^E)+T[11]+1839030562&4294967295,k=R+(w<<16&4294967295|w>>>16),w=E+(k^R^_)+T[14]+4259657740&4294967295,E=k+(w<<23&4294967295|w>>>9),w=_+(E^k^R)+T[1]+2763975236&4294967295,_=E+(w<<4&4294967295|w>>>28),w=R+(_^E^k)+T[4]+1272893353&4294967295,R=_+(w<<11&4294967295|w>>>21),w=k+(R^_^E)+T[7]+4139469664&4294967295,k=R+(w<<16&4294967295|w>>>16),w=E+(k^R^_)+T[10]+3200236656&4294967295,E=k+(w<<23&4294967295|w>>>9),w=_+(E^k^R)+T[13]+681279174&4294967295,_=E+(w<<4&4294967295|w>>>28),w=R+(_^E^k)+T[0]+3936430074&4294967295,R=_+(w<<11&4294967295|w>>>21),w=k+(R^_^E)+T[3]+3572445317&4294967295,k=R+(w<<16&4294967295|w>>>16),w=E+(k^R^_)+T[6]+76029189&4294967295,E=k+(w<<23&4294967295|w>>>9),w=_+(E^k^R)+T[9]+3654602809&4294967295,_=E+(w<<4&4294967295|w>>>28),w=R+(_^E^k)+T[12]+3873151461&4294967295,R=_+(w<<11&4294967295|w>>>21),w=k+(R^_^E)+T[15]+530742520&4294967295,k=R+(w<<16&4294967295|w>>>16),w=E+(k^R^_)+T[2]+3299628645&4294967295,E=k+(w<<23&4294967295|w>>>9),w=_+(k^(E|~R))+T[0]+4096336452&4294967295,_=E+(w<<6&4294967295|w>>>26),w=R+(E^(_|~k))+T[7]+1126891415&4294967295,R=_+(w<<10&4294967295|w>>>22),w=k+(_^(R|~E))+T[14]+2878612391&4294967295,k=R+(w<<15&4294967295|w>>>17),w=E+(R^(k|~_))+T[5]+4237533241&4294967295,E=k+(w<<21&4294967295|w>>>11),w=_+(k^(E|~R))+T[12]+1700485571&4294967295,_=E+(w<<6&4294967295|w>>>26),w=R+(E^(_|~k))+T[3]+2399980690&4294967295,R=_+(w<<10&4294967295|w>>>22),w=k+(_^(R|~E))+T[10]+4293915773&4294967295,k=R+(w<<15&4294967295|w>>>17),w=E+(R^(k|~_))+T[1]+2240044497&4294967295,E=k+(w<<21&4294967295|w>>>11),w=_+(k^(E|~R))+T[8]+1873313359&4294967295,_=E+(w<<6&4294967295|w>>>26),w=R+(E^(_|~k))+T[15]+4264355552&4294967295,R=_+(w<<10&4294967295|w>>>22),w=k+(_^(R|~E))+T[6]+2734768916&4294967295,k=R+(w<<15&4294967295|w>>>17),w=E+(R^(k|~_))+T[13]+1309151649&4294967295,E=k+(w<<21&4294967295|w>>>11),w=_+(k^(E|~R))+T[4]+4149444226&4294967295,_=E+(w<<6&4294967295|w>>>26),w=R+(E^(_|~k))+T[11]+3174756917&4294967295,R=_+(w<<10&4294967295|w>>>22),w=k+(_^(R|~E))+T[2]+718787259&4294967295,k=R+(w<<15&4294967295|w>>>17),w=E+(R^(k|~_))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(k+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var E=_-this.blockSize,T=this.B,k=this.h,R=0;R<_;){if(k==0)for(;R<=E;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<_;)if(T[k++]=v.charCodeAt(R++),k==this.blockSize){s(this,T),k=0;break}}else for(;R<_;)if(T[k++]=v[R++],k==this.blockSize){s(this,T),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var E=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=E&255,E/=256;for(this.u(v),v=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)v[E++]=this.g[_]>>>T&255;return v};function i(v,_){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=_(v)}function o(v,_){this.h=_;for(var E=[],T=!0,k=v.length-1;0<=k;k--){var R=v[k]|0;T&&R==_||(E[k]=R,T=!1)}this.g=E}var l={};function u(v){return-128<=v&&128>v?i(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return O(h(-v));for(var _=[],E=1,T=0;v>=E;T++)_[T]=v/E|0,E*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return O(f(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),T=m,k=0;k<v.length;k+=8){var R=Math.min(8,v.length-k),w=parseInt(v.substring(k,k+R),_);8>R?(R=h(Math.pow(_,R)),T=T.j(R).add(h(w))):(T=T.j(E),T=T.add(h(w)))}return T}var m=u(0),g=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var v=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);v+=(0<=T?T:4294967296+T)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(P(this))return"-"+O(this).toString(v);for(var _=h(Math.pow(v,6)),E=this,T="";;){var k=D(E,_).g;E=S(E,k.j(_));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=k,N(E))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=S(this,v),P(v)?-1:N(v)?0:1};function O(v){for(var _=v.g.length,E=[],T=0;T<_;T++)E[T]=~v.g[T];return new o(E,~v.h).add(g)}t.abs=function(){return P(this)?O(this):this},t.add=function(v){for(var _=Math.max(this.g.length,v.g.length),E=[],T=0,k=0;k<=_;k++){var R=T+(this.i(k)&65535)+(v.i(k)&65535),w=(R>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);T=w>>>16,R&=65535,w&=65535,E[k]=w<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(v,_){return v.add(O(_))}t.j=function(v){if(N(this)||N(v))return m;if(P(this))return P(v)?O(this).j(O(v)):O(O(this).j(v));if(P(v))return O(this.j(O(v)));if(0>this.l(x)&&0>v.l(x))return h(this.m()*v.m());for(var _=this.g.length+v.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<v.g.length;k++){var R=this.i(T)>>>16,w=this.i(T)&65535,de=v.i(k)>>>16,ge=v.i(k)&65535;E[2*T+2*k]+=w*ge,I(E,2*T+2*k),E[2*T+2*k+1]+=R*ge,I(E,2*T+2*k+1),E[2*T+2*k+1]+=w*de,I(E,2*T+2*k+1),E[2*T+2*k+2]+=R*de,I(E,2*T+2*k+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function I(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function A(v,_){this.g=v,this.h=_}function D(v,_){if(N(_))throw Error("division by zero");if(N(v))return new A(m,m);if(P(v))return _=D(O(v),_),new A(O(_.g),O(_.h));if(P(_))return _=D(v,O(_)),new A(O(_.g),_.h);if(30<v.g.length){if(P(v)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=_;0>=T.l(v);)E=V(E),T=V(T);var k=L(E,1),R=L(T,1);for(T=L(T,2),E=L(E,2);!N(T);){var w=R.add(T);0>=w.l(v)&&(k=k.add(E),R=w),T=L(T,1),E=L(E,1)}return _=S(v,k.j(_)),new A(k,_)}for(k=m;0<=v.l(_);){for(E=Math.max(1,Math.floor(v.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(E),w=R.j(_);P(w)||0<w.l(v);)E-=T,R=h(E),w=R.j(_);N(R)&&(R=g),k=k.add(R),v=S(v,w)}return new A(k,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var _=Math.max(this.g.length,v.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&v.i(T);return new o(E,this.h&v.h)},t.or=function(v){for(var _=Math.max(this.g.length,v.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|v.i(T);return new o(E,this.h|v.h)},t.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^v.i(T);return new o(E,this.h^v.h)};function V(v){for(var _=v.g.length+1,E=[],T=0;T<_;T++)E[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(E,v.h)}function L(v,_){var E=_>>5;_%=32;for(var T=v.g.length-E,k=[],R=0;R<T;R++)k[R]=0<_?v.i(R+E)>>>_|v.i(R+E+1)<<32-_:v.i(R+E);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Z0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Gr=o}).apply(typeof ty<"u"?ty:typeof self<"u"?self:typeof window<"u"?window:{});var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ew,zi,tw,el,rd,nw,rw,sw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Va=="object"&&Va];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var C=a[y];if(!(C in d))break e;d=d[C]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,y=!1,C={next:function(){if(!y&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return y=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,y),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function x(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function N(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,C,b){for(var $=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)$[ve-2]=arguments[ve];return c.prototype[C].apply(y,$)}}function P(a){const c=a.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const C=a.length||0,b=y.length||0;a.length=C+b;for(let $=0;$<b;$++)a[C+$]=y[$]}else a.push(y)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function I(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var V=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function L(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function _(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,y;for(let C=1;C<arguments.length;C++){y=arguments[C];for(d in y)a[d]=y[d];for(let b=0;b<E.length;b++)d=E[b],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function k(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function w(){var a=q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class de{constructor(){this.h=this.g=null}add(c,d){const y=ge.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var ge=new S(()=>new W,a=>a.reset());class W{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,F=!1,q=new de,H=()=>{const a=l.Promise.resolve(void 0);ee=()=>{a.then(re)}};var re=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){R(d)}var c=ge;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Be=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Gt(a,c){if(fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{D(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}N(Gt,fe);var Ct={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Nt="closure_listenable_"+(1e6*Math.random()|0),fs=0;function K(a,c,d,y,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=C,this.key=++fs,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function et(a){this.src=a,this.g={},this.h=0}et.prototype.add=function(a,c,d,y,C){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var $=ft(a,c,y,C);return-1<$?(c=a[$],d||(c.fa=!1)):(c=new K(c,this.src,b,!!y,C),c.fa=d,a.push(c)),c};function dt(a,c){var d=c.type;if(d in a.g){var y=a.g[d],C=Array.prototype.indexOf.call(y,c,void 0),b;(b=0<=C)&&Array.prototype.splice.call(y,C,1),b&&(se(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,c,d,y){for(var C=0;C<a.length;++C){var b=a[C];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==y)return C}return-1}var cn="closure_lm_"+(1e6*Math.random()|0),Qt={};function ps(a,c,d,y,C){if(Array.isArray(c)){for(var b=0;b<c.length;b++)ps(a,c[b],d,y,C);return null}return d=Vp(d),a&&a[Nt]?a.K(c,d,h(y)?!!y.capture:!1,C):Zo(a,c,d,!1,y,C)}function Zo(a,c,d,y,C,b){if(!c)throw Error("Invalid event type");var $=h(C)?!!C.capture:!!C,ve=Hu(a);if(ve||(a[cn]=ve=new et(a)),d=ve.add(c,d,y,$,b),d.proxy)return d;if(y=qu(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)Be||(C=$),C===void 0&&(C=!1),a.addEventListener(c.toString(),y,C);else if(a.attachEvent)a.attachEvent(Dp(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function qu(){function a(d){return c.call(a.src,a.listener,d)}const c=SI;return a}function bp(a,c,d,y,C){if(Array.isArray(c))for(var b=0;b<c.length;b++)bp(a,c[b],d,y,C);else y=h(y)?!!y.capture:!!y,d=Vp(d),a&&a[Nt]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=ft(b,d,y,C),-1<d&&(se(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Hu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ft(c,d,y,C)),(d=-1<a?c[a]:null)&&Wu(d))}function Wu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Nt])dt(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(Dp(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Hu(c))?(dt(d,a),d.h==0&&(d.src=null,c[cn]=null)):se(a)}}}function Dp(a){return a in Qt?Qt[a]:Qt[a]="on"+a}function SI(a,c){if(a.da)a=!0;else{c=new Gt(c,this);var d=a.listener,y=a.ha||a.src;a.fa&&Wu(a),a=d.call(y,c)}return a}function Hu(a){return a=a[cn],a instanceof et?a:null}var Ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vp(a){return typeof a=="function"?a:(a[Ku]||(a[Ku]=function(c){return a.handleEvent(c)}),a[Ku])}function tt(){Q.call(this),this.i=new et(this),this.M=this,this.F=null}N(tt,Q),tt.prototype[Nt]=!0,tt.prototype.removeEventListener=function(a,c,d,y){bp(this,a,c,d,y)};function pt(a,c){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new fe(c,a);else if(c instanceof fe)c.target=c.target||a;else{var C=c;c=new fe(y,a),T(c,C)}if(C=!0,d)for(var b=d.length-1;0<=b;b--){var $=c.g=d[b];C=ea($,y,!0,c)&&C}if($=c.g=a,C=ea($,y,!0,c)&&C,C=ea($,y,!1,c)&&C,d)for(b=0;b<d.length;b++)$=c.g=d[b],C=ea($,y,!1,c)&&C}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],y=0;y<d.length;y++)se(d[y]);delete a.g[c],a.h--}}this.F=null},tt.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},tt.prototype.L=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function ea(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,b=0;b<c.length;++b){var $=c[b];if($&&!$.da&&$.capture==d){var ve=$.listener,He=$.ha||$.src;$.fa&&dt(a.i,$),C=ve.call(He,y)!==!1&&C}}return C&&!y.defaultPrevented}function Mp(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Op(a){a.g=Mp(()=>{a.g=null,a.i&&(a.i=!1,Op(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class AI extends Q{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Op(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(a){Q.call(this),this.h=a,this.g={}}N(yi,Q);var Lp=[];function jp(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&Wu(c)},a),a.g={}}yi.prototype.N=function(){yi.aa.N.call(this),jp(this)},yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=l.JSON.stringify,kI=l.JSON.parse,RI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Qu(){}Qu.prototype.h=null;function Fp(a){return a.h||(a.h=a.i())}function Up(){}var _i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yu(){fe.call(this,"d")}N(Yu,fe);function Xu(){fe.call(this,"c")}N(Xu,fe);var br={},$p=null;function ta(){return $p=$p||new tt}br.La="serverreachability";function Bp(a){fe.call(this,br.La,a)}N(Bp,fe);function vi(a){const c=ta();pt(c,new Bp(c))}br.STAT_EVENT="statevent";function zp(a,c){fe.call(this,br.STAT_EVENT,a),this.stat=c}N(zp,fe);function mt(a){const c=ta();pt(c,new zp(c,a))}br.Ma="timingevent";function qp(a,c){fe.call(this,br.Ma,a),this.size=c}N(qp,fe);function wi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ei(){this.g=!0}Ei.prototype.xa=function(){this.g=!1};function CI(a,c,d,y,C,b){a.info(function(){if(a.g)if(b)for(var $="",ve=b.split("&"),He=0;He<ve.length;He++){var ce=ve[He].split("=");if(1<ce.length){var nt=ce[0];ce=ce[1];var rt=nt.split("_");$=2<=rt.length&&rt[1]=="type"?$+(nt+"="+ce+"&"):$+(nt+"=redacted&")}}else $=null;else $=b;return"XMLHTTP REQ ("+y+") [attempt "+C+"]: "+c+`
`+d+`
`+$})}function NI(a,c,d,y,C,b,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+C+"]: "+c+`
`+d+`
`+b+" "+$})}function ms(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+bI(a,d)+(y?" "+y:"")})}function PI(a,c){a.info(function(){return"TIMEOUT: "+c})}Ei.prototype.info=function(){};function bI(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var C=y[1];if(Array.isArray(C)&&!(1>C.length)){var b=C[0];if(b!="noop"&&b!="stop"&&b!="close")for(var $=1;$<C.length;$++)C[$]=""}}}}return Gu(d)}catch{return c}}var na={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ju;function ra(){}N(ra,Qu),ra.prototype.g=function(){return new XMLHttpRequest},ra.prototype.i=function(){return{}},Ju=new ra;function Kn(a,c,d,y){this.j=a,this.i=c,this.l=d,this.R=y||1,this.U=new yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var Kp={},Zu={};function ec(a,c,d){a.L=1,a.v=aa(xn(c)),a.m=d,a.P=!0,Gp(a,null)}function Gp(a,c){a.F=Date.now(),sa(a),a.A=xn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),lm(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Hp,a.g=Am(a.j,d?c:null,!a.m),0<a.O&&(a.M=new AI(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,y=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Lp[0]=C.toString()),C=Lp);for(var b=0;b<C.length;b++){var $=ps(d,C[b],y||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),vi(),CI(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Sn(a)==3?c.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=Sn(this.g);var c=this.g.Ba();const _s=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||mm(this.g)))){this.J||rt!=4||c==7||(c==8||0>=_s?vi(3):vi(2)),tc(this);var d=this.g.Z();this.X=d;t:if(Qp(this)){var y=mm(this.g);a="";var C=y.length,b=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Ii(this);var $="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(b&&c==C-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,NI(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,He=this.g;if((ve=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(ve)){var ce=ve;break t}}ce=null}if(d=ce)ms(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,d);else{this.o=!1,this.s=3,mt(12),Dr(this),Ii(this);break e}}if(this.P){d=!0;let Yt;for(;!this.J&&this.C<$.length;)if(Yt=DI(this,$),Yt==Zu){rt==4&&(this.s=4,mt(14),d=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Kp){this.s=4,mt(15),ms(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else ms(this.i,this.l,Yt,null),nc(this,Yt);if(Qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||$.length!=0||this.h.h||(this.s=1,mt(16),d=!1),this.o=this.o&&d,!d)ms(this.i,this.l,$,"[Invalid Chunked Response]"),Dr(this),Ii(this);else if(0<$.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),lc(nt),nt.M=!0,mt(11))}}else ms(this.i,this.l,$,null),nc(this,$);rt==4&&Dr(this),this.o&&!this.J&&(rt==4?Im(this.j,this):(this.o=!1,sa(this)))}else YI(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Dr(this),Ii(this)}}}catch{}finally{}};function Qp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function DI(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?Zu:(d=Number(c.substring(d,y)),isNaN(d)?Kp:(y+=1,y+d>c.length?Zu:(c=c.slice(y,y+d),a.C=y+d,c)))}Kn.prototype.cancel=function(){this.J=!0,Dr(this)};function sa(a){a.S=Date.now()+a.I,Yp(a,a.I)}function Yp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wi(g(a.ba,a),c)}function tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(PI(this.i,this.A),this.L!=2&&(vi(),mt(17)),Dr(this),this.s=2,Ii(this)):Yp(this,this.S-a)};function Ii(a){a.j.G==0||a.J||Im(a.j,a)}function Dr(a){tc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,jp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function nc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||rc(d.h,a))){if(!a.K&&rc(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var C=y;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)fa(d),ha(d);else break e;ac(d),mt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=wi(g(d.Za,d),6e3));if(1>=Zp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mr(d,11)}else if((a.K||d.g==a)&&fa(d),!I(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ce=C[c];if(d.T=ce[0],ce=ce[1],d.G==2)if(ce[0]=="c"){d.K=ce[1],d.ia=ce[2];const nt=ce[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=ce[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const _s=ce[5];_s!=null&&typeof _s=="number"&&0<_s&&(y=1.5*_s,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Yt=a.g;if(Yt){const ma=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ma){var b=y.h;b.g||ma.indexOf("spdy")==-1&&ma.indexOf("quic")==-1&&ma.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(sc(b,b.h),b.h=null))}if(y.D){const uc=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(y.ya=uc,Ee(y.I,y.D,uc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var $=a;if(y.qa=Sm(y,y.J?y.ia:null,y.W),$.K){em(y.h,$);var ve=$,He=y.L;He&&(ve.I=He),ve.B&&(tc(ve),sa(ve)),y.g=$}else wm(y);0<d.i.length&&da(d)}else ce[0]!="stop"&&ce[0]!="close"||Mr(d,7);else d.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Mr(d,7):oc(d):ce[0]!="noop"&&d.l&&d.l.ta(ce),d.v=0)}}vi(4)}catch{}}var VI=class{constructor(a,c){this.g=a,this.map=c}};function Xp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zp(a){return a.h?1:a.g?a.g.size:0}function rc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function sc(a,c){a.g?a.g.add(c):a.h=c}function em(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Xp.prototype.cancel=function(){if(this.i=tm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return P(a.i)}function MI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,y=0;y<d;y++)c.push(a[y]);return c}c=[],d=0;for(y in a)c[d++]=a[y];return c}function OI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const y in a)c[d++]=y;return c}}}function nm(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=OI(a),y=MI(a),C=y.length,b=0;b<C;b++)c.call(void 0,y[b],d&&d[b],a)}var rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LI(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),C=null;if(0<=y){var b=a[d].substring(0,y);C=a[d].substring(y+1)}else b=a[d];c(b,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,ia(this,a.j),this.o=a.o,this.g=a.g,oa(this,a.s),this.l=a.l;var c=a.i,d=new Si;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),sm(this,d),this.m=a.m}else a&&(c=String(a).match(rm))?(this.h=!1,ia(this,c[1]||"",!0),this.o=Ti(c[2]||""),this.g=Ti(c[3]||"",!0),oa(this,c[4]),this.l=Ti(c[5]||"",!0),sm(this,c[6]||"",!0),this.m=Ti(c[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Vr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(xi(c,im,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(xi(c,im,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(xi(d,d.charAt(0)=="/"?UI:FI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",xi(d,BI)),a.join("")};function xn(a){return new Vr(a)}function ia(a,c,d){a.j=d?Ti(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function oa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function sm(a,c,d){c instanceof Si?(a.i=c,zI(a.i,a.h)):(d||(c=xi(c,$I)),a.i=new Si(c,a.h))}function Ee(a,c,d){a.i.set(c,d)}function aa(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ti(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,jI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var im=/[#\/\?@]/g,FI=/[#\?:]/g,UI=/[#\?]/g,$I=/[#\?@]/g,BI=/#/g;function Si(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&LI(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Si.prototype,t.add=function(a,c){Gn(this),this.i=null,a=gs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function om(a,c){Gn(a),c=gs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function am(a,c){return Gn(a),c=gs(a,c),a.g.has(c)}t.forEach=function(a,c){Gn(this),this.g.forEach(function(d,y){d.forEach(function(C){a.call(c,C,y,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const C=a[y];for(let b=0;b<C.length;b++)d.push(c[y])}return d},t.V=function(a){Gn(this);let c=[];if(typeof a=="string")am(this,a)&&(c=c.concat(this.g.get(gs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Gn(this),this.i=null,a=gs(this,a),am(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function lm(a,c,d){om(a,c),0<d.length&&(a.i=null,a.g.set(gs(a,c),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const b=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var C=b;$[y]!==""&&(C+="="+encodeURIComponent(String($[y]))),a.push(C)}}return this.i=a.join("&")};function gs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function zI(a,c){c&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,y){var C=y.toLowerCase();y!=C&&(om(this,y),lm(this,C,d))},a)),a.j=c}function qI(a,c){const d=new Ei;if(l.Image){const y=new Image;y.onload=x(Qn,d,"TestLoadImage: loaded",!0,c,y),y.onerror=x(Qn,d,"TestLoadImage: error",!1,c,y),y.onabort=x(Qn,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=x(Qn,d,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function WI(a,c){const d=new Ei,y=new AbortController,C=setTimeout(()=>{y.abort(),Qn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(C),b.ok?Qn(d,"TestPingServer: ok",!0,c):Qn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Qn(d,"TestPingServer: error",!1,c)})}function Qn(a,c,d,y,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),y(d)}catch{}}function HI(){this.g=new RI}function KI(a,c,d){const y=d||"";try{nm(a,function(C,b){let $=C;h(C)&&($=Gu(C)),c.push(y+b+"="+encodeURIComponent($))})}catch(C){throw c.push(y+"type="+encodeURIComponent("_badmap")),C}}function la(a){this.l=a.Ub||null,this.j=a.eb||!1}N(la,Qu),la.prototype.g=function(){return new ua(this.l,this.j)},la.prototype.i=function(a){return function(){return a}}({});function ua(a,c){tt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ua,tt),t=ua.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ki(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;um(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function um(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ai(this):ki(this),this.readyState==3&&um(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ai(this))},t.Qa=function(a){this.g&&(this.response=a,Ai(this))},t.ga=function(){this.g&&Ai(this)};function Ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ki(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ki(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cm(a){let c="";return L(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function ic(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=cm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ee(a,c,d))}function Pe(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Pe,tt);var GI=/^https?$/i,QI=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ju.g(),this.v=this.o?Fp(this.o):Fp(Ju),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){hm(this,b);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var C in y)d.set(C,y[C]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())d.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(QI,c,void 0))||y||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,$]of d)this.g.setRequestHeader(b,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pm(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){hm(this,b)}};function hm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,dm(a),ca(a)}function dm(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pt(this,"complete"),pt(this,"abort"),ca(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ca(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fm(this):this.bb())},t.bb=function(){fm(this)};function fm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)Mp(a.Ea,0,a);else if(pt(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=$===0){var C=String(a.D).match(rm)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),y=!GI.test(C?C.toLowerCase():"")}d=y}if(d)pt(a,"complete"),pt(a,"success");else{a.m=6;try{var b=2<Sn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",dm(a)}}finally{ca(a)}}}}function ca(a,c){if(a.g){pm(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||pt(a,"ready");try{d.onreadystatechange=y}catch{}}}function pm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),kI(c)}};function mm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function YI(a){const c={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var d=k(a[y]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[C]||[];c[C]=b,b.push(d)}v(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ri(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function gm(a){this.Aa=0,this.i=[],this.j=new Ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ri("baseRetryDelayMs",5e3,a),this.cb=Ri("retryDelaySeedMs",1e4,a),this.Wa=Ri("forwardChannelMaxRetries",2,a),this.wa=Ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xp(a&&a.concurrentRequestLimit),this.Da=new HI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=gm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,y){mt(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Sm(this,null,this.W),da(this)};function oc(a){if(ym(a),a.G==3){var c=a.U++,d=xn(a.I);if(Ee(d,"SID",a.K),Ee(d,"RID",c),Ee(d,"TYPE","terminate"),Ci(a,d),c=new Kn(a,a.j,c),c.L=2,c.v=aa(xn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Am(c.j,null),c.g.ea(c.v)),c.F=Date.now(),sa(c)}xm(a)}function ha(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function ym(a){ha(a),a.u&&(l.clearTimeout(a.u),a.u=null),fa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function da(a){if(!Jp(a.h)&&!a.s){a.s=!0;var c=a.Ga;ee||H(),F||(ee(),F=!0),q.add(c,a),a.B=0}}function XI(a,c){return Zp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wi(g(a.Ga,a,c),Tm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Kn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=_(b),T(b,this.S)):b=this.S),this.m!==null||this.O||(C.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=vm(this,C,c),d=xn(this.I),Ee(d,"RID",a),Ee(d,"CVER",22),this.D&&Ee(d,"X-HTTP-Session-Id",this.D),Ci(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(cm(b)))+"&"+c:this.m&&ic(d,this.m,b)),sc(this.h,C),this.Ua&&Ee(d,"TYPE","init"),this.P?(Ee(d,"$req",c),Ee(d,"SID","null"),C.T=!0,ec(C,d,null)):ec(C,d,c),this.G=2}}else this.G==3&&(a?_m(this,a):this.i.length==0||Jp(this.h)||_m(this))};function _m(a,c){var d;c?d=c.l:d=a.U++;const y=xn(a.I);Ee(y,"SID",a.K),Ee(y,"RID",d),Ee(y,"AID",a.T),Ci(a,y),a.m&&a.o&&ic(y,a.m,a.o),d=new Kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=vm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sc(a.h,d),ec(d,y,c)}function Ci(a,c){a.H&&L(a.H,function(d,y){Ee(c,y,d)}),a.l&&nm({},function(d,y){Ee(c,y,d)})}function vm(a,c,d){d=Math.min(a.i.length,d);var y=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let b=-1;for(;;){const $=["count="+d];b==-1?0<d?(b=C[0].g,$.push("ofs="+b)):b=0:$.push("ofs="+b);let ve=!0;for(let He=0;He<d;He++){let ce=C[He].g;const nt=C[He].map;if(ce-=b,0>ce)b=Math.max(0,C[He].g-100),ve=!1;else try{KI(nt,$,"req"+ce+"_")}catch{y&&y(nt)}}if(ve){y=$.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,y}function wm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ee||H(),F||(ee(),F=!0),q.add(c,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wi(g(a.Fa,a),Tm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Em(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),ha(this),Em(this))};function lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Em(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=xn(a.qa);Ee(c,"RID","rpc"),Ee(c,"SID",a.K),Ee(c,"AID",a.T),Ee(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(c,"TO",a.ja),Ee(c,"TYPE","xmlhttp"),Ci(a,c),a.m&&a.o&&ic(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=aa(xn(c)),d.m=null,d.P=!0,Gp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ha(this),ac(this),mt(19))};function fa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Im(a,c){var d=null;if(a.g==c){fa(a),lc(a),a.g=null;var y=2}else if(rc(a.h,c))d=c.D,em(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;y=ta(),pt(y,new qp(y,d)),da(a)}else wm(a);else if(C=c.s,C==3||C==0&&0<c.X||!(y==1&&XI(a,c)||y==2&&ac(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function Tm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Mr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),y=a.Xa;const C=!y;y=new Vr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ia(y,"https"),aa(y),C?qI(y.toString(),d):WI(y.toString(),d)}else mt(2);a.G=0,a.l&&a.l.sa(c),xm(a),ym(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function xm(a){if(a.G=0,a.ka=[],a.l){const c=tm(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Sm(a,c,d){var y=d instanceof Vr?xn(d):new Vr(d);if(y.g!="")c&&(y.g=c+"."+y.g),oa(y,y.s);else{var C=l.location;y=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var b=new Vr(null);y&&ia(b,y),c&&(b.g=c),C&&oa(b,C),d&&(b.l=d),y=b}return d=a.D,c=a.ya,d&&c&&Ee(y,d,c),Ee(y,"VER",a.la),Ci(a,y),y}function Am(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Pe(new la({eb:d})):new Pe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function km(){}t=km.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function pa(){}pa.prototype.g=function(a,c){return new Pt(a,c)};function Pt(a,c){tt.call(this),this.g=new gm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!I(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!I(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ys(this)}N(Pt,tt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){oc(this.g)},Pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Gu(a),a=d);c.i.push(new VI(c.Ya++,a)),c.G==3&&da(c)},Pt.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,Pt.aa.N.call(this)};function Rm(a){Yu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}N(Rm,Yu);function Cm(){Xu.call(this),this.status=1}N(Cm,Xu);function ys(a){this.g=a}N(ys,km),ys.prototype.ua=function(){pt(this.g,"a")},ys.prototype.ta=function(a){pt(this.g,new Rm(a))},ys.prototype.sa=function(a){pt(this.g,new Cm)},ys.prototype.ra=function(){pt(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,sw=function(){return new pa},rw=function(){return ta()},nw=br,rd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},na.NO_ERROR=0,na.TIMEOUT=8,na.HTTP_ERROR=6,el=na,Wp.COMPLETE="complete",tw=Wp,Up.EventType=_i,_i.OPEN="a",_i.CLOSE="b",_i.ERROR="c",_i.MESSAGE="d",tt.prototype.listen=tt.prototype.K,zi=Up,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,ew=Pe}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});const ny="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let hi="10.14.0";/**
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
 */const es=new _u("@firebase/firestore");function ji(){return es.logLevel}function G(t,...e){if(es.logLevel<=ae.DEBUG){const n=e.map(Af);es.debug(`Firestore (${hi}): ${t}`,...n)}}function $n(t,...e){if(es.logLevel<=ae.ERROR){const n=e.map(Af);es.error(`Firestore (${hi}): ${t}`,...n)}}function Zs(t,...e){if(es.logLevel<=ae.WARN){const n=e.map(Af);es.warn(`Firestore (${hi}): ${t}`,...n)}}function Af(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${hi}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function me(t,e){t||Z()}function ne(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class iw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uk{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new iw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new at(e)}}class ck{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ck(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new dk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ow{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=pk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new je(0,0))}static max(){return new te(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ro{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Ro{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new B(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Te.fromString(e))}static fromName(e){return new Y(Te.fromString(e).popFirst(5))}static empty(){return new Y(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Te(e.slice()))}}function gk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new xr(s,Y.empty(),e)}function yk(t){return new xr(t.readTime,t.key,-1)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(te.min(),Y.empty(),-1)}static max(){return new xr(te.max(),Y.empty(),-1)}}function _k(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const vk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==vk)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ek(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class kf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kf.oe=-1;function vu(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function Ik(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ry(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ma(this.root,e,this.comparator,!0)}}class Ma{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sy(this.data.getIterator())}getIteratorFrom(e){return new sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new Xe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lw("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const Tk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(me(!!t),typeof t=="string"){let e=0;const n=Tk.exec(t);if(me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function Rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cf(t){const e=t.mapValue.fields.__previous_value__;return Rf(e)?Cf(e):e}function Co(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class xk{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class No{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new No("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Oa={mapValue:{}};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rf(t)?4:Ak(t)?9007199254740991:Sk(t)?10:11:Z()}function In(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),l=Sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ts(s.bytesValue).isEqual(ts(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),l=De(i.doubleValue);return o===l?Ol(o)===Ol(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ry(o)!==ry(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function Po(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=De(i.integerValue||i.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return iy(t.timestampValue,e.timestampValue);case 4:return iy(Co(t),Co(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ts(i),u=ts(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=he(l[h],u[h]);if(f!==0)return f}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=he(De(i.latitude),De(o.latitude));return l!==0?l:he(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return oy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,f;const m=i.fields||{},g=o.fields||{},x=(l=m.value)===null||l===void 0?void 0:l.arrayValue,N=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=he(((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:oy(x,N)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Oa.mapValue&&o===Oa.mapValue)return 0;if(i===Oa.mapValue)return 1;if(o===Oa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=he(u[m],f[m]);if(g!==0)return g;const x=ti(l[u[m]],h[f[m]]);if(x!==0)return x}return he(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Sr(t),r=Sr(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function oy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ti(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function ni(t){return sd(t)}function sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=sd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sd(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function ay(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function id(t){return!!t&&"integerValue"in t}function Nf(t){return!!t&&"arrayValue"in t}function ly(t){return!!t&&"nullValue"in t}function uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tl(t){return!!t&&"mapValue"in t}function Sk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function no(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ak(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=Qe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=no(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];tl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(no(this.value))}}function uw(t){const e=[];return hs(t.fields,(n,r)=>{const s=new Qe([n]);if(tl(r)){const i=uw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Vt(e)}/**
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
 */class ut{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,te.min(),te.min(),te.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,te.min(),te.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,te.min(),te.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ll{constructor(e,n){this.position=e,this.inclusive=n}}function cy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function kk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cw{}class Le extends cw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ck(e,n,r):n==="array-contains"?new bk(e,r):n==="in"?new Dk(e,r):n==="not-in"?new Vk(e,r):n==="array-contains-any"?new Mk(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Nk(e,r):new Pk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends cw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return hw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hw(t){return t.op==="and"}function dw(t){return Rk(t)&&hw(t)}function Rk(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function od(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(dw(t))return t.filters.map(e=>od(e)).join(",");{const e=t.filters.map(n=>od(n)).join(",");return`${t.op}(${e})`}}function fw(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&fw(o,s.filters[l]),!0):!1}(t,e):void Z()}function pw(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(pw).join(" ,")+"}"}(t):"Filter"}class Ck extends Le{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Nk extends Le{constructor(e,n){super(e,"in",n),this.keys=mw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pk extends Le{constructor(e,n){super(e,"not-in",n),this.keys=mw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class bk extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nf(n)&&Po(n.arrayValue,this.value)}}class Dk extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class Vk extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class Mk extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
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
 */class Ok{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function dy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ok(t,e,n,r,s,i,o)}function Pf(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>od(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.ue=n}return e.ue}function bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hy(t.startAt,e.startAt)&&hy(t.endAt,e.endAt)}function ad(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class di{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lk(t,e,n,r,s,i,o,l){return new di(t,e,n,r,s,i,o,l)}function wu(t){return new di(t)}function fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gw(t){return t.collectionGroup!==null}function ro(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xe(Qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new bo(i,r))}),n.has(Qe.keyField().canonicalString())||e.ce.push(new bo(Qe.keyField(),r))}return e.ce}function yn(t){const e=ne(t);return e.le||(e.le=jk(e,ro(t))),e.le}function jk(t,e){if(t.limitType==="F")return dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bo(s.field,i)});const n=t.endAt?new Ll(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ll(t.startAt.position,t.startAt.inclusive):null;return dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ld(t,e){const n=t.filters.concat([e]);return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jl(t,e,n){return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Eu(t,e){return bf(yn(t),yn(e))&&t.limitType===e.limitType}function yw(t){return`${Pf(yn(t))}|lt:${t.limitType}`}function Es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>pw(s)).join(", ")}]`),vu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ni(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=cy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,ro(r),s)||r.endAt&&!function(o,l,u){const h=cy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,ro(r),s))}(t,e)}function Fk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _w(t){return(e,n)=>{let r=!1;for(const s of ro(t)){const i=Uk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Uk(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ti(u,h):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return aw(this.inner)}size(){return this.innerSize}}/**
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
 */const $k=new Ne(Y.comparator);function Bn(){return $k}const vw=new Ne(Y.comparator);function qi(...t){let e=vw;for(const n of t)e=e.insert(n.key,n);return e}function ww(t){let e=vw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return so()}function Ew(){return so()}function so(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bk=new Ne(Y.comparator),zk=new Xe(Y.comparator);function oe(...t){let e=zk;for(const n of t)e=e.add(n);return e}const qk=new Xe(he);function Wk(){return qk}/**
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
 */function Df(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function Iw(t){return{integerValue:""+t}}function Hk(t,e){return Ik(e)?Iw(e):Df(t,e)}/**
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
 */class Tu{constructor(){this._=void 0}}function Kk(t,e,n){return t instanceof Fl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Rf(i)&&(i=Cf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Do?xw(t,e):t instanceof Vo?Sw(t,e):function(s,i){const o=Tw(s,i),l=py(o)+py(s.Pe);return id(o)&&id(s.Pe)?Iw(l):Df(s.serializer,l)}(t,e)}function Gk(t,e,n){return t instanceof Do?xw(t,e):t instanceof Vo?Sw(t,e):n}function Tw(t,e){return t instanceof Ul?function(r){return id(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fl extends Tu{}class Do extends Tu{constructor(e){super(),this.elements=e}}function xw(t,e){const n=Aw(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vo extends Tu{constructor(e){super(),this.elements=e}}function Sw(t,e){let n=Aw(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class Ul extends Tu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function py(t){return De(t.integerValue||t.doubleValue)}function Aw(t){return Nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Qk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Do&&s instanceof Do||r instanceof Vo&&s instanceof Vo?ei(r.elements,s.elements,In):r instanceof Ul&&s instanceof Ul?In(r.Pe,s.Pe):r instanceof Fl&&s instanceof Fl}(t.transform,e.transform)}class Yk{constructor(e,n){this.version=e,this.transformResults=n}}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xu{}function kw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Su(t.key,kt.none()):new qo(t.key,t.data,kt.none());{const n=t.data,r=It.empty();let s=new Xe(Qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Nr(t.key,r,new Vt(s.toArray()),kt.none())}}function Xk(t,e,n){t instanceof qo?function(s,i,o){const l=s.value.clone(),u=gy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(s,i,o){if(!nl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=gy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Rw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof qo?function(i,o,l,u){if(!nl(i.precondition,o))return l;const h=i.value.clone(),f=yy(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,o,l,u){if(!nl(i.precondition,o))return l;const h=yy(i.fieldTransforms,u,o),f=o.data;return f.setAll(Rw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return nl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Jk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Tw(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function my(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ei(r,s,(i,o)=>Qk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends xu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nr extends xu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gy(t,e,n){const r=new Map;me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Gk(o,l,n[s]))}return r}function yy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Kk(i,o,e))}return r}class Su extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zk extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Xk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ew();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=kw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>my(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>my(n,r))}}class Vf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length);let s=function(){return Bk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vf(e,n,r,s)}}/**
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
 */class tR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,le;function rR(t){switch(t){default:return Z();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Cw(t){if(t===void 0)return $n("GRPC error has no .code"),M.UNKNOWN;switch(t){case Me.OK:return M.OK;case Me.CANCELLED:return M.CANCELLED;case Me.UNKNOWN:return M.UNKNOWN;case Me.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Me.INTERNAL:return M.INTERNAL;case Me.UNAVAILABLE:return M.UNAVAILABLE;case Me.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Me.NOT_FOUND:return M.NOT_FOUND;case Me.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Me.ABORTED:return M.ABORTED;case Me.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Me.DATA_LOSS:return M.DATA_LOSS;default:return Z()}}(le=Me||(Me={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sR(){return new TextEncoder}/**
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
 */const iR=new Gr([4294967295,4294967295],0);function _y(t){const e=sR().encode(t),n=new Z0;return n.update(e),new Uint8Array(n.digest())}function vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([s,i],0)]}class Mf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wi(`Invalid padding: ${n}`);if(r<0)throw new Wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Gr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Gr.fromNumber(r)));return s.compare(iR)===1&&(s=new Gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_y(e),[r,s]=vy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=_y(e),[r,s]=vy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Au{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Au(te.min(),s,new Ne(he),Bn(),oe())}}class Wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wo(r,n,oe(),oe(),oe())}}/**
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
 */class rl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Nw{constructor(e,n){this.targetId=e,this.me=n}}class Pw{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wy{constructor(){this.fe=0,this.ge=Iy(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new Wo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Iy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class oR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=Ey(),this.Qe=new Ne(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ad(i))if(r===0){const o=new Y(i.path);this.Ue(n,o,ut.newNoDocument(o,te.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ts(r).toUint8Array()}catch(u){if(u instanceof lw)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Mf(o,s,i)}catch(u){return Zs(u instanceof Wi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&ad(l.target)){const u=new Y(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=oe();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Au(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=Ey(),this.Qe=new Ne(he),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new wy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new wy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ey(){return new Ne(Y.comparator)}function Iy(){return new Ne(Y.comparator)}const aR={asc:"ASCENDING",desc:"DESCENDING"},lR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uR={and:"AND",or:"OR"};class cR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ud(t,e){return t.useProto3Json||vu(e)?e:{value:e}}function $l(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hR(t,e){return $l(t,e.toTimestamp())}function _n(t){return me(!!t),te.fromTimestamp(function(n){const r=Sr(n);return new je(r.seconds,r.nanos)}(t))}function Of(t,e){return cd(t,e).canonicalString()}function cd(t,e){const n=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Dw(t){const e=Te.fromString(t);return me(jw(e)),e}function hd(t,e){return Of(t.databaseId,e.path)}function $c(t,e){const n=Dw(e);if(n.get(1)!==t.databaseId.projectId)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Mw(n))}function Vw(t,e){return Of(t.databaseId,e)}function dR(t){const e=Dw(t);return e.length===4?Te.emptyPath():Mw(e)}function dd(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mw(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ty(t,e,n){return{name:hd(t,e),fields:n.value.mapValue.fields}}function fR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(me(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:Cw(h.code);return new B(f,h.message||"")}(o);n=new Pw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$c(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):te.min(),l=new It({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new rl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$c(t,r.document),i=r.readTime?_n(r.readTime):te.min(),o=ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new rl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$c(t,r.document),i=r.removedTargetIds||[];n=new rl([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nR(s,i),l=r.targetId;n=new Nw(l,o)}}return n}function pR(t,e){let n;if(e instanceof qo)n={update:Ty(t,e.key,e.value)};else if(e instanceof Su)n={delete:hd(t,e.key)};else if(e instanceof Nr)n={update:Ty(t,e.key,e.data),updateMask:TR(e.fieldMask)};else{if(!(e instanceof Zk))return Z();n={verify:hd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ul)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function mR(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(te.min())&&(o=_n(i)),new Yk(o,s.transformResults||[])}(n,e))):[]}function gR(t,e){return{documents:[Vw(t,e.path)]}}function yR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Vw(t,s);const i=function(h){if(h.length!==0)return Lw(ln.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Is(g.field),direction:wR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ud(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function _R(t){let e=dR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=Ow(m);return g instanceof ln&&dw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(N){return new bo(Ts(N.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,vu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,x=m.values||[];return new Ll(x,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,x=m.values||[];return new Ll(x,g)}(n.endAt)),Lk(e,s,o,i,l,"F",u,h)}function vR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ow(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ts(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ts(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Ts(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>Ow(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function wR(t){return aR[t]}function ER(t){return lR[t]}function IR(t){return uR[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Ts(t){return Qe.fromServerFormat(t.fieldPath)}function Lw(t){return t instanceof Le?function(n){if(n.op==="=="){if(uy(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(ly(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uy(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(ly(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:ER(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>Lw(s));return r.length===1?r[0]:{compositeFilter:{op:IR(n.op),filters:r}}}(t):Z()}function TR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,s,i=te.min(),o=te.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xR{constructor(e){this.ct=e}}function SR(t){const e=_R({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jl(e,e.limit,"L"):e}/**
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
 */class AR{constructor(){this.un=new kR}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(xr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class kR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Te.comparator)).toArray()}}/**
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
 */class ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ri(0)}static kn(){return new ri(-1)}}/**
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
 */class RR{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class NR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&io(r.mutation,s,Vt.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=Br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=so(),l=function(){return so()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Nr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),io(f.mutation,h,f.mutation.getFieldMask(),je.now())):o.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new CR(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=so();let s=new Ne((o,l)=>o-l),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(s.get(l.batchId)||oe()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Ew();f.forEach(g=>{if(!i.has(g)){const x=kw(n.get(g),r.get(g));x!==null&&m.set(g,x),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Br());let l=-1,u=i;return o.next(h=>j.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,oe())).next(f=>({batchId:l,changes:ww(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,u=>{const h=function(m,g){return new di(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=qi();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&io(f.mutation,h,Vt.empty(),je.now()),Iu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class PR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:_n(s.readTime)}}(n)),j.resolve()}}/**
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
 */class bR{constructor(){this.overlays=new Ne(Y.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Br(),i=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Br(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Br(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return j.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tR(n,r));let i=this.Ir.get(n);i===void 0&&(i=oe(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class DR{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Lf{constructor(){this.Tr=new Xe(ze.Er),this.dr=new Xe(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Te([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Te([])),r=new ze(n,e),s=new ze(n,e+1);let i=oe();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
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
 */class VR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(ze.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(he);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Y(i),0);let l=new Xe(he);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MR{constructor(e){this.Mr=e,this.docs=function(){return new Ne(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new Y(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||_k(yk(f),r)<=0||(s.has(f.key)||Iu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OR(this)}getSize(e){return j.resolve(this.size)}}class OR extends RR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class LR{constructor(e){this.persistence=e,this.Nr=new fi(n=>Pf(n),bf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lf,this.targetCount=0,this.kr=ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class jR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new kf(0),this.Kr=!1,this.Kr=!0,this.$r=new DR,this.referenceDelegate=e(this),this.Ur=new LR(this),this.indexManager=new AR,this.remoteDocumentCache=function(s){return new MR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new xR(n),this.Gr=new PR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new VR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new FR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class FR extends wk{constructor(e){super(),this.currentSequenceNumber=e}}class jf{constructor(e){this.persistence=e,this.Jr=new Lf,this.Yr=null}static Zr(e){return new jf(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=Y.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Ff{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ff(e,n.fromCache,r,s)}}/**
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
 */class UR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $R{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return US()?8:Ek(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new UR;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ji()<=ae.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(ji()<=ae.DEBUG&&G("QueryEngine","Query:",Es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ji()<=ae.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):j.resolve())}Yi(e,n){if(fy(n))return j.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jl(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,jl(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return fy(n)||s.isEqual(te.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(ji()<=ae.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Es(n)),this.rs(e,o,n,gk(s,-1)).next(l=>l))})}ts(e,n){let r=new Xe(_w(e));return n.forEach((s,i)=>{Iu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ji()<=ae.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Es(n)),this.Ji.getDocumentsMatchingQuery(e,n,xr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class BR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ne(he),this._s=new fi(i=>Pf(i),bf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zR(t,e,n,r){return new BR(t,e,n,r)}async function Fw(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=oe();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function qR(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let x=j.resolve();return g.forEach(N=>{x=x.next(()=>f.getEntry(u,N)).next(P=>{const O=h.docVersions.get(N);me(O!==null),P.version.compareTo(O)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Uw(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function WR(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let x=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?x=x.withResumeToken(Ze.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(m,x),function(P,O,S){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,x,f)&&l.push(n.Ur.updateTargetData(i,x))});let u=Bn(),h=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(HR(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(te.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function HR(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function KR(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GR(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function fd(t,e,n){const r=ne(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zo(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function xy(t,e,n){const r=ne(t);let s=te.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=ne(u),g=m._s.get(f);return g!==void 0?j.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,o,yn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:oe())).next(l=>(QR(r,Fk(e),l),{documents:l,Ts:i})))}function QR(t,e,n){let r=t.us.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Sy{constructor(){this.activeTargetIds=Wk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YR{constructor(){this.so=new Sy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Sy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XR{_o(e){}shutdown(){}}/**
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
 */class Ay{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let La=null;function Bc(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
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
 */const JR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ZR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ot="WebChannelConnection";class eC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Bc(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>(G("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Zs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=JR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Bc();return new Promise((o,l)=>{const u=new ew;u.setWithCredentials(!0),u.listenOnce(tw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case el.NO_ERROR:const f=u.getResponseJson();G(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case el.TIMEOUT:G(ot,`RPC '${e}' ${i} timed out`),l(new B(M.DEADLINE_EXCEEDED,"Request time out"));break;case el.HTTP_ERROR:const m=u.getStatus();if(G(ot,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const x=g==null?void 0:g.error;if(x&&x.status&&x.message){const N=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(x.status);l(new B(N,x.message))}else l(new B(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(M.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{G(ot,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);G(ot,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Bc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sw(),l=rw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");G(ot,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,x=!1;const N=new ZR({Io:O=>{x?G(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(G(ot,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),G(ot,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},To:()=>m.close()}),P=(O,S,I)=>{O.listen(S,A=>{try{I(A)}catch(D){setTimeout(()=>{throw D},0)}})};return P(m,zi.EventType.OPEN,()=>{x||(G(ot,`RPC '${e}' stream ${s} transport opened.`),N.yo())}),P(m,zi.EventType.CLOSE,()=>{x||(x=!0,G(ot,`RPC '${e}' stream ${s} transport closed`),N.So())}),P(m,zi.EventType.ERROR,O=>{x||(x=!0,Zs(ot,`RPC '${e}' stream ${s} transport errored:`,O),N.So(new B(M.UNAVAILABLE,"The operation could not be completed")))}),P(m,zi.EventType.MESSAGE,O=>{var S;if(!x){const I=O.data[0];me(!!I);const A=I,D=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(D){G(ot,`RPC '${e}' stream ${s} received error:`,D);const V=D.status;let L=function(E){const T=Me[E];if(T!==void 0)return Cw(T)}(V),v=D.message;L===void 0&&(L=M.INTERNAL,v="Unknown error status: "+V+" with message "+D.message),x=!0,N.So(new B(L,v)),m.close()}else G(ot,`RPC '${e}' stream ${s} received:`,I),N.bo(I)}}),P(l,nw.STAT_EVENT,O=>{O.stat===rd.PROXY?G(ot,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===rd.NOPROXY&&G(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function zc(){return typeof document<"u"?document:null}/**
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
 */function ku(t){return new cR(t,!0)}/**
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
 */class $w{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Bw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $w(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new B(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tC extends Bw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=fR(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?_n(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=dd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=ad(u)?{documents:gR(i,u)}:{query:yR(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=bw(i,o.resumeToken);const h=ud(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=$l(i,o.snapshotVersion.toTimestamp());const h=ud(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=vR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=dd(this.serializer),n.removeTarget=e,this.a_(n)}}class nC extends Bw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=mR(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=dd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pR(this.serializer,r))};this.a_(n)}}/**
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
 */class rC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,cd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,cd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($n(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class iC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ds(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.L_.add(4),await Ho(h),h.q_.set("Unknown"),h.L_.delete(4),await Ru(h)}(this))})}),this.q_=new sC(r,s)}}async function Ru(t){if(ds(t))for(const e of t.B_)await e(!0)}async function Ho(t){for(const e of t.B_)await e(!1)}function zw(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),zf(n)?Bf(n):pi(n).r_()&&$f(n,e))}function Uf(t,e){const n=ne(t),r=pi(n);n.N_.delete(e),r.r_()&&qw(n,e),n.N_.size===0&&(r.r_()?r.o_():ds(n)&&n.q_.set("Unknown"))}function $f(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pi(t).A_(e)}function qw(t,e){t.Q_.xe(e),pi(t).R_(e)}function Bf(t){t.Q_=new oR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),pi(t).start(),t.q_.v_()}function zf(t){return ds(t)&&!pi(t).n_()&&t.N_.size>0}function ds(t){return ne(t).L_.size===0}function Ww(t){t.Q_=void 0}async function oC(t){t.q_.set("Online")}async function aC(t){t.N_.forEach((e,n)=>{$f(t,e)})}async function lC(t,e){Ww(t),zf(t)?(t.q_.M_(e),Bf(t)):t.q_.set("Unknown")}async function uC(t,e,n){if(t.q_.set("Online"),e instanceof Pw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bl(t,r)}else if(e instanceof rl?t.Q_.Ke(e):e instanceof Nw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await Uw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),qw(i,u);const m=new lr(f.target,u,h,f.sequenceNumber);$f(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Bl(t,r)}}async function Bl(t,e,n){if(!zo(e))throw e;t.L_.add(1),await Ho(t),t.q_.set("Offline"),n||(n=()=>Uw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ru(t)})}function Hw(t,e){return e().catch(n=>Bl(t,n,e))}async function Cu(t){const e=ne(t),n=Ar(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;cC(e);)try{const s=await KR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,hC(e,s)}catch(s){await Bl(e,s)}Kw(e)&&Gw(e)}function cC(t){return ds(t)&&t.O_.length<10}function hC(t,e){t.O_.push(e);const n=Ar(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Kw(t){return ds(t)&&!Ar(t).n_()&&t.O_.length>0}function Gw(t){Ar(t).start()}async function dC(t){Ar(t).p_()}async function fC(t){const e=Ar(t);for(const n of t.O_)e.m_(n.mutations)}async function pC(t,e,n){const r=t.O_.shift(),s=Vf.from(r,e,n);await Hw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Cu(t)}async function mC(t,e){e&&Ar(t).V_&&await async function(r,s){if(function(o){return rR(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Ar(r).s_(),await Hw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Cu(r)}}(t,e),Kw(t)&&Gw(t)}async function ky(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.L_.add(3),await Ho(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ru(n)}async function gC(t,e){const n=ne(t);e?(n.L_.delete(2),await Ru(n)):e||(n.L_.add(2),await Ho(n),n.q_.set("Unknown"))}function pi(t){return t.K_||(t.K_=function(n,r,s){const i=ne(n);return i.w_(),new tC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:oC.bind(null,t),Ro:aC.bind(null,t),mo:lC.bind(null,t),d_:uC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),zf(t)?Bf(t):t.q_.set("Unknown")):(await t.K_.stop(),Ww(t))})),t.K_}function Ar(t){return t.U_||(t.U_=function(n,r,s){const i=ne(n);return i.w_(),new nC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:dC.bind(null,t),mo:mC.bind(null,t),f_:fC.bind(null,t),g_:pC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Cu(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class qf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new qf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wf(t,e){if($n("AsyncQueue",`${e}: ${t}`),zo(t))return new B(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=qi(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ry{constructor(){this.W_=new Ne(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new si(e,n,Bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Eu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class yC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _C{constructor(){this.queries=Cy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=Cy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(M.ABORTED,"Firestore shutting down"))}}function Cy(){return new fi(t=>yw(t),Eu)}async function Hf(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new yC,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Wf(o,`Initialization of query '${Es(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Gf(n)}async function Kf(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vC(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Gf(n)}function wC(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Gf(t){t.Y_.forEach(e=>{e.next()})}var pd,Ny;(Ny=pd||(pd={})).ea="default",Ny.Cache="cache";class Qf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==pd.Cache}}/**
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
 */class Qw{constructor(e){this.key=e}}class Yw{constructor(e){this.key=e}}class EC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=_w(e),this.Ra=new Bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ry,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),x=Iu(this.query,m)?m:null,N=!!g&&this.mutatedKeys.has(g.key),P=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let O=!1;g&&x?g.data.isEqual(x.data)?N!==P&&(r.track({type:3,doc:x}),O=!0):this.ga(g,x)||(r.track({type:2,doc:x}),O=!0,(u&&this.Aa(x,u)>0||h&&this.Aa(x,h)<0)&&(l=!0)):!g&&x?(r.track({type:0,doc:x}),O=!0):g&&!x&&(r.track({type:1,doc:g}),O=!0,(u||h)&&(l=!0)),O&&(x?(o=o.add(x),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(x,N){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return P(x)-P(N)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new si(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ry,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Yw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Qw(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class IC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TC{constructor(e){this.key=e,this.va=!1}}class xC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fi(l=>yw(l),Eu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ne(Y.comparator),this.Na=new Map,this.La=new Lf,this.Ba={},this.ka=new Map,this.qa=ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function SC(t,e,n=!0){const r=nE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Xw(r,e,n,!0),s}async function AC(t,e){const n=nE(t);await Xw(n,e,!0,!1)}async function Xw(t,e,n,r){const s=await GR(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await kC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zw(t.remoteStore,s),l}async function kC(t,e,n,r,s){t.Ka=(m,g,x)=>async function(P,O,S,I){let A=O.view.ma(S);A.ns&&(A=await xy(P.localStore,O.query,!1).then(({documents:v})=>O.view.ma(v,A)));const D=I&&I.targetChanges.get(O.targetId),V=I&&I.targetMismatches.get(O.targetId)!=null,L=O.view.applyChanges(A,P.isPrimaryClient,D,V);return by(P,O.targetId,L.wa),L.snapshot}(t,m,g,x);const i=await xy(t.localStore,e,!0),o=new EC(e,i.Ts),l=o.ma(i.documents),u=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);by(t,n,h.wa);const f=new IC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function RC(t,e,n){const r=ne(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Eu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uf(r.remoteStore,s.targetId),md(r,s.targetId)}).catch(Bo)):(md(r,s.targetId),await fd(r.localStore,s.targetId,!0))}async function CC(t,e){const n=ne(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uf(n.remoteStore,r.targetId))}async function NC(t,e,n){const r=LC(t);try{const s=await function(o,l){const u=ne(o),h=je.now(),f=l.reduce((x,N)=>x.add(N.key),oe());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let N=Bn(),P=oe();return u.cs.getEntries(x,f).next(O=>{N=O,N.forEach((S,I)=>{I.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,N)).next(O=>{m=O;const S=[];for(const I of l){const A=Jk(I,m.get(I.key).overlayedDocument);A!=null&&S.push(new Nr(I.key,A,uw(A.value.mapValue),kt.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,S,l)}).next(O=>{g=O;const S=O.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(x,O.batchId,S)})}).then(()=>({batchId:g.batchId,changes:ww(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ne(he)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ko(r,s.changes),await Cu(r.remoteStore)}catch(s){const i=Wf(s,"Failed to persist write");n.reject(i)}}async function Jw(t,e){const n=ne(t);try{const r=await WR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?me(o.va):s.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Ko(n,r,e)}catch(r){await Bo(r)}}function Py(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&Gf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PC(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ne(Y.comparator);o=o.insert(i,ut.newNoDocument(i,te.min()));const l=oe().add(i),u=new Au(te.min(),new Map,new Ne(he),o,l);await Jw(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Yf(r)}else await fd(r.localStore,e,!1).then(()=>md(r,e,n)).catch(Bo)}async function bC(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await qR(n.localStore,e);eE(n,r,null),Zw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ko(n,s)}catch(s){await Bo(s)}}async function DC(t,e,n){const r=ne(t);try{const s=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(me(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);eE(r,e,n),Zw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ko(r,s)}catch(s){await Bo(s)}}function Zw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function eE(t,e,n){const r=ne(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function md(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||tE(t,r)})}function tE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Uf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yf(t))}function by(t,e,n){for(const r of n)r instanceof Qw?(t.La.addReference(r.key,e),VC(t,r)):r instanceof Yw?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||tE(t,r.key)):Z()}function VC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),Yf(t))}function Yf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new TC(n)),t.Oa=t.Oa.insert(n,r),zw(t.remoteStore,new lr(yn(wu(n.path)),r,"TargetPurposeLimboResolution",kf.oe))}}async function Ko(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Ff.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(h,g=>j.forEach(g.$i,x=>f.persistence.referenceDelegate.addReference(m,g.targetId,x)).next(()=>j.forEach(g.Ui,x=>f.persistence.referenceDelegate.removeReference(m,g.targetId,x)))))}catch(m){if(!zo(m))throw m;G("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const x=f.os.get(g),N=x.snapshotVersion,P=x.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(g,P)}}}(r.localStore,i))}async function MC(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Fw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ko(n,r.hs)}}function OC(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let s=oe();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function nE(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PC.bind(null,e),e.Ca.d_=vC.bind(null,e.eventManager),e.Ca.$a=wC.bind(null,e.eventManager),e}function LC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DC.bind(null,e),e}class zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ku(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return zR(this.persistence,new $R,e.initialUser,this.serializer)}Ga(e){return new jR(jf.Zr,this.serializer)}Wa(e){return new YR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zl.provider={build:()=>new zl};class gd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Py(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MC.bind(null,this.syncEngine),await gC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _C}()}createDatastore(e){const n=ku(e.databaseInfo.databaseId),r=function(i){return new eC(i)}(e.databaseInfo);return function(i,o,l,u){return new rC(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new iC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Py(this.syncEngine,n,0),function(){return Ay.D()?new Ay:new XR}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const m=new xC(s,i,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);G("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ho(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}gd.provider={build:()=>new gd};/**
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
 */class Xf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=ow.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qc(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FC(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ky(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ky(e.remoteStore,s)),t._onlineComponents=e}async function FC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await qc(t,new zl)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await qc(t,new zl);return t._offlineComponents}async function rE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Dy(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Dy(t,new gd))),t._onlineComponents}function UC(t){return rE(t).then(e=>e.syncEngine)}async function ql(t){const e=await rE(t),n=e.eventManager;return n.onListen=SC.bind(null,e.syncEngine),n.onUnlisten=RC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=AC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CC.bind(null,e.syncEngine),n}function $C(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Xf({next:g=>{f.Za(),o.enqueueAndForget(()=>Kf(i,m));const x=g.docs.has(l);!x&&g.fromCache?h.reject(new B(M.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&g.fromCache&&u&&u.source==="server"?h.reject(new B(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Qf(wu(l.path),f,{includeMetadataChanges:!0,_a:!0});return Hf(i,m)}(await ql(t),t.asyncQueue,e,n,r)),r.promise}function BC(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Xf({next:g=>{f.Za(),o.enqueueAndForget(()=>Kf(i,m)),g.fromCache&&u.source==="server"?h.reject(new B(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Qf(l,f,{includeMetadataChanges:!0,_a:!0});return Hf(i,m)}(await ql(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function sE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Vy=new Map;/**
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
 */function iE(t,e,n){if(!n)throw new B(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zC(t,e,n,r){if(e===!0&&r===!0)throw new B(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!Y.isDocumentKey(t))throw new B(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oy(t){if(Y.isDocumentKey(t))throw new B(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nu(t);throw new B(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ly{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ly({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ly(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ak;switch(r.type){case"firstParty":return new hk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vy.get(n);r&&(G("ComponentProvider","Removing Datastore"),Vy.delete(n),r.terminate())}(this),Promise.resolve()}}function qC(t,e,n,r={}){var s;const i=(t=Ot(t,Pu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=at.MOCK_USER;else{l=VS(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new B(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(h)}t._authCredentials=new lk(new iw(l,u))}}/**
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
 */class Hn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hn(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class vr extends Hn{constructor(e,n,r){super(e,n,wu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new Y(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function bu(t,e,...n){if(t=Fe(t),iE("collection","path",e),t instanceof Pu){const r=Te.fromString(e,...n);return Oy(r),new vr(t,null,r)}{if(!(t instanceof _t||t instanceof vr))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Oy(r),new vr(t.firestore,null,r)}}function wr(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=ow.newId()),iE("doc","path",e),t instanceof Pu){const r=Te.fromString(e,...n);return My(r),new _t(t,null,new Y(r))}{if(!(t instanceof _t||t instanceof vr))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return My(r),new _t(t.firestore,t instanceof vr?t.converter:null,new Y(r))}}/**
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
 */class jy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $w(this,"async_queue_retry"),this.Vu=()=>{const r=zc();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Mn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!zo(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw $n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=qf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Fy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class zn extends Pu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jy(e),this._firestoreClient=void 0,await e}}}function WC(t,e){const n=typeof t=="object"?t:Sf(),r=typeof t=="string"?t:"(default)",s=cs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bS("firestore");i&&qC(s,...i)}return s}function Go(t){if(t._terminated)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HC(t),t._firestoreClient}function HC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,f){return new xk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,sE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new jC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(Ze.fromBase64String(e))}catch(n){throw new B(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ii(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Du{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jf{constructor(e){this._methodName=e}}/**
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
 */class Zf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */class ep{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const KC=/^__.*__$/;class GC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}class oE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class tp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Wl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(aE(this.Cu)&&KC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class QC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ku(e)}Qu(e,n,r,s=!1){return new tp({Cu:e,methodName:n,qu:r,path:Qe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vu(t){const e=t._freezeSettings(),n=ku(t._databaseId);return new QC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function np(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);rp("Data must be an object, but it was:",o,r);const l=lE(r,o);let u,h;if(i.merge)u=new Vt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=yd(e,m,n);if(!o.contains(g))throw new B(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);cE(f,g)||f.push(g)}u=new Vt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new GC(new It(l),u,h)}class Mu extends Jf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mu}}function YC(t,e,n,r){const s=t.Qu(1,e,n);rp("Data must be an object, but it was:",s,r);const i=[],o=It.empty();hs(r,(u,h)=>{const f=sp(e,u,n);h=Fe(h);const m=s.Nu(f);if(h instanceof Mu)i.push(f);else{const g=Qo(h,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Vt(i);return new oE(o,l,s.fieldTransforms)}function XC(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[yd(e,r,n)],u=[s];if(i.length%2!=0)throw new B(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(yd(e,i[g])),u.push(i[g+1]);const h=[],f=It.empty();for(let g=l.length-1;g>=0;--g)if(!cE(h,l[g])){const x=l[g];let N=u[g];N=Fe(N);const P=o.Nu(x);if(N instanceof Mu)h.push(x);else{const O=Qo(N,P);O!=null&&(h.push(x),f.set(x,O))}}const m=new Vt(h);return new oE(f,m,o.fieldTransforms)}function JC(t,e,n,r=!1){return Qo(n,t.Qu(r?4:3,e))}function Qo(t,e){if(uE(t=Fe(t)))return rp("Unsupported field value:",e,t),lE(t,e);if(t instanceof Jf)return function(r,s){if(!aE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Qo(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:$l(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$l(s.serializer,i)}}if(r instanceof Zf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ii)return{bytesValue:bw(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Of(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ep)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Df(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Nu(r)}`)}(t,e)}function lE(t,e){const n={};return aw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,s)=>{const i=Qo(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function uE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Zf||t instanceof ii||t instanceof _t||t instanceof Jf||t instanceof ep)}function rp(t,e,n){if(!uE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Nu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function yd(t,e,n){if((e=Fe(e))instanceof Du)return e._internalPath;if(typeof e=="string")return sp(t,e);throw Wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZC=new RegExp("[~\\*/\\[\\]]");function sp(t,e,n){if(e.search(ZC)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Du(...e.split("."))._internalPath}catch{throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new B(M.INVALID_ARGUMENT,l+t+u)}function cE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ou("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eN extends hE{data(){return super.data()}}function Ou(t,e){return typeof e=="string"?sp(t,e):e instanceof Du?e._internalPath:e._delegate._internalPath}/**
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
 */function dE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ip{}class op extends ip{}function fE(t,e,...n){let r=[];e instanceof ip&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof ap).length,l=i.filter(u=>u instanceof Lu).length;if(o>1||o>0&&l>0)throw new B(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Lu extends op{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lu(e,n,r)}_apply(e){const n=this._parse(e);return pE(e._query,n),new Hn(e.firestore,e.converter,ld(e._query,n))}_parse(e){const n=Vu(e.firestore);return function(i,o,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$y(m,f);const x=[];for(const N of m)x.push(Uy(u,i,N));g={arrayValue:{values:x}}}else g=Uy(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$y(m,f),g=JC(l,o,m,f==="in"||f==="not-in");return Le.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tN(t,e,n){const r=e,s=Ou("where",t);return Lu._create(s,r,n)}class ap extends ip{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ap(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)pE(o,u),o=ld(o,u)}(e._query,n),new Hn(e.firestore,e.converter,ld(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lp extends op{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bo(i,o)}(e._query,this._field,this._direction);return new Hn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new di(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function nN(t,e="asc"){const n=e,r=Ou("orderBy",t);return lp._create(r,n)}class up extends op{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new up(e,n,r)}_apply(e){return new Hn(e.firestore,e.converter,jl(e._query,this._limit,this._limitType))}}function rN(t){return up._create("limit",t,"F")}function Uy(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new B(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gw(e)&&n.indexOf("/")!==-1)throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!Y.isDocumentKey(r))throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ay(t,new Y(r))}if(n instanceof _t)return ay(t,n._key);throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nu(n)}.`)}function $y(t,e){if(!Array.isArray(t)||t.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sN{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>De(o.doubleValue));return new ep(i)}convertGeoPoint(e){return new Zf(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);me(jw(r));const s=new No(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function cp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mE extends hE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ou("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sl extends mE{data(e={}){return super.data(e)}}class gE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sl(this._firestore,this._userDataWriter,r.key,r,new Hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new sl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new sl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:iN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function oN(t){t=Ot(t,_t);const e=Ot(t.firestore,zn);return $C(Go(e),t._key).then(n=>_E(e,t,n))}class hp extends sN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function aN(t){t=Ot(t,Hn);const e=Ot(t.firestore,zn),n=Go(e),r=new hp(e);return dE(t._query),BC(n,t._query).then(s=>new gE(e,r,t,s))}function yE(t,e,n){t=Ot(t,_t);const r=Ot(t.firestore,zn),s=cp(t.converter,e,n);return ju(r,[np(Vu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,kt.none())])}function lN(t){return ju(Ot(t.firestore,zn),[new Su(t._key,kt.none())])}function uN(t,e){const n=Ot(t.firestore,zn),r=wr(t),s=cp(t.converter,e);return ju(n,[np(Vu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,kt.exists(!1))]).then(()=>r)}function dp(t,...e){var n,r,s;t=Fe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Fy(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Fy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,f;if(t instanceof _t)h=Ot(t.firestore,zn),f=wu(t._key.path),u={next:m=>{e[o]&&e[o](_E(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Ot(t,Hn);h=Ot(m.firestore,zn),f=m._query;const g=new hp(h);u={next:x=>{e[o]&&e[o](new gE(h,g,m,x))},error:e[o+1],complete:e[o+2]},dE(t._query)}return function(g,x,N,P){const O=new Xf(P),S=new Qf(x,O,N);return g.asyncQueue.enqueueAndForget(async()=>Hf(await ql(g),S)),()=>{O.Za(),g.asyncQueue.enqueueAndForget(async()=>Kf(await ql(g),S))}}(Go(h),f,l,u)}function ju(t,e){return function(r,s){const i=new Mn;return r.asyncQueue.enqueueAndForget(async()=>NC(await UC(r),s,i)),i.promise}(Go(t),e)}function _E(t,e,n){const r=n.docs.get(e._key),s=new hp(t);return new mE(t,s,e._key,r,new Hi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class cN{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Vu(e)}set(e,n,r){this._verifyNotCommitted();const s=Wc(e,this._firestore),i=cp(s.converter,n,r),o=np(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,kt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Wc(e,this._firestore);let o;return o=typeof(n=Fe(n))=="string"||n instanceof Du?XC(this._dataReader,"WriteBatch.update",i._key,n,r,s):YC(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,kt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Wc(e,this._firestore);return this._mutations=this._mutations.concat(new Su(n._key,kt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wc(t,e){if((t=Fe(t)).firestore!==e)throw new B(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function vE(t){return Go(t=Ot(t,zn)),new cN(t,e=>ju(t,e))}(function(e,n=!0){(function(s){hi=s})(ci),En(new an("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new zn(new uk(r.getProvider("auth-internal")),new fk(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Wt(ny,"4.7.3",e),Wt(ny,"4.7.3","esm2017")})();function fp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hN=wE,EE=new us("auth","Firebase",wE());/**
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
 */const Hl=new _u("@firebase/auth");function dN(t,...e){Hl.logLevel<=ae.WARN&&Hl.warn(`Auth (${ci}): ${t}`,...e)}function il(t,...e){Hl.logLevel<=ae.ERROR&&Hl.error(`Auth (${ci}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw mp(t,...e)}function sn(t,...e){return mp(t,...e)}function pp(t,e,n){const r=Object.assign(Object.assign({},hN()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function Er(t){return pp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function IE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(t,"argument-error"),pp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return EE.create(t,...e)}function J(t,e,...n){if(!t)throw mp(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function qn(t,e){t||Pn(e)}/**
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
 */function _d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fN(){return By()==="http:"||By()==="https:"}function By(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function pN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fN()||q0()||"connection"in navigator)?navigator.onLine:!0}function mN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=MS()||jS()}get(){return pN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gp(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class TE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yN=new Yo(3e4,6e4);function yp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mi(t,e,n,r,s={}){return xE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=$o(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return LS()||(h.referrerPolicy="no-referrer"),TE.fetch()(SE(t,t.config.apiHost,n,l),h)})}async function xE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gN),e);try{const s=new vN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ja(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pp(t,f,h);Tn(t,f)}}catch(s){if(s instanceof un)throw s;Tn(t,"network-request-failed",{message:String(s)})}}async function _N(t,e,n,r,s={}){const i=await mi(t,e,n,r,s);return"mfaPendingCredential"in i&&Tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function SE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gp(t.config,s):`${t.config.apiScheme}://${s}`}class vN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),yN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function wN(t,e){return mi(t,"POST","/v1/accounts:delete",e)}async function AE(t,e){return mi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EN(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=_p(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oo(Hc(s.auth_time)),issuedAtTime:oo(Hc(s.iat)),expirationTime:oo(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function _p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const s=U0(n);return s?JSON.parse(s):(il("Failed to decode base64 JWT payload"),null)}catch(s){return il("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zy(t){const e=_p(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&IN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mo(t,AE(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kE(i.providerUserInfo):[],l=SN(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function xN(t){const e=Fe(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kE(t){return t.map(e=>{var{providerId:n}=e,r=fp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AN(t,e){const n=await xE(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=SE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",TE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kN(t,e){return mi(t,"POST","/v2/accounts:revokeToken",yp(t,e))}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=zy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await AN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zs;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Xn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EN(this,e)}reload(){return xN(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await Mo(this,wN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,x=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,I=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:D,isAnonymous:V,providerData:L,stsTokenManager:v}=n;J(A&&v,e,"internal-error");const _=zs.fromJSON(this.name,v);J(typeof A=="string",e,"internal-error"),Xn(m,e.name),Xn(g,e.name),J(typeof D=="boolean",e,"internal-error"),J(typeof V=="boolean",e,"internal-error"),Xn(x,e.name),Xn(N,e.name),Xn(P,e.name),Xn(O,e.name),Xn(S,e.name),Xn(I,e.name);const E=new bn({uid:A,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:V,photoURL:N,phoneNumber:x,tenantId:P,stsTokenManager:_,createdAt:S,lastLoginAt:I});return L&&Array.isArray(L)&&(E.providerData=L.map(T=>Object.assign({},T))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new zs;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zs;l.updateFromIdToken(r);const u=new bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const qy=new Map;function Dn(t){qn(t instanceof Function,"Expected a class definition");let e=qy.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qy.set(t,e),e)}/**
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
 */class RE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RE.type="NONE";const Wy=RE;/**
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
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ol(this.userKey,s.apiKey,i),this.fullPersistenceKey=ol("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(Dn(Wy),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Dn(Wy);const o=ol(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=bn._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new qs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new qs(i,e,r))}}/**
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
 */function Hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VE(e))return"Blackberry";if(ME(e))return"Webos";if(NE(e))return"Safari";if((e.includes("chrome/")||PE(e))&&!e.includes("edge/"))return"Chrome";if(DE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CE(t=ht()){return/firefox\//i.test(t)}function NE(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PE(t=ht()){return/crios\//i.test(t)}function bE(t=ht()){return/iemobile/i.test(t)}function DE(t=ht()){return/android/i.test(t)}function VE(t=ht()){return/blackberry/i.test(t)}function ME(t=ht()){return/webos/i.test(t)}function vp(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RN(t=ht()){var e;return vp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CN(){return FS()&&document.documentMode===10}function OE(t=ht()){return vp(t)||DE(t)||ME(t)||VE(t)||/windows phone/i.test(t)||bE(t)}/**
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
 */function LE(t,e=[]){let n;switch(t){case"Browser":n=Hy(ht());break;case"Worker":n=`${Hy(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
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
 */class NN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PN(t,e={}){return mi(t,"GET","/v2/passwordPolicy",yp(t,e))}/**
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
 */const bN=6;class DN{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class VN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ky(this),this.idTokenSubscription=new Ky(this),this.beforeStateQueue=new NN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await AE(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Er(this));const n=e?Fe(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PN(this),n=new DN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gi(t){return Fe(t)}class Ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=HS(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MN(t){wp=t}function ON(t){return wp.loadJS(t)}function LN(){return wp.gapiScript}function jN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function FN(t,e){const n=cs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ao(i,e??{}))return s;Tn(s,"already-initialized")}return n.initialize({options:e})}function UN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $N(t,e,n){const r=gi(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=jE(e),{host:o,port:l}=BN(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zN()}function jE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BN(t){const e=jE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gy(o)}}}function Gy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class FE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
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
 */async function Ws(t,e){return _N(t,"POST","/v1/accounts:signInWithIdp",yp(t,e))}/**
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
 */const qN="http://localhost";class rs extends FE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:qN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */class Fu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xo extends Fu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends Xo{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class sr extends Xo{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class ir extends Xo{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=Qy(r);return new oi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qy(r);return new oi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gl extends un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gl(e,n,r,s)}}function UE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,i,e,r):i})}async function WN(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
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
 */async function HN(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Er(r));const s="reauthenticate";try{const i=await Mo(t,UE(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=_p(i.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),oi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),i}}/**
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
 */async function KN(t,e,n=!1){if(pn(t.app))return Promise.reject(Er(t));const r="signIn",s=await UE(t,r,e),i=await oi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function GN(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function QN(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function YN(t){return Fe(t).signOut()}const Ql="__sak";/**
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
 */class $E{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XN=1e3,JN=10;class BE extends $E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);CN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BE.type="LOCAL";const ZN=BE;/**
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
 */class zE extends $E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zE.type="SESSION";const qE=zE;/**
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
 */function eP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await eP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uu.receivers=[];/**
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
 */function Ep(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Ep("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function nP(t){vn().location.href=t}/**
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
 */function WE(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function rP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iP(){return WE()?self:null}/**
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
 */const HE="firebaseLocalStorageDb",oP=1,Yl="firebaseLocalStorage",KE="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function aP(){const t=indexedDB.deleteDatabase(HE);return new Jo(t).toPromise()}function wd(){const t=indexedDB.open(HE,oP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:KE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await aP(),e(await wd()))})})}async function Yy(t,e,n){const r=$u(t,!0).put({[KE]:e,value:n});return new Jo(r).toPromise()}async function lP(t,e){const n=$u(t,!1).get(e),r=await new Jo(n).toPromise();return r===void 0?null:r.value}function Xy(t,e){const n=$u(t,!0).delete(e);return new Jo(n).toPromise()}const uP=800,cP=3;class GE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uu._getInstance(iP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await Yy(e,Ql,"1"),await Xy(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$u(s,!1).getAll();return new Jo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GE.type="LOCAL";const hP=GE;new Yo(3e4,6e4);/**
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
 */function Ip(t,e){return e?Dn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tp extends FE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dP(t){return KN(t.auth,new Tp(t),t.bypassAuthState)}function fP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),HN(n,new Tp(t),t.bypassAuthState)}async function pP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),WN(n,new Tp(t),t.bypassAuthState)}/**
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
 */class QE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dP;case"linkViaPopup":case"linkViaRedirect":return pP;case"reauthViaPopup":case"reauthViaRedirect":return fP;default:Tn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mP=new Yo(2e3,1e4);async function gP(t,e,n){if(pn(t.app))return Promise.reject(sn(t,"operation-not-supported-in-this-environment"));const r=gi(t);IE(t,e,Fu);const s=Ip(r,n);return new zr(r,"signInViaPopup",e,s).executeNotNull()}class zr extends QE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mP.get())};e()}}zr.currentPopupAction=null;/**
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
 */const yP="pendingRedirect",al=new Map;class _P extends QE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await vP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vP(t,e){const n=XE(e),r=YE(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function wP(t,e){return YE(t)._set(XE(e),"true")}function EP(t,e){al.set(t._key(),e)}function YE(t){return Dn(t._redirectPersistence)}function XE(t){return ol(yP,t.config.apiKey,t.name)}/**
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
 */function IP(t,e,n){return TP(t,e,n)}async function TP(t,e,n){if(pn(t.app))return Promise.reject(Er(t));const r=gi(t);IE(t,e,Fu),await r._initializationPromise;const s=Ip(r,n);return await wP(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function xP(t,e){return await gi(t)._initializationPromise,JE(t,e,!1)}async function JE(t,e,n=!1){if(pn(t.app))return Promise.reject(Er(t));const r=gi(t),s=Ip(r,e),o=await new _P(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SP=10*60*1e3;class AP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jy(e))}saveEventToCache(e){this.cachedEventUids.add(Jy(e)),this.lastProcessedEventTime=Date.now()}}function Jy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZE(t);default:return!1}}/**
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
 */async function RP(t,e={}){return mi(t,"GET","/v1/projects",e)}/**
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
 */const CP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NP=/^https?/;async function PP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RP(t);for(const n of e)try{if(bP(n))return}catch{}Tn(t,"unauthorized-domain")}function bP(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NP.test(n))return!1;if(CP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DP=new Yo(3e4,6e4);function Zy(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VP(t){return new Promise((e,n)=>{var r,s,i;function o(){Zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zy(),n(sn(t,"network-request-failed"))},timeout:DP.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const l=jN("iframefcb");return vn()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},ON(`${LN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ll=null,e})}let ll=null;function MP(t){return ll=ll||VP(t),ll}/**
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
 */const OP=new Yo(5e3,15e3),LP="__/auth/iframe",jP="emulator/auth/iframe",FP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $P(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gp(e,jP):`https://${t.config.authDomain}/${LP}`,r={apiKey:e.apiKey,appName:t.name,v:ci},s=UP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$o(r).slice(1)}`}async function BP(t){const e=await MP(t),n=vn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:$P(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=vn().setTimeout(()=>{i(o)},OP.get());function u(){vn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const zP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qP=500,WP=600,HP="_blank",KP="http://localhost";class e_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,r=qP,s=WP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},zP),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ht().toLowerCase();n&&(l=PE(h)?HP:n),CE(h)&&(e=e||KP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[x,N])=>`${g}${x}=${N},`,"");if(RN(h)&&l!=="_self")return QP(e||"",l),new e_(null);const m=window.open(e||"",l,f);J(m,t,"popup-blocked");try{m.focus()}catch{}return new e_(m)}function QP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YP="__/auth/handler",XP="emulator/auth/handler",JP=encodeURIComponent("fac");async function t_(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:s};if(e instanceof Fu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Xo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${JP}=${encodeURIComponent(u)}`:"";return`${ZP(t)}?${$o(l).slice(1)}${h}`}function ZP({config:t}){return t.emulator?gp(t,XP):`https://${t.authDomain}/${YP}`}/**
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
 */const Kc="webStorageSupport";class e2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qE,this._completeRedirectFn=JE,this._overrideRedirectResult=EP}async _openPopup(e,n,r,s){var i;qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await t_(e,n,r,_d(),s);return GP(e,o,Ep())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await t_(e,n,r,_d(),s);return nP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BP(e),r=new AP(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kc,{type:Kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Kc];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return OE()||NE()||vp()}}const t2=e2;var n_="@firebase/auth",r_="1.7.9";/**
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
 */class n2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function r2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function s2(t){En(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LE(t)},h=new VN(r,s,i,u);return UN(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new an("auth-internal",e=>{const n=gi(e.getProvider("auth").getImmediate());return(r=>new n2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(n_,r_,r2(t)),Wt(n_,r_,"esm2017")}/**
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
 */const i2=5*60,o2=z0("authIdTokenMaxAge")||i2;let s_=null;const a2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>o2)return;const s=n==null?void 0:n.token;s_!==s&&(s_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function l2(t=Sf()){const e=cs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FN(t,{popupRedirectResolver:t2,persistence:[hP,ZN,qE]}),r=z0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=a2(i.toString());QN(n,o,()=>o(n.currentUser)),GN(n,l=>o(l))}}const s=$0("auth");return s&&$N(n,`http://${s}`),n}function u2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",u2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});s2("Browser");const eI="@firebase/installations",xp="0.6.9";/**
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
 */const tI=1e4,nI=`w:${xp}`,rI="FIS_v2",c2="https://firebaseinstallations.googleapis.com/v1",h2=60*60*1e3,d2="installations",f2="Installations";/**
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
 */const p2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ss=new us(d2,f2,p2);function sI(t){return t instanceof un&&t.code.includes("request-failed")}/**
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
 */function iI({projectId:t}){return`${c2}/projects/${t}/installations`}function oI(t){return{token:t.token,requestStatus:2,expiresIn:g2(t.expiresIn),creationTime:Date.now()}}async function aI(t,e){const r=(await e.json()).error;return ss.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function lI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function m2(t,{refreshToken:e}){const n=lI(t);return n.append("Authorization",y2(e)),n}async function uI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function g2(t){return Number(t.replace("s","000"))}function y2(t){return`${rI} ${t}`}/**
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
 */async function _2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=iI(t),s=lI(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:rI,appId:t.appId,sdkVersion:nI},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await uI(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:oI(h.authToken)}}else throw await aI("Create Installation",u)}/**
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
 */function cI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function v2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const w2=/^[cdef][\w-]{21}$/,Ed="";function E2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=I2(t);return w2.test(n)?n:Ed}catch{return Ed}}function I2(t){return v2(t).substr(0,22)}/**
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
 */function Bu(t){return`${t.appName}!${t.appId}`}/**
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
 */const hI=new Map;function dI(t,e){const n=Bu(t);fI(n,e),T2(n,e)}function fI(t,e){const n=hI.get(t);if(n)for(const r of n)r(e)}function T2(t,e){const n=x2();n&&n.postMessage({key:t,fid:e}),S2()}let qr=null;function x2(){return!qr&&"BroadcastChannel"in self&&(qr=new BroadcastChannel("[Firebase] FID Change"),qr.onmessage=t=>{fI(t.data.key,t.data.fid)}),qr}function S2(){hI.size===0&&qr&&(qr.close(),qr=null)}/**
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
 */const A2="firebase-installations-database",k2=1,is="firebase-installations-store";let Gc=null;function Sp(){return Gc||(Gc=Q0(A2,k2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(is)}}})),Gc}async function Xl(t,e){const n=Bu(t),s=(await Sp()).transaction(is,"readwrite"),i=s.objectStore(is),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&dI(t,e.fid),e}async function pI(t){const e=Bu(t),r=(await Sp()).transaction(is,"readwrite");await r.objectStore(is).delete(e),await r.done}async function zu(t,e){const n=Bu(t),s=(await Sp()).transaction(is,"readwrite"),i=s.objectStore(is),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&dI(t,l.fid),l}/**
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
 */async function Ap(t){let e;const n=await zu(t.appConfig,r=>{const s=R2(r),i=C2(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Ed?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function R2(t){const e=t||{fid:E2(),registrationStatus:0};return mI(e)}function C2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ss.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=N2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P2(t)}:{installationEntry:e}}async function N2(t,e){try{const n=await _2(t,e);return Xl(t.appConfig,n)}catch(n){throw sI(n)&&n.customData.serverCode===409?await pI(t.appConfig):await Xl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function P2(t){let e=await i_(t.appConfig);for(;e.registrationStatus===1;)await cI(100),e=await i_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ap(t);return r||n}return e}function i_(t){return zu(t,e=>{if(!e)throw ss.create("installation-not-found");return mI(e)})}function mI(t){return b2(t)?{fid:t.fid,registrationStatus:0}:t}function b2(t){return t.registrationStatus===1&&t.registrationTime+tI<Date.now()}/**
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
 */async function D2({appConfig:t,heartbeatServiceProvider:e},n){const r=V2(t,n),s=m2(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:nI,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await uI(()=>fetch(r,l));if(u.ok){const h=await u.json();return oI(h)}else throw await aI("Generate Auth Token",u)}function V2(t,{fid:e}){return`${iI(t)}/${e}/authTokens:generate`}/**
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
 */async function kp(t,e=!1){let n;const r=await zu(t.appConfig,i=>{if(!gI(i))throw ss.create("not-registered");const o=i.authToken;if(!e&&L2(o))return i;if(o.requestStatus===1)return n=M2(t,e),i;{if(!navigator.onLine)throw ss.create("app-offline");const l=F2(i);return n=O2(t,l),l}});return n?await n:r.authToken}async function M2(t,e){let n=await o_(t.appConfig);for(;n.authToken.requestStatus===1;)await cI(100),n=await o_(t.appConfig);const r=n.authToken;return r.requestStatus===0?kp(t,e):r}function o_(t){return zu(t,e=>{if(!gI(e))throw ss.create("not-registered");const n=e.authToken;return U2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function O2(t,e){try{const n=await D2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Xl(t.appConfig,r),n}catch(n){if(sI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xl(t.appConfig,r)}throw n}}function gI(t){return t!==void 0&&t.registrationStatus===2}function L2(t){return t.requestStatus===2&&!j2(t)}function j2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+h2}function F2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function U2(t){return t.requestStatus===1&&t.requestTime+tI<Date.now()}/**
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
 */async function $2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ap(e);return r?r.catch(console.error):kp(e).catch(console.error),n.fid}/**
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
 */async function B2(t,e=!1){const n=t;return await z2(n),(await kp(n,e)).token}async function z2(t){const{registrationPromise:e}=await Ap(t);e&&await e}/**
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
 */function q2(t){if(!t||!t.options)throw Qc("App Configuration");if(!t.name)throw Qc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qc(t){return ss.create("missing-app-config-values",{valueName:t})}/**
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
 */const yI="installations",W2="installations-internal",H2=t=>{const e=t.getProvider("app").getImmediate(),n=q2(e),r=cs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},K2=t=>{const e=t.getProvider("app").getImmediate(),n=cs(e,yI).getImmediate();return{getId:()=>$2(n),getToken:s=>B2(n,s)}};function G2(){En(new an(yI,H2,"PUBLIC")),En(new an(W2,K2,"PRIVATE"))}G2();Wt(eI,xp);Wt(eI,xp,"esm2017");/**
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
 */const Jl="analytics",Q2="firebase_id",Y2="origin",X2=60*1e3,J2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Rt=new _u("@firebase/analytics");/**
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
 */const Z2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new us("analytics","Analytics",Z2);/**
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
 */function eb(t){if(!t.startsWith(Rp)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return Rt.warn(e.message),""}return t}function _I(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nb(t,e){const n=tb("firebase-js-sdk-policy",{createScriptURL:eb}),r=document.createElement("script"),s=`${Rp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function rb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function sb(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await _I(n)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(l){Rt.error(l)}t("config",s,i)}async function ib(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await _I(n);for(const u of o){const h=l.find(m=>m.measurementId===u),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Rt.error(i)}}function ob(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await ib(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await sb(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Rt.error(l)}}return s}function ab(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ob(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function lb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rp)&&n.src.includes(t))return n;return null}/**
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
 */const ub=30,cb=1e3;class hb{constructor(e={},n=cb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vI=new hb;function db(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fb(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:db(r)},i=J2.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function pb(t,e=vI,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Lt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new yb;return setTimeout(async()=>{l.abort()},X2),wI({appId:r,apiKey:s,measurementId:i},o,l,e)}async function wI(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=vI){var i;const{appId:o,measurementId:l}=t;try{await mb(r,e)}catch(u){if(l)return Rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await fb(t);return s.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!gb(h)){if(s.deleteThrottleMetadata(o),l)return Rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw u}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Hg(n,s.intervalMillis,ub):Hg(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,m),Rt.debug(`Calling attemptFetch again in ${f} millis`),wI(t,m,r,s)}}function mb(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gb(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _b(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function vb(){if(W0())try{await H0()}catch(t){return Rt.warn(Lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Rt.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wb(t,e,n,r,s,i,o){var l;const u=pb(t);u.then(x=>{n[x.measurementId]=x.appId,t.options.measurementId&&x.measurementId!==t.options.measurementId&&Rt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>Rt.error(x)),e.push(u);const h=vb().then(x=>{if(x)return r.getId()}),[f,m]=await Promise.all([u,h]);lb(i)||nb(i,f.measurementId),s("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[Y2]="firebase",g.update=!0,m!=null&&(g[Q2]=m),s("config",f.measurementId,g),f.measurementId}/**
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
 */class Eb{constructor(e){this.app=e}_delete(){return delete ao[this.app.options.appId],Promise.resolve()}}let ao={},a_=[];const l_={};let Yc="dataLayer",Ib="gtag",u_,EI,c_=!1;function Tb(){const t=[];if(q0()&&t.push("This is a browser extension environment."),$S()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});Rt.warn(n.message)}}function xb(t,e,n){Tb();const r=t.options.appId;if(!r)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(ao[r]!=null)throw Lt.create("already-exists",{id:r});if(!c_){rb(Yc);const{wrappedGtag:i,gtagCore:o}=ab(ao,a_,l_,Yc,Ib);EI=i,u_=o,c_=!0}return ao[r]=wb(t,a_,l_,e,u_,Yc,n),new Eb(t)}function Sb(t=Sf()){t=Fe(t);const e=cs(t,Jl);return e.isInitialized()?e.getImmediate():Ab(t)}function Ab(t,e={}){const n=cs(t,Jl);if(n.isInitialized()){const s=n.getImmediate();if(Ao(e,n.getOptions()))return s;throw Lt.create("already-initialized")}return n.initialize({options:e})}function kb(t,e,n,r){t=Fe(t),_b(EI,ao[t.app.options.appId],e,n,r).catch(s=>Rt.error(s))}const h_="@firebase/analytics",d_="0.10.8";function Rb(){En(new an(Jl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xb(r,s,n)},"PUBLIC")),En(new an("analytics-internal",t,"PRIVATE")),Wt(h_,d_),Wt(h_,d_,"esm2017");function t(e){try{const n=e.getProvider(Jl).getImmediate();return{logEvent:(r,s,i)=>kb(n,r,s,i)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}Rb();const Zl="app_debug_logs",ye=(t,e="info")=>{try{const n=new Date,r=`${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}:${n.getSeconds().toString().padStart(2,"0")}.${n.getMilliseconds().toString().padStart(3,"0")}`,s={timestamp:r,message:t,type:e},i=localStorage.getItem(Zl),o=i?JSON.parse(i):[],l=[s,...o].slice(0,50);localStorage.setItem(Zl,JSON.stringify(l)),console.log(`[${r}] ${t}`)}catch(n){console.error("Logger error",n)}},Cb=()=>{try{const t=localStorage.getItem(Zl);return t?JSON.parse(t):[]}catch{return[]}},Nb=()=>{localStorage.removeItem(Zl)},Pb={VITE_FIREBASE_API_KEY:"AIzaSyDT7WprmgPSa_rONLEUkr9LWSZeHClpTFM",VITE_FIREBASE_APP_ID:"1:844876295872:web:4b3cd98e646846f0868725",VITE_FIREBASE_AUTH_DOMAIN:"leavetable-fd826.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"844876295872",VITE_FIREBASE_PROJECT_ID:"leavetable-fd826",VITE_FIREBASE_STORAGE_BUCKET:"leavetable-fd826.firebasestorage.app"},ws=Pb,Xc={apiKey:ws.VITE_FIREBASE_API_KEY,authDomain:ws.VITE_FIREBASE_AUTH_DOMAIN,projectId:ws.VITE_FIREBASE_PROJECT_ID,storageBucket:ws.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:ws.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:ws.VITE_FIREBASE_APP_ID};let Fa,ke=null,wn=null,Pr=!1;if(Xc.apiKey&&Xc.projectId)try{Fa=Y0(Xc);try{Sb(Fa)}catch{}ke=WC(Fa),wn=l2(Fa),Pr=!0,console.log("Firebase initialized successfully"),ye("Firebase SDK initialized","success")}catch(t){console.error("Firebase initialization failed:",t),ye(`Firebase init failed: ${t.message}`,"error")}else console.warn("Firebase configuration missing."),ye("Firebase config missing","warn");const Wr=()=>Pr,f_=new Rn,eu="auth_redirect_pending",Cp="auth_redirect_timestamp",bb=10*60*1e3,Db=()=>{const t=navigator.userAgent||navigator.vendor||window.opera||"";return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Line|FBAN|FBAV|Instagram|MicroMessenger/i.test(t)},Vb=()=>{ye("[Auth] Setting redirect flag...","info"),localStorage.setItem(eu,"true"),localStorage.setItem(Cp,Date.now().toString())},os=()=>{localStorage.getItem(eu)&&(ye("[Auth] Clearing redirect flag.","info"),localStorage.removeItem(eu),localStorage.removeItem(Cp))},Id=()=>{const t=localStorage.getItem(eu)==="true",e=localStorage.getItem(Cp);if(!t)return!1;if(e){const n=parseInt(e,10),r=Date.now();if(isNaN(n)||r-n>bb)return ye("[Auth] Redirect flag expired or invalid. Clearing.","warn"),os(),!1}else return os(),!1;return!0},Mb=async(t=!1)=>{if(!wn)throw new Error("Firebase Auth not initialized");const e=Db();if(ye(`[Login] Start. Mobile: ${e}. Strategy: Popup Only`),t){ye("[Login] Forcing Redirect...","info"),Vb(),await IP(wn,f_);return}try{const n=await gP(wn,f_);return ye(`[Login] Popup Success: ${n.user.email}`,"success"),n.user}catch(n){throw console.warn("Popup failed:",n),ye(`[Login] Popup failed: ${n.code||n.message}`,"error"),n}},Ob=async()=>{if(!wn||!Id())return null;ye("[Auth] Detected pending redirect. Checking result...","info");try{const t=await xP(wn);return os(),t?(ye(`[Auth] Redirect Success: ${t.user.email}`,"success"),t.user):(ye("[Auth] Redirect returned null (User cancelled or Session lost).","warn"),null)}catch(t){return os(),console.error("Check Redirect Error:",t),ye(`[Auth] Check Redirect Error: ${t.message}`,"error"),null}},Lb=async()=>{if(wn)try{await YN(wn),os(),ye("User logged out","info")}catch(t){console.error("Logout failed",t),ye(`Logout error: ${t.message}`,"error")}},jb=(t,e,n,r)=>{if(!Pr||!ke)return()=>{};const s=wr(ke,rn,If(t,e));return dp(s,i=>n(i.exists()?i.data():null),i=>{console.error("subscribeMonthSettings error:",i),r(i)})},Fb=(t,e,n,r)=>{if(!Pr||!ke)return()=>{};const s=bu(ke,rn,Tf(t,e),"entries");return dp(s,i=>{const o=[];i.forEach(l=>o.push(l.data())),n(o)},i=>{console.error("subscribeMonthEntries error:",i),r(i)})},Ub=async(t,e)=>{if(!Pr||!ke)return;const n=wr(ke,rn,If(t.monthKey,t.group)),r={...t,schemaVersion:2,updatedAt:Date.now(),updatedBy:e??"unknown"};await yE(n,r)},$b=async(t,e)=>{if(!Pr||!ke)return;const n=wr(ke,rn,Tf(t.monthKey,t.group),"entries",Za(t.memberName,t.date,t.order)),r={...t,updatedAt:Date.now(),updatedBy:e??"unknown"};await yE(n,r)},Bb=async(t,e,n,r,s,i,o)=>{if(!Pr||!ke)return;const l=Tf(t,e),u=wr(ke,rn,l,"entries",Za(n,r,s));await lN(u);const h=i.filter(g=>g.order>s).sort((g,x)=>g.order-x.order);if(h.length===0)return;const f=vE(ke),m=Date.now();for(const g of h){const x=wr(ke,rn,l,"entries",Za(g.memberName,g.date,g.order)),N=wr(ke,rn,l,"entries",Za(g.memberName,g.date,g.order-1));f.delete(x),f.set(N,{...g,order:g.order-1,updatedAt:m,updatedBy:o??"unknown"})}await f.commit()},zb=async(t,e)=>{if(!Pr||!ke)return null;const n=wr(ke,rn,If(t,e)),r=await oN(n);return r.exists()?r.data():null},qb=t=>{const[e,n]=t.split("-").map(Number);return{year:e,month0:(n||1)-1}},Wb=({settings:t,currentMonthKey:e,onSaveSettings:n,onChangeMonth:r})=>{const{year:s,month0:i}=qb(e),o=t.group,[l,u]=X.useState(t),[h,f]=X.useState(""),[m,g]=X.useState(!1),[x,N]=X.useState(""),[P,O]=X.useState(""),[S,I]=X.useState("2"),[A,D]=X.useState(null),[V,L]=X.useState("");X.useEffect(()=>{u(t)},[t]),X.useEffect(()=>{f(""),I("2"),g(!1)},[o,e]);const v=K=>{u(K),n(K)},_=K=>{const se=new Date(s,i);se.setMonth(se.getMonth()+K),r(Ef(se.getFullYear(),se.getMonth()))},E=()=>{if(!m)return;const K=h.trim();!K||l.members.includes(K)||(v({...l,members:[...l.members,K]}),f(""))},T=async()=>{if(!m)return;const K=xS(e);try{const se=await zb(K,o);if(!se||se.members.length===0){alert(`上個月 (${K}) 沒有 ${o} 班人員資料`);return}if(!window.confirm(`確定要從上月 (${K}) 匯入 ${se.members.length} 位 ${o} 班人員嗎？`))return;v({...l,members:[...se.members]})}catch(se){alert(`匯入失敗：${se.message??"未知錯誤"}`)}},k=K=>{m&&v({...l,members:l.members.filter(se=>se!==K)})},R=K=>{if(!m)return;const se=Yh(new Date(s,i)),et=K===1?se:TS(se,1);v({...l,firstWorkDay:er(et,"yyyy-MM-dd"),dailyQuotas:{}})},w=K=>{if(!m||!x||!P)return;const se=Dl(x),et=Dl(P);if(se>et){alert("起始日期不能晚於結束日期");return}const dt={...l.shiftExceptions};Xh({start:se,end:et}).forEach(ft=>{const cn=er(ft,"yyyy-MM-dd");K==="clear"?delete dt[cn]:dt[cn]=K==="work"}),v({...l,shiftExceptions:dt}),alert("排班範圍設定已更新")},de=K=>L0(er(K,"yyyy-MM-dd"),l.firstWorkDay,l.shiftExceptions),ge=Yh(new Date(s,i)),W=M0(ge),ee=Xh({start:ge,end:W}),F=K=>{if(!m||!l.firstWorkDay)return;const se={...l.dailyQuotas};ee.forEach(et=>{if(de(et)){const dt=er(et,"yyyy-MM-dd");K===0?delete se[dt]:se[dt]=K}}),v({...l,dailyQuotas:se})},q=()=>{if(!m)return;const K=parseFloat(S);!isNaN(K)&&K>=0&&F(K)},H=(K,se)=>{m&&(D(K),L(se>0?se.toString():""))},re=()=>{if(!A)return;const K=parseFloat(V),se={...l.dailyQuotas};isNaN(K)||K===0?delete se[A]:se[A]=K,v({...l,dailyQuotas:se}),D(null),L("")},fe=!!l.firstWorkDay?de(ge)?1:2:null,Be=o==="A"?"text-indigo-600":"text-teal-600",Gt=o==="A"?"bg-indigo-50 border-indigo-200":"bg-teal-50 border-teal-200",Ct=o==="A"?"bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-600":"bg-teal-600 hover:bg-teal-700 focus:ring-teal-600",Nt=o==="A"?"focus:border-indigo-600 focus:ring-indigo-600":"focus:border-teal-600 focus:ring-teal-600",fs=m?"opacity-100":"opacity-60 cursor-not-allowed";return p.jsxs("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx("h1",{className:"text-2xl font-bold text-gray-900 mr-3",children:"設定頁面"}),p.jsxs("span",{className:`px-3 py-1 rounded-full text-sm font-bold border ${Gt} ${Be}`,children:["目前設定：",o,"班"]})]}),p.jsx("button",{onClick:()=>g(!m),className:`flex items-center px-4 py-2 rounded-md font-bold shadow-sm transition-all ${m?"bg-red-50 text-red-600 border border-red-200 hover:bg-red-100":"bg-blue-600 text-white hover:bg-blue-700"}`,children:m?p.jsxs(p.Fragment,{children:[p.jsx(Bg,{className:"w-5 h-5 mr-2"}),"儲存並鎖定"]}):p.jsxs(p.Fragment,{children:[p.jsx(fS,{className:"w-5 h-5 mr-2"}),"啟用編輯模式"]})})]}),!m&&p.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 rounded-r shadow-sm flex items-start",children:[p.jsx(Z1,{className:"w-5 h-5 text-yellow-500 mr-2 mt-0.5"}),p.jsxs("p",{className:"text-sm text-yellow-700",children:["目前為",p.jsx("strong",{children:"鎖定閱覽模式"}),"。如需修改配額、人員或非常規排班，請點擊右上角「啟用編輯模式」。"]})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"bg-white shadow rounded-lg p-6 relative overflow-hidden",children:[p.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${o==="A"?"bg-indigo-500":"bg-teal-500"}`}),p.jsxs("h2",{className:"text-lg font-bold text-gray-900 mb-4 flex items-center",children:[p.jsx(Gh,{className:`w-5 h-5 mr-2 ${Be}`}),"基本設定 (",o,"班)"]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between bg-slate-50 p-3 rounded-md",children:[p.jsx("button",{onClick:()=>_(-1),className:"p-1 hover:bg-slate-200 rounded",children:p.jsx(D1,{className:"w-5 h-5 text-slate-600"})}),p.jsxs("span",{className:"text-lg font-semibold text-slate-800",children:[s,"年 ",i+1,"月"]}),p.jsx("button",{onClick:()=>_(1),className:"p-1 hover:bg-slate-200 rounded",children:p.jsx(M1,{className:"w-5 h-5 text-slate-600"})})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"設定當月首日上班日"}),p.jsxs("div",{className:`grid grid-cols-2 gap-3 mb-4 ${fs}`,children:[p.jsxs("button",{onClick:()=>R(1),disabled:!m,className:`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${fe===1?`bg-blue-50 border-current ${Be}`:"bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[p.jsx("span",{className:"text-xl font-bold",children:"1號"}),p.jsx("span",{className:"text-xs mt-1 opacity-80",children:"基數日上班"})]}),p.jsxs("button",{onClick:()=>R(2),disabled:!m,className:`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${fe===2?`bg-blue-50 border-current ${Be}`:"bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[p.jsx("span",{className:"text-xl font-bold",children:"2號"}),p.jsx("span",{className:"text-xs mt-1 opacity-80",children:"偶數日上班"})]})]}),p.jsxs("div",{className:`pt-4 border-t border-gray-100 ${fs}`,children:[p.jsxs("h3",{className:"text-sm font-bold text-gray-700 mb-2 flex items-center",children:[p.jsx(j1,{className:"w-4 h-4 mr-1 text-orange-500"}),"非常規排班 (範圍設定)"]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-500",children:"起始日期"}),p.jsx("input",{type:"date",value:x,disabled:!m,onChange:K=>N(K.target.value),className:"block w-full text-xs rounded border-gray-300 p-1 border"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs text-gray-500",children:"結束日期"}),p.jsx("input",{type:"date",value:P,disabled:!m,onChange:K=>O(K.target.value),className:"block w-full text-xs rounded border-gray-300 p-1 border"})]})]}),p.jsxs("div",{className:"flex gap-1",children:[p.jsx("button",{onClick:()=>w("work"),disabled:!m,className:"flex-1 bg-green-50 text-green-700 text-xs py-1 px-2 rounded border border-green-200 hover:bg-green-100",children:"設為上班"}),p.jsx("button",{onClick:()=>w("rest"),disabled:!m,className:"flex-1 bg-slate-50 text-slate-700 text-xs py-1 px-2 rounded border border-slate-200 hover:bg-slate-100",children:"設為輪休"}),p.jsx("button",{onClick:()=>w("clear"),disabled:!m,className:"flex-1 bg-white text-red-500 text-xs py-1 px-2 rounded border border-red-200 hover:bg-red-50",children:"清除設定"})]}),p.jsx("p",{className:"text-[10px] text-gray-400 mt-2",children:"* 選取日期範圍，強制設定該區間為上班或輪休。此設定優先權高於上方常規循環。"})]})]})]})]}),p.jsxs("div",{className:"bg-white shadow rounded-lg p-6 relative overflow-hidden",children:[p.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${o==="A"?"bg-indigo-500":"bg-teal-500"}`}),p.jsx("div",{className:"flex items-center justify-between mb-4",children:p.jsxs("h2",{className:"text-lg font-bold text-gray-900 flex items-center",children:[p.jsx(vS,{className:`w-5 h-5 mr-2 ${Be}`}),o,"班人員 (",l.members.length,")"]})}),m&&l.members.length===0&&p.jsxs("button",{onClick:T,className:"w-full mb-3 inline-flex justify-center items-center px-3 py-2 border border-dashed border-slate-300 rounded-md text-sm font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors",children:[p.jsx(H1,{className:"w-4 h-4 mr-2"}),"從上月匯入 ",o," 班人員"]}),p.jsxs("div",{className:`flex space-x-2 mb-4 ${fs}`,children:[p.jsx("input",{type:"text",placeholder:"輸入姓名",value:h,disabled:!m,onChange:K=>f(K.target.value),onKeyDown:K=>K.key==="Enter"&&E(),className:`flex-1 rounded-md border-gray-300 shadow-sm focus:ring-opacity-50 border p-2 text-sm focus:ring ${Nt}`}),p.jsx("button",{onClick:E,disabled:!h.trim()||!m,className:`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white focus:outline-none disabled:opacity-50 transition-colors ${Ct}`,children:p.jsx(P0,{className:"w-4 h-4"})})]}),p.jsxs("div",{className:"max-h-[300px] overflow-y-auto space-y-2",children:[l.members.length===0&&p.jsxs("p",{className:"text-sm text-gray-400 text-center py-4",children:["暫無 ",o," 班人員資料"]}),l.members.map(K=>p.jsxs("div",{className:"flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100",children:[p.jsx("span",{className:"text-gray-800 font-medium",children:K}),p.jsx("button",{onClick:()=>k(K),disabled:!m,className:`text-gray-400 hover:text-red-500 transition-colors ${m?"":"invisible"}`,children:p.jsx(D0,{className:"w-4 h-4"})})]},K))]})]})]}),p.jsx("div",{className:"lg:col-span-2",children:p.jsxs("div",{className:"bg-white shadow rounded-lg p-6 h-full flex flex-col relative overflow-hidden",children:[p.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${o==="A"?"bg-indigo-500":"bg-teal-500"}`}),p.jsxs("div",{className:"flex justify-between items-center mb-4",children:[p.jsxs("h2",{className:"text-lg font-bold text-gray-900",children:[o,"班 - 可休人數配額設定"]}),m&&p.jsx("span",{className:"text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded border border-red-100 animate-pulse",children:"編輯中"})]}),l.firstWorkDay?p.jsxs("div",{className:`bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 ${fs}`,children:[p.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-3 flex items-center",children:[p.jsx(hS,{className:`w-4 h-4 mr-2 ${Be}`}),"批量配額設定"]}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-end sm:items-center",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"每日可休人數"}),p.jsx("input",{type:"number",min:"0",step:"0.5",disabled:!m,value:S,onChange:K=>I(K.target.value),className:`block w-full w-32 rounded-md border-gray-300 shadow-sm text-sm p-2 border focus:ring focus:ring-opacity-50 ${Nt}`,placeholder:"例如: 2"})]}),p.jsxs("div",{className:"flex gap-2 w-full sm:w-auto",children:[p.jsx("button",{onClick:q,disabled:!m,className:`flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition-colors ${Ct}`,children:"套用至本月上班日"}),p.jsxs("button",{onClick:()=>{window.confirm("確定要清除本月所有配額嗎？")&&F(0)},disabled:!m,className:"flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none transition-colors",children:[p.jsx(G1,{className:"w-4 h-4 mr-1"}),"清除"]})]})]})]}):p.jsx("div",{className:"bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded-md",children:p.jsxs("div",{className:"flex",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx(vf,{className:"h-5 w-5 text-amber-400","aria-hidden":"true"})}),p.jsx("div",{className:"ml-3",children:p.jsxs("p",{className:"text-sm text-amber-700",children:["請先在左側設定「",o,"班當月首日上班日」以啟用配額設定功能。"]})})]})}),p.jsx("div",{className:"flex-1 min-h-[500px]",children:p.jsxs("div",{className:"grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden h-full",children:[["日","一","二","三","四","五","六"].map(K=>p.jsx("div",{className:"bg-gray-100 py-2 text-center text-sm font-semibold text-gray-700",children:K},K)),ee.map((K,se)=>{const et=er(K,"yyyy-MM-dd"),dt=de(K),ft=l.dailyQuotas[et],cn=ft&&!Number.isInteger(ft);let Qt="bg-white",ps="";dt?m?(ps="cursor-pointer transition-colors",cn?Qt="bg-yellow-50 hover:bg-yellow-100":ft&&ft>0?Qt="bg-green-50 hover:bg-green-100":Qt="bg-white hover:bg-gray-50"):(ps="cursor-not-allowed",cn?Qt="bg-yellow-50":ft&&ft>0&&(Qt="bg-green-50")):Qt="bg-slate-100 cursor-not-allowed";const Zo=O0(K),qu=se===0?{gridColumnStart:Zo===0?7:Zo+1}:{};return p.jsxs("div",{style:qu,onClick:()=>{m&&l.firstWorkDay&&dt&&H(et,ft||0)},className:`${Qt} ${ps} p-2 relative flex flex-col justify-between select-none min-h-[80px]`,children:[p.jsx("span",{className:`text-sm ${dt?"text-gray-900 font-medium":"text-gray-400"}`,children:er(K,"d")}),dt?p.jsx("div",{className:"flex-1 flex flex-col items-center justify-center",children:ft?p.jsx("span",{className:`text-xl font-bold ${cn?"text-yellow-600":"text-green-600"}`,children:ft}):p.jsx("span",{className:"text-xs text-gray-300",children:m?"設定":"未設定"})}):p.jsx("div",{className:"flex-1 flex items-center justify-center",children:p.jsx("span",{className:"text-4xl font-black text-slate-300 opacity-50",children:"休"})})]},et)})]})})]})})]}),A&&p.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:p.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[p.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>D(null)}),p.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),p.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full",children:[p.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:p.jsx("div",{className:"sm:flex sm:items-start",children:p.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:text-left w-full",children:[p.jsxs("h3",{className:"text-lg leading-6 font-medium text-gray-900 mb-4",id:"modal-title",children:["設定配額 (",o,"班) - ",A]}),p.jsx("div",{className:"space-y-4",children:p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"可休人數"}),p.jsx("input",{type:"number",step:"0.5",min:"0",autoFocus:!0,value:V,onChange:K=>L(K.target.value),onKeyDown:K=>K.key==="Enter"&&re(),className:`shadow-sm block w-full sm:text-lg border-gray-300 rounded-md p-3 border focus:ring focus:ring-opacity-50 ${Nt}`,placeholder:"請輸入數字"}),p.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["* 輸入 0 或留空代表清除配額。",p.jsx("br",{}),"* 整數：可排所有假別。",p.jsx("br",{}),"* 非整數(如0.5)：通常用於表示特殊假別，例如外宿配額。"]})]})})]})})}),p.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[p.jsxs("button",{type:"button",onClick:re,className:`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors ${Ct}`,children:[p.jsx(Bg,{className:"w-4 h-4 mr-2"}),"儲存"]}),p.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors",onClick:()=>D(null),children:"取消"})]})]})]})})]})},II=["特","補","休","消","身","事","陪","公","病"],Hb=["宿"],Kb=[...II,...Hb],Ua={特:1,補:1,休:1,消:1,身:1,事:1,陪:1,公:1,病:1,宿:.5},Jc=(t,e)=>({monthKey:t,group:e,firstWorkDay:"",members:[],dailyQuotas:{},shiftExceptions:{},schemaVersion:2}),Gb=t=>{const[e,n]=t.split("-").map(Number);return{year:e,month0:(n||1)-1}},Qb=({settings:t,entries:e,currentMonthKey:n,onSaveEntry:r,onDeleteEntry:s})=>{const{year:i,month0:o}=Gb(n),l=t.group,[u,h]=X.useState(""),[f,m]=X.useState(null),[g,x]=X.useState(""),N=t.firstWorkDay&&t.members.length>0,P=l==="A"?"bg-indigo-600 hover:bg-indigo-700":"bg-teal-600 hover:bg-teal-700";X.useEffect(()=>{h("")},[l,n]);const O=()=>{navigator.clipboard.writeText(window.location.href),alert("連結已複製！")},S=w=>L0(w,t.firstWorkDay,t.shiftExceptions),I=w=>t.dailyQuotas[w]??0,A=w=>{const de=e.filter(ge=>ge.memberName===w);return de.length===0?1:Math.max(...de.map(ge=>ge.order))+1},D=w=>e.filter(de=>de.date===w&&t.members.includes(de.memberName)).reduce((de,ge)=>de+Ua[ge.category],0),V=()=>{if(!f||!u||!g)return;const w=I(f),de=D(f),ge=Ua[g];if(de+ge>w){alert(`已超過當日配額（${de}/${w}），無法新增。`);return}if(e.some(q=>q.memberName===u&&q.date===f&&q.category===g)){alert(`你在 ${f} 已有相同假別。`);return}const ee=A(u);r({date:f,memberName:u,category:g,order:ee,group:l,monthKey:n}),x(""),m(null)},L=Yh(new Date(i,o)),v=M0(L),_=Xh({start:L,end:v}),E=f?I(f):0,T=f?D(f):0,k=E-T,R=Kb.filter(w=>Ua[w]<=k);return N?p.jsxs("div",{className:"max-w-7xl mx-auto py-2 sm:py-8 px-2 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4",children:[p.jsxs("div",{children:[p.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 flex items-center",children:[p.jsxs("span",{className:`mr-2 px-2 py-0.5 rounded text-white text-base ${l==="A"?"bg-indigo-500":"bg-teal-500"}`,children:[l,"班"]}),i,"年 ",o+1,"月 假表填寫"]}),p.jsx("p",{className:"text-base sm:text-sm text-gray-500 mt-1",children:"請選擇您的姓名，點擊上班日期進行填寫。選好假別後按「確定新增」儲存。"})]}),p.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full md:w-auto",children:p.jsxs("button",{onClick:O,className:"flex-1 md:flex-none justify-center inline-flex items-center px-3 py-3 sm:py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",children:[p.jsx(lS,{className:"w-4 h-4 mr-2"}),"分享"]})})]}),p.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-lg shadow mb-4 flex items-center space-x-2 sm:space-x-4 sticky top-16 z-40 border-b border-gray-100",children:[p.jsx("label",{className:"text-base sm:text-sm font-bold text-gray-700 whitespace-nowrap",children:"我是："}),p.jsxs("select",{value:u,onChange:w=>h(w.target.value),className:`block w-full max-w-xs rounded-md border-gray-300 border p-2 text-base sm:text-sm shadow-sm focus:ring focus:ring-opacity-50 ${l==="A"?"focus:border-indigo-500 focus:ring-indigo-500":"focus:border-teal-500 focus:ring-teal-500"}`,children:[p.jsx("option",{value:"",children:"-- 請選擇姓名 --"}),t.members.map(w=>p.jsx("option",{value:w,children:w},w))]}),!u&&p.jsx("span",{className:"text-sm text-red-500 animate-pulse font-medium",children:"請先選擇姓名"})]}),p.jsx("div",{className:"bg-white shadow rounded-lg overflow-hidden flex flex-col",children:p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("div",{className:"min-w-[900px]",children:[p.jsx("div",{className:"grid grid-cols-7 gap-px bg-gray-200 border-b border-gray-200",children:V0.map(w=>p.jsx("div",{className:"bg-gray-50 py-2 sm:py-3 text-center text-sm font-bold text-gray-700",children:w},w))}),p.jsx("div",{className:"grid grid-cols-7 gap-px bg-gray-200",children:_.map((w,de)=>{const ge=er(w,"yyyy-MM-dd"),W=S(ge),ee=I(ge),F=D(ge),q=ee>0&&F>ee,H=e.filter(Q=>Q.date===ge&&t.members.includes(Q.memberName)).sort((Q,fe)=>Q.order-fe.order),re=de===0?{gridColumnStart:O0(w)+1}:{};return p.jsxs("div",{style:re,className:`min-h-[50px] sm:min-h-[60px] md:min-h-[120px] bg-white relative flex flex-col ${W?"":"bg-slate-50"}`,children:[p.jsxs("div",{className:"flex justify-between items-start p-1 sm:p-2",children:[p.jsx("span",{className:`text-base sm:text-sm font-medium ${W?"text-gray-900":"text-gray-400"}`,children:er(w,"d")}),W&&ee>0&&p.jsxs("div",{className:`flex items-center text-xs px-1 py-0.5 sm:px-1.5 rounded-full ${q?"bg-red-100 text-red-700 font-bold":"bg-green-100 text-green-700"}`,children:[F,"/",ee,q&&p.jsx(Ug,{className:"w-3 h-3 ml-0.5"})]})]}),W?p.jsxs("div",{className:"flex-1 px-0.5 pb-0.5 sm:px-2 sm:pb-2 flex flex-col gap-1",children:[H.map(Q=>{const fe=u===Q.memberName;return p.jsxs("div",{className:`flex justify-between items-center px-1 py-0.5 sm:px-2 sm:py-1.5 rounded border group
                                ${fe?"bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-300 z-10":"bg-blue-50 text-blue-700 border-blue-100"}`,children:[p.jsxs("span",{className:"truncate text-xs leading-tight flex-1 flex items-center justify-between pr-1",children:[p.jsx("span",{className:"font-semibold",children:Q.memberName}),p.jsxs("span",{className:"font-black ml-2 shrink-0",children:[Q.category,Q.order]})]}),fe&&p.jsx("button",{onClick:Be=>{Be.stopPropagation(),s(Q.memberName,Q.date,Q.order)},className:"text-gray-400 hover:text-red-600 ml-1 flex-shrink-0",children:p.jsx(wf,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})})]},`${Q.memberName}_${Q.date}_${Q.order}`)}),u&&ee>0&&F<ee&&p.jsx("button",{onClick:()=>{m(ge),x("")},className:`mt-auto w-full flex justify-center items-center py-1 border-2 border-dashed border-gray-200 rounded text-gray-400 transition-colors text-xs h-6 sm:h-auto ${l==="A"?"hover:border-indigo-500 hover:text-indigo-500":"hover:border-teal-500 hover:text-teal-500"}`,children:p.jsx(P0,{className:"w-3 h-3"})})]}):p.jsx("div",{className:"flex-1 flex items-center justify-center",children:p.jsx("span",{className:"text-4xl sm:text-2xl md:text-5xl font-black text-slate-200 select-none",children:"O"})})]},ge)})})]})})}),f&&p.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:p.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[p.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>m(null)}),p.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),p.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[p.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:p.jsx("div",{className:"sm:flex sm:items-start",children:p.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",children:[p.jsxs("h3",{className:"text-xl leading-6 font-medium text-gray-900 mb-4",id:"modal-title",children:["新增假單 - ",f," (",l,"班)"]}),p.jsxs("div",{className:"mb-4 text-base text-gray-500",children:[p.jsxs("p",{children:["填寫人：",p.jsx("span",{className:"font-bold text-gray-900",children:u})]}),p.jsxs("p",{children:["當日配額：",E,"　已用：",T,"　剩餘：",k]}),p.jsxs("p",{className:"text-xs mt-1 text-gray-400",children:["本月第 ",A(u)," 順位"]})]}),p.jsx("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"全天假別（佔 1）"}),p.jsx("div",{className:"grid grid-cols-5 gap-2 mb-3",children:II.filter(w=>Ua[w]<=k).map(w=>p.jsx("button",{onClick:()=>x(w),className:`p-3 text-base rounded border ${g===w?`${P} text-white border-transparent`:"bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`,children:w},w))}),k>=.5&&p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"半天假別（佔 0.5）"}),p.jsx("div",{className:"grid grid-cols-5 gap-2",children:p.jsx("button",{onClick:()=>x("宿"),className:`p-3 text-base rounded border ${g==="宿"?`${P} text-white border-transparent`:"bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`,children:"宿"})})]}),R.length===0&&p.jsx("p",{className:"text-sm text-red-500 mt-2",children:"配額已滿，無可用假別。"})]})})}),p.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2 sm:gap-0",children:[p.jsx("button",{type:"button",disabled:!g,className:`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 text-base font-medium text-white focus:outline-none disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm transition-colors ${P}`,onClick:V,children:"確定新增"}),p.jsx("button",{type:"button",className:"mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>m(null),children:"取消"})]})]})]})})]}):p.jsxs("div",{className:"flex flex-col items-center justify-center h-[60vh] text-center px-4",children:[p.jsx(Ug,{className:"w-16 h-16 text-warning mb-4"}),p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:[l,"班 設定尚未完成"]}),p.jsxs("p",{className:"text-gray-600 max-w-md",children:["請先返回「配額設定」頁面，設定「",l,"班當月首日上班日」並新增「團隊人員」，才能開始填寫假表。"]})]})},Np="audit_logs_root",Pp="audit_logs",TI=60*24*60*60*1e3,Yb=(t,e,n,r,s)=>{const i=`${n}班 ${r}`;switch(t){case"ADD_LEAVE":return`${i} 新增假單 ${e.memberName??""} ${e.date??""}${s?" "+s:""}`;case"REMOVE_LEAVE":return`${i} 刪除假單 ${e.memberName??""} ${e.date??""}`;case"UPDATE_QUOTA":return`${i} 更新配額${e.date?` (${e.date})`:"（批量）"}`;case"UPDATE_MEMBERS":return`${i} 更新人員名單${s?` — ${s}`:""}`;case"UPDATE_FIRST_WORK_DAY":return`${i} 更新首日上班日${s?` → ${s}`:""}`;case"UPDATE_SHIFT_EXCEPTION":return`${i} 更新例外排班`;case"IMPORT_MEMBERS":return`${i} 從上月匯入人員${s?` (${s} 位)`:""}`;default:return`${i} 未知動作`}},Zc=async t=>{var r;if(!Wr()||!ke||!((r=t.user)!=null&&r.email))return;const e=Date.now(),n={timestamp:e,expireAt:je.fromMillis(e+TI),userEmail:t.user.email,userDisplayName:t.user.displayName??t.user.email,group:t.group,monthKey:t.monthKey,action:t.action,target:t.target??{},before:t.before??null,after:t.after??null,summary:Yb(t.action,t.target??{},t.group,t.monthKey,t.extra)};try{const s=bu(ke,rn,Np,Pp);await uN(s,n)}catch(s){console.error("writeAuditLog failed:",s)}},p_=(t,e)=>{const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!0;for(const s of n)if(t[s]!==e[s])return!0;return!1},Xb=(t,e)=>{const n=[];t.firstWorkDay!==e.firstWorkDay&&n.push({action:"UPDATE_FIRST_WORK_DAY",extra:e.firstWorkDay||"(清除)",before:t.firstWorkDay,after:e.firstWorkDay});const r=t.members.join(","),s=e.members.join(",");return r!==s&&n.push({action:"UPDATE_MEMBERS",extra:`${t.members.length} → ${e.members.length} 人`,before:t.members,after:e.members}),p_(t.dailyQuotas,e.dailyQuotas)&&n.push({action:"UPDATE_QUOTA",before:t.dailyQuotas,after:e.dailyQuotas}),p_(t.shiftExceptions,e.shiftExceptions)&&n.push({action:"UPDATE_SHIFT_EXCEPTION",before:t.shiftExceptions,after:e.shiftExceptions}),n},Jb=(t,e,n)=>{if(!Wr()||!ke)return()=>{};const r=bu(ke,rn,Np,Pp),s=fE(r,nN("timestamp","desc"),rN(t));return dp(s,i=>{const o=[];i.forEach(l=>o.push({id:l.id,...l.data()})),e(o)},i=>{console.error("subscribeAuditLogs error:",i),n(i)})},Zb=async()=>{if(!(!Wr()||!ke))try{const t=Date.now()-TI,e=bu(ke,rn,Np,Pp),n=fE(e,tN("timestamp","<",t)),r=await aN(n);if(r.empty)return;const s=r.docs;for(let i=0;i<s.length;i+=500){const o=vE(ke);s.slice(i,i+500).forEach(l=>o.delete(l.ref)),await o.commit()}console.log(`deleteExpiredAuditLogs: removed ${s.length} expired entries`)}catch(t){console.error("deleteExpiredAuditLogs failed:",t)}},m_={ADD_LEAVE:"新增假單",REMOVE_LEAVE:"刪除假單",UPDATE_QUOTA:"更新配額",UPDATE_MEMBERS:"更新人員",UPDATE_FIRST_WORK_DAY:"更新首日上班日",UPDATE_SHIFT_EXCEPTION:"更新例外排班",IMPORT_MEMBERS:"匯入人員"},eD={ADD_LEAVE:"bg-green-50 text-green-700 border-green-200",REMOVE_LEAVE:"bg-red-50 text-red-700 border-red-200",UPDATE_QUOTA:"bg-blue-50 text-blue-700 border-blue-200",UPDATE_MEMBERS:"bg-purple-50 text-purple-700 border-purple-200",UPDATE_FIRST_WORK_DAY:"bg-amber-50 text-amber-700 border-amber-200",UPDATE_SHIFT_EXCEPTION:"bg-orange-50 text-orange-700 border-orange-200",IMPORT_MEMBERS:"bg-teal-50 text-teal-700 border-teal-200"},tD=t=>{const e=new Date(t),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${n}-${r}-${s} ${i}:${o}`},nD=()=>{const[t,e]=X.useState([]),[n,r]=X.useState(!0),[s,i]=X.useState(null),[o,l]=X.useState("ALL"),[u,h]=X.useState("ALL"),[f,m]=X.useState("ALL"),[g,x]=X.useState("ALL"),[N,P]=X.useState(new Set);X.useEffect(()=>{r(!0);const V=Jb(100,L=>{e(L),r(!1)},L=>{i(L.message),r(!1)});return()=>V()},[]);const{monthOptions:O,userOptions:S}=X.useMemo(()=>{const V=new Set,L=new Set;return t.forEach(v=>{V.add(v.monthKey),L.add(v.userDisplayName)}),{monthOptions:Array.from(V).sort().reverse(),userOptions:Array.from(L).sort()}},[t]),I=t.filter(V=>!(o!=="ALL"&&V.group!==o||u!=="ALL"&&V.action!==u||f!=="ALL"&&V.monthKey!==f||g!=="ALL"&&V.userDisplayName!==g)),A=V=>{P(L=>{const v=new Set(L);return v.has(V)?v.delete(V):v.add(V),v})},D=()=>{l("ALL"),h("ALL"),m("ALL"),x("ALL")};return p.jsxs("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center",children:[p.jsx(Qh,{className:"w-6 h-6 mr-2 text-primary"}),"變更歷史紀錄"]}),p.jsx("span",{className:"text-sm text-gray-500",children:"最近 100 筆，保留 60 天"})]}),p.jsxs("div",{className:"bg-white shadow rounded-lg p-4 mb-4 grid grid-cols-2 sm:grid-cols-4 gap-3",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-gray-500 mb-1",children:"班別"}),p.jsxs("select",{value:o,onChange:V=>l(V.target.value),className:"block w-full text-sm rounded border-gray-300 p-2 border",children:[p.jsx("option",{value:"ALL",children:"全部"}),p.jsx("option",{value:"A",children:"A 班"}),p.jsx("option",{value:"B",children:"B 班"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-gray-500 mb-1",children:"動作類型"}),p.jsxs("select",{value:u,onChange:V=>h(V.target.value),className:"block w-full text-sm rounded border-gray-300 p-2 border",children:[p.jsx("option",{value:"ALL",children:"全部"}),Object.entries(m_).map(([V,L])=>p.jsx("option",{value:V,children:L},V))]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-gray-500 mb-1",children:"月份"}),p.jsxs("select",{value:f,onChange:V=>m(V.target.value),className:"block w-full text-sm rounded border-gray-300 p-2 border",children:[p.jsx("option",{value:"ALL",children:"全部"}),O.map(V=>p.jsx("option",{value:V,children:V},V))]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-gray-500 mb-1",children:"操作者"}),p.jsxs("select",{value:g,onChange:V=>x(V.target.value),className:"block w-full text-sm rounded border-gray-300 p-2 border",children:[p.jsx("option",{value:"ALL",children:"全部"}),S.map(V=>p.jsx("option",{value:V,children:V},V))]})]}),p.jsx("div",{className:"col-span-2 sm:col-span-4 flex justify-end",children:p.jsxs("button",{onClick:D,className:"inline-flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50",children:[p.jsx(_f,{className:"w-3 h-3 mr-1"}),"清除篩選"]})})]}),n?p.jsx("div",{className:"flex justify-center py-10",children:p.jsx("div",{className:"animate-spin h-8 w-8 border-b-2 border-primary rounded-full"})}):s?p.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-700 p-4 rounded",children:["載入失敗：",s]}):I.length===0?p.jsx("div",{className:"bg-white shadow rounded-lg p-8 text-center text-gray-500",children:t.length===0?"目前還沒有任何紀錄":"沒有符合篩選條件的紀錄"}):p.jsx("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:p.jsx("ul",{className:"divide-y divide-gray-100",children:I.map(V=>{const L=V.id??`${V.timestamp}_${V.userEmail}`,v=N.has(L);return p.jsxs("li",{children:[p.jsxs("button",{onClick:()=>A(L),className:"w-full text-left p-4 hover:bg-slate-50 transition-colors flex items-start gap-3",children:[p.jsx("div",{className:"mt-1",children:v?p.jsx($1,{className:"w-4 h-4 text-gray-400"}):p.jsx(z1,{className:"w-4 h-4 text-gray-400"})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[p.jsx("span",{className:`text-xs font-medium px-2 py-0.5 rounded border ${eD[V.action]}`,children:m_[V.action]}),p.jsxs("span",{className:`text-xs font-bold px-2 py-0.5 rounded ${V.group==="A"?"bg-indigo-100 text-indigo-700":"bg-teal-100 text-teal-700"}`,children:[V.group," 班"]}),p.jsx("span",{className:"text-xs text-gray-500",children:V.monthKey}),p.jsx("span",{className:"text-xs text-gray-400 ml-auto",children:tD(V.timestamp)})]}),p.jsx("p",{className:"text-sm text-gray-800 break-words",children:V.summary}),p.jsxs("p",{className:"text-xs text-gray-500 mt-0.5",children:["by ",p.jsx("span",{className:"font-medium",children:V.userDisplayName})," (",V.userEmail,")"]})]})]}),v&&p.jsx("div",{className:"px-4 pb-4 pt-0 bg-slate-50 border-t border-slate-100",children:p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-xs font-bold text-gray-500 mb-1",children:"變更前 (before)"}),p.jsx("pre",{className:"text-xs bg-white border border-gray-200 rounded p-2 overflow-auto max-h-60",children:JSON.stringify(V.before,null,2)})]}),p.jsxs("div",{children:[p.jsx("p",{className:"text-xs font-bold text-gray-500 mb-1",children:"變更後 (after)"}),p.jsx("pre",{className:"text-xs bg-white border border-gray-200 rounded p-2 overflow-auto max-h-60",children:JSON.stringify(V.after,null,2)})]})]})})]},L)})})})]})},rD=({onLogin:t,loading:e,onShowDebug:n})=>{const[r,s]=X.useState(!1),[i,o]=X.useState(!1);X.useEffect(()=>{const u=navigator.userAgent||navigator.vendor||window.opera;s(/FBAN|FBAV|Line\/|Instagram|MicroMessenger/i.test(u)),o(/Line\//i.test(u))},[]);const l=()=>{if(window.location.search.includes("openExternalBrowser=1"))return;const u=new URL(window.location.href);u.searchParams.set("openExternalBrowser","1"),window.location.href=u.toString()};return p.jsx("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative",children:p.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200",children:[p.jsxs("div",{className:"bg-primary p-8 text-center relative overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-blue-600 opacity-20 pattern-dots"}),p.jsxs("div",{className:"relative z-10",children:[p.jsx("div",{className:"mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner",children:p.jsx(b0,{className:"w-10 h-10 text-white"})}),p.jsx("h1",{className:"text-2xl font-bold text-white tracking-wide shadow-black drop-shadow-sm",children:"龍岡分隊假表管理"}),p.jsx("p",{className:"text-blue-100 mt-2 text-sm font-medium",children:"請登入以存取編輯權限"})]})]}),p.jsxs("div",{className:"p-8",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-2",children:"歡迎回來"}),p.jsxs("p",{className:"text-slate-500 text-sm leading-relaxed",children:["為了確保資料安全與編輯歷程，",p.jsx("br",{}),"本系統採用 Google 帳號進行身分驗證。"]})]}),r&&p.jsx("div",{className:"mb-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded shadow-sm text-left",children:p.jsxs("div",{className:"flex",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx(vf,{className:"h-5 w-5 text-amber-400"})}),p.jsxs("div",{className:"ml-3",children:[p.jsx("h3",{className:"text-sm font-bold text-amber-800",children:"偵測到應用程式內瀏覽器"}),p.jsxs("div",{className:"mt-2 text-sm text-amber-700",children:[p.jsx("p",{className:"mb-2",children:"Google 安全性政策不允許在 Line、Facebook 等應用程式內建瀏覽器登入 (錯誤 403)。"}),p.jsx("p",{className:"font-bold mb-1",children:"解決方法："}),i&&p.jsxs("button",{onClick:l,className:"mb-2 w-full text-center px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center",children:[p.jsx(Y1,{className:"w-3 h-3 mr-1"}),"點此嘗試自動切換至瀏覽器"]}),p.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-1 text-xs sm:text-sm",children:[p.jsxs("li",{children:["點擊畫面角落的選單圖示 (通常是 ",p.jsx("span",{className:"font-bold",children:"⋮"})," 或 ",p.jsx("span",{className:"font-bold",children:"⋯"}),")"]}),p.jsxs("li",{children:["選擇 ",p.jsx("span",{className:"font-bold",children:"「在預設瀏覽器中開啟」"})," 或 ",p.jsx("span",{className:"font-bold",children:"「以 Safari/Chrome 開啟」"})]})]})]})]})]})}),p.jsx("button",{onClick:t,disabled:e||r,className:"w-full group relative flex items-center justify-center px-4 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100",children:e?p.jsxs("span",{className:"flex items-center",children:[p.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"登入中..."]}):p.jsxs("span",{className:"flex items-center",children:[p.jsx("svg",{className:"w-5 h-5 mr-3",viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:p.jsxs("g",{transform:"matrix(1, 0, 0, 1, 27.009001, -39.23856)",children:[p.jsx("path",{fill:"#4285F4",d:"M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"}),p.jsx("path",{fill:"#34A853",d:"M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.424 63.239 -14.754 63.239 Z"}),p.jsx("path",{fill:"#FBBC05",d:"M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"}),p.jsx("path",{fill:"#EA4335",d:"M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.424 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"})]})}),r?"請先切換至瀏覽器":"使用 Google 帳號登入"]})})]}),p.jsxs("div",{className:"bg-gray-50 p-4 text-center border-t border-gray-100 flex flex-col items-center w-full",children:[p.jsx("p",{className:"text-xs text-slate-400 mb-2",children:"© 龍岡分隊假表管理 | Secure Access"}),n&&p.jsxs("button",{onClick:n,className:"mt-1 text-[10px] text-slate-300 hover:text-slate-500 flex items-center",children:[p.jsx(N0,{className:"w-3 h-3 mr-1"})," Debug Info"]})]})]})})},eh=({isVisible:t,onClose:e})=>{const[n,r]=X.useState([]),s=()=>{r(Cb())};return X.useEffect(()=>{if(t){s();const i=setInterval(s,1e3);return()=>clearInterval(i)}},[t]),t?p.jsxs("div",{className:"fixed inset-x-0 bottom-0 h-[50vh] bg-black/90 text-green-400 z-[10000] flex flex-col font-mono text-xs border-t-2 border-green-600 shadow-2xl",children:[p.jsxs("div",{className:"flex justify-between items-center p-2 bg-gray-900 border-b border-gray-700",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(N0,{className:"w-4 h-4"}),p.jsx("span",{className:"font-bold",children:"System Logs"})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:s,className:"p-1 hover:bg-gray-700 rounded text-blue-400",children:p.jsx(_f,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>{Nb(),s()},className:"p-1 hover:bg-gray-700 rounded text-red-400",children:p.jsx(D0,{className:"w-4 h-4"})}),p.jsx("button",{onClick:e,className:"p-1 hover:bg-gray-700 rounded text-gray-400",children:p.jsx(wf,{className:"w-4 h-4"})})]})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-2 space-y-1",children:[n.length===0&&p.jsx("div",{className:"text-gray-500 italic",children:"No logs recorded."}),n.map((i,o)=>p.jsxs("div",{className:"border-b border-gray-800 pb-1 break-words",children:[p.jsxs("span",{className:"text-gray-500 mr-2",children:["[",i.timestamp,"]"]}),p.jsx("span",{className:i.type==="error"?"text-red-400 font-bold":i.type==="success"?"text-green-300 font-bold":i.type==="warn"?"text-yellow-400":"text-gray-300",children:i.message})]},o))]})]}):null};class sD extends A_.Component{constructor(){super(...arguments);ga(this,"state",{hasError:!1,error:null});ga(this,"handleReset",()=>{this.setState({hasError:!1,error:null})});ga(this,"handleReload",()=>{window.location.reload()})}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,r){ye(`[ErrorBoundary] ${n.message}`,"error"),console.error("ErrorBoundary caught:",n,r)}render(){var n;return this.state.hasError?p.jsxs("div",{className:"min-h-[60vh] flex flex-col items-center justify-center px-4 text-center",children:[p.jsx(vf,{className:"w-16 h-16 text-red-500 mb-4"}),p.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"發生錯誤"}),p.jsx("p",{className:"text-gray-600 max-w-md mb-4",children:"畫面載入時發生問題，您可以嘗試重新整理頁面。"}),p.jsx("pre",{className:"bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded max-w-xl overflow-auto mb-4",children:((n=this.state.error)==null?void 0:n.message)||"未知錯誤"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:this.handleReset,className:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50",children:"嘗試恢復"}),p.jsxs("button",{onClick:this.handleReload,className:"inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:opacity-90",children:[p.jsx(_f,{className:"w-4 h-4 mr-2"}),"重新整理"]}),this.props.onShowDebug&&p.jsx("button",{onClick:this.props.onShowDebug,className:"inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800",children:"顯示除錯日誌"})]})]}):this.props.children}}const iD=()=>{const[t,e]=X.useState("filling"),[n,r]=X.useState("A"),s=new Date,i=(()=>{const W=new Date(s.getFullYear(),s.getMonth(),1);return s.getDate()>15&&W.setMonth(W.getMonth()+1),Ef(W.getFullYear(),W.getMonth())})(),[o,l]=X.useState(i),[u,h]=X.useState(Jc(o,n)),[f,m]=X.useState([]),[g,x]=X.useState(null),[N,P]=X.useState(!0),[O,S]=X.useState(!1),[I,A]=X.useState(!0),[D,V]=X.useState(!1),[L,v]=X.useState(!1),_=X.useRef(!1);X.useEffect(()=>{V(Wr()),ye("App Mounted. Firebase Enabled: "+Wr())},[]);const E=W=>{console.error("Auth Error:",W);let ee="登入失敗，請重試。";W.code==="auth/popup-closed-by-user"?ee="登入視窗已被關閉。":W.code==="auth/unauthorized-domain"?ee=`網域未授權 (${window.location.hostname})。`:W.message&&(ee=W.message),alert(ee)};X.useEffect(()=>{let W=!0,ee;if(!Wr()||!wn){P(!1);return}ee=setTimeout(()=>{W&&N&&(ye("Safety Timer Triggered (8s). Clearing loading state.","error"),P(!1),os())},8e3);const F=async()=>{if(Id())try{await Ob()||(ye("initAuth: Redirect checked but no user found. Stopping loading.","warn"),W&&P(!1))}catch{ye("initAuth: Redirect check error.","error"),W&&P(!1)}},q=wn.onAuthStateChanged(H=>{W&&(H?(ye(`Auth User: ${H.email}`,"success"),x(H),P(!1),clearTimeout(ee),os(),Zb()):(ye("Auth: No user session found."),x(null),Id()||P(!1)))});return F(),()=>{W=!1,clearTimeout(ee),q()}},[]),X.useEffect(()=>{if(h(Jc(o,n)),m([]),!Wr()||!g){A(!1);return}A(!0);let W=!1,ee=!1;const F=()=>{W&&ee&&A(!1)},q=jb(o,n,re=>{_.current=!0,h(re||Jc(o,n)),_.current=!1,W=!0,F()},re=>{ye(`Settings sync error: ${re.message}`,"error"),W=!0,F()}),H=Fb(o,n,re=>{m(re),ee=!0,F()},re=>{ye(`Entries sync error: ${re.message}`,"error"),ee=!0,F()});return()=>{q(),H()}},[g,o,n]);const T=async()=>{S(!0);try{await Mb()}catch(W){S(!1),E(W)}},k=async()=>{window.confirm("確定要登出嗎？")&&(await Lb(),A(!0))},R=async W=>{const ee=u;if(h(W),D&&!_.current&&g)try{await Ub(W,g.email);const F=Xb(ee,W);for(const q of F)await Zc({user:{email:g.email,displayName:g.displayName},group:W.group,monthKey:W.monthKey,action:q.action,target:{},before:q.before,after:q.after,extra:q.extra})}catch(F){ye(`saveMonthSettings failed: ${F.message}`,"error"),alert("同步失敗，請稍後重試")}},w=async W=>{if(m(ee=>[...ee,W]),D&&g)try{await $b(W,g.email),await Zc({user:{email:g.email,displayName:g.displayName},group:W.group,monthKey:W.monthKey,action:"ADD_LEAVE",target:{date:W.date,memberName:W.memberName},before:null,after:W,extra:`${W.category}${W.order}`})}catch(ee){ye(`saveLeaveEntry failed: ${ee.message}`,"error"),alert("儲存假單失敗")}},de=async(W,ee,F)=>{const q=f.find(H=>H.memberName===W&&H.date===ee&&H.order===F);if(m(H=>H.filter(Q=>!(Q.memberName===W&&Q.date===ee&&Q.order===F)).map(Q=>Q.memberName===W&&Q.order>F?{...Q,order:Q.order-1}:Q)),D&&g)try{const H=f.filter(re=>re.memberName===W);await Bb(o,n,W,ee,F,H,g.email),await Zc({user:{email:g.email,displayName:g.displayName},group:n,monthKey:o,action:"REMOVE_LEAVE",target:{date:ee,memberName:W},before:q??null,after:null})}catch(H){ye(`deleteLeaveEntry failed: ${H.message}`,"error"),alert("刪除假單失敗")}},ge=W=>{l(W)};return N?p.jsxs("div",{className:"flex items-center justify-center h-screen bg-slate-50 flex-col gap-4 fixed inset-0 z-[9999]",children:[p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-primary"}),p.jsx("div",{className:"text-slate-600 font-medium text-sm animate-pulse",children:"系統載入中..."}),p.jsx("div",{className:"fixed bottom-0 left-0 w-full h-10 opacity-0 z-50",onClick:()=>v(W=>!W)}),p.jsx(eh,{isVisible:L,onClose:()=>v(!1)})]}):D&&!g?p.jsxs(p.Fragment,{children:[p.jsx(rD,{onLogin:T,loading:O,onShowDebug:()=>v(!0)}),p.jsx(eh,{isVisible:L,onClose:()=>v(!1)})]}):p.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans",children:[p.jsx(ES,{currentPage:t,onNavigate:e,isFirebaseConnected:D,user:g,onLogout:k,currentGroup:n,onGroupChange:r}),p.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8",children:[!D&&p.jsx("div",{className:"mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r shadow-sm",children:p.jsxs("p",{className:"text-sm text-yellow-700",children:["目前使用 ",p.jsx("strong",{children:"本機模式"}),"。"]})}),p.jsx(sD,{onShowDebug:()=>v(!0),children:t==="history"?p.jsx(nD,{}):I?p.jsx("div",{className:"flex justify-center py-10",children:p.jsx("div",{className:"animate-spin h-8 w-8 border-b-2 border-primary rounded-full"})}):p.jsxs(p.Fragment,{children:[t==="settings"&&p.jsx(Wb,{settings:u,currentMonthKey:o,onSaveSettings:R,onChangeMonth:ge}),t==="filling"&&p.jsx(Qb,{settings:u,entries:f,currentMonthKey:o,onSaveEntry:w,onDeleteEntry:de})]})})]}),p.jsx(eh,{isVisible:L,onClose:()=>v(!1)})]})},xI=document.getElementById("root");if(!xI)throw new Error("Could not find root element to mount to");const oD=th.createRoot(xI);oD.render(p.jsx(A_.StrictMode,{children:p.jsx(iD,{})}));
