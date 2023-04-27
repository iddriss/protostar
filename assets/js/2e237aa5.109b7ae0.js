"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3080],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7025:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_label:"Gas"},o="Limiting gas",s={unversionedId:"tutorials/cairo-1-support/gas",id:"tutorials/cairo-1-support/gas",title:"Limiting gas",description:"To limit gas available in a test case you can use #[available_gas(x)] attribute, replacing x with the desired limit.",source:"@site/docs/tutorials/08-cairo-1-support/05-gas.md",sourceDirName:"tutorials/08-cairo-1-support",slug:"/tutorials/cairo-1-support/gas",permalink:"/protostar/docs/tutorials/cairo-1-support/gas",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/08-cairo-1-support/05-gas.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Gas"},sidebar:"tutorials",previous:{title:"stop_prank",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/stop_prank"},next:{title:"Compilation",permalink:"/protostar/docs/tutorials/cairo-1-support/compiling"}},l={},u=[],c={toc:u};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"limiting-gas"},"Limiting gas"),(0,a.kt)("p",null,"To limit gas available in a test case you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"#[available_gas(x)]")," attribute, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," with the desired limit."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"use array::ArrayTrait;\n\nfn fib(a: felt252, b: felt252, n: felt252) -> felt252 {\n    match gas::withdraw_gas() {\n        Option::Some(_) => {},\n        Option::None(_) => {\n            let mut data = ArrayTrait::new();\n            data.append('Out of gas');\n            panic(data);\n        }\n    }\n\n    match n {\n        0 => a,\n        _ => fib(b, a + b, n - 1),\n    }\n}\n\n\n// With no decorator gas is unlimited\n#[test]\nfn test_unlimited_gas() {\n    assert(fib(0, 1, 10) == 55, 'invalid result');\n}\n\n\n// This test will pass\n#[test]\n#[available_gas(100000)]\nfn test_enough_gas() {\n    assert(fib(0, 1, 10) == 55, 'invalid result');\n}\n\n\n// This test will fail, due to not enough gas\n#[test]\n#[available_gas(1)]\nfn test_not_enough_gas() {\n    assert(fib(0, 1, 10) == 55, 'invalid result');\n}\n")))}p.isMDXComponent=!0}}]);