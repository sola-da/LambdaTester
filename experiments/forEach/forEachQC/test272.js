





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 15.255790132202996; };
var argument2 = "u";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [0.7967234795278477]; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -22; };
var argument5 = r_2;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = ["V","@wI"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","@wI"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","@wI"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","@wI"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test272.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)