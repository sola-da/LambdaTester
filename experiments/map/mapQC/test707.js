





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = {"403":4.142637405808717e+307,"655":"kqS","9.913435090905976e+307":"D","":1.0752793939860246e+307,"5.2066588622237055e+307":"","cf":403};
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 12; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["s","p","Q",618,"+Gn",157,783,"^",100,"O"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s","p","Q",618,"+Gn",157,783,"^",100,"O"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapQC/test707.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)