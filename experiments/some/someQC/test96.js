





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 83.90502688633646; };
var argument2 = false;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -4.385125928180855; };
var argument6 = ["$","4","E"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -96.24921008504475; };
var argument8 = null;
var base_0 = ["A0","%hr","M","_z4t)","|"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A0","%hr","M","_z4t)","|"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["A0","%hr","M","_z4t)","|"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["A0","%hr","M","_z4t)","|"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test96.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)