





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.960033715165713e+307] = 607
argument2[4.960033715165713e+307] = {"126":"","242":"I","403":3.5485180808677176e+307,"595":59,"":403,"6.003058328770045e+307":"u","[":3.041319302136282e+307,"|,0":"|"}
argument2[4] = {"3.045063190557082e+307":607,"":9.039608676339056e+306,"e":""}
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"1.2807315462030686e+308":"","":"","f9":"3[","1.1623049905021237e+308":"nt","!":"e"}
return a*b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2.4183178393969103e+306] = 1.103769325312397e+308
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = ["^","v]*5)P","n8","KLAo-?","r","M","V"]
base_3[0][2] = "7s"
argument6[403] = null
return a/b/c
};
var base_0 = [213,969,100,627,714,714,893,1.7976931348623157e+308,157]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,969,100,627,714,714,893,1.7976931348623157e+308,157]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,969,100,627,714,714,893,1.7976931348623157e+308,157]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,969,100,627,714,714,893,1.7976931348623157e+308,157]
var r_3= undefined
try {
r_3 = base_3.every(argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test411.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)