





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = ""
argument2['c'] = {"607":607,"705":607,"4.944729324962551e+307":9.73591721810837e+307,"A":1.7508843027402962e+308,"&8":1.0633236409808626e+308,"1.3192350111061488e+308":1.1431611887279405e+308,"W":"m>","":"","3.8120440085202614e+307":59}
argument3[6] = true
return a*b-c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = {"0":6.697075915452084e+307,"595":"{","":"","w":100,"5.655675550202856e+307":893,"5.103877693947577e+307":59,"-1":1.1002492754848556e+308,"|B!e(w":";RDg"}
base_1[1][1] = null
return a+b/c
};
var argument5 = "";
var argument6 = {"893":595,"1.0032386322938247e+308":"k","":"b%","<u":1.4427187411959323e+308,":":"","1.5116099329720023e+308":1.456571635349108e+308,"6.005422461422583e+307":"@ ","5.351015935480373e+307":242};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = false
return a/b+c
};
var argument8 = ["k`7","I>","?%T9X%=","|l","&8","g"];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['wIs'] = null
argument10[3.0481490052276395e+306] = {"3":893,"8.220654273454443e+307":"","6.751609182046444e+307":"","":""}
return a*b*c
};
var argument10 = r_3;
var argument11 = r_3;
var base_0 = ["qRz$Ry9P","-,","g","6]R","o{","_ve=","$c","?$=","le","q`VO"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["qRz$Ry9P","-,","g","6]R","o{","_ve=","$c","?$=","le","q`VO"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["qRz$Ry9P","-,","g","6]R","o{","_ve=","$c","?$=","le","q`VO"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test377.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)