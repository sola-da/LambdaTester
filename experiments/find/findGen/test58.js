





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = ["R","=","J","D:dH)","f"]
base_0[9] = 25
return a*b*c
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = 2.6934162511033806e+307
return a-b+c
};
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = false
base_2[1] = 1.6627156997453817e+308
base_2[8] = {"3":"","59":"","1.7678589530309284e+307":"","Y":1.490276125008629e+308,",-":1.6927767412688706e+308,"":"O","Ma":"F","1.7705134176985786e+308":"","6.913975849299216e+307":""}
return a+b*c
};
var argument8 = 1.4713133351664196e+308;
var argument9 = 1.6315212917850753e+308;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['!j'] = false
base_3[8][0] = true
base_3[7] = ["jE"]
return a-b-c
};
var base_0 = ["SA",0,126,"Ca",-1,705,"oX&F|Cz%",25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["SA",0,126,"Ca",-1,705,"oX&F|Cz%",25]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["SA",0,126,"Ca",-1,705,"oX&F|Cz%",25]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["SA",0,126,"Ca",-1,705,"oX&F|Cz%",25]
var r_3= undefined
try {
r_3 = base_3.find(argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test58.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)