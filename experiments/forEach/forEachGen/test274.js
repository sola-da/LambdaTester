





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = {"100":823,"":1.1074254225837321e+307,"d":"G","#r":1.041806788712079e+308,"yTFIP!h":0}
argument1[7.92397107964922e+307] = true
argument2[4] = ""
return a+b/c
};
var argument2 = false;
var argument3 = {"0":0,"49":"","2.2644180101362187e+306":"r(","":"","*":"","UC":1.336795683832682e+308,"7.323532442126835e+307":460,"4.888245967460216e+307":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = null
argument5[2] = {"1.5352462342840703e+308":""}
return a/b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][823] = "ye"
base_2[9] = true
return a/b*c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2][783] = 655
return a+b/c
};
var base_0 = ["?x",25,705,"b",783,49,"^",-100,"V","E"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?x",25,705,"b",783,49,"^",-100,"V","E"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?x",25,705,"b",783,49,"^",-100,"V","E"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?x",25,705,"b",783,49,"^",-100,"V","E"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test274.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)