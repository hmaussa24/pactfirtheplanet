(this.webpackJsonppactfortheplanet=this.webpackJsonppactfortheplanet||[]).push([[0],{52:function(e,t,a){},54:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),c=a.n(r),s=a(14),o=a.n(s),i=(a(52),a(7)),l=a.n(i),u=a(11),d=a(31),m=(a(54),a(40)),p=a(41),j=a(46),h=a(45),b=a(16),f=a.n(b),x=a(42),O=a.n(x),g=a(81),v=a(82),y=a(83),k=a(84),w=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:""},e.componentClicked=function(){return console.log("click")},e.responseFacebook=function(t){return console.log(t),"unknown"===t.status||(e.setState({isLoggedIn:!0,userID:t.userID,name:t.name,email:t.email,picture:t.picture.data.url}),e.guardat(e.state)),Object(n.jsxs)(g.a,{url:"http://pactfortheplanet.com",quote:"CampersTribe - World is yours to explore",hashtag:"#PactForThePlanet",className:"compartir",children:[Object(n.jsx)(v.a,{size:36})," ",Object(n.jsx)("h6",{children:"Facebook "})]})},e.guardat=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("http://inmyhouse.co:4500/registro",t).then((function(e){e.data.status?console.log("ok"):console.log("error")}),(function(e){console.log("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"render",value:function(){var e;return e=this.state.isLoggedIn?Object(n.jsxs)("div",{style:{width:"100%",margin:"auto",background:"#f4f4f4",padding:"20px"},children:[Object(n.jsx)("img",{src:this.state.picture,alt:this.state.name}),Object(n.jsxs)("h2",{children:["Welcome: ",this.state.name]}),"email: ",this.state.email,Object(n.jsxs)("p",{children:[Object(n.jsxs)(g.a,{url:"http://inmyhouse.co",quote:"CampersTribe - World is yours to explore",hashtag:"#PactForThePlanet",className:"compartir",children:[Object(n.jsx)(v.a,{size:36})," ",Object(n.jsx)("h6",{children:"Facebook "})]}),Object(n.jsxs)(y.a,{url:"http://inmyhouse.co",quote:"CampersTribe - World is yours to explore",hashtag:"#PactForThePlanet",className:"compartir",children:[Object(n.jsx)(k.a,{size:36})," ",Object(n.jsx)("h6",{children:"Twitter "})]})]})]}):Object(n.jsx)(O.a,{appId:"2767623910165789",autoLoad:!0,fields:"name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook,textButton:"Firmar con Facebook",size:"medium"}),Object(n.jsx)("div",{className:"boton",children:e})}}]),a}(r.Component),I=a(87),q=a(89),F=a(88),C=a(85),N=a(90),T=a(86);a(73);var L=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(null),o=Object(d.a)(s,2),i=o[0],m=o[1],p=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://inmyhouse.co:4500/all").then(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t.data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log("error")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://inmyhouse.co:4500/count").then(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.data.result.numero);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log("error")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p(),j();var e=setInterval((function(){p(),j()}),3e3);return function(){return clearInterval(e)}}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(I.a,{bg:"light",expand:"lg",fixed:"top",children:[Object(n.jsx)(I.a.Brand,{href:"#home",children:"Pacto con el planeta"}),Object(n.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(I.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsx)(q.a,{className:"mr-auto"}),Object(n.jsxs)(F.a,{inline:!0,children:[Object(n.jsxs)(q.a.Link,{href:"#home",children:["HAN FIRMADO: ",i]}),Object(n.jsx)(C.a,{variant:"outline-success",href:"https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=haroldmaussa%40gmail.com&item_name=mantener+infraestructura&currency_code=USD",children:"Donar"})]})]})]}),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"pacto",children:[Object(n.jsx)("h3",{children:"Hoy hago un pacto con el planeta"}),Object(n.jsx)("p",{children:"Hoy en este dia, quiero hacer un pacto con el planeta, quiero hacerme cinco compromisos no solo conmigo mismo sino tambi\xe9n con el mundo entero, quiero ser parte del cambio, quiero contribuir a tener un mundo mejor y que la esperanza de un mejor ma\xf1ana sea mi mayor contribuci\xf3n al cuidado de este mundo, por las generaciones venideras, por mis hijos, por mis padres, mis nietos, por mis sobrinos, por mi mismo hoy me comprometo a cumplir estos cinco prop\xf3sitos para el resto de mi vida."}),Object(n.jsxs)(N.a,{children:[Object(n.jsx)(N.a.Item,{children:"Reducir el uso de pl\xe1sticos, y reutilizar lo m\xe1s que pueda los empaques, ayudare a reciclar para que en el mundo se reduzca la contaminaci\xf3n esta ser\xe1 mi contribuci\xf3n."}),Object(n.jsx)(N.a.Item,{children:"No arrojar basura a las calles, fuentes h\xeddricas (R\xedos, Lagos o Mares) para conservar el agua, la fauna que en ella habita."}),Object(n.jsx)(N.a.Item,{children:"Cuidar el agua, no generar desperdicios, cerrar\xe9 la llave y los grifos cuando no la est\xe9 usando y cuidar las fuentes naturales de agua a mi alrededor."}),Object(n.jsx)(N.a.Item,{children:"Respetar el medio ambiente, plantas, \xe1rboles, animales y dem\xe1s recursos naturales para que las generaciones que vengan despu\xe9s de mi las disfruten."}),Object(n.jsx)(N.a.Item,{children:"Ense\xf1ar\xe9 a mis Hijos, Sobrinos, Nietos a cumplir los cuatro compromisos de este pacto."})]}),Object(n.jsx)("p",{children:"Me comprometo a cumplir por siempre este pacto, y para constancia dejo mi firma digital en \xe9l, como muestra de cumplimiento y de ejemplo para los dem\xe1s, pero sobretodo para no olvidarlo nunca."})]}),Object(n.jsxs)("div",{className:"facebook",children:[Object(n.jsx)(w,{}),Object(n.jsxs)(N.a,{children:[Object(n.jsx)(N.a.Item,{style:{textAlign:"center"},children:Object(n.jsx)("h4",{children:"Los que ya firmaron"})}),a.map((function(e){return Object(n.jsx)(N.a.Item,{children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)("img",{width:64,height:64,className:"mr-3",src:e.picture,alt:"Generic placeholder"}),Object(n.jsx)(T.a.Body,{children:Object(n.jsx)("h5",{children:e.name})})]})},e.id)}))]})]})]}),Object(n.jsx)("div",{})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),P()}},[[77,1,2]]]);
//# sourceMappingURL=main.644d5530.chunk.js.map