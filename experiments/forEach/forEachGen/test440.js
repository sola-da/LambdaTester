





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 25
return a/b*c
};
var argument2 = 1.125514782295897e+308;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = false
argument6[5] = null
return a/b/c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.0481490052276395e+306] = {"403":9.076216511320155e+307,"783":"","":"B","-100":"(","1.2432972349897168e+308":6.812643387766227e+307,"2.98023129982617e+307":"I<","(^G":1.413930295423913e+307,"x5G":"","lo":4.500584029542636e+307}
return a+b*c
};
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[59] = [655,0,"5#=",843,-1,969,"+",1.7976931348623157e+308,655,"4"]
return a+b/c
};
var argument9 = "";
var base_0 = ["ammo","b[T2Yz","jq","L","m","Yw,","@","^>","m","["]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ammo","b[T2Yz","jq","L","m","Yw,","@","^>","m","["]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ammo","b[T2Yz","jq","L","m","Yw,","@","^>","m","["]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ammo","b[T2Yz","jq","L","m","Yw,","@","^>","m","["]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test440.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)