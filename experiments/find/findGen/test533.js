





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[460] = null
base_0['length'] = {"6":-1,"126":"2","893":1.7533611648288603e+308,"6.170114943677956e+306":59,"P":"","6.176917832974348e+307":"ppwC"}
argument2[1] = "ML"
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = [893,0,618,242,157,460,25]
argument3[6] = true
return a/b-c
};
var argument3 = "w#";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = ["&","Z","o","C"]
argument6['^h'] = {"":893,"1.1711382572405664e+308":"","1.6170613568174151e+308":""}
base_2['length'] = [126,122]
return a-b*c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[969] = ""
base_3[8][0] = "l"
base_3[7] = [49,893,705,82,627,618,893,843]
return a-b+c
};
var argument7 = "K{Nu1";
var base_0 = ["C${",25,-100,"=M","j*"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C${",25,-100,"=M","j*"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C${",25,-100,"=M","j*"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C${",25,-100,"=M","j*"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test533.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)