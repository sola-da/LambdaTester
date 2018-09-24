





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['5pji-Y'] = null
argument2[1.9097830510613482e+307] = null
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = 25
argument3[-1] = [655,1.7976931348623157e+308]
argument3[1.1881593224845412e+308] = 2.6147333999840865e+307
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8.748669805137695e+307] = {"2":"","100":5.477980001045255e+307,"705":"","893":1.340128114440626e+307,"J":"{1","":7.717324337395375e+307,"4.777559944733011e+307":1.7657211688920654e+308,"I":"p$","&&":""}
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['5pji-Y'] = [59,82,655,-100,969,403,627,0,126,627]
return a*b+c
};
var argument5 = r_1;
var base_0 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","1","L","BM","q-$T_q","H","r","z","D"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)