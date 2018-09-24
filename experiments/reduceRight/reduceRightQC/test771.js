





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return " O"; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 86.31496514570051; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = null;
var base_0 = ["bh","CT","Su","1^","Q b3",":","_T","f","na",");<%e"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bh","CT","Su","1^","Q b3",":","_T","f","na",");<%e"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bh","CT","Su","1^","Q b3",":","_T","f","na",");<%e"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bh","CT","Su","1^","Q b3",":","_T","f","na",");<%e"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test771.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)