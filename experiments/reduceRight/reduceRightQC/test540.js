





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = ["k",49,893,25,"I","T",595,1.7976931348623157e+308,"c`"];
var argument3 = "x";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"ê;\u001eÝÏ¶\u0007\u0001":true,"":0,"_":4,"×Ä":"3","¼k*":14,"gD":true,"\u0004°²q\u0000$G":-66}; };
var argument6 = ["1",705];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = true;
var base_0 = ["a",126,100,"D"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a",126,100,"D"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a",126,100,"D"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test540.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)