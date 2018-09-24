





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [-0.1284831795295498,null,false,null]; };
var argument2 = [595,595];
var argument3 = 1.3077288855575457e+308;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -18; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = false;
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = [82,783,714,126]
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
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,783,714,126]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterQC/test213.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)