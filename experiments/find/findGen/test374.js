





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3.377960715099946e+307] = null
argument3['AA@'] = {"":"k]$","6.713450985918488e+307":100}
argument3['AA@'] = "0]li}"
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = ["g","!K","!|","OW"]
argument4 = {"122":1.1547181404281835e+308,"1.7976931348623157e+308":"","y":""}
argument4['!j'] = null
return a*b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = false
argument6[2] = ["Rfb","<","QT"]
base_2[4] = {"":"","4.022811125544743e+307":"","1.6397810958139083e+308":"]","f":1.3727712169451555e+308,"S(":2.313698477140179e+307,"mN":":9"}
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = false
base_3[3] = {"4":"","8":"d","49":"k","":"h","s":"M","3.876781966307997e+307":1.2858321991376156e+308,";":627,"9.643093834316737e+307":")D"}
argument5 = true
return a*b+c
};
var argument6 = null;
var argument7 = "";
var base_0 = ["n2N","&6","h","^A","^","m","$","T6L,>"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n2N","&6","h","^A","^","m","$","T6L,>"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n2N","&6","h","^A","^","m","$","T6L,>"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n2N","&6","h","^A","^","m","$","T6L,>"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test374.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)