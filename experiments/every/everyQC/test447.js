





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "þ»M«±\u001f\u0004ÈM"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 78; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = null;
var argument5 = 1.5783429739871494e+308;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = null;
var argument8 = r_3;
var base_0 = ["*qez","2GT]`9@","o","z","y","F"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*qez","2GT]`9@","o","z","y","F"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*qez","2GT]`9@","o","z","y","F"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*qez","2GT]`9@","o","z","y","F"]
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
require("fs").writeFileSync("./experiments/every/everyQC/test447.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)