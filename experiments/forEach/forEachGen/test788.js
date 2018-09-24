





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.224481734419934e+307] = {"6.207430596170076e+307":"","":4.414467764799694e+305,"3.030378908693713e+307":"[q","`RX":"","5e-324":403}
base_0[1][1] = false
argument3[49] = [82,157,126,49,403,242,213]
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = [213,157,-1,1.7976931348623157e+308,618,627,714,-1]
argument3[5.062647675476955e+307] = {"122":8.434188508177795e+307,"969":-100,"9.495122373668499e+307":49,"1.6971613110294745e+308":"jQ[`"}
argument3['-'] = null
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['D'] = true
return a+b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][1] = {}
base_3[5] = {"618":"{","6.437939309810687e+307":-1}
argument6[8.639664788900972e+307] = {"0":1.7976931348623157e+308,"157":1.7976931348623157e+308,"714":"","893":"yC&","1.4868693313115482e+308":"","8.919963785872028e+307":1.183895266631e+308,"5.201142534041882e+307":3.416069596249025e+307,"1.6787613381910634e+308":"","9.56649819231392e+307":"O","":627}
return a-b-c
};
var argument6 = "";
var argument7 = {"0":783,"1.539013017934425e+306":25,"6.535600982704818e+307":783,"1.3107131183454087e+308":""};
var base_0 = [5e-324,126,783,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,126,783,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,126,783,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,126,783,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test788.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)