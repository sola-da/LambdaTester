





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['?'] = 3.091257326874098e+307
argument2[1.9097830510613482e+307] = [607,25,213,1.7976931348623157e+308]
return a+b/c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = [82,783,5e-324]
argument6[3.462967293930506e+307] = [-1,242,49]
argument5[1.3130321063336282e+308] = [843,59]
return a-b-c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['?'] = null
return a*b/c
};
var argument8 = false;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1.3434821406183095e+308] = {"705":893,"":"2Qv","wg":59,"3.85647008878181e+307":"","iI6@fL":"^$R5","Vg%":0,"1.7976931348623157e+308":"a^1","!":-100,"1.2296950137626241e+308":""}
argument11['am'] = 6.926233489243377e+307
base_3[6] = {}
return a/b+c
};
var base_0 = [5e-324,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test800.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)