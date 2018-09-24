





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.0481490052276395e+306] = {"126":"","5e-324":"5","O{rL":"","":""}
argument2[3.0481490052276395e+306] = [893,655,122]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = null
argument4 = ["_OJ","JHVT","vr"]
base_1[1] = "V"
return a*b+c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1679954109349114e+308] = {"49":"","213":-1,"595":0,"9.600160771377692e+307":1.0267894125529564e+308," ":"","1.2724843141356236e+308":"Sk","*MtLT09":""}
base_2[0][4] = 6.477840556555104e+307
base_2[6] = 100
return a-b/c
};
var argument6 = true;
var argument7 = [595,122,823,893,126,-100];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[-1] = 122
return a-b*c
};
var argument9 = "!";
var argument10 = null;
var base_0 = ["#","u","H","<","FL-SX"," !"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","u","H","<","FL-SX"," !"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","u","H","<","FL-SX"," !"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test115.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)