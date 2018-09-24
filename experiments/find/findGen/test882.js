





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[5] = {"49":4.127718982296653e+307,"460":7.25626150253652e+307,"595":"","1.5825526022489965e+307":9.709555941661938e+307,"1.4752514818342867e+308":"c","E[C":618,"1.1723053449174352e+308":1.8772024147315642e+306,"":705,"1.0385302672821512e+308":618,"R":607}
return a/b+c
};
var argument2 = null;
var argument3 = {"100":"*&","242":"","893":"","":"","1.055742945364405e+308":"","6.770908161223588e+307":"3","7.391690194748001e+307":969,"1.2369633375377587e+308":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = false
argument6[6.949630915607762e+307] = ""
return a+b/c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = true
argument9[3] = -1
return a/b/c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = 9.750030220498148e+307
base_3[1][1] = 6.078513447278193e+307
return a*b/c
};
var base_0 = ["5","9",">","XF","3","Sb>{","a","Pj{"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5","9",">","XF","3","Sb>{","a","Pj{"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5","9",">","XF","3","Sb>{","a","Pj{"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5","9",">","XF","3","Sb>{","a","Pj{"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test882.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)