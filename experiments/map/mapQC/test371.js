





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 7.3789825568698175; };
var argument2 = {"823":"","n":655,"":"","=A4":"","1.496636726212936e+308":122,"7.690620117095441e+307":",","+6":242};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -47; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 88; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"\u000e":"\u001f","\u001ek`ØMßfÕd":"Ú","ù":false,"Ñ¦·\u001e$«":2.946422100366229}; };
var argument7 = r_2;
var base_0 = ["m",122,"G","_","SUrN","3uX"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
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
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test371.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)