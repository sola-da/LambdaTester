





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][4] = null
base_0[3] = 1.4116395465683404e+308
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[9.551053197482062e+307] = [969,460,-1,823,403]
base_1[9] = {"122":893,"655":"w","714":"C","843":213,"=C":"2k?","":"","98b8Z":126,"5.370232740161178e+307":49,"1.7976931348623157e+308":"i"}
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['V'] = 8.534958188453232e+307
argument5 = true
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['k<7bJ'] = null
argument5['a8r['] = true
argument6[7] = [969]
return a-b/c
};
var argument5 = {"N)D":1.5617447582679254e+308};
var argument6 = true;
var base_0 = ["N","vL","^gx","4C]$t","]","p","PD"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","vL","^gx","4C]$t","]","p","PD"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","vL","^gx","4C]$t","]","p","PD"]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","vL","^gx","4C]$t","]","p","PD"]
var r_3= undefined
try {
r_3 = base_3.some(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test896.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)