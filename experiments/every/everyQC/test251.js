





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -7.497366424572038; };
var argument2 = [25,969,655];
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -60.62666784043722; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [783,122,25,893,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,122,25,893,122]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,122,25,893,122]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,122,25,893,122]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test251.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)