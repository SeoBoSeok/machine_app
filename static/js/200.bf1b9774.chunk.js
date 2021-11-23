(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[200],{3112:function(e,t,n){"use strict";n.r(t);var s=n(159),o=n(1290),c=n(1287),a=n(366),i=n(0);t.default=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(i.jsxs)(o.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/css-baseline",target:"_blank",role:"button",children:[Object(i.jsx)(c.a,{children:"link"}),Object(i.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(i.jsx)(a.a,{className:"text-40 my-16 font-700",component:"h1",children:"CSS Baseline"}),Object(i.jsx)(a.a,{className:"description",children:"MUI provides a CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon."}),Object(i.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Global reset"}),Object(i.jsxs)(a.a,{className:"mb-40",component:"div",children:["You might be familiar with"," ",Object(i.jsx)("a",{href:"https://github.com/necolas/normalize.css",children:"normalize.css"}),", a collection of HTML element and attribute style-normalizations."]}),Object(i.jsx)(s.a,{component:"pre",className:"language-jsx",children:" \nimport * as React from 'react';\nimport CssBaseline from '@mui/material/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n"}),Object(i.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Scoping on children"}),Object(i.jsxs)(a.a,{className:"mb-40",component:"div",children:["However, you might be progressively migrating a website to MUI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the"," ",Object(i.jsx)("code",{children:"ScopedCssBaseline"})," component."]}),Object(i.jsx)(s.a,{component:"pre",className:"language-jsx",children:" \nimport * as React from 'react';\nimport ScopedCssBaseline from '@mui/material/ScopedCssBaseline';\nimport MyApp from './MyApp';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n      <MyApp />\n    </ScopedCssBaseline>\n  );\n}\n"}),Object(i.jsxs)(a.a,{className:"mb-40",component:"div",children:["\u26a0\ufe0f Make sure you import ",Object(i.jsx)("code",{children:"ScopedCssBaseline"})," first to avoid box-sizing conflicts as in the above example."]}),Object(i.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Approach"}),Object(i.jsx)(a.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Page"}),Object(i.jsxs)(a.a,{className:"mb-40",component:"div",children:["The ",Object(i.jsx)("code",{children:"<html>"})," and ",Object(i.jsx)("code",{children:"<body>"})," elements are updated to provide better page-wide defaults. More specifically:"]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"The margin in all browsers is removed."}),Object(i.jsxs)("li",{children:["The default Material Design background color is applied. It's using"," ",Object(i.jsx)("a",{href:"/customization/default-theme/?expand-path=$.palette.background",children:Object(i.jsx)("code",{children:"theme.palette.background.default"})})," ","for standard devices and a white background for print devices."]})]}),Object(i.jsx)(a.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Layout"}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("code",{children:"box-sizing"})," is set globally on the ",Object(i.jsx)("code",{children:"<html>"})," element to"," ",Object(i.jsx)("code",{children:"border-box"}),". Every element\u2014including ",Object(i.jsx)("code",{children:"*::before"})," and"," ",Object(i.jsx)("code",{children:"*::after"})," are declared to inherit this property, which ensures that the declared width of the element is never exceeded due to padding or border."]})}),Object(i.jsx)(a.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Scrollbars"}),Object(i.jsx)(a.a,{className:"mb-40",component:"div",children:"The colors of the scrollbars can be customized to improve the contrast (especially on Windows). Add this code to your theme (for dark mode)."}),Object(i.jsx)(s.a,{component:"pre",className:"language-jsx",children:" \nimport darkScrollbar from '@mui/material/darkScrollbar';\n\nconst theme = createTheme({\n  components: {\n    MuiCssBaseline: {\n      styleOverrides: {\n        body: theme.palette.mode === 'dark' ? darkScrollbar() : null,\n      },\n    },\n  },\n});\n"}),Object(i.jsxs)(a.a,{className:"mb-40",component:"div",children:["This website uses ",Object(i.jsx)("code",{children:"darkScrollbar"})," when dark mode is enabled. Be aware, however, that using this utility (and customizing ",Object(i.jsx)("code",{children:"-webkit-scrollbar"}),") forces MacOS to always show the scrollbar."]}),Object(i.jsx)(a.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Typography"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["No base font-size is declared on the ",Object(i.jsx)("code",{children:"<html>"}),", but 16px is assumed (the browser default). You can learn more about the implications of changing the"," ",Object(i.jsx)("code",{children:"<html>"})," default font size in"," ",Object(i.jsx)("a",{href:"/customization/typography/#typography-html-font-size",children:"the theme documentation"})," ","page."]}),Object(i.jsxs)("li",{children:["Set the ",Object(i.jsx)("code",{children:"theme.typography.body1"})," style on the ",Object(i.jsx)("code",{children:"<body>"})," element."]}),Object(i.jsxs)("li",{children:["Set the font-weight to ",Object(i.jsx)("code",{children:"theme.typography.fontWeightBold"})," for the"," ",Object(i.jsx)("code",{children:"<b>"})," and ",Object(i.jsx)("code",{children:"<strong>"})," elements."]}),Object(i.jsx)("li",{children:"Custom font-smoothing is enabled for better display of the Roboto font."})]}),Object(i.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),Object(i.jsxs)(a.a,{className:"mb-40",component:"div",children:["Head to the"," ",Object(i.jsx)("a",{href:"/customization/how-to-customize/#5-global-css-override",children:"global customization"})," ","section of the documentation to change the output of these components."]})]})}}}]);