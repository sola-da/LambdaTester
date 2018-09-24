





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = 1.4697144707231902e+307
argument2[1.6798476101238045e+308] = [100,1.7976931348623157e+308,607,627,1.7976931348623157e+308,714]
argument2[1.6798476101238045e+308] = null
return a-b*c
};
var argument2 = false;
var argument3 = ["CLZ",126,-1,"LX%[E",";5","jE"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = [242,"h","^T"]
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['j'] = 8.766234994703975e+307
argument6[3] = null
base_2[1][3] = ""
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4.224481734419934e+307] = 82
argument7[1.6798476101238045e+308] = {"6.140262928479742e+307":1.7739236525405573e+308,"1.4347904083733444e+308":8.029141861757951e+307,"":969,"1.1325427122668634e+308":7.723189962411818e+307}
base_3[1]['{X'] = {"82":893,"126":8.954754862006279e+307,"627":1.7976931348623157e+308,"893":1.5997212612608173e+308,"1.2376565160676846e+308":"s","1.2770448615192557e+308":1.8422095330706592e+307,"[":"[B","":""}
return a*b+c
};
var argument7 = null;
var argument8 = null;
var base_0 = ["(]$",">","W","Z","4","fT:","oQ","="]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(]$",">","W","Z","4","fT:","oQ","="]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(]$",">","W","Z","4","fT:","oQ","="]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(]$",">","W","Z","4","fT:","oQ","="]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test309.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)