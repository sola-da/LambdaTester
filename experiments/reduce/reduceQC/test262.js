





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 76.9433967702827; };
var argument2 = ["]nx","4","Jl","}N |","`p#","j","ldXL]:","ko5n"];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 34.749500191773144; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -29.868137005653097; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 9; };
var argument7 = r_3;
var argument8 = [157,783,823,627];
var base_0 = ["AP","9<<_o","OU_",":","Nr","`","{","J8","<W,"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AP","9<<_o","OU_",":","Nr","`","{","J8","<W,"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["AP","9<<_o","OU_",":","Nr","`","{","J8","<W,"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["AP","9<<_o","OU_",":","Nr","`","{","J8","<W,"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test262.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)