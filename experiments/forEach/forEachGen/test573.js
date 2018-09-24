





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.0481490052276395e+306] = false
argument3[2] = ""
return a/b+c
};
var argument2 = "`";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.3130321063336282e+308] = ["9QAiC",607,157,213,607,")",25,403,"T"]
base_1['length'] = null
return a*b*c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = false
argument6[0] = {"705":"","714":"yZ","823":"","TM":"","":"","3.1120379026838735e+307":"","3.706847656003612e+307":59,"1.6866608988549676e+308":4.76121102397252e+307,"2.6813117927120463e+306":""}
argument7[1.7976931348623157e+308] = false
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = ""
argument6[2] = ""
argument7[969] = {"25":"r","":"<%","4.897984334259787e+307":618,"1.6255245504960968e+306":"","D6":595,"1.6956801597930496e+308":6.745652864337251e+307,"Y":823}
return a*b/c
};
var argument7 = r_2;
var argument8 = null;
var base_0 = [403,403,82,-100,843,595,823,627,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,403,82,-100,843,595,823,627,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,403,82,-100,843,595,823,627,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,403,82,-100,843,595,823,627,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test573.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)