





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [true,null,1.8478820023241775,5,null]; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 45.889563390482714; };
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -15.464059236019123; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -17; };
var argument7 = null;
var argument8 = r_0;
var base_0 = ["(","KX","(P!","a{"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","KX","(P!","a{"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","KX","(P!","a{"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test121.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)