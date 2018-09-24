





var callbackArguments = [];
var argument1 = {"126":"","893":242,"{+=":25,"":"","5.449284077523721e+307":"","p":893,"7.415767994958386e+307":"vK","m2af3":1.0125336161148239e+307,"%HL":"|"};
var argument2 = null;
var base_0 = ["L2","J","y"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test433.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)