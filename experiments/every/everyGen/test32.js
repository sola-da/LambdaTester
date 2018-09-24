





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = 627
base_0[7] = {}
base_0[6] = false
return a/b*c
};
var argument2 = [969,49,403,157,627,893,403,607];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = false
argument4[4] = {"82":"","595":1.7827021435410226e+308,"714":1.0830644608502116e+308,"$":1.5658332054841988e+308,"4Zp":627,"":1.2833910079036087e+308,"1.2348338590731009e+308":"","q":705}
argument4[4] = [893,5e-324,655,607,100,1.7976931348623157e+308,893,82]
return a+b*c
};
var argument4 = ["tKE%r","OG","*","60,1","-!",";","G1]<DE","w"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"0":"","627":705,"893":"P","r":1.1964910736045723e+308,"8.720934163713851e+307":59,"-100":"","2.7640659871108197e+307":""}
argument6[0] = null
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
return a/b/c
};
var base_0 = [122,595,-100,242,157,213,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,595,-100,242,157,213,893]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,595,-100,242,157,213,893]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,595,-100,242,157,213,893]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test32.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)