





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
argument2[8.748669805137695e+307] = {"122":969,"403":"2n","655":"","-100":"","":"X","Q":126,"3.340352735209044e+307":"Xkpudr"}
argument3[100] = "<5"
return a+b+c
};
var argument2 = [82,126,"MY",59,627,893,"9j","@"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = true
argument5[2] = "'LX"
argument4[-1] = 6.010531038303631e+307
return a*b/c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0500354979187844e+308] = false
return a+b+c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"100":595,"618":5.672253260438128e+306,"1.0282130736060863e+308":607,"1.3810752850579607e+308":7.063227237998438e+307,"1.1211900841707333e+308":"","Gn":"","":157,"7.481056309209953e+307":9.69631634124538e+307,"1.4287095820855059e+308":4.807982993403553e+307}
base_3['length'] = null
argument8[3.377960715099946e+307] = [-100,-1,213]
return a+b/c
};
var argument9 = r_3;
var argument10 = r_0;
var base_0 = [122,655,655,-100,82,"`"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,655,655,-100,82,"`"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,655,655,-100,82,"`"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,655,655,-100,82,"`"]
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
require("fs").writeFileSync("./experiments/find/findGen/test266.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)