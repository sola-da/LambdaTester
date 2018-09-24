





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AA@'] = true
argument2[0] = false
return a-b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][6] = {"49":"4X","59":"C)Z","460":1.350316967307615e+308,"714":1.075312907907689e+308,"969":655,"":655,"8.215048424782598e+307":"","f":"3","1.7976931348623157e+308":1.3278217962574133e+308,"!":3.53344621833066e+307}
base_1[0][0] = null
argument4[1.399309004356655e+308] = ["=","1U",";0hV","8","891KP<","5=","K","fNW&=S"]
return a-b-c
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[460] = "D"
argument8[0] = {"59":655,"4.989309227716171e+307":25,"3.7603353200832835e+307":"Nt"}
argument7[1.399309004356655e+308] = null
return a*b+c
};
var argument7 = 6.479711768635933e+307;
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
base_3['length'] = false
argument10[5] = {"595":1.7976931348623157e+308,"655":"7Y","893":"?T","1.1458328234987383e+308":6.176713861667106e+307,"1.286790393125043e+308":5.423897616973014e+306,"1.0035058270563198e+308":"p{c","#":157,"-1":969}
return a-b-c
};
var argument10 = false;
var argument11 = false;
var base_0 = [82,-1,627,607,893,213,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-1,627,607,893,213,783]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-1,627,607,893,213,783]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-1,627,607,893,213,783]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test332.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)