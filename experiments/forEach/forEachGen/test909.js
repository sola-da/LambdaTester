





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = 122
argument2['?'] = 7.00193838070719e+307
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][823] = {"0":"1","8":1.1457778642957093e+307,"627":"1","1.3950012264429644e+308":"$e6","":"S[","i":2.279088591175555e+307,"4A*!":1.3441115938125296e+308,"3p":6.910862809860597e+307,"1.0345969755508728e+308":1.1094840744342195e+308}
base_1[0][823] = {"5":"","595":8.608092673388776e+307,"655":783,"":"jCR","f":"9","9.134422889498786e+307":"<","I":"X","8.623589297795812e+307":2.165360314956254e+307,"8.582861938920707e+307":1.2182878896102963e+308,"b!":""}
return a-b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.748669805137695e+307] = 5.530403829524263e+306
base_2[6] = null
base_2[4][4] = {"893":"b","CF_":"Y?oieiF","1.7941048487843073e+308":823,"1.2714352803945234e+308":"","4.490293383351288e+307":"","P)O":"","":714}
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = {"403":100,"Je&0(":"","":"","1.3253463407324289e+308":1.758910087060746e+307,"1.2441252354593066e+308":"q2i","6.730289538758601e+307":460,"1.1986850489355517e+308":1.084709397901614e+308}
argument8[1.1030928633982176e+308] = ""
base_3[0][1] = "J_u"
return a-b-c
};
var base_0 = [893,122,-1,"F@Z","HuN1hj","@Y","OW",823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,122,-1,"F@Z","HuN1hj","@Y","OW",823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,122,-1,"F@Z","HuN1hj","@Y","OW",823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,122,-1,"F@Z","HuN1hj","@Y","OW",823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test909.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)