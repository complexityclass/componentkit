(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{47:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return r}),n.d(t,"rightToc",function(){return l}),n.d(t,"default",function(){return p});n(0);var a=n(133);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r={title:"General Principles"},l=[],s={rightToc:l},u="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(a.b)(u,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Just like building UIs with ComponentKit might require a slightly different way of thinking compared to traditional iOS UI frameworks, the same principle applies to animations."),Object(a.b)("p",null,'Generally, all changes to your UI should be done via state or props updates instead of mutating view attributes directly. Similarly, animations in ComponentKit are only triggered by regenerating a component tree, so there has to be a state or props update. You should avoid reaching out to a component view and applying animations to it or its layer directly because component views are managed by CK infra and your changes are not guaranteed to be preserved. In addition to that, you risk introducing inconsistencies between animation values and the current values of the animated properties which will result in "jumps" and other visual artefacts.'),Object(a.b)("p",null,"In the majority of the cases, you should be doing one of three things below:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"animate from a given value to the value specified in the view configuration")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"animate from the value specified in the view configuration to a given value")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"animate between values specified in the view configurations of a different generations of a given component"))),Object(a.b)("p",null,"On the code level this translates to you specifying either:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"the initial value for an animated property (often referred to as ",Object(a.b)("inlineCode",{parentName:"p"},"from")," value)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"the final value for an animated property (",Object(a.b)("inlineCode",{parentName:"p"},"to")," value)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"no values at all, since they will be inferred from the view configuration"))),Object(a.b)("p",null,"Specifying both initial and final values is usually a sign that you're doing more work than necessary or even introducing a bug."),Object(a.b)("p",null,'Another way to think about this is that only view configuration is permanent and animation values are temporary. A common mistake is to make animation values "permanent" by using a ',Object(a.b)("inlineCode",{parentName:"p"},"forwards")," fill mode and setting ",Object(a.b)("inlineCode",{parentName:"p"},"removedOnCompletion")," property to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),", which causes animated values to override the values in the model layer. In addition to writing more code, this also increases the load on the render server process by keeping these animations around thus affecting performance. In the vast majority of the cases this wouldn't be an issue if you make sure to have the right values in the view configuration."),Object(a.b)("p",null,"The rest of this document will demonstrate how to apply these principles when writing animation code for your components."))}p.isMDXComponent=!0}}]);