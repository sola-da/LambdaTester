





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.551053197482062e+307] = [893,49,969,618,705,618,5e-324,627,655]
base_0[0] = true
return a+b-c
};
var argument2 = true;
var argument3 = 5.110760617108097e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = [607,126,403,242,157,969,82,969]
base_1 = 8.265155599579192e+307
return a*b-c
};
var argument5 = r_0;
var argument6 = ["^",";z","L","_","1M","C","!","$",")"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = "2A>"
base_2[1][2] = [460,595,403]
return a*b*c
};
var argument8 = {"607":1.0249373245685668e+308,"714":2.891716305513161e+307,"":157,"*":";]:s","WV":3.3588773354184643e+307,"h":"ia%l",")y":618};
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[8] = true
argument11['f9zgt4n!ZJR]W'] = null
argument11['j'] = {"0":242,"607":"m","783":595,"'n":"","8.149369793329091e+306":"","9.807402158660984e+307":"7","":1.446599587843303e+308,"1.653879630867753e+308":"y","q":607,"U%":"d"}
return a*b+c
};
var argument11 = ["Rr","Aj","N@!","o","-5=","p","jK<mj"];
var argument12 = r_0;
var base_0 = ["G","Q","K^","@","0","u","#u","U","x","hxlx"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","Q","K^","@","0","u","#u","U","x","hxlx"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","Q","K^","@","0","u","#u","U","x","hxlx"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G","Q","K^","@","0","u","#u","U","x","hxlx"]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someGen/test679.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)