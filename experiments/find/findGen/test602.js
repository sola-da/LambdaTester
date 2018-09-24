





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[705] = 1.4444516310756959e+308
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.0500354979187844e+308] = {"655":"!","":"g3=","4.330026102563986e+307":1.3057861926161424e+308}
base_1[8] = "^"
return a+b-c
};
var argument3 = null;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {"59":655,"100":6.586888326772212e+307,"126":595,"213":"","1.7976931348623157e+308":3.773705318901634e+306,"{@":"","q":"@Q","7.054761201392777e+307":122}
argument5[3.377960715099946e+307] = ["`",0,213,"_3","f"]
base_2 = {"157":157,"1.228479507406466e+308":1.2774387974472828e+308,"1.3085097901900093e+308":"","p3":49,"":""}
return a-b/c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[25] = [460]
base_3[0][3] = [893,"P",0]
argument8[705] = "="
return a+b/c
};
var argument8 = r_2;
var argument9 = {"":1.629317229225538e+308,"1.4196618299537738e+308":3.276632958947695e+307,"'a":0,"<":"RX,-","s`":""};
var base_0 = ["+",627,403,1.7976931348623157e+308,705,969,1.7976931348623157e+308,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+",627,403,1.7976931348623157e+308,705,969,1.7976931348623157e+308,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+",627,403,1.7976931348623157e+308,705,969,1.7976931348623157e+308,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+",627,403,1.7976931348623157e+308,705,969,1.7976931348623157e+308,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test602.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)