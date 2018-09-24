





var callbackArguments = [];
var argument1 = null;
var argument2 = {"1.086924787020611e+308":2.2733507192232556e+307,"":1.0562624377569481e+308,"4.65699492734287e+307":7.794512881774982e+307,"T)":1.4382342091580673e+308};
var argument3 = null;
var base_0 = [403,969,157,714,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/some/someRandom/test836.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)