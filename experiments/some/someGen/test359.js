





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = "ej"
base_0[1][8] = [823,823,618]
argument3[2] = false
return a-b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
argument4['f'] = {"25":1.5961953453347191e+308,"49":"","126":126,"460":1.3896628441120452e+308,"843":"fmX$","1.0011042868036438e+308":"_>`Ax","":213,"?v":618,"c0FA[t+d":1.30686579183536e+307,"(k":"&'"}
argument4[157] = 607
return a-b-c
};
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 2.3312162588407116e+307
return a+b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = {"213":"","655":"","":100,"m":"","1.1605652677256542e+308":""}
argument9[9.551053197482062e+307] = {"0":"","618":"","{A1C":"","3.765532527993185e+307":"","r5":7.228006147286008e+306,"":1.750243265735646e+308}
return a-b+c
};
var base_0 = ["#Qin"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#Qin"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#Qin"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#Qin"]
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
require("fs").writeFileSync("./experiments/some/someGen/test359.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)