





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -10; };
var argument2 = r_0;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 6; };
var argument7 = 82;
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 99.62993010068514; };
var base_0 = ["-","(K","eL8E","1","}{3e","G","R","Y"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-","(K","eL8E","1","}{3e","G","R","Y"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-","(K","eL8E","1","}{3e","G","R","Y"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-","(K","eL8E","1","}{3e","G","R","Y"]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyQC/test697.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)