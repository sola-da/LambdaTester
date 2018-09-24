





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1.4677087964888306e+308] = {"460":"","655":607,"843":"","1.5820795775315698e+308":"w","":2.1043523520025948e+307,"M":100,"6.756237202041814e+307":"w","7n&K":""}
argument3[1] = null
base_0[5] = true
return a+b+c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"3.752068960536823e+307":"F","1.1155300969633047e+308":1.4835585908879936e+308,"":"ypf","I":6.178959181231483e+307,"]Y":"","KP":403,"PQ`":"l@a"}
base_1[0] = false
argument6['T'] = [-100,25,100,403,126,25,49,655,618,843]
return a+b+c
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[607] = 1.2057480501205263e+307
argument8[4] = null
return a/b-c
};
var argument8 = 0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = ""
return a/b-c
};
var argument10 = r_2;
var argument11 = {};
var base_0 = ["h_","]"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h_","]"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h_","]"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test286.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)