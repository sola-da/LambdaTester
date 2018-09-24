





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = {"969":"W"," ":"","":"","[":213,"ty":""}
return a+b/c*d
};
var argument2 = null;
var argument3 = null;
var argument4 = true;
var argument5 = true;
var argument6 = 1.2590275080371524e+308;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.359136872727139e+308] = {"595":"*F","":"`","9.394712200724362e+307":"","%":"","b:":607,"adI":""}
base_1[1][3] = ""
argument5[5] = ""
return a/b*c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = null
argument10[0] = true
return a*b+c/d
};
var argument9 = null;
var argument10 = null;
var argument11 = "";
var argument12 = null;
var argument13 = true;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = 0
base_3[7] = ["yWrhnurv","V9","PD@","c","L`-","-n{Z3p"]
return a+b/c*d
};
var base_0 = [100,100,655,25,122,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,100,655,25,122,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,100,655,25,122,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,100,655,25,122,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test366.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)