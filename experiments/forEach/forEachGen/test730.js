





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = ["d","B","==h","Cg","B","G","C;"]
argument2[8.748669805137695e+307] = ""
argument2['-'] = null
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [59,627,460]
base_1[1][2] = {"25":1.7476624403317373e+308,"49":49,"969":"","":6.507010463247959e+307,"X":"Oi+","1.1165163202410832e+308":1.635500541066711e+306,"1.2910446072564264e+308":"v;","1.340529164913688e+308":"","d3@l:X":1.3463846670573565e+307}
return a-b+c
};
var argument3 = ["k","c("," ","E","t","]","$","!DQ","e","k)"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][8.05235215815219e+307] = "<TH>"
return a/b/c
};
var argument5 = false;
var argument6 = 213;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['ns'] = ["pl","Wo,V",","]
return a/b/c
};
var base_0 = ["FrKr","4","j"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["FrKr","4","j"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["FrKr","4","j"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["FrKr","4","j"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test730.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)