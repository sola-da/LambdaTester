





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = ""
argument2[4] = {"0":893,":u":">Ch{s"}
base_0[0] = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = 8.302575970427882e+307
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 1.7066799784135287e+308
argument5[7] = {"460":"","655":"Rdh","969":"","1.6758011306932908e+308":"",",b":5.064358406393175e+307,"":"","<S":1.5673012995831527e+308}
argument5[3.3156198695370476e+307] = {"59":"v","":"","m?3":9.322764035629532e+307,"s?":1.954968471289429e+307,"j2t":0,"1.7976931348623157e+308":5.937008765920125e+307,"1.1571246174869248e+308":3.24739984844492e+307}
return a*b/c
};
var argument5 = r_0;
var base_0 = ["C","D","M","N","T;D","*"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","D","M","N","T;D","*"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C","D","M","N","T;D","*"]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","D","M","N","T;D","*"]
var r_3= undefined
try {
r_3 = base_3.every(argument4,argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test862.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)