





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = true
base_0[0][6] = false
return a/b+c
};
var argument2 = ["1",100,"P"];
var argument3 = {};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = {"3.7836445744156744e+307":7.37770231576239e+307,"":"@Z"}
argument6[4] = {"607":6.59688942958934e+307,"2.3830800436790582e+306":595,"X>":"","jL":714,"":"","a":1.3679215435546338e+307,"LZ<QJ":"(nyW","1.207395645447451e+308":1.8756677425709575e+307}
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = ""
return a/b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = ["2","o","$","4|","M#T8","!","Tgu","5y","Sb"]
base_3[1][6] = 1.1461921808558745e+308
return a+b+c
};
var argument7 = null;
var argument8 = {"59":213,"403":1.3440340227385305e+308,"":618,"2.3298257383043914e+306":-1,"y":100,"1.000862987305001e+308":5e-324,"-1":"","1.3756585460224015e+308":1.211258978417828e+308};
var base_0 = ["s"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test408.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)