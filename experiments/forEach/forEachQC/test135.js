





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 48.80653524447807; };
var argument2 = {"Uc0d":3.7461300985629674e+307,"":-1,"C":"Tt","i":""};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "åñ×Sí"; };
var argument4 = null;
var argument5 = [969];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -77.03602733873119; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 20.49884371120143; };
var base_0 = [714,823,1.7976931348623157e+308,783,893,655,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,823,1.7976931348623157e+308,783,893,655,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,823,1.7976931348623157e+308,783,893,655,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,823,1.7976931348623157e+308,783,893,655,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test135.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)