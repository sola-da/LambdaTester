





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -32; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -10.676869982469217; };
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 8.859680000815473; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "\u0002"; };
var argument7 = r_2;
var base_0 = [-1,655,5e-324,655,242,893,-100,49,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,655,5e-324,655,242,893,-100,49,403]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test488.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)