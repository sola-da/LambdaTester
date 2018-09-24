





var callbackArguments = [];
var argument1 = r_0;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {",2":-1}
return a-b-c*d
};
var argument5 = r_1;
var argument6 = 3.017303895835011e+307;
var argument7 = [242,59];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = -100
argument7['*c'] = 1.7086590605567908e+308
argument7[655] = null
return a/b+c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.1277822633002616e+308] = {"705":"","":-1,"1.002226951502341e+308":"","1.212695596345221e+308":"","IZ9A":"",":j_":1.238159866829245e+308,"[":2.632565577244094e+307,"3.9542393684932984e+307":6.400633901366201e+307,"n,5s@s":607}
argument9[2] = 2.183004129184668e+307
argument11[403] = ""
return a+b-c*d
};
var argument10 = false;
var argument11 = [595,705,893,126,122,-100,705];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = false
argument13[460] = 9.758642896859369e+307
return a-b/c-d
};
var base_0 = [213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test658.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)