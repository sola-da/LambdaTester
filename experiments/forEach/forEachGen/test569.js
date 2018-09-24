





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['-'] = 122
argument3[5] = -100
argument2[0] = "f7Z,"
return a*b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[59] = {"100":969,"":"","z":"`r4","]":""}
base_1[7] = 3.952087976880908e+307
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = "r:G"
base_2[0][823] = null
base_2[0][1] = ["9M",49,"[oPPTJ",823,-100,"o","g",242]
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4034744228995816e+308] = {"157":1.7469389638233738e+308,"655":82,"1.0750765928299672e+308":59,"1.0934752738584236e+308":403,"8.621265013455e+307":8.782625892393215e+307,"4.880445164064345e+307":"","1.601378298187788e+308":""}
base_3[0][1] = [0,242,213,655]
return a*b*c
};
var argument6 = {"213":213,"242":25,"705":4.486644295847683e+307,"714":1.0463121167466199e+308,"":1.398947151296664e+308,"1.6706143966770798e+306":"c"};
var base_0 = [618,893,59,126,969,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893,59,126,969,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893,59,126,969,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893,59,126,969,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test569.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)