





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[157] = 1.610536026419678e+306
return a*b/c
};
var argument2 = {"403":"","627":6.055931893934415e+307,"843":823,"":8.351701769530248e+307,"`}Y":969,"8.787776891783897e+307":"x=","j":"","Ud4":1.1816885179370083e+307};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = false
base_1[6] = 714
base_1 = true
return a-b/c
};
var argument5 = ["dE",0];
var argument6 = 1.690588282456125e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"893":5.376678236543719e+307,"1.0621302405959346e+308":"0%","{w>a":"S","":"6","1.854849144318416e+307":"","E":1.4939453524645313e+308,"fc":0,"1.744054870377412e+308":""}
argument7[3] = {"213":1.721627030593418e+306,"W":"","1.6706959043468173e+308":"@=>qa","3.1419796723677005e+307":100,"":5.691866782718055e+307}
return a-b-c
};
var argument8 = {"618":"","z":100};
var argument9 = 705;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
return a+b-c
};
var argument11 = r_2;
var argument12 = r_2;
var base_0 = ["t","k","#","l","5aD|s","2"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t","k","#","l","5aD|s","2"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t","k","#","l","5aD|s","2"]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test140.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)