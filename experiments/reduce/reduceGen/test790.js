





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = ["RV5",5e-324,"Q","E",627,783,"X",595]
argument3[25] = {"8":893,"893":"bB","MOd":122,"lcI8v":5.090087183182486e+307,"":"","1.4679145475746063e+308":"","^Z":"V","Js":1.6114718880347105e+308,"T*m":"k","6.512571464391432e+307":2.8541071933069813e+307}
return a-b-c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = [460,25,893,5e-324,213,460,122];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2.1280896016417002e+307] = ""
return a/b/c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = ""
argument7[25] = null
return a/b-c+d
};
var argument7 = r_2;
var argument8 = 1.5148165146794773e+308;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.612812046173122e+308] = ["Va","%","D"]
argument11[7.889879335222838e+307] = 5.779690186718126e+307
argument10[0] = [595,213,157,655]
return a*b-c/d
};
var argument10 = r_2;
var argument11 = null;
var base_0 = ["]K3?>H31q6dH",655,-1,823,59,-100,"!"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]K3?>H31q6dH",655,-1,823,59,-100,"!"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]K3?>H31q6dH",655,-1,823,59,-100,"!"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]K3?>H31q6dH",655,-1,823,59,-100,"!"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test790.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)