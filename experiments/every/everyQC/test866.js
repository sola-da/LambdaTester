





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 54.36972167512513; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -6.6575638176632035; };
var argument4 = 3.589324981946776e+307;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 42.1248175294199; };
var argument6 = {"0":"","59":"","607":"x","1.320882434916278e+308":"u","":"U","1.3902410217656567e+308":82};
var argument7 = true;
var base_0 = [618,823,607,655,969,705,595,607]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,823,607,655,969,705,595,607]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,823,607,655,969,705,595,607]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,823,607,655,969,705,595,607]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test866.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)