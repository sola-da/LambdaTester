





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = null
base_0[4] = [705]
return a*b+c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = {}
base_1[4] = ""
return a/b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['A'] = {"1.7598446004261243e+308":"s","6.960615974593301e+307":"",">v[$%":3.650309931575668e+307,"":""}
argument7['A'] = null
return a*b+c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = {"0":"EDzv","59":9.769991451578944e+307,"-100":618,"X9":6.129389492924566e+307,"GV":"","":"","`jL{":893,"8.860575838731721e+307":6.774374258810923e+307,"1.5046565786052023e+308":2.410954668532999e+307}
argument9[3.0481490052276395e+306] = true
base_3[6] = {"25":1.272190706536128e+308,"126":"Vh","893":"5r","3.579007301704811e+307":"|6uy","":969,"1.7895952194157582e+308":4.950006497063123e+307,")Px":1.2701405499360306e+308,"I":"","b":714}
return a+b-c
};
var argument9 = null;
var base_0 = [893,893,"9","j"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test686.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)