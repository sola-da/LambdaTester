





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.7668525981726295e+307] = {"59":843,"100":"=","714":"Q","843":2.791761390733555e+307,"YaK[":"","B":1.1684098253028035e+308,"":"","3.6237389157406506e+307":403,"^,ETuV":0}
base_0[1] = [969,969,49,-1,618,595,714,59,618]
return a-b*c
};
var argument2 = true;
var argument3 = 3.729463188315592e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[460] = 122
argument5[3.7668525981726295e+307] = "X8"
base_1[3] = {"607":"","'":"Gi","7.788703034167418e+307":607,"":1.7976931348623157e+308,"8.659773426801515e+307":";","3.324629183728474e+307":"dR70","9.059922221607524e+307":5e-324}
return a*b/c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[460] = [157,783,242]
return a+b-c
};
var argument7 = null;
var argument8 = [0,655,705];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"25":1.7413536540811452e+308,"59":595,"Xwd]":25,"P@$":1.567744168619351e+308,"":-100,"A":82}
base_3[1][7] = "Y"
base_3[5] = {"82":"q","403":"","607":1.3997511860959649e+308,"714":"Uo","3.0435305493846615e+306":"","1.4127682444287207e+308":"","9.64729308697182e+307":"","WV":126,"'`$":705,"2.891280932586968e+307":8.157049401183507e+307}
return a-b/c
};
var base_0 = [100,403,82,969,25,59,213,49,823]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,403,82,969,25,59,213,49,823]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,403,82,969,25,59,213,49,823]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,403,82,969,25,59,213,49,823]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test12.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)