





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"59":")","":1.7976931348623157e+308,"b3":"","1.7976931348623157e+308":"","[":655,"J":"?f","&":"","P":5e-324}
argument2[5] = 126
argument2[5] = {"25":3.186899768610034e+307,"157":607,"":1.4336010327440885e+308,"5e-324":"$","%&":1.2505735981017651e+308,"MD":""}
return a+b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = {"0":100,"627":2.498890407934741e+307,"705":"","8.414210638059862e+307":5.230086523914971e+306,"":1.7492425437069469e+308,"5e-324":4.079253923629588e+307}
argument4 = {"82":714,"122":0,"843":"","1.3990548184007051e+308":"8","H":82,"W?srKu":1.1005209314192564e+308,"1.066742122462946e+308":"&^","+sq":5.83439236006415e+307}
base_1[1][2] = [893,"(","9eZ",618]
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = [122,0]
argument4[2] = true
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = 823
base_3[1][5] = ["T","I:`#lj: ","M","`","k_DY","r","BV9"]
return a+b*c
};
var argument6 = false;
var base_0 = ["r1","(6","TodF",0,25,655,"o"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r1","(6","TodF",0,25,655,"o"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r1","(6","TodF",0,25,655,"o"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r1","(6","TodF",0,25,655,"o"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test911.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)