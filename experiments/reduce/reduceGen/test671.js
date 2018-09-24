





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = [893,49,"!j","I"]
argument2[7.463432409233234e+307] = false
return a/b-c-d
};
var argument2 = false;
var argument3 = false;
var argument4 = ["Lv","?Eb","z[iU","J","jOx","s"];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = false
base_1[7] = {"n d[I":2.926289790781028e+307}
return a+b+c-d
};
var argument6 = null;
var argument7 = 1.3598945188265503e+308;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = null
argument7[82] = null
return a/b+c*d
};
var argument10 = r_3;
var argument11 = r_3;
var argument12 = {"705":893,"":"2Qv","wg":59,"3.85647008878181e+307":"","iI6@fL":"^$R5","Vg%":0,"1.7976931348623157e+308":"a^1","!":-100,"1.2296950137626241e+308":""};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = 618
return a+b/c-d
};
var base_0 = [-1,25,969,"h"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,25,969,"h"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,25,969,"h"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,25,969,"h"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test671.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)