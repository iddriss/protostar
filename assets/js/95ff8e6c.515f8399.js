"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[145],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,_=m["".concat(c,".").concat(u)]||m[u]||p[u]||s;return n?a.createElement(_,o(o({ref:t},d),{},{components:n})):a.createElement(_,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3654:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={sidebar_label:"Testing (6 min)"},c="Testing",l={unversionedId:"tutorials/guides/testing",id:"tutorials/guides/testing",title:"Testing",description:"Protostar provides a flexible testing environment for Cairo smart contracts.",source:"@site/docs/tutorials/guides/testing.md",sourceDirName:"tutorials/guides",slug:"/tutorials/guides/testing",permalink:"/protostar/docs/tutorials/guides/testing",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/guides/testing.md",tags:[],version:"current",frontMatter:{sidebar_label:"Testing (6 min)"},sidebar:"tutorials",previous:{title:"Deploying (1 min)",permalink:"/protostar/docs/tutorials/guides/deploying"}},d={},p=[{value:"Unit testing",id:"unit-testing",level:2},{value:"Deploying contracts from tests",id:"deploying-contracts-from-tests",level:2},{value:"Asserts",id:"asserts",level:2},{value:"Cheatcodes",id:"cheatcodes",level:2},{value:"<code>mock_call</code>",id:"mock_call",level:3},{value:"Representing different data structures in <code>ret_data</code>",id:"representing-different-data-structures-in-ret_data",level:4},{value:"Felt",id:"felt",level:5},{value:"Array",id:"array",level:5},{value:"Struct",id:"struct",level:5},{value:"<code>clear_mock_call</code>",id:"clear_mock_call",level:3},{value:"<code>expect_revert</code>",id:"expect_revert",level:3},{value:"<code>expect_events</code>",id:"expect_events",level:3},{value:"<code>deploy_contract</code>",id:"deploy_contract",level:3},{value:"<code>start_prank</code>",id:"start_prank",level:3},{value:"In unit tests",id:"in-unit-tests",level:4},{value:"In integration tests",id:"in-integration-tests",level:4},{value:"<code>roll</code>",id:"roll",level:3},{value:"<code>warp</code>",id:"warp",level:3}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing"},"Testing"),(0,s.kt)("p",null,"Protostar provides a flexible testing environment for Cairo smart contracts.\nIt allows to write unit/integration tests with a help of ",(0,s.kt)("a",{parentName:"p",href:"#cheatcodes"},"cheatcodes"),"."),(0,s.kt)("h2",{id:"unit-testing"},"Unit testing"),(0,s.kt)("p",null,"We will start with a ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorials/project-initialization"},"just created protostar project"),".\nIn your ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," directory create a ",(0,s.kt)("inlineCode",{parentName:"p"},"utils.cairo")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-code",metastring:'title="src/utils.cairo"',title:'"src/utils.cairo"'},"func sum_func{syscall_ptr : felt*, range_check_ptr}(a : felt, b : felt) -> (res : felt):\n    return (a+b)\nend\n")),(0,s.kt)("p",null,"This is our target function, which we are going to test.\nThen in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory create file ",(0,s.kt)("inlineCode",{parentName:"p"},"test_utils.cairo"),", which contains a single test case."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-code",metastring:'title="tests/test_utils.cairo"',title:'"tests/test_utils.cairo"'},"%lang starknet\n\nfrom src.utils import sum_func\n\n@external\nfunc test_sum{syscall_ptr : felt*, range_check_ptr}():\n    let (r) = sum_func(4,3)\n    assert r = 7\n    return ()\nend\n")),(0,s.kt)("p",null,"Then run your test with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"protostar test ./tests\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In the example above, Protostar will run every test case it manages to find in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory. You can read more about specifying where and how Protostar should search for test cases by running ",(0,s.kt)("inlineCode",{parentName:"p"},"protostar test --help"),". "))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="expected result"',title:'"expected','result"':!0},"Collected 1 items\n\ntest_utils: .\n----- TEST SUMMARY ------\n1 passed\nRan 1 out of 1 total tests\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can place your test files anywhere you want. Protostar recursively searches\nthe given directory for cairo files with a name starting with ",(0,s.kt)("inlineCode",{parentName:"p"},"test_")," and treats them as tests files.\nAll functions inside a test file starting with ",(0,s.kt)("inlineCode",{parentName:"p"},"test_")," are treated as separeate test cases."))),(0,s.kt)("h2",{id:"deploying-contracts-from-tests"},"Deploying contracts from tests"),(0,s.kt)("p",null,"For most projects such testing of isolated functions won't be enough. Protostar provides a ",(0,s.kt)("a",{parentName:"p",href:"#deploy_contract"},(0,s.kt)("inlineCode",{parentName:"a"},"deploy_contract")," cheatcode")," to test interactions between contracts.\nWe will use an example of a simple storage contract to show you how to deploy contract inside a test case."),(0,s.kt)("p",null,"First, inside a ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," directory, create a ",(0,s.kt)("inlineCode",{parentName:"p"},"storage_contract.cairo")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-code",metastring:'title="src/storage_contract.cairo"',title:'"src/storage_contract.cairo"'},"%lang starknet\n\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\nfrom starkware.cairo.common.uint256 import Uint256, uint256_add\n\n# Define a storage variable.\n@storage_var\nfunc balance() -> (res : Uint256):\nend\n\n@storage_var\nfunc id() -> (res : felt):\nend\n\n# Increases the balance by the given amount.\n@external\nfunc increase_balance{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(\n        amount : Uint256):\n    let (read_balance) = balance.read()\n    let (new_balance, carry) = uint256_add(read_balance, amount)\n    assert carry = 0\n    balance.write(new_balance)\n    return ()\nend\n\n# Returns the current balance.\n@view\nfunc get_balance{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (\n        res : Uint256):\n    let (res) = balance.read()\n    return (res)\nend\n\n@view\nfunc get_id{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (res : felt):\n    let (res) = id.read()\n    return (res)\nend\n\n@constructor\nfunc constructor{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(\n        initial_balance : Uint256, _id : felt):\n    balance.write(initial_balance)\n    id.write(_id)\n    return ()\nend\n\n")),(0,s.kt)("p",null,"Then we can create a test case for the contract.\nInside ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory, create a ",(0,s.kt)("inlineCode",{parentName:"p"},"test_storage_contract.cairo")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-code",metastring:'title="tests/test_storage_contract.cairo"',title:'"tests/test_storage_contract.cairo"'},'%lang starknet\nfrom starkware.cairo.common.uint256 import Uint256\n\n@contract_interface\nnamespace StorageContract:\n    func increase_balance(amount : Uint256):\n    end\n\n    func get_balance() -> (res : Uint256):\n    end\n\n    func get_id() -> (res : felt):\n    end\nend\n\n@external\nfunc test_proxy_contract{syscall_ptr : felt*, range_check_ptr}():\n    alloc_locals\n\n    local contract_address : felt\n    # We deploy contract and put its address into a local variable. Second argument is calldata array\n    %{ ids.contract_address = deploy_contract("./src/storage_contract.cairo", [100, 0, 1]).contract_address %}\n\n    let (res) = StorageContract.get_balance(contract_address=contract_address)\n    assert res.low = 100\n    assert res.high = 0\n\n    let (id) = StorageContract.get_id(contract_address=contract_address)\n    assert id = 1\n\n    StorageContract.increase_balance(contract_address=contract_address, amount=Uint256(50, 0))\n\n    let (res) = StorageContract.get_balance(contract_address=contract_address)\n    assert res.low = 150\n    assert res.high = 0\n    return ()\nend\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/hello_starknet/more_features.html#passing-tuples-and-structs-in-calldata"},'"passing typles and structs in calldata"')," on how to serialize your constructor arguments to array of integers"))),(0,s.kt)("p",null,"Then run your test with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"protostar test ./tests\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="expected result"',title:'"expected','result"':!0},"Collected 2 items\n\nstorage_test: .\ntest_utils: .\n----- TEST SUMMARY ------\n2 passed\nRan 2 out of 2 total tests\n")),(0,s.kt)("h2",{id:"asserts"},"Asserts"),(0,s.kt)("p",null,"Protostar ships with its own assert functions. They don't accept ",(0,s.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/builtins.html?highlight=implicit%20arguments#implicit-arguments"},"implicit arguments")," compared to asserts from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/math.cairo"},(0,s.kt)("inlineCode",{parentName:"a"},"starkware.cairo.common.math")),". You can import Protostar asserts in the following way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="test_my_contract.cairo"',title:'"test_my_contract.cairo"'},"from protostar.asserts import (\n    assert_eq, assert_not_eq, assert_signed_lt, assert_signed_le, assert_signed_gt,\n    assert_unsigned_lt, assert_unsigned_le, assert_unsigned_gt, assert_signed_ge,\n    assert_unsigned_ge)\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If your IDE supports Cairo and doesn't know how to import ",(0,s.kt)("inlineCode",{parentName:"p"},"protostar"),", add the following directory\n",(0,s.kt)("inlineCode",{parentName:"p"},"$(which protostar)/../cairo")," to the ",(0,s.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/imports.html?highlight=cairo_path"},(0,s.kt)("inlineCode",{parentName:"a"},"CAIRO_PATH")),"."))),(0,s.kt)("p",null,"You can find all ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/protostar/blob/master/cairo/protostar/asserts.cairo"},"assert signatures here"),"."),(0,s.kt)("h2",{id:"cheatcodes"},"Cheatcodes"),(0,s.kt)("p",null,"Most of the time, testing smart contracts with assertions only is not enough. Some test cases require manipulating the state of the blockchain, as well as checking for reverts and events. For that reason, Protostar provides a set of cheatcodes."),(0,s.kt)("p",null,"Cheatcodes are available inside of ",(0,s.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/hello_cairo/program_input.html#hints"},"Cairo hints"),". You don't have to import anything. When Protostar runs tests, it replaces some core elements in ",(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/cairo-lang/"},"cairo-lang")," library and inject cheatcodes to the hint scope."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you are familiar with ",(0,s.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/forge/cheatcodes.html"},"Foundry"),", you will recognize most cheatcodes."))),(0,s.kt)("h3",{id:"mock_call"},(0,s.kt)("inlineCode",{parentName:"h3"},"mock_call")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def mock_call(contract_address: int, fn_name: str, ret_data: List[int]) -> None: ...\n")),(0,s.kt)("p",null,"Mocks all calls to function with the name ",(0,s.kt)("inlineCode",{parentName:"p"},"fn_name")," of a contract with an address ",(0,s.kt)("inlineCode",{parentName:"p"},"contract_address")," unless ",(0,s.kt)("a",{parentName:"p",href:"#clear_mock_call"},(0,s.kt)("inlineCode",{parentName:"a"},"clear_mock_call"))," is used. Mocked call returns data provided in ",(0,s.kt)("inlineCode",{parentName:"p"},"ret_data"),"."),(0,s.kt)("h4",{id:"representing-different-data-structures-in-ret_data"},"Representing different data structures in ",(0,s.kt)("inlineCode",{parentName:"h4"},"ret_data")),(0,s.kt)("p",null,"To use ",(0,s.kt)("inlineCode",{parentName:"p"},"mock_call")," effectively, you need to understand how Cairo data structures are represented under the hood. ",(0,s.kt)("inlineCode",{parentName:"p"},"Cairo-lang")," operates on a list of integers. The following examples demonstrate how each data structure is represented in Python code."),(0,s.kt)("h5",{id:"felt"},"Felt"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="mocked_call returns a felt"',title:'"mocked_call',returns:!0,a:!0,'felt"':!0},'%lang starknet\n\n@contract_interface\nnamespace ITestContract:\n    func get_felt() -> (res : felt):\n    end\nend\n\nconst EXTERNAL_CONTRACT_ADDRESS = 0x3fe90a1958bb8468fb1b62970747d8a00c435ef96cda708ae8de3d07f1bb56b\n\n@view\nfunc test_mock_call_returning_felt{syscall_ptr : felt*, range_check_ptr}():\n  tempvar external_contract_address = EXTERNAL_CONTRACT_ADDRESS\n\n  %{ mock_call(ids.external_contract_address, "get_felt", [42]) %}\n  let (res) = ITestContract.get_felt(EXTERNAL_CONTRACT_ADDRESS)\n\n  assert res = 42\n  return ()\nend\n')),(0,s.kt)("h5",{id:"array"},"Array"),(0,s.kt)("p",null,"To mock a function returning an array, provide data in the following format to ",(0,s.kt)("inlineCode",{parentName:"p"},"ret_data"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python representation of a Cairo array"',title:'"Python',representation:!0,of:!0,a:!0,Cairo:!0,'array"':!0},"[n, value_1, value_2, ..., value_n]\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="mocked_call returns an array"',title:'"mocked_call',returns:!0,an:!0,'array"':!0},'%lang starknet\n\n@contract_interface\nnamespace ITestContract:\n    func get_array() -> (res_len : felt, res : felt*):\n    end\nend\n\nconst EXTERNAL_CONTRACT_ADDRESS = 0x3fe90a1958bb8468fb1b62970747d8a00c435ef96cda708ae8de3d07f1bb56b\n\n@view\nfunc test_mock_call_returning_array{syscall_ptr : felt*, range_check_ptr}():\n  tempvar external_contract_address = EXTERNAL_CONTRACT_ADDRESS\n\n  %{ mock_call(ids.external_contract_address, "get_array", [1, 42]) %}\n  let (res_len, res_arr) = ITestContract.get_array(EXTERNAL_CONTRACT_ADDRESS)\n\n  assert res_arr[0] = 42\n  return ()\nend\n')),(0,s.kt)("h5",{id:"struct"},"Struct"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="mocked_call returns a struct"',title:'"mocked_call',returns:!0,a:!0,'struct"':!0},'%lang starknet\n\nstruct Point:\n    member x : felt\n    member y : felt\nend\n\n@contract_interface\nnamespace ITestContract:\n    func get_struct() -> (res : Point):\n    end\nend\n\nconst EXTERNAL_CONTRACT_ADDRESS = 0x3fe90a1958bb8468fb1b62970747d8a00c435ef96cda708ae8de3d07f1bb56b\n\n@view\nfunc test_mock_call_returning_struct{syscall_ptr : felt*, range_check_ptr}():\n  tempvar external_contract_address = EXTERNAL_CONTRACT_ADDRESS\n\n  %{ mock_call(ids.external_contract_address, "get_struct", [21,37]) %}\n  let (res_struct) = ITestContract.get_struct(EXTERNAL_CONTRACT_ADDRESS)\n\n  assert res_struct.x = 21\n  assert res_struct.y = 37\n  return ()\nend\n')),(0,s.kt)("h3",{id:"clear_mock_call"},(0,s.kt)("inlineCode",{parentName:"h3"},"clear_mock_call")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def clear_mock_call(contract_address: int, fn_name: str) -> None: ...\n")),(0,s.kt)("p",null,"Removes a mocked call specified by a function name (",(0,s.kt)("inlineCode",{parentName:"p"},"fn_name"),") of a contract with an address (",(0,s.kt)("inlineCode",{parentName:"p"},"contract_address"),")."),(0,s.kt)("h3",{id:"expect_revert"},(0,s.kt)("inlineCode",{parentName:"h3"},"expect_revert")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def expect_revert(error_type: Optional[str] = None, error_message: Optional[str] = None) -> None: ...\n")),(0,s.kt)("p",null,"If a code beneath ",(0,s.kt)("inlineCode",{parentName:"p"},"expect_revert")," raises a specified exception, a test will pass. If not, a test will fail."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Protostar displays an error type and a message when a test fails."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="This test passes despite calling an uninitialized contract."',title:'"This',test:!0,passes:!0,despite:!0,calling:!0,an:!0,uninitialized:!0,'contract."':!0},'%lang starknet\n\n@contract_interface\nnamespace BasicContract:\n    func increase_balance(amount : felt):\n    end\n\n    func get_balance() -> (res : felt):\n    end\nend\n\n@external\nfunc test_failing_to_call_external_contract{syscall_ptr : felt*, range_check_ptr}():\n    alloc_locals\n\n    %{ expect_revert("UNINITIALIZED_CONTRACT") %}\n    BasicContract.increase_balance(contract_address=21, amount=3)\n\n    return ()\nend\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:"title=\"'except_revert' checks if the last error annotation contains 'error_message'.\"",title:"\"'except_revert'",checks:!0,if:!0,the:!0,last:!0,error:!0,annotation:!0,contains:!0,"'error_message'.\"":!0},'%lang starknet\n\nfunc inverse(x) -> (res):\n    with_attr error_message("x must not be zero. Got x={x}."):\n        return (res=1 / x)\n    end\nend\n\nfunc assert_not_equal(a, b):\n    let diff = a - b\n    with_attr error_message("a and b must be distinct."):\n        inverse(diff)\n    end\n    return ()\nend\n\n@view\nfunc test_error_message{syscall_ptr : felt*, range_check_ptr}():\n    %{ expect_revert(error_message="must be distinct") %}\n    assert_not_equal(0, 0)\n    return ()\nend\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Use ",(0,s.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/scope_attributes.html?highlight=with_attr"},"scope attributes")," to annotate a code block with an informative error message."))),(0,s.kt)("h3",{id:"expect_events"},(0,s.kt)("inlineCode",{parentName:"h3"},"expect_events")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},' def expect_events(\n            *raw_expected_events: Union[\n                str, # Protostar interprets string as an event\'s name \n                TypedDict("ExpectedEvent", {\n                    "name": str,\n                    "data": NotRequired[List[int]],\n                    "from_address": NotRequired[int]\n                },\n            )],\n        ) -> None: ...\n')),(0,s.kt)("p",null,"Compares expected events with events in the StarkNet state. You can use this cheatcode to test whether a contract emits specified events in unit and integration tests. Protostar compares events after a test case is completed. Therefore, you can use this cheatcode in any place within a test case."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Protostar also checks the order of emitted events."',title:'"Protostar',also:!0,checks:!0,the:!0,order:!0,of:!0,emitted:!0,'events."':!0},'%lang starknet\n\n@event\nfunc foobar(number : felt):\nend\n\nfunc emit_foobar{syscall_ptr : felt*, range_check_ptr}(number : felt):\n    foobar.emit(number)\n    return ()\nend\n\n@contract_interface\nnamespace BasicContract:\n    func increase_balance():\n    end\nend\n\n# ----------------------------------------------\n\n@view\nfunc test_expect_events_are_in_declared_order{syscall_ptr : felt*, range_check_ptr}():\n    %{ expect_events({"name": "foobar", "data": [21]}, {"name": "foobar", "data": [37]}) %}\n    emit_foobar(21)\n    emit_foobar(37)\n    return ()\nend\n\n@view\nfunc test_expect_event_by_contract_address{syscall_ptr : felt*, range_check_ptr}():\n    alloc_locals\n    local contract_address : felt\n    %{\n        ids.contract_address = deploy_contract("./src/commands/test/examples/cheats/expect_events/basic_contract.cairo").contract_address\n        expect_events({"name": "balance_increased", "from_address": ids.contract_address})\n    %}\n    BasicContract.increase_balance(contract_address=contract_address)\n    return ()\nend\n')),(0,s.kt)("h3",{id:"deploy_contract"},(0,s.kt)("inlineCode",{parentName:"h3"},"deploy_contract")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def deploy_contract(contract_path: str, constructor_calldata: List[int]) -> DeployedContact:\n\nclass DeployedContract:\n    @property\n    def contract_address(self) -> int: ...\n")),(0,s.kt)("p",null,"Deploys a contract given a path relative to a Protostar project root. The section ",(0,s.kt)("a",{parentName:"p",href:"#deploying-contracts-from-tests"},"Deploying contracts from tests")," demonstrates a usage of this cheatcode."),(0,s.kt)("h3",{id:"start_prank"},(0,s.kt)("inlineCode",{parentName:"h3"},"start_prank")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def start_prank(caller_address: int, target_contract_address: Optional[int] = None) -> Callable: ...\n")),(0,s.kt)("p",null,"Changes a caller address returned by ",(0,s.kt)("inlineCode",{parentName:"p"},"get_caller_address()")," until the returned callable is called. If ",(0,s.kt)("inlineCode",{parentName:"p"},"target_contract_address")," is specified, ",(0,s.kt)("inlineCode",{parentName:"p"},"start_prank")," affects only the contract with the specified address. Otherwise, ",(0,s.kt)("inlineCode",{parentName:"p"},"start_prank")," affects  the current contract."),(0,s.kt)("h4",{id:"in-unit-tests"},"In unit tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Local assert passes"',title:'"Local',assert:!0,'passes"':!0},"\n@external\nfunc test_remote_prank{syscall_ptr : felt*, range_check_ptr}():\n    %{ stop_prank_callable = start_prank(123) %}\n\n    let (caller_addr) = get_caller_address()\n    # Does not raise error\n    assert caller_addr = 123\n\n    %{ stop_prank_callable() %}\n    return ()\nend\n")),(0,s.kt)("h4",{id:"in-integration-tests"},"In integration tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="./pranked_contract.cairo"',title:'"./pranked_contract.cairo"'},'%lang starknet\n\nfrom starkware.starknet.common.syscalls import (get_caller_address)\n\n@external\nfunc assert_pranked{syscall_ptr : felt*}():\n    let (caller_addr) = get_caller_address()\n    with_attr error_message("Not pranked!"):\n        assert caller_addr = 123\n    end\n    return ()\nend\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Remote assert passes"',title:'"Remote',assert:!0,'passes"':!0},'@contract_interface\nnamespace Pranked:\n    func assert_pranked() -> ():\n    end\nend\n\n@external\nfunc test_remote_prank{syscall_ptr : felt*, range_check_ptr}():\n    alloc_locals\n    local contract_address : felt\n    %{ \n        ids.contract_address = deploy_contract("./pranked_contract.cairo").contract_address \n        stop_prank_callable = start_prank(123, target_contract_address=ids.contract_address)\n    %}\n    # Does not raise error\n    Pranked.assert_pranked(contract_address=contract_address)\n    %{ stop_prank_callable() %}\n    return ()\nend\n')),(0,s.kt)("h3",{id:"roll"},(0,s.kt)("inlineCode",{parentName:"h3"},"roll")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def roll(blk_number: int) -> None: ...\n")),(0,s.kt)("p",null,"Sets block number."),(0,s.kt)("h3",{id:"warp"},(0,s.kt)("inlineCode",{parentName:"h3"},"warp")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def warp(blk_timestamp: int) -> None: ...\n")),(0,s.kt)("p",null,"Sets block timestamp."))}u.isMDXComponent=!0}}]);