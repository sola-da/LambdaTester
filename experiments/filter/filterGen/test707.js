





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"0":">l","82":100,"100":"T","":"","T*S":843,"B":"!",">|y":"7e","8.263688646196499e+307":126,"-100":""}
argument2['wIs'] = null
argument2['wIs'] = null
return a*b*c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][7] = 8.286521056594084e+307
return a+b-c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1679954109349114e+308] = true
argument7[714] = {"59":1.7061458799014899e+308,"460":"","":"&","pT3":"C","*":1.7596158942994666e+308,"a|h":"","1.6145275688704083e+308":""}
argument7[4] = "="
return a/b/c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = {"1.7131310666874787e+308":1.78395191682903e+307,"":"7","GG":"P","0)":6.12734879060611e+307}
argument10[-100] = {"213":3.075576655306215e+307,"8.059629690163783e+307":5.691789381167263e+307,"-100":0}
return a*b+c
};
var base_0 = ["dt","Bec","n","F","O","1","L]","N"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dt","Bec","n","F","O","1","L]","N"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test707.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)