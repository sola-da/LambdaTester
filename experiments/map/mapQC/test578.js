





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 62.118244215848904; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -1.0401731561996863; };
var argument3 = {"655":"","9.126209190889977e+307":5.036922537713808e+305,"":"Fw","2.3412535508078415e+307":""};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 86; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -63.89160460818515; };
var argument7 = null;
var argument8 = null;
var base_0 = [893,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,595]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,595]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test578.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)