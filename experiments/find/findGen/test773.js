





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"0":893,"655":"xl","823":"V","":"","1.3107131183454087e+308":"","e":2.2217589797191006e+307,"4.534792221502822e+307":""}
argument3[460] = 122
base_0[1][1] = null
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [823,242]
return a/b-c
};
var argument3 = 82;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = false
argument6[3.7668525981726295e+307] = {"59":893,"":5.98771303384881e+307,"1.669963310431158e+308":"F-=W8","2.2113204324846106e+307":"I","6.170859824603625e+307":""}
argument7[783] = ["B","T&M|","_lv","+kRV","k","|5","^","9,","J","P^dW"]
return a+b/c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = {"893":"","Z":"d","f=":"C"}
base_3[6] = 1.7976931348623157e+308
base_3[5] = null
return a*b/c
};
var argument8 = null;
var base_0 = [843,705,843,618,0,403]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,705,843,618,0,403]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,705,843,618,0,403]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,705,843,618,0,403]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test773.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)