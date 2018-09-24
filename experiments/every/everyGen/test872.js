





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6706143966770798e+306] = "(`V4"
argument2[3] = [0,783,969]
return a/b+c
};
var argument2 = null;
var argument3 = [")|",")","R,","Z","m","s2","u-D"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"126":"]Y","969":8.423637513124959e+306,"6.875088638346082e+307":5.867343577005465e+307,"9.527735341699312e+307":1.5113086650967226e+308,"8.591092654248734e+307":595,"":25}
argument5['g]'] = "E(H"
argument5[3.3156198695370476e+307] = ["S","CQ<","k"]
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = null
argument6[5] = ["J",-100,0,213,607,"E","i(K&f","9L@"]
argument6[7] = false
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['sJRZP'] = null
return a*b-c
};
var argument7 = null;
var base_0 = ["Q:1","7o"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q:1","7o"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q:1","7o"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q:1","7o"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test872.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)