





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 32.245978145856256; };
var argument2 = [122,705,823,126,714,-100,126];
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -57; };
var argument5 = null;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = r_2;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument10 = r_1;
var argument11 = 823;
var base_0 = ["8,","EF"]
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
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapQC/test311.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)