





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = 705
base_0[5] = {"893":"N","":8.404230556325729e+307}
base_0[9] = {"6.458824692350761e+307":25,"1.5871414587560982e+308":"","5.567868593008714e+307":7.015785779997418e+307,"7.994445146835088e+307":"km","z":"","":3.373470740294409e+307}
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"D":"1","1.3736494526256915e+308":"","(":157,"#FAl":-1,"":""}
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
base_2[6] = {"893":9.00812050191218e+307,"uo":3.4940298695075377e+307,"8.690102834923551e+307":1.3893267740547613e+308,"":"Q"}
argument4[122] = {"655":1.382486429600844e+308,"1.3212068666098698e+308":"(i95","S+p":"Apo","9.051335159139241e+307":"K","5.094771876806349e+307":157,"G":-1}
return a/b-c
};
var argument4 = "j";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 157
return a-b+c
};
var argument7 = null;
var base_0 = [0,969,59]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,969,59]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,969,59]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,969,59]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test139.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)