import{c as et,r as s,o as Ge,j as o,C as nt,i as tt,I as ot,B as Z,x as Ue,J as ve,s as we,u as V,y as Ke,S as rt,d as U,q as st,t as $e,L as at,z as ct}from"./index-CzT_kFiQ.js";import{U as Oe,$ as it,a0 as ut,G as dt,I as lt,J as ft,K as pt,M as mt,N as xt,O as ht,Q as gt,H as vt,k as Fe,g as Be,r as Ve,s as ze,q as ye,P as K,j as v,o as Me,h as He,i as We,A as wt,l as Mt,m as Ct,F as bt,D as yt,n as Rt,p as Nt,R as _t,a1 as Et,t as It,v as St,a as jt,z as Pt,a2 as Dt,T as Ye,b as Xe,c as ee,d as ie,S as X,e as qe,f as ne,a3 as Tt,a4 as At,V as Ot,W as Ft,X as kt,Y as Lt,Z as Gt,E as Ut,_ as ke}from"./index-k6YwsS7f.js";/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=et("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),$t=Oe.object({name:Oe.string().min(2,"Name must be at least 2 characters")}),Bt=({employee:e})=>{const n=s.useMemo(()=>({name:(e==null?void 0:e.name)??""}),[e]),[t,{isLoading:r}]=it(),[a,{isLoading:c}]=ut(),u=r||c,d=dt({resolver:vt($t),defaultValues:n,mode:"onBlur"});s.useEffect(()=>{d.reset(n)},[n]);const p=Ge(),l=()=>{p(Ue()),d.reset({name:""})};function m({name:i}){if(!u)return e?ve.promise(a({employeeId:e.id,name:i}).unwrap(),{loading:"Updating employee...",success:({message:f})=>(l(),f),error:f=>we(f).error}):ve.promise(t({name:i}).unwrap(),{loading:"Creating employee...",success:({message:f})=>(l(),f),error:f=>we(f).error})}return o.jsx(o.Fragment,{children:o.jsx(nt,{className:"w-full",children:o.jsx(tt,{className:"p-6",children:o.jsx(lt,{...d,children:o.jsxs("form",{onSubmit:d.handleSubmit(m),className:"space-y-4",children:[o.jsx(ft,{control:d.control,name:"name",render:({field:i})=>o.jsxs(pt,{children:[o.jsxs(mt,{children:["Name ",o.jsx("span",{className:"text-red-500",children:"*"})]}),o.jsx(xt,{children:o.jsx(ot,{placeholder:"Employee Name",...i})}),o.jsx(ht,{children:"Enter the name of the employee."}),o.jsx(gt,{})]})}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(Z,{type:"submit",disabled:u,children:e?"Update Employee":"Create Employee"}),e&&o.jsx(Z,{type:"button",variant:"outline",onClick:()=>{l()},children:"Cancel"})]})]})})})})})};function Vt(e,n){return s.useReducer((t,r)=>n[t][r]??t,e)}var re=e=>{const{present:n,children:t}=e,r=zt(n),a=typeof t=="function"?t({present:r.isPresent}):s.Children.only(t),c=V(r.ref,Ht(a));return typeof t=="function"||r.isPresent?s.cloneElement(a,{ref:c}):null};re.displayName="Presence";function zt(e){const[n,t]=s.useState(),r=s.useRef({}),a=s.useRef(e),c=s.useRef("none"),u=e?"mounted":"unmounted",[d,p]=Vt(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const l=ce(r.current);c.current=d==="mounted"?l:"none"},[d]),Fe(()=>{const l=r.current,m=a.current;if(m!==e){const f=c.current,g=ce(l);e?p("MOUNT"):g==="none"||(l==null?void 0:l.display)==="none"?p("UNMOUNT"):p(m&&f!==g?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,p]),Fe(()=>{if(n){let l;const m=n.ownerDocument.defaultView??window,i=g=>{const M=ce(r.current).includes(g.animationName);if(g.target===n&&M&&(p("ANIMATION_END"),!a.current)){const N=n.style.animationFillMode;n.style.animationFillMode="forwards",l=m.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=N)})}},f=g=>{g.target===n&&(c.current=ce(r.current))};return n.addEventListener("animationstart",f),n.addEventListener("animationcancel",i),n.addEventListener("animationend",i),()=>{m.clearTimeout(l),n.removeEventListener("animationstart",f),n.removeEventListener("animationcancel",i),n.removeEventListener("animationend",i)}}else p("ANIMATION_END")},[n,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:s.useCallback(l=>{l&&(r.current=getComputedStyle(l)),t(l)},[])}}function ce(e){return(e==null?void 0:e.animationName)||"none"}function Ht(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function Wt(e,n=[]){let t=[];function r(c,u){const d=s.createContext(u),p=t.length;t=[...t,u];function l(i){const{scope:f,children:g,...x}=i,M=(f==null?void 0:f[e][p])||d,N=s.useMemo(()=>x,Object.values(x));return o.jsx(M.Provider,{value:N,children:g})}function m(i,f){const g=(f==null?void 0:f[e][p])||d,x=s.useContext(g);if(x)return x;if(u!==void 0)return u;throw new Error(`\`${i}\` must be used within \`${c}\``)}return l.displayName=c+"Provider",[l,m]}const a=()=>{const c=t.map(u=>s.createContext(u));return function(d){const p=(d==null?void 0:d[e])||c;return s.useMemo(()=>({[`__scope${e}`]:{...d,[e]:p}}),[d,p])}};return a.scopeName=e,[r,Yt(a,...n)]}function Yt(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const u=r.reduce((d,{useScope:p,scopeName:l})=>{const i=p(c)[`__scope${l}`];return{...d,...i}},{});return s.useMemo(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}var ge="rovingFocusGroup.onEntryFocus",Xt={bubbles:!1,cancelable:!0},fe="RovingFocusGroup",[Ce,Je,qt]=Be(fe),[Jt,Qe]=Wt(fe,[qt]),[Qt,Zt]=Jt(fe),Ze=s.forwardRef((e,n)=>o.jsx(Ce.Provider,{scope:e.__scopeRovingFocusGroup,children:o.jsx(Ce.Slot,{scope:e.__scopeRovingFocusGroup,children:o.jsx(eo,{...e,ref:n})})}));Ze.displayName=fe;var eo=s.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:a=!1,dir:c,currentTabStopId:u,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:p,onEntryFocus:l,preventScrollOnEntryFocus:m=!1,...i}=e,f=s.useRef(null),g=V(n,f),x=Ve(c),[M=null,N]=ze({prop:u,defaultProp:d,onChange:p}),[b,_]=s.useState(!1),D=ye(l),$=Je(t),B=s.useRef(!1),[y,S]=s.useState(0);return s.useEffect(()=>{const R=f.current;if(R)return R.addEventListener(ge,D),()=>R.removeEventListener(ge,D)},[D]),o.jsx(Qt,{scope:t,orientation:r,dir:x,loop:a,currentTabStopId:M,onItemFocus:s.useCallback(R=>N(R),[N]),onItemShiftTab:s.useCallback(()=>_(!0),[]),onFocusableItemAdd:s.useCallback(()=>S(R=>R+1),[]),onFocusableItemRemove:s.useCallback(()=>S(R=>R-1),[]),children:o.jsx(K.div,{tabIndex:b||y===0?-1:0,"data-orientation":r,...i,ref:g,style:{outline:"none",...e.style},onMouseDown:v(e.onMouseDown,()=>{B.current=!0}),onFocus:v(e.onFocus,R=>{const k=!B.current;if(R.target===R.currentTarget&&k&&!b){const T=new CustomEvent(ge,Xt);if(R.currentTarget.dispatchEvent(T),!T.defaultPrevented){const I=$().filter(O=>O.focusable),L=I.find(O=>O.active),w=I.find(O=>O.id===M),q=[L,w,...I].filter(Boolean).map(O=>O.ref.current);tn(q,m)}}B.current=!1}),onBlur:v(e.onBlur,()=>_(!1))})})}),en="RovingFocusGroupItem",nn=s.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:a=!1,tabStopId:c,...u}=e,d=Me(),p=c||d,l=Zt(en,t),m=l.currentTabStopId===p,i=Je(t),{onFocusableItemAdd:f,onFocusableItemRemove:g}=l;return s.useEffect(()=>{if(r)return f(),()=>g()},[r,f,g]),o.jsx(Ce.ItemSlot,{scope:t,id:p,focusable:r,active:a,children:o.jsx(K.span,{tabIndex:m?0:-1,"data-orientation":l.orientation,...u,ref:n,onMouseDown:v(e.onMouseDown,x=>{r?l.onItemFocus(p):x.preventDefault()}),onFocus:v(e.onFocus,()=>l.onItemFocus(p)),onKeyDown:v(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){l.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const M=oo(x,l.orientation,l.dir);if(M!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let b=i().filter(_=>_.focusable).map(_=>_.ref.current);if(M==="last")b.reverse();else if(M==="prev"||M==="next"){M==="prev"&&b.reverse();const _=b.indexOf(x.currentTarget);b=l.loop?ro(b,_+1):b.slice(_+1)}setTimeout(()=>tn(b))}})})})});nn.displayName=en;var no={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function to(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function oo(e,n,t){const r=to(e.key,t);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return no[r]}function tn(e,n=!1){const t=document.activeElement;for(const r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}function ro(e,n){return e.map((t,r)=>e[(n+r)%e.length])}var so=Ze,ao=nn,be=["Enter"," "],co=["ArrowDown","PageUp","Home"],on=["ArrowUp","PageDown","End"],io=[...co,...on],uo={ltr:[...be,"ArrowRight"],rtl:[...be,"ArrowLeft"]},lo={ltr:["ArrowLeft"],rtl:["ArrowRight"]},se="Menu",[te,fo,po]=Be(se),[z,rn]=He(se,[po,We,Qe]),pe=We(),sn=Qe(),[mo,H]=z(se),[xo,ae]=z(se),an=e=>{const{__scopeMenu:n,open:t=!1,children:r,dir:a,onOpenChange:c,modal:u=!0}=e,d=pe(n),[p,l]=s.useState(null),m=s.useRef(!1),i=ye(c),f=Ve(a);return s.useEffect(()=>{const g=()=>{m.current=!0,document.addEventListener("pointerdown",x,{capture:!0,once:!0}),document.addEventListener("pointermove",x,{capture:!0,once:!0})},x=()=>m.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("pointermove",x,{capture:!0})}},[]),o.jsx(It,{...d,children:o.jsx(mo,{scope:n,open:t,onOpenChange:i,content:p,onContentChange:l,children:o.jsx(xo,{scope:n,onClose:s.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:m,dir:f,modal:u,children:r})})})};an.displayName=se;var ho="MenuAnchor",Re=s.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e,a=pe(t);return o.jsx(wt,{...a,...r,ref:n})});Re.displayName=ho;var Ne="MenuPortal",[go,cn]=z(Ne,{forceMount:void 0}),un=e=>{const{__scopeMenu:n,forceMount:t,children:r,container:a}=e,c=H(Ne,n);return o.jsx(go,{scope:n,forceMount:t,children:o.jsx(re,{present:t||c.open,children:o.jsx(St,{asChild:!0,container:a,children:r})})})};un.displayName=Ne;var P="MenuContent",[vo,_e]=z(P),dn=s.forwardRef((e,n)=>{const t=cn(P,e.__scopeMenu),{forceMount:r=t.forceMount,...a}=e,c=H(P,e.__scopeMenu),u=ae(P,e.__scopeMenu);return o.jsx(te.Provider,{scope:e.__scopeMenu,children:o.jsx(re,{present:r||c.open,children:o.jsx(te.Slot,{scope:e.__scopeMenu,children:u.modal?o.jsx(wo,{...a,ref:n}):o.jsx(Mo,{...a,ref:n})})})})}),wo=s.forwardRef((e,n)=>{const t=H(P,e.__scopeMenu),r=s.useRef(null),a=V(n,r);return s.useEffect(()=>{const c=r.current;if(c)return Mt(c)},[]),o.jsx(Ee,{...e,ref:a,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:v(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),Mo=s.forwardRef((e,n)=>{const t=H(P,e.__scopeMenu);return o.jsx(Ee,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),Ee=s.forwardRef((e,n)=>{const{__scopeMenu:t,loop:r=!1,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:u,disableOutsidePointerEvents:d,onEntryFocus:p,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:i,onInteractOutside:f,onDismiss:g,disableOutsideScroll:x,...M}=e,N=H(P,t),b=ae(P,t),_=pe(t),D=sn(t),$=fo(t),[B,y]=s.useState(null),S=s.useRef(null),R=V(n,S,N.onContentChange),k=s.useRef(0),T=s.useRef(""),I=s.useRef(0),L=s.useRef(null),w=s.useRef("right"),C=s.useRef(0),q=x?_t:s.Fragment,O=x?{as:rt,allowPinchZoom:!0}:void 0,Zn=h=>{var Y,Te;const j=T.current+h,A=$().filter(F=>!F.disabled),G=document.activeElement,xe=(Y=A.find(F=>F.ref.current===G))==null?void 0:Y.textValue,he=A.map(F=>F.textValue),De=Do(he,j,xe),J=(Te=A.find(F=>F.textValue===De))==null?void 0:Te.ref.current;(function F(Ae){T.current=Ae,window.clearTimeout(k.current),Ae!==""&&(k.current=window.setTimeout(()=>F(""),1e3))})(j),J&&setTimeout(()=>J.focus())};s.useEffect(()=>()=>window.clearTimeout(k.current),[]),Ct();const W=s.useCallback(h=>{var A,G;return w.current===((A=L.current)==null?void 0:A.side)&&Ao(h,(G=L.current)==null?void 0:G.area)},[]);return o.jsx(vo,{scope:t,searchRef:T,onItemEnter:s.useCallback(h=>{W(h)&&h.preventDefault()},[W]),onItemLeave:s.useCallback(h=>{var j;W(h)||((j=S.current)==null||j.focus(),y(null))},[W]),onTriggerLeave:s.useCallback(h=>{W(h)&&h.preventDefault()},[W]),pointerGraceTimerRef:I,onPointerGraceIntentChange:s.useCallback(h=>{L.current=h},[]),children:o.jsx(q,{...O,children:o.jsx(bt,{asChild:!0,trapped:a,onMountAutoFocus:v(c,h=>{var j;h.preventDefault(),(j=S.current)==null||j.focus({preventScroll:!0})}),onUnmountAutoFocus:u,children:o.jsx(yt,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:i,onInteractOutside:f,onDismiss:g,children:o.jsx(so,{asChild:!0,...D,dir:b.dir,orientation:"vertical",loop:r,currentTabStopId:B,onCurrentTabStopIdChange:y,onEntryFocus:v(p,h=>{b.isUsingKeyboardRef.current||h.preventDefault()}),preventScrollOnEntryFocus:!0,children:o.jsx(Rt,{role:"menu","aria-orientation":"vertical","data-state":_n(N.open),"data-radix-menu-content":"",dir:b.dir,..._,...M,ref:R,style:{outline:"none",...M.style},onKeyDown:v(M.onKeyDown,h=>{const A=h.target.closest("[data-radix-menu-content]")===h.currentTarget,G=h.ctrlKey||h.altKey||h.metaKey,xe=h.key.length===1;A&&(h.key==="Tab"&&h.preventDefault(),!G&&xe&&Zn(h.key));const he=S.current;if(h.target!==he||!io.includes(h.key))return;h.preventDefault();const J=$().filter(Y=>!Y.disabled).map(Y=>Y.ref.current);on.includes(h.key)&&J.reverse(),jo(J)}),onBlur:v(e.onBlur,h=>{h.currentTarget.contains(h.target)||(window.clearTimeout(k.current),T.current="")}),onPointerMove:v(e.onPointerMove,oe(h=>{const j=h.target,A=C.current!==h.clientX;if(h.currentTarget.contains(j)&&A){const G=h.clientX>C.current?"right":"left";w.current=G,C.current=h.clientX}}))})})})})})})});dn.displayName=P;var Co="MenuGroup",Ie=s.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e;return o.jsx(K.div,{role:"group",...r,ref:n})});Ie.displayName=Co;var bo="MenuLabel",ln=s.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e;return o.jsx(K.div,{...r,ref:n})});ln.displayName=bo;var de="MenuItem",Le="menu.itemSelect",me=s.forwardRef((e,n)=>{const{disabled:t=!1,onSelect:r,...a}=e,c=s.useRef(null),u=ae(de,e.__scopeMenu),d=_e(de,e.__scopeMenu),p=V(n,c),l=s.useRef(!1),m=()=>{const i=c.current;if(!t&&i){const f=new CustomEvent(Le,{bubbles:!0,cancelable:!0});i.addEventListener(Le,g=>r==null?void 0:r(g),{once:!0}),Et(i,f),f.defaultPrevented?l.current=!1:u.onClose()}};return o.jsx(fn,{...a,ref:p,disabled:t,onClick:v(e.onClick,m),onPointerDown:i=>{var f;(f=e.onPointerDown)==null||f.call(e,i),l.current=!0},onPointerUp:v(e.onPointerUp,i=>{var f;l.current||(f=i.currentTarget)==null||f.click()}),onKeyDown:v(e.onKeyDown,i=>{const f=d.searchRef.current!=="";t||f&&i.key===" "||be.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});me.displayName=de;var fn=s.forwardRef((e,n)=>{const{__scopeMenu:t,disabled:r=!1,textValue:a,...c}=e,u=_e(de,t),d=sn(t),p=s.useRef(null),l=V(n,p),[m,i]=s.useState(!1),[f,g]=s.useState("");return s.useEffect(()=>{const x=p.current;x&&g((x.textContent??"").trim())},[c.children]),o.jsx(te.ItemSlot,{scope:t,disabled:r,textValue:a??f,children:o.jsx(ao,{asChild:!0,...d,focusable:!r,children:o.jsx(K.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...c,ref:l,onPointerMove:v(e.onPointerMove,oe(x=>{r?u.onItemLeave(x):(u.onItemEnter(x),x.defaultPrevented||x.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:v(e.onPointerLeave,oe(x=>u.onItemLeave(x))),onFocus:v(e.onFocus,()=>i(!0)),onBlur:v(e.onBlur,()=>i(!1))})})})}),yo="MenuCheckboxItem",pn=s.forwardRef((e,n)=>{const{checked:t=!1,onCheckedChange:r,...a}=e;return o.jsx(vn,{scope:e.__scopeMenu,checked:t,children:o.jsx(me,{role:"menuitemcheckbox","aria-checked":le(t)?"mixed":t,...a,ref:n,"data-state":je(t),onSelect:v(a.onSelect,()=>r==null?void 0:r(le(t)?!0:!t),{checkForDefaultPrevented:!1})})})});pn.displayName=yo;var mn="MenuRadioGroup",[Ro,No]=z(mn,{value:void 0,onValueChange:()=>{}}),xn=s.forwardRef((e,n)=>{const{value:t,onValueChange:r,...a}=e,c=ye(r);return o.jsx(Ro,{scope:e.__scopeMenu,value:t,onValueChange:c,children:o.jsx(Ie,{...a,ref:n})})});xn.displayName=mn;var hn="MenuRadioItem",gn=s.forwardRef((e,n)=>{const{value:t,...r}=e,a=No(hn,e.__scopeMenu),c=t===a.value;return o.jsx(vn,{scope:e.__scopeMenu,checked:c,children:o.jsx(me,{role:"menuitemradio","aria-checked":c,...r,ref:n,"data-state":je(c),onSelect:v(r.onSelect,()=>{var u;return(u=a.onValueChange)==null?void 0:u.call(a,t)},{checkForDefaultPrevented:!1})})})});gn.displayName=hn;var Se="MenuItemIndicator",[vn,_o]=z(Se,{checked:!1}),wn=s.forwardRef((e,n)=>{const{__scopeMenu:t,forceMount:r,...a}=e,c=_o(Se,t);return o.jsx(re,{present:r||le(c.checked)||c.checked===!0,children:o.jsx(K.span,{...a,ref:n,"data-state":je(c.checked)})})});wn.displayName=Se;var Eo="MenuSeparator",Mn=s.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e;return o.jsx(K.div,{role:"separator","aria-orientation":"horizontal",...r,ref:n})});Mn.displayName=Eo;var Io="MenuArrow",Cn=s.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e,a=pe(t);return o.jsx(Nt,{...a,...r,ref:n})});Cn.displayName=Io;var So="MenuSub",[Er,bn]=z(So),Q="MenuSubTrigger",yn=s.forwardRef((e,n)=>{const t=H(Q,e.__scopeMenu),r=ae(Q,e.__scopeMenu),a=bn(Q,e.__scopeMenu),c=_e(Q,e.__scopeMenu),u=s.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:p}=c,l={__scopeMenu:e.__scopeMenu},m=s.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return s.useEffect(()=>m,[m]),s.useEffect(()=>{const i=d.current;return()=>{window.clearTimeout(i),p(null)}},[d,p]),o.jsx(Re,{asChild:!0,...l,children:o.jsx(fn,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":a.contentId,"data-state":_n(t.open),...e,ref:Ke(n,a.onTriggerChange),onClick:i=>{var f;(f=e.onClick)==null||f.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:v(e.onPointerMove,oe(i=>{c.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!t.open&&!u.current&&(c.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{t.onOpenChange(!0),m()},100))})),onPointerLeave:v(e.onPointerLeave,oe(i=>{var g,x;m();const f=(g=t.content)==null?void 0:g.getBoundingClientRect();if(f){const M=(x=t.content)==null?void 0:x.dataset.side,N=M==="right",b=N?-5:5,_=f[N?"left":"right"],D=f[N?"right":"left"];c.onPointerGraceIntentChange({area:[{x:i.clientX+b,y:i.clientY},{x:_,y:f.top},{x:D,y:f.top},{x:D,y:f.bottom},{x:_,y:f.bottom}],side:M}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(i),i.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:v(e.onKeyDown,i=>{var g;const f=c.searchRef.current!=="";e.disabled||f&&i.key===" "||uo[r.dir].includes(i.key)&&(t.onOpenChange(!0),(g=t.content)==null||g.focus(),i.preventDefault())})})})});yn.displayName=Q;var Rn="MenuSubContent",Nn=s.forwardRef((e,n)=>{const t=cn(P,e.__scopeMenu),{forceMount:r=t.forceMount,...a}=e,c=H(P,e.__scopeMenu),u=ae(P,e.__scopeMenu),d=bn(Rn,e.__scopeMenu),p=s.useRef(null),l=V(n,p);return o.jsx(te.Provider,{scope:e.__scopeMenu,children:o.jsx(re,{present:r||c.open,children:o.jsx(te.Slot,{scope:e.__scopeMenu,children:o.jsx(Ee,{id:d.contentId,"aria-labelledby":d.triggerId,...a,ref:l,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:m=>{var i;u.isUsingKeyboardRef.current&&((i=p.current)==null||i.focus()),m.preventDefault()},onCloseAutoFocus:m=>m.preventDefault(),onFocusOutside:v(e.onFocusOutside,m=>{m.target!==d.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:v(e.onEscapeKeyDown,m=>{u.onClose(),m.preventDefault()}),onKeyDown:v(e.onKeyDown,m=>{var g;const i=m.currentTarget.contains(m.target),f=lo[u.dir].includes(m.key);i&&f&&(c.onOpenChange(!1),(g=d.trigger)==null||g.focus(),m.preventDefault())})})})})})});Nn.displayName=Rn;function _n(e){return e?"open":"closed"}function le(e){return e==="indeterminate"}function je(e){return le(e)?"indeterminate":e?"checked":"unchecked"}function jo(e){const n=document.activeElement;for(const t of e)if(t===n||(t.focus(),document.activeElement!==n))return}function Po(e,n){return e.map((t,r)=>e[(n+r)%e.length])}function Do(e,n,t){const a=n.length>1&&Array.from(n).every(l=>l===n[0])?n[0]:n,c=t?e.indexOf(t):-1;let u=Po(e,Math.max(c,0));a.length===1&&(u=u.filter(l=>l!==t));const p=u.find(l=>l.toLowerCase().startsWith(a.toLowerCase()));return p!==t?p:void 0}function To(e,n){const{x:t,y:r}=e;let a=!1;for(let c=0,u=n.length-1;c<n.length;u=c++){const d=n[c].x,p=n[c].y,l=n[u].x,m=n[u].y;p>r!=m>r&&t<(l-d)*(r-p)/(m-p)+d&&(a=!a)}return a}function Ao(e,n){if(!n)return!1;const t={x:e.clientX,y:e.clientY};return To(t,n)}function oe(e){return n=>n.pointerType==="mouse"?e(n):void 0}var Oo=an,Fo=Re,ko=un,Lo=dn,Go=Ie,Uo=ln,Ko=me,$o=pn,Bo=xn,Vo=gn,zo=wn,Ho=Mn,Wo=Cn,Yo=yn,Xo=Nn,Pe="DropdownMenu",[qo,Ir]=He(Pe,[rn]),E=rn(),[Jo,En]=qo(Pe),In=e=>{const{__scopeDropdownMenu:n,children:t,dir:r,open:a,defaultOpen:c,onOpenChange:u,modal:d=!0}=e,p=E(n),l=s.useRef(null),[m=!1,i]=ze({prop:a,defaultProp:c,onChange:u});return o.jsx(Jo,{scope:n,triggerId:Me(),triggerRef:l,contentId:Me(),open:m,onOpenChange:i,onOpenToggle:s.useCallback(()=>i(f=>!f),[i]),modal:d,children:o.jsx(Oo,{...p,open:m,onOpenChange:i,dir:r,modal:d,children:t})})};In.displayName=Pe;var Sn="DropdownMenuTrigger",jn=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,disabled:r=!1,...a}=e,c=En(Sn,t),u=E(t);return o.jsx(Fo,{asChild:!0,...u,children:o.jsx(K.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...a,ref:Ke(n,c.triggerRef),onPointerDown:v(e.onPointerDown,d=>{!r&&d.button===0&&d.ctrlKey===!1&&(c.onOpenToggle(),c.open||d.preventDefault())}),onKeyDown:v(e.onKeyDown,d=>{r||(["Enter"," "].includes(d.key)&&c.onOpenToggle(),d.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})})});jn.displayName=Sn;var Qo="DropdownMenuPortal",Pn=e=>{const{__scopeDropdownMenu:n,...t}=e,r=E(n);return o.jsx(ko,{...r,...t})};Pn.displayName=Qo;var Dn="DropdownMenuContent",Tn=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=En(Dn,t),c=E(t),u=s.useRef(!1);return o.jsx(Lo,{id:a.contentId,"aria-labelledby":a.triggerId,...c,...r,ref:n,onCloseAutoFocus:v(e.onCloseAutoFocus,d=>{var p;u.current||(p=a.triggerRef.current)==null||p.focus(),u.current=!1,d.preventDefault()}),onInteractOutside:v(e.onInteractOutside,d=>{const p=d.detail.originalEvent,l=p.button===0&&p.ctrlKey===!0,m=p.button===2||l;(!a.modal||m)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Tn.displayName=Dn;var Zo="DropdownMenuGroup",er=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Go,{...a,...r,ref:n})});er.displayName=Zo;var nr="DropdownMenuLabel",An=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Uo,{...a,...r,ref:n})});An.displayName=nr;var tr="DropdownMenuItem",On=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Ko,{...a,...r,ref:n})});On.displayName=tr;var or="DropdownMenuCheckboxItem",Fn=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx($o,{...a,...r,ref:n})});Fn.displayName=or;var rr="DropdownMenuRadioGroup",sr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Bo,{...a,...r,ref:n})});sr.displayName=rr;var ar="DropdownMenuRadioItem",kn=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Vo,{...a,...r,ref:n})});kn.displayName=ar;var cr="DropdownMenuItemIndicator",Ln=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(zo,{...a,...r,ref:n})});Ln.displayName=cr;var ir="DropdownMenuSeparator",Gn=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Ho,{...a,...r,ref:n})});Gn.displayName=ir;var ur="DropdownMenuArrow",dr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Wo,{...a,...r,ref:n})});dr.displayName=ur;var lr="DropdownMenuSubTrigger",Un=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Yo,{...a,...r,ref:n})});Un.displayName=lr;var fr="DropdownMenuSubContent",Kn=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,a=E(t);return o.jsx(Xo,{...a,...r,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Kn.displayName=fr;var pr=In,mr=jn,xr=Pn,$n=Tn,Bn=An,Vn=On,zn=Fn,Hn=kn,Wn=Ln,Yn=Gn,Xn=Un,qn=Kn;const hr=pr,gr=mr,vr=s.forwardRef(({className:e,inset:n,children:t,...r},a)=>o.jsxs(Xn,{ref:a,className:U("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",e),...r,children:[t,o.jsx(jt,{className:"ml-auto h-4 w-4"})]}));vr.displayName=Xn.displayName;const wr=s.forwardRef(({className:e,...n},t)=>o.jsx(qn,{ref:t,className:U("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));wr.displayName=qn.displayName;const Jn=s.forwardRef(({className:e,sideOffset:n=4,...t},r)=>o.jsx(xr,{children:o.jsx($n,{ref:r,sideOffset:n,className:U("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})}));Jn.displayName=$n.displayName;const ue=s.forwardRef(({className:e,inset:n,...t},r)=>o.jsx(Vn,{ref:r,className:U("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",e),...t}));ue.displayName=Vn.displayName;const Mr=s.forwardRef(({className:e,children:n,checked:t,...r},a)=>o.jsxs(zn,{ref:a,className:U("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:t,...r,children:[o.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:o.jsx(Wn,{children:o.jsx(Pt,{className:"h-4 w-4"})})}),n]}));Mr.displayName=zn.displayName;const Cr=s.forwardRef(({className:e,children:n,...t},r)=>o.jsxs(Hn,{ref:r,className:U("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[o.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:o.jsx(Wn,{children:o.jsx(Dt,{className:"h-4 w-4 fill-current"})})}),n]}));Cr.displayName=Hn.displayName;const Qn=s.forwardRef(({className:e,inset:n,...t},r)=>o.jsx(Bn,{ref:r,className:U("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",e),...t}));Qn.displayName=Bn.displayName;const br=s.forwardRef(({className:e,...n},t)=>o.jsx(Yn,{ref:t,className:U("-mx-1 my-1 h-px bg-muted",e),...n}));br.displayName=Yn.displayName;const yr=()=>o.jsx("div",{className:"w-full mt-4",children:o.jsx("div",{className:"rounded-md border",children:o.jsxs(Ye,{children:[o.jsx(Xe,{children:o.jsxs(ee,{children:[o.jsx(ie,{children:o.jsx(X,{className:"h-4 w-32"})}),o.jsx(ie,{children:o.jsx(X,{className:"h-4 w-32"})}),o.jsx(ie,{children:o.jsx(X,{className:"h-4 w-32"})})]})}),o.jsx(qe,{children:[...Array(10)].map((e,n)=>o.jsxs(ee,{children:[o.jsx(ne,{children:o.jsx(X,{className:"h-4 w-full"})}),o.jsx(ne,{children:o.jsx(X,{className:"h-4 w-full"})}),o.jsx(ne,{children:o.jsx(X,{className:"h-4 w-full"})})]},n))})]})})});function Rr(){var L;const[e,n]=st(),t=e.get("search")??"",r=e.get("order")??"asc",a=Number(e.get("page"))||1,c=a<1?1:a,{data:u,isLoading:d,isError:p,error:l}=Tt({name:t,page:c,"order[created_at]":r}),[m,{isLoading:i}]=At(),[f,g]=s.useState([]),[x,M]=s.useState([]),[N,b]=s.useState({}),[_,D]=s.useState({}),$=Ge(),B=(u==null?void 0:u.data)??[],y=u==null?void 0:u.pagination,S=$e(w=>w.employee.employee),R=async w=>{const C=S==null?void 0:S.id;i||ve.promise(m(w.id).unwrap(),{loading:"Deleting employee...",success:()=>(C===w.id&&$(Ue()),"Employee deleted successfully"),error:q=>we(q).error})},k=w=>{$(ct(w))};s.useEffect(()=>{y&&c>y.totalPages&&n({...Object.fromEntries(e),page:y.totalPages.toString()})},[y,c,e,n]);const T=s.useMemo(()=>[{accessorKey:"name",header:"Name",size:50,cell:({row:w})=>o.jsx("div",{className:"capitalize",children:w.getValue("name")})},{accessorKey:"created_at",header:({})=>o.jsxs("div",{className:"flex items-center cursor-pointer",onClick:()=>{const w=e.get("order")??"asc";e.set("order",w==="asc"?"desc":"asc"),n(e)},children:["Created At",o.jsx(Ot,{className:"ml-2 h-4 w-4"})]}),cell:({row:w})=>o.jsx("div",{children:new Date(w.getValue("created_at")).toLocaleDateString()}),enableSorting:!0},{id:"actions",enableHiding:!1,cell:({row:w})=>{const C=w.original;return o.jsxs(hr,{children:[o.jsx(gr,{asChild:!0,children:o.jsxs(Z,{variant:"ghost",className:"h-8 w-8 p-0",children:[o.jsx("span",{className:"sr-only",children:"Open menu"}),o.jsx(Kt,{className:"h-4 w-4"})]})}),o.jsxs(Jn,{align:"end",children:[o.jsx(Qn,{children:"Actions"}),o.jsx(ue,{children:o.jsxs(at,{to:`/${C.id}`,children:["View",o.jsx("strong",{className:"mx-1",children:C.name}),"Tasks"]})}),o.jsxs(ue,{disabled:i,onClick:()=>k(C),children:[o.jsx(Ft,{className:"h-4 w-4 mr-2"})," Edit"]}),o.jsxs(ue,{disabled:i,onClick:()=>R(C),children:[o.jsx(kt,{className:"h-4 w-4 mr-2"})," Delete"]})]})]})}}],[S,i]),I=Lt({data:B,columns:T,manualPagination:!0,pageCount:y==null?void 0:y.totalPages,state:{pagination:{pageIndex:c-1,pageSize:(y==null?void 0:y.limit)||10},sorting:f,columnFilters:x,columnVisibility:N,rowSelection:_},onPaginationChange:w=>{const C=typeof w=="function"?w({pageIndex:c-1,pageSize:(y==null?void 0:y.limit)||10}).pageIndex+1:w.pageIndex+1;n({...Object.fromEntries(e),page:C.toString()})},onSortingChange:g,onColumnFiltersChange:M,onColumnVisibilityChange:b,onRowSelectionChange:D,getCoreRowModel:Gt()});return d?o.jsx(yr,{}):p?o.jsx(Ut,{error:l}):o.jsxs("div",{className:"w-full mt-4",children:[o.jsx("div",{className:"rounded-md border",children:o.jsxs(Ye,{children:[o.jsx(Xe,{children:I.getHeaderGroups().map(w=>o.jsx(ee,{children:w.headers.map(C=>o.jsx(ie,{children:C.isPlaceholder?null:ke(C.column.columnDef.header,C.getContext())},C.id))},w.id))}),o.jsx(qe,{children:(L=I.getRowModel().rows)!=null&&L.length?I.getRowModel().rows.map(w=>o.jsx(ee,{"data-state":w.getIsSelected()&&"selected",children:w.getVisibleCells().map(C=>o.jsx(ne,{children:ke(C.column.columnDef.cell,C.getContext())},C.id))},w.id)):o.jsx(ee,{children:o.jsx(ne,{colSpan:T.length,className:"h-24 text-center",children:"No results."})})})]})}),o.jsx("div",{className:"flex items-center justify-end space-x-2 py-4",children:o.jsxs("div",{className:"space-x-2",children:[o.jsx(Z,{variant:"outline",size:"sm",onClick:()=>I.previousPage(),disabled:!I.getCanPreviousPage(),children:"Previous"}),o.jsx(Z,{variant:"outline",size:"sm",onClick:()=>I.nextPage(),disabled:!I.getCanNextPage(),children:"Next"})]})})]})}function Sr(){const e=$e(n=>n.employee.employee);return o.jsxs("div",{className:"my-4 space-y-4",children:[o.jsx(Bt,{employee:e}),o.jsx(Rr,{})]})}export{Sr as default};
