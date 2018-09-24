





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -13.685801331480295; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 64; };
var argument3 = 969;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 24; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -32.37508029561356; };
var base_0 = [655,25,705,714,705,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,25,705,714,705,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,25,705,714,705,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,25,705,714,705,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test276.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)