





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -79; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = "M";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "­ÚU"; };
var argument5 = {"213":4.06065835296461e+307,"":")","sl4ma":"","U":893,"1.5080089121973847e+308":-100,"w+1p":"","-1":"KH"};
var argument6 = 714;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["o","M"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","M"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","M"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","M"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test285.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)