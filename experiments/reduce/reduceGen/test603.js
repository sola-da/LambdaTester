





var callbackArguments = [];
var argument1 = 1.0112108216576453e+308;
var argument2 = false;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 1.2935614609407285e+308
return a+b+c/d
};
var argument5 = -1;
var argument6 = true;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b-c*d
};
var argument9 = false;
var argument10 = r_1;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 1.0306075133871297e+308
argument11[3] = {"618":82,"783":"b","@X_":655,"3.1865019158936856e+306":"","l":"rY","&N-$^":"","":"","?B^":7.820324975933222e+307}
return a/b*c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15['HMm'] = "^"
argument14[403] = null
argument13[2.1280896016417002e+307] = {"59":"","122":"4","_v+":607,"1.5850584536339678e+308":"","c":122}
return a*b/c*d
};
var argument14 = 783;
var argument15 = null;
var base_0 = [607,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test603.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)