





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 49.45602258280737; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = r_0;
var argument4 = "";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [true,0,3]; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = null;
var base_0 = [242,618,705,49,893,122,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,618,705,49,893,122,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,618,705,49,893,122,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,618,705,49,893,122,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test487.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)