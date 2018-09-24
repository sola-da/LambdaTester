





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"Û£¯\u0016\u0012":false,"µ\u0017*þÐ":0,"»ß?§\u0006Iyó\u000f":2,"Ðªð¥9¨Ó":-2.9239738282742262,"\u0007VËÀ":"ä{¹\u0012","%å¶r":"ùí","(_µ\u0007ZÑ":0.28779496152484185,"8\u000b":false,"pî%/´":0}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "âñj\u0001"; };
var argument6 = true;
var argument7 = "+";
var base_0 = ["J(b","m"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J(b","m"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test801.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)