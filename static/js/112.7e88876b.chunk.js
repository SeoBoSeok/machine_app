(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[112],{1316:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var r=n(17),c=n(159),s=n(1301),a=n(1291),o=n(1287),i=n(1293),l=n(1278),d=n(6),u=n(1),j=n(8),m=n(119),f=n(91),b=n.n(f),x=n(467),h=n(196),p=n(87),O=n(1319),v=n(48),y=n(14),N=n(1259),g=n(0),S=["children","name"];function w(e){var t=e.children,n=e.document,r=Object(v.a)();u.useEffect((function(){n.body.dir=r.direction}),[n,r.direction]);var c=u.useMemo((function(){return Object(h.a)({key:"iframe-demo-".concat(r.direction),prepend:!0,container:n.head,stylisPlugins:"rtl"===r.direction?[x.a]:[]})}),[n,r.direction]),s=u.useCallback((function(){return n.defaultView}),[n]);return Object(g.jsx)(O.a,{target:n.head,stylisPlugins:"rtl"===r.direction?[x.a]:[],children:Object(g.jsxs)(p.a,{value:c,children:[Object(g.jsx)(N.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),u.cloneElement(t,{window:s})]})})}var R=Object(y.a)("iframe")((function(e){var t=e.theme;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function k(e){var t,n=e.children,c=e.name,s=Object(m.a)(e,S),a="".concat(c," demo"),o=u.useRef(null),i=u.useReducer((function(){return!0}),!1),l=Object(r.a)(i,2),d=l[0],f=l[1];u.useEffect((function(){var e=o.current.contentDocument;null==e||"complete"!==e.readyState||d||f()}),[d]);var x=null===(t=o.current)||void 0===t?void 0:t.contentDocument;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(R,Object(j.a)({onLoad:f,ref:o,title:a},s)),!1!==d?b.a.createPortal(Object(g.jsx)(w,{document:x,children:n}),x.body):null]})}var B=u.memo(k);function C(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(r.a)(t,2),j=n[0],m=n[1],f=e.component,b=e.raw,x=e.iframe,h=e.className;return Object(g.jsxs)(a.a,{className:Object(d.default)(h,"shadow"),children:[Object(g.jsx)(s.a,{position:"static",color:"default",className:"shadow-0",children:Object(g.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:j,onChange:function(e,t){m(t)},children:[f&&Object(g.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(g.jsx)(o.a,{children:"remove_red_eye"})}),b&&Object(g.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(g.jsx)(o.a,{children:"code"})})]})}),Object(g.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(g.jsx)("div",{className:0===j?"flex flex-1 max-w-full":"hidden",children:f&&(x?Object(g.jsx)(B,{children:Object(g.jsx)(f,{})}):Object(g.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(g.jsx)(f,{})}))}),Object(g.jsx)("div",{className:1===j?"flex flex-1":"hidden",children:b&&Object(g.jsx)("div",{className:"flex flex-1",children:Object(g.jsx)(c.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:b.default})})})]})]})}C.defaultProps={currentTabIndex:0};var T=C},1320:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(2),c=n(13),s=n(1),a=(n(12),n(6)),o=n(368),i=n(1253),l=n(1257),d=n(245),u=n(0),j=["className","component"];function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(o.a)("div")(i.a),m=s.forwardRef((function(e,s){var o=Object(d.a)(t),i=Object(l.a)(e),m=i.className,f=i.component,b=void 0===f?"div":f,x=Object(c.a)(i,j);return Object(u.jsx)(n,Object(r.a)({as:b,ref:s,className:Object(a.default)(m,"MuiBox-root"),theme:o},x))}));return m}},1321:function(e,t,n){"use strict";var r=n(1320),c=n(667),s=Object(c.a)(),a=Object(r.a)({defaultTheme:s});t.a=a},2413:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(1);var r=n(1270),c=n(1321),s=n(0);function a(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(c.a,{sx:{p:2,bgcolor:"primary.main",color:"primary.contrastText"},children:"Server and Client"}),Object(s.jsx)(r.a,{children:Object(s.jsx)(c.a,{sx:{p:2,bgcolor:"secondary.main",color:"secondary.contrastText"},children:"Client only"})})]})}},2414:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport NoSsr from '@mui/material/NoSsr';\nimport Box from '@mui/material/Box';\n\nexport default function SimpleNoSsr() {\n  return (\n    <div>\n      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>\n        Server and Client\n      </Box>\n      <NoSsr>\n        <Box\n          sx={{ p: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText' }}\n        >\n          Client only\n        </Box>\n      </NoSsr>\n    </div>\n  );\n}\n"},2415:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(17),c=n(1),s=n(1321),a=n(1270),o=n(0);function i(){return Array.from(new Array(5e3)).map((function(e,t){return Object(o.jsx)("span",{children:"."},t)}))}function l(){var e=c.useState({open:!1,defer:!1}),t=Object(r.a)(e,2),n=t[0],l=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"button",onClick:function(){return l({open:!n.open,defer:!1})},children:'Render NoSsr defer="false"'}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"button",onClick:function(){return l({open:!n.open,defer:!0})},children:'Render NoSsr defer="true"'}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(s.a,{sx:{width:300,display:"flex",flexWrap:"wrap"},children:n.open?Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("div",{children:"Outside NoSsr"}),Object(o.jsxs)(a.a,{defer:n.defer,children:[".....Inside NoSsr",Object(o.jsx)(i,{})]})]}):null})]})}},2416:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport NoSsr from '@mui/material/NoSsr';\n\nfunction LargeTree() {\n  return Array.from(new Array(5000)).map((_, index) => <span key={index}>.</span>);\n}\n\nexport default function FrameDeferring() {\n  const [state, setState] = React.useState({\n    open: false,\n    defer: false,\n  });\n\n  return (\n    <div>\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: false,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"false\"'}\n      </button>\n      <br />\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: true,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"true\"'}\n      </button>\n      <br />\n      <br />\n      <Box sx={{ width: 300, display: 'flex', flexWrap: 'wrap' }}>\n        {state.open ? (\n          <React.Fragment>\n            <div>Outside NoSsr</div>\n            <NoSsr defer={state.defer}>\n              .....Inside NoSsr\n              <LargeTree />\n            </NoSsr>\n          </React.Fragment>\n        ) : null}\n      </Box>\n    </div>\n  );\n}\n"},3135:function(e,t,n){"use strict";n.r(t);var r=n(1316),c=n(159),s=n(1290),a=n(1287),o=n(366),i=n(0);t.default=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(i.jsxs)(s.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/no-ssr",target:"_blank",role:"button",children:[Object(i.jsx)(a.a,{children:"link"}),Object(i.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(i.jsx)(o.a,{className:"text-40 my-16 font-700",component:"h1",children:"No SSR"}),Object(i.jsx)(o.a,{className:"description",children:"NoSsr purposely removes components from the subject of Server Side Rendering (SSR)."}),Object(i.jsx)(o.a,{className:"mb-40",component:"div",children:"This component can be useful in a variety of situations:"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Escape hatch for broken dependencies not supporting SSR."}),Object(i.jsx)("li",{children:"Improve the time-to-first paint on the client by only rendering above the fold."}),Object(i.jsx)("li",{children:"Reduce the rendering time on the server."}),Object(i.jsx)("li",{children:"Under too heavy server load, you can turn on service degradation."}),Object(i.jsxs)("li",{children:["Improve the time-to-interactive by only rendering what's important (with the"," ",Object(i.jsx)("code",{children:"defer"})," property)."]})]}),Object(i.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Client-side deferring"}),Object(i.jsx)(o.a,{className:"mb-40",component:"div",children:Object(i.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2413).default,raw:n(2414)})}),Object(i.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Frame deferring"}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:["At its core, the NoSsr component's purpose is to ",Object(i.jsx)("strong",{children:"defer rendering"}),". As it's illustrated in the previous demo, you can use it to defer the rendering from the server to the client."]}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:["But you can also use it to defer the rendering within the client itself. You can"," ",Object(i.jsx)("strong",{children:"wait a screen frame"})," with the ",Object(i.jsx)("code",{children:"defer"})," property to render the children. React does"," ",Object(i.jsx)("a",{href:"https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects",children:"2 commits"})," ","instead of 1."]}),Object(i.jsx)(o.a,{className:"mb-40",component:"div",children:Object(i.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2415).default,raw:n(2416)})}),Object(i.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Unstyled"}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:["\ud83d\udce6 ",Object(i.jsx)("a",{href:"https://bundlephobia.com/result?p=@mui/core@latest",children:"784 B gzipped"})]})}),Object(i.jsx)(o.a,{className:"mb-40",component:"div",children:"As the component does not have any styles, it also comes with the unstyled package."}),Object(i.jsx)(c.a,{component:"pre",className:"language-js",children:" \nimport NoSsr from '@mui/core/NoSsr';\n"})]})}}}]);