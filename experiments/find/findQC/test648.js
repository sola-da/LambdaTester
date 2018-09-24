





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "ÙT<"; };
var argument2 = null;
var argument3 = {"0":9.621481433400743e+307,"122":"o","607":"","893":1.5647692511102445e+308,"3.8891171587324823e+307":627,"C":-1,"5-":"","1.3130321063336282e+308":0,"]":""};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -61.37756860947425; };
var argument5 = 3.9010328404211665e+307;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -18; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument9 = null;
var argument10 = false;
var base_0 = [0,714,59,213,100,843,122,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,714,59,213,100,843,122,213]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,714,59,213,100,843,122,213]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,714,59,213,100,843,122,213]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findQC/test648.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)