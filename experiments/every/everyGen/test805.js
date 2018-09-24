





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][2] = 1.0601851306406651e+308
return a-b/c
};
var argument2 = false;
var argument3 = [157,242,783,82,">3Q",893,"X5q"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.3156198695370476e+307] = null
argument5[6] = null
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = null
base_2[8] = null
argument5[2] = "kD"
return a*b-c
};
var argument6 = null;
var argument7 = 1.7594054543243066e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = {"157":"","":""}
argument10[122] = [")5pji-Y",705,"AdBj","mA$",655]
argument9[1.9097830510613482e+307] = 1.4496329372983365e+308
return a/b/c
};
var base_0 = ["u","=v",126,"D",595,"=",":",59]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","=v",126,"D",595,"=",":",59]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u","=v",126,"D",595,"=",":",59]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u","=v",126,"D",595,"=",":",59]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test805.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)