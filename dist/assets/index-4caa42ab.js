(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=r(t);fetch(t.href,l)}})();function K(){}const Au=a=>a;function z(a,e){for(const r in e)a[r]=e[r];return a}function Bu(a){return a()}function xi(){return Object.create(null)}function Be(a){a.forEach(Bu)}function Qr(a){return typeof a=="function"}function te(a,e){return a!=a?e==e:a!==e||a&&typeof a=="object"||typeof a=="function"}let Ht;function oa(a,e){return a===e?!0:(Ht||(Ht=document.createElement("a")),Ht.href=e,a===Ht.href)}function Ou(a,e){return a!=a?e==e:a!==e}function af(a){return Object.keys(a).length===0}function ba(a,...e){if(a==null){for(const o of e)o(void 0);return K}const r=a.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function $a(a,e,r){a.$$.on_destroy.push(ba(e,r))}function ne(a,e,r,o){if(a){const t=Ru(a,e,r,o);return a[0](t)}}function Ru(a,e,r,o){return a[1]&&o?z(r.ctx.slice(),a[1](o(e))):r.ctx}function le(a,e,r,o){if(a[2]&&o){const t=a[2](o(r));if(e.dirty===void 0)return t;if(typeof t=="object"){const l=[],n=Math.max(e.dirty.length,t.length);for(let i=0;i<n;i+=1)l[i]=e.dirty[i]|t[i];return l}return e.dirty|t}return e.dirty}function ie(a,e,r,o,t,l){if(t){const n=Ru(e,r,o,l);a.p(n,t)}}function se(a){if(a.ctx.length>32){const e=[],r=a.ctx.length/32;for(let o=0;o<r;o++)e[o]=-1;return e}return-1}function $e(a){const e={};for(const r in a)r[0]!=="$"&&(e[r]=a[r]);return e}function Ue(a,e){const r={};e=new Set(e);for(const o in a)!e.has(o)&&o[0]!=="$"&&(r[o]=a[o]);return r}function Ft(a,e,r){return a.set(r),e}function ht(a){return a&&Qr(a.destroy)?a.destroy:K}const Nu=typeof window<"u";let Eu=Nu?()=>window.performance.now():()=>Date.now(),ql=Nu?a=>requestAnimationFrame(a):K;const lo=new Set;function ju(a){lo.forEach(e=>{e.c(a)||(lo.delete(e),e.f())}),lo.size!==0&&ql(ju)}function Fu(a){let e;return lo.size===0&&ql(ju),{promise:new Promise(r=>{lo.add(e={c:a,f:r})}),abort(){lo.delete(e)}}}const rf=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function B(a,e){a.appendChild(e)}function Wu(a){if(!a)return document;const e=a.getRootNode?a.getRootNode():a.ownerDocument;return e&&e.host?e:a.ownerDocument}function of(a){const e=P("style");return e.textContent="/* empty */",tf(Wu(a),e),e.sheet}function tf(a,e){return B(a.head||a,e),e.sheet}function S(a,e,r){a.insertBefore(e,r||null)}function y(a){a.parentNode&&a.parentNode.removeChild(a)}function ua(a,e){for(let r=0;r<a.length;r+=1)a[r]&&a[r].d(e)}function P(a){return document.createElement(a)}function oe(a){return document.createTextNode(a)}function F(){return oe(" ")}function Pe(){return oe("")}function H(a,e,r,o){return a.addEventListener(e,r,o),()=>a.removeEventListener(e,r,o)}function xu(a){return function(e){return e.stopPropagation(),a.call(this,e)}}function C(a,e,r){r==null?a.removeAttribute(e):a.getAttribute(e)!==r&&a.setAttribute(e,r)}const nf=["width","height"];function W(a,e){const r=Object.getOwnPropertyDescriptors(a.__proto__);for(const o in e)e[o]==null?a.removeAttribute(o):o==="style"?a.style.cssText=e[o]:o==="__value"?a.value=a[o]=e[o]:r[o]&&r[o].set&&nf.indexOf(o)===-1?a[o]=e[o]:C(a,o,e[o])}function lf(a){let e;return{p(...r){e=r,e.forEach(o=>a.push(o))},r(){e.forEach(r=>a.splice(a.indexOf(r),1))}}}function fl(a){return a===""?null:+a}function sf(a){return Array.from(a.childNodes)}function Je(a,e){e=""+e,a.data!==e&&(a.data=e)}function xe(a,e){a.value=e??""}function we(a,e,r,o){r==null?a.style.removeProperty(e):a.style.setProperty(e,r,o?"important":"")}function Ut(a,e,r){for(let o=0;o<a.options.length;o+=1){const t=a.options[o];if(t.__value===e){t.selected=!0;return}}(!r||e!==void 0)&&(a.selectedIndex=-1)}function Di(a,e){for(let r=0;r<a.options.length;r+=1){const o=a.options[r];o.selected=~e.indexOf(o.__value)}}function uf(a){const e=a.querySelector(":checked");return e&&e.__value}let Lt;function _f(){if(Lt===void 0){Lt=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{Lt=!0}}return Lt}function Xn(a,e){getComputedStyle(a).position==="static"&&(a.style.position="relative");const o=P("iframe");o.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),o.setAttribute("aria-hidden","true"),o.tabIndex=-1;const t=_f();let l;return t?(o.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=H(window,"message",n=>{n.source===o.contentWindow&&e()})):(o.src="about:blank",o.onload=()=>{l=H(o.contentWindow,"resize",e),e()}),B(a,o),()=>{(t||l&&o.contentWindow)&&l(),y(o)}}function la(a,e,r){a.classList.toggle(e,!!r)}function Du(a,e,{bubbles:r=!1,cancelable:o=!1}={}){return new CustomEvent(a,{detail:e,bubbles:r,cancelable:o})}function Jt(a,e){return new a(e)}const Zt=new Map;let Xt=0;function pf(a){let e=5381,r=a.length;for(;r--;)e=(e<<5)-e^a.charCodeAt(r);return e>>>0}function cf(a,e){const r={stylesheet:of(e),rules:{}};return Zt.set(a,r),r}function zu(a,e,r,o,t,l,n,i=0){const s=16.666/o;let u=`{
`;for(let M=0;M<=1;M+=s){const b=e+(r-e)*l(M);u+=M*100+`%{${n(b,1-b)}}
`}const _=u+`100% {${n(r,1-r)}}
}`,p=`__svelte_${pf(_)}_${i}`,c=Wu(a),{stylesheet:h,rules:f}=Zt.get(c)||cf(c,a);f[p]||(f[p]=!0,h.insertRule(`@keyframes ${p} ${_}`,h.cssRules.length));const d=a.style.animation||"";return a.style.animation=`${d?`${d}, `:""}${p} ${o}ms linear ${t}ms 1 both`,Xt+=1,p}function dl(a,e){const r=(a.style.animation||"").split(", "),o=r.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),t=r.length-o.length;t&&(a.style.animation=o.join(", "),Xt-=t,Xt||hf())}function hf(){ql(()=>{Xt||(Zt.forEach(a=>{const{ownerNode:e}=a.stylesheet;e&&y(e)}),Zt.clear())})}let et;function zo(a){et=a}function vo(){if(!et)throw new Error("Function called outside component initialization");return et}function ft(a){vo().$$.on_mount.push(a)}function ff(a){vo().$$.after_update.push(a)}function Yl(a){vo().$$.on_destroy.push(a)}function df(){const a=vo();return(e,r,{cancelable:o=!1}={})=>{const t=a.$$.callbacks[e];if(t){const l=Du(e,r,{cancelable:o});return t.slice().forEach(n=>{n.call(a,l)}),!l.defaultPrevented}return!0}}function Po(a,e){return vo().$$.context.set(a,e),e}function Ho(a){return vo().$$.context.get(a)}function G(a,e){const r=a.$$.callbacks[e.type];r&&r.slice().forEach(o=>o.call(this,e))}const to=[],J=[];let io=[];const ml=[],Vu=Promise.resolve();let kl=!1;function qu(){kl||(kl=!0,Vu.then(Yu))}function zi(){return qu(),Vu}function er(a){io.push(a)}function de(a){ml.push(a)}const Qn=new Set;let ro=0;function Yu(){if(ro!==0)return;const a=et;do{try{for(;ro<to.length;){const e=to[ro];ro++,zo(e),mf(e.$$)}}catch(e){throw to.length=0,ro=0,e}for(zo(null),to.length=0,ro=0;J.length;)J.pop()();for(let e=0;e<io.length;e+=1){const r=io[e];Qn.has(r)||(Qn.add(r),r())}io.length=0}while(to.length);for(;ml.length;)ml.pop()();kl=!1,Qn.clear(),zo(a)}function mf(a){if(a.fragment!==null){a.update(),Be(a.before_update);const e=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,e),a.after_update.forEach(er)}}function kf(a){const e=[],r=[];io.forEach(o=>a.indexOf(o)===-1?e.push(o):r.push(o)),r.forEach(o=>o()),io=e}let Ro;function Ku(){return Ro||(Ro=Promise.resolve(),Ro.then(()=>{Ro=null})),Ro}function Qt(a,e,r){a.dispatchEvent(Du(`${e?"intro":"outro"}${r}`))}const Wt=new Set;let Cr;function he(){Cr={r:0,c:[],p:Cr}}function fe(){Cr.r||Be(Cr.c),Cr=Cr.p}function k(a,e){a&&a.i&&(Wt.delete(a),a.i(e))}function g(a,e,r,o){if(a&&a.o){if(Wt.has(a))return;Wt.add(a),Cr.c.push(()=>{Wt.delete(a),o&&(r&&a.d(1),o())}),a.o(e)}else o&&o()}const Ju={duration:0};function Zu(a,e,r){const o={direction:"in"};let t=e(a,r,o),l=!1,n,i,s=0;function u(){n&&dl(a,n)}function _(){const{delay:c=0,duration:h=300,easing:f=Au,tick:d=K,css:M}=t||Ju;M&&(n=zu(a,0,1,h,c,f,M,s++)),d(0,1);const b=Eu()+c,T=b+h;i&&i.abort(),l=!0,er(()=>Qt(a,!0,"start")),i=Fu(v=>{if(l){if(v>=T)return d(1,0),Qt(a,!0,"end"),u(),l=!1;if(v>=b){const w=f((v-b)/h);d(w,1-w)}}return l})}let p=!1;return{start(){p||(p=!0,dl(a),Qr(t)?(t=t(o),Ku().then(_)):_())},invalidate(){p=!1},end(){l&&(u(),l=!1)}}}function Xu(a,e,r){const o={direction:"out"};let t=e(a,r,o),l=!0,n;const i=Cr;i.r+=1;let s;function u(){const{delay:_=0,duration:p=300,easing:c=Au,tick:h=K,css:f}=t||Ju;f&&(n=zu(a,1,0,p,_,c,f));const d=Eu()+_,M=d+p;er(()=>Qt(a,!1,"start")),"inert"in a&&(s=a.inert,a.inert=!0),Fu(b=>{if(l){if(b>=M)return h(0,1),Qt(a,!1,"end"),--i.r||Be(i.c),!1;if(b>=d){const T=c((b-d)/p);h(1-T,T)}}return l})}return Qr(t)?Ku().then(()=>{t=t(o),u()}):u(),{end(_){_&&"inert"in a&&(a.inert=s),_&&t.tick&&t.tick(1,0),l&&(n&&dl(a,n),l=!1)}}}function Ce(a){return a?.length!==void 0?a:Array.from(a)}function ye(a,e){const r={},o={},t={$$scope:1};let l=a.length;for(;l--;){const n=a[l],i=e[l];if(i){for(const s in n)s in i||(o[s]=1);for(const s in i)t[s]||(r[s]=i[s],t[s]=1);a[l]=i}else for(const s in n)t[s]=1}for(const n in o)n in r||(r[n]=void 0);return r}function Qu(a){return typeof a=="object"&&a!==null?a:{}}function me(a,e,r){const o=a.$$.props[e];o!==void 0&&(a.$$.bound[o]=r,r(a.$$.ctx[o]))}function N(a){a&&a.c()}function O(a,e,r){const{fragment:o,after_update:t}=a.$$;o&&o.m(e,r),er(()=>{const l=a.$$.on_mount.map(Bu).filter(Qr);a.$$.on_destroy?a.$$.on_destroy.push(...l):Be(l),a.$$.on_mount=[]}),t.forEach(er)}function R(a,e){const r=a.$$;r.fragment!==null&&(kf(r.after_update),Be(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function yf(a,e){a.$$.dirty[0]===-1&&(to.push(a),qu(),a.$$.dirty.fill(0)),a.$$.dirty[e/31|0]|=1<<e%31}function ee(a,e,r,o,t,l,n=null,i=[-1]){const s=et;zo(a);const u=a.$$={fragment:null,ctx:[],props:l,update:K,not_equal:t,bound:xi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:xi(),dirty:i,skip_bound:!1,root:e.target||s.$$.root};n&&n(u.root);let _=!1;if(u.ctx=r?r(a,e.props||{},(p,c,...h)=>{const f=h.length?h[0]:c;return u.ctx&&t(u.ctx[p],u.ctx[p]=f)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](f),_&&yf(a,p)),c}):[],u.update(),_=!0,Be(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const p=sf(e.target);u.fragment&&u.fragment.l(p),p.forEach(y)}else u.fragment&&u.fragment.c();e.intro&&k(a.$$.fragment),O(a,e.target,e.anchor),Yu()}zo(s)}class ae{$$=void 0;$$set=void 0;$destroy(){R(this,1),this.$destroy=K}$on(e,r){if(!Qr(r))return K;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(r),()=>{const t=o.indexOf(r);t!==-1&&o.splice(t,1)}}$set(e){this.$$set&&!af(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gf="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gf);const Sf="/assets/wasm_splatoon_gear_checker_bg-17a7b482.wasm",bf=async(a={},e)=>{let r;if(e.startsWith("data:")){const o=e.replace(/^data:.*?base64,/,"");let t;if(typeof Buffer=="function"&&typeof Buffer.from=="function")t=Buffer.from(o,"base64");else if(typeof atob=="function"){const l=atob(o);t=new Uint8Array(l.length);for(let n=0;n<l.length;n++)t[n]=l.charCodeAt(n)}else throw new Error("Cannot decode base64-encoded data URL");r=await WebAssembly.instantiate(t,a)}else{const o=await fetch(e),t=o.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&t.startsWith("application/wasm"))r=await WebAssembly.instantiateStreaming(o,a);else{const l=await o.arrayBuffer();r=await WebAssembly.instantiate(l,a)}}return r.instance.exports};let pe;function Mf(a){pe=a}const yr=new Array(128).fill(void 0);yr.push(void 0,null,!0,!1);function ke(a){return yr[a]}let Vo=yr.length;function wf(a){a<132||(yr[a]=Vo,Vo=a)}function ja(a){const e=ke(a);return wf(a),e}function Te(a){Vo===yr.length&&yr.push(yr.length+1);const e=Vo;return Vo=yr[e],yr[e]=a,e}let Wa=0,Ct=null;function xt(){return(Ct===null||Ct.byteLength===0)&&(Ct=new Uint8Array(pe.memory.buffer)),Ct}const Tf=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let Dt=new Tf("utf-8");const vf=typeof Dt.encodeInto=="function"?function(a,e){return Dt.encodeInto(a,e)}:function(a,e){const r=Dt.encode(a);return e.set(r),{read:a.length,written:r.length}};function ar(a,e,r){if(r===void 0){const i=Dt.encode(a),s=e(i.length,1)>>>0;return xt().subarray(s,s+i.length).set(i),Wa=i.length,s}let o=a.length,t=e(o,1)>>>0;const l=xt();let n=0;for(;n<o;n++){const i=a.charCodeAt(n);if(i>127)break;l[t+n]=i}if(n!==o){n!==0&&(a=a.slice(n)),t=r(t,o,o=n+a.length*3,1)>>>0;const i=xt().subarray(t+n,t+o),s=vf(a,i);n+=s.written}return Wa=n,t}function Ir(a){return a==null}let It=null;function ca(){return(It===null||It.byteLength===0)&&(It=new Int32Array(pe.memory.buffer)),It}const Pf=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let $u=new Pf("utf-8",{ignoreBOM:!0,fatal:!0});$u.decode();function vr(a,e){return a=a>>>0,$u.decode(xt().subarray(a,a+e))}let Gt=null;function Hf(){return(Gt===null||Gt.byteLength===0)&&(Gt=new Float64Array(pe.memory.buffer)),Gt}function yl(a){const e=typeof a;if(e=="number"||e=="boolean"||a==null)return`${a}`;if(e=="string")return`"${a}"`;if(e=="symbol"){const t=a.description;return t==null?"Symbol":`Symbol(${t})`}if(e=="function"){const t=a.name;return typeof t=="string"&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(a)){const t=a.length;let l="[";t>0&&(l+=yl(a[0]));for(let n=1;n<t;n++)l+=", "+yl(a[n]);return l+="]",l}const r=/\[object ([^\]]+)\]/.exec(toString.call(a));let o;if(r.length>1)o=r[1];else return toString.call(a);if(o=="Object")try{return"Object("+JSON.stringify(a)+")"}catch{return"Object"}return a instanceof Error?`${a.name}: ${a.message}
${a.stack}`:o}function Uf(a,e,r,o){const t={a,b:e,cnt:1,dtor:r},l=(...n)=>{t.cnt++;const i=t.a;t.a=0;try{return o(i,t.b,...n)}finally{--t.cnt===0?pe.__wbindgen_export_2.get(t.dtor)(i,t.b):t.a=i}};return l.original=t,l}function Lf(a,e,r){pe._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h20b0477f0e89a6da(a,e,Te(r))}function Cf(){pe.set_panic_hook()}function e_(a,e){if(!(a instanceof e))throw new Error(`expected instance of ${e.name}`);return a.ptr}function If(a,e,r,o,t){pe.wasm_bindgen__convert__closures__invoke3_mut__h2006f8a91e124345(a,e,Te(r),o,Te(t))}function Fr(a,e){try{return a.apply(this,e)}catch(r){pe.__wbindgen_exn_store(Te(r))}}function Gf(a,e,r,o){pe.wasm_bindgen__convert__closures__invoke2_mut__h4e614a238a277a16(a,e,Te(r),Te(o))}const gl=Object.freeze({MainInk_Save:0,0:"MainInk_Save",SubInk_Save:1,1:"SubInk_Save",InkRecovery_Up:2,2:"InkRecovery_Up",HumanMove_Up:3,3:"HumanMove_Up",SquidMove_Up:4,4:"SquidMove_Up",SpecialIncrease_Up:5,5:"SpecialIncrease_Up",RespawnSpecialGauge_Save:6,6:"RespawnSpecialGauge_Save",SpecialSpec_Up:7,7:"SpecialSpec_Up",RespawnTime_Save:8,8:"RespawnTime_Save",JumpTime_Save:9,9:"JumpTime_Save",SubSpec_Up:10,10:"SubSpec_Up",OpInkEffect_Reduction:11,11:"OpInkEffect_Reduction",SubEffect_Reduction:12,12:"SubEffect_Reduction",Action_Up:13,13:"Action_Up"}),Kl=Object.freeze({MainInk_Save:0,0:"MainInk_Save",SubInk_Save:1,1:"SubInk_Save",InkRecovery_Up:2,2:"InkRecovery_Up",HumanMove_Up:3,3:"HumanMove_Up",SquidMove_Up:4,4:"SquidMove_Up",SpecialIncrease_Up:5,5:"SpecialIncrease_Up",RespawnSpecialGauge_Save:6,6:"RespawnSpecialGauge_Save",SpecialSpec_Up:7,7:"SpecialSpec_Up",RespawnTime_Save:8,8:"RespawnTime_Save",JumpTime_Save:9,9:"JumpTime_Save",SubSpec_Up:10,10:"SubSpec_Up",OpInkEffect_Reduction:11,11:"OpInkEffect_Reduction",SubEffect_Reduction:12,12:"SubEffect_Reduction",Action_Up:13,13:"Action_Up",None:15,15:"None"}),a_=Object.freeze({InkSaverMain:0,0:"InkSaverMain",InkSaverSub:1,1:"InkSaverSub",InkRecoveryUp:2,2:"InkRecoveryUp",RunSpeedUp:3,3:"RunSpeedUp",SwimSpeedUp:4,4:"SwimSpeedUp",SpecialChargeUp:5,5:"SpecialChargeUp",SpecialSaver:6,6:"SpecialSaver",SpecialPowerUp:7,7:"SpecialPowerUp",QuickRespawn:8,8:"QuickRespawn",QuickSuperJump:9,9:"QuickSuperJump",SubPowerUp:10,10:"SubPowerUp",InkResistanceUp:11,11:"InkResistanceUp",SubResistanceUp:12,12:"SubResistanceUp",IntensifyAction:13,13:"IntensifyAction",None:255,255:"None"}),va=Object.freeze({InkSaverMain:0,0:"InkSaverMain",InkSaverSub:1,1:"InkSaverSub",InkRecoveryUp:2,2:"InkRecoveryUp",RunSpeedUp:3,3:"RunSpeedUp",SwimSpeedUp:4,4:"SwimSpeedUp",SpecialChargeUp:5,5:"SpecialChargeUp",SpecialSaver:6,6:"SpecialSaver",SpecialPowerUp:7,7:"SpecialPowerUp",QuickRespawn:8,8:"QuickRespawn",QuickSuperJump:9,9:"QuickSuperJump",SubPowerUp:10,10:"SubPowerUp",InkResistanceUp:11,11:"InkResistanceUp",SubResistanceUp:12,12:"SubResistanceUp",IntensifyAction:13,13:"IntensifyAction",None:255,255:"None"}),Af=Object.freeze({MainInk_Save:0,0:"MainInk_Save",SubInk_Save:1,1:"SubInk_Save",InkRecovery_Up:2,2:"InkRecovery_Up",HumanMove_Up:3,3:"HumanMove_Up",SquidMove_Up:4,4:"SquidMove_Up",SpecialIncrease_Up:5,5:"SpecialIncrease_Up",RespawnSpecialGauge_Save:6,6:"RespawnSpecialGauge_Save",SpecialSpec_Up:7,7:"SpecialSpec_Up",RespawnTime_Save:8,8:"RespawnTime_Save",JumpTime_Save:9,9:"JumpTime_Save",SubSpec_Up:10,10:"SubSpec_Up",OpInkEffect_Reduction:11,11:"OpInkEffect_Reduction",SubEffect_Reduction:12,12:"SubEffect_Reduction",Action_Up:13,13:"Action_Up",StartAllUp:100,100:"StartAllUp",EndAllUp:101,101:"EndAllUp",MinorityUp:102,102:"MinorityUp",ComeBack:103,103:"ComeBack",SquidMoveSpatter_Reduction:104,104:"SquidMoveSpatter_Reduction",DeathMarking:105,105:"DeathMarking",ThermalInk:106,106:"ThermalInk",Exorcist:107,107:"Exorcist",SuperJumpSign_Hide:109,109:"SuperJumpSign_Hide",ObjectEffect_Up:110,110:"ObjectEffect_Up",SomersaultLanding:111,111:"SomersaultLanding"});class Yr{static __wrap(e){e=e>>>0;const r=Object.create(Yr.prototype);return r.__wbg_ptr=e,r}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();pe.__wbg_gear_free(e)}get id(){let e,r;try{const l=pe.__wbindgen_add_to_stack_pointer(-16);pe.__wbg_get_gear_id(l,this.__wbg_ptr);var o=ca()[l/4+0],t=ca()[l/4+1];return e=o,r=t,vr(o,t)}finally{pe.__wbindgen_add_to_stack_pointer(16),pe.__wbindgen_free(e,r,1)}}set id(e){const r=ar(e,pe.__wbindgen_malloc,pe.__wbindgen_realloc),o=Wa;pe.__wbg_set_gear_id(this.__wbg_ptr,r,o)}get seed(){return pe.__wbg_get_gear_seed(this.__wbg_ptr)>>>0}set seed(e){pe.__wbg_set_gear_seed(this.__wbg_ptr,e)}get brand(){const e=pe.__wbg_get_gear_brand(this.__wbg_ptr);return ja(e)}set brand(e){pe.__wbg_set_gear_brand(this.__wbg_ptr,Te(e))}get max_allowed_chunks(){return pe.__wbg_get_gear_max_allowed_chunks(this.__wbg_ptr)}set max_allowed_chunks(e){pe.__wbg_set_gear_max_allowed_chunks(this.__wbg_ptr,e)}get how_far_to_check(){try{const o=pe.__wbindgen_add_to_stack_pointer(-16);pe.__wbg_get_gear_how_far_to_check(o,this.__wbg_ptr);var e=ca()[o/4+0],r=ca()[o/4+1];return e===0?void 0:r}finally{pe.__wbindgen_add_to_stack_pointer(16)}}set how_far_to_check(e){pe.__wbg_set_gear_how_far_to_check(this.__wbg_ptr,!Ir(e),Ir(e)?0:e)}get desired_abilities(){const e=pe.gear_desired_abilities(this.__wbg_ptr);return ja(e)}set desired_abilities(e){pe.gear_set_desired_abilities(this.__wbg_ptr,Te(e))}get allowed_chunks(){const e=pe.gear_allowed_chunks(this.__wbg_ptr);return ja(e)}set allowed_chunks(e){pe.gear_set_allowed_chunks(this.__wbg_ptr,Te(e))}constructor(e,r,o){const t=ar(e,pe.__wbindgen_malloc,pe.__wbindgen_realloc),l=Wa,n=pe.gear_new(t,l,r,Te(o));return Yr.__wrap(n)}with_options(e,r,o,t){const l=this.__destroy_into_raw(),n=pe.gear_with_options(l,Te(e),Te(r),o,!Ir(t),Ir(t)?0:t);return Yr.__wrap(n)}static new_with_defaults(e,r,o){const t=ar(e,pe.__wbindgen_malloc,pe.__wbindgen_realloc),l=Wa,n=pe.gear_new_with_defaults(t,l,r,Te(o));return Yr.__wrap(n)}purify_single_gear(e,r){const o=pe.gear_purify_single_gear(this.__wbg_ptr,e,Te(r));return ja(o)}}class at{static __wrap(e){e=e>>>0;const r=Object.create(at.prototype);return r.__wbg_ptr=e,r}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();pe.__wbg_gearcategory_free(e)}constructor(){const e=pe.gearcategory_js_new();return at.__wrap(e)}add_gear_to_category(e,r,o){e_(e,Yr),pe.gearcategory_add_gear_to_category(this.__wbg_ptr,e.__wbg_ptr,r,Te(o))}}class qo{static __wrap(e){e=e>>>0;const r=Object.create(qo.prototype);return r.__wbg_ptr=e,r}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();pe.__wbg_gearpurifier_free(e)}constructor(){const e=pe.gearpurifier_js_new();return qo.__wrap(e)}with_setting(e,r,o){const t=this.__destroy_into_raw(),l=pe.gearpurifier_with_setting(t,e,r,o);return qo.__wrap(l)}add_gear_category(e){e_(e,at);var r=e.__destroy_into_raw();pe.gearpurifier_add_gear_category(this.__wbg_ptr,r)}purify_all_gear(){const e=pe.gearpurifier_purify_all_gear(this.__wbg_ptr);return ja(e)}}function Bf(a){ja(a)}function Of(a){const e=ke(a);return Te(e)}function Rf(a){return typeof ke(a)=="string"}function Nf(a,e){const r=ke(e),o=typeof r=="string"?r:void 0;var t=Ir(o)?0:ar(o,pe.__wbindgen_malloc,pe.__wbindgen_realloc),l=Wa;ca()[a/4+1]=l,ca()[a/4+0]=t}function Ef(a,e){const r=new Error(vr(a,e));return Te(r)}function jf(a){const e=ke(a);return typeof e=="object"&&e!==null}function Ff(a,e){return ke(a)==ke(e)}function Wf(a){const e=ke(a);return typeof e=="boolean"?e?1:0:2}function xf(a,e){const r=ke(e),o=typeof r=="number"?r:void 0;Hf()[a/8+1]=Ir(o)?0:o,ca()[a/4+0]=!Ir(o)}function Df(a){return Te(a)}function zf(a){const e=BigInt.asUintN(64,a);return Te(e)}function Vf(a,e){const r=vr(a,e);return Te(r)}function qf(a,e,r){ke(a)[ja(e)]=ja(r)}function Yf(a,e){console.log(vr(a,e))}function Kf(a,e){const r=String(ke(e)),o=ar(r,pe.__wbindgen_malloc,pe.__wbindgen_realloc),t=Wa;ca()[a/4+1]=t,ca()[a/4+0]=o}function Jf(){return Te(document)}function Zf(a){const e=ke(a).self;return Ir(e)?0:Te(e)}function Xf(a){const e=ke(a).constructor;return Te(e)}function Qf(a,e){const r=ke(e).name,o=ar(r,pe.__wbindgen_malloc,pe.__wbindgen_realloc),t=Wa;ca()[a/4+1]=t,ca()[a/4+0]=o}function $f(a,e,r){const o=ke(a).getElementById(vr(e,r));return Te(o)}function ed(a,e,r){ke(a).textContent=vr(e,r)}function ad(a,e){const r=ke(e).textContent,o=ar(r,pe.__wbindgen_malloc,pe.__wbindgen_realloc),t=Wa;ca()[a/4+1]=t,ca()[a/4+0]=o}function rd(a){const e=ke(a).stack;return Te(e)}function od(a){__wbg_test_output_writeln(ja(a))}function td(a){const e=ke(a).stack;return Te(e)}function nd(a,e){const r=ke(e).stack,o=ar(r,pe.__wbindgen_malloc,pe.__wbindgen_realloc),t=Wa;ca()[a/4+1]=t,ca()[a/4+0]=o}function ld(){const a=new Error;return Te(a)}function id(a,e){const r=ke(e).stack,o=ar(r,pe.__wbindgen_malloc,pe.__wbindgen_realloc),t=Wa;ca()[a/4+1]=t,ca()[a/4+0]=o}function sd(a,e){let r,o;try{r=a,o=e,console.error(vr(a,e))}finally{pe.__wbindgen_free(r,o,1)}}function ud(a){const e=ja(a).original;return e.cnt--==1?(e.a=0,!0):!1}function _d(a,e){const r=String(ke(e)),o=ar(r,pe.__wbindgen_malloc,pe.__wbindgen_realloc),t=Wa;ca()[a/4+1]=t,ca()[a/4+0]=o}function pd(a,e,r){ke(a)[ja(e)]=ja(r)}function cd(a,e){const r=ke(a)[e>>>0];return Te(r)}function hd(a){return ke(a).length}function fd(){const a=new Array;return Te(a)}function dd(a){return typeof ke(a)=="function"}function md(a,e){const r=new Function(vr(a,e));return Te(r)}function kd(){return Te(new Map)}function yd(a){const e=ke(a).next;return Te(e)}function gd(){return Fr(function(a){const e=ke(a).next();return Te(e)},arguments)}function Sd(a){return ke(a).done}function bd(a){const e=ke(a).value;return Te(e)}function Md(){return Te(Symbol.iterator)}function wd(){return Fr(function(a,e){const r=Reflect.get(ke(a),ke(e));return Te(r)},arguments)}function Td(){return Fr(function(a,e){const r=ke(a).call(ke(e));return Te(r)},arguments)}function vd(){const a=new Object;return Te(a)}function Pd(){return Fr(function(){const a=self.self;return Te(a)},arguments)}function Hd(){return Fr(function(){const a=window.window;return Te(a)},arguments)}function Ud(){return Fr(function(){const a=globalThis.globalThis;return Te(a)},arguments)}function Ld(){return Fr(function(){const a=global.global;return Te(a)},arguments)}function Cd(a){return ke(a)===void 0}function Id(a,e,r){ke(a)[e>>>0]=ja(r)}function Gd(a,e,r){try{var o={a:e,b:r},t=(l,n,i)=>{const s=o.a;o.a=0;try{return If(s,o.b,l,n,i)}finally{o.a=s}};ke(a).forEach(t)}finally{o.a=o.b=0}}function Ad(a){return Array.isArray(ke(a))}function Bd(a){let e;try{e=ke(a)instanceof ArrayBuffer}catch{e=!1}return e}function Od(a){const e=ke(a).message;return Te(e)}function Rd(a){const e=ke(a).name;return Te(e)}function Nd(){return Fr(function(a,e,r){const o=ke(a).call(ke(e),ke(r));return Te(o)},arguments)}function Ed(a,e,r){const o=ke(a).set(ke(e),ke(r));return Te(o)}function jd(a){return Number.isSafeInteger(ke(a))}function Fd(a){const e=Object.entries(ke(a));return Te(e)}function Wd(a,e){try{var r={a,b:e},o=(l,n)=>{const i=r.a;r.a=0;try{return Gf(i,r.b,l,n)}finally{r.a=i}};const t=new Promise(o);return Te(t)}finally{r.a=r.b=0}}function xd(a){const e=Promise.resolve(ke(a));return Te(e)}function Dd(a,e){const r=ke(a).then(ke(e));return Te(r)}function zd(a){const e=ke(a).buffer;return Te(e)}function Vd(a){const e=new Uint8Array(ke(a));return Te(e)}function qd(a,e,r){ke(a).set(ke(e),r>>>0)}function Yd(a){return ke(a).length}function Kd(a){let e;try{e=ke(a)instanceof Uint8Array}catch{e=!1}return e}function Jd(a,e){const r=yl(ke(e)),o=ar(r,pe.__wbindgen_malloc,pe.__wbindgen_realloc),t=Wa;ca()[a/4+1]=t,ca()[a/4+0]=o}function Zd(a,e){throw new Error(vr(a,e))}function Xd(){const a=pe.memory;return Te(a)}function Qd(a,e,r){const o=Uf(a,e,111,Lf);return Te(o)}URL=globalThis.URL;const Me=await bf({"./wasm_splatoon_gear_checker_bg.js":{__wbindgen_object_drop_ref:Bf,__wbindgen_object_clone_ref:Of,__wbindgen_is_string:Rf,__wbindgen_string_get:Nf,__wbindgen_error_new:Ef,__wbindgen_is_object:jf,__wbindgen_jsval_loose_eq:Ff,__wbindgen_boolean_get:Wf,__wbindgen_number_get:xf,__wbindgen_number_new:Df,__wbindgen_bigint_from_u64:zf,__wbindgen_string_new:Vf,__wbg_set_bd72c078edfa51ad:qf,__wbg_log_aac03509bb2d7b55:Yf,__wbg_String_c9f8fcfc09f70054:Kf,__wbg_static_accessor_document_a955a7208875489c:Jf,__wbg_self_f12382a96c29176d:Zf,__wbg_constructor_85bd1a4c998482d2:Xf,__wbg_name_737814bf19c6ced1:Qf,__wbg_getElementById_a19340abadee780a:$f,__wbg_settextcontent_040820499bb5fe46:ed,__wbg_textcontent_2418b136fbd0e378:ad,__wbg_stack_486eebc2bccbc1f4:rd,__wbg_wbgtestoutputwriteln_6829eddea6f46c60:od,__wbg_stack_7ffb21b96b519484:td,__wbg_stack_67a3c970c48fd391:nd,__wbg_new_abda76e883ba8a5f:ld,__wbg_stack_658279fe44541cf6:id,__wbg_error_f851667af71bcfc6:sd,__wbindgen_cb_drop:ud,__wbg_String_88810dfeb4021902:_d,__wbg_set_841ac57cff3d672b:pd,__wbg_get_44be0491f933a435:cd,__wbg_length_fff51ee6522a1a18:hd,__wbg_new_898a68150f225f2e:fd,__wbindgen_is_function:dd,__wbg_newnoargs_581967eacc0e2604:md,__wbg_new_56693dbed0c32988:kd,__wbg_next_526fc47e980da008:yd,__wbg_next_ddb3312ca1c4e32a:gd,__wbg_done_5c1f01fb660d73b5:Sd,__wbg_value_1695675138684bd5:bd,__wbg_iterator_97f0c81209c6c35a:Md,__wbg_get_97b561fb56f034b5:wd,__wbg_call_cb65541d95d71282:Td,__wbg_new_b51585de1b234aff:vd,__wbg_self_1ff1d729e9aae938:Pd,__wbg_window_5f4faef6c12b79ec:Hd,__wbg_globalThis_1d39714405582d3c:Ud,__wbg_global_651f05c6a0944d1c:Ld,__wbindgen_is_undefined:Cd,__wbg_set_502d29070ea18557:Id,__wbg_forEach_c4a9c2a1e9a630ba:Gd,__wbg_isArray_4c24b343cb13cfb1:Ad,__wbg_instanceof_ArrayBuffer_39ac22089b74fddb:Bd,__wbg_message_48bacc5ea57d74ee:Od,__wbg_name_8f734cbbd6194153:Rd,__wbg_call_01734de55d61e11d:Nd,__wbg_set_bedc3d02d0f05eb0:Ed,__wbg_isSafeInteger_bb8e18dd21c97288:jd,__wbg_entries_e51f29c7bba0c054:Fd,__wbg_new_43f1b47c28813cbd:Wd,__wbg_resolve_53698b95aaf7fcf8:xd,__wbg_then_f7e06ee3c11698eb:Dd,__wbg_buffer_085ec1f694018c4f:zd,__wbg_new_8125e318e6245eed:Vd,__wbg_set_5cf90238115182c3:qd,__wbg_length_72e2208bbc0efc61:Yd,__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4:Kd,__wbindgen_debug_string:Jd,__wbindgen_throw:Zd,__wbindgen_memory:Xd,__wbindgen_closure_wrapper951:Qd}},Sf),$d=Me.memory,em=Me.set_panic_hook,am=Me.__wbg_sixteenabilitycombo_free,rm=Me.sixteenabilitycombo_to_js_ability_combo,om=Me.__wbg_ticketset_free,tm=Me.__wbg_get_ticketset_value,nm=Me.__wbg_set_ticketset_value,lm=Me.ticketset_toString,im=Me.ticketset_to_js_tickets,sm=Me.__wbg_gear_free,um=Me.__wbg_get_gear_id,_m=Me.__wbg_set_gear_id,pm=Me.__wbg_get_gear_seed,cm=Me.__wbg_set_gear_seed,hm=Me.__wbg_get_gear_brand,fm=Me.__wbg_set_gear_brand,dm=Me.__wbg_get_gear_max_allowed_chunks,mm=Me.__wbg_set_gear_max_allowed_chunks,km=Me.__wbg_get_gear_how_far_to_check,ym=Me.__wbg_set_gear_how_far_to_check,gm=Me.gear_desired_abilities,Sm=Me.gear_set_desired_abilities,bm=Me.gear_allowed_chunks,Mm=Me.gear_set_allowed_chunks,wm=Me.gear_new,Tm=Me.gear_with_options,vm=Me.gear_new_with_defaults,Pm=Me.gear_purify_single_gear,Hm=Me.__wbg_gearcategory_free,Um=Me.gearcategory_js_new,Lm=Me.gearcategory_add_gear_to_category,Cm=Me.advance_seed,Im=Me.send_example_to_js,Gm=Me.__wbg_gearpurifier_free,Am=Me.gearpurifier_js_new,Bm=Me.gearpurifier_with_setting,Om=Me.gearpurifier_add_gear_category,Rm=Me.gearpurifier_purify_all_gear,Nm=Me.__wbg_wasmbindgentestcontext_free,Em=Me.wasmbindgentestcontext_new,jm=Me.wasmbindgentestcontext_args,Fm=Me.wasmbindgentestcontext_run,Wm=Me.__wbgtest_console_log,xm=Me.__wbgtest_console_debug,Dm=Me.__wbgtest_console_info,zm=Me.__wbgtest_console_warn,Vm=Me.__wbgtest_console_error,qm=Me.__wbindgen_malloc,Ym=Me.__wbindgen_realloc,Km=Me.__wbindgen_export_2,Jm=Me._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h20b0477f0e89a6da,Zm=Me.__wbindgen_add_to_stack_pointer,Xm=Me.__wbindgen_free,Qm=Me.wasm_bindgen__convert__closures__invoke3_mut__h2006f8a91e124345,$m=Me.__wbindgen_exn_store,ek=Me.wasm_bindgen__convert__closures__invoke2_mut__h4e614a238a277a16,ak=Object.freeze(Object.defineProperty({__proto__:null,__wbg_gear_free:sm,__wbg_gearcategory_free:Hm,__wbg_gearpurifier_free:Gm,__wbg_get_gear_brand:hm,__wbg_get_gear_how_far_to_check:km,__wbg_get_gear_id:um,__wbg_get_gear_max_allowed_chunks:dm,__wbg_get_gear_seed:pm,__wbg_get_ticketset_value:tm,__wbg_set_gear_brand:fm,__wbg_set_gear_how_far_to_check:ym,__wbg_set_gear_id:_m,__wbg_set_gear_max_allowed_chunks:mm,__wbg_set_gear_seed:cm,__wbg_set_ticketset_value:nm,__wbg_sixteenabilitycombo_free:am,__wbg_ticketset_free:om,__wbg_wasmbindgentestcontext_free:Nm,__wbgtest_console_debug:xm,__wbgtest_console_error:Vm,__wbgtest_console_info:Dm,__wbgtest_console_log:Wm,__wbgtest_console_warn:zm,__wbindgen_add_to_stack_pointer:Zm,__wbindgen_exn_store:$m,__wbindgen_export_2:Km,__wbindgen_free:Xm,__wbindgen_malloc:qm,__wbindgen_realloc:Ym,_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h20b0477f0e89a6da:Jm,advance_seed:Cm,gear_allowed_chunks:bm,gear_desired_abilities:gm,gear_new:wm,gear_new_with_defaults:vm,gear_purify_single_gear:Pm,gear_set_allowed_chunks:Mm,gear_set_desired_abilities:Sm,gear_with_options:Tm,gearcategory_add_gear_to_category:Lm,gearcategory_js_new:Um,gearpurifier_add_gear_category:Om,gearpurifier_js_new:Am,gearpurifier_purify_all_gear:Rm,gearpurifier_with_setting:Bm,memory:$d,send_example_to_js:Im,set_panic_hook:em,sixteenabilitycombo_to_js_ability_combo:rm,ticketset_toString:lm,ticketset_to_js_tickets:im,wasm_bindgen__convert__closures__invoke2_mut__h4e614a238a277a16:ek,wasm_bindgen__convert__closures__invoke3_mut__h2006f8a91e124345:Qm,wasmbindgentestcontext_args:jm,wasmbindgentestcontext_new:Em,wasmbindgentestcontext_run:Fm},Symbol.toStringTag,{value:"Module"}));Mf(ak);const oo=[];function r_(a,e=K){let r;const o=new Set;function t(i){if(te(a,i)&&(a=i,r)){const s=!oo.length;for(const u of o)u[1](),oo.push(u,a);if(s){for(let u=0;u<oo.length;u+=2)oo[u][0](oo[u+1]);oo.length=0}}}function l(i){t(i(a))}function n(i,s=K){const u=[i,s];return o.add(u),o.size===1&&(r=e(t,l)||K),i(a),()=>{o.delete(u),o.size===0&&r&&(r(),r=null)}}return{set:t,update:l,subscribe:n}}var ze;(function(a){a.assertEqual=t=>t;function e(t){}a.assertIs=e;function r(t){throw new Error}a.assertNever=r,a.arrayToEnum=t=>{const l={};for(const n of t)l[n]=n;return l},a.getValidEnumValues=t=>{const l=a.objectKeys(t).filter(i=>typeof t[t[i]]!="number"),n={};for(const i of l)n[i]=t[i];return a.objectValues(n)},a.objectValues=t=>a.objectKeys(t).map(function(l){return t[l]}),a.objectKeys=typeof Object.keys=="function"?t=>Object.keys(t):t=>{const l=[];for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&l.push(n);return l},a.find=(t,l)=>{for(const n of t)if(l(n))return n},a.isInteger=typeof Number.isInteger=="function"?t=>Number.isInteger(t):t=>typeof t=="number"&&isFinite(t)&&Math.floor(t)===t;function o(t,l=" | "){return t.map(n=>typeof n=="string"?`'${n}'`:n).join(l)}a.joinValues=o,a.jsonStringifyReplacer=(t,l)=>typeof l=="bigint"?l.toString():l})(ze||(ze={}));var Vi;(function(a){a.mergeShapes=(e,r)=>({...e,...r})})(Vi||(Vi={}));const _e=ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Vr=a=>{switch(typeof a){case"undefined":return _e.undefined;case"string":return _e.string;case"number":return isNaN(a)?_e.nan:_e.number;case"boolean":return _e.boolean;case"function":return _e.function;case"bigint":return _e.bigint;case"symbol":return _e.symbol;case"object":return Array.isArray(a)?_e.array:a===null?_e.null:a.then&&typeof a.then=="function"&&a.catch&&typeof a.catch=="function"?_e.promise:typeof Map<"u"&&a instanceof Map?_e.map:typeof Set<"u"&&a instanceof Set?_e.set:typeof Date<"u"&&a instanceof Date?_e.date:_e.object;default:return _e.unknown}},Z=ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class lr extends Error{constructor(e){super(),this.issues=[],this.addIssue=o=>{this.issues=[...this.issues,o]},this.addIssues=(o=[])=>{this.issues=[...this.issues,...o]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const r=e||function(l){return l.message},o={_errors:[]},t=l=>{for(const n of l.issues)if(n.code==="invalid_union")n.unionErrors.map(t);else if(n.code==="invalid_return_type")t(n.returnTypeError);else if(n.code==="invalid_arguments")t(n.argumentsError);else if(n.path.length===0)o._errors.push(r(n));else{let i=o,s=0;for(;s<n.path.length;){const u=n.path[s];s===n.path.length-1?(i[u]=i[u]||{_errors:[]},i[u]._errors.push(r(n))):i[u]=i[u]||{_errors:[]},i=i[u],s++}}};return t(this),o}toString(){return this.message}get message(){return JSON.stringify(this.issues,ze.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){const r={},o=[];for(const t of this.issues)t.path.length>0?(r[t.path[0]]=r[t.path[0]]||[],r[t.path[0]].push(e(t))):o.push(e(t));return{formErrors:o,fieldErrors:r}}get formErrors(){return this.flatten()}}lr.create=a=>new lr(a);const $t=(a,e)=>{let r;switch(a.code){case Z.invalid_type:a.received===_e.undefined?r="Required":r=`Expected ${a.expected}, received ${a.received}`;break;case Z.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(a.expected,ze.jsonStringifyReplacer)}`;break;case Z.unrecognized_keys:r=`Unrecognized key(s) in object: ${ze.joinValues(a.keys,", ")}`;break;case Z.invalid_union:r="Invalid input";break;case Z.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${ze.joinValues(a.options)}`;break;case Z.invalid_enum_value:r=`Invalid enum value. Expected ${ze.joinValues(a.options)}, received '${a.received}'`;break;case Z.invalid_arguments:r="Invalid function arguments";break;case Z.invalid_return_type:r="Invalid function return type";break;case Z.invalid_date:r="Invalid date";break;case Z.invalid_string:typeof a.validation=="object"?"includes"in a.validation?(r=`Invalid input: must include "${a.validation.includes}"`,typeof a.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${a.validation.position}`)):"startsWith"in a.validation?r=`Invalid input: must start with "${a.validation.startsWith}"`:"endsWith"in a.validation?r=`Invalid input: must end with "${a.validation.endsWith}"`:ze.assertNever(a.validation):a.validation!=="regex"?r=`Invalid ${a.validation}`:r="Invalid";break;case Z.too_small:a.type==="array"?r=`Array must contain ${a.exact?"exactly":a.inclusive?"at least":"more than"} ${a.minimum} element(s)`:a.type==="string"?r=`String must contain ${a.exact?"exactly":a.inclusive?"at least":"over"} ${a.minimum} character(s)`:a.type==="number"?r=`Number must be ${a.exact?"exactly equal to ":a.inclusive?"greater than or equal to ":"greater than "}${a.minimum}`:a.type==="date"?r=`Date must be ${a.exact?"exactly equal to ":a.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(a.minimum))}`:r="Invalid input";break;case Z.too_big:a.type==="array"?r=`Array must contain ${a.exact?"exactly":a.inclusive?"at most":"less than"} ${a.maximum} element(s)`:a.type==="string"?r=`String must contain ${a.exact?"exactly":a.inclusive?"at most":"under"} ${a.maximum} character(s)`:a.type==="number"?r=`Number must be ${a.exact?"exactly":a.inclusive?"less than or equal to":"less than"} ${a.maximum}`:a.type==="bigint"?r=`BigInt must be ${a.exact?"exactly":a.inclusive?"less than or equal to":"less than"} ${a.maximum}`:a.type==="date"?r=`Date must be ${a.exact?"exactly":a.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(a.maximum))}`:r="Invalid input";break;case Z.custom:r="Invalid input";break;case Z.invalid_intersection_types:r="Intersection results could not be merged";break;case Z.not_multiple_of:r=`Number must be a multiple of ${a.multipleOf}`;break;case Z.not_finite:r="Number must be finite";break;default:r=e.defaultError,ze.assertNever(a)}return{message:r}};let rk=$t;function Sl(){return rk}const bl=a=>{const{data:e,path:r,errorMaps:o,issueData:t}=a,l=[...r,...t.path||[]],n={...t,path:l};let i="";const s=o.filter(u=>!!u).slice().reverse();for(const u of s)i=u(n,{data:e,defaultError:i}).message;return{...t,path:l,message:t.message||i}};function ce(a,e){const r=bl({issueData:e,data:a.data,path:a.path,errorMaps:[a.common.contextualErrorMap,a.schemaErrorMap,Sl(),$t].filter(o=>!!o)});a.common.issues.push(r)}class Pa{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){const o=[];for(const t of r){if(t.status==="aborted")return Ae;t.status==="dirty"&&e.dirty(),o.push(t.value)}return{status:e.value,value:o}}static async mergeObjectAsync(e,r){const o=[];for(const t of r)o.push({key:await t.key,value:await t.value});return Pa.mergeObjectSync(e,o)}static mergeObjectSync(e,r){const o={};for(const t of r){const{key:l,value:n}=t;if(l.status==="aborted"||n.status==="aborted")return Ae;l.status==="dirty"&&e.dirty(),n.status==="dirty"&&e.dirty(),l.value!=="__proto__"&&(typeof n.value<"u"||t.alwaysSet)&&(o[l.value]=n.value)}return{status:e.value,value:o}}}const Ae=Object.freeze({status:"aborted"}),ok=a=>({status:"dirty",value:a}),Ia=a=>({status:"valid",value:a}),qi=a=>a.status==="aborted",Yi=a=>a.status==="dirty",en=a=>a.status==="valid",Ml=a=>typeof Promise<"u"&&a instanceof Promise;var ve;(function(a){a.errToObj=e=>typeof e=="string"?{message:e}:e||{},a.toString=e=>typeof e=="string"?e:e?.message})(ve||(ve={}));class ur{constructor(e,r,o,t){this._cachedPath=[],this.parent=e,this.data=r,this._path=o,this._key=t}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Ki=(a,e)=>{if(en(e))return{success:!0,data:e.value};if(!a.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new lr(a.common.issues);return this._error=r,this._error}}};function Ge(a){if(!a)return{};const{errorMap:e,invalid_type_error:r,required_error:o,description:t}=a;if(e&&(r||o))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:t}:{errorMap:(n,i)=>n.code!=="invalid_type"?{message:i.defaultError}:typeof i.data>"u"?{message:o??i.defaultError}:{message:r??i.defaultError},description:t}}class Ee{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Vr(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:Vr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Pa,ctx:{common:e.parent.common,data:e.data,parsedType:Vr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const r=this._parse(e);if(Ml(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){const r=this._parse(e);return Promise.resolve(r)}parse(e,r){const o=this.safeParse(e,r);if(o.success)return o.data;throw o.error}safeParse(e,r){var o;const t={common:{issues:[],async:(o=r?.async)!==null&&o!==void 0?o:!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Vr(e)},l=this._parseSync({data:e,path:t.path,parent:t});return Ki(t,l)}async parseAsync(e,r){const o=await this.safeParseAsync(e,r);if(o.success)return o.data;throw o.error}async safeParseAsync(e,r){const o={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Vr(e)},t=this._parse({data:e,path:o.path,parent:o}),l=await(Ml(t)?t:Promise.resolve(t));return Ki(o,l)}refine(e,r){const o=t=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(t):r;return this._refinement((t,l)=>{const n=e(t),i=()=>l.addIssue({code:Z.custom,...o(t)});return typeof Promise<"u"&&n instanceof Promise?n.then(s=>s?!0:(i(),!1)):n?!0:(i(),!1)})}refinement(e,r){return this._refinement((o,t)=>e(o)?!0:(t.addIssue(typeof r=="function"?r(o,t):r),!1))}_refinement(e){return new Mr({schema:this,typeName:Le.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Or.create(this,this._def)}nullable(){return co.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ir.create(this,this._def)}promise(){return ot.create(this,this._def)}or(e){return on.create([this,e],this._def)}and(e){return tn.create(this,e,this._def)}transform(e){return new Mr({...Ge(this._def),schema:this,typeName:Le.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const r=typeof e=="function"?e:()=>e;return new _n({...Ge(this._def),innerType:this,defaultValue:r,typeName:Le.ZodDefault})}brand(){return new dk({typeName:Le.ZodBranded,type:this,...Ge(this._def)})}catch(e){const r=typeof e=="function"?e:()=>e;return new Ll({...Ge(this._def),innerType:this,catchValue:r,typeName:Le.ZodCatch})}describe(e){const r=this.constructor;return new r({...this._def,description:e})}pipe(e){return Sn.create(this,e)}readonly(){return Il.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const tk=/^c[^\s-]{8,}$/i,nk=/^[a-z][a-z0-9]*$/,lk=/^[0-9A-HJKMNP-TV-Z]{26}$/,ik=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,sk=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,uk="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let $n;const _k=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,pk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,ck=a=>a.precision?a.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${a.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${a.precision}}Z$`):a.precision===0?a.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):a.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function hk(a,e){return!!((e==="v4"||!e)&&_k.test(a)||(e==="v6"||!e)&&pk.test(a))}class gr extends Ee{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==_e.string){const l=this._getOrReturnCtx(e);return ce(l,{code:Z.invalid_type,expected:_e.string,received:l.parsedType}),Ae}const o=new Pa;let t;for(const l of this._def.checks)if(l.kind==="min")e.data.length<l.value&&(t=this._getOrReturnCtx(e,t),ce(t,{code:Z.too_small,minimum:l.value,type:"string",inclusive:!0,exact:!1,message:l.message}),o.dirty());else if(l.kind==="max")e.data.length>l.value&&(t=this._getOrReturnCtx(e,t),ce(t,{code:Z.too_big,maximum:l.value,type:"string",inclusive:!0,exact:!1,message:l.message}),o.dirty());else if(l.kind==="length"){const n=e.data.length>l.value,i=e.data.length<l.value;(n||i)&&(t=this._getOrReturnCtx(e,t),n?ce(t,{code:Z.too_big,maximum:l.value,type:"string",inclusive:!0,exact:!0,message:l.message}):i&&ce(t,{code:Z.too_small,minimum:l.value,type:"string",inclusive:!0,exact:!0,message:l.message}),o.dirty())}else if(l.kind==="email")sk.test(e.data)||(t=this._getOrReturnCtx(e,t),ce(t,{validation:"email",code:Z.invalid_string,message:l.message}),o.dirty());else if(l.kind==="emoji")$n||($n=new RegExp(uk,"u")),$n.test(e.data)||(t=this._getOrReturnCtx(e,t),ce(t,{validation:"emoji",code:Z.invalid_string,message:l.message}),o.dirty());else if(l.kind==="uuid")ik.test(e.data)||(t=this._getOrReturnCtx(e,t),ce(t,{validation:"uuid",code:Z.invalid_string,message:l.message}),o.dirty());else if(l.kind==="cuid")tk.test(e.data)||(t=this._getOrReturnCtx(e,t),ce(t,{validation:"cuid",code:Z.invalid_string,message:l.message}),o.dirty());else if(l.kind==="cuid2")nk.test(e.data)||(t=this._getOrReturnCtx(e,t),ce(t,{validation:"cuid2",code:Z.invalid_string,message:l.message}),o.dirty());else if(l.kind==="ulid")lk.test(e.data)||(t=this._getOrReturnCtx(e,t),ce(t,{validation:"ulid",code:Z.invalid_string,message:l.message}),o.dirty());else if(l.kind==="url")try{new URL(e.data)}catch{t=this._getOrReturnCtx(e,t),ce(t,{validation:"url",code:Z.invalid_string,message:l.message}),o.dirty()}else l.kind==="regex"?(l.regex.lastIndex=0,l.regex.test(e.data)||(t=this._getOrReturnCtx(e,t),ce(t,{validation:"regex",code:Z.invalid_string,message:l.message}),o.dirty())):l.kind==="trim"?e.data=e.data.trim():l.kind==="includes"?e.data.includes(l.value,l.position)||(t=this._getOrReturnCtx(e,t),ce(t,{code:Z.invalid_string,validation:{includes:l.value,position:l.position},message:l.message}),o.dirty()):l.kind==="toLowerCase"?e.data=e.data.toLowerCase():l.kind==="toUpperCase"?e.data=e.data.toUpperCase():l.kind==="startsWith"?e.data.startsWith(l.value)||(t=this._getOrReturnCtx(e,t),ce(t,{code:Z.invalid_string,validation:{startsWith:l.value},message:l.message}),o.dirty()):l.kind==="endsWith"?e.data.endsWith(l.value)||(t=this._getOrReturnCtx(e,t),ce(t,{code:Z.invalid_string,validation:{endsWith:l.value},message:l.message}),o.dirty()):l.kind==="datetime"?ck(l).test(e.data)||(t=this._getOrReturnCtx(e,t),ce(t,{code:Z.invalid_string,validation:"datetime",message:l.message}),o.dirty()):l.kind==="ip"?hk(e.data,l.version)||(t=this._getOrReturnCtx(e,t),ce(t,{validation:"ip",code:Z.invalid_string,message:l.message}),o.dirty()):ze.assertNever(l);return{status:o.value,value:e.data}}_regex(e,r,o){return this.refinement(t=>e.test(t),{validation:r,code:Z.invalid_string,...ve.errToObj(o)})}_addCheck(e){return new gr({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ve.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ve.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ve.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ve.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ve.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ve.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ve.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ve.errToObj(e)})}datetime(e){var r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(r=e?.offset)!==null&&r!==void 0?r:!1,...ve.errToObj(e?.message)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...ve.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...ve.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...ve.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...ve.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...ve.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...ve.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...ve.errToObj(r)})}nonempty(e){return this.min(1,ve.errToObj(e))}trim(){return new gr({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new gr({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new gr({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}gr.create=a=>{var e;return new gr({checks:[],typeName:Le.ZodString,coerce:(e=a?.coerce)!==null&&e!==void 0?e:!1,...Ge(a)})};function fk(a,e){const r=(a.toString().split(".")[1]||"").length,o=(e.toString().split(".")[1]||"").length,t=r>o?r:o,l=parseInt(a.toFixed(t).replace(".","")),n=parseInt(e.toFixed(t).replace(".",""));return l%n/Math.pow(10,t)}class uo extends Ee{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==_e.number){const l=this._getOrReturnCtx(e);return ce(l,{code:Z.invalid_type,expected:_e.number,received:l.parsedType}),Ae}let o;const t=new Pa;for(const l of this._def.checks)l.kind==="int"?ze.isInteger(e.data)||(o=this._getOrReturnCtx(e,o),ce(o,{code:Z.invalid_type,expected:"integer",received:"float",message:l.message}),t.dirty()):l.kind==="min"?(l.inclusive?e.data<l.value:e.data<=l.value)&&(o=this._getOrReturnCtx(e,o),ce(o,{code:Z.too_small,minimum:l.value,type:"number",inclusive:l.inclusive,exact:!1,message:l.message}),t.dirty()):l.kind==="max"?(l.inclusive?e.data>l.value:e.data>=l.value)&&(o=this._getOrReturnCtx(e,o),ce(o,{code:Z.too_big,maximum:l.value,type:"number",inclusive:l.inclusive,exact:!1,message:l.message}),t.dirty()):l.kind==="multipleOf"?fk(e.data,l.value)!==0&&(o=this._getOrReturnCtx(e,o),ce(o,{code:Z.not_multiple_of,multipleOf:l.value,message:l.message}),t.dirty()):l.kind==="finite"?Number.isFinite(e.data)||(o=this._getOrReturnCtx(e,o),ce(o,{code:Z.not_finite,message:l.message}),t.dirty()):ze.assertNever(l);return{status:t.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,ve.toString(r))}gt(e,r){return this.setLimit("min",e,!1,ve.toString(r))}lte(e,r){return this.setLimit("max",e,!0,ve.toString(r))}lt(e,r){return this.setLimit("max",e,!1,ve.toString(r))}setLimit(e,r,o,t){return new uo({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:o,message:ve.toString(t)}]})}_addCheck(e){return new uo({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ve.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ve.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ve.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ve.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ve.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:ve.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:ve.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ve.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ve.toString(e)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ze.isInteger(e.value))}get isFinite(){let e=null,r=null;for(const o of this._def.checks){if(o.kind==="finite"||o.kind==="int"||o.kind==="multipleOf")return!0;o.kind==="min"?(r===null||o.value>r)&&(r=o.value):o.kind==="max"&&(e===null||o.value<e)&&(e=o.value)}return Number.isFinite(r)&&Number.isFinite(e)}}uo.create=a=>new uo({checks:[],typeName:Le.ZodNumber,coerce:a?.coerce||!1,...Ge(a)});class _o extends Ee{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==_e.bigint){const l=this._getOrReturnCtx(e);return ce(l,{code:Z.invalid_type,expected:_e.bigint,received:l.parsedType}),Ae}let o;const t=new Pa;for(const l of this._def.checks)l.kind==="min"?(l.inclusive?e.data<l.value:e.data<=l.value)&&(o=this._getOrReturnCtx(e,o),ce(o,{code:Z.too_small,type:"bigint",minimum:l.value,inclusive:l.inclusive,message:l.message}),t.dirty()):l.kind==="max"?(l.inclusive?e.data>l.value:e.data>=l.value)&&(o=this._getOrReturnCtx(e,o),ce(o,{code:Z.too_big,type:"bigint",maximum:l.value,inclusive:l.inclusive,message:l.message}),t.dirty()):l.kind==="multipleOf"?e.data%l.value!==BigInt(0)&&(o=this._getOrReturnCtx(e,o),ce(o,{code:Z.not_multiple_of,multipleOf:l.value,message:l.message}),t.dirty()):ze.assertNever(l);return{status:t.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,ve.toString(r))}gt(e,r){return this.setLimit("min",e,!1,ve.toString(r))}lte(e,r){return this.setLimit("max",e,!0,ve.toString(r))}lt(e,r){return this.setLimit("max",e,!1,ve.toString(r))}setLimit(e,r,o,t){return new _o({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:o,message:ve.toString(t)}]})}_addCheck(e){return new _o({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ve.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ve.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ve.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ve.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:ve.toString(r)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}_o.create=a=>{var e;return new _o({checks:[],typeName:Le.ZodBigInt,coerce:(e=a?.coerce)!==null&&e!==void 0?e:!1,...Ge(a)})};class wl extends Ee{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==_e.boolean){const o=this._getOrReturnCtx(e);return ce(o,{code:Z.invalid_type,expected:_e.boolean,received:o.parsedType}),Ae}return Ia(e.data)}}wl.create=a=>new wl({typeName:Le.ZodBoolean,coerce:a?.coerce||!1,...Ge(a)});class rt extends Ee{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==_e.date){const l=this._getOrReturnCtx(e);return ce(l,{code:Z.invalid_type,expected:_e.date,received:l.parsedType}),Ae}if(isNaN(e.data.getTime())){const l=this._getOrReturnCtx(e);return ce(l,{code:Z.invalid_date}),Ae}const o=new Pa;let t;for(const l of this._def.checks)l.kind==="min"?e.data.getTime()<l.value&&(t=this._getOrReturnCtx(e,t),ce(t,{code:Z.too_small,message:l.message,inclusive:!0,exact:!1,minimum:l.value,type:"date"}),o.dirty()):l.kind==="max"?e.data.getTime()>l.value&&(t=this._getOrReturnCtx(e,t),ce(t,{code:Z.too_big,message:l.message,inclusive:!0,exact:!1,maximum:l.value,type:"date"}),o.dirty()):ze.assertNever(l);return{status:o.value,value:new Date(e.data.getTime())}}_addCheck(e){return new rt({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:ve.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:ve.toString(r)})}get minDate(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}}rt.create=a=>new rt({checks:[],coerce:a?.coerce||!1,typeName:Le.ZodDate,...Ge(a)});class Tl extends Ee{_parse(e){if(this._getType(e)!==_e.symbol){const o=this._getOrReturnCtx(e);return ce(o,{code:Z.invalid_type,expected:_e.symbol,received:o.parsedType}),Ae}return Ia(e.data)}}Tl.create=a=>new Tl({typeName:Le.ZodSymbol,...Ge(a)});class an extends Ee{_parse(e){if(this._getType(e)!==_e.undefined){const o=this._getOrReturnCtx(e);return ce(o,{code:Z.invalid_type,expected:_e.undefined,received:o.parsedType}),Ae}return Ia(e.data)}}an.create=a=>new an({typeName:Le.ZodUndefined,...Ge(a)});class rn extends Ee{_parse(e){if(this._getType(e)!==_e.null){const o=this._getOrReturnCtx(e);return ce(o,{code:Z.invalid_type,expected:_e.null,received:o.parsedType}),Ae}return Ia(e.data)}}rn.create=a=>new rn({typeName:Le.ZodNull,...Ge(a)});class vl extends Ee{constructor(){super(...arguments),this._any=!0}_parse(e){return Ia(e.data)}}vl.create=a=>new vl({typeName:Le.ZodAny,...Ge(a)});class so extends Ee{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ia(e.data)}}so.create=a=>new so({typeName:Le.ZodUnknown,...Ge(a)});class Nr extends Ee{_parse(e){const r=this._getOrReturnCtx(e);return ce(r,{code:Z.invalid_type,expected:_e.never,received:r.parsedType}),Ae}}Nr.create=a=>new Nr({typeName:Le.ZodNever,...Ge(a)});class Pl extends Ee{_parse(e){if(this._getType(e)!==_e.undefined){const o=this._getOrReturnCtx(e);return ce(o,{code:Z.invalid_type,expected:_e.void,received:o.parsedType}),Ae}return Ia(e.data)}}Pl.create=a=>new Pl({typeName:Le.ZodVoid,...Ge(a)});class ir extends Ee{_parse(e){const{ctx:r,status:o}=this._processInputParams(e),t=this._def;if(r.parsedType!==_e.array)return ce(r,{code:Z.invalid_type,expected:_e.array,received:r.parsedType}),Ae;if(t.exactLength!==null){const n=r.data.length>t.exactLength.value,i=r.data.length<t.exactLength.value;(n||i)&&(ce(r,{code:n?Z.too_big:Z.too_small,minimum:i?t.exactLength.value:void 0,maximum:n?t.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:t.exactLength.message}),o.dirty())}if(t.minLength!==null&&r.data.length<t.minLength.value&&(ce(r,{code:Z.too_small,minimum:t.minLength.value,type:"array",inclusive:!0,exact:!1,message:t.minLength.message}),o.dirty()),t.maxLength!==null&&r.data.length>t.maxLength.value&&(ce(r,{code:Z.too_big,maximum:t.maxLength.value,type:"array",inclusive:!0,exact:!1,message:t.maxLength.message}),o.dirty()),r.common.async)return Promise.all([...r.data].map((n,i)=>t.type._parseAsync(new ur(r,n,r.path,i)))).then(n=>Pa.mergeArray(o,n));const l=[...r.data].map((n,i)=>t.type._parseSync(new ur(r,n,r.path,i)));return Pa.mergeArray(o,l)}get element(){return this._def.type}min(e,r){return new ir({...this._def,minLength:{value:e,message:ve.toString(r)}})}max(e,r){return new ir({...this._def,maxLength:{value:e,message:ve.toString(r)}})}length(e,r){return new ir({...this._def,exactLength:{value:e,message:ve.toString(r)}})}nonempty(e){return this.min(1,e)}}ir.create=(a,e)=>new ir({type:a,minLength:null,maxLength:null,exactLength:null,typeName:Le.ZodArray,...Ge(e)});function no(a){if(a instanceof _a){const e={};for(const r in a.shape){const o=a.shape[r];e[r]=Or.create(no(o))}return new _a({...a._def,shape:()=>e})}else return a instanceof ir?new ir({...a._def,type:no(a.element)}):a instanceof Or?Or.create(no(a.unwrap())):a instanceof co?co.create(no(a.unwrap())):a instanceof br?br.create(a.items.map(e=>no(e))):a}class _a extends Ee{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),r=ze.objectKeys(e);return this._cached={shape:e,keys:r}}_parse(e){if(this._getType(e)!==_e.object){const u=this._getOrReturnCtx(e);return ce(u,{code:Z.invalid_type,expected:_e.object,received:u.parsedType}),Ae}const{status:o,ctx:t}=this._processInputParams(e),{shape:l,keys:n}=this._getCached(),i=[];if(!(this._def.catchall instanceof Nr&&this._def.unknownKeys==="strip"))for(const u in t.data)n.includes(u)||i.push(u);const s=[];for(const u of n){const _=l[u],p=t.data[u];s.push({key:{status:"valid",value:u},value:_._parse(new ur(t,p,t.path,u)),alwaysSet:u in t.data})}if(this._def.catchall instanceof Nr){const u=this._def.unknownKeys;if(u==="passthrough")for(const _ of i)s.push({key:{status:"valid",value:_},value:{status:"valid",value:t.data[_]}});else if(u==="strict")i.length>0&&(ce(t,{code:Z.unrecognized_keys,keys:i}),o.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const _ of i){const p=t.data[_];s.push({key:{status:"valid",value:_},value:u._parse(new ur(t,p,t.path,_)),alwaysSet:_ in t.data})}}return t.common.async?Promise.resolve().then(async()=>{const u=[];for(const _ of s){const p=await _.key;u.push({key:p,value:await _.value,alwaysSet:_.alwaysSet})}return u}).then(u=>Pa.mergeObjectSync(o,u)):Pa.mergeObjectSync(o,s)}get shape(){return this._def.shape()}strict(e){return ve.errToObj,new _a({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,o)=>{var t,l,n,i;const s=(n=(l=(t=this._def).errorMap)===null||l===void 0?void 0:l.call(t,r,o).message)!==null&&n!==void 0?n:o.defaultError;return r.code==="unrecognized_keys"?{message:(i=ve.errToObj(e).message)!==null&&i!==void 0?i:s}:{message:s}}}:{}})}strip(){return new _a({...this._def,unknownKeys:"strip"})}passthrough(){return new _a({...this._def,unknownKeys:"passthrough"})}extend(e){return new _a({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new _a({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Le.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new _a({...this._def,catchall:e})}pick(e){const r={};return ze.objectKeys(e).forEach(o=>{e[o]&&this.shape[o]&&(r[o]=this.shape[o])}),new _a({...this._def,shape:()=>r})}omit(e){const r={};return ze.objectKeys(this.shape).forEach(o=>{e[o]||(r[o]=this.shape[o])}),new _a({...this._def,shape:()=>r})}deepPartial(){return no(this)}partial(e){const r={};return ze.objectKeys(this.shape).forEach(o=>{const t=this.shape[o];e&&!e[o]?r[o]=t:r[o]=t.optional()}),new _a({...this._def,shape:()=>r})}required(e){const r={};return ze.objectKeys(this.shape).forEach(o=>{if(e&&!e[o])r[o]=this.shape[o];else{let l=this.shape[o];for(;l instanceof Or;)l=l._def.innerType;r[o]=l}}),new _a({...this._def,shape:()=>r})}keyof(){return o_(ze.objectKeys(this.shape))}}_a.create=(a,e)=>new _a({shape:()=>a,unknownKeys:"strip",catchall:Nr.create(),typeName:Le.ZodObject,...Ge(e)});_a.strictCreate=(a,e)=>new _a({shape:()=>a,unknownKeys:"strict",catchall:Nr.create(),typeName:Le.ZodObject,...Ge(e)});_a.lazycreate=(a,e)=>new _a({shape:a,unknownKeys:"strip",catchall:Nr.create(),typeName:Le.ZodObject,...Ge(e)});class on extends Ee{_parse(e){const{ctx:r}=this._processInputParams(e),o=this._def.options;function t(l){for(const i of l)if(i.result.status==="valid")return i.result;for(const i of l)if(i.result.status==="dirty")return r.common.issues.push(...i.ctx.common.issues),i.result;const n=l.map(i=>new lr(i.ctx.common.issues));return ce(r,{code:Z.invalid_union,unionErrors:n}),Ae}if(r.common.async)return Promise.all(o.map(async l=>{const n={...r,common:{...r.common,issues:[]},parent:null};return{result:await l._parseAsync({data:r.data,path:r.path,parent:n}),ctx:n}})).then(t);{let l;const n=[];for(const s of o){const u={...r,common:{...r.common,issues:[]},parent:null},_=s._parseSync({data:r.data,path:r.path,parent:u});if(_.status==="valid")return _;_.status==="dirty"&&!l&&(l={result:_,ctx:u}),u.common.issues.length&&n.push(u.common.issues)}if(l)return r.common.issues.push(...l.ctx.common.issues),l.result;const i=n.map(s=>new lr(s));return ce(r,{code:Z.invalid_union,unionErrors:i}),Ae}}get options(){return this._def.options}}on.create=(a,e)=>new on({options:a,typeName:Le.ZodUnion,...Ge(e)});const zt=a=>a instanceof ln?zt(a.schema):a instanceof Mr?zt(a.innerType()):a instanceof sn?[a.value]:a instanceof Jr?a.options:a instanceof un?Object.keys(a.enum):a instanceof _n?zt(a._def.innerType):a instanceof an?[void 0]:a instanceof rn?[null]:null;class Jl extends Ee{_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==_e.object)return ce(r,{code:Z.invalid_type,expected:_e.object,received:r.parsedType}),Ae;const o=this.discriminator,t=r.data[o],l=this.optionsMap.get(t);return l?r.common.async?l._parseAsync({data:r.data,path:r.path,parent:r}):l._parseSync({data:r.data,path:r.path,parent:r}):(ce(r,{code:Z.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[o]}),Ae)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,o){const t=new Map;for(const l of r){const n=zt(l.shape[e]);if(!n)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const i of n){if(t.has(i))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);t.set(i,l)}}return new Jl({typeName:Le.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:t,...Ge(o)})}}function Hl(a,e){const r=Vr(a),o=Vr(e);if(a===e)return{valid:!0,data:a};if(r===_e.object&&o===_e.object){const t=ze.objectKeys(e),l=ze.objectKeys(a).filter(i=>t.indexOf(i)!==-1),n={...a,...e};for(const i of l){const s=Hl(a[i],e[i]);if(!s.valid)return{valid:!1};n[i]=s.data}return{valid:!0,data:n}}else if(r===_e.array&&o===_e.array){if(a.length!==e.length)return{valid:!1};const t=[];for(let l=0;l<a.length;l++){const n=a[l],i=e[l],s=Hl(n,i);if(!s.valid)return{valid:!1};t.push(s.data)}return{valid:!0,data:t}}else return r===_e.date&&o===_e.date&&+a==+e?{valid:!0,data:a}:{valid:!1}}class tn extends Ee{_parse(e){const{status:r,ctx:o}=this._processInputParams(e),t=(l,n)=>{if(qi(l)||qi(n))return Ae;const i=Hl(l.value,n.value);return i.valid?((Yi(l)||Yi(n))&&r.dirty(),{status:r.value,value:i.data}):(ce(o,{code:Z.invalid_intersection_types}),Ae)};return o.common.async?Promise.all([this._def.left._parseAsync({data:o.data,path:o.path,parent:o}),this._def.right._parseAsync({data:o.data,path:o.path,parent:o})]).then(([l,n])=>t(l,n)):t(this._def.left._parseSync({data:o.data,path:o.path,parent:o}),this._def.right._parseSync({data:o.data,path:o.path,parent:o}))}}tn.create=(a,e,r)=>new tn({left:a,right:e,typeName:Le.ZodIntersection,...Ge(r)});class br extends Ee{_parse(e){const{status:r,ctx:o}=this._processInputParams(e);if(o.parsedType!==_e.array)return ce(o,{code:Z.invalid_type,expected:_e.array,received:o.parsedType}),Ae;if(o.data.length<this._def.items.length)return ce(o,{code:Z.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ae;!this._def.rest&&o.data.length>this._def.items.length&&(ce(o,{code:Z.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const l=[...o.data].map((n,i)=>{const s=this._def.items[i]||this._def.rest;return s?s._parse(new ur(o,n,o.path,i)):null}).filter(n=>!!n);return o.common.async?Promise.all(l).then(n=>Pa.mergeArray(r,n)):Pa.mergeArray(r,l)}get items(){return this._def.items}rest(e){return new br({...this._def,rest:e})}}br.create=(a,e)=>{if(!Array.isArray(a))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new br({items:a,typeName:Le.ZodTuple,rest:null,...Ge(e)})};class nn extends Ee{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:o}=this._processInputParams(e);if(o.parsedType!==_e.object)return ce(o,{code:Z.invalid_type,expected:_e.object,received:o.parsedType}),Ae;const t=[],l=this._def.keyType,n=this._def.valueType;for(const i in o.data)t.push({key:l._parse(new ur(o,i,o.path,i)),value:n._parse(new ur(o,o.data[i],o.path,i))});return o.common.async?Pa.mergeObjectAsync(r,t):Pa.mergeObjectSync(r,t)}get element(){return this._def.valueType}static create(e,r,o){return r instanceof Ee?new nn({keyType:e,valueType:r,typeName:Le.ZodRecord,...Ge(o)}):new nn({keyType:gr.create(),valueType:e,typeName:Le.ZodRecord,...Ge(r)})}}class Ul extends Ee{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:o}=this._processInputParams(e);if(o.parsedType!==_e.map)return ce(o,{code:Z.invalid_type,expected:_e.map,received:o.parsedType}),Ae;const t=this._def.keyType,l=this._def.valueType,n=[...o.data.entries()].map(([i,s],u)=>({key:t._parse(new ur(o,i,o.path,[u,"key"])),value:l._parse(new ur(o,s,o.path,[u,"value"]))}));if(o.common.async){const i=new Map;return Promise.resolve().then(async()=>{for(const s of n){const u=await s.key,_=await s.value;if(u.status==="aborted"||_.status==="aborted")return Ae;(u.status==="dirty"||_.status==="dirty")&&r.dirty(),i.set(u.value,_.value)}return{status:r.value,value:i}})}else{const i=new Map;for(const s of n){const u=s.key,_=s.value;if(u.status==="aborted"||_.status==="aborted")return Ae;(u.status==="dirty"||_.status==="dirty")&&r.dirty(),i.set(u.value,_.value)}return{status:r.value,value:i}}}}Ul.create=(a,e,r)=>new Ul({valueType:e,keyType:a,typeName:Le.ZodMap,...Ge(r)});class po extends Ee{_parse(e){const{status:r,ctx:o}=this._processInputParams(e);if(o.parsedType!==_e.set)return ce(o,{code:Z.invalid_type,expected:_e.set,received:o.parsedType}),Ae;const t=this._def;t.minSize!==null&&o.data.size<t.minSize.value&&(ce(o,{code:Z.too_small,minimum:t.minSize.value,type:"set",inclusive:!0,exact:!1,message:t.minSize.message}),r.dirty()),t.maxSize!==null&&o.data.size>t.maxSize.value&&(ce(o,{code:Z.too_big,maximum:t.maxSize.value,type:"set",inclusive:!0,exact:!1,message:t.maxSize.message}),r.dirty());const l=this._def.valueType;function n(s){const u=new Set;for(const _ of s){if(_.status==="aborted")return Ae;_.status==="dirty"&&r.dirty(),u.add(_.value)}return{status:r.value,value:u}}const i=[...o.data.values()].map((s,u)=>l._parse(new ur(o,s,o.path,u)));return o.common.async?Promise.all(i).then(s=>n(s)):n(i)}min(e,r){return new po({...this._def,minSize:{value:e,message:ve.toString(r)}})}max(e,r){return new po({...this._def,maxSize:{value:e,message:ve.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}}po.create=(a,e)=>new po({valueType:a,minSize:null,maxSize:null,typeName:Le.ZodSet,...Ge(e)});class Yo extends Ee{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==_e.function)return ce(r,{code:Z.invalid_type,expected:_e.function,received:r.parsedType}),Ae;function o(i,s){return bl({data:i,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Sl(),$t].filter(u=>!!u),issueData:{code:Z.invalid_arguments,argumentsError:s}})}function t(i,s){return bl({data:i,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Sl(),$t].filter(u=>!!u),issueData:{code:Z.invalid_return_type,returnTypeError:s}})}const l={errorMap:r.common.contextualErrorMap},n=r.data;if(this._def.returns instanceof ot){const i=this;return Ia(async function(...s){const u=new lr([]),_=await i._def.args.parseAsync(s,l).catch(h=>{throw u.addIssue(o(s,h)),u}),p=await Reflect.apply(n,this,_);return await i._def.returns._def.type.parseAsync(p,l).catch(h=>{throw u.addIssue(t(p,h)),u})})}else{const i=this;return Ia(function(...s){const u=i._def.args.safeParse(s,l);if(!u.success)throw new lr([o(s,u.error)]);const _=Reflect.apply(n,this,u.data),p=i._def.returns.safeParse(_,l);if(!p.success)throw new lr([t(_,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Yo({...this._def,args:br.create(e).rest(so.create())})}returns(e){return new Yo({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,o){return new Yo({args:e||br.create([]).rest(so.create()),returns:r||so.create(),typeName:Le.ZodFunction,...Ge(o)})}}class ln extends Ee{get schema(){return this._def.getter()}_parse(e){const{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}ln.create=(a,e)=>new ln({getter:a,typeName:Le.ZodLazy,...Ge(e)});class sn extends Ee{_parse(e){if(e.data!==this._def.value){const r=this._getOrReturnCtx(e);return ce(r,{received:r.data,code:Z.invalid_literal,expected:this._def.value}),Ae}return{status:"valid",value:e.data}}get value(){return this._def.value}}sn.create=(a,e)=>new sn({value:a,typeName:Le.ZodLiteral,...Ge(e)});function o_(a,e){return new Jr({values:a,typeName:Le.ZodEnum,...Ge(e)})}class Jr extends Ee{_parse(e){if(typeof e.data!="string"){const r=this._getOrReturnCtx(e),o=this._def.values;return ce(r,{expected:ze.joinValues(o),received:r.parsedType,code:Z.invalid_type}),Ae}if(this._def.values.indexOf(e.data)===-1){const r=this._getOrReturnCtx(e),o=this._def.values;return ce(r,{received:r.data,code:Z.invalid_enum_value,options:o}),Ae}return Ia(e.data)}get options(){return this._def.values}get enum(){const e={};for(const r of this._def.values)e[r]=r;return e}get Values(){const e={};for(const r of this._def.values)e[r]=r;return e}get Enum(){const e={};for(const r of this._def.values)e[r]=r;return e}extract(e){return Jr.create(e)}exclude(e){return Jr.create(this.options.filter(r=>!e.includes(r)))}}Jr.create=o_;class un extends Ee{_parse(e){const r=ze.getValidEnumValues(this._def.values),o=this._getOrReturnCtx(e);if(o.parsedType!==_e.string&&o.parsedType!==_e.number){const t=ze.objectValues(r);return ce(o,{expected:ze.joinValues(t),received:o.parsedType,code:Z.invalid_type}),Ae}if(r.indexOf(e.data)===-1){const t=ze.objectValues(r);return ce(o,{received:o.data,code:Z.invalid_enum_value,options:t}),Ae}return Ia(e.data)}get enum(){return this._def.values}}un.create=(a,e)=>new un({values:a,typeName:Le.ZodNativeEnum,...Ge(e)});class ot extends Ee{unwrap(){return this._def.type}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==_e.promise&&r.common.async===!1)return ce(r,{code:Z.invalid_type,expected:_e.promise,received:r.parsedType}),Ae;const o=r.parsedType===_e.promise?r.data:Promise.resolve(r.data);return Ia(o.then(t=>this._def.type.parseAsync(t,{path:r.path,errorMap:r.common.contextualErrorMap})))}}ot.create=(a,e)=>new ot({type:a,typeName:Le.ZodPromise,...Ge(e)});class Mr extends Ee{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Le.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:r,ctx:o}=this._processInputParams(e),t=this._def.effect||null,l={addIssue:n=>{ce(o,n),n.fatal?r.abort():r.dirty()},get path(){return o.path}};if(l.addIssue=l.addIssue.bind(l),t.type==="preprocess"){const n=t.transform(o.data,l);return o.common.issues.length?{status:"dirty",value:o.data}:o.common.async?Promise.resolve(n).then(i=>this._def.schema._parseAsync({data:i,path:o.path,parent:o})):this._def.schema._parseSync({data:n,path:o.path,parent:o})}if(t.type==="refinement"){const n=i=>{const s=t.refinement(i,l);if(o.common.async)return Promise.resolve(s);if(s instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return i};if(o.common.async===!1){const i=this._def.schema._parseSync({data:o.data,path:o.path,parent:o});return i.status==="aborted"?Ae:(i.status==="dirty"&&r.dirty(),n(i.value),{status:r.value,value:i.value})}else return this._def.schema._parseAsync({data:o.data,path:o.path,parent:o}).then(i=>i.status==="aborted"?Ae:(i.status==="dirty"&&r.dirty(),n(i.value).then(()=>({status:r.value,value:i.value}))))}if(t.type==="transform")if(o.common.async===!1){const n=this._def.schema._parseSync({data:o.data,path:o.path,parent:o});if(!en(n))return n;const i=t.transform(n.value,l);if(i instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:i}}else return this._def.schema._parseAsync({data:o.data,path:o.path,parent:o}).then(n=>en(n)?Promise.resolve(t.transform(n.value,l)).then(i=>({status:r.value,value:i})):n);ze.assertNever(t)}}Mr.create=(a,e,r)=>new Mr({schema:a,typeName:Le.ZodEffects,effect:e,...Ge(r)});Mr.createWithPreprocess=(a,e,r)=>new Mr({schema:e,effect:{type:"preprocess",transform:a},typeName:Le.ZodEffects,...Ge(r)});class Or extends Ee{_parse(e){return this._getType(e)===_e.undefined?Ia(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Or.create=(a,e)=>new Or({innerType:a,typeName:Le.ZodOptional,...Ge(e)});class co extends Ee{_parse(e){return this._getType(e)===_e.null?Ia(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}co.create=(a,e)=>new co({innerType:a,typeName:Le.ZodNullable,...Ge(e)});class _n extends Ee{_parse(e){const{ctx:r}=this._processInputParams(e);let o=r.data;return r.parsedType===_e.undefined&&(o=this._def.defaultValue()),this._def.innerType._parse({data:o,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}_n.create=(a,e)=>new _n({innerType:a,typeName:Le.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Ge(e)});class Ll extends Ee{_parse(e){const{ctx:r}=this._processInputParams(e),o={...r,common:{...r.common,issues:[]}},t=this._def.innerType._parse({data:o.data,path:o.path,parent:{...o}});return Ml(t)?t.then(l=>({status:"valid",value:l.status==="valid"?l.value:this._def.catchValue({get error(){return new lr(o.common.issues)},input:o.data})})):{status:"valid",value:t.status==="valid"?t.value:this._def.catchValue({get error(){return new lr(o.common.issues)},input:o.data})}}removeCatch(){return this._def.innerType}}Ll.create=(a,e)=>new Ll({innerType:a,typeName:Le.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Ge(e)});class Cl extends Ee{_parse(e){if(this._getType(e)!==_e.nan){const o=this._getOrReturnCtx(e);return ce(o,{code:Z.invalid_type,expected:_e.nan,received:o.parsedType}),Ae}return{status:"valid",value:e.data}}}Cl.create=a=>new Cl({typeName:Le.ZodNaN,...Ge(a)});class dk extends Ee{_parse(e){const{ctx:r}=this._processInputParams(e),o=r.data;return this._def.type._parse({data:o,path:r.path,parent:r})}unwrap(){return this._def.type}}class Sn extends Ee{_parse(e){const{status:r,ctx:o}=this._processInputParams(e);if(o.common.async)return(async()=>{const l=await this._def.in._parseAsync({data:o.data,path:o.path,parent:o});return l.status==="aborted"?Ae:l.status==="dirty"?(r.dirty(),ok(l.value)):this._def.out._parseAsync({data:l.value,path:o.path,parent:o})})();{const t=this._def.in._parseSync({data:o.data,path:o.path,parent:o});return t.status==="aborted"?Ae:t.status==="dirty"?(r.dirty(),{status:"dirty",value:t.value}):this._def.out._parseSync({data:t.value,path:o.path,parent:o})}}static create(e,r){return new Sn({in:e,out:r,typeName:Le.ZodPipeline})}}class Il extends Ee{_parse(e){const r=this._def.innerType._parse(e);return en(r)&&(r.value=Object.freeze(r.value)),r}}Il.create=(a,e)=>new Il({innerType:a,typeName:Le.ZodReadonly,...Ge(e)});_a.lazycreate;var Le;(function(a){a.ZodString="ZodString",a.ZodNumber="ZodNumber",a.ZodNaN="ZodNaN",a.ZodBigInt="ZodBigInt",a.ZodBoolean="ZodBoolean",a.ZodDate="ZodDate",a.ZodSymbol="ZodSymbol",a.ZodUndefined="ZodUndefined",a.ZodNull="ZodNull",a.ZodAny="ZodAny",a.ZodUnknown="ZodUnknown",a.ZodNever="ZodNever",a.ZodVoid="ZodVoid",a.ZodArray="ZodArray",a.ZodObject="ZodObject",a.ZodUnion="ZodUnion",a.ZodDiscriminatedUnion="ZodDiscriminatedUnion",a.ZodIntersection="ZodIntersection",a.ZodTuple="ZodTuple",a.ZodRecord="ZodRecord",a.ZodMap="ZodMap",a.ZodSet="ZodSet",a.ZodFunction="ZodFunction",a.ZodLazy="ZodLazy",a.ZodLiteral="ZodLiteral",a.ZodEnum="ZodEnum",a.ZodEffects="ZodEffects",a.ZodNativeEnum="ZodNativeEnum",a.ZodOptional="ZodOptional",a.ZodNullable="ZodNullable",a.ZodDefault="ZodDefault",a.ZodCatch="ZodCatch",a.ZodPromise="ZodPromise",a.ZodBranded="ZodBranded",a.ZodPipeline="ZodPipeline",a.ZodReadonly="ZodReadonly"})(Le||(Le={}));const Ko=gr.create,Sr=uo.create;Cl.create;_o.create;const mk=wl.create;rt.create;Tl.create;an.create;const kk=rn.create,Ji=vl.create;so.create;Nr.create;Pl.create;const pn=ir.create,pr=_a.create;_a.strictCreate;const yk=on.create;Jl.create;tn.create;br.create;const Vt=nn.create;Ul.create;po.create;Yo.create;ln.create;sn.create;Jr.create;const el=un.create;ot.create;Mr.create;Or.create;co.create;Mr.createWithPreprocess;Sn.create;function gk(a){switch(a){case a_.None:return Kl.None;default:return a}}function Zl(a){return Object.values(a).filter(e=>!isNaN(e))}const tt=Zl(gl),Sk=Zl(Kl),t_=Zl(va),n_=new Map(Sk.map(a=>[a,99])),bk=pr({Context1:Sr(),Context2:Sr(),Context3:Sr(),Context4:Sr()}),Mk=pr({Map:Vt(Ko(),bk)}),wk=pr({CloudRandomSet:Mk,UserKey:Ko(),H:Sr()}),Gr=pr({}),Tk=pr({WinCountByRule:Gr,WinCountBySpecial:Gr,WinCountByTclAtk:Sr(),WinCountByTclDef:Sr()}),vk=pr({BossKillNumMap:Gr,RareEnemyKillNumMap:Gr}),Pk=pr({BadgeList:pn(Ji()),GoodsMap:Gr,BynameAdjectiveMap:Gr,BynameSubjectMap:Gr,NamePlateBgMap:pn(Ji()),SkillChipMap:Gr,Versus:Tk,Coop:vk}),al=pr({ExDrinksArray:pn(el(a_).transform(gk)),ExSkillArray:pn(el(va)),MainSkill:el(Af),RandomContext:Sr(),Favorite:yk([mk(),kk()]).optional()}),Hk=pr({HaveGearHeadMap:Vt(Ko(),al),HaveGearShoesMap:Vt(Ko(),al),HaveGearClothesMap:Vt(Ko(),al)}),Zi=pr({GearDB:Hk,UserData:wk,Profile:Pk,LastUpdated:Sr()}),Uk={HaveGearHeadMap:{1:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:2189515646},1e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:4290029338},1001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:2741414257},1002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:1627655433},1003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:4114494948},1004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:100,RandomContext:2370100127},1005:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255],ExSkillArray:[8,6,0,8,9,8,7,5,0,10],Favorite:!1,MainSkill:5,RandomContext:3947508557},1006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:1555754734},1007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:103,RandomContext:882760687},1008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:1720182547},1009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:4253107977},1010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:853964527},1011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:3922871646},1012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:142529931},1014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:331703375},1020:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:598700885},1021:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:103,RandomContext:3198262169},1023:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:4256702184},1024:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1520679785},1026:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:1319392264},1028:{ExDrinksArray:[255],ExSkillArray:[12],Favorite:!1,MainSkill:7,RandomContext:3878973864},1031:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:2822796121},1032:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:1792277238},1033:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:1651375891},1034:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:283616999},1035:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3175253750},1036:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:2632713512},1037:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:1815495606},1038:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3604973775},1039:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1768793923},2e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:834892316},2001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:2039772358},2002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:100,RandomContext:2191547031},2003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:235019955},2004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:100,RandomContext:2739663568},2005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:103,RandomContext:1153793604},2008:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[11,3,13,7,10,3,9,5,13],Favorite:!1,MainSkill:11,RandomContext:3664846288},2009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:624195934},2012:{ExSkillArray:[],ExDrinksArray:[],MainSkill:103,RandomContext:2072068990,Favorite:!1},2013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:3370446103},3e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1769397753},3001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3699863540},3002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:618328433},3003:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[6,0,12,11,8,6,6,6,6],Favorite:!1,MainSkill:101,RandomContext:2770738372},3004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:1978320860},3005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:591891217},3006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:2993964537},3007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1855286281},3008:{ExDrinksArray:[255,255,255,6,6,255],ExSkillArray:[11,11,13,6,6,6],Favorite:!1,MainSkill:101,RandomContext:3528358805},3009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:2154295955},3010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:101,RandomContext:2860393132},3011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3422975582},3012:{ExDrinksArray:[255,255,255],ExSkillArray:[10,13,1],Favorite:!0,MainSkill:3,RandomContext:4246981167},3014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:1001955456},3015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:1389126055},3016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:101,RandomContext:793829876},3018:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:103,RandomContext:2372999902},3021:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[13,10,8,7,0,13,12,13,13,5,1],Favorite:!1,MainSkill:4,RandomContext:2486204247},3022:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:100,RandomContext:4239261905},3023:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:4237909227},3024:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:3611031770},3025:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:103,RandomContext:2661406981},3026:{ExDrinksArray:[255],ExSkillArray:[13],Favorite:!1,MainSkill:101,RandomContext:142735765},3027:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[7,255,7,255,4,4,2,2,1,11,1,5,6,1],Favorite:!0,MainSkill:4,RandomContext:2984073685},3028:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:3863986711},3029:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255],ExSkillArray:[12,8,4,13,13,8,12,3,10,1],Favorite:!1,MainSkill:13,RandomContext:36207012},3030:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:2142211089},3031:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:38310646},4e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:101,RandomContext:2568643033},4001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:456918589},4002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3629810893},4003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:2637015396},4004:{ExDrinksArray:[255,255,255],ExSkillArray:[8,3,11],Favorite:!1,MainSkill:0,RandomContext:3214876127},4005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:3093626221},4006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:3111982739},4007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:1135015914},4008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:1852417622},4010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:2168631555},4012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:3641231925},4015:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[0,10,7,10,13,0,9,0,11,5,9,6,9,2,11,0,12,12,0,11,5,0,0,0],Favorite:!1,MainSkill:3,RandomContext:1312051967},4016:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[7,8,7,0,12,7,8,8,2,0,0,0],Favorite:!1,MainSkill:2,RandomContext:3512252591},4017:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:101,RandomContext:3764238698},4018:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:2267258043},4019:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:100,RandomContext:100613171},4020:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1154561632},4021:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:986445994},5e3:{ExDrinksArray:[255,255,255],ExSkillArray:[8,6,3],Favorite:!0,MainSkill:0,RandomContext:38760056},5001:{ExDrinksArray:[255,255,255],ExSkillArray:[7,3,5],Favorite:!0,MainSkill:1,RandomContext:688480354},5002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:2136633900},5004:{ExDrinksArray:[255,255,1],ExSkillArray:[13,5,12],Favorite:!0,MainSkill:2,RandomContext:2306036635},5007:{ExDrinksArray:[255,255,255],ExSkillArray:[8,3,12],Favorite:!0,MainSkill:4,RandomContext:2252185106},5008:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[9,255,13,255,255,255,255,255,12],Favorite:!0,MainSkill:2,RandomContext:380775846},5009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:92735735},5010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:249627374},5011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:1226710963},5012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:436042593},6e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1317462110},6001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1960073621},6002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:3479240001},6003:{ExDrinksArray:[255,255,255],ExSkillArray:[8,5,2],Favorite:!1,MainSkill:4,RandomContext:3749842780},6004:{ExDrinksArray:[255,255,255],ExSkillArray:[0,0,0],MainSkill:5,RandomContext:0},6005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:3383504080},7e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:1541584731},7002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3389653892},7004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:1515661922},7005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:101,RandomContext:805207542},7006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:2250564852},7007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:4246086680},7009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:3591159041},7012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:1867993060},7013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:3031429254},7014:{ExDrinksArray:[255],ExSkillArray:[7],Favorite:!1,MainSkill:11,RandomContext:1834948094},7016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:1983669271},7018:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:4168757891},7019:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:101,RandomContext:2129759436},8e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:2669208518},8001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:103,RandomContext:1299248569},8002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:1790659163},8003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:1733078300},8004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:796029816},8005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:100,RandomContext:2232328133},8006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:1688519839},8007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:2571697237},8008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3281208227},8011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:1601840317},8014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:1631575487},8015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:1059825539},8016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:2220402888},8018:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:13195987},9001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:100,RandomContext:3540630783},9002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:3019446030},9003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:101,RandomContext:2034489975},9004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:2904498235},9005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:1159610451},9007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:103,RandomContext:1264001370},9009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:2014872584},10003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:1585178899},21010:{ExDrinksArray:[255,255,255],ExSkillArray:[10,6,6],MainSkill:0,RandomContext:0},21011:{ExDrinksArray:[255,255,255],ExSkillArray:[5,5,5],MainSkill:8,RandomContext:0},21015:{ExDrinksArray:[255,255,255],ExSkillArray:[13,12,7],MainSkill:11,RandomContext:0},25e3:{ExDrinksArray:[255,255,255],ExSkillArray:[1,6,1],Favorite:!1,MainSkill:4,RandomContext:3065603886},25001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:2478897921},25002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:2747694188},25003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:100,RandomContext:1786009345},25004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:59198720},25005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:26228568},25006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:1909167135},25007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:730248383},25008:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[1,13,1,8,5,11,0,7,0],Favorite:!1,MainSkill:0,RandomContext:3953236896},25009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:449135811},25010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:103,RandomContext:3507740563},25011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:306306679},25012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:1098924077},25013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:2475008359},25016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:4098053872},25017:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:861340165},25018:{ExSkillArray:[],ExDrinksArray:[],MainSkill:10,RandomContext:1905174501,Favorite:!1},25019:{ExSkillArray:[],ExDrinksArray:[],MainSkill:3,RandomContext:1591224429,Favorite:!1},25020:{ExSkillArray:[],ExDrinksArray:[],MainSkill:101,RandomContext:2888422169,Favorite:!1},27e3:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[3,1,1,13,8,10,3,9,8,6,2,10,13,2,3,5],Favorite:!1,MainSkill:3,RandomContext:529173327},27004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:102,RandomContext:576537078},27109:{ExDrinksArray:[255,255,255],ExSkillArray:[0,11,7],Favorite:!1,MainSkill:103,RandomContext:3112491382},27306:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:906595497},28e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:4052870878}},HaveGearShoesMap:{1e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:2680029237},1001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:1676652805},1002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:739737031},1003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:81289170},1004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:1953255471},1005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:2492976329},1006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:4035755837},1007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:559315259},1008:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[7,13,10,2,1,7,0,13,4,9,10,9,0,0,0],Favorite:!1,MainSkill:1,RandomContext:1467012581},1009:{ExDrinksArray:[255,255,255],ExSkillArray:[8,0,0],Favorite:!0,MainSkill:11,RandomContext:1792264768},1010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:3769566675},1011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:3982811249},1012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:3095288122},1021:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255],ExSkillArray:[2,3,7,2,7,9,2,12,5,6],Favorite:!1,MainSkill:0,RandomContext:2857975526},1022:{ExDrinksArray:[255,255,255,255,255,255,255,255],ExSkillArray:[9,2,8,2,13,12,5,6],Favorite:!1,MainSkill:3,RandomContext:4201873633},1023:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:1871169319},1024:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:110,RandomContext:371458509},1025:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1397626400},2e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:748825786},2001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:3209219425},2002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:1066833403},2003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:4118858772},2004:{ExDrinksArray:[255,255,255],ExSkillArray:[4,4,4],MainSkill:2,RandomContext:0},2005:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[2,3,10,6,0,3,3,11,3],Favorite:!1,MainSkill:109,RandomContext:692052452},2006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1986872481},2008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:3438121075},2009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:693575515},2010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:593598909},2016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:111,RandomContext:1959125519},2017:{ExDrinksArray:[255,255,255],ExSkillArray:[9,7,10],Favorite:!1,MainSkill:5,RandomContext:1438674849},2018:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:1421745799},2025:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:3229949074},2042:{ExDrinksArray:[255,255,255],ExSkillArray:[11,10,0],Favorite:!0,MainSkill:6,RandomContext:0},2043:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:2071080470},2044:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:2130982555},2045:{ExDrinksArray:[255,255,255],ExSkillArray:[0,0,4],Favorite:!1,MainSkill:11,RandomContext:1330629632},2046:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3130343107},2047:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:3297245858},2048:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:3532541277},2049:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:902009636},2050:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:321299236},2051:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:313556835},2052:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:2542084147},3e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:3522805590},3001:{ExDrinksArray:[255],ExSkillArray:[10],Favorite:!1,MainSkill:0,RandomContext:152099912},3002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:2045661698},3003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1812918550},3004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:1133050512},3005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1028057205},3006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:4037480894},3007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1994377880},3008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:4212805807},3009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:680713783},3013:{ExDrinksArray:[255,255,255],ExSkillArray:[11,2,3],Favorite:!1,MainSkill:111,RandomContext:2938953654},3020:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[7,6,1,1,6,0,2,2,3,2,1],Favorite:!1,MainSkill:5,RandomContext:3181920947},3021:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:2680029372},3022:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:4048331233},3023:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:2714462481},3024:{ExDrinksArray:[255,255,255],ExSkillArray:[5,5,5],MainSkill:0,RandomContext:0},3025:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:110,RandomContext:2439783197},3026:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:3758571314},3027:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:2396467266},4e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:360107820},4001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:2745922320},4002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3524888211},4003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:110,RandomContext:1042966723},4007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:683369935},4008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:110,RandomContext:1073116974},4009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:2285030740},4010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:1340487231},4011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:3420945198},4012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:4245931399},4014:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[3,5,9,3,12,10,3,5,1,6,11,0],Favorite:!1,MainSkill:2,RandomContext:4191523141},4015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:4055560442},4016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:2539767051},4017:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:3523036693},4018:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3379862358},4019:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:110,RandomContext:3403468622},4020:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:1188966271},4021:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:2514697642},4022:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:131295413},4023:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:381047266},4024:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:2762456842},4025:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:3496226273},4026:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:2369568200},5e3:{ExDrinksArray:[255,255,255],ExSkillArray:[1,9,12],Favorite:!1,MainSkill:2,RandomContext:91609587},5001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1973067104},5002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:1581122943},6e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1827090193},6001:{ExDrinksArray:[255,255,255],ExSkillArray:[3,6,0],Favorite:!1,MainSkill:4,RandomContext:2987228930},6002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:2455011806},6003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:1956719432},6004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:4160919041},6005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:3324246761},6006:{ExDrinksArray:[255,255,255],ExSkillArray:[6,0,9],Favorite:!0,MainSkill:5,RandomContext:1831285566},6007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:3302649217},6008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:1818313043},6009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:111,RandomContext:3023355421},6010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:171832728},6011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:1213823805},6012:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255],ExSkillArray:[11,4,0,0,13,10,2,0,12,8],Favorite:!1,MainSkill:2,RandomContext:4040955158},6013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:1714298173},6019:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:76757790},6020:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255],ExSkillArray:[8,10,12,11,7,1,12,1,7,3],Favorite:!1,MainSkill:1,RandomContext:964357708},6021:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:4141250835},6022:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:3616334567},6023:{ExDrinksArray:[255,255,255,6,6,6,6,255,255,255],ExSkillArray:[1,13,0,11,12,3,1,2,3,1],Favorite:!1,MainSkill:0,RandomContext:1671495570},6024:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:111,RandomContext:2556756408},6025:{ExDrinksArray:[255,255,255],ExSkillArray:[9,2,3],Favorite:!0,MainSkill:2,RandomContext:3547271082},6026:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:2060092300},6027:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1936409085},6028:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:355848e4},6029:{ExSkillArray:[],ExDrinksArray:[],MainSkill:2,RandomContext:4405380,Favorite:!1},6030:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1050061091},7e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:2308527792},7001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:2131369587},7002:{ExDrinksArray:[255,255,255],ExSkillArray:[5,4,6],Favorite:!1,MainSkill:5,RandomContext:178583880},7004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:26010276},8e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:2184053454},8001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:808307486},8002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:2215967972},8003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:3133674459},8004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:3413540851},8005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3349363969},8007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:3123102338},8010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:3852804326},8011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1684971364},8013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:109,RandomContext:3261336072},8014:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[3,10,0,3,8,12,4,0,6],Favorite:!1,MainSkill:11,RandomContext:3099750450},8015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:980223826},25e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:1343739370},25001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1253967133},25002:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[12,8,4,0,10,2,8,0,10],Favorite:!1,MainSkill:0,RandomContext:3127835977},25003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:3568383832},25004:{ExDrinksArray:[255,255],ExSkillArray:[3,1],Favorite:!0,MainSkill:4,RandomContext:3896280251},25005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:1234630606},25006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1134710484},25007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:449406237},25008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1574626746},25009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:110,RandomContext:4129022002},25010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:992076384},25011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:111,RandomContext:3866634457},25012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:3238411037},25013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:3537765224},25014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3126092796},25015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:1451549101},25018:{ExSkillArray:[],ExDrinksArray:[],MainSkill:11,RandomContext:4057707425,Favorite:!1},25019:{ExSkillArray:[],ExDrinksArray:[],MainSkill:6,RandomContext:1934970489,Favorite:!1},25020:{ExSkillArray:[],ExDrinksArray:[],MainSkill:109,RandomContext:2396705305,Favorite:!1},27e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:1356852068},27004:{ExDrinksArray:[255,255,255],ExSkillArray:[7,7,7],Favorite:!1,MainSkill:0,RandomContext:0},27306:{ExDrinksArray:[255,255],ExSkillArray:[3,11],Favorite:!1,MainSkill:11,RandomContext:642221659},28e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:3329591101}},HaveGearClothesMap:{2:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:2686056808},1e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1315000679},1001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:674471373},1003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:3889771848},1004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:1966109489},1005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1328236073},1006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1357433695},1007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:2012454914},1008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:2073841118},1009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:404478312},1010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:2286125816},1011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:3551909784},1012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:551519267},1013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:2310415932},1014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:3581967767},1015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:818264677},1016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:3335030495},1017:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3960921055},1018:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:4184930711},1019:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:839978369},1020:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:357923806},1021:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:1897063848},1022:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:2632224943},1023:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:107,RandomContext:2160802417},1026:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:533690662},1027:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3293169569},1028:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:2771415924},1029:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:2996673903},1035:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:745777173},1047:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1732541589},1048:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:3612547547},1049:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:3089586545},1050:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:217897082},1055:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:1453753812},1062:{ExDrinksArray:[255],ExSkillArray:[11],Favorite:!0,MainSkill:8,RandomContext:0},1063:{ExDrinksArray:[255,255,255],ExSkillArray:[2,2,2],MainSkill:0,RandomContext:0},1066:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1615084181},1067:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:787106512},1068:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:752360159},1069:{ExDrinksArray:[255,255,255],ExSkillArray:[2,11,2],Favorite:!0,MainSkill:6,RandomContext:2045927706},1070:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:2040885583},1071:{ExDrinksArray:[255],ExSkillArray:[12],Favorite:!1,MainSkill:0,RandomContext:3405437584},1072:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:953217996},1073:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:788709248},1074:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3660861152},1075:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:2922386873},1076:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1107421881},1077:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:555141148},1078:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:2706546248},1081:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3977986913},1082:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:1633529420},1083:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:3833709442},1084:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:2423223210},1085:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3737048746},1086:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:3003876512},1088:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:2342947982},1090:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:146747445},1091:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:3940321416},1092:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3815749087},1093:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:140902973},1094:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:3859143716},1095:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1293599962},2e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:647328250},2001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:2258997821},2002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:3735111710},2003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:2651395983},2004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:3676827559},2005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:245600033},2006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:976938380},2007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:2172664163},2008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:1081221743},2009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:2337827437},2010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:2883465240},2012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:2252254646},2015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:1744988076},2026:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:2260135728},2027:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:1071460591},3e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:2627558304},3001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3101890049},3002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1796900293},3003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:375240064},3004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:107,RandomContext:1580808854},3005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:3963935411},3006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:718242236},3007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:107,RandomContext:3482478227},3008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:2618986452},3009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:2966021946},4e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:3486617327},4001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:4274637017},4002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1062328748},4003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:2269190921},4004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:3435026849},4005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:1491401173},4006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:3660830960},4007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:1000809749},4009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:1539346272},4010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:2321313111},5e3:{ExDrinksArray:[255,255],ExSkillArray:[12,13],Favorite:!1,MainSkill:3,RandomContext:451721969},5001:{ExDrinksArray:[255,255,255],ExSkillArray:[0,0,0],Favorite:!1,MainSkill:106,RandomContext:1245969236},5002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:732724269},5003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3618913700},5004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:2452920242},5005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:356426701},5006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:2471732573},5007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1827270828},5008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1166350077},5010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:1716358532},5011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:2902212487},5012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:2515401376},5013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:3033441580},5014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1026320476},5015:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[2,8,6,6,6,8,10,6,6,6,4,6],Favorite:!1,MainSkill:5,RandomContext:1037162439},5016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:2367037763},5019:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:3449366355},5023:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:107,RandomContext:1050547880},5036:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:728356718},5045:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:22718139},5046:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3894619551},5047:{ExDrinksArray:[255,255,255],ExSkillArray:[10,12,2],Favorite:!1,MainSkill:0,RandomContext:4038736980},5048:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:2309762995},5049:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3594431174},5050:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[11,3,0,0,0,13,0,8,8,0,6],Favorite:!1,MainSkill:2,RandomContext:3633412426},5051:{ExDrinksArray:[255,255],ExSkillArray:[0,1],Favorite:!1,MainSkill:0,RandomContext:1234248826},5052:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:107,RandomContext:2745593245},5053:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:4205877977},5054:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:2791564516},5055:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3289330467},5056:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:4091138671},5057:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:3414529989},5058:{ExSkillArray:[],ExDrinksArray:[],MainSkill:104,RandomContext:3880631823,Favorite:!1},5059:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:1753140948},5060:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:3483325478},5061:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:1236395092},5062:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:568317098},5063:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:793600208},5064:{ExSkillArray:[],ExDrinksArray:[],MainSkill:2,RandomContext:601476384,Favorite:!1},6e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:3734921180},6001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:1739843537},6007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:3684301422},6008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:1152411229},7e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:4303016},7001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:135351084},7002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:4248803262},7003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:1518702332},7004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:1627076200},7005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:626563256},7006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:1443872169},7007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:3636661293},7010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:2690557654},7013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:4153384178},7016:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:107,RandomContext:2425793406},7017:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:3084327184},7018:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:2596137076},7020:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:1396868442},7021:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:281991716},7022:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:22419507},7023:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:2974824735},8e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:1975776755},8001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:314478342},8002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:781679707},8003:{ExDrinksArray:[255,255,255],ExSkillArray:[4,11,0],Favorite:!1,MainSkill:3,RandomContext:3372217769},8004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:2911086855},8005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:3850222014},8006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:2489565461},8007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:4284964082},8008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1892275059},8009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:982178824},8010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:1895304154},8011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3024173937},8012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:2010918987},8013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:351466750},8014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:3778147630},8015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:4119681350},8017:{ExDrinksArray:[255,255,255,6,6,6,6,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[1,5,7,6,13,6,5,6,9,2,9,3,6,1,7,0,1,4,12,1,1,10,12,1,1,1],Favorite:!1,MainSkill:0,RandomContext:4252119204},8018:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[8,5,7,255,255,255,255,255,4,0,1,10,4,13,11,12,4,0,4,4,4],Favorite:!1,MainSkill:0,RandomContext:809241910},8019:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1276270433},8020:{ExDrinksArray:[255,255,255],ExSkillArray:[1,1,1],MainSkill:5,RandomContext:0},8024:{ExDrinksArray:[255,255,255],ExSkillArray:[13,4,4],Favorite:!1,MainSkill:1,RandomContext:331742544},8025:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255],ExSkillArray:[3,12,8,0,1,1,4,13,1,5],Favorite:!1,MainSkill:2,RandomContext:2911527764},8026:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:1414220182},8030:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:551690297},8031:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:4094700617},8032:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:2329960837},8033:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:1204858850},8034:{ExDrinksArray:[255,255,255,255,255,255,255,255,255,255,255],ExSkillArray:[5,3,9,4,6,10,3,2,4,4,4],Favorite:!1,MainSkill:11,RandomContext:3247244463},8036:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:139145019},8037:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1517446356},8038:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:3617922931},8039:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:1275289060},8040:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:107,RandomContext:1950828860},9e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:2160566136},9001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:3993865219},9002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:635168507},9003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:2844320810},9004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3069785687},9005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:13,RandomContext:1641354542},9010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:3365162647},9011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1196180831},9012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:4,RandomContext:1120023766},9013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:797190063},9014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:694595662},9015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:1027309395},1e4:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1507398447},10001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:1760047208},10002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:104,RandomContext:110905138},10006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:10,RandomContext:80789573},10012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:731524588},10013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:4178015898},10014:{ExDrinksArray:[255,255,255,255],ExSkillArray:[11,6,3,11],Favorite:!1,MainSkill:104,RandomContext:2844327285},10015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:2090285648},25e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:3825956433},25001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:82388844},25002:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:4257004413},25003:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:3737941183},25004:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:6,RandomContext:1865114263},25005:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:11,RandomContext:2212463181},25006:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:107,RandomContext:672481437},25007:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:7,RandomContext:3975585524},25008:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:4224403882},25009:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:1,RandomContext:3778532689},25010:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:9,RandomContext:1039160788},25011:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:12,RandomContext:9036630},25012:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:105,RandomContext:4256287050},25013:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:0,RandomContext:2035486298},25014:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:2,RandomContext:2790469485},25015:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:3,RandomContext:2027480701},25017:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:106,RandomContext:4091824124},25018:{ExSkillArray:[],ExDrinksArray:[],MainSkill:104,RandomContext:1524046637,Favorite:!1},25019:{ExSkillArray:[],ExDrinksArray:[],MainSkill:13,RandomContext:2922634540,Favorite:!1},25020:{ExSkillArray:[],ExDrinksArray:[],MainSkill:4,RandomContext:92816398,Favorite:!1},27e3:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[0,13,4,3,3,4,7,13,10],MainSkill:4,RandomContext:3900013705},27004:{ExDrinksArray:[255,255,255,255,255,255,255,255,255],ExSkillArray:[13,4,6,3,3,1,2,2,3],Favorite:!1,MainSkill:5,RandomContext:3191228998},27306:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:8,RandomContext:1700222859},28e3:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:1866915298},28001:{ExDrinksArray:[],ExSkillArray:[],Favorite:!1,MainSkill:5,RandomContext:2333032718}}},Lk={CloudRandomSet:{Map:{CardPack:{Context1:0,Context2:0,Context3:0,Context4:0},Lot:{Context1:1907362708,Context2:2826507584,Context3:1382879603,Context4:2380230547},LotFest:{Context1:2479728950,Context2:2689518561,Context3:2596909550,Context4:2539610310},MissionDrone:{Context1:0,Context2:0,Context3:0,Context4:0},MysteryBox:{Context1:0,Context2:0,Context3:0,Context4:0},RandomDrinkTicket:{Context1:0,Context2:0,Context3:0,Context4:0},RandomFoodTicket:{Context1:0,Context2:0,Context3:0,Context4:0},RewardRandomPool_Byname:{Context1:0,Context2:0,Context3:0,Context4:0},RewardRandomPool_Emote:{Context1:0,Context2:0,Context3:0,Context4:0},RewardRandomPool_Gear_Clothes:{Context1:0,Context2:0,Context3:0,Context4:0},RewardRandomPool_Gear_Head:{Context1:0,Context2:0,Context3:0,Context4:0},RewardRandomPool_Gear_Shoes:{Context1:0,Context2:0,Context3:0,Context4:0},RewardRandomPool_LockerFigure:{Context1:0,Context2:0,Context3:0,Context4:0},RewardRandomPool_LockerSticker:{Context1:0,Context2:0,Context3:0,Context4:0},RewardRandomPool_NamePlateBg:{Context1:0,Context2:0,Context3:0,Context4:0},Vendor:{Context1:0,Context2:0,Context3:0,Context4:0}}},UserKey:"O2MvOSF8JCggOz16Ji86fD84OyAjIw==",H:3632035662},Ck={BadgeList:[],GoodsMap:{},BynameAdjectiveMap:{},BynameSubjectMap:{},NamePlateBgMap:[],SkillChipMap:{},Versus:{WinCountByRule:{},WinCountBySpecial:{},WinCountByTclAtk:0,WinCountByTclDef:0},Coop:{BossKillNumMap:{},RareEnemyKillNumMap:{}}},Ik=1702676230427,Gk={GearDB:Uk,UserData:Lk,Profile:Ck,LastUpdated:Ik};function Ak(){const a=window?window.getComputedStyle(document.body,null):{};return parseInt(a&&a.getPropertyValue("padding-right")||0,10)}function Bk(){let a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a);const e=a.offsetWidth-a.clientWidth;return document.body.removeChild(a),e}function l_(a){document.body.style.paddingRight=a>0?`${a}px`:null}function Ok(){return window?document.body.clientWidth<window.innerWidth:!1}function Rk(){const a=Bk(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],r=e?parseInt(e.style.paddingRight||0,10):0;Ok()&&l_(r+a)}function Nk(a,...e){return a.addEventListener(...e),()=>a.removeEventListener(...e)}function i_(a){let e="";if(typeof a=="string"||typeof a=="number")e+=a;else if(typeof a=="object")if(Array.isArray(a))e=a.map(i_).filter(Boolean).join(" ");else for(let r in a)a[r]&&(e&&(e+=" "),e+=r);return e}function Ke(...a){return a.map(i_).filter(Boolean).join(" ")}function bn(a){if(!a)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(a);const o=Number.parseFloat(e),t=Number.parseFloat(r);return!o&&!t?0:(e=e.split(",")[0],r=r.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(r))*1e3)}function Ek(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const e=Math.random()*16|0;return(a=="x"?e:e&3|8).toString(16)})}function jk(a){return a.style.display="block",{duration:bn(a),tick:r=>{r===0&&a.classList.add("show")}}}function Fk(a){return a.classList.remove("show"),{duration:bn(a),tick:r=>{r===0&&(a.style.display="none")}}}function Wk(a){return a.style.display="block",{duration:bn(a),tick:r=>{r>0&&a.classList.add("show")}}}function xk(a){return a.classList.remove("show"),{duration:bn(a),tick:r=>{r===1&&(a.style.display="none")}}}function Dk(a){let e,r,o,t,l;const n=a[17].default,i=ne(n,a,a[16],null),s=i||Yk(a);let u=[a[8],{class:a[6]},{disabled:a[2]},{value:a[4]},{"aria-label":r=a[7]||a[5]}],_={};for(let p=0;p<u.length;p+=1)_=z(_,u[p]);return{c(){e=P("button"),s&&s.c(),W(e,_)},m(p,c){S(p,e,c),s&&s.m(e,null),e.autofocus&&e.focus(),a[21](e),o=!0,t||(l=H(e,"click",a[19]),t=!0)},p(p,c){i?i.p&&(!o||c&65536)&&ie(i,n,p,p[16],o?le(n,p[16],c,null):se(p[16]),null):s&&s.p&&(!o||c&65538)&&s.p(p,o?c:-1),W(e,_=ye(u,[c&256&&p[8],(!o||c&64)&&{class:p[6]},(!o||c&4)&&{disabled:p[2]},(!o||c&16)&&{value:p[4]},(!o||c&160&&r!==(r=p[7]||p[5]))&&{"aria-label":r}]))},i(p){o||(k(s,p),o=!0)},o(p){g(s,p),o=!1},d(p){p&&y(e),s&&s.d(p),a[21](null),t=!1,l()}}}function zk(a){let e,r,o,t,l,n,i;const s=[Jk,Kk],u=[];function _(h,f){return h[1]?0:1}r=_(a),o=u[r]=s[r](a);let p=[a[8],{class:a[6]},{disabled:a[2]},{href:a[3]},{"aria-label":t=a[7]||a[5]}],c={};for(let h=0;h<p.length;h+=1)c=z(c,p[h]);return{c(){e=P("a"),o.c(),W(e,c)},m(h,f){S(h,e,f),u[r].m(e,null),a[20](e),l=!0,n||(i=H(e,"click",a[18]),n=!0)},p(h,f){let d=r;r=_(h),r===d?u[r].p(h,f):(he(),g(u[d],1,1,()=>{u[d]=null}),fe(),o=u[r],o?o.p(h,f):(o=u[r]=s[r](h),o.c()),k(o,1),o.m(e,null)),W(e,c=ye(p,[f&256&&h[8],(!l||f&64)&&{class:h[6]},(!l||f&4)&&{disabled:h[2]},(!l||f&8)&&{href:h[3]},(!l||f&160&&t!==(t=h[7]||h[5]))&&{"aria-label":t}]))},i(h){l||(k(o),l=!0)},o(h){g(o),l=!1},d(h){h&&y(e),u[r].d(),a[20](null),n=!1,i()}}}function Vk(a){let e;const r=a[17].default,o=ne(r,a,a[16],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&65536)&&ie(o,r,t,t[16],e?le(r,t[16],l,null):se(t[16]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function qk(a){let e;return{c(){e=oe(a[1])},m(r,o){S(r,e,o)},p(r,o){o&2&&Je(e,r[1])},i:K,o:K,d(r){r&&y(e)}}}function Yk(a){let e,r,o,t;const l=[qk,Vk],n=[];function i(s,u){return s[1]?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,u){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function Kk(a){let e;const r=a[17].default,o=ne(r,a,a[16],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&65536)&&ie(o,r,t,t[16],e?le(r,t[16],l,null):se(t[16]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function Jk(a){let e;return{c(){e=oe(a[1])},m(r,o){S(r,e,o)},p(r,o){o&2&&Je(e,r[1])},i:K,o:K,d(r){r&&y(e)}}}function Zk(a){let e,r,o,t;const l=[zk,Dk],n=[];function i(s,u){return s[3]?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function Xk(a,e,r){let o,t,l;const n=["class","active","block","children","close","color","disabled","href","inner","outline","size","value"];let i=Ue(e,n),{$$slots:s={},$$scope:u}=e,{class:_=""}=e,{active:p=!1}=e,{block:c=!1}=e,{children:h=void 0}=e,{close:f=!1}=e,{color:d="secondary"}=e,{disabled:M=!1}=e,{href:b=""}=e,{inner:T=void 0}=e,{outline:v=!1}=e,{size:w=null}=e,{value:U=""}=e;function j(A){G.call(this,a,A)}function x(A){G.call(this,a,A)}function I(A){J[A?"unshift":"push"](()=>{T=A,r(0,T)})}function L(A){J[A?"unshift":"push"](()=>{T=A,r(0,T)})}return a.$$set=A=>{r(22,e=z(z({},e),$e(A))),r(8,i=Ue(e,n)),"class"in A&&r(9,_=A.class),"active"in A&&r(10,p=A.active),"block"in A&&r(11,c=A.block),"children"in A&&r(1,h=A.children),"close"in A&&r(12,f=A.close),"color"in A&&r(13,d=A.color),"disabled"in A&&r(2,M=A.disabled),"href"in A&&r(3,b=A.href),"inner"in A&&r(0,T=A.inner),"outline"in A&&r(14,v=A.outline),"size"in A&&r(15,w=A.size),"value"in A&&r(4,U=A.value),"$$scope"in A&&r(16,u=A.$$scope)},a.$$.update=()=>{r(7,o=e["aria-label"]),a.$$.dirty&65024&&r(6,t=Ke(_,f?"btn-close":"btn",f||`btn${v?"-outline":""}-${d}`,w?`btn-${w}`:!1,c?"d-block w-100":!1,{active:p})),a.$$.dirty&4096&&r(5,l=f?"Close":null)},e=$e(e),[T,h,M,b,U,l,t,o,i,_,p,c,f,d,v,w,u,s,j,x,I,L]}class ga extends ae{constructor(e){super(),ee(this,e,Xk,Zk,te,{class:9,active:10,block:11,children:1,close:12,color:13,disabled:2,href:3,inner:0,outline:14,size:15,value:4})}}var Ua="top",Ya="bottom",Ka="right",La="left",Xl="auto",dt=[Ua,Ya,Ka,La],ho="start",nt="end",Qk="clippingParents",s_="viewport",No="popper",$k="reference",Xi=dt.reduce(function(a,e){return a.concat([e+"-"+ho,e+"-"+nt])},[]),u_=[].concat(dt,[Xl]).reduce(function(a,e){return a.concat([e,e+"-"+ho,e+"-"+nt])},[]),e1="beforeRead",a1="read",r1="afterRead",o1="beforeMain",t1="main",n1="afterMain",l1="beforeWrite",i1="write",s1="afterWrite",u1=[e1,a1,r1,o1,t1,n1,l1,i1,s1];function _r(a){return a?(a.nodeName||"").toLowerCase():null}function xa(a){if(a==null)return window;if(a.toString()!=="[object Window]"){var e=a.ownerDocument;return e&&e.defaultView||window}return a}function Zr(a){var e=xa(a).Element;return a instanceof e||a instanceof Element}function qa(a){var e=xa(a).HTMLElement;return a instanceof e||a instanceof HTMLElement}function Ql(a){if(typeof ShadowRoot>"u")return!1;var e=xa(a).ShadowRoot;return a instanceof e||a instanceof ShadowRoot}function _1(a){var e=a.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},t=e.attributes[r]||{},l=e.elements[r];!qa(l)||!_r(l)||(Object.assign(l.style,o),Object.keys(t).forEach(function(n){var i=t[n];i===!1?l.removeAttribute(n):l.setAttribute(n,i===!0?"":i)}))})}function p1(a){var e=a.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var t=e.elements[o],l=e.attributes[o]||{},n=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),i=n.reduce(function(s,u){return s[u]="",s},{});!qa(t)||!_r(t)||(Object.assign(t.style,i),Object.keys(l).forEach(function(s){t.removeAttribute(s)}))})}}const c1={name:"applyStyles",enabled:!0,phase:"write",fn:_1,effect:p1,requires:["computeStyles"]};function sr(a){return a.split("-")[0]}var Kr=Math.max,cn=Math.min,fo=Math.round;function Gl(){var a=navigator.userAgentData;return a!=null&&a.brands&&Array.isArray(a.brands)?a.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function __(){return!/^((?!chrome|android).)*safari/i.test(Gl())}function mo(a,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=a.getBoundingClientRect(),t=1,l=1;e&&qa(a)&&(t=a.offsetWidth>0&&fo(o.width)/a.offsetWidth||1,l=a.offsetHeight>0&&fo(o.height)/a.offsetHeight||1);var n=Zr(a)?xa(a):window,i=n.visualViewport,s=!__()&&r,u=(o.left+(s&&i?i.offsetLeft:0))/t,_=(o.top+(s&&i?i.offsetTop:0))/l,p=o.width/t,c=o.height/l;return{width:p,height:c,top:_,right:u+p,bottom:_+c,left:u,x:u,y:_}}function $l(a){var e=mo(a),r=a.offsetWidth,o=a.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:a.offsetLeft,y:a.offsetTop,width:r,height:o}}function p_(a,e){var r=e.getRootNode&&e.getRootNode();if(a.contains(e))return!0;if(r&&Ql(r)){var o=e;do{if(o&&a.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function wr(a){return xa(a).getComputedStyle(a)}function h1(a){return["table","td","th"].indexOf(_r(a))>=0}function Wr(a){return((Zr(a)?a.ownerDocument:a.document)||window.document).documentElement}function Mn(a){return _r(a)==="html"?a:a.assignedSlot||a.parentNode||(Ql(a)?a.host:null)||Wr(a)}function Qi(a){return!qa(a)||wr(a).position==="fixed"?null:a.offsetParent}function f1(a){var e=/firefox/i.test(Gl()),r=/Trident/i.test(Gl());if(r&&qa(a)){var o=wr(a);if(o.position==="fixed")return null}var t=Mn(a);for(Ql(t)&&(t=t.host);qa(t)&&["html","body"].indexOf(_r(t))<0;){var l=wr(t);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||e&&l.willChange==="filter"||e&&l.filter&&l.filter!=="none")return t;t=t.parentNode}return null}function mt(a){for(var e=xa(a),r=Qi(a);r&&h1(r)&&wr(r).position==="static";)r=Qi(r);return r&&(_r(r)==="html"||_r(r)==="body"&&wr(r).position==="static")?e:r||f1(a)||e}function ei(a){return["top","bottom"].indexOf(a)>=0?"x":"y"}function Jo(a,e,r){return Kr(a,cn(e,r))}function d1(a,e,r){var o=Jo(a,e,r);return o>r?r:o}function c_(){return{top:0,right:0,bottom:0,left:0}}function h_(a){return Object.assign({},c_(),a)}function f_(a,e){return e.reduce(function(r,o){return r[o]=a,r},{})}var m1=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,h_(typeof e!="number"?e:f_(e,dt))};function k1(a){var e,r=a.state,o=a.name,t=a.options,l=r.elements.arrow,n=r.modifiersData.popperOffsets,i=sr(r.placement),s=ei(i),u=[La,Ka].indexOf(i)>=0,_=u?"height":"width";if(!(!l||!n)){var p=m1(t.padding,r),c=$l(l),h=s==="y"?Ua:La,f=s==="y"?Ya:Ka,d=r.rects.reference[_]+r.rects.reference[s]-n[s]-r.rects.popper[_],M=n[s]-r.rects.reference[s],b=mt(l),T=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,v=d/2-M/2,w=p[h],U=T-c[_]-p[f],j=T/2-c[_]/2+v,x=Jo(w,j,U),I=s;r.modifiersData[o]=(e={},e[I]=x,e.centerOffset=x-j,e)}}function y1(a){var e=a.state,r=a.options,o=r.element,t=o===void 0?"[data-popper-arrow]":o;t!=null&&(typeof t=="string"&&(t=e.elements.popper.querySelector(t),!t)||p_(e.elements.popper,t)&&(e.elements.arrow=t))}const g1={name:"arrow",enabled:!0,phase:"main",fn:k1,effect:y1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ko(a){return a.split("-")[1]}var S1={top:"auto",right:"auto",bottom:"auto",left:"auto"};function b1(a,e){var r=a.x,o=a.y,t=e.devicePixelRatio||1;return{x:fo(r*t)/t||0,y:fo(o*t)/t||0}}function $i(a){var e,r=a.popper,o=a.popperRect,t=a.placement,l=a.variation,n=a.offsets,i=a.position,s=a.gpuAcceleration,u=a.adaptive,_=a.roundOffsets,p=a.isFixed,c=n.x,h=c===void 0?0:c,f=n.y,d=f===void 0?0:f,M=typeof _=="function"?_({x:h,y:d}):{x:h,y:d};h=M.x,d=M.y;var b=n.hasOwnProperty("x"),T=n.hasOwnProperty("y"),v=La,w=Ua,U=window;if(u){var j=mt(r),x="clientHeight",I="clientWidth";if(j===xa(r)&&(j=Wr(r),wr(j).position!=="static"&&i==="absolute"&&(x="scrollHeight",I="scrollWidth")),j=j,t===Ua||(t===La||t===Ka)&&l===nt){w=Ya;var L=p&&j===U&&U.visualViewport?U.visualViewport.height:j[x];d-=L-o.height,d*=s?1:-1}if(t===La||(t===Ua||t===Ya)&&l===nt){v=Ka;var A=p&&j===U&&U.visualViewport?U.visualViewport.width:j[I];h-=A-o.width,h*=s?1:-1}}var q=Object.assign({position:i},u&&S1),be=_===!0?b1({x:h,y:d},xa(r)):{x:h,y:d};if(h=be.x,d=be.y,s){var ge;return Object.assign({},q,(ge={},ge[w]=T?"0":"",ge[v]=b?"0":"",ge.transform=(U.devicePixelRatio||1)<=1?"translate("+h+"px, "+d+"px)":"translate3d("+h+"px, "+d+"px, 0)",ge))}return Object.assign({},q,(e={},e[w]=T?d+"px":"",e[v]=b?h+"px":"",e.transform="",e))}function M1(a){var e=a.state,r=a.options,o=r.gpuAcceleration,t=o===void 0?!0:o,l=r.adaptive,n=l===void 0?!0:l,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:sr(e.placement),variation:ko(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:t,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,$i(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:n,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,$i(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const w1={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:M1,data:{}};var At={passive:!0};function T1(a){var e=a.state,r=a.instance,o=a.options,t=o.scroll,l=t===void 0?!0:t,n=o.resize,i=n===void 0?!0:n,s=xa(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return l&&u.forEach(function(_){_.addEventListener("scroll",r.update,At)}),i&&s.addEventListener("resize",r.update,At),function(){l&&u.forEach(function(_){_.removeEventListener("scroll",r.update,At)}),i&&s.removeEventListener("resize",r.update,At)}}const v1={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:T1,data:{}};var P1={left:"right",right:"left",bottom:"top",top:"bottom"};function qt(a){return a.replace(/left|right|bottom|top/g,function(e){return P1[e]})}var H1={start:"end",end:"start"};function es(a){return a.replace(/start|end/g,function(e){return H1[e]})}function ai(a){var e=xa(a),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function ri(a){return mo(Wr(a)).left+ai(a).scrollLeft}function U1(a,e){var r=xa(a),o=Wr(a),t=r.visualViewport,l=o.clientWidth,n=o.clientHeight,i=0,s=0;if(t){l=t.width,n=t.height;var u=__();(u||!u&&e==="fixed")&&(i=t.offsetLeft,s=t.offsetTop)}return{width:l,height:n,x:i+ri(a),y:s}}function L1(a){var e,r=Wr(a),o=ai(a),t=(e=a.ownerDocument)==null?void 0:e.body,l=Kr(r.scrollWidth,r.clientWidth,t?t.scrollWidth:0,t?t.clientWidth:0),n=Kr(r.scrollHeight,r.clientHeight,t?t.scrollHeight:0,t?t.clientHeight:0),i=-o.scrollLeft+ri(a),s=-o.scrollTop;return wr(t||r).direction==="rtl"&&(i+=Kr(r.clientWidth,t?t.clientWidth:0)-l),{width:l,height:n,x:i,y:s}}function oi(a){var e=wr(a),r=e.overflow,o=e.overflowX,t=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+t+o)}function d_(a){return["html","body","#document"].indexOf(_r(a))>=0?a.ownerDocument.body:qa(a)&&oi(a)?a:d_(Mn(a))}function Zo(a,e){var r;e===void 0&&(e=[]);var o=d_(a),t=o===((r=a.ownerDocument)==null?void 0:r.body),l=xa(o),n=t?[l].concat(l.visualViewport||[],oi(o)?o:[]):o,i=e.concat(n);return t?i:i.concat(Zo(Mn(n)))}function Al(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function C1(a,e){var r=mo(a,!1,e==="fixed");return r.top=r.top+a.clientTop,r.left=r.left+a.clientLeft,r.bottom=r.top+a.clientHeight,r.right=r.left+a.clientWidth,r.width=a.clientWidth,r.height=a.clientHeight,r.x=r.left,r.y=r.top,r}function as(a,e,r){return e===s_?Al(U1(a,r)):Zr(e)?C1(e,r):Al(L1(Wr(a)))}function I1(a){var e=Zo(Mn(a)),r=["absolute","fixed"].indexOf(wr(a).position)>=0,o=r&&qa(a)?mt(a):a;return Zr(o)?e.filter(function(t){return Zr(t)&&p_(t,o)&&_r(t)!=="body"}):[]}function G1(a,e,r,o){var t=e==="clippingParents"?I1(a):[].concat(e),l=[].concat(t,[r]),n=l[0],i=l.reduce(function(s,u){var _=as(a,u,o);return s.top=Kr(_.top,s.top),s.right=cn(_.right,s.right),s.bottom=cn(_.bottom,s.bottom),s.left=Kr(_.left,s.left),s},as(a,n,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function m_(a){var e=a.reference,r=a.element,o=a.placement,t=o?sr(o):null,l=o?ko(o):null,n=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(t){case Ua:s={x:n,y:e.y-r.height};break;case Ya:s={x:n,y:e.y+e.height};break;case Ka:s={x:e.x+e.width,y:i};break;case La:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var u=t?ei(t):null;if(u!=null){var _=u==="y"?"height":"width";switch(l){case ho:s[u]=s[u]-(e[_]/2-r[_]/2);break;case nt:s[u]=s[u]+(e[_]/2-r[_]/2);break}}return s}function lt(a,e){e===void 0&&(e={});var r=e,o=r.placement,t=o===void 0?a.placement:o,l=r.strategy,n=l===void 0?a.strategy:l,i=r.boundary,s=i===void 0?Qk:i,u=r.rootBoundary,_=u===void 0?s_:u,p=r.elementContext,c=p===void 0?No:p,h=r.altBoundary,f=h===void 0?!1:h,d=r.padding,M=d===void 0?0:d,b=h_(typeof M!="number"?M:f_(M,dt)),T=c===No?$k:No,v=a.rects.popper,w=a.elements[f?T:c],U=G1(Zr(w)?w:w.contextElement||Wr(a.elements.popper),s,_,n),j=mo(a.elements.reference),x=m_({reference:j,element:v,strategy:"absolute",placement:t}),I=Al(Object.assign({},v,x)),L=c===No?I:j,A={top:U.top-L.top+b.top,bottom:L.bottom-U.bottom+b.bottom,left:U.left-L.left+b.left,right:L.right-U.right+b.right},q=a.modifiersData.offset;if(c===No&&q){var be=q[t];Object.keys(A).forEach(function(ge){var Y=[Ka,Ya].indexOf(ge)>=0?1:-1,D=[Ua,Ya].indexOf(ge)>=0?"y":"x";A[ge]+=be[D]*Y})}return A}function A1(a,e){e===void 0&&(e={});var r=e,o=r.placement,t=r.boundary,l=r.rootBoundary,n=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?u_:s,_=ko(o),p=_?i?Xi:Xi.filter(function(f){return ko(f)===_}):dt,c=p.filter(function(f){return u.indexOf(f)>=0});c.length===0&&(c=p);var h=c.reduce(function(f,d){return f[d]=lt(a,{placement:d,boundary:t,rootBoundary:l,padding:n})[sr(d)],f},{});return Object.keys(h).sort(function(f,d){return h[f]-h[d]})}function B1(a){if(sr(a)===Xl)return[];var e=qt(a);return[es(a),e,es(e)]}function O1(a){var e=a.state,r=a.options,o=a.name;if(!e.modifiersData[o]._skip){for(var t=r.mainAxis,l=t===void 0?!0:t,n=r.altAxis,i=n===void 0?!0:n,s=r.fallbackPlacements,u=r.padding,_=r.boundary,p=r.rootBoundary,c=r.altBoundary,h=r.flipVariations,f=h===void 0?!0:h,d=r.allowedAutoPlacements,M=e.options.placement,b=sr(M),T=b===M,v=s||(T||!f?[qt(M)]:B1(M)),w=[M].concat(v).reduce(function(Ye,X){return Ye.concat(sr(X)===Xl?A1(e,{placement:X,boundary:_,rootBoundary:p,padding:u,flipVariations:f,allowedAutoPlacements:d}):X)},[]),U=e.rects.reference,j=e.rects.popper,x=new Map,I=!0,L=w[0],A=0;A<w.length;A++){var q=w[A],be=sr(q),ge=ko(q)===ho,Y=[Ua,Ya].indexOf(be)>=0,D=Y?"width":"height",$=lt(e,{placement:q,boundary:_,rootBoundary:p,altBoundary:c,padding:u}),E=Y?ge?Ka:La:ge?Ya:Ua;U[D]>j[D]&&(E=qt(E));var He=qt(E),qe=[];if(l&&qe.push($[be]<=0),i&&qe.push($[E]<=0,$[He]<=0),qe.every(function(Ye){return Ye})){L=q,I=!1;break}x.set(q,qe)}if(I)for(var Ne=f?3:1,pa=function(X){var Se=w.find(function(Ie){var V=x.get(Ie);if(V)return V.slice(0,X).every(function(De){return De})});if(Se)return L=Se,"break"},Fe=Ne;Fe>0;Fe--){var da=pa(Fe);if(da==="break")break}e.placement!==L&&(e.modifiersData[o]._skip=!0,e.placement=L,e.reset=!0)}}const R1={name:"flip",enabled:!0,phase:"main",fn:O1,requiresIfExists:["offset"],data:{_skip:!1}};function rs(a,e,r){return r===void 0&&(r={x:0,y:0}),{top:a.top-e.height-r.y,right:a.right-e.width+r.x,bottom:a.bottom-e.height+r.y,left:a.left-e.width-r.x}}function os(a){return[Ua,Ka,Ya,La].some(function(e){return a[e]>=0})}function N1(a){var e=a.state,r=a.name,o=e.rects.reference,t=e.rects.popper,l=e.modifiersData.preventOverflow,n=lt(e,{elementContext:"reference"}),i=lt(e,{altBoundary:!0}),s=rs(n,o),u=rs(i,t,l),_=os(s),p=os(u);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:_,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":_,"data-popper-escaped":p})}const E1={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:N1};function j1(a,e,r){var o=sr(a),t=[La,Ua].indexOf(o)>=0?-1:1,l=typeof r=="function"?r(Object.assign({},e,{placement:a})):r,n=l[0],i=l[1];return n=n||0,i=(i||0)*t,[La,Ka].indexOf(o)>=0?{x:i,y:n}:{x:n,y:i}}function F1(a){var e=a.state,r=a.options,o=a.name,t=r.offset,l=t===void 0?[0,0]:t,n=u_.reduce(function(_,p){return _[p]=j1(p,e.rects,l),_},{}),i=n[e.placement],s=i.x,u=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=u),e.modifiersData[o]=n}const W1={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:F1};function x1(a){var e=a.state,r=a.name;e.modifiersData[r]=m_({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const D1={name:"popperOffsets",enabled:!0,phase:"read",fn:x1,data:{}};function z1(a){return a==="x"?"y":"x"}function V1(a){var e=a.state,r=a.options,o=a.name,t=r.mainAxis,l=t===void 0?!0:t,n=r.altAxis,i=n===void 0?!1:n,s=r.boundary,u=r.rootBoundary,_=r.altBoundary,p=r.padding,c=r.tether,h=c===void 0?!0:c,f=r.tetherOffset,d=f===void 0?0:f,M=lt(e,{boundary:s,rootBoundary:u,padding:p,altBoundary:_}),b=sr(e.placement),T=ko(e.placement),v=!T,w=ei(b),U=z1(w),j=e.modifiersData.popperOffsets,x=e.rects.reference,I=e.rects.popper,L=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,A=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),q=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,be={x:0,y:0};if(j){if(l){var ge,Y=w==="y"?Ua:La,D=w==="y"?Ya:Ka,$=w==="y"?"height":"width",E=j[w],He=E+M[Y],qe=E-M[D],Ne=h?-I[$]/2:0,pa=T===ho?x[$]:I[$],Fe=T===ho?-I[$]:-x[$],da=e.elements.arrow,Ye=h&&da?$l(da):{width:0,height:0},X=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:c_(),Se=X[Y],Ie=X[D],V=Jo(0,x[$],Ye[$]),De=v?x[$]/2-Ne-V-Se-A.mainAxis:pa-V-Se-A.mainAxis,Re=v?-x[$]/2+Ne+V+Ie+A.mainAxis:Fe+V+Ie+A.mainAxis,aa=e.elements.arrow&&mt(e.elements.arrow),We=aa?w==="y"?aa.clientTop||0:aa.clientLeft||0:0,Ze=(ge=q?.[w])!=null?ge:0,Xe=E+De-Ze-We,ue=E+Re-Ze,na=Jo(h?cn(He,Xe):He,E,h?Kr(qe,ue):qe);j[w]=na,be[w]=na-E}if(i){var Q,Oe=w==="x"?Ua:La,Pr=w==="x"?Ya:Ka,Oa=j[U],Hr=U==="y"?"height":"width",fr=Oa+M[Oe],Ur=Oa-M[Pr],Dr=[Ua,La].indexOf(b)!==-1,Ra=(Q=q?.[U])!=null?Q:0,dr=Dr?fr:Oa-x[Hr]-I[Hr]-Ra+A.altAxis,zr=Dr?Oa+x[Hr]+I[Hr]-Ra-A.altAxis:Ur,mr=h&&Dr?d1(dr,Oa,zr):Jo(h?dr:fr,Oa,h?zr:Ur);j[U]=mr,be[U]=mr-Oa}e.modifiersData[o]=be}}const q1={name:"preventOverflow",enabled:!0,phase:"main",fn:V1,requiresIfExists:["offset"]};function Y1(a){return{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}}function K1(a){return a===xa(a)||!qa(a)?ai(a):Y1(a)}function J1(a){var e=a.getBoundingClientRect(),r=fo(e.width)/a.offsetWidth||1,o=fo(e.height)/a.offsetHeight||1;return r!==1||o!==1}function Z1(a,e,r){r===void 0&&(r=!1);var o=qa(e),t=qa(e)&&J1(e),l=Wr(e),n=mo(a,t,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((_r(e)!=="body"||oi(l))&&(i=K1(e)),qa(e)?(s=mo(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):l&&(s.x=ri(l))),{x:n.left+i.scrollLeft-s.x,y:n.top+i.scrollTop-s.y,width:n.width,height:n.height}}function X1(a){var e=new Map,r=new Set,o=[];a.forEach(function(l){e.set(l.name,l)});function t(l){r.add(l.name);var n=[].concat(l.requires||[],l.requiresIfExists||[]);n.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&t(s)}}),o.push(l)}return a.forEach(function(l){r.has(l.name)||t(l)}),o}function Q1(a){var e=X1(a);return u1.reduce(function(r,o){return r.concat(e.filter(function(t){return t.phase===o}))},[])}function $1(a){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(a())})})),e}}function ey(a){var e=a.reduce(function(r,o){var t=r[o.name];return r[o.name]=t?Object.assign({},t,o,{options:Object.assign({},t.options,o.options),data:Object.assign({},t.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var ts={placement:"bottom",modifiers:[],strategy:"absolute"};function ns(){for(var a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function ay(a){a===void 0&&(a={});var e=a,r=e.defaultModifiers,o=r===void 0?[]:r,t=e.defaultOptions,l=t===void 0?ts:t;return function(i,s,u){u===void 0&&(u=l);var _={placement:"bottom",orderedModifiers:[],options:Object.assign({},ts,l),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},p=[],c=!1,h={state:_,setOptions:function(b){var T=typeof b=="function"?b(_.options):b;d(),_.options=Object.assign({},l,_.options,T),_.scrollParents={reference:Zr(i)?Zo(i):i.contextElement?Zo(i.contextElement):[],popper:Zo(s)};var v=Q1(ey([].concat(o,_.options.modifiers)));return _.orderedModifiers=v.filter(function(w){return w.enabled}),f(),h.update()},forceUpdate:function(){if(!c){var b=_.elements,T=b.reference,v=b.popper;if(ns(T,v)){_.rects={reference:Z1(T,mt(v),_.options.strategy==="fixed"),popper:$l(v)},_.reset=!1,_.placement=_.options.placement,_.orderedModifiers.forEach(function(A){return _.modifiersData[A.name]=Object.assign({},A.data)});for(var w=0;w<_.orderedModifiers.length;w++){if(_.reset===!0){_.reset=!1,w=-1;continue}var U=_.orderedModifiers[w],j=U.fn,x=U.options,I=x===void 0?{}:x,L=U.name;typeof j=="function"&&(_=j({state:_,options:I,name:L,instance:h})||_)}}}},update:$1(function(){return new Promise(function(M){h.forceUpdate(),M(_)})}),destroy:function(){d(),c=!0}};if(!ns(i,s))return h;h.setOptions(u).then(function(M){!c&&u.onFirstUpdate&&u.onFirstUpdate(M)});function f(){_.orderedModifiers.forEach(function(M){var b=M.name,T=M.options,v=T===void 0?{}:T,w=M.effect;if(typeof w=="function"){var U=w({state:_,name:b,instance:h,options:v}),j=function(){};p.push(U||j)}})}function d(){p.forEach(function(M){return M()}),p=[]}return h}}var ry=[v1,D1,w1,c1,W1,R1,q1,g1,E1],oy=ay({defaultModifiers:ry});function ty(a){let e,r=a,o=null,t;const l=()=>{t&&e&&(o=oy(t,e,r))},n=()=>{o&&(o.destroy(),o=null)};return[u=>(t=u,l(),{destroy(){n()}}),(u,_)=>(e=u,r=Object.assign(Object.assign({},a),_),l(),{update(p){r=Object.assign(Object.assign({},a),p),o&&r&&o.setOptions(r)},destroy(){n()}}),()=>o]}const ny=()=>r_({});function ly(a){let e,r;const o=a[19].default,t=ne(o,a,a[18],null);let l=[a[3],{class:a[2]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("div"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),a[21](e),r=!0},p(i,s){t&&t.p&&(!r||s&262144)&&ie(t,o,i,i[18],r?le(o,i[18],s,null):se(i[18]),null),W(e,n=ye(l,[s&8&&i[3],(!r||s&4)&&{class:i[2]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i),a[21](null)}}}function iy(a){let e,r;const o=a[19].default,t=ne(o,a,a[18],null);let l=[a[3],{class:a[2]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("li"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),a[20](e),r=!0},p(i,s){t&&t.p&&(!r||s&262144)&&ie(t,o,i,i[18],r?le(o,i[18],s,null):se(i[18]),null),W(e,n=ye(l,[s&8&&i[3],(!r||s&4)&&{class:i[2]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i),a[20](null)}}}function sy(a){let e,r,o,t;const l=[iy,ly],n=[];function i(s,u){return s[0]?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function uy(a,e,r){let o,t,l;const n=["class","active","autoClose","direction","dropup","group","inNavbar","isOpen","nav","setActiveFromChild","size","toggle"];let i=Ue(e,n),{$$slots:s={},$$scope:u}=e;const _=()=>{};let p=ny();Po("dropdownContext",p);const c=Ho("navbar");let{class:h=""}=e,{active:f=!1}=e,{autoClose:d=!0}=e,{direction:M="down"}=e,{dropup:b=!1}=e,{group:T=!1}=e,{inNavbar:v=c?c.inNavbar:!1}=e,{isOpen:w=!1}=e,{nav:U=!1}=e,{setActiveFromChild:j=!1}=e,{size:x=""}=e,{toggle:I=void 0}=e;const[L,A]=ty();if(["up","down","left","right","start","end"].indexOf(M)===-1)throw new Error(`Invalid direction sent: '${M}' is not one of 'up', 'down', 'left', 'right', 'start', 'end'`);let be,ge;function Y(E){E&&(E.which===3||E.type==="keyup"&&E.which!==9)||be.contains(E.target)&&be!==E.target&&(E.type!=="keyup"||E.which===9)||(d===!0||d==="inside")&&l(E)}Yl(()=>{typeof document<"u"&&["click","touchstart","keyup"].forEach(E=>document.removeEventListener(E,Y,!0))});function D(E){J[E?"unshift":"push"](()=>{be=E,r(1,be)})}function $(E){J[E?"unshift":"push"](()=>{be=E,r(1,be)})}return a.$$set=E=>{e=z(z({},e),$e(E)),r(3,i=Ue(e,n)),"class"in E&&r(5,h=E.class),"active"in E&&r(6,f=E.active),"autoClose"in E&&r(7,d=E.autoClose),"direction"in E&&r(8,M=E.direction),"dropup"in E&&r(9,b=E.dropup),"group"in E&&r(10,T=E.group),"inNavbar"in E&&r(11,v=E.inNavbar),"isOpen"in E&&r(4,w=E.isOpen),"nav"in E&&r(0,U=E.nav),"setActiveFromChild"in E&&r(12,j=E.setActiveFromChild),"size"in E&&r(13,x=E.size),"toggle"in E&&r(14,I=E.toggle),"$$scope"in E&&r(18,u=E.$$scope)},a.$$.update=()=>{a.$$.dirty&4098&&r(17,o=!!(j&&be&&typeof be.querySelector=="function"&&be.querySelector(".active"))),a.$$.dirty&256&&(M==="left"?r(15,ge="start"):M==="right"?r(15,ge="end"):r(15,ge=M)),a.$$.dirty&16400&&r(16,l=I||(()=>r(4,w=!w))),a.$$.dirty&177521&&r(2,t=Ke(h,M!=="down"&&`drop${ge}`,U&&f?"active":!1,j&&o?"active":!1,{"btn-group":T,[`btn-group-${x}`]:!!x,dropdown:!T,show:w,"nav-item":U})),a.$$.dirty&16&&typeof document<"u"&&(w?["click","touchstart","keyup"].forEach(E=>document.addEventListener(E,Y,!0)):["click","touchstart","keyup"].forEach(E=>document.removeEventListener(E,Y,!0))),a.$$.dirty&68497&&p.update(()=>({toggle:l,isOpen:w,autoClose:d,direction:M==="down"&&b?"up":M,inNavbar:U||v,popperRef:U?_:L,popperContent:U?_:A}))},[U,be,t,i,w,h,f,d,M,b,T,v,j,x,I,ge,l,o,u,s,D,$]}class _y extends ae{constructor(e){super(),ee(this,e,uy,sy,te,{class:5,active:6,autoClose:7,direction:8,dropup:9,group:10,inNavbar:11,isOpen:4,nav:0,setActiveFromChild:12,size:13,toggle:14})}}function py(a){let e;const r=a[1].default,o=ne(r,a,a[3],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&8)&&ie(o,r,t,t[3],e?le(r,t[3],l,null):se(t[3]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function cy(a){let e,r;const o=[a[0],{group:!0}];let t={$$slots:{default:[py]},$$scope:{ctx:a}};for(let l=0;l<o.length;l+=1)t=z(t,o[l]);return e=new _y({props:t}),e.$on("click",a[2]),{c(){N(e.$$.fragment)},m(l,n){O(e,l,n),r=!0},p(l,[n]){const i=n&1?ye(o,[Qu(l[0]),o[1]]):{};n&8&&(i.$$scope={dirty:n,ctx:l}),e.$set(i)},i(l){r||(k(e.$$.fragment,l),r=!0)},o(l){g(e.$$.fragment,l),r=!1},d(l){R(e,l)}}}function hy(a,e,r){const o=[];let t=Ue(e,o),{$$slots:l={},$$scope:n}=e;function i(s){G.call(this,a,s)}return a.$$set=s=>{e=z(z({},e),$e(s)),r(0,t=Ue(e,o)),"$$scope"in s&&r(3,n=s.$$scope)},[t,l,i,n]}class ti extends ae{constructor(e){super(),ee(this,e,hy,cy,te,{})}}function fy(a){let e,r,o,t;const l=a[8].default,n=ne(l,a,a[7],null);let i=[a[1],{class:a[0]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("div"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),r=!0,o||(t=H(e,"click",a[9]),o=!0)},p(u,[_]){n&&n.p&&(!r||_&128)&&ie(n,l,u,u[7],r?le(l,u[7],_,null):se(u[7]),null),W(e,s=ye(i,[_&2&&u[1],(!r||_&1)&&{class:u[0]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,t()}}}function dy(a,e,r){let o;const t=["class","body","color","inverse","outline"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e,{body:u=!1}=e,{color:_=""}=e,{inverse:p=!1}=e,{outline:c=!1}=e;function h(f){G.call(this,a,f)}return a.$$set=f=>{e=z(z({},e),$e(f)),r(1,l=Ue(e,t)),"class"in f&&r(2,s=f.class),"body"in f&&r(3,u=f.body),"color"in f&&r(4,_=f.color),"inverse"in f&&r(5,p=f.inverse),"outline"in f&&r(6,c=f.outline),"$$scope"in f&&r(7,i=f.$$scope)},a.$$.update=()=>{a.$$.dirty&124&&r(0,o=Ke(s,"card",p?"text-white":!1,u?"card-body":!1,_?`${c?"border":"bg"}-${_}`:!1))},[o,l,s,u,_,p,c,i,n,h]}class k_ extends ae{constructor(e){super(),ee(this,e,dy,fy,te,{class:2,body:3,color:4,inverse:5,outline:6})}}function my(a){let e,r;const o=a[4].default,t=ne(o,a,a[3],null);let l=[a[1],{class:a[0]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("div"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),r=!0},p(i,[s]){t&&t.p&&(!r||s&8)&&ie(t,o,i,i[3],r?le(o,i[3],s,null):se(i[3]),null),W(e,n=ye(l,[s&2&&i[1],(!r||s&1)&&{class:i[0]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i)}}}function ky(a,e,r){let o;const t=["class"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e;return a.$$set=u=>{e=z(z({},e),$e(u)),r(1,l=Ue(e,t)),"class"in u&&r(2,s=u.class),"$$scope"in u&&r(3,i=u.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&r(0,o=Ke(s,"card-body"))},[o,l,s,i,n]}class y_ extends ae{constructor(e){super(),ee(this,e,ky,my,te,{class:2})}}function yy(a){let e,r,o,t;const l=a[5].default,n=ne(l,a,a[4],null);let i=[a[2],{class:a[1]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("div"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),r=!0,o||(t=H(e,"click",a[7]),o=!0)},p(u,_){n&&n.p&&(!r||_&16)&&ie(n,l,u,u[4],r?le(l,u[4],_,null):se(u[4]),null),W(e,s=ye(i,[_&4&&u[2],(!r||_&2)&&{class:u[1]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,t()}}}function gy(a){let e,r,o,t;const l=a[5].default,n=ne(l,a,a[4],null);let i=[a[2],{class:a[1]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("h3"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),r=!0,o||(t=H(e,"click",a[6]),o=!0)},p(u,_){n&&n.p&&(!r||_&16)&&ie(n,l,u,u[4],r?le(l,u[4],_,null):se(u[4]),null),W(e,s=ye(i,[_&4&&u[2],(!r||_&2)&&{class:u[1]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,t()}}}function Sy(a){let e,r,o,t;const l=[gy,yy],n=[];function i(s,u){return s[0]==="h3"?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function by(a,e,r){let o;const t=["class","tag"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e,{tag:u="div"}=e;function _(c){G.call(this,a,c)}function p(c){G.call(this,a,c)}return a.$$set=c=>{e=z(z({},e),$e(c)),r(2,l=Ue(e,t)),"class"in c&&r(3,s=c.class),"tag"in c&&r(0,u=c.tag),"$$scope"in c&&r(4,i=c.$$scope)},a.$$.update=()=>{a.$$.dirty&8&&r(1,o=Ke(s,"card-header"))},[u,o,l,s,i,n,_,p]}class g_ extends ae{constructor(e){super(),ee(this,e,by,Sy,te,{class:3,tag:0})}}function My(a){let e,r;const o=a[4].default,t=ne(o,a,a[3],null);let l=[a[1],{class:a[0]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("h5"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),r=!0},p(i,[s]){t&&t.p&&(!r||s&8)&&ie(t,o,i,i[3],r?le(o,i[3],s,null):se(i[3]),null),W(e,n=ye(l,[s&2&&i[1],(!r||s&1)&&{class:i[0]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i)}}}function wy(a,e,r){let o;const t=["class"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e;return a.$$set=u=>{e=z(z({},e),$e(u)),r(1,l=Ue(e,t)),"class"in u&&r(2,s=u.class),"$$scope"in u&&r(3,i=u.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&r(0,o=Ke(s,"card-title"))},[o,l,s,i,n]}class S_ extends ae{constructor(e){super(),ee(this,e,wy,My,te,{class:2})}}function Ty(a){let e,r,o,t;const l=a[12].default,n=ne(l,a,a[11],null);let i=[{type:"button"},a[6],{class:a[3]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("button"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),e.autofocus&&e.focus(),r=!0,o||(t=[H(e,"click",a[14]),H(e,"click",a[5])],o=!0)},p(u,_){n&&n.p&&(!r||_&2048)&&ie(n,l,u,u[11],r?le(l,u[11],_,null):se(u[11]),null),W(e,s=ye(i,[{type:"button"},_&64&&u[6],(!r||_&8)&&{class:u[3]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,Be(t)}}}function vy(a){let e,r,o,t;const l=a[12].default,n=ne(l,a,a[11],null);let i=[a[6],{click:""},{href:a[2]},{class:a[3]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("a"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),r=!0,o||(t=H(e,"click",a[5]),o=!0)},p(u,_){n&&n.p&&(!r||_&2048)&&ie(n,l,u,u[11],r?le(l,u[11],_,null):se(u[11]),null),W(e,s=ye(i,[_&64&&u[6],{click:""},(!r||_&4)&&{href:u[2]},(!r||_&8)&&{class:u[3]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,t()}}}function Py(a){let e,r,o,t;const l=a[12].default,n=ne(l,a,a[11],null);let i=[a[6],{class:a[3]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("div"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),r=!0,o||(t=[H(e,"click",a[13]),H(e,"click",a[5])],o=!0)},p(u,_){n&&n.p&&(!r||_&2048)&&ie(n,l,u,u[11],r?le(l,u[11],_,null):se(u[11]),null),W(e,s=ye(i,[_&64&&u[6],(!r||_&8)&&{class:u[3]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,Be(t)}}}function Hy(a){let e,r;const o=a[12].default,t=ne(o,a,a[11],null);let l=[a[6],{class:a[3]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("h6"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),r=!0},p(i,s){t&&t.p&&(!r||s&2048)&&ie(t,o,i,i[11],r?le(o,i[11],s,null):se(i[11]),null),W(e,n=ye(l,[s&64&&i[6],(!r||s&8)&&{class:i[3]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i)}}}function Uy(a){let e,r,o,t;const l=[Hy,Py,vy,Ty],n=[];function i(s,u){return s[1]?0:s[0]?1:s[2]?2:3}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function Ly(a,e,r){let o;const t=["class","active","disabled","divider","header","toggle","href"];let l=Ue(e,t),n,{$$slots:i={},$$scope:s}=e;const u=Ho("dropdownContext");$a(a,u,w=>r(15,n=w));let{class:_=""}=e,{active:p=!1}=e,{disabled:c=!1}=e,{divider:h=!1}=e,{header:f=!1}=e,{toggle:d=!0}=e,{href:M=""}=e;function b(w){if(c||f||h){w.preventDefault();return}d&&(n.autoClose===!0||n.autoClose==="outside")&&n.toggle(w)}function T(w){G.call(this,a,w)}function v(w){G.call(this,a,w)}return a.$$set=w=>{e=z(z({},e),$e(w)),r(6,l=Ue(e,t)),"class"in w&&r(7,_=w.class),"active"in w&&r(8,p=w.active),"disabled"in w&&r(9,c=w.disabled),"divider"in w&&r(0,h=w.divider),"header"in w&&r(1,f=w.header),"toggle"in w&&r(10,d=w.toggle),"href"in w&&r(2,M=w.href),"$$scope"in w&&r(11,s=w.$$scope)},a.$$.update=()=>{a.$$.dirty&899&&r(3,o=Ke(_,{disabled:c,"dropdown-item":!h&&!f,active:p,"dropdown-header":f,"dropdown-divider":h}))},[h,f,M,o,u,b,l,_,p,c,d,s,i,T,v]}class wa extends ae{constructor(e){super(),ee(this,e,Ly,Uy,te,{class:7,active:8,disabled:9,divider:0,header:1,toggle:10,href:2})}}function Cy(a){let e,r,o,t,l,n;const i=a[9].default,s=ne(i,a,a[8],null);let u=[a[4],{class:a[1]},{"data-bs-popper":r=a[0].inNavbar?"static":void 0}],_={};for(let p=0;p<u.length;p+=1)_=z(_,u[p]);return{c(){e=P("div"),s&&s.c(),W(e,_)},m(p,c){S(p,e,c),s&&s.m(e,null),t=!0,l||(n=ht(o=a[0].popperContent(e,a[2])),l=!0)},p(p,[c]){s&&s.p&&(!t||c&256)&&ie(s,i,p,p[8],t?le(i,p[8],c,null):se(p[8]),null),W(e,_=ye(u,[c&16&&p[4],(!t||c&2)&&{class:p[1]},(!t||c&1&&r!==(r=p[0].inNavbar?"static":void 0))&&{"data-bs-popper":r}])),o&&Qr(o.update)&&c&4&&o.update.call(null,p[2])},i(p){t||(k(s,p),t=!0)},o(p){g(s,p),t=!1},d(p){p&&y(e),s&&s.d(p),l=!1,n()}}}function Iy(a,e,r){let o,t;const l=["class","end","right"];let n=Ue(e,l),i,{$$slots:s={},$$scope:u}=e;const _=Ho("dropdownContext");$a(a,_,d=>r(0,i=d));let{class:p=""}=e,{end:c=!1}=e,{right:h=!1}=e;const f=(d,M)=>{let b=d;return d==="up"?b="top":d==="down"&&(b="bottom"),`${b}-${M?"end":"start"}`};return a.$$set=d=>{e=z(z({},e),$e(d)),r(4,n=Ue(e,l)),"class"in d&&r(5,p=d.class),"end"in d&&r(6,c=d.end),"right"in d&&r(7,h=d.right),"$$scope"in d&&r(8,u=d.$$scope)},a.$$.update=()=>{a.$$.dirty&193&&r(2,o={modifiers:[{name:"flip"},{name:"offset",options:{offset:[0,2]}}],placement:f(i.direction,c||h)}),a.$$.dirty&225&&r(1,t=Ke(p,"dropdown-menu",{"dropdown-menu-end":c||h,show:i.isOpen}))},[i,t,o,_,n,p,c,h,u,s]}class ni extends ae{constructor(e){super(),ee(this,e,Iy,Cy,te,{class:5,end:6,right:7})}}function Gy(a){let e,r,o,t,l;const n=a[20].default,i=ne(n,a,a[19],null),s=i||Ry(a);let u=[a[9],{type:"button"},{"aria-expanded":r=a[6].isOpen},{class:a[5]}],_={};for(let p=0;p<u.length;p+=1)_=z(_,u[p]);return{c(){e=P("button"),s&&s.c(),W(e,_)},m(p,c){S(p,e,c),s&&s.m(e,null),e.autofocus&&e.focus(),a[28](e),o=!0,t||(l=[ht(a[6].popperRef(e)),H(e,"click",a[24]),H(e,"click",a[8])],t=!0)},p(p,c){i?i.p&&(!o||c&524288)&&ie(i,n,p,p[19],o?le(n,p[19],c,null):se(p[19]),null):s&&s.p&&(!o||c&2)&&s.p(p,o?c:-1),W(e,_=ye(u,[c&512&&p[9],{type:"button"},(!o||c&64&&r!==(r=p[6].isOpen))&&{"aria-expanded":r},(!o||c&32)&&{class:p[5]}]))},i(p){o||(k(s,p),o=!0)},o(p){g(s,p),o=!1},d(p){p&&y(e),s&&s.d(p),a[28](null),t=!1,Be(l)}}}function Ay(a){let e,r,o,t,l;const n=a[20].default,i=ne(n,a,a[19],null),s=i||Ny(a);let u=[a[9],{"aria-expanded":r=a[6].isOpen},{class:a[4]}],_={};for(let p=0;p<u.length;p+=1)_=z(_,u[p]);return{c(){e=P("span"),s&&s.c(),W(e,_)},m(p,c){S(p,e,c),s&&s.m(e,null),a[27](e),o=!0,t||(l=[ht(a[6].popperRef(e)),H(e,"click",a[23]),H(e,"click",a[8])],t=!0)},p(p,c){i?i.p&&(!o||c&524288)&&ie(i,n,p,p[19],o?le(n,p[19],c,null):se(p[19]),null):s&&s.p&&(!o||c&2)&&s.p(p,o?c:-1),W(e,_=ye(u,[c&512&&p[9],(!o||c&64&&r!==(r=p[6].isOpen))&&{"aria-expanded":r},(!o||c&16)&&{class:p[4]}]))},i(p){o||(k(s,p),o=!0)},o(p){g(s,p),o=!1},d(p){p&&y(e),s&&s.d(p),a[27](null),t=!1,Be(l)}}}function By(a){let e,r,o,t,l;const n=a[20].default,i=ne(n,a,a[19],null),s=i||Ey(a);let u=[a[9],{"aria-expanded":r=a[6].isOpen},{class:a[4]}],_={};for(let p=0;p<u.length;p+=1)_=z(_,u[p]);return{c(){e=P("div"),s&&s.c(),W(e,_)},m(p,c){S(p,e,c),s&&s.m(e,null),a[26](e),o=!0,t||(l=[ht(a[6].popperRef(e)),H(e,"click",a[22]),H(e,"click",a[8])],t=!0)},p(p,c){i?i.p&&(!o||c&524288)&&ie(i,n,p,p[19],o?le(n,p[19],c,null):se(p[19]),null):s&&s.p&&(!o||c&2)&&s.p(p,o?c:-1),W(e,_=ye(u,[c&512&&p[9],(!o||c&64&&r!==(r=p[6].isOpen))&&{"aria-expanded":r},(!o||c&16)&&{class:p[4]}]))},i(p){o||(k(s,p),o=!0)},o(p){g(s,p),o=!1},d(p){p&&y(e),s&&s.d(p),a[26](null),t=!1,Be(l)}}}function Oy(a){let e,r,o,t,l;const n=a[20].default,i=ne(n,a,a[19],null),s=i||jy(a);let u=[a[9],{href:"#nav"},{"aria-expanded":r=a[6].isOpen},{class:a[4]}],_={};for(let p=0;p<u.length;p+=1)_=z(_,u[p]);return{c(){e=P("a"),s&&s.c(),W(e,_)},m(p,c){S(p,e,c),s&&s.m(e,null),a[25](e),o=!0,t||(l=[ht(a[6].popperRef(e)),H(e,"click",a[21]),H(e,"click",a[8])],t=!0)},p(p,c){i?i.p&&(!o||c&524288)&&ie(i,n,p,p[19],o?le(n,p[19],c,null):se(p[19]),null):s&&s.p&&(!o||c&2)&&s.p(p,o?c:-1),W(e,_=ye(u,[c&512&&p[9],{href:"#nav"},(!o||c&64&&r!==(r=p[6].isOpen))&&{"aria-expanded":r},(!o||c&16)&&{class:p[4]}]))},i(p){o||(k(s,p),o=!0)},o(p){g(s,p),o=!1},d(p){p&&y(e),s&&s.d(p),a[25](null),t=!1,Be(l)}}}function Ry(a){let e,r;return{c(){e=P("span"),r=oe(a[1]),C(e,"class","visually-hidden")},m(o,t){S(o,e,t),B(e,r)},p(o,t){t&2&&Je(r,o[1])},d(o){o&&y(e)}}}function Ny(a){let e,r;return{c(){e=P("span"),r=oe(a[1]),C(e,"class","visually-hidden")},m(o,t){S(o,e,t),B(e,r)},p(o,t){t&2&&Je(r,o[1])},d(o){o&&y(e)}}}function Ey(a){let e,r;return{c(){e=P("span"),r=oe(a[1]),C(e,"class","visually-hidden")},m(o,t){S(o,e,t),B(e,r)},p(o,t){t&2&&Je(r,o[1])},d(o){o&&y(e)}}}function jy(a){let e,r;return{c(){e=P("span"),r=oe(a[1]),C(e,"class","visually-hidden")},m(o,t){S(o,e,t),B(e,r)},p(o,t){t&2&&Je(r,o[1])},d(o){o&&y(e)}}}function Fy(a){let e,r,o,t;const l=[Oy,By,Ay,Gy],n=[];function i(s,u){return s[2]?0:s[3]==="div"?1:s[3]==="span"?2:3}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function Wy(a,e,r){let o,t;const l=["class","ariaLabel","active","block","caret","color","disabled","inner","nav","outline","size","split","tag"];let n=Ue(e,l),i,{$$slots:s={},$$scope:u}=e;const _=Ho("dropdownContext");$a(a,_,E=>r(6,i=E));let{class:p=""}=e,{ariaLabel:c="Toggle Dropdown"}=e,{active:h=!1}=e,{block:f=!1}=e,{caret:d=!1}=e,{color:M="secondary"}=e,{disabled:b=!1}=e,{inner:T=void 0}=e,{nav:v=!1}=e,{outline:w=!1}=e,{size:U=""}=e,{split:j=!1}=e,{tag:x=null}=e;function I(E){if(b){E.preventDefault();return}v&&E.preventDefault(),i.toggle(E)}function L(E){G.call(this,a,E)}function A(E){G.call(this,a,E)}function q(E){G.call(this,a,E)}function be(E){G.call(this,a,E)}function ge(E){J[E?"unshift":"push"](()=>{T=E,r(0,T)})}function Y(E){J[E?"unshift":"push"](()=>{T=E,r(0,T)})}function D(E){J[E?"unshift":"push"](()=>{T=E,r(0,T)})}function $(E){J[E?"unshift":"push"](()=>{T=E,r(0,T)})}return a.$$set=E=>{e=z(z({},e),$e(E)),r(9,n=Ue(e,l)),"class"in E&&r(10,p=E.class),"ariaLabel"in E&&r(1,c=E.ariaLabel),"active"in E&&r(11,h=E.active),"block"in E&&r(12,f=E.block),"caret"in E&&r(13,d=E.caret),"color"in E&&r(14,M=E.color),"disabled"in E&&r(15,b=E.disabled),"inner"in E&&r(0,T=E.inner),"nav"in E&&r(2,v=E.nav),"outline"in E&&r(16,w=E.outline),"size"in E&&r(17,U=E.size),"split"in E&&r(18,j=E.split),"tag"in E&&r(3,x=E.tag),"$$scope"in E&&r(19,u=E.$$scope)},a.$$.update=()=>{a.$$.dirty&271364&&r(4,o=Ke(p,{"dropdown-toggle":d||j,"dropdown-toggle-split":j,"nav-link":v})),a.$$.dirty&219152&&r(5,t=Ke(o,"btn",`btn${w?"-outline":""}-${M}`,U?`btn-${U}`:!1,f?"d-block w-100":!1,{active:h}))},[T,c,v,x,o,t,i,_,I,n,p,h,f,d,M,b,w,U,j,u,s,L,A,q,be,ge,Y,D,$]}class li extends ae{constructor(e){super(),ee(this,e,Wy,Fy,te,{class:10,ariaLabel:1,active:11,block:12,caret:13,color:14,disabled:15,inner:0,nav:2,outline:16,size:17,split:18,tag:3})}}const xy=a=>({}),ls=a=>({});function Dy(a){let e,r,o,t=[a[11],{class:a[9]},{id:a[8]},{type:"checkbox"},{disabled:a[3]},{name:a[5]},{__value:a[7]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),e.checked=a[0],a[39](e),r||(o=[H(e,"blur",a[29]),H(e,"change",a[30]),H(e,"focus",a[31]),H(e,"input",a[32]),H(e,"change",a[38])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&2048&&n[11],i[0]&512&&{class:n[9]},i[0]&256&&{id:n[8]},{type:"checkbox"},i[0]&8&&{disabled:n[3]},i[0]&32&&{name:n[5]},i[0]&128&&{__value:n[7]}])),i[0]&1&&(e.checked=n[0])},d(n){n&&y(e),a[39](null),r=!1,Be(o)}}}function zy(a){let e,r,o,t=[a[11],{class:a[9]},{id:a[8]},{type:"checkbox"},{disabled:a[3]},{name:a[5]},{__value:a[7]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),e.checked=a[0],a[37](e),r||(o=[H(e,"blur",a[25]),H(e,"change",a[26]),H(e,"focus",a[27]),H(e,"input",a[28]),H(e,"change",a[36])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&2048&&n[11],i[0]&512&&{class:n[9]},i[0]&256&&{id:n[8]},{type:"checkbox"},i[0]&8&&{disabled:n[3]},i[0]&32&&{name:n[5]},i[0]&128&&{__value:n[7]}])),i[0]&1&&(e.checked=n[0])},d(n){n&&y(e),a[37](null),r=!1,Be(o)}}}function Vy(a){let e,r,o,t,l=[a[11],{class:a[9]},{id:a[8]},{type:"radio"},{disabled:a[3]},{name:a[5]},{__value:a[7]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return r=lf(a[34][0]),{c(){e=P("input"),W(e,n),r.p(e)},m(i,s){S(i,e,s),e.autofocus&&e.focus(),e.checked=e.__value===a[1],a[35](e),o||(t=[H(e,"blur",a[21]),H(e,"change",a[22]),H(e,"focus",a[23]),H(e,"input",a[24]),H(e,"change",a[33])],o=!0)},p(i,s){W(e,n=ye(l,[s[0]&2048&&i[11],s[0]&512&&{class:i[9]},s[0]&256&&{id:i[8]},{type:"radio"},s[0]&8&&{disabled:i[3]},s[0]&32&&{name:i[5]},s[0]&128&&{__value:i[7]}])),s[0]&2&&(e.checked=e.__value===i[1])},d(i){i&&y(e),a[35](null),r.r(),o=!1,Be(t)}}}function is(a){let e,r;const o=a[20].label,t=ne(o,a,a[19],ls),l=t||qy(a);return{c(){e=P("label"),l&&l.c(),C(e,"class","form-check-label"),C(e,"for",a[8])},m(n,i){S(n,e,i),l&&l.m(e,null),r=!0},p(n,i){t?t.p&&(!r||i[0]&524288)&&ie(t,o,n,n[19],r?le(o,n[19],i,xy):se(n[19]),ls):l&&l.p&&(!r||i[0]&16)&&l.p(n,r?i:[-1,-1]),(!r||i[0]&256)&&C(e,"for",n[8])},i(n){r||(k(l,n),r=!0)},o(n){g(l,n),r=!1},d(n){n&&y(e),l&&l.d(n)}}}function qy(a){let e;return{c(){e=oe(a[4])},m(r,o){S(r,e,o)},p(r,o){o[0]&16&&Je(e,r[4])},d(r){r&&y(e)}}}function Yy(a){let e,r,o;function t(s,u){return s[6]==="radio"?Vy:s[6]==="switch"?zy:Dy}let l=t(a),n=l(a),i=a[4]&&is(a);return{c(){e=P("div"),n.c(),r=F(),i&&i.c(),C(e,"class",a[10])},m(s,u){S(s,e,u),n.m(e,null),B(e,r),i&&i.m(e,null),o=!0},p(s,u){l===(l=t(s))&&n?n.p(s,u):(n.d(1),n=l(s),n&&(n.c(),n.m(e,r))),s[4]?i?(i.p(s,u),u[0]&16&&k(i,1)):(i=is(s),i.c(),k(i,1),i.m(e,null)):i&&(he(),g(i,1,1,()=>{i=null}),fe()),(!o||u[0]&1024)&&C(e,"class",s[10])},i(s){o||(k(i),o=!0)},o(s){g(i),o=!1},d(s){s&&y(e),n.d(),i&&i.d()}}}function Ky(a,e,r){let o,t,l;const n=["class","checked","disabled","group","id","inline","inner","invalid","label","name","reverse","size","type","valid","value"];let i=Ue(e,n),{$$slots:s={},$$scope:u}=e,{class:_=""}=e,{checked:p=!1}=e,{disabled:c=!1}=e,{group:h=void 0}=e,{id:f=void 0}=e,{inline:d=!1}=e,{inner:M=void 0}=e,{invalid:b=!1}=e,{label:T=""}=e,{name:v=""}=e,{reverse:w=!1}=e,{size:U=""}=e,{type:j="checkbox"}=e,{valid:x=!1}=e,{value:I=void 0}=e;const L=[[]];function A(V){G.call(this,a,V)}function q(V){G.call(this,a,V)}function be(V){G.call(this,a,V)}function ge(V){G.call(this,a,V)}function Y(V){G.call(this,a,V)}function D(V){G.call(this,a,V)}function $(V){G.call(this,a,V)}function E(V){G.call(this,a,V)}function He(V){G.call(this,a,V)}function qe(V){G.call(this,a,V)}function Ne(V){G.call(this,a,V)}function pa(V){G.call(this,a,V)}function Fe(){h=this.__value,r(1,h)}function da(V){J[V?"unshift":"push"](()=>{M=V,r(2,M)})}function Ye(){p=this.checked,r(0,p)}function X(V){J[V?"unshift":"push"](()=>{M=V,r(2,M)})}function Se(){p=this.checked,r(0,p)}function Ie(V){J[V?"unshift":"push"](()=>{M=V,r(2,M)})}return a.$$set=V=>{e=z(z({},e),$e(V)),r(11,i=Ue(e,n)),"class"in V&&r(12,_=V.class),"checked"in V&&r(0,p=V.checked),"disabled"in V&&r(3,c=V.disabled),"group"in V&&r(1,h=V.group),"id"in V&&r(13,f=V.id),"inline"in V&&r(14,d=V.inline),"inner"in V&&r(2,M=V.inner),"invalid"in V&&r(15,b=V.invalid),"label"in V&&r(4,T=V.label),"name"in V&&r(5,v=V.name),"reverse"in V&&r(16,w=V.reverse),"size"in V&&r(17,U=V.size),"type"in V&&r(6,j=V.type),"valid"in V&&r(18,x=V.valid),"value"in V&&r(7,I=V.value),"$$scope"in V&&r(19,u=V.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&217152&&r(10,o=Ke(_,"form-check",{"form-check-reverse":w,"form-switch":j==="switch","form-check-inline":d,[`form-control-${U}`]:U})),a.$$.dirty[0]&294912&&r(9,t=Ke("form-check-input",{"is-invalid":b,"is-valid":x})),a.$$.dirty[0]&8208&&r(8,l=f||T)},[p,h,M,c,T,v,j,I,l,t,o,i,_,f,d,b,w,U,x,u,s,A,q,be,ge,Y,D,$,E,He,qe,Ne,pa,Fe,L,da,Ye,X,Se,Ie]}class Jy extends ae{constructor(e){super(),ee(this,e,Ky,Yy,te,{class:12,checked:0,disabled:3,group:1,id:13,inline:14,inner:2,invalid:15,label:4,name:5,reverse:16,size:17,type:6,valid:18,value:7},null,[-1,-1])}}function Zy(a){let e,r;const o=a[6].default,t=ne(o,a,a[5],null);let l=[a[1],{class:a[0]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("div"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),r=!0},p(i,[s]){t&&t.p&&(!r||s&32)&&ie(t,o,i,i[5],r?le(o,i[5],s,null):se(i[5]),null),W(e,n=ye(l,[s&2&&i[1],(!r||s&1)&&{class:i[0]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i)}}}function Xy(a,e,r){const o=["class","valid","tooltip"];let t=Ue(e,o),{$$slots:l={},$$scope:n}=e,{class:i=""}=e,{valid:s=void 0}=e,{tooltip:u=!1}=e,_;return a.$$set=p=>{e=z(z({},e),$e(p)),r(1,t=Ue(e,o)),"class"in p&&r(2,i=p.class),"valid"in p&&r(3,s=p.valid),"tooltip"in p&&r(4,u=p.tooltip),"$$scope"in p&&r(5,n=p.$$scope)},a.$$.update=()=>{if(a.$$.dirty&28){const p=u?"tooltip":"feedback";r(0,_=Ke(i,s?`valid-${p}`:`invalid-${p}`))}},[_,t,i,s,u,n,l]}class b_ extends ae{constructor(e){super(),ee(this,e,Xy,Zy,te,{class:2,valid:3,tooltip:4})}}function Qy(a){let e,r;const o=a[1].default,t=ne(o,a,a[0],null);return{c(){e=P("div"),t&&t.c()},m(l,n){S(l,e,n),t&&t.m(e,null),r=!0},p(l,[n]){t&&t.p&&(!r||n&1)&&ie(t,o,l,l[0],r?le(o,l[0],n,null):se(l[0]),null)},i(l){r||(k(t,l),r=!0)},o(l){g(t,l),r=!1},d(l){l&&y(e),t&&t.d(l)}}}function $y(a,e,r){let{$$slots:o={},$$scope:t}=e;return a.$$set=l=>{"$$scope"in l&&r(0,t=l.$$scope)},[t,o]}class eg extends ae{constructor(e){super(),ee(this,e,$y,Qy,te,{})}}function ss(a,e,r){const o=a.slice();return o[202]=e[r],o}function ag(a){let e,r,o,t;const l=a[25].default,n=ne(l,a,a[201],null);let i=[a[22],{class:a[19]},{name:a[13]},{disabled:a[8]},{readonly:a[15]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("select"),n&&n.c(),W(e,s),a[6]===void 0&&er(()=>a[199].call(e))},m(u,_){S(u,e,_),n&&n.m(e,null),"value"in s&&(s.multiple?Di:Ut)(e,s.value),e.autofocus&&e.focus(),Ut(e,a[6],!0),a[200](e),r=!0,o||(t=[H(e,"blur",a[150]),H(e,"change",a[151]),H(e,"focus",a[152]),H(e,"input",a[153]),H(e,"change",a[199])],o=!0)},p(u,_){n&&n.p&&(!r||_[6]&32768)&&ie(n,l,u,u[201],r?le(l,u[201],_,null):se(u[201]),null),W(e,s=ye(i,[_[0]&4194304&&u[22],(!r||_[0]&524288)&&{class:u[19]},(!r||_[0]&8192)&&{name:u[13]},(!r||_[0]&256)&&{disabled:u[8]},(!r||_[0]&32768)&&{readonly:u[15]}])),_[0]&4759808&&"value"in s&&(s.multiple?Di:Ut)(e,s.value),_[0]&64&&Ut(e,u[6])},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),a[200](null),o=!1,Be(t)}}}function rg(a){let e,r,o,t=[a[22],{class:a[19]},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("textarea"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[198](e),r||(o=[H(e,"blur",a[143]),H(e,"change",a[144]),H(e,"focus",a[145]),H(e,"input",a[146]),H(e,"keydown",a[147]),H(e,"keypress",a[148]),H(e,"keyup",a[149]),H(e,"input",a[197])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[198](null),r=!1,Be(o)}}}function og(a){let e,r,o,t;const l=[bg,Sg,gg,yg,kg,mg,dg,fg,hg,cg,pg,_g,ug,sg,ig,lg,ng,tg],n=[];function i(s,u){return s[17]==="text"?0:s[17]==="password"?1:s[17]==="email"?2:s[17]==="file"?3:s[17]==="checkbox"||s[17]==="radio"||s[17]==="switch"?4:s[17]==="url"?5:s[17]==="number"?6:s[17]==="date"?7:s[17]==="time"?8:s[17]==="datetime"?9:s[17]==="datetime-local"?10:s[17]==="month"?11:s[17]==="color"?12:s[17]==="range"?13:s[17]==="search"?14:s[17]==="tel"?15:s[17]==="week"?16:17}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,u){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function tg(a){let e,r,o,t=[a[22],{type:a[17]},{readOnly:a[15]},{class:a[19]},{name:a[13]},{disabled:a[8]},{placeholder:a[14]},{value:a[6]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),"value"in l&&(e.value=l.value),e.autofocus&&e.focus(),r||(o=[H(e,"blur",a[138]),H(e,"change",a[21]),H(e,"focus",a[139]),H(e,"input",a[21]),H(e,"keydown",a[140]),H(e,"keypress",a[141]),H(e,"keyup",a[142])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&131072&&{type:n[17]},i[0]&32768&&{readOnly:n[15]},i[0]&524288&&{class:n[19]},i[0]&8192&&{name:n[13]},i[0]&256&&{disabled:n[8]},i[0]&16384&&{placeholder:n[14]},i[0]&64&&e.value!==n[6]&&{value:n[6]}])),"value"in l&&(e.value=l.value)},i:K,o:K,d(n){n&&y(e),r=!1,Be(o)}}}function ng(a){let e,r,o,t=[a[22],{class:a[19]},{type:"week"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[196](e),r||(o=[H(e,"blur",a[131]),H(e,"change",a[132]),H(e,"focus",a[133]),H(e,"input",a[134]),H(e,"keydown",a[135]),H(e,"keypress",a[136]),H(e,"keyup",a[137]),H(e,"input",a[195])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"week"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[196](null),r=!1,Be(o)}}}function lg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"tel"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]},{size:a[1]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[194](e),r||(o=[H(e,"blur",a[124]),H(e,"change",a[125]),H(e,"focus",a[126]),H(e,"input",a[127]),H(e,"keydown",a[128]),H(e,"keypress",a[129]),H(e,"keyup",a[130]),H(e,"input",a[193])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"tel"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]},i[0]&2&&{size:n[1]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[194](null),r=!1,Be(o)}}}function ig(a){let e,r,o,t=[a[22],{class:a[19]},{type:"search"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]},{size:a[1]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[192](e),r||(o=[H(e,"blur",a[117]),H(e,"change",a[118]),H(e,"focus",a[119]),H(e,"input",a[120]),H(e,"keydown",a[121]),H(e,"keypress",a[122]),H(e,"keyup",a[123]),H(e,"input",a[191])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"search"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]},i[0]&2&&{size:n[1]}])),i[0]&64&&e.value!==n[6]&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[192](null),r=!1,Be(o)}}}function sg(a){let e,r,o,t=[a[22],{type:"range"},{readOnly:a[15]},{class:a[19]},{name:a[13]},{disabled:a[8]},{placeholder:a[14]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[190](e),r||(o=[H(e,"blur",a[110]),H(e,"change",a[111]),H(e,"focus",a[112]),H(e,"input",a[113]),H(e,"keydown",a[114]),H(e,"keypress",a[115]),H(e,"keyup",a[116]),H(e,"change",a[189]),H(e,"input",a[189])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],{type:"range"},i[0]&32768&&{readOnly:n[15]},i[0]&524288&&{class:n[19]},i[0]&8192&&{name:n[13]},i[0]&256&&{disabled:n[8]},i[0]&16384&&{placeholder:n[14]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[190](null),r=!1,Be(o)}}}function ug(a){let e,r,o,t=[a[22],{type:"color"},{readOnly:a[15]},{class:a[19]},{name:a[13]},{disabled:a[8]},{placeholder:a[14]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[188](e),r||(o=[H(e,"blur",a[103]),H(e,"change",a[104]),H(e,"focus",a[105]),H(e,"input",a[106]),H(e,"keydown",a[107]),H(e,"keypress",a[108]),H(e,"keyup",a[109]),H(e,"input",a[187])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],{type:"color"},i[0]&32768&&{readOnly:n[15]},i[0]&524288&&{class:n[19]},i[0]&8192&&{name:n[13]},i[0]&256&&{disabled:n[8]},i[0]&16384&&{placeholder:n[14]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[188](null),r=!1,Be(o)}}}function _g(a){let e,r,o,t=[a[22],{class:a[19]},{type:"month"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[186](e),r||(o=[H(e,"blur",a[96]),H(e,"change",a[97]),H(e,"focus",a[98]),H(e,"input",a[99]),H(e,"keydown",a[100]),H(e,"keypress",a[101]),H(e,"keyup",a[102]),H(e,"input",a[185])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"month"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[186](null),r=!1,Be(o)}}}function pg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"datetime-local"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[184](e),r||(o=[H(e,"blur",a[89]),H(e,"change",a[90]),H(e,"focus",a[91]),H(e,"input",a[92]),H(e,"keydown",a[93]),H(e,"keypress",a[94]),H(e,"keyup",a[95]),H(e,"input",a[183])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"datetime-local"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[184](null),r=!1,Be(o)}}}function cg(a){let e,r,o,t=[a[22],{type:"datetime"},{readOnly:a[15]},{class:a[19]},{name:a[13]},{disabled:a[8]},{placeholder:a[14]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[182](e),r||(o=[H(e,"blur",a[82]),H(e,"change",a[83]),H(e,"focus",a[84]),H(e,"input",a[85]),H(e,"keydown",a[86]),H(e,"keypress",a[87]),H(e,"keyup",a[88]),H(e,"input",a[181])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],{type:"datetime"},i[0]&32768&&{readOnly:n[15]},i[0]&524288&&{class:n[19]},i[0]&8192&&{name:n[13]},i[0]&256&&{disabled:n[8]},i[0]&16384&&{placeholder:n[14]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[182](null),r=!1,Be(o)}}}function hg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"time"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[180](e),r||(o=[H(e,"blur",a[75]),H(e,"change",a[76]),H(e,"focus",a[77]),H(e,"input",a[78]),H(e,"keydown",a[79]),H(e,"keypress",a[80]),H(e,"keyup",a[81]),H(e,"input",a[179])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"time"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[180](null),r=!1,Be(o)}}}function fg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"date"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[178](e),r||(o=[H(e,"blur",a[68]),H(e,"change",a[69]),H(e,"focus",a[70]),H(e,"input",a[71]),H(e,"keydown",a[72]),H(e,"keypress",a[73]),H(e,"keyup",a[74]),H(e,"input",a[177])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"date"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]}])),i[0]&64&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[178](null),r=!1,Be(o)}}}function dg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"number"},{readOnly:a[15]},{name:a[13]},{disabled:a[8]},{placeholder:a[14]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[176](e),r||(o=[H(e,"blur",a[61]),H(e,"change",a[62]),H(e,"focus",a[63]),H(e,"input",a[64]),H(e,"keydown",a[65]),H(e,"keypress",a[66]),H(e,"keyup",a[67]),H(e,"input",a[175])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"number"},i[0]&32768&&{readOnly:n[15]},i[0]&8192&&{name:n[13]},i[0]&256&&{disabled:n[8]},i[0]&16384&&{placeholder:n[14]}])),i[0]&64&&fl(e.value)!==n[6]&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[176](null),r=!1,Be(o)}}}function mg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"url"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]},{size:a[1]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[174](e),r||(o=[H(e,"blur",a[54]),H(e,"change",a[55]),H(e,"focus",a[56]),H(e,"input",a[57]),H(e,"keydown",a[58]),H(e,"keypress",a[59]),H(e,"keyup",a[60]),H(e,"input",a[173])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"url"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]},i[0]&2&&{size:n[1]}])),i[0]&64&&e.value!==n[6]&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[174](null),r=!1,Be(o)}}}function kg(a){let e,r,o,t,l,n;const i=[a[22],{class:a[7]},{size:a[0]},{type:a[17]},{disabled:a[8]},{invalid:a[10]},{label:a[11]},{name:a[13]},{placeholder:a[14]},{reverse:a[16]},{readonly:a[15]},{valid:a[18]}];function s(h){a[162](h)}function u(h){a[163](h)}function _(h){a[164](h)}function p(h){a[165](h)}let c={};for(let h=0;h<i.length;h+=1)c=z(c,i[h]);return a[2]!==void 0&&(c.checked=a[2]),a[5]!==void 0&&(c.inner=a[5]),a[4]!==void 0&&(c.group=a[4]),a[6]!==void 0&&(c.value=a[6]),e=new Jy({props:c}),J.push(()=>me(e,"checked",s)),J.push(()=>me(e,"inner",u)),J.push(()=>me(e,"group",_)),J.push(()=>me(e,"value",p)),e.$on("blur",a[166]),e.$on("change",a[167]),e.$on("focus",a[168]),e.$on("input",a[169]),e.$on("keydown",a[170]),e.$on("keypress",a[171]),e.$on("keyup",a[172]),{c(){N(e.$$.fragment)},m(h,f){O(e,h,f),n=!0},p(h,f){const d=f[0]&4713857?ye(i,[f[0]&4194304&&Qu(h[22]),f[0]&128&&{class:h[7]},f[0]&1&&{size:h[0]},f[0]&131072&&{type:h[17]},f[0]&256&&{disabled:h[8]},f[0]&1024&&{invalid:h[10]},f[0]&2048&&{label:h[11]},f[0]&8192&&{name:h[13]},f[0]&16384&&{placeholder:h[14]},f[0]&65536&&{reverse:h[16]},f[0]&32768&&{readonly:h[15]},f[0]&262144&&{valid:h[18]}]):{};!r&&f[0]&4&&(r=!0,d.checked=h[2],de(()=>r=!1)),!o&&f[0]&32&&(o=!0,d.inner=h[5],de(()=>o=!1)),!t&&f[0]&16&&(t=!0,d.group=h[4],de(()=>t=!1)),!l&&f[0]&64&&(l=!0,d.value=h[6],de(()=>l=!1)),e.$set(d)},i(h){n||(k(e.$$.fragment,h),n=!0)},o(h){g(e.$$.fragment,h),n=!1},d(h){R(e,h)}}}function yg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"file"},{disabled:a[8]},{invalid:a[10]},{multiple:a[12]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]},{valid:a[18]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),a[161](e),r||(o=[H(e,"blur",a[47]),H(e,"change",a[48]),H(e,"focus",a[49]),H(e,"input",a[50]),H(e,"keydown",a[51]),H(e,"keypress",a[52]),H(e,"keyup",a[53]),H(e,"change",a[160])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"file"},i[0]&256&&{disabled:n[8]},i[0]&1024&&{invalid:n[10]},i[0]&4096&&{multiple:n[12]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]},i[0]&262144&&{valid:n[18]}]))},i:K,o:K,d(n){n&&y(e),a[161](null),r=!1,Be(o)}}}function gg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"email"},{disabled:a[8]},{multiple:a[12]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]},{size:a[1]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[159](e),r||(o=[H(e,"blur",a[40]),H(e,"change",a[41]),H(e,"focus",a[42]),H(e,"input",a[43]),H(e,"keydown",a[44]),H(e,"keypress",a[45]),H(e,"keyup",a[46]),H(e,"input",a[158])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"email"},i[0]&256&&{disabled:n[8]},i[0]&4096&&{multiple:n[12]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]},i[0]&2&&{size:n[1]}])),i[0]&64&&e.value!==n[6]&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[159](null),r=!1,Be(o)}}}function Sg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"password"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]},{size:a[1]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[157](e),r||(o=[H(e,"blur",a[33]),H(e,"change",a[34]),H(e,"focus",a[35]),H(e,"input",a[36]),H(e,"keydown",a[37]),H(e,"keypress",a[38]),H(e,"keyup",a[39]),H(e,"input",a[156])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"password"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]},i[0]&2&&{size:n[1]}])),i[0]&64&&e.value!==n[6]&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[157](null),r=!1,Be(o)}}}function bg(a){let e,r,o,t=[a[22],{class:a[19]},{type:"text"},{disabled:a[8]},{name:a[13]},{placeholder:a[14]},{readOnly:a[15]},{size:a[1]}],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("input"),W(e,l)},m(n,i){S(n,e,i),e.autofocus&&e.focus(),xe(e,a[6]),a[155](e),r||(o=[H(e,"blur",a[26]),H(e,"change",a[27]),H(e,"focus",a[28]),H(e,"input",a[29]),H(e,"keydown",a[30]),H(e,"keypress",a[31]),H(e,"keyup",a[32]),H(e,"input",a[154])],r=!0)},p(n,i){W(e,l=ye(t,[i[0]&4194304&&n[22],i[0]&524288&&{class:n[19]},{type:"text"},i[0]&256&&{disabled:n[8]},i[0]&8192&&{name:n[13]},i[0]&16384&&{placeholder:n[14]},i[0]&32768&&{readOnly:n[15]},i[0]&2&&{size:n[1]}])),i[0]&64&&e.value!==n[6]&&xe(e,n[6])},i:K,o:K,d(n){n&&y(e),a[155](null),r=!1,Be(o)}}}function us(a){let e,r,o,t,l;const n=[wg,Mg],i=[];function s(u,_){return _[0]&512&&(e=null),e==null&&(e=!!Array.isArray(u[9])),e?0:1}return r=s(a,[-1,-1,-1,-1,-1,-1,-1]),o=i[r]=n[r](a),{c(){o.c(),t=Pe()},m(u,_){i[r].m(u,_),S(u,t,_),l=!0},p(u,_){let p=r;r=s(u,_),r===p?i[r].p(u,_):(he(),g(i[p],1,1,()=>{i[p]=null}),fe(),o=i[r],o?o.p(u,_):(o=i[r]=n[r](u),o.c()),k(o,1),o.m(t.parentNode,t))},i(u){l||(k(o),l=!0)},o(u){g(o),l=!1},d(u){u&&y(t),i[r].d(u)}}}function Mg(a){let e,r;return e=new b_({props:{valid:a[18],$$slots:{default:[Tg]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t[0]&262144&&(l.valid=o[18]),t[0]&512|t[6]&32768&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function wg(a){let e,r,o=Ce(a[9]),t=[];for(let n=0;n<o.length;n+=1)t[n]=_s(ss(a,o,n));const l=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=Pe()},m(n,i){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,i);S(n,e,i),r=!0},p(n,i){if(i[0]&262656){o=Ce(n[9]);let s;for(s=0;s<o.length;s+=1){const u=ss(n,o,s);t[s]?(t[s].p(u,i),k(t[s],1)):(t[s]=_s(u),t[s].c(),k(t[s],1),t[s].m(e.parentNode,e))}for(he(),s=o.length;s<t.length;s+=1)l(s);fe()}},i(n){if(!r){for(let i=0;i<o.length;i+=1)k(t[i]);r=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);r=!1},d(n){n&&y(e),ua(t,n)}}}function Tg(a){let e;return{c(){e=oe(a[9])},m(r,o){S(r,e,o)},p(r,o){o[0]&512&&Je(e,r[9])},d(r){r&&y(e)}}}function vg(a){let e=a[202]+"",r;return{c(){r=oe(e)},m(o,t){S(o,r,t)},p(o,t){t[0]&512&&e!==(e=o[202]+"")&&Je(r,e)},d(o){o&&y(r)}}}function _s(a){let e,r;return e=new b_({props:{valid:a[18],$$slots:{default:[vg]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t[0]&262144&&(l.valid=o[18]),t[0]&512|t[6]&32768&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function Pg(a){let e,r,o,t,l;const n=[og,rg,ag],i=[];function s(_,p){return _[20]==="input"?0:_[20]==="textarea"?1:_[20]==="select"&&!_[12]?2:-1}~(e=s(a))&&(r=i[e]=n[e](a));let u=a[9]&&us(a);return{c(){r&&r.c(),o=F(),u&&u.c(),t=Pe()},m(_,p){~e&&i[e].m(_,p),S(_,o,p),u&&u.m(_,p),S(_,t,p),l=!0},p(_,p){let c=e;e=s(_),e===c?~e&&i[e].p(_,p):(r&&(he(),g(i[c],1,1,()=>{i[c]=null}),fe()),~e?(r=i[e],r?r.p(_,p):(r=i[e]=n[e](_),r.c()),k(r,1),r.m(o.parentNode,o)):r=null),_[9]?u?(u.p(_,p),p[0]&512&&k(u,1)):(u=us(_),u.c(),k(u,1),u.m(t.parentNode,t)):u&&(he(),g(u,1,1,()=>{u=null}),fe())},i(_){l||(k(r),k(u),l=!0)},o(_){g(r),g(u),l=!1},d(_){_&&(y(o),y(t)),~e&&i[e].d(_),u&&u.d(_)}}}function Hg(a,e,r){const o=["class","bsSize","checked","color","disabled","feedback","files","group","inner","invalid","label","multiple","name","placeholder","plaintext","readonly","reverse","size","type","valid","value"];let t=Ue(e,o),{$$slots:l={},$$scope:n}=e,{class:i=""}=e,{bsSize:s=void 0}=e,{checked:u=!1}=e,{color:_=void 0}=e,{disabled:p=void 0}=e,{feedback:c=void 0}=e,{files:h=void 0}=e,{group:f=void 0}=e,{inner:d=void 0}=e,{invalid:M=!1}=e,{label:b=void 0}=e,{multiple:T=void 0}=e,{name:v=""}=e,{placeholder:w=""}=e,{plaintext:U=!1}=e,{readonly:j=void 0}=e,{reverse:x=!1}=e,{size:I=void 0}=e,{type:L="text"}=e,{valid:A=!1}=e,{value:q=""}=e,be,ge;const Y=m=>{r(6,q=m.target.value)};function D(m){G.call(this,a,m)}function $(m){G.call(this,a,m)}function E(m){G.call(this,a,m)}function He(m){G.call(this,a,m)}function qe(m){G.call(this,a,m)}function Ne(m){G.call(this,a,m)}function pa(m){G.call(this,a,m)}function Fe(m){G.call(this,a,m)}function da(m){G.call(this,a,m)}function Ye(m){G.call(this,a,m)}function X(m){G.call(this,a,m)}function Se(m){G.call(this,a,m)}function Ie(m){G.call(this,a,m)}function V(m){G.call(this,a,m)}function De(m){G.call(this,a,m)}function Re(m){G.call(this,a,m)}function aa(m){G.call(this,a,m)}function We(m){G.call(this,a,m)}function Ze(m){G.call(this,a,m)}function Xe(m){G.call(this,a,m)}function ue(m){G.call(this,a,m)}function na(m){G.call(this,a,m)}function Q(m){G.call(this,a,m)}function Oe(m){G.call(this,a,m)}function Pr(m){G.call(this,a,m)}function Oa(m){G.call(this,a,m)}function Hr(m){G.call(this,a,m)}function fr(m){G.call(this,a,m)}function Ur(m){G.call(this,a,m)}function Dr(m){G.call(this,a,m)}function Ra(m){G.call(this,a,m)}function dr(m){G.call(this,a,m)}function zr(m){G.call(this,a,m)}function mr(m){G.call(this,a,m)}function vt(m){G.call(this,a,m)}function Pt(m){G.call(this,a,m)}function An(m){G.call(this,a,m)}function Bn(m){G.call(this,a,m)}function On(m){G.call(this,a,m)}function Rn(m){G.call(this,a,m)}function Nn(m){G.call(this,a,m)}function En(m){G.call(this,a,m)}function jn(m){G.call(this,a,m)}function Fn(m){G.call(this,a,m)}function Wn(m){G.call(this,a,m)}function xn(m){G.call(this,a,m)}function Dn(m){G.call(this,a,m)}function zn(m){G.call(this,a,m)}function Vn(m){G.call(this,a,m)}function qn(m){G.call(this,a,m)}function Yn(m){G.call(this,a,m)}function Kn(m){G.call(this,a,m)}function Jn(m){G.call(this,a,m)}function re(m){G.call(this,a,m)}function xp(m){G.call(this,a,m)}function Dp(m){G.call(this,a,m)}function zp(m){G.call(this,a,m)}function Vp(m){G.call(this,a,m)}function qp(m){G.call(this,a,m)}function Yp(m){G.call(this,a,m)}function Kp(m){G.call(this,a,m)}function Jp(m){G.call(this,a,m)}function Zp(m){G.call(this,a,m)}function Xp(m){G.call(this,a,m)}function Qp(m){G.call(this,a,m)}function $p(m){G.call(this,a,m)}function ec(m){G.call(this,a,m)}function ac(m){G.call(this,a,m)}function rc(m){G.call(this,a,m)}function oc(m){G.call(this,a,m)}function tc(m){G.call(this,a,m)}function nc(m){G.call(this,a,m)}function lc(m){G.call(this,a,m)}function ic(m){G.call(this,a,m)}function sc(m){G.call(this,a,m)}function uc(m){G.call(this,a,m)}function _c(m){G.call(this,a,m)}function pc(m){G.call(this,a,m)}function cc(m){G.call(this,a,m)}function hc(m){G.call(this,a,m)}function fc(m){G.call(this,a,m)}function dc(m){G.call(this,a,m)}function mc(m){G.call(this,a,m)}function kc(m){G.call(this,a,m)}function yc(m){G.call(this,a,m)}function gc(m){G.call(this,a,m)}function Sc(m){G.call(this,a,m)}function bc(m){G.call(this,a,m)}function Mc(m){G.call(this,a,m)}function wc(m){G.call(this,a,m)}function Tc(m){G.call(this,a,m)}function vc(m){G.call(this,a,m)}function Pc(m){G.call(this,a,m)}function Hc(m){G.call(this,a,m)}function Uc(m){G.call(this,a,m)}function Lc(m){G.call(this,a,m)}function Cc(m){G.call(this,a,m)}function Ic(m){G.call(this,a,m)}function Gc(m){G.call(this,a,m)}function Ac(m){G.call(this,a,m)}function Bc(m){G.call(this,a,m)}function Oc(m){G.call(this,a,m)}function Rc(m){G.call(this,a,m)}function Nc(m){G.call(this,a,m)}function Ec(m){G.call(this,a,m)}function jc(m){G.call(this,a,m)}function Fc(m){G.call(this,a,m)}function Wc(m){G.call(this,a,m)}function xc(m){G.call(this,a,m)}function Dc(m){G.call(this,a,m)}function zc(m){G.call(this,a,m)}function Vc(m){G.call(this,a,m)}function qc(m){G.call(this,a,m)}function Yc(m){G.call(this,a,m)}function Kc(m){G.call(this,a,m)}function Jc(m){G.call(this,a,m)}function Zc(m){G.call(this,a,m)}function Xc(m){G.call(this,a,m)}function Qc(m){G.call(this,a,m)}function $c(m){G.call(this,a,m)}function eh(m){G.call(this,a,m)}function ah(m){G.call(this,a,m)}function rh(m){G.call(this,a,m)}function oh(m){G.call(this,a,m)}function th(m){G.call(this,a,m)}function nh(m){G.call(this,a,m)}function lh(m){G.call(this,a,m)}function ih(m){G.call(this,a,m)}function sh(){q=this.value,r(6,q)}function uh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function _h(){q=this.value,r(6,q)}function ph(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function ch(){q=this.value,r(6,q)}function hh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function fh(){h=this.files,q=this.value,r(3,h),r(6,q)}function dh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function mh(m){u=m,r(2,u)}function kh(m){d=m,r(5,d)}function yh(m){f=m,r(4,f)}function gh(m){q=m,r(6,q)}function Sh(m){G.call(this,a,m)}function bh(m){G.call(this,a,m)}function Mh(m){G.call(this,a,m)}function wh(m){G.call(this,a,m)}function Th(m){G.call(this,a,m)}function vh(m){G.call(this,a,m)}function Ph(m){G.call(this,a,m)}function Hh(){q=this.value,r(6,q)}function Uh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Lh(){q=fl(this.value),r(6,q)}function Ch(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Ih(){q=this.value,r(6,q)}function Gh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Ah(){q=this.value,r(6,q)}function Bh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Oh(){q=this.value,r(6,q)}function Rh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Nh(){q=this.value,r(6,q)}function Eh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function jh(){q=this.value,r(6,q)}function Fh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Wh(){q=this.value,r(6,q)}function xh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Dh(){q=fl(this.value),r(6,q)}function zh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Vh(){q=this.value,r(6,q)}function qh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Yh(){q=this.value,r(6,q)}function Kh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Jh(){q=this.value,r(6,q)}function Zh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function Xh(){q=this.value,r(6,q)}function Qh(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}function $h(){q=uf(this),r(6,q)}function ef(m){J[m?"unshift":"push"](()=>{d=m,r(5,d)})}return a.$$set=m=>{e=z(z({},e),$e(m)),r(22,t=Ue(e,o)),"class"in m&&r(7,i=m.class),"bsSize"in m&&r(0,s=m.bsSize),"checked"in m&&r(2,u=m.checked),"color"in m&&r(23,_=m.color),"disabled"in m&&r(8,p=m.disabled),"feedback"in m&&r(9,c=m.feedback),"files"in m&&r(3,h=m.files),"group"in m&&r(4,f=m.group),"inner"in m&&r(5,d=m.inner),"invalid"in m&&r(10,M=m.invalid),"label"in m&&r(11,b=m.label),"multiple"in m&&r(12,T=m.multiple),"name"in m&&r(13,v=m.name),"placeholder"in m&&r(14,w=m.placeholder),"plaintext"in m&&r(24,U=m.plaintext),"readonly"in m&&r(15,j=m.readonly),"reverse"in m&&r(16,x=m.reverse),"size"in m&&r(1,I=m.size),"type"in m&&r(17,L=m.type),"valid"in m&&r(18,A=m.valid),"value"in m&&r(6,q=m.value),"$$scope"in m&&r(201,n=m.$$scope)},a.$$.update=()=>{if(a.$$.dirty[0]&25560195){const m=new RegExp("\\D","g");let Zn=!1,kr="form-control";switch(r(20,ge="input"),L){case"color":kr="form-control form-control-color";break;case"range":kr="form-range";break;case"select":kr="form-select",r(20,ge="select");break;case"textarea":r(20,ge="textarea");break;case"button":case"reset":case"submit":kr=`btn btn-${_||"secondary"}`,Zn=!0;break;case"hidden":case"image":kr=void 0;break;default:kr="form-control",r(20,ge="input")}U&&(kr=`${kr}-plaintext`,r(20,ge="input")),I&&m.test(I)&&(console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`),r(0,s=I),r(1,I=void 0)),r(19,be=Ke(i,kr,{"is-invalid":M,"is-valid":A,[`form-control-${s}`]:s&&!Zn,[`btn-${s}`]:s&&Zn}))}},[s,I,u,h,f,d,q,i,p,c,M,b,T,v,w,j,x,L,A,be,ge,Y,t,_,U,l,D,$,E,He,qe,Ne,pa,Fe,da,Ye,X,Se,Ie,V,De,Re,aa,We,Ze,Xe,ue,na,Q,Oe,Pr,Oa,Hr,fr,Ur,Dr,Ra,dr,zr,mr,vt,Pt,An,Bn,On,Rn,Nn,En,jn,Fn,Wn,xn,Dn,zn,Vn,qn,Yn,Kn,Jn,re,xp,Dp,zp,Vp,qp,Yp,Kp,Jp,Zp,Xp,Qp,$p,ec,ac,rc,oc,tc,nc,lc,ic,sc,uc,_c,pc,cc,hc,fc,dc,mc,kc,yc,gc,Sc,bc,Mc,wc,Tc,vc,Pc,Hc,Uc,Lc,Cc,Ic,Gc,Ac,Bc,Oc,Rc,Nc,Ec,jc,Fc,Wc,xc,Dc,zc,Vc,qc,Yc,Kc,Jc,Zc,Xc,Qc,$c,eh,ah,rh,oh,th,nh,lh,ih,sh,uh,_h,ph,ch,hh,fh,dh,mh,kh,yh,gh,Sh,bh,Mh,wh,Th,vh,Ph,Hh,Uh,Lh,Ch,Ih,Gh,Ah,Bh,Oh,Rh,Nh,Eh,jh,Fh,Wh,xh,Dh,zh,Vh,qh,Yh,Kh,Jh,Zh,Xh,Qh,$h,ef,n]}class kt extends ae{constructor(e){super(),ee(this,e,Hg,Pg,te,{class:7,bsSize:0,checked:2,color:23,disabled:8,feedback:9,files:3,group:4,inner:5,invalid:10,label:11,multiple:12,name:13,placeholder:14,plaintext:24,readonly:15,reverse:16,size:1,type:17,valid:18,value:6},null,[-1,-1,-1,-1,-1,-1,-1])}}function Ug(a){let e,r;const o=a[7].default,t=ne(o,a,a[6],null);let l=[a[2],{class:a[1]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("ul"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),r=!0},p(i,s){t&&t.p&&(!r||s&64)&&ie(t,o,i,i[6],r?le(o,i[6],s,null):se(i[6]),null),W(e,n=ye(l,[s&4&&i[2],(!r||s&2)&&{class:i[1]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i)}}}function Lg(a){let e,r;const o=a[7].default,t=ne(o,a,a[6],null);let l=[a[2],{class:a[1]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("ol"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),r=!0},p(i,s){t&&t.p&&(!r||s&64)&&ie(t,o,i,i[6],r?le(o,i[6],s,null):se(i[6]),null),W(e,n=ye(l,[s&4&&i[2],(!r||s&2)&&{class:i[1]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i)}}}function Cg(a){let e,r,o,t;const l=[Lg,Ug],n=[];function i(s,u){return s[0]?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function Ig(a,e,r){let o;const t=["class","flush","horizontal","numbered"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e,{flush:u=!1}=e,{horizontal:_=!1}=e,{numbered:p=!1}=e;return a.$$set=c=>{e=z(z({},e),$e(c)),r(2,l=Ue(e,t)),"class"in c&&r(3,s=c.class),"flush"in c&&r(4,u=c.flush),"horizontal"in c&&r(5,_=c.horizontal),"numbered"in c&&r(0,p=c.numbered),"$$scope"in c&&r(6,i=c.$$scope)},a.$$.update=()=>{a.$$.dirty&57&&r(1,o=Ke(s,"list-group",{"list-group-flush":u,"list-group-horizontal":_,"list-group-numbered":p}))},[p,o,l,s,u,_,i,n]}class M_ extends ae{constructor(e){super(),ee(this,e,Ig,Cg,te,{class:3,flush:4,horizontal:5,numbered:0})}}function Gg(a){let e,r,o,t;const l=a[10].default,n=ne(l,a,a[9],null);let i=[a[5],{class:a[4]},{disabled:a[1]},{active:a[0]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("li"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),r=!0,o||(t=H(e,"click",a[13]),o=!0)},p(u,_){n&&n.p&&(!r||_&512)&&ie(n,l,u,u[9],r?le(l,u[9],_,null):se(u[9]),null),W(e,s=ye(i,[_&32&&u[5],(!r||_&16)&&{class:u[4]},(!r||_&2)&&{disabled:u[1]},(!r||_&1)&&{active:u[0]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,t()}}}function Ag(a){let e,r,o,t;const l=a[10].default,n=ne(l,a,a[9],null);let i=[a[5],{class:a[4]},{type:"button"},{disabled:a[1]},{active:a[0]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("button"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),e.autofocus&&e.focus(),r=!0,o||(t=H(e,"click",a[12]),o=!0)},p(u,_){n&&n.p&&(!r||_&512)&&ie(n,l,u,u[9],r?le(l,u[9],_,null):se(u[9]),null),W(e,s=ye(i,[_&32&&u[5],(!r||_&16)&&{class:u[4]},{type:"button"},(!r||_&2)&&{disabled:u[1]},(!r||_&1)&&{active:u[0]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,t()}}}function Bg(a){let e,r,o,t;const l=a[10].default,n=ne(l,a,a[9],null);let i=[a[5],{class:a[4]},{href:a[2]},{disabled:a[1]},{active:a[0]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("a"),n&&n.c(),W(e,s)},m(u,_){S(u,e,_),n&&n.m(e,null),r=!0,o||(t=H(e,"click",a[11]),o=!0)},p(u,_){n&&n.p&&(!r||_&512)&&ie(n,l,u,u[9],r?le(l,u[9],_,null):se(u[9]),null),W(e,s=ye(i,[_&32&&u[5],(!r||_&16)&&{class:u[4]},(!r||_&4)&&{href:u[2]},(!r||_&2)&&{disabled:u[1]},(!r||_&1)&&{active:u[0]}]))},i(u){r||(k(n,u),r=!0)},o(u){g(n,u),r=!1},d(u){u&&y(e),n&&n.d(u),o=!1,t()}}}function Og(a){let e,r,o,t;const l=[Bg,Ag,Gg],n=[];function i(s,u){return s[2]?0:s[3]==="button"?1:2}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function Rg(a,e,r){let o;const t=["class","active","disabled","color","action","href","tag"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e,{active:u=!1}=e,{disabled:_=!1}=e,{color:p=""}=e,{action:c=!1}=e,{href:h=null}=e,{tag:f=null}=e;function d(T){G.call(this,a,T)}function M(T){G.call(this,a,T)}function b(T){G.call(this,a,T)}return a.$$set=T=>{e=z(z({},e),$e(T)),r(5,l=Ue(e,t)),"class"in T&&r(6,s=T.class),"active"in T&&r(0,u=T.active),"disabled"in T&&r(1,_=T.disabled),"color"in T&&r(7,p=T.color),"action"in T&&r(8,c=T.action),"href"in T&&r(2,h=T.href),"tag"in T&&r(3,f=T.tag),"$$scope"in T&&r(9,i=T.$$scope)},a.$$.update=()=>{a.$$.dirty&459&&r(4,o=Ke(s,"list-group-item",{active:u,disabled:_,"list-group-item-action":c||f==="button",[`list-group-item-${p}`]:p}))},[u,_,h,f,o,l,s,p,c,i,n,d,M,b]}class w_ extends ae{constructor(e){super(),ee(this,e,Rg,Og,te,{class:6,active:0,disabled:1,color:7,action:8,href:2,tag:3})}}function ps(a){let e,r,o,t,l,n,i=[{role:"presentation"},a[4],{class:a[3]}],s={};for(let u=0;u<i.length;u+=1)s=z(s,i[u]);return{c(){e=P("div"),W(e,s),la(e,"fade",a[1])},m(u,_){S(u,e,_),t=!0,l||(n=H(e,"click",a[6]),l=!0)},p(u,_){W(e,s=ye(i,[{role:"presentation"},_&16&&u[4],(!t||_&8)&&{class:u[3]}])),la(e,"fade",u[1])},i(u){t||(u&&er(()=>{t&&(o&&o.end(1),r=Zu(e,jk,{}),r.start())}),t=!0)},o(u){r&&r.invalidate(),u&&(o=Xu(e,Fk,{})),t=!1},d(u){u&&y(e),u&&o&&o.end(),l=!1,n()}}}function Ng(a){let e,r=a[0]&&a[2]&&ps(a);return{c(){r&&r.c(),e=Pe()},m(o,t){r&&r.m(o,t),S(o,e,t)},p(o,[t]){o[0]&&o[2]?r?(r.p(o,t),t&5&&k(r,1)):(r=ps(o),r.c(),k(r,1),r.m(e.parentNode,e)):r&&(he(),g(r,1,1,()=>{r=null}),fe())},i(o){k(r)},o(o){g(r)},d(o){o&&y(e),r&&r.d(o)}}}function Eg(a,e,r){let o;const t=["class","isOpen","fade"];let l=Ue(e,t),{class:n=""}=e,{isOpen:i=!1}=e,{fade:s=!0}=e,u=!1;ft(()=>{r(2,u=!0)});function _(p){G.call(this,a,p)}return a.$$set=p=>{e=z(z({},e),$e(p)),r(4,l=Ue(e,t)),"class"in p&&r(5,n=p.class),"isOpen"in p&&r(0,i=p.isOpen),"fade"in p&&r(1,s=p.fade)},a.$$.update=()=>{a.$$.dirty&32&&r(3,o=Ke(n,"modal-backdrop"))},[i,s,u,o,l,n,_]}class jg extends ae{constructor(e){super(),ee(this,e,Eg,Ng,te,{class:5,isOpen:0,fade:1})}}function Fg(a){let e,r;const o=a[4].default,t=ne(o,a,a[3],null);let l=[a[1],{class:a[0]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("div"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),r=!0},p(i,[s]){t&&t.p&&(!r||s&8)&&ie(t,o,i,i[3],r?le(o,i[3],s,null):se(i[3]),null),W(e,n=ye(l,[s&2&&i[1],(!r||s&1)&&{class:i[0]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i)}}}function Wg(a,e,r){let o;const t=["class"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e;return a.$$set=u=>{e=z(z({},e),$e(u)),r(1,l=Ue(e,t)),"class"in u&&r(2,s=u.class),"$$scope"in u&&r(3,i=u.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&r(0,o=Ke(s,"modal-body"))},[o,l,s,i,n]}class T_ extends ae{constructor(e){super(),ee(this,e,Wg,Fg,te,{class:2})}}const xg=a=>({}),cs=a=>({});function Dg(a){let e;const r=a[8].default,o=ne(r,a,a[7],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&128)&&ie(o,r,t,t[7],e?le(r,t[7],l,null):se(t[7]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function zg(a){let e;return{c(){e=oe(a[2])},m(r,o){S(r,e,o)},p(r,o){o&4&&Je(e,r[2])},i:K,o:K,d(r){r&&y(e)}}}function hs(a){let e,r,o;return{c(){e=P("button"),C(e,"type","button"),C(e,"class","btn-close"),C(e,"aria-label",a[1])},m(t,l){S(t,e,l),r||(o=H(e,"click",function(){Qr(a[0])&&a[0].apply(this,arguments)}),r=!0)},p(t,l){a=t,l&2&&C(e,"aria-label",a[1])},d(t){t&&y(e),r=!1,o()}}}function Vg(a){let e,r=typeof a[0]=="function"&&hs(a);return{c(){r&&r.c(),e=Pe()},m(o,t){r&&r.m(o,t),S(o,e,t)},p(o,t){typeof o[0]=="function"?r?r.p(o,t):(r=hs(o),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(o){o&&y(e),r&&r.d(o)}}}function qg(a){let e,r,o,t,l,n;const i=[zg,Dg],s=[];function u(d,M){return d[2]?0:1}o=u(a),t=s[o]=i[o](a);const _=a[8].close,p=ne(_,a,a[7],cs),c=p||Vg(a);let h=[a[5],{class:a[4]}],f={};for(let d=0;d<h.length;d+=1)f=z(f,h[d]);return{c(){e=P("div"),r=P("h5"),t.c(),l=F(),c&&c.c(),C(r,"class","modal-title"),C(r,"id",a[3]),W(e,f)},m(d,M){S(d,e,M),B(e,r),s[o].m(r,null),B(e,l),c&&c.m(e,null),n=!0},p(d,[M]){let b=o;o=u(d),o===b?s[o].p(d,M):(he(),g(s[b],1,1,()=>{s[b]=null}),fe(),t=s[o],t?t.p(d,M):(t=s[o]=i[o](d),t.c()),k(t,1),t.m(r,null)),(!n||M&8)&&C(r,"id",d[3]),p?p.p&&(!n||M&128)&&ie(p,_,d,d[7],n?le(_,d[7],M,xg):se(d[7]),cs):c&&c.p&&(!n||M&3)&&c.p(d,n?M:-1),W(e,f=ye(h,[M&32&&d[5],(!n||M&16)&&{class:d[4]}]))},i(d){n||(k(t),k(c,d),n=!0)},o(d){g(t),g(c,d),n=!1},d(d){d&&y(e),s[o].d(),c&&c.d(d)}}}function Yg(a,e,r){let o;const t=["class","toggle","closeAriaLabel","children","id"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e,{toggle:u=void 0}=e,{closeAriaLabel:_="Close"}=e,{children:p=void 0}=e,{id:c=void 0}=e;return a.$$set=h=>{e=z(z({},e),$e(h)),r(5,l=Ue(e,t)),"class"in h&&r(6,s=h.class),"toggle"in h&&r(0,u=h.toggle),"closeAriaLabel"in h&&r(1,_=h.closeAriaLabel),"children"in h&&r(2,p=h.children),"id"in h&&r(3,c=h.id),"$$scope"in h&&r(7,i=h.$$scope)},a.$$.update=()=>{a.$$.dirty&64&&r(4,o=Ke(s,"modal-header"))},[u,_,p,c,o,l,s,i,n]}class v_ extends ae{constructor(e){super(),ee(this,e,Yg,qg,te,{class:6,toggle:0,closeAriaLabel:1,children:2,id:3})}}function Kg(a){let e,r;const o=a[3].default,t=ne(o,a,a[2],null);let l=[a[1]],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("div"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),a[4](e),r=!0},p(i,[s]){t&&t.p&&(!r||s&4)&&ie(t,o,i,i[2],r?le(o,i[2],s,null):se(i[2]),null),W(e,n=ye(l,[s&2&&i[1]]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i),a[4](null)}}}function Jg(a,e,r){const o=[];let t=Ue(e,o),{$$slots:l={},$$scope:n}=e,i,s;ft(()=>{s=document.createElement("div"),document.body.appendChild(s),s.appendChild(i)}),Yl(()=>{typeof document<"u"&&document.body.removeChild(s)});function u(_){J[_?"unshift":"push"](()=>{i=_,r(0,i)})}return a.$$set=_=>{e=z(z({},e),$e(_)),r(1,t=Ue(e,o)),"$$scope"in _&&r(2,n=_.$$scope)},[i,t,n,l,u]}class Zg extends ae{constructor(e){super(),ee(this,e,Jg,Kg,te,{})}}const Xg=a=>({}),fs=a=>({});function ds(a){let e,r,o;var t=a[13];function l(n,i){return{props:{$$slots:{default:[rS]},$$scope:{ctx:n}}}}return t&&(e=Jt(t,l(a))),{c(){e&&N(e.$$.fragment),r=Pe()},m(n,i){e&&O(e,n,i),S(n,r,i),o=!0},p(n,i){if(i[0]&8192&&t!==(t=n[13])){if(e){he();const s=e;g(s.$$.fragment,1,0,()=>{R(s,1)}),fe()}t?(e=Jt(t,l(n)),N(e.$$.fragment),k(e.$$.fragment,1),O(e,r.parentNode,r)):e=null}else if(t){const s={};i[0]&2119615|i[1]&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)}},i(n){o||(e&&k(e.$$.fragment,n),o=!0)},o(n){e&&g(e.$$.fragment,n),o=!1},d(n){n&&y(r),e&&R(e,n)}}}function ms(a){let e,r,o,t,l,n,i,s,u,_,p,c,h,f;const d=a[31].external,M=ne(d,a,a[34],fs);let b=a[3]&&ks(a);const T=[eS,$g],v=[];function w(U,j){return U[2]?0:1}return n=w(a),i=v[n]=T[n](a),{c(){e=P("div"),M&&M.c(),r=F(),o=P("div"),t=P("div"),b&&b.c(),l=F(),i.c(),C(t,"class",s=Ke("modal-content",a[9])),C(o,"class",a[14]),C(o,"role","document"),C(e,"aria-labelledby",a[5]),C(e,"class",u=Ke("modal",a[8],{fade:a[10],"position-static":a[0]})),C(e,"role","dialog")},m(U,j){S(U,e,j),M&&M.m(e,null),B(e,r),B(e,o),B(o,t),b&&b.m(t,null),B(t,l),v[n].m(t,null),a[32](o),c=!0,h||(f=[H(e,"introstart",a[33]),H(e,"introend",a[17]),H(e,"outrostart",a[18]),H(e,"outroend",a[19]),H(e,"click",a[16]),H(e,"mousedown",a[20])],h=!0)},p(U,j){M&&M.p&&(!c||j[1]&8)&&ie(M,d,U,U[34],c?le(d,U[34],j,Xg):se(U[34]),fs),U[3]?b?(b.p(U,j),j[0]&8&&k(b,1)):(b=ks(U),b.c(),k(b,1),b.m(t,l)):b&&(he(),g(b,1,1,()=>{b=null}),fe());let x=n;n=w(U),n===x?v[n].p(U,j):(he(),g(v[x],1,1,()=>{v[x]=null}),fe(),i=v[n],i?i.p(U,j):(i=v[n]=T[n](U),i.c()),k(i,1),i.m(t,null)),(!c||j[0]&512&&s!==(s=Ke("modal-content",U[9])))&&C(t,"class",s),(!c||j[0]&16384)&&C(o,"class",U[14]),(!c||j[0]&32)&&C(e,"aria-labelledby",U[5]),(!c||j[0]&1281&&u!==(u=Ke("modal",U[8],{fade:U[10],"position-static":U[0]})))&&C(e,"class",u)},i(U){c||(k(M,U),k(b),k(i),er(()=>{c&&(p&&p.end(1),_=Zu(e,Wk,{}),_.start())}),c=!0)},o(U){g(M,U),g(b),g(i),_&&_.invalidate(),p=Xu(e,xk,{}),c=!1},d(U){U&&y(e),M&&M.d(U),b&&b.d(),v[n].d(),a[32](null),U&&p&&p.end(),h=!1,Be(f)}}}function ks(a){let e,r;return e=new v_({props:{toggle:a[4],id:a[5],$$slots:{default:[Qg]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t[0]&16&&(l.toggle=o[4]),t[0]&32&&(l.id=o[5]),t[0]&8|t[1]&8&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function Qg(a){let e;return{c(){e=oe(a[3])},m(r,o){S(r,e,o)},p(r,o){o[0]&8&&Je(e,r[3])},d(r){r&&y(e)}}}function $g(a){let e;const r=a[31].default,o=ne(r,a,a[34],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l[1]&8)&&ie(o,r,t,t[34],e?le(r,t[34],l,null):se(t[34]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function eS(a){let e,r;return e=new T_({props:{$$slots:{default:[aS]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t[1]&8&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function aS(a){let e;const r=a[31].default,o=ne(r,a,a[34],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l[1]&8)&&ie(o,r,t,t[34],e?le(r,t[34],l,null):se(t[34]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function rS(a){let e,r,o=a[1]&&ms(a),t=[{class:a[7]},{tabindex:"-1"},a[21]],l={};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return{c(){e=P("div"),o&&o.c(),W(e,l)},m(n,i){S(n,e,i),o&&o.m(e,null),r=!0},p(n,i){n[1]?o?(o.p(n,i),i[0]&2&&k(o,1)):(o=ms(n),o.c(),k(o,1),o.m(e,null)):o&&(he(),g(o,1,1,()=>{o=null}),fe()),W(e,l=ye(t,[(!r||i[0]&128)&&{class:n[7]},{tabindex:"-1"},i[0]&2097152&&n[21]]))},i(n){r||(k(o),r=!0)},o(n){g(o),r=!1},d(n){n&&y(e),o&&o.d()}}}function ys(a){let e,r,o;var t=a[13];function l(n,i){return{props:{$$slots:{default:[oS]},$$scope:{ctx:n}}}}return t&&(e=Jt(t,l(a))),{c(){e&&N(e.$$.fragment),r=Pe()},m(n,i){e&&O(e,n,i),S(n,r,i),o=!0},p(n,i){if(i[0]&8192&&t!==(t=n[13])){if(e){he();const s=e;g(s.$$.fragment,1,0,()=>{R(s,1)}),fe()}t?(e=Jt(t,l(n)),N(e.$$.fragment),k(e.$$.fragment,1),O(e,r.parentNode,r)):e=null}else if(t){const s={};i[0]&1026|i[1]&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)}},i(n){o||(e&&k(e.$$.fragment,n),o=!0)},o(n){e&&g(e.$$.fragment,n),o=!1},d(n){n&&y(r),e&&R(e,n)}}}function oS(a){let e,r;return e=new jg({props:{fade:a[10],isOpen:a[1]}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t[0]&1024&&(l.fade=o[10]),t[0]&2&&(l.isOpen=o[1]),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function tS(a){let e,r,o,t=a[11]&&ds(a),l=a[6]&&!a[0]&&ys(a);return{c(){t&&t.c(),e=F(),l&&l.c(),r=Pe()},m(n,i){t&&t.m(n,i),S(n,e,i),l&&l.m(n,i),S(n,r,i),o=!0},p(n,i){n[11]?t?(t.p(n,i),i[0]&2048&&k(t,1)):(t=ds(n),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(he(),g(t,1,1,()=>{t=null}),fe()),n[6]&&!n[0]?l?(l.p(n,i),i[0]&65&&k(l,1)):(l=ys(n),l.c(),k(l,1),l.m(r.parentNode,r)):l&&(he(),g(l,1,1,()=>{l=null}),fe())},i(n){o||(k(t),k(l),o=!0)},o(n){g(t),g(l),o=!1},d(n){n&&(y(e),y(r)),t&&t.d(n),l&&l.d(n)}}}let Eo=0;const rl="modal-dialog";function nS(a,e,r){let o,t;const l=["class","static","isOpen","autoFocus","body","centered","container","fullscreen","header","scrollable","size","toggle","labelledBy","backdrop","wrapClassName","modalClassName","contentClassName","fade","unmountOnClose","returnFocusAfterClose"];let n=Ue(e,l),{$$slots:i={},$$scope:s}=e;const u=df();let{class:_=""}=e,{static:p=!1}=e,{isOpen:c=!1}=e,{autoFocus:h=!0}=e,{body:f=!1}=e,{centered:d=!1}=e,{container:M=void 0}=e,{fullscreen:b=!1}=e,{header:T=void 0}=e,{scrollable:v=!1}=e,{size:w=""}=e,{toggle:U=void 0}=e,{labelledBy:j=T?`modal-${Ek()}`:void 0}=e,{backdrop:x=!0}=e,{wrapClassName:I=""}=e,{modalClassName:L=""}=e,{contentClassName:A=""}=e,{fade:q=!0}=e,{unmountOnClose:be=!0}=e,{returnFocusAfterClose:ge=!0}=e,Y=!1,D=!1,$,E,He=c,qe=Y,Ne,pa,Fe;ft(()=>{c&&(Ye(),Y=!0),Y&&h&&da()}),Yl(()=>{Se(),Y&&Ie()}),ff(()=>{c&&!He&&(Ye(),Y=!0),h&&Y&&!qe&&da(),He=c,qe=Y});function da(){Ne&&Ne.parentNode&&typeof Ne.parentNode.focus=="function"&&Ne.parentNode.focus()}function Ye(){try{$=document.activeElement}catch{$=null}p||(E=Ak(),Rk(),Eo===0&&(document.body.className=Ke(document.body.className,"modal-open")),++Eo),r(11,D=!0)}function X(){$&&(typeof $.focus=="function"&&ge&&$.focus(),$=null)}function Se(){X()}function Ie(){Eo<=1&&document.body.classList.remove("modal-open"),X(),Eo=Math.max(0,Eo-1),l_(E)}function V(ue){if(ue.target===pa){if(!c||!x)return;const na=Ne?Ne.parentNode:null;x===!0&&na&&ue.target===na&&U&&(ue.stopPropagation(),U(ue))}}function De(){u("open"),Fe=Nk(document,"keydown",ue=>{ue.key&&ue.key==="Escape"&&U&&x===!0&&(Fe&&Fe(),U(ue))})}function Re(){u("closing"),Fe&&Fe()}function aa(){u("close"),be&&Se(),Ie(),D&&(Y=!1),r(11,D=!1)}function We(ue){pa=ue.target}function Ze(ue){J[ue?"unshift":"push"](()=>{Ne=ue,r(12,Ne)})}const Xe=()=>u("opening");return a.$$set=ue=>{e=z(z({},e),$e(ue)),r(21,n=Ue(e,l)),"class"in ue&&r(22,_=ue.class),"static"in ue&&r(0,p=ue.static),"isOpen"in ue&&r(1,c=ue.isOpen),"autoFocus"in ue&&r(23,h=ue.autoFocus),"body"in ue&&r(2,f=ue.body),"centered"in ue&&r(24,d=ue.centered),"container"in ue&&r(25,M=ue.container),"fullscreen"in ue&&r(26,b=ue.fullscreen),"header"in ue&&r(3,T=ue.header),"scrollable"in ue&&r(27,v=ue.scrollable),"size"in ue&&r(28,w=ue.size),"toggle"in ue&&r(4,U=ue.toggle),"labelledBy"in ue&&r(5,j=ue.labelledBy),"backdrop"in ue&&r(6,x=ue.backdrop),"wrapClassName"in ue&&r(7,I=ue.wrapClassName),"modalClassName"in ue&&r(8,L=ue.modalClassName),"contentClassName"in ue&&r(9,A=ue.contentClassName),"fade"in ue&&r(10,q=ue.fade),"unmountOnClose"in ue&&r(29,be=ue.unmountOnClose),"returnFocusAfterClose"in ue&&r(30,ge=ue.returnFocusAfterClose),"$$scope"in ue&&r(34,s=ue.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&490733568&&r(14,o=Ke(rl,_,{[`modal-${w}`]:w,"modal-fullscreen":b===!0,[`modal-fullscreen-${b}-down`]:b&&typeof b=="string",[`${rl}-centered`]:d,[`${rl}-scrollable`]:v})),a.$$.dirty[0]&33554433&&r(13,t=M==="inline"||p?eg:Zg)},[p,c,f,T,U,j,x,I,L,A,q,D,Ne,t,o,u,V,De,Re,aa,We,n,_,h,d,M,b,v,w,be,ge,i,Ze,Xe,s]}class lS extends ae{constructor(e){super(),ee(this,e,nS,tS,te,{class:22,static:0,isOpen:1,autoFocus:23,body:2,centered:24,container:25,fullscreen:26,header:3,scrollable:27,size:28,toggle:4,labelledBy:5,backdrop:6,wrapClassName:7,modalClassName:8,contentClassName:9,fade:10,unmountOnClose:29,returnFocusAfterClose:30},null,[-1,-1])}}function iS(a){let e,r;const o=a[4].default,t=ne(o,a,a[3],null);let l=[a[1],{class:a[0]}],n={};for(let i=0;i<l.length;i+=1)n=z(n,l[i]);return{c(){e=P("div"),t&&t.c(),W(e,n)},m(i,s){S(i,e,s),t&&t.m(e,null),r=!0},p(i,[s]){t&&t.p&&(!r||s&8)&&ie(t,o,i,i[3],r?le(o,i[3],s,null):se(i[3]),null),W(e,n=ye(l,[s&2&&i[1],(!r||s&1)&&{class:i[0]}]))},i(i){r||(k(t,i),r=!0)},o(i){g(t,i),r=!1},d(i){i&&y(e),t&&t.d(i)}}}function sS(a,e,r){let o;const t=["class"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e;return a.$$set=u=>{e=z(z({},e),$e(u)),r(1,l=Ue(e,t)),"class"in u&&r(2,s=u.class),"$$scope"in u&&r(3,i=u.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&r(0,o=Ke(s,"modal-footer"))},[o,l,s,i,n]}class uS extends ae{constructor(e){super(),ee(this,e,sS,iS,te,{class:2})}}function _S(a){let e,r,o,t;const l=[hS,cS],n=[];function i(_,p){return _[1]?0:1}r=i(a),o=n[r]=l[r](a);let s=[a[7],{class:a[6]}],u={};for(let _=0;_<s.length;_+=1)u=z(u,s[_]);return{c(){e=P("div"),o.c(),W(e,u)},m(_,p){S(_,e,p),n[r].m(e,null),t=!0},p(_,p){let c=r;r=i(_),r===c?n[r].p(_,p):(he(),g(n[c],1,1,()=>{n[c]=null}),fe(),o=n[r],o?o.p(_,p):(o=n[r]=l[r](_),o.c()),k(o,1),o.m(e,null)),W(e,u=ye(s,[p&128&&_[7],(!t||p&64)&&{class:_[6]}]))},i(_){t||(k(o),t=!0)},o(_){g(o),t=!1},d(_){_&&y(e),n[r].d()}}}function pS(a){let e,r,o,t;const l=[dS,fS],n=[];function i(s,u){return s[1]?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,u){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function cS(a){let e,r;const o=a[14].default,t=ne(o,a,a[13],null);return{c(){e=P("div"),t&&t.c(),C(e,"class",a[5]),we(e,"width",a[4]+"%"),C(e,"role","progressbar"),C(e,"aria-valuenow",a[2]),C(e,"aria-valuemin","0"),C(e,"aria-valuemax",a[3])},m(l,n){S(l,e,n),t&&t.m(e,null),r=!0},p(l,n){t&&t.p&&(!r||n&8192)&&ie(t,o,l,l[13],r?le(o,l[13],n,null):se(l[13]),null),(!r||n&32)&&C(e,"class",l[5]),(!r||n&16)&&we(e,"width",l[4]+"%"),(!r||n&4)&&C(e,"aria-valuenow",l[2]),(!r||n&8)&&C(e,"aria-valuemax",l[3])},i(l){r||(k(t,l),r=!0)},o(l){g(t,l),r=!1},d(l){l&&y(e),t&&t.d(l)}}}function hS(a){let e;const r=a[14].default,o=ne(r,a,a[13],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&8192)&&ie(o,r,t,t[13],e?le(r,t[13],l,null):se(t[13]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function fS(a){let e,r,o;const t=a[14].default,l=ne(t,a,a[13],null);let n=[a[7],{class:a[5]},{style:r="width: "+a[4]+"%"},{role:"progressbar"},{"aria-valuenow":a[2]},{"aria-valuemin":"0"},{"aria-valuemax":a[3]}],i={};for(let s=0;s<n.length;s+=1)i=z(i,n[s]);return{c(){e=P("div"),l&&l.c(),W(e,i)},m(s,u){S(s,e,u),l&&l.m(e,null),o=!0},p(s,u){l&&l.p&&(!o||u&8192)&&ie(l,t,s,s[13],o?le(t,s[13],u,null):se(s[13]),null),W(e,i=ye(n,[u&128&&s[7],(!o||u&32)&&{class:s[5]},(!o||u&16&&r!==(r="width: "+s[4]+"%"))&&{style:r},{role:"progressbar"},(!o||u&4)&&{"aria-valuenow":s[2]},{"aria-valuemin":"0"},(!o||u&8)&&{"aria-valuemax":s[3]}]))},i(s){o||(k(l,s),o=!0)},o(s){g(l,s),o=!1},d(s){s&&y(e),l&&l.d(s)}}}function dS(a){let e;const r=a[14].default,o=ne(r,a,a[13],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&8192)&&ie(o,r,t,t[13],e?le(r,t[13],l,null):se(t[13]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function mS(a){let e,r,o,t;const l=[pS,_S],n=[];function i(s,u){return s[0]?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function kS(a,e,r){let o,t,l;const n=["class","bar","multi","value","max","animated","striped","color","barClassName"];let i=Ue(e,n),{$$slots:s={},$$scope:u}=e,{class:_=""}=e,{bar:p=!1}=e,{multi:c=!1}=e,{value:h=0}=e,{max:f=100}=e,{animated:d=!1}=e,{striped:M=!1}=e,{color:b=""}=e,{barClassName:T=""}=e;return a.$$set=v=>{e=z(z({},e),$e(v)),r(7,i=Ue(e,n)),"class"in v&&r(8,_=v.class),"bar"in v&&r(0,p=v.bar),"multi"in v&&r(1,c=v.multi),"value"in v&&r(2,h=v.value),"max"in v&&r(3,f=v.max),"animated"in v&&r(9,d=v.animated),"striped"in v&&r(10,M=v.striped),"color"in v&&r(11,b=v.color),"barClassName"in v&&r(12,T=v.barClassName),"$$scope"in v&&r(13,u=v.$$scope)},a.$$.update=()=>{a.$$.dirty&256&&r(6,o=Ke(_,"progress")),a.$$.dirty&7937&&r(5,t=Ke("progress-bar",p&&_||T,d?"progress-bar-animated":null,b?`text-bg-${b}`:null,M||d?"progress-bar-striped":null)),a.$$.dirty&12&&r(4,l=parseInt(h,10)/parseInt(f,10)*100)},[p,c,h,f,l,t,o,i,_,d,M,b,T,u,s]}class yS extends ae{constructor(e){super(),ee(this,e,kS,mS,te,{class:8,bar:0,multi:1,value:2,max:3,animated:9,striped:10,color:11,barClassName:12})}}const{document:ol}=rf;function gs(a){let e;return{c(){e=P("link"),C(e,"rel","stylesheet"),C(e,"href","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function gS(a){let e,r,o=a[0]&&gs();return{c(){e=P("link"),o&&o.c(),r=Pe(),C(e,"rel","stylesheet"),C(e,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css")},m(t,l){B(ol.head,e),o&&o.m(ol.head,null),B(ol.head,r)},p(t,[l]){t[0]?o||(o=gs(),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i:K,o:K,d(t){y(e),o&&o.d(t),y(r)}}}function SS(a,e,r){let{icons:o=!0}=e,{theme:t=void 0}=e;return a.$$set=l=>{"icons"in l&&r(0,o=l.icons),"theme"in l&&r(1,t=l.theme)},a.$$.update=()=>{a.$$.dirty&2&&typeof document<"u"&&t!==void 0&&(t==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",t))},[o,t]}class bS extends ae{constructor(e){super(),ee(this,e,SS,gS,te,{icons:0,theme:1})}}function MS(a){let e,r;const o=a[1].default,t=ne(o,a,a[0],null);return{c(){e=P("colgroup"),t&&t.c()},m(l,n){S(l,e,n),t&&t.m(e,null),r=!0},p(l,[n]){t&&t.p&&(!r||n&1)&&ie(t,o,l,l[0],r?le(o,l[0],n,null):se(l[0]),null)},i(l){r||(k(t,l),r=!0)},o(l){g(t,l),r=!1},d(l){l&&y(e),t&&t.d(l)}}}function wS(a,e,r){let{$$slots:o={},$$scope:t}=e;return Po("colgroup",!0),a.$$set=l=>{"$$scope"in l&&r(0,t=l.$$scope)},[t,o]}class TS extends ae{constructor(e){super(),ee(this,e,wS,MS,te,{})}}function vS(a){let e;const r=a[4].default,o=ne(r,a,a[3],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&8)&&ie(o,r,t,t[3],e?le(r,t[3],l,null):se(t[3]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function PS(a){let e,r;const o=a[4].default,t=ne(o,a,a[3],null);return{c(){e=P("div"),t&&t.c(),C(e,"class",a[1])},m(l,n){S(l,e,n),t&&t.m(e,null),r=!0},p(l,n){t&&t.p&&(!r||n&8)&&ie(t,o,l,l[3],r?le(o,l[3],n,null):se(l[3]),null),(!r||n&2)&&C(e,"class",l[1])},i(l){r||(k(t,l),r=!0)},o(l){g(t,l),r=!1},d(l){l&&y(e),t&&t.d(l)}}}function HS(a){let e,r,o,t;const l=[PS,vS],n=[];function i(s,u){return s[0]?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function US(a,e,r){let o,{$$slots:t={},$$scope:l}=e,{class:n=""}=e,{responsive:i=!1}=e;return a.$$set=s=>{"class"in s&&r(2,n=s.class),"responsive"in s&&r(0,i=s.responsive),"$$scope"in s&&r(3,l=s.$$scope)},a.$$.update=()=>{a.$$.dirty&5&&r(1,o=Ke(n,{"table-responsive":i===!0,[`table-responsive-${i}`]:typeof i=="string"}))},[i,o,n,l,t]}class LS extends ae{constructor(e){super(),ee(this,e,US,HS,te,{class:2,responsive:0})}}function CS(a){let e,r,o;const t=a[2].default,l=ne(t,a,a[1],null);let n=[a[0]],i={};for(let s=0;s<n.length;s+=1)i=z(i,n[s]);return{c(){e=P("tfoot"),r=P("tr"),l&&l.c(),W(e,i)},m(s,u){S(s,e,u),B(e,r),l&&l.m(r,null),o=!0},p(s,[u]){l&&l.p&&(!o||u&2)&&ie(l,t,s,s[1],o?le(t,s[1],u,null):se(s[1]),null),W(e,i=ye(n,[u&1&&s[0]]))},i(s){o||(k(l,s),o=!0)},o(s){g(l,s),o=!1},d(s){s&&y(e),l&&l.d(s)}}}function IS(a,e,r){const o=[];let t=Ue(e,o),{$$slots:l={},$$scope:n}=e;return Po("footer",!0),a.$$set=i=>{e=z(z({},e),$e(i)),r(0,t=Ue(e,o)),"$$scope"in i&&r(1,n=i.$$scope)},[t,n,l]}class GS extends ae{constructor(e){super(),ee(this,e,IS,CS,te,{})}}function AS(a){let e,r,o;const t=a[2].default,l=ne(t,a,a[1],null);let n=[a[0]],i={};for(let s=0;s<n.length;s+=1)i=z(i,n[s]);return{c(){e=P("thead"),r=P("tr"),l&&l.c(),W(e,i)},m(s,u){S(s,e,u),B(e,r),l&&l.m(r,null),o=!0},p(s,[u]){l&&l.p&&(!o||u&2)&&ie(l,t,s,s[1],o?le(t,s[1],u,null):se(s[1]),null),W(e,i=ye(n,[u&1&&s[0]]))},i(s){o||(k(l,s),o=!0)},o(s){g(l,s),o=!1},d(s){s&&y(e),l&&l.d(s)}}}function BS(a,e,r){const o=[];let t=Ue(e,o),{$$slots:l={},$$scope:n}=e;return Po("header",!0),a.$$set=i=>{e=z(z({},e),$e(i)),r(0,t=Ue(e,o)),"$$scope"in i&&r(1,n=i.$$scope)},[t,n,l]}class OS extends ae{constructor(e){super(),ee(this,e,BS,AS,te,{})}}function Ss(a,e,r){const o=a.slice();return o[12]=e[r],o}const RS=a=>({row:a&2}),bs=a=>({row:a[12]});function NS(a){let e;const r=a[10].default,o=ne(r,a,a[11],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&2048)&&ie(o,r,t,t[11],e?le(r,t[11],l,null):se(t[11]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function ES(a){let e,r,o,t,l,n,i,s;e=new TS({props:{$$slots:{default:[jS]},$$scope:{ctx:a}}}),o=new OS({props:{$$slots:{default:[FS]},$$scope:{ctx:a}}});let u=Ce(a[1]),_=[];for(let c=0;c<u.length;c+=1)_[c]=Ms(Ss(a,u,c));const p=c=>g(_[c],1,1,()=>{_[c]=null});return i=new GS({props:{$$slots:{default:[WS]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),r=F(),N(o.$$.fragment),t=F(),l=P("tbody");for(let c=0;c<_.length;c+=1)_[c].c();n=F(),N(i.$$.fragment)},m(c,h){O(e,c,h),S(c,r,h),O(o,c,h),S(c,t,h),S(c,l,h);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(l,null);S(c,n,h),O(i,c,h),s=!0},p(c,h){const f={};h&2048&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};if(h&2048&&(d.$$scope={dirty:h,ctx:c}),o.$set(d),h&2050){u=Ce(c[1]);let b;for(b=0;b<u.length;b+=1){const T=Ss(c,u,b);_[b]?(_[b].p(T,h),k(_[b],1)):(_[b]=Ms(T),_[b].c(),k(_[b],1),_[b].m(l,null))}for(he(),b=u.length;b<_.length;b+=1)p(b);fe()}const M={};h&2048&&(M.$$scope={dirty:h,ctx:c}),i.$set(M)},i(c){if(!s){k(e.$$.fragment,c),k(o.$$.fragment,c);for(let h=0;h<u.length;h+=1)k(_[h]);k(i.$$.fragment,c),s=!0}},o(c){g(e.$$.fragment,c),g(o.$$.fragment,c),_=_.filter(Boolean);for(let h=0;h<_.length;h+=1)g(_[h]);g(i.$$.fragment,c),s=!1},d(c){c&&(y(r),y(t),y(l),y(n)),R(e,c),R(o,c),ua(_,c),R(i,c)}}}function jS(a){let e;const r=a[10].default,o=ne(r,a,a[11],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&2048)&&ie(o,r,t,t[11],e?le(r,t[11],l,null):se(t[11]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function FS(a){let e;const r=a[10].default,o=ne(r,a,a[11],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&2048)&&ie(o,r,t,t[11],e?le(r,t[11],l,null):se(t[11]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function Ms(a){let e,r,o;const t=a[10].default,l=ne(t,a,a[11],bs);return{c(){e=P("tr"),l&&l.c(),r=F()},m(n,i){S(n,e,i),l&&l.m(e,null),B(e,r),o=!0},p(n,i){l&&l.p&&(!o||i&2050)&&ie(l,t,n,n[11],o?le(t,n[11],i,RS):se(n[11]),bs)},i(n){o||(k(l,n),o=!0)},o(n){g(l,n),o=!1},d(n){n&&y(e),l&&l.d(n)}}}function WS(a){let e;const r=a[10].default,o=ne(r,a,a[11],null);return{c(){o&&o.c()},m(t,l){o&&o.m(t,l),e=!0},p(t,l){o&&o.p&&(!e||l&2048)&&ie(o,r,t,t[11],e?le(r,t[11],l,null):se(t[11]),null)},i(t){e||(k(o,t),e=!0)},o(t){g(o,t),e=!1},d(t){o&&o.d(t)}}}function xS(a){let e,r,o,t;const l=[ES,NS],n=[];function i(_,p){return _[1]?0:1}r=i(a),o=n[r]=l[r](a);let s=[a[3],{class:a[2]}],u={};for(let _=0;_<s.length;_+=1)u=z(u,s[_]);return{c(){e=P("table"),o.c(),W(e,u)},m(_,p){S(_,e,p),n[r].m(e,null),t=!0},p(_,p){let c=r;r=i(_),r===c?n[r].p(_,p):(he(),g(n[c],1,1,()=>{n[c]=null}),fe(),o=n[r],o?o.p(_,p):(o=n[r]=l[r](_),o.c()),k(o,1),o.m(e,null)),W(e,u=ye(s,[p&8&&_[3],(!t||p&4)&&{class:_[2]}]))},i(_){t||(k(o),t=!0)},o(_){g(o),t=!1},d(_){_&&y(e),n[r].d()}}}function DS(a){let e,r;return e=new LS({props:{responsive:a[0],$$slots:{default:[xS]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,[t]){const l={};t&1&&(l.responsive=o[0]),t&2062&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function zS(a,e,r){let o;const t=["class","size","bordered","borderless","striped","hover","responsive","rows"];let l=Ue(e,t),{$$slots:n={},$$scope:i}=e,{class:s=""}=e,{size:u=""}=e,{bordered:_=!1}=e,{borderless:p=!1}=e,{striped:c=!1}=e,{hover:h=!1}=e,{responsive:f=!1}=e,{rows:d=void 0}=e;return a.$$set=M=>{e=z(z({},e),$e(M)),r(3,l=Ue(e,t)),"class"in M&&r(4,s=M.class),"size"in M&&r(5,u=M.size),"bordered"in M&&r(6,_=M.bordered),"borderless"in M&&r(7,p=M.borderless),"striped"in M&&r(8,c=M.striped),"hover"in M&&r(9,h=M.hover),"responsive"in M&&r(0,f=M.responsive),"rows"in M&&r(1,d=M.rows),"$$scope"in M&&r(11,i=M.$$scope)},a.$$.update=()=>{a.$$.dirty&1008&&r(2,o=Ke(s,"table",u?"table-"+u:!1,_?"table-bordered":!1,p?"table-borderless":!1,c?"table-striped":!1,h?"table-hover":!1))},[f,d,o,l,s,u,_,p,c,h,n,i]}class P_ extends ae{constructor(e){super(),ee(this,e,zS,DS,te,{class:4,size:5,bordered:6,borderless:7,striped:8,hover:9,responsive:0,rows:1})}}function VS(a){let e;return{c(){e=oe("Use Example File")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function qS(a){let e,r;return{c(){e=P("br"),r=oe("INVALID JSON FILE")},m(o,t){S(o,e,t),S(o,r,t)},d(o){o&&(y(e),y(r))}}}function YS(a){let e,r;return{c(){e=P("br"),r=oe("VALID JSON FILE")},m(o,t){S(o,e,t),S(o,r,t)},d(o){o&&(y(e),y(r))}}}function KS(a){let e,r,o,t,l,n,i,s,u,_,p,c,h;s=new ga({props:{$$slots:{default:[VS]},$$scope:{ctx:a}}}),s.$on("click",a[3]);function f(b,T){if(b[1]===!0)return YS;if(b[1]===!1)return qS}let d=f(a),M=d&&d(a);return{c(){e=P("label"),e.textContent="Upload your gear database file:",r=F(),o=P("input"),t=F(),l=P("br"),n=P("br"),i=oe(`\r
OR: `),N(s.$$.fragment),u=F(),M&&M.c(),_=Pe(),C(e,"for","avatar"),C(o,"accept",".json,application/json"),C(o,"id","avatar"),C(o,"name","avatar"),C(o,"type","file")},m(b,T){S(b,e,T),S(b,r,T),S(b,o,T),S(b,t,T),S(b,l,T),S(b,n,T),S(b,i,T),O(s,b,T),S(b,u,T),M&&M.m(b,T),S(b,_,T),p=!0,c||(h=[H(o,"change",a[5]),H(o,"change",a[2])],c=!0)},p(b,[T]){const v={};T&64&&(v.$$scope={dirty:T,ctx:b}),s.$set(v),d!==(d=f(b))&&(M&&M.d(1),M=d&&d(b),M&&(M.c(),M.m(_.parentNode,_)))},i(b){p||(k(s.$$.fragment,b),p=!0)},o(b){g(s.$$.fragment,b),p=!1},d(b){b&&(y(e),y(r),y(o),y(t),y(l),y(n),y(i),y(u),y(_)),R(s,b),M&&M.d(b),c=!1,Be(h)}}}function JS(a,e,r){let{gearSeedDatabase:o}=e,t,l;const n=async u=>{const _=u.target;if(_.files)try{const p=JSON.parse(await _.files[0].text());r(4,o=Zi.parse(p)),r(1,l=!0)}catch(p){console.log(p),r(1,l=!1)}};function i(){try{r(4,o=Zi.parse(Gk)),r(1,l=!0)}catch(u){console.log(u),r(1,l=!1)}}function s(){t=this.files,r(0,t)}return a.$$set=u=>{"gearSeedDatabase"in u&&r(4,o=u.gearSeedDatabase)},[t,l,n,i,o,s]}class ZS extends ae{constructor(e){super(),ee(this,e,JS,KS,te,{gearSeedDatabase:4})}}var yt="delete",ra=5,za=1<<ra,Ta=za-1,je={};function Bl(){return{value:!1}}function Va(a){a&&(a.value=!0)}function ii(){}function yo(a){return a.size===void 0&&(a.size=a.__iterate(H_)),a.size}function Er(a,e){if(typeof e!="number"){var r=e>>>0;if(""+r!==e||r===4294967295)return NaN;e=r}return e<0?yo(a)+e:e}function H_(){return!0}function wn(a,e,r){return(a===0&&!L_(a)||r!==void 0&&a<=-r)&&(e===void 0||r!==void 0&&e>=r)}function gt(a,e){return U_(a,e,0)}function Tn(a,e){return U_(a,e,e)}function U_(a,e,r){return a===void 0?r:L_(a)?e===1/0?e:Math.max(0,e+a)|0:e===void 0||e===a?a:Math.min(e,a)|0}function L_(a){return a<0||a===0&&1/a===-1/0}var C_="@@__IMMUTABLE_ITERABLE__@@";function Ga(a){return!!(a&&a[C_])}var I_="@@__IMMUTABLE_KEYED__@@";function ia(a){return!!(a&&a[I_])}var G_="@@__IMMUTABLE_INDEXED__@@";function Ca(a){return!!(a&&a[G_])}function vn(a){return ia(a)||Ca(a)}var ha=function(e){return Ga(e)?e:Da(e)},Xa=function(a){function e(r){return ia(r)?r:xr(r)}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e}(ha),$r=function(a){function e(r){return Ca(r)?r:tr(r)}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e}(ha),Uo=function(a){function e(r){return Ga(r)&&!vn(r)?r:Go(r)}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e}(ha);ha.Keyed=Xa;ha.Indexed=$r;ha.Set=Uo;var A_="@@__IMMUTABLE_SEQ__@@";function si(a){return!!(a&&a[A_])}var B_="@@__IMMUTABLE_RECORD__@@";function Lo(a){return!!(a&&a[B_])}function cr(a){return Ga(a)||Lo(a)}var Co="@@__IMMUTABLE_ORDERED__@@";function rr(a){return!!(a&&a[Co])}var St=0,or=1,Ja=2,Ol=typeof Symbol=="function"&&Symbol.iterator,O_="@@iterator",Pn=Ol||O_,Ve=function(e){this.next=e};Ve.prototype.toString=function(){return"[Iterator]"};Ve.KEYS=St;Ve.VALUES=or;Ve.ENTRIES=Ja;Ve.prototype.inspect=Ve.prototype.toSource=function(){return this.toString()};Ve.prototype[Pn]=function(){return this};function sa(a,e,r,o){var t=a===0?e:a===1?r:[e,r];return o?o.value=t:o={value:t,done:!1},o}function Aa(){return{value:void 0,done:!0}}function R_(a){return Array.isArray(a)?!0:!!Hn(a)}function ws(a){return a&&typeof a.next=="function"}function Rl(a){var e=Hn(a);return e&&e.call(a)}function Hn(a){var e=a&&(Ol&&a[Ol]||a[O_]);if(typeof e=="function")return e}function XS(a){var e=Hn(a);return e&&e===a.entries}function QS(a){var e=Hn(a);return e&&e===a.keys}var Io=Object.prototype.hasOwnProperty;function N_(a){return Array.isArray(a)||typeof a=="string"?!0:a&&typeof a=="object"&&Number.isInteger(a.length)&&a.length>=0&&(a.length===0?Object.keys(a).length===1:a.hasOwnProperty(a.length-1))}var Da=function(a){function e(r){return r==null?_i():cr(r)?r.toSeq():eb(r)}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.toSeq=function(){return this},e.prototype.toString=function(){return this.__toString("Seq {","}")},e.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},e.prototype.__iterate=function(o,t){var l=this._cache;if(l){for(var n=l.length,i=0;i!==n;){var s=l[t?n-++i:i++];if(o(s[1],s[0],this)===!1)break}return i}return this.__iterateUncached(o,t)},e.prototype.__iterator=function(o,t){var l=this._cache;if(l){var n=l.length,i=0;return new Ve(function(){if(i===n)return Aa();var s=l[t?n-++i:i++];return sa(o,s[0],s[1])})}return this.__iteratorUncached(o,t)},e}(ha),xr=function(a){function e(r){return r==null?_i().toKeyedSeq():Ga(r)?ia(r)?r.toSeq():r.fromEntrySeq():Lo(r)?r.toSeq():pi(r)}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.toKeyedSeq=function(){return this},e}(Da),tr=function(a){function e(r){return r==null?_i():Ga(r)?ia(r)?r.entrySeq():r.toIndexedSeq():Lo(r)?r.toSeq().entrySeq():E_(r)}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.of=function(){return e(arguments)},e.prototype.toIndexedSeq=function(){return this},e.prototype.toString=function(){return this.__toString("Seq [","]")},e}(Da),Go=function(a){function e(r){return(Ga(r)&&!vn(r)?r:tr(r)).toSetSeq()}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.of=function(){return e(arguments)},e.prototype.toSetSeq=function(){return this},e}(Da);Da.isSeq=si;Da.Keyed=xr;Da.Set=Go;Da.Indexed=tr;Da.prototype[A_]=!0;var Xr=function(a){function e(r){this._array=r,this.size=r.length}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.get=function(o,t){return this.has(o)?this._array[Er(this,o)]:t},e.prototype.__iterate=function(o,t){for(var l=this._array,n=l.length,i=0;i!==n;){var s=t?n-++i:i++;if(o(l[s],s,this)===!1)break}return i},e.prototype.__iterator=function(o,t){var l=this._array,n=l.length,i=0;return new Ve(function(){if(i===n)return Aa();var s=t?n-++i:i++;return sa(o,s,l[s])})},e}(tr),ui=function(a){function e(r){var o=Object.keys(r).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r):[]);this._object=r,this._keys=o,this.size=o.length}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.get=function(o,t){return t!==void 0&&!this.has(o)?t:this._object[o]},e.prototype.has=function(o){return Io.call(this._object,o)},e.prototype.__iterate=function(o,t){for(var l=this._object,n=this._keys,i=n.length,s=0;s!==i;){var u=n[t?i-++s:s++];if(o(l[u],u,this)===!1)break}return s},e.prototype.__iterator=function(o,t){var l=this._object,n=this._keys,i=n.length,s=0;return new Ve(function(){if(s===i)return Aa();var u=n[t?i-++s:s++];return sa(o,u,l[u])})},e}(xr);ui.prototype[Co]=!0;var $S=function(a){function e(r){this._collection=r,this.size=r.length||r.size}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.__iterateUncached=function(o,t){if(t)return this.cacheResult().__iterate(o,t);var l=this._collection,n=Rl(l),i=0;if(ws(n))for(var s;!(s=n.next()).done&&o(s.value,i++,this)!==!1;);return i},e.prototype.__iteratorUncached=function(o,t){if(t)return this.cacheResult().__iterator(o,t);var l=this._collection,n=Rl(l);if(!ws(n))return new Ve(Aa);var i=0;return new Ve(function(){var s=n.next();return s.done?s:sa(o,i++,s.value)})},e}(tr),Ts;function _i(){return Ts||(Ts=new Xr([]))}function pi(a){var e=ci(a);if(e)return e.fromEntrySeq();if(typeof a=="object")return new ui(a);throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: "+a)}function E_(a){var e=ci(a);if(e)return e;throw new TypeError("Expected Array or collection object of values: "+a)}function eb(a){var e=ci(a);if(e)return XS(a)?e.fromEntrySeq():QS(a)?e.toSetSeq():e;if(typeof a=="object")return new ui(a);throw new TypeError("Expected Array or collection object of values, or keyed object: "+a)}function ci(a){return N_(a)?new Xr(a):R_(a)?new $S(a):void 0}var j_="@@__IMMUTABLE_MAP__@@";function hi(a){return!!(a&&a[j_])}function F_(a){return hi(a)&&rr(a)}function vs(a){return!!(a&&typeof a.equals=="function"&&typeof a.hashCode=="function")}function Fa(a,e){if(a===e||a!==a&&e!==e)return!0;if(!a||!e)return!1;if(typeof a.valueOf=="function"&&typeof e.valueOf=="function"){if(a=a.valueOf(),e=e.valueOf(),a===e||a!==a&&e!==e)return!0;if(!a||!e)return!1}return!!(vs(a)&&vs(e)&&a.equals(e))}var jo=typeof Math.imul=="function"&&Math.imul(4294967295,2)===-2?Math.imul:function(e,r){e|=0,r|=0;var o=e&65535,t=r&65535;return o*t+((e>>>16)*t+o*(r>>>16)<<16>>>0)|0};function Un(a){return a>>>1&1073741824|a&3221225471}var ab=Object.prototype.valueOf;function Na(a){if(a==null)return Ps(a);if(typeof a.hashCode=="function")return Un(a.hashCode(a));var e=ib(a);if(e==null)return Ps(e);switch(typeof e){case"boolean":return e?1108378657:1108378656;case"number":return rb(e);case"string":return e.length>sb?ob(e):Nl(e);case"object":case"function":return nb(e);case"symbol":return tb(e);default:if(typeof e.toString=="function")return Nl(e.toString());throw new Error("Value type "+typeof e+" cannot be hashed.")}}function Ps(a){return a===null?1108378658:1108378659}function rb(a){if(a!==a||a===1/0)return 0;var e=a|0;for(e!==a&&(e^=a*4294967295);a>4294967295;)a/=4294967295,e^=a;return Un(e)}function ob(a){var e=ll[a];return e===void 0&&(e=Nl(a),nl===ub&&(nl=0,ll={}),nl++,ll[a]=e),e}function Nl(a){for(var e=0,r=0;r<a.length;r++)e=31*e+a.charCodeAt(r)|0;return Un(e)}function tb(a){var e=Ls[a];return e!==void 0||(e=W_(),Ls[a]=e),e}function nb(a){var e;if(El&&(e=jl.get(a),e!==void 0)||(e=a[qr],e!==void 0)||!Us&&(e=a.propertyIsEnumerable&&a.propertyIsEnumerable[qr],e!==void 0||(e=lb(a),e!==void 0)))return e;if(e=W_(),El)jl.set(a,e);else{if(Hs!==void 0&&Hs(a)===!1)throw new Error("Non-extensible objects are not allowed as keys.");if(Us)Object.defineProperty(a,qr,{enumerable:!1,configurable:!1,writable:!1,value:e});else if(a.propertyIsEnumerable!==void 0&&a.propertyIsEnumerable===a.constructor.prototype.propertyIsEnumerable)a.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},a.propertyIsEnumerable[qr]=e;else if(a.nodeType!==void 0)a[qr]=e;else throw new Error("Unable to set a non-enumerable property on object.")}return e}var Hs=Object.isExtensible,Us=function(){try{return Object.defineProperty({},"@",{}),!0}catch{return!1}}();function lb(a){if(a&&a.nodeType>0)switch(a.nodeType){case 1:return a.uniqueID;case 9:return a.documentElement&&a.documentElement.uniqueID}}function ib(a){return a.valueOf!==ab&&typeof a.valueOf=="function"?a.valueOf(a):a}function W_(){var a=++tl;return tl&1073741824&&(tl=0),a}var El=typeof WeakMap=="function",jl;El&&(jl=new WeakMap);var Ls=Object.create(null),tl=0,qr="__immutablehash__";typeof Symbol=="function"&&(qr=Symbol(qr));var sb=16,ub=255,nl=0,ll={},Ln=function(a){function e(r,o){this._iter=r,this._useKeys=o,this.size=r.size}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.get=function(o,t){return this._iter.get(o,t)},e.prototype.has=function(o){return this._iter.has(o)},e.prototype.valueSeq=function(){return this._iter.valueSeq()},e.prototype.reverse=function(){var o=this,t=fi(this,!0);return this._useKeys||(t.valueSeq=function(){return o._iter.toSeq().reverse()}),t},e.prototype.map=function(o,t){var l=this,n=q_(this,o,t);return this._useKeys||(n.valueSeq=function(){return l._iter.toSeq().map(o,t)}),n},e.prototype.__iterate=function(o,t){var l=this;return this._iter.__iterate(function(n,i){return o(n,i,l)},t)},e.prototype.__iterator=function(o,t){return this._iter.__iterator(o,t)},e}(xr);Ln.prototype[Co]=!0;var x_=function(a){function e(r){this._iter=r,this.size=r.size}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.includes=function(o){return this._iter.includes(o)},e.prototype.__iterate=function(o,t){var l=this,n=0;return t&&yo(this),this._iter.__iterate(function(i){return o(i,t?l.size-++n:n++,l)},t)},e.prototype.__iterator=function(o,t){var l=this,n=this._iter.__iterator(or,t),i=0;return t&&yo(this),new Ve(function(){var s=n.next();return s.done?s:sa(o,t?l.size-++i:i++,s.value,s)})},e}(tr),D_=function(a){function e(r){this._iter=r,this.size=r.size}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.has=function(o){return this._iter.includes(o)},e.prototype.__iterate=function(o,t){var l=this;return this._iter.__iterate(function(n){return o(n,n,l)},t)},e.prototype.__iterator=function(o,t){var l=this._iter.__iterator(or,t);return new Ve(function(){var n=l.next();return n.done?n:sa(o,n.value,n.value,n)})},e}(Go),z_=function(a){function e(r){this._iter=r,this.size=r.size}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.entrySeq=function(){return this._iter.toSeq()},e.prototype.__iterate=function(o,t){var l=this;return this._iter.__iterate(function(n){if(n){Is(n);var i=Ga(n);return o(i?n.get(1):n[1],i?n.get(0):n[0],l)}},t)},e.prototype.__iterator=function(o,t){var l=this._iter.__iterator(or,t);return new Ve(function(){for(;;){var n=l.next();if(n.done)return n;var i=n.value;if(i){Is(i);var s=Ga(i);return sa(o,s?i.get(0):i[0],s?i.get(1):i[1],n)}}})},e}(xr);x_.prototype.cacheResult=Ln.prototype.cacheResult=D_.prototype.cacheResult=z_.prototype.cacheResult=ki;function V_(a){var e=hr(a);return e._iter=a,e.size=a.size,e.flip=function(){return a},e.reverse=function(){var r=a.reverse.apply(this);return r.flip=function(){return a.reverse()},r},e.has=function(r){return a.includes(r)},e.includes=function(r){return a.has(r)},e.cacheResult=ki,e.__iterateUncached=function(r,o){var t=this;return a.__iterate(function(l,n){return r(n,l,t)!==!1},o)},e.__iteratorUncached=function(r,o){if(r===Ja){var t=a.__iterator(r,o);return new Ve(function(){var l=t.next();if(!l.done){var n=l.value[0];l.value[0]=l.value[1],l.value[1]=n}return l})}return a.__iterator(r===or?St:or,o)},e}function q_(a,e,r){var o=hr(a);return o.size=a.size,o.has=function(t){return a.has(t)},o.get=function(t,l){var n=a.get(t,je);return n===je?l:e.call(r,n,t,a)},o.__iterateUncached=function(t,l){var n=this;return a.__iterate(function(i,s,u){return t(e.call(r,i,s,u),s,n)!==!1},l)},o.__iteratorUncached=function(t,l){var n=a.__iterator(Ja,l);return new Ve(function(){var i=n.next();if(i.done)return i;var s=i.value,u=s[0];return sa(t,u,e.call(r,s[1],u,a),i)})},o}function fi(a,e){var r=this,o=hr(a);return o._iter=a,o.size=a.size,o.reverse=function(){return a},a.flip&&(o.flip=function(){var t=V_(a);return t.reverse=function(){return a.flip()},t}),o.get=function(t,l){return a.get(e?t:-1-t,l)},o.has=function(t){return a.has(e?t:-1-t)},o.includes=function(t){return a.includes(t)},o.cacheResult=ki,o.__iterate=function(t,l){var n=this,i=0;return l&&yo(a),a.__iterate(function(s,u){return t(s,e?u:l?n.size-++i:i++,n)},!l)},o.__iterator=function(t,l){var n=0;l&&yo(a);var i=a.__iterator(Ja,!l);return new Ve(function(){var s=i.next();if(s.done)return s;var u=s.value;return sa(t,e?u[0]:l?r.size-++n:n++,u[1],s)})},o}function Y_(a,e,r,o){var t=hr(a);return o&&(t.has=function(l){var n=a.get(l,je);return n!==je&&!!e.call(r,n,l,a)},t.get=function(l,n){var i=a.get(l,je);return i!==je&&e.call(r,i,l,a)?i:n}),t.__iterateUncached=function(l,n){var i=this,s=0;return a.__iterate(function(u,_,p){if(e.call(r,u,_,p))return s++,l(u,o?_:s-1,i)},n),s},t.__iteratorUncached=function(l,n){var i=a.__iterator(Ja,n),s=0;return new Ve(function(){for(;;){var u=i.next();if(u.done)return u;var _=u.value,p=_[0],c=_[1];if(e.call(r,c,p,a))return sa(l,o?p:s++,c,u)}})},t}function _b(a,e,r){var o=Bo().asMutable();return a.__iterate(function(t,l){o.update(e.call(r,t,l,a),0,function(n){return n+1})}),o.asImmutable()}function pb(a,e,r){var o=ia(a),t=(rr(a)?Za():Bo()).asMutable();a.__iterate(function(n,i){t.update(e.call(r,n,i,a),function(s){return s=s||[],s.push(o?[i,n]:n),s})});var l=mi(a);return t.map(function(n){return Qe(a,l(n))}).asImmutable()}function cb(a,e,r){var o=ia(a),t=[[],[]];a.__iterate(function(n,i){t[e.call(r,n,i,a)?1:0].push(o?[i,n]:n)});var l=mi(a);return t.map(function(n){return Qe(a,l(n))})}function di(a,e,r,o){var t=a.size;if(wn(e,r,t))return a;var l=gt(e,t),n=Tn(r,t);if(l!==l||n!==n)return di(a.toSeq().cacheResult(),e,r,o);var i=n-l,s;i===i&&(s=i<0?0:i);var u=hr(a);return u.size=s===0?s:a.size&&s||void 0,!o&&si(a)&&s>=0&&(u.get=function(_,p){return _=Er(this,_),_>=0&&_<s?a.get(_+l,p):p}),u.__iterateUncached=function(_,p){var c=this;if(s===0)return 0;if(p)return this.cacheResult().__iterate(_,p);var h=0,f=!0,d=0;return a.__iterate(function(M,b){if(!(f&&(f=h++<l)))return d++,_(M,o?b:d-1,c)!==!1&&d!==s}),d},u.__iteratorUncached=function(_,p){if(s!==0&&p)return this.cacheResult().__iterator(_,p);if(s===0)return new Ve(Aa);var c=a.__iterator(_,p),h=0,f=0;return new Ve(function(){for(;h++<l;)c.next();if(++f>s)return Aa();var d=c.next();return o||_===or||d.done?d:_===St?sa(_,f-1,void 0,d):sa(_,f-1,d.value[1],d)})},u}function hb(a,e,r){var o=hr(a);return o.__iterateUncached=function(t,l){var n=this;if(l)return this.cacheResult().__iterate(t,l);var i=0;return a.__iterate(function(s,u,_){return e.call(r,s,u,_)&&++i&&t(s,u,n)}),i},o.__iteratorUncached=function(t,l){var n=this;if(l)return this.cacheResult().__iterator(t,l);var i=a.__iterator(Ja,l),s=!0;return new Ve(function(){if(!s)return Aa();var u=i.next();if(u.done)return u;var _=u.value,p=_[0],c=_[1];return e.call(r,c,p,n)?t===Ja?u:sa(t,p,c,u):(s=!1,Aa())})},o}function K_(a,e,r,o){var t=hr(a);return t.__iterateUncached=function(l,n){var i=this;if(n)return this.cacheResult().__iterate(l,n);var s=!0,u=0;return a.__iterate(function(_,p,c){if(!(s&&(s=e.call(r,_,p,c))))return u++,l(_,o?p:u-1,i)}),u},t.__iteratorUncached=function(l,n){var i=this;if(n)return this.cacheResult().__iterator(l,n);var s=a.__iterator(Ja,n),u=!0,_=0;return new Ve(function(){var p,c,h;do{if(p=s.next(),p.done)return o||l===or?p:l===St?sa(l,_++,void 0,p):sa(l,_++,p.value[1],p);var f=p.value;c=f[0],h=f[1],u&&(u=e.call(r,h,c,i))}while(u);return l===Ja?p:sa(l,c,h,p)})},t}function fb(a,e){var r=ia(a),o=[a].concat(e).map(function(n){return Ga(n)?r&&(n=Xa(n)):n=r?pi(n):E_(Array.isArray(n)?n:[n]),n}).filter(function(n){return n.size!==0});if(o.length===0)return a;if(o.length===1){var t=o[0];if(t===a||r&&ia(t)||Ca(a)&&Ca(t))return t}var l=new Xr(o);return r?l=l.toKeyedSeq():Ca(a)||(l=l.toSetSeq()),l=l.flatten(!0),l.size=o.reduce(function(n,i){if(n!==void 0){var s=i.size;if(s!==void 0)return n+s}},0),l}function J_(a,e,r){var o=hr(a);return o.__iterateUncached=function(t,l){if(l)return this.cacheResult().__iterate(t,l);var n=0,i=!1;function s(u,_){u.__iterate(function(p,c){return(!e||_<e)&&Ga(p)?s(p,_+1):(n++,t(p,r?c:n-1,o)===!1&&(i=!0)),!i},l)}return s(a,0),n},o.__iteratorUncached=function(t,l){if(l)return this.cacheResult().__iterator(t,l);var n=a.__iterator(t,l),i=[],s=0;return new Ve(function(){for(;n;){var u=n.next();if(u.done!==!1){n=i.pop();continue}var _=u.value;if(t===Ja&&(_=_[1]),(!e||i.length<e)&&Ga(_))i.push(n),n=_.__iterator(t,l);else return r?u:sa(t,s++,_,u)}return Aa()})},o}function db(a,e,r){var o=mi(a);return a.toSeq().map(function(t,l){return o(e.call(r,t,l,a))}).flatten(!0)}function mb(a,e){var r=hr(a);return r.size=a.size&&a.size*2-1,r.__iterateUncached=function(o,t){var l=this,n=0;return a.__iterate(function(i){return(!n||o(e,n++,l)!==!1)&&o(i,n++,l)!==!1},t),n},r.__iteratorUncached=function(o,t){var l=a.__iterator(or,t),n=0,i;return new Ve(function(){return(!i||n%2)&&(i=l.next(),i.done)?i:n%2?sa(o,n++,e):sa(o,n++,i.value,i)})},r}function go(a,e,r){e||(e=Z_);var o=ia(a),t=0,l=a.toSeq().map(function(n,i){return[i,n,t++,r?r(n,i,a):n]}).valueSeq().toArray();return l.sort(function(n,i){return e(n[3],i[3])||n[2]-i[2]}).forEach(o?function(n,i){l[i].length=2}:function(n,i){l[i]=n[1]}),o?xr(l):Ca(a)?tr(l):Go(l)}function Bt(a,e,r){if(e||(e=Z_),r){var o=a.toSeq().map(function(t,l){return[t,r(t,l,a)]}).reduce(function(t,l){return Cs(e,t[1],l[1])?l:t});return o&&o[0]}return a.reduce(function(t,l){return Cs(e,t,l)?l:t})}function Cs(a,e,r){var o=a(r,e);return o===0&&r!==e&&(r==null||r!==r)||o>0}function Ot(a,e,r,o){var t=hr(a),l=new Xr(r).map(function(n){return n.size});return t.size=o?l.max():l.min(),t.__iterate=function(n,i){for(var s=this.__iterator(or,i),u,_=0;!(u=s.next()).done&&n(u.value,_++,this)!==!1;);return _},t.__iteratorUncached=function(n,i){var s=r.map(function(p){return p=ha(p),Rl(i?p.reverse():p)}),u=0,_=!1;return new Ve(function(){var p;return _||(p=s.map(function(c){return c.next()}),_=o?p.every(function(c){return c.done}):p.some(function(c){return c.done})),_?Aa():sa(n,u++,e.apply(null,p.map(function(c){return c.value})))})},t}function Qe(a,e){return a===e?a:si(a)?e:a.constructor(e)}function Is(a){if(a!==Object(a))throw new TypeError("Expected [K, V] tuple: "+a)}function mi(a){return ia(a)?Xa:Ca(a)?$r:Uo}function hr(a){return Object.create((ia(a)?xr:Ca(a)?tr:Go).prototype)}function ki(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):Da.prototype.cacheResult.call(this)}function Z_(a,e){return a===void 0&&e===void 0?0:a===void 0?1:e===void 0?-1:a>e?1:a<e?-1:0}function nr(a,e){e=e||0;for(var r=Math.max(0,a.length-e),o=new Array(r),t=0;t<r;t++)o[t]=a[t+e];return o}function yi(a,e){if(!a)throw new Error(e)}function Ea(a){yi(a!==1/0,"Cannot perform this action with an infinite size.")}function X_(a){if(N_(a)&&typeof a!="string")return a;if(rr(a))return a.toArray();throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: "+a)}var kb=Object.prototype.toString;function yb(a){if(!a||typeof a!="object"||kb.call(a)!=="[object Object]")return!1;var e=Object.getPrototypeOf(a);if(e===null)return!0;for(var r=e,o=Object.getPrototypeOf(e);o!==null;)r=o,o=Object.getPrototypeOf(r);return r===e}function jr(a){return typeof a=="object"&&(cr(a)||Array.isArray(a)||yb(a))}function it(a){try{return typeof a=="string"?JSON.stringify(a):String(a)}catch{return JSON.stringify(a)}}function gb(a,e){return cr(a)?a.has(e):jr(a)&&Io.call(a,e)}function Q_(a,e,r){return cr(a)?a.get(e,r):gb(a,e)?typeof a.get=="function"?a.get(e):a[e]:r}function hn(a){if(Array.isArray(a))return nr(a);var e={};for(var r in a)Io.call(a,r)&&(e[r]=a[r]);return e}function Sb(a,e){if(!jr(a))throw new TypeError("Cannot update non-data-structure value: "+a);if(cr(a)){if(!a.remove)throw new TypeError("Cannot update immutable value without .remove() method: "+a);return a.remove(e)}if(!Io.call(a,e))return a;var r=hn(a);return Array.isArray(r)?r.splice(e,1):delete r[e],r}function bb(a,e,r){if(!jr(a))throw new TypeError("Cannot update non-data-structure value: "+a);if(cr(a)){if(!a.set)throw new TypeError("Cannot update immutable value without .set() method: "+a);return a.set(e,r)}if(Io.call(a,e)&&r===a[e])return a;var o=hn(a);return o[e]=r,o}function Ao(a,e,r,o){o||(o=r,r=void 0);var t=$_(cr(a),a,X_(e),0,r,o);return t===je?r:t}function $_(a,e,r,o,t,l){var n=e===je;if(o===r.length){var i=n?t:e,s=l(i);return s===i?e:s}if(!n&&!jr(e))throw new TypeError("Cannot update within non-data-structure value in path ["+r.slice(0,o).map(it)+"]: "+e);var u=r[o],_=n?je:Q_(e,u,je),p=$_(_===je?a:cr(_),_,r,o+1,t,l);return p===_?e:p===je?Sb(e,u):bb(n?a?Qa():{}:e,u,p)}function Mb(a,e,r){return Ao(a,e,je,function(){return r})}function gi(a,e){return Mb(this,a,e)}function wb(a,e){return Ao(a,e,function(){return je})}function Si(a){return wb(this,a)}function ep(a,e,r,o){return Ao(a,[e],r,o)}function bi(a,e,r){return arguments.length===1?a(this):ep(this,a,e,r)}function Mi(a,e,r){return Ao(this,a,e,r)}function ap(){for(var a=[],e=arguments.length;e--;)a[e]=arguments[e];return op(this,a)}function rp(a){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(typeof a!="function")throw new TypeError("Invalid merger function: "+a);return op(this,e,a)}function op(a,e,r){for(var o=[],t=0;t<e.length;t++){var l=Xa(e[t]);l.size!==0&&o.push(l)}return o.length===0?a:a.toSeq().size===0&&!a.__ownerID&&o.length===1?a.constructor(o[0]):a.withMutations(function(n){for(var i=r?function(u,_){ep(n,_,je,function(p){return p===je?u:r(p,u,_)})}:function(u,_){n.set(_,u)},s=0;s<o.length;s++)o[s].forEach(i)})}function wi(a,e,r){return Ti(a,e,Tb(r))}function Ti(a,e,r){if(!jr(a))throw new TypeError("Cannot merge into non-data-structure value: "+a);if(cr(a))return typeof r=="function"&&a.mergeWith?a.mergeWith.apply(a,[r].concat(e)):a.merge?a.merge.apply(a,e):a.concat.apply(a,e);for(var o=Array.isArray(a),t=a,l=o?$r:Xa,n=o?function(s){t===a&&(t=hn(t)),t.push(s)}:function(s,u){var _=Io.call(t,u),p=_&&r?r(t[u],s,u):s;(!_||p!==t[u])&&(t===a&&(t=hn(t)),t[u]=p)},i=0;i<e.length;i++)l(e[i]).forEach(n);return t}function Tb(a){function e(r,o,t){return jr(r)&&jr(o)&&vb(r,o)?Ti(r,[o],e):a?a(r,o,t):o}return e}function vb(a,e){var r=Da(a),o=Da(e);return Ca(r)===Ca(o)&&ia(r)===ia(o)}function tp(){for(var a=[],e=arguments.length;e--;)a[e]=arguments[e];return wi(this,a)}function np(a){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return wi(this,e,a)}function vi(a){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return Ao(this,a,Qa(),function(o){return Ti(o,e)})}function Pi(a){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return Ao(this,a,Qa(),function(o){return wi(o,e)})}function bt(a){var e=this.asMutable();return a(e),e.wasAltered()?e.__ensureOwner(this.__ownerID):this}function Mt(){return this.__ownerID?this:this.__ensureOwner(new ii)}function wt(){return this.__ensureOwner()}function Hi(){return this.__altered}var Bo=function(a){function e(r){return r==null?Qa():hi(r)&&!rr(r)?r:Qa().withMutations(function(o){var t=a(r);Ea(t.size),t.forEach(function(l,n){return o.set(n,l)})})}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.of=function(){for(var o=[],t=arguments.length;t--;)o[t]=arguments[t];return Qa().withMutations(function(l){for(var n=0;n<o.length;n+=2){if(n+1>=o.length)throw new Error("Missing value for key: "+o[n]);l.set(o[n],o[n+1])}})},e.prototype.toString=function(){return this.__toString("Map {","}")},e.prototype.get=function(o,t){return this._root?this._root.get(0,void 0,o,t):t},e.prototype.set=function(o,t){return Bs(this,o,t)},e.prototype.remove=function(o){return Bs(this,o,je)},e.prototype.deleteAll=function(o){var t=ha(o);return t.size===0?this:this.withMutations(function(l){t.forEach(function(n){return l.remove(n)})})},e.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):Qa()},e.prototype.sort=function(o){return Za(go(this,o))},e.prototype.sortBy=function(o,t){return Za(go(this,t,o))},e.prototype.map=function(o,t){var l=this;return this.withMutations(function(n){n.forEach(function(i,s){n.set(s,o.call(t,i,s,l))})})},e.prototype.__iterator=function(o,t){return new Pb(this,o,t)},e.prototype.__iterate=function(o,t){var l=this,n=0;return this._root&&this._root.iterate(function(i){return n++,o(i[1],i[0],l)},t),n},e.prototype.__ensureOwner=function(o){return o===this.__ownerID?this:o?Ui(this.size,this._root,o,this.__hash):this.size===0?Qa():(this.__ownerID=o,this.__altered=!1,this)},e}(Xa);Bo.isMap=hi;var ta=Bo.prototype;ta[j_]=!0;ta[yt]=ta.remove;ta.removeAll=ta.deleteAll;ta.setIn=gi;ta.removeIn=ta.deleteIn=Si;ta.update=bi;ta.updateIn=Mi;ta.merge=ta.concat=ap;ta.mergeWith=rp;ta.mergeDeep=tp;ta.mergeDeepWith=np;ta.mergeIn=vi;ta.mergeDeepIn=Pi;ta.withMutations=bt;ta.wasAltered=Hi;ta.asImmutable=wt;ta["@@transducer/init"]=ta.asMutable=Mt;ta["@@transducer/step"]=function(a,e){return a.set(e[0],e[1])};ta["@@transducer/result"]=function(a){return a.asImmutable()};var st=function(e,r){this.ownerID=e,this.entries=r};st.prototype.get=function(e,r,o,t){for(var l=this.entries,n=0,i=l.length;n<i;n++)if(Fa(o,l[n][0]))return l[n][1];return t};st.prototype.update=function(e,r,o,t,l,n,i){for(var s=l===je,u=this.entries,_=0,p=u.length;_<p&&!Fa(t,u[_][0]);_++);var c=_<p;if(c?u[_][1]===l:s)return this;if(Va(i),(s||!c)&&Va(n),!(s&&u.length===1)){if(!c&&!s&&u.length>=Gb)return Hb(e,u,t,l);var h=e&&e===this.ownerID,f=h?u:nr(u);return c?s?_===p-1?f.pop():f[_]=f.pop():f[_]=[t,l]:f.push([t,l]),h?(this.entries=f,this):new st(e,f)}};var So=function(e,r,o){this.ownerID=e,this.bitmap=r,this.nodes=o};So.prototype.get=function(e,r,o,t){r===void 0&&(r=Na(o));var l=1<<((e===0?r:r>>>e)&Ta),n=this.bitmap;return n&l?this.nodes[lp(n&l-1)].get(e+ra,r,o,t):t};So.prototype.update=function(e,r,o,t,l,n,i){o===void 0&&(o=Na(t));var s=(r===0?o:o>>>r)&Ta,u=1<<s,_=this.bitmap,p=(_&u)!==0;if(!p&&l===je)return this;var c=lp(_&u-1),h=this.nodes,f=p?h[c]:void 0,d=Li(f,e,r+ra,o,t,l,n,i);if(d===f)return this;if(!p&&d&&h.length>=Ab)return Lb(e,h,_,s,d);if(p&&!d&&h.length===2&&Os(h[c^1]))return h[c^1];if(p&&d&&h.length===1&&Os(d))return d;var M=e&&e===this.ownerID,b=p?d?_:_^u:_|u,T=p?d?ip(h,c,d,M):Ib(h,c,M):Cb(h,c,d,M);return M?(this.bitmap=b,this.nodes=T,this):new So(e,b,T)};var ut=function(e,r,o){this.ownerID=e,this.count=r,this.nodes=o};ut.prototype.get=function(e,r,o,t){r===void 0&&(r=Na(o));var l=(e===0?r:r>>>e)&Ta,n=this.nodes[l];return n?n.get(e+ra,r,o,t):t};ut.prototype.update=function(e,r,o,t,l,n,i){o===void 0&&(o=Na(t));var s=(r===0?o:o>>>r)&Ta,u=l===je,_=this.nodes,p=_[s];if(u&&!p)return this;var c=Li(p,e,r+ra,o,t,l,n,i);if(c===p)return this;var h=this.count;if(!p)h++;else if(!c&&(h--,h<Bb))return Ub(e,_,h,s);var f=e&&e===this.ownerID,d=ip(_,s,c,f);return f?(this.count=h,this.nodes=d,this):new ut(e,h,d)};var bo=function(e,r,o){this.ownerID=e,this.keyHash=r,this.entries=o};bo.prototype.get=function(e,r,o,t){for(var l=this.entries,n=0,i=l.length;n<i;n++)if(Fa(o,l[n][0]))return l[n][1];return t};bo.prototype.update=function(e,r,o,t,l,n,i){o===void 0&&(o=Na(t));var s=l===je;if(o!==this.keyHash)return s?this:(Va(i),Va(n),Ci(this,e,r,o,[t,l]));for(var u=this.entries,_=0,p=u.length;_<p&&!Fa(t,u[_][0]);_++);var c=_<p;if(c?u[_][1]===l:s)return this;if(Va(i),(s||!c)&&Va(n),s&&p===2)return new Tr(e,this.keyHash,u[_^1]);var h=e&&e===this.ownerID,f=h?u:nr(u);return c?s?_===p-1?f.pop():f[_]=f.pop():f[_]=[t,l]:f.push([t,l]),h?(this.entries=f,this):new bo(e,this.keyHash,f)};var Tr=function(e,r,o){this.ownerID=e,this.keyHash=r,this.entry=o};Tr.prototype.get=function(e,r,o,t){return Fa(o,this.entry[0])?this.entry[1]:t};Tr.prototype.update=function(e,r,o,t,l,n,i){var s=l===je,u=Fa(t,this.entry[0]);if(u?l===this.entry[1]:s)return this;if(Va(i),s){Va(n);return}return u?e&&e===this.ownerID?(this.entry[1]=l,this):new Tr(e,this.keyHash,[t,l]):(Va(n),Ci(this,e,r,Na(t),[t,l]))};st.prototype.iterate=bo.prototype.iterate=function(a,e){for(var r=this.entries,o=0,t=r.length-1;o<=t;o++)if(a(r[e?t-o:o])===!1)return!1};So.prototype.iterate=ut.prototype.iterate=function(a,e){for(var r=this.nodes,o=0,t=r.length-1;o<=t;o++){var l=r[e?t-o:o];if(l&&l.iterate(a,e)===!1)return!1}};Tr.prototype.iterate=function(a,e){return a(this.entry)};var Pb=function(a){function e(r,o,t){this._type=o,this._reverse=t,this._stack=r._root&&Gs(r._root)}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.next=function(){for(var o=this._type,t=this._stack;t;){var l=t.node,n=t.index++,i=void 0;if(l.entry){if(n===0)return il(o,l.entry)}else if(l.entries){if(i=l.entries.length-1,n<=i)return il(o,l.entries[this._reverse?i-n:n])}else if(i=l.nodes.length-1,n<=i){var s=l.nodes[this._reverse?i-n:n];if(s){if(s.entry)return il(o,s.entry);t=this._stack=Gs(s,t)}continue}t=this._stack=this._stack.__prev}return Aa()},e}(Ve);function il(a,e){return sa(a,e[0],e[1])}function Gs(a,e){return{node:a,index:0,__prev:e}}function Ui(a,e,r,o){var t=Object.create(ta);return t.size=a,t._root=e,t.__ownerID=r,t.__hash=o,t.__altered=!1,t}var As;function Qa(){return As||(As=Ui(0))}function Bs(a,e,r){var o,t;if(a._root){var l=Bl(),n=Bl();if(o=Li(a._root,a.__ownerID,0,void 0,e,r,l,n),!n.value)return a;t=a.size+(l.value?r===je?-1:1:0)}else{if(r===je)return a;t=1,o=new st(a.__ownerID,[[e,r]])}return a.__ownerID?(a.size=t,a._root=o,a.__hash=void 0,a.__altered=!0,a):o?Ui(t,o):Qa()}function Li(a,e,r,o,t,l,n,i){return a?a.update(e,r,o,t,l,n,i):l===je?a:(Va(i),Va(n),new Tr(e,o,[t,l]))}function Os(a){return a.constructor===Tr||a.constructor===bo}function Ci(a,e,r,o,t){if(a.keyHash===o)return new bo(e,o,[a.entry,t]);var l=(r===0?a.keyHash:a.keyHash>>>r)&Ta,n=(r===0?o:o>>>r)&Ta,i,s=l===n?[Ci(a,e,r+ra,o,t)]:(i=new Tr(e,o,t),l<n?[a,i]:[i,a]);return new So(e,1<<l|1<<n,s)}function Hb(a,e,r,o){a||(a=new ii);for(var t=new Tr(a,Na(r),[r,o]),l=0;l<e.length;l++){var n=e[l];t=t.update(a,0,void 0,n[0],n[1])}return t}function Ub(a,e,r,o){for(var t=0,l=0,n=new Array(r),i=0,s=1,u=e.length;i<u;i++,s<<=1){var _=e[i];_!==void 0&&i!==o&&(t|=s,n[l++]=_)}return new So(a,t,n)}function Lb(a,e,r,o,t){for(var l=0,n=new Array(za),i=0;r!==0;i++,r>>>=1)n[i]=r&1?e[l++]:void 0;return n[o]=t,new ut(a,l+1,n)}function lp(a){return a-=a>>1&1431655765,a=(a&858993459)+(a>>2&858993459),a=a+(a>>4)&252645135,a+=a>>8,a+=a>>16,a&127}function ip(a,e,r,o){var t=o?a:nr(a);return t[e]=r,t}function Cb(a,e,r,o){var t=a.length+1;if(o&&e+1===t)return a[e]=r,a;for(var l=new Array(t),n=0,i=0;i<t;i++)i===e?(l[i]=r,n=-1):l[i]=a[i+n];return l}function Ib(a,e,r){var o=a.length-1;if(r&&e===o)return a.pop(),a;for(var t=new Array(o),l=0,n=0;n<o;n++)n===e&&(l=1),t[n]=a[n+l];return t}var Gb=za/4,Ab=za/2,Bb=za/4,sp="@@__IMMUTABLE_LIST__@@";function up(a){return!!(a&&a[sp])}var Cn=function(a){function e(r){var o=Yt();if(r==null)return o;if(up(r))return r;var t=a(r),l=t.size;return l===0?o:(Ea(l),l>0&&l<za?_t(0,l,ra,null,new Rr(t.toArray())):o.withMutations(function(n){n.setSize(l),t.forEach(function(i,s){return n.set(s,i)})}))}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.of=function(){return this(arguments)},e.prototype.toString=function(){return this.__toString("List [","]")},e.prototype.get=function(o,t){if(o=Er(this,o),o>=0&&o<this.size){o+=this._origin;var l=_p(this,o);return l&&l.array[o&Ta]}return t},e.prototype.set=function(o,t){return Ob(this,o,t)},e.prototype.remove=function(o){return this.has(o)?o===0?this.shift():o===this.size-1?this.pop():this.splice(o,1):this},e.prototype.insert=function(o,t){return this.splice(o,0,t)},e.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=ra,this._root=this._tail=this.__hash=void 0,this.__altered=!0,this):Yt()},e.prototype.push=function(){var o=arguments,t=this.size;return this.withMutations(function(l){Lr(l,0,t+o.length);for(var n=0;n<o.length;n++)l.set(t+n,o[n])})},e.prototype.pop=function(){return Lr(this,0,-1)},e.prototype.unshift=function(){var o=arguments;return this.withMutations(function(t){Lr(t,-o.length);for(var l=0;l<o.length;l++)t.set(l,o[l])})},e.prototype.shift=function(){return Lr(this,1)},e.prototype.concat=function(){for(var o=arguments,t=[],l=0;l<arguments.length;l++){var n=o[l],i=a(typeof n!="string"&&R_(n)?n:[n]);i.size!==0&&t.push(i)}return t.length===0?this:this.size===0&&!this.__ownerID&&t.length===1?this.constructor(t[0]):this.withMutations(function(s){t.forEach(function(u){return u.forEach(function(_){return s.push(_)})})})},e.prototype.setSize=function(o){return Lr(this,0,o)},e.prototype.map=function(o,t){var l=this;return this.withMutations(function(n){for(var i=0;i<l.size;i++)n.set(i,o.call(t,n.get(i),i,l))})},e.prototype.slice=function(o,t){var l=this.size;return wn(o,t,l)?this:Lr(this,gt(o,l),Tn(t,l))},e.prototype.__iterator=function(o,t){var l=t?this.size:0,n=Rs(this,t);return new Ve(function(){var i=n();return i===Xo?Aa():sa(o,t?--l:l++,i)})},e.prototype.__iterate=function(o,t){for(var l=t?this.size:0,n=Rs(this,t),i;(i=n())!==Xo&&o(i,t?--l:l++,this)!==!1;);return l},e.prototype.__ensureOwner=function(o){return o===this.__ownerID?this:o?_t(this._origin,this._capacity,this._level,this._root,this._tail,o,this.__hash):this.size===0?Yt():(this.__ownerID=o,this.__altered=!1,this)},e}($r);Cn.isList=up;var fa=Cn.prototype;fa[sp]=!0;fa[yt]=fa.remove;fa.merge=fa.concat;fa.setIn=gi;fa.deleteIn=fa.removeIn=Si;fa.update=bi;fa.updateIn=Mi;fa.mergeIn=vi;fa.mergeDeepIn=Pi;fa.withMutations=bt;fa.wasAltered=Hi;fa.asImmutable=wt;fa["@@transducer/init"]=fa.asMutable=Mt;fa["@@transducer/step"]=function(a,e){return a.push(e)};fa["@@transducer/result"]=function(a){return a.asImmutable()};var Rr=function(e,r){this.array=e,this.ownerID=r};Rr.prototype.removeBefore=function(e,r,o){if(o===r?1<<r:this.array.length===0)return this;var t=o>>>r&Ta;if(t>=this.array.length)return new Rr([],e);var l=t===0,n;if(r>0){var i=this.array[t];if(n=i&&i.removeBefore(e,r-ra,o),n===i&&l)return this}if(l&&!n)return this;var s=Mo(this,e);if(!l)for(var u=0;u<t;u++)s.array[u]=void 0;return n&&(s.array[t]=n),s};Rr.prototype.removeAfter=function(e,r,o){if(o===(r?1<<r:0)||this.array.length===0)return this;var t=o-1>>>r&Ta;if(t>=this.array.length)return this;var l;if(r>0){var n=this.array[t];if(l=n&&n.removeAfter(e,r-ra,o),l===n&&t===this.array.length-1)return this}var i=Mo(this,e);return i.array.splice(t+1),l&&(i.array[t]=l),i};var Xo={};function Rs(a,e){var r=a._origin,o=a._capacity,t=pt(o),l=a._tail;return n(a._root,a._level,0);function n(u,_,p){return _===0?i(u,p):s(u,_,p)}function i(u,_){var p=_===t?l&&l.array:u&&u.array,c=_>r?0:r-_,h=o-_;return h>za&&(h=za),function(){if(c===h)return Xo;var f=e?--h:c++;return p&&p[f]}}function s(u,_,p){var c,h=u&&u.array,f=p>r?0:r-p>>_,d=(o-p>>_)+1;return d>za&&(d=za),function(){for(;;){if(c){var M=c();if(M!==Xo)return M;c=null}if(f===d)return Xo;var b=e?--d:f++;c=n(h&&h[b],_-ra,p+(b<<_))}}}}function _t(a,e,r,o,t,l,n){var i=Object.create(fa);return i.size=e-a,i._origin=a,i._capacity=e,i._level=r,i._root=o,i._tail=t,i.__ownerID=l,i.__hash=n,i.__altered=!1,i}var Ns;function Yt(){return Ns||(Ns=_t(0,0,ra))}function Ob(a,e,r){if(e=Er(a,e),e!==e)return a;if(e>=a.size||e<0)return a.withMutations(function(n){e<0?Lr(n,e).set(0,r):Lr(n,0,e+1).set(e,r)});e+=a._origin;var o=a._tail,t=a._root,l=Bl();return e>=pt(a._capacity)?o=Fl(o,a.__ownerID,0,e,r,l):t=Fl(t,a.__ownerID,a._level,e,r,l),l.value?a.__ownerID?(a._root=t,a._tail=o,a.__hash=void 0,a.__altered=!0,a):_t(a._origin,a._capacity,a._level,t,o):a}function Fl(a,e,r,o,t,l){var n=o>>>r&Ta,i=a&&n<a.array.length;if(!i&&t===void 0)return a;var s;if(r>0){var u=a&&a.array[n],_=Fl(u,e,r-ra,o,t,l);return _===u?a:(s=Mo(a,e),s.array[n]=_,s)}return i&&a.array[n]===t?a:(l&&Va(l),s=Mo(a,e),t===void 0&&n===s.array.length-1?s.array.pop():s.array[n]=t,s)}function Mo(a,e){return e&&a&&e===a.ownerID?a:new Rr(a?a.array.slice():[],e)}function _p(a,e){if(e>=pt(a._capacity))return a._tail;if(e<1<<a._level+ra){for(var r=a._root,o=a._level;r&&o>0;)r=r.array[e>>>o&Ta],o-=ra;return r}}function Lr(a,e,r){e!==void 0&&(e|=0),r!==void 0&&(r|=0);var o=a.__ownerID||new ii,t=a._origin,l=a._capacity,n=t+e,i=r===void 0?l:r<0?l+r:t+r;if(n===t&&i===l)return a;if(n>=i)return a.clear();for(var s=a._level,u=a._root,_=0;n+_<0;)u=new Rr(u&&u.array.length?[void 0,u]:[],o),s+=ra,_+=1<<s;_&&(n+=_,t+=_,i+=_,l+=_);for(var p=pt(l),c=pt(i);c>=1<<s+ra;)u=new Rr(u&&u.array.length?[u]:[],o),s+=ra;var h=a._tail,f=c<p?_p(a,i-1):c>p?new Rr([],o):h;if(h&&c>p&&n<l&&h.array.length){u=Mo(u,o);for(var d=u,M=s;M>ra;M-=ra){var b=p>>>M&Ta;d=d.array[b]=Mo(d.array[b],o)}d.array[p>>>ra&Ta]=h}if(i<l&&(f=f&&f.removeAfter(o,0,i)),n>=c)n-=c,i-=c,s=ra,u=null,f=f&&f.removeBefore(o,0,n);else if(n>t||c<p){for(_=0;u;){var T=n>>>s&Ta;if(T!==c>>>s&Ta)break;T&&(_+=(1<<s)*T),s-=ra,u=u.array[T]}u&&n>t&&(u=u.removeBefore(o,s,n-_)),u&&c<p&&(u=u.removeAfter(o,s,c-_)),_&&(n-=_,i-=_)}return a.__ownerID?(a.size=i-n,a._origin=n,a._capacity=i,a._level=s,a._root=u,a._tail=f,a.__hash=void 0,a.__altered=!0,a):_t(n,i,s,u,f)}function pt(a){return a<za?0:a-1>>>ra<<ra}var Za=function(a){function e(r){return r==null?Wo():F_(r)?r:Wo().withMutations(function(o){var t=Xa(r);Ea(t.size),t.forEach(function(l,n){return o.set(n,l)})})}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.of=function(){return this(arguments)},e.prototype.toString=function(){return this.__toString("OrderedMap {","}")},e.prototype.get=function(o,t){var l=this._map.get(o);return l!==void 0?this._list.get(l)[1]:t},e.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this.__altered=!0,this):Wo()},e.prototype.set=function(o,t){return js(this,o,t)},e.prototype.remove=function(o){return js(this,o,je)},e.prototype.__iterate=function(o,t){var l=this;return this._list.__iterate(function(n){return n&&o(n[1],n[0],l)},t)},e.prototype.__iterator=function(o,t){return this._list.fromEntrySeq().__iterator(o,t)},e.prototype.__ensureOwner=function(o){if(o===this.__ownerID)return this;var t=this._map.__ensureOwner(o),l=this._list.__ensureOwner(o);return o?Ii(t,l,o,this.__hash):this.size===0?Wo():(this.__ownerID=o,this.__altered=!1,this._map=t,this._list=l,this)},e}(Bo);Za.isOrderedMap=F_;Za.prototype[Co]=!0;Za.prototype[yt]=Za.prototype.remove;function Ii(a,e,r,o){var t=Object.create(Za.prototype);return t.size=a?a.size:0,t._map=a,t._list=e,t.__ownerID=r,t.__hash=o,t.__altered=!1,t}var Es;function Wo(){return Es||(Es=Ii(Qa(),Yt()))}function js(a,e,r){var o=a._map,t=a._list,l=o.get(e),n=l!==void 0,i,s;if(r===je){if(!n)return a;t.size>=za&&t.size>=o.size*2?(s=t.filter(function(u,_){return u!==void 0&&l!==_}),i=s.toKeyedSeq().map(function(u){return u[0]}).flip().toMap(),a.__ownerID&&(i.__ownerID=s.__ownerID=a.__ownerID)):(i=o.remove(e),s=l===t.size-1?t.pop():t.set(l,void 0))}else if(n){if(r===t.get(l)[1])return a;i=o,s=t.set(l,[e,r])}else i=o.set(e,t.size),s=t.set(t.size,[e,r]);return a.__ownerID?(a.size=i.size,a._map=i,a._list=s,a.__hash=void 0,a.__altered=!0,a):Ii(i,s)}var pp="@@__IMMUTABLE_STACK__@@";function Wl(a){return!!(a&&a[pp])}var Gi=function(a){function e(r){return r==null?Rt():Wl(r)?r:Rt().pushAll(r)}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.of=function(){return this(arguments)},e.prototype.toString=function(){return this.__toString("Stack [","]")},e.prototype.get=function(o,t){var l=this._head;for(o=Er(this,o);l&&o--;)l=l.next;return l?l.value:t},e.prototype.peek=function(){return this._head&&this._head.value},e.prototype.push=function(){var o=arguments;if(arguments.length===0)return this;for(var t=this.size+arguments.length,l=this._head,n=arguments.length-1;n>=0;n--)l={value:o[n],next:l};return this.__ownerID?(this.size=t,this._head=l,this.__hash=void 0,this.__altered=!0,this):xo(t,l)},e.prototype.pushAll=function(o){if(o=a(o),o.size===0)return this;if(this.size===0&&Wl(o))return o;Ea(o.size);var t=this.size,l=this._head;return o.__iterate(function(n){t++,l={value:n,next:l}},!0),this.__ownerID?(this.size=t,this._head=l,this.__hash=void 0,this.__altered=!0,this):xo(t,l)},e.prototype.pop=function(){return this.slice(1)},e.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):Rt()},e.prototype.slice=function(o,t){if(wn(o,t,this.size))return this;var l=gt(o,this.size),n=Tn(t,this.size);if(n!==this.size)return a.prototype.slice.call(this,o,t);for(var i=this.size-l,s=this._head;l--;)s=s.next;return this.__ownerID?(this.size=i,this._head=s,this.__hash=void 0,this.__altered=!0,this):xo(i,s)},e.prototype.__ensureOwner=function(o){return o===this.__ownerID?this:o?xo(this.size,this._head,o,this.__hash):this.size===0?Rt():(this.__ownerID=o,this.__altered=!1,this)},e.prototype.__iterate=function(o,t){var l=this;if(t)return new Xr(this.toArray()).__iterate(function(s,u){return o(s,u,l)},t);for(var n=0,i=this._head;i&&o(i.value,n++,this)!==!1;)i=i.next;return n},e.prototype.__iterator=function(o,t){if(t)return new Xr(this.toArray()).__iterator(o,t);var l=0,n=this._head;return new Ve(function(){if(n){var i=n.value;return n=n.next,sa(o,l++,i)}return Aa()})},e}($r);Gi.isStack=Wl;var Ha=Gi.prototype;Ha[pp]=!0;Ha.shift=Ha.pop;Ha.unshift=Ha.push;Ha.unshiftAll=Ha.pushAll;Ha.withMutations=bt;Ha.wasAltered=Hi;Ha.asImmutable=wt;Ha["@@transducer/init"]=Ha.asMutable=Mt;Ha["@@transducer/step"]=function(a,e){return a.unshift(e)};Ha["@@transducer/result"]=function(a){return a.asImmutable()};function xo(a,e,r,o){var t=Object.create(Ha);return t.size=a,t._head=e,t.__ownerID=r,t.__hash=o,t.__altered=!1,t}var Fs;function Rt(){return Fs||(Fs=xo(0))}var cp="@@__IMMUTABLE_SET__@@";function Ai(a){return!!(a&&a[cp])}function hp(a){return Ai(a)&&rr(a)}function fp(a,e){if(a===e)return!0;if(!Ga(e)||a.size!==void 0&&e.size!==void 0&&a.size!==e.size||a.__hash!==void 0&&e.__hash!==void 0&&a.__hash!==e.__hash||ia(a)!==ia(e)||Ca(a)!==Ca(e)||rr(a)!==rr(e))return!1;if(a.size===0&&e.size===0)return!0;var r=!vn(a);if(rr(a)){var o=a.entries();return e.every(function(s,u){var _=o.next().value;return _&&Fa(_[1],s)&&(r||Fa(_[0],u))})&&o.next().done}var t=!1;if(a.size===void 0)if(e.size===void 0)typeof a.cacheResult=="function"&&a.cacheResult();else{t=!0;var l=a;a=e,e=l}var n=!0,i=e.__iterate(function(s,u){if(r?!a.has(s):t?!Fa(s,a.get(u,je)):!Fa(a.get(u,je),s))return n=!1,!1});return n&&a.size===i}function eo(a,e){var r=function(o){a.prototype[o]=e[o]};return Object.keys(e).forEach(r),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(e).forEach(r),a}function fn(a){if(!a||typeof a!="object")return a;if(!Ga(a)){if(!jr(a))return a;a=Da(a)}if(ia(a)){var e={};return a.__iterate(function(o,t){e[t]=fn(o)}),e}var r=[];return a.__iterate(function(o){r.push(fn(o))}),r}var In=function(a){function e(r){return r==null?Do():Ai(r)&&!rr(r)?r:Do().withMutations(function(o){var t=a(r);Ea(t.size),t.forEach(function(l){return o.add(l)})})}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.of=function(){return this(arguments)},e.fromKeys=function(o){return this(Xa(o).keySeq())},e.intersect=function(o){return o=ha(o).toArray(),o.length?Sa.intersect.apply(e(o.pop()),o):Do()},e.union=function(o){return o=ha(o).toArray(),o.length?Sa.union.apply(e(o.pop()),o):Do()},e.prototype.toString=function(){return this.__toString("Set {","}")},e.prototype.has=function(o){return this._map.has(o)},e.prototype.add=function(o){return Nt(this,this._map.set(o,o))},e.prototype.remove=function(o){return Nt(this,this._map.remove(o))},e.prototype.clear=function(){return Nt(this,this._map.clear())},e.prototype.map=function(o,t){var l=this,n=!1,i=Nt(this,this._map.mapEntries(function(s){var u=s[1],_=o.call(t,u,u,l);return _!==u&&(n=!0),[_,_]},t));return n?i:this},e.prototype.union=function(){for(var o=[],t=arguments.length;t--;)o[t]=arguments[t];return o=o.filter(function(l){return l.size!==0}),o.length===0?this:this.size===0&&!this.__ownerID&&o.length===1?this.constructor(o[0]):this.withMutations(function(l){for(var n=0;n<o.length;n++)typeof o[n]=="string"?l.add(o[n]):a(o[n]).forEach(function(i){return l.add(i)})})},e.prototype.intersect=function(){for(var o=[],t=arguments.length;t--;)o[t]=arguments[t];if(o.length===0)return this;o=o.map(function(n){return a(n)});var l=[];return this.forEach(function(n){o.every(function(i){return i.includes(n)})||l.push(n)}),this.withMutations(function(n){l.forEach(function(i){n.remove(i)})})},e.prototype.subtract=function(){for(var o=[],t=arguments.length;t--;)o[t]=arguments[t];if(o.length===0)return this;o=o.map(function(n){return a(n)});var l=[];return this.forEach(function(n){o.some(function(i){return i.includes(n)})&&l.push(n)}),this.withMutations(function(n){l.forEach(function(i){n.remove(i)})})},e.prototype.sort=function(o){return ct(go(this,o))},e.prototype.sortBy=function(o,t){return ct(go(this,t,o))},e.prototype.wasAltered=function(){return this._map.wasAltered()},e.prototype.__iterate=function(o,t){var l=this;return this._map.__iterate(function(n){return o(n,n,l)},t)},e.prototype.__iterator=function(o,t){return this._map.__iterator(o,t)},e.prototype.__ensureOwner=function(o){if(o===this.__ownerID)return this;var t=this._map.__ensureOwner(o);return o?this.__make(t,o):this.size===0?this.__empty():(this.__ownerID=o,this._map=t,this)},e}(Uo);In.isSet=Ai;var Sa=In.prototype;Sa[cp]=!0;Sa[yt]=Sa.remove;Sa.merge=Sa.concat=Sa.union;Sa.withMutations=bt;Sa.asImmutable=wt;Sa["@@transducer/init"]=Sa.asMutable=Mt;Sa["@@transducer/step"]=function(a,e){return a.add(e)};Sa["@@transducer/result"]=function(a){return a.asImmutable()};Sa.__empty=Do;Sa.__make=dp;function Nt(a,e){return a.__ownerID?(a.size=e.size,a._map=e,a):e===a._map?a:e.size===0?a.__empty():a.__make(e)}function dp(a,e){var r=Object.create(Sa);return r.size=a?a.size:0,r._map=a,r.__ownerID=e,r}var Ws;function Do(){return Ws||(Ws=dp(Qa()))}var Rb=function(a){function e(r,o,t){if(!(this instanceof e))return new e(r,o,t);if(yi(t!==0,"Cannot step a Range by 0"),r=r||0,o===void 0&&(o=1/0),t=t===void 0?1:Math.abs(t),o<r&&(t=-t),this._start=r,this._end=o,this._step=t,this.size=Math.max(0,Math.ceil((o-r)/t-1)+1),this.size===0){if(sl)return sl;sl=this}}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.size===0?"Range []":"Range [ "+this._start+"..."+this._end+(this._step!==1?" by "+this._step:"")+" ]"},e.prototype.get=function(o,t){return this.has(o)?this._start+Er(this,o)*this._step:t},e.prototype.includes=function(o){var t=(o-this._start)/this._step;return t>=0&&t<this.size&&t===Math.floor(t)},e.prototype.slice=function(o,t){return wn(o,t,this.size)?this:(o=gt(o,this.size),t=Tn(t,this.size),t<=o?new e(0,0):new e(this.get(o,this._end),this.get(t,this._end),this._step))},e.prototype.indexOf=function(o){var t=o-this._start;if(t%this._step===0){var l=t/this._step;if(l>=0&&l<this.size)return l}return-1},e.prototype.lastIndexOf=function(o){return this.indexOf(o)},e.prototype.__iterate=function(o,t){for(var l=this.size,n=this._step,i=t?this._start+(l-1)*n:this._start,s=0;s!==l&&o(i,t?l-++s:s++,this)!==!1;)i+=t?-n:n;return s},e.prototype.__iterator=function(o,t){var l=this.size,n=this._step,i=t?this._start+(l-1)*n:this._start,s=0;return new Ve(function(){if(s===l)return Aa();var u=i;return i+=t?-n:n,sa(o,t?l-++s:s++,u)})},e.prototype.equals=function(o){return o instanceof e?this._start===o._start&&this._end===o._end&&this._step===o._step:fp(this,o)},e}(tr),sl;function mp(a,e,r){for(var o=X_(e),t=0;t!==o.length;)if(a=Q_(a,o[t++],je),a===je)return r;return a}function kp(a,e){return mp(this,a,e)}function Nb(a,e){return mp(a,e,je)!==je}function Eb(a){return Nb(this,a)}function yp(){Ea(this.size);var a={};return this.__iterate(function(e,r){a[r]=e}),a}ha.isIterable=Ga;ha.isKeyed=ia;ha.isIndexed=Ca;ha.isAssociative=vn;ha.isOrdered=rr;ha.Iterator=Ve;eo(ha,{toArray:function(){Ea(this.size);var e=new Array(this.size||0),r=ia(this),o=0;return this.__iterate(function(t,l){e[o++]=r?[l,t]:t}),e},toIndexedSeq:function(){return new x_(this)},toJS:function(){return fn(this)},toKeyedSeq:function(){return new Ln(this,!0)},toMap:function(){return Bo(this.toKeyedSeq())},toObject:yp,toOrderedMap:function(){return Za(this.toKeyedSeq())},toOrderedSet:function(){return ct(ia(this)?this.valueSeq():this)},toSet:function(){return In(ia(this)?this.valueSeq():this)},toSetSeq:function(){return new D_(this)},toSeq:function(){return Ca(this)?this.toIndexedSeq():ia(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return Gi(ia(this)?this.valueSeq():this)},toList:function(){return Cn(ia(this)?this.valueSeq():this)},toString:function(){return"[Collection]"},__toString:function(e,r){return this.size===0?e+r:e+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+r},concat:function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return Qe(this,fb(this,e))},includes:function(e){return this.some(function(r){return Fa(r,e)})},entries:function(){return this.__iterator(Ja)},every:function(e,r){Ea(this.size);var o=!0;return this.__iterate(function(t,l,n){if(!e.call(r,t,l,n))return o=!1,!1}),o},filter:function(e,r){return Qe(this,Y_(this,e,r,!0))},partition:function(e,r){return cb(this,e,r)},find:function(e,r,o){var t=this.findEntry(e,r);return t?t[1]:o},forEach:function(e,r){return Ea(this.size),this.__iterate(r?e.bind(r):e)},join:function(e){Ea(this.size),e=e!==void 0?""+e:",";var r="",o=!0;return this.__iterate(function(t){o?o=!1:r+=e,r+=t!=null?t.toString():""}),r},keys:function(){return this.__iterator(St)},map:function(e,r){return Qe(this,q_(this,e,r))},reduce:function(e,r,o){return xs(this,e,r,o,arguments.length<2,!1)},reduceRight:function(e,r,o){return xs(this,e,r,o,arguments.length<2,!0)},reverse:function(){return Qe(this,fi(this,!0))},slice:function(e,r){return Qe(this,di(this,e,r,!0))},some:function(e,r){Ea(this.size);var o=!1;return this.__iterate(function(t,l,n){if(e.call(r,t,l,n))return o=!0,!1}),o},sort:function(e){return Qe(this,go(this,e))},values:function(){return this.__iterator(or)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return this.size!==void 0?this.size===0:!this.some(function(){return!0})},count:function(e,r){return yo(e?this.toSeq().filter(e,r):this)},countBy:function(e,r){return _b(this,e,r)},equals:function(e){return fp(this,e)},entrySeq:function(){var e=this;if(e._cache)return new Xr(e._cache);var r=e.toSeq().map(Fb).toIndexedSeq();return r.fromEntrySeq=function(){return e.toSeq()},r},filterNot:function(e,r){return this.filter(ul(e),r)},findEntry:function(e,r,o){var t=o;return this.__iterate(function(l,n,i){if(e.call(r,l,n,i))return t=[n,l],!1}),t},findKey:function(e,r){var o=this.findEntry(e,r);return o&&o[0]},findLast:function(e,r,o){return this.toKeyedSeq().reverse().find(e,r,o)},findLastEntry:function(e,r,o){return this.toKeyedSeq().reverse().findEntry(e,r,o)},findLastKey:function(e,r){return this.toKeyedSeq().reverse().findKey(e,r)},first:function(e){return this.find(H_,null,e)},flatMap:function(e,r){return Qe(this,db(this,e,r))},flatten:function(e){return Qe(this,J_(this,e,!0))},fromEntrySeq:function(){return new z_(this)},get:function(e,r){return this.find(function(o,t){return Fa(t,e)},void 0,r)},getIn:kp,groupBy:function(e,r){return pb(this,e,r)},has:function(e){return this.get(e,je)!==je},hasIn:Eb,isSubset:function(e){return e=typeof e.includes=="function"?e:ha(e),this.every(function(r){return e.includes(r)})},isSuperset:function(e){return e=typeof e.isSubset=="function"?e:ha(e),e.isSubset(this)},keyOf:function(e){return this.findKey(function(r){return Fa(r,e)})},keySeq:function(){return this.toSeq().map(jb).toIndexedSeq()},last:function(e){return this.toSeq().reverse().first(e)},lastKeyOf:function(e){return this.toKeyedSeq().reverse().keyOf(e)},max:function(e){return Bt(this,e)},maxBy:function(e,r){return Bt(this,r,e)},min:function(e){return Bt(this,e?Ds(e):Vs)},minBy:function(e,r){return Bt(this,r?Ds(r):Vs,e)},rest:function(){return this.slice(1)},skip:function(e){return e===0?this:this.slice(Math.max(0,e))},skipLast:function(e){return e===0?this:this.slice(0,-Math.max(0,e))},skipWhile:function(e,r){return Qe(this,K_(this,e,r,!0))},skipUntil:function(e,r){return this.skipWhile(ul(e),r)},sortBy:function(e,r){return Qe(this,go(this,r,e))},take:function(e){return this.slice(0,Math.max(0,e))},takeLast:function(e){return this.slice(-Math.max(0,e))},takeWhile:function(e,r){return Qe(this,hb(this,e,r))},takeUntil:function(e,r){return this.takeWhile(ul(e),r)},update:function(e){return e(this)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=Wb(this))}});var Ma=ha.prototype;Ma[C_]=!0;Ma[Pn]=Ma.values;Ma.toJSON=Ma.toArray;Ma.__toStringMapper=it;Ma.inspect=Ma.toSource=function(){return this.toString()};Ma.chain=Ma.flatMap;Ma.contains=Ma.includes;eo(Xa,{flip:function(){return Qe(this,V_(this))},mapEntries:function(e,r){var o=this,t=0;return Qe(this,this.toSeq().map(function(l,n){return e.call(r,[n,l],t++,o)}).fromEntrySeq())},mapKeys:function(e,r){var o=this;return Qe(this,this.toSeq().flip().map(function(t,l){return e.call(r,t,l,o)}).flip())}});var Tt=Xa.prototype;Tt[I_]=!0;Tt[Pn]=Ma.entries;Tt.toJSON=yp;Tt.__toStringMapper=function(a,e){return it(e)+": "+it(a)};eo($r,{toKeyedSeq:function(){return new Ln(this,!1)},filter:function(e,r){return Qe(this,Y_(this,e,r,!1))},findIndex:function(e,r){var o=this.findEntry(e,r);return o?o[0]:-1},indexOf:function(e){var r=this.keyOf(e);return r===void 0?-1:r},lastIndexOf:function(e){var r=this.lastKeyOf(e);return r===void 0?-1:r},reverse:function(){return Qe(this,fi(this,!1))},slice:function(e,r){return Qe(this,di(this,e,r,!1))},splice:function(e,r){var o=arguments.length;if(r=Math.max(r||0,0),o===0||o===2&&!r)return this;e=gt(e,e<0?this.count():this.size);var t=this.slice(0,e);return Qe(this,o===1?t:t.concat(nr(arguments,2),this.slice(e+r)))},findLastIndex:function(e,r){var o=this.findLastEntry(e,r);return o?o[0]:-1},first:function(e){return this.get(0,e)},flatten:function(e){return Qe(this,J_(this,e,!1))},get:function(e,r){return e=Er(this,e),e<0||this.size===1/0||this.size!==void 0&&e>this.size?r:this.find(function(o,t){return t===e},void 0,r)},has:function(e){return e=Er(this,e),e>=0&&(this.size!==void 0?this.size===1/0||e<this.size:this.indexOf(e)!==-1)},interpose:function(e){return Qe(this,mb(this,e))},interleave:function(){var e=[this].concat(nr(arguments)),r=Ot(this.toSeq(),tr.of,e),o=r.flatten(!0);return r.size&&(o.size=r.size*e.length),Qe(this,o)},keySeq:function(){return Rb(0,this.size)},last:function(e){return this.get(-1,e)},skipWhile:function(e,r){return Qe(this,K_(this,e,r,!1))},zip:function(){var e=[this].concat(nr(arguments));return Qe(this,Ot(this,zs,e))},zipAll:function(){var e=[this].concat(nr(arguments));return Qe(this,Ot(this,zs,e,!0))},zipWith:function(e){var r=nr(arguments);return r[0]=this,Qe(this,Ot(this,e,r))}});var Oo=$r.prototype;Oo[G_]=!0;Oo[Co]=!0;eo(Uo,{get:function(e,r){return this.has(e)?e:r},includes:function(e){return this.has(e)},keySeq:function(){return this.valueSeq()}});var wo=Uo.prototype;wo.has=Ma.includes;wo.contains=wo.includes;wo.keys=wo.values;eo(xr,Tt);eo(tr,Oo);eo(Go,wo);function xs(a,e,r,o,t,l){return Ea(a.size),a.__iterate(function(n,i,s){t?(t=!1,r=n):r=e.call(o,r,n,i,s)},l),r}function jb(a,e){return e}function Fb(a,e){return[e,a]}function ul(a){return function(){return!a.apply(this,arguments)}}function Ds(a){return function(){return-a.apply(this,arguments)}}function zs(){return nr(arguments)}function Vs(a,e){return a<e?1:a>e?-1:0}function Wb(a){if(a.size===1/0)return 0;var e=rr(a),r=ia(a),o=e?1:0,t=a.__iterate(r?e?function(l,n){o=31*o+qs(Na(l),Na(n))|0}:function(l,n){o=o+qs(Na(l),Na(n))|0}:e?function(l){o=31*o+Na(l)|0}:function(l){o=o+Na(l)|0});return xb(t,o)}function xb(a,e){return e=jo(e,3432918353),e=jo(e<<15|e>>>-15,461845907),e=jo(e<<13|e>>>-13,5),e=(e+3864292196|0)^a,e=jo(e^e>>>16,2246822507),e=jo(e^e>>>13,3266489909),e=Un(e^e>>>16),e}function qs(a,e){return a^e+2654435769+(a<<6)+(a>>2)|0}var ct=function(a){function e(r){return r==null?xl():hp(r)?r:xl().withMutations(function(o){var t=Uo(r);Ea(t.size),t.forEach(function(l){return o.add(l)})})}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.of=function(){return this(arguments)},e.fromKeys=function(o){return this(Xa(o).keySeq())},e.prototype.toString=function(){return this.__toString("OrderedSet {","}")},e}(In);ct.isOrderedSet=hp;var ao=ct.prototype;ao[Co]=!0;ao.zip=Oo.zip;ao.zipWith=Oo.zipWith;ao.zipAll=Oo.zipAll;ao.__empty=xl;ao.__make=gp;function gp(a,e){var r=Object.create(ao);return r.size=a?a.size:0,r._map=a,r.__ownerID=e,r}var Ys;function xl(){return Ys||(Ys=gp(Wo()))}function Db(a){if(Lo(a))throw new Error("Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.");if(cr(a))throw new Error("Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.");if(a===null||typeof a!="object")throw new Error("Can not call `Record` with a non-object as default values. Use a plain javascript object instead.")}var ka=function(e,r){var o;Db(e);var t=function(i){var s=this;if(i instanceof t)return i;if(!(this instanceof t))return new t(i);if(!o){o=!0;var u=Object.keys(e),_=l._indices={};l._name=r,l._keys=u,l._defaultValues=e;for(var p=0;p<u.length;p++){var c=u[p];_[c]=p,l[c]?typeof console=="object"&&console.warn&&console.warn("Cannot define "+Oi(this)+' with property "'+c+'" since that property name is part of the Record API.'):zb(l,c)}}return this.__ownerID=void 0,this._values=Cn().withMutations(function(h){h.setSize(s._keys.length),Xa(i).forEach(function(f,d){h.set(s._indices[d],f===s._defaultValues[d]?void 0:f)})}),this},l=t.prototype=Object.create(ea);return l.constructor=t,r&&(t.displayName=r),t};ka.prototype.toString=function(){for(var e=Oi(this)+" { ",r=this._keys,o,t=0,l=r.length;t!==l;t++)o=r[t],e+=(t?", ":"")+o+": "+it(this.get(o));return e+" }"};ka.prototype.equals=function(e){return this===e||Lo(e)&&To(this).equals(To(e))};ka.prototype.hashCode=function(){return To(this).hashCode()};ka.prototype.has=function(e){return this._indices.hasOwnProperty(e)};ka.prototype.get=function(e,r){if(!this.has(e))return r;var o=this._indices[e],t=this._values.get(o);return t===void 0?this._defaultValues[e]:t};ka.prototype.set=function(e,r){if(this.has(e)){var o=this._values.set(this._indices[e],r===this._defaultValues[e]?void 0:r);if(o!==this._values&&!this.__ownerID)return Bi(this,o)}return this};ka.prototype.remove=function(e){return this.set(e)};ka.prototype.clear=function(){var e=this._values.clear().setSize(this._keys.length);return this.__ownerID?this:Bi(this,e)};ka.prototype.wasAltered=function(){return this._values.wasAltered()};ka.prototype.toSeq=function(){return To(this)};ka.prototype.toJS=function(){return fn(this)};ka.prototype.entries=function(){return this.__iterator(Ja)};ka.prototype.__iterator=function(e,r){return To(this).__iterator(e,r)};ka.prototype.__iterate=function(e,r){return To(this).__iterate(e,r)};ka.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var r=this._values.__ensureOwner(e);return e?Bi(this,r,e):(this.__ownerID=e,this._values=r,this)};ka.isRecord=Lo;ka.getDescriptiveName=Oi;var ea=ka.prototype;ea[B_]=!0;ea[yt]=ea.remove;ea.deleteIn=ea.removeIn=Si;ea.getIn=kp;ea.hasIn=Ma.hasIn;ea.merge=ap;ea.mergeWith=rp;ea.mergeIn=vi;ea.mergeDeep=tp;ea.mergeDeepWith=np;ea.mergeDeepIn=Pi;ea.setIn=gi;ea.update=bi;ea.updateIn=Mi;ea.withMutations=bt;ea.asMutable=Mt;ea.asImmutable=wt;ea[Pn]=ea.entries;ea.toJSON=ea.toObject=Ma.toObject;ea.inspect=ea.toSource=function(){return this.toString()};function Bi(a,e,r){var o=Object.create(Object.getPrototypeOf(a));return o._values=e,o.__ownerID=r,o}function Oi(a){return a.constructor.displayName||a.constructor.name||"Record"}function To(a){return pi(a._keys.map(function(e){return[e,a.get(e)]}))}function zb(a,e){try{Object.defineProperty(a,e,{get:function(){return this.get(e)},set:function(r){yi(this.__ownerID,"Cannot set on an immutable record."),this.set(e,r)}})}catch{}}const Ar=["Head","Clothes","Shoes"];function Vb(){return{pure:new Map([...Ar.map(a=>[a,new Map])]),named:new Map}}const _l={"CommonMsg/Badge/BadgeMsg":{CatalogueLevel_Lv00:"Level 50 Catalog Reached!",CatalogueLevel_Lv01:"Level 100 Catalog Reached!",ChallengeWinStreak_Lv00:"Won 10 Straight Anarchy Battles (Series)",ChallengeWinStreak_Lv01:"Won 50 Straight Anarchy Battles (Series)",ChallengeWinStreak_Lv02:"Won 250 Straight Anarchy Battles (Series)",CoopBigRunTrophy_Lv00:"Got a Bronze Decoration in Big Run",CoopBigRunTrophy_Lv01:"Got a Silver Decoration in Big Run",CoopBigRunTrophy_Lv02:"Got a Gold Decoration in Big Run",CoopBossKillNum_Lv00:"[group=0004 type=0007 params=00 00 00 00] Splats x 10",CoopBossKillNum_Lv01:"[group=0004 type=0007 params=00 00 00 00] Splats x 100",CoopBossKillNum_Lv02:"[group=0004 type=0007 params=00 00 00 00] Splats x 1,000",CoopClearDangerRateMax:"MAX Hazard Level Cleared",CoopContestTrophy_Lv00:"Top 50% in Eggstra Work!",CoopContestTrophy_Lv01:"Top 20% in Eggstra Work!",CoopContestTrophy_Lv02:"Top 5% in Eggstra Work!",CoopGrade_Normal_Lv00:"Eggsecutive VP 200 at [group=0004 type=000e params=00 00 00 00] Reached!",CoopGrade_Normal_Lv01:"Eggsecutive VP 400 at [group=0004 type=000e params=00 00 00 00] Reached!",CoopGrade_Normal_Lv02:"Eggsecutive VP 600 at [group=0004 type=000e params=00 00 00 00] Reached!",CoopGrade_Normal_Lv03:"Eggsecutive VP 999 at [group=0004 type=000e params=00 00 00 00] Reached!",CoopRareEnemyKillNum_Lv00:"[group=0004 type=0007 params=00 00 00 00] Splats x 100",CoopRareEnemyKillNum_Lv01:"[group=0004 type=0007 params=00 00 00 00] Splats x 1,000",CoopRareEnemyKillNum_Lv02:"[group=0004 type=0007 params=00 00 00 00] Splats x 10,000",EventMatch_Lv00:"Top 50% in a Challenge!",EventMatch_Lv01:"Top 20% in a Challenge!",EventMatch_Lv02:"Top 5% in a Challenge!",Fest10xBattle_Join_Lv00:"Competed in Three 10x Battles",Fest10xBattle_Join_Lv01:"Competed in Three 10x Battles",Fest10xBattle_Join_Lv02:"Competed in Three 10x Battles",Fest10xBattle_Win_Lv00:"Won Ten 10x Battles",Fest10xBattle_Win_Lv01:"Won Ten 10x Battles",Fest10xBattle_Win_Lv02:"Won Ten 10x Battles",FestRankMax:"Ruler of Splatfest Reached!",GearTotalRarity_Lv00:"Combined [group=0004 type=000f params=00 00 00 00] Gear at 30+ Stars",GearTotalRarity_Lv01:"Combined [group=0004 type=000f params=00 00 00 00] Gear at 100+ Stars",LimitedRewardLottery_Lv00:"Hit the Shell-Out Machine Jackpot 4 Times",LimitedRewardLottery_Lv01:"Hit the Shell-Out Machine Jackpot 8 Times",LimitedRewardLottery_Lv02:"Hit the Shell-Out Machine Jackpot 16 Times",Mission_Lv00:"DJ Octavio Defeated!",Mission_Lv01:"Story Mode Cleared!",Mission_Lv02:"Max Hero Level Achieved!",Mission_Lv03:"Max Hero Level Achieved!",Mission_Lv04:"Secret Kettle Found and Cleared!",NawaBattlerCardNum_Lv00:"Collected 90 Tableturf Battle Cards",NawaBattlerCardNum_Lv01:"Collected 120 Tableturf Battle Cards",NawaBattlerCardNum_Lv02:"Collected 150 Tableturf Battle Cards",NawaBattlerRank_Lv00:"Reached Tableturf Rank 30",NawaBattlerRank_Lv01:"Reached Tableturf Rank 40",NawaBattlerRank_Lv02:"Reached Tableturf Rank 50",NawaBattlerRank_Lv03:"Reached Tableturf Rank 100",NawaBattlerRank_Lv04:"Reached Tableturf Rank 200",NawaBattlerRank_Lv05:"Reached Tableturf Rank 300",NawaBattlerRank_Lv06:"Reached Tableturf Rank 400",NawaBattlerRank_Lv07:"Reached Tableturf Rank 500",NawaBattlerRank_Lv08:"Reached Tableturf Rank 600",NawaBattlerRank_Lv09:"Reached Tableturf Rank 700",NawaBattlerRank_Lv10:"Reached Tableturf Rank 800",NawaBattlerRank_Lv11:"Reached Tableturf Rank 900",NawaBattlerRank_Lv12:"Reached Tableturf Rank 999",NawaBattlerWinAllNpcLevel3:"Tableturf Battle Dojo Max Level Champ",OrderFood_Lv00:"Ordered 10 Concessions",OrderFood_Lv01:"Ordered 100 Concessions",OrderFood_Lv02:"Ordered 1,000 Concessions",OrderVendor_Fsodr_Lv00:"10 Spyke Orders",OrderVendor_Fsodr_Lv01:"100 Spyke Orders",OrderVendor_Lv00:"10 Murch Orders",OrderVendor_Lv01:"100 Murch Orders",PlayerRank_Lv00:"Reached Level 30",PlayerRank_Lv01:"Reached Level 50",PlayerRank_Lv02:"Reached Level 100",PlayerRank_Lv03:"Reached Level 200",PlayerRank_Lv04:"Reached Level 300",PlayerRank_Lv05:"Reached Level 400",PlayerRank_Lv06:"Reached Level 500",PlayerRank_Lv07:"Reached Level 600",PlayerRank_Lv08:"Reached Level 700",PlayerRank_Lv09:"Reached Level 800",PlayerRank_Lv10:"Reached Level 900",PlayerRank_Lv11:"Reached Level 999",SpendLottery_Lv00:"Spent 300,000 Cash on the Shell-Out Machine",SpendLottery_Lv01:"Spent 3,000,000 Cash on the Shell-Out Machine",SpendLottery_Lv02:"Spent 30,000,000 Cash on the Shell-Out Machine",SpendShop_Clothes_Fsodr_Lv00:"100K Jelly Fresh Club",SpendShop_Clothes_Fsodr_Lv01:"1MM Jelly Fresh Club",SpendShop_Clothes_Lv00:"100K Man-o'-Wardrobe Club",SpendShop_Clothes_Lv01:"1MM Man-o'-Wardrobe Club",SpendShop_Goods_Lv00:"100K Hotlantis Club",SpendShop_Goods_Lv01:"1MM Hotlantis Club",SpendShop_Head_Fsodr_Lv00:"100K Cooler Heads Club",SpendShop_Head_Fsodr_Lv01:"1MM Cooler Heads Club",SpendShop_Head_Lv00:"100K Naut Couture Club",SpendShop_Head_Lv01:"1MM Naut Couture Club",SpendShop_Shoes_Fsodr_Lv00:"100K Shrimp Kicks Club",SpendShop_Shoes_Fsodr_Lv01:"1MM Shrimp Kicks Club",SpendShop_Shoes_Lv00:"100K Crush Station Club",SpendShop_Shoes_Lv01:"1MM Crush Station Club",TotalKumaPoint_Lv00:"10,000 Grizzco Point Club",TotalKumaPoint_Lv01:"100,000 Grizzco Point Club",TotalKumaPoint_Lv02:"9,999,999 Grizzco Point Club",Udemae_Lv00:"A Rank Reached!",Udemae_Lv01:"S Rank Reached!",Udemae_Lv02:"S+ Rank Reached!",WeaponLevel_Lv00:"4★ [group=0004 type=0001 params=00 00 00 00] User",WeaponLevel_Lv01:"5★ [group=0004 type=0001 params=00 00 00 00] User",WinCount_HighXPower_Atlantic_Lv00:"Won 15 Straight X Battles with X Power at 2,000+",WinCount_HighXPower_Atlantic_Lv01:"Won 70 Straight X Battles with X Power at 2,000+",WinCount_HighXPower_Atlantic_Lv02:"Won 350 Straight X Battles with X Power at 2,000+",WinCount_HighXPower_Pacific_Lv00:"Won 15 Straight X Battles with X Power at 2,000+",WinCount_HighXPower_Pacific_Lv01:"Won 70 Straight X Battles with X Power at 2,000+",WinCount_HighXPower_Pacific_Lv02:"Won 350 Straight X Battles with X Power at 2,000+",WinCount_Pnt_Lv00:"50 Turf War Wins",WinCount_Pnt_Lv01:"250 Turf War Wins",WinCount_Pnt_Lv02:"1,200 Turf War Wins",WinCount_Tcl_Atk_Lv00:"Tricolor Turf War Win - Attacker",WinCount_Tcl_Atk_Lv01:"10 Tricolor Turf War Wins - Attacker",WinCount_Tcl_Def_Lv00:"Tricolor Turf War Win - Defender",WinCount_Tcl_Def_Lv01:"10 Tricolor Turf War Wins - Defender",WinCount_Var_Lv00:"100 Splat Zones Wins",WinCount_Var_Lv01:"1,000 Splat Zones Wins",WinCount_Vcl_Lv00:"100 Clam Blitz Wins",WinCount_Vcl_Lv01:"1,000 Clam Blitz Wins",WinCount_Vgl_Lv00:"100 Rainmaker Wins",WinCount_Vgl_Lv01:"1,000 Rainmaker Wins",WinCount_Vlf_Lv00:"100 Tower Control Wins",WinCount_Vlf_Lv01:"1,000 Tower Control Wins",WinCount_WeaponSp_Lv00:"30 Wins with [group=0004 type=0001 params=00 00 00 00]",WinCount_WeaponSp_Lv01:"180 Wins with [group=0004 type=0001 params=00 00 00 00]",WinCount_WeaponSp_Lv02:"1,200 Wins with [group=0004 type=0001 params=00 00 00 00]",XPower_Atlantic_Lv00:"Hit 2,000+ X Power",XPower_Pacific_Lv00:"Hit 2,000+ X Power",XRank_Lv00:"Top 3,000 in X Battle!",XRank_Lv01:"Top 500 in X Battle!",XRank_Lv02:"Top 10 in X Battle!",XRank_Revised_Atlantic_Lv00:"Top 50,000 X Battle Rank",XRank_Revised_Atlantic_Lv01:"Top 30,000 X Battle Rank",XRank_Revised_Atlantic_Lv02:"Top 10,000 X Battle Rank",XRank_Revised_Atlantic_Lv03:"Top 5,000 X Battle Rank",XRank_Revised_Atlantic_Lv04:"Top 3,000 X Battle Rank",XRank_Revised_Atlantic_Lv05:"Top 1,000 X Battle Rank",XRank_Revised_Atlantic_Lv06:"Top 500 X Battle Rank",XRank_Revised_Atlantic_Lv07:"Top 10 X Battle Rank",XRank_Revised_Pacific_Lv00:"Top 50,000 X Battle Rank",XRank_Revised_Pacific_Lv01:"Top 30,000 X Battle Rank",XRank_Revised_Pacific_Lv02:"Top 10,000 X Battle Rank",XRank_Revised_Pacific_Lv03:"Top 5,000 X Battle Rank",XRank_Revised_Pacific_Lv04:"Top 3,000 X Battle Rank",XRank_Revised_Pacific_Lv05:"Top 1,000 X Battle Rank",XRank_Revised_Pacific_Lv06:"Top 500 X Battle Rank",XRank_Revised_Pacific_Lv07:"Top 10 X Battle Rank"},"CommonMsg/Byname/BynameAdjective":{1e3:"Triple",1001:"Twin",1002:"Double",1003:"Individual",1004:"Comical",1005:"Imperfect",1006:"Uncommon",1007:"Peerless",1008:"Vertebrate",1009:"Expert",1010:"Giant",1011:"Stalwart",1012:"Exquisite",1013:"Acrobatic",1014:"Captivated",1015:"Fledgling",1016:"Relaxed",1017:"Playful",1018:"True",1019:"Candid",1020:"Straightforward",1021:"Unalloyed",1022:"Magnanimous",1023:"Stoic",1024:"Angelic",1025:"Single-Minded",1026:"Bland",1027:"Rich",1028:"Earnest",1029:"Forward-Plunging",1031:"Total",1032:"Passionate",1033:"Inexorable",1034:"Plain",1035:"Thoughtful",1036:"Frizzy",1037:"Somehow",1038:"Upright",1039:"Peaceful",1040:"Ephemeral",1041:"Bright",1042:"Laid-Back",1043:"Dried-Out",1044:"Metallic",1045:"Common",1046:"Nonchalant",1047:"Stubborn",1048:"Custom",1049:"Self-Centered",1050:"Determined",1051:"Indomitable",1052:"Unswerving",1053:"Steadfast",1054:"All-Out",1055:"Imperative",1056:"Undiscouraged",1057:"Enduring",1058:"Persisting",1059:"Completing",1060:"Piercing",1061:"Hyped",1062:"Climbing",1064:"Proper",1065:"Noteworthy",1066:"Relieved",1067:"Brazen",1068:"Unaffected",1069:"Exceptional",1070:"Challenging",1071:"Intellectual",1072:"Fair",1073:"Discerning",1074:"First-Rate",1075:"Strong-Willed",1076:"Formidable",1077:"Direct",1078:"Ambitious",1079:"Sturdy",1080:"Dogged",1081:"Dependable",1082:"Meticulous",1083:"Enterprising",1084:"Courageous",1085:"Resolved",1086:"Zealous",1087:"Insider",1088:"Skilled",1089:"Enthusiastic",1090:"Wonderful",1091:"Heavy-Duty",1092:"Struggling",1093:"Ultimate",1094:"Convenient",1095:"Restless",1096:"Composed",1097:"Comprehensible",1099:"Abandoned",1100:"Last",1101:"Supernatural",1102:"Clamorous",1103:"Dense",1104:"Airy",1105:"My Very Own",1106:"Improved",1107:"Blue",1108:"Ridiculous",1109:"Very",1110:"Really",1111:"Dauntless",1112:"Perpetual",1113:"Recently Graduated",1114:"Retirement-Age",1116:"Commencing",1117:"Genius",1118:"Praying",1119:"Sometime",1120:"Occasionally",1121:"Overdone",1122:"Lunchtime",1123:"Speciality",1124:"Phoenix-Like",1126:"Slacking",1128:"Grateful",1129:"Absolute",1130:"Blatant",1131:"Wistful",1132:"Airborne",1133:"Temporary",1135:"Conspicuous",1136:"Mesmerizing",1137:"Bronzed",1138:"Normal",1139:"Lightly Seasoned",1140:"Pampered",1141:"Simulated",1142:"Splatfest's",1143:"Splatfest Battle's",1145:"Rugged",2002:"Monochrome",2003:"Long-Sleeved",2004:"Collab-Loving",2005:"Swaggy",2006:"Refreshing",2007:"Simmering",2008:"Positive",2009:"Dim",2012:"Ebullient",2013:"Tailwind-Riding",2500:"Super-Duper Lucky",2501:"Super-Rare",2502:"One-in-a-Million",2503:"Ace",2504:"Astonishing",2505:"Adored",3e3:"Splatlandian",3001:"Indian Ocean",3002:"North Atlantic",3003:"North Pacific",3004:"Antarctic Ocean",3005:"Arctic Ocean",3006:"South Atlantic",3007:"South Pacific",3008:"The Shoal's Own",3009:"Official-Grizzco",3010:"The Crater's",3011:"The City's Own",3012:"Lobby-Bound",3013:"Third-Gen",3014:"Chaotic",3015:"Midsummer",3100:"Alternan",3200:"Fun",3201:"The Strongest",3300:"Crusty",3301:"Saddle-Straddlin'",3302:"Streamlined",3303:"Wandercrust","0000":"Scorch Gorge","0001":"Eeltail Alley","0002":"Hagglefish Market","0003":"Undertow Spillway","0004":"Um'ami Ruins","0005":"Mincemeat Metalworks","0006":"Brinewater Springs","0007":"Flounder Heights","0008":"Hammerhead Bridge","0009":"Museum d'Alfonsino","0010":"Mahi-Mahi Resort","0011":"Inkblot Art Academy","0012":"Sturgeon Shipyard","0013":"MakoMart","0014":"Wahoo World","0015":"Barnacle & Dime","0016":"Humpback Pump Track","0017":"Manta Maria","0018":"Shipshape Cargo Co.","0019":"Crableg Capital","0020":"Robo ROM-en","0021":"Bluefin Depot","0040":"Spawning Grounds","0041":"Marooner's Bay","0043":"Salmonid Smokeyard","0045":"Sockeye Station","0046":"Gone Fission Hydroplant","0047":"Jammin' Salmon Junction","0060":"Regular Battle","0061":"Anarchy Battle","0062":"Private Battle","0063":"Story Mode","0064":"Salmon Run","0065":"X Battle","0066":"Challenge","0067":"Tricolor Battle","0068":"Big Run","0069":"Eggstra Work","0100":"Inkless","0101":"Clocked-Out","0102":"Attention-Seeking","0103":"Southpaw","0104":"Splatsville's","0105":"Big-Money","0106":"Normcore","0107":"Faithful","0108":"Defensive","0109":"Champion","0110":"Royal","0111":"Ammo Knights","0112":"Naut Couture","0113":"Man-o'-Wardrobe","0114":"Crush Station","0115":"Hotlantis","0116":"Tableturf Battling","0117":"Research-Conducting","0118":"Apprentice","0119":"Part-Time","0120":"Go-Gettin'","0121":"Overachieving","0122":"Profreshional","0123":"Legendary","0124":"Mid-Rush","0125":"High-Tide","0126":"Cohock-Chargin'","0127":"Foggy","0128":"Low-Tide","0129":"Fall-Lovin'","0130":"Spring-Lovin'","0131":"Winter-Lovin'","0132":"Summer-Lovin'","0133":"Blissed-Out","0134":"Trendy","0135":"Sharp-Edged","0136":"Stylin'","0137":"Cool","0138":"Basic","0139":"Traditional","0140":"Trendsetting","0141":"All-Natural","0142":"Sizzlin'","0143":"Day-Seizing","0144":"Fall-Themed","0145":"Spring-Fresh","0146":"Captivating","0147":"The","0148":"Low-Rolling","0149":"High-Rolling","0150":"Commanding","0151":"Wannabe","0152":"Deadeye","0154":"Reckless","0155":"Chilled-Out","0156":"Silent","0157":"Ambidextrous","0158":"Stand-Up","0159":"Livestreaming","0160":"Meditative","0161":"Right-Handed","0162":"Low-Key","0163":"Pro","0164":"Amateur","0165":"Inkopolis Square's","0166":"Inkopolis's Own","0167":"Inkopolitan","0168":"Feral","0169":"Downtown","0170":"Country-Born","0171":"Greedy","0172":"Trending","0173":"Shortcut-Taking","0174":"Fluid","0175":"Optimistic","0177":"Daydreamin'","0178":"Clever","0179":"Hungry, Hungry","0180":"Competitive","0181":"Slapdash","0182":"Half-Hearted","0183":"Early-Bird","0184":"Daring","0185":"Hungry","0186":"Athletic","0187":"Early-Morning","0188":"Inkslinging","0189":"Up-and-at-'Em","0191":"Deep-Sea","0193":"Rise-and-Shine","0194":"Beachy","0195":"Freewheelin'","0196":"Old-Fashioned","0197":"World's Best","0200":"National","0201":"Stormy","0202":"Lonely","0203":"Groundbreaking","0204":"Assertive","0205":"Super-Scary","0206":"Vacationing","0207":"Nostalgic","0208":"Homecoming","0209":"Hard-Workin'","0210":"Sweet-Toothed","0211":"Seafaring","0212":"Self-Taught","0213":"Summer-Breaking","0214":"Processed","0215":"Not-So-Fresh","0216":"Salty","0217":"Destined","0219":"Gullible","0220":"Wiped-Out","0221":"Rockin'","0222":"Retro","0224":"Careless","0225":"Avaricious","0226":"Mischievous","0227":"Soft","0228":"Unrivaled","0229":"Swole","0230":"Hip","0231":"Brand-New","0232":"Full-Throttle","0233":"Peppy","0234":"Law-Breaking","0235":"At-Work","0236":"The First","0237":"Promising","0238":"Ink-Sloshing","0239":"Wave-Riding","0240":"Swanky","0241":"Fresh-Catch","0242":"Scientific","0243":"Orderly","0244":"The Lone","0245":"Sappy","0246":"Dodge-Rolling","0247":"Notable","0248":"Explosive","0249":"Shy","0250":"Calamari","0251":"Fishy","0253":"Puffed-Up","0254":"Fuzzy","0255":"The Great","0256":"Birthday-Celebratin'","0257":"Whimsical","0258":"Dangerous","0259":"Legit","0260":"Dandy","0261":"Ultra","0262":"Floaty","0263":"Indoor","0264":"Ink-Covered","0265":"Ink-Dripping","0266":"Fresh","0267":"Wicked-Fresh","0268":"Stale","0269":"A Simple","0270":"8-Tentacled","0271":"10-Tentacled","0272":"Midwinter","0273":"Mind-Blowing","0274":"Lifelong","0275":"Top-Ranked","0276":"Actual","0277":"Growing","0278":"Studious","0279":"Overpowering","0281":"Spineless","0282":"Headstrong","0283":"Leaping","0284":"Running","0288":"Protective","0289":"Attacking","0290":"Watchful","0291":"Cooperative","0292":"Hidden","0293":"Submersible","0294":"Brute","0295":"Stealthy","0296":"Everyday","0297":"Gaming","0301":"Logical","0303":"Reliable","0304":"Gentle","0305":"Confident","0306":"Serious","0307":"Mild-Mannered","0308":"Cheerful","0309":"High-End","0310":"Chatty","0311":"Cash-Stacking","0312":"Absentminded","0313":"Beloved","0314":"Windy","0315":"Watery","0316":"Sneaky","0317":"Fiery","0318":"Incandescent","0319":"Young","0320":"Organized","0321":"Perfect","0322":"Mysterious","0323":"Central","0324":"Fierce","0325":"Ambiguous","0326":"Instantaneous","0328":"Exemplary","0329":"Tear-Stained","0330":"Traveling","0332":"Next Year's","0334":"Twilight","0335":"The One and Only","0336":"Hibernating","0337":"Sharp-Eyed","0338":"Lost","0339":"Procrastinating","0340":"Honorary","0341":"Tasteless","0343":"Merciless","0344":"Infinite","0345":"Sleepy","0347":"Time-Traveling","0348":"Suave","0350":"Howling","0352":"Phantasmagoric","0353":"Celestial","0354":"Aged","0357":"Lethal","0358":"Secret","0359":"Esoteric","0360":"Exhausted","0361":"Better-Than-You","0362":"All-Purpose","0363":"Gleaming","0364":"Midday","0366":"Unnoticed","0367":"Unprecedented","0368":"Tenacious","0369":"Scorching","0370":"Daytime","0371":"Meaty","0372":"Enigmatic","0374":"Unflappable","0375":"Savvy","0376":"Fleeing","0377":"Drained","0378":"Reincarnated","0379":"Sun-Dried","0381":"AKA","0382":"Superhuman","0385":"Subterranean","0386":"Massive","0387":"Terrestrial","0388":"Important","0389":"Jumbo","0390":"Oceanic","0391":"Big","0393":"Easygoing","0394":"Ancient","0395":"Multiplying","0397":"Fully Automatic","0398":"Glimmering","0399":"Seasick","0400":"Unblemished","0402":"Fightin'","0403":"Front-Line","0404":"Endangered","0405":"Persistent","0406":"Sacred","0408":"Local","0411":"Turn-of-the-Century","0412":"This Century's Best","0414":"Aquarium-Bound","0415":"Fan-Favorite","0416":"Rising","0417":"Spicy","0418":"Lightning-Fast","0419":"Awe-Inspiring","0420":"Midnight","0421":"Stark-White","0422":"Deep-Red","0423":"Bright-Blue","0424":"Pitch-Black","0425":"Woodsy","0426":"Next-Generation","0428":"Novice","0429":"Sensational","0431":"Dead-Tired","0432":"Dazzling","0433":"Tagalong","0436":"Little","0437":"Third-Eye-Opened","0438":"Early-Summer","0439":"Alabaster","0440":"Pure","0441":"Grown-Up","0442":"Partying","0443":"Dapper","0444":"Evil","0445":"Jet-Black","0447":"Vindictive","0449":"Self-Proclaimed","0450":"Selfie-Snapping","0451":"Eternity's","0452":"Self-Identified","0454":"Childish","0455":"Job-Lovin'","0457":"Late-Summer","0458":"Cutting-Edge","0459":"Mountain-Dwelling","0460":"Picture-Taking","0461":"Yesterday's","0462":"Graceful","0463":"First-Wave","0464":"All-New","0465":"The Very First","0466":"The Final","0468":"This Year's","0469":"Limited-Edition","0470":"Ever-Present","0471":"Booming","0473":"Crimson","0474":"Steady","0476":"Nosy","0477":"Enlightened","0480":"Aloof","0484":"Hearty","0485":"Artsy","0486":"Flying","0488":"Die-Hard","0490":"Fortunate","0492":"Last Year's","0493":"The True Ultimate","0494":"Impish","0495":"Shining","0497":"Forgetful","0499":"Heartfelt","0501":"Unarmed","0502":"Sweet","0503":"Sentimental","0504":"Sandy","0505":"Overheated","0507":"Catch-of-the-Day","0508":"Pool-Ready","0510":"Anachronistic","0513":"Supersonic","0517":"Lovely","0518":"Movie-Lovin'","0520":"Shadowy","0521":"Fated","0522":"Cosmic","0524":"Zipped-Lips","0525":"Gone-Fishin'","0526":"24-Hour","0527":"Mostly","0529":"Otherworldly","0532":"Junior-Grade","0533":"Wild","0534":"A Real","0535":"Lucky","0537":"Seasoned","0539":"Soft-and-Fluffy","0540":"100%","0541":"Veggie-Lovin'","0542":"Fluffy","0543":"Modern","0546":"Lost-and-Found","0547":"Won't-Lose","0548":"Auspicious","0549":"Innocent","0551":"Miraculous","0552":"Poser","0553":"Comic-Lovin'","0554":"Vulnerable","0556":"Light","0557":"Bomb-tastic","0559":"Fluttering","0560":"Buoyant","0562":"Wibbly-Wobbly","0563":"Fruit-Lovin'","0564":"Dark","0565":"Fragrant","0566":"Fashionable","0568":"Big-Time","0569":"Drenched","0570":"Bearded","0571":"Frosty","0572":"Incredible","0573":"Faraway","0574":"Flashy","0576":"Fame-Seeking","0577":"Bursting","0578":"Designer-Label","0579":"Swoon-Worthy","0580":"Strict","0581":"Slippery","0582":"Painted","0584":"Climactic","0586":"Nameless","0587":"Nice","0588":"Muddy","0589":"Neighborly","0591":"Tidy","0592":"Barbed","0593":"Pointy","0594":"Big Honkin'","0595":"Smooth","0596":"Iced","0598":"Occasional","0599":"Just Another","0600":"Essential","0601":"Diving","0602":"Dynamite","0604":"Overall","0605":"Bargain-Binned","0607":"Slim","0608":"Out-of-Options","0609":"Steampunky","0610":"Numb","0612":"Hiking","0613":"Wandering","0615":"Unyielding","0617":"Economical","0618":"Gothic","0619":"Covert","0620":"High-Performing","0621":"Praiseworthy","0622":"Arcade-Hopping","0623":"Pretty Good","0624":"The GOAT","0625":"Glistening","0626":"Sparkling","0627":"Gigantified","0629":"Camera-Facing","0630":"Clockwork","0631":"Solid","0632":"Fully","0633":"Unperceived","0634":"Carnivorous","0635":"Homebound","0636":"Fish-Lovin'","0638":"Sketching","0639":"Precocious","0640":"Easy-Peasy","0642":"Made-to-Order","0643":"Elegant","0644":"Water-Breathing","0645":"The Eternal","0646":"Instant","0647":"The Usual","0648":"Ready-to-Go","0650":"Lively","0651":"Unstoppable","0652":"Underground","0653":"The Real Ultimate","0654":"Overflowing","0655":"Toon-Lovin'","0656":"Splendid","0657":"Warm-and-Cozy","0660":"Amped-Up","0661":"Outdoorsy","0662":"Tech-Minded","0663":"Lovable","0664":"amiibo-Collecting","0665":"5-Year-Planning","0666":"Decade-Experienced","0667":"Crab-N-Go","0669":"Summer-Fun","0670":"Winter-Ready","0671":"Not-Streaming","0672":"Daylit","0673":"Dawning","0674":"Realistic","0675":"Lightly Snacking","0676":"Late-Night","0677":"Comfy-Cozy","0678":"Fearful","0679":"Winter-Breaking","0680":"So-Called","0681":"Intuitive","0682":"A Complex","0683":"The Original","0684":"Second-Generation","0686":"The Best","0687":"Roaming","0688":"DJ","0689":"Badlands","0690":"Snowy","0691":"Seaside","0692":"Big-Sky","0693":"Dry","0694":"Raw","0695":"Awesome","0696":"SUPERFRESH","0697":"Splatoon","0698":"Avant-Garde","0699":"Punk","0700":"Mod","0701":"Goth","0702":"Rockabilly","0703":"Casual","0704":"Sporty","0705":"Breakin'","0707":"Glam","0708":"Vintage","0709":"Bohemian","0710":"Grunge","0714":"Hip-Hop","0716":"Thunderous","0717":"Turbo","0718":"Wizened","0719":"Today's","0720":"Virtual","0721":"Half","0722":"Microscopic","0724":"Everyone's","0725":"Carefree","0726":"New","0727":"High-Earning","0728":"Pool-Frequenting","0729":"Revived","0730":"Preposterous","0731":"Mighty","0732":"Chill","0733":"Gossip-Loving","0734":"Social","0735":"Crafty","0736":"Hopeful","0737":"Sealed","0738":"Theoretically Possible","0739":"Rookie","0740":"Sleeved","0741":"World's First","0742":"Nature-Loving","0743":"Inflexible","0744":"Prized","0745":"Faux","0746":"Reasonable","0747":"Unfettered","0748":"Unthinkable","0749":"Phantom","0751":"Gold","0752":"Silver","0753":"Undefeated","0754":"New Year's","0755":"This Year's Final","0756":"Newly Released","0757":"Tonight's","0758":"Reclusive","0759":"Stewed","0760":"Cyber-Brainiac","0761":"Magical","0762":"Of-the-Moment","0763":"Forevermore","0764":"Anticipated","0765":"Automated","0766":"Drab","0767":"Reflective","0768":"Hoary","0769":"Parallel World's","0770":"Power-Concealing","0771":"Nourishing","0772":"Highly Nutritious","0773":"Ascending","0774":"Sprightly","0775":"Always-in-Our-Hearts","0776":"Sanguine","0777":"Daybreaking","0778":"Repeating","0779":"Endlessly Ringing","0781":"Listless","0782":"In-Season","0783":"Rampaging","0784":"Scintillating","0785":"Abyssal","0786":"Originally from","0787":"Unknowing","0788":"Currently Obsessed with","0789":"Nonstop","0790":"Vivacious","0791":"Aggressive","0793":"Immediate","0794":"Natural","0795":"High-Calorie","0796":"Low-Calorie","0797":"Recently","0798":"Esteemed","0799":"Treasured","0800":"Existing","0801":"Nonexistent","0802":"On-the-Job","0804":"Choosy","0805":"Delicate","0806":"Haphazard","0807":"Golden Egg–Like","0808":"Ice-Cold","0809":"Low-Battery","0810":"Fully Charged","0811":"Noontime","0812":"Break-Time","0813":"Unavailable","0814":"Protecting","0815":"Long-Awaited","0816":"Now-Stronger","0817":"Breath-Holding","0818":"Genuine","0819":"Nimble","0820":"Movable","0821":"At-Home","0822":"Hometown","0823":"Shooter-Using","0824":"Roller-Using","0825":"Charger-Using","0826":"Slosher-Using","0827":"Splatling-Using","0828":"Dualie-Using","0829":"Brella-Using","0830":"Blaster-Using","0831":"Brush-Using","0832":"Stringer-Using","0833":"Splatana-Using","0834":"Replete with","0835":"Watered","0836":"Triumphant","0837":"Tasteful","0838":"Outstanding","0840":"Stylish","0841":"Three-Star","0842":"Scheduled","0843":"Trailblazing","0844":"Satiating","0845":"Newish","0846":"Same-as-Ever","0847":"Multifaceted","0848":"Orthodox","0849":"Regal","0850":"Classic","0851":"Old-School","0852":"Simplistic","0853":"Advanced","0854":"Prototypical","0855":"Sincere","0856":"Flexible","0857":"Creative","0858":"Classy","0859":"Slender","0860":"Genteel","0861":"Shrouded-in-Mystery","0862":"Novel","0863":"Brisk","0864":"Undying","0865":"Powerful","0866":"Unwavering","0867":"Heroic","0868":"Swaggering","0869":"Astute","0870":"Pushy","0871":"Resilient","0872":"Burly","0873":"Resourceful","0874":"Lax","0875":"Daredevilish","0876":"Magnetic","0877":"Dynamic","0878":"Unique","0879":"Keen-and-Nimble","0880":"Cordial","0881":"Dignified","0882":"Flowy","0883":"Cryptic","0884":"High-Spirited","0885":"Mind-Changing","0886":"Chic","0887":"Witty","0888":"Cheery","0889":"Vivid","0890":"Rare","0891":"Closed-Off","0892":"Surreal","0893":"Methodical","0894":"Gorgeous","0895":"Cute","0896":"Awkward","0897":"Deep","0898":"Unadorned","0899":"Cushy","0900":"Gallant","0901":"Adept","0902":"Invigorating","0903":"Veiled","0904":"Discreet","0905":"Frank","0906":"Rational","0907":"Charming","0908":"Quiet","0909":"Wise","0910":"Introverted","0911":"Abstract","0912":"Sharp","0913":"Gutsy","0914":"Authentic","0915":"Learned","0916":"Experienced","0917":"Gifted","0918":"Ingenious","0919":"Healthy","0920":"Honest","0921":"Just-Right","0922":"Blustery","0923":"Funky","0924":"Exciting","0925":"Exuberant","0926":"Well-Mannered","0927":"Dutiful","0928":"Modest","0929":"Prestigious","0930":"Affable","0931":"Sociable","0932":"Good-Humored","0933":"Urbane","0934":"Meek","0935":"Well-Rounded","0936":"Well-Behaved","0937":"Upstanding","0938":"Big-Hearted","0939":"Influential","0940":"Mold-Breaking","0941":"Ghastly","0942":"Academic","0944":"Plucky","0945":"Cheeky","0946":"Glorious","0947":"Maniacal","0948":"Magnificent","0949":"Energetic","0950":"Misplaced","0951":"De Facto","0952":"333x","0953":"Ageless","0954":"Apparent","0955":"Ostensible","0956":"Heart-Thumping","0957":"Starchy","0958":"Barely","0959":"Narrowly","0960":"Amusing","0961":"Excited","0962":"Swishy","0963":"The Genuine","0964":"Unnamed","0965":"Glory-Hogging","0966":"Prickly","0967":"Lackadaisical","0968":"Surviving","0969":"Eccentric","0970":"Idiosyncratic","0971":"Rule-Breaking","0972":"Snazzy","0973":"Zesty","0974":"Most Popular","0975":"On-the-Rise","0976":"Skyrocketing","0977":"World-Wise","0978":"Assisting","0979":"Covering","0980":"Bourgeois","0981":"Clean","0982":"Almighty","0983":"Robust","0984":"Enlivened","0985":"Proactive","0987":"Unruly","0988":"Fully Committed","0989":"Delightful","0990":"Flower-Shaped","0991":"Extraordinary","0992":"Original","0993":"Top-Notch","0994":"Clandestine","0995":"Painful","0996":"Topical","0997":"Lavish","0998":"Thrilling","0999":"Deluxe"},"CommonMsg/Byname/BynameSubject":{"0000_0":"Sploosh-o-matic User","0000_1":"[group=0001 type=0002 params=]","0001_0":"Splattershot Jr. User","0001_1":"[group=0001 type=0002 params=]","0002_0":"Splash-o-matic User","0002_1":"[group=0001 type=0002 params=]","0003_0":"Aerospray User","0003_1":"[group=0001 type=0002 params=]","0004_0":"Splattershot User","0004_1":"[group=0001 type=0002 params=]","0005_0":".52 Gal User","0005_1":"[group=0001 type=0002 params=]","0006_0":"N-ZAP User","0006_1":"[group=0001 type=0002 params=]","0007_0":"Splattershot Pro User","0007_1":"[group=0001 type=0002 params=]","0008_0":".96 Gal User","0008_1":"[group=0001 type=0002 params=]","0009_0":"Jet Squelcher User","0009_1":"[group=0001 type=0002 params=]","0010_0":"Luna Blaster User","0010_1":"[group=0001 type=0002 params=]","0011_0":"Blaster User","0011_1":"[group=0001 type=0002 params=]","0012_0":"Range Blaster User","0012_1":"[group=0001 type=0002 params=]","0013_0":"Clash Blaster User","0013_1":"[group=0001 type=0002 params=]","0014_0":"Rapid Blaster User","0014_1":"[group=0001 type=0002 params=]","0015_0":"Rapid Blaster Pro User","0015_1":"[group=0001 type=0002 params=]","0016_0":"L-3 Nozzlenose User","0016_1":"[group=0001 type=0002 params=]","0017_0":"H-3 Nozzlenose User","0017_1":"[group=0001 type=0002 params=]","0018_0":"Squeezer User","0018_1":"[group=0001 type=0002 params=]","0019_0":"Carbon Roller User","0019_1":"[group=0001 type=0002 params=]","0020_0":"Splat Roller User","0020_1":"[group=0001 type=0002 params=]","0021_0":"Dynamo Roller User","0021_1":"[group=0001 type=0002 params=]","0022_0":"Flingza Roller User","0022_1":"[group=0001 type=0002 params=]","0023_0":"Inkbrush User","0023_1":"[group=0001 type=0002 params=]","0024_0":"Octobrush User","0024_1":"[group=0001 type=0002 params=]","0025_0":"Squiffer User","0025_1":"[group=0001 type=0002 params=]","0026_0":"Splat Charger User","0026_1":"[group=0001 type=0002 params=]","0027_0":"E-liter 4K User","0027_1":"[group=0001 type=0002 params=]","0028_0":"Bamboozler 14 User","0028_1":"[group=0001 type=0002 params=]","0029_0":"Goo Tuber User","0029_1":"[group=0001 type=0002 params=]","0030_0":"Slosher User","0030_1":"[group=0001 type=0002 params=]","0031_0":"Tri-Slosher User","0031_1":"[group=0001 type=0002 params=]","0032_0":"Sloshing Machine User","0032_1":"[group=0001 type=0002 params=]","0033_0":"Bloblobber User","0033_1":"[group=0001 type=0002 params=]","0034_0":"Explosher User","0034_1":"[group=0001 type=0002 params=]","0035_0":"Mini Splatling User","0035_1":"[group=0001 type=0002 params=]","0036_0":"Heavy Splatling User","0036_1":"[group=0001 type=0002 params=]","0037_0":"Hydra Splatling User","0037_1":"[group=0001 type=0002 params=]","0038_0":"Ballpoint Splatling User","0038_1":"[group=0001 type=0002 params=]","0039_0":"Nautilus User","0039_1":"[group=0001 type=0002 params=]","0040_0":"Dapple Dualies User","0040_1":"[group=0001 type=0002 params=]","0041_0":"Splat Dualies User","0041_1":"[group=0001 type=0002 params=]","0042_0":"Glooga Dualies User","0042_1":"[group=0001 type=0002 params=]","0043_0":"Dualie Squelchers User","0043_1":"[group=0001 type=0002 params=]","0044_0":"Tetra Dualies User","0044_1":"[group=0001 type=0002 params=]","0045_0":"Splat Brella User","0045_1":"[group=0001 type=0002 params=]","0046_0":"Tenta Brella User","0046_1":"[group=0001 type=0002 params=]","0047_0":"Undercover Brella User","0047_1":"[group=0001 type=0002 params=]","0048_0":"Tri-Stringer User","0048_1":"[group=0001 type=0002 params=]","0049_0":"Splatana Stamper User","0049_1":"[group=0001 type=0002 params=]","0050_0":"REEF-LUX 450 User","0050_1":"[group=0001 type=0002 params=]","0051_0":"Splatana Wiper User","0051_1":"[group=0001 type=0002 params=]","0052_0":"Splatterscope User","0052_1":"[group=0001 type=0002 params=]","0053_0":"E-liter 4K Scope User","0053_1":"[group=0001 type=0002 params=]","0054_0":"Splattershot Nova User","0054_1":"[group=0001 type=0002 params=]","0055_0":"Big Swig Roller User","0055_1":"[group=0001 type=0002 params=]","0056_0":"Snipewriter 5H User","0056_1":"[group=0001 type=0002 params=]","0057_0":"S-BLAST '92 User","0057_1":"[group=0001 type=0002 params=]","0058_0":"Painbrush User","0058_1":"[group=0001 type=0002 params=]","0059_0":"Dread Wringer User","0059_1":"[group=0001 type=0002 params=]","0060_0":"Heavy Edit Splatling User","0060_1":"[group=0001 type=0002 params=]","0100_0":"Splat Bomb User","0100_1":"[group=0001 type=0002 params=]","0101_0":"Suction Bomb User","0101_1":"[group=0001 type=0002 params=]","0102_0":"Burst Bomb User","0102_1":"[group=0001 type=0002 params=]","0103_0":"Curling Bomb User","0103_1":"[group=0001 type=0002 params=]","0104_0":"Autobomb User","0104_1":"[group=0001 type=0002 params=]","0105_0":"Ink Mine User","0105_1":"[group=0001 type=0002 params=]","0106_0":"Sprinkler User","0106_1":"[group=0001 type=0002 params=]","0107_0":"Point Sensor User","0107_1":"[group=0001 type=0002 params=]","0108_0":"Toxic Mist User","0108_1":"[group=0001 type=0002 params=]","0109_0":"Splash Wall User","0109_1":"[group=0001 type=0002 params=]","0110_0":"Squid Beakon User","0110_1":"[group=0001 type=0002 params=]","0111_0":"Fizzy Bomb User","0111_1":"[group=0001 type=0002 params=]","0112_0":"Torpedo User","0112_1":"[group=0001 type=0002 params=]","0113_0":"Angle Shooter User","0113_1":"[group=0001 type=0002 params=]","0120_0":"Ink Storm User","0120_1":"[group=0001 type=0002 params=]","0121_0":"Trizooka User","0121_1":"[group=0001 type=0002 params=]","0122_0":"Ultra Stamp User","0122_1":"[group=0001 type=0002 params=]","0123_0":"Big Bubbler User","0123_1":"[group=0001 type=0002 params=]","0124_0":"Inkjet User","0124_1":"[group=0001 type=0002 params=]","0125_0":"Wave Breaker User","0125_1":"[group=0001 type=0002 params=]","0126_0":"Zipcaster User","0126_1":"[group=0001 type=0002 params=]","0127_0":"Reefslider User","0127_1":"[group=0001 type=0002 params=]","0128_0":"Crab Tank User","0128_1":"[group=0001 type=0002 params=]","0129_0":"Booyah Bomb User","0129_1":"[group=0001 type=0002 params=]","0130_0":"Ink Vac User","0130_1":"[group=0001 type=0002 params=]","0131_0":"Tenta Missiles User","0131_1":"[group=0001 type=0002 params=]","0132_0":"Killer Wail 5.1 User","0132_1":"[group=0001 type=0002 params=]","0133_0":"Triple Inkstrike User","0133_1":"[group=0001 type=0002 params=]","0134_0":"Tacticooler User","0134_1":"[group=0001 type=0002 params=]","0135_0":"Super Chump User","0135_1":"[group=0001 type=0002 params=]","0136_0":"Kraken Royale User","0136_1":"[group=0001 type=0002 params=]","0137_0":"Triple Splashdown User","0137_1":"[group=0001 type=0002 params=]","0138_0":"Splattercolor Screen User","0138_1":"[group=0001 type=0002 params=]","0150_0":"SquidForce Model","0150_1":"[group=0001 type=0002 params=]","0151_0":"Zink Model","0151_1":"[group=0001 type=0002 params=]","0152_0":"Krak-On Model","0152_1":"[group=0001 type=0002 params=]","0153_0":"Rockenberg Model","0153_1":"[group=0001 type=0002 params=]","0154_0":"Zekko Model","0154_1":"[group=0001 type=0002 params=]","0155_0":"Forge Model","0155_1":"[group=0001 type=0002 params=]","0156_0":"Firefin Model","0156_1":"[group=0001 type=0002 params=]","0157_0":"Skalop Model","0157_1":"[group=0001 type=0002 params=]","0158_0":"Splash Mob Model","0158_1":"[group=0001 type=0002 params=]","0159_0":"Inkline Model","0159_1":"[group=0001 type=0002 params=]","0160_0":"Tentatek Model","0160_1":"[group=0001 type=0002 params=]","0161_0":"Takoroka Model","0161_1":"[group=0001 type=0002 params=]","0162_0":"Annaki Model","0162_1":"[group=0001 type=0002 params=]","0163_0":"Enperry Model","0163_1":"[group=0001 type=0002 params=]","0164_0":"Toni Kensa Model","0164_1":"[group=0001 type=0002 params=]","0165_0":"Z+F Model","0165_1":"[group=0001 type=0002 params=]","0166_0":"Barazushi Model","0166_1":"[group=0001 type=0002 params=]","0167_0":"Emberz Model","0167_1":"[group=0001 type=0002 params=]","0168_0":"Cuttlegear Model","0168_1":"[group=0001 type=0002 params=]","0180_0":"Squid Squad Fan","0180_1":"[group=0001 type=0002 params=]","0181_0":"Chirpy Chips Fan","0181_1":"[group=0001 type=0002 params=]","0182_0":"Hightide Era Fan","0182_1":"[group=0001 type=0002 params=]","0183_0":"Wet Floor Fan","0183_1":"[group=0001 type=0002 params=]","0184_0":"Bottom Feeders Fan","0184_1":"[group=0001 type=0002 params=]","0185_0":"Ink Theory Fan","0185_1":"[group=0001 type=0002 params=]","0186_0":"SashiMori Fan","0186_1":"[group=0001 type=0002 params=]","0187_0":"Diss-Pair Fan","0187_1":"[group=0001 type=0002 params=]","0188_0":"ω-3 Fan","0188_1":"[group=0001 type=0002 params=]","0189_0":"Turquoise October Fan","0189_1":"[group=0001 type=0002 params=]","0190_0":"Dedf1sh Fan","0190_1":"[group=0001 type=0002 params=]","0191_0":"C-Side Superfan","0191_1":"[group=0001 type=0002 params=]","0192_0":"Front Roe Fan","0192_1":"[group=0001 type=0002 params=]","0193_0":"Damp Socks Fan","0193_1":"[group=0001 type=0002 params=]","0194_0":"Yoko & the Gold Bazookas Fan","0194_1":"[group=0001 type=0002 params=]","0195_0":"H2Whoa Fan","0195_1":"[group=0001 type=0002 params=]","0220_0":"Hippie","0220_1":"[group=0001 type=0002 params=]","0221_0":"Barber","0221_1":"[group=0001 type=0002 params=]","0222_0":"Double-Bun","0222_1":"[group=0001 type=0002 params=]","0223_0":"Wave Rider","0223_1":"[group=0001 type=0002 params=]","0224_0":"Pigtail Pro","0224_1":"[group=0001 type=0002 params=]","0225_0":"Headbanger","0225_1":"[group=0001 type=0002 params=]","0226_0":"Topknot Knight","0226_1":"[group=0001 type=0002 params=]","0227_0":"Sharp Dresser","0227_1":"[group=0001 type=0002 params=]","0228_0":"Buzz-Cut","0228_1":"[group=0001 type=0002 params=]","0229_0":"Ponytail","0229_1":"[group=0001 type=0002 params=]","0230_0":"Spiked Hair","0230_1":"[group=0001 type=0002 params=]","0231_0":"Bowl Cut","0231_1":"[group=0001 type=0002 params=]","0232_0":"Braid Bearer","0232_1":"[group=0001 type=0002 params=]","0233_0":"Classic","0233_1":"[group=0001 type=0002 params=]","0234_0":"Wet Hair","0234_1":"[group=0001 type=0002 params=]","0235_0":"Cornrows","0235_1":"[group=0001 type=0002 params=]","0236_0":"Curly Hair","0236_1":"[group=0001 type=0002 params=]","0237_0":"Punk","0237_1":"[group=0001 type=0002 params=]","0238_0":"Afro","0238_1":"[group=0001 type=0002 params=]","0239_0":"Big Curls","0239_1":"[group=0001 type=0002 params=]","0240_0":"Fade","0240_1":"[group=0001 type=0002 params=]","0241_0":"Wanderer","0241_1":"[group=0001 type=0002 params=]","0242_0":"Greaser","0242_1":"[group=0001 type=0002 params=]","0243_0":"Hipster ","0243_1":"[group=0001 type=0002 params=]","0300_0":"Callie Fan","0300_1":"[group=0001 type=0002 params=]","0301_0":"Naut Couture Regular","0301_1":"[group=0001 type=0002 params=]","0302_0":"Marina Fan","0302_1":"[group=0001 type=0002 params=]","0303_0":"Frye Fan","0303_1":"[group=0001 type=0002 params=]","0304_0":"Crush Station Regular","0304_1":"[group=0001 type=0002 params=]","0305_0":"Hotlantis Regular","0305_1":"[group=0001 type=0002 params=]","0306_0":"Squid Sisters Fan","0306_1":"[group=0001 type=0002 params=]","0307_0":"Deep Cut Fan","0307_1":"[group=0001 type=0002 params=]","0308_0":"Off the Hook Fan","0308_1":"[group=0001 type=0002 params=]","0309_0":"Pearl Fan","0309_1":"[group=0001 type=0002 params=]","0310_0":"Shiver Fan","0310_1":"[group=0001 type=0002 params=]","0311_0":"Ammo Knights Regular","0311_1":"[group=0001 type=0002 params=]","0312_0":"Man-o'-Wardrobe Regular","0312_1":"[group=0001 type=0002 params=]","0313_0":"Marie Fan","0313_1":"[group=0001 type=0002 params=]","0314_0":"Big Man Fan","0314_1":"[group=0001 type=0002 params=]","0315_0":"Clam Blitz Enthusiast","0315_1":"[group=0001 type=0002 params=]","0316_0":"Splat Zones Enthusiast","0316_1":"[group=0001 type=0002 params=]","0317_0":"Rainmaker Enthusiast","0317_1":"[group=0001 type=0002 params=]","0318_0":"Tower Control Enthusiast","0318_1":"[group=0001 type=0002 params=]","0319_0":"Salmon Runner","0319_1":"[group=0001 type=0002 params=]","0320_0":"Turf Warrior","0320_1":"[group=0001 type=0002 params=]","0321_0":"Story Mode Hero","0321_1":"[group=0001 type=0002 params=]","0322_0":"Clam Blitz Legend","0322_1":"[group=0001 type=0002 params=]","0323_0":"Splat Zones Legend","0323_1":"[group=0001 type=0002 params=]","0324_0":"Tower Control Legend","0324_1":"[group=0001 type=0002 params=]","0325_0":"Turf War Legend","0325_1":"[group=0001 type=0002 params=]","0326_0":"Rainmaker Legend","0326_1":"[group=0001 type=0002 params=]","0327_0":"Salmon Run Legend","0327_1":"[group=0001 type=0002 params=]","0328_0":"Story Mode Legend","0328_1":"[group=0001 type=0002 params=]","0329_0":"Inkling","0329_1":"[group=0001 type=0002 params=]","0330_0":"Octoling","0330_1":"[group=0001 type=0002 params=]","0331_0":"Tee Model","0331_1":"[group=0001 type=0002 params=]","0332_0":"Jacket Model","0332_1":"[group=0001 type=0002 params=]","0333_0":"Shirt Model","0333_1":"[group=0001 type=0002 params=]","0334_0":"Sneaker Model","0334_1":"[group=0001 type=0002 params=]","0335_0":"Knit Model","0335_1":"[group=0001 type=0002 params=]","0336_0":"Trendsetter","0336_1":"[group=0001 type=0002 params=]","0337_0":"Hat Model","0337_1":"[group=0001 type=0002 params=]","0338_0":"Glasses Model","0338_1":"[group=0001 type=0002 params=]","0339_0":"Boot Model","0339_1":"[group=0001 type=0002 params=]","0340_0":"Card Collector","0340_1":"[group=0001 type=0002 params=]","0341_0":"Item Collector","0341_1":"[group=0001 type=0002 params=]","0342_0":"Fashionista","0342_1":"[group=0001 type=0002 params=]","0343_0":"Locker Rock Star","0343_1":"[group=0001 type=0002 params=]","0344_0":"Squid Surger","0344_1":"[group=0001 type=0002 params=]","0345_0":"Squid Roller","0345_1":"[group=0001 type=0002 params=]","0346_0":"All-Arounder","0346_1":"[group=0001 type=0002 params=]","0347_0":"Jumper","0347_1":"[group=0001 type=0002 params=]","0348_0":"Dodge Roller","0348_1":"[group=0001 type=0002 params=]","0349_0":"Slow Starter","0349_1":"[group=0001 type=0002 params=]","0350_0":"Splat Bomber","0350_1":"[group=0001 type=0002 params=]","0351_0":"Guardian","0351_1":"[group=0001 type=0002 params=]","0352_0":"Raider","0352_1":"[group=0001 type=0002 params=]","0353_0":"Manta Ray","0353_1":"[group=0001 type=0002 params=]","0354_0":"Octarian","0354_1":"[group=0001 type=0002 params=]","0355_0":"Bear","0355_1":"[group=0001 type=0002 params=]","0356_0":"Jellyfish","0356_1":"[group=0001 type=0002 params=]","0357_0":"Human","0357_1":"[group=0001 type=0002 params=]","0358_0":"Sea Creature","0358_1":"[group=0001 type=0002 params=]","0359_0":"Mammal","0359_1":"[group=0001 type=0002 params=]","0360_0":"Artist","0360_1":"[group=0001 type=0002 params=]","0361_0":"Pop Star","0361_1":"[group=0001 type=0002 params=]","0362_0":"Clock Puncher","0362_1":"[group=0001 type=0002 params=]","0363_0":"Eel Tamer","0363_1":"[group=0001 type=0002 params=]","0364_0":"Shark Tamer","0364_1":"[group=0001 type=0002 params=]","0365_0":"Clerk","0365_1":"[group=0001 type=0002 params=]","0366_0":"Office Drone","0366_1":"[group=0001 type=0002 params=]","0367_0":"Ringleader","0367_1":"[group=0001 type=0002 params=]","0368_0":"Champ","0368_1":"[group=0001 type=0002 params=]","0369_0":"Bass Dropper","0369_1":"[group=0001 type=0002 params=]","0371_0":"Prince","0371_1":"Princess","0372_0":"Brother","0372_1":"Sister","0373_0":"City Boy","0373_1":"City Girl","0374_0":"Groom","0374_1":"Bride","0375_0":"King","0375_1":"Queen","0376_0":"Bro","0376_1":"Sis","0377_0":"Oden Bowl","0377_1":"[group=0001 type=0002 params=]","0378_0":"Party Lover","0378_1":"[group=0001 type=0002 params=]","0379_0":"Surfer","0379_1":"[group=0001 type=0002 params=]","0380_0":"Festivalgoer","0380_1":"[group=0001 type=0002 params=]","0381_0":"Flower","0381_1":"[group=0001 type=0002 params=]","0382_0":"Heat Hater","0382_1":"[group=0001 type=0002 params=]","0383_0":"Snowperson","0383_1":"[group=0001 type=0002 params=]","0384_0":"Firecracker","0384_1":"[group=0001 type=0002 params=]","0385_0":"Eye of the Storm","0385_1":"[group=0001 type=0002 params=]","0386_0":"Fish","0386_1":"[group=0001 type=0002 params=]","0387_0":"Deity of Destruction","0387_1":"[group=0001 type=0002 params=]","0388_0":"Dog","0388_1":"[group=0001 type=0002 params=]","0389_0":"Dragon","0389_1":"[group=0001 type=0002 params=]","0390_0":"Cat","0390_1":"[group=0001 type=0002 params=]","0391_0":"Dinosaur","0391_1":"[group=0001 type=0002 params=]","0392_0":"Cephalopod","0392_1":"[group=0001 type=0002 params=]","0393_0":"Bivalve","0393_1":"[group=0001 type=0002 params=]","0394_0":"Dolphin","0394_1":"[group=0001 type=0002 params=]","0395_0":"Bookworm","0395_1":"[group=0001 type=0002 params=]","0396_0":"CEO","0396_1":"[group=0001 type=0002 params=]","0397_0":"Assistant","0397_1":"[group=0001 type=0002 params=]","0398_0":"Athlete","0398_1":"[group=0001 type=0002 params=]","0399_0":"Agent","0399_1":"[group=0001 type=0002 params=]","0400_0":"Risk-Taker","0400_1":"[group=0001 type=0002 params=]","0401_0":"Coach","0401_1":"[group=0001 type=0002 params=]","0402_0":"Coordinator","0402_1":"[group=0001 type=0002 params=]","0403_0":"Comedian","0403_1":"[group=0001 type=0002 params=]","0404_0":"Scientist","0404_1":"[group=0001 type=0002 params=]","0405_0":"Samurai","0405_1":"[group=0001 type=0002 params=]","0406_0":"Spy","0406_1":"[group=0001 type=0002 params=]","0407_0":"Dancer","0407_1":"[group=0001 type=0002 params=]","0408_0":"Designer","0408_1":"[group=0001 type=0002 params=]","0409_0":"Ninja","0409_1":"[group=0001 type=0002 params=]","0411_0":"Part-Timer","0411_1":"[group=0001 type=0002 params=]","0412_0":"Pilot","0412_1":"[group=0001 type=0002 params=]","0413_0":"Hunter","0413_1":"[group=0001 type=0002 params=]","0415_0":"Planner","0415_1":"[group=0001 type=0002 params=]","0416_0":"Programmer","0416_1":"[group=0001 type=0002 params=]","0417_0":"Producer","0417_1":"[group=0001 type=0002 params=]","0418_0":"Painter","0418_1":"[group=0001 type=0002 params=]","0419_0":"Manager","0419_1":"[group=0001 type=0002 params=]","0420_0":"Model","0420_1":"[group=0001 type=0002 params=]","0421_0":"Writer","0421_1":"[group=0001 type=0002 params=]","0422_0":"Executive","0422_1":"[group=0001 type=0002 params=]","0423_0":"Astronaut","0423_1":"[group=0001 type=0002 params=]","0424_0":"Singer","0424_1":"[group=0001 type=0002 params=]","0425_0":"President","0425_1":"[group=0001 type=0002 params=]","0426_0":"Viking","0426_1":"[group=0001 type=0002 params=]","0428_0":"Student","0428_1":"[group=0001 type=0002 params=]","0429_0":"Director","0429_1":"[group=0001 type=0002 params=]","0430_0":"Lead","0430_1":"[group=0001 type=0002 params=]","0431_0":"Angler","0431_1":"[group=0001 type=0002 params=]","0432_0":"Assistant Manager","0432_1":"[group=0001 type=0002 params=]","0433_0":"Security Guard","0433_1":"[group=0001 type=0002 params=]","0434_0":"Researcher","0434_1":"[group=0001 type=0002 params=]","0437_0":"Author","0437_1":"[group=0001 type=0002 params=]","0439_0":"Worker","0439_1":"[group=0001 type=0002 params=]","0440_0":"Butler","0440_1":"[group=0001 type=0002 params=]","0441_0":"VP","0441_1":"[group=0001 type=0002 params=]","0442_0":"Board Member","0442_1":"[group=0001 type=0002 params=]","0443_0":"Gofer","0443_1":"[group=0001 type=0002 params=]","0444_0":"Artisan","0444_1":"[group=0001 type=0002 params=]","0445_0":"Teacher","0445_1":"[group=0001 type=0002 params=]","0446_0":"Village Leader","0446_1":"[group=0001 type=0002 params=]","0447_0":"Head Honcho","0447_1":"[group=0001 type=0002 params=]","0448_0":"Detective","0448_1":"[group=0001 type=0002 params=]","0449_0":"Mountaineer","0449_1":"[group=0001 type=0002 params=]","0450_0":"Professor","0450_1":"[group=0001 type=0002 params=]","0451_0":"Secretary","0451_1":"[group=0001 type=0002 params=]","0452_0":"Beautician","0452_1":"[group=0001 type=0002 params=]","0453_0":"Middle Manager","0453_1":"[group=0001 type=0002 params=]","0454_0":"Vice President","0454_1":"[group=0001 type=0002 params=]","0455_0":"Adventurer","0455_1":"[group=0001 type=0002 params=]","0456_0":"Comic Artist","0456_1":"[group=0001 type=0002 params=]","0458_0":"Hero","0458_1":"[group=0001 type=0002 params=]","0459_0":"Chef","0459_1":"[group=0001 type=0002 params=]","0460_0":"Layabout","0460_1":"[group=0001 type=0002 params=]","0461_0":"Big Mouth","0461_1":"[group=0001 type=0002 params=]","0463_0":"Chow Hound","0463_1":"[group=0001 type=0002 params=]","0464_0":"Dynamo","0464_1":"[group=0001 type=0002 params=]","0465_0":"Hothead","0465_1":"[group=0001 type=0002 params=]","0466_0":"Octoling Soldier","0466_1":"[group=0001 type=0002 params=]","0467_0":"Power Egg","0467_1":"[group=0001 type=0002 params=]","0468_0":"Villain","0468_1":"[group=0001 type=0002 params=]","0469_0":"Fam","0469_1":"[group=0001 type=0002 params=]","0470_0":"Turtle","0470_1":"[group=0001 type=0002 params=]","0471_0":"Form","0471_1":"[group=0001 type=0002 params=]","0472_0":"Knight","0472_1":"[group=0001 type=0002 params=]","0473_0":"Egg","0473_1":"[group=0001 type=0002 params=]","0474_0":"Entertainer","0474_1":"[group=0001 type=0002 params=]","0475_0":"Comrade","0475_1":"[group=0001 type=0002 params=]","0476_0":"Superhero","0476_1":"[group=0001 type=0002 params=]","0477_0":"Jokester","0477_1":"[group=0001 type=0002 params=]","0478_0":"Magician","0478_1":"[group=0001 type=0002 params=]","0479_0":"Brainiac","0479_1":"[group=0001 type=0002 params=]","0480_0":"Fish Ball","0480_1":"[group=0001 type=0002 params=]","0481_0":"Material","0481_1":"[group=0001 type=0002 params=]","0482_0":"Sushi","0482_1":"[group=0001 type=0002 params=]","0483_0":"Caller","0483_1":"[group=0001 type=0002 params=]","0484_0":"Seafood","0484_1":"[group=0001 type=0002 params=]","0485_0":"Mincemeat","0485_1":"[group=0001 type=0002 params=]","0486_0":"Squid Jerky","0486_1":"[group=0001 type=0002 params=]","0487_0":"Booyah","0487_1":"[group=0001 type=0002 params=]","0488_0":"Vitamin","0488_1":"[group=0001 type=0002 params=]","0489_0":"Weapon","0489_1":"[group=0001 type=0002 params=]","0491_0":"Dried Fish","0491_1":"[group=0001 type=0002 params=]","0492_0":"Muscle","0492_1":"[group=0001 type=0002 params=]","0493_0":"Illusion","0493_1":"[group=0001 type=0002 params=]","0494_0":"Shield","0494_1":"[group=0001 type=0002 params=]","0495_0":"Leader","0495_1":"[group=0001 type=0002 params=]","0496_0":"Viewer","0496_1":"[group=0001 type=0002 params=]","0498_0":"System","0498_1":"[group=0001 type=0002 params=]","0499_0":"Tournament Competitor","0499_1":"[group=0001 type=0002 params=]","0500_0":"Agent 1","0500_1":"[group=0001 type=0002 params=]","0501_0":"Agent 2","0501_1":"[group=0001 type=0002 params=]","0502_0":"Agent 4","0502_1":"[group=0001 type=0002 params=]","0503_0":"Agent 8","0503_1":"[group=0001 type=0002 params=]","0504_0":"AI","0504_1":"[group=0001 type=0002 params=]","0505_0":"Object of Affection","0505_1":"[group=0001 type=0002 params=]","0507_0":"Such and Such","0507_1":"[group=0001 type=0002 params=]","0508_0":"Outlaw","0508_1":"[group=0001 type=0002 params=]","0509_0":"Heel","0509_1":"[group=0001 type=0002 params=]","0510_0":"Tabletop Gamer","0510_1":"[group=0001 type=0002 params=]","0511_0":"Android","0511_1":"[group=0001 type=0002 params=]","0512_0":"Legend","0512_1":"[group=0001 type=0002 params=]","0513_0":"Squid Ink","0513_1":"[group=0001 type=0002 params=]","0514_0":"Squid Life","0514_1":"[group=0001 type=0002 params=]","0515_0":"Squid Ring","0515_1":"[group=0001 type=0002 params=]","0516_0":"Squid, Inc.","0516_1":"[group=0001 type=0002 params=]","0517_0":"Ink","0517_1":"[group=0001 type=0002 params=]","0518_0":"Influencer","0518_1":"[group=0001 type=0002 params=]","0519_0":"Moray Eel","0519_1":"[group=0001 type=0002 params=]","0520_0":"Elegance","0520_1":"[group=0001 type=0002 params=]","0521_0":"Big Deal","0521_1":"[group=0001 type=0002 params=]","0522_0":"Big Boss","0522_1":"[group=0001 type=0002 params=]","0523_0":"Otaku","0523_1":"[group=0001 type=0002 params=]","0524_0":"Dance Master","0524_1":"[group=0001 type=0002 params=]","0525_0":"Freebie","0525_1":"[group=0001 type=0002 params=]","0526_0":"Kid","0526_1":"[group=0001 type=0002 params=]","0528_0":"Pack Leader","0528_1":"[group=0001 type=0002 params=]","0529_0":"Photographer","0529_1":"[group=0001 type=0002 params=]","0530_0":"Fried Chicken","0530_1":"[group=0001 type=0002 params=]","0531_0":"Extrovert","0531_1":"[group=0001 type=0002 params=]","0532_0":"Carpaccio","0532_1":"[group=0001 type=0002 params=]","0533_0":"Synth Player","0533_1":"[group=0001 type=0002 params=]","0534_0":"Guitarist","0534_1":"[group=0001 type=0002 params=]","0535_0":"Camper","0535_1":"[group=0001 type=0002 params=]","0536_0":"Cupid","0536_1":"[group=0001 type=0002 params=]","0537_0":"Crab","0537_1":"[group=0001 type=0002 params=]","0538_0":"Creator","0538_1":"[group=0001 type=0002 params=]","0539_0":"Groove","0539_1":"[group=0001 type=0002 params=]","0540_0":"Gamer","0540_1":"[group=0001 type=0002 params=]","0541_0":"Ultimate Weapon","0541_1":"[group=0001 type=0002 params=]","0543_0":"Survivalist","0543_1":"[group=0001 type=0002 params=]","0544_0":"Iconoclast","0544_1":"[group=0001 type=0002 params=]","0545_0":"Supporter","0545_1":"[group=0001 type=0002 params=]","0546_0":"Shark","0546_1":"[group=0001 type=0002 params=]","0547_0":"Salmon Life","0547_1":"[group=0001 type=0002 params=]","0548_0":"Swimmer","0548_1":"[group=0001 type=0002 params=]","0549_0":"Style","0549_1":"[group=0001 type=0002 params=]","0550_0":"Striker","0550_1":"[group=0001 type=0002 params=]","0551_0":"Streamer","0551_1":"[group=0001 type=0002 params=]","0552_0":"Gelatin","0552_1":"[group=0001 type=0002 params=]","0553_0":"Celeb","0553_1":"[group=0001 type=0002 params=]","0554_0":"Taste Tester","0554_1":"[group=0001 type=0002 params=]","0555_0":"Title Holder","0555_1":"[group=0001 type=0002 params=]","0556_0":"Octopus Ink","0556_1":"[group=0001 type=0002 params=]","0557_0":"Octo Life","0557_1":"[group=0001 type=0002 params=]","0558_0":"Tuna Tataki","0558_1":"[group=0001 type=0002 params=]","0559_0":"Challenger","0559_1":"[group=0001 type=0002 params=]","0561_0":"Butterfingers","0561_1":"[group=0001 type=0002 params=]","0562_0":"Driver","0562_1":"[group=0001 type=0002 params=]","0563_0":"Drummer","0563_1":"[group=0001 type=0002 params=]","0564_0":"Tornado","0564_1":"[group=0001 type=0002 params=]","0565_0":"Trainer","0565_1":"[group=0001 type=0002 params=]","0566_0":"Party Animal","0566_1":"[group=0001 type=0002 params=]","0567_0":"Polyglot","0567_1":"[group=0001 type=0002 params=]","0568_0":"Rebel","0568_1":"[group=0001 type=0002 params=]","0569_0":"Workhorse","0569_1":"[group=0001 type=0002 params=]","0570_0":"Introvert","0570_1":"[group=0001 type=0002 params=]","0571_0":"Clubgoer","0571_1":"[group=0001 type=0002 params=]","0572_0":"Stand-Up Comic","0572_1":"[group=0001 type=0002 params=]","0573_0":"Fighter","0573_1":"[group=0001 type=0002 params=]","0574_0":"Mirage","0574_1":"[group=0001 type=0002 params=]","0576_0":"Plankton","0576_1":"[group=0001 type=0002 params=]","0577_0":"Brand Loyalist","0577_1":"[group=0001 type=0002 params=]","0578_0":"Freelancer","0578_1":"[group=0001 type=0002 params=]","0579_0":"Snowstorm","0579_1":"[group=0001 type=0002 params=]","0581_0":"Friend","0581_1":"[group=0001 type=0002 params=]","0582_0":"Headliner","0582_1":"[group=0001 type=0002 params=]","0583_0":"Senior","0583_1":"[group=0001 type=0002 params=]","0584_0":"Vocalist","0584_1":"[group=0001 type=0002 params=]","0585_0":"Board Gamer","0585_1":"[group=0001 type=0002 params=]","0586_0":"Boss","0586_1":"[group=0001 type=0002 params=]","0588_0":"Bodyguard","0588_1":"[group=0001 type=0002 params=]","0589_0":"Mermaid","0589_1":"[group=0001 type=0002 params=]","0590_0":"Mask","0590_1":"[group=0001 type=0002 params=]","0591_0":"Superstar","0591_1":"[group=0001 type=0002 params=]","0592_0":"Maniac","0592_1":"[group=0001 type=0002 params=]","0593_0":"Mystery","0593_1":"[group=0001 type=0002 params=]","0595_0":"Bifocal Wearer","0595_1":"[group=0001 type=0002 params=]","0596_0":"Therapist","0596_1":"[group=0001 type=0002 params=]","0597_0":"Member","0597_1":"[group=0001 type=0002 params=]","0598_0":"Lifestyle","0598_1":"[group=0001 type=0002 params=]","0599_0":"Rapper","0599_1":"[group=0001 type=0002 params=]","0600_0":"Remote Worker","0600_1":"[group=0001 type=0002 params=]","0601_0":"Rookie","0601_1":"[group=0001 type=0002 params=]","0602_0":"Robot","0602_1":"[group=0001 type=0002 params=]","0603_0":"Enthusiast","0603_1":"[group=0001 type=0002 params=]","0605_0":"Ordinary Person","0605_1":"[group=0001 type=0002 params=]","0606_0":"Lone Wolf","0606_1":"[group=0001 type=0002 params=]","0607_0":"Pauper","0607_1":"[group=0001 type=0002 params=]","0608_0":"Prodigy","0608_1":"[group=0001 type=0002 params=]","0610_0":"Monarch","0610_1":"[group=0001 type=0002 params=]","0611_0":"Hot-Spring Enjoyer","0611_1":"[group=0001 type=0002 params=]","0613_0":"Fish Finder","0613_1":"[group=0001 type=0002 params=]","0614_0":"Saltwater Fish","0614_1":"[group=0001 type=0002 params=]","0615_0":"Umibozu","0615_1":"[group=0001 type=0002 params=]","0616_0":"Cold Chill","0616_1":"[group=0001 type=0002 params=]","0617_0":"Sightseer","0617_1":"[group=0001 type=0002 params=]","0618_0":"Prime Cut","0618_1":"[group=0001 type=0002 params=]","0619_0":"Mood","0619_1":"[group=0001 type=0002 params=]","0620_0":"Memory","0620_1":"[group=0001 type=0002 params=]","0621_0":"Demon","0621_1":"[group=0001 type=0002 params=]","0622_0":"Giant","0622_1":"[group=0001 type=0002 params=]","0623_0":"Fish Print","0623_1":"[group=0001 type=0002 params=]","0625_0":"Mirror","0625_1":"[group=0001 type=0002 params=]","0626_0":"Avocado Roll","0626_1":"[group=0001 type=0002 params=]","0627_0":"Moon","0627_1":"[group=0001 type=0002 params=]","0628_0":"Fist","0628_1":"[group=0001 type=0002 params=]","0629_0":"Caveman","0629_1":"[group=0001 type=0002 params=]","0630_0":"Expert","0630_1":"[group=0001 type=0002 params=]","0631_0":"Novice","0631_1":"[group=0001 type=0002 params=]","0632_0":"Foreman","0632_1":"[group=0001 type=0002 params=]","0633_0":"Ruffian","0633_1":"[group=0001 type=0002 params=]","0634_0":"Comic Relief","0634_1":"[group=0001 type=0002 params=]","0635_0":"Adviser","0635_1":"[group=0001 type=0002 params=]","0636_0":"Sashimi","0636_1":"[group=0001 type=0002 params=]","0637_0":"Legendary Warrior","0637_1":"[group=0001 type=0002 params=]","0638_0":"Underling","0638_1":"[group=0001 type=0002 params=]","0639_0":"Sensei","0639_1":"[group=0001 type=0002 params=]","0641_0":"Free Spirit","0641_1":"[group=0001 type=0002 params=]","0642_0":"Sidekick","0642_1":"[group=0001 type=0002 params=]","0643_0":"Fledgling","0643_1":"[group=0001 type=0002 params=]","0644_0":"Employee","0644_1":"[group=0001 type=0002 params=]","0645_0":"Grease","0645_1":"[group=0001 type=0002 params=]","0646_0":"Beginner","0646_1":"[group=0001 type=0002 params=]","0647_0":"Imp","0647_1":"[group=0001 type=0002 params=]","0648_0":"Higher-Up","0648_1":"[group=0001 type=0002 params=]","0649_0":"Trainee","0649_1":"[group=0001 type=0002 params=]","0650_0":"Rookie of the Year","0650_1":"[group=0001 type=0002 params=]","0651_0":"Freshman","0651_1":"[group=0001 type=0002 params=]","0652_0":"Truth Teller","0652_1":"[group=0001 type=0002 params=]","0653_0":"Kingpin","0653_1":"[group=0001 type=0002 params=]","0654_1":"[group=0001 type=0002 params=]","0655_0":"Life of the Party","0655_1":"[group=0001 type=0002 params=]","0657_0":"Wallflower","0657_1":"[group=0001 type=0002 params=]","0658_0":"Life Itself","0658_1":"[group=0001 type=0002 params=]","0659_0":"Humanity","0659_1":"[group=0001 type=0002 params=]","0660_0":"Supervisor","0660_1":"[group=0001 type=0002 params=]","0661_0":"Fillet","0661_1":"[group=0001 type=0002 params=]","0662_0":"Inkantation","0662_1":"[group=0001 type=0002 params=]","0663_0":"Penny-Pincher","0663_1":"[group=0001 type=0002 params=]","0664_0":"Mountaintop Guru","0664_1":"[group=0001 type=0002 params=]","0665_0":"Mentor","0665_1":"[group=0001 type=0002 params=]","0666_0":"Warrior","0666_1":"[group=0001 type=0002 params=]","0667_0":"Berserker","0667_1":"[group=0001 type=0002 params=]","0668_0":"Blade of Grass","0668_1":"[group=0001 type=0002 params=]","0669_0":"Entity","0669_1":"[group=0001 type=0002 params=]","0670_0":"Sun","0670_1":"[group=0001 type=0002 params=]","0671_0":"Representative","0671_1":"[group=0001 type=0002 params=]","0672_0":"Cabinet Member","0672_1":"[group=0001 type=0002 params=]","0673_0":"Freshwater Fish","0673_1":"[group=0001 type=0002 params=]","0674_0":"Group Member","0674_1":"[group=0001 type=0002 params=]","0675_0":"Style Icon","0675_1":"[group=0001 type=0002 params=]","0676_0":"Bug","0676_1":"[group=0001 type=0002 params=]","0677_0":"Contender","0677_1":"[group=0001 type=0002 params=]","0678_0":"Bird","0678_1":"[group=0001 type=0002 params=]","0679_0":"Stan","0679_1":"[group=0001 type=0002 params=]","0680_0":"Fisherfolk","0680_1":"[group=0001 type=0002 params=]","0681_0":"Apprentice","0681_1":"[group=0001 type=0002 params=]","0682_0":"Target","0682_1":"[group=0001 type=0002 params=]","0683_0":"Maestro","0683_1":"[group=0001 type=0002 params=]","0684_0":"Angel","0684_1":"[group=0001 type=0002 params=]","0685_0":"Island Dweller","0685_1":"[group=0001 type=0002 params=]","0686_0":"Tofu","0686_1":"[group=0001 type=0002 params=]","0687_0":"Forehead","0687_1":"[group=0001 type=0002 params=]","0689_0":"Plumber","0689_1":"[group=0001 type=0002 params=]","0690_0":"Content Creator","0690_1":"[group=0001 type=0002 params=]","0691_0":"Merperson","0691_1":"[group=0001 type=0002 params=]","0692_0":"Sidestepper","0692_1":"[group=0001 type=0002 params=]","0693_0":"Flotsam","0693_1":"[group=0001 type=0002 params=]","0694_0":"Subordinate","0694_1":"[group=0001 type=0002 params=]","0695_0":"Wall","0695_1":"[group=0001 type=0002 params=]","0696_0":"Predator","0696_1":"[group=0001 type=0002 params=]","0697_0":"Equation","0697_1":"[group=0001 type=0002 params=]","0698_0":"Archdemon","0698_1":"[group=0001 type=0002 params=]","0699_0":"Pro","0699_1":"[group=0001 type=0002 params=]","0700_0":"Life","0700_1":"[group=0001 type=0002 params=]","0701_0":"Fuzzball","0701_1":"[group=0001 type=0002 params=]","0702_0":"Actor","0702_1":"[group=0001 type=0002 params=]","0703_0":"Ghost","0703_1":"[group=0001 type=0002 params=]","0705_0":"Atlantean","0705_1":"[group=0001 type=0002 params=]","0706_0":"Teardrop","0706_1":"[group=0001 type=0002 params=]","0707_0":"Ronin","0707_1":"[group=0001 type=0002 params=]","0709_0":"Rice Bowl","0709_1":"[group=0001 type=0002 params=]","0710_0":"Outfit","0710_1":"[group=0001 type=0002 params=]","0711_0":"Palette","0711_1":"[group=0001 type=0002 params=]","0713_0":"Snacks","0713_1":"[group=0001 type=0002 params=]","0714_0":"Follower","0714_1":"[group=0001 type=0002 params=]","0715_0":"Marinade","0715_1":"[group=0001 type=0002 params=]","0716_0":"Switch-Hitter","0716_1":"[group=0001 type=0002 params=]","0717_0":"Stir-Fry","0717_1":"[group=0001 type=0002 params=]","0718_0":"Catfish","0718_1":"[group=0001 type=0002 params=]","0719_0":"Grand Master","0719_1":"[group=0001 type=0002 params=]","0720_0":"Cub","0720_1":"[group=0001 type=0002 params=]","0721_0":"DJ","0721_1":"[group=0001 type=0002 params=]","0722_0":"Paradigm","0722_1":"[group=0001 type=0002 params=]","0723_0":"Geek","0723_1":"[group=0001 type=0002 params=]","0724_0":"Head","0724_1":"[group=0001 type=0002 params=]","0725_0":"Fit","0725_1":"[group=0001 type=0002 params=]","0727_0":"B-Boy","0727_1":"B-Girl","0728_0":"Skater","0728_1":"[group=0001 type=0002 params=]","0729_0":"Duke","0729_1":"Duchess","0730_0":"Celebrity","0730_1":"[group=0001 type=0002 params=]","0731_0":"Mariner","0731_1":"[group=0001 type=0002 params=]","0732_0":"Fashion Designer","0732_1":"[group=0001 type=0002 params=]","0733_0":"Commander","0733_1":"[group=0001 type=0002 params=]","0734_0":"Store Manager","0734_1":"[group=0001 type=0002 params=]","0735_0":"Patron","0735_1":"[group=0001 type=0002 params=]","0736_0":"Sparkler","0736_1":"[group=0001 type=0002 params=]","0737_0":"Fantasy Lover","0737_1":"[group=0001 type=0002 params=]","0739_0":"Horrorboros","0739_1":"[group=0001 type=0002 params=]","0740_0":"Cohozuna","0740_1":"[group=0001 type=0002 params=]","0741_0":"Float","0741_1":"[group=0001 type=0002 params=]","0742_0":"Nuance","0742_1":"[group=0001 type=0002 params=]","0743_0":"Alien","0743_1":"[group=0001 type=0002 params=]","0744_0":"Newcomer","0744_1":"[group=0001 type=0002 params=]","0745_0":"Hope","0745_1":"[group=0001 type=0002 params=]","0746_0":"MC","0746_1":"[group=0001 type=0002 params=]","0747_0":"Special Attack","0747_1":"[group=0001 type=0002 params=]","0748_0":"Special Space","0748_1":"[group=0001 type=0002 params=]","0749_0":"Ranker","0749_1":"[group=0001 type=0002 params=]","0750_0":"Ace in the Hole","0750_1":"[group=0001 type=0002 params=]","0751_0":"Deck","0751_1":"[group=0001 type=0002 params=]","0752_0":"Hole Cards","0752_1":"[group=0001 type=0002 params=]","0753_0":"Test Taker","0753_1":"[group=0001 type=0002 params=]","0754_0":"Personnel","0754_1":"[group=0001 type=0002 params=]","0755_0":"Philosopher","0755_1":"[group=0001 type=0002 params=]","0756_0":"One-Hit Wonder","0756_1":"[group=0001 type=0002 params=]","0757_0":"Organization","0757_1":"[group=0001 type=0002 params=]","0758_0":"Sleeve Collector","0758_1":"[group=0001 type=0002 params=]","0759_0":"Rock Climber","0759_1":"[group=0001 type=0002 params=]","0760_0":"Bungee Jumper","0760_1":"[group=0001 type=0002 params=]","0761_0":"Soliloquy","0761_1":"[group=0001 type=0002 params=]","0762_0":"Sea-Cucumber Phone","0762_1":"[group=0001 type=0002 params=]","0763_0":"Ripple","0763_1":"[group=0001 type=0002 params=]","0764_0":"Salt","0764_1":"[group=0001 type=0002 params=]","0765_0":"Pepper","0765_1":"[group=0001 type=0002 params=]","0766_0":"Mayonnaise","0766_1":"[group=0001 type=0002 params=]","0767_0":"Seasoning","0767_1":"[group=0001 type=0002 params=]","0768_0":"Value","0768_1":"[group=0001 type=0002 params=]","0769_0":"Time Killer","0769_1":"[group=0001 type=0002 params=]","0770_0":"Clump","0770_1":"[group=0001 type=0002 params=]","0771_0":"Repeat Customer","0771_1":"[group=0001 type=0002 params=]","0772_0":"Mushroom","0772_1":"[group=0001 type=0002 params=]","0773_0":"Star","0773_1":"[group=0001 type=0002 params=]","0774_0":"Talented Person","0774_1":"[group=0001 type=0002 params=]","0775_0":"Superperson","0775_1":"[group=0001 type=0002 params=]","0776_0":"Seaweed","0776_1":"[group=0001 type=0002 params=]","0777_0":"Kelp","0777_1":"[group=0001 type=0002 params=]","0778_0":"Marine Snow","0778_1":"[group=0001 type=0002 params=]","0779_0":"Bento Box","0779_1":"[group=0001 type=0002 params=]","0780_0":"Fish Eggs","0780_1":"[group=0001 type=0002 params=]","0781_0":"Stew","0781_1":"[group=0001 type=0002 params=]","0782_0":"Simmered Food","0782_1":"[group=0001 type=0002 params=]","0783_0":"Prix Fixe","0783_1":"[group=0001 type=0002 params=]","0784_0":"Curry","0784_1":"[group=0001 type=0002 params=]","0786_0":"Aficionado","0786_1":"[group=0001 type=0002 params=]","0787_0":"Information","0787_1":"[group=0001 type=0002 params=]","0789_0":"Heart Valve","0789_1":"[group=0001 type=0002 params=]","0790_0":"Heart","0790_1":"[group=0001 type=0002 params=]","0791_0":"Rock","0791_1":"[group=0001 type=0002 params=]","0792_0":"Jazz","0792_1":"[group=0001 type=0002 params=]","0793_0":"Solo","0793_1":"[group=0001 type=0002 params=]","0794_0":"Soup Stock","0794_1":"[group=0001 type=0002 params=]","0795_0":"Soup","0795_1":"[group=0001 type=0002 params=]","0796_0":"Salad","0796_1":"[group=0001 type=0002 params=]","0798_0":"Champion","0798_1":"[group=0001 type=0002 params=]","0800_0":"Rice Ball","0800_1":"[group=0001 type=0002 params=]","0801_0":"Paradox","0801_1":"[group=0001 type=0002 params=]","0804_0":"Dressing","0804_1":"[group=0001 type=0002 params=]","0805_0":"Sauce","0805_1":"[group=0001 type=0002 params=]","0806_0":"Spice","0806_1":"[group=0001 type=0002 params=]","0807_0":"Specialist","0807_1":"[group=0001 type=0002 params=]","0808_0":"Specialty Shop","0808_1":"[group=0001 type=0002 params=]","0809_0":"Bandleader","0809_1":"[group=0001 type=0002 params=]","0810_0":"Runner","0810_1":"[group=0001 type=0002 params=]","0811_0":"Speedrun","0811_1":"[group=0001 type=0002 params=]","0812_0":"Jukebox","0812_1":"[group=0001 type=0002 params=]","0813_0":"Demigod","0813_1":"[group=0001 type=0002 params=]","0814_0":"Laugh","0814_1":"[group=0001 type=0002 params=]","0815_0":"Theme Park","0815_1":"[group=0001 type=0002 params=]","0816_0":"Hairstyle","0816_1":"[group=0001 type=0002 params=]","0818_0":"Encore","0818_1":"[group=0001 type=0002 params=]","0820_0":"Settler","0820_1":"[group=0001 type=0002 params=]","0821_0":"Storm","0821_1":"[group=0001 type=0002 params=]","0822_0":"Breeze","0822_1":"[group=0001 type=0002 params=]","0824_0":"Observer","0824_1":"[group=0001 type=0002 params=]","0825_0":"Right Arm","0825_1":"[group=0001 type=0002 params=]","0828_0":"Sea Urchin","0828_1":"[group=0001 type=0002 params=]","0833_0":"Piano","0833_1":"[group=0001 type=0002 params=]","0834_0":"Guitar","0834_1":"[group=0001 type=0002 params=]","0835_0":"Keyboard","0835_1":"[group=0001 type=0002 params=]","0836_0":"Drum","0836_1":"[group=0001 type=0002 params=]","0837_0":"Castanet","0837_1":"[group=0001 type=0002 params=]","0838_0":"Recorder","0838_1":"[group=0001 type=0002 params=]","0839_0":"Cymbals","0839_1":"[group=0001 type=0002 params=]","0840_0":"Musical Instrument","0840_1":"[group=0001 type=0002 params=]","0841_0":"Prime Minister","0841_1":"[group=0001 type=0002 params=]","0842_0":"Project Manager","0842_1":"[group=0001 type=0002 params=]","0843_0":"Physician","0843_1":"[group=0001 type=0002 params=]","0844_0":"Lawyer","0844_1":"[group=0001 type=0002 params=]","0845_0":"Accountant","0845_1":"[group=0001 type=0002 params=]","0846_0":"Bodybuilder","0846_1":"[group=0001 type=0002 params=]","0847_0":"Lad","0847_1":"Lass","0848_0":"Base","0848_1":"[group=0001 type=0002 params=]","0849_0":"Samba","0849_1":"[group=0001 type=0002 params=]","0850_0":"Macho","0850_1":"[group=0001 type=0002 params=]","0851_0":"Cool Guy","0851_1":"[group=0001 type=0002 params=]","0854_0":"Thespian","0854_1":"[group=0001 type=0002 params=]","0855_0":"Hard Worker","0855_1":"[group=0001 type=0002 params=]","0857_0":"Ship Captain","0857_1":"[group=0001 type=0002 params=]","0858_0":"Chaperone","0858_1":"[group=0001 type=0002 params=]","0859_0":"Time Traveler","0859_1":"[group=0001 type=0002 params=]","0860_0":"Pudding","0860_1":"[group=0001 type=0002 params=]","0861_0":"Counterfeit","0861_1":"[group=0001 type=0002 params=]","0862_0":"Alter Ego","0862_1":"[group=0001 type=0002 params=]","0863_0":"Griller","0863_1":"[group=0001 type=0002 params=]","0864_0":"Smallfry","0864_1":"[group=0001 type=0002 params=]","0866_0":"Cohock","0866_1":"[group=0001 type=0002 params=]","0867_0":"Snatcher","0867_1":"[group=0001 type=0002 params=]","0868_0":"Steelhead","0868_1":"[group=0001 type=0002 params=]","0869_0":"Steel Eel","0869_1":"[group=0001 type=0002 params=]","0870_0":"Scrapper","0870_1":"[group=0001 type=0002 params=]","0871_0":"Stinger","0871_1":"[group=0001 type=0002 params=]","0872_0":"Maws","0872_1":"[group=0001 type=0002 params=]","0873_0":"Drizzler","0873_1":"[group=0001 type=0002 params=]","0874_0":"Flyfish","0874_1":"[group=0001 type=0002 params=]","0875_0":"Fish Stick","0875_1":"[group=0001 type=0002 params=]","0876_0":"Flipper-Flopper","0876_1":"[group=0001 type=0002 params=]","0877_0":"Slammin' Lid","0877_1":"[group=0001 type=0002 params=]","0878_0":"Big Shot","0878_1":"[group=0001 type=0002 params=]","0879_0":"Goldie","0879_1":"[group=0001 type=0002 params=]","0880_0":"Mothership","0880_1":"[group=0001 type=0002 params=]","0881_0":"Mudmouth","0881_1":"[group=0001 type=0002 params=]","0882_0":"Glowfly","0882_1":"[group=0001 type=0002 params=]","0883_0":"Rank","0883_1":"[group=0001 type=0002 params=]","0884_0":"Romanticist","0884_1":"[group=0001 type=0002 params=]","0885_0":"Steel Body","0885_1":"[group=0001 type=0002 params=]","0886_0":"Flavor","0886_1":"[group=0001 type=0002 params=]","0887_0":"Elite","0887_1":"[group=0001 type=0002 params=]","0888_0":"Determined Spirit","0888_1":"[group=0001 type=0002 params=]","0889_0":"Person of Influence","0889_1":"[group=0001 type=0002 params=]","0890_0":"Trailblazer","0890_1":"[group=0001 type=0002 params=]","0891_0":"Cast","0891_1":"[group=0001 type=0002 params=]","0892_0":"Ace","0892_1":"[group=0001 type=0002 params=]","0893_0":"Number One","0893_1":"[group=0001 type=0002 params=]","0894_0":"Foremost Figure","0894_1":"[group=0001 type=0002 params=]","0895_0":"Mainstay","0895_1":"[group=0001 type=0002 params=]","0896_0":"Emperor","0896_1":"[group=0001 type=0002 params=]","0897_0":"Paragon","0897_1":"[group=0001 type=0002 params=]","0898_0":"Intermediary","0898_1":"[group=0001 type=0002 params=]","0899_0":"Prototype","0899_1":"[group=0001 type=0002 params=]","0900_0":"Schemer","0900_1":"[group=0001 type=0002 params=]","0901_0":"Brave Warrior","0901_1":"[group=0001 type=0002 params=]","0902_0":"Person of Culture","0902_1":"[group=0001 type=0002 params=]","0903_0":"Honor Student","0903_1":"[group=0001 type=0002 params=]","0904_0":"Brain","0904_1":"[group=0001 type=0002 params=]","0905_0":"Trapper","0905_1":"[group=0001 type=0002 params=]","0906_0":"Intellectual","0906_1":"[group=0001 type=0002 params=]","0907_0":"Impractical Theory","0907_1":"[group=0001 type=0002 params=]","0908_0":"Dislike","0908_1":"[group=0001 type=0002 params=]","0909_0":"Meister","0909_1":"[group=0001 type=0002 params=]","0910_0":"Governor","0910_1":"[group=0001 type=0002 params=]","0911_0":"Office Chief","0911_1":"[group=0001 type=0002 params=]","0912_0":"Caretaker","0912_1":"[group=0001 type=0002 params=]","0913_0":"Bank President","0913_1":"[group=0001 type=0002 params=]","0914_0":"Harlequin","0914_1":"[group=0001 type=0002 params=]","0915_0":"Focal Point","0915_1":"[group=0001 type=0002 params=]","0916_0":"Event Organizer","0916_1":"[group=0001 type=0002 params=]","0917_0":"VIP","0917_1":"[group=0001 type=0002 params=]","0918_0":"Performer","0918_1":"[group=0001 type=0002 params=]","0919_0":"Woodcutter","0919_1":"[group=0001 type=0002 params=]","0920_0":"Sous-Chef","0920_1":"[group=0001 type=0002 params=]","0921_0":"Engineer","0921_1":"[group=0001 type=0002 params=]","0922_0":"Contractor","0922_1":"[group=0001 type=0002 params=]","0923_0":"Prosperous Merchant","0923_1":"[group=0001 type=0002 params=]","0924_0":"Referee","0924_1":"[group=0001 type=0002 params=]","0925_0":"Manila Clam","0925_1":"[group=0001 type=0002 params=]","0926_0":"Concierge","0926_1":"[group=0001 type=0002 params=]","0928_0":"Tentacle","0928_1":"[group=0001 type=0002 params=]","0929_0":"Noble","0929_1":"[group=0001 type=0002 params=]","0930_0":"Temp","0930_1":"[group=0001 type=0002 params=]","0931_0":"Prankster","0931_1":"[group=0001 type=0002 params=]","0932_0":"Great Regent","0932_1":"[group=0001 type=0002 params=]","0933_0":"Main Character","0933_1":"[group=0001 type=0002 params=]","0934_0":"Leading Actor","0934_1":"Leading Actress","0935_0":"Dark Horse","0935_1":"[group=0001 type=0002 params=]","0936_0":"Key Figure","0936_1":"[group=0001 type=0002 params=]","0937_0":"Mastermind","0937_1":"[group=0001 type=0002 params=]","0938_0":"Tactician","0938_1":"[group=0001 type=0002 params=]","0939_0":"Vagabond","0939_1":"[group=0001 type=0002 params=]","0940_0":"Voyager","0940_1":"[group=0001 type=0002 params=]","0941_0":"Wandering Hermit","0941_1":"[group=0001 type=0002 params=]","0942_0":"Nomad","0942_1":"[group=0001 type=0002 params=]","0943_0":"Bounty Hunter","0943_1":"[group=0001 type=0002 params=]","0944_0":"Timeline Jumper","0944_1":"[group=0001 type=0002 params=]","0945_0":"Generation","0945_1":"[group=0001 type=0002 params=]","0946_0":"Elder","0946_1":"[group=0001 type=0002 params=]","0947_0":"Captain","0947_1":"[group=0001 type=0002 params=]","0948_0":"Guest","0948_1":"[group=0001 type=0002 params=]","0949_0":"String Puller","0949_1":"[group=0001 type=0002 params=]","0950_0":"Gallery","0950_1":"[group=0001 type=0002 params=]","0951_0":"Big Name","0951_1":"[group=0001 type=0002 params=]","0952_0":"Regular Customer","0952_1":"[group=0001 type=0002 params=]","0953_0":"Partner","0953_1":"[group=0001 type=0002 params=]","0954_0":"Cyborg","0954_1":"[group=0001 type=0002 params=]","0955_0":"Success","0955_1":"[group=0001 type=0002 params=]","0956_0":"Shadow Commander","0956_1":"[group=0001 type=0002 params=]","0957_0":"Helper","0957_1":"[group=0001 type=0002 params=]","0958_0":"Backer","0958_1":"[group=0001 type=0002 params=]","0959_0":"Millionaire","0959_1":"[group=0001 type=0002 params=]","0960_0":"Custodian","0960_1":"[group=0001 type=0002 params=]","0961_0":"Lieutenant","0961_1":"[group=0001 type=0002 params=]","0962_0":"Origin","0962_1":"[group=0001 type=0002 params=]","0963_0":"Czar","0963_1":"[group=0001 type=0002 params=]","0964_0":"Cheer Team","0964_1":"[group=0001 type=0002 params=]","0965_0":"Staff","0965_1":"[group=0001 type=0002 params=]","0966_0":"Factotum","0966_1":"[group=0001 type=0002 params=]","0967_0":"Energy","0967_1":"[group=0001 type=0002 params=]","0968_0":"Engine","0968_1":"[group=0001 type=0002 params=]","0969_0":"Consultant","0969_1":"[group=0001 type=0002 params=]","0970_0":"Tutor","0970_1":"[group=0001 type=0002 params=]","0971_0":"Puppet Master","0971_1":"[group=0001 type=0002 params=]","0972_0":"Buddy","0972_1":"[group=0001 type=0002 params=]","0973_0":"Critic","0973_1":"[group=0001 type=0002 params=]","0974_0":"Luck Pusher","0974_1":"[group=0001 type=0002 params=]","0975_0":"Team","0975_1":"[group=0001 type=0002 params=]","0976_0":"Buffoon","0976_1":"[group=0001 type=0002 params=]","0977_0":"Player","0977_1":"[group=0001 type=0002 params=]","0978_0":"TV Personality","0978_1":"[group=0001 type=0002 params=]","0979_0":"Announcer","0979_1":"[group=0001 type=0002 params=]","0980_0":"Genius","0980_1":"[group=0001 type=0002 params=]","0982_0":"Golfer","0982_1":"[group=0001 type=0002 params=]","0983_0":"Batter","0983_1":"[group=0001 type=0002 params=]","0984_0":"Pitcher","0984_1":"[group=0001 type=0002 params=]","0985_0":"Catcher","0985_1":"[group=0001 type=0002 params=]","0986_0":"Benchwarmer","0986_1":"[group=0001 type=0002 params=]","0987_0":"Virtuoso","0987_1":"[group=0001 type=0002 params=]","0988_0":"Conductor","0988_1":"[group=0001 type=0002 params=]","0989_0":"Musical Performer","0989_1":"[group=0001 type=0002 params=]","0990_0":"Lyricist","0990_1":"[group=0001 type=0002 params=]","0991_0":"Pianist","0991_1":"[group=0001 type=0002 params=]","0992_0":"Ingenue","0992_1":"[group=0001 type=0002 params=]","0993_0":"Narrator","0993_1":"[group=0001 type=0002 params=]","0994_0":"Pro Wrestler","0994_1":"[group=0001 type=0002 params=]","0995_0":"Sprinter","0995_1":"[group=0001 type=0002 params=]","0996_0":"Boxer","0996_1":"[group=0001 type=0002 params=]","0997_0":"Extra","0997_1":"[group=0001 type=0002 params=]","0998_0":"Cinematographer","0998_1":"[group=0001 type=0002 params=]","0999_0":"Stunt Performer","0999_1":"[group=0001 type=0002 params=]","1000_0":"Descendant","1000_1":"[group=0001 type=0002 params=]","1001_0":"Offspring","1001_1":"[group=0001 type=0002 params=]","1002_0":"Sponsor","1002_1":"[group=0001 type=0002 params=]","1003_0":"Suggestion","1003_1":"[group=0001 type=0002 params=]","1004_0":"Facilitator","1004_1":"[group=0001 type=0002 params=]","1005_0":"Showstopper","1005_1":"[group=0001 type=0002 params=]","1006_0":"Possessor","1006_1":"[group=0001 type=0002 params=]","1008_0":"Housekeeper","1008_1":"[group=0001 type=0002 params=]","1009_0":"Trader","1009_1":"[group=0001 type=0002 params=]","1010_0":"Fortune Teller","1010_1":"[group=0001 type=0002 params=]","1011_0":"Globe-Trotter","1011_1":"[group=0001 type=0002 params=]","1013_0":"Pinch Hitter","1013_1":"[group=0001 type=0002 params=]","1014_0":"Leadoff Hitter","1014_1":"[group=0001 type=0002 params=]","1015_0":"Musketeer","1015_1":"[group=0001 type=0002 params=]","1016_0":"Crowd","1016_1":"[group=0001 type=0002 params=]","1017_0":"Circle","1017_1":"[group=0001 type=0002 params=]","1018_0":"Flock","1018_1":"[group=0001 type=0002 params=]","1019_0":"Cooperator","1019_1":"[group=0001 type=0002 params=]","1020_0":"Unit","1020_1":"[group=0001 type=0002 params=]","1021_0":"Army","1021_1":"[group=0001 type=0002 params=]","1022_0":"Coterie","1022_1":"[group=0001 type=0002 params=]","1023_0":"Quartet","1023_1":"[group=0001 type=0002 params=]","1024_0":"Chorus","1024_1":"[group=0001 type=0002 params=]","1025_0":"Podium Finisher","1025_1":"[group=0001 type=0002 params=]","1026_0":"Guild","1026_1":"[group=0001 type=0002 params=]","1027_0":"Group","1027_1":"[group=0001 type=0002 params=]","1028_0":"Horse","1028_1":"[group=0001 type=0002 params=]","1029_0":"Rabbit","1029_1":"[group=0001 type=0002 params=]","1030_0":"Panda","1030_1":"[group=0001 type=0002 params=]","1031_0":"Koala","1031_1":"[group=0001 type=0002 params=]","1032_0":"Squirrel","1032_1":"[group=0001 type=0002 params=]","1033_0":"Sea Otter","1033_1":"[group=0001 type=0002 params=]","1034_0":"Elephant","1034_1":"[group=0001 type=0002 params=]","1035_0":"Giraffe","1035_1":"[group=0001 type=0002 params=]","1036_0":"Whale","1036_1":"[group=0001 type=0002 params=]","1037_0":"Tiger","1037_1":"[group=0001 type=0002 params=]","1038_0":"Lion","1038_1":"[group=0001 type=0002 params=]","1039_0":"Hamster","1039_1":"[group=0001 type=0002 params=]","1040_0":"Deer","1040_1":"[group=0001 type=0002 params=]","1041_0":"Bookkeeper","1041_1":"[group=0001 type=0002 params=]","1042_0":"Idea Person","1042_1":"[group=0001 type=0002 params=]","1043_0":"Rock 'n' Roller","1043_1":"[group=0001 type=0002 params=]","1044_0":"Controller","1044_1":"[group=0001 type=0002 params=]","1045_0":"Storyteller","1045_1":"[group=0001 type=0002 params=]","1046_0":"Illustrator","1046_1":"[group=0001 type=0002 params=]","1047_0":"Finger Painter","1047_1":"[group=0001 type=0002 params=]","1048_0":"Scrivener","1048_1":"[group=0001 type=0002 params=]","1049_0":"Founder","1049_1":"[group=0001 type=0002 params=]","1050_0":"Family","1050_1":"[group=0001 type=0002 params=]","1051_0":"Craftsman","1051_1":"[group=0001 type=0002 params=]","1052_0":"Machine","1052_1":"[group=0001 type=0002 params=]","1053_0":"Navigator","1053_1":"[group=0001 type=0002 params=]","1054_0":"Inventor","1054_1":"[group=0001 type=0002 params=]","1056_0":"Party","1056_1":"[group=0001 type=0002 params=]","1057_0":"Playmaker","1057_1":"[group=0001 type=0002 params=]","1058_0":"Young Leader","1058_1":"[group=0001 type=0002 params=]","1059_0":"Mascot","1059_1":"[group=0001 type=0002 params=]","1060_0":"Fairy","1060_1":"[group=0001 type=0002 params=]","1061_0":"Joke Teller","1061_1":"[group=0001 type=0002 params=]","1062_0":"Voice Actor","1062_1":"[group=0001 type=0002 params=]","1063_0":"Learner","1063_1":"[group=0001 type=0002 params=]","1064_0":"Tenderfoot","1064_1":"[group=0001 type=0002 params=]","1065_0":"Head of the Class","1065_1":"[group=0001 type=0002 params=]","1066_0":"University Student","1066_1":"[group=0001 type=0002 params=]","1067_0":"Architect","1067_1":"[group=0001 type=0002 params=]","1068_0":"Costumier","1068_1":"[group=0001 type=0002 params=]","1069_0":"Ferocious Fighter","1069_1":"[group=0001 type=0002 params=]","1070_0":"Knowledgeable Person","1070_1":"[group=0001 type=0002 params=]","1071_0":"Lofty Dream","1071_1":"[group=0001 type=0002 params=]","1072_0":"Wiz","1072_1":"[group=0001 type=0002 params=]","1073_0":"Prominent Figure","1073_1":"[group=0001 type=0002 params=]","1074_0":"Grappler","1074_1":"[group=0001 type=0002 params=]","1075_0":"Natural Enemy","1075_1":"[group=0001 type=0002 params=]","1076_0":"Horseshoe Crab","1076_1":"[group=0001 type=0002 params=]","1077_0":"Pond Snail","1077_1":"[group=0001 type=0002 params=]","1078_0":"Nautilus","1078_1":"[group=0001 type=0002 params=]","1079_0":"Coconut Crab","1079_1":"[group=0001 type=0002 params=]","1080_0":"Sea Anemone","1080_1":"[group=0001 type=0002 params=]","1081_0":"Goldfish","1081_1":"[group=0001 type=0002 params=]","1082_0":"Horse Mackerel","1082_1":"[group=0001 type=0002 params=]","1083_0":"Devil Ray","1083_1":"[group=0001 type=0002 params=]","1084_0":"Sea Slug","1084_1":"[group=0001 type=0002 params=]","1085_0":"Shrimp","1085_1":"[group=0001 type=0002 params=]","1086_0":"Spider Crab","1086_1":"[group=0001 type=0002 params=]","1087_0":"Rival","1087_1":"[group=0001 type=0002 params=]","1088_0":"Weakness","1088_1":"[group=0001 type=0002 params=]","1089_0":"Type","1089_1":"[group=0001 type=0002 params=]","1090_0":"Sweetheart","1090_1":"[group=0001 type=0002 params=]","1091_0":"Imitation","1091_1":"[group=0001 type=0002 params=]","1092_0":"Process","1092_1":"[group=0001 type=0002 params=]","1093_0":"Gathering","1093_1":"[group=0001 type=0002 params=]","1094_0":"Shoal","1094_1":"[group=0001 type=0002 params=]","1095_0":"Crew","1095_1":"[group=0001 type=0002 params=]","1096_0":"Beast","1096_1":"[group=0001 type=0002 params=]","1097_0":"Ruler","1097_1":"[group=0001 type=0002 params=]","1099_0":"Fossil","1099_1":"[group=0001 type=0002 params=]","1100_0":"Warden","1100_1":"[group=0001 type=0002 params=]","1101_0":"Collector","1101_1":"[group=0001 type=0002 params=]","1102_0":"Crush","1102_1":"[group=0001 type=0002 params=]","1103_0":"Soul","1103_1":"[group=0001 type=0002 params=]","1104_0":"State of Mind","1104_1":"[group=0001 type=0002 params=]","1105_0":"Marathon","1105_1":"[group=0001 type=0002 params=]","1106_0":"Good Person","1106_1":"[group=0001 type=0002 params=]","1107_0":"Client","1107_1":"[group=0001 type=0002 params=]","1108_0":"Doll","1108_1":"[group=0001 type=0002 params=]","1109_0":"Noble Scion","1109_1":"[group=0001 type=0002 params=]","1110_0":"Protagonist","1110_1":"[group=0001 type=0002 params=]","1111_0":"Symbol","1111_1":"[group=0001 type=0002 params=]","1112_0":"Authority","1112_1":"[group=0001 type=0002 params=]","1113_0":"Contributor","1113_1":"[group=0001 type=0002 params=]","1114_0":"Cartoon Character","1114_1":"[group=0001 type=0002 params=]","1115_0":"Plushie","1115_1":"[group=0001 type=0002 params=]","1116_0":"Spirit","1116_1":"[group=0001 type=0002 params=]","1117_0":"Thoroughbred","1117_1":"[group=0001 type=0002 params=]","1118_0":"Person of Note","1118_1":"[group=0001 type=0002 params=]","1119_0":"Professional","1119_1":"[group=0001 type=0002 params=]","1120_0":"Gourmet","1120_1":"[group=0001 type=0002 params=]","1121_0":"Sumo Wrestler","1121_1":"[group=0001 type=0002 params=]","1122_0":"Family Tree","1122_1":"[group=0001 type=0002 params=]","1124_0":"Soldier","1124_1":"[group=0001 type=0002 params=]","1125_0":"Order of Knights","1125_1":"[group=0001 type=0002 params=]","1126_0":"Victor","1126_1":"[group=0001 type=0002 params=]","1128_0":"Villager","1128_1":"[group=0001 type=0002 params=]","1129_0":"School Principal","1129_1":"[group=0001 type=0002 params=]","1130_0":"Protector","1130_1":"[group=0001 type=0002 params=]","1131_0":"Explorer","1131_1":"[group=0001 type=0002 params=]","1132_0":"Seeker","1132_1":"[group=0001 type=0002 params=]","1133_0":"Pugilist","1133_1":"[group=0001 type=0002 params=]","1134_0":"Paladin","1134_1":"[group=0001 type=0002 params=]","1135_0":"Door Guard","1135_1":"[group=0001 type=0002 params=]","1137_0":"Ranger","1137_1":"[group=0001 type=0002 params=]","1138_0":"Monk","1138_1":"[group=0001 type=0002 params=]","1139_0":"Sage","1139_1":"[group=0001 type=0002 params=]","1140_0":"Doctor","1140_1":"[group=0001 type=0002 params=]","1141_0":"Blacksmith","1141_1":"[group=0001 type=0002 params=]","1142_0":"Postdoc","1142_1":"[group=0001 type=0002 params=]","1143_0":"Dignitary","1143_1":"[group=0001 type=0002 params=]","1144_0":"Artiste","1144_1":"[group=0001 type=0002 params=]","1145_0":"Intern","1145_1":"[group=0001 type=0002 params=]","1146_0":"Alchemist","1146_1":"[group=0001 type=0002 params=]","1147_0":"Security Detail","1147_1":"[group=0001 type=0002 params=]","1148_0":"Ore","1148_1":"[group=0001 type=0002 params=]","1149_0":"Guide","1149_1":"[group=0001 type=0002 params=]","1150_0":"Chauffeur","1150_1":"[group=0001 type=0002 params=]","1151_0":"Blogger","1151_1":"[group=0001 type=0002 params=]","1152_0":"Operator","1152_1":"[group=0001 type=0002 params=]","1153_0":"Librarian","1153_1":"[group=0001 type=0002 params=]","1154_0":"Objet d'Art","1154_1":"[group=0001 type=0002 params=]","1155_0":"Successor","1155_1":"[group=0001 type=0002 params=]","1156_0":"Owner","1156_1":"[group=0001 type=0002 params=]","1157_0":"Proxy","1157_1":"[group=0001 type=0002 params=]","1158_0":"Pupil","1158_1":"[group=0001 type=0002 params=]","1159_0":"Disciple","1159_1":"[group=0001 type=0002 params=]","1160_0":"Scholar","1160_1":"[group=0001 type=0002 params=]","1161_0":"Graduate","1161_1":"[group=0001 type=0002 params=]","1162_0":"Collegian","1162_1":"[group=0001 type=0002 params=]","1163_0":"PhD Candidate","1163_1":"[group=0001 type=0002 params=]","1164_0":"Ketchup","1164_1":"[group=0001 type=0002 params=]","1165_0":"Bamboo Shoot","1165_1":"[group=0001 type=0002 params=]","1166_0":"Pop","1166_1":"[group=0001 type=0002 params=]","1167_0":"Psychic","1167_1":"[group=0001 type=0002 params=]","1168_0":"Arbiter","1168_1":"[group=0001 type=0002 params=]","1169_0":"Litterateur","1169_1":"[group=0001 type=0002 params=]","1172_0":"Megalodontia","1172_1":"[group=0001 type=0002 params=]","2002_0":"Recollection","2002_1":"[group=0001 type=0002 params=]","2003_0":"Stylist","2003_1":"[group=0001 type=0002 params=]","2004_0":"Entrepreneur","2004_1":"[group=0001 type=0002 params=]","2005_0":"Musician","2005_1":"[group=0001 type=0002 params=]","2006_0":"Party Star","2006_1":"[group=0001 type=0002 params=]","2007_0":"Mercenary","2007_1":"[group=0001 type=0002 params=]","2008_0":"Alliance","2008_1":"[group=0001 type=0002 params=]","2009_0":"Bard","2009_1":"[group=0001 type=0002 params=]","2012_0":"Noob","2012_1":"[group=0001 type=0002 params=]","2013_0":"Vanguard","2013_1":"[group=0001 type=0002 params=]","2500_0":"Lucky Duck","2500_1":"[group=0001 type=0002 params=]","2501_0":"Protected Species","2501_1":"[group=0001 type=0002 params=]","2502_0":"Chosen One","2502_1":"[group=0001 type=0002 params=]","2503_0":"Gadabout","2503_1":"[group=0001 type=0002 params=]","2504_0":"Point Guard","2504_1":"[group=0001 type=0002 params=]","2505_0":"Optimist","2505_1":"[group=0001 type=0002 params=]","3000_0":"Youth","3000_1":"[group=0001 type=0002 params=]","3001_0":"Squid","3001_1":"[group=0001 type=0002 params=]","3002_0":"Octopus","3002_1":"[group=0001 type=0002 params=]","3003_0":"Salmon","3003_1":"[group=0001 type=0002 params=]","3004_0":"Boy","3004_1":"Girl","3005_0":"Agent 3","3005_1":"[group=0001 type=0002 params=]","3006_0":"Father","3006_1":"Mother","3007_0":"Dad","3007_1":"Mom","3008_0":"Son","3008_1":"Daughter","3009_0":"Big Brother","3009_1":"Big Sister","3010_0":"Little Brother","3010_1":"Little Sister","3011_0":"Grandpa","3011_1":"Grandma","3012_0":"Grandchild","3012_1":"[group=0001 type=0002 params=]","3013_0":"Uncle","3013_1":"Aunt","3014_0":"Youngster","3014_1":"[group=0001 type=0002 params=]","3015_0":"Pet","3015_1":"[group=0001 type=0002 params=]","3100_0":"World Champ","3100_1":"[group=0001 type=0002 params=]","3200_0":"Tableturf Battler","3200_1":"[group=0001 type=0002 params=]","3201_0":"Card Gamer","3201_1":"[group=0001 type=0002 params=]","3300_0":"Traveler","3300_1":"[group=0001 type=0002 params=]","3301_0":"Cyclist","3301_1":"[group=0001 type=0002 params=]","3302_0":"Tempura","3302_1":"[group=0001 type=0002 params=]","3303_0":"Booster","3303_1":"[group=0001 type=0002 params=]"},"CommonMsg/Coop/CoopEnemy":{SakeArtillery:"Big Shot",SakeBigMouth:"Mudmouth",SakeBigMouthGold:"Mudmouth",SakeCopter:"Chinook",SakeDolphin:"Flipper-Flopper",SakeFlyBagman:"Snatcher",SakeJaw:"Megalodontia",SakePillar:"Fish Stick",SakeRope:"Horrorboros",SakeSaucer:"Slammin' Lid",Sakediver:"Maws",Sakedozer:"Griller",SakelienBomber:"Steelhead",SakelienCupTwins:"Flyfish",SakelienGiant:"Cohozuna",SakelienGolden:"Goldie",SakelienLarge:"Cohock",SakelienShield:"Scrapper",SakelienSmall:"Smallfry",SakelienSnake:"Steel Eel",SakelienStandard:"Chum",SakelienTower:"Stinger",Sakerocket:"Drizzler"},"CommonMsg/Coop/CoopGrade":{Grade_00:"Apprentice",Grade_01:"Part-Timer",Grade_02:"Go-Getter",Grade_03:"Overachiever",Grade_04:"Profreshional",Grade_05:"Profreshional +1",Grade_06:"Profreshional +2",Grade_07:"Profreshional +3",Grade_08:"Eggsecutive VP",Grade_Arbeiter_00:"Apprentice",Grade_Arbeiter_01:"Part-Timer",Grade_Arbeiter_02:"Go-Getter",Grade_Arbeiter_03:"Overachiever",Grade_Arbeiter_04:"Profreshional",Grade_Arbeiter_05:"Profreshional +1",Grade_Arbeiter_06:"Profreshional +2",Grade_Arbeiter_07:"Profreshional +3",Grade_Arbeiter_08:"Eggsecutive VP"},"CommonMsg/Coop/CoopSkinName":{COP001:"Orange Slopsuit",COP002:"Green Slopsuit",COP003:"Yellow Slopsuit",COP004:"Pink Slopsuit",COP005:"Blue Slopsuit",COP006:"Black Slopsuit",COP007:"White Slopsuit",COP008:"Orange Gloopsuit",COP009:"Black Gloopsuit",COP010:"Yellow Gloopsuit",COP011:"Brown Gloopsuit",COP012:"Polka-Dot Slopsuit",COP013:"Camo Slopsuit",COP014:"Koi Slopsuit"},"CommonMsg/Coop/CoopStageName":{Carousel:"Wahoo World",Factory:"Um'ami Ruins",Section:"Barnacle & Dime",Shakedent:"Gone Fission Hydroplant",Shakehighway:"Jammin' Salmon Junction",Shakelift:"Salmonid Smokeyard",Shakeship:"Marooner's Bay",Shakespiral:"Sockeye Station",Shakeup:"Spawning Grounds",Temple:"Undertow Spillway",Tutorial:"Sockeye Station",Unknown:"???",Upland:"Inkblot Art Academy"},"CommonMsg/EmoteName":{BlowKiss:"XOXO",Crouching00:"The Lowdown",FeelingWarm00:"No Chill",Idol02:"Deepest Cut",IkachanDance:"Squiddin' Around",NwBtl00:"Card Shark",Shivering00:"All Chill",SittingCrossedLegs:"Who's Next?",TransformationPose00:"Ready Stance",WaveHands:"Wave 'Em Off",Win04:"Stuntin'",Win07:"Robo Steppin'",Win08:"Breakin'",Win09:"Backflip Atcha",Win10:"Later, Undulator",Win11:"Easy Kneesy",Win12:"Landed It",Win13:"Victory Strut",Win14:"Your Move",Win15:"Double-Cross Dab",Win16:"Robo-Flow",Win17:"MVPleased",Win18:"Twirl Power",Win19:"Bashful Brag",Win20:"You're Welcome",Win22:"Sarcastic Salute",Win24:"Spinnin' Salute",Win25:"Upperkick Crouch",Win26:"Rootin' Tootin'",Win27:"Windmill Whip",Win29:"Victory Twist",Win32:"Roundhouse Ballerina",Win33:"Perfect Pirouette",Win34:"Shot Caller",Win36:"Down-Rock Pop",Win37:"Just Playin'",Win_Tricol:"Win_Tricol",Win_Weapon01:"Reppin' Inkopolis",Win_Weapon03:"Flip Out"},"CommonMsg/FestRegion":{ASIA:"Hong Kong/S. Korea",ASIA_Eve:"Australia/New Zealand/Hong Kong/S. Korea",EU:"Europe",EU_Eve:"Europe",JP:"Japan",JP_Eve:"Japan",US:"The Americas/Australia/New Zealand",US_Eve:"The Americas"},"CommonMsg/Gear/GearBrandName":{B00:"SquidForce",B01:"Zink",B02:"Krak-On",B03:"Rockenberg",B04:"Zekko",B05:"Forge",B06:"Firefin",B07:"Skalop",B08:"Splash Mob",B09:"Inkline",B10:"Tentatek",B11:"Takoroka",B15:"Annaki",B16:"Enperry",B17:"Toni Kensa",B18:"Z+F",B19:"Barazushi",B20:"Emberz",B97:"Grizzco",B98:"Cuttlegear",B99:"amiibo"},"CommonMsg/Gear/GearName_Clothes":{AMB000:"School Uniform A",AMB001:"Samurai Jacket",AMB002:"Power Armor",AMB003:"School Cardigan A",AMB004:"Squinja Suit",AMB005:"Power Armor Mk I",AMB006:"Pearlescent Hoodie",AMB007:"Marinated Top",AMB008:"Enchanted Robe A",AMB009:"Steel Platemail",AMB010:"Fresh Fish Gloves",AMB011:"Schoolyard Scrap Jack",AMB012:"Black-Belt Gi",AMB013:"Chaos Commander Suit",AMB014:"School Uniform B",AMB015:"School Cardigan B",AMB017:"Enchanted Robe B",AMB018:"Chomp Top",AMB019:"Eelneck Tank",AMB020:"Big Slick",COP001:"Orange Slopsuit",COP002:"Green Slopsuit",COP003:"Yellow Slopsuit",COP004:"Pink Slopsuit",COP005:"Blue Slopsuit",COP006:"Black Slopsuit",COP007:"White Slopsuit",COP008:"Orange Gloopsuit",COP009:"Black Gloopsuit",COP010:"Yellow Gloopsuit",COP011:"Brown Gloopsuit",COP012:"Polka-Dot Slopsuit",COP013:"Camo Slopsuit",COP014:"Koi Slopsuit",COP100:"Squiddor Polo",COP101:"Anchor Life Vest",COP102:"Juice Parka",COP103:"Garden Gear",COP104:"Crustwear XXL",COP111:"Commander Tunic",COP112:"Astro Wear",COP113:"Retro Future Suit",COP114:"Brinestone Jacket",COP115:"SplatJack 5000",COP116:"Hacker Jacket",FST001:"Basic Tee",HAP001:"Splatfest Tee",HAP003:"Splatfest Tee",JKT000:"Olive Ski Jacket",JKT001:"Takoroka Nylon Vintage",JKT002:"Berry Ski Jacket",JKT003:"Varsity Jacket",JKT004:"School Jersey",JKT005:"Green Cardigan",JKT006:"Black Inky Rider",JKT007:"White Inky Rider",JKT008:"Retro Gamer Jersey",JKT009:"Orange Cardigan",JKT010:"Forge Inkling Parka",JKT011:"Forge Octarian Jacket",JKT012:"Blue Sailor Suit",JKT013:"White Sailor Suit",JKT014:"Squid Satin Jacket",JKT015:"Zapfish Satin Jacket",JKT016:"Krak-On 528",JKT019:"Matcha Down Jacket",JKT023:"Kensa Coat",JKT036:"Dark Bomber Jacket",JKT045:"Arctic Monster Parka",JKT046:"Barazushi Anorak",JKT047:"Patchwork Bomber",JKT048:"Airflow & Hustle Jacket",JKT049:"Ink-Black Paddle Jack",JKT050:"Orca Bolero",JKT051:"Cream Tundra Fleece",JKT052:"Rugby Fleece",JKT053:"Annaki Anchored Coat",JKT054:"Dusty Field Jacket",JKT055:"Light-Bright Paddle Jack",JKT056:"Penguin Bolero",JKT057:"Barazushi Tuff Duffel",JKT058:"Barazushi Peacoat",JKT059:"Indigo Boss Haori",JKT060:"Lime Ski Jacket",JKT061:"Takoroka Nineties Nylon",JKT062:"Barazushi Liner Shell",JKT063:"Tenured Turtleneck",JKT064:"Annaki Tuff Duffel",MSN000:"Hero Jacket Replica",MSN004:"Armor Jacket Replica",MSN110:"Fuzz-Octoling Armor",MSN200:"タコ・アーマー",MSN301:"Survival Suit",MSN302:"Hero Suit Lv1",MSN303:"Hero Suit Lv2",MSN304:"Hero Suit Lv3",MSN305:"Hero Suit ST",MSN306:"Hero Suit Replica",MSN310:"Legendary Cape",PLO000:"Shrimp-Pink Polo",PLO001:"Striped Rugby",PLO002:"Tricolor Rugby",PLO003:"Sage Polo",PLO004:"Black Polo",PLO005:"Cycling Shirt",PLO006:"Cycle King Jersey",PLO007:"Slipstream United",PLO008:"FC Albacore",PLO009:"Rugby King 10",PLO010:"Rugby King 08",PRK000:"Camo Zip Hoodie",PRK001:"Green Zip Hoodie",PRK002:"Zekko Hoodie",PRK006:"Gray Hoodie",PRK012:"Sudadera Roja",PRK013:"Dustcloud Hoodie",PRK014:"Sudadera Celeste",PRK015:"Seafoam Hoodie",SHT000:"Lumberjack Shirt",SHT001:"Rodeo Shirt",SHT002:"Green-Check Shirt",SHT003:"White Shirt",SHT004:"Urchins Jersey",SHT005:"Aloha Shirt",SHT006:"Red-Check Shirt",SHT007:"Baby-Jelly Shirt",SHT008:"Baseball Jersey",SHT009:"Gray Mixed Shirt",SHT010:"Vintage Check Shirt",SHT011:"Round-Collar Shirt",SHT012:"Logo Aloha Shirt",SHT013:"Striped Shirt",SHT014:"Linen Shirt",SHT015:"Shirt & Tie",SHT017:"Hula Punk Shirt",SHT018:"Octobowler Shirt",SHT019:"Inkfall Shirt",SHT020:"Crimson Parashooter",SHT024:"Chili Octo Aloha",SHT025:"Annaki Flannel Hoodie",SHT026:"Ink-Wash Shirt",SHT030:"Seahorse Shoreliner",SHT031:"Button-Clown Shirt",SHT032:"Trooper Top",SHT033:"Business Animal",SHT034:"Fancyfish Stitch",SHT036:"Fashion Splash Shirt",SHT037:"Hype Stripe Button Up",SHT038:"Base White Button Up",SHT039:"Rad Plaid Casual",SHT040:"Urban Upcycle Top",SWT000:"Gray College Sweat",SWT001:"Squidmark Sweat",SWT002:"Retro Sweat",SWT003:"Firefin Navy Sweat",SWT004:"Navy College Sweat",SWT005:"Reel Sweat",SWT006:"Anchor Sweat",SWT007:"Negative Longcuff Sweater",SWT010:"Annaki Blue Cuff",SWT013:"N-Pacer Sweat",SWT016:"Manatee Swag Sweat",SWT017:"Apex Sweater",SWT018:"Octo Jumper Away",SWT020:"Moby Knit",SWT021:"Lemon Hoodless",SWT022:"Motley Hoodless",SWT023:"Lime Hoodless",SWT024:"Fuzzly Sweater",TEL000:"White Striped LS",TEL001:"Black LS",TEL002:"Purple Camo LS",TEL003:"Navy Striped LS",TEL004:"Zekko Baseball LS",TEL005:"Varsity Baseball LS",TEL006:"Black Baseball LS",TEL007:"White Baseball LS",TEL008:"White LS",TEL009:"Green Striped LS",TEL010:"Squidmark LS",TEL011:"Zink LS",TEL012:"Striped Peaks LS",TEL015:"Annaki Drive Tee ",TEL026:"Ink-Black Tangle Top",TEL027:"Deepsea Tangle Top",TES000:"White Tee",TES001:"Black Squideye",TES003:"Sky-Blue Squideye",TES004:"Rockenberg White",TES005:"Rockenberg Black",TES006:"Black Tee",TES007:"Sunny-Day Tee",TES008:"Rainy-Day Tee",TES009:"Reggae Tee",TES010:"Fugu Tee",TES011:"Mint Tee",TES012:"Grape Tee",TES013:"Red Vector Tee",TES014:"Gray Vector Tee",TES015:"Blue Peaks Tee",TES016:"Ivory Peaks Tee",TES017:"Squid-Stitch Tee",TES018:"Pirate-Stripe Tee",TES019:"Sailor-Stripe Tee",TES020:"White 8-Bit FishFry",TES021:"Black 8-Bit FishFry",TES022:"White Anchor Tee",TES023:"Black Anchor Tee",TES026:"Carnivore Tee",TES027:"Pearl Tee",TES028:"Octo Tee",TES029:"Herbivore Tee",TES030:"Black V-Neck Tee",TES035:"White V-Neck Tee",TES047:"Annaki Polpo-Pic Tank",TES048:"Firewave Tee",TES049:"Takoroka Galactic Tie Dye",TES050:"Takoroka Rainbow Tie Dye",TES055:"Icewave Tee",TES063:"Tri-Shred Tee",TES064:"Tentatek Tandem",TES066:"Annaki Choker Tee",TES067:"Annaki Bracelet Tee",TES068:"White Retro Tee",TES069:"Blue Retro Tee",TES070:"Tan Retro Tee",TES071:"Barazushi Wrap",TES072:"Barazushi Rice Tee",TES073:"Barazushi Black Tee",TES074:"Barazushi Sakura Tee",TES075:"Octosquid Tandem Tee",TES076:"Tri-Squid Tee",TES077:"Tri-Octo Tee",TES078:"Takoroka \\m/ Crab",TES079:"Takoroka \\m/ Alien",TES081:"Takoroka Tandem",TES082:"Pineapple Ringer",TES083:"Apple Ringer",TES084:"Vaporwave Tee",TES085:"Duskwave Tee",TES086:"Lyco-P Streetstyle Tee",TES088:"Eelzebub Tee",TES090:"Lime BlobMob Tee",TES091:"Berry BlobMob Tee",TES092:"White Z+F Tee",TES093:"Navy Z+F Tee",TES094:"Plum Barazushi Wrap",TES095:"King Mesh Tee",TLY000:"White Layered LS",TLY001:"Yellow Layered LS",TLY002:"Camo Layered LS",TLY003:"Black Layered LS",TLY004:"Zink Layered LS",TLY005:"Layered Anchor LS",TLY006:"Choco Layered LS",TLY007:"Part-Time Pirate",TLY008:"Layered Vector LS",TLY009:"Green Tee",TNK000:"B-ball Jersey (Home)",TNK001:"B-ball Jersey (Away)",TNK003:"White King Tank",TNK007:"Umibozu Road Jersey",TNK008:"Umibozu Home Jersey",TRG000:"Crispy Crustume",TRG001:"Frivolous Paw Suit",VST000:"Mountain Vest",VST001:"Forest Vest",VST002:"Dark Urban Vest",VST003:"Yellow Urban Vest",VST004:"Squid-Pattern Waistcoat",VST005:"Squidstar Waistcoat",VST010:"Khaki Ranger Vest",VST011:"Red Battlecrab Shell",VST012:"Lime Battlecrab Shell",VST013:"Distressed Vest",VST014:"Black Ranger Vest",VST015:"Dark Distressed Vest"},"CommonMsg/Gear/GearName_Head":{ACC003:"Tentaclinger Earring",AMB000:"Squid Hairclip",AMB001:"Samurai Helmet",AMB002:"Power Mask",AMB003:"Squid Clip-Ons",AMB004:"Squinja Mask Mk II",AMB005:"Power Mask Mk I",AMB006:"Pearlescent Crown S",AMB007:"Marinated Headphones",AMB008:"Enchanted Hat",AMB009:"Steel Helm",AMB010:"Fresh Fish Head",AMB011:"Boss Floss",AMB012:"Sushi Sous-Chef Band",AMB013:"Chaos Helm",AMB016:"Squinja Mask Mk I",AMB017:"Pearlescent Crown L",AMB018:"Hohojiro Mask",AMB019:"Onaga Mask",AMB020:"Manta Mask",CAP000:"Urchins Cap",CAP001:"Lightweight Cap",CAP002:"Takoroka Mesh",CAP003:"Streetstyle Cap",CAP004:"Squid-Stitch Cap",CAP005:"Squidvader Cap",CAP006:"Camo Mesh",CAP007:"Five-Panel Cap",CAP008:"Zekko Mesh",CAP009:"Backward Cap",CAP010:"Two-Stripe Mesh",CAP011:"Jet Cap",CAP012:"Cycling Cap",CAP014:"Cycle King Cap",CAP020:"Hickory Work Cap",CAP021:"Woolly Urchins Classic",CAP023:"Jellyvader Cap",CAP024:"House-Tag Denim Cap",CAP026:"Do-Rag, Cap & Glasses",CAP028:"Ink-Black Flap Cap",CAP031:"Cap'n Cap",CAP032:"Vintage Biker Cap",CAP033:"Flounder Flap Cap",CAP034:"Dustcloud Cap",CAP035:"Seafoam Cap",CAP036:"Wharfside Cap",CAP037:"Clue-Detecting Cap",CAP038:"Headlamp Hat",CAP039:"Swim Cap",COP001:"バイトヘルメット オレンジ",COP002:"バイトヘルメット グリーン",COP003:"バイトヘルメット イエロー",COP004:"バイトヘルメット ピンク",COP005:"バイトヘルメット ブルー",COP006:"バイトヘルメット ブラック",COP007:"バイトヘルメット ホワイト",COP008:"バイトキャップ グリーン",COP009:"バイトキャップ グレー",COP010:"バイトキャップ ブルー",COP011:"バイトキャップ ブラック",COP012:"バイトヘルメット ネオン",COP013:"バイトヘルメット カーキ",COP014:"バイトヘルメット レッド",COP100:"Headlamp Helmet",COP101:"Dust Blocker 2000",COP102:"Welding Mask",COP105:"Cap of Legend",COP110:"Bream-Brim Cap",COP111:"Lo-Vis Visor",COP112:"Five-Alarm Helmet",COP113:"Astro Helm",COP114:"360 All-Scopes",COP115:"Brain Strainer",COP116:"Deep Sinker Helm",COP117:"Commander Cap",COP118:"See-an-Enemy HUD",COP119:"Retro Future Helmet",COP120:"3D Glasses",EYE000:"Retro Specs",EYE001:"Splash Goggles",EYE002:"Pilot Goggles",EYE003:"Tinted Shades",EYE004:"Black Arrowbands",EYE005:"Snorkel Mask",EYE006:"White Arrowbands",EYE007:"Fake Contacts",EYE008:"18K Aviators",EYE009:"Full-Moon Glasses",EYE010:"Octoglasses",EYE011:"Half-Rim Glasses",EYE012:"Double Egg Shades",EYE014:"SV925 Circle Shades",EYE015:"Annaki Beret & Glasses",EYE016:"Swim Goggles",EYE018:"Toni Kensa Goggles",EYE021:"Ink-Tinted Goggles",EYE022:"Retro Framers",EYE023:"Glassless Glasses",EYE024:"Triple-Deck Specs",EYE025:"Invisifloats",EYE026:"Moto Shades",EYE027:"Annaki Charms",EYE028:"Glam Clam Specs",EYE029:"Retro BluFocals",EYE030:"Sea-Me-Nots",EYE031:"Hipster Horn-Rims",FST000:"White Headband",HAP016:"Undead Head",HAP017:"The Plankton Walker",HAP018:"Swim Reaper",HAP019:"Bleak Beak",HAP020:"Dapperdasher Hat",HAP021:"Coral Wreath",HAP022:"Golden Gala Masque",HAP023:"Octopearl Crown",HAT000:"Safari Hat",HAT001:"Jungle Hat",HAT002:"Camping Hat",HAT003:"Blowfish Bell Hat",HAT004:"Bamboo Hat",HAT005:"Straw Boater",HAT006:"Classic Straw Boater",HAT007:"Treasure Hunter",HAT008:"Bucket Hat",HAT010:"Tulip Parasol",HAT012:"Seashell Bamboo Hat",HAT015:"Classic Bowler",HAT016:"Jean Dream Bucket",HAT017:"Howdy Hat",HAT018:"Urchin Understitch",HAT019:"Beachcomber",HAT020:"Z+F Flair Bowler",HAT021:"Hat-Trick Bell Hat",HBD001:"B-ball Headband",HBD002:"Squash Headband",HBD003:"Tennis Headband",HBD004:"Jogging Headband",HBD005:"Soccer Headband",HBD007:"FishFry Biscuit Bandana",HBD009:"Squidband",HDP000:"Studio Headphones",HDP001:"Designer Headphones",HDP002:"Noise Cancelers",HDP004:"Squidlife Headphones",HDP007:"Ocho OctoPhones",HDP008:"Cephalo Pods",HDP009:"Ocho OctoPhones Blancos",HDP010:"Aux Boxes",HDP011:"Dustcloud 'Phones",HDP012:"Seafoam 'Phones",INV000:"INVISIBLE",MET000:"Bike Helmet",MET002:"Stealth Goggles",MET004:"Skate Helmet",MET005:"Visor Skate Helmet",MET006:"MTB Helmet",MET007:"Hockey Helmet",MET009:"Octo Tackle Helmet Deco",MET012:"Winkle Stripe Helm",MET013:"Party Hard Hat",MET014:"Home-Team Catcher",MET015:"Away-Team Catcher",MET016:"Scrum Cap",MET018:"Barrelfish Home Helmet",MET019:"ZedFry Helmet",MSK000:"Gas Mask",MSK001:"Paintball Mask",MSK002:"Paisley Bandana",MSK003:"Skull Bandana",MSK004:"Painter's Mask",MSK005:"Annaki Mask",MSK006:"Octoking Facemask",MSK007:"Squid Facemask",MSK008:"Firefin Facemask",MSK011:"Forge Mask",MSK014:"BlobMob Mask",MSK015:"Air Gills DX",MSK016:"Squidbeak Shield",MSK017:"Meetcha Mask",MSK018:"Stealth Squidbeak Shield",MSN000:"Hero Headset Replica",MSN004:"Armor Helmet Replica",MSN109:"Teddy Band",MSN110:"Fuzz-Octoling Goggles",MSN111:"ケタコゾネスゴーグルワカメ",MSN301:"Survival Ear",MSN302:"Hero Brain Lv1",MSN303:"Hero Brain Lv2",MSN304:"Hero Brain Lv3",MSN305:"Hero Brain ST",MSN306:"Hero Mindset Replica",MSN310:"Legendary Cap",NCP000:"Bobble Hat",NCP001:"Short Beanie",NCP002:"Striped Beanie",NCP003:"Sporty Bobble Hat",NCP004:"Special-Forces Beret",NCP005:"Squid Nordic",NCP008:"Knitted Hat",NCP009:"Annaki Beret",NCP012:"Anglerfish Knit",NCP013:"ZedFry Beanie",TRG000:"Stay Crusty Cap",VIS000:"Golf Visor",VIS001:"FishFry Visor",VIS002:"Sun Visor",VIS003:"Takoroka Visor",VIS004:"Face Visor",VIS005:"Crust Bucket Visor"},"CommonMsg/Gear/GearName_Shoes":{AMB000:"School Shoes + Hi Socks",AMB001:"Samurai Shoes",AMB002:"Power Boots",AMB003:"Baggy-Sock Fringe Loafs",AMB004:"Squinja Boots",AMB005:"Power Boots Mk I",AMB006:"Pearlescent Kicks",AMB007:"Marinated Slip-Ons",AMB008:"Enchanted Boots",AMB009:"Steel Greaves",AMB010:"Fresh Fish Feet",AMB011:"Knotty Bois",AMB012:"Kick Dampeners",AMB013:"Chaos Kicks",AMB014:"Base School Shoes",AMB015:"Base Fringed Loafers",AMB018:"Faux Sharkskin Platfins",AMB019:"Eel Heel Socks",AMB020:"Big Muds",BOT000:"Moto Boots",BOT001:"Tan Work Boots",BOT002:"Red Work Boots",BOT003:"Blue Moto Boots",BOT004:"Green Rain Boots",BOT005:"Acerola Rain Boots",BOT006:"Punk Whites",BOT007:"Punk Cherries",BOT008:"Punk Yellows",BOT009:"Bubble Rain Boots",BOT010:"Snowy Down Boots",BOT011:"Icy Down Boots",BOT012:"Hunting Boots",BOT013:"Punk Nights",BOT019:"Blu-Shift Moto Boots",BOT020:"Skipjack Work Boots",BOT021:"Arctic Duck Boots",BOT022:"Field Duck Boots",BOT023:"Red Hammertreads",BOT024:"Dappled Hammertreads",BOT025:"Punk Pinks",BOT026:"Fuzzy Boots",BOT027:"Transom Note Boots",BOT028:"Red-Shift Moto Boots",BOT029:"Spiked Duck Boots",BOT030:"Buckle-Down Boots",CFS000:"Blueberry Casuals",CFS001:"Plum Casuals",COP101:"Angry Rain Boots",COP102:"Nonslip Senseis",COP105:"Flipper Floppers",COP107:"Trevally Derby Rollers",COP108:"Brinestone Boots",LTS000:"White Kicks",LTS001:"Cherry Kicks",LTS002:"Turquoise Kicks",LTS003:"Squink Wingtips",LTS004:"Roasted Brogues",LTS005:"Kid Clams",LTS007:"Navy Red-Soled Wingtips",LTS010:"Annaki Habaneros",LTS011:"Annaki Tigers",LTS013:"Desert Chukkas",LTS014:"Dark-Roast Boaties",LTS015:"Tricolor Boaties",MSN000:"Hero Runner Replicas",MSN004:"Armor Boot Replicas",MSN110:"Fuzz-Octoling Boots",MSN200:"タコ・ブーツ",MSN301:"Survival Foot",MSN302:"Hero Boots Lv1",MSN303:"Hero Boots Lv2",MSN304:"Hero Boots Lv3",MSN305:"Hero Boots ST",MSN306:"Hero Boot Replicas",MSN310:"Legendary Sandals",SDL000:"Oyster Clogs",SDL001:"Choco Clogs",SDL003:"Neon Delta Straps",SDL004:"Black Flip-Flops",SDL005:"Snow Delta Straps",SDL006:"Luminous Delta Straps",SDL007:"Red FishFry Sandals",SDL008:"Yellow FishFry Sandals",SDL010:"Cuttlefish Sandies",SDL011:"Arrow Toesies Blu",SDL012:"BlobMob Flip-Flops",SDL013:"Orange Dadfoot Sandals",SDL014:"Arrow Toesies Purp",SDL015:"Annaki Strappy Sandals",SDL016:"Squid Bone Unslips",SDL017:"Pink Dadfoot Sandals",SDL018:"Cyan Dadfoot Sandals",SDL019:"Navy Toejamz",SDL020:"Red Toejamz",SDL021:"Yellow Toejamz",SDL022:"Green Toejamz",SHI000:"Red Hi-Horses",SHI001:"Zombie Hi-Horses",SHI002:"Cream Hi-Tops",SHI003:"Purple Hi-Horses",SHI004:"Hunter Hi-Tops",SHI005:"Red Hi-Tops",SHI006:"Gold Hi-Horses",SHI008:"Shark Moccasins",SHI009:"Mawcasins",SHI010:"Chocolate Dakroniks",SHI011:"Cyan Dakroniks",SHI016:"Sunset Orca Hi-Tops",SHI017:"Red & Black Squidkid IV",SHI018:"Blue & Black Squidkid IV",SHI025:"Red & White Squidkid V",SHI042:"Force ReBoots",SHI043:"Tenya OctoReds",SHI044:"Tenya OctoPurps",SHI045:"Pearl 01STERs",SHI046:"Zebrafish Hi-Tops",SHI047:"Dustcloud Hi-Tops",SHI048:"Seafoam Hi-Tops",SHI049:"White Lo-Vert Hi-Tops",SHI050:"Blue & Black Squidkid III",SHI051:"Red & White Squidkid III",SHI052:"Onyx 01STERs",SHT000:"Pink Trainers",SHT001:"Orange Arrows",SHT002:"Neon Sea Slugs",SHT003:"White Arrows",SHT004:"Cyan Trainers",SHT005:"Blue Sea Slugs",SHT006:"Red Sea Slugs",SHT007:"Purple Sea Slugs",SHT008:"Crazy Arrows",SHT009:"Black Trainers",SHT012:"Yellow-Mesh Sneakers",SHT013:"Arrow Pull-Ons",SHT020:"U Jellys",SHT021:"Hyper Guppies",SHT022:"Turbo Tabi Red",SHT023:"E-JECT 30XX",SHT024:"Slamgerine Slip-Ons",SHT025:"Mako Bucket Hi-Tops",SHT026:"Blue Shrimpsiders",SHT027:"E-JECT 30VV",SLO000:"Blue Lo-Tops",SLO001:"Banana Basics",SLO002:"LE Lo-Tops",SLO003:"White Seahorses",SLO004:"Orange Lo-Tops",SLO005:"Black Seahorses",SLO006:"Clownfish Basics",SLO007:"Yellow Seahorses",SLO008:"White 3-Straps",SLO009:"Red 3-Straps",SLO010:"Soccer Shoes",SLO011:"LE Soccer Shoes",SLO012:"Sunny Climbing Shoes",SLO021:"Wasabi Tabi",SLO022:"Suede Basics",SLO023:"Ink-Black Clam 600s",SLO024:"Suede Bosses",SLO025:"White Clam 600s",SLP000:"Blue Slip-Ons",SLP001:"Red Slip-Ons",SLP002:"Squid-Stitch Slip-Ons",SLP004:"ZedFry Slip-Ons",TRG000:"Fry Tops",TRS000:"Trail Boots",TRS001:"Custom Trail Boots",TRS002:"Pro Trail Boots"},"CommonMsg/Gear/GearPowerExp":{Action_Up:`Makes Squid Rolls and Squid Surges easier to do
and steadies your aim when firing after jumping.`,ComeBack:`Boosts some of your abilities for a short time
after respawning.`,DeathMarking:`Once you've respawned, reveals the position of
the players who splatted you.`,EndAllUp:`Boosts ink-recovery rate and weapon-ink
efficiency for the last 30 seconds of battle.`,ExSkillDouble:`Doubles the effect of other gear abilities
attached to this gear.`,Exorcist:`Increases respawn time and special-gauge spawn
penalty for you and any player you splat.`,HumanMove_Up:`Increases movement speed in Inkling or
Octoling form.`,InkRecovery_Up:"Increases ink-tank refill rate.",JumpTime_Save:"Increases Super Jump speed.",MainInk_Save:`Decreases amount of ink consumed by your
main weapon.`,MinorityUp:`Fills special gauge automatically if your team
has fewer active players than the enemy.`,None:`Unlock this ability by battling while wearing
this gear.`,ObjectEffect_Up:"Increases damage dealt to all nonplayer targets.",OpInkEffect_Reduction:`Reduces damage taken and improves mobility
when walking through enemy ink.`,RespawnSpecialGauge_Save:`Reduces special-gauge decrease after
getting splatted.`,RespawnTime_Save:`Reduces respawn time after getting splatted
repeatedly without splatting any opponents.`,SomersaultLanding:`Tilting the Left Stick during a Super Jump lets
you perform a roll in that direction when landing.`,SpecialIncrease_Up:"Increases special-gauge fill rate.",SpecialSpec_Up:"Upgrades your special weapon.",SquidMoveSpatter_Reduction:`Leaves no trace when swimming in inked ground
but slightly reduces swim speed.`,SquidMove_Up:"Increases movement speed in swim form.",StartAllUp:`Boosts your speed while moving for the first 30
seconds of battle.`,SubEffect_Reduction:"Reduces effects and damage from sub weapons.",SubInk_Save:`Decreases amount of ink consumed by your
sub weapon.`,SubSpec_Up:"Upgrades your sub weapon.",SuperJumpSign_Hide:`Hides your Super Jump landing point from
distant players.`,ThermalInk:`Allows you to track distant players hit with
shots from your main weapon.`},"CommonMsg/Gear/GearPowerName":{Action_Up:"Intensify Action",ComeBack:"Comeback",DeathMarking:"Haunt",EndAllUp:"Last-Ditch Effort",ExSkillDouble:"Ability Doubler",Exorcist:"Respawn Punisher",HumanMove_Up:"Run Speed Up",InkRecovery_Up:"Ink Recovery Up",JumpTime_Save:"Quick Super Jump",MainInk_Save:"Ink Saver (Main)",MinorityUp:"Tenacity",None:"",ObjectEffect_Up:"Object Shredder",OpInkEffect_Reduction:"Ink Resistance Up",RespawnSpecialGauge_Save:"Special Saver",RespawnTime_Save:"Quick Respawn",SomersaultLanding:"Drop Roller",SpecialIncrease_Up:"Special Charge Up",SpecialSpec_Up:"Special Power Up",SquidMoveSpatter_Reduction:"Ninja Squid",SquidMove_Up:"Swim Speed Up",StartAllUp:"Opening Gambit",SubEffect_Reduction:"Sub Resistance Up",SubInk_Save:"Ink Saver (Sub)",SubSpec_Up:"Sub Power Up",SuperJumpSign_Hide:"Stealth Jump",ThermalInk:"Thermal Ink"},"CommonMsg/Glossary":{Alternative:"Alterna",AnemoShop:"SplatNet Shop",Aori:"Callie",Atarime:"Cuttlefish",AtarimeHimono:"Cuttlefish",Band01:"Squid Squad",BattleMemory:"battle replay",BigRun:"Big Run",Byname:"title",CardPack:"pack of cards",CardPackFresh:"fresh card pack",CardSleeve:"card sleeves",Commander:"Captain",CoopEvent_Dozer:"The Griller",CoopEvent_Fog:"Fog",CoopEvent_Geyser:"Goldie Seeking",CoopEvent_Hakobiya:"The Mothership",CoopEvent_Missile:"Cohock Charge",CoopEvent_Relay:"Giant Tornado",CoopEvent_Rush:"Rush",CoopEvent_Tamaire:"Mudmouth Eruptions",CoopScenario:"job scenario",CoopScenarioTournament:"tournament job scenario",Crater:"The Crater",Dolphin:"O.R.C.A.",Emote:"emote",EzokkoryKidsMascot:"ZedFry",Fes100Person:"Top 100",FesFloat:"Splatfest Float",FesPhase_01:"Splatfest Sneak Peek",FesPhase_02:"Splatfest Main Event",FesPoint:"Splatfest Points",FesRank:"Splatfest Rank",FestivalShell:"festival shell",Figure:"decoration",FoodShop:"Crusty Sean",GearShopClothes:"Jel La Fleur",GearShopClothesFsodr:"Jelonzo",GearShopHead:"Gnarly Eddy",GearShopHeadFsodr:"Annie",GearShopHeadFsodr_Sub:"Moe",GearShopHead_Sub:"Nails",GearShopShoes:"Mr. Coco",GearShopShoesFsodr:"Fred Crumbs",GoodsShop:"Harmony",Grizzco_Obj_01:"Grizzco terminal",Hime:"Pearl",Hotaru:"Marie",Ichigou:"Agent 1",IdolA:"Shiver",IdolB:"Frye",IdolC:"Big Man",IdolGroup_01:"Squid Sisters",IdolGroup_02:"Off the Hook",IdolGroup_03:"Deep Cut",Iida:"Marina",Inkling:"Inkling",Inkopolis:"Inkopolis",Judge:"Judd",JudgeJr:"Li'l Judd",Kumasan:"Mr. Grizz",KumasanOnlyName:"Mr. Grizz",Lobby_Obj_01:"battle pot",Lobby_Obj_02:"lobby terminal",Lobby_Obj_03:"copy machine",Lottery:"Shell-Out Machine",LotteryCoin:"Shell-Out Token",MiniGameKurage0:"Baby Jelly",MiniGameKurage1:"Cool Jelly",MiniGameKurage2:"Aggro Jelly",MiniGameKurage3:"Clone Jelly",MiniGameRank:"Tableturf Rank",MiniGameTitle:"Tableturf Battle",ModeMission:"Story Mode",Mother:"Marigold",MotherFoodShop:"Staff",MotherMiniGame:"Staff",MotherWalk:"Recon Guide",Msn_Archives_01:"Sunken Scroll",Msn_AreaOfAlternative:"site",Msn_BreakableObj_08:"fail balloon",Msn_BreakableObj_09:"target",Msn_CheckPoint:"checkpoint",Msn_CourseObj_04:"splat switch",Msn_CourseObj_05:"ink switch",Msn_CourseObj_06:"balloon fish",Msn_CourseObj_07:"sponge",Msn_CourseObj_10:"gusher",Msn_CourseObj_11:"inkfurler",Msn_CourseObj_12:"propeller",Msn_CourseObj_13:"inkrail",Msn_CourseObj_14:"ride rail",Msn_CourseObj_15:"dash track",Msn_CourseObj_17:"bounce pad",Msn_CourseObj_18:"ink wheel",Msn_CourseObj_19:"soaker block",Msn_CourseObj_20:"switch",Msn_CourseObj_21:"energy core",Msn_CourseObj_22:"propellervator",Msn_Drone:"Shel-drone",Msn_EnmOctBaller_01:"Octoballer",Msn_EnmOctCleaner_01:"Squee-G",Msn_EnmOctCommander_01:"Octocommander",Msn_EnmOctCopter_01:"Octocopter",Msn_EnmOctCopter_03:"Octodisco",Msn_EnmOctCopter_04:"Octobomber",Msn_EnmOctEscape_01:"Tentakook",Msn_EnmOctFlooder_01:"Flooder",Msn_EnmOctMissile_01:"Octozeppelin",Msn_EnmOctMissile_02:"Octomissile",Msn_EnmOctPod_01:"Octopod",Msn_EnmOctPod_02:"Oversized Octopod",Msn_EnmOctSniper_01:"Octosniper",Msn_EnmOctSoldier_01:"Octoling",Msn_EnmOctStamp_01:"Octostamp",Msn_EnmOctStamp_02:"Amped Octostamp",Msn_EnmOctTrooper_01:"Octotrooper",Msn_EnmOctTrooper_02:"Shielded Octotrooper",Msn_EnmOctTrooper_03:"Twintacle Octotrooper",Msn_EnmOctTrooper_13:"Octohopper",Msn_Item_01:"Sardinium",Msn_Item_02:"Power Egg",Msn_Item_03:"Power Egg pack",Msn_Item_04:"squid ring",Msn_Item_05:"canned special",Msn_Item_07:"key",Msn_Item_08:"gold record",Msn_JumpPoint:"launchpad",Msn_ObstacleObj_02:"ink stick",Msn_ObstacleObj_03:"Sprinkler",Msn_ObstacleObj_04:"Toxic Mist",Msn_ObstacleObj_05:"Splash Wall",Msn_PowerUpPoint:"Upgrade Point",Msn_WorldObj_03:"pipeline",Msn_WorldObj_05:"loot anchor",Msn_ZapfishGiant:"Great Zapfish",Msn_ZapfishNormal:"Zapfish",Msn_ZapfishReplica:"stuffed Zapfish",Mystery:"Raspy Voice",NamePlateBg:"banner",Nigou:"Agent 2",NotificationChannel:"Pool",Octoling:"Octoling",PlatoonNew:"New Squidbeak Splatoon",PlayerAvatar:"ghosts",Plz_Obj_01:"Splatfest Pledge Box",RealKumasan:"Mr. Grizz",RoeCannon:"egg cannon",RoeContainer:"egg basket",RoeThrow:"Egg Throw",SDServiceName:"SplatNet 3",SakeArtillery:"Big Shot",SakeArtilleryCannon:"Big Shot launcher",SakeBigBoss:"King Salmonid",SakeDolphin:"Flipper-Flopper",SakeFlyBagman:"Snatcher",SakeJaw:"Megalodontia",SakePillar:"Fish Stick",SakeRope:"Horrorboros",SakeSaucer:"Slammin' Lid",SakeTamaire:"Mudmouth",Sakediver:"Maws",Sakedozer:"Griller",SakelienBomber:"Steelhead",SakelienCupTwins:"Flyfish",SakelienGiant:"Cohozuna",SakelienGolden:"Goldie",SakelienLarge:"Cohock",SakelienShield:"Scrapper",SakelienSmall:"Smallfry",SakelienSnake:"Steel Eel",SakelienStandard:"Chum",SakelienTower:"Stinger",Sakepuncher:"Mothership",SakepuncherBulletSimpl:"Chinook",Sakerocket:"Drizzler",Sangou:"Agent 3",Shakedent:"Gone Fission Hydroplant",Shakehighway:"Jammin' Salmon Junction",Shakelift:"Salmonid Smokeyard",Shakeship:"Marooner's Bay",Shakespiral:"Sockeye Station",Shakeup:"Spawning Grounds",SpecialAttack:"Special Attack",SpecialPoint:"Special Point",Splatlands:"The Splatlands",SplatsVille:"Splatsville",SquidRoll:"Squid Roll",SquidSpawn:"Squid Spawn",SquidSurge:"Squid Surge",Sticker:"sticker",Takowasa:"DJ Octavio",TricolorSignal:"Ultra Signal",TricolorTreasure:"Sprinkler of Doom",TrumpetShell:"conch shell",TurbanShell:"Super Sea Snail",UdemaePoint:"Rank Points",UdemaePoint_00:"Rank-Up Battle",UnknownTalker_00:"???",Uroko:"fish scales",VS_Obj_01:"target",VS_Obj_03:"Splat Zone",VS_Obj_04:"Tower Control Tower",VS_Obj_05:"Rainmaker",VS_Obj_10:"power clam",VS_Obj_11:"clam",Vendor:"Murch",VendorFsodr:"Spyke",WeaponLicense:"Sheldon License",WeaponLicenseGold:"Gold Sheldon License",WeaponShop:"Sheldon",WeaponShopFsodr:"Shelly",WeaponShopFsodr_Sub:"Donny",XRanking:"X Rankings",XRegionGroup:"Division"},"CommonMsg/Goods/GoodsName":{Emi_Sti_Decoration_18:"GCI-NMLSMN neon",Emi_Sti_Decoration_19:"GCI-FRI neon",Emi_Sti_Decoration_20:"GCI-XLSMN neon",Emi_Sti_Decoration_31:"CL-RNF neon sign",Fig_AcousticGuitar00:"ST-NT acoustic guitar",Fig_AcousticGuitar01:"ST-CS acoustic guitar",Fig_AcousticGuitar02:"ST-VS acoustic guitar",Fig_AcousticGuitar03:"ST-JF acoustic guitar",Fig_Arcadegame:"arcade game",Fig_AreaReward:"Splat Zones trophy",Fig_AttacheCase:"briefcase",Fig_Backpack00:"navy backpack",Fig_Backpack01:"black backpack",Fig_Backpack02:"marble backpack",Fig_Backpack03:"two-tone backpack",Fig_Backpack04:"pink backpack",Fig_Backpack05:"cacao backpack",Fig_BankaraMikoshi00:"Splatfest Float head",Fig_BankaraMikoshi01:"Splatfest Float torso",Fig_BankaraMikoshi02:"Splatfest Float tail",Fig_BasketBall00:"brown basketball",Fig_BasketBall01:"orange basketball",Fig_BasketBall02:"gold basketball",Fig_BasketBall03:"Urchiners basketball",Fig_BasketBall04:"Lob-Stars basketball",Fig_BasketBall05:"pink basketball",Fig_BatchLetters:"bundle of simple letters",Fig_BatchLetters01:"bundle of air-mail letters",Fig_BatchLetters02:"bundle of antique letters",Fig_BatchLetters03:"bundle of love letters",Fig_BigLantern:"fish paper lantern",Fig_BigLanternSakura:"sakura paper lantern",Fig_BoilingTube00:"vivid test tubes",Fig_BoilingTube01:"poppy test tubes",Fig_BoilingTube02:"aqua test tubes",Fig_BoilingTube03:"marbled test tubes",Fig_BoilingTube04:"verdant test tubes",Fig_BoilingTube05:"gradient test tubes",Fig_BoilingTube06:"monochromatic test tubes",Fig_Book_00:"popular novel",Fig_Book_01:"fantasy novel",Fig_Box00L:"large crate",Fig_Box00LHard:"wrapped crate",Fig_Box00S:"small crate",Fig_Box01L:"Cuttlegear crate",Fig_BrainmanStrap:"octo-brain charm",Fig_BrainmanStrap01:"octo-brain closed charm",Fig_Broom00:"light-brown broom",Fig_Broom01:"dark-brown broom",Fig_Bucket00:"blue bucket",Fig_Bucket01:"red bucket",Fig_Bunker01:"yellow barricade",Fig_Bunker01_Blue:"blue barricade",Fig_Bunker01_Pink:"pink barricade",Fig_Bunker02_Green:"big green barricade",Fig_Bunker02_Orange:"big orange barricade",Fig_Bunker02_Purple:"big purple barricade",Fig_Can00:"oil can",Fig_Can01:"energy drink",Fig_Can01_01:"pop",Fig_Can01_02:"ginger ale",Fig_Can02:"canned special",Fig_CandyCan00:"orange candy-drop can",Fig_CandyCan01:"blue candy-drop can",Fig_CarBus00:"bus",Fig_CarTruck00:"freight truck",Fig_CarTruck01:"moving truck",Fig_CellPhone:"sea-cucumber phone",Fig_CerealBox00:"sugary cereal",Fig_CerealBox01:"chocolate cereal",Fig_CerealBox02:"coconut cereal",Fig_CheeseBox:"processed cheese",Fig_Clam:"clam",Fig_ClamGreat:"power clam",Fig_ClamReward:"Clam Blitz trophy",Fig_CoffeeCupPaper00:"tall coffee to go",Fig_CoffeeSiphon:"coffee siphon",Fig_ColorCone:"traffic cone",Fig_Comic00_00:"Sharktooth Comix",Fig_Comic00_01:"Sharktooth Comix - Double",Fig_Comic00_02:"Sharktooth Comix - Special",Fig_Comic01_00:"sports comic",Fig_Comic01_01:"sci-fi comic",Fig_Comic01_02:"comedy comic",Fig_Comic02_00:"romance comic",Fig_Comic02_01:"fangirl comic",Fig_Comic02_02:"love-and-war comic",Fig_ConcreteBlockSq:"chunk of concrete",Fig_CoolerBox:"cooler",Fig_CoopDiver:"Maws",Fig_CoopHelicopter00:"basic helicopter",Fig_CoopHelicopter01:"bronze helicopter",Fig_CoopHelicopter02:"silver helicopter",Fig_CoopHelicopter03:"gold helicopter",Fig_CoopHelicopter99:"Grizzco helicopter",Fig_CoopIkuraGolden00:"bronze Golden Egg figure",Fig_CoopIkuraGolden01:"silver Golden Egg figure",Fig_CoopIkuraGolden02:"gold Golden Egg figure",Fig_CoopIkuraGoldenG:"basic Golden Egg figure",Fig_CoopRelayIkuraBox:"Golden Egg box",Fig_CoopSalmon:"Chum",Fig_CoopSalmonArtillery:"Big Shot",Fig_CoopSalmonBaby:"Smallfry",Fig_CoopSalmonBagman:"Snatcher",Fig_CoopSalmonBand00:"basic Lesser Salmonid swarm",Fig_CoopSalmonBand01:"bronze Lesser Salmonid swarm",Fig_CoopSalmonBand02:"silver Lesser Salmonid swarm",Fig_CoopSalmonBand03:"gold Lesser Salmonid swarm",Fig_CoopSalmonBig:"Cohock",Fig_CoopSalmonBigKing00:"base Cohozuna",Fig_CoopSalmonBigKing01:"bronze Cohozuna",Fig_CoopSalmonBigKing02:"silver Cohozuna",Fig_CoopSalmonBigKing03:"gold Cohozuna",Fig_CoopSalmonBomb:"Steelhead",Fig_CoopSalmonCup:"Flyfish",Fig_CoopSalmonDolphin:"Flipper-Flopper",Fig_CoopSalmonGeyser:"Goldie",Fig_CoopSalmonGuardian:"Scrapper",Fig_CoopSalmonRocket:"Drizzler",Fig_CoopSalmonSaucer:"Slammin' Lid",Fig_CoopSalmonSnake:"Steel Eel",Fig_CoopSalmonSnakeKing00:"base Horrorboros",Fig_CoopSalmonSnakeKing01:"bronze Horrorboros",Fig_CoopSalmonSnakeKing02:"silver Horrorboros",Fig_CoopSalmonSnakeKing03:"gold Horrorboros",Fig_CoopSalmonSwing:"Fish Stick",Fig_CoopSalmonTower:"Stinger",Fig_CrabDoll:"monkey-crab cushion",Fig_DancingFlower:"dancing flower",Fig_Daypack00:"black daypack",Fig_Daypack01:"camo daypack",Fig_Daypack02:"multicolored daypack",Fig_Daypack03:"fish-bone daypack",Fig_Daypack04:"beige daypack",Fig_DeliveryBox00:"iShipIt box",Fig_DeliveryBox01:"cardboard box",Fig_Dogu:"dogū",Fig_Dogu01:"golden dogū",Fig_DotCusion00_00:"red pixel-squid cushion",Fig_DotCusion00_01:"blue pixel-squid cushion",Fig_DotCusion01_00:"magenta pixel-octo cushion",Fig_DotCusion01_01:"mint pixel-octo cushion",Fig_DrawstringBag00:"mesh drawstring bag",Fig_DrawstringBag01:"ink drawstring bag",Fig_DrawstringBag02:"fish-scale drawstring bag",Fig_DrawstringBag03:"emerald drawstring bag",Fig_DrawstringBag04:"groovy drawstring bag",Fig_DrawstringBagShrimp00:"shrimp bag",Fig_DrinkCase:"bottle crate",Fig_DustBox02:"suspicious garbage can",Fig_ElectricGuitar00:"ST-G2TS electric guitar",Fig_ElectricGuitar01:"ST-DF electric guitar",Fig_ElectricGuitar02:"ST-VS electric guitar",Fig_ElectricGuitar03:"ST-BLU electric guitar",Fig_ElectricGuitar04:"ST-PK electric guitar",Fig_ElectricGuitar05:"ST-3TS electric guitar",Fig_ElectricPot00:"electric pot",Fig_ElectricalCord:"cord reel",Fig_FireExtinguisher:"fire extinguisher",Fig_FluffyCushion00:"round white cushion",Fig_GameBoy:"see-through Game Youth",Fig_GameCube:"cubic gaming system",Fig_GameandWatch:"Play & Observe",Fig_GardenEelDoll00:"spotted eel plushie",Fig_GardenEelDoll01:"orange-stripe eel plushie",Fig_GardenEelDoll02:"pink-stripe eel plushie",Fig_GardenEelDoll03:"green-stripe eel plushie",Fig_GateCrane:"crane decoration",Fig_GateSanshinChicken:"bird decoration",Fig_GateSanshinPig:"boar decoration",Fig_GateSanshinSnake:"snake decoration",Fig_GateTurtle:"turtle decoration",Fig_GeneralBoxL:"large box",Fig_GeneralBoxNoPaintL:"large ink-proof box",Fig_GeneralBoxNoPaintS:"small ink-proof box",Fig_GeneralBoxS:"small box",Fig_GoalShachi:"Rainmaker Goal",Fig_HandlelessTeaCup00:"Deep Cut teacup",Fig_HireoSofvi00:"basic Fresh Fish doll",Fig_HireoSofvi01:"vacation Fresh Fish doll",Fig_HireoSofvi02:"retro Fresh Fish doll",Fig_HokoReward:"Rainmaker trophy",Fig_IceBox:"ice-cream box",Fig_Ikaman:"ultra squid",Fig_Ikaman01:"hydro ultra squid",Fig_Ikaman02:"fake ultra squid",Fig_IkattaStone:"cephalo cipher stone",Fig_IkuraBottle:"Power Egg pack",Fig_InstantNoodle00:"seafood noodles",Fig_InstantNoodle01:"soy-sauce noodles",Fig_InstantNoodle02:"curry noodles",Fig_InstantNoodle03:"super-spicy noodles",Fig_InstantNoodle04:"udon noodles",Fig_IronBasket00:"wire basket",Fig_JuiceBox_00:"mango juice box",Fig_JuiceBox_01:"apple juice box",Fig_JuiceBox_02:"grape juice box",Fig_JuiceBox_03:"sour juice box",Fig_JuiceBox_04:"café au lait juice box",Fig_JuiceBox_05:"strawberry-milk juice box",Fig_LacrosseStick00:"cool lacrosse stick",Fig_LacrosseStick01:"thunder lacrosse stick",Fig_LacrosseStick02:"candy lacrosse stick",Fig_LacrosseStick03:"lime lacrosse stick",Fig_LacrosseStick04:"royal lacrosse stick",Fig_LacrosseStick05:"hot lacrosse stick",Fig_LaundryDetergent00:"concentrated detergent",Fig_LaundryDetergent01:"ultra-clean detergent",Fig_LaundryLiquidDetergent00:"clean liquid detergent",Fig_LaundryLiquidDetergent01:"super liquid detergent",Fig_LaundryLiquidDetergent02:"fresh liquid detergent",Fig_LunchBox00:"blue-lid lunch box",Fig_LunchBox01:"pink-lid lunch box",Fig_LunchBox02:"purple-lid lunch box",Fig_LunchBox03:"orange-lid lunch box",Fig_LunchBox04:"green-lid lunch box",Fig_Magazine00:"Inkopolis Illustrated",Fig_Magazine01:"Drip Squad",Fig_Magazine02:"Squidgital Game Guide",Fig_Magazine03:"Nostalgia Power Magazine",Fig_Magazine04:"Rockin' Music Quarterly",Fig_Magazine05:"Boneless Appétit",Fig_Magazine06:"Ink & Splatter",Fig_Magazine07:"Tunnel & Track",Fig_Magazine08:"Evolved Science Journal",Fig_Magazine09:"Salmon Manners Handbook",Fig_Measurement:"surveyor tripod",Fig_MegapolisHydrant:"fire hydrant",Fig_MegapolisTrashBin:"wheelie bin",Fig_MegapolisWoodPallet:"wooden pallet",Fig_Miche:"Sea Snail Man",Fig_Miche01:"Sea Snail Man (Fire)",Fig_Miche02:"Sea Snail Man (Love)",Fig_Miche03:"Sea Snail Man (Darkness)",Fig_Miche04:"Sea Snail Man (Sky)",Fig_Miche05:"Sea Snail Man (Ghost)",Fig_MiniGameReward01:"Tri-Stringer card shield",Fig_MiniGameReward02:"Trizooka card shield",Fig_MiniGameReward03:"Smallfry card shield",Fig_MirrorAunSculpture00:"heroic octopus",Fig_MirrorAunSculpture01:"heroic squid",Fig_MirrorLantern00:"lantern",Fig_MirrorMudskipperSculpture00:"closed-mouth mudskipper",Fig_MirrorMudskipperSculpture01:"open-mouth mudskipper",Fig_MirrorOfferingBox00:"donation box",Fig_Mop00:"gray mop",Fig_Mop01:"yellow mop",Fig_MrShrug:"Mister Shrug",Fig_MsnArmor:"armor",Fig_MsnBox00:"Alterna-style cardboard box",Fig_MsnBoxTargetL00:"target crate",Fig_MsnBoxTargetL01:"hard target crate",Fig_MsnFindObj00:"stuffed Zapfish",Fig_MsnFindObj01:"ancient face",Fig_MsnFindObj02:"snowmobile",Fig_MsnFindObj03:"small amp",Fig_MsnFindObj04:"blue metal barrel",Fig_MsnFindObj05:"red metal barrel",Fig_MsnFindObj06:"ancient pose",Fig_MsnFindObj07:"3D printer",Fig_MsnFindObj08:"medium amp",Fig_MsnFindObj09:"kidney anatomy model",Fig_MsnFindObj10:"eye anatomy model",Fig_MsnFindObj11:"micro shelter",Fig_MsnFindObj12:"container",Fig_MsnFindObj13:"large amp",Fig_MsnFindObj14:"power generator",Fig_MsnFindObj16:"submarine",Fig_MsnFindObj17:"dragon paper lantern",Fig_MsnFindObj18:"sports car",Fig_MsnFindObj26:"server",Fig_MsnFindObj27:"record player",Fig_MsnGrindRailRing:"squid ring",Fig_MsnMovePainter:"ink wheel",Fig_MsnSnakeBlockBase:"soaker block",Fig_MsnSponge:"sponge",Fig_MsnSwitchShock:"ink switch",Fig_MsnWeaponParts:"Sardinium",Fig_MugCup00:"octo mug",Fig_MugCup01:"SquidForce mug",Fig_MugCup02:"monkey-crab mug",Fig_MugCup03:"cherry mug",Fig_MugCup04:"Mister Shrug mug",Fig_MugCup05:"Deep-Fried Shwaffle mug",Fig_MzShrug:"Missus Shrug",Fig_NES:"Intended Entertainment System",Fig_NewsPaper:"stack of newspapers",Fig_Nintendo64:"eight-squared game system",Fig_OrcaFossil:"orca fossil",Fig_PaintBrush00:"fish-bone paintbrush stand",Fig_PaintBrush01:"basic paintbrush stand",Fig_PaintBrush02:"cheese-label paintbrush stand",Fig_PaintBrush03:"snack-label paintbrush stand",Fig_PaintBrush04:"holo paintbrush stand",Fig_ParabolicAntenna:"parabolic antenna",Fig_PettanDoll:"sticky squid toy",Fig_PipeChair00:"folding chair",Fig_Plaster00:"plaster bust sculpture",Fig_Plaster01:"plaster face sculpture",Fig_PlasticBottle00:"grape soda",Fig_PlasticBottle01:"ink cola",Fig_PlasticBottle02:"green tea",Fig_PlasticBottle03:"catfish-brand nectar",Fig_PlasticBottle04:"sports drink",Fig_PlasticBottle05:"café au lait",Fig_PlasticBottle06:"mineral water",Fig_PlasticBottle07:"orange juice",Fig_PropaneGas:"gray propane tank",Fig_RingBinder00:"purple loose-leaf binder",Fig_RingBinder01:"navy loose-leaf binder",Fig_RingBinder02:"brown loose-leaf binder",Fig_RingBinder03:"orange loose-leaf binder",Fig_RingBinder04:"green loose-leaf binder",Fig_RingBinder05:"yellow loose-leaf binder",Fig_SNES:"Supreme Ness",Fig_SakeBalloon:"Salmonid balloon",Fig_SakeFloatingLantern00:"orange Salmonid paper lantern",Fig_SakeFloatingLantern01:"blue Salmonid paper lantern",Fig_SakeFloatingLantern02:"green Salmonid paper lantern",Fig_SakeNeonA:"neon Salmonid sign",Fig_SakeNeonB:"neon Salmonid-swarm sign",Fig_SakeNeonC:"neon sockeye-Salmonid sign",Fig_SakeNeonD:"neon lucky-Salmonid sign",Fig_Sakebeko:"Chum bobblehead",Fig_Sazae:"Super Sea Snail",Fig_Shachihoko:"Rainmaker",Fig_SharkTooth:"shark jaws",Fig_Shovel:"shovel",Fig_ShrimpBess00:"shrimpet",Fig_SighterTargetCoop00:"Salmonid bumper",Fig_SighterTargetLarge:"big squid bumper",Fig_SighterTarget_Black:"black squid bumper",Fig_SighterTarget_Blue:"blue squid bumper",Fig_SighterTarget_Green:"green squid bumper",Fig_SighterTarget_Orange:"orange squid bumper",Fig_SighterTarget_Purple:"pink squid bumper",Fig_SighterTarget_Yellow:"yellow squid bumper",Fig_SkateBoard00:"ink-splattered skateboard",Fig_SkateBoard00_01:"monkey-crab skateboard",Fig_SkateBoard00_02:"Shellendorf skateboard",Fig_SkateBoard00_03:"big-logo skateboard",Fig_SkateBoard00_04:"Mister Munchy skateboard",Fig_SkateBoard00_05:"Skalop skateboard",Fig_SkateBoard00_06:"Inkling skateboard",Fig_SkateBoard00_07:"Octoling skateboard",Fig_SkateBoard00_08:"Squiddor skateboard",Fig_SkateBoard00_09:"Saturday skateboard",Fig_SkateBoard00_10:"re-stickulous skateboard",Fig_SkateBoard00_11:"dynamic skateboard",Fig_Snack00:"crunchy snacks",Fig_Snack01:"crispy snacks",Fig_Snack02:"salted munchy snacks",Fig_Snack03:"cheesy munchy snacks",Fig_Snack04:"wasabi munchy snacks",Fig_Snack05:"teriyaki munchy snacks",Fig_Snack06:"crusty snacks",Fig_Snack07:"chewy snacks",Fig_Snack08:"crisp snacks",Fig_Snack09:"munchable snacks",Fig_SnowGlobeRailKing:"DJ snow globe",Fig_Spawner:"spawner",Fig_SquidCushion00:"yellow squid cushion",Fig_SquidCushion01:"blue squid cushion",Fig_SquidCushion02:"pink squid cushion",Fig_SquidCushion03:"green squid cushion",Fig_SquidCushion04:"orange squid cushion",Fig_SquidCushion05:"purple squid cushion",Fig_SquidDoll00:"pink squid friend",Fig_SquidDoll01:"solar squid friend",Fig_SquidDoll02:"abyssal squid friend",Fig_SquidDoll03:"verdant squid friend",Fig_SquidDoll04:"fiery squid friend",Fig_SquidDoll05:"demonic squid friend",Fig_Stepladder00:"stepladder",Fig_StrapInkFish:"squid cellie charm",Fig_StrapOctopus:"octo cellie charm",Fig_StudioCushion00:"floor cushion",Fig_SurimiNeon00:"neon Deep Cut sign",Fig_SurimiTVscreen:"studio TV",Fig_TakeoutBox00:"white takeout box",Fig_TakeoutBox01:"black takeout box",Fig_TakeoutBox02:"beige takeout box",Fig_TakeoutBox03:"checkered takeout box",Fig_Thickbook00:"antique book",Fig_Thickbook01:"illustrated insect field guide",Fig_Thickbook02:"Dinosaur Stories",Fig_Thickbook03:"Intro to Inking: Squid 101",Fig_Thickbook04:"All of the Math",Fig_TissueBox:"tissue box",Fig_Torii:"torii gate",Fig_Towel00:"white towel",Fig_Towel01:"small blue towel",Fig_Towel02:"purple towel",Fig_Towel03:"small black towel",Fig_Towel04:"small red towel",Fig_Towel05:"small pink towel",Fig_Towel06:"brown towel",Fig_Transceiver:"old-school radio",Fig_Tuna:"Mister Tuna",Fig_TunnelBigNamazu:"Great Zapfish",Fig_TunnelSquidFountain:"mersquid statue",Fig_UdemaeReward_Lv01:"S+ Rank trophy",Fig_UdemaeReward_Lv02:"S Rank trophy",Fig_UdemaeReward_Lv03:"A Rank trophy",Fig_UdemaeReward_Lv04:"B Rank trophy",Fig_Umbrella00:"plastic umbrella",Fig_UmbrellaNostalgia:"Japanese umbrella",Fig_VideoGame00_00:"Tentacle Nights",Fig_VideoGame00_01:"Contain the Kraken",Fig_VideoGame00_02:"Monkey Crab in Silly Land",Fig_VideoGame01_00:"The Squid Ninja Story",Fig_VideoGame01_01:"Volley Volley Panic",Fig_VideoGame01_02:"Commander Cephaloid",Fig_VideoGame02_00:"Octo Kong Country",Fig_VideoGame02_01:"Tentacube in Octo-D!",Fig_VideoGame02_02:"Super Squid Collection",Fig_WaterBottle00:"aqua water bottle",Fig_WaterBottle01:"lime water bottle",Fig_WaterBottle02:"sunset water bottle",Fig_WaterBottle03:"dark water bottle",Fig_WaterBottle04:"energy water bottle",Fig_WaterBottle05:"passion-fruit water bottle",Fig_WeirdDoll00:"mysterious dried thing",Fig_WeirdDoll01:"cotton-candy squid friend",Fig_WeirdDoll02:"mocha squid friend",Fig_WeirdDoll03:"chestnut squid friend",Fig_WoodenBoat:"wooden boat",Fig_Yagura:"Tower Control Tower",Fig_YaguraReward:"Tower Control trophy",Grf_Sti_Character_28:"ANG-OKTO character",Grf_Sti_Character_29:"ANG-SQD character",Grf_Sti_Decoration_14:"SFSH-SKN deco",Grf_Sti_Decoration_15:"KIT stencil",Grf_Sti_Decoration_16:"RCDG stencil",Grf_Sti_Decoration_17:"DRMA stencil",Grf_Sti_Decoration_21:"MM-TRT stencil",Grf_Sti_Decoration_25:"TTP deco",Grf_Sti_Decoration_26:"LOPJF-GN deco",Grf_Sti_Decoration_27:"HSE deco",Grf_Sti_Graffiti_00:"SP0P-INK graffiti",Grf_Sti_Graffiti_01:"SQST graffiti",Grf_Sti_Graffiti_02:"SHFSHG graffiti",Grf_Sti_Graffiti_03:"SQDR graffiti",Grf_Sti_Graffiti_04:"SQSK graffiti",Grf_Sti_Graffiti_05:"JFSH-LO graffiti",Grf_Sti_Graffiti_06:"BLBL graffiti",Grf_Sti_Graffiti_07:"MNA? graffiti",Grf_Sti_Graffiti_08:"PRL? graffiti",Grf_Sti_Graffiti_09:"2NML graffiti",Grf_Sti_Graffiti_10:"AR0Z graffiti",Grf_Sti_Graffiti_11:"10TKL graffiti",Grf_Sti_Graffiti_12:"OKTNGL graffiti",Grf_Sti_Graffiti_13:"SG-B0NLY graffiti",Grf_Sti_Graffiti_14:"SG-SQWVLG graffiti",Grf_Sti_Graffiti_15:"SG-MASQ graffiti",Grf_Sti_Graffiti_16:"SG-BNHPHN graffiti",Grf_Sti_Graffiti_17:"SG-OA graffiti",Grf_Sti_Graffiti_18:"SG-ISO graffiti",Grf_Sti_Graffiti_19:"ELTL-CAL graffiti",Grf_Sti_Graffiti_20:"TS-SAL graffiti",Grf_Sti_Graffiti_21:"TS-C0HK graffiti",Grf_Sti_Graffiti_22:"TS-SWD graffiti",Grf_Sti_Graffiti_25:"TS-WHPL graffiti",Grf_Sti_Graffiti_26:"TS-TWR graffiti",Grf_Sti_Graffiti_27:"TS-ORBRS graffiti",Grf_Sti_Graffiti_28:"TS-CMP graffiti",Grf_Sti_Graffiti_29:"TS-RLPL graffiti",Grf_Sti_Graffiti_31:"TS-SCHL graffiti",Grf_Sti_Graffiti_32:"TS-FLT graffiti",Grf_Sti_Graffiti_34:"TS-SMFR graffiti",Grf_Sti_Graffiti_35:"TS-LGF8Z graffiti",Grf_Sti_Graffiti_36:"TS-FSC0 graffiti",Grf_Sti_Graffiti_37:"TS-C0HZ graffiti",Grf_Sti_Graffiti_39:"SD0-K graffiti",Grf_Sti_Graffiti_41:"SD0-STR graffiti",Grf_Sti_Graffiti_42:"SD0-SQDS graffiti",Grf_Sti_Graffiti_44:"BWTR-SPRGS-MR0R graffiti",Grf_Sti_Graffiti_45:"FCS graffiti",Grf_Sti_Graffiti_46:"RPL graffiti",Grf_Sti_Graffiti_47:"AGL graffiti",Grf_Sti_Graffiti_48:"AOP graffiti",Grf_Sti_Graffiti_49:"HIF graffiti",Grf_Sti_Graffiti_50:"GMK graffiti",Grf_Sti_Graffiti_51:"CFH graffiti",Grf_Sti_Graffiti_52:"ISA graffiti",Grf_Sti_Graffiti_53:"AFS graffiti",Grf_Sti_Graffiti_54:"OCT graffiti",Grf_Sti_Graffiti_55:"GRD graffiti",Grf_Sti_Graffiti_56:"DRD graffiti",Grf_Sti_Graffiti_57:"FPL graffiti",Grf_Sti_Graffiti_58:"BCS graffiti",Grf_Sti_Graffiti_59:"HOS graffiti",Grf_Sti_Graffiti_60:"YSD graffiti",Grf_Sti_Graffiti_61:"BSD graffiti",Grf_Sti_Graffiti_62:"WSD graffiti",Grf_Sti_Graffiti_63:"LOS graffiti",Grf_Sti_Graffiti_64:"SCC-ZZ graffiti",Grf_Sti_Graffiti_65:"SCC-LAS graffiti",Grf_Sti_Graffiti_66:"SCC-MEP graffiti",Grf_Sti_Signboard_23:"BWTR-BTHS sign",Grf_Sti_Signboard_45:"CBM sign",Hla_Sti_Wst_Blaster_LightLong_00_Lv01:"Rapid Blaster Pro holo sticker",Hla_Sti_Wst_Blaster_LightLong_01_Lv01:"Rapid Blaster Pro Deco holo sticker",Hla_Sti_Wst_Blaster_LightShort_00_Lv01:"Clash Blaster holo sticker",Hla_Sti_Wst_Blaster_LightShort_01_Lv01:"Clash Blaster Neo holo sticker",Hla_Sti_Wst_Blaster_Light_00_Lv01:"Rapid Blaster holo sticker",Hla_Sti_Wst_Blaster_Light_01_Lv01:"Rapid Blaster Deco holo sticker",Hla_Sti_Wst_Blaster_Long_00_Lv01:"Range Blaster holo sticker",Hla_Sti_Wst_Blaster_Middle_00_Lv01:"Blaster holo sticker",Hla_Sti_Wst_Blaster_Middle_01_Lv01:"Custom Blaster holo sticker",Hla_Sti_Wst_Blaster_Precision_00_Lv01:"S-BLAST '92 holo sticker",Hla_Sti_Wst_Blaster_Precision_01_Lv01:"S-BLAST '91 holo sticker",Hla_Sti_Wst_Blaster_Short_00_Lv01:"Luna Blaster holo sticker",Hla_Sti_Wst_Blaster_Short_01_Lv01:"Luna Blaster Neo holo sticker",Hla_Sti_Wst_Brush_Heavy_00_Lv01:"Painbrush holo sticker",Hla_Sti_Wst_Brush_Heavy_01_Lv01:"Painbrush Nouveau holo sticker",Hla_Sti_Wst_Brush_Mini_00_Lv01:"Inkbrush holo sticker",Hla_Sti_Wst_Brush_Mini_01_Lv01:"Inkbrush Nouveau holo sticker",Hla_Sti_Wst_Brush_Normal_00_Lv01:"Octobrush holo sticker",Hla_Sti_Wst_Brush_Normal_01_Lv01:"Octobrush Nouveau holo sticker",Hla_Sti_Wst_Charger_Keeper_00_Lv01:"Goo Tuber holo sticker",Hla_Sti_Wst_Charger_Keeper_01_Lv01:"Custom Goo Tuber holo sticker",Hla_Sti_Wst_Charger_Light_00_Lv01:"Bamboozler 14 Mk I holo sticker",Hla_Sti_Wst_Charger_LongScope_00_Lv01:"E-liter 4K Scope holo sticker",Hla_Sti_Wst_Charger_Long_00_Lv01:"E-liter 4K holo sticker",Hla_Sti_Wst_Charger_NormalScope_00_Lv01:"Splatterscope holo sticker",Hla_Sti_Wst_Charger_NormalScope_01_Lv01:"Z+F Splatterscope holo sticker",Hla_Sti_Wst_Charger_Normal_00_Lv01:"Splat Charger holo sticker",Hla_Sti_Wst_Charger_Normal_01_Lv01:"Z+F Splat Charger holo sticker",Hla_Sti_Wst_Charger_Pencil_00_Lv01:"Snipewriter 5H holo sticker",Hla_Sti_Wst_Charger_Pencil_01_Lv01:"Snipewriter 5B holo sticker",Hla_Sti_Wst_Charger_Quick_00_Lv01:"Classic Squiffer holo sticker",Hla_Sti_Wst_Maneuver_Dual_00_Lv01:"Dualie Squelchers holo sticker",Hla_Sti_Wst_Maneuver_Dual_01_Lv01:"C. Dualie Squelchers holo sticker",Hla_Sti_Wst_Maneuver_Gallon_00_Lv01:"Glooga Dualies holo sticker",Hla_Sti_Wst_Maneuver_Normal_00_Lv01:"Splat Dualies holo sticker",Hla_Sti_Wst_Maneuver_Normal_01_Lv01:"Enperry Splat Dualies holo sticker",Hla_Sti_Wst_Maneuver_Short_00_Lv01:"Dapple Dualies holo sticker",Hla_Sti_Wst_Maneuver_Short_01_Lv01:"Dapple Dualies Nouveau holo sticker",Hla_Sti_Wst_Maneuver_Stepper_00_Lv01:"Dark Tetra Dualies holo sticker",Hla_Sti_Wst_Maneuver_Stepper_01_Lv01:"Light Tetra Dualies holo sticker",Hla_Sti_Wst_Roller_Compact_00_Lv01:"Carbon Roller holo sticker",Hla_Sti_Wst_Roller_Compact_01_Lv01:"Carbon Roller Deco holo sticker",Hla_Sti_Wst_Roller_Heavy_00_Lv01:"Dynamo Roller holo sticker",Hla_Sti_Wst_Roller_Heavy_01_Lv01:"Gold Dynamo Roller holo sticker",Hla_Sti_Wst_Roller_Hunter_00_Lv01:"Flingza Roller holo sticker",Hla_Sti_Wst_Roller_Normal_00_Lv01:"Splat Roller holo sticker",Hla_Sti_Wst_Roller_Normal_01_Lv01:"Krak-On Splat Roller holo sticker",Hla_Sti_Wst_Roller_Wide_00_Lv01:"Big Swig Roller holo sticker",Hla_Sti_Wst_Roller_Wide_01_Lv01:"Big Swig Roller Express holo sticker",Hla_Sti_Wst_Saber_Lite_00_Lv01:"Splatana Wiper holo sticker",Hla_Sti_Wst_Saber_Lite_01_Lv01:"Splatana Wiper Deco holo sticker",Hla_Sti_Wst_Saber_Normal_00_Lv01:"Splatana Stamper holo sticker",Hla_Sti_Wst_Saber_Normal_01_Lv01:"Neo Splatana Stamper holo sticker",Hla_Sti_Wst_Shelter_Compact_00_Lv01:"Undercover Brella holo sticker",Hla_Sti_Wst_Shelter_Compact_01_Lv01:"Undercover S. Brella holo sticker",Hla_Sti_Wst_Shelter_Normal_00_Lv01:"Splat Brella holo sticker",Hla_Sti_Wst_Shelter_Normal_01_Lv01:"Sorella Brella holo sticker",Hla_Sti_Wst_Shelter_Wide_00_Lv01:"Tenta Brella holo sticker",Hla_Sti_Wst_Shelter_Wide_01_Lv01:"Tenta Sorella Brella holo sticker",Hla_Sti_Wst_Shooter_Blaze_00_Lv01:"Aerospray MG holo sticker",Hla_Sti_Wst_Shooter_Blaze_01_Lv01:"Aerospray RG holo sticker",Hla_Sti_Wst_Shooter_Expert_00_Lv01:"Splattershot Pro holo sticker",Hla_Sti_Wst_Shooter_Expert_01_Lv01:"Forge Splattershot Pro holo sticker",Hla_Sti_Wst_Shooter_First_00_Lv01:"Splattershot Jr. holo sticker",Hla_Sti_Wst_Shooter_First_01_Lv01:"Custom Splattershot Jr. holo sticker",Hla_Sti_Wst_Shooter_Flash_00_Lv01:"Squeezer holo sticker",Hla_Sti_Wst_Shooter_Flash_01_Lv01:"Foil Squeezer holo sticker",Hla_Sti_Wst_Shooter_Gravity_00_Lv01:".52 Gal holo sticker",Hla_Sti_Wst_Shooter_Heavy_00_Lv01:".96 Gal holo sticker",Hla_Sti_Wst_Shooter_Heavy_01_Lv01:".96 Gal Deco holo sticker",Hla_Sti_Wst_Shooter_Long_00_Lv01:"Jet Squelcher holo sticker",Hla_Sti_Wst_Shooter_Long_01_Lv01:"Custom Jet Squelcher holo sticker",Hla_Sti_Wst_Shooter_Normal_00_Lv01:"Splattershot holo sticker",Hla_Sti_Wst_Shooter_Normal_01_Lv01:"Tentatek Splattershot holo sticker",Hla_Sti_Wst_Shooter_Normal_H_Lv01:"Hero Shot Replica holo sticker",Hla_Sti_Wst_Shooter_Precision_00_Lv01:"Splash-o-matic holo sticker",Hla_Sti_Wst_Shooter_Precision_01_Lv01:"Neo Splash-o-matic holo sticker",Hla_Sti_Wst_Shooter_QuickLong_00_Lv01:"Splattershot Nova holo sticker",Hla_Sti_Wst_Shooter_QuickLong_01_Lv01:"Annaki Splattershot Nova holo sticker",Hla_Sti_Wst_Shooter_QuickMiddle_00_Lv01:"N-ZAP '85 holo sticker",Hla_Sti_Wst_Shooter_QuickMiddle_01_Lv01:"N-ZAP '89 holo sticker",Hla_Sti_Wst_Shooter_Short_00_Lv01:"Sploosh-o-matic holo sticker",Hla_Sti_Wst_Shooter_Short_01_Lv01:"Neo Sploosh-o-matic holo sticker",Hla_Sti_Wst_Shooter_TripleMiddle_00_Lv01:"H-3 Nozzlenose holo sticker",Hla_Sti_Wst_Shooter_TripleMiddle_01_Lv01:"H-3 Nozzlenose D holo sticker",Hla_Sti_Wst_Shooter_TripleQuick_00_Lv01:"L-3 Nozzlenose holo sticker",Hla_Sti_Wst_Shooter_TripleQuick_01_Lv01:"L-3 Nozzlenose D holo sticker",Hla_Sti_Wst_Slosher_Bathtub_00_Lv01:"Bloblobber holo sticker",Hla_Sti_Wst_Slosher_Bathtub_01_Lv01:"Bloblobber Deco holo sticker",Hla_Sti_Wst_Slosher_Diffusion_00_Lv01:"Tri-Slosher holo sticker",Hla_Sti_Wst_Slosher_Diffusion_01_Lv01:"Tri-Slosher Nouveau holo sticker",Hla_Sti_Wst_Slosher_Double_00_Lv01:"Dread Wringer holo sticker",Hla_Sti_Wst_Slosher_Launcher_00_Lv01:"Sloshing Machine holo sticker",Hla_Sti_Wst_Slosher_Launcher_01_Lv01:"Sloshing Machine Neo holo sticker",Hla_Sti_Wst_Slosher_Strong_00_Lv01:"Slosher holo sticker",Hla_Sti_Wst_Slosher_Strong_01_Lv01:"Slosher Deco holo sticker",Hla_Sti_Wst_Slosher_Washtub_00_Lv01:"Explosher holo sticker",Hla_Sti_Wst_Spinner_Downpour_00_Lv01:"Ballpoint Splatling holo sticker",Hla_Sti_Wst_Spinner_Downpour_01_Lv01:"Ballpoint Splatling Nouveau holo stk.",Hla_Sti_Wst_Spinner_HyperShort_00_Lv01:"Heavy Edit Splatling holo sticker",Hla_Sti_Wst_Spinner_Hyper_00_Lv01:"Hydra Splatling holo sticker",Hla_Sti_Wst_Spinner_Quick_00_Lv01:"Mini Splatling holo sticker",Hla_Sti_Wst_Spinner_Quick_01_Lv01:"Zink Mini Splatling holo sticker",Hla_Sti_Wst_Spinner_Serein_00_Lv01:"Nautilus 47 holo sticker",Hla_Sti_Wst_Spinner_Standard_00_Lv01:"Heavy Splatling holo sticker",Hla_Sti_Wst_Spinner_Standard_01_Lv01:"Heavy Splatling Deco holo sticker",Hla_Sti_Wst_Stringer_Normal_00_Lv01:"Tri-Stringer holo sticker",Hla_Sti_Wst_Stringer_Normal_01_Lv01:"Inkline Tri-Stringer holo sticker",Hla_Sti_Wst_Stringer_Short_00_Lv01:"REEF-LUX 450 holo sticker",Hla_Sti_Wst_Stringer_Short_01_Lv01:"REEF-LUX 450 Deco holo sticker",Hlg_Sti_Character_04:"SQSN-HOLO character",Hlg_Sti_Character_08:"ANG0-HOLO character",Hlg_Sti_Sticker_85:"SPKL-HOLO sticker",Mpt_Normal_White:"regular locker",Mpt_Old_White:"shabby locker",Mpt_Painted_Black:"black locker",Mpt_Painted_Blue:"light-blue locker",Mpt_Painted_CobaltBlue:"blue locker",Mpt_Painted_Cream:"cream-colored locker",Mpt_Painted_GalPink:"magenta locker",Mpt_Painted_Green:"green locker",Mpt_Painted_NeutralGray:"gray locker",Mpt_Painted_Pink:"pink locker",Mpt_Painted_Red:"red locker",Mpt_Painted_White:"white locker",Mpt_Painted_Yellow:"yellow locker",Mpt_Wooden_Cypress:"cypress-wood locker",Mpt_Wooden_Lacquered:"lacquered-wood locker",Mpt_Wooden_Walnut:"walnut-wood locker",Mtl_Sti_Character_05:"OKTSN-G character",Mtl_Sti_Contest_Sakediver_Lv02:"bronze Maws sticker",Mtl_Sti_Contest_Sakediver_Lv03:"silver Maws sticker",Mtl_Sti_Contest_Sakediver_Lv04:"gold Maws sticker",Mtl_Sti_Contest_SakelienBomber_Lv02:"bronze Steelhead sticker",Mtl_Sti_Contest_SakelienBomber_Lv03:"silver Steelhead sticker",Mtl_Sti_Contest_SakelienBomber_Lv04:"gold Steelhead sticker",Mtl_Sti_Contest_SakelienCupTwins_Lv02:"bronze Flyfish sticker",Mtl_Sti_Contest_SakelienCupTwins_Lv03:"silver Flyfish sticker",Mtl_Sti_Contest_SakelienCupTwins_Lv04:"gold Flyfish sticker",Mtl_Sti_Contest_SakelienShield_Lv02:"bronze Scrapper sticker",Mtl_Sti_Contest_SakelienShield_Lv03:"silver Scrapper sticker",Mtl_Sti_Contest_SakelienShield_Lv04:"gold Scrapper sticker",Mtl_Sti_Contest_SakelienSnake_Lv02:"bronze Steel Eel sticker",Mtl_Sti_Contest_SakelienSnake_Lv03:"silver Steel Eel sticker",Mtl_Sti_Contest_SakelienSnake_Lv04:"gold Steel Eel sticker",Mtl_Sti_Contest_SakelienTower_Lv02:"bronze Stinger sticker",Mtl_Sti_Contest_SakelienTower_Lv03:"silver Stinger sticker",Mtl_Sti_Contest_SakelienTower_Lv04:"gold Stinger sticker",Mtl_Sti_Contest_Sakelien_Lv02:"bronze Chum sticker",Mtl_Sti_Contest_Sakelien_Lv03:"silver Chum sticker",Mtl_Sti_Contest_Sakelien_Lv04:"gold Chum sticker",Mtl_Sti_Contest_Sakerocket_Lv02:"bronze Drizzler sticker",Mtl_Sti_Contest_Sakerocket_Lv03:"silver Drizzler sticker",Mtl_Sti_Contest_Sakerocket_Lv04:"gold Drizzler sticker",Pap_Sti_Character_22:"ANGSQ character",Pap_Sti_Character_25:"XCLM character",Pap_Sti_Decoration_12:"SPCHBL deco",Pap_Sti_Poster_00:"ZNK poster",Pap_Sti_Poster_01:"EPY poster",Pap_Sti_Poster_02:"PRL poster",Pap_Sti_Poster_03:"MNA poster",Pap_Sti_Poster_04:"SQSQD poster",Pap_Sti_Poster_05:"INKWR poster",Pap_Sti_Poster_06:"CARBV poster",Pap_Sti_Poster_07:"BDRNG poster",Pap_Sti_Poster_08:"MTNNK poster",Pap_Sti_Poster_09:"OKTRVNG poster",Pap_Sti_Poster_10:"SPTY poster",Pap_Sti_Poster_11:"AVGDE poster",Pap_Sti_Poster_12:"DRNKPNYL poster",Pap_Sti_Poster_13:"JLYDLY poster",Pap_Sti_Poster_14:"OKTOKTOKT flyer",Pap_Sti_Poster_15:"GCI-WTD poster",Pap_Sti_Poster_17:"GCI-NHPT poster",Pap_Sti_Poster_18:"GCI-DNG poster",Pap_Sti_Poster_19:"GCI-N0SLMN poster",Pap_Sti_Poster_20:"BWTR-SPRGS-HTL poster",Pap_Sti_Poster_21:"MM-LVM poster",Pap_Sti_Poster_22:"NKPL-CS poster",Pap_Sti_Poster_23:"NKPL-WVG poster",Pap_Sti_Poster_24:"NKPL-SSM poster",Pap_Sti_Poster_26:"TSMA poster",Pap_Sti_Poster_27:"TTB poster",Pap_Sti_Poster_28:"GBB poster",Pap_Sti_Poster_29:"RFM poster",Pap_Sti_Poster_30:"BCB poster",Pap_Sti_Poster_31:"LNR poster",Pap_Sti_Poster_32:"SGC poster",Pap_Sti_Poster_33:"BVD poster",Pap_Sti_Poster_34:"BPS poster",Pap_Sti_Poster_35:"UWMT poster",Pap_Sti_Poster_36:"URE poster",Pap_Sti_Poster_37:"BZL poster",Pap_Sti_Poster_38:"FOL poster",Pap_Sti_Poster_39:"IMR poster",Pap_Sti_Poster_40:"COTW poster",Pap_Sti_Poster_41:"JSA poster",Pap_Sti_Poster_42:"SSS poster",Pap_Sti_Poster_43:"ASM poster",Pap_Sti_Poster_44:"FRP poster",Pap_Sti_Poster_45:"FDJ poster",Pap_Sti_Poster_46:"CWC poster",Pap_Sti_Poster_47:"BRF poster",Pap_Sti_Poster_48:"ZEF poster",Pap_Sti_Poster_49:"JRS poster",Pap_Sti_Poster_50:"BES poster",Pap_Sti_Poster_51:"ERL poster",Pap_Sti_Poster_52:"MFO poster",Pap_Sti_Poster_53:"MFS poster",Pap_Sti_Poster_54:"LSF poster",Pap_Sti_Poster_55:"STF poster",Pap_Sti_Poster_56:"OSB poster",Pap_Sti_Poster_57:"ODF poster",Pap_Sti_Poster_58:"HFA poster",Pap_Sti_Signboard_11:"BCF poster",Pap_Sti_Signboard_12:"SOZ-2 poster",Pap_Sti_Signboard_24:"BWTR-N0-T poster",Pap_Sti_Signboard_47:"DOTD-FO hanging",Pap_Sti_Signboard_48:"DOTD-TH hanging",Pap_Sti_Signboard_49:"DOTD-TW hanging",Pap_Sti_Signboard_50:"DOTD-ON hanging",Pap_Sti_Signboard_52:"CL-DDP hanging",Pap_Sti_Signboard_53:"CL-DDB hanging",Pap_Sti_Sticker_20:"TWSNTRN sticker",Pap_Sti_Sticker_24:"FDSTK sticker",Pap_Sti_Sticker_25:"PN3CRN sticker",Spt_Clothesline00:"locker organizer",Spt_Hook00:"hook",Spt_Hook01:"wide hook",Spt_PhotoStand00:"photo stand",Spt_Shelf00:"shelf",Stc_Sti_Character_00:"SONOV-YR character",Stc_Sti_Character_01:"OKTRP character",Stc_Sti_Character_02:"SQSN-Y character",Stc_Sti_Character_03:"OKTSN-P character",Stc_Sti_Character_06:"SM-XX character",Stc_Sti_Character_07:"SM-SM character",Stc_Sti_Character_09:"SQDBDR character",Stc_Sti_Character_10:"3TSCRM character",Stc_Sti_Character_11:"FSHSKT-P character",Stc_Sti_Character_12:"FSHSKT-B character",Stc_Sti_Character_13:"OKTBY character",Stc_Sti_Character_14:"SQDLD character",Stc_Sti_Character_15:"TNBYT character",Stc_Sti_Character_16:"SQDHI-YG character",Stc_Sti_Character_17:"SQDNML-YG character",Stc_Sti_Character_18:"SQDYY-RO character",Stc_Sti_Character_19:"SQDSN-Y character",Stc_Sti_Character_20:"SQDSN-B character",Stc_Sti_Character_21:"SQDSN-P character",Stc_Sti_Character_23:"NMMX character",Stc_Sti_Character_24:"OKT4BRZ character",Stc_Sti_Character_26:"GGTNA character",Stc_Sti_Character_27:"MLTYSQD character",Stc_Sti_Character_30:"FLDRHTS-OKTBY character",Stc_Sti_Character_31:"FLDRHTS-FOAB-Y character",Stc_Sti_Character_32:"BWTR-BE-T character",Stc_Sti_Character_33:"BD-KDZ-MAS character",Stc_Sti_Character_34:"BD-CDBDY character",Stc_Sti_Character_35:"OKTBB character",Stc_Sti_Character_36:"SONOV-YB character",Stc_Sti_Character_37:"SQDNML-YB character",Stc_Sti_Character_38:"SB-ANGSQ character",Stc_Sti_Character_39:"BD-CDBDY-BC character",Stc_Sti_Character_40:"HRMC character",Stc_Sti_Character_41:"BWTR-BE-TS character",Stc_Sti_Character_42:"MSSQ character",Stc_Sti_Character_43:"FLDRHTS-FOAB-O character",Stc_Sti_Character_44:"CL-SFT character",Stc_Sti_Character_45:"RBR-CYN character",Stc_Sti_Contest_Sakediver_Lv01:"basic Maws sticker",Stc_Sti_Contest_SakelienBomber_Lv01:"basic Steelhead sticker",Stc_Sti_Contest_SakelienCupTwins_Lv01:"basic Flyfish sticker",Stc_Sti_Contest_SakelienShield_Lv01:"basic Scrapper sticker",Stc_Sti_Contest_SakelienSnake_Lv01:"basic Steel Eel sticker",Stc_Sti_Contest_SakelienTower_Lv01:"basic Stinger sticker",Stc_Sti_Contest_Sakelien_Lv01:"basic Chum sticker",Stc_Sti_Contest_Sakerocket_Lv01:"basic Drizzler sticker",Stc_Sti_Decoration_00:"PXSQD-P deco",Stc_Sti_Decoration_01:"PXSQD-B deco",Stc_Sti_Decoration_02:"K3POWT tape",Stc_Sti_Decoration_03:"N3TRY tape",Stc_Sti_Decoration_04:"AN3TRYWSO tape",Stc_Sti_Decoration_05:"I-IZ deco",Stc_Sti_Decoration_06:"UO-IZ deco",Stc_Sti_Decoration_07:"ANG-IZ deco",Stc_Sti_Decoration_08:"DZY-IZ deco",Stc_Sti_Decoration_09:"WNQ-IZ deco",Stc_Sti_Decoration_10:"EX0-1 deco",Stc_Sti_Decoration_11:"EX0-2 deco",Stc_Sti_Decoration_13:"MTNMTN deco",Stc_Sti_Decoration_22:"MM-DGL-B tape",Stc_Sti_Decoration_23:"FOE deco",Stc_Sti_Decoration_24:"PXSQD-BK deco",Stc_Sti_Decoration_28:"GME tape",Stc_Sti_Decoration_29:"DNC tape",Stc_Sti_Decoration_30:"MM-DGL-O tape",Stc_Sti_Decoration_32:"BFD-OTL deco",Stc_Sti_Graffiti_67:"BFD-GRY graffiti",Stc_Sti_Graffiti_68:"BFD-OPT graffiti",Stc_Sti_Graffiti_69:"RBR-DGR graffiti",Stc_Sti_Logo_00:"Octopus 3 logo",Stc_Sti_Logo_01:"Squid 3 logo",Stc_Sti_Logo_02:"Barazushi logo",Stc_Sti_Logo_03:"Emberz logo",Stc_Sti_Logo_04:"Squid 2-B logo",Stc_Sti_Logo_05:"Zink logo",Stc_Sti_Logo_06:"Firefin FFN-Y logo",Stc_Sti_Logo_07:"Firefin FFN-R logo",Stc_Sti_Logo_08:"Skalop logo",Stc_Sti_Logo_09:"Forge logo",Stc_Sti_Logo_10:"Toni Kensa logo",Stc_Sti_Logo_11:"Annaki logo",Stc_Sti_Logo_12:"Enperry logo",Stc_Sti_Logo_13:"Takoroka logo",Stc_Sti_Logo_14:"Tentatek logo",Stc_Sti_Logo_15:"Inkline logo",Stc_Sti_Logo_16:"Zekko D1MND logo",Stc_Sti_Logo_17:"SquidForce logo",Stc_Sti_Logo_18:"Rockenberg logo",Stc_Sti_Logo_19:"Krak-On logo",Stc_Sti_Logo_20:"Zekko ZPZP logo",Stc_Sti_Logo_21:"Zekko MLTY logo",Stc_Sti_Logo_22:"iShipIt logo",Stc_Sti_Logo_23:"Firefin CH0 logo",Stc_Sti_Logo_24:"Z+F logo",Stc_Sti_Logo_25:"Splash Mob logo",Stc_Sti_Logo_26:"ZF-RD Z+F logo",Stc_Sti_Logo_27:"Deep Cut logo",Stc_Sti_Logo_28:"Hohojiro family crest",Stc_Sti_Logo_29:"Onaga family crest",Stc_Sti_Logo_30:"Manta family crest",Stc_Sti_Logo_31:"Squid Sisters logo",Stc_Sti_Logo_32:"ZF-BL Z+F logo",Stc_Sti_Logo_33:"ZF-YE Z+F logo",Stc_Sti_Logo_34:"ZF-GR Z+F logo",Stc_Sti_MiniGame_RankAward_Lv01:"Tableturf Battle sticker 1",Stc_Sti_MiniGame_RankAward_Lv02:"Tableturf Battle sticker 2",Stc_Sti_MiniGame_RankAward_Lv03:"Tableturf Battle sticker 3",Stc_Sti_MiniGame_RankAward_Lv04:"Tableturf Battle sticker 4",Stc_Sti_MiniGame_RankAward_Lv05:"Tableturf Battle sticker 5",Stc_Sti_MiniGame_RankAward_Lv06:"Tableturf Battle sticker 6",Stc_Sti_MiniGame_RankAward_Lv07:"Tableturf Battle sticker 7",Stc_Sti_Poster_25:"BD-KDZ-RLS poster",Stc_Sti_Poster_59:"RBR-DOW poster",Stc_Sti_Signboard_00:"STY1 sign",Stc_Sti_Signboard_01:"PRHBTD sign",Stc_Sti_Signboard_02:"WRNSHK sign",Stc_Sti_Signboard_03:"H-UP sign",Stc_Sti_Signboard_04:"HZRDZ sign",Stc_Sti_Signboard_05:"NTAL0ED sign",Stc_Sti_Signboard_06:"THABGN0 sign",Stc_Sti_Signboard_07:"CTNWVZ sign",Stc_Sti_Signboard_08:"SBMRG sign",Stc_Sti_Signboard_09:"SDQLD sign",Stc_Sti_Signboard_10:"CTNGR8 sign",Stc_Sti_Signboard_13:"SOZ-3 sign",Stc_Sti_Signboard_14:"Grizzco Industries logo",Stc_Sti_Signboard_17:"SR-BWRBGNR sign",Stc_Sti_Signboard_18:"SR-UDTRG sign",Stc_Sti_Signboard_19:"SR-WRNZ sign",Stc_Sti_Signboard_20:"FLDRHTS-APTS sign",Stc_Sti_Signboard_21:"FLDRHTS-BBSHP sign",Stc_Sti_Signboard_22:"FLDRHTS-0-MAT sign",Stc_Sti_Signboard_26:"BD-FL-OCE pennant",Stc_Sti_Signboard_27:"BD-FL-BPT sign",Stc_Sti_Signboard_28:"EE-SQ sign",Stc_Sti_Signboard_29:"EE-OCT sign",Stc_Sti_Signboard_30:"GSF sign",Stc_Sti_Signboard_31:"NOBP sign",Stc_Sti_Signboard_32:"LRS sign",Stc_Sti_Signboard_33:"GSA sign",Stc_Sti_Signboard_34:"LJS sign",Stc_Sti_Signboard_35:"WFZ sign",Stc_Sti_Signboard_36:"SEZ sign",Stc_Sti_Signboard_37:"BLR sign",Stc_Sti_Signboard_38:"LBS sign",Stc_Sti_Signboard_39:"CWF sign",Stc_Sti_Signboard_40:"HWM sign",Stc_Sti_Signboard_41:"ARL sign",Stc_Sti_Signboard_42:"SBB sign",Stc_Sti_Signboard_43:"ESB sign",Stc_Sti_Signboard_44:"TDR sign",Stc_Sti_Signboard_46:"VSL sign",Stc_Sti_Signboard_51:"CL-SFW sign",Stc_Sti_Signboard_54:"BFD-SBA sign",Stc_Sti_Signboard_55:"RBR-SPL sign",Stc_Sti_Signboard_56:"RBR-CLG sign",Stc_Sti_Sticker_00:"OKTSSGE sticker",Stc_Sti_Sticker_01:"PXSQD sticker",Stc_Sti_Sticker_02:"BGGFVBZ sticker",Stc_Sti_Sticker_03:"FNG-P sticker",Stc_Sti_Sticker_04:"3CH-B sticker",Stc_Sti_Sticker_05:"3CH-P sticker",Stc_Sti_Sticker_06:"3CH-O sticker",Stc_Sti_Sticker_07:"FRGL sticker",Stc_Sti_Sticker_08:"FRGL-LG sticker",Stc_Sti_Sticker_09:"STLBL-Y sticker",Stc_Sti_Sticker_10:"STBCD-Y sticker",Stc_Sti_Sticker_11:"SQDWV-TDP sticker",Stc_Sti_Sticker_12:"SQDRCD-NV sticker",Stc_Sti_Sticker_13:"3CHZ sticker",Stc_Sti_Sticker_14:"FRGL-X2 sticker",Stc_Sti_Sticker_15:"RBTSML sticker",Stc_Sti_Sticker_16:"BVLV sticker",Stc_Sti_Sticker_17:"PTYSQD-B sticker",Stc_Sti_Sticker_18:"PTYSQD-R sticker",Stc_Sti_Sticker_19:"SQDWV-RB sticker",Stc_Sti_Sticker_21:"SQD-WNQ sticker",Stc_Sti_Sticker_22:"ELDRSQD-I sticker",Stc_Sti_Sticker_23:"JMPSMN sticker",Stc_Sti_Sticker_26:"EET-TPT-SM sticker",Stc_Sti_Sticker_27:"EET-TPT-LG sticker",Stc_Sti_Sticker_28:"SG-TF-FLA sticker",Stc_Sti_Sticker_29:"SG-ATN-OTSP sticker",Stc_Sti_Sticker_30:"SG-ATN-DPC sticker",Stc_Sti_Sticker_32:"GCI-FSH sticker",Stc_Sti_Sticker_33:"GCI-BW sticker",Stc_Sti_Sticker_34:"FLDRHTS-3CLR sticker",Stc_Sti_Sticker_35:"BWTR-SQDLNS sticker",Stc_Sti_Sticker_36:"MM-MRL sticker",Stc_Sti_Sticker_37:"NKPL-SQS sticker",Stc_Sti_Sticker_38:"NKPL-CLH sign",Stc_Sti_Sticker_39:"MM-RMR sticker",Stc_Sti_Sticker_40:"HU-PTR sticker",Stc_Sti_Sticker_41:"HU-ZEK sticker",Stc_Sti_Sticker_42:"HU-ZE-BR sticker",Stc_Sti_Sticker_43:"HU-RET sticker",Stc_Sti_Sticker_44:"BD-SAL sticker",Stc_Sti_Sticker_45:"HU-ZPD sticker",Stc_Sti_Sticker_46:"HU-SKP sticker",Stc_Sti_Sticker_47:"SWYW sticker",Stc_Sti_Sticker_48:"JFJFJF sticker",Stc_Sti_Sticker_49:"CX3 sticker",Stc_Sti_Sticker_50:"NULU sticker",Stc_Sti_Sticker_51:"MALU sticker",Stc_Sti_Sticker_52:"KNGLU sticker",Stc_Sti_Sticker_53:"F8ED-R sticker",Stc_Sti_Sticker_54:"F8ED-Y sticker",Stc_Sti_Sticker_55:"F8ED-B sticker",Stc_Sti_Sticker_56:"HI-TR sticker",Stc_Sti_Sticker_57:"MED-TR sticker",Stc_Sti_Sticker_58:"SM-TR sticker",Stc_Sti_Sticker_59:"F8ED-3CH-R sticker",Stc_Sti_Sticker_60:"F8ED-3CH-PL sticker",Stc_Sti_Sticker_61:"F8ED-3CH-BK sticker",Stc_Sti_Sticker_62:"F8ED-3CH-W sticker",Stc_Sti_Sticker_63:"SQDOKT-B sticker",Stc_Sti_Sticker_64:"GBGO sticker",Stc_Sti_Sticker_65:"W0RN-B sticker",Stc_Sti_Sticker_66:"W0RN-W sticker",Stc_Sti_Sticker_67:"JFJF sticker",Stc_Sti_Sticker_68:"GFN sticker",Stc_Sti_Sticker_69:"RCT sticker",Stc_Sti_Sticker_70:"LGX4 sticker",Stc_Sti_Sticker_71:"L-R sticker",Stc_Sti_Sticker_72:"HSP-TKT sticker",Stc_Sti_Sticker_73:"TG-R sticker",Stc_Sti_Sticker_74:"PLMI-U sticker",Stc_Sti_Sticker_75:"PLMI-L sticker",Stc_Sti_Sticker_76:"RND-B sticker",Stc_Sti_Sticker_77:"PPPLN sticker",Stc_Sti_Sticker_78:"3SM sticker",Stc_Sti_Sticker_79:"URA-SFSH sticker",Stc_Sti_Sticker_80:"KMO-OKT sticker",Stc_Sti_Sticker_81:"STK-PF sticker",Stc_Sti_Sticker_82:"STK-GP sticker",Stc_Sti_Sticker_83:"STK-NT sticker",Stc_Sti_Sticker_84:"STK-CMI sticker",Stc_Sti_Sticker_86:"SQDOKT-W sticker",Stc_Sti_Sticker_87:"CL-HMT sticker",Stc_Sti_Sticker_88:"SCC-BFF sticker",Stc_Sti_Sticker_89:"SCC-MRS sticker",Stc_Sti_Sticker_90:"SCC-CCB sticker",Stc_Sti_Sticker_91:"BFD-X2 sticker",Stc_Sti_Sticker_92:"BFD-OHM sticker",Stc_Sti_Sticker_93:"RBR-KAB sticker",Stc_Sti_Wst_Blaster_LightLong_00_Lv00:"Rapid Blaster Pro sticker",Stc_Sti_Wst_Blaster_LightLong_01_Lv00:"Rapid Blaster Pro Deco sticker",Stc_Sti_Wst_Blaster_LightShort_00_Lv00:"Clash Blaster sticker",Stc_Sti_Wst_Blaster_LightShort_01_Lv00:"Clash Blaster Neo sticker",Stc_Sti_Wst_Blaster_Light_00_Lv00:"Rapid Blaster sticker",Stc_Sti_Wst_Blaster_Light_01_Lv00:"Rapid Blaster Deco sticker",Stc_Sti_Wst_Blaster_Long_00_Lv00:"Range Blaster sticker",Stc_Sti_Wst_Blaster_Middle_00_Lv00:"Blaster sticker",Stc_Sti_Wst_Blaster_Middle_01_Lv00:"Custom Blaster sticker",Stc_Sti_Wst_Blaster_Precision_00_Lv00:"S-BLAST '92 sticker",Stc_Sti_Wst_Blaster_Precision_01_Lv00:"S-BLAST '91 sticker",Stc_Sti_Wst_Blaster_Short_00_Lv00:"Luna Blaster sticker",Stc_Sti_Wst_Blaster_Short_01_Lv00:"Luna Blaster Neo sticker",Stc_Sti_Wst_Brush_Heavy_00_Lv00:"Painbrush sticker",Stc_Sti_Wst_Brush_Heavy_01_Lv00:"Painbrush Nouveau sticker",Stc_Sti_Wst_Brush_Mini_00_Lv00:"Inkbrush sticker",Stc_Sti_Wst_Brush_Mini_01_Lv00:"Inkbrush Nouveau sticker",Stc_Sti_Wst_Brush_Normal_00_Lv00:"Octobrush sticker",Stc_Sti_Wst_Brush_Normal_01_Lv00:"Octobrush Nouveau sticker",Stc_Sti_Wst_Charger_Keeper_00_Lv00:"Goo Tuber sticker",Stc_Sti_Wst_Charger_Keeper_01_Lv00:"Custom Goo Tuber sticker",Stc_Sti_Wst_Charger_Light_00_Lv00:"Bamboozler 14 Mk I sticker",Stc_Sti_Wst_Charger_LongScope_00_Lv00:"E-liter 4K Scope sticker",Stc_Sti_Wst_Charger_Long_00_Lv00:"E-liter 4K sticker",Stc_Sti_Wst_Charger_NormalScope_00_Lv00:"Splatterscope sticker",Stc_Sti_Wst_Charger_NormalScope_01_Lv00:"Z+F Splatterscope sticker",Stc_Sti_Wst_Charger_Normal_00_Lv00:"Splat Charger sticker",Stc_Sti_Wst_Charger_Normal_01_Lv00:"Z+F Splat Charger sticker",Stc_Sti_Wst_Charger_Pencil_00_Lv00:"Snipewriter 5H sticker",Stc_Sti_Wst_Charger_Pencil_01_Lv00:"Snipewriter 5B sticker",Stc_Sti_Wst_Charger_Quick_00_Lv00:"Classic Squiffer sticker",Stc_Sti_Wst_Maneuver_Dual_00_Lv00:"Dualie Squelchers sticker",Stc_Sti_Wst_Maneuver_Dual_01_Lv00:"Custom Dualie Squelchers sticker",Stc_Sti_Wst_Maneuver_Gallon_00_Lv00:"Glooga Dualies sticker",Stc_Sti_Wst_Maneuver_Normal_00_Lv00:"Splat Dualies sticker",Stc_Sti_Wst_Maneuver_Normal_01_Lv00:"Enperry Splat Dualies sticker",Stc_Sti_Wst_Maneuver_Short_00_Lv00:"Dapple Dualies sticker",Stc_Sti_Wst_Maneuver_Short_01_Lv00:"Dapple Dualies Nouveau sticker",Stc_Sti_Wst_Maneuver_Stepper_00_Lv00:"Dark Tetra Dualies sticker",Stc_Sti_Wst_Maneuver_Stepper_01_Lv00:"Light Tetra Dualies sticker",Stc_Sti_Wst_Roller_Compact_00_Lv00:"Carbon Roller sticker",Stc_Sti_Wst_Roller_Compact_01_Lv00:"Carbon Roller Deco sticker",Stc_Sti_Wst_Roller_Heavy_00_Lv00:"Dynamo Roller sticker",Stc_Sti_Wst_Roller_Heavy_01_Lv00:"Gold Dynamo Roller sticker",Stc_Sti_Wst_Roller_Hunter_00_Lv00:"Flingza Roller sticker",Stc_Sti_Wst_Roller_Normal_00_Lv00:"Splat Roller sticker",Stc_Sti_Wst_Roller_Normal_01_Lv00:"Krak-On Splat Roller sticker",Stc_Sti_Wst_Roller_Wide_00_Lv00:"Big Swig Roller sticker",Stc_Sti_Wst_Roller_Wide_01_Lv00:"Big Swig Roller Express sticker",Stc_Sti_Wst_Saber_Lite_00_Lv00:"Splatana Wiper sticker",Stc_Sti_Wst_Saber_Lite_01_Lv00:"Splatana Wiper Deco sticker",Stc_Sti_Wst_Saber_Normal_00_Lv00:"Splatana Stamper sticker",Stc_Sti_Wst_Saber_Normal_01_Lv00:"Neo Splatana Stamper sticker",Stc_Sti_Wst_Shelter_Compact_00_Lv00:"Undercover Brella sticker",Stc_Sti_Wst_Shelter_Compact_01_Lv00:"Undercover Sorella Brella sticker",Stc_Sti_Wst_Shelter_Normal_00_Lv00:"Splat Brella sticker",Stc_Sti_Wst_Shelter_Normal_01_Lv00:"Sorella Brella sticker",Stc_Sti_Wst_Shelter_Wide_00_Lv00:"Tenta Brella sticker",Stc_Sti_Wst_Shelter_Wide_01_Lv00:"Tenta Sorella Brella sticker",Stc_Sti_Wst_Shooter_Blaze_00_Lv00:"Aerospray MG sticker",Stc_Sti_Wst_Shooter_Blaze_01_Lv00:"Aerospray RG sticker",Stc_Sti_Wst_Shooter_Expert_00_Lv00:"Splattershot Pro sticker",Stc_Sti_Wst_Shooter_Expert_01_Lv00:"Forge Splattershot Pro sticker",Stc_Sti_Wst_Shooter_First_00_Lv00:"Splattershot Jr. sticker",Stc_Sti_Wst_Shooter_First_01_Lv00:"Custom Splattershot Jr. sticker",Stc_Sti_Wst_Shooter_Flash_00_Lv00:"Squeezer sticker",Stc_Sti_Wst_Shooter_Flash_01_Lv00:"Foil Squeezer sticker",Stc_Sti_Wst_Shooter_Gravity_00_Lv00:".52 Gal sticker",Stc_Sti_Wst_Shooter_Heavy_00_Lv00:".96 Gal sticker",Stc_Sti_Wst_Shooter_Heavy_01_Lv00:".96 Gal Deco sticker",Stc_Sti_Wst_Shooter_Long_00_Lv00:"Jet Squelcher sticker",Stc_Sti_Wst_Shooter_Long_01_Lv00:"Custom Jet Squelcher sticker",Stc_Sti_Wst_Shooter_Normal_00_Lv00:"Splattershot sticker",Stc_Sti_Wst_Shooter_Normal_01_Lv00:"Tentatek Splattershot sticker",Stc_Sti_Wst_Shooter_Normal_H_Lv00:"Hero Shot Replica sticker",Stc_Sti_Wst_Shooter_Precision_00_Lv00:"Splash-o-matic sticker",Stc_Sti_Wst_Shooter_Precision_01_Lv00:"Neo Splash-o-matic sticker",Stc_Sti_Wst_Shooter_QuickLong_00_Lv00:"Splattershot Nova sticker",Stc_Sti_Wst_Shooter_QuickLong_01_Lv00:"Annaki Splattershot Nova sticker",Stc_Sti_Wst_Shooter_QuickMiddle_00_Lv00:"N-ZAP '85 sticker",Stc_Sti_Wst_Shooter_QuickMiddle_01_Lv00:"N-ZAP '89 sticker",Stc_Sti_Wst_Shooter_Short_00_Lv00:"Sploosh-o-matic sticker",Stc_Sti_Wst_Shooter_Short_01_Lv00:"Neo Sploosh-o-matic sticker",Stc_Sti_Wst_Shooter_TripleMiddle_00_Lv00:"H-3 Nozzlenose sticker",Stc_Sti_Wst_Shooter_TripleMiddle_01_Lv00:"H-3 Nozzlenose D sticker",Stc_Sti_Wst_Shooter_TripleQuick_00_Lv00:"L-3 Nozzlenose sticker",Stc_Sti_Wst_Shooter_TripleQuick_01_Lv00:"L-3 Nozzlenose D sticker",Stc_Sti_Wst_Slosher_Bathtub_00_Lv00:"Bloblobber sticker",Stc_Sti_Wst_Slosher_Bathtub_01_Lv00:"Bloblobber Deco sticker",Stc_Sti_Wst_Slosher_Diffusion_00_Lv00:"Tri-Slosher sticker",Stc_Sti_Wst_Slosher_Diffusion_01_Lv00:"Tri-Slosher Nouveau sticker",Stc_Sti_Wst_Slosher_Double_00_Lv00:"Dread Wringer sticker",Stc_Sti_Wst_Slosher_Launcher_00_Lv00:"Sloshing Machine sticker",Stc_Sti_Wst_Slosher_Launcher_01_Lv00:"Sloshing Machine Neo sticker",Stc_Sti_Wst_Slosher_Strong_00_Lv00:"Slosher sticker",Stc_Sti_Wst_Slosher_Strong_01_Lv00:"Slosher Deco sticker",Stc_Sti_Wst_Slosher_Washtub_00_Lv00:"Explosher sticker",Stc_Sti_Wst_Spinner_Downpour_00_Lv00:"Ballpoint Splatling sticker",Stc_Sti_Wst_Spinner_Downpour_01_Lv00:"Ballpoint Splatling Nouveau sticker",Stc_Sti_Wst_Spinner_HyperShort_00_Lv00:"Heavy Edit Splatling sticker",Stc_Sti_Wst_Spinner_Hyper_00_Lv00:"Hydra Splatling sticker",Stc_Sti_Wst_Spinner_Quick_00_Lv00:"Mini Splatling sticker",Stc_Sti_Wst_Spinner_Quick_01_Lv00:"Zink Mini Splatling sticker",Stc_Sti_Wst_Spinner_Serein_00_Lv00:"Nautilus 47 sticker",Stc_Sti_Wst_Spinner_Standard_00_Lv00:"Heavy Splatling sticker",Stc_Sti_Wst_Spinner_Standard_01_Lv00:"Heavy Splatling Deco sticker",Stc_Sti_Wst_Stringer_Normal_00_Lv00:"Tri-Stringer sticker",Stc_Sti_Wst_Stringer_Normal_01_Lv00:"Inkline Tri-Stringer sticker",Stc_Sti_Wst_Stringer_Short_00_Lv00:"REEF-LUX 450 sticker",Stc_Sti_Wst_Stringer_Short_01_Lv00:"REEF-LUX 450 Deco sticker",Sti_MsnAlterMap00:"map of Alterna 1",Sti_MsnAlterMap01:"map of Alterna 2",Sti_MsnAlterMap02:"map of Alterna 3",Sti_MsnAlterMap03:"map of Alterna 4",Sti_MsnAlterMap04:"map of Alterna 5",Sti_MsnAlterMap05:"map of Alterna 6",Sti_MsnClearPhot:"Memories of Alterna",Sti_MsnMysteryFile00:"Sunken Scroll 01",Sti_MsnMysteryFile01:"Sunken Scroll 02",Sti_MsnMysteryFile02:"Sunken Scroll 03",Sti_MsnMysteryFile03:"Sunken Scroll 04",Sti_MsnMysteryFile04:"Sunken Scroll 05",Sti_MsnMysteryFile05:"Sunken Scroll 06",Sti_MsnMysteryFile06:"Sunken Scroll 07",Sti_MsnMysteryFile07:"Sunken Scroll 08",Sti_MsnMysteryFile08:"Sunken Scroll 09",Sti_MsnMysteryFile09:"Sunken Scroll 10",Sti_MsnMysteryFile10:"Sunken Scroll 11",Sti_MsnMysteryFile11:"Sunken Scroll 12",Sti_MsnMysteryFile12:"Sunken Scroll 13",Sti_MsnMysteryFile13:"Sunken Scroll 14",Sti_MsnMysteryFile14:"Sunken Scroll 15",Sti_MsnMysteryFile15:"Sunken Scroll 16",Sti_MsnMysteryFile16:"Sunken Scroll 17",Sti_MsnMysteryFile17:"Sunken Scroll 18",Sti_MsnMysteryFile18:"Sunken Scroll 19",Sti_MsnMysteryFile19:"Sunken Scroll 20",Sti_MsnMysteryFile20:"Sunken Scroll 21",Sti_MsnMysteryFile21:"Sunken Scroll 22",Sti_MsnMysteryFile22:"Sunken Scroll 23",Sti_MsnMysteryFile23:"Sunken Scroll 24"},"CommonMsg/Lobby/LobbyFoodExp":{Action_Up_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,Action_Up_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,BattleExp_Up_01_Overwrite:`Increases battle XP
by 50%!`,BattleExp_Up_01_Purchase:"Increases battle XP by 50%!",BattleExp_Up_02_Overwrite:"Doubles battle XP!",BattleExp_Up_02_Purchase:"Doubles battle XP!",BattleMoney_Up_01_Overwrite:`Increases battle cash
by 50%!`,BattleMoney_Up_01_Purchase:"Increases battle cash by 50%!",BattleMoney_Up_02_Overwrite:"Doubles battle cash!",BattleMoney_Up_02_Purchase:"Doubles battle cash!",BombDistance_Up_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,BombDistance_Up_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,HumanMove_Up_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,HumanMove_Up_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,InkRecovery_Up_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,InkRecovery_Up_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,JumpTime_Save_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,JumpTime_Save_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,MainInk_Save_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,MainInk_Save_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,OpInkEffect_Reduction_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,OpInkEffect_Reduction_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,PartyExp_Up_Overwrite:`Doubles battle XP [color=0001]for
all teammates[color=ffff]!`,PartyExp_Up_Purchase:`Doubles battle XP [color=0001]for
all teammates[color=ffff]!`,PartyMoney_Up_Overwrite:`Doubles battle cash [color=0001]for
all teammates[color=ffff]!`,PartyMoney_Up_Purchase:`Doubles battle cash [color=0001]for
all teammates[color=ffff]!`,RespawnSpecialGauge_Save_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,RespawnSpecialGauge_Save_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,RespawnTime_Save_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,RespawnTime_Save_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,SpecialIncrease_Up_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,SpecialIncrease_Up_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,SpecialTime_Up_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,SpecialTime_Up_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,SquidMove_Up_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,SquidMove_Up_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,SubEffect_Reduction_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,SubEffect_Reduction_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`,SubInk_Save_Overwrite:`Gear will gain XP more
quickly and is more likely
to receive a specific
ability when it levels up.`,SubInk_Save_Purchase:`Gear will gain XP more quickly and
is more likely to receive a specific
ability when it levels up.`},"CommonMsg/Lobby/LobbyFoodName":{Action_Up:"Actionberry Twist",BattleExp_Up_01:"The Pescatariat",BattleExp_Up_02:"The Pescatariat Royale",BattleMoney_Up_01:"Crab Trap Sandwich",BattleMoney_Up_02:"Commercial Crab Trap Sandwich",BombDistance_Up:"Super Sub Juicer",HumanMove_Up:"Speedy Gazpacho",InkRecovery_Up:"Ink-Well Chiller",JumpTime_Save:"Citrus Hip-Hopper",MainInk_Save:"Main Mega Pucker-Up",OpInkEffect_Reduction:"Stompin' Grape",PartyExp_Up:"Marigold'en Garden Greens",PartyMoney_Up:"Mega Mountain a la Marigold",RespawnSpecialGauge_Save:"Salty Melon Special",RespawnTime_Save:"Matcha Reviver",SpecialIncrease_Up:"Ma's Special Blend",SpecialTime_Up:"Smoothie Especial",SquidMove_Up:"Cherry Apple Fizz",SubEffect_Reduction:"Sub Lime",SubInk_Save:"Sub Berry Blaster Blitz"},"CommonMsg/Manual/ManualBankaraMatch":{BankaraMatch_BankaraPower_Manual00:`[color=0001]Anarchy Power[color=ffff] is a number representing your
[color=0001]team's ability[color=ffff]. It's calculated when you make a
team of two to four players and play at least
five Anarchy Battles (Open) with that team.
This number is separate from your normal
Rank Points.

To check your Anarchy Power, press [group=0003 type=0009 params=52 b8 5e 3f 03 00 00 00]
during matchmaking. Once it has been
calculated, your Anarchy Power will go up
or down after each battle, depending on
your results.`,BankaraMatch_BankaraPower_Manual01:`When the schedule updates (every two hours),
your highest Anarchy Power during the previous
session will be recorded in the rankings. You can
view the rankings anytime at the [color=0001]lobby terminal[color=ffff].

Please note that you'll only be able to view
your results for the past five sessions—older
results will be deleted as you participate in
new sessions. Results will be available for up
to 14 days following the end of the session.`,BankaraMatch_BankaraPower_Title:"What Is Anarchy Power?",BankaraMatch_Button01:"Anarchy Battle",BankaraMatch_Button02:"Splat Zones",BankaraMatch_Button03:"Tower Control",BankaraMatch_Button04:"Rainmaker",BankaraMatch_Button05:"Clam Blitz",BankaraMatch_Button06:"Anarchy Power",BankaraMatch_Gachiarea_Manual00:"Splatter the Splat Zones with ink, then hold your turf to emerge victorious!",BankaraMatch_Gachiarea_Manual01:`1. Splat Zone
2. Control Indicator
3. Progress Countdown
4. Penalty Countdown`,BankaraMatch_Gachiarea_Manual02:`Whichever team can hold all [color=0001]Splat Zones[color=ffff] long
enough for the timer to reach zero wins!

First, claim Splat Zones by covering them in ink.
You can see how much of a zone you've inked
by looking at the [color=0001]control indicator[color=ffff]. Claim all the
Splat Zones, and your team's [color=0001]timer[color=ffff] will start to
[color=0001]count down[color=ffff]. If the timer hits zero, that's a
knockout victory!`,BankaraMatch_Gachiarea_Manual03:`・ Work with your team!
    Going solo to retake a Splat Zone guarded by your opponents is NOT easy.
    Group up with your allies and strike together! Or, if you're defending, try
    to scatter your opponents and stop them from working as a team.

・ Never give up, even if you're losing!
    When the enemy team controls the zones or when you're behind in the
    countdown, your special gauge will start filling automatically!`,BankaraMatch_Gachiarea_Manual03_Title:"Splat Zones: Pro Tips",BankaraMatch_Gachiarea_Manual04:`・ Try to turn it around in overtime!
    If time runs out with the losing team in control of the zones, the battle
    will go into overtime. Fight to the very end, and you can come from behind
    for an overtime win!`,BankaraMatch_Gachiarea_Title:"Splat Zones: The Rules",BankaraMatch_Gachiasari_Manual00:`The team that gets the most clams in their enemy's basket wins! You'll need to
use a power clam to take down the basket's barrier first.`,BankaraMatch_Gachiasari_Manual01:`1. Clams
2. Power Clams
3. The Basket
4. Score Countdown`,BankaraMatch_Gachiasari_Manual02:`5. Barrier Timer
6. Team Clam Total
7. Clams You're Holding
8. Player Clam Totals`,BankaraMatch_Gachiasari_Manual03:`The team that throws the most [color=0001]clams [color=ffff]into the
other team's basket wins! Just don't forget that
the baskets have a [color=0001]barrier[color=ffff] around them.

First, you need to break the barrier. Collect
clams from around the stage.`,BankaraMatch_Gachiasari_Manual04:`Once you have [color=0001]8[color=ffff] clams, they'll combine into a
[color=0001]power clam[color=ffff]. Then it's time to break that barrier!`,BankaraMatch_Gachiasari_Manual05:`You can throw both regular and power clams by
pressing [group=0003 type=0000 params=52 b8 5e 3f 03 00 00 00] or [group=0003 type=0009 params=52 b8 5e 3f 03 00 00 00].

Break a barrier using a power clam, and a
[color=0001]barrier timer[color=ffff] will start!`,BankaraMatch_Gachiasari_Manual06:`Throw clams and power clams into your
opponents' basket as fast as you can!

If you can get your score down to 0, you'll earn
a knockout victory. Each clam drops your team's
[color=0001]score countdown[color=ffff] by [color=0001]3[color=ffff] points, while a power clam
drops it by [color=0001]20[color=ffff]!

You'll also [color=0001]extend the barrier timer[color=ffff] with each
clam you throw into the enemy basket.`,BankaraMatch_Gachiasari_Manual07:`If your barrier is broken, your opponents' barrier
becomes invincible, so don't forget to defend!
If you see an enemy with clams, splat them quick
to keep them from extending the barrier timer.

Once your barrier is back, a power clam will
[color=0001]appear under your basket[color=ffff] to help your team
launch a counterattack!`,BankaraMatch_Gachiasari_Manual08:`Getting splatted causes you to drop all of
the clams you're carrying. If you see a dropped
regular clam, grab it quick before it disappears!

Getting splatted can also cause you to drop
power clams. These can only be picked up by
someone from the same team that dropped it.
If an opponent drops a power clam, fight to keep
it from being picked back up until it disappears.`,BankaraMatch_Gachiasari_Manual09:`Any clams on your team's ink are marked to make
them easy to find.

New clams appear often, so inking more turf will
make it easier to find and grab clams before
your opponents can.`,BankaraMatch_Gachiasari_Manual10:`・ Go on recon!
    Use recon to visit the stage and learn different ways to get to each
    basket. Knowing your way around is crucial!

・ Expand your turf!
    Ink the ground and expand your turf to make it faster and easier to find
    more clams as they appear!`,BankaraMatch_Gachiasari_Manual10_Title:"Clam Blitz: Pro Tips",BankaraMatch_Gachiasari_Manual11:`・ Never give up, even if you're losing!
    If neither team has a power clam, or if both teams have one, whichever
    team is losing will have their special gauges start filling automatically!

・ Turn it around in overtime!
    If the losing team has a power clam or the barrier timer is running when
    the clock runs out, the battle goes into overtime. That's your cue to give
    it all you've got and claim an overtime win!`,BankaraMatch_Gachiasari_Title:"Clam Blitz: The Rules",BankaraMatch_Gachihoko_Manual00:"Bring the Rainmaker to the goal in the enemy base to win!",BankaraMatch_Gachihoko_Manual01:`1. The Rainmaker
2. The Goal
3. Time Left to Carry the Rainmaker
4. Goal Distance Remaining
5. Checkpoint`,BankaraMatch_Gachihoko_Manual02:`The team that gets the [color=0001]Rainmaker[color=ffff] and carries
it to the [color=0001]goal[color=ffff] in the enemy base wins!

First, run to the Rainmaker in the middle of the
stage, then break it out of its shield to grab it.

If the Rainmaker is dropped, the shield will slowly
return. Leave the Rainmaker for too long, and
it will automatically go back to its starting
position in the middle of the stage.`,BankaraMatch_Gachihoko_Manual03:`When you're carrying the Rainmaker, you can't
Super Jump or use your weapons. However, you
CAN fire a super-powerful [color=0001]Rainmaker Shot[color=ffff]!

Also, carrying the Rainmaker is dangerous.
If you hold on to it for too long, it will explode
and splat you. Be careful!`,BankaraMatch_Gachihoko_Manual04:`Once you've got the Rainmaker, head for the
[color=0001]checkpoint[color=ffff].

After you clear the checkpoint, your next stop
is the goal. If you get pushed back, you can run
right through any checkpoints your team has
already cleared.

As you get closer to the checkpoint and then
the enemy goal, your team's [color=0001]goal distance[color=ffff] will
[color=0001]decrease[color=ffff]. If time runs out before the Rainmaker
gets to a goal, the team with the lowest
goal distance wins.`,BankaraMatch_Gachihoko_Manual05:`・ Move that Rainmaker!
    The most important thing is to get the Rainmaker to the goal! If you have
    the Rainmaker, push forward. If a teammate has the Rainmaker, start
    clearing a path for them. Keep the Rainmaker moving forward!

・ Never give up, even if you're losing!
    If your opponents have the Rainmaker, or if your team is both behind in
    goal distance and doesn't have the Rainmaker, your special gauge will
    start filling automatically!`,BankaraMatch_Gachihoko_Manual05_Title:"Rainmaker: Pro Tips",BankaraMatch_Gachihoko_Manual06:`・ Try to turn it around in overtime!
    If the losing team controls the Rainmaker when time runs out, the battle
    goes into overtime! Keep up the pressure, and you might come from behind
    and win it in overtime!`,BankaraMatch_Gachihoko_Title:"Rainmaker: The Rules",BankaraMatch_Gachiyagura_Manual00:"Whichever team rides the tower to the goal in the enemy base wins!",BankaraMatch_Gachiyagura_Manual01:`1. The Tower
2. The Goal
3. Checkpoint
4. Goal Distance Remaining`,BankaraMatch_Gachiyagura_Manual02:`Ride the [color=0001]tower[color=ffff] from the center of the stage to
the [color=0001]goal [color=ffff]in the enemy base to win!

Ink the sides of the tower, and climb on top to
claim it. The tower will start moving toward the
enemy base automatically.

If you get splatted and the enemy takes control
of the tower, or if it sits for too long without
anyone on it, it will move back toward the center
of the stage.`,BankaraMatch_Gachiyagura_Manual03:`There are [color=0001]checkpoints[color=ffff] along the route to the
goal. Ride the tower to a checkpoint, and it will
stop for a short while. Keep control of the tower
until the checkpoint's defenses are gone, and
the tower will start moving again.

Fully clear a checkpoint once, and the tower
won't need to stop at it again. However, if a
checkpoint isn't fully cleared, its defenses
will return!`,BankaraMatch_Gachiyagura_Manual04:`As the tower gets near the goal, your team's
[color=0001]goal distance [color=ffff]will [color=0001]decrease[color=ffff]. If the tower can't
reach either goal before time runs out, the team
with the lowest goal distance wins.`,BankaraMatch_Gachiyagura_Manual04_Title:"Tower Control: Pro Tips",BankaraMatch_Gachiyagura_Manual05:`・ Protect the tower!
    Anyone riding the tower is an easy target, so have teammates scout ahead
    to make sure the way is safe!

・ Take the tower back at checkpoints!
    Don't forget that the tower stops at checkpoints. That makes it the
    perfect time to attack and take it for your team!`,BankaraMatch_Gachiyagura_Manual06:`・ Turn it around in overtime!
    If the losing team controls the tower when the clock runs out, the battle
    goes into overtime. Don't give up—you might be able to come from behind
    to win it in overtime!`,BankaraMatch_Gachiyagura_Title:"Tower Control: The Rules",BankaraMatch_Manual00:"Raise your rank by winning battles!",BankaraMatch_Manual01:`In Anarchy Battles, you'll put your [color=0001]Rank Points[color=ffff]
on the line as you take on the most intense
competition in the Splatlands. The more wins
you rack up, the higher your [color=0001]rank[color=ffff] will soar.

There are two styles of Anarchy Battle:
[color=0001]Open[color=ffff] and [color=0001]Series[color=ffff].`,BankaraMatch_Manual02:`If you're a solo player, [color=0001]Series [color=ffff]is your chance to
knuckle down for some serious splatting.

First, you'll pay Rank Points to cover the
[color=0001]entry fee[color=ffff]. Then you'll play matches until you
earn either five wins or three losses. Don't
worry—you can take breaks between matches.

Once it's over, you'll earn Rank Points based on
your wins and any medals you earned.`,BankaraMatch_Manual03:`If you like to squad up with friends or players
in the same Pool, or if you're a solo player that
only has time for a single match, [color=0001]Open[color=ffff] is for
you. Here you'll gain (or lose!) Rank Points
after every battle.`,BankaraMatch_Manual04:`Anarchy Battles come in four flavors:
[color=0001]Splat Zones[color=ffff], [color=0001]Tower Control[color=ffff], [color=0001]Rainmaker[color=ffff],
and [color=0001]Clam Blitz[color=ffff].

Your Rank Points are [color=0001]shared[color=ffff] between all four.
Build your rank up in one, and your rank goes
up across the board.`,BankaraMatch_Manual05:`Want to be promoted to a new rank? Once you
have enough Rank Points, you can take on a
special [color=0001]challenge[color=ffff]: the [color=0001]Rank-Up Battle[color=ffff]! Pay
your Rank Points, and get ready to fight. Earn
[color=0001]3 wins[color=ffff], and you'll earn a rank promotion!

But! Get three losses, and you're out. You'll also
need to earn more Rank Points to try again.
Ouch...`,BankaraMatch_Title:"Anarchy Battles and You"},"CommonMsg/Manual/ManualCoop":{Coop_Button00:`Employee
Handbook`,Coop_Button01:`Salmonid
Field Guide`,Coop_Button02:"Basics",Coop_Button03:"Not Basics",T_ContentsCoop_00:`・ Here at Grizzco Industries, we aim to create a richer, better way of life for
  everyone in our society through daily [color=0001]collection of Power Eggs[color=ffff]. We’re looking
  for dedicated, eager workers to assist us as we move forward toward a
  brighter future. Could that be you?

・ Collecting Power Eggs can indeed be a risky business, but when standing
  shoulder to shoulder in the thick of the action alongside [color=0001]coworkers united
  under the same vision[color=ffff], you may see yourself in a different light—an
  innovator, a change bringer, one who rises to all challenges.`,T_ContentsCoop_01:`・ Naturally, you will be well rewarded for your efforts. We offer an
  attractive and competitive [color=0001]remuneration package[color=ffff] to all our employees.`,T_ContentsCoop_02:`・ Power Eggs have come to be indispensable in supporting the modern
  lifestyles we all enjoy.

・ Power Eggs can be obtained from creatures called [color=0001]Salmonids[color=ffff].

・ Working for Grizzco, you’ll be responsible for collecting [color=0001]Golden Eggs[color=ffff] and
  depositing them in the company-issued [color=0001]egg basket[color=ffff]. These Golden Eggs are
  obtained from [color=0001]Boss Salmonids[color=ffff], a far more dangerous type of Salmonid than
  the [color=0001]Lesser Salmonid [color=ffff]variety.`,T_ContentsCoop_03:` - Steal the Golden Eggs from the Boss Salmonids!
 - Take 'em to the egg basket!
 - And that's it! No, really—that's all there is to it!

・ If you can remember that, you're ready to join the ranks at Grizzco!`,T_ContentsCoop_04:`・ As a new employee, you can rest assured in the knowledge that we offer
  on-site [color=0001]training[color=ffff]—you won’t be thrown in at the deep end. After all, no one
  expects you to memorize everything in your Employee Handbook right away!
  At Grizzco, we believe experience is the best teacher.

・ All you could ever want to know about Salmonids is explained
  in detail in your [color=0001]Salmonid Field Guide[color=ffff].`,T_ContentsCoop_05:`・ All new Grizzco employees are given a [color=0001]Grizzco Point Card[color=ffff].
  Please take good care of this card—it's used to commemorate
  your professional achievements.

・ Power Egg collection is done when Salmonids engage in a behavior called
  a "[color=0001]Salmon Run[color=ffff]." This is the Salmonid habit of regularly returning in large
  numbers from their current habitat to the area where they were spawned.`,T_ContentsCoop_06:`・ Because our business NEVER closes here in the Splatlands, we always have
  a need for more help collecting Power Eggs. However, where our employees
  collect those eggs will differ based on the time of day.

・ All equipment necessary for collecting Power Eggs (weapons, gear, life ring)
  will be provided by the company. There is no need for employees to prepare
  anything themselves, so first-timers needn’t worry.`,T_ContentsCoop_07:`・ This job requires the use of specially optimized equipment well suited to
  the task at hand. This means that workers will be [color=0001]unable to charge their
  special gauges[color=ffff] themselves. Instead, Grizzco will arrange for [color=0001]two uses of
  a special ability[color=ffff], which you may activate when you deem necessary. Unused
  special-ability activations are reclaimed at the end of your shift.`,T_ContentsCoop_08:`・ You’ll start your working day by boarding one of our chartered helicopters
  and departing for the [color=0001]restricted zone[color=ffff]. Be aware that once your helicopter
  departs, there’s no turning back. You won’t be able to return until your
  shift is over.

・ Upon arriving at the job site, [color=0001]company-issued weapons[color=ffff] will be distributed to
  each employee. After you’ve received your weaponry, all you have to do
  is wait for Boss Salmonids to appear.`,T_ContentsCoop_09:`・ You will receive a radio alert when Boss Salmonids are detected in
  the vicinity. It's not possible to provide precise coordinates, so it’s
  up to you to find the exact location of the Boss Salmonids.

・ The restricted zone is subject to a mysterious magnetic field known to have
  an effect on Inkling and Octoling sensory organs. You will be unable to use
  the Turf Map to check your surroundings or to perform Super Jumps. You’ll
  have to rely on good old-fashioned [color=0001]eyesight [color=ffff]to explore your surroundings.`,T_ContentsCoop_10:`・ Unfortunately, Boss Salmonids are not the only enemy you’ll have to contend
  with. Lesser Salmonids will also interfere with your work and will need to be
  dealt with in a suitable fashion. However, be aware that the Power Eggs
  dropped by Lesser Salmonids are far less valuable than the Golden Eggs
  dropped by Boss Salmonids. Therefore we ask all employees to [color=0001]prioritize the
  collection of Golden Eggs[color=ffff] over Power Eggs.

・ The Salmonids’ sensory organs have adapted to the contaminants in their
  habitat, so they will not be hampered in hunting down Inklings and Octolings.
  Be very careful—you won’t be able to hide yourself in ink.`,T_ContentsCoop_11:`・ Facing off against a Boss Salmonid on your own is a tall order. If you find
  yourself fighting one, use your [group=0003 type=000e params=52 b8 5e 3f 03 00 00 00][color=0001]This way! signal[color=ffff] to call for help.
  This will communicate your position wirelessly to your coworkers.

・ Carrying the Golden Eggs dropped by Boss Salmonids also requires the
  cooperation of the whole team, as the equipment provided allows each
  worker to carry only [color=0001]1 Golden Egg at a time[color=ffff].`,T_ContentsCoop_12:`・ In the event that you are splatted by a Salmonid, you’ll wind up in a life ring,
  rendering you out of action. To rejoin the fray, you must wait for [color=0001]1 of your
  coworkers to revive you with some of their ink[color=ffff].

・ While in a life ring, your [group=0003 type=000e params=52 b8 5e 3f 03 00 00 00]This way! signal will automatically change to
  a [color=0001]distress call[color=ffff]. Use this to let your coworkers know that you’re in a bind so
  they’ll come and revive you as soon as possible.`,T_ContentsCoop_13:`・ In order to promote effective egg collection, all teams have
  a [color=0001]Golden Egg quota[color=ffff].

・ The Salmonids exhibit very predictable behavior. They will react aggressively
  to intruders in their territory, but they will return to the water after a set
  amount of time. Teams that successfully meet their quota within that time
  period will be given a new quota to fill.`,T_ContentsCoop_14:`・ This onslaught and retreat of Salmonids is called a [color=0001]wave[color=ffff]. The deadline to
  meet your quota is at the end of each wave, after which it will not be
  possible to deposit more eggs in the basket.

・ Subsequently, all employees will be Super Jumped to the spawn point using
  special Grizzco technology, where they will be [color=0001]supplied with fresh weapons
  and splatted workers will be revived[color=ffff].`,T_ContentsCoop_15:`・ Your shift is over at the end of the [color=0001]third wave[color=ffff].

・ Unfortunately, in the event that your team is [color=0001]unable to meet its quota[color=ffff],
  we will have no choice but to [color=0001]terminate your shift [color=ffff]early.

・ Additionally, if your entire work crew is splatted by Salmonids and [color=0001]wiped out
  during a wave[color=ffff], we will again have no choice but to [color=0001]terminate your shift [color=ffff]early.`,T_ContentsCoop_16:`・ When your shift ends, you'll be awarded [color=0001]Grizzco Points[color=ffff] based on how well
  your shift goes, as well as the number of Golden and Power Eggs you and
  your coworkers have collected. After you have earned a set number of
  points, you will receive a [color=0001]fabulous bonus[color=ffff], so make sure you work your
  very hardest to rack up those points!

・ You can claim your bonuses from the [color=0001]exchange desk inside
  Grizzco Industries[color=ffff].`,T_ContentsCoop_17:`・ The bonus lineup changes with each recruitment drive, and your
  Grizzco Points are also [color=0001]reset [color=ffff]at the end of each drive.`,T_ContentsCoop_18:`・ Grizzco uses an employee-rating system to help workers progress along
  their chosen career path.

・ Your pay grade increases when you[color=0001] meet your quotas[color=ffff] for all three waves.

・ In the event that you are unable to meet your quotas, your pay grade
  will not be increased—and may even be decreased.`,T_ContentsCoop_19:`・ As your pay grade increases, you’ll be given a suitable [color=0001]title [color=ffff]to match.

・ Getting better pay grades and titles results in[color=0001] increased bonuses[color=ffff],
  but even better than that, it gives you the warm, glowy feeling of
  overcoming a challenge!

・ And don’t worry! Although your pay grade will be reset for each new
  hiring period, you’ll get to keep your title.`,T_ContentsCoop_20:`・ If you remember nothing else, please remember the following
  (everything else you can learn on the job):

 - Get Golden Eggs from Boss Salmonids!
 - Place eggs in the egg basket. Don't yolk around!
 - Do you really need a third bullet point? Third bullet points
   are for eggs-ecutives.`,T_ContentsCoop_21:`・ We at Grizzco Industries are devoted to doing absolutely everything in our
  power to create a brighter future for us all.

・ As a valued member of our Grizzco family, we are committed to supporting
  you completely as you struggle against life’s cruel realities.

・ Together, we can build a company that embodies the change we wish to see
  in the world. We are one. We are Grizzco.`,T_ContentsCoop_22:`・ In the Splatlands, there have been several reports of [color=0001]King Salmonid
  [color=ffff]sightings. King Salmonids are larger and more dangerous than
  Boss Salmonids.

・ It's said that King Salmonids will gradually learn your [color=0001]scent[color=ffff] and will
  appear to chase away intruders that come back over and over again.`,T_ContentsCoop_23:`・ If a King Salmonid shows up, we'll waive your Golden Egg quota. Instead, we
  ask that you stay calm and focus on driving back the King Salmonid.

・ If a King Salmonid appears, we'll supply you with an [color=0001]egg cannon [color=ffff]that turns
  Golden Eggs into special shots that you can fire with [group=0003 type=0000 params=52 b8 5e 3f 03 00 00 00]. These shots
  won't consume ink, so don't be shy about using them on the King Salmonid.`,T_ContentsCoop_24:`・ When a King Salmonid appears, all leftover special pouches will be collected
  and then redistributed so everyone gets one. This rule ensures the most
  efficient use of limited resources.

・ You can obtain durable [color=0001]fish scales [color=ffff]from the bodies of King Salmonids.
  These are a very precious resource!

・ In exchange for fish scales, we will provide [color=0001]a variety of limited-edition
  goods[color=ffff], so you should absolutely try to collect as many as you can.`,T_ContentsCoop_25:`・ If you approach the egg basket while holding a Golden Egg, you can
  press [group=0003 type=0000 params=00 00 80 3f 00 00 00 00] to [color=0001]deposit [color=ffff]it.

・ If you're not near the egg basket, you can press [group=0003 type=0000 params=00 00 80 3f 00 00 00 00] to [color=0001]throw a Golden Egg[color=ffff].
  Use this to deposit eggs from far away, pass them to your coworkers, or
  put them in places where they're easy to retrieve. While throwing Golden
  Eggs is an efficient method of transport, please bear in mind that doing so
  expends ink, so plan accordingly.`,T_ExplainEnemy_00:`● Basic Information
　・ They tend to appear in groups rather than alone.
　・ Defeating them will earn you Power Eggs.

● Attack Behavior
　・ They use their sense of smell to locate and close in on targets
　　 who have entered their territory.
　・ Once they close in on a target, they perform close-range
　　 attacks using frying pans or other cookware.`,T_ExplainEnemy_01:`● Elimination
　・ They can be neutralized relatively easily with a direct hit of ink.

● Supporting Information
　・ They inhabit a restricted ocean zone, and any unauthorized
　　 contact with them is expressly forbidden by law.
　・ The Smallfry might be weak, but they're very fast. They often
　　 ambush their targets from below.`,T_ExplainEnemy_02:`　・ The larger Cohock moves slowly but packs a real punch with
　　 direct, strong attacks.
　・ On their own, they don't pose a significant threat—but ignore
　　 them, and you may quickly find yourself surrounded.`,T_ExplainEnemy_03:`● Basic Information
　・ Tasked with procuring Golden Eggs, Snatchers will emerge from
　　 the sea when Golden Eggs are present and try to seize them and
　　 return to the depths.
　・ Any snatched Golden Eggs can be retrieved by defeating this
　　 Salmonid before it returns to the water.

● Attack Behavior
　・ They're not known to attack directly.`,T_ExplainEnemy_04:`● Elimination
　・ They can be neutralized relatively easily with a direct hit of ink.

● Supporting Information
　・ New recruits usually start as Snatchers to give them a taste
　　 of the battlefield.
　・ Provided they demonstrate sufficient aptitude at collecting
　　 Golden Eggs, they will be allowed to join the front lines.
　・ In recent years, aircraft have also been brought in to improve
　　 their egg-collection rates.`,T_ExplainEnemy_05:`● Basic Information
　・ An extraordinarily large specimen, it moves very slowly.
　・ Its body is covered in hard, protective skin. Shooting it with
　　 ink has no effect.

● Attack Behavior
　・ It generates bombs from its head, which it throws at enemies.
　・ It can't throw these bombs very far, but the resulting explosion
　　 covers a large area.`,T_ExplainEnemy_06:`● Elimination
　・ The only way to defeat the Steelhead is to shoot ink at the
　  bomb on its head as it inflates.

● Supporting Information
　・ It's the company commander of a Salmonid troop.
　・ Its powerful physique is capable of supporting heavy armor, and
　  its ink-resistant skin is the result of arduous conditioning.
　・ It forms the bomb on its head by collecting its own explosive
　  saliva. Ew.`,T_ExplainEnemy_07:`● Basic Information
　・ It's a weapon made of connected ink-spraying devices for the
　　 suppression of large areas.
　・ It locks on to and relentlessly pursues a single target.

● Attack Behavior
　・ Its extensive length is used to block routes as it rains down ink.`,T_ExplainEnemy_08:`● Elimination
　・ It can be neutralized by shooting the driver in the very rear of
　  the Steel Eel.

● Supporting Information
　・ The driver of the Steel Eel wears a mask to protect itself from
　  the spray generated by the machine.
　・ The great length of the Steel Eel is attributable to the large
　  number of interconnected ink sprayers used to create it.`,T_ExplainEnemy_09:`● Basic Information
　・ They're protected against almost all ink damage by their shields.
　・ Their ability to turn rapidly allows them to keep their shields
　　 facing their target.

● Attack Behavior
　・ The protection afforded by their shields allows them to charge
　　 forward.`,T_ExplainEnemy_10:`● Elimination
　・ Sustained ink attacks will damage their shields and bring them
　  to a standstill.
　・ Once the Scrapper is immobilized, move around behind it to fire
　  through the gap in its shields and take it out.

● Supporting Information
　・ The Scrapper's vehicle is a much-desired item for many
　  Salmonids.
　・ The shields are made from odds and ends of scrap metal and
　  old cookware.
　・ If the shields are broken, the Scrapper will have to stop in order
　  to make repairs.`,T_ExplainEnemy_11:`● Basic Information
　・ It's a Salmonid sniper atop a stack of pots and pans.
　・ It's not known to move from the beach.
　・ The Salmonid on top can't be harmed with ink-based attacks.

● Attack Behavior
　・ It attacks from a distance with powerful jets of ink that can
　  pass through walls and other obstacles.`,T_ExplainEnemy_12:`● Elimination
　・ Use your ink to knock pots away one at a time until the Salmonid
　　 lands on the flame below.

● Supporting Information
　・ It boils ink in its pots to generate the pressure required for its
　　 long-range attacks.
　・ The pots are stacked high on top of a gas burner to allow the
　　 Stinger to effectively sight and attack enemies from a distance.
　・ The Salmonid on top wears protective equipment to absorb the
　　 shock from the jet of ink.`,T_ExplainEnemy_13:`● Basic Information
　・ It lurks under the surface of the ink.
　・ It can swim in ink to scale walls.

● Attack Behavior
　・ It appears from directly beneath its prey and can swallow it in
　  an instant.`,T_ExplainEnemy_14:`● Elimination
　・ You can deal damage by shooting ink at it when it surfaces to
　　 attack, but defeating it this way will take some time, as it is
　　 rather robust.
　・ To bring it down in one fell swoop, trick it into swallowing a bomb
　　 by placing one at its point of attack.

● Supporting Information
　・ In order to sustain its large size, it must perpetually roam
　　 around, searching for prey to consume.
　・ It uses sonar to detect the location of suitable prey while
　　 submerged.`,T_ExplainEnemy_15:`● Basic Information
　・ It's a floaty fighter specializing in surprise attacks.
　・ Its armored umbrella renders it essentially impervious to ink.

● Attack Behavior
　・ It fires midrange attacks using special projectiles.
　・ Its projectiles explode into clouds that rain down ink.`,T_ExplainEnemy_16:`● Elimination
　・ It's susceptible to attacks immediately after it fires.
　・ With good timing, it's possible to reflect the shot and hit the
　　 Drizzler with its own projectile, taking it down in one go.

● Supporting Information
　・ The ranks of the Drizzlers are made up of renegade Salmonids
　　 who prefer to go it alone and fight on their own terms.
　・ It's well protected against ink by unusual umbrella-like armor.
　・ The immense recoil from discharging its weapon temporarily
　　 exposes the Salmonid within its armor.`,T_ExplainEnemy_17:`● Basic Information
　・ Each of its flanks is equipped with missile launchers capable of
　　 firing up to four missiles each.
　・ It uses jet-propulsion technology to hover about.
　・ It's covered in ink-repelling armor.

● Attack Behavior
　・ It's capable of locking on to two targets and firing up to four
　　 missiles from each missile launcher.`,T_ExplainEnemy_18:`● Elimination
　・ Throw a bomb into one of the missile launchers to destroy it.
　・ Take out both of its missile launchers to bring down the Flyfish.`,T_ExplainEnemy_19:`● Supporting Information
　・ It's the latest model of weapon from leading Salmonid engineers.
　・ Only the most elite Smallfry are selected to undergo the special
　  training to become Flyfish pilots.
　・ It's equipped with a space-grade reaction control system on
　  each flank to enable a smooth, stable hover.`,T_ExplainEnemy_20:`● Low Tide
　・ When the tide goes out, a large amount of land that is usually
　  underwater will be exposed.
　・ Salmonid warriors use this land as a staging ground from which
　  to launch coordinated attacks.
　・ During low tide, the egg basket will be stationed near this newly
　  exposed land.

● High Tide
　・ When the tide is in, there'll be much less land available.
　・ During high tide, the egg basket will be in its normal place.`,T_ExplainEnemy_21:`● Advice from Mr. Grizz
　・ During low tide, you gotta get together and move, move, move
　  down to that exposed land, kid!
　・ During high tide—I don't care how hard it is—you gotta survive
　  against those Salmonids!

● Supplementary Information
　・ The sudden and irregular changes in the water levels are a rare
　  phenomenon unique to areas where Salmonids like to gather.
　・ The cause is as yet unknown and is the subject of much
　  research throughout the academic world.`,T_ExplainEnemy_23:`● What Happens
　・ Large groups of ferocious Salmonids appear and carry out rush
　　 attacks at furious speed.
　・ These crazed Salmonids gather whenever Glowflies appear.

● How to Get Golden Eggs
　・ Take out the Goldie hidden in the school of Salmonids.`,T_ExplainEnemy_24:`● Advice from Mr. Grizz
　・ Stand your ground with your allies, and concentrate your fire on
　　 the incoming Salmonids!
　・ Watch out for the Glowflies—if they buzz around you, a
　　 concentrated attack won't be far behind.`,T_ExplainEnemy_25:`● Supplementary Information
　・ It is claimed that the Salmonids' increased aggression is tied
　  somehow to gravitational shifts due to the planet's celestial
　  course, but there is still much that is unclear.
　・ It is said that in premedieval times, before effective defense
　  measures such as long-range ink attacks were available, many
　  cities fell before the rage of the Salmonid rush.`,T_ExplainEnemy_26:`● What Happens
　・ The area is covered in a dense fog, drastically reducing visibility.
　・ Enemies will take advantage of the fog and attack from all
　　 directions.

● How to Get Golden Eggs
　・ Defeat Boss Salmonids.
　・ The extremely rare Goldies may appear in foggy conditions.`,T_ExplainEnemy_27:`● Advice from Mr. Grizz
　・ Try to maintain contact with your teammates at all times while
　  in the fog.
　・ Being alone in the fog is extremely dangerous.

● Supplementary Information
　・ Goldies are extremely rare Salmonids—only one of every 10,000
　  hatchlings is a Goldie.
　・ They live longer than and possess far superior intelligence to
　  normal Salmonid specimens.`,T_ExplainEnemy_28:`● What Happens
　・ Armored vehicles called Grillers spawn one after the other.
　　 Grillers lock their sights on to a target and will pursue it
　　 relentlessly.
　・ Smallfry are known for hitching a ride on the Griller and
　　 interfering with its targeting.

● How to Get Golden Eggs
　・ Attack the weak spot on the back of the Griller to stun it.
　・ Stunning Grillers will reveal further weak points. Attacking
　　 these weak points is the key to taking down Grillers and getting
　　 Golden Eggs.`,T_ExplainEnemy_29:`● Advice from Mr. Grizz
　・ If the Griller has you in its sights, you're better off running
　　 away and letting your friends handle it.

● Supplementary Information
　・ Operating costs for a single Griller would be enough to deploy
　　 a hundred regular Salmonid fighters.`,T_ExplainEnemy_30:`● What Happens
　・ Cohocks will attack in large numbers from exposed sandbanks.
　・ Mr. Grizz will deploy cannons for you to use in dealing with
　  these foes.

● How to Get Golden Eggs
　・ Defeat Boss Salmonids.`,T_ExplainEnemy_31:`● Advice from Mr. Grizz
　・ Use the cannons well to clear the way for your coworkers!

● Supplementary Information
　・ Apparently there are special rooms in the Salmonid barracks set
　  aside for large numbers of Cohocks to gather and practice.`,T_ExplainEnemy_32:`● What Happens
　・ Large numbers of gushers will appear in the area.
　・ A Goldie will be hiding in one of the gushers.
　・ Other Salmonids will attack in their masses from the shores.
　・ Shooting open a gusher without a Goldie in it will cause it to
　  erupt. Thankfully, there won't be anything hiding inside.

● How to Get Golden Eggs
　・ Reveal the Goldie by causing the gusher it's hiding in to erupt.
　・ The Goldie will drop Golden Eggs if hit with enough ink.`,T_ExplainEnemy_33:`● Advice from Mr. Grizz
　・ Spread out, and find that Goldie FAST.
　・ When you find the Goldie, call your buddies over, and let loose
　  with all your firepower!
　・ The gushers emit light when you hit them—the brighter the
　  light, the closer you are to that glorious Goldie.`,T_ExplainEnemy_34:`● Supplementary Information
　・ Salmonids obtained the technology to create gushers through
　　 trade with Octarians.
　・ The more you hit the Goldie, the faster it will move!`,T_ExplainEnemy_35:`● What Happens
　・ New troops are brought to the battleground from the
　　 Mothership.
　・ A large number of Chinooks will bring containers of lesser
　　 Salmonids from the Mothership to join the fray.
　・ Periodically, the Mothership will draw close to the egg basket
　　 and try to suck up and reclaim any Golden Eggs inside.

● How to Get Golden Eggs
　・ Shoot the containers carried by Chinooks, and they'll explode.
　・ If you manage to blow up the Chinooks as well, they will drop
　　 Golden Eggs.`,T_ExplainEnemy_36:`● Advice from Mr. Grizz
　・ Split up to take out the Chinooks.
　・ If the Mothership comes to take back the Golden Eggs, everyone
　　 should focus on pushing it back!`,T_ExplainEnemy_37:`● Supplementary Information
　・ The Mothership is a vital link in the Salmonid distribution chain.
　・ Deploying the Mothership is said to be the last resort of the
　　 Salmonid army. When it is dispatched, all troops stationed
　　 nearby gather together to see it off.`,T_ExplainEnemy_39:`● Basic Information
　・ It's a squad of flying Smallfry carrying a massive pillar.
　・ They plant the pillar in the ground, then fly around above the
　  pillar, spraying ink and generally being a nuisance.
　・ After you splat them, the pillar will stick around.

● Attack Behavior
　・ Several Smallfry fly in circles above the pillar, spraying ink.`,T_ExplainEnemy_40:`● Elimination
　・ Splat all orbiting Smallfry with ink shots.
　・ Climb the pillar, and aim from the top to splat in relative safety.

● Supporting Information
　・ They train to increase their lung capacity, and some are
　　 even recruited to become Stingers.
　・ As they fly in circles, they sing a cheerful tune to encourage
　　 their fellow Salmonids in battle.`,T_ExplainEnemy_41:`● Basic Information
　・ It swims deep below the ink, then launches high into the air
　  before diving back down.
　・ It'll place a ring of ink as it jumps, showing where it will dive.

● Attack Behavior
　・ It will ink the ground within the thrown ring, then attack anyone
　  inside the ring as it dives in.`,T_ExplainEnemy_42:`● Elimination
　・ It's exposed while it's in the air getting ready to attack.
　  That's your chance!
　・ If you ink the ground within its ring, it won't be able to dive
　  back under, letting you make quick work of it.

● Supporting Information
　・ It seems to idolize an animal said to have flourished in ancient
　  times, which may explain why it wears a mask to make itself
　  look more like this creature.
　・ It clearly attaches more importance to the beauty of its
　  dives than its combat effectiveness.`,T_ExplainEnemy_43:`● Basic Information
　・ It's a pilot riding on a hovering, saucer-shaped craft.
　・ These provide support for other Salmonids by creating
　  a circular force field that ink cannot pass through.

● Attack Behavior
　・ Lesser Salmonids will be deployed from the hole on the bottom
　  of the saucer.
　・ It will try to squash targets who walk into the force field.`,T_ExplainEnemy_44:`● Elimination
　・ There is a pilot stationed on top of the craft. Defeating the pilot
　  will destroy the craft.
　・ Walk into the barrier under the Slammin' Lid, then quickly dodge
　  when the craft drops down to splat you. Once it's down, that's
　  your chance to get on top and attack the pilot.

● Supporting Information
　・ The cutting-edge technology incorporated into the craft
　  was obtained by trading with Octarians.
　・ Because of the high cost to build these, only highly experienced
　  veterans are allowed to pilot them.
　・ To save on weight, the craft has no weapons. This is why it
　  attacks by trying to smash enemies beneath it.`,T_ExplainEnemy_45:`● Basic Information
　・ These set up a Big Shot launcher near the shore. The Big Shot
　  launcher is loaded with cannonballs carried in from the sea,
　  which it then fires.
　・ The attending Salmonid itself is not aggressive—it just passively
　  goes back and forth between the sea and the Big Shot launcher.
　・ The Big Shot launcher can be used to load and fire Golden Eggs.
　・ After the Big Shot is defeated, the Big Shot launcher will stick
　  around until the next wave.

● Attack Behavior
　・ It will fire its cannonballs in the direction of the egg basket.
　・ When a cannonball lands, it creates two shock-wave attacks.`,T_ExplainEnemy_46:`● Elimination
　・ Take out the Salmonid operating the Big Shot launcher.

● Supporting Information
　・ Among muscle-bound Salmonids, those with belligerent
　  personalities tend to be assigned as Steelheads, while those
　  with calmer dispositions are assigned to Big Shots.
　・ On Salmonid holidays, Big Shot workers like to launch special
　  fireworks in place of cannonballs to make things more festive.`,T_ExplainEnemy_47:`● What Happens
　・ A Mudmouth will erupt out of the hole left by a gusher and open
　　 its huge mouth.
　・ Lesser Salmonids will start jumping out of the Mudmouth's
    mouth, one after another after another...

● How to Get Golden Eggs
　・ Throw a bomb into the Mudmouth's mouth. When the bomb
　　 explodes, it'll cough up a Golden Egg.
　・ If you throw in enough bombs, the Mudmouth will explode
　　 and drop even more Golden Eggs!
　・ Sometimes you'll see one covered in golden goop. Defeat it, and
　　 it'll leave behind LOTS of Golden Eggs.`,T_ExplainEnemy_48:`● Advice from Mr. Grizz
　・ Search for the Mudmouth by tracking where the Lesser
    Salmonids are coming from.
　・ Mudmouths multiply as time passes, so splat 'em fast!

● Supplementary Information
　・ Long ago, the Mudmouth was thought to be a spirit who haunted
　　 the depths of the Splatlands seas.
　・ Now, thanks to the courage and quick thinking of Splatsville
　　 youths who thought to start throwing bombs into their mouths,
　　 we know they're just Salmonids who got stuck in a pipe and
　　 coated in mud.`,T_ExplainEnemy_50:`● What Happens
　・ The ground will dry up, and a gigantic tornado will whirl to
　　 life by the shore.
　・ Anything in the sea, including Salmonids, will be sucked up
　　 by the tornado and flung toward land.

● How to Get Golden Eggs
　・ Boxes packed full of Golden Eggs will fall somewhere on dry land.
　・ Break open the boxes to release a large number of Golden Eggs.`,T_ExplainEnemy_51:`● Advice from Mr. Grizz
　・ Since the eggs may land far away from the basket, coordinate
　　 with your coworkers and use the Egg Throw.
　・ Dodge any Salmonids that come flying toward you, or splat them
　　 as you transport the eggs.

● Supplementary Information
　・ There's no way to predict when a giant tornado might appear.
　　 It will fling all kinds of things out from the ocean, which usually
　　 results in a great number of Salmonid casualties.
　・ Flying debris will be present, and accidents are bound to happen.
　　 If you become unable to use the egg basket on dry land,
　　 a single egg delivered to the basket will be counted as two.`,T_TitleCoop_00:"1.1.0 To All My Happy Little Workers",T_TitleCoop_01:"1.1.1 Collecting Power Eggs",T_TitleCoop_02:"1.1.2 Earn Big Bucks—Fast!",T_TitleCoop_03:"1.1.3 Joining the Team",T_TitleCoop_04:"1.1.4 Getting Started",T_TitleCoop_05:"1.1.5 All in a Day’s Work",T_TitleCoop_06:"1.1.6 Forming Bonds through Cooperation",T_TitleCoop_07:"1.1.7 Your Quota",T_TitleCoop_08:"1.1.9 Your Bonus",T_TitleCoop_09:"1.2.0 Pay Grade",T_TitleCoop_10:"1.2.1 Evaluation Criteria",T_TitleCoop_11:"1.2.2 The Essence of the Job",T_TitleCoop_12:"1.2.3 And to You, Our Valued Employee",T_TitleCoop_13:"1.1.8 King Salmonids",T_TitleCoop_21:"2.1.1 Chum, Smallfry, and Cohock",T_TitleCoop_22:"2.1.2 Snatcher",T_TitleCoop_24:"2.2.1 Steelhead",T_TitleCoop_25:"2.2.2 Steel Eel",T_TitleCoop_26:"2.2.3 Scrapper",T_TitleCoop_27:"2.2.4 Stinger",T_TitleCoop_28:"2.2.5 Maws",T_TitleCoop_29:"2.2.6 Drizzler",T_TitleCoop_30:"2.2.7 Flyfish",T_TitleCoop_32:"2.3.1 Water Levels (High and Low Tides)",T_TitleCoop_33:"2.3.2 Rush",T_TitleCoop_34:"2.3.3 Fog",T_TitleCoop_35:"2.3.4 The Griller",T_TitleCoop_36:"2.3.5 Cohock Charge",T_TitleCoop_37:"2.3.6 Goldie Seeking",T_TitleCoop_38:"2.3.7 The Mothership",T_TitleCoop_39:"2.2.8 Fish Stick",T_TitleCoop_40:"2.2.9 Flipper-Flopper",T_TitleCoop_41:"2.2.10 Slammin' Lid",T_TitleCoop_42:"2.2.11 Big Shot",T_TitleCoop_43:"2.3.8 Mudmouth Eruptions",T_TitleCoop_44:"2.3.9 Giant Tornado"},"CommonMsg/Manual/ManualCoopEvent":{BigRun_Manual01:`・ Big Run is a terrifying phenomenon in which a
  swarm of Salmonids overtake a [color=0001]battle stage[color=ffff]
  in the city!

・ At Grizzco Industries, we want to protect
  your city from Salmonid infestation. That's
  why we're recruiting far and wide for heroes
  who are willing to help collect Golden Eggs
  and drive the Salmonids back from our home.`,BigRun_Manual02:`・ Our high standards for job performance will
  be unchanged during the Big Run. However,
  we've increased the number of rewards on
  your [color=0001]Bonus Meter[color=ffff]. You will also be pleasantly
  surprised to receive more Catalog Points and
  more [color=0001]fish scales[color=ffff] from King Salmonids.

・ What's more, everyone who participates during
  Big Run even once will be given a [color=0001]decoration [color=ffff]as
  a token of gratitude.`,BigRun_Manual03:`・ Following a Big Run, we will tally the number
  of Golden Eggs your team collected during the
  shift. Your strongest performance in a single
  shift will be your [color=0001]high score[color=ffff]! And the very
  strongest performers will receive better
  decorations than everyone else. See below!
  [group=0003 type=0051 params=00 00 80 3f 00 00 00 00][group=0004 type=0019 params=00 03 00 00] & up → gold decoration
  [group=0003 type=0051 params=00 00 80 3f 00 00 00 00][group=0004 type=0019 params=01 03 00 00] & up → silver decoration
  [group=0003 type=0051 params=00 00 80 3f 00 00 00 00][group=0004 type=0019 params=02 03 00 00] & up → bronze decoration

・ Corporate wishes you good luck!`,BigRun_Title:"What's Big Run?",TeamContest_Manual01:`・ Eggstra Work is a special corporate event
  where you can practice team building with
  others while collecting as many Golden Eggs
  as possible during [color=0001]5 waves[color=ffff].

・ What stimulates a healthy workplace
  environment more than [color=0001]friendly competition[color=ffff]?
  Nothing, as far as Grizzco can tell!`,TeamContest_Manual02:`・ [color=0001]Before heading out to work[color=ffff], choose a weapon!
  It's a good idea to make sure that your team
  has a balance of weapons, and there are
  always four to choose from. You'll [color=0001]keep the
  same weapon[color=ffff] through each wave.

・ The job scenario doesn't change during an
  Eggstra Work session. That means every team
  will face off against [color=0001]the same Salmonids under
  the same conditions[color=ffff] [color=0001]every time it joins[color=ffff].
  However, if your team manages to exceed
  the Golden Eggs quota by enough, your
  [color=0001]hazard level [color=ffff]will go up, making it possible
  to get a higher score!`,TeamContest_Manual03:`・ Participating in Eggstra Work will not change
  your regular job title. There's even a [color=0001]special
  Bonus Meter[color=ffff] that's only for Eggstra Work, so
  feel free to join in whenever!

・ All workers who participate will receive a
  commemorative gift based on the highest
  score they achieve, so aim for the stars!
  After the event is complete, you can check
  the [color=0001]bulletin board[color=ffff] at Grizzco to see where
  you stand. Good luck! We look forward to
  meeting your team of go-getters!`,TeamContest_Title:"What's Eggstra Work?"},"CommonMsg/Manual/ManualEventMatch":{EventMatch_Button01:`Current
Challenge`,EventMatch_Button02:`Challenge
Basics`,EventMatch_Button03:"Turf War",EventMatch_Button04:"Splat Zones",EventMatch_Button05:"Tower Control",EventMatch_Button06:"Rainmaker",EventMatch_Button07:"Clam Blitz",EventMatch_CompetitionRehearsalsAU_Manual:`This Challenge serves as a [color=0001]practice run[color=ffff] for future tournaments in the[color=0001] AU/NZ[color=ffff]
region. However, anyone can participate in this Challenge, regardless of
whether they plan on participating in a future tournament.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_CompetitionRehearsalsAU_Subtitle:`Brush up your skills before throwing
down in a tournament!`,EventMatch_CompetitionRehearsalsAU_Title:"Tournament Test Run (AU/NZ)",EventMatch_CompetitionRehearsalsEU_Manual:`This Challenge serves as a [color=0001]practice run[color=ffff] for future tournaments in the[color=0001] EU[color=ffff]
region. However, anyone can participate in this Challenge, regardless of
whether they plan on participating in a future tournament.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_CompetitionRehearsalsEU_Subtitle:`Brush up your skills before throwing
down in a tournament!`,EventMatch_CompetitionRehearsalsEU_Title:"Tournament Test Run (EU)",EventMatch_CompetitionRehearsalsJP_Manual:`This Challenge serves as a [color=0001]practice run[color=ffff] for future tournaments in the [color=0001]Japan[color=ffff]
region. However, anyone can participate in this Challenge, regardless of
whether they plan on participating in a future tournament.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_CompetitionRehearsalsJP_Subtitle:`Brush up your skills before throwing
down in a tournament!`,EventMatch_CompetitionRehearsalsJP_Title:"Tournament Test Run (Japan)",EventMatch_CompetitionRehearsalsUS_Manual:`This Challenge serves as a [color=0001]practice run[color=ffff] for future tournaments in
the [color=0001]Americas [color=ffff]region. However, anyone can participate in this Challenge,
regardless of whether they plan on participating in a future tournament.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_CompetitionRehearsalsUS_Subtitle:`Brush up your skills before throwing
down in a tournament!`,EventMatch_CompetitionRehearsalsUS_Title:"Tournament Test Run (Americas)",EventMatch_CompetitionsAU_Manual:`This type of Challenge is a qualifier for a [color=0001]tournament[color=ffff] in the [color=0001]AU/NZ [color=ffff]region.
However, players who do not plan on participating in the tournament
can still participate in this type of Challenge.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_CompetitionsAU_Subtitle:"Play your way into a tournament!",EventMatch_CompetitionsAU_Title:"Tournament Qualifiers (AU/NZ)",EventMatch_CompetitionsEU_Manual:`This type of Challenge is a qualifier for a [color=0001]tournament[color=ffff] in the [color=0001]EU [color=ffff]region.
However, players who do not plan on participating in the tournament
can still participate in this type of Challenge.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_CompetitionsEU_Subtitle:"Play your way into a tournament!",EventMatch_CompetitionsEU_Title:"Tournament Qualifiers (EU)",EventMatch_CompetitionsJP_Manual:`This type of Challenge is a qualifier for a [color=0001]tournament[color=ffff] in the [color=0001]Japan [color=ffff]region.
However, players who do not plan on participating in the tournament
can still participate in this type of Challenge.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_CompetitionsJP_Subtitle:"Play your way into a tournament!",EventMatch_CompetitionsJP_Title:"Tournament Qualifiers (Japan)",EventMatch_CompetitionsUS_Manual:`This type of Challenge is a qualifier for a [color=0001]tournament[color=ffff] in the [color=0001]Americas [color=ffff]region.
However, players who do not plan on participating in the tournament
can still participate in this type of Challenge.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_CompetitionsUS_Subtitle:"Play your way into a tournament!",EventMatch_CompetitionsUS_Title:"Tournament Qualifiers (Americas)",EventMatch_CostumeParty_Manual:`Make the most of a random assortment of Sheldon's weapons and
outfits in this come-as-you-are Challenge!

・ You'll be assigned an outfit and weapon at the start of battle.
・ Your loadout will completely change with each subsequent battle!
・ Sheldon is graciously loaning all of the equipment, so you don't need to
  own the items you're using. You also don't get to keep them.`,EventMatch_CostumeParty_Subtitle:`Raid Sheldon's arsenal and closet for
random weapons and outfits!`,EventMatch_CostumeParty_Title:"Sheldon's Dress-Up Showdown",EventMatch_DeepFog_Manual:`Can you use the fog cover to your advantage?

・ The stage will be shrouded in fog through the battle.
・ However, the density of the fog will change as the battle goes on!
・ Both primary and secondary abilities will be enabled!`,EventMatch_DeepFog_Subtitle:"The stakes are high in low-vis battles!",EventMatch_DeepFog_Title:"Foggy Notion",EventMatch_FastMove_Manual:`Glide through your team's ink faster than ever in swim form.
Oh, and try to win the battle while you're at it!

・ Swim-form movement will be greatly increased for all players.
・ Only primary gear abilities will be enabled! Secondary abilities
  will have no effect.
・ Swim Speed Up gear abilities will have no effect.`,EventMatch_FastMove_Subtitle:"Swim speed up for all players!",EventMatch_FastMove_Title:"Swim It to Win It",EventMatch_Gachiarea_Manual00:"Splatter the Splat Zones with ink, then hold your turf to emerge victorious!",EventMatch_Gachiarea_Manual01:`1. Splat Zone
2. Control Indicator
3. Progress Countdown
4. Penalty Countdown`,EventMatch_Gachiarea_Manual02:`Whichever team can hold all [color=0001]Splat Zones[color=ffff] long
enough for the timer to reach zero wins!

First, claim Splat Zones by covering them in ink.
You can see how much of a zone you've inked
by looking at the [color=0001]control indicator[color=ffff]. Claim all the
Splat Zones, and your team's [color=0001]timer[color=ffff] will start to
[color=0001]count down[color=ffff]. If the timer hits zero, that's a
knockout victory!`,EventMatch_Gachiarea_Manual03:`・ Work with your team!
    Going solo to retake a Splat Zone guarded by your opponents is NOT easy.
    Group up with your allies and strike together! Or, if you're defending, try
    to scatter your opponents and stop them from working as a team.

・ Never give up, even if you're losing!
    When the enemy team controls the zones or when you're behind in the
    countdown, your special gauge will start filling automatically!`,EventMatch_Gachiarea_Manual03_Title:"Splat Zones: Pro Tips",EventMatch_Gachiarea_Manual04:`・ Try to turn it around in overtime!
    If time runs out with the losing team in control of the zones, the battle
    will go into overtime. Fight to the very end, and you can come from behind
    for an overtime win!`,EventMatch_Gachiarea_Title:"Splat Zones: The Rules",EventMatch_Gachiasari_Manual00:`The team that gets the most clams in their enemy's basket wins! You'll need to
use a power clam to take down the basket's barrier first.`,EventMatch_Gachiasari_Manual01:`1. Clams
2. Power Clams
3. The Basket
4. Score Countdown`,EventMatch_Gachiasari_Manual02:`5. Barrier Timer
6. Team Clam Total
7. Clams You're Holding
8. Player Clam Totals`,EventMatch_Gachiasari_Manual03:`The team that throws the most [color=0001]clams [color=ffff]into the
other team's basket wins! Just don't forget that
the baskets have a [color=0001]barrier[color=ffff] around them.

First, you need to break the barrier. Collect
clams from around the stage.`,EventMatch_Gachiasari_Manual04:`Once you have [color=0001]8[color=ffff] clams, they'll combine into a
[color=0001]power clam[color=ffff]. Then it's time to break that barrier!`,EventMatch_Gachiasari_Manual05:`You can throw both regular and power clams by
pressing [group=0003 type=0000 params=52 b8 5e 3f 03 00 00 00] or [group=0003 type=0009 params=52 b8 5e 3f 03 00 00 00].

Break a barrier using a power clam, and a
[color=0001]barrier timer[color=ffff] will start!`,EventMatch_Gachiasari_Manual06:`Throw clams and power clams into your
opponents' basket as fast as you can!

If you can get your score down to 0, you'll earn
a knockout victory. Each clam drops your team's
[color=0001]score countdown[color=ffff] by [color=0001]3[color=ffff] points, while a power clam
drops it by [color=0001]20[color=ffff]!

You'll also [color=0001]extend the barrier timer[color=ffff] with each
clam you throw into the enemy basket.`,EventMatch_Gachiasari_Manual07:`If your barrier is broken, your opponents' barrier
becomes invincible, so don't forget to defend!
If you see an enemy with clams, splat them quick
to keep them from extending the barrier timer.

Once your barrier is back, a power clam will
[color=0001]appear under your basket[color=ffff] to help your team
launch a counterattack!`,EventMatch_Gachiasari_Manual08:`Getting splatted causes you to drop all of
the clams you're carrying. If you see a dropped
regular clam, grab it quick before it disappears!

Getting splatted can also cause you to drop
power clams. These can only be picked up by
someone from the same team that dropped it.
If an opponent drops a power clam, fight to keep
it from being picked back up until it disappears.`,EventMatch_Gachiasari_Manual09:`Any clams on your team's ink are marked to make
them easy to find.

New clams appear often, so inking more turf will
make it easier to find and grab clams before
your opponents can.`,EventMatch_Gachiasari_Manual10:`・ Go on recon!
    Use recon to visit the stage and learn different ways to get to each
    basket. Knowing your way around is crucial!

・ Expand your turf!
    Ink the ground and expand your turf to make it faster and easier to find
    more clams as they appear!`,EventMatch_Gachiasari_Manual10_Title:"Clam Blitz: Pro Tips",EventMatch_Gachiasari_Manual11:`・ Never give up, even if you're losing!
    If neither team has a power clam, or if both teams have one, whichever
    team is losing will have their special gauges start filling automatically!

・ Turn it around in overtime!
    If the losing team has a power clam or the barrier timer is running when
    the clock runs out, the battle goes into overtime. That's your cue to give
    it all you've got and claim an overtime win!`,EventMatch_Gachiasari_Title:"Clam Blitz: The Rules",EventMatch_Gachihoko_Manual00:"Bring the Rainmaker to the goal in the enemy base to win!",EventMatch_Gachihoko_Manual01:`1. The Rainmaker
2. The Goal
3. Time Left to Carry the Rainmaker
4. Goal Distance Remaining
5. Checkpoint`,EventMatch_Gachihoko_Manual02:`The team that gets the [color=0001]Rainmaker[color=ffff] and carries
it to the [color=0001]goal[color=ffff] in the enemy base wins!

First, run to the Rainmaker in the middle of the
stage, then break it out of its shield to grab it.

If the Rainmaker is dropped, the shield will slowly
return. Leave the Rainmaker for too long, and
it will automatically go back to its starting
position in the middle of the stage.`,EventMatch_Gachihoko_Manual03:`When you're carrying the Rainmaker, you can't
Super Jump or use your weapons. However, you
CAN fire a super-powerful [color=0001]Rainmaker Shot[color=ffff]!

Also, carrying the Rainmaker is dangerous.
If you hold on to it for too long, it will explode
and splat you. Be careful!`,EventMatch_Gachihoko_Manual04:`Once you've got the Rainmaker, head for the
[color=0001]checkpoint[color=ffff].

After you clear the checkpoint, your next stop
is the goal. If you get pushed back, you can run
right through any checkpoints your team has
already cleared.

As you get closer to the checkpoint and then
the enemy goal, your team's [color=0001]goal distance[color=ffff] will
[color=0001]decrease[color=ffff]. If time runs out before the Rainmaker
gets to a goal, the team with the lowest
goal distance wins.`,EventMatch_Gachihoko_Manual05:`・ Move that Rainmaker!
    The most important thing is to get the Rainmaker to the goal! If you have
    the Rainmaker, push forward. If a teammate has the Rainmaker, start
    clearing a path for them. Keep the Rainmaker moving forward!

・ Never give up, even if you're losing!
    If your opponents have the Rainmaker, or if your team is both behind in
    goal distance and doesn't have the Rainmaker, your special gauge will
    start filling automatically!`,EventMatch_Gachihoko_Manual05_Title:"Rainmaker: Pro Tips",EventMatch_Gachihoko_Manual06:`・ Try to turn it around in overtime!
    If the losing team controls the Rainmaker when time runs out, the battle
    goes into overtime! Keep up the pressure, and you might come from behind
    and win it in overtime!`,EventMatch_Gachihoko_Title:"Rainmaker: The Rules",EventMatch_Gachiyagura_Manual00:"Whichever team rides the tower to the goal in the enemy base wins!",EventMatch_Gachiyagura_Manual01:`1. The Tower
2. The Goal
3. Checkpoint
4. Goal Distance Remaining`,EventMatch_Gachiyagura_Manual02:`Ride the [color=0001]tower[color=ffff] from the center of the stage to
the [color=0001]goal [color=ffff]in the enemy base to win!

Ink the sides of the tower, and climb on top to
claim it. The tower will start moving toward the
enemy base automatically.

If you get splatted and the enemy takes control
of the tower, or if it sits for too long without
anyone on it, it will move back toward the center
of the stage.`,EventMatch_Gachiyagura_Manual03:`There are [color=0001]checkpoints[color=ffff] along the route to the
goal. Ride the tower to a checkpoint, and it will
stop for a short while. Keep control of the tower
until the checkpoint's defenses are gone, and
the tower will start moving again.

Fully clear a checkpoint once, and the tower
won't need to stop at it again. However, if a
checkpoint isn't fully cleared, its defenses
will return!`,EventMatch_Gachiyagura_Manual04:`As the tower gets near the goal, your team's
[color=0001]goal distance [color=ffff]will [color=0001]decrease[color=ffff]. If the tower can't
reach either goal before time runs out, the team
with the lowest goal distance wins.`,EventMatch_Gachiyagura_Manual04_Title:"Tower Control: Pro Tips",EventMatch_Gachiyagura_Manual05:`・ Protect the tower!
    Anyone riding the tower is an easy target, so have teammates scout ahead
    to make sure the way is safe!

・ Take the tower back at checkpoints!
    Don't forget that the tower stops at checkpoints. That makes it the
    perfect time to attack and take it for your team!`,EventMatch_Gachiyagura_Manual06:`・ Turn it around in overtime!
    If the losing team controls the tower when the clock runs out, the battle
    goes into overtime. Don't give up—you might be able to come from behind
    to win it in overtime!`,EventMatch_Gachiyagura_Title:"Tower Control: The Rules",EventMatch_Geyser_Manual:`Where did all those gushers come from? Might as well
make the most of them!

・ Gushers have appeared in the stage!
・ Attack a gusher to make it erupt with your color of ink.
・ You can use them to hide or climb.
・ Both primary and secondary abilities will be enabled.`,EventMatch_Geyser_Subtitle:`The stages you know and love are now
filled with gushers. How will you use them?`,EventMatch_Geyser_Title:"Oh My Gush",EventMatch_HighJump_Manual:`With the ability to jump higher than ever, you can explore new attack
routes and strategies on the map!

・ Jump power will be greatly increased for all players.
・ Armor durability will be increased after doing a Squid Spawn.
・ Only primary gear abilities will be enabled! Secondary abilities
  will have no effect.`,EventMatch_HighJump_Subtitle:"Jump power UP! See where it takes you!",EventMatch_HighJump_Title:"Extreme Jump Battle",EventMatch_Manual00:"Test yourself with limited-time battles!",EventMatch_Manual01:`[color=0001]Challenges [color=ffff]are periodic events with [color=0001]special
rules or limitations[color=ffff]. They can also include
[color=0001]qualification matches for tournaments[color=ffff]!`,EventMatch_Manual02:`Like other modes, Challenges use your
performance in battles to help matchmaking.
Your [color=0001]Challenge Power[color=ffff] will be calculated based
on your Challenge results and will go up or
down with each loss.

Within a Challenge, you'll compete in either Turf
War battles or Anarchy Battle modes, but your
Rank Points won't change based on the results.`,EventMatch_Manual03:`You can also make a team to participate in
Challenges, in which case your team's total
Challenge Power will be calculated. If the
makeup of your team changes, the team's
Challenge Power will be recalculated.`,EventMatch_Manual04:`Each section of a Challenge is [color=0001]2 hours[color=ffff] long,
and you'll be able to view the results for any
given section at the [color=0001]lobby terminal[color=ffff] shortly
after the schedule updates. If your Challenge
Power was calculated several times during the
Challenge, your highest score will be recorded.

Challenge results will only be available for
[color=0001]14 days[color=ffff] following the event, so don't forget
to check 'em out!`,EventMatch_Manual05:`If you [color=0001]win 5[color=ffff] battles within a Challenge, you'll get
a [color=0001][group=0003 type=0022 params=d7 a3 b0 3f fe ff ff ff]Shell-Out Token[color=ffff], which you can redeem at
the Shell-Out Machine anytime!

Keep in mind that Challenges can be held in
multiple parts, but your wins across each
section will add up. You'll be earning that
[group=0003 type=0022 params=d7 a3 b0 3f fe ff ff ff]Shell-Out Token before you know it!`,EventMatch_Modified_Rainmaker_Manual:`Help test Sheldon's latest modifications to the Rainmaker weapon,
and get some good battling in while you're at it!

・ All battles will be in [color=0001]Rainmaker[color=ffff] mode.
・ Fully charged Rainmaker shots will now fire in three directions!
・ The abilities of the player holding the Rainmaker will be boosted!
・ The Rainmaker will explode [color=0001]30 seconds[color=ffff] after being picked up. Watch out!
・ Both primary and secondary abilities will be enabled.`,EventMatch_Modified_Rainmaker_Subtitle:`Sheldon has been tinkering with the
Rainmaker, and he wants you to test it!`,EventMatch_Modified_Rainmaker_Title:"Modded Rainmaker Test-Fire",EventMatch_Modified_TowerControl_Manual:`Can you control the biggest tower ever?

・ All battles will be in [color=0001]Tower Control[color=ffff] mode.
・ The tower is now enormous—your whole team can fit!
・ Coordinate with teammates to attack the enemy base.
・ Both primary and secondary abilities will be enabled.`,EventMatch_Modified_TowerControl_Subtitle:`The tower is way bigger than before!
All aboard!`,EventMatch_Modified_TowerControl_Title:"Towering Tower Control",EventMatch_MonthlyLeagueMatchReal_Manual:`How high can you get your Challenge Power this month?

・ Only primary gear abilities will be enabled in [color=0001]Turf War[color=ffff] battles.
  Secondary gear abilities will have no effect!
・ There will be no limits on gear abilities in [color=0001]Anarchy Battle modes[color=ffff]!`,EventMatch_MonthlyLeagueMatchReal_Subtitle:"Aim for the highest Challenge Power!",EventMatch_MonthlyLeagueMatchReal_Title:"Monthly Challenge",EventMatch_Nawabari_Manual00:"Teams have three minutes to try to ink more ground than their opponents!",EventMatch_Nawabari_Manual01:`Teams have three minutes to cover the [color=0001]ground[color=ffff]
with ink, and the team with the most [color=0001]turf [color=ffff]inked
when time runs out wins. Get inking, and try to
claim as much turf as possible for your team!`,EventMatch_Nawabari_Manual02:`The more turf you ink, the more your [color=0001]special
gauge[color=ffff] will fill. When it's completely full,
press [group=0003 type=0008 params=1f 85 2b 3f 00 00 00 00] to unleash your [color=0001]special[color=ffff]!

But watch out! Your special gauge drops if you
get splatted. Remember to unleash its fury, and
you could turn the tide of battle!`,EventMatch_Nawabari_Manual03:`The freshest players all know to check the
[color=0001]Turf Map[color=ffff] with [group=0003 type=0002 params=52 b8 5e 3f 03 00 00 00]. Use it to get a quick look
at each team's inked turf.

And don't forget you can keep playing while
you're checking out the Turf Map!`,EventMatch_Nawabari_Manual04:`With the Turf Map open, select an ally with [group=0003 type=0004 params=52 b8 5e 3f 03 00 00 00],
then [color=0001]Super Jump[color=ffff] to their location using [group=0003 type=0000 params=52 b8 5e 3f 03 00 00 00]!
You can also use [group=0003 type=0008 params=1f 85 2b 3f 00 00 00 00] to choose which ally
you want to Super Jump to.

Opponents can see where you'll land with your
Super Jump, so look closely at the Turf Map
and choose an ally who's in a spot where the
enemy can't ambush you.`,EventMatch_Nawabari_Title:"Turf War Battles: The Rules",EventMatch_NewSeasonCup_Manual:`Compete on a perfectly level playing field—everyone will be trying out
a new stage together!

・ Develop stage-specific strategies and tactics in real time.
・ Only primary gear abilities will be enabled in [color=0001]Turf War[color=ffff] battles.
  Secondary gear abilities will have no effect!
・ There will be no limits on gear abilities in [color=0001]Anarchy Battle modes[color=ffff]!`,EventMatch_NewSeasonCup_Subtitle:"Celebrate the new season on a new stage!",EventMatch_NewSeasonCup_Title:"New Season Challenge",EventMatch_PairCup_Manual:`Team chemistry is the name of the game in fast-paced two vs. two battles!

・ Explore new strategies as you try to become the top team on the map!
・ Respawn time will be shortened!
・ You can participate as a[color=0001] team of 2[color=ffff] or [color=0001]solo[color=ffff].
・ Both primary and secondary abilities will be enabled!`,EventMatch_PairCup_Subtitle:"See what you can do as a duo!",EventMatch_PairCup_Title:"Duel of Dynamic Duos",EventMatch_RainmakerDrop_Manual:`See what you can do with the Rainmaker in a regular battle!

・ The mode will [color=0001]not be Rainmaker[color=ffff].
・ The Rainmaker will appear in the center of the stage.
・ Any player who obtains the Rainmaker can use it to their advantage!
・ If the player holding the Rainmaker is defeated, the Rainmaker will return to
  the center of the stage.
・ Both primary and secondary abilities will be enabled.`,EventMatch_RainmakerDrop_Subtitle:`Try out the Rainmaker in places it was never
meant to be used!`,EventMatch_RainmakerDrop_Title:"Making It Rain...Here?",EventMatch_RandomWeapon_Manual:`"I'm happy to loan out my entire inventory for this Challenge.
Try something different, and see if you find a new favorite!"
  -Sheldon

・ Weapons will be randomly assigned before each battle.
・ Sheldon will be graciously loaning these weapons out, so don't worry if
  you don't own every possible weapon.
・ Both primary and secondary abilities will be enabled!`,EventMatch_RandomWeapon_Subtitle:"Make the most of random weapons!",EventMatch_RandomWeapon_Title:"The Sheldon Sampler Challenge",EventMatch_SpecialRush_JetPack_Manual:`Take to the air with your Inkjet special, and splat it out in the sky!

・ You can only use weapons that come with the [color=0001]Inkjet[color=ffff] special.
・ The special gauge will fill quickly all by itself!
・ Only primary gear abilities will be enabled! Secondary abilities
  will have no effect.`,EventMatch_SpecialRush_JetPack_Subtitle:"A high-flying Inkjet battle!",EventMatch_SpecialRush_JetPack_Title:"Inkjets for Everyone!",EventMatch_SpecialRush_Skewer_Manual:`Who's got two pectoral fins and is ready to ride? Literally every player
in this Challenge!

・ You can only use weapons that come with the [color=0001]Reefslider[color=ffff] special.
・ The special gauge will fill quickly all by itself!
・ Only primary gear abilities will be enabled! Secondary abilities
  will have no effect.`,EventMatch_SpecialRush_Skewer_Subtitle:`Rev up your Reefsliders, and ride
into battle!`,EventMatch_SpecialRush_Skewer_Title:"Reefslider Rally",EventMatch_SpecialRush_UltraShot_Manual:`Can you defeat a Trizooka user with a Trizooka of your own?!
Now's the time to find out!

・ You can only use weapons that come with the [color=0001]Trizooka[color=ffff] special.
・ The special gauge will fill quickly all by itself!
・ Only primary gear abilities will be enabled! Secondary abilities
  will have no effect.`,EventMatch_SpecialRush_UltraShot_Subtitle:"A high-powered Trizooka battle!",EventMatch_SpecialRush_UltraShot_Title:"Too Many Trizookas!",EventMatch_SpecialRush_ZipCaster_Manual:`This Challenge asks: Where would you go and how would you battle if you
could use the Zipcaster to your heart's content?

・ You can only use weapons that come with the [color=0001]Zipcaster[color=ffff] special.
・ The special gauge will fill quickly all by itself!
・ Only primary gear abilities will be enabled! Secondary abilities
  will have no effect.`,EventMatch_SpecialRush_ZipCaster_Subtitle:"Fly free with unlimited Zipcaster use!",EventMatch_SpecialRush_ZipCaster_Title:"Zip-to-It Zipcaster Challenge",EventMatch_SuperSubWeapon_LineMarker_Manual:`Aim is the name of the game! Bring your Angle Shooters for this
battle of the best bounces.

・ You can only use weapons that come with the [color=0001]Angle Shooter[color=ffff] sub weapon.
・ Angle Shooter damage will be greatly increased for all players.
・ Angle Shooter ink consumption will also be greatly increased for all players.
・ Only primary gear abilities will be enabled! Secondary abilities
  will have no effect.`,EventMatch_SuperSubWeapon_LineMarker_Subtitle:`Who's the best shot with an Angle Shooter?
Let's find out.`,EventMatch_SuperSubWeapon_LineMarker_Title:"Work the Angles",EventMatch_Title:"Challenge Basics",EventMatch_UsuallyRehearsals_Manual:`This Challenge serves as a [color=0001]practice run[color=ffff] for future tournaments.
However, anyone can participate in this Challenge, regardless of
whether they plan on participating in a future tournament.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_UsuallyRehearsals_Subtitle:`Brush up your skills before throwing
down in a tournament!`,EventMatch_UsuallyRehearsals_Title:"Tournament Test Run",EventMatch_Usually_Manual:`This type of Challenge is a qualifier for a [color=0001]tournament[color=ffff]. However, players
who do not plan on participating in the tournament can still participate
in this type of Challenge.

A separate application may be required to participate in tournaments,
regardless of qualification status. Additionally, participation may
be restricted depending on a player's country of residence or
other factors.`,EventMatch_Usually_Subtitle:"Play your way into a tournament!",EventMatch_Usually_Title:"Tournament Qualifiers",EventMatch_WeaponLimited_Blaster_Manual:`Have you mastered blasters? Let's see what you can do!

・ Players can only choose different varieties of [color=0001]blasters[color=ffff]!
・ Both primary and secondary abilities will be enabled.`,EventMatch_WeaponLimited_Blaster_Subtitle:`Bring your blasters and get ready
for blastoff!`,EventMatch_WeaponLimited_Blaster_Title:"Fastest Blasters",EventMatch_WeaponLimited_Charger_Manual:`Bring your favorite charger and take your shot!

・ Players can only choose different varieties of [color=0001]chargers[color=ffff]!
・ Both primary and secondary abilities will be enabled.`,EventMatch_WeaponLimited_Charger_Subtitle:`Time to see if you're a hotshot
with your favorite charger!`,EventMatch_WeaponLimited_Charger_Title:"Fully Charged",EventMatch_WeaponLimited_RollerBrush_Manual:`This Challenge only allows rollers and brushes—it's not for the faint of art!

・ The only weapons you can use are [color=0001]rollers[color=ffff] or [color=0001]brushes[color=ffff]!
・ Both primary and secondary abilities will be enabled!`,EventMatch_WeaponLimited_RollerBrush_Subtitle:"It's rollers vs. brushes for bragging rights!",EventMatch_WeaponLimited_RollerBrush_Title:"Art Battle for the Ages",EventMatch_WeaponLimited_Spinner_Manual:`Bring the heat with your best splatling loadout, and see who's
left standing.

・ Players can only choose different varieties of [color=0001]splatlings[color=ffff]!
・ Both primary and secondary abilities will be enabled.`,EventMatch_WeaponLimited_Spinner_Subtitle:`Muster as much firepower as you can
in this battle of the splatlings!`,EventMatch_WeaponLimited_Spinner_Title:"Barrel of Splats"},"CommonMsg/Manual/ManualFes":{Fes_Button01:"Splatfest Info",Fes_Button02:`Sneak Peek/
Main Event`,Fes_Button03:`Splatfest
Battle Basics`,Fes_Button04:`Tricolor Battle
Basics`,Fes_Button05:"Final Results",Fes_FesMatch_Manual00:"Three teams battle it out for supremacy!",Fes_FesMatch_Manual01:`Splatfest Battles are special, themed Turf War
matches where three teams duke it out. Teams
have three minutes to ink as much ground as
they can. The team with the most inked turf
when time runs out wins.

Players will also earn [color=0001]Splatfest Points[color=ffff] based
on how a match goes. Earn enough, and your
[color=0001]Splatfest Rank[color=ffff] will go up. The higher your rank,
the more [color=0001]Super Sea Snails[color=ffff] you'll get after the
Splatfest ends.`,Fes_FesMatch_Manual02:`There are two kinds of Splatfest Battle: [color=0001]Open[color=ffff]
and [color=0001]Pro[color=ffff]! [color=0001]Open[color=ffff] is for solo players looking for
a quick match and teams of two to four players
who are all pledged to the same team.

In Open, points earned from inking turf, as well
as any victory bonuses, count as [color=0001]Clout[color=ffff].

Oh, and if you stick together with your team
and start racking up wins, you may end up
matched against other teams on a similar
winning streak!`,Fes_FesMatch_Manual03:`[color=0001]Pro [color=ffff]is where solo players go when they want
to push their limits. Here your skill is shown as
[color=0001]Splatfest Power[color=ffff], with the best of the best
making it into the coveted [color=0001]Splatfest Top 100[color=ffff]!

In Pro, wins earn you [color=0001]Clout[color=ffff], and the higher
your opponents' Splatfest Power is, the more
Clout you'll get!`,Fes_FesMatch_Title:"Splatfest Battle Basics",Fes_MainSubFes_Manual00:`Splatfests have two parts: the [color=0001]Splatfest Sneak Peek[color=ffff], when players
pledge themselves to a themed team, and the [color=0001]Splatfest Main
Event[color=ffff],[color=0001] [color=ffff]where they'll go into battle with others from that team.

To join a Splatfest, just go to the[color=0001] Splatfest Pledge Box [color=ffff]and[color=0001] pledge[color=ffff]
yourself to a team. Then rent a [color=0001]Splatfest Tee[color=ffff] so you can show
your support!

If your catalog gains a level while a Splatfest is going on, you'll
earn a [color=0001]conch shell[color=ffff]—so get out there, work shifts, and fight in
battles to get those Catalog Points! You can get a catalog from
Hotlantis once you've reached level 4.`,Fes_MainSubFes_Manual01:`Earning conch shells during the Splatfest Sneak Peek also helps
out your Splatfest team! Plus, your conch shells can be used to
play the [color=0001]Shell-Out Machine[color=ffff] in the lobby. Oh, and don't worry—
conch shells still count for your team even if they're spent on
the Shell-Out Machine, so go nuts!

Meanwhile, your Splatfest Tee can get its [color=0001]abilities changed[color=ffff]
or have its [color=0001]ability slots scrubbed[color=ffff] for a special discount price.
Make sure to get it ready for the Main Event!

But act fast—your Splatfest Tee and your conch shells will all go
away when the Splatfest ends!`,Fes_MainSubFes_Manual02:`The Splatfest Main Event is all about [color=0001]Splatfest Battles[color=ffff]. Doing well
in a Splatfest Battle earns you [color=0001]Clout[color=ffff], which helps out your team!

Once in a while, you'll be in a [color=0001]10x Battle[color=ffff]. Win that, and you'll earn
10 times the Clout and get a [color=0001]festival shell[color=ffff]. These boost your
odds of getting into a [color=0001]100x Battle[color=ffff], or even a [color=0001]333x Battle[color=ffff]!`,Fes_MainSubFes_Manual03:`When the Main Event is half over, the [color=0001]Halftime Report[color=ffff] will come on
to announce which team is in the lead and kick off the start of
[color=0001]Tricolor Battles[color=ffff]! Now the runner-up teams can gang up to take
on the leading team by going to the lobby for a Tricolor Battle.

You can find more info on how Tricolor Battles work by going to
both Tricolor Battle Basics and Splatfest Battle Basics.

One last thing: Catalog Points payouts are boosted during the
Splatfest Main Event. Cool, huh?`,Fes_MainSubFes_Title:"Sneak Peek & the Main Event",Fes_Result_Manual00:`The winner of a Splatfest is chosen based on each team's [color=0001]vote
popularity[color=ffff], [color=0001]how many conch shells members got[color=ffff] during the Sneak
Peek, and how much [color=0001]Clout[color=ffff] was earned during the Main Event.

That means losing the popularity vote isn't the end—the battles
during the Sneak Peek and Main Event all matter!

And the rewards? The winning team gets to claim a larger share of
the Super Sea Snail prize pool!`,Fes_Result_Title:"Splatfest Final Results",Fes_Torikara_Manual00:`Three teams ink turf and fight to take over Ultra Signals. At the end, the
team with the most turf inked wins!`,Fes_Torikara_Manual01:`1. Each Team's Turf Area
2. The Ultra Signal
3. Sprinkler of Doom
4. Number of Ultra Signals Secured`,Fes_Torikara_Manual02:`After the Halftime Report, players can choose
to participate in [color=0001]Tricolor Battles[color=ffff]!

These two vs. four vs. two showdowns feature
an intense battle to control the central turf
between three teams.

If players on a leading Splatfest team win
battles as a defending team, they will receive
bonus Clout. Likewise, if players on the second-
and third-place teams win as an attacking team,
they'll also receive bonus Clout.`,Fes_Torikara_Manual03:`[color=0001]Tricolor Turf War [color=ffff]battles are (you guessed it!)
special battles with three ink colors fighting it
out. Two teams of two take on a team of four!

Both two-player teams flank the four-player
team and attempt to take control of the
[color=0001]Ultra Signal [color=ffff]in the center of the stage.
Meanwhile, the four-player team tries to [color=0001]ink
the most turf[color=ffff] and defend the [color=0001]Ultra Signal[color=ffff]!`,Fes_Torikara_Manual04:`The attacking teams need to ink as much ground
as possible and try to use the Ultra Signal to
call in help from the band Deep Cut!

When an attacker touches the Ultra Signal, an
[color=0001]attempt[color=ffff] is made. Hang on to the Ultra Signal
long enough, and it will be secured.`,Fes_Torikara_Manual05:`Once attackers secure the Ultra Signal,
Deep Cut will deploy a [color=0001]Sprinkler of Doom[color=ffff],
a device that inks turf automatically!

Also, each attempt on the Ultra Signal [color=0001]shortens
how long it takes to secure it[color=ffff], so don't let up.
Keep up the pressure, and the Sprinkler of Doom
will be yours!

Only two Ultra Signals can appear per battle.`,Fes_Torikara_Manual06:`Clout earned by attacking teams is largely set
by whether or not they [color=0001]defeated the defenders[color=ffff].
In other words, it is worth far more Clout for the
defenders to come in last than for an attacking
team to come in first or second.

The Clout attackers earn is also based on [color=0001]rank[color=ffff],
the [color=0001]number of attempts the team made on
Ultra Signals[color=ffff], and [color=0001]how many Ultra Signals a
team secured[color=ffff]. So as long as you've got the
defenders under control, SHOW NO MERCY!`,Fes_Torikara_Manual07:`●[color=0001] Get that Ultra Signal![color=ffff]
Securing an Ultra Signal doesn't just help expand your team's turf—it also
earns you Clout. Keep up the pressure, and secure the Ultra Signal!

●[color=0001] Work with your teammate![color=ffff]
Taking on the four-player defending team isn't gonna be easy! Work together
with your teammate to find the best time to launch your special weapons and
figure out the best angles of attack.`,Fes_Torikara_Manual07_Title:"Pro Tips for Attackers",Fes_Torikara_Manual08:`● [color=0001]Work with the other attacking team too![color=ffff]
Keep an eye on the other attacking team—they'll be coming from the opposite
end of the battlefield. If you see them starting an assault, that might be a
good time to join the fight to overthrow the defenders!`,Fes_Torikara_Manual09:`● [color=0001]Keep them far away from your Ultra Signal![color=ffff]
If the attackers make enough attempts on the Ultra Signal, they'll get it.
Keep a lookout for where the attacking teams are headed, and try to splat
them before they can even get close.

● [color=0001]You outnumber them![color=ffff]
The icons at the top of the screen show you how many members of each
team are still standing. If you see a chance to group up and overwhelm the
attackers, take it!`,Fes_Torikara_Manual09_Title:"Pro Tips for Defenders",Fes_Torikara_Manual10:`● [color=0001]You still need to ink turf to win![color=ffff]
As the battle goes on, don't forget to double-check how much turf your team
has covered. If an attacking team is in the lead, stealing their turf may be all
you need to do to put yourself on top!`,Fes_Torikara_Title:"Tricolor Battle Basics"},"CommonMsg/Manual/ManualMiiverse":{Miiverse_FAQButton:"FAQ",Miiverse_FAQManual00:`・ How do I post my image to the internet?
    You can post your image to social media if you select [group=0003 type=0005 params=52 b8 5e 3f 03 00 00 00]Post on the
    drawing screen while connected to the internet. A social-media account
    is required.`,Miiverse_FAQManual00_01:`・ How do I share my image?
    You can share your image with other players in the plaza or square by
    selecting [group=0003 type=0005 params=52 b8 5e 3f 03 00 00 00]Post on the drawing screen while connected to the internet.`,Miiverse_FAQManual01:`・ How can I make Splatfest posts?
    Once a Splatfest theme is announced, you can make posts after you visit
    the Splatfest Pledge Box and pick a team. You won't be able to make
    Splatfest posts if you haven't chosen a team to support.`,Miiverse_FAQManual02:`・ I've found an image that violates the rules. What should I do?
    Please report any inappropriate content that you find.

・ How do I report something?
    While on the street, select some graffiti on a wall or another surface, and
    use [group=0003 type=0006 params=52 b8 5e 3f 03 00 00 00]Report to bring up the reporting screen. Then select the reason
    for reporting the image and send the report.`,Miiverse_FAQManual03:`・ Can I prevent images from being displayed?
    While there's no way to prevent images from displaying altogether, you can
    opt for only preset images created by Nintendo to be displayed. From the
    Options tab in the menu, change Post Display to OFF.`,Miiverse_FAQTitle:"FAQ",Miiverse_RuleButton:"Rules",Miiverse_RuleManual00:`Please keep the following rules in mind.
Posts that break these rules may [color=0001]not be displayed to other users[color=ffff].`,Miiverse_RuleManual01:`・ Personal information
    Do not include any information that can be used to identify you or someone
    else personally, such as your name (or someone else's name), email
    address, home address, or telephone number.

・ Content that might make others uncomfortable
    Posted drawings may be visible to other users. Do not include words or
    images in your posts that may upset other users.`,Miiverse_RuleManual02:`・ Inappropriate content
    Please do not post any commercial or marketing content, content that
    depicts violence, or content that violates public morality.

・ Misreporting
    Do not deliberately report content that does not violate the rules.`,Miiverse_RuleManual03:`・ Copyright infringement
    Be careful not to post content that infringes upon the intellectual property
    rights of others.`,Miiverse_RuleTitle:"Rules",Miiverse_UseButton:"How to post!",Miiverse_UseManual00:`[group=0003 type=0000 params=52 b8 5e 3f 03 00 00 00]Pen
You can write or draw with the pen. The pen
comes in three different thicknesses.

[group=0003 type=0001 params=52 b8 5e 3f 03 00 00 00]Eraser
You can erase things you've written or drawn
with the eraser. The eraser comes in three
different sizes.

[group=0003 type=0009 params=52 b8 5e 3f 03 00 00 00][group=0003 type=000a params=52 b8 5e 3f 03 00 00 00]Change Size
This allows you to change the size of the
pen and eraser.`,Miiverse_UseManual01:`[group=0003 type=0007 params=1f 85 2b 3f 00 00 00 00]Erase All
Push this to erase everything.

[group=0003 type=000b params=52 b8 5e 3f 03 00 00 00]Undo
Undo your last action.

[group=0003 type=000c params=52 b8 5e 3f 03 00 00 00]Redo
Redo an action you've undone.`,Miiverse_UseManual02:`[group=0003 type=0002 params=52 b8 5e 3f 03 00 00 00]Zoom
Zoom in on the area in which you want to draw.
Press this button again to zoom back out.

[group=0003 type=0003 params=52 b8 5e 3f 03 00 00 00]Switch Horizontal/Vertical
Draw a vertically long drawing. Press again to
go back to horizontal.

[group=0003 type=0008 params=1f 85 2b 3f 00 00 00 00]Move
While zoomed in or vertical, you can move the
area shown on-screen.`,Miiverse_UseTitle:"How to post!"},"CommonMsg/Manual/ManualMiniGame":{Minigame_Manual00:"Get ready for the hottest card game in the Splatlands!",Minigame_Manual01:`Tableturf Battle is a head-to-head card game where you'll race to ink turf
before running out of turns. [color=0001]Whoever has the most turf at the end wins![color=ffff]`,Minigame_Manual02:`Both players place their cards at the same time, with each able to ink a unique
pattern of spaces. You get [color=0001]12 turns [color=ffff]to ink as much as you can!`,Minigame_Manual03:`You can only ink a spot that is [color=0001]next to one you already control[color=ffff]. And look out—
once a space is claimed, that's that. It can't be reinked!`,Minigame_Manual04:`If both players try to ink the same space, the [color=0001]card with the lower number [color=ffff]wins.
If cards have the same number, the overlapping ink will form an un-inkable wall!`,Minigame_Manual05:`If one of your color's [color=0001]Special Spaces[color=ffff] is completely surrounded, either by your
ink, your opponent's, or even a wall, you'll earn a [color=0001]Special Point[color=ffff]!`,Minigame_Manual06:`Playing a [color=0001]Special Attack[color=ffff] card is the only way to [color=0001]ink over an opponent's spaces[color=ffff]!
Just remember you can only play them next to one of your Special Spaces.`,Minigame_Manual07:`Need more Tableturf Battle cards? You can get a fresh [color=0001]pack of cards[color=ffff] from the
catalog, the Shell-Out Machine, and elsewhere!`,Minigame_Manual08:`Prepare for battle by picking out 15 cards to make a deck.
You can save up to 16 different decks.`,Minigame_Manual_Title00:"Tableturf Battle: The Freshest Card Game",Minigame_Manual_Title01:"A One-on-One Turf War...with Cards!",Minigame_Manual_Title02:"Ink It All with Cards",Minigame_Manual_Title03:"The Rules of Inking",Minigame_Manual_Title04:"The Where and How of Inking",Minigame_Manual_Title05:"Special Points for You",Minigame_Manual_Title06:"Special Attacks Turn the Tide",Minigame_Manual_Title07:"Build Your Collection",Minigame_Manual_Title08:"Deck Out Your Cards"},"CommonMsg/Manual/ManualPlzAmiiboMySet":{AmiiboMySet_Manual00:`In the Equip menu, select amiibo under
Other, and then choose Save to amiibo!
Tap the amiibo to save your equipped gear
along with your options and Freshest Fits.`,AmiiboMySet_Manual00_Title:"Saving Gear",AmiiboMySet_Manual01:`In the Equip menu, you can tap an amiibo when
you see the [group=0003 type=0025 params=d7 a3 70 3f fb ff ff ff] icon to change your outfit!`,AmiiboMySet_Manual01_Title:"Changing Gear",AmiiboMySet_Manual02:`After tapping your amiibo with the Equip menu
open, you can quickly change into the Freshest
Fit that the amiibo remembered for you! Just
select [group=0003 type=0006 params=52 b8 5e 3f 03 00 00 00]Freshest Fit.`,AmiiboMySet_Manual02_Title:"Freshest Fits"},"CommonMsg/Manual/ManualPlzAmiiboPhoto":{AmiiboPhoto_Manual00:`Get a picture with an amiibo!

Start up Photo Mode by pressing [group=0003 type=0006 params=52 b8 5e 3f 03 00 00 00], and when
you see [group=0003 type=0025 params=d7 a3 70 3f fb ff ff ff], touch an amiibo you've made
friends with to call them over.

Pick where you want them to be with [group=0003 type=0007 params=1f 85 2b 3f 00 00 00 00],
then hit [group=0003 type=0000 params=52 b8 5e 3f 03 00 00 00] to tell them to go there!`,AmiiboPhoto_Manual00_Title:"Call amiibo",AmiiboPhoto_Manual01:`Get everything set up how you want it, then
pose yourself and your amiibo by pressing [group=0003 type=0005 params=52 b8 5e 3f 03 00 00 00].

Then all that's left is to start snapping photos!`,AmiiboPhoto_Manual01_Title:"Set Pose"},"CommonMsg/Manual/ManualRegularMatch":{RegularMatch_Manual00:"Teams have three minutes to try to ink more ground than their opponents!",RegularMatch_Manual01:`Teams have three minutes to cover the [color=0001]ground[color=ffff]
with ink, and the team with the most [color=0001]turf [color=ffff]inked
when time runs out wins. Get inking, and try to
claim as much turf as possible for your team!`,RegularMatch_Manual02:`The more turf you ink, the more your [color=0001]special
gauge[color=ffff] will fill. When it's completely full,
press [group=0003 type=0008 params=1f 85 2b 3f 00 00 00 00] to unleash your [color=0001]special[color=ffff]!

But watch out! Your special gauge drops if you
get splatted. Remember to unleash its fury, and
you could turn the tide of battle!`,RegularMatch_Manual03:`The freshest players all know to check the
[color=0001]Turf Map[color=ffff] with [group=0003 type=0002 params=52 b8 5e 3f 03 00 00 00]. Use it to get a quick look
at each team's inked turf.

And don't forget you can keep playing while
you're checking out the Turf Map!`,RegularMatch_Manual04:`With the Turf Map open, select an ally with [group=0003 type=0004 params=52 b8 5e 3f 03 00 00 00],
then [color=0001]Super Jump[color=ffff] to their location using [group=0003 type=0000 params=52 b8 5e 3f 03 00 00 00]!
You can also use [group=0003 type=0008 params=1f 85 2b 3f 00 00 00 00] to choose which ally
you want to Super Jump to.

Opponents can see where you'll land with your
Super Jump, so look closely at the Turf Map
and choose an ally who's in a spot where the
enemy can't ambush you.`,RegularMatch_Manual05:`Once the battle is over, you'll get XP, cash,
and Catalog Points.

If XP causes your level to go up, you may get
[group=0003 type=001c params=29 5c 4f 3f 02 00 00 00][color=0001]Sheldon Licenses[color=ffff]. Then you can go to the
weapon shop and trade for a new weapon!`,RegularMatch_Title_01:"Turf War: The Rules",RegularMatch_Title_02:"Special Weapons",RegularMatch_Title_03:"Turf Map",RegularMatch_Title_04:"Super Jump",RegularMatch_Title_05:"After the Battle"},"CommonMsg/Manual/ManualVendor":{Vendor_Add_Gear_Power_Manual00:`Bringing the [color=0001]gear ability chunks[color=ffff] you've collected
to Murch will let you pick which abilities to add
to your gear!

Gear always starts out with a [color=0001]primary gear
ability[color=ffff] and has slots for [color=0001]secondary gear
abilities[color=ffff]. Both sets can be customized to fit
your play style!`,Vendor_Add_Gear_Power_Manual01:`[color=0001]Primary gear abilities[color=ffff] are more powerful, but
they also require more chunks to customize.
Plus, it takes a few different types of chunks
to add some of the more interesting abilities.

[color=0001]Secondary gear abilities[color=ffff] aren't as strong, but
they don't require nearly as many chunks to add
either. However, trying to add more than one of
the same ability will bump up the chunk cost.`,Vendor_Add_Gear_Power_Manual02:`If a slot is already full, you can still add a new
ability on top of the one that's there, but you
won't get as many [color=0001]chunks[color=ffff] back for the one you
overwrote. Also, once you overwrite an ability,
it's gone for good.

Lastly, ability chunks cannot be used to add the
[color=0001]Ability Doubler[color=ffff] you see on [color=0001]Splatfest Tees[color=ffff].`,Vendor_Add_Gear_Power_Title:"Add Gear Ability",Vendor_Button01:"Order Status",Vendor_Button02:`Boost
Star Power`,Vendor_Button03:"Scrub Slots",Vendor_Button04:"Add Abilities",Vendor_Button05:"Reroll Slots",Vendor_Button06:`SplatNet
Delivery`,Vendor_Button07:"In Inkopolis",Vendor_Cleaning_Manual00:`Gear whose slots are filled with [color=0001]secondary gear
abilities [color=ffff]can be [color=0001]scrubbed clean [color=ffff]by Murch!

When gear is scrubbed, all of its ability slots are
reset to how things were before any abilities
were added. You also get to keep any [color=0001]ability
chunks [color=ffff]that are scrubbed off!`,Vendor_Cleaning_Manual01:`[color=0001]Gear ability chunks[color=ffff] can be used by Murch
to add specific abilities to your gear. You can
get gear ability chunks by having gear scrubbed.

You'll need [color=0001]cash[color=ffff] to pay for the scrubbing,
but the price is the same no matter how many
abilities are on the gear, meaning you'll get
the best value on gear with all three slots full.`,Vendor_Cleaning_Title:"Scrub Slots",Vendor_GesoTown_Manual00:`The [color=0001]SplatNet Shop[color=ffff] lets you order gear through
the [color=0001]SplatNet 3[color=ffff] online service, meaning you can
order new gear even when you're not playing!

There's even gear with unique ability layouts you
won't see on the versions sold in Splatsville
or Inkopolis!

Check out the official Splatoon 3 website
to learn more.`,Vendor_GesoTown_Manual01:`Only [color=0001]1 piece[color=ffff] of gear can be ordered from the
SplatNet Shop at a time. However, those orders
are delivered to Murch immediately, and another
order can be made as soon as it's picked up.

Never miss a chance to get gear you want!`,Vendor_GesoTown_Title:"About the SplatNet Shop",Vendor_Increase_Rarity_Manual00:`You can boost your gear's [color=0001]star power[color=ffff] by asking
Murch, or by rebuying the same item when
you see it in stock in a shop.

Boosting star power gives gear [color=0001]more ability slots[color=ffff]
and makes it earn more [color=0001]gear experience[color=ffff]. If you
have any gear you use a lot, you'll definitely
want to boost its star power!`,Vendor_Increase_Rarity_Manual01:`Murch can also boost the star power of gear that
[color=0001]isn't for sale [color=ffff]in shops. If you have a favorite piece
of gear, be sure to ask him about it.

Murch needs [color=0001]Super Sea Snails[color=ffff] to boost star
power, and the higher it is to begin with,
the more Super Sea Snails he'll need.
Choose your upgrades wisely!`,Vendor_Increase_Rarity_Title:"Boost Star Power",Vendor_Order_Manual00:`If you see a piece of gear you like when talking
to [color=0001]other players in the square[color=ffff], ask [color=0001]Murch[color=ffff] to
order it for you!

You can order [color=0001]up to 3[color=ffff] pieces of gear at a time.
If you already have three orders in progress and
see another item you want, you can order it, but
one of your existing orders will be canceled.`,Vendor_Order_Manual01:`Murch will receive your gear orders in the order
they were received, [color=0001]1 piece per day[color=ffff]. If you get
really lucky, the gear will even come with the
same abilities as the one that caught your eye.

You will need [color=0001]cash[color=ffff] to take delivery of your
order, and the closer the gear you ordered
is to the original, the more it will cost.`,Vendor_Order_Title:"Gear Order Status",Vendor_OtherCity_Manual00:`In Inkopolis, [color=0001]Spyke[color=ffff] handles gear orders and
everything else that Murch handles in Splatsville.
By the way, you can pick up your orders from
either Murch or Spyke in either location. They're
weirdly good at coordinating with each other.`,Vendor_OtherCity_Title:"Inkopolis: Tips and Tricks",Vendor_Replacement_Gear_Power_Manual00:`Any gear with [color=0001]all 3 of its ability slots filled[color=ffff] can
be rerolled for a new set of random abilities by
giving Murch some [color=0001]Super Sea Snails[color=ffff].

What abilities you'll get, however, is up to luck!`,Vendor_Replacement_Gear_Power_Manual01:`By the way, when you reroll a piece of gear,
you'll get the [color=0001]chunks[color=ffff] from the old abilities that
were just erased.

You can also reroll as many times as you like,
meaning you can keep doing it until you've made
the perfect piece of gear, AND you'll collect
plenty of chunks along the way!`,Vendor_Replacement_Gear_Power_Title:"Randomly Reroll Gear Abilities"},"CommonMsg/Manual/ManualXMatch":{XMatch_Button01:"X Battle",XMatch_Button02:"Splat Zones",XMatch_Button03:"Tower Control",XMatch_Button04:"Rainmaker",XMatch_Button05:"Clam Blitz",XMatch_Gachiarea_Manual00:"Splatter the Splat Zones with ink, then hold your turf to emerge victorious!",XMatch_Gachiarea_Manual01:`1. Splat Zone
2. Control Indicator
3. Progress Countdown
4. Penalty Countdown`,XMatch_Gachiarea_Manual02:`Whichever team can hold all [color=0001]Splat Zones[color=ffff] long
enough for the timer to reach zero wins!

First, claim Splat Zones by covering them in ink.
You can see how much of a zone you've inked
by looking at the [color=0001]control indicator[color=ffff]. Claim all the
Splat Zones, and your team's [color=0001]timer[color=ffff] will start to
[color=0001]count down[color=ffff]. If the timer hits zero, that's a
knockout victory!`,XMatch_Gachiarea_Manual03:`・ Work with your team!
    Going solo to retake a Splat Zone guarded by your opponents is NOT easy.
    Group up with your allies and strike together! Or, if you're defending, try
    to scatter your opponents and stop them from working as a team.

・ Never give up, even if you're losing!
    When the enemy team controls the zones or when you're behind in the
    countdown, your special gauge will start filling automatically!`,XMatch_Gachiarea_Manual03_Title:"Splat Zones: Pro Tips",XMatch_Gachiarea_Manual04:`・ Try to turn it around in overtime!
    If time runs out with the losing team in control of the zones, the battle
    will go into overtime. Fight to the very end, and you can come from behind
    for an overtime win!`,XMatch_Gachiarea_Title:"Splat Zones: The Rules",XMatch_Gachiasari_Manual00:`The team that gets the most clams in their enemy's basket wins! You'll need to
use a power clam to take down the basket's barrier first.`,XMatch_Gachiasari_Manual01:`1. Clams
2. Power Clams
3. The Basket
4. Score Countdown`,XMatch_Gachiasari_Manual02:`5. Barrier Timer
6. Team Clam Total
7. Clams You're Holding
8. Player Clam Totals`,XMatch_Gachiasari_Manual03:`The team that throws the most [color=0001]clams [color=ffff]into the
other team's basket wins! Just don't forget that
the baskets have a [color=0001]barrier[color=ffff] around them.

First, you need to break the barrier. Collect
clams from around the stage.`,XMatch_Gachiasari_Manual04:`Once you have [color=0001]8[color=ffff] clams, they'll combine into a
[color=0001]power clam[color=ffff]. Then it's time to break that barrier!`,XMatch_Gachiasari_Manual05:`You can throw both regular and power clams by
pressing [group=0003 type=0000 params=52 b8 5e 3f 03 00 00 00] or [group=0003 type=0009 params=52 b8 5e 3f 03 00 00 00].

Break a barrier using a power clam, and a
[color=0001]barrier timer[color=ffff] will start!`,XMatch_Gachiasari_Manual06:`Throw clams and power clams into your
opponents' basket as fast as you can!

If you can get your score down to 0, you'll earn
a knockout victory. Each clam drops your team's
[color=0001]score countdown[color=ffff] by [color=0001]3[color=ffff] points, while a power clam
drops it by [color=0001]20[color=ffff]!

You'll also [color=0001]extend the barrier timer[color=ffff] with each
clam you throw into the enemy basket.`,XMatch_Gachiasari_Manual07:`If your barrier is broken, your opponents' barrier
becomes invincible, so don't forget to defend!
If you see an enemy with clams, splat them quick
to keep them from extending the barrier timer.

Once your barrier is back, a power clam will
[color=0001]appear under your basket[color=ffff] to help your team
launch a counterattack!`,XMatch_Gachiasari_Manual08:`Getting splatted causes you to drop all of
the clams you're carrying. If you see a dropped
regular clam, grab it quick before it disappears!

Getting splatted can also cause you to drop
power clams. These can only be picked up by
someone from the same team that dropped it.
If an opponent drops a power clam, fight to keep
it from being picked back up until it disappears.`,XMatch_Gachiasari_Manual09:`Any clams on your team's ink are marked to make
them easy to find.

New clams appear often, so inking more turf will
make it easier to find and grab clams before
your opponents can.`,XMatch_Gachiasari_Manual10:`・ Go on recon!
    Use recon to visit the stage and learn different ways to get to each
    basket. Knowing your way around is crucial!

・ Expand your turf!
    Ink the ground and expand your turf to make it faster and easier to find
    more clams as they appear!`,XMatch_Gachiasari_Manual10_Title:"Clam Blitz: Pro Tips",XMatch_Gachiasari_Manual11:`・ Never give up, even if you're losing!
    If neither team has a power clam, or if both teams have one, whichever
    team is losing will have their special gauges start filling automatically!

・ Turn it around in overtime!
    If the losing team has a power clam or the barrier timer is running when
    the clock runs out, the battle goes into overtime. That's your cue to give
    it all you've got and claim an overtime win!`,XMatch_Gachiasari_Title:"Clam Blitz: The Rules",XMatch_Gachihoko_Manual00:"Bring the Rainmaker to the goal in the enemy base to win!",XMatch_Gachihoko_Manual01:`1. The Rainmaker
2. The Goal
3. Time Left to Carry the Rainmaker
4. Goal Distance Remaining
5. Checkpoint`,XMatch_Gachihoko_Manual02:`The team that gets the [color=0001]Rainmaker[color=ffff] and carries
it to the [color=0001]goal[color=ffff] in the enemy base wins!

First, run to the Rainmaker in the middle of the
stage, then break it out of its shield to grab it.

If the Rainmaker is dropped, the shield will slowly
return. Leave the Rainmaker for too long, and
it will automatically go back to its starting
position in the middle of the stage.`,XMatch_Gachihoko_Manual03:`When you're carrying the Rainmaker, you can't
Super Jump or use your weapons. However, you
CAN fire a super-powerful [color=0001]Rainmaker Shot[color=ffff]!

Also, carrying the Rainmaker is dangerous.
If you hold on to it for too long, it will explode
and splat you. Be careful!`,XMatch_Gachihoko_Manual04:`Once you've got the Rainmaker, head for the
[color=0001]checkpoint[color=ffff].

After you clear the checkpoint, your next stop
is the goal. If you get pushed back, you can run
right through any checkpoints your team has
already cleared.

As you get closer to the checkpoint and then
the enemy goal, your team's [color=0001]goal distance[color=ffff] will
[color=0001]decrease[color=ffff]. If time runs out before the Rainmaker
gets to a goal, the team with the lowest
goal distance wins.`,XMatch_Gachihoko_Manual05:`・ Move that Rainmaker!
    The most important thing is to get the Rainmaker to the goal! If you have
    the Rainmaker, push forward. If a teammate has the Rainmaker, start
    clearing a path for them. Keep the Rainmaker moving forward!

・ Never give up, even if you're losing!
    If your opponents have the Rainmaker, or if your team is both behind in
    goal distance and doesn't have the Rainmaker, your special gauge will
    start filling automatically!`,XMatch_Gachihoko_Manual05_Title:"Rainmaker: Pro Tips",XMatch_Gachihoko_Manual06:`・ Try to turn it around in overtime!
    If the losing team controls the Rainmaker when time runs out, the battle
    goes into overtime! Keep up the pressure, and you might come from behind
    and win it in overtime!`,XMatch_Gachihoko_Title:"Rainmaker: The Rules",XMatch_Gachiyagura_Manual00:"Whichever team rides the tower to the goal in the enemy base wins!",XMatch_Gachiyagura_Manual01:`1. The Tower
2. The Goal
3. Checkpoint
4. Goal Distance Remaining`,XMatch_Gachiyagura_Manual02:`Ride the [color=0001]tower[color=ffff] from the center of the stage to
the [color=0001]goal [color=ffff]in the enemy base to win!

Ink the sides of the tower, and climb on top to
claim it. The tower will start moving toward the
enemy base automatically.

If you get splatted and the enemy takes control
of the tower, or if it sits for too long without
anyone on it, it will move back toward the center
of the stage.`,XMatch_Gachiyagura_Manual03:`There are [color=0001]checkpoints[color=ffff] along the route to the
goal. Ride the tower to a checkpoint, and it will
stop for a short while. Keep control of the tower
until the checkpoint's defenses are gone, and
the tower will start moving again.

Fully clear a checkpoint once, and the tower
won't need to stop at it again. However, if a
checkpoint isn't fully cleared, its defenses
will return!`,XMatch_Gachiyagura_Manual04:`As the tower gets near the goal, your team's
[color=0001]goal distance [color=ffff]will [color=0001]decrease[color=ffff]. If the tower can't
reach either goal before time runs out, the team
with the lowest goal distance wins.`,XMatch_Gachiyagura_Manual04_Title:"Tower Control: Pro Tips",XMatch_Gachiyagura_Manual05:`・ Protect the tower!
    Anyone riding the tower is an easy target, so have teammates scout ahead
    to make sure the way is safe!

・ Take the tower back at checkpoints!
    Don't forget that the tower stops at checkpoints. That makes it the
    perfect time to attack and take it for your team!`,XMatch_Gachiyagura_Manual06:`・ Turn it around in overtime!
    If the losing team controls the tower when the clock runs out, the battle
    goes into overtime. Don't give up—you might be able to come from behind
    to win it in overtime!`,XMatch_Gachiyagura_Title:"Tower Control: The Rules",XMatch_Manual00:"Think you're the best of the best? Now's your chance to prove it!",XMatch_Manual01:`Are you the type of player who wants to take
on the toughest challenge around? X Battles
may be for you!

Once you reach a rank of Ｓ+[size=75%]0[size=100%] or higher, you'll
unlock the ability to enter X Battles using
your [color=0001]X Power[color=ffff] instead of Rank Points.

You'll compete in the same four modes as
Anarchy Battles, but [color=0001]each mode[color=ffff] has its own
X Power that you can win or lose.`,XMatch_Manual02:`Don't see any X Power yet? Don't worry. Your
X Power will be calculated [color=0001]after your first 5
battles[color=ffff]. Then you can start using it to take
on challenges.

Each challenge continues until you [color=0001]win or
lose 3 times[color=ffff]. Depending on the results,
your X Power will go up or down from there.

Remember—challenges and X Power calculations
are separate for each of the four types of
X Battle modes.`,XMatch_Manual03:`If your X Power increases enough, you may
show up in the X Rank leaderboards. Some of
the highest-ranked players will get a crown
to display along with their nicknames!

Didn't make it this season? You'll get another
shot—X Power will be [color=0001]recalculated every season[color=ffff]!

You can see the latest rankings by mode or
by weapon in the SplatNet 3 app.`,XMatch_Title:"X Battle: The X Means It's X-TREME"},"CommonMsg/MatchMode":{Bankara:"Anarchy Battle [size=75%](Series)[size=100%]",BankaraOpen:"Anarchy Battle [size=75%](Open)[size=100%]",Coop:"Salmon Run",CoopBigRun:"Big Run",CoopPrivate:"Private Job",CoopTeamContest:"Eggstra Work",FestChallenge:"Splatfest Battle [size=75%](Pro)[size=100%]",FestRegular:"Splatfest Battle [size=75%](Open)[size=100%]",FestTriColor:"Tricolor Battle",League:"Challenge",MiniGame:"Tableturf Battle",Private:"Private Battle",Regular:"Regular Battle",XMatch:"X Battle"},"CommonMsg/MiniGame/MiniGame":{BtnL_BattleWithPlayerQ:"Nah",BtnR_BattleWithPlayerQ:"Battle!",CardNumber:"No. [group=0002 type=0000 params=00 03 00 01]",CardRarityCommon:"Common",CardRarityFresh:"Fresh",CardRarityRare:"Rare",DefaultDeckName:"Deck [group=0002 type=0000 params=00 01 00 00]",Msg_BattleStart:"Starting battle!",Msg_BattleWithPlayerQ:`You've been challenged by [color=0001][group=0002 type=0001 params=00 0a][color=ffff].
Do you want to battle?`,Msg_CannotChangeDeckName:"Deck names cannot be changed during matchmaking.",Msg_NetworkError:`A communication error has occurred.
Closing Tableturf Battle.`,Msg_NoValidDeck:`You need a deck of 15 cards in order to play
Tableturf Battle. Please open your [color=0001]Card List[color=ffff]
from the match menu and edit your deck.`,SortCardNumber:"Sort by Number",SortRarity:"Sort by Rarity",SortSquareNum:"Sort by Spaces",StarterDeckName:"Starter Deck",WinCountInGame:"Current win streak: [group=0002 type=0000 params=00 02 00 00]!"},"CommonMsg/MiniGame/MiniGameCardName":{Ajio:"Fred Crumbs",Anaaki:"Annaki",Anemo:"Annie",Aori:"Callie",Arome:"Tentatek",Atarime:"Cuttlefish",BaiTakoTrooper:`Twintacle
Octotrooper`,Bakudan:"Steelhead",Barazushi:"Barazushi",BarrierTakopter:"Octodisco",Batoroika:"SquidForce",Beacon:"Squid Beakon",BlasterLight00:"Rapid Blaster",BlasterLight01:`Rapid Blaster
Deco`,BlasterLightLong00:`Rapid Blaster
Pro`,BlasterLightLong01:`Rapid Blaster
Pro Deco`,BlasterLightShort00:"Clash Blaster",BlasterLightShort01:`Clash Blaster
Neo`,BlasterLong00:"Range Blaster",BlasterMiddle00:"Blaster",BlasterMiddle01:"Custom Blaster",BlasterPrecision00:"S-BLAST '92",BlasterPrecision01:"S-BLAST '91",BlasterShort00:"Luna Blaster",BlasterShort01:`Luna Blaster
Neo`,BombCurling:"Curling Bomb",BombFizzy:"Fizzy Bomb",BombQuick:"Burst Bomb",BombRobot:"Autobomb",BombSplash:"Splat Bomb",BombSuction:"Suction Bomb",BombTako:"Torpedo",BombTakopter:"Octobomber",BrushHeavy00:"Painbrush",BrushHeavy01:`Painbrush
Nouveau`,BrushMini00:"Inkbrush",BrushMini01:`Inkbrush
Nouveau`,BrushNormal00:"Octobrush",BrushNormal01:`Octobrush
Nouveau`,Bukichi:"Sheldon",Buranko:"Fish Stick",ChargerKeeper00:"Goo Tuber",ChargerKeeper01:`Custom Goo
Tuber`,ChargerLight00:`Bamboozler
14 Mk I`,ChargerLong00:"E-liter 4K",ChargerLongScope00:"E-liter 4K Scope",ChargerNormal00:"Splat Charger",ChargerNormal01:`Z+F Splat
Charger`,ChargerNormalScope00:"Splatterscope",ChargerNormalScope01:`Z+F
Splatterscope`,ChargerPencil00:"Snipewriter 5H",ChargerPencil01:"Snipewriter 5B",ChargerQuick00:"Classic Squiffer",Chidori:"Reefslider",Daunii:"Spyke",Denchinamazu:"Zapfish",Dosukoi:"Cohock",Echizen:"Jelonzo",EnergyStand:"Tacticooler",Enperii:"Enperry",Ezokko:"Zekko",Ezokkorii:"Z+F",Forima:"Forge",Fuka:"Shiver",Fuka1:`The Cold-Blooded
Bandit - Shiver`,GachiAsari:"Power Clam",GachiHoko:"Rainmaker",GachiYagura:`Tower Control
Tower`,Grill:"Griller",Hakobiya:"Mothership",Hanagasa:"Jel La Fleur",Hebi:"Steel Eel",HeroShooter:"Hero Shot",Hokkorii:"Firefin",Hotakkusu:"Skalop",Hotaru:"Marie",Incleaner:"Squee-G",Ironic:"Zink",Iruka:"Flipper-Flopper",Jetpack:"Inkjet",Jimon:"Splash Mob",Judgekun:"Judd",Kanitank:"Crab Tank",Katapaddo:"Flyfish",Kinshake:"Goldie",KoJudgekun:"Li'l Judd",Kojake:"Smallfry",Koumori:"Drizzler",Kumasan:"Mr. Grizz",Kuraagesu:"Krak-On",Kyuinki:"Ink Vac",LineMarker:"Angle Shooter",MametsubuBukichi:`Shelly &
Donny`,ManeuverDual00:`Dualie
Squelchers`,ManeuverDual01:`Custom Dualie
Squelchers`,ManeuverGallon00:"Glooga Dualies",ManeuverNormal00:"Splat Dualies",ManeuverNormal01:`Enperry Splat
Dualies`,ManeuverShort00:"Dapple Dualies",ManeuverShort01:`Dapple Dualies
Nouveau`,ManeuverStepper00:`Dark Tetra
Dualies`,ManeuverStepper01:`Light Tetra
Dualies`,Mantaro:"Big Man",Mantaro1:`The Hype Manta
Storm - Big Man`,Mogura:"Maws",Mother:"Marigold",Nabebuta:"Slammin' Lid",Omura:"Gnarly Eddy",Paruko:"Harmony",PointSensor:"Point Sensor",PoisonMist:"Toxic Mist",Rokkenberugu:"Rockenberg",RollerCompact00:"Carbon Roller",RollerCompact01:`Carbon Roller
Deco`,RollerHeavy00:"Dynamo Roller",RollerHeavy01:`Gold Dynamo
Roller`,RollerHunter00:"Flingza Roller",RollerNormal00:"Splat Roller",RollerNormal01:`Krak-On Splat
Roller`,RollerWide00:"Big Swig Roller",RollerWide01:`Big Swig
Roller Express`,SaberLight00:`Splatana
Wiper`,SaberLight01:`Splatana
Wiper Deco`,SaberNormal00:`Splatana
Stamper`,SaberNormal01:`Neo Splatana
Stamper`,Shake:"Chum",ShelterCompact00:`Undercover
Brella`,ShelterCompact01:`Undercover
Sorella Brella`,ShelterNormal00:"Splat Brella",ShelterNormal01:"Sorella Brella",ShelterWide00:"Tenta Brella",ShelterWide01:`Tenta Sorella
Brella`,Shichirin:"Emberz",Shield:"Splash Wall",Shigureni:"Inkline",Shirei:"Captain",ShockSonar:"Wave Breaker",ShooterBlaze00:"Aerospray MG",ShooterBlaze01:"Aerospray RG",ShooterExpert00:`Splattershot
Pro`,ShooterExpert01:`Forge
Splattershot Pro`,ShooterFirst00:"Splattershot Jr.",ShooterFirst01:`Custom
Splattershot Jr.`,ShooterFlash00:"Squeezer",ShooterFlash01:"Foil Squeezer",ShooterGravity00:".52 Gal",ShooterHeavy00:".96 Gal",ShooterHeavy01:".96 Gal Deco",ShooterLong00:"Jet Squelcher",ShooterLong01:`Custom Jet
Squelcher`,ShooterNormal00:"Splattershot",ShooterNormal01:`Tentatek
Splattershot`,ShooterPrecision00:"Splash-o-matic",ShooterPrecision01:`Neo Splash-
o-matic`,ShooterQuickLong00:"Splattershot Nova",ShooterQuickLong01:`Annaki
Splattershot Nova`,ShooterQuickMiddle00:"N-ZAP '85",ShooterQuickMiddle01:"N-ZAP '89",ShooterShort00:"Sploosh-o-matic",ShooterShort01:`Neo Sploosh-
o-matic`,ShooterTripleMiddle00:"H-3 Nozzlenose",ShooterTripleMiddle01:"H-3 Nozzlenose D",ShooterTripleQuick00:"L-3 Nozzlenose",ShooterTripleQuick01:"L-3 Nozzlenose D",SlosherBathtub00:"Bloblobber",SlosherBathtub01:`Bloblobber
Deco`,SlosherDiffusion00:"Tri-Slosher",SlosherDiffusion01:`Tri-Slosher
Nouveau`,SlosherDouble00:"Dread Wringer",SlosherLauncher00:`Sloshing
Machine`,SlosherLauncher01:`Sloshing
Machine Neo`,SlosherStrong00:"Slosher",SlosherStrong01:"Slosher Deco",SlosherWashtub00:"Explosher",SpCastle:"Kraken Royale",SpChimney:`Splattercolor
Screen`,SpFirework:"Super Chump",SpGreatBarrier:"Big Bubbler",SpInkStorm:"Ink Storm",SpMegaphoneLaser51:"Killer Wail 5.1",SpMultiMissile:"Tenta Missiles",SpNiceBall:"Booyah Bomb",SpPogo:"Triple Splashdown",SpSuperHook:"Zipcaster",SpUltraShot:"Trizooka",SpUltraStamp:"Ultra Stamp",Spiky:"Murch",SpinnerDownpour00:`Ballpoint
Splatling`,SpinnerDownpour01:`Ballpoint Splatling
Nouveau`,SpinnerHyper00:"Hydra Splatling",SpinnerHyperShort00:`Heavy Edit
Splatling`,SpinnerQuick00:"Mini Splatling",SpinnerQuick01:`Zink Mini
Splatling`,SpinnerSerein00:"Nautilus 47",SpinnerStandard00:"Heavy Splatling",SpinnerStandard01:`Heavy Splatling
Deco`,Sprinkler:"Sprinkler",StampWave:`Amped
Octostamp`,StringerNormal00:"Tri-Stringer",StringerNormal01:`Inkline
Tri-Stringer`,StringerShort00:"REEF-LUX 450",StringerShort01:`REEF-LUX
450 Deco`,Sutakoraa:"Tentakook",Taihou:"Big Shot",TakoCommander:"Octocommander",TakoDozer:"Flooder",TakoHopper:"Octohopper",TakoMissile:"Octomissile",TakoPod:"Octopod",TakoSniper:"Octosniper",TakoStamp:"Octostamp",TakoStrike:"Octoballer",TakoTrooper:"Octotrooper",TakoZonesu:"Octoling",TakopodDEV:`Oversized
Octopod`,TakopperinGo:"Octozeppelin",Takopter:"Octocopter",TakowasaShogun:"DJ Octavio",Tamahiroi:"Snatcher",Tamaire:"Mudmouth",Tatakikensaki:"Toni Kensa",TateTakoTrooper:`Shielded
Octotrooper`,Tatsu:"Horrorboros",Teppan:"Scrapper",Tower:"Stinger",Trap:"Ink Mine",TripleTornado:"Triple Inkstrike",Utsuho:"Frye",Utsuho1:`The Eel
Deal - Frye`,Yako:"Takoroka",Yashiganisan:"Mr. Coco",Yokozuna:"Cohozuna"},"CommonMsg/MiniGame/MiniGameMapName":{CenterHole:"Lakefront Property",Cross:"X Marks the Garden",Rectangle:"Main Street",SShape:"River Drift",SmallSquare:"Box Seats",Square:"Square Squared",WDiamond:"Double Gemini",Zigzag:"Thunder Point"},"CommonMsg/MiniGame/MiniGameMotherGuidance":{Aori_Draw:"A tie! Now, THAT was a fun match.",Aori_Draw2:`I'm gonna beat you next time—
just you wait. And when you're done
waiting, come find me so we can play!`,Aori_Greet:`You want a Tableturf Battle against
me? Me?! You're gonna regret askin'.
It. Is. ON!`,Aori_Lose:"I...lost? Oooh, that is FRUSTRATING!",Aori_Lose2:`And a load of fun too. We oughta do
it again sometime!`,Aori_Sleeve:`Thanks for all the battles, Agent 3.[page break]Here—take these [color=0001]card sleeves[color=ffff]. Feel
free to name-drop who gave 'em to
ya. Swing back, and let's play some
more later, OK?`,Aori_Win:"Yep, I win. Never had a doubt.",Aori_Win2:`Oh, but you did sooo good, Agent 3!
There were both chills AND thrills. We
definitely gotta do it again sometime.`,Atarime_Draw:"Whaddaya know? A tie!",Atarime_Draw2:`Never did like ties. Not even when
Agents 1 and 2 got me one for
Grandpa's Day. We gotta settle this
with either me winning or you losing
the next time we face off.`,Atarime_Greet:`Eh? You wanna try me in a card
battle?[page break]I may look crusty now, but I was a
wiz at flippin' seashells as a kiddo.[group=0001 type=0000 params=0f 00 00 00]
...That's where you flip seashells
until someone wins. It's a real game,
dadgummit! Anyway, let's do this.`,Atarime_Lose:`Gah! You got me good. What a total
splatastrophe!`,Atarime_Lose2:`Maybe I oughta study the ol' rule
book a little more. This game's got
real substance to it!`,Atarime_Sleeve:`Agent 3, I just gotta say...I sure
have enjoyed battling it out with
you and these cards.[page break]And, well, I got you a little something
as a token of my appreciation. Here—
take these special [color=0001]card sleeves[color=ffff]![page break]If your card sleeves are sharp, your
Tableturf Battle game is sharp.
That's a Cuttlefish-certified rule
of the tabletop battlefield!`,Atarime_Win:`Yahoo! Cuttlefish wins! Guess this
ol' crustbucket can still muster up
some freshness on occasion, eh?`,Atarime_Win2:`Ah, but that wasn't easy. Keep up
the practice, and you'll be swabbin'
the deck with me in no time.`,GearShopClothes_Draw:"A tie, is it? I see. You are formidable.",GearShopClothes_Draw2:`We have not reached the end of our
battles, then. A decisive outcome
must be reached next time! IT MUST!`,GearShopClothes_Fsodr_Draw:"We tied?! How about that!",GearShopClothes_Fsodr_Draw2:`I guess it doesn't matter who wins
and who loses as long as we both had
fun. Right? Great battle!`,GearShopClothes_Fsodr_Greet:`Ah, Tableturf Battle. A favorite
jellyfish pastime.[page break]Do you want to play now?`,GearShopClothes_Fsodr_Lose:"Ah, well played. You got me that time.",GearShopClothes_Fsodr_Lose2:`I can't be mad about losing to a
skilled player like you. I'll have to
keep practicing for next time!`,GearShopClothes_Fsodr_Sleeve:`I have to say, you've showed me a lot
about playing this game at a high
level. I'm really grateful for it![page break]That's why I got you these special
[color=0001]card sleeves[color=ffff]. I hope you can make
use of them! And...play me again!`,GearShopClothes_Fsodr_Win:"Ah, victory! I'll take it.",GearShopClothes_Fsodr_Win2:`Practice makes perfect in Tableturf
Battle and life. Want to play again?`,GearShopClothes_Greet:`Ah, you are here. Er, that is to say,
I am here. For Tableturf Battle![page break]Before we begin...I assume you have
properly washed your hands? I will
not tolerate filthy smudges on my
most precious cards.`,GearShopClothes_Lose:`You have bested Jel La Fleur at
card-based combat. You really are
quite a strong opponent, you know.`,GearShopClothes_Lose2:`I will strengthen my own deck.
Once I do...you must return for
another battle! I REQUIRE IT!`,GearShopClothes_Sleeve:`We have battled many times now,
you and I.[page break]These engagements have been quite
satisfying. For that, I thank you.
Battling you has been my honor.[page break]BUT THE HONOR SHALL ALSO BE YOURS!
I now offer you a set of my own
stylish [color=0001]card sleeves[color=ffff] as a gift.[page break]For our many battles, and for your
patronage at Man-o'-Wardrobe...
Jel La Fleur thanks you.`,GearShopClothes_Win:`My deck is unrivaled in both style
and strength. May that serve as
a comfort in your pitiful defeat.`,GearShopClothes_Win2:`You will refashion your deck after
this, I assume? Good. Perhaps you
will defeat me next time...`,GearShopHead_Draw:`Whoa, a tie. Like...did we even play
a game if there's no winner or loser?`,GearShopHead_Draw2:`We gotta try again sometime. Just
to make sure this isn't, like, all a
dream or something...`,GearShopHead_Fsodr_Draw:"Oh, thank goodness. It's a draw...",GearShopHead_Fsodr_Draw2:`That way, um, nobody loses. Did...
did you have fun playing?`,GearShopHead_Fsodr_Greet:`Um...huh? You want to have a...
Tableturf Battle with me?[page break]Sure, I guess...but I don't think I'm
very good. So go easy [size=75%]on me,[size=100%] [size=50%]please...[size=100%]`,GearShopHead_Fsodr_Lose:"Yeah...I figured I'd lose...",GearShopHead_Fsodr_Lose2:`I had fun anyway though. Maybe, uh,
we could [size=75%]play again...[size=100%][size=50%]sometime...[size=100%]`,GearShopHead_Fsodr_Sleeve:`Um, anyway...[page break]Thanks for coming around to play
Tableturf Battle with me... I always
have a good time.[page break]In fact, uh...I got you these [color=0001]card
sleeves [color=ffff]to say...thanks, I guess.[page break]If I see you using them the next time
we play, it'd make me smile. Uhhh, on
[size=75%]the inside,[size=100%] [size=50%]I mean...[size=100%]`,GearShopHead_Fsodr_Win:"Wow...I won? Yay!",GearShopHead_Fsodr_Win2:"Oh, sorry. Um...thanks for the game.",GearShopHead_Greet:`Oh! Uh, hey. You want to BATTLE me?
That sounds, like, intense...[page break]I mean, I'm not any good, but I like
playing games, so... Let's do it?`,GearShopHead_Lose:"Yeah, you're pretty good at this.",GearShopHead_Lose2:`I'll totally try harder next time.
If...if you want, I mean.`,GearShopHead_Sleeve:`Hey, so, ummm... Thanks for, like,
always playing this game with me.[page break]I guess it'd be pretty cool if you
used these [color=0001]card sleeves [color=ffff]sometime.
I mean...if you want to.[page break]I'm kinda totally into this game
now, so maybe we can play again
sometime?`,GearShopHead_Win:"Whoa. I guess I won.",GearShopHead_Win2:`Sorry. I don't wanna harsh your
vibe or anything. Guess I got lucky.`,GearShopShoes_Draw:`We tied? That's the best! We're
equally matched! Gimme a full-force
friendship high fiiive!`,GearShopShoes_Draw2:`But I'll definitely win next time.
BOOYAHAHAHA!`,GearShopShoes_Fsodr_Draw:"Uhhh...what just happened?",GearShopShoes_Fsodr_Draw2:`Oh, we tied! That's like a win for
both of us. High-five!`,GearShopShoes_Fsodr_Greet:`Yo! What's uuup? Oh, we're doing
Tableturf Battle?[page break]Yeah, I can do that. You wanna battle
with me?`,GearShopShoes_Fsodr_Lose:"Whoa. Am I bad at this?",GearShopShoes_Fsodr_Lose2:`Haha! Sorry—that was probably too
easy for you.`,GearShopShoes_Fsodr_Sleeve:`Hey, we've had a lot of good battles,
haven't we?[page break]It's cool. I'm into it! Not as much as
shoes, but, like...yeah. It's fun.[page break]What was I saying? Oh, yeah! I got
you something. Some [color=0001]card sleeves[color=ffff].
They're like shoes for your cards!`,GearShopShoes_Fsodr_Win:"Whoa. Am I good at this?",GearShopShoes_Fsodr_Win2:`Well, call me up again if you want
a game. I'll play anytime, yo!`,GearShopShoes_Greet:`Hi, hiiiiii! I heard there was a
Tableturf Battle with my name
on it. I'm a thousand percent IN![page break]I hope you're ready to throw down,
because I am all about this Tableturf
life. Let's GOOO!`,GearShopShoes_Lose:`Oh my gosh, I lost. But you WON!
You're so good at this!`,GearShopShoes_Lose2:`We should play again, OK? Not just
so I can get a chance to win...but
also not NOT that! Heehee!`,GearShopShoes_Sleeve:`Oh! Before I forget...[page break]I just wanna thank you for always
choosing me for these super-great
Tableturf Battles![page break]I feel like we're learning from each
other and having fun too. So I got
you a little something... I hope you
can use these cool [color=0001]card sleeves[color=ffff]!`,GearShopShoes_Win:`Ooo, I won! Wheee, haha! What a
fun game this is!`,GearShopShoes_Win2:`Don't get me wrong—you were tough!
I definitely want a whole bunch of
rematches against you.`,GoodsShop_Draw:"Huh. Tie game.",GoodsShop_Draw2:`That was alright. I'd play you again
sometime, if you're into that.`,GoodsShop_Greet:`Tableturf Battle? Yeah, sure. I'm not
busy. I mean, I am, but...it's fine.`,GoodsShop_Lose:"...Oh. Guess I lost.",GoodsShop_Lose2:"Welp. Now I'm bored.",GoodsShop_Sleeve:`Oh, right. I should give you my
[color=0001]card sleeves[color=ffff], I guess...[page break]It's fine. They're all yours now, so
do whatever you want with 'em.
Store 'em, display 'em, set 'em
as your deck. Eat 'em. Whatever.[page break]Just promise you'll play me again
sometime, got it?`,GoodsShop_Win:"Hey, I won. Neat.",GoodsShop_Win2:`Good luck getting better at this.
Sorry—I don't know how to say that
without sounding mean.`,Guidance_00:`Are you ready to battle?[page break]...Oh, honey. If you thought you could
fool me, think again. You're not fresh
enough yet! Come back at [color=0001]level 4[color=ffff].[page break]Just go to the [color=0001]lobby[color=ffff], try a few [color=0001]Turf
War battles[color=ffff], and you'll be fresh as
can be in no time splat. Good luck!`,Guidance_01:`This is the Tableturf Battle Dojo,
sweetie! I'm so pleased to have you.[page break]You're not surprised to see me
running the show here, are you?
I may not be the youngest fish in
the school, but that doesn't mean
I'm not "with it."[page break]And it doesn't get any more "it" than
[color=0001]Tableturf Battle[color=ffff]! Simply EVERYONE is
playing it right now. Probably since
it's so easy to get a starter deck
these days...`,Guidance_02:`Oh dear. I was so excited to see you
that I forgot to check if you were
online. And you're not! Come back
and see me after you connect to
the [color=0001]internet [color=ffff]in the [color=0001]lobby[color=ffff], OK?`,Guidance_03:"Like this! You just got one!",Guidance_04:`That [color=0001]deck [color=ffff]I just gave you contains
15 cards. That's all you need to play
Tableturf Battle with anyone![page break]Now, I'm sure you're itching to get
right into a battle, but I'm afraid I
must insist that you read the manual
first. It's long, but it's filled with all
kinds of wonderful rules. Take a look!`,Guidance_05:`All done with your homework? Great!
Don't worry if you don't understand
every single thing right now. It's a
complicated game! And experience is
the best teacher.[page break]Come back anytime you want to
give it a try, OK?`,Hotaru_Draw:`Aw, a tie. At least a loss would have
offered some closure!`,Hotaru_Draw2:`I guess we're pretty evenly matched.
We should definitely play again so I
don't wake up in a cold sweat thinking
about this tie...`,Hotaru_Greet:`Oh, you want to play that card-battle
game with me? Sure, why not?[page break]Let's dive right in.`,Hotaru_Lose:"Oof. Guess I lost...",Hotaru_Lose2:`That was a good game though.
I have to admit, I really started
to care!`,Hotaru_Sleeve:`Thanks for getting me into this
game, Agent 3. Turns out I love it![page break]I actually got you a little something
as a thank-you. Just some new
Squid Sisters merch...a set of
custom [color=0001]card sleeves[color=ffff]![page break]I hope we can play again soon.`,Hotaru_Win:`Good game![group=0001 type=0000 params=0f 00 00 00] You weren't expecting me
to taunt you, were you?`,Hotaru_Win2:`I mean, I would, but there's too much
luck involved. Let's play again later
and see how it shakes out.`,IdolA_Draw:"Oh, a tie. A TIE?!",IdolA_Draw2:`Not just anyone can go fin-to-fin
with me, so consider this a victory.
And keep practicing—because you
know I will be!`,IdolA_Greet:`Oh, do I have a worthy challenger?
You seem like you might be skilled...[page break]Let's see what you've got! Pedal to
the megalodon!`,IdolA_Lose:`ARRRGH! I lost?! You really are
good at this...`,IdolA_Lose2:`You have to grant me the honor of
a rematch. It doesn't have to be now,
but PLEASE! Let me redeem myself!`,IdolA_Sleeve:`One more thing, Agent 3. You've been
a worthy and satisfying opponent to
battle...again and again.[page break]I offer my thanks on behalf of
Deep Cut...and a little something as
a token of my appreciation. I hope
you can put these [color=0001]card sleeves[color=ffff]
to good use.[page break]Until next time!`,IdolA_Win:"Yesss! I win!",IdolA_Win2:`...Ahem. Of course I won. But you
put up a good fight. Rematch soon?`,IdolB_Draw:`Whoa, a tie! You're better than
I thought.`,IdolB_Draw2:`But I know all your tricks now. The
rematch is gonna be aaaaaall mine!`,IdolB_Greet:`You want a Tableturf Battle with
ME?! You've got guts.[page break]I'm about to show you why they
call me the Tableturf Queen of
the Greenroom. No holding back!`,IdolB_Lose:`WHAT?! That wasn't supposed to
happen...`,IdolB_Lose2:`Or maybe it was. You are Agent 3,
after all. Oh well. Next time you're
going DOWN!`,IdolB_Sleeve:`Y'know, I gotta thank you for all
these sizzlin' HOT games. They've
been a blast![page break]Here—these [color=0001]card sleeves[color=ffff] are for you.
You totally earned 'em.`,IdolB_Win:`See, see, see? You never stood
a chance!`,IdolB_Win2:`Wait'll I tell Shiver and Big Man about
this. They're gonna laugh so hard.`,IdolC_Draw:"Ay? [group=0004 type=0005 params=](A tie? Hey, I did pretty good!)",IdolC_Draw2:"Ay! [group=0004 type=0005 params=](We'll settle this next time, OK.)",IdolC_Greet:`Ay! [group=0004 type=0005 params=](You sure you want to have
a Tableturf Battle with me?)[page break]Ay! [group=0004 type=0005 params=](OK! Let's see how this goes...)`,IdolC_Lose:"Ay... [group=0004 type=0005 params=](Well, I tried...)",IdolC_Lose2:`Ay! [group=0004 type=0005 params=](I'm gonna win the next one
though. You'll see.)`,IdolC_Sleeve:`Ay! [group=0004 type=0005 params=](Thanks for all the games. I really
feel like I've gotten better at this!)[page break]Ay! [group=0004 type=0005 params=](Here—these [color=0001]card sleeves[color=ffff] are for
you. I hope you like them. I sure do!)[page break]Ay! [group=0004 type=0005 params=](Anyway, I'm sure you're busy.
See ya next time!)`,IdolC_Win:"Ay! [group=0004 type=0005 params=](Wow! I won!)",IdolC_Win2:`Ay! [group=0004 type=0005 params=](I mean...of course I won. And if
you're not careful, I'll do it again.)`,JudgeJr_Draw:`Mew... (Tableturf Battle creates
curious encounters. Sometimes they
end in neither victory nor defeat...)`,JudgeJr_Draw2:`Mew! (As long as we both understand
that this conflict was fruitless and
held no honor...then I guess it's OK
to call it a draw!)`,JudgeJr_Greet:`Mew! ([color=0001]Tableturf Battle[color=ffff] is no game.
On this table, victory is everything.
The weak have no place here!)[page break]Mew? (Have you fully grasped the
rules? Is your [color=0001]deck [color=ffff]prepared? Then
let's put your skills to the test...)`,JudgeJr_Lose:`Mew... (Ah. Defeat has a bitter
taste...but resentment serves as
shackles for the weak.)`,JudgeJr_Lose2:`Mew. (Those who win are not ensured
eternal victory. Better keep your own
carelessness in check...or perhaps
you enjoy a bitter taste?)`,JudgeJr_Sleeve:`Mew. (The use of my [color=0001]card sleeves [color=ffff]is
reserved for those who have gained
ample experience through battle...
and you have now crossed that
threshold.)[page break]Mew! (Come, then, and accept your
well-earned card sleeves! Apply them
to your deck...and flaunt them well.)`,JudgeJr_Win:`Mew. (Ahhh. Victory is sweet, as
always, but self-satisfaction is a
fool's trap. I will not wallow.)`,JudgeJr_Win2:`Mew! (On the other hand, there is
much to learn from defeat! So much
to reflect upon, so many skills to
improve... I envy you. Truly.)`,Judge_Draw:`Meow... (A tie? So we're evenly
matched. I underestimated you!)`,Judge_Draw2:`Meow! (So! Not a win, but not a loss
either. Purrrfectly respectable.
And a good learning experience!)`,Judge_Greet:`Meow. ([color=0001]Tableturf Battle[color=ffff] is a card
game where you need to ink more
spaces than your opponent to win.)[page break]Meow! (However, there's more to
winning than just the game in front
of you. You'll need to gather enough
cards to build a strong [color=0001]deck[color=ffff]!)[page break]Meow? (But that's getting ahead of
things... Why don't we play a match?)`,Judge_Lose:`Meow... (Grrr... Losing is so
furrrustrating!)`,Judge_Lose2:`Meow! (You definitely have a talent
for this. But don't take my meow for
it—get out there, and show everyone
else what you can do!)`,Judge_Sleeve:`Meow? (You know about [color=0001]card sleeves[color=ffff],
right? They let you change the
designs on the backs of your
Tableturf Battle cards.)[page break]Meow. (Now! Since you seem to have
a handle on the game, I'd say you've
earned some mew card sleeves.)[page break]Meow. (Put the set you like on your
favorite deck to show off to your
opponents and make 'em jealous.
Go on—try out some card sleeves!)`,Judge_Win:`Meow! (Well, winning isn't everything.
Sometimes it's fun just to make the
fur fly!)`,Judge_Win2:`Meow! (Hopefully you picked up a few
tricks for your next match!)`,Mother_Draw:`Ooo, ties are so frustrating, aren't
they? Knowing that it would've taken
just a liiittle bit more to win...`,Mother_Draw2:`But it's not about winning and losing.
The most important part of Tableturf
Battle is to have fun!`,Mother_Greet:`Oh my! You're going to play a round
with little old me?! What a thrill![page break]I should warn you, dear...I won't be
holding back. Are you ready?`,Mother_Lose:`I lost? But that's unbelievabl...y sad.
Yes, that's it. So sad! Boohoo...`,Mother_Lose2:`You're quite the little card battler,
aren't you? I'll have to practice if
I want to keep up...`,Mother_Sleeve:`When we first met, you were like a
wriggling, itty-bitty baby...but look
at you now! You've come so far![page break]I suppose you've earned a little treat.
Here, dearie—take my [color=0001]card sleeves[color=ffff]![page break]Let a challenger see those sleeves
in your hand, and you'll have 'em
shaking in their booties! Hee![page break]Enjoy your future battles! And keep
on winning, y'hear?`,Mother_Win:`My goodness! I won? I WON!
In your face, dearie! Woo-hoo!`,Mother_Win2:`Oops! Let myself get carried away.
Pay me no mind. After all, you played
a good game just now...so keep that
weak chin of yours up! Hee!`,NPCBattle_00:"Welcome, welcome!",NPCBattle_01:`Are you here for— OH! Oh no.
You don't have a single deck![page break]That simply won't DO, dearie.
Here's what you're going to do now.
Open up your menu. Go to Status and
look for Tableturf Battle. Build a deck
there, and then come right back!`,NPCBattle_02:"Who will you battle?",NPCBattle_03:`Oh, I'm so sorry, but it doesn't look
like they're available right now. Why
don't you try again another time?`,NPCBattle_04:`Oh, I'm so sorry, but you can't play
against a total stranger. Why don't
you get to know them a little bit,
and then try inviting them again?`,Vendor_Draw:"I guess that's a tie...",Vendor_Draw2:`Sometimes that's just how things go,
eh, chum?`,Vendor_Fsodr_Draw:"Wot's this? A draw?! Nil-nil?",Vendor_Fsodr_Draw2:`I'll take it. And you ought to as well,
mate. Not like either of us lost, so
let's call it win-win.`,Vendor_Fsodr_Greet:`S'appening, mate?[page break]You fancy a battle wif me? Awright.
But you should know I'm rubbish
at this.`,Vendor_Fsodr_Lose:"Oi. I lost. As expected.",Vendor_Fsodr_Lose2:`Not sure I'm good enough to give
you a run for your money, love.`,Vendor_Fsodr_Sleeve:`I see wot you're doin wif this game,
mate. Really goin' for the gold,
aren't ya? Much respect.[page break]Matter of fact, I've got a li'l trifle
for ya. Here. Take these special
[color=0001]card sleeves [color=ffff]off me hands.[page break]I saw you eyein' 'em the whole time
we played, didn't I? Ah, I'm just
pulling your leg. Cheerio, love.`,Vendor_Fsodr_Win:"Crikey, I won.",Vendor_Fsodr_Win2:`...You know wot? I think I got lucky.
You'll take the next one, mate.`,Vendor_Greet:`Oi, chum! Bet you don't have what
it takes to beat me in a Tableturf
Battle. Wanna find out?`,Vendor_Lose:"I lost?",Vendor_Lose2:`Not bad, chum. You've got some
surprises up your sleeve. Very cool.`,Vendor_Sleeve:`You did real good. Like some kind
of Tableturf Battle genius in the
making.[page break]Hey, do you want these [color=0001]card sleeves[color=ffff]?
I think you'll get a lot more use out
of 'em than I will.[page break]Oh, and thanks for the game, chum!`,Vendor_Win:"See? I win.",Vendor_Win2:`Hey, we've all got our strengths,
right? Let's play again sometime.`,WeaponShop_Draw:`I can't believe it—we tied!
What an unusual result.`,WeaponShop_Draw2:`I think, by definition, this makes us
rivals. Well played, rival!`,WeaponShop_Fsodr_Draw:"Awww, so close...",WeaponShop_Fsodr_Draw2:"You're as good as Sheldon!",WeaponShop_Fsodr_Greet:`Hi, hi! Are we gonna Tableturf
Battle? Yaaaaaay![page break]I'm pretty good, you know. I even
beat Sheldon one or two times!`,WeaponShop_Fsodr_Lose:`Awww, I lost and I'm sad about it!
Boooo.`,WeaponShop_Fsodr_Lose2:`But I'm not gonna lose next time.
I'll get better! So I can win! Yeaaah!`,WeaponShop_Fsodr_Sleeve:`Ummm, I wanted to say...thanks for
playing with me! I really mean it![page break]It made me love Tableturf Battles
even more.[page break]Here are some [color=0001]card sleeves[color=ffff]. Play me
again sometime, OK?`,WeaponShop_Fsodr_Win:"Yaaay! I won! Isn't that great?!",WeaponShop_Fsodr_Win2:`Oh...sorry. Sheldon told me it's bad to
get too excited if I win. He called it...
um...gloating.`,WeaponShop_Greet:`So, you know I talk a big game about
weapons, and you're wondering if I
can back it up, right?[page break]Consider what's about to happen a
lesson! I'll be using my carefully
curated deck that's absolutely
STACKED with some of the most
formidable cards in existence!`,WeaponShop_Lose:`No! How could this happen?
I've got to do more research...`,WeaponShop_Lose2:`Rest assured, I'll use the data from
this matchup to provide a tougher
challenge next time. Back to my
research chamber!`,WeaponShop_Sleeve:`Thank you for being such a worthy
Tableturf Battle competitor.[page break]As a small token of my appreciation,
I got you some special [color=0001]card sleeves[color=ffff]![page break]I look forward to many more well-
fought battles with you in the future.`,WeaponShop_Win:"Just as I predicted—I win!",WeaponShop_Win2:`Sorry—I don't get to battle much.
This is all I have!`},"CommonMsg/Mission/TalkWorldAtarimeDried":{Bored_00:`[group=0004 type=0005 params=][color=0000](Oof, my achin' back... At least, I think that's
my back...)[color=ffff]`,Bored_01:"[group=0004 type=0005 params=][color=0000](What I wouldn't give for a fresh crabby cake now...)[color=ffff]",Bored_02:`[group=0004 type=0005 params=][color=0000](Yesterday's lunch was mighty tasty. Maybe I shoulda
brushed my teeth a bit more carefully...)[color=ffff]`,Bored_03:`[group=0004 type=0005 params=][color=0000](Still not sure how they sun-dried me while
I was underground...)[color=ffff]`,Bored_04:`How can I help you, Agent 3? Need another
pearl of wisdom?`,Bored_05:`[group=0004 type=0005 params=]... ... ... GYAH! I wasn't sleeping. That was just
tactical eyeball moistening, y'see?`,Normal_00:`How's that Hero Suit treatin' you? You ever get
around to washin' it?`,Normal_01:`Heh heh... Still can't believe ol' Octavio turned out
to be not so bad. That rascal!`,Normal_02:`It's nice that you had your li'l buddy with you
throughout all...that.`,Normal_03:`Whaddaya like to eat these days, kiddo? Food?
Are kids still eatin' food?`,Normal_04:`This ain't so bad. But I miss my tropical shirt!
Think I can get one in XXD? Extra-extra dehydrated?`,Normal_05:`That look in your eye... It's still the look
I was lookin' for. The look never lies!`,Normal_06:`You know you can reconfigurate the doodads and
whatnots on your Hero Gear, right? Look at the menu!`,Normal_07:`Didja know that upgradin' your gear can give Smallfry an
upgrade too? And doesn't your li'l buddy deserve it?!`,Progress_00:`You cleared more kettles than a server at the world's
biggest teahouse! That's ALL of 'em!`},"CommonMsg/Narration/Narration_Tips":{Tips_01:`Meow. (Your style is as fresh as an old litter box.
Go play some [color=0001]Turf War[color=ffff] battles in the battle pot.)[page break]Meow! (Oh, and once you've [color=0001]leveled up[color=ffff] a bit, don't
furrrget to visit [color=0001]Ammo Knights[color=ffff]!)`,Tips_02:`Meow. (Make sure you visit [color=0001]Ammo Knights[color=ffff] after
you level up. They might have [color=0001]new stuff[color=ffff] in stock.)[page break]Meow! (Leveling up earns you [color=0001]Sheldon Licenses[color=ffff],
which will let you buy even MORE weapons!)`,Tips_03:`Meow? (Have you met [color=0001]Murch[color=ffff] in the square yet?
That guy is pawsitively obsessed with [color=0001]gear[color=ffff]!)`,Tips_04:`Meow! (Purrress [group=0003 type=0003 params=00 00 80 3f 00 00 00 00] to reset the camera
to its [color=0001]default pawsition[color=ffff].)[page break]Meow. (If you look straight ahead as you move,
it'll be easier to [color=0001]ink turf[color=ffff] and [color=0001]splat opponents[color=ffff].)[page break]Meow! (Why not practice it now? Brrreak a
target while keeping it in sight with [group=0003 type=0003 params=00 00 80 3f 00 00 00 00]!)`,Tips_04_Trial:`Time for target practice! Take aim and shoot with [group=0003 type=000c params=29 5c 0f 40 05 00 00 00].
You can [color=0001]reset the camera [color=ffff]with [group=0003 type=0003 params=29 5c 0f 40 05 00 00 00].`,Tips_05:`Meow! (You can purrress Up or Down on [group=0003 type=0004 params=00 00 80 3f 00 00 00 00]
to send [color=0001]signals [color=ffff]to your teammates!)[page break]Meow. (Press Down on [group=0003 type=0004 params=00 00 80 3f 00 00 00 00] to send a "[color=0001]Booyah![color=ffff]"
Use this when you're fired up about something.)[page break]Meow! (Press Up on [group=0003 type=0004 params=00 00 80 3f 00 00 00 00] to send a "[color=0001]This way![color=ffff]"
Use this to call teammates to your pawsition!)[page break]Meow... (Get splatted, and Up on [group=0003 type=0004 params=00 00 80 3f 00 00 00 00] changes to
"[color=0001]Ouch...[color=ffff]" so you can let your teammates know.)[page break]Meow! (Sending signals may not guarantee
victory, but it'll impurrrove your teamwork!)[page break]Meow. (Take a minute and send out a few
signals to see how you like them.)`,Tips_05_Trial:`Send out three [color=0001]signals [color=ffff]using [group=0003 type=0004 params=29 5c 0f 40 05 00 00 00]. Press [group=0003 type=000e params=29 5c 0f 40 05 00 00 00] for "This way!"
or press [group=0003 type=0028 params=29 5c 0f 40 05 00 00 00] for "Booyah!"`,Tips_06:`Meow. (Swimming around fast in ink will make
little [color=0001]ripples [color=ffff]that your opponents can see.)[page break]Meow! (Tilt [group=0003 type=0007 params=cd cc 4c 3f 00 00 00 00] gently to swim slowly and
[color=0001]sneak up on opponents without splashing[color=ffff]!)[page break]Meow! (There is a way to swim fast and not splash
though: wear gear with the [color=0001]Ninja Squid[color=ffff] ability!)[page break]Meow! (You can never be too sneaky!)`,Tips_06_Trial:`Sneak up without making a [color=0001]splash[color=ffff], and break the targets!
Gently tilt [group=0003 type=0007 params=5c 8f c2 3f 05 00 00 00] to swim without splashing.`,Tips_07:`Meow. (Keep an eye on the icons at the top of
the screen to see which team is ahead.)[page break]Meow! (Be careful if your team's numbers are low,
but be bold if your opponents are on the ropes!)`,Tips_08:`Meow! (In the heat of battle, it's impurrrtant to
know when you're dealing damage to opponents!)[page break]Meow. (So listen furrr the satisfying "pop"
sound when you're roughing someone up.)[page break]Meow! (You can hear how this works when trying
out weapons too, so give it a go!)`,Tips_08_Trial:`Shoot the targets, and try to notice the [color=0001]feedback[color=ffff]!
A solid hit will make a nice "pop" sound.`,Tips_09:`Meow? (Have you been to any of the [color=0001]shops [color=ffff]yet?
Some new [color=0001]gear [color=ffff]could really help you out in battle!)[page break]Meow! (There are three kinds of gear—[color=0001]headgear[color=ffff],
[color=0001]clothing[color=ffff], and [color=0001]shoes[color=ffff]. Make sure to try out all three!)`,Tips_100:`Meow? (Have you tried the [color=0001]Shell-Out Machine [color=ffff]in
the lobby? It has some purrretty good prizes!)[page break]Meow! (Of course, it costs cash to play, but
once a day you can get a discount!)[page break]Meow... (I've heard you can win a [color=0001]sparkling
capsule [color=ffff]there! Wish I had that kind of luck...)`,Tips_101:`Meow? (Been to [color=0001]Hotlantis[color=ffff] yet? They sell all
kinds of things for decorating your locker.)[page break]Meow! (Their stock changes every day though. If you
see something you like, you'd better snap it up!)[page break]Meow. (Pro tip: use [group=0003 type=000b params=00 00 80 3f 00 00 00 00] to get a better look at a
decoration so you know if it'll fit your locker's style!)`,Tips_102:`Meow! ([color=0001]Super Chump [color=ffff]is a special weapon that
litters the field with exploding [color=0001]decoys[color=ffff]. Nasty!)[page break]Meow. (The decoys look like Super Jump landing
points. What a cat...astrophe for campers!)[page break]Meow. (Now, if someone uses it on you, don't
fret. You can destroy decoys if you act fast.)[page break]Meow? (Why not give Super Chump a try
for yourself?)`,Tips_102_Trial:`Try out the [color=0001]Super Chump[color=ffff] special for yourself! Activate it by
pressing [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00], then use [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to launch decoys.`,Tips_103:`Meow! ([color=0001]Kraken Royale[color=ffff] is a special weapon that
turns you into a huge squid or octopus!)[page break]Meow? (And what does that do for you? Well,
for one, it allows you to repel enemy ink.)[page break]Meow! (That means you can ink a huge path
into enemy territory, unbothered by attacks!)[page break]Meow! (And there's a charge attack! Hold down
[group=0003 type=000c params=00 00 80 3f 00 00 00 00] and release to burst forward powerfully.)[page break]Meow. (You can't submerge while transformed,
but you can jump with [group=0003 type=0001 params=00 00 80 3f 00 00 00 00]. It's a fair trade.)[page break]Meow. (Attacks will slow you down, so pick the
right moment to make your big bloop forward.)[page break]Meow! (I hope you give the Kraken Royale
a try!)`,Tips_103_Trial:`Break targets as the [color=0001]Kraken Royale[color=ffff]! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to transform,
jump with [group=0003 type=0001 params=29 5c 0f 40 05 00 00 00], and hold [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] before releasing to charge.`,Tips_104:`Meow! (The [color=0001]Triple Splashdown [color=ffff]allows you to
charge and deploy a three-fisted slam attack!)[page break]Meow. (You don't even need three fists! One of
yours will combine with two summoned fists.)[page break]Meow. (If you're on the receiving end, try
attacking while this special is still charging.)[page break]Meow? (Why not give it a try? Take the
Triple Splashdown for a test drive!)`,Tips_104_Trial:`Break targets with the [color=0001]Triple Splashdown[color=ffff]! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to float up,
then slam to the ground with the power of three fists!`,Tips_105:`Meow! (The [color=0001]Splattercolor Screen [color=ffff]blurs the
line between offense and defense!)[page break]Meow. (Press [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to summon a large, ethereal
sheet that slowly advances.)[page break]Meow! (Enemies, beware! Touching the screen
hurts, AND you will briefly lose color perception!)[page break]Meow. (Just remember—the sheet is not a
shield. Shoot through it or sneak around it!)[page break]Meow! (Set up a private screening for the
Splattercolor Screen today! Try it out, I mean.)`,Tips_105_Trial:`Test out the [color=0001]Splattercolor Screen[color=ffff]! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to activate, then
place it with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00]. Watch the weird screen advance slowly!`,Tips_11:`Meow! (Press [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to use your [color=0001]sub weapon[color=ffff]!)[page break]Meow. (They're great for helping your team push,
or for inking spots normal weapons can't reach.)[page break]Meow... (Sub weapons [color=0001]use more ink[color=ffff] than main
weapons, though, so watch your ink tank...)[page break]Meow. (Go to the [group=0003 type=0005 params=00 00 80 3f 00 00 00 00]Equip menu, select a weapon,
and hit [group=0003 type=000b params=00 00 80 3f 00 00 00 00] twice to learn more about sub weapons.)[page break]Meow! (Why don't you take a few sub weapons for
a spin at the test range?)`,Tips_11_Trial:`Break the target using your [color=0001]sub weapon[color=ffff]! You can throw your
bomb sub weapon by pressing [group=0003 type=000a params=29 5c 0f 40 05 00 00 00].`,Tips_12:`Meow! (The [color=0001]Fresh Meter[color=ffff] in the match menu
measures your purrrformance!)[page break]Meow. (When you win, the meter goes up.
But if you lose a Turf War battle, it drops.)[page break]Meow. (The meter also changes the color of the
flag [color=0001]by each weapon[color=ffff] in the [group=0003 type=0005 params=00 00 80 3f 00 00 00 00]Equip menu.)[page break]Meow! (Use the Fresh Meter to see your personal
records for each weapon, then try to top them!)`,Tips_13:`Meow! (Ever run out of ink at a critical moment?
Press [group=0003 type=000b params=00 00 80 3f 00 00 00 00] to dive into your ink and refill!)[page break]Meow. (Pro tip: [color=0001]swimming [color=ffff]in your team's ink is
the [color=0001]fastest way to refill your ink tank[color=ffff]!)[page break]Meow? (Why not put that fast ink refilling to
work with some target practice?)`,Tips_13_Trial:`Break targets with bombs! You can throw them with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00]. Also,
holding [group=0003 type=000b params=29 5c 0f 40 05 00 00 00] to [color=0001]submerge [color=ffff]in ink will [color=0001]refill your ink tank faster[color=ffff].`,Tips_14:`Meow. (When you're not busy in a battle, press [group=0003 type=0002 params=00 00 80 3f 00 00 00 00]
to open up the [color=0001]main menu[color=ffff].)[page break]Meow... (There's an [color=0001]Options[color=ffff] tab in there that'll let
you adjust things to suit your style.)[page break]Meow. (For instance, if the camera moves too fast or
ink colors are hard to tell apart, you can change it.)[page break]Meow! (Speaking of the camera, you can even have
diffurrrent settings for TV and handheld modes!)`,Tips_15:`Meow! (Press [group=0003 type=0002 params=00 00 80 3f 00 00 00 00] during battle to open
the [color=0001]Turf Map[color=ffff]—it's supurrr useful!)[page break]Meow. (One glance, and you'll see where each team
has inked. Then you can plan your next move!)[page break]Meow! (Don't believe me? Try opening the Turf
Map with [group=0003 type=0002 params=00 00 80 3f 00 00 00 00] now!)`,Tips_15_Trial:"Find a target by opening the [color=0001]Turf Map [color=ffff]with [group=0003 type=0002 params=29 5c 0f 40 05 00 00 00], then go break it!",Tips_16:`Meow! (To [color=0001]Super Jump[color=ffff] to a teammate, open the
Turf Map, select them with [group=0003 type=0004 params=00 00 80 3f 00 00 00 00], and press [group=0003 type=0000 params=00 00 80 3f 00 00 00 00].)[page break]Meow. (Super Jumping is super good at getting you
back to the front lines after being splatted.)[page break]Meow. (You can also tilt your controller to select
which teammate you want to Super Jump to.)[page break]Meow! (And! If there's a Squid Beakon on the map,
you can Super Jump to that too. See for yourself!)`,Tips_16_Trial:`[color=0001]Super Jump[color=ffff] your way to the target, then break it! Open the Turf Map
with [group=0003 type=0002 params=29 5c 0f 40 05 00 00 00], choose the [color=0001]Squid Beakon[color=ffff], then press [group=0003 type=0000 params=29 5c 0f 40 05 00 00 00] to Super Jump.`,Tips_17:`Meow... ([color=0001]Super Jumping[color=ffff] is a REALLY useful way
to get around, but it can also be a bit risky...)[page break]Meow! (That's because [color=0001]opponents can see where
Super Jumps are gonna land[color=ffff]!)[page break]Meow! (So don't furrrget to check the [color=0001]Turf Map[color=ffff]
for ambushes before you take off!)`,Tips_18:`Meow. (Each piece of gear has certain abilities
that can help you in battle.)[page break]Meow! (Press [group=0003 type=0002 params=00 00 80 3f 00 00 00 00] to open the main menu, and select
[color=0001]Abilities [color=ffff]within [color=0001]Status[color=ffff] to check 'em all out!)`,Tips_19:`Meow! (Press [group=0003 type=0005 params=00 00 80 3f 00 00 00 00] to open the [color=0001]Equip [color=ffff]menu.)[page break]Meow. (The Equip menu lets you change weapons
and gear as well as adjust your control settings.)[page break]Meow. (You'll be changing weapons and gear A LOT,
so remember: purrress [group=0003 type=0005 params=00 00 80 3f 00 00 00 00] for the Equip menu!)`,Tips_22:`Meow! (Use the same gear often enough, and it'll
level up and gain cool [color=0001]secondary abilities[color=ffff]!)[page break]Meow? (The effects aren't as strong as primary
abilities, but more is always better, right?)[page break]Meow... (You won't know what kinds of abilities
your gear will get until it levels up though...)[page break]Meow! (Which just means leveling up diffurrrent gear
will give diffurrrent abilities for every situation!)`,Tips_23:`Meow! (Do you have any [color=0001]ability chunks[color=ffff] yet?)[page break]Meow. (When you scrub gear or reset abilities,
the original abilities turn into ability chunks.)[page break]Meow! (Ability chunks don't do a lot on their own,
but combining them lets you add an ability to gear!)[page break]Meow! (Have you talked to [color=0001]Murch[color=ffff]? He knows all
about ability chunks. He's over in the square.)`,Tips_24:`Meow. (Equipping several of the same type of ability
will cause each of that ability to get less effective.)[page break]Meow. (If you really want to get to see what you're
capable of, you'll need to balance out your abilities.)`,Tips_25:`Meow? (Ever have trouble aiming at opponents
or changing your direction purrrcisely?)[page break]Meow! (Tilt [group=0003 type=0008 params=cd cc 4c 3f 00 00 00 00] to change direction, or tilt the
controller to aim with extra purrrcision!)[page break]Meow... (I happen to know of a few targets you
can break if you want some purrractice...)`,Tips_25_Trial:`Time for target practice! Aim by moving [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] or tilting
your controller.`,Tips_26:`Meow. (Kid form makes you an easy target, so try to
stay hidden in your ink when you're not attacking.)[page break]Meow! (Not only will it be harder for opponents to
spot you, but you'll also refill your ink tank faster!)`,Tips_27:`Meow! (You know you [color=0001]can't swim[color=ffff], right?
And that your ink dissolves in water?!)[page break]Meow! (Kinda strange, huh? Just be careful,
and watch your step around water, ya hear!)`,Tips_28:`Meow? (You ARE remembering to check the [color=0001]Turf Map[color=ffff]
with [group=0003 type=0002 params=00 00 80 3f 00 00 00 00], right?)[page break]Meow... (Don't just stand there after you get
splatted. Use the Turf Map to plan your next move.)[page break]Meow! (Try to find an area with fewer bad guys,
or Super Jump to a teammate and help 'em out!)`,Tips_29:`Meow! (If you hold [group=0003 type=000b params=00 00 80 3f 00 00 00 00] to go into swim form, you
can slip through chain-link fences and grates!)[page break]Meow. (Even better, your main weapon's attacks
will pass through too!)[page break]Meow... (I'm sure there's a grate or two around
here you can practice swimming through...)`,Tips_29_Trial:"Slip through a grate by holding [group=0003 type=000b params=29 5c 0f 40 05 00 00 00], then break the target!",Tips_30:`Meow. (When you get splatted, you lose some of
your [color=0001]special gauge[color=ffff].) [page break]Meow! (And the more special gauge you have, the
more you'll lose!)[page break]Meow... (That means you should always be using your
specials, but you still gotta be smart about it...)[page break]Meow! (Take a sec and get to know each special
and a strategy for when to use 'em. Then USE 'em!)`,Tips_31:`Meow! (Press [group=0003 type=000b params=00 00 80 3f 00 00 00 00] to transform and swim up
inked walls. Then press [group=0003 type=0001 params=00 00 80 3f 00 00 00 00] to climb even faster!)`,Tips_32:`Mew! (In [color=0001]Splat Zones[color=ffff], the team that keeps
control of the Splat Zones in the stage wins!)[page break]Meow. (You'll need to plan out the best way to
keep the Splat Zones free of enemy ink.)[page break]Meow! (Don't try to be a hero. Coordinate to
[color=0001]attack together as a four-purrrson team[color=ffff]!)`,Tips_33:`Meow. (In [color=0001]Tower Control[color=ffff], the team that rides
the tower into the opponent's goal wins.)[page break]Meow! (You can make the tower's path safer by
splatting any oppawnents in its way!)`,Tips_34:`Meow! (In [color=0001]Rainmaker[color=ffff], the team that carries the
Rainmaker to the other team's goal wins.)[page break]Meow. (Bring the Rainmaker to the [color=0001]checkpoint[color=ffff]. Then
break the checkpoint, and the next stop is the goal.)[page break]Meow! (The Rainmaker is strong, but not at close
range. You'll need teamwork to clear the way!)`,Tips_35:`Meow. (The [color=0001]Splat Bomb[color=ffff] is the most basic kind of
sub weapon.)[page break]Meow. (The explosion timer starts when it lands.
You can make it explode faster by rolling it.)[page break]Meow! (Try throwing some Splat Bombs, and see
how many targets you can break at once!)`,Tips_35_Trial:`Break the targets using a [color=0001]Splat Bomb[color=ffff]! Throw one with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00],
and it will explode shortly after it lands.`,Tips_36:`Meow! ([color=0001]Suction Bombs[color=ffff] are bombs that attach to
the ground or to walls.)[page break]Meow. (They take slightly longer to explode than
Splat Bombs, but the blast radius is a bit larger.)[page break]Meow! (You should try breaking a few targets with
Suction Bombs. It's purrretty fun!)`,Tips_36_Trial:`Break the targets with a [color=0001]Suction Bomb[color=ffff]! Throw one with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00],
and it will stick to the wall or ground.`,Tips_37:`Meow. ([color=0001]Burst Bombs[color=ffff] detonate on impact.)[page break]Meow! (They aren't very strong, but they don't use
much ink, so you can throw two back to back!)[page break]Meow. (But don't take my worrrd for it. Go bust
a target with some Burst Bombs!)`,Tips_37_Trial:`Break the target using [color=0001]Burst Bombs[color=ffff]! Throw one with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00],
and it will explode as soon as it hits the ground or a wall.`,Tips_38:`Meow. ([color=0001]Curling Bombs[color=ffff] slide on the ground and
bounce off walls.)[page break]Meow. (You can also adjust the detonation timing
by holding [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to keep them at the ready.)[page break]Meow! (Try throwing one into a fight, then use
the path it creates to chase opponents!)[page break]Meow! (Curling Bombs can be hard to get the
hang of, so why not practice on some targets!)`,Tips_38_Trial:`Break the targets using [color=0001]Curling Bombs[color=ffff]! Press [group=0003 type=000a params=29 5c 0f 40 05 00 00 00], then release
to throw. Release quickly to send it far or hold to shorten its travel.`,Tips_39:`Meow. (The [color=0001]Point Sensor[color=ffff] is a sub weapon for marking
and tracking enemies, even if they hide in ink.)[page break]Meow! (Marked enemies can be seen by your whole
team, so never pass up a chance to mark one!)[page break]Meow. (The effect of the Point Sensor lasts for
a bit, so if you get hit by one, play it safe.)[page break]Meow! (Try throwing a few Point Sensors around!)`,Tips_39_Trial:`Throw out three [color=0001]Point Sensors[color=ffff]. Press [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to send one out to
mark targets.`,Tips_40:`Meow. (The [color=0001]Splash Wall [color=ffff]is a sub weapon that
shields you from enemy fire.)[page break]Meow! (But! Your team's ink passes right through
it, so it's great for fighting on the front lines.)[page break]Meow. (It takes a little while to set up, though,
so be careful about when and where you use it.)[page break]Meow! (You might want to try using up a
Splash Wall here before you use one in battle!)`,Tips_40_Trial:`Set up a [color=0001]Splash Wall[color=ffff] to create a defensive wall of ink three times.
Press [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to deploy one!`,Tips_41:`Meow. (The [color=0001]Toxic Mist [color=ffff]sub weapon makes a
cloud that slows down your opponents.)[page break]Meow! (Even better, opponents caught in the
cloud will also start losing ink!)[page break]Meow? (The longer they're in the Toxic Mist,
the more ink they'll lose. Purrretty cool, huh?)[page break]Meow! (If you like, you can use the Toxic Mist
here and see how it works!)`,Tips_41_Trial:`Set up three clouds of [color=0001]Toxic Mist[color=ffff]. Throw one out with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00].
The mist will slow down any enemies inside of it.`,Tips_42:`Meow! (The [color=0001]Autobomb [color=ffff]can chase down
opponents on its own.)[page break]Meow. (As soon as it lands, it detects nearby
opponents, then heads toward the nearest one.)[page break]Meow! (If you think an opponent is hiding out,
these are great for making them break cover!)[page break]Meow. (Autobombs are really fun. Try breaking
a few targets with them!)`,Tips_42_Trial:`Practice breaking targets with an [color=0001]Autobomb[color=ffff]! Throw one out with
[group=0003 type=000a params=29 5c 0f 40 05 00 00 00], and it'll walk to the nearest target and explode.`,Tips_43:`Meow. (The [color=0001]Tenta Missiles [color=ffff]special weapon can lock
on to lots of opponents and fire missiles at them.)[page break]Meow! (If your opponents clump together, you
could even splat the entire enemy team at once!)[page break]Meow! (That's not all! It also tracks its targets,
showing you where they are for a little while.)[page break]Meow! (You really should try it for yourself. Go
launch a few Tenta Missiles at some targets!)`,Tips_43_Trial:`Break the targets with [color=0001]Tenta Missiles[color=ffff]! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to activate
them, lock onto a few targets, then hit [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to launch.`,Tips_46:`Meow! ([color=0001]Ink Mines[color=ffff] let you set traps that detect
and damage opponents who get too near.)[page break]Meow. (When an opponent sets one off, it
explodes, which [color=0001]marks [color=ffff]them and deals damage.)[page break]Meow! (You can place two Ink Mines at once. Put
them on paths you think your opponents will use.)[page break]Meow? (Why don't you practice placing a couple
Ink Mines?)`,Tips_46_Trial:`Place three [color=0001]Ink Mines[color=ffff]. Press [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to set one out. Once a mine
is in place, it will explode if a target gets too close!`,Tips_48:`Meow! (The [color=0001]Inkjet [color=ffff]is a special weapon that's
both a jet pack AND a missile launcher!)[page break]Meow. (The rockets explode on impact, dealing
damage to nearby opponents.)[page break]Meow. (You should try to aim down at the enemy's
feet, which is where the jet pack comes in.)[page break]Meow... (Just be careful. Flying above everyone
using the jet pack makes you an easy target...)[page break]Meow. (You need to keep moving up there, so hit [group=0003 type=0001 params=00 00 80 3f 00 00 00 00]
to boost upward, or use swim with [group=0003 type=000b params=00 00 80 3f 00 00 00 00] to drop.)[page break]Meow! (That was a lot, but I purrromise it's easy.
Go use the Inkjet to break some targets!)`,Tips_48_Trial:`Use the [color=0001]Inkjet[color=ffff] to break the targets! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to activate
it, aim at a target's feet, then fire with [group=0003 type=000c params=29 5c 0f 40 05 00 00 00].`,Tips_50:`Meow. (The [color=0001]Ink Storm [color=ffff]is a special weapon that
creates a cloud that rains ink.)[page break]Meow. (You just throw out the cloud with [group=0003 type=000a params=00 00 80 3f 00 00 00 00],
and it'll rain down ink as it moves along.)[page break]Meow! (You'll slowly start to take damage under an
Ink Storm, so either get out quick or weather it.)[page break]Meow... (You know, the targets here are having a
purrretty good day... Go hit 'em with an Ink Storm!)`,Tips_50_Trial:`Use an [color=0001]Ink Storm[color=ffff]! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to get it ready, then throw
it with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to create a rain cloud.`,Tips_53:`Meeeow! (The [color=0001]Sprinkler [color=ffff]is a sub weapon that
sprays ink all around it.)[page break]Meow. (It keeps working even if you move away
from it, so it's great furrr guarding an area.)[page break]Meow... (It gets weaker over time, though, so be
sure to set up a new one every now and then.)[page break]Meow! (Sprinklers are purrretty handy! Try one
out for yourself.)`,Tips_53_Trial:`Set up three [color=0001]Sprinklers[color=ffff]. Just hit [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to throw one out, and it'll
start spraying ink all over the place.`,Tips_54:`Meow! (The [color=0001]Squid Beakon [color=ffff]sub weapon lets you
place a signal that your team can Super Jump to.)[page break]Meow. (You can use it to give your team another
way to get into the battle quick.)[page break]Meow! (Pro tip: if your opponents set out a
Squid Beakon, act fast to find it and destroy it!)[page break]Meow! (Maybe seeing Squid Beakons in action will
make more sense. Try placing a few yourself!)`,Tips_54_Trial:`Set a [color=0001]Squid Beakon[color=ffff] and Super Jump to it! Place it with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00], open the
Turf Map with [group=0003 type=0002 params=29 5c 0f 40 05 00 00 00], pick the Beakon, and hit [group=0003 type=0000 params=29 5c 0f 40 05 00 00 00]. THEN do it twice more!`,Tips_55:`Meow. (Your [color=0001]rank [color=ffff]is an expression of the skill
you show in Anarchy Battles.)[page break]Meow. (To raise your rank, just play some
Anarchy Battles and earn some Rank Points.)[page break]Meow. (Anarchy Battles come in lots of flavors,
like Splat Zones, Tower Control, and Rainmaker...)[page break]Meow! (And if you press [group=0003 type=0006 params=00 00 80 3f 00 00 00 00] in the battle pot
menu, you can find an explanation for each one!)`,Tips_56:`Meow! (Did you know that gear comes in lots of
diffurrrent [color=0001]brands[color=ffff]?)[page break]Me-ow. (Each brand has its own style and unique
design for the fashionable to pay attention to.)[page break]Meow. (Certain brands gain purrrticular abilities
more easily than other brands too.)[page break]Meow! (Crab-N-Go also has drinks that make it
easier to get an ability, no matter the brand!)`,Tips_57:`Meow. ([color=0001]Shooters[color=ffff],[color=0001] [color=ffff]such as the Splattershot, are
your basic aim-and-fire main weapons.)[page break]Meow. (Mastering these means learning to target
opponents and knowing when you've hit them.)[page break]Meow. (When you have the enemy in your sights,
the targeting reticle will change to a [group=0003 type=0026 params=00 00 80 3f 00 00 00 00] symbol.)[page break]Meow. (Once you see that symbol, pull the
trigger with [group=0003 type=000c params=00 00 80 3f 00 00 00 00].)[page break]Meow. (If your attack hit your opponent, you
should feel a sharp reaction.)[page break]Meow! (But you're not done yet! You may need to
adjust your aim and shoot some more!)`,Tips_58:`Meow. ([color=0001]Splash Walls[color=ffff] and [color=0001]Big Bubblers[color=ffff] can block
your ink from hitting an opponent.)[page break]Meow! (But! If either gets hit by a [color=0001]Splat Bomb[color=ffff] or
a [color=0001]Suction Bomb[color=ffff], the bomb will explode right then!)[page break]Meow. (Don't give opponents hiding near a
Splash Wall a chance to relax. Outsmart them!)[page break]Meow... (But on the other paw, if you set up a
Splash Wall, opponents CAN do this to you...)`,Tips_58_Trial:`Press [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to throw [color=0001]Suction Bombs[color=ffff] and break the targets!
They'll explode as soon as they touch a Splash Wall.`,Tips_59:`Meow? (You been to the [color=0001]shop[color=ffff] in the lobby yet?)[page break]Meow. (The [color=0001]food[color=ffff] and [color=0001]drinks[color=ffff] sold there can boost
the [color=0001]expurrrience [color=ffff]and [color=0001]cash [color=ffff]you earn from battle.)[page break]Meow! (Although, you'll need [color=0001]tickets[color=ffff] to buy the
goods, so round some up before stopping by!)`,Tips_60:`Meow. (If you want to look at how you're doing,
go to the lobby terminal and hit [color=0001]View Replays[color=ffff].)[page break]Meow. (There you can [color=0001]watch replays [color=ffff]of many
of the battles you've been in.)[page break]Meow. (You can also watch other people's
replays by [color=0001]entering a Replay Code[color=ffff].)[page break]Meow! (Watching yourself play, or seeing how
others play, can be a great way to impurrrove!)`,Tips_61:`Meow? (Everrr gotten lost during a battle?)[page break]Meow. (If you have, maybe you should visit the
stages on your own and do some [color=0001]recon[color=ffff].)[page break]Meow! (To set up a trip and get to know a stage,
just talk to the [color=0001]Recon Guide[color=ffff] out on the street!)`,Tips_62:`Meow. (Wondering what the ★ on gear means?
That's how much star power each item has.)[page break]Meow. (Gear with three ★ can have [color=0001]3[color=ffff]
secondary abilities. That's good!)[page break]Meow! (Check out the shops for items that
come with lots of star power by default.)[page break]Meow! (You can also [color=0001]rebuy [color=ffff]an item you already
own to raise its star power!)[page break]Meow! ([color=0001]Murch[color=ffff] knows more. He's in the square.
Go make your gear be all it can be!)`,Tips_63:`Meow. (Each weapon has a [color=0001]Freshness rating[color=ffff], which
grows as you use it.)[page break]Meow! (You'll get bonuses for boosting a weapon's
rating, like [color=0001]Sheldon Licenses[color=ffff], stickers, and badges!)[page break]Meow. (Stickers and badges are great for showing
everyone which weapons you like to use.)`,Tips_64:`Meow? (Did you know you can make changes to
your [color=0001]Splashtag[color=ffff] at the lobby terminal?)[page break]Meow. (Setting up your own [color=0001]banner[color=ffff], [color=0001]badges[color=ffff], and
[color=0001]title[color=ffff] is a great way to show off your personal style.)[page break]Meow! (You get badges by doing special tasks, while
tags and titles come from the [color=0001]catalog[color=ffff] or [color=0001]Shell-Out Machine[color=ffff].)`,Tips_65:`Meow! (Don't forget to put your stickers and
decorations up in [color=0001]your locker[color=ffff]!)[page break]Meow. (The [color=0001]locker room[color=ffff] is in the lobby. Get yours
decked out so you can show off your style.)[page break]Meow! (You can look at everyone else's lockers too.
If you spot one you like, tell the owner it's "[color=0001]Fresh![color=ffff]")`,Tips_66:`Meow! (Wanna do a [color=0001]Squid Surge[color=ffff]? Swim onto a
wall, hold [group=0003 type=0001 params=00 00 80 3f 00 00 00 00], then release it, and off you'll go!)[page break]Meow. (The Squid Surge is perfect when you need
to climb a wall fast to get the drop on someone.)[page break]Meow? (If you've got a minute, why not practice
your Squid Surge?)`,Tips_66_Trial:`Climb a wall using a [color=0001]Squid Surge[color=ffff], then break the target. Swim onto
the wall with [group=0003 type=000b params=29 5c 0f 40 05 00 00 00], hold [group=0003 type=0001 params=29 5c 0f 40 05 00 00 00], then release to surge!`,Tips_67:`Meow! (When you're swimming in a hurry, you can tilt
[group=0003 type=0007 params=cd cc 4c 3f 00 00 00 00] the other way and tap [group=0003 type=0001 params=00 00 80 3f 00 00 00 00] to do a [color=0001]Squid Roll[color=ffff]!)[page break]Meow! (It's the perfect move for when a bomb lands
in your face and you gotta get out of there FAST.)[page break]Meow. (You can also Squid Roll when swimming on a
wall. Just tilt [group=0003 type=0007 params=cd cc 4c 3f 00 00 00 00] away from the wall and tap [group=0003 type=0001 params=00 00 80 3f 00 00 00 00].)[page break]Meow! (Squid Rolling out of a wall is a great way to
surprise an opponent. They [size=65%]almost[size=100%] never see it coming!)[page break]Meow! (You should try doing a few Squid Rolls.
Purrractice makes perfect!)`,Tips_67_Trial:`Do a [color=0001]Squid Roll[color=ffff] and break the target! Swim onto a wall, then tilt
[group=0003 type=0007 params=5c 8f c2 3f 05 00 00 00] away from the wall and quickly hit [group=0003 type=0001 params=29 5c 0f 40 05 00 00 00] to Squid Roll.`,Tips_68:`Meow. (You start every battle on a [color=0001]spawner[color=ffff], then
fly into the stage by doing a [color=0001]Squid Spawn[color=ffff].)[page break]Meow. (On the spawner, tilt the controller to pick
a spot to land, then steer in the air with [group=0003 type=0007 params=cd cc 4c 3f 00 00 00 00].)[page break]Meow! (Get splatted, and you'll return to the spawner.
Pick your spot, and hit [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to make a comeback!)[page break]Meow! (You can also open the Turf Map after you get
splatted if you'd rather return using a Super Jump!)`,Tips_69:`Meow! (You've been leveling up! Time to put your
skills to the test in some [color=0001]Anarchy Battles[color=ffff]!)[page break]Meow. (Anarchy Battles are where all the serious
players go for their serious splatting.)[page break]Meow. (Want in? Go to the [color=0001]battle pot[color=ffff], and hit [group=0003 type=0006 params=00 00 80 3f 00 00 00 00] to
read up on how Anarchy Battles work. Good luck!)`,Tips_70:`Meow! (Pro tip: try doing [color=0001]recon[color=ffff] for Anarchy Battles.
Just tell the Recon Guide what [color=0001]mode[color=ffff] to use.)[page break]Meow. (Stages can change based on what mode you're
in. Do some recon, and don't get caught off guard!)`,Tips_71:`Meow. (The [color=0001]Angle Shooter [color=ffff]sub weapon shoots in a
straight line and leaves a trail along its path.)[page break]Meow! (But the really fun part is that if it hits
a wall or the ground, it will BOUNCE!)[page break]Meow! (Opponents get marked if they touch the trail,
or if they're hit. And it's pretty damaging too!)[page break]Meow! (Try bouncing shots around corners to mark
opponents so your team can see where they are!)[page break]Meow! (In fact, since you're here, you could bounce
a few Angle Shooter shots around right now!)`,Tips_71_Trial:`Use the [color=0001]Angle Shooter[color=ffff] to make three lines! Press [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to throw
out a line that marks and damages targets.`,Tips_72:`Meow. (The [color=0001]Trizooka[color=ffff] special weapon launches a trio
of powerful shots that spiral toward their target.)[page break]Meow. (Press in on [group=0003 type=0008 params=cd cc 4c 3f 00 00 00 00] to get your special and start
its timer. You can fire up to three times with [group=0003 type=000c params=00 00 80 3f 00 00 00 00].)[page break]Meow. (Oh yeah! The Trizooka launches ink in an arc,
so tilt your aim upward to hit faraway opponents.)[page break]Meow? (Why not take that Trizooka for a spin and
smash some targets?)`,Tips_72_Trial:`Use the [color=0001]Trizooka[color=ffff] to break the targets! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to activate
it, then fire with [group=0003 type=000c params=29 5c 0f 40 05 00 00 00]. You can fire it up to three times.`,Tips_73:`Meow. (The [color=0001]Big Bubbler[color=ffff] special weapon makes
a force field to protect you and your team.)[page break]Meow... (The force field will stop ink and bombs...
except when an opponent walks inside and fires!)[page break]Meow! (If an opponent uses a Big Bubbler, hit the
device inside or the top part to break the barrier.)[page break]Meow... (You know, I bet that'll make more sense
if you try using a Big Bubbler for yourself...)`,Tips_73_Trial:`Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to set up a [color=0001]Big Bubbler[color=ffff]. The force field it creates
will shield you from enemy ink.`,Tips_74:`Meow. (The [color=0001]Killer Wail 5.1 [color=ffff]special sets up devices
that can lock onto and attack up to three targets.)[page break]Meow! (The lasers they fire can even go through
walls, so there's nowhere to hide if one's locked on!)[page break]Meow! (There's a delay between when each device
activates too. Use that to chase down opponents!)[page break]Meow! (The Killer Wail 5.1 is also great at breaking
targets. Try it for yourself!)`,Tips_74_Trial:`Break the target using the Killer Wail 5.1. Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to activate
it. If a device locks onto a target, it'll track it with its laser!`,Tips_75:`Meow. (The [color=0001]Zipcaster [color=ffff]special weapon lets you zip
around the stages and stick to walls or floors.)[page break]Meow! (Aim where you want to go, and hit [group=0003 type=000a params=00 00 80 3f 00 00 00 00]
to zip over. You can even chain zips together!)[page break]Meow! (Try zipping to a wall right behind an
opponent, then attacking with [group=0003 type=000c params=00 00 80 3f 00 00 00 00]! Surprise!)[page break]Meow. (The Zipcaster is fun, but it can be tricky,
so go get some practice while you break targets.)`,Tips_75_Trial:`Zip over and break targets with the [color=0001]Zipcaster[color=ffff]! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to
activate it, hit [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to zip, then [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to use your weapon.`,Tips_76:`Meow. (Set up a [color=0001]Wave Breaker [color=ffff]special weapon,
and it'll send shock waves in all directions.)[page break]Meow! (Use [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to set it near a hiding spot, and
the shock wave will damage AND mark opponents.)[page break]Meow! (Oh! And just so you know—if an opponent
sets one up, you can jump over the shock wave!)[page break]Meow! (Go set up a Wave Breaker so you can see
how they work. You're in furrr some fun!)`,Tips_76_Trial:`Use the [color=0001]Wave Breaker[color=ffff]. Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to get it ready, then hit
[group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to throw it, and it'll send out a trio of shock waves.`,Tips_77:`Meow! (The [color=0001]Crab Tank [color=ffff]special weapon is, well...
It's a tank in the shape of a crab!)[page break]Meow. (Hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] for rapid-fire attacks from its
claws, or press [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to fire its mouth cannon!)[page break]Meow. (It's a little slow, but if you hold [group=0003 type=000b params=00 00 80 3f 00 00 00 00], it'll
turn into its mobile mode so it can move faster.)[page break]Meow. (Want to take the Crab Tank for a spin?
Go furrr it! Smash up some targets!)`,Tips_77_Trial:`Break targets with the [color=0001]Crab Tank[color=ffff]. Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to start it
up. Attack with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] and [group=0003 type=000c params=29 5c 0f 40 05 00 00 00], and roll around with [group=0003 type=000b params=29 5c 0f 40 05 00 00 00].`,Tips_78:`Meow. (With [color=0001]chargers[color=ffff], such as the Splat Charger,
you [color=0001]build up a charge [color=ffff]to fire a powerful shot.)[page break]Meow! (You can even hold a charge for a li'l bit while
swimming by holding [group=0003 type=000c params=00 00 80 3f 00 00 00 00] as you press [group=0003 type=000b params=00 00 80 3f 00 00 00 00] to swim.)[page break]Meow! (Try charging up out of sight, then hop into
swim form, and POW! Surprise attack!)[page break]Meow! (But don't let me tell you how to do it.
Go charge up some shots of your own!)`,Tips_78_Trial:`Hold [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to build up a fully [color=0001]charged shot[color=ffff], then break the target!
You'll briefly keep the charge if you hold [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] and swim with [group=0003 type=000b params=29 5c 0f 40 05 00 00 00].`,Tips_79:`Meow! ([color=0001]Rollers[color=ffff], like the Splat Roller, are main weapons
that can attack either side to side or up and down!)[page break]Meow. (If you're standing still or moving, pressing
[group=0003 type=000c params=00 00 80 3f 00 00 00 00] will fling ink horizontally, side to side.)[page break]Meow! (But if you're jumping, pressing [group=0003 type=000c params=00 00 80 3f 00 00 00 00] will fling
the ink vertically, up and down. It flies real far too!)[page break]Meow. (You'll need to use both attacks if you want to
get good with rollers, so go get some practice.)`,Tips_79_Trial:`Use a [color=0001]roller[color=ffff] to break the targets! Press [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] for a wide horizontal
attack. Or press it while jumping to do a long-range vertical attack!`,Tips_80:`Meow. ([color=0001]Blasters[color=ffff] like the, um...Blaster...are main
weapons that shoot big blobs of exploding ink.)[page break]Meow! (You can catch enemies around corners in
the explosion, or land a direct hit for big damage!)[page break]Meow! (Why don't you give blasters a try? I have
a feeling you'll like 'em!)`,Tips_80_Trial:`Use a [color=0001]blaster[color=ffff] to break the targets! Press [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to attack. Direct
hits deal extra damage, while the explosion hits everything nearby.`,Tips_81:`Meow. ([color=0001]Brushes[color=ffff] like the Octobrush let you sprint
toward enemies while painting the ground under you.)[page break]Meow. (Hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] and tilt [group=0003 type=0007 params=cd cc 4c 3f 00 00 00 00] to sprint, then ink
defense lines or create ink paths for your team.)[page break]Meow! (But be careful! If you run out of ink,
your running speed will drop back to normal.)[page break]Meow! (Why don't you brush up on your brush
skills for a while?)`,Tips_81_Trial:`Break the targets with a [color=0001]brush[color=ffff]! Attack with [group=0003 type=000c params=29 5c 0f 40 05 00 00 00], or tilt [group=0003 type=0007 params=5c 8f c2 3f 05 00 00 00]
while holding [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to ink the ground with a speedy sprint!`,Tips_82:`Meow! ([color=0001]Splatlings [color=ffff]like the Heavy Splatling can
fire ink so fast it's almost like one big stream!)[page break]Meow. (How far they can fire, and for how long,
is based on how long you charge them.)[page break]Meow. (Hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to start charging, then watch
your targeting reticle. Two charges is the max.)[page break]Meow. (The first charge maxes out the range. The
second maxes out how long the shooting lasts.)[page break]Meow! (Get a full charge, then let go of [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to
start your weapon firing. Give it a try!)`,Tips_82_Trial:`Use a [color=0001]splatling[color=ffff] to break targets. Hold [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to charge it up, and
release to fire. More charge means more distance AND more firing!`,Tips_83:`Meow! ([color=0001]Dualies[color=ffff], such as the Splat Dualies, give
you a weapon for each hand!)[page break]Meow. (Dualies also let you do a speedy [color=0001]Dodge Roll[color=ffff].
While firing with [group=0003 type=000c params=00 00 80 3f 00 00 00 00], tilt [group=0003 type=0007 params=cd cc 4c 3f 00 00 00 00] and press [group=0003 type=0001 params=00 00 80 3f 00 00 00 00].)[page break]Meow. (It takes a second to recover after rolling,
but you'll have better aim for a short while after.)[page break]Meow! (Also! Dodge Rolls use a lot of ink, so try to
keep enough ink to dodge your way out of danger!)[page break]Meow! (Now, get out there with your dualies and
do some Dodge Rolls!)`,Tips_83_Trial:`Use [color=0001]dualies [color=ffff]to break the targets! Attack by pressing [group=0003 type=000c params=29 5c 0f 40 05 00 00 00]. While
attacking, tilt [group=0003 type=0007 params=5c 8f c2 3f 05 00 00 00] and hit [group=0003 type=0001 params=29 5c 0f 40 05 00 00 00], and you'll do a [color=0001]Dodge Roll[color=ffff]!`,Tips_84:`Meow... ([color=0001]Sloshers[color=ffff] such as, well...the Slosher are
weapons that throw out great big splashes of ink.)[page break]Meow. (With most sloshers, swinging the controller
as you attack will control where the ink flies.)[page break]Meow! (Purrrfecting the controller-swing trick is
tough, but it's what makes sloshers so powerful!)[page break]Meow? (Speaking of purrractice, why not spend
time with some sloshers now?)`,Tips_84_Trial:`Use a [color=0001]slosher[color=ffff] to break the targets! Press [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to attack. Tilting
the controller at the same time lets you control where the ink goes!`,Tips_85:`Meow. ([color=0001]Brellas[color=ffff], such as the Splat Brella, are
main weapons that can block attacks.)[page break]Meow! (Holding [group=0003 type=000c params=00 00 80 3f 00 00 00 00] opens one up so it can block.
Be careful—they'll break after too many hits.)[page break]Meow! (Also, some brellas can be [color=0001]launched[color=ffff]
forward if you hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] long enough!)[page break]Meow. (Once launched or broken, brellas can't be
opened for a bit. But don't worry—they'll be back!)[page break]Meow! (If you're going to purrractice with brellas,
be sure to try both shielding AND launching!)`,Tips_85_Trial:`Use a [color=0001]brella[color=ffff] to break the targets! You can attack with [group=0003 type=000c params=29 5c 0f 40 05 00 00 00]. Hold
[group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to open it to block attacks, then keep holding to [color=0001]launch[color=ffff] it!`,Tips_86:`Meow. ([color=0001]Stringers[color=ffff], such as the Tri-Stringer, are main
weapons that launch several ink shots at once.)[page break]Meow. (Hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to charge, then release to shoot.
Charging boosts the weapon's range and power.)[page break]Meow. (If you release [group=0003 type=000c params=00 00 80 3f 00 00 00 00] while standing or running
around, you'll fire a side-to-side spread of shots.)[page break]Meow! (But if you're jumping when you release [group=0003 type=000c params=00 00 80 3f 00 00 00 00],
the shots will launch vertically, up and down!)[page break]Meow. (Stringers are a bit like chargers, except it's
tougher for opponents to see where you're aiming.)[page break]Meow! (Give stringers a try sometime. I bet you'll
like them!)`,Tips_86_Trial:`Use a [color=0001]stringer[color=ffff] to break targets! Quickly press and release [group=0003 type=000c params=29 5c 0f 40 05 00 00 00]
for a short, wide attack, or hold to charge up a long-range attack!`,Tips_87:`Meow! ([color=0001]Splatanas [color=ffff]like the Splatana Stamper are main
weapons that can fling a powerful arc of ink!)[page break]Meow. (Press [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to do a [color=0001]horizontal slash[color=ffff], or hold it
and release to send ink flying with a [color=0001]charged slash[color=ffff]!)[page break]Meow! (Also, when you do a charged slash, if you tilt
forward on [group=0003 type=0007 params=cd cc 4c 3f 00 00 00 00], you'll do a powerful rush attack!)[page break]Meow. (Splatanas slice up targets nicely. Go see
furrr yourself!)`,Tips_87_Trial:`Break targets with a [color=0001]splatana[color=ffff]! Quickly press and release [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] for
a [color=0001]horizontal slash[color=ffff], or hold and release for a long-range [color=0001]charged slash[color=ffff]!`,Tips_88:`Meow. (The [color=0001]Ultra Stamp[color=ffff] special weapon is
basically a giant hammer.)[page break]Meow! (Just hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to start swinging, and
steer yourself with [group=0003 type=0007 params=cd cc 4c 3f 00 00 00 00]!)[page break]Meow. (You can also press [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to throw the
stamp. Watch your aim—it doesn't come back!)[page break]Meow! (Go give the Ultra Stamp a few swings
and break some targets!)`,Tips_88_Trial:`Break the targets with the [color=0001]Ultra Stamp[color=ffff]! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to activate it,
then hold [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to swing as you move. Or just throw it with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00]!`,Tips_89:`Meow. (The [color=0001]Tacticooler [color=ffff]special sets up a stand
with drinks to give your team a boost.)[page break]Meow! (Press [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to set it up by your team,
then allies can walk up to it to get a boost.)[page break]Meow. (Drinks give brief boosts, such as moving
faster while on an opponent's ink.)[page break]Meow! (And if you're splatted while boosted, you can
come back right away. That ends the boost though.)[page break]Meow! (Anyway, you look thirsty. Go try setting up
a Tacticooler!)`,Tips_89_Trial:`Get a drink from a [color=0001]Tacticooler[color=ffff],[color=0001] [color=ffff]and break the targets! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to
get it ready, set it up with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00], then walk by it for a [color=0001]power-up drink[color=ffff]!`,Tips_90:`Meow. (The [color=0001]Ink Vac [color=ffff]is a special weapon that sucks
up opponents' ink and launches it back at them.)[page break]Meow. (Holding [group=0003 type=000c params=00 00 80 3f 00 00 00 00] will start pulling in your
opponents' ink before it fires it all back.)[page break]Meow! (It'll also suck in ink from bombs and
special weapons too!)[page break]Meow! (Why not give the Ink Vac a try?
I'm purrretty sure you'll like it!)`,Tips_90_Trial:`Use the [color=0001]Ink Vac[color=ffff] to suck up ink! Activate it with [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00], hold [group=0003 type=000c params=29 5c 0f 40 05 00 00 00] to pull
in enemy ink, then release [group=0003 type=000c params=29 5c 0f 40 05 00 00 00]—or hit it again—to fire the ink back!`,Tips_91:`Meow. (The [color=0001]Fizzy Bomb [color=ffff]can be charged up so that
it will explode up to three times.)[page break]Meow. (Hold [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to start charging, then release it
to throw. Each explosion is kinda small, so aim well.)[page break]Meow! (You can charge faster by holding [group=0003 type=000a params=00 00 80 3f 00 00 00 00] and
shaking the controller, or by moving around a bunch!)[page break]Meow. (You should try throwing a few Fizzy Bombs
and get the hang of them. Go break some targets!)`,Tips_91_Trial:`Throw out three [color=0001]Fizzy Bombs[color=ffff]! Hold [group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to charge one up, then let
go to throw. Move around or shake the controller to charge faster!`,Tips_92:`Meow. (The [color=0001]Reefslider [color=ffff]special weapon is a shark-
shaped float that you ride into your opponents.)[page break]Meow. (The float travels in a straight line, exploding
at the end of its range, or earlier if you hit [group=0003 type=000c params=00 00 80 3f 00 00 00 00].)[page break]Meow! (This weapon is great for pushing deep into
enemy territory or chasing down opponents.)[page break]Meow! (See how you like it. Go ride a Reefslider
into some targets!)`,Tips_92_Trial:`Break targets with a [color=0001]Reefslider[color=ffff]! Aim first, then press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to
launch. It'll explode at the end of its range, or if you hit [group=0003 type=000c params=29 5c 0f 40 05 00 00 00].`,Tips_93:`Meow! (The [color=0001]Torpedo [color=ffff]sub weapon is basically an
opponent-seeking missile!)[page break]Meow. (Press [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to throw it. It'll detect an
enemy, then fly toward them before exploding.)[page break]Meow! (They can be shot down in flight, though,
so you'll need to think before using one.)[page break]Meow! (You should definitely try throwing out
a Torpedo or two!)`,Tips_93_Trial:`Throw out three [color=0001]Torpedoes[color=ffff], and see what they hunt down! Press
[group=0003 type=000a params=29 5c 0f 40 05 00 00 00] to send one out, and it'll lock onto and chase its target.`,Tips_94:`Meow! (The [color=0001]Triple Inkstrike [color=ffff]special weapon sends
out beacons that call torpedoes down from above!)[page break]Meow. (Press in on [group=0003 type=0008 params=cd cc 4c 3f 00 00 00 00] to get it ready, then hit
[group=0003 type=000a params=00 00 80 3f 00 00 00 00] to put out a beacon. You can use up to three.)[page break]Meow! (You can try setting them out all over, or set
them all in the same spot to REALLY blast an area!)[page break]Meow! (Try the Triple Inkstrike on some targets,
and see how you like it!)`,Tips_94_Trial:`Use the [color=0001]Triple Inkstrike[color=ffff] to break the targets! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to
get it ready, then you can throw up to three of them with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00].`,Tips_95:`Meow! (The [color=0001]Booyah Bomb[color=ffff] lets you gather power
into a big ball of exploding ink to throw at enemies!)[page break]Meow! (If you and your allies Booyah! with [group=0003 type=0028 params=29 5c 4f 3f 00 00 00 00],
you'll charge up faster so you can attack sooner!)[page break]Meow. (Anyone who does a Booyah! to help you
charge gets a little of their special gauge filled.)[page break]Meow. (It'll make sense once you see it in action,
so go break some targets with a Booyah Bomb!)`,Tips_95_Trial:`Break targets with the [color=0001]Booyah Bomb[color=ffff]! Press [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00] to activate
it, Booyah! with [group=0003 type=0028 params=29 5c 0f 40 05 00 00 00] to charge it up, then launch it with [group=0003 type=000a params=29 5c 0f 40 05 00 00 00].`,Tips_96:`Meow? (Have you picked up a [color=0001]catalog[color=ffff] yet?
You can get one over at Hotlantis.)[page break]Meow! (Once you have a catalog, you can raise
your [color=0001]catalog level[color=ffff]. Do that, and you'll get rewards!)[page break]Meow. (You earn catalog levels with [color=0001]Catalog Points[color=ffff],
which you get from battles and Salmon Run Shifts.)[page break]Meow! (And each day, the first battle you win or shift
you complete will earn you lots of bonus points!)[page break]Meow! (Catalogs are limited-time, though, so if you
like what you see in one, don't wait!)`,Tips_97:`Meow? (You know what the [color=0001]copy machine[color=ffff] is, right?
It's the robot set up by the wall in the lobby.)[page break]Meow. (It can be activated by going up to it and
pressing [group=0003 type=0000 params=00 00 80 3f 00 00 00 00]. Press [group=0003 type=0000 params=00 00 80 3f 00 00 00 00] again to deactivate it.)[page break]Meow. (The copy machine copies what you do. Attack
with [group=0003 type=000c params=00 00 80 3f 00 00 00 00] or use a sub with [group=0003 type=000a params=00 00 80 3f 00 00 00 00], and it'll do it too.)[page break]Meow! (It's great furrr testing the Splash Wall or
Big Bubbler, or when trying gear abilities!)`,Tips_98:`Meow! (In [color=0001]Clam Blitz[color=ffff], the team that throws the
most clams into their opponents' basket wins!)[page break]Meow. (First, combine clams into a power clam, then
use that to break the barrier around the basket.)[page break]Meow! (Once the barrier's gone, throw as many clams
as you can into your opponents' basket to win!)`,Tips_99:`Meow! (Star power maxes at five ★, but even at
three ★, it'll earn you [color=0001]gear experience[color=ffff] faster![page break]Meow. (You'll need cash to get gear to three ★,
but then the experience boost lasts furrrever.)[page break]Meow! (More star power means you'll get [color=0001]ability
chunks [color=ffff]faster too, so boost your star power!)`,Tips_SpecialWeapon:`Meow. (As you cover turf with ink, your [color=0001]special
gauge[color=ffff] will fill.)[page break]Meow! (Once it's full, press [group=0003 type=0008 params=cd cc 4c 3f 00 00 00 00] to bust out
your [color=0001]special weapon[color=ffff]!)[page break]Meow! (You know, the [color=0001]Trizooka[color=ffff] is GREAT at
breaking targets. Give it a try!)`,Tips_SpecialWeapon_Trial:`Break the target using your [color=0001]special weapon[color=ffff]! Activate it by
pressing [group=0003 type=0008 params=5c 8f c2 3f 05 00 00 00], then attack with [group=0003 type=000c params=29 5c 0f 40 05 00 00 00].`},"CommonMsg/Plaza/PlazaNpcFocus_Fsodr":{VendorAlreadyOrdered:"You already ordered this!",VendorCatalogNotHave:`You've got a good eye, haven't you? That item's
way too hot for the likes of me to procure.`,VendorNoOrder:"You've got no open orders, love.",VendorNotSell:"It's not available, mate.",VendorOrder:`Alright. I can only get [color=0001]one item a day[color=ffff], so [color=0001]come
round later[color=ffff], yeah?`,VendorOrderListFull:"Gotta cancel an open order if you wanna order more.",VendorOrderQ:"You want this gear?",VendorOrderSelect:"See somefing you fancy, love?",VendorOrderSwapQ:"You wanna exchange the orders for this and this?",VendorOrderedArrived:`That gear's already been delivered, mate.
You can't cancel it now.`,VendorOrderedCancel:"Right. It never happened.",VendorOrderedCancelQ:"Changed your mind about this gear, then?",VendorOrderedList:"This is what you wanted, yeah?"},"CommonMsg/Plaza/PlazaVendor_Fsodr":{Clean_Done:`Ahhh, there we are. Nice and clean,
innit? And these [color=0001]ability chunks[color=ffff] came
out in the wash. Cheers, mate.`,Clean_First:`First time [color=0001]scrubbing[color=ffff] gear, innit?
Let's get you sorted.[page break][color=0001]Scrubbing [color=ffff]gear cleans all of the
[color=0001]secondary gear abilities[color=ffff] away, yeah?
Leaving it fresh and sparkling, ready
for you to take into battle so you
can unlock new secondary abilities.[page break]And you get some [color=0001]ability chunks[color=ffff]
back in the deal. Gather enough of
'em, and you can have your pick of
abilities added back on. It's grand,
if I do say so myself.[page break]No pressure, mate, but [color=0001]scrubbing[color=ffff]
gear is the fastest way to sort
yourself some extremely fresh gear.[page break]Just let me know if you're interested,
and we can talk cost. You didn't fink
it was free, didja?`,Clean_NoSkill:`Sorry, love, but I can't scrub gear
that doesn't have [color=0001]secondary gear
abilities[color=ffff]. Wot were you finking?`,Clean_NotEnoughMoney:`YOU WOT, MATE?! Look, I'm seein'
fings a bit different these days,
but that don't mean you can take
advantage of ol' Spyke.`,Clean_Q:"Shall I scrub?",Clean_Select:`What [color=0001]gear[color=ffff] do you want to [color=0001]scrub[color=ffff]?
I'll make it sparkle.`,ExplainFestT:`Oi, you got a [color=0001]Splatfest Tee[color=ffff], didja?
Nuffin beats a Splatfest, eh, mate?
Listen...I'll tell you something good.[page break]Your ol' pal Spyke can give ya a good
deal on [color=0001]scrubbing [color=ffff]and [color=0001]rerolling gear
abilities[color=ffff] on them Splatfest Tees.[page break]How does [group=0003 type=0027 params=85 eb 91 3f 00 00 00 00][color=0001]2,000 [color=ffff]a pop sound for
scrubbing? Not too shabby, eh?[page break]And if we're changin' out abilities,
you need ability chunks, but it's a
[color=0001]bloomin' steal [color=ffff]compared to regular
gear, yeah?[page break]Fink of it as me [color=0001]gettin' in the spirit
of things[color=ffff]. I ain't much for the
festival proper, but I like to see
folks celebratin'.[page break]What are you waitin' for? Go break
in that Splatfest Tee in battle, then
come back anytime you want a deal
on spiffin' it up. [color=0001]As many times as
you like[color=ffff], love.`,FirstRank_10_15:`Well, well, we've got a right proper
veteran on our hands now, don't we?[page break]Ah, but I see that gleam in your eye.
You're not satisfied wif where you're
at. Not by a long shot.[page break]I'm excited to see how far you can
go, mate. Might get myself a cuppa
while I sit back and watch.[page break]Anyhow, not that you need the
reminder, but use [group=0003 type=0000 params=00 00 80 3f 00 00 00 00] to scope out
anyone in the plaza, and then call me
if you fancy a piece of gear.`,FirstRank_16_19:`Hold it, love! Izzat really you? Oi!
How'd you freshen up so fast?[page break]I knew it. You're aiming for the
A-list, and you're well on your way.[page break]You let ol' Spyke know if there's
anything he can do to help you
out, yeah?[page break]Always happy to place an order.
So stay lively wif [group=0003 type=0000 params=00 00 80 3f 00 00 00 00], and call
me anytime.`,FirstRank_20_20:`Blimey! I can't believe the likes of
you would come round and visit
the likes of me now that you're
a bloomin' STAR. I'm honored, mate.[page break]Though it is odd... You remind me of
someone I used to know—I mean the
absolute spitting image! But it
couldn't be you... Nah, no way.[page break]Anyhow, as always, feel free to scope
anyone out using [group=0003 type=0000 params=00 00 80 3f 00 00 00 00], then ring me
up to put in an order.`,FirstRank_4_9:`Well then, it seems someone's gone
and found a little freshness, haven't
they? Talkin' about you, mate.[page break]'Course, a little freshness is only
gonna get you a little way. If you
fancy yourself makin' a big splash
in this town, the [color=0001]gear[color=ffff]'s gotta be
up to snuff, innit?[page break]Picture this. You spy someone
strolling about, looking fresher
than you could have imagined.
"Wot gear is THAT," you fink.
We've all been there, love.[page break]Next time you scope someone out
wif [group=0003 type=0000 params=00 00 80 3f 00 00 00 00] and they're wearin' the
exact [color=0001]gear [color=ffff]that would look better
on YOU, you ring me up, and I'll put
in an [color=0001]order[color=ffff].[page break]Yeah, yeah, it might not have the
exact same abilities, but who'll be
the wiser? Here's my number, mate.`,FirstRank_4_9_Short:`Well then, it seems someone's gone
and found a little freshness, haven't
they? Talkin' about you, mate.[page break]'Course, a little freshness is only
gonna get you a little way. If you
fancy yourself makin' a big splash
in this town, the [color=0001]gear[color=ffff]'s gotta be
up to snuff, innit?[page break]But you already know all that, yeah?
Blimey, I've already wagged my chin
more than enough. Let's get on wif it.[page break]You see some [color=0001]gear [color=ffff]you fancy on
someone else? You call me, and I'll
put in an [color=0001]order[color=ffff].[page break]Yeah, yeah, it might not have the
exact same abilities, but who'll be
the wiser? Here's my number, mate.`,FirstShell:`Hang on, love... Wot's that I smell?[page break]Oi! It's unmistakable, innit? You've
got [color=0001]Super Sea Snails [color=ffff]on ya! Not to
be pushy, but why don't you hand
'em over, yeah?[page break]See, I can use them little lids on top
of the snails to [color=0001]raise your gear's
star power[color=ffff].[page break]I don't need the lids myself. Nah, I'm
after the gooey stuff on the inside.
Maybe ya didn't wanna know that...[page break]Maybe you're finkin'...my gear's all
sorted wif three full ability slots.
Why should I bother? Well, love,
I can also use the lids to [color=0001]randomly
reroll those abilities[color=ffff]. It's win-win.[page break]Wot else are ya gonna do wif 'em?
You can trust me, mate. Hand over
the [color=0001]Super Sea Snails[color=ffff], yeah?`,FirstShell_Short:`Hang on, love... Wot's that I smell?[page break]Oi! It's unmistakable, innit? You've
got [color=0001]Super Sea Snails [color=ffff]on ya! Not to
be pushy, but why don't you hand
'em over, yeah?[page break]See, I can use them little lids on top
of the snails to [color=0001]raise your gear's
star power[color=ffff] or randomly reroll abilities
if you've got three full slots.[page break]I don't need the lids myself. Nah, I'm
after the gooey stuff on the inside.
Maybe ya didn't wanna know that...[page break]Wot else are ya gonna do wif 'em?
You can trust me, mate. Hand over
the [color=0001]Super Sea Snails[color=ffff], yeah?`,GoodBye:"Been a pleasure...",Hello:"S'appening, mate?",NotEnoughRank:`Now, who are you? Not to be harsh,
love, but you're lookin' right moldy
at the moment.[page break]I can't be dealin' wif folks below
[color=0001]level 4 [color=ffff]on the freshness scale.[page break]So maybe go do a bit of battlin'
before you come back, yeah?`,Offline:`Wot's all this, then? It's rubbish, is
wot it is. You're offline. Get to the
[color=0001]lobby[color=ffff] and get [color=0001]online[color=ffff] if you want me
to take you serious, mate!`,RandSkill_EmptySlot:`Oi! This gear's slots [color=0001]aren't all
filled[color=ffff] up.[page break]Take note, love. I can only reroll
slots on gear where [color=0001]all 3 slots are
full[color=ffff]. Yeah?`,RandSkill_First:`Right, then. Hand over a [color=0001]Super Sea
Snail[color=ffff], and I'll randomly reroll all the
[color=0001]secondary gear abilities[color=ffff] on a piece
of gear.[page break]You'll get [color=0001]ability chunks[color=ffff] back from
the abilities that were already
there, yeah?[page break]Oh, and...we're talkin' gear that has
[color=0001]3 slots[color=ffff] that are [color=0001]all filled[color=ffff] wif
abilities? That's the only kind
I can reroll.[page break]Now then, let's see here...`,RandSkill_NotEnoughRarity:`This gear's still short on [color=0001]slots[color=ffff], innit?
'Cause its [color=0001]star power [color=ffff]is too low.[page break]I can only reroll abilities on gear
wif [color=0001]3 slots[color=ffff], and only when those
are all [color=0001]filled[color=ffff].`,RandSkill_NotEnoughShell:`Wot are you on about? You expect
me to help you when you don't have
a single [color=0001]Super Sea Snail[color=ffff]?[page break]Come back when you find at least
one of 'em, yeah?`,RandSkill_NotFirstShell:`Ah, sorry, love, but it's a bit early
for you to be doing that.`,RandSkill_Q:"Reroll 'em?",RandSkill_Select:`Got gear wif all three slots filled?
If so, I can reroll all of its [color=0001]secondary
abilities[color=ffff] for a [color=0001]Super Sea Snail[color=ffff], mate.`,RareUp_AlreadyMax:`This gear's already burstin' wif
star power, love. I can't do nuffin'
to increase it.`,RareUp_FestT:`That's a [color=0001]Splatfest Tee[color=ffff], innit? Sorry—
I can't raise the [color=0001]star power[color=ffff] on those
any higher.`,RareUp_First:`If you can spare any [color=0001]Super Sea Snails[color=ffff]
for me, I can use 'em to [color=0001]boost your
gear's star power[color=ffff].[page break]More star power means more [color=0001]slots[color=ffff],
yeah? And that means more abilities.
Once it's all maxed on slots, then it'll
start to earn extra [color=0001]gear experience[color=ffff].
Brilliant, innit?[page break]So if you've got a favorite somefin
or other, it's a no-brainer to pump
up the star power on it. Trust me
on that, mate![page break]Now, I won't haggle over [color=0001]Super Sea
Snails[color=ffff]. But I will tell ya up front that
the higher the star power, the
more it's gonna cost ya.`,RareUp_NoShell:`Wot are you on about? You expect
me to help you when you don't have
a single [color=0001]Super Sea Snail[color=ffff]?[page break]Come back when you find at least
one of 'em, yeah?`,RareUp_NotEnoughShell:`Oi! You're a bit short on [color=0001]Super Sea
Snails[color=ffff], mate. I get it—they don't
exactly grow on trees, do they?
But I'm afraid my prices are firm.`,RareUp_NotFirstShell:`Ah, sorry, love, but it's a bit early
for you to be doing that.`,RareUp_Q:"Raise star power?",RareUp_Select:`Which [color=0001]gear[color=ffff]'s star power are we
raising, love? If you've got the
[color=0001]Super Sea Snails[color=ffff], I can make
it happen.`,RecieveGeso_First:`Been doing a bit of that online
shopping? Good on ya, mate.
Some deals to be had over in
the [color=0001]SplatNet Shop[color=ffff]. And the best
part? You can still collect from me.[page break]Might even find somefing rare wif
[color=0001]different gear abilities[color=ffff] than you
can find in town. That Annie curates
a proper selection.[page break]I'll stop yakkin' now, but go on and
hit [group=0003 type=0006 params=00 00 80 3f 00 00 00 00] for [color=0001]more info[color=ffff] about the
[color=0001]SplatNet Shop[color=ffff], yeah?[page break]Now, what was that order number...`,Recieve_ArriveGeso:`I've got the SplatNet Shop gear you
ordered, mate.`,Recieve_ArriveNearOrder:`This'll do, won't it? Maybe not quite
wot you wanted, but sometimes that
turns out to be wot's needed.`,Recieve_ArriveNotOrder:`Oi, this was the best I could do.
Hope it does the job, mate.`,Recieve_ArriveOrder:`Don't ask no questions, but I found
exactly wot you had in mind. Not too
shabby, innit?`,Recieve_BuyQ:"You want this?",Recieve_HaveSameGear:`You've already got some [color=0001]gear[color=ffff] just
like this. Want to [color=0001]replace[color=ffff] the gear
you've got wif this [color=0001]new gear[color=ffff]?`,Recieve_NotArrive:`Sorry, love, but I need a little time to
find the stuff you ordered. Try comin'
back [color=0001]tomorrow[color=ffff], yeah?`,Recieve_NotBuy:`Not interested? Come see me [color=0001]before
tomorrow[color=ffff] if you change your mind,
else I'll bin it.`,Recieve_NotBuyGeso:`Nah? Not wot you had in mind?
Well, come see me again if that
changes, love.`,Recieve_NotEnoughMoney:`YOU WOT, MATE?! Look, I'm seein'
fings a bit different these days,
but that don't mean you can take
advantage of ol' Spyke.`,Recieve_NotOrder:`You ain't [color=0001]ordered[color=ffff] anyfing! Try
[color=0001]ordering[color=ffff] somefing first.`,Skill_ExSkillDouble:`Careful, mate. If you swap out
the [color=0001]Ability Doubler [color=ffff]for a different
ability, you [color=0001]can't get it back again[color=ffff].`,Skill_First:`Oi, don't tell me you never [color=0001]added gear
abilities[color=ffff] before![page break]It's child's play if you've got the
[color=0001]ability chunks[color=ffff] for the job. You can
even swap in a new ability for an
existin' one, yeah?[page break]It's not even wasteful, mate. You
get some [color=0001]ability chunks in return[color=ffff]
for the old ability, so don't let that
stop ya.[page break]Go on, then. If you've got some
ability chunks and some abilities
that need addin' or changin', give
it a try!`,Skill_Q:"Lookin' right?",Skill_Select:`Right. Go on and choose the [color=0001]gear[color=ffff]
and [color=0001]ability [color=ffff]you want.`,Skill_Set:`You're all sorted, mate. Hope it helps
you out in battles.`},"CommonMsg/RegionLanguageID":{EUen:"English",EUes:"Spanish (Spain)",EUfr:"French (France)",JPja:"Japanese",USen:"English",USes:"Spanish (Latin America)",USfr:"French (Canada)"},"CommonMsg/Replay/ReplayDetail":{Tag_CountLead:"We've taken the lead!",Tag_ExtraTime:"Overtime!",Tag_LastOneMinute:"1 minute left!",Tag_TclNoroshiAppear:"The Ultra Signal appeared!",Tag_TclNoroshiGet:"We secured the Ultra Signal!",Tag_VclGoalOpen:"We broke their barrier!",Tag_VglCheckPointPass:"We broke through the checkpoint!",Tag_VlfCheckPointPass:"We're past checkpoint [group=0002 type=0000 params=00 01 00 00]!",Tag_WipeOut:"WIPEOUT!"},"CommonMsg/SeasonName":{Autumn:"Drizzle Season",Spring:"Fresh Season",Summer:"Sizzle Season",Winter:"Chill Season"},"CommonMsg/Sound/ArtistName":{"000":"Squid Squad","001":"Chirpy Chips","002":"Hightide Era","003":"Wet Floor","004":"Bottom Feeders","005":"Ink Theory","006":"SashiMori","007":"Diss-Pair","008":"Squid Sisters","010":"Deep Cut","011":"C-Side","012":"Front Roe","013":"Damp Socks feat. Off the Hook","014":"Turquoise October","015":"DJ Octavio","016":"Grizzco","017":"Deep Cut x Squid Sisters","018":"ω-3","019":"Seven Seas Crew","020":"Ancho-V Games","021":"Stars in the Deep","022":"Mimicry","023":"Wash Out","024":"Firefly","025":"On the Clock","026":"Anxiety Society","027":"Backwash","028":"Turf Love","029":"Wading Room","030":"New Shores","031":"Bonfire","032":"All Swell","033":"Coral Kiss","034":"Crevasse","035":"Aquariyum","036":"Pianissimo","037":"Missing Ink","038":"Anglerfish","039":"Callie","040":"Marie","043":"Shiver","044":"Frye","045":"Big Man","046":" ","047":"Octoplush","048":"Squid Sisters feat. Ian BGM","049":"Yoko & the Gold Bazookas","050":"Chroma Chaos","051":"Medusa","052":"Nothing in My Wave","053":"H2Whoa","054":"Bloody Hook","055":"Decksterity"},"CommonMsg/Sound/MusicName":{BGM_Versus_Fes_Thunder_04:"Liquid Sunshine",Blitz_ABXY_01:"Blitz It!",Blitz_ABXY_02:"Wave Prism",Blitz_CurrentRip_01:"Broken Coral",Blitz_CurrentRip_02:"Riptide Rupture",Blitz_FromBottom_01:"Shipwreckin’",Blitz_FromBottom_02:"Fins & Fiddles",Blitz_FromBottom_03:"Seafoam Shanty",Blitz_Gasshokukin_01:"Seasick",Blitz_Gasshokukin_02:"Kinetosis",Blitz_SashiMori_01:"Chopscrewey",Blitz_SashiMori_02:"Entropical",Blitz_WetFloor_01:"Inkoming!",Blitz_WetFloor_02:"Rip Entry",Blitz_WetFloor_03:"Undertow",Blitz_WetFloor_04:"Don't Slip",Blitz_WetFloor_05:"Endolphin Surge",Coop_BigRun:"Bait & Click",Coop_Event:"Fishing Frenzy",Coop_Event2:"Frothy Waters",Coop_Heavy:"Frantic Aspic",Coop_Main:"Deluge Dirge",Coop_Menu:"Happy Little Workers - 24/7 Mix",Coop_Menu_BigRun:"Bait & Click (Mutation)",Coop_Okashira:"Toxic Anoxic",Coop_Result:"Not Bad (Do Better)",FirstLaunch_PlayerMake_temp:"What's Your Style?",Gambit_ABXY_01:"Shellfie",Gambit_ABXY_02:"Split & Splat",Gambit_HightideEra_01:"Hooked",Gambit_HightideEra_02:"Sucker Punch",Gambit_SquidSquad_01:"Splattack!",Gambit_SquidSquad_02:"Ink or Sink",Gambit_SquidSquad_03:"Seaskape",Gambit_SquidSquad_04:"Kraken Up",Gambit_SquidSquad_05:"Metalopod",LobbyLocal:"The Shoal",LobbyVersus_01_Fsodr:"Inkopolis Lobby",LobbyVersus_03_Fsodr:"Inkopolis News",LobbyVersus_Fes_02:"Soak & Stomp",LobbyVersus_Fes_Maple:"Deepers Creepers",LobbyVersus_Fes_Stove:"Yule Tide",LobbyVersus_Holiday_Main_01:"Drip Feed",LobbyVersus_Sub_01:"Heliocentri City",LobbyVersus_Sub_02:"Fuzzy Dazzler",LobbyVersus_Sub_03:"Blop Bop",LobbyVersus_Sub_04:"Gilded Cage",LobbyVersus_Sub_05:"Dressed to Krill",LobbyVersus_Sub_06:"Slick Moves",LobbyVersus_Sub_07:"Belly Flop",LobbyVersus_Sub_08:"Gillty",LobbyVersus_Sub_09:"Pour It On",LobbyVersus_Sub_10:"Pop 'n' Schlock",LobbyVersus_Sub_11:"Clashing Colors",LobbyVersus_Sub_12:"Dorsal Slicer",LobbyVersus_Weekday_Main_01:"Sinkopated",Minigame_Battle_01:"Tableturf Main Theme",Minigame_Edit:"Tableturf Card List",Minigame_Itemselect:"Tableturf Deck Selection",Minigame_Last3Turn:"Tableturf Three Turns Remaining",Minigame_Levelselect:"Tableturf Level Selection",Minigame_Result_01:"Tableturf Win Theme",Minigame_Result_02:"Tableturf Loss or Draw Theme",Mission_Boss_Kumasan01:"Bear with Me",Mission_Boss_Kumasan02:"Calamari Inkantation 3MIX",Mission_Boss_Surimi03:"Surprise and Shine",Mission_Boss_Takowasa:"I'm Octavio (F34RME Remix)",Mission_DemoScene_D1_01:"Cap'n Cuttlefish's Theme",Mission_DemoScene_D3_03:"Meeting the New Squidbeak Splatoon",Mission_Demo_SurimiTheme:"Deep Cut's Theme",Mission_Staffroll:"Wave Goodbye",Mission_Stage_Alterna_01:"Nine Out of Tension",Mission_Stage_Alterna_02:"Underwater Neon",Mission_Stage_Alterna_03:"Flop to It",Mission_Stage_Alterna_04:"Octoling Rendezvous",Mission_Stage_Alterna_C01:"Smoke and Mirrors",Mission_Stage_Alterna_C02:"Ride or Fry",Mission_Stage_Alterna_C03:"With Flying Colors",Mission_Stage_Alterna_C04:"Seep & Destroy",Mission_Stage_Alterna_C05:"Marine Machines",Mission_Stage_Alterna_C06:"#35 caught",Mission_Stage_Alterna_C07:"Don't Flinch",Mission_Stage_Crater_01:"Crater Eighters Routine",Mission_Stage_Rocket_01:"In Filtration",Mission_Stage_Rocket_02:"Hide and Sleek",Mission_Stage_Rocket_04:"Smeared Canvas",Mission_World_Alterna_1_03:"Sandcastles",Mission_World_Alterna_2_03:"Sudden Depth",Mission_World_Alterna_3_03:"Two Shadows in the Sun",Mission_World_Alterna_4_03:"Dead Sea",Mission_World_Alterna_5_03:"Whirlpool Tune",Mission_World_Alterna_6_03:"Hyper Diver",Mission_World_Crater_01:"The Crater",Plaza_Fes_Afterfes_IdolSong:"Daybreaker Anthem",Plaza_Fes_Day1_Fsodr:"City of Color (2023)",Plaza_Fes_Day1_Mikoshi_Fuuka:"Anarchy Poisons (Bird Mix)",Plaza_Fes_Day1_Mikoshi_Mantaro:"Anarchy Poisons (Boar Mix)",Plaza_Fes_Day1_Mikoshi_Utsuho:"Anarchy Poisons (Snake Mix)",Plaza_Fes_Day2_Fsodr:"Tomorrow's Nostalgia Today",Plaza_Fes_Day2_IdolSong:"Anarchy Rainbow",Plaza_GearShop:"Dripping with Style",Plaza_News:"Anarchy Splatcast",Privilege01_Fsodr:"Ink Me Up",Privilege02_Fsodr:"Now or Never!",Privilege03_Fsodr:"Maritime Memory",Privilege04_Fsodr:"Calamari Inkantation",Privilege05_Fsodr:"Bomb Rush Blush",Privilege06_Fsodr:"Tide Goes Out",Privilege07_Fsodr:"City of Color",Versus_BlitzLast1min:"Now or Never!",Versus_Fes_Thunder_01:"Fins in the Air",Versus_Fes_Thunder_02:"Till Depth Do Us Part",Versus_Fes_Thunder_04:"Big Betrayal",Versus_Fes_Thunder_Last1Min:"Now or Never!",Versus_GambitLast1min:"Now or Never!",Versus_Last1Min:"Now or Never!",Versus_Thunder_01:"Clickbait",Versus_Thunder_02:"Splattack!",Versus_Thunder_03:"Headhammer",Versus_Thunder_04:"Paintscraper",Versus_Thunder_05:"Triple Dip",Versus_Thunder_06:"Sea Me Now",Versus_Thunder_07:"Sandy Side Up",Versus_Thunder_08:"Candy-Coated Rocks",Versus_Thunder_09:"Tentacle to the Metal",Versus_Thunder_10:"Ska-BLAM",Versus_Thunder_11:"Three-Horn Circus",Versus_Thunder_12:"Rockagilly Blues",Versus_Thunder_13:"Ripstop & Go",Versus_Thunder_14:"Aquasonic",Versus_Thunder_15:"Slopping Spree",Versus_Thunder_16:"No Quarters",WarmingUp:"Clickbait (Splash Sessions Demo)"},"CommonMsg/SystemWindow/SystemMsg_Plaza":{BtnL_EShopJump:"Back",BtnR_EShopJump:"Nintendo eShop",Msg_EShopBack:`To access this content, close the Splatoon 3 game
after your download is complete, then reopen
the game.`,Msg_EShopJump:`To enter this area, you need to purchase and
download the Splatoon 3: Expansion Pass – 
Inkopolis & Side Order. For more info, please
visit Nintendo eShop.`},"CommonMsg/Talk/TalkShopWeaponExp":{Blaster_LightLong_00:`The [color=0001]Rapid Blaster Pro[color=ffff] owes its
incredible range to a chamber system
that delays ink oxidization to the last
possible moment![page break]With that technology in hand, try
catching your enemies in a little
[color=0001]Toxic Mist [color=ffff]before giving them a few
inksplosions as a parting gift.[page break]And if anyone gets too close?
Fire up the [color=0001]Ink Vac[color=ffff],[color=0001] [color=ffff]and turn their
own inkpower against them! This is
a set that will make the tactically
inclined player veeery happy.`,Blaster_LightLong_01:`The [color=0001]Rapid Blaster Pro Deco [color=ffff]is a
Rapid Blaster Pro that's been
spiffed up by top designers and
paired with a new loadout.[page break]You'll get the same performance
you're used to, but with the [color=0001]Angle
Shooter[color=ffff] sub, it's easier than ever
to take out distant foes.[page break]And having the [color=0001]Killer Wail 5.1 [color=ffff]special
in your back pocket to clean up
loose ends is always a treat. No one
can escape the wail![page break]This isn't the best set for up-close-
and-personal splatting, but give it
a try if you like to keep your
distance in battle!`,Blaster_LightShort_00:`You know how blasters tend to have
a low rate of fire? Not the [color=0001]Clash
Blaster[color=ffff]! Its speedy shots are great
for keeping foes at bay![page break]Now, it's not going to win any awards
for power, but when you have [color=0001]Splat
Bombs[color=ffff] to corner your enemies, it'll
get the job done.[page break]And if an opponent still manages to
slip away? That's when you trash
'em with the [color=0001]Trizooka[color=ffff]. Talk about
a chaotic combo. If that sounds fun,
this loadout is for you!`,Blaster_LightShort_01:`The [color=0001]Clash Blaster Neo[color=ffff] offers the
same functionality as the original
Clash Blaster...but with a fresh
new look and a redeveloped loadout![page break]First, you've got [color=0001]Curling Bombs [color=ffff]to
help you glide across the map
toward your enemies. You know what
to do when you get there, right?[page break]And just when they're onto you,
you can fire off the [color=0001]Super Chump[color=ffff]
to send a bunch of exploding Super
Jump decoys into the mix.[page break]This is a balanced set that can help
you pull off some flashy victories.
Give it a try!`,Blaster_Light_00:`The [color=0001]Rapid Blaster[color=ffff] lives up to its
name with an improved rate of fire
and modest ink consumption.[page break]Now, if you know me at all, you know
I'm going to tell you about a big
trade-off, and it's this: low power.
But using the [color=0001]Ink Mine [color=ffff]to reveal
enemy positions helps make up for it.[page break]What I'd do with a combo like this is
use the Rapid Blaster to create a
whirlwind of ink, then take it to the
next level with a [color=0001]Triple Inkstrike[color=ffff].[page break]This setup lets you focus in on
key areas of the map—whether you're
defending the home base or pushing
an advance into hostile territory.`,Blaster_Light_01:`The [color=0001]Rapid Blaster Deco [color=ffff]is a cool,
decorated version of the Rapid
Blaster. Not that the original isn't
cool! You'll have to decide for
yourself which one you like better.[page break]Maybe the overall loadout will help
you make the choice! This one comes
with the [color=0001]Torpedo [color=ffff]sub to help make
up for the main weapon's somewhat
low attack power.[page break]And for those moments when you
want to breach the front lines,
you've got the [color=0001]Inkjet [color=ffff]special! Not a
bad little surprise to keep in your
back pocket.[page break]This is a versatile set that can really
shine with the right user, so I hope
you get a chance to try it out!`,Blaster_Long_00:`The [color=0001]Range Blaster[color=ffff] delays the
oxidization of ink, which extends
the range before it explodes.[page break]Let that sink in. It's SO COOL how
it works! Of course, you lose a
little fire rate, but that's OK when
you have [color=0001]Suction Bombs[color=ffff] to flush
out your opponents.[page break]And with the [color=0001]Wave Breaker [color=ffff]at your
disposal to reveal their positions,
it's almost like your enemies will
have nowhere to hide![page break]I recommend this loadout to anyone
who fancies themselves a master
of the hunt.`,Blaster_Middle_00:`What can I say about the [color=0001]Blaster[color=ffff]
other than...it blasts. HARD.
When those balls of ink explode,
they can even tag enemies hiding
behind walls.[page break]Now, the range isn't great, and the
rate of fire leaves a little to be
desired, but you can always coax
an enemy out of hiding with an
[color=0001]Autobomb[color=ffff], can't you?[page break]On the other hand, if you're getting
charged, that's when it's time to
break out the [color=0001]Big Bubbler[color=ffff].[page break]Basically, if YOU want to be the
one controlling the action, this
is the loadout for you.`,Blaster_Middle_01:`Ah, the [color=0001]Custom Blaster[color=ffff]! To call it a
customized Blaster would be
accurate, but that doesn't tell the
whole story. And we need the whole
story, don't we?[page break]Made with official Blaster parts, the
Custom Blaster is best suited for
ranged combat. Use the [color=0001]Point Sensor[color=ffff]
sub to mark your enemies for
immediate demolition![page break]If the other team DOES get too close
for comfort, you've got the [color=0001]Triple
Splashdown[color=ffff] to hit them with three
times the Splashdown! It's also a
great way to ink turf.[page break]I recommend this powerful set to
players who can't stand the sight
of a single enemy on their home turf!`,Blaster_Precision_00:`The [color=0001]S-BLAST '92[color=ffff] is an exciting new
blaster that's equipped with two
distinct ink-firing mechanisms.
You'll switch between the two on
the fly based on your movements![page break]When firing normally, this is a weapon
with balanced accuracy, range, and
power. It won't overwhelm anyone
with sheer force, but I think you'll
hit the target more often than not.[page break]However, when you fire while jumping,
this weapon transforms into a heavy-
duty powerhouse, launching large
blasts of ink that explode nearby.
It's a whole different beast![page break]Keep in mind that the range will
dip in this mode, but you've got
the [color=0001]Sprinkler [color=ffff]sub and [color=0001]Reefslider[color=ffff]
special to more than make up the
difference.[page break]Will you be one of the first to
master this unique new weapon?
Why not? Give it a try!`,Blaster_Precision_01:`What a difference a year makes!
The [color=0001]S-BLAST '91 [color=ffff]comes in a different
colorway than the S-BLAST '92—not
to mention it has an entirely new
loadout to play with![page break]Or is it an "old" loadout, since it's
technically an earlier model of
S-BLAST? Either way, you now have
[color=0001]Burst Bombs [color=ffff]to help make up for the
relatively slow fire rate of your main.[page break]Find yourself in a tight spot? It's
nice to have the [color=0001]Booyah Bomb [color=ffff]special
in your back pocket. Create a little
space, and then push forward with
your team![page break]Burst Bombs...Booyah Bombs...
I guess you could say this set is
"the bomb" overall! Or...you don't
have to say that. I...actually can't
believe I just said it...`,Blaster_Short_00:`The [color=0001]Luna Blaster[color=ffff] may look cute, but
its short-range exploding ink shots
pack a serious wallop.[page break]If you find that your enemies are
dancing just outside that range,
toss a few [color=0001]Splat Bombs [color=ffff]to keep 'em
on their toes.[page break]And for the ones sniping you from
FAR away, fire up the [color=0001]Zipcaster[color=ffff],
sneak behind 'em, and...well, you
know what to do from there.[page break]Really, this set is ideal for players
who want to read the terrain and
react to their opponents' moves.`,Blaster_Short_01:`Some say the [color=0001]Luna Blaster Neo [color=ffff]is
just a Luna Blaster with a sweet
new design. I...may have said that
myself. But the loadout as a whole
is actually quite different![page break]Of course, the weapon packs that
same great punch as the original
Luna Blaster, but if you find the
range isn't enough, now you can
fire off a [color=0001]Fizzy Bomb[color=ffff].[page break]And for those times you're politely
knocking on the door but can't break
through, the [color=0001]Ultra Stamp [color=ffff]can help
kick that thing down and get the
splat party started![page break]This set is cute as all get-out, but
it's deadlier than a bathtub full of
alligators. If you're into that kind
of contrast, give it a try!`,Brush_Heavy_00:`If you like brushes but wish they
had a bit more range and power,
then you've got to experience the
[color=0001]Painbrush [color=ffff]for yourself![page break]It's all thanks to a unique 90 degree
rotation by the brush head, giving
this weapon the most range of ANY
brush out there.[page break]The trade-off is that each swing is a
bit slower, but this is still a brush
we're talking about. You'll be flying
across the map, and you can use
[color=0001]Curling Bomb [color=ffff]to blaze your path.[page break]Add in the [color=0001]Wave Breaker [color=ffff]special to
light up your enemies, and you've
got a potent set designed for speed
and extreme range!`,Brush_Heavy_01:`You wouldn't paint a house and a
miniature with the same paintbrush,
would you? Well, the same applies
to battle, and that's why I offer
the [color=0001]Painbrush Nouveau[color=ffff]![page break]Granted, it technically IS the same
as the base Painbrush, but with a
new loadout, it offers a totally
different battle experience.
I'll explain, of course![page break]The [color=0001]Point Sensor [color=ffff]sub allows you to
mark enemies, making it all the easier
to glide up and splat them with your
brush. Didn't get 'em all? Wipe the
canvas clear with [color=0001]Tenta Missiles[color=ffff]![page break]I think you'll find the other team
has nowhere to hide when you
master the use of this powerful
brush loadout.`,Brush_Mini_00:`The [color=0001]Inkbrush[color=ffff] is a super-light brush
weapon that lets you ink your way
forward with blistering speed![page break]There's not much room for power
when you're moving that fast, but
you can keep counterattacks at
bay with plenty of [color=0001]Splat Bombs[color=ffff].[page break]Add the [color=0001]Killer Wail 5.1 [color=ffff]to the mix,
and you've got a combo that will
confuse and annoy your opponents
into submission![page break]I can see it now... You blaze across
battle lines...toss a Splat Bomb, and
trigger the Killer Wail just in time to
headbang along as the clock runs out.
Whew! That's inking outside the box!`,Brush_Mini_01:`If you like the Inkbrush but you're
not thrilled with its base loadout,
why not try something new? By that
I mean the [color=0001]Inkbrush Nouveau[color=ffff]![page break]You can use that patented Inkbrush
mobility to glide across the terrain,
leaving [color=0001]Ink Mines [color=ffff]in all sorts of
INK-onvenient places for the other
team as you go.[page break]Find yourself in a tight spot? Blast
your way out with the [color=0001]Ultra Stamp[color=ffff]!
Then you can continue inking up
enemy territory like a postmodern
painter gone wild.[page break]This is the perfect set for battle
artists who can't stand to stand still!`,Brush_Normal_00:`The [color=0001]Octobrush[color=ffff] has dense bristles
that fling a thick stream of ink with
each slash. It's a heavier entry in the
[color=0001]brush[color=ffff] weapon class, which is known
for being light and nimble.[page break]But even with those heavy brush
strokes, you won't be able to reach
everywhere—and that's where the
[color=0001]Suction Bombs [color=ffff]come in.[page break]Lastly, if you're up against enemies
with ranged weapons who just won't
engage up close, you've got the
[color=0001]Zipcaster [color=ffff]in your back pocket. Zip
on over and give 'em what for![page break]This is a user-friendly loadout that's
easy for beginner brushers but
capable enough for true artistes!`,Brush_Normal_01:`Nouveau means "new," and
Octobrush means "Octobrush," so
the [color=0001]Octobrush Nouveau [color=ffff]is like a
"new Octobrush"![page break]That said, it offers the same level
of performance you may already know
from the Octobrush but with a
loadout designed for teamwork.[page break]Use your [color=0001]Squid Beakons [color=ffff]to rally
teammates to critical spots on the
map, whether attacking or retreating.
Nothing zips you back to the fray
as quickly![page break]And when you're on the front line,
the [color=0001]Ink Storm [color=ffff]special is a great way
to hold your position. I recommend
this set for aggressive players who
splat and get splatted up front!`,Charger_Keeper_00:`I debuted this weapon before, but I'm
as proud as ever of the [color=0001]Goo Tuber[color=ffff], a
charger with the upgraded ability to
store your charge even longer![page break]It offers high-pressure ink storage
for extended periods, allowing you to
stay submerged while you wait for
the perfect shot![page break]In exchange, it takes a bit longer to
charge, but this baby can even [color=0001]store
a[color=ffff] [color=0001]partial charge[color=ffff], giving you the
ultimate in flexibility.[page break]For instance, while you use a [color=0001]Torpedo[color=ffff]
to reveal enemy positions, you can
be comfortably charging away in
a safe spot.[page break]Then, when you're ready to ink 'em
up, zip to the most advantageous
spot and snipe away! If you miss,
you have [color=0001]Tenta Missiles [color=ffff]in your back
pocket to finish the job.[page break]If you want to take your strategy to
the next level by storing charges
and taking advantage of each stage's
unique terrain with your mobility,
this set is for you!`,Charger_Keeper_01:`The [color=0001]Custom Goo Tuber[color=ffff] has that
classic Goo Tuber performance but
with a fresh new look and a new
loadout that can really shake up
your strategy![page break]For example, when you use [color=0001]Fizzy
Bombs[color=ffff] to ink a path forward, you
can load up a stored charge and
blast ahead.[page break]Enemies corner you while you're
on the offensive? You've got the
[color=0001]Ultra Stamp [color=ffff]special in your back
pocket! It's so satisfying to turn
the tables like that...[page break]And remember—stored charges are
great, but this weapon still packs
a punch on a partial charge. Don't
be shy with that trigger button!`,Charger_Light_00:`The [color=0001]Bamboozler 14 Mk I[color=ffff] is a tribute
to a weapon used by the leader of
the famous Squidbeak Splatoon, but
retooled for the battles of today![page break]I've used bamboo in my version to
remain faithful to the original design,
but as a trade-off, it [color=0001]can't store a
charged shot[color=ffff].[page break]Is it the most powerful charger?
No. Is it the most mobile charger?
Also no. But with "good enough"
power and charging speed, I think
this is a compromise that WORKS.[page break]Plus, when you have [color=0001]Autobombs [color=ffff]to
sniff out enemy positions, you can
put yourself in the perfect spot to
charge up and attack![page break]For the coup de grâce, activate your
[color=0001]Killer Wail 5.1 [color=ffff]and take a moment to
pay tribute to the legendary leader
who inspired this weapon.`,Charger_LongScope_00:`The [color=0001]E-liter 4K Scope[color=ffff] delivers the
long-range action of the 4K model
with a scope for added accuracy![page break]Though it boasts a shot range that
beats almost every other charger,
you'll want to be extra aware of your
surroundings when scoping in.[page break]Unlike the E-liter 4K, the scoped
configuration won't let you store a
charged shot, so keep that in mind
as you adjust to the feel of using
a scope.[page break]It comes with the same [color=0001]Ink Mines [color=ffff]and
[color=0001]Wave Breaker [color=ffff]special as the base
E-liter 4K, so you can apply the same
strategy—stay safe while you zoom
in and splat unsuspecting foes!`,Charger_Long_00:`With its pressurized polymer
construction, the [color=0001]E-liter 4K[color=ffff] has
a remarkably long range, even for
a charger![page break]To get the most out of it, you can
set [color=0001]Ink Mines [color=ffff]for opponents who get
too close, then use the [color=0001]Wave Breaker[color=ffff]
special to reveal those who are
slinking around in the ink.[page break]Still, this set is all about long-range
accuracy, and in the right hands, it
will definitely hit the target. I hope
it goes to a good home!`,Charger_NormalScope_00:`The [color=0001]Splatterscope [color=ffff]is a Splat Charger
with an added scope for more
effective long-distance aiming.[page break]It's great for hitting far-off targets,
but your view is narrow while
charging, so be extra careful![page break]Also, that fancy scope takes up
space, so something had to go.
In this case, we had to nix the
ability to [color=0001]store your charge[color=ffff].[page break]But hey, if you like to stay safe
and shoot from afar, this could be
the charger for you![page break]When you're not scoping and sniping,
you've also got [color=0001]Splat Bombs [color=ffff]and the
[color=0001]Ink Vac [color=ffff]at your disposal, so this is
a more balanced set than it would
appear. Give it a try!`,Charger_NormalScope_01:`If you've ever wished that your
Z+F Splat Charger had a way to
see just...a bit...farther...now it
kinda does! They call it the [color=0001]Z+F
Splatterscope[color=ffff],[color=0001] [color=ffff]and it's got a scope![page break]Keep in mind that using the scope
limits your field of view—and with
this weapon specifically, keeps you
from storing a charge.[page break]But with the [color=0001]Splash Wall [color=ffff]and [color=0001]Triple
Inkstrike[color=ffff] in your back pocket, I think
the benefits of this loadout are
clear as day!`,Charger_Normal_00:`Simply put, the [color=0001]Splat Charger[color=ffff] is a
[color=0001]charger[color=ffff]-type weapon designed for
long-range offense.[page break]Its operation is standard—hold down
[group=0003 type=000c params=00 00 80 3f 00 00 00 00] to charge up ink, then release
[group=0003 type=000c params=00 00 80 3f 00 00 00 00] to fire it all out at once, inking
a long path in an instant![page break]Ah, but here's a key difference...the
Splat Charger can actually [color=0001]hold its
charge[color=ffff] for a short period while you
swim. Tactically speaking, that's a
game-changing advantage![page break]And with [color=0001]Splat Bombs [color=ffff]to flush out
hiding enemies and the [color=0001]Ink Vac [color=ffff]to
turn the tables on invaders, this set
is impressively well-balanced.[page break]I recommend it for anyone who's
looking to eventually master the
charger category of weapons!`,Charger_Normal_01:`The [color=0001]Z+F Splat Charger[color=ffff] is a special
model of the Splat Charger from
trendy gear brand Z+F![page break]Now, that cool brand doesn't make
the weapon any more powerful, or
anything, but you will get an entirely
new loadout to play around with![page break]Take, for example, the [color=0001]Splash Wall[color=ffff].
It's a great accessory for a charging
weapon because it allows you to take
cover while the main weapon, well,
charges up![page break]And it comes with the fearsome
[color=0001]Triple Inkstrike[color=ffff] special! Whether you
use it to probe for hiding enemies or
holding down the fort, it's a beast.[page break]If you want to be THAT charger user,
give this set a try.`,Charger_Pencil_00:`If you use chargers but wish they
were a little more...prolific...enter
the [color=0001]Snipewriter 5H[color=ffff]! It's a charger-
style weapon that can fire shots
in quick succession.
Hold down [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to charge, and then
release to fire. Then you can press
[group=0003 type=000c params=00 00 80 3f 00 00 00 00] to fire again and again—up to
five shots on a single charge![page break]Now, there's always a catch, and
here's the catch on this weapon—
each shot is a bit less powerful than
some other chargers, and you can't
store a charge.[page break]But when you have the [color=0001]Sprinkler [color=ffff]to
help with coverage and a [color=0001]Tacticooler[color=ffff]
to power up your friends, those may
be catches you can live with.[page break]The fifth time's the charm with
this unique charger, so I hope you'll
give it a try!`,Charger_Pencil_01:`The [color=0001]Snipewriter 5B [color=ffff]is a great
illustration of how versatile the
Snipewriter system is! The 5B is
made from softer material than the
5H, making it even easier to learn.[page break]Throw out a [color=0001]Splash Wall [color=ffff]for cover
while you're charging up or unloading
a full charge—or use it to distract
from your [color=0001]Ink Storm [color=ffff]special.[page break]With the capacity for five shots
on a full charge, the Snipewriter 5B
makes a great first charger, because
there's not so much pressure on
aiming one powerful shot perfectly.[page break]Of course, with the luxury of hiding
out behind that Splash Wall, maybe
you CAN aim perfectly! Why not give
this set a try and find out?`,Charger_Quick_00:`Ah, the [color=0001]Classic Squiffer[color=ffff]. For a
charger, it's a bit short on range,
but in return it can charge up
much more quickly.[page break]That allows you to use it in a more
offensive way! I mean...being on
the offense. Not that the weapon is
offensive...except to your opponents.[page break]Anyway, I'd take advantage of the
[color=0001]Point Sensor [color=ffff]sub to coordinate an
attack with my teammates.[page break]And if my home turf was invaded, I'd
deploy the [color=0001]Big Bubbler [color=ffff]and hide inside,
using that Classic Squiffer action to
snipe enemies. Comfy in close range
with a charger? This set is for you!`,Maneuver_Dual_00:`Do you know the Jet Squelcher?
Would you like to have two of them?
Good, because that's what [color=0001]Dualie
Squelchers[color=ffff] offer![page break]Imagine the heft of holding two Jet
Squelchers, only now you can roll and
fire off extremely accurate and fairly
rapid shots afterward. It's an almost
dizzying level of power![page break]Meanwhile, you can sniff out enemies
with both the [color=0001]Wave Breaker [color=ffff]special
and your [color=0001]Splat Bombs[color=ffff]. I call it the
"see it, splat it" strategy.[page break]If you like to stick and move with
accurate shots across a long
distance, I recommend you give
this loadout a try!`,Maneuver_Dual_01:`The [color=0001]Custom Dualie Squelchers [color=ffff]are
exactly what they sound like—a
customized set of Dualie Squelchers![page break]That said, they come with a new
loadout, including the [color=0001]Squid Beakon[color=ffff]
sub weapon. You can use that to
strategically consolidate your forces
on the map.[page break]Then, with everyone assembled, try
activating the [color=0001]Super Chump [color=ffff]to draw in
opportunistic enemies before teaming
up to take them out.[page break]If you fancy yourself a tactical
mastermind, consider adding this
set to your arsenal!`,Maneuver_Gallon_00:`The [color=0001]Glooga Dualies[color=ffff] were developed
with one thing in mind—pure damage.[page break]They're not the fastest dualies, but
when you pull off a sweet Dodge Roll
with these in your hands, you
temporarily gain the ability to fire
an outrageously powerful shot![page break]Now, while the big-shot power grabs
the headlines, many people overlook
the [color=0001]Splash Wall [color=ffff]sub. And that's a
mistake, because it actually gives
you great defensive balance.[page break]Last but not least, the [color=0001]Booyah Bomb[color=ffff]
special has the potential to tip the
scales in your favor. I hope this
balanced set helps you net a
lopsided victory!`,Maneuver_Normal_00:`Here we have the [color=0001]Splat Dualies[color=ffff], a
[color=0001]dualie[color=ffff] weapon born from the "ink
hard or get splatted trying" culture
of Turf War battles![page break]These are dual-wielding, pistol-type
weapons that—let's be honest—look
pretty sweet. But there's some real
substance behind the style...[page break]The propulsive exhaust nozzles on
each weapon allow you to perform
a high-speed [color=0001]Dodge Roll[color=ffff]![page break]As a trade-off, you won't be able to
move for a brief moment after
executing this move. But during that
time, the two weapon sights overlap,
increasing your splatting power.[page break]Paired with [color=0001]Suction Bombs [color=ffff]as your
sub weapon, this loadout might SEEM
as though it's lacking in power...
then BOOM. You realize you have
the [color=0001]Crab Tank[color=ffff]. All hail Crab Tank!`,Maneuver_Normal_01:`If you like Splat Dualies and the
Enperry brand, boy, have I got the
weapon for you. Behold the [color=0001]Enperry
Splat Dualies[color=ffff]![page break]An updated loadout offers fresh new
strategic options, such as following
behind a [color=0001]Curling Bomb [color=ffff]to close the
gap to your enemies before unloading
with the full force of the dualies.[page break]And if you simply can't wait to get
into the thick of things, you can
unleash a [color=0001]Triple Splashdown [color=ffff]DURING
a Super Jump to immediately make
a massive impact.[page break]It all adds up to a set that's perfect
for anyone who's spoiling for a fight.
Give it a try and see if that's you!`,Maneuver_Short_00:`The [color=0001]Dapple Dualies[color=ffff] are dualie-type
weapons that have been obsessively
engineered for optimum mobility![page break]They're now lighter, allowing for
faster movement, but they
have less range. It's a trade-off.[page break]But you know what goes well with
mobility? Even more mobility! That's
where the [color=0001]Tacticooler [color=ffff]special shines.[page break]Blitz forward with added speed from
the Tacticooler, and place [color=0001]Squid[color=ffff]
[color=0001]Beakons [color=ffff]to help your teammates
secure forward positions to take
advantage of this set.[page break]It's not a hit-and-run strategy.
It's more like...run-hit-run-run-hit-
hit-hit-run... You get the picture.`,Maneuver_Short_01:`The trouble with the [color=0001]Dapple Dualies
Nouveau[color=ffff] is that you'll be whizzing
through the stage so fast with them
that no one will be able to appreciate
their cool design![page break]As weapons, though, they're pretty
good. Just like the Dapple Dualies
you may know and love already. But
now equipped with the [color=0001]Torpedo[color=ffff] sub
to distract and annoy your enemies![page break]And for those times when foes are
bunching up and you need something
with more oomph, kick the [color=0001]Reefslider[color=ffff]
into gear and splat 'em all at once.[page break]If you're good at reading the map
and making your own plan of attack,
this loadout is a great choice!`,Maneuver_Stepper_00:`The [color=0001]Dark Tetra Dualies[color=ffff] feature
four ink-ejecting nozzles that allow
you to execute up to four Dodge
Rolls in a row! Yes, I said FOUR![page break]And because you can shoot while
rolling, you'll be able to zip around
stages with ease and roll your way
to victory.[page break]This loadout also comes with
[color=0001]Autobombs[color=ffff], which almost seems
unfair. You can use those to chase
your opponents out of hiding spots,
and then swoop in with the splat.[page break]And if they slip away? Fire up the
[color=0001]Reefslider [color=ffff]and hunt 'em down, shark-
style. I recommend this set for those
who want to set up their own pincer
moves and pressure the enemy!`,Maneuver_Stepper_01:`The [color=0001]Light Tetra Dualies[color=ffff] have the
same specs as the dark ones, but
they come in a set geared toward
turf inkage![page break]So what does that mean? Well, try
leaving the inking to the [color=0001]Sprinkler[color=ffff]
sub while you Dodge Roll straight
toward the front lines.[page break]Then, when your [color=0001]Zipcaster [color=ffff]special is
ready, you can fly around enemy
turf sowing chaos and confusion![page break]It's all a bit like taping an extra
turbo to a vehicle that has five
turbos already. Excessive?
Perhaps! But if you have the need
for speed, give it a shot.`,Roller_Compact_00:`The [color=0001]Carbon Roller[color=ffff] is a lightweight
roller built using low-density parts
for increased handling![page break]Of course, lightweight leads to
light inking capability, but if you
can find an opponent with an
[color=0001]Autobomb [color=ffff]and then sneak behind
them, it'll get the job done.[page break]Rounding out this zippy little loadout
is the [color=0001]Zipcaster[color=ffff], which can also help
you surprise and undelight your
opponents. Basically, if you want to
be a ninja, try out this set!`,Roller_Compact_01:`Feel like the Carbon Roller could use
a little more zazz? Then the [color=0001]Carbon
Roller Deco[color=ffff] might be for you, friend![page break]With a look created by top designers,
this special roller comes with [color=0001]Burst
Bombs[color=ffff] to take your inking abilities
to a whole new level.[page break]You'll cover so much turf that your
opponents will find it hard to move—
and then you can hit 'em with the
[color=0001]Trizooka [color=ffff]from way downtown.[page break]It really is that simple with this set.
If you like sticking with a tried-and-
true strategy—ink first and ask
questions never—then give it a try!`,Roller_Heavy_00:`The [color=0001]Dynamo Roller[color=ffff] is a roller I
designed myself using a power
generator for high strength and
long range![page break]Now, I wasn't able to reduce the
weight on the motor as much as I
would have liked, but this thing
can REALLY spill some ink, if I do
say so myself.[page break]Pair it with the [color=0001]Sprinkler [color=ffff]sub, and
you can push forward to apply max
pressure to the other team.[page break]And what will your team be doing,
you ask? Why, relaxing and enjoying
sweet, sugary sips from your
[color=0001]Tacticooler[color=ffff], of course. You'll be the
most popular teammate around!`,Roller_Heavy_01:`The [color=0001]Gold Dynamo Roller [color=ffff]is another
roller that I'm proud to say I designed
myself! It's based on the standard
Dynamo Roller and has the same
basic capabilities.[page break]Yes, with these rollers, I had to
sacrifice a bit of mobility to give
them best-in-class firepower and
range. But I haven't heard any
complaints so far![page break]With this loadout, you'll use the
[color=0001]Splat Bombs [color=ffff]and [color=0001]Super Chump [color=ffff]to
distract your opponents while you
look for an opening. Hit 'em hard,
and don't let 'em splat you back![page break]The best defense is a good offense,
and offense doesn't get any better
than this. So, weirdly, it's also the
best defense! I hope you'll give
this set a try.`,Roller_Hunter_00:`The [color=0001]Flingza Roller[color=ffff] is a wild one.
Its shape changes depending on
whether you swing it vertically
or horizontally![page break]I won't get too technical, but the
automatic centrifugal clutch allows
for light horizontal swings that go
FLOOSH and heavier vertical swings
that are more like GLOMP![page break]The bottom line is that you can
control the action. Use the vertical
swing to lay down a path, then take
down nearby opponents with the quick
strike of a horizontal swing.[page break]While you're zipping around, you can
also lay down [color=0001]Ink Mines [color=ffff]to help sniff
out opponents and fire off some
[color=0001]Tenta Missiles [color=ffff]for a one-two punch.[page break]If you're up to the challenge of
simply dominating a match, then
you should give this set a try!`,Roller_Normal_00:`The [color=0001]Splat Roller [color=ffff]represents the
[color=0001]roller[color=ffff] class of weapons that excel
at close combat and inking turf.[page break]With any roller, you can tap [group=0003 type=000c params=00 00 80 3f 00 00 00 00]
to fling ink, or hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] down as
you run to lay down a path of
inky goodness.[page break]Try using your [color=0001]Curling Bombs [color=ffff]to
sneak up close to an enemy, and
then...PLOOSH! Get 'em with the
roller. It's oh so satisfying.[page break]As an added strategic wrinkle, you
have the [color=0001]Big Bubbler [color=ffff]to rally your
team to the front line at just the
right moment.[page break]If you're new to rollers, I can't
recommend this loadout enough.
Who knows? Maybe you'll become
a roller for life!`,Roller_Normal_01:`The [color=0001]Krak-On Splat Roller[color=ffff] is the
product of a collaboration with
the popular Krak-On gear brand![page break]And you know what's useful when
you're wielding a roller? Dropping a
[color=0001]Squid Beakon [color=ffff]to call your teammates!
Invite them to land on the luxurious
carpet of ink you've laid down.[page break]Can't find a way past the enemy's
defenses? That's when it's time
to deploy the [color=0001]Kraken Royale[color=ffff] and
bulldoze your way in as a giant
octopus or squid![page break]If you love nothing more than
blanketing the map with your color
of ink, this set may be for you!`,Roller_Wide_00:`You ever think to yourself..."This
roller is great, but what if it were
WIDER?" If so, the [color=0001]Big Swig Roller[color=ffff]
may be just what you wanted![page break]They've taken a regular roller and
just...made the roller part bigger!
The result is that you can lay down
a veritable red carpet—or green, or
pink, or...you get it—of ink.[page break]Horizontal swings also hit a wider
range, and vertical swings launch
farther. The drawback is that attack
power is lower than other rollers.[page break]That may not be an issue when
you're hiding behind a [color=0001]Splash Wall[color=ffff], or
when you can guzzle enemy ink with
the [color=0001]Ink Vac [color=ffff]special, so the set is
actually pretty well-balanced.[page break]If you can't stand to see even a
single spot of un-inked turf, give
this set a try!`,Roller_Wide_01:`The [color=0001]Big Swig Roller Express[color=ffff] is an
exciting collaboration between the
makers of the Big Swig Roller and
a vending-machine maker![page break]In addition to the new design, it now
comes with the [color=0001]Angle Shooter[color=ffff] sub,
making it easy to tag enemies and
take a sip of their health bar while
you're at it.[page break]Plus, you can fire up the [color=0001]Ink Storm[color=ffff]
special to drive the other team into
the open, and then finish them off
with the roller.[page break]Talk about convenient! I guess
that's the vending-machine influence
paying off.`,Saber_Lite_00:`The [color=0001]Splatana Wiper[color=ffff] is part of an
entirely new category of weapons
known as [color=0001]splatanas[color=ffff]! These sword-
like slashers can fling ink through
the power of centrifugal force.[page break]To do a basic [color=0001]horizontal slash[color=ffff], just
press [group=0003 type=000c params=00 00 80 3f 00 00 00 00]. But you can also hold
[group=0003 type=000c params=00 00 80 3f 00 00 00 00] to unleash a [color=0001]vertical slash[color=ffff] that
will really send some ink flying![page break]On top of that, if you perform a
vertical slash while tilting [group=0003 type=0007 params=7b 14 2e 3f 00 00 00 00] a bit
forward, you'll step forward with the
attack, adding enough power to
flatten most foes.[page break]Paired with the [color=0001]Torpedo [color=ffff]sub, you can
slash across the battlefield and level
your enemies with a single stroke.
It's almost too good![page break]And I haven't even mentioned the
[color=0001]Ultra Stamp [color=ffff]special yet. If the
other team hasn't surrendered,
the [color=0001]Ultra Stamp [color=ffff]is sure to make
'em think twice.[page break]If you want to be among the first
trailblazers in the splatana-fighting
genre, this set is for you!`,Saber_Lite_01:`What's the [color=0001]Splatana Wiper Deco [color=ffff]and
how is it different from a Splatana
Wiper, you ask? Well, it's got a new
look! And more significantly, an all-
new loadout.[page break]Now you can use this lightweight
weapon to splash a path to the
front lines, where you can place
[color=0001]Squid Beakons [color=ffff]to rally the team.[page break]Once you've all hit your marks, fire
up the [color=0001]Tenta Missiles [color=ffff]special to
scope out enemy positions and
start tearing things up.[page break]This is a versatile set that's designed
for team players who thrive in a
support role without giving up too
much speed or offensive firepower.
Try it out!`,Saber_Normal_00:`If you're looking for a splatana-
type weapon with a bit more OOMPH,
look no further than the [color=0001]Splatana
Stamper[color=ffff], my friend![page break]Now, this weapon takes a bit longer
to charge than the Splatana Wiper,
but the trade-off is a wider, more
powerful spray of ink. It can really
do some damage![page break]Give this a try: fire off a charged
slash, and follow it quickly with
a horizontal slash or [color=0001]Burst Bombs[color=ffff].
Not sure what they call a one-two
punch in swordplay, but this is it![page break]And with the [color=0001]Zipcaster [color=ffff]special, you're
practically buckling swashes! Er,
swashBUCKLING. What I mean to say
is you're basically a laser space
pirate with elite space-pirate tech!`,Saber_Normal_01:`The [color=0001]Neo Splatana Stamper[color=ffff] offers the
same performance as the Splatana
Stamper but with a new look and
a whole new play style![page break]Don't believe me? Imagine you're
caught in some [color=0001]Toxic Mist[color=ffff], and the
other team comes in and splats you
instantly with a charged slash. Only
that's what YOU can do to THEM![page break]Not to mention the [color=0001]Crab Tank [color=ffff]special,
which is a total game changer. Now
you've got the splatana for up-close-
and-personal fighting and the Crab
Tank to strike from afar. Formidable![page break]If you like splatanas but wish you
had a longer range, give this set a
try! Once you master the sub and
special, this set can be really...
special. It's so nice I said it twice!`,Shelter_Compact_00:`Of all the brella-type weapons, the
[color=0001]Undercover Brella [color=ffff]looks the most like
an ordinary umbrella. And that's no
accident—the weapon was designed
for stealth splatting![page break]Getting into the technical aspects,
the canopy-launching mechanism has
been removed here to allow for rapid
fire. The weapon can even be fired
while the canopy is open![page break]Back to stealth capabilities—you can
use the [color=0001]Ink Mine [color=ffff]sub weapon to help
scope opponent positions before
sneaking in for a splat they'll
never see coming.[page break]And if you're spotted? Throw all
subtlety out the window, fire up the
[color=0001]Reefslider[color=ffff],[color=0001] [color=ffff]and ride boldly to victory![page break]I recommend this set to all aspiring
spies, especially those who know how
to walk softly and carry a big
shark-based motorcycle.`,Shelter_Compact_01:`The [color=0001]Undercover Sorella Brella [color=ffff]is so
similar to the Undercover Brella that
you could almost mistake the two for
twin sisters! Not me though. I can
easily tell them apart.[page break]Anyway, this weapon offers the same
sneaky play style, now paired with
the [color=0001]Torpedo [color=ffff]sub. Cover blown? Just
toss one of those and disappear
again. It's spycraft 101.[page break]And here's another top secret tip.
If you set up a [color=0001]Splattercolor Screen[color=ffff]
on turf covered with enemy ink, it'll
reveal the position of any enemy
swimming in said ink. Neat, huh?[page break]I recommend this set for anyone
who likes to pretend they're the
hero in a spy movie from time to
time. And that's everyone, not just
me, right?`,Shelter_Normal_00:`Umbrellas help you stay dry, but
[color=0001]Splat Brellas [color=ffff]do that and more—like
coat the battlefield and any enemies
in your path with ink![page break]Let me explain. You can spray ink
normally with [group=0003 type=000c params=00 00 80 3f 00 00 00 00]. But if you HOLD
[group=0003 type=000c params=00 00 80 3f 00 00 00 00], the brella will open [color=0001]like a shield[color=ffff]![page break]And if you hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] even longer,
you'll [color=0001]launch[color=ffff] the brella itself.
It leaves a trail of ink, can damage
enemies, and STILL protects you.
It's a triple threat![page break]Speaking of triples, this set also
comes with the [color=0001]Triple Inkstrike [color=ffff]and
the [color=0001]Sprinkler [color=ffff]sub, so I guess you
could say it's got you covered.`,Shelter_Normal_01:`The [color=0001]Sorella Brella [color=ffff]is the fraternal
twin of the Splat Brella—that is,
same stats, same basic DNA, but
different design and brella
composition.[page break]And the loadout's different too!
Now you can fend off foes with
the [color=0001]Autobomb [color=ffff]sub before pushing
forward with the brella.[page break]Here's a pro move: deploy the brella
shield, and then fire up your [color=0001]Inkjet[color=ffff]
special to rain down ink to support
your allies making a forward push
behind it.[page break]This set is carefully crafted for
players who have the skill and
experience to use each component
in a coordinated attack. I hope
you'll give it a try!`,Shelter_Wide_00:`The [color=0001]Tenta Brella[color=ffff] is...well, a big
umbrella. You'd be forgiven for
thinking it looks like the sort of
thing you could camp in.[page break]Because that's certainly one way
of using this setup! Try placing a
[color=0001]Squid Beakon[color=ffff],[color=0001] [color=ffff]and then opening your
Tenta Brella wide for your teammates
to gather behind.[page break]And if the enemy is bringing major
inkpower that can penetrate the
brella? Fire up the [color=0001]Ink Vac[color=ffff],[color=0001] [color=ffff]and send
it right back at 'em![page break]I hope I've made it clear that this
loadout is for the ultimate team
player—someone who wants to
protect and support their team
on the path to victory!`,Shelter_Wide_01:`The [color=0001]Tenta Sorella Brella[color=ffff] set is
similar to the Tenta Brella set,
but it has a modified design and
a different sub and special.[page break]Now you'll be able to press forward
with the brella and lay [color=0001]Ink Mines [color=ffff]as
you go. Spot an enemy? Flap that
brella as hard as you can, and take
'em out![page break]If a particularly slippery foe sneaks
away, you've also got the [color=0001]Trizooka[color=ffff]
special in your arsenal. Near or far,
it's got power and range aplenty.[page break]Clearly, this set has offensive oomph,
but don't overlook the benefits of the
brella's defense. If you can flip the
switch from offense to defense on
a whim, give it a try!`,Shooter_Blaze_00:`The range and accuracy of the
[color=0001]Aerospray MG[color=ffff] aren't anything to write
home about, but break out a pen and
some stationery for its rate of fire![page break]And when you pair a nimble weapon
like that with [color=0001]Fizzy Bombs[color=ffff], it makes
movement a breeze. You can quickly
lock down plenty of turf to help
support your teammates.[page break]Of course, inking turf is the name
of the game, but sometimes you
need a little extra OOMPH, and that's
where the [color=0001]Reefslider [color=ffff]special comes
in. Ride it to glorious victory![page break]This setup is ideal for players who
like to mix it up—tactically pushing
the front line and waiting for the
right moment to go big.`,Shooter_Blaze_01:`Love the Aerospray MG but wish it
came with a different sub and
special? Well, today is your lucky
day! The [color=0001]Aerospray RG [color=ffff]set was made
just for you![page break]It's the same great Aerospray that
lets you spray it—not say it—but
the addition of the [color=0001]Sprinkler [color=ffff]sub
gives you absurd coverage.[page break]And when you need something with
more mustard to make a strategic
push, [color=0001]Booyah Bombs [color=ffff]always live up
to their name. I recommend this set
for those who ink outside the box!`,Shooter_Expert_00:`The [color=0001]Splattershot Pro[color=ffff] was developed
for more advanced users by the
same team that brought you the
Splattershot![page break]And here's a "pro" strategy for using
it—deploy the [color=0001]Angle Shooter [color=ffff]to limit
your opponent's movement, then take
advantage of the Pro's accuracy and
range to splat 'em from downtown.[page break]Of course, sometimes you just want
to crush your enemies with a
crustacean, and that's where the
[color=0001]Crab Tank [color=ffff]comes in.[page break]Putting it all together is easier said
than done, but this setup is built
for players who dare to dream.`,Shooter_Expert_01:`If the Splattershot Pro is for pro
Splattershot users, I guess the
[color=0001]Forge Splattershot Pro[color=ffff] is for pro
Splattershot users who also rock
Forge-brand gear![page break]It's a mouthful, but when this set is
firing on all cylinders, it does the
talking for you.[page break]The main weapon is functionally
identical to the base Splattershot
Pro, but a [color=0001]Suction Bomb [color=ffff]a day keeps
the enemies away! Or, well, as many
Suction Bombs as you can muster.[page break]And while the [color=0001]Booyah Bomb [color=ffff]special
might feel like too many bombs, when
you get a chance to drop one, you'll
realize that there's no such thing
as too many bombs![page break]This set isn't necessarily balanced
for a beginner, but if you can handle
it, few opponents will be able to
handle YOU!`,Shooter_First_01:`The [color=0001]Custom Splattershot Jr.[color=ffff] offers
the same functions as the
Splattershot Jr., but with a twist![page break]Paired with the [color=0001]Torpedo [color=ffff]sub weapon
and [color=0001]Wave Breaker [color=ffff]special, this
loadout allows you to seek out and
exploit your opponents' positions
to maximize your team's advantage![page break]I recommend this set for players
who know there's no "I" in "team,"
no "L" in "victory," and who are
just generally good at spelling overall.`,Shooter_Flash_00:`The [color=0001]Squeezer [color=ffff]is a great choice for
players who want flexibility. Pull the
trigger once, and you get a single
high-powered shot.[page break]But holding down [group=0003 type=000c params=00 00 80 3f 00 00 00 00] [color=0001]changes
everything[color=ffff]! Suddenly the rate of
fire goes up, and the Squeezer
transforms into an absolute
turf-inking machine.[page break]Master both modes, and you'll barely
even need the [color=0001]Splash Wall [color=ffff]to shore
up your defenses. But it's there for
you anyway![page break]And with a [color=0001]Trizooka [color=ffff]to tame far-off
enemies, this set is built for flashy
fighters who are comfortable being
the center of attention.`,Shooter_Flash_01:`Like the Squeezer? You'll probably
also like the [color=0001]Foil Squeezer[color=ffff]! It offers
the same capabilities with a new
look and a new loadout.[page break]First, try deploying the [color=0001]Autobomb [color=ffff]sub
to sniff out hidden enemies. If the
coast is clear, it's time to hold down
the trigger and ink a ton of turf
with your main.[page break]And with the [color=0001]Splattercolor Screen[color=ffff]
special, you can force enemies into
more favorable positions to unleash
the Foil Squeezer's powerful single-
shot mode. KA-SPLOOSH![page break]This loadout is designed to help you
use both the sniping and turf-inking
capabilities of your Foil Squeezer
optimally, so I hope you'll give it
a try!`,Shooter_Gravity_00:`The [color=0001].52 Gal[color=ffff] is a heavy hitter with
an extra-large nozzle for shooting
massive amounts of ink.[page break]Of course, all that power comes at
the expense of fire rate...which is
why you'll want the [color=0001]Splash Wall [color=ffff]to
hide behind while reloading.[page break]And if the other team is playing it
a little too safe, you've always got
the [color=0001]Killer Wail 5.1[color=ffff]. Lock on and blast
'em with lasers![page break]So if you're the type to hang back
and wait for just the right moment,
this loadout is for you.`,Shooter_Heavy_00:`The [color=0001].96 Gal[color=ffff] is a shooter that hits
hard and has a long range, courtesy
of its large chamber and extended
barrel![page break]This thing would be an absolute
cheat code if it fired just a little
faster...but you can't have your
crab cake and eat it too. You have
to make each shot count![page break]Still, you can set up a [color=0001]Sprinkler [color=ffff]to
help secure your turf...and the
[color=0001]Ink Vac [color=ffff]special doesn't suck. I mean,
it DOES, but...you know what I mean!`,Shooter_Heavy_01:`The [color=0001].96 Gal Deco[color=ffff] is a decorated
version of the .96 Gal. It's still short
of a full 1.00 Gal, but that's OK,
because now you have the [color=0001]Splash
Wall[color=ffff] as a sub weapon![page break]That'll help you keep a safe distance
while you blast away with your main
weapon.[page break]Now, if anyone breaks through, all is
not lost. That's when you call on the
[color=0001]Kraken Royale[color=ffff] to transform yourself
into a giant squid or octopus![page break]They say that the best offense is
a good defense, and I say that's
fundamentally impossible, but this
set WILL give you the tools to play
D with the best of 'em.`,Shooter_Long_00:`The [color=0001]Jet Squelcher [color=ffff]has boosted pump
pressure to give it a range that
rivals charger weapons![page break]Like other weapons with extreme
range, it doesn't offer much in the
way of power. But when combined
with the [color=0001]Angle Shooter [color=ffff]sub, your
enemies won't know what hit 'em.
Because you'll be SO far away!
Add the [color=0001]Ink Vac [color=ffff]to the mix to suck
up incoming offensives, and you have
a loadout that's perfect for cool,
calculating players who play it safe.`,Shooter_Long_01:`The [color=0001]Custom Jet Squelcher [color=ffff]is no off-
the-rack Jet Squelcher. It's custom!
But it's still made with high-quality
official parts.[page break]And this set now comes with the
[color=0001]Toxic Mist [color=ffff]sub, which helps make up
for the main weapon's lower fire rate
and firepower by bogging down your
enemies in, well, toxic mist.[page break]Meanwhile, toss the [color=0001]Ink Storm[color=ffff]
special out there when you can, and
it'll be like splatting fish in a barrel
for your teammates.[page break]Master this set, and it'll be a one-
sided battle, with you on the
winning side!`,Shooter_Normal_00:`The [color=0001]Splattershot[color=ffff] is beloved for its
ease of handling and high potential.
This is the latest model of the
go-to weapon![page break]Paired with [color=0001]Suction Bombs[color=ffff], you have
a wonderfully stable loadout that
allows you to respond to whatever
the enemy throws at you.[page break]And let's not forget the [color=0001]Trizooka[color=ffff]
special. Let one off the leash at
the right moment, and I guarantee
your opponent won't forget![page break]Is this setup a little basic? Yes!
Basically one of the best setups you
can have! Master the fundamentals,
and you'll become a force to be
reckoned with.`,Shooter_Normal_01:`As if the original Splattershot wasn't
stylish enough, a special collab gives
us the [color=0001]Tentatek Splattershot[color=ffff]![page break]Functionally, the weapon is identical
to a regular Splattershot. But its
fashion-forward form comes with
[color=0001]Splat Bombs [color=ffff]and the feared [color=0001]Triple
Inkstrike[color=ffff] special.[page break]It's always in style to mix things up,
so I recommend this loadout for
Splattershot users who dare to be
different. Talk about très dangereux!`,Shooter_Precision_00:`For your main weapon, I present the
[color=0001]Splash-o-matic[color=ffff], a weapon fine-tuned
for highly accurate barrages![page break]It may not have the ink spread or
raw power of some weapons, but
it more than makes up for it with
rapid fire that is quite rapid indeed.[page break]Plus, when you can pin down an
enemy with [color=0001]Burst Bombs[color=ffff], you don't
need as much power. Simply splatter
them at your leisure while they're
mired in your ink.[page break]And with the [color=0001]Crab Tank [color=ffff]special in
your back pocket, nothing can
stand in your way! Try not to laugh
maniacally as you overpower the
other team time and again.`,Shooter_Precision_01:`If you're a Splash-o-matic fan, you
owe it to yourself to try out the
[color=0001]Neo Splash-o-matic[color=ffff]. Neo means
new, and Splash-o-matic means
Splash-o-matic![page break]That's my way of explaining that
the [color=0001]Neo Splash-o-matic [color=ffff]has the
same characteristics as the
Splash-o-matic but with a new
design and a new sub and special.[page break]If I can stop saying Splash-o-matic
for two seconds, I can tell you what
they are. Whew! Did it. This loadout
comes with [color=0001]Suction Bombs[color=ffff], a classic
go-to, if you ask me.[page break]And for the special? Nothing less
than the [color=0001]Triple Inkstrike[color=ffff], which
strikes three times the fear into
your opponents' hearts.[page break]Use this sub and special well, and
there will be nothing left to do but
pick off your enemies one by one
with the Neo Splash-o-matic. No!
I said it again!`,Shooter_QuickLong_00:`There are a lot of cool weapons in
the Splattershot family, but the
[color=0001]Splattershot Nova [color=ffff]is a unique combo
of range and firing rate in one
awesome package![page break]Granted, the weapon isn't going to
win "Most Powerful" at the splat
pageant, but it's great at supporting
your front-line allies from a distance.[page break]Plus, when paired with the [color=0001]Point
Sensor[color=ffff], you can telegraph opponent
moves to your team—and mop up
any survivors with the [color=0001]Killer Wail 5.1[color=ffff]
special.[page break]If you like to save the tastiest-
looking bite of food for last, give
this loadout a try! And stop doing
that—it'll taste better at the start
of the meal.`,Shooter_QuickLong_01:`The [color=0001]Annaki Splattershot Nova [color=ffff]is a
fun collab with the fashion brand
Annaki that also gives users a
new loadout to experiment with.[page break]While you spray the landscape with
that great Splattershot coverage,
you can also set traps for enemies
using the [color=0001]Ink Mine [color=ffff]sub.[page break]Watch 'em flounder while teammates
take 'em out, or fire up the [color=0001]Inkjet[color=ffff]
special and take care of business
yourself from above. There's no
wrong answer![page break]This set is designed to help you
protect key areas on the battlefield,
so it's perfect for masterminds who
hope to execute on a fastidiously
planned battle strategy.`,Shooter_QuickMiddle_00:`The [color=0001]N-ZAP '85[color=ffff] is a shooter with
excellent ink efficiency and
rapid-fire capability![page break]And, um...its power is certainly...
adequate. Sorry—I hate to say
anything negative, but this weapon
doesn't pack the biggest punch.[page break]But that's OK! It's fast enough to
send your enemies scrambling...and
that's when you hit 'em with the
[color=0001]Suction Bombs[color=ffff].[page break]Fire up the [color=0001]Tacticooler [color=ffff]to energize
your squad for a big push, and you've
got a nimble loadout that's built for
teamwork. It's what makes the
dream work!`,Shooter_QuickMiddle_01:`Is the [color=0001]N-ZAP '89 [color=ffff]faster, better, or
more powerful than the N-ZAP '85?
No, but it comes in a new color![page break]And this one comes with [color=0001]Autobombs[color=ffff]
to help you secure the area before
launching an offensive. Sniff out
enemies, and point your team in
the right direction![page break]Now, if your opponents think they're
clever and keep camping near your
Super Jump spots, this set allows
you to hit 'em with the [color=0001]Super Chump[color=ffff]![page break]It'll fire decoys that look like Super
Jump landing spots...but are in fact
ticking ink bombs that will explode
within a few seconds.[page break]Try this set if you want to be the
one playing chess while your enemies
play checkers!`,Shooter_Short_00:`With its wide muzzle, the
[color=0001]Sploosh-o-matic[color=ffff] is well suited
for close-combat situations.[page break]And escorting you to those close-
combat situations is the [color=0001]Curling
Bomb[color=ffff]! Let one loose, and it'll lay
down a proverbial red carpet to
your foes' feet.[page break]Combined with the [color=0001]Ultra Stamp[color=ffff]'s
forward rush, you have one powerful
setup for players who love getting up
close and personal—or who want to
blaze a path forward for their allies.`,Shooter_Short_01:`Like the Sploosh-o-matic? Maybe
you'll LOVE the [color=0001]Neo Sploosh-o-matic[color=ffff]![page break]That's because you get all the same
attributes of the Sploosh-o-matic
with a new original emblem. Plus a
loadout that mixes things up![page break]For example, now you can set a jump
point for your teammates with the
[color=0001]Squid Beakon[color=ffff]. It's like a concierge
service for carnage![page break]And if you use the [color=0001]Killer Wail 5.1 [color=ffff]to
reveal hidden or distant opponents,
you'll know just where to place that
Squid Beakon.[page break]Teamwork makes the dream work, so
if you fancy yourself a team player,
give this set a try!`,Shooter_TripleMiddle_00:`If you like the L-3 Nozzlenose but
find it a bit lacking in power...
enter the [color=0001]H-3 Nozzlenose[color=ffff]![page break]The "H" probably stands for "heavy,"
but I like to think it stands for
"HAHAHAHA," which is the noise one
typically makes while firing it.[page break]Now, the fire rate suffers a bit
compared to lighter weapons, but
when you can pinpoint your enemies
with a [color=0001]Point Sensor[color=ffff], you can make
each shot count.[page break]And with a team all juiced up on
energy from your [color=0001]Tacticooler[color=ffff], you're
ready to laugh all the way to the
winner's circle.`,Shooter_TripleMiddle_01:`The [color=0001]H-3 Nozzlenose D[color=ffff] is a custom
H-3 Nozzlenose emblazoned with the
manufacturer's emblem.[page break]And while the weapon's performance
is unchanged, it now comes with the
[color=0001]Splash Wall [color=ffff]sub weapon to help cover
for the main weapon's low fire rate.[page break]Add in the [color=0001]Big Bubbler [color=ffff]special for an
extra dose of protection, and you've
got a loadout that really maximizes
what you can do with the main.
Give it a try!`,Shooter_TripleQuick_00:`Why fire once when you can fire
three times? That's the question
that the [color=0001]L-3 Nozzlenose [color=ffff]answers.
One pull of the trigger launches
three rapid shots.[page break]Now, don't get me wrong. This isn't
a full-auto weapon. Holding down [group=0003 type=000c params=00 00 80 3f 00 00 00 00]
is like pressing the "close door"
button in an elevator—it does
absolutely nothing![page break]So you'll want to time your triple
shots perfectly...and wait for the
right moment to toss a [color=0001]Curling Bomb[color=ffff].
Or, if a triple shot won't do the trick,
there's always the [color=0001]Crab Tank[color=ffff]![page break]So who's this set for? Just about
anyone! It's so balanced that both
the freshest noobs and the crustiest
veterans can find a use for it.`,Shooter_TripleQuick_01:`The [color=0001]L-3 Nozzlenose D [color=ffff]is a special
model of the L-3 Nozzlenose with
the maker's logo emblazoned on it![page break]But you know that's not all...it also
has a fancy-schmancy new loadout!
Including [color=0001]Burst Bombs [color=ffff]to weaken foes
a bit before finishing 'em off with
your main weapon.[page break]And the special? None other than
the [color=0001]Ultra Stamp[color=ffff], guaranteed to
send anyone in your path running
for cover.[page break]Don't underestimate the amount of
ink you can fling with this setup, but
it is a quirky combo. If you feel like
making a big mess and experimenting,
I hope you'll give it a try!`,Slosher_Bathtub_00:`Even if you've never lobbed a blob,
it's not against blob law to use the
[color=0001]Bloblobber[color=ffff]! What's more, each lob
fires four blobs—that's an awful
lot of lawful blobs![page break]Once your tongue is untied, you can
use the Bloblobber to target a single
enemy—perhaps your friend Rob—or
an entire mob. Truly, it's a versatile
weapon for every job.[page break]And although they sound out of place
here, the [color=0001]Sprinkler [color=ffff]sub weapon and
[color=0001]Ink Storm [color=ffff]special actually complement
this set quite nicely. Like butter
melting over corn on the cob!`,Slosher_Bathtub_01:`Love the Bloblobber but not the
way it looks? Check out the
[color=0001]Bloblobber Deco[color=ffff]! It lobs blobs just
like a regular Bloblobber but has
a fun new look.[page break]And did I mention the new loadout?
This one comes with the [color=0001]Angle
Shooter[color=ffff] sub, which can both deal
damage directly and reveal tricky
hidden enemies.[page break]I should also talk about the [color=0001]Kraken
Royale[color=ffff] special, but really...the ability
to transform into a massive killer
squid or octo at a moment's notice
kind of speaks for itself.[page break]I recommend this set for maximum
blob lobbing with a dash of mobility
and a heaping helping of giant squid!`,Slosher_Diffusion_00:`The [color=0001]Tri-Slosher [color=ffff]answers a question
that nobody asked, which is..."Please
let me fling three giant buckets of ink
at the same time."[page break]Hey, come to think of it, that's not
even a question! Anyway, since the
Tri-Slosher offers a broader attack,
the inkpower is a bit less than your
basic Slosher.
But when you've got [color=0001]Toxic Mist [color=ffff]to
slow enemies down, it's barely even a
problem. Add in the [color=0001]Inkjet[color=ffff],[color=0001] [color=ffff]and you're
packing plenty of power. This is a set
for sloshing away with impunity!`,Slosher_Diffusion_01:`The [color=0001]Tri-Slosher Nouveau [color=ffff]is a special
version of the Tri-Slosher that
includes an exclusive sticker!
And if the sticker isn't selling it, let
me tell you about the loadout...[page break]First up, you get [color=0001]Fizzy Bombs[color=ffff],
enabling you to close the distance
between you and opponents quickly.
If you've used sloshers before, you
already know that close equals splat![page break]And you can amp up the mobility even
more with the [color=0001]Tacticooler[color=ffff]! Now you're
gliding around the map like a manta
ray with rocket boosters, and your
teammates are getting a boost too.[page break]Don't even get me started on the ink
coverage. It's also great! So I hope
you give this set a try. It can really
turn the tide in battle!`,Slosher_Double_00:`I'm pleased to introduce an entirely
new slosher...the [color=0001]Dread Wringer[color=ffff]!
This double-muzzled slosher actually
fires—or rather, sloshes—two bursts
of ink at once.[page break]There's a slight delay before the
second burst releases, which gives
you an interesting choice. Fire
straight ahead and hope for a
powerful direct hit, or...[page break]Try sweeping the nozzles horizontally
to attack or ink a wider area. The
choice is yours![page break]Oh, I haven't even gotten to the
loadout yet! With both [color=0001]Suction Bombs[color=ffff]
and the [color=0001]Reefslider [color=ffff]special, you have
an explosive combination that more
than makes up for lower firepower.[page break]It may take some getting used to,
but if you can master the way of the
double slosh, I think you'll find this
can be a go-to weapon set that
you'll have tons of fun with!`,Slosher_Launcher_00:`The [color=0001]Sloshing Machine[color=ffff] is like a washing
machine...but for getting everything
filthy with ink![page break]Each volley of beautiful, twisting
ink hits its target with plenty of
power and leaves a sloppy mess
everywhere. It's great for covering
plenty of turf.[page break]Try using [color=0001]Fizzy Bombs [color=ffff]to contain the
other team's movement while you
dial the Sloshing Machine up to the
max. The other team will be in a spin
cycle before you know it![page break]And don't forget about your [color=0001]Booyah
Bombs[color=ffff]—another tool in your quest
to make a mess-terpiece of the field.
By now it should be clear...this set is
NOT for neat freaks.`,Slosher_Launcher_01:`The [color=0001]Sloshing Machine Neo [color=ffff]isn't so
much an upgrade from the basic
Sloshing Machine as a...side-grade.
It has the same basic ability to slosh
ink all over the place.[page break]But it has a new look and a new
loadout to play with—including the
[color=0001]Point Sensor [color=ffff]sub! Throw one down
to mark enemy positions, then put
'em in the splat cycle with your main.[page break]If you've got stubborn enemy ink
stains that just won't come out,
that's when it's time to fire up the
[color=0001]Trizooka [color=ffff]special. I'll put it this way...
it's not for delicates![page break]This set is great for players who
want to put the other team in
a permanent press and see a
sparkling clean sweep at the end.`,Slosher_Strong_00:`The [color=0001]Slosher [color=ffff]is one of the most
technologically advanced weapons I
have had the privilege of demoing.[page break]I'm kidding! It's a bucket of ink!
But that doesn't mean it can't be
absolutely brutal in the right hands.[page break]See, [color=0001]slosher[color=ffff]-type weapons are
perfect for attacking enemies in
elevated positions or hiding behind
walls. They think they're safe, and
then...SPLOOOSH![page break]You can't rapid-fire a bucket, of
course, but in conjunction with
[color=0001]Splat Bombs[color=ffff],[color=0001] [color=ffff]you can stop almost
anyone in their tracks.[page break]And with the [color=0001]Triple Inkstrike [color=ffff]special,
you have the ability to blindside the
other team before moving in for the
splat. This loadout is a bucketload
of fun!`,Slosher_Strong_01:`Slosher users—ever feel like your
slosher just isn't as fancy as some
of the other weapon types? Well,
check out the [color=0001]Slosher Deco[color=ffff]! It has
cool stickers on it![page break]I joke, but no one will be laughing
when you master the [color=0001]Angle Shooter[color=ffff]
sub and tag all your enemies for
easy splatting by your teammates.[page break]And if you use the [color=0001]Zipcaster [color=ffff]to
reach high ground, you can rain
down ink all day long like only a
slosher main can.[page break]Your bucket will runneth over with
this set, so be sure to give it a try
if you like sloshing!`,Slosher_Washtub_00:`The [color=0001]Explosher[color=ffff] main is a reporpoised
industrial heater modified to fling
piping-hot ink long distances![page break]Its shots explode on contact with
walls and the ground, so it's handy
for hitting foes who like to hide![page break]And with the [color=0001]Point Sensor [color=ffff]sub, you
can reveal enemy positions to your
allies, or queue 'em up for your own
ink bath, courtesy of the Explosher.[page break]For super-slippery customers who
might be slinking along in their own
ink, fire up the [color=0001]Ink Storm [color=ffff]and watch
'em scramble as they're revealed.[page break]With so many ways to direct the
action, I recommend this loadout
for all aspiring team captains!`,Spinner_Downpour_00:`Let me introduce you to a very
special weapon—this is called
the [color=0001]Ballpoint Splatling[color=ffff], and it has
a unique dual fire rate![page break]Here's how it works. When you start
firing, the barrel spins super fast,
spraying everything around you with
tons of ink. It's great for covering
turf quickly.[page break]But once the spin slows a bit, the
weapon transforms into a long-range
ace! You can target faraway enemies
with shocking accuracy.[page break]And that's not all! Sorry—I've been
watching infomercials. The Ballpoint
[color=0001]can be paused midfire[color=ffff] [color=0001]to recharge[color=ffff].
Not all splatlings can do that![page break]Now, with all of these features, this
weapon might take some getting used
to, so I recommend taking it for a
test run on the firing range before
heading straight into battle.[page break]In conjunction with [color=0001]Fizzy Bombs [color=ffff]and
the [color=0001]Inkjet [color=ffff]special, this loadout may
not be for beginners, but it's a
technical wizard's dream come true.`,Spinner_Downpour_01:`The [color=0001]Ballpoint Splatling Nouveau[color=ffff]
offers the same capable performance
of the original but with a new look
and a new loadout to help you
write a different story![page break]Pepper the field with [color=0001]Ink Mines[color=ffff]
to bookmark your enemies for
easy splatting later.[page break]And use the [color=0001]Ink Vac [color=ffff]special to set
up the ultimate plot twist—literally
reversing enemy progress and making
it easier for your team to move
around the map and splat freely![page break]Just remember—even if you fancy
yourself a brilliant writer, you could
use a coauthor. This set is designed
with teamwork in mind, so don't be
afraid to collaborate!`,Spinner_HyperShort_00:`The [color=0001]Heavy Edit Splatling[color=ffff] boasts the
fastest fire rate of any splatling
and—despite the name—a surprisingly
lightweight feel, allowing you to move
quickly and shoot quickly-er.[page break]Oh, I wish I could edit what I just
said as quickly as this weapon edits
enemies out of the picture. No one
shot hits particularly hard, but with
this fire rate, it hardly matters![page break]And speaking of speed, your [color=0001]Curling
Bombs[color=ffff] can put you on the glide path
to victory, and the [color=0001]Tacticooler[color=ffff]
special can help you get there
even sooner with a speed burst![page break]You don't need to read between the
lines here. I'm saying this set is
built for one thing—going fast.
Why not buckle up and give it
a try?`,Spinner_Hyper_00:`The [color=0001]Hydra Splatling[color=ffff] is designed to
impose extreme pressure on your
opponents' turf through superior
firepower.[page break]However, because the weapon takes
so long to charge, it's definitely
a liability in close quarters.[page break]I recommend using your [color=0001]Autobombs[color=ffff]
to fend off incoming bogeys—and
they can even help reveal far-off
opponents who can be splatted from
long range![page break]If anyone DOES make it past your
defenses, the unwelcome surprises
aren't over. This loadout allows you
to greet them with a [color=0001]Booyah Bomb[color=ffff]!
Mi casa is NOT su casa![page break]I recommend this setup for all you
homebodies who want to set up
camp and never leave—supporting
your team through long-range
firepower instead!`,Spinner_Quick_00:`Ooo, let me tell you all about the new
and improved [color=0001]Mini Splatling[color=ffff]. Thanks
to a few revisions with the firing
mechanism, it charges more quickly
than ever![page break]This loadout also comes with
[color=0001]Burst Bombs[color=ffff], which are excellent
for inking walls, allowing you to
get vertical in a hurry when the
situation demands it.[page break]And speaking of situational strategy,
with the [color=0001]Ultra Stamp [color=ffff]as your special,
you can push the front line at the
drop of a splat. Try this set out if
you fancy yourself a field general!`,Spinner_Quick_01:`The [color=0001]Zink Mini Splatling [color=ffff]stands out
with a fancy new look and an updated
suite of complementary weapons,
although its performance is identical
to the original Mini Splatling.[page break]First of all, we now have the [color=0001]Toxic
Mist[color=ffff] sub weapon to slow enemies
down. Slow enemies make for good
targets, so you're less likely to
"mist" them with the Mini Splatling![page break]Another good strategy with this
loadout is to fire up the [color=0001]Big Bubbler[color=ffff]
and take cover while you're charging.
Then you can burst forward, ready
to launch an offensive![page break]If you're new to splatlings, this set
is user-friendly and ready to rock.
Give it a try!`,Spinner_Serein_00:`The [color=0001]Nautilus 47[color=ffff] was the first
splatling to allow you to [color=0001]store your
charge [color=ffff]while swimming in ink![page break]It sounds like a small detail, but let
me assure you...it's huge! It means
you can charge undetected until
you're ready to leap out and splat
an unsuspecting opponent.[page break]Of course, this state-of-the-art
weapon has a few other tricks up
its sleeve as well...[page break]It can be [color=0001]paused midshot to charge[color=ffff].
It has a stabilizer to keep your aim
steady while you jump. And it makes
an inkredible grilled cheese! Oh, I may
have dreamed the last one...[page break]Anyway, with the [color=0001]Point Sensor [color=ffff]sub
and [color=0001]Ink Storm [color=ffff]special to help read
opponent positions, this loadout can
make you feel like you're playing in
Cod Mode!`,Spinner_Standard_00:`The mechanics of the [color=0001]Heavy Splatling[color=ffff]
are similar to those of a charger, but
it's in a weapon class of its own![page break]Hold down [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to compress your ink,
and then release [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to unleash a
monster stream![page break]Now, as you might expect, each
charge takes a while to get ready
and uses a huge amount of ink,
leaving you wide-open while you wait.[page break]That's why the [color=0001]Sprinkler [color=ffff]is a great
sub weapon here. It'll help your turf
stay inked and keep a little distance
between you and your enemies.[page break]The pro move is to fire up your
[color=0001]Wave Breaker [color=ffff]to expose enemy
locations while the Heavy Splatling
charges up. Then it's open season
from way downtown![page break]With power like this, even enemies
with chargers will be jelly!`,Spinner_Standard_01:`The [color=0001]Heavy Splatling Deco [color=ffff]is simply
a Heavy Splatling that's been
cosmetically enhanced.[page break]That said, it also comes with a new
loadout, including the [color=0001]Point Sensor[color=ffff]!
Fire up that sub to pinpoint a target,
and...ba-ba-ba-BOOSH! Lay 'em out
with the Heavy Splatling inkpower.[page break]Find yourself in a tight spot? That's
when it's [color=0001]Kraken Royale [color=ffff]time, friend.
The only thing an enemy can do in
the face of that special is run away.[page break]This is a unique loadout that will
set you apart on the battlefield.
Why not give it a shot?`,Stringer_Normal_00:`I am so excited to share this new
weapon tech with you. Behold the
[color=0001]Tri-Stringer[color=ffff]—a [color=0001]stringer[color=ffff]-type weapon
that fires in three directions at once![page break]Press [group=0003 type=000c params=00 00 80 3f 00 00 00 00] while standing or running,
and the ink will [color=0001]fire[color=ffff] [color=0001]horizontally[color=ffff].
Press [group=0003 type=000c params=00 00 80 3f 00 00 00 00] while jumping for a shot
that's concentrated [color=0001]vertically[color=ffff]. The
flexibility is unparalleled![page break]And that's not even the best part.
You can hold down [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to charge a
shot! The ink will fly farther AND
explode if it hits a wall or the floor.[page break]I could go on all day about stringers,
but I should mention that the [color=0001]Toxic
Mist[color=ffff] sub is great for keeping enemies
at bay, or at least slowing them down.[page break]And for enemies that you can't even
reach with a charged shot, you've
got the [color=0001]Killer Wail 5.1 [color=ffff]with supersonic
range at your disposal.[page break]I hope you'll give one of the new
stringers a try!`,Stringer_Normal_01:`The [color=0001]Inkline Tri-Stringer[color=ffff] is a fresh
collab between the makers of the
original Tri-Stringer and Inkline.
With a new loadout and look, I hope
Tri-Stringer fans will check it out![page break]For those on the fence, I've got ideas
about how to take advantage of this
set's strengths. Try luring enemies
with the [color=0001]Sprinkler[color=ffff]—a fully charged
Tri-Stringer shot will take 'em out![page break]And you have the [color=0001]Super Chump [color=ffff]decoy
to help you take advantage of the
main weapon's ultra-long range and
firepower.[page break]I think this setup really lets the
Inkline Tri-Stringer shine, so give
it a fully charged shot!`,Stringer_Short_00:`The [color=0001]REEF-LUX 450 [color=ffff]is a lighter version
of the Tri-Stringer that's a bit more
user-friendly for folks who are new
to stringer-type weapons.[page break]Like most lightweight weapons, it
doesn't pack the biggest punch or
range—no exploding charged shots
here—but it does offer the ability
to [color=0001]store a charge[color=ffff]![page break]This set comes with [color=0001]Curling Bombs[color=ffff]
to help you close the gap into enemy
turf quickly, letting you take full
advantage of the nimble nature of
your main weapon.[page break]And when you want to make a big
impact in a hurry, don't forget about
your [color=0001]Tenta Missiles[color=ffff]. You can make it
rain missiles on opponents out of
range of the REEF-LUX.[page break]This is a highly mobile loadout that
lets you fight with flexibility and still
take down powerhouse opponents.
I hope you give it a try!`,Stringer_Short_01:`On the surface, the [color=0001]REEF-LUX 450
Deco[color=ffff] is what you might expect—a
decorated version of the REEF-LUX
450. But with a fresh loadout,
it offers new possibilities.[page break]For instance, you can now stake out
a safe area with the [color=0001]Splash Wall[color=ffff] sub,
allowing you a window of opportunity
to snipe far-off foes with fully
charged shots.[page break]And when that special gauge is full,
don't hesitate to twist the wrist and
fire off a [color=0001]Reefslider [color=ffff]special. It's a
great way to help push the front line
forward for your team.[page break]I recommend this set for folks who
simply love inking turf but also want
the option to boldly venture behind
enemy lines when the moment is right.`},"CommonMsg/Talk/TalkShop_Fsodr":{Clothes_BasicSkillSame_00:`Hmmm. I'd advise against doing that.
Both of those body cloths contain
the same primary abilities.`,Clothes_BuyS:"Ready to buy?",Clothes_EquipS:"Want to equip?",Clothes_ExpFirst_00:`Funny thing about body cloths...
They have their own [color=0001]abilities[color=ffff]![page break]If you want to learn more, go ahead
and press [group=0003 type=000b params=00 00 80 3f 00 00 00 00] anytime.`,Clothes_ExpRarityUpAndReplace_00:`Ah, so you want to learn more about
[color=0001]star power[color=ffff] and [color=0001]trading in[color=ffff] items?
This is what I've trained for![page break]It's pretty simple, actually. Raising
an item's [color=0001]star power[color=ffff] adds more
ability slots to the item and also
makes it possible to gain body-cloth
XP faster.[page break]On the other hand, [color=0001]trading in[color=ffff] body
cloths gives fresh abilities to the
body cloths. I hope that makes
sense! Happy shopping!`,Clothes_MoneyShortage_00:`BLUUUH. Oh, pardon me. I have an
uncontrollable reaction like that
when a customer is short on cash.
Which you, uh, are...`,Clothes_Offline_00:`Welcome to Jelly Fresh! Thanks for
sho— BLUUUH! Oh no. You're offline!
Sorry, but I'll need you to go to the
[color=0001]lobby [color=ffff]and connect to the [color=0001]internet[color=ffff]
again before shopping.`,Clothes_RankShortage_00:`Welcome to Jelly Fresh! Thanks for
sho— BLUUUH! Oh no![page break]I'm so terribly sorry about this, but
you are—how should I put this the
most delicately—MOLDY.[page break]I can't sell body cloths to anyone
below [color=0001]level 4[color=ffff]. That's when you stop
being moldy and start being fresh.[page break]But don't worry. If you hop into some
[color=0001]Turf War battles[color=ffff] in the [color=0001]lobby[color=ffff], you'll
be fresh enough in no time. Then you
can come back and shop to your
heart's content!`,Clothes_RarityMax_00:`Oh, darn. I'm afraid that the star
power of that body cloth is already
maxed out!`,Clothes_RarityUp_00:`So, do you want to [color=0001]raise the star
power[color=ffff] of your body cloths or [color=0001]trade
'em in[color=ffff]?`,Clothes_ReplaceConfirm_00:`Are you sure? The [color=0001]star power [color=ffff]and
[color=0001]secondary abilities[color=ffff] will be reset.`,Clothes_SoldOtherHome_00:"Ohhh, so sorry. That item is sold out.",Clothes_SoldOut_00:"Sorry! I'm out of stock on that item.",Clothes_ThankYouButFestT_00:`BLUUUH. ExCUSE me! Sorry, but you
can't change body cloths during a
[color=0001]Splatfest[color=ffff]. It's a bit of a faux pas.`,Clothes_ThankYou_00:`Thanks for shopping with me today!
Remember—you can use the [group=0003 type=0005 params=00 00 80 3f 00 00 00 00][color=0001]Equip
menu[color=ffff] to change into your shiny
new body cloths at any time.`,Clothes_ThanksBadgeA_00:`Jelly Fresh! Wow, thank you for
your repeated patronage. It really
means a lot to me.[page break]In fact...I have a little something
special for you. It's an honorary
[color=0001]badge[color=ffff], symbolizing your dedication
to buying the freshest body cloths
around. I hope you like it!`,Clothes_ThanksBadgeB_00:`Jelly Freeeeeesh! Ah, pardon me.
I do get excited sometimes.[page break]And with good reason today! You've
earned the highest honor I can
bestow as a humble shopkeeper. It's
the ultimate [color=0001]badge[color=ffff]—one that only the
biggest fans of body cloths can earn.`,Clothes_WelcomeRank04_00:`Welcome to Jelly Fresh! Thanks for
shopping with me today.[page break]Have we met before? I've studied
language and fashion, but I'm afraid
I can't remember faces.[page break]Well, anyway, you look fresh enough
to buy any of the body cloths I have
in stock right now. Shop around!`,Clothes_WelcomeRank10_00:`Welcome to Jelly Fresh! Thanks for
shopping with me today.[page break]Hey, you're fresher than ever!
That means you deserve some new
body cloths, don't you think?`,Clothes_WelcomeRank20_00:`Welcome to Jelly Fresh! Thanks for
shopping with me today.[page break]Whoa. You just keep getting fresher.
Don't think I haven't noticed! I hope
you find something you like.`,Clothes_WelcomeRank30_00:`Welcome to Jelly Fresh! Thanks for
shopping with me today.[page break]Awesome! Your freshness has gone
up faster than my language skills!
I hope my selection is worthy...`,Clothes_WelcomeS:"Welcome to Jelly Fresh!",Clothes_Welcome_00:"Welcome to Jelly Fresh!",Head_BasicSkillSameS:"WASTE OF TIME!",Head_BasicSkillSame_00:`Um... This gear does the exact same
thing... I think maybe there's no point
in trading it...`,Head_BuyS:"Y-you'll buy it?",Head_EquipS:"Y-you'll equip it?",Head_ExpFirstS:"READ THE MANUAL!",Head_ExpFirst_00:`Our specialty at Cooler Heads is,
you know...gear for your head.[page break]All the ones we sell have these...
[color=0001]gear abilities[color=ffff]. They'll help you out
in battle. Yep.[page break]You can, um, press [group=0003 type=000b params=00 00 80 3f 00 00 00 00] to learn
about them. Please don't [size=75%]ask me[size=100%] [size=50%]more...[size=100%]`,Head_ExpRarityUpAndReplace_00:`Oh...we have something in stock that
you already own. So, um, you can
[color=0001]raise its star power [color=ffff]or [color=0001]trade it in[color=ffff]...[page break][color=0001]Raising the star power[color=ffff] gives it
more ability slots...or raises the
XP earned...
[color=0001]Trading it in[color=ffff] exchanges yours for a
new one with, um, different stuff.[page break]Those sound like fun...right?
Whee...[size=75%]haha...[size=100%][size=50%]ha...[size=100%]`,Head_MoneyShortageS:"BEGONE, MOOCH!",Head_MoneyShortage_00:`Oh, erm, did you not know...that...
your balance isn't enough to cover
that...I don't think...`,Head_OfflineS:"GET IT TOGETHER!",Head_Offline_00:`Oh...hello.[page break]Um, I think you're offline. You should
go to the [color=0001]lobby[color=ffff]... You can get
connected to the [color=0001]internet[color=ffff] there...`,Head_RankShortageS:"GET INKED, CLOWN!",Head_RankShortage_00:`Oh, hello... Oops, I mean...sorry.[page break]We have a rule here that...and I mean
no offense here, but...we can't sell
to people who aren't...well...fresh.[page break]Um, although, once you're [color=0001]level 4[color=ffff]...
that might be fresh enough? Maybe?[page break]Go do some [color=0001]Turf War battles[color=ffff] in the
[color=0001]lobby[color=ffff]... If you want to, that is...
Not doing that [size=75%]is also[size=100%] [size=50%]valid...[size=100%]`,Head_RarityMaxS:"YER OUTTA LUCK!",Head_RarityMax_00:`Ah... I hope you didn't have your
heart set on that. Because, um, you
can't raise the star power any more...`,Head_RarityUp_00:`Oh, um...I think...you have that
already. Do you want to...I dunno...
[color=0001]raise its star power[color=ffff] or...[color=0001]trade it in[color=ffff]?`,Head_ReplaceConfirm_00:`The [color=0001]star power[color=ffff] and [color=0001]secondary
abilities[color=ffff] on these will get reset...
You're cool with that, right?`,Head_SoldOtherHomeS:"TASTES LIKE FAILURE!",Head_SoldOtherHome_00:`Huh? Oh, whoops... I guess...that
one's...sold out already...`,Head_SoldOutS:"NO DEAL, CHUMP!",Head_SoldOut_00:`Ohhh, um, that one's not in stock
anymore. I wish it was... I hate telling
people [size=75%]they can't buy[size=100%] [size=50%]something...[size=100%]`,Head_ThankYouS:"SEE YA, SUCKERS!",Head_ThankYou_00:`Great... Um, if you want to change
into the new gear, you can use the
[group=0003 type=0005 params=00 00 80 3f 00 00 00 00][color=0001]Equip [color=ffff]menu... You [size=75%]probably [size=100%][size=50%]knew that...[size=100%]`,Head_ThanksBadgeAS:"TAKE IT AND SCRAM!",Head_ThanksBadgeA_00:`Oh gosh.. Oh, wow...[page break]There's this, um, [color=0001]badge[color=ffff] we like to give
our regulars...to say, y'know, thanks
for giving us [size=75%]so much[size=100%] [size=50%]business...[size=100%]`,Head_ThanksBadgeBS:"THANKS FER THE CASH!",Head_ThanksBadgeB_00:`Whoa... Did you really just...[page break]There's this special [color=0001]badge[color=ffff] we only
give to, um, the customers we
appreciate the most...[page break]It'd be, um...pretty cool if you put it
on, maybe... If that sounds like the
kind of thing...you [size=75%]might want [size=100%][size=50%]to do...[size=100%]`,Head_WelcomeRank04_00:`Oh...hello. This is my shop, called,
um...Cooler Heads.[page break]You seem pretty fresh, I guess.
I wouldn't mind if you wanted to,
you know...have [size=75%]a look[size=100%] [size=50%]around...[size=100%]`,Head_WelcomeRank10S:"WHO DRESSED YOU?",Head_WelcomeRank10_00:`Oh...hello. This is my shop, called,
um...Cooler Heads.[page break]You're, uh, really...really...fresh.
It's cool of you to come shop here.
Hope our stuff is [size=75%]good enough[size=100%] [size=50%]for you...[size=100%]`,Head_WelcomeRank20S:"SOME FIT, POSER!",Head_WelcomeRank20_00:`Oh...hello. This is my shop, called,
um...Cooler Heads.[page break]Whoa...you're, um, fresher than
fresh? I might need to restock so I
have stuff [size=75%]stylish enough [size=100%][size=50%]for you...[size=100%]`,Head_WelcomeRank30S:"I'M STILL FRESHER!",Head_WelcomeRank30_00:`Oh...hello. This is my shop, called,
um...Cooler Heads.[page break]Wh— Y— How are you THIS fresh?
I...I'm not worthy to have customers
as [size=75%]awesome [size=100%][size=50%]as this...[size=100%]`,Head_WelcomeS:"NO LOITERING!",Head_Welcome_00:"Oh, um...hello.",Shoes_BasicSkillSame_00:`Hey, those have the same primary
ability, so they're like mayo and aioli,
you know? Same thing, different
name! Wait...are they the same?`,Shoes_BuyS:"You want those?",Shoes_EquipS:"Put 'em on?",Shoes_ExpFirst_00:`And you know the shoes we carry
come with [color=0001]gear abilities[color=ffff], right?[page break]Whew. Because I did not wanna try
to explain it. All I know is...they look
fresh, and they help you do fresh
stuff. But, hey...go ahead and tap
[group=0003 type=000b params=00 00 80 3f 00 00 00 00] for more info.`,Shoes_ExpRarityUpAndReplace_00:`Heyyy, looks like we've got some
kicks in stock that are dupes with
a pair you have. That means you can
[color=0001]trade them in[color=ffff] or pump up the [color=0001]star
power[color=ffff] of the pair you already have![page break][color=0001]Pumping up the star power [color=ffff]gives 'em
more ability slots or more XP, while
[color=0001]trading in[color=ffff] means you can get a new
primary ability.`,Shoes_MoneyShortage_00:"Ohhh, you're light on fundage...",Shoes_Offline_00:`Yo! What's uuu—[page break]Oh no! You're offline. Has anyone
ever bought shoes offline? In, like,
the history of shoes? Dang! Go
to the [color=0001]lobby [color=ffff]and connect to the
[color=0001]internet[color=ffff]—you're making me sad!`,Shoes_RankShortage_00:`Yo! What's uuup? You're looking...
not as fresh as I expected.[page break]Sorry—I can't sell you any of these
kicks until you're [color=0001]level 4[color=ffff] or higher.
I don't make the rules! Just go hit
up the [color=0001]lobby [color=ffff]and get into some [color=0001]Turf
War battles[color=ffff], or something, OK?`,Shoes_RarityMax_00:`Uhhh, I'm pretty sure the star power
on those is already maxed out...`,Shoes_RarityUp_00:`Hey, you've already got a pair of
those. Wanna [color=0001]pump up the[color=ffff] [color=0001]star
power[color=ffff] of your pair, or [color=0001]trade yours
in[color=ffff] for the ones we've got?`,Shoes_ReplaceConfirm_00:`The [color=0001]star power[color=ffff] and any [color=0001]secondary
abilities[color=ffff] will be reset, OK?`,Shoes_SoldOtherHome_00:"Sorry, but we're outta those.",Shoes_SoldOut_00:"Awww, those are sold out.",Shoes_ThankYou_00:`Good call. And remember—you can
always change up your look using
the [group=0003 type=0005 params=00 00 80 3f 00 00 00 00][color=0001]Equip menu[color=ffff].`,Shoes_ThanksBadgeA_00:`Yo, you're in here aaaaaall the time
buying everything we drop. It's cool![page break]In fact, we've got a little token-of-
appreciation-type thing that we
give our coolest regulars like you.
It's a [color=0001]badge[color=ffff]! I hope you get a chance
to show it off.`,Shoes_ThanksBadgeB_00:`Dang, you've bought a TON of shoes
from us! Customers like you are as
rare as our rarest shoe drops.[page break]So, here. We give out a special
[color=0001]badge [color=ffff]to the absolute freshest
customers. You've earned it![page break]I've barely even SEEN one of these
before...and I work here? So it must
be, like, super rare. Go show it off
and revel in that clout, player!`,Shoes_WelcomeRank04_00:`Yo! What's uuup? Welcome to
Shrimp Kicks.[page break]Oh, for real? You're already fresh!
That means I can show you aaall the
shoes we're dropping right now.`,Shoes_WelcomeRank10_00:`Yo! What's uuup? Welcome to
Shrimp Kicks.[page break]Hey, I think you're fresh enough to
get in on our latest shoe drops!`,Shoes_WelcomeRank20_00:`Yo! What's uuup? Welcome to
Shrimp Kicks.[page break]Dang, you are fresher than ever!
Not that our shoes can't make
you the freshEST...`,Shoes_WelcomeRank30_00:`Yo! What's uuup? Welcome to
Shrimp Kicks.[page break]Am I misreading your level of extreme
freshness, or nah? 'Cause it's off
the charts! I hope I'm fresh enough
to help you...`,Shoes_WelcomeS:"Yo! What's uuup?",Shoes_Welcome_00:"Yo! What's uuup?",Weapon_BuyGoldS:"Get this one?",Weapon_BuyS:"Get this one?",Weapon_CompleteS:"Roll da dice.",Weapon_Complete_00:`Wow! You've man-a...man-idge...
You got all the weapons!
Congratulations, fellow artillery
en-thooos-ist![page break]If you also got toooooo many
[group=0003 type=001c params=29 5c 4f 3f 00 00 00 00]Sheldon Lie-senses, trade 'em in
for [group=0003 type=0022 params=e1 7a 94 3f 00 00 00 00][color=0001]Shell-Out Tokens[color=ffff] at the
Shell-Out ma-sheen in the [color=0001]lobby[color=ffff]!`,Weapon_EndCloseUpS:"Get wicenses.",Weapon_EndCloseUpWithSaveTransferS:"Unwock dem.",Weapon_EndCloseUpWithSaveTransfer_00:`And you can get [group=0003 type=001c params=29 5c 4f 3f 00 00 00 00]Sheldon Licenses
by battling and...and leveling up. Or
even just developing your skills by
using a part-ick-yular weapon a lot.[page break]AH! You surprised me yet again. You
already have at least one...one
[group=0003 type=001d params=29 5c 4f 3f 00 00 00 00][color=0001]Gold Sheldon License[color=ffff]?! You ARE
a true collector![page break]In that case, I'm pleased to inform
you that...that you can unlock a
larger selection than usual. Right
off the bat. Con-gratoo-lashuns!`,Weapon_EndCloseUp_00:`You can get [group=0003 type=001c params=29 5c 4f 3f 00 00 00 00]Sheldon Licenses by
battling and...leveling up! Or by using
a weapon a lot!`,Weapon_EquipS:"Equip it?",Weapon_ExplainAfterS:"He said dat.",Weapon_ExplainAfter_00:"That's what Sheldon said, anyway.",Weapon_FirstWithSaveTransfer_00:`Hello, hello! Let me guess—you're
looking for some new weapons?
You've come to...to the right place![page break]Wuh-woh... What is THAT?! I didn't
know you were a collector of vint-uj
weapons! It's fas-sin-nate-ing, but
you'll need something far fresher.`,Weapon_FirstWithSaveTransfer_01:`Of...of course, before you walk out of
here with something shiny and new,
you'll, uh...you'll need the correct
[group=0003 type=001c params=29 5c 4f 3f 00 00 00 00][color=0001]Sheldon License[color=ffff], yes?`,Weapon_First_00:`Hello, hello! Let me guess—you're
looking for some new weapons?
You've come to...to the right place![page break]Our weapons come in sets—
a [color=0001]main weapon [color=ffff]on [group=0003 type=000c params=00 00 80 3f 00 00 00 00],
a [color=0001]sub weapon[color=ffff] on [group=0003 type=000a params=00 00 80 3f 00 00 00 00],
and...oh yeah! A [color=0001]special weapon[color=ffff]![page break]Sound...com-pluh-kay-ted? Don't
fret! You can always press [group=0003 type=0003 params=00 00 80 3f 00 00 00 00] to
try out our products before buying.`,Weapon_First_01:`You can get our store's weapons in...
in exchange for [group=0003 type=001c params=29 5c 4f 3f 00 00 00 00][color=0001]Sheldon Licenses[color=ffff]!`,Weapon_GoldLicenseConfirm_00:`Oh, this is un-for-tuna. You don't
have any [group=0003 type=001c params=29 5c 4f 3f 00 00 00 00]Sheldon Licenses right
now. You do have [color=0001]1[color=ffff] [group=0003 type=001d params=29 5c 4f 3f 00 00 00 00]Gold Sheldon
License. And I can accept that. But...[page break]It seems like it would be a waste.
Are you sure you want to use your
[group=0003 type=001d params=29 5c 4f 3f 00 00 00 00]Gold Sheldon License on that?`,Weapon_GoldLicense_00:`At your cur...current [color=0001]level[color=ffff], I think
you're still a little too green to handle
that weapon. But![page break]If you really, really must have it right
now, you can exchange [color=0001]1 [color=ffff][group=0003 type=001d params=29 5c 4f 3f 00 00 00 00]Gold
Sheldon License for it!`,Weapon_LicenseShortageS:"Sowwy...",Weapon_LicenseShortage_00:`I'm afraid you're a bit lacking in the
license dee-part-meant. We can't
part with any of Sheldon's wares for
less than they're worth!`,Weapon_License_00:`At your cur...current [color=0001]level[color=ffff], I think
you're still a little too green to handle
that weapon. But![page break]If you really, really must have it right
now, you can exchange [color=0001]3 [color=ffff][group=0003 type=001c params=29 5c 4f 3f 00 00 00 00]Sheldon
Licenses for it!`,Weapon_LowRankS:"Price: 1 [group=0003 type=001c params=00 00 80 3f 00 00 00 00] @ Lv. [group=0002 type=0000 params=00 02 00 00]",Weapon_OfflineS:"The wobby!",Weapon_Offline_00:`Hello, he—[page break]Oh... You seem to be offline. Come
back when you're cuh-neck-ted to
the [color=0001]internet[color=ffff]. You can get connected
by...by visiting the [color=0001]lobby[color=ffff]!`,Weapon_RankShortageS:"Good wuck!",Weapon_RankShortage_00:`Hello, he— Oh my. Is that truly the
only weapon in your puzz-ess-shun?[page break]I would love to talk your tentacles
off about the stuff I've got in stock.
But I'm not sure you can handle the
sheer fire...firepower at lowly level 1.[page break]Listen. I've got a plan. And it will
work. Go to the [color=0001]lobby [color=ffff]and play some
[color=0001]Regular Battles[color=ffff]. Get to...let's say...
[color=0001]level 2[color=ffff]. Then come back and see me!`,Weapon_ShootingRangeS:"Give it a whirl?",Weapon_SoldOutS:"You got it aweady.",Weapon_SoldOut_00:`I admire your dev...dev-o-shun, but
you already have that weapon!`,Weapon_ThankYouGoldLicenseS:"Dat many weft.",Weapon_ThankYouGoldLicense_00:`Thank you! I know you'll give it a
good home. Remember. You can equip
new weapons in the [group=0003 type=0005 params=00 00 80 3f 00 00 00 00][color=0001]Equip [color=ffff]menu.[page break]Wondering how many [group=0003 type=001d params=29 5c 4f 3f 00 00 00 00]Gold Sheldon
Licenses you still have? Let me just
look it up... Ah! You have [color=0001][group=0002 type=0000 params=00 01 00 00] [color=ffff]left.`,Weapon_ThankYouLastGoldLicenseS:"Aww gone!",Weapon_ThankYouLastGoldLicense_00:`Thank you! I know you'll give it a
good home. Remember. You can equip
new weapons in the [group=0003 type=0005 params=00 00 80 3f 00 00 00 00][color=0001]Equip [color=ffff]menu.[page break]And with that, you've used your last
[group=0003 type=001d params=29 5c 4f 3f 00 00 00 00]Gold Sheldon License!`,Weapon_ThankYouS:"Tank you!",Weapon_ThankYou_00:`Thank you! I know you'll give it a
good home. Remember. You can equip
new weapons in the [group=0003 type=0005 params=00 00 80 3f 00 00 00 00][color=0001]Equip [color=ffff]menu.`,Weapon_UnlockA_00:`I'm pleased to report that my already
wide sell-ek-shun has widened
further yet. Take a look. I insist!`,Weapon_UnlockA_01:`Aha! You're ready to wield the...the
[color=0001][group=0004 type=0001 params=00 00 00 00][color=ffff]!`,Weapon_UnlockB_00:`And that's not all! You're also ready
for the [color=0001][group=0004 type=0001 params=00 00 00 00][color=ffff]!`,Weapon_WelcomeS:"Hewwo, hewwo!",Weapon_Welcome_00:`Hello, hello! What are you in the
market for today?`},"CommonMsg/UnitName":{BankaraPower:"[group=0002 type=0000 params=00 04 00 00].[group=0002 type=0000 params=01 01 00 00]",BigRunHighScore:"x[group=0002 type=0000 params=00 04 00 00]",CapsuleNum:"x [group=0002 type=0000 params=00 02 00 00]",CardGameWin_Prural:"Wins",CardGameWin_Singular:"Win",CatalogLevelExp:"[group=0002 type=0000 params=00 04 00 00]/[group=0002 type=0000 params=01 04 00 00]",CatalogSeason:"[group=0004 type=000c params=01 00 00 00] [group=0002 type=0000 params=00 04 00 00]",CoopDangerLevel:"[group=0002 type=0000 params=00 03 00 00]%",CoopGradeExp:"[group=0002 type=0000 params=00 03 00 00]/[group=0002 type=0000 params=01 03 00 00]",CoopRewardPoint:"[group=0002 type=0000 params=00 05 00 00]p",Date01:"[group=0002 type=0000 params=01 02 00 00]/[group=0002 type=0000 params=02 02 00 00]/[group=0002 type=0000 params=00 04 00 00]",DateTime00:"[group=0002 type=0000 params=00 02 00 00]/[group=0002 type=0000 params=01 02 00 00]  [group=0002 type=0000 params=02 02 00 00]:[group=0002 type=0000 params=03 02 01 00]",DateTime01:"[group=0002 type=0000 params=01 02 00 00]/[group=0002 type=0000 params=02 02 00 00]/[group=0002 type=0000 params=00 04 00 00] [group=0002 type=0000 params=03 02 00 00]:[group=0002 type=0000 params=04 02 01 00]",DateTime02:"[group=0002 type=0000 params=00 02 00 00]/[group=0002 type=0000 params=01 02 00 00] ([group=0004 type=0010 params=02 00 00 00]) [group=0002 type=0000 params=03 02 00 00]:[group=0002 type=0000 params=04 02 01 00]",FestPowCount:"[group=0002 type=0000 params=00 01 00 00]/[group=0002 type=0000 params=01 01 00 00]",FestPower:"[group=0004 type=0004 params=00 00 00 00 00 cd] Power",FestRankExp:"[group=0002 type=0000 params=00 04 00 00]/[group=0002 type=0000 params=01 04 00 00]",FestTeam:"Team [group=0004 type=0004 params=00 00 00 00 00 cd]",FlagMeter:"[group=0002 type=0000 params=00 02 00 00].[group=0002 type=0000 params=01 01 00 00]",Friday:"Fri.",GachiCount:"[size=75%]Score: [size=100%][group=0002 type=0000 params=00 02 00 00]",GachiKnockOut:"KNOCKOUT!",GachiPoint:"[group=0002 type=0000 params=00 03 00 00]p",GearBreakLimit00:"XP x [group=0002 type=0000 params=00 01 00 00].[group=0002 type=0000 params=01 01 00 00]",GearBreakLimit01:"XP x [group=0002 type=0000 params=00 01 00 00].[group=0002 type=0000 params=01 02 01 00]",GearExp:"[group=0002 type=0000 params=00 05 00 00]/[group=0002 type=0000 params=01 05 00 00]",Hyphen1:"-",Hyphen2:"--",Identifier:"#[group=0002 type=0001 params=00 00]",LeaguePower:"[group=0002 type=0000 params=00 04 00 00].[group=0002 type=0000 params=01 01 00 00]",MatchRoom:"Room [group=0002 type=0001 params=00 07]",MinSec_1Digit:"[group=0002 type=0000 params=00 01 00 00]:[group=0002 type=0000 params=01 02 01 00]",MiniGameRankExp:"[group=0002 type=0000 params=00 04 00 00]/[group=0002 type=0000 params=01 04 00 00]",Monday:"Mon.",MsnStageNo:"No. [group=0002 type=0000 params=00 02 00 00]",MsnTimer_MinSec:"[group=0002 type=0000 params=00 02 02 00]:[group=0002 type=0000 params=01 02 01 00]",MsnTimer_MinSecCentsec_00:"[group=0002 type=0000 params=00 02 02 00]:[group=0002 type=0000 params=01 02 01 00].[size=50%][group=0002 type=0000 params=02 02 01 00][size=100%]",Notification_HourAgo:"Hours ago: [group=0002 type=0000 params=00 03 00 00]",Notification_MinAgo:"Minutes ago: [group=0002 type=0000 params=00 03 00 00]",Notification_Now:"Now",NumFestPowMax:"Highest: [group=0002 type=0000 params=00 04 00 00].[group=0002 type=0000 params=01 01 00 00]",NumFestPowNow:"Current: [group=0002 type=0000 params=00 04 00 00].[group=0002 type=0000 params=01 01 00 00]",PaintPercent:"[group=0002 type=0000 params=00 02 00 00].[group=0002 type=0000 params=01 01 01 00]%",PaintPoint:"[group=0002 type=0000 params=00 04 00 00]p",PlayerRankExp:"[group=0002 type=0000 params=00 06 00 00]/[group=0002 type=0000 params=01 06 00 00]",RedIkuraHighScore:"x[group=0002 type=0000 params=00 05 00 00]",Saturday:"Sat.",ScheduleTerm:"[group=0002 type=0001 params=00 00] - [group=0002 type=0001 params=01 00]",SpecialPoint:"[group=0002 type=0000 params=00 03 00 00]p",StatusXPower:"X Power: [group=0002 type=0000 params=00 04 00 00].[group=0002 type=0000 params=01 01 00 00]",Sunday:"Sun.",Thursday:"Thur.",Time00:"[group=0002 type=0000 params=00 02 00 00]:[group=0002 type=0000 params=01 02 01 00]",Tuesday:"Tues.",UdemaePoint:"[group=0002 type=0000 params=00 05 00 00]p",UdemaePointGoal:"NEXT: [group=0002 type=0000 params=00 04 00 00]p",VSTimer:"[group=0002 type=0000 params=00 02 00 00]:[group=0002 type=0000 params=01 02 01 00]",WaveBoss:"XTRAWAVE",WaveNum:"Wave [group=0002 type=0000 params=00 01 00 00]",WeaponExp:"[group=0002 type=0000 params=00 07 00 00]/[group=0002 type=0000 params=01 07 00 00]",WeaponExpMax:"MAX",WeaponUnlockRank:"Level [group=0002 type=0000 params=00 02 00 00]",Wednesday:"Wed.",XPower:"[group=0002 type=0000 params=00 04 00 00].[group=0002 type=0000 params=01 01 00 00]"},"CommonMsg/VS/FestRank":{Rank_Player_00:"[group=0004 type=0004 params=00 00 00 00 00 cd] Fan",Rank_Player_01:"[group=0004 type=0004 params=00 00 00 00 00 cd] Fiend",Rank_Player_02:"[group=0004 type=0004 params=00 00 00 00 00 cd] Defender",Rank_Player_03:"[group=0004 type=0004 params=00 00 00 00 00 cd] Champion",Rank_Player_04:"[group=0004 type=0004 params=00 00 00 00 00 cd] Ruler",Rank_Player_05:"[group=0004 type=0004 params=00 00 00 00 00 cd] Ruler +[group=0002 type=0000 params=01 02 00 00]"},"CommonMsg/VS/Udemae":{Challenging:"Currently attempting Rank-Up Battle!",Promote:"You can attempt a Rank-Up Battle!",Udemae_00:"Ｃ-",Udemae_01:"Ｃ",Udemae_02:"Ｃ+",Udemae_03:"Ｂ-",Udemae_04:"Ｂ",Udemae_05:"Ｂ+",Udemae_06:"Ａ-",Udemae_07:"Ａ",Udemae_08:"Ａ+",Udemae_09:"Ｓ",Udemae_10:"Ｓ+",Udemae_10_2:"Ｓ+[size=50%][group=0002 type=0000 params=00 02 00 00][size=100%]",Udemae_Inv:"---"},"CommonMsg/VS/VSAwardName":{Battle:"#1 Overall Splatter",Battle2:"#2 Overall Splatter",Blower:"#1 Ink Vac User",Castle:"#1 Kraken Royale User",Chariot:"#1 Crab Tank User",Chimney:"#1 Splattercolor Screen User",DamageRecovery:"#1 Damage Taker",EnergyStand:"#1 Tacticooler User",Firework:"#1 Super Chump User",FirstSplat:"First Splat!",GachiareaFrontHold:"#1 Splat Zone Guard",GachiareaFrontHold2:"#2 Splat Zone Guard",GachiareaPaint:"#1 Splat Zone Inker",GachiareaPaint2:"#2 Splat Zone Inker",GachiareaStay:"#1 Splat Zone Hero",GachiasariHold:"#1 Clam Carrier",GachiasariHold2:"#2 Clam Carrier",GachiasariInvasion:"#1 Score Booster",GachiasariInvasion2:"#2 Score Booster",GachiasariStop:"#1 Clam Stopper",GachihokoBest:"Record-Score Setter",GachihokoCheckPointPass:"#1 Checkpoint Breaker",GachihokoHold:"#1 Rainmaker Carrier",GachihokoInvasion:"#1 Score Booster",GachihokoInvasion2:"#2 Score Booster",GachihokoStop:"#1 Rainmaker Stopper",GachiyaguraBest:"Record-Score Setter",GachiyaguraCheckPointPass:"#1 Checkpoint Breaker",GachiyaguraInvasion:"#1 Score Booster",GachiyaguraInvasion2:"#2 Score Booster",GachiyaguraStop:"#1 Tower Stopper",GreatBarrier:"#1 Big Bubbler User",InkConsumption:"#1 Ink Consumer",InkStorm:"#1 Ink Storm User",Jetpack:"#1 Inkjet User",Kill:"#1 Enemy Splatter",Kill2:"#2 Enemy Splatter",KillAssist:"#1 Splat Assister",KillAssist2:"#2 Splat Assister",MicroLaser:"#1 Killer Wail 5.1 User",MoveDistance:"#1 Ground Traveler",MultiMissile:"#1 Tenta Missiles User",NawabariDefenseMyTeamArea:"#1 Base Defender",NawabariPaintMyTeamArea:"#1 Home-Base Inker",NawabariPaintMyTeamArea2:"#2 Home-Base Inker",NawabariPaintOpTeamArea:"#1 Enemy-Base Inker",NawabariPaintOpTeamArea2:"#2 Enemy-Base Inker",NiceBall:"#1 Booyah Bomb User",Paint:"#1 Turf Inker",Paint2:"#2 Turf Inker",Pogo:"#1 Triple Splashdown User",Ref_No1:"#1",Ref_No2:"#2",ShockSonar:"#1 Wave Breaker User",Skewer:"#1 Reefslider User",Standout:"#1 Popular Target",Standout2:"#2 Popular Target",SuperHook:"#1 Zipcaster User",SuperJumpTarget:"#1 Super Jump Spot",SuperJumpTarget2:"#2 Super Jump Spot",TripleTornado:"#1 Triple Inkstrike User",UltraShot:"#1 Trizooka User",UltraStamp:"#1 Ultra Stamp User"},"CommonMsg/VS/VSRegularWinGrade":{Grade_00:"Dry",Grade_01:"Raw",Grade_02:"Fresh",Grade_03:"SUPERFRESH!",Grade_04:"SUPERFRESH!"},"CommonMsg/VS/VSRuleName":{Pnt:"Turf War",Pnt_2L:`Turf
War`,Tcl:"Tricolor Turf War",Tcl_2L:`Tricolor
Turf War`,Var:"Splat Zones",Var_2L:`Splat
Zones`,Vcl:"Clam Blitz",Vcl_2L:`Clam
Blitz`,Vgl:"Rainmaker",Vgl_2L:"Rainmaker",Vlf:"Tower Control",Vlf_2L:`Tower
Control`},"CommonMsg/VS/VSStageName":{BigSlope:"Brinewater Springs",Carousel:"Wahoo World",Cross:"Robo ROM-en",District:"Eeltail Alley",Factory:"Um'ami Ruins",Hiagari:"Mahi-Mahi Resort",Jyoheki:"Flounder Heights",Kaisou:"Hammerhead Bridge",Line:"MakoMart",Nagasaki:"Sturgeon Shipyard",Pillar:"Manta Maria",Pivot:"Museum d'Alfonsino",Random:"Random",Ruins:"Bluefin Depot",Scrap:"Mincemeat Metalworks",Section:"Barnacle & Dime",Spider:"Crableg Capital",Temple:"Undertow Spillway",Twist:"Shipshape Cargo Co.",Unknown:"???",Upland:"Inkblot Art Academy",Wave:"Humpback Pump Track",Yagara:"Hagglefish Market",Yunohana:"Scorch Gorge"},"CommonMsg/VS/XRankingRegion":{Atlantic_Detail:"The Americas/Europe",Atlantic_Short:"[group=0003 type=002b params=00 00 80 3f 00 00 00 00]Tentatek Division",Atlantic_Short_Plain:"Tentatek Division",Pacific_Detail:"Japan/Hong Kong/S. Korea/Australia/New Zealand",Pacific_Short:"[group=0003 type=002c params=00 00 80 3f 00 00 00 00]Takoroka Division",Pacific_Short_Plain:"Takoroka Division"},"CommonMsg/Weapon/WeaponExp_Special":{SpBlower:`Make your ink shots more powerful by sucking up
enemy attacks! Hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to generate a vortex
that sucks up enemy ink attacks. Once the tank is
full, or after the timer runs out, let go of [group=0003 type=000c params=00 00 80 3f 00 00 00 00],
and you'll launch a souped-up super ink shot!`,SpCastle:`If you ever wanted to become a giant squid or
octopus, this weapon is for you. While transformed,
you can move around and repel enemy attacks.
Jump and splat your enemies with powerful spin
moves, or hold [group=0003 type=000c params=00 00 80 3f 00 00 00 00] and then release to charge
forward aggressively.`,SpChariot:`Leave your foes in a pinch with this scuttling tank's
superior inkpower. Press [group=0003 type=000c params=00 00 80 3f 00 00 00 00] for rapid-fire
shots—[group=0003 type=000a params=00 00 80 3f 00 00 00 00] will fire your cannon. Its back is
vulnerable to enemy attacks, but you can shift into
mobile mode with [group=0003 type=000b params=00 00 80 3f 00 00 00 00] to protect yourself.`,SpChimney:`Not quite a shield but unlike any other offensive
weapon, this device produces a large, slowly moving
sheet when you press [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to deploy. Enemies
who touch the sheet will take damage and briefly
lose the ability to perceive color! Anyone who even
LOOKS upon the sheet will be mildly disturbed.`,SpEnergyStand:`Deploys a fridge stocked with drinks that enhance
some of your abilities for a brief time. There are
four drinks, but you can only have one—the rest
are for sharing! You'll lose the enhancement if
you're splatted while the drink is in effect, but
you'll respawn right away.`,SpFirework:`Tired of getting jumped immediately after a Super
Jump? Use the Super Chump to fire several decoys
that appear to be Super Jump landing points into a
wide area using [group=0003 type=000c params=00 00 80 3f 00 00 00 00], then giggle as your enemies
move in just as the decoys explode with ink.`,SpGreatBarrier:`Deploy this device at your feet to shield yourself
with a large, spherical barrier. This bubble will block
outside ink attacks, but it can't prevent opponents
themselves from entering. Damage to the top section
or the inner device will cause the barrier to pop
more quickly.`,SpInkStorm:`Throw this device to generate a rain cloud of ink.
The cloud gradually moves away from where the
device was thrown.`,SpJetpack:`This launches you into the air by spraying out
ink, allowing you to attack opponents with the
attached launcher. You can fly higher temporarily
by pressing [group=0003 type=0001 params=00 00 80 3f 00 00 00 00].`,SpMicroLaser:`Unleashes six speaker-shaped, laser-emitting
devices to surround and devastate your enemies.
Lock onto an opponent, and the emitters will track
and blast them wherever they go! You can continue
to use your main weapon and sub weapon while the
Killer Wail 5.1 is firing.`,SpMultiMissile:`Press [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to fire missiles at any enemies
within your targeting reticle. Locking on to
several enemies will change the number of
missiles that hit each target.`,SpNiceBall:`Funnel power into an explosive ink ball, and launch it
at the enemy. By sending and receiving "Booyahs"
from your team, you can build power more quickly.
Teammates who send Booyahs will be rewarded by
having their special gauge filled a little.`,SpPogo:`What's better than splashing down with one fist in
a burst of ink-splattered devastation? Splashing
down with THREE fists in a burst of ink-splattered
devastation! You can even use this special at the
end of a Super Jump, but its power will be dialed
back to one fist in that case.`,SpShockSonar:`Deploys a device that generates sonic waves to drive
hidden opponents out into the open. Waves expand
along the ground, marking and dealing damage to any
opponents they touch. To avoid damage, simply jump
over each wave.`,SpSkewer:`Hop onto a shark-shaped, ink-propelled float, and
charge forward. When you reach the end of the path,
or if you press [group=0003 type=000c params=00 00 80 3f 00 00 00 00], the float will explode and
deal damage.`,SpSuperHook:`Transform into an ink-cloaked acrobat, and sling
your stretchy arm to zip around the battlefield!
Use [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to aim and stick to walls. You can still
use your main weapon like normal with [group=0003 type=000c params=00 00 80 3f 00 00 00 00]. When
your ink runs out, your transformation will end, and
you'll Super Jump back to your starting location.`,SpTripleTornado:`Throw and deploy a guidance device with [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to
cause a tornado-generating ink strike to land on that
spot from above. You can deploy up to three guidance
devices to activate three separate ink tornadoes.`,SpUltraShot:`Press [group=0003 type=000c params=00 00 80 3f 00 00 00 00] to launch three blasts of spiraling ink
in a single shot. You can fire it up to three times.`,SpUltraStamp:`Attack with an enormous hammer. Press and hold
[group=0003 type=000c params=00 00 80 3f 00 00 00 00] to advance while striking with the hammer.
If you press and release [group=0003 type=000a params=00 00 80 3f 00 00 00 00], you'll throw the
hammer far into the distance to attack and the
special will end.`},"CommonMsg/Weapon/WeaponExp_Sub":{Beacon:`A device that emits a signal that Inklings and
Octolings can detect. You can Super Jump to a
teammate's Squid Beakon by selecting it and
pressing [group=0003 type=0000 params=00 00 80 3f 00 00 00 00]. You can place up to three at a time.
They're usually single use, but allies who don't have
the Squid Beakon equipped can use them twice.`,Bomb_Curling:`A bomb that moves in a straight line, inking the
ground before it explodes. It also bounces off
walls! You can adjust the length of time until
detonation by holding down [group=0003 type=000a params=00 00 80 3f 00 00 00 00].`,Bomb_Fizzy:`A bomb loaded with special carbonated ink.
Hold [group=0003 type=000a params=00 00 80 3f 00 00 00 00] to build power, then unleash up
to three explosions. Shake the controller,
move the Stick, or mash buttons to build
power faster!`,Bomb_Quick:`A bomb that explodes when it touches something.
It's a small, weak explosion, but it doesn't consume
much ink, so you can throw one after another.`,Bomb_Robot:`A bomb that automatically seeks out opponents.
It will search for opponents in the area that you
throw it, and if it finds one, it will automatically
start walking toward them. When it approaches
an opponent, it stops and explodes.`,Bomb_Splash:`A bomb that explodes a short time after it lands.
It inks the area around it when it explodes and can
even take out opponents.`,Bomb_Suction:`A bomb that attaches to the ground and walls.
It takes longer to explode than the Splat Bombs
and spreads ink farther.`,Bomb_Torpedo:`A sub weapon that flies toward your enemies. When
thrown near an enemy, it changes shape and targets
the foe, exploding on impact and splatting ink
everywhere. You can shoot down enemy torpedoes.`,LineMarker:`A sub weapon that fires straight forward and leaves
a line in its path. Opponents that are hit directly will
take damage, and those that touch the remaining line
will be marked. When a shot hits a solid surface, it
will bounce off of it and continue in a straight line.`,PointSensor:`A device that marks opponents nearby where it's
thrown. It reveals the opponents' locations to
your teammates.`,PoisonMist:`A bottle that sprays the fluid of a certain creature in
mist form. Opponents caught in the mist move slower
and their ink is slightly reduced. The longer an enemy
is in the mist, the stronger the effect becomes.`,Shield:`A device that erects a wall of ink in front of you that
blocks enemy intrusion and attacks. Attacks from
enemies will speed up the time it takes for the wall
to come down. You can only place one at a time.`,Sprinkler:`A device that attaches to the ground or to walls and
sprays ink. It operates at full power right when you
place it but gradually gets weaker. You can only place
one at a time.`,Trap:`A trap that you place on the ground. When an
opponent gets close, it activates, marking that
opponent. It'll also activate if inked by an opponent.
You can place two at once.`},"CommonMsg/Weapon/WeaponName_Main":{Blaster_Bear_Coop:"Grizzco Blaster",Blaster_LightLong_00:"Rapid Blaster Pro",Blaster_LightLong_01:"Rapid Blaster Pro Deco",Blaster_LightLong_Coop:"Rapid Blaster Pro",Blaster_LightLong_Msn:"Rapid Blaster Pro",Blaster_LightShort_00:"Clash Blaster",Blaster_LightShort_01:"Clash Blaster Neo",Blaster_LightShort_Coop:"Clash Blaster",Blaster_LightShort_Msn:"Clash Blaster",Blaster_Light_00:"Rapid Blaster",Blaster_Light_01:"Rapid Blaster Deco",Blaster_Light_Coop:"Rapid Blaster",Blaster_Light_Msn:"Rapid Blaster",Blaster_Long_00:"Range Blaster",Blaster_Long_Coop:"Range Blaster",Blaster_Long_Msn:"Range Blaster",Blaster_Middle_00:"Blaster",Blaster_Middle_01:"Custom Blaster",Blaster_Middle_Coop:"Blaster",Blaster_Middle_Msn:"Blaster",Blaster_Precision_00:"S-BLAST '92",Blaster_Precision_01:"S-BLAST '91",Blaster_Precision_Coop:"S-BLAST '92",Blaster_RivalLv1_00:"-",Blaster_RivalLv2_00:"-",Blaster_Short_00:"Luna Blaster",Blaster_Short_01:"Luna Blaster Neo",Blaster_Short_Coop:"Luna Blaster",Blaster_Short_Msn:"Luna Blaster",Brush_Heavy_00:"Painbrush",Brush_Heavy_01:"Painbrush Nouveau",Brush_Heavy_Coop:"Painbrush",Brush_Mini_00:"Inkbrush",Brush_Mini_01:"Inkbrush Nouveau",Brush_Mini_Coop:"Inkbrush",Brush_Mini_Msn:"Inkbrush",Brush_Normal_00:"Octobrush",Brush_Normal_01:"Octobrush Nouveau",Brush_Normal_Coop:"Octobrush",Brush_Normal_Msn:"Octobrush",Brush_RivalLv1_00:"-",Brush_RivalLv2_00:"-",Charger_Bear_Coop:"Grizzco Charger",Charger_Keeper_00:"Goo Tuber",Charger_Keeper_01:"Custom Goo Tuber",Charger_Keeper_Coop:"Goo Tuber",Charger_Keeper_Msn:"Goo Tuber",Charger_Light_00:"Bamboozler 14 Mk I",Charger_Light_Coop:"Bamboozler 14 Mk I",Charger_Light_Msn:"Bamboozler 14 Mk I",Charger_LongScope_00:"E-liter 4K Scope",Charger_LongScope_Msn:"E-liter 4K Scope",Charger_Long_00:"E-liter 4K",Charger_Long_Coop:"E-liter 4K",Charger_Long_Msn:"E-liter 4K",Charger_NormalScope_00:"Splatterscope",Charger_NormalScope_01:"Z+F Splatterscope",Charger_NormalScope_Msn:"Splatterscope",Charger_Normal_00:"Splat Charger",Charger_Normal_01:"Z+F Splat Charger",Charger_Normal_Coop:"Splat Charger",Charger_Normal_Msn:"Splat Charger",Charger_Pencil_00:"Snipewriter 5H",Charger_Pencil_01:"Snipewriter 5B",Charger_Pencil_Coop:"Snipewriter 5H",Charger_Quick_00:"Classic Squiffer",Charger_Quick_Coop:"Classic Squiffer",Charger_Quick_Msn:"Classic Squiffer",Free:"-",Maneuver_Bear_Coop:"Grizzco Dualies",Maneuver_Dual_00:"Dualie Squelchers",Maneuver_Dual_01:"Custom Dualie Squelchers",Maneuver_Dual_Coop:"Dualie Squelchers",Maneuver_Dual_Msn:"Dualie Squelchers",Maneuver_Gallon_00:"Glooga Dualies",Maneuver_Gallon_Coop:"Glooga Dualies",Maneuver_Gallon_Msn:"Glooga Dualies",Maneuver_Normal_00:"Splat Dualies",Maneuver_Normal_01:"Enperry Splat Dualies",Maneuver_Normal_Coop:"Splat Dualies",Maneuver_Normal_Msn:"Splat Dualies",Maneuver_RivalLv1_00:"-",Maneuver_RivalLv2_00:"-",Maneuver_Short_00:"Dapple Dualies",Maneuver_Short_01:"Dapple Dualies Nouveau",Maneuver_Short_Coop:"Dapple Dualies",Maneuver_Short_Msn:"Dapple Dualies",Maneuver_Stepper_00:"Dark Tetra Dualies",Maneuver_Stepper_01:"Light Tetra Dualies",Maneuver_Stepper_Coop:"Dark Tetra Dualies",Maneuver_Stepper_Msn:"Dark Tetra Dualies",Roller_Compact_00:"Carbon Roller",Roller_Compact_01:"Carbon Roller Deco",Roller_Compact_Coop:"Carbon Roller",Roller_Compact_Msn:"Carbon Roller",Roller_Heavy_00:"Dynamo Roller",Roller_Heavy_01:"Gold Dynamo Roller",Roller_Heavy_Coop:"Dynamo Roller",Roller_Heavy_Msn:"Dynamo Roller",Roller_Hunter_00:"Flingza Roller",Roller_Hunter_Coop:"Flingza Roller",Roller_Hunter_Msn:"Flingza Roller",Roller_Normal_00:"Splat Roller",Roller_Normal_01:"Krak-On Splat Roller",Roller_Normal_Coop:"Splat Roller",Roller_Normal_Msn:"Splat Roller",Roller_RivalLv1_00:"-",Roller_RivalLv2_00:"-",Roller_Wide_00:"Big Swig Roller",Roller_Wide_01:"Big Swig Roller Express",Roller_Wide_Coop:"Big Swig Roller",Saber_Bear_Coop:"Grizzco Splatana",Saber_Lite_00:"Splatana Wiper",Saber_Lite_01:"Splatana Wiper Deco",Saber_Lite_Coop:"Splatana Wiper",Saber_Normal_00:"Splatana Stamper",Saber_Normal_01:"Neo Splatana Stamper",Saber_Normal_Coop:"Splatana Stamper",Saber_Normal_Msn:"Splatana Stamper",Shelter_Bear_Coop:"Grizzco Brella",Shelter_Compact_00:"Undercover Brella",Shelter_Compact_01:"Undercover Sorella Brella",Shelter_Compact_Coop:"Undercover Brella",Shelter_Compact_Msn:"Undercover Brella",Shelter_Normal_00:"Splat Brella",Shelter_Normal_01:"Sorella Brella",Shelter_Normal_Coop:"Splat Brella",Shelter_Normal_Msn:"Splat Brella",Shelter_RivalLv1_00:"-",Shelter_RivalLv2_00:"-",Shelter_Wide_00:"Tenta Brella",Shelter_Wide_01:"Tenta Sorella Brella",Shelter_Wide_Coop:"Tenta Brella",Shelter_Wide_Msn:"Tenta Brella",Shooter_Blaze_00:"Aerospray MG",Shooter_Blaze_01:"Aerospray RG",Shooter_Blaze_Coop:"Aerospray MG",Shooter_Blaze_Msn:"Aerospray MG",Shooter_Expert_00:"Splattershot Pro",Shooter_Expert_01:"Forge Splattershot Pro",Shooter_Expert_Coop:"Splattershot Pro",Shooter_Expert_Msn:"Splattershot Pro",Shooter_First_00:"Splattershot Jr.",Shooter_First_01:"Custom Splattershot Jr.",Shooter_First_Coop:"Splattershot Jr.",Shooter_First_Msn:"Splattershot Jr.",Shooter_Flash_00:"Squeezer",Shooter_Flash_01:"Foil Squeezer",Shooter_Flash_Coop:"Squeezer",Shooter_Flash_Msn:"Squeezer",Shooter_Gravity_00:".52 Gal",Shooter_Gravity_Coop:".52 Gal",Shooter_Gravity_Msn:".52 Gal",Shooter_Heavy_00:".96 Gal",Shooter_Heavy_01:".96 Gal Deco",Shooter_Heavy_Coop:".96 Gal",Shooter_Heavy_Msn:".96 Gal",Shooter_Long_00:"Jet Squelcher",Shooter_Long_01:"Custom Jet Squelcher",Shooter_Long_Coop:"Jet Squelcher",Shooter_Long_Msn:"Jet Squelcher",Shooter_MissionLv1_00:"ヒーローシューターLv1",Shooter_MissionLv2_00:"ヒーローシューターLv2",Shooter_MissionLv3_00:"ヒーローシューターLv3",Shooter_Normal_00:"Splattershot",Shooter_Normal_01:"Tentatek Splattershot",Shooter_Normal_Coop:"Splattershot",Shooter_Normal_H:"Hero Shot Replica",Shooter_Normal_Msn:"Splattershot",Shooter_Precision_00:"Splash-o-matic",Shooter_Precision_01:"Neo Splash-o-matic",Shooter_Precision_Coop:"Splash-o-matic",Shooter_Precision_Msn:"Splash-o-matic",Shooter_QuickLong_00:"Splattershot Nova",Shooter_QuickLong_01:"Annaki Splattershot Nova",Shooter_QuickLong_Coop:"Splattershot Nova",Shooter_QuickMiddle_00:"N-ZAP '85",Shooter_QuickMiddle_01:"N-ZAP '89",Shooter_QuickMiddle_Coop:"N-ZAP '85",Shooter_QuickMiddle_Msn:"N-ZAP '85",Shooter_RivalLv1_00:"-",Shooter_RivalLv2_00:"-",Shooter_Short_00:"Sploosh-o-matic",Shooter_Short_01:"Neo Sploosh-o-matic",Shooter_Short_Coop:"Sploosh-o-matic",Shooter_Short_Msn:"Sploosh-o-matic",Shooter_TripleMiddle_00:"H-3 Nozzlenose",Shooter_TripleMiddle_01:"H-3 Nozzlenose D",Shooter_TripleMiddle_Coop:"H-3 Nozzlenose",Shooter_TripleMiddle_Msn:"H-3 Nozzlenose",Shooter_TripleQuick_00:"L-3 Nozzlenose",Shooter_TripleQuick_01:"L-3 Nozzlenose D",Shooter_TripleQuick_Coop:"L-3 Nozzlenose",Shooter_TripleQuick_Msn:"L-3 Nozzlenose",Slosher_Bathtub_00:"Bloblobber",Slosher_Bathtub_01:"Bloblobber Deco",Slosher_Bathtub_Coop:"Bloblobber",Slosher_Bathtub_Msn:"Bloblobber",Slosher_Bear_Coop:"Grizzco Slosher",Slosher_Diffusion_00:"Tri-Slosher",Slosher_Diffusion_01:"Tri-Slosher Nouveau",Slosher_Diffusion_Coop:"Tri-Slosher",Slosher_Diffusion_Msn:"Tri-Slosher",Slosher_Double_00:"Dread Wringer",Slosher_Double_Coop:"Dread Wringer",Slosher_Launcher_00:"Sloshing Machine",Slosher_Launcher_01:"Sloshing Machine Neo",Slosher_Launcher_Coop:"Sloshing Machine",Slosher_Launcher_Msn:"Sloshing Machine",Slosher_RivalLv1_00:"-",Slosher_RivalLv2_00:"-",Slosher_Strong_00:"Slosher",Slosher_Strong_01:"Slosher Deco",Slosher_Strong_Coop:"Slosher",Slosher_Strong_Msn:"Slosher",Slosher_Washtub_00:"Explosher",Slosher_Washtub_Coop:"Explosher",Slosher_Washtub_Msn:"Explosher",Spinner_Downpour_00:"Ballpoint Splatling",Spinner_Downpour_01:"Ballpoint Splatling Nouveau",Spinner_Downpour_Coop:"Ballpoint Splatling",Spinner_Downpour_Msn:"Ballpoint Splatling",Spinner_HyperShort_00:"Heavy Edit Splatling",Spinner_HyperShort_Coop:"Heavy Edit Splatling",Spinner_Hyper_00:"Hydra Splatling",Spinner_Hyper_Coop:"Hydra Splatling",Spinner_Hyper_Msn:"Hydra Splatling",Spinner_Quick_00:"Mini Splatling",Spinner_Quick_01:"Zink Mini Splatling",Spinner_Quick_Coop:"Mini Splatling",Spinner_Quick_Msn:"Mini Splatling",Spinner_Serein_00:"Nautilus 47",Spinner_Serein_Coop:"Nautilus 47",Spinner_Serein_Msn:"Nautilus 47",Spinner_Standard_00:"Heavy Splatling",Spinner_Standard_01:"Heavy Splatling Deco",Spinner_Standard_Coop:"Heavy Splatling",Spinner_Standard_Msn:"Heavy Splatling",Stringer_Bear_Coop:"Grizzco Stringer",Stringer_Normal_00:"Tri-Stringer",Stringer_Normal_01:"Inkline Tri-Stringer",Stringer_Normal_Coop:"Tri-Stringer",Stringer_Normal_Msn:"Tri-Stringer",Stringer_Short_00:"REEF-LUX 450",Stringer_Short_01:"REEF-LUX 450 Deco",Stringer_Short_Coop:"REEF-LUX 450"},"CommonMsg/Weapon/WeaponName_Special":{SpBlower:"Ink Vac",SpBlower_Mission:"Ink Vac",SpCastle:"Kraken Royale",SpCastle_Coop:"Kraken Royale",SpChariot:"Crab Tank",SpChariot_Coop:"Crab Tank",SpChariot_Mission:"Crab Tank",SpChimney:"Splattercolor Screen",SpEnergyStand:"Tacticooler",SpFirework:"Super Chump",SpGachihoko:"Rainmaker",SpGachihokoForEventMatch:"Rainmaker",SpGreatBarrier:"Big Bubbler",SpGreatBarrier_Rival:"-",SpIkuraShoot:"-",SpInkStorm:"Ink Storm",SpInkStorm_Mission:"Ink Storm",SpInkStorm_Rival:"-",SpJetpack:"Inkjet",SpJetpack_Coop:"Inkjet",SpJetpack_Mission:"Inkjet",SpJetpack_Rival:"-",SpMicroLaser:"Killer Wail 5.1",SpMicroLaser_Coop:"Killer Wail 5.1",SpMicroLaser_Mission:"Killer Wail 5.1",SpMultiMissile:"Tenta Missiles",SpMultiMissile_Mission:"Tenta Missiles",SpMultiMissile_Rival:"-",SpNiceBall:"Booyah Bomb",SpNiceBall_Coop:"Booyah Bomb",SpPogo:"Triple Splashdown",SpPogo_Coop:"Triple Splashdown",SpShockSonar:"Wave Breaker",SpShockSonar_Coop:"Wave Breaker",SpShockSonar_Mission:"Wave Breaker",SpShockSonar_Rival:"-",SpSkewer:"Reefslider",SpSkewer_Coop:"Reefslider",SpSkewer_Mission:"Reefslider",SpSuperHook:"Zipcaster",SpSuperHook_Mission:"Zipcaster",SpSuperLanding:"Splashdown",SpSuperLanding_Coop:"Splashdown",SpSuperLanding_Rival:"-",SpTripleTornado:"Triple Inkstrike",SpTripleTornado_Coop:"Triple Inkstrike",SpTripleTornado_Mission:"Triple Inkstrike",SpUltraShot:"Trizooka",SpUltraShot_Coop:"Trizooka",SpUltraShot_Mission:"Trizooka",SpUltraStamp:"Ultra Stamp",SpUltraStamp_Mission:"Ultra Stamp"},"CommonMsg/Weapon/WeaponName_Sub":{Beacon:"Squid Beakon",Bomb_Curling:"Curling Bomb",Bomb_Curling_Rival:"-",Bomb_Fizzy:"Fizzy Bomb",Bomb_Quick:"Burst Bomb",Bomb_Quick_Rival:"-",Bomb_Robot:"Autobomb",Bomb_Robot_Rival:"-",Bomb_Splash:"Splat Bomb",Bomb_Splash_Big_Coop:"-",Bomb_Splash_Coop:"-",Bomb_Splash_Rival:"-",Bomb_Suction:"Suction Bomb",Bomb_Torpedo:"Torpedo",LineMarker:"Angle Shooter",PointSensor:"Point Sensor",PoisonMist:"Toxic Mist",SalmonBuddy:"Smallfry",Shield:"Splash Wall",Sprinkler:"Sprinkler",Trap:"Ink Mine"},"CommonMsg/Weapon/WeaponParamName":{Blaze:"Fire Rate",Charge:"Charge Speed",Defence:"Durability",Explosion:"Impact",Mobility:"Mobility",PaintSpeed:"Ink Speed",Power:"Damage",Range:"Range",Weight:"Handling"},"CommonMsg/Weapon/WeaponTypeName":{Blaster:"Blasters",Brush:"Brushes",Charger:"Chargers",Maneuver:"Dualies",Roller:"Rollers",Saber:"Splatanas",Shelter:"Brellas",Shooter:"Shooters",Slosher:"Sloshers",Spinner:"Splatlings",Stringer:"Stringers"},"EventFlowMsg/Fsodr_Plaza_Intro":{"000":`Welcome to Inkopolis![page break]This is the [color=0001]plaza[color=ffff], where all the freshest folk
come to chill like krill.[page break]Most Inklings and Octolings are obsessed with
the hottest sport in Inkopolis...INK BATTLES!`,"003":`That crazy-tall building is [color=0001]Inkopolis Tower[color=ffff].
The city's most famous landmark!`,"004":`There's a [color=0001]lobby[color=ffff] on the first floor of
Inkopolis Tower for online battles.`,"005":`This is the [color=0001]Booyah Base[color=ffff], a shopping mall for
all your Inkling and Octoling needs.[page break]You can buy all kinds of fresh [color=0001]gear [color=ffff]and
[color=0001]weapons[color=ffff] to use in battle.[page break]But the shops are pretty exclusive, and they
won't serve you if you're not fresh enough!`,"008":`Looking for part-time work? Not particular
about employer reputation? [color=0001]Grizzco [color=ffff]is for you!`,"009":`If you want to visit another city, you can hit
up the [color=0001]train station[color=ffff] here.[page break]But also...`,"010":`Don't miss [color=0001]the Shoal[color=ffff]! It's THE place to splat
and be splatted in Inkopolis.[page break]Local Inklings and Octolings meet here with
friends for co-op and competitive local play.`,"012":`You might wanna steer clear of that [color=0001]back alley[color=ffff].
Smells a little fishy.`,"013":`That's it for the tour![page break]Whether you're hopping right into battle, working
at Grizzco, or even just vibing, enjoy Inkopolis!`},"EventFlowMsg/LobbyCoop_BigRunTutorial":{Comment_00:`Welcome to Grizzco Industries.[group=0001 type=0000 params=0f 00 00 00] And congrats on
making the kind of sound business decision that
future you will no doubt appreciate.[page break]I take it my advertisements for help with the [color=0001]Big Run[color=ffff]
have been effective. [group=0001 type=0000 params=1e 00 00 00]We are...somewhat short-staffed
at the moment. You've come at just the right time!`,Comment_01:`Oh, by the way, you may have heard that there is a
[color=0001]Big Run [color=ffff]going on right now.`,Comment_02:`You...are aware of the [color=0001]Big Run [color=ffff]phenomenon, yes?
Where Salmonids stray far from their own turf and
invade our city?[page break]It is business critical that we prevent the Salmonids
from damaging the city. [group=0001 type=0000 params=1e 00 00 00]Stopping them is no small task,
but Grizzco employees are willing to risk it all.[page break]The primary objective of stopping the Salmonids just
so happens to dovetail nicely with our core business
model—collecting Golden Eggs. It's all about synergy![page break]Now, we at Grizzco recognize the risk associated with
this challenging task. That's why we're [color=0001]increasing our
payout[color=ffff] for all surviv— Um...for all top producers.[page break]We've even prepared a [color=0001]special decoration[color=ffff] for everyone,
regardless of job performance. For more details, just
press [group=0003 type=0006 params=00 00 80 3f 00 00 00 00] when you're talking to me before a job.[page break]This has been productive. [group=0001 type=0000 params=1e 00 00 00]I'm looking forward to
seeing what you can do with this opportunity.
Good luck!`},"EventFlowMsg/LobbyLocal_FirstEnter":{First_00:`Welcome to [color=0001]the Shoal[color=ffff]! You've come to the right
place to play via [color=0001]local wireless[color=ffff] connection.`,First_01:"Just talk to the receptionist to get started.",First_02:`After you choose your battle mode and stage,
we'll get you right into the action!`},"EventFlowMsg/LobbyVersus_FestMikoshi100":{"000":"You won a 100x Battle! Congrats!","001":`Thanks to your fast inking, you get to board
a [color=0001]Splatfest Float [color=ffff]in Splatsville square![page break]Head to the [color=0001]Splatfest Pledge Box [color=ffff]to climb
aboard. And be sure to get some selfies!`},"EventFlowMsg/LobbyVersus_FestMikoshi333":{"000":"You won a 333x Battle! Congrats!","001":`Thanks to your fast inking, you get to board
a [color=0001]Splatfest Float [color=ffff]in Splatsville square![page break]Head to the [color=0001]Splatfest Pledge Box [color=ffff]to climb
aboard. And be sure to get some selfies!`},"EventFlowMsg/LobbyVersus_UnlockXMatch":{XMatchOpen_00:"Hey, you're X-tremely good at this...",XMatchOpen_01:`But did you know your rank can get even higher?
From Ｓ+[size=75%]０[size=100%] to Ｓ+[size=75%]５０[size=100%]! Don't stop now!`,XMatchOpen_02:"And...you've just unlocked [color=0001]X Battles[color=ffff]!",XMatchOpen_03:`Instead of Rank Points, you'll gain or lose
[color=0001]X Power[color=ffff] when you face off in an X Battle.`,XMatchOpen_04:`Win enough X Power, and you could find yourself
on the X Rankings leaderboard on [color=0001]SplatNet 3[color=ffff]!`,XMatchOpen_05:`The X Rankings leaderboard will [color=0001]reset every
season[color=ffff]. So you always have a chance!`,XMatchOpen_07:"Alright, that's enough X-planation. Go get 'em!"},"EventFlowMsg/LobbyVersus_XRankingReward":{XRankingReward_00:"Special announcement for an X Battle boss...",XRankingReward_01:`The latest X Rankings are out...and you
ranked up! Congratulations!`,XRankingReward_02:`Check out the full rankings in [color=0001]SplatNet 3[color=ffff], and
keep splatting in style!`},"EventFlowMsg/Mission_LotteryDroneDeparture":{"000":"WOOO! Go, little Shel-drone! Do your thing!","001":`You can pick up whatever it finds at the [color=0001]lobby terminal[color=ffff].[group=0001 type=0000 params=1e 00 00 00]
Maybe tomorrowish? I'd give it a little time.`,"002":"Fly, drone, fly! [group=0001 type=0000 params=0f 00 00 00]Awaaay!","003":"Bye-bye!"},"EventFlowMsg/Mission_LotteryDroneFirst":{"000":`Oh, that? That's the [color=0001]Shel-drone[color=ffff]. I bet you can
guess who designed it...`,"001":`...Sheldon, right? [group=0001 type=0000 params=0f 00 00 00]Anyway, he said that thing can help
find hidden items, even here in Alterna. [group=0001 type=0000 params=0f 00 00 00]Well, he said
a LOT more than that, but you get the gist.`,"002":`One of the important things he said is that you need
[group=0003 type=0017 params=00 00 80 3f 00 00 00 00][color=0001]Power Eggs [color=ffff]to operate it. So if you have extras,
maybe give it a try!`,"003":`Yep! And it supposedly takes anything it finds
directly back to the lobby, so check out the
[color=0001]lobby terminal [color=ffff]to pick them up.`,"004":`Once you pick up the item, the Shel-drone will return
here automatically. Fly free, little Shel-drone!`},"EventFlowMsg/News_BigRunAnnounce":{500:"[group=0004 type=0005 params=]...Hello? Why is the camera still rolling?",501:`Ay? Ay. [group=0004 type=0005 params=](Technical issues? Try unplugging
it and then NOT plugging it back in.)`,502:`Ah! It's an emergency news report!
Please hold while we read it...`,503:`Ay. Ay... [group=0004 type=0005 params=](It's from Grizzco. You never know
if that'll be good or bad news...)`,504:"Uh, it's bad. There's a [color=0001]Big Run [color=ffff]incoming!",505:"Noooooo!",506:`A swarm of Salmonids is swiftly approaching
[color=0001]Um'ami Ruins[color=ffff]!`,507:`Don't they know there's going to be a
Splatfest? What are they thinking?!`,508:`Ay... [group=0004 type=0005 params=](I don't think the Splatfest is
happening unless we clear this up...)`,509:"Right. The Salmonids must be stopped.",510:`Viewers—we're counting on you! Step up
and help Grizzco put an end to the Big Run.`,511:`Ay! [group=0004 type=0005 params=](Pro tip: pick a Splatfest team ASAP so
you can get conch shells while you're at it!)`,512:`They have to wait for the Splatfest Sneak
Peek, but yeah. Then it's game on!`,513:`Ay! Ay! Ay! [group=0004 type=0005 params=](Slam those Splatanids! I mean
splat those Salmonids! Stop the Big Run!)`,"000":`Ay! Ayayay! [group=0004 type=0005 params=](Hot off the press! Big Man
here with super-big news!)`,"001":"Are you OK? You're shook!","002":`Ay![group=0004 type=0005 params=] (I'm OK—it's just that I have this
urgent announcement from Grizzco.)`,"003":`Right, they're hiring. They're always hiring.
It's not really news. Lemme see the report...`,"004":"GYAAAH! This is a [color=0001]Big Run [color=ffff]alert!","005":`Wait—we're under attack? Is that what
that means? The Salmonids are coming?!`,"006":`AAAY![group=0004 type=0005 params=] (A swarm of Salmonids is approaching
[color=0001]Wahoo World[color=ffff]! THIS IS NOT A DRILL!)`,"007":`But why Wahoo World? Can Salmonids even
ride rides?`,"008":`Ay? Ay![group=0004 type=0005 params=] (Don't you see? First it's Wahoo
World, then it's the rest of the world!)`,"009":`...We are still talking about Salmonids,
right? Maybe dial it back a tad.`,"010":`But that's not to say we shouldn't give
them a warm Splatlandian welcome, hm?`,"011":`That means beat 'em up, right? Yeah!
Let's show the Salmonids who's boss.`,"012":`Ay...[group=0004 type=0005 params=] (Well, if we'll be working for Grizzco,
then technically THEY'RE the boss, but...)`,"013":`Ay![group=0004 type=0005 params=] (It sounds like they're offering some
kind of special reward for helping out!)`,"014":"Well, well. I'm not above a special reward.","015":`Prepare yourselves, Deep Cut. Let's get to
Grizzco at the start of the Big Run!`,"016":`Wooo! Let's go show those Salmonids who
really runs this city!`,"017":`Ay! Ay?! [group=0004 type=0005 params=](A swarm of Salmonids is headed
for [color=0001]Inkblot Art Academy[color=ffff]! But why there?!)`,"018":`Maybe they're, like, artsy Salmonids?
OOO! Or maybe they just want to learn!`,"019":`Ay? [group=0004 type=0005 params=](Whoa! Will they take classes? Is Splat
History 101 gonna fill before I can sign up?)`,"020":"You haven't taken Splat History 101 yet?!","021":`Never mind Splat History. I'm gonna show
those Salmonids a Splat Future. Let's go!`,"022":`Yes. Let's expel those Salmonids like so
many delinquent children.`,"023":`Ay... Ay?[group=0004 type=0005 params=] (We're probably going to need
some help with this... Anyone?)`,"024":`Aaay! [group=0004 type=0005 params=](The Salmonids are hitting [color=0001]Undertow
Spillway[color=ffff]! Are they after the Splatlands?!)`,"025":`And here I thought their tastes weren't
refined enough to care.`,"026":`An ambush from below? Really? Are they
too spineless to come meet us head-on?!`,"027":`Ay... [group=0004 type=0005 params=](Like a direct assault would be any
less of a nightmare...)`,"028":`Since it's not happening in the city itself,
I say we start showing how we bite back.`,"029":`Yeah! Those punks are gonna be sorry they
ever washed up in Splatsville!`,"030":`Ay! [group=0004 type=0005 params=](WE'LL be sorry if they break through
the spillway. Let's stop those Salmonids!)`,"031":`Aaay! Ay! [group=0004 type=0005 params=](Nooo! A swarm of Salmonids
is approaching [color=0001]Barnacle & Dime[color=ffff]!)`,"032":`What's the big deal? Maybe they just
need fall coats.`,"033":`I don't think they're shopping, Frye.
Everyone knows you wait for a sale.`,"034":`Ay?! Ay... [group=0004 type=0005 params=](And do Salmonids even wear
coats?! It would be pretty cute, I guess...)`,"035":`Well, coats or no coats, it's OUR mall and
we're gonna defend it!`,"036":`That's the spirit! Let's show those window-
shopping Salmonids the door.`,"037":`Ay... Ay! [group=0004 type=0005 params=](We'll need more than one door to
evacuate that many Salmonids... But yes!)`},"EventFlowMsg/News_BigRunBeingHeld":{500:`You know, [color=0001]Grizzco [color=ffff]is hiring if you want to
help clean up the Salmonid mess...`,501:`Ay? [group=0004 type=0005 params=](And they're offering a reward to
anyone who helps out, right?)`,502:`Yeah, but don't do it just for that. Do it to
clear out Salmonids before the Splatfest!`,503:`Ay! Ay? Ay! [group=0004 type=0005 params=](Yes! We want to show off
the Splatlands, don't we? Let's get to it!)`,504:`Word to the wise—you're going to want to
pick a Splatfest team before diving in.`,505:"Gotta load up on those conch shells!","000":`Oh! It looks like Wahoo World is temporarily
closed for the Big Run.`,"001":`No! I haven't been there in years, but I was
totally going to go this weekend! Probably.`,"002":`Well, [color=0001]Grizzco [color=ffff]is hiring if you want to help
clean up the Salmonid mess...`,"003":`Ay![group=0004 type=0005 params=] (I could use a job! How many Salmonids
per hour? And can I keep them as pets?)`,"003_1":`The more Golden Eggs you get, the fancier
your reward, right?`,"003_2":`Ay. Ay! [group=0004 type=0005 params=](More or less. Even if you beat the
highest score, might as well keep going!)`,"003_3":`Ah, yes. The promise of a fancy gift is
quite motivating...`,"004":`No mention of pay...but it says something
about a thank-you gift!`,"005":`So I get to show these Salmonids who's
boss AND get a free gift? Sign me up!`,"006":`...Ay? Ay.[group=0004 type=0005 params=] (...And you want to help save the
city, right? Good for you.)`,"007":`There's a Big Run going on right now, so you
might want to avoid Inkblot Art Academy...`,"008":`Yeah, school's in session, but not the way
you think. It's a good day to play hooky.`,"009":`I hear Undertow Spillway is off-limits for
the moment, thanks to the Big Run.`,"010":`We should make it off-limits to Salmonids
too! How'd no one else think of that?`,"011":`Watch out for the Big Run at Um'ami Ruins!
As if the place wasn't crowded enough...`,"012":`I bet those Salmonids are sneaking in
without paying admission!`,"013":`With the Big Run underway, some shops at
Barnacle & Dime are closed.`,"014":`Only SOME? You're telling me I could still go
shopping during the chaos of a Big Run?`},"EventFlowMsg/News_BigRunBeingHeld_Short":{100:`Yeah! C'mon, we can't let those stinking
Salmonids take over our amusement park!`,101:`Ay![group=0004 type=0005 params=] (You're right. We've got to fight for our
right to go on dangerously outdated rides!)`,110:`Ay?![group=0004 type=0005 params=] (Why would they target Wahoo World
in the first place? Do they hate fun?!)`,111:`They're fish, Big Man. All they do is swim,
spawn, eat, repeat. Sounds nice, actually...`,120:`I just hope the Wahoo World mascot is OK.
Fresh Fish, wiggle your tail if you're safe!`,121:`Oh, I'm sure Fresh Fish and the Salmonids
are getting along swimmingly.`,200:`Have you seen Inkblot Art Academy since
the Big Run? School is NOT in session!`,201:`Ay! [group=0004 type=0005 params=](If you want to help restore order,
head to Grizzco and volunteer!)`,210:`I can't believe those Salmonids would deface
a school like that. So disrespectful!`,211:`Ay. [group=0004 type=0005 params=](I'm pretty sure we've done worse...
literally every time we battle there.)`,220:`All those Salmonids swarming around
priceless art... The situation itself is art!`,221:`Ay. Ay! [group=0004 type=0005 params=](Maybe so, but I wouldn't stand
around admiring it. You'll get splatted!)`,230:`I'm still wondering how all those Salmonids
could afford the entrance fees...`,231:`They're all part of a school, so I'm sure
they got the student discount.`,300:`Undertow Spillway is even more of a health
hazard than usual, what with the Big Run.`,301:`Ay! [group=0004 type=0005 params=](If you want to pitch in, Grizzco is
looking for Salmonid fodder!)`,310:`Betcha the Salmonids are right at home
with all the running water down there.`,311:`Ay. [group=0004 type=0005 params=](I guess, but there's better real estate
in the city than the sewers.)`,320:`You know, there's a sluice down there.
Why don't we simply open the floodgates?`,321:`Ay. [group=0004 type=0005 params=](It's busted, and the city won't fix it.
They consider it a "decorative" valve.)`,330:`Pah! Those slimy slobs are messing with an
important Splatlands revenue stream!`,331:`Yeah, it's weird how many tourists go down
there. Call themselves "drainspotters."`,400:`It sounds like Um'ami Ruins is completely,
well, overrun by the Big Run right now.`,401:`Ay! [group=0004 type=0005 params=](Anyone willing to lend a tentacle
should head to Grizzco ASAP!)`,410:`Ay? Ay? [group=0004 type=0005 params=](Why are the Salmonids invading
the ruins though? What's the deal?)`,411:`The same reason I want to invade the
ruins—treasure!`,420:`Well, it sounds like the on-site researchers
have their hands full fighting them off...`,421:`Ay! Ay! [group=0004 type=0005 params=](I'm glad someone is protecting the
ruins! The site is historically notable!)`,430:`Do you think the Salmonids are actually
there for the history?`,431:"Well, we know YOU aren't, Frye!",500:`Barnacle & Dime is out of control now, but
not in a fun way, like when there's a sale.`,501:`Ay! Ay. [group=0004 type=0005 params=](Ooo, you're talking about the Big
Run! Head to Grizzco if you want to help.)`,510:`I guess a shopping spree at Barnacle & Dime
with my little sisters is out of the question.`,511:`Ay! Ay! [group=0004 type=0005 params=](Not if we take it back from the
Salmonids! Let's gooo!)`,520:`Ay? [group=0004 type=0005 params=](Do you think the Salmonids want the
mall space to open their own store?)`,521:`What in the world would they sell?!
Certainly nothing I'm interested in buying.`,530:`Those scheming Salmonids better not buy
up all the best stuff before I get to it!`,531:`Thousands of customers storming the
gates... The shopkeeps might be OK with it.`,"000":`Have you seen Wahoo World since the Big
Run started? It's a bit fishy for my taste.`,"001":`Ay. Ay![group=0004 type=0005 params=] (I'm hearing that Grizzco could use
all the help it can get. All hands on deck!)`},"EventFlowMsg/News_BigRunEnd":{"000":`Ay! Ay![group=0004 type=0005 params=] (Special report! Fresh news,
never frozen!)`,"001":"Ooo! Gimme, gimme, gimme!","002":`Ay.[group=0004 type=0005 params=] (I'm being told that the Salmonids that
invaded Wahoo World have been driven out.)`,"003":"Are you serious, Big Man?","004":`Not that I had any doubt. Another win for
us in the books. Well done, team!`,"005":"Haha! Yeah, we rule!","006":`So where's the thank-you gift? Are they
mailing it directly, or...`,"007":`Ay![group=0004 type=0005 params=] (Ah! It sounds like Grizzco is checking
the job logs. Hold on to your seahorses!)`,"008":`Ay! [group=0004 type=0005 params=](The Salmonids that invaded Inkblot
Art Academy have been sent back to sea!)`,"009":`Ay! [group=0004 type=0005 params=](The Salmonids that invaded Undertow
Spillway have been sent back to sea!)`,"010":`Ay! [group=0004 type=0005 params=](The Salmonids that invaded Um'ami
Ruins have been sent back to sea!)`},"EventFlowMsg/News_BigRunEnd2":{200:`Ay. [group=0004 type=0005 params=](I'm also hearing that Barnacle & Dime
will be able to reopen right away.)`,201:`Shoppers everywhere, rejoice! Thanks for
saving the mall from the Salmonids, y'all.`,202:`You saved the city's best shopping center,
and you looked good doing it. Kudos.`,203:`Well? What are we waiting for? Let's go
celebrate at Barnacle & Dime! FOOD COURT!`,204:`Ay! Ay! [group=0004 type=0005 params=](Ooo! Let's go to the fancy place
we always talk about going to!)`,205:`Feeling like a big spender, Big Man?
I suppose it's OK to splurge every so often.`,206:"Aaay! [group=0004 type=0005 params=](Yesss!)",207:`Yeah, don't even worry about it, Big Man.
Our fearless leader is treating anyway!`,208:"But... But... Oh, I suppose I deserve this.","000":`Ay! Ay... [group=0004 type=0005 params=](Hold the phone! I'm getting some
breaking news...)`,"002_1":`Ay! [group=0004 type=0005 params=](The Salmonids that invaded
Barnacle & Dime have been expelled!)`,"003":"Oh? Does that mean the [color=0001]Big Run [color=ffff]is over?","011":`Ay. Ay? [group=0004 type=0005 params=](Oh, there's also a message from
Grizzco. Shiver, would you mind?)`,"012":`Hmm, it just says, "Thank you for fulfilling
your mandatory duties."`,"013":`"Please look forward to a small, corporate
token of thanks based on your high score."`,"014":"Wowww...they're so generous!","015":`Ay. [group=0004 type=0005 params=](Let's take a look at those high
scores so we can see who gets what.)`,"016":`Don't sweat the results too much—everyone
who helped gets SOMETHING, at least.`},"EventFlowMsg/News_BigRunResult":{100:`Ay![group=0004 type=0005 params=] (Well, it was touch-and-go for a bit
there, but...we did it! We saved the city!)`,101:`That'll teach those Salmonids to mess with
the Splatlands! I mean...to NOT do that.`,102:`Well done, everyone. On behalf of all of us,
I want to thank you for your service.`,103:`So, now...do we get to ride the coaster or
nah? I want the wind in my tentacles!`,104:`Ay![group=0004 type=0005 params=] (Great idea, Frye! I want to be all
flapppppp-flappp-flappity-flap in the wind!)`,105:`Then it's settled. A trip to Wahoo World is
in the cards...as soon as it reopens.`,106:"Giddyup!",107:`Ay![group=0004 type=0005 params=] (Big thanks to everyone who fought off
the Salmonids at Inkblot Art Academy!)`,108:`Yes, it was truly a clinic in Salmonid
repulsion. Well done, everyone!`,109:`Yeah, we schooled 'em! Taught 'em
a lesson! Made 'em think!`,110:`Speaking of art...this reminds me that I've
been neglecting my own projects lately.`,111:`Ay! Ay? [group=0004 type=0005 params=](Oh yeah! You used to be quite a
painter. Didn't you win a contest?)`,112:`That's right! It was that abstract painting
of the Great Zapfish. SO creepy and cool!`,113:`Great Zapfish? Um, the subject of that
painting was my art teacher...`,114:`Great job, everyone! The Salmonids
never stood a chance.`,115:`Ay! [group=0004 type=0005 params=](And we saved Undertow Spillway! So it
can keep...spilling? Is that what it does?)`,116:`Yeah, it spills money for the Splatlands.
We definitely want it to keep spilling!`,117:`Wait...I just realized that Salmonids could
probably invade ANY waterway!`,118:`Ay. Ay! [group=0004 type=0005 params=](And Splatsville is known for its
waterways. They always creep me out!)`,119:`EEE! Could the famous "Creepy Sewer
Voice" of the Splatlands be Salmonids?!`,120:`Ay? Aaay?! [group=0004 type=0005 params=](Creepy Sewer Voice of the
Splatlands? Why does that exist?!)`,121:`Ay! Ay. [group=0004 type=0005 params=](What an epic battle! That will
definitely go down in history.)`,122:`Way to rep the Splatlands, everyone!
We showed those Salmonids what's UP.`,123:`And best of all, the historic site at Um'ami
Ruins is undamaged. Tourism can resume!`,124:`Hey, on the next Anarchy Splatcast...let's
do a deep dive into Um'ami Ruins lore!`,125:`♪ Ay? ♪  [group=0004 type=0005 params=](♪ What are the secrets of
the ruuuinsss? ♪)`,126:`Sounds like we've got a theme song, but...
we might have to learn some actual history.`,127:`Oh, in that case, let's focus on Splatsville
street food instead. I'm hungry!`,500:`Anyway, the other good news is that we're
all clear for the next Splatfest.`,501:`Bravo, everyone! My path to leadership of
Deep Cut is now wide open.`,502:`Although, technically, anyone could win.
I wish you both luck!`,503:"Ay... [group=0004 type=0005 params=](I just hope the fans support us...)","000":`Ay![group=0004 type=0005 params=] (Before we get to the current stages,
I have an announcement!)`,"001":"What is it? You're so excited!","002":`Ay! Ay![group=0004 type=0005 params=] (I am, I am! Because the [color=0001]Big Run[color=ffff]
results are in!)`,"003":"Ooo! He's got a letter!","004":`Really? Grizzco sent a letter? Why don't
you let me read it? Ahem...`,"005":`"Thank you for participating in an official
Grizzco Big Run™."`,"006":`"We appreciate your support and have
prepared a small token of gratitude."`,"007":"What is it? What is it? EEEEEE!","008":`Huh. Now there's a list of [color=0001]high scores[color=ffff]
along with the prize info...`,"009":"Hurry UUUUUUP!","010":"Budda-dudda-budda-dudda...","011":"Ayayayayayaaay...","012":"[size=150%]BAM![size=100%]","013":"[size=150%]AAAY![size=100%]","014":`A-are those scores real? How are people
so good at this?!`,"014_1":`Whoa. Looks like another round of
eye-wateringly high scores...`,"014_2":`Ay?! [group=0004 type=0005 params=](Are people really THAT good
at this?!)`,"014_3":`I still can't get over how good everyone
is at this!`,"015":`Ay! Ay.[group=0004 type=0005 params=] (Practice makes perfect! I guess
they must practice...a LOT.)`,"015_1":`The Salmonids came out of the water, so
what do you expect?`,"015_2":`I bet the Salmonids were as surprised
as you are.`,"015_3":"Aaay! [group=0004 type=0005 params=](Grizzco must be thrilled!)","016":`Don't worry, you two. All participants will
get a gift, regardless of score.`,"017":"Ay...[group=0004 type=0005 params=] (Whew...)"},"EventFlowMsg/News_FestBreaking":{100:`Without further ado, the members of the
fabulous winning team are...`,101:`Listen up! The members of the super-fresh
winning team are...`,102:`Ay... (If I could have your attention...
The members of the winning team are...)`,"000":`News flash! Team [group=0004 type=0004 params=00 00 00 00 01 cd]
just won a 10x Battle!`,"001":`That's a nice little momentum boost.
Good luck in the next one!`,"002":`News flash! Team [group=0004 type=0004 params=00 00 00 00 01 cd]
just won a 100x Battle!`,"003":`I saw every single splat in this one, and you
all are making me proud. Great work!`,"004":`News flash! Team [group=0004 type=0004 params=00 00 00 00 01 cd]
just won a 333x Battle!`,"005":`I couldn't have done any better myself.
What a team effort!`,"006":`Check it—Team [group=0004 type=0004 params=00 00 00 00 02 cd]
just won a 10x Battle!`,"007":`That's my team! Way to keep the pressure
on, fam.`,"008":`Check it—Team [group=0004 type=0004 params=00 00 00 00 02 cd]
just won a 100x Battle!`,"009":`A HUNDRED X. That's big-time! I knew
my team was the best!`,"010":`Check it—Team [group=0004 type=0004 params=00 00 00 00 02 cd]
just won a 333x Battle!`,"011":"Daaang! You all are ON FIRE!","012":`Ay! (Breaking! Team [group=0004 type=0004 params=00 00 00 00 03 cd]
won a 10x Battle!)`,"013":"Ay! (Great job, team! Keep pushing!)","014":`Ay! (Breaking! Team [group=0004 type=0004 params=00 00 00 00 03 cd]
won a 100x Battle!)`,"015":`Ay. Ay! (And you looked cool doing it.
You're all my heroes!)`,"016":`Ay! (Breaking! Team [group=0004 type=0004 params=00 00 00 00 03 cd]
won a 333x Battle!)`,"017":`Ay! Ay? (Wow! How did I get so lucky to
have a team like you?)`,PlayerName_Alpha_0:`[group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=ffff]!
[group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=ffff]![group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Alpha_1:`[color=0001][group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=0001][color=ffff]!
[group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=ffff]![group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Alpha_2:`[group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=ffff]!
[color=0001][group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=0001][color=ffff]![group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Alpha_3:`[color=0001][group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=0001][color=ffff]!
[color=0001][group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=0001][color=ffff]![group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Bravo_0:`[group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=ffff]!
[group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=ffff]![group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Bravo_1:`[color=0001][group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=0001][color=ffff]!
[group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=ffff]![group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Bravo_2:`[group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=ffff]!
[color=0001][group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=0001][color=ffff]![group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Bravo_3:`[color=0001][group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=0001][color=ffff]!
[color=0001][group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=0001][color=ffff]![group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Charlie_0:`Ay! ([group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=ffff]!
[group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=ffff]!)[group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Charlie_1:`Ay! ([color=0001][group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=0001][color=ffff]!)
[group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=ffff]!)[group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Charlie_2:`Ay! ([group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=ffff]!
[color=0001][group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=0001][color=ffff]!)[group=0001 type=0000 params=3c 00 00 00]`,PlayerName_Charlie_3:`Ay! ([color=0001][group=0002 type=0001 params=00 0a][color=0000][size=75%]#[group=0002 type=0001 params=01 05][size=100%][color=0001][color=ffff]!
[color=0001][group=0002 type=0001 params=02 0a][color=0000][size=75%]#[group=0002 type=0001 params=03 05][size=100%][color=0001][color=ffff]!)[group=0001 type=0000 params=3c 00 00 00]`},"EventFlowMsg/News_IntroFsodr":{"000":`OK, I've got some good news and some bad
news. Which do you want to hear first?`,"001":`Good news! Then I can pretend I didn't
hear the bad news afterward.`,"002":`Alright! Well, if you can believe it, they're
finally done rebuilding the [color=0001]train station[color=ffff]!`,"003":"Ay? Ay?! [group=0004 type=0005 params=](Seriously? It's actually done?!)","004":`Wow! That took forever, but it's gonna be
totally worth the wait.`,"005":`Ay! Ay![group=0004 type=0005 params=] (Yeah! Now we can get to Inkopolis
and back in a flash!)`,"006":"Ay? [group=0004 type=0005 params=](So, wait... What's the bad news?)","007":`Folks from Inkopolis can also come HERE.
Our TURF. Think of how hard parking will be!`,"008":`What? Noooooo! I can barely find a place
to park my eels as it is!`,"009":`...Ay? [group=0004 type=0005 params=](...But if they're riding the train,
why would they need to park?)`},"EventFlowMsg/News_LeagueBeingHeld":{"000":`Hey, it looks like there's a Challenge
available today!`,"001":"Check out the rules, then give it a shot!"},"EventFlowMsg/News_LimitedCoop":{"000":`Ooo, we have a special announcement from
Grizzco Industries...`,"001":"Ay. Ay? [group=0004 type=0005 params=](Uh-oh. What is it?)","002":`Oh, I think it's good news. Maybe? They're
looking for volunteers for [color=0001]Eggstra Work[color=ffff]!`,"003":`Ay. Ay. [group=0004 type=0005 params=](Oh, it's available right now. So it IS
good news, if you want Eggstra Work.)`,"004":`Yep! If you want to get in on it, call up
some friends and head over to Grizzco.`,"005":`Is it weird that I love Eggstra Work? Just
another chance for my team to dominate!`},"EventFlowMsg/News_LimitedCoop_Short":{"000":`We've got a note from Grizzco...
[color=0001]Eggstra Work [color=ffff]is available now!`,"001":`Ay. [group=0004 type=0005 params=](If you want in on it, grab some friends
and head to Grizzco.)`,"010":"Hop to it, workers! If you want to.","011":`Yeah, grab some work buds and build
those teamwork connections!`,"020":`Ay? [group=0004 type=0005 params=](You get a commemorative gift
for doing [color=0001]Eggstra Work[color=ffff], right?)`,"021":"Oh, yeah! I wonder what it'll be this time..."},"EventFlowMsg/News_Season02":{"000":`Oh, this is exciting. The [color=0001]new season[color=ffff]
has started!`,"001":"Yesss! I'm HYPED!","002":`Ay! Ay.[group=0004 type=0005 params=] (Yes! Chill Season! I can't wait to
break out my sweaters and get cozy.)`,"003":`Well, don't get TOO cozy. Looks like an
intense new mode is here. [color=0001]X Battles[color=ffff] are go!`,"005":`Ay. Ay.[group=0004 type=0005 params=] (Whoa. Looks like you need to be
ranked [color=0001]Ｓ+[size=75%]0[size=100%] or higher[color=ffff] to try it.)`,"006":`Look out, world. I'm gonna blaze a path
to the top spot.`,"007":"I'm here for the shiny [color=0001]new weapons[color=ffff], duh!","008":`Ay. Ay?[group=0004 type=0005 params=] (Those look cool. Are any of 'em
fin operated? Asking for me.)`,"008_01":`So pretty... Which one will be my new main?
I'll have to splat test 'em all...`,"009":`Knock yourself out. I'll just listen to what
Sheldon says. I might be the only one...`,"010":`Listening? No time for it. Not when
[color=0001]NEW STAGES[color=ffff] JUST DROPPED!`,"011":`Ay. Ay![group=0004 type=0005 params=] (I'll still make time for listening.
But those new stages do look good...)`,"012":`You mean good for [color=0001]battling[color=ffff], right? 'Cause
that's what they're there for!`,"013":"Full splat ahead!"},"EventFlowMsg/News_Season03":{"000":"Ay! Ay![group=0004 type=0005 params=] (Yes! The [color=0001]new season[color=ffff] has started!)","001":"Ahahaha! Yes! I'm here for it.","002":`Well, well! Let's see what Frye is here
for, shall we?`,"014":`Up next, we have the latest from
Grizzco Industries.`,"014_01":`AAAY! Ay. Ay? [group=0004 type=0005 params=](AAAUGH! I mean...aaah.
What is that...horrifying...thing?)`,"015":`I think it's cool! Apparently a [color=0001]new type[color=ffff]
[color=0001]of King Salmonid [color=ffff]has been sighted!`,"016":`Hm. The picture we have isn't the highest
quality. I can't quite make it out...`,"017":`Ay! [group=0004 type=0005 params=](I have a feeling there may be some
real-life sightings, so watch out!)`},"EventFlowMsg/News_Season04":{"000":`Oh, this is exciting. The [color=0001]new season[color=ffff]
has started!`,"001":"Yesss! I'm HYPED!","002":`Aaay! Ay. [group=0004 type=0005 params=](I'm ready! Nothing like a fresh
start to get my fins aflapping.)`,"003":`Ooo! It looks like [color=0001]Challenges [color=ffff]have been
added to the mix! Keep an eye out for them.`,"004":`YES. Look out, world. Frye's comin' for ya!
...Wait—what are Challenges again?`,"005":`They're special events that might have
different rules or restrictions than usual.`,"006":`Ay? Ay! [group=0004 type=0005 params=](And they're kind of random, right?
So if you see one, you should check it out!)`,"018":`It looks like Grizzco has opened up
a [color=0001]new job site[color=ffff]!`,"019":`Ay. Ay? [group=0004 type=0005 params=](Oh. That's it, huh? I was picturing
more of an open office with foosball...)`,"020":`Looks like it's ripe for collecting Golden Eggs
to me. Employee of the Month, here I come!`,"021":`Ay... [group=0004 type=0005 params=](Just...try not to fall into the ocean
this time...)`},"EventFlowMsg/News_Season05":{"000":"Ay! Ay! [group=0004 type=0005 params=](Yes! The [color=0001]new season[color=ffff] has started!)","001":"Ahahaha! Yes! I'm here for it.","002":`Well, well! Let's see what Frye is here
for, shall we?`},"EventFlowMsg/News_Season06":{"000":`Oh, this is exciting. The [color=0001]new season[color=ffff]
has started!`,"001":"Yesss! I'm HYPED!","002":`Aaay! Ay. [group=0004 type=0005 params=](I'm ready! Nothing like a fresh
start to get my fins aflapping.)`,"008_1":`Ay! Ay! [group=0004 type=0005 params=](Ooo! It looks like everyone gets a
[color=0001]Sheldon License[color=ffff] as a gift after this! Neat!)`,"009":`Ammo Knights will have a line out the door.
Especially if folks listen to Sheldon's spiels.`},"EventFlowMsg/News_Season07":{"000":"Ayay! [group=0004 type=0005 params=] (A [color=0001]new season[color=ffff] has begun!)","001":"Aww yesss, here we go!","002":`Well then, we don't we take a look in order
at what's available now!`},"EventFlowMsg/News_SeasonEndBonus":{"000":`Ooo, important reminder. The season is
nearly over!`,"001":`Ay![group=0004 type=0005 params=] (And you know what that means... You
can earn more [color=0001]Catalog Points[color=ffff] than normal!)`,"002":`Right. So if there's something you've had
your eye on, now's the time to make a push!`,"003":"Yeah! Get it!"},"EventFlowMsg/News_SeasonPost":{"001":`That's the spirit, Frye. Let's all hit the
ground running at the start of the season!`,"002":`As long as you're all running FROM me.
Muhahaha! Let's goooooo!`},"EventFlowMsg/Plaza_IntroStation":{"000":`Construction on the train station is complete,
so you can now visit [color=0001]Inkopolis [color=ffff]with ease![page break]Don't know Inkopolis? Well, it's a bit like
Splatsville, but a little more...shiny.`,"001":`Here's the entrance to the [color=0001]train station[color=ffff].[page break]Now that it's easier to go back and forth, we're
hearing that all shops are better stocked...`,"002":`So if you've had your eye on some new gear,
it's a great time to do a little shopping!`},"LayoutMsg/Catalog_Base_00":{100:"No. [group=0002 type=0000 params=00 03 00 00]",200:"[group=0004 type=0002 params=00 00 00 00] Outfit","001":"pack of cards","002":"fresh card pack","003":"title","004":"banner","005":"Mystery Box","006":"food ticket","007":"drink ticket","L_Catalog_00-T_Max_00":"MAX","L_Catalog_00-T_Rank_00":"Catalog Lv.","L_Guide_00-T_Info_00":"Back"},"LayoutMsg/Cmn_CstBase_00":{"000":"Favorites","001":"Ability","002":"Brand","003":"Main","004":"Sub","005":"Special","006":"Not Purchased","010":"Test","011":"Adjust Gear","020":"Gear ability not unlocked.","030":`You can save your current gear, player
settings, camera options, and registered
Freshest Fits to an amiibo.`,"031":`To use amiibo, connect to the internet and
update your software to the latest version.`,"040":"ON","041":"OFF","042":"Normal","043":"Inverted","044":"[group=0002 type=0001 params=00 01][group=0002 type=0000 params=00 01 00 00].[group=0002 type=0000 params=01 01 00 00]","045":"Disabled","050":`You can't change your weapon or
gear right now.`,"051":`You can't change your weapon or
gear right now.`,"052":`You can't change your weapon or
gear right now.`,"053":`You can't change your weapon or
gear right now.`,"L_Back_00-T_Info_00":"Back","L_Bottom_00-T_Info_00":"Back","L_Bottom_01-T_Info_00":"Back","L_BtnCategory_00-T_Category_00":"Weapons","L_BtnCategory_01-T_Category_00":"Headgear","L_BtnCategory_02-T_Category_00":"Clothes","L_BtnCategory_03-T_Category_00":"Shoes","L_BtnCategory_04-T_Category_00":"Other","L_BtnCategory_05-T_Category_00":"Emotes","L_BtnList_08-T_SoldOut_00":"Owned","L_BtnOption_00-T_BtnL_00":"Normal","L_BtnOption_00-T_BtnR_00":"Inverted","L_BtnOption_00-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Up/Down","L_BtnOption_00-T_Msg_00":`Disabled when motion
controls are set to ON.`,"L_BtnOption_01-T_BtnL_00":"Normal","L_BtnOption_01-T_BtnR_00":"Inverted","L_BtnOption_01-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Left/Right","L_BtnOption_02-T_BtnL_00":"ON","L_BtnOption_02-T_BtnR_00":"OFF","L_BtnOption_02-T_Header_00":"Motion Controls","L_BtnOption_03-T_BtnL_00":"Normal","L_BtnOption_03-T_BtnR_00":"Inverted","L_BtnOption_03-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Up/Down","L_BtnOption_03-T_Msg_00":`Disabled when motion
controls are set to ON.`,"L_BtnOption_04-T_BtnL_00":"Normal","L_BtnOption_04-T_BtnR_00":"Inverted","L_BtnOption_04-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Left/Right","L_BtnOption_05-T_BtnL_00":"ON","L_BtnOption_05-T_BtnR_00":"OFF","L_BtnOption_05-T_Header_00":"Motion Controls","L_Btn_00-T_Btn_00":`Save to
amiibo!`,"L_DetailWpn_00-T_Skilled_00":"Freshness","L_DetailWpn_00-T_Special_00":"Points for Special","L_GaugeOption_00-T_Header_00":"Motion-Control Sensitivity","L_GaugeOption_00-T_Msg_00":`Disabled when motion
controls are set to OFF.`,"L_GaugeOption_01-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Sensitivity","L_GaugeOption_02-T_Header_00":"Motion-Control Sensitivity","L_GaugeOption_02-T_Msg_00":`Disabled when motion
controls are set to OFF.`,"L_GaugeOption_03-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Sensitivity","L_GuideBtn_01-T_Info_00":"Info","L_GuideBtn_04-T_Category_00":"Freshest Fits","L_MySetBtnCategory_00-T_Category_00":"Weapons","L_MySetBtnCategory_01-T_Category_00":"Headgear","L_MySetBtnCategory_02-T_Category_00":"Clothes","L_MySetBtnCategory_03-T_Category_00":"Shoes","L_MysetBtn_00-T_Text_00":"Change into Fit","L_MysetBtn_01-T_Text_00":"Register Fit","L_Style_00-T_Title_00":"Hairstyle","L_Style_01-T_Title_00":"Eyebrows","L_Style_02-T_Title_00":"Legwear","L_TabAmiiboMyset_00-T_Text_00":"1","L_TabAmiiboMyset_01-T_Text_00":"2","L_TabAmiiboMyset_02-T_Text_00":"3","L_TabAmiiboMyset_03-T_Text_00":"4","L_TabAmiiboMyset_04-T_Text_00":"5","L_TabMyset_00-T_Text_00":"1","L_TabMyset_01-T_Text_00":"2","L_TabMyset_02-T_Text_00":"3","L_TabMyset_03-T_Text_00":"4","L_TabMyset_04-T_Text_00":"5","L_TabMyset_05-T_Text_00":"1","L_TabMyset_06-T_Text_00":"2","L_TabMyset_07-T_Text_00":"3","L_TabMyset_08-T_Text_00":"4","L_TabMyset_09-T_Text_00":"5","L_Tab_00-T_Text_00":"TV/Tabletop Mode","L_Tab_01-T_Text_00":"Handheld Mode","L_Tab_02-T_Text_00":"Style","L_Tab_03-T_Text_00":"amiibo",T_Colon_00:":",T_Colon_01:":",T_Colon_02:":",T_Colon_03:":",T_Colon_04:":",T_Explanation_01:`You can save your current weapons, gear, and even your
settings as a Freshest Fit. That way, when you load it up
later, they'll all be ready to go!`,T_Fest_00:`You can't change your clothes
during a Splatfest!`,T_NoSort_00:"No items found.",T_NonRegister_00:"Not Registered",T_OpTitle_00:"Motion-Control Sensitivity",T_OpTitle_01:"[group=0003 type=0008 params=66 66 26 3f 00 00 00 00]Sensitivity",T_OpTitle_02:"[group=0003 type=0008 params=66 66 26 3f 00 00 00 00]Up/Down",T_OpTitle_03:"[group=0003 type=0008 params=66 66 26 3f 00 00 00 00]Left/Right",T_OpTitle_04:"Motion Controls"},"LayoutMsg/Cmn_CstToShootingRange_00":{"L_BtnL_00-T_Btn_00":"Nah","L_BtnR_00-T_Btn_00":"Test!","L_DetailWpn_00-T_Special_00":"Points for Special",T_Question_00:"Test out this weapon?"},"LayoutMsg/Cmn_GuideBtn_00":{ActivateDrone:"Activate Shel-drone",Amiibo:"amiibo",BackToPlaza:"Back to City",CanolaPost:"Post",CashExchange:"Check Rewards",ChangeCommander:"Investigate",CoopSkinChanger:"Change Gear",CoopStatsDevice:"Grizzco Terminal",CoopWeaponChanger:"Change Weapon",Dresser:"Equip",EatFood:"Grab a Bite",EnterManhole:"Enter",FestVote:"Splatfest Teams",Goods:"Hotlantis",JudgeTips:"Get Advice",Jukebox:"Request Song",KumasanRadio:"Start Shift",Locker:"Open Locker",LockerDoor:"Check It Out!",Lot:"Play",Manual:"Read Employee Handbook",MiniGame:"Tableturf Battle",MiniGame_Play:"Tableturf Battle",MiniGame_RequestBattle:"Challenge Opponent",MiniGame_Spectate:"Spectate",MiniGame_StandUp:"Leave Seat",MiniGame_WaitForOpponent:"Take a Seat",PlayerDevice:"Lobby Terminal",PlazaMove:"Ride Rail",Remember:"Relive Memories",Shiftboard:"View Bulletin Board",TakeMissionTreasure:"Grab!",TalkToNpc:"Talk",WalkSingle:"Go on Recon",WoodenFigureOff:"Turn Copy Machine OFF",WoodenFigureOn:"Turn Copy Machine ON"},"LayoutMsg/Cmn_ManualAll_00":{"L_ContentsB_01-T_ExplainPict_00":"Accomplishments","L_ContentsB_01-T_ExplainPict_01":"Practical Skills","L_ContentsB_01-T_ExplainPict_02":"Innate Qualities","L_ContentsB_01-T_ExplainPict_03":`Results
at Work`,"L_ContentsB_01-T_ExplainPict_04":`Preparedness,
Consideration,
Communication,
Judgment, Initiative`,"L_ContentsB_01-T_ExplainPict_05":`Attitude, Ambition, Experience,
Style, Reflexes`,"L_ContentsB_07-T_Title_00":"2.1.0 Lesser Salmonids","L_ContentsB_07-T_Title_01":"2.2.0 Boss Salmonids (the ones that drop Golden Eggs)","L_ContentsB_07-T_Title_02":"2.3.0 Known Occurrences","L_ContentsB_08-T_Contents_00":`・ Pledge your support to one of three teams.
・ Fight for your team's honor in Turf War battles!
・ Ink turf and win battles to get Splatfest Points!
・ Splatfest Points earn you better titles!
・ A better title means better prizes at the end!
・ You'll get more prizes if your team wins!
・ Splatfest Tees must be returned—no exceptions!`,"L_ContentsB_08-T_Title_00":"Splatfest Info","L_ContentsB_09-T_Note_00":"Rotate with [group=0003 type=0002 params=52 b8 5e 3f 03 00 00 00] [group=0003 type=0003 params=52 b8 5e 3f 03 00 00 00]!","L_ContentsB_09-T_Note_01":"Special Spaces","L_ContentsB_09-T_Note_02":"Special Point +1","L_ContentsB_09-T_Note_03":"Use Special Points","L_ContentsB_09-T_Note_04":`The number of Special Points required
depends on the card!`,"L_ContentsB_09-T_Note_05":"Ink back your opponent's spaces!","L_ContentsB_09-T_Note_06":"OK!","L_ContentsB_09-T_Note_07":"Nope!","L_ContentsB_10-L_Guide_00-T_Info_00":"Enlarge","L_ContentsB_10-L_Guide_01-T_Info_00":"Back","L_ContentsB_10-T_Contents_03":"For details, scan this [color=0001]QR Code[color=ffff] and check the [color=0001]website[color=ffff].","L_Guide_00-T_Info_00":"Back","L_Guide_01-T_Info_00":"Back"},"LayoutMsg/Cmn_Menu_00":{100:"Now",101:"Soon!",102:"Open!",103:"Open!",104:"Soon!",105:"Next",106:"Future",120:"Big Run",150:"To Eggstra Work",151:"To Regular Job",199:"???",201:"x[group=0002 type=0000 params=00 03 00 00]",240:"[size=75%]Level [size=100%][group=0002 type=0000 params=00 03 00 00]",250:"Until [group=0002 type=0001 params=00 00]","001":"The Crater","002":"Alterna","098":"Future","099":"Next","L_Bottom_00-T_Info_00":"Back","L_Bottom_01-T_Info_00":"Back","L_Bottom_02-T_Info_00":"Back","L_Bottom_03-T_Info_00":"Back","L_Bottom_04-T_Info_00":"Back","L_Bottom_05-T_Info_00":"Equip","L_Bottom_08-T_Info_00":"Back","L_BtnCard_00-T_BlackText_00":"Card List","L_BtnCard_00-T_WhiteText_00":"Card List","L_BtnCatalog_00-T_BlackText_00":"See More","L_BtnCatalog_00-T_WhiteText_00":"See More","L_BtnFestStage_00-T_BlackText_00":`Splatfest Battle
[size=75%](Open)[size=100%]`,"L_BtnFestStage_00-T_WhiteText_00":`Splatfest Battle
[size=75%](Open)[size=100%]`,"L_BtnFestStage_01-T_BlackText_00":"Tricolor Battle","L_BtnFestStage_01-T_WhiteText_00":"Tricolor Battle","L_BtnFestStage_02-T_BlackText_00":"Salmon Run","L_BtnFestStage_02-T_WhiteText_00":"Salmon Run","L_BtnFestStage_03-T_BlackText_00":`Splatfest Battle
[size=75%](Pro)[size=100%]`,"L_BtnFestStage_03-T_WhiteText_00":`Splatfest Battle
[size=75%](Pro)[size=100%]`,"L_BtnMapL_00-T_BlackText_00":"Lobby","L_BtnMapL_00-T_WhiteText_00":"Lobby","L_BtnMap_01-T_Text_00":"City","L_BtnMap_03-T_Text_00":"The Shoal","L_BtnMap_04-T_Text_00":"Grizzco","L_BtnMap_05-T_Text_00":"Weapons","L_BtnMap_06-T_Text_00":"Headgear","L_BtnMap_07-T_Text_00":"Clothing","L_BtnMap_08-T_Text_00":"Shoes","L_BtnMap_09-T_Text_00":"General","L_BtnMap_10-T_Text_00":"Train Station","L_BtnNpl_00-T_Edit_00":"Edit","L_BtnOption_00-T_BtnL_00":"Normal","L_BtnOption_00-T_BtnR_00":"Inverted","L_BtnOption_00-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Up/Down","L_BtnOption_00-T_Msg_00":`Disabled when motion
controls are set to ON.`,"L_BtnOption_01-T_BtnL_00":"Normal","L_BtnOption_01-T_BtnR_00":"Inverted","L_BtnOption_01-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Left/Right","L_BtnOption_02-T_BtnL_00":"ON","L_BtnOption_02-T_BtnR_00":"OFF","L_BtnOption_02-T_Header_00":"Motion Controls","L_BtnOption_03-T_BtnL_00":"Normal","L_BtnOption_03-T_BtnR_00":"Inverted","L_BtnOption_03-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Up/Down","L_BtnOption_03-T_Msg_00":`Disabled when motion
controls are set to ON.`,"L_BtnOption_04-T_BtnL_00":"Normal","L_BtnOption_04-T_BtnR_00":"Inverted","L_BtnOption_04-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Left/Right","L_BtnOption_05-T_BtnL_00":"ON","L_BtnOption_05-T_BtnR_00":"OFF","L_BtnOption_05-T_Header_00":"Motion Controls","L_BtnOption_06-T_BtnL_00":"ON","L_BtnOption_06-T_BtnR_00":"OFF","L_BtnOption_06-T_Header_00":"Post Display","L_BtnOption_06-T_Msg_00":"Restricted by Parental Controls.","L_BtnOption_07-T_BtnL_00":"OFF","L_BtnOption_07-T_BtnR_00":"ON","L_BtnOption_07-T_Header_00":"Color Lock","L_BtnOption_08-T_BtnL_00":"ON","L_BtnOption_08-T_BtnR_00":"OFF","L_BtnOption_08-T_Header_00":"Lobby Notifications","L_BtnOption_09-T_Header_00":"Color Lock","L_BtnStage_00-T_BlackText_00":"Regular Battle","L_BtnStage_00-T_WhiteText_00":"Regular Battle","L_BtnStage_01-T_BlackText_00":`Anarchy Battle
[size=75%](Series)[size=100%]`,"L_BtnStage_01-T_WhiteText_00":`Anarchy Battle
[size=75%](Series)[size=100%]`,"L_BtnStage_02-T_BlackText_00":"X Battle","L_BtnStage_02-T_WhiteText_00":"X Battle","L_BtnStage_03-T_BlackText_00":"Challenge","L_BtnStage_03-T_WhiteText_00":"Challenge","L_BtnStage_04-T_BlackText_00":"Salmon Run","L_BtnStage_04-T_WhiteText_00":"Salmon Run","L_BtnStage_05-T_BlackText_00":`Anarchy Battle
[size=75%](Open)[size=100%]`,"L_BtnStage_05-T_WhiteText_00":`Anarchy Battle
[size=75%](Open)[size=100%]`,"L_Catalog_00-T_EventBonus_00":"Closeout Bonus","L_Catalog_00-T_EventBonus_01":"x1.5","L_Catalog_00-T_Max_00":"MAX","L_Catalog_00-T_Rank_00":"Catalog Lv.","L_GaugeOption_00-T_Header_00":"Motion-Control Sensitivity","L_GaugeOption_00-T_Msg_00":`Disabled when motion controls
are set to OFF.`,"L_GaugeOption_01-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Sensitivity","L_GaugeOption_02-T_Header_00":"Motion-Control Sensitivity","L_GaugeOption_02-T_Msg_00":`Disabled when motion controls
are set to OFF.`,"L_GaugeOption_03-T_Header_00":"[group=0003 type=0008 params=00 00 00 40 00 00 00 00]Sensitivity","L_NextItem_00-T_NextItem_00":"Next Level","L_OptionColor_00-L_Btn_00-T_Color_00":"OFF","L_OptionColor_00-L_Btn_01-T_Color_00":"1","L_OptionColor_00-L_Btn_02-T_Color_00":"2","L_OptionColor_00-L_Guide_00-T_Info_00":"Back","L_OptionColor_00-T_Explain_00":"Color Lock is OFF","L_OptionColor_00-T_Preview_00":"Bicolor Battle","L_OptionColor_00-T_Preview_01":"Tricolor Battle","L_Option_00-T_BlackText_00":`TV/Tabletop
Mode`,"L_Option_00-T_WhiteText_00":`TV/Tabletop
Mode`,"L_Option_01-T_BlackText_00":"Handheld Mode","L_Option_01-T_WhiteText_00":"Handheld Mode","L_Option_02-T_BlackText_00":"Other","L_Option_02-T_WhiteText_00":"Other","L_PlayerEdit_00-T_BlackText_00":"Player Settings","L_PlayerEdit_00-T_WhiteText_00":"Player Settings","L_Player_00-T_BlackText_00":"Gear","L_Player_00-T_WhiteText_00":"Gear","L_Player_01-T_BlackText_00":"Catalog","L_Player_01-T_WhiteText_00":"Catalog","L_Player_02-T_BlackText_00":"Abilities","L_Player_02-T_WhiteText_00":"Abilities","L_Player_03-T_BlackText_00":"Tableturf Battle","L_Player_03-T_WhiteText_00":"Tableturf Battle","L_RankMng_00-T_Max_01":"MAX","L_RankMng_00-T_RankHeader_01":"Tableturf Rank","L_Rank_00-T_Max_00":"MAX","L_Rank_00-T_RankHeader_00":"Level","L_Stage_00-T_Explain_00":"Rules","L_Stage_01-T_Mode_01":"Next","L_Stage_02-L_IconGiant_00-T_Random_00":"?","L_Stage_02-T_Mode_01":"Future","L_Stage_02-T_Walk_00":"Go on Recon","L_Stage_03-T_CoopRule_00":"Eggstra Work","L_Tab_00-T_Text_00":"Map","L_Tab_01-T_Text_00":"Stages","L_Tab_02-T_Text_00":"Status","L_Tab_03-T_Text_00":"Options",T_Catalog_00:"Head to Hotlantis to get a catalog!",T_Count_01:"Ability Chunks",T_ExplainCamera_00:`Set your control options when playing on a TV screen or the
Nintendo Switch console screen.`,T_ExplainCamera_01:"Control settings for playing in handheld mode.",T_ExplainCamera_02:"Lock ink colors to make things easier to see.",T_ExplainCamera_03:"Display user-generated content.",T_ExplainCamera_04:`Sends notifications about your play status to Friends and anyone else
in the same Pool.`,T_MaxNext_00:"Go to Hotlantis to get the final item!",T_Max_00:"COMPLETE!",T_OffStage_00:`Stage information is not available offline.
Connect to the internet to get the latest!`,T_Shop_00:"Shops",T_UdemaeTitle_00:"Rank",T_XPower_00:"X Power"},"LayoutMsg/Cmn_MngMatch_00":{"000":"Close Room","001":"Leave Room","L_BackBtn_00-T_Info_00":"Back","L_BtnList_00-T_Btn_00":"Open Card List","L_BtnList_01-T_Btn_00":"Check Rules","L_GuideNotify_00-T_Btn_00":"Y","L_PlayerName_00-T_MngState_00":"Battle ready!","L_PlayerName_00-T_MngState_01":"In a battle...","L_PlayerName_00-T_MngState_02":"Spectating...","L_PlayerName_00-T_Wait_00":"Waiting..."},"LayoutMsg/Cmn_SeasonRecord_00":{100:"[group=0002 type=0001 params=00 0c] - [group=0002 type=0001 params=01 0c]",101:"[group=0002 type=0001 params=00 0c]  -  [group=0002 type=0001 params=01 0c]",200:"Place: [group=0002 type=0000 params=00 05 00 00]",300:`Check the [color=0001]SplatNet 3[color=ffff] app for complete rankings.

Did you earn one of the highest ranks? If so, you
may be getting a present in the [color=0001]lobby[color=ffff]!`,"000":"X Battle Results","001":"Anarchy Battle Results","002":"New Season Rank!","L_Btn_00-T_Info_00":"OK","L_Record_00-T_Fix_00":"Last:","L_Record_00-T_Max_00":"Top:","L_Record_00-T_NoRecord_00":"No records.","L_Record_00-T_Rank_00":"Estimate",T_Rule_00:"Splat Zones",T_Rule_01:"Tower Control",T_Rule_02:"Rainmaker",T_Rule_03:"Clam Blitz",T_UdemaeMsg_00:"Aim high next season too!",T_UdemaeTitle_00:"Rank"},"LayoutMsg/Cmn_SystemWindowPlace_00":{"L_Btn_00-T_Btn_00":"In Front of the Pledge Box","L_Btn_01-T_Btn_00":"Down the Back Alley","L_Btn_02-T_Btn_00":"In Front of All the Shops","L_Btn_03-T_Btn_00":"Back",T_Msg_00:"Where do you want to board the Splatfest Float?"},"LayoutMsg/Cmn_SystemWindowStation_00":{"L_BtnL_00-T_Btn_00":"Nah","L_BtnR_00-T_Btn_00":"Yeah!",T_Msg_00:"Visit this city?",T_Town_00:"Inkopolis",T_Town_01:"Splatsville"},"LayoutMsg/Cmn_SystemWindowWalk_00":{"L_Guide_00-T_Info_00":"Back",T_Msg_00:"Select a stage for recon."},"LayoutMsg/Cmn_WindowCatalog_00":{100:"[group=0002 type=0001 params=00 0c] - [group=0002 type=0001 params=01 0c]",200:"[group=0002 type=0000 params=00 05 00 00]","000":"Catalog Record","L_Btn_00-T_Info_00":"OK",T_Attain_00:"Achieved!",T_Catalog_00:"Catalog Lv."},"LayoutMsg/Coop_Board_00":{"000":"x[group=0002 type=0000 params=00 04 00 00]","001":"x[group=0002 type=0000 params=00 05 00 00]","010":"[group=0002 type=0000 params=00 04 00 00] & Up","L_Bottom_00-T_Info_00":"Close",T_Battle_00:"Eggstra Work",T_NumTop_00:"5%",T_NumTop_01:"20%",T_NumTop_02:"50%",T_NumTop_06:"Current Results",T_Score_00:"High Score",T_Top_00:"The Top"},"LayoutMsg/Coop_DangerLevel_00":{"000":"[group=0002 type=0000 params=00 03 02 00]%",T_Danger_00:"Hazard Level Up!"},"LayoutMsg/Lobby_MenuMode_00":{100:"Hop into a Turf War battle.",101:`Win five and triumph.
Lose three and you're out.`,102:"Limited-time battles with a twist.",103:`Test your limits against the best
of the best in extreme battles.`,104:`Battle alongside players
on your Splatfest team.`,105:`Battle alongside players
on your Splatfest team.`,106:`Mix it up in a three-way battle
to control the central turf!`,107:`Get some pals together
and splat it up!`,108:`Get some pals together
and have a card battle!`,109:"Battle with nearby players.",110:"Go egg hunting with nearby players.",111:"Shuffle up and battle with cards.",112:`Work with a team of randoms
to get the job done.`,113:"Take on a practice job with friends.",114:`Save the city from Salmonids, and
earn rewards while you're at it!`,115:`Enjoy a team-building work exercise
with friends and coworkers!`,118:"One extreme battle.",200:`Set the mode, stage,
and teams in a battle
with your friends.`,201:`Get into a card battle
with friends in the
battle space on the
second floor!`,202:`Set stage and hazard
level in a practice shift
with friends.`,203:`Set the mode, stage,
and teams in a battle
with people nearby!`,204:`Get into a card battle
with friends in the
dedicated battle space
at the Shoal!`,205:`Set the stage and
hazard level in a shift
with people nearby!`,220:`Get to Lv. 10 before
trying this mode!`,221:`Get to Lv. 10 before
trying this mode!`,222:`Visit the Tableturf
Battle Dojo first.`,223:`Visit the Tableturf
Battle Dojo first.`,224:`Splatfest Halftime Report
available on:
[group=0002 type=0001 params=00 0c]`,225:`Update your software
to the latest version to
play Tableturf Battle.`,226:`Try some Regular
Battles first!`,227:`First, try some regular
Splatfest Battles!`,228:`First, try some regular
Splatfest Battles!`,229:`First, try some regular
Splatfest Battles!`,230:`Open from
[group=0002 type=0001 params=00 0b]
to [group=0002 type=0001 params=01 03]`,231:`Open from
[group=0002 type=0001 params=00 0b] to
[group=0002 type=0001 params=01 0b]`,400:"VICTORY",401:"DEFEAT",501:`Your team was in first place at halftime, so you
cannot select this. However, Tricolor Turf Wars
may automatically trigger for you in open
Splatfest Battles.`,600:"Calculating... [group=0002 type=0000 params=00 01 00 00]/[group=0002 type=0000 params=01 01 00 00]",601:"X Power: [group=0002 type=0000 params=00 04 00 00].[group=0002 type=0000 params=01 01 00 00]",610:"Approximate Rank: #[group=0002 type=0000 params=00 04 00 00]",700:"Highest Challenge Power: [group=0002 type=0000 params=00 04 00 00].[group=0002 type=0000 params=01 01 00 00]","000":`Regular
Battle`,"001":`Anarchy
Battle
[size=75%](Series)[size=100%]`,"002":"X Battle","003":"Challenge","004":`Private
Battle`,"005":"Freelance","006":`Private
Job`,"007":"Big Run","008":`Salmon
Run`,"009":`Private
Battle`,"010":`Tableturf
Battle`,"011":`Splatfest
Battle [size=50%](Open)[size=100%]`,"012":`Splatfest
Battle [size=50%](Pro)[size=100%]`,"013":`Tricolor
Battle`,"014":`Anarchy
Battle
[size=75%](Open)[size=100%]`,"015":`Tableturf
Battle`,"016":"Eggstra Work","040":"Clean Up","041":`[size=96%]Turn ON
Copy Machine[size=100%]`,"042":`[size=96%]Turn OFF
Copy Machine[size=100%]`,"070":"Rules","L_Btn_00-L_GuideCancel_00-T_Info_00":"Cancel","L_Btn_00-T_Title_00":"Tricolor Battle","L_Btn_03-T_Friend_00":"With Friends","L_FestItemAll_00-T_Max_00":"MAX","L_GaugeGiant_00-T_Random_00":"?","L_GuideClose_00-T_Info_00":"Back","L_GuideManual_01-T_Info_00":"Rules","L_GuideReward_00-T_Info_00":"Rewards & Points","L_GuideSwitch_00-T_BtnL_00":"Solo","L_GuideSwitch_00-T_BtnR_00":"With Friends","L_HighScore_00-T_Score_00":"High Score","L_PlayerStatus_00-L_Choushi_00-T_FestPowCount_00":"Calculating...","L_PlayerStatus_00-L_Choushi_00-T_FestPow_00":"Clout","L_PlayerStatus_00-L_FestRankGauge_00-T_Max_00":"MAX","L_PlayerStatus_00-L_FestRankGauge_00-T_Vote_00":"Go pick a [color=0001]team[color=ffff]!","L_PlayerStatus_00-L_Rank_00-T_Max_00":"MAX","L_PlayerStatus_00-L_Rank_00-T_RankHeader_00":"Level","L_PlayerStatus_00-L_Udemae_00-T_UdemaeTitle_00":"Rank","L_PlayerStatus_01-L_Info_00-T_Info_00":"Demote Self","L_Progress_00-T_Title_00":"Rank-Up Battle","L_Reset_00-T_Info_00":"Rank Reset",T_Rule_00:"Mode",T_Stage_00:"Stage",T_Stage_02:"Stage",T_VS_00:"VS",T_Wpn_01:"Supplied Weapons"},"LayoutMsg/Lobby_ResultPower_00":{"000":"+[group=0002 type=0000 params=00 03 00 00].[group=0002 type=0000 params=01 01 00 00]","001":"-[group=0002 type=0000 params=00 03 00 00].[group=0002 type=0000 params=01 01 00 00]",T_NumProgress_01:"/5",T_PowerBest_00:"Highest Challenge Power",T_PowerNow_00:"Current Challenge Power",T_Progress_00:"Calculating Challenge Power...",T_Rank_00:"Calibration Complete!"},"LayoutMsg/Lobby_ResultStamp_00":{"L_Stamp_00-T_Num_00":"1","L_Stamp_01-T_Num_00":"2","L_Stamp_02-T_Num_00":"3","L_Stamp_03-T_Num_00":"4",T_Get_00:"Shell-Out Token earned!"},"LayoutMsg/Lobby_SelectBgm_00":{100:"[group=0004 type=0013 params=00 00 00 00]",200:"[group=0002 type=0002 params=00 00 00 00 06 00 2e 00 2e 00 2e 00]",300:"[group=0004 type=0014 params=00 00 00 00]",400:"Request from [group=0004 type=0000 params=00 00 00 00]",500:"[group=0004 type=0013 params=00 00 00 00]",501:"???",600:"[group=0004 type=0014 params=00 00 00 00]",601:"???",900:`Another player chose the song that is currently
playing. Do you want to request to change it?`,901:"Request this song?","000":"[group=0002 type=0002 params=00 00 00 00 06 00 2e 00 2e 00 2e 00]",Category_Coop_00:"Salmon Run",Category_Mission_00:"Story Mode",Category_Other_00:"Other",Category_Plaza_00:"City",Category_Versus_00:"Battles","L_Bottom_00-T_Info_00":"Close","L_BtnL_00-T_Btn_00":"Nah","L_BtnR_00-T_Btn_00":"Let's Hear It!","L_Stop_00-T_Info_00":"Cancel Request",T_CoinNum_00:"x100"},"LayoutMsg/Lobby_WinMng_00":{300:"[group=0002 type=0000 params=00 02 00 00]",400:"[group=0002 type=0000 params=00 02 00 00]",T_Message_01:"...",T_RestTurn_00:"Turns Left",T_UnitTurn_00:" "},"LayoutMsg/Lobby_WinTalkBgm_00":{T_Message_00:"Currently in use by another player."},"LayoutMsg/Mng_GameStart_00":{T_VS_00:"VS"},"LayoutMsg/Mng_Result_00":{T_Draw_00:"DRAW",T_Lose_00:"DEFEAT",T_PassPoint_01:"Turns Passed:",T_PassPoint_03:"Turns Passed:",T_SPPoint_01:"Special Points:",T_SPPoint_03:"Special Points:",T_Win_00:"VICTORY"},"LayoutMsg/Mng_SystemWindow_00":{100:`Overwrite this deck? The existing deck
will be lost.`,101:"Yeah!",102:"Nah",110:"Are you sure you want to delete this deck?",111:"Yeah",112:"Nah",120:"Save your changes?",121:"Don't Save",122:"Save!",123:"Back to Edit",130:`You cannot use card bits when offline. Please
return to the lobby and connect to the internet.`,131:`You cannot use card bits while playing via local
wireless. Please return to the lobby and connect
to the internet.`,200:`Tableturf
                    Category: `),N(n.$$.fragment),i=F(),s=P("div"),N(u.$$.fragment),we(o,"float","left"),we(s,"float","right"),we(s,"vertical-align","center"),we(r,"width","fit-content"),we(r,"margin","auto"),we(e,"align-items","center")},m(p,c){S(p,e,c),B(e,r),B(r,o),O(t,o,null),B(r,l),O(n,r,null),B(r,i),B(r,s),O(u,s,null),_=!0},p(p,c){const h={};c&1024&&(h.$$scope={dirty:c,ctx:p}),t.$set(h);const f={};c&1&&(f.gearPurifyCategory=p[0]),n.$set(f);const d={};c&1040&&(d.$$scope={dirty:c,ctx:p}),u.$set(d)},i(p){_||(k(t.$$.fragment,p),k(n.$$.fragment,p),k(u.$$.fragment,p),_=!0)},o(p){g(t.$$.fragment,p),g(n.$$.fragment,p),g(u.$$.fragment,p),_=!1},d(p){p&&y(e),R(t),R(n),R(u)}}}function W2(a){let e,r;return e=new S_({props:{$$slots:{default:[F2]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&1041&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function x2(a){let e,r,o,t,l;function n(_){a[7](_)}function i(_){a[8](_)}function s(_){a[9](_)}let u={global_desired_abilities:a[3]};return a[0].containedGear!==void 0&&(u.allDisplayedGear=a[0].containedGear),a[1]!==void 0&&(u.allGearCategories=a[1]),a[2]!==void 0&&(u.allGearCategoriesMap=a[2]),e=new U2({props:u}),J.push(()=>me(e,"allDisplayedGear",n)),J.push(()=>me(e,"allGearCategories",i)),J.push(()=>me(e,"allGearCategoriesMap",s)),{c(){N(e.$$.fragment)},m(_,p){O(e,_,p),l=!0},p(_,p){const c={};p&8&&(c.global_desired_abilities=_[3]),!r&&p&1&&(r=!0,c.allDisplayedGear=_[0].containedGear,de(()=>r=!1)),!o&&p&2&&(o=!0,c.allGearCategories=_[1],de(()=>o=!1)),!t&&p&4&&(t=!0,c.allGearCategoriesMap=_[2],de(()=>t=!1)),e.$set(c)},i(_){l||(k(e.$$.fragment,_),l=!0)},o(_){g(e.$$.fragment,_),l=!1},d(_){R(e,_)}}}function D2(a){let e,r,o,t;return e=new g_({props:{$$slots:{default:[W2]},$$scope:{ctx:a}}}),o=new y_({props:{style:a[4]?"":"visibility:collapse;padding:1px",$$slots:{default:[x2]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),r=F(),N(o.$$.fragment)},m(l,n){O(e,l,n),S(l,r,n),O(o,l,n),t=!0},p(l,n){const i={};n&1041&&(i.$$scope={dirty:n,ctx:l}),e.$set(i);const s={};n&16&&(s.style=l[4]?"":"visibility:collapse;padding:1px"),n&1039&&(s.$$scope={dirty:n,ctx:l}),o.$set(s)},i(l){t||(k(e.$$.fragment,l),k(o.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),g(o.$$.fragment,l),t=!1},d(l){l&&y(r),R(e,l),R(o,l)}}}function z2(a){let e,r;return e=new k_({props:{style:"width: max-content",$$slots:{default:[D2]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,[t]){const l={};t&1055&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function V2(a,e,r){let{gearCategory:o}=e,{allDisplayedGear:t}=e,{allGearCategories:l}=e,{allGearCategoriesMap:n}=e,{global_desired_abilities:i}=e,s=!0;const u=()=>r(4,s=!s);function _(h){a.$$.not_equal(o.containedGear,h)&&(o.containedGear=h,r(0,o))}function p(h){l=h,r(1,l)}function c(h){n=h,r(2,n)}return a.$$set=h=>{"gearCategory"in h&&r(0,o=h.gearCategory),"allDisplayedGear"in h&&r(5,t=h.allDisplayedGear),"allGearCategories"in h&&r(1,l=h.allGearCategories),"allGearCategoriesMap"in h&&r(2,n=h.allGearCategoriesMap),"global_desired_abilities"in h&&r(3,i=h.global_desired_abilities)},[o,l,n,i,s,t,u,_,p,c]}class q2 extends ae{constructor(e){super(),ee(this,e,V2,z2,te,{gearCategory:0,allDisplayedGear:5,allGearCategories:1,allGearCategoriesMap:2,global_desired_abilities:3})}}function Y0(a,e,r){const o=a.slice();return o[14]=e[r],o[15]=e,o[16]=r,o}function Y2(a){let e;return{c(){e=oe("Add new Category")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function K2(a){let e;return{c(){e=oe("Add Named Category")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function J2(a){let e;return{c(){e=oe("Add PURE category")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function Z2(a){let e,r,o,t,l,n;return e=new wa({props:{$$slots:{default:[K2]},$$scope:{ctx:a}}}),o=new wa({props:{divider:!0}}),l=new wa({props:{$$slots:{default:[J2]},$$scope:{ctx:a}}}),l.$on("click",a[9]),{c(){N(e.$$.fragment),r=F(),N(o.$$.fragment),t=F(),N(l.$$.fragment)},m(i,s){O(e,i,s),S(i,r,s),O(o,i,s),S(i,t,s),O(l,i,s),n=!0},p(i,s){const u={};s&131072&&(u.$$scope={dirty:s,ctx:i}),e.$set(u);const _={};s&131072&&(_.$$scope={dirty:s,ctx:i}),l.$set(_)},i(i){n||(k(e.$$.fragment,i),k(o.$$.fragment,i),k(l.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),g(o.$$.fragment,i),g(l.$$.fragment,i),n=!1},d(i){i&&(y(r),y(t)),R(e,i),R(o,i),R(l,i)}}}function X2(a){let e,r,o,t;return e=new li({props:{color:"primary",caret:!0,$$slots:{default:[Y2]},$$scope:{ctx:a}}}),o=new ni({props:{$$slots:{default:[Z2]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),r=F(),N(o.$$.fragment)},m(l,n){O(e,l,n),S(l,r,n),O(o,l,n),t=!0},p(l,n){const i={};n&131072&&(i.$$scope={dirty:n,ctx:l}),e.$set(i);const s={};n&131088&&(s.$$scope={dirty:n,ctx:l}),o.$set(s)},i(l){t||(k(e.$$.fragment,l),k(o.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),g(o.$$.fragment,l),t=!1},d(l){l&&y(r),R(e,l),R(o,l)}}}function Q2(a){let e,r,o,t;return e=new ti({props:{$$slots:{default:[X2]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),r=F(),o=P("span"),o.textContent="Gear Categories",we(o,"text-align","center"),we(o,"width","auto")},m(l,n){O(e,l,n),S(l,r,n),S(l,o,n),t=!0},p(l,n){const i={};n&131088&&(i.$$scope={dirty:n,ctx:l}),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),t=!1},d(l){l&&(y(r),y(o)),R(e,l)}}}function $2(a){let e,r;return e=new S_({props:{$$slots:{default:[Q2]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&131088&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function K0(a){let e,r,o,t,l,n;function i(c){a[10](c,a[14],a[15],a[16])}function s(c){a[11](c)}function u(c){a[12](c)}function _(c){a[13](c)}let p={global_desired_abilities:a[3]};return a[14]!==void 0&&(p.gearCategory=a[14]),a[2]!==void 0&&(p.allDisplayedGear=a[2]),a[0]!==void 0&&(p.allGearCategories=a[0]),a[1]!==void 0&&(p.allGearCategoriesMap=a[1]),e=new q2({props:p}),J.push(()=>me(e,"gearCategory",i)),J.push(()=>me(e,"allDisplayedGear",s)),J.push(()=>me(e,"allGearCategories",u)),J.push(()=>me(e,"allGearCategoriesMap",_)),{c(){N(e.$$.fragment)},m(c,h){O(e,c,h),n=!0},p(c,h){a=c;const f={};h&8&&(f.global_desired_abilities=a[3]),!r&&h&1&&(r=!0,f.gearCategory=a[14],de(()=>r=!1)),!o&&h&4&&(o=!0,f.allDisplayedGear=a[2],de(()=>o=!1)),!t&&h&1&&(t=!0,f.allGearCategories=a[0],de(()=>t=!1)),!l&&h&2&&(l=!0,f.allGearCategoriesMap=a[1],de(()=>l=!1)),e.$set(f)},i(c){n||(k(e.$$.fragment,c),n=!0)},o(c){g(e.$$.fragment,c),n=!1},d(c){R(e,c)}}}function eT(a){let e,r,o=Ce(a[0]),t=[];for(let n=0;n<o.length;n+=1)t[n]=K0(Y0(a,o,n));const l=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=Pe()},m(n,i){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,i);S(n,e,i),r=!0},p(n,i){if(i&15){o=Ce(n[0]);let s;for(s=0;s<o.length;s+=1){const u=Y0(n,o,s);t[s]?(t[s].p(u,i),k(t[s],1)):(t[s]=K0(u),t[s].c(),k(t[s],1),t[s].m(e.parentNode,e))}for(he(),s=o.length;s<t.length;s+=1)l(s);fe()}},i(n){if(!r){for(let i=0;i<o.length;i+=1)k(t[i]);r=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);r=!1},d(n){n&&y(e),ua(t,n)}}}function aT(a){let e,r,o,t;return e=new g_({props:{$$slots:{default:[$2]},$$scope:{ctx:a}}}),o=new y_({props:{$$slots:{default:[eT]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),r=F(),N(o.$$.fragment)},m(l,n){O(e,l,n),S(l,r,n),O(o,l,n),t=!0},p(l,n){const i={};n&131088&&(i.$$scope={dirty:n,ctx:l}),e.$set(i);const s={};n&131087&&(s.$$scope={dirty:n,ctx:l}),o.$set(s)},i(l){t||(k(e.$$.fragment,l),k(o.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),g(o.$$.fragment,l),t=!1},d(l){l&&y(r),R(e,l),R(o,l)}}}function rT(a){let e,r,o,t,l,n,i,s,u;function _(d){a[5](d)}function p(d){a[6](d)}function c(d){a[7](d)}function h(d){a[8](d)}let f={};return a[4]!==void 0&&(f.open=a[4]),a[0]!==void 0&&(f.allGearCategories=a[0]),a[1]!==void 0&&(f.allGearCategoriesMap=a[1]),a[2]!==void 0&&(f.allDisplayedGear=a[2]),r=new FM({props:f}),J.push(()=>me(r,"open",_)),J.push(()=>me(r,"allGearCategories",p)),J.push(()=>me(r,"allGearCategoriesMap",c)),J.push(()=>me(r,"allDisplayedGear",h)),s=new k_({props:{class:"mb-3",style:"width: max-content;margin: auto;min-width: 720px",$$slots:{default:[aT]},$$scope:{ctx:a}}}),{c(){e=P("div"),N(r.$$.fragment),i=F(),N(s.$$.fragment)},m(d,M){S(d,e,M),O(r,e,null),B(e,i),O(s,e,null),u=!0},p(d,[M]){const b={};!o&&M&16&&(o=!0,b.open=d[4],de(()=>o=!1)),!t&&M&1&&(t=!0,b.allGearCategories=d[0],de(()=>t=!1)),!l&&M&2&&(l=!0,b.allGearCategoriesMap=d[1],de(()=>l=!1)),!n&&M&4&&(n=!0,b.allDisplayedGear=d[2],de(()=>n=!1)),r.$set(b);const T={};M&131103&&(T.$$scope={dirty:M,ctx:d}),s.$set(T)},i(d){u||(k(r.$$.fragment,d),k(s.$$.fragment,d),u=!0)},o(d){g(r.$$.fragment,d),g(s.$$.fragment,d),u=!1},d(d){d&&y(e),R(r),R(s)}}}function oT(a,e,r){let{allGearCategories:o}=e,{allGearCategoriesMap:t}=e,{allDisplayedGear:l}=e,{global_desired_abilities:n}=e,i=!1;function s(b){i=b,r(4,i)}function u(b){o=b,r(0,o)}function _(b){t=b,r(1,t)}function p(b){l=b,r(2,l)}const c=()=>{r(4,i=!0)};function h(b,T,v,w){v[w]=b,r(0,o)}function f(b){l=b,r(2,l)}function d(b){o=b,r(0,o)}function M(b){t=b,r(1,t)}return a.$$set=b=>{"allGearCategories"in b&&r(0,o=b.allGearCategories),"allGearCategoriesMap"in b&&r(1,t=b.allGearCategoriesMap),"allDisplayedGear"in b&&r(2,l=b.allDisplayedGear),"global_desired_abilities"in b&&r(3,n=b.global_desired_abilities)},[o,t,l,n,i,s,u,_,p,c,h,f,d,M]}class tT extends ae{constructor(e){super(),ee(this,e,oT,rT,te,{allGearCategories:0,allGearCategoriesMap:1,allDisplayedGear:2,global_desired_abilities:3})}}function J0(a){let e,r;return{c(){e=P("img"),oa(e.src,r=`https://leanny.github.io/splat3/images/gear/${a[0]}.webp`)||C(e,"src",r),C(e,"class","svelte-13sokqt")},m(o,t){S(o,e,t)},p(o,t){t&1&&!oa(e.src,r=`https://leanny.github.io/splat3/images/gear/${o[0]}.webp`)&&C(e,"src",r)},d(o){o&&y(e)}}}function nT(a){let e,r=a[0]&&J0(a);return{c(){r&&r.c(),e=Pe()},m(o,t){r&&r.m(o,t),S(o,e,t)},p(o,[t]){o[0]?r?r.p(o,t):(r=J0(o),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:K,o:K,d(o){o&&y(e),r&&r.d(o)}}}function lT(a,e,r){let o,{RowId:t=null}=e,{gearType:l=null}=e,{gearId:n=null}=e;return a.$$set=i=>{"RowId"in i&&r(1,t=i.RowId),"gearType"in i&&r(2,l=i.gearType),"gearId"in i&&r(3,n=i.gearId)},a.$$.update=()=>{a.$$.dirty&14&&r(0,o=t??dn[l][n].__RowId)},[o,t,l,n]}class iT extends ae{constructor(e){super(),ee(this,e,lT,nT,te,{RowId:1,gearType:2,gearId:3})}}function sT(a){let e,r,o,t,l,n;return{c(){e=P("div"),r=P("img"),t=F(),l=P("img"),C(r,"class","ticket-icon svelte-139yv6w"),oa(r.src,o="https://cdn.wikimg.net/en/splatoonwiki/images/c/c3/S2_Icon_Drink_Ticket.png")||C(r,"src",o),C(l,"class","ability svelte-139yv6w"),oa(l.src,n=`https://leanny.github.io/splat3/images/skill/${Ba[a[0]]}.webp`)||C(l,"src",n),C(e,"class","ticket-container svelte-139yv6w")},m(i,s){S(i,e,s),B(e,r),B(e,t),B(e,l)},p(i,s){s&1&&!oa(l.src,n=`https://leanny.github.io/splat3/images/skill/${Ba[i[0]]}.webp`)&&C(l,"src",n)},d(i){i&&y(e)}}}function uT(a){let e;return{c(){e=P("div"),e.innerHTML='<img class="ticket-icon empty-ticket svelte-139yv6w" src="https://cdn.wikimg.net/en/splatoonwiki/images/c/c3/S2_Icon_Drink_Ticket.png" alt="No Ticket"/>',C(e,"class","ticket-container svelte-139yv6w")},m(r,o){S(r,e,o)},p:K,d(r){r&&y(e)}}}function _T(a){let e;function r(l,n){return l[0]===Kl.None?uT:sT}let o=r(a),t=o(a);return{c(){t.c(),e=Pe()},m(l,n){t.m(l,n),S(l,e,n)},p(l,[n]){o===(o=r(l))&&t?t.p(l,n):(t.d(1),t=o(l),t&&(t.c(),t.m(e.parentNode,e)))},i:K,o:K,d(l){l&&y(e),t.d(l)}}}function pT(a,e,r){let{abilityId:o}=e;return a.$$set=t=>{"abilityId"in t&&r(0,o=t.abilityId)},[o]}class Wi extends ae{constructor(e){super(),ee(this,e,pT,_T,te,{abilityId:0})}}function Z0(a,e,r){const o=a.slice();return o[1]=e[r],o}function cT(a){let e,r,o=Ce(a[0]),t=[];for(let n=0;n<o.length;n+=1)t[n]=X0(Z0(a,o,n));const l=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=Pe()},m(n,i){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,i);S(n,e,i),r=!0},p(n,i){if(i&1){o=Ce(n[0]);let s;for(s=0;s<o.length;s+=1){const u=Z0(n,o,s);t[s]?(t[s].p(u,i),k(t[s],1)):(t[s]=X0(u),t[s].c(),k(t[s],1),t[s].m(e.parentNode,e))}for(he(),s=o.length;s<t.length;s+=1)l(s);fe()}},i(n){if(!r){for(let i=0;i<o.length;i+=1)k(t[i]);r=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);r=!1},d(n){n&&y(e),ua(t,n)}}}function hT(a){let e;return{c(){e=P("b"),e.textContent="No tickets needed!"},m(r,o){S(r,e,o)},p:K,i:K,o:K,d(r){r&&y(e)}}}function X0(a){let e,r;return e=new Wi({props:{abilityId:a[1]}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&1&&(l.abilityId=o[1]),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function fT(a){let e,r,o,t;const l=[hT,cT],n=[];function i(s,u){return s[0].length===0?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function dT(a,e,r){let{ticketIds:o}=e;return a.$$set=t=>{"ticketIds"in t&&r(0,o=t.ticketIds)},[o]}class mT extends ae{constructor(e){super(),ee(this,e,dT,fT,te,{ticketIds:0})}}function kT(a){let e,r,o,t,l,n,i,s,u,_,p,c;return{c(){e=P("img"),o=F(),t=P("div"),l=P("img"),i=F(),s=P("img"),_=F(),p=P("div"),c=oe(a[1]),oa(e.src,r="")||C(e,"src",r),C(l,"class","chunk-icon svelte-1ivcxxh"),oa(l.src,n="https://raw.githubusercontent.com/Leanny/splat3/main/images/misc/SkillIconPiece_00%5Es.png")||C(l,"src",n),C(s,"class","ability svelte-1ivcxxh"),oa(s.src,u=`https://leanny.github.io/splat3/images/skill/${gl[a[0]]}.png`)||C(s,"src",u),C(p,"class","quantity-text svelte-1ivcxxh"),C(t,"class","parent svelte-1ivcxxh")},m(h,f){S(h,e,f),S(h,o,f),S(h,t,f),B(t,l),B(t,i),B(t,s),B(t,_),B(t,p),B(p,c)},p(h,[f]){f&1&&!oa(s.src,u=`https://leanny.github.io/splat3/images/skill/${gl[h[0]]}.png`)&&C(s,"src",u),f&2&&Je(c,h[1])},i:K,o:K,d(h){h&&(y(e),y(o),y(t))}}}function yT(a,e,r){let{abilityId:o}=e,{quantity:t}=e;return a.$$set=l=>{"abilityId"in l&&r(0,o=l.abilityId),"quantity"in l&&r(1,t=l.quantity)},[o,t]}class Fp extends ae{constructor(e){super(),ee(this,e,yT,kT,te,{abilityId:0,quantity:1})}}function gT(a){let e,r,o,t,l,n,i;return o=new Wi({props:{abilityId:a[0].contents.ticket}}),n=new Fp({props:{abilityId:a[0].contents.ability,quantity:a[0].contents.quantity}}),{c(){e=P("div"),r=P("div"),N(o.$$.fragment),t=F(),l=P("div"),N(n.$$.fragment),we(l,"position","absolute"),we(l,"top","25%"),we(l,"left","25%"),we(e,"display","inline-flex"),we(e,"position","relative")},m(s,u){S(s,e,u),B(e,r),O(o,r,null),B(e,t),B(e,l),O(n,l,null),i=!0},p(s,u){const _={};u&1&&(_.abilityId=s[0].contents.ticket),o.$set(_);const p={};u&1&&(p.abilityId=s[0].contents.ability),u&1&&(p.quantity=s[0].contents.quantity),n.$set(p)},i(s){i||(k(o.$$.fragment,s),k(n.$$.fragment,s),i=!0)},o(s){g(o.$$.fragment,s),g(n.$$.fragment,s),i=!1},d(s){s&&y(e),R(o),R(n)}}}function ST(a){let e,r;return e=new Fp({props:{abilityId:a[0].contents.ability,quantity:a[0].contents.quantity}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&1&&(l.abilityId=o[0].contents.ability),t&1&&(l.quantity=o[0].contents.quantity),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function bT(a){let e,r;return e=new Wi({props:{abilityId:a[0].contents}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&1&&(l.abilityId=o[0].contents),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function MT(a){let e,r,o,t;const l=[bT,ST,gT],n=[];function i(s,u){return s[0].variant==="Ticket"?0:s[0].variant==="Chunks"?1:s[0].variant==="TicketAndChunks"?2:-1}return~(e=i(a))&&(r=n[e]=l[e](a)),{c(){r&&r.c(),o=Pe()},m(s,u){~e&&n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?~e&&n[e].p(s,u):(r&&(he(),g(n[_],1,1,()=>{n[_]=null}),fe()),~e?(r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o)):r=null)},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),~e&&n[e].d(s)}}}function wT(a,e,r){let{gearSlot:o}=e;return o.variant=="Ticket"&&o.contents,a.$$set=t=>{"gearSlot"in t&&r(0,o=t.gearSlot)},[o]}class TT extends ae{constructor(e){super(),ee(this,e,wT,MT,te,{gearSlot:0})}}function Q0(a,e,r){const o=a.slice();return o[1]=e[r],o}function $0(a){let e,r;return e=new TT({props:{gearSlot:a[1]}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&1&&(l.gearSlot=o[1]),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function vT(a){let e,r,o=Ce(a[0]),t=[];for(let n=0;n<o.length;n+=1)t[n]=$0(Q0(a,o,n));const l=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=Pe()},m(n,i){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,i);S(n,e,i),r=!0},p(n,[i]){if(i&1){o=Ce(n[0]);let s;for(s=0;s<o.length;s+=1){const u=Q0(n,o,s);t[s]?(t[s].p(u,i),k(t[s],1)):(t[s]=$0(u),t[s].c(),k(t[s],1),t[s].m(e.parentNode,e))}for(he(),s=o.length;s<t.length;s+=1)l(s);fe()}},i(n){if(!r){for(let i=0;i<o.length;i+=1)k(t[i]);r=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);r=!1},d(n){n&&y(e),ua(t,n)}}}function PT(a,e,r){let{gearSlots:o}=e;return a.$$set=t=>{"gearSlots"in t&&r(0,o=t.gearSlots)},[o]}class HT extends ae{constructor(e){super(),ee(this,e,PT,vT,te,{gearSlots:0})}}function eu(a,e,r){const o=a.slice();o[11]=e[r],o[15]=r;const t=o[2][o[15]];o[12]=t;const l=1+o[11].reduce((n,i)=>n+i.size,0);return o[13]=l,o}function au(a,e,r){const o=a.slice();o[16]=e[r],o[20]=r;const t=o[12].containedGear[o[20]];o[17]=t;const l=o[17].gearInfo.gear.MainSkill;return o[18]=l,o}function ru(a,e,r){const o=a.slice();return o[21]=e[r][0],o[22]=e[r][1].chunks_used,o[23]=e[r][1].soonest_index,o[24]=e[r][1].actual_ticket_combo,o[26]=r,o}function UT(a){let e=a[4]?"Hide":"Show",r;return{c(){r=oe(e)},m(o,t){S(o,r,t)},p(o,t){t&16&&e!==(e=o[4]?"Hide":"Show")&&Je(r,e)},d(o){o&&y(r)}}}function ou(a){let e,r;return e=new P_({props:{bordered:!0,$$slots:{default:[CT]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&134217764&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function LT(a){let e,r,o,t,l,n,i;return o=new iT({props:{RowId:a[17].RowId}}),l=new Bp({props:{abilityId:a[18]}}),{c(){e=P("td"),r=P("div"),N(o.$$.fragment),t=F(),N(l.$$.fragment),C(r,"class","gear-image"),C(e,"rowspan",n=a[16].size),we(e,"text-align","right"),we(e,"background-color","transparent"),we(e,"border","none")},m(s,u){S(s,e,u),B(e,r),O(o,r,null),B(r,t),O(l,r,null),i=!0},p(s,u){const _={};u&4&&(_.RowId=s[17].RowId),o.$set(_);const p={};u&4&&(p.abilityId=s[18]),l.$set(p),(!i||u&32&&n!==(n=s[16].size))&&C(e,"rowspan",n)},i(s){i||(k(o.$$.fragment,s),k(l.$$.fragment,s),i=!0)},o(s){g(o.$$.fragment,s),g(l.$$.fragment,s),i=!1},d(s){s&&y(e),R(o),R(l)}}}function tu(a){let e,r,o,t,l,n,i=a[23]+"",s,u,_,p,c,h,f=a[26]==0&&LT(a);return t=new vp({props:{abilityIds:a[21]}}),p=new HT({props:{gearSlots:a[24]}}),{c(){e=P("tr"),f&&f.c(),r=F(),o=P("td"),N(t.$$.fragment),l=F(),n=P("td"),s=oe(i),u=F(),_=P("td"),N(p.$$.fragment),c=F(),C(o,"align","left"),we(o,"background-color","transparent"),we(o,"vertical-align","middle"),we(o,"border","none"),we(n,"background-color","transparent"),we(n,"vertical-align","middle"),we(n,"border","none"),we(_,"background-color","transparent"),we(_,"vertical-align","middle"),we(_,"border","none"),we(e,"background-color","transparent"),we(e,"border","none")},m(d,M){S(d,e,M),f&&f.m(e,null),B(e,r),B(e,o),O(t,o,null),B(e,l),B(e,n),B(n,s),B(e,u),B(e,_),O(p,_,null),B(e,c),h=!0},p(d,M){d[26]==0&&f.p(d,M);const b={};M&32&&(b.abilityIds=d[21]),t.$set(b),(!h||M&32)&&i!==(i=d[23]+"")&&Je(s,i);const T={};M&32&&(T.gearSlots=d[24]),p.$set(T)},i(d){h||(k(f),k(t.$$.fragment,d),k(p.$$.fragment,d),h=!0)},o(d){g(f),g(t.$$.fragment,d),g(p.$$.fragment,d),h=!1},d(d){d&&y(e),f&&f.d(),R(t),R(p)}}}function nu(a){let e,r,o=Ce(a[16]),t=[];for(let n=0;n<o.length;n+=1)t[n]=tu(ru(a,o,n));const l=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=Pe()},m(n,i){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,i);S(n,e,i),r=!0},p(n,i){if(i&36){o=Ce(n[16]);let s;for(s=0;s<o.length;s+=1){const u=ru(n,o,s);t[s]?(t[s].p(u,i),k(t[s],1)):(t[s]=tu(u),t[s].c(),k(t[s],1),t[s].m(e.parentNode,e))}for(he(),s=o.length;s<t.length;s+=1)l(s);fe()}},i(n){if(!r){for(let i=0;i<o.length;i+=1)k(t[i]);r=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);r=!1},d(n){n&&y(e),ua(t,n)}}}function lu(a){let e,r,o,t,l,n,i;o=new jp({props:{gearPurifyCategory:a[12]}});let s=Ce(a[11]),u=[];for(let p=0;p<s.length;p+=1)u[p]=nu(au(a,s,p));const _=p=>g(u[p],1,1,()=>{u[p]=null});return{c(){e=P("tr"),r=P("td"),N(o.$$.fragment),l=F();for(let p=0;p<u.length;p+=1)u[p].c();n=Pe(),C(r,"rowspan",t=a[13]),we(r,"background-color","transparent")},m(p,c){S(p,e,c),B(e,r),O(o,r,null),S(p,l,c);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(p,c);S(p,n,c),i=!0},p(p,c){const h={};if(c&4&&(h.gearPurifyCategory=p[12]),o.$set(h),(!i||c&32&&t!==(t=p[13]))&&C(r,"rowspan",t),c&36){s=Ce(p[11]);let f;for(f=0;f<s.length;f+=1){const d=au(p,s,f);u[f]?(u[f].p(d,c),k(u[f],1)):(u[f]=nu(d),u[f].c(),k(u[f],1),u[f].m(n.parentNode,n))}for(he(),f=s.length;f<u.length;f+=1)_(f);fe()}},i(p){if(!i){k(o.$$.fragment,p);for(let c=0;c<s.length;c+=1)k(u[c]);i=!0}},o(p){g(o.$$.fragment,p),u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)g(u[c]);i=!1},d(p){p&&(y(e),y(l),y(n)),R(o),ua(u,p)}}}function CT(a){let e,r,o,t,l=Ce(a[5]),n=[];for(let s=0;s<l.length;s+=1)n[s]=lu(eu(a,l,s));const i=s=>g(n[s],1,1,()=>{n[s]=null});return{c(){e=P("thead"),e.innerHTML='<tr><th style="background-color: transparent;">Category</th> <th style="background-color: transparent;">Gear</th> <th style="background-color: transparent;">Sub Abilities</th> <th style="background-color: transparent;">Soonest Roll #</th> <th style="background-color: transparent;">Tickets Used on each Gear</th></tr>',r=F(),o=P("tbody");for(let s=0;s<n.length;s+=1)n[s].c()},m(s,u){S(s,e,u),S(s,r,u),S(s,o,u);for(let _=0;_<n.length;_+=1)n[_]&&n[_].m(o,null);t=!0},p(s,u){if(u&36){l=Ce(s[5]);let _;for(_=0;_<l.length;_+=1){const p=eu(s,l,_);n[_]?(n[_].p(p,u),k(n[_],1)):(n[_]=lu(p),n[_].c(),k(n[_],1),n[_].m(o,null))}for(he(),_=l.length;_<n.length;_+=1)i(_);fe()}},i(s){if(!t){for(let u=0;u<l.length;u+=1)k(n[u]);t=!0}},o(s){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)g(n[u]);t=!1},d(s){s&&(y(e),y(r),y(o)),ua(n,s)}}}function IT(a){let e,r,o,t,l,n,i,s,u,_,p,c,h="/",f,d,M=a[1].size+"",b,T,v,w,U,j,x,I,L,A,q;i=new mT({props:{ticketIds:a[6]}});function be(D){a[8](D)}let ge={type:"number",min:"1",max:a[1].size,style:"width: min-content; display:inline-flex"};a[3]!==void 0&&(ge.value=a[3]),_=new kt({props:ge}),J.push(()=>me(_,"value",be)),w=new ga({props:{$$slots:{default:[UT]},$$scope:{ctx:a}}}),w.$on("click",a[9]);let Y=a[4]&&ou(a);return{c(){e=P("tr"),r=P("th"),o=oe("Result #"),t=oe(a[0]),l=F(),n=P("td"),N(i.$$.fragment),s=F(),u=P("td"),N(_.$$.fragment),c=F(),f=oe(h),d=F(),b=oe(M),T=F(),v=P("td"),N(w.$$.fragment),U=F(),j=P("tr"),x=F(),I=P("tr"),L=P("td"),Y&&Y.c(),C(r,"scope","row"),C(e,"class","border border-bottom-0 border-3 "),C(L,"colspan","99"),C(I,"style",A=a[4]?"":"visibility:collapse;")},m(D,$){S(D,e,$),B(e,r),B(r,o),B(r,t),B(e,l),B(e,n),O(i,n,null),B(e,s),B(e,u),O(_,u,null),B(u,c),B(u,f),B(u,d),B(u,b),B(e,T),B(e,v),O(w,v,null),S(D,U,$),S(D,j,$),S(D,x,$),S(D,I,$),B(I,L),Y&&Y.m(L,null),q=!0},p(D,[$]){(!q||$&1)&&Je(t,D[0]);const E={};$&64&&(E.ticketIds=D[6]),i.$set(E);const He={};$&2&&(He.max=D[1].size),!p&&$&8&&(p=!0,He.value=D[3],de(()=>p=!1)),_.$set(He),(!q||$&2)&&M!==(M=D[1].size+"")&&Je(b,M);const qe={};$&134217744&&(qe.$$scope={dirty:$,ctx:D}),w.$set(qe),D[4]?Y?(Y.p(D,$),$&16&&k(Y,1)):(Y=ou(D),Y.c(),k(Y,1),Y.m(L,null)):Y&&(he(),g(Y,1,1,()=>{Y=null}),fe()),(!q||$&16&&A!==(A=D[4]?"":"visibility:collapse;"))&&C(I,"style",A)},i(D){q||(k(i.$$.fragment,D),k(_.$$.fragment,D),k(w.$$.fragment,D),k(Y),q=!0)},o(D){g(i.$$.fragment,D),g(_.$$.fragment,D),g(w.$$.fragment,D),g(Y),q=!1},d(D){D&&(y(e),y(U),y(j),y(x),y(I)),R(i),R(_),R(w),Y&&Y.d()}}}function GT(a,e,r){let o,t,{resultIndex:l}=e,{ticket_combos_map:n}=e,{allGearCategories:i}=e,s=1,u;const _=f=>{r(7,u=[...n.entries()]),r(3,s=1)};let p=!0;function c(f){s=f,r(3,s)}const h=()=>r(4,p=!p);return a.$$set=f=>{"resultIndex"in f&&r(0,l=f.resultIndex),"ticket_combos_map"in f&&r(1,n=f.ticket_combos_map),"allGearCategories"in f&&r(2,i=f.allGearCategories)},a.$$.update=()=>{a.$$.dirty&2&&_(),a.$$.dirty&136&&r(6,o=u[s-1][0]),a.$$.dirty&136&&r(5,t=u[s-1][1])},[l,n,i,s,p,t,o,u,c,h]}class AT extends ae{constructor(e){super(),ee(this,e,GT,IT,te,{resultIndex:0,ticket_combos_map:1,allGearCategories:2})}}function iu(a,e,r){const o=a.slice();return o[5]=e[r][0],o[6]=e[r][1],o[8]=r,o}function BT(a){let e;return{c(){e=oe("Show Table")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function su(a){let e,r;return e=new P_({props:{class:"border border-3",bordered:!0,striped:!0,$$slots:{default:[OT]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&522&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function uu(a){let e,r;return e=new AT({props:{resultIndex:a[8],ticket_combos_map:a[6],allGearCategories:a[1]}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&8&&(l.ticket_combos_map=o[6]),t&2&&(l.allGearCategories=o[1]),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function OT(a){let e,r,o,t,l=Ce(a[3]),n=[];for(let s=0;s<l.length;s+=1)n[s]=uu(iu(a,l,s));const i=s=>g(n[s],1,1,()=>{n[s]=null});return{c(){e=P("thead"),e.innerHTML="<tr><th>Result #</th> <th>Ticket Combinations</th> <th>Ticket Combination #</th> <th>title</th></tr>",r=F(),o=P("tbody");for(let s=0;s<n.length;s+=1)n[s].c()},m(s,u){S(s,e,u),S(s,r,u),S(s,o,u);for(let _=0;_<n.length;_+=1)n[_]&&n[_].m(o,null);t=!0},p(s,u){if(u&10){l=Ce(s[3]);let _;for(_=0;_<l.length;_+=1){const p=iu(s,l,_);n[_]?(n[_].p(p,u),k(n[_],1)):(n[_]=uu(p),n[_].c(),k(n[_],1),n[_].m(o,null))}for(he(),_=l.length;_<n.length;_+=1)i(_);fe()}},i(s){if(!t){for(let u=0;u<l.length;u+=1)k(n[u]);t=!0}},o(s){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)g(n[u]);t=!1},d(s){s&&(y(e),y(r),y(o)),ua(n,s)}}}function RT(a){let e,r,o=a[0].result_table.size+"",t,l,n,i;e=new ga({props:{$$slots:{default:[BT]},$$scope:{ctx:a}}}),e.$on("click",a[4]);let s=a[2]&&su(a);return{c(){N(e.$$.fragment),r=F(),t=oe(o),l=oe(` Results\r
`),s&&s.c(),n=Pe()},m(u,_){O(e,u,_),S(u,r,_),S(u,t,_),S(u,l,_),s&&s.m(u,_),S(u,n,_),i=!0},p(u,[_]){const p={};_&512&&(p.$$scope={dirty:_,ctx:u}),e.$set(p),(!i||_&1)&&o!==(o=u[0].result_table.size+"")&&Je(t,o),u[2]?s?(s.p(u,_),_&4&&k(s,1)):(s=su(u),s.c(),k(s,1),s.m(n.parentNode,n)):s&&(he(),g(s,1,1,()=>{s=null}),fe())},i(u){i||(k(e.$$.fragment,u),k(s),i=!0)},o(u){g(e.$$.fragment,u),g(s),i=!1},d(u){u&&(y(r),y(t),y(l),y(n)),R(e,u),s&&s.d(u)}}}function NT(a,e,r){let o,{multi_gear_result:t}=e,{allGearCategories:l}=e,n=!1;const i=()=>r(2,n=!n);return a.$$set=s=>{"multi_gear_result"in s&&r(0,t=s.multi_gear_result),"allGearCategories"in s&&r(1,l=s.allGearCategories)},a.$$.update=()=>{a.$$.dirty&1&&r(3,o=t.result_table)},[t,l,n,o,i]}class ET extends ae{constructor(e){super(),ee(this,e,NT,RT,te,{multi_gear_result:0,allGearCategories:1})}}function jT(a,e){return a!=a?e==e:a!==e}const Kt={equal:function(e,r){return!jT(e,r)}};let gn=ma(20),_u=ma(4),zl=ma(!1),pu=ma(3),Vl=ma(tt.map(a=>[a,a,a]),Kt);function FT(a){let e,r,o,t;function l(i){a[1](i)}let n={type:"checkbox"};return a[0]!==void 0&&(n.checked=a[0]),r=new kt({props:n}),J.push(()=>me(r,"checked",l)),{c(){e=P("div"),N(r.$$.fragment)},m(i,s){S(i,e,s),O(r,e,null),t=!0},p(i,[s]){const u={};!o&&s&1&&(o=!0,u.checked=i[0],de(()=>o=!1)),r.$set(u)},i(i){t||(k(r.$$.fragment,i),t=!0)},o(i){g(r.$$.fragment,i),t=!1},d(i){i&&y(e),R(r)}}}function WT(a,e,r){let{alwaysCheckFullTicketDepth:o}=e;function t(l){o=l,r(0,o)}return a.$$set=l=>{"alwaysCheckFullTicketDepth"in l&&r(0,o=l.alwaysCheckFullTicketDepth)},[o,t]}class xT extends ae{constructor(e){super(),ee(this,e,WT,FT,te,{alwaysCheckFullTicketDepth:0})}}function DT(a){let e,r,o,t;function l(i){a[3](i)}let n={type:"number",min:"0",max:"4",disabled:!a[2],style:"width: min-content"};return a[0]!==void 0&&(n.value=a[0]),r=new kt({props:n}),J.push(()=>me(r,"value",l)),{c(){e=P("div"),N(r.$$.fragment)},m(i,s){S(i,e,s),O(r,e,null),t=!0},p(i,[s]){const u={};s&4&&(u.disabled=!i[2]),!o&&s&1&&(o=!0,u.value=i[0],de(()=>o=!1)),r.$set(u)},i(i){t||(k(r.$$.fragment,i),t=!0)},o(i){g(r.$$.fragment,i),t=!1},d(i){i&&y(e),R(r)}}}function zT(a,e,r){let o,t=K,l=()=>(t(),t=ba(i,u=>r(2,o=u)),i);a.$$.on_destroy.push(()=>t());let{ticketDepthLimit:n}=e,{enabled:i=Ap(!0)}=e;l();function s(u){n=u,r(0,n)}return a.$$set=u=>{"ticketDepthLimit"in u&&r(0,n=u.ticketDepthLimit),"enabled"in u&&l(r(1,i=u.enabled))},[n,i,o,s]}class cu extends ae{constructor(e){super(),ee(this,e,zT,DT,te,{ticketDepthLimit:0,enabled:1})}}function VT(a){let e;return{c(){e=oe("Purify All Gear")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function hu(a){let e,r;return e=new ET({props:{multi_gear_result:a[1],allGearCategories:a[0]}}),{c(){N(e.$$.fragment)},m(o,t){O(e,o,t),r=!0},p(o,t){const l={};t&2&&(l.multi_gear_result=o[1]),t&1&&(l.allGearCategories=o[0]),e.$set(l)},i(o){r||(k(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){R(e,o)}}}function qT(a){let e,r,o,t,l,n,i,s,u,_,p,c,h,f,d,M,b,T,v,w,U,j,x;function I(D){a[6](D)}let L={};a[4]!==void 0&&(L.ticketDepthLimit=a[4]),t=new cu({props:L}),J.push(()=>me(t,"ticketDepthLimit",I));function A(D){a[7](D)}let q={};a[3]!==void 0&&(q.alwaysCheckFullTicketDepth=a[3]),_=new xT({props:q}),J.push(()=>me(_,"alwaysCheckFullTicketDepth",A));function be(D){a[8](D)}let ge={enabled:zl};a[2]!==void 0&&(ge.ticketDepthLimit=a[2]),f=new cu({props:ge}),J.push(()=>me(f,"ticketDepthLimit",be)),v=new ga({props:{color:"primary",$$slots:{default:[VT]},$$scope:{ctx:a}}}),v.$on("click",a[5]);let Y=a[1]!=null&&hu(a);return{c(){e=P("h3"),e.textContent="Gear Purify Settings:",r=oe(`\r
\r
1. Check up to `),o=P("span"),N(t.$$.fragment),n=oe(" tickets at once, if needed"),i=P("br"),s=oe(`\r
2.(optional)`),u=P("span"),N(_.$$.fragment),c=oe(`\r
Always check combinations up to\r
`),h=P("span"),N(f.$$.fragment),M=oe(`\r
tickets long`),b=P("br"),T=F(),N(v.$$.fragment),w=P("br"),U=F(),Y&&Y.c(),j=Pe(),we(o,"display","inline-flex"),we(u,"display","inline-flex"),we(h,"display","inline-flex")},m(D,$){S(D,e,$),S(D,r,$),S(D,o,$),O(t,o,null),S(D,n,$),S(D,i,$),S(D,s,$),S(D,u,$),O(_,u,null),S(D,c,$),S(D,h,$),O(f,h,null),S(D,M,$),S(D,b,$),S(D,T,$),O(v,D,$),S(D,w,$),S(D,U,$),Y&&Y.m(D,$),S(D,j,$),x=!0},p(D,[$]){const E={};!l&&$&16&&(l=!0,E.ticketDepthLimit=D[4],de(()=>l=!1)),t.$set(E);const He={};!p&&$&8&&(p=!0,He.alwaysCheckFullTicketDepth=D[3],de(()=>p=!1)),_.$set(He);const qe={};!d&&$&4&&(d=!0,qe.ticketDepthLimit=D[2],de(()=>d=!1)),f.$set(qe);const Ne={};$&1024&&(Ne.$$scope={dirty:$,ctx:D}),v.$set(Ne),D[1]!=null?Y?(Y.p(D,$),$&2&&k(Y,1)):(Y=hu(D),Y.c(),k(Y,1),Y.m(j.parentNode,j)):Y&&(he(),g(Y,1,1,()=>{Y=null}),fe())},i(D){x||(k(t.$$.fragment,D),k(_.$$.fragment,D),k(f.$$.fragment,D),k(v.$$.fragment,D),k(Y),x=!0)},o(D){g(t.$$.fragment,D),g(_.$$.fragment,D),g(f.$$.fragment,D),g(v.$$.fragment,D),g(Y),x=!1},d(D){D&&(y(e),y(r),y(o),y(n),y(i),y(s),y(u),y(c),y(h),y(M),y(b),y(T),y(w),y(U),y(j)),R(t),R(_),R(f),R(v,D),Y&&Y.d(D)}}}function YT(a,e,r){let o,t,l,n;$a(a,gn,h=>r(9,o=h)),$a(a,pu,h=>r(2,t=h)),$a(a,zl,h=>r(3,l=h)),$a(a,_u,h=>r(4,n=h));let{allGearCategories:i=[]}=e,s;function u(){console.log("purify settings",n,l);let h=new qo().with_setting(n,l,t);for(const f of i){let d=new at;for(const M of f.containedGear){const b=M.wasmGear;d.add_gear_to_category(b,o,n_)}h.add_gear_category(d)}r(1,s=h.purify_all_gear())}function _(h){n=h,_u.set(n)}function p(h){l=h,zl.set(l)}function c(h){t=h,pu.set(t)}return a.$$set=h=>{"allGearCategories"in h&&r(0,i=h.allGearCategories)},[i,s,t,l,n,u,_,p,c]}class KT extends ae{constructor(e){super(),ee(this,e,YT,qT,te,{allGearCategories:0})}}function JT(a){console.log("CREATE GEAR");const{gearType:e,gearId:r,gear:o}=a,t=dn[e][r].__RowId,l=dn[e][r].Brand,n=new Yr(t,o.RandomContext,l),i=ma(!0),s=ma(!0),u=ma([],Kt),_=ma(Za(),Kt),p=ma(Za(),Kt),c=ma(10),h=ma(20),f=hl([gn,h],([b,T])=>T??b);i.subscribe(()=>console.log(t,"enable_all_local")),s.subscribe(()=>console.log(t,"enable_all_global")),u.subscribe(()=>console.log(t,"local_desired_abilities")),_.subscribe(()=>console.log(t,"local_desired_abilities_map")),p.subscribe(()=>console.log(t,"global_desired_abilities_map")),Vl.subscribe(()=>console.log(t,"global_desired_abilities"));const d=hl([i,s,u,_,Vl,p],([b,T,v,w,U,j])=>{console.log("COMPUTING DESIRED ABILITIES");let x=new Set;if(T)for(let L of U)(j.get(L)??!0)&&x.add(JSON.stringify(L));if(b)for(let L of v)(w.get(L)??!0)&&x.add(JSON.stringify(L));return[...x].map(L=>JSON.parse(L))});c.subscribe(b=>{n.max_allowed_chunks=b}),h.subscribe(b=>{n.how_far_to_check=b}),d.subscribe(b=>{n.desired_abilities=b});let M=hl([d,c,f],([b,T,v])=>{let w=n.purify_single_gear(v,n_);return{...w,summary:Object.fromEntries(w.summary.entries())}},{summary:{},single_gear_result:[]});return M.subscribe(()=>console.log("single_gear_result")),{RowId:t,gearInfo:a,gearPurifyCategory:ma(null),max_allowed_chunks:c,local_how_far_to_check:h,computed_how_far_to_check:f,hideResultTable:ma(!0),desired_abilities_info:{enable_all_local:i,enable_all_global:s,local_desired_abilities:u,local_desired_abilities_map:_,global_desired_abilities_map:p,show_all_local:ma(!0),show_all_global:ma(!0),show_enabled_global:ma(!0),show_disabled_global:ma(!1)},computed_desired_abilities:d,single_gear_result:M,wasmGear:n}}function fu(a,e,r){const o=a.slice();return o[12]=e[r],o[13]=e,o[14]=r,o}function du(a){let e,r,o;function t(n){a[10](n,a[12],a[13],a[14])}let l={allowBlankAbility:a[0]};return a[12]!==void 0&&(l.abilityId=a[12]),e=new nM({props:l}),J.push(()=>me(e,"abilityId",t)),{c(){N(e.$$.fragment)},m(n,i){O(e,n,i),o=!0},p(n,i){a=n;const s={};i&1&&(s.allowBlankAbility=a[0]),!r&&i&2&&(r=!0,s.abilityId=a[12],de(()=>r=!1)),e.$set(s)},i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){g(e.$$.fragment,n),o=!1},d(n){R(e,n)}}}function ZT(a){let e;return{c(){e=oe("Save")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function XT(a){let e;return{c(){e=oe("Cancel")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function QT(a){let e,r,o,t,l,n,i,s,u,_,p=Ce(a[1]),c=[];for(let f=0;f<p.length;f+=1)c[f]=du(fu(a,p,f));const h=f=>g(c[f],1,1,()=>{c[f]=null});return t=new ga({props:{disabled:a[3],$$slots:{default:[ZT]},$$scope:{ctx:a}}}),t.$on("click",a[7]),i=new ga({props:{$$slots:{default:[XT]},$$scope:{ctx:a}}}),i.$on("click",a[6]),{c(){e=P("td");for(let f=0;f<c.length;f+=1)c[f].c();r=F(),o=P("td"),N(t.$$.fragment),l=F(),n=P("td"),N(i.$$.fragment),C(o,"class","svelte-1kk5mbs"),la(o,"hidden",!a[2]),C(n,"class","svelte-1kk5mbs"),la(n,"hidden",!a[2])},m(f,d){S(f,e,d);for(let M=0;M<c.length;M+=1)c[M]&&c[M].m(e,null);S(f,r,d),S(f,o,d),O(t,o,null),S(f,l,d),S(f,n,d),O(i,n,null),s=!0,u||(_=[H(e,"focusin",a[4]),H(e,"focusout",a[5])],u=!0)},p(f,[d]){if(d&3){p=Ce(f[1]);let T;for(T=0;T<p.length;T+=1){const v=fu(f,p,T);c[T]?(c[T].p(v,d),k(c[T],1)):(c[T]=du(v),c[T].c(),k(c[T],1),c[T].m(e,null))}for(he(),T=p.length;T<c.length;T+=1)h(T);fe()}const M={};d&8&&(M.disabled=f[3]),d&32768&&(M.$$scope={dirty:d,ctx:f}),t.$set(M),(!s||d&4)&&la(o,"hidden",!f[2]);const b={};d&32768&&(b.$$scope={dirty:d,ctx:f}),i.$set(b),(!s||d&4)&&la(n,"hidden",!f[2])},i(f){if(!s){for(let d=0;d<p.length;d+=1)k(c[d]);k(t.$$.fragment,f),k(i.$$.fragment,f),s=!0}},o(f){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)g(c[d]);g(t.$$.fragment,f),g(i.$$.fragment,f),s=!1},d(f){f&&(y(e),y(r),y(o),y(l),y(n)),ua(c,f),R(t),R(i),u=!1,Be(_)}}}function $T(a,e){if(a===e)return!0;if(a==null||e==null||a.length!==e.length)return!1;for(var r=0;r<a.length;++r)if(a[r]!==e[r])return!1;return!0}function ev(a,e,r){let o,{ability_combo:t}=e,{onSubmit:l}=e,{allowBlankAbility:n=!1}=e,i;function s(d){r(1,i=d)}let u=!1;function _(){r(2,u=!0)}function p(d){let M=d?.relatedTarget,b=d?.target;console.log("ON CLICK AWAY",d,b?.parentElement?.parentElement,M?.parentElement?.parentElement),document.hasFocus()&&b?.parentElement?.parentElement!==M?.parentElement?.parentElement&&c()}function c(){console.log("ON CANCEL"),r(2,u=!1),r(1,i=[...t])}function h(){r(2,u=!1),!$T(t,i)&&(console.log("ON SAVE CHANGES"),l(i))}function f(d,M,b,T){b[T]=d,r(1,i)}return a.$$set=d=>{"ability_combo"in d&&r(8,t=d.ability_combo),"onSubmit"in d&&r(9,l=d.onSubmit),"allowBlankAbility"in d&&r(0,n=d.allowBlankAbility)},a.$$.update=()=>{a.$$.dirty&256&&s([...t]),a.$$.dirty&2&&r(3,o=i.includes(va.None))},[n,i,u,o,_,p,c,h,t,l,f]}class Wp extends ae{constructor(e){super(),ee(this,e,ev,QT,te,{ability_combo:8,onSubmit:9,allowBlankAbility:0})}}function mu(a,e,r){const o=a.slice();return o[6]=e[r],o[8]=r,o}function av(a){let e;return{c(){e=oe("Remove")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function ku(a){let e,r,o,t,l,n;return o=new ga({props:{$$slots:{default:[av]},$$scope:{ctx:a}}}),o.$on("click",a[4].bind(null,a[8])),l=new Wp({props:{ability_combo:a[6],onSubmit:a[2].bind(null,a[8])}}),{c(){e=P("tr"),r=P("td"),N(o.$$.fragment),t=F(),N(l.$$.fragment)},m(i,s){S(i,e,s),B(e,r),O(o,r,null),B(e,t),O(l,e,null),n=!0},p(i,s){const u={};s&512&&(u.$$scope={dirty:s,ctx:i}),o.$set(u);const _={};s&1&&(_.ability_combo=i[6]),l.$set(_)},i(i){n||(k(o.$$.fragment,i),k(l.$$.fragment,i),n=!0)},o(i){g(o.$$.fragment,i),g(l.$$.fragment,i),n=!1},d(i){i&&y(e),R(o),R(l)}}}function rv(a){let e,r,o,t,l,n,i,s=Ce(a[0]),u=[];for(let p=0;p<s.length;p+=1)u[p]=ku(mu(a,s,p));const _=p=>g(u[p],1,1,()=>{u[p]=null});return n=new Wp({props:{ability_combo:a[1],onSubmit:a[3]}}),{c(){e=P("table");for(let p=0;p<u.length;p+=1)u[p].c();r=F(),o=P("tr"),t=P("td"),l=F(),N(n.$$.fragment)},m(p,c){S(p,e,c);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(e,null);B(e,r),B(e,o),B(o,t),B(o,l),O(n,o,null),i=!0},p(p,[c]){if(c&21){s=Ce(p[0]);let f;for(f=0;f<s.length;f+=1){const d=mu(p,s,f);u[f]?(u[f].p(d,c),k(u[f],1)):(u[f]=ku(d),u[f].c(),k(u[f],1),u[f].m(e,r))}for(he(),f=s.length;f<u.length;f+=1)_(f);fe()}const h={};c&2&&(h.ability_combo=p[1]),n.$set(h)},i(p){if(!i){for(let c=0;c<s.length;c+=1)k(u[c]);k(n.$$.fragment,p),i=!0}},o(p){u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)g(u[c]);g(n.$$.fragment,p),i=!1},d(p){p&&y(e),ua(u,p),R(n)}}}function yu(a,e){if(a===e)return!0;if(a==null||e==null||a.length!==e.length)return!1;for(var r=0;r<a.length;++r)if(a[r]!==e[r])return!1;return!0}function ov(a,e,r){let{desired_abilities:o}=e;const t=[va.None,va.None,va.None];let l=[...t];function n(u,_){console.log(_,o[u]),_!==o[u]&&(r(0,o[u]=_,o),r(0,o=o.filter(p=>p===_||!yu(p,_))))}function i(u){o.push(u),r(0,o=o.filter(_=>_===u||!yu(_,u))),r(1,l=[...t])}function s(u){r(0,o=o.toSpliced(u,1))}return a.$$set=u=>{"desired_abilities"in u&&r(0,o=u.desired_abilities)},a.$$.update=()=>{a.$$.dirty&1&&console.log(o)},[o,l,n,i,s]}class tv extends ae{constructor(e){super(),ee(this,e,ov,rv,te,{desired_abilities:0})}}const nv=a=>({}),gu=a=>({});function Su(a,e,r){const o=a.slice();return o[38]=e[r],o}const lv=a=>({item:a[0]&16384,index:a[0]&16384}),bu=a=>({item:a[38].data,index:a[38].index}),iv=a=>({item:a[0]&1}),Mu=a=>({item:a[0][0],index:-1}),sv=a=>({}),wu=a=>({});function Tu(a){let e;const r=a[25].tbody,o=ne(r,a,a[24],Mu),t=o||uv();return{c(){t&&t.c()},m(l,n){t&&t.m(l,n),e=!0},p(l,n){o&&o.p&&(!e||n[0]&16777217)&&ie(o,r,l,l[24],e?le(r,l[24],n,iv):se(l[24]),Mu)},i(l){e||(k(t,l),e=!0)},o(l){g(t,l),e=!1},d(l){t&&t.d(l)}}}function uv(a){let e;return{c(){e=oe("Missing Table Row")},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function _v(a){let e;return{c(){e=oe(`Missing Table Row\r
            `)},m(r,o){S(r,e,o)},d(r){r&&y(e)}}}function vu(a){let e;const r=a[25].tbody,o=ne(r,a,a[24],bu),t=o||_v();return{c(){t&&t.c()},m(l,n){t&&t.m(l,n),e=!0},p(l,n){o&&o.p&&(!e||n[0]&16793600)&&ie(o,r,l,l[24],e?le(r,l[24],n,lv):se(l[24]),bu)},i(l){e||(k(t,l),e=!0)},o(l){g(t,l),e=!1},d(l){t&&t.d(l)}}}function pv(a){let e,r,o,t,l,n,i,s,u,_,p,c,h,f,d;const M=a[25].thead,b=ne(M,a,a[24],wu);let T=a[4]&&Tu(a),v=Ce(a[14]),w=[];for(let I=0;I<v.length;I+=1)w[I]=vu(Su(a,v,I));const U=I=>g(w[I],1,1,()=>{w[I]=null}),j=a[25].tfoot,x=ne(j,a,a[24],gu);return{c(){e=P("svelte-virtual-table-viewport"),r=P("table"),o=P("thead"),b&&b.c(),l=F(),n=P("tbody"),T&&T.c(),i=F();for(let I=0;I<w.length;I+=1)w[I].c();s=F(),u=P("tfoot"),x&&x.c(),C(o,"class","thead svelte-mvio91"),C(o,"role","rowgroup"),er(()=>a[27].call(o)),C(n,"class","tbody svelte-mvio91"),C(n,"role","rowgroup"),C(u,"class","tfoot svelte-mvio91"),C(u,"role","rowgroup"),er(()=>a[29].call(u)),C(r,"class",p=Pu+" "+a[2]+" table svelte-mvio91"),C(r,"role","table"),we(r,"table-layout","auto"),we(r,"height",a[3]),we(r,"--bw-svt-p-top",a[12]+"px"),we(r,"--bw-svt-p-bottom",a[7]+"px"),we(r,"--bw-svt-head-height",a[9]+"px"),we(r,"--bw-svt-foot-height",a[10]+"px"),we(r,"--bw-svt-avg-row-height",a[6]+"px"),er(()=>a[31].call(r)),la(r,"require-border-collapse",a[1])},m(I,L){S(I,e,L),B(e,r),B(r,o),b&&b.m(o,null),a[26](o),t=Xn(o,a[27].bind(o)),B(r,l),B(r,n),T&&T.m(n,null),B(n,i);for(let A=0;A<w.length;A+=1)w[A]&&w[A].m(n,null);a[28](n),B(r,s),B(r,u),x&&x.m(u,null),_=Xn(u,a[29].bind(u)),a[30](r),c=Xn(r,a[31].bind(r)),h=!0,f||(d=H(r,"scroll",a[15]),f=!0)},p(I,L){if(b&&b.p&&(!h||L[0]&16777216)&&ie(b,M,I,I[24],h?le(M,I[24],L,sv):se(I[24]),wu),I[4]?T?(T.p(I,L),L[0]&16&&k(T,1)):(T=Tu(I),T.c(),k(T,1),T.m(n,i)):T&&(he(),g(T,1,1,()=>{T=null}),fe()),L[0]&16793600){v=Ce(I[14]);let A;for(A=0;A<v.length;A+=1){const q=Su(I,v,A);w[A]?(w[A].p(q,L),k(w[A],1)):(w[A]=vu(q),w[A].c(),k(w[A],1),w[A].m(n,null))}for(he(),A=v.length;A<w.length;A+=1)U(A);fe()}x&&x.p&&(!h||L[0]&16777216)&&ie(x,j,I,I[24],h?le(j,I[24],L,nv):se(I[24]),gu),(!h||L[0]&4&&p!==(p=Pu+" "+I[2]+" table svelte-mvio91"))&&C(r,"class",p),(!h||L[0]&8)&&we(r,"height",I[3]),(!h||L[0]&4096)&&we(r,"--bw-svt-p-top",I[12]+"px"),(!h||L[0]&128)&&we(r,"--bw-svt-p-bottom",I[7]+"px"),(!h||L[0]&512)&&we(r,"--bw-svt-head-height",I[9]+"px"),(!h||L[0]&1024)&&we(r,"--bw-svt-foot-height",I[10]+"px"),(!h||L[0]&64)&&we(r,"--bw-svt-avg-row-height",I[6]+"px"),(!h||L[0]&6)&&la(r,"require-border-collapse",I[1])},i(I){if(!h){k(b,I),k(T);for(let L=0;L<v.length;L+=1)k(w[L]);k(x,I),h=!0}},o(I){g(b,I),g(T),w=w.filter(Boolean);for(let L=0;L<w.length;L+=1)g(w[L]);g(x,I),h=!1},d(I){I&&y(e),b&&b.d(I),a[26](null),t(),T&&T.d(),ua(w,I),a[28](null),x&&x.d(I),_(),a[30](null),c(),f=!1,d()}}}const Pu="tablesort",Fo="sortable",Hu="ascending",Uu="descending";function Lu(){return new Promise(a=>requestAnimationFrame(()=>requestAnimationFrame(()=>a())))}function jt(a,e,r){const o=getComputedStyle(a,e);return parseFloat(o[r])}function cv(a,e,r){let{$$slots:o={},$$scope:t}=e,{items:l}=e,{requireBorderCollapse:n=!1}=e,{class:i=""}=e,{height:s="100%"}=e,{itemHeight:u=void 0}=e,{start:_=0}=e,{end:p=0}=e,{rowsPerItem:c=2}=e,{fixedColWidth:h=!0}=e,f,d=0,M,b=0,T=0,v=[],w,U,j,x=0,I,L=0,A;Po("handleScroll",be);async function q(X,Se,Ie){const V=I.scrollTop;await zi(),await Lu();let De=x-(V-b),Re=_;for(;De<Se-b&&Re<X.length;){let We=U[Re-_+(h?1:0)];We||(r(17,p=Re+1),await zi(),await Lu(),We=U[Re-_+(h?1:0)]);const Ze=v[Re]=Ie||We.getBoundingClientRect().height;De+=Ze,Re+=1}r(17,p=Re);const aa=X.length-p;r(6,f=(x+De)/p),r(7,d=aa*f+T),v.length=X.length,await ge(0,{behavior:"auto"})}async function be(){U=M.children,console.log("ROWS",U);const X=D.length<_,Se=jt(U[1+(h?1:0)],null,"border-bottom-width"),Ie=jt(U[1+(h?1:0)],null,"border-top-width"),V=jt(j,null,"border-top-width"),De=jt(j,null,"border-bottom-width"),Re=n?Math.max(Se,Ie):0;X&&await ge(D.length-1,{behavior:"auto"});const{scrollTop:aa}=I;let We=0;for(let Oe=h?1:0;Oe<U.length;Oe+=1)v[_+Oe-(h?1:0)]=u||U[Oe].getBoundingClientRect().height;let Ze=0,Xe=b+Ie/2,ue=[];for(;Ze<D.length;){const Oe=v[Ze]||f;if(ue[Ze]=Oe,Xe+Oe+Re>aa){We=Ze,r(12,x=Xe-(n?(De+V)/2:b+Ie/2));break}Xe+=Oe,Ze+=1}for(We=Math.max(0,We);Ze<D.length;){const Oe=v[Ze]||f;if(Xe+=Oe,Ze+=1,Xe>aa+L)break}r(16,_=We),r(17,p=Ze);const na=D.length-p;p===0&&r(17,p=10),r(6,f=Xe/p);let Q=na*f;for(;Ze<D.length;)Ze+=1,v[Ze]=f;r(7,d=Q),isFinite(d)||r(7,d=2e5)}async function ge(X,Se){const{scrollTop:Ie}=I,Re=(X-_)*(u||f);Se={left:0,top:Ie+Re,behavior:"smooth",...Se},I.scrollTo(Se)}let Y=[[]],D;const $=function(X,Se){return X.sort((Ie,V)=>{for(let[De,Re]of Se){const aa=Re===0?1:-1;if(De in V&&!(De in Ie))return-1*aa;if(!(De in V)&&De in Ie)return 1*aa;let We=0;if(typeof Ie[De]=="string"?We=aa*Ie[De].localeCompare(V[De]):Ie[De]!=V[De]&&(We=aa*(Ie[De]>V[De]?1:-1)),We)return We}return 0}),X};function E(X,Se){const Ie=X.dataset.sort;Se?Y[Y.length-1][0]===Ie?r(22,Y[Y.length-1]=[Ie,(Y[Y.length-1][1]+1)%2],Y):r(22,Y=[...Y,[Ie,0]]):Y.length===1&&Y[0][0]===Ie?r(22,Y[0]=[Ie,(Y[0][1]+1)%2],Y):(He(),r(22,Y=[[Ie,0]])),X.className=Fo+" "+(Y[Y.length-1][1]?Uu:Hu)}function He(){const X=j.getElementsByTagName("th");for(let Se=0;Se<X.length;Se++)X[Se].dataset.sort&&(X[Se].className=Fo)}ft(()=>{U=M.children,r(21,w=!0),q(l,L,u);const X=j.getElementsByTagName("th");for(let Se=0;Se<X.length;Se++)X[Se].dataset.sort&&(X[Se].className=Fo,X[Se].onclick=Ie=>E(X[Se],Ie.shiftKey)),X[Se].dataset.sortInitial==="descending"?(X[Se].className=Fo+" "+Uu,r(22,Y=[...Y,[X[Se].dataset.sort,1]])):X[Se].dataset.sortInitial!=null&&(X[Se].className=Fo+" "+Hu,r(22,Y=[...Y,[X[Se].dataset.sort,0]]))});function qe(X){J[X?"unshift":"push"](()=>{j=X,r(11,j)})}function Ne(){b=this.offsetHeight,r(9,b)}function pa(X){J[X?"unshift":"push"](()=>{M=X,r(8,M)})}function Fe(){T=this.offsetHeight,r(10,T)}function da(X){J[X?"unshift":"push"](()=>{I=X,r(13,I)})}function Ye(){L=this.offsetHeight,r(5,L)}return a.$$set=X=>{"items"in X&&r(0,l=X.items),"requireBorderCollapse"in X&&r(1,n=X.requireBorderCollapse),"class"in X&&r(2,i=X.class),"height"in X&&r(3,s=X.height),"itemHeight"in X&&r(18,u=X.itemHeight),"start"in X&&r(16,_=X.start),"end"in X&&r(17,p=X.end),"rowsPerItem"in X&&r(19,c=X.rowsPerItem),"fixedColWidth"in X&&r(4,h=X.fixedColWidth),"$$scope"in X&&r(24,t=X.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&4194305&&r(23,D=$([...l],Y)),a.$$.dirty[0]&10747936&&w&&q(D,L,u),a.$$.dirty[0]&8585216&&r(14,A=D.slice(_,p).map((X,Se)=>({index:Se+_,data:X})))},[l,n,i,s,h,L,f,d,M,b,T,j,x,I,A,be,_,p,u,c,ge,w,Y,D,t,o,qe,Ne,pa,Fe,da,Ye]}class hv extends ae{constructor(e){super(),ee(this,e,cv,pv,te,{items:0,requireBorderCollapse:1,class:2,height:3,itemHeight:18,start:16,end:17,rowsPerItem:19,fixedColWidth:4,scrollToIndex:20},null,[-1,-1])}get scrollToIndex(){return this.$$.ctx[20]}}function Cu(a){const e=a[19];a[21]=e.gearInputState,a[22]=e.rowType}function fv(a){let e,r,o,t,l,n,i,s,u,_,p,c,h,f,d,M,b,T;function v(L){a[10](L)}let w={};a[0]!==void 0&&(w.desired_abilities=a[0]),e=new tv({props:w}),J.push(()=>me(e,"desired_abilities",v));function U(L){a[11](L)}function j(L){a[12](L)}function x(L){a[13](L)}let I={global_desired_abilities:a[0]};return a[2]!==void 0&&(I.allGearCategories=a[2]),a[3]!==void 0&&(I.allGearCategoriesMap=a[3]),a[1]!==void 0&&(I.allDisplayedGear=a[1]),t=new tT({props:I}),J.push(()=>me(t,"allGearCategories",U)),J.push(()=>me(t,"allGearCategoriesMap",j)),J.push(()=>me(t,"allDisplayedGear",x)),u=new KT({props:{allGearCategories:a[2]}}),b=new hv({props:{requireBorderCollapse:!1,items:a[7],start:0,end:20,class:"svelte-virtual-gear-table",fixedColWidth:!0,$$slots:{tbody:[kv,({item:L,index:A})=>({19:L,20:A}),({item:L,index:A})=>(L?524288:0)|(A?1048576:0)],thead:[mv]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),o=F(),N(t.$$.fragment),s=F(),N(u.$$.fragment),_=F(),p=P("br"),c=P("br"),h=P("br"),f=P("br"),d=P("br"),M=F(),N(b.$$.fragment)},m(L,A){O(e,L,A),S(L,o,A),O(t,L,A),S(L,s,A),O(u,L,A),S(L,_,A),S(L,p,A),S(L,c,A),S(L,h,A),S(L,f,A),S(L,d,A),S(L,M,A),O(b,L,A),T=!0},p(L,A){const q={};!r&&A&1&&(r=!0,q.desired_abilities=L[0],de(()=>r=!1)),e.$set(q);const be={};A&1&&(be.global_desired_abilities=L[0]),!l&&A&4&&(l=!0,be.allGearCategories=L[2],de(()=>l=!1)),!n&&A&8&&(n=!0,be.allGearCategoriesMap=L[3],de(()=>n=!1)),!i&&A&2&&(i=!0,be.allDisplayedGear=L[1],de(()=>i=!1)),t.$set(be);const ge={};A&4&&(ge.allGearCategories=L[2]),u.$set(ge);const Y={};A&9961485&&(Y.$$scope={dirty:A,ctx:L}),b.$set(Y)},i(L){T||(k(e.$$.fragment,L),k(t.$$.fragment,L),k(u.$$.fragment,L),k(b.$$.fragment,L),T=!0)},o(L){g(e.$$.fragment,L),g(t.$$.fragment,L),g(u.$$.fragment,L),g(b.$$.fragment,L),T=!1},d(L){L&&(y(o),y(s),y(_),y(p),y(c),y(h),y(f),y(d),y(M)),R(e,L),R(t,L),R(u,L),R(b,L)}}}function dv(a){let e,r,o,t,l,n,i,s;return i=new yS({props:{value:100*a[4]/a[5]}}),{c(){e=P("div"),r=oe("Loading... "),o=oe(a[4]),t=oe("/"),l=oe(a[5]),n=F(),N(i.$$.fragment),C(e,"class","text-center")},m(u,_){S(u,e,_),B(e,r),B(e,o),B(e,t),B(e,l),S(u,n,_),O(i,u,_),s=!0},p(u,_){(!s||_&16)&&Je(o,u[4]),(!s||_&32)&&Je(l,u[5]);const p={};_&48&&(p.value=100*u[4]/u[5]),i.$set(p)},i(u){s||(k(i.$$.fragment,u),s=!0)},o(u){g(i.$$.fragment,u),s=!1},d(u){u&&(y(e),y(n)),R(i,u)}}}function mv(a){let e;return{c(){e=P("tr"),e.innerHTML="<th>Select</th> <th>Gear</th> <th>Abilities</th> <th>Max Chunks?</th> <th>How far to check?</th> <th>Show Gear Abilities</th>",C(e,"slot","thead"),C(e,"role","row")},m(r,o){S(r,e,o)},p:K,d(r){r&&y(e)}}}function kv(a){Cu(a);let e,r,o,t,l;function n(_){a[14](_)}function i(_){a[15](_)}function s(_){a[16](_)}let u={gearInputState:a[21],rowType:a[22],hidden:a[20]==-1};return a[3]!==void 0&&(u.allGearCategoriesMap=a[3]),a[2]!==void 0&&(u.allGearCategories=a[2]),a[0]!==void 0&&(u.global_desired_abilities=a[0]),e=new Ep({props:u}),J.push(()=>me(e,"allGearCategoriesMap",n)),J.push(()=>me(e,"allGearCategories",i)),J.push(()=>me(e,"global_desired_abilities",s)),{c(){N(e.$$.fragment)},m(_,p){O(e,_,p),l=!0},p(_,p){Cu(_);const c={};p&524288&&(c.gearInputState=_[21]),p&524288&&(c.rowType=_[22]),p&1048576&&(c.hidden=_[20]==-1),!r&&p&8&&(r=!0,c.allGearCategoriesMap=_[3],de(()=>r=!1)),!o&&p&4&&(o=!0,c.allGearCategories=_[2],de(()=>o=!1)),!t&&p&1&&(t=!0,c.global_desired_abilities=_[0],de(()=>t=!1)),e.$set(c)},i(_){l||(k(e.$$.fragment,_),l=!0)},o(_){g(e.$$.fragment,_),l=!1},d(_){R(e,_)}}}function yv(a){let e,r,o,t;const l=[dv,fv],n=[];function i(s,u){return s[6]?0:1}return e=i(a),r=n[e]=l[e](a),{c(){r.c(),o=Pe()},m(s,u){n[e].m(s,u),S(s,o,u),t=!0},p(s,[u]){let _=e;e=i(s),e===_?n[e].p(s,u):(he(),g(n[_],1,1,()=>{n[_]=null}),fe(),r=n[e],r?r.p(s,u):(r=n[e]=l[e](s),r.c()),k(r,1),r.m(o.parentNode,o))},i(s){t||(k(r),t=!0)},o(s){g(r),t=!1},d(s){s&&y(o),n[e].d(s)}}}function Iu(){return new Promise(a=>requestAnimationFrame(()=>requestAnimationFrame(()=>a())))}function gv(a,e,r){let{userGearDatabase:o}=e,{global_desired_abilities:t}=e;o.GearDB;let{allowed_drinks:l}=e,n=[],i=[],s=Vb(),u=0,_="?",p=!0,c=[];async function h(){r(6,p=!0),r(5,_=Ar.reduce((U,j)=>{const x=o.GearDB[`HaveGear${j}Map`];return U+Object.keys(x).length},0)),await Iu();for(const U of Ar){const j=o.GearDB[`HaveGear${U}Map`];for(const x of Object.keys(j)){const I={gearType:U,gearId:x,gear:j[x]};let L=JT(I);n.push(L),r(4,u+=1),u%10==0&&await Iu()}}return n.sort((U,j)=>U.gearInfo.gear.MainSkill-j.gearInfo.gear.MainSkill),n.sort((U,j)=>Ar.indexOf(U.gearInfo.gearType)-Ar.indexOf(j.gearInfo.gearType)),n.forEach(U=>{c.push({rowType:"first",gearInputState:U}),c.push({rowType:"second",gearInputState:U})}),r(6,p=!1),!0}ft(async()=>{await h()});function f(U){t=U,r(0,t)}function d(U){i=U,r(2,i)}function M(U){s=U,r(3,s)}function b(U){n=U,r(1,n)}function T(U){s=U,r(3,s)}function v(U){i=U,r(2,i)}function w(U){t=U,r(0,t)}return a.$$set=U=>{"userGearDatabase"in U&&r(8,o=U.userGearDatabase),"global_desired_abilities"in U&&r(0,t=U.global_desired_abilities),"allowed_drinks"in U&&r(9,l=U.allowed_drinks)},[t,n,i,s,u,_,p,c,o,l,f,d,M,b,T,v,w]}class Sv extends ae{constructor(e){super(),ee(this,e,gv,yv,te,{userGearDatabase:8,global_desired_abilities:0,allowed_drinks:9})}}function Gu(a){let e,r,o,t,l,n;function i(u){a[7](u)}let s={};return a[2]!==void 0&&(s.how_far_to_check=a[2]),r=new Op({props:s}),J.push(()=>me(r,"how_far_to_check",i)),l=new Sv({props:{userGearDatabase:a[0],howFarToCheck:a[2],global_desired_abilities:a[3],allowed_drinks:a[5]}}),{c(){e=P("div"),N(r.$$.fragment),t=F(),N(l.$$.fragment),C(e,"class","number-input svelte-14qav0o")},m(u,_){S(u,e,_),O(r,e,null),S(u,t,_),O(l,u,_),n=!0},p(u,_){const p={};!o&&_&4&&(o=!0,p.how_far_to_check=u[2],de(()=>o=!1)),r.$set(p);const c={};_&1&&(c.userGearDatabase=u[0]),_&4&&(c.howFarToCheck=u[2]),_&8&&(c.global_desired_abilities=u[3]),l.$set(c)},i(u){n||(k(r.$$.fragment,u),k(l.$$.fragment,u),n=!0)},o(u){g(r.$$.fragment,u),g(l.$$.fragment,u),n=!1},d(u){u&&(y(e),y(t)),R(r),R(l,u)}}}function bv(a){let e,r,o,t,l,n;function i(_){a[6](_)}let s={};a[0]!==void 0&&(s.gearSeedDatabase=a[0]),e=new ZS({props:s}),J.push(()=>me(e,"gearSeedDatabase",i));let u=a[1]&&Gu(a);return{c(){N(e.$$.fragment),o=P("br"),t=F(),u&&u.c(),l=Pe()},m(_,p){O(e,_,p),S(_,o,p),S(_,t,p),u&&u.m(_,p),S(_,l,p),n=!0},p(_,[p]){const c={};!r&&p&1&&(r=!0,c.gearSeedDatabase=_[0],de(()=>r=!1)),e.$set(c),_[1]?u?(u.p(_,p),p&2&&k(u,1)):(u=Gu(_),u.c(),k(u,1),u.m(l.parentNode,l)):u&&(he(),g(u,1,1,()=>{u=null}),fe())},i(_){n||(k(e.$$.fragment,_),k(u),n=!0)},o(_){g(e.$$.fragment,_),g(u),n=!1},d(_){_&&(y(o),y(t),y(l)),R(e,_),u&&u.d(_)}}}function Mv(a,e,r){let o,t,l;$a(a,gn,p=>r(2,t=p)),$a(a,Vl,p=>r(3,l=p));let n,i=r_();$a(a,i,p=>r(1,o=p)),Po("userGearDatabaseStore",i);let s=[];function u(p){n=p,r(0,n)}function _(p){t=p,gn.set(t)}return a.$$.update=()=>{a.$$.dirty&1&&Ft(i,o=n,o)},[n,o,t,l,i,s,u,_]}class wv extends ae{constructor(e){super(),ee(this,e,Mv,bv,te,{})}}function Tv(a){let e,r,o,t,l;return r=new bS({}),t=new wv({}),{c(){e=P("main"),N(r.$$.fragment),o=F(),N(t.$$.fragment)},m(n,i){S(n,e,i),O(r,e,null),B(e,o),O(t,e,null),l=!0},p:K,i(n){l||(k(r.$$.fragment,n),k(t.$$.fragment,n),l=!0)},o(n){g(r.$$.fragment,n),g(t.$$.fragment,n),l=!1},d(n){n&&y(e),R(r),R(t)}}}function vv(a){return Cf(),[]}class Pv extends ae{constructor(e){super(),ee(this,e,vv,Tv,te,{})}}new Pv({target:document.getElementById("app")});