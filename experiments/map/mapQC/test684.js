





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -69; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "ºP\f\u0007["; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = {"213":2.2122544918536986e+307,"823":"Ld","5.688335155747788e+307":1.670426475670425e+308,"n":"","[t":"","4.912769922556103e+307":"","":"","3.908393851714119e+307":"","mCd>":""};
var argument6 = null;
var base_0 = ["Mp","Ql","(","e*M","?","e","8","Js9","#"]
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
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapQC/test684.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)