





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 11; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 27.02342771277557; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "fò"; };
var argument6 = false;
var argument7 = {"157":"","!":"x","":""};
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [0.4077474273355599,false,null,true]; };
var argument9 = r_3;
var base_0 = [0,242,-100,403,843,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,242,-100,403,843,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,242,-100,403,843,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,242,-100,403,843,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test927.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)