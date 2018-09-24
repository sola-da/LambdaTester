





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"":-100,"1.0599899729352742e+308":"b","Do":"","D":6.892214557787285e+307}
argument1[3] = [618,783,100,59,843,126,607,627]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1]['d'] = "T?r"
base_1[9] = 157
return a*b-c
};
var argument3 = false;
var argument4 = {"460":8.612759589359129e+307,"705":"","*":"","1.415648066986162e+308":"d","1.2632424724371093e+306":"","5e-324":"Y"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = ["8*","[","f","(GA","`==|0MS%","W","EI<|","`w"]
base_2[4] = {"49":"","705":100,"1.6942302731106475e+308":8.893192138561727e+307,"":1.030915207280413e+308,"o$":3.6360490317751117e+307}
base_2[7] = true
return a/b+c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = {"460":"Y","":"'","N2":1.0461765777594917e+308,"1.368300000019949e+308":"","S-":8.959172345561256e+307,"1.7806379069838817e+308":655}
return a-b+c
};
var base_0 = [595,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test296.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)