





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return []; };
var argument2 = null;
var argument3 = {"0":9.600160771377692e+307,"1.194976613272339e+308":"","":1.2724843141356236e+308,"1.0267894125529564e+308":" ","Sk":213};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 21; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 25; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -89.52388535414751; };
var argument7 = true;
var base_0 = ["!","T","vr","<V","F["]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","T","vr","<V","F["]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!","T","vr","<V","F["]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test297.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)