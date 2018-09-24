





var callbackArguments = [];
var argument1 = {"25":-100,"242":"","893":"","":"","1.7795013719062384e+307":6.783094260552965e+306,"e":969,"5L":49,"8.553955652397617e+307":"","1.3042634391925187e+308":""};
var argument2 = "E-|(g,";
var base_0 = [893,49,157,893,595,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/some/someRandom/test663.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)