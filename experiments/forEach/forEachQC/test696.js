





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -87.46859490470462; };
var argument2 = "";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 85.8673796859618; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 69.80492113014564; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [true,0.46232794064798677,true,-3.253359365717282]; };
var argument6 = r_3;
var argument7 = "";
var base_0 = ["0R","mV","M!1x","4*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0R","mV","M!1x","4*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0R","mV","M!1x","4*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0R","mV","M!1x","4*"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)