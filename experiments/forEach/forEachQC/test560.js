





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 91; };
var argument2 = 2.455515211588697e+307;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -11.720572417690622; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 36.948667560853906; };
var argument5 = ["G","J","|GR"];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -72; };
var base_0 = [595,25,0,82,242,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,25,0,82,242,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,25,0,82,242,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,25,0,82,242,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test560.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)