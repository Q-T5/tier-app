(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Nr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Jo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Go=Nr(Jo);function wi(e){return!!e||e===""}function Sr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Z(r)?es(r):Sr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Z(e))return e;if(G(e))return e}}const Zo=/;(?![^(]*\))/g,Qo=/:(.+)/;function es(e){const t={};return e.split(Zo).forEach(n=>{if(n){const r=n.split(Qo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Mr(e){let t="";if(Z(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Mr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const tt=e=>Z(e)?e:e==null?"":L(e)||G(e)&&(e.toString===Ci||!R(e.toString))?JSON.stringify(e,_i,2):String(e),_i=(e,t)=>t&&t.__v_isRef?_i(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ki(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!L(t)&&!Oi(t)?String(t):t,W={},wt=[],Ce=()=>{},ts=()=>!1,ns=/^on[^a-z]/,En=e=>ns.test(e),Lr=e=>e.startsWith("onUpdate:"),se=Object.assign,Dr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rs=Object.prototype.hasOwnProperty,z=(e,t)=>rs.call(e,t),L=Array.isArray,_t=e=>Tn(e)==="[object Map]",ki=e=>Tn(e)==="[object Set]",R=e=>typeof e=="function",Z=e=>typeof e=="string",Fr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Ai=e=>G(e)&&R(e.then)&&R(e.catch),Ci=Object.prototype.toString,Tn=e=>Ci.call(e),as=e=>Tn(e).slice(8,-1),Oi=e=>Tn(e)==="[object Object]",Rr=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,on=Nr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),In=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},is=/-(\w)/g,Me=In(e=>e.replace(is,(t,n)=>n?n.toUpperCase():"")),os=/\B([A-Z])/g,ct=In(e=>e.replace(os,"-$1").toLowerCase()),Pn=In(e=>e.charAt(0).toUpperCase()+e.slice(1)),qn=In(e=>e?`on${Pn(e)}`:""),pn=(e,t)=>!Object.is(e,t),sn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},nr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ya;const ss=()=>ya||(ya=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pe;class ls{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Pe&&(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function fs(e,t=Pe){t&&t.active&&t.effects.push(e)}const jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ei=e=>(e.w&Je)>0,Ti=e=>(e.n&Je)>0,cs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},us=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ei(a)&&!Ti(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},rr=new WeakMap;let Dt=0,Je=1;const ar=30;let xe;const ot=Symbol(""),ir=Symbol("");class $r{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fs(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Ve=!0,Je=1<<++Dt,Dt<=ar?cs(this):xa(this),this.fn()}finally{Dt<=ar&&us(this),Je=1<<--Dt,xe=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(xa(this),this.onStop&&this.onStop(),this.active=!1)}}function xa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const Ii=[];function Et(){Ii.push(Ve),Ve=!1}function Tt(){const e=Ii.pop();Ve=e===void 0?!0:e}function he(e,t,n){if(Ve&&xe){let r=rr.get(e);r||rr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=jr()),Pi(a)}}function Pi(e,t){let n=!1;Dt<=ar?Ti(e)||(e.n|=Je,n=!Ei(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function Re(e,t,n,r,a,i){const o=rr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?Rr(n)&&s.push(o.get("length")):(s.push(o.get(ot)),_t(e)&&s.push(o.get(ir)));break;case"delete":L(e)||(s.push(o.get(ot)),_t(e)&&s.push(o.get(ir)));break;case"set":_t(e)&&s.push(o.get(ot));break}if(s.length===1)s[0]&&or(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);or(jr(l))}}function or(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&wa(r);for(const r of n)r.computed||wa(r)}function wa(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ds=Nr("__proto__,__v_isRef,__isVue"),Ni=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fr)),ms=zr(),ps=zr(!1,!0),hs=zr(!0),_a=gs();function gs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const r=B(this)[t].apply(this,n);return Tt(),r}}),e}function zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ss:Fi:t?Di:Li).get(r))return r;const o=L(r);if(!e&&o&&z(_a,a))return Reflect.get(_a,a,i);const s=Reflect.get(r,a,i);return(Fr(a)?Ni.has(a):ds(a))||(e||he(r,"get",a),t)?s:oe(s)?o&&Rr(a)?s:s.value:G(s)?e?Ri(s):Hr(s):s}}const vs=Si(),bs=Si(!0);function Si(e=!1){return function(n,r,a,i){let o=n[r];if(Yt(o)&&oe(o)&&!oe(a))return!1;if(!e&&!Yt(a)&&(sr(a)||(a=B(a),o=B(o)),!L(n)&&oe(o)&&!oe(a)))return o.value=a,!0;const s=L(n)&&Rr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?pn(a,o)&&Re(n,"set",r,a):Re(n,"add",r,a)),l}}function ys(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Re(e,"delete",t,void 0),r}function xs(e,t){const n=Reflect.has(e,t);return(!Fr(t)||!Ni.has(t))&&he(e,"has",t),n}function ws(e){return he(e,"iterate",L(e)?"length":ot),Reflect.ownKeys(e)}const Mi={get:ms,set:vs,deleteProperty:ys,has:xs,ownKeys:ws},_s={get:hs,set(e,t){return!0},deleteProperty(e,t){return!0}},ks=se({},Mi,{get:ps,set:bs}),Ur=e=>e,Nn=e=>Reflect.getPrototypeOf(e);function Qt(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=Nn(a),s=r?Ur:n?Kr:Wr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function en(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function tn(e,t=!1){return e=e.__v_raw,!t&&he(B(e),"iterate",ot),Reflect.get(e,"size",e)}function ka(e){e=B(e);const t=B(this);return Nn(t).has.call(t,e)||(t.add(e),Re(t,"add",e,e)),this}function Aa(e,t){t=B(t);const n=B(this),{has:r,get:a}=Nn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?pn(t,o)&&Re(n,"set",e,t):Re(n,"add",e,t),this}function Ca(e){const t=B(this),{has:n,get:r}=Nn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Re(t,"delete",e,void 0),i}function Oa(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Re(e,"clear",void 0,void 0),n}function nn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Ur:e?Kr:Wr;return!e&&he(s,"iterate",ot),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function rn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Ur:t?Kr:Wr;return!t&&he(i,"iterate",l?ir:ot),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function As(){const e={get(i){return Qt(this,i)},get size(){return tn(this)},has:en,add:ka,set:Aa,delete:Ca,clear:Oa,forEach:nn(!1,!1)},t={get(i){return Qt(this,i,!1,!0)},get size(){return tn(this)},has:en,add:ka,set:Aa,delete:Ca,clear:Oa,forEach:nn(!1,!0)},n={get(i){return Qt(this,i,!0)},get size(){return tn(this,!0)},has(i){return en.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:nn(!0,!1)},r={get(i){return Qt(this,i,!0,!0)},get size(){return tn(this,!0)},has(i){return en.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=rn(i,!1,!1),n[i]=rn(i,!0,!1),t[i]=rn(i,!1,!0),r[i]=rn(i,!0,!0)}),[e,n,t,r]}const[Cs,Os,Es,Ts]=As();function Br(e,t){const n=t?e?Ts:Es:e?Os:Cs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Is={get:Br(!1,!1)},Ps={get:Br(!1,!0)},Ns={get:Br(!0,!1)},Li=new WeakMap,Di=new WeakMap,Fi=new WeakMap,Ss=new WeakMap;function Ms(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ls(e){return e.__v_skip||!Object.isExtensible(e)?0:Ms(as(e))}function Hr(e){return Yt(e)?e:Yr(e,!1,Mi,Is,Li)}function Ds(e){return Yr(e,!1,ks,Ps,Di)}function Ri(e){return Yr(e,!0,_s,Ns,Fi)}function Yr(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ls(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Yt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function ji(e){return kt(e)||Yt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function $i(e){return hn(e,"__v_skip",!0),e}const Wr=e=>G(e)?Hr(e):e,Kr=e=>G(e)?Ri(e):e;function Fs(e){Ve&&xe&&(e=B(e),Pi(e.dep||(e.dep=jr())))}function Rs(e,t){e=B(e),e.dep&&or(e.dep)}function oe(e){return!!(e&&e.__v_isRef===!0)}function js(e){return oe(e)?e.value:e}const $s={get:(e,t,n)=>js(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return oe(a)&&!oe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function zi(e){return kt(e)?e:new Proxy(e,$s)}class zs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new $r(t,()=>{this._dirty||(this._dirty=!0,Rs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Fs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Us(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new zs(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Sn(i,t,n)}return a}function Oe(e,t,n,r){if(R(e)){const i=Xe(e,t,n,r);return i&&Ai(i)&&i.catch(o=>{Sn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Sn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}Bs(e,n,a,r)}function Bs(e,t,n,r=!0){console.error(e)}let gn=!1,lr=!1;const pe=[];let Fe=0;const jt=[];let Ft=null,gt=0;const $t=[];let Ke=null,vt=0;const Ui=Promise.resolve();let qr=null,fr=null;function Hs(e){const t=qr||Ui;return e?t.then(this?e.bind(this):e):t}function Ys(e){let t=Fe+1,n=pe.length;for(;t<n;){const r=t+n>>>1;Wt(pe[r])<e?t=r+1:n=r}return t}function Bi(e){(!pe.length||!pe.includes(e,gn&&e.allowRecurse?Fe+1:Fe))&&e!==fr&&(e.id==null?pe.push(e):pe.splice(Ys(e.id),0,e),Hi())}function Hi(){!gn&&!lr&&(lr=!0,qr=Ui.then(Ki))}function Ws(e){const t=pe.indexOf(e);t>Fe&&pe.splice(t,1)}function Yi(e,t,n,r){L(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Hi()}function Ks(e){Yi(e,Ft,jt,gt)}function qs(e){Yi(e,Ke,$t,vt)}function Mn(e,t=null){if(jt.length){for(fr=t,Ft=[...new Set(jt)],jt.length=0,gt=0;gt<Ft.length;gt++)Ft[gt]();Ft=null,gt=0,fr=null,Mn(e,t)}}function Wi(e){if(Mn(),$t.length){const t=[...new Set($t)];if($t.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>Wt(n)-Wt(r)),vt=0;vt<Ke.length;vt++)Ke[vt]();Ke=null,vt=0}}const Wt=e=>e.id==null?1/0:e.id;function Ki(e){lr=!1,gn=!0,Mn(e),pe.sort((n,r)=>Wt(n)-Wt(r));const t=Ce;try{for(Fe=0;Fe<pe.length;Fe++){const n=pe[Fe];n&&n.active!==!1&&Xe(n,null,14)}}finally{Fe=0,pe.length=0,Wi(),gn=!1,qr=null,(pe.length||jt.length||$t.length)&&Ki(e)}}function Vs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||W;b&&(a=n.map(C=>C.trim())),m&&(a=n.map(nr))}let s,l=r[s=qn(t)]||r[s=qn(Me(t))];!l&&i&&(l=r[s=qn(ct(t))]),l&&Oe(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(u,e,6,a)}}function qi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=qi(u,t,!0);d&&(s=!0,se(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):se(o,i),r.set(e,o),o)}function Ln(e,t){return!e||!En(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,ct(t))||z(e,t))}let _e=null,Vi=null;function vn(e){const t=_e;return _e=e,Vi=e&&e.type.__scopeId||null,t}function Xs(e,t=_e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Fa(-1);const i=vn(t),o=e(...a);return vn(i),r._d&&Fa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Vn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:C,ctx:F,inheritAttrs:j}=e;let N,y;const O=vn(e);try{if(n.shapeFlag&4){const $=a||r;N=Ne(d.call($,$,m,i,C,b,F)),y=l}else{const $=t;N=Ne($.length>1?$(i,{attrs:l,slots:s,emit:u}):$(i,null)),y=t.props?l:Js(l)}}catch($){zt.length=0,Sn($,e,1),N=ee(Kt)}let S=N;if(y&&j!==!1){const $=Object.keys(y),{shapeFlag:K}=S;$.length&&K&7&&(o&&$.some(Lr)&&(y=Gs(y,o)),S=Ct(S,y))}return n.dirs&&(S=Ct(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),N=S,vn(O),N}const Js=e=>{let t;for(const n in e)(n==="class"||n==="style"||En(n))&&((t||(t={}))[n]=e[n]);return t},Gs=(e,t)=>{const n={};for(const r in e)(!Lr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ea(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Ln(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ea(r,o,u):!0:!!o;return!1}function Ea(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Ln(n,i))return!0}return!1}function Qs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const el=e=>e.__isSuspense;function tl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):qs(e)}function nl(e,t){if(Q){let n=Q.provides;const r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function Xn(e,t,n=!1){const r=Q||_e;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Ta={};function ln(e,t,n){return Xi(e,t,n)}function Xi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=Q;let l,u=!1,d=!1;if(oe(e)?(l=()=>e.value,u=sr(e)):kt(e)?(l=()=>e,r=!0):L(e)?(d=!0,u=e.some(y=>kt(y)||sr(y)),l=()=>e.map(y=>{if(oe(y))return y.value;if(kt(y))return at(y);if(R(y))return Xe(y,s,2)})):R(e)?t?l=()=>Xe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Oe(e,s,3,[b])}:l=Ce,t&&r){const y=l;l=()=>at(y())}let m,b=y=>{m=N.onStop=()=>{Xe(y,s,4)}};if(Vt)return b=Ce,t?n&&Oe(t,s,3,[l(),d?[]:void 0,b]):l(),Ce;let C=d?[]:Ta;const F=()=>{if(!!N.active)if(t){const y=N.run();(r||u||(d?y.some((O,S)=>pn(O,C[S])):pn(y,C)))&&(m&&m(),Oe(t,s,3,[y,C===Ta?void 0:C,b]),C=y)}else N.run()};F.allowRecurse=!!t;let j;a==="sync"?j=F:a==="post"?j=()=>ue(F,s&&s.suspense):j=()=>Ks(F);const N=new $r(l,j);return t?n?F():C=N.run():a==="post"?ue(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&Dr(s.scope.effects,N)}}function rl(e,t,n){const r=this.proxy,a=Z(e)?e.includes(".")?Ji(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=Q;Ot(this);const s=Xi(a,i.bind(r),n);return o?Ot(o):st(),s}function Ji(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function at(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),oe(e))at(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)at(e[n],t);else if(ki(e)||_t(e))e.forEach(n=>{at(n,t)});else if(Oi(e))for(const n in e)at(e[n],t);return e}function Vr(e){return R(e)?{setup:e,name:e.name}:e}const fn=e=>!!e.type.__asyncLoader,Gi=e=>e.type.__isKeepAlive;function al(e,t){Zi(e,"a",t)}function il(e,t){Zi(e,"da",t)}function Zi(e,t,n=Q){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Dn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Gi(a.parent.vnode)&&ol(r,t,n,a),a=a.parent}}function ol(e,t,n,r){const a=Dn(t,e,r,!0);Qi(()=>{Dr(r[t],a)},n)}function Dn(e,t,n=Q,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Et(),Ot(n);const s=Oe(t,n,e,o);return st(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=Q)=>(!Vt||e==="sp")&&Dn(e,t,n),sl=Ue("bm"),ll=Ue("m"),fl=Ue("bu"),cl=Ue("u"),ul=Ue("bum"),Qi=Ue("um"),dl=Ue("sp"),ml=Ue("rtg"),pl=Ue("rtc");function hl(e,t=Q){Dn("ec",e,t)}function gl(e,t){const n=_e;if(n===null)return e;const r=Rn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,u=W]=t[i];R(o)&&(o={mounted:o,updated:o}),o.deep&&at(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:u})}return e}function Qe(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Et(),Oe(l,n,8,[e.el,s,e,t]),Tt())}}const eo="components";function bn(e,t){return bl(eo,e,!0,t)||e}const vl=Symbol();function bl(e,t,n=!0,r=!1){const a=_e||Q;if(a){const i=a.type;if(e===eo){const s=Vl(i,!1);if(s&&(s===t||s===Me(t)||s===Pn(Me(t))))return i}const o=Ia(a[e]||i[e],t)||Ia(a.appContext[e],t);return!o&&r?i:o}}function Ia(e,t){return e&&(e[t]||e[Me(t)]||e[Pn(Me(t))])}function ht(e,t,n,r){let a;const i=n&&n[r];if(L(e)||Z(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const cr=e=>e?mo(e)?Rn(e)||e.proxy:cr(e.parent):null,yn=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cr(e.parent),$root:e=>cr(e.root),$emit:e=>e.emit,$options:e=>no(e),$forceUpdate:e=>e.f||(e.f=()=>Bi(e.update)),$nextTick:e=>e.n||(e.n=Hs.bind(e.proxy)),$watch:e=>rl.bind(e)}),yl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const C=o[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&z(r,t))return o[t]=1,r[t];if(a!==W&&z(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&z(u,t))return o[t]=3,i[t];if(n!==W&&z(n,t))return o[t]=4,n[t];ur&&(o[t]=0)}}const d=yn[t];let m,b;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&z(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,z(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&z(a,t)?(a[t]=n,!0):r!==W&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&z(e,o)||t!==W&&z(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(yn,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ur=!0;function xl(e){const t=no(e),n=e.proxy,r=e.ctx;ur=!1,t.beforeCreate&&Pa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:C,updated:F,activated:j,deactivated:N,beforeDestroy:y,beforeUnmount:O,destroyed:S,unmounted:$,render:K,renderTracked:te,renderTriggered:de,errorCaptured:Ee,serverPrefetch:le,expose:Pt,inheritAttrs:ut,components:Nt,directives:Gt,filters:ma}=t;if(u&&wl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const q=o[J];R(q)&&(r[J]=q.bind(n))}if(a){const J=a.call(n,n);G(J)&&(e.data=Hr(J))}if(ur=!0,i)for(const J in i){const q=i[J],Le=R(q)?q.bind(n,n):R(q.get)?q.get.bind(n,n):Ce,Yn=!R(q)&&R(q.set)?q.set.bind(n):Ce,St=be({get:Le,set:Yn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>St.value,set:dt=>St.value=dt})}if(s)for(const J in s)to(s[J],r,n,J);if(l){const J=R(l)?l.call(n):l;Reflect.ownKeys(J).forEach(q=>{nl(q,J[q])})}d&&Pa(d,e,"c");function fe(J,q){L(q)?q.forEach(Le=>J(Le.bind(n))):q&&J(q.bind(n))}if(fe(sl,m),fe(ll,b),fe(fl,C),fe(cl,F),fe(al,j),fe(il,N),fe(hl,Ee),fe(pl,te),fe(ml,de),fe(ul,O),fe(Qi,$),fe(dl,le),L(Pt))if(Pt.length){const J=e.exposed||(e.exposed={});Pt.forEach(q=>{Object.defineProperty(J,q,{get:()=>n[q],set:Le=>n[q]=Le})})}else e.exposed||(e.exposed={});K&&e.render===Ce&&(e.render=K),ut!=null&&(e.inheritAttrs=ut),Nt&&(e.components=Nt),Gt&&(e.directives=Gt)}function wl(e,t,n=Ce,r=!1){L(e)&&(e=dr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Xn(i.from||a,i.default,!0):o=Xn(i.from||a):o=Xn(i),oe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Pa(e,t,n){Oe(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function to(e,t,n,r){const a=r.includes(".")?Ji(n,r):()=>n[r];if(Z(e)){const i=t[e];R(i)&&ln(a,i)}else if(R(e))ln(a,e.bind(n));else if(G(e))if(L(e))e.forEach(i=>to(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&ln(a,i,e)}}function no(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>xn(l,u,o,!0)),xn(l,t,o)),i.set(t,l),l}function xn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&xn(e,i,n,!0),a&&a.forEach(o=>xn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=_l[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const _l={data:Na,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:nt,directives:nt,watch:Al,provide:Na,inject:kl};function Na(e,t){return t?e?function(){return se(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function kl(e,t){return nt(dr(e),dr(t))}function dr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?se(se(Object.create(null),e),t):t}function Al(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function Cl(e,t,n,r=!1){const a={},i={};hn(i,Fn,1),e.propsDefaults=Object.create(null),ro(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ds(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ol(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Ln(e.emitsOptions,b))continue;const C=t[b];if(l)if(z(i,b))C!==i[b]&&(i[b]=C,u=!0);else{const F=Me(b);a[F]=mr(l,s,F,C,e,!1)}else C!==i[b]&&(i[b]=C,u=!0)}}}else{ro(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=ct(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=mr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m)&&!0)&&(delete i[m],u=!0)}u&&Re(e,"set","$attrs")}function ro(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(on(l))continue;const u=t[l];let d;a&&z(a,d=Me(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Ln(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=mr(a,l,m,u[m],e,!z(u,m))}}return o}function mr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Ot(a),r=u[n]=l.call(null,t),st())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===ct(n))&&(r=!0))}return r}function ao(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[b,C]=ao(m,t,!0);se(o,b),C&&s.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,wt),wt;if(L(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Sa(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Me(d);if(Sa(m)){const b=i[d],C=o[m]=L(b)||R(b)?{type:b}:b;if(C){const F=Da(Boolean,C.type),j=Da(String,C.type);C[0]=F>-1,C[1]=j<0||F<j,(F>-1||z(C,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Sa(e){return e[0]!=="$"}function Ma(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function La(e,t){return Ma(e)===Ma(t)}function Da(e,t){return L(t)?t.findIndex(n=>La(n,e)):R(t)&&La(t,e)?0:-1}const io=e=>e[0]==="_"||e==="$stable",Xr=e=>L(e)?e.map(Ne):[Ne(e)],El=(e,t,n)=>{if(t._n)return t;const r=Xs((...a)=>Xr(t(...a)),n);return r._c=!1,r},oo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(io(a))continue;const i=e[a];if(R(i))t[a]=El(a,i,r);else if(i!=null){const o=Xr(i);t[a]=()=>o}}},so=(e,t)=>{const n=Xr(t);e.slots.default=()=>n},Tl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),hn(t,"_",n)):oo(t,e.slots={})}else e.slots={},t&&so(e,t);hn(e.slots,Fn,1)},Il=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(se(a,t),!n&&s===1&&delete a._):(i=!t.$stable,oo(t,a)),o=t}else t&&(so(e,t),o={default:1});if(i)for(const s in a)!io(s)&&!(s in o)&&delete a[s]};function lo(){return{app:null,config:{isNativeTag:ts,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pl=0;function Nl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=lo(),o=new Set;let s=!1;const l=i.app={_uid:Pl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Jl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=ee(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Rn(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function pr(e,t,n,r,a=!1){if(L(e)){e.forEach((b,C)=>pr(b,t&&(L(t)?t[C]:t),n,r,a));return}if(fn(r)&&!a)return;const i=r.shapeFlag&4?Rn(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(Z(u)?(d[u]=null,z(m,u)&&(m[u]=null)):oe(u)&&(u.value=null)),R(l))Xe(l,s,12,[o,d]);else{const b=Z(l),C=oe(l);if(b||C){const F=()=>{if(e.f){const j=b?d[l]:l.value;a?L(j)&&Dr(j,i):L(j)?j.includes(i)||j.push(i):b?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,z(m,l)&&(m[l]=o)):C&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,ue(F,n)):F()}}}const ue=tl;function Sl(e){return Ml(e)}function Ml(e,t){const n=ss();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:C=Ce,cloneNode:F,insertStaticContent:j}=e,N=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Lt(f,c)&&(g=Zt(f),He(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:T,shapeFlag:E}=c;switch(v){case Jr:y(f,c,p,g);break;case Kt:O(f,c,p,g);break;case Jn:f==null&&S(c,p,g,k);break;case ie:Gt(f,c,p,g,h,w,k,x,_);break;default:E&1?te(f,c,p,g,h,w,k,x,_):E&6?ma(f,c,p,g,h,w,k,x,_):(E&64||E&128)&&v.process(f,c,p,g,h,w,k,x,_,mt)}T!=null&&h&&pr(T,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},O=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},S=(f,c,p,g)=>{[f.el,f.anchor]=j(f.children,c,p,g,f.el,f.anchor)},$=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},K=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},te=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?de(c,p,g,h,w,k,x,_):Pt(f,c,h,w,k,x,_)},de=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:T,props:E,shapeFlag:I,transition:M,patchFlag:U,dirs:H}=f;if(f.el&&F!==void 0&&U===-1)_=f.el=F(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),I&8?d(_,f.children):I&16&&le(f.children,_,null,g,h,w&&T!=="foreignObject",k,x),H&&Qe(f,null,g,"created"),E){for(const V in E)V!=="value"&&!on(V)&&i(_,V,null,E[V],w,f.children,g,h,De);"value"in E&&i(_,"value",null,E.value),(v=E.onVnodeBeforeMount)&&Ie(v,g,f)}Ee(_,f,f.scopeId,k,g)}H&&Qe(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;Y&&M.beforeEnter(_),r(_,c,p),((v=E&&E.onVnodeMounted)||Y||H)&&ue(()=>{v&&Ie(v,g,f),Y&&M.enter(_),H&&Qe(f,null,g,"mounted")},h)},Ee=(f,c,p,g,h)=>{if(p&&C(f,p),g)for(let w=0;w<g.length;w++)C(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;Ee(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},le=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const T=f[v]=x?qe(f[v]):Ne(f[v]);N(null,T,c,p,g,h,w,k,x)}},Pt=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:T}=c;_|=f.patchFlag&16;const E=f.props||W,I=c.props||W;let M;p&&et(p,!1),(M=I.onVnodeBeforeUpdate)&&Ie(M,p,c,f),T&&Qe(c,f,p,"beforeUpdate"),p&&et(p,!0);const U=h&&c.type!=="foreignObject";if(v?ut(f.dynamicChildren,v,x,p,g,U,w):k||Le(f,c,x,null,p,g,U,w,!1),_>0){if(_&16)Nt(x,c,E,I,p,g,h);else if(_&2&&E.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",E.style,I.style,h),_&8){const H=c.dynamicProps;for(let Y=0;Y<H.length;Y++){const V=H[Y],ye=E[V],pt=I[V];(pt!==ye||V==="value")&&i(x,V,ye,pt,h,f.children,p,g,De)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&Nt(x,c,E,I,p,g,h);((M=I.onVnodeUpdated)||T)&&ue(()=>{M&&Ie(M,p,c,f),T&&Qe(c,f,p,"updated")},g)},ut=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],T=_.el&&(_.type===ie||!Lt(_,v)||_.shapeFlag&70)?m(_.el):p;N(_,v,T,null,g,h,w,k,!0)}},Nt=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(on(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,De)}if(p!==W)for(const x in p)!on(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,De);"value"in g&&i(f,"value",p.value,g.value)}},Gt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),T=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(T,p,g),le(c.children,p,T,h,w,k,x,_)):E>0&&E&64&&I&&f.dynamicChildren?(ut(f.dynamicChildren,I,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&fo(f,c,!0)):Le(f,c,p,T,h,w,k,x,_)},ma=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):Hn(c,p,g,h,w,k,_):fe(f,c,_)},Hn=(f,c,p,g,h,w,k)=>{const x=f.component=Hl(f,g,h);if(Gi(f)&&(x.ctx.renderer=mt),Yl(x),x.asyncDep){if(h&&h.registerDep(x,J),!f.el){const _=x.subTree=ee(Kt);O(null,_,c,p)}return}J(x,f,c,p,h,w,k)},fe=(f,c,p)=>{const g=c.component=f.component;if(Zs(f,c,p))if(g.asyncDep&&!g.asyncResolved){q(g,c,p);return}else g.next=c,Ws(g.update),g.update();else c.el=f.el,g.vnode=c},J=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:T,bu:E,u:I,parent:M,vnode:U}=f,H=T,Y;et(f,!1),T?(T.el=U.el,q(f,T,k)):T=U,E&&sn(E),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Ie(Y,M,T,U),et(f,!0);const V=Vn(f),ye=f.subTree;f.subTree=V,N(ye,V,m(ye.el),Zt(ye),f,h,w),T.el=V.el,H===null&&Qs(f,V.el),I&&ue(I,h),(Y=T.props&&T.props.onVnodeUpdated)&&ue(()=>Ie(Y,M,T,U),h)}else{let T;const{el:E,props:I}=c,{bm:M,m:U,parent:H}=f,Y=fn(c);if(et(f,!1),M&&sn(M),!Y&&(T=I&&I.onVnodeBeforeMount)&&Ie(T,H,c),et(f,!0),E&&Kn){const V=()=>{f.subTree=Vn(f),Kn(E,f.subTree,f,h,null)};Y?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=Vn(f);N(null,V,p,g,f,h,w),c.el=V.el}if(U&&ue(U,h),!Y&&(T=I&&I.onVnodeMounted)){const V=c;ue(()=>Ie(T,H,V),h)}(c.shapeFlag&256||H&&fn(H.vnode)&&H.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new $r(x,()=>Bi(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,et(f,!0),v()},q=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Ol(f,c.props,g,p),Il(f,c.children,p),Et(),Mn(void 0,f.update),Tt()},Le=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,T=f?f.shapeFlag:0,E=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){St(v,E,p,g,h,w,k,x,_);return}else if(I&256){Yn(v,E,p,g,h,w,k,x,_);return}}M&8?(T&16&&De(v,h,w),E!==v&&d(p,E)):T&16?M&16?St(v,E,p,g,h,w,k,x,_):De(v,h,w,!0):(T&8&&d(p,""),M&16&&le(E,p,g,h,w,k,x,_))},Yn=(f,c,p,g,h,w,k,x,_)=>{f=f||wt,c=c||wt;const v=f.length,T=c.length,E=Math.min(v,T);let I;for(I=0;I<E;I++){const M=c[I]=_?qe(c[I]):Ne(c[I]);N(f[I],M,p,null,h,w,k,x,_)}v>T?De(f,h,w,!0,!1,E):le(c,p,g,h,w,k,x,_,E)},St=(f,c,p,g,h,w,k,x,_)=>{let v=0;const T=c.length;let E=f.length-1,I=T-1;for(;v<=E&&v<=I;){const M=f[v],U=c[v]=_?qe(c[v]):Ne(c[v]);if(Lt(M,U))N(M,U,p,null,h,w,k,x,_);else break;v++}for(;v<=E&&v<=I;){const M=f[E],U=c[I]=_?qe(c[I]):Ne(c[I]);if(Lt(M,U))N(M,U,p,null,h,w,k,x,_);else break;E--,I--}if(v>E){if(v<=I){const M=I+1,U=M<T?c[M].el:g;for(;v<=I;)N(null,c[v]=_?qe(c[v]):Ne(c[v]),p,U,h,w,k,x,_),v++}}else if(v>I)for(;v<=E;)He(f[v],h,w,!0),v++;else{const M=v,U=v,H=new Map;for(v=U;v<=I;v++){const me=c[v]=_?qe(c[v]):Ne(c[v]);me.key!=null&&H.set(me.key,v)}let Y,V=0;const ye=I-U+1;let pt=!1,ga=0;const Mt=new Array(ye);for(v=0;v<ye;v++)Mt[v]=0;for(v=M;v<=E;v++){const me=f[v];if(V>=ye){He(me,h,w,!0);continue}let Te;if(me.key!=null)Te=H.get(me.key);else for(Y=U;Y<=I;Y++)if(Mt[Y-U]===0&&Lt(me,c[Y])){Te=Y;break}Te===void 0?He(me,h,w,!0):(Mt[Te-U]=v+1,Te>=ga?ga=Te:pt=!0,N(me,c[Te],p,null,h,w,k,x,_),V++)}const va=pt?Ll(Mt):wt;for(Y=va.length-1,v=ye-1;v>=0;v--){const me=U+v,Te=c[me],ba=me+1<T?c[me+1].el:g;Mt[v]===0?N(null,Te,p,ba,h,w,k,x,_):pt&&(Y<0||v!==va[Y]?dt(Te,p,ba,2):Y--)}}},dt=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){dt(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,mt);return}if(k===ie){r(w,c,p);for(let E=0;E<_.length;E++)dt(_[E],c,p,g);r(f.anchor,c,p);return}if(k===Jn){$(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),ue(()=>x.enter(w),h);else{const{leave:E,delayLeave:I,afterLeave:M}=x,U=()=>r(w,c,p),H=()=>{E(w,()=>{U(),M&&M()})};I?I(w,U,H):H()}else r(w,c,p)},He=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:T,patchFlag:E,dirs:I}=f;if(x!=null&&pr(x,null,p,f,!0),T&256){c.ctx.deactivate(f);return}const M=T&1&&I,U=!fn(f);let H;if(U&&(H=k&&k.onVnodeBeforeUnmount)&&Ie(H,c,f),T&6)Xo(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}M&&Qe(f,null,c,"beforeUnmount"),T&64?f.type.remove(f,c,p,h,mt,g):v&&(w!==ie||E>0&&E&64)?De(v,c,p,!1,!0):(w===ie&&E&384||!h&&T&16)&&De(_,c,p),g&&pa(f)}(U&&(H=k&&k.onVnodeUnmounted)||M)&&ue(()=>{H&&Ie(H,c,f),M&&Qe(f,null,c,"unmounted")},p)},pa=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===ie){Vo(p,g);return}if(c===Jn){K(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},Vo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Xo=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&sn(g),h.stop(),w&&(w.active=!1,He(k,f,c,p)),x&&ue(x,c),ue(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},De=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)He(f[k],c,p,g,h)},Zt=f=>f.shapeFlag&6?Zt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ha=(f,c,p)=>{f==null?c._vnode&&He(c._vnode,null,null,!0):N(c._vnode||null,f,c,null,null,null,p),Wi(),c._vnode=f},mt={p:N,um:He,m:dt,r:pa,mt:Hn,mc:le,pc:Le,pbc:ut,n:Zt,o:e};let Wn,Kn;return t&&([Wn,Kn]=t(mt)),{render:ha,hydrate:Wn,createApp:Nl(ha,Wn)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||fo(o,s))}}function Ll(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Dl=e=>e.__isTeleport,ie=Symbol(void 0),Jr=Symbol(void 0),Kt=Symbol(void 0),Jn=Symbol(void 0),zt=[];let ke=null;function re(e=!1){zt.push(ke=e?null:[])}function Fl(){zt.pop(),ke=zt[zt.length-1]||null}let qt=1;function Fa(e){qt+=e}function Rl(e){return e.dynamicChildren=qt>0?ke||wt:null,Fl(),qt>0&&ke&&ke.push(e),e}function ae(e,t,n,r,a,i){return Rl(D(e,t,n,r,a,i,!0))}function hr(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Fn="__vInternal",co=({key:e})=>e!=null?e:null,cn=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||oe(e)||R(e)?{i:_e,r:e,k:t,f:!!n}:e:null;function D(e,t=null,n=null,r=0,a=null,i=e===ie?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&co(t),ref:t&&cn(t),scopeId:Vi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Gr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Z(n)?8:16),qt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const ee=jl;function jl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===vl)&&(e=Kt),hr(e)){const s=Ct(e,t,!0);return n&&Gr(s,n),qt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(Xl(e)&&(e=e.__vccOpts),t){t=$l(t);let{class:s,style:l}=t;s&&!Z(s)&&(t.class=Mr(s)),G(l)&&(ji(l)&&!L(l)&&(l=se({},l)),t.style=Sr(l))}const o=Z(e)?1:el(e)?128:Dl(e)?64:G(e)?4:R(e)?2:0;return D(e,t,n,r,a,o,i,!0)}function $l(e){return e?ji(e)||Fn in e?se({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?zl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&co(s),ref:t&&t.ref?n&&a?L(a)?a.concat(cn(t)):[a,cn(t)]:cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor}}function uo(e=" ",t=0){return ee(Jr,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?ee(Kt):L(e)?ee(ie,null,e.slice()):typeof e=="object"?qe(e):ee(Jr,null,String(e))}function qe(e){return e.el===null||e.memo?e:Ct(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Gr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Fn in t)?t._ctx=_e:a===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[uo(t)]):n=8);e.children=t,e.shapeFlag|=n}function zl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Mr([t.class,r.class]));else if(a==="style")t.style=Sr([t.style,r.style]);else if(En(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Oe(e,t,7,[n,r])}const Ul=lo();let Bl=0;function Hl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ul,i={uid:Bl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ls(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ao(r,a),emitsOptions:qi(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Vs.bind(null,i),e.ce&&e.ce(i),i}let Q=null;const Ot=e=>{Q=e,e.scope.on()},st=()=>{Q&&Q.scope.off(),Q=null};function mo(e){return e.vnode.shapeFlag&4}let Vt=!1;function Yl(e,t=!1){Vt=t;const{props:n,children:r}=e.vnode,a=mo(e);Cl(e,n,a,t),Tl(e,r);const i=a?Wl(e,t):void 0;return Vt=!1,i}function Wl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,yl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ql(e):null;Ot(e),Et();const i=Xe(r,e,0,[e.props,a]);if(Tt(),st(),Ai(i)){if(i.then(st,st),t)return i.then(o=>{Ra(e,o,t)}).catch(o=>{Sn(o,e,0)});e.asyncDep=i}else Ra(e,i,t)}else po(e,t)}function Ra(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=zi(t)),po(e,n)}let ja;function po(e,t,n){const r=e.type;if(!e.render){if(!t&&ja&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=se(se({isCustomElement:i,delimiters:s},o),l);r.render=ja(a,u)}}e.render=r.render||Ce}Ot(e),Et(),xl(e),Tt(),st()}function Kl(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function ql(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Kl(e))},slots:e.slots,emit:e.emit,expose:t}}function Rn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zi($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yn)return yn[n](e)}}))}function Vl(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Xl(e){return R(e)&&"__vccOpts"in e}const be=(e,t)=>Us(e,t,Vt);function ho(e,t,n){const r=arguments.length;return r===2?G(t)&&!L(t)?hr(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hr(n)&&(n=[n]),ee(e,t,n))}const Jl="3.2.37",Gl="http://www.w3.org/2000/svg",rt=typeof document<"u"?document:null,$a=rt&&rt.createElement("template"),Zl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?rt.createElementNS(Gl,e):rt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{$a.innerHTML=r?`<svg>${e}</svg>`:e;const s=$a.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ql(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ef(e,t,n){const r=e.style,a=Z(n);if(n&&!a){for(const i in n)gr(r,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&gr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const za=/\s*!important$/;function gr(e,t,n){if(L(n))n.forEach(r=>gr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=tf(e,t);za.test(n)?e.setProperty(ct(r),n.replace(za,""),"important"):e[r]=n}}const Ua=["Webkit","Moz","ms"],Gn={};function tf(e,t){const n=Gn[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return Gn[t]=r;r=Pn(r);for(let a=0;a<Ua.length;a++){const i=Ua[a]+r;if(i in e)return Gn[t]=i}return t}const Ba="http://www.w3.org/1999/xlink";function nf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ba,t.slice(6,t.length)):e.setAttributeNS(Ba,t,n);else{const i=Go(t);n==null||i&&!wi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function rf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=wi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[go,af]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let vr=0;const of=Promise.resolve(),sf=()=>{vr=0},lf=()=>vr||(of.then(sf),vr=go());function bt(e,t,n,r){e.addEventListener(t,n,r)}function ff(e,t,n,r){e.removeEventListener(t,n,r)}function cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=uf(t);if(r){const u=i[t]=df(r,a);bt(e,s,u,l)}else o&&(ff(e,s,o,l),i[t]=void 0)}}const Ha=/(?:Once|Passive|Capture)$/;function uf(e){let t;if(Ha.test(e)){t={};let n;for(;n=e.match(Ha);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[ct(e.slice(2)),t]}function df(e,t){const n=r=>{const a=r.timeStamp||go();(af||a>=n.attached-1)&&Oe(mf(r,n.value),t,5,[r])};return n.value=e,n.attached=lf(),n}function mf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ya=/^on[a-z]/,pf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Ql(e,r,a):t==="style"?ef(e,n,r):En(t)?Lr(t)||cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hf(e,t,r,a))?rf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),nf(e,t,r,a))};function hf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ya.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ya.test(t)&&Z(n)?!1:t in e}const Wa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>sn(t,n):t};function gf(e){e.target.composing=!0}function Ka(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Wa(a);const i=r||a.props&&a.props.type==="number";bt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=nr(s)),e._assign(s)}),n&&bt(e,"change",()=>{e.value=e.value.trim()}),t||(bt(e,"compositionstart",gf),bt(e,"compositionend",Ka),bt(e,"change",Ka))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Wa(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&nr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},bf=["ctrl","shift","alt","meta"],yf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>bf.some(n=>e[`${n}Key`]&&!t.includes(n))},ve=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=yf[t[a]];if(i&&i(n,t))return}return e(n,...r)},xf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wf=(e,t)=>n=>{if(!("key"in n))return;const r=ct(n.key);if(t.some(a=>a===r||xf[a]===r))return e(n)},_f=se({patchProp:pf},Zl);let qa;function kf(){return qa||(qa=Sl(_f))}const Af=(...e)=>{const t=kf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Cf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Cf(e){return Z(e)?document.querySelector(e):e}const Of="/tier-app/assets/dog-png.c858a2bf.png",Zr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Va="Click To Edit Title",Ef={name:"NavbarComp",emits:["showSettings"],data(){return{temporaryTitleText:Va,userTitleText:Va}},methods:{changeAppTheme:function(){const e=document.getElementById("theme-switcher"),t=e.getAttribute("data-theme");t==="dark"?e.setAttribute("data-theme","garden"):t==="garden"&&e.setAttribute("data-theme","dark")},changeTitle:function(e){const t=e.target.innerText;this.userTitleText=t}}},Tf={class:"shadow-lg h-12 p-2 flex justify-between items-center"},If={class:"pl-5"},Pf={class:"daisyui-tooltip daisyui-tooltip-bottom","data-tip":"theme"},Nf=uo(" / "),Sf={class:"flex items-center space-x-2"},Mf={class:"daisyui-tooltip daisyui-tooltip-bottom","data-tip":"click to change title"},Lf=D("div",{class:"flex items-center space-x-2"},[D("img",{src:Of,alt:"dog-logo",class:"w-10"}),D("h2",{class:"text-xl"},"Vue Tier App")],-1);function Df(e,t,n,r,a,i){const o=bn("font-awesome-icon");return re(),ae("nav",Tf,[D("div",If,[D("button",{class:"daisyui-btn daisyui-btn-sm lowercase no-animation",onClick:t[0]||(t[0]=(...s)=>e.changeAppTheme&&e.changeAppTheme(...s))},[D("div",Pf,[ee(o,{icon:"fa-sun",class:"text-yellow-500"}),Nf,ee(o,{icon:"fa-moon"})])])]),D("div",Sf,[D("div",Mf,[D("h1",{class:"text-3xl outline-none",contenteditable:"true",onInput:t[1]||(t[1]=s=>e.changeTitle(s))},tt(a.temporaryTitleText),33)])]),Lf])}const Ff=Zr(Ef,[["render",Df]]);class Rf{constructor(t,n){this.name=t,this.tier=n}}const jf={name:"MainComp",emits:["changeTheme"],data(){return{tierItems:[],itemName:""}},methods:{addNewTierItem:function(){this.tierItems.push(new Rf(this.itemName,"")),this.itemName=""},startingDrag:function(e,t){e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("itemIndex",this.tierItems.indexOf(t))},itemDropped:function(e,t){const n=e.dataTransfer.getData("itemIndex");e.dataTransfer.clearData(),this.tierItems[n].tier=t}},computed:{untieredItems(){return this.tierItems.filter(e=>e.tier==="")},tierAItems(){return this.tierItems.filter(e=>e.tier==="A")},tierBItems(){return this.tierItems.filter(e=>e.tier==="B")},tierCItems(){return this.tierItems.filter(e=>e.tier==="C")},tierDItems(){return this.tierItems.filter(e=>e.tier==="D")},tierEItems(){return this.tierItems.filter(e=>e.tier==="E")}},mounted(){alert("click on any tier title (e.g 'Tier A') to change it's name")}},$f={class:"flex flex-col h-full"},zf={class:"flex flex-col items-center w-full h-full"},Uf=D("h1",{class:"text-xl"},"Add new tier items",-1),Bf={class:"relative border-2 border-primary rounded"},Hf=D("span",null,"Add",-1),Yf={class:"flex flex-col h-full w-full mt-4"},Wf={class:"shadow shadow-primary h-fit flex"},Kf=D("div",{class:"h-20 flex justify-start items-center w-[20%] pl-2"},[D("h1",{class:"text-3xl outline-none",contenteditable:"true"},"Tier A")],-1),qf=["onDragstart"],Vf={class:"shadow shadow-primary h-fit flex"},Xf=D("div",{class:"h-20 flex justify-start items-center w-[20%] pl-2"},[D("h1",{class:"text-3xl outline-none",contenteditable:"true"},"Tier B")],-1),Jf=["onDragstart"],Gf={class:"shadow shadow-primary h-fit flex"},Zf=D("div",{class:"h-20 flex justify-start items-center w-[20%] pl-2"},[D("h1",{class:"text-3xl outline-none",contenteditable:"true"},"Tier C")],-1),Qf=["onDragstart"],ec={class:"shadow shadow-primary h-fit flex"},tc=D("div",{class:"h-20 flex justify-start items-center w-[20%] pl-2"},[D("h1",{class:"text-3xl outline-none",contenteditable:"true"},"Tier D")],-1),nc=["onDragstart"],rc={class:"shadow shadow-primary h-fit flex"},ac=D("div",{class:"h-20 flex justify-start items-center w-[20%] pl-2"},[D("h1",{class:"text-3xl outline-none",contenteditable:"true"},"Tier E")],-1),ic=["onDragstart"],oc={class:"shadow shadow-primary h-fit flex"},sc=D("div",{class:"h-20 flex justify-start items-center w-[20%] pl-2"},[D("h1",{class:"text-3xl outline-none"},"Tier Items")],-1),lc=["onDragstart"];function fc(e,t,n,r,a,i){const o=bn("font-awesome-icon");return re(),ae("div",$f,[D("div",zf,[Uf,D("div",Bf,[gl(D("input",{type:"text",class:"w-[28rem] h-9 rounded outline-none p-2 text-black/75 bg-transparent text-primary",maxlength:"40","onUpdate:modelValue":t[0]||(t[0]=s=>a.itemName=s),placeholder:"item name e.g Mango",onKeypress:t[1]||(t[1]=wf((...s)=>e.addNewTierItem&&e.addNewTierItem(...s),["enter"]))},null,544),[[vf,a.itemName]]),D("button",{class:"daisyui-btn daisyui-btn-sm absolute w-fit right-0.5 top-0.5 rounded no-animation space-x-1",onClick:t[2]||(t[2]=(...s)=>e.addNewTierItem&&e.addNewTierItem(...s))},[Hf,ee(o,{icon:"fa-solid fa-plus"})])]),D("div",Yf,[D("div",Wf,[Kf,D("div",{class:"min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2",onDragover:t[3]||(t[3]=ve(()=>{},["prevent"])),onDragenter:t[4]||(t[4]=ve(()=>{},["prevent"])),onDrop:t[5]||(t[5]=s=>e.itemDropped(s,"A"))},[(re(!0),ae(ie,null,ht(e.tierAItems,s=>(re(),ae("p",{class:"bg-primary/75 p-2 rounded text-xl m-2",key:s.index,draggable:"true",onDragstart:l=>e.startingDrag(l,s)},tt(s.name),41,qf))),128))],32)]),D("div",Vf,[Xf,D("div",{class:"min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2",onDragover:t[6]||(t[6]=ve(()=>{},["prevent"])),onDragenter:t[7]||(t[7]=ve(()=>{},["prevent"])),onDrop:t[8]||(t[8]=s=>e.itemDropped(s,"B"))},[(re(!0),ae(ie,null,ht(e.tierBItems,s=>(re(),ae("p",{class:"bg-primary/75 p-2 rounded text-xl m-2",key:s.index,draggable:"true",onDragstart:l=>e.startingDrag(l,s)},tt(s.name),41,Jf))),128))],32)]),D("div",Gf,[Zf,D("div",{class:"min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2",onDragover:t[9]||(t[9]=ve(()=>{},["prevent"])),onDragenter:t[10]||(t[10]=ve(()=>{},["prevent"])),onDrop:t[11]||(t[11]=s=>e.itemDropped(s,"C"))},[(re(!0),ae(ie,null,ht(e.tierCItems,s=>(re(),ae("p",{class:"bg-primary/75 p-2 rounded text-xl m-2",key:s.index,draggable:"true",onDragstart:l=>e.startingDrag(l,s)},tt(s.name),41,Qf))),128))],32)]),D("div",ec,[tc,D("div",{class:"min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2",onDragover:t[12]||(t[12]=ve(()=>{},["prevent"])),onDragenter:t[13]||(t[13]=ve(()=>{},["prevent"])),onDrop:t[14]||(t[14]=s=>e.itemDropped(s,"D"))},[(re(!0),ae(ie,null,ht(e.tierDItems,s=>(re(),ae("p",{class:"bg-primary/75 p-2 rounded text-xl m-2",key:s.index,draggable:"true",onDragstart:l=>e.startingDrag(l,s)},tt(s.name),41,nc))),128))],32)]),D("div",rc,[ac,D("div",{class:"min-h-20 border-l-2 border-l-primary h-auto flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2",onDragover:t[15]||(t[15]=ve(()=>{},["prevent"])),onDragenter:t[16]||(t[16]=ve(()=>{},["prevent"])),onDrop:t[17]||(t[17]=s=>e.itemDropped(s,"E"))},[(re(!0),ae(ie,null,ht(e.tierEItems,s=>(re(),ae("p",{class:"bg-primary/75 p-2 rounded text-xl m-2",key:s.index,draggable:"true",onDragstart:l=>e.startingDrag(l,s)},tt(s.name),41,ic))),128))],32)]),D("div",oc,[sc,D("div",{class:"min-h-20 border-l-2 border-l-primary flex items-center w-[80%] pl-2 space-x-2 flex-wrap p-2",onDragover:t[18]||(t[18]=ve(()=>{},["prevent"])),onDragenter:t[19]||(t[19]=ve(()=>{},["prevent"])),onDrop:t[20]||(t[20]=s=>e.itemDropped(s,""))},[(re(!0),ae(ie,null,ht(e.untieredItems,s=>(re(),ae("p",{class:"bg-primary/75 p-2 rounded text-xl m-2",key:s.index,draggable:"true",onDragstart:l=>e.startingDrag(l,s)},tt(s.name),41,lc))),128))],32)])])])])}const cc=Zr(jf,[["render",fc]]),uc={components:{NavbarComp:Ff,MainComp:cc},data(){return{hideSettings:!0}}},dc={class:"relative h-screen max-h-screen flex flex-col"};function mc(e,t,n,r,a,i){const o=bn("navbar-comp"),s=bn("main-comp");return re(),ae("div",dc,[ee(o),ee(s)])}const pc=Zr(uc,[["render",mc]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Xa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xa(Object(n),!0).forEach(function(r){vc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wn(e){return wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wn(e)}function hc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ja(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function gc(e,t,n){return t&&Ja(e.prototype,t),n&&Ja(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function vc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qr(e,t){return yc(e)||wc(e,t)||vo(e,t)||kc()}function jn(e){return bc(e)||xc(e)||vo(e)||_c()}function bc(e){if(Array.isArray(e))return br(e)}function yc(e){if(Array.isArray(e))return e}function xc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function vo(e,t){if(!!e){if(typeof e=="string")return br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return br(e,t)}}function br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ga=function(){},ea={},bo={},yo=null,xo={mark:Ga,measure:Ga};try{typeof window<"u"&&(ea=window),typeof document<"u"&&(bo=document),typeof MutationObserver<"u"&&(yo=MutationObserver),typeof performance<"u"&&(xo=performance)}catch{}var Ac=ea.navigator||{},Za=Ac.userAgent,Qa=Za===void 0?"":Za,Ge=ea,X=bo,ei=yo,an=xo;Ge.document;var Be=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",wo=~Qa.indexOf("MSIE")||~Qa.indexOf("Trident/"),je="___FONT_AWESOME___",yr=16,_o="fa",ko="svg-inline--fa",lt="data-fa-i2svg",xr="data-fa-pseudo-element",Cc="data-fa-pseudo-element-pending",ta="data-prefix",na="data-icon",ti="fontawesome-i2svg",Oc="async",Ec=["HTML","HEAD","STYLE","SCRIPT"],Ao=function(){try{return!0}catch{return!1}}(),ra={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},_n={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Co={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Tc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ic=/fa[srltdbk]?[\-\ ]/,Oo="fa-layers-text",Pc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Nc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Eo=[1,2,3,4,5,6,7,8,9,10],Sc=Eo.concat([11,12,13,14,15,16,17,18,19,20]),Mc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Lc=[].concat(jn(Object.keys(_n)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(Eo.map(function(e){return"".concat(e,"x")})).concat(Sc.map(function(e){return"w-".concat(e)})),To=Ge.FontAwesomeConfig||{};function Dc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Rc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rc.forEach(function(e){var t=Qr(e,2),n=t[0],r=t[1],a=Fc(Dc(n));a!=null&&(To[r]=a)})}var jc={familyPrefix:_o,styleDefault:"solid",replacementClass:ko,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ut=A(A({},jc),To);Ut.autoReplaceSvg||(Ut.observeMutations=!1);var P={};Object.keys(Ut).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Ut[e]=n,un.forEach(function(r){return r(P)})},get:function(){return Ut[e]}})});Ge.FontAwesomeConfig=P;var un=[];function $c(e){return un.push(e),function(){un.splice(un.indexOf(e),1)}}var We=yr,Se={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zc(e){if(!(!e||!Be)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Uc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xt(){for(var e=12,t="";e-- >0;)t+=Uc[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function aa(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Io(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Io(e[n]),'" ')},"").trim()}function $n(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ia(e){return e.size!==Se.size||e.x!==Se.x||e.y!==Se.y||e.rotate!==Se.rotate||e.flipX||e.flipY}function Hc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Yc(e){var t=e.transform,n=e.width,r=n===void 0?yr:n,a=e.height,i=a===void 0?yr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&wo?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wc=`:root, :host {
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
}`;function Po(){var e=_o,t=ko,n=P.familyPrefix,r=P.replacementClass,a=Wc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ni=!1;function Zn(){P.autoAddCss&&!ni&&(zc(Po()),ni=!0)}var Kc={mixout:function(){return{dom:{css:Po,insertCss:Zn}}},hooks:function(){return{beforeDOMElementCreation:function(){Zn()},beforeI2svg:function(){Zn()}}}},$e=Ge||{};$e[je]||($e[je]={});$e[je].styles||($e[je].styles={});$e[je].hooks||($e[je].hooks={});$e[je].shims||($e[je].shims=[]);var Ae=$e[je],No=[],qc=function e(){X.removeEventListener("DOMContentLoaded",e),kn=1,No.map(function(t){return t()})},kn=!1;Be&&(kn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),kn||X.addEventListener("DOMContentLoaded",qc));function Vc(e){!Be||(kn?setTimeout(e,0):No.push(e))}function Jt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Io(e):"<".concat(t," ").concat(Bc(r),">").concat(i.map(Jt).join(""),"</").concat(t,">")}function ri(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Xc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Qn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Xc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Jc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function wr(e){var t=Jc(e);return t.length===1?t[0].toString(16):null}function Gc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ai(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function _r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ai(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,ai(t)):Ae.styles[e]=A(A({},Ae.styles[e]||{}),i),e==="fas"&&_r("fa",t)}var Bt=Ae.styles,Zc=Ae.shims,Qc=Object.values(Co),oa=null,So={},Mo={},Lo={},Do={},Fo={},eu=Object.keys(ra);function tu(e){return~Lc.indexOf(e)}function nu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!tu(a)?a:null}var Ro=function(){var t=function(i){return Qn(Bt,function(o,s,l){return o[l]=Qn(s,i,{}),o},{})};So=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Mo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Fo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Bt||P.autoFetchSvg,r=Qn(Zc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Lo=r.names,Do=r.unicodes,oa=zn(P.styleDefault)};$c(function(e){oa=zn(e.styleDefault)});Ro();function sa(e,t){return(So[e]||{})[t]}function ru(e,t){return(Mo[e]||{})[t]}function yt(e,t){return(Fo[e]||{})[t]}function jo(e){return Lo[e]||{prefix:null,iconName:null}}function au(e){var t=Do[e],n=sa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return oa}var la=function(){return{prefix:null,iconName:null,rest:[]}};function zn(e){var t=ra[e],n=_n[e]||_n[t],r=e in Ae.styles?e:null;return n||r||null}function Un(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=nu(P.familyPrefix,s);if(Bt[s]?(s=Qc.includes(s)?Tc[s]:s,a=s,o.prefix=s):eu.indexOf(s)>-1?(a=s,o.prefix=zn(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?jo(o.iconName):{},d=yt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Bt.far&&Bt.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},la());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ze()||"fas"),i}var iu=function(){function e(){hc(this,e),this.definitions={}}return gc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),_r(s,o[s]);var l=Co[s];l&&_r(l,o[s]),Ro()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ii=[],xt={},At={},ou=Object.keys(At);function su(e,t){var n=t.mixoutsTo;return ii=e,xt={},Object.keys(At).forEach(function(r){ou.indexOf(r)===-1&&delete At[r]}),ii.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),wn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(At)}),n}function kr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ft(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return At[e]?At[e].apply(null,t):void 0}function Ar(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(!!t)return t=yt(n,t)||t,ri($o.definitions,n,t)||ri(Ae.styles,n,t)}var $o=new iu,lu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,ft("noAuto")},fu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(ft("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Vc(function(){uu({autoReplaceSvgRoot:n}),ft("watch",t)})}},cu={icon:function(t){if(t===null)return null;if(wn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zn(t[0]);return{prefix:r,iconName:yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.familyPrefix,"-"))>-1||t.match(Ic))){var a=Un(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:yt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:yt(i,t)||t}}}},ge={noAuto:lu,config:P,dom:fu,parse:cu,library:$o,findIconDefinition:Ar,toHtml:Jt},uu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ae.styles).length>0||P.autoFetchSvg)&&Be&&P.autoReplaceSvg&&ge.dom.i2svg({node:r})};function Bn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Jt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Be){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function du(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ia(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=$n(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function mu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function fa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,C=b===void 0?!1:b,F=r.found?r:n,j=F.width,N=F.height,y=a==="fak",O=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(le){return m.classes.indexOf(le)===-1}).filter(function(le){return le!==""||!!le}).concat(m.classes).join(" "),S={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(N)})},$=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/N*16*.0625,"em")}:{};C&&(S.attributes[lt]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(d||Xt())},children:[l]}),delete S.attributes.title);var K=A(A({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},$),m.styles)}),te=r.found&&n.found?ze("generateAbstractMask",K)||{children:[],attributes:{}}:ze("generateAbstractIcon",K)||{children:[],attributes:{}},de=te.children,Ee=te.attributes;return K.children=de,K.attributes=Ee,s?mu(K):du(K)}function oi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[lt]="");var d=A({},o.styles);ia(a)&&(d.transform=Yc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=$n(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function pu(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=$n(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var er=Ae.styles;function Cr(e){var t=e[0],n=e[1],r=e.slice(4),a=Qr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(it.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(it.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(it.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var hu={found:!1,width:512,height:512};function gu(e,t){!Ao&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Or(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=jo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&er[t]&&er[t][e]){var o=er[t][e];return r(Cr(o))}gu(e,t),r(A(A({},hu),{},{icon:P.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var si=function(){},Er=P.measurePerformance&&an&&an.mark&&an.measure?an:{mark:si,measure:si},Rt='FA "6.1.2"',vu=function(t){return Er.mark("".concat(Rt," ").concat(t," begins")),function(){return zo(t)}},zo=function(t){Er.mark("".concat(Rt," ").concat(t," ends")),Er.measure("".concat(Rt," ").concat(t),"".concat(Rt," ").concat(t," begins"),"".concat(Rt," ").concat(t," ends"))},ca={begin:vu,end:zo},dn=function(){};function li(e){var t=e.getAttribute?e.getAttribute(lt):null;return typeof t=="string"}function bu(e){var t=e.getAttribute?e.getAttribute(ta):null,n=e.getAttribute?e.getAttribute(na):null;return t&&n}function yu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function xu(){if(P.autoReplaceSvg===!0)return mn.replace;var e=mn[P.autoReplaceSvg];return e||mn.replace}function wu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function _u(e){return X.createElement(e)}function Uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?wu:_u:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Uo(o,{ceFn:r}))}),a}function ku(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Uo(a),n)}),n.getAttribute(lt)===null&&P.keepOriginalSource){var r=X.createComment(ku(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~aa(n).indexOf(P.replacementClass))return mn.replace(t);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Jt(s)}).join(`
`);n.setAttribute(lt,""),n.innerHTML=o}};function fi(e){e()}function Bo(e,t){var n=typeof t=="function"?t:dn;if(e.length===0)n();else{var r=fi;P.mutateApproach===Oc&&(r=Ge.requestAnimationFrame||fi),r(function(){var a=xu(),i=ca.begin("mutate");e.map(a),i(),n()})}}var ua=!1;function Ho(){ua=!0}function Tr(){ua=!1}var An=null;function ci(e){if(!!ei&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?dn:t,r=e.nodeCallback,a=r===void 0?dn:r,i=e.pseudoElementsCallback,o=i===void 0?dn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;An=new ei(function(u){if(!ua){var d=Ze();It(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!li(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&li(m.target)&&~Mc.indexOf(m.attributeName))if(m.attributeName==="class"&&bu(m.target)){var b=Un(aa(m.target)),C=b.prefix,F=b.iconName;m.target.setAttribute(ta,C||d),F&&m.target.setAttribute(na,F)}else yu(m.target)&&a(m.target)})}}),Be&&An.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Au(){!An||An.disconnect()}function Cu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ou(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Un(aa(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ru(a.prefix,e.innerText)||sa(a.prefix,wr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Eu(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Xt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Tu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Se,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ou(e),r=n.iconName,a=n.prefix,i=n.rest,o=Eu(e),s=kr("parseNodeAttributes",{},e),l=t.styleParser?Cu(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Se,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Iu=Ae.styles;function Yo(e){var t=P.autoReplaceSvg==="nest"?ui(e,{styleParser:!1}):ui(e);return~t.extra.classes.indexOf(Oo)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}function di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ti,"-").concat(m))},a=function(m){return n.remove("".concat(ti,"-").concat(m))},i=P.autoFetchSvg?Object.keys(ra):Object.keys(Iu);i.includes("fa")||i.push("fa");var o=[".".concat(Oo,":not([").concat(lt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(lt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ca.begin("onTree"),u=s.reduce(function(d,m){try{var b=Yo(m);b&&d.push(b)}catch(C){Ao||C.name==="MissingIcon"&&console.error(C)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Bo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Pu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yo(e).then(function(n){n&&Bo([n],t)})}function Nu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ar(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ar(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Su=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Se:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,C=n.titleId,F=C===void 0?null:C,j=n.classes,N=j===void 0?[]:j,y=n.attributes,O=y===void 0?{}:y,S=n.styles,$=S===void 0?{}:S;if(!!t){var K=t.prefix,te=t.iconName,de=t.icon;return Bn(A({type:"icon"},t),function(){return ft("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(b?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(F||Xt()):(O["aria-hidden"]="true",O.focusable="false")),fa({icons:{main:Cr(de),mask:l?Cr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:te,transform:A(A({},Se),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:O,styles:$,classes:N}})})}},Mu={mixout:function(){return{icon:Nu(Su)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=di,n.nodeCallback=Pu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return di(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(C,F){Promise.all([Or(a,s),d.iconName?Or(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var N=Qr(j,2),y=N[0],O=N[1];C([n,fa({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=$n(s);l.length>0&&(a.style=l);var u;return ia(o)&&(u=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Lu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Bn({type:"layer"},function(){ft("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(jn(i)).join(" ")},children:o}]})}}}},Du={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Bn({type:"counter",content:n},function(){return ft("beforeDOMElementCreation",{content:n,params:r}),pu({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(jn(s))}})})}}}},Fu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Se:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,C=b===void 0?{}:b;return Bn({type:"text",content:n},function(){return ft("beforeDOMElementCreation",{content:n,params:r}),oi({content:n,transform:A(A({},Se),i),title:s,extra:{attributes:m,styles:C,classes:["".concat(P.familyPrefix,"-layers-text")].concat(jn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(wo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,oi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ru=new RegExp('"',"ug"),mi=[1105920,1112319];function ju(e){var t=e.replace(Ru,""),n=Gc(t,0),r=n>=mi[0]&&n<=mi[1],a=t.length===2?t[0]===t[1]:!1;return{value:wr(a?t[0]:t),isSecondary:r||a}}function pi(e,t){var n="".concat(Cc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),o=i.filter(function(te){return te.getAttribute(xr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Pc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_n[l[2].toLowerCase()]:Nc[u],C=ju(m),F=C.value,j=C.isSecondary,N=l[0].startsWith("FontAwesome"),y=sa(b,F),O=y;if(N){var S=au(F);S.iconName&&S.prefix&&(y=S.iconName,b=S.prefix)}if(y&&!j&&(!o||o.getAttribute(ta)!==b||o.getAttribute(na)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var $=Tu(),K=$.extra;K.attributes[xr]=t,Or(y,b).then(function(te){var de=fa(A(A({},$),{},{icons:{main:te,mask:la()},prefix:b,iconName:O,extra:K,watchable:!0})),Ee=X.createElement("svg");t==="::before"?e.insertBefore(Ee,e.firstChild):e.appendChild(Ee),Ee.outerHTML=de.map(function(le){return Jt(le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function $u(e){return Promise.all([pi(e,"::before"),pi(e,"::after")])}function zu(e){return e.parentNode!==document.head&&!~Ec.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(xr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function hi(e){if(!!Be)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(zu).map($u),a=ca.begin("searchPseudoElements");Ho(),Promise.all(r).then(function(){a(),Tr(),t()}).catch(function(){a(),Tr(),n()})})}var Uu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=hi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&hi(a)}}},gi=!1,Bu={mixout:function(){return{dom:{unwatch:function(){Ho(),gi=!0}}}},hooks:function(){return{bootstrap:function(){ci(kr("mutationObserverCallbacks",{}))},noAuto:function(){Au()},watch:function(n){var r=n.observeMutationsRoot;gi?Tr():ci(kr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Hu={mixout:function(){return{parse:{transform:function(n){return vi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=vi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},C={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},C.outer),children:[{tag:"g",attributes:A({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),C.path)}]}]}}}},tr={x:0,y:0,width:"100%",height:"100%"};function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Yu(e){return e.tag==="g"?e.children:[e]}var Wu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Un(a.split(" ").map(function(o){return o.trim()})):la();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,C=Hc({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:A(A({},tr),{},{fill:"white"})},j=d.children?{children:d.children.map(bi)}:{},N={tag:"g",attributes:A({},C.inner),children:[bi(A({tag:d.tag,attributes:A(A({},d.attributes),C.path)},j))]},y={tag:"g",attributes:A({},C.outer),children:[N]},O="mask-".concat(s||Xt()),S="clip-".concat(s||Xt()),$={tag:"mask",attributes:A(A({},tr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Yu(b)},$]};return r.push(K,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(O,")")},tr)}),{children:r,attributes:a}}}},Ku={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Vu=[Kc,Mu,Lu,Du,Fu,Uu,Bu,Hu,Wu,Ku,qu];su(Vu,{mixoutsTo:ge});ge.noAuto;var Wo=ge.config,Xu=ge.library;ge.dom;var Cn=ge.parse;ge.findIconDefinition;ge.toHtml;var Ju=ge.icon;ge.layer;var Gu=ge.text;ge.counter;/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Zu={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]},Qu={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"]},ed={prefix:"fas",iconName:"pencil",icon:[512,512,[61504,9999,"pencil-alt"],"f303","M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"]},td={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]},nd={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"]};function yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function On(e){return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ad(e,t){if(e==null)return{};var n=rd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Ir(e){return id(e)||od(e)||sd(e)||ld()}function id(e){if(Array.isArray(e))return Pr(e)}function od(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sd(e,t){if(!!e){if(typeof e=="string")return Pr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pr(e,t)}}function Pr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ld(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ko={exports:{}};(function(e){(function(t){var n=function(y,O,S){if(!u(O)||m(O)||b(O)||C(O)||l(O))return O;var $,K=0,te=0;if(d(O))for($=[],te=O.length;K<te;K++)$.push(n(y,O[K],S));else{$={};for(var de in O)Object.prototype.hasOwnProperty.call(O,de)&&($[y(de,S)]=n(y,O[de],S))}return $},r=function(y,O){O=O||{};var S=O.separator||"_",$=O.split||/(?=[A-Z])/;return y.split($).join(S)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,S){return S?S.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},C=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},j=function(y,O){var S=O&&"process"in O?O.process:O;return typeof S!="function"?y:function($,K){return S($,y,K)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(j(a,O),y)},decamelizeKeys:function(y,O){return n(j(o,O),y,O)},pascalizeKeys:function(y,O){return n(j(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(fd)})(Ko);var cd=Ko.exports,ud=["class","style"];function dd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=cd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function md(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return da(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=md(d);break;case"style":l.style=dd(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ad(n,ud);return ho(e.tag,we(we(we({},t),{},{class:a.class,style:we(we({},a.style),o)},a.attrs),s),r)}var qo=!1;try{qo=!0}catch{}function pd(){if(!qo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function hd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xi(e){if(e&&On(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Cn.icon)return Cn.icon(e);if(e===null)return null;if(On(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var gd=Vr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=be(function(){return xi(t.icon)}),i=be(function(){return Ht("classes",hd(t))}),o=be(function(){return Ht("transform",typeof t.transform=="string"?Cn.transform(t.transform):t.transform)}),s=be(function(){return Ht("mask",xi(t.mask))}),l=be(function(){return Ju(a.value,we(we(we(we({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});ln(l,function(d){if(!d)return pd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=be(function(){return l.value?da(l.value.abstract[0],{},r):null});return function(){return u.value}}});Vr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Wo.familyPrefix,i=be(function(){return["".concat(a,"-layers")].concat(Ir(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ho("div",{class:i.value},r.default?r.default():[])}}});Vr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Wo.familyPrefix,i=be(function(){return Ht("classes",[].concat(Ir(t.counter?["".concat(a,"-layers-counter")]:[]),Ir(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=be(function(){return Ht("transform",typeof t.transform=="string"?Cn.transform(t.transform):t.transform)}),s=be(function(){var u=Gu(t.value.toString(),we(we({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=be(function(){return da(s.value,{},r)});return function(){return l.value}}});Xu.add(nd,Qu,Zu,ed,td);const vd=Af(pc);vd.component("font-awesome-icon",gd).mount("#app");
