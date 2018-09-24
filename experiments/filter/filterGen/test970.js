





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = "VPb"
return a*b-c
};
var argument2 = [460,126];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = -1
argument4['T'] = ["maa","?",213,100,59,122,";","!"]
return a-b-c
};
var argument4 = [843,"U88","T]Av)",49,")",893,"s",242,25,"9"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = "e"
argument7['#R[+'] = false
argument6['h'] = {"5":"","100":122,"4.416201217036348e+307":"^","8.981995369175624e+306":"","G":618,"J;9m":1.3986806777762802e+307}
return a+b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"49":"","893":2.1430740425488367e+307,"1.0150050500124324e+308":49,"1.6146094612738882e+307":122,"":"U","k":"l7>HK","1.3635580837215288e+307":"","5.480167096524801e+307":843,"8.137235697766916e+307":"","1.7976931348623157e+308":""}
argument8[157] = true
return a/b/c
};
var base_0 = ["P","jg","z","P","}",")h","s4N","=","1"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","jg","z","P","}",")h","s4N","=","1"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","jg","z","P","}",")h","s4N","=","1"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P","jg","z","P","}",")h","s4N","=","1"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test970.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)