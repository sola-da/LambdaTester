





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"ìÁqéû":0,"ðí":[],"e\\DùàÁ¡;":-2.6163958315520057}; };
var argument2 = {"618":"","":"","X":"E[z","2.683239820892709e+306":"7E","&3":"","-100":"","g":"krf","ZELX":59};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 79.88035707454824; };
var argument4 = false;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 44.11674226191175; };
var argument7 = true;
var argument8 = ["$:M;",-100,">"];
var argument9 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = [213,59,714,714,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,59,714,714,59]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test264.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)