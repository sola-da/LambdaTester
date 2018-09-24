





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.0885014435567013e+307] = {"2.4459457826323763e+307":1.7063138656251576e+308,"^bsb":"","":"U","1.7976931348623157e+308":""}
argument3[1.1881593224845412e+308] = true
base_0[2] = ""
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = true
argument3[3] = [714,82,783,49,100,122]
argument3[0] = false
return a/b*c
};
var argument3 = [122,714,-1,783,-100,783,714,100,823];
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = true
argument6[242] = 4.716138325364091e+307
base_2[2] = {"126":"","705":"Mhh","":"","Mi":"I"}
return a-b-c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = [213,893,823,403,100,460,893,242]
base_3[9] = true
base_3[6] = 5.957845244774525e+307
return a/b-c
};
var base_0 = ["4","fQpeK","7>HK","c","Z","$"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4","fQpeK","7>HK","c","Z","$"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4","fQpeK","7>HK","c","Z","$"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4","fQpeK","7>HK","c","Z","$"]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test984.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)