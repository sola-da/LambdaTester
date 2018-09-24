





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"AÂ":0,"e":0,"ÂÒ¢6\ró¿ú":true,"+²B":true,"fåL[îJy{`":22.372574145066356,"(÷\u0012´":false,"C\"K":-31}; };
var argument3 = r_0;
var argument4 = [242,126,49,157,82,403,843,595,25];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -70; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [-0.950887299979335,null]; };
var base_0 = [59,126,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,126,705]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,126,705]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,126,705]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findQC/test660.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)