"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[94],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,k=p["".concat(u,".").concat(g)]||p[g]||c[g]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u=void 0,d={unversionedId:"Contracts/AccountBalance",id:"Contracts/AccountBalance",isDocsHomePage:!1,title:"AccountBalance",description:"Functions",source:"@site/docs/Contracts/AccountBalance.md",sourceDirName:"Contracts",slug:"/Contracts/AccountBalance",permalink:"/lushan-docs/docs/Contracts/AccountBalance",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/Contracts/AccountBalance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts Overview",permalink:"/lushan-docs/docs/ContractOverview"},next:{title:"BaseToken",permalink:"/lushan-docs/docs/Contracts/BaseToken"}},s=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"setVault",id:"setvault",children:[]},{value:"modifyTakerBalance",id:"modifytakerbalance",children:[]},{value:"modifyOwedRealizedPnl",id:"modifyowedrealizedpnl",children:[]},{value:"settleQuoteToOwedRealizedPnl",id:"settlequotetoowedrealizedpnl",children:[]},{value:"settleOwedRealizedPnl",id:"settleowedrealizedpnl",children:[]},{value:"settleBalanceAndDeregister",id:"settlebalanceandderegister",children:[]},{value:"registerBaseToken",id:"registerbasetoken",children:[]},{value:"deregisterBaseToken",id:"deregisterbasetoken",children:[]},{value:"updateTwPremiumGrowthGlobal",id:"updatetwpremiumgrowthglobal",children:[]},{value:"getClearingHouseConfig",id:"getclearinghouseconfig",children:[]},{value:"getOrderBook",id:"getorderbook",children:[]},{value:"getVault",id:"getvault",children:[]},{value:"getBaseTokens",id:"getbasetokens",children:[]},{value:"getAccountInfo",id:"getaccountinfo",children:[]},{value:"getTakerOpenNotional",id:"gettakeropennotional",children:[]},{value:"getTotalOpenNotional",id:"gettotalopennotional",children:[]},{value:"getTotalDebtValue",id:"gettotaldebtvalue",children:[]},{value:"getMarginRequirementForLiquidation",id:"getmarginrequirementforliquidation",children:[]},{value:"getPnlAndPendingFee",id:"getpnlandpendingfee",children:[]},{value:"hasOrder",id:"hasorder",children:[]},{value:"getBase",id:"getbase",children:[]},{value:"getQuote",id:"getquote",children:[]},{value:"getTakerPositionSize",id:"gettakerpositionsize",children:[]},{value:"getTotalPositionSize",id:"gettotalpositionsize",children:[]},{value:"getTotalPositionValue",id:"gettotalpositionvalue",children:[]},{value:"getTotalAbsPositionValue",id:"gettotalabspositionvalue",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"initialize"},"initialize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,l.kt)("h3",{id:"setvault"},"setVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setVault(\n  ) external\n")),(0,l.kt)("h3",{id:"modifytakerbalance"},"modifyTakerBalance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function modifyTakerBalance(\n  ) external returns (int256, int256)\n")),(0,l.kt)("h3",{id:"modifyowedrealizedpnl"},"modifyOwedRealizedPnl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function modifyOwedRealizedPnl(\n  ) external\n")),(0,l.kt)("h3",{id:"settlequotetoowedrealizedpnl"},"settleQuoteToOwedRealizedPnl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleQuoteToOwedRealizedPnl(\n  ) external\n")),(0,l.kt)("h3",{id:"settleowedrealizedpnl"},"settleOwedRealizedPnl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleOwedRealizedPnl(\n  ) external returns (int256)\n")),(0,l.kt)("h3",{id:"settlebalanceandderegister"},"settleBalanceAndDeregister"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleBalanceAndDeregister(\n  ) external\n")),(0,l.kt)("h3",{id:"registerbasetoken"},"registerBaseToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function registerBaseToken(\n  ) external\n")),(0,l.kt)("h3",{id:"deregisterbasetoken"},"deregisterBaseToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deregisterBaseToken(\n  ) external\n")),(0,l.kt)("h3",{id:"updatetwpremiumgrowthglobal"},"updateTwPremiumGrowthGlobal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function updateTwPremiumGrowthGlobal(\n  ) external\n")),(0,l.kt)("h3",{id:"getclearinghouseconfig"},"getClearingHouseConfig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getClearingHouseConfig(\n  ) external returns (address)\n")),(0,l.kt)("h3",{id:"getorderbook"},"getOrderBook"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOrderBook(\n  ) external returns (address)\n")),(0,l.kt)("h3",{id:"getvault"},"getVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getVault(\n  ) external returns (address)\n")),(0,l.kt)("h3",{id:"getbasetokens"},"getBaseTokens"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getBaseTokens(\n  ) external returns (address[])\n")),(0,l.kt)("h3",{id:"getaccountinfo"},"getAccountInfo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAccountInfo(\n  ) external returns (struct AccountMarket.Info)\n")),(0,l.kt)("h3",{id:"gettakeropennotional"},"getTakerOpenNotional"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTakerOpenNotional(\n  ) external returns (int256)\n")),(0,l.kt)("h3",{id:"gettotalopennotional"},"getTotalOpenNotional"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalOpenNotional(\n  ) external returns (int256)\n")),(0,l.kt)("h3",{id:"gettotaldebtvalue"},"getTotalDebtValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalDebtValue(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"getmarginrequirementforliquidation"},"getMarginRequirementForLiquidation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMarginRequirementForLiquidation(\n  ) external returns (int256)\n")),(0,l.kt)("p",null,"this is different from Vault._getTotalMarginRequirement(), which is for freeCollateral calculation"),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"instead of uint, as it is compared with ClearingHouse.getAccountValue(), which is also an int")))),(0,l.kt)("h3",{id:"getpnlandpendingfee"},"getPnlAndPendingFee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPnlAndPendingFee(\n  ) external returns (int256, int256, uint256)\n")),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"owedRealizedPnl")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the pnl realized already but stored temporarily in AccountBalance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"unrealizedPnl")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the pnl not yet realized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pendingFee")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the pending fee of maker earned")))),(0,l.kt)("h3",{id:"hasorder"},"hasOrder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hasOrder(\n  ) external returns (bool)\n")),(0,l.kt)("h3",{id:"getbase"},"getBase"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getBase(\n  ) public returns (int256)\n")),(0,l.kt)("h3",{id:"getquote"},"getQuote"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getQuote(\n  ) public returns (int256)\n")),(0,l.kt)("h3",{id:"gettakerpositionsize"},"getTakerPositionSize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTakerPositionSize(\n  ) public returns (int256)\n")),(0,l.kt)("h3",{id:"gettotalpositionsize"},"getTotalPositionSize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalPositionSize(\n  ) public returns (int256)\n")),(0,l.kt)("h3",{id:"gettotalpositionvalue"},"getTotalPositionValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalPositionValue(\n  ) public returns (int256)\n")),(0,l.kt)("p",null,"a negative returned value is only be used when calculating pnl\nwe use 15 mins twap to calc position value"),(0,l.kt)("h3",{id:"gettotalabspositionvalue"},"getTotalAbsPositionValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalAbsPositionValue(\n  ) public returns (uint256)\n")),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"up positions value of every market, it calls ",(0,l.kt)("inlineCode",{parentName:"td"},"getTotalPositionValue")," internally")))))}p.isMDXComponent=!0}}]);