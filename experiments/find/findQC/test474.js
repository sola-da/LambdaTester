





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "õ½u\u0001{&C5®"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 58; };
var argument3 = 5.83402441384341e+307;
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -30; };
var argument6 = r_2;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 55; };
var base_0 = [969,714,1.7976931348623157e+308,705,122,82,59,618,607,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,714,1.7976931348623157e+308,705,122,82,59,618,607,783]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,714,1.7976931348623157e+308,705,122,82,59,618,607,783]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,714,1.7976931348623157e+308,705,122,82,59,618,607,783]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findQC/test474.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)