





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0.7615516640034334,"",true,2.4876499358978688]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "äP\u0016"; };
var argument3 = "g";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "à{@wC"; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 38; };
var argument6 = 59;
var argument7 = 1.2096007804966637e+308;
var base_0 = ["%","@$","s"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","@$","s"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test35.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)