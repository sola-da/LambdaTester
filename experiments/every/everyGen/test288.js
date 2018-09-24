





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = 705
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"0":126,"783":8.676190052981117e+307,"$xE":1.557198928573768e+307,"5.619346055686223e+307":595,"":9.434223599986137e+307,"*R@":1.58555749994973e+307,"1.251098221756677e+308":""}
argument3[1.3599216339661573e+308] = {"595":"","":""}
base_1[0][0] = {"126":213,"213":714,"823":"@","893":49,"hQ":1.0533590143543352e+308,"":1.1735373138376519e+308,"FV5":157,"|":"","5e-324":6.312042964821367e+306,"&^0":969}
return a-b*c
};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.3156198695370476e+307] = ""
return a-b/c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = ["spG!",403,595,100,"e","1","dd4",893]
base_3[9] = false
base_3[3] = true
return a/b*c
};
var argument7 = null;
var argument8 = 82;
var base_0 = [705,5e-324,893,1.7976931348623157e+308,82,893,126,242,82,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,5e-324,893,1.7976931348623157e+308,82,893,126,242,82,49]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,5e-324,893,1.7976931348623157e+308,82,893,126,242,82,49]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,5e-324,893,1.7976931348623157e+308,82,893,126,242,82,49]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test288.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)