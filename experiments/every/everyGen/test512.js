





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = ""
argument3[8] = {"8.023131081078615e+307":1.00599847012331e+308,"`":655}
base_0[6] = {"8kiT":893,"":6.668811690329014e+307}
return a/b-c
};
var argument2 = ["7","N4>dr","K4","!j","!P","k3&"];
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = false
argument5[122] = null
base_1[6] = ""
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = ")PrV"
argument7[3] = {"714":3.172720248002781e+307,"":"!","kAW":"W","1.175875873171299e+308":"","mS ":"","zr":"u;L"}
return a*b/c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = {"0":3.1886950609758187e+307,"823":1.652089498712054e+308,"2.3982118408475765e+307":595,"":"$O"}
argument9[2] = ["Y","Q","e","C","C","(RZ","s,","(?","+x2)o","dpH"]
return a+b-c
};
var argument8 = null;
var argument9 = 1.3196116608924205e+308;
var base_0 = [655]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655]
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
require("fs").writeFileSync("./experiments/every/everyGen/test512.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)