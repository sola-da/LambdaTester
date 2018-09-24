





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
base_0[2][8.05235215815219e+307] = ["%","zmRf","7","%O",">","-","z]y@{","IL"]
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = 82
argument4[4] = {"":126,"C":""}
return a/b+c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = null
argument5[2] = {"1.3994077659893325e+308":"","u":"s"}
argument6[5] = null
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = {"82":"8W","5e-324":59,"4.937577796209063e+307":618,"1.042407307702738e+308":59,"6.393125746078677e+307":"","h7":59,"1.550325009279829e+308":823}
argument5['VsR'] = "h"
return a/b+c
};
var argument6 = r_0;
var base_0 = ["[k",1.7976931348623157e+308,-1,";","unN#",-1,-1,"e","Oct"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[k",1.7976931348623157e+308,-1,";","unN#",-1,-1,"e","Oct"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[k",1.7976931348623157e+308,-1,";","unN#",-1,-1,"e","Oct"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[k",1.7976931348623157e+308,-1,";","unN#",-1,-1,"e","Oct"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)