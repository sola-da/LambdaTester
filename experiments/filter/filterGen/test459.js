





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][7] = ["*","gGw","#X","F","Q",82,403,59,";",823]
argument2[3] = "+"
argument3[6] = "A"
return a+b*c
};
var argument2 = true;
var argument3 = {"1.1373228797381131e+308":"","n":1.0853360488429291e+308,"7.950831507459153e+307":100,"":714,"1.1870799762502225e+308":6.606193597452268e+307,"X&Rdr":1.0207582742490703e+308,"`":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.7847438319683965e+308] = "5"
argument6[1.4034744228995816e+308] = "5A"
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = [-100,126,618]
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7847438319683965e+308] = true
argument7['c'] = {"":"","U":"e","1.6531237203828828e+308":"","1.9406799646468724e+307":1.6295552437667719e+307}
base_3[0][4] = {"82":"u","122":"","618":595,"":1.6779857906854687e+308,"s:":")","1.5113158212504102e+308":"V","U":6.898806873592904e+307}
return a/b-c
};
var argument7 = true;
var base_0 = [403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test459.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)