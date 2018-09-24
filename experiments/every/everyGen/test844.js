





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = null
argument2[3] = null
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = 705
argument3[4.960033715165713e+307] = 1.0785820455660328e+308
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = {"100":5.477980001045255e+307,"893":1.340128114440626e+307,"y":403,"":"","4.777559944733011e+307":1.7657211688920654e+308,"I":"p$","&&":""}
return a-b-c
};
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][2] = "2"
argument7[6.148642213884202e+307] = {"969":"","O":1.3098930247094693e+307,"`":4.983529686717881e+307,"wQ":1.2003205649721552e+308,"4.606457553422409e+307":"","S":"","w":"","1.4021623267085491e+308":-1,"8.542812008924557e+307":"","":""}
argument7[8] = ["+","#C","?","[+",",",":","f","[*e","Vz6R*n"]
return a*b*c
};
var base_0 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test844.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)