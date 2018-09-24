





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5] = true
base_0[5] = {"655":"","893":705,"-100":4.551003452793983e+306,"1.3691035447286266e+308":607,"1.5142585240022878e+308":1.359136872727139e+308,"2.752475637127002e+307":":S","%;":"18{","-1":""}
base_0[4] = {"3":1.392282022603362e+306,"&-":705,"J":"3","$u":-100,"5.091880966048685e+307":49,"8.52581987686938e+307":0,"":"w","6.48462256079936e+307":6.428245440695281e+307}
return a+b*c
};
var argument2 = false;
var argument3 = ["5","9","Q1","U","z","hC","U","?A","Q["];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['j'] = 823
return a/b*c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['f'] = true
return a/b+c
};
var argument7 = {"d":"hG:","":2.7778292342023053e+307,"G":"","1.6665260130866123e+308":"Ebj","1.0504586220708937e+308":"","w":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = [1.7976931348623157e+308]
return a/b+c
};
var base_0 = [-1,655,403,655,403,705,595,655,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,655,403,655,403,705,595,655,607]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,655,403,655,403,705,595,655,607]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,655,403,655,403,705,595,655,607]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test312.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)