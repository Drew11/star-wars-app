(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/sw-logo.ec952e95.png"},,,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),l=a(6),i=a(4),u=a(5),o=a(11),m=a(9),p=a(12),f=a(1),d=a.n(f),b=a(3),h=function(){function e(){var t=this;Object(i.a)(this,e),this._url="https://swapi.co/api",this.getAllFilms=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSource("/films/");case 2:return a=e.sent,e.abrupt("return",a.results);case 4:case"end":return e.stop()}}),e)}))),this.anAsyncFunction=function(){var e=Object(b.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=a.substring(t._url.length,a.length),e.next=3,t.getSource(a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllQuery=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(a)){e.next=2;break}return e.abrupt("return",Promise.all(a.map((function(e){return t.anAsyncFunction(e)}))));case 2:return e.abrupt("return",t.anAsyncFunction(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(u.a)(e,[{key:"getSource",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._url).concat(t),{mode:"cors"});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),v=a(10),g=a.n(v),y=(a(19),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"logo",src:g.a,alt:""}))}),E=a(2),w=(a(20),function(e){var t=e.detail,a=e.detailName,c=e.getStatusDetail;"people"!==a&&"pilots"!==a&&"residents"!==a||(a="characters"),"homeworld"===a&&(a="planets");var s=(new h).getId(t),l="https://starwars-visualguide.com/assets/img/".concat(a,"/").concat(s,".jpg"),i=Object(n.useState)(!1),u=Object(E.a)(i,2),o=u[0],m=u[1];return o&&c({detail:t,imageSrc:l}),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"hero"},r.a.createElement("img",{src:"films"===a?"./star-wars-app/img/ep-".concat(t.episode_id,".jpg"):l,alt:""})),r.a.createElement("a",{href:t,onClick:function(e){m(!o),e.preventDefault()}},r.a.createElement("span",null,"films"===a?t.title:t.name)))}),j=(a(21),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"loadingio-spinner-double-ring-q85b3h4fg4p"},r.a.createElement("div",{className:"ldio-2r49py3qnqb"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)))))}),S=(a(22),function e(t){var a=t.film,c=t.toggleDetails,s=t.posterSrc,l=new h,i=Object(n.useState)(null),u=Object(E.a)(i,2),o=u[0],m=u[1],p=Object(n.useState)(null),f=Object(E.a)(p,2),v=f[0],g=f[1],y=Object(n.useState)(null),S=Object(E.a)(y,2),k=S[0],O=S[1],N=Object(n.useState)(null),x=Object(E.a)(N,2),F=x[0],A=x[1],Q=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},e.t0=d.a.keys(a);case 2:if((e.t1=e.t0()).done){e.next=26;break}if(n=e.t1.value,!Array.isArray(a[n])){e.next=15;break}return e.prev=5,e.next=8,l.getAllQuery(a[n]);case 8:r=e.sent,t[n]=r,e.next=15;break;case 12:e.prev=12,e.t2=e.catch(5),alert(e.t2);case 15:if("homeworld"!==n){e.next=24;break}if(null!==a[n]){e.next=20;break}return e.abrupt("continue",2);case 20:return e.next=22,l.getAllQuery(a[n]);case 22:c=e.sent,t[n]=c;case 24:e.next=2;break;case 26:m(t),g(Object.keys(a)),a.hasOwnProperty("episode_id")?A("./star-wars-app/img/ep-".concat(a.episode_id,".jpg")):A(s);case 29:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Q().catch((function(e){return console.log(e)}))}),[]);var C=function(e){var t=e.detail,a=e.imageSrc;O(t),A(a)},D=v?v.map((function(e,t){if(null!==a[e])return"homeworld"===e?r.a.createElement(w,{key:t,detail:o[e],detailName:e,getStatusDetail:C,posterSrc:s}):Array.isArray(a[e])&&a[e].length?r.a.createElement("ul",{className:"list-group",key:t},e,a[e].map((function(t,a){return r.a.createElement(w,{key:a,detail:o[e][a],detailName:e,getStatusDetail:C,posterSrc:s})}))):r.a.createElement("li",{className:"list-group-item",key:t},e,r.a.createElement("p",null,a[e]))})):r.a.createElement(j,null);return k?r.a.createElement(e,{film:k,toggleDetails:c,posterSrc:F}):r.a.createElement("div",{className:"film-details"},r.a.createElement("div",{className:"card text-white bg-secondary mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:c},"Hide Details")),r.a.createElement("img",{src:F,className:"poster"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},D))))}),k=function(e){var t=e.film,a=Object(n.useState)(!1),c=Object(E.a)(a,2),s=c[0],l=c[1],i=function(){l(!s)},u=s?r.a.createElement(S,{film:t,toggleDetails:i}):r.a.createElement(n.Fragment,null,r.a.createElement("span",null,t.title),r.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn-sm",onClick:i},"Show Details"));return r.a.createElement("li",{className:"list-group-item\r d-flex\r justify-content-between\r align-items-center"},u)},O=function(e){var t=e.visibleFilms,a=t?t.map((function(e){return r.a.createElement(k,{key:e.episode_id,film:e})})):r.a.createElement(j,null);return r.a.createElement("div",{className:"film-list"},r.a.createElement("ul",{className:"list-group"},a))},N=(a(23),function(e){var t=e.setSearchQuery,a=e.searchQuery,c=Object(n.useState)(a),s=Object(E.a)(c,2),l=s[0],i=s[1];return r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search",value:l,onChange:function(e){var t=e.target.value;i(t)}}),r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit",onClick:function(e){e.preventDefault(),t(l.trim())}},"Search")))}),x=(a(24),function(e){switch(e){case"title":return function(t,a){return t[e].localeCompare(a[e])}}}),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new h,a.state={searchQuery:"",sortField:"",films:null},a.setSearchQuery=function(e){a.setState({searchQuery:e})},a.sortFilms=function(){"title"===a.state.sortField?a.setState((function(e){return{films:Object(l.a)(e.films).reverse()}})):a.setState({sortField:"title"},(function(){a.setState((function(e){return{films:Object(l.a)(e.films).sort(x(a.state.sortField))}}))}))},a.getFilteredFilms=function(){var e=a.state,t=e.films,n=e.searchQuery;if(t)return t.filter((function(e){return e.title.toLocaleLowerCase().includes(n.toLocaleLowerCase())}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.swapiService.getAllFilms().then((function(t){return e.setState({films:t})}))}},{key:"render",value:function(){var e=this.state.searchQuery;return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(N,{setSearchQuery:this.setSearchQuery,searchQuery:e}),r.a.createElement("div",{className:"sort"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.sortFilms},"Sort by title")),r.a.createElement(O,{visibleFilms:this.getFilteredFilms()}))}}]),t}(r.a.Component);a(25);s.a.render(r.a.createElement(F,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.128892a1.chunk.js.map