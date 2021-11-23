(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[71],{1316:function(e,n,t){"use strict";t.d(n,"a",(function(){return N}));var a=t(17),o=t(159),l=t(1301),i=t(1291),r=t(1287),c=t(1293),s=t(1278),u=t(6),m=t(1),g=t(8),d=t(119),b=t(91),j=t.n(b),f=t(467),h=t(196),p=t(87),x=t(1319),v=t(48),O=t(14),T=t(1259),B=t(0),w=["children","name"];function A(e){var n=e.children,t=e.document,a=Object(v.a)();m.useEffect((function(){t.body.dir=a.direction}),[t,a.direction]);var o=m.useMemo((function(){return Object(h.a)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===a.direction?[f.a]:[]})}),[t,a.direction]),l=m.useCallback((function(){return t.defaultView}),[t]);return Object(B.jsx)(x.a,{target:t.head,stylisPlugins:"rtl"===a.direction?[f.a]:[],children:Object(B.jsxs)(p.a,{value:o,children:[Object(B.jsx)(T.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),m.cloneElement(n,{window:l})]})})}var F=Object(O.a)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function y(e){var n,t=e.children,o=e.name,l=Object(d.a)(e,w),i="".concat(o," demo"),r=m.useRef(null),c=m.useReducer((function(){return!0}),!1),s=Object(a.a)(c,2),u=s[0],b=s[1];m.useEffect((function(){var e=r.current.contentDocument;null==e||"complete"!==e.readyState||u||b()}),[u]);var f=null===(n=r.current)||void 0===n?void 0:n.contentDocument;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(F,Object(g.a)({onLoad:b,ref:r,title:i},l)),!1!==u?j.a.createPortal(Object(B.jsx)(A,{document:f,children:t}),f.body):null]})}var I=m.memo(y);function C(e){var n=Object(m.useState)(e.currentTabIndex),t=Object(a.a)(n,2),g=t[0],d=t[1],b=e.component,j=e.raw,f=e.iframe,h=e.className;return Object(B.jsxs)(i.a,{className:Object(u.default)(h,"shadow"),children:[Object(B.jsx)(l.a,{position:"static",color:"default",className:"shadow-0",children:Object(B.jsxs)(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:g,onChange:function(e,n){d(n)},children:[b&&Object(B.jsx)(c.a,{classes:{root:"min-w-64"},icon:Object(B.jsx)(r.a,{children:"remove_red_eye"})}),j&&Object(B.jsx)(c.a,{classes:{root:"min-w-64"},icon:Object(B.jsx)(r.a,{children:"code"})})]})}),Object(B.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(B.jsx)("div",{className:0===g?"flex flex-1 max-w-full":"hidden",children:b&&(f?Object(B.jsx)(I,{children:Object(B.jsx)(b,{})}):Object(B.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(B.jsx)(b,{})}))}),Object(B.jsx)("div",{className:1===g?"flex flex-1":"hidden",children:j&&Object(B.jsx)("div",{className:"flex flex-1",children:Object(B.jsx)(o.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:j.default})})})]})]})}C.defaultProps={currentTabIndex:0};var N=C},2875:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var a=t(17),o=t(1),l=t(1423),i=t.n(l),r=t(1424),c=t.n(r),s=t(1425),u=t.n(s),m=t(1582),g=t.n(m),d=t(3030),b=t(3019),j=t(0);function f(){var e=o.useState("left"),n=Object(a.a)(e,2),t=n[0],l=n[1];return Object(j.jsxs)(b.a,{value:t,exclusive:!0,onChange:function(e,n){l(n)},"aria-label":"text alignment",children:[Object(j.jsx)(d.a,{value:"left","aria-label":"left aligned",children:Object(j.jsx)(i.a,{})}),Object(j.jsx)(d.a,{value:"center","aria-label":"centered",children:Object(j.jsx)(c.a,{})}),Object(j.jsx)(d.a,{value:"right","aria-label":"right aligned",children:Object(j.jsx)(u.a,{})}),Object(j.jsx)(d.a,{value:"justify","aria-label":"justified",disabled:!0,children:Object(j.jsx)(g.a,{})})]})}},2876:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport FormatAlignLeftIcon from \'@mui/icons-material/FormatAlignLeft\';\nimport FormatAlignCenterIcon from \'@mui/icons-material/FormatAlignCenter\';\nimport FormatAlignRightIcon from \'@mui/icons-material/FormatAlignRight\';\nimport FormatAlignJustifyIcon from \'@mui/icons-material/FormatAlignJustify\';\nimport ToggleButton from \'@mui/material/ToggleButton\';\nimport ToggleButtonGroup from \'@mui/material/ToggleButtonGroup\';\n\nexport default function ToggleButtons() {\n  const [alignment, setAlignment] = React.useState(\'left\');\n\n  const handleAlignment = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  return (\n    <ToggleButtonGroup\n      value={alignment}\n      exclusive\n      onChange={handleAlignment}\n      aria-label="text alignment"\n    >\n      <ToggleButton value="left" aria-label="left aligned">\n        <FormatAlignLeftIcon />\n      </ToggleButton>\n      <ToggleButton value="center" aria-label="centered">\n        <FormatAlignCenterIcon />\n      </ToggleButton>\n      <ToggleButton value="right" aria-label="right aligned">\n        <FormatAlignRightIcon />\n      </ToggleButton>\n      <ToggleButton value="justify" aria-label="justified" disabled>\n        <FormatAlignJustifyIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n'},2877:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t(17),o=t(1),l=t(1472),i=t.n(l),r=t(1473),c=t.n(r),s=t(1673),u=t.n(s),m=t(1674),g=t.n(m),d=t(1446),b=t.n(d),j=t(3030),f=t(3019),h=t(0);function p(){var e=o.useState((function(){return["bold","italic"]})),n=Object(a.a)(e,2),t=n[0],l=n[1];return Object(h.jsxs)(f.a,{value:t,onChange:function(e,n){l(n)},"aria-label":"text formatting",children:[Object(h.jsx)(j.a,{value:"bold","aria-label":"bold",children:Object(h.jsx)(i.a,{})}),Object(h.jsx)(j.a,{value:"italic","aria-label":"italic",children:Object(h.jsx)(c.a,{})}),Object(h.jsx)(j.a,{value:"underlined","aria-label":"underlined",children:Object(h.jsx)(u.a,{})}),Object(h.jsxs)(j.a,{value:"color","aria-label":"color",disabled:!0,children:[Object(h.jsx)(g.a,{}),Object(h.jsx)(b.a,{})]})]})}},2878:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport FormatBoldIcon from '@mui/icons-material/FormatBold';\nimport FormatItalicIcon from '@mui/icons-material/FormatItalic';\nimport FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';\nimport FormatColorFillIcon from '@mui/icons-material/FormatColorFill';\nimport ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';\nimport ToggleButton from '@mui/material/ToggleButton';\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\n\nexport default function ToggleButtonsMultiple() {\n  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);\n\n  const handleFormat = (event, newFormats) => {\n    setFormats(newFormats);\n  };\n\n  return (\n    <ToggleButtonGroup\n      value={formats}\n      onChange={handleFormat}\n      aria-label=\"text formatting\"\n    >\n      <ToggleButton value=\"bold\" aria-label=\"bold\">\n        <FormatBoldIcon />\n      </ToggleButton>\n      <ToggleButton value=\"italic\" aria-label=\"italic\">\n        <FormatItalicIcon />\n      </ToggleButton>\n      <ToggleButton value=\"underlined\" aria-label=\"underlined\">\n        <FormatUnderlinedIcon />\n      </ToggleButton>\n      <ToggleButton value=\"color\" aria-label=\"color\" disabled>\n        <FormatColorFillIcon />\n        <ArrowDropDownIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n"},2879:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t(8),o=t(17),l=t(1),i=t(1423),r=t.n(i),c=t(1424),s=t.n(c),u=t(1425),m=t.n(u),g=t(1582),d=t.n(g),b=t(1321),j=t(3030),f=t(3019),h=t(0);function p(){var e=l.useState("left"),n=Object(o.a)(e,2),t=n[0],i=n[1],c=[Object(h.jsx)(j.a,{value:"left",children:Object(h.jsx)(r.a,{})},"left"),Object(h.jsx)(j.a,{value:"center",children:Object(h.jsx)(s.a,{})},"center"),Object(h.jsx)(j.a,{value:"right",children:Object(h.jsx)(m.a,{})},"right"),Object(h.jsx)(j.a,{value:"justify",children:Object(h.jsx)(d.a,{})},"justify")],u={value:t,onChange:function(e,n){i(n)},exclusive:!0};return Object(h.jsxs)(b.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > :not(style) + :not(style)":{mt:2}},children:[Object(h.jsx)(f.a,Object(a.a)(Object(a.a)({size:"small"},u),{},{children:c})),Object(h.jsx)(f.a,Object(a.a)(Object(a.a)({},u),{},{children:c})),Object(h.jsx)(f.a,Object(a.a)(Object(a.a)({size:"large"},u),{},{children:c}))]})}},2880:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';\nimport FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';\nimport FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';\nimport FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';\nimport Box from '@mui/material/Box';\nimport ToggleButton from '@mui/material/ToggleButton';\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\n\nexport default function ToggleButtonSizes() {\n  const [alignment, setAlignment] = React.useState('left');\n\n  const handleChange = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  const children = [\n    <ToggleButton value=\"left\" key=\"left\">\n      <FormatAlignLeftIcon />\n    </ToggleButton>,\n    <ToggleButton value=\"center\" key=\"center\">\n      <FormatAlignCenterIcon />\n    </ToggleButton>,\n    <ToggleButton value=\"right\" key=\"right\">\n      <FormatAlignRightIcon />\n    </ToggleButton>,\n    <ToggleButton value=\"justify\" key=\"justify\">\n      <FormatAlignJustifyIcon />\n    </ToggleButton>,\n  ];\n\n  const control = {\n    value: alignment,\n    onChange: handleChange,\n    exclusive: true,\n  };\n\n  return (\n    <Box\n      sx={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        // TODO Replace with Stack\n        '& > :not(style) + :not(style)': { mt: 2 },\n      }}\n    >\n      <ToggleButtonGroup size=\"small\" {...control}>\n        {children}\n      </ToggleButtonGroup>\n      <ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>\n      <ToggleButtonGroup size=\"large\" {...control}>\n        {children}\n      </ToggleButtonGroup>\n    </Box>\n  );\n}\n"},2881:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var a=t(17),o=t(1),l=t(3030),i=t(3019),r=t(0);function c(){var e=o.useState("web"),n=Object(a.a)(e,2),t=n[0],c=n[1];return Object(r.jsxs)(i.a,{color:"primary",value:t,exclusive:!0,onChange:function(e,n){c(n)},children:[Object(r.jsx)(l.a,{value:"web",children:"Web"}),Object(r.jsx)(l.a,{value:"android",children:"Android"}),Object(r.jsx)(l.a,{value:"ios",children:"iOS"})]})}},2882:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport ToggleButton from '@mui/material/ToggleButton';\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\n\nexport default function ColorToggleButton() {\n  const [alignment, setAlignment] = React.useState('web');\n\n  const handleChange = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  return (\n    <ToggleButtonGroup\n      color=\"primary\"\n      value={alignment}\n      exclusive\n      onChange={handleChange}\n    >\n      <ToggleButton value=\"web\">Web</ToggleButton>\n      <ToggleButton value=\"android\">Android</ToggleButton>\n      <ToggleButton value=\"ios\">iOS</ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n"},2883:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var a=t(17),o=t(1),l=t(2884),i=t.n(l),r=t(2885),c=t.n(r),s=t(2886),u=t.n(s),m=t(3030),g=t(3019),d=t(0);function b(){var e=o.useState("list"),n=Object(a.a)(e,2),t=n[0],l=n[1];return Object(d.jsxs)(g.a,{orientation:"vertical",value:t,exclusive:!0,onChange:function(e,n){l(n)},children:[Object(d.jsx)(m.a,{value:"list","aria-label":"list",children:Object(d.jsx)(i.a,{})}),Object(d.jsx)(m.a,{value:"module","aria-label":"module",children:Object(d.jsx)(c.a,{})}),Object(d.jsx)(m.a,{value:"quilt","aria-label":"quilt",children:Object(d.jsx)(u.a,{})})]})}},2887:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport ViewListIcon from '@mui/icons-material/ViewList';\nimport ViewModuleIcon from '@mui/icons-material/ViewModule';\nimport ViewQuiltIcon from '@mui/icons-material/ViewQuilt';\nimport ToggleButton from '@mui/material/ToggleButton';\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\n\nexport default function VerticalToggleButtons() {\n  const [view, setView] = React.useState('list');\n\n  const handleChange = (event, nextView) => {\n    setView(nextView);\n  };\n\n  return (\n    <ToggleButtonGroup\n      orientation=\"vertical\"\n      value={view}\n      exclusive\n      onChange={handleChange}\n    >\n      <ToggleButton value=\"list\" aria-label=\"list\">\n        <ViewListIcon />\n      </ToggleButton>\n      <ToggleButton value=\"module\" aria-label=\"module\">\n        <ViewModuleIcon />\n      </ToggleButton>\n      <ToggleButton value=\"quilt\" aria-label=\"quilt\">\n        <ViewQuiltIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n"},2888:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var a=t(17),o=t(1),l=t(1423),i=t.n(l),r=t(1424),c=t.n(r),s=t(1425),u=t.n(s),m=t(2889),g=t.n(m),d=t(2890),b=t.n(d),j=t(2891),f=t.n(j),h=t(1337),p=t(3030),x=t(3019),v=t(0);function O(){var e=o.useState("left"),n=Object(a.a)(e,2),t=n[0],l=n[1],r=o.useState((function(){return["phone"]})),s=Object(a.a)(r,2),m=s[0],d=s[1];return Object(v.jsxs)(h.a,{direction:"row",spacing:4,children:[Object(v.jsxs)(x.a,{value:t,exclusive:!0,onChange:function(e,n){null!==n&&l(n)},"aria-label":"text alignment",children:[Object(v.jsx)(p.a,{value:"left","aria-label":"left aligned",children:Object(v.jsx)(i.a,{})}),Object(v.jsx)(p.a,{value:"center","aria-label":"centered",children:Object(v.jsx)(c.a,{})}),Object(v.jsx)(p.a,{value:"right","aria-label":"right aligned",children:Object(v.jsx)(u.a,{})})]}),Object(v.jsxs)(x.a,{value:m,onChange:function(e,n){n.length&&d(n)},"aria-label":"device",children:[Object(v.jsx)(p.a,{value:"laptop","aria-label":"laptop",children:Object(v.jsx)(g.a,{})}),Object(v.jsx)(p.a,{value:"tv","aria-label":"tv",children:Object(v.jsx)(b.a,{})}),Object(v.jsx)(p.a,{value:"phone","aria-label":"phone",children:Object(v.jsx)(f.a,{})})]})]})}},2892:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport FormatAlignLeftIcon from \'@mui/icons-material/FormatAlignLeft\';\nimport FormatAlignCenterIcon from \'@mui/icons-material/FormatAlignCenter\';\nimport FormatAlignRightIcon from \'@mui/icons-material/FormatAlignRight\';\nimport LaptopIcon from \'@mui/icons-material/Laptop\';\nimport TvIcon from \'@mui/icons-material/Tv\';\nimport PhoneAndroidIcon from \'@mui/icons-material/PhoneAndroid\';\nimport Stack from \'@mui/material/Stack\';\nimport ToggleButton from \'@mui/material/ToggleButton\';\nimport ToggleButtonGroup from \'@mui/material/ToggleButtonGroup\';\n\nexport default function ToggleButtonNotEmpty() {\n  const [alignment, setAlignment] = React.useState(\'left\');\n  const [devices, setDevices] = React.useState(() => [\'phone\']);\n\n  const handleAlignment = (event, newAlignment) => {\n    if (newAlignment !== null) {\n      setAlignment(newAlignment);\n    }\n  };\n\n  const handleDevices = (event, newDevices) => {\n    if (newDevices.length) {\n      setDevices(newDevices);\n    }\n  };\n\n  return (\n    <Stack direction="row" spacing={4}>\n      <ToggleButtonGroup\n        value={alignment}\n        exclusive\n        onChange={handleAlignment}\n        aria-label="text alignment"\n      >\n        <ToggleButton value="left" aria-label="left aligned">\n          <FormatAlignLeftIcon />\n        </ToggleButton>\n        <ToggleButton value="center" aria-label="centered">\n          <FormatAlignCenterIcon />\n        </ToggleButton>\n        <ToggleButton value="right" aria-label="right aligned">\n          <FormatAlignRightIcon />\n        </ToggleButton>\n      </ToggleButtonGroup>\n\n      <ToggleButtonGroup\n        value={devices}\n        onChange={handleDevices}\n        aria-label="device"\n      >\n        <ToggleButton value="laptop" aria-label="laptop">\n          <LaptopIcon />\n        </ToggleButton>\n        <ToggleButton value="tv" aria-label="tv">\n          <TvIcon />\n        </ToggleButton>\n        <ToggleButton value="phone" aria-label="phone">\n          <PhoneAndroidIcon />\n        </ToggleButton>\n      </ToggleButtonGroup>\n    </Stack>\n  );\n}\n'},2893:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(17),o=t(1),l=t(1370),i=t.n(l),r=t(3030),c=t(0);function s(){var e=o.useState(!1),n=Object(a.a)(e,2),t=n[0],l=n[1];return Object(c.jsx)(r.a,{value:"check",selected:t,onChange:function(){l(!t)},children:Object(c.jsx)(i.a,{})})}},2894:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport CheckIcon from '@mui/icons-material/Check';\nimport ToggleButton from '@mui/material/ToggleButton';\n\nexport default function StandaloneToggleButton() {\n  const [selected, setSelected] = React.useState(false);\n\n  return (\n    <ToggleButton\n      value=\"check\"\n      selected={selected}\n      onChange={() => {\n        setSelected(!selected);\n      }}\n    >\n      <CheckIcon />\n    </ToggleButton>\n  );\n}\n"},2895:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return N}));var a=t(17),o=t(1),l=t(14),i=t(1423),r=t.n(i),c=t(1424),s=t.n(c),u=t(1425),m=t.n(u),g=t(1582),d=t.n(g),b=t(1472),j=t.n(b),f=t(1473),h=t.n(f),p=t(1673),x=t.n(p),v=t(1674),O=t.n(v),T=t(1446),B=t.n(T),w=t(1269),A=t(677),F=t(3030),y=t(3019),I=t(0),C=Object(l.a)(y.a)((function(e){var n=e.theme;return{"& .MuiToggleButtonGroup-grouped":{margin:n.spacing(.5),border:0,"&.Mui-disabled":{border:0},"&:not(:first-of-type)":{borderRadius:n.shape.borderRadius},"&:first-of-type":{borderRadius:n.shape.borderRadius}}}}));function N(){var e=o.useState("left"),n=Object(a.a)(e,2),t=n[0],l=n[1],i=o.useState((function(){return["italic"]})),c=Object(a.a)(i,2),u=c[0],g=c[1];return Object(I.jsx)("div",{children:Object(I.jsxs)(A.a,{elevation:0,sx:{display:"flex",border:function(e){return"1px solid ".concat(e.palette.divider)},flexWrap:"wrap"},children:[Object(I.jsxs)(C,{size:"small",value:t,exclusive:!0,onChange:function(e,n){l(n)},"aria-label":"text alignment",children:[Object(I.jsx)(F.a,{value:"left","aria-label":"left aligned",children:Object(I.jsx)(r.a,{})}),Object(I.jsx)(F.a,{value:"center","aria-label":"centered",children:Object(I.jsx)(s.a,{})}),Object(I.jsx)(F.a,{value:"right","aria-label":"right aligned",children:Object(I.jsx)(m.a,{})}),Object(I.jsx)(F.a,{value:"justify","aria-label":"justified",disabled:!0,children:Object(I.jsx)(d.a,{})})]}),Object(I.jsx)(w.a,{flexItem:!0,orientation:"vertical",sx:{mx:.5,my:1}}),Object(I.jsxs)(C,{size:"small",value:u,onChange:function(e,n){g(n)},"aria-label":"text formatting",children:[Object(I.jsx)(F.a,{value:"bold","aria-label":"bold",children:Object(I.jsx)(j.a,{})}),Object(I.jsx)(F.a,{value:"italic","aria-label":"italic",children:Object(I.jsx)(h.a,{})}),Object(I.jsx)(F.a,{value:"underlined","aria-label":"underlined",children:Object(I.jsx)(x.a,{})}),Object(I.jsxs)(F.a,{value:"color","aria-label":"color",disabled:!0,children:[Object(I.jsx)(O.a,{}),Object(I.jsx)(B.a,{})]})]})]})})}},2896:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';\nimport FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';\nimport FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';\nimport FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';\nimport FormatBoldIcon from '@mui/icons-material/FormatBold';\nimport FormatItalicIcon from '@mui/icons-material/FormatItalic';\nimport FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';\nimport FormatColorFillIcon from '@mui/icons-material/FormatColorFill';\nimport ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';\nimport Divider from '@mui/material/Divider';\nimport Paper from '@mui/material/Paper';\nimport ToggleButton from '@mui/material/ToggleButton';\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\n\nconst StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({\n  '& .MuiToggleButtonGroup-grouped': {\n    margin: theme.spacing(0.5),\n    border: 0,\n    '&.Mui-disabled': {\n      border: 0,\n    },\n    '&:not(:first-of-type)': {\n      borderRadius: theme.shape.borderRadius,\n    },\n    '&:first-of-type': {\n      borderRadius: theme.shape.borderRadius,\n    },\n  },\n}));\n\nexport default function CustomizedDividers() {\n  const [alignment, setAlignment] = React.useState('left');\n  const [formats, setFormats] = React.useState(() => ['italic']);\n\n  const handleFormat = (event, newFormats) => {\n    setFormats(newFormats);\n  };\n\n  const handleAlignment = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  return (\n    <div>\n      <Paper\n        elevation={0}\n        sx={{\n          display: 'flex',\n          border: (theme) => `1px solid ${theme.palette.divider}`,\n          flexWrap: 'wrap',\n        }}\n      >\n        <StyledToggleButtonGroup\n          size=\"small\"\n          value={alignment}\n          exclusive\n          onChange={handleAlignment}\n          aria-label=\"text alignment\"\n        >\n          <ToggleButton value=\"left\" aria-label=\"left aligned\">\n            <FormatAlignLeftIcon />\n          </ToggleButton>\n          <ToggleButton value=\"center\" aria-label=\"centered\">\n            <FormatAlignCenterIcon />\n          </ToggleButton>\n          <ToggleButton value=\"right\" aria-label=\"right aligned\">\n            <FormatAlignRightIcon />\n          </ToggleButton>\n          <ToggleButton value=\"justify\" aria-label=\"justified\" disabled>\n            <FormatAlignJustifyIcon />\n          </ToggleButton>\n        </StyledToggleButtonGroup>\n        <Divider flexItem orientation=\"vertical\" sx={{ mx: 0.5, my: 1 }} />\n        <StyledToggleButtonGroup\n          size=\"small\"\n          value={formats}\n          onChange={handleFormat}\n          aria-label=\"text formatting\"\n        >\n          <ToggleButton value=\"bold\" aria-label=\"bold\">\n            <FormatBoldIcon />\n          </ToggleButton>\n          <ToggleButton value=\"italic\" aria-label=\"italic\">\n            <FormatItalicIcon />\n          </ToggleButton>\n          <ToggleButton value=\"underlined\" aria-label=\"underlined\">\n            <FormatUnderlinedIcon />\n          </ToggleButton>\n          <ToggleButton value=\"color\" aria-label=\"color\" disabled>\n            <FormatColorFillIcon />\n            <ArrowDropDownIcon />\n          </ToggleButton>\n        </StyledToggleButtonGroup>\n      </Paper>\n    </div>\n  );\n}\n"},3168:function(e,n,t){"use strict";t.r(n);var a=t(1316),o=t(159),l=t(1290),i=t(1287),r=t(366),c=t(0);n.default=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(c.jsxs)(l.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/toggle-button",target:"_blank",role:"button",children:[Object(c.jsx)(i.a,{children:"link"}),Object(c.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(c.jsx)(r.a,{className:"text-40 my-16 font-700",component:"h1",children:"Toggle Buttons"}),Object(c.jsx)(r.a,{className:"description",children:"Toggle buttons can be used to group related options."}),Object(c.jsxs)(r.a,{className:"mb-40",component:"div",children:["To emphasize groups of related Toggle buttons, a group should share a common container. The"," ",Object(c.jsx)("code",{children:"ToggleButtonGroup"})," controls the selected state of its child buttons when given its own ",Object(c.jsx)("code",{children:"value"})," prop."]}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Exclusive selection"}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:"With exclusive selection, selecting one option deselects any other."}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:"In this example, text justification toggle buttons present options for left, center, right, and fully justified text (disabled), with only one item available for selection at a time."}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:Object(c.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2875).default,raw:t(2876)})}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Multiple selection"}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:"Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected."}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:Object(c.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2877).default,raw:t(2878)})}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Size"}),Object(c.jsxs)(r.a,{className:"mb-40",component:"div",children:["For larger or smaller buttons, use the ",Object(c.jsx)("code",{children:"size"})," prop."]}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:Object(c.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2879).default,raw:t(2880)})}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Color"}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:Object(c.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2881).default,raw:t(2882)})}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Vertical buttons"}),Object(c.jsxs)(r.a,{className:"mb-40",component:"div",children:["The buttons can be stacked vertically with the ",Object(c.jsx)("code",{children:"orientation"}),' prop set to "vertical".']}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:Object(c.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2883).default,raw:t(2887)})}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Enforce value set"}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:"If you want to enforce that at least one button must be active, you can adapt your handleChange function."}),Object(c.jsx)(o.a,{component:"pre",className:"language-jsx",children:" \nconst handleAlignment = (event, newAlignment) => {\n  if (newAlignment !== null) {\n    setAlignment(newAlignment);\n  }\n};\n\nconst handleDevices = (event, newDevices) => {\n  if (newDevices.length) {\n    setDevices(newDevices);\n  }\n};\n"}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:Object(c.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2888).default,raw:t(2892)})}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Standalone toggle button"}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:Object(c.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2893).default,raw:t(2894)})}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),Object(c.jsxs)(r.a,{className:"mb-40",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the"," ",Object(c.jsx)("a",{href:"/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:Object(c.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2895).default,raw:t(2896)})}),Object(c.jsx)(r.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),Object(c.jsx)(r.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["ToggleButtonGroup has ",Object(c.jsx)("code",{children:'role="group"'}),". You should provide an accessible label with ",Object(c.jsx)("code",{children:'aria-label="label"'}),", ",Object(c.jsx)("code",{children:'aria-labelledby="id"'})," or"," ",Object(c.jsx)("code",{children:"<label>"}),"."]}),Object(c.jsxs)("li",{children:["ToggleButton sets ",Object(c.jsx)("code",{children:'aria-pressed="<bool>"'})," according to the button state. You should label each button with ",Object(c.jsx)("code",{children:"aria-label"}),"."]})]}),Object(c.jsx)(r.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),Object(c.jsx)(r.a,{className:"mb-40",component:"div",children:"At present, toggle buttons are in DOM order. Navigate between them with the tab key. The button behavior follows standard keyboard semantics."})]})}}}]);