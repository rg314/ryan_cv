(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,n,t){"use strict";var c=t(1),i=t(16),a=t(3),l=t(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"/ryan_cv",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),r=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===r&&l.a.initialize(j);var o=function(){var e=Object(a.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},b=t(5),h=t(22),u=[{index:!0,label:"Ryan Greenhalgh",path:"/"},{label:"Resume",path:"/resume"},{label:"Contact",path:"/contact"}],d=t(0),O=Object(c.lazy)((function(){return t.e(4).then(t.t.bind(null,160,7))})),x=function(){var e=Object(c.useState)(!1),n=Object(h.a)(e,2),t=n[0],i=n[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:t?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(O,{right:!0,isOpen:t,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:u.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,onClick:function(){return i(!t)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:u.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:u.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(x,{})]})},p=t(23),f=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(b.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat("/ryan_cv","/images/me.jpg"),alt:""})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Ryan Greenhalgh"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:ryan.greenhalgh@hotmail.co.uk",children:"ryan.greenhalgh@hotmail.co.uk"})})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsx)("p",{children:"Ryan has expertise in software engineering and natural sciences. He has 2 years of commercial experience in cross-functional teams in machine learning and medical devices. Along with his commercial exposure, he has 4 years of academic research experience. He's worked on a number of projects including tissue engineering, biosensing, sustainable agriculture, and biophysics. Along with his deep-rooted technical skills, He's passionate about entrepreneurship and start-ups."}),Object(d.jsxs)("p",{children:["Please don\u2019t hesitate to contact me and check out my ",Object(d.jsx)("a",{href:"https://github.com/rg314",children:"GitHub"})," and ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/rg314/",children:"LinkedIn"})]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsxs)("section",{id:"footer",children:[Object(d.jsx)(p.a,{}),Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Michael D'Angelo ",Object(d.jsx)(b.b,{to:"/",children:"mldangelo.com"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(d.jsxs)(i.b,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(g,{}),Object(d.jsxs)(i.a,{titleTemplate:"%s | Ryan Greenhalgh",defaultTitle:"Ryan Greenhalgh",defer:!1,children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Ryan Greenhalgh's personal website."};n.a=v},23:function(e,n,t){"use strict";t(1);var c=t(27),i=t(28),a=t(29),l=t(30),s=[{link:"https://github.com/rg314",label:"Github",icon:i.faGithub},{link:"https://www.linkedin.com/in/rg314/",label:"LinkedIn",icon:a.faLinkedinIn},{link:"mailto:ryan.greenhalgh@hotmail.co.uk",label:"Email",icon:l.faEnvelope}],r=t(0);n.a=function(){return Object(r.jsx)("ul",{className:"icons",children:s.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.link,children:Object(r.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(15),l=t(5),s=t(3),r=t(20),j=(t(43),t(0)),o=Object(c.lazy)((function(){return t.e(6).then(t.bind(null,163))})),b=Object(c.lazy)((function(){return Promise.all([t.e(2),t.e(7)]).then(t.bind(null,158))})),h=Object(c.lazy)((function(){return t.e(8).then(t.bind(null,159))})),u=Object(c.lazy)((function(){return t.e(5).then(t.bind(null,162))})),d=Object(c.lazy)((function(){return t.e(9).then(t.bind(null,161))})),O=function(){return Object(j.jsx)(l.a,{basename:"/ryan_cv",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(r.a,{}),children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(s.a,{path:"/projects",component:u}),Object(j.jsx)(s.a,{path:"/contact",component:o}),Object(j.jsx)(s.a,{path:"/resume",component:d}),Object(j.jsx)(s.a,{component:h,status:404})]})})})},x=function(){return Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})})},m=document.getElementById("root");m.hasChildNodes()?Object(a.hydrate)(Object(j.jsx)(x,{}),m):Object(a.render)(Object(j.jsx)(x,{}),m)}},[[44,1,3]]]);
//# sourceMappingURL=main.f6446fb4.chunk.js.map