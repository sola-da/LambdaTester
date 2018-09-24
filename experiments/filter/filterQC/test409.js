





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 69.82649041036166; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -38; };
var argument3 = "";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = {"595":"#b","823":893,"1.7046987760679093e+307":1.5677747010284605e+308,"1.061930446568224e+308":"I&h,1NC","":1.62800425839493e+308,"P4z|":""};
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = r_2;
var argument9 = false;
var base_0 = [82,-1,242,49,893,783,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-1,242,49,893,783,213]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)