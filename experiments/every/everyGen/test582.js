





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = ""
return a-b/c
};
var argument2 = {"242":"","823":"","1.2566326977853592e+308":"","8.989224516330767e+307":"","":"","zW":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 1.7976931348623157e+308
argument4['io'] = null
argument5[5] = 1.6570405617051782e+308
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = false
argument5[0] = {"59":0,"213":"","2.826108946211585e+307":"Mhc","":"3","at":"Qav"}
argument5[2] = null
return a+b-c
};
var argument5 = ["b","9","?","R","u"];
var argument6 = {"783":7.617762862573461e+307,"843":",","":969,"fc":969,"I":59,"7.409321026783806e+307":"#F"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = 595
argument7[2] = {"y;":403,";":1.3026467471649342e+308}
return a-b-c
};
var base_0 = [823,-100,714,823,1.7976931348623157e+308,893,403,25,969,823]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,-100,714,823,1.7976931348623157e+308,893,403,25,969,823]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,-100,714,823,1.7976931348623157e+308,893,403,25,969,823]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,-100,714,823,1.7976931348623157e+308,893,403,25,969,823]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test582.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)