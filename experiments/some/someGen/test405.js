





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = "i0u%y"
base_0[1][3] = "_i"
argument2['f!BO'] = {"5":"YJe","607":"","1.9668195203309692e+307":213,"":8.657043393713091e+307,"8.499490626669039e+307":3.409756598652213e+307}
return a/b-c
};
var argument2 = "BN)EZ";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = {"j":242,"-1":"=","T":655,"":"b","p]":1.4658897506100708e+308,"Q":213}
return a/b+c
};
var argument4 = {"25":"?f","242":1.171026530588106e+308,"403":1.7976931348623157e+308,"-1":9.943571120954788e+307,"":1.2459583969629373e+308,"1.3254372811283006e+308":1.28598963440314e+308,"5.355495606514474e+307":618,"<|":"?!","Va":843,"1.5109538778533692e+308":""};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = -1
return a/b/c
};
var argument7 = "";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.249941463060761e+307] = 969
argument9[1.6798476101238045e+308] = {"qV4c`":-1}
argument9[4] = null
return a+b*c
};
var argument9 = r_3;
var base_0 = [627,1.7976931348623157e+308,607,655,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,1.7976931348623157e+308,607,655,122]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,1.7976931348623157e+308,607,655,122]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,1.7976931348623157e+308,607,655,122]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test405.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)