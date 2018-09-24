





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['#R[+'] = ""
argument1[0] = {"1.4752514818342867e+308":"c","E[C":618}
return a/b*c
};
var argument2 = "H";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = {"3":7.391690194748001e+307,"460":7.25626150253652e+307,"705":242,"969":1.2369633375377587e+308,"1.1473984291502767e+308":"","R":607,"_":213,"":6.770908161223588e+307,"*&":""}
argument4 = ["W&","i","=","()","^`","w"]
base_1[6] = true
return a+b/c
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = 9.750030220498148e+307
argument8['T'] = 6.078513447278193e+307
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = null
return a*b/c
};
var argument8 = true;
var base_0 = ["V9",">","XF","3","Sb>{","a","Pj{","hz","<"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V9",">","XF","3","Sb>{","a","Pj{","hz","<"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V9",">","XF","3","Sb>{","a","Pj{","hz","<"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V9",">","XF","3","Sb>{","a","Pj{","hz","<"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test869.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)