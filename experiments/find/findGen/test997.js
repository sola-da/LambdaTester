





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = 1.3169808272274302e+308
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6.949630915607762e+307] = null
return a/b-c
};
var argument3 = false;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1]['['] = null
base_2[2] = 4.122145271689418e+307
argument7[100] = {"":8.053062120498675e+307,"1.7976931348623157e+308":""}
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[607] = null
return a-b+c
};
var argument7 = {"705":8.494883045976644e+307};
var argument8 = {"-100":607,"":"","b":6.860148931703959e+307,"1.1044957965291827e+305":4.3337105007915345e+306,"1.6995945557890252e+308":"","5e-324":"E","9.3223965527426e+307":"O","6.48555023139802e+307":126,"3.6714451175256204e+307":1.3427643952227934e+308,"8.11681377888082e+307":607};
var base_0 = ["g",823,0,"6-(",1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g",823,0,"6-(",1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g",823,0,"6-(",1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g",823,0,"6-(",1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test997.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)