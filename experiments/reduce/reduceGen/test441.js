





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1280896016417002e+307] = true
base_0[1][3] = [403,126,618,49,783,"`3bT8@b",595]
return a-b+c+d
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = true
return a*b-c+d
};
var argument5 = r_0;
var argument6 = 655;
var argument7 = null;
var argument8 = [618];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[627] = ""
argument7[1] = {"0":783,"403":"","618":627,"705":893,"":"","}":";","7.689698304396642e+307":618,"1.1592136243117762e+308":"M","V":"kx*"}
return a/b/c/d
};
var argument10 = null;
var argument11 = null;
var argument12 = [0,"#","=","q","WQd","!",25];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['HMm'] = {"823":"s'F","":"","3.6135176810109425e+307":1.3404897283762971e+308,"1.0078584778555912e+307":783,"C":126,"#":"","R":655,"1.004981965595309e+308":"w1{"}
return a+b-c*d
};
var base_0 = [783,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test441.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)