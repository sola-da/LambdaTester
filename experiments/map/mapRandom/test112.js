





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = {"0":"","595":1.2100434981717361e+308,"618":"","":"","7.739119568926876e+307":1.1966862770489324e+308,"1.1806306536515448e+308":100,"1.1277822633002616e+308":0,"1.400334082336582e+308":""};
var base_0 = [618,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/map/mapRandom/test112.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)