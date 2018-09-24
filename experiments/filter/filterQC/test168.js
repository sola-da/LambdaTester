





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 32; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -67.73733392860275; };
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return []; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["E","h","={","({E","R8N",59,"h",0,"5Ije","R`#"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E","h","={","({E","R8N",59,"h",0,"5Ije","R`#"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument5)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test168.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)