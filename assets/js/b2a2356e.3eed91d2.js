"use strict";(self.webpackChunkperp_docs=self.webpackChunkperp_docs||[]).push([[9],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"how-to-get-trader-info",title:"Query Trader Info"},i=void 0,l={unversionedId:"guides/how-to-get-trader-info",id:"guides/how-to-get-trader-info",title:"Query Trader Info",description:"PendingFundingPayment",source:"@site/docs/guides/GetTraderInfo.md",sourceDirName:"guides",slug:"/guides/how-to-get-trader-info",permalink:"/docs/guides/how-to-get-trader-info",draft:!1,editUrl:"https://github.com/perpetual-protocol/perp-docs/tree/main/docs/guides/GetTraderInfo.md",tags:[],version:"current",frontMatter:{id:"how-to-get-trader-info",title:"Query Trader Info"},sidebar:"tutorialSidebar",previous:{title:"Data Source",permalink:"/docs/guides/data-source"}},d={},c=[{value:"PendingFundingPayment",id:"pendingfundingpayment",level:2},{value:"Taker or Maker&#39;s UnrealizedPnl by Market",id:"taker-or-makers-unrealizedpnl-by-market",level:2},{value:"Realized PnL",id:"realized-pnl",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pendingfundingpayment"},"PendingFundingPayment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// the following is the workaround unless we expose Exchange._getFundingGrowthGlobalAndTwaps()\nconst lastTraderWhoEmitFundingUpdated\nconst fundingGrowthGlobal.fundingGrowthGlobal = AccountBalance.getAccountinfo(lastTraderWhoEmitFundingUpdatedFromThatMarket, baseToken).lastTwPremiumGrowthGlobalX96\n\n// now we're fetching the info from the trader we want to calculate the pnl\nconst traderLastTwPremiumGrowthGlobalX96 = AccountBalance.getAccountinfo(trader, baseToken).lastTwPremiumGrowthGlobalX96\nconst tradersTakerPosSize = AccountBalance.getTakerPositionSize(trader, baseToken)\n\n// repeat the math of Funding.calcPendingFundingPaymentWithLiquidityCoefficient\nconst takerPendingFundingPaymentByMarket = tradersTakerPosSize * ((fundingGrowthGlobal.twPremiumX96 - traderLastTwPremiumGrowthGlobalX96) / 2^96 ) / 15mins\nconst makerFundingPayment = Exchange.getPendingFundingPayment(trader, baseToken) - takerPendingFundingPaymentByMarket\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Exchange.getPendingFundingPayment(trader, baseToken)")," is negative if receiving funding payment")),(0,a.kt)("h2",{id:"taker-or-makers-unrealizedpnl-by-market"},"Taker or Maker's UnrealizedPnl by Market"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const takerPositionSize = AccountBalance.getTakerPositionSize(trader, baseToken)\nconst makerImpermanentPositionSize = AccountBalance.getTotalPositionSize(trader, baseToken) - takerPositionSize\n                                                                     = OrderBook.getTotalTokenAmountInPoolAndPendingFee(trader, baseToken, fetchBaseIsTrue).tokenAmount - OrderBook.getTotalOrderDebt(trader, baseToken, fetchBaseIsTrue)\n\nconst takerOpenNotional = AccountBalance.getTakerOpenNotional(trader, baseToken) \nconst makerOpenNotional = AccountBalance.getTotalOpenNotional(trader, baseToken) - takerOpenNotional\n                                                = OrderBook.getTotalTokenAmountInPoolAndPendingFee(trader, baseToken, fetchBaseIsFalse).tokenAmount - OrderBook.getTotalOrderDebt(trader, baseToken, fetchBaseIsFalse)\n\nconst takerUnrealizedPnl = takerPositionSize * indexPrice + takerOpenNotional\nconst makerUnrealizedPnl = makerImpermanentPositionSize * indexPrice + makerOpenNotional\n")),(0,a.kt)("h2",{id:"realized-pnl"},"Realized PnL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"by event",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"observe ",(0,a.kt)("inlineCode",{parentName:"li"},"PnlRealized")," event from ",(0,a.kt)("inlineCode",{parentName:"li"},"AccountBalance")," (less preferred, harder to get market)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it will be emitted anytime when addLiquidity, removeLiquidity, openPosition, closePosition, liquidate, cancelExcessOrder and settleAllFunding. It could emit multiple event in 1 action"),(0,a.kt)("li",{parentName:"ul"},"ex. when liquidating a position, it can",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"emit PnlRealized first for the funding"),(0,a.kt)("li",{parentName:"ul"},"emit another one for IF (taking 10% fee as IF\u2019s profit)"),(0,a.kt)("li",{parentName:"ul"},"realized the position pnl"),(0,a.kt)("li",{parentName:"ul"},"emit PnlRealized for trader\u2019s liquidation fee (loss)"),(0,a.kt)("li",{parentName:"ul"},"also emit enother one for the liquidator (profit)"))))),(0,a.kt)("li",{parentName:"ol"},"PositionChanged + ",(0,a.kt)("inlineCode",{parentName:"li"},"FundingPaymentSettled")," + PositionLiquidated + RealizedMakerFee",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"PositionChanged.realizedPnl + ",(0,a.kt)("inlineCode",{parentName:"li"},"FundingPaymentSettled"),".fundingPayment + PositionLiquidated.liquidationFee"))))),(0,a.kt)("li",{parentName:"ol"},"by contract",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"every time a contract call (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"openPosition")," ), store ",(0,a.kt)("inlineCode",{parentName:"li"},"owedRealizedPnl")," before and after the openPosition by calling ",(0,a.kt)("inlineCode",{parentName:"li"},"AccountBalance.getPnlAndPendingFee"))))))}u.isMDXComponent=!0}}]);