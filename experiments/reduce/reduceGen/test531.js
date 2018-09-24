





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = "D";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = 4.752857690060982e+307
return a+b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = ""
base_1[0][4] = null
return a+b*c-d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = null
argument8[2] = 1.6455038899429677e+308
argument7[2.1869172855352885e+307] = 7.135520050307592e+307
return a*b+c-d
};
var argument8 = true;
var argument9 = null;
var argument10 = r_3;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = 969
return a/b*c*d
};
var base_0 = ["H;","O",";","j_","Cl,g0","s)"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H;","O",";","j_","Cl,g0","s)"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H;","O",";","j_","Cl,g0","s)"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H;","O",";","j_","Cl,g0","s)"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)