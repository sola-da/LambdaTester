





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"2":893,"49":"","59":1.025542658383186e+308,"122":"dS1+x|","627":8.656321365197921e+307,"D":"U)>","v":1.3384592348937928e+308}
base_0[9] = true
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = {"100":607,"655":"","6.510153697650721e+307":"","2.2083447724709577e+307":"","":157,"D!":655}
argument4 = "{^"
argument3[1.6798476101238045e+308] = {"q4":"","":"","1.748968401118703e+308":9.468995870635517e+307,"4.0775625693592124e+307":"","7.973741147242261e+307":1.1127275548672738e+308}
return a/b+c
};
var argument3 = false;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = [705,-1,403,823,607]
argument5[0] = null
base_2[3][3] = 969
return a-b/c
};
var argument6 = ["p",460,"Lz>",893,">;","83","4",0,"c",82];
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = [157,"r(","{","n^6",122,"wT"]
return a/b*c
};
var base_0 = ["#","8","M2E",">","V","_Tc"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","8","M2E",">","V","_Tc"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","8","M2E",">","V","_Tc"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","8","M2E",">","V","_Tc"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test594.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)