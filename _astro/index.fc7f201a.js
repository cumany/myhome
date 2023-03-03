import{h as a,x as d,y as c}from"./Scrollbar.ec68d90a.js";import{r as p,s as f,w as y,k as I,F as m,C as z,d as g,t as b,c as w,h as Z,af as $}from"./runtime-core.esm-bundler.caa95594.js";function k(n){const e=p(!!n.value);if(e.value)return f(e);const r=y(n,t=>{t&&(e.value=!0,r())});return f(e)}const A=a("n-modal-body"),B=a("n-modal"),q=a("n-drawer-body"),F=a("n-drawer"),L=a("n-popover-body");function x(n,e,r="default"){const t=e[r];if(t===void 0)throw new Error(`[vueuc/${n}]: slot[${r}] is empty.`);return t()}function l(n,e=!0,r=[]){return n.forEach(t=>{if(t!==null){if(typeof t!="object"){(typeof t=="string"||typeof t=="number")&&r.push(I(String(t)));return}if(Array.isArray(t)){l(t,e,r);return}if(t.type===m){if(t.children===null)return;Array.isArray(t.children)&&l(t.children,e,r)}else t.type!==z&&r.push(t)}}),r}function M(n,e,r="default"){const t=e[r];if(t===void 0)throw new Error(`[vueuc/${n}]: slot[${r}] is empty.`);const s=l(t());if(s.length===1)return s[0];throw new Error(`[vueuc/${n}]: slot[${r}] should have exactly one child.`)}const i="@@coContext",T={mounted(n,{value:e,modifiers:r}){n[i]={handler:void 0},typeof e=="function"&&(n[i].handler=e,d("clickoutside",n,e,{capture:r.capture}))},updated(n,{value:e,modifiers:r}){const t=n[i];typeof e=="function"?t.handler?t.handler!==e&&(c("clickoutside",n,t.handler,{capture:r.capture}),t.handler=e,d("clickoutside",n,e,{capture:r.capture})):(n[i].handler=e,d("clickoutside",n,e,{capture:r.capture})):t.handler&&(c("clickoutside",n,t.handler,{capture:r.capture}),t.handler=void 0)},unmounted(n,{modifiers:e}){const{handler:r}=n[i];r&&c("clickoutside",n,r,{capture:e.capture}),n[i].handler=void 0}},V=T;function j(n,e){console.error(`[vdirs/${n}]: ${e}`)}class E{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,r){const{elementZIndex:t}=this;if(r!==void 0){e.style.zIndex=`${r}`,t.delete(e);return}const{nextZIndex:s}=this;t.has(e)&&t.get(e)+1===this.nextZIndex||(e.style.zIndex=`${s}`,t.set(e,s),this.nextZIndex=s+1,this.squashState())}unregister(e,r){const{elementZIndex:t}=this;t.has(e)?t.delete(e):r===void 0&&j("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort((r,t)=>r[1]-t[1]),this.nextZIndex=2e3,e.forEach(r=>{const t=r[0],s=this.nextZIndex++;`${s}`!==t.style.zIndex&&(t.style.zIndex=`${s}`)})}}const u=new E,o="@@ziContext",K={mounted(n,e){const{value:r={}}=e,{zIndex:t,enabled:s}=r;n[o]={enabled:!!s,initialized:!1},s&&(u.ensureZIndex(n,t),n[o].initialized=!0)},updated(n,e){const{value:r={}}=e,{zIndex:t,enabled:s}=r,h=n[o].enabled;s&&!h&&(u.ensureZIndex(n,t),n[o].initialized=!0),n[o].enabled=!!s},unmounted(n,e){if(!n[o].initialized)return;const{value:r={}}=e,{zIndex:t}=r;u.unregister(n,t)}},O=K,P=g({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:k(b(n,"show")),mergedTo:w(()=>{const{to:e}=n;return e??"body"})}},render(){return this.showTeleport?this.disabled?x("lazy-teleport",this.$slots):Z($,{disabled:this.disabled,to:this.mergedTo},x("lazy-teleport",this.$slots)):null}});export{P as L,M as a,B as b,V as c,q as d,F as e,x as g,A as m,L as p,O as z};