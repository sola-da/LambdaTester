





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 60.916706909728724; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -32.97636336070806; };
var argument3 = null;
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -80.69274052659452; };
var base_0 = [-1,714,59,5e-324,655,823,242,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,714,59,5e-324,655,823,242,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,714,59,5e-324,655,823,242,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,714,59,5e-324,655,823,242,-1]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapQC/test100.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)