





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"0":"WPG","82":"","607":1.7865305879727257e+308,"9.876632004293613e+307":595,"5.024524815253774e+306":"{","":213,"1.4434796145529947e+308":1.7976931348623157e+308}
argument3[3] = {"969":59,"N":893,"4.9809123135093974e+306":1.021604671304674e+308,"1.005353556549177e+308":82,"1.7585840927924631e+308":1.2981965569233835e+307,"5.827203115547258e+306":59,"C)Z":"","n":49,"4X":""}
base_0[8] = [843,403,82,49]
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ""
return a*b*c
};
var argument3 = 823;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][823] = [714,705,213,655,714,25]
argument7[2] = [242,126,5e-324,893,59,655,25]
argument7[3] = null
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = null
return a-b/c
};
var base_0 = [242,618,823,"@",213,"p",213,"a<x9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,618,823,"@",213,"p",213,"a<x9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,618,823,"@",213,"p",213,"a<x9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,618,823,"@",213,"p",213,"a<x9"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test345.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)