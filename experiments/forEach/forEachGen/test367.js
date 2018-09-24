





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][823] = null
argument3[5] = true
argument2 = [893,49,595,-1,595,-100,122,969,655]
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = "P"
return a/b-c
};
var argument3 = r_0;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = true
argument5[7.92397107964922e+307] = {"2.7608538342741447e+307":"","":213,"ht1R":"","1.3276466738196832e+308":"","OP":"rS^","9.573642442951698e+307":"9","FWv9":"R_6}","1.0839412254275045e+308":6.057992580806615e+307}
argument6[7] = [655,122,403,783,-100,618,1.7976931348623157e+308,100,843,5e-324]
return a*b/c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = 1.7060502464768137e+308
base_3[4][4] = ""
argument7['1SHF1'] = {"0":"=","9":"","100":3.393442888848869e+307,"242":"}","607":"","":1.1647825849743227e+308,"6.509093929888981e+307":705,"i":"","7.76535490148246e+307":82}
return a/b-c
};
var argument8 = [122,59,242];
var base_0 = [783,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test367.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)