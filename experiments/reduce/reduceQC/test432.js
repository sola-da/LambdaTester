





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 35.95662880455532; };
var argument2 = 783;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -38.69884236092993; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -50.127112752371715; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = false;
var base_0 = ["!","QQ","`","+e","E","AY","xrq"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","QQ","`","+e","E","AY","xrq"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!","QQ","`","+e","E","AY","xrq"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!","QQ","`","+e","E","AY","xrq"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test432.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)