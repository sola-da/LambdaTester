





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ""
argument3[59] = false
argument3 = true
return a-b-c
};
var argument2 = {"0":1.8503792365731718e+306,"8":">","":"","5.568050351909642e+307":126,"1.207571114456403e+308":"","]|I":"&","9.497000078503222e+307":"$7}fuC","7Hm":7.187992355975075e+307,",`HBU":"ih"};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = [49,403,126,595,157,460,595,122]
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = null
argument5[2] = ""
argument6[1.1881593224845412e+308] = null
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.3130321063336282e+308] = false
argument8[5] = null
return a+b+c
};
var argument7 = null;
var argument8 = {"59":3.3261606794509395e+307,"":122,"Z":"u*cPT","1.7976931348623157e+308":"","1.0481697287293546e+308":9.341699386811066e+307,"5.109450816993741e+307":"a"};
var base_0 = [157,969,"Onk",",Y","t",">",655,843,"!%H["]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,969,"Onk",",Y","t",">",655,843,"!%H["]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,969,"Onk",",Y","t",">",655,843,"!%H["]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,969,"Onk",",Y","t",">",655,843,"!%H["]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test530.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)