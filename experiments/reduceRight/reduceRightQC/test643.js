





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 33.34184377395382; };
var argument2 = 8.52674926281674e+307;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 16.325073649726395; };
var argument5 = ["#","%L|",705,607,49,"P",714];
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "g£ü"; };
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 29; };
var argument10 = true;
var argument11 = r_0;
var base_0 = [49,5e-324,893,627,843,100,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,5e-324,893,627,843,100,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,5e-324,893,627,843,100,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,5e-324,893,627,843,100,595]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test643.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)