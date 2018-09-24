





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ["d","B","==h","Cg","B","G","C;"]
base_0[2][5e-324] = ""
argument2[1] = null
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = [59,627,460]
argument3[1.6798476101238045e+308] = {"25":1.7476624403317373e+308,"49":49,"969":"","":6.507010463247959e+307,"X":"Oi+","1.1165163202410832e+308":1.635500541066711e+306,"1.2910446072564264e+308":"v;","1.340529164913688e+308":"","d3@l:X":1.3463846670573565e+307}
return a-b+c
};
var argument3 = ["k","c("," ","E","t","]","$","!DQ","e","k)"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = "<TH>"
return a/b/c
};
var argument5 = false;
var argument6 = 213;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7.004668712060429e+307] = ["pl","Wo,V",","]
return a/b/c
};
var base_0 = ["FrKr","4","j"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["FrKr","4","j"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["FrKr","4","j"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["FrKr","4","j"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test728.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)