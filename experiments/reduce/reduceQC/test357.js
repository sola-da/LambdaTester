





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -59.2411008986474; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = r_1;
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "YgÇXó)\u0018M "; };
var argument6 = {"1.0962782619539227e+308":655,"1.382486429600844e+308":1.3212068666098698e+308,"(i95":"S+p","Apo":9.051335159139241e+307,"K":5.094771876806349e+307};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "\fï"; };
var base_0 = ["Saf","N","sOwMuo"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Saf","N","sOwMuo"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Saf","N","sOwMuo"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Saf","N","sOwMuo"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test357.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)