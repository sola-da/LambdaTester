





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ["t","8z","M1V","ZHH","q","{oR_","Moy","f_K"]
argument2[2] = null
base_0[0][0] = false
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['3Tpj5'] = {"100":"<CC,","460":"P","893":6.94072178004655e+307,"1.350804197889821e+308":"","1.560649049829611e+308":49," ":"|","":"=:"}
return a-b/c
};
var argument3 = 618;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = 1.5381697262917624e+308
return a+b+c
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.6177106033227046e+308] = {"618":"","_j8":705,"1.2919322198366426e+308":"I","":"","7^H":"","1.7442037334608366e+308":""}
base_3[3] = ["5","r","^sD","}jgS","*","r1","4","vo","v","D%"]
return a*b-c
};
var base_0 = ["-bbB4"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-bbB4"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-bbB4"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-bbB4"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test561.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)