





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 99.21420283662894; };
var argument2 = {"25":"Pi","403":1.2840008892422456e+308,"1.426061396655673e+308":595,"1.5389120886538473e+307":25};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 45.06640780884359; };
var argument4 = {};
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 56.02184540704913; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 44; };
var argument8 = false;
var argument9 = true;
var base_0 = ["X"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyQC/test894.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)