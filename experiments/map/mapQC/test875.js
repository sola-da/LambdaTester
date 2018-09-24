





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -23.278620595311605; };
var argument2 = "";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 61; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -47.21593861569935; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"Kø+¨\u001d2":0,"w":true," Ä,F":"âÏ.","\u0001\u001dðöü\u000eÓ":-17,"ØC{":45.771456654893015,"fÅ\u0005Éxt":80.20047719007641}; };
var base_0 = ["0Q","`","g","<","q"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0Q","`","g","<","q"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapQC/test875.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)