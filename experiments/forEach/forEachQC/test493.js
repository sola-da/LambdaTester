





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -50.0380908756818; };
var argument2 = true;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = null;
var base_0 = ["nj","%","]","*<n","i",">A","T","^","|f;","e%u!"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["nj","%","]","*<n","i",">A","T","^","|f;","e%u!"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["nj","%","]","*<n","i",">A","T","^","|f;","e%u!"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["nj","%","]","*<n","i",">A","T","^","|f;","e%u!"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test493.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)