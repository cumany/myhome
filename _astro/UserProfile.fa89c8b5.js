import{d as Y,r as $,p as ke,t as ze,c as O,h as S,i as Z,w as ye,o as Pe,a as Se,b as _e,e as Ie,f as _,g as ee,u as M,j as oe,k as Re,l as Be}from"./runtime-core.esm-bundler.caa95594.js";import{c as we,a as v,b as G,d as R,e as B,f as N,g as E,u as V,h as re,i as ne,j as He,k as te,l as $e,m as Oe,n as Ee,o as je,V as Me}from"./Scrollbar.ec68d90a.js";import{c as Te,a as Le}from"./light.edaafee5.js";import{c as z,a as q,r as X,b as Fe,N as We}from"./Input.00f3a35a.js";import{N as Ne}from"./Close.53c334c8.js";/* empty css                       */import"./merge.ea33a221.js";import"./runtime-dom.esm-bundler.aa3cc456.js";const Ve=e=>{const{textColor2:a,primaryColorHover:r,primaryColorPressed:i,primaryColor:s,infoColor:l,successColor:h,warningColor:u,errorColor:t,baseColor:p,borderColor:x,opacityDisabled:f,tagColor:b,closeIconColor:n,closeIconColorHover:c,closeIconColorPressed:P,borderRadiusSmall:m,fontSizeMini:y,fontSizeTiny:j,fontSizeSmall:o,fontSizeMedium:d,heightMini:C,heightTiny:g,heightSmall:k,heightMedium:w,closeColorHover:I,closeColorPressed:H,buttonColor2Hover:T,buttonColor2Pressed:L,fontWeightStrong:F}=e;return Object.assign(Object.assign({},Te),{closeBorderRadius:m,heightTiny:C,heightSmall:g,heightMedium:k,heightLarge:w,borderRadius:m,opacityDisabled:f,fontSizeTiny:y,fontSizeSmall:j,fontSizeMedium:o,fontSizeLarge:d,fontWeightStrong:F,textColorCheckable:a,textColorHoverCheckable:a,textColorPressedCheckable:a,textColorChecked:p,colorCheckable:"#0000",colorHoverCheckable:T,colorPressedCheckable:L,colorChecked:s,colorCheckedHover:r,colorCheckedPressed:i,border:`1px solid ${x}`,textColor:a,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:n,closeIconColorHover:c,closeIconColorPressed:P,closeColorHover:I,closeColorPressed:H,borderPrimary:`1px solid ${v(s,{alpha:.3})}`,textColorPrimary:s,colorPrimary:v(s,{alpha:.12}),colorBorderedPrimary:v(s,{alpha:.1}),closeIconColorPrimary:s,closeIconColorHoverPrimary:s,closeIconColorPressedPrimary:s,closeColorHoverPrimary:v(s,{alpha:.12}),closeColorPressedPrimary:v(s,{alpha:.18}),borderInfo:`1px solid ${v(l,{alpha:.3})}`,textColorInfo:l,colorInfo:v(l,{alpha:.12}),colorBorderedInfo:v(l,{alpha:.1}),closeIconColorInfo:l,closeIconColorHoverInfo:l,closeIconColorPressedInfo:l,closeColorHoverInfo:v(l,{alpha:.12}),closeColorPressedInfo:v(l,{alpha:.18}),borderSuccess:`1px solid ${v(h,{alpha:.3})}`,textColorSuccess:h,colorSuccess:v(h,{alpha:.12}),colorBorderedSuccess:v(h,{alpha:.1}),closeIconColorSuccess:h,closeIconColorHoverSuccess:h,closeIconColorPressedSuccess:h,closeColorHoverSuccess:v(h,{alpha:.12}),closeColorPressedSuccess:v(h,{alpha:.18}),borderWarning:`1px solid ${v(u,{alpha:.35})}`,textColorWarning:u,colorWarning:v(u,{alpha:.15}),colorBorderedWarning:v(u,{alpha:.12}),closeIconColorWarning:u,closeIconColorHoverWarning:u,closeIconColorPressedWarning:u,closeColorHoverWarning:v(u,{alpha:.12}),closeColorPressedWarning:v(u,{alpha:.18}),borderError:`1px solid ${v(t,{alpha:.23})}`,textColorError:t,colorError:v(t,{alpha:.1}),colorBorderedError:v(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:v(t,{alpha:.12}),closeColorPressedError:v(t,{alpha:.18})})},Ae={name:"Tag",common:we,self:Ve},Ue=Ae,De={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ke=G("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[R("strong",`
 font-weight: var(--n-font-weight-strong);
 `),B("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),B("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),B("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),B("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),R("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[B("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),B("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),R("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),R("icon, avatar",[R("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),R("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),R("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[N("disabled",[E("&:hover","background-color: var(--n-color-hover-checkable);",[N("checked","color: var(--n-text-color-hover-checkable);")]),E("&:active","background-color: var(--n-color-pressed-checkable);",[N("checked","color: var(--n-text-color-pressed-checkable);")])]),R("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[N("disabled",[E("&:hover","background-color: var(--n-color-checked-hover);"),E("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ge=Object.assign(Object.assign(Object.assign({},V.props),De),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),ae=re("n-tag");Y({name:"Tag",props:Ge,setup(e){const a=$(null),{mergedBorderedRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:s,mergedRtlRef:l}=ne(e),h=V("Tag","-tag",Ke,Ue,e,i);ke(ae,{roundRef:ze(e,"round")});function u(n){if(!e.disabled&&e.checkable){const{checked:c,onCheckedChange:P,onUpdateChecked:m,"onUpdate:checked":y}=e;m&&m(!c),y&&y(!c),P&&P(!c)}}function t(n){if(e.triggerClickOnClose||n.stopPropagation(),!e.disabled){const{onClose:c}=e;c&&$e(c,n)}}const p={setTextContent(n){const{value:c}=a;c&&(c.textContent=n)}},x=He("Tag",l,i),f=O(()=>{const{type:n,size:c,color:{color:P,textColor:m}={}}=e,{common:{cubicBezierEaseInOut:y},self:{padding:j,closeMargin:o,closeMarginRtl:d,borderRadius:C,opacityDisabled:g,textColorCheckable:k,textColorHoverCheckable:w,textColorPressedCheckable:I,textColorChecked:H,colorCheckable:T,colorHoverCheckable:L,colorPressedCheckable:F,colorChecked:W,colorCheckedHover:se,colorCheckedPressed:le,closeBorderRadius:ce,fontWeightStrong:ie,[z("colorBordered",n)]:de,[z("closeSize",c)]:he,[z("closeIconSize",c)]:ue,[z("fontSize",c)]:ve,[z("height",c)]:J,[z("color",n)]:ge,[z("textColor",n)]:fe,[z("border",n)]:be,[z("closeIconColor",n)]:Q,[z("closeIconColorHover",n)]:me,[z("closeIconColorPressed",n)]:Ce,[z("closeColorHover",n)]:pe,[z("closeColorPressed",n)]:xe}}=h.value;return{"--n-font-weight-strong":ie,"--n-avatar-size-override":`calc(${J} - 8px)`,"--n-bezier":y,"--n-border-radius":C,"--n-border":be,"--n-close-icon-size":ue,"--n-close-color-pressed":xe,"--n-close-color-hover":pe,"--n-close-border-radius":ce,"--n-close-icon-color":Q,"--n-close-icon-color-hover":me,"--n-close-icon-color-pressed":Ce,"--n-close-icon-color-disabled":Q,"--n-close-margin":o,"--n-close-margin-rtl":d,"--n-close-size":he,"--n-color":P||(r.value?de:ge),"--n-color-checkable":T,"--n-color-checked":W,"--n-color-checked-hover":se,"--n-color-checked-pressed":le,"--n-color-hover-checkable":L,"--n-color-pressed-checkable":F,"--n-font-size":ve,"--n-height":J,"--n-opacity-disabled":g,"--n-padding":j,"--n-text-color":m||fe,"--n-text-color-checkable":k,"--n-text-color-checked":H,"--n-text-color-hover-checkable":w,"--n-text-color-pressed-checkable":I}}),b=s?te("tag",O(()=>{let n="";const{type:c,size:P,color:{color:m,textColor:y}={}}=e;return n+=c[0],n+=P[0],m&&(n+=`a${q(m)}`),y&&(n+=`b${q(y)}`),r.value&&(n+="c"),n}),f,e):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:x,mergedClsPrefix:i,contentRef:a,mergedBordered:r,handleClick:u,handleCloseClick:t,cssVars:s?void 0:f,themeClass:b?.themeClass,onRender:b?.onRender})},render(){var e,a;const{mergedClsPrefix:r,rtlEnabled:i,closable:s,color:{borderColor:l}={},round:h,onRender:u,$slots:t}=this;u?.();const p=X(t.avatar,f=>f&&S("div",{class:`${r}-tag__avatar`},f)),x=X(t.icon,f=>f&&S("div",{class:`${r}-tag__icon`},f));return S("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:i,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:h,[`${r}-tag--avatar`]:p,[`${r}-tag--icon`]:x,[`${r}-tag--closable`]:s}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||p,S("span",{class:`${r}-tag__content`,ref:"contentRef"},(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e)),!this.checkable&&s?S(Ne,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:h,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?S("div",{class:`${r}-tag__border`,style:{borderColor:l}}):null)}});const A=Oe&&"loading"in document.createElement("img"),qe=(e={})=>{var a;const{root:r=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof r=="string"?document.querySelector(r):r)||document.documentElement})}},U=new WeakMap,D=new WeakMap,K=new WeakMap,Xe=(e,a,r)=>{if(!e)return()=>{};const i=qe(a),{root:s}=i.options;let l;const h=U.get(s);h?l=h:(l=new Map,U.set(s,l));let u,t;l.has(i.hash)?(t=l.get(i.hash),t[1].has(e)||(u=t[0],t[1].add(e),u.observe(e))):(u=new IntersectionObserver(f=>{f.forEach(b=>{if(b.isIntersecting){const n=D.get(b.target),c=K.get(b.target);n&&n(),c&&(c.value=!0)}})},i.options),u.observe(e),t=[u,new Set([e])],l.set(i.hash,t));let p=!1;const x=()=>{p||(D.delete(e),K.delete(e),p=!0,t[1].has(e)&&(t[0].unobserve(e),t[1].delete(e)),t[1].size<=0&&l.delete(i.hash),l.size||U.delete(s))};return D.set(e,x),K.set(e,r),x},Ye=re("n-avatar-group"),Je=G("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Ee(E("&","--n-merged-color: var(--n-color-modal);")),je(E("&","--n-merged-color: var(--n-color-popover);")),E("img",`
 width: 100%;
 height: 100%;
 `),B("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),G("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),B("text","line-height: 1.25")]),Qe=Object.assign(Object.assign({},V.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),Ze=Y({name:"Avatar",props:Qe,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:r}=ne(e),i=$(!1);let s=null;const l=$(null),h=$(null),u=()=>{const{value:o}=l;if(o&&(s===null||s!==o.innerHTML)){s=o.innerHTML;const{value:d}=h;if(d){const{offsetWidth:C,offsetHeight:g}=d,{offsetWidth:k,offsetHeight:w}=o,I=.9,H=Math.min(C/k*I,g/w*I,1);o.style.transform=`translateX(-50%) translateY(-50%) scale(${H})`}}},t=Z(Ye,null),p=O(()=>{const{size:o}=e;if(o)return o;const{size:d}=t||{};return d||"medium"}),x=V("Avatar","-avatar",Je,Le,e,a),f=Z(ae,null),b=O(()=>{if(t)return!0;const{round:o,circle:d}=e;return o!==void 0||d!==void 0?o||d:f?f.roundRef.value:!1}),n=O(()=>t?!0:e.bordered||!1),c=o=>{var d;if(!y.value)return;i.value=!0;const{onError:C,imgProps:g}=e;(d=g?.onError)===null||d===void 0||d.call(g,o),C&&C(o)};ye(()=>e.src,()=>i.value=!1);const P=O(()=>{const o=p.value,d=b.value,C=n.value,{color:g}=e,{self:{borderRadius:k,fontSize:w,color:I,border:H,colorModal:T,colorPopover:L},common:{cubicBezierEaseInOut:F}}=x.value;let W;return typeof o=="number"?W=`${o}px`:W=x.value.self[z("height",o)],{"--n-font-size":w,"--n-border":C?H:"none","--n-border-radius":d?"50%":k,"--n-color":g||I,"--n-color-modal":g||T,"--n-color-popover":g||L,"--n-bezier":F,"--n-merged-size":`var(--n-avatar-size-override, ${W})`}}),m=r?te("avatar",O(()=>{const o=p.value,d=b.value,C=n.value,{color:g}=e;let k="";return o&&(typeof o=="number"?k+=`a${o}`:k+=o[0]),d&&(k+="b"),C&&(k+="c"),g&&(k+=q(g)),k}),P,e):void 0,y=$(!e.lazy);Pe(()=>{if(A)return;let o;const d=Se(()=>{o?.(),o=void 0,e.lazy&&(o=Xe(h.value,e.intersectionObserverOptions,y))});_e(()=>{d(),o?.()})});const j=$(!e.lazy);return{textRef:l,selfRef:h,mergedRoundRef:b,mergedClsPrefix:a,fitTextTransform:u,cssVars:r?void 0:P,themeClass:m?.themeClass,onRender:m?.onRender,hasLoadError:i,handleError:c,shouldStartLoading:y,loaded:j,mergedOnLoad:o=>{var d;const{onLoad:C,imgProps:g}=e;C?.(o),(d=g?.onLoad)===null||d===void 0||d.call(g,o),j.value=!0}}},render(){var e,a;const{$slots:r,src:i,mergedClsPrefix:s,lazy:l,onRender:h,mergedOnLoad:u,shouldStartLoading:t,loaded:p,hasLoadError:x}=this;h?.();let f;const b=!p&&!x&&(this.renderPlaceholder?this.renderPlaceholder():(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?f=this.renderFallback?this.renderFallback():Fe(r.fallback,()=>[S("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):f=X(r.default,n=>{if(n)return S(Me,{onResize:this.fitTextTransform},{default:()=>S("span",{ref:"textRef",class:`${s}-avatar__text`},n)});if(i){const{imgProps:c}=this;return S("img",Object.assign(Object.assign({},c),{loading:A&&!this.intersectionObserverOptions&&l?"lazy":"eager",src:A||t||p?i:void 0,onLoad:u,"data-image-src":i,onError:this.handleError,style:[c?.style,{objectFit:this.objectFit},b?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),S("span",{ref:"selfRef",class:[`${s}-avatar`,this.themeClass],style:this.cssVars},f,l&&b)}}),eo={class:"user-profile-container w-full max-w-7xl mx-auto"},oo={class:"user-avatar flex"},ro={class:"flex flex-col mx-6"},no={class:"text-lg"},to={class:"text-xs"},ao=_("i",null,[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[_("path",{fill:"currentColor",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"})])],-1),so={class:"user-name flex mt-4 justify-start items-baseline"},lo=_("label",{class:"w-24"},"用户名：",-1),co={class:"w-48"},Co=Y({__name:"UserProfile",setup(e){let a=$({email:"邮箱",user_name:"未命名"});return(r,i)=>(Be(),Ie("div",eo,[_("div",oo,[ee(M(Ze),{round:"",size:48,src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),_("div",ro,[_("span",no,oe(M(a).user_name),1),_("span",to,[ao,Re(" "+oe(M(a)?.email),1)])])]),_("div",so,[lo,_("div",co,[ee(M(We),{value:M(a).user_name,"onUpdate:value":i[0]||(i[0]=s=>M(a).user_name=s),type:"text",placeholder:"用户名",maxlength:"8","show-count":""},null,8,["value"])])])]))}});export{Co as default};
