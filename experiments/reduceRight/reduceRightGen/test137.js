





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 5.368060835326275e+307
return a/b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {}
argument2[0] = {"i5E":1.581480578028131e+308,"C2":7.592049332907521e+307,"":7.824931989439305e+307,"1.680555240321841e+308":"","W%":1.7976931348623157e+308,"6glLw?IV%V":"?Fj","5e-324":5.821860869131808e+307}
return a+b+c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['{S'] = 655
argument4[2] = true
base_2[0][0] = [1.7976931348623157e+308,893,655,607,618]
return a*b-c+d
};
var argument4 = "!lQ@";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = false
return a/b/c-d
};
var argument6 = true;
var argument7 = "";
var base_0 = ["zb","2","*Ij","I[",">",",b[BN","m","6","o"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["zb","2","*Ij","I[",">",",b[BN","m","6","o"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["zb","2","*Ij","I[",">",",b[BN","m","6","o"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["zb","2","*Ij","I[",">",",b[BN","m","6","o"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test137.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)