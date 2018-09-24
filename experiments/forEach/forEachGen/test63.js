





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"100":1.5581908984183862e+307,"157":"F_","1.6044467762533689e+308":4.855784219588827e+307,"1.2991500454663309e+308":655,"":"","9.752047977604405e+307":9.130189455683348e+307}
base_0[0][1] = {"qh_":4.697708005571185e+306}
return a-b/c
};
var argument2 = true;
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][0] = null
argument5[6] = ["g>","-","L","YH5b","Yw","B","J"]
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"595":3.182467538084484e+307,"":403,"(`M3":655}
argument6 = 823
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = 2.337001282255845e+307
return a+b+c
};
var argument7 = r_0;
var argument8 = r_1;
var base_0 = [")","s",595,"H","IIs",969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")","s",595,"H","IIs",969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")","s",595,"H","IIs",969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")","s",595,"H","IIs",969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test63.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)