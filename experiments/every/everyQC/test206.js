





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 20.37153362530386; };
var argument2 = r_0;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 4; };
var argument7 = true;
var argument8 = "";
var argument9 = function() {
 callbackArguments.push(arguments) 
 return -57; };
var argument10 = null;
var base_0 = [-1,100,823,714,1.7976931348623157e+308,783]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,100,823,714,1.7976931348623157e+308,783]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,100,823,714,1.7976931348623157e+308,783]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,100,823,714,1.7976931348623157e+308,783]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test206.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)