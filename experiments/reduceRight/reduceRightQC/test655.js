





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -19; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"\u0006s\f ":-0.6652328596719839,"?\u0016Òm":-0.16883081979156267,"N³":0,"DË~;2":5,"å]ÙX\u0010":11.826669343773927,"ù¯\u0018JÎ'":true,"\u001bg¶ù}d?-{":"pè§¬±M"}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 30.004550980590494; };
var argument4 = null;
var argument5 = "";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -19; };
var base_0 = [655,893,969,5e-324,122,0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,893,969,5e-324,122,0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test655.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)