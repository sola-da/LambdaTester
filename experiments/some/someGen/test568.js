





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['_W'] = true
argument2['5L'] = {"242":",zS","655":82,"1.0459461485842657e+308":"","":1.7469389638233738e+308,"1.0750765928299672e+308":59,"1.0934752738584236e+308":403,"8.621265013455e+307":8.782625892393215e+307,"4.880445164064345e+307":"","1.601378298187788e+308":""}
base_0[1][8] = [0,242,213,655]
return a/b*c
};
var argument2 = {"213":213,"242":25,"705":4.486644295847683e+307,"714":1.0463121167466199e+308,"":1.398947151296664e+308,"1.6706143966770798e+306":"c"};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = ""
argument5[157] = null
argument4[3] = true
return a*b*c
};
var argument5 = ["}","nD:","pREJ","Wk#*&"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = null
argument6[3] = "dv'D"
base_2[4][7] = 122
return a/b*c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1]['{X'] = ""
return a+b+c
};
var argument9 = true;
var base_0 = ["9M",49,"[oPPTJ",823,-100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9M",49,"[oPPTJ",823,-100]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9M",49,"[oPPTJ",823,-100]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9M",49,"[oPPTJ",823,-100]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test568.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)