





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = false
return a-b-c
};
var argument2 = {"100":"","122":242,"":"","4.742098851863396e+307":5e-324,"1.5618695413331252e+308":9.785872767576926e+307,"5k":"","No":""};
var argument3 = {"":1.0845733764214699e+308,"3.349689342145493e+307":6.04529720204161e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[49] = false
base_1[3][1] = null
argument5[1.6177106033227046e+308] = {"122":25,"1.7703191857131347e+308":"","1.7976931348623157e+308":"","":5e-324,"v-v5":627,"1.0282922679548446e+308":""}
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2][6] = ""
return a*b+c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[157] = false
argument9[0] = {"25":"A","595":"","":6.634447959813193e+307,"1.494797818487872e+308":213,"1.5470537297270164e+307":1.6293489129121834e+308,"FV":"","6.447225992662938e+307":1.6100032415945687e+308,"Eb":"","1.3552692680841453e+308":403}
argument8[893] = "+!"
return a+b-c
};
var argument8 = false;
var argument9 = ["gP",">","zZ","KN","Y;","Vc]G","W","3RL"];
var base_0 = [595,157,213,59,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,157,213,59,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,157,213,59,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,157,213,59,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test669.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)