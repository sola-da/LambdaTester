





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = true
return a+b*c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
base_1[0][2] = true
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = {"618":627,"7.906606633217677e+307":1.2316043700529997e+308,"iM":"","aFU%":1.0450235643206654e+308,"aKE":"","2.2941590006231e+307":""}
return a/b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = 1.7976931348623157e+308
argument5[5] = ["CmLD","A","<","U;"]
return a+b/c
};
var argument6 = r_1;
var argument7 = null;
var base_0 = ["@","BFc","c","#"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@","BFc","c","#"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@","BFc","c","#"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@","BFc","c","#"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test671.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)