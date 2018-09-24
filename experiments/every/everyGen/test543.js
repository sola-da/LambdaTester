





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["`2,fv",-1,59,",$L","j","i",";#","U+U"]
base_0[4] = null
return a/b-c
};
var argument2 = false;
var argument3 = 1.2346163066226804e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = ["{xP",969,"V",49,"hC5","o","Ny","f9","B"]
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = ["<?mGm","<","gF"]
argument6[8] = 1.3064470527487766e+307
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = false
argument8[2.4183178393969103e+306] = {"122":"","126":3.6467558492174557e+307,"823":"","":100,"q":"","7.985277216055963e+307":2.96141734980269e+307,"7.53339659632868e+306":"","6.7841703234802e+307":1.4749832854829823e+308}
return a+b-c
};
var base_0 = [403,126,595,122,823,213]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,126,595,122,823,213]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,126,595,122,823,213]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,126,595,122,823,213]
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
require("fs").writeFileSync("./experiments/every/everyGen/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)