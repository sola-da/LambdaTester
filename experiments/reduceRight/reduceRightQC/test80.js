





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return {"[¯":"¯","H>.":0,"-'¿":"ÌÐÀ","Ô­½ôç¶ÿ":false,"á'»æ\f":false,"\u000eô\u001f":-28.99665676469423}; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = ["C","1q^","@SGWZ",")","GE5M-!455",893,"PI"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","1q^","@SGWZ",")","GE5M-!455",893,"PI"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","1q^","@SGWZ",")","GE5M-!455",893,"PI"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test80.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)