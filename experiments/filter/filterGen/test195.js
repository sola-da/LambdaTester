





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = 1.4384671396839787e+307
argument2[6] = ""
base_0['length'] = ""
return a-b*c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[714] = {"49":"","618":"","":1.3140441804100565e+308,"s`":"","1.1456891210750304e+308":"","U":126,"S":""}
base_1[3][1.3434821406183095e+308] = 59
return a/b*c
};
var argument5 = {"655":"","7.284749047804906e+307":-100,"":"","1.055827169763908e+308":1.7490476485416068e+308};
var argument6 = 1.1697661047198294e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = false
argument9[-100] = 607
base_2[9] = ""
return a+b/c
};
var argument8 = 7.822536643055203e+307;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[3.7154103611117224e+307] = ""
argument11[4] = null
base_3[9] = {"783":"","6.265309145796475e+307":1.8070569095600382e+307,"":"","nK":0,"1.4945595947620836e+308":6.139898594650695e+307}
return a*b*c
};
var argument11 = r_1;
var base_0 = [49,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,122]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test195.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)