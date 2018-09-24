





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"655":460,"":"&b","L ":"P5","2.8658677598373907e+307":1.7976931348623157e+308,"3.2604293163384133e+307":5e-324,"Go":"@","-1":"#7","1.7976931348623157e+308":25}
argument2[627] = null
base_0[1] = null
return a*b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
argument5['AO?'] = 403
argument4[627] = null
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['!j'] = [157,59]
base_2[8][0] = ["&","(","%","kQ","H{`f","?"]
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][7] = ["37","_","l8","J[","]","Un"]
base_3[3] = false
argument7['!j'] = {"1":403,"126":6.444829343698777e+306,"1.7779630308401304e+308":"|Y:a(L)h%='BHT6","1.2526505510296426e+308":1.335145991995537e+308,"":"","J**0":"@St"}
return a+b+c
};
var argument6 = false;
var base_0 = [705,82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,82]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,82]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,82]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test17.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)