





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.3130321063336282e+308] = "="
argument2[1.7394185942769049e+308] = {"64":618,"893":1.752773258892752e+308,"1.7976931348623157e+308":213,"":"(2"}
argument2[2] = {"122":5.367247225904123e+307,"7v":"P`","J,U":1.197286939747644e+308,"":"","4.742098851863396e+307":5e-324,"1.5618695413331252e+308":9.785872767576926e+307}
return a/b/c
};
var argument2 = "M";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = "$No"
return a*b-c
};
var argument5 = r_0;
var argument6 = {"":1.0845733764214699e+308,"3.349689342145493e+307":6.04529720204161e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['D'] = false
base_2[0][0] = null
argument8[403] = {"122":25,"1.7703191857131347e+308":"","1.7976931348623157e+308":"","":5e-324,"v-v5":627,"1.0282922679548446e+308":""}
return a+b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = ""
return a*b+c
};
var argument9 = null;
var base_0 = [893,783,403,0,100,25,"&"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,783,403,0,100,25,"&"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,783,403,0,100,25,"&"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,783,403,0,100,25,"&"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test690.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)