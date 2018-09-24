





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = {"460":"","655":607,"843":"","1.5820795775315698e+308":"w","":2.1043523520025948e+307,"M":100,"6.756237202041814e+307":"w","7n&K":""}
base_0[6] = null
base_0 = true
return a+b+c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"3.752068960536823e+307":"F","1.1155300969633047e+308":1.4835585908879936e+308,"":"ypf","I":6.178959181231483e+307,"]Y":"","KP":403,"PQ`":"l@a"}
base_1[2] = false
argument4[2] = [-100,25,100,403,126,25,49,655,618,843]
return a+b+c
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = 1.2057480501205263e+307
argument8[2] = null
return a/b-c
};
var argument8 = 0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][4] = ""
return a/b-c
};
var argument10 = r_2;
var argument11 = {};
var base_0 = ["h_","]"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h_","]"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h_","]"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h_","]"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test293.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)