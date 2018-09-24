





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = ""
argument2[1.3599216339661573e+308] = {"595":627,"1.7146282182241026e+308":-100,"FU":"","&'":""}
argument2[122] = ["smR7m",">|G5ud"]
return a+b-c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"":460,"1.5038759375659363e+308":"","8.504697039270065e+307":1.7976931348623157e+308,"1.9825839237098884e+307":595}
return a+b/c
};
var argument5 = 1.4579760491804007e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.3156198695370476e+307] = null
base_2[1][2] = true
return a-b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"e":213,"#":969,"d;":4.1011764257273306e+307,"":"","5.436502411914039e+307":1.0193696122332925e+308}
argument8[1.3599216339661573e+308] = null
return a*b/c
};
var argument8 = r_1;
var argument9 = true;
var base_0 = ["o",460,"x","U",-100,893,843]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o",460,"x","U",-100,893,843]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o",460,"x","U",-100,893,843]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o",460,"x","U",-100,893,843]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test818.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)