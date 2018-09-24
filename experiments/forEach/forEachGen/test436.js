





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"2.5196119761109496e+307":",","-100":"KRQ#Ii","1.325389531132594e+308":"PrJ8B"}
return a*b+c
};
var argument2 = {"126":-100,"1.6687127014920997e+308":"","3.2582775179885986e+307":5.786394328672572e+307,"":126};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = 8.850872291157513e+307
argument5[4] = {"705":969,"":157,"1.5603354757652818e+308":"z","r":1.9964611185471028e+307}
argument5[59] = [607,714,655]
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = null
return a-b+c
};
var argument5 = {"59":25,"82":1.2770980353247024e+308,"122":"xI","627":"","893":"","z^":"","":213,"k":705};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = 2.705459948762122e+307
argument7[1] = false
argument8[0] = null
return a/b*c
};
var argument7 = -100;
var argument8 = true;
var base_0 = [843,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)