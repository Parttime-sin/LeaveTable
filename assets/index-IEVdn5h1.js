var BI=Object.defineProperty;var zI=(t,e,n)=>e in t?BI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ma=(t,e,n)=>zI(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function qI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ev={exports:{}},Xl={},tv={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),WI=Symbol.for("react.portal"),HI=Symbol.for("react.fragment"),KI=Symbol.for("react.strict_mode"),GI=Symbol.for("react.profiler"),QI=Symbol.for("react.provider"),YI=Symbol.for("react.context"),XI=Symbol.for("react.forward_ref"),JI=Symbol.for("react.suspense"),ZI=Symbol.for("react.memo"),eT=Symbol.for("react.lazy"),pm=Symbol.iterator;function tT(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rv=Object.assign,sv={};function oi(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||nv}oi.prototype.isReactComponent={};oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iv(){}iv.prototype=oi.prototype;function cd(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||nv}var hd=cd.prototype=new iv;hd.constructor=cd;rv(hd,oi.prototype);hd.isPureReactComponent=!0;var mm=Array.isArray,ov=Object.prototype.hasOwnProperty,dd={current:null},av={key:!0,ref:!0,__self:!0,__source:!0};function lv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)ov.call(e,r)&&!av.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Lo,type:t,key:i,ref:o,props:s,_owner:dd.current}}function nT(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function rT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gm=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rT(""+t.key):e.toString(36)}function Fa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lo:case WI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ju(o,0):r,mm(s)?(n="",t!=null&&(n=t.replace(gm,"$&/")+"/"),Fa(s,e,n,"",function(h){return h})):s!=null&&(fd(s)&&(s=nT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(gm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",mm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Ju(i,l);o+=Fa(i,e,n,u,s)}else if(u=tT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Ju(i,l++),o+=Fa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(t,e,n){if(t==null)return t;var r=[],s=0;return Fa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function sT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},Ua={transition:null},iT={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:dd};function uv(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=oi;ne.Fragment=HI;ne.Profiler=GI;ne.PureComponent=cd;ne.StrictMode=KI;ne.Suspense=JI;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iT;ne.act=uv;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=dd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ov.call(e,u)&&!av.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Lo,type:t.type,key:s,ref:i,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:YI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QI,_context:t},t.Consumer=t};ne.createElement=lv;ne.createFactory=function(t){var e=lv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:XI,render:t}};ne.isValidElement=fd;ne.lazy=function(t){return{$$typeof:eT,_payload:{_status:-1,_result:t},_init:sT}};ne.memo=function(t,e){return{$$typeof:ZI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};ne.unstable_act=uv;ne.useCallback=function(t,e){return wt.current.useCallback(t,e)};ne.useContext=function(t){return wt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return wt.current.useEffect(t,e)};ne.useId=function(){return wt.current.useId()};ne.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return wt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};ne.useRef=function(t){return wt.current.useRef(t)};ne.useState=function(t){return wt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return wt.current.useTransition()};ne.version="18.3.1";tv.exports=ne;var Y=tv.exports;const cv=qI(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oT=Y,aT=Symbol.for("react.element"),lT=Symbol.for("react.fragment"),uT=Object.prototype.hasOwnProperty,cT=oT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hT={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uT.call(e,r)&&!hT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:aT,type:t,key:i,ref:o,props:s,_owner:cT.current}}Xl.Fragment=lT;Xl.jsx=hv;Xl.jsxs=hv;ev.exports=Xl;var f=ev.exports,Bc={},dv={exports:{}},Ot={},fv={exports:{}},pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,H){var q=F.length;F.push(H);e:for(;0<q;){var pe=q-1>>>1,he=F[pe];if(0<s(he,H))F[pe]=H,F[q]=he,q=pe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],q=F.pop();if(q!==H){F[0]=q;e:for(var pe=0,he=F.length,Te=he>>>1;pe<Te;){var Je=2*(pe+1)-1,Ht=F[Je],Rt=Je+1,Ct=F[Rt];if(0>s(Ht,q))Rt<he&&0>s(Ct,Ht)?(F[pe]=Ct,F[Rt]=q,pe=Rt):(F[pe]=Ht,F[Je]=q,pe=Je);else if(Rt<he&&0>s(Ct,q))F[pe]=Ct,F[Rt]=q,pe=Rt;else break e}}return H}function s(F,H){var q=F.sortIndex-H.sortIndex;return q!==0?q:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,v=3,k=!1,P=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(h)}}function V(F){if(N=!1,A(F),!P)if(n(u)!==null)P=!0,le(b);else{var H=n(h);H!==null&&se(V,H.startTime-F)}}function b(F,H){P=!1,N&&(N=!1,S(y),y=-1),k=!0;var q=v;try{for(A(H),m=n(u);m!==null&&(!(m.expirationTime>H)||F&&!x());){var pe=m.callback;if(typeof pe=="function"){m.callback=null,v=m.priorityLevel;var he=pe(m.expirationTime<=H);H=t.unstable_now(),typeof he=="function"?m.callback=he:m===n(u)&&r(u),A(H)}else r(u);m=n(u)}if(m!==null)var Te=!0;else{var Je=n(h);Je!==null&&se(V,Je.startTime-H),Te=!1}return Te}finally{m=null,v=q,k=!1}}var L=!1,_=null,y=-1,E=5,T=-1;function x(){return!(t.unstable_now()-T<E)}function R(){if(_!==null){var F=t.unstable_now();T=F;var H=!0;try{H=_(!0,F)}finally{H?I():(L=!1,_=null)}}else L=!1}var I;if(typeof w=="function")I=function(){w(R)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,W=Se.port2;Se.port1.onmessage=R,I=function(){W.postMessage(null)}}else I=function(){O(R,0)};function le(F){_=F,L||(L=!0,I())}function se(F,H){y=O(function(){F(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,le(b))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var q=v;v=H;try{return F()}finally{v=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=v;v=F;try{return H()}finally{v=q}},t.unstable_scheduleCallback=function(F,H,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,F){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=q+he,F={id:p++,callback:H,priorityLevel:F,startTime:q,expirationTime:he,sortIndex:-1},q>pe?(F.sortIndex=q,e(h,F),n(u)===null&&F===n(h)&&(N?(S(y),y=-1):N=!0,se(V,q-pe))):(F.sortIndex=he,e(u,F),P||k||(P=!0,le(b))),F},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(F){var H=v;return function(){var q=v;v=H;try{return F.apply(this,arguments)}finally{v=q}}}})(pv);fv.exports=pv;var dT=fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fT=Y,Mt=dT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,uo={};function is(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(uo[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,pT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ym={},vm={};function mT(t){return zc.call(vm,t)?!0:zc.call(ym,t)?!1:pT.test(t)?vm[t]=!0:(ym[t]=!0,!1)}function gT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yT(t,e,n,r){if(e===null||typeof e>"u"||gT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pd,md);Qe[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pd,md);Qe[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pd,md);Qe[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function gd(t,e,n,r){var s=Qe.hasOwnProperty(e)?Qe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yT(e,n,s,r)&&(n=null),r||s===null?mT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=fT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),yv=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),vv=Symbol.for("react.offscreen"),_m=Symbol.iterator;function Ni(t){return t===null||typeof t!="object"?null:(t=_m&&t[_m]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Zu;function Ui(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ui(t):""}function vT(t){switch(t.tag){case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function Kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Is:return"Portal";case qc:return"Profiler";case yd:return"StrictMode";case Wc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yv:return(t.displayName||"Context")+".Consumer";case gv:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:Kc(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return Kc(t(e))}catch{}}return null}function _T(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(e);case 8:return e===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _v(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wT(t){var e=_v(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=wT(t))}function wv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_v(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gc(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ev(t,e){e=e.checked,e!=null&&gd(t,"checked",e,!1)}function Qc(t,e){Ev(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Em(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $i=Array.isArray;function Ms(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Xc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if($i(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function Iv(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ET=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(t){ET.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gi[e]=Gi[t]})});function Sv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gi.hasOwnProperty(t)&&Gi[t]?(""+e).trim():e+"px"}function Av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Sv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var IT=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(t,e){if(e){if(IT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=null;function wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nh=null,Os=null,Ls=null;function xm(t){if(t=Uo(t)){if(typeof nh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=nu(e),nh(t.stateNode,t.type,e))}}function kv(t){Os?Ls?Ls.push(t):Ls=[t]:Os=t}function Rv(){if(Os){var t=Os,e=Ls;if(Ls=Os=null,xm(t),e)for(t=0;t<e.length;t++)xm(e[t])}}function Cv(t,e){return t(e)}function Pv(){}var nc=!1;function Nv(t,e,n){if(nc)return t(e,n);nc=!0;try{return Cv(t,e,n)}finally{nc=!1,(Os!==null||Ls!==null)&&(Pv(),Rv())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var rh=!1;if(Mn)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){rh=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{rh=!1}function TT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Qi=!1,al=null,ll=!1,sh=null,xT={onError:function(t){Qi=!0,al=t}};function ST(t,e,n,r,s,i,o,l,u){Qi=!1,al=null,TT.apply(xT,arguments)}function AT(t,e,n,r,s,i,o,l,u){if(ST.apply(this,arguments),Qi){if(Qi){var h=al;Qi=!1,al=null}else throw Error(U(198));ll||(ll=!0,sh=h)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sm(t){if(os(t)!==t)throw Error(U(188))}function kT(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Sm(s),t;if(i===r)return Sm(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Dv(t){return t=kT(t),t!==null?Vv(t):null}function Vv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vv(t);if(e!==null)return e;t=t.sibling}return null}var Mv=Mt.unstable_scheduleCallback,Am=Mt.unstable_cancelCallback,RT=Mt.unstable_shouldYield,CT=Mt.unstable_requestPaint,De=Mt.unstable_now,PT=Mt.unstable_getCurrentPriorityLevel,Ed=Mt.unstable_ImmediatePriority,Ov=Mt.unstable_UserBlockingPriority,ul=Mt.unstable_NormalPriority,NT=Mt.unstable_LowPriority,Lv=Mt.unstable_IdlePriority,Jl=null,pn=null;function bT(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:MT,DT=Math.log,VT=Math.LN2;function MT(t){return t>>>=0,t===0?32:31-(DT(t)/VT|0)|0}var wa=64,Ea=4194304;function Bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Bi(l):(i&=o,i!==0&&(r=Bi(i)))}else o=n&~s,o!==0?r=Bi(o):i!==0&&(r=Bi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),s=1<<n,r|=t[n],e&=~s;return r}function OT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-en(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=OT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jv(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function jT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-en(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function Fv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Uv,Td,$v,Bv,zv,oh=!1,Ia=[],or=null,ar=null,lr=null,fo=new Map,po=new Map,Jn=[],FT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Di(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Uo(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function UT(t,e,n,r,s){switch(e){case"focusin":return or=Di(or,t,e,n,r,s),!0;case"dragenter":return ar=Di(ar,t,e,n,r,s),!0;case"mouseover":return lr=Di(lr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return fo.set(i,Di(fo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,po.set(i,Di(po.get(i)||null,t,e,n,r,s)),!0}return!1}function qv(t){var e=Lr(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=bv(n),e!==null){t.blockedOn=e,zv(t.priority,function(){$v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);th=r,n.target.dispatchEvent(r),th=null}else return e=Uo(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function Rm(t,e,n){$a(t)&&n.delete(e)}function $T(){oh=!1,or!==null&&$a(or)&&(or=null),ar!==null&&$a(ar)&&(ar=null),lr!==null&&$a(lr)&&(lr=null),fo.forEach(Rm),po.forEach(Rm)}function Vi(t,e){t.blockedOn===e&&(t.blockedOn=null,oh||(oh=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,$T)))}function mo(t){function e(s){return Vi(s,t)}if(0<Ia.length){Vi(Ia[0],t);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Vi(or,t),ar!==null&&Vi(ar,t),lr!==null&&Vi(lr,t),fo.forEach(e),po.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)qv(n),n.blockedOn===null&&Jn.shift()}var js=zn.ReactCurrentBatchConfig,hl=!0;function BT(t,e,n,r){var s=de,i=js.transition;js.transition=null;try{de=1,xd(t,e,n,r)}finally{de=s,js.transition=i}}function zT(t,e,n,r){var s=de,i=js.transition;js.transition=null;try{de=4,xd(t,e,n,r)}finally{de=s,js.transition=i}}function xd(t,e,n,r){if(hl){var s=ah(t,e,n,r);if(s===null)fc(t,e,r,dl,n),km(t,r);else if(UT(s,t,e,n,r))r.stopPropagation();else if(km(t,r),e&4&&-1<FT.indexOf(t)){for(;s!==null;){var i=Uo(s);if(i!==null&&Uv(i),i=ah(t,e,n,r),i===null&&fc(t,e,r,dl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else fc(t,e,r,null,n)}}var dl=null;function ah(t,e,n,r){if(dl=null,t=wd(r),t=Lr(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function Wv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PT()){case Ed:return 1;case Ov:return 4;case ul:case NT:return 16;case Lv:return 536870912;default:return 16}default:return 16}}var rr=null,Sd=null,Ba=null;function Hv(){if(Ba)return Ba;var t,e=Sd,n=e.length,r,s="value"in rr?rr.value:rr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ba=s.slice(t,1<r?1-r:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function Cm(){return!1}function Lt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ta:Cm,this.isPropagationStopped=Cm,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=Lt(ai),Fo=Re({},ai,{view:0,detail:0}),qT=Lt(Fo),sc,ic,Mi,Zl=Re({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(sc=t.screenX-Mi.screenX,ic=t.screenY-Mi.screenY):ic=sc=0,Mi=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Pm=Lt(Zl),WT=Re({},Zl,{dataTransfer:0}),HT=Lt(WT),KT=Re({},Fo,{relatedTarget:0}),oc=Lt(KT),GT=Re({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),QT=Lt(GT),YT=Re({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XT=Lt(YT),JT=Re({},ai,{data:0}),Nm=Lt(JT),ZT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tx[t])?!!e[t]:!1}function kd(){return nx}var rx=Re({},Fo,{key:function(t){if(t.key){var e=ZT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sx=Lt(rx),ix=Re({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Lt(ix),ox=Re({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),ax=Lt(ox),lx=Re({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=Lt(lx),cx=Re({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Lt(cx),dx=[9,13,27,32],Rd=Mn&&"CompositionEvent"in window,Yi=null;Mn&&"documentMode"in document&&(Yi=document.documentMode);var fx=Mn&&"TextEvent"in window&&!Yi,Kv=Mn&&(!Rd||Yi&&8<Yi&&11>=Yi),Dm=" ",Vm=!1;function Gv(t,e){switch(t){case"keyup":return dx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function px(t,e){switch(t){case"compositionend":return Qv(e);case"keypress":return e.which!==32?null:(Vm=!0,Dm);case"textInput":return t=e.data,t===Dm&&Vm?null:t;default:return null}}function mx(t,e){if(xs)return t==="compositionend"||!Rd&&Gv(t,e)?(t=Hv(),Ba=Sd=rr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gx[t.type]:e==="textarea"}function Yv(t,e,n,r){kv(r),e=fl(e,"onChange"),0<e.length&&(n=new Ad("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xi=null,go=null;function yx(t){a_(t,0)}function eu(t){var e=ks(t);if(wv(e))return t}function vx(t,e){if(t==="change")return e}var Xv=!1;if(Mn){var ac;if(Mn){var lc="oninput"in document;if(!lc){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),lc=typeof Om.oninput=="function"}ac=lc}else ac=!1;Xv=ac&&(!document.documentMode||9<document.documentMode)}function Lm(){Xi&&(Xi.detachEvent("onpropertychange",Jv),go=Xi=null)}function Jv(t){if(t.propertyName==="value"&&eu(go)){var e=[];Yv(e,go,t,wd(t)),Nv(yx,e)}}function _x(t,e,n){t==="focusin"?(Lm(),Xi=e,go=n,Xi.attachEvent("onpropertychange",Jv)):t==="focusout"&&Lm()}function wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(go)}function Ex(t,e){if(t==="click")return eu(e)}function Ix(t,e){if(t==="input"||t==="change")return eu(e)}function Tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:Tx;function yo(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!zc.call(e,s)||!sn(t[s],e[s]))return!1}return!0}function jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jm(n)}}function Zv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xx(t){var e=e_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zv(n.ownerDocument.documentElement,n)){if(r!==null&&Cd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Fm(n,i);var o=Fm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sx=Mn&&"documentMode"in document&&11>=document.documentMode,Ss=null,lh=null,Ji=null,uh=!1;function Um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uh||Ss==null||Ss!==ol(r)||(r=Ss,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ji&&yo(Ji,r)||(Ji=r,r=fl(lh,"onSelect"),0<r.length&&(e=new Ad("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ss)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},uc={},t_={};Mn&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function tu(t){if(uc[t])return uc[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return uc[t]=e[n];return t}var n_=tu("animationend"),r_=tu("animationiteration"),s_=tu("animationstart"),i_=tu("transitionend"),o_=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){o_.set(t,e),is(e,[t])}for(var cc=0;cc<$m.length;cc++){var hc=$m[cc],Ax=hc.toLowerCase(),kx=hc[0].toUpperCase()+hc.slice(1);xr(Ax,"on"+kx)}xr(n_,"onAnimationEnd");xr(r_,"onAnimationIteration");xr(s_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(i_,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function Bm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,AT(r,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Bm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Bm(s,l,h),i=u}}}if(ll)throw t=sh,ll=!1,sh=null,t}function we(t,e){var n=e[ph];n===void 0&&(n=e[ph]=new Set);var r=t+"__bubble";n.has(r)||(l_(e,t,2,!1),n.add(r))}function dc(t,e,n){var r=0;e&&(r|=4),l_(n,t,r,e)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[Sa]){t[Sa]=!0,mv.forEach(function(n){n!=="selectionchange"&&(Rx.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sa]||(e[Sa]=!0,dc("selectionchange",!1,e))}}function l_(t,e,n,r){switch(Wv(e)){case 1:var s=BT;break;case 4:s=zT;break;default:s=xd}n=s.bind(null,e,n,t),s=void 0,!rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function fc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Lr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Nv(function(){var h=i,p=wd(n),m=[];e:{var v=o_.get(t);if(v!==void 0){var k=Ad,P=t;switch(t){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":k=sx;break;case"focusin":P="focus",k=oc;break;case"focusout":P="blur",k=oc;break;case"beforeblur":case"afterblur":k=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=HT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=ax;break;case n_:case r_:case s_:k=QT;break;case i_:k=ux;break;case"scroll":k=qT;break;case"wheel":k=hx;break;case"copy":case"cut":case"paste":k=XT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=bm}var N=(e&4)!==0,O=!N&&t==="scroll",S=N?v!==null?v+"Capture":null:v;N=[];for(var w=h,A;w!==null;){A=w;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,S!==null&&(V=ho(w,S),V!=null&&N.push(_o(w,V,A)))),O)break;w=w.return}0<N.length&&(v=new k(v,P,null,n,p),m.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==th&&(P=n.relatedTarget||n.fromElement)&&(Lr(P)||P[On]))break e;if((k||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?Lr(P):null,P!==null&&(O=os(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(N=Pm,V="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=bm,V="onPointerLeave",S="onPointerEnter",w="pointer"),O=k==null?v:ks(k),A=P==null?v:ks(P),v=new N(V,w+"leave",k,n,p),v.target=O,v.relatedTarget=A,V=null,Lr(p)===h&&(N=new N(S,w+"enter",P,n,p),N.target=A,N.relatedTarget=O,V=N),O=V,k&&P)t:{for(N=k,S=P,w=0,A=N;A;A=ys(A))w++;for(A=0,V=S;V;V=ys(V))A++;for(;0<w-A;)N=ys(N),w--;for(;0<A-w;)S=ys(S),A--;for(;w--;){if(N===S||S!==null&&N===S.alternate)break t;N=ys(N),S=ys(S)}N=null}else N=null;k!==null&&zm(m,v,k,N,!1),P!==null&&O!==null&&zm(m,O,P,N,!0)}}e:{if(v=h?ks(h):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var b=vx;else if(Mm(v))if(Xv)b=Ix;else{b=wx;var L=_x}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(b=Ex);if(b&&(b=b(t,h))){Yv(m,b,n,p);break e}L&&L(t,v,h),t==="focusout"&&(L=v._wrapperState)&&L.controlled&&v.type==="number"&&Yc(v,"number",v.value)}switch(L=h?ks(h):window,t){case"focusin":(Mm(L)||L.contentEditable==="true")&&(Ss=L,lh=h,Ji=null);break;case"focusout":Ji=lh=Ss=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,Um(m,n,p);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Um(m,n,p)}var _;if(Rd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else xs?Gv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Kv&&n.locale!=="ko"&&(xs||y!=="onCompositionStart"?y==="onCompositionEnd"&&xs&&(_=Hv()):(rr=p,Sd="value"in rr?rr.value:rr.textContent,xs=!0)),L=fl(h,y),0<L.length&&(y=new Nm(y,t,null,n,p),m.push({event:y,listeners:L}),_?y.data=_:(_=Qv(n),_!==null&&(y.data=_)))),(_=fx?px(t,n):mx(t,n))&&(h=fl(h,"onBeforeInput"),0<h.length&&(p=new Nm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=_))}a_(m,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ho(t,n),i!=null&&r.unshift(_o(t,i,s)),i=ho(t,e),i!=null&&r.push(_o(t,i,s))),t=t.return}return r}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=ho(n,i),u!=null&&o.unshift(_o(n,u,l))):s||(u=ho(n,i),u!=null&&o.push(_o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Cx=/\r\n?/g,Px=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(Cx,`
`).replace(Px,"")}function Aa(t,e,n){if(e=qm(e),qm(t)!==e&&n)throw Error(U(425))}function pl(){}var ch=null,hh=null;function dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(Dx)}:fh;function Dx(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);mo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var li=Math.random().toString(36).slice(2),dn="__reactFiber$"+li,wo="__reactProps$"+li,On="__reactContainer$"+li,ph="__reactEvents$"+li,Vx="__reactListeners$"+li,Mx="__reactHandles$"+li;function Lr(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hm(t);t!==null;){if(n=t[dn])return n;t=Hm(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[dn]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function nu(t){return t[wo]||null}var mh=[],Rs=-1;function Sr(t){return{current:t}}function Ie(t){0>Rs||(t.current=mh[Rs],mh[Rs]=null,Rs--)}function ve(t,e){Rs++,mh[Rs]=t.current,t.current=e}var wr={},ut=Sr(wr),xt=Sr(!1),Hr=wr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function ml(){Ie(xt),Ie(ut)}function Km(t,e,n){if(ut.current!==wr)throw Error(U(168));ve(ut,e),ve(xt,n)}function u_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,_T(t)||"Unknown",s));return Re({},n,r)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Hr=ut.current,ve(ut,t),ve(xt,xt.current),!0}function Gm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=u_(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,Ie(xt),Ie(ut),ve(ut,t)):Ie(xt),ve(xt,n)}var kn=null,ru=!1,mc=!1;function c_(t){kn===null?kn=[t]:kn.push(t)}function Ox(t){ru=!0,c_(t)}function Ar(){if(!mc&&kn!==null){mc=!0;var t=0,e=de;try{var n=kn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,ru=!1}catch(s){throw kn!==null&&(kn=kn.slice(t+1)),Mv(Ed,Ar),s}finally{de=e,mc=!1}}return null}var Cs=[],Ps=0,yl=null,vl=0,jt=[],Ft=0,Kr=null,Cn=1,Pn="";function Vr(t,e){Cs[Ps++]=vl,Cs[Ps++]=yl,yl=t,vl=e}function h_(t,e,n){jt[Ft++]=Cn,jt[Ft++]=Pn,jt[Ft++]=Kr,Kr=t;var r=Cn;t=Pn;var s=32-en(r)-1;r&=~(1<<s),n+=1;var i=32-en(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Cn=1<<32-en(e)+s|n<<s|r,Pn=i+t}else Cn=1<<i|n<<s|r,Pn=t}function Pd(t){t.return!==null&&(Vr(t,1),h_(t,1,0))}function Nd(t){for(;t===yl;)yl=Cs[--Ps],Cs[Ps]=null,vl=Cs[--Ps],Cs[Ps]=null;for(;t===Kr;)Kr=jt[--Ft],jt[Ft]=null,Pn=jt[--Ft],jt[Ft]=null,Cn=jt[--Ft],jt[Ft]=null}var Dt=null,bt=null,xe=!1,Jt=null;function d_(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,bt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:Cn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,bt=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yh(t){if(xe){var e=bt;if(e){var n=e;if(!Qm(t,e)){if(gh(t))throw Error(U(418));e=ur(n.nextSibling);var r=Dt;e&&Qm(t,e)?d_(r,n):(t.flags=t.flags&-4097|2,xe=!1,Dt=t)}}else{if(gh(t))throw Error(U(418));t.flags=t.flags&-4097|2,xe=!1,Dt=t}}}function Ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function ka(t){if(t!==Dt)return!1;if(!xe)return Ym(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dh(t.type,t.memoizedProps)),e&&(e=bt)){if(gh(t))throw f_(),Error(U(418));for(;e;)d_(t,e),e=ur(e.nextSibling)}if(Ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=Dt?ur(t.stateNode.nextSibling):null;return!0}function f_(){for(var t=bt;t;)t=ur(t.nextSibling)}function Ks(){bt=Dt=null,xe=!1}function bd(t){Jt===null?Jt=[t]:Jt.push(t)}var Lx=zn.ReactCurrentBatchConfig;function Oi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xm(t){var e=t._init;return e(t._payload)}function p_(t){function e(S,w){if(t){var A=S.deletions;A===null?(S.deletions=[w],S.flags|=16):A.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function s(S,w){return S=fr(S,w),S.index=0,S.sibling=null,S}function i(S,w,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<w?(S.flags|=2,w):A):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,A,V){return w===null||w.tag!==6?(w=Ic(A,S.mode,V),w.return=S,w):(w=s(w,A),w.return=S,w)}function u(S,w,A,V){var b=A.type;return b===Ts?p(S,w,A.props.children,V,A.key):w!==null&&(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Qn&&Xm(b)===w.type)?(V=s(w,A.props),V.ref=Oi(S,w,A),V.return=S,V):(V=Ya(A.type,A.key,A.props,null,S.mode,V),V.ref=Oi(S,w,A),V.return=S,V)}function h(S,w,A,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Tc(A,S.mode,V),w.return=S,w):(w=s(w,A.children||[]),w.return=S,w)}function p(S,w,A,V,b){return w===null||w.tag!==7?(w=qr(A,S.mode,V,b),w.return=S,w):(w=s(w,A),w.return=S,w)}function m(S,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ic(""+w,S.mode,A),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ya:return A=Ya(w.type,w.key,w.props,null,S.mode,A),A.ref=Oi(S,null,w),A.return=S,A;case Is:return w=Tc(w,S.mode,A),w.return=S,w;case Qn:var V=w._init;return m(S,V(w._payload),A)}if($i(w)||Ni(w))return w=qr(w,S.mode,A,null),w.return=S,w;Ra(S,w)}return null}function v(S,w,A,V){var b=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return b!==null?null:l(S,w,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ya:return A.key===b?u(S,w,A,V):null;case Is:return A.key===b?h(S,w,A,V):null;case Qn:return b=A._init,v(S,w,b(A._payload),V)}if($i(A)||Ni(A))return b!==null?null:p(S,w,A,V,null);Ra(S,A)}return null}function k(S,w,A,V,b){if(typeof V=="string"&&V!==""||typeof V=="number")return S=S.get(A)||null,l(w,S,""+V,b);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ya:return S=S.get(V.key===null?A:V.key)||null,u(w,S,V,b);case Is:return S=S.get(V.key===null?A:V.key)||null,h(w,S,V,b);case Qn:var L=V._init;return k(S,w,A,L(V._payload),b)}if($i(V)||Ni(V))return S=S.get(A)||null,p(w,S,V,b,null);Ra(w,V)}return null}function P(S,w,A,V){for(var b=null,L=null,_=w,y=w=0,E=null;_!==null&&y<A.length;y++){_.index>y?(E=_,_=null):E=_.sibling;var T=v(S,_,A[y],V);if(T===null){_===null&&(_=E);break}t&&_&&T.alternate===null&&e(S,_),w=i(T,w,y),L===null?b=T:L.sibling=T,L=T,_=E}if(y===A.length)return n(S,_),xe&&Vr(S,y),b;if(_===null){for(;y<A.length;y++)_=m(S,A[y],V),_!==null&&(w=i(_,w,y),L===null?b=_:L.sibling=_,L=_);return xe&&Vr(S,y),b}for(_=r(S,_);y<A.length;y++)E=k(_,S,y,A[y],V),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),w=i(E,w,y),L===null?b=E:L.sibling=E,L=E);return t&&_.forEach(function(x){return e(S,x)}),xe&&Vr(S,y),b}function N(S,w,A,V){var b=Ni(A);if(typeof b!="function")throw Error(U(150));if(A=b.call(A),A==null)throw Error(U(151));for(var L=b=null,_=w,y=w=0,E=null,T=A.next();_!==null&&!T.done;y++,T=A.next()){_.index>y?(E=_,_=null):E=_.sibling;var x=v(S,_,T.value,V);if(x===null){_===null&&(_=E);break}t&&_&&x.alternate===null&&e(S,_),w=i(x,w,y),L===null?b=x:L.sibling=x,L=x,_=E}if(T.done)return n(S,_),xe&&Vr(S,y),b;if(_===null){for(;!T.done;y++,T=A.next())T=m(S,T.value,V),T!==null&&(w=i(T,w,y),L===null?b=T:L.sibling=T,L=T);return xe&&Vr(S,y),b}for(_=r(S,_);!T.done;y++,T=A.next())T=k(_,S,y,T.value,V),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),w=i(T,w,y),L===null?b=T:L.sibling=T,L=T);return t&&_.forEach(function(R){return e(S,R)}),xe&&Vr(S,y),b}function O(S,w,A,V){if(typeof A=="object"&&A!==null&&A.type===Ts&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ya:e:{for(var b=A.key,L=w;L!==null;){if(L.key===b){if(b=A.type,b===Ts){if(L.tag===7){n(S,L.sibling),w=s(L,A.props.children),w.return=S,S=w;break e}}else if(L.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Qn&&Xm(b)===L.type){n(S,L.sibling),w=s(L,A.props),w.ref=Oi(S,L,A),w.return=S,S=w;break e}n(S,L);break}else e(S,L);L=L.sibling}A.type===Ts?(w=qr(A.props.children,S.mode,V,A.key),w.return=S,S=w):(V=Ya(A.type,A.key,A.props,null,S.mode,V),V.ref=Oi(S,w,A),V.return=S,S=V)}return o(S);case Is:e:{for(L=A.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(S,w.sibling),w=s(w,A.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Tc(A,S.mode,V),w.return=S,S=w}return o(S);case Qn:return L=A._init,O(S,w,L(A._payload),V)}if($i(A))return P(S,w,A,V);if(Ni(A))return N(S,w,A,V);Ra(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(S,w.sibling),w=s(w,A),w.return=S,S=w):(n(S,w),w=Ic(A,S.mode,V),w.return=S,S=w),o(S)):n(S,w)}return O}var Gs=p_(!0),m_=p_(!1),_l=Sr(null),wl=null,Ns=null,Dd=null;function Vd(){Dd=Ns=wl=null}function Md(t){var e=_l.current;Ie(_l),t._currentValue=e}function vh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){wl=t,Dd=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(Dd!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(wl===null)throw Error(U(308));Ns=t,wl.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var jr=null;function Od(t){jr===null?jr=[t]:jr.push(t)}function g_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Od(e)):(n.next=s.next,s.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Ln(t,n)}return s=r.interleaved,s===null?(e.next=e,Od(r)):(e.next=s.next,s.next=e),r.interleaved=e,Ln(t,n)}function qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}function Jm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,r){var s=t.updateQueue;Yn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=h=u=null,l=i;do{var v=l.lane,k=l.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(v=e,k=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){m=P.call(k,m,v);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,v=typeof P=="function"?P.call(k,m,v):P,v==null)break e;m=Re({},m,v);break e;case 2:Yn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=k,u=m):p=p.next=k,o|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=m}}function Zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var $o={},mn=Sr($o),Eo=Sr($o),Io=Sr($o);function Fr(t){if(t===$o)throw Error(U(174));return t}function jd(t,e){switch(ve(Io,e),ve(Eo,t),ve(mn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jc(e,t)}Ie(mn),ve(mn,e)}function Qs(){Ie(mn),Ie(Eo),Ie(Io)}function v_(t){Fr(Io.current);var e=Fr(mn.current),n=Jc(e,t.type);e!==n&&(ve(Eo,t),ve(mn,n))}function Fd(t){Eo.current===t&&(Ie(mn),Ie(Eo))}var Ae=Sr(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function Ud(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var Wa=zn.ReactCurrentDispatcher,yc=zn.ReactCurrentBatchConfig,Gr=0,ke=null,je=null,$e=null,Tl=!1,Zi=!1,To=0,jx=0;function rt(){throw Error(U(321))}function $d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Bd(t,e,n,r,s,i){if(Gr=i,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wa.current=t===null||t.memoizedState===null?Bx:zx,t=n(r,s),Zi){i=0;do{if(Zi=!1,To=0,25<=i)throw Error(U(301));i+=1,$e=je=null,e.updateQueue=null,Wa.current=qx,t=n(r,s)}while(Zi)}if(Wa.current=xl,e=je!==null&&je.next!==null,Gr=0,$e=je=ke=null,Tl=!1,e)throw Error(U(300));return t}function zd(){var t=To!==0;return To=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ke.memoizedState=$e=t:$e=$e.next=t,$e}function Wt(){if(je===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=$e===null?ke.memoizedState:$e.next;if(e!==null)$e=e,je=t;else{if(t===null)throw Error(U(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},$e===null?ke.memoizedState=$e=t:$e=$e.next=t}return $e}function xo(t,e){return typeof e=="function"?e(t):e}function vc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=je,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var p=h.lane;if((Gr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=p,Qr|=p}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,sn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ke.lanes|=i,Qr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=Wt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);sn(i,e.memoizedState)||(Tt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function __(){}function w_(t,e){var n=ke,r=Wt(),s=e(),i=!sn(r.memoizedState,s);if(i&&(r.memoizedState=s,Tt=!0),r=r.queue,qd(T_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,So(9,I_.bind(null,n,r,s,e),void 0,null),Be===null)throw Error(U(349));Gr&30||E_(n,e,s)}return s}function E_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I_(t,e,n,r){e.value=n,e.getSnapshot=r,x_(e)&&S_(t)}function T_(t,e,n){return n(function(){x_(e)&&S_(t)})}function x_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function S_(t){var e=Ln(t,1);e!==null&&tn(e,t,1,-1)}function eg(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=$x.bind(null,ke,t),[e.memoizedState,t]}function So(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function A_(){return Wt().memoizedState}function Ha(t,e,n,r){var s=hn();ke.flags|=t,s.memoizedState=So(1|e,n,void 0,r===void 0?null:r)}function su(t,e,n,r){var s=Wt();r=r===void 0?null:r;var i=void 0;if(je!==null){var o=je.memoizedState;if(i=o.destroy,r!==null&&$d(r,o.deps)){s.memoizedState=So(e,n,i,r);return}}ke.flags|=t,s.memoizedState=So(1|e,n,i,r)}function tg(t,e){return Ha(8390656,8,t,e)}function qd(t,e){return su(2048,8,t,e)}function k_(t,e){return su(4,2,t,e)}function R_(t,e){return su(4,4,t,e)}function C_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,C_.bind(null,e,t),n)}function Wd(){}function N_(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$d(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function b_(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$d(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function D_(t,e,n){return Gr&21?(sn(n,e)||(n=jv(),ke.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function Fx(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=yc.transition;yc.transition={};try{t(!1),e()}finally{de=n,yc.transition=r}}function V_(){return Wt().memoizedState}function Ux(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},M_(t))O_(e,n);else if(n=g_(t,e,n,r),n!==null){var s=vt();tn(n,t,r,s),L_(n,e,r)}}function $x(t,e,n){var r=dr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(M_(t))O_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,sn(l,o)){var u=e.interleaved;u===null?(s.next=s,Od(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=g_(t,e,s,r),n!==null&&(s=vt(),tn(n,t,r,s),L_(n,e,r))}}function M_(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function O_(t,e){Zi=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}var xl={readContext:qt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Bx={readContext:qt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,C_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ux.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:eg,useDebugValue:Wd,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=eg(!1),e=t[0];return t=Fx.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,s=hn();if(xe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Be===null)throw Error(U(349));Gr&30||E_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,tg(T_.bind(null,r,i,t),[t]),r.flags|=2048,So(9,I_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=hn(),e=Be.identifierPrefix;if(xe){var n=Pn,r=Cn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zx={readContext:qt,useCallback:N_,useContext:qt,useEffect:qd,useImperativeHandle:P_,useInsertionEffect:k_,useLayoutEffect:R_,useMemo:b_,useReducer:vc,useRef:A_,useState:function(){return vc(xo)},useDebugValue:Wd,useDeferredValue:function(t){var e=Wt();return D_(e,je.memoizedState,t)},useTransition:function(){var t=vc(xo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:__,useSyncExternalStore:w_,useId:V_,unstable_isNewReconciler:!1},qx={readContext:qt,useCallback:N_,useContext:qt,useEffect:qd,useImperativeHandle:P_,useInsertionEffect:k_,useLayoutEffect:R_,useMemo:b_,useReducer:_c,useRef:A_,useState:function(){return _c(xo)},useDebugValue:Wd,useDeferredValue:function(t){var e=Wt();return je===null?e.memoizedState=t:D_(e,je.memoizedState,t)},useTransition:function(){var t=_c(xo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:__,useSyncExternalStore:w_,useId:V_,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),s=dr(t),i=Vn(r,s);i.payload=e,n!=null&&(i.callback=n),e=cr(t,i,s),e!==null&&(tn(e,t,s,r),qa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),s=dr(t),i=Vn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=cr(t,i,s),e!==null&&(tn(e,t,s,r),qa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=dr(t),s=Vn(n,r);s.tag=2,e!=null&&(s.callback=e),e=cr(t,s,r),e!==null&&(tn(e,t,r,n),qa(e,t,r))}};function ng(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(s,i):!0}function j_(t,e,n){var r=!1,s=wr,i=e.contextType;return typeof i=="object"&&i!==null?i=qt(i):(s=St(e)?Hr:ut.current,r=e.contextTypes,i=(r=r!=null)?Hs(t,s):wr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function rg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function wh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ld(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=qt(i):(i=St(e)?Hr:ut.current,s.context=Hs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(_h(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&iu.enqueueReplaceState(s,s.state,null),El(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",r=e;do n+=vT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function F_(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Al||(Al=!0,Nh=r),Eh(t,e)},n}function U_(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Eh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Eh(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Wx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=i1.bind(null,t,e,n),e.then(t,t))}function ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function og(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Hx=zn.ReactCurrentOwner,Tt=!1;function yt(t,e,n,r){e.child=t===null?m_(e,null,n,r):Gs(e,t.child,n,r)}function ag(t,e,n,r,s){n=n.render;var i=e.ref;return Fs(e,s),r=Bd(t,e,n,r,i,s),n=zd(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,jn(t,e,s)):(xe&&n&&Pd(e),e.flags|=1,yt(t,e,r,s),e.child)}function lg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Zd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,$_(t,e,i,r,s)):(t=Ya(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return jn(t,e,s)}return e.flags|=1,t=fr(i,r),t.ref=e.ref,t.return=e,e.child=t}function $_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(yo(i,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,jn(t,e,s)}return Ih(t,e,n,r,s)}function B_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Ds,Nt),Nt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Ds,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ve(Ds,Nt),Nt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ve(Ds,Nt),Nt|=r;return yt(t,e,s,n),e.child}function z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ih(t,e,n,r,s){var i=St(n)?Hr:ut.current;return i=Hs(e,i),Fs(e,s),n=Bd(t,e,n,r,i,s),r=zd(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,jn(t,e,s)):(xe&&r&&Pd(e),e.flags|=1,yt(t,e,n,s),e.child)}function ug(t,e,n,r,s){if(St(n)){var i=!0;gl(e)}else i=!1;if(Fs(e,s),e.stateNode===null)Ka(t,e),j_(e,n,r),wh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=qt(h):(h=St(n)?Hr:ut.current,h=Hs(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&rg(e,o,r,h),Yn=!1;var v=e.memoizedState;o.state=v,El(e,r,o,s),u=e.memoizedState,l!==r||v!==u||xt.current||Yn?(typeof p=="function"&&(_h(e,n,p,r),u=e.memoizedState),(l=Yn||ng(e,n,l,r,v,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,y_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Yt(e.type,l),o.props=h,m=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=St(n)?Hr:ut.current,u=Hs(e,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||v!==u)&&rg(e,o,r,u),Yn=!1,v=e.memoizedState,o.state=v,El(e,r,o,s);var P=e.memoizedState;l!==m||v!==P||xt.current||Yn?(typeof k=="function"&&(_h(e,n,k,r),P=e.memoizedState),(h=Yn||ng(e,n,h,r,v,P,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Th(t,e,n,r,i,s)}function Th(t,e,n,r,s,i){z_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Gm(e,n,!1),jn(t,e,i);r=e.stateNode,Hx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,i),e.child=Gs(e,null,l,i)):yt(t,e,l,i),e.memoizedState=r.state,s&&Gm(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?Km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Km(t,e.context,!1),jd(t,e.containerInfo)}function cg(t,e,n,r,s){return Ks(),bd(s),e.flags|=256,yt(t,e,n,r),e.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function W_(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ve(Ae,s&1),t===null)return yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=lu(o,r,0,null),t=qr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Sh(n),e.memoizedState=xh,t):Hd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Kx(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=fr(l,i):(i=qr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=xh,r}return i=t.child,t=i.sibling,r=fr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hd(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,r){return r!==null&&bd(r),Gs(e,t.child,null,n),t=Hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=wc(Error(U(422))),Ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=lu({mode:"visible",children:r.children},s,0,null),i=qr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=xh,i);if(!(e.mode&1))return Ca(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=wc(i,r,void 0),Ca(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=Be,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ln(t,s),tn(r,t,s,-1))}return Jd(),r=wc(Error(U(421))),Ca(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=o1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,bt=ur(s.nextSibling),Dt=e,xe=!0,Jt=null,t!==null&&(jt[Ft++]=Cn,jt[Ft++]=Pn,jt[Ft++]=Kr,Cn=t.id,Pn=t.overflow,Kr=e),e=Hd(e,r.children),e.flags|=4096,e)}function hg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vh(t.return,e,n)}function Ec(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function H_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(yt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hg(t,n,e);else if(t.tag===19)hg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ec(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Il(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ec(e,!0,n,null,i);break;case"together":Ec(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gx(t,e,n){switch(e.tag){case 3:q_(e),Ks();break;case 5:v_(e);break;case 1:St(e.type)&&gl(e);break;case 4:jd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ve(_l,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?W_(t,e,n):(ve(Ae,Ae.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ve(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return H_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ve(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,B_(t,e,n)}return jn(t,e,n)}var K_,Ah,G_,Q_;K_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};G_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Fr(mn.current);var i=null;switch(n){case"input":s=Gc(t,s),r=Gc(t,r),i=[];break;case"select":s=Re({},s,{value:void 0}),r=Re({},r,{value:void 0}),i=[];break;case"textarea":s=Xc(t,s),r=Xc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pl)}Zc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(uo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&we("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Q_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Li(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Qx(t,e,n){var r=e.pendingProps;switch(Nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return St(e.type)&&ml(),st(e),null;case 3:return r=e.stateNode,Qs(),Ie(xt),Ie(ut),Ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(Vh(Jt),Jt=null))),Ah(t,e),st(e),null;case 5:Fd(e);var s=Fr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)G_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return st(e),null}if(t=Fr(mn.current),ka(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[dn]=e,r[wo]=i,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(s=0;s<zi.length;s++)we(zi[s],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":wm(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":Im(r,i),we("invalid",r)}Zc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Aa(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Aa(r.textContent,l,t),s=["children",""+l]):uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":va(r),Em(r,i,!0);break;case"textarea":va(r),Tm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[wo]=r,K_(t,e,!1,!1),e.stateNode=t;e:{switch(o=eh(n,r),n){case"dialog":we("cancel",t),we("close",t),s=r;break;case"iframe":case"object":case"embed":we("load",t),s=r;break;case"video":case"audio":for(s=0;s<zi.length;s++)we(zi[s],t);s=r;break;case"source":we("error",t),s=r;break;case"img":case"image":case"link":we("error",t),we("load",t),s=r;break;case"details":we("toggle",t),s=r;break;case"input":wm(t,r),s=Gc(t,r),we("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Re({},r,{value:void 0}),we("invalid",t);break;case"textarea":Im(t,r),s=Xc(t,r),we("invalid",t);break;default:s=r}Zc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Av(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(t,u):typeof u=="number"&&co(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&we("scroll",t):u!=null&&gd(t,i,u,o))}switch(n){case"input":va(t),Em(t,r,!1);break;case"textarea":va(t),Tm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ms(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)Q_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Fr(Io.current),Fr(mn.current),ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(i=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return st(e),null;case 13:if(Ie(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&bt!==null&&e.mode&1&&!(e.flags&128))f_(),Ks(),e.flags|=98560,i=!1;else if(i=ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[dn]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),i=!1}else Jt!==null&&(Vh(Jt),Jt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Fe===0&&(Fe=3):Jd())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Qs(),Ah(t,e),t===null&&vo(e.stateNode.containerInfo),st(e),null;case 10:return Md(e.type._context),st(e),null;case 17:return St(e.type)&&ml(),st(e),null;case 19:if(Ie(Ae),i=e.memoizedState,i===null)return st(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Li(i,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Il(t),o!==null){for(e.flags|=128,Li(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&De()>Xs&&(e.flags|=128,r=!0,Li(i,!1),e.lanes=4194304)}else{if(!r)if(t=Il(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Li(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!xe)return st(e),null}else 2*De()-i.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,r=!0,Li(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=De(),e.sibling=null,n=Ae.current,ve(Ae,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Yx(t,e){switch(Nd(e),e.tag){case 1:return St(e.type)&&ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),Ie(xt),Ie(ut),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fd(e),null;case 13:if(Ie(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ae),null;case 4:return Qs(),null;case 10:return Md(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Pa=!1,at=!1,Xx=typeof WeakSet=="function"?WeakSet:Set,B=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var dg=!1;function Jx(t,e){if(ch=hl,t=e_(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,v=null;t:for(;;){for(var k;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(k=m.firstChild)!==null;)v=m,m=k;for(;;){if(m===t)break t;if(v===n&&++h===s&&(l=o),v===i&&++p===r&&(u=o),(k=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hh={focusedElem:t,selectionRange:n},hl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,O=P.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Yt(e.type,N),O);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Ne(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return P=dg,dg=!1,P}function eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&kh(e,n,i)}s=s.next}while(s!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y_(t){var e=t.alternate;e!==null&&(t.alternate=null,Y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[wo],delete e[ph],delete e[Vx],delete e[Mx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X_(t){return t.tag===5||t.tag===3||t.tag===4}function fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pl));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var qe=null,Xt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)J_(t,e,n),n=n.sibling}function J_(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:at||bs(n,e);case 6:var r=qe,s=Xt;qe=null,Kn(t,e,n),qe=r,Xt=s,qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),mo(t)):pc(qe,n.stateNode));break;case 4:r=qe,s=Xt,qe=n.stateNode.containerInfo,Xt=!0,Kn(t,e,n),qe=r,Xt=s;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&kh(n,e,o),s=s.next}while(s!==r)}Kn(t,e,n);break;case 1:if(!at&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Kn(t,e,n),at=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function pg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xx),e.forEach(function(r){var s=a1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Xt=!1;break e;case 3:qe=l.stateNode.containerInfo,Xt=!0;break e;case 4:qe=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(qe===null)throw Error(U(160));J_(i,o,s),qe=null,Xt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Ne(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z_(e,t),e=e.sibling}function Z_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),cn(t),r&4){try{eo(3,t,t.return),ou(3,t)}catch(N){Ne(t,t.return,N)}try{eo(5,t,t.return)}catch(N){Ne(t,t.return,N)}}break;case 1:Qt(e,t),cn(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(Qt(e,t),cn(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var s=t.stateNode;try{co(s,"")}catch(N){Ne(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ev(s,i),eh(l,o);var h=eh(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Av(s,m):p==="dangerouslySetInnerHTML"?xv(s,m):p==="children"?co(s,m):gd(s,p,m,h)}switch(l){case"input":Qc(s,i);break;case"textarea":Iv(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Ms(s,!!i.multiple,k,!1):v!==!!i.multiple&&(i.defaultValue!=null?Ms(s,!!i.multiple,i.defaultValue,!0):Ms(s,!!i.multiple,i.multiple?[]:"",!1))}s[wo]=i}catch(N){Ne(t,t.return,N)}}break;case 6:if(Qt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Ne(t,t.return,N)}}break;case 3:if(Qt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(N){Ne(t,t.return,N)}break;case 4:Qt(e,t),cn(t);break;case 13:Qt(e,t),cn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Qd=De())),r&4&&pg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(at=(h=at)||p,Qt(e,t),at=h):Qt(e,t),cn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(B=t,p=t.child;p!==null;){for(m=B=p;B!==null;){switch(v=B,k=v.child,v.tag){case 0:case 11:case 14:case 15:eo(4,v,v.return);break;case 1:bs(v,v.return);var P=v.stateNode;if(typeof P.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Ne(r,n,N)}}break;case 5:bs(v,v.return);break;case 22:if(v.memoizedState!==null){gg(m);continue}}k!==null?(k.return=v,B=k):gg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Sv("display",o))}catch(N){Ne(t,t.return,N)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){Ne(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qt(e,t),cn(t),r&4&&pg(t);break;case 21:break;default:Qt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(co(s,""),r.flags&=-33);var i=fg(t);Ph(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=fg(t);Ch(t,l,o);break;default:throw Error(U(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zx(t,e,n){B=t,e0(t)}function e0(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var s=B,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Pa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||at;l=Pa;var h=at;if(Pa=o,(at=u)&&!h)for(B=s;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?yg(s):u!==null?(u.return=o,B=u):yg(s);for(;i!==null;)B=i,e0(i),i=i.sibling;B=s,Pa=l,at=h}mg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,B=i):mg(t)}}function mg(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Zm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&mo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}at||e.flags&512&&Rh(e)}catch(v){Ne(e,e.return,v)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function gg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function yg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ne(e,s,u)}}var i=e.return;try{Rh(e)}catch(u){Ne(e,i,u)}break;case 5:var o=e.return;try{Rh(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var e1=Math.ceil,Sl=zn.ReactCurrentDispatcher,Kd=zn.ReactCurrentOwner,Bt=zn.ReactCurrentBatchConfig,ae=0,Be=null,Me=null,Ke=0,Nt=0,Ds=Sr(0),Fe=0,Ao=null,Qr=0,au=0,Gd=0,to=null,It=null,Qd=0,Xs=1/0,An=null,Al=!1,Nh=null,hr=null,Na=!1,sr=null,kl=0,no=0,bh=null,Ga=-1,Qa=0;function vt(){return ae&6?De():Ga!==-1?Ga:Ga=De()}function dr(t){return t.mode&1?ae&2&&Ke!==0?Ke&-Ke:Lx.transition!==null?(Qa===0&&(Qa=jv()),Qa):(t=de,t!==0||(t=window.event,t=t===void 0?16:Wv(t.type)),t):1}function tn(t,e,n,r){if(50<no)throw no=0,bh=null,Error(U(185));jo(t,n,r),(!(ae&2)||t!==Be)&&(t===Be&&(!(ae&2)&&(au|=n),Fe===4&&Zn(t,Ke)),At(t,r),n===1&&ae===0&&!(e.mode&1)&&(Xs=De()+500,ru&&Ar()))}function At(t,e){var n=t.callbackNode;LT(t,e);var r=cl(t,t===Be?Ke:0);if(r===0)n!==null&&Am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Am(n),e===1)t.tag===0?Ox(vg.bind(null,t)):c_(vg.bind(null,t)),bx(function(){!(ae&6)&&Ar()}),n=null;else{switch(Fv(r)){case 1:n=Ed;break;case 4:n=Ov;break;case 16:n=ul;break;case 536870912:n=Lv;break;default:n=ul}n=l0(n,t0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t0(t,e){if(Ga=-1,Qa=0,ae&6)throw Error(U(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=cl(t,t===Be?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Rl(t,r);else{e=r;var s=ae;ae|=2;var i=r0();(Be!==t||Ke!==e)&&(An=null,Xs=De()+500,zr(t,e));do try{r1();break}catch(l){n0(t,l)}while(!0);Vd(),Sl.current=i,ae=s,Me!==null?e=0:(Be=null,Ke=0,e=Fe)}if(e!==0){if(e===2&&(s=ih(t),s!==0&&(r=s,e=Dh(t,s))),e===1)throw n=Ao,zr(t,0),Zn(t,r),At(t,De()),n;if(e===6)Zn(t,r);else{if(s=t.current.alternate,!(r&30)&&!t1(s)&&(e=Rl(t,r),e===2&&(i=ih(t),i!==0&&(r=i,e=Dh(t,i))),e===1))throw n=Ao,zr(t,0),Zn(t,r),At(t,De()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Mr(t,It,An);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Qd+500-De(),10<e)){if(cl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=fh(Mr.bind(null,t,It,An),e);break}Mr(t,It,An);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-en(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e1(r/1960))-r,10<r){t.timeoutHandle=fh(Mr.bind(null,t,It,An),r);break}Mr(t,It,An);break;case 5:Mr(t,It,An);break;default:throw Error(U(329))}}}return At(t,De()),t.callbackNode===n?t0.bind(null,t):null}function Dh(t,e){var n=to;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=It,It=n,e!==null&&Vh(e)),t}function Vh(t){It===null?It=t:It.push.apply(It,t)}function t1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!sn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~Gd,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function vg(t){if(ae&6)throw Error(U(327));Us();var e=cl(t,0);if(!(e&1))return At(t,De()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var r=ih(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=Ao,zr(t,0),Zn(t,e),At(t,De()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,It,An),At(t,De()),null}function Yd(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Xs=De()+500,ru&&Ar())}}function Yr(t){sr!==null&&sr.tag===0&&!(ae&6)&&Us();var e=ae;ae|=1;var n=Bt.transition,r=de;try{if(Bt.transition=null,de=1,t)return t()}finally{de=r,Bt.transition=n,ae=e,!(ae&6)&&Ar()}}function Xd(){Nt=Ds.current,Ie(Ds)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nx(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Qs(),Ie(xt),Ie(ut),Ud();break;case 5:Fd(r);break;case 4:Qs();break;case 13:Ie(Ae);break;case 19:Ie(Ae);break;case 10:Md(r.type._context);break;case 22:case 23:Xd()}n=n.return}if(Be=t,Me=t=fr(t.current,null),Ke=Nt=e,Fe=0,Ao=null,Gd=au=Qr=0,It=to=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}jr=null}return t}function n0(t,e){do{var n=Me;try{if(Vd(),Wa.current=xl,Tl){for(var r=ke.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Tl=!1}if(Gr=0,$e=je=ke=null,Zi=!1,To=0,Kd.current=null,n===null||n.return===null){Fe=1,Ao=e,Me=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=ig(o);if(k!==null){k.flags&=-257,og(k,o,l,i,e),k.mode&1&&sg(i,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){sg(i,h,e),Jd();break e}u=Error(U(426))}}else if(xe&&l.mode&1){var O=ig(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),og(O,o,l,i,e),bd(Ys(u,l));break e}}i=u=Ys(u,l),Fe!==4&&(Fe=2),to===null?to=[i]:to.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=F_(i,u,e);Jm(i,S);break e;case 1:l=u;var w=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(hr===null||!hr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=U_(i,l,e);Jm(i,V);break e}}i=i.return}while(i!==null)}i0(n)}catch(b){e=b,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function r0(){var t=Sl.current;return Sl.current=xl,t===null?xl:t}function Jd(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Be===null||!(Qr&268435455)&&!(au&268435455)||Zn(Be,Ke)}function Rl(t,e){var n=ae;ae|=2;var r=r0();(Be!==t||Ke!==e)&&(An=null,zr(t,e));do try{n1();break}catch(s){n0(t,s)}while(!0);if(Vd(),ae=n,Sl.current=r,Me!==null)throw Error(U(261));return Be=null,Ke=0,Fe}function n1(){for(;Me!==null;)s0(Me)}function r1(){for(;Me!==null&&!RT();)s0(Me)}function s0(t){var e=a0(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?i0(t):Me=e,Kd.current=null}function i0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yx(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Me=null;return}}else if(n=Qx(n,e,Nt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Fe===0&&(Fe=5)}function Mr(t,e,n){var r=de,s=Bt.transition;try{Bt.transition=null,de=1,s1(t,e,n,r)}finally{Bt.transition=s,de=r}return null}function s1(t,e,n,r){do Us();while(sr!==null);if(ae&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(jT(t,i),t===Be&&(Me=Be=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,l0(ul,function(){return Us(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Bt.transition,Bt.transition=null;var o=de;de=1;var l=ae;ae|=4,Kd.current=null,Jx(t,n),Z_(n,t),xx(hh),hl=!!ch,hh=ch=null,t.current=n,Zx(n),CT(),ae=l,de=o,Bt.transition=i}else t.current=n;if(Na&&(Na=!1,sr=t,kl=s),i=t.pendingLanes,i===0&&(hr=null),bT(n.stateNode),At(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Al)throw Al=!1,t=Nh,Nh=null,t;return kl&1&&t.tag!==0&&Us(),i=t.pendingLanes,i&1?t===bh?no++:(no=0,bh=t):no=0,Ar(),null}function Us(){if(sr!==null){var t=Fv(kl),e=Bt.transition,n=de;try{if(Bt.transition=null,de=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,kl=0,ae&6)throw Error(U(331));var s=ae;for(ae|=4,B=t.current;B!==null;){var i=B,o=i.child;if(B.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:eo(8,p,i)}var m=p.child;if(m!==null)m.return=p,B=m;else for(;B!==null;){p=B;var v=p.sibling,k=p.return;if(Y_(p),p===h){B=null;break}if(v!==null){v.return=k,B=v;break}B=k}}}var P=i.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}B=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,B=o;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:eo(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,B=S;break e}B=i.return}}var w=t.current;for(B=w;B!==null;){o=B;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,B=A;else e:for(o=w;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ou(9,l)}}catch(b){Ne(l,l.return,b)}if(l===o){B=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,B=V;break e}B=l.return}}if(ae=s,Ar(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Jl,t)}catch{}r=!0}return r}finally{de=n,Bt.transition=e}}return!1}function _g(t,e,n){e=Ys(n,e),e=F_(t,e,1),t=cr(t,e,1),e=vt(),t!==null&&(jo(t,1,e),At(t,e))}function Ne(t,e,n){if(t.tag===3)_g(t,t,n);else for(;e!==null;){if(e.tag===3){_g(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=Ys(n,t),t=U_(e,t,1),e=cr(e,t,1),t=vt(),e!==null&&(jo(e,1,t),At(e,t));break}}e=e.return}}function i1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ke&n)===n&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>De()-Qd?zr(t,0):Gd|=n),At(t,e)}function o0(t,e){e===0&&(t.mode&1?(e=Ea,Ea<<=1,!(Ea&130023424)&&(Ea=4194304)):e=1);var n=vt();t=Ln(t,e),t!==null&&(jo(t,e,n),At(t,n))}function o1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o0(t,n)}function a1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),o0(t,n)}var a0;a0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,Gx(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,xe&&e.flags&1048576&&h_(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ka(t,e),t=e.pendingProps;var s=Hs(e,ut.current);Fs(e,n),s=Bd(null,e,r,t,s,n);var i=zd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,gl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ld(e),s.updater=iu,e.stateNode=s,s._reactInternals=e,wh(e,r,t,n),e=Th(null,e,r,!0,i,n)):(e.tag=0,xe&&i&&Pd(e),yt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ka(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=u1(r),t=Yt(r,t),s){case 0:e=Ih(null,e,r,t,n);break e;case 1:e=ug(null,e,r,t,n);break e;case 11:e=ag(null,e,r,t,n);break e;case 14:e=lg(null,e,r,Yt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),Ih(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),ug(t,e,r,s,n);case 3:e:{if(q_(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,y_(t,e),El(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ys(Error(U(423)),e),e=cg(t,e,r,n,s);break e}else if(r!==s){s=Ys(Error(U(424)),e),e=cg(t,e,r,n,s);break e}else for(bt=ur(e.stateNode.containerInfo.firstChild),Dt=e,xe=!0,Jt=null,n=m_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===s){e=jn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return v_(e),t===null&&yh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,dh(r,s)?o=null:i!==null&&dh(r,i)&&(e.flags|=32),z_(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&yh(e),null;case 13:return W_(t,e,n);case 4:return jd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),ag(t,e,r,s,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ve(_l,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===s.children&&!xt.current){e=jn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Vn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),vh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}yt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Fs(e,n),s=qt(s),r=r(s),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,s=Yt(r,e.pendingProps),s=Yt(r.type,s),lg(t,e,r,s,n);case 15:return $_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),Ka(t,e),e.tag=1,St(r)?(t=!0,gl(e)):t=!1,Fs(e,n),j_(e,r,s),wh(e,r,s,n),Th(null,e,r,!0,t,n);case 19:return H_(t,e,n);case 22:return B_(t,e,n)}throw Error(U(156,e.tag))};function l0(t,e){return Mv(t,e)}function l1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new l1(t,e,n,r)}function Zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function u1(t){if(typeof t=="function")return Zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===_d)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return qr(n.children,s,i,e);case yd:o=8,s|=8;break;case qc:return t=$t(12,n,e,s|2),t.elementType=qc,t.lanes=i,t;case Wc:return t=$t(13,n,e,s),t.elementType=Wc,t.lanes=i,t;case Hc:return t=$t(19,n,e,s),t.elementType=Hc,t.lanes=i,t;case vv:return lu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gv:o=10;break e;case yv:o=9;break e;case vd:o=11;break e;case _d:o=14;break e;case Qn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=$t(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function qr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=$t(22,t,r,e),t.elementType=vv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function c1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ef(t,e,n,r,s,i,o,l,u){return t=new c1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=$t(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(i),t}function h1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u0(t){if(!t)return wr;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(St(n))return u_(t,n,e)}return e}function c0(t,e,n,r,s,i,o,l,u){return t=ef(n,r,!0,t,s,i,o,l,u),t.context=u0(null),n=t.current,r=vt(),s=dr(n),i=Vn(r,s),i.callback=e??null,cr(n,i,s),t.current.lanes=s,jo(t,s,r),At(t,r),t}function uu(t,e,n,r){var s=e.current,i=vt(),o=dr(s);return n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(s,e,o),t!==null&&(tn(t,s,o,i),qa(t,s,o)),o}function Cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tf(t,e){wg(t,e),(t=t.alternate)&&wg(t,e)}function d1(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function nf(t){this._internalRoot=t}cu.prototype.render=nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));uu(t,e,null,null)};cu.prototype.unmount=nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){uu(null,t,null,null)}),e[On]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&qv(t)}};function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Eg(){}function f1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Cl(o);i.call(h)}}var o=c0(e,r,t,0,null,!1,!1,"",Eg);return t._reactRootContainer=o,t[On]=o.current,vo(t.nodeType===8?t.parentNode:t),Yr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=Cl(u);l.call(h)}}var u=ef(t,0,!1,null,null,!1,!1,"",Eg);return t._reactRootContainer=u,t[On]=u.current,vo(t.nodeType===8?t.parentNode:t),Yr(function(){uu(e,u,n,r)}),u}function du(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Cl(o);l.call(u)}}uu(e,o,t,s)}else o=f1(n,e,t,s,r);return Cl(o)}Uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bi(e.pendingLanes);n!==0&&(Id(e,n|1),At(e,De()),!(ae&6)&&(Xs=De()+500,Ar()))}break;case 13:Yr(function(){var r=Ln(t,1);if(r!==null){var s=vt();tn(r,t,1,s)}}),tf(t,1)}};Td=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=vt();tn(e,t,134217728,n)}tf(t,134217728)}};$v=function(t){if(t.tag===13){var e=dr(t),n=Ln(t,e);if(n!==null){var r=vt();tn(n,t,e,r)}tf(t,e)}};Bv=function(){return de};zv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};nh=function(t,e,n){switch(e){case"input":if(Qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=nu(r);if(!s)throw Error(U(90));wv(r),Qc(r,s)}}}break;case"textarea":Iv(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};Cv=Yd;Pv=Yr;var p1={usingClientEntryPoint:!1,Events:[Uo,ks,nu,kv,Rv,Yd]},ji={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m1={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dv(t),t===null?null:t.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{Jl=ba.inject(m1),pn=ba}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(e))throw Error(U(200));return h1(t,e,null,n)};Ot.createRoot=function(t,e){if(!rf(t))throw Error(U(299));var n=!1,r="",s=h0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,!1,r,s),t[On]=e.current,vo(t.nodeType===8?t.parentNode:t),new nf(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Dv(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return Yr(t)};Ot.hydrate=function(t,e,n){if(!hu(e))throw Error(U(200));return du(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!rf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=h0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c0(e,null,t,1,n??null,s,!1,i,o),t[On]=e.current,vo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new cu(e)};Ot.render=function(t,e,n){if(!hu(e))throw Error(U(200));return du(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!hu(t))throw Error(U(40));return t._reactRootContainer?(Yr(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};Ot.unstable_batchedUpdates=Yd;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return du(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function d0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0)}catch(t){console.error(t)}}d0(),dv.exports=Ot;var g1=dv.exports,Ig=g1;Bc.createRoot=Ig.createRoot,Bc.hydrateRoot=Ig.hydrateRoot;/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Tg=t=>{const e=v1(t);return e.charAt(0).toUpperCase()+e.slice(1)},f0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),_1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Y.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>Y.createElement("svg",{ref:u,...w1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:f0("lucide",s),...!i&&!_1(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,p])=>Y.createElement(h,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(t,e)=>{const n=Y.forwardRef(({className:r,...s},i)=>Y.createElement(E1,{ref:i,iconNode:e,className:f0(`lucide-${y1(Tg(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Tg(t),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],T1=ge("arrow-left",I1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],S1=ge("arrow-right",x1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],p0=ge("bug",A1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]],R1=ge("calendar-range",k1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Mh=ge("calendar",C1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],N1=ge("chevron-down",P1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],D1=ge("chevron-right",b1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],xg=ge("circle-alert",V1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],O1=ge("download",M1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],j1=ge("eraser",L1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],U1=ge("external-link",F1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Oh=ge("history",$1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],z1=ge("lock",B1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Sg=ge("log-out",q1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],H1=ge("menu",W1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],m0=ge("plus",K1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],sf=ge("refresh-cw",G1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ag=ge("save",Q1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],kg=ge("settings",Y1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],J1=ge("share-2",X1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],g0=ge("shield-check",Z1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],tS=ge("sliders-vertical",eS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],rS=ge("square-pen",nS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],y0=ge("trash-2",sS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],of=ge("triangle-alert",iS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],aS=ge("user",oS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],uS=ge("users",lS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],af=ge("x",cS),hS=({currentPage:t,onNavigate:e,isFirebaseConnected:n,user:r,onLogout:s,currentGroup:i,onGroupChange:o})=>{const[l,u]=Y.useState(!1);return f.jsxs("nav",{className:"bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50",children:[f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:f.jsxs("div",{className:"flex justify-between h-16",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsxs("div",{className:"flex-shrink-0 flex items-center text-primary cursor-pointer",onClick:()=>e("filling"),children:[f.jsx(g0,{className:"h-8 w-8 mr-2"}),f.jsx("span",{className:"font-bold text-lg hidden sm:block tracking-tight text-slate-800",children:"龍岡分隊假表管理"}),f.jsx("span",{className:"font-bold text-lg sm:hidden text-slate-800",children:"龍岡分隊"})]}),f.jsxs("div",{className:"hidden sm:ml-8 sm:flex sm:space-x-4",children:[f.jsxs("button",{onClick:()=>e("settings"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="settings"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[f.jsx(kg,{className:"w-4 h-4 mr-2"}),"配額設定"]}),f.jsxs("button",{onClick:()=>e("filling"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="filling"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[f.jsx(Mh,{className:"w-4 h-4 mr-2"}),"假表填寫"]}),f.jsxs("button",{onClick:()=>e("history"),className:`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium h-full transition-all ${t==="history"?"border-primary text-primary":"border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}`,children:[f.jsx(Oh,{className:"w-4 h-4 mr-2"}),"歷史紀錄"]})]})]}),f.jsxs("div",{className:"flex items-center space-x-2 mx-4",children:[f.jsx("button",{onClick:()=>o("A"),className:`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${i==="A"?"bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm":"bg-white border-transparent text-gray-500 hover:bg-gray-50"}`,children:"A班"}),f.jsx("button",{onClick:()=>o("B"),className:`px-3 py-1 rounded-md text-sm font-bold transition-all border-2 ${i==="B"?"bg-teal-50 border-teal-500 text-teal-700 shadow-sm":"bg-white border-transparent text-gray-500 hover:bg-gray-50"}`,children:"B班"})]}),f.jsx("div",{className:"hidden sm:flex items-center space-x-4",children:n&&r?f.jsxs("div",{className:"flex items-center pl-4 border-l border-slate-200",children:[f.jsxs("div",{className:"flex flex-col items-end mr-3",children:[f.jsx("span",{className:"text-sm font-semibold text-slate-700 max-w-[120px] truncate",children:r.displayName||"使用者"}),f.jsx("span",{className:"text-[10px] text-slate-400 max-w-[120px] truncate",children:r.email})]}),r.photoURL?f.jsx("img",{className:"h-9 w-9 rounded-full border-2 border-slate-100 shadow-sm",src:r.photoURL,alt:""}):f.jsx("div",{className:"h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200",children:f.jsx(aS,{className:"h-5 w-5 text-slate-400"})}),f.jsx("button",{onClick:s,className:"ml-4 p-2 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors",title:"登出",children:f.jsx(Sg,{className:"w-5 h-5"})})]}):f.jsx("div",{className:"flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200",children:"本機模式"})}),f.jsx("div",{className:"flex items-center sm:hidden",children:f.jsx("button",{onClick:()=>u(!l),className:"inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none",children:l?f.jsx(af,{className:"block h-6 w-6"}):f.jsx(H1,{className:"block h-6 w-6"})})})]})}),l&&f.jsxs("div",{className:"sm:hidden border-t border-slate-100 bg-white",children:[f.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[f.jsxs("button",{onClick:()=>{e("settings"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="settings"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[f.jsx(kg,{className:"w-5 h-5 mr-3"}),"配額設定"]}),f.jsxs("button",{onClick:()=>{e("filling"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="filling"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[f.jsx(Mh,{className:"w-5 h-5 mr-3"}),"假表填寫"]}),f.jsxs("button",{onClick:()=>{e("history"),u(!1)},className:`w-full flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors ${t==="history"?"bg-blue-50 border-primary text-primary":"border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"}`,children:[f.jsx(Oh,{className:"w-5 h-5 mr-3"}),"歷史紀錄"]})]}),f.jsx("div",{className:"pt-4 pb-4 border-t border-slate-200 bg-slate-50",children:n&&r?f.jsx("div",{className:"flex justify-end px-4",children:f.jsxs("button",{onClick:s,className:"flex items-center px-4 py-2 rounded-md bg-white text-slate-600 hover:text-red-600 shadow-sm border border-slate-200 transition-colors",title:"登出",children:[f.jsx("span",{className:"mr-2 font-medium",children:"登出"}),f.jsx(Sg,{className:"w-5 h-5"})]})}):f.jsx("div",{className:"px-4 py-2",children:f.jsx("div",{className:"text-center text-sm text-amber-700 bg-amber-100 py-1 rounded",children:"目前為本機離線模式"})})})]})]})};var gt=(t=>(t.Special1="特1",t.Special2="特2",t.Special3="特3",t.Comp1="補1",t.Comp2="補2",t.Comp3="補3",t.Comp4="補4",t.Rest1="休1",t.Rest2="休2",t.Rest3="休3",t.Rest4="休4",t.Personal1="身1",t.Personal2="身2",t.Overnight="外宿",t))(gt||{});const xc=(t,e)=>({monthKey:t,group:e,firstWorkDay:"",members:[],dailyQuotas:{},shiftExceptions:{},schemaVersion:2}),v0=[gt.Special1,gt.Special2,gt.Special3,gt.Comp1,gt.Comp2,gt.Comp3,gt.Comp4,gt.Rest1,gt.Rest2,gt.Rest3,gt.Rest4,gt.Personal1,gt.Personal2],dS=[gt.Overnight],fS=[...v0,...dS],_0=["日","一","二","三","四","五","六"],Lh=t=>new Date(t.getFullYear(),t.getMonth(),1),w0=t=>new Date(t.getFullYear(),t.getMonth()+1,0),jh=({start:t,end:e})=>{const n=[],r=new Date(t);for(;r<=e;)n.push(new Date(r)),r.setDate(r.getDate()+1);return n},Xn=(t,e)=>{if(e==="yyyy-MM-dd"){const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${s}`}return e==="d"?String(t.getDate()):e==="EEE"?_0[t.getDay()]:""},E0=t=>t.getDay(),Pl=t=>{const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)},pS=(t,e)=>{const n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((n-r)/(1e3*60*60*24))},mS=(t,e)=>{const n=new Date(t);return n.setDate(n.getDate()+e),n},I0=(t,e,n={})=>n[t]!==void 0?n[t]:e?pS(Pl(t),Pl(e))%2===0:!1,gS=(t,e)=>e>0&&t>e,kr="shift_scheduler",lf=(t,e)=>{const n=String(t).padStart(4,"0"),r=String(e+1).padStart(2,"0");return`${n}-${r}`},uf=(t,e)=>`settings_${t}_${e}`,cf=(t,e)=>`${t}_${e}`,T0=(t,e)=>`${t}_${e}`,yS=t=>{const[e,n]=t.split("-").map(Number),r=new Date(e,(n||1)-1,1);return r.setMonth(r.getMonth()-1),lf(r.getFullYear(),r.getMonth())};var Rg={};/**
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
 */const x0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},S0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(v=64)),r.push(n[p],n[m],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new _S;const v=i<<2|l>>4;if(r.push(v),h!==64){const k=l<<4&240|h>>2;if(r.push(k),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wS=function(t){const e=x0(t);return S0.encodeByteArray(e,!0)},Nl=function(t){return wS(t).replace(/\./g,"")},A0=function(t){try{return S0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ES(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IS=()=>ES().__FIREBASE_DEFAULTS__,TS=()=>{if(typeof process>"u"||typeof Rg>"u")return;const t=Rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&A0(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return IS()||TS()||xS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},k0=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},SS=t=>{const e=k0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},R0=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},C0=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class AS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function kS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nl(JSON.stringify(n)),Nl(JSON.stringify(o)),""].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function CS(){var t;const e=(t=fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function P0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bS(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DS(){return!CS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N0(){try{return typeof indexedDB=="object"}catch{return!1}}function b0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function VS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const MS="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MS,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ln(s,l,r)}}function OS(t,e){return t.replace(LS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LS=/\{\$([^}]+)}/g;function jS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Cg(i)&&Cg(o)){if(!ko(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Cg(t){return t!==null&&typeof t=="object"}/**
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
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function FS(t,e){const n=new US(t,e);return n.subscribe.bind(n)}class US{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$S(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $S(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
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
 */const BS=1e3,zS=2,qS=4*60*60*1e3,WS=.5;function Pg(t,e=BS,n=zS){const r=e*Math.pow(n,t),s=Math.round(WS*r*(Math.random()-.5)*2);return Math.min(qS,r+s)}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class HS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GS(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KS(t){return t===Or?void 0:t}function GS(t){return t.instantiationMode==="EAGER"}/**
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
 */class QS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const YS={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},XS=ie.INFO,JS={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},ZS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=JS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=XS,this._logHandler=ZS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const eA=(t,e)=>e.some(n=>t instanceof n);let Ng,bg;function tA(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nA(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D0=new WeakMap,Fh=new WeakMap,V0=new WeakMap,Ac=new WeakMap,hf=new WeakMap;function rA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&D0.set(n,t)}).catch(()=>{}),hf.set(e,t),e}function sA(t){if(Fh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fh.set(t,e)}let Uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||V0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iA(t){Uh=t(Uh)}function oA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kc(this),e,...n);return V0.set(r,e.sort?e.sort():[e]),pr(r)}:nA().includes(t)?function(...e){return t.apply(kc(this),e),pr(D0.get(this))}:function(...e){return pr(t.apply(kc(this),e))}}function aA(t){return typeof t=="function"?oA(t):(t instanceof IDBTransaction&&sA(t),eA(t,tA())?new Proxy(t,Uh):t)}function pr(t){if(t instanceof IDBRequest)return rA(t);if(Ac.has(t))return Ac.get(t);const e=aA(t);return e!==t&&(Ac.set(t,e),hf.set(e,t)),e}const kc=t=>hf.get(t);function M0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const lA=["get","getKey","getAll","getAllKeys","count"],uA=["put","add","delete","clear"],Rc=new Map;function Dg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=uA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Rc.set(e,i),i}iA(t=>({...t,get:(e,n,r)=>Dg(e,n)||t.get(e,n,r),has:(e,n)=>!!Dg(e,n)||t.has(e,n)}));/**
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
 */class cA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",Vg="0.10.13";/**
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
 */const Fn=new pu("@firebase/app"),dA="@firebase/app-compat",fA="@firebase/analytics-compat",pA="@firebase/analytics",mA="@firebase/app-check-compat",gA="@firebase/app-check",yA="@firebase/auth",vA="@firebase/auth-compat",_A="@firebase/database",wA="@firebase/data-connect",EA="@firebase/database-compat",IA="@firebase/functions",TA="@firebase/functions-compat",xA="@firebase/installations",SA="@firebase/installations-compat",AA="@firebase/messaging",kA="@firebase/messaging-compat",RA="@firebase/performance",CA="@firebase/performance-compat",PA="@firebase/remote-config",NA="@firebase/remote-config-compat",bA="@firebase/storage",DA="@firebase/storage-compat",VA="@firebase/firestore",MA="@firebase/vertexai-preview",OA="@firebase/firestore-compat",LA="firebase",jA="10.14.1";/**
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
 */const Bh="[DEFAULT]",FA={[$h]:"fire-core",[dA]:"fire-core-compat",[pA]:"fire-analytics",[fA]:"fire-analytics-compat",[gA]:"fire-app-check",[mA]:"fire-app-check-compat",[yA]:"fire-auth",[vA]:"fire-auth-compat",[_A]:"fire-rtdb",[wA]:"fire-data-connect",[EA]:"fire-rtdb-compat",[IA]:"fire-fn",[TA]:"fire-fn-compat",[xA]:"fire-iid",[SA]:"fire-iid-compat",[AA]:"fire-fcm",[kA]:"fire-fcm-compat",[RA]:"fire-perf",[CA]:"fire-perf-compat",[PA]:"fire-rc",[NA]:"fire-rc-compat",[bA]:"fire-gcs",[DA]:"fire-gcs-compat",[VA]:"fire-fst",[OA]:"fire-fst-compat",[MA]:"fire-vertex","fire-js":"fire-js",[LA]:"fire-js-all"};/**
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
 */const bl=new Map,UA=new Map,zh=new Map;function Mg(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(zh.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;zh.set(e,t);for(const n of bl.values())Mg(n,t);for(const n of UA.values())Mg(n,t);return!0}function ls(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
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
 */const $A={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new as("app","Firebase",$A);/**
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
 */class BA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const ui=jA;function O0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mr.create("bad-app-name",{appName:String(s)});if(n||(n=R0()),!n)throw mr.create("no-options");const i=bl.get(s);if(i){if(ko(n,i.options)&&ko(r,i.config))return i;throw mr.create("duplicate-app",{appName:s})}const o=new QS(s);for(const u of zh.values())o.addComponent(u);const l=new BA(n,r,o);return bl.set(s,l),l}function df(t=Bh){const e=bl.get(t);if(!e&&t===Bh&&R0())return O0();if(!e)throw mr.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let s=(r=FA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(l.join(" "));return}En(new on(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zA="firebase-heartbeat-database",qA=1,Ro="firebase-heartbeat-store";let Cc=null;function L0(){return Cc||(Cc=M0(zA,qA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),Cc}async function WA(t){try{const n=(await L0()).transaction(Ro),r=await n.objectStore(Ro).get(j0(t));return await n.done,r}catch(e){if(e instanceof ln)Fn.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function Og(t,e){try{const r=(await L0()).transaction(Ro,"readwrite");await r.objectStore(Ro).put(e,j0(t)),await r.done}catch(n){if(n instanceof ln)Fn.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function j0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HA=1024,KA=30*24*60*60*1e3;class GA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=KA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lg(),{heartbeatsToSend:r,unsentEntries:s}=QA(this._heartbeatsCache.heartbeats),i=Nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function Lg(){return new Date().toISOString().substring(0,10)}function QA(t,e=HA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N0()?b0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jg(t){return Nl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XA(t){En(new on("platform-logger",e=>new cA(e),"PRIVATE")),En(new on("heartbeat",e=>new GA(e),"PRIVATE")),zt($h,Vg,t),zt($h,Vg,"esm2017"),zt("fire-js","")}XA("");var JA="firebase",ZA="10.14.1";/**
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
 */zt(JA,ZA,"app");var Fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,F0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function E(){}E.prototype=y.prototype,_.D=y.prototype,_.prototype=new E,_.prototype.constructor=_,_.C=function(T,x,R){for(var I=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)I[Se-2]=arguments[Se];return y.prototype[x].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,E){E||(E=0);var T=Array(16);if(typeof y=="string")for(var x=0;16>x;++x)T[x]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(x=0;16>x;++x)T[x]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=_.g[0],E=_.g[1],x=_.g[2];var R=_.g[3],I=y+(R^E&(x^R))+T[0]+3614090360&4294967295;y=E+(I<<7&4294967295|I>>>25),I=R+(x^y&(E^x))+T[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=x+(E^R&(y^E))+T[2]+606105819&4294967295,x=R+(I<<17&4294967295|I>>>15),I=E+(y^x&(R^y))+T[3]+3250441966&4294967295,E=x+(I<<22&4294967295|I>>>10),I=y+(R^E&(x^R))+T[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=R+(x^y&(E^x))+T[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=x+(E^R&(y^E))+T[6]+2821735955&4294967295,x=R+(I<<17&4294967295|I>>>15),I=E+(y^x&(R^y))+T[7]+4249261313&4294967295,E=x+(I<<22&4294967295|I>>>10),I=y+(R^E&(x^R))+T[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=R+(x^y&(E^x))+T[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=x+(E^R&(y^E))+T[10]+4294925233&4294967295,x=R+(I<<17&4294967295|I>>>15),I=E+(y^x&(R^y))+T[11]+2304563134&4294967295,E=x+(I<<22&4294967295|I>>>10),I=y+(R^E&(x^R))+T[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=R+(x^y&(E^x))+T[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=x+(E^R&(y^E))+T[14]+2792965006&4294967295,x=R+(I<<17&4294967295|I>>>15),I=E+(y^x&(R^y))+T[15]+1236535329&4294967295,E=x+(I<<22&4294967295|I>>>10),I=y+(x^R&(E^x))+T[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=R+(E^x&(y^E))+T[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=x+(y^E&(R^y))+T[11]+643717713&4294967295,x=R+(I<<14&4294967295|I>>>18),I=E+(R^y&(x^R))+T[0]+3921069994&4294967295,E=x+(I<<20&4294967295|I>>>12),I=y+(x^R&(E^x))+T[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=R+(E^x&(y^E))+T[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=x+(y^E&(R^y))+T[15]+3634488961&4294967295,x=R+(I<<14&4294967295|I>>>18),I=E+(R^y&(x^R))+T[4]+3889429448&4294967295,E=x+(I<<20&4294967295|I>>>12),I=y+(x^R&(E^x))+T[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=R+(E^x&(y^E))+T[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=x+(y^E&(R^y))+T[3]+4107603335&4294967295,x=R+(I<<14&4294967295|I>>>18),I=E+(R^y&(x^R))+T[8]+1163531501&4294967295,E=x+(I<<20&4294967295|I>>>12),I=y+(x^R&(E^x))+T[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=R+(E^x&(y^E))+T[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=x+(y^E&(R^y))+T[7]+1735328473&4294967295,x=R+(I<<14&4294967295|I>>>18),I=E+(R^y&(x^R))+T[12]+2368359562&4294967295,E=x+(I<<20&4294967295|I>>>12),I=y+(E^x^R)+T[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=R+(y^E^x)+T[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=x+(R^y^E)+T[11]+1839030562&4294967295,x=R+(I<<16&4294967295|I>>>16),I=E+(x^R^y)+T[14]+4259657740&4294967295,E=x+(I<<23&4294967295|I>>>9),I=y+(E^x^R)+T[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=R+(y^E^x)+T[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=x+(R^y^E)+T[7]+4139469664&4294967295,x=R+(I<<16&4294967295|I>>>16),I=E+(x^R^y)+T[10]+3200236656&4294967295,E=x+(I<<23&4294967295|I>>>9),I=y+(E^x^R)+T[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=R+(y^E^x)+T[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=x+(R^y^E)+T[3]+3572445317&4294967295,x=R+(I<<16&4294967295|I>>>16),I=E+(x^R^y)+T[6]+76029189&4294967295,E=x+(I<<23&4294967295|I>>>9),I=y+(E^x^R)+T[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=R+(y^E^x)+T[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=x+(R^y^E)+T[15]+530742520&4294967295,x=R+(I<<16&4294967295|I>>>16),I=E+(x^R^y)+T[2]+3299628645&4294967295,E=x+(I<<23&4294967295|I>>>9),I=y+(x^(E|~R))+T[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=R+(E^(y|~x))+T[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=x+(y^(R|~E))+T[14]+2878612391&4294967295,x=R+(I<<15&4294967295|I>>>17),I=E+(R^(x|~y))+T[5]+4237533241&4294967295,E=x+(I<<21&4294967295|I>>>11),I=y+(x^(E|~R))+T[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=R+(E^(y|~x))+T[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=x+(y^(R|~E))+T[10]+4293915773&4294967295,x=R+(I<<15&4294967295|I>>>17),I=E+(R^(x|~y))+T[1]+2240044497&4294967295,E=x+(I<<21&4294967295|I>>>11),I=y+(x^(E|~R))+T[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=R+(E^(y|~x))+T[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=x+(y^(R|~E))+T[6]+2734768916&4294967295,x=R+(I<<15&4294967295|I>>>17),I=E+(R^(x|~y))+T[13]+1309151649&4294967295,E=x+(I<<21&4294967295|I>>>11),I=y+(x^(E|~R))+T[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=R+(E^(y|~x))+T[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=x+(y^(R|~E))+T[2]+718787259&4294967295,x=R+(I<<15&4294967295|I>>>17),I=E+(R^(x|~y))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(x+(I<<21&4294967295|I>>>11))&4294967295,_.g[2]=_.g[2]+x&4294967295,_.g[3]=_.g[3]+R&4294967295}r.prototype.u=function(_,y){y===void 0&&(y=_.length);for(var E=y-this.blockSize,T=this.B,x=this.h,R=0;R<y;){if(x==0)for(;R<=E;)s(this,_,R),R+=this.blockSize;if(typeof _=="string"){for(;R<y;)if(T[x++]=_.charCodeAt(R++),x==this.blockSize){s(this,T),x=0;break}}else for(;R<y;)if(T[x++]=_[R++],x==this.blockSize){s(this,T),x=0;break}}this.h=x,this.o+=y},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;var E=8*this.o;for(y=_.length-8;y<_.length;++y)_[y]=E&255,E/=256;for(this.u(_),_=Array(16),y=E=0;4>y;++y)for(var T=0;32>T;T+=8)_[E++]=this.g[y]>>>T&255;return _};function i(_,y){var E=l;return Object.prototype.hasOwnProperty.call(E,_)?E[_]:E[_]=y(_)}function o(_,y){this.h=y;for(var E=[],T=!0,x=_.length-1;0<=x;x--){var R=_[x]|0;T&&R==y||(E[x]=R,T=!1)}this.g=E}var l={};function u(_){return-128<=_&&128>_?i(_,function(y){return new o([y|0],0>y?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return O(h(-_));for(var y=[],E=1,T=0;_>=E;T++)y[T]=_/E|0,E*=4294967296;return new o(y,0)}function p(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return O(p(_.substring(1),y));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),T=m,x=0;x<_.length;x+=8){var R=Math.min(8,_.length-x),I=parseInt(_.substring(x,x+R),y);8>R?(R=h(Math.pow(y,R)),T=T.j(R).add(h(I))):(T=T.j(E),T=T.add(h(I)))}return T}var m=u(0),v=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var _=0,y=1,E=0;E<this.g.length;E++){var T=this.i(E);_+=(0<=T?T:4294967296+T)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(N(this))return"-"+O(this).toString(_);for(var y=h(Math.pow(_,6)),E=this,T="";;){var x=V(E,y).g;E=S(E,x.j(y));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(_);if(E=x,P(E))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function N(_){return _.h==-1}t.l=function(_){return _=S(this,_),N(_)?-1:P(_)?0:1};function O(_){for(var y=_.g.length,E=[],T=0;T<y;T++)E[T]=~_.g[T];return new o(E,~_.h).add(v)}t.abs=function(){return N(this)?O(this):this},t.add=function(_){for(var y=Math.max(this.g.length,_.g.length),E=[],T=0,x=0;x<=y;x++){var R=T+(this.i(x)&65535)+(_.i(x)&65535),I=(R>>>16)+(this.i(x)>>>16)+(_.i(x)>>>16);T=I>>>16,R&=65535,I&=65535,E[x]=I<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(_,y){return _.add(O(y))}t.j=function(_){if(P(this)||P(_))return m;if(N(this))return N(_)?O(this).j(O(_)):O(O(this).j(_));if(N(_))return O(this.j(O(_)));if(0>this.l(k)&&0>_.l(k))return h(this.m()*_.m());for(var y=this.g.length+_.g.length,E=[],T=0;T<2*y;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var x=0;x<_.g.length;x++){var R=this.i(T)>>>16,I=this.i(T)&65535,Se=_.i(x)>>>16,W=_.i(x)&65535;E[2*T+2*x]+=I*W,w(E,2*T+2*x),E[2*T+2*x+1]+=R*W,w(E,2*T+2*x+1),E[2*T+2*x+1]+=I*Se,w(E,2*T+2*x+1),E[2*T+2*x+2]+=R*Se,w(E,2*T+2*x+2)}for(T=0;T<y;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=y;T<2*y;T++)E[T]=0;return new o(E,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function A(_,y){this.g=_,this.h=y}function V(_,y){if(P(y))throw Error("division by zero");if(P(_))return new A(m,m);if(N(_))return y=V(O(_),y),new A(O(y.g),O(y.h));if(N(y))return y=V(_,O(y)),new A(O(y.g),y.h);if(30<_.g.length){if(N(_)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=v,T=y;0>=T.l(_);)E=b(E),T=b(T);var x=L(E,1),R=L(T,1);for(T=L(T,2),E=L(E,2);!P(T);){var I=R.add(T);0>=I.l(_)&&(x=x.add(E),R=I),T=L(T,1),E=L(E,1)}return y=S(_,x.j(y)),new A(x,y)}for(x=m;0<=_.l(y);){for(E=Math.max(1,Math.floor(_.m()/y.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(E),I=R.j(y);N(I)||0<I.l(_);)E-=T,R=h(E),I=R.j(y);P(R)&&(R=v),x=x.add(R),_=S(_,I)}return new A(x,_)}t.A=function(_){return V(this,_).h},t.and=function(_){for(var y=Math.max(this.g.length,_.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)&_.i(T);return new o(E,this.h&_.h)},t.or=function(_){for(var y=Math.max(this.g.length,_.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)|_.i(T);return new o(E,this.h|_.h)},t.xor=function(_){for(var y=Math.max(this.g.length,_.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)^_.i(T);return new o(E,this.h^_.h)};function b(_){for(var y=_.g.length+1,E=[],T=0;T<y;T++)E[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(E,_.h)}function L(_,y){var E=y>>5;y%=32;for(var T=_.g.length-E,x=[],R=0;R<T;R++)x[R]=0<y?_.i(R+E)>>>y|_.i(R+E+1)<<32-y:_.i(R+E);return new o(x,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,F0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Wr=o}).apply(typeof Fg<"u"?Fg:typeof self<"u"?self:typeof window<"u"?window:{});var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U0,qi,$0,Xa,qh,B0,z0,q0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Da=="object"&&Da];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function v(a,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,v.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,D){for(var $=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)$[ye-2]=arguments[ye];return c.prototype[C].apply(g,$)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const C=a.length||0,D=g.length||0;a.length=C+D;for(let $=0;$<D;$++)a[C+$]=g[$]}else a.push(g)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var b=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function L(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function _(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let D=0;D<E.length;D++)d=E[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function x(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=H;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Se{constructor(){this.h=this.g=null}add(c,d){const g=W.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var W=new S(()=>new le,a=>a.reset());class le{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let se,F=!1,H=new Se,q=()=>{const a=l.Promise.resolve(void 0);se=()=>{a.then(pe)}};var pe=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){R(d)}var c=W;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}F=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Je=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Ht(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(b){e:{try{V(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ht.aa.h.call(this)}}P(Ht,Te);var Rt={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),hs=0;function K(a,c,d,g,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=C,this.key=++hs,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ze(a){this.src=a,this.g={},this.h=0}Ze.prototype.add=function(a,c,d,g,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=ft(a,c,g,C);return-1<$?(c=a[$],d||(c.fa=!1)):(c=new K(c,this.src,D,!!g,C),c.fa=d,a.push(c)),c};function dt(a,c){var d=c.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=C)&&Array.prototype.splice.call(g,C,1),D&&(te(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,c,d,g){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return C}return-1}var un="closure_lm_"+(1e6*Math.random()|0),Kt={};function ds(a,c,d,g,C){if(Array.isArray(c)){for(var D=0;D<c.length;D++)ds(a,c[D],d,g,C);return null}return d=vp(d),a&&a[Ct]?a.K(c,d,h(g)?!!g.capture:!1,C):Jo(a,c,d,!1,g,C)}function Jo(a,c,d,g,C,D){if(!c)throw Error("Invalid event type");var $=h(C)?!!C.capture:!!C,ye=Vu(a);if(ye||(a[un]=ye=new Ze(a)),d=ye.add(c,d,g,$,D),d.proxy)return d;if(g=bu(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Je||(C=$),C===void 0&&(C=!1),a.addEventListener(c.toString(),g,C);else if(a.attachEvent)a.attachEvent(yp(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function bu(){function a(d){return c.call(a.src,a.listener,d)}const c=mI;return a}function gp(a,c,d,g,C){if(Array.isArray(c))for(var D=0;D<c.length;D++)gp(a,c[D],d,g,C);else g=h(g)?!!g.capture:!!g,d=vp(d),a&&a[Ct]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=ft(D,d,g,C),-1<d&&(te(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Vu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ft(c,d,g,C)),(d=-1<a?c[a]:null)&&Du(d))}function Du(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ct])dt(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(yp(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Vu(c))?(dt(d,a),d.h==0&&(d.src=null,c[un]=null)):te(a)}}}function yp(a){return a in Kt?Kt[a]:Kt[a]="on"+a}function mI(a,c){if(a.da)a=!0;else{c=new Ht(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&Du(a),a=d.call(g,c)}return a}function Vu(a){return a=a[un],a instanceof Ze?a:null}var Mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function vp(a){return typeof a=="function"?a:(a[Mu]||(a[Mu]=function(c){return a.handleEvent(c)}),a[Mu])}function et(){he.call(this),this.i=new Ze(this),this.M=this,this.F=null}P(et,he),et.prototype[Ct]=!0,et.prototype.removeEventListener=function(a,c,d,g){gp(this,a,c,d,g)};function pt(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var C=c;c=new Te(g,a),T(c,C)}if(C=!0,d)for(var D=d.length-1;0<=D;D--){var $=c.g=d[D];C=Zo($,g,!0,c)&&C}if($=c.g=a,C=Zo($,g,!0,c)&&C,C=Zo($,g,!1,c)&&C,d)for(D=0;D<d.length;D++)$=c.g=d[D],C=Zo($,g,!1,c)&&C}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)te(d[g]);delete a.g[c],a.h--}}this.F=null},et.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},et.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Zo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,D=0;D<c.length;++D){var $=c[D];if($&&!$.da&&$.capture==d){var ye=$.listener,ze=$.ha||$.src;$.fa&&dt(a.i,$),C=ye.call(ze,g)!==!1&&C}}return C&&!g.defaultPrevented}function _p(a,c,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function wp(a){a.g=_p(()=>{a.g=null,a.i&&(a.i=!1,wp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class gI extends he{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:wp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(a){he.call(this),this.h=a,this.g={}}P(vi,he);var Ep=[];function Ip(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&Du(c)},a),a.g={}}vi.prototype.N=function(){vi.aa.N.call(this),Ip(this)},vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ou=l.JSON.stringify,yI=l.JSON.parse,vI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Lu(){}Lu.prototype.h=null;function Tp(a){return a.h||(a.h=a.i())}function xp(){}var _i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ju(){Te.call(this,"d")}P(ju,Te);function Fu(){Te.call(this,"c")}P(Fu,Te);var Pr={},Sp=null;function ea(){return Sp=Sp||new et}Pr.La="serverreachability";function Ap(a){Te.call(this,Pr.La,a)}P(Ap,Te);function wi(a){const c=ea();pt(c,new Ap(c))}Pr.STAT_EVENT="statevent";function kp(a,c){Te.call(this,Pr.STAT_EVENT,a),this.stat=c}P(kp,Te);function mt(a){const c=ea();pt(c,new kp(c,a))}Pr.Ma="timingevent";function Rp(a,c){Te.call(this,Pr.Ma,a),this.size=c}P(Rp,Te);function Ei(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ii(){this.g=!0}Ii.prototype.xa=function(){this.g=!1};function _I(a,c,d,g,C,D){a.info(function(){if(a.g)if(D)for(var $="",ye=D.split("&"),ze=0;ze<ye.length;ze++){var ue=ye[ze].split("=");if(1<ue.length){var tt=ue[0];ue=ue[1];var nt=tt.split("_");$=2<=nt.length&&nt[1]=="type"?$+(tt+"="+ue+"&"):$+(tt+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+c+`
`+d+`
`+$})}function wI(a,c,d,g,C,D,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+c+`
`+d+`
`+D+" "+$})}function fs(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+II(a,d)+(g?" "+g:"")})}function EI(a,c){a.info(function(){return"TIMEOUT: "+c})}Ii.prototype.info=function(){};function II(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<C.length;$++)C[$]=""}}}}return Ou(d)}catch{return c}}var ta={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Uu;function na(){}P(na,Lu),na.prototype.g=function(){return new XMLHttpRequest},na.prototype.i=function(){return{}},Uu=new na;function qn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pp}function Pp(){this.i=null,this.g="",this.h=!1}var Np={},$u={};function Bu(a,c,d){a.L=1,a.v=oa(xn(c)),a.m=d,a.P=!0,bp(a,null)}function bp(a,c){a.F=Date.now(),ra(a),a.A=xn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Hp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Pp,a.g=cm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new gI(v(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ep[0]=C.toString()),C=Ep);for(var D=0;D<C.length;D++){var $=ds(d,C[D],g||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),wi(),_I(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Sn(a)==3?c.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const nt=Sn(this.g);var c=this.g.Ba();const gs=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Zp(this.g)))){this.J||nt!=4||c==7||(c==8||0>=gs?wi(3):wi(2)),zu(this);var d=this.g.Z();this.X=d;t:if(Dp(this)){var g=Zp(this.g);a="";var C=g.length,D=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),Ti(this);var $="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==C-1)});g.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,wI(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,ze=this.g;if((ye=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ye)){var ue=ye;break t}}ue=null}if(d=ue)fs(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qu(this,d);else{this.o=!1,this.s=3,mt(12),Nr(this),Ti(this);break e}}if(this.P){d=!0;let Gt;for(;!this.J&&this.C<$.length;)if(Gt=TI(this,$),Gt==$u){nt==4&&(this.s=4,mt(14),d=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Np){this.s=4,mt(15),fs(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else fs(this.i,this.l,Gt,null),qu(this,Gt);if(Dp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||$.length!=0||this.h.h||(this.s=1,mt(16),d=!1),this.o=this.o&&d,!d)fs(this.i,this.l,$,"[Invalid Chunked Response]"),Nr(this),Ti(this);else if(0<$.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Yu(tt),tt.M=!0,mt(11))}}else fs(this.i,this.l,$,null),qu(this,$);nt==4&&Nr(this),this.o&&!this.J&&(nt==4?om(this.j,this):(this.o=!1,ra(this)))}else UI(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Nr(this),Ti(this)}}}catch{}finally{}};function Dp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function TI(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?$u:(d=Number(c.substring(d,g)),isNaN(d)?Np:(g+=1,g+d>c.length?$u:(c=c.slice(g,g+d),a.C=g+d,c)))}qn.prototype.cancel=function(){this.J=!0,Nr(this)};function ra(a){a.S=Date.now()+a.I,Vp(a,a.I)}function Vp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ei(v(a.ba,a),c)}function zu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(EI(this.i,this.A),this.L!=2&&(wi(),mt(17)),Nr(this),this.s=2,Ti(this)):Vp(this,this.S-a)};function Ti(a){a.j.G==0||a.J||om(a.j,a)}function Nr(a){zu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Ip(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function qu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Wu(d.h,a))){if(!a.K&&Wu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)da(d),ca(d);else break e;Qu(d),mt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ei(v(d.Za,d),6e3));if(1>=Lp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Dr(d,11)}else if((a.K||d.g==a)&&da(d),!w(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ue=C[c];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const tt=ue[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=ue[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const gs=ue[5];gs!=null&&typeof gs=="number"&&0<gs&&(g=1.5*gs,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Gt=a.g;if(Gt){const pa=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pa){var D=g.h;D.g||pa.indexOf("spdy")==-1&&pa.indexOf("quic")==-1&&pa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Hu(D,D.h),D.h=null))}if(g.D){const Xu=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xu&&(g.ya=Xu,_e(g.I,g.D,Xu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var $=a;if(g.qa=um(g,g.J?g.ia:null,g.W),$.K){jp(g.h,$);var ye=$,ze=g.L;ze&&(ye.I=ze),ye.B&&(zu(ye),ra(ye)),g.g=$}else sm(g);0<d.i.length&&ha(d)}else ue[0]!="stop"&&ue[0]!="close"||Dr(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Dr(d,7):Gu(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}wi(4)}catch{}}var xI=class{constructor(a,c){this.g=a,this.map=c}};function Mp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Op(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lp(a){return a.h?1:a.g?a.g.size:0}function Wu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Hu(a,c){a.g?a.g.add(c):a.h=c}function jp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Mp.prototype.cancel=function(){if(this.i=Fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Fp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function SI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function AI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function Up(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=AI(a),g=SI(a),C=g.length,D=0;D<C;D++)c.call(void 0,g[D],d&&d[D],a)}var $p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kI(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var D=a[d].substring(0,g);C=a[d].substring(g+1)}else D=a[d];c(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof br){this.h=a.h,sa(this,a.j),this.o=a.o,this.g=a.g,ia(this,a.s),this.l=a.l;var c=a.i,d=new Ai;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Bp(this,d),this.m=a.m}else a&&(c=String(a).match($p))?(this.h=!1,sa(this,c[1]||"",!0),this.o=xi(c[2]||""),this.g=xi(c[3]||"",!0),ia(this,c[4]),this.l=xi(c[5]||"",!0),Bp(this,c[6]||"",!0),this.m=xi(c[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}br.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Si(c,zp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Si(c,zp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Si(d,d.charAt(0)=="/"?PI:CI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Si(d,bI)),a.join("")};function xn(a){return new br(a)}function sa(a,c,d){a.j=d?xi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ia(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Bp(a,c,d){c instanceof Ai?(a.i=c,DI(a.i,a.h)):(d||(c=Si(c,NI)),a.i=new Ai(c,a.h))}function _e(a,c,d){a.i.set(c,d)}function oa(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Si(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,RI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function RI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zp=/[#\/\?@]/g,CI=/[#\?:]/g,PI=/[#\?]/g,NI=/[#\?@]/g,bI=/#/g;function Ai(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&kI(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ai.prototype,t.add=function(a,c){Wn(this),this.i=null,a=ps(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function qp(a,c){Wn(a),c=ps(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Wp(a,c){return Wn(a),c=ps(a,c),a.g.has(c)}t.forEach=function(a,c){Wn(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(c,C,g,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const C=a[g];for(let D=0;D<C.length;D++)d.push(c[g])}return d},t.V=function(a){Wn(this);let c=[];if(typeof a=="string")Wp(this,a)&&(c=c.concat(this.g.get(ps(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Wn(this),this.i=null,a=ps(this,a),Wp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Hp(a,c,d){qp(a,c),0<d.length&&(a.i=null,a.g.set(ps(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var C=D;$[g]!==""&&(C+="="+encodeURIComponent(String($[g]))),a.push(C)}}return this.i=a.join("&")};function ps(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function DI(a,c){c&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(qp(this,g),Hp(this,C,d))},a)),a.j=c}function VI(a,c){const d=new Ii;if(l.Image){const g=new Image;g.onload=k(Hn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=k(Hn,d,"TestLoadImage: error",!1,c,g),g.onabort=k(Hn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=k(Hn,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function MI(a,c){const d=new Ii,g=new AbortController,C=setTimeout(()=>{g.abort(),Hn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?Hn(d,"TestPingServer: ok",!0,c):Hn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Hn(d,"TestPingServer: error",!1,c)})}function Hn(a,c,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function OI(){this.g=new vI}function LI(a,c,d){const g=d||"";try{Up(a,function(C,D){let $=C;h(C)&&($=Ou(C)),c.push(g+D+"="+encodeURIComponent($))})}catch(C){throw c.push(g+"type="+encodeURIComponent("_badmap")),C}}function aa(a){this.l=a.Ub||null,this.j=a.eb||!1}P(aa,Lu),aa.prototype.g=function(){return new la(this.l,this.j)},aa.prototype.i=function(a){return function(){return a}}({});function la(a,c){et.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(la,et),t=la.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ki(this):Ri(this),this.readyState==3&&Kp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ki(this))},t.Qa=function(a){this.g&&(this.response=a,ki(this))},t.ga=function(){this.g&&ki(this)};function ki(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ri(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(la.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gp(a){let c="";return L(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Ku(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Gp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):_e(a,c,d))}function Pe(a){et.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Pe,et);var jI=/^https?$/i,FI=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Uu.g(),this.v=this.o?Tp(this.o):Tp(Uu),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Qp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(FI,c,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of d)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Qp(this,D)}};function Qp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Yp(a),ua(a)}function Yp(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pt(this,"complete"),pt(this,"abort"),ua(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ua(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Xp(this):this.bb())},t.bb=function(){Xp(this)};function Xp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)_p(a.Ea,0,a);else if(pt(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=$===0){var C=String(a.D).match($p)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!jI.test(C?C.toLowerCase():"")}d=g}if(d)pt(a,"complete"),pt(a,"success");else{a.m=6;try{var D=2<Sn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Yp(a)}}finally{ua(a)}}}}function ua(a,c){if(a.g){Jp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||pt(a,"ready");try{d.onreadystatechange=g}catch{}}}function Jp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),yI(c)}};function Zp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function UI(a){const c={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=x(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[C]||[];c[C]=D,D.push(d)}_(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ci(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function em(a){this.Aa=0,this.i=[],this.j=new Ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ci("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ci("baseRetryDelayMs",5e3,a),this.cb=Ci("retryDelaySeedMs",1e4,a),this.Wa=Ci("forwardChannelMaxRetries",2,a),this.wa=Ci("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mp(a&&a.concurrentRequestLimit),this.Da=new OI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=em.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){mt(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=um(this,null,this.W),ha(this)};function Gu(a){if(tm(a),a.G==3){var c=a.U++,d=xn(a.I);if(_e(d,"SID",a.K),_e(d,"RID",c),_e(d,"TYPE","terminate"),Pi(a,d),c=new qn(a,a.j,c),c.L=2,c.v=oa(xn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=cm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ra(c)}lm(a)}function ca(a){a.g&&(Yu(a),a.g.cancel(),a.g=null)}function tm(a){ca(a),a.u&&(l.clearTimeout(a.u),a.u=null),da(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ha(a){if(!Op(a.h)&&!a.s){a.s=!0;var c=a.Ga;se||q(),F||(se(),F=!0),H.add(c,a),a.B=0}}function $I(a,c){return Lp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ei(v(a.Ga,a,c),am(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new qn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=rm(this,C,c),d=xn(this.I),_e(d,"RID",a),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),Pi(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Gp(D)))+"&"+c:this.m&&Ku(d,this.m,D)),Hu(this.h,C),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",c),_e(d,"SID","null"),C.T=!0,Bu(C,d,null)):Bu(C,d,c),this.G=2}}else this.G==3&&(a?nm(this,a):this.i.length==0||Op(this.h)||nm(this))};function nm(a,c){var d;c?d=c.l:d=a.U++;const g=xn(a.I);_e(g,"SID",a.K),_e(g,"RID",d),_e(g,"AID",a.T),Pi(a,g),a.m&&a.o&&Ku(g,a.m,a.o),d=new qn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=rm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Hu(a.h,d),Bu(d,g,c)}function Pi(a,c){a.H&&L(a.H,function(d,g){_e(c,g,d)}),a.l&&Up({},function(d,g){_e(c,g,d)})}function rm(a,c,d){d=Math.min(a.i.length,d);var g=a.l?v(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const $=["count="+d];D==-1?0<d?(D=C[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let ye=!0;for(let ze=0;ze<d;ze++){let ue=C[ze].g;const tt=C[ze].map;if(ue-=D,0>ue)D=Math.max(0,C[ze].g-100),ye=!1;else try{LI(tt,$,"req"+ue+"_")}catch{g&&g(tt)}}if(ye){g=$.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function sm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;se||q(),F||(se(),F=!0),H.add(c,a),a.v=0}}function Qu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ei(v(a.Fa,a),am(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,im(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ei(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),ca(this),im(this))};function Yu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function im(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=xn(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),Pi(a,c),a.m&&a.o&&Ku(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=oa(xn(c)),d.m=null,d.P=!0,bp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ca(this),Qu(this),mt(19))};function da(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function om(a,c){var d=null;if(a.g==c){da(a),Yu(a),a.g=null;var g=2}else if(Wu(a.h,c))d=c.D,jp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;g=ea(),pt(g,new Rp(g,d)),ha(a)}else sm(a);else if(C=c.s,C==3||C==0&&0<c.X||!(g==1&&$I(a,c)||g==2&&Qu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function am(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Dr(a,c){if(a.j.info("Error code "+c),c==2){var d=v(a.fb,a),g=a.Xa;const C=!g;g=new br(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||sa(g,"https"),oa(g),C?VI(g.toString(),d):MI(g.toString(),d)}else mt(2);a.G=0,a.l&&a.l.sa(c),lm(a),tm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function lm(a){if(a.G=0,a.ka=[],a.l){const c=Fp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function um(a,c,d){var g=d instanceof br?xn(d):new br(d);if(g.g!="")c&&(g.g=c+"."+g.g),ia(g,g.s);else{var C=l.location;g=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var D=new br(null);g&&sa(D,g),c&&(D.g=c),C&&ia(D,C),d&&(D.l=d),g=D}return d=a.D,c=a.ya,d&&c&&_e(g,d,c),_e(g,"VER",a.la),Pi(a,g),g}function cm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Pe(new aa({eb:d})):new Pe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hm(){}t=hm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function fa(){}fa.prototype.g=function(a,c){return new Pt(a,c)};function Pt(a,c){et.call(this),this.g=new em(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ms(this)}P(Pt,et),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Gu(this.g)},Pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ou(a),a=d);c.i.push(new xI(c.Ya++,a)),c.G==3&&ha(c)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Gu(this.g),delete this.g,Pt.aa.N.call(this)};function dm(a){ju.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(dm,ju);function fm(){Fu.call(this),this.status=1}P(fm,Fu);function ms(a){this.g=a}P(ms,hm),ms.prototype.ua=function(){pt(this.g,"a")},ms.prototype.ta=function(a){pt(this.g,new dm(a))},ms.prototype.sa=function(a){pt(this.g,new fm)},ms.prototype.ra=function(){pt(this.g,"b")},fa.prototype.createWebChannel=fa.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,q0=function(){return new fa},z0=function(){return ea()},B0=Pr,qh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ta.NO_ERROR=0,ta.TIMEOUT=8,ta.HTTP_ERROR=6,Xa=ta,Cp.COMPLETE="complete",$0=Cp,xp.EventType=_i,_i.OPEN="a",_i.CLOSE="b",_i.ERROR="c",_i.MESSAGE="d",et.prototype.listen=et.prototype.K,qi=xp,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,U0=Pe}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});const Ug="@firebase/firestore";/**
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
 */let ci="10.14.0";/**
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
 */const Xr=new pu("@firebase/firestore");function Fi(){return Xr.logLevel}function G(t,...e){if(Xr.logLevel<=ie.DEBUG){const n=e.map(ff);Xr.debug(`Firestore (${ci}): ${t}`,...n)}}function Un(t,...e){if(Xr.logLevel<=ie.ERROR){const n=e.map(ff);Xr.error(`Firestore (${ci}): ${t}`,...n)}}function Js(t,...e){if(Xr.logLevel<=ie.WARN){const n=e.map(ff);Xr.warn(`Firestore (${ci}): ${t}`,...n)}}function ff(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function fe(t,e){t||J()}function ee(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class W0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ek{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class tk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nk{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new W0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ot(e)}}class rk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new rk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ik{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ok{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new ik(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ak(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class H0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ak(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Le(0,0))}static max(){return new Z(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Co{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Co{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const lk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Co{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return lk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ee.fromString(e))}static fromName(e){return new Q(Ee.fromString(e).popFirst(5))}static empty(){return new Q(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ee(e.slice()))}}function uk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Er(s,Q.empty(),e)}function ck(t){return new Er(t.readTime,t.key,-1)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(Z.min(),Q.empty(),-1)}static max(){return new Er(Z.max(),Q.empty(),-1)}}function hk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const dk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==dk)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function pk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pf.oe=-1;function mu(t){return t==null}function Dl(t){return t===0&&1/t==-1/0}function mk(t){return typeof t=="number"&&Number.isInteger(t)&&!Dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function $g(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function K0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Va(this.root,e,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Va(this.root,e,this.comparator,!0)}}class Va{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bg(this.data.getIterator())}getIteratorFrom(e){return new Bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new Ge(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class G0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new G0("Invalid base64 string: "+i):i}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const gk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(fe(!!t),typeof t=="string"){let e=0;const n=gk.exec(t);if(fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gf(t){const e=t.mapValue.fields.__previous_value__;return mf(e)?gf(e):e}function Po(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class yk{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class No{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new No("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ma={mapValue:{}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mf(t)?4:_k(t)?9007199254740991:vk(t)?10:11:J()}function In(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Po(t).isEqual(Po(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ir(s.timestampValue),l=Ir(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Jr(s.bytesValue).isEqual(Jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),l=be(i.doubleValue);return o===l?Dl(o)===Dl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if($g(o)!==$g(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function bo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function ei(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=be(i.integerValue||i.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return zg(t.timestampValue,e.timestampValue);case 4:return zg(Po(t),Po(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Jr(i),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=ce(l[h],u[h]);if(p!==0)return p}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ce(be(i.latitude),be(o.latitude));return l!==0?l:ce(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,p;const m=i.fields||{},v=o.fields||{},k=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(u=v.value)===null||u===void 0?void 0:u.arrayValue,N=ce(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:qg(k,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ma.mapValue&&o===Ma.mapValue)return 0;if(i===Ma.mapValue)return 1;if(o===Ma.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const v=ce(u[m],p[m]);if(v!==0)return v;const k=ei(l[u[m]],h[p[m]]);if(k!==0)return k}return ce(u.length,p.length)}(t.mapValue,e.mapValue);default:throw J()}}function zg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Ir(t),r=Ir(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function qg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ei(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function ti(t){return Wh(t)}function Wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wh(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function Wg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hh(t){return!!t&&"integerValue"in t}function yf(t){return!!t&&"arrayValue"in t}function Hg(t){return!!t&&"nullValue"in t}function Kg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function vk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _k(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(n)}setAll(e){let n=He.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ro(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(ro(this.value))}}function Q0(t){const e=[];return hi(t.fields,(n,r)=>{const s=new He([n]);if(Ja(r)){const i=Q0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
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
 */class lt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,Z.min(),Z.min(),Z.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,Z.min(),Z.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,Z.min(),Z.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vl{constructor(e,n){this.position=e,this.inclusive=n}}function Gg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=ei(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Do{constructor(e,n="asc"){this.field=e,this.dir=n}}function wk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Y0{}class Oe extends Y0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ik(e,n,r):n==="array-contains"?new Sk(e,r):n==="in"?new Ak(e,r):n==="not-in"?new kk(e,r):n==="array-contains-any"?new Rk(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Tk(e,r):new xk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ei(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends Y0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new an(e,n)}matches(e){return X0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function X0(t){return t.op==="and"}function J0(t){return Ek(t)&&X0(t)}function Ek(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function Kh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ti(t.value);if(J0(t))return t.filters.map(e=>Kh(e)).join(",");{const e=t.filters.map(n=>Kh(n)).join(",");return`${t.op}(${e})`}}function Z0(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Z0(o,s.filters[l]),!0):!1}(t,e):void J()}function ew(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ti(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(ew).join(" ,")+"}"}(t):"Filter"}class Ik extends Oe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Tk extends Oe{constructor(e,n){super(e,"in",n),this.keys=tw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xk extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=tw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class Sk extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yf(n)&&bo(n.arrayValue,this.value)}}class Ak extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bo(this.value.arrayValue,n)}}class kk extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bo(this.value.arrayValue,n)}}class Rk extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bo(this.value.arrayValue,r))}}/**
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
 */class Ck{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Yg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ck(t,e,n,r,s,i,o)}function vf(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ti(r)).join(",")),e.ue=n}return e.ue}function _f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qg(t.startAt,e.startAt)&&Qg(t.endAt,e.endAt)}function Gh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class di{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pk(t,e,n,r,s,i,o,l){return new di(t,e,n,r,s,i,o,l)}function gu(t){return new di(t)}function Xg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nw(t){return t.collectionGroup!==null}function so(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Do(i,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new Do(He.keyField(),r))}return e.ce}function gn(t){const e=ee(t);return e.le||(e.le=Nk(e,so(t))),e.le}function Nk(t,e){if(t.limitType==="F")return Yg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Do(s.field,i)});const n=t.endAt?new Vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vl(t.startAt.position,t.startAt.inclusive):null;return Yg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qh(t,e){const n=t.filters.concat([e]);return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ml(t,e,n){return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yu(t,e){return _f(gn(t),gn(e))&&t.limitType===e.limitType}function rw(t){return`${vf(gn(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ew(s)).join(", ")}]`),mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ti(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ti(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function vu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of so(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Gg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,so(r),s)||r.endAt&&!function(o,l,u){const h=Gg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,so(r),s))}(t,e)}function bk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sw(t){return(e,n)=>{let r=!1;for(const s of so(t)){const i=Dk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Dk(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ei(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return K0(this.inner)}size(){return this.innerSize}}/**
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
 */const Vk=new Ce(Q.comparator);function $n(){return Vk}const iw=new Ce(Q.comparator);function Wi(...t){let e=iw;for(const n of t)e=e.insert(n.key,n);return e}function ow(t){let e=iw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return io()}function aw(){return io()}function io(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mk=new Ce(Q.comparator),Ok=new Ge(Q.comparator);function re(...t){let e=Ok;for(const n of t)e=e.add(n);return e}const Lk=new Ge(ce);function jk(){return Lk}/**
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
 */function wf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dl(e)?"-0":e}}function lw(t){return{integerValue:""+t}}function Fk(t,e){return mk(e)?lw(e):wf(t,e)}/**
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
 */class _u{constructor(){this._=void 0}}function Uk(t,e,n){return t instanceof Ol?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mf(i)&&(i=gf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Vo?cw(t,e):t instanceof Mo?hw(t,e):function(s,i){const o=uw(s,i),l=Jg(o)+Jg(s.Pe);return Hh(o)&&Hh(s.Pe)?lw(l):wf(s.serializer,l)}(t,e)}function $k(t,e,n){return t instanceof Vo?cw(t,e):t instanceof Mo?hw(t,e):n}function uw(t,e){return t instanceof Ll?function(r){return Hh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ol extends _u{}class Vo extends _u{constructor(e){super(),this.elements=e}}function cw(t,e){const n=dw(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mo extends _u{constructor(e){super(),this.elements=e}}function hw(t,e){let n=dw(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class Ll extends _u{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Jg(t){return be(t.integerValue||t.doubleValue)}function dw(t){return yf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Bk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Vo&&s instanceof Vo||r instanceof Mo&&s instanceof Mo?Zs(r.elements,s.elements,In):r instanceof Ll&&s instanceof Ll?In(r.Pe,s.Pe):r instanceof Ol&&s instanceof Ol}(t.transform,e.transform)}class zk{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wu{}function fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ef(t.key,nn.none()):new Wo(t.key,t.data,nn.none());{const n=t.data,r=Ut.empty();let s=new Ge(He.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new us(t.key,r,new Zt(s.toArray()),nn.none())}}function qk(t,e,n){t instanceof Wo?function(s,i,o){const l=s.value.clone(),u=ey(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof us?function(s,i,o){if(!Za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ey(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof Wo?function(i,o,l,u){if(!Za(i.precondition,o))return l;const h=i.value.clone(),p=ty(i.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof us?function(i,o,l,u){if(!Za(i.precondition,o))return l;const h=ty(i.fieldTransforms,u,o),p=o.data;return p.setAll(pw(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Wk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=uw(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Zg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zs(r,s,(i,o)=>Bk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wo extends wu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends wu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ey(t,e,n){const r=new Map;fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,$k(o,l,n[s]))}return r}function ty(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Uk(i,o,e))}return r}class Ef extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hk extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Kk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=fw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>Zg(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>Zg(n,r))}}class If{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length);let s=function(){return Mk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new If(e,n,r,s)}}/**
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
 */class Gk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,oe;function Yk(t){switch(t){default:return J();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function mw(t){if(t===void 0)return Un("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ve.OK:return M.OK;case Ve.CANCELLED:return M.CANCELLED;case Ve.UNKNOWN:return M.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return M.INTERNAL;case Ve.UNAVAILABLE:return M.UNAVAILABLE;case Ve.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ve.NOT_FOUND:return M.NOT_FOUND;case Ve.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ve.ABORTED:return M.ABORTED;case Ve.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ve.DATA_LOSS:return M.DATA_LOSS;default:return J()}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Xk(){return new TextEncoder}/**
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
 */const Jk=new Wr([4294967295,4294967295],0);function ny(t){const e=Xk().encode(t),n=new F0;return n.update(e),new Uint8Array(n.digest())}function ry(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([s,i],0)]}class Tf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hi(`Invalid padding: ${n}`);if(r<0)throw new Hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Wr.fromNumber(r)));return s.compare(Jk)===1&&(s=new Wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ny(e),[r,s]=ry(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Tf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ny(e),[r,s]=ry(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eu(Z.min(),s,new Ce(ce),$n(),re())}}class Ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ho(r,n,re(),re(),re())}}/**
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
 */class el{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class gw{constructor(e,n){this.targetId=e,this.me=n}}class yw{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sy{constructor(){this.fe=0,this.ge=oy(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new Ho(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=oy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Zk{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=iy(),this.Qe=new Ce(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Gh(i))if(r===0){const o=new Q(i.path);this.Ue(n,o,lt.newNoDocument(o,Z.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof G0)return Js("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Tf(o,s,i)}catch(u){return Js(u instanceof Hi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Gh(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,lt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=re();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Eu(e,n,this.Qe,this.ke,r);return this.ke=$n(),this.qe=iy(),this.Qe=new Ce(ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new sy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new sy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function iy(){return new Ce(Q.comparator)}function oy(){return new Ce(Q.comparator)}const eR={asc:"ASCENDING",desc:"DESCENDING"},tR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nR={and:"AND",or:"OR"};class rR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yh(t,e){return t.useProto3Json||mu(e)?e:{value:e}}function jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sR(t,e){return jl(t,e.toTimestamp())}function yn(t){return fe(!!t),Z.fromTimestamp(function(n){const r=Ir(n);return new Le(r.seconds,r.nanos)}(t))}function xf(t,e){return Xh(t,e).canonicalString()}function Xh(t,e){const n=function(s){return new Ee(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _w(t){const e=Ee.fromString(t);return fe(xw(e)),e}function Jh(t,e){return xf(t.databaseId,e.path)}function Pc(t,e){const n=_w(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Ew(n))}function ww(t,e){return xf(t.databaseId,e)}function iR(t){const e=_w(t);return e.length===4?Ee.emptyPath():Ew(e)}function Zh(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ew(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ay(t,e,n){return{name:Jh(t,e),fields:n.value.mapValue.fields}}function oR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(fe(p===void 0||typeof p=="string"),Ye.fromBase64String(p||"")):(fe(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ye.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?M.UNKNOWN:mw(h.code);return new z(p,h.message||"")}(o);n=new yw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pc(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):Z.min(),l=new Ut({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new el(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pc(t,r.document),i=r.readTime?yn(r.readTime):Z.min(),o=lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new el([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pc(t,r.document),i=r.removedTargetIds||[];n=new el([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Qk(s,i),l=r.targetId;n=new gw(l,o)}}return n}function aR(t,e){let n;if(e instanceof Wo)n={update:ay(t,e.key,e.value)};else if(e instanceof Ef)n={delete:Jh(t,e.key)};else if(e instanceof us)n={update:ay(t,e.key,e.data),updateMask:gR(e.fieldMask)};else{if(!(e instanceof Hk))return J();n={verify:Jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ol)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function lR(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(Z.min())&&(o=yn(i)),new zk(o,s.transformResults||[])}(n,e))):[]}function uR(t,e){return{documents:[ww(t,e.path)]}}function cR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ww(t,s);const i=function(h){if(h.length!==0)return Tw(an.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(v){return{field:ws(v.field),direction:fR(v.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Yh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function hR(t){let e=iR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const v=Iw(m);return v instanceof an&&J0(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(v=>function(P){return new Do(Es(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(m){let v;return v=typeof m=="object"?m.value:m,mu(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(m){const v=!!m.before,k=m.values||[];return new Vl(k,v)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const v=!m.before,k=m.values||[];return new Vl(k,v)}(n.endAt)),Pk(e,s,o,i,l,"F",u,h)}function dR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Iw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Es(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>Iw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function fR(t){return eR[t]}function pR(t){return tR[t]}function mR(t){return nR[t]}function ws(t){return{fieldPath:t.canonicalString()}}function Es(t){return He.fromServerFormat(t.fieldPath)}function Tw(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Kg(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NAN"}};if(Hg(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kg(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NAN"}};if(Hg(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ws(n.field),op:pR(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>Tw(s));return r.length===1?r[0]:{compositeFilter:{op:mR(n.op),filters:r}}}(t):J()}function gR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ir{constructor(e,n,r,s,i=Z.min(),o=Z.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yR{constructor(e){this.ct=e}}function vR(t){const e=hR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ml(e,e.limit,"L"):e}/**
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
 */class _R{constructor(){this.un=new wR}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Er.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class wR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Ee.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Ee.comparator)).toArray()}}/**
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
 */class ni{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ni(0)}static kn(){return new ni(-1)}}/**
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
 */class ER{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class IR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class TR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&oo(r.mutation,s,Zt.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=Ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Wi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=$n();const o=io(),l=function(){return io()}();return n.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof us)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),oo(p.mutation,h,p.mutation.getFieldMask(),Le.now())):o.set(h.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var m;return l.set(h,new IR(p,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=io();let s=new Ce((o,l)=>o-l),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Zt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(s.get(l.batchId)||re()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=aw();p.forEach(v=>{if(!i.has(v)){const k=fw(n.get(v),r.get(v));k!==null&&m.set(v,k),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Ur());let l=-1,u=i;return o.next(h=>j.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?j.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,re())).next(p=>({batchId:l,changes:ow(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Wi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Wi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,u=>{const h=function(m,v){return new di(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,v)=>{o=o.insert(m,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,lt.newInvalidDocument(p)))});let l=Wi();return o.forEach((u,h)=>{const p=i.get(u);p!==void 0&&oo(p.mutation,h,Zt.empty(),Le.now()),vu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class xR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:vR(s.bundledQuery),readTime:yn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class SR{constructor(){this.overlays=new Ce(Q.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Ur(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Ur(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return j.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gk(n,r));let i=this.Ir.get(n);i===void 0&&(i=re(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class AR{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Sf{constructor(){this.Tr=new Ge(Ue.Er),this.dr=new Ge(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Ee([])),r=new Ue(n,e),s=new Ue(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Ee([])),r=new Ue(n,e),s=new Ue(n,e+1);let i=re();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
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
 */class kR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ge(Ue.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Ue(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),s=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ce);return n.forEach(s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new Q(i),0);let l=new Ge(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new Ue(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class RR{constructor(e){this.Mr=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||hk(ck(p),r)<=0||(s.has(p.key)||vu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CR(this)}getSize(e){return j.resolve(this.size)}}class CR extends ER{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class PR{constructor(e){this.persistence=e,this.Nr=new fi(n=>vf(n),_f),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sf,this.targetCount=0,this.kr=ni.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ni(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class NR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new pf(0),this.Kr=!1,this.Kr=!0,this.$r=new AR,this.referenceDelegate=e(this),this.Ur=new PR(this),this.indexManager=new _R,this.remoteDocumentCache=function(s){return new RR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new yR(n),this.Gr=new xR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new kR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new bR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class bR extends fk{constructor(e){super(),this.currentSequenceNumber=e}}class Af{constructor(e){this.persistence=e,this.Jr=new Sf,this.Yr=null}static Zr(e){return new Af(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=Q.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class kf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kf(e,n.fromCache,r,s)}}/**
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
 */class DR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return DS()?8:pk(ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new DR;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Fi()<=ie.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Fi()<=ie.DEBUG&&G("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Fi()<=ie.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):j.resolve())}Yi(e,n){if(Xg(n))return j.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ml(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ml(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return Xg(n)||s.isEqual(Z.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(Fi()<=ie.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_s(n)),this.rs(e,o,n,uk(s,-1)).next(l=>l))})}ts(e,n){let r=new Ge(sw(e));return n.forEach((s,i)=>{vu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Fi()<=ie.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",_s(n)),this.Ji.getDocumentsMatchingQuery(e,n,Er.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class MR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ce(ce),this._s=new fi(i=>vf(i),_f),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function OR(t,e,n,r){return new MR(t,e,n,r)}async function Sw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=re();for(const h of s){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function LR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,v=m.keys();let k=j.resolve();return v.forEach(P=>{k=k.next(()=>p.getEntry(u,P)).next(N=>{const O=h.docVersions.get(P);fe(O!==null),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),p.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Aw(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function jR(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const v=s.get(m);if(!v)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let k=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(Ye.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),s=s.insert(m,k),function(N,O,S){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(v,k,p)&&l.push(n.Ur.updateTargetData(i,k))});let u=$n(),h=re();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(FR(i,o,e.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(Z.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function FR(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$n();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function UR(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $R(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ed(t,e,n){const r=ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qo(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ly(t,e,n){const r=ee(t);let s=Z.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=ee(u),v=m._s.get(p);return v!==void 0?j.resolve(m.os.get(v)):m.Ur.getTargetData(h,p)}(r,o,gn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:re())).next(l=>(BR(r,bk(e),l),{documents:l,Ts:i})))}function BR(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class uy{constructor(){this.activeTargetIds=jk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zR{constructor(){this.so=new uy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new uy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qR{_o(e){}shutdown(){}}/**
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
 */class cy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oa=null;function Nc(){return Oa===null?Oa=function(){return 268435456+Math.round(2147483648*Math.random())}():Oa++,"0x"+Oa.toString(16)}/**
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
 */const WR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class HR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const it="WebChannelConnection";class KR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Nc(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(p=>(G("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Js("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=WR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Nc();return new Promise((o,l)=>{const u=new U0;u.setWithCredentials(!0),u.listenOnce($0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Xa.NO_ERROR:const p=u.getResponseJson();G(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case Xa.TIMEOUT:G(it,`RPC '${e}' ${i} timed out`),l(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const m=u.getStatus();if(G(it,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const P=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(k.status);l(new z(P,k.message))}else l(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(M.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{G(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);G(it,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Nc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=q0(),l=z0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");G(it,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let v=!1,k=!1;const P=new HR({Io:O=>{k?G(it,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(v||(G(it,`Opening RPC '${e}' stream ${s} transport.`),m.open(),v=!0),G(it,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},To:()=>m.close()}),N=(O,S,w)=>{O.listen(S,A=>{try{w(A)}catch(V){setTimeout(()=>{throw V},0)}})};return N(m,qi.EventType.OPEN,()=>{k||(G(it,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),N(m,qi.EventType.CLOSE,()=>{k||(k=!0,G(it,`RPC '${e}' stream ${s} transport closed`),P.So())}),N(m,qi.EventType.ERROR,O=>{k||(k=!0,Js(it,`RPC '${e}' stream ${s} transport errored:`,O),P.So(new z(M.UNAVAILABLE,"The operation could not be completed")))}),N(m,qi.EventType.MESSAGE,O=>{var S;if(!k){const w=O.data[0];fe(!!w);const A=w,V=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(V){G(it,`RPC '${e}' stream ${s} received error:`,V);const b=V.status;let L=function(E){const T=Ve[E];if(T!==void 0)return mw(T)}(b),_=V.message;L===void 0&&(L=M.INTERNAL,_="Unknown error status: "+b+" with message "+V.message),k=!0,P.So(new z(L,_)),m.close()}else G(it,`RPC '${e}' stream ${s} received:`,w),P.bo(w)}}),N(l,B0.STAT_EVENT,O=>{O.stat===qh.PROXY?G(it,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===qh.NOPROXY&&G(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function bc(){return typeof document<"u"?document:null}/**
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
 */function Iu(t){return new rR(t,!0)}/**
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
 */class kw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Rw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new kw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GR extends Rw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=oR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?yn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Zh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Gh(u)?{documents:uR(i,u)}:{query:cR(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=vw(i,o.resumeToken);const h=Yh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=jl(i,o.snapshotVersion.toTimestamp());const h=Yh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=dR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Zh(this.serializer),n.removeTarget=e,this.a_(n)}}class QR extends Rw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=lR(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Zh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aR(this.serializer,r))};this.a_(n)}}/**
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
 */class YR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Xh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Xh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class XR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Un(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class JR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{cs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.L_.add(4),await Ko(h),h.q_.set("Unknown"),h.L_.delete(4),await Tu(h)}(this))})}),this.q_=new XR(r,s)}}async function Tu(t){if(cs(t))for(const e of t.B_)await e(!0)}async function Ko(t){for(const e of t.B_)await e(!1)}function Cw(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Nf(n)?Pf(n):pi(n).r_()&&Cf(n,e))}function Rf(t,e){const n=ee(t),r=pi(n);n.N_.delete(e),r.r_()&&Pw(n,e),n.N_.size===0&&(r.r_()?r.o_():cs(n)&&n.q_.set("Unknown"))}function Cf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pi(t).A_(e)}function Pw(t,e){t.Q_.xe(e),pi(t).R_(e)}function Pf(t){t.Q_=new Zk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),pi(t).start(),t.q_.v_()}function Nf(t){return cs(t)&&!pi(t).n_()&&t.N_.size>0}function cs(t){return ee(t).L_.size===0}function Nw(t){t.Q_=void 0}async function ZR(t){t.q_.set("Online")}async function eC(t){t.N_.forEach((e,n)=>{Cf(t,e)})}async function tC(t,e){Nw(t),Nf(t)?(t.q_.M_(e),Pf(t)):t.q_.set("Unknown")}async function nC(t,e,n){if(t.q_.set("Online"),e instanceof yw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fl(t,r)}else if(e instanceof el?t.Q_.Ke(e):e instanceof gw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await Aw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(Ye.EMPTY_BYTE_STRING,p.snapshotVersion)),Pw(i,u);const m=new ir(p.target,u,h,p.sequenceNumber);Cf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Fl(t,r)}}async function Fl(t,e,n){if(!qo(e))throw e;t.L_.add(1),await Ko(t),t.q_.set("Offline"),n||(n=()=>Aw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Tu(t)})}function bw(t,e){return e().catch(n=>Fl(t,n,e))}async function xu(t){const e=ee(t),n=Tr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rC(e);)try{const s=await UR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,sC(e,s)}catch(s){await Fl(e,s)}Dw(e)&&Vw(e)}function rC(t){return cs(t)&&t.O_.length<10}function sC(t,e){t.O_.push(e);const n=Tr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Dw(t){return cs(t)&&!Tr(t).n_()&&t.O_.length>0}function Vw(t){Tr(t).start()}async function iC(t){Tr(t).p_()}async function oC(t){const e=Tr(t);for(const n of t.O_)e.m_(n.mutations)}async function aC(t,e,n){const r=t.O_.shift(),s=If.from(r,e,n);await bw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xu(t)}async function lC(t,e){e&&Tr(t).V_&&await async function(r,s){if(function(o){return Yk(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Tr(r).s_(),await bw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xu(r)}}(t,e),Dw(t)&&Vw(t)}async function hy(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=cs(n);n.L_.add(3),await Ko(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Tu(n)}async function uC(t,e){const n=ee(t);e?(n.L_.delete(2),await Tu(n)):e||(n.L_.add(2),await Ko(n),n.q_.set("Unknown"))}function pi(t){return t.K_||(t.K_=function(n,r,s){const i=ee(n);return i.w_(),new GR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:ZR.bind(null,t),Ro:eC.bind(null,t),mo:tC.bind(null,t),d_:nC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Nf(t)?Pf(t):t.q_.set("Unknown")):(await t.K_.stop(),Nw(t))})),t.K_}function Tr(t){return t.U_||(t.U_=function(n,r,s){const i=ee(n);return i.w_(),new QR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:iC.bind(null,t),mo:lC.bind(null,t),f_:oC.bind(null,t),g_:aC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xu(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class bf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new bf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Df(t,e){if(Un("AsyncQueue",`${e}: ${t}`),qo(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Wi(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class dy{constructor(){this.W_=new Ce(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ri{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ri(e,n,$s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class cC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class hC{constructor(){this.queries=fy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ee(n),i=s.queries;s.queries=fy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function fy(){return new fi(t=>rw(t),yu)}async function Mw(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new cC,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Df(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Vf(n)}async function Ow(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dC(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Vf(n)}function fC(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Vf(t){t.Y_.forEach(e=>{e.next()})}var td,py;(py=td||(td={})).ea="default",py.Cache="cache";class Lw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ri(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==td.Cache}}/**
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
 */class jw{constructor(e){this.key=e}}class Fw{constructor(e){this.key=e}}class pC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=sw(e),this.Ra=new $s(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new dy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const v=s.get(p),k=vu(this.query,m)?m:null,P=!!v&&this.mutatedKeys.has(v.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;v&&k?v.data.isEqual(k.data)?P!==N&&(r.track({type:3,doc:k}),O=!0):this.ga(v,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Aa(k,u)>0||h&&this.Aa(k,h)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),O=!0):v&&!k&&(r.track({type:1,doc:v}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),i=N?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(k,P){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return N(k)-N(P)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new ri(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new dy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Fw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new jw(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ri.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gC{constructor(e){this.key=e,this.va=!1}}class yC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fi(l=>rw(l),yu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(Q.comparator),this.Na=new Map,this.La=new Sf,this.Ba={},this.ka=new Map,this.qa=ni.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vC(t,e,n=!0){const r=Ww(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Uw(r,e,n,!0),s}async function _C(t,e){const n=Ww(t);await Uw(n,e,!0,!1)}async function Uw(t,e,n,r){const s=await $R(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await wC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Cw(t.remoteStore,s),l}async function wC(t,e,n,r,s){t.Ka=(m,v,k)=>async function(N,O,S,w){let A=O.view.ma(S);A.ns&&(A=await ly(N.localStore,O.query,!1).then(({documents:_})=>O.view.ma(_,A)));const V=w&&w.targetChanges.get(O.targetId),b=w&&w.targetMismatches.get(O.targetId)!=null,L=O.view.applyChanges(A,N.isPrimaryClient,V,b);return gy(N,O.targetId,L.wa),L.snapshot}(t,m,v,k);const i=await ly(t.localStore,e,!0),o=new pC(e,i.Ts),l=o.ma(i.documents),u=Ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);gy(t,n,h.wa);const p=new mC(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function EC(t,e,n){const r=ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!yu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ed(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Rf(r.remoteStore,s.targetId),nd(r,s.targetId)}).catch(zo)):(nd(r,s.targetId),await ed(r.localStore,s.targetId,!0))}async function IC(t,e){const n=ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rf(n.remoteStore,r.targetId))}async function TC(t,e,n){const r=PC(t);try{const s=await function(o,l){const u=ee(o),h=Le.now(),p=l.reduce((k,P)=>k.add(P.key),re());let m,v;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=$n(),N=re();return u.cs.getEntries(k,p).next(O=>{P=O,P.forEach((S,w)=>{w.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(O=>{m=O;const S=[];for(const w of l){const A=Wk(w,m.get(w.key).overlayedDocument);A!=null&&S.push(new us(w.key,A,Q0(A.value.mapValue),nn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,S,l)}).next(O=>{v=O;const S=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,S)})}).then(()=>({batchId:v.batchId,changes:ow(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ce(ce)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Go(r,s.changes),await xu(r.remoteStore)}catch(s){const i=Df(s,"Failed to persist write");n.reject(i)}}async function $w(t,e){const n=ee(t);try{const r=await jR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?fe(o.va):s.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await Go(n,r,e)}catch(r){await zo(r)}}function my(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const v of m.j_)v.Z_(l)&&(h=!0)}),h&&Vf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xC(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ce(Q.comparator);o=o.insert(i,lt.newNoDocument(i,Z.min()));const l=re().add(i),u=new Eu(Z.min(),new Map,new Ce(ce),o,l);await $w(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Mf(r)}else await ed(r.localStore,e,!1).then(()=>nd(r,e,n)).catch(zo)}async function SC(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await LR(n.localStore,e);zw(n,r,null),Bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Go(n,s)}catch(s){await zo(s)}}async function AC(t,e,n){const r=ee(t);try{const s=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(fe(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);zw(r,e,n),Bw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Go(r,s)}catch(s){await zo(s)}}function Bw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function zw(t,e,n){const r=ee(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||qw(t,r)})}function qw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Rf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Mf(t))}function gy(t,e,n){for(const r of n)r instanceof jw?(t.La.addReference(r.key,e),kC(t,r)):r instanceof Fw?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||qw(t,r.key)):J()}function kC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),Mf(t))}function Mf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new gC(n)),t.Oa=t.Oa.insert(n,r),Cw(t.remoteStore,new ir(gn(gu(n.path)),r,"TargetPurposeLimboResolution",pf.oe))}}async function Go(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=kf.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const p=ee(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(h,v=>j.forEach(v.$i,k=>p.persistence.referenceDelegate.addReference(m,v.targetId,k)).next(()=>j.forEach(v.Ui,k=>p.persistence.referenceDelegate.removeReference(m,v.targetId,k)))))}catch(m){if(!qo(m))throw m;G("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const v=m.targetId;if(!m.fromCache){const k=p.os.get(v),P=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(P);p.os=p.os.insert(v,N)}}}(r.localStore,i))}async function RC(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Sw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Go(n,r.hs)}}function CC(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let s=re();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Ww(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xC.bind(null,e),e.Ca.d_=dC.bind(null,e.eventManager),e.Ca.$a=fC.bind(null,e.eventManager),e}function PC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AC.bind(null,e),e}class Ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return OR(this.persistence,new VR,e.initialUser,this.serializer)}Ga(e){return new NR(Af.Zr,this.serializer)}Wa(e){return new zR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ul.provider={build:()=>new Ul};class rd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>my(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RC.bind(null,this.syncEngine),await uC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hC}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),r=function(i){return new KR(i)}(e.databaseInfo);return function(i,o,l,u){return new YR(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new JR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>my(this.syncEngine,n,0),function(){return cy.D()?new cy:new qR}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,p){const m=new yC(s,i,o,l,u,h);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ee(s);G("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ko(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}rd.provider={build:()=>new rd};/**
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
 */class Hw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class NC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=H0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Df(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bC(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>hy(e.remoteStore,s)),t._onlineComponents=e}async function bC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await Dc(t,new Ul)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Dc(t,new Ul);return t._offlineComponents}async function Kw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await yy(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await yy(t,new rd))),t._onlineComponents}function DC(t){return Kw(t).then(e=>e.syncEngine)}async function sd(t){const e=await Kw(t),n=e.eventManager;return n.onListen=vC.bind(null,e.syncEngine),n.onUnlisten=EC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_C.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=IC.bind(null,e.syncEngine),n}function VC(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Hw({next:v=>{p.Za(),o.enqueueAndForget(()=>Ow(i,m));const k=v.docs.has(l);!k&&v.fromCache?h.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&v.fromCache&&u&&u.source==="server"?h.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new Lw(gu(l.path),p,{includeMetadataChanges:!0,_a:!0});return Mw(i,m)}(await sd(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Gw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vy=new Map;/**
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
 */function Qw(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MC(t,e,n,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _y(t){if(!Q.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wy(t){if(Q.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Su(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ey{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ey({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ey(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ek;switch(r.type){case"firstParty":return new sk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vy.get(n);r&&(G("ComponentProvider","Removing Datastore"),vy.delete(n),r.terminate())}(this),Promise.resolve()}}function OC(t,e,n,r={}){var s;const i=(t=vn(t,Au))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ot.MOCK_USER;else{l=kS(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(h)}t._authCredentials=new tk(new W0(l,u))}}/**
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
 */class Rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rr(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class yr extends Rr{constructor(e,n,r){super(e,n,gu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new Q(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function Of(t,e,...n){if(t=ht(t),Qw("collection","path",e),t instanceof Au){const r=Ee.fromString(e,...n);return wy(r),new yr(t,null,r)}{if(!(t instanceof _t||t instanceof yr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return wy(r),new yr(t.firestore,null,r)}}function mi(t,e,...n){if(t=ht(t),arguments.length===1&&(e=H0.newId()),Qw("doc","path",e),t instanceof Au){const r=Ee.fromString(e,...n);return _y(r),new _t(t,null,new Q(r))}{if(!(t instanceof _t||t instanceof yr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return _y(r),new _t(t.firestore,t instanceof yr?t.converter:null,new Q(r))}}/**
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
 */class Iy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new kw(this,"async_queue_retry"),this.Vu=()=>{const r=bc();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qo(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=bf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ty(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class es extends Au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Iy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iy(e),this._firestoreClient=void 0,await e}}}function LC(t,e){const n=typeof t=="object"?t:df(),r=typeof t=="string"?t:"(default)",s=ls(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=SS("firestore");i&&OC(s,...i)}return s}function Lf(t){if(t._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jC(t),t._firestoreClient}function jC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,p){return new yk(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Gw(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new NC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(Ye.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new si(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Yw{constructor(e){this._methodName=e}}/**
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
 */class Ff{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class Uf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const FC=/^__.*__$/;class UC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wo(e,this.data,n,this.fieldTransforms)}}function Xw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class $f{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new $f(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return $l(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Xw(this.Cu)&&FC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class $C{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Iu(e)}Qu(e,n,r,s=!1){return new $f({Cu:e,methodName:n,qu:r,path:He.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bf(t){const e=t._freezeSettings(),n=Iu(t._databaseId);return new $C(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jw(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);tE("Data must be an object, but it was:",o,r);const l=Zw(r,o);let u,h;if(i.merge)u=new Zt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const v=zC(e,m,n);if(!o.contains(v))throw new z(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);WC(p,v)||p.push(v)}u=new Zt(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new UC(new Ut(l),u,h)}function BC(t,e,n,r=!1){return zf(n,t.Qu(r?4:3,e))}function zf(t,e){if(eE(t=ht(t)))return tE("Unsupported field value:",e,t),Zw(t,e);if(t instanceof Yw)return function(r,s){if(!Xw(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=zf(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:jl(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jl(s.serializer,i)}}if(r instanceof Ff)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof si)return{bytesValue:vw(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Uf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return wf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Su(r)}`)}(t,e)}function Zw(t,e){const n={};return K0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,s)=>{const i=zf(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function eE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Ff||t instanceof si||t instanceof _t||t instanceof Yw||t instanceof Uf)}function tE(t,e,n){if(!eE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Su(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function zC(t,e,n){if((e=ht(e))instanceof jf)return e._internalPath;if(typeof e=="string")return nE(t,e);throw $l("Field path arguments must be of type string or ",t,!1,void 0,n)}const qC=new RegExp("[~\\*/\\[\\]]");function nE(t,e,n){if(e.search(qC)>=0)throw $l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jf(...e.split("."))._internalPath}catch{throw $l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $l(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new z(M.INVALID_ARGUMENT,l+t+u)}function WC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class rE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HC extends rE{data(){return super.data()}}function qf(t,e){return typeof e=="string"?nE(t,e):e instanceof jf?e._internalPath:e._delegate._internalPath}/**
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
 */function KC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wf{}class Hf extends Wf{}function GC(t,e,...n){let r=[];e instanceof Wf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Gf).length,l=i.filter(u=>u instanceof Kf).length;if(o>1||o>0&&l>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Kf extends Hf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kf(e,n,r)}_apply(e){const n=this._parse(e);return sE(e._query,n),new Rr(e.firestore,e.converter,Qh(e._query,n))}_parse(e){const n=Bf(e.firestore);return function(i,o,l,u,h,p,m){let v;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Sy(m,p);const k=[];for(const P of m)k.push(xy(u,i,P));v={arrayValue:{values:k}}}else v=xy(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Sy(m,p),v=BC(l,o,m,p==="in"||p==="not-in");return Oe.create(h,p,v)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Gf extends Wf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:an.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)sE(o,u),o=Qh(o,u)}(e._query,n),new Rr(e.firestore,e.converter,Qh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qf extends Hf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Do(i,o)}(e._query,this._field,this._direction);return new Rr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new di(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function QC(t,e="asc"){const n=e,r=qf("orderBy",t);return Qf._create(r,n)}class Yf extends Hf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Yf(e,n,r)}_apply(e){return new Rr(e.firestore,e.converter,Ml(e._query,this._limit,this._limitType))}}function YC(t){return Yf._create("limit",t,"F")}function xy(t,e,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nw(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!Q.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wg(t,new Q(r))}if(n instanceof _t)return Wg(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Su(n)}.`)}function Sy(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class XC{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>be(o.doubleValue));return new Uf(i)}convertGeoPoint(e){return new Ff(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);fe(xw(r));const s=new No(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function iE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oE extends rE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class tl extends oE{data(e={}){return super.data(e)}}class JC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ki(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tl(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new tl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new tl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:ZC(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function eP(t){t=vn(t,_t);const e=vn(t.firestore,es);return VC(Lf(e),t._key).then(n=>uE(e,t,n))}class aE extends XC{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function lE(t,e,n){t=vn(t,_t);const r=vn(t.firestore,es),s=iE(t.converter,e);return Jf(r,[Jw(Bf(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,nn.none())])}function tP(t){return Jf(vn(t.firestore,es),[new Ef(t._key,nn.none())])}function nP(t,e){const n=vn(t.firestore,es),r=mi(t),s=iE(t.converter,e);return Jf(n,[Jw(Bf(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function Xf(t,...e){var n,r,s;t=ht(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ty(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ty(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,p;if(t instanceof _t)h=vn(t.firestore,es),p=gu(t._key.path),u={next:m=>{e[o]&&e[o](uE(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=vn(t,Rr);h=vn(m.firestore,es),p=m._query;const v=new aE(h);u={next:k=>{e[o]&&e[o](new JC(h,v,m,k))},error:e[o+1],complete:e[o+2]},KC(t._query)}return function(v,k,P,N){const O=new Hw(N),S=new Lw(k,O,P);return v.asyncQueue.enqueueAndForget(async()=>Mw(await sd(v),S)),()=>{O.Za(),v.asyncQueue.enqueueAndForget(async()=>Ow(await sd(v),S))}}(Lf(h),p,l,u)}function Jf(t,e){return function(r,s){const i=new gr;return r.asyncQueue.enqueueAndForget(async()=>TC(await DC(r),s,i)),i.promise}(Lf(t),e)}function uE(t,e,n){const r=n.docs.get(e._key),s=new aE(t);return new oE(t,s,e._key,r,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ci=s})(ui),En(new on("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new es(new nk(r.getProvider("auth-internal")),new ok(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(h.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),zt(Ug,"4.7.3",e),zt(Ug,"4.7.3","esm2017")})();function Zf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function cE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rP=cE,hE=new as("auth","Firebase",cE());/**
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
 */const Bl=new pu("@firebase/auth");function sP(t,...e){Bl.logLevel<=ie.WARN&&Bl.warn(`Auth (${ui}): ${t}`,...e)}function nl(t,...e){Bl.logLevel<=ie.ERROR&&Bl.error(`Auth (${ui}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw tp(t,...e)}function rn(t,...e){return tp(t,...e)}function ep(t,e,n){const r=Object.assign(Object.assign({},rP()),{[e]:n});return new as("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return ep(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(t,"argument-error"),ep(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hE.create(t,...e)}function X(t,e,...n){if(!t)throw tp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function Bn(t,e){t||Nn(e)}/**
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
 */function id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iP(){return Ay()==="http:"||Ay()==="https:"}function Ay(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function oP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iP()||P0()||"connection"in navigator)?navigator.onLine:!0}function aP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=RS()||NS()}get(){return oP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function np(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uP=new Qo(3e4,6e4);function rp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gi(t,e,n,r,s={}){return pE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return PS()||(h.referrerPolicy="no-referrer"),fE.fetch()(mE(t,t.config.apiHost,n,l),h)})}async function pE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lP),e);try{const s=new hP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw La(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ep(t,p,h);Tn(t,p)}}catch(s){if(s instanceof ln)throw s;Tn(t,"network-request-failed",{message:String(s)})}}async function cP(t,e,n,r,s={}){const i=await gi(t,e,n,r,s);return"mfaPendingCredential"in i&&Tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function mE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?np(t.config,s):`${t.config.apiScheme}://${s}`}class hP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),uP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function dP(t,e){return gi(t,"POST","/v1/accounts:delete",e)}async function gE(t,e){return gi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fP(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=sp(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ao(Vc(s.auth_time)),issuedAtTime:ao(Vc(s.iat)),expirationTime:ao(Vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function sp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const s=A0(n);return s?JSON.parse(s):(nl("Failed to decode base64 JWT payload"),null)}catch(s){return nl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ky(t){const e=sp(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&pP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Oo(t,gE(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yE(i.providerUserInfo):[],l=yP(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new od(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function gP(t){const e=ht(t);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yE(t){return t.map(e=>{var{providerId:n}=e,r=Zf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vP(t,e){const n=await pE(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=mE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _P(t,e){return gi(t,"POST","/v2/accounts:revokeToken",rp(t,e))}/**
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
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ky(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=ky(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function Gn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new od(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fP(this,e)}reload(){return gP(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await Oo(this,dP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:A,emailVerified:V,isAnonymous:b,providerData:L,stsTokenManager:_}=n;X(A&&_,e,"internal-error");const y=Bs.fromJSON(this.name,_);X(typeof A=="string",e,"internal-error"),Gn(m,e.name),Gn(v,e.name),X(typeof V=="boolean",e,"internal-error"),X(typeof b=="boolean",e,"internal-error"),Gn(k,e.name),Gn(P,e.name),Gn(N,e.name),Gn(O,e.name),Gn(S,e.name),Gn(w,e.name);const E=new bn({uid:A,auth:e,email:v,emailVerified:V,displayName:m,isAnonymous:b,photoURL:P,phoneNumber:k,tenantId:N,stsTokenManager:y,createdAt:S,lastLoginAt:w});return L&&Array.isArray(L)&&(E.providerData=L.map(T=>Object.assign({},T))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bs;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Bs;l.updateFromIdToken(r);const u=new bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new od(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Ry=new Map;function Dn(t){Bn(t instanceof Function,"Expected a class definition");let e=Ry.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ry.set(t,e),e)}/**
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
 */class vE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vE.type="NONE";const Cy=vE;/**
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
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=rl(this.userKey,s.apiKey,i),this.fullPersistenceKey=rl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(Dn(Cy),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Dn(Cy);const o=rl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const m=bn._fromJSON(e,p);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zs(i,e,r))}}/**
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
 */function Py(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_E(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xE(e))return"Blackberry";if(SE(e))return"Webos";if(wE(e))return"Safari";if((e.includes("chrome/")||EE(e))&&!e.includes("edge/"))return"Chrome";if(TE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _E(t=ct()){return/firefox\//i.test(t)}function wE(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EE(t=ct()){return/crios\//i.test(t)}function IE(t=ct()){return/iemobile/i.test(t)}function TE(t=ct()){return/android/i.test(t)}function xE(t=ct()){return/blackberry/i.test(t)}function SE(t=ct()){return/webos/i.test(t)}function ip(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wP(t=ct()){var e;return ip(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EP(){return bS()&&document.documentMode===10}function AE(t=ct()){return ip(t)||TE(t)||SE(t)||xE(t)||/windows phone/i.test(t)||IE(t)}/**
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
 */function kE(t,e=[]){let n;switch(t){case"Browser":n=Py(ct());break;case"Worker":n=`${Py(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
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
 */class IP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function TP(t,e={}){return gi(t,"GET","/v2/passwordPolicy",rp(t,e))}/**
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
 */const xP=6;class SP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class AP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ny(this),this.idTokenSubscription=new Ny(this),this.beforeStateQueue=new IP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gE(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(vr(this));const n=e?ht(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TP(this),n=new SP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _P(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(t){return ht(t)}class Ny{constructor(e){this.auth=e,this.observer=null,this.addObserver=FS(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let op={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kP(t){op=t}function RP(t){return op.loadJS(t)}function CP(){return op.gapiScript}function PP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function NP(t,e){const n=ls(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ko(i,e??{}))return s;Tn(s,"already-initialized")}return n.initialize({options:e})}function bP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DP(t,e,n){const r=yi(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=RE(e),{host:o,port:l}=VP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),MP()}function RE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VP(t){const e=RE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:by(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:by(o)}}}function by(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class CE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
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
 */async function qs(t,e){return cP(t,"POST","/v1/accounts:signInWithIdp",rp(t,e))}/**
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
 */const OP="http://localhost";class ts extends CE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:OP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
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
 */class ku{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yo extends ku{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends Yo{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class tr extends Yo{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends Yo{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=Dy(r);return new ii({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Dy(r);return new ii({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Dy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ql extends ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ql(e,n,r,s)}}function PE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,i,e,r):i})}async function LP(t,e,n=!1){const r=await Oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
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
 */async function jP(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(vr(r));const s="reauthenticate";try{const i=await Oo(t,PE(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=sp(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),ii._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),i}}/**
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
 */async function FP(t,e,n=!1){if(fn(t.app))return Promise.reject(vr(t));const r="signIn",s=await PE(t,r,e),i=await ii._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function UP(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function $P(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function BP(t){return ht(t).signOut()}const Wl="__sak";/**
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
 */class NE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zP=1e3,qP=10;class bE extends NE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=AE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);EP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,qP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bE.type="LOCAL";const WP=bE;/**
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
 */class DE extends NE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DE.type="SESSION";const VE=DE;/**
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
 */function HP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await HP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
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
 */function ap(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=ap("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const v=m;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function GP(t){_n().location.href=t}/**
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
 */function ME(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function QP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XP(){return ME()?self:null}/**
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
 */const OE="firebaseLocalStorageDb",JP=1,Hl="firebaseLocalStorage",LE="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cu(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function ZP(){const t=indexedDB.deleteDatabase(OE);return new Xo(t).toPromise()}function ad(){const t=indexedDB.open(OE,JP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:LE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await ZP(),e(await ad()))})})}async function Vy(t,e,n){const r=Cu(t,!0).put({[LE]:e,value:n});return new Xo(r).toPromise()}async function eN(t,e){const n=Cu(t,!1).get(e),r=await new Xo(n).toPromise();return r===void 0?null:r.value}function My(t,e){const n=Cu(t,!0).delete(e);return new Xo(n).toPromise()}const tN=800,nN=3;class jE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ME()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(XP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QP(),!this.activeServiceWorker)return;this.sender=new KP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ad();return await Vy(e,Wl,"1"),await My(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>My(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cu(s,!1).getAll();return new Xo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jE.type="LOCAL";const rN=jE;new Qo(3e4,6e4);/**
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
 */function lp(t,e){return e?Dn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class up extends CE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sN(t){return FP(t.auth,new up(t),t.bypassAuthState)}function iN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),jP(n,new up(t),t.bypassAuthState)}async function oN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),LP(n,new up(t),t.bypassAuthState)}/**
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
 */class FE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sN;case"linkViaPopup":case"linkViaRedirect":return oN;case"reauthViaPopup":case"reauthViaRedirect":return iN;default:Tn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aN=new Qo(2e3,1e4);async function lN(t,e,n){if(fn(t.app))return Promise.reject(rn(t,"operation-not-supported-in-this-environment"));const r=yi(t);dE(t,e,ku);const s=lp(r,n);return new $r(r,"signInViaPopup",e,s).executeNotNull()}class $r extends FE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aN.get())};e()}}$r.currentPopupAction=null;/**
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
 */const uN="pendingRedirect",sl=new Map;class cN extends FE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await hN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hN(t,e){const n=$E(e),r=UE(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function dN(t,e){return UE(t)._set($E(e),"true")}function fN(t,e){sl.set(t._key(),e)}function UE(t){return Dn(t._redirectPersistence)}function $E(t){return rl(uN,t.config.apiKey,t.name)}/**
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
 */function pN(t,e,n){return mN(t,e,n)}async function mN(t,e,n){if(fn(t.app))return Promise.reject(vr(t));const r=yi(t);dE(t,e,ku),await r._initializationPromise;const s=lp(r,n);return await dN(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function gN(t,e){return await yi(t)._initializationPromise,BE(t,e,!1)}async function BE(t,e,n=!1){if(fn(t.app))return Promise.reject(vr(t));const r=yi(t),s=lp(r,e),o=await new cN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yN=10*60*1e3;class vN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_N(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oy(e))}saveEventToCache(e){this.cachedEventUids.add(Oy(e)),this.lastProcessedEventTime=Date.now()}}function Oy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _N(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(t);default:return!1}}/**
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
 */async function wN(t,e={}){return gi(t,"GET","/v1/projects",e)}/**
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
 */const EN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IN=/^https?/;async function TN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wN(t);for(const n of e)try{if(xN(n))return}catch{}Tn(t,"unauthorized-domain")}function xN(t){const e=id(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IN.test(n))return!1;if(EN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const SN=new Qo(3e4,6e4);function Ly(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AN(t){return new Promise((e,n)=>{var r,s,i;function o(){Ly(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ly(),n(rn(t,"network-request-failed"))},timeout:SN.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const l=PP("iframefcb");return _n()[l]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},RP(`${CP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw il=null,e})}let il=null;function kN(t){return il=il||AN(t),il}/**
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
 */const RN=new Qo(5e3,15e3),CN="__/auth/iframe",PN="emulator/auth/iframe",NN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?np(e,PN):`https://${t.config.authDomain}/${CN}`,r={apiKey:e.apiKey,appName:t.name,v:ui},s=bN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bo(r).slice(1)}`}async function VN(t){const e=await kN(t),n=_n().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:DN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=_n().setTimeout(()=>{i(o)},RN.get());function u(){_n().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const MN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ON=500,LN=600,jN="_blank",FN="http://localhost";class jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UN(t,e,n,r=ON,s=LN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},MN),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ct().toLowerCase();n&&(l=EE(h)?jN:n),_E(h)&&(e=e||FN,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[k,P])=>`${v}${k}=${P},`,"");if(wP(h)&&l!=="_self")return $N(e||"",l),new jy(null);const m=window.open(e||"",l,p);X(m,t,"popup-blocked");try{m.focus()}catch{}return new jy(m)}function $N(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BN="__/auth/handler",zN="emulator/auth/handler",qN=encodeURIComponent("fac");async function Fy(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:s};if(e instanceof ku){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Yo){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${qN}=${encodeURIComponent(u)}`:"";return`${WN(t)}?${Bo(l).slice(1)}${h}`}function WN({config:t}){return t.emulator?np(t,zN):`https://${t.authDomain}/${BN}`}/**
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
 */const Mc="webStorageSupport";class HN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VE,this._completeRedirectFn=BE,this._overrideRedirectResult=fN}async _openPopup(e,n,r,s){var i;Bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fy(e,n,r,id(),s);return UN(e,o,ap())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fy(e,n,r,id(),s);return GP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VN(e),r=new vN(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Mc];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return AE()||wE()||ip()}}const KN=HN;var Uy="@firebase/auth",$y="1.7.9";/**
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
 */class GN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YN(t){En(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kE(t)},h=new AP(r,s,i,u);return bP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new on("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(r=>new GN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Uy,$y,QN(t)),zt(Uy,$y,"esm2017")}/**
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
 */const XN=5*60,JN=C0("authIdTokenMaxAge")||XN;let By=null;const ZN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JN)return;const s=n==null?void 0:n.token;By!==s&&(By=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function e2(t=df()){const e=ls(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NP(t,{popupRedirectResolver:KN,persistence:[rN,WP,VE]}),r=C0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ZN(i.toString());$P(n,o,()=>o(n.currentUser)),UP(n,l=>o(l))}}const s=k0("auth");return s&&DP(n,`http://${s}`),n}function t2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",t2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YN("Browser");const qE="@firebase/installations",cp="0.6.9";/**
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
 */const WE=1e4,HE=`w:${cp}`,KE="FIS_v2",n2="https://firebaseinstallations.googleapis.com/v1",r2=60*60*1e3,s2="installations",i2="Installations";/**
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
 */const o2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ns=new as(s2,i2,o2);function GE(t){return t instanceof ln&&t.code.includes("request-failed")}/**
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
 */function QE({projectId:t}){return`${n2}/projects/${t}/installations`}function YE(t){return{token:t.token,requestStatus:2,expiresIn:l2(t.expiresIn),creationTime:Date.now()}}async function XE(t,e){const r=(await e.json()).error;return ns.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function JE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function a2(t,{refreshToken:e}){const n=JE(t);return n.append("Authorization",u2(e)),n}async function ZE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function l2(t){return Number(t.replace("s","000"))}function u2(t){return`${KE} ${t}`}/**
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
 */async function c2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=QE(t),s=JE(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:KE,appId:t.appId,sdkVersion:HE},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await ZE(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:YE(h.authToken)}}else throw await XE("Create Installation",u)}/**
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
 */function eI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function h2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const d2=/^[cdef][\w-]{21}$/,ld="";function f2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=p2(t);return d2.test(n)?n:ld}catch{return ld}}function p2(t){return h2(t).substr(0,22)}/**
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
 */function Pu(t){return`${t.appName}!${t.appId}`}/**
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
 */const tI=new Map;function nI(t,e){const n=Pu(t);rI(n,e),m2(n,e)}function rI(t,e){const n=tI.get(t);if(n)for(const r of n)r(e)}function m2(t,e){const n=g2();n&&n.postMessage({key:t,fid:e}),y2()}let Br=null;function g2(){return!Br&&"BroadcastChannel"in self&&(Br=new BroadcastChannel("[Firebase] FID Change"),Br.onmessage=t=>{rI(t.data.key,t.data.fid)}),Br}function y2(){tI.size===0&&Br&&(Br.close(),Br=null)}/**
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
 */const v2="firebase-installations-database",_2=1,rs="firebase-installations-store";let Oc=null;function hp(){return Oc||(Oc=M0(v2,_2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}})),Oc}async function Kl(t,e){const n=Pu(t),s=(await hp()).transaction(rs,"readwrite"),i=s.objectStore(rs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&nI(t,e.fid),e}async function sI(t){const e=Pu(t),r=(await hp()).transaction(rs,"readwrite");await r.objectStore(rs).delete(e),await r.done}async function Nu(t,e){const n=Pu(t),s=(await hp()).transaction(rs,"readwrite"),i=s.objectStore(rs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&nI(t,l.fid),l}/**
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
 */async function dp(t){let e;const n=await Nu(t.appConfig,r=>{const s=w2(r),i=E2(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ld?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function w2(t){const e=t||{fid:f2(),registrationStatus:0};return iI(e)}function E2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ns.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=I2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:T2(t)}:{installationEntry:e}}async function I2(t,e){try{const n=await c2(t,e);return Kl(t.appConfig,n)}catch(n){throw GE(n)&&n.customData.serverCode===409?await sI(t.appConfig):await Kl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function T2(t){let e=await zy(t.appConfig);for(;e.registrationStatus===1;)await eI(100),e=await zy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await dp(t);return r||n}return e}function zy(t){return Nu(t,e=>{if(!e)throw ns.create("installation-not-found");return iI(e)})}function iI(t){return x2(t)?{fid:t.fid,registrationStatus:0}:t}function x2(t){return t.registrationStatus===1&&t.registrationTime+WE<Date.now()}/**
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
 */async function S2({appConfig:t,heartbeatServiceProvider:e},n){const r=A2(t,n),s=a2(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:HE,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await ZE(()=>fetch(r,l));if(u.ok){const h=await u.json();return YE(h)}else throw await XE("Generate Auth Token",u)}function A2(t,{fid:e}){return`${QE(t)}/${e}/authTokens:generate`}/**
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
 */async function fp(t,e=!1){let n;const r=await Nu(t.appConfig,i=>{if(!oI(i))throw ns.create("not-registered");const o=i.authToken;if(!e&&C2(o))return i;if(o.requestStatus===1)return n=k2(t,e),i;{if(!navigator.onLine)throw ns.create("app-offline");const l=N2(i);return n=R2(t,l),l}});return n?await n:r.authToken}async function k2(t,e){let n=await qy(t.appConfig);for(;n.authToken.requestStatus===1;)await eI(100),n=await qy(t.appConfig);const r=n.authToken;return r.requestStatus===0?fp(t,e):r}function qy(t){return Nu(t,e=>{if(!oI(e))throw ns.create("not-registered");const n=e.authToken;return b2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function R2(t,e){try{const n=await S2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Kl(t.appConfig,r),n}catch(n){if(GE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Kl(t.appConfig,r)}throw n}}function oI(t){return t!==void 0&&t.registrationStatus===2}function C2(t){return t.requestStatus===2&&!P2(t)}function P2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+r2}function N2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function b2(t){return t.requestStatus===1&&t.requestTime+WE<Date.now()}/**
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
 */async function D2(t){const e=t,{installationEntry:n,registrationPromise:r}=await dp(e);return r?r.catch(console.error):fp(e).catch(console.error),n.fid}/**
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
 */async function V2(t,e=!1){const n=t;return await M2(n),(await fp(n,e)).token}async function M2(t){const{registrationPromise:e}=await dp(t);e&&await e}/**
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
 */function O2(t){if(!t||!t.options)throw Lc("App Configuration");if(!t.name)throw Lc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Lc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Lc(t){return ns.create("missing-app-config-values",{valueName:t})}/**
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
 */const aI="installations",L2="installations-internal",j2=t=>{const e=t.getProvider("app").getImmediate(),n=O2(e),r=ls(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},F2=t=>{const e=t.getProvider("app").getImmediate(),n=ls(e,aI).getImmediate();return{getId:()=>D2(n),getToken:s=>V2(n,s)}};function U2(){En(new on(aI,j2,"PUBLIC")),En(new on(L2,F2,"PRIVATE"))}U2();zt(qE,cp);zt(qE,cp,"esm2017");/**
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
 */const Gl="analytics",$2="firebase_id",B2="origin",z2=60*1e3,q2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pp="https://www.googletagmanager.com/gtag/js";/**
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
 */const kt=new pu("@firebase/analytics");/**
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
 */const W2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vt=new as("analytics","Analytics",W2);/**
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
 */function H2(t){if(!t.startsWith(pp)){const e=Vt.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function lI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function K2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function G2(t,e){const n=K2("firebase-js-sdk-policy",{createScriptURL:H2}),r=document.createElement("script"),s=`${pp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Q2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Y2(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await lI(n)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(l){kt.error(l)}t("config",s,i)}async function X2(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await lI(n);for(const u of o){const h=l.find(m=>m.measurementId===u),p=h&&e[h.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){kt.error(i)}}function J2(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await X2(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await Y2(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){kt.error(l)}}return s}function Z2(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=J2(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function eb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pp)&&n.src.includes(t))return n;return null}/**
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
 */const tb=30,nb=1e3;class rb{constructor(e={},n=nb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uI=new rb;function sb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ib(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:sb(r)},i=q2.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Vt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function ob(t,e=uI,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Vt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Vt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ub;return setTimeout(async()=>{l.abort()},z2),cI({appId:r,apiKey:s,measurementId:i},o,l,e)}async function cI(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=uI){var i;const{appId:o,measurementId:l}=t;try{await ab(r,e)}catch(u){if(l)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await ib(t);return s.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!lb(h)){if(s.deleteThrottleMetadata(o),l)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw u}const p=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Pg(n,s.intervalMillis,tb):Pg(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return s.setThrottleMetadata(o,m),kt.debug(`Calling attemptFetch again in ${p} millis`),cI(t,m,r,s)}}function ab(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lb(t){if(!(t instanceof ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ub{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cb(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function hb(){if(N0())try{await b0()}catch(t){return kt.warn(Vt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kt.warn(Vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function db(t,e,n,r,s,i,o){var l;const u=ob(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>kt.error(k)),e.push(u);const h=hb().then(k=>{if(k)return r.getId()}),[p,m]=await Promise.all([u,h]);eb(i)||G2(i,p.measurementId),s("js",new Date);const v=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return v[B2]="firebase",v.update=!0,m!=null&&(v[$2]=m),s("config",p.measurementId,v),p.measurementId}/**
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
 */class fb{constructor(e){this.app=e}_delete(){return delete lo[this.app.options.appId],Promise.resolve()}}let lo={},Wy=[];const Hy={};let jc="dataLayer",pb="gtag",Ky,hI,Gy=!1;function mb(){const t=[];if(P0()&&t.push("This is a browser extension environment."),VS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Vt.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function gb(t,e,n){mb();const r=t.options.appId;if(!r)throw Vt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vt.create("no-api-key");if(lo[r]!=null)throw Vt.create("already-exists",{id:r});if(!Gy){Q2(jc);const{wrappedGtag:i,gtagCore:o}=Z2(lo,Wy,Hy,jc,pb);hI=i,Ky=o,Gy=!0}return lo[r]=db(t,Wy,Hy,e,Ky,jc,n),new fb(t)}function yb(t=df()){t=ht(t);const e=ls(t,Gl);return e.isInitialized()?e.getImmediate():vb(t)}function vb(t,e={}){const n=ls(t,Gl);if(n.isInitialized()){const s=n.getImmediate();if(ko(e,n.getOptions()))return s;throw Vt.create("already-initialized")}return n.initialize({options:e})}function _b(t,e,n,r){t=ht(t),cb(hI,lo[t.app.options.appId],e,n,r).catch(s=>kt.error(s))}const Qy="@firebase/analytics",Yy="0.10.8";function wb(){En(new on(Gl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return gb(r,s,n)},"PUBLIC")),En(new on("analytics-internal",t,"PRIVATE")),zt(Qy,Yy),zt(Qy,Yy,"esm2017");function t(e){try{const n=e.getProvider(Gl).getImmediate();return{logEvent:(r,s,i)=>_b(n,r,s,i)}}catch(n){throw Vt.create("interop-component-reg-failed",{reason:n})}}}wb();const Ql="app_debug_logs",me=(t,e="info")=>{try{const n=new Date,r=`${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}:${n.getSeconds().toString().padStart(2,"0")}.${n.getMilliseconds().toString().padStart(3,"0")}`,s={timestamp:r,message:t,type:e},i=localStorage.getItem(Ql),o=i?JSON.parse(i):[],l=[s,...o].slice(0,50);localStorage.setItem(Ql,JSON.stringify(l)),console.log(`[${r}] ${t}`)}catch(n){console.error("Logger error",n)}},Eb=()=>{try{const t=localStorage.getItem(Ql);return t?JSON.parse(t):[]}catch{return[]}},Ib=()=>{localStorage.removeItem(Ql)},Tb={VITE_FIREBASE_API_KEY:"AIzaSyDT7WprmgPSa_rONLEUkr9LWSZeHClpTFM",VITE_FIREBASE_APP_ID:"1:844876295872:web:4b3cd98e646846f0868725",VITE_FIREBASE_AUTH_DOMAIN:"leavetable-fd826.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"844876295872",VITE_FIREBASE_PROJECT_ID:"leavetable-fd826",VITE_FIREBASE_STORAGE_BUCKET:"leavetable-fd826.firebasestorage.app"},vs=Tb,Fc={apiKey:vs.VITE_FIREBASE_API_KEY,authDomain:vs.VITE_FIREBASE_AUTH_DOMAIN,projectId:vs.VITE_FIREBASE_PROJECT_ID,storageBucket:vs.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:vs.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:vs.VITE_FIREBASE_APP_ID};let ja,Xe=null,wn=null,Cr=!1;if(Fc.apiKey&&Fc.projectId)try{ja=O0(Fc);try{yb(ja)}catch{}Xe=LC(ja),wn=e2(ja),Cr=!0,console.log("Firebase initialized successfully"),me("Firebase SDK initialized","success")}catch(t){console.error("Firebase initialization failed:",t),me(`Firebase init failed: ${t.message}`,"error")}else console.warn("Firebase configuration missing."),me("Firebase config missing","warn");const Vs=()=>Cr,Xy=new Rn,Yl="auth_redirect_pending",mp="auth_redirect_timestamp",xb=10*60*1e3,Sb=()=>{const t=navigator.userAgent||navigator.vendor||window.opera||"";return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Line|FBAN|FBAV|Instagram|MicroMessenger/i.test(t)},Ab=()=>{me("[Auth] Setting redirect flag...","info"),localStorage.setItem(Yl,"true"),localStorage.setItem(mp,Date.now().toString())},ss=()=>{localStorage.getItem(Yl)&&(me("[Auth] Clearing redirect flag.","info"),localStorage.removeItem(Yl),localStorage.removeItem(mp))},ud=()=>{const t=localStorage.getItem(Yl)==="true",e=localStorage.getItem(mp);if(!t)return!1;if(e){const n=parseInt(e,10),r=Date.now();if(isNaN(n)||r-n>xb)return me("[Auth] Redirect flag expired or invalid. Clearing.","warn"),ss(),!1}else return ss(),!1;return!0},kb=async(t=!1)=>{if(!wn)throw new Error("Firebase Auth not initialized");const e=Sb();if(me(`[Login] Start. Mobile: ${e}. Strategy: Popup Only`),t){me("[Login] Forcing Redirect...","info"),Ab(),await pN(wn,Xy);return}try{const n=await lN(wn,Xy);return me(`[Login] Popup Success: ${n.user.email}`,"success"),n.user}catch(n){throw console.warn("Popup failed:",n),me(`[Login] Popup failed: ${n.code||n.message}`,"error"),n}},Rb=async()=>{if(!wn||!ud())return null;me("[Auth] Detected pending redirect. Checking result...","info");try{const t=await gN(wn);return ss(),t?(me(`[Auth] Redirect Success: ${t.user.email}`,"success"),t.user):(me("[Auth] Redirect returned null (User cancelled or Session lost).","warn"),null)}catch(t){return ss(),console.error("Check Redirect Error:",t),me(`[Auth] Check Redirect Error: ${t.message}`,"error"),null}},Cb=async()=>{if(wn)try{await BP(wn),ss(),me("User logged out","info")}catch(t){console.error("Logout failed",t),me(`Logout error: ${t.message}`,"error")}},Pb=(t,e,n,r)=>{if(!Cr||!Xe)return()=>{};const s=mi(Xe,kr,uf(t,e));return Xf(s,i=>n(i.exists()?i.data():null),i=>{console.error("subscribeMonthSettings error:",i),r(i)})},Nb=(t,e,n,r)=>{if(!Cr||!Xe)return()=>{};const s=Of(Xe,kr,cf(t,e),"entries");return Xf(s,i=>{const o=[];i.forEach(l=>o.push(l.data())),n(o)},i=>{console.error("subscribeMonthEntries error:",i),r(i)})},bb=async(t,e)=>{if(!Cr||!Xe)return;const n=mi(Xe,kr,uf(t.monthKey,t.group)),r={...t,schemaVersion:2,updatedAt:Date.now(),updatedBy:e??"unknown"};await lE(n,r)},Db=async(t,e)=>{if(!Cr||!Xe)return;const n=mi(Xe,kr,cf(t.monthKey,t.group),"entries",T0(t.memberName,t.date)),r={...t,updatedAt:Date.now(),updatedBy:e??"unknown"};await lE(n,r)},Vb=async(t,e,n,r)=>{if(!Cr||!Xe)return;const s=mi(Xe,kr,cf(t,e),"entries",T0(n,r));await tP(s)},Mb=async(t,e)=>{if(!Cr||!Xe)return null;const n=mi(Xe,kr,uf(t,e)),r=await eP(n);return r.exists()?r.data():null},Ob=t=>{const[e,n]=t.split("-").map(Number);return{year:e,month0:(n||1)-1}},Lb=({settings:t,currentMonthKey:e,onSaveSettings:n,onChangeMonth:r})=>{const{year:s,month0:i}=Ob(e),o=t.group,[l,u]=Y.useState(t),[h,p]=Y.useState(""),[m,v]=Y.useState(!1),[k,P]=Y.useState(""),[N,O]=Y.useState(""),[S,w]=Y.useState("2"),[A,V]=Y.useState(null),[b,L]=Y.useState("");Y.useEffect(()=>{u(t)},[t]),Y.useEffect(()=>{p(""),w("2"),v(!1)},[o,e]);const _=K=>{u(K),n(K)},y=K=>{const te=new Date(s,i);te.setMonth(te.getMonth()+K),r(lf(te.getFullYear(),te.getMonth()))},E=()=>{if(!m)return;const K=h.trim();!K||l.members.includes(K)||(_({...l,members:[...l.members,K]}),p(""))},T=async()=>{if(!m)return;const K=yS(e);try{const te=await Mb(K,o);if(!te||te.members.length===0){alert(`上個月 (${K}) 沒有 ${o} 班人員資料`);return}if(!window.confirm(`確定要從上月 (${K}) 匯入 ${te.members.length} 位 ${o} 班人員嗎？`))return;_({...l,members:[...te.members]})}catch(te){alert(`匯入失敗：${te.message??"未知錯誤"}`)}},x=K=>{m&&_({...l,members:l.members.filter(te=>te!==K)})},R=K=>{if(!m)return;const te=Lh(new Date(s,i)),Ze=K===1?te:mS(te,1);_({...l,firstWorkDay:Xn(Ze,"yyyy-MM-dd"),dailyQuotas:{}})},I=K=>{if(!m||!k||!N)return;const te=Pl(k),Ze=Pl(N);if(te>Ze){alert("起始日期不能晚於結束日期");return}const dt={...l.shiftExceptions};jh({start:te,end:Ze}).forEach(ft=>{const un=Xn(ft,"yyyy-MM-dd");K==="clear"?delete dt[un]:dt[un]=K==="work"}),_({...l,shiftExceptions:dt}),alert("排班範圍設定已更新")},Se=K=>I0(Xn(K,"yyyy-MM-dd"),l.firstWorkDay,l.shiftExceptions),W=Lh(new Date(s,i)),le=w0(W),se=jh({start:W,end:le}),F=K=>{if(!m||!l.firstWorkDay)return;const te={...l.dailyQuotas};se.forEach(Ze=>{if(Se(Ze)){const dt=Xn(Ze,"yyyy-MM-dd");K===0?delete te[dt]:te[dt]=K}}),_({...l,dailyQuotas:te})},H=()=>{if(!m)return;const K=parseFloat(S);!isNaN(K)&&K>=0&&F(K)},q=(K,te)=>{m&&(V(K),L(te>0?te.toString():""))},pe=()=>{if(!A)return;const K=parseFloat(b),te={...l.dailyQuotas};isNaN(K)||K===0?delete te[A]:te[A]=K,_({...l,dailyQuotas:te}),V(null),L("")},Te=!!l.firstWorkDay?Se(W)?1:2:null,Je=o==="A"?"text-indigo-600":"text-teal-600",Ht=o==="A"?"bg-indigo-50 border-indigo-200":"bg-teal-50 border-teal-200",Rt=o==="A"?"bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-600":"bg-teal-600 hover:bg-teal-700 focus:ring-teal-600",Ct=o==="A"?"focus:border-indigo-600 focus:ring-indigo-600":"focus:border-teal-600 focus:ring-teal-600",hs=m?"opacity-100":"opacity-60 cursor-not-allowed";return f.jsxs("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsx("h1",{className:"text-2xl font-bold text-gray-900 mr-3",children:"設定頁面"}),f.jsxs("span",{className:`px-3 py-1 rounded-full text-sm font-bold border ${Ht} ${Je}`,children:["目前設定：",o,"班"]})]}),f.jsx("button",{onClick:()=>v(!m),className:`flex items-center px-4 py-2 rounded-md font-bold shadow-sm transition-all ${m?"bg-red-50 text-red-600 border border-red-200 hover:bg-red-100":"bg-blue-600 text-white hover:bg-blue-700"}`,children:m?f.jsxs(f.Fragment,{children:[f.jsx(Ag,{className:"w-5 h-5 mr-2"}),"儲存並鎖定"]}):f.jsxs(f.Fragment,{children:[f.jsx(rS,{className:"w-5 h-5 mr-2"}),"啟用編輯模式"]})})]}),!m&&f.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 rounded-r shadow-sm flex items-start",children:[f.jsx(z1,{className:"w-5 h-5 text-yellow-500 mr-2 mt-0.5"}),f.jsxs("p",{className:"text-sm text-yellow-700",children:["目前為",f.jsx("strong",{children:"鎖定閱覽模式"}),"。如需修改配額、人員或非常規排班，請點擊右上角「啟用編輯模式」。"]})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"bg-white shadow rounded-lg p-6 relative overflow-hidden",children:[f.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${o==="A"?"bg-indigo-500":"bg-teal-500"}`}),f.jsxs("h2",{className:"text-lg font-bold text-gray-900 mb-4 flex items-center",children:[f.jsx(Mh,{className:`w-5 h-5 mr-2 ${Je}`}),"基本設定 (",o,"班)"]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center justify-between bg-slate-50 p-3 rounded-md",children:[f.jsx("button",{onClick:()=>y(-1),className:"p-1 hover:bg-slate-200 rounded",children:f.jsx(T1,{className:"w-5 h-5 text-slate-600"})}),f.jsxs("span",{className:"text-lg font-semibold text-slate-800",children:[s,"年 ",i+1,"月"]}),f.jsx("button",{onClick:()=>y(1),className:"p-1 hover:bg-slate-200 rounded",children:f.jsx(S1,{className:"w-5 h-5 text-slate-600"})})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"設定當月首日上班日"}),f.jsxs("div",{className:`grid grid-cols-2 gap-3 mb-4 ${hs}`,children:[f.jsxs("button",{onClick:()=>R(1),disabled:!m,className:`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${Te===1?`bg-blue-50 border-current ${Je}`:"bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[f.jsx("span",{className:"text-xl font-bold",children:"1號"}),f.jsx("span",{className:"text-xs mt-1 opacity-80",children:"基數日上班"})]}),f.jsxs("button",{onClick:()=>R(2),disabled:!m,className:`relative py-3 px-2 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${Te===2?`bg-blue-50 border-current ${Je}`:"bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`,children:[f.jsx("span",{className:"text-xl font-bold",children:"2號"}),f.jsx("span",{className:"text-xs mt-1 opacity-80",children:"偶數日上班"})]})]}),f.jsxs("div",{className:`pt-4 border-t border-gray-100 ${hs}`,children:[f.jsxs("h3",{className:"text-sm font-bold text-gray-700 mb-2 flex items-center",children:[f.jsx(R1,{className:"w-4 h-4 mr-1 text-orange-500"}),"非常規排班 (範圍設定)"]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs text-gray-500",children:"起始日期"}),f.jsx("input",{type:"date",value:k,disabled:!m,onChange:K=>P(K.target.value),className:"block w-full text-xs rounded border-gray-300 p-1 border"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs text-gray-500",children:"結束日期"}),f.jsx("input",{type:"date",value:N,disabled:!m,onChange:K=>O(K.target.value),className:"block w-full text-xs rounded border-gray-300 p-1 border"})]})]}),f.jsxs("div",{className:"flex gap-1",children:[f.jsx("button",{onClick:()=>I("work"),disabled:!m,className:"flex-1 bg-green-50 text-green-700 text-xs py-1 px-2 rounded border border-green-200 hover:bg-green-100",children:"設為上班"}),f.jsx("button",{onClick:()=>I("rest"),disabled:!m,className:"flex-1 bg-slate-50 text-slate-700 text-xs py-1 px-2 rounded border border-slate-200 hover:bg-slate-100",children:"設為輪休"}),f.jsx("button",{onClick:()=>I("clear"),disabled:!m,className:"flex-1 bg-white text-red-500 text-xs py-1 px-2 rounded border border-red-200 hover:bg-red-50",children:"清除設定"})]}),f.jsx("p",{className:"text-[10px] text-gray-400 mt-2",children:"* 選取日期範圍，強制設定該區間為上班或輪休。此設定優先權高於上方常規循環。"})]})]})]})]}),f.jsxs("div",{className:"bg-white shadow rounded-lg p-6 relative overflow-hidden",children:[f.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${o==="A"?"bg-indigo-500":"bg-teal-500"}`}),f.jsx("div",{className:"flex items-center justify-between mb-4",children:f.jsxs("h2",{className:"text-lg font-bold text-gray-900 flex items-center",children:[f.jsx(uS,{className:`w-5 h-5 mr-2 ${Je}`}),o,"班人員 (",l.members.length,")"]})}),m&&l.members.length===0&&f.jsxs("button",{onClick:T,className:"w-full mb-3 inline-flex justify-center items-center px-3 py-2 border border-dashed border-slate-300 rounded-md text-sm font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors",children:[f.jsx(O1,{className:"w-4 h-4 mr-2"}),"從上月匯入 ",o," 班人員"]}),f.jsxs("div",{className:`flex space-x-2 mb-4 ${hs}`,children:[f.jsx("input",{type:"text",placeholder:"輸入姓名",value:h,disabled:!m,onChange:K=>p(K.target.value),onKeyDown:K=>K.key==="Enter"&&E(),className:`flex-1 rounded-md border-gray-300 shadow-sm focus:ring-opacity-50 border p-2 text-sm focus:ring ${Ct}`}),f.jsx("button",{onClick:E,disabled:!h.trim()||!m,className:`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white focus:outline-none disabled:opacity-50 transition-colors ${Rt}`,children:f.jsx(m0,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"max-h-[300px] overflow-y-auto space-y-2",children:[l.members.length===0&&f.jsxs("p",{className:"text-sm text-gray-400 text-center py-4",children:["暫無 ",o," 班人員資料"]}),l.members.map(K=>f.jsxs("div",{className:"flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100",children:[f.jsx("span",{className:"text-gray-800 font-medium",children:K}),f.jsx("button",{onClick:()=>x(K),disabled:!m,className:`text-gray-400 hover:text-red-500 transition-colors ${m?"":"invisible"}`,children:f.jsx(y0,{className:"w-4 h-4"})})]},K))]})]})]}),f.jsx("div",{className:"lg:col-span-2",children:f.jsxs("div",{className:"bg-white shadow rounded-lg p-6 h-full flex flex-col relative overflow-hidden",children:[f.jsx("div",{className:`absolute top-0 left-0 w-1 h-full ${o==="A"?"bg-indigo-500":"bg-teal-500"}`}),f.jsxs("div",{className:"flex justify-between items-center mb-4",children:[f.jsxs("h2",{className:"text-lg font-bold text-gray-900",children:[o,"班 - 可休人數配額設定"]}),m&&f.jsx("span",{className:"text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded border border-red-100 animate-pulse",children:"編輯中"})]}),l.firstWorkDay?f.jsxs("div",{className:`bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 ${hs}`,children:[f.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-3 flex items-center",children:[f.jsx(tS,{className:`w-4 h-4 mr-2 ${Je}`}),"批量配額設定"]}),f.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-end sm:items-center",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"每日可休人數"}),f.jsx("input",{type:"number",min:"0",step:"0.5",disabled:!m,value:S,onChange:K=>w(K.target.value),className:`block w-full w-32 rounded-md border-gray-300 shadow-sm text-sm p-2 border focus:ring focus:ring-opacity-50 ${Ct}`,placeholder:"例如: 2"})]}),f.jsxs("div",{className:"flex gap-2 w-full sm:w-auto",children:[f.jsx("button",{onClick:H,disabled:!m,className:`flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition-colors ${Rt}`,children:"套用至本月上班日"}),f.jsxs("button",{onClick:()=>{window.confirm("確定要清除本月所有配額嗎？")&&F(0)},disabled:!m,className:"flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none transition-colors",children:[f.jsx(j1,{className:"w-4 h-4 mr-1"}),"清除"]})]})]})]}):f.jsx("div",{className:"bg-amber-50 border-l-4 border-amber-400 p-4 mb-4 rounded-md",children:f.jsxs("div",{className:"flex",children:[f.jsx("div",{className:"flex-shrink-0",children:f.jsx(of,{className:"h-5 w-5 text-amber-400","aria-hidden":"true"})}),f.jsx("div",{className:"ml-3",children:f.jsxs("p",{className:"text-sm text-amber-700",children:["請先在左側設定「",o,"班當月首日上班日」以啟用配額設定功能。"]})})]})}),f.jsx("div",{className:"flex-1 min-h-[500px]",children:f.jsxs("div",{className:"grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden h-full",children:[["日","一","二","三","四","五","六"].map(K=>f.jsx("div",{className:"bg-gray-100 py-2 text-center text-sm font-semibold text-gray-700",children:K},K)),se.map((K,te)=>{const Ze=Xn(K,"yyyy-MM-dd"),dt=Se(K),ft=l.dailyQuotas[Ze],un=ft&&!Number.isInteger(ft);let Kt="bg-white",ds="";dt?m?(ds="cursor-pointer transition-colors",un?Kt="bg-yellow-50 hover:bg-yellow-100":ft&&ft>0?Kt="bg-green-50 hover:bg-green-100":Kt="bg-white hover:bg-gray-50"):(ds="cursor-not-allowed",un?Kt="bg-yellow-50":ft&&ft>0&&(Kt="bg-green-50")):Kt="bg-slate-100 cursor-not-allowed";const Jo=E0(K),bu=te===0?{gridColumnStart:Jo===0?7:Jo+1}:{};return f.jsxs("div",{style:bu,onClick:()=>{m&&l.firstWorkDay&&dt&&q(Ze,ft||0)},className:`${Kt} ${ds} p-2 relative flex flex-col justify-between select-none min-h-[80px]`,children:[f.jsx("span",{className:`text-sm ${dt?"text-gray-900 font-medium":"text-gray-400"}`,children:Xn(K,"d")}),dt?f.jsx("div",{className:"flex-1 flex flex-col items-center justify-center",children:ft?f.jsx("span",{className:`text-xl font-bold ${un?"text-yellow-600":"text-green-600"}`,children:ft}):f.jsx("span",{className:"text-xs text-gray-300",children:m?"設定":"未設定"})}):f.jsx("div",{className:"flex-1 flex items-center justify-center",children:f.jsx("span",{className:"text-4xl font-black text-slate-300 opacity-50",children:"休"})})]},Ze)})]})})]})})]}),A&&f.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:f.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[f.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>V(null)}),f.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),f.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full",children:[f.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:f.jsx("div",{className:"sm:flex sm:items-start",children:f.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:text-left w-full",children:[f.jsxs("h3",{className:"text-lg leading-6 font-medium text-gray-900 mb-4",id:"modal-title",children:["設定配額 (",o,"班) - ",A]}),f.jsx("div",{className:"space-y-4",children:f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"可休人數"}),f.jsx("input",{type:"number",step:"0.5",min:"0",autoFocus:!0,value:b,onChange:K=>L(K.target.value),onKeyDown:K=>K.key==="Enter"&&pe(),className:`shadow-sm block w-full sm:text-lg border-gray-300 rounded-md p-3 border focus:ring focus:ring-opacity-50 ${Ct}`,placeholder:"請輸入數字"}),f.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["* 輸入 0 或留空代表清除配額。",f.jsx("br",{}),"* 整數：可排所有假別。",f.jsx("br",{}),"* 非整數(如0.5)：通常用於表示特殊假別，例如外宿配額。"]})]})})]})})}),f.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[f.jsxs("button",{type:"button",onClick:pe,className:`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors ${Rt}`,children:[f.jsx(Ag,{className:"w-4 h-4 mr-2"}),"儲存"]}),f.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors",onClick:()=>V(null),children:"取消"})]})]})]})})]})},jb=t=>{const[e,n]=t.split("-").map(Number);return{year:e,month0:(n||1)-1}},Fb=({settings:t,entries:e,currentMonthKey:n,onSaveEntry:r,onDeleteEntry:s})=>{const{year:i,month0:o}=jb(n),l=t.group,[u,h]=Y.useState(""),[p,m]=Y.useState(null),[v,k]=Y.useState(""),P=t.firstWorkDay&&t.members.length>0,N=l==="A"?"bg-indigo-600 hover:bg-indigo-700":"bg-teal-600 hover:bg-teal-700";Y.useEffect(()=>{h("")},[l,n]);const O=()=>{navigator.clipboard.writeText(window.location.href),alert("連結已複製！")},S=x=>I0(x,t.firstWorkDay,t.shiftExceptions),w=x=>t.dailyQuotas[x]||0,A=()=>{if(!p||!u||!v)return;r({date:p,memberName:u,type:v,group:l,monthKey:n}),k(""),m(null)},V=(x,R)=>{s(x,R)},b=Lh(new Date(i,o)),L=w0(b),_=jh({start:b,end:L}),y=p?w(p):0,E=Number.isInteger(y),T=p?E?v0:fS:[];return P?f.jsxs("div",{className:"max-w-7xl mx-auto py-2 sm:py-8 px-2 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4",children:[f.jsxs("div",{children:[f.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 flex items-center",children:[f.jsxs("span",{className:`mr-2 px-2 py-0.5 rounded text-white text-base ${l==="A"?"bg-indigo-500":"bg-teal-500"}`,children:[l,"班"]}),i,"年 ",o+1,"月 假表填寫"]}),f.jsx("p",{className:"text-base sm:text-sm text-gray-500 mt-1",children:"請選擇您的姓名，點擊上班日期進行填寫。變更會即時儲存。"})]}),f.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full md:w-auto",children:f.jsxs("button",{onClick:O,className:"flex-1 md:flex-none justify-center inline-flex items-center px-3 py-3 sm:py-2 border border-gray-300 rounded-md shadow-sm text-sm sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",children:[f.jsx(J1,{className:"w-4 h-4 mr-2"}),"分享"]})})]}),f.jsxs("div",{className:"bg-white p-3 sm:p-4 rounded-lg shadow mb-4 flex items-center space-x-2 sm:space-x-4 sticky top-16 z-40 border-b border-gray-100",children:[f.jsx("label",{className:"text-base sm:text-sm font-bold text-gray-700 whitespace-nowrap",children:"我是："}),f.jsxs("select",{value:u,onChange:x=>h(x.target.value),className:`block w-full max-w-xs rounded-md border-gray-300 border p-2 sm:p-2 text-base sm:text-sm shadow-sm focus:ring focus:ring-opacity-50 ${l==="A"?"focus:border-indigo-500 focus:ring-indigo-500":"focus:border-teal-500 focus:ring-teal-500"}`,children:[f.jsx("option",{value:"",children:"-- 請選擇姓名 --"}),t.members.map(x=>f.jsx("option",{value:x,children:x},x))]}),!u&&f.jsx("span",{className:"text-sm sm:text-sm text-red-500 animate-pulse font-medium",children:"請先選擇姓名"})]}),f.jsx("div",{className:"bg-white shadow rounded-lg overflow-hidden flex flex-col",children:f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("div",{className:"min-w-[900px]",children:[f.jsx("div",{className:"grid grid-cols-7 gap-px bg-gray-200 border-b border-gray-200",children:_0.map(x=>f.jsx("div",{className:"bg-gray-50 py-2 sm:py-3 text-center text-sm sm:text-sm font-bold text-gray-700",children:x},x))}),f.jsx("div",{className:"grid grid-cols-7 gap-px bg-gray-200",children:_.map((x,R)=>{const I=Xn(x,"yyyy-MM-dd"),Se=S(I),W=w(I),le=e.filter(q=>q.date===I&&t.members.includes(q.memberName)),se=le.length,F=gS(se,W),H=R===0?{gridColumnStart:E0(x)+1}:{};return f.jsxs("div",{style:H,className:`min-h-[50px] sm:min-h-[60px] md:min-h-[120px] bg-white relative flex flex-col ${Se?"":"bg-slate-50"}`,children:[f.jsxs("div",{className:"flex justify-between items-start p-1 sm:p-2",children:[f.jsx("span",{className:`text-base sm:text-sm font-medium ${Se?"text-gray-900":"text-gray-400"}`,children:Xn(x,"d")}),Se&&W>0&&f.jsxs("div",{className:`flex items-center text-xs sm:text-xs px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full ${F?"bg-red-100 text-red-700 font-bold":"bg-green-100 text-green-700"}`,children:[se,"/",W,F&&f.jsx(xg,{className:"w-3 h-3 ml-0.5"})]})]}),Se?f.jsxs("div",{className:"flex-1 px-0.5 pb-0.5 sm:px-2 sm:pb-2 flex flex-col gap-1 sm:gap-1",children:[le.map(q=>{const pe=u===q.memberName;return f.jsxs("div",{className:`
                                flex justify-between items-center px-1 py-0.5 sm:px-2 sm:py-1.5 rounded border group
                                ${pe?"bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-300 z-10":"bg-blue-50 text-blue-700 border-blue-100"}
                              `,children:[f.jsxs("div",{className:"flex-1 flex justify-between items-center overflow-hidden mr-1",children:[f.jsx("span",{className:"font-bold truncate text-xs sm:text-xs leading-tight",children:q.memberName}),f.jsx("span",{className:"font-bold whitespace-nowrap text-xs sm:text-xs leading-tight ml-1",children:q.type})]}),u===q.memberName&&f.jsx("button",{onClick:he=>{he.stopPropagation(),V(q.memberName,q.date)},className:"text-gray-400 hover:text-red-600 ml-1",children:f.jsx(af,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})})]},`${q.memberName}_${q.date}`)}),u&&W>0&&f.jsx("button",{onClick:()=>{m(I),k("")},className:`mt-auto w-full flex justify-center items-center py-1 sm:py-1 border-2 border-dashed border-gray-200 rounded text-gray-400 transition-colors text-xs sm:text-xs h-6 sm:h-auto ${l==="A"?"hover:border-indigo-500 hover:text-indigo-500":"hover:border-teal-500 hover:text-teal-500"}`,children:f.jsx(m0,{className:"w-3 h-3 sm:w-3 sm:h-3"})})]}):f.jsx("div",{className:"flex-1 flex items-center justify-center",children:f.jsx("span",{className:"text-4xl sm:text-2xl md:text-5xl font-black text-slate-200 select-none",children:"O"})})]},I)})})]})})}),p&&f.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:f.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[f.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>m(null)}),f.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),f.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[f.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:f.jsx("div",{className:"sm:flex sm:items-start",children:f.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",children:[f.jsxs("h3",{className:"text-xl leading-6 font-medium text-gray-900 mb-4",id:"modal-title",children:["新增假單 - ",p," (",l,"班)"]}),f.jsxs("div",{className:"mb-4 text-base text-gray-500",children:[f.jsxs("p",{children:["填寫人：",f.jsx("span",{className:"font-bold text-gray-900",children:u})]}),f.jsxs("p",{children:["當日配額：",w(p)," (",E?"可選一般假別":"可選一般假別 + 外宿",")"]})]}),f.jsx("div",{className:"grid grid-cols-4 gap-2",children:T.map(x=>f.jsx("button",{onClick:()=>k(x),className:`p-3 text-base rounded border ${v===x?`${N} text-white border-transparent`:"bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`,children:x},x))})]})})}),f.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2 sm:gap-0",children:[f.jsx("button",{type:"button",disabled:!v,className:`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 text-base font-medium text-white focus:outline-none disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm transition-colors ${N}`,onClick:A,children:"確定新增"}),f.jsx("button",{type:"button",className:"mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>m(null),children:"取消"})]})]})]})})]}):f.jsxs("div",{className:"flex flex-col items-center justify-center h-[60vh] text-center px-4",children:[f.jsx(xg,{className:"w-16 h-16 text-warning mb-4"}),f.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:[l,"班 設定尚未完成"]}),f.jsxs("p",{className:"text-gray-600 max-w-md",children:["請先返回「配額設定」頁面，設定「",l,"班當月首日上班日」並新增「團隊人員」，才能開始填寫假表。"]})]})},dI="audit_logs_root",fI="audit_logs",Ub=60*24*60*60*1e3,$b=(t,e,n,r,s)=>{const i=`${n}班 ${r}`;switch(t){case"ADD_LEAVE":return`${i} 新增假單 ${e.memberName??""} ${e.date??""}${s?" "+s:""}`;case"REMOVE_LEAVE":return`${i} 刪除假單 ${e.memberName??""} ${e.date??""}`;case"UPDATE_QUOTA":return`${i} 更新配額${e.date?` (${e.date})`:"（批量）"}`;case"UPDATE_MEMBERS":return`${i} 更新人員名單${s?` — ${s}`:""}`;case"UPDATE_FIRST_WORK_DAY":return`${i} 更新首日上班日${s?` → ${s}`:""}`;case"UPDATE_SHIFT_EXCEPTION":return`${i} 更新例外排班`;case"IMPORT_MEMBERS":return`${i} 從上月匯入人員${s?` (${s} 位)`:""}`;default:return`${i} 未知動作`}},Uc=async t=>{var r;if(!Vs()||!Xe||!((r=t.user)!=null&&r.email))return;const e=Date.now(),n={timestamp:e,expireAt:Le.fromMillis(e+Ub),userEmail:t.user.email,userDisplayName:t.user.displayName??t.user.email,group:t.group,monthKey:t.monthKey,action:t.action,target:t.target??{},before:t.before??null,after:t.after??null,summary:$b(t.action,t.target??{},t.group,t.monthKey,t.extra)};try{const s=Of(Xe,kr,dI,fI);await nP(s,n)}catch(s){console.error("writeAuditLog failed:",s)}},Jy=(t,e)=>{const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!0;for(const s of n)if(t[s]!==e[s])return!0;return!1},Bb=(t,e)=>{const n=[];t.firstWorkDay!==e.firstWorkDay&&n.push({action:"UPDATE_FIRST_WORK_DAY",extra:e.firstWorkDay||"(清除)",before:t.firstWorkDay,after:e.firstWorkDay});const r=t.members.join(","),s=e.members.join(",");return r!==s&&n.push({action:"UPDATE_MEMBERS",extra:`${t.members.length} → ${e.members.length} 人`,before:t.members,after:e.members}),Jy(t.dailyQuotas,e.dailyQuotas)&&n.push({action:"UPDATE_QUOTA",before:t.dailyQuotas,after:e.dailyQuotas}),Jy(t.shiftExceptions,e.shiftExceptions)&&n.push({action:"UPDATE_SHIFT_EXCEPTION",before:t.shiftExceptions,after:e.shiftExceptions}),n},zb=(t,e,n)=>{if(!Vs()||!Xe)return()=>{};const r=Of(Xe,kr,dI,fI),s=GC(r,QC("timestamp","desc"),YC(t));return Xf(s,i=>{const o=[];i.forEach(l=>o.push({id:l.id,...l.data()})),e(o)},i=>{console.error("subscribeAuditLogs error:",i),n(i)})},Zy={ADD_LEAVE:"新增假單",REMOVE_LEAVE:"刪除假單",UPDATE_QUOTA:"更新配額",UPDATE_MEMBERS:"更新人員",UPDATE_FIRST_WORK_DAY:"更新首日上班日",UPDATE_SHIFT_EXCEPTION:"更新例外排班",IMPORT_MEMBERS:"匯入人員"},qb={ADD_LEAVE:"bg-green-50 text-green-700 border-green-200",REMOVE_LEAVE:"bg-red-50 text-red-700 border-red-200",UPDATE_QUOTA:"bg-blue-50 text-blue-700 border-blue-200",UPDATE_MEMBERS:"bg-purple-50 text-purple-700 border-purple-200",UPDATE_FIRST_WORK_DAY:"bg-amber-50 text-amber-700 border-amber-200",UPDATE_SHIFT_EXCEPTION:"bg-orange-50 text-orange-700 border-orange-200",IMPORT_MEMBERS:"bg-teal-50 text-teal-700 border-teal-200"},Wb=t=>{const e=new Date(t),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${n}-${r}-${s} ${i}:${o}`},Hb=()=>{const[t,e]=Y.useState([]),[n,r]=Y.useState(!0),[s,i]=Y.useState(null),[o,l]=Y.useState("ALL"),[u,h]=Y.useState("ALL"),[p,m]=Y.useState("ALL"),[v,k]=Y.useState("ALL"),[P,N]=Y.useState(new Set);Y.useEffect(()=>{r(!0);const b=zb(100,L=>{e(L),r(!1)},L=>{i(L.message),r(!1)});return()=>b()},[]);const{monthOptions:O,userOptions:S}=Y.useMemo(()=>{const b=new Set,L=new Set;return t.forEach(_=>{b.add(_.monthKey),L.add(_.userDisplayName)}),{monthOptions:Array.from(b).sort().reverse(),userOptions:Array.from(L).sort()}},[t]),w=t.filter(b=>!(o!=="ALL"&&b.group!==o||u!=="ALL"&&b.action!==u||p!=="ALL"&&b.monthKey!==p||v!=="ALL"&&b.userDisplayName!==v)),A=b=>{N(L=>{const _=new Set(L);return _.has(b)?_.delete(b):_.add(b),_})},V=()=>{l("ALL"),h("ALL"),m("ALL"),k("ALL")};return f.jsxs("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"flex items-center justify-between mb-6",children:[f.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center",children:[f.jsx(Oh,{className:"w-6 h-6 mr-2 text-primary"}),"變更歷史紀錄"]}),f.jsx("span",{className:"text-sm text-gray-500",children:"最近 100 筆，保留 60 天"})]}),f.jsxs("div",{className:"bg-white shadow rounded-lg p-4 mb-4 grid grid-cols-2 sm:grid-cols-4 gap-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-gray-500 mb-1",children:"班別"}),f.jsxs("select",{value:o,onChange:b=>l(b.target.value),className:"block w-full text-sm rounded border-gray-300 p-2 border",children:[f.jsx("option",{value:"ALL",children:"全部"}),f.jsx("option",{value:"A",children:"A 班"}),f.jsx("option",{value:"B",children:"B 班"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-gray-500 mb-1",children:"動作類型"}),f.jsxs("select",{value:u,onChange:b=>h(b.target.value),className:"block w-full text-sm rounded border-gray-300 p-2 border",children:[f.jsx("option",{value:"ALL",children:"全部"}),Object.entries(Zy).map(([b,L])=>f.jsx("option",{value:b,children:L},b))]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-gray-500 mb-1",children:"月份"}),f.jsxs("select",{value:p,onChange:b=>m(b.target.value),className:"block w-full text-sm rounded border-gray-300 p-2 border",children:[f.jsx("option",{value:"ALL",children:"全部"}),O.map(b=>f.jsx("option",{value:b,children:b},b))]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-gray-500 mb-1",children:"操作者"}),f.jsxs("select",{value:v,onChange:b=>k(b.target.value),className:"block w-full text-sm rounded border-gray-300 p-2 border",children:[f.jsx("option",{value:"ALL",children:"全部"}),S.map(b=>f.jsx("option",{value:b,children:b},b))]})]}),f.jsx("div",{className:"col-span-2 sm:col-span-4 flex justify-end",children:f.jsxs("button",{onClick:V,className:"inline-flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50",children:[f.jsx(sf,{className:"w-3 h-3 mr-1"}),"清除篩選"]})})]}),n?f.jsx("div",{className:"flex justify-center py-10",children:f.jsx("div",{className:"animate-spin h-8 w-8 border-b-2 border-primary rounded-full"})}):s?f.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-700 p-4 rounded",children:["載入失敗：",s]}):w.length===0?f.jsx("div",{className:"bg-white shadow rounded-lg p-8 text-center text-gray-500",children:t.length===0?"目前還沒有任何紀錄":"沒有符合篩選條件的紀錄"}):f.jsx("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:f.jsx("ul",{className:"divide-y divide-gray-100",children:w.map(b=>{const L=b.id??`${b.timestamp}_${b.userEmail}`,_=P.has(L);return f.jsxs("li",{children:[f.jsxs("button",{onClick:()=>A(L),className:"w-full text-left p-4 hover:bg-slate-50 transition-colors flex items-start gap-3",children:[f.jsx("div",{className:"mt-1",children:_?f.jsx(N1,{className:"w-4 h-4 text-gray-400"}):f.jsx(D1,{className:"w-4 h-4 text-gray-400"})}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[f.jsx("span",{className:`text-xs font-medium px-2 py-0.5 rounded border ${qb[b.action]}`,children:Zy[b.action]}),f.jsxs("span",{className:`text-xs font-bold px-2 py-0.5 rounded ${b.group==="A"?"bg-indigo-100 text-indigo-700":"bg-teal-100 text-teal-700"}`,children:[b.group," 班"]}),f.jsx("span",{className:"text-xs text-gray-500",children:b.monthKey}),f.jsx("span",{className:"text-xs text-gray-400 ml-auto",children:Wb(b.timestamp)})]}),f.jsx("p",{className:"text-sm text-gray-800 break-words",children:b.summary}),f.jsxs("p",{className:"text-xs text-gray-500 mt-0.5",children:["by ",f.jsx("span",{className:"font-medium",children:b.userDisplayName})," (",b.userEmail,")"]})]})]}),_&&f.jsx("div",{className:"px-4 pb-4 pt-0 bg-slate-50 border-t border-slate-100",children:f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-xs font-bold text-gray-500 mb-1",children:"變更前 (before)"}),f.jsx("pre",{className:"text-xs bg-white border border-gray-200 rounded p-2 overflow-auto max-h-60",children:JSON.stringify(b.before,null,2)})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-xs font-bold text-gray-500 mb-1",children:"變更後 (after)"}),f.jsx("pre",{className:"text-xs bg-white border border-gray-200 rounded p-2 overflow-auto max-h-60",children:JSON.stringify(b.after,null,2)})]})]})})]},L)})})})]})},Kb=({onLogin:t,loading:e,onShowDebug:n})=>{const[r,s]=Y.useState(!1),[i,o]=Y.useState(!1);Y.useEffect(()=>{const u=navigator.userAgent||navigator.vendor||window.opera;s(/FBAN|FBAV|Line\/|Instagram|MicroMessenger/i.test(u)),o(/Line\//i.test(u))},[]);const l=()=>{if(window.location.search.includes("openExternalBrowser=1"))return;const u=new URL(window.location.href);u.searchParams.set("openExternalBrowser","1"),window.location.href=u.toString()};return f.jsx("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative",children:f.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200",children:[f.jsxs("div",{className:"bg-primary p-8 text-center relative overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 bg-blue-600 opacity-20 pattern-dots"}),f.jsxs("div",{className:"relative z-10",children:[f.jsx("div",{className:"mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner",children:f.jsx(g0,{className:"w-10 h-10 text-white"})}),f.jsx("h1",{className:"text-2xl font-bold text-white tracking-wide shadow-black drop-shadow-sm",children:"龍岡分隊假表管理"}),f.jsx("p",{className:"text-blue-100 mt-2 text-sm font-medium",children:"請登入以存取編輯權限"})]})]}),f.jsxs("div",{className:"p-8",children:[f.jsxs("div",{className:"text-center mb-8",children:[f.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-2",children:"歡迎回來"}),f.jsxs("p",{className:"text-slate-500 text-sm leading-relaxed",children:["為了確保資料安全與編輯歷程，",f.jsx("br",{}),"本系統採用 Google 帳號進行身分驗證。"]})]}),r&&f.jsx("div",{className:"mb-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded shadow-sm text-left",children:f.jsxs("div",{className:"flex",children:[f.jsx("div",{className:"flex-shrink-0",children:f.jsx(of,{className:"h-5 w-5 text-amber-400"})}),f.jsxs("div",{className:"ml-3",children:[f.jsx("h3",{className:"text-sm font-bold text-amber-800",children:"偵測到應用程式內瀏覽器"}),f.jsxs("div",{className:"mt-2 text-sm text-amber-700",children:[f.jsx("p",{className:"mb-2",children:"Google 安全性政策不允許在 Line、Facebook 等應用程式內建瀏覽器登入 (錯誤 403)。"}),f.jsx("p",{className:"font-bold mb-1",children:"解決方法："}),i&&f.jsxs("button",{onClick:l,className:"mb-2 w-full text-center px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center",children:[f.jsx(U1,{className:"w-3 h-3 mr-1"}),"點此嘗試自動切換至瀏覽器"]}),f.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-1 text-xs sm:text-sm",children:[f.jsxs("li",{children:["點擊畫面角落的選單圖示 (通常是 ",f.jsx("span",{className:"font-bold",children:"⋮"})," 或 ",f.jsx("span",{className:"font-bold",children:"⋯"}),")"]}),f.jsxs("li",{children:["選擇 ",f.jsx("span",{className:"font-bold",children:"「在預設瀏覽器中開啟」"})," 或 ",f.jsx("span",{className:"font-bold",children:"「以 Safari/Chrome 開啟」"})]})]})]})]})]})}),f.jsx("button",{onClick:t,disabled:e||r,className:"w-full group relative flex items-center justify-center px-4 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100",children:e?f.jsxs("span",{className:"flex items-center",children:[f.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[f.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),f.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"登入中..."]}):f.jsxs("span",{className:"flex items-center",children:[f.jsx("svg",{className:"w-5 h-5 mr-3",viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:f.jsxs("g",{transform:"matrix(1, 0, 0, 1, 27.009001, -39.23856)",children:[f.jsx("path",{fill:"#4285F4",d:"M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"}),f.jsx("path",{fill:"#34A853",d:"M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.424 63.239 -14.754 63.239 Z"}),f.jsx("path",{fill:"#FBBC05",d:"M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"}),f.jsx("path",{fill:"#EA4335",d:"M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.424 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"})]})}),r?"請先切換至瀏覽器":"使用 Google 帳號登入"]})})]}),f.jsxs("div",{className:"bg-gray-50 p-4 text-center border-t border-gray-100 flex flex-col items-center w-full",children:[f.jsx("p",{className:"text-xs text-slate-400 mb-2",children:"© 龍岡分隊假表管理 | Secure Access"}),n&&f.jsxs("button",{onClick:n,className:"mt-1 text-[10px] text-slate-300 hover:text-slate-500 flex items-center",children:[f.jsx(p0,{className:"w-3 h-3 mr-1"})," Debug Info"]})]})]})})},$c=({isVisible:t,onClose:e})=>{const[n,r]=Y.useState([]),s=()=>{r(Eb())};return Y.useEffect(()=>{if(t){s();const i=setInterval(s,1e3);return()=>clearInterval(i)}},[t]),t?f.jsxs("div",{className:"fixed inset-x-0 bottom-0 h-[50vh] bg-black/90 text-green-400 z-[10000] flex flex-col font-mono text-xs border-t-2 border-green-600 shadow-2xl",children:[f.jsxs("div",{className:"flex justify-between items-center p-2 bg-gray-900 border-b border-gray-700",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(p0,{className:"w-4 h-4"}),f.jsx("span",{className:"font-bold",children:"System Logs"})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:s,className:"p-1 hover:bg-gray-700 rounded text-blue-400",children:f.jsx(sf,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>{Ib(),s()},className:"p-1 hover:bg-gray-700 rounded text-red-400",children:f.jsx(y0,{className:"w-4 h-4"})}),f.jsx("button",{onClick:e,className:"p-1 hover:bg-gray-700 rounded text-gray-400",children:f.jsx(af,{className:"w-4 h-4"})})]})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-2 space-y-1",children:[n.length===0&&f.jsx("div",{className:"text-gray-500 italic",children:"No logs recorded."}),n.map((i,o)=>f.jsxs("div",{className:"border-b border-gray-800 pb-1 break-words",children:[f.jsxs("span",{className:"text-gray-500 mr-2",children:["[",i.timestamp,"]"]}),f.jsx("span",{className:i.type==="error"?"text-red-400 font-bold":i.type==="success"?"text-green-300 font-bold":i.type==="warn"?"text-yellow-400":"text-gray-300",children:i.message})]},o))]})]}):null};class Gb extends cv.Component{constructor(){super(...arguments);ma(this,"state",{hasError:!1,error:null});ma(this,"handleReset",()=>{this.setState({hasError:!1,error:null})});ma(this,"handleReload",()=>{window.location.reload()})}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,r){me(`[ErrorBoundary] ${n.message}`,"error"),console.error("ErrorBoundary caught:",n,r)}render(){var n;return this.state.hasError?f.jsxs("div",{className:"min-h-[60vh] flex flex-col items-center justify-center px-4 text-center",children:[f.jsx(of,{className:"w-16 h-16 text-red-500 mb-4"}),f.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"發生錯誤"}),f.jsx("p",{className:"text-gray-600 max-w-md mb-4",children:"畫面載入時發生問題，您可以嘗試重新整理頁面。"}),f.jsx("pre",{className:"bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded max-w-xl overflow-auto mb-4",children:((n=this.state.error)==null?void 0:n.message)||"未知錯誤"}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:this.handleReset,className:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50",children:"嘗試恢復"}),f.jsxs("button",{onClick:this.handleReload,className:"inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:opacity-90",children:[f.jsx(sf,{className:"w-4 h-4 mr-2"}),"重新整理"]}),this.props.onShowDebug&&f.jsx("button",{onClick:this.props.onShowDebug,className:"inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800",children:"顯示除錯日誌"})]})]}):this.props.children}}const Qb=()=>{const[t,e]=Y.useState("filling"),[n,r]=Y.useState("A"),s=new Date,[i,o]=Y.useState(lf(s.getFullYear(),s.getMonth())),[l,u]=Y.useState(xc(i,n)),[h,p]=Y.useState([]),[m,v]=Y.useState(null),[k,P]=Y.useState(!0),[N,O]=Y.useState(!1),[S,w]=Y.useState(!0),[A,V]=Y.useState(!1),[b,L]=Y.useState(!1),_=Y.useRef(!1);Y.useEffect(()=>{V(Vs()),me("App Mounted. Firebase Enabled: "+Vs())},[]);const y=W=>{console.error("Auth Error:",W);let le="登入失敗，請重試。";W.code==="auth/popup-closed-by-user"?le="登入視窗已被關閉。":W.code==="auth/unauthorized-domain"?le=`網域未授權 (${window.location.hostname})。`:W.message&&(le=W.message),alert(le)};Y.useEffect(()=>{let W=!0,le;if(!Vs()||!wn){P(!1);return}le=setTimeout(()=>{W&&k&&(me("Safety Timer Triggered (8s). Clearing loading state.","error"),P(!1),ss())},8e3);const se=async()=>{if(ud())try{await Rb()||(me("initAuth: Redirect checked but no user found. Stopping loading.","warn"),W&&P(!1))}catch{me("initAuth: Redirect check error.","error"),W&&P(!1)}},F=wn.onAuthStateChanged(H=>{W&&(H?(me(`Auth User: ${H.email}`,"success"),v(H),P(!1),clearTimeout(le),ss()):(me("Auth: No user session found."),v(null),ud()||P(!1)))});return se(),()=>{W=!1,clearTimeout(le),F()}},[]),Y.useEffect(()=>{if(u(xc(i,n)),p([]),!Vs()||!m){w(!1);return}w(!0);let W=!1,le=!1;const se=()=>{W&&le&&w(!1)},F=Pb(i,n,q=>{_.current=!0,u(q||xc(i,n)),_.current=!1,W=!0,se()},q=>{me(`Settings sync error: ${q.message}`,"error"),W=!0,se()}),H=Nb(i,n,q=>{p(q),le=!0,se()},q=>{me(`Entries sync error: ${q.message}`,"error"),le=!0,se()});return()=>{F(),H()}},[m,i,n]);const E=async()=>{O(!0);try{await kb()}catch(W){O(!1),y(W)}},T=async()=>{window.confirm("確定要登出嗎？")&&(await Cb(),w(!0))},x=async W=>{const le=l;if(u(W),A&&!_.current&&m)try{await bb(W,m.email);const se=Bb(le,W);for(const F of se)await Uc({user:{email:m.email,displayName:m.displayName},group:W.group,monthKey:W.monthKey,action:F.action,target:{},before:F.before,after:F.after,extra:F.extra})}catch(se){me(`saveMonthSettings failed: ${se.message}`,"error"),alert("同步失敗，請稍後重試")}},R=async W=>{const le=h.find(se=>se.memberName===W.memberName&&se.date===W.date);if(p(se=>[...se.filter(H=>!(H.memberName===W.memberName&&H.date===W.date)),W]),A&&m)try{await Db(W,m.email),await Uc({user:{email:m.email,displayName:m.displayName},group:W.group,monthKey:W.monthKey,action:"ADD_LEAVE",target:{date:W.date,memberName:W.memberName},before:le??null,after:W,extra:W.type})}catch(se){me(`saveLeaveEntry failed: ${se.message}`,"error"),alert("儲存假單失敗")}},I=async(W,le)=>{const se=h.find(F=>F.memberName===W&&F.date===le);if(p(F=>F.filter(H=>!(H.memberName===W&&H.date===le))),A&&m)try{await Vb(i,n,W,le),await Uc({user:{email:m.email,displayName:m.displayName},group:n,monthKey:i,action:"REMOVE_LEAVE",target:{date:le,memberName:W},before:se??null,after:null})}catch(F){me(`deleteLeaveEntry failed: ${F.message}`,"error"),alert("刪除假單失敗")}},Se=W=>{o(W)};return k?f.jsxs("div",{className:"flex items-center justify-center h-screen bg-slate-50 flex-col gap-4 fixed inset-0 z-[9999]",children:[f.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-primary"}),f.jsx("div",{className:"text-slate-600 font-medium text-sm animate-pulse",children:"系統載入中..."}),f.jsx("div",{className:"fixed bottom-0 left-0 w-full h-10 opacity-0 z-50",onClick:()=>L(W=>!W)}),f.jsx($c,{isVisible:b,onClose:()=>L(!1)})]}):A&&!m?f.jsxs(f.Fragment,{children:[f.jsx(Kb,{onLogin:E,loading:N,onShowDebug:()=>L(!0)}),f.jsx($c,{isVisible:b,onClose:()=>L(!1)})]}):f.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans",children:[f.jsx(hS,{currentPage:t,onNavigate:e,isFirebaseConnected:A,user:m,onLogout:T,currentGroup:n,onGroupChange:r}),f.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8",children:[!A&&f.jsx("div",{className:"mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r shadow-sm",children:f.jsxs("p",{className:"text-sm text-yellow-700",children:["目前使用 ",f.jsx("strong",{children:"本機模式"}),"。"]})}),f.jsx(Gb,{onShowDebug:()=>L(!0),children:t==="history"?f.jsx(Hb,{}):S?f.jsx("div",{className:"flex justify-center py-10",children:f.jsx("div",{className:"animate-spin h-8 w-8 border-b-2 border-primary rounded-full"})}):f.jsxs(f.Fragment,{children:[t==="settings"&&f.jsx(Lb,{settings:l,currentMonthKey:i,onSaveSettings:x,onChangeMonth:Se}),t==="filling"&&f.jsx(Fb,{settings:l,entries:h,currentMonthKey:i,onSaveEntry:R,onDeleteEntry:I})]})})]}),f.jsx($c,{isVisible:b,onClose:()=>L(!1)})]})},pI=document.getElementById("root");if(!pI)throw new Error("Could not find root element to mount to");const Yb=Bc.createRoot(pI);Yb.render(f.jsx(cv.StrictMode,{children:f.jsx(Qb,{})}));
