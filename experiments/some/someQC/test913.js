





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -19; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 26; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -85; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "7l"; };
var argument6 = null;
var base_0 = [-1,5e-324,969]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,5e-324,969]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,5e-324,969]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,5e-324,969]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someQC/test913.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)