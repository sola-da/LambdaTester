





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = null
argument2[627] = {"25":"I$$$O","100":"z","403":5.91502828511245e+307,"893":"","9.582689643818305e+307":9.976925004180251e+307,"1.5909250434714532e+308":"AO","":"","u:f":"","1.5262926744104748e+308":1.586348933062314e+308,"2.587602547960195e+307":""}
return a-b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.738403780925446e+308] = null
argument3['w'] = true
argument3['w'] = [460,969]
return a*b-c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = [607,5e-324,126]
argument3 = {"59":242,"969":"sqn","1.3112379873591054e+308":",","z*`H>Pbz":2.272134136695333e+307}
return a/b*c/d
};
var argument4 = r_1;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2] = [-100,714]
return a/b*c/d
};
var argument7 = r_2;
var argument8 = r_1;
var base_0 = ["$","(","Q","I"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","(","Q","I"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","(","Q","I"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","(","Q","I"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test251.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)