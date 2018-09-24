





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = 2.4957078973787734e+307
argument2[3.3156198695370476e+307] = {"-100":3.7610515736958835e+307}
base_0 = {}
return a/b*c
};
var argument2 = [969];
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = "Q"
argument5[6] = 893
base_1[8] = [893,")a",655,607,"M}"]
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ["%","(@xr(r","S","p",">"]
return a*b+c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4.960033715165713e+307] = false
base_3[1][6] = {"126":">k","618":9.023271089377334e+307,"":126,"3.3750765785904754e+307":705,"-100":"@I","So<m'nG}5=":"PV","1.6324431506460839e+308":1.2141044854794732e+308,"1.4858560770357317e+308":3.432427303751148e+306,"4.2474711777140506e+307":1.7976931348623157e+308}
argument9[3] = false
return a*b-c
};
var base_0 = ["{i$","V","q","k","`^}","(x","L1"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{i$","V","q","k","`^}","(x","L1"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{i$","V","q","k","`^}","(x","L1"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{i$","V","q","k","`^}","(x","L1"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test419.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)