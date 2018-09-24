





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = ["o","&%?A","?","{s<mG","A0","WSI","hk`SnBF","C"]
base_0[9] = 1.2759508433668009e+307
base_0[1] = null
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.6706143966770798e+306] = ")"
return a+b/c
};
var argument3 = 3.017303895835011e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = ["$","o","H","pn<"]
return a+b/c
};
var argument5 = {"705":"","823":-1,"1.002226951502341e+308":"","1.212695596345221e+308":"","IZ9A":"",":j_":1.238159866829245e+308,"[":2.632565577244094e+307,"3.9542393684932984e+307":6.400633901366201e+307,"n,5s@s":607};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = [595,705,893,126,122,-100,705]
base_3[0][0] = "2@uW"
return a*b-c
};
var base_0 = [82,823,843,893,705]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,823,843,893,705]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,823,843,893,705]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,823,843,893,705]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test779.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)