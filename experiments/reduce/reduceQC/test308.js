





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 81.73201111796627; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = 6.548420879923111e+307;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = [0];
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return [false,null,0,{"í\b\u001f":0,"M":-0.43754756399921035},-2,false,null]; };
var base_0 = ["C>*","sm2","1d","s","y","G","J","I","M?0"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C>*","sm2","1d","s","y","G","J","I","M?0"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C>*","sm2","1d","s","y","G","J","I","M?0"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C>*","sm2","1d","s","y","G","J","I","M?0"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test308.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)