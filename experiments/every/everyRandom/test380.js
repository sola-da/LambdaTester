





var callbackArguments = [];
var argument1 = [49,627,"T$)",-1,"JNUa","pwu^+L","X",242,714,"&b)"];
var argument2 = {"4":"J","823":"","":82,"no6 ":893,"Y1q(":"Hin","9.450652036138618e+306":-1,"1.5662733992197379e+308":4.601373609975187e+307,"5e-324":1.1657014338151521e+308};
var argument3 = {"":"|U","C":1.0395458608362796e+308,"1.5715559625577149e+307":"#","e":""};
var base_0 = [126,59,213,595,705]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test380.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)