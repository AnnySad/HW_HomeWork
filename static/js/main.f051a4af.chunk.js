(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={menuWrapper:"hw5_menuWrapper__2x_VJ",burgerMenu:"hw5_burgerMenu__bs6r_",containerMenuLinks:"hw5_containerMenuLinks__2SknV",activeMenu:"hw5_activeMenu__17Q8K",menuLinks:"hw5_menuLinks__3BJH6",active:"hw5_active__1b596"}},,,,,function(e,a,t){e.exports={message:"Message_message__25yjI",img:"Message_img__1ATHl",content:"Message_content__30jwG",name:"Message_name__2_dEA",text:"Message_text__g2jFz",time:"Message_time__3AZVk",clear:"Message_clear__3ABbb"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1hJg2",error:"Greeting_error__25cUs",errorFalse:"Greeting_errorFalse__Ea6O0",input:"Greeting_input__2zCuP",errorText:"Greeting_errorText__3zlcA",totalUsers:"Greeting_totalUsers__3LwG0",displayNone:"Greeting_displayNone__hYHbj",button:"Greeting_button__2zB8B",content:"Greeting_content__3v9qX"}},,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__F4q3l",input:"SuperInputText_input__n-oTa",errorInput:"SuperInputText_errorInput__2e7mf",error:"SuperInputText_error__3CxLC"}},,function(e,a,t){e.exports={Affairs:"Affairs_Affairs__PFqud",button:"Affairs_button__udJfi"}},,function(e,a,t){e.exports={blue:"HW4_blue__D1ka8",column:"HW4_column__47bQc"}},function(e,a,t){e.exports={default:"SuperButton_default__1IIC4",red:"SuperButton_red__1CCfd",button:"SuperButton_button__11MFq",blink:"SuperButton_blink__1Rlog"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__NyR2A",spanClassName:"SuperCheckbox_spanClassName__3Bosx"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__1hVV_",label:"SuperRadio_label__19iu7"}},,,,,,,function(e,a,t){e.exports={App:"App_App__2Fo5H"}},function(e,a,t){e.exports={select:"SuperSelect_select__2TMTz",option:"SuperSelect_option__2DyKf"}},,,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=(t(35),t(26)),u=t.n(o),s=t(8),i=t.n(s);var m=function(e){return r.a.createElement("div",{className:i.a.message},r.a.createElement("img",{className:i.a.img,alt:"\u0422\u0435\u043a\u0441\u0442",src:e.avatar}),r.a.createElement("div",{className:i.a.content},r.a.createElement("div",{className:i.a.name},e.name),r.a.createElement("div",{className:i.a.text},e.message),r.a.createElement("div",{className:i.a.time},e.time)),r.a.createElement("div",{className:i.a.clear}))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",E="npm start press?",d="22:00";var f=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(m,{avatar:p,name:_,message:E,time:d}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(2),v=t(14),b=t.n(v);var g=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{className:b.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}}," X"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:b.a.Affairs},a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(n.useState)(k),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(h.a)(c,2),u=o[0],s=o[1],i=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(29),x=t(9),j=t.n(x),y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=j.a.errorFalse,u=j.a.displayNone;return r.a.createElement("div",{className:j.a.content},r.a.createElement("input",{value:a,onChange:t,className:l?o:""}),r.a.createElement("div",{className:l?j.a.errorText:u},l?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f":""),r.a.createElement("button",{onClick:n,className:j.a.button},"add"),r.a.createElement("br",null),r.a.createElement("span",{className:j.a.totalUsers},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",c))},S=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(!1),i=Object(h.a)(s,2),m=i[0],p=i[1],_=a.length;return r.a.createElement(y,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){""===o?p(!0):(p(!1),setTimeout((function(){return alert("Hello ".concat(o," !"))}),10),t(o))},error:m,totalUsers:_})},w=t(44);var A=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(S,{users:t,addUserCallback:function(e){var a={_id:Object(w.a)(),name:e};l([].concat(Object(O.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(4),M=t(12),F=t.n(M),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(F.a.error," ").concat(u||""),m="".concat(F.a.input," ").concat(c?F.a.errorInput:F.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m,placeholder:"Please enter text"},s)),c&&r.a.createElement("span",{className:i},c))},B=t(16),J=t.n(B),L=t(17),G=t.n(L),P=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(a?G.a.red:G.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},U=t(18),H=t.n(U),W=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(H.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:H.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(h.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(I,{className:J.a.blue}),r.a.createElement(P,null,"default"),r.a.createElement(P,{red:!0,onClick:o},"delete "),r.a.createElement(P,{disabled:!0},"disabled"),r.a.createElement(W,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(W,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},q=t(3),D=t.n(q),K=t(7),R=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(T.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(h.a)(o,2),s=u[0],i=u[1],m=l||{},p=m.children,_=m.onDoubleClick,E=(m.className,Object(T.a)(m,["children","onDoubleClick","className"]));return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){i(!s),a&&a(e)},onEnter:function(){i(!s),t&&t()}},c)):r.a.createElement("span",Object.assign({onClick:function(e){i(!s),_&&_(e)},className:"input-hw6"},E),p||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function X(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}V("test",{x:"A",y:1});X("test",{x:"",y:0});var Q=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:"wrapper-hw6"},r.a.createElement("div",null,r.a.createElement(R,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:"button-hw6"},r.a.createElement(P,{onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(P,{onClick:function(){var e=X("editable-span-value",t);l(e)}},"restore"))))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement("div",{className:"size"},r.a.createElement("div",{className:"title"},"\u041d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u043b\u044f PreJunior")),r.a.createElement(z,null),r.a.createElement(Q,null))};var Z=function(){},$=t(1),ee=(t(36),t(27)),ae=t.n(ee),te=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(T.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,a){return r.a.createElement("option",{className:ae.a.option,key:e+"-"+a,value:e}," ",e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},ne=t(19),re=t.n(ne),le=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=Object(T.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){l&&l(e.currentTarget.value)},u=re.a.radio,s=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t,className:re.a.label},r.a.createElement("input",Object.assign({className:u,type:"radio",name:a,checked:n===e,value:e,onChange:o},c)),e)})):[];return r.a.createElement(r.a.Fragment,null,s)},ce=["x","y","z"];var oe=function(){var e=Object(n.useState)(ce[1]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(te,{options:ce,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(le,{name:"radio",options:ce,value:t,onChangeOption:l})))};var ue=function(){return r.a.createElement("div",{className:"size"},r.a.createElement("div",{className:"title"},"\u041d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Junior+"),r.a.createElement(A,null),r.a.createElement(oe,null))},se="/pre-junior",ie="/junior-plus";var me=function(){return r.a.createElement("div",null,r.a.createElement($.d,null,r.a.createElement($.b,{path:"/",exact:!0,render:function(){return r.a.createElement($.a,{to:se})}}),r.a.createElement($.b,{path:se,exact:!0,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement($.b,{path:ie,exact:!0,render:function(){return r.a.createElement(ue,null)}}),r.a.createElement($.b,{render:function(){return r.a.createElement(Z,null)}})))};var pe=function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:D.a.menuWrapper},r.a.createElement("div",{className:D.a.burgerMenu,onClick:function(){l(!t)}},"\u2630"),r.a.createElement("div",{className:"".concat(D.a.containerMenuLinks," ").concat(t&&D.a.activeMenu)},r.a.createElement(K.b,{to:se,activeClassName:D.a.active,className:D.a.menuLinks}," PreJunior"),r.a.createElement(K.b,{to:ie,activeClassName:D.a.active,className:D.a.menuLinks}," Junior + "),r.a.createElement(K.b,{to:"/todo",activeClassName:D.a.active,className:D.a.menuLinks}," ToDo list "),r.a.createElement(K.b,{to:"/checkbox",activeClassName:D.a.active,className:D.a.menuLinks}," My check box "),r.a.createElement(K.b,{to:"/button",activeClassName:D.a.active,className:D.a.menuLinks}," My button ")))};var _e=function(){return r.a.createElement("div",null,r.a.createElement(K.a,null,r.a.createElement(pe,null),r.a.createElement(me,null)))};var Ee=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(f,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(z,null),r.a.createElement(_e,null),r.a.createElement(Q,null),r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.f051a4af.chunk.js.map