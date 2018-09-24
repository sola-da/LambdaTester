





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = {"1.4205726959827606e+308":"","V":100}
base_0[9] = 122
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = 1.3760773767948206e+308
argument3[783] = true
base_1[0][2] = ""
return a-b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['sJRZP'] = [49,122,714]
base_2[4] = {"1.6983203723136326e+308":5.405650246952626e+307,",":618,"":122,"1.152876219314558e+307":595,"p":"!","5.517177908874089e+307":"","'j]":1.1224021160024986e+308}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][7] = {"705":1.0278294858061182e+308,"9@|w":1.7677821255035736e+308,"ChR;<":"G","M":122,"mgR":"8O","":"","G":3.337577694376711e+307}
argument5[6] = ""
return a/b*c
};
var base_0 = ["R","y","G","eyn","|o","T(NC*"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R","y","G","eyn","|o","T(NC*"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R","y","G","eyn","|o","T(NC*"]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R","y","G","eyn","|o","T(NC*"]
var r_3= undefined
try {
r_3 = base_3.every(argument4)
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
require("fs").writeFileSync("./experiments/every/everyGen/test970.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)