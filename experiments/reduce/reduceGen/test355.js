





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"6.420248454978058e+307":"e^",")":6.205607310478591e+307}
return a-b/c/d
};
var argument2 = {"460":49,"714":6.76953211423258e+306,"1.4706219360557623e+308":"","1.669370671560232e+308":1.7754747954694167e+308,"w":"M]=C","@I":""};
var argument3 = "r";
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.359136872727139e+308] = [">Y","T","PxJ","i","furE","k","B"]
argument3[';N'] = {"607":"","823":"","":823,"x0h":4.021156357623285e+307,"1.576183978278208e+308":""}
base_1 = ["L7X","3","mMS#","Zu_","c"," "]
return a+b-c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = 1.0924017943488978e+308
base_2[1][3] = false
argument8['18{'] = "D"
return a+b+c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6.35085648319999e+307] = {"j]":9.626802797655932e+307}
base_3[6] = {"Xnj":"Xb","1.2170339766827564e+308":1.686221878043383e+308,"1.008756406677543e+308":""}
return a*b+c/d
};
var argument8 = 7.419874071987185e+307;
var argument9 = null;
var base_0 = [49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test355.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)