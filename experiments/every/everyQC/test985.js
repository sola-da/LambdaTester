





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "l§\"ÉX\u001c\u0004"; };
var argument2 = 3.6992800149278203e+307;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "c-íd\u0006"; };
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -35; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -82.40458608622686; };
var argument7 = [783,705,823,-100,"|",843,"#","+?",607,"k"];
var argument8 = 1.6404803817758063e+308;
var base_0 = [595,122,893,705,49,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,122,893,705,49,122]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,122,893,705,49,122]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,122,893,705,49,122]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)