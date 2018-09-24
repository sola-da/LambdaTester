





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][6] = {"82":618,"783":1.5621564249534946e+308,"":"","1.1758508881378284e+308":""}
base_0[1][2] = ""
argument2[0] = {"893":")","":"","D":"","o":25,"3.3344792592143733e+307":618}
return a-b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = "S?1`"
base_1 = ""
base_1[0][6] = [607,"&"]
return a+b-c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = "6n"
argument6[893] = ["st","J","l","-BL","_s2","1","e"]
argument6[8] = {"4":"6uI","100":2.0608725856284373e+307,"":705,"_":"N`","j":1.0978526797651241e+308}
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2.4183178393969103e+306] = 969
argument7[6] = false
argument6[2] = 4.326888590834434e+307
return a-b/c
};
var argument7 = r_2;
var argument8 = [122,403];
var base_0 = [823,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test595.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)