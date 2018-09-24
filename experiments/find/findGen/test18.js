





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"213":"","242":6.805671506347077e+307,"460":"","1.493967373633568e+308":"2","1.4805221949558912e+308":"o","5.012887173795741e+307":1.7783794731378768e+308,"":"4"}
return a*b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = null
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = {"460":1.2112189117890914e+308,"893":"v1","1.95504578364199e+307":-1,"":157,"c":"lpe<z","9.26004844424454e+307":"8T]"}
return a/b/c
};
var argument5 = {"607":1.26766922334961e+307,"$=":"","1.0762460216474176e+308":9.781759237519606e+307,"":"1","1.7166859424487419e+308":"","6 NX":5.802273417054829e+306};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b-c
};
var argument7 = {"49":"q","100":"","595":"","607":"{:","":"ux7gs","Z'":1.4458149235295055e+306,"]zNq&)q":1.6930769630115494e+308,"1.0500354979187844e+308":0,"O":"","2M":0};
var argument8 = null;
var base_0 = ["s","!","kMYmS","3&","Kv","n","?t"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s","!","kMYmS","3&","Kv","n","?t"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s","!","kMYmS","3&","Kv","n","?t"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s","!","kMYmS","3&","Kv","n","?t"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test18.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)