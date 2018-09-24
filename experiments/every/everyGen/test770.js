





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = ""
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [100,714,157,783,969,122,893]
return a*b/c
};
var argument3 = r_0;
var argument4 = ["F"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"0":213,"82":403,"157":"q","":126,"8s":"","4.28841482887892e+307":5.803509227539847e+307,"-1":893,"9.572387305587407e+307":8.170971810965804e+307,">3":2.7458156318821406e+307}
base_2[0][0] = ""
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [969,595]
argument7['io'] = "I"
return a*b*c
};
var argument7 = {"714":0,"783":655,"":"Q","8.416665620610308e+307":"m","Q":"rF","1.1968964937346895e+308":""};
var argument8 = {"0":100,"100":0,"213":6.917876315353564e+306,"618":403,"893":"B[lX","":"W","5.878840329889728e+307":242};
var base_0 = ["Y","m",82,-100,"P87RUJ3","{",705,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y","m",82,-100,"P87RUJ3","{",705,714]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y","m",82,-100,"P87RUJ3","{",705,714]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y","m",82,-100,"P87RUJ3","{",705,714]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test770.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)