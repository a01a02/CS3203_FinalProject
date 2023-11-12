function DR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function NR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $0={exports:{}},Pc={},j0={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),OR=Symbol.for("react.portal"),LR=Symbol.for("react.fragment"),bR=Symbol.for("react.strict_mode"),MR=Symbol.for("react.profiler"),VR=Symbol.for("react.provider"),FR=Symbol.for("react.context"),UR=Symbol.for("react.forward_ref"),$R=Symbol.for("react.suspense"),jR=Symbol.for("react.memo"),BR=Symbol.for("react.lazy"),Sy=Symbol.iterator;function zR(t){return t===null||typeof t!="object"?null:(t=Sy&&t[Sy]||t["@@iterator"],typeof t=="function"?t:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z0=Object.assign,H0={};function to(t,e,n){this.props=t,this.context=e,this.refs=H0,this.updater=n||B0}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function W0(){}W0.prototype=to.prototype;function Mp(t,e,n){this.props=t,this.context=e,this.refs=H0,this.updater=n||B0}var Vp=Mp.prototype=new W0;Vp.constructor=Mp;z0(Vp,to.prototype);Vp.isPureReactComponent=!0;var Ry=Array.isArray,q0=Object.prototype.hasOwnProperty,Fp={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)q0.call(e,r)&&!K0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ya,type:t,key:s,ref:o,props:i,_owner:Fp.current}}function HR(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Up(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function WR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ay=/\/+/g;function Wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WR(""+t.key):e.toString(36)}function ou(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ya:case OR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wh(o,0):r,Ry(i)?(n="",t!=null&&(n=t.replace(Ay,"$&/")+"/"),ou(i,e,n,"",function(u){return u})):i!=null&&(Up(i)&&(i=HR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ay,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ry(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Wh(s,a);o+=ou(s,e,n,l,i)}else if(l=zR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Wh(s,a++),o+=ou(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pl(t,e,n){if(t==null)return t;var r=[],i=0;return ou(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},au={transition:null},KR={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:au,ReactCurrentOwner:Fp};re.Children={map:Pl,forEach:function(t,e,n){Pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pl(t,function(){e++}),e},toArray:function(t){return Pl(t,function(e){return e})||[]},only:function(t){if(!Up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=to;re.Fragment=LR;re.Profiler=MR;re.PureComponent=Mp;re.StrictMode=bR;re.Suspense=$R;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KR;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=z0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)q0.call(e,l)&&!K0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ya,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:FR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VR,_context:t},t.Consumer=t};re.createElement=G0;re.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:UR,render:t}};re.isValidElement=Up;re.lazy=function(t){return{$$typeof:BR,_payload:{_status:-1,_result:t},_init:qR}};re.memo=function(t,e){return{$$typeof:jR,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=au.transition;au.transition={};try{t()}finally{au.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return Nt.current.useCallback(t,e)};re.useContext=function(t){return Nt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Nt.current.useEffect(t,e)};re.useId=function(){return Nt.current.useId()};re.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Nt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};re.useRef=function(t){return Nt.current.useRef(t)};re.useState=function(t){return Nt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Nt.current.useTransition()};re.version="18.2.0";j0.exports=re;var C=j0.exports;const _n=NR(C),GR=DR({__proto__:null,default:_n},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QR=C,YR=Symbol.for("react.element"),XR=Symbol.for("react.fragment"),JR=Object.prototype.hasOwnProperty,ZR=QR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eA={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)JR.call(e,r)&&!eA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YR,type:t,key:s,ref:o,props:i,_owner:ZR.current}}Pc.Fragment=XR;Pc.jsx=Q0;Pc.jsxs=Q0;$0.exports=Pc;var D=$0.exports,Gd={},Y0={exports:{}},Yt={},X0={exports:{}},J0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var z=O.length;O.push($);e:for(;0<z;){var ge=z-1>>>1,Re=O[ge];if(0<i(Re,$))O[ge]=$,O[z]=Re,z=ge;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var $=O[0],z=O.pop();if(z!==$){O[0]=z;e:for(var ge=0,Re=O.length,dn=Re>>>1;ge<dn;){var ae=2*(ge+1)-1,Lt=O[ae],dt=ae+1,bt=O[dt];if(0>i(Lt,z))dt<Re&&0>i(bt,Lt)?(O[ge]=bt,O[dt]=z,ge=dt):(O[ge]=Lt,O[ae]=z,ge=ae);else if(dt<Re&&0>i(bt,z))O[ge]=bt,O[dt]=z,ge=dt;else break e}}return $}function i(O,$){var z=O.sortIndex-$.sortIndex;return z!==0?z:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=O)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function m(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,st(T);else{var $=n(u);$!==null&&qe(m,$.startTime-O)}}function T(O,$){v=!1,_&&(_=!1,g(N),N=-1),p=!0;var z=d;try{for(y($),h=n(l);h!==null&&(!(h.expirationTime>$)||O&&!Ue());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Re=ge(h.expirationTime<=$);$=t.unstable_now(),typeof Re=="function"?h.callback=Re:h===n(l)&&r(l),y($)}else r(l);h=n(l)}if(h!==null)var dn=!0;else{var ae=n(u);ae!==null&&qe(m,ae.startTime-$),dn=!1}return dn}finally{h=null,d=z,p=!1}}var R=!1,S=null,N=-1,J=5,B=-1;function Ue(){return!(t.unstable_now()-B<J)}function fe(){if(S!==null){var O=t.unstable_now();B=O;var $=!0;try{$=S(!0,O)}finally{$?Jt():(R=!1,S=null)}}else R=!1}var Jt;if(typeof f=="function")Jt=function(){f(fe)};else if(typeof MessageChannel<"u"){var kn=new MessageChannel,Cn=kn.port2;kn.port1.onmessage=fe,Jt=function(){Cn.postMessage(null)}}else Jt=function(){w(fe,0)};function st(O){S=O,R||(R=!0,Jt())}function qe(O,$){N=w(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,st(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var z=d;d=$;try{return O()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=d;d=O;try{return $()}finally{d=z}},t.unstable_scheduleCallback=function(O,$,z){var ge=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ge+z:ge):z=ge,O){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=z+Re,O={id:c++,callback:$,priorityLevel:O,startTime:z,expirationTime:Re,sortIndex:-1},z>ge?(O.sortIndex=z,e(u,O),n(l)===null&&O===n(u)&&(_?(g(N),N=-1):_=!0,qe(m,z-ge))):(O.sortIndex=Re,e(l,O),v||p||(v=!0,st(T))),O},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(O){var $=d;return function(){var z=d;d=$;try{return O.apply(this,arguments)}finally{d=z}}}})(J0);X0.exports=J0;var tA=X0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=C,Gt=tA;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ew=new Set,ha={};function Bi(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(ha[t]=e,t=0;t<e.length;t++)ew.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=Object.prototype.hasOwnProperty,nA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ky={},Cy={};function rA(t){return Qd.call(Cy,t)?!0:Qd.call(ky,t)?!1:nA.test(t)?Cy[t]=!0:(ky[t]=!0,!1)}function iA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sA(t,e,n,r){if(e===null||typeof e>"u"||iA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var $p=/[\-:]([a-z])/g;function jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($p,jp);ht[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($p,jp);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($p,jp);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sA(e,n,i,r)&&(n=null),r||i===null?rA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xl=Symbol.for("react.element"),rs=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),tw=Symbol.for("react.provider"),nw=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),Wp=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),rw=Symbol.for("react.offscreen"),Py=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=Py&&t[Py]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,qh;function Mo(t){if(qh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qh=e&&e[1]||""}return`
`+qh+t}var Kh=!1;function Gh(t,e){if(!t||Kh)return"";Kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function oA(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=Gh(t.type,!1),t;case 11:return t=Gh(t.type.render,!1),t;case 1:return t=Gh(t.type,!0),t;default:return""}}function Zd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case rs:return"Portal";case Yd:return"Profiler";case zp:return"StrictMode";case Xd:return"Suspense";case Jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nw:return(t.displayName||"Context")+".Consumer";case tw:return(t._context.displayName||"Context")+".Provider";case Hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wp:return e=t.displayName||null,e!==null?e:Zd(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Zd(t(e))}catch{}}return null}function aA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zd(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lA(t){var e=iw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Dl(t){t._valueTracker||(t._valueTracker=lA(t))}function sw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ef(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ow(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function tf(t,e){ow(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&nf(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nf(t,e,n){(e!=="number"||xu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function _s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ny(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Vo(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function aw(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Oy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nl,uw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uA=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){uA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function cw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cA=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(cA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uf=null,ws=null,Es=null;function Ly(t){if(t=Za(t)){if(typeof uf!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Lc(e),uf(t.stateNode,t.type,e))}}function dw(t){ws?Es?Es.push(t):Es=[t]:ws=t}function fw(){if(ws){var t=ws,e=Es;if(Es=ws=null,Ly(t),e)for(t=0;t<e.length;t++)Ly(e[t])}}function pw(t,e){return t(e)}function mw(){}var Qh=!1;function gw(t,e,n){if(Qh)return t(e,n);Qh=!0;try{return pw(t,e,n)}finally{Qh=!1,(ws!==null||Es!==null)&&(mw(),fw())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var r=Lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var cf=!1;if(sr)try{var To={};Object.defineProperty(To,"passive",{get:function(){cf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{cf=!1}function hA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qo=!1,Du=null,Nu=!1,hf=null,dA={onError:function(t){Qo=!0,Du=t}};function fA(t,e,n,r,i,s,o,a,l){Qo=!1,Du=null,hA.apply(dA,arguments)}function pA(t,e,n,r,i,s,o,a,l){if(fA.apply(this,arguments),Qo){if(Qo){var u=Du;Qo=!1,Du=null}else throw Error(P(198));Nu||(Nu=!0,hf=u)}}function zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function by(t){if(zi(t)!==t)throw Error(P(188))}function mA(t){var e=t.alternate;if(!e){if(e=zi(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return by(i),t;if(s===r)return by(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function vw(t){return t=mA(t),t!==null?_w(t):null}function _w(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_w(t);if(e!==null)return e;t=t.sibling}return null}var ww=Gt.unstable_scheduleCallback,My=Gt.unstable_cancelCallback,gA=Gt.unstable_shouldYield,yA=Gt.unstable_requestPaint,Fe=Gt.unstable_now,vA=Gt.unstable_getCurrentPriorityLevel,Kp=Gt.unstable_ImmediatePriority,Ew=Gt.unstable_UserBlockingPriority,Ou=Gt.unstable_NormalPriority,_A=Gt.unstable_LowPriority,Tw=Gt.unstable_IdlePriority,xc=null,Fn=null;function wA(t){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(xc,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:IA,EA=Math.log,TA=Math.LN2;function IA(t){return t>>>=0,t===0?32:31-(EA(t)/TA|0)|0}var Ol=64,Ll=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fo(a):(s&=o,s!==0&&(r=Fo(s)))}else o=n&~i,o!==0?r=Fo(o):s!==0&&(r=Fo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function SA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iw(){var t=Ol;return Ol<<=1,!(Ol&4194240)&&(Ol=64),t}function Yh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function AA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Sw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rw,Qp,Aw,kw,Cw,ff=!1,bl=[],br=null,Mr=null,Vr=null,pa=new Map,ma=new Map,Ar=[],kA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vy(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Za(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function CA(t,e,n,r,i){switch(e){case"focusin":return br=Io(br,t,e,n,r,i),!0;case"dragenter":return Mr=Io(Mr,t,e,n,r,i),!0;case"mouseover":return Vr=Io(Vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return pa.set(s,Io(pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ma.set(s,Io(ma.get(s)||null,t,e,n,r,i)),!0}return!1}function Pw(t){var e=hi(t.target);if(e!==null){var n=zi(e);if(n!==null){if(e=n.tag,e===13){if(e=yw(n),e!==null){t.blockedOn=e,Cw(t.priority,function(){Aw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lf=r,n.target.dispatchEvent(r),lf=null}else return e=Za(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function Fy(t,e,n){lu(t)&&n.delete(e)}function PA(){ff=!1,br!==null&&lu(br)&&(br=null),Mr!==null&&lu(Mr)&&(Mr=null),Vr!==null&&lu(Vr)&&(Vr=null),pa.forEach(Fy),ma.forEach(Fy)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,ff||(ff=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,PA)))}function ga(t){function e(i){return So(i,t)}if(0<bl.length){So(bl[0],t);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&So(br,t),Mr!==null&&So(Mr,t),Vr!==null&&So(Vr,t),pa.forEach(e),ma.forEach(e),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)Pw(n),n.blockedOn===null&&Ar.shift()}var Ts=pr.ReactCurrentBatchConfig,bu=!0;function xA(t,e,n,r){var i=he,s=Ts.transition;Ts.transition=null;try{he=1,Yp(t,e,n,r)}finally{he=i,Ts.transition=s}}function DA(t,e,n,r){var i=he,s=Ts.transition;Ts.transition=null;try{he=4,Yp(t,e,n,r)}finally{he=i,Ts.transition=s}}function Yp(t,e,n,r){if(bu){var i=pf(t,e,n,r);if(i===null)od(t,e,r,Mu,n),Vy(t,r);else if(CA(i,t,e,n,r))r.stopPropagation();else if(Vy(t,r),e&4&&-1<kA.indexOf(t)){for(;i!==null;){var s=Za(i);if(s!==null&&Rw(s),s=pf(t,e,n,r),s===null&&od(t,e,r,Mu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else od(t,e,r,null,n)}}var Mu=null;function pf(t,e,n,r){if(Mu=null,t=qp(r),t=hi(t),t!==null)if(e=zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mu=t,null}function xw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vA()){case Kp:return 1;case Ew:return 4;case Ou:case _A:return 16;case Tw:return 536870912;default:return 16}default:return 16}}var Nr=null,Xp=null,uu=null;function Dw(){if(uu)return uu;var t,e=Xp,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uu=i.slice(t,1<r?1-r:void 0)}function cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Uy(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:Uy,this.isPropagationStopped=Uy,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=Xt(no),Ja=xe({},no,{view:0,detail:0}),NA=Xt(Ja),Xh,Jh,Ro,Dc=xe({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Xh=t.screenX-Ro.screenX,Jh=t.screenY-Ro.screenY):Jh=Xh=0,Ro=t),Xh)},movementY:function(t){return"movementY"in t?t.movementY:Jh}}),$y=Xt(Dc),OA=xe({},Dc,{dataTransfer:0}),LA=Xt(OA),bA=xe({},Ja,{relatedTarget:0}),Zh=Xt(bA),MA=xe({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),VA=Xt(MA),FA=xe({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UA=Xt(FA),$A=xe({},no,{data:0}),jy=Xt($A),jA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zA[t])?!!e[t]:!1}function Zp(){return HA}var WA=xe({},Ja,{key:function(t){if(t.key){var e=jA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qA=Xt(WA),KA=xe({},Dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),By=Xt(KA),GA=xe({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),QA=Xt(GA),YA=xe({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),XA=Xt(YA),JA=xe({},Dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZA=Xt(JA),ek=[9,13,27,32],em=sr&&"CompositionEvent"in window,Yo=null;sr&&"documentMode"in document&&(Yo=document.documentMode);var tk=sr&&"TextEvent"in window&&!Yo,Nw=sr&&(!em||Yo&&8<Yo&&11>=Yo),zy=String.fromCharCode(32),Hy=!1;function Ow(t,e){switch(t){case"keyup":return ek.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function nk(t,e){switch(t){case"compositionend":return Lw(e);case"keypress":return e.which!==32?null:(Hy=!0,zy);case"textInput":return t=e.data,t===zy&&Hy?null:t;default:return null}}function rk(t,e){if(ss)return t==="compositionend"||!em&&Ow(t,e)?(t=Dw(),uu=Xp=Nr=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nw&&e.locale!=="ko"?null:e.data;default:return null}}var ik={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ik[t.type]:e==="textarea"}function bw(t,e,n,r){dw(r),e=Vu(e,"onChange"),0<e.length&&(n=new Jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xo=null,ya=null;function sk(t){qw(t,0)}function Nc(t){var e=ls(t);if(sw(e))return t}function ok(t,e){if(t==="change")return e}var Mw=!1;if(sr){var ed;if(sr){var td="oninput"in document;if(!td){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),td=typeof qy.oninput=="function"}ed=td}else ed=!1;Mw=ed&&(!document.documentMode||9<document.documentMode)}function Ky(){Xo&&(Xo.detachEvent("onpropertychange",Vw),ya=Xo=null)}function Vw(t){if(t.propertyName==="value"&&Nc(ya)){var e=[];bw(e,ya,t,qp(t)),gw(sk,e)}}function ak(t,e,n){t==="focusin"?(Ky(),Xo=e,ya=n,Xo.attachEvent("onpropertychange",Vw)):t==="focusout"&&Ky()}function lk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(ya)}function uk(t,e){if(t==="click")return Nc(e)}function ck(t,e){if(t==="input"||t==="change")return Nc(e)}function hk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sn=typeof Object.is=="function"?Object.is:hk;function va(t,e){if(Sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qd.call(e,i)||!Sn(t[i],e[i]))return!1}return!0}function Gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qy(t,e){var n=Gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gy(n)}}function Fw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uw(){for(var t=window,e=xu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xu(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dk(t){var e=Uw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fw(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qy(n,s);var o=Qy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fk=sr&&"documentMode"in document&&11>=document.documentMode,os=null,mf=null,Jo=null,gf=!1;function Yy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||os==null||os!==xu(r)||(r=os,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&va(Jo,r)||(Jo=r,r=Vu(mf,"onSelect"),0<r.length&&(e=new Jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=os)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},nd={},$w={};sr&&($w=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Oc(t){if(nd[t])return nd[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $w)return nd[t]=e[n];return t}var jw=Oc("animationend"),Bw=Oc("animationiteration"),zw=Oc("animationstart"),Hw=Oc("transitionend"),Ww=new Map,Xy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(t,e){Ww.set(t,e),Bi(e,[t])}for(var rd=0;rd<Xy.length;rd++){var id=Xy[rd],pk=id.toLowerCase(),mk=id[0].toUpperCase()+id.slice(1);ei(pk,"on"+mk)}ei(jw,"onAnimationEnd");ei(Bw,"onAnimationIteration");ei(zw,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(Hw,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function Jy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pA(r,e,void 0,t),t.currentTarget=null}function qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Jy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Jy(i,a,u),s=l}}}if(Nu)throw t=hf,Nu=!1,hf=null,t}function _e(t,e){var n=e[Ef];n===void 0&&(n=e[Ef]=new Set);var r=t+"__bubble";n.has(r)||(Kw(e,t,2,!1),n.add(r))}function sd(t,e,n){var r=0;e&&(r|=4),Kw(n,t,r,e)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[Fl]){t[Fl]=!0,ew.forEach(function(n){n!=="selectionchange"&&(gk.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fl]||(e[Fl]=!0,sd("selectionchange",!1,e))}}function Kw(t,e,n,r){switch(xw(e)){case 1:var i=xA;break;case 4:i=DA;break;default:i=Yp}n=i.bind(null,e,n,t),i=void 0,!cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gw(function(){var u=s,c=qp(n),h=[];e:{var d=Ww.get(t);if(d!==void 0){var p=Jp,v=t;switch(t){case"keypress":if(cu(n)===0)break e;case"keydown":case"keyup":p=qA;break;case"focusin":v="focus",p=Zh;break;case"focusout":v="blur",p=Zh;break;case"beforeblur":case"afterblur":p=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$y;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=QA;break;case jw:case Bw:case zw:p=VA;break;case Hw:p=XA;break;case"scroll":p=NA;break;case"wheel":p=ZA;break;case"copy":case"cut":case"paste":p=UA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=By}var _=(e&4)!==0,w=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var m=y.stateNode;if(y.tag===5&&m!==null&&(y=m,g!==null&&(m=fa(f,g),m!=null&&_.push(wa(f,m,y)))),w)break;f=f.return}0<_.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==lf&&(v=n.relatedTarget||n.fromElement)&&(hi(v)||v[or]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?hi(v):null,v!==null&&(w=zi(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=$y,m="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=By,m="onPointerLeave",g="onPointerEnter",f="pointer"),w=p==null?d:ls(p),y=v==null?d:ls(v),d=new _(m,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,m=null,hi(c)===u&&(_=new _(g,f+"enter",v,n,c),_.target=y,_.relatedTarget=w,m=_),w=m,p&&v)t:{for(_=p,g=v,f=0,y=_;y;y=Xi(y))f++;for(y=0,m=g;m;m=Xi(m))y++;for(;0<f-y;)_=Xi(_),f--;for(;0<y-f;)g=Xi(g),y--;for(;f--;){if(_===g||g!==null&&_===g.alternate)break t;_=Xi(_),g=Xi(g)}_=null}else _=null;p!==null&&Zy(h,d,p,_,!1),v!==null&&w!==null&&Zy(h,w,v,_,!0)}}e:{if(d=u?ls(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=ok;else if(Wy(d))if(Mw)T=ck;else{T=lk;var R=ak}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=uk);if(T&&(T=T(t,u))){bw(h,T,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&nf(d,"number",d.value)}switch(R=u?ls(u):window,t){case"focusin":(Wy(R)||R.contentEditable==="true")&&(os=R,mf=u,Jo=null);break;case"focusout":Jo=mf=os=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Yy(h,n,c);break;case"selectionchange":if(fk)break;case"keydown":case"keyup":Yy(h,n,c)}var S;if(em)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ss?Ow(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Nw&&n.locale!=="ko"&&(ss||N!=="onCompositionStart"?N==="onCompositionEnd"&&ss&&(S=Dw()):(Nr=c,Xp="value"in Nr?Nr.value:Nr.textContent,ss=!0)),R=Vu(u,N),0<R.length&&(N=new jy(N,t,null,n,c),h.push({event:N,listeners:R}),S?N.data=S:(S=Lw(n),S!==null&&(N.data=S)))),(S=tk?nk(t,n):rk(t,n))&&(u=Vu(u,"onBeforeInput"),0<u.length&&(c=new jy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=S))}qw(h,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fa(t,n),s!=null&&r.unshift(wa(t,s,i)),s=fa(t,e),s!=null&&r.push(wa(t,s,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fa(n,s),l!=null&&o.unshift(wa(n,l,a))):i||(l=fa(n,s),l!=null&&o.push(wa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yk=/\r\n?/g,vk=/\u0000|\uFFFD/g;function ev(t){return(typeof t=="string"?t:""+t).replace(yk,`
`).replace(vk,"")}function Ul(t,e,n){if(e=ev(e),ev(t)!==e&&n)throw Error(P(425))}function Fu(){}var yf=null,vf=null;function _f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,_k=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,wk=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(t){return tv.resolve(null).then(t).catch(Ek)}:wf;function Ek(t){setTimeout(function(){throw t})}function ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ga(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ro=Math.random().toString(36).slice(2),On="__reactFiber$"+ro,Ea="__reactProps$"+ro,or="__reactContainer$"+ro,Ef="__reactEvents$"+ro,Tk="__reactListeners$"+ro,Ik="__reactHandles$"+ro;function hi(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nv(t);t!==null;){if(n=t[On])return n;t=nv(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[On]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Lc(t){return t[Ea]||null}var Tf=[],us=-1;function ti(t){return{current:t}}function Ie(t){0>us||(t.current=Tf[us],Tf[us]=null,us--)}function ve(t,e){us++,Tf[us]=t.current,t.current=e}var Qr={},Rt=ti(Qr),Ut=ti(!1),ki=Qr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Uu(){Ie(Ut),Ie(Rt)}function rv(t,e,n){if(Rt.current!==Qr)throw Error(P(168));ve(Rt,e),ve(Ut,n)}function Gw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,aA(t)||"Unknown",i));return xe({},n,r)}function $u(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,ki=Rt.current,ve(Rt,t),ve(Ut,Ut.current),!0}function iv(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=Gw(t,e,ki),r.__reactInternalMemoizedMergedChildContext=t,Ie(Ut),Ie(Rt),ve(Rt,t)):Ie(Ut),ve(Ut,n)}var Yn=null,bc=!1,ld=!1;function Qw(t){Yn===null?Yn=[t]:Yn.push(t)}function Sk(t){bc=!0,Qw(t)}function ni(){if(!ld&&Yn!==null){ld=!0;var t=0,e=he;try{var n=Yn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,bc=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),ww(Kp,ni),i}finally{he=e,ld=!1}}return null}var cs=[],hs=0,ju=null,Bu=0,tn=[],nn=0,Ci=null,Jn=1,Zn="";function li(t,e){cs[hs++]=Bu,cs[hs++]=ju,ju=t,Bu=e}function Yw(t,e,n){tn[nn++]=Jn,tn[nn++]=Zn,tn[nn++]=Ci,Ci=t;var r=Jn;t=Zn;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jn=1<<32-wn(e)+i|n<<i|r,Zn=s+t}else Jn=1<<s|n<<i|r,Zn=t}function nm(t){t.return!==null&&(li(t,1),Yw(t,1,0))}function rm(t){for(;t===ju;)ju=cs[--hs],cs[hs]=null,Bu=cs[--hs],cs[hs]=null;for(;t===Ci;)Ci=tn[--nn],tn[nn]=null,Zn=tn[--nn],tn[nn]=null,Jn=tn[--nn],tn[nn]=null}var Kt=null,Ht=null,ke=!1,vn=null;function Xw(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Jn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Ht=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sf(t){if(ke){var e=Ht;if(e){var n=e;if(!sv(t,e)){if(If(t))throw Error(P(418));e=Fr(n.nextSibling);var r=Kt;e&&sv(t,e)?Xw(r,n):(t.flags=t.flags&-4097|2,ke=!1,Kt=t)}}else{if(If(t))throw Error(P(418));t.flags=t.flags&-4097|2,ke=!1,Kt=t}}}function ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function $l(t){if(t!==Kt)return!1;if(!ke)return ov(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_f(t.type,t.memoizedProps)),e&&(e=Ht)){if(If(t))throw Jw(),Error(P(418));for(;e;)Xw(t,e),e=Fr(e.nextSibling)}if(ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Kt?Fr(t.stateNode.nextSibling):null;return!0}function Jw(){for(var t=Ht;t;)t=Fr(t.nextSibling)}function bs(){Ht=Kt=null,ke=!1}function im(t){vn===null?vn=[t]:vn.push(t)}var Rk=pr.ReactCurrentBatchConfig;function mn(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var zu=ti(null),Hu=null,ds=null,sm=null;function om(){sm=ds=Hu=null}function am(t){var e=zu.current;Ie(zu),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Hu=t,sm=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Hu===null)throw Error(P(308));ds=t,Hu.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var di=null;function lm(t){di===null?di=[t]:di.push(t)}function Zw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ar(t,n)}return i=r.interleaved,i===null?(e.next=e,lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ar(t,n)}function hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}function av(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wu(t,e,n,r){var i=t.updateQueue;Rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=xe({},h,d);break e;case 2:Rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xi|=o,t.lanes=o,t.memoizedState=h}}function lv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var tE=new Z0.Component().refs;function Af(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=jr(t),s=rr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(En(e,t,i,r),hu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=jr(t),s=rr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(En(e,t,i,r),hu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=jr(t),i=rr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(En(e,t,r,n),hu(e,t,r))}};function uv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(n,r)||!va(i,s):!0}function nE(t,e,n){var r=!1,i=Qr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=$t(e)?ki:Rt.current,r=e.contextTypes,s=(r=r!=null)?Ls(t,i):Qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=tE,um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=$t(e)?ki:Rt.current,i.context=Ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Af(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Wu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===tE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function jl(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hv(t){var e=t._init;return e(t._payload)}function rE(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Br(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,y,m){return f===null||f.tag!==6?(f=md(y,g.mode,m),f.return=g,f):(f=i(f,y),f.return=g,f)}function l(g,f,y,m){var T=y.type;return T===is?c(g,f,y.props.children,m,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sr&&hv(T)===f.type)?(m=i(f,y.props),m.ref=Ao(g,f,y),m.return=g,m):(m=yu(y.type,y.key,y.props,null,g.mode,m),m.ref=Ao(g,f,y),m.return=g,m)}function u(g,f,y,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=gd(y,g.mode,m),f.return=g,f):(f=i(f,y.children||[]),f.return=g,f)}function c(g,f,y,m,T){return f===null||f.tag!==7?(f=Ti(y,g.mode,m,T),f.return=g,f):(f=i(f,y),f.return=g,f)}function h(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=md(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xl:return y=yu(f.type,f.key,f.props,null,g.mode,y),y.ref=Ao(g,null,f),y.return=g,y;case rs:return f=gd(f,g.mode,y),f.return=g,f;case Sr:var m=f._init;return h(g,m(f._payload),y)}if(Vo(f)||Eo(f))return f=Ti(f,g.mode,y,null),f.return=g,f;jl(g,f)}return null}function d(g,f,y,m){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(g,f,""+y,m);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xl:return y.key===T?l(g,f,y,m):null;case rs:return y.key===T?u(g,f,y,m):null;case Sr:return T=y._init,d(g,f,T(y._payload),m)}if(Vo(y)||Eo(y))return T!==null?null:c(g,f,y,m,null);jl(g,y)}return null}function p(g,f,y,m,T){if(typeof m=="string"&&m!==""||typeof m=="number")return g=g.get(y)||null,a(f,g,""+m,T);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xl:return g=g.get(m.key===null?y:m.key)||null,l(f,g,m,T);case rs:return g=g.get(m.key===null?y:m.key)||null,u(f,g,m,T);case Sr:var R=m._init;return p(g,f,y,R(m._payload),T)}if(Vo(m)||Eo(m))return g=g.get(y)||null,c(f,g,m,T,null);jl(f,m)}return null}function v(g,f,y,m){for(var T=null,R=null,S=f,N=f=0,J=null;S!==null&&N<y.length;N++){S.index>N?(J=S,S=null):J=S.sibling;var B=d(g,S,y[N],m);if(B===null){S===null&&(S=J);break}t&&S&&B.alternate===null&&e(g,S),f=s(B,f,N),R===null?T=B:R.sibling=B,R=B,S=J}if(N===y.length)return n(g,S),ke&&li(g,N),T;if(S===null){for(;N<y.length;N++)S=h(g,y[N],m),S!==null&&(f=s(S,f,N),R===null?T=S:R.sibling=S,R=S);return ke&&li(g,N),T}for(S=r(g,S);N<y.length;N++)J=p(S,g,N,y[N],m),J!==null&&(t&&J.alternate!==null&&S.delete(J.key===null?N:J.key),f=s(J,f,N),R===null?T=J:R.sibling=J,R=J);return t&&S.forEach(function(Ue){return e(g,Ue)}),ke&&li(g,N),T}function _(g,f,y,m){var T=Eo(y);if(typeof T!="function")throw Error(P(150));if(y=T.call(y),y==null)throw Error(P(151));for(var R=T=null,S=f,N=f=0,J=null,B=y.next();S!==null&&!B.done;N++,B=y.next()){S.index>N?(J=S,S=null):J=S.sibling;var Ue=d(g,S,B.value,m);if(Ue===null){S===null&&(S=J);break}t&&S&&Ue.alternate===null&&e(g,S),f=s(Ue,f,N),R===null?T=Ue:R.sibling=Ue,R=Ue,S=J}if(B.done)return n(g,S),ke&&li(g,N),T;if(S===null){for(;!B.done;N++,B=y.next())B=h(g,B.value,m),B!==null&&(f=s(B,f,N),R===null?T=B:R.sibling=B,R=B);return ke&&li(g,N),T}for(S=r(g,S);!B.done;N++,B=y.next())B=p(S,g,N,B.value,m),B!==null&&(t&&B.alternate!==null&&S.delete(B.key===null?N:B.key),f=s(B,f,N),R===null?T=B:R.sibling=B,R=B);return t&&S.forEach(function(fe){return e(g,fe)}),ke&&li(g,N),T}function w(g,f,y,m){if(typeof y=="object"&&y!==null&&y.type===is&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case xl:e:{for(var T=y.key,R=f;R!==null;){if(R.key===T){if(T=y.type,T===is){if(R.tag===7){n(g,R.sibling),f=i(R,y.props.children),f.return=g,g=f;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sr&&hv(T)===R.type){n(g,R.sibling),f=i(R,y.props),f.ref=Ao(g,R,y),f.return=g,g=f;break e}n(g,R);break}else e(g,R);R=R.sibling}y.type===is?(f=Ti(y.props.children,g.mode,m,y.key),f.return=g,g=f):(m=yu(y.type,y.key,y.props,null,g.mode,m),m.ref=Ao(g,f,y),m.return=g,g=m)}return o(g);case rs:e:{for(R=y.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=i(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=gd(y,g.mode,m),f.return=g,g=f}return o(g);case Sr:return R=y._init,w(g,f,R(y._payload),m)}if(Vo(y))return v(g,f,y,m);if(Eo(y))return _(g,f,y,m);jl(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,y),f.return=g,g=f):(n(g,f),f=md(y,g.mode,m),f.return=g,g=f),o(g)):n(g,f)}return w}var Ms=rE(!0),iE=rE(!1),el={},Un=ti(el),Ta=ti(el),Ia=ti(el);function fi(t){if(t===el)throw Error(P(174));return t}function cm(t,e){switch(ve(Ia,e),ve(Ta,t),ve(Un,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}Ie(Un),ve(Un,e)}function Vs(){Ie(Un),Ie(Ta),Ie(Ia)}function sE(t){fi(Ia.current);var e=fi(Un.current),n=sf(e,t.type);e!==n&&(ve(Ta,t),ve(Un,n))}function hm(t){Ta.current===t&&(Ie(Un),Ie(Ta))}var Ce=ti(0);function qu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function dm(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var du=pr.ReactCurrentDispatcher,cd=pr.ReactCurrentBatchConfig,Pi=0,Pe=null,Qe=null,et=null,Ku=!1,Zo=!1,Sa=0,Ak=0;function pt(){throw Error(P(321))}function fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Sn(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,i,s){if(Pi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,du.current=t===null||t.memoizedState===null?xk:Dk,t=n(r,i),Zo){s=0;do{if(Zo=!1,Sa=0,25<=s)throw Error(P(301));s+=1,et=Qe=null,e.updateQueue=null,du.current=Nk,t=n(r,i)}while(Zo)}if(du.current=Gu,e=Qe!==null&&Qe.next!==null,Pi=0,et=Qe=Pe=null,Ku=!1,e)throw Error(P(300));return t}function mm(){var t=Sa!==0;return Sa=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Pe.memoizedState=et=t:et=et.next=t,et}function ln(){if(Qe===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?Pe.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(P(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?Pe.memoizedState=et=t:et=et.next=t}return et}function Ra(t,e){return typeof e=="function"?e(t):e}function hd(t){var e=ln(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Pe.lanes|=c,xi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Sn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dd(t){var e=ln(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Sn(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function oE(){}function aE(t,e){var n=Pe,r=ln(),i=e(),s=!Sn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,gm(cE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Aa(9,uE.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(P(349));Pi&30||lE(n,e,i)}return i}function lE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uE(t,e,n,r){e.value=n,e.getSnapshot=r,hE(e)&&dE(t)}function cE(t,e,n){return n(function(){hE(e)&&dE(t)})}function hE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sn(t,n)}catch{return!0}}function dE(t){var e=ar(t,1);e!==null&&En(e,t,1,-1)}function dv(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=Pk.bind(null,Pe,t),[e.memoizedState,t]}function Aa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fE(){return ln().memoizedState}function fu(t,e,n,r){var i=Dn();Pe.flags|=t,i.memoizedState=Aa(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&fm(r,o.deps)){i.memoizedState=Aa(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Aa(1|e,n,s,r)}function fv(t,e){return fu(8390656,8,t,e)}function gm(t,e){return Vc(2048,8,t,e)}function pE(t,e){return Vc(4,2,t,e)}function mE(t,e){return Vc(4,4,t,e)}function gE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yE(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,gE.bind(null,e,t),n)}function ym(){}function vE(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _E(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wE(t,e,n){return Pi&21?(Sn(n,e)||(n=Iw(),Pe.lanes|=n,xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function kk(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=cd.transition;cd.transition={};try{t(!1),e()}finally{he=n,cd.transition=r}}function EE(){return ln().memoizedState}function Ck(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},TE(t))IE(e,n);else if(n=Zw(t,e,n,r),n!==null){var i=Dt();En(n,t,r,i),SE(n,e,r)}}function Pk(t,e,n){var r=jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(TE(t))IE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,o)){var l=e.interleaved;l===null?(i.next=i,lm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Zw(t,e,i,r),n!==null&&(i=Dt(),En(n,t,r,i),SE(n,e,r))}}function TE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function IE(t,e){Zo=Ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function SE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}var Gu={readContext:an,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},xk={readContext:an,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:fv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fu(4194308,4,gE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return fu(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ck.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:dv,useDebugValue:ym,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=dv(!1),e=t[0];return t=kk.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Dn();if(ke){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),nt===null)throw Error(P(349));Pi&30||lE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fv(cE.bind(null,r,s,t),[t]),r.flags|=2048,Aa(9,uE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dn(),e=nt.identifierPrefix;if(ke){var n=Zn,r=Jn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ak++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dk={readContext:an,useCallback:vE,useContext:an,useEffect:gm,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:_E,useReducer:hd,useRef:fE,useState:function(){return hd(Ra)},useDebugValue:ym,useDeferredValue:function(t){var e=ln();return wE(e,Qe.memoizedState,t)},useTransition:function(){var t=hd(Ra)[0],e=ln().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:EE,unstable_isNewReconciler:!1},Nk={readContext:an,useCallback:vE,useContext:an,useEffect:gm,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:_E,useReducer:dd,useRef:fE,useState:function(){return dd(Ra)},useDebugValue:ym,useDeferredValue:function(t){var e=ln();return Qe===null?e.memoizedState=t:wE(e,Qe.memoizedState,t)},useTransition:function(){var t=dd(Ra)[0],e=ln().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:EE,unstable_isNewReconciler:!1};function Fs(t,e){try{var n="",r=e;do n+=oA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ok=typeof WeakMap=="function"?WeakMap:Map;function RE(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yu||(Yu=!0,Ff=r),Cf(t,e)},n}function AE(t,e,n){n=rr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cf(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ok;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Kk.bind(null,t,e,n),e.then(t,t))}function mv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var Lk=pr.ReactCurrentOwner,Ft=!1;function Pt(t,e,n,r){e.child=t===null?iE(e,null,n,r):Ms(e,t.child,n,r)}function yv(t,e,n,r,i){n=n.render;var s=e.ref;return Is(e,i),r=pm(t,e,n,r,s,i),n=mm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(ke&&n&&nm(e),e.flags|=1,Pt(t,e,r,i),e.child)}function vv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kE(t,e,s,r,i)):(t=yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,r)&&t.ref===e.ref)return lr(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function kE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(va(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,lr(t,e,i)}return Pf(t,e,n,r,i)}function CE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ps,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(ps,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(ps,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(ps,zt),zt|=r;return Pt(t,e,i,n),e.child}function PE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,r,i){var s=$t(n)?ki:Rt.current;return s=Ls(e,s),Is(e,i),n=pm(t,e,n,r,s,i),r=mm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(ke&&r&&nm(e),e.flags|=1,Pt(t,e,n,i),e.child)}function _v(t,e,n,r,i){if($t(n)){var s=!0;$u(e)}else s=!1;if(Is(e,i),e.stateNode===null)pu(t,e),nE(e,n,r),kf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=an(u):(u=$t(n)?ki:Rt.current,u=Ls(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&cv(e,o,r,u),Rr=!1;var d=e.memoizedState;o.state=d,Wu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ut.current||Rr?(typeof c=="function"&&(Af(e,n,c,r),l=e.memoizedState),(a=Rr||uv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,eE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=an(l):(l=$t(n)?ki:Rt.current,l=Ls(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&cv(e,o,r,l),Rr=!1,d=e.memoizedState,o.state=d,Wu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ut.current||Rr?(typeof p=="function"&&(Af(e,n,p,r),v=e.memoizedState),(u=Rr||uv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return xf(t,e,n,r,s,i)}function xf(t,e,n,r,i,s){PE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&iv(e,n,!1),lr(t,e,s);r=e.stateNode,Lk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&iv(e,n,!0),e.child}function xE(t){var e=t.stateNode;e.pendingContext?rv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rv(t,e.context,!1),cm(t,e.containerInfo)}function wv(t,e,n,r,i){return bs(),im(i),e.flags|=256,Pt(t,e,n,r),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function DE(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ce,i&1),t===null)return Sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nf(n),e.memoizedState=Df,t):vm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Df,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vm(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bl(t,e,n,r){return r!==null&&im(r),Ms(e,t.child,null,n),t=vm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(P(422))),Bl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=Nf(o),e.memoizedState=Df,s);if(!(e.mode&1))return Bl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=fd(s,r,void 0),Bl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(t,i),En(r,t,i,-1))}return Sm(),r=fd(Error(P(421))),Bl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Gk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=Fr(i.nextSibling),Kt=e,ke=!0,vn=null,t!==null&&(tn[nn++]=Jn,tn[nn++]=Zn,tn[nn++]=Ci,Jn=t.id,Zn=t.overflow,Ci=e),e=vm(e,r.children),e.flags|=4096,e)}function Ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rf(t.return,e,n)}function pd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function NE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ev(t,n,e);else if(t.tag===19)Ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&qu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&qu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pd(e,!0,n,null,s);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mk(t,e,n){switch(e.tag){case 3:xE(e),bs();break;case 5:sE(e);break;case 1:$t(e.type)&&$u(e);break;case 4:cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(zu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?DE(t,e,n):(ve(Ce,Ce.current&1),t=lr(t,e,n),t!==null?t.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return NE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,CE(t,e,n)}return lr(t,e,n)}var OE,Of,LE,bE;OE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Of=function(){};LE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fi(Un.current);var s=null;switch(n){case"input":i=ef(t,i),r=ef(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=rf(t,i),r=rf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fu)}of(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ha.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ha.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bE=function(t,e,n,r){n!==r&&(e.flags|=4)};function ko(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Vk(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return $t(e.type)&&Uu(),mt(e),null;case 3:return r=e.stateNode,Vs(),Ie(Ut),Ie(Rt),dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(jf(vn),vn=null))),Of(t,e),mt(e),null;case 5:hm(e);var i=fi(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)LE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return mt(e),null}if(t=fi(Un.current),$l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[Ea]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Uo.length;i++)_e(Uo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":xy(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Ny(r,s),_e("invalid",r)}of(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",""+a]):ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Dl(r),Dy(r,s,!0);break;case"textarea":Dl(r),Oy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[Ea]=r,OE(t,e,!1,!1),e.stateNode=t;e:{switch(o=af(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Uo.length;i++)_e(Uo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":xy(t,r),i=ef(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Ny(t,r),i=rf(t,r),_e("invalid",t);break;default:i=r}of(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Bp(t,s,l,o))}switch(n){case"input":Dl(t),Dy(t,r,!1);break;case"textarea":Dl(t),Oy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_s(t,!!r.multiple,s,!1):r.defaultValue!=null&&_s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)bE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=fi(Ia.current),fi(Un.current),$l(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:Ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return mt(e),null;case 13:if(Ie(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Ht!==null&&e.mode&1&&!(e.flags&128))Jw(),bs(),e.flags|=98560,s=!1;else if(s=$l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[On]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else vn!==null&&(jf(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ye===0&&(Ye=3):Sm())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Vs(),Of(t,e),t===null&&_a(e.stateNode.containerInfo),mt(e),null;case 10:return am(e.type._context),mt(e),null;case 17:return $t(e.type)&&Uu(),mt(e),null;case 19:if(Ie(Ce),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ko(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qu(t),o!==null){for(e.flags|=128,ko(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Us&&(e.flags|=128,r=!0,ko(s,!1),e.lanes=4194304)}else{if(!r)if(t=qu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return mt(e),null}else 2*Fe()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,r=!0,ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Im(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function Fk(t,e){switch(rm(e),e.tag){case 1:return $t(e.type)&&Uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),Ie(Ut),Ie(Rt),dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hm(e),null;case 13:if(Ie(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ce),null;case 4:return Vs(),null;case 10:return am(e.type._context),null;case 22:case 23:return Im(),null;case 24:return null;default:return null}}var zl=!1,vt=!1,Uk=typeof WeakSet=="function"?WeakSet:Set,M=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Lf(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Tv=!1;function $k(t,e){if(yf=bu,t=Uw(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vf={focusedElem:t,selectionRange:n},bu=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:mn(e.type,_),w);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(m){Oe(e,e.return,m)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Tv,Tv=!1,v}function ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lf(e,n,s)}i=i.next}while(i!==r)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ME(t){var e=t.alternate;e!==null&&(t.alternate=null,ME(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Ea],delete e[Ef],delete e[Tk],delete e[Ik])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function VE(t){return t.tag===5||t.tag===3||t.tag===4}function Iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||VE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fu));else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}function Vf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}var ot=null,gn=!1;function Er(t,e,n){for(n=n.child;n!==null;)FE(t,e,n),n=n.sibling}function FE(t,e,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(xc,n)}catch{}switch(n.tag){case 5:vt||fs(n,e);case 6:var r=ot,i=gn;ot=null,Er(t,e,n),ot=r,gn=i,ot!==null&&(gn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(gn?(t=ot,n=n.stateNode,t.nodeType===8?ad(t.parentNode,n):t.nodeType===1&&ad(t,n),ga(t)):ad(ot,n.stateNode));break;case 4:r=ot,i=gn,ot=n.stateNode.containerInfo,gn=!0,Er(t,e,n),ot=r,gn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lf(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!vt&&(fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Er(t,e,n),vt=r):Er(t,e,n);break;default:Er(t,e,n)}}function Sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Uk),e.forEach(function(r){var i=Qk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,gn=!1;break e;case 3:ot=a.stateNode.containerInfo,gn=!0;break e;case 4:ot=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(ot===null)throw Error(P(160));FE(s,o,i),ot=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)UE(e,t),e=e.sibling}function UE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),xn(t),r&4){try{ea(3,t,t.return),Fc(3,t)}catch(_){Oe(t,t.return,_)}try{ea(5,t,t.return)}catch(_){Oe(t,t.return,_)}}break;case 1:pn(e,t),xn(t),r&512&&n!==null&&fs(n,n.return);break;case 5:if(pn(e,t),xn(t),r&512&&n!==null&&fs(n,n.return),t.flags&32){var i=t.stateNode;try{da(i,"")}catch(_){Oe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ow(i,s),af(a,o);var u=af(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?hw(i,h):c==="dangerouslySetInnerHTML"?uw(i,h):c==="children"?da(i,h):Bp(i,c,h,u)}switch(a){case"input":tf(i,s);break;case"textarea":aw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_s(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?_s(i,!!s.multiple,s.defaultValue,!0):_s(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ea]=s}catch(_){Oe(t,t.return,_)}}break;case 6:if(pn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Oe(t,t.return,_)}}break;case 3:if(pn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(_){Oe(t,t.return,_)}break;case 4:pn(e,t),xn(t);break;case 13:pn(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Em=Fe())),r&4&&Sv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||c,pn(e,t),vt=u):pn(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,p=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:fs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Oe(r,n,_)}}break;case 5:fs(d,d.return);break;case 22:if(d.memoizedState!==null){Av(h);continue}}p!==null?(p.return=d,M=p):Av(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cw("display",o))}catch(_){Oe(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Oe(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pn(e,t),xn(t),r&4&&Sv(t);break;case 21:break;default:pn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(VE(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(da(i,""),r.flags&=-33);var s=Iv(t);Vf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Iv(t);Mf(t,a,o);break;default:throw Error(P(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jk(t,e,n){M=t,$E(t)}function $E(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=zl;var u=vt;if(zl=o,(vt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?kv(i):l!==null?(l.return=o,M=l):kv(i);for(;s!==null;)M=s,$E(s),s=s.sibling;M=i,zl=a,vt=u}Rv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Rv(t)}}function Rv(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ga(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}vt||e.flags&512&&bf(e)}catch(d){Oe(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Av(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function kv(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{bf(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{bf(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var Bk=Math.ceil,Qu=pr.ReactCurrentDispatcher,_m=pr.ReactCurrentOwner,on=pr.ReactCurrentBatchConfig,oe=0,nt=null,He=null,ut=0,zt=0,ps=ti(0),Ye=0,ka=null,xi=0,Uc=0,wm=0,ta=null,Mt=null,Em=0,Us=1/0,Gn=null,Yu=!1,Ff=null,$r=null,Hl=!1,Or=null,Xu=0,na=0,Uf=null,mu=-1,gu=0;function Dt(){return oe&6?Fe():mu!==-1?mu:mu=Fe()}function jr(t){return t.mode&1?oe&2&&ut!==0?ut&-ut:Rk.transition!==null?(gu===0&&(gu=Iw()),gu):(t=he,t!==0||(t=window.event,t=t===void 0?16:xw(t.type)),t):1}function En(t,e,n,r){if(50<na)throw na=0,Uf=null,Error(P(185));Xa(t,n,r),(!(oe&2)||t!==nt)&&(t===nt&&(!(oe&2)&&(Uc|=n),Ye===4&&kr(t,ut)),jt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Us=Fe()+500,bc&&ni()))}function jt(t,e){var n=t.callbackNode;RA(t,e);var r=Lu(t,t===nt?ut:0);if(r===0)n!==null&&My(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&My(n),e===1)t.tag===0?Sk(Cv.bind(null,t)):Qw(Cv.bind(null,t)),wk(function(){!(oe&6)&&ni()}),n=null;else{switch(Sw(r)){case 1:n=Kp;break;case 4:n=Ew;break;case 16:n=Ou;break;case 536870912:n=Tw;break;default:n=Ou}n=GE(n,jE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jE(t,e){if(mu=-1,gu=0,oe&6)throw Error(P(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var r=Lu(t,t===nt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ju(t,r);else{e=r;var i=oe;oe|=2;var s=zE();(nt!==t||ut!==e)&&(Gn=null,Us=Fe()+500,Ei(t,e));do try{Wk();break}catch(a){BE(t,a)}while(1);om(),Qu.current=s,oe=i,He!==null?e=0:(nt=null,ut=0,e=Ye)}if(e!==0){if(e===2&&(i=df(t),i!==0&&(r=i,e=$f(t,i))),e===1)throw n=ka,Ei(t,0),kr(t,r),jt(t,Fe()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!zk(i)&&(e=Ju(t,r),e===2&&(s=df(t),s!==0&&(r=s,e=$f(t,s))),e===1))throw n=ka,Ei(t,0),kr(t,r),jt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:ui(t,Mt,Gn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=Em+500-Fe(),10<e)){if(Lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wf(ui.bind(null,t,Mt,Gn),e);break}ui(t,Mt,Gn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bk(r/1960))-r,10<r){t.timeoutHandle=wf(ui.bind(null,t,Mt,Gn),r);break}ui(t,Mt,Gn);break;case 5:ui(t,Mt,Gn);break;default:throw Error(P(329))}}}return jt(t,Fe()),t.callbackNode===n?jE.bind(null,t):null}function $f(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=Ju(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&jf(e)),t}function jf(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function zk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~wm,e&=~Uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function Cv(t){if(oe&6)throw Error(P(327));Ss();var e=Lu(t,0);if(!(e&1))return jt(t,Fe()),null;var n=Ju(t,e);if(t.tag!==0&&n===2){var r=df(t);r!==0&&(e=r,n=$f(t,r))}if(n===1)throw n=ka,Ei(t,0),kr(t,e),jt(t,Fe()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,Mt,Gn),jt(t,Fe()),null}function Tm(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Us=Fe()+500,bc&&ni())}}function Di(t){Or!==null&&Or.tag===0&&!(oe&6)&&Ss();var e=oe;oe|=1;var n=on.transition,r=he;try{if(on.transition=null,he=1,t)return t()}finally{he=r,on.transition=n,oe=e,!(oe&6)&&ni()}}function Im(){zt=ps.current,Ie(ps)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_k(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uu();break;case 3:Vs(),Ie(Ut),Ie(Rt),dm();break;case 5:hm(r);break;case 4:Vs();break;case 13:Ie(Ce);break;case 19:Ie(Ce);break;case 10:am(r.type._context);break;case 22:case 23:Im()}n=n.return}if(nt=t,He=t=Br(t.current,null),ut=zt=e,Ye=0,ka=null,wm=Uc=xi=0,Mt=ta=null,di!==null){for(e=0;e<di.length;e++)if(n=di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}di=null}return t}function BE(t,e){do{var n=He;try{if(om(),du.current=Gu,Ku){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ku=!1}if(Pi=0,et=Qe=Pe=null,Zo=!1,Sa=0,_m.current=null,n===null||n.return===null){Ye=1,ka=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=mv(o);if(p!==null){p.flags&=-257,gv(p,o,a,s,e),p.mode&1&&pv(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){pv(s,u,e),Sm();break e}l=Error(P(426))}}else if(ke&&a.mode&1){var w=mv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),gv(w,o,a,s,e),im(Fs(l,a));break e}}s=l=Fs(l,a),Ye!==4&&(Ye=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=RE(s,l,e);av(s,g);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($r===null||!$r.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var m=AE(s,a,e);av(s,m);break e}}s=s.return}while(s!==null)}WE(n)}catch(T){e=T,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function zE(){var t=Qu.current;return Qu.current=Gu,t===null?Gu:t}function Sm(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(xi&268435455)&&!(Uc&268435455)||kr(nt,ut)}function Ju(t,e){var n=oe;oe|=2;var r=zE();(nt!==t||ut!==e)&&(Gn=null,Ei(t,e));do try{Hk();break}catch(i){BE(t,i)}while(1);if(om(),oe=n,Qu.current=r,He!==null)throw Error(P(261));return nt=null,ut=0,Ye}function Hk(){for(;He!==null;)HE(He)}function Wk(){for(;He!==null&&!gA();)HE(He)}function HE(t){var e=KE(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?WE(t):He=e,_m.current=null}function WE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fk(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=Vk(n,e,zt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function ui(t,e,n){var r=he,i=on.transition;try{on.transition=null,he=1,qk(t,e,n,r)}finally{on.transition=i,he=r}return null}function qk(t,e,n,r){do Ss();while(Or!==null);if(oe&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AA(t,s),t===nt&&(He=nt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hl||(Hl=!0,GE(Ou,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=he;he=1;var a=oe;oe|=4,_m.current=null,$k(t,n),UE(n,t),dk(vf),bu=!!yf,vf=yf=null,t.current=n,jk(n),yA(),oe=a,he=o,on.transition=s}else t.current=n;if(Hl&&(Hl=!1,Or=t,Xu=i),s=t.pendingLanes,s===0&&($r=null),wA(n.stateNode),jt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yu)throw Yu=!1,t=Ff,Ff=null,t;return Xu&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===Uf?na++:(na=0,Uf=t):na=0,ni(),null}function Ss(){if(Or!==null){var t=Sw(Xu),e=on.transition,n=he;try{if(on.transition=null,he=16>t?16:t,Or===null)var r=!1;else{if(t=Or,Or=null,Xu=0,oe&6)throw Error(P(331));var i=oe;for(oe|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:ea(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,p=c.return;if(ME(c),c===u){M=null;break}if(d!==null){d.return=p,M=d;break}M=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fc(9,a)}}catch(T){Oe(a,a.return,T)}if(a===o){M=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,M=m;break e}M=a.return}}if(oe=i,ni(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(xc,t)}catch{}r=!0}return r}finally{he=n,on.transition=e}}return!1}function Pv(t,e,n){e=Fs(n,e),e=RE(t,e,1),t=Ur(t,e,1),e=Dt(),t!==null&&(Xa(t,1,e),jt(t,e))}function Oe(t,e,n){if(t.tag===3)Pv(t,t,n);else for(;e!==null;){if(e.tag===3){Pv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Fs(n,t),t=AE(e,t,1),e=Ur(e,t,1),t=Dt(),e!==null&&(Xa(e,1,t),jt(e,t));break}}e=e.return}}function Kk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(ut&n)===n&&(Ye===4||Ye===3&&(ut&130023424)===ut&&500>Fe()-Em?Ei(t,0):wm|=n),jt(t,e)}function qE(t,e){e===0&&(t.mode&1?(e=Ll,Ll<<=1,!(Ll&130023424)&&(Ll=4194304)):e=1);var n=Dt();t=ar(t,e),t!==null&&(Xa(t,e,n),jt(t,n))}function Gk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qE(t,n)}function Qk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),qE(t,n)}var KE;KE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,Mk(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,ke&&e.flags&1048576&&Yw(e,Bu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pu(t,e),t=e.pendingProps;var i=Ls(e,Rt.current);Is(e,n),i=pm(null,e,r,t,i,n);var s=mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,$u(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,kf(e,r,t,n),e=xf(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&nm(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Xk(r),t=mn(r,t),i){case 0:e=Pf(null,e,r,t,n);break e;case 1:e=_v(null,e,r,t,n);break e;case 11:e=yv(null,e,r,t,n);break e;case 14:e=vv(null,e,r,mn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Pf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),_v(t,e,r,i,n);case 3:e:{if(xE(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,eE(t,e),Wu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fs(Error(P(423)),e),e=wv(t,e,r,n,i);break e}else if(r!==i){i=Fs(Error(P(424)),e),e=wv(t,e,r,n,i);break e}else for(Ht=Fr(e.stateNode.containerInfo.firstChild),Kt=e,ke=!0,vn=null,n=iE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===i){e=lr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return sE(e),t===null&&Sf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_f(r,i)?o=null:s!==null&&_f(r,s)&&(e.flags|=32),PE(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Sf(e),null;case 13:return DE(t,e,n);case 4:return cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),yv(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(zu,r._currentValue),r._currentValue=o,s!==null)if(Sn(s.value,o)){if(s.children===i.children&&!Ut.current){e=lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=rr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Is(e,n),i=an(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),vv(t,e,r,i,n);case 15:return kE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),pu(t,e),e.tag=1,$t(r)?(t=!0,$u(e)):t=!1,Is(e,n),nE(e,r,i),kf(e,r,i,n),xf(null,e,r,!0,t,n);case 19:return NE(t,e,n);case 22:return CE(t,e,n)}throw Error(P(156,e.tag))};function GE(t,e){return ww(t,e)}function Yk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new Yk(t,e,n,r)}function Rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xk(t){if(typeof t=="function")return Rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hp)return 11;if(t===Wp)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case is:return Ti(n.children,i,s,e);case zp:o=8,i|=8;break;case Yd:return t=sn(12,n,e,i|2),t.elementType=Yd,t.lanes=s,t;case Xd:return t=sn(13,n,e,i),t.elementType=Xd,t.lanes=s,t;case Jd:return t=sn(19,n,e,i),t.elementType=Jd,t.lanes=s,t;case rw:return $c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tw:o=10;break e;case nw:o=9;break e;case Hp:o=11;break e;case Wp:o=14;break e;case Sr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=sn(22,t,r,e),t.elementType=rw,t.lanes=n,t.stateNode={isHidden:!1},t}function md(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yh(0),this.expirationTimes=Yh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Am(t,e,n,r,i,s,o,a,l){return t=new Jk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),t}function Zk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function QE(t){if(!t)return Qr;t=t._reactInternals;e:{if(zi(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if($t(n))return Gw(t,n,e)}return e}function YE(t,e,n,r,i,s,o,a,l){return t=Am(n,r,!0,t,i,s,o,a,l),t.context=QE(null),n=t.current,r=Dt(),i=jr(n),s=rr(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,Xa(t,i,r),jt(t,r),t}function jc(t,e,n,r){var i=e.current,s=Dt(),o=jr(i);return n=QE(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,o),t!==null&&(En(t,i,o,s),hu(t,i,o)),o}function Zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function km(t,e){xv(t,e),(t=t.alternate)&&xv(t,e)}function eC(){return null}var XE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cm(t){this._internalRoot=t}Bc.prototype.render=Cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));jc(t,e,null,null)};Bc.prototype.unmount=Cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Di(function(){jc(null,t,null,null)}),e[or]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=kw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&Pw(t)}};function Pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dv(){}function tC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Zu(o);s.call(u)}}var o=YE(e,r,t,0,null,!1,!1,"",Dv);return t._reactRootContainer=o,t[or]=o.current,_a(t.nodeType===8?t.parentNode:t),Di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zu(l);a.call(u)}}var l=Am(t,0,!1,null,null,!1,!1,"",Dv);return t._reactRootContainer=l,t[or]=l.current,_a(t.nodeType===8?t.parentNode:t),Di(function(){jc(e,l,n,r)}),l}function Hc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Zu(o);a.call(l)}}jc(e,o,t,i)}else o=tC(n,e,t,i,r);return Zu(o)}Rw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(Gp(e,n|1),jt(e,Fe()),!(oe&6)&&(Us=Fe()+500,ni()))}break;case 13:Di(function(){var r=ar(t,1);if(r!==null){var i=Dt();En(r,t,1,i)}}),km(t,1)}};Qp=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Dt();En(e,t,134217728,n)}km(t,134217728)}};Aw=function(t){if(t.tag===13){var e=jr(t),n=ar(t,e);if(n!==null){var r=Dt();En(n,t,e,r)}km(t,e)}};kw=function(){return he};Cw=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};uf=function(t,e,n){switch(e){case"input":if(tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lc(r);if(!i)throw Error(P(90));sw(r),tf(r,i)}}}break;case"textarea":aw(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};pw=Tm;mw=Di;var nC={usingClientEntryPoint:!1,Events:[Za,ls,Lc,dw,fw,Tm]},Co={findFiberByHostInstance:hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rC={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vw(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||eC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{xc=Wl.inject(rC),Fn=Wl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nC;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pm(e))throw Error(P(200));return Zk(t,e,null,n)};Yt.createRoot=function(t,e){if(!Pm(t))throw Error(P(299));var n=!1,r="",i=XE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Am(t,1,!1,null,null,n,!1,r,i),t[or]=e.current,_a(t.nodeType===8?t.parentNode:t),new Cm(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=vw(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Di(t)};Yt.hydrate=function(t,e,n){if(!zc(e))throw Error(P(200));return Hc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Pm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=XE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=YE(e,null,t,1,n??null,i,!1,s,o),t[or]=e.current,_a(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bc(e)};Yt.render=function(t,e,n){if(!zc(e))throw Error(P(200));return Hc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!zc(t))throw Error(P(40));return t._reactRootContainer?(Di(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Yt.unstable_batchedUpdates=Tm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Hc(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function JE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JE)}catch(t){console.error(t)}}JE(),Y0.exports=Yt;var iC=Y0.exports,Nv=iC;Gd.createRoot=Nv.createRoot,Gd.hydrateRoot=Nv.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ae.apply(this,arguments)}var je;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(je||(je={}));const Ov="popstate";function sC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ca("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ni(i)}return aC(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $s(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oC(){return Math.random().toString(36).substr(2,8)}function Lv(t,e){return{usr:t.state,key:t.key,idx:e}}function Ca(t,e,n,r){return n===void 0&&(n=null),Ae({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mr(e):e,{state:n,key:e&&e.key||r||oC()})}function Ni(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function mr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=je.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ae({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=je.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function d(w,g){a=je.Push;let f=Ca(_.location,w,g);n&&n(f,w),u=c()+1;let y=Lv(f,u),m=_.createHref(f);try{o.pushState(y,"",m)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(m)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=je.Replace;let f=Ca(_.location,w,g);n&&n(f,w),u=c();let y=Lv(f,u),m=_.createHref(f);o.replaceState(y,"",m),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Ni(w);return te(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ov,h),l=w,()=>{i.removeEventListener(Ov,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(w){return o.go(w)}};return _}var Ge;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ge||(Ge={}));const lC=new Set(["lazy","caseSensitive","path","id","index","children"]);function uC(t){return t.index===!0}function Bf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(te(i.index!==!0||!i.children,"Cannot specify children on an index route"),te(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),uC(i)){let l=Ae({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ae({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Bf(i.children,e,o,r)),l}})}function ms(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?mr(e):e,i=io(r.pathname||"/",n);if(i==null)return null;let s=ZE(t);cC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_C(s[a],TC(i));return o}function ZE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ir([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ZE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:yC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of e1(s.path))i(s,o,l)}),e}function e1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=e1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function cC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hC=/^:\w+$/,dC=3,fC=2,pC=1,mC=10,gC=-2,bv=t=>t==="*";function yC(t,e){let n=t.split("/"),r=n.length;return n.some(bv)&&(r+=gC),e&&(r+=fC),n.filter(i=>!bv(i)).reduce((i,s)=>i+(hC.test(s)?dC:s===""?pC:mC),r)}function vC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _C(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=wC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ir([i,c.pathname]),pathnameBase:AC(ir([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ir([i,c.pathnameBase]))}return s}function wC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=IC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function EC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$s(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function TC(t){try{return decodeURI(t)}catch(e){return $s(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function IC(t,e){try{return decodeURIComponent(t)}catch(n){return $s(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function io(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mr(t):t;return{pathname:n?n.startsWith("/")?n:RC(n,e):e,search:kC(r),hash:CC(i)}}function RC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tl(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Wc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=mr(t):(i=Ae({},t),te(!i.pathname||!i.pathname.includes("?"),yd("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),yd("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=SC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ir=t=>t.join("/").replace(/\/\/+/g,"/"),AC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class xm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function t1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const n1=["post","put","patch","delete"],PC=new Set(n1),xC=["get",...n1],DC=new Set(xC),NC=new Set([301,302,303,307,308]),OC=new Set([307,308]),vd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},LC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Po={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},r1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bC=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function MC(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;te(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let E=t.detectErrorBoundary;i=I=>({hasErrorBoundary:E(I)})}else i=bC;let s={},o=Bf(t.routes,i,void 0,s),a,l=t.basename||"/",u=Ae({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,p=null,v=null,_=t.hydrationData!=null,w=ms(o,t.history.location,l),g=null;if(w==null){let E=en(404,{pathname:t.history.location.pathname}),{matches:I,route:k}=zv(o);w=I,g={[k.id]:E}}let f=!w.some(E=>E.route.lazy)&&(!w.some(E=>E.route.loader)||t.hydrationData!=null),y,m={historyAction:t.history.action,location:t.history.location,matches:w,initialized:f,navigation:vd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},T=je.Pop,R=!1,S,N=!1,J=!1,B=[],Ue=[],fe=new Map,Jt=0,kn=-1,Cn=new Map,st=new Set,qe=new Map,O=new Map,$=new Map,z=!1;function ge(){return c=t.history.listen(E=>{let{action:I,location:k,delta:V}=E;if(z){z=!1;return}$s($.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=wy({currentLocation:m.location,nextLocation:k,historyAction:I});if(X&&V!=null){z=!0,t.history.go(V*-1),kl(X,{state:"blocked",location:k,proceed(){kl(X,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(V)},reset(){let K=new Map(m.blockers);K.set(X,Po),ae({blockers:K})}});return}return Zt(I,k)}),m.initialized||Zt(je.Pop,m.location),y}function Re(){c&&c(),h.clear(),S&&S.abort(),m.fetchers.forEach((E,I)=>Fh(I)),m.blockers.forEach((E,I)=>_y(I))}function dn(E){return h.add(E),()=>h.delete(E)}function ae(E){m=Ae({},m,E),h.forEach(I=>I(m))}function Lt(E,I){var k,V;let X=m.actionData!=null&&m.navigation.formMethod!=null&&yn(m.navigation.formMethod)&&m.navigation.state==="loading"&&((k=E.state)==null?void 0:k._isRedirect)!==!0,K;I.actionData?Object.keys(I.actionData).length>0?K=I.actionData:K=null:X?K=m.actionData:K=null;let Q=I.loaderData?Bv(m.loaderData,I.loaderData,I.matches||[],I.errors):m.loaderData,H=m.blockers;H.size>0&&(H=new Map(H),H.forEach((ye,ft)=>H.set(ft,Po)));let U=R===!0||m.navigation.formMethod!=null&&yn(m.navigation.formMethod)&&((V=E.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),N||T===je.Pop||(T===je.Push?t.history.push(E,E.state):T===je.Replace&&t.history.replace(E,E.state)),ae(Ae({},I,{actionData:K,loaderData:Q,historyAction:T,location:E,initialized:!0,navigation:vd,revalidation:"idle",restoreScrollPosition:Ty(E,I.matches||m.matches),preventScrollReset:U,blockers:H})),T=je.Pop,R=!1,N=!1,J=!1,B=[],Ue=[]}async function dt(E,I){if(typeof E=="number"){t.history.go(E);return}let k=zf(m.location,m.matches,l,u.v7_prependBasename,E,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:V,submission:X,error:K}=Mv(u.v7_normalizeFormMethod,!1,k,I),Q=m.location,H=Ca(m.location,V,I&&I.state);H=Ae({},H,t.history.encodeLocation(H));let U=I&&I.replace!=null?I.replace:void 0,ye=je.Push;U===!0?ye=je.Replace:U===!1||X!=null&&yn(X.formMethod)&&X.formAction===m.location.pathname+m.location.search&&(ye=je.Replace);let ft=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,pe=wy({currentLocation:Q,nextLocation:H,historyAction:ye});if(pe){kl(pe,{state:"blocked",location:H,proceed(){kl(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),dt(E,I)},reset(){let Ve=new Map(m.blockers);Ve.set(pe,Po),ae({blockers:Ve})}});return}return await Zt(ye,H,{submission:X,pendingError:K,preventScrollReset:ft,replace:I&&I.replace})}function bt(){if(Vh(),ae({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Zt(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Zt(T||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function Zt(E,I,k){S&&S.abort(),S=null,T=E,N=(k&&k.startUninterruptedRevalidation)===!0,CR(m.location,m.matches),R=(k&&k.preventScrollReset)===!0;let V=a||o,X=k&&k.overrideNavigation,K=ms(V,I,l);if(!K){let Ve=en(404,{pathname:I.pathname}),{matches:Je,route:oi}=zv(V);Uh(),Lt(I,{matches:Je,loaderData:{},errors:{[oi.id]:Ve}});return}if(m.initialized&&!J&&jC(m.location,I)&&!(k&&k.submission&&yn(k.submission.formMethod))){Lt(I,{matches:K});return}S=new AbortController;let Q=Do(t.history,I,S.signal,k&&k.submission),H,U;if(k&&k.pendingError)U={[gs(K).route.id]:k.pendingError};else if(k&&k.submission&&yn(k.submission.formMethod)){let Ve=await Yi(Q,I,k.submission,K,{replace:k.replace});if(Ve.shortCircuited)return;H=Ve.pendingActionData,U=Ve.pendingActionError,X=ql(I,k.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:ye,loaderData:ft,errors:pe}=await Pn(Q,I,K,X,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,H,U);ye||(S=null,Lt(I,Ae({matches:K},H?{actionData:H}:{},{loaderData:ft,errors:pe})))}async function Yi(E,I,k,V,X){X===void 0&&(X={}),Vh();let K=qC(I,k);ae({navigation:K});let Q,H=Wf(V,I);if(!H.route.action&&!H.route.lazy)Q={type:Ge.error,error:en(405,{method:E.method,pathname:I.pathname,routeId:H.route.id})};else if(Q=await xo("action",E,H,V,s,i,l),E.signal.aborted)return{shortCircuited:!0};if(Rs(Q)){let U;return X&&X.replace!=null?U=X.replace:U=Q.location===m.location.pathname+m.location.search,await vo(m,Q,{submission:k,replace:U}),{shortCircuited:!0}}if(ra(Q)){let U=gs(V,H.route.id);return(X&&X.replace)!==!0&&(T=je.Push),{pendingActionData:{},pendingActionError:{[U.route.id]:Q.error}}}if(pi(Q))throw en(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:Q.data}}}async function Pn(E,I,k,V,X,K,Q,H,U){let ye=V||ql(I,X),ft=X||K||qv(ye),pe=a||o,[Ve,Je]=Vv(t.history,m,k,ft,I,J,B,Ue,qe,st,pe,l,H,U);if(Uh(me=>!(k&&k.some(fn=>fn.route.id===me))||Ve&&Ve.some(fn=>fn.route.id===me)),kn=++Jt,Ve.length===0&&Je.length===0){let me=yy();return Lt(I,Ae({matches:k,loaderData:{},errors:U||null},H?{actionData:H}:{},me?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!N){Je.forEach(fn=>{let wr=m.fetchers.get(fn.key),Hh=No(void 0,wr?wr.data:void 0);m.fetchers.set(fn.key,Hh)});let me=H||m.actionData;ae(Ae({navigation:ye},me?Object.keys(me).length===0?{actionData:null}:{actionData:me}:{},Je.length>0?{fetchers:new Map(m.fetchers)}:{}))}Je.forEach(me=>{fe.has(me.key)&&_r(me.key),me.controller&&fe.set(me.key,me.controller)});let oi=()=>Je.forEach(me=>_r(me.key));S&&S.signal.addEventListener("abort",oi);let{results:ai,loaderResults:_o,fetcherResults:$h}=await my(m.matches,k,Ve,Je,E);if(E.signal.aborted)return{shortCircuited:!0};S&&S.signal.removeEventListener("abort",oi),Je.forEach(me=>fe.delete(me.key));let qn=Hv(ai);if(qn){if(qn.idx>=Ve.length){let me=Je[qn.idx-Ve.length].key;st.add(me)}return await vo(m,qn.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:Kn,errors:Cl}=jv(m,k,Ve,_o,U,Je,$h,O);O.forEach((me,fn)=>{me.subscribe(wr=>{(wr||me.done)&&O.delete(fn)})});let jh=yy(),Bh=vy(kn),zh=jh||Bh||Je.length>0;return Ae({loaderData:Kn,errors:Cl},zh?{fetchers:new Map(m.fetchers)}:{})}function py(E){return m.fetchers.get(E)||LC}function IR(E,I,k,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");fe.has(E)&&_r(E);let X=a||o,K=zf(m.location,m.matches,l,u.v7_prependBasename,k,I,V==null?void 0:V.relative),Q=ms(X,K,l);if(!Q){Al(E,I,en(404,{pathname:K}));return}let{path:H,submission:U,error:ye}=Mv(u.v7_normalizeFormMethod,!0,K,V);if(ye){Al(E,I,ye);return}let ft=Wf(Q,H);if(R=(V&&V.preventScrollReset)===!0,U&&yn(U.formMethod)){SR(E,I,H,ft,Q,U);return}qe.set(E,{routeId:I,path:H}),RR(E,I,H,ft,Q,U)}async function SR(E,I,k,V,X,K){if(Vh(),qe.delete(E),!V.route.action&&!V.route.lazy){let Ke=en(405,{method:K.formMethod,pathname:k,routeId:I});Al(E,I,Ke);return}let Q=m.fetchers.get(E),H=KC(K,Q);m.fetchers.set(E,H),ae({fetchers:new Map(m.fetchers)});let U=new AbortController,ye=Do(t.history,k,U.signal,K);fe.set(E,U);let ft=Jt,pe=await xo("action",ye,V,X,s,i,l);if(ye.signal.aborted){fe.get(E)===U&&fe.delete(E);return}if(Rs(pe))if(fe.delete(E),kn>ft){let Ke=es(void 0);m.fetchers.set(E,Ke),ae({fetchers:new Map(m.fetchers)});return}else{st.add(E);let Ke=No(K);return m.fetchers.set(E,Ke),ae({fetchers:new Map(m.fetchers)}),vo(m,pe,{submission:K,isFetchActionRedirect:!0})}if(ra(pe)){Al(E,I,pe.error);return}if(pi(pe))throw en(400,{type:"defer-action"});let Ve=m.navigation.location||m.location,Je=Do(t.history,Ve,U.signal),oi=a||o,ai=m.navigation.state!=="idle"?ms(oi,m.navigation.location,l):m.matches;te(ai,"Didn't find any matches after fetcher action");let _o=++Jt;Cn.set(E,_o);let $h=No(K,pe.data);m.fetchers.set(E,$h);let[qn,Kn]=Vv(t.history,m,ai,K,Ve,J,B,Ue,qe,st,oi,l,{[V.route.id]:pe.data},void 0);Kn.filter(Ke=>Ke.key!==E).forEach(Ke=>{let wo=Ke.key,Iy=m.fetchers.get(wo),xR=No(void 0,Iy?Iy.data:void 0);m.fetchers.set(wo,xR),fe.has(wo)&&_r(wo),Ke.controller&&fe.set(wo,Ke.controller)}),ae({fetchers:new Map(m.fetchers)});let Cl=()=>Kn.forEach(Ke=>_r(Ke.key));U.signal.addEventListener("abort",Cl);let{results:jh,loaderResults:Bh,fetcherResults:zh}=await my(m.matches,ai,qn,Kn,Je);if(U.signal.aborted)return;U.signal.removeEventListener("abort",Cl),Cn.delete(E),fe.delete(E),Kn.forEach(Ke=>fe.delete(Ke.key));let me=Hv(jh);if(me){if(me.idx>=qn.length){let Ke=Kn[me.idx-qn.length].key;st.add(Ke)}return vo(m,me.result)}let{loaderData:fn,errors:wr}=jv(m,m.matches,qn,Bh,void 0,Kn,zh,O);if(m.fetchers.has(E)){let Ke=es(pe.data);m.fetchers.set(E,Ke)}let Hh=vy(_o);m.navigation.state==="loading"&&_o>kn?(te(T,"Expected pending action"),S&&S.abort(),Lt(m.navigation.location,{matches:ai,loaderData:fn,errors:wr,fetchers:new Map(m.fetchers)})):(ae(Ae({errors:wr,loaderData:Bv(m.loaderData,fn,ai,wr)},Hh||Kn.length>0?{fetchers:new Map(m.fetchers)}:{})),J=!1)}async function RR(E,I,k,V,X,K){let Q=m.fetchers.get(E),H=No(K,Q?Q.data:void 0);m.fetchers.set(E,H),ae({fetchers:new Map(m.fetchers)});let U=new AbortController,ye=Do(t.history,k,U.signal);fe.set(E,U);let ft=Jt,pe=await xo("loader",ye,V,X,s,i,l);if(pi(pe)&&(pe=await o1(pe,ye.signal,!0)||pe),fe.get(E)===U&&fe.delete(E),ye.signal.aborted)return;if(Rs(pe))if(kn>ft){let Je=es(void 0);m.fetchers.set(E,Je),ae({fetchers:new Map(m.fetchers)});return}else{st.add(E),await vo(m,pe);return}if(ra(pe)){let Je=gs(m.matches,I);m.fetchers.delete(E),ae({fetchers:new Map(m.fetchers),errors:{[Je.route.id]:pe.error}});return}te(!pi(pe),"Unhandled fetcher deferred data");let Ve=es(pe.data);m.fetchers.set(E,Ve),ae({fetchers:new Map(m.fetchers)})}async function vo(E,I,k){let{submission:V,replace:X,isFetchActionRedirect:K}=k===void 0?{}:k;I.revalidate&&(J=!0);let Q=Ca(E.location,I.location,Ae({_isRedirect:!0},K?{_isFetchActionRedirect:!0}:{}));if(te(Q,"Expected a location on the redirect navigation"),r1.test(I.location)&&n){let ye=t.history.createURL(I.location),ft=io(ye.pathname,l)==null;if(e.location.origin!==ye.origin||ft){X?e.location.replace(I.location):e.location.assign(I.location);return}}S=null;let H=X===!0?je.Replace:je.Push,U=V||qv(E.navigation);if(OC.has(I.status)&&U&&yn(U.formMethod))await Zt(H,Q,{submission:Ae({},U,{formAction:I.location}),preventScrollReset:R});else if(K)await Zt(H,Q,{overrideNavigation:ql(Q),fetcherSubmission:U,preventScrollReset:R});else{let ye=ql(Q,U);await Zt(H,Q,{overrideNavigation:ye,preventScrollReset:R})}}async function my(E,I,k,V,X){let K=await Promise.all([...k.map(U=>xo("loader",X,U,I,s,i,l)),...V.map(U=>U.matches&&U.match&&U.controller?xo("loader",Do(t.history,U.path,U.controller.signal),U.match,U.matches,s,i,l):{type:Ge.error,error:en(404,{pathname:U.path})})]),Q=K.slice(0,k.length),H=K.slice(k.length);return await Promise.all([Wv(E,k,Q,Q.map(()=>X.signal),!1,m.loaderData),Wv(E,V.map(U=>U.match),H,V.map(U=>U.controller?U.controller.signal:null),!0)]),{results:K,loaderResults:Q,fetcherResults:H}}function Vh(){J=!0,B.push(...Uh()),qe.forEach((E,I)=>{fe.has(I)&&(Ue.push(I),_r(I))})}function Al(E,I,k){let V=gs(m.matches,I);Fh(E),ae({errors:{[V.route.id]:k},fetchers:new Map(m.fetchers)})}function Fh(E){let I=m.fetchers.get(E);fe.has(E)&&!(I&&I.state==="loading"&&Cn.has(E))&&_r(E),qe.delete(E),Cn.delete(E),st.delete(E),m.fetchers.delete(E)}function _r(E){let I=fe.get(E);te(I,"Expected fetch controller: "+E),I.abort(),fe.delete(E)}function gy(E){for(let I of E){let k=py(I),V=es(k.data);m.fetchers.set(I,V)}}function yy(){let E=[],I=!1;for(let k of st){let V=m.fetchers.get(k);te(V,"Expected fetcher: "+k),V.state==="loading"&&(st.delete(k),E.push(k),I=!0)}return gy(E),I}function vy(E){let I=[];for(let[k,V]of Cn)if(V<E){let X=m.fetchers.get(k);te(X,"Expected fetcher: "+k),X.state==="loading"&&(_r(k),Cn.delete(k),I.push(k))}return gy(I),I.length>0}function AR(E,I){let k=m.blockers.get(E)||Po;return $.get(E)!==I&&$.set(E,I),k}function _y(E){m.blockers.delete(E),$.delete(E)}function kl(E,I){let k=m.blockers.get(E)||Po;te(k.state==="unblocked"&&I.state==="blocked"||k.state==="blocked"&&I.state==="blocked"||k.state==="blocked"&&I.state==="proceeding"||k.state==="blocked"&&I.state==="unblocked"||k.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+I.state);let V=new Map(m.blockers);V.set(E,I),ae({blockers:V})}function wy(E){let{currentLocation:I,nextLocation:k,historyAction:V}=E;if($.size===0)return;$.size>1&&$s(!1,"A router only supports one blocker at a time");let X=Array.from($.entries()),[K,Q]=X[X.length-1],H=m.blockers.get(K);if(!(H&&H.state==="proceeding")&&Q({currentLocation:I,nextLocation:k,historyAction:V}))return K}function Uh(E){let I=[];return O.forEach((k,V)=>{(!E||E(V))&&(k.cancel(),I.push(V),O.delete(V))}),I}function kR(E,I,k){if(d=E,v=I,p=k||null,!_&&m.navigation===vd){_=!0;let V=Ty(m.location,m.matches);V!=null&&ae({restoreScrollPosition:V})}return()=>{d=null,v=null,p=null}}function Ey(E,I){return p&&p(E,I.map(V=>WC(V,m.loaderData)))||E.key}function CR(E,I){if(d&&v){let k=Ey(E,I);d[k]=v()}}function Ty(E,I){if(d){let k=Ey(E,I),V=d[k];if(typeof V=="number")return V}return null}function PR(E){s={},a=Bf(E,i,void 0,s)}return y={get basename(){return l},get state(){return m},get routes(){return o},initialize:ge,subscribe:dn,enableScrollRestoration:kR,navigate:dt,fetch:IR,revalidate:bt,createHref:E=>t.history.createHref(E),encodeLocation:E=>t.history.encodeLocation(E),getFetcher:py,deleteFetcher:Fh,dispose:Re,getBlocker:AR,deleteBlocker:_y,_internalFetchControllers:fe,_internalActiveDeferreds:O,_internalSetRoutes:PR},y}function VC(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function zf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Wc(i||".",tl(a).map(c=>c.pathnameBase),io(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Dm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:ir([n,u.pathname])),Ni(u)}function Mv(t,e,n,r){if(!r||!VC(r))return{path:n};if(r.formMethod&&!HC(r.formMethod))return{path:n,error:en(405,{method:r.formMethod})};let i=()=>({path:n,error:en(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=s1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!yn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,v)=>{let[_,w]=v;return""+p+_+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!yn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}te(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Hf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Hf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=$v(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=$v(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(yn(c.formMethod))return{path:n,submission:c};let h=mr(n);return e&&h.search&&Dm(h.search)&&l.append("index",""),h.search="?"+l,{path:Ni(h),submission:c}}function FC(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Vv(t,e,n,r,i,s,o,a,l,u,c,h,d,p){let v=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),w=t.createURL(i),g=p?Object.keys(p)[0]:void 0,y=FC(n,g).filter((T,R)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(UC(e.loaderData,e.matches[R],T)||o.some(J=>J===T.route.id))return!0;let S=e.matches[R],N=T;return Fv(T,Ae({currentUrl:_,currentParams:S.params,nextUrl:w,nextParams:N.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===w.pathname+w.search||_.search!==w.search||i1(S,N)}))}),m=[];return l.forEach((T,R)=>{if(!n.some(Ue=>Ue.route.id===T.routeId))return;let S=ms(c,T.path,h);if(!S){m.push({key:R,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(R),J=Wf(S,T.path),B=!1;u.has(R)?B=!1:a.includes(R)?B=!0:N&&N.state!=="idle"&&N.data===void 0?B=s:B=Fv(J,Ae({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),B&&m.push({key:R,routeId:T.routeId,path:T.path,matches:S,match:J,controller:new AbortController})}),[y,m]}function UC(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function i1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Fv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Uv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];te(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";$s(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!lC.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ae({},e(i),{lazy:void 0}))}async function xo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=v=>{let _,w=new Promise((g,f)=>_=f);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),w])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([h(v),Uv(n.route,s,i)]))[0];else if(await Uv(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let _=new URL(e.url),w=_.pathname+_.search;throw en(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:Ge.data,data:void 0};else if(v)u=await h(v);else{let _=new URL(e.url),w=_.pathname+_.search;throw en(404,{pathname:w})}te(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Ge.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(zC(u)){let v=u.status;if(NC.has(v)){let g=u.headers.get("Location");if(te(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!r1.test(g))g=zf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let f=new URL(e.url),y=g.startsWith("//")?new URL(f.protocol+g):new URL(g),m=io(y.pathname,o)!=null;y.origin===f.origin&&m&&(g=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Ge.redirect,status:v,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||Ge.data,response:u};let _,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?_=await u.json():_=await u.text(),l===Ge.error?{type:l,error:new xm(v,u.statusText,_),headers:u.headers}:{type:Ge.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ge.error)return{type:l,error:u};if(BC(u)){var d,p;return{type:Ge.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((p=u.init)==null?void 0:p.headers)&&new Headers(u.init.headers)}}return{type:Ge.data,data:u}}function Do(t,e,n,r){let i=t.createURL(s1(e)).toString(),s={signal:n};if(r&&yn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Hf(r.formData):s.body=r.formData}return new Request(i,s)}function Hf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function $v(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function $C(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(te(!Rs(c),"Cannot handle redirect results in processLoaderData"),ra(c)){let p=gs(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=v),s[d]=void 0,l||(l=!0,a=t1(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else pi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function jv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=$C(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:p}=s[c];te(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(p&&p.signal.aborted))if(ra(v)){let _=gs(t.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=Ae({},u,{[_.route.id]:v.error})),t.fetchers.delete(h)}else if(Rs(v))te(!1,"Unhandled fetcher revalidation redirect");else if(pi(v))te(!1,"Unhandled fetcher deferred data");else{let _=es(v.data);t.fetchers.set(h,_)}}return{loaderData:l,errors:u}}function Bv(t,e,n,r){let i=Ae({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function gs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function zv(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function en(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new xm(t||500,o,new Error(a),!0)}function Hv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Rs(n))return{result:n,idx:e}}}function s1(t){let e=typeof t=="string"?mr(t):t;return Ni(Ae({},e,{hash:""}))}function jC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function pi(t){return t.type===Ge.deferred}function ra(t){return t.type===Ge.error}function Rs(t){return(t&&t.type)===Ge.redirect}function BC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function zC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function HC(t){return DC.has(t.toLowerCase())}function yn(t){return PC.has(t.toLowerCase())}async function Wv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!i1(u,l)&&(s&&s[l.route.id])!==void 0;if(pi(a)&&(i||c)){let h=r[o];te(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await o1(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function o1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ge.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ge.error,error:i}}return{type:Ge.data,data:t.deferredData.data}}}function Dm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function WC(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Wf(t,e){let n=typeof e=="string"?mr(e).search:e.search;if(t[t.length-1].route.index&&Dm(n||""))return t[t.length-1];let r=tl(t);return r[r.length-1]}function qv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function ql(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function qC(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function No(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function KC(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function es(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ec.apply(this,arguments)}const qc=C.createContext(null),a1=C.createContext(null),so=C.createContext(null),Kc=C.createContext(null),gr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),l1=C.createContext(null);function GC(t,e){let{relative:n}=e===void 0?{}:e;oo()||te(!1);let{basename:r,navigator:i}=C.useContext(so),{hash:s,pathname:o,search:a}=c1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ir([r,o])),i.createHref({pathname:l,search:a,hash:s})}function oo(){return C.useContext(Kc)!=null}function nl(){return oo()||te(!1),C.useContext(Kc).location}function u1(t){C.useContext(so).static||C.useLayoutEffect(t)}function ao(){let{isDataRoute:t}=C.useContext(gr);return t?lP():QC()}function QC(){oo()||te(!1);let t=C.useContext(qc),{basename:e,navigator:n}=C.useContext(so),{matches:r}=C.useContext(gr),{pathname:i}=nl(),s=JSON.stringify(tl(r).map(l=>l.pathnameBase)),o=C.useRef(!1);return u1(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Wc(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ir([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const YC=C.createContext(null);function XC(t){let e=C.useContext(gr).outlet;return e&&C.createElement(YC.Provider,{value:t},e)}function c1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(gr),{pathname:i}=nl(),s=JSON.stringify(tl(r).map(o=>o.pathnameBase));return C.useMemo(()=>Wc(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function JC(t,e,n){oo()||te(!1);let{navigator:r}=C.useContext(so),{matches:i}=C.useContext(gr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=nl(),u;if(e){var c;let _=typeof e=="string"?mr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||te(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=ms(t,{pathname:d}),v=rP(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:ir([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:ir([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?C.createElement(Kc.Provider,{value:{location:ec({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:je.Pop}},v):v}function ZC(){let t=aP(),e=t1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const eP=C.createElement(ZC,null);class tP extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(gr.Provider,{value:this.props.routeContext},C.createElement(l1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nP(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(gr.Provider,{value:e},r)}function rP(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||eP);let d=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=C.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,C.createElement(nP,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(tP,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var qf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(qf||(qf={}));var Pa;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Pa||(Pa={}));function iP(t){let e=C.useContext(qc);return e||te(!1),e}function sP(t){let e=C.useContext(a1);return e||te(!1),e}function oP(t){let e=C.useContext(gr);return e||te(!1),e}function h1(t){let e=oP(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function aP(){var t;let e=C.useContext(l1),n=sP(Pa.UseRouteError),r=h1(Pa.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function lP(){let{router:t}=iP(qf.UseNavigateStable),e=h1(Pa.UseNavigateStable),n=C.useRef(!1);return u1(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ec({fromRouteId:e},s)))},[t,e])}const uP="startTransition",Kv=GR[uP];function cP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=C.useState(n.state),{v7_startTransition:o}=r||{},a=C.useCallback(h=>{o&&Kv?Kv(()=>s(h)):s(h)},[s,o]);C.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,p)=>n.navigate(h,{state:d,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(h,d,p)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),u=n.basename||"/",c=C.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return C.createElement(C.Fragment,null,C.createElement(qc.Provider,{value:c},C.createElement(a1.Provider,{value:i},C.createElement(pP,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?C.createElement(hP,{routes:n.routes,state:i}):e))),null)}function hP(t){let{routes:e,state:n}=t;return JC(e,void 0,n)}function dP(t){let{to:e,replace:n,state:r,relative:i}=t;oo()||te(!1);let{matches:s}=C.useContext(gr),{pathname:o}=nl(),a=ao(),l=Wc(e,tl(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return C.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function fP(t){return XC(t.context)}function pP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=je.Pop,navigator:s,static:o=!1}=t;oo()&&te(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=mr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=C.useMemo(()=>{let _=io(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:C.createElement(so.Provider,{value:l},C.createElement(Kc.Provider,{children:n,value:v}))}var Gv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Gv||(Gv={}));new Promise(()=>{});function mP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:C.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xa.apply(this,arguments)}function gP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vP(t,e){return t.button===0&&(!e||e==="_self")&&!yP(t)}const _P=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function wP(t,e){return MC({basename:e==null?void 0:e.basename,future:xa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:sC({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||EP(),routes:t,mapRouteProperties:mP}).initialize()}function EP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=xa({},e,{errors:TP(e.errors)})),e}function TP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new xm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const IP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tc=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=gP(e,_P),{basename:d}=C.useContext(so),p,v=!1;if(typeof u=="string"&&SP.test(u)&&(p=u,IP))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),m=io(y.pathname,d);y.origin===f.origin&&m!=null?u=m+y.search+y.hash:v=!0}catch{}let _=GC(u,{relative:i}),w=RP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||w(f)}return C.createElement("a",xa({},h,{href:p||_,onClick:v||s?r:g,ref:n,target:l}))});var Qv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Qv||(Qv={}));var Yv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yv||(Yv={}));function RP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ao(),l=nl(),u=c1(t,{relative:o});return C.useCallback(c=>{if(vP(c,n)){c.preventDefault();let h=r!==void 0?r:Ni(l)===Ni(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Et=function(){return Et=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Et.apply(this,arguments)};function Nm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Da(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",ia="-moz-",ce="-webkit-",d1="comm",Gc="rule",Om="decl",AP="@import",f1="@keyframes",kP="@layer",CP=Math.abs,Lm=String.fromCharCode,Kf=Object.assign;function PP(t,e){return tt(t,0)^45?(((e<<2^tt(t,0))<<2^tt(t,1))<<2^tt(t,2))<<2^tt(t,3):0}function p1(t){return t.trim()}function Qn(t,e){return(t=e.exec(t))?t[0]:t}function ee(t,e,n){return t.replace(e,n)}function vu(t,e){return t.indexOf(e)}function tt(t,e){return t.charCodeAt(e)|0}function js(t,e,n){return t.slice(e,n)}function Nn(t){return t.length}function m1(t){return t.length}function $o(t,e){return e.push(t),t}function xP(t,e){return t.map(e).join("")}function Xv(t,e){return t.filter(function(n){return!Qn(n,e)})}var Qc=1,Bs=1,g1=0,un=0,ze=0,lo="";function Yc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Qc,column:Bs,length:o,return:"",siblings:a}}function Ir(t,e){return Kf(Yc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ji(t){for(;t.root;)t=Ir(t.root,{children:[t]});$o(t,t.siblings)}function DP(){return ze}function NP(){return ze=un>0?tt(lo,--un):0,Bs--,ze===10&&(Bs=1,Qc--),ze}function Tn(){return ze=un<g1?tt(lo,un++):0,Bs++,ze===10&&(Bs=1,Qc++),ze}function Ii(){return tt(lo,un)}function _u(){return un}function Xc(t,e){return js(lo,t,e)}function Gf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function OP(t){return Qc=Bs=1,g1=Nn(lo=t),un=0,[]}function LP(t){return lo="",t}function _d(t){return p1(Xc(un-1,Qf(t===91?t+2:t===40?t+1:t)))}function bP(t){for(;(ze=Ii())&&ze<33;)Tn();return Gf(t)>2||Gf(ze)>3?"":" "}function MP(t,e){for(;--e&&Tn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Xc(t,_u()+(e<6&&Ii()==32&&Tn()==32))}function Qf(t){for(;Tn();)switch(ze){case t:return un;case 34:case 39:t!==34&&t!==39&&Qf(ze);break;case 40:t===41&&Qf(t);break;case 92:Tn();break}return un}function VP(t,e){for(;Tn()&&t+ze!==47+10;)if(t+ze===42+42&&Ii()===47)break;return"/*"+Xc(e,un-1)+"*"+Lm(t===47?t:Tn())}function FP(t){for(;!Gf(Ii());)Tn();return Xc(t,un)}function UP(t){return LP(wu("",null,null,null,[""],t=OP(t),0,[0],t))}function wu(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,p=0,v=0,_=1,w=1,g=1,f=0,y="",m=i,T=s,R=r,S=y;w;)switch(v=f,f=Tn()){case 40:if(v!=108&&tt(S,h-1)==58){vu(S+=ee(_d(f),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:S+=_d(f);break;case 9:case 10:case 13:case 32:S+=bP(v);break;case 92:S+=MP(_u()-1,7);continue;case 47:switch(Ii()){case 42:case 47:$o($P(VP(Tn(),_u()),e,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=Nn(S)*g;case 125*_:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+c:g==-1&&(S=ee(S,/\f/g,"")),p>0&&Nn(S)-h&&$o(p>32?Zv(S+";",r,n,h-1,l):Zv(ee(S," ","")+";",r,n,h-2,l),l);break;case 59:S+=";";default:if($o(R=Jv(S,e,n,u,c,i,a,y,m=[],T=[],h,s),s),f===123)if(c===0)wu(S,e,R,R,m,s,h,a,T);else switch(d===99&&tt(S,3)===110?100:d){case 100:case 108:case 109:case 115:wu(t,R,R,r&&$o(Jv(t,R,R,0,0,i,a,y,i,m=[],h,T),T),i,T,h,a,r?m:T);break;default:wu(S,R,R,R,[""],T,0,a,T)}}u=c=p=0,_=g=1,y=S="",h=o;break;case 58:h=1+Nn(S),p=v;default:if(_<1){if(f==123)--_;else if(f==125&&_++==0&&NP()==125)continue}switch(S+=Lm(f),f*_){case 38:g=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Nn(S)-1)*g,g=1;break;case 64:Ii()===45&&(S+=_d(Tn())),d=Ii(),c=h=Nn(y=S+=FP(_u())),f++;break;case 45:v===45&&Nn(S)==2&&(_=0)}}return s}function Jv(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,p=i===0?s:[""],v=m1(p),_=0,w=0,g=0;_<r;++_)for(var f=0,y=js(t,d+1,d=CP(w=o[_])),m=t;f<v;++f)(m=p1(w>0?p[f]+" "+y:ee(y,/&\f/g,p[f])))&&(l[g++]=m);return Yc(t,e,n,i===0?Gc:a,l,u,c,h)}function $P(t,e,n,r){return Yc(t,e,n,d1,Lm(DP()),js(t,2,-2),0,r)}function Zv(t,e,n,r,i){return Yc(t,e,n,Om,js(t,0,r),js(t,r+1,-1),r,i)}function y1(t,e,n){switch(PP(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return ia+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+ia+t+we+t+t;case 5936:switch(tt(t,e+11)){case 114:return ce+t+we+ee(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+we+ee(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+we+ee(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+we+t+t;case 6165:return ce+t+we+"flex-"+t+t;case 5187:return ce+t+ee(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ce+t+we+"flex-item-"+ee(t,/flex-|-self/g,"")+(Qn(t,/flex-|baseline/)?"":we+"grid-row-"+ee(t,/flex-|-self/g,""))+t;case 4675:return ce+t+we+"flex-line-pack"+ee(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+we+ee(t,"shrink","negative")+t;case 5292:return ce+t+we+ee(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+ee(t,"-grow","")+ce+t+we+ee(t,"grow","positive")+t;case 4554:return ce+ee(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return ee(ee(ee(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return ee(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ee(ee(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!Qn(t,/flex-|baseline/))return we+"grid-column-align"+js(t,e)+t;break;case 2592:case 3360:return we+ee(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Qn(r.props,/grid-\w+-end/)})?~vu(t+(n=n[e].value),"span")?t:we+ee(t,"-start","")+t+we+"grid-row-span:"+(~vu(n,"span")?Qn(n,/\d+/):+Qn(n,/\d+/)-+Qn(t,/\d+/))+";":we+ee(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Qn(r.props,/grid-\w+-start/)})?t:we+ee(ee(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ee(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(t)-1-e>6)switch(tt(t,e+1)){case 109:if(tt(t,e+4)!==45)break;case 102:return ee(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+ia+(tt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~vu(t,"stretch")?y1(ee(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ee(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return we+i+":"+s+u+(o?we+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(tt(t,e+6)===121)return ee(t,":",":"+ce)+t;break;case 6444:switch(tt(t,tt(t,14)===45?18:11)){case 120:return ee(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(tt(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+we+"$2box$3")+t;case 100:return ee(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(t,"scroll-","scroll-snap-")+t}return t}function nc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function jP(t,e,n,r){switch(t.type){case kP:if(t.children.length)break;case AP:case Om:return t.return=t.return||t.value;case d1:return"";case f1:return t.return=t.value+"{"+nc(t.children,r)+"}";case Gc:if(!Nn(t.value=t.props.join(",")))return""}return Nn(n=nc(t.children,r))?t.return=t.value+"{"+n+"}":""}function BP(t){var e=m1(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function zP(t){return function(e){e.root||(e=e.return)&&t(e)}}function HP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Om:t.return=y1(t.value,t.length,n);return;case f1:return nc([Ir(t,{value:ee(t.value,"@","@"+ce)})],r);case Gc:if(t.length)return xP(n=t.props,function(i){switch(Qn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ji(Ir(t,{props:[ee(i,/:(read-\w+)/,":"+ia+"$1")]})),Ji(Ir(t,{props:[i]})),Kf(t,{props:Xv(n,r)});break;case"::placeholder":Ji(Ir(t,{props:[ee(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Ji(Ir(t,{props:[ee(i,/:(plac\w+)/,":"+ia+"$1")]})),Ji(Ir(t,{props:[ee(i,/:(plac\w+)/,we+"input-$1")]})),Ji(Ir(t,{props:[i]})),Kf(t,{props:Xv(n,r)});break}return""})}}var WP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",bm=typeof window<"u"&&"HTMLElement"in window,qP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),KP={},Jc=Object.freeze([]),Hs=Object.freeze({});function v1(t,e,n){return n===void 0&&(n=Hs),t.theme!==n.theme&&t.theme||e||n.theme}var _1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),GP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,QP=/(^-|-$)/g;function e_(t){return t.replace(GP,"-").replace(QP,"")}var YP=/(a)(d)/gi,t_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Yf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=t_(e%52)+n;return(t_(e%52)+n).replace(YP,"$1-$2")}var wd,ys=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},w1=function(t){return ys(5381,t)};function E1(t){return Yf(w1(t)>>>0)}function XP(t){return t.displayName||t.name||"Component"}function Ed(t){return typeof t=="string"&&!0}var T1=typeof Symbol=="function"&&Symbol.for,I1=T1?Symbol.for("react.memo"):60115,JP=T1?Symbol.for("react.forward_ref"):60112,ZP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ex={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},S1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tx=((wd={})[JP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wd[I1]=S1,wd);function n_(t){return("type"in(e=t)&&e.type.$$typeof)===I1?S1:"$$typeof"in t?tx[t.$$typeof]:ZP;var e}var nx=Object.defineProperty,rx=Object.getOwnPropertyNames,r_=Object.getOwnPropertySymbols,ix=Object.getOwnPropertyDescriptor,sx=Object.getPrototypeOf,i_=Object.prototype;function R1(t,e,n){if(typeof e!="string"){if(i_){var r=sx(e);r&&r!==i_&&R1(t,r,n)}var i=rx(e);r_&&(i=i.concat(r_(e)));for(var s=n_(t),o=n_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in ex||n&&n[l]||o&&l in o||s&&l in s)){var u=ix(e,l);try{nx(t,l,u)}catch{}}}}return t}function Ws(t){return typeof t=="function"}function Mm(t){return typeof t=="object"&&"styledComponentId"in t}function mi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Xf(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Na(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Jf(t,e,n){if(n===void 0&&(n=!1),!n&&!Na(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Jf(t[r],e[r]);else if(Na(e))for(var r in e)t[r]=Jf(t[r],e[r]);return t}function Vm(t,e){Object.defineProperty(t,"toString",{value:e})}function rl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ox=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw rl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Eu=new Map,rc=new Map,Td=1,Kl=function(t){if(Eu.has(t))return Eu.get(t);for(;rc.has(Td);)Td++;var e=Td++;return Eu.set(t,e),rc.set(e,t),e},ax=function(t,e){Eu.set(t,e),rc.set(e,t)},lx="style[".concat(zs,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),ux=new RegExp("^".concat(zs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cx=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},hx=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(ux);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(ax(c,u),cx(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function dx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var A1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(zs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(zs,"active"),r.setAttribute("data-styled-version","6.0.7");var o=dx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},fx=function(){function t(e){this.element=A1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw rl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),px=function(){function t(e){this.element=A1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),mx=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),s_=bm,gx={isServer:!bm,useCSSOMInjection:!qP},ic=function(){function t(e,n,r){e===void 0&&(e=Hs),n===void 0&&(n={});var i=this;this.options=Et(Et({},gx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&bm&&s_&&(s_=!1,function(s){for(var o=document.querySelectorAll(lx),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(zs)!=="active"&&(hx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Vm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(g){return rc.get(g)}(h);if(d===void 0)return"continue";var p=s.names.get(d),v=o.getGroup(h);if(p===void 0||v.length===0)return"continue";var _="".concat(zs,".g").concat(h,'[id="').concat(d,'"]'),w="";p!==void 0&&p.forEach(function(g){g.length>0&&(w+="".concat(g,","))}),l+="".concat(v).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Kl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Et(Et({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new mx(i):r?new fx(i):new px(i)}(this.options),new ox(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Kl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Kl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Kl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),yx=/&/g,vx=/^\s*\/\/.*$/gm;function k1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=k1(n.children,e)),n})}function _x(t){var e,n,r,i=t===void 0?Hs:t,s=i.options,o=s===void 0?Hs:s,a=i.plugins,l=a===void 0?Jc:a,u=function(d,p,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Gc&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(yx,n).replace(r,u))}),o.prefix&&c.push(HP),c.push(jP);var h=function(d,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=d.replace(vx,""),g=UP(v||p?"".concat(v," ").concat(p," { ").concat(w," }"):w);o.namespace&&(g=k1(g,o.namespace));var f=[];return nc(g,BP(c.concat(zP(function(y){return f.push(y)})))),f};return h.hash=l.length?l.reduce(function(d,p){return p.name||rl(15),ys(d,p.name)},5381).toString():"",h}var wx=new ic,Zf=_x(),C1=_n.createContext({shouldForwardProp:void 0,styleSheet:wx,stylis:Zf});C1.Consumer;_n.createContext(void 0);function ep(){return C.useContext(C1)}var Ex=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Zf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Vm(this,function(){throw rl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Zf),this.name+e.hash},t}(),Tx=function(t){return t>="A"&&t<="Z"};function o_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Tx(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var P1=function(t){return t==null||t===!1||t===""},x1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!P1(s)&&(Array.isArray(s)&&s.isCss||Ws(s)?r.push("".concat(o_(i),":"),s,";"):Na(s)?r.push.apply(r,Da(Da(["".concat(i," {")],x1(s),!1),["}"],!1)):r.push("".concat(o_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in WP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zr(t,e,n,r){if(P1(t))return[];if(Mm(t))return[".".concat(t.styledComponentId)];if(Ws(t)){if(!Ws(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return zr(i,e,n,r)}var s;return t instanceof Ex?n?(t.inject(n,r),[t.getName(r)]):[t]:Na(t)?x1(t):Array.isArray(t)?Array.prototype.concat.apply(Jc,t.map(function(o){return zr(o,e,n,r)})):[t.toString()]}function D1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ws(n)&&!Mm(n))return!1}return!0}var Ix=w1("6.0.7"),Sx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&D1(e),this.componentId=n,this.baseHash=ys(Ix,n),this.baseStyle=r,ic.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=mi(i,this.staticRulesId);else{var s=Xf(zr(this.rules,e,n,r)),o=Yf(ys(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=mi(i,o),this.staticRulesId=o}else{for(var l=ys(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=Xf(zr(h,e,n,r));l=ys(l,d),u+=d}}if(u){var p=Yf(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=mi(i,p)}}return i},t}(),Fm=_n.createContext(void 0);Fm.Consumer;var Id={};function Rx(t,e,n){var r=Mm(t),i=t,s=!Ed(t),o=e.attrs,a=o===void 0?Jc:o,l=e.componentId,u=l===void 0?function(y,m){var T=typeof y!="string"?"sc":e_(y);Id[T]=(Id[T]||0)+1;var R="".concat(T,"-").concat(E1("6.0.7"+T+Id[T]));return m?"".concat(m,"-").concat(R):R}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return Ed(y)?"styled.".concat(y):"Styled(".concat(XP(y),")")}(t);var h=e.displayName&&e.componentId?"".concat(e_(e.displayName),"-").concat(e.componentId):e.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;p=function(y,m){return v(y,m)&&_(y,m)}}else p=v}var w=new Sx(n,h,r?i.componentStyle:void 0);function g(y,m){return function(T,R,S){var N=T.attrs,J=T.componentStyle,B=T.defaultProps,Ue=T.foldedComponentIds,fe=T.styledComponentId,Jt=T.target,kn=_n.useContext(Fm),Cn=ep(),st=T.shouldForwardProp||Cn.shouldForwardProp,qe=function(dn,ae,Lt){for(var dt,bt=Et(Et({},ae),{className:void 0,theme:Lt}),Zt=0;Zt<dn.length;Zt+=1){var Yi=Ws(dt=dn[Zt])?dt(bt):dt;for(var Pn in Yi)bt[Pn]=Pn==="className"?mi(bt[Pn],Yi[Pn]):Pn==="style"?Et(Et({},bt[Pn]),Yi[Pn]):Yi[Pn]}return ae.className&&(bt.className=mi(bt.className,ae.className)),bt}(N,R,v1(R,kn,B)||Hs),O=qe.as||Jt,$={};for(var z in qe)qe[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?$.as=qe.forwardedAs:st&&!st(z,O)||($[z]=qe[z]));var ge=function(dn,ae){var Lt=ep(),dt=dn.generateAndInjectStyles(ae,Lt.styleSheet,Lt.stylis);return dt}(J,qe),Re=mi(Ue,fe);return ge&&(Re+=" "+ge),qe.className&&(Re+=" "+qe.className),$[Ed(O)&&!_1.has(O)?"class":"className"]=Re,$.ref=S,C.createElement(O,$)}(f,y,m)}var f=_n.forwardRef(g);return f.attrs=d,f.componentStyle=w,f.shouldForwardProp=p,f.foldedComponentIds=r?mi(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:t,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(m){for(var T=[],R=1;R<arguments.length;R++)T[R-1]=arguments[R];for(var S=0,N=T;S<N.length;S++)Jf(m,N[S],!0);return m}({},i.defaultProps,y):y}}),Vm(f,function(){return".".concat(f.styledComponentId)}),s&&R1(f,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function a_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var l_=function(t){return Object.assign(t,{isCss:!0})};function Um(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ws(t)||Na(t)){var r=t;return l_(zr(a_(Jc,Da([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?zr(i):l_(zr(a_(i,e)))}function tp(t,e,n){if(n===void 0&&(n=Hs),!e)throw rl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Um.apply(void 0,Da([i],s,!1)))};return r.attrs=function(i){return tp(t,e,Et(Et({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return tp(t,e,Et(Et({},n),i))},r}var N1=function(t){return tp(Rx,t)},se=N1;_1.forEach(function(t){se[t]=N1(t)});var Ax=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=D1(e),ic.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Xf(zr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&ic.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function O1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Um.apply(void 0,Da([t],e,!1)),i="sc-global-".concat(E1(JSON.stringify(r))),s=new Ax(r,i),o=function(l){var u=ep(),c=_n.useContext(Fm),h=_n.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),_n.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,KP,c,d);else{var p=Et(Et({},u),{theme:v1(u,h,o.defaultProps)});s.renderStyles(l,p,c,d)}}return _n.memo(o)}/**
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
 */const L1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},b1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(L1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Cx;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Px=function(t){const e=L1(t);return b1.encodeByteArray(e,!0)},sc=function(t){return Px(t).replace(/\./g,"")},M1=function(t){try{return b1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dx=()=>xx().__FIREBASE_DEFAULTS__,Nx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ox=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&M1(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return Dx()||Nx()||Ox()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},V1=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},F1=t=>{const e=V1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},U1=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},$1=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Lx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function j1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sc(JSON.stringify(n)),sc(JSON.stringify(o)),a].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Mx(){var t;const e=(t=Zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ux(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $x(){try{return typeof indexedDB=="object"}catch{return!1}}function jx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Bx="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bx,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}}class il{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,r)}}function zx(t,e){return t.replace(Hx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hx=/\{\$([^}]+)}/g;function Wx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(u_(s)&&u_(o)){if(!oc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function u_(t){return t!==null&&typeof t=="object"}/**
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
 */function sl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qx(t,e){const n=new Kx(t,e);return n.subscribe.bind(n)}class Kx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sd(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class Yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ci="[DEFAULT]";/**
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
 */class Qx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xx(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yx(t){return t===ci?void 0:t}function Xx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Zx={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},eD=le.INFO,tD={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},nD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $m{constructor(e){this.name=e,this._logLevel=eD,this._logHandler=nD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const rD=(t,e)=>e.some(n=>t instanceof n);let c_,h_;function iD(){return c_||(c_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sD(){return h_||(h_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B1=new WeakMap,np=new WeakMap,z1=new WeakMap,Rd=new WeakMap,jm=new WeakMap;function oD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&B1.set(n,t)}).catch(()=>{}),jm.set(e,t),e}function aD(t){if(np.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});np.set(t,e)}let rp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return np.get(t);if(e==="objectStoreNames")return t.objectStoreNames||z1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lD(t){rp=t(rp)}function uD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ad(this),e,...n);return z1.set(r,e.sort?e.sort():[e]),Hr(r)}:sD().includes(t)?function(...e){return t.apply(Ad(this),e),Hr(B1.get(this))}:function(...e){return Hr(t.apply(Ad(this),e))}}function cD(t){return typeof t=="function"?uD(t):(t instanceof IDBTransaction&&aD(t),rD(t,iD())?new Proxy(t,rp):t)}function Hr(t){if(t instanceof IDBRequest)return oD(t);if(Rd.has(t))return Rd.get(t);const e=cD(t);return e!==t&&(Rd.set(t,e),jm.set(e,t)),e}const Ad=t=>jm.get(t);function hD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dD=["get","getKey","getAll","getAllKeys","count"],fD=["put","add","delete","clear"],kd=new Map;function d_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return kd.set(e,s),s}lD(t=>({...t,get:(e,n,r)=>d_(e,n)||t.get(e,n,r),has:(e,n)=>!!d_(e,n)||t.has(e,n)}));/**
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
 */class pD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ip="@firebase/app",f_="0.9.15";/**
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
 */const Oi=new $m("@firebase/app"),gD="@firebase/app-compat",yD="@firebase/analytics-compat",vD="@firebase/analytics",_D="@firebase/app-check-compat",wD="@firebase/app-check",ED="@firebase/auth",TD="@firebase/auth-compat",ID="@firebase/database",SD="@firebase/database-compat",RD="@firebase/functions",AD="@firebase/functions-compat",kD="@firebase/installations",CD="@firebase/installations-compat",PD="@firebase/messaging",xD="@firebase/messaging-compat",DD="@firebase/performance",ND="@firebase/performance-compat",OD="@firebase/remote-config",LD="@firebase/remote-config-compat",bD="@firebase/storage",MD="@firebase/storage-compat",VD="@firebase/firestore",FD="@firebase/firestore-compat",UD="firebase",$D="10.1.0";/**
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
 */const sp="[DEFAULT]",jD={[ip]:"fire-core",[gD]:"fire-core-compat",[vD]:"fire-analytics",[yD]:"fire-analytics-compat",[wD]:"fire-app-check",[_D]:"fire-app-check-compat",[ED]:"fire-auth",[TD]:"fire-auth-compat",[ID]:"fire-rtdb",[SD]:"fire-rtdb-compat",[RD]:"fire-fn",[AD]:"fire-fn-compat",[kD]:"fire-iid",[CD]:"fire-iid-compat",[PD]:"fire-fcm",[xD]:"fire-fcm-compat",[DD]:"fire-perf",[ND]:"fire-perf-compat",[OD]:"fire-rc",[LD]:"fire-rc-compat",[bD]:"fire-gcs",[MD]:"fire-gcs-compat",[VD]:"fire-fst",[FD]:"fire-fst-compat","fire-js":"fire-js",[UD]:"fire-js-all"};/**
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
 */const ac=new Map,op=new Map;function BD(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Li(t){const e=t.name;if(op.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;op.set(e,t);for(const n of ac.values())BD(n,t);return!0}function eh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new il("app","Firebase",zD);/**
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
 */class HD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const Hi=$D;function H1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=U1()),!n)throw Wr.create("no-options");const s=ac.get(i);if(s){if(oc(n,s.options)&&oc(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new Jx(i);for(const l of op.values())o.addComponent(l);const a=new HD(n,r,o);return ac.set(i,a),a}function Bm(t=sp){const e=ac.get(t);if(!e&&t===sp&&U1())return H1();if(!e)throw Wr.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let i=(r=jD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}Li(new Yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const WD="firebase-heartbeat-database",qD=1,Oa="firebase-heartbeat-store";let Cd=null;function W1(){return Cd||(Cd=hD(WD,qD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oa)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),Cd}async function KD(t){try{return await(await W1()).transaction(Oa).objectStore(Oa).get(q1(t))}catch(e){if(e instanceof hn)Oi.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function p_(t,e){try{const r=(await W1()).transaction(Oa,"readwrite");await r.objectStore(Oa).put(e,q1(t)),await r.done}catch(n){if(n instanceof hn)Oi.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function q1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GD=1024,QD=30*24*60*60*1e3;class YD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=m_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=m_(),{heartbeatsToSend:n,unsentEntries:r}=XD(this._heartbeatsCache.heartbeats),i=sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function m_(){return new Date().toISOString().substring(0,10)}function XD(t,e=GD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),g_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),g_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $x()?jx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function g_(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ZD(t){Li(new Yr("platform-logger",e=>new pD(e),"PRIVATE")),Li(new Yr("heartbeat",e=>new YD(e),"PRIVATE")),$n(ip,f_,t),$n(ip,f_,"esm2017"),$n("fire-js","")}ZD("");var eN="firebase",tN="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(eN,tN,"app");function K1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nN=K1,G1=new il("auth","Firebase",K1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new $m("@firebase/auth");function rN(t,...e){lc.logLevel<=le.WARN&&lc.warn(`Auth (${Hi}): ${t}`,...e)}function Tu(t,...e){lc.logLevel<=le.ERROR&&lc.error(`Auth (${Hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw zm(t,...e)}function jn(t,...e){return zm(t,...e)}function Q1(t,e,n){const r=Object.assign(Object.assign({},nN()),{[e]:n});return new il("auth","Firebase",r).create(e,{appName:t.name})}function iN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),Q1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return G1.create(t,...e)}function W(t,e,...n){if(!t)throw zm(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tu(e),new Error(e)}function ur(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sN(){return y_()==="http:"||y_()==="https:"}function y_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sN()||Vx()||"connection"in navigator)?navigator.onLine:!0}function aN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=bx()||Fx()}get(){return oN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new ol(3e4,6e4);function uo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wi(t,e,n,r,i={}){return X1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Y1.fetch()(J1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function X1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lN),e);try{const i=new cN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Q1(t,c,u);cn(t,c)}}catch(i){if(i instanceof hn)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function al(t,e,n,r,i={}){const s=await Wi(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function J1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hm(t.config,i):`${t.config.apiScheme}://${i}`}class cN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),uN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e){return Wi(t,"POST","/v1/accounts:delete",e)}async function dN(t,e){return Wi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fN(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=Wm(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:sa(Pd(i.auth_time)),issuedAtTime:sa(Pd(i.iat)),expirationTime:sa(Pd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pd(t){return Number(t)*1e3}function Wm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const i=M1(n);return i?JSON.parse(i):(Tu("Failed to decode base64 JWT payload"),null)}catch(i){return Tu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pN(t){const e=Wm(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&mN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sa(this.lastLoginAt),this.creationTime=sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qs(t,dN(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_N(s.providerUserInfo):[],a=vN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Z1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yN(t){const e=De(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _N(t){return t.map(e=>{var{providerId:n}=e,r=Nm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e){const n=await X1(t,{},async()=>{const r=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=J1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Y1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new La;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new La,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Si{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Z1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fN(this,e)}reload(){return yN(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Si(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qs(this,hN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:m,isAnonymous:T,providerData:R,stsTokenManager:S}=n;W(y&&S,e,"internal-error");const N=La.fromJSON(this.name,S);W(typeof y=="string",e,"internal-error"),Tr(h,e.name),Tr(d,e.name),W(typeof m=="boolean",e,"internal-error"),W(typeof T=="boolean",e,"internal-error"),Tr(p,e.name),Tr(v,e.name),Tr(_,e.name),Tr(w,e.name),Tr(g,e.name),Tr(f,e.name);const J=new Si({uid:y,auth:e,email:d,emailVerified:m,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:N,createdAt:g,lastLoginAt:f});return R&&Array.isArray(R)&&(J.providerData=R.map(B=>Object.assign({},B))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new La;i.updateFromServerResponse(n);const s=new Si({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new Map;function tr(t){ur(t instanceof Function,"Expected a class definition");let e=v_.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,v_.set(t,e),e)}/**
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
 */class eT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eT.type="NONE";const __=eT;/**
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
 */function Iu(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Iu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Iu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(tr(__),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||tr(__);const o=Iu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Si._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new As(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new As(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sT(e))return"Blackberry";if(oT(e))return"Webos";if(qm(e))return"Safari";if((e.includes("chrome/")||nT(e))&&!e.includes("edge/"))return"Chrome";if(iT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tT(t=At()){return/firefox\//i.test(t)}function qm(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nT(t=At()){return/crios\//i.test(t)}function rT(t=At()){return/iemobile/i.test(t)}function iT(t=At()){return/android/i.test(t)}function sT(t=At()){return/blackberry/i.test(t)}function oT(t=At()){return/webos/i.test(t)}function th(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EN(t=At()){var e;return th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TN(){return Ux()&&document.documentMode===10}function aT(t=At()){return th(t)||iT(t)||oT(t)||sT(t)||/windows phone/i.test(t)||rT(t)}function IN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e=[]){let n;switch(t){case"Browser":n=w_(At());break;case"Worker":n=`${w_(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}async function uT(t,e){return Wi(t,"GET","/v2/recaptchaConfig",uo(t,e))}function E_(t){return t!==void 0&&t.enterprise!==void 0}class cT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=jn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SN().appendChild(r)})}function RN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AN="https://www.google.com/recaptcha/enterprise.js?render=",kN="recaptcha-enterprise",CN="NO_RECAPTCHA";class dT{constructor(e){this.type=kN,this.auth=qi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{uT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new cT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;E_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(CN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&E_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hT(AN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cc(t,e,n,r=!1){const i=new dT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class PN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new T_(this),this.idTokenSubscription=new T_(this),this.beforeStateQueue=new PN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}async initializeRecaptchaConfig(){const e=await uT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new cT(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new dT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new il("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qi(t){return De(t)}class T_{constructor(e){this.auth=e,this.observer=null,this.addObserver=qx(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t,e){const n=eh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(oc(s,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function NN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ON(t,e,n){const r=qi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fT(e),{host:o,port:a}=LN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bN()}function fT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LN(t){const e=fT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:I_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:I_(o)}}}function I_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function MN(t,e){return Wi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(t,e){return al(t,"POST","/v1/accounts:signInWithPassword",uo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",uo(t,e))}async function FN(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",uo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Km{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ba(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ba(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await cc(e,r,"signInWithPassword");return xd(e,i)}else return xd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await cc(e,r,"signInWithPassword");return xd(e,s)}else return Promise.reject(i)});case"emailLink":return VN(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return MN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FN(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return al(t,"POST","/v1/accounts:signInWithIdp",uo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="http://localhost";class bi extends Km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:UN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jN(t){const e=jo(Bo(t)).link,n=e?jo(Bo(e)).deep_link_id:null,r=jo(Bo(t)).deep_link_id;return(r?jo(Bo(r)).link:null)||r||n||e||t}class Gm{constructor(e){var n,r,i,s,o,a;const l=jo(Bo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=$N((i=l.mode)!==null&&i!==void 0?i:null);W(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=jN(e);try{return new Gm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.providerId=co.PROVIDER_ID}static credential(e,n){return ba._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gm.parseLink(n);return W(r,"argument-error"),ba._fromEmailAndCode(e,r.code,r.tenantId)}}co.PROVIDER_ID="password";co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ll extends Qm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ll{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.GOOGLE_SIGN_IN_METHOD="google.com";Pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends ll{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ll{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(t,e){return al(t,"POST","/v1/accounts:signUp",uo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Si._fromIdTokenResponse(e,r,i),o=S_(r);return new Mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=S_(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function S_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hc(e,n,r,i)}}function pT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,s,e,r):s})}async function BN(t,e,n=!1){const r=await qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
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
 */async function zN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await qs(t,pT(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Wm(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(t,e,n=!1){const r="signIn",i=await pT(t,r,e),s=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function HN(t,e){return mT(qi(t),e)}async function WN(t,e,n){var r;const i=qi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await cc(i,s,"signUpPassword");o=Dd(i,u)}else o=Dd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await cc(i,s,"signUpPassword");return Dd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Mi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function qN(t,e,n){return HN(De(t),co.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN(t,e){return Wi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=De(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qs(r,KN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function GN(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function QN(t,e,n){return De(t).beforeAuthStateChanged(e,n)}const dc="__sak";/**
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
 */class yT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(){const t=At();return qm(t)||th(t)}const XN=1e3,JN=10;class vT extends yT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YN()&&IN(),this.fallbackToPolling=aT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vT.type="LOCAL";const ZN=vT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T extends yT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_T.type="SESSION";const wT=_T;/**
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
 */function e2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await e2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class t2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ym("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function n2(t){Bn().location.href=t}/**
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
 */function ET(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function r2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function s2(){return ET()?self:null}/**
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
 */const TT="firebaseLocalStorageDb",o2=1,fc="firebaseLocalStorage",IT="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rh(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function a2(){const t=indexedDB.deleteDatabase(TT);return new ul(t).toPromise()}function lp(){const t=indexedDB.open(TT,o2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:IT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await a2(),e(await lp()))})})}async function R_(t,e,n){const r=rh(t,!0).put({[IT]:e,value:n});return new ul(r).toPromise()}async function l2(t,e){const n=rh(t,!1).get(e),r=await new ul(n).toPromise();return r===void 0?null:r.value}function A_(t,e){const n=rh(t,!0).delete(e);return new ul(n).toPromise()}const u2=800,c2=3;class ST{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>c2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ET()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nh._getInstance(s2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await r2(),!this.activeServiceWorker)return;this.sender=new t2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lp();return await R_(e,dc,"1"),await A_(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>R_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>l2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rh(i,!1).getAll();return new ul(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ST.type="LOCAL";const h2=ST;new ol(3e4,6e4);/**
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
 */function RT(t,e){return e?tr(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xm extends Km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function d2(t){return mT(t.auth,new Xm(t),t.bypassAuthState)}function f2(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),zN(n,new Xm(t),t.bypassAuthState)}async function p2(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),BN(n,new Xm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d2;case"linkViaPopup":case"linkViaRedirect":return p2;case"reauthViaPopup":case"reauthViaRedirect":return f2;default:cn(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=new ol(2e3,1e4);async function g2(t,e,n){const r=qi(t);iN(t,e,Qm);const i=RT(r,n);return new gi(r,"signInViaPopup",e,i).executeNotNull()}class gi extends AT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=Ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m2.get())};e()}}gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2="pendingRedirect",Su=new Map;class v2 extends AT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const r=await _2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _2(t,e){const n=T2(e),r=E2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function w2(t,e){Su.set(t._key(),e)}function E2(t){return tr(t._redirectPersistence)}function T2(t){return Iu(y2,t.config.apiKey,t.name)}async function I2(t,e,n=!1){const r=qi(t),i=RT(r,e),o=await new v2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=10*60*1e3;class R2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S2&&this.cachedEventUids.clear(),this.cachedEventUids.has(k_(e))}saveEventToCache(e){this.cachedEventUids.add(k_(e)),this.lastProcessedEventTime=Date.now()}}function k_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(t,e={}){return Wi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P2=/^https?/;async function x2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k2(t);for(const n of e)try{if(D2(n))return}catch{}cn(t,"unauthorized-domain")}function D2(t){const e=ap(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P2.test(n))return!1;if(C2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const N2=new ol(3e4,6e4);function C_(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O2(t){return new Promise((e,n)=>{var r,i,s;function o(){C_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{C_(),n(jn(t,"network-request-failed"))},timeout:N2.get()})}if(!((i=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=RN("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},hT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ru=null,e})}let Ru=null;function L2(t){return Ru=Ru||O2(t),Ru}/**
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
 */const b2=new ol(5e3,15e3),M2="__/auth/iframe",V2="emulator/auth/iframe",F2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $2(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hm(e,V2):`https://${t.config.authDomain}/${M2}`,r={apiKey:e.apiKey,appName:t.name,v:Hi},i=U2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sl(r).slice(1)}`}async function j2(t){const e=await L2(t),n=Bn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:$2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},b2.get());function l(){Bn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const B2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z2=500,H2=600,W2="_blank",q2="http://localhost";class P_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K2(t,e,n,r=z2,i=H2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},B2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=nT(u)?W2:n),tT(u)&&(e=e||q2,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(EN(u)&&a!=="_self")return G2(e||"",a),new P_(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new P_(h)}function G2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Q2="__/auth/handler",Y2="emulator/auth/handler",X2=encodeURIComponent("fac");async function x_(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hi,eventId:i};if(e instanceof Qm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ll){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${X2}=${encodeURIComponent(l)}`:"";return`${J2(t)}?${sl(a).slice(1)}${u}`}function J2({config:t}){return t.emulator?Hm(t,Y2):`https://${t.authDomain}/${Q2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="webStorageSupport";class Z2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wT,this._completeRedirectFn=I2,this._overrideRedirectResult=w2}async _openPopup(e,n,r,i){var s;ur((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await x_(e,n,r,ap(),i);return K2(e,o,Ym())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await x_(e,n,r,ap(),i);return n2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await j2(e),r=new R2(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nd,{type:Nd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nd];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aT()||qm()||th()}}const eO=Z2;var D_="@firebase/auth",N_="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rO(t){Li(new Yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lT(t)},u=new xN(r,i,s,l);return NN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Li(new Yr("auth-internal",e=>{const n=qi(e.getProvider("auth").getImmediate());return(r=>new tO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(D_,N_,nO(t)),$n(D_,N_,"esm2017")}/**
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
 */const iO=5*60,sO=$1("authIdTokenMaxAge")||iO;let O_=null;const oO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sO)return;const i=n==null?void 0:n.token;O_!==i&&(O_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aO(t=Bm()){const e=eh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DN(t,{popupRedirectResolver:eO,persistence:[h2,ZN,wT]}),r=$1("authTokenSyncURL");if(r){const s=oO(r);QN(n,s,()=>s(n.currentUser)),GN(n,o=>s(o))}const i=V1("auth");return i&&ON(n,`http://${i}`),n}rO("Browser");var lO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Jm=Jm||{},G=lO||self;function ih(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function cl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uO(t){return Object.prototype.hasOwnProperty.call(t,Od)&&t[Od]||(t[Od]=++cO)}var Od="closure_uid_"+(1e9*Math.random()>>>0),cO=0;function hO(t,e,n){return t.call.apply(t.bind,arguments)}function dO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=hO:Tt=dO,Tt.apply(null,arguments)}function Ql(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ri(){this.s=this.s,this.o=this.o}var fO=0;ri.prototype.s=!1;ri.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fO!=0)&&uO(this)};ri.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const CT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function L_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ih(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var pO=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function Ma(t){return/^[\s\xa0]*$/.test(t)}function sh(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Ln(t){return sh().indexOf(t)!=-1}function eg(t){return eg[" "](t),t}eg[" "]=function(){};function mO(t,e){var n=aL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gO=Ln("Opera"),Ks=Ln("Trident")||Ln("MSIE"),PT=Ln("Edge"),up=PT||Ks,xT=Ln("Gecko")&&!(sh().toLowerCase().indexOf("webkit")!=-1&&!Ln("Edge"))&&!(Ln("Trident")||Ln("MSIE"))&&!Ln("Edge"),yO=sh().toLowerCase().indexOf("webkit")!=-1&&!Ln("Edge");function DT(){var t=G.document;return t?t.documentMode:void 0}var cp;e:{var Ld="",bd=function(){var t=sh();if(xT)return/rv:([^\);]+)(\)|;)/.exec(t);if(PT)return/Edge\/([\d\.]+)/.exec(t);if(Ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yO)return/WebKit\/(\S+)/.exec(t);if(gO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bd&&(Ld=bd?bd[1]:""),Ks){var Md=DT();if(Md!=null&&Md>parseFloat(Ld)){cp=String(Md);break e}}cp=Ld}var hp;if(G.document&&Ks){var b_=DT();hp=b_||parseInt(cp,10)||void 0}else hp=void 0;var vO=hp;function Va(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xT){e:{try{eg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_O[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Va.$.h.call(this)}}it(Va,It);var _O={2:"touch",3:"pen",4:"mouse"};Va.prototype.h=function(){Va.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hl="closure_listenable_"+(1e6*Math.random()|0),wO=0;function EO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++wO,this.fa=this.ia=!1}function oh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function TO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function NT(t){const e={};for(const n in t)e[n]=t[n];return e}const M_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function OT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<M_.length;s++)n=M_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ah(t){this.src=t,this.g={},this.h=0}ah.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=fp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new EO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function dp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=CT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(oh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var ng="closure_lm_"+(1e6*Math.random()|0),Vd={};function LT(t,e,n,r,i){if(r&&r.once)return MT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)LT(t,e[s],n,r,i);return null}return n=sg(n),t&&t[hl]?t.O(e,n,cl(r)?!!r.capture:!!r,i):bT(t,e,n,!1,r,i)}function bT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=cl(i)?!!i.capture:!!i,a=ig(t);if(a||(t[ng]=a=new ah(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=IO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(FT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IO(){function t(n){return e.call(t.src,t.listener,n)}const e=SO;return t}function MT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)MT(t,e[s],n,r,i);return null}return n=sg(n),t&&t[hl]?t.P(e,n,cl(r)?!!r.capture:!!r,i):bT(t,e,n,!0,r,i)}function VT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)VT(t,e[s],n,r,i);else r=cl(r)?!!r.capture:!!r,n=sg(n),t&&t[hl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=fp(s,n,r,i),-1<n&&(oh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ig(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fp(e,n,r,i)),(n=-1<t?e[t]:null)&&rg(n))}function rg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[hl])dp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(FT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ig(e))?(dp(n,t),n.h==0&&(n.src=null,e[ng]=null)):oh(t)}}}function FT(t){return t in Vd?Vd[t]:Vd[t]="on"+t}function SO(t,e){if(t.fa)t=!0;else{e=new Va(e,this);var n=t.listener,r=t.la||t.src;t.ia&&rg(t),t=n.call(r,e)}return t}function ig(t){return t=t[ng],t instanceof ah?t:null}var Fd="__closure_events_fn_"+(1e9*Math.random()>>>0);function sg(t){return typeof t=="function"?t:(t[Fd]||(t[Fd]=function(e){return t.handleEvent(e)}),t[Fd])}function rt(){ri.call(this),this.i=new ah(this),this.S=this,this.J=null}it(rt,ri);rt.prototype[hl]=!0;rt.prototype.removeEventListener=function(t,e,n,r){VT(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),OT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Yl(o,r,!0,e)&&i}if(o=e.g=t,i=Yl(o,r,!0,e)&&i,i=Yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Yl(o,r,!1,e)&&i}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oh(n[r]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&dp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var og=G.JSON.stringify;class RO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function AO(){var t=ag;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kO{constructor(){this.h=this.g=null}add(e,n){const r=UT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var UT=new RO(()=>new CO,t=>t.reset());class CO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xO(t){G.setTimeout(()=>{throw t},0)}let Fa,Ua=!1,ag=new kO,$T=()=>{const t=G.Promise.resolve(void 0);Fa=()=>{t.then(DO)}};var DO=()=>{for(var t;t=AO();){try{t.h.call(t.g)}catch(n){xO(n)}var e=UT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ua=!1};function lh(t,e){rt.call(this),this.h=t||1,this.g=e||G,this.j=Tt(this.qb,this),this.l=Date.now()}it(lh,rt);L=lh.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(lg(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){lh.$.N.call(this),lg(this),delete this.g};function ug(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function jT(t){t.g=ug(()=>{t.g=null,t.i&&(t.i=!1,jT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class NO extends ri{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jT(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $a(t){ri.call(this),this.h=t,this.g={}}it($a,ri);var V_=[];function BT(t,e,n,r){Array.isArray(n)||(n&&(V_[0]=n.toString()),n=V_);for(var i=0;i<n.length;i++){var s=LT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function zT(t){tg(t.g,function(e,n){this.g.hasOwnProperty(n)&&rg(e)},t),t.g={}}$a.prototype.N=function(){$a.$.N.call(this),zT(this)};$a.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function uh(){this.g=!0}uh.prototype.Ea=function(){this.g=!1};function OO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function LO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MO(t,n)+(r?" "+r:"")})}function bO(t,e){t.info(function(){return"TIMEOUT: "+e})}uh.prototype.info=function(){};function MO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return og(n)}catch{return e}}var Ki={},F_=null;function ch(){return F_=F_||new rt}Ki.Ta="serverreachability";function HT(t){It.call(this,Ki.Ta,t)}it(HT,It);function ja(t){const e=ch();ct(e,new HT(e))}Ki.STAT_EVENT="statevent";function WT(t,e){It.call(this,Ki.STAT_EVENT,t),this.stat=e}it(WT,It);function xt(t){const e=ch();ct(e,new WT(e,t))}Ki.Ua="timingevent";function qT(t,e){It.call(this,Ki.Ua,t),this.size=e}it(qT,It);function dl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var hh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},KT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function cg(){}cg.prototype.h=null;function U_(t){return t.h||(t.h=t.i())}function GT(){}var fl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function hg(){It.call(this,"d")}it(hg,It);function dg(){It.call(this,"c")}it(dg,It);var pp;function dh(){}it(dh,cg);dh.prototype.g=function(){return new XMLHttpRequest};dh.prototype.i=function(){return{}};pp=new dh;function pl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new $a(this),this.P=VO,t=up?125:void 0,this.V=new lh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new QT}function QT(){this.i=null,this.g="",this.h=!1}var VO=45e3,mp={},pc={};L=pl.prototype;L.setTimeout=function(t){this.P=t};function gp(t,e,n){t.L=1,t.v=ph(cr(e)),t.s=n,t.S=!0,YT(t,null)}function YT(t,e){t.G=Date.now(),ml(t),t.A=cr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),iI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new QT,t.g=RI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new NO(Tt(t.Pa,t,t.g),t.O)),BT(t.U,t.g,"readystatechange",t.nb),e=t.I?NT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ja(),OO(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&bn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||up||this.g&&(this.h.h||this.g.ja()||z_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ja(3):ja(2)),fh(this);var n=this.g.da();this.ca=n;t:if(XT(this)){var r=z_(this.g);t="";var i=r.length,s=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),oa(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,LO(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ma(a)){var u=a;break t}}u=null}if(n=u)vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yp(this,n);else{this.i=!1,this.o=3,xt(12),yi(this),oa(this);break e}}this.S?(JT(this,c,o),up&&this.i&&c==3&&(BT(this.U,this.V,"tick",this.mb),this.V.start())):(vs(this.j,this.m,o,null),yp(this,o)),c==4&&yi(this),this.i&&!this.J&&(c==4?EI(this.l,this):(this.i=!1,ml(this)))}else iL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),yi(this),oa(this)}}}catch{}finally{}};function XT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function JT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=FO(t,n),i==pc){e==4&&(t.o=4,xt(14),r=!1),vs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mp){t.o=4,xt(15),vs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vs(t.j,t.m,i,null),yp(t,i);XT(t)&&i!=pc&&i!=mp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vg(e),e.M=!0,xt(11))):(vs(t.j,t.m,n,"[Invalid Chunked Response]"),yi(t),oa(t))}L.mb=function(){if(this.g){var t=bn(this.g),e=this.g.ja();this.C<e.length&&(fh(this),JT(this,t,e),this.i&&t!=4&&ml(this))}};function FO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pc:(n=Number(e.substring(n,r)),isNaN(n)?mp:(r+=1,r+n>e.length?pc:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,yi(this)};function ml(t){t.Y=Date.now()+t.P,ZT(t,t.P)}function ZT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=dl(Tt(t.lb,t),e)}function fh(t){t.B&&(G.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(bO(this.j,this.A),this.L!=2&&(ja(),xt(17)),yi(this),this.o=2,oa(this)):ZT(this,this.Y-t)};function oa(t){t.l.H==0||t.J||EI(t.l,t)}function yi(t){fh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,lg(t.V),zT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function yp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||vp(n.i,t))){if(!t.K&&vp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yc(n),yh(n);else break e;yg(n),xt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=dl(Tt(n.ib,n),6e3));if(1>=aI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vi(n,11)}else if((t.K||n.g==t)&&yc(n),!Ma(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(fg(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ee(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=SI(r,r.J?r.pa:null,r.Y),o.K){lI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(fh(a),ml(a)),r.g=o}else _I(r);0<n.j.length&&vh(n)}else u[0]!="stop"&&u[0]!="close"||vi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vi(n,7):gg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ja(4)}catch{}}function UO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ih(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $O(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ih(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function eI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ih(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$O(t),r=UO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var tI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ri(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ri){this.h=t.h,mc(this,t.j),this.s=t.s,this.g=t.g,gc(this,t.m),this.l=t.l;var e=t.i,n=new Ba;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$_(this,n),this.o=t.o}else t&&(e=String(t).match(tI))?(this.h=!1,mc(this,e[1]||"",!0),this.s=zo(e[2]||""),this.g=zo(e[3]||"",!0),gc(this,e[4]),this.l=zo(e[5]||"",!0),$_(this,e[6]||"",!0),this.o=zo(e[7]||"")):(this.h=!1,this.i=new Ba(null,this.h))}Ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ho(e,j_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ho(e,j_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ho(n,n.charAt(0)=="/"?HO:zO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ho(n,qO)),t.join("")};function cr(t){return new Ri(t)}function mc(t,e,n){t.j=n?zo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $_(t,e,n){e instanceof Ba?(t.i=e,KO(t.i,t.h)):(n||(e=Ho(e,WO)),t.i=new Ba(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function ph(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ho(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,BO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function BO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var j_=/[#\/\?@]/g,zO=/[#\?:]/g,HO=/[#\?]/g,WO=/[#\?@]/g,qO=/#/g;function Ba(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ii(t){t.g||(t.g=new Map,t.h=0,t.i&&jO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Ba.prototype;L.add=function(t,e){ii(this),this.i=null,t=ho(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nI(t,e){ii(t),e=ho(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function rI(t,e){return ii(t),e=ho(t,e),t.g.has(e)}L.forEach=function(t,e){ii(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){ii(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){ii(this);let e=[];if(typeof t=="string")rI(this,t)&&(e=e.concat(this.g.get(ho(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return ii(this),this.i=null,t=ho(this,t),rI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function iI(t,e,n){nI(t,e),0<n.length&&(t.i=null,t.g.set(ho(t,e),Zm(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ho(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KO(t,e){e&&!t.j&&(ii(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(nI(this,r),iI(this,i,n))},t)),t.j=e}var GO=class{constructor(t,e){this.g=t,this.map=e}};function sI(t){this.l=t||QO,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QO=10;function oI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function aI(t){return t.h?1:t.g?t.g.size:0}function vp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fg(t,e){t.g?t.g.add(e):t.h=e}function lI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sI.prototype.cancel=function(){if(this.i=uI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zm(t.i)}var YO=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function XO(){this.g=new YO}function JO(t,e,n){const r=n||"";try{eI(t,function(i,s){let o=i;cl(i)&&(o=og(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZO(t,e){const n=new uh;if(G.Image){const r=new Image;r.onload=Ql(Xl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ql(Xl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ql(Xl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ql(Xl,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function gl(t){this.l=t.fc||null,this.j=t.ob||!1}it(gl,cg);gl.prototype.g=function(){return new mh(this.l,this.j)};gl.prototype.i=function(t){return function(){return t}}({});function mh(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=pg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(mh,rt);var pg=0;L=mh.prototype;L.open=function(t,e){if(this.readyState!=pg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,za(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yl(this)),this.readyState=pg};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,za(this)),this.g&&(this.readyState=3,za(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function cI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yl(this):za(this),this.readyState==3&&cI(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,yl(this))};L.Ya=function(t){this.g&&(this.response=t,yl(this))};L.ka=function(){this.g&&yl(this)};function yl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,za(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function za(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eL=G.JSON.parse;function Le(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=hI,this.L=this.M=!1}it(Le,rt);var hI="",tL=/^https?$/i,nL=["POST","PUT"];L=Le.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pp.g(),this.C=this.u?U_(this.u):U_(pp),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){B_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=CT(nL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{pI(this),0<this.B&&((this.L=rL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=ug(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){B_(this,s)}};function rL(t){return Ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Jm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function B_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dI(t),gh(t)}function dI(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),gh(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gh(this,!0)),Le.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?fI(this):this.kb())};L.kb=function(){fI(this)};function fI(t){if(t.h&&typeof Jm<"u"&&(!t.C[1]||bn(t)!=4||t.da()!=2)){if(t.v&&bn(t)==4)ug(t.La,0,t);else if(ct(t,"readystatechange"),bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(tI)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),r=!tL.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<bn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",dI(t)}}finally{gh(t)}}}}function gh(t,e){if(t.g){pI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function pI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function bn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eL(e)}};function z_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case hI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function iL(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ma(t[r]))continue;var n=PO(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}TO(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mI(t){let e="";return tg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function mg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=mI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Oo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gI(t){this.Ga=0,this.j=[],this.l=new uh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Oo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Oo("baseRetryDelayMs",5e3,t),this.hb=Oo("retryDelaySeedMs",1e4,t),this.eb=Oo("forwardChannelMaxRetries",2,t),this.xa=Oo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new sI(t&&t.concurrentRequestLimit),this.Ja=new XO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=gI.prototype;L.ra=8;L.H=1;function gg(t){if(yI(t),t.H==3){var e=t.W++,n=cr(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),vl(t,n),e=new pl(t,t.l,e),e.L=2,e.v=ph(cr(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=RI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ml(e)}II(t)}function yh(t){t.g&&(vg(t),t.g.cancel(),t.g=null)}function yI(t){yh(t),t.u&&(G.clearTimeout(t.u),t.u=null),yc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function vh(t){if(!oI(t.i)&&!t.m){t.m=!0;var e=t.Na;Fa||$T(),Ua||(Fa(),Ua=!0),ag.add(e,t),t.C=0}}function sL(t,e){return aI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=dl(Tt(t.Na,t,e),TI(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new pl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=NT(s),OT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vI(this,i,e),n=cr(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),vl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(mI(s)))+"&"+e:this.o&&mg(n,this.o,s)),fg(this.i,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.aa=!0,gp(i,n,null)):gp(i,n,e),this.H=2}}else this.H==3&&(t?H_(this,t):this.j.length==0||oI(this.i)||H_(this))};function H_(t,e){var n;e?n=e.m:n=t.W++;const r=cr(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),vl(t,r),t.o&&t.s&&mg(r,t.o,t.s),n=new pl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=vI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),fg(t.i,n),gp(n,r,e)}function vl(t,e){t.na&&tg(t.na,function(n,r){Ee(e,r,n)}),t.h&&eI({},function(n,r){Ee(e,r,n)})}function vI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{JO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function _I(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fa||$T(),Ua||(Fa(),Ua=!0),ag.add(e,t),t.A=0}}function yg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=dl(Tt(t.Ma,t),TI(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,wI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=dl(Tt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xt(10),yh(this),wI(this))};function vg(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function wI(t){t.g=new pl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=cr(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),vl(t,e),t.o&&t.s&&mg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ph(cr(e)),n.s=null,n.S=!0,YT(n,t)}L.ib=function(){this.v!=null&&(this.v=null,yh(this),yg(this),xt(19))};function yc(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function EI(t,e){var n=null;if(t.g==e){yc(t),vg(t),t.g=null;var r=2}else if(vp(t.i,e))n=e.F,lI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=ch(),ct(r,new qT(r,n)),vh(t)}else _I(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&sL(t,e)||r==2&&yg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:vi(t,5);break;case 4:vi(t,10);break;case 3:vi(t,6);break;default:vi(t,2)}}}function TI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new Ri("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||mc(n,"https"),ph(n)),ZO(n.toString(),r)}else xt(2);t.H=0,t.h&&t.h.za(e),II(t),yI(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),xt(2)):(this.l.info("Failed to ping google.com"),xt(1))};function II(t){if(t.H=0,t.ma=[],t.h){const e=uI(t.i);(e.length!=0||t.j.length!=0)&&(L_(t.ma,e),L_(t.ma,t.j),t.i.i.length=0,Zm(t.j),t.j.length=0),t.h.ya()}}function SI(t,e,n){var r=n instanceof Ri?cr(n):new Ri(n);if(r.g!="")e&&(r.g=e+"."+r.g),gc(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ri(null);r&&mc(s,r),e&&(s.g=e),i&&gc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),vl(t,r),r}function RI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new gl({ob:!0})):new Le(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function AI(){}L=AI.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function vc(){if(Ks&&!(10<=Number(vO)))throw Error("Environmental error: no available transport.")}vc.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){rt.call(this),this.g=new gI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ma(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ma(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fo(this)}it(Qt,rt);Qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=SI(t,null,t.Y),vh(t)};Qt.prototype.close=function(){gg(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=og(t),t=n);e.j.push(new GO(e.fb++,t)),e.H==3&&vh(e)};Qt.prototype.N=function(){this.g.h=null,delete this.j,gg(this.g),delete this.g,Qt.$.N.call(this)};function kI(t){hg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(kI,hg);function CI(){dg.call(this),this.status=1}it(CI,dg);function fo(t){this.g=t}it(fo,AI);fo.prototype.Ba=function(){ct(this.g,"a")};fo.prototype.Aa=function(t){ct(this.g,new kI(t))};fo.prototype.za=function(t){ct(this.g,new CI)};fo.prototype.ya=function(){ct(this.g,"b")};function oL(){this.blockSize=-1}function Rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(Rn,oL);Rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ud(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ud(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ud(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ud(this,r),i=0;break}}this.h=i,this.i+=e};Rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var aL={};function _g(t){return-128<=t&&128>t?mO(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Mn(t){if(isNaN(t)||!isFinite(t))return Cs;if(0>t)return lt(Mn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=_p;return new de(e,0)}function PI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(PI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Mn(Math.pow(e,8)),r=Cs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Mn(Math.pow(e,s)),r=r.R(s).add(Mn(o))):(r=r.R(n),r=r.add(Mn(o)))}return r}var _p=4294967296,Cs=_g(0),wp=_g(1),W_=_g(16777216);L=de.prototype;L.ea=function(){if(rn(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:_p+r)*e,e*=_p}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(nr(this))return"0";if(rn(this))return"-"+lt(this).toString(t);for(var e=Mn(Math.pow(t,6)),n=this,r="";;){var i=wc(n,e).g;n=_c(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,nr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function nr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function rn(t){return t.h==-1}L.X=function(t){return t=_c(this,t),rn(t)?-1:nr(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(wp)}L.abs=function(){return rn(this)?lt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new de(n,n[n.length-1]&-2147483648?-1:0)};function _c(t,e){return t.add(lt(e))}L.R=function(t){if(nr(this)||nr(t))return Cs;if(rn(this))return rn(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(rn(t))return lt(this.R(lt(t)));if(0>this.X(W_)&&0>t.X(W_))return Mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Jl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Jl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Jl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Jl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function Jl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Lo(t,e){this.g=t,this.h=e}function wc(t,e){if(nr(e))throw Error("division by zero");if(nr(t))return new Lo(Cs,Cs);if(rn(t))return e=wc(lt(t),e),new Lo(lt(e.g),lt(e.h));if(rn(e))return e=wc(t,lt(e)),new Lo(lt(e.g),e.h);if(30<t.g.length){if(rn(t)||rn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=wp,r=e;0>=r.X(t);)n=q_(n),r=q_(r);var i=Zi(n,1),s=Zi(r,1);for(r=Zi(r,2),n=Zi(n,2);!nr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Zi(r,1),n=Zi(n,1)}return e=_c(t,i.R(e)),new Lo(i,e)}for(i=Cs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Mn(n),o=s.R(e);rn(o)||0<o.X(t);)n-=r,s=Mn(n),o=s.R(e);nr(s)&&(s=wp),i=i.add(s),t=_c(t,o)}return new Lo(i,t)}L.gb=function(t){return wc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function q_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function Zi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new de(i,t.h)}vc.prototype.createWebChannel=vc.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;hh.NO_ERROR=0;hh.TIMEOUT=8;hh.HTTP_ERROR=6;KT.COMPLETE="complete";GT.EventType=fl;fl.OPEN="a";fl.CLOSE="b";fl.ERROR="c";fl.MESSAGE="d";rt.prototype.listen=rt.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;Rn.prototype.digest=Rn.prototype.l;Rn.prototype.reset=Rn.prototype.reset;Rn.prototype.update=Rn.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Mn;de.fromString=PI;var lL=function(){return new vc},uL=function(){return ch()},$d=hh,cL=KT,hL=Ki,K_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dL=gl,Zl=GT,fL=Le,pL=Rn,Ps=de;const G_="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let po="10.1.0";/**
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
 */const Vi=new $m("@firebase/firestore");function Q_(){return Vi.logLevel}function F(t,...e){if(Vi.logLevel<=le.DEBUG){const n=e.map(wg);Vi.debug(`Firestore (${po}): ${t}`,...n)}}function hr(t,...e){if(Vi.logLevel<=le.ERROR){const n=e.map(wg);Vi.error(`Firestore (${po}): ${t}`,...n)}}function Gs(t,...e){if(Vi.logLevel<=le.WARN){const n=e.map(wg);Vi.warn(`Firestore (${po}): ${t}`,...n)}}function wg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: `+t;throw hr(e),new Error(e)}function Se(t,e){t||q()}function Z(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class xI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class gL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yL{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new xI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new yt(e)}}class vL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _L{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new wL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class DI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Xe(0,0))}static max(){return new Y(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ha{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ha.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ha?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ha{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const IL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Ha{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return IL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Te.fromString(e))}static fromName(e){return new j(Te.fromString(e).popFirst(5))}static empty(){return new j(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Te(e.slice()))}}function SL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Xr(i,j.empty(),e)}function RL(t){return new Xr(t.readTime,t.key,-1)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(Y.min(),j.empty(),-1)}static max(){return new Xr(Y.max(),j.empty(),-1)}}function AL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _l(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==kL)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Eg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Eg.ae=-1;function _h(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}function PL(t){return typeof t=="number"&&Number.isInteger(t)&&!Ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Y_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function NI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new X_(this.data.getIterator())}getIteratorFrom(e){return new X_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class X_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new St(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class OI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new OI("Invalid base64 string: "+s):s}}(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const xL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=xL.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ig(t){const e=t.mapValue.fields.__previous_value__;return Tg(e)?Ig(e):e}function Wa(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class DL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tg(t)?4:NL(t)?9007199254740991:10:q()}function Wn(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wa(t).isEqual(Wa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Jr(i.timestampValue),a=Jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fi(i.bytesValue).isEqual(Fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?Ec(o)===Ec(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Y_(o)!==Y_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wn(o[l],a[l])))return!1;return!0}(t,e);default:return q()}}function Ka(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return J_(t.timestampValue,e.timestampValue);case 4:return J_(Wa(t),Wa(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fi(s),l=Fi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ue(a[u],l[u]);if(c!==0)return c}return ue(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Be(s.latitude),Be(o.latitude));return a!==0?a:ue(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ys(a[u],l[u]);if(c)return c}return ue(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===tu.mapValue&&o===tu.mapValue)return 0;if(s===tu.mapValue)return 1;if(o===tu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ue(l[h],c[h]);if(d!==0)return d;const p=Ys(a[l[h]],u[c[h]]);if(p!==0)return p}return ue(l.length,c.length)}(t.mapValue,e.mapValue);default:throw q()}}function J_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Jr(t),r=Jr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Xs(t){return Ep(t)}function Ep(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ep(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ep(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function Z_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tp(t){return!!t&&"integerValue"in t}function Sg(t){return!!t&&"arrayValue"in t}function e0(t){return!!t&&"nullValue"in t}function t0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Au(t){return!!t&&"mapValue"in t}function aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Au(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=aa(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=aa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Au(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Au(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(aa(this.value))}}function LI(t){const e=[];return Gi(t.fields,(n,r)=>{const i=new wt([n]);if(Au(r)){const s=LI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,Y.min(),Y.min(),Y.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,Y.min(),Y.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,Y.min(),Y.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tc{constructor(e,n){this.position=e,this.inclusive=n}}function n0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function r0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function OL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bI{}class We extends bI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bL(e,n,r):n==="array-contains"?new FL(e,r):n==="in"?new UL(e,r):n==="not-in"?new $L(e,r):n==="array-contains-any"?new jL(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ML(e,r):new VL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ys(n,this.value)):n!==null&&Ui(this.value)===Ui(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class An extends bI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new An(e,n)}matches(e){return MI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function MI(t){return t.op==="and"}function VI(t){return LL(t)&&MI(t)}function LL(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function Ip(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if(VI(t))return t.filters.map(e=>Ip(e)).join(",");{const e=t.filters.map(n=>Ip(n)).join(",");return`${t.op}(${e})`}}function FI(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Wn(r.value,i.value)}(t,e):t instanceof An?function(r,i){return i instanceof An&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&FI(o,i.filters[a]),!0):!1}(t,e):void q()}function UI(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Xs(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(UI).join(" ,")+"}"}(t):"Filter"}class bL extends We{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class ML extends We{constructor(e,n){super(e,"in",n),this.keys=$I("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VL extends We{constructor(e,n){super(e,"not-in",n),this.keys=$I("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $I(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class FL extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sg(n)&&Ka(n.arrayValue,this.value)}}class UL extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class $L extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ka(this.value.arrayValue,n)}}class jL extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
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
 */class BL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function i0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BL(t,e,n,r,i,s,o)}function Rg(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ip(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xs(r)).join(",")),e.he=n}return e.he}function Ag(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!FI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!r0(t.startAt,e.startAt)&&r0(t.endAt,e.endAt)}function Sp(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class mo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function zL(t,e,n,r,i,s,o,a){return new mo(t,e,n,r,i,s,o,a)}function kg(t){return new mo(t)}function s0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Cg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function wh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function jI(t){return t.collectionGroup!==null}function Ds(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=wh(e),r=Cg(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new xs(n)),e.Pe.push(new xs(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new xs(wt.keyField(),s))}}}return e.Pe}function dr(t){const e=Z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=i0(e.path,e.collectionGroup,Ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ds(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new xs(s.field,o))}const r=e.endAt?new Tc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Tc(e.startAt.position,e.startAt.inclusive):null;e.Ie=i0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Rp(t,e){e.getFirstInequalityField(),wh(t);const n=t.filters.concat([e]);return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ic(t,e,n){return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Eh(t,e){return Ag(dr(t),dr(e))&&t.limitType===e.limitType}function BI(t){return`${Rg(dr(t))}|lt:${t.limitType}`}function Ap(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>UI(i)).join(", ")}]`),_h(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xs(i)).join(",")),`Target(${r})`}(dr(t))}; limitType=${t.limitType})`}function Th(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ds(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=n0(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ds(r),i)||r.endAt&&!function(o,a,l){const u=n0(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ds(r),i))}(t,e)}function HL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zI(t){return(e,n)=>{let r=!1;for(const i of Ds(t)){const s=WL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WL(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ys(l,u):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
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
 */class go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return NI(this.inner)}size(){return this.innerSize}}/**
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
 */const qL=new Ne(j.comparator);function fr(){return qL}const HI=new Ne(j.comparator);function Wo(...t){let e=HI;for(const n of t)e=e.insert(n.key,n);return e}function WI(t){let e=HI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _i(){return la()}function qI(){return la()}function la(){return new go(t=>t.toString(),(t,e)=>t.isEqual(e))}const KL=new Ne(j.comparator),GL=new St(j.comparator);function ne(...t){let e=GL;for(const n of t)e=e.add(n);return e}const QL=new St(ue);function YL(){return QL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function GI(t){return{integerValue:""+t}}function XL(t,e){return PL(e)?GI(e):KI(t,e)}/**
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
 */class Ih{constructor(){this._=void 0}}function JL(t,e,n){return t instanceof Sc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Tg(s)&&(s=Ig(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ga?YI(t,e):t instanceof Qa?XI(t,e):function(i,s){const o=QI(i,s),a=o0(o)+o0(i.Te);return Tp(o)&&Tp(i.Te)?GI(a):KI(i.serializer,a)}(t,e)}function ZL(t,e,n){return t instanceof Ga?YI(t,e):t instanceof Qa?XI(t,e):n}function QI(t,e){return t instanceof Rc?function(r){return Tp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Sc extends Ih{}class Ga extends Ih{constructor(e){super(),this.elements=e}}function YI(t,e){const n=JI(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qa extends Ih{constructor(e){super(),this.elements=e}}function XI(t,e){let n=JI(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class Rc extends Ih{constructor(e,n){super(),this.serializer=e,this.Te=n}}function o0(t){return Be(t.integerValue||t.doubleValue)}function JI(t){return Sg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ga&&i instanceof Ga||r instanceof Qa&&i instanceof Qa?Qs(r.elements,i.elements,Wn):r instanceof Rc&&i instanceof Rc?Wn(r.Te,i.Te):r instanceof Sc&&i instanceof Sc}(t.transform,e.transform)}class tb{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ku(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sh{}function ZI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pg(t.key,In.none()):new El(t.key,t.data,In.none());{const n=t.data,r=Vt.empty();let i=new St(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new si(t.key,r,new Wt(i.toArray()),In.none())}}function nb(t,e,n){t instanceof El?function(i,s,o){const a=i.value.clone(),l=l0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof si?function(i,s,o){if(!ku(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=l0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(eS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ua(t,e,n,r){return t instanceof El?function(s,o,a,l){if(!ku(s.precondition,o))return a;const u=s.value.clone(),c=u0(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof si?function(s,o,a,l){if(!ku(s.precondition,o))return a;const u=u0(s.fieldTransforms,l,o),c=o.data;return c.setAll(eS(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return ku(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=QI(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function a0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qs(r,i,(s,o)=>eb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class El extends Sh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class si extends Sh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function l0(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZL(o,a,n[i]))}return r}function u0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JL(s,o,e))}return r}class Pg extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ib extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ZI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>a0(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>a0(n,r))}}class xg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return KL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xg(e,n,r,i)}}/**
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
 */class ob{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ab{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,ie;function lb(t){switch(t){default:return q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function tS(t){if(t===void 0)return hr("GRPC error has no .code"),A.UNKNOWN;switch(t){case $e.OK:return A.OK;case $e.CANCELLED:return A.CANCELLED;case $e.UNKNOWN:return A.UNKNOWN;case $e.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case $e.INTERNAL:return A.INTERNAL;case $e.UNAVAILABLE:return A.UNAVAILABLE;case $e.UNAUTHENTICATED:return A.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case $e.NOT_FOUND:return A.NOT_FOUND;case $e.ALREADY_EXISTS:return A.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return A.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case $e.ABORTED:return A.ABORTED;case $e.OUT_OF_RANGE:return A.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return A.UNIMPLEMENTED;case $e.DATA_LOSS:return A.DATA_LOSS;default:return q()}}(ie=$e||($e={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Dg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return nu}static getOrCreateInstance(){return nu===null&&(nu=new Dg),nu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let nu=null;/**
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
 */function ub(){return new TextEncoder}/**
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
 */const cb=new Ps([4294967295,4294967295],0);function c0(t){const e=ub().encode(t),n=new pL;return n.update(e),new Uint8Array(n.digest())}function h0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ps([n,r],0),new Ps([i,s],0)]}class Ng{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qo(`Invalid padding: ${n}`);if(r<0)throw new qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ps.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ps.fromNumber(r)));return i.compare(cb)===1&&(i=new Ps([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=c0(e),[r,i]=h0(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ng(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=c0(e),[r,i]=h0(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Tl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rh(Y.min(),i,new Ne(ue),fr(),ne())}}class Tl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Tl(r,n,ne(),ne(),ne())}}/**
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
 */class Cu{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class nS{constructor(e,n){this.targetId=e,this.pe=n}}class rS{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class d0{constructor(){this.ye=0,this.we=p0(),this.Se=kt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ne(),n=ne(),r=ne();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Tl(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=p0()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class hb{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=fr(),this.$e=f0(),this.Ue=new Ne(ue)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Sp(a))if(s===0){const l=new j(a.path);this.ze(i,l,_t.newNoDocument(l,Y.min()))}else Se(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Dg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,v){var _,w,g,f,y,m;const T={localCacheCount:p,existenceFilterCount:v.count},R=v.unchangedNames;return R&&(T.bloomFilter={applied:h===0,hashCount:(_=R==null?void 0:R.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(g=(w=R==null?void 0:R.bits)===null||w===void 0?void 0:w.bitmap)===null||g===void 0?void 0:g.length)!==null&&f!==void 0?f:0,padding:(m=(y=R==null?void 0:R.bits)===null||y===void 0?void 0:y.padding)!==null&&m!==void 0?m:0},d&&(T.bloomFilter.mightContain=d)),T}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Fi(s).toUint8Array()}catch(h){if(h instanceof OI)return Gs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Ng(l,o,a)}catch(h){return Gs(h instanceof qo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Sp(a.target)){const l=new j(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,_t.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=ne();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Rh(e,n,this.Ue,this.Ke,r);return this.Ke=fr(),this.$e=f0(),this.Ue=new Ne(ue),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new d0,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new St(ue),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new d0),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function f0(){return new Ne(j.comparator)}function p0(){return new Ne(j.comparator)}const db=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pb=(()=>({and:"AND",or:"OR"}))();class mb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kp(t,e){return t.useProto3Json||_h(e)?e:{value:e}}function Ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gb(t,e){return Ac(t,e.toTimestamp())}function zn(t){return Se(!!t),Y.fromTimestamp(function(n){const r=Jr(n);return new Xe(r.seconds,r.nanos)}(t))}function Og(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function sS(t){const e=Te.fromString(t);return Se(uS(e)),e}function Cp(t,e){return Og(t.databaseId,e.path)}function jd(t,e){const n=sS(e);if(n.get(1)!==t.databaseId.projectId)throw new b(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(oS(n))}function Pp(t,e){return Og(t.databaseId,e)}function yb(t){const e=sS(t);return e.length===4?Te.emptyPath():oS(e)}function xp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oS(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function m0(t,e,n){return{name:Cp(t,e),fields:n.value.mapValue.fields}}function vb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Se(c===void 0||typeof c=="string"),kt.fromBase64String(c||"")):(Se(c===void 0||c instanceof Uint8Array),kt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:tS(u.code);return new b(c,u.message||"")}(o);n=new rS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jd(t,r.document.name),s=zn(r.document.updateTime),o=r.document.createTime?zn(r.document.createTime):Y.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Cu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jd(t,r.document),s=r.readTime?zn(r.readTime):Y.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Cu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jd(t,r.document),s=r.removedTargetIds||[];n=new Cu([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ab(i,s),a=r.targetId;n=new nS(a,o)}}return n}function _b(t,e){let n;if(e instanceof El)n={update:m0(t,e.key,e.value)};else if(e instanceof Pg)n={delete:Cp(t,e.key)};else if(e instanceof si)n={update:m0(t,e.key,e.data),updateMask:Cb(e.fieldMask)};else{if(!(e instanceof ib))return q();n={verify:Cp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(t,e.precondition)),n}function wb(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?zn(i.updateTime):zn(s);return o.isEqual(Y.min())&&(o=zn(s)),new tb(o,i.transformResults||[])}(n,e))):[]}function Eb(t,e){return{documents:[Pp(t,e.path)]}}function Tb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Pp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return lS(An.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ts(h.field),direction:Rb(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=kp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Ib(t){let e=yb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=aS(h);return d instanceof An&&VI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new xs(ns(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,_h(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Tc(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new Tc(p,d)}(n.endAt)),zL(e,i,o,s,a,"F",l,u)}function Sb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ns(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ns(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return We.create(ns(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>aS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function Rb(t){return db[t]}function Ab(t){return fb[t]}function kb(t){return pb[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return wt.fromServerFormat(t.fieldPath)}function lS(t){return t instanceof We?function(n){if(n.op==="=="){if(t0(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(e0(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(t0(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(e0(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:Ab(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(i=>lS(i));return r.length===1?r[0]:{compositeFilter:{op:kb(n.op),filters:r}}}(t):q()}function Cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Lr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Pb{constructor(e){this.ct=e}}function xb(t){const e=Ib({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
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
 */class Db{constructor(){this.sn=new Nb}addToCollectionParentIndex(e,n){return this.sn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Xr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class Nb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(Te.comparator)).toArray()}}/**
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
 */class Js{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Js(0)}static On(){return new Js(-1)}}/**
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
 */class Ob{constructor(){this.changes=new go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Lb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ua(r.mutation,i,Wt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=_i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Wo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=fr();const o=la(),a=function(){return la()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof si)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ua(c.mutation,u,c.mutation.getFieldMask(),Xe.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Lb(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=la();let i=new Ne((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Wt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=qI();c.forEach(d=>{if(!s.has(d)){const p=ZI(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(_i());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:WI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=Wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Wo();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(c,h){return new mo(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,_t.newInvalidDocument(u)))});let o=Wo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ua(u.mutation,l,Wt.empty(),Xe.now()),Th(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return x.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:zn(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:xb(i.bundledQuery),readTime:zn(i.readTime)}}(n)),x.resolve()}}/**
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
 */class Vb{constructor(){this.overlays=new Ne(j.comparator),this.cr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_i();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=_i(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=_i(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=_i(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ob(n,r));let s=this.cr.get(n);s===void 0&&(s=ne(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class Lg{constructor(){this.lr=new St(Ze.hr),this.Pr=new St(Ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ze(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new j(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new j(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=ne();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return j.comparator(e.key,n.key)||ue(e.mr,n.mr)}static Ir(e,n){return ue(e.mr,n.mr)||j.comparator(e.key,n.key)}}/**
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
 */class Fb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new St(Ze.hr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(ue);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),x.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new j(s),0);let a=new St(ue);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),x.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return x.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.pr.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Ub{constructor(e){this.Dr=e,this.docs=function(){return new Ne(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=fr();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AL(RL(c),r)<=0||(i.has(c.key)||Th(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}vr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $b(this)}getSize(e){return x.resolve(this.size)}}class $b extends Ob{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class jb{constructor(e){this.persistence=e,this.Cr=new go(n=>Rg(n),Ag),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Lg,this.targetCount=0,this.Or=Js.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),x.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Ln(n),x.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Mr.containsKey(n))}}/**
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
 */class Bb{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Eg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new jb(this),this.indexManager=new Db,this.remoteDocumentCache=function(i){return new Ub(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Pb(n),this.Qr=new Mb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Vb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new Fb(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new zb(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return x.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class zb extends CL{constructor(e){super(),this.currentSequenceNumber=e}}class bg{constructor(e){this.persistence=e,this.Wr=new Lg,this.Gr=null}static zr(e){return new bg(e)}get jr(){if(this.Gr)return this.Gr;throw q()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.jr,r=>{const i=j.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return x.or([()=>x.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Mg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mg(e,n.fromCache,r,i)}}/**
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
 */class Hb{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(s0(n))return x.resolve(null);let r=dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ic(n,null,"F"),r=dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Ic(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return s0(n)||i.isEqual(Y.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(Q_()<=le.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ap(n)),this.ji(e,o,n,SL(i,-1)))})}Gi(e,n){let r=new St(zI(e));return n.forEach((i,s)=>{Th(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return Q_()<=le.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Ap(n)),this.Ki.getDocumentsMatchingQuery(e,n,Xr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ne(ue),this.Yi=new go(s=>Rg(s),Ag),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bb(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function qb(t,e,n,r){return new Wb(t,e,n,r)}async function cS(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Kb(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=x.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);Se(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hS(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function Gb(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(kt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=fr(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Qb(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(Y.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function Qb(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=fr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function Yb(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xb(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Dp(t,e,n){const r=Z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wl(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function g0(t,e,n){const r=Z(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=Z(l),d=h.Yi.get(c);return d!==void 0?x.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,dr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(a=>(Jb(r,HL(e),a),{documents:a,ss:s})))}function Jb(t,e,n){let r=t.Zi.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class y0{constructor(){this.activeTargetIds=YL()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zb{constructor(){this.Hs=new y0,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new y0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eM{Ys(e){}shutdown(){}}/**
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
 */class v0{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ru=null;function Bd(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class nM{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const gt="WebChannelConnection";class rM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Bd(),l=this.mo(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(F("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Gs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=tM[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Bd();return new Promise((o,a)=>{const l=new fL;l.setWithCredentials(!0),l.listenOnce(cL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $d.NO_ERROR:const c=l.getResponseJson();F(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case $d.TIMEOUT:F(gt,`RPC '${e}' ${s} timed out`),a(new b(A.DEADLINE_EXCEEDED,"Request time out"));break;case $d.HTTP_ERROR:const h=l.getStatus();if(F(gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(p.status);a(new b(v,p.message))}else a(new b(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(A.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{F(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Bd(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lL(),a=uL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new dL({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");F(gt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const v=new nM({so:w=>{p?F(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(F(gt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),F(gt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),_=(w,g,f)=>{w.listen(g,y=>{try{f(y)}catch(m){setTimeout(()=>{throw m},0)}})};return _(h,Zl.EventType.OPEN,()=>{p||F(gt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Zl.EventType.CLOSE,()=>{p||(p=!0,F(gt,`RPC '${e}' stream ${i} transport closed`),v.Po())}),_(h,Zl.EventType.ERROR,w=>{p||(p=!0,Gs(gt,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new b(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,Zl.EventType.MESSAGE,w=>{var g;if(!p){const f=w.data[0];Se(!!f);const y=f,m=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(m){F(gt,`RPC '${e}' stream ${i} received error:`,m);const T=m.status;let R=function(J){const B=$e[J];if(B!==void 0)return tS(B)}(T),S=m.message;R===void 0&&(R=A.INTERNAL,S="Unknown error status: "+T+" with message "+m.message),p=!0,v.Po(new b(R,S)),h.close()}else F(gt,`RPC '${e}' stream ${i} received:`,f),v.Io(f)}}),_(a,hL.STAT_EVENT,w=>{w.stat===K_.PROXY?F(gt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===K_.NOPROXY&&F(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){return new mb(t,!0)}/**
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
 */class dS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class fS{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new dS(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new b(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iM extends fS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=vb(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?zn(o.readTime):Y.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=xp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Sp(l)?{documents:Eb(s,l)}:{query:Tb(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=iS(s,o.resumeToken);const u=kp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Ac(s,o.snapshotVersion.toTimestamp());const u=kp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Sb(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=xp(this.serializer),n.removeTarget=e,this.Ho(n)}}class sM extends fS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=wb(e.writeResults,e.commitTime),r=zn(e.commitTime);return this.listener.u_(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=xp(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_b(this.serializer,r))};this.Ho(n)}}/**
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
 */class oM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new b(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(A.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(A.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class aM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(hr(n),this.d_=!1):F("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class lM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Qi(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.y_.add(4),await Il(u),u.b_.set("Unknown"),u.y_.delete(4),await kh(u)}(this))})}),this.b_=new aM(r,i)}}async function kh(t){if(Qi(t))for(const e of t.w_)await e(!0)}async function Il(t){for(const e of t.w_)await e(!1)}function pS(t,e){const n=Z(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Ug(n)?Fg(n):yo(n).Uo()&&Vg(n,e))}function mS(t,e){const n=Z(t),r=yo(n);n.p_.delete(e),r.Uo()&&gS(n,e),n.p_.size===0&&(r.Uo()?r.zo():Qi(n)&&n.b_.set("Unknown"))}function Vg(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yo(t).i_(e)}function gS(t,e){t.D_.Be(e),yo(t).s_(e)}function Fg(t){t.D_=new hb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),yo(t).start(),t.b_.A_()}function Ug(t){return Qi(t)&&!yo(t).$o()&&t.p_.size>0}function Qi(t){return Z(t).y_.size===0}function yS(t){t.D_=void 0}async function uM(t){t.p_.forEach((e,n)=>{Vg(t,e)})}async function cM(t,e){yS(t),Ug(t)?(t.b_.m_(e),Fg(t)):t.b_.set("Unknown")}async function hM(t,e,n){if(t.b_.set("Online"),e instanceof rS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kc(t,r)}else if(e instanceof Cu?t.D_.We(e):e instanceof nS?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Y.min()))try{const r=await hS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(kt.EMPTY_BYTE_STRING,c.snapshotVersion)),gS(s,l);const h=new Lr(c.target,l,u,c.sequenceNumber);Vg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await kc(t,r)}}async function kc(t,e,n){if(!wl(e))throw e;t.y_.add(1),await Il(t),t.b_.set("Offline"),n||(n=()=>hS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await kh(t)})}function vS(t,e){return e().catch(n=>kc(t,n,e))}async function Ch(t){const e=Z(t),n=Zr(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;dM(e);)try{const i=await Yb(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,fM(e,i)}catch(i){await kc(e,i)}_S(e)&&wS(e)}function dM(t){return Qi(t)&&t.g_.length<10}function fM(t,e){t.g_.push(e);const n=Zr(t);n.Uo()&&n.__&&n.a_(e.mutations)}function _S(t){return Qi(t)&&!Zr(t).$o()&&t.g_.length>0}function wS(t){Zr(t).start()}async function pM(t){Zr(t).l_()}async function mM(t){const e=Zr(t);for(const n of t.g_)e.a_(n.mutations)}async function gM(t,e,n){const r=t.g_.shift(),i=xg.from(r,e,n);await vS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ch(t)}async function yM(t,e){e&&Zr(t).__&&await async function(r,i){if(function(o){return lb(o)&&o!==A.ABORTED}(i.code)){const s=r.g_.shift();Zr(r).Go(),await vS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ch(r)}}(t,e),_S(t)&&wS(t)}async function _0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Qi(n);n.y_.add(3),await Il(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await kh(n)}async function vM(t,e){const n=Z(t);e?(n.y_.delete(2),await kh(n)):e||(n.y_.add(2),await Il(n),n.b_.set("Unknown"))}function yo(t){return t.v_||(t.v_=function(n,r,i){const s=Z(n);return s.P_(),new iM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:uM.bind(null,t),uo:cM.bind(null,t),r_:hM.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Ug(t)?Fg(t):t.b_.set("Unknown")):(await t.v_.stop(),yS(t))})),t.v_}function Zr(t){return t.C_||(t.C_=function(n,r,i){const s=Z(n);return s.P_(),new sM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:pM.bind(null,t),uo:yM.bind(null,t),c_:mM.bind(null,t),u_:gM.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Ch(t)):(await t.C_.stop(),t.g_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class $g{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new $g(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jg(t,e){if(hr("AsyncQueue",`${e}: ${t}`),wl(t))return new b(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Wo(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new Ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class w0{constructor(){this.F_=new Ne(j.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):q():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,Ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Eh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class _M{constructor(){this.x_=void 0,this.listeners=[]}}class wM{constructor(){this.queries=new go(e=>BI(e),Eh),this.onlineState="Unknown",this.O_=new Set}}async function ES(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _M),i)try{s.x_=await n.onListen(r)}catch(o){const a=jg(o,`Initialization of query '${Ap(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Bg(n)}async function TS(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EM(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Bg(n)}function TM(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Bg(t){t.O_.forEach(e=>{e.next()})}class IS{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class SS{constructor(e){this.key=e}}class RS{constructor(e){this.key=e}}class IM{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ne(),this.mutatedKeys=ne(),this.na=zI(e),this.ra=new Ns(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new w0,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Th(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),w=!0):this._a(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.na(p,l)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return v(d)-v(p)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Zs(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new w0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ne(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new RS(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new SS(r))}),n}ha(e){this.X_=e.ss,this.ta=ne();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Zs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class SM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RM{constructor(e){this.key=e,this.Ia=!1}}class AM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new go(a=>BI(a),Eh),this.da=new Map,this.Aa=new Set,this.Ra=new Ne(j.comparator),this.Va=new Map,this.ma=new Lg,this.fa={},this.ga=new Map,this.pa=Js.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function kM(t,e){const n=VM(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await Xb(n.localStore,dr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await CM(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&pS(n.remoteStore,o)}return i}async function CM(t,e,n,r,i){t.wa=(h,d,p)=>async function(_,w,g,f){let y=w.view.sa(g);y.zi&&(y=await g0(_.localStore,w.query,!1).then(({documents:R})=>w.view.sa(R,y)));const m=f&&f.targetChanges.get(w.targetId),T=w.view.applyChanges(y,_.isPrimaryClient,m);return T0(_,w.targetId,T.ca),T.snapshot}(t,h,d,p);const s=await g0(t.localStore,e,!0),o=new IM(e,s.ss),a=o.sa(s.documents),l=Tl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);T0(t,n,u.ca);const c=new SM(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function PM(t,e){const n=Z(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Eh(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Dp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mS(n.remoteStore,r.targetId),Np(n,r.targetId)}).catch(_l)):(Np(n,r.targetId),await Dp(n.localStore,r.targetId,!0))}async function xM(t,e,n){const r=FM(t);try{const i=await function(o,a){const l=Z(o),u=Xe.now(),c=a.reduce((p,v)=>p.add(v.key),ne());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=fr(),_=ne();return l.Xi.getEntries(p,c).next(w=>{v=w,v.forEach((g,f)=>{f.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{h=w;const g=[];for(const f of a){const y=rb(f,h.get(f.key).overlayedDocument);y!=null&&g.push(new si(f.key,y,LI(y.value.mapValue),In.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{d=w;const g=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:d.batchId,changes:WI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new Ne(ue)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Sl(r,i.changes),await Ch(r.remoteStore)}catch(i){const s=jg(i,"Failed to persist write");n.reject(s)}}async function AS(t,e){const n=Z(t);try{const r=await Gb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Se(o.Ia):i.removedDocuments.size>0&&(Se(o.Ia),o.Ia=!1))}),await Sl(n,r,e)}catch(r){await _l(r)}}function E0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Bg(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DM(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new Ne(j.comparator);o=o.insert(s,_t.newNoDocument(s,Y.min()));const a=ne().add(s),l=new Rh(Y.min(),new Map,new Ne(ue),o,a);await AS(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),zg(r)}else await Dp(r.localStore,e,!1).then(()=>Np(r,e,n)).catch(_l)}async function NM(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await Kb(n.localStore,e);CS(n,r,null),kS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sl(n,i)}catch(i){await _l(i)}}async function OM(t,e,n){const r=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Se(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);CS(r,e,n),kS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sl(r,i)}catch(i){await _l(i)}}function kS(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function CS(t,e,n){const r=Z(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Np(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||PS(t,r)})}function PS(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(mS(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),zg(t))}function T0(t,e,n){for(const r of n)r instanceof SS?(t.ma.addReference(r.key,e),LM(t,r)):r instanceof RS?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||PS(t,r.key)):q()}function LM(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Aa.add(r),zg(t))}function zg(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new j(Te.fromString(e)),r=t.pa.next();t.Va.set(r,new RM(n)),t.Ra=t.Ra.insert(n,r),pS(t.remoteStore,new Lr(dr(kg(n.path)),r,"TargetPurposeLimboResolution",Eg.ae))}}async function Sl(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Mg.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=Z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>x.forEach(u,d=>x.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>x.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!wl(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function bM(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await cS(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new b(A.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sl(n,r.ts)}}function MM(t,e){const n=Z(t),r=n.Va.get(e);if(r&&r.Ia)return ne().add(r.key);{let i=ne();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function VM(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DM.bind(null,e),e.Ta.r_=EM.bind(null,e.eventManager),e.Ta.Sa=TM.bind(null,e.eventManager),e}function FM(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OM.bind(null,e),e}class I0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qb(this.persistence,new Hb,e.initialUser,this.serializer)}createPersistence(e){return new Bb(bg.zr,this.serializer)}createSharedClientState(e){return new Zb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>E0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bM.bind(null,this.syncEngine),await vM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wM}()}createDatastore(e){const n=Ah(e.databaseInfo.databaseId),r=function(s){return new rM(s)}(e.databaseInfo);return function(s,o,a,l){return new oM(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new lM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>E0(this.syncEngine,n,0),function(){return v0.v()?new v0:new eM}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new AM(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);F("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Il(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class $M{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=DI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function S0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BM(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>_0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>_0(e.remoteStore,s)),t._onlineComponents=e}function jM(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jM(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await Hd(t,new I0)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Hd(t,new I0);return t._offlineComponents}async function DS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await S0(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await S0(t,new UM))),t._onlineComponents}function zM(t){return DS(t).then(e=>e.syncEngine)}async function Op(t){const e=await DS(t),n=e.eventManager;return n.onListen=kM.bind(null,e.syncEngine),n.onUnlisten=PM.bind(null,e.syncEngine),n}function HM(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new xS({next:d=>{o.enqueueAndForget(()=>TS(s,h)),d.fromCache&&l.source==="server"?u.reject(new b(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new IS(a,c,{includeMetadataChanges:!0,W_:!0});return ES(s,h)}(await Op(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function NS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Map;/**
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
 */function OS(t,e,n){if(!n)throw new b(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WM(t,e,n,r){if(e===!0&&r===!0)throw new b(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A0(t){if(!j.isDocumentKey(t))throw new b(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k0(t){if(j.isDocumentKey(t))throw new b(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ph(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ph(t);throw new b(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function qM(t,e){if(e<=0)throw new b(A.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mL;switch(r.type){case"firstParty":return new _L(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=R0.get(n);r&&(F("ComponentProvider","Removing Datastore"),R0.delete(n),r.terminate())}(this),Promise.resolve()}}function KM(t,e,n,r={}){var i;const s=(t=Hn(t,xh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=j1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new gL(new xI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Kr extends yr{constructor(e,n,r){super(e,n,kg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new j(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function Hg(t,e,...n){if(t=De(t),OS("collection","path",e),t instanceof xh){const r=Te.fromString(e,...n);return k0(r),new Kr(t,null,r)}{if(!(t instanceof Bt||t instanceof Kr))throw new b(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return k0(r),new Kr(t.firestore,null,r)}}function LS(t,e,...n){if(t=De(t),arguments.length===1&&(e=DI.V()),OS("doc","path",e),t instanceof xh){const r=Te.fromString(e,...n);return A0(r),new Bt(t,null,new j(r))}{if(!(t instanceof Bt||t instanceof Kr))throw new b(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return A0(r),new Bt(t.firestore,t instanceof Kr?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new dS(this,"async_queue_retry"),this.Xa=()=>{const n=zd();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=zd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new qr;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!wl(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw hr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=$g.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&q()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function P0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class $i extends xh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new GM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bS(this),this._firestoreClient.terminate()}}function QM(t,e){const n=typeof t=="object"?t:Bm(),r=typeof t=="string"?t:e||"(default)",i=eh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=F1("firestore");s&&KM(i,...s)}return i}function Wg(t){return t._firestoreClient||bS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new DL(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,NS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new $M(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new eo(kt.fromBase64String(e))}catch(n){throw new b(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new eo(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this._methodName=e}}/**
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
 */class Kg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const YM=/^__.*__$/;class XM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new si(e,this.data,this.fieldMask,n,this.fieldTransforms):new El(e,this.data,n,this.fieldTransforms)}}class MS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new si(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function VS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Gg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Gg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Cc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(VS(this.uu)&&YM.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class JM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ah(e)}Ru(e,n,r,i=!1){return new Gg({uu:e,methodName:n,Au:r,path:wt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qg(t){const e=t._freezeSettings(),n=Ah(t._databaseId);return new JM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ZM(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);Yg("Data must be an object, but it was:",o,r);const a=FS(r,o);let l,u;if(s.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Lp(e,h,n);if(!o.contains(d))throw new b(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$S(c,d)||c.push(d)}l=new Wt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new XM(new Vt(a),l,u)}class Nh extends qg{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nh}}function eV(t,e,n,r){const i=t.Ru(1,e,n);Yg("Data must be an object, but it was:",i,r);const s=[],o=Vt.empty();Gi(r,(l,u)=>{const c=Xg(e,l,n);u=De(u);const h=i.Iu(c);if(u instanceof Nh)s.push(c);else{const d=Rl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Wt(s);return new MS(o,a,i.fieldTransforms)}function tV(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[Lp(e,r,n)],l=[i];if(s.length%2!=0)throw new b(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Lp(e,s[d])),l.push(s[d+1]);const u=[],c=Vt.empty();for(let d=a.length-1;d>=0;--d)if(!$S(u,a[d])){const p=a[d];let v=l[d];v=De(v);const _=o.Iu(p);if(v instanceof Nh)u.push(p);else{const w=Rl(v,_);w!=null&&(u.push(p),c.set(p,w))}}const h=new Wt(u);return new MS(c,h,o.fieldTransforms)}function nV(t,e,n,r=!1){return Rl(n,t.Ru(r?4:3,e))}function Rl(t,e){if(US(t=De(t)))return Yg("Unsupported field value:",e,t),FS(t,e);if(t instanceof qg)return function(r,i){if(!VS(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Rl(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:Ac(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ac(i.serializer,s)}}if(r instanceof Kg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof eo)return{bytesValue:iS(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Og(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Ph(r)}`)}(t,e)}function FS(t,e){const n={};return NI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gi(t,(r,i)=>{const s=Rl(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function US(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Kg||t instanceof eo||t instanceof Bt||t instanceof qg)}function Yg(t,e,n){if(!US(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ph(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Lp(t,e,n){if((e=De(e))instanceof Dh)return e._internalPath;if(typeof e=="string")return Xg(t,e);throw Cc("Field path arguments must be of type string or ",t,!1,void 0,n)}const rV=new RegExp("[~\\*/\\[\\]]");function Xg(t,e,n){if(e.search(rV)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dh(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(A.INVALID_ARGUMENT,a+t+l)}function $S(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iV extends jS{data(){return super.data()}}function Oh(t,e){return typeof e=="string"?Xg(t,e):e instanceof Dh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jg{}class Zg extends Jg{}function zS(t,e,...n){let r=[];e instanceof Jg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ey).length,a=s.filter(l=>l instanceof Lh).length;if(o>1||o>0&&a>0)throw new b(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Lh extends Zg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lh(e,n,r)}_apply(e){const n=this._parse(e);return qS(e._query,n),new yr(e.firestore,e.converter,Rp(e._query,n))}_parse(e){const n=Qg(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new b(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){D0(h,c);const p=[];for(const v of h)p.push(x0(l,s,v));d={arrayValue:{values:p}}}else d=x0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||D0(h,c),d=nV(a,o,h,c==="in"||c==="not-in");return We.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sV(t,e,n){const r=e,i=Oh("where",t);return Lh._create(i,r,n)}class ey extends Jg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ey(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:An.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)qS(o,l),o=Rp(o,l)}(e._query,n),new yr(e.firestore,e.converter,Rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ty extends Zg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ty(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new b(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new xs(s,o);return function(u,c){if(Cg(u)===null){const h=wh(u);h!==null&&KS(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new yr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new mo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function HS(t,e="asc"){const n=e,r=Oh("orderBy",t);return ty._create(r,n)}class ny extends Zg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ny(e,n,r)}_apply(e){return new yr(e.firestore,e.converter,Ic(e._query,this._limit,this._limitType))}}function WS(t){return qM("limit",t),ny._create("limit",t,"F")}function x0(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new b(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jI(e)&&n.indexOf("/")!==-1)throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!j.isDocumentKey(r))throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Z_(t,new j(r))}if(n instanceof Bt)return Z_(t,n._key);throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ph(n)}.`)}function D0(t,e){if(!Array.isArray(t)||t.length===0)throw new b(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qS(t,e){if(e.isInequality()){const r=wh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new b(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Cg(t);s!==null&&KS(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function KS(t,e,n){if(!n.isEqual(e))throw new b(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class oV{convertValue(e,n="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Kg(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ig(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Se(uS(r));const i=new qa(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||hr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GS extends jS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Oh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Pu extends GS{data(e={}){return super.data(e)}}class QS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ko(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pu(this._firestore,this._userDataWriter,r.key,r,new Ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ko(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ko(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:lV(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class ry extends oV{constructor(e){super(),this.firestore=e}convertBytes(e){return new eo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function uV(t){t=Hn(t,yr);const e=Hn(t.firestore,$i),n=Wg(e),r=new ry(e);return BS(t._query),HM(n,t._query).then(i=>new QS(e,r,t,i))}function cV(t,e,n,...r){t=Hn(t,Bt);const i=Hn(t.firestore,$i),s=Qg(i);let o;return o=typeof(e=De(e))=="string"||e instanceof Dh?tV(s,"updateDoc",t._key,e,n,r):eV(s,"updateDoc",t._key,e),iy(i,[o.toMutation(t._key,In.exists(!0))])}function hV(t){return iy(Hn(t.firestore,$i),[new Pg(t._key,In.none())])}function dV(t,e){const n=Hn(t.firestore,$i),r=LS(t),i=aV(t.converter,e);return iy(n,[ZM(Qg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,In.exists(!1))]).then(()=>r)}function fV(t,...e){var n,r,i;t=De(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||P0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(P0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Bt)u=Hn(t.firestore,$i),c=kg(t._key.path),l={next:h=>{e[o]&&e[o](pV(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Hn(t,yr);u=Hn(h.firestore,$i),c=h._query;const d=new ry(u);l={next:p=>{e[o]&&e[o](new QS(u,d,h,p))},error:e[o+1],complete:e[o+2]},BS(t._query)}return function(d,p,v,_){const w=new xS(_),g=new IS(p,w,v);return d.asyncQueue.enqueueAndForget(async()=>ES(await Op(d),g)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>TS(await Op(d),g))}}(Wg(u),c,a,l)}function iy(t,e){return function(r,i){const s=new qr;return r.asyncQueue.enqueueAndForget(async()=>xM(await zM(r),i,s)),s.promise}(Wg(t),e)}function pV(t,e,n){const r=n.docs.get(e._key),i=new ry(t);return new GS(t,i,e._key,r,new Ko(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){po=i})(Hi),Li(new Yr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $i(new yL(r.getProvider("auth-internal")),new EL(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),$n(G_,"4.1.0",e),$n(G_,"4.1.0","esm2017")})();/**
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
 */const YS="firebasestorage.googleapis.com",XS="storageBucket",mV=2*60*1e3,gV=10*60*1e3;/**
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
 */class Me extends hn{constructor(e,n,r=0){super(Wd(e),`Firebase Storage: ${n} (${Wd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Wd(t){return"storage/"+t}function sy(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(be.UNKNOWN,t)}function yV(t){return new Me(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vV(t){return new Me(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _V(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(be.UNAUTHENTICATED,t)}function wV(){return new Me(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function EV(t){return new Me(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function TV(){return new Me(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IV(){return new Me(be.CANCELED,"User canceled the upload/download.")}function SV(t){return new Me(be.INVALID_URL,"Invalid URL '"+t+"'.")}function RV(t){return new Me(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function AV(){return new Me(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+XS+"' property when initializing the app?")}function kV(){return new Me(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CV(){return new Me(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PV(t){return new Me(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bp(t){return new Me(be.INVALID_ARGUMENT,t)}function JS(){return new Me(be.APP_DELETED,"The Firebase app was deleted.")}function xV(t){return new Me(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ca(t,e){return new Me(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bo(t){throw new Me(be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw RV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(m){m.path_=decodeURIComponent(m.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===YS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let m=0;m<y.length;m++){const T=y[m],R=T.regex.exec(e);if(R){const S=R[T.indices.bucket];let N=R[T.indices.path];N||(N=""),r=new qt(S,N),T.postModify(r);break}}if(r==null)throw SV(e);return r}}class DV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function NV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(w){v||(v=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function OV(t){t(!1)}/**
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
 */function LV(t){return t!==void 0}function bV(t){return typeof t=="object"&&!Array.isArray(t)}function oy(t){return typeof t=="string"||t instanceof String}function N0(t){return ay()&&t instanceof Blob}function ay(){return typeof Blob<"u"&&!Mx()}function O0(t,e,n,r){if(r<e)throw bp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function bh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ZS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ai;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ai||(Ai={}));/**
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
 */function MV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class VV{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new iu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ai.NO_ERROR,l=s.getStatus();if(!a||MV(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Ai.ABORT;r(!1,new iu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new iu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());LV(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=sy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?JS():IV();o(l)}else{const l=TV();o(l)}};this.canceled_?n(!1,new iu(!1,null,!0)):this.backoffId_=NV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class iu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $V(t,e){e&&(t["X-Firebase-GMPID"]=e)}function jV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BV(t,e,n,r,i,s,o=!0){const a=ZS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return $V(u,e),FV(u,n),UV(u,s),jV(u,r),new VV(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function zV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function HV(...t){const e=zV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ay())return new Blob(t);throw new Me(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function WV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function qV(t){if(typeof atob>"u")throw PV("base-64");return atob(t)}/**
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
 */const Vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qd{constructor(e,n){this.data=e,this.contentType=n||null}}function KV(t,e){switch(t){case Vn.RAW:return new qd(eR(e));case Vn.BASE64:case Vn.BASE64URL:return new qd(tR(t,e));case Vn.DATA_URL:return new qd(QV(e),YV(e))}throw sy()}function eR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function GV(t){let e;try{e=decodeURIComponent(t)}catch{throw ca(Vn.DATA_URL,"Malformed data URL.")}return eR(e)}function tR(t,e){switch(t){case Vn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ca(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Vn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ca(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=qV(e)}catch(i){throw i.message.includes("polyfill")?i:ca(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class nR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ca(Vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=XV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function QV(t){const e=new nR(t);return e.base64?tR(Vn.BASE64,e.rest):GV(e.rest)}function YV(t){return new nR(t).contentType}function XV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Dr{constructor(e,n){let r=0,i="";N0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(N0(this.data_)){const r=this.data_,i=WV(r,e,n);return i===null?null:new Dr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(ay()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(HV.apply(null,n))}else{const n=e.map(o=>oy(o)?KV(Vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Dr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function rR(t){let e;try{e=JSON.parse(t)}catch{return null}return bV(e)?e:null}/**
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
 */function JV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ZV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function iR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function e4(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||e4}}let su=null;function t4(t){return!oy(t)||t.length<2?t:iR(t)}function sR(){if(su)return su;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return t4(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),su=t,su}function n4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function r4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return n4(r,t),r}function oR(t,e,n){const r=rR(e);return r===null?null:r4(t,r,n)}function i4(t,e,n,r){const i=rR(e);if(i===null||!oy(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=bh(d,n,r),v=ZS({alt:"media",token:u});return p+v})[0]}function s4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ly{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function aR(t){if(!t)throw sy()}function o4(t,e){function n(r,i){const s=oR(t,i,e);return aR(s!==null),s}return n}function a4(t,e){function n(r,i){const s=oR(t,i,e);return aR(s!==null),i4(s,i,t.host,t._protocol)}return n}function lR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=wV():i=_V():n.getStatus()===402?i=vV(t.bucket):n.getStatus()===403?i=EV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function uR(t){const e=lR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=yV(t.path)),s.serverResponse=i.serverResponse,s}return n}function l4(t,e,n){const r=e.fullServerUrl(),i=bh(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ly(i,s,a4(t,n),o);return a.errorHandler=uR(e),a}function u4(t,e){const n=e.fullServerUrl(),r=bh(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new ly(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=uR(e),a}function c4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function h4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=c4(null,e)),r}function d4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let m=0;m<2;m++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=h4(e,r,i),c=s4(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Dr.getBlob(h,r,d);if(p===null)throw kV();const v={name:u.fullPath},_=bh(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,f=new ly(_,w,o4(t,n),g);return f.urlParams=v,f.headers=o,f.body=p.uploadData(),f.errorHandler=lR(e),f}class f4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ai.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ai.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ai.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw bo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class p4 extends f4{initXhr(){this.xhr_.responseType="text"}}function uy(){return new p4}/**
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
 */class ji{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ji(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iR(this._location.path)}get storage(){return this._service}get parent(){const e=JV(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new ji(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xV(e)}}function m4(t,e,n){t._throwIfRoot("uploadBytes");const r=d4(t.storage,t._location,sR(),new Dr(e,!0),n);return t.storage.makeRequestWithTokens(r,uy).then(i=>({metadata:i,ref:t}))}function g4(t){t._throwIfRoot("getDownloadURL");const e=l4(t.storage,t._location,sR());return t.storage.makeRequestWithTokens(e,uy).then(n=>{if(n===null)throw CV();return n})}function y4(t){t._throwIfRoot("deleteObject");const e=u4(t.storage,t._location);return t.storage.makeRequestWithTokens(e,uy)}function v4(t,e){const n=ZV(t._location.path,e),r=new qt(t._location.bucket,n);return new ji(t.storage,r)}/**
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
 */function _4(t){return/^[A-Za-z]+:\/\//.test(t)}function w4(t,e){return new ji(t,e)}function cR(t,e){if(t instanceof cy){const n=t;if(n._bucket==null)throw AV();const r=new ji(n,n._bucket);return e!=null?cR(r,e):r}else return e!==void 0?v4(t,e):t}function E4(t,e){if(e&&_4(e)){if(t instanceof cy)return w4(t,e);throw bp("To use ref(service, url), the first argument must be a Storage instance.")}else return cR(t,e)}function L0(t,e){const n=e==null?void 0:e[XS];return n==null?null:qt.makeFromBucketSpec(n,t)}function T4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:j1(i,t.app.options.projectId))}class cy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=YS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mV,this._maxUploadRetryTime=gV,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=L0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=L0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){O0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){O0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ji(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new DV(JS());{const o=BV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const b0="@firebase/storage",M0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="storage";function dR(t,e,n){return t=De(t),m4(t,e,n)}function fR(t){return t=De(t),g4(t)}function I4(t){return t=De(t),y4(t)}function hy(t,e){return t=De(t),E4(t,e)}function S4(t=Bm(),e){t=De(t);const r=eh(t,hR).getImmediate({identifier:e}),i=F1("storage");return i&&R4(r,...i),r}function R4(t,e,n,r={}){T4(t,e,n,r)}function A4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new cy(n,r,i,e,Hi)}function k4(){Li(new Yr(hR,A4,"PUBLIC").setMultipleInstances(!0)),$n(b0,M0,""),$n(b0,M0,"esm2017")}k4();const C4={apiKey:"AIzaSyAx9wSfYPpSENNp3AyeUZ-NeW3BaJIlv-w",authDomain:"cs3203final.firebaseapp.com",projectId:"cs3203final",storageBucket:"cs3203final.appspot.com",messagingSenderId:"47200009677",appId:"1:47200009677:web:685ae8eb367766f60cd884"},dy=H1(C4),vr=aO(dy),fy=S4(dy),Mh=QM(dy),P4=se.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  padding: 50px 0px;
  width: 100%;
  max-width: 860px;
`,x4=se.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Kd=se.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;function D4(){const t=ao(),e=async()=>{confirm("Are you sure you want to log out?")&&(await vr.signOut(),t("/login"))};return D.jsxs(P4,{children:[D.jsxs(x4,{children:[D.jsx(tc,{to:"/",children:D.jsx(Kd,{children:D.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:D.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"})})})}),D.jsx(tc,{to:"/profile",children:D.jsx(Kd,{children:D.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:D.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),D.jsx(Kd,{onClick:e,className:"log-out",children:D.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[D.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),D.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),D.jsx(fP,{})]})}const N4=se.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,O4=se.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`,L4=se.label`
  padding: 10px 0px;
  color: #1d9bf0;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #1d9bf0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,b4=se.input`
  display: none;
`,M4=se.input`
  background-color: #1d9bf0;
  color: white;
  border: none;
  padding: 10px 0px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;function V4(){const[t,e]=C.useState(!1),[n,r]=C.useState(""),[i,s]=C.useState(null),o=u=>{r(u.target.value)},a=u=>{const{files:c}=u.target;c&&c.length===1&&s(c[0])},l=async u=>{u.preventDefault();const c=vr.currentUser;if(!(!c||t||n===""||n.length>180))try{e(!0);const h=await dV(Hg(Mh,"tweets"),{tweet:n,createdAt:Date.now(),username:c.displayName||"Anonymous",userId:c.uid});if(i){const d=hy(fy,`tweets/${c.uid}/${h.id}`),p=await dR(d,i),v=await fR(p.ref);await cV(h,{photo:v})}r(""),s(null)}catch(h){console.log(h)}finally{e(!1)}};return D.jsxs(N4,{onSubmit:l,children:[D.jsx(O4,{required:!0,rows:5,maxLength:180,onChange:o,value:n,placeholder:"What is happening?!"}),D.jsx(L4,{htmlFor:"file",children:i?"Photo added ✅":"Add photo"}),D.jsx(b4,{onChange:a,type:"file",id:"file",accept:"image/*"}),D.jsx(M4,{type:"submit",value:t?"Posting...":"Post Tweet"})]})}const F4=se.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`,V0=se.div`
  &:last-child {
    place-self: end;
  }
`,U4=se.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`,$4=se.span`
  font-weight: 600;
  font-size: 15px;
`,j4=se.p`
  margin: 10px 0px;
  font-size: 18px;
`,B4=se.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;function pR({username:t,photo:e,tweet:n,userId:r,id:i}){const s=vr.currentUser,o=async()=>{if(!(!confirm("Are you sure you want to delete this tweet?")||(s==null?void 0:s.uid)!==r))try{if(await hV(LS(Mh,"tweets",i)),e){const l=hy(fy,`tweets/${s.uid}/${i}`);await I4(l)}}catch(l){console.log(l)}finally{}};return D.jsxs(F4,{children:[D.jsxs(V0,{children:[D.jsx($4,{children:t}),D.jsx(j4,{children:n}),(s==null?void 0:s.uid)===r?D.jsx(B4,{onClick:o,children:"Delete"}):null]}),D.jsx(V0,{children:e?D.jsx(U4,{src:e}):null})]})}const z4=se.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
`;function H4(){const[t,e]=C.useState([]);return C.useEffect(()=>{let n=null;return(async()=>{const i=zS(Hg(Mh,"tweets"),HS("createdAt","desc"),WS(25));n=await fV(i,s=>{const o=s.docs.map(a=>{const{tweet:l,createdAt:u,userId:c,username:h,photo:d}=a.data();return{tweet:l,createdAt:u,userId:c,username:h,photo:d,id:a.id}});e(o)})})(),()=>{n&&n()}},[]),D.jsx(z4,{children:t.map(n=>D.jsx(pR,{...n},n.id))})}const W4=se.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
`;function q4(){return D.jsxs(W4,{children:[D.jsx(V4,{}),D.jsx(H4,{})]})}const K4=se.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,G4=se.label`
  width: 80px;
  overflow: hidden;
  height: 80px;
  border-radius: 50%;
  background-color: #1d9bf0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`,Q4=se.img`
  width: 100%;
`,Y4=se.input`
  display: none;
`,X4=se.span`
  font-size: 22px;
`,J4=se.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;function Z4(){const t=vr.currentUser,[e,n]=C.useState(t==null?void 0:t.photoURL),[r,i]=C.useState([]),s=async a=>{const{files:l}=a.target;if(t&&l&&l.length===1){const u=l[0],c=hy(fy,`avatars/${t==null?void 0:t.uid}`),h=await dR(c,u),d=await fR(h.ref);n(d),await gT(t,{photoURL:d})}},o=async()=>{const a=zS(Hg(Mh,"tweets"),sV("userId","==",t==null?void 0:t.uid),HS("createdAt","desc"),WS(25)),u=(await uV(a)).docs.map(c=>{const{tweet:h,createdAt:d,userId:p,username:v,photo:_}=c.data();return{tweet:h,createdAt:d,userId:p,username:v,photo:_,id:c.id}});i(u)};return C.useEffect(()=>{o()},[]),D.jsxs(K4,{children:[D.jsx(G4,{htmlFor:"avatar",children:e?D.jsx(Q4,{src:e}):D.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:D.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})}),D.jsx(Y4,{onChange:s,id:"avatar",type:"file",accept:"image/*"}),D.jsx(X4,{children:(t==null?void 0:t.displayName)??"Anonymous"}),D.jsx(J4,{children:r.map(a=>D.jsx(pR,{...a},a.id))})]})}const mR=se.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`,gR=se.h1`
  font-size: 42px;
`,yR=se.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,wi=se.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    background-color: #1d9bf0;
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
`,vR=se.span`
  font-weight: 600;
  color: tomato;
`,_R=se.span`
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }
`,eF=se.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,tF=se.img`
  height: 25px;
`;function wR(){const t=ao(),e=async()=>{try{const n=new Xn;await g2(vr,n),t("/")}catch(n){console.error(n)}};return D.jsxs(eF,{onClick:e,children:[D.jsx(tF,{src:"/github-logo.svg"}),"Continue with Github"]})}function nF(){const t=ao(),[e,n]=C.useState(!1),[r,i]=C.useState(""),[s,o]=C.useState(""),[a,l]=C.useState(""),u=h=>{const{target:{name:d,value:p}}=h;d==="email"?i(p):d==="password"&&o(p)},c=async h=>{if(h.preventDefault(),l(""),!(e||r===""||s===""))try{n(!0),await qN(vr,r,s),t("/")}catch(d){d instanceof hn&&l(d.message)}finally{n(!1)}};return D.jsxs(mR,{children:[D.jsx(gR,{children:"Log into 𝕏"}),D.jsxs(yR,{onSubmit:c,children:[D.jsx(wi,{onChange:u,name:"email",value:r,placeholder:"Email",type:"email",required:!0}),D.jsx(wi,{onChange:u,value:s,name:"password",placeholder:"Password",type:"password",required:!0}),D.jsx(wi,{type:"submit",value:e?"Loading...":"Log in"})]}),a!==""?D.jsx(vR,{children:a}):null,D.jsxs(_R,{children:["Don't have an account?"," ",D.jsx(tc,{to:"/create-account",children:"Create one →"})]}),D.jsx(wR,{})]})}function rF(){const t=ao(),[e,n]=C.useState(!1),[r,i]=C.useState(""),[s,o]=C.useState(""),[a,l]=C.useState(""),[u,c]=C.useState(""),h=p=>{const{target:{name:v,value:_}}=p;v==="name"?i(_):v==="email"?o(_):v==="password"&&l(_)},d=async p=>{if(p.preventDefault(),c(""),!(e||r===""||s===""||a===""))try{n(!0);const v=await WN(vr,s,a);await gT(v.user,{displayName:r}),t("/")}catch(v){v instanceof hn&&c(v.message)}finally{n(!1)}};return D.jsxs(mR,{children:[D.jsx(gR,{children:"Join 𝕏"}),D.jsxs(yR,{onSubmit:d,children:[D.jsx(wi,{onChange:h,name:"name",value:r,placeholder:"Name",type:"text",required:!0}),D.jsx(wi,{onChange:h,name:"email",value:s,placeholder:"Email",type:"email",required:!0}),D.jsx(wi,{onChange:h,value:a,name:"password",placeholder:"Password",type:"password",required:!0}),D.jsx(wi,{type:"submit",value:e?"Loading...":"Create Account"})]}),u!==""?D.jsx(vR,{children:u}):null,D.jsxs(_R,{children:["Already have an account? ",D.jsx(tc,{to:"/login",children:"Log in →"})]}),D.jsx(wR,{})]})}var ER=globalThis&&globalThis.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},TR=Um(F0||(F0=ER([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));O1(U0||(U0=ER(["",""],["",""])),TR);var F0,U0;const iF=se.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,sF=se.span`
  font-size: 24px;
`;function oF(){return D.jsx(iF,{children:D.jsx(sF,{children:"Loading..."})})}function aF({children:t}){return vr.currentUser===null?D.jsx(dP,{to:"/login"}):t}const lF=wP([{path:"/",element:D.jsx(aF,{children:D.jsx(D4,{})}),children:[{path:"",element:D.jsx(q4,{})},{path:"profile",element:D.jsx(Z4,{})}]},{path:"/login",element:D.jsx(nF,{})},{path:"/create-account",element:D.jsx(rF,{})}]),uF=O1`
  ${TR};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,cF=se.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;function hF(){const[t,e]=C.useState(!0),n=async()=>{await vr.authStateReady(),e(!1)};return C.useEffect(()=>{n()},[]),D.jsxs(cF,{children:[D.jsx(uF,{}),t?D.jsx(oF,{}):D.jsx(cP,{router:lF})]})}Gd.createRoot(document.getElementById("root")).render(D.jsx(_n.StrictMode,{children:D.jsx(hF,{})}));
