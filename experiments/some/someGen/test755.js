





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7.004668712060429e+307] = [49]
argument3[122] = null
return a*b-c
};
var argument2 = {"25":2.2757478238050276e+307,"595":1.7236291666069155e+308,"":"m","$*I":"","T":"Q[","1.7183003114072636e+308":1.5492529237100377e+308,"lk":5e-324,"*":126,"x,":"*"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = null
argument4 = "SY;9"
return a+b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = 1.0015207005283614e+308
argument6[5] = [82,"45{o","bh","H","ec0V","hm>","{<f","w-"]
argument6[5] = "|"
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = null
base_3[3] = null
argument7[1] = {"59":1.7127248263833243e+308,"893":"baR'","2.21336812596088e+307":"QS","1.0501924440300694e+308":"",":v":1.0646797216741616e+308,"bA":1.6680098096777818e+308}
return a-b-c
};
var argument7 = "";
var base_0 = [242,157,969]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,157,969]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,157,969]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,157,969]
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
require("fs").writeFileSync("./experiments/some/someGen/test755.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)