





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 71.21087208040215; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "ßo_XÊ\u0006"; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 65.90006408067406; };
var argument7 = "";
var base_0 = ["-ZI65S","@5x","R","%","g",";","B$YD","W","*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-ZI65S","@5x","R","%","g",";","B$YD","W","*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-ZI65S","@5x","R","%","g",";","B$YD","W","*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-ZI65S","@5x","R","%","g",";","B$YD","W","*"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test310.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)