





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 92; };
var argument2 = ["Z",49,"ci",25,"I8G","<&","FPB",705];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 0; };
var argument4 = true;
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "ÐÆ¨"; };
var argument7 = {"9.161733308326872e+307":">","O":100,"":""};
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 13.233290758441484; };
var base_0 = [969]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test189.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)