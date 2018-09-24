





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = "("
return a+b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = null
base_1[0][3] = ["7","N4>dr","K4","!j","!P","k3&"]
base_1[1] = false
return a+b/c
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ""
argument8[1.1881593224845412e+308] = {"122":6.663835997025413e+307,"!4":"","":1.721821140755962e+308}
return a*b/c
};
var argument7 = 2.9021420676562156e+307;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1] = {"6.980217920866327e+307":213,"?7":"mS ","":8.510602784715386e+307,"!":"zr","u;L":714,"3.172720248002781e+307":"","D":6.811681313332409e+307}
return a/b+c
};
var argument10 = [595,49];
var base_0 = [705,1.7976931348623157e+308,783,157,893,783,607,714,-1,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,1.7976931348623157e+308,783,157,893,783,607,714,-1,100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,1.7976931348623157e+308,783,157,893,783,607,714,-1,100]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,1.7976931348623157e+308,783,157,893,783,607,714,-1,100]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test496.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)