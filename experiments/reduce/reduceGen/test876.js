





var callbackArguments = [];
var argument1 = null;
var argument2 = "#";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = {"5":1.0466178974446706e+308,"49":"","122":"","460":"","893":1.038746070709149e+308,"":843,"M":9.78760842929494e+307,"1.42935716034195e+308":"J1","D":1.1177734421332448e+308}
argument3[627] = 9.657756262969182e+307
base_0[3][1] = ["eo","8x","G","S","p","E","l^&z","{<uQ"]
return a+b/c/d
};
var argument5 = "";
var argument6 = "h?";
var argument7 = {"25":1.708726868737104e+308,"59":"E$oY","969":460,"kk":"","g":":","1.7976931348623157e+308":"N3:sL"};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[82] = "("
return a*b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['18{'] = true
return a*b*c+d
};
var argument10 = false;
var argument11 = r_0;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = false
return a*b-c/d
};
var base_0 = ["^","q","G"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^","q","G"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^","q","G"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^","q","G"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test876.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)