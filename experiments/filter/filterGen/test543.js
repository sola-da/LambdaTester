





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = [157,843,157,627]
argument3[5.262931091360336e+307] = null
return a*b/c
};
var argument2 = 1.3661660828425366e+307;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = null
argument5[1.7847438319683965e+308] = false
argument4[3.377960715099946e+307] = 1.6213057308595332e+308
return a-b/c
};
var argument5 = {"122":655,"sHe_":"","":"T-G,","?N1":""};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 1.0179874100193105e+307
argument8['c'] = {"100":0,"714":4.672756422663865e+307,"fz":3.9963357080505725e+307,"":"","-100":8.895077090135743e+307,"A":"ul!M"," ":"5FP"}
return a*b+c
};
var argument8 = "V$Sban";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[-100] = ""
base_3[0][5e-324] = true
return a+b-c
};
var base_0 = [823,627,705,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,627,705,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)