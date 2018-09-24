





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = "-"
return a/b*c
};
var argument2 = null;
var argument3 = 1.983322576244075e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = ""
argument5[1] = {"5":1.1706688857958813e+308,"122":2.5350593773444405e+307,"893":"JN","|>":893,"":"pM","-100":"|","|":1.7876495787331064e+307,"9.316543297065427e+307":783,"1.005102947000259e+307":1.098635400235862e+308}
argument6[0] = null
return a+b*c
};
var argument5 = false;
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.0500354979187844e+308] = ""
base_2[8][0] = ["h","vsK4","A","^N"]
argument9['!j'] = null
return a*b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[100] = {"126":"N","242":"A*3","607":1.140135640497452e+308,"":"","1.5703199617904595e+308":714,"6.26730695772808e+307":4.967634580274523e+307,"-1":"X"}
base_3[3] = 122
return a+b*c
};
var argument9 = 0;
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test98.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)