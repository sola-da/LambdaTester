





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = true
return a*b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = ["i",")yJ","@"]
argument4 = {"3.372624688462316e+307":"","vU":"","1.1901138489755842e+308":4.592104718062252e+307,"":"","6.900679286559904e+307":823,"l'":6.487866655559311e+307,"b":8.647029874950395e+307}
argument4[0] = "{"
return a-b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = true
return a/b*c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"Go ":"Q","":"","7.684328665498127e+307":82,"1.438107279380901e+308":705,"W_":"4"}
argument8[1.6798476101238045e+308] = {"122":6.513179956956407e+307,"714":4.736863204667712e+307,"1.006478609530841e+308":"","8.918278653753508e+307":969,"7.140754571588437e+306":"x","3.524507593816126e+307":213,"":-100,"imjI":4.760069439522623e+307}
base_3[4] = "k>"
return a+b/c
};
var argument8 = null;
var argument9 = 6.16888090174269e+307;
var base_0 = [893,213,242,0]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,213,242,0]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,213,242,0]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test56.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)