





var callbackArguments = [];
var argument1 = false;
var argument2 = {"607":"A","714":25,"8.468332889840855e+307":1.6366946720737281e+308,"1.7976931348623157e+308":1.2090573286391286e+308,"###":""};
var argument3 = "";
var base_0 = ["q(;ES","<k4",">y"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test513.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)