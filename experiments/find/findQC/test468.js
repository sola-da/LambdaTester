





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = "";
var argument3 = 6.428853121698219e+307;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = true;
var argument6 = "xkA";
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -85; };
var argument8 = null;
var argument9 = "";
var argument10 = function() {
 callbackArguments.push(arguments) 
 return {"/V\u0011m3":-0.9784966883725483,"*ñ\u0017óR¤1_Ä":true,"\u0016­\u001e+":[null],"y,¾":1.7037368559514598,"b¾©#Þ0Ö*p":false,"²ð¥":true,"¾%R\u0006":26}; };
var base_0 = [595,59,460,25,893,5e-324,655,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,59,460,25,893,5e-324,655,783]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,59,460,25,893,5e-324,655,783]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,59,460,25,893,5e-324,655,783]
var r_3= undefined
try {
r_3 = base_3.find(argument10)
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
require("fs").writeFileSync("./experiments/find/findQC/test468.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)