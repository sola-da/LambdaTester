





var callbackArguments = [];
var argument1 = -100;
var argument2 = 595;
var argument3 = {"0":"","1":1.7064459301749735e+308,"705":969,"6.611582510296733e+307":100,"":460,"I":7.0333299288593e+306,"6.522405775467828e+307":""};
var base_0 = ["*q9m","M","f","HKy!p[#X","OR@","T","X|","l","]=G","9H"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test447.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)