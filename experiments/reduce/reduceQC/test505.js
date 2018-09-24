





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 42.91560146285938; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"V":0,"P±\bÏ":0,"í\rbjù\u0017":false}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -37.45173620288489; };
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = [618,122,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,122,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,122,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test505.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)