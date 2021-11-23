(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[125],{1495:function(e,t,c){"use strict";c.d(t,"b",(function(){return b})),c.d(t,"c",(function(){return j}));var a,r=c(4),n=c(8),s=c(3),i=c.n(s),u=c(7),o=c(35),l=c(61),d=c.n(l),p=c(57),b=Object(o.b)("academyApp/course/getCourse",function(){var e=Object(u.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/academy-app/course",{params:t});case 2:return c=e.sent,e.next=5,c.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(o.b)("academyApp/course/updateCourse",function(){var e=Object(u.a)(i.a.mark((function e(t,c){var a,r,s,u,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.getState,r=c.dispatch,s=a().academyApp.course.id,e.next=4,d.a.post("/api/academy-app/course/update",Object(n.a)({id:s},t));case 4:return u=e.sent,e.next=7,u.data;case 7:return o=e.sent,r(Object(p.c)({message:"Course Saved"})),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),f=Object(o.d)({name:"academyApp/course",initialState:null,reducers:{},extraReducers:(a={},Object(r.a)(a,b.fulfilled,(function(e,t){return t.payload})),Object(r.a)(a,j.fulfilled,(function(e,t){return Object(n.a)(Object(n.a)({},e),t.payload)})),a)});t.a=f.reducer},1496:function(e,t,c){"use strict";c.d(t,"b",(function(){return l})),c.d(t,"c",(function(){return b}));var a=c(4),r=c(3),n=c.n(r),s=c(7),i=c(35),u=c(61),o=c.n(u),l=Object(i.b)("academyApp/categories/getCourses",Object(s.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/academy-app/courses");case 2:return t=e.sent,e.next=5,t.data;case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))),d=Object(i.c)({}),p=d.getSelectors((function(e){return e.academyApp.courses})),b=p.selectAll,j=(p.selectById,Object(i.d)({name:"academyApp/courses",initialState:d.getInitialState({}),reducers:{},extraReducers:Object(a.a)({},l.fulfilled,d.setAll)}));t.a=j.reducer},1497:function(e,t,c){"use strict";c.d(t,"b",(function(){return l})),c.d(t,"c",(function(){return b}));var a=c(4),r=c(3),n=c.n(r),s=c(7),i=c(35),u=c(61),o=c.n(u),l=Object(i.b)("academyApp/categories/getCategories",Object(s.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/academy-app/categories");case 2:return t=e.sent,e.next=5,t.data;case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))),d=Object(i.c)({}),p=d.getSelectors((function(e){return e.academyApp.categories})),b=p.selectAll,j=(p.selectById,Object(i.d)({name:"academyApp/categories",initialState:d.getInitialState({}),reducers:{},extraReducers:Object(a.a)({},l.fulfilled,d.setAll)}));t.a=j.reducer},1534:function(e,t,c){"use strict";var a=c(149),r=c(1495),n=c(1496),s=c(1497),i=Object(a.c)({categories:s.a,courses:n.a,course:r.a});t.a=i},3060:function(e,t,c){"use strict";c.r(t);var a=c(4),r=c(212),n=c(14),s=c(48),i=c(51),u=c(155),o=c(1302),l=c(1279),d=c(1287),p=c(1288),b=c(677),j=c(3264),f=c(3250),m=c(3263),x=c(366),O=c(183),h=c(1),v=c(15),g=c(60),y=c(40),w=c(120),S=c(1492),A=c.n(S),k=c(1534),C=c(1495),N=c(0),_=Object(n.a)(r.a)((function(e){var t=e.theme;return{"& .FusePageSimple-header":Object(a.a)({minHeight:72,height:72},t.breakpoints.up("lg"),{borderBottomLeftRadius:20}),"& .FusePageSimple-content":{display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"hidden"},"& .FusePageSimple-sidebar":{padding:24,border:0}}}));t.default=Object(O.a)("academyApp",k.a)((function(e){var t=Object(v.c)(),c=Object(v.d)((function(e){return e.academyApp.course})),a=Object(s.a)(),r=Object(g.j)(),n=Object(h.useRef)(null);function O(e){t(Object(C.c)({activeStep:e+1}))}Object(w.b)((function(){t(Object(C.b)(r))}),[t,r]),Object(h.useEffect)((function(){c&&0===c.activeStep&&t(Object(C.c)({activeStep:1}))}),[t,c]);var S=c&&0!==c.activeStep?c.activeStep:1;return Object(N.jsx)(_,{header:Object(N.jsxs)("div",{className:"flex flex-1 items-center px-16 lg:px-24",children:[Object(N.jsx)(l.a,{lgUp:!0,children:Object(N.jsx)(p.a,{onClick:function(e){return n.current.toggleLeftSidebar()},"aria-label":"open left sidebar",size:"large",children:Object(N.jsx)(d.a,{children:"menu"})})}),Object(N.jsx)(p.a,{to:"/apps/academy/courses",component:y.a,size:"large",children:Object(N.jsx)(d.a,{children:"ltr"===a.direction?"arrow_back":"arrow_forward"})}),c&&Object(N.jsx)(x.a,{className:"flex-1 text-20 mx-16",children:c.title})]}),content:c&&Object(N.jsxs)("div",{className:"flex flex-1 relative overflow-hidden",children:[Object(N.jsx)(i.a,{className:"w-full overflow-auto",children:Object(N.jsx)(A.a,{className:"overflow-hidden",index:S-1,enableMouseEvents:!0,onChangeIndex:O,children:c.steps.map((function(e,t){return Object(N.jsx)("div",{className:"flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64",children:Object(N.jsx)(b.a,{className:"w-full max-w-lg rounded-20 p-16 md:p-24 shadow text-14 leading-normal",children:Object(N.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content},dir:a.direction})})},e.id)}))})}),Object(N.jsx)("div",{className:"flex justify-center w-full absolute left-0 right-0 bottom-0 pb-16 md:pb-32",children:Object(N.jsxs)("div",{className:"flex justify-between w-full max-w-xl px-8",children:[Object(N.jsx)("div",{children:1!==S&&Object(N.jsx)(o.a,{className:"",color:"secondary",onClick:function(){t(Object(C.c)({activeStep:c.activeStep-1}))},children:Object(N.jsx)(d.a,{children:"ltr"===a.direction?"chevron_left":"chevron_right"})})}),Object(N.jsx)("div",{children:S<c.steps.length?Object(N.jsx)(o.a,{className:"",color:"secondary",onClick:function(){t(Object(C.c)({activeStep:c.activeStep+1}))},children:Object(N.jsx)(d.a,{children:"ltr"===a.direction?"chevron_right":"chevron_left"})}):Object(N.jsx)(o.a,{sx:{background:"".concat(u.a[500],"!important"),color:"white!important"},to:"/apps/academy/courses",component:y.a,children:Object(N.jsx)(d.a,{children:"check"})})})]})})]}),leftSidebarContent:c&&Object(N.jsx)(m.a,{classes:{root:"bg-transparent"},activeStep:S-1,orientation:"vertical",children:c.steps.map((function(e,t){return Object(N.jsx)(j.a,{onClick:function(){return O(t)},children:Object(N.jsx)(f.a,{sx:{cursor:"pointer!important"},children:e.title})},e.id)}))}),innerScroll:!0,ref:n})}))}}]);