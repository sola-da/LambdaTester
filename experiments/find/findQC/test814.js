





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 32; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "\t]\u001f\\VY\u0010"; };
var argument4 = [705,618,607];
var argument5 = 1.765507150628957e+308;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = false;
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument10 = r_0;
var base_0 = ["_","7","u"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_","7","u"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_","7","u"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_","7","u"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findQC/test814.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)