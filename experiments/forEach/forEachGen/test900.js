





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = 607
argument2['a8r['] = ""
return a/b/c
};
var argument2 = false;
var argument3 = {"157":" ","607":655,"783":"","yV,":"","D":705,"1.3304631749594585e+307":100};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = {"":1.5075659939552175e+308}
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = {"49":"","893":"XT","VT":4.578292124222585e+307,"E":"","1.639577999873068e+308":"y}","6.551022290846595e+307":157,"%u":4.586962579122981e+307,"":126}
return a-b*c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.268696794505825e+308] = {"25":100,"59":"","460":1.6142469959954072e+308,"4.779867290197255e+307":1.5841399680809252e+308,"8.720333514909753e+307":",e4","9U+0":1.1541272707530355e+308}
return a/b+c
};
var base_0 = ["^t","Hq;","k","Mz","+QnEi5","}t","-","1","y[","j"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^t","Hq;","k","Mz","+QnEi5","}t","-","1","y[","j"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^t","Hq;","k","Mz","+QnEi5","}t","-","1","y[","j"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^t","Hq;","k","Mz","+QnEi5","}t","-","1","y[","j"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test900.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)