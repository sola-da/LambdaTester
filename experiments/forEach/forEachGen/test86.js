





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = 607
base_0[3] = {"BA":""}
return a*b*c
};
var argument2 = true;
var argument3 = 3.597853253028128e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = [49]
argument5[0] = {"h1":823,"1.0966991316558096e+308":8.042882782039734e+307}
return a+b/c
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.4034744228995816e+308] = {"25":25,"403":1.019827371296065e+308,"":"","x":"","L":"","+":""}
argument8[2][783] = null
return a*b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = [705,242,213]
base_3[6] = [",",607,627,"z",843,893,"-"]
return a-b/c
};
var argument9 = null;
var base_0 = ["1","Wz","w","I","Fz","(QM","eB","j^DU"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","Wz","w","I","Fz","(QM","eB","j^DU"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","Wz","w","I","Fz","(QM","eB","j^DU"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","Wz","w","I","Fz","(QM","eB","j^DU"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test86.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)