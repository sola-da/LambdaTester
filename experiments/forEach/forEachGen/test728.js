





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['?'] = ""
base_0[2] = {"0":627,"126":"","595":"kq]*2M","":-1,"1.3709687885529786e+308":"R","1.7644493976175692e+307":242,"2.125738948659514e+307":"t","9R":""}
argument1['1SHF1'] = false
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = null
argument4[7] = 1.7609718677445298e+308
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = "O!1"
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = false
base_3[4][4] = null
return a/b/c
};
var argument6 = null;
var argument7 = null;
var base_0 = [823,")u","z","&","A=:",25,"g!"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,")u","z","&","A=:",25,"g!"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,")u","z","&","A=:",25,"g!"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,")u","z","&","A=:",25,"g!"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test728.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)