





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"O\u0007c\u0016":false,"^\\=á\u0007á¬bì":0,"ß":3,"ã":0,"ÙáÂa¿ÿc~":true,"2ö5":-22,"¥õÜÐ\u001aG\u0003":11}; };
var argument2 = {"":""};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [false,[],false,-7.310450252870416,null,true]; };
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "\u0000"; };
var argument8 = false;
var base_0 = [157,969,25,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,969,25,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test39.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)