





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['$*I'] = {"893":"-#h","1.3484509112416162e+308":"","":"P","1.5430043303952134e+307":"?"}
argument2[1.2421645642809447e+308] = true
return a-b*c
};
var argument2 = [705,1.7976931348623157e+308,0,823,157,607,655,5e-324,403];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['1SHF1'] = {"100":126,"8.624080705656678e+307":"","1.7893434179070731e+308":"","CPK":1.5689209845179177e+308,"8.343387236230046e+307":1.6551580162921968e+308,"1.345885257903275e+308":"T","3.7204436834328296e+307":126,"c":-1,"":"o"}
base_1[6] = null
argument5[3.462967293930506e+307] = ""
return a*b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = null
argument7[1] = ":'4V+}"
base_2[2][8.05235215815219e+307] = [843,823,100,213]
return a+b-c
};
var argument6 = 1.597986513854389e+308;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = [100]
return a-b+c
};
var base_0 = [714,157,607,126,"3*x+"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,157,607,126,"3*x+"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,157,607,126,"3*x+"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,157,607,126,"3*x+"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test766.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)