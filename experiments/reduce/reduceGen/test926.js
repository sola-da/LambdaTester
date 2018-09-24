





var callbackArguments = [];
var argument1 = true;
var argument2 = {"":"i","{j":""};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = [82,783,607,627,783,82,157]
return a+b/c/d
};
var argument5 = true;
var argument6 = r_1;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['Cb'] = ""
argument6[1.1532786076532189e+308] = ""
base_1[6] = null
return a-b*c/d
};
var argument9 = {"0":1.6061134896160631e+308,"655":3.003931020574606e+307,"":"","Q6":"","1.634716166599022e+308":6.039413416088526e+307,"1.3791603011926718e+307":"","1.1930397306004553e+306":1.6592442150189444e+308};
var argument10 = r_1;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = 82
argument11['l&'] = true
return a*b+c*d
};
var argument13 = null;
var argument14 = null;
var argument15 = true;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[3] = false
argument15[3] = null
argument15[403] = 1.6242500782730986e+308
return a*b+c+d
};
var base_0 = ["Z","b","Sk",25,"f",213,157,"r",82,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z","b","Sk",25,"f",213,157,"r",82,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z","b","Sk",25,"f",213,157,"r",82,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z","b","Sk",25,"f",213,157,"r",82,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test926.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)