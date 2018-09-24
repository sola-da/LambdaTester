





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = ""
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"0":7.24130605438926e+306,"82":627,"":"","a":1.3679215435546338e+307,"LZ<QJ":"(nyW","1.207395645447451e+308":1.8756677425709575e+307,"v":2.970002635667032e+307,"V":4.450885929850367e+307,"1.7976931348623157e+308":783,"7.355295867698028e+307":""}
argument3[5] = null
return a+b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = {"714":"","893":7.063592940080099e+306,"":2.0193924980391694e+307,"y":3.349129975955231e+307,"5.179715405294594e+307":"","7.563870071961434e+307":122,"?":"","1.1853401553743871e+308":""}
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][4] = [823,655,5e-324,49,-100,-1,969,595,59,213]
return a/b*c
};
var argument5 = r_2;
var base_0 = [213,-100,714,82,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,-100,714,82,969]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,-100,714,82,969]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,-100,714,82,969]
var r_3= undefined
try {
r_3 = base_3.every(argument4,argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test423.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)