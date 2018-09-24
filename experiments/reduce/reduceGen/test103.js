





var callbackArguments = [];
var argument1 = null;
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = false
base_0[6] = {"49":157,"$":2.1922138419355846e+307}
return a-b-c/d
};
var argument5 = r_0;
var argument6 = r_1;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = null
base_1[6] = false
argument7[5] = {"`":126}
return a+b+c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = false
base_2[2] = ""
return a+b*c-d
};
var argument10 = ["r","(","!6","w","yX","!"];
var argument11 = true;
var argument12 = r_2;
var argument13 = null;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[126] = ""
base_3[0][3] = 460
base_3[1][0] = {"607":1.0750304475033423e+308,"893":1.1485996393056065e+307,"7.775649032182054e+307":"","2.984912599079493e+307":"jY","yk#$":"e","":460,"4.2700030228200026e+307":595,"1.3595908850281993e+308":""}
return a-b*c-d
};
var base_0 = ["X","g","xq","4","Si","5*&","dy?*z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","g","xq","4","Si","5*&","dy?*z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X","g","xq","4","Si","5*&","dy?*z"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X","g","xq","4","Si","5*&","dy?*z"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test103.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)