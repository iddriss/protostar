"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7879],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},814:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const a={},c="declare",i={unversionedId:"tutorials/cairo-1-support/cheatcodes/declare",id:"tutorials/cairo-1-support/cheatcodes/declare",title:"declare",description:"Declares a contract given its name defined in the protostar.toml configuration",source:"@site/docs/tutorials/08-cairo-1-support/05-cheatcodes/declare.md",sourceDirName:"tutorials/08-cairo-1-support/05-cheatcodes",slug:"/tutorials/cairo-1-support/cheatcodes/declare",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/declare",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/08-cairo-1-support/05-cheatcodes/declare.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"declare_cairo0",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/declare-cairo0"},next:{title:"deploy",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/deploy"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"declare"},(0,o.kt)("inlineCode",{parentName:"h1"},"declare")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo"},"fn declare(contract: felt252) -> Result::<felt252, felt252> nopanic;\n")),(0,o.kt)("p",null,"Declares a contract given its name defined in the ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/configuration-file"},"protostar.toml")," configuration\nfile."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract")," name of a contract as cairo shortstring (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"declare('mycontract')"),").")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Declare only supports Cairo1 (new syntax) contracts. To declare old cairo0 contracts,\nuse ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/declare-cairo0"},"declare_cairo0"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example"',title:'"Example"'},"use result::ResultTrait;\n\nfn my_function() {\n    let class_hash = declare('mycontract').unwrap();\n    // ...\n}\n")))}u.isMDXComponent=!0}}]);