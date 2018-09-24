





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = 714;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = {"":823,"6.793156162777713e+307":"B&z","1.1599405616970064e+308":595,"-1":"UY])"}
base_0[0][4] = false
return a*b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = 5.841772304279186e+307
argument7[5] = {"5":"=g","1.5392462918054231e+308":"q","":"|","e":"b"}
base_1[4] = {"82":1.7119989077918475e+308,"714":"5","3.449209914901159e+307":122,"":893}
return a-b+c-d
};
var argument6 = "e-6";
var argument7 = [893,969,893,49,595,242,"R"];
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = 1.0128619025428637e+308
return a*b/c+d
};
var argument10 = null;
var argument11 = {"I":":W","1.3585720727411177e+308":783,"p'":126};
var argument12 = r_1;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = 403
base_3[0] = "Z"
base_3[1][0] = 242
return a/b+c/d
};
var base_0 = ["[z","|"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[z","|"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[z","|"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[z","|"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test136.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)