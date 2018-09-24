





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "\u0011u\u001b"; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "3"; };
var argument7 = {"1":"","93":"lo","403":-100,"705":1.0135003480084612e+308,"":618,"9.050177264162202e+307":"","1.2271204989851682e+308":969,"1.3762563598095363e+308":"f`d#","7.780138533208252e+306":""};
var base_0 = [")-","eIj","h"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")-","eIj","h"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")-","eIj","h"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")-","eIj","h"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)