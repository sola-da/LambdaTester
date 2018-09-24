





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = ["#sLD","rL","Q","C_{{"]
argument2[7.463432409233234e+307] = ""
argument2 = true
return a-b*c*d
};
var argument2 = {"5":"?","627":627,"HwJHVT":627};
var argument3 = true;
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = true
base_1[0][9.12287810829114e+307] = {"0":9.600160771377692e+307,"1.194976613272339e+308":"","":1.2724843141356236e+308,"1.0267894125529564e+308":" ","Sk":213}
argument5 = ";*MtLT09"
return a*b*c*d
};
var argument7 = null;
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ""
argument7[0] = null
return a*b/c*d
};
var argument11 = {"783":":","!":"4","":"P"};
var argument12 = true;
var argument13 = true;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = null
return a-b/c+d
};
var base_0 = [0,5e-324,25,5e-324,843,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,5e-324,25,5e-324,843,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,5e-324,25,5e-324,843,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,5e-324,25,5e-324,843,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test102.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)