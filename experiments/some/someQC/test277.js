





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -57; };
var argument2 = false;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 60; };
var argument5 = true;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument9 = false;
var base_0 = ["|","%=W","soT","Q","o","_","!k","Y"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","%=W","soT","Q","o","_","!k","Y"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","%=W","soT","Q","o","_","!k","Y"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","%=W","soT","Q","o","_","!k","Y"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test277.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)