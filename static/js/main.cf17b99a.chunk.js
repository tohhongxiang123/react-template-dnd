(this["webpackJsonpdnd-text-editor"]=this["webpackJsonpdnd-text-editor"]||[]).push([[0],{19:function(e,t,n){e.exports={contentEditorItem:"ContentEditorItem_contentEditorItem__2QJko",dragActions:"ContentEditorItem_dragActions__35NwQ",dragHandle:"ContentEditorItem_dragHandle__242wK"}},26:function(e,t,n){e.exports={widgetListRoot:"WidgetList_widgetListRoot__2LIaA",widgetListItemClone:"WidgetList_widgetListItemClone__2lL6T"}},38:function(e,t,n){e.exports={editorRoot:"Editor_editorRoot__jZ_IS"}},40:function(e,t,n){e.exports={fieldGroup:"ActiveWidget_fieldGroup__3yAx6"}},45:function(e,t,n){e.exports={layout:"App_layout__11VGl"}},46:function(e,t,n){e.exports=n(92)},51:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(7),s=n.n(a),o=n(8),l=n(9),p=n(1),d=n(4),c=(n(51),n(38)),u=n.n(c),m=n(3),f=n(39),g=n(40),y=n.n(g);function E(e){var t=e.widget,n=e.updateWidget,a=Object(r.useRef)(null);return i.a.createElement("div",{ref:a},function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=n.join("-"),a=Object.entries(t.props).map((function(e){var t=Object(d.a)(e,2),n=t[0];return T(n,t[1],"props-".concat(n,"-").concat(r))})),s=t.innerText?T(t.type,t.innerText,"-innerText-".concat(r)):null,l=t.fields.map((function(t,r){return e(t,[].concat(Object(o.a)(n),[r]))}));return console.log(t),i.a.createElement("div",{key:r},i.a.createElement("strong",null,t.name),a,s,l.map((function(e,t){return i.a.createElement("div",{className:y.a.fieldGroup,key:t},e)})))}(t),i.a.createElement("button",{onClick:function(){var e=Array.from(a.current.querySelectorAll("input")).map((function(e){var t={props:{},arrayIndices:[]},n=e.id.split("-"),r=Object(f.a)(n),i=r[0],a=r[1],s=r.slice(2);return 1===s.length&&""===s[0]?t.arrayIndices=[]:t.arrayIndices=s,i?t[i][a]=e.value:t[a]=e.value,t}));n(e)}},"OK"))}function T(e,t,n){return i.a.createElement("div",{key:n},i.a.createElement("label",{htmlFor:n},e),i.a.createElement("input",{id:n,defaultValue:t}))}function O(e){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(p.a)({},t.props,{style:t.style,key:n.join("-")});t.innerText&&(r.dangerouslySetInnerHTML={__html:t.innerText});return i.a.createElement(t.type,r,t.fields.length>0?t.fields.map((function(t,r){return e(t,[].concat(Object(o.a)(n),[r]))})):null)}(e.widget)}var x=n(19),h=n.n(x);function b(e){var t=e.index,n=e.focus,r=e.widget,a=e.updateWidget,s=e.focusWidget,o=e.deleteWidget;return i.a.createElement(m.b,{draggableId:"".concat(t),index:t},(function(e){return i.a.createElement("div",Object.assign({},e.draggableProps,{ref:e.innerRef,className:h.a.contentEditorItem}),i.a.createElement("div",{className:h.a.dragActions},i.a.createElement("div",Object.assign({},e.dragHandleProps,{className:h.a.dragHandle})),n!==t&&i.a.createElement("button",{onClick:s},"Edit"),i.a.createElement("button",{onClick:o},"Delete")),n===t?i.a.createElement(E,{widget:r,updateWidget:a,key:t}):i.a.createElement(O,{widget:r,key:t}))}))}function _(e){var t=e.items,n=e.focus,r=e.focusWidget,a=e.updateWidget,s=e.deleteWidget;return i.a.createElement(m.c,{droppableId:"editor"},(function(e){return i.a.createElement("div",Object.assign({className:u.a.editorRoot},e.droppableProps,{ref:e.innerRef}),t.map((function(e,t){return i.a.createElement(b,{key:t,index:t,focus:n,widget:e,updateWidget:a(t),focusWidget:r(t),deleteWidget:s(t)})})),e.placeholder)}))}var v=n(26),I=n.n(v);function w(e){var t=e.widgets;return i.a.createElement(m.c,{droppableId:"widget-list",isDropDisabled:!0},(function(e){return i.a.createElement("div",Object.assign({className:I.a.widgetListRoot},e.droppableProps,{ref:e.innerRef}),Object.entries(t).map((function(e,t){var n=Object(d.a)(e,2),r=n[0],a=n[1];return i.a.createElement(m.b,{draggableId:"widget-".concat(r),index:t,key:r},(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),i.a.createElement("p",null,a.name)),t.isDragging&&i.a.createElement("div",{className:I.a.widgetListItemClone},i.a.createElement("p",null,a.name)))}))})),e.placeholder)}))}var N=n(45),j=n.n(N),L={TEXT_MODULE:{id:"TEXT_MODULE",name:"Text Module",type:"div",style:{},props:{},fields:[{name:"Title",type:"h1",style:{},props:{},fields:[],innerText:"This is the header"},{name:"Description",type:"p",style:{},props:{},fields:[],innerText:"This is the <strong>description</strong>"}]},IMAGE_MODULE:{id:"IMAGE_MODULE",name:"Image Module",type:"div",style:{margin:"20px"},props:{},fields:[{name:"IMAGE",type:"img",style:{},props:{src:"https://http.cat/206",alt:"Nice cat"},fields:[]}]},TEXT_2_3_COLUMNS:{id:"TEXT_2_3_COLUMNS",name:"Text 2/3 Columns",type:"div",style:{display:"flex"},props:{},fields:[{id:"1",name:"TEXT_MODULE",type:"div",style:{},props:{},fields:[{name:"Title",type:"h1",style:{},props:{},fields:[],innerText:"Column 1 header"},{name:"Description",type:"p",style:{},props:{},fields:[],innerText:"Column 1 description"}]},{id:"1",name:"TEXT_MODULE",type:"div",style:{},props:{},fields:[{name:"Title",type:"h1",style:{color:"red"},props:{},fields:[],innerText:"Column two header"},{name:"Description",type:"p",style:{},props:{},fields:[],innerText:"Col 2 desc"}]},{id:"1",name:"TEXT_MODULE",type:"div",style:{},props:{},fields:[{name:"Title",type:"h1",style:{},props:{},fields:[],innerText:"Column 3 header"},{name:"Description",type:"p",style:{},props:{},fields:[],innerText:"Col three desc"}]}]},LINK_BUTTON:{id:"LINK_BUTTON",name:"Link Button",type:"a",style:{},props:{href:"https://www.google.com",target:"_blank",rel:"noopener noreferrer"},fields:[{name:"BUTTON",type:"button",style:{},props:{},fields:[],innerText:"This is the button label"}]},HORIZONTAL_BOX_MODULE:{id:"HORIZONTAL_BOX_MODULE",name:"Horizontal Box Module",type:"div",style:{display:"grid",gridTemplateColumns:"auto 1fr auto",gridGap:"20px"},props:{},fields:[{name:"IMAGE",type:"img",style:{},props:{src:"http://htmltest.ieplsg.com/resources/image/ExpressVPN-svg.png",alt:"ExpressVPN"},fields:[]},{id:"1",name:"TEXT_MODULE",type:"div",style:{},props:{},fields:[{name:"Title",type:"h1",style:{},props:{},fields:[],innerText:"ExpressoVPN"},{name:"Description",type:"p",style:{},props:{},fields:[],innerText:"Test ExpressoVPN\u2019s full arsenal for a whopping 30 days without spending anything. See for yourself what this service is about. Most popular VPN of 2019."}]},{name:"BUTTON_GROUP",type:"div",style:{display:"flex",flexDirection:"column",textAlign:"center"},props:{},fields:[{name:"LINK_BUTTON",type:"a",style:{},props:{href:"https://www.google.com",target:"_blank",rel:"noopener noreferrer"},fields:[{name:"BUTTON",type:"button",style:{},props:{},fields:[],innerText:"Download expressVPN for $69.99"}]},{id:"4",name:"LINK_BUTTON",type:"a",style:{},props:{href:"https://www.google.com",target:"_blank",rel:"noopener noreferrer"},fields:[{name:"BUTTON",type:"button",style:{},props:{},fields:[],innerText:"Show me how to surpass the great firewall"}]}]}]},TEXT_WITH_GRAPHIC:{id:"TEXT_WITH_GRAPHIC",name:"Text with Graphic",type:"div",style:{display:"flex",justifyContent:"space-around",alignItems:"center"},props:{},fields:[{id:"2",name:"IMAGE_MODULE",type:"div",style:{margin:"20px",maxWidth:"300px",maxHeight:"300px"},props:{},fields:[{name:"IMAGE",type:"img",style:{},props:{src:"http://htmltest.ieplsg.com/resources/image/Robots_logo.svg",alt:"Redux is the best :)"},fields:[]}]},{name:"Title",type:"h1",style:{},props:{},fields:[],innerText:"WHAT IS HARDWARE"}]},"1_6_BOX_MODULE":{id:"1_6_BOX_MODULE",name:"1/6 Box Module",type:"div",style:{display:"flex"},props:{},fields:[{name:"BOX_MODULE",type:"a",style:{border:"1px solid #ccc"},props:{href:"https://www.reddit.com",target:"_blank",rel:"noopener noreferrer"},fields:[{name:"IMAGE",type:"img",style:{width:"100px",height:"100px",margin:"0 auto"},props:{src:"http://htmltest.ieplsg.com/resources/image/communication-1.png",alt:"Redux is the best :)"},fields:[]},{name:"Description",type:"p",style:{},props:{},fields:[],innerText:"Cannot communicate"}]},{name:"BOX_MODULE",type:"div",style:{border:"1px solid #ccc"},props:{},fields:[{name:"IMAGE",type:"img",style:{width:"100px",height:"100px",margin:"0 auto"},props:{src:"http://htmltest.ieplsg.com/resources/image/communication-1.png",alt:"Redux is the best :)"},fields:[]},{name:"Description",type:"p",style:{},props:{},fields:[],innerText:"Cannot communicate"}]},{name:"BOX_MODULE",type:"div",style:{border:"1px solid #ccc"},props:{},fields:[{name:"IMAGE",type:"img",style:{width:"100px",height:"100px",margin:"0 auto"},props:{src:"http://htmltest.ieplsg.com/resources/image/communication-1.png",alt:"Redux is the best :)"},fields:[]},{name:"Description",type:"p",style:{},props:{},fields:[],innerText:"Cannot communicate"}]}]}};s.a.render(i.a.createElement((function(){var e=Object(r.useState)({}),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)([]),c=Object(d.a)(s,2),u=c[0],f=c[1],g=Object(r.useState)(null),y=Object(d.a)(g,2),E=y[0],T=y[1];return i.a.createElement("div",{className:j.a.layout},i.a.createElement(m.a,{onDragEnd:function(e){var t,n,r=e.source,i=e.destination,s=e.draggableId;i&&(i.droppableId===r.droppableId&&i.index===r.index||(r.droppableId!==i.droppableId&&null!==i.index?function(e,t){var n=e.replace("widget-",""),r=L[n],i="".concat(Date.now().toString(),"-").concat(n);a((function(e){return Object(p.a)({},e,Object(l.a)({},i,r))})),f((function(e){var n=Array.from(e);return n.splice(t,0,i),n}))}(s,i.index):(t=r.index,n=i.index,f((function(e){var r=Array.from(e),i=r.splice(t,1)[0];return r.splice(n,0,i),r})))))}},i.a.createElement(_,{items:u.map((function(e){return n[e]})),focus:E,updateWidget:function(e){return function(t){var r=u[e],i=t.reduce((function(e,t){return function e(t,n,r){if(0===t.length)return Object(p.a)({},n,{props:Object(p.a)({},n.props,{},r.props),style:Object(p.a)({},n.style,{},r.style)});if(1===t.length){var i=JSON.parse(JSON.stringify(n.fields)),a=i[t[0]];return i.splice(t[0],1,Object(p.a)({},a,{},r,{props:Object(p.a)({},a.props,{},r.props),style:Object(p.a)({},a.style,{},r.style)})),Object(p.a)({},n,{fields:i})}var s=JSON.parse(JSON.stringify(n.fields));return s.splice(t[0],1,e(t.slice(1),s[t[0]],r)),Object(p.a)({},n,{fields:s})}(t.arrayIndices,e,t)}),n[r]);a((function(e){return Object(p.a)({},e,Object(l.a)({},r,i))})),T(null)}},focusWidget:function(e){return function(){return T(e)}},deleteWidget:function(e){return function(){var t=u[e];console.log({id:t,sequence:u,items:n}),f((function(t){var n=Object(o.a)(t);return n.splice(e,1),n})),a((function(e){var n=JSON.parse(JSON.stringify(e));return delete n[t],n}))}}}),i.a.createElement(w,{widgets:L})))}),null),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cf17b99a.chunk.js.map