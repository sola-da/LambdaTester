





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -50.947363422523374; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 44; };
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = 1.1294186879236828e+308;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 8.78236999661317; };
var argument7 = "";
var base_0 = [">","8"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","8"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">","8"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test446.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)