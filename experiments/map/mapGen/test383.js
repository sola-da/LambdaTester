





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = null
argument2['f'] = 893
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2][5] = 1.4335424697249596e+308
argument4[7] = null
argument3[6] = {"49":"=:+kFe","126":"pvL","843":627,"1.7084605945602805e+308":1.359009388828754e+308,"6.277379982368375e+307":3.9285960188693716e+307,")y9Y":1.7976931348623157e+308}
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2][6] = true
return a+b*c
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][7] = {"59":"","460":823,"618":"","714":"wJUg","1.281013474000167e+308":"","":"T","1.445602021231945e+308":4.70447128863147e+306,"-1":7.695495303859891e+307,"1.312015749300432e+308":"#"}
argument8['T'] = ""
base_3[0][0] = 100
return a/b/c
};
var argument7 = r_0;
var argument8 = "";
var base_0 = ["oX","<#","z:$","vS","29};yY","s"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oX","<#","z:$","vS","29};yY","s"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["oX","<#","z:$","vS","29};yY","s"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["oX","<#","z:$","vS","29};yY","s"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test383.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)