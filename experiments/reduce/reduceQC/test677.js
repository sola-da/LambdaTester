





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -58.76722523737736; };
var argument2 = false;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = false;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return ""; };
var argument8 = false;
var argument9 = null;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument11 = r_3;
var argument12 = null;
var base_0 = [";$",">","^j","v","W","S ","?","T","p"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";$",">","^j","v","W","S ","?","T","p"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";$",">","^j","v","W","S ","?","T","p"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";$",">","^j","v","W","S ","?","T","p"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)