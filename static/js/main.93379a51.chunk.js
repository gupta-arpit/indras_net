(this.webpackJsonpindra=this.webpackJsonpindra||[]).push([[0],{132:function(e,t,a){},193:function(e,t,a){e.exports=a.p+"static/media/Sandpile.090bc1a0.jpg"},194:function(e,t,a){e.exports=a.p+"static/media/sandpile_2.d38b3fb1.png"},195:function(e,t,a){e.exports=a.p+"static/media/mendelobrot_sq.875dd8b8.jpg"},234:function(e,t,a){e.exports=a(585)},581:function(e,t,a){},582:function(e,t,a){},585:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(102),s=a(114),i=a(46),u=a(72),m=a(611),d=a(617),p=a(618);var h=function(){return r.a.createElement(d.a,{bg:"light",expand:"lg"},r.a.createElement(d.a.Brand,{href:"/"},"INDRA"),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"https://gcallah.github.io/indras_net/index.html"},"ABOUT"),r.a.createElement(p.a.Link,{href:"https://github.com/gcallah/indras_net/"},"SOURCE CODE"))))};function g(e){var t=e.children;return r.a.createElement(m.a,null,r.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"}),r.a.createElement(h,null),t)}g.defaultProps={children:{}};var v=g,b=a(14),f=a.n(b),E=a(33),y=a(18),k=a(19),S=a(20),O=a(21),j=a(616),D=a(612),N=a(84),w=a(220),x=a(208),C=a(53),I=a.n(C),P=(a(330),a(331),a(192)),B=a.n(P),M=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderImage=function(){var t=e.props,a=t.dots,n=t.speed,l=t.autoplay,c=t.className,o=t.data,s={arrows:!1,dots:a,infinite:!0,speed:n,slidesToShow:1,slidesToScroll:1,autoplay:l,fade:!0,className:c};return r.a.createElement("div",null,r.a.createElement(B.a,s,o.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("img",{src:e.image,className:"rounded-circle carousel",alt:"Responsive Model","data-toggle":"tooltip","data-placement":"top",title:e.title}))}))))},e}return Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderImage())}}]),a}(n.Component);M.defaultProps={dots:!1,speed:1e3,autoplay:!1,className:"",data:[]};var F=M,R=a(193),A=a.n(R),_=a(194),V=a.n(_),T=a(195),W=a.n(T),z=(a(132),function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).handleClick=function(e,t,a,n){localStorage.setItem("menu_id",e),localStorage.setItem("name",t),localStorage.setItem("source",a),localStorage.setItem("graph",n)},n.renderChooseModelProp=function(){return r.a.createElement("h1",{className:"small-header"},"Please choose a model: ")},n.state={allItems:[],loadingData:!1,apiFailed:!1,dataForCarousel:[{image:A.a,title:"by Seth Terashima"},{image:V.a,title:"by Colt Browninga"},{image:W.a,title:"by Adam Majewski"}]},n.api_server="https://indrasnet.pythonanywhere.com/",n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.history,e.prev=1,this.setState({loadingData:!0}),document.title="Home",e.next=6,I.a.get("".concat(this.api_server,"models"));case 6:a=e.sent,this.setState({allItems:a.data,loadingData:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.push("/errorCatching");case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loadingData,n=t.dataForCarousel,l=t.allItems;return t.apiFailed?r.a.createElement("h1",null,"404 Error"):a?r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(D.a,{size:"massive"},"Loading...")):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"margin-bottom-80"},r.a.createElement("h1",{className:"text-left"},"Indra Agent-Based Modeling System")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},this.renderChooseModelProp(),r.a.createElement(N.a,null,Object.keys(l).map((function(t){return r.a.createElement(w.a,{key:"".concat(l[t].name,"-tooltip"),placement:"right",overlay:r.a.createElement(x.a,null,l[t].doc)},r.a.createElement(s.b,{to:{pathname:"/models/props/".concat(l[t]["model ID"])},className:"text-primary w-75 p-3 list-group-item list-group-item-action link",key:l[t].name,onClick:function(){return e.handleClick(l[t]["model ID"],l[t].name,l[t].source,l[t].graph)}},l[t].name))})))),r.a.createElement("div",{className:"col-6"},r.a.createElement(F,{speed:5e3,autoplay:!0,className:"col-12",data:n}))))}}]),a}(n.Component));z.defaultProps={history:{}};var L=z,H=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={loadingData:!1},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loadingData:!0}),document.title="Indra | Work in Progress",this.setState({loadingData:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loadingData?r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(D.a,{size:"massive"},"Loading...")):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center"}},"Welcome to the Indra ABM platform!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"We will have this model running soon!"),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(n.Component),J=a(60),q=a(85);function $(e){var t=e.label,a=e.name,n=e.type,l=e.placeholder,c=e.propChange,o=e.error;return r.a.createElement("div",{key:t,className:"form-group"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:a,className:"col-sm-4 col-md-4 col-lg-4",key:t},t," "," "),r.a.createElement("input",{id:a,type:n,className:"col-sm-2 col-md-2 col-lg-2",style:{fontSize:"15pt"},placeholder:l,onChange:c,name:a}),r.a.createElement("span",{className:"col-sm-6 col-md-6 col-lg-6",style:{color:"red",fontSize:12}},o),r.a.createElement("br",null)))}$.defaultProps={label:"",name:"",type:"",placeholder:0,propChange:function(){},error:""};var U=$;var G=function(){return r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(D.a,{size:"massive"},"Loading..."))},X="https://indrasnet.pythonanywhere.com/models/props/",K=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).states=function(e){var t=n.state.modelDetails;Object.keys(t).forEach((function(t){n.setState((function(a){return{modelDetails:Object(q.a)({},a.modelDetails,Object(J.a)({},t,Object(q.a)({},a.modelDetails[t],{defaultVal:e[t].val})))}}))}))},n.errors=function(){var e=n.state.modelDetails;Object.keys(e).forEach((function(e){return n.setState((function(t){return{modelDetails:Object(q.a)({},t.modelDetails,Object(J.a)({},e,Object(q.a)({},t.modelDetails[e],{errorMessage:"",disabledButton:!1})))}}))}))},n.errorSubmit=function(){var e=n.state.modelDetails,t=!1;return Object.keys(e).forEach((function(a){t=t||e[a].disabledButton})),t},n.propChanged=function(e){var t=n.state.modelDetails,a=e.target,r=a.name,l=a.value,c=n.checkValidity(r,l);t[r].disabledButton=!0,1===c?(t[r].val=parseInt(l,10),t[r].errorMessage="",t[r].disabledButton=!1,n.setState({modelDetails:t})):-1===c?(t[r].errorMessage="**Wrong Input Type",t[r].val=t[r].defaultVal,n.setState({modelDetails:t})):(t[r].errorMessage="**Please input a number between ".concat(t[r].lowval," and ").concat(t[r].hival,"."),t[r].val=t[r].defaultVal,n.setState({modelDetails:t})),n.setState({disabledButton:n.errorSubmit()})},n.checkValidity=function(e,t){var a=n.state.modelDetails;return t<=a[e].hival&&t>=a[e].lowval?"INT"===a[e].atype&&!1===!!(t%1)||"DBL"===a[e].atype?1:-1:0},n.handleSubmit=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,r,l,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state.modelDetails,r=n.props.history,e.prev=3,e.next=6,I.a.put(X+localStorage.getItem("menu_id"),a);case 6:l=e.sent,c=localStorage.getItem("menu_id"),n.setState({envFile:l.data}),o=n.state.envFile,localStorage.setItem("envFile",JSON.stringify(o)),r.push({pathname:"/models/menu/".concat(c.toString(10)),state:{envFile:o}}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),r.push("/errorCatching");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),n.renderHeader=function(){return r.a.createElement("h1",{className:"header",style:{textAlign:"center",fontWeight:"200"}},"Please set the parameters for the ".concat(localStorage.getItem("name")," model"))},n.renderSubmitButton=function(){var e=n.state.disabledButton;return r.a.createElement("button",{type:"button",disabled:e,onClick:e?null:n.handleSubmit,className:"btn btn-primary m-2"},"Submit")},n.goback=function(){n.props.history.goBack()},n.state={modelDetails:{},loadingData:!1,disabledButton:!1,envFile:{}},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.history,e.prev=1,document.title="Indra | Property",this.setState({loadingData:!0}),e.next=6,I.a.get("".concat(X).concat(localStorage.getItem("menu_id")));case 6:a=e.sent,this.setState({modelDetails:a.data}),this.states(a.data),this.errors(a.data),this.setState({loadingData:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t.push("/errorCatching");case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loadingData,n=t.modelDetails;return a?r.a.createElement(G,null):r.a.createElement("div",null,r.a.createElement("h1",{className:"margin-top-60"}," "),this.renderHeader(),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("div",{className:"container"},Object.keys(n).map((function(t){return"question"in n[t]?r.a.createElement(U,{label:n[t].question,type:n[t].atype,placeholder:n[t].val,error:n[t].errorMessage,propChange:e.propChanged,name:t,key:t}):null})))),r.a.createElement("br",null),r.a.createElement("br",null),this.renderSubmitButton())}}]),a}(n.Component);K.defaultProps={history:{}};var Q=K,Y=a(56),Z=a(68),ee=a.n(Z),te=a(211),ae=a.n(te);function ne(e){var t=e.envFile;return e.loadingData?r.a.createElement(ae.a,{src:t}):null}ne.defaultProps={envFile:{},loadingData:!0};var re=ne,le=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(e){var n;Object(y.a)(this,a),n=t.call(this,e),ee()(Object(Y.a)(n));var r=n.props,l=r.msg,c=r.title;return n.state={msg:l,title:c},n}return Object(k.a)(a,[{key:"render",value:function(){var e=this.state,t=e.msg,a=e.title;return r.a.createElement("div",null,r.a.createElement("div",{className:"card w-50 model-status"},r.a.createElement("h5",{style:{textAlign:"center",fontSize:16},className:"card-header bg-primary text-white"},a),r.a.createElement("div",{className:"card-body overflow-auto"},r.a.createElement("pre",{className:"card-text"},t))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.msg!==t.msg?{msg:e.msg}:null}}]),a}(r.a.Component);le.defaultProps={msg:"",title:""};var ce=a(619),oe=a(614),se=function(e){var t=e.loadingData,a=e.code;return t?r.a.createElement(ce.a,{language:"python",style:oe.a},a):null};se.defaultProps={loadingData:!0,code:""};var ie=se,ue=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(y.a)(this,a),n=t.call(this,e),ee()(Object(Y.a)(n)),n.state={disabledButton:e.disabledButton,errorMessage:e.errorMessage,sendNumPeriods:e.sendNumPeriods,handleRunPeriod:e.handleRunPeriod},n}return Object(k.a)(a,[{key:"render",value:function(){var e=this.state,t=e.disabledButton,a=e.sendNumPeriods,n=e.handleRunPeriod,l=e.errorMessage;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",disabled:t,onClick:t?null:a,className:"btn btn-success m-2"},"  ","Run","  ")," ",r.a.createElement("span",null,"model for")," ",r.a.createElement("input",{type:"INT",className:"from-control m-2 number-input",placeholder:"10",onChange:n})," ","periods.",r.a.createElement("span",{className:"error-message"},l))}}]),a}(r.a.Component);ue.defaultProps={disabledButton:!0,errorMessage:"",sendNumPeriods:function(){},handleRunPeriod:function(){}};var me="https://indrasnet.pythonanywhere.com/models/menu/",de=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).viewSource=Object(E.a)(f.a.mark((function e(){var t,a,r,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.state.source,a=t.split("/"),r=a[a.length-1],e.next=6,I.a.get("https://raw.githubusercontent.com/gcallah/indras_net/master/models/".concat(r));case 6:return l=e.sent,e.abrupt("return",l.data);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return","Something has gone wrong.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),n.handleRunPeriod=function(e){n.setState({periodNum:e.target.value}),0===n.checkValidity(e.target.value)?n.setState({errorMessage:"**Please input an integer",disabledButton:!0}):n.setState({errorMessage:"",disabledButton:!1})},n.checkValidity=function(e){return e%1===0?1:0},n.handleClick=function(e){switch(n.setState({loadingData:!1,loadingSourceCode:!1,loadingDebugger:!1}),e){case 2:case 3:break;case 4:n.setState({loadingDebugger:!0});break;case 5:n.setState({loadingSourceCode:!0})}},n.sendNumPeriods=Object(E.a)(f.a.mark((function e(){var t,a,r,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.periodNum,r=t.envFile,n.setState({loadingData:!0}),e.prev=2,e.next=5,I.a.put("".concat(me,"run/").concat(String(a)),r,a);case 5:return l=e.sent,n.setState({envFile:l.data,loadingData:!1,msg:l.data.user.user_msgs}),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),n.renderHeader=function(){var e=n.state.name;return r.a.createElement("h1",{className:"header"},e)},n.MenuItem=function(e,t,a,l){return r.a.createElement(N.a.Item,{className:"w-50 text-primary p-3 list-group-item list-group-item-action",key:l,onClick:function(){return n.handleClick(t)}},a)},n.renderMenuItem=function(){var e=n.state,t=e.envFile,a=e.loadingDebugger,l=e.loadingSourceCode,c=e.sourceCode;return r.a.createElement("div",null,r.a.createElement(re,{loadingData:a,envFile:t}),r.a.createElement(ie,{loadingData:l,code:c}))},n.renderMapItem=function(){var e=n.state.menu;return r.a.createElement("div",{className:"row margin-bottom-80"},r.a.createElement("div",{className:"col w-25"},r.a.createElement(N.a,null,Object.keys(e).map((function(t,a){return e[t].id>1?n.MenuItem(a,e[t].id,e[t].question,e[t].func):null})))))},ee()(Object(Y.a)(n)),n.state={menu:{},loadingData:!1,envFile:{},source:"",periodNum:10,errorMessage:"",disabledButton:!1,loadingSourceCode:!1,loadingDebugger:!1},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,document.title="Indra | Menu",e.next=4,I.a.get(me);case 4:t=e.sent,this.setState({menu:t.data,name:localStorage.getItem("name"),source:localStorage.getItem("source"),envFile:JSON.parse(localStorage.getItem("envFile")),msg:JSON.parse(localStorage.getItem("envFile")).user.user_msgs}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:return e.prev=11,e.next=14,this.viewSource();case 14:a=e.sent,this.setState({sourceCode:a}),e.next=21;break;case 18:return e.prev=18,e.t1=e.catch(11),e.abrupt("return",!1);case 21:return e.abrupt("return",!0);case 22:case"end":return e.stop()}}),e,this,[[0,8],[11,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loadingData,a=e.msg,n=e.disabledButton,l=e.errorMessage;return t?r.a.createElement(G,null):r.a.createElement("div",null,this.renderHeader(),r.a.createElement("div",null,r.a.createElement(le,{title:"Model Status",msg:a,ref:this.modelStatusBoxElement})),r.a.createElement("ul",{className:"list-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement(ue,{disabledButton:n,errorMessage:l,sendNumPeriods:this.sendNumPeriods,handleRunPeriod:this.handleRunPeriod}),r.a.createElement("h3",{className:"margin-top-50 mb-4"},"Model Analysis:"))),this.renderMapItem()),this.renderMenuItem())}}]),a}(n.Component);de.defaultProps={history:{}};var pe=de,he=(a(581),function(e){var t=e.code,a=e.children;return r.a.createElement(i.a,{render:function(e){var n=e.staticContext;return n&&(n.status=t),a}})});he.defaultProps={code:0,children:{}};var ge=function(){return r.a.createElement(he,{code:404},r.a.createElement("div",{className:"NotFoundPage"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("div",null,"Page not found."),r.a.createElement("div",{className:"action"},r.a.createElement("a",{className:"btn btn-primary",href:"/"},"Guide me to the right path!"))))},ve=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={loadingData:!1},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loadingData:!0}),document.title="Indra | Work in Progress",this.setState({loadingData:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loadingData?r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(D.a,{size:"massive"},"Loading...")):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center"}},"Indra ABM platform"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"We are encountering some problems with the API server. We will have this model running soon!"),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(n.Component);function be(){var e=Object(o.a)(["\n  background: ",';\n  width: 100vw;\n  min-height: 100vh;\n  font-family: -apple-stem, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";\n  h1 {\n    color: ',";\n  }\n"]);return be=function(){return e},e}var fe=Object(u.b)("div")(be(),(function(e){return e.theme.background}),(function(e){return e.theme.body}));function Ee(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:L}),r.a.createElement(i.a,{exact:!0,path:"/wip",component:H}),r.a.createElement(i.a,{exact:!0,path:"/models/props/:id",component:Q}),r.a.createElement(i.a,{exact:!0,path:"/models/menu/:id",component:pe}),r.a.createElement(i.a,{exact:!0,path:"/errorCatching",component:ve}),r.a.createElement(i.a,{component:ge}))}var ye=Object(u.c)((function(){return r.a.createElement(fe,null,r.a.createElement(s.a,null,r.a.createElement(v,null,r.a.createElement(Ee,null))))})),ke=(a(582),a(583),a(584),a(221)),Se=a(222),Oe=a(615),je=a(44),De=a(86),Ne=a.n(De),we=Ne()("mode",{light:"#fafafa",dark:"#222"}),xe=Ne()("mode",{light:"#000",dark:"#fff"});Ne()("mode",{light:"#222",dark:"#eee"}),Ne()("mode",{light:"#eee",dark:"#222"});function Ce(){var e=Object(o.a)(["\n    background-color: ",";\n    color: ",";\n  "]);return Ce=function(){return e},e}var Ie=r.a.createContext(),Pe=Object(je.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#060606",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#060606",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(Se.a)(e,["classes"]);return r.a.createElement(Oe.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))})),Be=function(e){var t=e.children,a=r.a.useState({mode:"light",checkedB:!0}),n=Object(ke.a)(a,2),l=n[0],c=n[1],o=u.b.div(Ce(),we,xe),s=function(e){return function(t){var a="light"===l.mode?"dark":"light";c(Object(J.a)({mode:a},e,t.target.checked))}};return r.a.createElement(Ie.Provider,{value:{toggle:s}},r.a.createElement(u.a,{theme:{mode:l.mode}},r.a.createElement(o,null,r.a.createElement(Pe,{checked:l.checkedB,onChange:s("checkedB"),value:"checkedB"}),t)))};c.a.render(r.a.createElement(Be,null,r.a.createElement(ye,null)),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.93379a51.chunk.js.map