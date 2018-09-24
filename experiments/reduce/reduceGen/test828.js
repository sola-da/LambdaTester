





var callbackArguments = [];
var argument1 = true;
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = null
return a+b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"618":5.16671297894348e+307,"mZo@":607,"":893}
return a-b+c*d
};
var argument6 = r_1;
var argument7 = 1.5716516014621414e+308;
var argument8 = false;
var argument9 = 1.3037096643116177e+308;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"":1.4717066596060831e+308,"1.7897125973979336e+308":"G","1.0949502051512168e+308":893}
base_2[0][3] = 843
argument8[3] = "4"
return a*b-c-d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[893] = {"126":242,"714":"","4.7762611644605235e+307":157,"":"xe","V":"Nq","1.1258515951489556e+308":9.001089009275337e+306,"!Oz7":1.4086978449650813e+308,"1.598920373607794e+308":"V","5.871418086598693e+307":126}
return a+b*c/d
};
var argument12 = null;
var base_0 = ["n","$","**,",655,627,"&",-100,"XY4",59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n","$","**,",655,627,"&",-100,"XY4",59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n","$","**,",655,627,"&",-100,"XY4",59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n","$","**,",655,627,"&",-100,"XY4",59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test828.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)