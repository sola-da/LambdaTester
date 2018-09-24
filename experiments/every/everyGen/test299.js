





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[122] = {"783":"Q","969":1.668843712902519e+308,"1.0689775630670688e+308":"!","":"5"}
argument1 = true
return a/b+c
};
var argument2 = {};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = 9.918340151840446e+307
base_1[0][2] = true
base_1[2][7] = null
return a-b*c
};
var argument5 = "$1";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"59":9.857748336443737e+307,")":213,"g":"","":705}
base_2[1][4] = {"627":627,"969":1.5995292149482602e+308,"c-":157,"":"Pi","!(":1.1863434190231078e+308,"n}":"Hi"}
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 213
argument9[2] = 82
base_3[8] = ["OZ","0"]
return a/b*c
};
var argument8 = {"1.7976931348623157e+308":1.0285351406281784e+308,"X":""};
var argument9 = false;
var base_0 = [627,655,0,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,655,0,122]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,655,0,122]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,655,0,122]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test299.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)