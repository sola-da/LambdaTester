





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "\u0014 ¯!"; };
var argument2 = 8.620773955534261e+306;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 89; };
var argument5 = false;
var argument6 = 8.245407995341608e+307;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 7.54941943231775; };
var argument8 = r_2;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [126,82,783,705,607,595,-1,783,893,157]
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
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test290.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)