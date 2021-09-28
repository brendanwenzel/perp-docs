"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[94],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=l,m=p["".concat(d,".").concat(g)]||p[g]||c[g]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={},d=void 0,u={unversionedId:"Contracts/AccountBalance",id:"Contracts/AccountBalance",isDocsHomePage:!1,title:"AccountBalance",description:"Functions",source:"@site/docs/Contracts/AccountBalance.md",sourceDirName:"Contracts",slug:"/Contracts/AccountBalance",permalink:"/lushan-docs/docs/Contracts/AccountBalance",editUrl:"https://github.com/perpetual-protocol/lushan-docs/main/docs/Contracts/AccountBalance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts Overview",permalink:"/lushan-docs/docs/ContractOverview"},next:{title:"BaseToken",permalink:"/lushan-docs/docs/Contracts/BaseToken"}},s=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"setVault",id:"setvault",children:[]},{value:"addBalance",id:"addbalance",children:[]},{value:"settleQuoteToPnl",id:"settlequotetopnl",children:[]},{value:"addOwedRealizedPnl",id:"addowedrealizedpnl",children:[]},{value:"settleFundingAndUpdateFundingGrowth",id:"settlefundingandupdatefundinggrowth",children:[]},{value:"deregisterBaseToken",id:"deregisterbasetoken",children:[]},{value:"registerBaseToken",id:"registerbasetoken",children:[]},{value:"settle",id:"settle",children:[]},{value:"getOwedRealizedPnl",id:"getowedrealizedpnl",children:[]},{value:"hasOrder",id:"hasorder",children:[]},{value:"getOwedRealizedPnlWithPendingFundingPayment",id:"getowedrealizedpnlwithpendingfundingpayment",children:[]},{value:"getTotalAbsPositionValue",id:"gettotalabspositionvalue",children:[]},{value:"getTotalDebtValue",id:"gettotaldebtvalue",children:[]},{value:"getTotalUnrealizedPnl",id:"gettotalunrealizedpnl",children:[]},{value:"getBase",id:"getbase",children:[]},{value:"getQuote",id:"getquote",children:[]},{value:"getNetQuoteBalance",id:"getnetquotebalance",children:[]},{value:"getPositionSize",id:"getpositionsize",children:[]},{value:"getPositionValue",id:"getpositionvalue",children:[]},{value:"getPendingFundingPayment",id:"getpendingfundingpayment",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,r.kt)("h3",{id:"setvault"},"setVault"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setVault(\n  ) external\n")),(0,r.kt)("h3",{id:"addbalance"},"addBalance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addBalance(\n  ) external\n")),(0,r.kt)("h3",{id:"settlequotetopnl"},"settleQuoteToPnl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleQuoteToPnl(\n  ) external\n")),(0,r.kt)("h3",{id:"addowedrealizedpnl"},"addOwedRealizedPnl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addOwedRealizedPnl(\n  ) external\n")),(0,r.kt)("h3",{id:"settlefundingandupdatefundinggrowth"},"settleFundingAndUpdateFundingGrowth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settleFundingAndUpdateFundingGrowth(\n  ) external returns (struct Funding.Growth fundingGrowthGlobal)\n")),(0,r.kt)("h3",{id:"deregisterbasetoken"},"deregisterBaseToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deregisterBaseToken(\n  ) external\n")),(0,r.kt)("p",null,"this function is expensive"),(0,r.kt)("h3",{id:"registerbasetoken"},"registerBaseToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function registerBaseToken(\n  ) external\n")),(0,r.kt)("h3",{id:"settle"},"settle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function settle(\n  ) external returns (int256 pnl)\n")),(0,r.kt)("p",null,"this function is now only called by Vault.withdraw()"),(0,r.kt)("h3",{id:"getowedrealizedpnl"},"getOwedRealizedPnl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOwedRealizedPnl(\n  ) external returns (int256)\n")),(0,r.kt)("h3",{id:"hasorder"},"hasOrder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hasOrder(\n  ) external returns (bool)\n")),(0,r.kt)("h3",{id:"getowedrealizedpnlwithpendingfundingpayment"},"getOwedRealizedPnlWithPendingFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getOwedRealizedPnlWithPendingFundingPayment(\n  ) external returns (int256 owedRealizedPnl)\n")),(0,r.kt)("h3",{id:"gettotalabspositionvalue"},"getTotalAbsPositionValue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalAbsPositionValue(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"gettotaldebtvalue"},"getTotalDebtValue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalDebtValue(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"gettotalunrealizedpnl"},"getTotalUnrealizedPnl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTotalUnrealizedPnl(\n  ) external returns (int256)\n")),(0,r.kt)("h3",{id:"getbase"},"getBase"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getBase(\n  ) public returns (int256)\n")),(0,r.kt)("h3",{id:"getquote"},"getQuote"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getQuote(\n  ) public returns (int256)\n")),(0,r.kt)("h3",{id:"getnetquotebalance"},"getNetQuoteBalance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getNetQuoteBalance(\n  ) public returns (int256)\n")),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"netQuoteBalance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"= quote.balance + totalQuoteInPools")))),(0,r.kt)("h3",{id:"getpositionsize"},"getPositionSize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPositionSize(\n  ) public returns (int256)\n")),(0,r.kt)("h3",{id:"getpositionvalue"},"getPositionValue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPositionValue(\n  ) public returns (int256)\n")),(0,r.kt)("p",null,"a negative returned value is only be used when calculating pnl\nwe use 15 mins twap to calc position value"),(0,r.kt)("h3",{id:"getpendingfundingpayment"},"getPendingFundingPayment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPendingFundingPayment(\n  ) public returns (int256)\n")),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"the")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"pending funding payment of a trader in one market")))))}p.isMDXComponent=!0}}]);