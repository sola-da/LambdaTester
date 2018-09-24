





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = 1.6165051842063913e+308
base_0[1][2] = null
argument2['^N'] = 403
return a+b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = ""
argument3[6] = ["2","oHL@-Ho","q","%N"]
base_1[8] = {"213":1.9097830510613482e+307,"":"SR","W":"_","9.351701935709114e+307":1.6275086071205838e+308,"<":"t","*":9.342373364553928e+307,"B":""}
return a/b/c+d
};
var argument3 = false;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['{S'] = false
base_2[0][2] = -100
return a/b/c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.8120440085202614e+307] = {"9":82,"82":"o","595":"","893":"f","":655}
return a*b*c-d
};
var base_0 = [5e-324,5e-324,627,0,-100,714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,5e-324,627,0,-100,714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,5e-324,627,0,-100,714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,5e-324,627,0,-100,714]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test561.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)