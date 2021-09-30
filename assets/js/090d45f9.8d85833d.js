"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[650],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2676:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},d=void 0,p={unversionedId:"Contracts/Exchange",id:"Contracts/Exchange",isDocsHomePage:!1,title:"Exchange",description:"Functions",source:"@site/docs/Contracts/Exchange.md",sourceDirName:"Contracts",slug:"/Contracts/Exchange",permalink:"/lushan-docs/docs/Contracts/Exchange",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/Contracts/Exchange.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClearingHouseConfig",permalink:"/lushan-docs/docs/Contracts/ClearingHouseConfig"},next:{title:"InsuranceFund",permalink:"/lushan-docs/docs/Contracts/InsuranceFund"}},u=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"setAccountBalance",id:"setaccountbalance",children:[]},{value:"swap",id:"swap",children:[]},{value:"replaySwap",id:"replayswap",children:[]},{value:"settleFundingAndUpdateFundingGrowth",id:"settlefundingandupdatefundinggrowth",children:[]},{value:"uniswapV3MintCallback",id:"uniswapv3mintcallback",children:[]},{value:"uniswapV3SwapCallback",id:"uniswapv3swapcallback",children:[]},{value:"getPool",id:"getpool",children:[]},{value:"getPendingFundingPayment",id:"getpendingfundingpayment",children:[]},{value:"getLastUpdatedTick",id:"getlastupdatedtick",children:[]},{value:"getFundingGrowthGlobalAndTwaps",id:"getfundinggrowthglobalandtwaps",children:[]},{value:"getTick",id:"gettick",children:[]},{value:"getSqrtMarkTwapX96",id:"getsqrtmarktwapx96",children:[]}]},{value:"Events",id:"events",children:[{value:"FundingPaymentSettled",id:"fundingpaymentsettled",children:[]},{value:"FundingUpdated",id:"fundingupdated",children:[]}]}],s={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"initialize"},"initialize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,l.kt)("h3",{id:"setaccountbalance"},"setAccountBalance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setAccountBalance(\n  ) external\n")),(0,l.kt)("h3",{id:"swap"},"swap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function swap(\n  ) external returns (struct Exchange.SwapResponse)\n")),(0,l.kt)("p",null,"customized fee: ",(0,l.kt)("a",{parentName:"p",href:"https://www.notion.so/perp/Customise-fee-tier-on-B2QFee-1b7244e1db63416c8651e8fa04128cdb"},"https://www.notion.so/perp/Customise-fee-tier-on-B2QFee-1b7244e1db63416c8651e8fa04128cdb")),(0,l.kt)("h3",{id:"replayswap"},"replaySwap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function replaySwap(\n  ) external returns (int24)\n")),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"the")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct Exchange.ReplaySwapParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"resulting tick (derived from price) after replaying the swap")))),(0,l.kt)("h3",{id:"settlefundingandupdatefundinggrowth"},"settleFundingAndUpdateFundingGrowth"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleFundingAndUpdateFundingGrowth(\n  ) external returns (struct Funding.Growth fundingGrowthGlobal, int256 fundingPayment)\n")),(0,l.kt)("p",null,"this function should be called at the beginning of every high-level function, such as openPosition()\nthis function 1. settles personal funding payment 2. updates global funding growth\npersonal funding payment is settled whenever there is pending funding payment\nthe global funding growth update only happens once per unique timestamp (not blockNumber, due to Arbitrum)"),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fundingGrowthGlobal")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the up-to-date globalFundingGrowth, usually used for later calculations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fundingPayment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the settled pending funding payment")))),(0,l.kt)("h3",{id:"uniswapv3mintcallback"},"uniswapV3MintCallback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3MintCallback(\n    uint256 amount0Owed,\n    uint256 amount1Owed,\n    bytes data\n  ) external\n")),(0,l.kt)("p",null,"Called to ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.sender")," after minting liquidity to a position from IUniswapV3Pool#mint."),(0,l.kt)("p",null,"In the implementation you must pay the pool tokens owed for the minted liquidity.\nThe caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory."),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount0Owed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 due to the pool for the minted liquidity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount1Owed")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 due to the pool for the minted liquidity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Any data passed through by the caller via the IUniswapV3PoolActions#mint call")))),(0,l.kt)("h3",{id:"uniswapv3swapcallback"},"uniswapV3SwapCallback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3SwapCallback(\n    int256 amount0Delta,\n    int256 amount1Delta,\n    bytes data\n  ) external\n")),(0,l.kt)("p",null,"Called to ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.sender")," after executing a swap via IUniswapV3Pool#swap."),(0,l.kt)("p",null,"In the implementation you must pay the pool tokens owed for the swap.\nThe caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.\namount0Delta and amount1Delta can both be 0 if no tokens were swapped."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount0Delta")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 that was sent (negative) or must be received (positive) by the pool by")))),(0,l.kt)("p",null,"the end of the swap. If positive, the callback must send that amount of token0 to the pool.\n|",(0,l.kt)("inlineCode",{parentName:"p"},"amount1Delta")," | int256 | The amount of token1 that was sent (negative) or must be received (positive) by the pool by\nthe end of the swap. If positive, the callback must send that amount of token1 to the pool.\n|",(0,l.kt)("inlineCode",{parentName:"p"},"data")," | bytes | Any data passed through by the caller via the IUniswapV3PoolActions#swap call"),(0,l.kt)("h3",{id:"getpool"},"getPool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPool(\n  ) external returns (address)\n")),(0,l.kt)("h3",{id:"getpendingfundingpayment"},"getPendingFundingPayment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPendingFundingPayment(\n  ) external returns (int256)\n")),(0,l.kt)("p",null,"this is the view version of _updateFundingGrowth()"),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"the")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pending funding payment of a trader in one market, including liquidity & balance coefficients")))),(0,l.kt)("h3",{id:"getlastupdatedtick"},"getLastUpdatedTick"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLastUpdatedTick(\n  ) external returns (int24)\n")),(0,l.kt)("h3",{id:"getfundinggrowthglobalandtwaps"},"getFundingGrowthGlobalAndTwaps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getFundingGrowthGlobalAndTwaps(\n  ) public returns (struct Funding.Growth fundingGrowthGlobal, uint256 markTwap, uint256 indexTwap)\n")),(0,l.kt)("p",null,"this function calculates the up-to-date globalFundingGrowth and twaps and pass them out"),(0,l.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fundingGrowthGlobal")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the up-to-date globalFundingGrowth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"markTwap")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"only for _settleFundingAndUpdateFundingGrowth()")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"indexTwap")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"only for _settleFundingAndUpdateFundingGrowth()")))),(0,l.kt)("h3",{id:"gettick"},"getTick"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTick(\n  ) public returns (int24)\n")),(0,l.kt)("h3",{id:"getsqrtmarktwapx96"},"getSqrtMarkTwapX96"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getSqrtMarkTwapX96(\n  ) public returns (uint160)\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"fundingpaymentsettled"},"FundingPaymentSettled"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event FundingPaymentSettled(\n    address fundingPayment\n  )\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fundingPayment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"> 0: payment, < 0 : receipt")))),(0,l.kt)("h3",{id:"fundingupdated"},"FundingUpdated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event FundingUpdated(\n  )\n")))}c.isMDXComponent=!0}}]);