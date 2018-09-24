





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = false
argument2[4] = {"D%":3.4180941228106606e+307,"=":"","b{(na":"","S":"pzp","@&":2.9881532916168127e+306,"":"-","6.718736043067616e+306":"k","4.679331694918509e+307":"","5.711919236719437e+307":""}
return a*b/c
};
var argument2 = "yhEo";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = null
base_1[3] = 4.334830888447417e+307
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = [82,49,0,25]
argument5[4] = ""
return a-b*c
};
var argument5 = ["pp`","KX",59];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"82":7.963456413863362e+307,"du":823,"%J":"qC","":"s)F","1.3498293279778207e+308":-100}
argument7[2] = 1.7976931348623157e+308
base_3[1] = null
return a+b*c
};
var base_0 = [823,242,0,5e-324,618,242,122,0,607,0]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,242,0,5e-324,618,242,122,0,607,0]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,242,0,5e-324,618,242,122,0,607,0]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,242,0,5e-324,618,242,122,0,607,0]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test37.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)