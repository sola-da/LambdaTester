





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 51; };
var argument2 = {"627":"","969":"","0PQ`":"l@a","":82,"7.946828847605489e+306":"@7","1.7870480133868133e+308":"","Ow[":157,"NT":"","3B":2.2377323461703997e+307};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -77.81539743994163; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -37.321031758398114; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["X%",969,";F","WQu","KI","#]Y",59,607,-100,"pf"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapQC/test731.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)