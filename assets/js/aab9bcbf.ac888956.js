"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[46],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=o(a),m=r,c=u["".concat(p,".").concat(m)]||u[m]||k[m]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3052:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],d={},p=void 0,o={unversionedId:"Interfaces/IExchange",id:"Interfaces/IExchange",isDocsHomePage:!1,title:"IExchange",description:"SwapParams",source:"@site/docs/Interfaces/IExchange.md",sourceDirName:"Interfaces",slug:"/Interfaces/IExchange",permalink:"/lushan-docs/docs/Interfaces/IExchange",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/Interfaces/IExchange.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IERC20Metadata",permalink:"/lushan-docs/docs/Interfaces/IERC20Metadata"},next:{title:"IIndexPrice",permalink:"/lushan-docs/docs/Interfaces/IIndexPrice"}},s=[{value:"SwapParams",id:"swapparams",children:[]},{value:"SwapResponse",id:"swapresponse",children:[]},{value:"SwapCallbackData",id:"swapcallbackdata",children:[]},{value:"RealizePnlParams",id:"realizepnlparams",children:[]},{value:"Functions",id:"functions",children:[{value:"swap",id:"swap",children:[]},{value:"settleFunding",id:"settlefunding",children:[]},{value:"getMaxTickCrossedWithinBlock",id:"getmaxtickcrossedwithinblock",children:[]},{value:"getAllPendingFundingPayment",id:"getallpendingfundingpayment",children:[]},{value:"getPendingFundingPayment",id:"getpendingfundingpayment",children:[]},{value:"getSqrtMarkTwapX96",id:"getsqrtmarktwapx96",children:[]},{value:"getPnlToBeRealized",id:"getpnltoberealized",children:[]},{value:"getOrderBook",id:"getorderbook",children:[]},{value:"getAccountBalance",id:"getaccountbalance",children:[]},{value:"getClearingHouseConfig",id:"getclearinghouseconfig",children:[]}]},{value:"Events",id:"events",children:[{value:"FundingUpdated",id:"fundingupdated",children:[]},{value:"MaxTickCrossedWithinBlockChanged",id:"maxtickcrossedwithinblockchanged",children:[]},{value:"AccountBalanceChanged",id:"accountbalancechanged",children:[]}]}],k={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"swapparams"},"SwapParams"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct SwapParams(\n    address trader\n    address baseToken\n    bool isBaseToQuote\n    bool isExactInput\n    bool isClose\n    uint256 amount\n    uint160 sqrtPriceLimitX96\n  )\n")),(0,l.kt)("h3",{id:"swapresponse"},"SwapResponse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct SwapResponse(\n    uint256 base\n    uint256 quote\n    int256 exchangedPositionSize\n    int256 exchangedPositionNotional\n    uint256 fee\n    uint256 insuranceFundFee\n    int256 pnlToBeRealized\n    uint256 sqrtPriceAfterX96\n    int24 tick\n    bool isPartialClose\n  )\n")),(0,l.kt)("h3",{id:"swapcallbackdata"},"SwapCallbackData"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct SwapCallbackData(\n    address trader\n    address baseToken\n    address pool\n    uint24 uniswapFeeRatio\n    uint256 fee\n  )\n")),(0,l.kt)("h3",{id:"realizepnlparams"},"RealizePnlParams"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct RealizePnlParams(\n    address trader\n    address baseToken\n    int256 base\n    int256 quote\n  )\n")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"swap"},"swap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function swap(\n  ) external returns (struct IExchange.SwapResponse)\n")),(0,l.kt)("p",null,"The actual swap function"),(0,l.kt)("p",null,"Only used by ",(0,l.kt)("inlineCode",{parentName:"p"},"ClearingHouse")," contract"),(0,l.kt)("h3",{id:"settlefunding"},"settleFunding"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleFunding(\n  ) external returns (int256 fundingPayment, struct Funding.Growth fundingGrowthGlobal)\n")),(0,l.kt)("p",null,"Settle the funding payment for the time interval since the last settlement"),(0,l.kt)("p",null,"This function should be called at the beginning of every high-level function, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"openPosition()"),"\nwhile it doesn't matter who calls this function\nthis function 1. settles personal funding payment 2. updates global funding growth\npersonal funding payment is settled whenever there is pending funding payment\nthe global funding growth update only happens once per unique timestamp (not blockNumber, due to Arbitrum)"),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fundingPayment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the funding payment of a trader in one market should be settled into owned realized Pnl")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fundingGrowthGlobal")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct Funding.Growth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the up-to-date globalFundingGrowth, usually used for later calculations")))),(0,l.kt)("h3",{id:"getmaxtickcrossedwithinblock"},"getMaxTickCrossedWithinBlock"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxTickCrossedWithinBlock(\n    address baseToken\n  ) external returns (uint24 maxTickCrossedWithinBlock)\n")),(0,l.kt)("p",null,"Get the max ticks allowed to be crossed within a block when reducing position"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address of the base token")))),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maxTickCrossedWithinBlock")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The max ticks allowed to be crossed within a block when reducing position")))),(0,l.kt)("h3",{id:"getallpendingfundingpayment"},"getAllPendingFundingPayment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAllPendingFundingPayment(\n  ) external returns (int256 pendingFundingPayment)\n")),(0,l.kt)("p",null,"Get all the pending funding payment for a trader"),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pendingFundingPayment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The pending funding payment of the trader.")))),(0,l.kt)("p",null,"Positive value means the trader pays funding, negative value means the trader receives funding."),(0,l.kt)("h3",{id:"getpendingfundingpayment"},"getPendingFundingPayment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPendingFundingPayment(\n  ) external returns (int256 pendingFundingPayment)\n")),(0,l.kt)("p",null,"Get the pending funding payment for a trader in a given market"),(0,l.kt)("p",null,"this is the view version of _updateFundingGrowth()"),(0,l.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pendingFundingPayment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The pending funding payment of a trader in one market,")))),(0,l.kt)("p",null,"including liquidity & balance coefficients. Positive value means the trader pays funding,\nnegative value means the trader receives funding."),(0,l.kt)("h3",{id:"getsqrtmarktwapx96"},"getSqrtMarkTwapX96"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getSqrtMarkTwapX96(\n    address baseToken,\n    uint32 twapInterval\n  ) external returns (uint160 sqrtMarkTwapX96)\n")),(0,l.kt)("p",null,"Get the square root of the market twap price with the given time interval"),(0,l.kt)("p",null,"The return value is a X96 number"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address of the base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"twapInterval")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The time interval in seconds")))),(0,l.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sqrtMarkTwapX96")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The square root of the market twap price")))),(0,l.kt)("h3",{id:"getpnltoberealized"},"getPnlToBeRealized"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPnlToBeRealized(\n    struct IExchange.RealizePnlParams params\n  ) external returns (int256 pnlToBeRealized)\n")),(0,l.kt)("p",null,"Get the pnl that can be realized if trader reduce position"),(0,l.kt)("p",null,"This function normally won't be needed by traders, but it might be useful for 3rd party"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct IExchange.RealizePnlParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The params needed to do the query, encoded as ",(0,l.kt)("inlineCode",{parentName:"td"},"RealizePnlParams")," in calldata")))),(0,l.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pnlToBeRealized")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The pnl that can be realized if trader reduce position")))),(0,l.kt)("h3",{id:"getorderbook"},"getOrderBook"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOrderBook(\n  ) external returns (address orderBook)\n")),(0,l.kt)("p",null,"Get ",(0,l.kt)("inlineCode",{parentName:"p"},"OrderBook")," contract address"),(0,l.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderBook")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OrderBook")," contract address")))),(0,l.kt)("h3",{id:"getaccountbalance"},"getAccountBalance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAccountBalance(\n  ) external returns (address accountBalance)\n")),(0,l.kt)("p",null,"Get ",(0,l.kt)("inlineCode",{parentName:"p"},"AccountBalance")," contract address"),(0,l.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"accountBalance")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"AccountBalance")," contract address")))),(0,l.kt)("h3",{id:"getclearinghouseconfig"},"getClearingHouseConfig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getClearingHouseConfig(\n  ) external returns (address clearingHouse)\n")),(0,l.kt)("p",null,"Get ",(0,l.kt)("inlineCode",{parentName:"p"},"ClearingHouseConfig")," contract address"),(0,l.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"clearingHouse")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ClearingHouseConfig")," contract address")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"fundingupdated"},"FundingUpdated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event FundingUpdated(\n    address baseToken,\n    uint256 markTwap,\n    uint256 indexTwap\n  )\n")),(0,l.kt)("p",null,"Emitted when the global funding growth is updated"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address of the base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"markTwap")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The market twap price when the funding growth is updated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"indexTwap")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index twap price when the funding growth is updated")))),(0,l.kt)("h3",{id:"maxtickcrossedwithinblockchanged"},"MaxTickCrossedWithinBlockChanged"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event MaxTickCrossedWithinBlockChanged(\n    address baseToken,\n    uint24 maxTickCrossedWithinBlock\n  )\n")),(0,l.kt)("p",null,"Emitted when maxTickCrossedWithinBlock is updated"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address of the base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maxTickCrossedWithinBlock")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Max tick allowed to be crossed within block when reducing position")))),(0,l.kt)("h3",{id:"accountbalancechanged"},"AccountBalanceChanged"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event AccountBalanceChanged(\n    address accountBalance\n  )\n")),(0,l.kt)("p",null,"Emitted when accountBalance is updated"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"accountBalance")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of accountBalance contract")))))}u.isMDXComponent=!0}}]);