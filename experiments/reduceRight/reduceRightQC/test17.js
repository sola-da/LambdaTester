





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 43.87623265623666; };
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"`ù¤ER­\"":true,"~ýôÏLÇCÿ":0.5070988408326604,"Â=":{"G":-0.6753080240049703},"CE\u0006o":false,"\nR¼v¾":18,"N\u0019\u001fP\u000eq":[0.6519477076898317]}; };
var argument5 = ["Y",122,"_","6","NXJ;"];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "÷ ½ù"; };
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -39; };
var base_0 = [618,627,969,843,627,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,627,969,843,627,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,627,969,843,627,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,627,969,843,627,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test17.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)