(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[152],{1325:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var r=a(92),c=a(4),n=a(51),o=a(14),l=a(6),i=a(1),s=a(1259),d=a(48),b=a(1286),u=a(37),j=a(15),p=a(0);var O=function(e){var t=Object(d.a)(),a=Object(j.d)(Object(u.c)(t.palette.primary.main));return Object(p.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(p.jsx)(b.a,{theme:a,children:e.header})})},f=a(8),m=a(17),h=a(125),x=a(1279),g=a(1304);var v=function(e){var t=Object(d.a)(),a=Object(j.d)(Object(u.c)(t.palette.primary.main));return Object(p.jsxs)(p.Fragment,{children:[e.header&&Object(p.jsx)(b.a,{theme:a,children:Object(p.jsx)("div",{className:Object(l.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(p.jsx)(n.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function y(e,t){var a=Object(i.useState)(!1),r=Object(m.a)(a,2),c=r[0],n=r[1];Object(i.useImperativeHandle)(t,(function(){return{toggleSidebar:o}}));var o=function(){n(!c)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x.a,{lgUp:"permanent"===e.variant,children:Object(p.jsx)(g.a,{variant:"temporary",anchor:e.position,open:c,onOpen:function(e){},onClose:function(e){return o()},disableSwipeToOpen:!0,classes:{root:Object(l.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(l.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(p.jsx)(v,Object(f.a)({},e))})}),"permanent"===e.variant&&Object(p.jsx)(x.a,{lgDown:!0,children:Object(p.jsx)(h.a,{variant:"permanent",className:Object(l.default)("FusePageCarded-sidebarWrapper",e.variant),open:c,classes:{paper:Object(l.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(p.jsx)(v,Object(f.a)({},e))})})]})}var C,S=Object(i.forwardRef)(y),k=Object(o.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:N,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(c.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:P,minHeight:P,maxHeight:P,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:D,minHeight:D,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(c.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(c.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:w,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:N,minHeight:N,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(c.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(c.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),w=240,N=200,D=64,P=N-D,T=Object(i.forwardRef)((function(e,t){var a=Object(i.useRef)(null),r=Object(i.useRef)(null),c=Object(i.useRef)(null),o=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(i.useImperativeHandle)(t,(function(){return{rootRef:c,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(p.jsxs)(k,{className:Object(l.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:c,children:[Object(p.jsx)("div",{className:"FusePageCarded-topBg"}),Object(p.jsxs)("div",{className:"flex container w-full",children:[d&&Object(p.jsx)(S,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:c}),Object(p.jsxs)("div",{className:Object(l.default)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",o&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(p.jsx)(O,{header:e.header}),Object(p.jsxs)("div",{className:Object(l.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(p.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(p.jsx)(n.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),o&&Object(p.jsx)(S,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:c})]})]})]})}));T.defaultProps={};var I=Object(i.memo)(Object(o.a)(T)(C||(C=Object(r.a)([""]))))},1451:function(e,t,a){"use strict";var r=a(4),c=a(13),n=a(2),o=a(1),l=(a(12),a(6)),i=a(137),s=a(107),d=a(117),b=a(0),u=Object(d.a)(Object(b.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),j=a(39),p=a(18),O=a(1280),f=a(24),m=a(14),h=a(102),x=a(95);function g(e){return Object(h.a)("MuiChip",e)}var v=Object(x.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],C=Object(m.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,c=a.color,n=a.clickable,o=a.onDelete,l=a.size,i=a.variant;return[Object(r.a)({},"& .".concat(v.avatar),t.avatar),Object(r.a)({},"& .".concat(v.avatar),t["avatar".concat(Object(p.a)(l))]),Object(r.a)({},"& .".concat(v.avatar),t["avatarColor".concat(Object(p.a)(c))]),Object(r.a)({},"& .".concat(v.icon),t.icon),Object(r.a)({},"& .".concat(v.icon),t["icon".concat(Object(p.a)(l))]),Object(r.a)({},"& .".concat(v.icon),t["iconColor".concat(Object(p.a)(c))]),Object(r.a)({},"& .".concat(v.deleteIcon),t.deleteIcon),Object(r.a)({},"& .".concat(v.deleteIcon),t["deleteIcon".concat(Object(p.a)(l))]),Object(r.a)({},"& .".concat(v.deleteIcon),t["deleteIconColor".concat(Object(p.a)(c))]),Object(r.a)({},"& .".concat(v.deleteIcon),t["deleteIconOutlinedColor".concat(Object(p.a)(c))]),t.root,t["size".concat(Object(p.a)(l))],t["color".concat(Object(p.a)(c))],n&&t.clickable,n&&"default"!==c&&t["clickableColor".concat(Object(p.a)(c),")")],o&&t.deletable,o&&"default"!==c&&t["deletableColor".concat(Object(p.a)(c))],t[i],"outlined"===i&&t["outlined".concat(Object(p.a)(c))]]}})((function(e){var t,a=e.theme,c=e.ownerState,o=Object(s.a)(a.palette.text.primary,.26);return Object(n.a)((t={fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(r.a)(t,"&.".concat(v.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(r.a)(t,"& .".concat(v.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(r.a)(t,"& .".concat(v.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(r.a)(t,"& .".concat(v.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(r.a)(t,"& .".concat(v.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(r.a)(t,"& .".concat(v.icon),Object(n.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===c.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==c.color&&{color:"inherit"})),Object(r.a)(t,"& .".concat(v.deleteIcon),Object(n.a)({WebkitTapHighlightColor:"transparent",color:o,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.a)(o,.4)}},"small"===c.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==c.color&&{color:Object(s.a)(a.palette[c.color].contrastText,.7),"&:hover, &:active":{color:a.palette[c.color].contrastText}})),t),"small"===c.size&&{height:24},"default"!==c.color&&{backgroundColor:a.palette[c.color].main,color:a.palette[c.color].contrastText},c.onDelete&&Object(r.a)({},"&.".concat(v.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),c.onDelete&&"default"!==c.color&&Object(r.a)({},"&.".concat(v.focusVisible),{backgroundColor:a.palette[c.color].dark}))}),(function(e){var t,a=e.theme,c=e.ownerState;return Object(n.a)({},c.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(r.a)(t,"&.".concat(v.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(r.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),c.clickable&&"default"!==c.color&&Object(r.a)({},"&:hover, &.".concat(v.focusVisible),{backgroundColor:a.palette[c.color].dark}))}),(function(e){var t,a,c=e.theme,o=e.ownerState;return Object(n.a)({},"outlined"===o.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===c.palette.mode?c.palette.grey[400]:c.palette.grey[700])},Object(r.a)(t,"&.".concat(v.clickable,":hover"),{backgroundColor:c.palette.action.hover}),Object(r.a)(t,"&.".concat(v.focusVisible),{backgroundColor:c.palette.action.focus}),Object(r.a)(t,"& .".concat(v.avatar),{marginLeft:4}),Object(r.a)(t,"& .".concat(v.avatarSmall),{marginLeft:2}),Object(r.a)(t,"& .".concat(v.icon),{marginLeft:4}),Object(r.a)(t,"& .".concat(v.iconSmall),{marginLeft:2}),Object(r.a)(t,"& .".concat(v.deleteIcon),{marginRight:5}),Object(r.a)(t,"& .".concat(v.deleteIconSmall),{marginRight:3}),t),"outlined"===o.variant&&"default"!==o.color&&(a={color:c.palette[o.color].main,border:"1px solid ".concat(Object(s.a)(c.palette[o.color].main,.7))},Object(r.a)(a,"&.".concat(v.clickable,":hover"),{backgroundColor:Object(s.a)(c.palette[o.color].main,c.palette.action.hoverOpacity)}),Object(r.a)(a,"&.".concat(v.focusVisible),{backgroundColor:Object(s.a)(c.palette[o.color].main,c.palette.action.focusOpacity)}),Object(r.a)(a,"& .".concat(v.deleteIcon),{color:Object(s.a)(c.palette[o.color].main,.7),"&:hover, &:active":{color:c.palette[o.color].main}}),a))})),S=Object(m.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.ownerState.size;return[t.label,t["label".concat(Object(p.a)(a))]]}})((function(e){var t=e.ownerState;return Object(n.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function k(e){return"Backspace"===e.key||"Delete"===e.key}var w=o.forwardRef((function(e,t){var a=Object(f.a)({props:e,name:"MuiChip"}),r=a.avatar,s=a.className,d=a.clickable,m=a.color,h=void 0===m?"default":m,x=a.component,v=a.deleteIcon,w=a.disabled,N=void 0!==w&&w,D=a.icon,P=a.label,T=a.onClick,I=a.onDelete,F=a.onKeyDown,R=a.onKeyUp,z=a.size,A=void 0===z?"medium":z,E=a.variant,V=void 0===E?"filled":E,L=Object(c.a)(a,y),H=o.useRef(null),B=Object(j.a)(H,t),W=function(e){e.stopPropagation(),I&&I(e)},_=!(!1===d||!T)||d,M="small"===A,U=_||I?O.a:x||"div",K=Object(n.a)({},a,{component:U,disabled:N,size:A,color:h,onDelete:!!I,clickable:_,variant:V}),q=function(e){var t=e.classes,a=e.disabled,r=e.size,c=e.color,n=e.onDelete,o=e.clickable,l=e.variant,s={root:["root",l,a&&"disabled","size".concat(Object(p.a)(r)),"color".concat(Object(p.a)(c)),o&&"clickable",o&&"clickableColor".concat(Object(p.a)(c)),n&&"deletable",n&&"deletableColor".concat(Object(p.a)(c)),"".concat(l).concat(Object(p.a)(c))],label:["label","label".concat(Object(p.a)(r))],avatar:["avatar","avatar".concat(Object(p.a)(r)),"avatarColor".concat(Object(p.a)(c))],icon:["icon","icon".concat(Object(p.a)(r)),"iconColor".concat(Object(p.a)(c))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(p.a)(r)),"deleteIconColor".concat(Object(p.a)(c)),"deleteIconOutlinedColor".concat(Object(p.a)(c))]};return Object(i.a)(s,g,t)}(K),Y=U===O.a?Object(n.a)({component:x||"div",focusVisibleClassName:q.focusVisible},I&&{disableRipple:!0}):{},J=null;if(I){var G=Object(l.default)("default"!==h&&("outlined"===V?q["deleteIconOutlinedColor".concat(Object(p.a)(h))]:q["deleteIconColor".concat(Object(p.a)(h))]),M&&q.deleteIconSmall);J=v&&o.isValidElement(v)?o.cloneElement(v,{className:Object(l.default)(v.props.className,q.deleteIcon,G),onClick:W}):Object(b.jsx)(u,{className:Object(l.default)(q.deleteIcon,G),onClick:W})}var Q=null;r&&o.isValidElement(r)&&(Q=o.cloneElement(r,{className:Object(l.default)(q.avatar,r.props.className)}));var X=null;return D&&o.isValidElement(D)&&(X=o.cloneElement(D,{className:Object(l.default)(q.icon,D.props.className)})),Object(b.jsxs)(C,Object(n.a)({as:U,className:Object(l.default)(q.root,s),disabled:!(!_||!N)||void 0,onClick:T,onKeyDown:function(e){e.currentTarget===e.target&&k(e)&&e.preventDefault(),F&&F(e)},onKeyUp:function(e){e.currentTarget===e.target&&(I&&k(e)?I(e):"Escape"===e.key&&H.current&&H.current.blur()),R&&R(e)},ref:B,ownerState:K},Y,L,{children:[Q||X,Object(b.jsx)(S,{className:Object(l.default)(q.label),ownerState:K,children:P}),J]}))}));t.a=w},3244:function(e,t,a){"use strict";a.r(t);var r,c=a(4),n=a(1325),o=a(183),l=a(1),i=a(15),s=a(60),d=a(120),b=a(14),u=a(149),j=a(3),p=a.n(j),O=a(7),f=a(35),m=a(61),h=a.n(m),x=Object(f.b)("todoApp/filters/getFilters",Object(O.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/todo-app/filters");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),g=Object(f.c)({}),v=g.getSelectors((function(e){return e.todoApp.filters})),y=v.selectAll,C=(v.selectById,Object(f.d)({name:"todoApp/filters",initialState:g.getInitialState({}),reducers:{},extraReducers:Object(c.a)({},x.fulfilled,g.setAll)}).reducer),S=Object(f.b)("todoApp/folders/getFolders",Object(O.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/todo-app/folders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),k=Object(f.c)({}),w=k.getSelectors((function(e){return e.todoApp.folders})),N=w.selectAll,D=(w.selectById,Object(f.d)({name:"todoApp/folders",initialState:k.getInitialState({}),reducers:{},extraReducers:Object(c.a)({},S.fulfilled,k.setAll)}).reducer),P=Object(f.b)("todoApp/labels/getLabels",Object(O.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/todo-app/labels");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),T=Object(f.c)({}),I=T.getSelectors((function(e){return e.todoApp.labels})),F=I.selectAll,R=I.selectEntities,z=(I.selectById,Object(f.d)({name:"todoApp/labels",initialState:T.getInitialState(null),reducers:{},extraReducers:Object(c.a)({},P.fulfilled,T.setAll)}).reducer),A=Object(f.b)("todoApp/todos/getTodos",function(){var e=Object(O.a)(p.a.mark((function e(t,a){var r,c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.getState,t=t||r().todoApp.todos.routeParams,e.next=4,h.a.get("/api/todo-app/todos",{params:t});case 4:return c=e.sent,e.next=7,c.data;case 7:return n=e.sent,e.abrupt("return",{data:n,routeParams:t});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(f.b)("todoApp/todos/addTodo",function(){var e=Object(O.a)(p.a.mark((function e(t,a){var r,c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,a.getState,e.next=3,h.a.post("/api/todo-app/new-todo",t);case 3:return c=e.sent,e.next=6,c.data;case 6:return n=e.sent,r(A()),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(f.b)("todoApp/todos/updateTodo",function(){var e=Object(O.a)(p.a.mark((function e(t,a){var r,c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,a.getState,e.next=3,h.a.post("/api/todo-app/update-todo",t);case 3:return c=e.sent,e.next=6,c.data;case 6:return n=e.sent,r(A()),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(f.b)("todoApp/todos/removeTodo",function(){var e=Object(O.a)(p.a.mark((function e(t,a){var r,c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,a.getState,e.next=3,h.a.post("/api/todo-app/remove-todo",t);case 3:return c=e.sent,e.next=6,c.data;case 6:return n=e.sent,r(A()),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),H=Object(f.c)({}),B=H.getSelectors((function(e){return e.todoApp.todos})),W=B.selectAll,_=(B.selectById,Object(f.d)({name:"todoApp/todos",initialState:H.getInitialState({searchText:"",orderBy:"",orderDescending:!1,routeParams:{},todoDialog:{type:"new",props:{open:!1},data:null}}),reducers:{setTodosSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}},toggleOrderDescending:function(e,t){e.orderDescending=!e.orderDescending},changeOrder:function(e,t){e.orderBy=t.payload},openNewTodoDialog:function(e,t){e.todoDialog={type:"new",props:{open:!0},data:null}},closeNewTodoDialog:function(e,t){e.todoDialog={type:"new",props:{open:!1},data:null}},openEditTodoDialog:function(e,t){e.todoDialog={type:"edit",props:{open:!0},data:t.payload}},closeEditTodoDialog:function(e,t){e.todoDialog={type:"edit",props:{open:!1},data:null}}},extraReducers:(r={},Object(c.a)(r,V.fulfilled,H.upsertOne),Object(c.a)(r,E.fulfilled,H.addOne),Object(c.a)(r,A.fulfilled,(function(e,t){var a=t.payload,r=a.data,c=a.routeParams;H.setAll(e,r),e.routeParams=c,e.searchText=""})),r)})),M=_.actions,U=M.setTodosSearchText,K=M.toggleOrderDescending,q=M.changeOrder,Y=M.openNewTodoDialog,J=M.closeNewTodoDialog,G=M.openEditTodoDialog,Q=M.closeEditTodoDialog,X=_.reducer,Z=Object(u.c)({todos:X,folders:D,labels:z,filters:C}),$=a(8),ee=a(17),te=a(181),ae=a(3063),re=a(44),ce=a(62),ne=a(21),oe=a(1301),le=a(1283),ie=a(1290),se=a(1451),de=a(171),be=a(447),ue=a(1252),je=a(1408),pe=a(1407),Oe=a(1269),fe=a(1296),me=a(1287),he=a(1288),xe=a(1271),ge=a(1266),ve=a(668),ye=a(1295),Ce=a(1298),Se=a(1305),ke=a(366),we=a(70),Ne=a(0),De={id:"",title:"",notes:"",startDate:new Date,dueDate:new Date,completed:!1,starred:!1,important:!1,deleted:!1,labels:[]},Pe=we.d().shape({title:we.f().required("You must enter a title")});var Te=function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.todoApp.todos.todoDialog})),r=Object(i.d)(F),c=Object(l.useState)(null),n=Object(ee.a)(c,2),o=n[0],s=n[1],d=Object(re.f)({mode:"onChange",defaultValues:De,resolver:Object(te.a)(Pe)}),b=d.watch,u=d.handleSubmit,j=d.formState,p=d.reset,O=d.control,f=d.setValue,m=j.errors,h=j.isValid,x=j.dirtyFields,g=b("id"),v=b("labels"),y=b("deuDate"),C=b("startDate"),S=Object(l.useCallback)((function(){"edit"===a.type&&a.data&&p(Object($.a)({},a.data)),"new"===a.type&&p(Object($.a)(Object($.a)({},De),a.data))}),[a.data,a.type,p]);function k(){return"edit"===a.type?t(Q()):t(J())}return Object(l.useEffect)((function(){a.props.open&&S()}),[a.props.open,S]),Object(Ne.jsxs)(ue.a,Object($.a)(Object($.a)({},a.props),{},{onClose:k,fullWidth:!0,maxWidth:"sm",scroll:"body",children:[Object(Ne.jsx)(oe.a,{position:"static",elevation:0,children:Object(Ne.jsx)(Se.a,{className:"flex w-full",children:Object(Ne.jsx)(ke.a,{variant:"subtitle1",color:"inherit",children:"new"===a.type?"New Todo":"Edit Todo"})})}),Object(Ne.jsxs)("form",{onSubmit:u((function(e){"new"===a.type?t(E(Object($.a)({id:ce.a.generateGUID()},e))):t(V(Object($.a)(Object($.a)({},a.data),e))),k()})),children:[Object(Ne.jsxs)(pe.a,{classes:{root:"p-0"},children:[Object(Ne.jsxs)("div",{className:"mb-16",children:[Object(Ne.jsxs)("div",{className:"flex items-center justify-between p-12",children:[Object(Ne.jsx)("div",{className:"flex",children:Object(Ne.jsx)(re.a,{name:"completed",control:O,render:function(e){var t=e.field,a=t.onChange,r=t.value;return Object(Ne.jsx)(he.a,{tabIndex:-1,disableRipple:!0,onClick:function(e){return a(!r)},size:"large",children:r?Object(Ne.jsx)(me.a,{color:"secondary",children:"check_circle"}):Object(Ne.jsx)(me.a,{color:"action",children:"radio_button_unchecked"})})}})}),Object(Ne.jsxs)("div",{className:"flex items-center justify-start",children:[Object(Ne.jsx)(re.a,{name:"important",control:O,render:function(e){var t=e.field,a=t.onChange,r=t.value;return Object(Ne.jsx)(he.a,{onClick:function(){return a(!r)},size:"large",children:r?Object(Ne.jsx)(me.a,{style:{color:de.a[500]},children:"error"}):Object(Ne.jsx)(me.a,{children:"error_outline"})})}}),Object(Ne.jsx)(re.a,{name:"starred",control:O,render:function(e){var t=e.field,a=t.onChange,r=t.value;return Object(Ne.jsx)(he.a,{onClick:function(){return a(!r)},size:"large",children:r?Object(Ne.jsx)(me.a,{style:{color:be.a[500]},children:"star"}):Object(Ne.jsx)(me.a,{children:"star_outline"})})}}),Object(Ne.jsxs)("div",{children:[Object(Ne.jsx)(he.a,{"aria-owns":o?"label-menu":null,"aria-haspopup":"true",onClick:function(e){return s(e.currentTarget)},size:"large",children:Object(Ne.jsx)(me.a,{children:"label"})}),Object(Ne.jsx)(re.a,{name:"labels",control:O,render:function(e){var t=e.field,a=t.onChange,c=t.value;return Object(Ne.jsx)(ve.a,{id:"label-menu",anchorEl:o,open:Boolean(o),onClose:function(){return s(null)},children:r.length>0&&r.map((function(e){return Object(Ne.jsxs)(ye.a,{onClick:function(t){return a(ne.a.xor(c,[e.id]))},children:[Object(Ne.jsx)(xe.a,{className:"min-w-24",children:Object(Ne.jsx)(me.a,{color:"action",children:c.includes(e.id)?"check_box":"check_box_outline_blank"})}),Object(Ne.jsx)(ge.a,{className:"mx-8",primary:e.title,disableTypography:!0}),Object(Ne.jsx)(xe.a,{className:"min-w-24",children:Object(Ne.jsx)(me.a,{style:{color:e.color},color:"action",children:"label"})})]},e.id)}))})}})]})]})]}),Object(Ne.jsx)(Oe.a,{className:"mx-24"})]}),v.length>0&&Object(Ne.jsx)("div",{className:"flex flex-wrap w-full px-12 sm:px-20 mb-16",children:v.map((function(e){var t=ne.a.find(r,{id:e});return Object(Ne.jsx)(se.a,{avatar:Object(Ne.jsx)(le.a,{classes:{colorDefault:"bg-transparent"},children:Object(Ne.jsx)(me.a,{className:"text-20",style:{color:t.color},children:"label"})}),label:t.title,onDelete:function(t){return f("labels",v.filter((function(t){return e!==t})))},className:"mx-4 my-4",classes:{label:"px-8"}},e)}))}),Object(Ne.jsxs)("div",{className:"px-16 sm:px-24",children:[Object(Ne.jsx)(fe.a,{className:"mt-8 mb-16",required:!0,fullWidth:!0,children:Object(Ne.jsx)(re.a,{name:"title",control:O,render:function(e){var t,a=e.field;return Object(Ne.jsx)(Ce.a,Object($.a)(Object($.a)({},a),{},{label:"Title",autoFocus:!0,error:!!m.title,helperText:null===m||void 0===m||null===(t=m.title)||void 0===t?void 0:t.message,required:!0,variant:"outlined"}))}})}),Object(Ne.jsx)(fe.a,{className:"mt-8 mb-16",required:!0,fullWidth:!0,children:Object(Ne.jsx)(re.a,{name:"notes",control:O,render:function(e){var t=e.field;return Object(Ne.jsx)(Ce.a,Object($.a)(Object($.a)({},t),{},{label:"Notes",multiline:!0,rows:"6",variant:"outlined"}))}})}),Object(Ne.jsxs)("div",{className:"flex -mx-4",children:[Object(Ne.jsx)(re.a,{name:"startDate",control:O,defaultValue:"",render:function(e){var t=e.field,a=t.onChange,r=t.value;return Object(Ne.jsx)(ae.a,{value:r,onChange:a,maxDate:y,renderInput:function(e){return Object(Ne.jsx)(Ce.a,Object($.a)({label:"Start Date",className:"mt-8 mb-16 mx-4"},e))}})}}),Object(Ne.jsx)(re.a,{name:"dueDate",control:O,defaultValue:"",render:function(e){var t=e.field,a=t.onChange,r=t.value;return Object(Ne.jsx)(ae.a,{value:r,onChange:a,minDate:C,renderInput:function(e){return Object(Ne.jsx)(Ce.a,Object($.a)({label:"Due Date",className:"mt-8 mb-16 mx-4"},e))}})}})]})]})]}),"new"===a.type?Object(Ne.jsx)(je.a,{className:"justify-between px-8 py-16",children:Object(Ne.jsx)("div",{className:"px-16",children:Object(Ne.jsx)(ie.a,{type:"submit",variant:"contained",color:"secondary",disabled:ne.a.isEmpty(x)||!h,children:"Add"})})}):Object(Ne.jsxs)(je.a,{className:"justify-between px-8 py-16",children:[Object(Ne.jsx)("div",{className:"px-16",children:Object(Ne.jsx)(ie.a,{type:"submit",variant:"contained",color:"secondary",disabled:ne.a.isEmpty(x)||!h,children:"Save"})}),Object(Ne.jsx)(he.a,{className:"min-w-auto",onClick:function(){t(L(g)).then((function(){k()}))},size:"large",children:Object(Ne.jsx)(me.a,{children:"delete"})})]})]})]}))},Ie=a(1279),Fe=a(1289),Re=a(677),ze=a(1286),Ae=a(37);var Ee=function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.todoApp.todos.searchText})),r=Object(i.d)(Ae.e);return Object(Ne.jsx)(ze.a,{theme:r,children:Object(Ne.jsx)("div",{className:"flex flex-1",children:Object(Ne.jsxs)(Re.a,{className:"flex items-center w-full h-48 sm:h-56 p-16 ltr:pl-4 lg:ltr:pl-16 rtl:pr-4 lg:rtl:pr-16 shadow",children:[Object(Ne.jsx)(Ie.a,{lgUp:!0,children:Object(Ne.jsx)(he.a,{onClick:function(t){return e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar",size:"large",children:Object(Ne.jsx)(me.a,{children:"menu"})})}),Object(Ne.jsx)(me.a,{color:"action",children:"search"}),Object(Ne.jsx)(Fe.a,{placeholder:"Search",className:"px-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t(U(e))}})]})})})},Ve=a(1294),Le=a(1276),He=a(1303),Be=Object(b.a)("div")((function(e){e.theme;return{display:"flex",alignItems:"center",height:20,borderRadius:10,padding:"0 6px",fontSize:10,backgroundColor:"rgba(0,0,0,.08);","& > span":{width:8,height:8,marginRight:4,borderRadius:"50%",backgroundColor:e.color}}}));var We=function(e){return Object(Ne.jsxs)(Be,{className:e.className,color:e.color,children:[Object(Ne.jsx)("span",{}),Object(Ne.jsx)("div",{children:e.title})]})},_e=Object(b.a)(He.a)((function(e){e.theme;var t=e.completed;return Object($.a)({},t&&{background:"rgba(0,0,0,0.03)","& .todo-title, & .todo-notes":{textDecoration:"line-through"}})}));var Me=function(e){var t=Object(i.c)(),a=Object(i.d)(R);return Object(Ne.jsxs)(_e,{className:"py-20 px-0 sm:px-8",completed:e.todo.completed?1:0,onClick:function(a){a.preventDefault(),t(G(e.todo))},dense:!0,button:!0,children:[Object(Ne.jsx)(he.a,{tabIndex:-1,disableRipple:!0,onClick:function(a){a.stopPropagation(),t(V(Object($.a)(Object($.a)({},e.todo),{},{completed:!e.todo.completed})))},size:"large",children:e.todo.completed?Object(Ne.jsx)(me.a,{color:"secondary",children:"check_circle"}):Object(Ne.jsx)(me.a,{color:"action",children:"radio_button_unchecked"})}),Object(Ne.jsxs)("div",{className:"flex flex-1 flex-col relative overflow-hidden px-8",children:[Object(Ne.jsx)(ke.a,{className:"todo-title truncate text-14 font-medium",color:e.todo.completed?"textSecondary":"inherit",children:e.todo.title}),Object(Ne.jsx)(ke.a,{color:"textSecondary",className:"todo-notes truncate",children:ne.a.truncate(e.todo.notes.replace(/<(?:.|\n)*?>/gm,""),{length:180})}),Object(Ne.jsx)("div",{className:"flex -mx-2 mt-8",children:e.todo.labels.map((function(e){return Object(Ne.jsx)(We,{className:"mx-2 mt-4",title:a[e].title,color:a[e].color},e)}))})]}),Object(Ne.jsxs)("div",{className:"px-8",children:[Object(Ne.jsx)(he.a,{onClick:function(a){a.preventDefault(),a.stopPropagation(),t(V(Object($.a)(Object($.a)({},e.todo),{},{important:!e.todo.important})))},size:"large",children:e.todo.important?Object(Ne.jsx)(me.a,{style:{color:de.a[500]},children:"error"}):Object(Ne.jsx)(me.a,{children:"error_outline"})}),Object(Ne.jsx)(he.a,{onClick:function(a){a.preventDefault(),a.stopPropagation(),t(V(Object($.a)(Object($.a)({},e.todo),{},{starred:!e.todo.starred})))},size:"large",children:e.todo.starred?Object(Ne.jsx)(me.a,{style:{color:be.a[500]},children:"star"}):Object(Ne.jsx)(me.a,{children:"star_outline"})})]})]})};var Ue=function(e){var t=Object(i.d)(W),a=Object(i.d)((function(e){return e.todoApp.todos.searchText})),r=Object(i.d)((function(e){return e.todoApp.todos.orderBy})),c=Object(i.d)((function(e){return e.todoApp.todos.orderDescending})),n=Object(l.useState)(null),o=Object(ee.a)(n,2),s=o[0],d=o[1];if(Object(l.useEffect)((function(){var e;t&&d(ne.a.orderBy(0===(e=a).length?t:ce.a.filterArrayByString(t,e),[r],[c?"desc":"asc"]))}),[t,a,r,c]),!s)return null;if(0===s.length)return Object(Ne.jsx)(Le.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:Object(Ne.jsx)(ke.a,{color:"textSecondary",variant:"h5",children:"There are no todos!"})});var b={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return Object(Ne.jsx)(Ve.a,{className:"p-0",children:Object(Ne.jsx)(Le.a.div,{variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",children:s.map((function(e){return Object(Ne.jsx)(Le.a.div,{variants:b,children:Object(Ne.jsx)(Me,{todo:e})},e.id)}))})})},Ke=a(105),qe=a(1313),Ye=Object(b.a)(He.a)((function(e){return{color:"inherit!important",textDecoration:"none!important",height:40,width:"100%",borderRadius:6,paddingLeft:12,paddingRight:12,marginBottom:4,"&.active":{backgroundColor:"light"===e.theme.palette.mode?"rgba(0, 0, 0, .05)!important":"rgba(255, 255, 255, .1)!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}}}));var Je=function(e){var t=Object(i.c)(),a=Object(i.d)(F),r=Object(i.d)(N),c=Object(i.d)(y);return Object(Ne.jsxs)(Le.a.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1,transition:{delay:.4}},className:"flex-auto border-l-1 border-solid",children:[Object(Ne.jsx)("div",{className:"p-24 pb-16",children:Object(Ne.jsx)(ie.a,{onClick:function(){t(Y())},variant:"contained",color:"secondary",className:"w-full",children:"Add task"})}),Object(Ne.jsxs)("div",{className:"px-12",children:[Object(Ne.jsx)(Ve.a,{children:r.length>0&&r.map((function(e){return Object(Ne.jsxs)(Ye,{button:!0,component:Ke.a,to:"/apps/todo/".concat(e.handle),activeClassName:"active",children:[Object(Ne.jsx)(me.a,{className:"list-item-icon",color:"action",children:e.icon}),Object(Ne.jsx)(ge.a,{primary:e.title,disableTypography:!0})]},e.id)}))}),Object(Ne.jsxs)(Ve.a,{children:[Object(Ne.jsx)(qe.a,{className:"pl-12",disableSticky:!0,children:"FILTERS"}),c.length>0&&c.map((function(e){return Object(Ne.jsxs)(Ye,{button:!0,component:Ke.a,to:"/apps/todo/filter/".concat(e.handle),activeClassName:"active",children:[Object(Ne.jsx)(me.a,{className:"list-item-icon",color:"action",children:e.icon}),Object(Ne.jsx)(ge.a,{primary:e.title,disableTypography:!0})]},e.id)}))]}),Object(Ne.jsxs)(Ve.a,{children:[Object(Ne.jsx)(qe.a,{className:"pl-12",disableSticky:!0,children:"LABELS"}),a.length>0&&a.map((function(e){return Object(Ne.jsxs)(Ye,{button:!0,component:Ke.a,to:"/apps/todo/label/".concat(e.handle),children:[Object(Ne.jsx)(me.a,{className:"list-item-icon",style:{color:e.color},color:"action",children:"label"}),Object(Ne.jsx)(ge.a,{primary:e.title,disableTypography:!0})]},e.id)}))]})]})]})},Ge={creapond:"johndoe@creapond.com",withinpixels:"admin@kimm.re.kr"};var Qe=function(){var e=Object(l.useState)("creapond"),t=Object(ee.a)(e,2),a=t[0],r=t[1];return Object(Ne.jsxs)("div",{className:"flex flex-col justify-center h-full p-24",children:[Object(Ne.jsxs)("div",{className:"flex items-center flex-1",children:[Object(Ne.jsx)(me.a,{component:Le.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"check_box"}),Object(Ne.jsx)(ke.a,{component:Le.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"To-Do"})]}),Object(Ne.jsx)(Le.a.div,{initial:{y:20,opacity:.8},animate:{y:0,opacity:1,transition:{delay:.3}},children:Object(Ne.jsx)(Ce.a,{id:"account-selection",select:!0,label:a,value:a,onChange:function(e){r(e.target.value)},placeholder:"Select Account",margin:"normal",variant:"filled",children:Object.keys(Ge).map((function(e,t){return Object(Ne.jsx)(ye.a,{value:e,children:Ge[e]},e)}))})})]})},Xe=a(1282);var Ze=function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.todoApp.todos.orderBy})),r=Object(i.d)((function(e){return e.todoApp.todos.orderDescending}));return Object(Ne.jsxs)("div",{className:"flex justify-between w-full",children:[Object(Ne.jsx)("div",{className:"flex"}),Object(Ne.jsxs)("div",{className:"flex items-center",children:[Object(Ne.jsx)(fe.a,{className:"",variant:"filled",children:Object(Ne.jsxs)(Xe.a,{value:a,onChange:function(e){t(q(e.target.value))},displayEmpty:!0,name:"filter",classes:{select:"py-8"},children:[Object(Ne.jsx)(ye.a,{value:"",children:Object(Ne.jsx)("em",{children:"Order by"})}),Object(Ne.jsx)(ye.a,{value:"startDate",children:"Start Date"}),Object(Ne.jsx)(ye.a,{value:"dueDate",children:"Due Date"}),Object(Ne.jsx)(ye.a,{value:"title",children:"Title"})]})}),Object(Ne.jsx)(he.a,{onClick:function(e){return t(K())},size:"large",children:Object(Ne.jsx)(me.a,{style:{transform:r?"scaleY(-1)":"scaleY(1)"},children:"sort"})})]})]})},$e=Object(b.a)(n.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(c.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}}));t.default=Object(o.a)("todoApp",Z)((function(e){var t=Object(i.c)(),a=Object(l.useRef)(null),r=Object(s.j)();return Object(l.useEffect)((function(){t(x()),t(S()),t(P())}),[t]),Object(d.b)((function(){t(A(r))}),[t,r]),Object(Ne.jsxs)(Ne.Fragment,{children:[Object(Ne.jsx)($e,{header:Object(Ne.jsx)(Ee,{pageLayout:a}),contentToolbar:Object(Ne.jsx)(Ze,{}),content:Object(Ne.jsx)(Ue,{}),leftSidebarHeader:Object(Ne.jsx)(Qe,{}),leftSidebarContent:Object(Ne.jsx)(Je,{}),ref:a,innerScroll:!0}),Object(Ne.jsx)(Te,{})]})}))}}]);