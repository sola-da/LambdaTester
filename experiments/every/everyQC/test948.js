





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 79; };
var argument2 = null;
var argument3 = "";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 9; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = r_1;
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument9 = false;
var argument10 = r_1;
var base_0 = [714,783,49,607]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,783,49,607]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,783,49,607]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,783,49,607]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test948.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)