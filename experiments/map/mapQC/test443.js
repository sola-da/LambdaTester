





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 36.048812221836315; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -30; };
var argument3 = r_0;
var argument4 = {"`mUA":3.634788422839765e+307,"1.2293960853138824e+308":"","k":"","l''":1.1810375657549696e+308};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -20; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -73; };
var argument7 = null;
var base_0 = [843,823,59,893,59,655,1.7976931348623157e+308,705,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapQC/test443.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)