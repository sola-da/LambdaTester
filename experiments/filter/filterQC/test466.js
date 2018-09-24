





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "mU\u0000õ¢E8"; };
var argument2 = {"1.246302954270579e+308":4.35334353006166e+307,"1.7569174451014329e+308":"","1.9123092256742032e+307":"","3.7922006012763905e+307":"B"};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 68; };
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "æø³ ²é¶"; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "Ñ"; };
var base_0 = [618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)