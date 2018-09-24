





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 705
return a*b*c+d
};
var argument2 = null;
var argument3 = 2.386953294245258e+306;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [627,82,25,893,1.7976931348623157e+308,1.7976931348623157e+308,100,705,122,25]
argument4[0] = ["Ua","p38tP","k","G","]tAzLC0","v","v31","W;","+"]
argument6['8('] = [122,49,213]
return a*b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = ["I3","hB><t"]
base_2[7] = true
return a-b/c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = 242
argument7[2] = {"403":607,"460":"","783":"","1.2897048496832604e+306":2.0482134962732566e+306,"":"","#":25,"1.8440685894947903e+307":"","1.4830441451385347e+308":1.7976931348623157e+308}
argument6 = {"823":"","1.0926725297658841e+307":"tK","":1.7018527294435368e+308,"1.6810309921699507e+308":460,"1.248696891836384e+308":1.3137948998595314e+308,"1.7765705077828418e+308":-100,";O":1.0263236799540323e+308}
return a/b/c+d
};
var base_0 = ["u","SG&"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","SG&"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u","SG&"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u","SG&"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test204.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)