





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [-0.6388312745508034,false,-2,-7.347004395710132,-12.29762208197927,"l\u001a\u0012\u001c"]; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -39; };
var argument5 = null;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 62.684695394053435; };
var argument8 = "";
var base_0 = [49,122,100,823,893,595,1.7976931348623157e+308,607,595]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,122,100,823,893,595,1.7976931348623157e+308,607,595]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,122,100,823,893,595,1.7976931348623157e+308,607,595]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,122,100,823,893,595,1.7976931348623157e+308,607,595]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test238.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)