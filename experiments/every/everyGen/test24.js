





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"":"g","5e-324":9.815162329395887e+307}
base_0[5] = 8.907276123999837e+307
base_0[6] = "BPZr"
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = ["^"]
argument3[122] = [595,1.7976931348623157e+308,595,-100]
base_1[2] = {"":"q&"}
return a*b+c
};
var argument3 = ["`9;_","K","L","X","F","R","K","X]"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = true
return a-b/c
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = [157,126,460,607,5e-324,"_",5e-324,"iDg"]
return a-b*c
};
var base_0 = [-1,"xw",-1,1.7976931348623157e+308,">H",627]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"xw",-1,1.7976931348623157e+308,">H",627]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"xw",-1,1.7976931348623157e+308,">H",627]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"xw",-1,1.7976931348623157e+308,">H",627]
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
require("fs").writeFileSync("./experiments/every/everyGen/test24.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)