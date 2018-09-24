





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"607":"","5.43466326792991e+307":"Gt!",":h":4.2615806363184577e+307,"E":"Z"}
argument2[3] = ["wbz","t",823,"I","0$",82,242,-1,-100,893]
return a*b-c
};
var argument2 = true;
var argument3 = {"100":1.7296169358978193e+308,"157":"","705":"","893":4.632480646451753e+307,"43c":100,"8.270896616260866e+307":"]w","1.3416259121428735e+307":1.1906204914095954e+308,"":213};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = ""
base_1['length'] = true
return a/b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ""
base_2[2] = ""
return a*b-c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.3156198695370476e+307] = "@"
argument9[2] = null
base_3[4] = {"403":"2n","607":"X","Q":126}
return a*b+c
};
var argument8 = {"5":1.4381524779286733e+308,"Xkpudr":82};
var base_0 = [242,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,714]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,714]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,714]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test283.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)