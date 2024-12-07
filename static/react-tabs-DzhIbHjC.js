import{r as l,a as x}from"./react-B5MDO8QK.js";import{c as S}from"./clsx-B-dksMZM.js";function K(t){return a=>!!a.type&&a.type.tabsRole===t}const $=K("Tab"),_=K("TabList"),j=K("TabPanel");function ce(t){return $(t)||_(t)||j(t)}function U(t,a){return l.Children.map(t,n=>n===null?null:ce(n)?a(n):n.props&&n.props.children&&typeof n.props.children=="object"?l.cloneElement(n,{...n.props,children:U(n.props.children,a)}):n)}function W(t,a){return l.Children.forEach(t,n=>{n!==null&&($(n)||j(n)?a(n):n.props&&n.props.children&&typeof n.props.children=="object"&&(_(n)&&a(n),W(n.props.children,a)))})}function X(t){let a=0;return W(t,n=>{$(n)&&a++}),a}function Y(t){return t&&"getAttribute"in t}function Q(t){return Y(t)&&t.getAttribute("data-rttab")}function w(t){return Y(t)&&t.getAttribute("aria-disabled")==="true"}let v;function ie(t){const a=t||(typeof window<"u"?window:void 0);try{v=!!(typeof a<"u"&&a.document&&a.document.activeElement)}catch{v=!1}}const ue={className:"react-tabs",focus:!1},Z=t=>{let a=l.useRef([]),n=l.useRef([]);const d=l.useRef();function f(e,s){if(e<0||e>=u())return;const{onSelect:r,selectedIndex:h}=t;r(e,h,s)}function b(e){const s=u();for(let r=e+1;r<s;r++)if(!w(o(r)))return r;for(let r=0;r<e;r++)if(!w(o(r)))return r;return e}function p(e){let s=e;for(;s--;)if(!w(o(s)))return s;for(s=u();s-- >e;)if(!w(o(s)))return s;return e}function N(){const e=u();for(let s=0;s<e;s++)if(!w(o(s)))return s;return null}function m(){let e=u();for(;e--;)if(!w(o(e)))return e;return null}function u(){const{children:e}=t;return X(e)}function o(e){return a.current[`tabs-${e}`]}function R(){let e=0;const{children:s,disabledTabClassName:r,focus:h,forceRenderTabPanel:c,selectedIndex:T,selectedTabClassName:C,selectedTabPanelClassName:H,environment:q}=t;n.current=n.current||[];let re=n.current.length-u();const le=l.useId();for(;re++<0;)n.current.push(`${le}${n.current.length}`);return U(s,g=>{let D=g;if(_(g)){let E=0,z=!1;v==null&&ie(q);const B=q||(typeof window<"u"?window:void 0);v&&B&&(z=x.Children.toArray(g.props.children).filter($).some((G,k)=>B.document.activeElement===o(k))),D=l.cloneElement(g,{children:U(g.props.children,G=>{const k=`tabs-${E}`,J=T===E,O={tabRef:oe=>{a.current[k]=oe},id:n.current[E],selected:J,focus:J&&(h||z)};return C&&(O.selectedClassName=C),r&&(O.disabledClassName=r),E++,l.cloneElement(G,O)})})}else if(j(g)){const E={id:n.current[e],selected:T===e};c&&(E.forceRender=c),H&&(E.selectedClassName=H),e++,D=l.cloneElement(g,E)}return D})}function I(e){const{direction:s,disableUpDownKeys:r,disableLeftRightKeys:h}=t;if(y(e.target)){let{selectedIndex:c}=t,T=!1,C=!1;(e.code==="Space"||e.keyCode===32||e.code==="Enter"||e.keyCode===13)&&(T=!0,C=!1,i(e)),!h&&(e.keyCode===37||e.code==="ArrowLeft")||!r&&(e.keyCode===38||e.code==="ArrowUp")?(s==="rtl"?c=b(c):c=p(c),T=!0,C=!0):!h&&(e.keyCode===39||e.code==="ArrowRight")||!r&&(e.keyCode===40||e.code==="ArrowDown")?(s==="rtl"?c=p(c):c=b(c),T=!0,C=!0):e.keyCode===35||e.code==="End"?(c=m(),T=!0,C=!0):(e.keyCode===36||e.code==="Home")&&(c=N(),T=!0,C=!0),T&&e.preventDefault(),C&&f(c,e)}}function i(e){let s=e.target;do if(y(s)){if(w(s))return;const r=[].slice.call(s.parentNode.children).filter(Q).indexOf(s);f(r,e);return}while((s=s.parentNode)!=null)}function y(e){if(!Q(e))return!1;let s=e.parentElement;do{if(s===d.current)return!0;if(s.getAttribute("data-rttabs"))break;s=s.parentElement}while(s);return!1}const{children:P,className:A,disabledTabClassName:Ce,domRef:M,focus:Ne,forceRenderTabPanel:ye,onSelect:Ee,selectedIndex:Re,selectedTabClassName:ge,selectedTabPanelClassName:we,environment:he,disableUpDownKeys:xe,disableLeftRightKeys:Ie,...ae}={...ue,...t};return x.createElement("div",Object.assign({},ae,{className:S(A),onClick:i,onKeyDown:I,ref:e=>{d.current=e,M&&M(e)},"data-rttabs":!0}),R())};Z.propTypes={};const de=0,L=1,fe={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},be=t=>t.selectedIndex===null?L:de,ee=t=>{const{children:a,defaultFocus:n,defaultIndex:d,focusTabOnClick:f,onSelect:b,...p}={...fe,...t},[N,m]=l.useState(n),[u]=l.useState(be(p)),[o,R]=l.useState(u===L?d||0:null);if(l.useEffect(()=>{m(!1)},[]),u===L){const y=X(a);l.useEffect(()=>{if(o!=null){const P=Math.max(0,y-1);R(Math.min(o,P))}},[y])}const I=(y,P,A)=>{typeof b=="function"&&b(y,P,A)===!1||(f&&m(!0),u===L&&R(y))};let i={...t,...p};return i.focus=N,i.onSelect=I,o!=null&&(i.selectedIndex=o),delete i.defaultFocus,delete i.defaultIndex,delete i.focusTabOnClick,x.createElement(Z,i,a)};ee.propTypes={};ee.tabsRole="Tabs";const pe={className:"react-tabs__tab-list"},te=t=>{const{children:a,className:n,...d}={...pe,...t};return x.createElement("ul",Object.assign({},d,{className:S(n),role:"tablist"}),a)};te.tabsRole="TabList";te.propTypes={};const F="react-tabs__tab",me={className:F,disabledClassName:`${F}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${F}--selected`},ne=t=>{let a=l.useRef();const{children:n,className:d,disabled:f,disabledClassName:b,focus:p,id:N,selected:m,selectedClassName:u,tabIndex:o,tabRef:R,...I}={...me,...t};return l.useEffect(()=>{m&&p&&a.current.focus()},[m,p]),x.createElement("li",Object.assign({},I,{className:S(d,{[u]:m,[b]:f}),ref:i=>{a.current=i,R&&R(i)},role:"tab",id:`tab${N}`,"aria-selected":m?"true":"false","aria-disabled":f?"true":"false","aria-controls":`panel${N}`,tabIndex:o||(m?"0":null),"data-rttab":!0}),n)};ne.propTypes={};ne.tabsRole="Tab";const V="react-tabs__tab-panel",Te={className:V,forceRender:!1,selectedClassName:`${V}--selected`},se=t=>{const{children:a,className:n,forceRender:d,id:f,selected:b,selectedClassName:p,...N}={...Te,...t};return x.createElement("div",Object.assign({},N,{className:S(n,{[p]:b}),role:"tabpanel",id:`panel${f}`,"aria-labelledby":`tab${f}`}),d||b?a:null)};se.tabsRole="TabPanel";se.propTypes={};export{ee as T,te as a,ne as b,se as c};
//# sourceMappingURL=react-tabs-DzhIbHjC.js.map
