(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(13),c(8)),n=c(2),r=c(1),l=(c(14),c(15),c(16),c(0)),d=function(e){var t=e.movie,c=t.imgUrl,i=t.title,s=t.imdbUrl,a=t.description;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:c,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:i})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[a,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:s,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})},j=c(6),m=c.n(j);c(18);var b=function(e){var t=e.onAdd,c=Object(r.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],o=Object(r.useState)(null),j=Object(n.a)(o,2),b=j[0],u=j[1],h=Object(r.useState)(!1),v=Object(n.a)(h,2),O=v[0],x=v[1],f=Object(r.useState)(!1),p=Object(n.a)(f,2),N=p[0],g=p[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){var t;e.preventDefault(),g(!0),(t=s,fetch("".concat("https://www.omdbapi.com/?apikey=5a2ff0e","&t=").concat(t)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){"True"===e.Response?u(function(e){var t=e.Title,c=e.Plot,i=e.imdbID,s=e.Poster;return{title:t,description:c,imdbId:i,imgUrl:"N/A"===s?"https://via.placeholder.com/360x270.png?text=no%20preview":s,imdbUrl:"https://www.imdb.com/title/".concat(i)}}(e)):x(!0)})).finally((function(){return g(!1)}))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":O}),onChange:function(e){x(!1),a(e.target.value)},value:s})}),O&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button","is-light",{"is-loading":N}),disabled:!s,children:"Find a movie"})}),b&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){b&&t(b),u(null),a("")},children:"Add to the list"})})]})]}),b&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:b})]})]})},u=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{onAdd:function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ea23dc3e.chunk.js.map