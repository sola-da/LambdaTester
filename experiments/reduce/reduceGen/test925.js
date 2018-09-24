





var callbackArguments = [];
var argument1 = {"Z$":969};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['Cb'] = 6.556262373277162e+307
argument1[9] = "bh"
argument2[1.1532786076532189e+308] = 607
return a-b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = [25,783,783]
argument7[2] = {"_":"","":1.3943742926236096e+308,"s2":2.6331172521002615e+307,"6.800971833532716e+307":3.011689217354881e+307,"1.3726062988411289e+308":"","NA":""}
argument7[6.35085648319999e+307] = 1.2268280676171036e+308
return a+b+c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2.1280896016417002e+307] = [823,49,213,460,893,100,242]
base_2[4] = true
argument7 = 122
return a*b-c-d
};
var argument7 = "Rsp";
var argument8 = r_1;
var argument9 = r_2;
var argument10 = null;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = true
return a*b-c/d
};
var base_0 = [25,0,"j"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,0,"j"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,0,"j"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,0,"j"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test925.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)