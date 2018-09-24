





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = null
argument2['A'] = {"59":"","655":"Y","}6":"H","3.176191082559868e+306":"","5e-324":"luX","O3":"Qz","tKl`":3.456774195965196e+307,"Rx":"+"}
return a/b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = null
base_1[7][2] = [618,1.7976931348623157e+308,607,25]
argument5['T'] = {"3":157,"25":969,"t7":"T","^":1.5129359166913438e+308}
return a/b/c
};
var argument4 = ["VYWb","?q7","W9v!","Tw","S","GJP","oh"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = {"1.6844824972898562e+308":122,"":"","sw":-1,"_":""}
argument7[893] = "_Y"
argument6[82] = 1.7494974035988604e+308
return a+b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.869573703797622e+307] = null
base_3[3][1] = true
base_3['length'] = null
return a-b+c
};
var argument7 = null;
var argument8 = null;
var base_0 = [655,714,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,714,-100]
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
require("fs").writeFileSync("./experiments/map/mapGen/test365.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)