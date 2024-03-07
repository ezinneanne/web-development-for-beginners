"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6673],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>d});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),u=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=u(n.components);return a.createElement(c.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),p=u(t),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return t?a.createElement(d,i(i({ref:e},s),{},{components:t})):a.createElement(d,i({ref:e},s))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[p]="string"==typeof n?n:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7095:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:8},i="Functions",l={unversionedId:"javascript/functions-dom",id:"javascript/functions-dom",title:"Functions",description:"Functions are used in JavaScript to run a block of code whenever it is needed. The use of functions ensures clean code and reduces repetition.",source:"@site/docs/javascript/functions-dom.md",sourceDirName:"javascript",slug:"/javascript/functions-dom",permalink:"/web-development-for-beginners/javascript/functions-dom",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Loops",permalink:"/web-development-for-beginners/javascript/js-loops"},next:{title:"The DOM",permalink:"/web-development-for-beginners/javascript/the-DOM"}},c={},u=[{value:"Function declaration",id:"function-declaration",level:2},{value:"Function expression",id:"function-expression",level:2},{value:"Arrow syntax as functions",id:"arrow-syntax-as-functions",level:2}],s={toc:u};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Functions are used in JavaScript to run a block of code whenever it is needed. The use of functions ensures clean code and reduces repetition."),(0,r.kt)("p",null,"Example,"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'function myfunc (name) {\n  return "My name is"+name;\n}\n')),(0,r.kt)("p",null,"You run a function by calling it."),(0,r.kt)("p",null,"Example,"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'function myfunc (name) {\n   return "My name is"+name;\n}\nconsole.log(myfunc("Ezinne"));\n')),(0,r.kt)("p",null,"In the example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," in the function is a parameter while the value assigned when calling the function is called an argument."),(0,r.kt)("p",null,"Defining a function in JavaScript is done in about two ways and they are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"function declaration"),(0,r.kt)("li",{parentName:"ul"},"function expression")),(0,r.kt)("h2",{id:"function-declaration"},"Function declaration"),(0,r.kt)("p",null,"This is the method I used previously. To declare a function, you do that with the function keyword, a name of the function and brackets for a parameter.\nA parameter is optional. Some functions may need parameters and some may not."),(0,r.kt)("p",null,"This is the syntax for function declaration:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function myfunc(parameter) {\n   //Block of code\n }\n")),(0,r.kt)("p",null,"Look at an example without a parameter."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'function myfunc() {\n   return "My name is Ezinne";\n}\n\n\n//calling the function \nconsole.log(myfunc());\n')),(0,r.kt)("p",null,"That is how to create functions in javascript using function declaration."),(0,r.kt)("h2",{id:"function-expression"},"Function expression"),(0,r.kt)("p",null,"In function expression, you assign the function to a variable name. This kind of function can be anonymous or have a function name."),(0,r.kt)("p",null,"This is the syntax:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const myfunc = function(parameter) {\n   //Block of code\n}\n\nconsole.log(myfunc(argument))\n")),(0,r.kt)("p",null,"Example,"),(0,r.kt)("p",null,"Using the function expression as anonymous."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const myfunc = function(name){\n  return `My name is ${name}`;\n} \n\nconsole.log(myfunc("Ezinne"));\n')),(0,r.kt)("p",null,"That will print the name. You can also use function expression with a function name. "),(0,r.kt)("p",null,"Example,"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const myfunc = function myName(name){\n  return `My name is ${name}`;\n}\n\nconsole.log(myfunc("Ezinne"));\n')),(0,r.kt)("p",null,"That will print the name even though the function had a name."),(0,r.kt)("h2",{id:"arrow-syntax-as-functions"},"Arrow syntax as functions"),(0,r.kt)("p",null,"The arrow syntax is more of a shorthand on how to create JavaScript functions. It was introduced in ECMAScript 6(ES6)."),(0,r.kt)("p",null,"This is the syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(parameter1, parameter2) => {\n  // Block of code\n}\n")),(0,r.kt)("p",null,"Example,"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const myfunc = (name) => {\n   return `My name is ${name}`;\n}\n\n\nconsole.log(myfunc("Ezinne"));\n')),(0,r.kt)("p",null,"Using arrow functions provides a concise way to use functions in Javascript."))}p.isMDXComponent=!0}}]);