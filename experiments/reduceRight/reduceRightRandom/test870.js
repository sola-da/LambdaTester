





var callbackArguments = [];
var argument1 = null;
var argument2 = [705,843,1.7976931348623157e+308,403];
var argument3 = {"705":714,"":"T","G":1.8120180085002136e+307,"1.4506877547765539e+308":"Q{","7.361484079423645e+307":403,"2.208461208739234e+307":""};
var base_0 = [714,655,122,595,126,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test870.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)