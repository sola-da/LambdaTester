





var callbackArguments = [];
var argument1 = {"460":"","K#b":"","5e-324":25,"5{Nc:":"","1.6345774758152422e+308":49,"1.1495203923355758e+308":7.250890554617323e+307};
var argument2 = true;
var argument3 = 969;
var base_0 = [705,0,843]
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
require("fs").writeFileSync("./experiments/every/everyRandom/test651.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)