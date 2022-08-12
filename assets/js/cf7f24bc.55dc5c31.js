"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:t},o),{},{components:a})):n.createElement(c,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3167:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,p={unversionedId:"contracts/Exchange",id:"contracts/Exchange",title:"Exchange",description:"InternalReplaySwapParams",source:"@site/docs/contracts/Exchange.md",sourceDirName:"contracts",slug:"/contracts/Exchange",permalink:"/perp-docs/docs/contracts/Exchange",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/contracts/Exchange.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CollateralManager",permalink:"/perp-docs/docs/contracts/CollateralManager"},next:{title:"InsuranceFund",permalink:"/perp-docs/docs/contracts/InsuranceFund"}},d={},s=[{value:"InternalReplaySwapParams",id:"internalreplayswapparams",level:3},{value:"InternalSwapResponse",id:"internalswapresponse",level:3},{value:"InternalRealizePnlParams",id:"internalrealizepnlparams",level:3},{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"setAccountBalance",id:"setaccountbalance",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"setMaxTickCrossedWithinBlock",id:"setmaxtickcrossedwithinblock",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"uniswapV3SwapCallback",id:"uniswapv3swapcallback",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"swap",id:"swap",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"settleFunding",id:"settlefunding",level:3},{value:"Return Values:",id:"return-values-1",level:4},{value:"getOrderBook",id:"getorderbook",level:3},{value:"Return Values:",id:"return-values-2",level:4},{value:"getAccountBalance",id:"getaccountbalance",level:3},{value:"Return Values:",id:"return-values-3",level:4},{value:"getClearingHouseConfig",id:"getclearinghouseconfig",level:3},{value:"Return Values:",id:"return-values-4",level:4},{value:"getMaxTickCrossedWithinBlock",id:"getmaxtickcrossedwithinblock",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-5",level:4},{value:"getPnlToBeRealized",id:"getpnltoberealized",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Return Values:",id:"return-values-6",level:4},{value:"getAllPendingFundingPayment",id:"getallpendingfundingpayment",level:3},{value:"Return Values:",id:"return-values-7",level:4},{value:"getPendingFundingPayment",id:"getpendingfundingpayment",level:3},{value:"Return Values:",id:"return-values-8",level:4},{value:"getSqrtMarkTwapX96",id:"getsqrtmarktwapx96",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Return Values:",id:"return-values-9",level:4}],o={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"internalreplayswapparams"},"InternalReplaySwapParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct InternalReplaySwapParams(\n    address baseToken\n    bool isBaseToQuote\n    bool isExactInput\n    uint256 amount\n    uint160 sqrtPriceLimitX96\n  )\n")),(0,r.kt)("h3",{id:"internalswapresponse"},"InternalSwapResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct InternalSwapResponse(\n    int256 base\n    int256 quote\n    int256 exchangedPositionSize\n    int256 exchangedPositionNotional\n    uint256 fee\n    uint256 insuranceFundFee\n    int24 tick\n  )\n")),(0,r.kt)("h3",{id:"internalrealizepnlparams"},"InternalRealizePnlParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct InternalRealizePnlParams(\n    address trader\n    address baseToken\n    int256 takerPositionSize\n    int256 takerOpenNotional\n    int256 base\n    int256 quote\n  )\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,r.kt)("h3",{id:"setaccountbalance"},"setAccountBalance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setAccountBalance(\n    address AccountBalance\n  ) external\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AccountBalance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"contract address")))),(0,r.kt)("h3",{id:"setmaxtickcrossedwithinblock"},"setMaxTickCrossedWithinBlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxTickCrossedWithinBlock(\n    address baseToken,\n    uint24 maxTickCrossedWithinBlock\n  ) external\n")),(0,r.kt)("p",null,"Restrict the price impact by setting the ticks can be crossed within a block when\ntrader reducing liquidity. It is used to prevent the malicious behavior of the malicious traders.\nThe restriction is applied in _isOverPriceLimitWithTick()"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base token address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxTickCrossedWithinBlock")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum ticks can be crossed within a block")))),(0,r.kt)("h3",{id:"uniswapv3swapcallback"},"uniswapV3SwapCallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3SwapCallback(\n    int256 amount0Delta,\n    int256 amount1Delta,\n    bytes data\n  ) external\n")),(0,r.kt)("p",null,"Called to ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," after executing a swap via IUniswapV3Pool#swap."),(0,r.kt)("p",null,"This callback is forwarded to ClearingHouse.uniswapV3SwapCallback() because all the tokens\nare stored in there."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0Delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 that was sent (negative) or must be received (positive) by the pool by")))),(0,r.kt)("p",null,"the end of the swap. If positive, the callback must send that amount of token0 to the pool.\n|",(0,r.kt)("inlineCode",{parentName:"p"},"amount1Delta")," | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by\nthe end of the swap. If positive, the callback must send that amount of token1 to the pool.\n|",(0,r.kt)("inlineCode",{parentName:"p"},"data")," | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#swap call"),(0,r.kt)("h3",{id:"swap"},"swap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function swap(\n    struct IExchange.SwapParams params\n  ) external returns (struct IExchange.SwapResponse)\n")),(0,r.kt)("p",null,"The actual swap function"),(0,r.kt)("p",null,"can only be called from ClearingHouse"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IExchange.SwapParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters of the swap")))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"The")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IExchange.SwapResponse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"result of the swap")))),(0,r.kt)("h3",{id:"settlefunding"},"settleFunding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleFunding(\n  ) external returns (int256 fundingPayment, struct Funding.Growth fundingGrowthGlobal)\n")),(0,r.kt)("p",null,"Settle the funding payment for the time interval since the last settlement"),(0,r.kt)("p",null,"This function should be called at the beginning of every high-level function, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"openPosition()"),"\nwhile it doesn't matter who calls this function\nthis function 1. settles personal funding payment 2. updates global funding growth\npersonal funding payment is settled whenever there is pending funding payment\nthe global funding growth update only happens once per unique timestamp (not blockNumber, due to Arbitrum)"),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fundingPayment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the funding payment of a trader in one market should be settled into owned realized Pnl")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fundingGrowthGlobal")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct Funding.Growth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the up-to-date globalFundingGrowth, usually used for later calculations")))),(0,r.kt)("h3",{id:"getorderbook"},"getOrderBook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOrderBook(\n  ) external returns (address)\n")),(0,r.kt)("p",null,"Get ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderBook")," contract address"),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"orderBook")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"OrderBook")," contract address")))),(0,r.kt)("h3",{id:"getaccountbalance"},"getAccountBalance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAccountBalance(\n  ) external returns (address)\n")),(0,r.kt)("p",null,"Get ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountBalance")," contract address"),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accountBalance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AccountBalance")," contract address")))),(0,r.kt)("h3",{id:"getclearinghouseconfig"},"getClearingHouseConfig"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getClearingHouseConfig(\n  ) external returns (address)\n")),(0,r.kt)("p",null,"Get ",(0,r.kt)("inlineCode",{parentName:"p"},"ClearingHouseConfig")," contract address"),(0,r.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clearingHouse")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ClearingHouseConfig")," contract address")))),(0,r.kt)("h3",{id:"getmaxtickcrossedwithinblock"},"getMaxTickCrossedWithinBlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxTickCrossedWithinBlock(\n    address baseToken\n  ) external returns (uint24)\n")),(0,r.kt)("p",null,"Get the max ticks allowed to be crossed within a block when reducing position"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the base token")))),(0,r.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxTickCrossedWithinBlock")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The max ticks allowed to be crossed within a block when reducing position")))),(0,r.kt)("h3",{id:"getpnltoberealized"},"getPnlToBeRealized"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPnlToBeRealized(\n    struct IExchange.RealizePnlParams params\n  ) external returns (int256)\n")),(0,r.kt)("p",null,"Get the pnl that can be realized if trader reduce position"),(0,r.kt)("p",null,"This function normally won't be needed by traders, but it might be useful for 3rd party"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct IExchange.RealizePnlParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The params needed to do the query, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"RealizePnlParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pnlToBeRealized")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pnl that can be realized if trader reduce position")))),(0,r.kt)("h3",{id:"getallpendingfundingpayment"},"getAllPendingFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAllPendingFundingPayment(\n  ) external returns (int256 pendingFundingPayment)\n")),(0,r.kt)("p",null,"Get all the pending funding payment for a trader"),(0,r.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pendingFundingPayment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pending funding payment of the trader.")))),(0,r.kt)("p",null,"Positive value means the trader pays funding, negative value means the trader receives funding."),(0,r.kt)("h3",{id:"getpendingfundingpayment"},"getPendingFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPendingFundingPayment(\n  ) public returns (int256)\n")),(0,r.kt)("p",null,"Get the pending funding payment for a trader in a given market"),(0,r.kt)("p",null,"this is the view version of _updateFundingGrowth()"),(0,r.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pendingFundingPayment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pending funding payment of a trader in one market,")))),(0,r.kt)("p",null,"including liquidity & balance coefficients. Positive value means the trader pays funding,\nnegative value means the trader receives funding."),(0,r.kt)("h3",{id:"getsqrtmarktwapx96"},"getSqrtMarkTwapX96"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getSqrtMarkTwapX96(\n    address baseToken,\n    uint32 twapInterval\n  ) public returns (uint160)\n")),(0,r.kt)("p",null,"Get the square root of the market twap price with the given time interval"),(0,r.kt)("p",null,"The return value is a X96 number"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the base token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"twapInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time interval in seconds")))),(0,r.kt)("h4",{id:"return-values-9"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtMarkTwapX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The square root of the market twap price")))))}u.isMDXComponent=!0}}]);