





var callbackArguments = [];
var argument1 = {"6":"","100":"`r8[B","1.2774052620819762e+308":"","":783,"Xh":"U","3.640591554624933e+307":1.4493068194254503e+308,"M":"05n6","g+":460,"9.392511797395458e+307":1.5825384517169325e+307};
var argument2 = 403;
var base_0 = ["ky","T","B@Y","M$m","B"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test278.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)