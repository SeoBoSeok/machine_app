(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[175],{3240:function(e,t,n){"use strict";n.r(t);var a,c=n(4),i=n(212),l=n(183),r=n(1),s=n(15),o=n(14),d=n(1252),u=n(3),j=n.n(u),b=n(7),m=n(35),h=n(61),x=n.n(h),f=Object(m.b)("notesApp/labels/getLabels",Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/notes-app/labels");case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),p=Object(m.b)("notesApp/labels/updateLabels",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/notes-app/update-labels",{labels:Object.values(t)});case 2:return n=e.sent,e.next=5,n.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(m.c)({}),v=O.getSelectors((function(e){return e.notesApp.labels})),g=v.selectAll,y=v.selectEntities,N=(v.selectById,Object(m.d)({name:"notesApp/labels",initialState:O.getInitialState({labelsDialogOpen:!1}),reducers:{openLabelsDialog:function(e,t){e.labelsDialogOpen=!0},closeLabelsDialog:function(e,t){e.labelsDialogOpen=!1}},extraReducers:(a={},Object(c.a)(a,f.fulfilled,O.setAll),Object(c.a)(a,p.fulfilled,O.setAll),a)})),w=N.actions,k=w.openLabelsDialog,C=w.closeLabelsDialog,S=N.reducer,z=n(8),D=n(17),A=n(120),I=n(181),L=n(44),T=n(21),E=n(1298),V=n(1287),R=n(1288),_=n(1289),F=n(1306),H=n(1294),P=n(1303),M=n(366),B=n(62);var U=function(e){return e=e||{},T.a.defaults(e,{id:B.a.generateGUID(),name:"",handle:B.a.handleize(e.name||"")})},W=n(6),q=n(70),G=n(0),J={name:""},Y=q.d().shape({name:q.f().required("You must enter a label title")});var K=function(e){var t=Object(s.c)(),n=Object(s.d)((function(e){return e.notesApp.labels.entities})),a=Object(r.useState)(n),c=Object(D.a)(a,2),i=c[0],l=c[1],o=Object(L.f)({mode:"onChange",defaultValues:J,resolver:Object(I.a)(Y)}),d=o.control,u=o.formState,j=o.handleSubmit,b=o.reset,m=u.isValid,h=u.dirtyFields,x=u.errors;Object(r.useEffect)((function(){l(n)}),[n]);var f=Object(A.a)((function(e){t(p(e))}),300);return Object(r.useEffect)((function(){i&&!T.a.isEqual(i,n)&&f(i)}),[f,n,i]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(M.a,{className:"text-16 mb-8 font-semibold",children:"Edit Labels"}),Object(G.jsxs)(H.a,{dense:!0,children:[Object(G.jsx)("form",{onSubmit:j((function(e){var t=U(e);l(T.a.setIn(i,t.id,t)),b(J)})),children:Object(G.jsx)(P.a,{className:"p-0 mb-16",dense:!0,children:Object(G.jsx)(L.a,{name:"name",control:d,render:function(e){var t,n=e.field;return Object(G.jsx)(E.a,Object(z.a)(Object(z.a)({},n),{},{className:Object(W.default)("flex flex-1"),error:!!x.name,helperText:null===x||void 0===x||null===(t=x.name)||void 0===t?void 0:t.message,placeholder:"Create new label",variant:"outlined",InputProps:{startAdornment:Object(G.jsx)(F.a,{position:"start",children:Object(G.jsx)(V.a,{className:"list-item-icon text-16",color:"action",children:"add"})}),endAdornment:Object(G.jsx)(F.a,{position:"end",children:Object(G.jsx)(R.a,{className:"w-32 h-32 p-0","aria-label":"Delete",disabled:T.a.isEmpty(h)||!m,type:"submit",size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:"check"})})})}}))}})})}),Object(r.useMemo)((function(){return Object.entries(i).map((function(e){var t=Object(D.a)(e,2),n=(t[0],t[1]);return Object(G.jsxs)(P.a,{className:"p-0 mb-8",dense:!0,children:[Object(G.jsx)(V.a,{className:"list-item-icon text-16",color:"action",children:"label"}),Object(G.jsx)(_.a,{className:Object(W.default)("flex flex-1 mx-8"),name:"name",value:n.name,onChange:function(e){return function(e,t){var n=U(T.a.setIn(t,e.target.name,e.target.value));l(T.a.setIn(i,n.id,n))}(e,n)},disableUnderline:!0}),Object(G.jsx)(R.a,{className:"w-32 h-32 mx-4 p-0","aria-label":"Delete",onClick:function(e){return function(e){l(T.a.omit(i,[e.id]))}(n)},size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:"delete"})})]},n.id)}))}),[i])]})]})};var Q=function(e){var t=Object(s.c)(),n=Object(s.d)((function(e){return e.notesApp.labels.labelsDialogOpen}));return Object(G.jsx)(d.a,{classes:{paper:"w-full max-w-320 p-16 m-24"},onClose:function(e){return t(C())},open:n,children:Object(G.jsx)(K,{})})},X=n(1208),Z=n(51),$=n(1290),ee=n(1302),te=n(1264);var ne=function(e){return e=e||{},T.a.defaults(e,{id:B.a.generateGUID(),title:"",description:"",archive:!1,image:"",time:null,reminder:null,checklist:[],labels:[]})},ae=n(1451),ce=n(40);var ie=function(e){var t=Object(s.d)(y);if(!t)return null;var n=t[e.id];if(!n)return null;var a=e.linkable?{component:ce.a,onClick:function(e){e.stopPropagation()},to:"/apps/notes/labels/".concat(n.handle,"/").concat(n.id)}:{};return Object(G.jsx)(ae.a,Object(z.a)(Object(z.a)({},a),{},{label:n.name,classes:Object(z.a)({root:Object(W.default)("h-24",e.className),label:"px-12 py-4 text-11",deleteIcon:"w-16"},e.classes),variant:"outlined",onDelete:e.onDelete}))},le=n(213);var re=function(e){return e.date?Object(G.jsx)(ae.a,{icon:Object(G.jsx)(V.a,{className:"text-16",children:"access_time"}),label:Object(le.a)(new Date(e.date),"MMM dd yy, h:mm"),classes:Object(z.a)({root:Object(W.default)("h-24",e.className),label:"px-12 py-4 text-11",deleteIcon:"w-16"},e.classes),variant:"outlined",onDelete:e.onDelete}):null},se=n(60),oe=n(20);var de=function(e){return e=e||{},T.a.defaults(e,{id:B.a.generateGUID(),text:"",checked:!1})},ue={text:""},je=q.d().shape({text:q.f().required("You must enter a label title")});var be=function(e){var t=Object(L.f)({mode:"onChange",defaultValues:ue,resolver:Object(I.a)(je)}),n=t.control,a=t.formState,c=t.handleSubmit,i=t.reset,l=a.isValid,r=a.dirtyFields,s=a.errors;return Object(G.jsx)("form",{onSubmit:c((function(t){e.onListItemAdd(de(t)),i(ue)})),children:Object(G.jsx)(P.a,{className:"p-0",dense:!0,children:Object(G.jsx)(L.a,{name:"text",control:n,render:function(e){var t,n=e.field;return Object(G.jsx)(E.a,Object(z.a)(Object(z.a)({},n),{},{className:"flex flex-1",error:!!s.text,helperText:null===s||void 0===s||null===(t=s.text)||void 0===t?void 0:t.message,placeholder:"Add an item",variant:"standard",autoFocus:!0,hiddenLabel:!0,InputProps:{disableUnderline:!0,className:"px-2",startAdornment:Object(G.jsx)(F.a,{position:"start",children:Object(G.jsx)(R.a,{className:"w-32 h-32 p-0 -mx-6","aria-label":"Add",type:"submit",disabled:T.a.isEmpty(r)||!l,size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:"add"})})})}}))}})})})},me=n(1362);var he=function(e){function t(t){e.onListItemChange(T.a.setIn(e.item,t.target.name,"checkbox"===t.target.type?t.target.checked:t.target.value))}return e.item?Object(G.jsxs)(P.a,{className:"p-0",dense:!0,children:[Object(G.jsx)(me.a,{className:"p-0",checked:e.item.checked,tabIndex:-1,disableRipple:!0,name:"checked",onChange:t,color:"default"}),Object(G.jsx)(_.a,{className:Object(W.default)("flex flex-1 mx-8",e.item.checked&&"line-through opacity-50"),name:"text",value:e.item.text,onChange:t,disableUnderline:!0}),Object(G.jsx)(R.a,{className:"w-32 h-32 mx-4 p-0","aria-label":"Delete",onClick:function(){return e.onListItemRemove(e.item.id)},size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:"delete"})})]},e.item.id):null};var xe=function(e){function t(t){e.onCheckListChange(e.checklist.map((function(e){return e.id===t.id?t:e})))}function n(t){e.onCheckListChange(e.checklist.filter((function(e){return e.id!==t})))}return e.checklist?Object(G.jsx)("div",{className:e.className,children:Object(G.jsxs)(H.a,{dense:!0,children:[e.checklist.map((function(e){return Object(G.jsx)(he,{item:e,onListItemChange:t,onListItemRemove:n},e.id)})),Object(G.jsx)(be,{onListItemAdd:function(t){e.onCheckListChange([].concat(Object(oe.a)(e.checklist),[t]))}})]})}):null},fe=n(1206),pe=n(1266),Oe=n(1309);var ve=function(e){var t=Object(s.d)((function(e){return e.notesApp.labels.entities})),n=Object(r.useState)(null),a=Object(D.a)(n,2),c=a[0],i=a[1];function l(){i(null)}return Object(G.jsxs)("div",{children:[Object(G.jsx)(R.a,{className:"w-32 h-32 mx-4 p-0",onClick:function(e){e.stopPropagation(),i(e.currentTarget)},size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:"label"})}),Object(G.jsx)(Oe.a,{hideBackdrop:!0,open:Boolean(c),anchorEl:c,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},className:"pointer-events-none",classes:{paper:"pointer-events-auto py-8 prevent-add-close"},children:Object(G.jsx)(fe.a,{onClickAway:l,children:Object(G.jsx)(H.a,{className:"p-0",children:Object.entries(t).map((function(t){var n=Object(D.a)(t,2),a=(n[0],n[1]);return Object(G.jsxs)(P.a,{button:!0,dense:!0,onClick:function(){return t=a.id,void e.onChange(T.a.xor(e.note.labels,[t]));var t},children:[Object(G.jsx)(V.a,{className:"list-item-icon text-16",color:"action",children:e.note.labels.includes(a.id)?"check_box":"check_box_outline_blank"}),Object(G.jsx)(pe.a,{className:"truncate px-8",primary:a.name,disableTypography:!0})]},a.id)}))})})})]})},ge=n(3063);var ye=function(e){var t=new Date(e.reminder);return Object(G.jsx)(ge.a,{clearable:!0,showTodayButton:!0,disablePast:!0,value:t,onChange:e.onChange,renderInput:function(e){return Object(G.jsx)(E.a,Object(z.a)({sx:{"& .MuiInputAdornment-root":{minWidth:40,minHeight:40,m:0},"& .MuiOutlinedInput-notchedOutline":{display:"none"},"& .MuiInputBase-input":{position:"absolute",pointerEvents:"none",visibility:"hidden"}}},e))},components:{OpenPickerIcon:function(){return Object(G.jsx)(V.a,{fontSize:"small",children:"notifications_active"})}}})};var Ne=function(e){return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)("label",{htmlFor:"button-file",children:[Object(G.jsx)("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:function(t){var n=t.target.files[0];if(n){var a=new FileReader;a.readAsBinaryString(n),a.onload=function(){e.onChange&&e.onChange("data:".concat(n.type,";base64,").concat(btoa(a.result)))},a.onerror=function(){console.log("error on load image")}}}}),Object(G.jsx)(R.a,{className:"w-32 h-32 mx-4 p-0",component:"span",size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:"image"})})]})})},we=q.d().shape({title:q.f(),description:q.f(),image:q.f(),checklist:q.a(),oneOfThemRequired:q.b().when(["title","description","image","checklist"],{is:function(e,t,n,a){return!e&&!t&&!n&&!a||!!e&&!!t&&!!n&&!!a},then:q.b().required(""),otherwise:q.b()})});function ke(e){var t=Object(r.useState)(!1),n=Object(D.a)(t,2),a=n[0],c=n[1],i=Object(se.j)(),l=T.a.merge({},ne(),e.note,i.labelId?{labels:[i.labelId]}:null,"archive"===i.id?{archive:!0}:null),s=Object(L.f)({mode:"onChange",defaultValues:l,resolver:Object(I.a)(we)}),o=s.formState,d=s.handleSubmit,u=s.getValues,j=(s.reset,s.watch),b=s.setValue,m=s.control,h=o.isValid,x=o.dirtyFields,f=(o.errors,j());function p(t){e.onCreate&&e.onCreate(t)}return Object(r.useEffect)((function(){e.note&&"new"!==e.variant&&e.onChange&&(T.a.isEqual(e.note,f)||e.onChange(f))}),[f,e,l]),Object(G.jsxs)("div",{className:"flex flex-col w-full",children:[Object(G.jsx)(Z.a,{className:"flex flex-auto w-full max-h-640",children:Object(G.jsxs)("div",{className:"w-full",children:[Object(G.jsx)(L.a,{name:"image",control:m,defaultValue:"",render:function(e){var t=e.field,n=t.onChange,a=t.value;return""===a?null:Object(G.jsxs)("div",{className:"relative",children:[Object(G.jsx)("img",{src:a,className:"w-full block",alt:"note"}),Object(G.jsx)(ee.a,{className:"absolute right-0 bottom-0 m-8",variant:"extended",size:"small",color:"secondary","aria-label":"Delete Image",type:"button",onClick:function(){return n("")},children:Object(G.jsx)(V.a,{fontSize:"small",children:"delete"})})]})}}),Object(G.jsx)("div",{className:"px-20 my-16",children:Object(G.jsx)(L.a,{name:"title",control:m,render:function(e){var t=e.field;return Object(G.jsx)(_.a,Object(z.a)(Object(z.a)({},t),{},{className:"font-semibold text-14",placeholder:"Title",type:"text",disableUnderline:!0,fullWidth:!0}))}})}),Object(G.jsx)("div",{className:"px-20 my-16",children:Object(G.jsx)(L.a,{name:"description",control:m,render:function(e){var t=e.field;return Object(G.jsx)(_.a,Object(z.a)(Object(z.a)({},t),{},{placeholder:"Take a note...",multiline:!0,rows:"4",disableUnderline:!0,fullWidth:!0}))}})}),Object(G.jsx)(L.a,{name:"checklist",control:m,defaultValue:[],render:function(e){var t=e.field,n=t.onChange,c=t.value;return 0!==c.length||a?Object(G.jsx)("div",{className:"px-16",children:Object(G.jsx)(xe,{checklist:c,onCheckListChange:function(e){return n(e)}})}):null}}),(f.labels||f.reminder||f.time)&&Object(G.jsxs)("div",{className:"flex flex-wrap w-full px-20 my-16 -mx-4",children:[f.reminder&&Object(G.jsx)(re,{className:"mt-4 mx-4",date:f.reminder,onDelete:function(){b("reminder",null)}}),Object(G.jsx)(L.a,{name:"labels",control:m,defaultValue:[],render:function(e){var t=e.field,n=t.onChange,a=t.value;return a?a.map((function(e){return Object(G.jsx)(ie,{id:e,className:"mt-4 mx-4",onDelete:function(){return n(a.filter((function(t){return t!==e})))}},e)})):null}}),f.time&&Object(G.jsxs)(M.a,{color:"textSecondary",className:"text-12 mt-8 mx-4",children:["Edited: ",Object(le.a)(new Date(f.time),"MMM dd yy, h:mm")]})]})]})}),Object(G.jsxs)("div",{className:"flex flex-auto justify-between items-center px-16 pb-12",children:[Object(G.jsxs)("div",{className:"flex items-center",children:[Object(G.jsx)(te.a,{title:"Remind me",placement:"bottom",children:Object(G.jsx)("div",{children:Object(G.jsx)(L.a,{name:"reminder",control:m,defaultValue:[],render:function(e){var t=e.field,n=t.onChange,a=t.value;return Object(G.jsx)(ye,{reminder:a,onChange:function(e){return n(e)}})}})})}),Object(G.jsx)(te.a,{title:"Add image",placement:"bottom",children:Object(G.jsx)("div",{children:Object(G.jsx)(Ne,{onChange:function(e){return b("image",e,{shouldDirty:!0,shouldValidate:!0})}})})}),Object(G.jsx)(te.a,{title:"Add checklist",placement:"bottom",children:Object(G.jsx)(R.a,{className:"w-32 h-32 mx-4 p-0",onClick:function(){return c(!a)},size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:"playlist_add_check"})})}),Object(G.jsx)(te.a,{title:"Change labels",placement:"bottom",children:Object(G.jsx)("div",{children:Object(G.jsx)(ve,{note:f,onChange:function(e){return b("labels",e)}})})}),Object(G.jsx)(L.a,{name:"archive",control:m,defaultValue:!1,render:function(t){var n=t.field,a=n.onChange,c=n.value;return Object(G.jsx)(te.a,{title:c?"Unarchive":"Archive",placement:"bottom",children:Object(G.jsx)("div",{children:Object(G.jsx)(R.a,{className:"w-32 h-32 mx-4 p-0",onClick:function(){a(!c),"new"===e.variant&&setTimeout((function(){return p(u())}))},size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:c?"unarchive":"archive"})})})})}})]}),Object(G.jsx)("div",{className:"flex items-center",children:"new"===e.variant?Object(G.jsx)($.a,{className:"m-4",type:"submit",variant:"contained",color:"secondary",size:"small",onClick:d(p),disabled:T.a.isEmpty(x)||!h,children:"Create"}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(te.a,{title:"Delete Note",placement:"bottom",children:Object(G.jsx)(R.a,{className:"w-32 h-32 mx-4 p-0",onClick:e.onRemove,size:"large",children:Object(G.jsx)(V.a,{fontSize:"small",children:"delete"})})}),Object(G.jsx)($.a,{className:"m-4",onClick:e.onClose,variant:"outlined",size:"small",children:"Close"})]})})]})]})}ke.defaultProps={variant:"edit",note:null};var Ce,Se=Object(se.k)(ke),ze=Object(m.b)("notesApp/notes/getNotes",Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/notes-app/notes");case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),De=Object(m.b)("notesApp/notes/createNote",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/notes-app/create-note",{note:t});case 2:return n=e.sent,e.next=5,n.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ae=Object(m.b)("notesApp/notes/updateNote",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/notes-app/update-note",{note:t});case 2:return n=e.sent,e.next=5,n.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ie=Object(m.b)("notesApp/notes/removeNote",function(){var e=Object(b.a)(j.a.mark((function e(t,n){var a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.dispatch,n.getState,e.next=3,x.a.post("/api/notes-app/remove-note",{noteId:t});case 3:return c=e.sent,e.next=6,c.data;case 6:return i=e.sent,a(Me()),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Le=Object(m.c)({}),Te=Le.getSelectors((function(e){return e.notesApp.notes})),Ee=Te.selectAll,Ve=(Te.selectEntities,Te.selectById,Object(m.d)({name:"notesApp/notes",initialState:Le.getInitialState({searchText:"",noteDialogId:null,variateDescSize:!0}),reducers:{setNotesSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}},resetNotesSearchText:function(e,t){e.searchText=""},toggleVariateDescSize:function(e,t){e.variateDescSize=!e.variateDescSize},openNoteDialog:function(e,t){e.noteDialogId=t.payload},closeNoteDialog:function(e,t){e.noteDialogId=t.null}},extraReducers:(Ce={},Object(c.a)(Ce,ze.fulfilled,Le.setAll),Object(c.a)(Ce,De.fulfilled,Le.addOne),Object(c.a)(Ce,Ae.fulfilled,Le.upsertOne),Object(c.a)(Ce,Ie.fulfilled,Le.removeOne),Ce)})),Re=Ve.actions,_e=Re.setNotesSearchText,Fe=Re.resetNotesSearchText,He=Re.toggleVariateDescSize,Pe=Re.openNoteDialog,Me=Re.closeNoteDialog,Be=Ve.reducer,Ue=Object(r.forwardRef)((function(e,t){return Object(G.jsx)(X.a,Object(z.a)({direction:"up",ref:t},e))}));var We=function(e){var t=Object(s.c)(),n=Object(s.d)((function(e){return e.notesApp.notes})),a=Object(A.a)((function(e){t(Ae(e))}),600);return n.entities?Object(G.jsx)(d.a,{classes:{paper:"w-full m-24"},TransitionComponent:Ue,onClose:function(e){return t(Me())},open:Boolean(n.noteDialogId),children:Object(G.jsx)(Se,{note:n.entities[n.noteDialogId],onChange:a,onClose:function(e){return t(Me())},onRemove:function(){t(Ie(n.noteDialogId))}})}):null},qe=n(677);var Ge=function(e){var t=Object(s.c)(),n=Object(r.useState)(!1),a=Object(D.a)(n,2),c=a[0],i=a[1];function l(){c&&(i(!1),document.removeEventListener("keydown",o,!1))}function o(e){27===e.keyCode&&l()}return Object(G.jsx)(qe.a,{className:"flex items-center w-full max-w-512 mt-8 mb-16 min-h-48 shadow flex-shrink-0 cursor-text",children:c?Object(G.jsx)(fe.a,{onClickAway:function(e){var t=document.querySelector(".prevent-add-close");!!t&&t.contains(e.target)||l()},children:Object(G.jsx)("div",{className:"w-full",children:Object(G.jsx)(Se,{onCreate:function(e){t(De(e)),l()},variant:"new"})})}):Object(G.jsx)(M.a,{className:"w-full px-16 py-12 text-16 w-full",color:"textSecondary",onClick:function(e){e.stopPropagation(),i(!0),document.addEventListener("keydown",o,!1)},children:"Take a note..."})})},Je=n(1828),Ye=n(1291),Ke=n(1276),Qe={1:{fontSize:14,lineHeight:19},2:{fontSize:18,lineHeight:28},3:{fontSize:24,lineHeight:36},4:{fontSize:36,lineHeight:48},5:{fontSize:48,lineHeight:60}};var Xe=function(e,t,n){if(t){t.style.fontSize=null,t.style.lineHeight=null;var a=t.clientWidth;if(0!==a&&n){var c,i=document.createElement("div");i.style.display="inline-block",i.style.fontSize="10px",i.style.fontWeight="600",i.style.lineHeight="10px",i.style.position="absolute",i.style.whiteSpace="pre-wrap",i.style.wordWrap="break-word",i.style.pointerEvents="none",i.style.visibility="hidden",document.body.appendChild(i);var l=e.split(" ").map((function(e){return i.textContent=e.toString(),i.clientWidth})),r=Math.max.apply(Math,Object(oe.a)(l)),s=Math.floor(10*a/r);s<18?c=1:s>=18&&s<24?c=2:s>=24&&s<36?c=3:s>=36&&s<48?c=4:s>=48&&(c=5);var o=Qe[c],d=o.lineHeight,u=o.fontSize;i.textContent=e,i.style.width="".concat(a,"px"),i.style.fontSize="".concat(u,"px"),i.style.lineHeight="".concat(d,"px");var j=i.clientHeight/d;j>4&&j<6?c=4:j>=6&&j<9?c=3:j>=9&&j<11?c=2:j>=11&&(c=1),document.body.removeChild(i),d=Qe[c].lineHeight,u=Qe[c].fontSize,t.style.fontSize="".concat(u,"px"),t.style.lineHeight="".concat(d,"px")}}};var Ze=function(e){var t=Object(s.c)();return Object(G.jsx)(Ke.a.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.1}},children:Object(G.jsxs)(Ye.a,{className:Object(W.default)("cursor-pointer",e.className),onClick:function(){return t(Pe(e.note.id))},children:[e.note.image&&""!==e.note.image&&Object(G.jsx)("img",{src:e.note.image,className:"w-full block",alt:"note"}),e.note.title&&""!==e.note.title&&Object(G.jsx)(M.a,{className:"px-20 my-16 text-14 font-semibold",children:e.note.title}),e.note.description&&""!==e.note.description&&Object(G.jsx)(M.a,{className:"px-20 my-16 ",component:"div",children:Object(G.jsx)("div",{className:Object(W.default)("w-full break-words",e.variateDescSize?"font-500":"text-14"),ref:function(t){setTimeout((function(){return Xe(e.note.description,t,e.variateDescSize)}))},children:e.note.description})}),e.note.checklist&&e.note.checklist.length>0&&Object(G.jsx)("ul",{className:"px-20 my-16 flex flex-wrap list-reset",children:e.note.checklist.map((function(e){return Object(G.jsxs)("li",{className:"flex items-center w-full",children:[Object(G.jsx)(V.a,{color:"action",className:"text-16",children:e.checked?"check_box_outline":"check_box_outline_blank"}),Object(G.jsx)(M.a,{className:Object(W.default)("truncate mx-8",e.checked&&"line-through"),color:e.checked?"textSecondary":"inherit",children:e.text})]},e.id)}))}),(e.note.labels.length>0||e.note.reminder)&&Object(G.jsxs)("div",{className:"px-20 my-16 flex flex-wrap w-full -mx-2",children:[e.note.reminder&&Object(G.jsx)(re,{className:"mt-4 mx-2 max-w-full",date:e.note.reminder}),e.note.labels.map((function(e){return Object(G.jsx)(ie,{id:e,className:"mt-4 mx-2 max-w-full",linkable:!0},e)}))]})]})})};var $e=Object(se.k)((function(e){var t=Object(s.d)(Ee),n=Object(s.d)((function(e){return e.notesApp.notes.variateDescSize})),a=Object(s.d)((function(e){return e.notesApp.notes.searchText})),c=Object(r.useState)(null),i=Object(D.a)(c,2),l=i[0],o=i[1];return Object(r.useEffect)((function(){t.length>0&&o(function(){var n=e.match.params,c=n.id,i=n.labelId,l=t;return i&&(l=l.filter((function(e){return e.labels.includes(i)&&!e.archive}))),c||(l=l.filter((function(e){return!e.archive}))),"archive"===c&&(l=l.filter((function(e){return e.archive}))),"reminders"===c&&(l=l.filter((function(e){return Boolean(e.reminder)&&!e.archive}))),0===a.length?l:l=B.a.filterArrayByString(l,a)}())}),[t,a,e.match]),l&&0!==l.length?Object(G.jsx)("div",{className:"flex flex-wrap w-full",children:Object(G.jsx)(Je.a,{breakpointCols:{default:6,1920:5,1600:4,1366:3,1280:4,960:3,600:2,480:1},className:"my-masonry-grid flex w-full",columnClassName:"my-masonry-grid_column flex flex-col p-0 md:p-8",children:l.map((function(e){return Object(G.jsx)(Ze,{note:e,className:"w-full rounded-20 shadow mb-16",variateDescSize:n},e.id)}))})}):Object(G.jsx)("div",{className:"flex items-center justify-center h-full",children:Object(G.jsx)(M.a,{color:"textSecondary",variant:"h5",children:"There are no notes!"})})})),et=n(1279),tt=n(1415);function nt(e){var t=Object(s.c)(),n=Object(s.d)((function(e){return e.notesApp.notes.notesSearchText})),a=Object(r.useState)(!1),c=Object(D.a)(a,2),i=c[0],l=c[1];function o(e){e.stopPropagation(),l(!0),document.addEventListener("keydown",u,!1)}function d(){l(!1),t(Fe()),document.removeEventListener("keydown",u,!1)}function u(e){27===e.keyCode&&d()}return Object(G.jsxs)("div",{className:Object(W.default)("flex",e.className),children:[Object(G.jsx)(te.a,{title:"Click to search",placement:"bottom",children:Object(G.jsx)("div",{onClick:o,onKeyDown:o,role:"button",tabIndex:0,children:e.trigger})}),i&&Object(G.jsx)(fe.a,{onClickAway:function(){d()},children:Object(G.jsx)("div",{className:"absolute left-0 right-0 top-0 bottom-0 h-full z-9999 px-8 sm:px-24",children:Object(G.jsxs)(tt.a,{sx:{backgroundColor:function(e){return e.palette.primary.dark}},className:"flex items-center w-full h-full",children:[Object(G.jsx)(_.a,{placeholder:"Search for anything",className:"flex flex-1 py-0 px-16 h-64",disableUnderline:!0,fullWidth:!0,value:n,inputProps:{"aria-label":"Search"},onChange:function(e){return t(_e(e))},autoFocus:!0}),Object(G.jsx)(R.a,{onClick:d,className:"mx-8",size:"large",children:Object(G.jsx)(V.a,{children:"close"})})]})})})]})}nt.defaultProps={trigger:Object(G.jsx)(R.a,{className:"w-64 h-64",size:"large",children:Object(G.jsx)(V.a,{children:"search"})})};var at=nt;var ct=function(e){var t=Object(s.c)(),n=Object(s.d)((function(e){return e.notesApp.notes.variateDescSize}));return Object(G.jsxs)("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24 relative",children:[Object(G.jsxs)("div",{className:"flex flex-shrink items-center sm:w-224",children:[Object(G.jsx)(et.a,{lgUp:!0,children:Object(G.jsx)(R.a,{onClick:function(t){return e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar",size:"large",children:Object(G.jsx)(V.a,{children:"menu"})})}),Object(G.jsxs)("div",{className:"flex items-center",children:[Object(G.jsx)(V.a,{component:Ke.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"account_box"}),Object(G.jsx)(M.a,{component:Ke.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"Notes"})]})]}),Object(G.jsxs)("div",{className:"flex flex-1 items-center justify-end",children:[Object(G.jsx)(te.a,{title:"Toggle Variate Description Size",children:Object(G.jsx)(R.a,{onClick:function(e){return t(He())},size:"large",children:Object(G.jsx)(V.a,{color:n?"action":"disabled",children:"format_size"})})}),Object(G.jsx)(at,{})]})]})},it=n(105),lt=n(1269),rt=n(1313),st=Object(o.a)(P.a)((function(e){var t=e.theme;e.active;return{color:"inherit!important",textDecoration:"none!important",height:40,width:"100%",borderRadius:6,paddingLeft:12,paddingRight:12,marginBottom:4,"&.active":{backgroundColor:"light"===t.palette.mode?"rgba(0, 0, 0, .05)!important":"rgba(255, 255, 255, .1)!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}}}));var ot=function(e){var t=Object(s.c)(),n=Object(s.d)(g);return Object(G.jsx)("div",{className:"p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4",children:Object(G.jsxs)(qe.a,{component:Ke.a.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:Object(W.default)("rounded-0 shadow-none lg:rounded-20 lg:shadow pt-12"),children:[Object(G.jsxs)(H.a,{className:"px-12",children:[Object(G.jsxs)(st,{button:!0,component:it.a,to:"/apps/notes",exact:!0,activeClassName:"active",children:[Object(G.jsx)(V.a,{className:"list-item-icon text-16",color:"action",children:"label"}),Object(G.jsx)(pe.a,{className:"truncate",primary:"Notes",disableTypography:!0})]}),Object(G.jsxs)(st,{button:!0,component:it.a,to:"/apps/notes/reminders",exact:!0,activeClassName:"active",children:[Object(G.jsx)(V.a,{className:"list-item-icon text-16",color:"action",children:"notifications"}),Object(G.jsx)(pe.a,{className:"truncate",primary:"Reminders",disableTypography:!0})]})]}),Object(G.jsx)(lt.a,{}),Object(G.jsxs)(H.a,{className:"px-12",children:[Object(G.jsx)(rt.a,{children:"Labels"}),n.map((function(e){return Object(G.jsxs)(st,{button:!0,component:it.a,to:"/apps/notes/labels/".concat(e.handle,"/").concat(e.id),exact:!0,activeClassName:"active",children:[Object(G.jsx)(V.a,{className:"list-item-icon text-16",color:"action",children:"label"}),Object(G.jsx)(pe.a,{className:"truncate",primary:e.name,disableTypography:!0})]},e.id)})),Object(G.jsxs)(st,{button:!0,onClick:function(e){return t(k())},children:[Object(G.jsx)(V.a,{className:"list-item-icon text-16",color:"action",children:"edit"}),Object(G.jsx)(pe.a,{className:"truncate",primary:"Edit Labels",disableTypography:!0})]})]}),Object(G.jsx)(lt.a,{}),Object(G.jsx)(H.a,{className:"px-12",children:Object(G.jsxs)(st,{button:!0,component:it.a,to:"/apps/notes/archive",activeClassName:"active",children:[Object(G.jsx)(V.a,{className:"list-item-icon text-16",color:"action",children:"archive"}),Object(G.jsx)(pe.a,{className:"truncate",primary:"Archive",disableTypography:!0})]})})]})})},dt=n(149),ut=Object(dt.c)({notes:Be,labels:S}),jt=Object(o.a)(i.a)((function(e){var t=e.theme;return{"& .FusePageSimple-header":{minHeight:72,height:72},"& .FusePageSimple-contentWrapper":Object(c.a)({padding:16,paddingBottom:80},t.breakpoints.up("sm"),{padding:24}),"& .FusePageSimple-content":{display:"flex",minHeight:"100%"},"& .FusePageSimple-sidebar":{width:256,border:0}}}));t.default=Object(l.a)("notesApp",ut)((function(e){var t=Object(s.c)(),n=Object(r.useRef)(null);return Object(r.useEffect)((function(){t(ze()),t(f())}),[t]),Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(jt,{header:Object(G.jsx)(ct,{pageLayout:n}),content:Object(G.jsxs)("div",{className:"flex flex-col w-full items-center",children:[Object(G.jsx)(Ge,{}),Object(G.jsx)($e,{}),Object(G.jsx)(We,{}),Object(G.jsx)(Q,{})]}),leftSidebarContent:Object(G.jsx)(ot,{}),sidebarInner:!0,ref:n})})}))}}]);