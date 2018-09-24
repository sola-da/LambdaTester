





var callbackArguments = [];
var argument1 = false;
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = null
argument1[0] = [655,595,714,100]
argument1[3] = 1.52435937494706e+308
return a*b-c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = [843,25,403,1.7976931348623157e+308,49,655,607,618,242]
return a*b+c/d
};
var argument6 = false;
var argument7 = {};
var argument8 = false;
var argument9 = r_0;
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = {"705":"1)l","7.459109832276643e+307":969,"1.221151662863244e+308":"","j":2.0339946407455619e+307}
return a-b/c+d
};
var argument12 = "m";
var argument13 = null;
var argument14 = false;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[2] = false
return a*b+c-d
};
var base_0 = [627,618,607,100,618,893,893,122,1.7976931348623157e+308,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,618,607,100,618,893,893,122,1.7976931348623157e+308,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,618,607,100,618,893,893,122,1.7976931348623157e+308,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,618,607,100,618,893,893,122,1.7976931348623157e+308,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test470.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)