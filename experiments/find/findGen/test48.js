





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = [122,655,403]
base_0[2] = {"n":"L","G":"","7.014152418378015e+307":"[ ^u","Kb`9i":0,"":1.1901138489755842e+308,"Po":3.372624688462316e+307,"4.592104718062252e+307":"","6.058925509131508e+307":6.900679286559904e+307}
return a/b+c
};
var argument2 = "";
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = null
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = 1.2295139884282072e+308
base_2[1][7] = true
base_2[1][2] = "{"
return a*b-c
};
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 1.5466498880764587e+308
base_3[1][0] = null
return a-b-c
};
var argument9 = ["q","*K"," "];
var argument10 = null;
var base_0 = [843,49,823,783,893,843,655,618,823,126]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,49,823,783,893,843,655,618,823,126]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,49,823,783,893,843,655,618,823,126]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,49,823,783,893,843,655,618,823,126]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test48.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)