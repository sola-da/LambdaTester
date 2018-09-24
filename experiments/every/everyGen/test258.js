





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"0":655,"7":-100,"59":82,"969":1.4019976326981327e+308,"kGQx":5.387146132386978e+307,"h":1.1125022387265248e+308}
argument2 = true
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = {"627":1.3044018603299644e+308,"":618,"7.188616670653975e+306":"Zy5","Y":5.850705662190072e+307,":":655}
base_1[8] = {"1":1.427935514001795e+308,"705":"3g","":618,"T":1.7976931348623157e+308,"N":100,"V=6F":1.4198021770784604e+308}
base_1[9] = {"C{=":"k","":"","9.33834929269284e+307":"","3.993537279671789e+307":6.950316865522607e+307,"&ZkP":"w","6.879101866488942e+307":""}
return a+b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = {"403":1.6050545696524495e+308,"5.598066686385096e+307":9.966211401067535e+307,"[l":100,"":126,"8.167364464965488e+307":1.572126048027877e+307,";":460,"D":714}
base_2[8] = "#"
return a-b-c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = {"627":"D","W":9.565898340562453e+306,"":627,"}t":9.533671009479324e+307}
return a-b*c
};
var base_0 = [655,714,213,893,59]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,714,213,893,59]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,714,213,893,59]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,714,213,893,59]
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
require("fs").writeFileSync("./experiments/every/everyGen/test258.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)