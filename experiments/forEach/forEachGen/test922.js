





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = 8.012735706585335e+307
argument2[1.3130321063336282e+308] = {"242":"XK","655":8.690592159054067e+306,"893":"-","9.258605555295628e+307":"","9.072123727582963e+307":1.1546783937189794e+308,"":213,"7.512055161523307e+307":"","1.3887192537041398e+308":"","S":5.470722189505318e+306}
argument2[8.639664788900972e+307] = 893
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][823] = "Q"
base_1[0][1.3591495256415733e+308] = false
argument4[59] = null
return a/b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2][783] = null
base_2[1] = ">"
base_2[7] = {"242":"","":"",";":"","3.1948585587133933e+307":1.022390110974654e+308,"6.569488096875047e+307":""}
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.748669805137695e+307] = [49]
argument6[460][1.2658989034477382e+308] = ["@","G=0","N","U"]
argument6['a'] = 25
return a+b*c
};
var base_0 = ["d"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test922.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)