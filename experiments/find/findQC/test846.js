





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -73; };
var argument2 = "f8";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 40; };
var argument4 = [607,"q7",100,"h",49,":","0"];
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = false;
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return -92.88017929954609; };
var argument10 = null;
var argument11 = true;
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findQC/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)