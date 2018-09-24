





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = false
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = 1.859395619365034e+307
base_1[5] = {"100":"3Vp[x","403":"","$":"","":"","6.599446016037579e+307":1.540583050652593e+308}
argument4[0] = ""
return a-b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {}
base_2[6] = null
argument6[7] = {"82":"Q{","122":"","618":1.4711733941995158e+308,"":"","3.8094489678587116e+307":"r","1.4841542293433848e+308":595,"'":969,"WN&":3.0334163637380783e+307,"1.6554578508988482e+308":"","+%":"1"}
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][5e-324] = ["3","L","|","%","+$","+,","*"]
argument6['Y'] = 1.7976931348623157e+308
return a-b-c
};
var argument6 = {"595":"","627":4.446771312481538e+307,"1.440111349616383e+308":"","":823,"3.1542537003817227e+307":49,":E":"","0<":1.7976931348623157e+308};
var argument7 = null;
var base_0 = ["W^a","s",":K","]","z","3P(0","&6rL","|"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W^a","s",":K","]","z","3P(0","&6rL","|"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W^a","s",":K","]","z","3P(0","&6rL","|"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W^a","s",":K","]","z","3P(0","&6rL","|"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test874.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)