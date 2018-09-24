





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = {"3*h":893}
base_0[1] = "S("
argument1 = "z"
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"705":460,"783":8.811646004475184e+307,"1.3770752908532741e+308":"","8.411772156172929e+307":4.2229804891442793e+306}
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = [460,595,-1,157,49]
argument4[893] = true
return a*b/c
};
var argument4 = {"25":"","607":126,"823":"","1.150855218454733e+308":"0","":"wn","aCNe":"",",":460,"2.7953406123757557e+307":""};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = 1.0147748186682651e+308
return a-b/c
};
var base_0 = [-1,157,100,213,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,157,100,213,893]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,157,100,213,893]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,157,100,213,893]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test193.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)