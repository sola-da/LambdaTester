





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "À\\Ús\f"; };
var argument2 = null;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 86; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [null,0.4736890928745776,-2,null,true]; };
var argument7 = r_0;
var base_0 = ["W0","q","GEv","@UF",")","MgQCvM","g","S)"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W0","q","GEv","@UF",")","MgQCvM","g","S)"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W0","q","GEv","@UF",")","MgQCvM","g","S)"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W0","q","GEv","@UF",")","MgQCvM","g","S)"]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test672.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)