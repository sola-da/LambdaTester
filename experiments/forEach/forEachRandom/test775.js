





var callbackArguments = [];
var argument1 = {"49":-1,"783":"8$","":5.358030077084155e+307,"1.4526693219600024e+308":714,"l_":""};
var argument2 = {"25":"","8.48539943008998e+307":"q4#Ns","":25,"7.587978857339504e+307":"bSf","C":"ss","3.7829128828161406e+307":"","U8^-":"T","1.0621979833367949e+308":3.3215391156210527e+307,"5.524571520506323e+307":403};
var argument3 = {"213":"","9.655439531837537e+307":"","1.4558911257947117e+308":1.4400994143766396e+308,"C2":627,"":1.4451062225792429e+308,",":"^VrZ"};
var base_0 = [5e-324,595]
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test775.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)