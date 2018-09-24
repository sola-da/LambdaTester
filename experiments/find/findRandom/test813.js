





var callbackArguments = [];
var argument1 = 1.2514999785740526e+308;
var argument2 = 1.6705498558517827e+308;
var argument3 = {"49":"#,",",":126};
var base_0 = ["?","gRn","l@:","o","G","0","fhx`n?","M=+e{m",")q;"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/find/findRandom/test813.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)