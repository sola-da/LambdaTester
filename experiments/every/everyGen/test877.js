





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = true
return a*b-c
};
var argument2 = {"59":"&9","80":"","157":893,"242":"v0BH","1.7977189330522988e+307":"","7.403948353854053e+307":"5"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][7] = null
argument5[4] = [618,"@","Vl","2",823,213,"?L"]
base_1[1][5] = {"893":1.7883333668932724e+308,"":9.41199922614702e+306,"n:":1.4500967752202492e+308,"1.4562261678048385e+308":""}
return a+b*c
};
var argument4 = [595,-1,25];
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = 1.6687704716410815e+308
base_2[1][5] = null
return a+b*c
};
var argument7 = 126;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = 823
base_3[2][7] = {"gk":"","7.730846957707493e+306":""}
argument10['sJRZP'] = 242
return a-b*c
};
var argument10 = [82,"#","o",25,843,"9B","%","m","n",122];
var base_0 = ["71q","O",")"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["71q","O",")"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["71q","O",")"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["71q","O",")"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test877.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)