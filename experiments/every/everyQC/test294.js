





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [null]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -60.01437271876344; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -9; };
var argument4 = 7.979448169369819e+307;
var argument5 = "8";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [0,0,false,"|Dy",9.160405020095787,22,null,32.513038890189115]; };
var argument7 = "";
var base_0 = ["E","?LS{J","9","Y","Y","J","g","?","2"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E","?LS{J","9","Y","Y","J","g","?","2"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E","?LS{J","9","Y","Y","J","g","?","2"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E","?LS{J","9","Y","Y","J","g","?","2"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test294.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)