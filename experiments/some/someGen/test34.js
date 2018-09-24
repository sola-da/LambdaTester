





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = true
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 2.960734835366934e+307
base_1[2] = ["QL","r"]
return a-b*c
};
var argument3 = 969;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = {"25":1.0264017692635071e+308,"893":1.638557794579497e+308,"":7.627855480641706e+307,"zz":"","1.4884459892506043e+308":"x","1.892375166449034e+305":1.5814393124739261e+308,"x":823,"1.6032028229609818e+308":1.295213295199355e+308}
argument7[6] = [627,893,403,607]
return a*b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = false
argument7 = {"82":"","595":1.7827021435410226e+308,"714":1.0830644608502116e+308,"$":1.5658332054841988e+308,"4Zp":627,"":1.2833910079036087e+308,"1.2348338590731009e+308":"","q":705}
argument8 = [893,5e-324,655,607,100,1.7976931348623157e+308,893,82]
return a+b*c
};
var argument7 = ["tKE%r","OG","*","60,1","-!",";","G1]<DE","w"];
var base_0 = ["[`",",#J","!","Fq","0tt","s9","^%","c","#$"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[`",",#J","!","Fq","0tt","s9","^%","c","#$"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[`",",#J","!","Fq","0tt","s9","^%","c","#$"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[`",",#J","!","Fq","0tt","s9","^%","c","#$"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test34.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)