





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "lÖÜ"; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 27; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [true,0.6400655285904544,null,"!",null]; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 77.42501310393443; };
var base_0 = ["$","mq","V","O","N","NJ"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","mq","V","O","N","NJ"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","mq","V","O","N","NJ"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","mq","V","O","N","NJ"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test136.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)