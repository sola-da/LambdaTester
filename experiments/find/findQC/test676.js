





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = 618;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 14; };
var argument6 = null;
var argument7 = 1.1481630601556134e+308;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["8","bo9J","j3","#Sv8","H7j","r]xe","B","K","|","Ym"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8","bo9J","j3","#Sv8","H7j","r]xe","B","K","|","Ym"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8","bo9J","j3","#Sv8","H7j","r]xe","B","K","|","Ym"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8","bo9J","j3","#Sv8","H7j","r]xe","B","K","|","Ym"]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test676.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)