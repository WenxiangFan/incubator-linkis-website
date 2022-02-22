"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8293],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||k[d]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var o=2;o<l;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99894:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],s={title:"\u53d1\u5e03\u7248\u672c\u9a8c\u8bc1",sidebar_position:4},c="\u9a8c\u8bc1\u5019\u9009\u7248\u672c",o={unversionedId:"how-to-verify",id:"how-to-verify",title:"\u53d1\u5e03\u7248\u672c\u9a8c\u8bc1",description:"\u8be6\u7ec6\u68c0\u67e5\u5217\u8868\u8bf7\u53c2\u8003\u5b98\u65b9\u7684check list",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-verify.md",sourceDirName:".",slug:"/how-to-verify",permalink:"/zh-CN/community/how-to-verify",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/how-to-verify.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u53d1\u5e03\u7248\u672c\u9a8c\u8bc1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",permalink:"/zh-CN/community/how-to-write-unit-test-code"},next:{title:"\u5b89\u5168",permalink:"/zh-CN/community/security"}},p=[{value:"1. \u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883",id:"1-\u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883",children:[],level:2},{value:"2. \u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4",id:"2-\u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4",children:[{value:"2.1 \u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574",id:"21-\u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574",children:[],level:3},{value:"2.2 \u68c0\u67e5gpg\u7b7e\u540d",id:"22-\u68c0\u67e5gpg\u7b7e\u540d",children:[{value:"2.2.1 \u5bfc\u5165\u516c\u94a5",id:"221-\u5bfc\u5165\u516c\u94a5",children:[],level:4},{value:"2.2.2 \u4fe1\u4efb\u516c\u94a5",id:"222-\u4fe1\u4efb\u516c\u94a5",children:[],level:4},{value:"2.2.3 \u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u7b7e\u540d",id:"223-\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u7b7e\u540d",children:[],level:4}],level:3},{value:"2.3 \u68c0\u67e5sha512\u54c8\u5e0c",id:"23-\u68c0\u67e5sha512\u54c8\u5e0c",children:[],level:3},{value:"2.4. \u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9",id:"24-\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9",children:[{value:"2.4.1 ASF\u8bb8\u53ef\u8bc1RAT\u68c0\u67e5",id:"241-asf\u8bb8\u53ef\u8bc1rat\u68c0\u67e5",children:[],level:4},{value:"2.4.2 \u6e90\u7801\u7f16\u8bd1\u9a8c\u8bc1",id:"242-\u6e90\u7801\u7f16\u8bd1\u9a8c\u8bc1",children:[],level:4},{value:"2.4.3 \u76f8\u5173\u5408\u89c4\u9879\u68c0\u67e5",id:"243-\u76f8\u5173\u5408\u89c4\u9879\u68c0\u67e5",children:[],level:4}],level:3},{value:"2.5 \u68c0\u67e5\u4e8c\u8fdb\u5236\u5305",id:"25-\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305",children:[],level:3}],level:2},{value:"3.\u90ae\u4ef6\u56de\u590d",id:"3\u90ae\u4ef6\u56de\u590d",children:[],level:2}],k={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9a8c\u8bc1\u5019\u9009\u7248\u672c"},"\u9a8c\u8bc1\u5019\u9009\u7248\u672c"),(0,l.kt)("p",null,"\u8be6\u7ec6\u68c0\u67e5\u5217\u8868\u8bf7\u53c2\u8003\u5b98\u65b9\u7684",(0,l.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"check list")),(0,l.kt)("h2",{id:"1-\u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883"},"1. \u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u7f51\u7edc\u8f83\u5dee\uff0c\u4e0b\u8f7d\u53ef\u80fd\u4f1a\u6bd4\u8f83\u8017\u65f6\u3002\u6b63\u5e38\u5b8c\u6210\u4e0b\u8f7d\u5927\u7ea620\u5206\u949f\u5de6\u53f3\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\u5982\u679c\u672c\u5730\u6709svn\uff0c\u53ef\u4ee5clone\u5230\u672c\u5730 \nsvn co https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/\n#\u6216\u5219 \u76f4\u63a5\u4e0b\u8f7d\u7269\u6599\u6587\u4ef6\nwget https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/xxx.xxx\n\n")),(0,l.kt)("h2",{id:"2-\u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4"},"2. \u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f00\u59cb\u9a8c\u8bc1\u73af\u8282\uff0c\u9a8c\u8bc1\u5305\u542b\u4f46\u4e0d\u5c40\u9650\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u548c\u5f62\u5f0f")),(0,l.kt)("h3",{id:"21-\u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574"},"2.1 \u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0a\u4f20\u5230dist\u7684\u5305\u5fc5\u987b\u5305\u542b\u6e90\u7801\u5305\uff0c\u4e8c\u8fdb\u5236\u5305\u53ef\u9009")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305"),(0,l.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305\u7684\u7b7e\u540d"),(0,l.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305\u7684sha512"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0a\u4f20\u4e86\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u68c0\u67e5(2)-(4)\u6240\u5217\u7684\u5185\u5bb9")),(0,l.kt)("h3",{id:"22-\u68c0\u67e5gpg\u7b7e\u540d"},"2.2 \u68c0\u67e5gpg\u7b7e\u540d"),(0,l.kt)("p",null,"\u9996\u5148\u5bfc\u5165\u53d1\u5e03\u4eba\u516c\u94a5\u3002\u4ecesvn\u4ed3\u5e93\u5bfc\u5165KEYS\u5230\u672c\u5730\u73af\u5883\u3002\uff08\u53d1\u5e03\u7248\u672c\u7684\u4eba\u4e0d\u9700\u8981\u518d\u5bfc\u5165\uff0c\u5e2e\u52a9\u505a\u9a8c\u8bc1\u7684\u4eba\u9700\u8981\u5bfc\u5165\uff0c\u7528\u6237\u540d\u586b\u53d1\u7248\u4eba\u7684\u5373\u53ef\uff09"),(0,l.kt)("h4",{id:"221-\u5bfc\u5165\u516c\u94a5"},"2.2.1 \u5bfc\u5165\u516c\u94a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl https://dist.apache.org/repos/dist/dev/incubator/linkis/KEYS > KEYS # \u4e0b\u8f7dKEYS\n$ gpg --import KEYS # \u5bfc\u5165KEYS\u5230\u672c\u5730\n")),(0,l.kt)("h4",{id:"222-\u4fe1\u4efb\u516c\u94a5"},"2.2.2 \u4fe1\u4efb\u516c\u94a5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4fe1\u4efb\u6b64\u6b21\u7248\u672c\u6240\u4f7f\u7528\u7684KEY")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --edit-key xxxxxxxxxx #\u6b64\u6b21\u7248\u672c\u6240\u4f7f\u7528\u7684KEY\u7528\u6237\ngpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nSecret key is available.\ngpg> trust #\u4fe1\u4efb\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5 #\u9009\u62e95\nDo you really want to set this key to ultimate trust? (y/N) y #\u9009\u62e9y\n                                                            \ngpg> \n     \n")),(0,l.kt)("h4",{id:"223-\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u7b7e\u540d"},"2.2.3 \u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u7b7e\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n  #\u6216\u8005\n$ gpg --verify apache-linkis-${release_version}-src.tar.gz.asc apache-linkis-${release_version}-src.tar.gz\n  # \u5982\u679c\u4e0a\u4f20\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u9700\u8981\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u7684\u7b7e\u540d\u662f\u5426\u6b63\u786e\n$ gpg --verify apache-linkis-${release_version}-bin.tar.gz.asc apache-linkis-${release_version}-bin.tar.gz\n")),(0,l.kt)("p",null,"\u68c0\u67e5\u7ed3\u679c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u51fa\u73b0\u7c7b\u4f3c\u4ee5\u4e0b\u5185\u5bb9\u5219\u8bf4\u660e\u7b7e\u540d\u6b63\u786e\uff0c\u5173\u952e\u5b57\uff1a",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Good signature")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'apache-linkis-xxx-incubating-src.tar.gz\ngpg: Signature made XXXX\ngpg:                using RSA key XXXXX\ngpg: Good signature from "xxx @apache.org>"\n')),(0,l.kt)("h3",{id:"23-\u68c0\u67e5sha512\u54c8\u5e0c"},"2.3 \u68c0\u67e5sha512\u54c8\u5e0c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u5730\u8ba1\u7b97sha512\u54c8\u5e0c\u540e\uff0c\u9a8c\u8bc1\u662f\u5426\u4e0edist\u4e0a\u7684\u4e00\u81f4\uff0c\u5982\u679c\u4e0a\u4f20\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u9700\u8981\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u7684sha512\u54c8\u5e0c")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Mac OS/Linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Windows")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ certUtil -hashfile apache-linkis-${release_version}-incubating-xxx.tar.gz SHA512\n#\u5e76\u5c06\u8f93\u51fa\u5185\u5bb9\u4e0e apache-linkis-${release_version}-incubating-xxx.tar.gz.sha512\u6587\u4ef6\u5185\u5bb9\u4f5c\u5bf9\u6bd4\n")),(0,l.kt)("h3",{id:"24-\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9"},"2.4. \u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9"),(0,l.kt)("p",null,"\u89e3\u538b\u7f29",(0,l.kt)("inlineCode",{parentName:"p"},"apache-linkis-${release_version}-incubating-src.tar.gz")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$ tar -xvf apache-linkis-${release_version}-incubating-src.tar.gz\n\n$ cd apache-linkis-${release_version}-incubating-src\n")),(0,l.kt)("h4",{id:"241-asf\u8bb8\u53ef\u8bc1rat\u68c0\u67e5"},"2.4.1 ASF\u8bb8\u53ef\u8bc1RAT\u68c0\u67e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\u6b63\u5e385\u5206\u949f\u5185\u53ef\u4ee5\u6267\u884c\u5b8c\n$ mvn -N install \n$ mvn apache-rat:check\n\n#\u65e0\u5f02\u5e38\u540e \u68c0\u67e5\u6240\u6709\u7684rat\u6587\u4ef6 \n$ find ./ -name rat.txt -print0 | xargs -0 -I file cat file > merged-rat.txt\n")),(0,l.kt)("p",null,"rat check\u7684\u767d\u540d\u5355\u6587\u4ef6\u914d\u7f6e\u5728\u5916\u5c42pom.xml\u4e2d\u7684apache-rat-plugin\u63d2\u4ef6\u914d\u7f6e\u4e2d\u3002\n\u68c0\u67e5merged-rat.txt\u4e2d\u6240\u6709license\u4fe1\u606f\uff0c\u6ce8\u610fBinaries \u548cArchives\u6587\u4ef6\u662f\u5426\u4e3a0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Notes: 0\nBinaries: 0\nArchives: 0\n0 Unknown Licenses\n")),(0,l.kt)("font",{color:"red"},"\u5982\u679c\u4e0d\u4e3a0\uff0c\u9700\u8981\u786e\u8ba4\u6e90\u7801\u4e2d\u662f\u5426\u6709\u5bf9\u8be5\u4e8c\u8fdb\u5236\u6216\u5219\u538b\u7f29\u6587\u4ef6\u7684license\u8fdb\u884c\u8bf4\u660e\uff0c\u53ef\u4ee5\u53c2\u8003\u6e90\u7801\u4e2d\u5f15\u7528\u7684`linkis-engineconn-plugins/engineconn-plugins/python/src/main/py4j/py4j-0.10.7-src.zip`"),(0,l.kt)("h4",{id:"242-\u6e90\u7801\u7f16\u8bd1\u9a8c\u8bc1"},"2.4.2 \u6e90\u7801\u7f16\u8bd1\u9a8c\u8bc1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn -N install  \n#\u5982\u679c\u7f16\u8bd1\u6240\u5728\u7684\u673a\u5668\u6027\u80fd\u6bd4\u8f83\u5dee\uff0c\u5219\u6b64\u8fc7\u7a0b\u4f1a\u6bd4\u8f83\u8017\u65f6\uff0c\u4e00\u822c\u8017\u65f630min\u5de6\u53f3\n$ mvn  clean install -Dmaven.javadoc.skip=true\n")),(0,l.kt)("h4",{id:"243-\u76f8\u5173\u5408\u89c4\u9879\u68c0\u67e5"},"2.4.3 \u76f8\u5173\u5408\u89c4\u9879\u68c0\u67e5"),(0,l.kt)("p",null,"\u8fdb\u884c\u5982\u4e0b\u68c0\u67e5:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u68c0\u67e5\u6e90\u7801\u5305\u662f\u5426\u5305\u542b\u7531\u4e8e\u5305\u542b\u4e0d\u5fc5\u8981\u6587\u4ef6\uff0c\u81f4\u4f7ftar\u5305\u8fc7\u4e8e\u5e9e\u5927"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6587\u4ef6\u5939\u5305\u542b\u5355\u8bcd",(0,l.kt)("inlineCode",{parentName:"li"},"incubating")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"DISCLAIMER"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP"),"\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\u4e2d\u7684\u5e74\u4efd\u6b63\u786e"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u53ea\u5b58\u5728\u6587\u672c\u6587\u4ef6\uff0c\u4e0d\u5b58\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6240\u6709\u6587\u4ef6\u7684\u5f00\u5934\u90fd\u6709ASF\u8bb8\u53ef\u8bc1"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u80fd\u591f\u6b63\u786e\u7f16\u8bd1"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u68c0\u67e5\u662f\u5426\u6709\u591a\u4f59\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u4f8b\u5982\u7a7a\u6587\u4ef6\u5939\u7b49"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,l.kt)("h3",{id:"25-\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305"},"2.5 \u68c0\u67e5\u4e8c\u8fdb\u5236\u5305"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4e0a\u4f20\u4e86\u9879\u76ee\u7684\u4e8c\u8fdb\u5236\u5305/web\u7684\u7f16\u8bd1\u5305")),(0,l.kt)("p",null,"\u89e3\u538b\u7f29",(0,l.kt)("inlineCode",{parentName:"p"},"apache-linkis-${release_version}-incubating-bin.tar.gz"),"\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ mkdir apache-linkis-${release_version}-incubating-bin\n$ tar -xvf  apache-linkis-${release_version}-incubating-bin.tar.gz -C  apache-linkis-${release_version}-incubating-bin\n$ cd apache-linkis-${release_version}-incubating-bin\n")),(0,l.kt)("p",null,"\u8fdb\u884c\u5982\u4e0b\u68c0\u67e5\uff1a"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6587\u4ef6\u5939\u5305\u542b\u5355\u8bcd",(0,l.kt)("inlineCode",{parentName:"li"},"incubating")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"DISCLAIMER"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP"),"\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\u4e2d\u7684\u5e74\u4efd\u6b63\u786e"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6240\u6709\u6587\u672c\u6587\u4ef6\u5f00\u5934\u90fd\u6709ASF\u8bb8\u53ef\u8bc1"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u68c0\u67e5\u7b2c\u4e09\u65b9\u4f9d\u8d56\u8bb8\u53ef\u8bc1\uff1a"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u8bb8\u53ef\u8bc1\u517c\u5bb9"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6240\u6709\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u8bb8\u53ef\u8bc1\u90fd\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE"),"\u6587\u4ef6\u4e2d\u58f0\u540d"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5982\u679c\u4f9d\u8d56\u7684\u662fApache\u8bb8\u53ef\u8bc1\u5e76\u4e14\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\uff0c\u90a3\u4e48\u8fd9\u4e9b",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\u4e5f\u9700\u8981\u52a0\u5165\u5230\u7248\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE"),"\u6587\u4ef6\u4e2d"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,l.kt)("p",null,"\u8be6\u7ec6\u7684\u68c0\u67e5\u9879\uff0c\u53ef\u4ee5\u53c2\u8003\u6b64\u6587\u7ae0\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF\u7b2c\u4e09\u65b9\u8bb8\u53ef\u8bc1\u7b56")),(0,l.kt)("h2",{id:"3\u90ae\u4ef6\u56de\u590d"},"3.\u90ae\u4ef6\u56de\u590d"),(0,l.kt)("p",null,"\u5982\u679c\u53d1\u8d77\u4e86\u53d1\u5e03\u6295\u7968\uff0c\u9a8c\u8bc1\u540e\uff0c\u53ef\u4ee5\u53c2\u7167\u6b64\u56de\u590d\u793a\u4f8b\u8fdb\u884c\u90ae\u4ef6\u56de\u590d"),(0,l.kt)("font",{color:"red"},"\u56de\u590d\u7684\u90ae\u4ef6\u4e00\u5b9a\u8981\u5e26\u4e0a\u81ea\u5df1\u68c0\u67e5\u4e86\u90a3\u4e9b\u9879\u4fe1\u606f\uff0c\u4ec5\u4ec5\u56de\u590d`+1 approve`\uff0c\u662f\u65e0\u6548\u7684\u3002",(0,l.kt)("p",null,"PPMC/IPMC\u6210\u5458\uff0c\u6295\u7968\u65f6\u8bf7\u5e26\u4e0a binding\u540e\u7f00\uff0c\u8868\u793a\u5177\u6709\u7ea6\u675f\u6027\u6295\u7968\uff0c\u65b9\u4fbf\u7edf\u8ba1\u6295\u7968\u7ed3\u679c")),(0,l.kt)("p",null,"\u975ePPMC/IPMC\u6210\u5458"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"+1 (non-binding)\nI  checked:\n    1. All download links are valid\n    2. Checksum and signature are OK\n    3. LICENSE and NOTICE are exist\n    4. Build successfully on macOS(Big Sur) \n    5. ....\n")),(0,l.kt)("p",null,"PPMC/IPMC\u6210\u5458"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"+1 (binding)\nI  checked:\n    1. All download links are valid\n    2. Checksum and signature are OK\n    3. LICENSE and NOTICE are exist\n    4. Build successfully on macOS(Big Sur) \n    5. ....\n")))}u.isMDXComponent=!0}}]);