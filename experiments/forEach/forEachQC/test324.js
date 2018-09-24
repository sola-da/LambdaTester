





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 86.90019311668442; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [0,null,1.736341747766125,-2,null]; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return []; };
var argument7 = null;
var base_0 = ["]","q","T`","Dv","u","ow","56","ck7Mm","P"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","q","T`","Dv","u","ow","56","ck7Mm","P"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","q","T`","Dv","u","ow","56","ck7Mm","P"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]","q","T`","Dv","u","ow","56","ck7Mm","P"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test324.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)