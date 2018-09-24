





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"705":"-_v","l":-100,"-100":5.327787987620174e+307}
base_0[0] = 1.1466886020712155e+308
base_0[8] = null
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[705] = 1.3192844315006527e+308
argument3[5] = 8.629319068082286e+307
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = false
argument4[6] = 403
return a+b+c
};
var argument4 = 1.4336171672985024e+308;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = {"3":157,"607":49,"705":"","-100":1.6257675596456824e+308,"":"Z","3dS":8.808789142506222e+307}
base_3[6] = {"595":"OEE","705":"RhQ=o","":1.6150844637543557e+308,"C":1.7976931348623157e+308}
base_3[3] = [893,49,49,49]
return a/b/c
};
var base_0 = [-100,0,714,-1,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,0,714,-1,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,0,714,-1,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,0,714,-1,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test294.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)