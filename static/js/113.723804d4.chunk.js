(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[113],{1316:function(e,t,a){"use strict";a.d(t,"a",(function(){return M}));var n=a(17),r=a(159),c=a(1301),i=a(1291),s=a(1287),o=a(1293),l=a(1278),u=a(6),m=a(1),d=a(8),j=a(119),f=a(91),x=a.n(f),h=a(467),b=a(196),p=a(87),O=a(1319),w=a(48),v=a(14),y=a(1259),g=a(0),N=["children","name"];function T(e){var t=e.children,a=e.document,n=Object(w.a)();m.useEffect((function(){a.body.dir=n.direction}),[a,n.direction]);var r=m.useMemo((function(){return Object(b.a)({key:"iframe-demo-".concat(n.direction),prepend:!0,container:a.head,stylisPlugins:"rtl"===n.direction?[h.a]:[]})}),[a,n.direction]),c=m.useCallback((function(){return a.defaultView}),[a]);return Object(g.jsx)(O.a,{target:a.head,stylisPlugins:"rtl"===n.direction?[h.a]:[],children:Object(g.jsxs)(p.a,{value:r,children:[Object(g.jsx)(y.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),m.cloneElement(t,{window:c})]})})}var z=Object(v.a)("iframe")((function(e){var t=e.theme;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function A(e){var t,a=e.children,r=e.name,c=Object(j.a)(e,N),i="".concat(r," demo"),s=m.useRef(null),o=m.useReducer((function(){return!0}),!1),l=Object(n.a)(o,2),u=l[0],f=l[1];m.useEffect((function(){var e=s.current.contentDocument;null==e||"complete"!==e.readyState||u||f()}),[u]);var h=null===(t=s.current)||void 0===t?void 0:t.contentDocument;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(z,Object(d.a)({onLoad:f,ref:s,title:i},c)),!1!==u?x.a.createPortal(Object(g.jsx)(T,{document:h,children:a}),h.body):null]})}var R=m.memo(A);function k(e){var t=Object(m.useState)(e.currentTabIndex),a=Object(n.a)(t,2),d=a[0],j=a[1],f=e.component,x=e.raw,h=e.iframe,b=e.className;return Object(g.jsxs)(i.a,{className:Object(u.default)(b,"shadow"),children:[Object(g.jsx)(c.a,{position:"static",color:"default",className:"shadow-0",children:Object(g.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,t){j(t)},children:[f&&Object(g.jsx)(o.a,{classes:{root:"min-w-64"},icon:Object(g.jsx)(s.a,{children:"remove_red_eye"})}),x&&Object(g.jsx)(o.a,{classes:{root:"min-w-64"},icon:Object(g.jsx)(s.a,{children:"code"})})]})}),Object(g.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(g.jsx)("div",{className:0===d?"flex flex-1 max-w-full":"hidden",children:f&&(h?Object(g.jsx)(R,{children:Object(g.jsx)(f,{})}):Object(g.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(g.jsx)(f,{})}))}),Object(g.jsx)("div",{className:1===d?"flex flex-1":"hidden",children:x&&Object(g.jsx)("div",{className:"flex flex-1",children:Object(g.jsx)(r.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:x.default})})})]})]})}k.defaultProps={currentTabIndex:0};var M=k},2833:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a(1);var n=a(1260),r=a(0);function c(){return Object(r.jsx)(n.a,{"aria-label":"empty textarea",placeholder:"Empty",style:{width:200}})}},2834:function(e,t,a){"use strict";a.r(t),t.default="import * as React from 'react';\nimport TextareaAutosize from '@mui/material/TextareaAutosize';\n\nexport default function EmptyTextarea() {\n  return (\n    <TextareaAutosize\n      aria-label=\"empty textarea\"\n      placeholder=\"Empty\"\n      style={{ width: 200 }}\n    />\n  );\n}\n"},2835:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a(1);var n=a(1260),r=a(0);function c(){return Object(r.jsx)(n.a,{"aria-label":"minimum height",minRows:3,placeholder:"Minimum 3 rows",style:{width:200}})}},2836:function(e,t,a){"use strict";a.r(t),t.default="import * as React from 'react';\nimport TextareaAutosize from '@mui/material/TextareaAutosize';\n\nexport default function MinHeightTextarea() {\n  return (\n    <TextareaAutosize\n      aria-label=\"minimum height\"\n      minRows={3}\n      placeholder=\"Minimum 3 rows\"\n      style={{ width: 200 }}\n    />\n  );\n}\n"},2837:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a(1);var n=a(1260),r=a(0);function c(){return Object(r.jsx)(n.a,{maxRows:4,"aria-label":"maximum height",placeholder:"Maximum 4 rows",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",style:{width:200}})}},2838:function(e,t,a){"use strict";a.r(t),t.default='import * as React from \'react\';\nimport TextareaAutosize from \'@mui/material/TextareaAutosize\';\n\nexport default function MaxHeightTextarea() {\n  return (\n    <TextareaAutosize\n      maxRows={4}\n      aria-label="maximum height"\n      placeholder="Maximum 4 rows"\n      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n          ut labore et dolore magna aliqua."\n      style={{ width: 200 }}\n    />\n  );\n}\n'},3162:function(e,t,a){"use strict";a.r(t);var n=a(1316),r=a(1290),c=a(1287),i=a(366),s=a(0);t.default=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(r.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/textarea-autosize",target:"_blank",role:"button",children:[Object(s.jsx)(c.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(i.a,{className:"text-40 my-16 font-700",component:"h1",children:"Textarea Autosize"}),Object(s.jsx)(i.a,{className:"description",children:"A textarea component for React which grows with content."}),Object(s.jsx)("ul",{children:Object(s.jsxs)("li",{children:["\ud83d\udce6 ",Object(s.jsx)("a",{href:"/size-snapshot",children:"2.1 kB gzipped"})]})}),Object(s.jsxs)(i.a,{className:"mb-40",component:"div",children:["The ",Object(s.jsx)("code",{children:"TextareaAutosize"})," component automatically adjust the textarea height on keyboard and window resize events."]}),Object(s.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Empty"}),Object(s.jsx)(i.a,{className:"mb-40",component:"div",children:Object(s.jsx)(n.a,{className:"my-24",iframe:!1,component:a(2833).default,raw:a(2834)})}),Object(s.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Minimum height"}),Object(s.jsx)(i.a,{className:"mb-40",component:"div",children:Object(s.jsx)(n.a,{className:"my-24",iframe:!1,component:a(2835).default,raw:a(2836)})}),Object(s.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Maximum height"}),Object(s.jsx)(i.a,{className:"mb-40",component:"div",children:Object(s.jsx)(n.a,{className:"my-24",iframe:!1,component:a(2837).default,raw:a(2838)})})]})}}}]);