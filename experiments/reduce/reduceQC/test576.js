





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 13.628969654996649; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 41; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = null;
var argument7 = {"1.5119003302622145e+308":"","^adY":1.0082549705433318e+308,"8.274995176889602e+307":2.588590070148694e+307};
var base_0 = [126,-1,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,-1,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,-1,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,-1,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test576.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)