





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "¢S?\u0013Wß"; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 77; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -86; };
var argument6 = {"705":2.8158657725109266e+307,"893":122,"969":"","pz":0,"w":"","9.753150754308375e+307":"c","t":"",";T":""};
var argument7 = true;
var base_0 = [-1,969,0,59,59,0,-100,82,"@F>"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,969,0,59,59,0,-100,82,"@F>"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,969,0,59,59,0,-100,82,"@F>"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,969,0,59,59,0,-100,82,"@F>"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test897.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)