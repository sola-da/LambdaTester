





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['W'] = [607,705,-1,783,843,213]
base_0[6] = [969,0,403,403,0,627,-1,126]
argument3['AA@'] = {"59":"ol@","1.0942387658535139e+307":"","1.325480637777473e+308":"","":"","1.618784515817327e+308":1.7145562351037491e+308,"K5y6":"@(t"}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['f-d'] = null
argument4[6.949630915607762e+307] = {"0":"=k","100":"","655":"`","705":"bN","893":"60*","[H$V":242,">":"LoB{5","2.2049047046121107e+307":"'"}
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['a8r['] = [0,823,242,460,59,893,126,213]
return a*b-c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = 1.7832498464537499e+308
argument7[6.770908161223588e+307] = "xKE"
argument7['AA@'] = {"595":823,"607":2.1809100433670638e+307,"705":"","V(":4.05391350146361e+307,"":4.435172083576355e+307,"1.520554674903074e+308":969,"3.2105472147493095e+307":1.7112838182700878e+308,"1.3808720152036936e+308":"K*","C":""}
return a/b*c
};
var argument6 = r_2;
var base_0 = [823,":",705,969,823,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,":",705,969,823,705]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,":",705,969,823,705]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,":",705,969,823,705]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test999.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)