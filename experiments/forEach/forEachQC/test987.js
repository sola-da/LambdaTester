





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"w":-0.30786395377299347}; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -92.32527343138361; };
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 87.04694275045033; };
var base_0 = ["*X",969,"_f",893,"w5fx",823,59,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*X",969,"_f",893,"w5fx",823,59,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*X",969,"_f",893,"w5fx",823,59,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*X",969,"_f",893,"w5fx",823,59,627]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test987.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)