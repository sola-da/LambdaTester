





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = {"82":"","823":3.4344211045681575e+307,"893":213,"":"41","1v":"","_":"8"};
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 37; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [true,false,1,null,null,null]; };
var argument7 = false;
var argument8 = false;
var base_0 = ["{",",","c","W^afC#e+","o","S","i","J)?"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{",",","c","W^afC#e+","o","S","i","J)?"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{",",","c","W^afC#e+","o","S","i","J)?"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{",",","c","W^afC#e+","o","S","i","J)?"]
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
require("fs").writeFileSync("./experiments/every/everyQC/test525.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)