





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][3] = {"2":618,"607":1.1689812330471425e+308,"823":"{R","":"h","5e-324":1.0235003300567473e+307,"i":"","v*e":"11"}
base_0[6][3] = [618,157,1.7976931348623157e+308,157,714,242,5e-324,1.7976931348623157e+308,25,969]
argument2[893] = [25,969,403,122,-1,893,-1,242]
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1.4677087964888306e+308] = [49,126,"i"]
argument3[1] = {"1.7976931348623157e+308":655,"G":"@","":"","2.1009326522071638e+307":1.5255698510340138e+308,"1.621766394936963e+308":0,"1.2266140153064066e+308":49,"I":3.5088629132581944e+307,"X":460,"6.837441941629878e+306":1.0044550649121135e+306}
argument3[3.208837311680636e+307] = null
return a/b*c
};
var argument3 = null;
var argument4 = {"82":823,"157":403,"3k":"A","":"p","1.1373228797381131e+308":"","n":1.0853360488429291e+308,"7.950831507459153e+307":100,"1.1870799762502225e+308":6.606193597452268e+307,"X&Rdr":1.0207582742490703e+308,"`":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = [618,126,0,969,-100,595,893,25,595]
base_2 = null
argument6[1] = {"25":"","":"","s4":"","U":"e","1.6531237203828828e+308":"","1.9406799646468724e+307":1.6295552437667719e+307}
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = null
argument7[618] = null
argument7[5] = ""
return a+b-c
};
var argument7 = "Es:";
var argument8 = null;
var base_0 = ["YWW","%3N(_0","{k","QP2","7?4a",";","BI","1z","T"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["YWW","%3N(_0","{k","QP2","7?4a",";","BI","1z","T"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["YWW","%3N(_0","{k","QP2","7?4a",";","BI","1z","T"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["YWW","%3N(_0","{k","QP2","7?4a",";","BI","1z","T"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)