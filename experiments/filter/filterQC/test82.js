





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -51.15287566799323; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = 122;
var argument5 = {"1.3525357518767477e+308":"l","":1.7976931348623157e+308,"1.3518712305500887e+308":6.365050243952113e+306,"1.2477798521558563e+307":"Af","9.25371612310208e+307":""};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = ["IrY","%","-b7b"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["IrY","%","-b7b"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["IrY","%","-b7b"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test82.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)