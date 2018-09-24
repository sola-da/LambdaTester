





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = "Vm"
base_0['length'] = {"82":"","126":"","823":"","Sh":655,"1.548827057841199e+308":"","6.951056591180673e+307":1.2559734900288215e+308,"fDi":100,"@":"9r","":"H","1.623311210516183e+308":403}
base_0[1] = {"403":"","1.3805404905214767e+308":1.3480669080824671e+308}
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = true
return a*b+c
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = {"59":843,"100":"=","843":2.791761390733555e+307,"7.986722979024294e+307":705,"":9.222364220945165e+307}
base_2['length'] = {"1.7465865088335736e+308":"","%":""}
return a*b+c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = false
base_3[6] = 82
argument9 = {"618":"Y","1.356159815721548e+308":"","":5.663514604625947e+307,"1.131746083181326e+307":403}
return a*b-c
};
var base_0 = [783,157,122,122,-1,59,893,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,157,122,122,-1,59,893,893]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,157,122,122,-1,59,893,893]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,157,122,122,-1,59,893,893]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/some/someGen/test14.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)