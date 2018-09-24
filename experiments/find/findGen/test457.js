





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"R":"HOX","1.7976931348623157e+308":""}
argument1[3.377960715099946e+307] = {"0":2.682198305006161e+307,"705":1.5649461157878665e+308,"893":"","":2.3057599807013214e+307,"1.2488296558751584e+308":"u","Z":3.374378380047547e+307,"1.010826875121943e+308":"l","2.3212189376878404e+307":893}
return a*b-c
};
var argument2 = 213;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = [705,595,0,25,25]
argument4[1.0500354979187844e+308] = false
base_1[0][6] = ""
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = [157,126,49,100,460,893,655,59]
argument5[3.7668525981726295e+307] = false
return a*b*c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.1881593224845412e+308] = null
return a/b+c
};
var argument7 = false;
var argument8 = {"25":"OW8","":"Pi","1.5854041204989905e+308":"{","w":"","T":-100,"Tz":"","W":122};
var base_0 = [122,100,242,0,25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,100,242,0,25]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,100,242,0,25]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,100,242,0,25]
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
require("fs").writeFileSync("./experiments/find/findGen/test457.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)