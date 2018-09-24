





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"705":3.7690922109360956e+307,"V<":705}
argument2[0] = {"9":1.001705347062233e+308,"126":"","":"","1.3657620703247472e+308":1.1507615407994848e+308,"I":"O","UZE":"_","1.3952186269769712e+308":1.6982669307746574e+308}
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"783":"%"}
argument3[3] = true
return a/b*c
};
var argument3 = [403,"U","_",59,618,607,5e-324,"3:i",783];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ""
base_2[1][2] = ["U","e0#]FX4","5bRbr",157,122,"$","Z","v"]
argument6[3] = null
return a*b+c
};
var argument5 = false;
var argument6 = "{L";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.92397107964922e+307] = {"843":"","969":-1,"k":"n","":"","1.4852099231331216e+308":"T"}
return a+b/c
};
var argument8 = {"0":9.621481433400743e+307,"122":"o","607":"","893":1.5647692511102445e+308,"3.8891171587324823e+307":627,"C":-1,"5-":"","1.3130321063336282e+308":0,"]":""};
var base_0 = ["?","L",")","#","0","y"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?","L",")","#","0","y"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?","L",")","#","0","y"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?","L",")","#","0","y"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)