





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -62.99053024859942; };
var argument2 = ["9","^"];
var argument3 = "8";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 95.08024493425869; };
var argument5 = 595;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 6.109131651196553; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 28.329541832330495; };
var argument8 = r_0;
var argument9 = 1.7976931348623157e+308;
var base_0 = [49,157,"7PG","T",403,100,714,"v","}t5"]
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
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test337.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)