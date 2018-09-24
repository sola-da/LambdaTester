





var callbackArguments = [];
var argument1 = {"59":"!","460":213,"627":"","655":"","":"d1","`":242,"1.1560375467206387e+308":1.0089235770155026e+308,"E":"","1.3862473668242845e+308":82,"-100":100};
var argument2 = null;
var argument3 = {"100":49,"460":"","705":82,"J2tY":655,"7.040431825087699e+307":242,"":"","s":1.7827145331524614e+307,"oe":-1,"1.6447146881803971e+308":"Hc","W":""};
var base_0 = [1.7976931348623157e+308,59,157,157]
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test971.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)