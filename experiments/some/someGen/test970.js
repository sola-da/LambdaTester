





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['a8r['] = 82
base_0[4][7] = false
argument2['_W'] = false
return a+b*c
};
var argument2 = 0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[157] = ["ZI[q","S|wO","e","G","YC","{","O$"]
base_1[3][4] = {"1.1204148544218632e+308":"","":1.6701656559056523e+308}
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = {"627":5.401539140066686e+307,"":"","1.7976931348623157e+308":""}
base_2[4][7] = 3.584600882163947e+307
base_2[9] = {"1.2682501933752116e+308":595,"":"N4","1.47826617149884e+308":714}
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = null
return a*b/c
};
var base_0 = [893,157,595]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,157,595]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,157,595]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,157,595]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test970.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)