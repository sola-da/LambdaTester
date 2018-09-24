





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[705] = 2.565021540672811e+307
argument3['!j'] = {"595":-1,"3.2076197619118055e+307":893,"":655,"1.5232395215999079e+308":1.7582177976479734e+308,"1.4543044519907014e+308":";","g3P":3.352095584702617e+307,"5.031665293636634e+307":"d^"}
return a-b-c
};
var argument2 = null;
var argument3 = {"627":"","":"!","h'7o":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['W'] = [843,82,893,-1,49,618,893]
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[242] = "g"
base_2[0][3] = true
return a/b/c
};
var argument6 = {"705":"'","783":"","893":213,"9.843723978690768e+307":"Lv"," N":1.70658858229887e+308,"":"","*":1.809417075362443e+307,"1.6379131666494492e+308":"Fm","G":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = "!"
base_3[3] = {"705":893,"`":"","J":"5","":"2Qv","wg":59,"3.85647008878181e+307":"","iI6@fL":"^$R5","Vg%":0}
argument8[242] = 25
return a-b/c
};
var argument8 = r_2;
var argument9 = r_2;
var base_0 = ["$","rbV"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","rbV"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","rbV"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","rbV"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test783.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)