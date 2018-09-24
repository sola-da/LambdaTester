





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[460] = false
return a*b*c
};
var argument2 = "]U`";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = {"126":213,"823":6.237570375107238e+307,"":"","7.208254605478483e+307":"","6.415523593708415e+307":1.4132067461714063e+308,"1.1883861440700653e+308":5.951858978684736e+307,"1.3904615460544467e+308":"8","tH":1.6294192005532328e+307}
return a*b-c
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0500354979187844e+308] = null
argument7[8.748669805137695e+307] = 2.1672315715444382e+307
argument7[627] = {"1":"","25":3.9897467254511427e+307,"403":59,"6.212477823489754e+307":"-&","U3":"","1.703102139996846e+308":"","1.1689206600940957e+308":823,"5.935671139349168e+307":783,"A":8.483331177599505e+307,"":"i"}
return a*b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"8.849152746822866e+307":893,"":618,"l7":"V(","c":3.5492707584077094e+307,"H|":"","<":"S`"}
return a+b+c
};
var argument8 = {"3":1.150336844086699e+308,"25":9.100015555153735e+307,"122":6.269954167190474e+307,"":969,"1.3807670392546284e+308":3.4305557015014304e+307,"L":1.7976931348623157e+308,"1.7976931348623157e+308":8.463103674713091e+307,"1.4077452281865594e+308":2.425901907890853e+307};
var base_0 = [157,595,823,823,823,823,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,595,823,823,823,823,157]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,595,823,823,823,823,157]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,595,823,823,823,823,157]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test163.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)