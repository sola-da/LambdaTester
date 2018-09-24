





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 15; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"\u001b\u0014à-Ä²ä\f}":0,"Ò":0.7227678419945878,"´\u0011ñÑ":"¯=","6Ð\u0018\t2[y":true,">B8\u000fw\u0007ÃM":true,"ÁÀç¨zDXËÙò":-11,"¯":5,"°]":16,"\u0001º0¼'Ð":false,"û":64.62205700969105}; };
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 24.045425561411605; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 73; };
var base_0 = [460,5e-324,403,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,5e-324,403,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,5e-324,403,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test831.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)