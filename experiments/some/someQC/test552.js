





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 38.4799982588369; };
var argument5 = 1.4602689746250422e+308;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "\u0002\u0013ýËJS7\u001a"; };
var argument7 = "#9m+";
var base_0 = [823,59,655,59,5e-324,-100,618,126]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,59,655,59,5e-324,-100,618,126]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,59,655,59,5e-324,-100,618,126]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,59,655,59,5e-324,-100,618,126]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test552.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)