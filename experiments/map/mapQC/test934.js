





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 86.56716474123509; };
var argument2 = null;
var argument3 = 213;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -5; };
var argument5 = "R";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = r_2;
var argument8 = "1";
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 45.33656668634664; };
var base_0 = [0,242,627,618,823,705,823,100,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test934.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)