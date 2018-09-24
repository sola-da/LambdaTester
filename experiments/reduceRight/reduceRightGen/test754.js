





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = 627
argument3[655] = {"714":0,"783":655,"":"Q","8.416665620610308e+307":"m","Q":"rF","1.1968964937346895e+308":""}
base_0[9] = {"0":100,"100":0,"213":6.917876315353564e+306,"618":403,"893":"B[lX","":"W","5.878840329889728e+307":242}
return a*b/c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.5288038039415373e+308] = {"618":1.6494729453758304e+308,"627":823,"893":655,"":403,"b":25,"a":"","=a":"vW","5.091074907954193e+307":122,"1.4529397027683426e+308":5e-324}
argument4[0] = 1.1627356548395632e+308
return a+b+c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = 1.1416246449084779e+308
base_2[0][0] = ""
return a*b/c*d
};
var argument5 = "";
var argument6 = 893;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = "(nZ"
argument8[5] = true
return a/b-c-d
};
var argument8 = "N";
var argument9 = 9.49011192338921e+307;
var base_0 = ["<y","J`v","#"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<y","J`v","#"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<y","J`v","#"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<y","J`v","#"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test754.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)