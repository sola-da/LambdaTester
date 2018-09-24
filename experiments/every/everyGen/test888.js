





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6706143966770798e+306] = false
return a*b+c
};
var argument2 = ["b>{","a","Pj{","hz","<","{","h","W"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.6706143966770798e+306] = "o"
return a+b-c
};
var argument4 = true;
var argument5 = "H";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['g]'] = {"3":7.391690194748001e+307,"460":7.25626150253652e+307,"705":242,"969":1.2369633375377587e+308,"1.1473984291502767e+308":"","R":607,"_":213,"":6.770908161223588e+307,"*&":""}
argument7 = ["W&","i","=","()","^`","w"]
base_2[4] = true
return a+b/c
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6.148642213884202e+307] = 9.750030220498148e+307
argument10[1] = 6.078513447278193e+307
return a*b/c
};
var base_0 = [",s","u","S","%l&","hq5","9",">"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",s","u","S","%l&","hq5","9",">"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",s","u","S","%l&","hq5","9",">"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",s","u","S","%l&","hq5","9",">"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test888.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)