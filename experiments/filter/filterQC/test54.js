





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = ["%","Un","R","y","*","nx<<M?P64","t","Ak"];
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 62; };
var argument5 = null;
var argument6 = 9.729284432654409e+307;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -66.6012428708501; };
var argument8 = 607;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument10 = r_2;
var argument11 = r_0;
var base_0 = [655,595,213,1.7976931348623157e+308,122,607,893,0,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,595,213,1.7976931348623157e+308,122,607,893,0,893]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test54.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)