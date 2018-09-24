





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = null
base_0[2] = {"0":"p","4.23828821453722e+307":"F!$4l","1.5251545667722466e+308":705,"1.296467925069449e+308":"::","3.972378139512312e+307":"E2","3.9804138699008134e+307":""}
return a*b*c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = 1.453631314960117e+308
argument5['T'] = 2.354627413961592e+307
return a-b-c/d
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['K'] = {"1.7976931348623157e+308":460,"xU":"r","hm":714}
argument7[9.624051682326797e+306] = false
return a-b*c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = ["Z","[","a:","W","A","%"]
return a*b*c+d
};
var argument8 = {"595":"","1.3788309692694524e+308":5e-324,"":1.0852710181541324e+308,"A":"&WYS4","9.927956148233684e+307":1.7596871007859898e+308,"1.5706450184473583e+308":"","1.6095157234184756e+308":1.0571006351595602e+308};
var base_0 = ["e","M","s","O4"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","M","s","O4"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","M","s","O4"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","M","s","O4"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test958.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)