





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"7.144346811117693e+307":1.6537785220778856e+308,"%{w":1.5851807816255282e+308,"i0>":5.772440650126427e+307}
argument3[1.359136872727139e+308] = null
base_0[0][3] = null
return a+b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = 705
base_1[7] = {"100":"","":783,"1.453429114424213e+308":823,"a'":"","1.9349160088418642e+307":-1,"`":213,"&o":"","7.702402359170356e+306":5.339941209624114e+307}
return a-b+c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[627] = false
return a/b*c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = {"618":"bo0"}
base_3[0][9.12287810829114e+307] = null
argument5[0] = {"25":",","595":"","893":"q","":1.7716941180814395e+307,"&P1":""}
return a*b/c-d
};
var argument5 = null;
var argument6 = true;
var base_0 = [100,82,403,126,1.7976931348623157e+308,607,59,157,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,82,403,126,1.7976931348623157e+308,607,59,157,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,82,403,126,1.7976931348623157e+308,607,59,157,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,82,403,126,1.7976931348623157e+308,607,59,157,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test450.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)