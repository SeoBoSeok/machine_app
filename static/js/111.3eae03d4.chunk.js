(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[111],{1316:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var c=n(17),a=n(159),s=n(1301),r=n(1291),o=n(1287),i=n(1293),l=n(1278),d=n(6),j=n(1),m=n(8),h=n(119),x=n(91),b=n.n(x),u=n(467),p=n(196),f=n(87),O=n(1319),y=n(48),v=n(14),g=n(1259),N=n(0),w=["children","name"];function B(e){var t=e.children,n=e.document,c=Object(y.a)();j.useEffect((function(){n.body.dir=c.direction}),[n,c.direction]);var a=j.useMemo((function(){return Object(p.a)({key:"iframe-demo-".concat(c.direction),prepend:!0,container:n.head,stylisPlugins:"rtl"===c.direction?[u.a]:[]})}),[n,c.direction]),s=j.useCallback((function(){return n.defaultView}),[n]);return Object(N.jsx)(O.a,{target:n.head,stylisPlugins:"rtl"===c.direction?[u.a]:[],children:Object(N.jsxs)(f.a,{value:a,children:[Object(N.jsx)(g.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),j.cloneElement(t,{window:s})]})})}var S=Object(v.a)("iframe")((function(e){var t=e.theme;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function k(e){var t,n=e.children,a=e.name,s=Object(h.a)(e,w),r="".concat(a," demo"),o=j.useRef(null),i=j.useReducer((function(){return!0}),!1),l=Object(c.a)(i,2),d=l[0],x=l[1];j.useEffect((function(){var e=o.current.contentDocument;null==e||"complete"!==e.readyState||d||x()}),[d]);var u=null===(t=o.current)||void 0===t?void 0:t.contentDocument;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(S,Object(m.a)({onLoad:x,ref:o,title:r},s)),!1!==d?b.a.createPortal(Object(N.jsx)(B,{document:u,children:n}),u.body):null]})}var C=j.memo(k);function T(e){var t=Object(j.useState)(e.currentTabIndex),n=Object(c.a)(t,2),m=n[0],h=n[1],x=e.component,b=e.raw,u=e.iframe,p=e.className;return Object(N.jsxs)(r.a,{className:Object(d.default)(p,"shadow"),children:[Object(N.jsx)(s.a,{position:"static",color:"default",className:"shadow-0",children:Object(N.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){h(t)},children:[x&&Object(N.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(N.jsx)(o.a,{children:"remove_red_eye"})}),b&&Object(N.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(N.jsx)(o.a,{children:"code"})})]})}),Object(N.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(N.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:x&&(u?Object(N.jsx)(C,{children:Object(N.jsx)(x,{})}):Object(N.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(N.jsx)(x,{})}))}),Object(N.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:b&&Object(N.jsx)("div",{className:"flex flex-1",children:Object(N.jsx)(a.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:b.default})})})]})]})}T.defaultProps={currentTabIndex:0};var M=T},1320:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(2),a=n(13),s=n(1),r=(n(12),n(6)),o=n(368),i=n(1253),l=n(1257),d=n(245),j=n(0),m=["className","component"];function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(o.a)("div")(i.a),h=s.forwardRef((function(e,s){var o=Object(d.a)(t),i=Object(l.a)(e),h=i.className,x=i.component,b=void 0===x?"div":x,u=Object(a.a)(i,m);return Object(j.jsx)(n,Object(c.a)({as:b,ref:s,className:Object(r.default)(h,"MuiBox-root"),theme:o},u))}));return h}},1321:function(e,t,n){"use strict";var c=n(1320),a=n(667),s=Object(a.a)(),r=Object(c.a)({defaultTheme:s});t.a=r},1980:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(1);var c=n(1321),a=n(0);function s(){return Object(a.jsx)(c.a,{sx:{width:300,height:300,backgroundColor:"primary.dark","&:hover":{backgroundColor:"primary.main",opacity:[.9,.8,.7]}}})}},1981:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\n\nexport default function BoxSx() {\n  return (\n    <Box\n      sx={{\n        width: 300,\n        height: 300,\n        backgroundColor: 'primary.dark',\n        '&:hover': {\n          backgroundColor: 'primary.main',\n          opacity: [0.9, 0.8, 0.7],\n        },\n      }}\n    />\n  );\n}\n"},1982:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n(1);var c=n(1321),a=n(1290),s=n(0);function r(){return Object(s.jsx)(c.a,{component:"span",sx:{p:2,border:"1px dashed grey"},children:Object(s.jsx)(a.a,{children:"Save"})})}},1983:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Button from '@mui/material/Button';\n\nexport default function BoxComponent() {\n  return (\n    <Box component=\"span\" sx={{ p: 2, border: '1px dashed grey' }}>\n      <Button>Save</Button>\n    </Box>\n  );\n}\n"},3102:function(e,t,n){"use strict";n.r(t);var c=n(1316),a=n(159),s=n(1290),r=n(1287),o=n(366),i=n(0);t.default=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(i.jsxs)(s.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/box",target:"_blank",role:"button",children:[Object(i.jsx)(r.a,{children:"link"}),Object(i.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(i.jsx)(o.a,{className:"text-40 my-16 font-700",component:"h1",children:"Box"}),Object(i.jsx)(o.a,{className:"description",children:"The Box component serves as a wrapper component for most of the CSS utility needs."}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:["The Box component packages"," ",Object(i.jsx)("a",{href:"/system/basics/#all-inclusive",children:"all the style functions"})," that are exposed in"," ",Object(i.jsx)("code",{children:"@mui/system"}),"."]}),Object(i.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Example"}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:[Object(i.jsx)("a",{href:"/system/palette/",children:"The palette"})," style function."]}),Object(i.jsxs)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:["The ",Object(i.jsx)("code",{children:"sx"})," prop"]}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:["All system properties are available via the"," ",Object(i.jsxs)("a",{href:"/system/basics/#the-sx-prop",children:[Object(i.jsx)("code",{children:"sx"})," prop"]}),". In addition, the ",Object(i.jsx)("code",{children:"sx"})," prop allows you to specify any other CSS rules you may need. Here's an example of how you can use it:"]}),Object(i.jsx)(o.a,{className:"mb-40",component:"div",children:Object(i.jsx)(c.a,{className:"my-24",iframe:!1,component:n(1980).default,raw:n(1981)})}),Object(i.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Overriding MUI components"}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:["The Box component wraps your component. It creates a new DOM element, a"," ",Object(i.jsx)("code",{children:"<div>"})," that by default can be changed with the ",Object(i.jsx)("code",{children:"component"})," prop. Let's say you want to use a ",Object(i.jsx)("code",{children:"<span>"})," instead:"]}),Object(i.jsx)(o.a,{className:"mb-40",component:"div",children:Object(i.jsx)(c.a,{className:"my-24",iframe:!1,component:n(1982).default,raw:n(1983)})}),Object(i.jsx)(o.a,{className:"mb-40",component:"div",children:"This works great when the changes can be isolated to a new DOM element. For instance, you can change the margin this way."}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:["However, sometimes you have to target the underlying DOM element. As an example, you may want to change the border of the Button. The Button component defines its own styles. CSS inheritance doesn't help. To workaround the problem, you can use the"," ",Object(i.jsx)("a",{href:"/system/basics/#the-sx-prop",children:Object(i.jsx)("code",{children:"sx"})})," ","prop directly on the child if it is a MUI component."]}),Object(i.jsx)(a.a,{component:"pre",className:"language-diff",children:" \n-<Box sx={{ border: '1px dashed grey' }}>\n-  <Button>Save</Button>\n-</Box>\n+<Button sx={{ border: '1px dashed grey' }}>Save</Button>\n"}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:["For non-MUI components, use the ",Object(i.jsx)("code",{children:"component"})," prop."]}),Object(i.jsx)(a.a,{component:"pre",className:"language-diff",children:" \n-<Box sx={{ border: '1px dashed grey' }}>\n-  <button>Save</button>\n-</Box>\n+<Box component=\"button\" sx={{ border: '1px dashed grey' }}>Save</Box>\n"}),Object(i.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"API"}),Object(i.jsx)(a.a,{component:"pre",className:"language-jsx",children:" \nimport Box from '@mui/material/Box';\n"}),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{align:"left",children:"Name"}),Object(i.jsx)("th",{align:"left",children:"Type"}),Object(i.jsx)("th",{align:"left",children:"Default"}),Object(i.jsx)("th",{align:"left",children:"Description"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-name",children:"children"})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsxs)("span",{className:"prop-type",children:["node",Object(i.jsx)("br",{})]})}),Object(i.jsx)("td",{align:"left"}),Object(i.jsx)("td",{align:"left",children:"Box render function or node."})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-name",children:"component"})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsxs)("span",{className:"prop-type",children:["union:\xa0string\xa0|",Object(i.jsx)("br",{}),"\xa0func\xa0|",Object(i.jsx)("br",{}),"\xa0object",Object(i.jsx)("br",{})]})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-default",children:"'div'"})}),Object(i.jsx)("td",{align:"left",children:"The component used for the root node. Either a string to use a DOM element or a component."})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-name",children:"sx"})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-type",children:"object"})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-default"})}),Object(i.jsx)("td",{align:"left",children:"Accepts all system properties, as well as any valid CSS properties."})]})]})]}),Object(i.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"System props"}),Object(i.jsxs)(o.a,{className:"mb-40",component:"div",children:["As a CSS utility component, the ",Object(i.jsx)("code",{children:"Box"})," also supports all"," ",Object(i.jsx)("a",{href:"/system/properties/",children:Object(i.jsx)("code",{children:"system"})})," ","properties. You can use them as prop directly on the component. For instance, a margin-top:"]}),Object(i.jsx)(a.a,{component:"pre",className:"language-jsx",children:" \n<Box mt={2}>\n"})]})}}}]);