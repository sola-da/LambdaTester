





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 31.153162761546717; };
var argument2 = null;
var argument3 = "";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 12.46369640376539; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -1.1515599358269624; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "oÒP"; };
var base_0 = [122,"m^O"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"m^O"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"m^O"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"m^O"]
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
require("fs").writeFileSync("./experiments/every/everyQC/test150.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)