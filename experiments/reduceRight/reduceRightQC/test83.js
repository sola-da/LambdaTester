





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 84; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "\fÐ6Ë0(µ~à/"; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -58.71196596026642; };
var base_0 = ["NT_:Tu;","Q","5","`"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["NT_:Tu;","Q","5","`"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["NT_:Tu;","Q","5","`"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["NT_:Tu;","Q","5","`"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument4)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test83.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)