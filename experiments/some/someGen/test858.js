





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][8] = true
return a/b+c
};
var argument2 = {"213":1.5813224076122808e+308,"595":"","":"Mmy]","7.413499234869304e+307":"","-q":"","Y":893,"3.6995323499161153e+307":"","1.6264909851618856e+308":"Kb","1.5733795527175913e+308":""};
var argument3 = 122;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = {"25":1.6722127532894108e+307,"157":618,"823":8.081371713348127e+307,"893":893,"":213,"9.032256692354806e+307":1.7627661621255174e+308,"-1":"","1.3019676993571718e+308":100,"G":"oJX>"}
argument5['k<7bJ'] = {"":4.2879580810732383e+307,"1.2108658847851936e+308":6.315399552980713e+307}
return a*b-c
};
var argument5 = 618;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][4] = {"":0}
base_2[5][0] = false
return a-b-c
};
var argument7 = true;
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8] = null
argument11[1.0727847755854773e+308] = true
argument10['f9zgt4n!ZJR]W'] = ""
return a-b/c
};
var argument10 = null;
var argument11 = null;
var base_0 = [-1,"q","hi",843,"P","IA","c","wp",595]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"q","hi",843,"P","IA","c","wp",595]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"q","hi",843,"P","IA","c","wp",595]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"q","hi",843,"P","IA","c","wp",595]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test858.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)