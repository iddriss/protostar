"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9587],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),f=a,_=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(_,s(s({ref:t},p),{},{components:r})):n.createElement(_,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9939:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i}});var n=r(3117),a=(r(7294),r(3905));const o={},s="start_prank",l={unversionedId:"tutorials/cairo-1-support/cheatcodes/start_prank",id:"tutorials/cairo-1-support/cheatcodes/start_prank",title:"start_prank",description:"Changes a caller address returned by getcalleraddress() for the targeted contract until the prank is stopped",source:"@site/docs/tutorials/08-cairo-1-support/05-cheatcodes/start_prank.md",sourceDirName:"tutorials/08-cairo-1-support/05-cheatcodes",slug:"/tutorials/cairo-1-support/cheatcodes/start_prank",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/start_prank",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/08-cairo-1-support/05-cheatcodes/start_prank.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"prepare",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/prepare"},next:{title:"stop_prank",permalink:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/stop_prank"}},c={},i=[],p={toc:i};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"start_prank"},(0,a.kt)("inlineCode",{parentName:"h1"},"start_prank")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo"},"fn start_prank(caller_address: felt252, target_contract_address: felt252) -> Result::<(), felt252> nopanic;\n")),(0,a.kt)("p",null,"Changes a caller address returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"get_caller_address()")," for the targeted contract until the prank is stopped\nwith ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/cairo-1-support/cheatcodes/stop_prank"},"stop_prank"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"caller_address")," address that will start being returned by ",(0,a.kt)("inlineCode",{parentName:"li"},"get_caller_address()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target_contract_address")," address for which ",(0,a.kt)("inlineCode",{parentName:"li"},"get_caller_address()")," result will be replaced")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example"',title:'"Example"'},"#[contract]\nmod MyContract {\n    use starknet::get_caller_address;\n    use starknet::ContractAddress;\n    use starknet::ContractAddressIntoFelt252;\n    use option::Option;\n    use traits::Into;\n\n    struct Storage {\n        stored_value: felt252\n    }\n\n    #[external]\n    fn will_be_pranked() {\n        let caller_address: ContractAddress = get_caller_address();\n        if (caller_address.into() == 123) {\n            stored_value::write(100);\n        } else {\n            stored_value::write(50);\n        }\n    }\n    \n    #[view]\n    fn get_stored_value() -> felt252 {\n        stored_value::read()\n    }\n}\n\n#[test]\nfn my_test() {\n    invoke(deployed_contract_address, 'will_be_pranked', ArrayTrait::new()).unwrap();\n    let return_data = call(deployed_contract_address, 'get_stored_value', ArrayTrait::new()).unwrap();\n    // Standard value is set\n    assert(*return_data.at(0_u32) == 50, 'check call result');\n    \n    // Pranked the address\n    start_prank(123, deployed_contract_address).unwrap();\n    \n    invoke(deployed_contract_address, 'will_be_pranked', ArrayTrait::new()).unwrap();\n    let return_data = call(deployed_contract_address, 'get_stored_value', ArrayTrait::new()).unwrap();\n    // Special value (100) is set\n    assert(*return_data.at(0_u32) == 100, 'check call result');\n}\n")))}d.isMDXComponent=!0}}]);