





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = {"1.451870834992598e+308":3.470375193816258e+307}
base_0[6] = {"460":2.262406616039441e+307,"":403,"1.6831937774209865e+308":157,"x":"",",":""}
return a-b-c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"595":6.968398871382843e+307,"823":"[;","":"V","1.3437009246567747e+308":460,"4.64205614301428e+307":7.995772636463183e+307}
base_1[7] = ["y%","3","$,","2","g"]
return a+b-c
};
var argument4 = r_0;
var argument5 = "b";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = [843,49,607,969,5e-324,25,607,595]
return a+b+c
};
var argument7 = true;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = ""
base_3['length'] = [100]
argument10[3.3156198695370476e+307] = {"49":8.089552239302956e+307,"843":"",",":"x`Ug","":1.4501432349089575e+308,"1.1313138721211613e+307":""}
return a-b-c
};
var argument10 = "]x";
var argument11 = true;
var base_0 = ["_","6f*","B","Z"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_","6f*","B","Z"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_","6f*","B","Z"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_","6f*","B","Z"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test152.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)