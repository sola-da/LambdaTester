





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"®\u001b":0,"m>º'Úu^«":false}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = [82,59,403,49,213];
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -18.057965207652394; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["9",655]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9",655]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9",655]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapQC/test145.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)