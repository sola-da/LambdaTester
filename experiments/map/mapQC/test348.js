





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 28.310762130977384; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -87.63867840197268; };
var argument3 = null;
var argument4 = {"100":-100,"893":"#a","1.0240261284840182e+308":100,"":714,"=":"","t":4.2126361173458845e+307,"1.6286900768696193e+308":460};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [null,0,-2.8797762712352633]; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "æF"; };
var base_0 = [-1,100,607,213,783,627,618,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
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
var base_3 = [-1,100,607,213,783,627,618,0]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapQC/test348.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)