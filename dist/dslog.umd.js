!function(o,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((o="undefined"!=typeof globalThis?globalThis:o||self).dslog={})}(this,(function(o){"use strict";var n=function(){return(new Date).toLocaleTimeString()},c=function(){return"true"===localStorage.getItem("dslog")},e={info:function(o){c()&&console.log("%c [ ".concat(n()," ] [ INFO ] ").concat(o),"color: #56b97f")},method:function(o){c()&&console.log("%c [ ".concat(n()," ] [ METH ] ").concat(o," "),"color: #c0a4d8")},obj:function(o){if(c()){var e=JSON.parse(JSON.stringify(o));console.log("%c [ ".concat(n()," ] [ OBJE ] "),"color: yellow",e)}},error:function(o){c()&&console.log("%c [ ".concat(n()," ] [ ERRO ] ").concat(o," "),"color: red")}};o.dslog=e}));
