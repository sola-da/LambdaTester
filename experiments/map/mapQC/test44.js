





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "«ªb}"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = 843;
var argument4 = {"3.019233712083943e+307":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 11; };
var argument6 = 1.1314020046276985e+308;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -6; };
var base_0 = [823,607]
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
var base_2 = [823,607]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test44.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)