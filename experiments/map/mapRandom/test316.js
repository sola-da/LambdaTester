





var callbackArguments = [];
var argument1 = null;
var argument2 = 1.1943930475024418e+308;
var base_0 = [595,242,126,59,893,893,403,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
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
require("fs").writeFileSync("./experiments/map/mapRandom/test316.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)