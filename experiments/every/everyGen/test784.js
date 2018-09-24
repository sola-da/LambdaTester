





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = ""
argument2[7] = null
return a*b-c
};
var argument2 = {"n4":"","1.7976931348623157e+308":893,"yC&":1.4868693313115482e+308,"":8.919963785872028e+307,"1.183895266631e+308":5.201142534041882e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = true
argument4[3.3156198695370476e+307] = {"0":893,"403":"","460":"Ff","969":6.996211073007563e+307,"":627,"1.539013017934425e+306":25,"6.535600982704818e+307":783,"1.3107131183454087e+308":"","e":2.2217589797191006e+307,"4.534792221502822e+307":""}
base_1[2][7] = null
return a-b/c
};
var argument4 = ["i{ZI","@4","[","-"];
var argument5 = {"893":1.669963310431158e+308,"1.603585634220521e+308":823,"5.98771303384881e+307":59,"F-=W8":2.2113204324846106e+307,"I":6.170859824603625e+307,"":1.7031037497782945e+308};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 1.7976931348623157e+308
return a-b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[783] = 213
base_3[3] = true
argument8[3] = ["|5",157,"9,",893]
return a+b/c
};
var argument8 = [82,157,122];
var base_0 = ["N","(",823]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","(",823]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","(",823]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","(",823]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test784.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)