





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = r_0;
var argument3 = 627;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -59; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"_ÊÿÔÂ·v¯":false,"\u0001\u0002":"+"}; };
var argument6 = true;
var argument7 = 49;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [-0.005080058287709299,true,[]]; };
var base_0 = [595,893,157,595,0,82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,157,595,0,82]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,157,595,0,82]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,157,595,0,82]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test408.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)