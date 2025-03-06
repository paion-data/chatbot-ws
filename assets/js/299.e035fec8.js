(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[299],{5967:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,a]=t;if(s&&a){s=parseInt(s),a=parseInt(a);const e=s<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=s;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},5888:(e,t,n)=>{"use strict";n.d(t,{A:()=>z});var s=n(2340),o=n(8040);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:a.length>0?(0,o.jsx)(o.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var c=n(5802),i=n(6726),r=n(7143);const l="admonition_dFHE",d="admonitionHeading_PQ65",u="admonitionIcon_YzJa",m="admonitionContent_sFKi";function h(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,c.A)(r.G.common.admonition,r.G.common.admonitionType(t),l,n),children:s})}function p(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("span",{className:u,children:t}),n]})}function f(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:m,children:t}):null}function g(e){const{type:t,icon:n,title:s,children:a,className:c}=e;return(0,o.jsxs)(h,{type:t,className:c,children:[(0,o.jsx)(p,{title:s,icon:n}),(0,o.jsx)(f,{children:a})]})}function x(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const j={icon:(0,o.jsx)(x,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,o.jsx)(g,{...j,...e,className:(0,c.A)("alert alert--secondary",e.className),children:e.children})}function v(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const N={icon:(0,o.jsx)(v,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function k(e){return(0,o.jsx)(g,{...N,...e,className:(0,c.A)("alert alert--success",e.className),children:e.children})}function y(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const A={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function B(e){return(0,o.jsx)(g,{...A,...e,className:(0,c.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function _(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const E={icon:(0,o.jsx)(_,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:b,tip:k,info:B,warning:function(e){return(0,o.jsx)(g,{...w,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(g,{...E,...e,className:(0,c.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(b,{title:"secondary",...e}),important:e=>(0,o.jsx)(B,{title:"important",...e}),success:e=>(0,o.jsx)(k,{title:"success",...e}),caution:function(e){return(0,o.jsx)(g,{...T,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})}}};function z(e){const t=a(e),n=(s=t.type,L[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),L.info));var s;return(0,o.jsx)(n,{...t})}},6658:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(2340);var s=n(6726),o=n(7143),a=n(5577),c=n(5802);const i={iconEdit:"iconEdit_Hgua"};var r=n(8040);function l(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.A)(i.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(a.A,{to:t,className:o.G.common.editThisPage,children:[(0,r.jsx)(l,{}),(0,r.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},3909:(e,t,n)=>{"use strict";n.d(t,{A:()=>ie});var s=n(2340),o=n(5246),a=n(9748),c=n(1287),i=n(5802),r=n(8973),l=n(2966);function d(){const{prism:e}=(0,l.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(7143),m=n(5967),h=n.n(m);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function x(e,t){const n=e.map((e=>{const{start:n,end:s}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function j(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:a}=t;if(a&&f.test(a)){const e=a.match(f).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"],t);case"jsx":case"tsx":return x(["js","jsBlock","jsx"],t);case"html":return x(["js","jsBlock","html"],t);case"python":case"py":case"bash":return x(["bash"],t);case"markdown":case"md":return x(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return x(["tex"],t);case"lua":case"haskell":case"sql":return x(["lua"],t);case"wasm":return x(["wasm"],t);default:return x(Object.keys(g).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(s,o),i=n.split("\n"),r=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const b="codeBlockContainer_dsFJ";var v=n(8040);function N(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const a=t[s];a&&"string"==typeof o&&(n[a]=o)})),n}(d());return(0,v.jsx)(t,{...n,style:s,className:(0,i.A)(n.className,b,u.G.common.codeBlock)})}const k={codeBlockContent:"codeBlockContent_qwYU",codeBlockTitle:"codeBlockTitle_M0Lh",codeBlock:"codeBlock_OAmf",codeBlockStandalone:"codeBlockStandalone_CLN5",codeBlockLines:"codeBlockLines_y6aT",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_NDe8",buttonGroup:"buttonGroup_WeXH"};function y(e){let{children:t,className:n}=e;return(0,v.jsx)(N,{as:"pre",tabIndex:0,className:(0,i.A)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,v.jsx)("code",{className:k.codeBlockLines,children:t})})}var A=n(236);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,o]=(0,s.useState)(),a=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=B);const o=(0,A._q)(t),a=(0,A.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var w=n(9129);const _="codeLine_yS2g",E="codeLineNumber_T5dm",T="codeLineContent_V1Fs";function L(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=o({line:t,className:(0,i.A)(n,s&&_)}),r=t.map(((e,t)=>(0,v.jsx)("span",{...a({token:e,key:t})},t)));return(0,v.jsxs)("span",{...c,children:[s?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:E}),(0,v.jsx)("span",{className:T,children:r})]}):r,(0,v.jsx)("br",{})]})}var z=n(6726);function M(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const H={copyButtonCopied:"copyButtonCopied_Kgg6",copyButtonIcons:"copyButtonIcons_YJer",copyButtonIcon:"copyButtonIcon_h31_",copyButtonSuccessIcon:"copyButtonSuccessIcon_Vii8"};function R(e){let{code:t,className:n}=e;const[o,a]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const a=document.getSelection(),c=a.rangeCount>0&&a.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),c&&(a.removeAllRanges(),a.addRange(c)),o&&o.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,v.jsx)("button",{type:"button","aria-label":o?(0,z.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,z.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,z.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",n,H.copyButton,o&&H.copyButtonCopied),onClick:r,children:(0,v.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,v.jsx)(M,{className:H.copyButtonIcon}),(0,v.jsx)(S,{className:H.copyButtonSuccessIcon})]})})}function I(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const V="wordWrapButtonIcon_fdHx",W="wordWrapButtonEnabled_EAXc";function $(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,z.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,v.jsx)("button",{type:"button",onClick:n,className:(0,i.A)("clean-btn",t,s&&W),"aria-label":o,title:o,children:(0,v.jsx)(I,{className:V,"aria-hidden":"true"})})}function P(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:c,language:r}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.p)(),h=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=d(),g=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),a=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return C(a,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),x=function(e){return e?.match(p)?.groups.title??""}(o)||a,{lineClassNames:b,code:y}=j(t,{metastring:o,language:h,magicComments:m}),A=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,v.jsxs)(N,{as:"div",className:(0,i.A)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[x&&(0,v.jsx)("div",{className:k.codeBlockTitle,children:x}),(0,v.jsxs)("div",{className:k.codeBlockContent,children:[(0,v.jsx)(w.f4,{theme:f,code:y,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:a}=e;return(0,v.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,i.A)(t,k.codeBlock,"thin-scrollbar"),style:n,children:(0,v.jsx)("code",{className:(0,i.A)(k.codeBlockLines,A&&k.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,v.jsx)(L,{line:e,getLineProps:o,getTokenProps:a,classNames:b[t],showLineNumbers:A},t)))})})}}),(0,v.jsxs)("div",{className:k.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,v.jsx)($,{className:k.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,v.jsx)(R,{className:k.codeButton,code:y})]})]})]})}function O(e){let{children:t,...n}=e;const o=(0,c.A)(),a=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof a?P:y;return(0,v.jsx)(i,{...n,children:a},String(o))}var D=n(5577);var F=n(6590);const q="details_B9T3",G="isBrowser_zacW",U="collapsibleContent_MO5z";function Y(e){return!!e&&("SUMMARY"===e.tagName||Y(e.parentElement))}function J(e,t){return!!e&&(e===t||J(e.parentElement,t))}function Z(e){let{summary:t,children:n,...o}=e;const a=(0,c.A)(),r=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,F.u)({initialState:!o.open}),[u,m]=(0,s.useState)(o.open),h=s.isValidElement(t)?t:(0,v.jsx)("summary",{children:t??"Details"});return(0,v.jsxs)("details",{...o,ref:r,open:u,"data-collapsed":l,className:(0,i.A)(q,a&&G,o.className),onMouseDown:e=>{Y(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Y(t)&&J(t,r.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,v.jsx)(F.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,v.jsx)("div",{className:U,children:n})})]})}const K="details_z0Bl";function Q(e){let{...t}=e;return(0,v.jsx)(Z,{...t,className:(0,i.A)("alert alert--info",K,t.className)})}function X(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,v.jsx)(v.Fragment,{children:t.filter((e=>e!==n))});return(0,v.jsx)(Q,{...e,summary:n,children:o})}var ee=n(3253);function te(e){return(0,v.jsx)(ee.A,{...e})}const ne="containsTaskList_jplB";function se(e){if(void 0!==e)return(0,i.A)(e,e?.includes("contains-task-list")&&ne)}const oe="img_kerH";var ae=n(5888);const ce={Head:a.A,details:X,Details:X,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,v.jsx)("code",{...e}):(0,v.jsx)(O,{...e})},a:function(e){return(0,v.jsx)(D.A,{...e})},pre:function(e){return(0,v.jsx)(v.Fragment,{children:e.children})},ul:function(e){return(0,v.jsx)("ul",{...e,className:se(e.className)})},img:function(e){return(0,v.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,i.A)(t,oe))});var t},h1:e=>(0,v.jsx)(te,{as:"h1",...e}),h2:e=>(0,v.jsx)(te,{as:"h2",...e}),h3:e=>(0,v.jsx)(te,{as:"h3",...e}),h4:e=>(0,v.jsx)(te,{as:"h4",...e}),h5:e=>(0,v.jsx)(te,{as:"h5",...e}),h6:e=>(0,v.jsx)(te,{as:"h6",...e}),admonition:ae.A,mermaid:()=>null};function ie(e){let{children:t}=e;return(0,v.jsx)(o.x,{components:ce,children:t})}},744:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(2340);var s=n(5802),o=n(5577),a=n(8040);function c(e){const{permalink:t,title:n,subLabel:c,isNext:i}=e;return(0,a.jsxs)(o.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[c&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:c}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},6195:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(2340);var s=n(5802),o=n(5577);const a={tag:"tag_jhT7",tagRegular:"tagRegular_pZRu",tagWithCount:"tagWithCount_M9kR"};var c=n(8040);function i(e){let{permalink:t,label:n,count:i}=e;return(0,c.jsxs)(o.A,{href:t,className:(0,s.A)(a.tag,i?a.tagWithCount:a.tagRegular),children:[n,i&&(0,c.jsx)("span",{children:i})]})}},351:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(2340);var s=n(5802),o=n(6726),a=n(6195);const c={tags:"tags_Q1w9",tag:"tag_pe7_"};var i=n(8040);function r(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(o.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,i.jsx)("li",{className:c.tag,children:(0,i.jsx)(a.A,{label:t,permalink:n})},n)}))})]})}},5246:(e,t,n)=>{"use strict";n.d(t,{R:()=>c,x:()=>i});var s=n(2340);const o={},a=s.createContext(o);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);