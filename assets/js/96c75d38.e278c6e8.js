"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),d=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,c=m["".concat(u,".").concat(k)]||m[k]||p[k]||r;return a?l.createElement(c,i(i({ref:t},s),{},{components:a})):l.createElement(c,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));const r={},i=void 0,o={unversionedId:"contracts/CollateralManager",id:"contracts/CollateralManager",title:"CollateralManager",description:"Functions",source:"@site/docs/contracts/CollateralManager.md",sourceDirName:"contracts",slug:"/contracts/CollateralManager",permalink:"/docs/contracts/CollateralManager",draft:!1,editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/contracts/CollateralManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClearingHouseConfig",permalink:"/docs/contracts/ClearingHouseConfig"},next:{title:"Exchange",permalink:"/docs/contracts/Exchange"}},u={},d=[{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"addCollateral",id:"addcollateral",level:3},{value:"setPriceFeed",id:"setpricefeed",level:3},{value:"setCollateralRatio",id:"setcollateralratio",level:3},{value:"setDiscountRatio",id:"setdiscountratio",level:3},{value:"setDepositCap",id:"setdepositcap",level:3},{value:"setMaxCollateralTokensPerAccount",id:"setmaxcollateraltokensperaccount",level:3},{value:"setMmRatioBuffer",id:"setmmratiobuffer",level:3},{value:"setDebtNonSettlementTokenValueRatio",id:"setdebtnonsettlementtokenvalueratio",level:3},{value:"setLiquidationRatio",id:"setliquidationratio",level:3},{value:"setCLInsuranceFundFeeRatio",id:"setclinsurancefundfeeratio",level:3},{value:"setDebtThreshold",id:"setdebtthreshold",level:3},{value:"setCollateralValueDust",id:"setcollateralvaluedust",level:3},{value:"getClearingHouseConfig",id:"getclearinghouseconfig",level:3},{value:"Return Values:",id:"return-values",level:4},{value:"getVault",id:"getvault",level:3},{value:"Return Values:",id:"return-values-1",level:4},{value:"getCollateralConfig",id:"getcollateralconfig",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"getPriceFeedDecimals",id:"getpricefeeddecimals",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-3",level:4},{value:"getPrice",id:"getprice",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-4",level:4},{value:"getMaxCollateralTokensPerAccount",id:"getmaxcollateraltokensperaccount",level:3},{value:"getMmRatioBuffer",id:"getmmratiobuffer",level:3},{value:"getDebtNonSettlementTokenValueRatio",id:"getdebtnonsettlementtokenvalueratio",level:3},{value:"getLiquidationRatio",id:"getliquidationratio",level:3},{value:"Return Values:",id:"return-values-5",level:4},{value:"getCLInsuranceFundFeeRatio",id:"getclinsurancefundfeeratio",level:3},{value:"Return Values:",id:"return-values-6",level:4},{value:"getDebtThreshold",id:"getdebtthreshold",level:3},{value:"Return Values:",id:"return-values-7",level:4},{value:"getCollateralValueDust",id:"getcollateralvaluedust",level:3},{value:"Return Values:",id:"return-values-8",level:4},{value:"isCollateral",id:"iscollateral",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-9",level:4},{value:"requireValidCollateralMmRatio",id:"requirevalidcollateralmmratio",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-10",level:4}],s={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"initialize"},"initialize"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,n.kt)("h3",{id:"addcollateral"},"addCollateral"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addCollateral(\n  ) external\n")),(0,n.kt)("h3",{id:"setpricefeed"},"setPriceFeed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setPriceFeed(\n  ) external\n")),(0,n.kt)("h3",{id:"setcollateralratio"},"setCollateralRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setCollateralRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"setdiscountratio"},"setDiscountRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDiscountRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"setdepositcap"},"setDepositCap"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDepositCap(\n  ) external\n")),(0,n.kt)("h3",{id:"setmaxcollateraltokensperaccount"},"setMaxCollateralTokensPerAccount"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxCollateralTokensPerAccount(\n  ) external\n")),(0,n.kt)("h3",{id:"setmmratiobuffer"},"setMmRatioBuffer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMmRatioBuffer(\n  ) external\n")),(0,n.kt)("h3",{id:"setdebtnonsettlementtokenvalueratio"},"setDebtNonSettlementTokenValueRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDebtNonSettlementTokenValueRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"setliquidationratio"},"setLiquidationRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setLiquidationRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"setclinsurancefundfeeratio"},"setCLInsuranceFundFeeRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setCLInsuranceFundFeeRatio(\n  ) external\n")),(0,n.kt)("h3",{id:"setdebtthreshold"},"setDebtThreshold"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDebtThreshold(\n  ) external\n")),(0,n.kt)("h3",{id:"setcollateralvaluedust"},"setCollateralValueDust"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setCollateralValueDust(\n  ) external\n")),(0,n.kt)("p",null,"Same decimals as the settlement token"),(0,n.kt)("h3",{id:"getclearinghouseconfig"},"getClearingHouseConfig"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getClearingHouseConfig(\n  ) external returns (address)\n")),(0,n.kt)("p",null,"Get the address of clearing house config"),(0,n.kt)("h4",{id:"return-values"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"clearingHouseConfig")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address of clearing house config")))),(0,n.kt)("h3",{id:"getvault"},"getVault"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getVault(\n  ) external returns (address)\n")),(0,n.kt)("p",null,"Get the address of vault"),(0,n.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"vault")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address of vault")))),(0,n.kt)("h3",{id:"getcollateralconfig"},"getCollateralConfig"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getCollateralConfig(\n    address token\n  ) external returns (struct Collateral.Config)\n")),(0,n.kt)("p",null,"Get collateral config by token address"),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"token")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address of token")))),(0,n.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"collateral")),(0,n.kt)("td",{parentName:"tr",align:"left"},"struct Collateral.Config"),(0,n.kt)("td",{parentName:"tr",align:"left"},"config")))),(0,n.kt)("h3",{id:"getpricefeeddecimals"},"getPriceFeedDecimals"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPriceFeedDecimals(\n    address token\n  ) external returns (uint8)\n")),(0,n.kt)("p",null,"Get price feed decimals of the collateral token"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"token")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address of token")))),(0,n.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"decimals")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"of the price feed")))),(0,n.kt)("h3",{id:"getprice"},"getPrice"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPrice(\n    address token\n  ) external returns (uint256)\n")),(0,n.kt)("p",null,"Get the price of the collateral token"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"token")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address of token")))),(0,n.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"price")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"of the certain period")))),(0,n.kt)("h3",{id:"getmaxcollateraltokensperaccount"},"getMaxCollateralTokensPerAccount"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMaxCollateralTokensPerAccount(\n  ) external returns (uint8)\n")),(0,n.kt)("h3",{id:"getmmratiobuffer"},"getMmRatioBuffer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getMmRatioBuffer(\n  ) external returns (uint24)\n")),(0,n.kt)("p",null,"Get the minimum ",(0,n.kt)("inlineCode",{parentName:"p"},"margin ratio - mmRatio")," before the account's collateral is liquidatable"),(0,n.kt)("p",null,"6 decimals, same decimals as _mmRatio"),(0,n.kt)("h3",{id:"getdebtnonsettlementtokenvalueratio"},"getDebtNonSettlementTokenValueRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getDebtNonSettlementTokenValueRatio(\n  ) external returns (uint24)\n")),(0,n.kt)("p",null,"Get the maximum ",(0,n.kt)("inlineCode",{parentName:"p"},"debt / nonSettlementTokenValue")," before the account's collaterals are liquidated"),(0,n.kt)("p",null,"6 decimals"),(0,n.kt)("h3",{id:"getliquidationratio"},"getLiquidationRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidationRatio(\n  ) external returns (uint24)\n")),(0,n.kt)("p",null,"Get the maximum ratio of debt can be repaid in one transaction"),(0,n.kt)("p",null,"6 decimals. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"liquidationRatio")," = 50% means\nthe liquidator can repay as much as half of the trader\u2019s debt in one liquidation"),(0,n.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"liquidation")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ratio")))),(0,n.kt)("h3",{id:"getclinsurancefundfeeratio"},"getCLInsuranceFundFeeRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getCLInsuranceFundFeeRatio(\n  ) external returns (uint24)\n")),(0,n.kt)("p",null,"Get the insurance fund fee ratio when liquidating a trader's collateral"),(0,n.kt)("p",null,"6 decimals. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"clInsuranceFundFeeRatio")," = 5% means\nthe liquidator will pay 5% of transferred settlement token to insurance fund"),(0,n.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"insurance")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"fund fee ratio")))),(0,n.kt)("h3",{id:"getdebtthreshold"},"getDebtThreshold"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getDebtThreshold(\n  ) external returns (uint256)\n")),(0,n.kt)("p",null,"Get the maximum debt (denominated in settlement token) allowed\nbefore an account\u2019s collateral is liquidatable."),(0,n.kt)("p",null,"6 decimals"),(0,n.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Debt")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"threshold")))),(0,n.kt)("h3",{id:"getcollateralvaluedust"},"getCollateralValueDust"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getCollateralValueDust(\n  ) external returns (uint256)\n")),(0,n.kt)("p",null,"Get the threshold of the minium repaid.\nIf a trader\u2019s collateral value (denominated in settlement token) falls below the threshold,\nthe liquidator can convert it with 100% ",(0,n.kt)("inlineCode",{parentName:"p"},"liquidationRatio")," so there is no dust left"),(0,n.kt)("p",null,"6 decimals"),(0,n.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Dust")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"collateral value")))),(0,n.kt)("h3",{id:"iscollateral"},"isCollateral"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isCollateral(\n    address token\n  ) public returns (bool)\n")),(0,n.kt)("p",null,"Check if the given token is one of collateral tokens"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"token")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"address of token")))),(0,n.kt)("h4",{id:"return-values-9"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"if the token is one of collateral tokens")))),(0,n.kt)("h3",{id:"requirevalidcollateralmmratio"},"requireValidCollateralMmRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function requireValidCollateralMmRatio(\n    uint24 mmRatioBuffer\n  ) public returns (uint24)\n")),(0,n.kt)("p",null,"Require and get the the valid collateral maintenance margin ratio by mmRatioBuffer"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"mmRatioBuffer")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"safe margin ratio buffer; 6 decimals, same decimals as _mmRatio")))),(0,n.kt)("h4",{id:"return-values-10"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"collateralMmRatio")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the collateral maintenance margin ratio")))))}p.isMDXComponent=!0}}]);