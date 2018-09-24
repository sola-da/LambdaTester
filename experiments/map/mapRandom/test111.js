





var callbackArguments = [];
var argument1 = {"0":"c","655":"3","1.7628364122128848e+308":403,"":"","-1":8.177909796334979e+307,"o":1.0361458382940152e+308,"+":"","D":",`","4.1776460837663443e+307":""};
var argument2 = true;
var base_0 = [627,-1,783,242,843]
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
require("fs").writeFileSync("./experiments/map/mapRandom/test111.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)