"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7408],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8455:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const o={},i="Calling contracts",l={unversionedId:"tutorials/interacting-with-starknet/call",id:"tutorials/interacting-with-starknet/call",title:"Calling contracts",description:"Overview",source:"@site/docs/tutorials/08-interacting-with-starknet/02-call.md",sourceDirName:"tutorials/08-interacting-with-starknet",slug:"/tutorials/interacting-with-starknet/call",permalink:"/protostar/docs/tutorials/interacting-with-starknet/call",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/08-interacting-with-starknet/02-call.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorials",previous:{title:"Invoking contracts",permalink:"/protostar/docs/tutorials/interacting-with-starknet/invoke"},next:{title:"Declaring new contracts",permalink:"/protostar/docs/tutorials/interacting-with-starknet/declare"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage example",id:"usage-example",level:2}],u={toc:s};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calling-contracts"},"Calling contracts"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"protostar call")," command allows you to call any ",(0,a.kt)("inlineCode",{parentName:"p"},"@view")," function without mutating the blockchain\nstate.  "),(0,a.kt)("p",null,"The basic inputs that you need for the commands are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contract address"),(0,a.kt)("li",{parentName:"ul"},"Function name"),(0,a.kt)("li",{parentName:"ul"},"Inputs to the function"),(0,a.kt)("li",{parentName:"ul"},"Network you want to target (i.e. its name or gateway URL)")),(0,a.kt)("p",null,"For detailed API description, see ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/cli-reference#call"},"call command reference"),"."),(0,a.kt)("h2",{id:"usage-example"},"Usage example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'protostar call --contract-address 0x07ee8ac4d0c1b11eca79b347fb47be5a431cf84a854542b9fbe14f11cfba5466 --function "add_3" --network testnet --inputs 3\nCall successful.\nResponse:\n{\n    "res": 6\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Inputs have to be passed as list of felts (integers), like Cairo calldata.\nIf your function requires structures, arrays, or tuples, you should manually serialize it, as\nshown in ",(0,a.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/hello_starknet/more_features.html#array-arguments-in-calldata"},"Cairo documentation"),".")))}p.isMDXComponent=!0}}]);