(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=a(21),i=(a(42),a(4)),s=a(11),u=a(6),p=a(5),m=a(7),h=a(18),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Welcome home!"),r.a.createElement("p",null,"You have reached the home page."))}}]),t}(r.a.Component),b=a(33),f=a.n(b),E=a(16),g=a(8),j=a.n(g),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).toggle=function(e,t){var n=a.state.data,r=a.state.data.sections[e].fields,l=r.findIndex(function(e){return e.name==t});r[l]&&(r[l].options.hidden=!r[l].options.hidden,n.sections[e].fields=r,a.setState({data:n}))},a.state={data:e.data},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderData",value:function(){var e=this,t=this.state.data,a=t.sections.map(function(t,a){return r.a.createElement(G.Section,{key:a},r.a.createElement(G.Heading,null,t.title),r.a.createElement(G.SubHeading,null,t.description),t.fields.map(function(t,n){return r.a.createElement(G.Input,Object(E.a)({},t,{toggle:e.toggle,section:a,key:n}),null)}))});return r.a.createElement(j.a,null,r.a.createElement(G.Title,null,t.title),a)}},{key:"render",value:function(){return r.a.createElement(j.a.Group,null,this.renderData())}}]),t}(r.a.Component);var O=a(34),v=a.n(O),k=a(22),w=a.n(k);function x(){return Math.floor(999999*Math.random())}var S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleFileSelect=function(e){var t=e.target.files;a.setState({label:t.length?e.target.files[0].name:"No images chosen"}),a.props.onChange(e)},a.state={label:"Choose images"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"custom-file",key:x()},r.a.createElement("input",Object.assign({},this.props,{type:"file",accept:"image/*",capture:"camera",className:"custom-file-input",onChange:this.handleFileSelect.bind(this)})),r.a.createElement("div",{className:"custom-file-label",key:x()},this.state.label))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).change=function(e){var t=a.state.current,n=t.findIndex(function(t){return t.name=e.target.name});t[n].value=e.target.value,a.setState({current:t})},a.state={rows:[],current:e.fields,fields:e.fields},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(j.a.Group,{key:x()},this.state.rows.map(function(e){return r.a.createElement(j.a.Row,{key:x()},e.map(function(e){return r.a.createElement(w.a,{key:x()},r.a.createElement(T,e,null))}))}),r.a.createElement(j.a.Row,null,this.state.fields.map(function(t){return r.a.createElement(w.a,{key:x()},r.a.createElement(T,Object(E.a)({},t,{key:x(),change:e.change.bind(e)}),null))})),r.a.createElement(v.a,{variant:"secondary"},r.a.createElement("b",null,"+")))}}]),t}(r.a.Component),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={contents:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={id:this.props.name,name:this.props.name,placeholder:this.props.placeholder,onChange:function(t){e.props.options&&(e.props.options.toggle&&e.props.toggle(e.props.section,e.props.options.toggle),e.props.change&&e.props.change(t))}};switch(this.props.required&&(t.required="required"),this.props.type){case"text":case"password":case"number":case"tel":case"url":case"email":this.setState({contents:r.a.createElement(j.a.Control,Object(E.a)({},t,{type:this.props.type,key:x()}),null)});break;case"checkbox":case"radio":this.setState({contents:r.a.createElement(j.a.Check,Object(E.a)({},t,{type:this.props.type,key:x()}),null)});break;case"select":this.setState({contents:r.a.createElement(j.a.Control,Object(E.a)({},t,{key:x(),as:"select",children:this.props.options.options.map(function(t){var a={value:t.text.toLowerCase().replace(/ /g,"")};return e.props.options.selected==t.text&&(a.selected="selected"),r.a.createElement("option",a,t.text)})}),null)});break;case"textarea":this.setState({contents:r.a.createElement(j.a.Control,Object(E.a)({},t,{as:"textarea",rows:"3",key:x()}),null)});break;case"image":this.setState({contents:r.a.createElement(S,Object(E.a)({},t,{key:x()}),null)});break;case"list":this.setState({contents:r.a.createElement(C,Object(E.a)({},t,{fields:this.props.options.fields,key:x()}),null)})}}},{key:"render",value:function(){var e={};return this.props.options&&this.props.options.hidden&&(e.display="none"),r.a.createElement(j.a.Group,{style:e,key:x()},r.a.createElement(j.a.Label,null,this.props.label),r.a.createElement("p",{style:{marginTop:"-10px"}},r.a.createElement("small",null,r.a.createElement("em",null,this.props.description))),this.state.contents)}}]),t}(r.a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),t}(r.a.Component);G.FieldGroup=y,G.Section=function(e){return r.a.createElement("section",{style:{margin:"10px 0"}},e.children,r.a.createElement("hr",null))},G.Title=function(e){return r.a.createElement("section",null,r.a.createElement("h1",null,e.children))},G.Heading=function(e){return r.a.createElement("section",{style:{margin:"10px 0"}},r.a.createElement("h4",null,e.children))},G.SubHeading=function(e){return r.a.createElement("section",{style:{margin:"10px 0",fontWeight:"300",fontStyle:"italic",color:"grey"}},r.a.createElement("h6",null,e.children))},G.Input=T;var N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={data:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.ajax({url:"http://localhost:8080/api/form/1",method:"GET",dataType:"json"}).done(function(t){e.setState({data:t})}).fail(function(e){console.error("There was an error",e)})}},{key:"render",value:function(){return console.log("JSON",this.state.data),r.a.createElement("div",null,this.state.data?r.a.createElement(G.FieldGroup,{data:this.state.data}):"Loading...")}}]),t}(r.a.Component),F={maxWidth:"600px",width:"100%",margin:"0 auto",padding:"10px",boxSizing:"border-box"},H=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",key:x()},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/test/form/",key:x()},"Test Form")))),r.a.createElement("main",{style:F,className:"App"},r.a.createElement(h.a,{path:"/",exact:!0,component:d}),r.a.createElement(h.a,{path:"/test/form/",component:N})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.c65628a2.chunk.js.map