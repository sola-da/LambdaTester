





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -51.32300413701796; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 28.983320293280144; };
var argument3 = false;
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return []; };
var base_0 = [969,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,242]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test129.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)