





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -37.922747464628; };
var argument2 = null;
var argument3 = [-1];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -67.16370048275107; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = {"126":1.0446870721149087e+308,"969":"(",";{":893};
var argument8 = 3.398302943970551e+307;
var base_0 = [0,49,0,25,595,969,655,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49,0,25,595,969,655,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49,0,25,595,969,655,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49,0,25,595,969,655,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test533.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)