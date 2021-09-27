"use strict";(self.webpackChunklushan_docs=self.webpackChunklushan_docs||[]).push([[22],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s=void 0,u={unversionedId:"Contracts/VirtualToken",id:"Contracts/VirtualToken",isDocsHomePage:!1,title:"VirtualToken",description:"Functions",source:"@site/docs/Contracts/VirtualToken.md",sourceDirName:"Contracts",slug:"/Contracts/VirtualToken",permalink:"/lushan-docs/docs/Contracts/VirtualToken",editUrl:"https://github.com/perpetual-protocol/lushan-docs/main/docs/Contracts/VirtualToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vault",permalink:"/lushan-docs/docs/Contracts/Vault"},next:{title:"IClearingHouse",permalink:"/lushan-docs/docs/Interfaces/IClearingHouse"}},c=[{value:"Functions",id:"functions",children:[{value:"__VirtualToken_init",id:"__virtualtoken_init",children:[]},{value:"mintMaximumTo",id:"mintmaximumto",children:[]},{value:"addWhitelist",id:"addwhitelist",children:[]},{value:"removeWhitelist",id:"removewhitelist",children:[]},{value:"isInWhitelist",id:"isinwhitelist",children:[]},{value:"_beforeTokenTransfer",id:"_beforetokentransfer",children:[]}]},{value:"Events",id:"events",children:[{value:"WhitelistAdded",id:"whitelistadded",children:[]},{value:"WhitelistRemoved",id:"whitelistremoved",children:[]}]}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"__virtualtoken_init"},"__VirtualToken_init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function __VirtualToken_init(\n  ) internal\n")),(0,o.kt)("h3",{id:"mintmaximumto"},"mintMaximumTo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function mintMaximumTo(\n  ) external\n")),(0,o.kt)("h3",{id:"addwhitelist"},"addWhitelist"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addWhitelist(\n  ) external\n")),(0,o.kt)("h3",{id:"removewhitelist"},"removeWhitelist"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeWhitelist(\n  ) external\n")),(0,o.kt)("h3",{id:"isinwhitelist"},"isInWhitelist"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isInWhitelist(\n  ) external returns (bool)\n")),(0,o.kt)("h3",{id:"_beforetokentransfer"},"_beforeTokenTransfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _beforeTokenTransfer(\n  ) internal\n")),(0,o.kt)("p",null,"Hook that is called before any transfer of tokens. This includes\nminting and burning.\nCalling conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"when ",(0,o.kt)("inlineCode",{parentName:"li"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," are both non-zero, ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),"'s tokens\nwill be to transferred to ",(0,o.kt)("inlineCode",{parentName:"li"},"to"),"."),(0,o.kt)("li",{parentName:"ul"},"when ",(0,o.kt)("inlineCode",{parentName:"li"},"from")," is zero, ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," tokens will be minted for ",(0,o.kt)("inlineCode",{parentName:"li"},"to"),"."),(0,o.kt)("li",{parentName:"ul"},"when ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," is zero, ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),"'s tokens will be burned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," are never both zero.\nTo learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks","[Using Hooks]",".")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"whitelistadded"},"WhitelistAdded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  event WhitelistAdded(\n  )\n")),(0,o.kt)("h3",{id:"whitelistremoved"},"WhitelistRemoved"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  event WhitelistRemoved(\n  )\n")))}m.isMDXComponent=!0}}]);