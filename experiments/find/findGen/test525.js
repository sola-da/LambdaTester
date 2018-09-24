





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.399309004356655e+308] = false
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"242":213,"595":655,"1.7173047913506838e+308":"","":"","2.597744325527853e+307":"","1.6298936253141458e+308":"kR","I":1.2023852948999127e+308}
return a+b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"48":"x","":100,")":"<q","!":"","4.065953143384003e+306":""}
base_2[0][2] = 1.7976931348623157e+308
base_2[0][6] = true
return a/b+c
};
var argument4 = null;
var argument5 = 1.554681115799677e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1] = {"1":"","627":"","969":"Fr","":"l","1.4265568782802065e+308":5e-324}
argument7 = {"100":"$","627":"","":213,"k":1.1643509392830561e+308}
return a/b+c
};
var argument7 = null;
var base_0 = [893,403,49,5e-324,-1,705,1.7976931348623157e+308,843]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,403,49,5e-324,-1,705,1.7976931348623157e+308,843]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,403,49,5e-324,-1,705,1.7976931348623157e+308,843]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,403,49,5e-324,-1,705,1.7976931348623157e+308,843]
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
require("fs").writeFileSync("./experiments/find/findGen/test525.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)