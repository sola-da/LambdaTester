





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = null
argument2[82] = {"100":-1,"627":1.4982899319325904e+308,"U":25,"AF":"W","":"","1.135398700590479e+308":8.052838736410261e+307,"m":"","R":5.3119924174285964e+306}
argument1[2.1280896016417002e+307] = null
return a+b*c-d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = {"c":""}
base_1[5] = false
return a-b-c/d
};
var argument4 = {"783":2.5211725276338357e+307,"":1.2300852046731377e+308,"1.754334565681007e+308":"","9v":"^l^","1.547014118046286e+308":"4Xv8f"};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = ""
return a/b/c+d
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"1.0308035111422771e+308":"5rb#q"}
argument9[0] = 627
argument10['*c'] = "V7p8"
return a/b-c/d
};
var argument9 = false;
var argument10 = null;
var base_0 = ["qAo",";","Q","m","j_","I",213,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["qAo",";","Q","m","j_","I",213,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["qAo",";","Q","m","j_","I",213,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["qAo",";","Q","m","j_","I",213,25]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test421.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)