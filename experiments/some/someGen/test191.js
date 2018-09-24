





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"213":"","9.655439531837537e+307":"","1.4558911257947117e+308":1.4400994143766396e+308,"C2":627,"":1.4451062225792429e+308,",":"^VrZ"}
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = true
return a+b*c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5] = 893
base_2[0] = {"783":"","969":6.872941767595744e+307,"bjn":1.0414621755576014e+308,"8.405250956246933e+307":"[t","K'":1.5847438130256285e+308,"9.569002985309172e+307":"","2.0105539911095946e+307":1.4348415130363933e+307,"5e-324":823}
base_2[4][8] = {"25":1.614133961669199e+308,"893":"","H":823,"4.959281066363809e+306":"","&":843,"1.2646911757580742e+308":25,"3.5591315285122567e+307":""}
return a/b/c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.249941463060761e+307] = 1.1895213337105842e+308
return a*b/c
};
var argument7 = r_3;
var base_0 = ["x","6","6bSf","1mF","s","N","7","8^-","N","y"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x","6","6bSf","1mF","s","N","7","8^-","N","y"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x","6","6bSf","1mF","s","N","7","8^-","N","y"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x","6","6bSf","1mF","s","N","7","8^-","N","y"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test191.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)