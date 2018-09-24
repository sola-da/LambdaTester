





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['3Tpj5'] = [-100,618,893,213]
argument3['V'] = 5.70738966066775e+307
return a*b/c
};
var argument2 = false;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = null
argument6[7] = {"25":"g3B7j","655":"k","1.4479047415466848e+308":"",")7-is":1.1096366359901752e+307,"p$o":705,"{":"T^8","":7.827818656902757e+307,"k%":"","1.7063930088939048e+308":""}
base_1 = "#"
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = [843,59,595,595,627,893,213,126]
argument5[3] = {"25":"`","":4.653953032424624e+307,"se":1.3437893374356598e+308,"9.576203933359992e+306":"","Z":1.4146518062337058e+308,"1.644068161243328e+308":"","ld}":1.3411280588579277e+308,"L":403}
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['3Tpj5'] = 1.3733035403068762e+308
argument7[49] = null
return a-b-c
};
var base_0 = [213,460,126,25,25,893,82,714]
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
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,460,126,25,25,893,82,714]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,460,126,25,25,893,82,714]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test737.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)