(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[204],{3189:function(e,a,t){"use strict";t.r(a);var i=t(8),l=t(1276),s=t(44),n=t(181),c=t(1290),o=t(1291),r=t(1292),m=t(1298),d=t(366),u=t(40),x=t(70),j=t(21),f=t(0),b=x.d().shape({email:x.f().email("You must enter a valid email").required("You must enter a email")}),p={email:""};a.default=function(){var e=Object(s.f)({mode:"onChange",defaultValues:p,resolver:Object(n.a)(b)}),a=e.control,t=e.formState,x=e.handleSubmit,h=e.reset,v=t.isValid,O=t.dirtyFields,y=t.errors;return Object(f.jsxs)("div",{className:"flex flex-col flex-auto p-16 sm:p-24 md:flex-row md:p-0 overflow-hidden",children:[Object(f.jsxs)("div",{className:"flex flex-col flex-grow-0 items-center  p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left",children:[Object(f.jsx)(l.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1,transition:{delay:.1}},children:Object(f.jsx)("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})}),Object(f.jsx)(l.a.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:Object(f.jsxs)(d.a,{className:"text-32 sm:text-44 font-semibold leading-tight",children:["Welcome ",Object(f.jsx)("br",{}),"to the ",Object(f.jsx)("br",{})," FUSE React!"]})}),Object(f.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:Object(f.jsx)(d.a,{variant:"subtitle1",className:"mt-32 font-medium",children:"Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more."})})]}),Object(f.jsx)(o.a,{component:l.a.div,initial:{x:200},animate:{x:0},transition:{bounceDamping:0},className:"w-full max-w-400 mx-auto m-16 md:m-0 rounded-20 md:rounded-none",square:!0,layout:!0,children:Object(f.jsxs)(r.a,{className:"flex flex-col items-center justify-center p-16 sm:p-32 md:p-48 md:pt-128 ",children:[Object(f.jsx)(d.a,{variant:"h6",className:"mb-24 font-semibold text-18 sm:text-24",children:"Recover your password"}),Object(f.jsxs)("form",{name:"recoverForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:x((function(){h(p)})),children:[Object(f.jsx)(s.a,{name:"email",control:a,render:function(e){var a,t=e.field;return Object(f.jsx)(m.a,Object(i.a)(Object(i.a)({},t),{},{className:"mb-16",label:"Email",autoFocus:!0,type:"email",error:!!y.email,helperText:null===y||void 0===y||null===(a=y.email)||void 0===a?void 0:a.message,variant:"outlined",fullWidth:!0}))}}),Object(f.jsx)(c.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Reset",disabled:j.a.isEmpty(O)||!v,type:"submit",children:"Send reset link"})]}),Object(f.jsx)("div",{className:"flex flex-col items-center justify-center pt-32 pb-24",children:Object(f.jsx)(u.a,{className:"font-normal",to:"/pages/auth/login-2",children:"Go back to login"})})]})})]})}}}]);