(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,a,s){"use strict";s.r(a);var t=s(1),n=s(0),i=s.n(n),l=s(3),c=s.n(l),r=s(6),d=function(){return Object(t.jsx)(i.a.Fragment,{children:Object(t.jsxs)("nav",{class:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(t.jsxs)("div",{class:"navbar-brand",children:[Object(t.jsx)("a",{class:"navbar-item",href:"https://bulma.io",children:Object(t.jsx)("img",{src:"https://www.evangeluniversity.edu.ng/images/eua-logo.png"})}),Object(t.jsxs)("a",{role:"button",class:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",children:[Object(t.jsx)("span",{"aria-hidden":"true"}),Object(t.jsx)("span",{"aria-hidden":"true"}),Object(t.jsx)("span",{"aria-hidden":"true"})]})]}),Object(t.jsx)("div",{id:"navbarBasicExample",class:"navbar-menu",children:Object(t.jsx)("div",{class:"navbar-start",children:Object(t.jsx)("a",{onClick:function(){return window.location.reload()},class:"navbar-item",children:"Refresh"})})})]})})},o=s(4),b=(s(22),s(16)),j=s.n(b),u=function(){var e=Object(n.useState)(null),a=Object(r.a)(e,2),s=a[0],l=a[1],c=Object(n.useState)(!1),b=Object(r.a)(c,2),u=b[0],m=b[1];return Object(t.jsxs)(i.a.Fragment,{children:[Object(t.jsx)(d,{}),Object(t.jsx)(o.a,{}),Object(t.jsxs)("div",{className:"box",style:{maxWidth:"600px",display:"block",margin:"auto"},children:[Object(t.jsx)("section",{className:"hero",children:Object(t.jsx)("div",{className:"hero-body",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("h1",{className:"title",children:"Upload Payslip file (xlsx format)"}),Object(t.jsxs)("p",{className:"subtitle",children:["Click on ",Object(t.jsx)("b",{children:"Upload button"})," to add payslip file"]})]})})}),Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"field",children:Object(t.jsx)("div",{className:"file is-centered is-large is-boxed has-name",children:Object(t.jsxs)("form",{method:"POST",onSubmit:function(e){if(e.preventDefault(),m(!0),null==s)return m(!1),o.b.error("Oops! No Payslip file found, please upload payslip (xlsx) file");var a=new FormData;a.append("file",s);j.a.post("/v1/api/upload/payslip",a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){if(m(!1),l(null),e.data.success)return o.b.success(e.data.message)})).catch((function(e){return m(!1),console.log(e),o.b.error("Oops! An error has occured")}))},enctype:"multipart/form-data",children:[Object(t.jsxs)("label",{className:"file-label",children:[Object(t.jsx)("input",{className:"file-input",type:"file",onChange:function(e){return a=e.target.files,console.log(a[0]),void l(a[0]);var a},name:"resume"}),Object(t.jsxs)("span",{className:"file-cta",style:{width:500},children:[Object(t.jsx)("span",{className:"file-icon",children:Object(t.jsx)("i",{className:"fas fa-upload"})}),Object(t.jsx)("span",{className:"file-label mt-4",children:s?"Payslip File Added":"Upload Payslip File"})]}),Object(t.jsx)("span",{className:"file-name",style:{maxWidth:500,fontSize:20},children:s?s.name:""})]}),u?Object(t.jsx)("button",{type:"submit",class:"button is-info is-loading mt-6",style:{margin:"auto",display:"block"},children:"Sending Emails"}):Object(t.jsx)("button",{type:"submit",className:"button is-info is-outlined mt-6",style:{margin:"auto",display:"block"},children:"Send Email Now"})]})})})})]})]})};var m=function(){return Object(t.jsx)(i.a.Fragment,{children:Object(t.jsx)(u,{})})};c.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(m,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d2dd228a.chunk.js.map