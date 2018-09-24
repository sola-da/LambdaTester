





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = true
base_0[5] = "Z"
return a/b/c
};
var argument2 = {"607":6.59688942958934e+307,"2.3830800436790582e+306":595,"X>":"","jL":714,"":"","a":1.3679215435546338e+307,"LZ<QJ":"(nyW","1.207395645447451e+308":1.8756677425709575e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = ""
base_1[0] = null
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = {"1.7976931348623157e+308":783,"7.355295867698028e+307":""}
base_2[5] = "|"
return a+b*c
};
var argument5 = 893;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][2] = {"714":"","893":7.063592940080099e+306,"":2.0193924980391694e+307,"y":3.349129975955231e+307,"5.179715405294594e+307":"","7.563870071961434e+307":122,"?":"","1.1853401553743871e+308":""}
return a/b-c
};
var base_0 = [783,"1",100,"P","!YT9",-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"1",100,"P","!YT9",-100]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"1",100,"P","!YT9",-100]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"1",100,"P","!YT9",-100]
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
require("fs").writeFileSync("./experiments/map/mapGen/test412.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)