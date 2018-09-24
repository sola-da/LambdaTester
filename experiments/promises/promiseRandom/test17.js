/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [213,"37tur",82,"OV","z","9","X7P"];
var argument2 = null;
var argument3 = {"126":1.514153753913608e+308,"157":"","607":"","893":1.4536617123292348e+308,"4.2973679676433444e+307":"GI","":"","f":1.4491847584408095e+307,"9.02032713536931e+307":1.4834103317200468e+308,"6.636041156642326e+307":"G"};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test17.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)