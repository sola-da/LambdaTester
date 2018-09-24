





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0.37107265209938856,0.43523842114099276,-3,-3,true,-6,false,-24.440492392283115]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 27; };
var argument3 = null;
var argument4 = {"100":-100,"893":"#a","1.0240261284840182e+308":100,"":714,"=":"","t":4.2126361173458845e+307,"1.6286900768696193e+308":460};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -63.98530838618834; };
var base_0 = [-1,100,607,213,783,627,618,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,100,607,213,783,627,618,0]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,100,607,213,783,627,618,0]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,100,607,213,783,627,618,0]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findQC/test348.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)