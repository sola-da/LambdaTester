





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 69; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 29; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "f&v"; };
var argument6 = [")%e2Q7",">","8Y","3","K","wm*","wE","Xdo(CM","?W","nw"];
var argument7 = r_2;
var base_0 = [242,59,-1,157,595,100,122,122,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,59,-1,157,595,100,122,122,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,59,-1,157,595,100,122,122,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,59,-1,157,595,100,122,122,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test257.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)