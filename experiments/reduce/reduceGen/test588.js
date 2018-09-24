





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = null
argument2[4] = -100
base_0[1] = null
return a/b*c+d
};
var argument2 = 705;
var argument3 = 100;
var argument4 = null;
var argument5 = "?";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = null
return a/b+c/d
};
var argument7 = [59,"GB?","R",1.7976931348623157e+308];
var argument8 = false;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = {"403":1.5332286028839482e+307,"607":9.11615253452701e+307,"655":6.699469459131905e+307,"":"<","I}C":6.080250880338973e+306,"1.7875371876098288e+308":1.618355747058555e+308,"1.6227807352469352e+308":1.3536370969934171e+308,"*Z":100,"ga`":"X"}
return a/b/c*d
};
var argument11 = {"655":"*"};
var argument12 = false;
var argument13 = {"157":6.999426511334578e+307,"mkP":"","!":"3","":"rz","1.7598446004261243e+308":"s","6.960615974593301e+307":""};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = true
base_3[2] = 1.4414968498356372e+308
return a-b-c+d
};
var base_0 = [213,783,783,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,783,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,783,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,783,783,213]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test588.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)