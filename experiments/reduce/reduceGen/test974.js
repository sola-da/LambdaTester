





var callbackArguments = [];
var argument1 = "6";
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = true
argument1[0] = 7.465548204756148e+307
return a*b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['HMm'] = {"213":1.4279693960340982e+308,"403":8.792726357103103e+307,"893":1.7058885023208678e+308," ":"ecR","":"","^":7.373941190982395e+307,"n":"","{":2.938082007352006e+307}
argument7[1] = "Y"
return a/b+c*d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = {"893":"HGmR","4.618767911981804e+307":"","-1":8.189645690835598e+307}
argument7[1] = ""
return a-b+c/d
};
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = ")"
argument9[2.1280896016417002e+307] = 9.094924141161549e+307
argument11[595] = null
return a-b/c+d
};
var base_0 = ["k","A","[","T=W","Z","#y",",I","7("]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","A","[","T=W","Z","#y",",I","7("]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","A","[","T=W","Z","#y",",I","7("]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","A","[","T=W","Z","#y",",I","7("]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test974.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)