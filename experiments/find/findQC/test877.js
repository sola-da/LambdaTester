





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = 49;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 33; };
var argument4 = false;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument9 = ["v","*]uof","X"];
var base_0 = ["l","p=","1U",";0hV","8","891KP<"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","p=","1U",";0hV","8","891KP<"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","p=","1U",";0hV","8","891KP<"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","p=","1U",";0hV","8","891KP<"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test877.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)