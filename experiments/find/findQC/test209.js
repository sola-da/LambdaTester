





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = 8.714959127351124e+307;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 89; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 76; };
var argument5 = 705;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"Íø$ú°ÏT÷":true,"Óñ`":""}; };
var argument7 = 5e-324;
var argument8 = false;
var base_0 = [460,"D","5","9-L","q"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"D","5","9-L","q"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"D","5","9-L","q"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"D","5","9-L","q"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test209.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)