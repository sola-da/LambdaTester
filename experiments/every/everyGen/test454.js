





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = "3"
return a-b/c
};
var argument2 = 783;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = 1.4325719123921722e+308
argument4[5] = [-1,783,157,969]
return a/b*c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"0":1.0109477650652087e+308,"969":"","1.3474151599892655e+308":1.5303347333678148e+308,"":242,"1.1769348343736144e+308":"-","s":"","1.1735955524648516e+308":""}
return a-b+c
};
var argument6 = ["#","d","j","a","o","5"];
var argument7 = {"618":1.7532688078157843e+308,"3.197945098696471e+307":"","":"","5.52773882592083e+307":"Gh5","T#pe":1.1493818097039133e+308,"EGr":"","1.1469145193819313e+308":1.3153215326313581e+308,"1.3497333429174124e+308":157};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = 1.548649604463724e+308
base_3[0] = false
return a*b*c
};
var argument9 = null;
var base_0 = [893,"{","KXB"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"{","KXB"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"{","KXB"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"{","KXB"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test454.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)