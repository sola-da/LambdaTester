





var callbackArguments = [];
var argument1 = {"9":714,"126":"d","595":1.7851690667848995e+308,"969":705,"{":3.2768122113772786e+307,"7.199462034830367e+307":460,"1.3382251933623215e+308":"GA","":1.6876019566301912e+308,"6.26129877936528e+306":""};
var argument2 = {"157":122,"":126,"1.0213037678442021e+308":1.1143805735126662e+306,"5.768198424970195e+307":4.2621328578780377e+307,",U":"","5.363145681208597e+307":607,"R!":1.3012111342136087e+308,"1.2238933131852547e+308":"","3.6321782039462993e+307":"l-","P":""};
var base_0 = [403,823,1.7976931348623157e+308,969,714,783]
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test536.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)