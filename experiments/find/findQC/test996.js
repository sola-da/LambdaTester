





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -17.56412412466821; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 59.85424561011443; };
var argument5 = [783,618,1.7976931348623157e+308,969];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 5; };
var argument7 = r_2;
var base_0 = [49,242,1.7976931348623157e+308,82,1.7976931348623157e+308,49,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,242,1.7976931348623157e+308,82,1.7976931348623157e+308,49,627]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,242,1.7976931348623157e+308,82,1.7976931348623157e+308,49,627]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,242,1.7976931348623157e+308,82,1.7976931348623157e+308,49,627]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findQC/test996.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)