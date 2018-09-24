





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 44; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"Ï\r÷Vö":0.5926538026342913,"±ër&Ê#É\u0013¿":[],"ìb¸W\u000e´ÙT\u001c":-1.0438023228088147,"[\u0005NF\u0001\"\u001e":"ä\u000b","\u000eÕ\nWK¦":8,"eÞvØãÌçgb":19}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -96.8382759443265; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -27.923559086258543; };
var argument6 = null;
var base_0 = [49,25,783,49,59,403,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,25,783,49,59,403,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,25,783,49,59,403,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,25,783,49,59,403,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someQC/test569.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)