





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 15.89295620367508; };
var argument2 = true;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "ô\t\u0004õ^\u0003ÔÂ"; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {}; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -72; };
var argument7 = [0,122,25,607,893];
var base_0 = ["Ud4","o","m","|","z","dE",")","aT&","YD"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ud4","o","m","|","z","dE",")","aT&","YD"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ud4","o","m","|","z","dE",")","aT&","YD"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ud4","o","m","|","z","dE",")","aT&","YD"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test343.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)