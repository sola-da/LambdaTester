





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = null
argument3[6] = null
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = 25
base_1[1][8] = [655,1.7976931348623157e+308]
argument3[3] = 2.6147333999840865e+307
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5e-324] = {"2":"","100":5.477980001045255e+307,"705":"","893":1.340128114440626e+307,"J":"{1","":7.717324337395375e+307,"4.777559944733011e+307":1.7657211688920654e+308,"I":"p$","&&":""}
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = [59,82,655,-100,969,403,627,0,126,627]
return a*b+c
};
var argument5 = r_1;
var base_0 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_3= undefined
try {
r_3 = base_3.some(argument4,argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)