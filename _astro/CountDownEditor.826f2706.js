import{_ as ze}from"./CountDownProptype.vue_vue_type_script_setup_true_lang.3ee19c51.js";/* empty css                       */import{v as X,T as ee}from"./runtime-dom.esm-bundler.aa3cc456.js";import{e as W,d as Se,p as xe,m as Ce,c as ke,z as Be,L as Ee}from"./index.fc7f201a.js";import{i as te,j as Re,w as re,g as i,s as j,b,d as z,e as F,Z as Te,q as Fe,u as oe,v as Y,k as Oe,l as R,H as Me}from"./Scrollbar.ec68d90a.js";import{u as _e,F as De,a as Pe}from"./use-is-composing.d921f9c4.js";import{d as A,r as C,i as ne,c as S,a as je,w as Ae,b as Ie,p as P,a7 as L,h as a,A as Ue,t as V,a0 as He,l as O,e as _,f as Ne,g as q,ad as Z,u as D,F as N,a6 as G,a9 as J,ag as Le}from"./runtime-core.esm-bundler.caa95594.js";import{d as We}from"./light.c0a79e3c.js";import{e as Xe}from"./index.cbfaa337.js";import{N as Ye}from"./Close.53c334c8.js";import"./merge.ea33a221.js";const Ve=/^(\d|\.)+$/,K=/(\d|\.)+/;function Q(e,{c:t=1,offset:r=0,attachPx:f=!0}={}){if(typeof e=="number"){const o=(e+r)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(Ve.test(e)){const o=(Number(e)+r)*t;return f?o===0?"0":`${o}px`:`${o}`}else{const o=K.exec(e);return o?e.replace(K,String((Number(o[0])+r)*t)):e}return e}const qe=A({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=C(!!e.show),r=C(null),f=ne(W);let o=0,g="",u=null;const v=C(!1),m=C(!1),w=S(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:d,mergedRtlRef:c}=te(e),h=Re("Drawer",c,d),k=n=>{m.value=!0,o=w.value?n.clientY:n.clientX,g=document.body.style.cursor,document.body.style.cursor=w.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",T),document.body.addEventListener("mouseleave",$),document.body.addEventListener("mouseup",x)},y=()=>{u!==null&&(window.clearTimeout(u),u=null),m.value?v.value=!0:u=window.setTimeout(()=>{v.value=!0},300)},I=()=>{u!==null&&(window.clearTimeout(u),u=null),v.value=!1},{doUpdateHeight:U,doUpdateWidth:H}=f,T=n=>{var p,M;if(m.value)if(w.value){let B=((p=r.value)===null||p===void 0?void 0:p.offsetHeight)||0;const E=o-n.clientY;B+=e.placement==="bottom"?E:-E,U(B),o=n.clientY}else{let B=((M=r.value)===null||M===void 0?void 0:M.offsetWidth)||0;const E=o-n.clientX;B+=e.placement==="right"?E:-E,H(B),o=n.clientX}},x=()=>{m.value&&(o=0,m.value=!1,document.body.style.cursor=g,document.body.removeEventListener("mousemove",T),document.body.removeEventListener("mouseup",x),document.body.removeEventListener("mouseleave",$))},$=x;je(()=>{e.show&&(t.value=!0)}),Ae(()=>e.show,n=>{n||x()}),Ie(()=>{x()});const s=S(()=>{const{show:n}=e,p=[[X,n]];return e.showMask||p.push([ke,e.onClickoutside,void 0,{capture:!0}]),p});function l(){var n;t.value=!1,(n=e.onAfterLeave)===null||n===void 0||n.call(e)}return _e(S(()=>e.blockScroll&&t.value)),P(Se,r),P(xe,null),P(Ce,null),{bodyRef:r,rtlEnabled:h,mergedClsPrefix:f.mergedClsPrefixRef,isMounted:f.isMountedRef,mergedTheme:f.mergedThemeRef,displayed:t,transitionName:S(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:l,bodyDirectives:s,handleMousedownResizeTrigger:k,handleMouseenterResizeTrigger:y,handleMouseleaveResizeTrigger:I,isDragging:m,isHoverOnResizeTrigger:v}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?L(a("div",{role:"none"},a(De,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>a(ee,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>L(a("div",Ue(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?a("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?a("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):a(re,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[X,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ze,cubicBezierEaseOut:Ge}=j;function Je({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ze}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ge}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ke,cubicBezierEaseOut:Qe}=j;function et({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ke}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Qe}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:tt,cubicBezierEaseOut:rt}=j;function ot({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${tt}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${rt}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:nt,cubicBezierEaseOut:it}=j;function st({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${nt}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${it}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const at=i([b("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Je(),et(),ot(),st(),z("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),z("native-scrollbar",[b("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),F("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[z("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),b("drawer-content-wrapper",`
 box-sizing: border-box;
 `),b("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[z("native-scrollbar",[b("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),b("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),b("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),b("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[F("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),z("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[F("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),z("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[F("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),z("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[F("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),z("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[F("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),i("body",[i(">",[b("drawer-container",{position:"fixed"})])]),b("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[i("> *",{pointerEvents:"all"})]),b("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[z("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Te({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),lt=Object.assign(Object.assign({},oe.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),dt=A({name:"Drawer",inheritAttrs:!1,props:lt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:f}=te(e),o=Fe(),g=oe("Drawer","-drawer",at,We,e,t),u=C(e.defaultWidth),v=C(e.defaultHeight),m=Y(V(e,"width"),u),w=Y(V(e,"height"),v),d=S(()=>{const{placement:s}=e;return s==="top"||s==="bottom"?"":Q(m.value)}),c=S(()=>{const{placement:s}=e;return s==="left"||s==="right"?"":Q(w.value)}),h=s=>{const{onUpdateWidth:l,"onUpdate:width":n}=e;l&&R(l,s),n&&R(n,s),u.value=s},k=s=>{const{onUpdateHeight:l,"onUpdate:width":n}=e;l&&R(l,s),n&&R(n,s),v.value=s},y=S(()=>[{width:d.value,height:c.value},e.drawerStyle||""]);function I(s){const{onMaskClick:l,maskClosable:n}=e;n&&T(!1),l&&l(s)}const U=Pe();function H(s){var l;(l=e.onEsc)===null||l===void 0||l.call(e),e.show&&e.closeOnEsc&&Xe(s)&&!U.value&&T(!1)}function T(s){const{onHide:l,onUpdateShow:n,"onUpdate:show":p}=e;n&&R(n,s),p&&R(p,s),l&&!s&&R(l,s)}P(W,{isMountedRef:o,mergedThemeRef:g,mergedClsPrefixRef:t,doUpdateShow:T,doUpdateHeight:k,doUpdateWidth:h});const x=S(()=>{const{common:{cubicBezierEaseInOut:s,cubicBezierEaseIn:l,cubicBezierEaseOut:n},self:{color:p,textColor:M,boxShadow:B,lineHeight:E,headerPadding:ie,footerPadding:se,bodyPadding:ae,titleFontSize:le,titleTextColor:de,titleFontWeight:ce,headerBorderBottom:ue,footerBorderTop:he,closeIconColor:fe,closeIconColorHover:me,closeIconColorPressed:be,closeColorHover:ge,closeColorPressed:ve,closeIconSize:pe,closeSize:we,closeBorderRadius:ye,resizableTriggerColorHover:$e}}=g.value;return{"--n-line-height":E,"--n-color":p,"--n-text-color":M,"--n-box-shadow":B,"--n-bezier":s,"--n-bezier-out":n,"--n-bezier-in":l,"--n-header-padding":ie,"--n-body-padding":ae,"--n-footer-padding":se,"--n-title-text-color":de,"--n-title-font-size":le,"--n-title-font-weight":ce,"--n-header-border-bottom":ue,"--n-footer-border-top":he,"--n-close-icon-color":fe,"--n-close-icon-color-hover":me,"--n-close-icon-color-pressed":be,"--n-close-size":we,"--n-close-color-hover":ge,"--n-close-color-pressed":ve,"--n-close-icon-size":pe,"--n-close-border-radius":ye,"--n-resize-trigger-color-hover":$e}}),$=f?Oe("drawer",void 0,x,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:y,handleMaskClick:I,handleEsc:H,mergedTheme:g,cssVars:f?void 0:x,themeClass:$?.themeClass,onRender:$?.onRender,isMounted:o}},render(){const{mergedClsPrefix:e}=this;return a(Ee,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),L(a("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?a(ee,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?a("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,a(qe,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Be,{zIndex:this.zIndex,enabled:this.show}]])}})}}),ct={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},ut=A({name:"DrawerContent",props:ct,setup(){const e=ne(W,null);e||Me("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:f,bodyStyle:o,bodyContentStyle:g,headerStyle:u,footerStyle:v,scrollbarProps:m,closable:w,$slots:d}=this;return a("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},d.header||e||w?a("div",{class:`${t}-drawer-header`,style:u,role:"none"},a("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},d.header!==void 0?d.header():e),w&&a(Ye,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?a("div",{class:`${t}-drawer-body`,style:o,role:"none"},a("div",{class:`${t}-drawer-body-content-wrapper`,style:g,role:"none"},d)):a(re,Object.assign({themeOverrides:f.peerOverrides.Scrollbar,theme:f.peers.Scrollbar},m,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:g}),d),d.footer?a("div",{class:`${t}-drawer-footer`,style:v,role:"none"},d.footer()):null)}}),ht={id:"setting-panel",class:"widget-editor-container w-full max-w-7xl mx-auto flex items-center justify-between py-3"},ft={class:"flex justify-center items-center pb-24"},mt=A({__name:"CountDownEditor",setup(e){const t=C(!1),r=C("title"),o=He({title:{id:"标题设置",color:"#4f46e5",fontSize:"20px",width:"200px",height:"30px",backgroundColor:"#282c34",border:"0px solid white",textAlign:"left"},time:{id:"时间设置",color:"#4f46e5",fontSize:"30px",width:"200px",height:"30px",backgroundColor:"#282c34",border:"0px solid white",textAlign:"left"}}),g=Object.keys(o),u=(d,c)=>{switch(d){case"fontSize":o[r.value].fontSize=`${c}px`;break;case"color":o[r.value].color=c;break;case"backgroundColor":o[r.value].backgroundColor=c;break;case"width":o[r.value].width=`${c}px`;break;case"height":o[r.value].height=`${c}px`;break;case"textAlign":o[r.value].textAlign=`${c}`;break}},v=(d,c=50)=>{let h=0;return function(...k){let y=+new Date;y-h>c&&(h=y,d.apply(this,k))}},m=S(()=>v(u,50)),w=d=>{r.value=d,t.value=!0};return(d,c)=>(O(),_("div",ht,[Ne("div",ft,[q(ze,{widgetConfig:o,onElementClicked:w},null,8,["widgetConfig"])]),q(D(dt),{id:"setting-drawer",show:t.value,"onUpdate:show":c[0]||(c[0]=h=>t.value=h),width:300,height:200,placement:"right","trap-focus":!1,"block-scroll":!1,to:"#setting-panel"},{default:Z(()=>[(O(!0),_(N,null,G(D(g),h=>(O(),_(N,{key:h},[h===r.value?(O(),J(D(ut),{key:0,title:o[h].id},{default:Z(()=>[(O(!0),_(N,null,G(o[h],(k,y)=>(O(),J(mt,{key:y,value:k,type:y,title:o[h].id,onUpdateConfig:D(m)},null,8,["value","type","title","onUpdateConfig"]))),128))]),_:2},1032,["title"])):Le("",!0)],64))),128))]),_:1},8,["show"])]))}});export{mt as default};
