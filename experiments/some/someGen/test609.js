





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 1.4199734953057777e+308
base_0[2] = null
argument3[122] = false
return a+b+c
};
var argument2 = null;
var argument3 = {"25":607,"157":"_6","618":"7q(","":705,"1.0777040215416302e+308":3.8390800913176774e+307,"`8X":4.505814523155087e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = false
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.004668712060429e+307] = 5.537219623284008e+307
argument5[4] = [213,783,126,59,607,25,59]
base_2['length'] = true
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = null
argument6[0] = 2.8379177783916387e+307
base_3[1]['{X'] = ["^","wKI<",5e-324,783,655,213]
return a-b/c
};
var argument7 = ["No","N|X2","m$","{","e-t"];
var base_0 = [843,122,705,783,823,823]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,122,705,783,823,823]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,122,705,783,823,823]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,122,705,783,823,823]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test609.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)