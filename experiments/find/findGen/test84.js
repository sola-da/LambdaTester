





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"403":5.018307140447781e+307,"6.643860524708372e+307":403,"":"","4.3925829097192515e+307":"<"}
return a*b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = null
base_1[8][0] = {"25":1.1901677584750463e+308,"655":"","1.1992383945797503e+307":"","2f":"T","o6":618,"5.041721202948394e+307":4.1574184923251145e+307,"1.3015956068824902e+308":""}
return a*b+c
};
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = false
return a*b+c
};
var argument6 = false;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[627] = {"ER":1.4306067928370524e+308,"":";","4.605565069878469e+307":893,"-H":""}
argument9[-1] = null
argument9[5] = {"157":"=XH","618":9.75215592328933e+307,"655":893,"893":595,"":"","<<`G":"","6.328298541686551e+307":"e;p","-100":"^r"}
return a/b/c
};
var argument9 = null;
var argument10 = "";
var base_0 = [843,25,595,783,403,823]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,25,595,783,403,823]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,25,595,783,403,823]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,25,595,783,403,823]
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
require("fs").writeFileSync("./experiments/find/findGen/test84.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)