





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 97.42453325387126; };
var argument2 = 126;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "E´\nÕrë0\u0012"; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "\u0015ñ7eÕ\n\u000e'"; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 8; };
var argument7 = true;
var argument8 = ["72Ge","B",":aawm=l","A",969];
var base_0 = [1.7976931348623157e+308,25,714,59,126,213,157,82,213,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,25,714,59,126,213,157,82,213,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,25,714,59,126,213,157,82,213,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,25,714,59,126,213,157,82,213,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test405.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)