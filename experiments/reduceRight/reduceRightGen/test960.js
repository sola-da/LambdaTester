





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = "r"
argument3[5] = [122]
return a-b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[82] = null
argument3[8] = "r"
argument3['{S'] = {"213":"","1.0080099265726054e+308":"!AvjB,","2.639607230767327e+307":2.0041822415120995e+307}
return a-b+c-d
};
var argument3 = ["D","D","s","ZspC>oB#","K","$I#","s",",^"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"25":"T$rH","1.4922656422352457e+308":1.3356385141713356e+308,"q":"db","5.776370375659783e+307":"nA"}
argument6[6] = false
argument5['{S'] = [823,25,969,49,460]
return a*b-c+d
};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[62] = [1.7976931348623157e+308,403,403]
argument8[3] = null
argument7[25] = [655,0,126,"Xh","M","1",714]
return a*b+c+d
};
var base_0 = [607,242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test960.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)