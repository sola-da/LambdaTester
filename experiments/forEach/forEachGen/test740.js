





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"705":126,"4.574533196975439e+307":25,"B0u]":1.1955954713516316e+308,"1.2175424058501694e+308":"","X":"cYR8","6T":7.448473636257597e+307}
argument2[126] = true
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[49] = [893,655,655,403,82,843,0,126,843]
return a-b-c
};
var argument4 = {"":1.755069599544185e+307,"O":""};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['7q('] = [0,607]
argument7[2] = {"25":"Eng","242":"#0N","655":"","969":823,"":122,"x":893,"r":"#"}
return a*b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = 9.690362064859622e+307
base_3[0] = {"607":"s","5.182180873963224e+307":122,"5.169658554792841e+307":"X","Zy":"2%","A":1.4607846884486041e+308,"^":893,"cf":"$B&|9","8.187779899755737e+307":7.466808351651738e+307,"":705}
return a+b+c
};
var base_0 = [705,705,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,705,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,705,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,705,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test740.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)