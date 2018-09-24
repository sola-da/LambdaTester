





var callbackArguments = [];
var argument1 = {"1":"9","595":"","H":1.6673389497277373e+308,"1.5887132598818247e+308":783,"1.1865901479716535e+308":1.258109991298427e+308};
var argument2 = {"7.130653261465144e+307":1.6760410302591561e+308};
var base_0 = [242,"G}(F","4A!9",100,"h6f"]
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
require("fs").writeFileSync("./experiments/map/mapRandom/test460.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)