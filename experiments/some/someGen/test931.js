





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7.004668712060429e+307] = ""
argument3[0] = null
argument3[2] = ["+-","W","kU-","Sw","J","1*#sEL","8","FA"]
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][0] = {"pY":1.009456425002758e+308}
return a/b*c
};
var argument3 = [0,403,705];
var argument4 = {"627":5.150664199589535e+307,"705":5.809037757140014e+306,"c!<KQ":"sM","3.383019941512079e+307":1.2869225739664422e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = null
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = 1.5783797580211373e+308
argument7[8] = null
base_3[7] = {"49":595,"82":4.537666885285886e+307,"":8.941944037367477e+307,"1.6023661199798497e+306":"1>8|`-","}":8.015843070493376e+307}
return a+b-c
};
var argument7 = null;
var base_0 = ["T?","&",403,"A",213]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T?","&",403,"A",213]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T?","&",403,"A",213]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T?","&",403,"A",213]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test931.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)