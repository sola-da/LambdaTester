





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -10.755572034330951; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "(y©"; };
var argument4 = ["+","Y",",","x",843,"!","(",893];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = 3.227804599986039e+307;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [595,242,823,100,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,242,823,100,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test966.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)