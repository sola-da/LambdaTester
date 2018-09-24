





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = ":vd"
return a*b/c-d
};
var argument5 = [0,714];
var argument6 = {"655":6.912818474171462e+307,"=":9.292346902622645e+307,"1.7763952355961887e+308":"","":"e"};
var argument7 = {"655":1.6407594021899624e+308,"":4.085914547259411e+306,"6.429811537890245e+307":-100,"1.2846022584847967e+308":157,"xY":1.125654186105667e+308,"6@":2.7034750107470893e+307};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = null
argument6[7] = 1.0348631540345122e+308
return a-b*c*d
};
var argument9 = r_2;
var argument10 = null;
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['*c'] = null
base_2 = ["N}","u,aq)8"]
argument11['18{'] = false
return a/b*c/d
};
var argument13 = null;
var argument14 = r_3;
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[1.359136872727139e+308] = 1.2634837971421229e+308
return a*b-c/d
};
var base_0 = ["(ZVp"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(ZVp"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(ZVp"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(ZVp"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test607.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)