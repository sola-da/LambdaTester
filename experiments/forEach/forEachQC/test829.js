





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 22.458636914233665; };
var argument2 = "8ZFN";
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 86.09844564005873; };
var argument5 = null;
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument10 = null;
var base_0 = [705,59,122,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,59,122,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,59,122,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,59,122,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test829.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)