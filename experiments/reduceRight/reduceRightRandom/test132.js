





var callbackArguments = [];
var argument1 = {"":"","1.583101442337496e+308":0,"<HmNT_:Tu;":"","1.580355619420428e+308":"[`","&MP!":2.921444913583056e+307};
var argument2 = null;
var argument3 = "";
var base_0 = [893,"s",1.7976931348623157e+308,"T",460,126,49]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test132.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)