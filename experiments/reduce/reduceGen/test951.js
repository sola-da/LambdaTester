





var callbackArguments = [];
var argument1 = {"3":1.7976931348623157e+308,"126":9.26183023482987e+307,"":"U_","1.2274012529928546e+308":"","1.4186632865647801e+308":"C","5e-324":"Iz:","rn":"Z"};
var argument2 = true;
var argument3 = {"49":"","":5e-324,"@":1.6929341714646518e+308,"7b>oq":1.5826461333892259e+308,"-100":655,"1.4892626880093093e+308":9.995753352732617e+307,"1.3236514599399895e+308":126,"6.008784502033812e+307":"oO=9"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.612812046173122e+308] = {"-100":""}
return a/b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1280896016417002e+307] = 595
argument6[6] = null
return a/b+c+d
};
var argument6 = true;
var argument7 = "fv";
var argument8 = ":U";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.999889602676851e+307] = "n4"
return a*b/c+d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = 1.5366059757186494e+307
base_3[5] = true
base_3[1][0] = ["gd|","e"]
return a+b+c+d
};
var argument11 = r_2;
var argument12 = [100,607,157,607,893,618,403,0,655];
var base_0 = [783,705,969,-100,893,823,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,705,969,-100,893,823,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,705,969,-100,893,823,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,705,969,-100,893,823,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test951.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)