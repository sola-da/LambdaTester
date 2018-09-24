





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 4.1056066780135623e+307
base_0[1][3.5329845145600404e+307] = null
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = true
base_1[0][0] = "s"
argument3[618] = false
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.6177106033227046e+308] = null
argument5['V'] = 7.305750975163973e+307
argument4[1.7173047913506838e+308] = "'"
return a-b/c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"242":1.6829422222318822e+308,"9.01105779780182e+307":5.289575960403393e+307,"":8.344626770522465e+307,"1.7504468931015534e+308":"Sq","4.077400941796633e+307":3.307079146139776e+306,"1.7976931348623157e+308":9.324804541442182e+307,"5|?":1.7635310520417641e+308,"4.497122282225607e+307":4.174429261539272e+307}
return a*b*c
};
var argument6 = false;
var base_0 = ["Uz","o"]
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
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Uz","o"]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test633.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)