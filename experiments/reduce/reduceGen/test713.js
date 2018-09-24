





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = null
argument1[4] = 25
return a*b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = ""
return a+b/c*d
};
var argument3 = 1.537441203217906e+306;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[82] = {"9.352423265288652e+307":"","1.2611758860921895e+307":"HNZ","5.22099919196133e+307":969,"":4.14245304281182e+307,"1.5212530297100392e+308":7.200870704539232e+307}
return a*b-c-d
};
var argument5 = r_2;
var argument6 = 1.1899684140402526e+306;
var argument7 = r_2;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = null
argument5[2.1280896016417002e+307] = ">|"
argument7[90] = {"823":1.3673355398607289e+308,"6.710356145433832e+307":"","4.0101555750546106e+307":"|jO!,","W":783,"6.019001405375562e+307":969,"5.974748738797892e+307":25,"2.2257451043973034e+307":"","":1.7552174166290383e+308}
return a*b*c-d
};
var base_0 = ["A","(","8r[","0","_z","odh","s8","<,?kJ!",")t>v"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A","(","8r[","0","_z","odh","s8","<,?kJ!",")t>v"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["A","(","8r[","0","_z","odh","s8","<,?kJ!",")t>v"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["A","(","8r[","0","_z","odh","s8","<,?kJ!",")t>v"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test713.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)