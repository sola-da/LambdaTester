





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.960033715165713e+307] = [126,607,122,126,607,49,1.7976931348623157e+308,-1,25]
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.3156198695370476e+307] = {"0":"","242":"","9.372998880702355e+307":"","":"J","4.904186014994623e+307":1.0792605563541612e+308,"f":"`Sk","1.0289896489889677e+308":"!@Fc[","4.2350188500896063e+307":"","YX":-1,"4.3704348125305416e+307":403}
return a+b+c
};
var argument3 = false;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = "@d"
argument7[4] = {"":49,"1.172568723004133e+308":6.396005932655485e+307,"5e-324":213,"1.358831470734552e+308":8.317003629686117e+307}
return a+b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = true
argument7[3.3156198695370476e+307] = null
return a*b/c
};
var base_0 = ["2)g","|","e9","j(-@q","5"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2)g","|","e9","j(-@q","5"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2)g","|","e9","j(-@q","5"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2)g","|","e9","j(-@q","5"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test927.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)