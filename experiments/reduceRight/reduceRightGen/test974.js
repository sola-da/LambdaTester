





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"714":"","C":"ji","1.2643245856574963e+308":3.4849033548167434e+307,"":"ps","B[":"Uh","7.45002454990192e+306":"o9e"}
base_0[0][0] = false
argument2[3.286160553564105e+307] = {"5":"","100":122,"4.416201217036348e+307":"^","8.981995369175624e+306":"","G":618,"J;9m":1.3986806777762802e+307}
return a/b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = null
base_1[1][2] = {"49":"","893":2.1430740425488367e+307,"1.1601255530230612e+308":"","1.6146094612738882e+307":122,"":"","k":"l7>HK","1.3635580837215288e+307":"","5.480167096524801e+307":843}
argument3[1.0050602206045617e+308] = {"823":714,"8.137235697766916e+307":"","":""}
return a+b+c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = {"82":1.0302849491542091e+308,"":"`","i":-1,"1.7529433812244037e+308":1.6412413462967146e+307}
argument4[-1] = ""
return a*b*c*d
};
var argument4 = 122;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ["3","Hn","C","PlW&","B","mFG"]
base_3[0][2] = 242
base_3[4][1.7976931348623157e+308] = true
return a+b*c+d
};
var argument6 = 595;
var argument7 = r_1;
var base_0 = [607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test974.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)