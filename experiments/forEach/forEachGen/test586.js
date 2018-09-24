





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7394185942769049e+308] = 893
argument3[1.4034744228995816e+308] = {"49":607,"122":"","":8.308763673858985e+306,"{":"","7.823470116323041e+307":"","]e":"","1.3446851858726681e+308":1.7807987357252272e+308,"1.5466550633854674e+308":""}
argument2[3.0481490052276395e+306] = 1.435889526129634e+308
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[157] = null
return a*b/c
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ""
argument7[7] = [627,627]
argument7[3] = false
return a+b/c
};
var argument6 = {"82":618,"460":3.940745630835119e+307,"655":"","969":1.4807338839617702e+308,"":1.509838595826959e+307,"R#":"E","s":705,"a":893};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8.748669805137695e+307] = [122,213,969,893]
argument8 = {"460":1.2646158805363029e+308,"823":"","":627,"4.381608580050782e+307":0,"2.0094049309215682e+307":""}
return a/b-c
};
var argument9 = false;
var argument10 = false;
var base_0 = [705,893,969,893,49,213,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,893,969,893,49,213,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,893,969,893,49,213,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,893,969,893,49,213,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test586.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)