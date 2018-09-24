





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -97.05752503991991; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -89.46651085521424; };
var argument4 = {"":"feJcP"};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -70.23765730899356; };
var argument6 = {"":100};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = [618,823,783,595,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,823,783,595,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,823,783,595,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,823,783,595,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test887.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)