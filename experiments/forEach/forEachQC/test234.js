





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = "";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = true;
var argument5 = [595,213,714,59,893,5e-324];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [-0.4122918471631334,0.37364120897508823,-2.3498575515005395,null,10,null]; };
var argument7 = r_2;
var argument8 = [126,460,618,"Rh","VagTm4x8Dod",823,"^3E",242,"V"];
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument10 = {"1.2476062454550694e+308":7.620402657263913e+307};
var base_0 = ["^SA","$","F7","1","5","H","6","R","g","aWl"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^SA","$","F7","1","5","H","6","R","g","aWl"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^SA","$","F7","1","5","H","6","R","g","aWl"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^SA","$","F7","1","5","H","6","R","g","aWl"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test234.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)