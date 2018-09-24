





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = ["S","kfWb","{","t","t","tWM"]
base_0[3] = ["%sL","vu,","1","aa","{dw","hzyxb","NC","(","!","B!e(w"]
base_0[1] = "?"
return a+b/c
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = ""
argument6[6] = {"893":595,"1.0032386322938247e+308":"k","":"b%","<u":1.4427187411959323e+308,":":"","1.5116099329720023e+308":1.456571635349108e+308,"6.005422461422583e+307":"@ ","5.351015935480373e+307":242}
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b+c
};
var argument6 = ["@",157,25,"I>","?%T9X%=","|l","&8"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][4] = [157,893,607,627,893,0,126,1.7976931348623157e+308]
argument9[2] = true
return a*b*c
};
var argument8 = [-1,59,49,823,460,25];
var argument9 = null;
var base_0 = ["mw","Q","Gc","6FZ","6",";",">"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["mw","Q","Gc","6FZ","6",";",">"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["mw","Q","Gc","6FZ","6",";",">"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["mw","Q","Gc","6FZ","6",";",">"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test382.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)