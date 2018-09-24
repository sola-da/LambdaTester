





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = [893,100]
argument2[627] = true
return a*b-c/d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = {"59":"2Y","":618,"JWR^":"1","6.651998941641051e+307":0}
base_1[7] = {"25":",","4.3708805697312266e+307":""}
argument5[6.35085648319999e+307] = {"157":59,"1.7976931348623157e+308":49,"":"","RA-":"","1.5666038694642296e+308":"eB`1","V":"E","_":1.2250888225243422e+308,"3.1133151302829977e+307":"","1.5403923054454517e+308":49,"f8":"^"}
return a+b-c-d
};
var argument4 = true;
var argument5 = [607,843,403,969,-100,25,157,25];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[59] = false
return a*b/c-d
};
var argument7 = null;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[82] = "rl["
return a-b-c-d
};
var base_0 = [-100,403,627,460,213,969,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,403,627,460,213,969,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,403,627,460,213,969,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,403,627,460,213,969,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test288.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)