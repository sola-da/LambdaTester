





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = 705
base_0[3][1.3434821406183095e+308] = null
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = true
return a-b-c
};
var argument3 = false;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = {"":3.1587836178080293e+307,"ky<s":6.384155510149061e+307}
argument6[6] = ""
base_2[0][0] = null
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][4] = {"0":25,"25":"","618":1.7209663855777379e+308,"655":59,"":783,":%w":"","p":"","^mH":"k:"}
argument6[7.92397107964922e+307] = true
return a+b/c
};
var argument7 = {"59":3.4082116683154837e+307,"122":"","157":"E&VU","627":2.5248873095117227e+307,"ib":"n)","":8.990881002069011e+307,"1.21047679913154e+308":1.3459434685544234e+308,"3.600774611621207e+307":"0 ","4.551635105147872e+307":""};
var base_0 = [82,-1,242,618,-1,607,1.7976931348623157e+308,655,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-1,242,618,-1,607,1.7976931348623157e+308,655,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-1,242,618,-1,607,1.7976931348623157e+308,655,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-1,242,618,-1,607,1.7976931348623157e+308,655,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test310.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)