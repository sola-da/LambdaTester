





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = null
base_0[1] = {"6X":"+"}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = {"9":25,"607":1.2089042170495455e+308,"":"M","7.076534234616376e+307":6.125681294283493e+307,"(h":""}
argument3[4] = ["I1n,>C6","l","U)","1","&","9?","VWaf3","R<"]
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = ""
return a*b/c
};
var argument4 = "nYS=";
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = null
base_3[0][0] = {"49":"","618":"","":1.3140441804100565e+308,"s`":"","1.1456891210750304e+308":"","U":126,"S":""}
base_3[9] = 59
return a*b*c
};
var base_0 = [595]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test199.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)