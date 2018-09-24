





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ""
argument3[3] = 3.603343547711391e+307
base_0[3] = {"59":"","618":"","714":5.00163786815545e+307,"":1.4659786317661365e+307,"1.3902410217656567e+308":82,"7vQ,":607,",":705,"_":157}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 969
base_1 = null
base_1 = 122
return a+b+c
};
var argument3 = false;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.4183178393969103e+306] = null
base_2[1] = false
argument6[3] = "wj2RU_"
return a*b+c
};
var argument6 = r_2;
var argument7 = {"49":"","157":"","823":595,"X9":595,"M":-100,"1.0428333182957496e+308":"","2.0796254695279195e+307":"","H":6.930622702100845e+307};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[122] = ""
argument9[2] = false
argument10[6] = false
return a+b-c
};
var argument9 = ["w"];
var base_0 = ["u=d","_",82,1.7976931348623157e+308,"Q}","O"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u=d","_",82,1.7976931348623157e+308,"Q}","O"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u=d","_",82,1.7976931348623157e+308,"Q}","O"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u=d","_",82,1.7976931348623157e+308,"Q}","O"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test347.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)