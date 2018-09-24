





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -14; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [true,"ù",null,null,true,null,-3.280516198860833,40.92543513771636]; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"õË":false,"@^ð\u0014":-8,"cæòÑe":19}; };
var argument5 = 2.248588450662409e+307;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "Ü\u0015âUÆñ"; };
var base_0 = ["N","X-khH","i","A<","$mu","MrIj","?"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","X-khH","i","A<","$mu","MrIj","?"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","X-khH","i","A<","$mu","MrIj","?"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","X-khH","i","A<","$mu","MrIj","?"]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test306.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)