var o=function(){return(new Date).toLocaleTimeString()},c=function(){return"true"===localStorage.getItem("dslog")},n={info:function(n){c()&&console.log("%c [ ".concat(o()," ] [ INFO ] ").concat(n),"color: #56b97f")},method:function(n){c()&&console.log("%c [ ".concat(o()," ] [ METH ] ").concat(n," "),"color: #c0a4d8")},obj:function(n){if(c()){var t=JSON.parse(JSON.stringify(n));console.log("%c [ ".concat(o()," ] [ OBJE ] "),"color: yellow",t)}},error:function(n){c()&&console.log("%c [ ".concat(o()," ] [ ERRO ] ").concat(n," "),"color: red")}};export{n as dslog};
