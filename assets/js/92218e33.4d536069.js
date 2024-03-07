"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:12},o="Gradients in CSS",s={unversionedId:"Css/css-gradients",id:"Css/css-gradients",title:"Gradients in CSS",description:"You have learned some of the properties of background images. Earlier on, you read that gradients were properties for background images.",source:"@site/docs/Css/css-gradients.md",sourceDirName:"Css",slug:"/Css/css-gradients",permalink:"/web-development-for-beginners/Css/css-gradients",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"The background-repeat property",permalink:"/web-development-for-beginners/Css/background-repeat"},next:{title:"Background property in CSS",permalink:"/web-development-for-beginners/Css/background"}},l={},u=[{value:"Types of gradients",id:"types-of-gradients",level:2},{value:"Linear gradient()",id:"linear-gradient",level:3},{value:"Radial gradient()",id:"radial-gradient",level:3},{value:"Conic gradient()",id:"conic-gradient",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gradients-in-css"},"Gradients in CSS"),(0,a.kt)("p",null,"You have learned some of the properties of background images. Earlier on, you read that gradients were properties for background images. "),(0,a.kt)("p",null,"Gradients are used in background images either to modify an image or as a colour for the background."),(0,a.kt)("p",null,"Gradients can accept multiple values of different types."),(0,a.kt)("h2",{id:"types-of-gradients"},"Types of gradients"),(0,a.kt)("p",null,"The types of gradients are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linear gradient()"),(0,a.kt)("li",{parentName:"ul"},"Radial gradient()"),(0,a.kt)("li",{parentName:"ul"},"Conic gradient()")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An image of a woman in a salon",src:n(9800).Z,width:"773",height:"515"})),(0,a.kt)("p",null,"This is the image I am using in this section."),(0,a.kt)("h3",{id:"linear-gradient"},"Linear gradient()"),(0,a.kt)("p",null,"Linear gradient() is a CSS function that combines colours in a linear form. It can combine colours with images or use only colours. "),(0,a.kt)("p",null,"This is the syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"background-image: linear-gradient(direction,colourA,colourB..\n.);\n")),(0,a.kt)("p",null,"Linear gradients can use degrees(",(0,a.kt)("inlineCode",{parentName:"p"},"\xb0"),"), percentages and keywords (",(0,a.kt)("inlineCode",{parentName:"p"},"to right"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"to left"),") and so on."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Adding linear gradient to an image")),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <header>A good illustration</header>\n    <main>This is a web page</main>\n    <p>This is new Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae, \n      fuga molestiae suscipit minus vitae ut? Dolorem, quia adipisci reiciendis numquam nobis quaerat fuga, \n      rem sint illo sequi expedita, molestiae veritatis facere quasi impedit sit enim cumque sapiente quidem \n      atque nesciunt! Hic tempore vero, placeat dignissimos natus doloribus officia rem?\n    </p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'body {\n  color: white;\n  background-image: linear-gradient(50deg, rgba(239, 239, 79, 0.65), rgba(10,8,40,0.71)), url("../img/momentum.jpeg");\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of gradient property on css",src:n(9299).Z,width:"1365",height:"657"})),(0,a.kt)("p",null,"So the linear-gradient function modifies the image with colours at a direction of 50 degrees."),(0,a.kt)("p",null,"What if you want to make a background-image using only colours."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using linear gradient with colours only")),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <header>A good illustration</header>\n    <main>This is a web page</main>\n    <p>This is new Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae, \n      fuga molestiae suscipit minus vitae ut? Dolorem, quia adipisci reiciendis numquam nobis quaerat fuga, \n      rem sint illo sequi expedita, molestiae veritatis facere quasi impedit sit enim cumque sapiente quidem \n      atque nesciunt! Hic tempore vero, placeat dignissimos natus doloribus officia rem?\n    </p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"body {\n  color: white;\n  background-image: linear-gradient(100deg, rgb(230,50,55), #333, mistyrose);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of gradient property on css",src:n(9529).Z,width:"1359",height:"657"})),(0,a.kt)("p",null,"Now, you have a background combined with powerful colours. I used rgb, hex and normal colour names so you can see that it is possible to combine all the names. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You can use gradients in ",(0,a.kt)("inlineCode",{parentName:"p"},"background-color")," property too."),(0,a.kt)("h3",{id:"radial-gradient"},"Radial gradient()"),(0,a.kt)("p",null,"This is a CSS function that combines colours only or colours with images in a radial shape."),(0,a.kt)("p",null,"This is the syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"background-image: radial-gradient(direction,colourA,colourB..\n.);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using radial gradient with images")),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <header>A good illustration</header>\n    <main>This is a web page</main>\n    <p>This is new Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae, \n      fuga molestiae suscipit minus vitae ut? Dolorem, quia adipisci reiciendis numquam nobis quaerat fuga, \n      rem sint illo sequi expedita, molestiae veritatis facere quasi impedit sit enim cumque sapiente quidem \n      atque nesciunt! Hic tempore vero, placeat dignissimos natus doloribus officia rem?\n    </p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'body {\n  color: white;\n  background-image: radial-gradient(closest-side, rgba(239, 239, 79, 0.65), rgba(10,8,40,0.71)), url("../img/momentum.jpeg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of radial gradient property on css",src:n(126).Z,width:"1365",height:"663"})),(0,a.kt)("p",null,"As you can see, the colours form a radial shape on the image with the brighter colour at the center."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using radial gradient function with colours only")),(0,a.kt)("p",null,"You could use radial gradient to create colourful background images without images in the background. The radial gradient function will position the colour in a radial shape."),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <header>A good illustration</header>\n    <main>This is a web page</main>\n    <p>This is new Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae, \n      fuga molestiae suscipit minus vitae ut? Dolorem, quia adipisci reiciendis numquam nobis quaerat fuga, \n      rem sint illo sequi expedita, molestiae veritatis facere quasi impedit sit enim cumque sapiente quidem \n      atque nesciunt! Hic tempore vero, placeat dignissimos natus doloribus officia rem?\n    </p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"body {\n  color: white;\n  background-image: radial-gradient(closest-side, rgb(230,50,55), #333, mistyrose);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of radial gradient property on css",src:n(4214).Z,width:"1362",height:"660"})),(0,a.kt)("p",null,"Now you can see the previous example this time using a radial gradient. You could also use the previous colour combinations and it will work."),(0,a.kt)("h3",{id:"conic-gradient"},"Conic gradient()"),(0,a.kt)("p",null,"Conic gradient() is a CSS function that combines colours in a conic shape . Like other gradients, it can combine colours with images or use only colours. "),(0,a.kt)("p",null,"This is the syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"background-image: conic-gradient(direction,colourA,colourB..\n.colourN);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Adding conic gradient to an image")),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <header>A good illustration</header>\n    <main>This is a web page</main>\n    <p>This is new Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae, \n      fuga molestiae suscipit minus vitae ut? Dolorem, quia adipisci reiciendis numquam nobis quaerat fuga, \n      rem sint illo sequi expedita, molestiae veritatis facere quasi impedit sit enim cumque sapiente quidem \n      atque nesciunt! Hic tempore vero, placeat dignissimos natus doloribus officia rem?\n    </p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'body {\n  color: white;\n  background-image: conic-gradient(from 50deg, rgba(239, 239, 79, 0.65), rgba(10,8,40,0.71)), url("../img/momentum.jpeg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of conic gradient property on css",src:n(221).Z,width:"1356",height:"664"})),(0,a.kt)("p",null,"From the image, you can see the conic-gradient function modifies the image with colours starting with a direction of 50 degrees."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using only colours")),(0,a.kt)("p",null,"You could also use conic gradients, like other gradient function types to create background images using colours only."),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <header>A good illustration</header>\n    <main>This is a web page</main>\n    <p>This is new Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae, \n      fuga molestiae suscipit minus vitae ut? Dolorem, quia adipisci reiciendis numquam nobis quaerat fuga, \n      rem sint illo sequi expedita, molestiae veritatis facere quasi impedit sit enim cumque sapiente quidem \n      atque nesciunt! Hic tempore vero, placeat dignissimos natus doloribus officia rem?\n    </p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"body {\n  color: white;\n  background-image: conic-gradient(from 50deg, rgb(230,50,55), #333, mistyrose);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of conic gradient property on css",src:n(2669).Z,width:"1365",height:"662"})),(0,a.kt)("p",null,"With that, you have a radial-shaped colour combo.\nThat sums up gradients in css. The next page will cover background property in css."))}c.isMDXComponent=!0},221:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/conic_gradient-4e27e59354a50e71ab74b7baa1d205f6.png"},2669:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/conic_gradient1-f3bff45d2b6510b6c166454e1d754806.png"},9299:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linear_gradient-3530f01ed7fe95dcbbf82bab38484557.png"},9529:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linear_gradient1-533674a9b50a55223e375138bbdcfef1.png"},9800:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/momentum-ed566d3387bcb6368fc78da08f202225.jpeg"},126:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/radial_gradient-312de91ad699cd71cdb43c4ded9b94be.png"},4214:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/radial_gradient1-1f7af99d02877a7465c37e4750bfa567.png"}}]);