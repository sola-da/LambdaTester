





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "%×"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = [607,126,25,49,122,627,618,126];
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -75; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = [157,627,100,5e-324,714,607,843,783];
var argument8 = r_3;
var base_0 = ["&","kB"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&","kB"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&","kB"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&","kB"]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test629.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)