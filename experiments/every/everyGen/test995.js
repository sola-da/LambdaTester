





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = 403
base_0[7] = {"59":1.7976931348623157e+308,"618":"","893":"p","1.3129053369843873e+308":213,"1.6881526056083587e+308":"i","1.0612159623430506e+308":893,"Y":"a(","8.54710658544865e+307":2.6320358142973813e+307}
return a+b+c
};
var argument2 = 25;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = 1.420308085310921e+308
return a-b-c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.6706143966770798e+306] = 0
argument6[1] = null
return a+b+c
};
var argument6 = {"607":"","5wN":"Qj&%K3sN","":"^"};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = ""
argument10[6] = null
base_3[1][5] = {"":";"}
return a-b-c
};
var argument9 = "7";
var argument10 = 59;
var base_0 = ["m",843,893,403,"%J","?",655,893,"_"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m",843,893,403,"%J","?",655,893,"_"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m",843,893,403,"%J","?",655,893,"_"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m",843,893,403,"%J","?",655,893,"_"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test995.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)