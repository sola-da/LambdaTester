





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = "Eet"
argument3[4] = {"705":-100,"7.258202682260309e+307":5e-324,"@":3.3750765785904754e+307,"@I":"","n7":618,"9.023271089377334e+307":""}
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.7668525981726295e+307] = 100
base_2[0][3] = [618,122,655]
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = {"126":">k","893":1.421000725113173e+307,"1.4858560770357317e+308":3.432427303751148e+306,"4.2474711777140506e+307":1.7976931348623157e+308,"1.4117716193852176e+308":783,"9.690556815078837e+307":1.646400461184632e+308,"4.899103819789114e+307":"7"}
argument5[1.399309004356655e+308] = ""
argument5[2] = true
return a*b/c
};
var argument5 = "";
var argument6 = [783,-1,213,714,82,0,823];
var base_0 = [-1,1.7976931348623157e+308,969,213,1.7976931348623157e+308,714,893,-100,969]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,1.7976931348623157e+308,969,213,1.7976931348623157e+308,714,893,-100,969]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,1.7976931348623157e+308,969,213,1.7976931348623157e+308,714,893,-100,969]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,1.7976931348623157e+308,969,213,1.7976931348623157e+308,714,893,-100,969]
var r_3= undefined
try {
r_3 = base_3.find(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test406.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)