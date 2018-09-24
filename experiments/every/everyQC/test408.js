





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -86.65322716826307; };
var argument2 = r_0;
var argument3 = 627;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "²I¶\u0018NZ-bÊ"; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -9.042453544680207; };
var argument6 = true;
var argument7 = 49;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = [595,893,157,595,0,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,157,595,0,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,157,595,0,82]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,157,595,0,82]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test408.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)