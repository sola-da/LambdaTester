





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"126":"% -$","655":"","1.3697700927298416e+308":"X`","":"","4.2417447168417806e+307":"X9","?*":"8D*(N)"}
return a*b/c
};
var argument2 = {"25":8.98871574105561e+307,"82":2.7798921031962303e+307,"122":157,"595":"","969":823,"":"6","1.236199985155341e+308":1.6867091063331294e+308,"1.2559538218849188e+308":1.0071186350169818e+308,"$d":242,"=":"u"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 1.2968546555687096e+307
return a*b+c
};
var argument4 = "Z";
var argument5 = [595];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = ""
argument8 = false
argument7[3.7668525981726295e+307] = {"JVF8}":"l!"}
return a+b+c
};
var argument7 = 100;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = [627,"]",627,157,"&","Z",893,"m","s"]
argument10['AO?'] = [607,59]
argument9[627] = null
return a*b*c
};
var base_0 = ["1","t","M","M","f","Ob","h:,<2","nk"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","t","M","M","f","Ob","h:,<2","nk"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","t","M","M","f","Ob","h:,<2","nk"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","t","M","M","f","Ob","h:,<2","nk"]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test7.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)