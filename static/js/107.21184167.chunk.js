(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[107],{1323:function(e,t,a){"use strict";var r=a(1),c=r.createContext();t.a=c},1336:function(e,t,a){"use strict";var r=a(1),c=r.createContext();t.a=c},1355:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var r=a(102),c=a(95);function i(e){return Object(r.a)("MuiTableCell",e)}var n=Object(c.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.a=n},1416:function(e,t,a){"use strict";var r=a(4),c=a(13),i=a(2),n=a(1),o=(a(12),a(6)),s=a(137),l=a(107),d=a(18),j=a(1336),b=a(1323),u=a(24),p=a(14),h=a(1355),m=a(0),O=["align","className","component","padding","scope","size","sortDirection","variant"],x=Object(p.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(l.e)(Object(l.a)(t.palette.divider,1),.88):Object(l.b)(Object(l.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(r.a)({padding:"6px 16px"},"&.".concat(h.a.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),g=n.forwardRef((function(e,t){var a,r=Object(u.a)({props:e,name:"MuiTableCell"}),l=r.align,p=void 0===l?"inherit":l,g=r.className,f=r.component,v=r.padding,y=r.scope,N=r.size,w=r.sortDirection,k=r.variant,T=Object(c.a)(r,O),S=n.useContext(j.a),C=n.useContext(b.a),R=C&&"head"===C.variant;a=f||(R?"th":"td");var M=y;!M&&R&&(M="col");var H=k||C&&C.variant,z=Object(i.a)({},r,{align:p,component:a,padding:v||(S&&S.padding?S.padding:"normal"),size:N||(S&&S.size?S.size:"medium"),sortDirection:w,stickyHeader:"head"===H&&S&&S.stickyHeader,variant:H}),I=function(e){var t=e.classes,a=e.variant,r=e.align,c=e.padding,i=e.size,n={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat(Object(d.a)(r)),"normal"!==c&&"padding".concat(Object(d.a)(c)),"size".concat(Object(d.a)(i))]};return Object(s.a)(n,h.b,t)}(z),A=null;return w&&(A="asc"===w?"ascending":"descending"),Object(m.jsx)(x,Object(i.a)({as:a,ref:t,className:Object(o.default)(I.root,g),"aria-sort":A,scope:M,ownerState:z},T))}));t.a=g},1426:function(e,t,a){"use strict";var r=a(13),c=a(2),i=a(1),n=(a(12),a(6)),o=a(137),s=a(1336),l=a(24),d=a(14),j=a(102),b=a(95);function u(e){return Object(j.a)("MuiTable",e)}Object(b.a)("MuiTable",["root","stickyHeader"]);var p=a(0),h=["className","component","padding","size","stickyHeader"],m=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(c.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(c.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),O="table",x=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,j=a.component,b=void 0===j?O:j,x=a.padding,g=void 0===x?"normal":x,f=a.size,v=void 0===f?"medium":f,y=a.stickyHeader,N=void 0!==y&&y,w=Object(r.a)(a,h),k=Object(c.a)({},a,{component:b,padding:g,size:v,stickyHeader:N}),T=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(o.a)(a,u,t)}(k),S=i.useMemo((function(){return{padding:g,size:v,stickyHeader:N}}),[g,v,N]);return Object(p.jsx)(s.a.Provider,{value:S,children:Object(p.jsx)(m,Object(c.a)({as:b,role:b===O?null:"table",ref:t,className:Object(n.default)(T.root,d),ownerState:k},w))})}));t.a=x},1427:function(e,t,a){"use strict";var r=a(2),c=a(13),i=a(1),n=(a(12),a(6)),o=a(137),s=a(1323),l=a(24),d=a(14),j=a(102),b=a(95);function u(e){return Object(j.a)("MuiTableHead",e)}Object(b.a)("MuiTableHead",["root"]);var p=a(0),h=["className","component"],m=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),O={variant:"head"},x="thead",g=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),i=a.className,d=a.component,j=void 0===d?x:d,b=Object(c.a)(a,h),g=Object(r.a)({},a,{component:j}),f=function(e){var t=e.classes;return Object(o.a)({root:["root"]},u,t)}(g);return Object(p.jsx)(s.a.Provider,{value:O,children:Object(p.jsx)(m,Object(r.a)({as:j,className:Object(n.default)(f.root,i),ref:t,role:j===x?null:"rowgroup",ownerState:g},b))})}));t.a=g},1428:function(e,t,a){"use strict";var r=a(4),c=a(2),i=a(13),n=a(1),o=(a(12),a(6)),s=a(137),l=a(107),d=a(1323),j=a(24),b=a(14),u=a(102),p=a(95);function h(e){return Object(u.a)("MuiTableRow",e)}var m=Object(p.a)("MuiTableRow",["root","selected","hover","head","footer"]),O=a(0),x=["className","component","hover","selected"],g=Object(b.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(r.a)(t,"&.".concat(m.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(r.a)(t,"&.".concat(m.selected),{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),f=n.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiTableRow"}),r=a.className,l=a.component,b=void 0===l?"tr":l,u=a.hover,p=void 0!==u&&u,m=a.selected,f=void 0!==m&&m,v=Object(i.a)(a,x),y=n.useContext(d.a),N=Object(c.a)({},a,{component:b,hover:p,selected:f,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),w=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,h,t)}(N);return Object(O.jsx)(g,Object(c.a)({as:b,ref:t,className:Object(o.default)(w.root,r),role:"tr"===b?null:"row",ownerState:N},v))}));t.a=f},1429:function(e,t,a){"use strict";var r=a(2),c=a(13),i=a(1),n=(a(12),a(6)),o=a(137),s=a(1323),l=a(24),d=a(14),j=a(102),b=a(95);function u(e){return Object(j.a)("MuiTableBody",e)}Object(b.a)("MuiTableBody",["root"]);var p=a(0),h=["className","component"],m=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),O={variant:"body"},x="tbody",g=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),i=a.className,d=a.component,j=void 0===d?x:d,b=Object(c.a)(a,h),g=Object(r.a)({},a,{component:j}),f=function(e){var t=e.classes;return Object(o.a)({root:["root"]},u,t)}(g);return Object(p.jsx)(s.a.Provider,{value:O,children:Object(p.jsx)(m,Object(r.a)({className:Object(n.default)(f.root,i),as:j,ref:t,role:j===x?null:"rowgroup",ownerState:g},b))})}));t.a=g},3205:function(e,t,a){"use strict";a.r(t);var r=a(17),c=a(1291),i=a(14),n=a(107),o=a(1292),s=a(1426),l=a(1429),d=a(1416),j=a(1427),b=a(1428),u=a(366),p=a(61),h=a.n(p),m=a(1276),O=a(1),x=a(0),g=Object(i.a)("div")((function(e){var t=e.theme;return{background:"radial-gradient(".concat(Object(n.b)(t.palette.primary.dark,.5)," 0%, ").concat(t.palette.primary.dark," 80%)"),"& .CompactInvoicePage-divider":{backgroundColor:t.palette.getContrastText(t.palette.primary.dark)},"& .CompactInvoicePage-seller":{backgroundColor:t.palette.primary.dark,color:t.palette.getContrastText(t.palette.primary.dark),marginRight:-88,paddingRight:66,width:480}}}));t.default=function(){var e=Object(O.useState)(null),t=Object(r.a)(e,2),a=t[0],i=t[1],n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return Object(O.useEffect)((function(){h.a.get("/api/invoices/get-invoice",{params:{id:"5725a6802d"}}).then((function(e){i(e.data)}))}),[]),Object(x.jsx)(g,{className:"flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0 overflow-auto",children:a&&Object(x.jsx)(m.a.div,{initial:{opacity:0,y:200},animate:{opacity:1,y:0},transition:{bounceDamping:0},children:Object(x.jsx)(c.a,{className:"mx-auto w-xl print:w-full print:p-8 print:shadow-none rounded-none sm:rounded-20",children:Object(x.jsxs)(o.a,{className:"p-88 print:p-0",children:[Object(x.jsx)(u.a,{color:"textSecondary",className:"mb-32",children:a.date}),Object(x.jsxs)("div",{className:"flex justify-between",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("table",{className:"mb-16",children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"pb-4",children:Object(x.jsx)(u.a,{className:"font-light",variant:"h6",color:"textSecondary",children:"INVOICE"})}),Object(x.jsx)("td",{className:"pb-4 px-16",children:Object(x.jsx)(u.a,{className:"font-light",variant:"h6",children:a.number})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)(u.a,{color:"textSecondary",children:"INVOICE DATE"})}),Object(x.jsx)("td",{className:"px-16",children:Object(x.jsx)(u.a,{children:a.date})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)(u.a,{color:"textSecondary",children:"DUE DATE"})}),Object(x.jsx)("td",{className:"px-16",children:Object(x.jsx)(u.a,{children:a.dueDate})})]})]})}),Object(x.jsx)(u.a,{color:"textSecondary",children:a.client.title}),a.client.address&&Object(x.jsx)(u.a,{color:"textSecondary",children:a.client.address}),a.client.phone&&Object(x.jsx)(u.a,{color:"textSecondary",children:a.client.phone}),a.client.email&&Object(x.jsx)(u.a,{color:"textSecondary",children:a.client.email}),a.client.website&&Object(x.jsx)(u.a,{color:"textSecondary",children:a.client.website})]}),Object(x.jsxs)("div",{className:"CompactInvoicePage-seller flex items-center p-16",children:[Object(x.jsx)("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),Object(x.jsx)("div",{className:"CompactInvoicePage-divider w-px mx-8 h-96 opacity-50"}),Object(x.jsxs)("div",{className:"px-8",children:[Object(x.jsx)(u.a,{color:"inherit",children:a.from.title}),a.from.address&&Object(x.jsx)(u.a,{color:"inherit",children:a.from.address}),a.from.phone&&Object(x.jsx)(u.a,{color:"inherit",children:a.from.phone}),a.from.email&&Object(x.jsx)(u.a,{color:"inherit",children:a.from.email}),a.from.website&&Object(x.jsx)(u.a,{color:"inherit",children:a.from.website})]})]})]}),Object(x.jsxs)("div",{className:"mt-64",children:[Object(x.jsxs)(s.a,{className:"simple",children:[Object(x.jsx)(j.a,{children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(d.a,{children:"SERVICE"}),Object(x.jsx)(d.a,{children:"UNIT"}),Object(x.jsx)(d.a,{align:"right",children:"UNIT PRICE"}),Object(x.jsx)(d.a,{align:"right",children:"QUANTITY"}),Object(x.jsx)(d.a,{align:"right",children:"TOTAL"})]})}),Object(x.jsx)(l.a,{children:a.services.map((function(e){return Object(x.jsxs)(b.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(u.a,{variant:"subtitle1",children:e.title})}),Object(x.jsx)(d.a,{children:e.unit}),Object(x.jsx)(d.a,{align:"right",children:n.format(e.unitPrice)}),Object(x.jsx)(d.a,{align:"right",children:e.quantity}),Object(x.jsx)(d.a,{align:"right",children:n.format(e.total)})]},e.id)}))})]}),Object(x.jsx)(s.a,{className:"simple mt-32",children:Object(x.jsxs)(l.a,{children:[Object(x.jsxs)(b.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(u.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"SUBTOTAL"})}),Object(x.jsx)(d.a,{align:"right",children:Object(x.jsx)(u.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:n.format(a.subtotal)})})]}),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(u.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"TAX"})}),Object(x.jsx)(d.a,{align:"right",children:Object(x.jsx)(u.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:n.format(a.tax)})})]}),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(u.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"DISCOUNT"})}),Object(x.jsx)(d.a,{align:"right",children:Object(x.jsx)(u.a,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:n.format(a.discount)})})]}),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(u.a,{className:"font-light",variant:"h4",color:"textSecondary",children:"TOTAL"})}),Object(x.jsx)(d.a,{align:"right",children:Object(x.jsx)(u.a,{className:"font-light",variant:"h4",color:"textSecondary",children:n.format(a.total)})})]})]})})]}),Object(x.jsxs)("div",{className:"mt-96",children:[Object(x.jsx)(u.a,{className:"mb-24 print:mb-12",variant:"body1",children:"Please pay within 15 days. Thank you for your business."}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("div",{className:"flex-shrink-0",children:Object(x.jsx)("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})}),Object(x.jsx)(u.a,{className:"font-normal mb-64 px-24",variant:"caption",color:"textSecondary",children:"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."})]})]})]})})})})}}}]);