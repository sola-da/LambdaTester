





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"157":"5%","714":714,"":1.1355955927777491e+308,"h":"(<","3.46378570437083e+306":627,"DmW'":627,"1.720611043027593e+308":"]","d":242}
base_0[9] = true
return a+b-c
};
var argument2 = 403;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = 5e-324
base_1[1][8] = {"59":"+","100":"]X","823":705,"qH":7.302501394738578e+307,"":"Z!","7.634564336577639e+307":""}
base_1[3] = "1!"
return a+b/c
};
var argument4 = true;
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = "r"
base_2[8] = {"0":"","705":2.5574557229107237e+307,"969":"","W":242,"1.2971549658107676e+308":"M$","-100":"_","1.6044467762533689e+308":4.855784219588827e+307,"1.2991500454663309e+308":655}
argument8 = {"969":"","":"","9.752047977604405e+307":9.130189455683348e+307}
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = 2.1073339412127237e+307
return a*b/c
};
var argument8 = 1.1258288337235086e+308;
var base_0 = [460,-1,627,49,0,893,627,655,59]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,-1,627,49,0,893,627,655,59]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,-1,627,49,0,893,627,655,59]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,-1,627,49,0,893,627,655,59]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test62.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)