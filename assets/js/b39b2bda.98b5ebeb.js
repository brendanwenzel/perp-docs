"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9573:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,i={unversionedId:"Interfaces/IInsuranceFund",id:"Interfaces/IInsuranceFund",isDocsHomePage:!1,title:"IInsuranceFund",description:"Functions",source:"@site/docs/Interfaces/IInsuranceFund.md",sourceDirName:"Interfaces",slug:"/Interfaces/IInsuranceFund",permalink:"/lushan-docs/docs/Interfaces/IInsuranceFund",editUrl:"https://github.com/perpetual-protocol/lushan-docs/tree/main/docs/Interfaces/IInsuranceFund.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IIndexPrice",permalink:"/lushan-docs/docs/Interfaces/IIndexPrice"},next:{title:"IMarketRegistry",permalink:"/lushan-docs/docs/Interfaces/IMarketRegistry"}},d=[{value:"Functions",id:"functions",children:[{value:"borrow",id:"borrow",children:[]},{value:"getToken",id:"gettoken",children:[]},{value:"getBorrower",id:"getborrower",children:[]}]},{value:"Events",id:"events",children:[{value:"BorrowerChanged",id:"borrowerchanged",children:[]}]}],s={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"borrow"},"borrow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function borrow(\n    uint256 amount\n  ) external\n")),(0,a.kt)("p",null,"If bad debt happened, ",(0,a.kt)("inlineCode",{parentName:"p"},"Vault")," contract will borrow from ",(0,a.kt)("inlineCode",{parentName:"p"},"InsuranceFund")," contract"),(0,a.kt)("p",null,"Borrower must be set by owner"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Borrow amount, must be less than ",(0,a.kt)("inlineCode",{parentName:"td"},"InsuranceFund")," balance")))),(0,a.kt)("h3",{id:"gettoken"},"getToken"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getToken(\n  ) external returns (address token)\n")),(0,a.kt)("p",null,"Get settlement token address"),(0,a.kt)("h4",{id:"return-values"},"Return Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"token")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The address of settlement token")))),(0,a.kt)("h3",{id:"getborrower"},"getBorrower"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getBorrower(\n  ) external returns (address borrower)\n")),(0,a.kt)("p",null,"Get valid borrower"),(0,a.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"borrower")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Should be equal to vault address")))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"borrowerchanged"},"BorrowerChanged"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  event BorrowerChanged(\n    address borrower\n  )\n")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"borrower")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The address of the borrower")))))}p.isMDXComponent=!0}}]);