





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "ÕG»1"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -8.657132313542792; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 46; };
var argument4 = "";
var argument5 = 1.3834154181425196e+308;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 42; };
var argument7 = 126;
var base_0 = [714,100,705,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,100,705,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,100,705,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,100,705,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test243.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)