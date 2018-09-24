





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = null
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = {"0":"i","213":843,"969":1.5765894070365226e+306,"R;r":")%","3.854949138238226e+307":1.4789370993921887e+308,"1.0251862271714343e+308":1.7976931348623157e+308,"":"","?[":1.0536955036862481e+308,"1.394497268419084e+307":59,"-1":2.536204046280079e+307}
base_1['length'] = null
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = ""
argument4[6.447566193969e+307] = {"213":1.7010282680235213e+308,"618":"","823":"","":"D","-100":4.785027257529861e+307,"L":893}
base_2[0][0] = true
return a/b-c
};
var argument4 = {"82":1.1535220114644507e+308,"595":"(R","":0,"6.649215315624498e+307":242,"1.561780162715186e+308":242,"S":"TU&D?","tc":"S","1.4823373928521157e+308":3.7533535686937563e+307};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = true
base_3[5]['VsR'] = null
argument7[2.4183178393969103e+306] = [157,5e-324]
return a+b-c
};
var argument6 = true;
var base_0 = ["aK",969]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["aK",969]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["aK",969]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["aK",969]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test990.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)