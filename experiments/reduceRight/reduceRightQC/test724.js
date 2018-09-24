





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 46; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [0.7429879997341702,-0.963921136849359,null,false,9,2,null,11.974901157379657]; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "¨"; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 72; };
var argument6 = r_3;
var base_0 = [122,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,595]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test724.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)