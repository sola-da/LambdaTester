





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = 618
base_0[6] = [100,655,783,403,82,655,0,1.7976931348623157e+308,25]
argument3[2.4183178393969103e+306] = null
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = ["_!_","2"]
base_1['length'] = 0
return a*b-c
};
var argument4 = {"213":1.5838780771944055e+308,"705":"","":"S'z","7.800299702407459e+307":"$@"};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.3156198695370476e+307] = 242
base_2[0][2] = [893,"gwz","yo5^cN>=",607,"_3",25,627,126,"W","M8"]
return a-b-c
};
var argument7 = r_0;
var argument8 = -100;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = 1.3200506844793254e+308
argument11 = {"2.298612494629666e+307":"","&+":"Ucu3#"}
return a-b-c
};
var argument10 = r_0;
var base_0 = ["k","q","di","w"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","q","di","w"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","q","di","w"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","q","di","w"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test824.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)