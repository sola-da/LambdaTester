





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -43; };
var argument2 = ["|4h","S"," ","C","z$","N","?a","K","vu","XF^"];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -20; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -75.78267119956554; };
var argument5 = true;
var argument6 = r_2;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 46.538385831310116; };
var argument8 = null;
var base_0 = [82,403,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,403,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,403,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,403,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test147.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)