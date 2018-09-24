





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "Þ"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = {"618":6.600764950733917e+307,"8.898477388748005e+307":"","":893,"1.336572281183179e+307":"wA","VWo(?eV":2.8723642384427054e+307};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"æóññÍhÊ\u0000¹":0,"\u001dËDI\u0017":-0.5219471858230007,"ÓM2%":-3.419020885322152,"q?\u000f´":5.482776061258789,"°WÞ":true,"\u0003£z":-22}; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [-1,"-X",893,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapQC/test67.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)