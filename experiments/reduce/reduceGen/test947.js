





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = {"213":1.460221756829296e+308,"714":"","Y":"","":7.302485097889069e+307,"5.701072266233487e+307":"{","H":"si,","1.3503267397565082e+308":"r","et|GI":627};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [460,1.7976931348623157e+308]
return a/b*c/d
};
var argument5 = true;
var argument6 = 59;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [82,705,595,969,-1,607,607,242,-1]
base_1[0][3] = {"0":1.7102276041938022e+308,"":1.5903842527724678e+308,"1.6519543290714287e+306":7.741290219518057e+307,"D":"("}
argument7['HMm'] = ["k3","#[","K","o","1","(","%","Gc8"]
return a-b+c/d
};
var argument9 = true;
var argument10 = r_1;
var argument11 = {};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = [5e-324,705]
base_2[0][9.12287810829114e+307] = {"460":4.393165661820323e+307,"":4.915559072815946e+307,"a":100,"1.324317238225257e+308":1.29778381564532e+308,"5.394562698965645e+307":1.09641991383154e+308,"2.0102331771395104e+307":""}
argument10[627][126] = 126
return a-b+c-d
};
var argument13 = "9:";
var argument14 = null;
var argument15 = r_2;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[7.999889602676851e+307] = false
return a-b+c-d
};
var base_0 = ["A?","4e","a"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A?","4e","a"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["A?","4e","a"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["A?","4e","a"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test947.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)