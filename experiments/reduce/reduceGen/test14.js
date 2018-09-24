





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"5":"","627":"","714":9.417734325945222e+307,"":"","S;p":2.8467367714028316e+307,"L":8.240952960374957e+307,"k<b":2.6133178693536796e+307}
base_0 = {"":5.292453795887342e+307}
return a+b*c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"59":969,"1.7121561290336313e+307":"","!;":"NrUx","1.7387712272618494e+308":"!j"}
base_1 = {"6":"L ","618":"<","v":403,"":"","1.174537860370917e+308":460,"-1":1.4714758664298594e+308,"1.442415112307797e+308":"","P5":"","5e-324":2.8658677598373907e+307}
argument3 = 213
return a/b*c*d
};
var argument4 = false;
var argument5 = null;
var argument6 = {"|r!?":6.54778453695907e+307,"3.2708075848581173e+307":""};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = ""
return a+b+c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
return a/b-c+d
};
var argument9 = null;
var argument10 = r_2;
var base_0 = ["d","w","zO","YL","OX","[y","|","z","%"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d","w","zO","YL","OX","[y","|","z","%"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d","w","zO","YL","OX","[y","|","z","%"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d","w","zO","YL","OX","[y","|","z","%"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test14.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)