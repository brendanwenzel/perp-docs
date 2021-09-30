"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[405],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,y=p["".concat(u,".").concat(g)]||p[g]||s[g]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2249:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],d={},u=void 0,l={unversionedId:"Interfaces/IOrderBook",id:"Interfaces/IOrderBook",isDocsHomePage:!1,title:"IOrderBook",description:"Functions",source:"@site/docs/Interfaces/IOrderBook.md",sourceDirName:"Interfaces",slug:"/Interfaces/IOrderBook",permalink:"/lushan-docs/docs/Interfaces/IOrderBook",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/Interfaces/IOrderBook.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMintableERC20",permalink:"/lushan-docs/docs/Interfaces/IMintableERC20"},next:{title:"IPriceFeed",permalink:"/lushan-docs/docs/Interfaces/IPriceFeed"}},c=[{value:"Functions",id:"functions",children:[{value:"addLiquidity",id:"addliquidity",children:[]},{value:"removeLiquidity",id:"removeliquidity",children:[]},{value:"removeLiquidityByIds",id:"removeliquiditybyids",children:[]},{value:"updateFundingGrowthAndLiquidityCoefficientInFundingPayment",id:"updatefundinggrowthandliquiditycoefficientinfundingpayment",children:[]},{value:"replaySwap",id:"replayswap",children:[]},{value:"getOpenOrderIds",id:"getopenorderids",children:[]},{value:"getOpenOrderById",id:"getopenorderbyid",children:[]},{value:"getOpenOrder",id:"getopenorder",children:[]},{value:"hasOrder",id:"hasorder",children:[]},{value:"getTotalQuoteAmountInPools",id:"gettotalquoteamountinpools",children:[]},{value:"getTotalTokenAmountInPool",id:"gettotaltokenamountinpool",children:[]},{value:"getLiquidityCoefficientInFundingPayment",id:"getliquiditycoefficientinfundingpayment",children:[]},{value:"getFeeGrowthGlobal",id:"getfeegrowthglobal",children:[]}]},{value:"Events",id:"events",children:[{value:"LiquidityChanged",id:"liquiditychanged",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"addliquidity"},"addLiquidity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addLiquidity(\n  ) external returns (struct IOrderBook.AddLiquidityResponse)\n")),(0,o.kt)("h3",{id:"removeliquidity"},"removeLiquidity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeLiquidity(\n  ) external returns (struct IOrderBook.RemoveLiquidityResponse)\n")),(0,o.kt)("h3",{id:"removeliquiditybyids"},"removeLiquidityByIds"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeLiquidityByIds(\n  ) external returns (struct IOrderBook.RemoveLiquidityResponse)\n")),(0,o.kt)("h3",{id:"updatefundinggrowthandliquiditycoefficientinfundingpayment"},"updateFundingGrowthAndLiquidityCoefficientInFundingPayment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function updateFundingGrowthAndLiquidityCoefficientInFundingPayment(\n  ) external returns (int256 liquidityCoefficientInFundingPayment)\n")),(0,o.kt)("h3",{id:"replayswap"},"replaySwap"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function replaySwap(\n  ) external returns (struct IOrderBook.ReplaySwapResponse)\n")),(0,o.kt)("h3",{id:"getopenorderids"},"getOpenOrderIds"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrderIds(\n  ) external returns (bytes32[])\n")),(0,o.kt)("h3",{id:"getopenorderbyid"},"getOpenOrderById"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrderById(\n  ) external returns (struct IOrderBook.OpenOrder)\n")),(0,o.kt)("h3",{id:"getopenorder"},"getOpenOrder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOpenOrder(\n  ) external returns (struct IOrderBook.OpenOrder)\n")),(0,o.kt)("h3",{id:"hasorder"},"hasOrder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hasOrder(\n  ) external returns (bool)\n")),(0,o.kt)("h3",{id:"gettotalquoteamountinpools"},"getTotalQuoteAmountInPools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalQuoteAmountInPools(\n  ) external returns (uint256)\n")),(0,o.kt)("h3",{id:"gettotaltokenamountinpool"},"getTotalTokenAmountInPool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalTokenAmountInPool(\n  ) external returns (uint256 tokenAmount)\n")),(0,o.kt)("h3",{id:"getliquiditycoefficientinfundingpayment"},"getLiquidityCoefficientInFundingPayment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidityCoefficientInFundingPayment(\n  ) external returns (int256 liquidityCoefficientInFundingPayment)\n")),(0,o.kt)("h3",{id:"getfeegrowthglobal"},"getFeeGrowthGlobal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getFeeGrowthGlobal(\n  ) external returns (uint256)\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"liquiditychanged"},"LiquidityChanged"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  event LiquidityChanged(\n  )\n")))}p.isMDXComponent=!0}}]);