





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -39.63236013155467; };
var argument3 = null;
var argument4 = "";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -26; };
var argument7 = 8.862043553828517e+307;
var argument8 = "";
var base_0 = ["Uj","_S@:","r|?0","-","D ","N","u","79","CDhv,"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Uj","_S@:","r|?0","-","D ","N","u","79","CDhv,"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Uj","_S@:","r|?0","-","D ","N","u","79","CDhv,"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Uj","_S@:","r|?0","-","D ","N","u","79","CDhv,"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test407.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)