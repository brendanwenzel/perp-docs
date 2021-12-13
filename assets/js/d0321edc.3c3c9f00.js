"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[908],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2165:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},d=void 0,p={unversionedId:"Contracts/ClearingHouse",id:"Contracts/ClearingHouse",isDocsHomePage:!1,title:"ClearingHouse",description:"InternalOpenPositionParams",source:"@site/docs/Contracts/ClearingHouse.md",sourceDirName:"Contracts",slug:"/Contracts/ClearingHouse",permalink:"/lushan-docs/docs/Contracts/ClearingHouse",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/Contracts/ClearingHouse.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BaseToken",permalink:"/lushan-docs/docs/Contracts/BaseToken"},next:{title:"ClearingHouseConfig",permalink:"/lushan-docs/docs/Contracts/ClearingHouseConfig"}},s=[{value:"InternalOpenPositionParams",id:"internalopenpositionparams",children:[]},{value:"InternalClosePositionParams",id:"internalclosepositionparams",children:[]},{value:"InternalCheckSlippageParams",id:"internalcheckslippageparams",children:[]},{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"setTrustedForwarder",id:"settrustedforwarder",children:[]},{value:"addLiquidity",id:"addliquidity",children:[]},{value:"removeLiquidity",id:"removeliquidity",children:[]},{value:"settleAllFunding",id:"settleallfunding",children:[]},{value:"openPosition",id:"openposition",children:[]},{value:"closePosition",id:"closeposition",children:[]},{value:"liquidate",id:"liquidate",children:[]},{value:"cancelExcessOrders",id:"cancelexcessorders",children:[]},{value:"cancelAllExcessOrders",id:"cancelallexcessorders",children:[]},{value:"uniswapV3MintCallback",id:"uniswapv3mintcallback",children:[]},{value:"uniswapV3SwapCallback",id:"uniswapv3swapcallback",children:[]},{value:"getQuoteToken",id:"getquotetoken",children:[]},{value:"getUniswapV3Factory",id:"getuniswapv3factory",children:[]},{value:"getClearingHouseConfig",id:"getclearinghouseconfig",children:[]},{value:"getVault",id:"getvault",children:[]},{value:"getExchange",id:"getexchange",children:[]},{value:"getOrderBook",id:"getorderbook",children:[]},{value:"getAccountBalance",id:"getaccountbalance",children:[]},{value:"getInsuranceFund",id:"getinsurancefund",children:[]},{value:"getAccountValue",id:"getaccountvalue",children:[]}]}],u={toc:s};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"internalopenpositionparams"},"InternalOpenPositionParams"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct InternalOpenPositionParams(\n    address trader\n    address baseToken\n    bool isBaseToQuote\n    bool isExactInput\n    bool isClose\n    uint256 amount\n    uint160 sqrtPriceLimitX96\n  )\n")),(0,l.kt)("h3",{id:"internalclosepositionparams"},"InternalClosePositionParams"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct InternalClosePositionParams(\n    address trader\n    address baseToken\n    uint160 sqrtPriceLimitX96\n  )\n")),(0,l.kt)("h3",{id:"internalcheckslippageparams"},"InternalCheckSlippageParams"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  struct InternalCheckSlippageParams(\n    bool isBaseToQuote\n    bool isExactInput\n    uint256 base\n    uint256 quote\n    uint256 oppositeAmountBound\n  )\n")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"initialize"},"initialize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) public\n")),(0,l.kt)("p",null,"this function is public for testing"),(0,l.kt)("h3",{id:"settrustedforwarder"},"setTrustedForwarder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setTrustedForwarder(\n  ) external\n")),(0,l.kt)("h3",{id:"addliquidity"},"addLiquidity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addLiquidity(\n    struct IClearingHouse.AddLiquidityParams params\n  ) external returns (struct IClearingHouse.AddLiquidityResponse)\n")),(0,l.kt)("p",null,"Maker can call ",(0,l.kt)("inlineCode",{parentName:"p"},"addLiquidity")," to provide liquidity on Uniswap V3 pool"),(0,l.kt)("p",null,"Tx will fail if adding ",(0,l.kt)("inlineCode",{parentName:"p"},"base == 0 && quote == 0")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"liquidity == 0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AddLiquidityParams.useTakerBalance")," is only accept ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," now")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct IClearingHouse.AddLiquidityParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AddLiquidityParams struct")))),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"response")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct IClearingHouse.AddLiquidityResponse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AddLiquidityResponse struct")))),(0,l.kt)("h3",{id:"removeliquidity"},"removeLiquidity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeLiquidity(\n    struct IClearingHouse.RemoveLiquidityParams params\n  ) external returns (struct IClearingHouse.RemoveLiquidityResponse)\n")),(0,l.kt)("p",null,"Maker can call ",(0,l.kt)("inlineCode",{parentName:"p"},"removeLiquidity")," to remove liquidity"),(0,l.kt)("p",null,"remove liquidity will transfer maker impermanent position to taker position,\nif ",(0,l.kt)("inlineCode",{parentName:"p"},"liquidity")," of RemoveLiquidityParams struct is zero, the action will collect fee from\npool to maker"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct IClearingHouse.RemoveLiquidityParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RemoveLiquidityParams struct")))),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"response")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct IClearingHouse.RemoveLiquidityResponse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RemoveLiquidityResponse struct")))),(0,l.kt)("h3",{id:"settleallfunding"},"settleAllFunding"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleAllFunding(\n    address trader\n  ) external\n")),(0,l.kt)("p",null,"Settle all markets fundingPayment to owedRealized Pnl"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"trader")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of trader")))),(0,l.kt)("h3",{id:"openposition"},"openPosition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function openPosition(\n    struct IClearingHouse.OpenPositionParams params\n  ) external returns (uint256 base, uint256 quote)\n")),(0,l.kt)("p",null,"Trader can call ",(0,l.kt)("inlineCode",{parentName:"p"},"openPosition")," to long/short on baseToken market"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenPositionParams.oppositeAmountBound"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"B2Q + exact input, want more output quote as possible, so we set a lower bound of output quote"),(0,l.kt)("li",{parentName:"ul"},"B2Q + exact output, want less input base as possible, so we set a upper bound of input base"),(0,l.kt)("li",{parentName:"ul"},"Q2B + exact input, want more output base as possible, so we set a lower bound of output base"),(0,l.kt)("li",{parentName:"ul"},"Q2B + exact output, want less input quote as possible, so we set a upper bound of input quote",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"when it's set to 0, it will disable slippage protection entirely regardless of exact input or output\nwhen it's over or under the bound, it will be reverted"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenPositionParams.sqrtPriceLimitX96"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"B2Q: the price cannot be less than this value after the swap"),(0,l.kt)("li",{parentName:"ul"},"Q2B: the price cannot be greater than this value after the swap",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"it will fill the trade until it reaches the price limit but WON'T REVERT\nwhen it's set to 0, it will disable price limit;\nwhen it's 0 and exact output, the output amount is required to be identical to the param amount")))))),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct IClearingHouse.OpenPositionParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OpenPositionParams struct")))),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"base")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of baseToken the taker got or spent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"quote")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of quoteToken the taker got or spent")))),(0,l.kt)("h3",{id:"closeposition"},"closePosition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function closePosition(\n    struct IClearingHouse.ClosePositionParams params\n  ) external returns (uint256 base, uint256 quote)\n")),(0,l.kt)("p",null,"Close trader's position"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct IClearingHouse.ClosePositionParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ClosePositionParams struct")))),(0,l.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"base")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of baseToken the taker got or spent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"quote")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of quoteToken the taker got or spent")))),(0,l.kt)("h3",{id:"liquidate"},"liquidate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function liquidate(\n    address trader,\n    address baseToken\n  ) external\n")),(0,l.kt)("p",null,"If trader is underwater, any one can call ",(0,l.kt)("inlineCode",{parentName:"p"},"liquidate")," to liquidate this trader"),(0,l.kt)("p",null,"If trader has open orders, need to call ",(0,l.kt)("inlineCode",{parentName:"p"},"cancelAllExcessOrders")," first"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"trader")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of trader")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of baseToken")))),(0,l.kt)("h3",{id:"cancelexcessorders"},"cancelExcessOrders"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function cancelExcessOrders(\n    address maker,\n    address baseToken,\n    bytes32[] orderIds\n  ) external\n")),(0,l.kt)("p",null,"Cancel excess order of a maker"),(0,l.kt)("p",null,"Order id can get from ",(0,l.kt)("inlineCode",{parentName:"p"},"OrderBook.getOpenOrderIds")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maker")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of Maker")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of baseToken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderIds")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The id of the order")))),(0,l.kt)("h3",{id:"cancelallexcessorders"},"cancelAllExcessOrders"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function cancelAllExcessOrders(\n    address maker,\n    address baseToken\n  ) external\n")),(0,l.kt)("p",null,"Cancel all excess orders of a maker if the maker is underwater"),(0,l.kt)("p",null,"This function won't fail if the maker has no order but fails when maker is not underwater"),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maker")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of maker")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of baseToken")))),(0,l.kt)("h3",{id:"uniswapv3mintcallback"},"uniswapV3MintCallback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3MintCallback(\n    uint256 amount0Owed,\n    uint256 amount1Owed,\n    bytes data\n  ) external\n")),(0,l.kt)("p",null,"Called to ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.sender")," after minting liquidity to a position from IUniswapV3Pool#mint."),(0,l.kt)("p",null,"namings here follow Uniswap's convention"),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount0Owed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 due to the pool for the minted liquidity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount1Owed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 due to the pool for the minted liquidity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Any data passed through by the caller via the IUniswapV3PoolActions#mint call")))),(0,l.kt)("h3",{id:"uniswapv3swapcallback"},"uniswapV3SwapCallback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3SwapCallback(\n    int256 amount0Delta,\n    int256 amount1Delta,\n    bytes data\n  ) external\n")),(0,l.kt)("p",null,"Called to ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.sender")," after executing a swap via IUniswapV3Pool#swap."),(0,l.kt)("p",null,"namings here follow Uniswap's convention"),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount0Delta")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 that was sent (negative) or must be received (positive) by the pool by")))),(0,l.kt)("p",null,"the end of the swap. If positive, the callback must send that amount of token0 to the pool.\n|",(0,l.kt)("inlineCode",{parentName:"p"},"amount1Delta")," | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by\nthe end of the swap. If positive, the callback must send that amount of token1 to the pool.\n|",(0,l.kt)("inlineCode",{parentName:"p"},"data")," | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#swap call"),(0,l.kt)("h3",{id:"getquotetoken"},"getQuoteToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getQuoteToken(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get QuoteToken address"),(0,l.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"quoteToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The quote token address")))),(0,l.kt)("h3",{id:"getuniswapv3factory"},"getUniswapV3Factory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getUniswapV3Factory(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get UniswapV3Factory address"),(0,l.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"factory")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UniswapV3Factory address")))),(0,l.kt)("h3",{id:"getclearinghouseconfig"},"getClearingHouseConfig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getClearingHouseConfig(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get ClearingHouseConfig address"),(0,l.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"clearingHouseConfig")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ClearingHouseConfig address")))),(0,l.kt)("h3",{id:"getvault"},"getVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getVault(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get ",(0,l.kt)("inlineCode",{parentName:"p"},"Vault")," address"),(0,l.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vault")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Vault")," address")))),(0,l.kt)("h3",{id:"getexchange"},"getExchange"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getExchange(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get ",(0,l.kt)("inlineCode",{parentName:"p"},"Exchange")," address"),(0,l.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"exchange")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Exchange")," address")))),(0,l.kt)("h3",{id:"getorderbook"},"getOrderBook"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOrderBook(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get ",(0,l.kt)("inlineCode",{parentName:"p"},"OrderBook")," address"),(0,l.kt)("h4",{id:"return-values-9"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderBook")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OrderBook")," address")))),(0,l.kt)("h3",{id:"getaccountbalance"},"getAccountBalance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAccountBalance(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get AccountBalance address"),(0,l.kt)("h4",{id:"return-values-10"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"accountBalance")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"AccountBalance")," address")))),(0,l.kt)("h3",{id:"getinsurancefund"},"getInsuranceFund"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getInsuranceFund(\n  ) external returns (address)\n")),(0,l.kt)("p",null,"Get ",(0,l.kt)("inlineCode",{parentName:"p"},"InsuranceFund")," address"),(0,l.kt)("h4",{id:"return-values-11"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"insuranceFund")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"InsuranceFund")," address")))),(0,l.kt)("h3",{id:"getaccountvalue"},"getAccountValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAccountValue(\n    address trader\n  ) public returns (int256)\n")),(0,l.kt)("p",null,"Get account value of trader"),(0,l.kt)("p",null,"accountValue = totalCollateralValue + totalUnrealizedPnl, in 18 decimals"),(0,l.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"trader")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of trader")))),(0,l.kt)("h4",{id:"return-values-12"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"accountValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The account value of trader")))))}m.isMDXComponent=!0}}]);