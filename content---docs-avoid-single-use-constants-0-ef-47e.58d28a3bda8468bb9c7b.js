(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{57:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",function(){return c}),n.d(e,"rightToc",function(){return i}),n.d(e,"default",function(){return p});n(0);var o=n(125);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c={title:"Avoid Single Use Constants"},i=[],s={rightToc:i},l="wrapper";function p(t){var e=t.components,n=a(t,["components"]);return Object(o.b)(l,r({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's common for iOS code to use constants for layout metrics:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"static const CGFloat kLeftMargin = 10.0;\nstatic const CGFloat kTopMargin = 10.0;\nstatic const CGFloat kRightMargin = 10.0;\nstatic const CGFloat kSpacingBetweenLines = 5.0;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Only use constants if they are actually used in multiple places.")),Object(o.b)("p",null,"Since in ComponentKit there is no duplication between ",Object(o.b)("inlineCode",{parentName:"p"},"sizeThatFits:")," and ",Object(o.b)("inlineCode",{parentName:"p"},"layoutSubviews"),", you should rarely need to use constants for metrics. This is much more readable:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec"}),"[CKInsetComponent\n newWithInsets:{.left = 10, .top = 10, .right = 10}\n component:\n [CKFlexboxComponent\n  newWithStyle:{.spacing = 5}\n  ...\n")))}p.isMDXComponent=!0}}]);