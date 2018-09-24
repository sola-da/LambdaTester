





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.92397107964922e+307] = "G*<"
argument2[2][783] = "h"
return a+b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.3130321063336282e+308] = ["Z"]
base_1[0][1] = {"25":"","126":"Pg^t ","157":9.247912276506343e+307,"213":1.3522829974818985e+308,"783":655,"893":49,"":"<","1.164505069540323e+308":1.1571194205352591e+308}
argument4['ns'] = ""
return a/b-c
};
var argument4 = null;
var argument5 = [618,59,213,5e-324,655,893,655,122];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2][783] = ["!"]
argument8[1] = false
return a+b+c
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [59,82,0,705,403,705,823,403,893]
argument10['am'] = null
return a*b*c
};
var argument10 = null;
var argument11 = r_2;
var base_0 = ["Y","Og5XE+)","Sf,Aa",","]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y","Og5XE+)","Sf,Aa",","]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y","Og5XE+)","Sf,Aa",","]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y","Og5XE+)","Sf,Aa",","]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test637.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)