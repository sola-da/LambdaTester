





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "#X­"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 44; };
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = r_2;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "*aßïDöÛ*?"; };
var argument7 = false;
var argument8 = null;
var base_0 = [893,82,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,82,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,82,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,82,595]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test307.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)