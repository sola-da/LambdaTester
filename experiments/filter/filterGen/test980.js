





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = null
argument2[157] = "H"
return a-b-c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.268696794505825e+308] = null
argument4[1.7847438319683965e+308] = {"0":";N","25":1.3348629217806317e+308,"893":1.3457179107585614e+308,"":1.7976931348623157e+308,"5.487500724592283e+307":213,"!elz":"","=":"]|i"}
return a+b*c
};
var argument4 = {"":618,"n":1.7976931348623157e+308,"c":"'","3.816718561366743e+307":"|"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7348060980845463e+308] = [969,460,82,595,59]
base_2[5] = {"59":157,"126":823,"403":"-","":3.014924511830729e+307,"5e-324":9.224780225181817e+307,"5.77725031246461e+307":122,"1.199437593504499e+308":126,"7.801984413355982e+307":7.762785809952655e+307,"1.3896863572067084e+308":618}
argument7[3.7154103611117224e+307] = true
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [627]
argument7[7] = "w1Be@"
return a-b-c
};
var base_0 = [655,"U","7",242,"<","eN","pi"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"U","7",242,"<","eN","pi"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,"U","7",242,"<","eN","pi"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test980.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)