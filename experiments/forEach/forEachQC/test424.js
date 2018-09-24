





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 32; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = [213,122,"8","}6","He",1.7976931348623157e+308,"3"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -93; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [0.3064962138636904,true,-2.9011636830301866,{"Vù":2.8742171048252594},null]; };
var base_0 = [655,627,783,-100,655,59,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,627,783,-100,655,59,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,627,783,-100,655,59,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,627,783,-100,655,59,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test424.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)