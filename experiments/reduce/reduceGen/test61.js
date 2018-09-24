





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"460":9.392511797395458e+307,"":3.640591554624933e+307,"`r8[B":"Xh","U":"6","1.4493068194254503e+308":"M","05n6":"g+","1.5825384517169325e+307":"@"}
argument2[3] = {"618":618,"":""}
return a*b*c-d
};
var argument2 = null;
var argument3 = ["C4","*"];
var argument4 = null;
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = true
argument5[1.1277822633002616e+308] = [823,618,126,460,49,59,627]
base_1[4] = [969,242,705,82]
return a-b*c*d
};
var argument8 = {"969":122,"":"","s":"4","zy(":1.3853159234701984e+308,"Yq{":25};
var argument9 = "Xe=";
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = 6.12130189984419e+307
base_2[0][9.12287810829114e+307] = false
base_2 = "b"
return a+b*c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"213":627,"843":"","v":122,"@x_R<":"J4","":823,"3)":9.397381740384988e+307}
return a*b/c+d
};
var base_0 = ["ky","T","B@Y","M$m","B"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ky","T","B@Y","M$m","B"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ky","T","B@Y","M$m","B"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ky","T","B@Y","M$m","B"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test61.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)