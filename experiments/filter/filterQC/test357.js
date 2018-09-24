





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "©Y"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = r_1;
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 5; };
var argument6 = {"1.0962782619539227e+308":655,"1.382486429600844e+308":1.3212068666098698e+308,"(i95":"S+p","Apo":9.051335159139241e+307,"K":5.094771876806349e+307};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["Saf","N","sOwMuo"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
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
require("fs").writeFileSync("./experiments/filter/filterQC/test357.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)