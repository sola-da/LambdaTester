





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -9; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = true;
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 80; };
var argument7 = true;
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return "\u001a)ÔY"; };
var argument10 = null;
var argument11 = r_0;
var base_0 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyQC/test421.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)