





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 51; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -84; };
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = r_2;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 45; };
var argument7 = "";
var argument8 = "";
var base_0 = [1.7976931348623157e+308,157,126,242,82,0,783,460,126,82]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,157,126,242,82,0,783,460,126,82]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,157,126,242,82,0,783,460,126,82]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,157,126,242,82,0,783,460,126,82]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test472.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)