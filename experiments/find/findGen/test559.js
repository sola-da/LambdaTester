





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.0500354979187844e+308] = true
argument3[969] = ["7"]
argument2[627] = ["H",460,705,"yZ","(sCc",655,"pR",0,126]
return a-b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = 1.3527475404728839e+308
argument5[893] = null
argument4[3] = ["o","td"]
return a*b+c
};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.399309004356655e+308] = false
argument8[6] = 9.912281748392567e+307
base_2[0][2] = {"783":"?Um+","1.2141193218636959e+307":5.074445219794249e+307,"1.6496452698489395e+308":"","eiZX(_T^":969,"":213,"Pk":3.5512277209310213e+307,"t":"","8.881959842233924e+307":969}
return a/b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][4] = null
argument7 = ["G","e",",<@",">xs","y","R","q"]
return a+b/c
};
var argument8 = r_0;
var base_0 = ["[A","e","e","v","@!`","&",25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[A","e","e","v","@!`","&",25]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[A","e","e","v","@!`","&",25]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[A","e","e","v","@!`","&",25]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test559.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)