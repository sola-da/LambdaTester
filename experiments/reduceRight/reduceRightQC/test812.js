





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "D"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"èÅ,":-0.17395376194396328,"Pè%a\u001erh":0.9487296510991277,"µ\u0002\u001e":-2.8998715913953275}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -91.91867688100743; };
var argument4 = true;
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = true;
var base_0 = [-1,59,843,157,-100,893,783,100,-1,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,59,843,157,-100,893,783,100,-1,403]
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
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test812.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)