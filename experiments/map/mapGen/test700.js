





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][3] = "g4|g"
argument2[893] = {"59":"#vd","969":"gH_p^q","n,":595,"":"#>","2.9419848304310553e+307":"","1.6210049712105716e+307":82,"O":"","k":2.7211424991082624e+307}
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[607] = ""
argument3[5] = {"59":"","242":"c","403":"<","783":627,"1.6910221743051266e+308":""}
argument3[3] = 403
return a/b-c
};
var argument3 = {"49":"w","59":"","d":"","g]":242,"":403,"9Je":1.6152525549542885e+308,"1.29290605933447e+308":1.466807220356932e+308};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[49] = {"893":843,"1.5803295895997119e+308":655,"1.4075025766174452e+308":"9BN","s":"","_":"mr7","e":655,"":618,"1.3379306331176897e+308":1.7658925956114938e+308,"1.4492559535484467e+308":"_","*":"y"}
return a+b-c
};
var argument5 = true;
var argument6 = 9.983002641384204e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1] = {}
return a/b-c
};
var argument8 = true;
var argument9 = "";
var base_0 = ["i","g",655,-100,"_;",823,"4#e","ZV","_",403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","g",655,-100,"_;",823,"4#e","ZV","_",403]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","g",655,-100,"_;",823,"4#e","ZV","_",403]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test700.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)