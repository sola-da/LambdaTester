





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
base_0[1] = 1.5018022368003685e+307
argument2[0] = ["5","n7zM41l6","8t","g`","#"]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = null
base_1[3] = {"82":1.2726462046693948e+308,"8.654114738720045e+307":"0p","5.343721425474771e+307":9.035318497379853e+307}
return a+b+c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][7] = "UejZ4Z"
argument6[403] = {"1.4596588547220522e+308":"a","":460,"1.2960284157390719e+308":"","1.1975773311661912e+308":1.1893031039768922e+308}
base_2[5] = ""
return a/b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = {"618":"Ytf","705":"","":157,";":"","p":"s","-100":1.4025581202546616e+308,"5.695019928134125e+306":""}
base_3[2] = {"":"M*","1.5324439755283366e+308":5.999259864016606e+307,"aa":"","5.615830258472743e+307":25,"1.1707740163161644e+308":""}
base_3[6] = false
return a+b-c
};
var argument8 = true;
var argument9 = "2d9";
var base_0 = [783,49,-100,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,49,-100,893]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,49,-100,893]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,49,-100,893]
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
require("fs").writeFileSync("./experiments/every/everyGen/test62.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)