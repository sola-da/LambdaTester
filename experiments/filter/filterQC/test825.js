





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [0.10267200060124071,null,null,false,true]; };
var argument4 = null;
var argument5 = "";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -54; };
var argument7 = {"q":"x","":1.5665244567168993e+308};
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "Õô¯i\u0002\u0003Õ"; };
var base_0 = [607,0,0,242,823,655,213,1.7976931348623157e+308,460,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,0,0,242,823,655,213,1.7976931348623157e+308,460,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,0,0,242,823,655,213,1.7976931348623157e+308,460,82]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test825.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)