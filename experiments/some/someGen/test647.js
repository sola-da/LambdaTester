





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.551053197482062e+307] = {"893":"","-100":"","8.121087395329663e+307":"","8.141532848302877e+307":1.5431178014755807e+306}
argument2[3] = 1.2646077098911839e+308
argument3[3] = 9.240251864542073e+307
return a/b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = {"":1.7215751883881763e+308,"4.281507474508409e+307":1.4782244452786602e+308}
base_1[6] = 100
base_1[3][6] = null
return a+b/c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = [705,655]
argument5[1] = ";o"
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = {"460":"06`","1.7542226263003638e+308":3.217963454975915e+307}
base_3[2] = {"25":5.891135961115323e+307,"607":157,"D`Jkh":"","":7.554917445061047e+307,"-100":1.1392868252256759e+308,"3.683429631611976e+307":"","1.7976931348623157e+308":1.6246402117946748e+307}
return a-b+c
};
var base_0 = [-1,-100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,-100]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,-100]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,-100]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test647.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)