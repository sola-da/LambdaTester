





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 0; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [null,"=",0,-3,true,{"Ø'k\f":{"1":"¦"},"õ":[]}]; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = {"213":607,"":59,"1.7865305879727257e+308":82};
var base_0 = [82,460,627,82,122,714,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test874.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)