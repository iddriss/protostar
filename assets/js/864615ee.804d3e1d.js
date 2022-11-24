"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2278],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8016:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const o={},i="Deploying new contracts",c={unversionedId:"tutorials/interacting-with-starknet/deploy",id:"tutorials/interacting-with-starknet/deploy",title:"Deploying new contracts",description:"Overview",source:"@site/docs/tutorials/08-interacting-with-starknet/04-deploy.md",sourceDirName:"tutorials/08-interacting-with-starknet",slug:"/tutorials/interacting-with-starknet/deploy",permalink:"/protostar/docs/tutorials/interacting-with-starknet/deploy",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/08-interacting-with-starknet/04-deploy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorials",previous:{title:"Declaring new contracts",permalink:"/protostar/docs/tutorials/interacting-with-starknet/declare"},next:{title:"Creating account",permalink:"/protostar/docs/tutorials/interacting-with-starknet/deploy-account"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage example",id:"usage-example",level:2}],p={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-new-contracts"},"Deploying new contracts"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Protostar supports deploying smart contracts to a given network with the ",(0,a.kt)("inlineCode",{parentName:"p"},"protostar deploy")," command.\nIt has a similar interface to the ",(0,a.kt)("inlineCode",{parentName:"p"},"starknet deploy")," command. "),(0,a.kt)("p",null,"The basic inputs needed for this command are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Path to the compiled contract file"),(0,a.kt)("li",{parentName:"ul"},"Network you want to target (i.e. its name or gateway URL)\n",(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/cli-reference#deploy"},"Read the CLI reference for the deploy command")," to learn more about all supported arguments.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The deploy transaction will be deprecated in future StarkNet versions.\nTo deploy new contract instances, you can use the deploy syscall.\nFor more information, read ",(0,a.kt)("a",{parentName:"p",href:"https://docs.starknet.io/docs/Contracts/contract-classes"},"StarkNet's Contract Classes documentation"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This command will be reworked to be compatible with the ",(0,a.kt)("a",{parentName:"p",href:"https://community.starknet.io/t/universal-deployer-contract-proposal/1864"},"UDC concept"),". ")),(0,a.kt)("h2",{id:"usage-example"},"Usage example"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"../compiling"},"compiling your contract"),", you can deploy the contract in the following way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="protostar deploy ./build/main.json --network testnet"',title:'"protostar',deploy:!0,"./build/main.json":!0,"--network":!0,'testnet"':!0},"[INFO] Deploy transaction was sent.\nContract address: 0x06a5ea9e42c921bd58e24b8da9d1fc91a488df0700b173f1c6bb0e453f68afec\nTransaction hash: 0x1cbba90ba0d1fbfba09b1f7a0f987134dd9a02a845ca89244b3272374d37ede\n\nhttps://goerli.voyager.online/contract/0x06a5ea9e42c921bd58e24b8da9d1fc91a488df0700b173f1c6bb0e453f68afec\n")))}u.isMDXComponent=!0}}]);