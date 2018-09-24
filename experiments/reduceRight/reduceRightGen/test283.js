





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = null
argument3['T'] = "(,"
argument2[7] = null
return a+b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['T'] = false
argument2[0] = null
return a*b*c-d
};
var argument3 = 1.7976931348623157e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"59":1.5405408558197136e+308,"783":8.676190052981117e+307,"&yp":"","7.706784390071348e+307":"","2$xE":1.557198928573768e+307,"5.619346055686223e+307":595,"":9.434223599986137e+307,"*R@":1.58555749994973e+307,"1.251098221756677e+308":""}
return a+b-c+d
};
var argument5 = {"595":"","":""};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b-c/d
};
var argument7 = "";
var argument8 = {"126":213,"607":"","823":"&5","FV5":157,"":1.6153697061511318e+307,"|":"","5e-324":6.312042964821367e+306};
var base_0 = ["_1","2G","Y","}","8&","uA","O!,L",";4p"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_1","2G","Y","}","8&","uA","O!,L",";4p"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_1","2G","Y","}","8&","uA","O!,L",";4p"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_1","2G","Y","}","8&","uA","O!,L",";4p"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test283.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)