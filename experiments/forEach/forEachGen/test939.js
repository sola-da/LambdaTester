





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1.3434821406183095e+308] = "C"
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = 1.3713105828410757e+308
argument5[59] = ""
base_1[6] = 1.205955402971083e+308
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][4] = ""
argument6[1.3107131183454087e+308] = null
argument6[2] = {}
return a*b/c
};
var argument5 = {"0":",f","25":"","":"","1.5395133635705443e+308":")4cHd","e":"pUf<=","hv>":"","#G^=A":"_m"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][823] = ""
argument7[6] = "t"
argument7[7] = 1.6691126500294986e+308
return a*b/c
};
var argument7 = null;
var argument8 = {"627":3.7859129582211007e+307,"ad-":"C","1.1175618298511997e+308":1.7664131137327435e+308};
var base_0 = [403,460,607,823,655,59,655,100,-100,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,460,607,823,655,59,655,100,-100,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,460,607,823,655,59,655,100,-100,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,460,607,823,655,59,655,100,-100,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)