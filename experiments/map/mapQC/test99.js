





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return ["µ"]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "\u000f"; };
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return ["\u001b",true]; };
var argument5 = {"213":"zBA,Q","":"%J","qC":"","E":82,"7.963456413863362e+307":"","s)F":1.3498293279778207e+308,"-100":5e-324,"BQ":9.146112478984537e+307};
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 55; };
var argument8 = false;
var base_0 = ["pp`","KX",59]
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
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["pp`","KX",59]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test99.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)