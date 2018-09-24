





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = "R"
argument3[0] = {"82":1.5427896160812724e+308,"":9.684921804398151e+305,"E":3.629013480126544e+307,"!H":"$M0P","2.179414319803972e+305":"","1.26901837120304e+308":8.97066622391262e+307}
base_0[0][2] = 1.00552785239229e+308
return a-b*c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = 100
return a*b/c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[122] = 1.7976931348623157e+308
base_2[1][2] = ["h","8","17",">"]
return a+b*c
};
var argument7 = -1;
var argument8 = {"7":"","82":100,"":"","tJ":9.10587392177662e+307,"1.434154446541379e+308":823,"1.6753011194421518e+308":705,"h":705};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = {"126":1.2006669794532814e+308,"":0,"3.7615456607140936e+307":49,"8.709728339216535e+307":""}
argument10 = false
return a/b+c
};
var base_0 = [403]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test488.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)