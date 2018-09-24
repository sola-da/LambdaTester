





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = 705
return a-b*c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
base_1[1] = ""
base_1[9] = 2.4573818587115263e+307
return a/b*c
};
var argument5 = {"242":213,"595":655,"1.7173047913506838e+308":"","":"","2.597744325527853e+307":"","1.6298936253141458e+308":"kR","I":1.2023852948999127e+308};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[969] = {"48":"x","":100,")":"<q","!":"","4.065953143384003e+306":""}
base_2[3][1] = 1.7976931348623157e+308
argument7[49] = true
return a/b+c
};
var argument7 = null;
var argument8 = 1.554681115799677e+308;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[403] = {"1":"","627":"","969":"Fr","":"l","1.4265568782802065e+308":5e-324}
argument11 = {"100":"$","627":"","":213,"k":1.1643509392830561e+308}
return a/b+c
};
var argument10 = null;
var base_0 = [607,"b",1.7976931348623157e+308,"9",823,25]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"b",1.7976931348623157e+308,"9",823,25]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"b",1.7976931348623157e+308,"9",823,25]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test525.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)