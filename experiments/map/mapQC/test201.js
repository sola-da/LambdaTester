





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"ø5Ã:Ì":-0.9893717200800862,"\u0016õ\u001a1":0,"£":"8j","R¿# G\"P":7.772924799963923}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "è"; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 28.860667393511076; };
var argument6 = null;
var base_0 = ["0",0,"J1LU","&X"]
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
var base_2 = ["0",0,"J1LU","&X"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapQC/test201.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)