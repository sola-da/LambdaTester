





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][2] = [-1]
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = {"63":607,"969":82,"S":7.562645184601284e+307,"J":"gV3"}
argument3[607] = ["$g",1.7976931348623157e+308,-100,1.7976931348623157e+308,627,969,843]
base_1[0][1.4677087964888306e+308] = [655,607,"L","n","9"]
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][3] = null
argument5[6] = null
base_2[0] = true
return a-b/c
};
var argument4 = false;
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = true
argument7[1.6177106033227046e+308] = {"122":"","213":"","242":607,"705":"9","-100":-100,"":1.0218962670590344e+307,"z":"","1.0754387875708456e+308":"","5U`":"4"}
argument7['f'] = false
return a-b-c
};
var argument7 = 595;
var base_0 = [242,59,157,655,213,705,122,126,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,59,157,655,213,705,122,126,403]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,59,157,655,213,705,122,126,403]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,59,157,655,213,705,122,126,403]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test729.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)