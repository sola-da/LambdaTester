





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = ["5n",25,"By",627,0,893]
return a-b/c
};
var argument2 = {"0":"","59":"","122":"","4.3190373359526074e+307":"d","":2.336574375321133e+307,"he<":"","EU":"(P","1.1789342318336913e+308":1.0446313380579697e+308};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = 2.247669866312549e+304
argument4[-1] = ","
return a+b/c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.7668525981726295e+307] = {"607":2.993433343479828e+306,"8.432819975224834e+307":4.7943098254543e+307,"|":"","":7.333747130114187e+307}
argument7[6] = true
base_2[8][0] = null
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = {"100":"5","655":627,"CM2":"K","1.7605272591980743e+308":"E","":"Vx","2.4109858761869366e+307":823,"j":""}
argument6[5] = ["}f",">jVWrs","o","{R"]
argument8['!j'] = null
return a/b*c
};
var argument7 = 7.763246797362289e+307;
var base_0 = [157,"j","*Xr","%Q","W#9Pj",82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"j","*Xr","%Q","W#9Pj",82]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"j","*Xr","%Q","W#9Pj",82]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"j","*Xr","%Q","W#9Pj",82]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test449.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)