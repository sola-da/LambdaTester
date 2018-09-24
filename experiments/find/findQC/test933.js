





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [-0.1411140155295818,0,3,2,-13.200366441589189,"FL³8"]; };
var argument2 = null;
var argument3 = 3.7235435265116227e+307;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 45; };
var argument5 = "zgy)";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 78; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "Çêq:b.\u0002"; };
var argument8 = r_0;
var argument9 = 8.814656714951628e+307;
var base_0 = ["jym{9","Hgaj^{^$","&",714,"a","a","gP"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["jym{9","Hgaj^{^$","&",714,"a","a","gP"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["jym{9","Hgaj^{^$","&",714,"a","a","gP"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["jym{9","Hgaj^{^$","&",714,"a","a","gP"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test933.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)