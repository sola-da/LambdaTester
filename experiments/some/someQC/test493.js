





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\u000e¤_M":0.3452138225931012,"ué¦±ÆBÖ¥Ü":5.635651718652243,"ÒeWB\u0007L±3p":true,"};(»\rm}":3.838078880123147,"¨\u0006":-12,"Ø":-14,"P\u0011½j¨G½":false,"3{\u0015dCÝ":41}; };
var argument2 = true;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 45; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 4; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "&¢¶»²H"; };
var argument8 = null;
var base_0 = ["nj","%","]","*<n","i",">A","T","^","|f;","e%u!"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["nj","%","]","*<n","i",">A","T","^","|f;","e%u!"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["nj","%","]","*<n","i",">A","T","^","|f;","e%u!"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["nj","%","]","*<n","i",">A","T","^","|f;","e%u!"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test493.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)