





var callbackArguments = [];
var argument1 = true;
var argument2 = false;
var base_0 = [":",627,618,"%","M[P",59,213,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test230.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)