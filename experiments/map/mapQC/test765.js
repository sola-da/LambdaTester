





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -6; };
var argument2 = null;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 66.2286673012591; };
var argument5 = {"627":714,"893":"","-1":"wu","B'5":"","":-100,"^>":"","SI*":"","1.447001375801038e+308":1.1446973942704105e+308,"8.028223200280866e+307":5e-324};
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 43; };
var argument8 = false;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 98.07889352189008; };
var base_0 = [893,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test765.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)