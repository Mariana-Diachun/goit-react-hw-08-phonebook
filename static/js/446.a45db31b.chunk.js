"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{1446:function(n,e,r){r.r(e),r.d(e,{default:function(){return X}});var t,o,i,a,s,c,l,d,u,p,x,m,h=r(9434),b=r(2791),f=r(4270),g=function(n){return n.contacts.contacts},Z=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},w=function(n){return n.filter.filter},v=r(3634),y=r(5984),P=r(5705),k=r(5562),z=r.n(k),C=r(7103),F=C.Ry().shape({name:C.Z_("Name may contain only letters, apostrophe, dash and spaces.").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"For example Jacob Mercer!").min(2,"Name is too short!").max(30,"Name is too long!").required("Please, enter your name!"),number:C.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits").min(9,"Please use this format 000-00-00").required("Please, enter your phone number!")}),N=r(168),L=r(6444),_=(0,L.ZP)(P.l0)(t||(t=(0,N.Z)(["\n  border: 1px solid black;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n"]))),q=(0,L.ZP)(P.gN)(o||(o=(0,N.Z)(["\n  box-sizing: border-box;\n  width: 200px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  outline: none;\n  &:hover,\n  &:focus {\n    border-color: red;\n  }\n  padding: 2px;\n"]))),A=L.ZP.label(i||(i=(0,N.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.17;\n  letter-spacing: 0.01em;\n  margin-top: 10px;\n"]))),I=(0,L.ZP)(P.Bc)(a||(a=(0,N.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  color: red;\n"]))),S=L.ZP.button(s||(s=(0,N.Z)(["\n  border: none;\n  margin-top: 30px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  background-color: rgba(33, 33, 33, 0.2);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  &:hover,\n  &:focus {\n    background-color: red;\n  }\n  cursor: pointer;\n  width: 100px;\n"]))),J=r(184),K=function(){var n=(0,y.x0)(),e=(0,y.x0)(),r=(0,h.I0)(),t=(0,h.v9)(g);return(0,J.jsx)("section",{children:(0,J.jsx)(P.J9,{initialValues:{name:"",number:""},validationSchema:F,onSubmit:function(n,e){var o=n.name,i=n.number,a=e.resetForm;if(t.find((function(n){return n.name.toLowerCase()===o.toLowerCase()})))return z().Notify.failure("".concat(o," is already in contacts"));r((0,v.uK)({name:o,number:i})),a()},children:(0,J.jsxs)(_,{autoComplete:"off",children:[(0,J.jsxs)(A,{htmlFor:n,children:["Name",(0,J.jsx)(q,{type:"text",name:"name",id:n})]}),(0,J.jsx)(I,{name:"name",compononet:"span"}),(0,J.jsxs)(A,{htmlFor:e,children:["Number",(0,J.jsx)(q,{type:"tel",name:"number",id:e})]}),(0,J.jsx)(I,{name:"number",compononet:"span"}),(0,J.jsx)(S,{type:"submit",children:"Add contact"})]})})})},B=r(7959),D=L.ZP.div(c||(c=(0,N.Z)(["\n  margin-top: 20px;\n"]))),E=L.ZP.label(l||(l=(0,N.Z)(["\n  margin-right: 30px;\n  display: flex;\n  justify-content: space-between;\n"]))),G=L.ZP.input(d||(d=(0,N.Z)(["\n  box-sizing: border-box;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  outline: none;\n  &:hover,\n  &:focus {\n    border-color: red;\n  }\n"]))),M=function(){var n=(0,h.I0)(),e=(0,h.v9)(w),r=(0,y.x0)();return(0,J.jsx)(D,{children:(0,J.jsxs)(E,{htmlFor:r,children:["Find contacts by name:",(0,J.jsx)(G,{id:r,type:"text",value:e,name:"filter",onChange:function(e){return n((0,B.l)(e.target.value))}})]})})},R=r(5243),V=function(){return(0,J.jsx)(R.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})},$=r(1413),H=L.ZP.div(u||(u=(0,N.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),O=L.ZP.div(p||(p=(0,N.Z)(["\n  cursor: pointer;\n  text-align: center;\n  width: 50px;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  background-color: rgba(33, 33, 33, 0.2);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  &:hover,\n  &:focus {\n    background-color: red;\n  }\n  margin-left: 30px;\n  background-color: rgba(33, 33, 33, 0.2);\n"]))),Q=function(n){var e=n.id,r=n.name,t=n.number,o=(0,h.I0)();return(0,J.jsxs)(H,{id:e,children:[r," : ",t,(0,J.jsx)(H,{}),(0,J.jsx)(O,{type:"button",onClick:function(){return o((0,v.GK)(e))},children:"Delete"})]})},T=L.ZP.ul(x||(x=(0,N.Z)(["\n  padding: 20px;\n  list-style-type: square;\n"]))),U=function(){var n=(0,h.v9)(g),e=(0,h.v9)(w),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));if(r)return(0,J.jsx)(T,{children:r.map((function(n){return(0,J.jsx)(Q,(0,$.Z)({},n),n.id)}))})},W=L.ZP.h1(m||(m=(0,N.Z)(["\n  font-weight: 700;\n  font-size: 26px;\n  line-height: 1.15;\n  text-align: center;\n  letter-spacing: 0.03em;\n  color: rgb(21, 18, 18);\n  margin-bottom: 20px;\n"])));function X(){var n=(0,h.I0)(),e=(0,h.v9)(Z),r=(0,h.v9)(j);return(0,b.useEffect)((function(){n((0,v.yF)())}),[n]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(f.q,{children:(0,J.jsx)(W,{children:"Phonebook"})}),(0,J.jsx)(K,{}),e&&!r&&(0,J.jsx)(V,{}),(0,J.jsx)(M,{}),(0,J.jsx)(U,{})]})}}}]);
//# sourceMappingURL=446.a45db31b.chunk.js.map