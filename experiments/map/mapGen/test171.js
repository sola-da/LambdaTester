





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = ";"
base_0[3] = ""
return a/b/c
};
var argument2 = {"213":"`q","618":"","893":8.890689500689119e+307,"":"","1.7635741883131193e+308":403,"_N":4.86273452254867e+307,"-100":"","1.1290319456342857e+308":2.808850358062499e+307,"2.807890356169022e+307":1.446934342735146e+308};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = null
argument4[2] = [893,126,5e-324]
argument5[1] = {"126":213,"823":6.237570375107238e+307,"":"","7.208254605478483e+307":"","6.415523593708415e+307":1.4132067461714063e+308,"1.1883861440700653e+308":5.951858978684736e+307,"1.3904615460544467e+308":"8","tH":1.6294192005532328e+307}
return a-b*c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[618] = [59,0,49,0,595,843,843,655]
argument7[0] = null
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = ""
return a*b-c
};
var base_0 = [82,59,242,242,5e-324]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,59,242,242,5e-324]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,59,242,242,5e-324]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,59,242,242,5e-324]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test171.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)