





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -32; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 0; };
var argument3 = 969;
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -53.61066407268249; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = null;
var base_0 = ["&c","N","B_"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&c","N","B_"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/filter/filterQC/test458.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)