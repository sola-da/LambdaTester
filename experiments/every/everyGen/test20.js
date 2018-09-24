





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = "|Y:a(L)h%='BHT6"
base_0[7] = {"403":126,"1.335145991995537e+308":"","":"","@St":"1","6.444829343698777e+306":"","s":"f","1.7976931348623157e+308":"[Kv"}
return a*b/c
};
var argument2 = {"4":")","122":"","403":"","893":783,"969":783,"1.0583926295170147e+308":595,"":1.4805221949558912e+308,"o":242,"6.805671506347077e+307":5.012887173795741e+307,"1.7783794731378768e+308":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"157":9.26004844424454e+307,"u":1.95504578364199e+307,"-1":893,"v1":460,"1.2112189117890914e+308":"","":"","1.4655659494169034e+308":"c","lpe<z":""}
base_1[2] = "6"
return a*b-c
};
var argument4 = r_0;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = [655,714,100,655,460,126]
base_2[7] = ""
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = 25
return a/b/c
};
var base_0 = ["N","l8","J[","]","Un"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","l8","J[","]","Un"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","l8","J[","]","Un"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","l8","J[","]","Un"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test20.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)