





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -38.60879210478334; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "§\nÆü%¹:2"; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = r_1;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 9.818748060786241; };
var argument8 = [823,157,705,714,403];
var argument9 = false;
var base_0 = [705,82,714,627,82,5e-324]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,82,714,627,82,5e-324]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,82,714,627,82,5e-324]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,82,714,627,82,5e-324]
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
require("fs").writeFileSync("./experiments/find/findQC/test752.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)