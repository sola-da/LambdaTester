





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 17.497665090030946; };
var argument2 = r_0;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -78.84879244839532; };
var argument7 = false;
var argument8 = [618,783,126,627,49,122];
var argument9 = function() {
 callbackArguments.push(arguments) 
 return "ZQ"; };
var argument10 = r_0;
var argument11 = false;
var base_0 = ["=","D5","w","4H7 Y[-","V","nu","lN","66","Da"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","D5","w","4H7 Y[-","V","nu","lN","66","Da"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","D5","w","4H7 Y[-","V","nu","lN","66","Da"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","D5","w","4H7 Y[-","V","nu","lN","66","Da"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findQC/test747.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)