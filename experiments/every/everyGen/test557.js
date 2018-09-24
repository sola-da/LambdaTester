





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"6.185504012265995e+307":"G","":"H[","1.3329855959430815e+308":1.3823571317389934e+308}
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = 1.2038701277575844e+308
argument4[2.4183178393969103e+306] = false
base_1[4] = {"100":1.1177793484593658e+308,"403":"","595":"g","4.083728733904201e+307":3.7259444344756405e+307,"'":"","":"",";]":1.7141449962547415e+308,"1.0259543637880594e+308":"","l":5.701404070991624e+307}
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = [823,"-i1k","jf+",893]
return a/b*c
};
var argument4 = r_2;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = {"618":"","2.2711420745846814e+307":460,"6.185032327365461e+307":-100,"":"H","1.4795119140249012e+306":126,"*g|Bd6":"ICXiG"}
return a*b-c
};
var argument6 = ["Q!",213,627,",H","u4","ea*","^K;D",607,126,"m"];
var base_0 = [49,714,403,460,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,714,403,460,893]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,714,403,460,893]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,714,403,460,893]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test557.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)