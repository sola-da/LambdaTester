





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = null
base_0[6][2] = 705
argument2[4] = 1.4464379461567517e+308
return a+b/c/d
};
var argument2 = [627,0,0];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = [59,618,59,0]
return a*b/c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = "J$"
argument6[0] = "V"
argument5[7] = 242
return a*b-c-d
};
var argument5 = {"25":618,"655":"","":"","'w%":"[","DyX":1.4324961336853825e+308,"y":460};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['{S'] = {"714":"","823":"","9.532518828924407e+306":"","":"g"}
argument8[0] = false
return a-b*c+d
};
var argument7 = r_2;
var base_0 = ["+",460,122]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+",460,122]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+",460,122]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+",460,122]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test257.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)