





var callbackArguments = [];
var argument1 = true;
var argument2 = 4.630804814161914e+307;
var argument3 = {"q'":6.211970475563672e+307,"1.1475286777122616e+307":"v$","":1.2389553981454226e+308,"4.638379498409257e+305":157,"-1":"h"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[9] = 5e-324
return a-b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = 1.7976931348623157e+308
argument6[2] = {"59":157,"":783}
base_1[2] = {"627":1.4121401248545185e+308,"2.8761033558992356e+307":100,"":"z"}
return a+b*c*d
};
var argument6 = 1.6080333778111018e+308;
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {";]G":"","1.3601459596537403e+308":1.7165672081247875e+308,"2.71641840135245e+307":1.193235771921279e+307}
base_2[1][3] = "Q"
base_2[0] = 1.1325299397150693e+308
return a/b/c/d
};
var argument10 = 893;
var argument11 = r_3;
var argument12 = 1.911532013357299e+307;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 1.0911737169806672e+308
argument12[2] = 122
return a*b*c-d
};
var base_0 = [25,82,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,82,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,82,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,82,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test251.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)