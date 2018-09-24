





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = 460
argument3[59] = null
base_0[3][0] = null
return a/b-c
};
var argument2 = {"5u":"","5.259723333482217e+307":"+","":""};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = ["G","U*rwK","Nx","?Ney","W"]
base_1[4][6] = [618,-100,0,"s","*sP&|"]
return a*b-c
};
var argument5 = {"25":9.241500075066794e+307,"705":"|","7.445471644796538e+307":"yl)|AH","":2.1401034692681317e+307,"3.192840450463563e+307":2.7356089229546184e+307,"!A":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = [";"]
return a-b/c
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = {"3.9229215590233205e+307":"","":"","-1":157,"7.783269539048398e+307":122}
return a*b-c
};
var base_0 = [")1","6",",","@","o","s","e"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")1","6",",","@","o","s","e"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")1","6",",","@","o","s","e"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")1","6",",","@","o","s","e"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test506.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)