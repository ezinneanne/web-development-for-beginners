"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),u=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(r.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,f=m["".concat(r,".").concat(c)]||m[c]||d[c]||o;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:15},l="CSS positioning",s={unversionedId:"Css/css-position",id:"Css/css-position",title:"CSS positioning",description:"CSS has a position property which you can use to position items on a web page. You could make html elements float on a web page or stick to it as you keep scrolling. In this page, you will learn about the various values for positioning items in css.",source:"@site/docs/Css/css-position.md",sourceDirName:"Css",slug:"/Css/css-position",permalink:"/web-development-for-beginners/Css/css-position",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"CSS display",permalink:"/web-development-for-beginners/Css/css-display"},next:{title:"CSS typography",permalink:"/web-development-for-beginners/Css/css-typography"}},r={},u=[{value:"Types of CSS position values",id:"types-of-css-position-values",level:2},{value:"Static",id:"static",level:3},{value:"Sticky",id:"sticky",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Relative",id:"relative",level:3},{value:"Absolute",id:"absolute",level:3}],p={toc:u};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css-positioning"},"CSS positioning"),(0,a.kt)("p",null,"CSS has a position property which you can use to position items on a web page. You could make html elements float on a web page or stick to it as you keep scrolling. In this page, you will learn about the various values for positioning items in css."),(0,a.kt)("h2",{id:"types-of-css-position-values"},"Types of CSS position values"),(0,a.kt)("p",null,"There are five different values you could use for positioning and they are: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"static"),(0,a.kt)("li",{parentName:"ul"},"sticky"),(0,a.kt)("li",{parentName:"ul"},"fixed"),(0,a.kt)("li",{parentName:"ul"},"relative"),(0,a.kt)("li",{parentName:"ul"},"absolute")),(0,a.kt)("h3",{id:"static"},"Static"),(0,a.kt)("p",null,"This is the default positioning of html elements. "),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <h1>Building A Web Page</h1>\n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n    </p> \n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  position: static;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"position: static")," does not have any effect on the element as that is the default positioning. Now, let's look at the next value which is sticky."),(0,a.kt)("h3",{id:"sticky"},"Sticky"),(0,a.kt)("p",null,"When you set the position to sticky. The text moves when you scroll on the web page and then becomes fixed when you scroll down."),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <h1>Building A Web Page</h1>\n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n    </p> \n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  position: sticky;\n}\n")),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("p",null,"When positioning is fixed, it remains where it is even when you scroll up or down. "),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <h1>Building A Web Page</h1>\n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n    </p> \n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  position: fixed;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of position property on css",src:n(6096).Z,width:"1363",height:"131"})),(0,a.kt)("p",null,"This will keep the ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," element in a spot where it does not move as you scroll."),(0,a.kt)("h3",{id:"relative"},"Relative"),(0,a.kt)("p",null,"When an element is set to relative, it moves away from its normal position. "),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <h1>Building A Web Page</h1>\n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n    </p> \n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  position: relative;\n  border: 2px solid black;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of position property on css",src:n(8142).Z,width:"1361",height:"187"})),(0,a.kt)("h3",{id:"absolute"},"Absolute"),(0,a.kt)("p",null,"In absolute position, the element is positioned away from the previous element. If there is no previous element, then it uses the body element as a benchmark."),(0,a.kt)("p",null,"Example,"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8"/>\n    <title>A simple html page</title>\n    <link rel="stylesheet" href="styles.css"/>\n  </head>\n  <body>\n    <h1>Building A Web Page</h1>\n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n    </p> \n    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"p {\n  position: absolute;\n  border: 2px solid black;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot of position property on css",src:n(6826).Z,width:"1365",height:"159"})),(0,a.kt)("p",null,"This will make the ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," element move away from the ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," element."))}m.isMDXComponent=!0},6826:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/position_absolute-a57b7ad5be50447a2f980b2a581ebd4b.png"},6096:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/position_fixed-021a41eee029f84bbca0ef212f7159c2.png"},8142:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/position_relative-6b9f403c1f6b0d307852eb4b1e9e65f3.png"}}]);