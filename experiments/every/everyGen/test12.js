





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = true
base_0['length'] = ""
return a-b-c
};
var argument2 = {"82":783,"403":"","618":"","893":"ycA1r;_","":893,"6.625527806389795e+307":843,"1.1109514721227221e+308":":","uEa":"","2:":403,"HG4":"z3"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = 618
return a-b/c
};
var argument4 = r_1;
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = null
return a+b-c
};
var argument7 = {"122":"","783":1.1726035183858147e+308,"":5.577490814676164e+307,"}9":"H","(":"","3.4638506627152225e+307":"k","6.21022672035132e+307":"zO","3.3156198695370476e+307":618,"1.548827057841199e+308":"","6.951056591180673e+307":1.2559734900288215e+308};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = ""
base_3[7] = true
return a+b*c
};
var argument9 = true;
var base_0 = ["9",59,618,59,"a","2"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9",59,618,59,"a","2"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9",59,618,59,"a","2"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9",59,618,59,"a","2"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test12.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)