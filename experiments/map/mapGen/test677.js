





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1881593224845412e+308] = null
argument3[7] = [705,100,969,1.7976931348623157e+308,157,783,655,25,82,595]
argument3[1.0546776681946723e+308] = ""
return a+b*c
};
var argument2 = ["RL]*geh(YU_","ZoFl"];
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = ""
return a*b-c
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2]['f'] = {"5e-324":"","9.455497056454374e+307":"SF","2.6374764135483565e+307":"","f":213,"3.591120840655074e+307":3.601109429274992e+307,"":"otv"}
return a-b-c
};
var argument8 = false;
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][3] = 25
argument12[403] = true
return a+b+c
};
var argument11 = null;
var argument12 = r_3;
var base_0 = ["D","c","#h","aY",100,"W"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","c","#h","aY",100,"W"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","c","#h","aY",100,"W"]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)