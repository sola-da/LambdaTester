





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = ["(","7",49,893,"i+",-100]
argument2['$*I'] = null
argument2[3.0481490052276395e+306] = false
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"655":"","705":"4","1.372744036303978e+308":1.7348024155988105e+307,"":"","7.771364682169291e+307":0,")":-100,"5.943106094549105e+307":595,"5e-324":"","fU":">"}
argument3[1.268696794505825e+308] = {"8":843,"157":1.226134365718395e+308,"5.780042238316448e+307":126,"*":"F?^","3.267863283064042e+307":"","":"-#`"}
return a+b/c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = false
argument5[5] = false
return a/b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.92397107964922e+307] = ""
return a+b-c
};
var base_0 = [843,-1,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,-1,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,-1,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,-1,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test847.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)