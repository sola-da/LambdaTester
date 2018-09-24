





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -41; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = 100;
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 68.57912038668479; };
var argument7 = {"49":"","126":100,"3.8136957096100557e+307":"","2.076788738991872e+307":1.3430715615088426e+308};
var base_0 = ["h","=","U","[@WD","H",",B","0","6"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h","=","U","[@WD","H",",B","0","6"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h","=","U","[@WD","H",",B","0","6"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h","=","U","[@WD","H",",B","0","6"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test998.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)