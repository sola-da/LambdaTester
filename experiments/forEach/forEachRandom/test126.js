





var callbackArguments = [];
var argument1 = {"9":5.643217990830949e+306,"627":-1,"783":"","7.931097062399504e+307":"1","1.1585490845685934e+307":403,"":"","2.240288276475877e+307":"S","9.981132669994919e+307":"","Mw":""};
var base_0 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test126.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)