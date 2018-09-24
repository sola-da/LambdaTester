





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = {"82":"2","213":893,"403":"mZ","714":"","893":618,"7.990209621568258e+307":157,"8.04990310495041e+307":-1,"":"","p":"D","d8":1.6810557110905536e+308};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -20; };
var argument4 = "$";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 94; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -12.392055921992839; };
var argument7 = null;
var argument8 = ["_","bGH[","O","JRZP","wg","#"];
var base_0 = [157,969,-1,0,242,59,213,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,969,-1,0,242,59,213,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,969,-1,0,242,59,213,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,969,-1,0,242,59,213,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test822.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)