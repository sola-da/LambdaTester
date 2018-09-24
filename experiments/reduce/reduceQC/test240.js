





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -96.26718436188915; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"W":" ","Sëæ\u0004V":-0.2073240347705081}; };
var argument3 = "i";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -25; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"#þÒa\\úUÒö":true,"\u000bévJz\u0007<°":-0.6046187825323663,"Ü":"Ðß\u0016","Ct\u001d!@Å¯":8,"Á\n\u0016Nd":true}; };
var argument6 = true;
var argument7 = true;
var base_0 = [655,25,"j","F"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,25,"j","F"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,25,"j","F"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test240.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)