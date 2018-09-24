





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = [5e-324,1.7976931348623157e+308,627,100,-100,157]
base_0[0][0] = {"":"-Ja<","7.301610093965568e+307":"b3b","1.269991282602889e+307":59,"?":82}
base_0[0][2] = true
return a-b/c
};
var argument2 = 49;
var argument3 = 4.4935340632170495e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.3156198695370476e+307] = {"893":1.483726612728617e+307,"":1.4007890732929021e+308,"j":"%|"}
base_1[1] = [",1c]","!","{@zoFa","Aau","5","I","!g-"]
return a-b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = "5`"
return a/b-c
};
var argument7 = {"705":59,"":"","1.470233656180847e+308":242};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = null
return a+b*c
};
var argument9 = r_0;
var argument10 = false;
var base_0 = ["+",49,"E","L]"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+",49,"E","L]"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+",49,"E","L]"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+",49,"E","L]"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test192.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)