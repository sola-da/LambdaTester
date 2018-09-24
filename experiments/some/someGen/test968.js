





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = [403,969,843,126,213]
return a/b/c
};
var argument2 = [-100,714,893,5e-324,607,126];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][5e-324] = null
return a+b+c
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5][1] = {}
base_2[1]['{X'] = {"122":242,"403":5.129865398153546e+307,"1.2843363248292419e+307":"0@F"}
argument8['^h'] = {"823":242,"5.435513349580897e+307":213,"":"","1.3580632840959168e+308":595,"4]V":""}
return a+b/c
};
var argument7 = true;
var argument8 = [122,893,0,157];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = ["cZw0","W1","8&@","a","n","$","**,","Vv"]
argument10['5L'] = 4.955385038054377e+307
argument10 = false
return a/b-c
};
var argument10 = r_1;
var base_0 = ["J;",":","rz","i^","_)k","l","Rd8JY",";v*","I"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J;",":","rz","i^","_)k","l","Rd8JY",";v*","I"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J;",":","rz","i^","_)k","l","Rd8JY",";v*","I"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J;",":","rz","i^","_)k","l","Rd8JY",";v*","I"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test968.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)