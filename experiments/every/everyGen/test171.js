





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"570":823,"":"!DE","Hsbs":6.672655539646841e+307}
return a-b-c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = null
base_1[1] = null
argument5[122] = false
return a-b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = ""
argument7[2] = null
return a+b/c
};
var argument7 = "6Oq";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = ""
return a+b+c
};
var argument9 = r_1;
var base_0 = [714,595,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,595,714]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,595,714]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,595,714]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test171.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)