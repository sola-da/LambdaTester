





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['1SHF1'] = "<"
argument2[2] = {"714":618}
argument2[-1] = 1.6665849165298918e+308
return a-b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = [705,823]
argument4[1.1881593224845412e+308] = 1.3925692257189157e+308
argument5[4] = ""
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1881593224845412e+308] = 403
argument6[0] = null
return a+b*c
};
var argument5 = true;
var argument6 = {"122":"F","":1.007138992193392e+308,"1.7976931348623157e+308":"","oU[":"","1.2051872823767734e+308":893,"3.756656315483873e+307":"","l":";]"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[157] = [122,100,100,893]
return a+b+c
};
var argument8 = "";
var argument9 = {"59":25,"893":893,"*W":213,"":"s","1.7808586203758249e+308":":"};
var base_0 = ["_",";",460,"@","6",607,126,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_",";",460,"@","6",607,126,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_",";",460,"@","6",607,126,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_",";",460,"@","6",607,126,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test392.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)