





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = {"100":100,"823":"a'","`":823,"":"","7#*X(yw":"","l":"","2.90269158116192e+307":1.453429114424213e+308}
base_0[0] = true
argument2[3.3156198695370476e+307] = null
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = [0,213,25,-1,460,157,714,82,460]
return a*b-c
};
var argument3 = false;
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = ""
return a/b+c
};
var argument6 = "";
var argument7 = {};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ["h","i","dR2","o0","K","RMcR","=&P1","^","L7","w"]
argument10[5] = 3.24161883399174e+306
return a-b*c
};
var argument9 = null;
var argument10 = null;
var base_0 = ["$H{","R","f"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$H{","R","f"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$H{","R","f"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$H{","R","f"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test529.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)