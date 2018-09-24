





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
base_0[3] = "y="
argument2[122] = "r4"
return a*b*c
};
var argument2 = 1.294927719391811e+307;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = null
base_1[5] = {"59":"GC","705":655,"823":1.2815697667636599e+308,"-1":157,"":126,"]q1'":"","1.7761587611120402e+308":5.714999868427859e+306,"&":627,"V":"%","A&8":")"}
argument5[4] = null
return a/b/c
};
var argument5 = {"":"%W2"};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = null
argument8[403] = [59,122,714,213,"x",714,"3N}:e",705,"<G"]
base_2[2] = ",vl"
return a-b*c
};
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][7] = ["Tl","7","B","-a","JWM","= N","sE","?LS{J","9"]
argument11[2] = false
return a*b-c
};
var argument11 = r_1;
var argument12 = null;
var base_0 = [242,"09",122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"09",122]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"09",122]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"09",122]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test114.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)