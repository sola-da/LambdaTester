





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[460] = null
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"618":1.3260818703154458e+308,"843":"-","3.0920075384942446e+307":25,"_USe%z4`j":"s","2.1991870648660473e+307":"c","":""}
argument4['AO?'] = false
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = "1"
argument4[627] = 2.104902115876729e+307
return a/b/c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.0500354979187844e+308] = {"618":627,"-1":9.981132669994919e+307,"":783}
base_3[9] = true
return a+b+c
};
var base_0 = [0,893,"OU(0*","q-",213,893,"7`",-1,5e-324]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,893,"OU(0*","q-",213,893,"7`",-1,5e-324]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,893,"OU(0*","q-",213,893,"7`",-1,5e-324]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,893,"OU(0*","q-",213,893,"7`",-1,5e-324]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test27.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)