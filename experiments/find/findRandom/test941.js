





var callbackArguments = [];
var argument1 = false;
var argument2 = {"8":1.2129001274577625e+308,"607":6.756907256015983e+307,"618":"Y","9.266058894692924e+307":"","":126,">A":3.092293954282442e+307,"L2":"","_m":"m&","-1":"FO"};
var base_0 = [5e-324,"C","c",403,"Bq;$",0,783,655,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
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
require("fs").writeFileSync("./experiments/find/findRandom/test941.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)