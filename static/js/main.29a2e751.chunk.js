(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={menuWrapper:"hw5_menuWrapper__2x_VJ",burgerMenu:"hw5_burgerMenu__bs6r_",containerMenuLinks:"hw5_containerMenuLinks__2SknV",activeMenu:"hw5_activeMenu__17Q8K",menuLinks:"hw5_menuLinks__3BJH6",active:"hw5_active__1b596"}},,,,,function(e,a,t){e.exports={message:"Message_message__25yjI",img:"Message_img__1ATHl",content:"Message_content__30jwG",name:"Message_name__2_dEA",text:"Message_text__g2jFz",time:"Message_time__3AZVk",clear:"Message_clear__3ABbb"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1hJg2",error:"Greeting_error__25cUs",errorFalse:"Greeting_errorFalse__Ea6O0",input:"Greeting_input__2zCuP",errorText:"Greeting_errorText__3zlcA",totalUsers:"Greeting_totalUsers__3LwG0",displayNone:"Greeting_displayNone__hYHbj",button:"Greeting_button__2zB8B",content:"Greeting_content__3v9qX"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__F4q3l",input:"SuperInputText_input__n-oTa",errorInput:"SuperInputText_errorInput__2e7mf",error:"SuperInputText_error__3CxLC"}},,function(e,a,t){e.exports={Affairs:"Affairs_Affairs__PFqud",button:"Affairs_button__udJfi"}},,function(e,a,t){e.exports={blue:"HW4_blue__D1ka8",column:"HW4_column__47bQc"}},function(e,a,t){e.exports={default:"SuperButton_default__1IIC4",red:"SuperButton_red__1CCfd",button:"SuperButton_button__11MFq",blink:"SuperButton_blink__1Rlog"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__NyR2A",spanClassName:"SuperCheckbox_spanClassName__3Bosx"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__1hVV_",label:"SuperRadio_label__19iu7"}},function(e,a,t){e.exports={item:"HW8_item__38n3d",button:"HW8_button__3DaeU"}},,,,,,,function(e,a,t){e.exports={App:"App_App__2Fo5H"}},function(e,a,t){e.exports={select:"SuperSelect_select__2TMTz",option:"SuperSelect_option__2DyKf"}},,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=(t(36),t(28)),u=t.n(o),i=t(8),s=t.n(i);var m=function(e){return r.a.createElement("div",{className:s.a.message},r.a.createElement("img",{className:s.a.img,alt:"\u0422\u0435\u043a\u0441\u0442",src:e.avatar}),r.a.createElement("div",{className:s.a.content},r.a.createElement("div",{className:s.a.name},e.name),r.a.createElement("div",{className:s.a.text},e.message),r.a.createElement("div",{className:s.a.time},e.time)),r.a.createElement("div",{className:s.a.clear}))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Artem",_="npm start press?",E="22:00";var f=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(m,{avatar:p,name:d,message:_,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},v=t(2),h=t(15),b=t.n(h);var g=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{className:b.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}}," X"))};var k=function(e){var a=e.data.map((function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:b.a.Affairs},a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(n.useState)(C),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(v.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(12),j=t(9),y=t.n(j),x=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=y.a.errorFalse,u=y.a.displayNone;return r.a.createElement("div",{className:y.a.content},r.a.createElement("input",{value:a,onChange:t,className:l?o:""}),r.a.createElement("div",{className:l?y.a.errorText:u},l?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f":""),r.a.createElement("button",{onClick:n,className:y.a.button},"add"),r.a.createElement("br",null),r.a.createElement("span",{className:y.a.totalUsers},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",c))},w=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(!1),s=Object(v.a)(i,2),m=s[0],p=s[1],d=a.length;return r.a.createElement(x,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){""===o?p(!0):(p(!1),setTimeout((function(){return alert("Hello ".concat(o," !"))}),10),t(o))},error:m,totalUsers:d})},S=t(45);var A=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(w,{users:t,addUserCallback:function(e){var a={_id:Object(S.a)(),name:e};l([].concat(Object(O.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(4),M=t(13),F=t.n(M),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(F.a.error," ").concat(u||""),m="".concat(F.a.input," ").concat(c?F.a.errorInput:F.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m,placeholder:"Please enter text"},i)),c&&r.a.createElement("span",{className:s},c))},B=t(17),J=t.n(B),L=t(18),G=t.n(L),P=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(a?G.a.red:G.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},H=t(19),U=t.n(H),W=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(U.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:U.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(v.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(I,{className:J.a.blue}),r.a.createElement(P,null,"default"),r.a.createElement(P,{red:!0,onClick:o},"delete "),r.a.createElement(P,{disabled:!0},"disabled"),r.a.createElement(W,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(W,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},D=t(3),q=t.n(D),K=t(7),R=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(T.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(v.a)(o,2),i=u[0],s=u[1],m=l||{},p=m.children,d=m.onDoubleClick,_=(m.className,Object(T.a)(m,["children","onDoubleClick","className"]));return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){s(!i),a&&a(e)},onEnter:function(){s(!i),t&&t()}},c)):r.a.createElement("span",Object.assign({onClick:function(e){s(!i),d&&d(e)},className:"input-hw6"},_),p||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function X(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}V("test",{x:"A",y:1});X("test",{x:"",y:0});var Q=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:"wrapper-hw6"},r.a.createElement("div",null,r.a.createElement(R,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:"button-hw6"},r.a.createElement(P,{onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(P,{onClick:function(){var e=X("editable-span-value",t);l(e)}},"restore"))))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement("div",{className:"size"},r.a.createElement("div",{className:"title"},"\u041d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u043b\u044f PreJunior")),r.a.createElement(z,null),r.a.createElement(Q,null))};var Z=function(){},$=t(1),ee=(t(37),t(29)),ae=t.n(ee),te=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(T.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,a){return r.a.createElement("option",{className:ae.a.option,key:e+"-"+a,value:e}," ",e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},ne=t(20),re=t.n(ne),le=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=Object(T.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){l&&l(e.currentTarget.value)},u=re.a.radio,i=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t,className:re.a.label},r.a.createElement("input",Object.assign({className:u,type:"radio",name:a,checked:n===e,value:e,onChange:o},c)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},ce=["x","y","z"];var oe=function(){var e=Object(n.useState)(ce[1]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(te,{options:ce,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(le,{name:"radio",options:ce,value:t,onChangeOption:l})))},ue=function(e,a){switch(a.type){case"sort":if("up"===a.payload)return Object(O.a)(e).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0}));if("down"===a.payload)return Object(O.a)(e).sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:0}));case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},ie=t(21),se=t.n(ie),me=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var pe=function(){var e=Object(n.useState)(me),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,className:se.a.item},r.a.createElement("span",null,e.name),e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",{className:se.a.button},r.a.createElement("div",null,r.a.createElement(P,{onClick:function(){return l(ue(me,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(P,{onClick:function(){return l(ue(me,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(P,{onClick:function(){return l(ue(me,{type:"check",payload:18}))}},"check 18"))))};var de=function(){return r.a.createElement("div",{className:"size"},r.a.createElement("div",{className:"title"},"\u041d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Junior+"),r.a.createElement(A,null),r.a.createElement(oe,null),r.a.createElement(pe,null))},_e="/pre-junior",Ee="/junior-plus";var fe=function(){return r.a.createElement("div",null,r.a.createElement($.d,null,r.a.createElement($.b,{path:"/",exact:!0,render:function(){return r.a.createElement($.a,{to:_e})}}),r.a.createElement($.b,{path:_e,exact:!0,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement($.b,{path:Ee,exact:!0,render:function(){return r.a.createElement(de,null)}}),r.a.createElement($.b,{render:function(){return r.a.createElement(Z,null)}})))};var ve=function(){var e=Object(n.useState)(!1),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:q.a.menuWrapper},r.a.createElement("div",{className:q.a.burgerMenu,onClick:function(){l(!t)}},"\u2630"),r.a.createElement("div",{className:"".concat(q.a.containerMenuLinks," ").concat(t&&q.a.activeMenu)},r.a.createElement(K.b,{to:_e,activeClassName:q.a.active,className:q.a.menuLinks}," PreJunior"),r.a.createElement(K.b,{to:Ee,activeClassName:q.a.active,className:q.a.menuLinks}," Junior + "),r.a.createElement(K.b,{to:"/todo",activeClassName:q.a.active,className:q.a.menuLinks}," ToDo list "),r.a.createElement(K.b,{to:"/checkbox",activeClassName:q.a.active,className:q.a.menuLinks}," My check box "),r.a.createElement(K.b,{to:"/button",activeClassName:q.a.active,className:q.a.menuLinks}," My button ")))};var he=function(){return r.a.createElement("div",null,r.a.createElement(K.a,null,r.a.createElement(ve,null),r.a.createElement(fe,null)))};var be=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(f,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(z,null),r.a.createElement(he,null),r.a.createElement(Q,null),r.a.createElement(oe,null),r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.29a2e751.chunk.js.map