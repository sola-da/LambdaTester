





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 0; };
var argument2 = false;
var argument3 = [705,969,126,823,607,607,100,705];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 73; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 1.824309887358333; };
var argument8 = {"242":1.0213216005102407e+308,"1.3354124980997118e+308":1.051195395003133e+308,"7.38851814870651e+307":1.6888028834914813e+308};
var base_0 = [0,49,618,714,242,823,100,823,655,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49,618,714,242,823,100,823,655,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49,618,714,242,823,100,823,655,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49,618,714,242,823,100,823,655,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test651.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)