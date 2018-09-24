





var callbackArguments = [];
var argument1 = "q";
var argument2 = {"49":"","100":"","213":"P+","403":"r","1.3638891375870706e+307":"oib","":"Aom","b":"","-100":""," ":""};
var base_0 = ["f`d#","Een|","Q#*r8","o","K","v","-l","QV"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test388.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)