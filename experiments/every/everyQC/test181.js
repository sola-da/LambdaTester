





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 36.985774383412064; };
var argument6 = "7Q";
var argument7 = r_1;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [595,1.7976931348623157e+308,607,25,843]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,1.7976931348623157e+308,607,25,843]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,1.7976931348623157e+308,607,25,843]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,1.7976931348623157e+308,607,25,843]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test181.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)