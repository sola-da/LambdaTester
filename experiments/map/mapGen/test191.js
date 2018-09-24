





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7][2] = 5.451460343499782e+307
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = {"25":"","3.7829128828161406e+307":"","U8^-":"T","1.0621979833367949e+308":3.3215391156210527e+307,"5.524571520506323e+307":403,"1.0028058742483738e+308":1.2401846461225833e+306,"1.4608139937481083e+308":1.1507331341026996e+308}
argument3['A'] = true
argument3['A'] = null
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = 1.0184961047956091e+308
return a*b/c
};
var argument4 = ["]F"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = 1.0202894543530864e+308
base_3[9] = 2.4264602803157305e+307
return a/b/c
};
var argument6 = false;
var argument7 = false;
var base_0 = [714,25,"_",618,"Lq4#Ns",843,655,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,25,"_",618,"Lq4#Ns",843,655,705]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,25,"_",618,"Lq4#Ns",843,655,705]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,25,"_",618,"Lq4#Ns",843,655,705]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test191.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)