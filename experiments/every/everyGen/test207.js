





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ""
argument1 = {"122":403,"783":25,"893":"","TPfG(R%-+B":9.449042894534303e+307,"":157,"1.713968015404747e+308":"GY<r{9w","{":"y","F":4.7296674506077894e+306,"xO":""}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = 2.8531765173324456e+307
argument3 = "7j,"
argument3 = "ox"
return a+b*c
};
var argument3 = "}";
var argument4 = 3.1556351578813015e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = [893,"q8",1.7976931348623157e+308,157,"J","3"]
argument5 = 7.087096041942396e+307
argument6[0] = ""
return a-b/c
};
var argument6 = {"0":"","4":"0G4","":"=dx"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.3156198695370476e+307] = 4.473015851018007e+307
argument8[3.3156198695370476e+307] = null
base_3 = false
return a-b*c
};
var argument8 = null;
var base_0 = [25,82,893,655,893,460]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,82,893,655,893,460]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,82,893,655,893,460]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,82,893,655,893,460]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test207.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)