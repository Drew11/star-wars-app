(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/sw-logo.ec952e95.png"},,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),i=a(6),l=a(4),u=a(5),o=a(11),m=a(9),p=a(12),f=a(1),b=a.n(f),v=a(3),d=function(){function e(){var t=this;Object(l.a)(this,e),this._url="https://swapi.co/api",this.getAllFilms=Object(v.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSource("/films/");case 2:return a=e.sent,e.abrupt("return",a.results);case 4:case"end":return e.stop()}}),e)}))),this.anAsyncFunction=function(){var e=Object(v.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=a.substring(t._url.length,a.length),e.next=3,t.getSource(a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllQuery=function(){var e=Object(v.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(a.map((function(e){return t.anAsyncFunction(e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(u.a)(e,[{key:"getSource",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._url).concat(t),{mode:"cors"});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),h=a(10),g=a.n(h),y=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{className:"logo",src:g.a,alt:""}))},E=a(2),j=(a(19),function(e){var t=e.detail,a=e.detailName,c=e.getStatusDetail,s=(new d).getId(t),i="https://starwars-visualguide.com/assets/img/".concat(a,"/").concat(s,".jpg"),l=Object(n.useState)(!1),u=Object(E.a)(l,2),o=u[0],m=u[1];return o&&c({detail:t,imageSrc:i}),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"hero"},r.a.createElement("img",{src:"films"===a?"./img/ep-".concat(s,".jpg"):i,alt:""})),r.a.createElement("a",{href:t,onClick:function(e){m(!o),e.preventDefault()}},r.a.createElement("span",null,"films"===a?t.title:t.name)))}),S=(a(20),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"loadingio-spinner-double-ring-q85b3h4fg4p"},r.a.createElement("div",{className:"ldio-2r49py3qnqb"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)))))}),w=(a(21),function e(t){var a=t.film,c=t.toggleDetails,s=t.posterSrc,i=new d,l=Object.keys(a),u=Object(n.useState)(null),o=Object(E.a)(u,2),m=o[0],p=o[1],f=Object(n.useState)(null),h=Object(E.a)(f,2),g=h[0],y=h[1],w=Object(n.useState)(null),N=Object(E.a)(w,2),O=N[0],k=N[1],x=function(){var e=Object(v.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},e.t0=b.a.keys(a);case 2:if((e.t1=e.t0()).done){e.next=11;break}if(n=e.t1.value,"object"!==typeof a[n]){e.next=9;break}return e.next=7,i.getAllQuery(a[n]);case 7:r=e.sent,t[n]=r;case 9:e.next=2;break;case 11:p(t),a.hasOwnProperty("episode_id")?k("./img/ep-".concat(a.episode_id,".jpg")):k(s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x()}),[]);var Q=function(e){var t=e.detail,a=e.imageSrc;y(t),k(a)},C=m?l.map((function(e,t){return"object"===typeof a[e]?r.a.createElement("ul",{className:"list-group",key:t},e,a[e].map((function(t,a){return r.a.createElement(j,{key:a,detail:m[e][a],detailName:e,getStatusDetail:Q})}))):r.a.createElement("li",{className:"list-group-item",key:t},e,r.a.createElement("p",null,a[e]))})):r.a.createElement(S,null);return g?r.a.createElement(e,{film:g,toggleDetails:c,posterSrc:O}):r.a.createElement("div",{className:"film-details"},r.a.createElement("div",{className:"card text-white bg-secondary mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:c},"Hide Details")),r.a.createElement("img",{src:O,className:"poster"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},C))))}),N=function(e){var t=e.film,a=Object(n.useState)(!1),c=Object(E.a)(a,2),s=c[0],i=c[1],l=function(){i(!s)},u=s?r.a.createElement(w,{film:t,toggleDetails:l}):r.a.createElement(n.Fragment,null,r.a.createElement("span",null,t.title),r.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn-sm",onClick:l},"Show Details"));return r.a.createElement("li",{className:"list-group-item\r d-flex\r justify-content-between\r align-items-center"},u)},O=function(e){var t=e.visibleFilms,a=t?t.map((function(e){return r.a.createElement(N,{key:e.episode_id,film:e})})):r.a.createElement(S,null);return r.a.createElement("div",{className:"film-list"},r.a.createElement("ul",{className:"list-group"},a))},k=(a(22),function(e){var t=e.setSearchQuery,a=e.searchQuery,c=Object(n.useState)(a),s=Object(E.a)(c,2),i=s[0],l=s[1];return r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search",value:i,onChange:function(e){var t=e.target.value;l(t)}}),r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit",onClick:function(e){e.preventDefault(),t(i.trim())}},"Search")))}),x=(a(23),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new d,a.state={searchQuery:"",filmList:null,visibleFilms:null,isSort:!1},a.setSearchQuery=function(e){a.setState({searchQuery:e})},a.sort=function(){a.setState((function(e){return{isSort:!e.isSort}}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.swapiService.getAllFilms().then((function(t){return e.setState({filmList:t,visibleFilms:t})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.searchQuery,r=a.filmList,c=a.isSort;if(t.searchQuery!==n||t.isSort!==c){var s=r.filter((function(e){return e.title.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));if(c){var l=Object(i.a)(s).sort((function(e,t){return e.title.localeCompare(t.title)}));this.setState({visibleFilms:l})}if(!c){var u=Object(i.a)(s).sort((function(e,t){return t.title.localeCompare(e.title)}));this.setState({visibleFilms:u})}}}},{key:"render",value:function(){var e=this.state,t=e.visibleFilms,a=e.searchQuery;return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(k,{setSearchQuery:this.setSearchQuery,searchQuery:a}),r.a.createElement("div",{className:"sort"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.sort},"Sort by title")),r.a.createElement(O,{visibleFilms:t}))}}]),t}(r.a.Component));s.a.render(r.a.createElement(x,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.a3670015.chunk.js.map