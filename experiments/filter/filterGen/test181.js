





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = true
argument2[5] = {"5":126,"823":"nS1","ic":3.561884422361337e+307,"6.793951850215456e+306":4.712473309726752e+307,"_7":1.2805631052975962e+308,"2.1106452143828554e+307":2.7275939102763093e+307,"2.0843870603760354e+307":1.3301663428844115e+307,"6.877638990614698e+307":"8U","Xr0Wv?`":1.6119467414952539e+307,"-100":"|("}
argument3[5] = {"126":"","705":1.1582319597782724e+308,"N":1.3674176461986992e+308,"p!":"a3d","":9.35302536294243e+307,"l9":893,"v&@D":2.8994247103683885e+307,"x":"","R":"WDb3j","?9m6;;":595}
return a-b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"5.621840698299661e+307":"","9.510366041849345e+307":"1","GjysCW(o":1.4032250397281194e+308}
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = true
argument6[2] = 157
base_2[4] = {"618":"","1.4794844236278767e+308":403,"U":6.876456022606602e+307}
return a-b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a-b-c
};
var argument7 = false;
var base_0 = [242]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test181.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)