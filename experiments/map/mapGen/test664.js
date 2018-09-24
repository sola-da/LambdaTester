





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3.5329845145600404e+307] = {"0":1.5398784439383373e+308,"100":"","403":"9jv","1.7976931348623157e+308":"","5tC":"","1.4016567257205302e+308":"","":"vM!","1.3740217614404171e+308":"8!2"}
argument2[4] = 1.7967965389919121e+308
return a*b*c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = true
argument5[1]['d'] = [-100,1.7976931348623157e+308,213,-100,-1,157,893]
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.6177106033227046e+308] = -1
return a/b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = ""
base_3[9] = {"100":"","":1.297546952190857e+308,"pW":"zG","G":"*Qz(?wUOc","1.1650371833710504e+306":-1,"1.39234408269466e+308":""}
return a/b/c
};
var argument8 = false;
var base_0 = ["2","L#","t?u","?u","`","76","h?","Ap","M"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","L#","t?u","?u","`","76","h?","Ap","M"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","L#","t?u","?u","`","76","h?","Ap","M"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","L#","t?u","?u","`","76","h?","Ap","M"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test664.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)