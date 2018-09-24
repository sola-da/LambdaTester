





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = false
argument2[1] = ""
argument2[893] = 9.123976447054337e+307
return a-b+c
};
var argument2 = true;
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1.4677087964888306e+308] = [823,783]
return a+b*c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[607] = null
argument8[5] = true
argument8[1]['d'] = {"627":122,"dV&":1.362769737292381e+308,"2.387856189268567e+307":2.8538349367514245e+307,"":"!","|#)H`":""}
return a*b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[969] = 1.4123410936732993e+308
base_3[3] = false
return a+b-c
};
var argument9 = r_0;
var argument10 = r_1;
var base_0 = [627,-100,714,783,595,-100,213,714,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,-100,714,783,595,-100,213,714,100]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,-100,714,783,595,-100,213,714,100]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test244.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)