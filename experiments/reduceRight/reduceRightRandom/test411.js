





var callbackArguments = [];
var argument1 = [705,595,714,893,49,843,122,893];
var argument2 = {"100":"5","823":1.1687191025101798e+308,"1.4651499821108604e+308":"m","":1.7105460582225284e+308,"sFA":607,"6.149575494850336e+307":"J","3.0655649643805775e+307":157,"2.1262996664607829e+307":"!"};
var base_0 = ["E","Z","^","Y","|j="]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test411.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)