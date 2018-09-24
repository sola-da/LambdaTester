





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"\u001dt-E¬®sb¼":"¨","u?Ã":true,"B":[],"*Í":false}; };
var argument3 = true;
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = r_1;
var argument7 = 7.772574217835418e+307;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = ["&","=#l",242,"xY",":$7`:",705,"e^t","h","="];
var argument10 = r_1;
var base_0 = ["Y","yR",")","f","tC",";","D^","*","<9"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y","yR",")","f","tC",";","D^","*","<9"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y","yR",")","f","tC",";","D^","*","<9"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y","yR",")","f","tC",";","D^","*","<9"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test433.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)