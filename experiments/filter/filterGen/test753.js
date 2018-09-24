





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7847438319683965e+308] = 1.556432358175713e+308
argument2[-100] = {"714":"i"}
return a*b*c
};
var argument2 = "@";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = [100,714,157,783,969,122,893]
return a*b/c
};
var argument4 = false;
var argument5 = ["F"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"0":213,"82":403,"157":"q","":126,"8s":"","4.28841482887892e+307":5.803509227539847e+307,"-1":893,"9.572387305587407e+307":8.170971810965804e+307,">3":2.7458156318821406e+307}
base_2[2][1] = ""
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7121211182125595e+308] = [969,595]
argument9[7] = "I"
return a*b*c
};
var argument8 = {"714":0,"783":655,"":"Q","8.416665620610308e+307":"m","Q":"rF","1.1968964937346895e+308":""};
var argument9 = {"0":100,"100":0,"213":6.917876315353564e+306,"618":403,"893":"B[lX","":"W","5.878840329889728e+307":242};
var base_0 = [122,1.7976931348623157e+308,25,25,618,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test753.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)