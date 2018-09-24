





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = false
base_0[5][0] = 4.662297794980129e+307
return a-b-c
};
var argument2 = 1.278835365858378e+308;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = null
base_1[0] = -1
argument4 = null
return a+b+c
};
var argument4 = 4.935784610255024e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = [")%e2Q7",">","8Y","3","K","wm*","wE","Xdo(CM","?W","nw"]
base_2[4] = {"49":"","vb":"","1.7976931348623157e+308":460,"-1":6.80089674869477e+307,"X":1.1001250108373802e+308,"ZPuH":618,"1.5897126261063356e+308":"H","":""}
return a/b*c
};
var argument6 = null;
var argument7 = {};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
base_3[1][3] = 1.0821100267872727e+308
return a-b+c
};
var argument9 = null;
var argument10 = [618,655];
var base_0 = [893,-1,893,969]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-1,893,969]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-1,893,969]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-1,893,969]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test99.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)