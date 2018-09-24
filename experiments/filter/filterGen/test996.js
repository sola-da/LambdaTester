





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7847438319683965e+308] = {"618":"","843":82,"":""}
argument3[2] = [627,82,783,655,655,714,0,403,126]
argument3[3] = {"59":">","714":"","783":"","o":460,"6.4183065154168e+306":1.7184154437978565e+308,"lc":"","2.2406499523090525e+306":1.7976931348623157e+308}
return a/b+c
};
var argument2 = 0;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.377960715099946e+307] = null
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7][4] = {"213":1.496115423187093e+308,"":"","2.198582783884894e+306":"","1.1806707681945124e+308":"c"}
argument6['jo'] = [100,783,627,403,1.7976931348623157e+308,5e-324,126,607,403,843]
return a*b*c
};
var argument6 = r_0;
var argument7 = "";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['jo'] = {"126":9.498556091016267e+307}
base_3[4][7] = null
return a+b-c
};
var base_0 = [")","^Q","c"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")","^Q","c"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")","^Q","c"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")","^Q","c"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test996.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)