"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[403],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const s={},i="Fuzzing",o={unversionedId:"tutorials/testing/fuzzing/README",id:"tutorials/testing/fuzzing/README",title:"Fuzzing",description:"This feature is actively developed and many new additions will land in future Protostar releases.",source:"@site/docs/tutorials/07-testing/03-fuzzing/README.md",sourceDirName:"tutorials/07-testing/03-fuzzing",slug:"/tutorials/testing/fuzzing/",permalink:"/protostar/docs/tutorials/testing/fuzzing/",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/07-testing/03-fuzzing/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"warp",permalink:"/protostar/docs/tutorials/testing/cheatcodes/warp"},next:{title:"Reproducing failures",permalink:"/protostar/docs/tutorials/testing/fuzzing/reproducing-failures"}},l={},u=[{value:"Example",id:"example",level:2},{value:"The <em>Safe</em>",id:"the-safe",level:3},{value:"Unit testing",id:"unit-testing",level:3},{value:"Generalizing the test",id:"generalizing-the-test",level:3},{value:"Fixing the bug",id:"fixing-the-bug",level:3},{value:"Interpreting results",id:"interpreting-results",level:2},{value:"Adjusting fuzzing quality",id:"adjusting-fuzzing-quality",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fuzzing"},"Fuzzing"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This feature is actively developed and many new additions will land in future Protostar releases.")),(0,r.kt)("p",null,"In order to use the ",(0,r.kt)("em",{parentName:"p"},"fuzzing mode"),", you have to use the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/cheatcodes/given"},(0,r.kt)("inlineCode",{parentName:"a"},"given"))," cheatcode.\nIn the ",(0,r.kt)("em",{parentName:"p"},"fuzzing mode"),", Protostar treats the test case parameters as a specification of the test case,\nin the form of properties which it should satisfy,\nand tests that these properties hold in numerous randomly generated input data."),(0,r.kt)("p",null,"This technique is often called ",(0,r.kt)("em",{parentName:"p"},"property-based testing"),".\nFrom the perspective of a user, the purpose of property-based testing is to make it easier for the\nuser to write better tests."),(0,r.kt)("p",null,"Fuzzer input parameters are selected according to a ",(0,r.kt)("em",{parentName:"p"},"fuzzing strategy")," associated with each\nparameter.\nProtostar offers various strategies tailored for specific use cases, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/fuzzing/strategies"},"Strategies")," page for more information.\nAssociating a fuzzing strategy to a parameter is done using the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/cheatcodes/given"},(0,r.kt)("inlineCode",{parentName:"a"},"given")),"\ncheatcode, which is only available within ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/#setup-case"},"setup cases"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"the-safe"},"The ",(0,r.kt)("em",{parentName:"h3"},"Safe")),(0,r.kt)("p",null,'Let\'s see how fuzzing works in Protostar, by writing a test for an abstract "safe":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="src/main.cairo"',title:'"src/main.cairo"'},'%lang starknet\nfrom starkware.cairo.common.math import assert_nn\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\n\n@storage_var\nfunc balance() -> (res: felt) {\n}\n\n@external\nfunc withdraw{\n    syscall_ptr: felt*,\n    pedersen_ptr: HashBuiltin*,\n    range_check_ptr\n}(amount: felt) {\n    if (amount == 0) {\n        return ();\n    }\n\n    let (res) = balance.read();\n    let new_res = res - amount;\n\n    with_attr error_message("Cannot withdraw more than stored.") {\n        assert_nn(new_res);\n    }\n\n    balance.write(new_res);\n    return ();\n}\n')),(0,r.kt)("h3",{id:"unit-testing"},"Unit testing"),(0,r.kt)("p",null,"Let's first verify this function by writing a unit test in order to find the general property we are\ntesting for:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="tests/test_main.cairo"',title:'"tests/test_main.cairo"'},"%lang starknet\nfrom src.main import balance, withdraw\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\n\n@external\nfunc setup_withdraw{\n    syscall_ptr: felt*,\n    pedersen_ptr: HashBuiltin*,\n    range_check_ptr\n}() {\n    balance.write(10000);\n    return ();\n}\n\n@external\nfunc test_withdraw{\n    syscall_ptr: felt*,\n    pedersen_ptr: HashBuiltin*,\n    range_check_ptr\n}() {\n    alloc_locals;\n    let (pre_balance_ref) = balance.read();\n    local pre_balance = pre_balance_ref;\n\n    let amount = 1;\n\n    withdraw(amount);\n\n    let (post_balance) = balance.read();\n    assert post_balance = pre_balance - amount;\n\n    return ();\n}\n")),(0,r.kt)("p",null,"So far, so good. Running the test, we see it passes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="$ protostar test"',title:'"$',protostar:!0,'test"':!0},"12:14:47 [INFO] Collected 1 suite, and 1 test case (0.077 s)\n[PASS] tests/test_main.cairo test_withdraw (time=1.19s, steps=129)\n       range_check_builtin=1\n\n12:14:51 [INFO] Test suites: 1 passed, 1 total\n12:14:51 [INFO] Tests:       1 passed, 1 total\n12:14:51 [INFO] Seed:        2917010406\n12:14:51 [INFO] Execution time: 5.34 s\n")),(0,r.kt)("h3",{id:"generalizing-the-test"},"Generalizing the test"),(0,r.kt)("p",null,'This unit test performs checks if we can withdraw "some" amount from our safe.\nHowever, can we be sure that it works for all amounts, not just this particular one?'),(0,r.kt)("p",null,"The general property here is: given a safe balance, when we withdraw some amount from it, we should\nget reduced balance in the safe, and it should not be possible to withdraw more than we have."),(0,r.kt)("p",null,"In order to run our test in the fuzz testing mode, we need to use the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/cheatcodes/given"},(0,r.kt)("inlineCode",{parentName:"a"},"given")),"\ncheatcode. Let's apply this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="tests/test_main.cairo"',title:'"tests/test_main.cairo"'},"%lang starknet\nfrom src.main import balance, withdraw\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\n\n@external\nfunc setup_withdraw{\n    syscall_ptr: felt*,\n    pedersen_ptr: HashBuiltin*,\n    range_check_ptr\n}() {\n    %{ given(amount = strategy.felts()) %}\n\n    balance.write(10000);\n    return ();\n}\n\n@external\nfunc test_withdraw{\n    syscall_ptr: felt*,\n    pedersen_ptr: HashBuiltin*,\n    range_check_ptr\n}(amount: felt) {\n    alloc_locals;\n    let (pre_balance_ref) = balance.read();\n    local pre_balance = pre_balance_ref;\n\n    withdraw(amount);\n\n    let (post_balance) = balance.read();\n    assert post_balance = pre_balance - amount;\n\n    return ();\n}\n")),(0,r.kt)("p",null,"This test is being run using the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/fuzzing/strategies#strategyfelts"},(0,r.kt)("inlineCode",{parentName:"a"},"felts"))," strategy.\nBy default, it tries to apply all possible ",(0,r.kt)("inlineCode",{parentName:"p"},"felt")," values."),(0,r.kt)("p",null,"When the test is run now, we can see that it fails for values larger than the amount we stored\nin ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/#setup-case"},(0,r.kt)("inlineCode",{parentName:"a"},"setup_withdraw")," hook"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="$ protostar test"',title:'"$',protostar:!0,'test"':!0},"12:23:55 [INFO] Collected 1 suite, and 1 test case (0.076 s)\n[FAIL] tests/test_main.cairo test_withdraw (time=7.69s, fuzz_runs=77)\n[type] TRANSACTION_FAILED\n[code] 43\n[messages]:\n\u2014 Cannot withdraw more than stored.\n[details]:\n<REDACTED>/starkware/cairo/common/math.cairo:42:5: Error at pc=0:0:\nGot an exception while executing a hint.\n    %{\n    ^^\nCairo traceback (most recent call last):\ntests/test_main.cairo:16:6: (pc=0:141)\nfunc test_withdraw{\n     ^***********^\ntests/test_main.cairo:25:6: (pc=0:125)\n     withdraw(amount);\n     ^**************^\nError message: Cannot withdraw more than stored.\n<REDACTED>/src/main.cairo:19:9: (pc=0:63)\n        assert_nn(new_res);\n        ^****************^\n\nTraceback (most recent call last):\n  File \"<REDACTED>/starkware/cairo/common/math.cairo\", line 45, in <module>\n    assert 0 <= ids.a % PRIME < range_check_builtin.bound, f'a = {ids.a} is out of range.'\nAssertionError: a = 3618502788666131213697322783095070105623107215331596699973092056135872020480 is out of range.\n[falsifying example]:\namount = 10001\n\n\n12:24:06 [INFO] Test suites: 1 failed, 1 total\n12:24:06 [INFO] Tests:       1 failed, 1 total\n12:24:06 [INFO] Seed:        2965326707\n12:24:06 [INFO] Execution time: 11.95 s\n")),(0,r.kt)("p",null,"We need to take the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cannot withdraw more than stored")," error into consideration, so we also add a\ncall to the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/cheatcodes/expect-revert"},(0,r.kt)("inlineCode",{parentName:"a"},"expect_revert"))," cheatcode if needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="tests/test_main.cairo"',title:'"tests/test_main.cairo"'},'@external\nfunc test_withdraw{\n    syscall_ptr: felt*,\n    pedersen_ptr: HashBuiltin*,\n    range_check_ptr\n}(amount: felt) {\n    alloc_locals;\n    let (pre_balance_ref) = balance.read();\n    local pre_balance = pre_balance_ref;\n\n    %{\n        if ids.amount > ids.pre_balance:\n            expect_revert(error_message="Cannot withdraw more than stored.")\n    %}\n    withdraw(amount);\n\n    let (post_balance) = balance.read();\n    assert post_balance = pre_balance - amount;\n\n    return ();\n}\n')),(0,r.kt)("p",null,"If we run the test now, we can see that Protostar runs a fuzz test, but it fails for high values\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="$ protostar test"',title:'"$',protostar:!0,'test"':!0},"12:25:23 [INFO] Collected 1 suite, and 1 test case (0.075 s)\n[FAIL] tests/test_main.cairo test_withdraw (time=3.04s, fuzz_runs=21)\nExpected an exception matching the following error:\n[error_messages]:\n\u2014 Cannot withdraw more than stored.\n[falsifying example]:\namount = 3618502788666131213697322783095070105623107215331596699973092056135872020480\n\n\n12:25:29 [INFO] Test suites: 1 failed, 1 total\n12:25:29 [INFO] Tests:       1 failed, 1 total\n12:25:29 [INFO] Seed:        1746010604\n12:25:29 [INFO] Execution time: 7.34 s\n")),(0,r.kt)("h3",{id:"fixing-the-bug"},"Fixing the bug"),(0,r.kt)("p",null,"The test fails because ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"felt")," type, so it can overflow when subtracting.\nIn particular, it is certain, that the overflow will happen if you try to\nwithdraw ",(0,r.kt)("inlineCode",{parentName:"p"},"FIELD_PRIME - 1")," (which is the number fuzzer found!).\nAlthough this bug should be fixed within the contract, for the purpose of this tutorial we will do\nit differently:\nwe will instruct the fuzzer to avoid numbers outside of ",(0,r.kt)("inlineCode",{parentName:"p"},"range_check")," builtin boundary."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/fuzzing/strategies#strategyfelts"},(0,r.kt)("inlineCode",{parentName:"a"},"felts"))," strategy accepts a keyword argument ",(0,r.kt)("inlineCode",{parentName:"p"},"rc_bound"),"\nwhich narrows the range of values to be safe to be passed to range check-based assertions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="src/main.cairo"',title:'"src/main.cairo"'},"@external\nfunc setup_withdraw{\n    syscall_ptr: felt*,\n    pedersen_ptr: HashBuiltin*,\n    range_check_ptr\n}() {\n    %{ given(amount = strategy.felts(rc_bound=True)) %}\n\n    balance.write(10000);\n    return ();\n}\n")),(0,r.kt)("p",null,"And now, the test passes.\nWe can also observe the variance of resources usage, caused by the ",(0,r.kt)("inlineCode",{parentName:"p"},"if amount == 0:")," branch in\ncontract code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="$ protostar test"',title:'"$',protostar:!0,'test"':!0},"12:27:23 [INFO] Collected 1 suite, and 1 test case (0.075 s)\n[PASS] tests/test_main.cairo test_withdraw (time=9.49s, fuzz_runs=100, steps=\u03bc: 118.84, Md: 131, min: 78, max: 131)\n       range_check_builtin=\u03bc: 1, Md: 1, min: 1, max: 1\n\n12:27:35 [INFO] Test suites: 1 passed, 1 total\n12:27:35 [INFO] Tests:       1 passed, 1 total\n12:27:35 [INFO] Seed:        3287645654\n12:27:35 [INFO] Execution time: 13.46 s\n")),(0,r.kt)("h2",{id:"interpreting-results"},"Interpreting results"),(0,r.kt)("p",null,"In fuzzing mode, the test is executed many times, hence test summaries are extended:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[PASS] tests/test_main.cairo test_withdraw (fuzz_runs=100, steps=\u03bc: 127, Md: 137, min: 84, max: 137)\n       range_check_builtin=\u03bc: 1.81, Md: 2, min: 1, max: 2\n")),(0,r.kt)("p",null,"Each resource counter presents a summary of observed values across all test runs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u03bc")," is the mean value of a used resource,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Md")," is the median value of this resource,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min")," is the lowest value observed,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max")," is the highest value observed.")),(0,r.kt)("h2",{id:"adjusting-fuzzing-quality"},"Adjusting fuzzing quality"),(0,r.kt)("p",null,"By default, Protostar tries to fail a test case within 100 examples.\nThe default value is chosen to suit a workflow where the test will be part of a suite that is\nregularly executed locally or on a CI server,\nbalancing total running time against the chance of missing a bug."),(0,r.kt)("p",null,"The more complex code, the more examples are needed to find uncommon bugs.\nTo adjust number of input cases generated by the fuzzer,\ncall the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/cheatcodes/max-examples"},(0,r.kt)("inlineCode",{parentName:"a"},"max_examples"))," cheatcode within a\n",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/#setup-hooks"},"setup hook"),"."))}p.isMDXComponent=!0}}]);