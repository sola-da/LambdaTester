





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = null;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = {"595":"","969":"","Kt":714,"R":1.089449147580639e+308,"V":"","1.6643984410473925e+308":"Y","1.4776416548422706e+308":2.088152977047873e+307,"L^kc":"L9","":""};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -18.74899832019561; };
var argument7 = [627,122,242,843];
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = ["V","ru","]","-``Mz","ZO","M4J#",",6q","C","s"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","ru","]","-``Mz","ZO","M4J#",",6q","C","s"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","ru","]","-``Mz","ZO","M4J#",",6q","C","s"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","ru","]","-``Mz","ZO","M4J#",",6q","C","s"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)