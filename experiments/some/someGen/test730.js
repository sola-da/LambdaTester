





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = ""
argument2[4.224481734419934e+307] = {"1":1.0440502740346215e+308,"126":-1,"618":1.2586046630485439e+308,"893":"S","2.649335474487759e+307":"","":"","5e-324":242,"3.6085117641773053e+307":""}
base_0[4][7] = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = 1.6646834700322667e+308
argument2 = {"2.487495937779755e+307":403,"":1.364222167439111e+308}
return a+b+c
};
var argument3 = false;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = 1.1708356148139826e+308
argument5[4] = null
return a/b+c
};
var argument6 = false;
var argument7 = ["(","c","^","9","i","A","&^OC","j","sg","]"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['k<7bJ'] = true
return a/b-c
};
var argument9 = r_0;
var argument10 = false;
var base_0 = [25,607,460,893,403]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,607,460,893,403]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,607,460,893,403]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,607,460,893,403]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test730.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)