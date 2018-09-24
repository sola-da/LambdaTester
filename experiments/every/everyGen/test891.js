





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.4183178393969103e+306] = false
base_0[9] = {"823":"","":460,"1.5641958860791993e+308":"*E"}
argument3[4] = [":","5;",242,783,607,"^",126,"JW","N"]
return a-b*c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = null
argument5[0] = ""
base_1[1] = null
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"25":"","":"t5"}
base_2[3] = [618,"zp"]
argument7[0] = {"607":"","783":3.8714264381932547e+307,"1.7826452853665667e+308":82,"4.0010009728136144e+306":4.135260780928624e+307,"W":"","S":""}
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.268696794505825e+308] = ""
argument7[403] = {"627":3.491534976507222e+307,"1.4718359223909e+308":1.7253973582840042e+308}
return a-b+c
};
var argument7 = r_1;
var argument8 = null;
var base_0 = ["F","z(","N","9","I","C1"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","z(","N","9","I","C1"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","z(","N","9","I","C1"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","z(","N","9","I","C1"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)