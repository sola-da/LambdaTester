





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -12.86684284256221; };
var argument2 = true;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 28; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 84.87997034647472; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 55.35500771245443; };
var argument7 = r_2;
var argument8 = r_2;
var base_0 = [969,242,627,618,1.7976931348623157e+308,100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,242,627,618,1.7976931348623157e+308,100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,242,627,618,1.7976931348623157e+308,100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,242,627,618,1.7976931348623157e+308,100]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test544.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)