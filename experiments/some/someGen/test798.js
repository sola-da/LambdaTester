





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 655
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][1] = {"T":""}
argument3[1.7976931348623157e+308] = {"595":-1,"1.0798897659187413e+308":"","G":"","":655,"1.5232395215999079e+308":1.7582177976479734e+308,"1.4543044519907014e+308":";","g3P":3.352095584702617e+307,"5.031665293636634e+307":"d^","n":""}
base_1[2] = {"157":"!","h'7o":""}
return a*b+c
};
var argument3 = ["@","|Lh","!j","I"];
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.5109538778533692e+308] = ["Lv","?Eb","z[iU","J","jOx","s"]
argument6[705] = 460
argument6[7] = [705,82,783,5e-324,59,823]
return a/b-c
};
var argument6 = false;
var argument7 = {"705":893,"}":"I^x","`":"","J":"5","":"2Qv","wg":59,"3.85647008878181e+307":"","iI6@fL":"^$R5"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = 2.0562805491658233e+307
argument10['n,5s@s'] = "a^1"
base_3[4] = 59
return a+b/c
};
var base_0 = [893,"S",-100,"^"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"S",-100,"^"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"S",-100,"^"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"S",-100,"^"]
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
require("fs").writeFileSync("./experiments/some/someGen/test798.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)