





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = ["G;I,]!","0=gNm","*B@*","h","v","J","h7I1#","(P"]
return a/b-c
};
var argument2 = true;
var argument3 = 1.2433151282636271e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][7] = null
return a+b+c
};
var argument5 = 1.167324563394013e+308;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = 1.4895785150114442e+308
base_2[1][6] = {"59":595,"W":"Qt("}
return a+b-c
};
var argument8 = false;
var argument9 = {"126":4.4089198799546335e+306,"595":"","705":"","":"kH5v","Z":"9","1.554000082675704e+308":"8ZFN","7=_":7.291680343493676e+307,"9.034119115525114e+307":""};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = "duBYo"
base_3[5] = [783,-100,783,242,100,607,705,5e-324]
argument11[1.3599216339661573e+308] = [893,460,5e-324,403,893,618]
return a+b+c
};
var argument11 = 1.2820865899217721e+308;
var argument12 = {"607":4.121312120241695e+307,"893":595,"":3.4537946368561336e+307,"6.873741452083066e+307":7.112896713610577e+307,"3.9217969160542723e+307":"","l":""};
var base_0 = [82,"c","nl",705]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,"c","nl",705]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"c","nl",705]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"c","nl",705]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test333.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)