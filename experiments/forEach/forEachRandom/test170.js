





var callbackArguments = [];
var argument1 = null;
var argument2 = {"783":4.666656114562914e+307,"823":242,"893":"","969":100,"l":100,"1.3066414654146705e+307":"*1l","3.924069279993133e+306":"","*kxH1DZ":1.6631238688668988e+308,"":893,"8.337026880318526e+307":""};
var base_0 = [823,5e-324,823]
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test170.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)