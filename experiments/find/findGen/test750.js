





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AO?'] = {"618":"s","783":9.92376539276703e+307,"XA":5.030037950975775e+307,"":213,"-1":"","o":"AkNc","9:'4V+}":5.364314846550502e+307,"9.685827492193244e+307":")"}
argument2[8] = "("
return a/b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"1.7741566988858865e+308":"*9","":213,"_G":"","1.7976931348623157e+308":1.5340744979171705e+308}
argument6['V'] = {"59":1.0163647487767389e+308," U":"&KiRF","[":1.7976931348623157e+308,"1.2963621761998664e+308":"","<":213,"":618,"PI$":"","2.8921844496112627e+307":242}
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.748669805137695e+307] = 2.874432220261944e+307
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = true
argument7[242] = true
return a+b-c
};
var argument7 = [";","f"];
var base_0 = [122,618,122,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,618,122,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,618,122,893]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,618,122,893]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)