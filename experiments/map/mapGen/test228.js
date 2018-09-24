





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = -1
argument2[893] = true
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7][2] = null
argument3[9.869573703797622e+307] = {"49":"Py","":627,"1.2723036855723681e+308":627}
base_1[9] = false
return a+b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"1.6591087814868288e+308":"5","5.647841810575843e+307":6.730008451696355e+307}
argument3[3] = ""
argument5[1] = {"0":"{G","403":823,"893":"","":1.4054432826557633e+308,"(":"","p=":"e&","1.2369760275049482e+308":"","O":893,"4.0567380895672796e+307":126,"1.3677256100822275e+308":""}
return a-b/c
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
argument7[1] = true
return a*b/c
};
var argument7 = [":","G","X_g","c","9Ae}","Q","E%","BMq","Y"];
var argument8 = {"595":"w","655":"","893":"","Z":5.318086128366384e+307,"2.3412535508078415e+307":"","":"","1.7976931348623157e+308":"8","6.870273469026451e+307":627,"2.3866650431726305e+307":1.389285210791423e+308};
var base_0 = ["pMO|YTL",25]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["pMO|YTL",25]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["pMO|YTL",25]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["pMO|YTL",25]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test228.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)