





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -44.837710430028245; };
var argument2 = false;
var argument3 = "";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return ">DË¿:ê¦ê"; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 10; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -4.857370715334275; };
var argument8 = false;
var base_0 = ["N","c","J","-","<","B2"," *R["]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","c","J","-","<","B2"," *R["]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","c","J","-","<","B2"," *R["]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","c","J","-","<","B2"," *R["]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test729.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)