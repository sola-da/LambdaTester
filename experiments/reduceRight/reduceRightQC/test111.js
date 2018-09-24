





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 83.53894798201809; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "N\u0006\u0006ÿö\u0007"; };
var argument3 = r_1;
var argument4 = 1.4199797204466717e+308;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = 627;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = ["57"];
var argument9 = false;
var base_0 = ["oN","S","}","1X","8d64j","{#"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oN","S","}","1X","8d64j","{#"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["oN","S","}","1X","8d64j","{#"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["oN","S","}","1X","8d64j","{#"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test111.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)