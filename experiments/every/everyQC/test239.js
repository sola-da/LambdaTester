





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0.9893251546828363,0,null,5]; };
var argument2 = {"-100":"%","":"","6.548377463322529e+307":403,"7.536227470676309e+307":"9","1.7222197243908715e+308":8.978300786824749e+306};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -69; };
var argument4 = false;
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["P0p","jAa","D#","W8","U","-","s9C^","H","#","ZUUFoMN6"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P0p","jAa","D#","W8","U","-","s9C^","H","#","ZUUFoMN6"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P0p","jAa","D#","W8","U","-","s9C^","H","#","ZUUFoMN6"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P0p","jAa","D#","W8","U","-","s9C^","H","#","ZUUFoMN6"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test239.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)