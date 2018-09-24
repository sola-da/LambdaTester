





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = ""
base_0[0][0] = true
argument3[122] = 1.5223147136911197e+308
return a-b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['io'] = null
base_1[1][6] = ["k>","!>","q"]
return a*b*c
};
var argument4 = "@";
var argument5 = ["6n",783,893];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = [25,213,893]
argument7['io'] = ""
argument7[4.960033715165713e+307] = {"82":"FsX","100":4.1567169018634616e+307,"st":"","1.6005150876841966e+308":"","":2.3254772693344246e+307}
return a*b/c
};
var argument7 = ["*","|3",">",")","xiP8","=","B","O","S"];
var argument8 = "";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][6] = 4.133845558297476e+307
argument10['sJRZP'] = {"59":"","595":"","]K>u<":705,"Q":"K1:","W":"","":""}
argument10[3.3156198695370476e+307] = 100
return a+b/c
};
var base_0 = [627,"d","b`L(Lnd",618,714,59,"<a",714,"z","Y>="]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,"d","b`L(Lnd",618,714,59,"<a",714,"z","Y>="]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,"d","b`L(Lnd",618,714,59,"<a",714,"z","Y>="]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,"d","b`L(Lnd",618,714,59,"<a",714,"z","Y>="]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test513.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)