





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 36.03247073321138; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"bY,":true,"ú":false,"«ÈN×b2":"C"," QhÚ":false,"À¸÷q8§":true,"#Ò&´ÿÙ\u00111F":6.087531885666331,"è":0.025596275042409466}; };
var argument5 = null;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -9; };
var argument8 = null;
var base_0 = [82,969,1.7976931348623157e+308,714,0,25,595]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,969,1.7976931348623157e+308,714,0,25,595]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,969,1.7976931348623157e+308,714,0,25,595]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,969,1.7976931348623157e+308,714,0,25,595]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test834.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)