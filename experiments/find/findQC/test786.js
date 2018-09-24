





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -99; };
var argument2 = r_0;
var argument3 = [157,969,82,969,242,126,460,595,157];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 85.41450625847682; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -91.98427790113416; };
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = [969,595,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,595,213]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,595,213]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,595,213]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test786.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)