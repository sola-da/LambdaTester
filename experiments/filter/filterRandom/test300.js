





var callbackArguments = [];
var argument1 = -1;
var argument2 = [843,126,705,242,122,618,607,213,403,618];
var argument3 = {"126":3.8456762703139753e+307};
var base_0 = ["v-= H","[8k"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test300.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)