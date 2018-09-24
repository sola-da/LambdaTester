





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -79; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -28; };
var argument6 = {"25":"I$$$O","403":5.91502828511245e+307,"1.2405190564704412e+308":1.4132122276737557e+308,"4.918273244226894e+307":"BqnG#Z&","-":607,"1.5262926744104748e+308":1.586348933062314e+308,"2.587602547960195e+307":"","":""};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {}; };
var base_0 = ["S{D","bC","rDq","$","(","Q"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S{D","bC","rDq","$","(","Q"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S{D","bC","rDq","$","(","Q"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S{D","bC","rDq","$","(","Q"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test634.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)