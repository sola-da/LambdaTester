





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -75.44512481745338; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [null,0.5166149089074301]; };
var argument4 = 2.920001208052323e+307;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = 893;
var base_0 = ["))+","c","k","L","a","*8F+>","m","3","2"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["))+","c","k","L","a","*8F+>","m","3","2"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["))+","c","k","L","a","*8F+>","m","3","2"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["))+","c","k","L","a","*8F+>","m","3","2"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test545.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)