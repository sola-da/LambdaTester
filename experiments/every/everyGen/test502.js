





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = [82,595,213,157]
base_0[7] = {"783":893,"823":6.220500083757614e+307,"M":5.095062063728602e+307,"":5.221655924890218e+307,"^":6.312052066434119e+307,"1.8807426524531758e+306":213,"1.402749035042552e+308":3.237762892164645e+307,"3.1601782373829644e+307":4.173145929951183e+306,"2.6811568615938406e+307":"4L*","e":"L"}
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = ""
return a/b/c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = 1.9772437772108575e+307
base_2[4] = ""
base_2[0][0] = [213,705,-1,627,-1,157,595,1.7976931348623157e+308,1.7976931348623157e+308]
return a/b-c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][6] = true
base_3[0][6] = 403
base_3[6] = true
return a+b*c
};
var argument8 = r_3;
var base_0 = ["`","zCE","z0Ddf",627,25]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`","zCE","z0Ddf",627,25]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`","zCE","z0Ddf",627,25]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`","zCE","z0Ddf",627,25]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test502.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)