





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 16.04907964741131; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 14; };
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 92.54444828701894; };
var argument5 = {"823":"","}t":3.2789088158878554e+307,"":""};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = {"59":9.622097620557528e+307,"242":"z","I":"]"};
var base_0 = ["?","vtE","Ic",";1;","U","8`="]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?","vtE","Ic",";1;","U","8`="]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?","vtE","Ic",";1;","U","8`="]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?","vtE","Ic",";1;","U","8`="]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test112.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)