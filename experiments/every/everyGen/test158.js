





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = null
base_0[2] = null
base_0[6] = true
return a/b*c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"hNH":1.6154867901669553e+308,"1.3874363106184942e+308":1.6517706952938182e+308,"":-1,"g":1.7934322767504782e+308}
base_1[3] = false
return a/b-c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = false
return a-b-c
};
var argument7 = {"126":"","783":1.190200149290833e+308,"":"","1.745658935362702e+307":"-,","1.7444305205166846e+307":"}","1.063813162096575e+308":25,"8.158331452717304e+306":1.743192451803031e+308,"1.205367971338158e+307":"^"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
base_3[0] = [1.7976931348623157e+308,403,157,655,843]
return a-b/c
};
var base_0 = ["zW","f7}","U2lY","_"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["zW","f7}","U2lY","_"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["zW","f7}","U2lY","_"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["zW","f7}","U2lY","_"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test158.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)