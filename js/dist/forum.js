module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=9)}([function(t,o){t.exports=flarum.core.compat["common/app"]},function(t,o){t.exports=flarum.core.compat["common/extend"]},function(t,o){t.exports=flarum.core.compat["common/components/TextEditor"]},function(t,o){t.exports=flarum.core.compat["common/Component"]},function(t,o){t.exports=flarum.core.compat["common/components/Button"]},function(t,o){t.exports=flarum.core.compat["common/utils/classList"]},function(t,o){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,o){t.exports=flarum.core.compat["common/utils/styleSelectedText"]},,function(t,o,n){"use strict";n.r(o);var e=n(0),r=n.n(e),c=n(1),u=n(2),a=n.n(u);function i(t,o){return(i=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}var p=n(3),f=n.n(p),l=n(4),s=n.n(l),d=n(5),x=n.n(d),y=n(6),b=n.n(y),v=n(7),g=n.n(v),O=function(t){var o,n;function e(){return t.apply(this,arguments)||this}n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,i(o,n);var c=e.prototype;return c.view=function(){return m(b.a,{text:"5 Star Rating"},m(s.a,{className:x()(["Button","hasIcon","Button--icon","Button--link"]),icon:"fas fa-star",onclick:this.FiveStarRatingButtonClicked.bind(this)},m("span",{className:"Button-label"},"5 Star Rating Label")))},c.FiveStarRatingButtonClicked=function(t){g()(r.a.composer.editor.el,{prefix:"[fivestar rating=",suffix:"]"})},e}(f.a);Object(c.extend)(a.a.prototype,"controlItems",(function(t){t.add("fivestar-rating",O.component(),-10)}))}]);
//# sourceMappingURL=forum.js.map