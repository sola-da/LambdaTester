





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ""
argument1[9] = {"100":"<CC,","460":"P","595":"","893":6.94072178004655e+307,"":"YI","8.104013240331916e+307":"u9gd","1.051367457415528e+308":618,"1.560649049829611e+308":49}
return a/b-c/d
};
var argument2 = null;
var argument3 = true;
var argument4 = 82;
var argument5 = null;
var argument6 = {"":" Q"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = 1.5381697262917624e+308
return a*b+c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = "G"
argument10[90] = {"0":"","49":"_j8","705":1.2919322198366426e+308,"I":"","":""}
base_2[1][3] = {"0":1.7650700449234161e+308,"126":"","607":"v}jgS","823":"}e_2","":"","1.178911065988573e+308":"","V":"q}N","-100":"","5.729895766224845e+307":7.926093517391783e+307}
return a-b+c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = 969
argument11[627] = [460,"Z*P","v3",823,122,823,242,655,")en:T"]
argument11[2] = {"242":122,"":":=","1.1256607326122407e+308":4.560277336943018e+307,"4.645665012422871e+306":"","](J":"","g":705,"9.29493270883707e+307":"{","&":"V)","6.865445323943246e+307":1.0816377165693247e+308}
return a*b/c/d
};
var base_0 = [242,100,242,705,618,714,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,100,242,705,618,714,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,100,242,705,618,714,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,100,242,705,618,714,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test490.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)