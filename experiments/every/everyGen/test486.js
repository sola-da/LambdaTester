





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
argument3 = true
return a+b-c
};
var argument2 = {"0":"","607":3.7998029716183336e+307,"y":655,"9.573349314383778e+307":1.148703865208866e+308,"b?X":"$","1.1371096750142205e+308":618,"1.4221721035511214e+308":4.759974238319134e+307,"1.2605499321186522e+308":"","":3.9941254454980996e+307};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = "P"
return a*b*c
};
var argument5 = [627,607];
var argument6 = 9.83445691076359e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = {"607":"z","3.064361109834393e+307":1.0337175831966915e+308,"6.098955696676638e+307":"","5e-324":969}
return a+b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = "n"
return a-b+c
};
var argument9 = 7.643018954980029e+307;
var argument10 = false;
var base_0 = ["ah","Qu","s","2","Nl","="]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ah","Qu","s","2","Nl","="]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ah","Qu","s","2","Nl","="]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ah","Qu","s","2","Nl","="]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test486.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)