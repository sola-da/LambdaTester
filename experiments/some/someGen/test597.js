





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f!BO'] = {"82":618,"783":1.5621564249534946e+308,"":"","1.1758508881378284e+308":""}
argument2[403] = ""
argument1[2] = {"893":")","":"","D":"","o":25,"3.3344792592143733e+307":618}
return a-b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.0727847755854773e+308] = "S?1`"
argument4 = ""
base_1[4][8] = [607,"&"]
return a+b-c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7] = "6n"
argument7[4] = ["st","J","l","-BL","_s2","1","e"]
argument6[1.5109538778533692e+308] = {"4":"6uI","100":2.0608725856284373e+307,"":705,"_":"N`","j":1.0978526797651241e+308}
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['f'] = 969
argument8[7] = false
argument8[1] = 4.326888590834434e+307
return a-b/c
};
var argument7 = r_2;
var argument8 = [122,403];
var base_0 = [823,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test597.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)