





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = {"157":";","460":1.1975773311661912e+308,"":618,"2.7794592975097733e+307":1.2960284157390719e+308,"1.1893031039768922e+308":"k'","1.6306166461012328e+308":"","dy":"","s":-100,"1.4025581202546616e+308":5.695019928134125e+306,"Ytf":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
base_0[2] = {"25":1.1707740163161644e+308,"460":100,"714":5.615830258472743e+307,"1.4330196488043946e+308":460,"":"","d9":"Ti"}
return a-b/c+d
};
var argument5 = true;
var argument6 = [213,242,783,618,403];
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [714,403,783,126]
return a*b*c+d
};
var argument9 = true;
var argument10 = 1.279720465824862e+308;
var argument11 = [607,59,0,49];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = 607
argument10[2] = null
return a*b-c+d
};
var argument13 = {};
var argument14 = r_2;
var argument15 = r_0;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 59
return a+b+c-d
};
var base_0 = [714,242,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,242,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,242,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,242,59]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test57.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)