





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1.4677087964888306e+308] = false
base_0 = [59,213,893,25]
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = ["X","b[","a","z","R8","j","Of","X","I"]
argument4['3Tpj5'] = false
argument4[1] = ""
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = {"783":6.121199654607636e+307,"":25,"1.0902041742059232e+308":5.923727676315281e+307,"9.276128693106102e+307":8.986242296863679e+307,"1.2320466294413898e+308":-100,"3.100469342233111e+307":5.12316390416774e+307}
base_2['length'] = {"122":1.131579817145681e+308,"1.0521059935403118e+308":618,"1.7976931348623157e+308":"IR","q":"8","":1.562766868319593e+308,"-100":969}
base_2[5] = ""
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 1.5139786759268902e+308
base_3[3][3] = {"460":"J","893":"","1.054014476935831e+308":403,"T":655,"1.3791202568297962e+308":4.8248434292932314e+306,"":"Yx2zw>IWn","E":"","6y":3.3021577424999277e+307}
return a*b+c
};
var argument5 = null;
var argument6 = r_0;
var base_0 = ["y","L",0]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y","L",0]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y","L",0]
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test316.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)