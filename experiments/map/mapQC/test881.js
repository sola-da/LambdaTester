





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 54.59660128667141; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = false;
var argument5 = "";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -40.1183506160405; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -8.331416325717322; };
var base_0 = ["f","l","$:M",";I","-","I}"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
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
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f","l","$:M",";I","-","I}"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test881.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)