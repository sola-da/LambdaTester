





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"714":4.736863204667712e+307,"3.524507593816126e+307":213,"":1.4859767706467873e+308,"imjI":4.760069439522623e+307,"A":"x-","7.503415553245377e+307":"","J":"","h":"v","ag":8.618193939830369e+307,"9.434554395547539e+307":823}
base_0[2] = {"714":0,"893":157,"9|":6.039883032163697e+307,"":"]}","H":0,"1.6817615589410406e+308":1.3742651775814065e+308}
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.4034744228995816e+308] = 213
argument3[2] = null
argument3[1] = ""
return a-b*c
};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = ""
return a/b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = null
argument7 = {"714":"`#`f","_":"","":1.6746484119294358e+308,"!":9.142301430954918e+307,"x":49,"1.3765135881968491e+308":"","H":1.1826570571183187e+308}
argument6[3.0481490052276395e+306] = {"100":823}
return a+b/c
};
var base_0 = [705,25,"_",-100,627,"y",122,"p"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,25,"_",-100,627,"y",122,"p"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,25,"_",-100,627,"y",122,"p"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,25,"_",-100,627,"y",122,"p"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test56.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)