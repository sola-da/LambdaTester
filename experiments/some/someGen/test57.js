





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = true
base_0[0] = {"714":0,"893":157,"ag":8.618193939830369e+307,"9.434554395547539e+307":823,"":"]}","|":6.039883032163697e+307,"H":0,"1.6817615589410406e+308":1.3742651775814065e+308}
return a*b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = [595,122,823,1.7976931348623157e+308,618,783,25,59,100]
return a/b*c
};
var argument4 = 9.919530963940643e+307;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.6798476101238045e+308] = {"p":"_","":""}
return a+b/c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = "Z"
argument9[4] = true
base_3[0] = {"49":1.3765135881968491e+308,"893":"","":"k","3.9605510522072915e+307":714,"`#`f":"","4.757844257568974e+307":"","1.6746484119294358e+308":"H","1.1826570571183187e+308":""}
return a/b/c
};
var argument9 = "";
var base_0 = [714,783,969,59,242,-100,969]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,783,969,59,242,-100,969]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,783,969,59,242,-100,969]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,783,969,59,242,-100,969]
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
require("fs").writeFileSync("./experiments/some/someGen/test57.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)