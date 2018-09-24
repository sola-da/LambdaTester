





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = [0,"V",607]
argument3[6.35085648319999e+307] = false
base_0[0][3] = ["vXxE0I&",126,59]
return a*b+c+d
};
var argument5 = false;
var argument6 = false;
var argument7 = -100;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[59] = 213
return a/b/c+d
};
var argument9 = "R";
var argument10 = null;
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = 5.167324133244745e+307
return a+b/c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = true
base_3[0][9.12287810829114e+307] = {"82":1.3929025873833756e+308,"t{#":"","22K;=a39pH":"","1.2548611195235955e+308":4.356116927687329e+307,"zD":126,"8.03964311198917e+306":893,"":"","Pu^lR(@":157}
return a+b-c-d
};
var argument14 = r_2;
var argument15 = null;
var base_0 = ["^{^$","&","T","a","a","gP","["]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^{^$","&","T","a","a","gP","["]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^{^$","&","T","a","a","gP","["]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^{^$","&","T","a","a","gP","["]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test319.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)