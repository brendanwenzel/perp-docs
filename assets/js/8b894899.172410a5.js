"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[780],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},649:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c=void 0,s={unversionedId:"Contracts/ClearingHouseConfig",id:"Contracts/ClearingHouseConfig",isDocsHomePage:!1,title:"ClearingHouseConfig",description:"Functions",source:"@site/docs/Contracts/ClearingHouseConfig.md",sourceDirName:"Contracts",slug:"/Contracts/ClearingHouseConfig",permalink:"/lushan-docs/docs/Contracts/ClearingHouseConfig",editUrl:"https://github.com/perpetual-protocol/lushan-docs/main/docs/Contracts/ClearingHouseConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClearingHouse",permalink:"/lushan-docs/docs/Contracts/ClearingHouse"},next:{title:"Exchange",permalink:"/lushan-docs/docs/Contracts/Exchange"}},u=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"setLiquidationPenaltyRatio",id:"setliquidationpenaltyratio",children:[]},{value:"setPartialCloseRatio",id:"setpartialcloseratio",children:[]},{value:"setTwapInterval",id:"settwapinterval",children:[]},{value:"setMaxMarketsPerAccount",id:"setmaxmarketsperaccount",children:[]}]},{value:"Events",id:"events",children:[{value:"TwapIntervalChanged",id:"twapintervalchanged",children:[]},{value:"LiquidationPenaltyRatioChanged",id:"liquidationpenaltyratiochanged",children:[]},{value:"PartialCloseRatioChanged",id:"partialcloseratiochanged",children:[]},{value:"MaxMarketsPerAccountChanged",id:"maxmarketsperaccountchanged",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) public\n")),(0,i.kt)("h3",{id:"setliquidationpenaltyratio"},"setLiquidationPenaltyRatio"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setLiquidationPenaltyRatio(\n  ) external\n")),(0,i.kt)("h3",{id:"setpartialcloseratio"},"setPartialCloseRatio"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setPartialCloseRatio(\n  ) external\n")),(0,i.kt)("h3",{id:"settwapinterval"},"setTwapInterval"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setTwapInterval(\n  ) external\n")),(0,i.kt)("h3",{id:"setmaxmarketsperaccount"},"setMaxMarketsPerAccount"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setMaxMarketsPerAccount(\n  ) external\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"twapintervalchanged"},"TwapIntervalChanged"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event TwapIntervalChanged(\n  )\n")),(0,i.kt)("h3",{id:"liquidationpenaltyratiochanged"},"LiquidationPenaltyRatioChanged"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event LiquidationPenaltyRatioChanged(\n  )\n")),(0,i.kt)("h3",{id:"partialcloseratiochanged"},"PartialCloseRatioChanged"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event PartialCloseRatioChanged(\n  )\n")),(0,i.kt)("h3",{id:"maxmarketsperaccountchanged"},"MaxMarketsPerAccountChanged"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event MaxMarketsPerAccountChanged(\n  )\n")))}p.isMDXComponent=!0}}]);