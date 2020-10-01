(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=a(9),i=a(47),u=a(43),m=function(e){var t=e.setTooltipContent;return r.a.createElement("div",{style:{margin:"auto",width:"90%",marginTop:"0vh",position:"absolute"}},r.a.createElement(u.ComposableMap,{projection:"geoEqualEarth","data-tip":"",projectionConfig:{scale:170}},r.a.createElement(u.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){return e.geographies.map((function(e){return r.a.createElement(u.Geography,{key:e.rsmKey,geography:e,stroke:"#FFF",strokeWidth:.5,onMouseEnter:function(){var a=e.properties.NAME;t("".concat(a))},onMouseLeave:function(){t("")},style:{default:{fill:"#bbd4bb",outline:"none"},hover:{fill:"#5a6e5a",outline:"none"},pressed:{fill:"#abd6ab",outline:"none"}}})}))}))))},s=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Global Civil Discourse Map"),r.a.createElement("p",null,"Comparing Speech, Press, and Information Sharing Practices Internationally"))},p=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(m,{setTooltipContent:c}),r.a.createElement(i.a,null,a))},d=a(39),E=a(40),b=a(42),f=a(41),h=a(117),y=a(120),g=a(121),O=a(122),v=a(14),j=a(29),C=a(44),_=a.n(C),S=function(){return{type:"ITEMS_LOADING"}},k=a(118),w=a(119),N=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onDeleteClick=function(t){e.props.deleteCountry(t)},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.props.getCountry()}},{key:"render",value:function(){var e=this,t=this.props.country.countries,a=this.props.country.loading;return r.a.createElement(h.a,null,a?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(k.a,{color:"light"},r.a.createElement("span",{style:{fontSize:24,display:"inline-block",marginRight:20}},"Loading"),r.a.createElement(w.a,{color:"primary"}))):r.a.createElement(y.a,null,r.a.createElement(v.TransitionGroup,{className:"country-list"},t.map((function(t){var a=t._id,n=t.name;return r.a.createElement(v.CSSTransition,{key:a,timeout:500,classNames:"fade"},r.a.createElement(g.a,null,n,r.a.createElement("div",{style:{float:"right"}},r.a.createElement(O.a,{className:"remove-btn",color:"warning",size:"sm"},"edit"),r.a.createElement(O.a,{className:"remove-btn",color:"danger",size:"sm",onClick:e.onDeleteClick.bind(e,a)},"delete"))))})))))}}]),a}(n.Component),T=Object(j.b)((function(e){return{country:e.country}}),{getCountry:function(){return function(e){e(S()),_.a.get("/api/countries").then((function(t){return e({type:"GET_COUNTRY",payload:t.data})}))}},deleteCountry:function(e){return function(t){_.a.delete("/api/countries/".concat(e)).then((function(a){return t({type:"DELETE_COUNTRY",payload:e})}))}}})(N),D=a(133),x=a(123),M=a(124),R=a(125),Y=a(126),A=a(127),G=a(128),I=Object(j.b)((function(e){return{country:e.country}}),{addCountry:function(e){return function(t){_.a.post("/api/countries",e).then((function(e){return t({type:"ADD_COUNTRY",payload:e.data})}))}}})((function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),m=u[0],s=u[1],p=Object(n.useState)(""),d=Object(l.a)(p,2),E=d[0],b=d[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),y=h[0],g=h[1],v=Object(n.useState)(!0),j=Object(l.a)(v,2),C=j[0],_=j[1],S=Object(n.useState)(""),k=Object(l.a)(S,2),w=k[0],N=k[1],T=Object(n.useState)(!0),I=Object(l.a)(T,2),L=I[0],U=I[1],F=Object(n.useState)(""),z=Object(l.a)(F,2),B=z[0],W=z[1],P=Object(n.useState)(!0),J=Object(l.a)(P,2),q=J[0],K=J[1],$=Object(n.useState)(""),H=Object(l.a)($,2),Q=H[0],V=H[1],X=Object(n.useState)(""),Z=Object(l.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(0),ne=Object(l.a)(ae,2),re=ne[0],ce=ne[1],oe=Object(n.useState)(0),le=Object(l.a)(oe,2),ie=le[0],ue=le[1],me=Object(n.useState)([]),se=Object(l.a)(me,2),pe=se[0],de=se[1],Ee=function(){o(!c)};return r.a.createElement("div",null,r.a.createElement(O.a,{color:"success",style:{marginBottom:"2rem"},onClick:Ee},"Add Country"),r.a.createElement(D.a,{isOpen:c,toggle:Ee},r.a.createElement(x.a,{toggle:Ee},"Create New Country"),r.a.createElement(M.a,null,r.a.createElement(R.a,{onSubmit:function(t){t.preventDefault();var a={name:m,code:E,population:y,millenium_dec:[{ratified:C,year:w}],freedom_speech:[{present:L,restrictions:B}],freedom_media:[{present:q,restrictions:Q,year:ee}],rwb_ranking:re,rwb_score:ie,sources:[pe]};e.addCountry(a),Ee()}},r.a.createElement(Y.a,null,r.a.createElement(A.a,{for:"name"},"Country"),r.a.createElement(G.a,{type:"text",name:"name",id:"name",placeholder:"Name",onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(G.a,{type:"text",name:"code",id:"code",placeholder:"Country Code",onChange:function(e){return b(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(G.a,{type:"number",name:"population",id:"population",placeholder:"Population",onChange:function(e){return g(e.target.value)}})),r.a.createElement(Y.a,null,r.a.createElement(A.a,{for:"md_rat"},"Millenium Declaration"),r.a.createElement(G.a,{type:"select",name:"md_rat",id:"md_rat",onChange:function(e){return _(e.target.value)}},r.a.createElement("option",{value:!0,selected:!0},"Yes"),r.a.createElement("option",{value:!1},"No")),r.a.createElement("br",null),r.a.createElement(G.a,{type:"number",name:"md_year",id:"md_year",placeholder:"Year",onChange:function(e){return N(e.target.value)}})),r.a.createElement(Y.a,null,r.a.createElement(A.a,{for:"free_speech"},"Freedom of Speech"),r.a.createElement(G.a,{type:"select",name:"free_speech",id:"free_speech",onChange:function(e){return U(e.target.value)}},r.a.createElement("option",{value:!0,selected:!0},"Yes"),r.a.createElement("option",{value:!1},"No")),r.a.createElement("br",null),r.a.createElement(G.a,{type:"text",name:"fs_restrictions",id:"fs_restrictions",placeholder:"Restrictions",onChange:function(e){return W(e.target.value)}})),r.a.createElement(Y.a,null,r.a.createElement(A.a,{for:"free_media"},"Freedom of Media"),r.a.createElement(G.a,{type:"select",name:"free_media",id:"free_media",onChange:function(e){return K(e.target.value)}},r.a.createElement("option",{value:!0,selected:!0},"Yes"),r.a.createElement("option",{value:!1},"No")),r.a.createElement("br",null),r.a.createElement(G.a,{type:"text",name:"fm_restrictions",id:"fm_restrictions",placeholder:"Restrictions",onChange:function(e){return V(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(G.a,{type:"number",name:"fm_year",id:"fm_year",placeholder:"Year",onChange:function(e){return te(e.target.value)}})),r.a.createElement(Y.a,null,r.a.createElement(A.a,{for:"rwb_rank"},"Reporters Without Borders"),r.a.createElement(G.a,{type:"number",name:"rwb_rank",id:"rwb_rank",placeholder:"Ranking",onChange:function(e){return ce(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(G.a,{type:"number",min:"0.00",step:"0.001",max:"1000.00",name:"rwb_index",id:"rwb_index",placeholder:"Score",onChange:function(e){return ue(e.target.value)}})),r.a.createElement(Y.a,null,r.a.createElement(A.a,{for:"sources"},"Sources"),r.a.createElement(G.a,{type:"textarea",name:"sources",id:"sources",placeholder:"List links separated by commma",onChange:function(e){return de(e.target.value)}})),r.a.createElement(O.a,{color:"success",style:{marginTop:"2rem"},block:!0},"Save")))))})),L=a(129),U=a(130),F=a(131),z=a(132),B=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(L.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(h.a,null,r.a.createElement(U.a,{href:"/admin"},"Admin Dashboard"),r.a.createElement(F.a,{onClick:function(){return c(!a)}}),r.a.createElement(z.a,{isOpen:a,navbar:!0}))))},W=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(h.a,null,r.a.createElement(I,null),r.a.createElement(T,null)))}}]),a}(n.Component),P=a(23),J=a(69),q=a(71),K=a(17),$={countries:[],loading:!1},H=Object(P.c)({country:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COUNTRY":return Object(K.a)(Object(K.a)({},e),{},{countries:t.payload,loading:!1});case"DELETE_COUNTRY":return Object(K.a)(Object(K.a)({},e),{},{countries:e.countries.filter((function(e){return e._id!==t.payload}))});case"ADD_COUNTRY":return Object(K.a)(Object(K.a)({},e),{},{countries:[t.payload].concat(Object(q.a)(e.countries))});case"ITEMS_LOADING":return Object(K.a)(Object(K.a)({},e),{},{loading:!0});default:return e}}}),Q=[J.a],V=Object(P.e)(H,{},Object(P.d)(P.a.apply(void 0,Q))),X=(a(108),a(70)),Z=a(7);a(67);var ee=function(){return r.a.createElement(j.a,{store:V},r.a.createElement(X.a,null,r.a.createElement("main",null,r.a.createElement(Z.c,null,r.a.createElement(Z.a,{path:"/",component:p,exact:!0}),r.a.createElement(Z.a,{path:"/admin",component:W})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){},75:function(e,t,a){e.exports=a(112)}},[[75,1,2]]]);
//# sourceMappingURL=main.6f8965f4.chunk.js.map