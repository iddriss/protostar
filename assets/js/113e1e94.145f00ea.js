"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[364],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||s;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const s={},i="Strategies",o={unversionedId:"legacy/testing/fuzzing/strategies",id:"legacy/testing/fuzzing/strategies",title:"Strategies",description:"Often in code, we operate on some assumptions about the possible values of variables.",source:"@site/docs/legacy/07-testing/03-fuzzing/strategies.md",sourceDirName:"legacy/07-testing/03-fuzzing",slug:"/legacy/testing/fuzzing/strategies",permalink:"/protostar/docs/legacy/testing/fuzzing/strategies",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/07-testing/03-fuzzing/strategies.md",tags:[],version:"current",frontMatter:{},sidebar:"legacy",previous:{title:"Reproducing failures",permalink:"/protostar/docs/legacy/testing/fuzzing/reproducing-failures"},next:{title:"End-to-end tests",permalink:"/protostar/docs/legacy/testing/e2e"}},l={},p=[{value:"Core strategies",id:"core-strategies",level:2},{value:"<code>strategy.felts</code>",id:"strategyfelts",level:3},{value:"<code>strategy.integers</code>",id:"strategyintegers",level:3},{value:"<code>strategy.short_strings</code>",id:"strategyshort_strings",level:3},{value:"<code>strategy.uint256</code>",id:"strategyuint256",level:3},{value:"Adapting strategies",id:"adapting-strategies",level:2},{value:"Mapping",id:"mapping",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Combining",id:"combining",level:3}],c={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"strategies"},"Strategies"),(0,r.kt)("p",null,"Often in code, we operate on some assumptions about the possible values of variables.\nFor example, we can perform greater than zero validations early in the code, and we can assume that variables are greater than zero in the subsequent code.\nFuzzer allows providing such assumptions to avoid testing against values which are not covered by the code. "),(0,r.kt)("p",null,"Cheatcode ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/given"},(0,r.kt)("inlineCode",{parentName:"a"},"given")),",\ninstructs the fuzzer to adopt a specific fuzzing strategy for input parameters.\nSuch strategies are provided declaratively, by assigning ",(0,r.kt)("em",{parentName:"p"},"strategies")," to the input parameters as on the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example"',title:'"Example"'},"@external\nfunc setup_integers() {\n    %{\n        given(\n            a = strategy.integers(10, 20),\n            b = strategy.integers(30, 40),\n        )\n    %}\n    return ();\n}\n\n@external\nfunc test_integers{syscall_ptr : felt*, range_check_ptr}(a : felt, b : felt) {\n    assert_le(a, b);\n    return ();\n}\n")),(0,r.kt)("p",null,"This document is a guide to what strategies are available for generating examples and how to build\nthem."),(0,r.kt)("h2",{id:"core-strategies"},"Core strategies"),(0,r.kt)("p",null,"All core strategies are contained in the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/strategy"},(0,r.kt)("inlineCode",{parentName:"a"},"strategy")),"\ncheatcode-namespace."),(0,r.kt)("h3",{id:"strategyfelts"},(0,r.kt)("inlineCode",{parentName:"h3"},"strategy.felts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def felts(*, rc_bound: bool = False) -> Strategy: ...\n")),(0,r.kt)("p",null,"By default, explores all possible felt values."),(0,r.kt)("p",null,"If keyword argument ",(0,r.kt)("inlineCode",{parentName:"p"},"rc_bound")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", explores felts which can be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"range_check"),"\nbuiltin.\nThis narrows the range of explored values according to the parameters of Cairo runtime.\nUse this functionality, if fuzzed values will be passed to any of the ",(0,r.kt)("inlineCode",{parentName:"p"},"assert_*")," functions from\n",(0,r.kt)("inlineCode",{parentName:"p"},"starkware.cairo.common.math")," module."),(0,r.kt)("h3",{id:"strategyintegers"},(0,r.kt)("inlineCode",{parentName:"h3"},"strategy.integers")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def integers(\n    min_value: Optional[int] = None,\n    max_value: Optional[int] = None,\n) -> Strategy: ...\n")),(0,r.kt)("p",null,"Generates integer values, possibly bounded by provided range."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"strategy.integers(0, 100)\nstrategy.integers(max_value=3000)\nstrategy.integers(11)\n")),(0,r.kt)("p",null,"Fuzzer picks integers from provided range and then converts them to felts.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"min_value")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," then all values will be greater than or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"min_value"),",\nand if ",(0,r.kt)("inlineCode",{parentName:"p"},"max_value")," is not ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," then all values will be less than or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"max_value"),"."),(0,r.kt)("h3",{id:"strategyshort_strings"},(0,r.kt)("inlineCode",{parentName:"h3"},"strategy.short_strings")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def short_strings() -> Strategy: ...\n")),(0,r.kt)("p",null,"Generates strings with ASCII characters of length that passes the condition ",(0,r.kt)("inlineCode",{parentName:"p"},"0 <= length <= 31"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Max size ",(0,r.kt)("inlineCode",{parentName:"p"},"31")," comes from ",(0,r.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/consts.html#short-string-literals"},"the docs"),".")),(0,r.kt)("h3",{id:"strategyuint256"},(0,r.kt)("inlineCode",{parentName:"h3"},"strategy.uint256")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def uint256() -> Strategy: ...\n")),(0,r.kt)("p",null,"Generates UInt256's. They can be used by ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," as (named) tuples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example"',title:'"Example"'},"strategy.uint256().map(lambda x: (x.low // 30, x.high)).filter(lambda x: x[1] > 0)\n\n")),(0,r.kt)("h2",{id:"adapting-strategies"},"Adapting strategies"),(0,r.kt)("p",null,"Often it is the case that a strategy does not produce exactly what is desired, and it is necessary to further\nadapt the generated values.\nAlthough this could be done in tests directly, this hurts because fuzzer does not know about the adaptation and may repeatedly test the same values.\nThe ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/assume"},(0,r.kt)("inlineCode",{parentName:"a"},"assume"))," and ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/reject"},(0,r.kt)("inlineCode",{parentName:"a"},"reject"))," cheatcodes provide simple interfaces to adapt an advanced strategy.\nThose are not very good considering the performance.\nFuzzer can execute tests on rejected data anyway and will just ignore failure when it happens."),(0,r.kt)("p",null,"Protostar provides ways to build strategies by transforming other ones."),(0,r.kt)("h3",{id:"mapping"},"Mapping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Strategy:\n    def map(self, mapping_function: Callable[[int], int]) -> Strategy: ...\n")),(0,r.kt)("p",null,"Applies provided mapping function to all searched inputs values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example"',title:'"Example"'},"strategy.felts().map(lambda x: x // 2)\n")),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Strategy:\n    def filter(self, filter_function: Callable[[int], bool]) -> Strategy: ...\n")),(0,r.kt)("p",null,"Rejects examples not matching a condition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example"',title:'"Example"'},"strategy.felts().filter(lambda x: x not in [3, 5, 8])\n")),(0,r.kt)("p",null,"The outcome is similar to using the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/assume"},(0,r.kt)("inlineCode",{parentName:"a"},"assume"))," or ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/reject"},(0,r.kt)("inlineCode",{parentName:"a"},"reject"))," cheatcodes, but ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," does not\nrequire executing tested Cairo function and thus is more performant.\nTry to use ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," only to avoid unwanted corner cases rather than attempting to cut out a large\nportion of the searched input values."),(0,r.kt)("p",null,"Fuzzer draws random data from the original strategy and only afterwards checks if it passes filter conditions.\nIf too many variables are restricted, fuzzer will reject test execution."),(0,r.kt)("h3",{id:"combining"},"Combining"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def one_of(*strategies: Strategy) -> Strategy: ...\n")),(0,r.kt)("p",null,"Returns a strategy which generates values from any of the argument strategies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example"',title:'"Example"'},"strategy.one_of(\n    strategy.integers(0, 100),\n    strategy.integers(1000, 1200),\n)\n")))}g.isMDXComponent=!0}}]);