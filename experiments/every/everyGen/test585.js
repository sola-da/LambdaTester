





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6706143966770798e+306] = null
argument3[8] = 1.6952636985874023e+308
return a/b-c
};
var argument2 = ["N9","gG","e"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = -1
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 8.337448753341089e+307
argument7[2.4183178393969103e+306] = [0]
argument7[5] = false
return a-b*c
};
var argument6 = 126;
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = true
base_3[4] = {"49":2.7912324625688437e+307,"705":"z","783":242,"823":59,"jJ":1.5767346472025272e+308,"|d":403,"-100":2.9477498575346417e+307,"1.2850011987302841e+308":823,"7.287183722620789e+307":"K,O"}
base_3 = 2.3380495469783683e+306
return a+b/c
};
var argument9 = null;
var base_0 = [213,242,783,-1,705,607,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,242,783,-1,705,607,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,242,783,-1,705,607,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,242,783,-1,705,607,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test585.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)