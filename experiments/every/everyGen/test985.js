





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.4183178393969103e+306] = true
base_0[2] = {"403":"x","893":"@N","1.6528620252985251e+308":"","JQ'6_":"","":""}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"595":49,"969":595,"2.4383325658452374e+307":1.6028015952272706e+308}
argument3[1.268696794505825e+308] = " "
return a/b/c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = 213
base_2[4] = 1.2914674496167326e+308
return a*b+c
};
var argument5 = 1.7090762144242385e+308;
var argument6 = {"82":8.395747189441149e+307,"823":"+?7[","893":"=","1.3868009263594806e+308":"","":655,"F":"8","1.4155011880260907e+308":1.638155520805703e+308,"q7XZ":"","lw":595};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = null
argument8[3] = false
return a*b+c
};
var argument8 = false;
var base_0 = [823,25,969,49,460]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,25,969,49,460]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,25,969,49,460]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,25,969,49,460]
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
require("fs").writeFileSync("./experiments/every/everyGen/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)