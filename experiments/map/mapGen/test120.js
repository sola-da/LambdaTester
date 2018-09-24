





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"126":823,"655":59,"m]":"","":"","S":705,"GC":"","4.933648721393459e+307":"]q1'","1.2815697667636599e+308":1.7761587611120402e+308,"5.714999868427859e+306":"&"}
return a-b-c
};
var argument2 = 3.5172266438073614e+307;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = 893
base_2[6] = null
base_2 = ""
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"627":714,"5.52361067122452e+307":"","1.7756775979683735e+308":"","I":"","1.7976931348623157e+308":":"}
base_3 = "e"
base_3 = {"82":"9k","714":"","Kf3,vl":"<3@","1.3396624260604411e+308":"d","":"V","|":1.0694816101822888e+308,"i":100}
return a/b*c
};
var argument7 = "";
var argument8 = false;
var base_0 = [82,705,82,"4",25,"g5,c"]
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
var base_2 = [82,705,82,"4",25,"g5,c"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test120.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)