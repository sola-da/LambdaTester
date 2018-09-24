





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0,0.6941203515879364,0,{"-y­":false,"D\u001c":0},-8,false,-28.804643181853084,true]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -1.090757376088125; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return ["Ã"]; };
var argument6 = true;
var base_0 = [823,714,-100,823,242,607,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,714,-100,823,242,607,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test710.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)