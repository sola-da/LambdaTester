





var callbackArguments = [];
var argument1 = {"49":"","705":"",")":"Ng","":"2","1.7435227663345428e+308":"","UT":627,"z":"","&":"+M","1.5827800558100664e+308":9.746021791196116e+307};
var argument2 = "`PIYH";
var base_0 = ["tHel<z","|","-","W","ll","!","a","+","u"]
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test838.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)