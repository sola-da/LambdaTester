





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][7] = 1.4044860404574058e+308
base_0[1][0] = 6.674328181612027e+307
return a/b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ""
base_1[0] = ["n1","FHn:}","vB-BT","Z"]
return a+b-c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = "QST="
argument7[969] = {"893":6.357788157596447e+307,"":"5","1.4152594606946776e+308":"J","aq":"PAgbyPm","8.964412382354262e+307":"","1.7352872966023471e+308":783,"6.308864418227777e+306":7.758874326316483e+307,"B":4.850459238327186e+307,"8.809993139242034e+307":"H5(Ob","-1":"$"}
return a/b/c
};
var argument6 = {"3.883690897742399e+306":1.6213149743565212e+308,"f-d":"","":969};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = null
base_3[0][6] = {"82":"x","157":618,"893":"srDq","":"s","U":"TMA1","_":1.6611974098246044e+308,"QQ":1.0357498406338188e+308}
base_3[5] = null
return a*b/c
};
var argument8 = "3";
var argument9 = "";
var base_0 = ["P","d","0","P","6"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","d","0","P","6"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","d","0","P","6"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P","d","0","P","6"]
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
require("fs").writeFileSync("./experiments/find/findGen/test240.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)