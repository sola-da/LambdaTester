





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = 8.780019304432418e+307
argument2[2] = 100
return a*b+c*d
};
var argument2 = "I+";
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.1869172855352885e+307] = 607
return a*b-c/d
};
var argument5 = 1.0438584540030065e+308;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[90] = true
argument9[2] = 843
return a-b-c*d
};
var argument8 = -100;
var argument9 = "";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
return a-b-c/d
};
var argument11 = null;
var base_0 = [893,0,843,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,0,843,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,0,843,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,0,843,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test430.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)