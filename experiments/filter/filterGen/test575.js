





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 1.7976931348623157e+308
argument3[3] = null
argument2[1.7847438319683965e+308] = 1.6570405617051782e+308
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = false
argument4[4] = {"59":0,"213":"","2.826108946211585e+307":"Mhc","":"3","at":"Qav"}
argument2 = null
return a+b-c
};
var argument3 = ["b","9","?","R","u"];
var argument4 = {"783":7.617762862573461e+307,"843":",","":969,"fc":969,"I":59,"7.409321026783806e+307":"#F"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = 595
argument5[3.377960715099946e+307] = {"y;":403,";":1.3026467471649342e+308}
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['A'] = false
argument7[7] = {"49":1.0237407685918637e+308,"157":"","655":9.694367688460238e+307,"2.3621360007810896e+307":"","1.6746673239089995e+308":"","9.727772990737494e+307":"z","3.1056342423287e+307":627,"":655,"5.473476919467388e+307":"","][Z":"Q^yiu"}
return a+b-c
};
var base_0 = ["v","eW?=|h","H","t","Zyrt","I_@","W","x"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","eW?=|h","H","t","Zyrt","I_@","W","x"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","eW?=|h","H","t","Zyrt","I_@","W","x"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test575.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)