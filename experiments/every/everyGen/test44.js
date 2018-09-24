





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = "d"
argument2 = ["W","|","S9","a","*","-_","hF","b","<P","dYV"]
base_0[0] = null
return a-b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = false
argument4[2] = {"157":6.215426360305271e+307,"403":1.3569658157443155e+308,"714":";","843":"","893":"R","":242,"^":7.495881670537716e+307,")":627,"-100":""}
base_1[6] = {"0":1.2773299489021653e+308,"":"","P":""}
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = -100
return a-b-c
};
var argument5 = {"893":5.262931091360336e+307,"1.7976931348623157e+308":595,"1.0794083912205184e+308":627,"[v":"U","-100":157,"7.772322302718488e+307":"","t_kfAX":3.890202496637786e+307,"1.7278878898460417e+308":"9"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = [607,-100,49]
return a+b/c
};
var argument7 = null;
var base_0 = ["YD","d"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["YD","d"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["YD","d"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["YD","d"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test44.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)