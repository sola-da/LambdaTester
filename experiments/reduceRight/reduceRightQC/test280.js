





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 35.324873544215606; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -95.52573653963188; };
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -57; };
var argument6 = true;
var argument7 = null;
var base_0 = [607,":j","yI",1.7976931348623157e+308,126,627,82,"U",0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,":j","yI",1.7976931348623157e+308,126,627,82,"U",0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,":j","yI",1.7976931348623157e+308,126,627,82,"U",0]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,":j","yI",1.7976931348623157e+308,126,627,82,"U",0]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test280.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)