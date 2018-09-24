





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"ßÃ\u0005·\u001ca?":0,"`\u0000{ý9":"ï","CsØõ$Hã":true,"¾\u0013q":true,"0Á+":-11,"Î}2leu|\u001f":true,"Þ~#+Í¨":-16}; };
var argument2 = 5.611557914369836e+307;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 16; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -18; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 47; };
var argument7 = "";
var argument8 = true;
var base_0 = [843,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test503.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)