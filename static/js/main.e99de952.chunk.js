(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},48:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(17),n=c.n(i),o=(c(26),c(27),c(0));var l=function(){return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"404 Not Found"}),Object(o.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Error"})]})},r=(c(29),c(4)),d="63df7f2f2d0b4e6af7a695541ae601d5",j="https://image.tmdb.org/t/p/original",u=(c(30),c(18)),b=c.n(u).a.create({baseURL:"https://api.themoviedb.org/3"});var m=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){b.get("trending/all/week?api_key=".concat(d,"&language=en-US")).then((function(e){console.log(e.data.results[0]),s(e.data.results[0])}))}),[]),Object(o.jsxs)("div",{style:{backgroundImage:"url(".concat(c?j+c.backdrop_path:"",")")},className:"banner",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{className:"title",children:c?c.name:""}),Object(o.jsxs)("div",{className:"banner-buttons",children:[Object(o.jsx)("button",{className:"button",children:"Play"}),Object(o.jsx)("button",{className:"button",children:"My list"})]}),Object(o.jsx)("h1",{className:"description",children:c?c.overview:""})]}),Object(o.jsx)("div",{className:"fade"})]})},g=(c(48),c(19));var v=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(""),l=Object(r.a)(n,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){b.get(e.url).then((function(e){i(e.data.results)}))}),[]),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("div",{className:"posters",children:s.map((function(t){return Object(o.jsx)("img",{onClick:function(){return e=t.id,void b.get("/movie/".concat(e,"/videos?api_key=").concat(d,"&language=en-US")).then((function(e){0!==e.data.results.length?m(e.data.results[0]):console.log("Not available")}));var e},className:e.isSmall?"smallPoster":"poster",src:"".concat(j+t.backdrop_path),alt:"poster"})}))}),u&&Object(o.jsx)(g.a,{videoId:u.key,opts:{height:"800px",width:"100%",playerVars:{autoplay:1}}})]})},h="discover/tv?api_key=".concat(d,"&with_networks=213"),p="discover/movie?api_key=".concat(d,"&with_genres=28"),x="discover/movie?api_key=".concat(d,"&with_genres=35"),O="discover/movie?api_key=".concat(d,"&with_genres=27"),f="discover/movie?api_key=".concat(d,"&with_genres=99"),N="discover/movie?api_key=".concat(d,"&with_genres=10749");c(62);var _=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"404 Not Found"})})};var k=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(m,{}),Object(o.jsx)(v,{url:h,title:"Netflix Originals"}),Object(o.jsx)(v,{url:p,title:"Action",isSmall:!0}),Object(o.jsx)(v,{url:f,title:"Drama",isSmall:!0}),Object(o.jsx)(v,{url:x,title:"Comedy",isSmall:!0}),Object(o.jsx)(v,{url:O,title:"Horror",isSmall:!0}),Object(o.jsx)(v,{url:N,title:"Romance",isSmall:!0}),Object(o.jsx)(_,{})]})};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e99de952.chunk.js.map