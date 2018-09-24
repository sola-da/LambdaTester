





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = null;
var argument3 = [-1,969,823,969,59,714,893,49,25];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 88.96293327685466; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 53; };
var argument6 = null;
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return []; };
var argument9 = null;
var argument10 = null;
var base_0 = ["yCw|","x","u|m","G=","@","J"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yCw|","x","u|m","G=","@","J"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yCw|","x","u|m","G=","@","J"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yCw|","x","u|m","G=","@","J"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test38.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)