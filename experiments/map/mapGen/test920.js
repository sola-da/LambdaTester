





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[607] = {"655":213,"705":"]('","":""}
base_0[0][1] = 8.033071128007201e+307
base_0[3][1] = {"5":9.71820580652999e+307,"87":"k}(","705":"","714":655,"783":"","":"","1.2830593097447842e+308":157,"I":403,"BT":"J","G":"A"}
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1]['d'] = null
return a-b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.208837311680636e+307] = {"714":2.0015005629820081e+307,"":""}
return a+b*c
};
var argument5 = r_2;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2][6.452074605254766e+307] = null
argument7 = true
base_3[1][4] = {"25":49,"1.6724591779982856e+308":"ZJ","":1.7246701909864858e+308,"1.0681700200642838e+308":"","1.7976931348623157e+308":"","1.5830451660589084e+308":"kp>","1.719076369665679e+308":"{<"}
return a+b*c
};
var argument8 = r_0;
var argument9 = null;
var base_0 = [714,100,82,607,823,122,25,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,100,82,607,823,122,25,403]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,100,82,607,823,122,25,403]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,100,82,607,823,122,25,403]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test920.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)