!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.wScrollFix=t()}(this,function(){"use strict";function e(e){throw new Error(e)}var t=0;return function(o){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o=function(t){if(t)return"string"!=typeof t?t:void((t=document.querySelector(t))||e("the element selector is empty result"));e("please pass the element")}(o),r&&function(e){new MutationObserver(function(o){o.forEach(function(){clearTimeout(t),t=setTimeout(function(){0==e.scrollTop&&(e.scrollTop=1)},100)})}).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}(o),function(e){e.scrollTop=1,e.addEventListener("touchstart",function(t){var o=e.scrollTop;o<=0&&(e.scrollTop=1),o+e.offsetHeight>=e.scrollHeight&&(e.scrollTop=e.scrollHeight-e.offsetHeight-1)},!1),e.addEventListener("scroll",function(e){var t=e.target;0==t.scrollTop?t.scrollTop=1:t.scrollTop+t.offsetHeight==t.scrollHeight&&(t.scrollTop=t.scrollTop-1)}),e.addEventListener("touchmove",function(e){e.currentTarget.offsetHeight<e.currentTarget.scrollHeight&&e.stopPropagation()})}(o)}});