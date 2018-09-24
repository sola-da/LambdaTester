





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = {"126":"C","157":783,"618":-100,"F5":122,"2.772435118230724e+307":823,"0+":9.832488671755167e+307,"M":""}
base_0[2][5e-324] = "Q"
return a+b/c
};
var argument2 = [705,25,126,213,157,-1,893,618];
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = {"607":122,"714":1.7976931348623157e+308,"783":1.122612002727768e+308,"Mf":""}
argument6 = [126,460,49,460,595,242,403,49]
argument5[0] = {"783":"%","893":";","mJa":"qH","vS":82,"s<":"=1","":"_"," ":"0%z","3.907623288444662e+307":1.1592012581285197e+308}
return a*b+c
};
var argument5 = ["H","*VtZIDJ","D3","i","ORp",",","5","z","T","j"];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {"MsIJ":"{","1yrJ-":"","1.0655771967288024e+308":"","O":7.812090096047793e+307}
base_2[2] = [157,893,893,0,-100]
return a-b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"9":"Z","7.587200431651332e+307":""}
return a*b*c
};
var argument9 = false;
var base_0 = [893,595,242,893,5e-324]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,595,242,893,5e-324]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,595,242,893,5e-324]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,595,242,893,5e-324]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test963.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)