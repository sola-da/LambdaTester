





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = [705,403]
argument2[0] = [655,893,"Jx"]
argument2[0] = true
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"4.669047828917893e+307":1.7976931348623157e+308,"1.6111909221514076e+308":607,"":157,"9.671944385054846e+307":""}
argument3 = "9]0&"
base_1[5] = {"49":242,"843":3.50775313451604e+305,"":"K","j":1.6743865941724667e+308,"1.1508981221717804e+307":4.907138319665248e+307,"q9m":595,"(":"K","3.023116731560942e+307":"R@","6.291951990783069e+306":6.84436757783497e+306}
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ["9H","k,",705,"r+^","q",460]
base_2['length'] = null
return a-b-c
};
var argument4 = r_0;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.3156198695370476e+307] = 8.830708207953221e+307
base_3[0] = ["Y","5HN",242,242]
return a-b+c
};
var base_0 = ["y","n=Ip=",893,82,242,"=",595,"mx"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y","n=Ip=",893,82,242,"=",595,"mx"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y","n=Ip=",893,82,242,"=",595,"mx"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y","n=Ip=",893,82,242,"=",595,"mx"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test110.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)