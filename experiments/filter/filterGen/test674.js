





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][2] = {"122":242,"":"l","1.274913551626749e+308":3.7270890975875074e+307,"v1G":783,"No":"","3.0690185740599e+307":""}
return a+b/c
};
var argument2 = [618,1.7976931348623157e+308,627,655,126,126];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.3434821406183095e+308] = null
argument6[1.0546776681946723e+308] = {"122":25,"1.7703191857131347e+308":"","1.7976931348623157e+308":"","":5e-324,"v-v5":627,"1.0282922679548446e+308":""}
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[157] = ""
return a*b+c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7121211182125595e+308] = false
argument8[1] = {"25":"A","595":"","":6.634447959813193e+307,"1.494797818487872e+308":213,"1.5470537297270164e+307":1.6293489129121834e+308,"FV":"","6.447225992662938e+307":1.6100032415945687e+308,"Eb":"","1.3552692680841453e+308":403}
argument8['wIs'] = "+!"
return a+b-c
};
var argument8 = false;
var argument9 = ["gP",">","zZ","KN","Y;","Vc]G","W","3RL"];
var base_0 = [893,242,100,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,242,100,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,242,100,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,242,100,-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test674.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)