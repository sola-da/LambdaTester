





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [[],0,-3,-5.2318527520908455]; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = false;
var argument5 = {"9":403,"":"","IG":"H","g4r":1.1805513504892667e+308,"5.727025922551447e+307":"","1.3406827298789856e+308":"t"};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 38.470517756955225; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = ["m|,;","M>","SA"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m|,;","M>","SA"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m|,;","M>","SA"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m|,;","M>","SA"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test161.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)