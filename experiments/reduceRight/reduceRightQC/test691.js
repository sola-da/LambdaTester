





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 36; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 59; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 41; };
var argument4 = "a";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [49,607,893,82,843,607,82]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,607,893,82,843,607,82]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,607,893,82,843,607,82]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,607,893,82,843,607,82]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test691.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)