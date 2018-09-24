





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6798476101238045e+308] = 122
argument1[2] = 7.00193838070719e+307
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.249941463060761e+307] = {"0":"1","8":1.1457778642957093e+307,"627":"1","1.3950012264429644e+308":"$e6","":"S[","i":2.279088591175555e+307,"4A*!":1.3441115938125296e+308,"3p":6.910862809860597e+307,"1.0345969755508728e+308":1.1094840744342195e+308}
base_1[5][0] = {"5":"","595":8.608092673388776e+307,"655":783,"":"jCR","f":"9","9.134422889498786e+307":"<","I":"X","8.623589297795812e+307":2.165360314956254e+307,"8.582861938920707e+307":1.2182878896102963e+308,"b!":""}
argument4[5] = [655,-100,82,25]
return a-b*c
};
var argument4 = ["m)d","b9","B<9","I",403,783];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = [0,823,157,705,59,122,213,969,618,122]
argument6[1.7976931348623157e+308] = [")O"]
argument7[3] = true
return a-b-c
};
var argument6 = true;
var argument7 = "K-";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][6] = ["0(","r^G","{"]
argument9['f'] = [59,213,49,0,25,627]
return a+b-c
};
var argument9 = true;
var base_0 = [893,122,-1,"F@Z","HuN1hj","@Y","OW",823]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,122,-1,"F@Z","HuN1hj","@Y","OW",823]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,122,-1,"F@Z","HuN1hj","@Y","OW",823]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,122,-1,"F@Z","HuN1hj","@Y","OW",823]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test907.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)