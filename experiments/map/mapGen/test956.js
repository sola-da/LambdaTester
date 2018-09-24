





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"100":"?e","-1":"","1.210703055324363e+308":"","(K3Xvu":595,"3.279342313179733e+307":1.4205726959827606e+308,"":"V","`":"","1.20933943297289e+307":9.75203236036492e+307}
argument3[157] = ""
argument2['AwD'] = true
return a*b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][5] = [100,843,893]
return a/b/c
};
var argument4 = {"122":1.152876219314558e+307,"595":"p","618":"","5.405650246952626e+307":",","!":5.517177908874089e+307,"":"'j]","1.1224021160024986e+308":126,"j":1.733810540770148e+308,"1.4999053356087992e+307":",B"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['a8r['] = [893,82,1.7976931348623157e+308]
argument7[4] = [242,969,25,-100]
return a-b+c
};
var argument6 = r_0;
var argument7 = -100;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6]['VsR'] = "}l{"
argument9 = {"157":"N","213":"","627":"","655":"","893":"a:","8.004092839775848e+307":"k","-100":7.020831392637673e+307,"i":460,"1.5983329585705796e+308":"","":""}
return a/b+c
};
var argument9 = ["Rd8JY",";v*","I","Sz","]","Yp"];
var argument10 = r_0;
var base_0 = [705,242,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,242,59]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,242,59]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)