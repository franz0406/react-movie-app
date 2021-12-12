(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),c=a.n(r),s=a(10),o=a(2),l=a(11),j=a.n(l),d=a(14),m=a(27),u=a(28),_=a(31),b=a(30),v=a(29),p=a.n(v),h=a(7),x=a.n(h),g=a(8),O=a.n(g),f=a(1);function y(e){var t=e.id,a=e.title,n=e.year,i=e.summary,r=e.poster,c=e.genres;return Object(f.jsxs)("div",{className:O.a.box_container,children:[Object(f.jsx)("img",{src:r,alt:a,title:a}),Object(f.jsxs)("div",{className:O.a.box_content,children:[Object(f.jsxs)("h3",{className:O.a.title,children:[a," ",Object(f.jsxs)("span",{className:O.a.year,children:["(",n,")"]})]}),Object(f.jsx)("ul",{className:O.a.genre,children:c.map((function(e,t){return Object(f.jsxs)("li",{children:[e,"."]},t)}))}),Object(f.jsx)("p",{className:O.a.summary,children:i}),Object(f.jsx)("p",{className:O.a.view,children:Object(f.jsx)(s.b,{to:"".concat("/react-movie-app","/about/").concat(t),children:"view details.."})})]})]})}y.prototype={id:x.a.string.isRequired,title:x.a.string.isRequired,year:x.a.number.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired};var N=y,w=a(9),A=a.n(w);function M(){window.scroll({top:0,left:0,behavior:"smooth"})}var k=function(e){Object(_.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movieArr:[]},e.getMovies=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,e.setState({movieArr:a.data.data.movies,isLoading:!1});case 4:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movieArr;return Object(f.jsxs)("section",{className:A.a.wrap,children:[Object(f.jsx)("h1",{onClick:M,className:A.a.title,children:"Movie List"}),t?Object(f.jsx)("div",{className:"".concat(A.a.loader," ").concat(A.a.center),children:"Loading..."}):Object(f.jsx)("div",{className:"".concat(A.a.movie_list," ").concat(A.a.center),children:a.map((function(e){return Object(f.jsx)(N,{id:e.id,title:e.title,year:e.year,summary:e.summary.length>200?"".concat(e.summary.slice(0,200),"..."):e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})]})}}]),a}(i.a.Component),L=a(5),R=a(17),q=a(6),H=a.n(q);var S=function(){var e=Object(o.g)().id,t=Object(R.useState)(!0),a=Object(L.a)(t,2),i=a[0],r=a[1],c=Object(R.useState)([]),l=Object(L.a)(c,2),m=l[0],u=l[1],_=function(){var t=Object(d.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e)).then((function(e){return e.json()}));case 2:a=t.sent,console.log(m),u(a.data.movie),r(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){_()}),[]);var b=m.title,v=m.large_cover_image,p=m.description_intro,h=m.genres,x=m.rating,g=m.runtime;return Object(f.jsx)("section",{className:H.a.bg,children:i?Object(f.jsx)("div",{className:H.a.loading,children:Object(f.jsx)("p",{children:"loading..."})}):Object(f.jsxs)("div",{className:H.a.loaded,children:[Object(f.jsx)("h2",{className:H.a.title,children:b}),Object(f.jsx)("div",{className:H.a.image,children:Object(f.jsx)("img",{src:v,alt:b,title:b})}),Object(f.jsx)("h3",{className:H.a.genres,children:"Genres"}),Object(f.jsx)("ul",{className:H.a.genreList,children:h.map((function(e){return Object(f.jsx)("li",{children:e})}))}),Object(f.jsxs)("p",{className:H.a.rating,children:[Object(f.jsxs)("span",{children:["Rating : ",x]}),Object(f.jsxs)("span",{children:["Runtime : ",g,"m"]})]}),Object(f.jsx)("p",{className:H.a.decription,children:p}),Object(f.jsx)("button",{children:Object(f.jsx)(s.b,{to:"/react-movie-app/",children:"Back"})})]})})};var E=function(){return Object(f.jsx)(s.a,{basename:"/react-movie-app",children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/about/:id",element:Object(f.jsx)(S,{})}),Object(f.jsx)(o.a,{path:"/",element:Object(f.jsx)(k,{})})]})})};a(58);c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("wrap"))},6:function(e,t,a){e.exports={loading:"About_loading__Ah5cm",loaded:"About_loaded__3kXz0",bg:"About_bg__111SF",title:"About_title__2FEv4",image:"About_image__1bh59",decription:"About_decription__3MNxC",genres:"About_genres__3e3CP",genreList:"About_genreList__ycEZ1",rating:"About_rating__iJSAl"}},8:function(e,t,a){e.exports={box_container:"Movie_box_container__2kPIr",box_content:"Movie_box_content__Atwyr",title:"Movie_title__14_rc",year:"Movie_year__7OpMd",genre:"Movie_genre__22Y-I",summary:"Movie_summary__vAEJa",view:"Movie_view__1gK_K"}},9:function(e,t,a){e.exports={wrap:"Home_wrap__3rkB8",title:"Home_title__2xmZH",loader:"Home_loader__2Jxwr",center:"Home_center__3UbV-",movie_list:"Home_movie_list__1YQv4"}}},[[59,1,2]]]);
//# sourceMappingURL=main.d600c336.chunk.js.map