"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[662],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},d=void 0,u={unversionedId:"Contracts/OrderBook",id:"Contracts/OrderBook",isDocsHomePage:!1,title:"OrderBook",description:"Functions",source:"@site/docs/Contracts/OrderBook.md",sourceDirName:"Contracts",slug:"/Contracts/OrderBook",permalink:"/lushan-docs/docs/Contracts/OrderBook",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/Contracts/OrderBook.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MetaTxGateway",permalink:"/lushan-docs/docs/Contracts/MetaTxGateway"},next:{title:"QuoteToken",permalink:"/lushan-docs/docs/Contracts/QuoteToken"}},p=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"setExchange",id:"setexchange",children:[]},{value:"addLiquidity",id:"addliquidity",children:[]},{value:"removeLiquidity",id:"removeliquidity",children:[]},{value:"removeLiquidityByIds",id:"removeliquiditybyids",children:[]},{value:"updateFundingGrowthAndLiquidityCoefficientInFundingPayment",id:"updatefundinggrowthandliquiditycoefficientinfundingpayment",children:[]},{value:"uniswapV3MintCallback",id:"uniswapv3mintcallback",children:[]},{value:"replaySwap",id:"replayswap",children:[]},{value:"getOpenOrderIds",id:"getopenorderids",children:[]},{value:"getOpenOrderById",id:"getopenorderbyid",children:[]},{value:"getOpenOrder",id:"getopenorder",children:[]},{value:"hasOrder",id:"hasorder",children:[]},{value:"getTotalQuoteAmountInPools",id:"gettotalquoteamountinpools",children:[]},{value:"getTotalTokenAmountInPool",id:"gettotaltokenamountinpool",children:[]},{value:"getLiquidityCoefficientInFundingPayment",id:"getliquiditycoefficientinfundingpayment",children:[]},{value:"getFeeGrowthGlobal",id:"getfeegrowthglobal",children:[]}]},{value:"Events",id:"events",children:[{value:"LiquidityChanged",id:"liquiditychanged",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,r.kt)("h3",{id:"setexchange"},"setExchange"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setExchange(\n  ) external\n")),(0,r.kt)("h3",{id:"addliquidity"},"addLiquidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addLiquidity(\n  ) external returns (struct OrderBook.AddLiquidityResponse)\n")),(0,r.kt)("h3",{id:"removeliquidity"},"removeLiquidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeLiquidity(\n  ) external returns (struct OrderBook.RemoveLiquidityResponse)\n")),(0,r.kt)("h3",{id:"removeliquiditybyids"},"removeLiquidityByIds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeLiquidityByIds(\n  ) external returns (struct OrderBook.RemoveLiquidityResponse)\n")),(0,r.kt)("h3",{id:"updatefundinggrowthandliquiditycoefficientinfundingpayment"},"updateFundingGrowthAndLiquidityCoefficientInFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function updateFundingGrowthAndLiquidityCoefficientInFundingPayment(\n  ) external returns (int256 liquidityCoefficientInFundingPayment)\n")),(0,r.kt)("p",null,"this is the non-view version of getLiquidityCoefficientInFundingPayment()"),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidityCoefficientInFundingPayment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the funding payment of all orders/liquidity of a maker")))),(0,r.kt)("h3",{id:"uniswapv3mintcallback"},"uniswapV3MintCallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3MintCallback(\n    uint256 amount0Owed,\n    uint256 amount1Owed,\n    bytes data\n  ) external\n")),(0,r.kt)("p",null,"Called to ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," after minting liquidity to a position from IUniswapV3Pool#mint."),(0,r.kt)("p",null,"In the implementation you must pay the pool tokens owed for the minted liquidity.\nThe caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0Owed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 due to the pool for the minted liquidity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1Owed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 due to the pool for the minted liquidity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any data passed through by the caller via the IUniswapV3PoolActions#mint call")))),(0,r.kt)("h3",{id:"replayswap"},"replaySwap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function replaySwap(\n  ) external returns (struct OrderBook.ReplaySwapResponse)\n")),(0,r.kt)("h3",{id:"getopenorderids"},"getOpenOrderIds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrderIds(\n  ) external returns (bytes32[])\n")),(0,r.kt)("h3",{id:"getopenorderbyid"},"getOpenOrderById"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrderById(\n  ) external returns (struct OrderBook.OpenOrder)\n")),(0,r.kt)("h3",{id:"getopenorder"},"getOpenOrder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrder(\n  ) external returns (struct OrderBook.OpenOrder)\n")),(0,r.kt)("h3",{id:"hasorder"},"hasOrder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hasOrder(\n  ) external returns (bool)\n")),(0,r.kt)("h3",{id:"gettotalquoteamountinpools"},"getTotalQuoteAmountInPools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalQuoteAmountInPools(\n  ) external returns (uint256)\n")),(0,r.kt)("p",null,"note the return value includes maker fee.\nFor more details please refer to _getTotalTokenAmountInPool() docstring"),(0,r.kt)("h3",{id:"gettotaltokenamountinpool"},"getTotalTokenAmountInPool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalTokenAmountInPool(\n  ) external returns (uint256 tokenAmount)\n")),(0,r.kt)("p",null,"the returned quote amount does not include funding payment because\nthe latter is counted directly toward realizedPnl.\nplease refer to _getTotalTokenAmountInPool() docstring for specs"),(0,r.kt)("h3",{id:"getliquiditycoefficientinfundingpayment"},"getLiquidityCoefficientInFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidityCoefficientInFundingPayment(\n  ) external returns (int256 liquidityCoefficientInFundingPayment)\n")),(0,r.kt)("p",null,"this is the view version of updateFundingGrowthAndLiquidityCoefficientInFundingPayment()"),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidityCoefficientInFundingPayment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the funding payment of all orders/liquidity of a maker")))),(0,r.kt)("h3",{id:"getfeegrowthglobal"},"getFeeGrowthGlobal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getFeeGrowthGlobal(\n  ) external returns (uint256)\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"liquiditychanged"},"LiquidityChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event LiquidityChanged(\n  )\n")))}c.isMDXComponent=!0}}]);