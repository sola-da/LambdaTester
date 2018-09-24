





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 403
base_0[4][7] = {"843":"","1.4337772664671223e+308":1.7698955037999113e+308,"1.5554281930135605e+308":"","7.913273846123657e+307":"Q"}
return a-b+c
};
var argument2 = {"6":8.661353295289246e+307,"157":9.094308732511597e+307,"783":"","":"","1.4966592469186287e+308":"","8.081147822786203e+307":783,"5.697002333888922e+307":"","1.4957136261886458e+307":"U","7v&":2.597409918115728e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = [25,-100,843,49,213,0,893,618,126]
return a-b-c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 2.530662014069668e+307
return a*b/c
};
var argument6 = 1.6818610141891943e+308;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = ""
base_3 = {"":-100,"1.0599899729352742e+308":"b","Do":"","D":6.892214557787285e+307}
argument10[-100] = [618,783,100,59,843,126,607,627]
return a-b-c
};
var argument9 = "r";
var argument10 = true;
var base_0 = [242,5e-324]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,5e-324]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,5e-324]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,5e-324]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test298.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)