





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = [969,59,823,607,969,242,59]
base_0[1] = 1.7976931348623157e+308
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = [893,-100,"v","i",122]
argument4[4] = [":eYuo",627,714,893]
return a+b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['1SHF1'] = {"714":"Bm;","X":823,"7.564969788718492e+307":9.58973355070946e+307,"Z>L":"","":6.953192544217866e+307,"-100":"Y>yPr[","2.551163782560422e+307":"","O9'r":7.926412479491489e+307}
base_2[8] = ["zo","gk,",";","dJ","?7","OO{","_","G",">"]
argument5[1.4034744228995816e+308] = {"^v":"3x","-100":""}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = {"783":"","":1.4845159764575039e+308,"zsu=L":1.4611998308230543e+308,"7.060943761746867e+307":"%<t"}
base_3[4][4] = [25,82,403,893]
return a+b-c
};
var argument5 = r_0;
var base_0 = [783,82,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,82,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,82,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,82,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test87.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)