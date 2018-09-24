





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[714] = 1.4697144707231902e+307
base_0[1][2] = [100,1.7976931348623157e+308,607,627,1.7976931348623157e+308,714]
base_0[1][1] = null
return a-b*c
};
var argument2 = false;
var argument3 = ["CLZ",126,-1,"LX%[E",";5","jE"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = [242,"h","^T"]
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = 8.766234994703975e+307
argument6[3] = null
base_2[0][5e-324] = ""
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 82
base_3[1][1] = {"6.140262928479742e+307":1.7739236525405573e+308,"1.4347904083733444e+308":8.029141861757951e+307,"":969,"1.1325427122668634e+308":7.723189962411818e+307}
argument8[3.7154103611117224e+307] = {"82":893,"126":8.954754862006279e+307,"627":1.7976931348623157e+308,"893":1.5997212612608173e+308,"1.2376565160676846e+308":"s","1.2770448615192557e+308":1.8422095330706592e+307,"[":"[B","":""}
return a*b+c
};
var argument7 = null;
var argument8 = null;
var base_0 = ["(]$",">","W","Z","4","fT:","oQ","="]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(]$",">","W","Z","4","fT:","oQ","="]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test309.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)