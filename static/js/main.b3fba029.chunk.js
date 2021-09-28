(this["webpackJsonpnemesis-task1"]=this["webpackJsonpnemesis-task1"]||[]).push([[0],{361:function(e,t,n){},423:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(14),o=n.n(r),c=(n(361),n(118)),s=n(193),l=n(229),d=n.n(l),u=(n(423),n(141)),h=n.n(u),b=n.p+"static/media/logo.031dc713.png",p=n(476),j=n(475),f=n(46),m=function(e){return/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(String(e).toLowerCase())},O=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1],O=Object(i.useState)([]),g=Object(s.a)(O,2),v=g[0],x=g[1];Object(i.useEffect)((function(){h.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){var t=e.data;a(t)}))}),[]);return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{style:{background:"rgb(35,31,31)"},children:Object(f.jsx)("img",{src:b,height:"60px",width:"150px",alt:"/logo"})}),Object(f.jsx)("h1",{children:"Task 1 - Material Table CRUD"})," ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(d.a,{title:"User Details",columns:[{title:"NAME",field:"name"},{title:"USERNAME",field:"username"},{title:"EMAIL",field:"email"},{title:"PHONE",field:"phone"},{title:"WEBSITE",field:"website"}],data:n,options:{headerStyle:{borderBottomColor:"rgb(35,31,31)",borderBottomWidth:"3px",fontFamily:"verdana",textAlign:"center"},actionsColumnIndex:-1},editable:{onRowUpdate:function(e,t){return new Promise((function(i){!function(e,t,i){var r=[];""===e.name&&r.push("Try Again, You didn't enter the name field"),""===e.username&&r.push("Try Again, You didn't enter the Username field"),""!==e.email&&!1!==m(e.email)||r.push("Oops!!! Please enter a valid email"),""===e.phone&&r.push("Try Again, Phone number field can't be blank"),""===e.website&&r.push("Try Again, Enter website url before submitting"),r.length<1?h.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e).then((function(r){var o=Object(c.a)(n);o[t.tableData.id]=e,a(Object(c.a)(o)),i(),u(!1),x([])})).catch((function(e){x(["Update failed! Server error"]),u(!0),i()})):(x(r),u(!0),i())}(e,t,i)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var i=[];""===e.name&&i.push("Try Again, You didn't enter the name field"),""===e.username&&i.push("Try Again, You didn't enter the Username field"),""!==e.email&&!1!==m(e.email)||i.push("Oops!!! Please enter a valid email"),""===e.phone&&i.push("Try Again, Phone number field can't be blank"),""===e.website&&i.push("Try Again, Enter website url before submitting"),i.length<1?h.a.post("https://jsonplaceholder.typicode.com/users",e).then((function(i){var r=Object(c.a)(n);r.push(e),a(r),t(),x([]),u(!1)})).catch((function(e){x(["Cannot add data. Server error!"]),u(!0),t()})):(x(i),u(!0),t())}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){h.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e.id)).then((function(i){var r=Object(c.a)(n),o=e.tableData.id;r.splice(o,1),a(Object(c.a)(r)),t()})).catch((function(e){x(["Delete failed! Server error"]),u(!0),t()}))}(e,t)}))}}}),Object(f.jsx)("div",{children:l&&Object(f.jsxs)(p.a,{severity:"error",children:[Object(f.jsx)(j.a,{children:"ERROR"}),v.map((function(e,t){return Object(f.jsx)("div",{children:e},t)}))]})})]})};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root"))}},[[443,1,2]]]);
//# sourceMappingURL=main.b3fba029.chunk.js.map