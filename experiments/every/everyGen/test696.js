





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = 783
base_0[0][1] = [655,460,843,460]
base_0[0] = 8.065436459749574e+306
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[122] = {"627":-100,"":"","1.7598446004261243e+308":"s","6.960615974593301e+307":"",">v[$%":3.650309931575668e+307,"Y":"I"}
argument3[122] = {"0":"EDzv","59":9.769991451578944e+307,"-100":618,"X9":6.129389492924566e+307,"GV":"","":"","`jL{":893,"8.860575838731721e+307":6.774374258810923e+307,"1.5046565786052023e+308":2.410954668532999e+307}
return a-b/c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = {"25":1.272190706536128e+308,"126":"Vh","3.579007301704811e+307":"|6uy","":969,"1.7895952194157582e+308":4.950006497063123e+307,")Px":1.2701405499360306e+308}
return a+b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = true
base_3[6] = [157,"<^","z","B0CcY",1.7976931348623157e+308,"J",893]
argument7[783] = 1.913808814065794e+307
return a*b/c
};
var argument7 = r_0;
var base_0 = [100,655]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,655]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,655]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,655]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)