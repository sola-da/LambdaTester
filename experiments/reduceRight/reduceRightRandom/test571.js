





var callbackArguments = [];
var argument1 = "";
var argument2 = {"82":1.3681216781418606e+308,"213":714,"":"","E":1.6744996585384994e+308,"6D!":595,"1.1479443847945053e+308":213};
var argument3 = "";
var base_0 = ["kTA",714,"d","R",242,"c",82,"ar9eb","$ ","AUd"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test571.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)