





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[783] = null
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"969":823,"1.6700373985958024e+308":1.4879577901214405e+308,"t":"","%I$$$O":2.587602547960195e+307,"":100,"z":893,"L":"zB"}
argument4[3] = {"e":"","8.416487540845967e+307":"","":126}
return a+b*c
};
var argument4 = {"59":242,"969":"sqn","1.3112379873591054e+308":",","z*`H>Pbz":2.272134136695333e+307};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.377960715099946e+307] = [783,0]
argument7[6] = 2.2344086907242048e+307
base_2[0][1] = 1.4151245573209822e+308
return a*b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = true
base_3[5] = 4.041524867838811e+307
return a-b*c
};
var argument8 = "";
var argument9 = r_1;
var base_0 = [893,213,714,213,627,607,82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,213,714,213,627,607,82]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,213,714,213,627,607,82]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,213,714,213,627,607,82]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)