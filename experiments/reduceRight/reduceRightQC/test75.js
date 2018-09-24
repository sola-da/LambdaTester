





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 92.03748418248952; };
var argument4 = "uF";
var argument5 = 126;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -35.85291854702872; };
var argument7 = 1.5640962072223414e+307;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"\u000f½\u0001":"ú","ÊÎOEÅÚÿH":-3,"wá®ûP\räÖ":true,"J'Õ?{|ª":true,"\u001b,\u0014\u001a«¹ ":true}; };
var argument9 = ["Z#","0Q2","M","C<P"];
var base_0 = [82,0,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,0,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,0,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,0,460]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test75.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)