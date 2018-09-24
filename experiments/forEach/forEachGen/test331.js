





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = true
base_0[6] = {"403":"","655":"@$i","6.238529230416802e+307":9.58365731040654e+307,"1.7976931348623157e+308":100,"":"wGGM!","-100":1.5494624257869865e+307,"1.6139879554455084e+308":"21"}
base_0[3][0] = "a?"
return a*b/c
};
var argument2 = ["^]O","D[",59,893,-100,"s"];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['U+WQ'] = [49,"u","M|r"]
argument6[59] = 783
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = true
argument7[5] = [783,-100,843,607,705]
return a*b/c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = ["]g"," ","$g@","$",">i&]q","?b","}M(","^","d|"]
base_3[1] = ["aO=W^g^",25]
argument8[-1] = ["8%n","p,=","(","L","#W"]
return a+b-c
};
var argument8 = [705,714,705];
var base_0 = [843,"G","U",714,-1,"T","9s9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,"G","U",714,-1,"T","9s9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,"G","U",714,-1,"T","9s9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,"G","U",714,-1,"T","9s9"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test331.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)