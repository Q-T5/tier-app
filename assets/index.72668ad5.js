(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ir(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Xo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jo=Ir(Xo);function xi(e){return!!e||e===""}function Pr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Z(r)?Qo(r):Pr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Z(e))return e;if(G(e))return e}}const Go=/;(?![^(]*\))/g,Zo=/:(.+)/;function Qo(e){const t={};return e.split(Go).forEach(n=>{if(n){const r=n.split(Zo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Nr(e){let t="";if(Z(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Nr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const He=e=>Z(e)?e:e==null?"":L(e)||G(e)&&(e.toString===Ai||!j(e.toString))?JSON.stringify(e,wi,2):String(e),wi=(e,t)=>t&&t.__v_isRef?wi(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:_i(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!L(t)&&!Ci(t)?String(t):t,W={},bt=[],_e=()=>{},es=()=>!1,ts=/^on[^a-z]/,Cn=e=>ts.test(e),Sr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Mr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ns=Object.prototype.hasOwnProperty,D=(e,t)=>ns.call(e,t),L=Array.isArray,yt=e=>Tn(e)==="[object Map]",_i=e=>Tn(e)==="[object Set]",j=e=>typeof e=="function",Z=e=>typeof e=="string",Lr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",ki=e=>G(e)&&j(e.then)&&j(e.catch),Ai=Object.prototype.toString,Tn=e=>Ai.call(e),rs=e=>Tn(e).slice(8,-1),Ci=e=>Tn(e)==="[object Object]",Fr=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=Ir(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},as=/-(\w)/g,Pe=On(e=>e.replace(as,(t,n)=>n?n.toUpperCase():"")),is=/\B([A-Z])/g,At=On(e=>e.replace(is,"-$1").toLowerCase()),En=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wn=On(e=>e?`on${En(e)}`:""),dn=(e,t)=>!Object.is(e,t),an=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},er=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let va;const os=()=>va||(va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Oe;class ss{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Oe&&(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ls(e,t=Oe){t&&t.active&&t.effects.push(e)}const Rr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ti=e=>(e.w&Ve)>0,Oi=e=>(e.n&Ve)>0,fs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},cs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ti(a)&&!Oi(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},tr=new WeakMap;let Mt=0,Ve=1;const nr=30;let ve;const it=Symbol(""),rr=Symbol("");class jr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ls(this,r)}run(){if(!this.active)return this.fn();let t=ve,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ve,ve=this,Ke=!0,Ve=1<<++Mt,Mt<=nr?fs(this):ba(this),this.fn()}finally{Mt<=nr&&cs(this),Ve=1<<--Mt,ve=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ve===this?this.deferStop=!0:this.active&&(ba(this),this.onStop&&this.onStop(),this.active=!1)}}function ba(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Ei=[];function Ct(){Ei.push(Ke),Ke=!1}function Tt(){const e=Ei.pop();Ke=e===void 0?!0:e}function de(e,t,n){if(Ke&&ve){let r=tr.get(e);r||tr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Rr()),Ii(a)}}function Ii(e,t){let n=!1;Mt<=nr?Oi(e)||(e.n|=Ve,n=!Ti(e)):n=!e.has(ve),n&&(e.add(ve),ve.deps.push(e))}function Le(e,t,n,r,a,i){const o=tr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?Fr(n)&&s.push(o.get("length")):(s.push(o.get(it)),yt(e)&&s.push(o.get(rr)));break;case"delete":L(e)||(s.push(o.get(it)),yt(e)&&s.push(o.get(rr)));break;case"set":yt(e)&&s.push(o.get(it));break}if(s.length===1)s[0]&&ar(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);ar(Rr(l))}}function ar(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&ya(r);for(const r of n)r.computed||ya(r)}function ya(e,t){(e!==ve||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const us=Ir("__proto__,__v_isRef,__isVue"),Pi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Lr)),ds=$r(),ms=$r(!1,!0),ps=$r(!0),xa=hs();function hs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=B(this)[t].apply(this,n);return Tt(),r}}),e}function $r(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ns:Fi:t?Li:Mi).get(r))return r;const o=L(r);if(!e&&o&&D(xa,a))return Reflect.get(xa,a,i);const s=Reflect.get(r,a,i);return(Lr(a)?Pi.has(a):us(a))||(e||de(r,"get",a),t)?s:re(s)?o&&Fr(a)?s:s.value:G(s)?e?Ri(s):Ur(s):s}}const gs=Ni(),vs=Ni(!0);function Ni(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&re(o)&&!re(a))return!1;if(!e&&!Bt(a)&&(ir(a)||(a=B(a),o=B(o)),!L(n)&&re(o)&&!re(a)))return o.value=a,!0;const s=L(n)&&Fr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?dn(a,o)&&Le(n,"set",r,a):Le(n,"add",r,a)),l}}function bs(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Le(e,"delete",t,void 0),r}function ys(e,t){const n=Reflect.has(e,t);return(!Lr(t)||!Pi.has(t))&&de(e,"has",t),n}function xs(e){return de(e,"iterate",L(e)?"length":it),Reflect.ownKeys(e)}const Si={get:ds,set:gs,deleteProperty:bs,has:ys,ownKeys:xs},ws={get:ps,set(e,t){return!0},deleteProperty(e,t){return!0}},_s=ae({},Si,{get:ms,set:vs}),zr=e=>e,In=e=>Reflect.getPrototypeOf(e);function Gt(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=In(a),s=r?zr:n?Yr:Hr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Zt(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Qt(e,t=!1){return e=e.__v_raw,!t&&de(B(e),"iterate",it),Reflect.get(e,"size",e)}function wa(e){e=B(e);const t=B(this);return In(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function _a(e,t){t=B(t);const n=B(this),{has:r,get:a}=In(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?dn(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function ka(e){const t=B(this),{has:n,get:r}=In(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Le(t,"delete",e,void 0),i}function Aa(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function en(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?zr:e?Yr:Hr;return!e&&de(s,"iterate",it),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function tn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?zr:t?Yr:Hr;return!t&&de(i,"iterate",l?rr:it),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function ks(){const e={get(i){return Gt(this,i)},get size(){return Qt(this)},has:Zt,add:wa,set:_a,delete:ka,clear:Aa,forEach:en(!1,!1)},t={get(i){return Gt(this,i,!1,!0)},get size(){return Qt(this)},has:Zt,add:wa,set:_a,delete:ka,clear:Aa,forEach:en(!1,!0)},n={get(i){return Gt(this,i,!0)},get size(){return Qt(this,!0)},has(i){return Zt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:en(!0,!1)},r={get(i){return Gt(this,i,!0,!0)},get size(){return Qt(this,!0)},has(i){return Zt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:en(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=tn(i,!1,!1),n[i]=tn(i,!0,!1),t[i]=tn(i,!1,!0),r[i]=tn(i,!0,!0)}),[e,n,t,r]}const[As,Cs,Ts,Os]=ks();function Dr(e,t){const n=t?e?Os:Ts:e?Cs:As;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Es={get:Dr(!1,!1)},Is={get:Dr(!1,!0)},Ps={get:Dr(!0,!1)},Mi=new WeakMap,Li=new WeakMap,Fi=new WeakMap,Ns=new WeakMap;function Ss(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ms(e){return e.__v_skip||!Object.isExtensible(e)?0:Ss(rs(e))}function Ur(e){return Bt(e)?e:Br(e,!1,Si,Es,Mi)}function Ls(e){return Br(e,!1,_s,Is,Li)}function Ri(e){return Br(e,!0,ws,Ps,Fi)}function Br(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ms(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function xt(e){return Bt(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function ir(e){return!!(e&&e.__v_isShallow)}function ji(e){return xt(e)||Bt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function $i(e){return mn(e,"__v_skip",!0),e}const Hr=e=>G(e)?Ur(e):e,Yr=e=>G(e)?Ri(e):e;function Fs(e){Ke&&ve&&(e=B(e),Ii(e.dep||(e.dep=Rr())))}function Rs(e,t){e=B(e),e.dep&&ar(e.dep)}function re(e){return!!(e&&e.__v_isRef===!0)}function js(e){return re(e)?e.value:e}const $s={get:(e,t,n)=>js(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return re(a)&&!re(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function zi(e){return xt(e)?e:new Proxy(e,$s)}class zs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jr(t,()=>{this._dirty||(this._dirty=!0,Rs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Fs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ds(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=_e):(r=e.get,a=e.set),new zs(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Pn(i,t,n)}return a}function ke(e,t,n,r){if(j(e)){const i=qe(e,t,n,r);return i&&ki(i)&&i.catch(o=>{Pn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ke(e[i],t,n,r));return a}function Pn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Us(e,n,a,r)}function Us(e,t,n,r=!0){console.error(e)}let pn=!1,or=!1;const ue=[];let Me=0;const Rt=[];let Lt=null,mt=0;const jt=[];let Ye=null,pt=0;const Di=Promise.resolve();let Wr=null,sr=null;function Bs(e){const t=Wr||Di;return e?t.then(this?e.bind(this):e):t}function Hs(e){let t=Me+1,n=ue.length;for(;t<n;){const r=t+n>>>1;Ht(ue[r])<e?t=r+1:n=r}return t}function Ui(e){(!ue.length||!ue.includes(e,pn&&e.allowRecurse?Me+1:Me))&&e!==sr&&(e.id==null?ue.push(e):ue.splice(Hs(e.id),0,e),Bi())}function Bi(){!pn&&!or&&(or=!0,Wr=Di.then(Wi))}function Ys(e){const t=ue.indexOf(e);t>Me&&ue.splice(t,1)}function Hi(e,t,n,r){L(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Bi()}function Ws(e){Hi(e,Lt,Rt,mt)}function Ks(e){Hi(e,Ye,jt,pt)}function Nn(e,t=null){if(Rt.length){for(sr=t,Lt=[...new Set(Rt)],Rt.length=0,mt=0;mt<Lt.length;mt++)Lt[mt]();Lt=null,mt=0,sr=null,Nn(e,t)}}function Yi(e){if(Nn(),jt.length){const t=[...new Set(jt)];if(jt.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>Ht(n)-Ht(r)),pt=0;pt<Ye.length;pt++)Ye[pt]();Ye=null,pt=0}}const Ht=e=>e.id==null?1/0:e.id;function Wi(e){or=!1,pn=!0,Nn(e),ue.sort((n,r)=>Ht(n)-Ht(r));const t=_e;try{for(Me=0;Me<ue.length;Me++){const n=ue[Me];n&&n.active!==!1&&qe(n,null,14)}}finally{Me=0,ue.length=0,Yi(),pn=!1,Wr=null,(ue.length||Rt.length||jt.length)&&Wi(e)}}function qs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||W;b&&(a=n.map(C=>C.trim())),m&&(a=n.map(er))}let s,l=r[s=Wn(t)]||r[s=Wn(Pe(t))];!l&&i&&(l=r[s=Wn(At(t))]),l&&ke(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ke(u,e,6,a)}}function Ki(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=u=>{const d=Ki(u,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ae(o,i),r.set(e,o),o)}function Sn(e,t){return!e||!Cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,At(t))||D(e,t))}let ye=null,qi=null;function hn(e){const t=ye;return ye=e,qi=e&&e.type.__scopeId||null,t}function Vs(e,t=ye,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Fa(-1);const i=hn(t),o=e(...a);return hn(i),r._d&&Fa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Kn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:C,ctx:F,inheritAttrs:$}=e;let N,y;const T=hn(e);try{if(n.shapeFlag&4){const z=a||r;N=Ee(d.call(z,z,m,i,C,b,F)),y=l}else{const z=t;N=Ee(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),y=t.props?l:Xs(l)}}catch(z){$t.length=0,Pn(z,e,1),N=ee(Yt)}let S=N;if(y&&$!==!1){const z=Object.keys(y),{shapeFlag:K}=S;z.length&&K&7&&(o&&z.some(Sr)&&(y=Js(y,o)),S=_t(S,y))}return n.dirs&&(S=_t(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),N=S,hn(T),N}const Xs=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cn(n))&&((t||(t={}))[n]=e[n]);return t},Js=(e,t)=>{const n={};for(const r in e)(!Sr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Gs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ca(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Sn(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ca(r,o,u):!0:!!o;return!1}function Ca(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Sn(n,i))return!0}return!1}function Zs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Qs=e=>e.__isSuspense;function el(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Ks(e)}function tl(e,t){if(Q){let n=Q.provides;const r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function qn(e,t,n=!1){const r=Q||ye;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const Ta={};function on(e,t,n){return Vi(e,t,n)}function Vi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=Q;let l,u=!1,d=!1;if(re(e)?(l=()=>e.value,u=ir(e)):xt(e)?(l=()=>e,r=!0):L(e)?(d=!0,u=e.some(y=>xt(y)||ir(y)),l=()=>e.map(y=>{if(re(y))return y.value;if(xt(y))return rt(y);if(j(y))return qe(y,s,2)})):j(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),ke(e,s,3,[b])}:l=_e,t&&r){const y=l;l=()=>rt(y())}let m,b=y=>{m=N.onStop=()=>{qe(y,s,4)}};if(Kt)return b=_e,t?n&&ke(t,s,3,[l(),d?[]:void 0,b]):l(),_e;let C=d?[]:Ta;const F=()=>{if(!!N.active)if(t){const y=N.run();(r||u||(d?y.some((T,S)=>dn(T,C[S])):dn(y,C)))&&(m&&m(),ke(t,s,3,[y,C===Ta?void 0:C,b]),C=y)}else N.run()};F.allowRecurse=!!t;let $;a==="sync"?$=F:a==="post"?$=()=>le(F,s&&s.suspense):$=()=>Ws(F);const N=new jr(l,$);return t?n?F():C=N.run():a==="post"?le(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&Mr(s.scope.effects,N)}}function nl(e,t,n){const r=this.proxy,a=Z(e)?e.includes(".")?Xi(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=Q;kt(this);const s=Vi(a,i.bind(r),n);return o?kt(o):ot(),s}function Xi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function rt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),re(e))rt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)rt(e[n],t);else if(_i(e)||yt(e))e.forEach(n=>{rt(n,t)});else if(Ci(e))for(const n in e)rt(e[n],t);return e}function Kr(e){return j(e)?{setup:e,name:e.name}:e}const sn=e=>!!e.type.__asyncLoader,Ji=e=>e.type.__isKeepAlive;function rl(e,t){Gi(e,"a",t)}function al(e,t){Gi(e,"da",t)}function Gi(e,t,n=Q){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Mn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ji(a.parent.vnode)&&il(r,t,n,a),a=a.parent}}function il(e,t,n,r){const a=Mn(t,e,r,!0);Zi(()=>{Mr(r[t],a)},n)}function Mn(e,t,n=Q,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),kt(n);const s=ke(t,n,e,o);return ot(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const $e=e=>(t,n=Q)=>(!Kt||e==="sp")&&Mn(e,t,n),ol=$e("bm"),sl=$e("m"),ll=$e("bu"),fl=$e("u"),cl=$e("bum"),Zi=$e("um"),ul=$e("sp"),dl=$e("rtg"),ml=$e("rtc");function pl(e,t=Q){Mn("ec",e,t)}function hl(e,t){const n=ye;if(n===null)return e;const r=Fn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,u=W]=t[i];j(o)&&(o={mounted:o,updated:o}),o.deep&&rt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:u})}return e}function Ge(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ct(),ke(l,n,8,[e.el,s,e,t]),Tt())}}const Qi="components";function gn(e,t){return vl(Qi,e,!0,t)||e}const gl=Symbol();function vl(e,t,n=!0,r=!1){const a=ye||Q;if(a){const i=a.type;if(e===Qi){const s=ql(i,!1);if(s&&(s===t||s===Pe(t)||s===En(Pe(t))))return i}const o=Oa(a[e]||i[e],t)||Oa(a.appContext[e],t);return!o&&r?i:o}}function Oa(e,t){return e&&(e[t]||e[Pe(t)]||e[En(Pe(t))])}function Ea(e,t,n,r){let a;const i=n&&n[r];if(L(e)||Z(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const lr=e=>e?uo(e)?Fn(e)||e.proxy:lr(e.parent):null,vn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>lr(e.parent),$root:e=>lr(e.root),$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>Ui(e.update)),$nextTick:e=>e.n||(e.n=Bs.bind(e.proxy)),$watch:e=>nl.bind(e)}),bl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const C=o[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&D(r,t))return o[t]=1,r[t];if(a!==W&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==W&&D(n,t))return o[t]=4,n[t];fr&&(o[t]=0)}}const d=vn[t];let m,b;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&D(a,t)?(a[t]=n,!0):r!==W&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&D(e,o)||t!==W&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(vn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let fr=!0;function yl(e){const t=to(e),n=e.proxy,r=e.ctx;fr=!1,t.beforeCreate&&Ia(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:C,updated:F,activated:$,deactivated:N,beforeDestroy:y,beforeUnmount:T,destroyed:S,unmounted:z,render:K,renderTracked:te,renderTriggered:fe,errorCaptured:Ae,serverPrefetch:ie,expose:Et,inheritAttrs:ft,components:It,directives:Xt,filters:ua}=t;if(u&&xl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const q=o[J];j(q)&&(r[J]=q.bind(n))}if(a){const J=a.call(n,n);G(J)&&(e.data=Ur(J))}if(fr=!0,i)for(const J in i){const q=i[J],Ne=j(q)?q.bind(n,n):j(q.get)?q.get.bind(n,n):_e,Bn=!j(q)&&j(q.set)?q.set.bind(n):_e,Pt=pe({get:Ne,set:Bn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:ct=>Pt.value=ct})}if(s)for(const J in s)eo(s[J],r,n,J);if(l){const J=j(l)?l.call(n):l;Reflect.ownKeys(J).forEach(q=>{tl(q,J[q])})}d&&Ia(d,e,"c");function oe(J,q){L(q)?q.forEach(Ne=>J(Ne.bind(n))):q&&J(q.bind(n))}if(oe(ol,m),oe(sl,b),oe(ll,C),oe(fl,F),oe(rl,$),oe(al,N),oe(pl,Ae),oe(ml,te),oe(dl,fe),oe(cl,T),oe(Zi,z),oe(ul,ie),L(Et))if(Et.length){const J=e.exposed||(e.exposed={});Et.forEach(q=>{Object.defineProperty(J,q,{get:()=>n[q],set:Ne=>n[q]=Ne})})}else e.exposed||(e.exposed={});K&&e.render===_e&&(e.render=K),ft!=null&&(e.inheritAttrs=ft),It&&(e.components=It),Xt&&(e.directives=Xt)}function xl(e,t,n=_e,r=!1){L(e)&&(e=cr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=qn(i.from||a,i.default,!0):o=qn(i.from||a):o=qn(i),re(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ia(e,t,n){ke(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function eo(e,t,n,r){const a=r.includes(".")?Xi(n,r):()=>n[r];if(Z(e)){const i=t[e];j(i)&&on(a,i)}else if(j(e))on(a,e.bind(n));else if(G(e))if(L(e))e.forEach(i=>eo(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&on(a,i,e)}}function to(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>bn(l,u,o,!0)),bn(l,t,o)),i.set(t,l),l}function bn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&bn(e,i,n,!0),a&&a.forEach(o=>bn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=wl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const wl={data:Pa,props:Qe,emits:Qe,methods:Qe,computed:Qe,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:Qe,directives:Qe,watch:kl,provide:Pa,inject:_l};function Pa(e,t){return t?e?function(){return ae(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function _l(e,t){return Qe(cr(e),cr(t))}function cr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Qe(e,t){return e?ae(ae(Object.create(null),e),t):t}function kl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function Al(e,t,n,r=!1){const a={},i={};mn(i,Ln,1),e.propsDefaults=Object.create(null),no(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ls(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Cl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Sn(e.emitsOptions,b))continue;const C=t[b];if(l)if(D(i,b))C!==i[b]&&(i[b]=C,u=!0);else{const F=Pe(b);a[F]=ur(l,s,F,C,e,!1)}else C!==i[b]&&(i[b]=C,u=!0)}}}else{no(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=At(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=ur(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Le(e,"set","$attrs")}function no(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(rn(l))continue;const u=t[l];let d;a&&D(a,d=Pe(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Sn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=ur(a,l,m,u[m],e,!D(u,m))}}return o}function ur(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(kt(a),r=u[n]=l.call(null,t),ot())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===At(n))&&(r=!0))}return r}function ro(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[b,C]=ro(m,t,!0);ae(o,b),C&&s.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,bt),bt;if(L(i))for(let d=0;d<i.length;d++){const m=Pe(i[d]);Na(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Pe(d);if(Na(m)){const b=i[d],C=o[m]=L(b)||j(b)?{type:b}:b;if(C){const F=La(Boolean,C.type),$=La(String,C.type);C[0]=F>-1,C[1]=$<0||F<$,(F>-1||D(C,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Na(e){return e[0]!=="$"}function Sa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ma(e,t){return Sa(e)===Sa(t)}function La(e,t){return L(t)?t.findIndex(n=>Ma(n,e)):j(t)&&Ma(t,e)?0:-1}const ao=e=>e[0]==="_"||e==="$stable",qr=e=>L(e)?e.map(Ee):[Ee(e)],Tl=(e,t,n)=>{if(t._n)return t;const r=Vs((...a)=>qr(t(...a)),n);return r._c=!1,r},io=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ao(a))continue;const i=e[a];if(j(i))t[a]=Tl(a,i,r);else if(i!=null){const o=qr(i);t[a]=()=>o}}},oo=(e,t)=>{const n=qr(t);e.slots.default=()=>n},Ol=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),mn(t,"_",n)):io(t,e.slots={})}else e.slots={},t&&oo(e,t);mn(e.slots,Ln,1)},El=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,io(t,a)),o=t}else t&&(oo(e,t),o={default:1});if(i)for(const s in a)!ao(s)&&!(s in o)&&delete a[s]};function so(){return{app:null,config:{isNativeTag:es,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Il=0;function Pl(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=so(),o=new Set;let s=!1;const l=i.app={_uid:Il++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Xl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...d)):j(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=ee(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Fn(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function dr(e,t,n,r,a=!1){if(L(e)){e.forEach((b,C)=>dr(b,t&&(L(t)?t[C]:t),n,r,a));return}if(sn(r)&&!a)return;const i=r.shapeFlag&4?Fn(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(Z(u)?(d[u]=null,D(m,u)&&(m[u]=null)):re(u)&&(u.value=null)),j(l))qe(l,s,12,[o,d]);else{const b=Z(l),C=re(l);if(b||C){const F=()=>{if(e.f){const $=b?d[l]:l.value;a?L($)&&Mr($,i):L($)?$.includes(i)||$.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):C&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,le(F,n)):F()}}}const le=el;function Nl(e){return Sl(e)}function Sl(e,t){const n=os();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:C=_e,cloneNode:F,insertStaticContent:$}=e,N=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!St(f,c)&&(g=Jt(f),De(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:E,shapeFlag:O}=c;switch(v){case Vr:y(f,c,p,g);break;case Yt:T(f,c,p,g);break;case Vn:f==null&&S(c,p,g,k);break;case ge:Xt(f,c,p,g,h,w,k,x,_);break;default:O&1?te(f,c,p,g,h,w,k,x,_):O&6?ua(f,c,p,g,h,w,k,x,_):(O&64||O&128)&&v.process(f,c,p,g,h,w,k,x,_,ut)}E!=null&&h&&dr(E,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},T=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},S=(f,c,p,g)=>{[f.el,f.anchor]=$(f.children,c,p,g,f.el,f.anchor)},z=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},K=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},te=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?fe(c,p,g,h,w,k,x,_):Et(f,c,h,w,k,x,_)},fe=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:E,props:O,shapeFlag:I,transition:M,patchFlag:U,dirs:H}=f;if(f.el&&F!==void 0&&U===-1)_=f.el=F(f.el);else{if(_=f.el=o(f.type,w,O&&O.is,O),I&8?d(_,f.children):I&16&&ie(f.children,_,null,g,h,w&&E!=="foreignObject",k,x),H&&Ge(f,null,g,"created"),O){for(const V in O)V!=="value"&&!rn(V)&&i(_,V,null,O[V],w,f.children,g,h,Se);"value"in O&&i(_,"value",null,O.value),(v=O.onVnodeBeforeMount)&&Te(v,g,f)}Ae(_,f,f.scopeId,k,g)}H&&Ge(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;Y&&M.beforeEnter(_),r(_,c,p),((v=O&&O.onVnodeMounted)||Y||H)&&le(()=>{v&&Te(v,g,f),Y&&M.enter(_),H&&Ge(f,null,g,"mounted")},h)},Ae=(f,c,p,g,h)=>{if(p&&C(f,p),g)for(let w=0;w<g.length;w++)C(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;Ae(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},ie=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const E=f[v]=x?We(f[v]):Ee(f[v]);N(null,E,c,p,g,h,w,k,x)}},Et=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:E}=c;_|=f.patchFlag&16;const O=f.props||W,I=c.props||W;let M;p&&Ze(p,!1),(M=I.onVnodeBeforeUpdate)&&Te(M,p,c,f),E&&Ge(c,f,p,"beforeUpdate"),p&&Ze(p,!0);const U=h&&c.type!=="foreignObject";if(v?ft(f.dynamicChildren,v,x,p,g,U,w):k||Ne(f,c,x,null,p,g,U,w,!1),_>0){if(_&16)It(x,c,O,I,p,g,h);else if(_&2&&O.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",O.style,I.style,h),_&8){const H=c.dynamicProps;for(let Y=0;Y<H.length;Y++){const V=H[Y],he=O[V],dt=I[V];(dt!==he||V==="value")&&i(x,V,he,dt,h,f.children,p,g,Se)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&It(x,c,O,I,p,g,h);((M=I.onVnodeUpdated)||E)&&le(()=>{M&&Te(M,p,c,f),E&&Ge(c,f,p,"updated")},g)},ft=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],E=_.el&&(_.type===ge||!St(_,v)||_.shapeFlag&70)?m(_.el):p;N(_,v,E,null,g,h,w,k,!0)}},It=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(rn(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,Se)}if(p!==W)for(const x in p)!rn(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Se);"value"in g&&i(f,"value",p.value,g.value)}},Xt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),E=c.anchor=f?f.anchor:s("");let{patchFlag:O,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(E,p,g),ie(c.children,p,E,h,w,k,x,_)):O>0&&O&64&&I&&f.dynamicChildren?(ft(f.dynamicChildren,I,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&lo(f,c,!0)):Ne(f,c,p,E,h,w,k,x,_)},ua=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):Un(c,p,g,h,w,k,_):oe(f,c,_)},Un=(f,c,p,g,h,w,k)=>{const x=f.component=Bl(f,g,h);if(Ji(f)&&(x.ctx.renderer=ut),Hl(x),x.asyncDep){if(h&&h.registerDep(x,J),!f.el){const _=x.subTree=ee(Yt);T(null,_,c,p)}return}J(x,f,c,p,h,w,k)},oe=(f,c,p)=>{const g=c.component=f.component;if(Gs(f,c,p))if(g.asyncDep&&!g.asyncResolved){q(g,c,p);return}else g.next=c,Ys(g.update),g.update();else c.el=f.el,g.vnode=c},J=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:E,bu:O,u:I,parent:M,vnode:U}=f,H=E,Y;Ze(f,!1),E?(E.el=U.el,q(f,E,k)):E=U,O&&an(O),(Y=E.props&&E.props.onVnodeBeforeUpdate)&&Te(Y,M,E,U),Ze(f,!0);const V=Kn(f),he=f.subTree;f.subTree=V,N(he,V,m(he.el),Jt(he),f,h,w),E.el=V.el,H===null&&Zs(f,V.el),I&&le(I,h),(Y=E.props&&E.props.onVnodeUpdated)&&le(()=>Te(Y,M,E,U),h)}else{let E;const{el:O,props:I}=c,{bm:M,m:U,parent:H}=f,Y=sn(c);if(Ze(f,!1),M&&an(M),!Y&&(E=I&&I.onVnodeBeforeMount)&&Te(E,H,c),Ze(f,!0),O&&Yn){const V=()=>{f.subTree=Kn(f),Yn(O,f.subTree,f,h,null)};Y?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=Kn(f);N(null,V,p,g,f,h,w),c.el=V.el}if(U&&le(U,h),!Y&&(E=I&&I.onVnodeMounted)){const V=c;le(()=>Te(E,H,V),h)}(c.shapeFlag&256||H&&sn(H.vnode)&&H.vnode.shapeFlag&256)&&f.a&&le(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new jr(x,()=>Ui(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Ze(f,!0),v()},q=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Cl(f,c.props,g,p),El(f,c.children,p),Ct(),Nn(void 0,f.update),Tt()},Ne=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,E=f?f.shapeFlag:0,O=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Pt(v,O,p,g,h,w,k,x,_);return}else if(I&256){Bn(v,O,p,g,h,w,k,x,_);return}}M&8?(E&16&&Se(v,h,w),O!==v&&d(p,O)):E&16?M&16?Pt(v,O,p,g,h,w,k,x,_):Se(v,h,w,!0):(E&8&&d(p,""),M&16&&ie(O,p,g,h,w,k,x,_))},Bn=(f,c,p,g,h,w,k,x,_)=>{f=f||bt,c=c||bt;const v=f.length,E=c.length,O=Math.min(v,E);let I;for(I=0;I<O;I++){const M=c[I]=_?We(c[I]):Ee(c[I]);N(f[I],M,p,null,h,w,k,x,_)}v>E?Se(f,h,w,!0,!1,O):ie(c,p,g,h,w,k,x,_,O)},Pt=(f,c,p,g,h,w,k,x,_)=>{let v=0;const E=c.length;let O=f.length-1,I=E-1;for(;v<=O&&v<=I;){const M=f[v],U=c[v]=_?We(c[v]):Ee(c[v]);if(St(M,U))N(M,U,p,null,h,w,k,x,_);else break;v++}for(;v<=O&&v<=I;){const M=f[O],U=c[I]=_?We(c[I]):Ee(c[I]);if(St(M,U))N(M,U,p,null,h,w,k,x,_);else break;O--,I--}if(v>O){if(v<=I){const M=I+1,U=M<E?c[M].el:g;for(;v<=I;)N(null,c[v]=_?We(c[v]):Ee(c[v]),p,U,h,w,k,x,_),v++}}else if(v>I)for(;v<=O;)De(f[v],h,w,!0),v++;else{const M=v,U=v,H=new Map;for(v=U;v<=I;v++){const ce=c[v]=_?We(c[v]):Ee(c[v]);ce.key!=null&&H.set(ce.key,v)}let Y,V=0;const he=I-U+1;let dt=!1,pa=0;const Nt=new Array(he);for(v=0;v<he;v++)Nt[v]=0;for(v=M;v<=O;v++){const ce=f[v];if(V>=he){De(ce,h,w,!0);continue}let Ce;if(ce.key!=null)Ce=H.get(ce.key);else for(Y=U;Y<=I;Y++)if(Nt[Y-U]===0&&St(ce,c[Y])){Ce=Y;break}Ce===void 0?De(ce,h,w,!0):(Nt[Ce-U]=v+1,Ce>=pa?pa=Ce:dt=!0,N(ce,c[Ce],p,null,h,w,k,x,_),V++)}const ha=dt?Ml(Nt):bt;for(Y=ha.length-1,v=he-1;v>=0;v--){const ce=U+v,Ce=c[ce],ga=ce+1<E?c[ce+1].el:g;Nt[v]===0?N(null,Ce,p,ga,h,w,k,x,_):dt&&(Y<0||v!==ha[Y]?ct(Ce,p,ga,2):Y--)}}},ct=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){ct(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,ut);return}if(k===ge){r(w,c,p);for(let O=0;O<_.length;O++)ct(_[O],c,p,g);r(f.anchor,c,p);return}if(k===Vn){z(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),le(()=>x.enter(w),h);else{const{leave:O,delayLeave:I,afterLeave:M}=x,U=()=>r(w,c,p),H=()=>{O(w,()=>{U(),M&&M()})};I?I(w,U,H):H()}else r(w,c,p)},De=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:E,patchFlag:O,dirs:I}=f;if(x!=null&&dr(x,null,p,f,!0),E&256){c.ctx.deactivate(f);return}const M=E&1&&I,U=!sn(f);let H;if(U&&(H=k&&k.onVnodeBeforeUnmount)&&Te(H,c,f),E&6)Vo(f.component,p,g);else{if(E&128){f.suspense.unmount(p,g);return}M&&Ge(f,null,c,"beforeUnmount"),E&64?f.type.remove(f,c,p,h,ut,g):v&&(w!==ge||O>0&&O&64)?Se(v,c,p,!1,!0):(w===ge&&O&384||!h&&E&16)&&Se(_,c,p),g&&da(f)}(U&&(H=k&&k.onVnodeUnmounted)||M)&&le(()=>{H&&Te(H,c,f),M&&Ge(f,null,c,"unmounted")},p)},da=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===ge){qo(p,g);return}if(c===Vn){K(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},qo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Vo=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&an(g),h.stop(),w&&(w.active=!1,De(k,f,c,p)),x&&le(x,c),le(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)De(f[k],c,p,g,h)},Jt=f=>f.shapeFlag&6?Jt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ma=(f,c,p)=>{f==null?c._vnode&&De(c._vnode,null,null,!0):N(c._vnode||null,f,c,null,null,null,p),Yi(),c._vnode=f},ut={p:N,um:De,m:ct,r:da,mt:Un,mc:ie,pc:Ne,pbc:ft,n:Jt,o:e};let Hn,Yn;return t&&([Hn,Yn]=t(ut)),{render:ma,hydrate:Hn,createApp:Pl(ma,Hn)}}function Ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function lo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||lo(o,s))}}function Ml(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ll=e=>e.__isTeleport,ge=Symbol(void 0),Vr=Symbol(void 0),Yt=Symbol(void 0),Vn=Symbol(void 0),$t=[];let xe=null;function et(e=!1){$t.push(xe=e?null:[])}function Fl(){$t.pop(),xe=$t[$t.length-1]||null}let Wt=1;function Fa(e){Wt+=e}function Rl(e){return e.dynamicChildren=Wt>0?xe||bt:null,Fl(),Wt>0&&xe&&xe.push(e),e}function tt(e,t,n,r,a,i){return Rl(R(e,t,n,r,a,i,!0))}function mr(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const Ln="__vInternal",fo=({key:e})=>e!=null?e:null,ln=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||re(e)||j(e)?{i:ye,r:e,k:t,f:!!n}:e:null;function R(e,t=null,n=null,r=0,a=null,i=e===ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fo(t),ref:t&&ln(t),scopeId:qi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Xr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Z(n)?8:16),Wt>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const ee=jl;function jl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===gl)&&(e=Yt),mr(e)){const s=_t(e,t,!0);return n&&Xr(s,n),Wt>0&&!i&&xe&&(s.shapeFlag&6?xe[xe.indexOf(e)]=s:xe.push(s)),s.patchFlag|=-2,s}if(Vl(e)&&(e=e.__vccOpts),t){t=$l(t);let{class:s,style:l}=t;s&&!Z(s)&&(t.class=Nr(s)),G(l)&&(ji(l)&&!L(l)&&(l=ae({},l)),t.style=Pr(l))}const o=Z(e)?1:Qs(e)?128:Ll(e)?64:G(e)?4:j(e)?2:0;return R(e,t,n,r,a,o,i,!0)}function $l(e){return e?ji(e)||Ln in e?ae({},e):e:null}function _t(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?zl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&fo(s),ref:t&&t.ref?n&&a?L(a)?a.concat(ln(t)):[a,ln(t)]:ln(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor}}function co(e=" ",t=0){return ee(Vr,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?ee(Yt):L(e)?ee(ge,null,e.slice()):typeof e=="object"?We(e):ee(Vr,null,String(e))}function We(e){return e.el===null||e.memo?e:_t(e)}function Xr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Xr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Ln in t)?t._ctx=ye:a===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[co(t)]):n=8);e.children=t,e.shapeFlag|=n}function zl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Nr([t.class,r.class]));else if(a==="style")t.style=Pr([t.style,r.style]);else if(Cn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Te(e,t,n,r=null){ke(e,t,7,[n,r])}const Dl=so();let Ul=0;function Bl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Dl,i={uid:Ul++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ss(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ro(r,a),emitsOptions:Ki(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=qs.bind(null,i),e.ce&&e.ce(i),i}let Q=null;const kt=e=>{Q=e,e.scope.on()},ot=()=>{Q&&Q.scope.off(),Q=null};function uo(e){return e.vnode.shapeFlag&4}let Kt=!1;function Hl(e,t=!1){Kt=t;const{props:n,children:r}=e.vnode,a=uo(e);Al(e,n,a,t),Ol(e,r);const i=a?Yl(e,t):void 0;return Kt=!1,i}function Yl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,bl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Kl(e):null;kt(e),Ct();const i=qe(r,e,0,[e.props,a]);if(Tt(),ot(),ki(i)){if(i.then(ot,ot),t)return i.then(o=>{Ra(e,o,t)}).catch(o=>{Pn(o,e,0)});e.asyncDep=i}else Ra(e,i,t)}else mo(e,t)}function Ra(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=zi(t)),mo(e,n)}let ja;function mo(e,t,n){const r=e.type;if(!e.render){if(!t&&ja&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=ja(a,u)}}e.render=r.render||_e}kt(e),Ct(),yl(e),Tt(),ot()}function Wl(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function Kl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Wl(e))},slots:e.slots,emit:e.emit,expose:t}}function Fn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zi($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)}}))}function ql(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Vl(e){return j(e)&&"__vccOpts"in e}const pe=(e,t)=>Ds(e,t,Kt);function po(e,t,n){const r=arguments.length;return r===2?G(t)&&!L(t)?mr(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mr(n)&&(n=[n]),ee(e,t,n))}const Xl="3.2.37",Jl="http://www.w3.org/2000/svg",nt=typeof document<"u"?document:null,$a=nt&&nt.createElement("template"),Gl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?nt.createElementNS(Jl,e):nt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{$a.innerHTML=r?`<svg>${e}</svg>`:e;const s=$a.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Zl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ql(e,t,n){const r=e.style,a=Z(n);if(n&&!a){for(const i in n)pr(r,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&pr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const za=/\s*!important$/;function pr(e,t,n){if(L(n))n.forEach(r=>pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ef(e,t);za.test(n)?e.setProperty(At(r),n.replace(za,""),"important"):e[r]=n}}const Da=["Webkit","Moz","ms"],Xn={};function ef(e,t){const n=Xn[t];if(n)return n;let r=Pe(t);if(r!=="filter"&&r in e)return Xn[t]=r;r=En(r);for(let a=0;a<Da.length;a++){const i=Da[a]+r;if(i in e)return Xn[t]=i}return t}const Ua="http://www.w3.org/1999/xlink";function tf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ua,t.slice(6,t.length)):e.setAttributeNS(Ua,t,n);else{const i=Jo(t);n==null||i&&!xi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function nf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=xi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[ho,rf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let hr=0;const af=Promise.resolve(),of=()=>{hr=0},sf=()=>hr||(af.then(of),hr=ho());function ht(e,t,n,r){e.addEventListener(t,n,r)}function lf(e,t,n,r){e.removeEventListener(t,n,r)}function ff(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=cf(t);if(r){const u=i[t]=uf(r,a);ht(e,s,u,l)}else o&&(lf(e,s,o,l),i[t]=void 0)}}const Ba=/(?:Once|Passive|Capture)$/;function cf(e){let t;if(Ba.test(e)){t={};let n;for(;n=e.match(Ba);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[At(e.slice(2)),t]}function uf(e,t){const n=r=>{const a=r.timeStamp||ho();(rf||a>=n.attached-1)&&ke(df(r,n.value),t,5,[r])};return n.value=e,n.attached=sf(),n}function df(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ha=/^on[a-z]/,mf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Zl(e,r,a):t==="style"?Ql(e,n,r):Cn(t)?Sr(t)||ff(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):pf(e,t,r,a))?nf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),tf(e,t,r,a))};function pf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ha.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ha.test(t)&&Z(n)?!1:t in e}const Ya=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>an(t,n):t};function hf(e){e.target.composing=!0}function Wa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const gf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ya(a);const i=r||a.props&&a.props.type==="number";ht(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=er(s)),e._assign(s)}),n&&ht(e,"change",()=>{e.value=e.value.trim()}),t||(ht(e,"compositionstart",hf),ht(e,"compositionend",Wa),ht(e,"change",Wa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ya(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&er(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},vf=ae({patchProp:mf},Gl);let Ka;function bf(){return Ka||(Ka=Nl(vf))}const yf=(...e)=>{const t=bf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=xf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function xf(e){return Z(e)?document.querySelector(e):e}const wf="/assets/dog-png.c858a2bf.png",Jr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},qa="Click To Edit Title",_f={name:"NavbarComp",emits:["showSettings"],data(){return{temporaryTitleText:qa,userTitleText:qa}},methods:{changeAppTheme:function(){const e=document.getElementById("theme-switcher"),t=e.getAttribute("data-theme");t==="dark"?e.setAttribute("data-theme","garden"):t==="garden"&&e.setAttribute("data-theme","dark")},changeTitle:function(e){const t=e.target.innerText;this.userTitleText=t}}},kf={class:"shadow-lg h-12 p-2 flex justify-between items-center"},Af={class:"pl-5"},Cf={class:"daisyui-tooltip daisyui-tooltip-bottom","data-tip":"theme"},Tf=co(" / "),Of={class:"flex items-center space-x-2"},Ef={class:"daisyui-tooltip daisyui-tooltip-bottom","data-tip":"click to change title"},If=R("div",{class:"flex items-center space-x-2"},[R("img",{src:wf,alt:"dog-logo",class:"w-10"}),R("h2",{class:"text-xl"},"Vue Tier App")],-1);function Pf(e,t,n,r,a,i){const o=gn("font-awesome-icon");return et(),tt("nav",kf,[R("div",Af,[R("button",{class:"daisyui-btn daisyui-btn-sm lowercase no-animation",onClick:t[0]||(t[0]=(...s)=>e.changeAppTheme&&e.changeAppTheme(...s))},[R("div",Cf,[ee(o,{icon:"fa-sun",class:"text-yellow-500"}),Tf,ee(o,{icon:"fa-moon"})])])]),R("div",Of,[R("div",Ef,[R("h1",{class:"text-3xl outline-none",contenteditable:"true",onInput:t[1]||(t[1]=s=>e.changeTitle(s))},He(a.temporaryTitleText),33)])]),If])}const Nf=Jr(_f,[["render",Pf]]);class Sf{constructor(t,n){this.tier=t,this.name=n}}const Mf={name:"MainComp",data(){return{defaultTierTitles:["Tier A","Tier B","Tier C","Tier D","Tier E"],itemsToTier:[],itemName:null}},methods:{titleClicked:function(e){this.defaultTierTitles[e]},changeTierTitle:function(e,t){const n=e.target.innerText;this.defaultTierTitles[t]=n},createNewItem:function(){this.itemsToTier.push(new Sf("X",this.itemName)),console.log(this.itemsToTier[this.itemsToTier.length-1]),this.itemName=null}},computed:{tierAItems(){return this.itemsToTier.filter(e=>{e.tier})},tierBItems(){return this.itemsToTier.filter(e=>{e.tier})},tierCItems(){return this.itemsToTier.filter(e=>{e.tier})},tierDItems(){return this.itemsToTier.filter(e=>{e.tier})},tierEItems(){return this.itemsToTier.filter(e=>{e.tier})}},watch:{itemsToTier(){this.itemsToTier()}}},Lf={class:"h-full"},Ff={class:"space-y-1"},Rf={class:"flex shadow-sm shadow-primary"},jf={class:"tier-titles"},$f={class:"bg-primary/75 h-fit text-xl p-2 rounded-md m-1"},zf={class:"flex shadow-sm shadow-primary"},Df={class:"tier-titles"},Uf=R("div",{class:"w-[80%] h-20"},null,-1),Bf={class:"flex shadow-sm shadow-primary"},Hf={class:"tier-titles"},Yf=R("div",{class:"w-[80%] h-20"},null,-1),Wf={class:"flex shadow-sm shadow-primary"},Kf={class:"tier-titles"},qf=R("div",{class:"w-[80%] h-20"},null,-1),Vf={class:"flex shadow-sm shadow-primary"},Xf={class:"tier-titles"},Jf=R("div",{class:"w-[80%] h-20"},null,-1),Gf={class:"flex w-full bg-red-300 mt-5 h-fit rounded"},Zf=R("div",{class:"w-[20%] min-w-[20%] h-20 text-3xl flex flex-col justify-center pl-2 border-r-2"}," Items ",-1),Qf={class:"bg-primary/75 text-xl p-2 rounded-md m-1"},ec={class:"w-full flex justify-center"},tc={class:"flex flex-col space-y-2 w-[28rem] relative items-center"},nc=R("h1",{class:"text-2xl"},"Manage Items",-1),rc=R("span",null,"Add Item",-1);function ac(e,t,n,r,a,i){const o=gn("font-awesome-icon");return et(),tt("div",Lf,[R("div",Ff,[R("div",Rf,[R("div",jf,[R("h1",{contenteditable:"true",class:"outline-none",onClick:t[0]||(t[0]=s=>e.titleClicked(0))},He(a.defaultTierTitles[0]),1)]),(et(!0),tt(ge,null,Ea(e.tierAItems,s=>(et(),tt("div",{class:"w-[80%] h-20",key:s.index},[R("p",$f,He(s.name),1)]))),128))]),R("div",zf,[R("div",Df,[R("h1",{contenteditable:"true",class:"outline-none",onClick:t[1]||(t[1]=s=>e.titleClicked(1))},He(a.defaultTierTitles[1]),1)]),Uf]),R("div",Bf,[R("div",Hf,[R("h1",{contenteditable:"true",class:"outline-none",onClick:t[2]||(t[2]=s=>e.titleClicked(2))},He(a.defaultTierTitles[2]),1)]),Yf]),R("div",Wf,[R("div",Kf,[R("h1",{contenteditable:"true",class:"outline-none",onClick:t[3]||(t[3]=s=>e.titleClicked(3))},He(a.defaultTierTitles[3]),1)]),qf]),R("div",Vf,[R("div",Xf,[R("h1",{contenteditable:"true",class:"outline-none",onClick:t[4]||(t[4]=s=>e.titleClicked(4))},He(a.defaultTierTitles[4]),1)]),Jf])]),R("div",Gf,[Zf,(et(!0),tt(ge,null,Ea(a.itemsToTier,s=>(et(),tt("div",{class:"w-[80%] h-20",key:s.index},[R("p",Qf,He(s.name),1)]))),128))]),R("div",ec,[R("div",tc,[nc,hl(R("input",{type:"text",class:"w-full text-black/75 h-10 rounded-full outline-none p-4 border-2 border-primary focus:border-4 focus:border-primary",placeholder:"enter item name","onUpdate:modelValue":t[5]||(t[5]=s=>a.itemName=s)},null,512),[[gf,a.itemName]]),R("button",{class:"daisyui-btn rounded-full w-fit no-animation",onClick:t[6]||(t[6]=(...s)=>e.createNewItem&&e.createNewItem(...s))},[rc,ee(o,{icon:"fa-solid fa-plus",class:"ml-1"})])])])])}const ic=Jr(Mf,[["render",ac]]),oc={components:{NavbarComp:Nf,MainComp:ic},data(){return{hideSettings:!0}}},sc={class:"relative h-screen max-h-screen flex flex-col"};function lc(e,t,n,r,a,i){const o=gn("navbar-comp"),s=gn("main-comp");return et(),tt("div",sc,[ee(o),ee(s)])}const fc=Jr(oc,[["render",lc]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Va(Object(n),!0).forEach(function(r){dc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yn(e)}function cc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uc(e,t,n){return t&&Xa(e.prototype,t),n&&Xa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function dc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gr(e,t){return pc(e)||gc(e,t)||go(e,t)||bc()}function Rn(e){return mc(e)||hc(e)||go(e)||vc()}function mc(e){if(Array.isArray(e))return gr(e)}function pc(e){if(Array.isArray(e))return e}function hc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function go(e,t){if(!!e){if(typeof e=="string")return gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gr(e,t)}}function gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ja=function(){},Zr={},vo={},bo=null,yo={mark:Ja,measure:Ja};try{typeof window<"u"&&(Zr=window),typeof document<"u"&&(vo=document),typeof MutationObserver<"u"&&(bo=MutationObserver),typeof performance<"u"&&(yo=performance)}catch{}var yc=Zr.navigator||{},Ga=yc.userAgent,Za=Ga===void 0?"":Ga,Xe=Zr,X=vo,Qa=bo,nn=yo;Xe.document;var ze=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",xo=~Za.indexOf("MSIE")||~Za.indexOf("Trident/"),Fe="___FONT_AWESOME___",vr=16,wo="fa",_o="svg-inline--fa",st="data-fa-i2svg",br="data-fa-pseudo-element",xc="data-fa-pseudo-element-pending",Qr="data-prefix",ea="data-icon",ei="fontawesome-i2svg",wc="async",_c=["HTML","HEAD","STYLE","SCRIPT"],ko=function(){try{return!0}catch{return!1}}(),ta={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},xn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Ao={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},kc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ac=/fa[srltdbk]?[\-\ ]/,Co="fa-layers-text",Cc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Tc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},To=[1,2,3,4,5,6,7,8,9,10],Oc=To.concat([11,12,13,14,15,16,17,18,19,20]),Ec=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ic=[].concat(Rn(Object.keys(xn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY]).concat(To.map(function(e){return"".concat(e,"x")})).concat(Oc.map(function(e){return"w-".concat(e)})),Oo=Xe.FontAwesomeConfig||{};function Pc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Nc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Sc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sc.forEach(function(e){var t=Gr(e,2),n=t[0],r=t[1],a=Nc(Pc(n));a!=null&&(Oo[r]=a)})}var Mc={familyPrefix:wo,styleDefault:"solid",replacementClass:_o,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},zt=A(A({},Mc),Oo);zt.autoReplaceSvg||(zt.observeMutations=!1);var P={};Object.keys(zt).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){zt[e]=n,fn.forEach(function(r){return r(P)})},get:function(){return zt[e]}})});Xe.FontAwesomeConfig=P;var fn=[];function Lc(e){return fn.push(e),function(){fn.splice(fn.indexOf(e),1)}}var Be=vr,Ie={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fc(e){if(!(!e||!ze)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Rc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qt(){for(var e=12,t="";e-- >0;)t+=Rc[Math.random()*62|0];return t}function Ot(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function na(e){return e.classList?Ot(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Eo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Eo(e[n]),'" ')},"").trim()}function jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ra(e){return e.size!==Ie.size||e.x!==Ie.x||e.y!==Ie.y||e.rotate!==Ie.rotate||e.flipX||e.flipY}function $c(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function zc(e){var t=e.transform,n=e.width,r=n===void 0?vr:n,a=e.height,i=a===void 0?vr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&xo?l+="translate(".concat(t.x/Be-r/2,"em, ").concat(t.y/Be-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Be,"em), calc(-50% + ").concat(t.y/Be,"em)) "):l+="translate(".concat(t.x/Be,"em, ").concat(t.y/Be,"em) "),l+="scale(".concat(t.size/Be*(t.flipX?-1:1),", ").concat(t.size/Be*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Dc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Io(){var e=wo,t=_o,n=P.familyPrefix,r=P.replacementClass,a=Dc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ti=!1;function Jn(){P.autoAddCss&&!ti&&(Fc(Io()),ti=!0)}var Uc={mixout:function(){return{dom:{css:Io,insertCss:Jn}}},hooks:function(){return{beforeDOMElementCreation:function(){Jn()},beforeI2svg:function(){Jn()}}}},Re=Xe||{};Re[Fe]||(Re[Fe]={});Re[Fe].styles||(Re[Fe].styles={});Re[Fe].hooks||(Re[Fe].hooks={});Re[Fe].shims||(Re[Fe].shims=[]);var we=Re[Fe],Po=[],Bc=function e(){X.removeEventListener("DOMContentLoaded",e),wn=1,Po.map(function(t){return t()})},wn=!1;ze&&(wn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),wn||X.addEventListener("DOMContentLoaded",Bc));function Hc(e){!ze||(wn?setTimeout(e,0):Po.push(e))}function Vt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Eo(e):"<".concat(t," ").concat(jc(r),">").concat(i.map(Vt).join(""),"</").concat(t,">")}function ni(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Yc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Gn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Yc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Wc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function yr(e){var t=Wc(e);return t.length===1?t[0].toString(16):null}function Kc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ri(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function xr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ri(t);typeof we.hooks.addPack=="function"&&!a?we.hooks.addPack(e,ri(t)):we.styles[e]=A(A({},we.styles[e]||{}),i),e==="fas"&&xr("fa",t)}var Dt=we.styles,qc=we.shims,Vc=Object.values(Ao),aa=null,No={},So={},Mo={},Lo={},Fo={},Xc=Object.keys(ta);function Jc(e){return~Ic.indexOf(e)}function Gc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Jc(a)?a:null}var Ro=function(){var t=function(i){return Gn(Dt,function(o,s,l){return o[l]=Gn(s,i,{}),o},{})};No=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),So=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Fo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||P.autoFetchSvg,r=Gn(qc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Mo=r.names,Lo=r.unicodes,aa=$n(P.styleDefault)};Lc(function(e){aa=$n(e.styleDefault)});Ro();function ia(e,t){return(No[e]||{})[t]}function Zc(e,t){return(So[e]||{})[t]}function gt(e,t){return(Fo[e]||{})[t]}function jo(e){return Mo[e]||{prefix:null,iconName:null}}function Qc(e){var t=Lo[e],n=ia("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return aa}var oa=function(){return{prefix:null,iconName:null,rest:[]}};function $n(e){var t=ta[e],n=xn[e]||xn[t],r=e in we.styles?e:null;return n||r||null}function zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Gc(P.familyPrefix,s);if(Dt[s]?(s=Vc.includes(s)?kc[s]:s,a=s,o.prefix=s):Xc.indexOf(s)>-1?(a=s,o.prefix=$n(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?jo(o.iconName):{},d=gt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Dt.far&&Dt.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},oa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Je()||"fas"),i}var eu=function(){function e(){cc(this,e),this.definitions={}}return uc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),xr(s,o[s]);var l=Ao[s];l&&xr(l,o[s]),Ro()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ai=[],vt={},wt={},tu=Object.keys(wt);function nu(e,t){var n=t.mixoutsTo;return ai=e,vt={},Object.keys(wt).forEach(function(r){tu.indexOf(r)===-1&&delete wt[r]}),ai.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),yn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function wr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function _r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=gt(n,t)||t,ni($o.definitions,n,t)||ni(we.styles,n,t)}var $o=new eu,ru=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,lt("noAuto")},au={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ze?(lt("beforeI2svg",t),je("pseudoElements2svg",t),je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Hc(function(){ou({autoReplaceSvgRoot:n}),lt("watch",t)})}},iu={icon:function(t){if(t===null)return null;if(yn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=$n(t[0]);return{prefix:r,iconName:gt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.familyPrefix,"-"))>-1||t.match(Ac))){var a=zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:gt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:gt(i,t)||t}}}},me={noAuto:ru,config:P,dom:au,parse:iu,library:$o,findIconDefinition:_r,toHtml:Vt},ou=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(we.styles).length>0||P.autoFetchSvg)&&ze&&P.autoReplaceSvg&&me.dom.i2svg({node:r})};function Dn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Vt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ze){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function su(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ra(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=jn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function lu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function sa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,C=b===void 0?!1:b,F=r.found?r:n,$=F.width,N=F.height,y=a==="fak",T=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(ie){return m.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(m.classes).join(" "),S={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:T,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat($," ").concat(N)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat($/N*16*.0625,"em")}:{};C&&(S.attributes[st]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(d||qt())},children:[l]}),delete S.attributes.title);var K=A(A({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},z),m.styles)}),te=r.found&&n.found?je("generateAbstractMask",K)||{children:[],attributes:{}}:je("generateAbstractIcon",K)||{children:[],attributes:{}},fe=te.children,Ae=te.attributes;return K.children=fe,K.attributes=Ae,s?lu(K):su(K)}function ii(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[st]="");var d=A({},o.styles);ra(a)&&(d.transform=zc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=jn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function fu(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=jn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zn=we.styles;function kr(e){var t=e[0],n=e[1],r=e.slice(4),a=Gr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(at.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(at.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(at.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var cu={found:!1,width:512,height:512};function uu(e,t){!ko&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ar(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if(je("missingIconAbstract"),n==="fa"){var i=jo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Zn[t]&&Zn[t][e]){var o=Zn[t][e];return r(kr(o))}uu(e,t),r(A(A({},cu),{},{icon:P.showMissingIcons&&e?je("missingIconAbstract")||{}:{}}))})}var oi=function(){},Cr=P.measurePerformance&&nn&&nn.mark&&nn.measure?nn:{mark:oi,measure:oi},Ft='FA "6.1.2"',du=function(t){return Cr.mark("".concat(Ft," ").concat(t," begins")),function(){return zo(t)}},zo=function(t){Cr.mark("".concat(Ft," ").concat(t," ends")),Cr.measure("".concat(Ft," ").concat(t),"".concat(Ft," ").concat(t," begins"),"".concat(Ft," ").concat(t," ends"))},la={begin:du,end:zo},cn=function(){};function si(e){var t=e.getAttribute?e.getAttribute(st):null;return typeof t=="string"}function mu(e){var t=e.getAttribute?e.getAttribute(Qr):null,n=e.getAttribute?e.getAttribute(ea):null;return t&&n}function pu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function hu(){if(P.autoReplaceSvg===!0)return un.replace;var e=un[P.autoReplaceSvg];return e||un.replace}function gu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function vu(e){return X.createElement(e)}function Do(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gu:vu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Do(o,{ceFn:r}))}),a}function bu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Do(a),n)}),n.getAttribute(st)===null&&P.keepOriginalSource){var r=X.createComment(bu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~na(n).indexOf(P.replacementClass))return un.replace(t);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Vt(s)}).join(`
`);n.setAttribute(st,""),n.innerHTML=o}};function li(e){e()}function Uo(e,t){var n=typeof t=="function"?t:cn;if(e.length===0)n();else{var r=li;P.mutateApproach===wc&&(r=Xe.requestAnimationFrame||li),r(function(){var a=hu(),i=la.begin("mutate");e.map(a),i(),n()})}}var fa=!1;function Bo(){fa=!0}function Tr(){fa=!1}var _n=null;function fi(e){if(!!Qa&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?cn:t,r=e.nodeCallback,a=r===void 0?cn:r,i=e.pseudoElementsCallback,o=i===void 0?cn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;_n=new Qa(function(u){if(!fa){var d=Je();Ot(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!si(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&si(m.target)&&~Ec.indexOf(m.attributeName))if(m.attributeName==="class"&&mu(m.target)){var b=zn(na(m.target)),C=b.prefix,F=b.iconName;m.target.setAttribute(Qr,C||d),F&&m.target.setAttribute(ea,F)}else pu(m.target)&&a(m.target)})}}),ze&&_n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yu(){!_n||_n.disconnect()}function xu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function wu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=zn(na(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Zc(a.prefix,e.innerText)||ia(a.prefix,yr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function _u(e){var t=Ot(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function ku(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ie,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wu(e),r=n.iconName,a=n.prefix,i=n.rest,o=_u(e),s=wr("parseNodeAttributes",{},e),l=t.styleParser?xu(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ie,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Au=we.styles;function Ho(e){var t=P.autoReplaceSvg==="nest"?ci(e,{styleParser:!1}):ci(e);return~t.extra.classes.indexOf(Co)?je("generateLayersText",e,t):je("generateSvgReplacementMutation",e,t)}function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ze)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ei,"-").concat(m))},a=function(m){return n.remove("".concat(ei,"-").concat(m))},i=P.autoFetchSvg?Object.keys(ta):Object.keys(Au);i.includes("fa")||i.push("fa");var o=[".".concat(Co,":not([").concat(st,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(st,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ot(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=la.begin("onTree"),u=s.reduce(function(d,m){try{var b=Ho(m);b&&d.push(b)}catch(C){ko||C.name==="MissingIcon"&&console.error(C)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Uo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Cu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ho(e).then(function(n){n&&Uo([n],t)})}function Tu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:_r(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Ou=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ie:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,C=n.titleId,F=C===void 0?null:C,$=n.classes,N=$===void 0?[]:$,y=n.attributes,T=y===void 0?{}:y,S=n.styles,z=S===void 0?{}:S;if(!!t){var K=t.prefix,te=t.iconName,fe=t.icon;return Dn(A({type:"icon"},t),function(){return lt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(b?T["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(F||qt()):(T["aria-hidden"]="true",T.focusable="false")),sa({icons:{main:kr(fe),mask:l?kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:te,transform:A(A({},Ie),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:T,styles:z,classes:N}})})}},Eu={mixout:function(){return{icon:Tu(Ou)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ui,n.nodeCallback=Cu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ui(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(C,F){Promise.all([Ar(a,s),d.iconName?Ar(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function($){var N=Gr($,2),y=N[0],T=N[1];C([n,sa({icons:{main:y,mask:T},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=jn(s);l.length>0&&(a.style=l);var u;return ra(o)&&(u=je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Iu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Dn({type:"layer"},function(){lt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(Rn(i)).join(" ")},children:o}]})}}}},Pu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Dn({type:"counter",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:r}),fu({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(Rn(s))}})})}}}},Nu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ie:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,C=b===void 0?{}:b;return Dn({type:"text",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:r}),ii({content:n,transform:A(A({},Ie),i),title:s,extra:{attributes:m,styles:C,classes:["".concat(P.familyPrefix,"-layers-text")].concat(Rn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(xo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ii({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Su=new RegExp('"',"ug"),di=[1105920,1112319];function Mu(e){var t=e.replace(Su,""),n=Kc(t,0),r=n>=di[0]&&n<=di[1],a=t.length===2?t[0]===t[1]:!1;return{value:yr(a?t[0]:t),isSecondary:r||a}}function mi(e,t){var n="".concat(xc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ot(e.children),o=i.filter(function(te){return te.getAttribute(br)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Cc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?xn[l[2].toLowerCase()]:Tc[u],C=Mu(m),F=C.value,$=C.isSecondary,N=l[0].startsWith("FontAwesome"),y=ia(b,F),T=y;if(N){var S=Qc(F);S.iconName&&S.prefix&&(y=S.iconName,b=S.prefix)}if(y&&!$&&(!o||o.getAttribute(Qr)!==b||o.getAttribute(ea)!==T)){e.setAttribute(n,T),o&&e.removeChild(o);var z=ku(),K=z.extra;K.attributes[br]=t,Ar(y,b).then(function(te){var fe=sa(A(A({},z),{},{icons:{main:te,mask:oa()},prefix:b,iconName:T,extra:K,watchable:!0})),Ae=X.createElement("svg");t==="::before"?e.insertBefore(Ae,e.firstChild):e.appendChild(Ae),Ae.outerHTML=fe.map(function(ie){return Vt(ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Lu(e){return Promise.all([mi(e,"::before"),mi(e,"::after")])}function Fu(e){return e.parentNode!==document.head&&!~_c.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(br)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pi(e){if(!!ze)return new Promise(function(t,n){var r=Ot(e.querySelectorAll("*")).filter(Fu).map(Lu),a=la.begin("searchPseudoElements");Bo(),Promise.all(r).then(function(){a(),Tr(),t()}).catch(function(){a(),Tr(),n()})})}var Ru={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&pi(a)}}},hi=!1,ju={mixout:function(){return{dom:{unwatch:function(){Bo(),hi=!0}}}},hooks:function(){return{bootstrap:function(){fi(wr("mutationObserverCallbacks",{}))},noAuto:function(){yu()},watch:function(n){var r=n.observeMutationsRoot;hi?Tr():fi(wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$u={mixout:function(){return{parse:{transform:function(n){return gi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=gi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},C={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},C.outer),children:[{tag:"g",attributes:A({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),C.path)}]}]}}}},Qn={x:0,y:0,width:"100%",height:"100%"};function vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zu(e){return e.tag==="g"?e.children:[e]}var Du={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?zn(a.split(" ").map(function(o){return o.trim()})):oa();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,C=$c({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:A(A({},Qn),{},{fill:"white"})},$=d.children?{children:d.children.map(vi)}:{},N={tag:"g",attributes:A({},C.inner),children:[vi(A({tag:d.tag,attributes:A(A({},d.attributes),C.path)},$))]},y={tag:"g",attributes:A({},C.outer),children:[N]},T="mask-".concat(s||qt()),S="clip-".concat(s||qt()),z={tag:"mask",attributes:A(A({},Qn),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:zu(b)},z]};return r.push(K,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(T,")")},Qn)}),{children:r,attributes:a}}}},Uu={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Bu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Hu=[Uc,Eu,Iu,Pu,Nu,Ru,ju,$u,Du,Uu,Bu];nu(Hu,{mixoutsTo:me});me.noAuto;var Yo=me.config,Yu=me.library;me.dom;var kn=me.parse;me.findIconDefinition;me.toHtml;var Wu=me.icon;me.layer;var Ku=me.text;me.counter;/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var qu={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]},Vu={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"]},Xu={prefix:"fas",iconName:"pencil",icon:[512,512,[61504,9999,"pencil-alt"],"f303","M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"]},Ju={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]},Gu={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"]};function bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bi(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function An(e){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Qu(e,t){if(e==null)return{};var n=Zu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Or(e){return ed(e)||td(e)||nd(e)||rd()}function ed(e){if(Array.isArray(e))return Er(e)}function td(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nd(e,t){if(!!e){if(typeof e=="string")return Er(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e,t)}}function Er(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wo={exports:{}};(function(e){(function(t){var n=function(y,T,S){if(!u(T)||m(T)||b(T)||C(T)||l(T))return T;var z,K=0,te=0;if(d(T))for(z=[],te=T.length;K<te;K++)z.push(n(y,T[K],S));else{z={};for(var fe in T)Object.prototype.hasOwnProperty.call(T,fe)&&(z[y(fe,S)]=n(y,T[fe],S))}return z},r=function(y,T){T=T||{};var S=T.separator||"_",z=T.split||/(?=[A-Z])/;return y.split(z).join(S)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(T,S){return S?S.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var T=a(y);return T.substr(0,1).toUpperCase()+T.substr(1)},o=function(y,T){return r(y,T).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},C=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},$=function(y,T){var S=T&&"process"in T?T.process:T;return typeof S!="function"?y:function(z,K){return S(z,y,K)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,T){return n($(a,T),y)},decamelizeKeys:function(y,T){return n($(o,T),y,T)},pascalizeKeys:function(y,T){return n($(i,T),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(ad)})(Wo);var id=Wo.exports,od=["class","style"];function sd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=id.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ld(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ca(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=ld(d);break;case"style":l.style=sd(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Qu(n,od);return po(e.tag,be(be(be({},t),{},{class:a.class,style:be(be({},a.style),o)},a.attrs),s),r)}var Ko=!1;try{Ko=!0}catch{}function fd(){if(!Ko&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function cd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function yi(e){if(e&&An(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(kn.icon)return kn.icon(e);if(e===null)return null;if(An(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ud=Kr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pe(function(){return yi(t.icon)}),i=pe(function(){return Ut("classes",cd(t))}),o=pe(function(){return Ut("transform",typeof t.transform=="string"?kn.transform(t.transform):t.transform)}),s=pe(function(){return Ut("mask",yi(t.mask))}),l=pe(function(){return Wu(a.value,be(be(be(be({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});on(l,function(d){if(!d)return fd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=pe(function(){return l.value?ca(l.value.abstract[0],{},r):null});return function(){return u.value}}});Kr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Yo.familyPrefix,i=pe(function(){return["".concat(a,"-layers")].concat(Or(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return po("div",{class:i.value},r.default?r.default():[])}}});Kr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Yo.familyPrefix,i=pe(function(){return Ut("classes",[].concat(Or(t.counter?["".concat(a,"-layers-counter")]:[]),Or(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=pe(function(){return Ut("transform",typeof t.transform=="string"?kn.transform(t.transform):t.transform)}),s=pe(function(){var u=Ku(t.value.toString(),be(be({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=pe(function(){return ca(s.value,{},r)});return function(){return l.value}}});Yu.add(Gu,Vu,qu,Xu,Ju);const dd=yf(fc);dd.component("font-awesome-icon",ud).mount("#app");
