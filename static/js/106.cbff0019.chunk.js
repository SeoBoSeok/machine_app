(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[106],{1323:function(e,t,a){"use strict";var c=a(1),i=c.createContext();t.a=i},1336:function(e,t,a){"use strict";var c=a(1),i=c.createContext();t.a=i},1355:function(e,t,a){"use strict";a.d(t,"b",(function(){return n}));var c=a(102),i=a(95);function n(e){return Object(c.a)("MuiTableCell",e)}var r=Object(i.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.a=r},1416:function(e,t,a){"use strict";var c=a(4),i=a(13),n=a(2),r=a(1),s=(a(12),a(6)),l=a(137),o=a(107),d=a(18),j=a(1336),b=a(1323),m=a(24),h=a(14),p=a(1355),O=a(0),u=["align","className","component","padding","scope","size","sortDirection","variant"],f=Object(h.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(o.e)(Object(o.a)(t.palette.divider,1),.88):Object(o.b)(Object(o.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(c.a)({padding:"6px 16px"},"&.".concat(p.a.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),x=r.forwardRef((function(e,t){var a,c=Object(m.a)({props:e,name:"MuiTableCell"}),o=c.align,h=void 0===o?"inherit":o,x=c.className,v=c.component,g=c.padding,y=c.scope,N=c.size,w=c.sortDirection,k=c.variant,M=Object(i.a)(c,u),S=r.useContext(j.a),z=r.useContext(b.a),H=z&&"head"===z.variant;a=v||(H?"th":"td");var R=y;!R&&H&&(R="col");var C=k||z&&z.variant,T=Object(n.a)({},c,{align:h,component:a,padding:g||(S&&S.padding?S.padding:"normal"),size:N||(S&&S.size?S.size:"medium"),sortDirection:w,stickyHeader:"head"===C&&S&&S.stickyHeader,variant:C}),A=function(e){var t=e.classes,a=e.variant,c=e.align,i=e.padding,n=e.size,r={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==c&&"align".concat(Object(d.a)(c)),"normal"!==i&&"padding".concat(Object(d.a)(i)),"size".concat(Object(d.a)(n))]};return Object(l.a)(r,p.b,t)}(T),I=null;return w&&(I="asc"===w?"ascending":"descending"),Object(O.jsx)(f,Object(n.a)({as:a,ref:t,className:Object(s.default)(A.root,x),"aria-sort":I,scope:R,ownerState:T},M))}));t.a=x},1426:function(e,t,a){"use strict";var c=a(13),i=a(2),n=a(1),r=(a(12),a(6)),s=a(137),l=a(1336),o=a(24),d=a(14),j=a(102),b=a(95);function m(e){return Object(j.a)("MuiTable",e)}Object(b.a)("MuiTable",["root","stickyHeader"]);var h=a(0),p=["className","component","padding","size","stickyHeader"],O=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),u="table",f=n.forwardRef((function(e,t){var a=Object(o.a)({props:e,name:"MuiTable"}),d=a.className,j=a.component,b=void 0===j?u:j,f=a.padding,x=void 0===f?"normal":f,v=a.size,g=void 0===v?"medium":v,y=a.stickyHeader,N=void 0!==y&&y,w=Object(c.a)(a,p),k=Object(i.a)({},a,{component:b,padding:x,size:g,stickyHeader:N}),M=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(s.a)(a,m,t)}(k),S=n.useMemo((function(){return{padding:x,size:g,stickyHeader:N}}),[x,g,N]);return Object(h.jsx)(l.a.Provider,{value:S,children:Object(h.jsx)(O,Object(i.a)({as:b,role:b===u?null:"table",ref:t,className:Object(r.default)(M.root,d),ownerState:k},w))})}));t.a=f},1427:function(e,t,a){"use strict";var c=a(2),i=a(13),n=a(1),r=(a(12),a(6)),s=a(137),l=a(1323),o=a(24),d=a(14),j=a(102),b=a(95);function m(e){return Object(j.a)("MuiTableHead",e)}Object(b.a)("MuiTableHead",["root"]);var h=a(0),p=["className","component"],O=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),u={variant:"head"},f="thead",x=n.forwardRef((function(e,t){var a=Object(o.a)({props:e,name:"MuiTableHead"}),n=a.className,d=a.component,j=void 0===d?f:d,b=Object(i.a)(a,p),x=Object(c.a)({},a,{component:j}),v=function(e){var t=e.classes;return Object(s.a)({root:["root"]},m,t)}(x);return Object(h.jsx)(l.a.Provider,{value:u,children:Object(h.jsx)(O,Object(c.a)({as:j,className:Object(r.default)(v.root,n),ref:t,role:j===f?null:"rowgroup",ownerState:x},b))})}));t.a=x},1428:function(e,t,a){"use strict";var c=a(4),i=a(2),n=a(13),r=a(1),s=(a(12),a(6)),l=a(137),o=a(107),d=a(1323),j=a(24),b=a(14),m=a(102),h=a(95);function p(e){return Object(m.a)("MuiTableRow",e)}var O=Object(h.a)("MuiTableRow",["root","selected","hover","head","footer"]),u=a(0),f=["className","component","hover","selected"],x=Object(b.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(c.a)(t,"&.".concat(O.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(c.a)(t,"&.".concat(O.selected),{backgroundColor:Object(o.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(o.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),v=r.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiTableRow"}),c=a.className,o=a.component,b=void 0===o?"tr":o,m=a.hover,h=void 0!==m&&m,O=a.selected,v=void 0!==O&&O,g=Object(n.a)(a,f),y=r.useContext(d.a),N=Object(i.a)({},a,{component:b,hover:h,selected:v,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),w=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(l.a)(a,p,t)}(N);return Object(u.jsx)(x,Object(i.a)({as:b,ref:t,className:Object(s.default)(w.root,c),role:"tr"===b?null:"row",ownerState:N},g))}));t.a=v},1429:function(e,t,a){"use strict";var c=a(2),i=a(13),n=a(1),r=(a(12),a(6)),s=a(137),l=a(1323),o=a(24),d=a(14),j=a(102),b=a(95);function m(e){return Object(j.a)("MuiTableBody",e)}Object(b.a)("MuiTableBody",["root"]);var h=a(0),p=["className","component"],O=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),u={variant:"body"},f="tbody",x=n.forwardRef((function(e,t){var a=Object(o.a)({props:e,name:"MuiTableBody"}),n=a.className,d=a.component,j=void 0===d?f:d,b=Object(i.a)(a,p),x=Object(c.a)({},a,{component:j}),v=function(e){var t=e.classes;return Object(s.a)({root:["root"]},m,t)}(x);return Object(h.jsx)(l.a.Provider,{value:u,children:Object(h.jsx)(O,Object(c.a)({className:Object(r.default)(v.root,n),as:j,ref:t,role:j===f?null:"rowgroup",ownerState:x},b))})}));t.a=x},3248:function(e,t,a){"use strict";a.r(t);var c=a(4),i=a(212),n=a(1302),r=a(1287),s=a(1288),l=a(183),o=a(1276),d=a(1),j=a(15),b=a(14),m=a(366),h=a(0);var p=function(e){var t=e.className,a=e.selected.location.split(">");return Object(h.jsx)(m.a,{className:t,children:a.map((function(e,t){return Object(h.jsxs)("span",{className:"flex items-center",children:[Object(h.jsx)("span",{children:e}),a.length-1!==t&&Object(h.jsx)(r.a,{children:"chevron_right"})]},t)}))})},O=a(1297),u=a(1263),f=a(3),x=a.n(f),v=a(7),g=a(35),y=a(61),N=a.n(y),w=Object(g.b)("fileManagerApp/files/getFiles",Object(v.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/file-manager-app/files");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),k=Object(g.c)({}),M=k.getSelectors((function(e){return e.fileManagerApp.files})),S=M.selectAll,z=(M.selectEntities,M.selectById),H=Object(g.d)({name:"fileManagerApp/files",initialState:k.getInitialState({selectedItemId:"1"}),reducers:{setSelectedItem:function(e,t){e.selectedItemId=t.payload}},extraReducers:Object(c.a)({},w.fulfilled,k.setAll)}),R=H.actions.setSelectedItem,C=H.reducer,T=a(8),A=Object(b.a)(r.a)((function(e){e.theme;var t=e.type;return{"&:before":Object(T.a)(Object(T.a)(Object(T.a)({},"folder"===t&&{content:"'folder'",color:"#FFB300"}),"document"===t&&{content:"'insert_drive_file'",color:"#1565C0"}),"spreadsheet"===t&&{content:"'insert_chart'",color:"#4CAF50"})}}));var I=function(e){var t=Object(j.d)((function(e){return z(e,e.fileManagerApp.files.selectedItemId)}));return t?Object(h.jsxs)(o.a.div,{initial:{y:50,opacity:.8},animate:{y:0,opacity:1,transition:{delay:.3}},className:"file-details p-16 sm:p-24",children:[Object(h.jsx)("div",{className:"preview h-128 sm:h-256 file-icon flex items-center justify-center",children:Object(h.jsx)(o.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:Object(h.jsx)(A,{className:"text-48",type:t.type})})}),Object(h.jsx)(O.a,{className:"offline-switch",control:Object(h.jsx)(u.a,{checked:t.offline,"aria-label":"Available Offline"}),label:"Available Offline"}),Object(h.jsx)(m.a,{variant:"subtitle1",className:"py-16",children:"Info"}),Object(h.jsx)("table",{className:"w-full text-justify",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{className:"type h-52",children:[Object(h.jsx)("th",{className:"font-semibold",children:"Type"}),Object(h.jsx)("td",{children:t.type})]}),Object(h.jsxs)("tr",{className:"size h-52",children:[Object(h.jsx)("th",{className:"font-semibold",children:"Size"}),Object(h.jsx)("td",{children:""===t.size?"-":t.size})]}),Object(h.jsxs)("tr",{className:"location h-52 text-left",children:[Object(h.jsx)("th",{className:"font-semibold",children:"Location"}),Object(h.jsx)("td",{children:t.location})]}),Object(h.jsxs)("tr",{className:"owner h-52",children:[Object(h.jsx)("th",{className:"font-semibold",children:"Owner"}),Object(h.jsx)("td",{children:t.owner})]}),Object(h.jsxs)("tr",{className:"modified h-52",children:[Object(h.jsx)("th",{className:"font-semibold",children:"Modified"}),Object(h.jsx)("td",{children:t.modified})]}),Object(h.jsxs)("tr",{className:"opened h-52",children:[Object(h.jsx)("th",{className:"font-semibold",children:"Opened"}),Object(h.jsx)("td",{children:t.opened})]}),Object(h.jsxs)("tr",{className:"created h-52",children:[Object(h.jsx)("th",{className:"font-semibold",children:"Created"}),Object(h.jsx)("td",{children:t.created})]})]})})]}):null};var F=function(e){var t=Object(j.d)((function(e){return z(e,e.fileManagerApp.files.selectedItemId)}));return t?Object(h.jsxs)("div",{className:"flex flex-col justify-between h-full p-4 sm:p-12",children:[Object(h.jsxs)("div",{className:"toolbar flex align-center justify-end",children:[Object(h.jsx)(o.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.2}},children:Object(h.jsx)(s.a,{size:"large",children:Object(h.jsx)(r.a,{children:"delete"})})}),Object(h.jsx)(o.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.2}},children:Object(h.jsx)(s.a,{size:"large",children:Object(h.jsx)(r.a,{children:"cloud_download"})})}),Object(h.jsx)(s.a,{size:"large",children:Object(h.jsx)(r.a,{children:"more_vert"})})]}),Object(h.jsxs)("div",{className:"p-12",children:[Object(h.jsx)(o.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.2}},children:Object(h.jsx)(m.a,{variant:"subtitle1",className:"mb-8 font-semibold",children:t.name})}),Object(h.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:Object(h.jsxs)(m.a,{variant:"caption",className:"font-medium",children:[Object(h.jsx)("span",{children:"Edited"}),Object(h.jsxs)("span",{children:[": ",t.modified]})]})})]})]}):null},_=a(1279),B=a(1426),P=a(1429),L=a(1416),D=a(1427),E=a(1428);var J=function(e){var t=Object(j.c)(),a=Object(j.d)(S),c=Object(j.d)((function(e){return e.fileManagerApp.files.selectedItemId}));return Object(h.jsx)(o.a.div,{initial:{y:50,opacity:.8},animate:{y:0,opacity:1,transition:{delay:.3}},children:Object(h.jsxs)(B.a,{className:"simple borderless",children:[Object(h.jsx)(D.a,{children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(L.a,{className:"max-w-64 w-64 p-0 text-center",children:" "}),Object(h.jsx)(L.a,{children:"Name"}),Object(h.jsx)(L.a,{className:"hidden sm:table-cell",children:"Type"}),Object(h.jsx)(L.a,{className:"hidden sm:table-cell",children:"Owner"}),Object(h.jsx)(L.a,{className:"text-center hidden sm:table-cell",children:"Size"}),Object(h.jsx)(L.a,{className:"hidden sm:table-cell",children:"Modified"})]})}),Object(h.jsx)(P.a,{children:a.map((function(a){return Object(h.jsxs)(E.a,{hover:!0,onClick:function(e){return t(R(a.id))},selected:a.id===c,className:"cursor-pointer h-64",children:[Object(h.jsx)(L.a,{className:"max-w-64 w-64 p-0 text-center",children:Object(h.jsx)(A,{type:a.type})}),Object(h.jsx)(L.a,{className:"font-medium",children:a.name}),Object(h.jsx)(L.a,{className:"hidden sm:table-cell",children:a.type}),Object(h.jsx)(L.a,{className:"hidden sm:table-cell",children:a.owner}),Object(h.jsx)(L.a,{className:"text-center hidden sm:table-cell",children:""===a.size?"-":a.size}),Object(h.jsx)(L.a,{className:"hidden sm:table-cell",children:a.modified}),Object(h.jsx)(_.a,{lgUp:!0,children:Object(h.jsx)(L.a,{children:Object(h.jsx)(s.a,{onClick:function(t){return e.pageLayout.current.toggleRightSidebar()},"aria-label":"open right sidebar",size:"large",children:Object(h.jsx)(r.a,{children:"info"})})})})]},a.id)}))})]})})},W=a(1294),U=a(1303),V=a(1271),q=a(1266);var G=function(){return Object(h.jsxs)(W.a,{component:"nav",children:[Object(h.jsxs)(U.a,{button:!0,dense:!0,children:[Object(h.jsx)(V.a,{className:"min-w-40",children:Object(h.jsx)(r.a,{className:"text-20",children:"folder"})}),Object(h.jsx)(q.a,{primary:"My Files"})]}),Object(h.jsxs)(U.a,{button:!0,dense:!0,children:[Object(h.jsx)(V.a,{className:"min-w-40",children:Object(h.jsx)(r.a,{className:"text-20",children:"star"})}),Object(h.jsx)(q.a,{primary:"Starred"})]}),Object(h.jsxs)(U.a,{button:!0,dense:!0,children:[Object(h.jsx)(V.a,{className:"min-w-40",children:Object(h.jsx)(r.a,{className:"text-20",children:"folder_shared"})}),Object(h.jsx)(q.a,{primary:"Sharred with me"})]}),Object(h.jsxs)(U.a,{button:!0,dense:!0,children:[Object(h.jsx)(V.a,{className:"min-w-40",children:Object(h.jsx)(r.a,{className:"text-20",children:"access_time"})}),Object(h.jsx)(q.a,{primary:"Recent"})]}),Object(h.jsxs)(U.a,{button:!0,dense:!0,children:[Object(h.jsx)(V.a,{className:"min-w-40",children:Object(h.jsx)(r.a,{className:"text-20",children:"not_interested"})}),Object(h.jsx)(q.a,{primary:"Offline"})]})]})};var K=function(){return Object(h.jsxs)("div",{className:"flex items-center h-full p-12",children:[Object(h.jsx)(r.a,{component:o.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"folder"}),Object(h.jsx)(m.a,{component:o.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"File Manager"})]})},Q=a(149),X=Object(Q.c)({files:C}),Y=Object(b.a)(i.a)((function(e){var t=e.theme;return{"& .FusePageSimple-header":Object(c.a)({minHeight:96,height:96},t.breakpoints.up("sm"),{minHeight:160,height:160}),"& .FusePageSimple-sidebarHeader":Object(c.a)({minHeight:96,height:96},t.breakpoints.up("sm"),{minHeight:160,height:160}),"& .FusePageSimple-rightSidebar":{width:320}}}));t.default=Object(l.a)("fileManagerApp",X)((function(){var e=Object(j.c)(),t=Object(j.d)((function(e){return z(e,e.fileManagerApp.files.selectedItemId)})),a=Object(d.useRef)(null);return Object(d.useEffect)((function(){e(w())}),[e]),Object(h.jsx)(Y,{header:Object(h.jsxs)("div",{className:"flex flex-col flex-1 p-8 sm:p-12 relative",children:[Object(h.jsxs)("div",{className:"flex items-center justify-between",children:[Object(h.jsx)(s.a,{onClick:function(e){a.current.toggleLeftSidebar()},"aria-label":"open left sidebar",size:"large",children:Object(h.jsx)(r.a,{children:"menu"})}),Object(h.jsx)(o.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.2}},children:Object(h.jsx)(s.a,{"aria-label":"search",size:"large",children:Object(h.jsx)(r.a,{children:"search"})})})]}),Object(h.jsxs)("div",{className:"flex flex-1 items-end",children:[Object(h.jsx)(n.a,{component:o.a.div,initial:{scale:0},animate:{scale:1,transition:{delay:.6}},color:"secondary","aria-label":"add",className:"absolute bottom-0 ltr:left-0 rtl:right-0 mx-16 -mb-28 z-999",children:Object(h.jsx)(r.a,{children:"add"})}),Object(h.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.6}},children:t&&Object(h.jsx)(p,{selected:t,className:"flex flex-1 ltr:pl-72 rtl:pr-72 pb-12 text-16 sm:text-24 font-semibold"})})]})]}),content:Object(h.jsx)(J,{pageLayout:a}),leftSidebarVariant:"temporary",leftSidebarHeader:Object(h.jsx)(K,{}),leftSidebarContent:Object(h.jsx)(G,{}),rightSidebarHeader:Object(h.jsx)(F,{}),rightSidebarContent:Object(h.jsx)(I,{}),ref:a,innerScroll:!0})}))}}]);