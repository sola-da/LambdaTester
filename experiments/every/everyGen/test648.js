





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = false
base_0[0] = true
argument2[122] = {"714":"","783":7.126196813735267e+307,"":9.548337146578512e+307,"s":1.4606641869140468e+308,"{":"=RJGWm#","&":-1}
return a+b+c
};
var argument2 = {"25":1.1084445279167426e+308,"242":1.6829422222318822e+308,"1.2367445407709836e+308":-100,"5.994292965045851e+307":"","":8.344626770522465e+307,"S":25,"|?":1.7635310520417641e+308,"4.497122282225607e+307":4.174429261539272e+307,"1.248228897412291e+308":655};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"59":4.056061686404903e+307,"213":5.494670128852627e+307,"595":"","1.5636074566735516e+308":"","fZ*":"","5e-324":1.3210994270128436e+308,"2Yc":"X","F":"","":1.7469842740615124e+308,"1.7459809759597144e+307":2.8623884465813727e+307}
return a-b/c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = " "
argument5[2] = ["D","K","9i","_&4U","IAM","5","%"]
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ""
argument8[2.4183178393969103e+306] = ["]i",783,"4",":",49,843,49,","]
return a-b+c
};
var base_0 = ["K",242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K",242]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K",242]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K",242]
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
require("fs").writeFileSync("./experiments/every/everyGen/test648.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)