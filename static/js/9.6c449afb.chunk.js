(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[9],{161:function(e,n,t){"use strict";t.r(n);t(1);var a=t(5),i=t(20),r=t(0),s=function(e){var n=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:n.degree}),Object(r.jsxs)("p",{className:"school",children:[n.school,", ",n.year]}),Object(r.jsx)("ul",{className:"points",children:n.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})})},c=function(e){var n=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),n.map((function(e){return Object(r.jsx)(s,{data:e},e.school)}))]})};c.defaultProps={data:[]};var o=c,d=function(e){var n=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:n.link,children:n.company})," - ",n.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",n.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:n.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},l=function(e){var n=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),n.map((function(e){return Object(r.jsx)(d,{data:e},e.company)}))]})};l.defaultProps={data:[]};var h=l,p=function(e){var n=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h4",{children:n.level})}),Object(r.jsx)("ul",{className:"points",children:n.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},u=function(e){var n=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Skills"})}),n.map((function(e){return Object(r.jsx)(p,{data:e},e.level)}))]})};u.defaultProps={data:[]};var m=u,j=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(a.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},b=[{school:"University of Cambridge",degree:"PhD, Biophysics and Neuroscience",points:["Full scholarship with 10% acceptance rate, 2 funded student projects, teaching.","Outreach, Japan industrial visit, and international projects (Colombia).","Courses in Machine Learning, Probabilistic Machine Learning, Entrepreneurship."],year:"2018 - 2021"},{school:"University of Cambridge",degree:"MRes, Nanoscience and Nanotechnology",points:["Awarded full scholarship, near highest grades (GPA 4.0), 2 publications."],year:"2017 - 2018"},{school:"University of Manchester",degree:"MEng, Materials Science and Engineering",points:["Highest grades in department (GPA 4.0), 4 publications, 7 awards, competed for University slalom team."],year:"2013 - 2017"}],g=[{company:"deepMirror AI",position:"Founding Engineer",link:"https://deepmirror.ai/",daterange:"May 2021 - Present",points:[]},{company:"Cogni.Dx",position:"Machine Learning Engineer / Consultant",link:"http://www.cognidx.co.uk/",daterange:"May 2021 - Present",points:[]},{company:"SoundLence.ai",position:"Machine Learning Engineer / Consultant",link:"https://www.linkedin.com/company/soundlence-ai/",daterange:"May 2021 - June 2021",points:[]},{company:"Outfield technologies",position:"Machine Learning Engineer",link:"https://outfield.xyz/",daterange:"November 2019 - November 2020",points:["Lead and developed core product to paying customers in under a year from concept phase.","Deployed core machine learning pipeline and storage onto cloud reducing runtimes from hours to minutes (AWS S3, EC2, Cloudwatch, Lambda, ECR).","Designed and trained modern CNN architectures and optimised performance by transfer learning and Bayesian optimization in tensorflow.","Deployed semi-automated data labelling pipeline using Amazon Mechanical Turk.","Optimized product with customer journey map, value proposition canvas, and face-to-face feedback with customers.","Responsible for technical strategy, tracking and reporting of KPIs, and recruitment."]},{company:"deepMirror AI",position:"Machine Learning Engineer",link:"https://deepmirror.ai/",daterange:"October 2019 - January 2020",points:["Researched current literature to review state of the art methods to meet customer needs.","Designed and implemented feature engineering and generation pipeline in Wolfram Language.","Dimension reduction and clustering algorithms to discover emergent cell states."]},{company:"University of Manchester",position:"Research Assistant",link:"https://www.materials.manchester.ac.uk/research/themes/biomaterials/",points:["Researched current literature to review state of the art methods to meet customer needs.","Designed and implemented feature engineering and generation pipeline in Wolfram Language.","Dimension reduction and clustering algorithms to discover emergent cell states."]},{company:"Medtrade Products",position:"Research Scientist",link:"",daterange:"August 2015 - August 2016",points:["Developed a new in vitro methodology for CE approval (Class IIa).","Reviewed and analysed clinical trial data collected by a third party.","Market, product, and literature review of surgical sealants and proposed new formulations."]}],x=[{level:"Advanced",points:["Python","PyTorch, TensorFlow opencv","Computer vision, CNNs, Bayesian Optimization","Monte Carlo Methods","MLOps, ClearML","Amazon Web Services (S3, EC2, Cloudwatch, Lambda, ECR, Mechanical Turk)","Linux, Win, MaxOS bash script","Docker, docker-compose, git, Travis CI"]},{level:"Intermediate",points:["C++, MATLAB, Mathematica, CSS/HTML, SQL","FastAPI, Django, Flask","Google Cloud Platform (GCP)","Bayesian methods, Graph theory"]}],O=["Education","Experience","Skills","References"];n.default=function(){return Object(r.jsx)(i.a,{title:"Resume",description:"Ryan Greenhalgh's Resume.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:O.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(o,{data:b}),Object(r.jsx)(h,{data:g}),Object(r.jsx)(m,{data:x}),Object(r.jsx)(j,{})]})})}}}]);
//# sourceMappingURL=9.6c449afb.chunk.js.map