





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "ô"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = {"655":"","9.126209190889977e+307":5.036922537713808e+305,"":"Fw","2.3412535508078415e+307":""};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -12.554383430242865; };
var argument7 = null;
var argument8 = null;
var base_0 = [893,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,595]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test578.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)