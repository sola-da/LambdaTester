





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 16; };
var argument2 = true;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 62; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 31.882719635811707; };
var argument8 = null;
var base_0 = [82,126,59,213,969,100,714,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,126,59,213,969,100,714,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,126,59,213,969,100,714,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,126,59,213,969,100,714,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test293.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)